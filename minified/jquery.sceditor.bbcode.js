﻿/* SCEditor v1.4.7 | (C) 2015, Sam Clarke | sceditor.com/license */ ! function (a) {
	function b(d) {
		if (c[d]) return c[d].exports;
		var e = c[d] = {
			exports: {},
			id: d,
			loaded: !1
		};
		return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
	}
	var c = {};
	return b.m = a, b.c = c, b.p = "", b(0)
}([function (a, b, c) {
	var d;
	d = function () {
		"use strict";
		var a = c(1),
            b = c(2),
            d = c(3),
            e = c(4),
            f = c(5);
		a.sceditor = b, b.commands = c(6), b.defaultOptions = c(7), b.RangeHelper = c(8), b.dom = c(9), b.ie = e.ie, b.ios = e.ios, b.isWysiwygSupported = e.isWysiwygSupported, b.regexEscape = f.regex, b.escapeEntities = f.entities, b.escapeUriScheme = f.uriScheme, b.PluginManager = d, b.plugins = d.plugins, a.fn.sceditor = function (c) {
			var d, f, g = [];
			return c = c || {}, c.runWithoutWysiwygSupport || e.isWysiwygSupported ? (this.each(function () {
				d = this.jquery ? this : a(this), f = d.data("sceditor"), d.parents(".sceditor-container").length > 0 || ("state" === c ? g.push(!!f) : "instance" === c ? g.push(f) : f || new b(this, c))
			}), g.length ? 1 === g.length ? g[0] : a(g) : this) : void 0
		}
	}.call(b, c, b, a), !(void 0 !== d && (a.exports = d))
}, function (a) {
	a.exports = jQuery
}, function (a, b, c) {
	var d;
	d = function () {
		"use strict";
		var a = c(1),
            b = c(3),
            d = c(8),
            e = c(9),
            f = c(5),
            g = c(4),
            h = c(10),
            i = window,
            j = document,
            k = a(i),
            l = a(j),
            m = g.ie,
            n = m && 11 > m,
            o = function (c, p) {
            	var q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub = this,
                    vb = c.get ? c.get(0) : c,
                    wb = a(vb),
                    xb = [],
                    yb = [],
                    zb = [],
                    Ab = {},
                    Bb = [],
                    Cb = {};
            	ub.commands = a.extend(!0, {}, p.commands || o.commands), ub.opts = p = a.extend({}, o.defaultOptions, p), K = function () {
            		wb.data("sceditor", ub), a.each(p, function (b, c) {
            			a.isPlainObject(c) && (p[b] = a.extend(!0, {}, c))
            		}), p.locale && "en" !== p.locale && Q(), q = a('<div class="sceditor-container" />').insertAfter(wb).css("z-index", p.zIndex), m && q.addClass("ie ie" + m), H = !!wb.attr("required"), wb.removeAttr("required"), P(), W(), R(), O(), U(), S(), T(), g.isWysiwygSupported || ub.toggleSourceMode(), hb();
            		var b = function () {
            			k.unbind("load", b), p.autofocus && mb(), p.autoExpand && ub.expandToContent(), fb(), C.call("ready")
            		};
            		k.load(b), j.readyState && "complete" === j.readyState && b()
            	}, P = function () {
            		var c = p.plugins;
            		c = c ? c.toString().split(",") : [], C = new b(ub), a.each(c, function (b, c) {
            			C.register(a.trim(c))
            		})
            	}, Q = function () {
            		var a;
            		A = o.locale[p.locale], A || (a = p.locale.split("-"), A = o.locale[a[0]]), A && A.dateFormat && (p.dateFormat = A.dateFormat)
            	}, O = function () {
            		var b, c;
            		w = a("<textarea></textarea>").hide(), s = a('<iframe frameborder="0" allowfullscreen="true"></iframe>'), p.spellcheck || w.attr("spellcheck", "false"), "https:" === i.location.protocol && s.attr("src", "javascript:false"), q.append(s).append(w), t = s[0], x = w[0], ub.dimensions(p.width || wb.width(), p.height || wb.height()), b = X(), b.open(), b.write(h("html", {
            			attrs: m ? ' class="ie ie"' + m : "",
            			spellcheck: p.spellcheck ? "" : 'spellcheck="false"',
            			charset: p.charset,
            			style: p.style
            		})), b.close(), v = a(b), u = a(b.body), ub.readOnly(!!p.readOnly), (g.ios || m) && (u.height("100%"), m || u.bind("touchend", ub.focus)), c = wb.attr("tabindex"), w.attr("tabindex", c), s.attr("tabindex", c), B = new d(t.contentWindow), ub.val(wb.hide().val())
            	}, S = function () {
            		p.autoUpdate && (u.bind("blur", tb), w.bind("blur", tb)), null === p.rtl && (p.rtl = "rtl" === w.css("direction")), ub.rtl(!!p.rtl), p.autoExpand && v.bind("keyup", ub.expandToContent), p.resizeEnabled && V(), q.attr("id", p.id), ub.emoticons(p.emoticonsEnabled)
            	}, T = function () {
            		var b = m ? "selectionchange" : "keyup focus blur contextmenu mouseup touchend click",
                        c = "keydown keyup keypress focus blur contextmenu";
            		l.click(eb), a(vb.form).bind("reset", bb).submit(ub.updateOriginal), k.bind("resize orientationChanged", fb), u.keypress(ab).keydown($).keydown(_).keyup(jb).blur(rb).keyup(sb).bind("paste", Y).bind(b, kb).bind(c, db), p.emoticonsCompat && i.getSelection && u.keyup(ob), w.blur(rb).keyup(sb).keydown($).bind(c, db), v.mousedown(cb).blur(rb).bind(b, kb).bind("beforedeactivate keyup mouseup", N).keyup(jb).focus(function () {
            			z = null
            		}), q.bind("selectionchanged", lb).bind("selectionchanged", hb).bind("selectionchanged valuechanged nodechanged", db)
            	}, R = function () {
            		var b, c = ub.commands,
                        d = (p.toolbarExclude || "").split(","),
                        e = p.toolbar.split("|");
            		r = a('<div class="sceditor-toolbar" unselectable="on" />'), a.each(e, function (e, f) {
            			b = a('<div class="sceditor-group" />'), a.each(f.split(","), function (e, f) {
            				var g, i, j = c[f];
            				!j || a.inArray(f, d) > -1 || (i = j.shortcut, g = h("toolbarButton", {
            					name: f,
            					dispName: ub._(j.tooltip || f)
            				}, !0), g.data("sceditor-txtmode", !!j.txtExec).data("sceditor-wysiwygmode", !!j.exec).toggleClass("disabled", !j.exec).mousedown(function () {
            					(!m || 9 > m) && (J = !0)
            				}).click(function () {
            					var b = a(this);
            					return b.hasClass("disabled") || M(b, j), hb(), !1
            				}), j.tooltip && g.attr("title", ub._(j.tooltip) + (i ? "(" + i + ")" : "")), i && ub.addShortcut(i, f), j.state ? zb.push({
            					name: f,
            					state: j.state
            				}) : "string" == typeof j.exec && zb.push({
            					name: f,
            					state: j.exec
            				}), b.append(g), Cb[f] = g)
            			}), b[0].firstChild && r.append(b)
            		}), a(p.toolbarContainer || q).append(r)
            	}, U = function () {
            		a.each(ub.commands, function (b, c) {
            			c.forceNewLineAfter && a.isArray(c.forceNewLineAfter) && (yb = a.merge(yb, c.forceNewLineAfter))
            		}), jb()
            	}, V = function () {
            		var b, c, d, e, f, g, h = a('<div class="sceditor-grip" />'),
                        j = a('<div class="sceditor-resize-cover" />'),
                        k = "touchmove mousemove",
                        n = "touchcancel touchend mouseup",
                        o = 0,
                        r = 0,
                        s = 0,
                        t = 0,
                        u = 0,
                        v = 0,
                        w = q.width(),
                        x = q.height(),
                        y = !1,
                        z = ub.rtl();
            		b = p.resizeMinHeight || x / 1.5, c = p.resizeMaxHeight || 2.5 * x, d = p.resizeMinWidth || w / 1.25, e = p.resizeMaxWidth || 1.25 * w, f = function (a) {
            			"touchmove" === a.type ? (a = i.event, s = a.changedTouches[0].pageX, t = a.changedTouches[0].pageY) : (s = a.pageX, t = a.pageY);
            			var f = v + (t - r),
                            g = z ? u - (s - o) : u + (s - o);
            			e > 0 && g > e && (g = e), d > 0 && d > g && (g = d), p.resizeWidth || (g = !1), c > 0 && f > c && (f = c), b > 0 && b > f && (f = b), p.resizeHeight || (f = !1), (g || f) && (ub.dimensions(g, f), 7 > m && q.height(f)), a.preventDefault()
            		}, g = function (a) {
            			y && (y = !1, j.hide(), q.removeClass("resizing").height("auto"), l.unbind(k, f), l.unbind(n, g), a.preventDefault())
            		}, q.append(h), q.append(j.hide()), h.bind("touchstart mousedown", function (a) {
            			"touchstart" === a.type ? (a = i.event, o = a.touches[0].pageX, r = a.touches[0].pageY) : (o = a.pageX, r = a.pageY), u = q.width(), v = q.height(), y = !0, q.addClass("resizing"), j.show(), l.bind(k, f), l.bind(n, g), 7 > m && q.height(v), a.preventDefault()
            		})
            	}, W = function () {
            		var b, c = p.emoticons,
                        d = p.emoticonsRoot;
            		a.isPlainObject(c) && p.emoticonsEnabled && a.each(c, function (e, f) {
            			a.each(f, function (a, f) {
            				d && (f = {
            					url: d + (f.url || f),
            					tooltip: f.tooltip || a
            				}, c[e][a] = f), b = j.createElement("img"), b.src = f.url || f, xb.push(b)
            			})
            		})
            	}, mb = function () {
            		var b, c, d = v[0],
                        f = u[0],
                        g = f.firstChild,
                        h = !!p.autofocusEnd;
            		if (q.is(":visible")) {
            			if (ub.sourceMode()) return c = h ? x.value.length : 0, void (x.setSelectionRange ? x.setSelectionRange(c, c) : (b = x.createTextRange(), b.moveEnd("character", c), b.collapse(!1), b.select()));
            			if (e.removeWhiteSpace(f), h)
            				for ((g = f.lastChild) || (g = d.createElement("p"), u.append(g)) ; g.lastChild;) g = g.lastChild, !n && a(g).is("br") && g.previousSibling && (g = g.previousSibling);
            			d.createRange ? (b = d.createRange(), e.canHaveChildren(g) ? b.selectNodeContents(g) : (b.setStartBefore(g), h && b.setStartAfter(g))) : (b = f.createTextRange(), b.moveToElementText(3 !== g.nodeType ? g : g.parentNode)), b.collapse(!h), B.selectRange(b), F = b, h && (v.scrollTop(f.scrollHeight), u.scrollTop(f.scrollHeight)), ub.focus()
            		}
            	}, ub.readOnly = function (a) {
            		return "boolean" != typeof a ? "readonly" === w.attr("readonly") : (u[0].contentEditable = !a, a ? w.attr("readonly", "readonly") : w.removeAttr("readonly"), gb(a), ub)
            	}, ub.rtl = function (a) {
            		var b = a ? "rtl" : "ltr";
            		return "boolean" != typeof a ? "rtl" === w.attr("dir") : (u.attr("dir", b), w.attr("dir", b), q.removeClass("rtl").removeClass("ltr").addClass(b), ub)
            	}, gb = function (b) {
            		var c = ub.inSourceMode() ? "txtmode" : "wysiwygmode";
            		a.each(Cb, function (a, d) {
            			b !== !0 && d.data("sceditor-" + c) ? d.removeClass("disabled") : d.addClass("disabled")
            		})
            	}, ub.width = function (a, b) {
            		return a || 0 === a ? (ub.dimensions(a, null, b), ub) : q.width()
            	}, ub.dimensions = function (a, b, c) {
            		var d, e = 8 > m || j.documentMode < 8 ? 2 : 0;
            		return a = a || 0 === a ? a : !1, b = b || 0 === b ? b : !1, a === !1 && b === !1 ? {
            			width: ub.width(),
            			height: ub.height()
            		} : (s.data("outerWidthOffset") === d && ub.updateStyleCache(), a !== !1 && (c !== !1 && (p.width = a), b === !1 && (b = q.height(), c = !1), q.width(a), a && a.toString().indexOf("%") > -1 && (a = q.width()), s.width(a - s.data("outerWidthOffset")), w.width(a - w.data("outerWidthOffset")), g.ios && u && u.width(a - s.data("outerWidthOffset") - (u.outerWidth(!0) - u.width()))), b !== !1 && (c !== !1 && (p.height = b), b && b.toString().indexOf("%") > -1 && (b = q.height(b).height(), q.height("auto")), b -= p.toolbarContainer ? 0 : r.outerHeight(!0), s.height(b - s.data("outerHeightOffset")), w.height(b - e - w.data("outerHeightOffset"))), ub)
            	}, ub.updateStyleCache = function () {
            		s.data("outerWidthOffset", s.outerWidth(!0) - s.width()), w.data("outerWidthOffset", w.outerWidth(!0) - w.width()), s.data("outerHeightOffset", s.outerHeight(!0) - s.height()), w.data("outerHeightOffset", w.outerHeight(!0) - w.height())
            	}, ub.height = function (a, b) {
            		return a || 0 === a ? (ub.dimensions(null, a, b), ub) : q.height()
            	}, ub.maximize = function (b) {
            		return "undefined" == typeof b ? q.is(".sceditor-maximize") : (b = !!b, 7 > m && a("html, body").toggleClass("sceditor-maximize", b), q.toggleClass("sceditor-maximize", b), ub.width(b ? "100%" : p.width, !1), ub.height(b ? "100%" : p.height, !1), ub)
            	}, ub.expandToContent = function (a) {
            		var b = q.height(),
                        c = b - s.height(),
                        d = u[0].scrollHeight || v[0].documentElement.scrollHeight,
                        e = p.resizeMaxHeight || 2 * (p.height || wb.height());
            		d += c, (a === !0 || e >= d) && d > b && ub.height(d)
            	}, ub.destroy = function () {
            		C && (C.destroy(), B = null, z = null, C = null, l.unbind("click", eb), k.unbind("resize orientationChanged", fb), a(vb.form).unbind("reset", bb).unbind("submit", ub.updateOriginal), u.unbind(), v.unbind().find("*").remove(), w.unbind().remove(), r.remove(), q.unbind().find("*").unbind().remove(), q.remove(), wb.removeData("sceditor").removeData("sceditorbbcode").show(), H && wb.attr("required", "required"))
            	}, ub.createDropDown = function (b, c, d, e) {
            		var f, g = "sceditor-" + c,
                        h = y && y.is("." + g);
            		ub.closeDropDown(), h || (e !== !1 && a(d).find(":not(input,textarea)").filter(function () {
            			return 1 === this.nodeType
            		}).attr("unselectable", "on"), f = {
            			top: b.offset().top,
            			left: b.offset().left,
            			marginTop: b.outerHeight()
            		}, a.extend(f, p.dropDownCss), y = a('<div class="sceditor-dropdown ' + g + '" />').css(f).append(d).appendTo(a("body")).on("click focusin", function (a) {
            			a.stopPropagation()
            		}), setTimeout(function () {
            			y.find("input,textarea").first().focus()
            		}))
            	}, eb = function (a) {
            		3 !== a.which && y && (tb(), ub.closeDropDown())
            	}, Y = function (a) {
            		var b, c, d, e = u[0],
                        f = v[0],
                        g = 0,
                        h = j.createElement("div"),
                        i = f.createDocumentFragment(),
                        k = a ? a.clipboardData : !1;
            		if (p.disablePasting) return !1;
            		if (p.enablePasteFiltering) {
            			if (B.saveRange(), j.body.appendChild(h), k && k.getData && ((b = k.getData("text/html")) || (b = k.getData("text/plain")))) return h.innerHTML = b, Z(e, h), !1;
            			for (d = u.scrollTop() || v.scrollTop() ; e.firstChild;) i.appendChild(e.firstChild);
            			return c = function (a, b) {
            				if (a.childNodes.length > 0 || g > 25) {
            					for (; a.firstChild;) b.appendChild(a.firstChild);
            					for (; i.firstChild;) a.appendChild(i.firstChild);
            					u.scrollTop(d), v.scrollTop(d), b.childNodes.length > 0 ? Z(a, b) : B.restoreRange()
            				} else g++, setTimeout(function () {
            					c(a, b)
            				}, 20)
            			}, c(e, h), ub.focus(), !0
            		}
            	}, Z = function (b, c) {
            		e.fixNesting(c);
            		var d = c.innerHTML;
            		C.hasHandler("toSource") && (d = C.callOnlyFirst("toSource", d, a(c))), c.parentNode.removeChild(c), C.hasHandler("toWysiwyg") && (d = C.callOnlyFirst("toWysiwyg", d, !0)), B.restoreRange(), ub.wysiwygEditorInsertHtml(d, null, !0)
            	}, ub.closeDropDown = function (a) {
            		y && (y.unbind().remove(), y = null), a === !0 && ub.focus()
            	}, X = function () {
            		return t.contentDocument ? t.contentDocument : t.contentWindow && t.contentWindow.document ? t.contentWindow.document : t.document
            	}, ub.wysiwygEditorInsertHtml = function (b, c, d) {
            		var f, g, h, i = s.height();
            		ub.focus(), (d || !a(E).is("code") && 0 === a(E).parents("code").length) && (B.insertHTML(b, c), B.saveRange(), L(u[0]), f = u.find("#sceditor-end-marker").show(), g = u.scrollTop() || v.scrollTop(), h = e.getOffset(f[0]).top + 1.5 * f.outerHeight(!0) - i, f.hide(), (h > g || g > h + i) && (u.scrollTop(h), v.scrollTop(h)), qb(!1), B.restoreRange(), jb())
            	}, ub.wysiwygEditorInsertText = function (a, b) {
            		ub.wysiwygEditorInsertHtml(f.entities(a), f.entities(b))
            	}, ub.insertText = function (a, b) {
            		return ub.inSourceMode() ? ub.sourceEditorInsertText(a, b) : ub.wysiwygEditorInsertText(a, b), ub
            	}, ub.sourceEditorInsertText = function (a, b) {
            		var c, d, e, f = x.selectionStart,
                        g = x.selectionEnd;
            		d = x.scrollTop, x.focus(), "undefined" != typeof f ? (e = x.value, b && (a += e.substring(f, g) + b), x.value = e.substring(0, f) + a + e.substring(g, e.length), x.selectionStart = f + a.length - (b ? b.length : 0), x.selectionEnd = x.selectionStart) : (c = j.selection.createRange(), b && (a += c.text + b), c.text = a, b && c.moveEnd("character", 0 - b.length), c.moveStart("character", c.End - c.Start), c.select()), x.scrollTop = d, x.focus(), qb()
            	}, ub.getRangeHelper = function () {
            		return B
            	}, ub.sourceEditorCaret = function (a) {
            		var b, c = {};
            		return x.focus(), "undefined" != typeof x.selectionStart ? a ? (x.selectionStart = a.start, x.selectionEnd = a.end) : (c.start = x.selectionStart, c.end = x.selectionEnd) : (b = j.selection.createRange(), a ? (b.moveEnd("character", a.end), b.moveStart("character", a.start), b.select()) : (c.start = b.Start, c.end = b.End)), a ? this : c
            	}, ub.val = function (a, b) {
            		return "string" != typeof a ? ub.inSourceMode() ? ub.getSourceEditorValue(!1) : ub.getWysiwygEditorValue(b) : (ub.inSourceMode() ? ub.setSourceEditorValue(a) : (b !== !1 && C.hasHandler("toWysiwyg") && (a = C.callOnlyFirst("toWysiwyg", a)), ub.setWysiwygEditorValue(a)), ub)
            	}, ub.insert = function (b, c, d, e, f) {
            		if (ub.inSourceMode()) return ub.sourceEditorInsertText(b, c), ub;
            		if (c) {
            			var g = B.selectedHtml(),
                            h = a("<div>").appendTo(a("body")).hide().html(g);
            			d !== !1 && C.hasHandler("toSource") && (g = C.callOnlyFirst("toSource", g, h)), h.remove(), b += g + c
            		}
            		return d !== !1 && C.hasHandler("toWysiwyg") && (b = C.callOnlyFirst("toWysiwyg", b, !0)), d !== !1 && f === !0 && (b = b.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")), ub.wysiwygEditorInsertHtml(b), ub
            	}, ub.getWysiwygEditorValue = function (a) {
            		var b, c, d = B.hasSelection();
            		return d ? B.saveRange() : z && z.getBookmark && (c = z.getBookmark()), e.fixNesting(u[0]), b = u.html(), a !== !1 && C.hasHandler("toSource") && (b = C.callOnlyFirst("toSource", b, u)), d ? (B.restoreRange(), z = null) : c && (z.moveToBookmark(c), z = null), b
            	}, ub.getBody = function () {
            		return u
            	}, ub.getContentAreaContainer = function () {
            		return s
            	}, ub.getSourceEditorValue = function (a) {
            		var b = w.val();
            		return a !== !1 && C.hasHandler("toWysiwyg") && (b = C.callOnlyFirst("toWysiwyg", b)), b
            	}, ub.setWysiwygEditorValue = function (a) {
            		a || (a = "<p>" + (m ? "" : "<br />") + "</p>"), u[0].innerHTML = a, L(u[0]), jb(), qb()
            	}, ub.setSourceEditorValue = function (a) {
            		w.val(a), qb()
            	}, ub.updateOriginal = function () {
            		wb.val(ub.val())
            	}, L = function (b) {
            		if (p.emoticonsEnabled && !a(b).parents("code").length) {
            			var c = b.ownerDocument,
                            d = "\\s| | | | |&nbsp;",
                            g = [],
                            i = [],
                            j = a.extend({}, p.emoticons.more, p.emoticons.dropdown, p.emoticons.hidden);
            			a.each(j, function (a) {
            				p.emoticonsCompat && (i[a] = new RegExp("(>|^|" + d + ")" + f.regex(a) + "($|<|" + d + ")")), g.push(a)
            			});
            			var k = function (b) {
            				for (b = b.firstChild; b;) {
            					var d, f, l, m, n, o, q, r = b.parentNode,
                                    s = b.nodeValue;
            					if (3 !== b.nodeType) a(b).is("code") || k(b);
            					else if (s)
            						for (n = g.length; n--;) f = g[n], q = p.emoticonsCompat ? s.search(i[f]) : s.indexOf(f), q > -1 && (o = b.nextSibling, l = j[f], d = s.substr(q).split(f), s = s.substr(0, q) + d.shift(), b.nodeValue = s, m = e.parseHTML(h("emoticon", {
            							key: f,
            							url: l.url || l,
            							tooltip: l.tooltip || f
            						}), c), r.insertBefore(m[0], o), r.insertBefore(c.createTextNode(d.join(f)), o));
            					b = b.nextSibling
            				}
            			};
            			k(b), p.emoticonsCompat && (Bb = u.find("img[data-sceditor-emoticon]"))
            		}
            	}, ub.inSourceMode = function () {
            		return q.hasClass("sourceMode")
            	}, ub.sourceMode = function (a) {
            		var b = ub.inSourceMode();
            		return "boolean" != typeof a ? b : ((b && !a || !b && a) && ub.toggleSourceMode(), ub)
            	}, ub.toggleSourceMode = function () {
            		var a = ub.inSourceMode();
            		(g.isWysiwygSupported || !a) && (a || (B.saveRange(), B.clear()), ub.blur(), a ? ub.setWysiwygEditorValue(ub.getSourceEditorValue()) : ub.setSourceEditorValue(ub.getWysiwygEditorValue()), z = null, w.toggle(), s.toggle(), q.toggleClass("wysiwygMode", a).toggleClass("sourceMode", !a), gb(), hb())
            	}, ib = function () {
            		return x.focus(), "undefined" != typeof x.selectionStart ? x.value.substring(x.selectionStart, x.selectionEnd) : j.selection.createRange().text
            	}, M = function (b, c) {
            		ub.inSourceMode() ? c.txtExec && (a.isArray(c.txtExec) ? ub.sourceEditorInsertText.apply(ub, c.txtExec) : c.txtExec.call(ub, b, ib())) : c.exec && (a.isFunction(c.exec) ? c.exec.call(ub, b) : ub.execCommand(c.exec, c.hasOwnProperty("execParam") ? c.execParam : null))
            	}, N = function () {
            		m && (z = B.selectedRange())
            	}, ub.execCommand = function (b, c) {
            		var d = !1,
                        e = ub.commands[b],
                        f = a(B.parentNode());
            		if (ub.focus(), !f.is("code") && 0 === f.parents("code").length) {
            			try {
            				d = v[0].execCommand(b, !1, c)
            			} catch (g) { } !d && e && e.errorMessage && alert(ub._(e.errorMessage)), hb()
            		}
            	}, kb = function () {
            		function b() {
            			B && !B.compare(F) && (F = B.cloneSelected(), q.trigger(a.Event("selectionchanged"))), G = !1
            		}
            		G || (G = !0, m ? b() : setTimeout(b, 100))
            	}, lb = function () {
            		var b, c = B.parentNode();
            		D !== c && (b = D, D = c, E = B.getFirstBlockParent(c), q.trigger(a.Event("nodechanged", {
            			oldNode: b,
            			newNode: D
            		})))
            	}, ub.currentNode = function () {
            		return D
            	}, ub.currentBlockNode = function () {
            		return E
            	}, hb = function (a) {
            		var b, c, d = "active",
                        e = v[0],
                        f = ub.sourceMode();
            		if (ub.readOnly()) return void r.find(d).removeClass(d);
            		f || (c = a ? a.newNode : B.parentNode(), b = B.getFirstBlockParent(c));
            		for (var g = 0; g < zb.length; g++) {
            			var h = 0,
                            i = Cb[zb[g].name],
                            j = zb[g].state,
                            k = f && !i.data("sceditor-txtmode") || !f && !i.data("sceditor-wysiwygmode");
            			if ("string" == typeof j) {
            				if (!f) try {
            					h = e.queryCommandEnabled(j) ? 0 : -1, h > -1 && (h = e.queryCommandState(j) ? 1 : 0)
            				} catch (l) { }
            			} else k || (h = j.call(ub, c, b));
            			i.toggleClass("disabled", k || 0 > h).toggleClass(d, h > 0)
            		}
            	}, ab = function (b) {
            		var c, d, f, g, h = "code,blockquote,pre",
                        i = "li,ul,ol";
            		return b.originalEvent.defaultPrevented ? void 0 : (ub.closeDropDown(), c = a(E).closest(h + "," + i).first(), 13 === b.which && c.length && !c.is(i) ? (z = null, d = v[0].createElement("br"), B.insertNode(d), n || (f = d.parentNode, g = f.lastChild, g && 3 === g.nodeType && "" === g.nodeValue && (f.removeChild(g), g = f.lastChild), !e.isInline(f, !0) && g === d && e.isInline(d.previousSibling) && B.insertHTML("<br>")), !1) : void 0)
            	}, jb = function () {
            		var b, c, d, f = u[0];
            		e.rTraverse(f, function (g) {
            			return b = g.nodeName.toLowerCase(), a.inArray(b, yb) > -1 && (c = !0), 3 === g.nodeType && !/^\s*$/.test(g.nodeValue) || "br" === b || n && !g.firstChild && !e.isInline(g, !1) ? (c && (d = v[0].createElement("p"), d.className = "sceditor-nlf", d.innerHTML = n ? "" : "<br />", f.appendChild(d)), !1) : void 0
            		})
            	}, bb = function () {
            		ub.val(wb.val())
            	}, cb = function () {
            		ub.closeDropDown(), z = null
            	}, fb = function () {
            		var a = p.height,
                        b = p.width;
            		ub.maximize() ? ub.dimensions("100%", "100%", !1) : (a && a.toString().indexOf("%") > -1 || b && b.toString().indexOf("%") > -1) && ub.dimensions(b, a)
            	}, ub._ = function () {
            		var a, b = arguments;
            		return A && A[b[0]] && (b[0] = A[b[0]]), b[0].replace(/\{(\d+)\}/g, function (c, d) {
            			return b[d - 0 + 1] !== a ? b[d - 0 + 1] : "{" + d + "}"
            		})
            	}, db = function (b) {
            		C.call(b.type + "Event", b, ub);
            		var c = b.target === x ? "scesrc" : "scewys",
                        d = a.Event(b);
            		d.type = c + b.type, q.trigger(d, ub)
            	}, ub.bind = function (b, c, d, e) {
            		b = b.split(" ");
            		for (var f = b.length; f--;) a.isFunction(c) && (d || q.bind("scewys" + b[f], c), e || q.bind("scesrc" + b[f], c), "valuechanged" === b[f] && (qb.hasHandler = !0));
            		return ub
            	}, ub.unbind = function (b, c, d, e) {
            		b = b.split(" ");
            		for (var f = b.length; f--;) a.isFunction(c) && (d || q.unbind("scewys" + b[f], c), e || q.unbind("scesrc" + b[f], c));
            		return ub
            	}, ub.blur = function (b, c, d) {
            		return a.isFunction(b) ? ub.bind("blur", b, c, d) : ub.sourceMode() ? w.blur() : u.blur(), ub
            	}, ub.focus = function (b, c, d) {
            		if (a.isFunction(b)) ub.bind("focus", b, c, d);
            		else if (ub.inSourceMode()) x.focus();
            		else {
            			var e, f = B.selectedRange();
            			F || B.hasSelection() || mb(), !n && f && 1 === f.endOffset && f.collapsed && (e = f.endContainer, e && 1 === e.childNodes.length && a(e.firstChild).is("br") && (f.setStartBefore(e.firstChild), f.collapse(!0), B.selectRange(f))), t.contentWindow.focus(), u[0].focus(), z && (B.selectRange(z), z = null)
            		}
            		return ub
            	}, ub.keyDown = function (a, b, c) {
            		return ub.bind("keydown", a, b, c)
            	}, ub.keyPress = function (a, b, c) {
            		return ub.bind("keypress", a, b, c)
            	}, ub.keyUp = function (a, b, c) {
            		return ub.bind("keyup", a, b, c)
            	}, ub.nodeChanged = function (a) {
            		return ub.bind("nodechanged", a, !1, !0)
            	}, ub.selectionChanged = function (a) {
            		return ub.bind("selectionchanged", a, !1, !0)
            	}, ub.valueChanged = function (a, b, c) {
            		return ub.bind("valuechanged", a, b, c)
            	}, nb = function (b) {
            		var c, d = 0,
                        e = ub.emoticonsCache,
                        f = String.fromCharCode(b.which);
            		return a(E).is("code") || a(E).parents("code").length ? void 0 : (e || (e = [], a.each(a.extend({}, p.emoticons.more, p.emoticons.dropdown, p.emoticons.hidden), function (a, b) {
            			e[d++] = [a, h("emoticon", {
            				key: a,
            				url: b.url || b,
            				tooltip: b.tooltip || a
            			})]
            		}), e.sort(function (a, b) {
            			return a[0].length - b[0].length
            		}), ub.emoticonsCache = e, ub.longestEmoticonCode = e[e.length - 1][0].length), c = B.raplaceKeyword(ub.emoticonsCache, !0, !0, ub.longestEmoticonCode, p.emoticonsCompat, f), c && p.emoticonsCompat ? (Bb = u.find("img[data-sceditor-emoticon]"), /^\s$/.test(f)) : !c)
            	}, ob = function () {
            		if (Bb.length) {
            			var b, c, d, e, f, g, h = ub.currentBlockNode(),
                            i = !1,
                            j = /[^\s\xA0\u2002\u2003\u2009\u00a0]+/;
            			Bb = a.map(Bb, function (k) {
            				return k && k.parentNode ? a.contains(h, k) ? (b = k.previousSibling, c = k.nextSibling, f = b.nodeValue, null === f && (f = b.innerText || ""), b && j.test(b.nodeValue.slice(-1)) || c && j.test((c.nodeValue || "")[0]) ? (d = k.parentNode, e = B.cloneSelected(), g = e.startContainer, f += a(k).data("sceditor-emoticon"), g === c ? i = f.length + e.startOffset : g === h && h.childNodes[e.startOffset] === c ? i = f.length : g === b && (i = e.startOffset), c && 3 === c.nodeType || (c = d.insertBefore(d.ownerDocument.createTextNode(""), c)), c.insertData(0, f), d.removeChild(b), d.removeChild(k), i !== !1 && (e.setStart(c, i), e.collapse(!0), B.selectRange(e)), null) : k) : k : null
            			})
            		}
            	}, ub.emoticons = function (b) {
            		return b || b === !1 ? (p.emoticonsEnabled = b, b ? (u.keypress(nb), ub.sourceMode() || (B.saveRange(), L(u[0]), Bb = u.find("img[data-sceditor-emoticon]"), qb(!1), B.restoreRange())) : (u.find("img[data-sceditor-emoticon]").replaceWith(function () {
            			return a(this).data("sceditor-emoticon")
            		}), Bb = [], u.unbind("keypress", nb), qb()), ub) : p.emoticonsEnabled
            	}, ub.css = function (b) {
            		return I || (I = a('<style id="#inline" />', v[0]).appendTo(v.find("head"))[0]), "string" != typeof b ? I.styleSheet ? I.styleSheet.cssText : I.innerHTML : (I.styleSheet ? I.styleSheet.cssText = b : I.innerHTML = b, ub)
            	}, $ = function (a) {
            		var b = [],
                        c = {
                        	"`": "~",
                        	1: "!",
                        	2: "@",
                        	3: "#",
                        	4: "$",
                        	5: "%",
                        	6: "^",
                        	7: "&",
                        	8: "*",
                        	9: "(",
                        	0: ")",
                        	"-": "_",
                        	"=": "+",
                        	";": ": ",
                        	"'": '"',
                        	",": "<",
                        	".": ">",
                        	"/": "?",
                        	"\\": "|",
                        	"[": "{",
                        	"]": "}"
                        },
                        d = {
                        	8: "backspace",
                        	9: "tab",
                        	13: "enter",
                        	19: "pause",
                        	20: "capslock",
                        	27: "esc",
                        	32: "space",
                        	33: "pageup",
                        	34: "pagedown",
                        	35: "end",
                        	36: "home",
                        	37: "left",
                        	38: "up",
                        	39: "right",
                        	40: "down",
                        	45: "insert",
                        	46: "del",
                        	91: "win",
                        	92: "win",
                        	93: "select",
                        	96: "0",
                        	97: "1",
                        	98: "2",
                        	99: "3",
                        	100: "4",
                        	101: "5",
                        	102: "6",
                        	103: "7",
                        	104: "8",
                        	105: "9",
                        	106: "*",
                        	107: "+",
                        	109: "-",
                        	110: ".",
                        	111: "/",
                        	112: "f1",
                        	113: "f2",
                        	114: "f3",
                        	115: "f4",
                        	116: "f5",
                        	117: "f6",
                        	118: "f7",
                        	119: "f8",
                        	120: "f9",
                        	121: "f10",
                        	122: "f11",
                        	123: "f12",
                        	144: "numlock",
                        	145: "scrolllock",
                        	186: ";",
                        	187: "=",
                        	188: ",",
                        	189: "-",
                        	190: ".",
                        	191: "/",
                        	192: "`",
                        	219: "[",
                        	220: "\\",
                        	221: "]",
                        	222: "'"
                        },
                        e = {
                        	109: "-",
                        	110: "del",
                        	111: "/",
                        	96: "0",
                        	97: "1",
                        	98: "2",
                        	99: "3",
                        	100: "4",
                        	101: "5",
                        	102: "6",
                        	103: "7",
                        	104: "8",
                        	105: "9"
                        },
                        f = a.which,
                        g = d[f] || String.fromCharCode(f).toLowerCase();
            		return a.ctrlKey && b.push("ctrl"), a.altKey && b.push("alt"), a.shiftKey && (b.push("shift"), e[f] ? g = e[f] : c[g] && (g = c[g])), g && (16 > f || f > 18) && b.push(g), b = b.join("+"), Ab[b] ? Ab[b].call(ub) : void 0
            	}, ub.addShortcut = function (a, b) {
            		return a = a.toLowerCase(), Ab[a] = "string" == typeof b ? function () {
            			return M(Cb[b], ub.commands[b]), !1
            		} : b, ub
            	}, ub.removeShortcut = function (a) {
            		return delete Ab[a.toLowerCase()], ub
            	}, _ = function (b) {
            		var c, d, e, f, g;
            		if (!p.disableBlockRemove && 8 === b.which && (f = B.selectedRange()) && (i.getSelection ? (c = f.startContainer, d = f.startOffset) : (c = f.parentElement(), e = v[0].selection.createRange(), e.moveToElementText(c), e.setEndPoint("EndToStart", f), d = e.text.length), 0 === d && (g = pb()))) {
            			for (; c !== g;) {
            				for (; c.previousSibling;)
            					if (c = c.previousSibling, 3 !== c.nodeType || c.nodeValue) return;
            				if (!(c = c.parentNode)) return
            			}
            			if (g && !a(g).is("body")) return ub.clearBlockFormatting(g), !1
            		}
            	}, pb = function () {
            		for (var b = E; !e.hasStyling(b) || e.isInline(b, !0) ;)
            			if (!(b = b.parentNode) || a(b).is("body")) return;
            		return b
            	}, ub.clearBlockFormatting = function (b) {
            		return b = b || pb(), !b || a(b).is("body") ? ub : (B.saveRange(), b.className = "", z = null, a(b).attr("style", ""), a(b).is("p,div,td") || e.convertElement(b, "p"), B.restoreRange(), ub)
            	}, qb = function (b) {
            		if (C && (C.hasHandler("valuechangedEvent") || qb.hasHandler)) {
            			var c, d = ub.sourceMode(),
                            e = !d && B.hasSelection();
            			b = b !== !1 && !v[0].getElementById("sceditor-start-marker"), sb.timer && (clearTimeout(sb.timer), sb.timer = !1), e && b && B.saveRange(), c = d ? w.val() : u.html(), c !== qb.lastHtmlValue && (qb.lastHtmlValue = c, q.trigger(a.Event("valuechanged", {
            				rawValue: d ? ub.val() : c
            			}))), e && b && B.removeMarkers()
            		}
            	}, rb = function () {
            		sb.timer && qb()
            	}, sb = function (a) {
            		var b = a.which,
                        c = sb.lastChar,
                        d = 13 === c || 32 === c,
                        e = 8 === c || 46 === c;
            		sb.lastChar = b, 13 === b || 32 === b ? d ? sb.triggerNextChar = !0 : qb() : 8 === b || 46 === b ? e ? sb.triggerNextChar = !0 : qb() : sb.triggerNextChar && (qb(), sb.triggerNextChar = !1), sb.timer && clearTimeout(sb.timer), sb.timer = setTimeout(function () {
            			qb()
            		}, 1500)
            	}, tb = function () {
            		J || ub.updateOriginal(), J = !1
            	}, K()
            };
		return o.locale = {}, o.command = {
			get: function (a) {
				return o.commands[a] || null
			},
			set: function (b, c) {
				return b && c ? (c = a.extend(o.commands[b] || {}, c), c.remove = function () {
					o.command.remove(b)
				}, o.commands[b] = c, this) : !1
			},
			remove: function (a) {
				return o.commands[a] && delete o.commands[a], this
			}
		}, o
	}.call(b, c, b, a), !(void 0 !== d && (a.exports = d))
}, function (a, b, c) {
	var d;
	d = function () {
		"use strict";
		var a = {},
            b = function (b) {
            	var c = this,
                    d = [],
                    e = function (a) {
                    	return "signal" + a.charAt(0).toUpperCase() + a.slice(1)
                    },
                    f = function (a, c) {
                    	a = [].slice.call(a);
                    	var f, g, h = e(a.shift());
                    	for (f = 0; f < d.length; f++)
                    		if (h in d[f] && (g = d[f][h].apply(b, a), c)) return g
                    };
            	c.call = function () {
            		f(arguments, !1)
            	}, c.callOnlyFirst = function () {
            		return f(arguments, !0)
            	}, c.hasHandler = function (a) {
            		var b = d.length;
            		for (a = e(a) ; b--;)
            			if (a in d[b]) return !0;
            		return !1
            	}, c.exists = function (b) {
            		return b in a ? (b = a[b], "function" == typeof b && "object" == typeof b.prototype) : !1
            	}, c.isRegistered = function (b) {
            		if (c.exists(b))
            			for (var e = d.length; e--;)
            				if (d[e] instanceof a[b]) return !0;
            		return !1
            	}, c.register = function (e) {
            		return !c.exists(e) || c.isRegistered(e) ? !1 : (e = new a[e], d.push(e), "init" in e && e.init.call(b), !0)
            	}, c.deregister = function (e) {
            		var f, g = d.length,
                        h = !1;
            		if (!c.isRegistered(e)) return h;
            		for (; g--;) d[g] instanceof a[e] && (f = d.splice(g, 1)[0], h = !0, "destroy" in f && f.destroy.call(b));
            		return h
            	}, c.destroy = function () {
            		for (var a = d.length; a--;) "destroy" in d[a] && d[a].destroy.call(b);
            		d = [], b = null
            	}
            };
		return b.plugins = a, b
	}.call(b, c, b, a), !(void 0 !== d && (a.exports = d))
}, function (a, b, c) {
	var d;
	d = function (a, b) {
		"use strict";
		var d = c(1),
            e = navigator.userAgent;
		b.ie = function () {
			var a, b = 3,
                c = document,
                d = c.createElement("div"),
                e = d.getElementsByTagName("i");
			do d.innerHTML = "<!--[if gt IE " + ++b + "]><i></i><![endif]-->"; while (e[0]);
			return c.documentMode && c.all && window.atob && (b = 10), 4 === b && c.documentMode && (b = 11), b > 4 ? b : a
		}(), b.ios = /iPhone|iPod|iPad| wosbrowser\//i.test(e), b.isWysiwygSupported = function () {
			var a, c, f, g = d('<p contenteditable="true">')[0].contentEditable;
			return g === f && "inherit" === g ? !1 : (c = /Opera Mobi|Opera Mini/i.test(e), /Android/i.test(e) && (c = !0, /Safari/.test(e) && (a = /Safari\/(\d+)/.exec(e), c = a && a[1] ? a[1] < 534 : !0)), / Silk\//i.test(e) && (a = /AppleWebKit\/(\d+)/.exec(e), c = a && a[1] ? a[1] < 534 : !0), b.ios && (c = /OS [0-4](_\d)+ like Mac/i.test(e)), /Firefox/i.test(e) && (c = !1), /OneBrowser/i.test(e) && (c = !1), "UCWEB" === navigator.vendor && (c = !1), !c)
		}()
	}.call(b, c, b, a), !(void 0 !== d && (a.exports = d))
}, function (a, b, c) {
	var d;
	d = function (a, b) {
		"use strict";
		var c = /^(?:https?|s?ftp|mailto|spotify|skype|ssh|teamspeak|tel):|(?:\/\/)/i;
		b.regex = function (a) {
			return a.replace(/([\-.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
		}, b.entities = function (a, b) {
			if (!a) return a;
			var c = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				"  ": " &nbsp;",
				"\r\n": "\n",
				"\r": "\n",
				"\n": "<br />"
			};
			return b !== !1 && (c['"'] = "&#34;", c["'"] = "&#39;", c["`"] = "&#96;"), a = a.replace(/ {2}|\r\n|[&<>\r\n'"`]/g, function (a) {
				return c[a] || a
			})
		}, b.uriScheme = function (a) {
			var b, d = /^[^\/]*:/i,
                e = window.location;
			return a && d.test(a) && !c.test(a) ? (b = e.pathname.split("/"), b.pop(), e.protocol + "//" + e.host + b.join("/") + "/" + a) : a
		}
	}.call(b, c, b, a), !(void 0 !== d && (a.exports = d))
}, function (a, b, c) {
	var d;
	d = function () {
		"use strict";
		var a = c(1),
            b = c(4).ie,
            d = c(10),
            e = b && 11 > b,
            f = {
            	bold: {
            		exec: "bold",
            		tooltip: "Bold",
            		shortcut: "ctrl+b"
            	},
            	italic: {
            		exec: "italic",
            		tooltip: "Italic",
            		shortcut: "ctrl+i"
            	},
            	underline: {
            		exec: "underline",
            		tooltip: "Underline",
            		shortcut: "ctrl+u"
            	},
            	strike: {
            		exec: "strikethrough",
            		tooltip: "Strikethrough"
            	},
            	subscript: {
            		exec: "subscript",
            		tooltip: "Subscript"
            	},
            	superscript: {
            		exec: "superscript",
            		tooltip: "Superscript"
            	},
            	left: {
            		exec: "justifyleft",
            		tooltip: "Align left"
            	},
            	center: {
            		exec: "justifycenter",
            		tooltip: "Center"
            	},
            	right: {
            		exec: "justifyright",
            		tooltip: "Align right"
            	},
            	justify: {
            		exec: "justifyfull",
            		tooltip: "Justify"
            	},
            	font: {
            		_dropDown: function (b, c, e) {
            			for (var f = 0, g = b.opts.fonts.split(","), h = a("<div />"), i = function () {
                                return e(a(this).data("font")), b.closeDropDown(!0), !1
            			}; f < g.length; f++) h.append(d("fontOpt", {
            				font: g[f]
            			}, !0).click(i));
            			b.createDropDown(c, "font-picker", h)
            		},
            		exec: function (a) {
            			var b = this;
            			f.font._dropDown(b, a, function (a) {
            				b.execCommand("fontname", a)
            			})
            		},
            		tooltip: "Font Name"
            	},
            	size: {
            		_dropDown: function (b, c, e) {
            			for (var f = a("<div />"), g = function (c) {
                                e(a(this).data("size")), b.closeDropDown(!0), c.preventDefault()
            			}, h = 1; 7 >= h; h++) f.append(d("sizeOpt", {
            				size: h
            			}, !0).click(g));
            			b.createDropDown(c, "fontsize-picker", f)
            		},
            		exec: function (a) {
            			var b = this;
            			f.size._dropDown(b, a, function (a) {
            				b.execCommand("fontsize", a)
            			})
            		},
            		tooltip: "Font Size"
            	},
            	color: {
            		_dropDown: function (b, c, d) {
            			var e, g, h, i, j = {
            				r: 255,
            				g: 255,
            				b: 255
            			},
                            k = a("<div />"),
                            l = b.opts.colors ? b.opts.colors.split("|") : new Array(21),
                            m = [],
                            n = f.color;
            			if (!n._htmlCache) {
            				for (e = 0; e < l.length; ++e) {
            					for (i = l[e] ? l[e].split(",") : new Array(21), m.push('<div class="sceditor-color-column">'), g = 0; g < i.length; ++g) h = i[g] || "#" + j.r.toString(16) + j.g.toString(16) + j.b.toString(16), m.push('<a href="#" class="sceditor-color-option" style="background-color: ' + h + '" data-color="' + h + '"></a>'), g % 5 === 0 ? (j.g -= 51, j.b = 255) : j.b -= 51;
            					m.push("</div>"), e % 5 === 0 ? (j.r -= 51, j.g = 255, j.b = 255) : (j.g = 255, j.b = 255)
            				}
            				n._htmlCache = m.join("")
            			}
            			k.append(n._htmlCache).find("a").click(function (c) {
            				d(a(this).attr("data-color")), b.closeDropDown(!0), c.preventDefault()
            			}), b.createDropDown(c, "color-picker", k)
            		},
            		exec: function (a) {
            			var b = this;
            			f.color._dropDown(b, a, function (a) {
            				b.execCommand("forecolor", a)
            			})
            		},
            		tooltip: "Font Color"
            	},
            	removeformat: {
            		exec: "removeformat",
            		tooltip: "Remove Formatting"
            	},
            	cut: {
            		exec: "cut",
            		tooltip: "Cut",
            		errorMessage: "Your browser does not allow the cut command. Please use the keyboard shortcut Ctrl/Cmd-X"
            	},
            	copy: {
            		exec: "copy",
            		tooltip: "Copy",
            		errorMessage: "Your browser does not allow the copy command. Please use the keyboard shortcut Ctrl/Cmd-C"
            	},
            	paste: {
            		exec: "paste",
            		tooltip: "Paste",
            		errorMessage: "Your browser does not allow the paste command. Please use the keyboard shortcut Ctrl/Cmd-V"
            	},
            	pastetext: {
            		exec: function (a) {
            			var b, c, e = this;
            			c = d("pastetext", {
            				label: e._("Paste your text inside the following box:"),
            				insert: e._("Insert")
            			}, !0), c.find(".button").click(function (a) {
            				b = c.find("#txt").val(), b && e.wysiwygEditorInsertText(b), e.closeDropDown(!0), a.preventDefault()
            			}), e.createDropDown(a, "pastetext", c)
            		},
            		tooltip: "Paste Text"
            	},
            	bulletlist: {
            		exec: "insertunorderedlist",
            		tooltip: "Bullet list"
            	},
            	orderedlist: {
            		exec: "insertorderedlist",
            		tooltip: "Numbered list"
            	},
            	indent: {
            		state: function (b, c) {
            			var d, e, f, g = a(c),
                            h = g.parents("ul,ol,menu"),
                            i = h.first();
            			if (h.length > 1 || i.children().length > 1) return 0;
            			if (g.is("ul,ol,menu")) {
            				if (d = this.getRangeHelper().selectedRange(), !(window.Range && d instanceof Range)) return g.is("li,ul,ol,menu") ? 0 : -1;
            				if (e = d.startContainer.parentNode, f = d.endContainer.parentNode, e !== e.parentNode.firstElementChild || a(f).is("li") && f !== f.parentNode.lastElementChild) return 0
            			}
            			return -1
            		},
            		exec: function () {
            			var b = this,
                            c = a(b.getRangeHelper().getFirstBlockParent());
            			b.focus(), c.parents("ul,ol,menu") && b.execCommand("indent")
            		},
            		tooltip: "Add indent"
            	},
            	outdent: {
            		state: function (b, c) {
            			return a(c).is("ul,ol,menu") || a(c).parents("ul,ol,menu").length > 0 ? 0 : -1
            		},
            		exec: function () {
            			var b = this,
                            c = a(b.getRangeHelper().getFirstBlockParent());
            			c.parents("ul,ol,menu") && b.execCommand("outdent")
            		},
            		tooltip: "Remove one indent"
            	},
            	table: {
            		forceNewLineAfter: ["table"],
            		exec: function (a) {
            			var b = this,
                            c = d("table", {
                            	rows: b._("Rows:"),
                            	cols: b._("Cols:"),
                            	insert: b._("Insert")
                            }, !0);
            			c.find(".button").click(function (a) {
            				var d, f, g = c.find("#rows").val() - 0,
                                h = c.find("#cols").val() - 0,
                                i = "<table>";
            				if (!(1 > g || 1 > h)) {
            					for (d = 0; g > d; d++) {
            						for (i += "<tr>", f = 0; h > f; f++) i += "<td>" + (e ? "" : "<br />") + "</td>";
            						i += "</tr>"
            					}
            					i += "</table>", b.wysiwygEditorInsertHtml(i), b.closeDropDown(!0), a.preventDefault()
            				}
            			}), b.createDropDown(a, "inserttable", c)
            		},
            		tooltip: "Insert a table"
            	},
            	horizontalrule: {
            		exec: "inserthorizontalrule",
            		tooltip: "Insert a horizontal rule"
            	},
            	code: {
            		forceNewLineAfter: ["code"],
            		exec: function () {
            			this.wysiwygEditorInsertHtml("<code>", (e ? "" : "<br />") + "</code>")
            		},
            		tooltip: "Code"
            	},
            	image: {
            		exec: function (a) {
            			var b = this,
                            c = d("image", {
                            	url: b._("URL:"),
                            	width: b._("Width (optional):"),
                            	height: b._("Height (optional):"),
                            	insert: b._("Insert")
                            }, !0);
            			c.find(".button").click(function (a) {
            				var d = c.find("#image").val(),
                                e = c.find("#width").val(),
                                f = c.find("#height").val(),
                                g = "";
            				e && (g += ' width="' + e + '"'), f && (g += ' height="' + f + '"'), d && b.wysiwygEditorInsertHtml("<img" + g + ' src="' + d + '" />'), b.closeDropDown(!0), a.preventDefault()
            			}), b.createDropDown(a, "insertimage", c)
            		},
            		tooltip: "Insert an image"
            	},
            	email: {
            		exec: function (a) {
            			var b = this,
                            c = d("email", {
                            	label: b._("E-mail:"),
                            	desc: b._("Description (optional):"),
                            	insert: b._("Insert")
                            }, !0);
            			c.find(".button").click(function (a) {
            				var d = c.find("#email").val(),
                                e = c.find("#des").val();
            				d && (b.focus(), !b.getRangeHelper().selectedHtml() || e ? (e = e || d, b.wysiwygEditorInsertHtml('<a href="mailto:' + d + '">' + e + "</a>")) : b.execCommand("createlink", "mailto:" + d)), b.closeDropDown(!0), a.preventDefault()
            			}), b.createDropDown(a, "insertemail", c)
            		},
            		tooltip: "Insert an email"
            	},
            	link: {
            		exec: function (a) {
            			var b = this,
                            c = d("link", {
                            	url: b._("URL:"),
                            	desc: b._("Description (optional):"),
                            	ins: b._("Insert")
                            }, !0);
            			c.find(".button").click(function (a) {
            				var d = c.find("#link").val(),
                                e = c.find("#des").val();
            				d && (b.focus(), !b.getRangeHelper().selectedHtml() || e ? (e = e || d, b.wysiwygEditorInsertHtml('<a href="' + d + '">' + e + "</a>")) : b.execCommand("createlink", d)), b.closeDropDown(!0), a.preventDefault()
            			}), b.createDropDown(a, "insertlink", c)
            		},
            		tooltip: "Insert a link"
            	},
            	unlink: {
            		state: function () {
            			var b = a(this.currentNode());
            			return b.is("a") || b.parents("a").length > 0 ? 0 : -1
            		},
            		exec: function () {
            			var b = a(this.currentNode()),
                            c = b.is("a") ? b : b.parents("a").first();
            			c.length && c.replaceWith(c.contents())
            		},
            		tooltip: "Unlink"
            	},
            	quote: {
            		forceNewLineAfter: ["blockquote"],
            		exec: function (a, b, c) {
            			var d = "<blockquote>",
                            f = "</blockquote>";
            			b ? (c = c ? "<cite>" + c + "</cite>" : "", d = d + c + b + f, f = null) : "" === this.getRangeHelper().selectedHtml() && (f = (e ? "" : "<br />") + f), this.wysiwygEditorInsertHtml(d, f)
            		},
            		tooltip: "Insert a Quote"
            	},
            	emoticon: {
            		exec: function (b) {
            			var c = this,
                            d = function (e) {
                            	var f, g = c.opts.emoticonsCompat,
                                    h = c.getRangeHelper(),
                                    i = g && " " !== h.getOuterText(!0, 1) ? " " : "",
                                    j = g && " " !== h.getOuterText(!1, 1) ? " " : "",
                                    k = a("<div />"),
                                    l = a("<div />").appendTo(k),
                                    m = 0,
                                    n = a.extend({}, c.opts.emoticons.dropdown, e ? c.opts.emoticons.more : {});
                            	return a.each(n, function () {
                            		m++
                            	}), m = Math.sqrt(m), a.each(n, function (b, d) {
                            		l.append(a("<img />").attr({
                            			src: d.url || d,
                            			alt: b,
                            			title: d.tooltip || b
                            		}).click(function () {
                            			return c.insert(i + a(this).attr("alt") + j, null, !1).closeDropDown(!0), !1
                            		})), l.children().length >= m && (l = a("<div />").appendTo(k))
                            	}), e || (f = a('<a class="sceditor-more">' + c._("More") + "</a>").click(function () {
                            		return c.createDropDown(b, "more-emoticons", d(!0)), !1
                            	}), k.append(f)), k
                            };
            			c.createDropDown(b, "emoticons", d(!1))
            		},
            		txtExec: function (a) {
            			f.emoticon.exec.call(this, a)
            		},
            		tooltip: "Insert an emoticon"
            	},
            	youtube: {
            		_dropDown: function (a, b, c) {
            			var e, f = d("youtubeMenu", {
            				label: a._("Video URL:"),
            				insert: a._("Insert")
            			}, !0);
            			f.find(".button").click(function (b) {
            				var d = f.find("#link").val();
            				d && (e = d.match(/(?:v=|v\/|embed\/|youtu.be\/)(.{11})/), e && (d = e[1]), /^[a-zA-Z0-9_\-]{11}$/.test(d) ? c(d) : alert("Invalid YouTube video")), a.closeDropDown(!0), b.preventDefault()
            			}), a.createDropDown(b, "insertlink", f)
            		},
            		exec: function (a) {
            			var b = this;
            			f.youtube._dropDown(b, a, function (a) {
            				b.wysiwygEditorInsertHtml(d("youtube", {
            					id: a
            				}))
            			})
            		},
            		tooltip: "Insert a YouTube video"
            	},
            	date: {
            		_date: function (a) {
            			var b = new Date,
                            c = b.getYear(),
                            d = b.getMonth() + 1,
                            e = b.getDate();
            			return 2e3 > c && (c = 1900 + c), 10 > d && (d = "0" + d), 10 > e && (e = "0" + e), a.opts.dateFormat.replace(/year/i, c).replace(/month/i, d).replace(/day/i, e)
            		},
            		exec: function () {
            			this.insertText(f.date._date(this))
            		},
            		txtExec: function () {
            			this.insertText(f.date._date(this))
            		},
            		tooltip: "Insert current date"
            	},
            	time: {
            		_time: function () {
            			var a = new Date,
                            b = a.getHours(),
                            c = a.getMinutes(),
                            d = a.getSeconds();
            			return 10 > b && (b = "0" + b), 10 > c && (c = "0" + c), 10 > d && (d = "0" + d), b + ":" + c + ":" + d
            		},
            		exec: function () {
            			this.insertText(f.time._time())
            		},
            		txtExec: function () {
            			this.insertText(f.time._time())
            		},
            		tooltip: "Insert current time"
            	},
            	ltr: {
            		state: function (a, b) {
            			return b && "ltr" === b.style.direction
            		},
            		exec: function () {
            			var b = this,
                            c = b.getRangeHelper().getFirstBlockParent(),
                            d = a(c);
            			b.focus(), (c && !d.is("body") || (b.execCommand("formatBlock", "p"), c = b.getRangeHelper().getFirstBlockParent(), d = a(c), c && !d.is("body"))) && ("ltr" === d.css("direction") ? d.css("direction", "") : d.css("direction", "ltr"))
            		},
            		tooltip: "Left-to-Right"
            	},
            	rtl: {
            		state: function (a, b) {
            			return b && "rtl" === b.style.direction
            		},
            		exec: function () {
            			var b = this,
                            c = b.getRangeHelper().getFirstBlockParent(),
                            d = a(c);
            			b.focus(), (c && !d.is("body") || (b.execCommand("formatBlock", "p"), c = b.getRangeHelper().getFirstBlockParent(), d = a(c), c && !d.is("body"))) && ("rtl" === d.css("direction") ? d.css("direction", "") : d.css("direction", "rtl"))
            		},
            		tooltip: "Right-to-Left"
            	},
            	print: {
            		exec: "print",
            		tooltip: "Print"
            	},
            	maximize: {
            		state: function () {
            			return this.maximize()
            		},
            		exec: function () {
            			this.maximize(!this.maximize())
            		},
            		txtExec: function () {
            			this.maximize(!this.maximize())
            		},
            		tooltip: "Maximize",
            		shortcut: "ctrl+shift+m"
            	},
            	source: {
            		state: function () {
            			return this.sourceMode()
            		},
            		exec: function () {
            			this.toggleSourceMode()
            		},
            		txtExec: function () {
            			this.toggleSourceMode()
            		},
            		tooltip: "View source",
            		shortcut: "ctrl+shift+s"
            	},
            	ignore: {}
            };
		return f
	}.call(b, c, b, a), !(void 0 !== d && (a.exports = d))
}, function (a, b, c) {
	var d;
	d = function () {
		"use strict";
		var a = c(1);
		return {
			toolbar: "bold,italic,underline,strike,subscript,superscript|left,center,right,justify|font,size,color,removeformat|cut,copy,paste,pastetext|bulletlist,orderedlist,indent,outdent|table|code,quote|horizontalrule,image,email,link,unlink|emoticon,youtube,date,time|ltr,rtl|print,maximize,source",
			toolbarExclude: null,
			style: "jquery.sceditor.default.css",
			fonts: "Arial,Arial Black,Comic Sans MS,Courier New,Georgia,Impact,Sans-serif,Serif,Times New Roman,Trebuchet MS,Verdana",
			colors: null,
			locale: a("html").attr("lang") || "en",
			charset: "utf-8",
			emoticonsCompat: !1,
			emoticonsEnabled: !0,
			emoticonsRoot: "",
			emoticons: {
				dropdown: {
					":)": "emoticons/smile.png",
					":angel:": "emoticons/angel.png",
					":angry:": "emoticons/angry.png",
					"8-)": "emoticons/cool.png",
					":'(": "emoticons/cwy.png",
					":ermm:": "emoticons/ermm.png",
					":D": "emoticons/grin.png",
					"<3": "emoticons/heart.png",
					":(": "emoticons/sad.png",
					":O": "emoticons/shocked.png",
					":P": "emoticons/tongue.png",
					";)": "emoticons/wink.png"
				},
				more: {
					":alien:": "emoticons/alien.png",
					":blink:": "emoticons/blink.png",
					":blush:": "emoticons/blush.png",
					":cheerful:": "emoticons/cheerful.png",
					":devil:": "emoticons/devil.png",
					":dizzy:": "emoticons/dizzy.png",
					":getlost:": "emoticons/getlost.png",
					":happy:": "emoticons/happy.png",
					":kissing:": "emoticons/kissing.png",
					":ninja:": "emoticons/ninja.png",
					":pinch:": "emoticons/pinch.png",
					":pouty:": "emoticons/pouty.png",
					":sick:": "emoticons/sick.png",
					":sideways:": "emoticons/sideways.png",
					":silly:": "emoticons/silly.png",
					":sleeping:": "emoticons/sleeping.png",
					":unsure:": "emoticons/unsure.png",
					":woot:": "emoticons/w00t.png",
					":wassat:": "emoticons/wassat.png"
				},
				hidden: {
					":whistling:": "emoticons/whistling.png",
					":love:": "emoticons/wub.png"
				}
			},
			width: null,
			height: null,
			resizeEnabled: !0,
			resizeMinWidth: null,
			resizeMinHeight: null,
			resizeMaxHeight: null,
			resizeMaxWidth: null,
			resizeHeight: !0,
			resizeWidth: !0,
			dateFormat: "year-month-day",
			toolbarContainer: null,
			enablePasteFiltering: !1,
			disablePasting: !1,
			readOnly: !1,
			rtl: !1,
			autofocus: !1,
			autofocusEnd: !0,
			autoExpand: !1,
			autoUpdate: !1,
			spellcheck: !0,
			runWithoutWysiwygSupport: !1,
			id: null,
			plugins: "",
			zIndex: null,
			bbcodeTrim: !1,
			disableBlockRemove: !1,
			parserOptions: {},
			dropDownCss: {}
		}
	}.call(b, c, b, a), !(void 0 !== d && (a.exports = d))
}, function (a, b, c) {
	var d;
	d = function () {
		"use strict";
		var a = c(1),
            b = c(9),
            d = c(5),
            e = c(4),
            f = e.ie,
            g = f && 11 > f,
            h = function (b) {
            	return a("<p>", b.ownerDocument).append(b).html()
            },
            i = function (c, e) {
            	var i, j, k, l = e || c.contentDocument || c.document,
                    m = c,
                    n = !!c.getSelection,
                    o = "sceditor-start-marker",
                    p = "sceditor-end-marker",
                    q = "character",
                    r = this;
            	r.insertHTML = function (a, b) {
            		var c, d, e = r.selectedRange();
            		if (!e) return !1;
            		if (n) {
            			for (b && (a += r.selectedHtml() + b), d = l.createElement("p"), c = l.createDocumentFragment(), d.innerHTML = a; d.firstChild;) c.appendChild(d.firstChild);
            			r.insertNode(c)
            		} else e.pasteHTML(k(a, b, !0)), r.restoreRange()
            	}, k = function (c, d, e) {
            		var g, h, j = l.createElement("div"),
                        k = a(j);
            		if ("string" == typeof c ? (d && (c += r.selectedHtml() + d), k.html(c)) : (k.append(c), d && k.append(r.selectedRange().extractContents()).append(d)), g = j.lastChild) {
            			for (; !b.isInline(g.lastChild, !0) ;) g = g.lastChild;
            			return b.canHaveChildren(g) && (h = a(g), g.lastChild || h.append("​")), f && 9 > f && a(g).is("img") && k.append("​"), r.removeMarkers(), (h || k).append(i(o)).append(i(p)), e ? k.html() : a(l.createDocumentFragment()).append(k.contents())[0]
            		}
            	}, r.insertNode = function (a, c) {
            		if (n) {
            			var d = k(a, c),
                            e = r.selectedRange(),
                            f = e.commonAncestorContainer;
            			if (!d) return !1;
            			e.deleteContents(), f && 3 !== f.nodeType && !b.canHaveChildren(f) ? f.parentNode.insertBefore(d, f) : e.insertNode(d), r.restoreRange()
            		} else r.insertHTML(h(a), c ? h(c) : null)
            	}, r.cloneSelected = function () {
            		var a = r.selectedRange();
            		return a ? n ? a.cloneRange() : a.duplicate() : void 0
            	}, r.selectedRange = function () {
            		var a, b, c = n ? m.getSelection() : l.selection;
            		if (c) {
            			if (c.getRangeAt && c.rangeCount <= 0) {
            				for (b = l.body; b.firstChild;) b = b.firstChild;
            				a = l.createRange(), a.setStart(b, 0), c.addRange(a)
            			}
            			return n && (a = c.getRangeAt(0)), n || "Control" === c.type || (a = c.createRange()), j(a) ? a : null
            		}
            	}, j = function (a) {
            		var b;
            		return a && !n && (b = a.parentElement()), b ? b.ownerDocument === l : !0
            	}, r.hasSelection = function () {
            		var a = n ? m.getSelection() : l.selection;
            		return n || !a ? a && a.rangeCount > 0 : "None" !== a.type && j(a.createRange())
            	}, r.selectedHtml = function () {
            		var a, b = r.selectedRange();
            		if (b) {
            			if (n) return a = l.createElement("p"), a.appendChild(b.cloneContents()), a.innerHTML;
            			if ("" !== b.text && b.htmlText) return b.htmlText
            		}
            		return ""
            	}, r.parentNode = function () {
            		var a = r.selectedRange();
            		return a ? a.parentElement ? a.parentElement() : a.commonAncestorContainer : void 0
            	}, r.getFirstBlockParent = function (a) {
            		var c = function (a) {
            			return b.isInline(a, !0) ? (a = a ? a.parentNode : null, a ? c(a) : a) : a
            		};
            		return c(a || r.parentNode())
            	}, r.insertNodeAt = function (a, b) {
            		var c = r.selectedRange(),
                        d = r.cloneSelected();
            		return d ? (d.collapse(a), n ? d.insertNode(b) : d.pasteHTML(h(b)), void r.selectRange(c)) : !1
            	}, i = function (a) {
            		r.removeMarker(a);
            		var b = l.createElement("span");
            		return b.id = a, b.style.lineHeight = "0", b.style.display = "none", b.className = "sceditor-selection sceditor-ignore", b.innerHTML = " ", b
            	}, r.insertMarkers = function () {
            		r.insertNodeAt(!0, i(o)), r.insertNodeAt(!1, i(p))
            	}, r.getMarker = function (a) {
            		return l.getElementById(a)
            	}, r.removeMarker = function (a) {
            		var b = r.getMarker(a);
            		b && b.parentNode.removeChild(b)
            	}, r.removeMarkers = function () {
            		r.removeMarker(o), r.removeMarker(p)
            	}, r.saveRange = function () {
            		r.insertMarkers()
            	}, r.selectRange = function (c) {
            		if (n) {
            			var d, e = m.getSelection(),
                            f = c.endContainer;
            			if (!g && c.collapsed && f && !b.isInline(f, !0)) {
            				for (d = f.lastChild; d && a(d).is(".sceditor-ignore") ;) d = d.previousSibling;
            				if (a(d).is("br")) {
            					var h = l.createRange();
            					h.setEndAfter(d), h.collapse(!1), r.compare(c, h) && (c.setStartBefore(d), c.collapse(!0))
            				}
            			}
            			e && (r.clear(), e.addRange(c))
            		} else c.select()
            	}, r.restoreRange = function () {
            		var c, d, e, f = r.selectedRange(),
                        g = r.getMarker(o),
                        h = r.getMarker(p);
            		return g && h && f ? (d = g.nextSibling === h, n ? (f = l.createRange(), f.setStartBefore(g), f.setEndAfter(h)) : (f = l.body.createTextRange(), c = l.body.createTextRange(), e = g.previousSibling, g.nextSibling !== h || e && b.isInline(e, !0) && !a(e).is("br") || a(g).before("​"), c.moveToElementText(g), f.setEndPoint("StartToStart", c), f.moveStart(q, 0), c.moveToElementText(h), f.setEndPoint("EndToStart", c), f.moveEnd(q, 0)), d && f.collapse(!0), r.selectRange(f), void r.removeMarkers()) : !1
            	}, r.selectOuterText = function (a, b) {
            		var c = r.cloneSelected();
            		return c ? (c.collapse(!1), n ? (c.setStart(c.startContainer, c.startOffset - a), c.setEnd(c.endContainer, c.endOffset + b)) : (c.moveStart(q, 0 - a), c.moveEnd(q, b)), void r.selectRange(c)) : !1
            	}, r.getOuterText = function (a, b) {
            		var c, d, e = "",
                        f = r.cloneSelected();
            		return f ? (f.collapse(!a), n ? (c = f.startContainer.textContent, d = f.startOffset, a && (d -= b, 0 > d && (b += d, d = 0)), e = c.substr(d, b)) : (a ? f.moveStart(q, 0 - b) : f.moveEnd(q, b), e = f.text), e) : ""
            	}, r.raplaceKeyword = function (a, b, c, e, f, g) {
            		c || a.sort(function (a, b) {
            			return a[0].length - b[0].length
            		});
            		var h, i, j, k, l, m, o, p, q = "[\\s    ]",
                        s = a.length,
                        t = e || a[s - 1][0].length;
            		if (f) {
            			if (!n) return !1;
            			t++
            		}
            		for (g = g || "", h = r.getOuterText(!0, t), l = h.length, i = h + g, b && (i += r.getOuterText(!1, t)) ; s--;)
            			if (o = a[s][0], p = o.length, k = l - 1 - p, j = f ? i.substr(Math.max(0, k - 1)).search(new RegExp("(?:" + q + ")" + d.regex(o) + "(?=" + q + ")")) : i.indexOf(o, k), j > -1) {
            				if (f && (j += k + 1), j > l || l > j + p + (f ? 1 : 0)) continue;
            				return m = l - j, r.selectOuterText(m, p - m - (/^\S/.test(g) ? 1 : 0)), r.insertHTML(a[s][1]), !0
            			}
            		return !1
            	}, r.compare = function (a, b) {
            		var c = n ? Range.END_TO_END : "EndToEnd",
                        d = n ? Range.START_TO_START : "StartToStart",
                        e = n ? "compareBoundaryPoints" : "compareEndPoints";
            		return b || (b = r.selectedRange()), a && b ? j(a) && j(b) && 0 === a[e](c, b) && 0 === a[e](d, b) : !a && !b
            	}, r.clear = function () {
            		var a = n ? m.getSelection() : l.selection;
            		a && (a.removeAllRanges ? a.removeAllRanges() : a.empty && a.empty())
            	}
            };
		return i
	}.call(b, c, b, a), !(void 0 !== d && (a.exports = d))
}, function (a, b, c) {
	var d;
	d = function () {
		"use strict";
		var a = c(1),
            b = c(4),
            d = {},
            e = {
            	traverse: function (a, b, c, d, f) {
            		if (a)
            			for (a = f ? a.lastChild : a.firstChild; a;) {
            				var g = f ? a.previousSibling : a.nextSibling;
            				if (!c && b(a) === !1 || !d && e.traverse(a, b, c, d, f) === !1 || c && b(a) === !1) return !1;
            				a = g
            			}
            	},
            	rTraverse: function (a, b, c, d) {
            		this.traverse(a, b, c, d, !0)
            	},
            	parseHTML: function (b, c) {
            		var d = [],
                        e = (c || document).createElement("div");
            		return e.innerHTML = b, a.merge(d, e.childNodes), d
            	},
            	hasStyling: function (b) {
            		var c = a(b);
            		return b && (!c.is("p,div") || b.className || c.attr("style") || !a.isEmptyObject(c.data()))
            	},
            	convertElement: function (a, c) {
            		for (var d, f, g = a.attributes, h = g.length, i = a.ownerDocument.createElement(c) ; h--;) f = g[h], (!b.ie || f.specified) && (b.ie < 8 && /style/i.test(f.name) ? e.copyCSS(a, i) : i.setAttribute(f.name, f.value));
            		for (; d = a.firstChild;) i.appendChild(d);
            		return a.parentNode.replaceChild(i, a), i
            	},
            	blockLevelList: "|body|hr|p|div|h1|h2|h3|h4|h5|h6|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|blockquote|center|",
            	canHaveChildren: function (a) {
            		return /11?|9/.test(a.nodeType) ? "|iframe|area|base|basefont|br|col|frame|hr|img|input|isindex|link|meta|param|command|embed|keygen|source|track|wbr|".indexOf("|" + a.nodeName.toLowerCase() + "|") < 0 : !1
            	},
            	isInline: function (a, b) {
            		var c, d = (a || {}).nodeType || 3;
            		return 1 !== d ? 3 === d : (c = a.tagName.toLowerCase(), "code" === c ? !b : e.blockLevelList.indexOf("|" + c + "|") < 0)
            	},
            	copyCSS: function (a, b) {
            		b.style.cssText = a.style.cssText + b.style.cssText
            	},
            	fixNesting: function (a) {
            		var b = function (a) {
            			for (; e.isInline(a.parentNode, !0) ;) a = a.parentNode;
            			return a
            		};
            		e.traverse(a, function (a) {
            			if (1 === a.nodeType && !e.isInline(a, !0) && e.isInline(a.parentNode, !0)) {
            				var c = b(a),
                                d = c.parentNode,
                                f = e.extractContents(c, a),
                                g = a;
            				e.copyCSS(c, g), d.insertBefore(f, c), d.insertBefore(g, c)
            			}
            		})
            	},
            	findCommonAncestor: function (b, c) {
            		return a(b).parents().has(a(c)).first()
            	},
            	getSibling: function (a, b) {
            		return a ? (b ? a.previousSibling : a.nextSibling) || e.getSibling(a.parentNode, b) : null
            	},
            	removeWhiteSpace: function (b, c) {
            		for (var d, f, g, h, i, j, k, l, m = e.getSibling, n = e.isInline, o = b.firstChild; o;) {
            			if (k = o.nextSibling, d = o.nodeValue, f = o.nodeType, 1 === f && o.firstChild && (j = a(o).css("whiteSpace"), /pre(\-wrap)?$/i.test(j) || e.removeWhiteSpace(o, /line$/i.test(j))), 3 === f && d) {
            				for (g = m(o), h = m(o, !0), l = !1; a(h).hasClass("sceditor-ignore") ;) h = m(h, !0);
            				if (n(o) && h) {
            					for (i = h; i.lastChild;) i = i.lastChild;
            					l = 3 === i.nodeType ? /[\t\n\r ]$/.test(i.nodeValue) : !n(i)
            				}
            				d = d.replace(/\u200B/g, ""), h && n(h) && !l || (d = d.replace(c ? /^[\t ]+/ : /^[\t\n\r ]+/, "")), g && n(g) || (d = d.replace(c ? /[\t ]+$/ : /[\t\n\r ]+$/, "")), d.length ? o.nodeValue = d.replace(c ? /[\t ]+/g : /[\t\n\r ]+/g, " ") : b.removeChild(o)
            			}
            			o = k
            		}
            	},
            	extractContents: function (b, c) {
            		var d, f = e.findCommonAncestor(b, c).get(0),
                        g = !1,
                        h = !1;
            		return (d = function (f) {
            			var i, j = b.ownerDocument.createDocumentFragment();
            			return e.traverse(f, function (e) {
            				return h || e === c ? (h = !0, !1) : (e === b && (g = !0), void (a.contains(e, b) || g && a.contains(e, c) ? (i = e.cloneNode(!1), i.appendChild(d(e)), j.appendChild(i)) : g && !a.contains(j, e) && j.appendChild(e)))
            			}, !1), j
            		})(f)
            	},
            	getOffset: function (a) {
            		for (var b = 0, c = 0; a;) b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
            		return {
            			left: b,
            			top: c
            		}
            	},
            	getStyle: function (b, c) {
            		var e, f, g, h = b.style;
            		if (!h) return "";
            		if (d[c] || (d[c] = a.camelCase(c)), c = d[c], g = h[c], "textAlign" === c) {
            			if (e = a(b), f = h.direction, g = g || e.css(c), e.parent().css(c) === g || "block" !== e.css("display") || e.is("hr") || e.is("th")) return "";
            			if (f && g && (/right/i.test(g) && "rtl" === f || /left/i.test(g) && "ltr" === f)) return ""
            		}
            		return g
            	},
            	hasStyle: function (b, c, d) {
            		var f = e.getStyle(b, c);
            		return f ? !d || f === d || a.isArray(d) && a.inArray(f, d) > -1 : !1
            	}
            };
		return e
	}.call(b, c, b, a), !(void 0 !== d && (a.exports = d))
}, function (a, b, c) {
	var d;
	d = function () {
		"use strict";
		var a = {
			html: '<!DOCTYPE html><html{attrs}><head><style>.ie * {min-height: auto !important} .ie table td {height:15px}</style><meta http-equiv="Content-Type" content="text/html;charset={charset}" /><link rel="stylesheet" type="text/css" href="{style}" /></head><body contenteditable="true" {spellcheck}><p></p></body></html>',
			toolbarButton: '<a class="sceditor-button sceditor-button-{name}" data-sceditor-command="{name}" unselectable="on"><div unselectable="on">{dispName}</div></a>',
			emoticon: '<img src="{url}" data-sceditor-emoticon="{key}" alt="{key}" title="{tooltip}" />',
			fontOpt: '<a class="sceditor-font-option" href="#" data-font="{font}"><font face="{font}">{font}</font></a>',
			sizeOpt: '<a class="sceditor-fontsize-option" data-size="{size}" href="#"><font size="{size}">{size}</font></a>',
			pastetext: '<div><label for="txt">{label}</label> <textarea cols="20" rows="7" id="txt"></textarea></div><div><input type="button" class="button" value="{insert}" /></div>',
			table: '<div><label for="rows">{rows}</label><input type="text" id="rows" value="2" /></div><div><label for="cols">{cols}</label><input type="text" id="cols" value="2" /></div><div><input type="button" class="button" value="{insert}" /></div>',
			image: '<div><label for="link">{url}</label> <input type="text" id="image" placeholder="http://" /></div><div><label for="width">{width}</label> <input type="text" id="width" size="2" /></div><div><label for="height">{height}</label> <input type="text" id="height" size="2" /></div><div><input type="button" class="button" value="{insert}" /></div>',
			email: '<div><label for="email">{label}</label> <input type="text" id="email" /></div><div><label for="des">{desc}</label> <input type="text" id="des" /></div><div><input type="button" class="button" value="{insert}" /></div>',
			link: '<div><label for="link">{url}</label> <input type="text" id="link" placeholder="http://" /></div><div><label for="des">{desc}</label> <input type="text" id="des" /></div><div><input type="button" class="button" value="{ins}" /></div>',
			youtubeMenu: '<div><label for="link">{label}</label> <input type="text" id="link" placeholder="http://" /></div><div><input type="button" class="button" value="{insert}" /></div>',
			youtube: '<iframe width="560" height="315" src="http://www.youtube.com/embed/{id}?wmode=opaque" data-youtube-id="{id}" frameborder="0" allowfullscreen></iframe>'
		};
		return function (b, c, d) {
			var e = a[b];
			return $.each(c, function (a, b) {
				e = e.replace(new RegExp("\\{" + a + "\\}", "g"), b)
			}), d && (e = $(e)), e
		}
	}.call(b, c, b, a), !(void 0 !== d && (a.exports = d))
}]),
function (a, b, c) {
	"use strict";
	var d = a.sceditor,
        e = d.plugins,
        f = d.escapeEntities,
        g = d.escapeUriScheme,
        h = d.ie,
        i = h && 11 > h,
        j = d.command.get,
        k = {
        	bold: {
        		txtExec: ["[b]", "[/b]"]
        	},
        	italic: {
        		txtExec: ["[i]", "[/i]"]
        	},
        	underline: {
        		txtExec: ["[u]", "[/u]"]
        	},
        	strike: {
        		txtExec: ["[s]", "[/s]"]
        	},
        	subscript: {
        		txtExec: ["[sub]", "[/sub]"]
        	},
        	superscript: {
        		txtExec: ["[sup]", "[/sup]"]
        	},
        	left: {
        		txtExec: ["[left]", "[/left]"]
        	},
        	center: {
        		txtExec: ["[center]", "[/center]"]
        	},
        	right: {
        		txtExec: ["[right]", "[/right]"]
        	},
        	justify: {
        		txtExec: ["[justify]", "[/justify]"]
        	},
        	font: {
        		txtExec: function (a) {
        			var b = this;
        			j("font")._dropDown(b, a, function (a) {
        				b.insertText("[font=" + a + "]", "[/font]")
        			})
        		}
        	},
        	size: {
        		txtExec: function (a) {
        			var b = this;
        			j("size")._dropDown(b, a, function (a) {
        				b.insertText("[size=" + a + "]", "[/size]")
        			})
        		}
        	},
        	color: {
        		txtExec: function (a) {
        			var b = this;
        			j("color")._dropDown(b, a, function (a) {
        				b.insertText("[color=" + a + "]", "[/color]")
        			})
        		}
        	},
        	bulletlist: {
        		txtExec: function (b, c) {
        			var d = "";
        			a.each(c.split(/\r?\n/), function () {
        				d += (d ? "\n" : "") + "[li]" + this + "[/li]"
        			}), this.insertText("[ul]\n" + d + "\n[/ul]")
        		}
        	},
        	orderedlist: {
        		txtExec: function (b, c) {
        			var d = "";
        			a.each(c.split(/\r?\n/), function () {
        				d += (d ? "\n" : "") + "[li]" + this + "[/li]"
        			}), e.bbcode.bbcode.get(""), this.insertText("[ol]\n" + d + "\n[/ol]")
        		}
        	},
        	table: {
        		txtExec: ["[table][tr][td]", "[/td][/tr][/table]"]
        	},
        	horizontalrule: {
        		txtExec: ["[hr]"]
        	},
        	code: {
        		txtExec: ["[code]", "[/code]"]
        	},
        	image: {
        		txtExec: function (a, b) {
        			var c = this,
                        d = prompt(c._("Enter the image URL:"), b);
        			d && c.insertText("[img]" + d + "[/img]")
        		}
        	},
        	email: {
        		txtExec: function (a, b) {
        			var c = this,
                        d = b && b.indexOf("@") > -1 ? null : b,
                        e = prompt(c._("Enter the e-mail address:"), d ? "" : b),
                        f = prompt(c._("Enter the displayed text:"), d || e) || e;
        			e && c.insertText("[email=" + e + "]" + f + "[/email]")
        		}
        	},
        	link: {
        		txtExec: function (b, c) {
        			var d = this,
                        e = /^[a-z]+:\/\//i.test(a.trim(c)) ? null : c,
                        f = prompt(d._("Enter URL:"), e ? "http://" : a.trim(c)),
                        g = prompt(d._("Enter the displayed text:"), e || f) || f;
        			f && d.insertText("[url=" + f + "]" + g + "[/url]")
        		}
        	},
        	quote: {
        		txtExec: ["[quote]", "[/quote]"]
        	},
        	youtube: {
        		txtExec: function (a) {
        			var b = this;
        			j("youtube")._dropDown(b, a, function (a) {
        				b.insertText("[youtube]" + a + "[/youtube]")
        			})
        		}
        	},
        	rtl: {
        		txtExec: ["[rtl]", "[/rtl]"]
        	},
        	ltr: {
        		txtExec: ["[ltr]", "[/ltr]"]
        	}
        },
        l = function (a) {
        	return a ? a.replace(/\\(.)/g, "$1").replace(/^(["'])(.*?)\1$/, "$2") : a
        },
        m = function () {
        	var a, b = arguments;
        	return b[0].replace(/\{(\d+)\}/g, function (c, d) {
        		return b[d - 0 + 1] !== a ? b[d - 0 + 1] : "{" + d + "}"
        	})
        },
        n = {
        	OPEN: "open",
        	CONTENT: "content",
        	NEWLINE: "newline",
        	CLOSE: "close"
        },
        o = function (a, b, c, d, e, f) {
        	var g = this;
        	g.type = a, g.name = b, g.val = c, g.attrs = d || {}, g.children = e || [], g.closing = f || null
        };
	o.prototype = {
		clone: function (a) {
			var b = this;
			return new o(b.type, b.name, b.val, b.attrs, a ? b.children : [], b.closing ? b.closing.clone() : null)
		},
		splitAt: function (b) {
			var c, d = this,
                e = 0,
                f = d.children.length;
			if ("number" != typeof b && (b = a.inArray(b, d.children)), 0 > b || b > f) return null;
			for (; f--;) f >= b ? e++ : f = 0;
			return c = d.clone(), c.children = d.children.splice(b, e), c
		}
	};
	var p = function (b) {
		if (!(this instanceof p)) return new p(b);
		var d, g, j, k, m, q, r, s, t, u, v, w, x, y, z, A = this;
		d = function () {
			A.bbcodes = e.bbcode.bbcodes, A.opts = a.extend({}, p.defaults, b)
		}, A.tokenize = function (a) {
			var b, c, d, e = [],
                f = [{
                	type: n.CLOSE,
                	regex: /^\[\/[^\[\]]+\]/
                }, {
                	type: n.OPEN,
                	regex: /^\[[^\[\]]+\]/
                }, {
                	type: n.NEWLINE,
                	regex: /^(\r\n|\r|\n)/
                }, {
                	type: n.CONTENT,
                	regex: /^([^\[\r\n]+|\[)/
                }];
			f.reverse();
			a: for (; a.length;) {
				for (d = f.length; d--;)
					if (c = f[d].type, (b = a.match(f[d].regex)) && b[0]) {
						e.push(g(c, b[0])), a = a.substr(b[0].length);
						continue a
					}
				a.length && e.push(g(n.CONTENT, a)), a = ""
			}
			return e
		}, g = function (b, c) {
			var d, f, g, h = /\[([^\]\s=]+)(?:([^\]]+))?\]/,
                i = /\[\/([^\[\]]+)\]/;
			return b === n.OPEN && (d = c.match(h)) && (g = y(d[1]), d[2] && (d[2] = a.trim(d[2])) && (f = j(d[2]))), b === n.CLOSE && (d = c.match(i)) && (g = y(d[1])), b === n.NEWLINE && (g = "#newline"), g && (b !== n.OPEN && b !== n.CLOSE || e.bbcode.bbcodes[g]) || (b = n.CONTENT, g = "#"), new o(b, g, c, f)
		}, j = function (a) {
			var b, c = /([^\s=]+)=(?:(?:(["'])((?:\\\2|[^\2])*?)\2)|((?:.(?!\s\S+=))*.))/g,
                d = {};
			if ("=" === a.charAt(0) && a.indexOf("=", 1) < 0) d.defaultattr = l(a.substr(1));
			else
				for ("=" === a.charAt(0) && (a = "defaultattr" + a) ; b = c.exec(a) ;) d[y(b[1])] = l(b[3]) || b[4];
			return d
		}, A.parse = function (a, b) {
			var c = k(A.tokenize(a)),
                d = A.opts;
			return d.fixInvalidChildren && t(c), d.removeEmptyTags && s(c), d.fixInvalidNesting && q(c), m(c, null, b), d.removeEmptyTags && s(c), c
		}, w = function (a, b, c) {
			for (var d = c.length; d--;)
				if (c[d].type === b && c[d].name === a) return !0;
			return !1
		}, r = function (b, c) {
			var d = b ? A.bbcodes[b.name] : {},
                e = d.allowedChildren;
			return A.opts.fixInvalidChildren && e ? a.inArray(c.name || "#", e) > -1 : !0
		}, k = function (b) {
			for (var c, d, e, f, g, h, i, j = [], k = [], l = [], m = function () {
                    return z(l)
			}, o = function (a) {
                    m() ? m().children.push(a) : k.push(a)
			}, p = function (b) {
                    return m() && (d = A.bbcodes[m().name]) && d.closedBy && a.inArray(b, d.closedBy) > -1
			}; c = b.shift() ;) {
				switch (i = b[0], c.type) {
					case n.OPEN:
						p(c.name) && l.pop(), o(c), d = A.bbcodes[c.name], d && d.isSelfClosing || !d.closedBy && !w(c.name, n.CLOSE, b) ? d && d.isSelfClosing || (c.type = n.CONTENT) : l.push(c);
						break;
					case n.CLOSE:
						if (m() && c.name !== m().name && p("/" + c.name) && l.pop(), m() && c.name === m().name) m().closing = c, l.pop();
						else if (w(c.name, n.OPEN, l)) {
							for (; e = l.pop() ;) {
								if (e.name === c.name) {
									e.closing = c;
									break
								}
								f = e.clone(), j.length > 1 && f.children.push(z(j)), j.push(f)
							}
							for (o(z(j)), g = j.length; g--;) l.push(j[g]);
							j.length = 0
						} else c.type = n.CONTENT, o(c);
						break;
					case n.NEWLINE:
						m() && i && p((i.type === n.CLOSE ? "/" : "") + i.name) && (i.type !== n.CLOSE || i.name !== m().name) && (d = A.bbcodes[m().name], d && d.breakAfter ? l.pop() : d && d.isInline === !1 && A.opts.breakAfterBlock && d.breakAfter !== !1 && l.pop()), o(c);
						break;
					default:
						o(c)
				}
				h = c
			}
			return k
		}, m = function (a, b, c) {
			var d, e, f, g, h, i, j, k, l = a.length;
			b && (g = A.bbcodes[b.name]);
			for (var o = l; o--;)
				if (d = a[o])
					if (d.type === n.NEWLINE) {
						if (e = o > 0 ? a[o - 1] : null, f = l - 1 > o ? a[o + 1] : null, k = !1, !c && g && g.isSelfClosing !== !0 && (e ? i || f || (g.isInline === !1 && A.opts.breakEndBlock && g.breakEnd !== !1 && (k = !0), g.breakEnd && (k = !0), i = k) : (g.isInline === !1 && A.opts.breakStartBlock && g.breakStart !== !1 && (k = !0), g.breakStart && (k = !0))), e && e.type === n.OPEN && (h = A.bbcodes[e.name]) && (c ? h.isInline === !1 && (k = !0) : (h.isInline === !1 && A.opts.breakAfterBlock && h.breakAfter !== !1 && (k = !0), h.breakAfter && (k = !0))), !c && !j && f && f.type === n.OPEN && (h = A.bbcodes[f.name]) && (h.isInline === !1 && A.opts.breakBeforeBlock && h.breakBefore !== !1 && (k = !0), h.breakBefore && (k = !0), j = k, k)) {
							a.splice(o, 1);
							continue
						}
						k && a.splice(o, 1), j = !1
					} else d.type === n.OPEN && m(d.children, d, c)
		}, q = function (b, c, d, e) {
			var f, g, h, i, j, k, l = function (a) {
				var b = A.bbcodes[a.name];
				return !b || b.isInline !== !1
			};
			for (c = c || [], e = e || b, g = 0; g < b.length; g++)
				if ((f = b[g]) && f.type === n.OPEN) {
					if (!l(f) && d && (h = z(c), k = h.splitAt(f), j = c.length > 1 ? c[c.length - 2].children : e, i = a.inArray(h, j), i > -1)) return k.children.splice(a.inArray(f, k.children), 1), void j.splice(i + 1, 0, f, k);
					c.push(f), q(f.children, c, d || l(f), e), c.pop(f)
				}
		}, t = function (a, b) {
			for (var c, d, e = a.length; e--;) (c = a[e]) && (r(b, c) || (c.name = null, c.type = n.CONTENT, r(b, c) ? (d = [e + 1, 0].concat(c.children), c.closing && (c.closing.name = null, c.closing.type = n.CONTENT, d.push(c.closing)), e += d.length - 1, Array.prototype.splice.apply(a, d)) : b.children.splice(e, 1)), c.type === n.OPEN && t(c.children, c))
		}, s = function (b) {
			for (var c, d, e = function (a) {
                    for (var b = a.length; b--;) {
                        var c = a[b].type;
                        if (c === n.OPEN || c === n.CLOSE) return !1;
                        if (c === n.CONTENT && /\S|\u00A0/.test(a[b].val)) return !1
			}
                    return !0
			}, f = b.length; f--;) (c = b[f]) && c.type === n.OPEN && (d = A.bbcodes[c.name], s(c.children), e(c.children) && d && !d.isSelfClosing && !d.allowsEmpty && b.splice.apply(b, a.merge([f, 1], c.children)))
		}, A.toHTML = function (a, b) {
			return u(A.parse(a, b), !0)
		}, u = function (b, d) {
			var g, j, k, l, m, o, p, q, r, s = [];
			for (q = function (a) {
                    return (!a || (a.isHtmlInline !== g ? a.isHtmlInline : a.isInline)) !== !1
			}; b.length > 0;)
				if (j = b.shift()) {
					if (j.type === n.OPEN) r = j.children[j.children.length - 1] || {}, k = A.bbcodes[j.name], o = d && q(k), l = u(j.children, !1), k && k.html ? (q(k) || !q(A.bbcodes[r.name]) || k.isPreFormatted || k.skipLastLineBreak || i || (l += "<br />"), a.isFunction(k.html) ? m = k.html.call(A, j, j.attrs, l) : (j.attrs[0] = l, m = e.bbcode.formatBBCodeString(k.html, j.attrs))) : m = j.val + l + (j.closing ? j.closing.val : "");
					else {
						if (j.type === n.NEWLINE) {
							if (!d) {
								s.push("<br />");
								continue
							}
							p || (s.push("<div>"), (8 > h || c.documentMode && c.documentMode < 8) && s.push(" ")), i || s.push("<br />"), b.length || s.push("<br />"), s.push("</div>\n"), p = !1;
							continue
						}
						o = d, m = f(j.val, !0)
					}
					o && !p ? (s.push("<div>"), p = !0) : !o && p && (s.push("</div>\n"), p = !1), s.push(m)
				}
			return p && s.push("</div>\n"), s.join("")
		}, A.toBBCode = function (a, b) {
			return v(A.parse(a, b))
		}, v = function (a) {
			for (var b, c, d, e, f, g, h, i, j, k, l = []; a.length > 0;)
				if (b = a.shift())
					if (d = A.bbcodes[b.name], e = !(!d || d.isInline !== !1), f = d && d.isSelfClosing, h = e && A.opts.breakBeforeBlock && d.breakBefore !== !1 || d && d.breakBefore, i = e && !f && A.opts.breakStartBlock && d.breakStart !== !1 || d && d.breakStart, j = e && A.opts.breakEndBlock && d.breakEnd !== !1 || d && d.breakEnd, k = e && A.opts.breakAfterBlock && d.breakAfter !== !1 || d && d.breakAfter, g = (d ? d.quoteType : null) || A.opts.quoteType || p.QuoteType.auto, d || b.type !== n.OPEN)
						if (b.type === n.OPEN) {
							if (h && l.push("\n"), l.push("[" + b.name), b.attrs) {
								b.attrs.defaultattr && (l.push("=", x(b.attrs.defaultattr, g, "defaultattr")), delete b.attrs.defaultattr);
								for (c in b.attrs) b.attrs.hasOwnProperty(c) && l.push(" ", c, "=", x(b.attrs[c], g, c))
							}
							l.push("]"), i && l.push("\n"), b.children && l.push(v(b.children)), f || d.excludeClosing || (j && l.push("\n"), l.push("[/" + b.name + "]")), k && l.push("\n"), b.closing && f && l.push(b.closing.val)
						} else l.push(b.val);
					else l.push(b.val), b.children && l.push(v(b.children)), b.closing && l.push(b.closing.val);
			return l.join("")
		}, x = function (b, c, d) {
			var e = p.QuoteType,
                f = /\s|=/.test(b);
			return a.isFunction(c) ? c(b, d) : c === e.never || c === e.auto && !f ? b : '"' + b.replace("\\", "\\\\").replace('"', '\\"') + '"'
		}, z = function (a) {
			return a.length ? a[a.length - 1] : null
		}, y = function (a) {
			return a.toLowerCase()
		}, d()
	};
	p.QuoteType = {
		always: 1,
		never: 2,
		auto: 3
	}, p.defaults = {
		breakBeforeBlock: !1,
		breakStartBlock: !1,
		breakEndBlock: !1,
		breakAfterBlock: !0,
		removeEmptyTags: !0,
		fixInvalidNesting: !0,
		fixInvalidChildren: !0,
		quoteType: p.QuoteType.auto
	}, a.sceditorBBCodePlugin = e.bbcode = function () {
		var b, f, g, h, j = this;
		j.bbcodes = e.bbcode.bbcodes, j.stripQuotes = l;
		var n = {},
            o = {},
            q = {
            	ul: ["li", "ol", "ul"],
            	ol: ["li", "ol", "ul"],
            	table: ["tr"],
            	tr: ["td", "th"],
            	code: ["br", "p", "div"]
            };
		j.init = function () {
			j.opts = this.opts, b(), this.commands = a.extend(!0, {}, k, this.commands), this.toBBCode = j.signalToSource, this.fromBBCode = j.signalToWysiwyg
		}, b = function () {
			a.each(j.bbcodes, function (b) {
				var c, d = j.bbcodes[b].tags,
                    e = j.bbcodes[b].styles;
				d && a.each(d, function (a, d) {
					c = j.bbcodes[b].isInline === !1, n[a] = n[a] || {}, n[a][c] = n[a][c] || {}, n[a][c][b] = d
				}), e && a.each(e, function (a, d) {
					c = j.bbcodes[b].isInline === !1, o[c] = o[c] || {}, o[c][a] = o[c][a] || {}, o[c][a][b] = d
				})
			})
		}, f = function (b, c, e) {
			var f, g, h = d.dom.getStyle;
			return e = !!e, o[e] ? (a.each(o[e], function (d, e) {
				f = h(b[0], d), f && h(b.parent()[0], d) !== f && a.each(e, function (d, e) {
					(!e || a.inArray(f.toString(), e) > -1) && (g = j.bbcodes[d].format, c = a.isFunction(g) ? g.call(j, b, c) : m(g, c))
				})
			}), c) : c
		}, g = function (b, c, e) {
			var f, g, h = b[0],
                k = h.nodeName.toLowerCase();
			e = !!e, n[k] && n[k][e] && a.each(n[k][e], function (d, e) {
				(!e || (f = !1, a.each(e, function (c, d) {
					return !b.attr(c) || d && a.inArray(b.attr(c), d) < 0 ? void 0 : (f = !0, !1)
				}), f)) && (g = j.bbcodes[d].format, c = a.isFunction(g) ? g.call(j, b, c) : m(g, c))
			});
			var l = d.dom.isInline;
			if (e && (!l(h, !0) || "br" === k)) {
				for (var o, p, q, r = h.previousSibling; r && (a(r).hasClass("sceditor-ignore") || 1 === r.nodeType && !a(r).is("br") && l(r, !0) && !r.firstChild) ;) r = r.previousSibling;
				do {
					for (p = h.parentNode, q = p.lastChild; a(q).hasClass("sceditor-ignore") ;) q = q.previousSibling;
					o = q === h, h = p
				} while (p && o && l(p, !0));
				(!o || "li" === k || "br" === k && i) && (c += "\n"), "br" !== k && r && !a(r).is("br") && l(r, !0) && (c = "\n" + c)
			}
			return c
		}, j.signalToSource = function (b, e) {
			var f, g, h = new p(j.opts.parserOptions);
			return e || ("string" == typeof b ? (f = a("<div />").css("visibility", "hidden").appendTo(c.body).html(b), e = f) : e = a(b)), e && e.jquery ? (d.dom.removeWhiteSpace(e[0]), g = j.elementToBbcode(e), f && f.remove(), g = h.toBBCode(g, !0), j.opts.bbcodeTrim && (g = a.trim(g)), g) : ""
		}, j.elementToBbcode = function (b) {
			var c = function (b, e) {
				var h = "";
				return d.dom.traverse(b, function (b) {
					var d = a(b),
                        j = "",
                        k = b.nodeType,
                        l = b.nodeName.toLowerCase(),
                        m = q[l],
                        n = b.firstChild,
                        o = !0;
					if ("object" == typeof e && (o = a.inArray(l, e) > -1, d.is("img") && d.data("sceditor-emoticon") && (o = !0), o || (m = e)), 3 === k || 1 === k)
						if (1 === k) {
							if (d.hasClass("sceditor-ignore")) return;
							if (d.hasClass("sceditor-nlf") && (!n || !i && 1 === b.childNodes.length && /br/i.test(n.nodeName))) return;
							"iframe" !== l && (j = c(b, m)), o ? ("code" !== l && (j = f(d, j), j = g(d, j), j = f(d, j, !0)), h += g(d, j, !0)) : h += j
						} else h += b.nodeValue
				}, !1, !0), h
			};
			return c(b[0])
		}, j.signalToWysiwyg = function (b, c) {
			var d = new p(j.opts.parserOptions),
                e = d.toHTML(j.opts.bbcodeTrim ? a.trim(b) : b);
			return c ? h(e) : e
		}, h = function (b) {
			var e, f, g, h = a("<div />").hide().appendTo(c.body),
                j = h[0];
			return g = function (b, e) {
				if (!d.dom.hasStyling(b)) {
					if (i || 1 !== b.childNodes.length || !a(b.firstChild).is("br"))
						for (; f = b.firstChild;) j.insertBefore(f, b);
					if (e) {
						var g = j.lastChild;
						b !== g && a(g).is("div") && b.nextSibling === g && j.insertBefore(c.createElement("br"), b)
					}
					j.removeChild(b)
				}
			}, j.innerHTML = b.replace(/<\/div>\n/g, "</div>"), (e = j.firstChild) && a(e).is("div") && g(e, !0), (e = j.lastChild) && a(e).is("div") && g(e), j = j.innerHTML, h.remove(), j
		}
	}, e.bbcode.formatBBCodeString = function (a, b) {
		return a.replace(/\{([^}]+)\}/g, function (a, c) {
			var d, e = !0;
			return "!" === c.charAt(0) && (e = !1, c = c.substring(1)), "0" === c && (e = !1), b[c] === d ? a : e ? f(b[c], !0) : b[c]
		})
	};
	var q = function (a) {
		return a = parseInt(a, 10), isNaN(a) ? "00" : (a = Math.max(0, Math.min(a, 255)).toString(16), a.length < 2 ? "0" + a : a)
	},
        r = function (a) {
        	var b;
        	return a = a || "#000", (b = a.match(/rgb\((\d{1,3}),\s*?(\d{1,3}),\s*?(\d{1,3})\)/i)) ? "#" + q(b[1]) + q(b[2] - 0) + q(b[3] - 0) : (b = a.match(/#([0-f])([0-f])([0-f])\s*?$/i)) ? "#" + b[1] + b[1] + b[2] + b[2] + b[3] + b[3] : a
        },
        s = {
        	b: {
        		tags: {
        			b: null,
        			strong: null
        		},
        		styles: {
        			"font-weight": ["bold", "bolder", "401", "700", "800", "900"]
        		},
        		format: "[b]{0}[/b]",
        		html: "<strong>{0}</strong>"
        	},
        	i: {
        		tags: {
        			i: null,
        			em: null
        		},
        		styles: {
        			"font-style": ["italic", "oblique"]
        		},
        		format: "[i]{0}[/i]",
        		html: "<em>{0}</em>"
        	},
        	u: {
        		tags: {
        			u: null
        		},
        		styles: {
        			"text-decoration": ["underline"]
        		},
        		format: "[u]{0}[/u]",
        		html: "<u>{0}</u>"
        	},
        	s: {
        		tags: {
        			s: null,
        			strike: null
        		},
        		styles: {
        			"text-decoration": ["line-through"]
        		},
        		format: "[s]{0}[/s]",
        		html: "<s>{0}</s>"
        	},
        	sub: {
        		tags: {
        			sub: null
        		},
        		format: "[sub]{0}[/sub]",
        		html: "<sub>{0}</sub>"
        	},
        	sup: {
        		tags: {
        			sup: null
        		},
        		format: "[sup]{0}[/sup]",
        		html: "<sup>{0}</sup>"
        	},
        	font: {
        		tags: {
        			font: {
        				face: null
        			}
        		},
        		styles: {
        			"font-family": null
        		},
        		quoteType: p.QuoteType.never,
        		format: function (a, b) {
        			var c;
        			return a.is("font") && (c = a.attr("face")) || (c = a.css("font-family")), "[font=" + l(c) + "]" + b + "[/font]"
        		},
        		html: '<font face="{defaultattr}">{0}</font>'
        	},
        	size: {
        		tags: {
        			font: {
        				size: null
        			}
        		},
        		styles: {
        			"font-size": null
        		},
        		format: function (a, b) {
        			var c = a.attr("size"),
                        d = 2;
        			return c || (c = a.css("fontSize")), c.indexOf("px") > -1 ? (c = c.replace("px", "") - 0, 12 > c && (d = 1), c > 15 && (d = 3), c > 17 && (d = 4), c > 23 && (d = 5), c > 31 && (d = 6), c > 47 && (d = 7)) : d = c, "[size=" + d + "]" + b + "[/size]"
        		},
        		html: '<font size="{defaultattr}">{!0}</font>'
        	},
        	color: {
        		tags: {
        			font: {
        				color: null
        			}
        		},
        		styles: {
        			color: null
        		},
        		quoteType: p.QuoteType.never,
        		format: function (a, b) {
        			var c;
        			return a.is("font") && (c = a.attr("color")) || (c = a[0].style.color || a.css("color")), "[color=" + r(c) + "]" + b + "[/color]"
        		},
        		html: function (a, b, c) {
        			return '<font color="' + f(r(b.defaultattr), !0) + '">' + c + "</font>"
        		}
        	},
        	ul: {
        		tags: {
        			ul: null
        		},
        		breakStart: !0,
        		isInline: !1,
        		skipLastLineBreak: !0,
        		format: "[ul]{0}[/ul]",
        		html: "<ul>{0}</ul>"
        	},
        	list: {
        		breakStart: !0,
        		isInline: !1,
        		skipLastLineBreak: !0,
        		html: "<ul>{0}</ul>"
        	},
        	ol: {
        		tags: {
        			ol: null
        		},
        		breakStart: !0,
        		isInline: !1,
        		skipLastLineBreak: !0,
        		format: "[ol]{0}[/ol]",
        		html: "<ol>{0}</ol>"
        	},
        	li: {
        		tags: {
        			li: null
        		},
        		isInline: !1,
        		closedBy: ["/ul", "/ol", "/list", "*", "li"],
        		format: "[li]{0}[/li]",
        		html: "<li>{0}</li>"
        	},
        	"*": {
        		isInline: !1,
        		closedBy: ["/ul", "/ol", "/list", "*", "li"],
        		html: "<li>{0}</li>"
        	},
        	table: {
        		tags: {
        			table: null
        		},
        		isInline: !1,
        		isHtmlInline: !0,
        		skipLastLineBreak: !0,
        		format: "[table]{0}[/table]",
        		html: "<table>{0}</table>"
        	},
        	tr: {
        		tags: {
        			tr: null
        		},
        		isInline: !1,
        		skipLastLineBreak: !0,
        		format: "[tr]{0}[/tr]",
        		html: "<tr>{0}</tr>"
        	},
        	th: {
        		tags: {
        			th: null
        		},
        		allowsEmpty: !0,
        		isInline: !1,
        		format: "[th]{0}[/th]",
        		html: "<th>{0}</th>"
        	},
        	td: {
        		tags: {
        			td: null
        		},
        		allowsEmpty: !0,
        		isInline: !1,
        		format: "[td]{0}[/td]",
        		html: "<td>{0}</td>"
        	},
        	emoticon: {
        		allowsEmpty: !0,
        		tags: {
        			img: {
        				src: null,
        				"data-sceditor-emoticon": null
        			}
        		},
        		format: function (a, b) {
        			return a.data("sceditor-emoticon") + b
        		},
        		html: "{0}"
        	},
        	hr: {
        		tags: {
        			hr: null
        		},
        		allowsEmpty: !0,
        		isSelfClosing: !0,
        		isInline: !1,
        		format: "[hr]{0}",
        		html: "<hr />"
        	},
        	img: {
        		allowsEmpty: !0,
        		tags: {
        			img: {
        				src: null
        			}
        		},
        		allowedChildren: ["#"],
        		quoteType: p.QuoteType.never,
        		format: function (a, b) {
        			var c, d, e = "",
                        f = a[0],
                        g = function (a) {
                        	return f.style ? f.style[a] : null
                        };
        			return a.attr("data-sceditor-emoticon") ? b : (c = a.attr("width") || g("width"), d = a.attr("height") || g("height"), (f.complete && (c || d) || c && d) && (e = "=" + a.width() + "x" + a.height()), "[img" + e + "]" + a.attr("src") + "[/img]")
        		},
        		html: function (a, b, c) {
        			var d, e, h, i, j = "";
        			return e = b.width, h = b.height, b.defaultattr && (i = b.defaultattr.split(/x/i), e = i[0], h = 2 === i.length ? i[1] : i[0]), e !== d && (j += ' width="' + f(e, !0) + '"'), h !== d && (j += ' height="' + f(h, !0) + '"'), "<img" + j + ' src="' + g(c) + '" />'
        		}
        	},
        	url: {
        		allowsEmpty: !0,
        		tags: {
        			a: {
        				href: null
        			}
        		},
        		quoteType: p.QuoteType.never,
        		format: function (a, b) {
        			var c = a.attr("href");
        			return "mailto:" === c.substr(0, 7) ? '[email="' + c.substr(7) + '"]' + b + "[/email]" : "[url=" + c + "]" + b + "[/url]"
        		},
        		html: function (a, b, c) {
        			return b.defaultattr = f(b.defaultattr, !0) || c, '<a href="' + g(b.defaultattr) + '">' + c + "</a>"
        		}
        	},
        	email: {
        		quoteType: p.QuoteType.never,
        		html: function (a, b, c) {
        			return '<a href="mailto:' + (f(b.defaultattr, !0) || c) + '">' + c + "</a>"
        		}
        	},
        	quote: {
        		tags: {
        			blockquote: null
        		},
        		isInline: !1,
        		quoteType: p.QuoteType.never,
        		format: function (b, c) {
        			var d = "",
                        e = a(b),
                        f = e.children("cite").first();
        			return (1 === f.length || e.data("author")) && (d = f.text() || e.data("author"), e.data("author", d), f.remove(), c = this.elementToBbcode(a(b)), d = "=" + d.replace(/(^\s+|\s+$)/g, ""), e.prepend(f)), "[quote" + d + "]" + c + "[/quote]"
        		},
        		html: function (a, b, c) {
        			return b.defaultattr && (c = "<cite>" + f(b.defaultattr) + "</cite>" + c), "<blockquote>" + c + "</blockquote>"
        		}
        	},
        	code: {
        		tags: {
        			code: null
        		},
        		isInline: !1,
        		allowedChildren: ["#", "#newline"],
        		format: "[code]{0}[/code]",
        		html: "<code>{0}</code>"
        	},
        	left: {
        		styles: {
        			"text-align": ["left", "-webkit-left", "-moz-left", "-khtml-left"]
        		},
        		isInline: !1,
        		format: "[left]{0}[/left]",
        		html: '<div align="left">{0}</div>'
        	},
        	center: {
        		styles: {
        			"text-align": ["center", "-webkit-center", "-moz-center", "-khtml-center"]
        		},
        		isInline: !1,
        		format: "[center]{0}[/center]",
        		html: '<div align="center">{0}</div>'
        	},
        	right: {
        		styles: {
        			"text-align": ["right", "-webkit-right", "-moz-right", "-khtml-right"]
        		},
        		isInline: !1,
        		format: "[right]{0}[/right]",
        		html: '<div align="right">{0}</div>'
        	},
        	justify: {
        		styles: {
        			"text-align": ["justify", "-webkit-justify", "-moz-justify", "-khtml-justify"]
        		},
        		isInline: !1,
        		format: "[justify]{0}[/justify]",
        		html: '<div align="justify">{0}</div>'
        	},
        	youtube: {
        		allowsEmpty: !0,
        		tags: {
        			iframe: {
        				"data-youtube-id": null
        			}
        		},
        		format: function (a, b) {
        			return a = a.attr("data-youtube-id"), a ? "[youtube]" + a + "[/youtube]" : b
        		},
        		html: '<iframe width="560" height="315" frameborder="0" src="http://www.youtube.com/embed/{0}?wmode=opaque" data-youtube-id="{0}" allowfullscreen></iframe>'
        	},
        	rtl: {
        		styles: {
        			direction: ["rtl"]
        		},
        		format: "[rtl]{0}[/rtl]",
        		html: '<div style="direction: rtl">{0}</div>'
        	},
        	ltr: {
        		styles: {
        			direction: ["ltr"]
        		},
        		format: "[ltr]{0}[/ltr]",
        		html: '<div style="direction: ltr">{0}</div>'
        	},
        	ignore: {}
        };
	e.bbcode.bbcode = {
		get: function (a) {
			return s[a] || null
		},
		set: function (b, c) {
			return b && c ? (c = a.extend(s[b] || {}, c), c.remove = function () {
				delete s[b]
			}, s[b] = c, this) : !1
		},
		rename: function (a, b) {
			return a in s ? (s[b] = s[a], delete s[a], this) : !1
		},
		remove: function (a) {
			return a in s && delete s[a], this
		}
	}, a.fn.sceditorBBCodePlugin = function (b) {
		return b = b || {}, a.isPlainObject(b) && (b.plugins = (b.plugins || "") + "bbcode"), this.sceditor(b)
	}, e.bbcode.normaliseColour = r, e.bbcode.formatString = m, e.bbcode.stripQuotes = l, e.bbcode.bbcodes = s, d.BBCodeParser = p
}(jQuery, window, document);