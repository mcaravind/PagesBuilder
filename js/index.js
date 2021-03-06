﻿var fs = require('fs'),
    path = require('path');
var gui = require('nw.gui');

function dirTree(filename) {
    var stats = fs.lstatSync(filename),
        info = {
            title: path.basename(filename),
            key: filename,
            path: filename,
            name: path.basename(filename)
        };

    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function (child) {
            return dirTree(filename + '\\' + child);
        });
    } else {
        // Assuming it's a file. In real life it could be a symlink or
        // something else!
        info.type = "file";
    }
    return info;
}

$(function () {
    window.editorCreated = 0;
    $("textarea").sceditor({
        plugins: "xhtml",
        style: "minified/jquery.sceditor.default.min.css"
    });
    
    $("#folderSelector").on("change", function () {
        var files = $(this)[0].files;
        $("#currentWorkingFolder").val(files[0].path);
        var pwd = files[0].path;
        var dirJson = JSON.stringify(dirTree(pwd));
        var arr = getTreeFromJson(dirJson);
        loadFullTree(arr);
    });
    $("#currentWorkingFolder").prop("readonly", true);
    $("#divEditor").addClass('disabledbutton');
    function Menu(cutLabel, copyLabel, pasteLabel) {
        var gui = require('nw.gui')
          , menu = new gui.Menu()

          , cut = new gui.MenuItem({
              label: cutLabel || "Cut"
            , click: function () {
                document.execCommand("cut");
                console.log('Menu:', 'cutted to clipboard');
            }
          })

          , copy = new gui.MenuItem({
              label: copyLabel || "Copy"
            , click: function () {
                document.execCommand("copy");
                console.log('Menu:', 'copied to clipboard');
            }
          })

          , paste = new gui.MenuItem({
              label: pasteLabel || "Paste"
            , click: function () {
                document.execCommand("paste");
                console.log('Menu:', 'pasted to textarea');
            }
          })
        ;

        menu.append(cut);
        menu.append(copy);
        menu.append(paste);

        return menu;
    }

    var menu = new Menu(/* pass cut, copy, paste labels if you need i18n*/);
    $(document).on("contextmenu", function (e) {
        e.preventDefault();
        menu.popup(e.originalEvent.x, e.originalEvent.y);
    });
    
});

function loadFullTree(tree) {
    try {
        var tree1 = $("#treeDiv").fancytree('getTree');
        tree1.reload(tree);
        
    } catch (ex) {
        $("#treeDiv").fancytree({
            source: tree,
            click: function (event, data) {
                //console.log(data.node.title);
                window.currFileName = data.node.key;
                if (data.node.key.endsWith('.html') || (data.node.key.endsWith('.htm'))) {
                    $("#divEditor").removeClass('disabledbutton');
                    loadFileIntoEditor(window.currFileName);
                } else {
                    $("#divEditor").addClass('disabledbutton');
                }
            }
        });
    }
}

function loadFileIntoEditor(filename) {
    fs.readFile(filename, 'utf8', function (err, htmlData) {
        if (err) {
            return console.log(err);
        }
        var bodyStr = htmlData.replace(/^[\s\S]*<body.*?>|<\/body>[\s\S]*$/g, '');
        $("textarea").sceditor('instance')[0].insert(bodyStr);
        var iframe = document.getElementsByTagName("iframe")[0];
        $(iframe).attr('sandbox', 'allow-scripts allow-same-origin');
        $(iframe).attr('nwdisable', '');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        var iframeDocHead = iframeDocument.getElementsByTagName('head')[0];
        var currHeadVal = $(iframeDocHead).val();
        var newHeadVal = currHeadVal + '<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax: {inlineMath: [[\'$\',\'$\'], [\'\\\\(\',\'\\\\)\']]}});</script><script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>';
        $(iframeDocHead).val(newHeadVal);
    });
}

String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

function getTreeFromJson(json) {
    // preserve newlines, etc - use valid JSON
    json = json.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
    // remove non-printable and other non-valid JSON chars
    json = json.replace(/[\u0000-\u0019]+/g, "");
    //console.log(json);
    var arr = JSON.parse(json);
    return arr;
}

function saveIframeContents() {
    var iframe = document.getElementsByTagName("iframe")[0];
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var iframeHtml = iframeDocument.getElementsByTagName('html')[0];
    var bodyHtml = iframeHtml.getElementsByTagName('body')[0];
    $(bodyHtml).removeAttr('contenteditable');
    $(bodyHtml).removeAttr('dir');
    var str = $(iframeHtml).prop('outerHTML');
    var stream = fs.createWriteStream(window.currFileName);
    stream.once('open', function(fd) {
        stream.end(str);
    });
    loadFileIntoEditor(window.currFileName);
}

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function (file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}
