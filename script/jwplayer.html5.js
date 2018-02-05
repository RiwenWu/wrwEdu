(function(f) {
	f.html5 = {};
	f.html5.version = "6.6.3896"
})(jwplayer);
(function(f) {
	f.parseDimension = function(g) {
		if ("string" == typeof g) {
			if ("" === g)
				return 0;
			if (!(-1 < g.lastIndexOf("%")))
				return parseInt(g.replace("px", ""), 10)
		}
		return g
	};
	f.timeFormat = function(g) {
		if (0 < g) {
			var b = Math.floor(g / 3600), e = Math.floor((g - 3600 * b) / 60);
			g = Math.floor(g % 60);
			return ( b ? b + ":" : "") + (10 > e ? "0" : "") + e + ":" + (10 > g ? "0" : "") + g
		}
		return "00:00"
	};
	f.bounds = function(g) {
		try {
			var b = g.getBoundingClientRect(g), e = window.pageYOffset, c = window.pageXOffset;
			return {
				left : b.left + c,
				right : b.right + c,
				top : b.top + e,
				bottom : b.bottom + e,
				width : b.right - b.left,
				height : b.bottom - b.top
			}
		} catch(a) {
			return {
				left : 0,
				right : 0,
				width : 0,
				height : 0,
				top : 0,
				bottom : 0
			}
		}
	};
	f.empty = function(g) {
		if (g)
			for (; 0 < g.childElementCount; )
				g.removeChild(g.children[0])
	}
})(jwplayer.utils);
(function(f) {
	function g() {
		var b = document.createElement("style");
		b.type = "text/css";
		document.getElementsByTagName("head")[0].appendChild(b);
		return b
	}

	function b(b) {
		if (A)
			c[b].innerHTML = e(b);
		else {
			var a = c[b].sheet, d = q[b];
			if (a) {
				var g = a.cssRules;
				f.exists(d) && d < g.length && g[d].selectorText == b ? a.deleteRule(d) : q[b] = g.length;
				a.insertRule(e(b), q[b])
			}
		}
	}

	function e(b) {
		var a = b + "{\n";
		h(d[b], function(b, d) {
			a += "  " + b + ": " + d + ";\n"
		});
		return a += "}\n"
	}

	var c = {}, a, d = {}, r = 0, j = f.exists, h = f.foreach, q = {}, A = !1, n = f.css = function(e, k, p) {
		if (!c[e])
			if (A)
				c[e] = g();
			else {
				if (!a || 5E4 < a.sheet.cssRules.length)
					a = g();
				c[e] = a
			}
		j(p) || ( p = !1);
		d[e] || (d[e] = {});
		h(k, function(b, a) { a: {
				var c = a;
				if ("undefined" === typeof c)
					a =
					void 0;
				else {
					var k = p ? " !important" : "";
					if (isNaN(c))
						a = c.match(/png|gif|jpe?g/i) && 0 > c.indexOf("url") ? "url(" + c + ")" : c + k;
					else
						switch(b) {
							case "z-index":
							case "opacity":
								a = c + k;
								break a;
							default:
								a = b.match(/color/i) ? "#" + f.pad(c.toString(16).replace(/^0x/i, ""), 6) + k : 0 === c ? 0 + k : Math.ceil(c) + "px" + k
						}
				}
			}
			j(d[e][b]) && !j(a) ?
			delete d[e][b] : j(a) && (d[e][b] = a)
		});
		0 < r || b(e)
	};
	n.block = function() {
		r++
	};
	n.unblock = function() {
		r = Math.max(r - 1, 0);
		0 == r && h(c, function(a) {
			b(a)
		})
	};
	f.clearCss = function(a) {
		h(d, function(b) {
			0 <= b.indexOf(a) &&
			delete d[b]
		});
		h(c, function(d) {
			0 <= d.indexOf(a) && b(d)
		})
	};
	f.transform = function(b, a) {
		var d = "-transform", c;
		a = a ? a : "";
		"string" == typeof b ? ( c = {}, c["-webkit" + d] = a, c["-ms" + d] = a, c["-moz" + d] = a, c["-o" + d] = a, f.css(b, c)) : ( d = "Transform", c = b.style, c["webkit" + d] = a, c["Moz" + d] = a, c["ms" + d] = a, c["O" + d] = a)
	};
	f.dragStyle = function(b, a) {
		f.css(b, {
			"-webkit-user-select" : a,
			"-moz-user-select" : a,
			"-ms-user-select" : a,
			"-webkit-user-drag" : a,
			"user-select" : a,
			"user-drag" : a
		})
	};
	f.transitionStyle = function(b, a) {
		navigator.userAgent.match(/5\.\d(\.\d)? safari/i) || f.css(b, {
			"-webkit-transition" : a,
			"-moz-transition" : a,
			"-o-transition" : a
		})
	};
	f.rotate = function(b, a) {
		f.transform(b, "rotate(" + a + "deg)")
	};
	n(".jwplayer " + " div span a img ul li video".split(" ").join(",.jwplayer ") + ", .jwclick", {
		margin : 0,
		padding : 0,
		border : 0,
		color : "#000000",
		"font-size" : "100%",
		font : "inherit",
		"vertical-align" : "baseline",
		"background-color" : "transparent",
		"text-align" : "left",
		direction : "ltr"
	});
	n(".jwplayer ul", {
		"list-style" : "none"
	})
})(jwplayer.utils);
(function(f) {
	f.scale = function(b, e, c, a, d) {
		var g = f.exists;
		g(e) || ( e = 1);
		g(c) || ( c = 1);
		g(a) || ( a = 0);
		g(d) || ( d = 0);
		f.transform(b, 1 == e && 1 == c && 0 == a && 0 == d ? "" : "scale(" + e + "," + c + ") translate(" + a + "px," + d + "px)")
	};
	f.stretch = function(b, e, c, a, d, r) {
		if (e && (b || ( b = g.UNIFORM), c && a && d && r)) {
			var j = c / d, h = a / r, q = "video" == e.tagName.toLowerCase(), A = !1, n;
			q && f.transform(e);
			n = "jw" + b.toLowerCase();
			switch(b.toLowerCase()) {
				case g.FILL:
					j > h ? (d *= j, r *= j) : (d *= h, r *= h);
				case g.NONE:
					j = h = 1;
				case g.EXACTFIT:
					A = !0;
					break;
				default:
					j > h ? 0.95 < d * h / c ? ( A = !0, n = "jwexactfit") : (d *= h, r *= h) : 0.95 < r * j / a ? ( A = !0, n = "jwexactfit") : (d *= j, r *= j), A && ( h = Math.ceil(100 * a / r) / 100, j = Math.ceil(100 * c / d) / 100)
			}
			q ? A ? (e.style.width = d + "px", e.style.height = r + "px", f.scale(e, j, h, (c - d) / 2 / j, (a - r) / 2 / h)) : (e.style.width = "", e.style.height = "") : (e.className = e.className.replace(/\s*jw(none|exactfit|uniform|fill)/g, ""), e.className += " " + n)
		}
	};
	var g = f.stretching = {
		NONE : "none",
		FILL : "fill",
		UNIFORM : "uniform",
		EXACTFIT : "exactfit"
	}
})(jwplayer.utils);
(function(f) {
	f.dfxp = function(g, b) {
		var e, c, a = jwplayer.utils.seconds;
		this.load = function(a) {
			c = a;
			try {
				e.open("GET", a, !0), e.send(null)
			} catch(g) {
				b("Error loading DFXP File: " + a)
			}
		};
		e = new XMLHttpRequest;
		e.onreadystatechange = function() {
			if (4 === e.readyState)
				if (200 === e.status) {
					for (var d = e.responseText, r = [{
						begin : 0,
						text : ""
					}], d = d.replace(/^\s+/, "").replace(/\s+$/, ""), j = d.split("\x3c/p\x3e"), h = d.split("\x3c/tt:p\x3e"), q = [], d = 0; d < j.length; d++)
						0 <= j[d].indexOf("\x3cp") && (j[d] = j[d].substr(j[d].indexOf("\x3cp") + 2).replace(/^\s+/, "").replace(/\s+$/, ""), q.push(j[d]));
					for ( d = 0; d < h.length; d++)
						0 <= h[d].indexOf("\x3ctt:p") && (h[d] = h[d].substr(h[d].indexOf("\x3ctt:p") + 5).replace(/^\s+/, "").replace(/\s+$/, ""), q.push(h[d]));
					j = q;
					for ( d = 0; d < j.length; d++) {
						h = j[d];
						q = {};
						try {
							var f = h.indexOf('begin\x3d"'), h = h.substr(f + 7), f = h.indexOf('" end\x3d"');
							q.begin = a(h.substr(0, f));
							h = h.substr(f + 7);
							f = h.indexOf('"');
							q.end = a(h.substr(0, f));
							f = h.indexOf('"\x3e');
							h = h.substr(f + 2);
							q.text = h
						} catch(n) {
						}
						h = q;
						h.text && (r.push(h), h.end && (r.push({
							begin : h.end,
							text : ""
						}),
						delete h.end))
					}
					1 < r.length ? g(r) : b("Invalid DFXP file: " + c)
				} else
					r = e.status, 0 == r ? b("Crossdomain loading denied: " + c) : 404 == r ? b("DFXP File not found: " + c) : b("Error " + r + " loading DFXP file: " + c)
		}
	}
})(jwplayer.parsers);
(function(f) {
	f.srt = function(g, b, e) {
		function c(a) {
			0 == a ? b("Crossdomain loading denied: " + r) : 404 == a ? b("SRT File not found: " + r) : b("Error " + a + " loading SRT file: " + r)
		}

		function a(a) {
			var d = e ? [] : [{
				begin : 0,
				text : ""
			}];
			a = a.replace(/^\s+/, "").replace(/\s+$/, "");
			var c = a.split("\r\n\r\n");
			1 == c.length && ( c = a.split("\n\n"));
			for ( a = 0; a < c.length; a++)
				if ("WEBVTT" != c[a]) {
					var j, k = c[a];
					j = {};
					var p = k.split("\r\n");
					1 == p.length && ( p = k.split("\n"));
					try {
						k = 1;
						0 < p[0].indexOf(" --\x3e ") && ( k = 0);
						var l = p[k].indexOf(" --\x3e ");
						0 < l && (j.begin = h(p[k].substr(0, l)), j.end = h(p[k].substr(l + 5)));
						if (p[k + 1]) {
							j.text = p[k + 1];
							for (k += 2; k < p.length; k++)
								j.text += "\x3cbr/\x3e" + p[k]
						}
					} catch(f) {
					}
					j.text && (d.push(j), j.end && !e && (d.push({
						begin : j.end,
						text : ""
					}),
					delete j.end))
				}
			1 < d.length ? g(d) : b("Invalid SRT file: " + r)
		}

		var d, r, j = jwplayer.utils, h = j.seconds;
		this.load = function(g) {
			r = g;
			try {
				var e;
				e = g && 0 <= g.indexOf("://") && g.split("/")[2] != window.location.href.split("/")[2] ? !0 : !1;
				e && j.exists(window.XDomainRequest) && ( d = new XDomainRequest, d.onload = function() {
					a(d.responseText)
				}, d.onerror = function() {
					c(d.status)
				});
				d.open("GET", g, !0);
				d.send(null)
			} catch(h) {
				b("Error loading SRT File: " + g)
			}
		};
		d = new XMLHttpRequest;
		d.onreadystatechange = function() {
			4 === d.readyState && (200 === d.status ? a(d.responseText) : c(d.status))
		}
	}
})(jwplayer.parsers);
(function(f) {
	var g = jwplayer.utils, b = jwplayer.events, e = b.state, c = jwplayer.parsers, a = g.css, d = "playing", r = document;
	f.captions = function(a, h) {
		function q(a) {
			g.log("CAPTIONS(" + a + ")")
		}

		function f(a) {
			( G = a.fullscreen) ? (n(), setTimeout(n, 500)) : l(!0)
		}

		function n() {
			var a = D.offsetHeight, b = D.offsetWidth;
			0 != a && 0 != b && s.resize(b, Math.round(0.94 * a))
		}

		function y(a) {
			a = a.responseXML.firstChild;
			"xml" == c.localName(a) && ( a = a.nextSibling);
			for (; a.nodeType == a.COMMENT_NODE; )
				a = a.nextSibling;
			("tt" == c.localName(a) ? new jwplayer.parsers.dfxp(p, q) : new jwplayer.parsers.srt(p, q)).load(C)
		}

		function k() {
			(new jwplayer.parsers.srt(p, q)).load(C)
		}

		function p(a) {
			s.populate(a);
			z < u.length && (u[z].data = a);
			l(!1)
		}

		function l(a) {
			u.length ? v == d && 0 < B ? (s.show(), G ? f({
				fullscreen : !0
			}) : (I(), a && setTimeout(I, 500))) : s.hide() : s.hide()
		}

		function I() {
			s.resize()
		}

		function t(a) {
			0 < a ? ( z = a - 1, B = a) : B = 0;
			z >= u.length || (u[z].data ? s.populate(u[z].data) : ( C = a = u[z].file, g.ajax(a, y, k)), l(!1))
		}

		function w() {
			var a = [];
			a.push({
				label : "Off"
			});
			for (var b = 0; b < u.length; b++)
				a.push({
					label : u[b].label
				});
			return a
		}

		var D, x = {
			back : !0,
			color : "#FFFFFF",
			fontSize : 15
		}, m = {
			fontFamily : "Arial,sans-serif",
			fontStyle : "normal",
			fontWeight : "normal",
			textDecoration : "none"
		}, s, v, z, u = [], B = 0, G = !1, C, M = new b.eventdispatcher;
		g.extend(this, M);
		this.element = function() {
			return D
		};
		this.getCaptionsList = function() {
			return w()
		};
		this.getCurrentCaptions = function() {
			return B
		};
		this.setCurrentCaptions = function(a) {
			if (0 <= a && B != a && a <= u.length) {
				t(a);
				a = w();
				g.saveCookie("captionLabel", a[B].label);
				var c = b.JWPLAYER_CAPTIONS_CHANGED;
				M.sendEvent(c, {
					type : c,
					tracks : a,
					track : B
				})
			}
		};
		D = r.createElement("div");
		D.id = a.id + "_caption";
		D.className = "jwcaptions";
		a.jwAddEventListener(b.JWPLAYER_PLAYER_STATE, function(a) {
			switch(a.newstate) {
				case e.IDLE:
					v = "idle";
					l(!1);
					break;
				case e.PLAYING:
					v = d, l(!1)
			}
		});
		a.jwAddEventListener(b.JWPLAYER_PLAYLIST_ITEM, function() {
			z = 0;
			u = [];
			s.update(0);
			for (var c = a.jwGetPlaylist()[a.jwGetPlaylistIndex()].tracks, d = [], e = 0, k = "", m = 0, k = "", e = 0; e < c.length; e++)
				k = c[e].kind.toLowerCase(), ("captions" == k || "subtitles" == k) && d.push(c[e]);
			for ( e = B = 0; e < d.length; e++)
				if ( k = d[e].file)
					d[e].label || (d[e].label = e.toString()), u.push(d[e]);
			for ( e = 0; e < u.length; e++)
				if (u[e]["default"]) {
					m = e + 1;
					break
				}
			if ( k = g.getCookies().captionLabel) {
				c = w();
				for ( e = 0; e < c.length; e++)
					if (k == c[e].label) {
						m = e;
						break
					}
			}
			t(m);
			l(!1);
			c = b.JWPLAYER_CAPTIONS_LIST;
			d = w();
			M.sendEvent(c, {
				type : c,
				tracks : d,
				track : B
			})
		});
		a.jwAddEventListener(b.JWPLAYER_MEDIA_ERROR, q);
		a.jwAddEventListener(b.JWPLAYER_ERROR, q);
		a.jwAddEventListener(b.JWPLAYER_READY, function() {
			g.foreach(x, function(a, b) {
				h &&
				void 0 != h[a.toLowerCase()] ? "color" == a ? m.color = "#" + String(h.color).substr(-6) : m[a] = h[a.toLowerCase()] : m[a] = b
			});
			s = new jwplayer.html5.captions.renderer(m, D);
			l(!1)
		});
		a.jwAddEventListener(b.JWPLAYER_MEDIA_TIME, function(a) {
			s.update(a.position)
		});
		a.jwAddEventListener(b.JWPLAYER_FULLSCREEN, f);
		a.jwAddEventListener(b.JWPLAYER_RESIZE, function() {
			l(!1)
		})
	};
	a(".jwcaptions", {
		position : "absolute",
		cursor : "pointer",
		width : "100%",
		height : "100%",
		overflow : "hidden"
	})
})(jwplayer.html5);
(function(f) {
	var g = jwplayer.utils.foreach;
	f.captions.renderer = function(b, e) {
		function c(b) {
			r(h, {
				visibility : "hidden"
			});
			q.innerHTML = b;
			y = "" == b ? "hidden" : "visible";
			setTimeout(a, 20)
		}

		function a() {
			var a = h.clientWidth, c = Math.round(b.fontSize * Math.pow(a / 400, 0.6)), d = Math.round(1.4 * c);
			r(q, {
				maxWidth : a + "px",
				fontSize : c + "px",
				lineHeight : d + "px",
				visibility : y
			})
		}

		function d() {
			for (var a = -1, b = 0; b < j.length; b++)
				if (j[b].begin <= n && (b == j.length - 1 || j[b + 1].begin >= n)) {
					a = b;
					break
				}
			-1 == a ? c("") : a != f && ( f = a, c(j[b].text))
		}

		function r(a, b) {
			g(b, function(b, c) {
				a.style[b] = c
			})
		}

		var j, h, q, f, n, y = "visible", k;
		this.hide = function() {
			r(h, {
				display : "none"
			});
			k && (clearInterval(k), k = null)
		};
		this.populate = function(a) {
			f = -1;
			j = a;
			d()
		};
		this.resize = function() {
			a()
		};
		h = document.createElement("div");
		q = document.createElement("span");
		h.appendChild(q);
		e.appendChild(h);
		r(h, {
			display : "block",
			height : "auto",
			position : "absolute",
			bottom : "20px",
			textAlign : "center",
			width : "100%"
		});
		r(q, {
			color : "#" + b.color.substr(-6),
			display : "inline-block",
			fontFamily : b.fontFamily,
			fontStyle : b.fontStyle,
			fontWeight : b.fontWeight,
			height : "auto",
			margin : "auto",
			position : "relative",
			textAlign : "center",
			textDecoration : b.textDecoration,
			wordWrap : "break-word",
			width : "auto"
		});
		b.back ? r(q, {
			background : "#000"
		}) : r(q, {
			textShadow : "-2px 0px 1px #000,2px 0px 1px #000,0px -2px 1px #000,0px 2px 1px #000,-1px 1px 1px #000,1px 1px 1px #000,1px -1px 1px #000,1px 1px 1px #000"
		});
		this.show = function() {
			r(h, {
				display : "block"
			});
			k || ( k = setInterval(a, 250));
			a()
		};
		this.update = function(a) {
			n = a;
			j && d()
		}
	}
})(jwplayer.html5);
(function(f) {
	var g = f.html5, b = f.utils, e = f.events, c = e.state, a = b.css;
	f = b.transitionStyle;
	var d = b.isMobile(), r = b.isAndroid(4) && !b.isChrome(), j = "button", h = "text", q = "slider", A = "100%", n = {
		display : "none"
	}, y = {
		display : "block"
	}, k = {
		display : t
	}, p = !1, l = !0, I = null, t =
	void 0, w = window, D = document;
	g.controlbar = function(f, m) {
		function s(a, b, c) {
			return {
				name : a,
				type : b,
				className : c
			}
		}

		function v(a) {
			var c = p, e;
			a.duration == Number.POSITIVE_INFINITY || !a.duration && b.isSafari() && !d ? $.setText(H.jwGetPlaylist()[H.jwGetPlaylistIndex()].title || "Live broadcast") : (L.elapsed && ( e = b.timeFormat(a.position), L.elapsed.innerHTML = e, c = e.length != b.timeFormat(La).length), L.duration && ( e = b.timeFormat(a.duration), L.duration.innerHTML = e, c = c || e.length != b.timeFormat(ua).length), 0 < a.duration ? V(a.position / a.duration) : V(0), ua = a.duration, La = a.position, $.setText());
			c && Aa()
		}

		function z() {
			var a = H.jwGetMute();
			Q("mute", a);
			R( a ? 0 : Ma)
		}

		function u() {
			Ma = H.jwGetVolume() / 100;
			R(Ma)
		}

		function B() {
			a(F(".jwhd"), n);
			a(F(".jwcc"), n);
			Da();
			Aa()
		}

		function G(a) {
			Na = a.currentQuality;
			ia && 0 <= Na && ia.setActive(a.currentQuality)
		}

		function C(a) {
			na && ( Qa = a.track, ja && 0 <= Qa && ja.setActive(a.track))
		}

		function M() {
			W = b.extend({}, Ea, oa.getComponentSettings("controlbar"), m);
			wa = N("background").height;
			a("#" + ea, {
				height : wa,
				bottom : pa ? 0 : W.margin
			});
			a(F(".jwtext"), {
				font : W.fontsize + "px/" + N("background").height + "px " + W.font,
				color : W.fontcolor,
				"font-weight" : W.fontweight
			});
			a(F(".jwoverlay"), {
				bottom : wa
			});
			0 < W.maxwidth && a(F(), {
				"max-width" : pa ? t : W.maxwidth
			})
		}

		function F(a) {
			return "#" + ea + ( a ? " " + a : "")
		}

		function P() {
			return D.createElement("span")
		}

		function E(c, d, e, g, k) {
			var m = P(), j = N(c);
			g = g ? " left center" : " center";
			var h = Y(j);
			m.className = "jw" + c;
			m.innerHTML = "\x26nbsp;";
			if (j && "" != j.src)
				return e = e ? {
					background : "url('" + j.src + "') repeat-x " + g,
					"background-size" : h,
					height : k ? j.height : t
				} : {
					background : "url('" + j.src + "') no-repeat" + g,
					"background-size" : h,
					width : j.width,
					height : k ? j.height : t
				}, m.skin = j, a(F(( k ? ".jwvertical " : "") + ".jw" + c), b.extend(e, d)), L[c] = m
		}

		function O(b, c, e) {
			c && c.src && (a(b, {
				width : c.width,
				background : "url(" + c.src + ") no-repeat center",
				"background-size" : Y(c)
			}), e.src && !d && a(b + ":hover", {
				background : "url(" + e.src + ") no-repeat center",
				"background-size" : Y(e)
			}))
		}

		function U(a) {
			return function(b) {
				fb[a] && (fb[a](), d && Fa.sendEvent(e.JWPLAYER_USER_ACTION));
				b.preventDefault && b.preventDefault()
			}
		}

		function J(a) {
			b.foreach(Ra, function(b, c) {
				b != a && ("cc" == b && (clearTimeout(xa), xa = t), "hd" == b && (clearTimeout(ya), ya = t), c.hide())
			})
		}

		function Z() {
			pa || (Ga.show(), J("volume"))
		}

		function Q(a, c) {
			b.exists(c) || ( c = !Sa[a]);
			L[a] && (L[a].className = "jw" + a + ( c ? " jwtoggle jwtoggling" : " jwtoggling"), setTimeout(function() {
				L[a].className = L[a].className.replace(" jwtoggling", "")
			}, 100));
			Sa[a] = c
		}

		function Y(a) {
			return a ? parseInt(a.width) + "px " + parseInt(a.height) + "px" : "0 0"
		}

		function da() {
			fa && 1 < fa.length && (Za && (clearTimeout(Za), Za = t), ia.show(), J("hd"))
		}

		function aa() {
			na && 1 < na.length && ($a && (clearTimeout($a), $a = t), ja.show(), J("cc"))
		}

		function ga(a) {
			0 <= a && a < fa.length && (H.jwSetCurrentQuality(a), clearTimeout(ya), ya = t, ia.hide())
		}

		function ka(a) {
			0 <= a && a < na.length && (H.jwSetCurrentCaptions(a), clearTimeout(xa), xa = t, ja.hide())
		}

		function la(a) {
			a.preventDefault();
			D.onselectstart = function() {
				return p
			}
		}

		function ab() {
			L.timeRail.className = "jwrail";
			H.jwGetState() != c.IDLE && (H.jwSeekDrag(l), ha = "time", T(), Fa.sendEvent(e.JWPLAYER_USER_ACTION))
		}

		function qa(a) {
			if (ha) {
				var c = (new Date).getTime();
				50 < c - bb && (ra(a), bb = c);
				var d = L[ha].getElementsByClassName("jwrail")[0], d = b.bounds(d), d = a.x / d.width;
				100 < d && ( d = 100);
				a.type == b.touchEvents.DRAG_END ? (H.jwSeekDrag(p), L.timeRail.className = "jwrail jwsmooth", ha = I, Ta.time(d), va()) : (V(d), 500 < c - cb && ( cb = c, Ta.time(d)));
				Fa.sendEvent(e.JWPLAYER_USER_ACTION)
			}
		}

		function Oa(a) {
			var d = L.time.getElementsByClassName("jwrail")[0], d = b.bounds(d);
			a = a.x / d.width;
			100 < a && ( a = 100);
			H.jwGetState() != c.IDLE && (Ta.time(a), Fa.sendEvent(e.JWPLAYER_USER_ACTION))
		}

		function X(a) {
			return function(b) {
				0 == b.button && (L[a + "Rail"].className = "jwrail", "time" == a ? H.jwGetState() != c.IDLE && (H.jwSeekDrag(l), ha = a) : ha = a)
			}
		}

		function K(a) {
			var c = (new Date).getTime();
			50 < c - bb && (ra(a), bb = c);
			if (ha && 0 == a.button) {
				var d = L[ha].getElementsByClassName("jwrail")[0], e = b.bounds(d), d = ha, e = L[d].vertical ? (e.bottom - a.pageY) / e.height : (a.pageX - e.left) / e.width;
				"mouseup" == a.type ? ("time" == d && H.jwSeekDrag(p), L[d + "Rail"].className = "jwrail jwsmooth", ha = I, Ta[d.replace("H","")](e)) : ("time" == ha ? V(e) : R(e), 500 < c - cb && ( cb = c, Ta[ha.replace("H","")](e)));
				return !1
			}
		}

		function T() {
			sa && (ua && !pa && !d) && (Ha(sa), sa.show())
		}

		function va() {
			sa && sa.hide()
		}

		function ra(a) {
			if (( Ua = b.bounds(gb)) && 0 != Ua.width) {
				var c = sa.element();
				a = a.pageX ? a.pageX - Ua.left - w.pageXOffset : a.x;
				0 <= a && a <= Ua.width && (c.style.left = Math.round(a) + "px", Va(ua * a / Ua.width), ca = b.bounds(S))
			}
		}

		function Va(a) {
			db.innerHTML = b.timeFormat(a);
			Wa.updateTimeline(a);
			sa.setContents(Xa);
			ca = b.bounds(S);
			Ha(sa)
		}

		function Ya() {
			$a = setTimeout(ja.hide, 500)
		}

		function ma() {
			Za = setTimeout(ia.hide, 500)
		}

		function Ia(b, c, e, g) {
			if (!d) {
				var k = b.element();
				c.appendChild(k);
				c.addEventListener("mousemove", e, p);
				g ? c.addEventListener("mouseout", g, p) : c.addEventListener("mouseout", b.hide, p);
				a("#" + k.id, {
					left : "50%"
				})
			}
		}

		function ba(c, g, k, j) {
			if (d) {
				var m = c.element();
				g.appendChild(m);
				(new b.touch(g)).addEventListener(b.touchEvents.TAP, function() {
					"cc" == j ? ( xa ? (clearTimeout(xa), xa = t, c.hide()) : ( xa = setTimeout(function() {
						c.hide();
						xa = t
					}, 4E3), k()), Fa.sendEvent(e.JWPLAYER_USER_ACTION)) : "hd" == j && ( ya ? (clearTimeout(ya), ya = t, c.hide()) : ( ya = setTimeout(function() {
						c.hide();
						ya = t
					}, 4E3), k()), Fa.sendEvent(e.JWPLAYER_USER_ACTION))
				});
				a("#" + m.id, {
					left : "50%"
				})
			}
		}

		function ta(c) {
			var e = P();
			e.className = "jwgroup jw" + c;
			Ja[c] = e;
			if (Ba[c]) {
				var e = Ba[c], k = Ja[c];
				if (e && 0 < e.elements.length)
					for (var m = 0; m < e.elements.length; m++) {
						var f; a: {
							f = e.elements[m];
							var C = c;
							switch(f.type) {
								case h:
									C =
									void 0;
									f = f.name;
									var C = {}, s = N(("alt" == f ? "elapsed" : f) + "Background");
									if (s.src) {
										var l = P();
										l.id = ea + "_" + f;
										l.className = "elapsed" == f || "duration" == f ? "jwtext jw" + f + " jwhidden" : "jwtext jw" + f;
										C.background = "url(" + s.src + ") repeat-x center";
										C["background-size"] = Y(N("background"));
										a(F(".jw" + f), C);
										"alt" != f ? l.innerHTML = "00:00" : l.innerHTML = "";
										C = L[f] = l
									} else
										C = null;
									f = C;
									break a;
								case j:
									if ("blank" != f.name) {
										f = f.name;
										s = C;
										if (!N(f + "Button").src || d && ("mute" == f || 0 == f.indexOf("volume")) || r && /hd|cc/.test(f))
											f = I;
										else {
											var C = P(), l = P(), J =
											void 0, J = za, v = E(J.name);
											v || ( v = P(), v.className = "jwblankDivider");
											J.className && (v.className += " " + J.className);
											J = v;
											v = D.createElement("button");
											C.style += " display:inline-block";
											C.className = "jw" + f + " jwbuttoncontainer";
											"left" == s ? (C.appendChild(l), C.appendChild(J)) : (C.appendChild(J), C.appendChild(l));
											d ? "hd" != f && "cc" != f && (new b.touch(v)).addEventListener(b.touchEvents.TAP, U(f)) : v.addEventListener("click", U(f), p);
											v.innerHTML = "\x26nbsp;";
											l.appendChild(v);
											s = N(f + "Button");
											l = N(f + "ButtonOver");
											O(F(".jw" + f + " button"), s, l);
											( s = mb[f]) && O(F(".jw" + f + ".jwtoggle button"), N(s + "Button"), N(s + "ButtonOver"));
											f = L[f] = C
										}
										break a
									}
									break;
								case q:
									C =
									void 0;
									J = f.name;
									if (d && 0 == J.indexOf("volume"))
										C =
										void 0;
									else {
										f = P();
										var l = "volume" == J, y = J + ("time" == J ? "Slider" : "") + "Cap", s = l ? "Top" : "Left", C = l ? "Bottom" : "Right", v = E(y + s, I, p, p, l), x = E(y + C, I, p, p, l), z;
										z = J;
										var u = l, B = s, ka = C, w = P(), G = ["Rail", "Buffer", "Progress"], la =
										void 0;
										w.className = "jwrail jwsmooth";
										for (var M = 0; M < G.length; M++) {
											var Q = "time" == z ? "Slider" : "", H = z + Q + G[M], ca = E(H, I, !u, 0 == z.indexOf("volume"), u), K = E(H + "Cap" + B, I, p, p, u), ga = E(H + "Cap" + ka, I, p, p, u), Z = N(H + "Cap" + B), S = N(H + "Cap" + ka);
											if (ca) {
												var R = P();
												R.className = "jwrailgroup " + G[M];
												K && R.appendChild(K);
												R.appendChild(ca);
												ga && (R.appendChild(ga), ga.className += " jwcap" + ( u ? "Bottom" : "Right"));
												a(F(".jwrailgroup." + G[M]), {
													"min-width" : u ? t : Z.width + S.width
												});
												R.capSize = u ? Z.height + S.height : Z.width + S.width;
												a(F("." + ca.className), {
													left : u ? t : Z.width,
													right : u ? t : S.width,
													top : u ? Z.height : t,
													bottom : u ? S.height : t,
													height : u ? "auto" : t
												});
												2 == M && ( la = R);
												2 == M && !u ? ( ca = P(), ca.className = "jwprogressOverflow", ca.appendChild(R), L[H] = ca, w.appendChild(ca)) : (L[H] = R, w.appendChild(R))
											}
										}
										if ( B = E(z + Q + "Thumb", I, p, p, u))
											a(F("." + B.className), {
												opacity : "time" == z ? 0 : 1,
												"margin-top" : u ? B.skin.height / -2 : t
											}), B.className += " jwthumb", (u && la ? la : w).appendChild(B);
										d ? ( u = new b.touch(w), u.addEventListener(b.touchEvents.DRAG_START, ab), u.addEventListener(b.touchEvents.DRAG, qa), u.addEventListener(b.touchEvents.DRAG_END, qa), u.addEventListener(b.touchEvents.TAP, Oa)) : ( la = z, "volume" == la && !u && (la += "H"), w.addEventListener("mousedown", X(la), p));
										"time" == z && !d && (w.addEventListener("mousemove", T, p), w.addEventListener("mouseout", va, p));
										z = L[z + "Rail"] = w;
										w = N(y + s);
										y = N(y + s);
										N(J + "SliderRail");
										f.className = "jwslider jw" + J;
										v && f.appendChild(v);
										f.appendChild(z);
										x && (l && (x.className += " jwcapBottom"), f.appendChild(x));
										a(F(".jw" + J + " .jwrail"), {
											left : l ? t : w.width,
											right : l ? t : y.width,
											top : l ? w.height : t,
											bottom : l ? y.height : t,
											width : l ? A : t,
											height : l ? "auto" : t
										});
										L[J] = f;
										f.vertical = l;
										"time" == J ? ( sa = new g.overlay(ea + "_timetooltip", oa), Wa = new g.thumbs(ea + "_thumb"), db = D.createElement("div"), db.className = "jwoverlaytext", Xa = D.createElement("div"), C = Wa.element(), Xa.appendChild(C), Xa.appendChild(db), sa.setContents(Xa), gb = z, Va(0), C = sa.element(), z.appendChild(C), L.timeSliderRail || a(F(".jwtime"), n), L.timeSliderThumb && a(F(".jwtimeSliderThumb"), {
											"margin-left" : N("timeSliderThumb").width / -2
										}), Ca(0), V(0), V(0), Ca(0)) : 0 == J.indexOf("volume") && ( J = f, v = "volume" + ( l ? "" : "H"), x = l ? "vertical" : "horizontal", a(F(".jw" + v + ".jw" + x), {
											width : N(v + "Rail", l).width + ( l ? 0 : N(v + "Cap" + s).width + N(v + "RailCap" + s).width + N(v + "RailCap" + C).width + N(v + "Cap" + C).width),
											height : l ? N(v + "Cap" + s).height + N(v + "Rail").height + N(v + "RailCap" + s).height + N(v + "RailCap" + C).height + N(v + "Cap" + C).height : t
										}), J.className += " jw" + x);
										C = f
									}
									f = C;
									break a
							}
							f =
							void 0
						}
						f && ("volume" == e.elements[m].name && f.vertical ? ( Ga = new g.overlay(ea + "_volumeOverlay", oa), Ga.setContents(f)) : k.appendChild(f))
					}
			}
		}

		function Da() {
			1 < H.jwGetPlaylist().length && (!D.querySelector("#" + H.id + " .jwplaylist") || H.jwGetFullscreen()) ? (a(F(".jwnext"), k), a(F(".jwprev"), k)) : (a(F(".jwnext"), n), a(F(".jwprev"), n))
		}

		function Ha(a) {
			ca || ( ca = b.bounds(S));
			a.offsetX(0);
			var c = b.bounds(a.element());
			c.right > ca.right ? a.offsetX(ca.right - c.right) : c.left < ca.left && a.offsetX(ca.left - c.left)
		}

		function Ca(a) {
			a = Math.min(Math.max(0, a), 1);
			L.timeSliderBuffer && (L.timeSliderBuffer.style.width = 100 * a + "%", L.timeSliderBuffer.style.opacity = 0 < a ? 1 : 0)
		}

		function Ka(a, b) {
			if (L[a]) {
				var c = L[a].vertical, d = a + ("time" == a ? "Slider" : ""), e = 100 * Math.min(Math.max(0, b), 1) + "%", g = L[d + "Progress"], d = L[d + "Thumb"];
				g && ( c ? (g.style.height = e, g.style.bottom = 0) : g.style.width = e, g.style.opacity = 0 < b || ha ? 1 : 0);
				d && ( c ? d.style.top = 0 : d.style.left = e)
			}
		}

		function R(a) {
			Ka("volume", a);
			Ka("volumeH", a)
		}

		function V(a) {
			Ka("time", a)
		}

		function N(a) {
			var b = "controlbar", c = a;
			0 == a.indexOf("volume") && (0 == a.indexOf("volumeH") ? c = a.replace("volumeH", "volume") : b = "tooltip");
			return ( a = oa.getSkinElement(b, c)) ? a : {
				width : 0,
				height : 0,
				src : "",
				image : t,
				ready : p
			}
		}

		var H, oa, za = s("divider", "divider"), Ea = {
			margin : 8,
			maxwidth : 800,
			font : "Arial,sans-serif",
			fontsize : 11,
			fontcolor : 15658734,
			fontweight : "bold",
			layout : {
				left : {
					position : "left",
					elements : [s("play", j), s("prev", j), s("next", j), s("elapsed", h)]
				},
				center : {
					position : "center",
					elements : [s("time", q), s("alt", h)]
				},
				right : {
					position : "right",
					elements : [s("duration", h), s("hd", j), s("cc", j), s("mute", j), s("volume", q), s("volumeH", q), s("fullscreen", j)]
				}
			}
		}, W, Ba, L, wa, S, ea, ua, La, fa, Na, na, Qa, Ma, Ga, ca, gb, Ua, sa, Xa, Wa, db, Za, ya, ia, $a, xa, ja, hb, Pa, pa = p, eb = p, ha = p, cb = 0, ib = -1, bb = 0, Fa = new e.eventdispatcher, mb = {
			play : "pause",
			mute : "unmute",
			fullscreen : "normalscreen"
		}, Sa = {
			play : p,
			mute : p,
			fullscreen : p
		}, fb = {
			play : function() {
				Sa.play ? H.jwPause() : H.jwPlay()
			},
			mute : function() {
				H.jwSetMute(!Sa.mute);
				z({
					mute : Sa.mute
				})
			},
			fullscreen : function() {
				H.jwSetFullscreen()
			},
			next : function() {
				H.jwPlaylistNext()
			},
			prev : function() {
				H.jwPlaylistPrev()
			}
		}, Ta = {
			time : function(a) {
				H.jwSeek(a * ua)
			},
			volume : function(a) {
				R(a);
				0.1 > a && ( a = 0);
				0.9 < a && ( a = 1);
				H.jwSetVolume(100 * a)
			}
		}, Ra = {}, $ = this;
		b.extend($, Fa);
		$.setText = function(b) {
			a(F(".jwelapsed"), b ? n : y);
			a(F(".jwduration"), b ? n : y);
			a(F(".jwtime"), b ? n : y);
			a(F(".jwalt"), b ? y : n);
			L.timeSliderRail || a(F(".jwtime"), n);
			var c = S.querySelector(".jwalt");
			c && (c.innerHTML = b || "");
			Aa()
		};
		var Ja = {}, Aa = function() {
			clearTimeout(hb);
			hb = setTimeout($.redraw, 0)
		};
		$.redraw = function(c) {
			c && $.visible && $.show(l);
			M();
			c = N("capLeft");
			var d = N("capRight");
			a(F(".jwgroup.jwcenter"), {
				left : Math.round(b.parseDimension(Ja.left.offsetWidth) + c.width),
				right : Math.round(b.parseDimension(Ja.right.offsetWidth) + d.width)
			});
			c = !pa && S.parentNode.clientWidth > W.maxwidth;
			d = pa ? 0 : W.margin;
			a(F(), {
				left : c ? "50%" : d,
				right : c ? t : d,
				"margin-left" : c ? S.clientWidth / -2 : t,
				width : c ? A : t
			});
			a(F(".jwfullscreen"), {
				display : pa || eb ? "none" : t
			});
			a(F(".jwvolumeH"), {
				display : pa ? "block" : "none"
			});
			a(F(".jwhd"), {
				display : !pa && fa && 1 < fa.length && ia ? t : "none"
			});
			a(F(".jwcc"), {
				display : !pa && na && 1 < na.length && ja ? t : "none"
			});
			ca = b.bounds(S);
			b.foreach(Ra, function(a, b) {
				Ha(b)
			})
		};
		$.audioMode = function(a) {
			a != pa && ( pa = a, Aa())
		};
		$.hideFullscreen = function(a) {
			a != eb && ( eb = a, Aa())
		};
		$.element = function() {
			return S
		};
		$.margin = function() {
			return parseInt(W.margin)
		};
		$.height = function() {
			return wa
		};
		$.show = function(c) {
			if (!$.visible || c)
				clearTimeout(Pa), Pa = t, $.visible = !0, S.style.display = "inline-block", Aa(), z(), S && S.querySelector(".jwalt") && (320 <= b.bounds(S.parentNode).width && !S.querySelector(".jwalt").innerHTML ? a(F(".jwhidden"), k) : a(F(".jwhidden"), n)), Pa = setTimeout(function() {
					S.style.opacity = 1
				}, 10)
		};
		$.hide = function() {
			$.visible && ($.visible = !1, S.style.opacity = 0, clearTimeout(Pa), Pa = t, Pa = setTimeout(function() {
				S.style.display = "none"
			}, 250))
		};
		L = {};
		H = f;
		ea = H.id + "_controlbar";
		ua = La = 0;
		S = P();
		S.id = ea;
		S.className = "jwcontrolbar";
		oa = H.skin;
		var nb = setInterval(function() {
			var a = D.getElementById(ea), c = b.bounds(a).width;
			a != S ? clearInterval(nb) : 0 < c && ($.visible && c != ib) && ( ib = c, $.show(l))
		}, 200);
		Ba = oa.getComponentLayout("controlbar");
		Ba || ( Ba = Ea.layout);
		b.clearCss("#" + ea);
		M();
		var jb = E("capLeft"), kb = E("capRight"), lb = E("background", {
			position : "absolute",
			left : N("capLeft").width,
			right : N("capRight").width,
			"background-repeat" : "repeat-x"
		}, l);
		lb && S.appendChild(lb);
		jb && S.appendChild(jb);
		ta("left");
		ta("center");
		ta("right");
		S.appendChild(Ja.left);
		S.appendChild(Ja.center);
		S.appendChild(Ja.right);
		L.hd && ( ia = new g.menu("hd", ea + "_hd", oa, ga), d ? ba(ia, L.hd, da, "hd") : Ia(ia, L.hd, da, ma), Ra.hd = ia);
		L.cc && ( ja = new g.menu("cc", ea + "_cc", oa, ka), d ? ba(ja, L.cc, aa, "cc") : Ia(ja, L.cc, aa, Ya), Ra.cc = ja);
		L.mute && (L.volume && L.volume.vertical) && ( Ga = new g.overlay(ea + "_volumeoverlay", oa), Ga.setContents(L.volume), Ia(Ga, L.mute, Z), Ra.volume = Ga);
		a(F(".jwright"), {
			right : N("capRight").width
		});
		kb && S.appendChild(kb);
		H.jwAddEventListener(e.JWPLAYER_MEDIA_TIME, v);
		H.jwAddEventListener(e.JWPLAYER_PLAYER_STATE, function(b) {
			switch(b.newstate) {
				case c.BUFFERING:
				case c.PLAYING:
					a(F(".jwtimeSliderThumb"), {
						opacity : 1
					});
					Q("play", l);
					break;
				case c.PAUSED:
					ha || Q("play", p);
					break;
				case c.IDLE:
					Q("play", p), a(F(".jwtimeSliderThumb"), {
						opacity : 0
					}), L.timeRail && (L.timeRail.className = "jwrail", setTimeout(function() {
						L.timeRail.className += " jwsmooth"
					}, 100)), Ca(0), v({
						position : 0,
						duration : 0
					})
			}
		});
		H.jwAddEventListener(e.JWPLAYER_PLAYLIST_ITEM, function(a) {
			a = H.jwGetPlaylist()[a.index].tracks;
			if ("array" == b.typeOf(a) && !d)
				for (var c = 0; c < a.length; c++)
					if (a[c].file && a[c].kind && "thumbnails" == a[c].kind.toLowerCase()) {
						Wa.load(a[c].file);
						return
					}
			Wa.load()
		});
		H.jwAddEventListener(e.JWPLAYER_MEDIA_MUTE, z);
		H.jwAddEventListener(e.JWPLAYER_MEDIA_VOLUME, u);
		H.jwAddEventListener(e.JWPLAYER_MEDIA_BUFFER, function(a) {
			Ca(a.bufferPercent / 100)
		});
		H.jwAddEventListener(e.JWPLAYER_FULLSCREEN, function(a) {
			Q("fullscreen", a.fullscreen);
			Da()
		});
		H.jwAddEventListener(e.JWPLAYER_PLAYLIST_LOADED, B);
		H.jwAddEventListener(e.JWPLAYER_MEDIA_LEVELS, function(b) {
			if (( fa = b.levels) && 1 < fa.length && ia) {
				a(F(".jwhd"), k);
				ia.clearOptions();
				for (var c = 0; c < fa.length; c++)
					ia.addOption(fa[c].label, c);
				G(b)
			} else
				a(F(".jwhd"), n);
			Aa()
		});
		H.jwAddEventListener(e.JWPLAYER_MEDIA_LEVEL_CHANGED, G);
		H.jwAddEventListener(e.JWPLAYER_CAPTIONS_LIST, function(b) {
			if (( na = b.tracks) && 1 < na.length && ja) {
				a(F(".jwcc"), k);
				ja.clearOptions();
				for (var c = 0; c < na.length; c++)
					ja.addOption(na[c].label, c);
				C(b)
			} else
				a(F(".jwcc"), n);
			Aa()
		});
		H.jwAddEventListener(e.JWPLAYER_CAPTIONS_CHANGED, C);
		d || (S.addEventListener("mouseover", function() {
			w.addEventListener("mousemove", K, p);
			w.addEventListener("mouseup", K, p);
			w.addEventListener("mousedown", la, p)
		}, !1), S.addEventListener("mouseout", function() {
			w.removeEventListener("mousemove", K);
			w.removeEventListener("mouseup", K);
			w.removeEventListener("mousedown", la);
			D.onselectstart = null
		}, !1));
		setTimeout(function() {
			u();
			z()
		}, 0);
		B();
		$.visible = !1
	};
	a(".jwcontrolbar", {
		position : "absolute",
		opacity : 0,
		display : "none"
	});
	a(".jwcontrolbar span", {
		height : A
	});
	b.dragStyle(".jwcontrolbar span", "none");
	a(".jwcontrolbar .jwgroup", {
		display : "inline"
	});
	a(".jwcontrolbar span, .jwcontrolbar .jwgroup button,.jwcontrolbar .jwleft", {
		position : "relative",
		"float" : "left"
	});
	a(".jwcontrolbar .jwright", {
		position : "absolute"
	});
	a(".jwcontrolbar .jwcenter", {
		position : "absolute"
	});
	a(".jwcontrolbar buttoncontainer,.jwcontrolbar button", {
		display : "inline-block",
		height : A,
		border : "none",
		cursor : "pointer"
	});
	a(".jwcontrolbar .jwcapRight,.jwcontrolbar .jwtimeSliderCapRight,.jwcontrolbar .jwvolumeCapRight", {
		right : 0,
		position : "absolute"
	});
	a(".jwcontrolbar .jwcapBottom", {
		bottom : 0,
		position : "absolute"
	});
	a(".jwcontrolbar .jwtime", {
		position : "absolute",
		height : A,
		width : A,
		left : 0
	});
	a(".jwcontrolbar .jwthumb", {
		position : "absolute",
		height : A,
		cursor : "pointer"
	});
	a(".jwcontrolbar .jwrail", {
		position : "absolute",
		cursor : "pointer"
	});
	a(".jwcontrolbar .jwrailgroup", {
		position : "absolute",
		width : A
	});
	a(".jwcontrolbar .jwrailgroup span", {
		position : "absolute"
	});
	a(".jwcontrolbar .jwdivider+.jwdivider", {
		display : "none"
	});
	a(".jwcontrolbar .jwtext", {
		padding : "0 5px",
		"text-align" : "center"
	});
	a(".jwcontrolbar .jwalt", {
		display : "none",
		overflow : "hidden"
	});
	a(".jwcontrolbar .jwalt", {
		position : "absolute",
		left : 0,
		right : 0,
		"text-align" : "left"
	}, l);
	a(".jwcontrolbar .jwoverlaytext", {
		padding : 3,
		"text-align" : "center"
	});
	a(".jwcontrolbar .jwvertical *", {
		display : "block"
	});
	a(".jwcontrolbar .jwvertical .jwvolumeProgress", {
		height : "auto"
	}, l);
	a(".jwcontrolbar .jwprogressOverflow", {
		position : "absolute",
		overflow : "hidden"
	});
	a(".jwcontrolbar .jwduration .jwhidden", {});
	f(".jwcontrolbar", "opacity .25s, background .25s, visibility .25s");
	f(".jwcontrolbar button", "opacity .25s, background .25s, visibility .25s");
	f(".jwcontrolbar .jwtime .jwsmooth span", "opacity .25s, background .25s, visibility .25s, width .25s linear, left .05s linear");
	f(".jwcontrolbar .jwtoggling", "none")
})(jwplayer);
(function(f) {
	var g = f.utils, b = f.events, e = b.state, c = f.playlist, a = !0, d = !1;
	f.html5.controller = function(r, j) {
		function h(a) {
			x.sendEvent(a.type, a)
		}

		function q(d) {
			n(a);
			switch(g.typeOf(d)) {
				case "string":
					var e = new c.loader;
					e.addEventListener(b.JWPLAYER_PLAYLIST_LOADED, function(a) {
						q(a.playlist)
					});
					e.addEventListener(b.JWPLAYER_ERROR, function(a) {
						q([]);
						a.message = "Could not load playlist: " + a.message;
						h(a)
					});
					e.load(d);
					break;
				case "object":
				case "array":
					w.setPlaylist(new f.playlist(d));
					break;
				case "number":
					w.setItem(d)
			}
		}

		function A(c) {
			g.exists(c) || ( c = a);
			if (!c)
				return y();
			try {
				0 <= s && (q(s), s = -1);
				if (!v && ( v = a, x.sendEvent(b.JWPLAYER_MEDIA_BEFOREPLAY), v = d, B)) {
					B = d;
					z = null;
					return
				}
				if (w.state == e.IDLE) {
					if (0 == w.playlist.length)
						return d;
					D.load(w.playlist[w.item])
				} else
					w.state == e.PAUSED && D.play();
				return a
			} catch(k) {
				x.sendEvent(b.JWPLAYER_ERROR, k), z = null
			}
			return d
		}

		function n(c) {
			z = null;
			try {
				return w.state != e.IDLE ? D.stop() : c || ( u = a), v && ( B = a), a
			} catch(g) {
				x.sendEvent(b.JWPLAYER_ERROR, g)
			}
			return d
		}

		function y(c) {
			z = null;
			g.exists(c) || ( c = a);
			if (!c)
				return A();
			try {
				switch(w.state) {
					case e.PLAYING:
					case e.BUFFERING:
						D.pause();
						break;
					default:
						v && ( B = a)
				}
				return a
			} catch(k) {
				x.sendEvent(b.JWPLAYER_ERROR, k)
			}
			return d
		}

		function k(a) {
			q(a);
			A()
		}

		function p() {
			k(w.item + 1)
		}

		function l() {
			w.state == e.IDLE && ( u ? u = d : ( z = l, w.repeat ? p() : w.item == w.playlist.length - 1 ? ( s = 0, n(a), setTimeout(function() {
				x.sendEvent(b.JWPLAYER_PLAYLIST_COMPLETE)
			}, 0)) : p()))
		}

		function I(a) {
			return function() {
				m ? t(a, arguments) : G.push({
					method : a,
					arguments : arguments
				})
			}
		}

		function t(a, b) {
			var c = [], d;
			for ( d = 0; d < b.length; d++)
				c.push(b[d]);
			a.apply(this, c)
		}

		var w = r, D = r.getVideo(), x = new b.eventdispatcher(w.id, w.config.debug), m = d, s = -1, v, z, u = d, B, G = [];
		g.extend(this, x);
		this.play = I(A);
		this.pause = I(y);
		this.seek = I(function(b) {
			w.state != e.PLAYING && A(a);
			D.seek(b)
		});
		this.stop = function() {
			u = a;
			I(n)()
		};
		this.load = I(q);
		this.next = I(p);
		this.prev = I(function() {
			k(w.item - 1)
		});
		this.item = I(k);
		this.setVolume = I(w.setVolume);
		this.setMute = I(w.setMute);
		this.setFullscreen = I(function(a) {
			j.fullscreen(a)
		});
		this.detachMedia = function() {
			try {
				return w.getVideo().detachMedia()
			} catch(a) {
				return null
			}
		};
		this.attachMedia = function(a) {
			try {
				w.getVideo().attachMedia(a), "function" == typeof z && z()
			} catch(b) {
				return null
			}
		};
		this.setCurrentQuality = I(function(a) {
			D.setCurrentQuality(a)
		});
		this.getCurrentQuality = function() {
			return D ? D.getCurrentQuality() : -1
		};
		this.getQualityLevels = function() {
			return D ? D.getQualityLevels() : null
		};
		this.setCurrentCaptions = I(function(a) {
			j.setCurrentCaptions(a)
		});
		this.getCurrentCaptions = function() {
			return j.getCurrentCaptions()
		};
		this.getCaptionsList = function() {
			return j.getCaptionsList()
		};
		this.checkBeforePlay = function() {
			return v
		};
		this.playerReady = function(b) {
			if (!m) {
				j.completeSetup();
				x.sendEvent(b.type, b);
				f.utils.exists(window.jwplayer.playerReady) && f.playerReady(b);
				w.addGlobalListener(h);
				j.addGlobalListener(h);
				x.sendEvent(f.events.JWPLAYER_PLAYLIST_LOADED, {
					playlist : f(w.id).getPlaylist()
				});
				x.sendEvent(f.events.JWPLAYER_PLAYLIST_ITEM, {
					index : w.item
				});
				q();
				w.autostart && !g.isMobile() && A();
				for ( m = a; 0 < G.length; )
					b = G.shift(), t(b.method, b.arguments)
			}
		};
		w.addEventListener(b.JWPLAYER_MEDIA_BUFFER_FULL, function() {
			D.play()
		});
		w.addEventListener(b.JWPLAYER_MEDIA_COMPLETE, function() {
			setTimeout(l, 25)
		});
		w.addEventListener(b.JWPLAYER_MEDIA_ERROR, function(a) {
			a = g.extend({}, a);
			a.type = b.JWPLAYER_ERROR;
			x.sendEvent(a.type, a)
		})
	}
})(jwplayer);
(function(f) {
	f.html5.defaultskin = function() {
		this.text = '\x3c?xml version\x3d"1.0" ?\x3e\x3cskin author\x3d"LongTail Video" name\x3d"Six" target\x3d"6.0" version\x3d"2.0"\x3e\x3ccomponents\x3e\x3ccomponent name\x3d"controlbar"\x3e\x3csettings\x3e\x3csetting name\x3d"margin" value\x3d"8"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"eeeeee"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"bold"/\x3e\x3csetting name\x3d"maxwidth" value\x3d"800"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAAAAABTb2kNAAAAGElEQVQIHWNJYXnE8pXlHwH4Hy7/m+UrAIRMGWv8AcuMAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAaCAQAAADV5l4gAAAAXUlEQVQYV2NiYEj2T7mf8j/lP1O8/98NHxUeMTxiYPo74RPDM4avQMj0R+Edwz8wZPrD8B3G/AtlgEXpySTC4v9QiFPBHzjzwS+4uQW/gL77DYRMPzf+Dfj5AOR5AOEMhGrZiW/LAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAaCAQAAADV5l4gAAAAYUlEQVQYV2NJ+c/AwPDgf8HcjSyPgCx+Be4N8QEsX4HMrwziDFwTWP4xgMAbBikFKPMnwx8GKJOB4S+C+YeuTJwW/8cU/YdF7T8E8xfDvwcsv8GSfxkYC8CeZ3jAWPB3IwAFQj9cfrWVAwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAaCAYAAACdM43SAAAAEklEQVR42mP4//8/AwgzDHcGAFd5m2W1AHjxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAdUlEQVR42u2TsQ3AIAwE2YARMkJGyCiMwiiMwgjUFMAIjOC8lMJdiIjd+aSrr3i9MwzjHXoYMOgFmAIvvQCT4aEXYNLvEK2ZMEKvFODQVqC1Rl/sve8Faq20cMIIvUYgQR5ZMJDh6RixQIF8NMHAgMEZhrHNDU+1T3s3o0CaAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAABhUlEQVR42uXVzUoCYRTGcXNGR3HSDPtASyIhrIjaFJlBRBRUdAUGQQurdVfSrl2LuhEvYxR1IYroRhCEWU1/4R2Yxcz4MUlQB34bGc6D58y8r+/vl2EYczNpKvitzN9/orEEGUEoQhAyJDNs2gAJCiKIYVGIQUUIAWvQNM2jWMEGtoRNpJBAFOGJgsRDAahYRRbHuMAVznGEHaSxZBNkvyPLQhXEkUEew+riE88o4AYn2BVBCcxDgWz+G6fxhLGMPdzBWh184RUPuEUOWaSwgBBkpwAZESRxiALsqoV3EXSPSxwgLUIUc1xOAWvI4RFupeENRVxjH0moCMBvF6BiHXkUMap0lPCCM2QQh2LuwingFE8Ytwa4wTYSCEEaGVCtVo1x1Gq1CQPEiDRNM9yUy2W92WyWdF13HJHrkt2aNxoNbTAYuC555Gtq17her7f6/f7HmK+p+4dmbcysO71ez8OHZnNUDBtXKpVuu932clTM/rCb/XHt/cL5/SvT+6XvKcz3r+sbpPMfjCOvfIMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"pauseButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAN0lEQVR42u3NoQ0AMAwDwe6/YYBncWlUyQFBBX+SickfADM/0k+AQCbJffHfqir3hZ/ADwEAowtQ1mmQzb8rQgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"pauseButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAABdUlEQVR42t2WzWrCQBSFq1FSaSjaFi1iF6UFtdBdF6WhC0Hoym3BlSAu+wbddSF9xfyTJ7k9gRMJuY2Oi2w88BG5zLlHZiYzOTttiUijyP768Y2bxCKVv0nD+B/T2AY2OAcdPnOKNZtjrdx/KMCi6QJ0wTW44fOKFGtdjrXzEJPml2AA7sEEPIExeCRj1iYcM6CnOoTz2AYOuAVT8Arm4APMwDuZsTbnmCk9Dns0qxbVBj3wAFzR+iRlufT02IOLrqenA/rgGSxE64uUtaCnzx7WfwEtLtYQvIClaH2Tspb0DNmjtS9gxHldidYPKWtFz+hQgAPuwBtYi9aWlLXOPPQ6JgEu2IjWLylrQ89xAVEUSRzHkiSJpGm6C8jqBVSA8RR5nie+70sQBHmjbUZWL6CmyHiRVQAXWQfoRTbapiqA21QH6G1q9KJl5jwkDMPdi6YCzF40fVSoAB4VKqDiqKj1sKv9uK71wqn9yqzt0q/vs+Wk9QeSkdKwXIKzCgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"prevButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAAAfUlEQVR42u2MwQnAIAxFu4EjOIIjOFJH6EiCF8fw7BQZwf5AegkU2tje8uGR5Afe5vH8mTHGZG5+EXSzSPoMCEyzCPd+9SYRZgCFb7MIJNB5XxURT7OotTYFkql5Jqq1TiGBzrvinUj2AMqSSHXHikj3GZBVpH8R9M3j+Tgn8lcGnlSSd08AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"prevButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAABhUlEQVR42uXUz0oCURTH8VKz/BNFmZJ/iMAoEmohlRRI7Yp2Qa0igyJc9Qot2vUGbnwB3yJXPYKaCi5m62LQzSymr3KE09hAi1nVgQ93hnv4wZ259878o7Jte/YXfADPcAvwIeDgFwHMKYFJoDPILw0hREQYCyKMKBZlDCEIvzMkiAhWEEdCxlURRwoZJBGTwOA4SC0nLJMb2MGujFlsIYc8DrCPrIRHZtR3mccSMtI0qTMUcYoLXKGMTxxiE8t6WSHEsI2iCirhDg94RgVDmTtHDmvjILWsBPZwqYJe8Io3vEPXDfJY10ERJGXiWjVXUYMBZ5VQQMoZlMIRblVzHSZ+qkccI62DokijgHvVbMGtnnCCjGtQu922R7rdriXPU3SQ69IajYY9MhgM6p1Ox5R3zbE0l4+tmquWZdV6vZ7hDNIf2/X3T5r17zcM40MH6d/vuiGleWpD9vv9SrPZHDLn2JAuR0QFTR0R0zTLrVbr2xHx7NB6do14drF5dtV6c/n/7foCpva8IJ04vWUAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"nextButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAAAdklEQVR42u3OwQnAIAyF4WzgCB3BERypI3QkwYtjeHaKjGBfIeClFmvaWx58KAg/ks329WqtBbbBW7vMhhowBH2o2/WhLoJTh0QBrw4JfhXKObcBlnMulFJqNwp4uS+HIjjCNKGDZKshhkCYJlRge/ot2Ww/7gSJGQaejWvrvwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"nextButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAABjElEQVR42uXUPUvDQBwGcNvUatOK4kuKfUEERVGwg/iCguimuAk6iQqKOPkVHLr5DVz8An4LO/kR2jQtZMjaIbRLhvOpPOHOJMahnfQPP5IcyXO5S+5G/ngJIRKUpMRvwiEyIAWjPl5rlApIhgJ5YxoykIMJHnUYJx2ylGFHWjAozQdnoQBlKIIBM2RAnsdpBqa/hbHRgCWowBZswjoss30V1nhcYKe6P0w/aAoWYRua8ABncAKHcABHQlaFbz0JY/589YPm2Psxb+zBCzzCLVzBtWAxeIVvlQHND5rnUC5ArXd4hio8Ke2nsAF5OTwEcWJ32WuwHHiDV6XtnB0XIKsGlWAP7iCqXKgp15ewA8VgUBn24R5+Kk85v+EISpCLDLIsS0Rpt9sez+OC5NDq9boIarVabrfbrfE6bmhysoMhtm07nud9TTbb4iZbfn41xHGcD/Xzsz3u88sfsn9jo9HodTqd0A/JoLgfUi4R0zSbrutGLhEGxS2RwRftMLeRwTe2oW21g2/+/6c+AdO5vCABA1zBAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"elapsedBackground" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAaCAYAAACdM43SAAAAEklEQVR42mP4//8/AwgzDHcGAFd5m2W1AHjxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAcCAYAAABCgc61AAAAD0lEQVQoFWNgGAWjYGgCAAK8AAEb3eOQAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAcCAYAAABCgc61AAAAD0lEQVQoFWNgGAWjYGgCAAK8AAEb3eOQAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAALElEQVQY02NkQAOMg1aAmZn5P4oALy8vqoCYmBiqgIKCAqqAmpoaxQJDJsQA+54Krz/ExkoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderRailCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAWklEQVR42tWLsQlAIQwFBcVKGyEGK61cJ/tXGeVptPjwN/DgQnIQ9xYxRgkhqPceLqUkW5g5Z7g91BYiQq31BDAzxhjmDb13zDnN+/IP0lr7glFKkX3oCc+wAHpnIpi5hlqoAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderRailCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAVklEQVR42tXJMQ4AIQhEURKMFZZCrLDyOty/4ijsYuJWewEn+c0buGeIGKUUr7XahtZaENHJgJmj9x7vkTnMOSMTkY2w1opMVX/BPxhjJNgBFxGDq/YAy/oipxG/oRoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderBuffer" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAE0lEQVQYV2NgGErgPxoeKIGhAQB1/x/hLROY4wAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderBufferCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAJ0lEQVQYlWNgGGrAH4jvA/F/GOc/EobLwAX+ExTA0IJhKIa1QwMAAIX5GqOIS3lSAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderBufferCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAJ0lEQVQY02NgGErgPxDfB2J/ZAEY9kcXuI8u8J+gwH2chqJYOzQAALXhGqOFxXzUAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAALUlEQVQYV2NgGCqA8T8QIAuwoPEZWD58+IAq8Pr1a1IF3r59iyrw9+9fhqEJABv9F+gP7YohAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderProgressCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAASklEQVR42tXDQQ0AIAwDwDqcPhLQgAlM8JqDORilnyVY4JLDX0iaOgWZaeccVkSEKyv23nxjrcU35pyurBhjWO+dFZDWmqkr8Y0Lr65i67XRzKcAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderProgressCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAS0lEQVQY09XDQQ0AIRAEwXa4+iYBDZjABC8c4ADmHheStUAlBc/wb9oOAM45vvfewVrL6WSM4Zzeu3Naa04npRTftdZAkiVNScFTPhkFYuvY2zeUAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAcCAYAAABYvS47AAAAwElEQVR42tWTPQrCQBCF84OsYJCIYEQrsZAU6QKx9xheyG4L6zTZs3iInGZ9Tx4iAWHaDHwwvPlgyWY2mVvFGNNf/gmZyEUm0q+kwQI4sBROWf6R2ShcgRJsRanM0UnUrEEFTuBC1FeaOYoF2IMaXMGNqK81KyhuwDmEcB/H8RVV7JlxRofiDjTe+0eclLKGDsUDaPu+91NRWUuH4hF0wzA8p6Kyjo5ZNB9t/hjz9Zgv3PwLzUthXjPT4hqewrzqDfMnQ2tu8Pr1AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"durationBackground" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAaCAYAAACdM43SAAAAEklEQVR42mP4//8/AwgzDHcGAFd5m2W1AHjxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"hdButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAMAAACu5JSlAAAAZlBMVEUAAACysrLZ2dkmJiYuLi4xMTE3Nzc8PDxAQEBJSUlRUVFSUlJaWlpdXV1jY2NpaWlsbGx0dHR3d3d4eHh9fX2KioqPj4+SkpKVlZWXl5ehoaGpqamsrKyysrK3t7fCwsLNzc3Z2dkN+/dcAAAAA3RSTlMAf3+Sa81KAAAAh0lEQVQoU+3J0RpCQBCA0dW/i02KpEIzzPu/ZJc+7CM4t8e5k3PuYgmX9VNttv2W2iww9gDhe/iK3mZYHhRVIBwe+l9PYQWjzbB/BYB6gdl096ra4WP0PD/kqh25qq4vIjfuIvBuuMrkaURk8yUvGUAiefSU0/5hkJZSPECcZP8J62epztzpDzcuFrDsGN7pAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"hdButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAYAAACZOmSXAAACFUlEQVR42u2WsWoCQRCGE42I5AikkSBaGSwsAiIpQi4BK0vF+qwEjb1gaWMlaGfvA5xYWvgCNraChY0+gU+wmR3+DcPGC0lQrnHg43bvbv5/d25v764uYYdS6voc/MY0AqLEzYmICt3roJlGiRgRJxLELXD+g8hPQDPGHnIAwjiOpHsiSaSINMj8CeRBIwlNBx7RY8Z3xAORJZ6IZ+KFeCXcP/KK3GdoZbU2POLGPIJyOLiYJ96ICuERDaJJtIiPX9JCTgMaFWjm4eHIBRZHWR6Jd8JXpw8f2o/aS5Y8QSRRnqo6X1ThkTTmN1iRKTwfz87o9/sql8updrutTBSLRT63WCzUZDLhtoCvT6dTW8qDR8o2T2OBNL5leJ4WZBMd+/3+y+RwOKhut8vtUqnE92JgfLSiAY+0NHeIDFZo085gI5gvl0s+GjMKPpoq2IOzogmPzDFzl1eriPV6zSI2eAw8c/TZ1M6RAW33R/PtdqsMo9GIRQqFgqrVagy1+dxwOFSz2YzbrutaOeIckOaBZd9sNgro2bFQp9Mx575m5fu+6vV63K7X63xttVqZwfE1qSXLHrjgZEK5XGah8XjM/fl8bsx1nyuBWcqq6DweiNSSCy7wVZMJMNKm3B8MBkac+zCT8CBgLLFetYBNBjefHLnJBG6vu93OP7Wx1pTba6gfllA/qaH+TIT6GxXaD2Q4v86XoPgE1h55oNE1QD4AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"ccButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAMAAACqEUSYAAAAXVBMVEUAAACysrLZ2dkmJiYuLi4xMTFAQEBHR0dJSUlKSkpRUVFSUlJaWlpdXV1jY2N0dHR9fX1/f3+Pj4+SkpKVlZWXl5ehoaGpqamsrKytra2ysrK3t7fCwsLNzc3Z2dky1qB2AAAAA3RSTlMAf3+Sa81KAAAAe0lEQVR42uXNQRKCMBAAQWCCIgGCGEU3sv9/JpXykCLxB8y1D1OdsEaLmqT6p6M6wKn6FuyWaUQL9zdcW2yuLV49dmTUL2S6gcYsr+IbwgdC7MYj/EoqIoZFHF1PL08QkYNO0MG8wMUw5LoOwCQyG+jWTMuS1iXW1SnbAaDLE32SOX+lAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"ccButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAB8UlEQVR42uWWsWoCQRCGEzUcEhFsQpCzUiwsBBGLoElrp0HbsxI09j6ClaXgW5xYWvgCNhaWFjb6BD7BZmb5HWSXXAw5rnHg43bd3f/fG+f27uE+Qyn1GCa3mMVAnEj8k7jowdwyxKQnwiGSxDNI/Qmsg4YDzbh15/jRwaIM8UJkCRfkbsQFWWhkoOmwh2nqEGnilcgTZaJGvBF1onEjdaypQSMPzbRlzLvBYIl4J9qER/SJATEkvn5hiLl9rG1DqwTtFFId06ZIQ4H4IHwVXvjQLMDDkcJC/svEpwo5oFmGR1JSjD++ptNixGQyUcViUeD+JRaLhapWqzLmeZ46n8+mhAftLKo6cTF1UQB921AEpT2bzdRms5F+q9Vic5lnRB/armmaI+ooBAkI6TvCnYnwaDTitr5ynE4n2YQRA9aGR8o0baAKOXSaRMQOufP1eq2CApqNQNPD4aCY3W4nptS36Ha7emy5XHL/R4JNkd79fq8uVCoVLez7vu5Pp1Pd73Q6qtfrcZuvemy1WskmrzQC0yuFdL1gPB5rERhJez6f80ak32w29QbxHxumdiFZj8z1gu12KwUD9EYwzuYwk43xGsPUfmSswwGTwyLwcJBj8Hg8+mEZklbgMRj9gR/9qy36l3j0nyuRfphF+wl69/ENcVv6gzz3ulwAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"muteButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAA30lEQVR42u2UzQmEMBCFtwNLsARLSAkpwVJSwpZgCQEv6skS5iieLCElzL6FJwxCDlllT3nwkb8hXxLQV01Nzc/Z9739l8gBBRE0j94AiBk3oAceJCCPCM2GauY6zh3AsR/vit5AT8zzBbZCoWdNWypQS0YmQM2tekpDkWzbNs1xqRMQwGraMtk8z5rD1k3TJJgLYF2WZfi2oEw2jqPm4HoHhHMOJNCDAxTLnGHIyALXhRLPmnsfOU+dTpkRJooc+/F1N/bpzLjhITxFAp77i1w3440UxALRzQPU1NTk8gF0y3zyjAvd3AAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"muteButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAC2UlEQVR42u3WPUwTYRzHcWmBFnqKBYpAHVSQoEB8QTQaiMSILhgDiiFxUBMSlUETnYiDg9GJmDA44OCgo8bF18EFibq5MEBpeUsDIaVAm6P02qTUb5N/k5P2oNg46ZN88tz1yT2//p9e77lt/1u6Fo/Hc9L5GwEmmJGrY4bpz0JlcoOAPFhRCAU2FMAi46YtBa4LyEM+LBKwHSUoh1OUYaeM5yUDtxpSAAVFKJZJd6MGh9GEY6jHXjigpAQaBskySQWlcMpE+3FQJj+DDtxBN9pxCjUogw25yEkJEWbkw4ZiqaBWJm9GK86jEz0YRKKNok9Cm1El11th/i1QF2TBDuxCtYS0oQv3MIObuI+nGMIwIljAQ1xGI5xQINWlBhXBiTqclgtv4xXCUsUTDOADotAwIsce9OIsqmFHPkzJsORvpKACDVLNNfThJ/TtBb7ADRfCEjQm4/3okHkcyaXU3xAW2FEtFW3U3uAbVDn3IQYvQhjGVTSiHIX6MDMK4EA9LsRisbgR2jt8wg/OtbW1NZU+Qu+nX6T/zth1nEBl8q5cH1aGQ+icmpqKG9GHeb1ebWlpSZ2bm4v4fL7A7OzsIn1GYQ7Uod3lcsWN0N6GQqGhyclJNXG+srLic7vdseXlZa/H4wkRnLKMRr9ZFVr8fv8jLh4MBAKv+fbudWEvCfs8Pz/vUVXVRbXaxMRENBgMjiXGV1dX094g6e7GcqmuFVfQiwcszfvx8fGwhPXjGYEf+SxKNRqhI4nj6elpw1vf6A9dgRo0yUWXcINv/piJvRzfRV80Gh1gBb6yAsMERahugc82/FOnC1RQonvYHkELzoXD4S76i+jGLYKeJ6qlolGCtvC4gv5Jr9tGKrEPB9CAoziJNnRqmtaz2YM40+3FCgV2OHT71x7UStXH0ZTJFpNpqEWqtUnFRShFxWabZ1bvHLpd2yrhijB4LcjyXSSLF56sw4WE/HPtFwoiecfnKRGcAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"unmuteButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAAk0lEQVR42u2NwQnDMAxFtUFH6AgdISN0hI6UEf4Oxgdvkas9RUZQ/yEBYdChgoZC9eCBLBs/SZLkjxlj3Ol2RehJd6rfDq1UT81eKcwZVCMB9Zw/p7CzfErvXT2ndzB3kAitNfUUQ60V555zLFZKUU/zBscOdo7EFiOcmFLMcQli4y+6Bz4LBx90E3JV8CZJkvwsb8qa9F25tXYIAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"unmuteButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAACOUlEQVR42u3WS2sTURjG8ZqJuTSJTW1T26YqrWmN1jt2ISpWTb1ABS3iRkS84WUndlNQFN34Fdy5d+U36MJVQVroKgnmvgqBZBV3Gf8DTyQMzMggRZC+8CNnJsn75CRnzqRvu/6/Mk1zRw8fwBhbEeSDAT92ih+cU7D8dYiahxFFTPoR1HOG+Fxm7h6kRiE1H8Y49iKJEcQRRRghhQegmTuFKkQMBBDBbkwgjVOY0+Mh7McoEhjSa+OIIawehluYgSB2YQ9SOI0MbuEFfuCizs8ijYOYwRSSCo8g0J2hU9AAkmp0AbfxDJ/RhlV3sYgFZPR4GedwApMKDMNvD+v+RlGM4aga3McKvqO3XuKhxt/wFI+xClOBScTU12dfEEEMIqUZudU7vMKajjewrvGqZjiFOAL2MANhJHAENzqdjumE+ojXeMvxJkyxAh/hEqYxiKBT2AiOY6lQKJhOesNqtdpm93y1WvUUlsAsFrPZrOmEeo/lcrm8Zh1XKpUNxuvWuFgsun6N9t/sAM43Go0PzWbzU6vV+sInztvClvHEGpdKpd8LxArinPMCsa9GjGp287iD51ip1+tfc7ncTzV7gJu4igVc8bL07Rf0GGYwhwyWcI9Zvsnn80XG13EGx3AYafzxonYKjOoNE2pyEmcx3263r2nLmu7ZJ4e9b1ew7fQxhY5jUgEp7FPIAPq9bcTut5cQoohjSOKIIKjGhrjeYryEBhWMnnuZ9+buoaJgUcjW/xeRvu36F/ULlStUoyVtQSYAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"fullscreenButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAbElEQVR42u2R0QnAIAxEu1lWc5/+ZYKs4TTWjwS0qIFrP+/BkYMLOdCLELKn1tpG5TleYF2yyMUzvCAOZDtwgU85PJGE/+NPyuTJG1Uts/9+sI0+y6GCrtunLHKJHbjAZYcd8x28IJTmhJAtD4gEt9ueDIktAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"fullscreenButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAACFUlEQVR42t2W324SURCHhS67VCoFbYhRkbQsaCwVSwgUaZP2yia9Mb6MN41vYfpIfYIm5QIegJfA3yTfSU52c1i98KabfGGYmd+cPX+Gw7On+2w2m5JPUfxfC5dhB8pQKooXvjGCiohFFRJ8EVTwVSHGtxOckSuOsCb2xUsDe0/swl42jiZxg2wr/kK0REf0DOzX4hXIzsVbaPODsH4VUSOxL8biwsD+SCEhOx/vo61Rq5zd1JipdhBkn6k4hmk2iKZDjdhtuj9Awnqm4twTPopf4lKM4BLfo0tCk1IjCQ3QFF0xR+QK/BBXYgxX+PycOdpmaAC3RG1xiui7uMWeic8ww3dLzgZNO7tEoU1OxYhpX7Dmd+KDgT0ldk5umt/k/DGtioZ4y/E7EUMx4JQcQR/fkJwemgY1OKbhAd6wnscU+ESRQ+jhOyGniyY4QFlE4rk4sCKIJyzFaLVa/XaNhT0iNiH30LTUiEJ9UGeqg8ViYRv3TVxjj80PY3zXloM9QFvf1gcN3mRiIr3pvX2u1+ufHMMvMDefn2MatI2iPjgSZyYylsvlg77fiK/umGLfWMzlmQbt3/UBQoc7530IxLf3QeT3AYIZbzbE9w5SfGfknGb6IAr1Qez9XL8XXabdxtc0sNvEuuS20MZFd0LsXThNqOOrQg0fcS6cXPHiKzOB2L8yg3GKG4WXfoBSUfz//W15ss8fvEcYMYnLr+AAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"normalscreenButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAbElEQVR42u2Q0QnAMAhEu5kD588JXMNpbIUEpCBpe5+9B4JczF3MQQjpcfeBz+4vxpMe2ULSIF9YjaqWM+hXWRrdA2YZah61Wv2/qGrU6nQkQK6yLmCeCbzFCmk02FxWX/WyYXw1H69mCSEtJ16St50Fqd0HAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"normalscreenButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAACDUlEQVR42u2Vy0ojURCGZ9Kmk4A63cYLMhdE28tCECUgxCuzGBDc6AgO7uYizKAP4NKNb6S+g08gSZO8QZ7h+Bd8ScDDIZmsLfhIpc7/V53uPnS/e4uRwjn3vsto2sHiggdrw2iGaT4miiKGEhShBDEU8YSH9Jr3G4yLSZGID+Q9qCXk0rIBhoSaj4kyxlnxUXyBz+ITKKcuDdoEb+9KQrufEHPiXqyLLVETmwDUpEE7h7cYGhBxmQk72xAWR+KY/Bs4akfkG3gSekTebaJYFlWxKLbFDQ2e+P0BvRqabTxVekT+M+gPmBKZ2BWn4tn146czCNa+o83wlkNXUGAxRVx3fvyC11HHk9KjQFtvQIxoSeyIE/Fb/BWX5EK5auQnaJfwxsMMyMSeOKPZVX8IzVUjP0Ob+QP8Y1rhPq6Kg2az6Yw8z12j0XCKf4blVuuum9Y8eCvBY8ritFgTXzudzl273c4VzlBcG93/tmYa05oHb2XQMZ0RK2JfnFujVquVs9M/huVWY+g52hXzDjqmJe7jgqhZI+3wVvkFA04N8gtbI6/hSekRhV4VMS+vee3uAeOeOOSs1w3yQ9Zq0j6aB2/sPwP/ZTeFYUEsc/mZWISM2jKaeTzeyy50FWV2k/LgquQJpNSmySfxeLsPfnAQlzCC1dgAoInxDP9Vg8gAauG1//82I/ZM1DztW4wSL9xQTRdfTNL0AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAaCAYAAACdM43SAAAAEklEQVR42mP4//8/AwgzDHcGAFd5m2W1AHjxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAaCAYAAACdM43SAAAAEklEQVR42mP4//8/AwgzDHcGAFd5m2W1AHjxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAaCAYAAAD43n+tAAAANklEQVR42u3PsQ3AMAgAMIZKSGz8/yvNBdlbZH/gCACAmycz31Wh7g6hL4eqaldoZoQAAP7pAACeB6WdpTwEAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRailCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAaCAYAAACQLf2VAAAAUklEQVR42mNkQAOMg1aAl5dX4O/fv+uB2AEmsJ+RkdGBg4ODgYmJCSzwX1RUlIGdnR2u5b+amhqKGfsVFRUdmJmZEYZKSEj0c3FxJQxu76MLAAClCw6mxiBchAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRailCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAaCAYAAACQLf2VAAAAU0lEQVR42tXMMQoAIQxE0XTaRLaS1GlCGkW8Px5t3KzsIRx4zYeE6JqllBByzouZHxIR1FpRSsEbFrk7gqpGAM058fvCGAOhtXZOeu8IZnaeXrMN+2gdUQAHUEcAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAaCAYAAAD43n+tAAAAL0lEQVR42u3PsQ0AIAwDsCLx/6udM8EFFTuyP3AVAMBkJTk/hXZ3l5CQkBAAwNsFna8SATE1MG0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgressCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAaCAYAAACQLf2VAAAASklEQVR42mNkQAOMg1bg06dPAqysrOuZmJgcwALPnj3bD+OABa5fv/4fRcuxY8dQBbZt27b/////CC2rVq0S+P3793qYIOOQCQ8A+QIdmsjAgckAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgressCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAaCAYAAACQLf2VAAAAQUlEQVR42mNgGDLg58+f/0H4+/fv+z99+iTA+OLFi/8wyX///h1gef/+PbIGB3QBBhQBRkZGhBYQh5WVNXDoBAcA0N8jO0ip8PQAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAaCAYAAACdM43SAAAAEklEQVR42mP4//8/AwgzDHcGAFd5m2W1AHjxAAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"display"\x3e\x3csettings\x3e\x3csetting name\x3d"bufferinterval" value\x3d"100"/\x3e\x3csetting name\x3d"bufferrotation" value\x3d"45"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"overcolor" value\x3d"ffffff"/\x3e\x3csetting name\x3d"fontsize" value\x3d"15"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA8CAAAAACCmo8mAAAAG0lEQVQIW2NIZeZh+s/EAMQwiMxGlSFHHQ7TAEepMbj150V5AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAA8CAYAAABfESsNAAAAnElEQVR42u2WvQ2DMBCFv8I1M3gjMoTpMwqjkI1S0RnJEhaiuZcFEuyCBCnyqz+9+9XpHMAwDD0wAp4PciGEXtK0risxRvZ9fw+a2ZhzZp5njuTMzC/LQklOEtu21YGSyqCZ1YHfcazR1Tle6FjVnr+q+vz2XJxjW4p2Utr2tFn/OvT5s5b0BHwJdmZ2Bybg0NmllB5d190kHb5cL8J5WhbWZJeBAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAA8CAYAAABfESsNAAAAmklEQVR42mNKTU39jwffB2J/BiBgunnzJgM2/PjxY4bPnz8r/P//f0NKSoo/E5DBgA1//fqV4enTpyDFDP/+/ZvAxEAAvHnzBqRQAaeJMPzz508wTVAhDBOlEGg1LUxkIAIMtBsH0ERigmf4+XpggodGbhxNFKNFymiRMhrXA1Gk0D+uoQH+gIkIRSCrC5gIeOIBkA74+PHjRgDhswBcaL43lQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"bufferIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAFy0lEQVR42oWXy2sk1xWHv1vvR1erNeqWZ2TFiSQ/ZI2GMBDygsRhTIwZgg3ZeeFV9lnlT8giS/8BhqxCICYJ2TgPhzEhYLJQFgMT2SN79JhoMq1Hq7tVXV3ve7PoktQjd8sHCpq6zVfn8TvnVAkumRLnPzV0LFw8XCwgI2ZITEaJFIqJZlxCneEEAg0bn0Y8176eB2CG19tuhx4DUpRiMtIYw40gooJqGHjMHi5urzt39JZgeHRwb/nBPJRIFOWVHqoRzEDHQKvOTGpxc/uW+zNnzUcQoy9vvx/EbkxKgWS6h0og0DGxcbAxERRIdIKDBfeOszZPgCDmcE2+3n68dMyADJSYFLRx7p2JS0B9a34YCGEMb3aQ+HJGb/kEGIBPQLyUB1joiLXGYx1FwmBSyAIDm2DY2ljVX9WXoXzy8db6f1tSM8V5UkGghwB/t36x0iYfBR2xj3wWKNDQcahvrNo/Mr7joZPcSlYffPT9XTsbnCTE+EDKkPy4FvaK9xaGWZ5XBJ9FHl8A9Sp/NrWtr8Xftl5v0STAFqqhiqx94/TpQC1krZKYHtFm+PsXtz7IP9E7RaLiswxaJGSXQ9Yxh4G+7FHHAmoqE/ELHe+lg6WHX/y6fC1tqqDYHt5bfuAe/9PtFZHMxgviXGTyQthCCNDPNaODoQqi2d6tk6c7eYByw5faboferugY+ZQ+OcshSHIjKp8k6wk+UBAruW+dEjJ01NIhJuqs9XpG1sjUMx4mX+4URXHz6ONPk1c6Sym6ign7w/vrbQYMKBAIFJKcgvzW8aafaWO4bFw6QmlomKOubV/fXHVv21/HlPvx/dbm6i5dIopKFhKFRKJEnefQK0LJHuk40MDAxsGjhp/4O3PdQEo3Wmk3OvQZkFBWQDW6hAJMrmEDIf1xFYJQNjZ+P9iaLwLLDNQLoZORkVSjKqn8U6M/f6kGGgEmkBOOwEIF+FvNf78ys2bXhC6j5PPbO8+fEBGTkI+GwLTZh80i1nkm90nBwOoFGy83f+Dd8IUgFdq1f+Vv9IOclOIrcNoYDiwW2UFqmJtzM2vejRYt1VJNVXvOe3mzXlVVwlQcBGO4ETIAAyNxzZqHjwF4KmEwN3TQERe5m2LmpDuVnsYnColSqCtRV5hG4cT5ICFBVc2QDdyEEoX4Cmg+6Y5Gvtbpb0ZPO5zQEx0RtvsPb3arAa9dCQwvZkxV5xAMskb4ra0N8rUoEE5+cvrZd3fqKQqdEjV9uwGS/UuykWfC9nrBw1bma1pQrHT9mISEjIyC/ErhTBS2gY6NjYODGZob9T23KN3oe4fLAxIyCqSQSlwS0BWtpyEwMbBxP2v87RszC1Zd09J+/+nSzk/axOQUVXEu2m9m+nAwUECBRgl/Xphfqc066Cp1rcauejRYGe1fdY5UijXz0wsc6CzyaAwolBKAQnxU9+e9RkP5CDKEk9345GBlQHHmW9U7cu+aZTwzXi1qz66A0aF27DmBjYsGWHg49Y6HgfmF8buga0KQvd37Zk5pOsXl0kzcKUqq8ccKkKVC/MP7zYI7YxlwlP+qe3fv3YGrlQKyK9++FAo5F+10k/mYUcgxcf/58Ej/4+J803UsBTm+/SG3P38x+o93CTe2U7Tz7BRvdvP/hftdTuhyQq93sP/Dk3u+2/CdgDoz1Jlxm7N/mPllKEpLjOGi8Z1igFBKIClI39n+LcOoNiuITsODH+/OJU9cXbexlQ7Y5NTs0HpN3Xn81wXLrLyM2J8UsqQkaw1+/vAvhx0floZv9MhRqSykHJtEUgJ8kPKoUc8MYMhwQg6FUlACkuLNFA1GAkFoSZJnKsMGCjLivJmNVNHvTevFqmFQlBRkJAwZkpCSk7/VOzg5jUMGRIT04qPuT/uV1KfYuWyEUiO/RrNWAQLxanp370Oas56paVF61L27t55Ne3c9l9u4KXHpVEe/b/6pEVoXwqa8av4Iplr1VaChoVVejzKrrlpd/wdqZ96EzbsuCAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"errorIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACL0lEQVR42u2T64nCUBCF7SAlpIQtISVYQkrYElKCJaSElHBL8LfPKD7wyUXxgYrOzkCyHC6b3LgasywOfBDuOTNzcklq73rXfygiqjMxk1YsZ38lXIOyq1F1OI/s5VUZsAlBNOMlaDhvVhXOZ7B80D4ztNeV+VNY9VdUzg3VM/5srM9XhXOMb0zleJXxjTqlB7xer8HtdiPAy/KKhl7pLTXc5XJxGc1QggJNIXgOfs24pQU8nU4hQynn89kFjZD0XDyGFpYS7nA4uMfjkYAQddQEQwtRk1lPD7jb7SKGUvb7vWvoTdCbqIkXNCF6arjNZuNtt1sCAtPDZwp09YMe4AyZ+bSAWmvFUILm4Y7Fo0xderQUep5Rq9XKW6/XBAQ/+fi8AZ5GhicwZj1+i4vFIl4ul5QQZ/lYC8AX5Pi+58nsh8LNZjOfoZT5fO7neAPwZgaUGeIB/F+Fm0wmznQ6jRlKyH1b1uvgred5zbmy6+6Ao9EoGI/HBHh5ftF/6SXZdVe44XDoMJqhBFWgxwO/V8CvwK+Z4rfY7/eDOI4JsC4cDAYO4yVYl8lM3CE7C4XrdrsuQym9Xi+qlVQyW3YArrWp3W6HDKV0Oh1usler1fLTHnku0iOzxQ+EtiUfDAHYYOsl5I6+0Oj9yDNHYNSM84KADqOhNyq65K5fX/wP9tpfznrV9kWu7dbtn1bxgCHj1sorfKmwaEDFUMUo21XrCsNpyVD4yl8GflLvetcfqy+dCCa6ODMoXAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"playIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAmUlEQVR42u3YsQ2AMAwFUTZhNEbJKMyVIsooxgXdiYogrvCXrn+SO28Roa6ABSxgAUXAlp3Zvq3fIuA9QG1AQJ1AQqVAQqVAQqVAQqVAQqVAQqVAQqVAQn1A7ngNHGO0LL5ozvke2HtvWSzuzHDiv4CE3ZMACZMACZMACZMACZMACZMACZMACZMACdMAAVu3+iwUsIAFLOBDFwtNtcHhiAyTAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAB+UlEQVR42u3YPUtCURjA8epqWlmS9EbvFEQUQUOFZksEEb0MzUFBQzW0VbOfIugr+AWaWwrKNQIVQXwFndXx9h9OnOiVy9PJhB74Ld7lD5d7POc02bb9pzVe4FfD8+am35vvAnWU0gJN/V6HwHdhFlxohUdphQvWS2y9Ai0V1AE/AoofPnjhdhIqD3wf14V+jGNKmcAQetTzNmeh8sAWuOHDAKYRxBrWsYolzGAUvQ5CJYHQH4QH3ZhEGFHcIoIT7GETy5jFmINQcaCFNvRhDju4tvU84RJnOMC2s1B5oAsdGMQi9nCDt5PAFS4EoaLAYYRwiDt8Nkl5qPNAH0YQxhHuocZAqCBwBcd4gBrToc4DTxCDHmmoXp464YVLR0oD5aFbCGEGIwigHW4dKQmUh55jHxtYwAR63kYKAsWTwCVOsYugigzAC6u+gXoeEcEO5jEIH9yCQCNzhRDG0KVfs4PAUqkUS6VStgnlclkeWCwWY/F43P5JmUzmsVKpCF6xocBsNpuoVquCj8RQIGHJWq1mYJlRgcIwwUJtKFCHmf+rOybwQRBmdLMQxlGhULg3GSbesBJ4ZzBMvuXP5/M3Hy0XgrCfPTTlcrnrVwvsE+uY4NBk4NhJVDSdTt+y8guOnQ1/cG/8qw/55dH/9dsfusBsjCvg/1t+qWfcOHUEmHnfQwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"replayIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABxUlEQVR42u2XwY3CMBBF0wElpARKcAkpISWkhJRACS5hS3AJnOHAwoEDB2QOHJCQmP2DcrBGycZ2BtiVMtKTEGLe/NixJYq55prrxUVEBjSgBStgu88NMJ8KVXZBPI2XBxaU7wi2AJbyy7LjVeGWwNP08uzSDlcDPzLUCcZ+X79j5RyofumtgNNeSfnO+QG5SfCYIc+kd3LgQKxzpNzT9cqy2VfJ4BPr70iptXpG42JXWcXH4+EBBbhCqdgl3D5JcL/fDSBBpRWQXT3++N253W4NoABfKBc7xYwmuvl6vbaAApx2QHaKGW108+VysYAC1AOyU8yID3g+n1eAAtQDslPMiA94Op1aQAHqAdkpZsQHPB6PDaAA9UPCTjEj/pAcDgcDSJB1zez3e9Pjr3r8Jkm82+08oADe5lSH6Xqt+N4Jd/oObbdbCyhks9mYREcd9D9DskN6gU0OCFEJSODBIsGxEv22c5Ag7/9KJyTBV0K/AzSCLXKLV6vnieuEftkr+RY7khVyGQyqJ74iEp0/TxBVTGKPedX2aj1UC+jPhuTDBEgvpH7AdUJA/4GAw2GAAy2oNQ7KlEt+DWwXxoBFMddc/6x+ACbEv+zn5grUAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"replayIconOver" src\x3d"data:image/png;base64,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"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"dock"\x3e\x3csettings\x3e\x3csetting name\x3d"iconalpha" value\x3d"0.75"/\x3e\x3csetting name\x3d"iconalphaactive" value\x3d"0.5"/\x3e\x3csetting name\x3d"iconalphaover" value\x3d"1"/\x3e\x3csetting name\x3d"margin" value\x3d"8"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"button" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA80lEQVR42u2WQQqDMBBFQ4pQeoVueiN7BtG9R+lR7IlaAllnIZaCxHR+KWLpou7mCxE+Jm7m8b+TiTXy1HVdim5N0yQNoTYYwGKrqiqnaer6vj865x4aQm0wgMXGGC/yYfTeP4dhiBpCbTCAxQrZKYQwppSMpsAAFgAZJiGy90LbITCAhc8hBneWLs2RMegrMgZ3ZodYIuP8qSnbfpmhln66jO5gpOsyhsh4HaI7qfMs29Qsy5H9iyxfYddMe8r7EFWX5cg2FVkeritO6rtsCoILWgEWONRiY4zZy3unoU9tmNLaEMJVFmeRl48HDaE2GMDyAjEWKwKFLBqcAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"buttonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA80lEQVR42u2WQQqDMBBFQ4pQeoVueiN7BtG9R+lR7IlaAllnIZaCxHR+KWLpou7mCxE+Jm7m8b+TiTXy1HVdim5N0yQNoTYYwGKrqiqnaer6vj865x4aQm0wgMXGGC/yYfTeP4dhiBpCbTCAxQrZKYQwppSMpsAAFgAZJiGy90LbITCAhc8hBneWLs2RMegrMgZ3ZodYIuP8qSnbfpmhln66jO5gpOsyhsh4HaI7qfMs29Qsy5H9iyxfYddMe8r7EFWX5cg2FVkeritO6rtsCoILWgEWONRiY4zZy3unoU9tmNLaEMJVFmeRl48HDaE2GMDyAjEWKwKFLBqcAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"buttonActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABD0lEQVR42u2XQQ6CMBREm97BeCnjIQjcxLt4KVckrKuphYIC/jEtKRu3fxaSDGlh0ZeZ/2mxRq66rs+iW9M0bw1hbTCAxVZVdVqW5eq9P7Rte9cQ1gYDWOw8zxd5ELque4QQeg1hbTCAxQrZ0Tn3XNd11BQYwAKgkUmI7DsQyklTYAALn0Nyi4lyVBZciltkDNpFpu3QrqizZcoiLeqi7dUj2xxKFa6q/C3idIiyywgiI3ZIBi9th8BQdhmFdl3GuJepn4fy8eMf2c/IEtBEENnEu9uz1BBvlzFGRvHXwRmZUMU0icpCUUfL4E7pEhwayvOIllLbD3DIY2KMUSvsvDZYrHPuLYM+v9BQgunB8gFJekgEq5c0PwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEklEQVR42mP4//8/AzJmIF0AAHImL9Fd8LZHAAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"playlist"\x3e\x3csettings\x3e\x3csetting name\x3d"activecolor" value\x3d"bfbfbf"/\x3e\x3csetting name\x3d"backgroundcolor" value\x3d"262626"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"999999"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"overcolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"titlecolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"titleactivecolor" value\x3d"ffffff"/\x3e\x3csetting name\x3d"titleovercolor" value\x3d"ffffff"/\x3e\x3csetting name\x3d"titlesize" value\x3d"13"/\x3e\x3csetting name\x3d"titleweight" value\x3d"normal"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAACCAAAAADqPASNAAAAHklEQVQImWNkoBQwMzEzMSEIRl8Kzfv3799fEIIRAKz4EE/thllAAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"item" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAQMAAAC032DuAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABFJREFUGBljYBgFo2AU0AsAAANwAAFvnYTuAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"itemActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAkklEQVR42u3QsQkAIAxFQQsHy/4LqYWohYW9IAj34ENIeTkiRvq7vlb3ynHXB/+Wk64CCBAgQIACCBAgQAEECBCgAAIECFAAAQIEKIAAAQIUQIAAAQogQIAABRAgQIACCBAgQAEECBAgQAEECBCgAAIECFAAAQIEKIAAAQIUQIAAAQogQIAABRAgQIACCBAgQJ1NmcoiAdM9H4IAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"itemImage" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAAAAACpLjUBAAAAeklEQVR42mPiJQswMXCSARiYGFjIAEBtZAEmRnJ0MZJrG321jfpt1G+DzW8jMUj2lzMwlO8n2W87PMrLPXaQ7LfOHR4eOzpJ99vLe/deku63eItDhyziSfab5fGFC49bkuy3jIUMDAszRtPkaDYd9duo34aT3/6TARgA1wJNszqw3XsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAKCAYAAACqnE5VAAAAEklEQVQ4EWNgGAWjYBSMAnQAAAQaAAFh133DAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAKCAYAAACqnE5VAAAAEklEQVQ4EWNgGAWjYBSMAnQAAAQaAAFh133DAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAABCAYAAADAW76WAAAAEElEQVR42mNiIA78J4AJAgCXsgf7Men2/QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"sliderRailCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAJklEQVR42mNgIA78J4CpBu7jseQ+NS3yx2ORPwOVgT+az+6TYgkAKMIaoyp3CGoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderRailCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAALElEQVR42mNgIB74A/F9IP4PxfehYlQF/kgWoGOqWnYfj0X3qWnRfwKYIAAAPu0ao3yGmCgAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAABCAYAAADAW76WAAAAMElEQVR42mP+//8/Q0NDA16sqqr6Pycnp6G0tLShqqqqoba2tgEEGhsbG6CgkZAZAEhcK/uBtK2eAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderThumbCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAUElEQVR42q3NoREAIQwEwHSYJjOo1IBIDfEx+EgEDMfLVwyCbWDphoig1gp3R2sNmYneO+acWGuBXimlxCEKekVV+RAxvWRm/EXxi2KMcZ1sxLJpnEUZrv0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderThumbCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAUklEQVR42q3NoREAIQwFUTpMk0wUNSBSAz4mPhIBk8/JUwwiW8C+8pqI0BhDzQzujjmnrrWoZNZao947Pgg/CHtvREQexsx6gTQNqrXiAuHlcQDl9mmceNYnwwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"tooltip"\x3e\x3csettings\x3e\x3csetting name\x3d"fontcase" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"fontsize" value\x3d"12"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"activecolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"overcolor" value\x3d"ffffff"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"arrow" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAASklEQVR42p3KQQ2AMAAEwXOAi/lWSqUgpZIqASmVAN+GNECYZH8bHDhfOoLyYSxJEuwP054Z+mLqucOGMU0DW1ZQp7HmCRpa/roABHU6b1RN/woAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capTopLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIElEQVR42mNgAAI1NTV/IL4PxP9hnP8wzACTQRb4j4wBSrYUAF5mO7QAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capTopRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAH0lEQVR42mNQU1P7D8T3gdifAQSgAjDsjy5wH13gPwBoAhQA/dBvkQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capBottomLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHUlEQVR42mNQU1P7j4wZgMR9dAF/FAEQgAqCVQIAxzkUAKo9yiMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottomRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVR42mNQU1P7j4wZ0ATuowv4wwTugzlAAADkhRQAhODqdgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"menuTopHD" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAYCAMAAABaxIqeAAAANlBMVEUAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAzMzOAgICiTZjlAAAAEHRSTlMADx8vP09fb3+Pn6+/z9/v+t8hjgAAAKRJREFUeNrt0EsOwyAMANHBfOKCA+X+l21Eq0RKN6jtoou8nS15hODyK956U1AFLEDu8proWN9YUXDNM8W1BVn1CNakRxB0xISizEkF8HUPxsx6DhItrEzZT/dgieR4DlK6Z9KSAdlf6PqmvAWDMUuad6UoycZfpQxU+SJIalb7AlatKWsEbqrVzD4M4oJ36sAHgTA2XsJmDCLPDZfLcP8xLv/nAYfSCxb2gYC4AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"menuTopCC" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAYCAMAAAAyNwimAAAANlBMVEUAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAzMzOAgICiTZjlAAAAEHRSTlMADx8vP09fb3+Pn6+/z9/v+t8hjgAAAOJJREFUGBntwVFSBCEMQMFHyECAQMz9L+vqnmA+tCxruuHxR1TPaEDLBpqZ0TW/qBnYyX1BdlCnesbgnhIdCYV1OaiDhEACZvQtaFTyCOoso+zGLW0BIpTDEtSBrZCAGacCfZLdUWdaQYRbzPjWB22gx2xuIAEzkhd1Em/qFNvbCrf0CUhlZ2agx6wXIAEzQoC2SCQuR6HMyS0SFZbJAWZT5y0BM8aEsi8S7Djngra4p4UfL2MAl6vzloAZZR2PAQlsp8beUbmpaIVaeNFSeVNABBAtgAJSAVUej9/08cN4/H+f7VwOHN0tLaAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"menuOption" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAuElEQVR42u2SQQqGIBCF/wOU1UYUMjAiQdSTeI4O2DnmUL9PatVq3AUNPBhEPt6bmd9XL6u+77uiXHRAV9+1wvais4iEEFXor7e9xdkJiJSSjDG0LAsppWgYhgplOb2iVdi2bRRCqHLOkdb6dpo5wAPu4AyglFJVjJGstTSOI+EPF4iYD+C6rjRNExuIyJgZYgJU5b2neZ7vBWX2UrAAzAwx4QwwuLuX0no2mBlAcMY4G85hf/Wu+gNm+kvWRCvtuQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"menuOptionOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABfklEQVR42r2VTWqDUBSFG6v5KcVJsWTWaUZdRLuNbsNxt5CZ4/xsIJhAkGQJ3UBCcCA6UhBJQDDk9h04giREKQkVPpD37j3cc+/z+dD0iEirSn10s4hGHokG/iReEdIVbUVH0SMdrumlcKMYKzEUTwpT8aKwAN9N7hmMbdWKsYJnCrwpBop3MuCaxZh2KXrNpsHAPpK32+2H4zjfw+HQAXjHGoX7jDUu7FNQpxULCa7rftm2/TMajeLZbJaB8XgcYw17FLWYo58LaizfhCVVxScSl8vlYbPZSBiGEkWR7HY78TzvgD3E0L7JXO3cbpdNH8AaqoFYmqZSFIUcj0fZ7/fi+75MJpMYMYhlTre0XR1GT/GK5qNfsIjKIFY+p9NJ4jiW1Wp1QAximdODRqMgbKKyqmCSJLJYLLJrgrWW0TPYhBDI81yCIJDpdHrVcu1QMAD0DDZRGcTW63XdUJqPDSqdz+cZ+oZhNB6b+x/s+396t18Od72+/vuCvf0X8At7J48fIgP61QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"menuOptionActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABfklEQVR42r2VTWqDUBSFG6v5KcVJsWTWaUZdRLuNbsNxt5CZ4/xsIJhAkGQJ3UBCcCA6UhBJQDDk9h04giREKQkVPpD37j3cc+/z+dD0iEirSn10s4hGHokG/iReEdIVbUVH0SMdrumlcKMYKzEUTwpT8aKwAN9N7hmMbdWKsYJnCrwpBop3MuCaxZh2KXrNpsHAPpK32+2H4zjfw+HQAXjHGoX7jDUu7FNQpxULCa7rftm2/TMajeLZbJaB8XgcYw17FLWYo58LaizfhCVVxScSl8vlYbPZSBiGEkWR7HY78TzvgD3E0L7JXO3cbpdNH8AaqoFYmqZSFIUcj0fZ7/fi+75MJpMYMYhlTre0XR1GT/GK5qNfsIjKIFY+p9NJ4jiW1Wp1QAximdODRqMgbKKyqmCSJLJYLLJrgrWW0TPYhBDI81yCIJDpdHrVcu1QMAD0DDZRGcTW63XdUJqPDSqdz+cZ+oZhNB6b+x/s+396t18Od72+/vuCvf0X8At7J48fIgP61QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAAFUlEQVR42mP4//8/AzUxw6iBg89AACt1ZqjY29nMAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAAFUlEQVR42mP4//8/AzUxw6iBg89AACt1ZqjY29nMAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAYAAABmdppWAAAAPklEQVR42u3MoREAIAwDQDpI95+xVwG2AjziY3IR+ViPZOaeu7tXVc2O2y+AQCAQCAQCgUAgEAgEAoHAP8ADVGLAaqN7TdUAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeRailCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAW0lEQVR42pXOsQoAIQjG8QPJIWuwlhafqfefepQvbLqhE274gwj+8AFwzczwbowBVUUpBSklfN1F4LqBIgJmXr/BWuvsvTt0aq35dwckohmBIZpzXg55PvsuutlmfbZn1WsUKQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRailCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAX0lEQVR42p2OsQrAIAxEhRAHoxB1cfGb/P/JTzkboVsttMODcOEe5wC4EymlEUKYMUYYdlv21jk+VHXUWtFa25RStlREQETjs7D3Pi9wY9Kc8xZ67+cfIZ6EtpKZceot+LS2cEn/XGYAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAYAAABmdppWAAAASElEQVR42u3MMRXAQAjA0LrnvTOBDGygAxHkDLR7hwwZ8x/gtYjgnENmUlV0NzPD7gLw9QkKCgoKCgoKCgoKCgoKCgoKCv4EvNU5k5sN8UhuAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeProgressCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAVUlEQVR42pXMwQkAIQxE0XSYshQtImXYhh3kKFiD+L3s3iTgwBz/E0BuTylRSsHMaK3Re2fOyd6bb9dOAtAD0J/BnLMGoD6DgNRa1cz8B8cYvtbSqDn4F/TaDHcq1wAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgressCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAVElEQVR42mP5//8/Ay7Q09PjLyIiMkFCQkJBUlKSQVxc/IGoqGgBMzPzRlx6WHBJdHZ2+jMxMW1AFgMapAAVCwDijSQZCHT5BAbcYALJBgKBAjlyAHZIEpxZZYn/AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAAnklEQVR42mP4//8/AxbMBMTsQMwHxMJALALFwlAxdqgaDL24DOMGYoVly5ZFVldXz6ysrFwOwiA2SAwkB1XDRMhARqjtigcPHsw/d+7c9Z9A8B8KQGyQGEgOpAaqlpGQgSAv2Vy7du38fxwAKmcDVYvXQCZoOHkjuwwdQOW8oWqZCBkICvyA/4RBAFQt/Q2kqpepHilUTzZUT9gUZz0ACDf945eBHBQAAAAASUVORK5CYII\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3c/components\x3e\x3c/skin\x3e';
		this.xml = f.utils.parseXML(this.text);
		return this
	}
})(jwplayer);
(function(f) {
	var g = jwplayer.utils, b = jwplayer.events, e = b.state, c = g.css, a = g.isMobile(), d = document, r = ".jwpreview", j = !0, h = !1;
	f.display = function(q, A) {
		function n(c) {
			if (aa)
				aa(c);
			else if ((!a || !x.jwGetControls()) && da.sendEvent(b.JWPLAYER_DISPLAY_CLICK), x.jwGetControls()) {
				var d = (new Date).getTime();
				ga && 500 > d - ga ? (x.jwSetFullscreen(), ga =
				void 0) : ga = (new Date).getTime();
				var k = g.bounds(m.parentNode.querySelector(".jwcontrolbar")), f = g.bounds(m), d = k.left - 10 - f.left, j = k.left + 30 - f.left, l = f.bottom - 40, h = f.bottom, n = k.right - 30 - f.left, k = k.right + 10 - f.left;
				if (a && !(c.x >= d && c.x <= j && c.y >= l && c.y <= h)) {
					if (c.x >= n && c.x <= k && c.y >= l && c.y <= h) {
						x.jwSetFullscreen();
						return
					}
					da.sendEvent(b.JWPLAYER_DISPLAY_CLICK);
					if (O)
						return
				}
				switch(x.jwGetState()) {
					case e.PLAYING:
					case e.BUFFERING:
						x.jwPause();
						break;
					default:
						x.jwPlay()
				}
			}
		}

		function y(a, b) {
			Y.showicons && (a || b ? (J.setRotation("buffer" == a ? parseInt(Y.bufferrotation) : 0, parseInt(Y.bufferinterval)), J.setIcon(a), J.setText(b)) : J.hide())
		}

		function k(a) {
			u != a ? (u && D(r, h), ( u = a) ? ( a = new Image, a.addEventListener("load", I, h), a.src = u) : (c("#" + m.id + " " + r, {
				"background-image" :
				void 0
			}), D(r, h), B = G = 0)) : u && !O && D(r, j);
			l(x.jwGetState())
		}

		function p(a) {
			clearTimeout(ka);
			ka = setTimeout(function() {
				l(a.newstate)
			}, 100)
		}

		function l(a) {
			a = Z ? Z : x ? x.jwGetState() : e.IDLE;
			if (a != Q)
				switch(Q=a,J&&J.setRotation(0),a) {
					case e.IDLE:
						!F && !P && (u && !C && D(r, j), a = !0, x._model && !1 === x._model.config.displaytitle && ( a = !1), y("play", z && a ? z.title : ""));
						break;
					case e.BUFFERING:
						F = h;
						M.error && M.error.setText();
						P = h;
						y("buffer");
						break;
					case e.PLAYING:
						y();
						break;
					case e.PAUSED:
						y("play")
				}
		}

		function I() {
			B = this.width;
			G = this.height;
			l(x.jwGetState());
			w();
			u && c("#" + m.id + " " + r, {
				"background-image" : "url(" + u + ")"
			})
		}

		function t(a) {
			F = j;
			y("error", a.message)
		}

		function w() {
			0 < m.clientWidth * m.clientHeight && g.stretch(x.jwGetStretching(), s, m.clientWidth, m.clientHeight, B, G)
		}

		function D(a, b) {
			g.exists(E[a]) || (E[a] = !1);
			E[a] != b && (E[a] = b, c("#" + m.id + " " + a, {
				opacity : b ? 1 : 0,
				visibility : b ? "visible" : "hidden"
			}))
		}

		var x = q, m, s, v, z, u, B, G, C = h, M = {}, F = h, P = h, E = {}, O, U, J, Z, Q, Y = g.extend({
			showicons : j,
			bufferrotation : 45,
			bufferinterval : 100,
			fontcolor : "#ccc",
			overcolor : "#fff",
			fontsize : 15,
			fontweight : ""
		}, q.skin.getComponentSettings("display"), A), da = new b.eventdispatcher, aa, ga;
		g.extend(this, da);
		this.clickHandler = n;
		var ka;
		this.forceState = function(a) {
			Z = a;
			l(a);
			this.show()
		};
		this.releaseState = function(a) {
			Z = null;
			l(a);
			this.show()
		};
		this.hidePreview = function(a) {
			C = a;
			D(r, !a);
			a && ( O = !0)
		};
		this.setHiding = function() {
			O = !0
		};
		this.element = function() {
			return m
		};
		this.redraw = w;
		this.show = function(a) {
			if (J && (a || ( Z ? Z : x ? x.jwGetState() : e.IDLE) != e.PLAYING))
				clearTimeout(U), U =
				void 0, m.style.display = "block", J.show(), O = !1
		};
		this.hide = function() {
			J && (J.hide(), O = !0)
		};
		this.setAlternateClickHandler = function(a) {
			aa = a
		};
		this.revertAlternateClickHandler = function() {
			aa =
			void 0
		};
		m = d.createElement("div");
		m.id = x.id + "_display";
		m.className = "jwdisplay";
		s = d.createElement("div");
		s.className = "jwpreview jw" + x.jwGetStretching();
		m.appendChild(s);
		x.jwAddEventListener(b.JWPLAYER_PLAYER_STATE, p);
		x.jwAddEventListener(b.JWPLAYER_PLAYLIST_ITEM, function() {
			F = h;
			M.error && M.error.setText();
			var a = ( z = x.jwGetPlaylist()[x.jwGetPlaylistIndex()]) ? z.image : "";
			Q =
			void 0;
			k(a)
		});
		x.jwAddEventListener(b.JWPLAYER_PLAYLIST_COMPLETE, function() {
			P = j;
			y("replay");
			var a = x.jwGetPlaylist()[0];
			k(a.image)
		});
		x.jwAddEventListener(b.JWPLAYER_MEDIA_ERROR, t);
		x.jwAddEventListener(b.JWPLAYER_ERROR, t);
		a ? ( v = new g.touch(m), v.addEventListener(g.touchEvents.TAP, n)) : m.addEventListener("click", n, h);
		v = {
			font : Y.fontweight + " " + Y.fontsize + "px/" + (parseInt(Y.fontsize) + 3) + "px Arial,Helvetica,sans-serif",
			color : Y.fontcolor
		};
		J = new f.displayicon(m.id + "_button", x, v, {
			color : Y.overcolor
		});
		m.appendChild(J.element());
		p({
			newstate : e.IDLE
		})
	};
	c(".jwdisplay", {
		position : "absolute",
		cursor : "pointer",
		width : "100%",
		height : "100%",
		overflow : "hidden"
	});
	c(".jwdisplay .jwpreview", {
		position : "absolute",
		width : "100%",
		height : "100%",
		background : "no-repeat center",
		overflow : "hidden",
		opacity : 0
	});
	c(".jwdisplay, .jwdisplay *", {
		"-webkit-transition" : "opacity .25s, background-image .25s, color .25s",
		"-moz-transition" : "opacity .25s, background-image .25s, color .25s",
		"-o-transition" : "opacity .25s, background-image .25s, color .25s"
	})
})(jwplayer.html5);
(function(f) {
	var g = jwplayer.utils, b = g.css, e =
	void 0, c = document, a = "none", d = "100%";
	f.displayicon = function(f, j, h, q) {
		function A(a, b) {
			return "#" + D + ( b ? ":hover" : "") + " " + ( a ? a : "")
		}

		function n(a, b, d, e) {
			var g = c.createElement("div");
			g.className = a;
			b && b.appendChild(g);
			y(a, "." + a, d, e);
			return g
		}

		function y(a, c, d, e) {
			var f = k(a);
			"replayIcon" == a && !f.src && ( f = k("playIcon"));
			f.src ? ( d = g.extend({}, d), 0 < a.indexOf("Icon") && ( G = f.width), d["background-image"] = "url(" + f.src + ")", d["background-size"] = f.width + "px " + f.height + "px", d.width = f.width, b(A(c), d), e = g.extend({}, e), f.overSrc && (e["background-image"] = "url(" + f.overSrc + ")"), g.isMobile() || b("#" + t.id + " .jwdisplay:hover " + ( c ? c : A()), e), b(A(), {
				display : "table"
			}, !0)) : b(A(), {
				display : "none"
			}, !0);
			B = f
		}

		function k(a) {
			var b = w.getSkinElement("display", a);
			a = w.getSkinElement("display", a + "Over");
			return b ? (b.overSrc = a && a.src ? a.src : "", b) : {
				src : "",
				overSrc : "",
				width : 0,
				height : 0
			}
		}

		function p() {
			var c = v || 0 == G, g = "px " + d;
			b(A(".jwtext"), {
				display : z.innerHTML && c ? e : a
			});
			M = 10;
			setTimeout(function() {
				l(g)
			}, 0);
			c && ( C = setInterval(function() {
				l(g)
			}, 100))
		}

		function l(a) {
			if (0 >= M)
				clearInterval(C);
			else {
				M--;
				var c = Math.max(B.width, g.bounds(x).width - s.width - m.width);
				(g.isFF() || g.isIE()) && c++;
				g.isChrome() && 1 == x.parentNode.clientWidth % 2 && c++;
				b(A(), {
					"background-size" : [m.width + a, c + a, s.width + a].join()
				}, !0)
			}
		}

		function I() {
			E = (E + P) % 360;
			g.rotate(u, E)
		}

		var t = j, w = t.skin, D = f, x, m, s, v, z, u, B, G = 0, C, M;
		this.element = function() {
			return x
		};
		this.setText = function(a) {
			var b = z.style;
			z.innerHTML = a ? a.replace(":", ":\x3cbr\x3e") : "";
			b.height = "0";
			b.display = "block";
			if (a)
				for (; 2 < Math.floor(z.scrollHeight / c.defaultView.getComputedStyle(z, null).lineHeight.replace("px", "")); )
					z.innerHTML = z.innerHTML.replace(/(.*) .*$/, "$1...");
			b.height = "";
			b.display = "";
			p()
		};
		this.setIcon = function(a) {
			var b = n("jwicon");
			b.id = x.id + "_" + a;
			y(a + "Icon", "#" + b.id);
			x.contains(u) ? x.replaceChild(b, u) : x.appendChild(b);
			u = b
		};
		var F, P = 0, E;
		this.setRotation = function(a, b) {
			clearInterval(F);
			E = 0;
			P = a;
			0 == a ? I() : F = setInterval(I, b)
		};
		j = this.hide = function() {
			x.style.opacity = 0
		};
		this.show = function() {
			x.style.opacity = 1
		};
		x = n("jwdisplayIcon");
		x.id = D;
		f = k("background");
		m = k("capLeft");
		s = k("capRight");
		v = 0 < m.width * s.width;
		var O = {
			"background-image" : "url(" + m.src + "), url(" + f.src + "), url(" + s.src + ")",
			"background-position" : "left,center,right",
			"background-repeat" : "no-repeat",
			padding : "0 " + s.width + "px 0 " + m.width + "px",
			height : f.height,
			"margin-top" : f.height / -2
		};
		b(A(), O);
		f.overSrc && (O["background-image"] = "url(" + m.overSrc + "), url(" + f.overSrc + "), url(" + s.overSrc + ")");
		g.isMobile() || b("#" + t.id + " .jwdisplay:hover " + A(), O);
		z = n("jwtext", x, h, q);
		u = n("jwicon", x);
		j();
		p()
	};
	b(".jwdisplayIcon", {
		display : "table",
		cursor : "pointer",
		position : "relative",
		"margin-left" : "auto",
		"margin-right" : "auto",
		top : "50%"
	}, !0);
	b(".jwdisplayIcon div", {
		position : "relative",
		display : "table-cell",
		"vertical-align" : "middle",
		"background-repeat" : "no-repeat",
		"background-position" : "center"
	});
	b(".jwdisplayIcon div", {
		"vertical-align" : "middle"
	}, !0);
	b(".jwdisplayIcon .jwtext", {
		color : "#fff",
		padding : "0 1px",
		"max-width" : "300px",
		"overflow-y" : "hidden",
		"text-align" : "center",
		"-webkit-user-select" : a,
		"-moz-user-select" : a,
		"-ms-user-select" : a,
		"user-select" : a
	})
})(jwplayer.html5);
(function(f) {
	var g = jwplayer.utils, b = g.css, e = g.bounds, c = ".jwdockbuttons", a = document, d = "none", r = "block";
	f.dock = function(j, h) {
		function q(a) {
			return !a || !a.src ? {} : {
				background : "url(" + a.src + ") center",
				"background-size" : a.width + "px " + a.height + "px"
			}
		}

		function A(a, c) {
			var d = k(a);
			b(n("." + a), g.extend(q(d), {
				width : d.width
			}));
			return y("div", a, c)
		}

		function n(a) {
			return "#" + I + " " + ( a ? a : "")
		}

		function y(b, c, d) {
			b = a.createElement(b);
			c && (b.className = c);
			d && d.appendChild(b);
			return b
		}

		function k(a) {
			return ( a = t.getSkinElement("dock", a)) ? a : {
				width : 0,
				height : 0,
				src : ""
			}
		}

		function p() {
			b(c + " .capLeft, " + c + " .capRight", {
				display : w ? r : d
			})
		}

		var l = g.extend({}, {
			iconalpha : 0.75,
			iconalphaactive : 0.5,
			iconalphaover : 1,
			margin : 8
		}, h), I = j.id + "_dock", t = j.skin, w = 0, D = {}, x = {}, m, s, v, z = this;
		z.redraw = function() {
			e(m)
		};
		z.element = function() {
			return m
		};
		z.offset = function(a) {
			b(n(), {
				"margin-left" : a
			})
		};
		z.hide = function() {
			z.visible && (z.visible = !1, m.style.opacity = 0, clearTimeout(v), v = setTimeout(function() {
				m.style.display = d
			}, 250))
		};
		z.show = function() {
			!z.visible && w && (z.visible = !0, m.style.display = r, clearTimeout(v), v = setTimeout(function() {
				m.style.opacity = 1
			}, 0))
		};
		z.addButton = function(a, c, d, k) {
			if (!D[k]) {
				var j = y("div", "divider", s), l = y("button", null, s), h = y("div", null, l);
				h.id = I + "_" + k;
				h.innerHTML = "\x26nbsp;";
				b("#" + h.id, {
					"background-image" : a
				});
				"string" == typeof d && ( d = new Function(d));
				g.isMobile() ? (new g.touch(l)).addEventListener(g.touchEvents.TAP, function(a) {
					d(a)
				}) : l.addEventListener("click", function(a) {
					d(a);
					a.preventDefault()
				});
				D[k] = {
					element : l,
					label : c,
					divider : j,
					icon : h
				};
				if (c) {
					var n = new f.overlay(h.id + "_tooltip", t, !0);
					a = y("div");
					a.id = h.id + "_label";
					a.innerHTML = c;
					b("#" + a.id, {
						padding : 3
					});
					n.setContents(a);
					if (!g.isMobile()) {
						var q;
						l.addEventListener("mouseover", function() {
							clearTimeout(q);
							var a = x[k], c, d;
							c = e(D[k].icon);
							a.offsetX(0);
							d = e(m);
							b("#" + a.element().id, {
								left : c.left - d.left + c.width / 2
							});
							c = e(a.element());
							d.left > c.left && a.offsetX(d.left - c.left + 8);
							n.show();
							g.foreach(x, function(a, b) {
								a != k && b.hide()
							})
						}, !1);
						l.addEventListener("mouseout", function() {
							q = setTimeout(n.hide, 100)
						}, !1);
						m.appendChild(n.element());
						x[k] = n
					}
				}
				w++;
				p()
			}
		};
		z.removeButton = function(a) {
			if (D[a]) {
				s.removeChild(D[a].element);
				s.removeChild(D[a].divider);
				var b = document.getElementById("" + I + "_" + a + "_tooltip");
				b && m.removeChild(b);
				delete D[a];
				w--;
				p()
			}
		};
		z.numButtons = function() {
			return w
		};
		z.visible = !1;
		m = y("div", "jwdock");
		s = y("div", "jwdockbuttons");
		m.appendChild(s);
		m.id = I;
		var u = k("button"), B = k("buttonOver"), G = k("buttonActive");
		u && (b(n(), {
			height : u.height,
			padding : l.margin
		}), b(c, {
			height : u.height
		}), b(n("button"), g.extend(q(u), {
			width : u.width,
			cursor : "pointer",
			border : d
		})), b(n("button:hover"), q(B)), b(n("button:active"), q(G)), b(n("button\x3ediv"), {
			opacity : l.iconalpha
		}), b(n("button:hover\x3ediv"), {
			opacity : l.iconalphaover
		}), b(n("button:active\x3ediv"), {
			opacity : l.iconalphaactive
		}), b(n(".jwoverlay"), {
			top : l.margin + u.height
		}), A("capLeft", s), A("capRight", s), A("divider"));
		setTimeout(function() {
			e(m)
		})
	};
	b(".jwdock", {
		opacity : 0,
		display : d
	});
	b(".jwdock \x3e *", {
		height : "100%",
		"float" : "left"
	});
	b(".jwdock \x3e .jwoverlay", {
		height : "auto",
		"float" : d,
		"z-index" : 99
	});
	b(c + " button", {
		position : "relative"
	});
	b(c + " \x3e *", {
		height : "100%",
		"float" : "left"
	});
	b(c + " .divider", {
		display : d
	});
	b(c + " button ~ .divider", {
		display : r
	});
	b(c + " .capLeft, " + c + " .capRight", {
		display : d
	});
	b(c + " .capRight", {
		"float" : "right"
	});
	b(c + " button \x3e div", {
		left : 0,
		right : 0,
		top : 0,
		bottom : 0,
		margin : 5,
		position : "absolute",
		"background-position" : "center",
		"background-repeat" : "no-repeat"
	});
	g.transitionStyle(".jwdock", "background .25s, opacity .25s");
	g.transitionStyle(".jwdock .jwoverlay", "opacity .25s");
	g.transitionStyle(c + " button div", "opacity .25s")
})(jwplayer.html5);
(function(f) {
	var g = jwplayer, b = g.utils, e = g.events, c = e.state, a = g.playlist;
	f.instream = function(d, g, j, h) {
		function q(a) {
			a.type == e.JWPLAYER_MEDIA_ERROR && ( a = b.extend({}, a), a.type = e.JWPLAYER_ERROR);
			l(a.type, a);
			O = !0;
			E.jwInstreamDestroy(!1)
		}

		function A(a) {
			P.state = a.newstate;
			n(a)
		}

		function n(a) {
			C && l(a.type, a)
		}

		function y() {
			C && u.play()
		}

		function k() {
			C && setTimeout(function() {
				E.jwInstreamDestroy(!0)
			}, 10)
		}

		function p(a) {
			a.width && a.height && x.resizeMedia()
		}

		function l(a, b, c) {
			(C || c) && M.sendEvent(a, b)
		}

		function I() {
			B && B.redraw();
			G && G.redraw()
		}

		var t = {
			controlbarseekable : "never",
			controlbarpausable : !0,
			controlbarstoppable : !0,
			playlistclickable : !0
		}, w, D, x = j, m, s, v, z, u, B, G, C = !1, M, F, P, E = this, O = !1, U = !0;
		E.load = function(j, M) {
			b.isAndroid(2.3) ? q({
				type : e.JWPLAYER_ERROR,
				message : "Error loading instream: Cannot play instream on Android 2.3"
			}) : ( C = !0, D = b.extend(t, M), w = new a.item(j), F = document.createElement("div"), F.id = E.id + "_instream_container", m = h.detachMedia(), u = new f.video(m), u.addGlobalListener(n), u.addEventListener(e.JWPLAYER_MEDIA_META, p), u.addEventListener(e.JWPLAYER_MEDIA_COMPLETE, k), u.addEventListener(e.JWPLAYER_MEDIA_BUFFER_FULL, y), u.addEventListener(e.JWPLAYER_MEDIA_ERROR, q), u.addEventListener(e.JWPLAYER_PLAYER_STATE, A), u.attachMedia(), u.mute(g.mute), u.volume(g.volume), P = new f.model({}, u), P.setVolume(g.volume), P.setMute(g.mute), P.addEventListener(e.JWPLAYER_ERROR, q), z = g.playlist[g.item], v = g.getVideo().checkComplete() ? c.IDLE : d.jwGetState(), h.checkBeforePlay() && ( v = c.PLAYING, U = !1), s = m.currentTime, P.setPlaylist([j]), O || ((v == c.BUFFERING || v == c.PLAYING) && m.pause(), G = new f.display(E), G.setAlternateClickHandler(function(a) {
				d.jwGetControls() ? (P.state == c.PAUSED ? E.jwInstreamPlay() : E.jwInstreamPause(), a.hasControls = !0) : a.hasControls = !1;
				l(e.JWPLAYER_INSTREAM_CLICK, a)
			}), F.appendChild(G.element()), B = new f.controlbar(E), F.appendChild(B.element()), B.show(), d.jwGetControls() ? (B.show(), G.show()) : (B.hide(), G.hide()), x.setupInstream(F, B, G), I(), u.load(P.playlist[0])))
		};
		E.jwInstreamDestroy = function(a) {
			if (C) {
				C = !1;
				v != c.IDLE ? u.load(z, !1) : u.stop();
				M.resetEventListeners();
				O || G.revertAlternateClickHandler();
				u.detachMedia();
				x.destroyInstream();
				if (B)
					try {
						B.element().parentNode.removeChild(B.getDisplayElement())
					} catch(b) {
					}
				l(e.JWPLAYER_INSTREAM_DESTROYED, {
					reason : a ? "complete" : "destroyed"
				}, !0);
				h.attachMedia();
				if (v == c.BUFFERING || v == c.PLAYING)
					m.play(), g.playlist[g.item] == z && U && g.getVideo().seek(s)
			}
		};
		E.jwInstreamAddEventListener = function(a, b) {
			M.addEventListener(a, b)
		};
		E.jwInstreamRemoveEventListener = function(a, b) {
			M.removeEventListener(a, b)
		};
		E.jwInstreamPlay = function() {
			C && (u.play(!0), g.state = jwplayer.events.state.PLAYING, G.show())
		};
		E.jwInstreamPause = function() {
			C && (u.pause(!0), g.state = jwplayer.events.state.PAUSED, d.jwGetControls() && G.show())
		};
		E.jwInstreamSeek = function(a) {
			C && u.seek(a)
		};
		E.jwInstreamSetText = function(a) {
			B.setText(a)
		};
		E.jwPlay = function() {
			"true" == D.controlbarpausable.toString().toLowerCase() && E.jwInstreamPlay()
		};
		E.jwPause = function() {
			"true" == D.controlbarpausable.toString().toLowerCase() && E.jwInstreamPause()
		};
		E.jwStop = function() {
			"true" == D.controlbarstoppable.toString().toLowerCase() && (E.jwInstreamDestroy(), d.jwStop())
		};
		E.jwSeek = function(a) {
			switch(D.controlbarseekable.toLowerCase()) {
				case "always":
					E.jwInstreamSeek(a);
					break;
				case "backwards":
					P.position > a && E.jwInstreamSeek(a)
			}
		};
		E.jwSeekDrag = function(a) {
			P.seekDrag(a)
		};
		E.jwGetPosition = function() {
		};
		E.jwGetDuration = function() {
		};
		E.jwGetWidth = d.jwGetWidth;
		E.jwGetHeight = d.jwGetHeight;
		E.jwGetFullscreen = d.jwGetFullscreen;
		E.jwSetFullscreen = d.jwSetFullscreen;
		E.jwGetVolume = function() {
			return g.volume
		};
		E.jwSetVolume = function(a) {
			P.setVolume(a);
			d.jwSetVolume(a)
		};
		E.jwGetMute = function() {
			return g.mute
		};
		E.jwSetMute = function(a) {
			P.setMute(a);
			d.jwSetMute(a)
		};
		E.jwGetState = function() {
			return P.state
		};
		E.jwGetPlaylist = function() {
			return [w]
		};
		E.jwGetPlaylistIndex = function() {
			return 0
		};
		E.jwGetStretching = function() {
			return g.config.stretching
		};
		E.jwAddEventListener = function(a, b) {
			M.addEventListener(a, b)
		};
		E.jwRemoveEventListener = function(a, b) {
			M.removeEventListener(a, b)
		};
		E.jwSetCurrentQuality = function() {
		};
		E.jwGetQualityLevels = function() {
			return []
		};
		E.skin = d.skin;
		E.id = d.id + "_instream";
		M = new e.eventdispatcher;
		d.jwAddEventListener(e.JWPLAYER_RESIZE, I);
		d.jwAddEventListener(e.JWPLAYER_FULLSCREEN, function(a) {
			n(a);
			I();
			b.isIPad() && (!a.fullscreen && P.state == jwplayer.events.state.PAUSED) && G.show(!0);
			b.isIPad() && (!a.fullscreen && P.state == jwplayer.events.state.PLAYING) && G.hide()
		});
		return E
	}
})(jwplayer.html5);
(function(f) {
	var g = f.utils, b = g.css, e = f.events.state, c = f.html5.logo = function(a, d) {
		function r(a) {
			g.exists(a) && a.stopPropagation && a.stopPropagation();
			if (!y || !q.link)
				j.jwGetState() == e.IDLE || j.jwGetState() == e.PAUSED ? j.jwPlay() : j.jwPause();
			y && q.link && (j.jwPause(), j.jwSetFullscreen(!1), window.open(q.link, q.linktarget))
		}

		var j = a, h = j.id + "_logo", q, A, n = c.defaults, y = !1;
		this.resize = function() {
		};
		this.element = function() {
			return A
		};
		this.offset = function(a) {
			b("#" + h + " ", {
				"margin-bottom" : a
			})
		};
		this.position = function() {
			return q.position
		};
		this.margin = function() {
			return parseInt(q.margin)
		};
		this.hide = function(a) {
			if (q.hide || a)
				y = !1, A.style.visibility = "hidden", A.style.opacity = 0
		};
		this.show = function() {
			y = !0;
			A.style.visibility = "visible";
			A.style.opacity = 1
		};
		var k = "o";
		j.edition && ( k = j.edition(), k = "pro" == k ? "p" : "premium" == k ? "r" : "ads" == k ? "a" : "free" == k ? "f" : "o");
		if ("o" == k || "f" == k)
			n.link = "http://www.longtailvideo.com/jwpabout/?a\x3dl\x26v\x3d" + f.version + "\x26m\x3dh\x26e\x3d" + k;
		q = g.extend({}, n, d);
		q.hide = "true" == q.hide.toString();
		A = document.createElement("img");
		A.className = "jwlogo";
		A.id = h;
		if (q.file) {
			var n = /(\w+)-(\w+)/.exec(q.position), k = {}, p = q.margin;
			3 == n.length ? (k[n[1]] = p, k[n[2]] = p) : k.top = k.right = p;
			b("#" + h + " ", k);
			A.src = (q.prefix ? q.prefix : "") + q.file;
			g.isMobile() ? (new g.touch(A)).addEventListener(g.touchEvents.TAP, r) : A.onclick = r
		} else
			A.style.display = "none";
		return this
	};
	c.defaults = {
		prefix : g.repo(),
		file : "",
		linktarget : "_top",
		margin : 8,
		hide : !1,
		position : "top-right"
	};
	b(".jwlogo", {
		cursor : "pointer",
		position : "absolute",
		"z-index" : 100,
		opacity : 0
	});
	g.transitionStyle(".jwlogo", "visibility .25s, opacity .25s")
})(jwplayer);
(function(f) {
	var g = f.html5, b = f.utils, e = b.css, c =
	void 0;
	g.menu = function(a, d, f, j) {
		function h(a) {
			return !a || !a.src ? {} : {
				background : "url(" + a.src + ") no-repeat left",
				"background-size" : a.width + "px " + a.height + "px"
			}
		}

		function q(a, b) {
			return function() {
				I(a);
				y && y(b)
			}
		}

		function A(a, b) {
			var c = document.createElement("div");
			a && (c.className = a);
			b && b.appendChild(c);
			return c
		}

		function n(a) {
			return ( a = f.getSkinElement("tooltip", a)) ? a : {
				width : 0,
				height : 0,
				src : c
			}
		}

		var y = j, k = new g.overlay(d + "_overlay", f);
		j = b.extend({
			fontcase : c,
			fontcolor : "#cccccc",
			fontsize : 11,
			fontweight : c,
			activecolor : "#ffffff",
			overcolor : "#ffffff"
		}, f.getComponentSettings("tooltip"));
		var p, l = [];
		this.element = function() {
			return k.element()
		};
		this.addOption = function(a, c) {
			var e = A("jwoption", p);
			e.id = d + "_option_" + c;
			e.innerHTML = a;
			b.isMobile() ? (new b.touch(e)).addEventListener(b.touchEvents.TAP, q(l.length, c)) : e.addEventListener("click", q(l.length, c));
			l.push(e)
		};
		this.clearOptions = function() {
			for (; 0 < l.length; )
				p.removeChild(l.pop())
		};
		var I = this.setActive = function(a) {
			for (var b = 0; b < l.length; b++) {
				var c = l[b];
				c.className = c.className.replace(" active", "");
				b == a && (c.className += " active")
			}
		};
		this.show = k.show;
		this.hide = k.hide;
		this.offsetX = k.offsetX;
		p = A("jwmenu");
		p.id = d;
		var t = n("menuTop" + a);
		a = n("menuOption");
		var w = n("menuOptionOver"), D = n("menuOptionActive");
		if (t && t.image) {
			var x = new Image;
			x.src = t.src;
			x.width = t.width;
			x.height = t.height;
			p.appendChild(x)
		}
		a && ( t = "#" + d + " .jwoption", e(t, b.extend(h(a), {
			height : a.height,
			color : j.fontcolor,
			"padding-left" : a.width,
			font : j.fontweight + " " + j.fontsize + "px Arial,Helvetica,sans-serif",
			"line-height" : a.height,
			"text-transform" : "upper" == j.fontcase ? "uppercase" : c
		})), e(t + ":hover", b.extend(h(w), {
			color : j.overcolor
		})), e(t + ".active", b.extend(h(D), {
			color : j.activecolor
		})));
		k.setContents(p)
	};
	e("." + "jwmenu jwoption".replace(/ /g, " ."), {
		cursor : "pointer",
		position : "relative"
	})
})(jwplayer);
(function(f) {
	var g = jwplayer.utils, b = jwplayer.events;
	f.model = function(e, c) {
		function a(a) {
			var b = A[a.type] ? A[a.type].split(",") : [], c, e;
			if (0 < b.length) {
				for ( c = 0; c < b.length; c++) {
					var g = b[c].split("-\x3e"), f = g[0], g = g[1] ? g[1] : f;
					d[g] != a[f] && (d[g] = a[f], e = !0)
				}
				e && d.sendEvent(a.type, a)
			} else
				d.sendEvent(a.type, a)
		}

		var d = this, r, j;
		j = g.getCookies();
		var h = {
			controlbar : {},
			display : {}
		}, q = {
			autostart : !1,
			controls : !0,
			debug :
			void 0,
			fullscreen : !1,
			height : 320,
			mobilecontrols : !1,
			mute : !1,
			playlist : [],
			playlistposition : "none",
			playlistsize : 180,
			playlistlayout : "extended",
			repeat : !1,
			skin :
			void 0,
			stretching : g.stretching.UNIFORM,
			width : 480,
			volume : 90
		}, A = {};
		A[b.JWPLAYER_MEDIA_MUTE] = "mute";
		A[b.JWPLAYER_MEDIA_VOLUME] = "volume";
		A[b.JWPLAYER_PLAYER_STATE] = "newstate-\x3estate";
		A[b.JWPLAYER_MEDIA_BUFFER] = "bufferPercent-\x3ebuffer";
		A[b.JWPLAYER_MEDIA_TIME] = "position,duration";
		d.getVideo = function() {
			return r
		};
		d.seekDrag = function(a) {
			r.seekDrag(a)
		};
		d.setFullscreen = function(a) {
			a != d.fullscreen && (d.fullscreen = a, d.sendEvent(b.JWPLAYER_FULLSCREEN, {
				fullscreen : a
			}))
		};
		d.setPlaylist = function(a) {
			d.playlist = g.filterPlaylist(a);
			0 == d.playlist.length ? d.sendEvent(b.JWPLAYER_ERROR, {
				message : "Error loading playlist: No playable sources found"
			}) : (d.sendEvent(b.JWPLAYER_PLAYLIST_LOADED, {
				playlist : jwplayer(d.id).getPlaylist()
			}), d.item = -1, d.setItem(0))
		};
		d.setItem = function(a) {
			var c = !1;
			a == d.playlist.length || -1 > a ? ( a = 0, c = !0) : a = -1 == a || a > d.playlist.length ? d.playlist.length - 1 : a;
			if (c || a != d.item)
				d.item = a, d.sendEvent(b.JWPLAYER_PLAYLIST_ITEM, {
					index : d.item
				})
		};
		d.setVolume = function(c) {
			d.mute && 0 < c && d.setMute(!1);
			c = Math.round(c);
			d.mute || g.saveCookie("volume", c);
			a({
				type : b.JWPLAYER_MEDIA_VOLUME,
				volume : c
			});
			r.volume(c)
		};
		d.setMute = function(c) {
			g.exists(c) || ( c = !d.mute);
			g.saveCookie("mute", c);
			a({
				type : b.JWPLAYER_MEDIA_MUTE,
				mute : c
			});
			r.mute(c)
		};
		d.componentConfig = function(a) {
			return h[a]
		};
		g.extend(d, new b.eventdispatcher);
		var n = d, y = g.extend({}, q, j, e);
		g.foreach(y, function(a, b) {
			y[a] = g.serialize(b)
		});
		n.config = y;
		g.extend(d, {
			id : e.id,
			state : b.state.IDLE,
			duration : -1,
			position : 0,
			buffer : 0
		}, d.config);
		d.playlist = [];
		d.setItem(0);
		c ? ( r = c, j = r.getTag()) : ( j = document.createElement("video"), r = new f.video(j));
		r.volume(d.volume);
		r.mute(d.mute);
		r.addGlobalListener(a)
	}
})(jwplayer.html5);
(function(f) {
	var g = f.utils, b = g.css, e = g.transitionStyle, c = "top", a = "bottom", d = "right", r = "left", j =
	void 0, h = document, q = {
		fontcase : j,
		fontcolor : "#ffffff",
		fontsize : 12,
		fontweight : j,
		activecolor : "#ffffff",
		overcolor : "#ffffff"
	};
	f.html5.overlay = function(e, f, y) {
		function k(a) {
			return "#" + x + ( a ? " ." + a : "")
		}

		function p(a, b) {
			var c = h.createElement("div");
			a && (c.className = a);
			b && b.appendChild(c);
			return c
		}

		function l(a, c) {
			var d;
			d = ( d = D.getSkinElement("tooltip", a)) ? d : {
				width : 0,
				height : 0,
				src : "",
				image : j,
				ready : !1
			};
			var e = p(c, m);
			b(k(c.replace(" ", ".")), I(d));
			return [e, d]
		}

		function I(a) {
			return {
				background : "url(" + a.src + ") center",
				"background-size" : a.width + "px " + a.height + "px"
			}
		}

		function t(e, f) {
			f || ( f = "");
			var h = l("cap" + e + f, "jwborder jw" + e + ( f ? f : "")), m = h[0], h = h[1], n = g.extend(I(h), {
				width : e == r || f == r || e == d || f == d ? h.width : j,
				height : e == c || f == c || e == a || f == a ? h.height : j
			});
			n[e] = e == a && !B || e == c && B ? u : 0;
			f && (n[f] = 0);
			b(k(m.className.replace(/ /g, ".")), n);
			m = {};
			n = {};
			h = {
				left : h.width,
				right : h.width,
				top : ( B ? u : 0) + h.height,
				bottom : ( B ? 0 : u) + h.height
			};
			f && (m[f] = h[f], m[e] = 0, n[e] = h[e], n[f] = 0, b(k("jw" + e), m), b(k("jw" + f), n), G[e] = h[e], G[f] = h[f])
		}

		function w() {
			0 != m.clientWidth && (b(k(), {
				"margin-left" : Math.round(v - m.clientWidth / 2)
			}), b(k("jwarrow"), {
				"margin-left" : Math.round(z.width / -2 - v)
			}))
		}

		var D = f, x = e, m, s, v = 0, z, u, B = y;
		e = g.extend({}, q, D.getComponentSettings("tooltip"));
		var G = {}, C = this;
		C.element = function() {
			return m
		};
		var M;
		C.setContents = function(a) {
			g.empty(s);
			s.appendChild(a);
			clearTimeout(M);
			M = setTimeout(w, 0)
		};
		C.offsetX = function(a) {
			v = a;
			clearTimeout(M);
			w()
		};
		C.borderWidth = function() {
			return G.left
		};
		C.show = function() {
			C.showing = !0;
			m.style.opacity = 1;
			m.style.visibility = "visible"
		};
		C.hide = function() {
			C.showing = !1;
			m.style.opacity = 0;
			m.style.visibility = "hidden"
		};
		m = p(".jwoverlay".replace(".", ""));
		m.id = x;
		z = l("arrow","jwarrow")[1];
		u = z.height;
		b(k("jwarrow"), {
			position : "absolute",
			bottom : B ? j : 0,
			top : B ? 0 : j,
			width : z.width,
			height : u,
			left : "50%"
		});
		t(c, r);
		t(a, r);
		t(c, d);
		t(a, d);
		t(r);
		t(d);
		t(c);
		t(a);
		l("background", "jwback");
		b(k("jwback"), {
			left : G.left,
			right : G.right,
			top : G.top,
			bottom : G.bottom
		});
		s = p("jwcontents", m);
		b(k("jwcontents") + " *", {
			color : e.fontcolor,
			font : e.fontweight + " " + e.fontsize + "px Arial,Helvetica,sans-serif",
			"text-transform" : "upper" == e.fontcase ? "uppercase" : j
		});
		B && g.transform(k("jwarrow"), "rotate(180deg)");
		b(k(), {
			padding : G.top + 1 + "px " + G.right + "px " + (G.bottom + 1) + "px " + G.left + "px"
		});
		C.showing = !1
	};
	b(".jwoverlay", {
		position : "absolute",
		visibility : "hidden",
		opacity : 0
	});
	b(".jwoverlay .jwcontents", {
		position : "relative",
		"z-index" : 1
	});
	b(".jwoverlay .jwborder", {
		position : "absolute",
		"background-size" : "100% 100%"
	}, !0);
	b(".jwoverlay .jwback", {
		position : "absolute",
		"background-size" : "100% 100%"
	});
	e(".jwoverlay", "opacity .25s, visibility .25s, left .01s linear")
})(jwplayer);
(function(f) {
	var g = jwplayer.utils;
	f.player = function(b) {
		function e(a) {
			var b = {
				description : a.description,
				file : a.file,
				image : a.image,
				mediaid : a.mediaid,
				title : a.title
			};
			g.foreach(a, function(a, c) {
				b[a] = c
			});
			b.sources = [];
			b.tracks = [];
			0 < a.sources.length && g.foreach(a.sources, function(a, c) {
				b.sources.push({
					file : c.file,
					type : c.type ? c.type :
					void 0,
					label : c.label,
					"default" : c["default"] ? !0 : !1
				})
			});
			0 < a.tracks.length && g.foreach(a.tracks, function(a, c) {
				b.tracks.push({
					file : c.file,
					kind : c.kind ? c.kind :
					void 0,
					label : c.label,
					"default" : c["default"] ? !0 : !1
				})
			});
			!a.file && 0 < a.sources.length && (b.file = a.sources[0].file);
			return b
		}

		function c(a) {
			return function() {
				return d[a]
			}
		}

		var a = this, d, r, j, h;
		d = new f.model(b);
		a.id = d.id;
		r = new f.view(a, d);
		j = new f.controller(d, r);
		a._model = d;
		jwplayer.utils.css.block();
		a.jwPlay = j.play;
		a.jwPause = j.pause;
		a.jwStop = j.stop;
		a.jwSeek = j.seek;
		a.jwSetVolume = j.setVolume;
		a.jwSetMute = j.setMute;
		a.jwLoad = j.load;
		a.jwPlaylistNext = j.next;
		a.jwPlaylistPrev = j.prev;
		a.jwPlaylistItem = j.item;
		a.jwSetFullscreen = j.setFullscreen;
		a.jwResize = r.resize;
		a.jwSeekDrag = d.seekDrag;
		a.jwGetQualityLevels = j.getQualityLevels;
		a.jwGetCurrentQuality = j.getCurrentQuality;
		a.jwSetCurrentQuality = j.setCurrentQuality;
		a.jwGetCaptionsList = j.getCaptionsList;
		a.jwGetCurrentCaptions = j.getCurrentCaptions;
		a.jwSetCurrentCaptions = j.setCurrentCaptions;
		a.jwSetControls = r.setControls;
		a.jwGetSafeRegion = r.getSafeRegion;
		a.jwForceState = r.forceState;
		a.jwReleaseState = r.releaseState;
		a.jwGetPlaylistIndex = c("item");
		a.jwGetPosition = c("position");
		a.jwGetDuration = c("duration");
		a.jwGetBuffer = c("buffer");
		a.jwGetWidth = c("width");
		a.jwGetHeight = c("height");
		a.jwGetFullscreen = c("fullscreen");
		a.jwGetVolume = c("volume");
		a.jwGetMute = c("mute");
		a.jwGetState = c("state");
		a.jwGetStretching = c("stretching");
		a.jwGetPlaylist = function() {
			for (var a = d.playlist, c = [], b = 0; b < a.length; b++)
				c.push(e(a[b]));
			return c
		};
		a.jwGetControls = c("controls");
		a.jwDetachMedia = j.detachMedia;
		a.jwAttachMedia = j.attachMedia;
		a.jwPlayAd = function(c) {
			var b = jwplayer(a.id).plugins;
			b.vast && b.vast.jwPlayAd(c)
		};
		a.jwLoadInstream = function(c, b) {
			h || ( h = new f.instream(a, d, r, j));
			h.load(c, b)
		};
		a.jwInstreamPlay = function() {
			h && h.jwInstreamPlay()
		};
		a.jwInstreamPause = function() {
			h && h.jwInstreamPause()
		};
		a.jwInstreamDestroy = function() {
			h && h.jwInstreamDestroy();
			h =
			void 0
		};
		a.jwInstreamAddEventListener = function(a, c) {
			h && h.jwInstreamAddEventListener(a, c)
		};
		a.jwInstreamRemoveEventListener = function(a, c) {
			h && h.jwInstreamRemoveEventListener(a, c)
		};
		a.jwPlayerDestroy = function() {
			r && r.destroy()
		};
		a.jwInstreamSetText = function(a) {
			h && h.jwInstreamSetText(a)
		};
		a.jwIsBeforePlay = function() {
			return j.checkBeforePlay()
		};
		a.jwIsBeforeComplete = function() {
			return d.getVideo().checkComplete()
		};
		a.jwAddEventListener = j.addEventListener;
		a.jwRemoveEventListener = j.removeEventListener;
		a.jwDockAddButton = r.addButton;
		a.jwDockRemoveButton = r.removeButton;
		b = new f.setup(d, r, j);
		b.addEventListener(jwplayer.events.JWPLAYER_READY, function(a) {
			j.playerReady(a);
			g.css.unblock()
		});
		b.addEventListener(jwplayer.events.JWPLAYER_ERROR, function(a) {
			g.log("There was a problem setting up the player: ", a);
			g.css.unblock()
		});
		b.start()
	}
})(jwplayer.html5);
(function(f) {
	var g = {
		size : 180,
		backgroundcolor : "#333333",
		fontcolor : "#999999",
		overcolor : "#CCCCCC",
		activecolor : "#CCCCCC",
		titlecolor : "#CCCCCC",
		titleovercolor : "#FFFFFF",
		titleactivecolor : "#FFFFFF",
		fontweight : "normal",
		titleweight : "normal",
		fontsize : 11,
		titlesize : 13
	}, b = jwplayer.events, e = jwplayer.utils, c = e.css, a = e.isMobile(), d = document;
	f.playlistcomponent = function(r, j) {
		function h(a) {
			return "#" + p.id + ( a ? " ." + a : "")
		}

		function q(a, c) {
			var b = d.createElement(a);
			c && (b.className = c);
			return b
		}

		function A(a) {
			return function() {
				D = a;
				n.jwPlaylistItem(a);
				n.jwPlay(!0)
			}
		}

		var n = r, y = n.skin, k = e.extend({}, g, n.skin.getComponentSettings("playlist"), j), p, l, I, t, w = -1, D, x, m = -1, s = 76, v = {
			background :
			void 0,
			divider :
			void 0,
			item :
			void 0,
			itemOver :
			void 0,
			itemImage :
			void 0,
			itemActive :
			void 0
		}, z, u = this;
		u.element = function() {
			return p
		};
		u.redraw = function() {
			x && x.redraw()
		};
		u.show = function() {
			e.show(p)
		};
		u.hide = function() {
			e.hide(p)
		};
		p = q("div", "jwplaylist");
		p.id = n.id + "_jwplayer_playlistcomponent";
		z = "basic" == n._model.playlistlayout;
		l = q("div", "jwlistcontainer");
		p.appendChild(l);
		e.foreach(v, function(a) {
			v[a] = y.getSkinElement("playlist", a)
		});
		z && ( s = 32);
		v.divider && (s += v.divider.height);
		var B = 0, G = 0, C = 0;
		e.clearCss(h());
		c(h(), {
			"background-color" : k.backgroundcolor
		});
		c(h("jwlist"), {
			"background-image" : v.background ? " url(" + v.background.src + ")" : ""
		});
		c(h("jwlist *"), {
			color : k.fontcolor,
			font : k.fontweight + " " + k.fontsize + "px Arial, Helvetica, sans-serif"
		});
		v.itemImage ? ( B = (s - v.itemImage.height) / 2 + "px ", G = v.itemImage.width, C = v.itemImage.height) : ( G = 4 * s / 3, C = s);
		v.divider && c(h("jwplaylistdivider"), {
			"background-image" : "url(" + v.divider.src + ")",
			"background-size" : "100% " + v.divider.height + "px",
			width : "100%",
			height : v.divider.height
		});
		c(h("jwplaylistimg"), {
			height : C,
			width : G,
			margin : B ? B + "0 " + B + B : "0 5px 0 0"
		});
		c(h("jwlist li"), {
			"background-image" : v.item ? "url(" + v.item.src + ")" : "",
			height : s,
			overflow : "hidden",
			"background-size" : "100% " + s + "px",
			cursor : "pointer"
		});
		B = {
			overflow : "hidden"
		};
		"" !== k.activecolor && (B.color = k.activecolor);
		v.itemActive && (B["background-image"] = "url(" + v.itemActive.src + ")");
		c(h("jwlist li.active"), B);
		c(h("jwlist li.active .jwtitle"), {
			color : k.titleactivecolor
		});
		c(h("jwlist li.active .jwdescription"), {
			color : k.activecolor
		});
		B = {
			overflow : "hidden"
		};
		"" !== k.overcolor && (B.color = k.overcolor);
		v.itemOver && (B["background-image"] = "url(" + v.itemOver.src + ")");
		a || (c(h("jwlist li:hover"), B), c(h("jwlist li:hover .jwtitle"), {
			color : k.titleovercolor
		}), c(h("jwlist li:hover .jwdescription"), {
			color : k.overcolor
		}));
		c(h("jwtextwrapper"), {
			height : s,
			position : "relative"
		});
		c(h("jwtitle"), {
			overflow : "hidden",
			display : "inline-block",
			height : z ? s : 20,
			color : k.titlecolor,
			"font-size" : k.titlesize,
			"font-weight" : k.titleweight,
			"margin-top" : z ? "0 10px" : 10,
			"margin-left" : 10,
			"margin-right" : 10,
			"line-height" : z ? s : 20
		});
		c(h("jwdescription"), {
			display : "block",
			"font-size" : k.fontsize,
			"line-height" : 18,
			"margin-left" : 10,
			"margin-right" : 10,
			overflow : "hidden",
			height : 36,
			position : "relative"
		});
		n.jwAddEventListener(b.JWPLAYER_PLAYLIST_LOADED, function() {
			l.innerHTML = "";
			for (var b = n.jwGetPlaylist(), d = [], g = 0; g < b.length; g++)
				b[g]["ova.hidden"] || d.push(b[g]);
			if ( I = d) {
				b = q("ul", "jwlist");
				b.id = p.id + "_ul" + Math.round(1E7 * Math.random());
				t = b;
				for ( b = 0; b < I.length; b++) {
					var h = b, d = I[h], g = q("li", "jwitem"), j =
					void 0;
					g.id = t.id + "_item_" + h;
					0 < h ? ( j = q("div", "jwplaylistdivider"), g.appendChild(j)) : ( h = v.divider ? v.divider.height : 0, g.style.height = s - h + "px", g.style["background-size"] = "100% " + (s - h) + "px");
					h = q("div", "jwplaylistimg jwfill");
					j =
					void 0;
					d["playlist.image"] && v.itemImage ? j = d["playlist.image"] : d.image && v.itemImage ? j = d.image : v.itemImage && ( j = v.itemImage.src);
					j && !z && (c("#" + g.id + " .jwplaylistimg", {
						"background-image" : j
					}), g.appendChild(h));
					h = q("div", "jwtextwrapper");
					j = q("span", "jwtitle");
					j.innerHTML = d && d.title ? d.title : "";
					h.appendChild(j);
					d.description && !z && ( j = q("span", "jwdescription"), j.innerHTML = d.description, h.appendChild(j));
					g.appendChild(h);
					d = g;
					a ? (new e.touch(d)).addEventListener(e.touchEvents.TAP, A(b)) : d.onclick = A(b);
					t.appendChild(d)
				}
				w = n.jwGetPlaylistIndex();
				l.appendChild(t);
				x = new f.playlistslider(p.id + "_slider", n.skin, p, t)
			}
		});
		n.jwAddEventListener(b.JWPLAYER_PLAYLIST_ITEM, function(a) {
			0 <= w && (d.getElementById(t.id + "_item_" + w).className = "jwitem", w = a.index);
			d.getElementById(t.id + "_item_" + a.index).className = "jwitem active";
			a = n.jwGetPlaylistIndex();
			a != D && ( D = -1, x && x.visible() && x.thumbPosition(a / (n.jwGetPlaylist().length - 1)))
		});
		var M = setInterval(function() {
			var a = d.getElementById(p.id), b = e.bounds(a).height;
			a != p ? clearInterval(M) : b != m && ( m = b, u.redraw())
		}, 200);
		return this
	};
	c(".jwplaylist", {
		position : "absolute",
		width : "100%",
		height : "100%"
	});
	e.dragStyle(".jwplaylist", "none");
	c(".jwplaylist .jwplaylistimg", {
		position : "relative",
		width : "100%",
		"float" : "left",
		margin : "0 5px 0 0",
		background : "#000",
		overflow : "hidden"
	});
	c(".jwplaylist .jwlist", {
		position : "absolute",
		width : "100%",
		"list-style" : "none",
		margin : 0,
		padding : 0,
		overflow : "hidden"
	});
	c(".jwplaylist .jwlistcontainer", {
		position : "absolute",
		overflow : "hidden",
		width : "100%",
		height : "100%"
	});
	c(".jwplaylist .jwlist li", {
		width : "100%"
	});
	c(".jwplaylist .jwtextwrapper", {
		overflow : "hidden"
	});
	c(".jwplaylist .jwplaylistdivider", {
		position : "absolute"
	});
	a && e.transitionStyle(".jwplaylist .jwlist", "top .35s")
})(jwplayer.html5);
(function(f) {
	function g() {
		var a = [], b;
		for ( b = 0; b < arguments.length; b++)
			a.push(".jwplaylist ." + arguments[b]);
		return a.join(",")
	}

	var b = jwplayer.utils, e = b.touchEvents, c = b.css, a = document, d = window, r =
	void 0;
	f.playlistslider = function(g, f, q, A) {
		function n(a) {
			return "#" + s.id + ( a ? " ." + a : "")
		}

		function y(b, d, e, g) {
			var f = a.createElement("div");
			b && (f.className = b, d && c(n(b), {
				"background-image" : d.src ? d.src : r,
				"background-repeat" : g ? "repeat-y" : "no-repeat",
				height : g ? r : d.height
			}));
			e && e.appendChild(f);
			return f
		}

		function k(a) {
			return ( a = x.getSkinElement("playlist", a)) ? a : {
				width : 0,
				height : 0,
				src : r
			}
		}

		function p(a) {
			if (M)
				return a = a ? a : d.event, aa(B - (a.detail ? -1 * a.detail : a.wheelDelta / 40) / 10), a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.cancelBubble = !0, a.cancel = !0, a.returnValue = !1
		}

		function l(b) {
			0 == b.button && ( u = !0);
			a.onselectstart = function() {
				return !1
			};
			d.addEventListener("mousemove", t, !1);
			d.addEventListener("mouseup", D, !1)
		}

		function I(a) {
			aa(B - 2 * a.deltaY / m.clientHeight)
		}

		function t(a) {
			if (u || "click" == a.type) {
				var c = b.bounds(v), d = z.clientHeight / 2;
				aa((a.pageY - c.top - d) / (c.height - d - d))
			}
		}

		function w(a) {
			return function(b) {
				0 < b.button || (aa(B + 0.05 * a), G = setTimeout(function() {
					C = setInterval(function() {
						aa(B + 0.05 * a)
					}, 50)
				}, 500))
			}
		}

		function D() {
			u = !1;
			d.removeEventListener("mousemove", t);
			d.removeEventListener("mouseup", D);
			a.onselectstart = r;
			clearTimeout(G);
			clearInterval(C)
		}

		var x = f, m = A, s, v, z, u, B = 0, G, C;
		f = b.isMobile();
		var M = !0, F, P, E, O, U, J, Z, Q, Y;
		this.element = function() {
			return s
		};
		this.visible = function() {
			return M
		};
		var da = this.redraw = function() {
			clearTimeout(Y);
			Y = setTimeout(function() {
				if (m && m.clientHeight) {
					var a = m.parentNode.clientHeight / m.clientHeight;
					0 > a && ( a = 0);
					1 < a ? M = !1 : ( M = !0, c(n("jwthumb"), {
						height : Math.max(v.clientHeight * a, U.height + J.height)
					}));
					c(n(), {
						visibility : M ? "visible" : "hidden"
					});
					m && (m.style.width = M ? m.parentElement.clientWidth - E.width + "px" : "")
				} else
					Y = setTimeout(da, 10)
			}, 0)
		}, aa = this.thumbPosition = function(a) {
			isNaN(a) && ( a = 0);
			B = Math.max(0, Math.min(1, a));
			c(n("jwthumb"), {
				top : Z + (v.clientHeight - z.clientHeight) * B
			});
			A && (A.style.top = Math.min(0, s.clientHeight - A.scrollHeight) * B + "px")
		};
		s = y("jwslider", null, q);
		s.id = g;
		g = new b.touch(m);
		f ? g.addEventListener(e.DRAG, I) : (s.addEventListener("mousedown", l, !1), s.addEventListener("click", t, !1));
		F = k("sliderCapTop");
		P = k("sliderCapBottom");
		E = k("sliderRail");
		g = k("sliderRailCapTop");
		q = k("sliderRailCapBottom");
		O = k("sliderThumb");
		U = k("sliderThumbCapTop");
		J = k("sliderThumbCapBottom");
		Z = F.height;
		Q = P.height;
		c(n(), {
			width : E.width
		});
		c(n("jwrail"), {
			top : Z,
			bottom : Q
		});
		c(n("jwthumb"), {
			top : Z
		});
		F = y("jwslidertop", F, s);
		P = y("jwsliderbottom", P, s);
		v = y("jwrail", null, s);
		z = y("jwthumb", null, s);
		f || (F.addEventListener("mousedown", w(-1), !1), P.addEventListener("mousedown", w(1), !1));
		y("jwrailtop", g, v);
		y("jwrailback", E, v, !0);
		y("jwrailbottom", q, v);
		c(n("jwrailback"), {
			top : g.height,
			bottom : q.height
		});
		y("jwthumbtop", U, z);
		y("jwthumbback", O, z, !0);
		y("jwthumbbottom", J, z);
		c(n("jwthumbback"), {
			top : U.height,
			bottom : J.height
		});
		da();
		m && !f && (m.addEventListener("mousewheel", p, !1), m.addEventListener("DOMMouseScroll", p, !1));
		return this
	};
	c(g("jwslider"), {
		position : "absolute",
		height : "100%",
		visibility : "hidden",
		right : 0,
		top : 0,
		cursor : "pointer",
		"z-index" : 1,
		overflow : "hidden"
	});
	c(g("jwslider") + " *", {
		position : "absolute",
		width : "100%",
		"background-position" : "center",
		"background-size" : "100% 100%",
		overflow : "hidden"
	});
	c(g("jwslidertop", "jwrailtop", "jwthumbtop"), {
		top : 0
	});
	c(g("jwsliderbottom", "jwrailbottom", "jwthumbbottom"), {
		bottom : 0
	})
})(jwplayer.html5);
(function(f) {
	var g = jwplayer.utils, b = g.css, e = document, c = "none";
	f.rightclick = function(a, b) {
		function r(a) {
			var b = e.createElement("div");
			b.className = a.replace(".", "");
			return b
		}

		function j() {
			A || (n.style.display = c)
		}

		var h, q = g.extend({
			aboutlink : "http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d" + f.version + "\x26m\x3dh\x26e\x3do",
			abouttext : "About JW Player " + f.version + "..."
		}, b), A = !1, n, y;
		this.element = function() {
			return n
		};
		this.destroy = function() {
			e.removeEventListener("mousedown", j, !1)
		};
		h = e.getElementById(a.id);
		n = r(".jwclick");
		n.id = a.id + "_menu";
		n.style.display = c;
		h.oncontextmenu = function(a) {
			if (!A) {
				null == a && ( a = window.event);
				var b = null != a.target ? a.target : a.srcElement, d = g.bounds(h), b = g.bounds(b);
				n.style.display = c;
				n.style.left = (a.offsetX ? a.offsetX : a.layerX) + b.left - d.left + "px";
				n.style.top = (a.offsetY ? a.offsetY : a.layerY) + b.top - d.top + "px";
				n.style.display = "block";
				a.preventDefault()
			}
		};
		n.onmouseover = function() {
			A = !0
		};
		n.onmouseout = function() {
			A = !1
		};
		e.addEventListener("mousedown", j, !1);
		y = r(".jwclick_item");
		y.innerHTML = q.abouttext;
		y.onclick = function() {
			window.location.href = q.aboutlink
		};
		n.appendChild(y);
		h.appendChild(n)
	};
	b(".jwclick", {
		"background-color" : "#FFF",
		"-webkit-border-radius" : 5,
		"-moz-border-radius" : 5,
		"border-radius" : 5,
		height : "auto",
		border : "1px solid #bcbcbc",
		"font-family" : '"MS Sans Serif", "Geneva", sans-serif',
		"font-size" : 10,
		width : 320,
		"-webkit-box-shadow" : "5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
		"-moz-box-shadow" : "5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
		"box-shadow" : "5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
		position : "absolute",
		"z-index" : 999
	}, !0);
	b(".jwclick div", {
		padding : "8px 21px",
		margin : "0px",
		"background-color" : "#FFF",
		border : "none",
		"font-family" : '"MS Sans Serif", "Geneva", sans-serif',
		"font-size" : 10,
		color : "inherit"
	}, !0);
	b(".jwclick_item", {
		padding : "8px 21px",
		"text-align" : "left",
		cursor : "pointer"
	}, !0);
	b(".jwclick_item:hover", {
		"background-color" : "#595959",
		color : "#FFF"
	}, !0);
	b(".jwclick_item a", {
		"text-decoration" : c,
		color : "#000"
	}, !0);
	b(".jwclick hr", {
		width : "100%",
		padding : 0,
		margin : 0,
		border : "1px #e9e9e9 solid"
	}, !0)
})(jwplayer.html5);
(function(f) {
	var g = jwplayer, b = g.utils, e = g.events, c = g.playlist, a = 2, d = 4;
	f.setup = function(g, j) {
		function h(a, b, c) {
			D.push({
				name : a,
				method : b,
				depends : c
			})
		}

		function q() {
			for (var a = 0; a < D.length; a++) {
				var b = D[a], c;
				a: {
					if ( c = b.depends) {
						c = c.toString().split(",");
						for (var d = 0; d < c.length; d++)
							if (!l[c[d]]) {
								c = !1;
								break a
							}
					}
					c = !0
				}
				if (c) {
					D.splice(a, 1);
					try {
						b.method(), q()
					} catch(e) {
						k(e.message)
					}
					return
				}
			}
			0 < D.length && !w && setTimeout(q, 500)
		}

		function A() {
			l[a] = !0
		}

		function n(a) {
			k("Error loading skin: " + a)
		}

		function y() {
			l[d] = !0
		}

		function k(a) {
			w = !0;
			t.sendEvent(e.JWPLAYER_ERROR, {
				message : a
			});
			p.setupError(a)
		}

		var p = j, l = {}, I, t = new e.eventdispatcher, w = !1, D = [];
		b.extend(this, t);
		this.start = q;
		h(1, function() {
			g.edition && "invalid" == g.edition() ? k("Error setting up player: Invalid license key") : l[1] = !0
		});
		h(a, function() {
			I = new f.skin;
			I.load(g.config.skin, A, n)
		}, 1);
		h(3, function() {
			switch(b.typeOf(g.config.playlist)) {
				case "string":
					k("Can't load a playlist as a string anymore");
				case "array":
					var a = new c(g.config.playlist);
					g.setPlaylist(a);
					0 == g.playlist[0].sources.length ? k("Error loading playlist: No playable sources found") : l[3] = !0
			}
		}, 1);
		h(d, function() {
			var a = g.playlist[g.item].image;
			if (a) {
				var b = new Image;
				b.addEventListener("load", y, !1);
				b.addEventListener("error", y, !1);
				b.src = a;
				setTimeout(y, 500)
			} else
				l[d] = !0
		}, 3);
		h(5, function() {
			p.setup(I);
			l[5] = !0
		}, d + "," + a);
		h(6, function() {
			l[6] = !0
		}, "5,3");
		h(7, function() {
			t.sendEvent(e.JWPLAYER_READY);
			l[7] = !0
		}, 6)
	}
})(jwplayer.html5);
(function(f) {
	f.skin = function() {
		var g = {}, b = !1;
		this.load = function(e, c, a) {
			new f.skinloader(e, function(a) {
				b = !0;
				g = a;
				"function" == typeof c && c()
			}, function(b) {
				"function" == typeof a && a(b)
			})
		};
		this.getSkinElement = function(e, c) {
			e = e.toLowerCase();
			c = c.toLowerCase();
			if (b)
				try {
					return g[e].elements[c]
				} catch(a) {
					jwplayer.utils.log("No such skin component / element: ", [e, c])
				}
			return null
		};
		this.getComponentSettings = function(e) {
			e = e.toLowerCase();
			return b && g && g[e] ? g[e].settings : null
		};
		this.getComponentLayout = function(e) {
			e = e.toLowerCase();
			if (b) {
				var c = g[e].layout;
				if (c && (c.left || c.right || c.center))
					return g[e].layout
			}
			return null
		}
	}
})(jwplayer.html5);
(function(f) {
	var g = jwplayer.utils, b = g.foreach, e = "Skin formatting error";
	f.skinloader = function(c, a, d) {
		function r(a) {
			y = a;
			g.ajax(g.getAbsolutePath(t), function(a) {
				try {
					g.exists(a.responseXML) && h(a.responseXML)
				} catch(b) {
					p(e)
				}
			}, function(a) {
				p(a)
			})
		}

		function j(a, b) {
			return a ? a.getElementsByTagName(b) : null
		}

		function h(a) {
			var b = j(a,"skin")[0];
			a = j(b, "component");
			var c = b.getAttribute("target"), b = parseFloat(b.getAttribute("pixelratio"));
			0 < b && ( x = b);
			(!c || parseFloat(c) > parseFloat(jwplayer.version)) && p("Incompatible player version");
			if (0 === a.length)
				k(y);
			else
				for ( c = 0; c < a.length; c++) {
					var d = n(a[c].getAttribute("name")), b = {
						settings : {},
						elements : {},
						layout : {}
					}, e = j(j(a[c],"elements")[0], "element");
					y[d] = b;
					for (var f = 0; f < e.length; f++)
						A(e[f], d);
					if (( d = j(a[c],"settings")[0]) && 0 < d.childNodes.length) {
						d = j(d, "setting");
						for ( e = 0; e < d.length; e++) {
							var f = d[e].getAttribute("name"), h = d[e].getAttribute("value");
							/color$/.test(f) && ( h = g.stringToColor(h));
							b.settings[n(f)] = h
						}
					}
					if (( d = j(a[c],"layout")[0]) && 0 < d.childNodes.length) {
						d = j(d, "group");
						for ( e = 0; e < d.length; e++) {
							h = d[e];
							f = {
								elements : []
							};
							b.layout[n(h.getAttribute("position"))] = f;
							for (var r = 0; r < h.attributes.length; r++) {
								var t = h.attributes[r];
								f[t.name] = t.value
							}
							h = j(h, "*");
							for ( r = 0; r < h.length; r++) {
								t = h[r];
								f.elements.push({
									type : t.tagName
								});
								for (var w = 0; w < t.attributes.length; w++) {
									var D = t.attributes[w];
									f.elements[r][n(D.name)] = D.value
								}
								g.exists(f.elements[r].name) || (f.elements[r].name = t.tagName)
							}
						}
					}
					l = !1;
					q()
				}
		}

		function q() {
			clearInterval(I);
			w || ( I = setInterval(function() {
				var a = !0;
				b(y, function(c, d) {
					"properties" != c && b(d.elements, function(b) {
						(y[n(c)] ? y[n(c)].elements[n(b)] : null).ready || ( a = !1)
					})
				});
				a && !1 == l && (clearInterval(I), k(y))
			}, 100))
		}

		function A(a, b) {
			b = n(b);
			var c = new Image, d = n(a.getAttribute("name")), e = a.getAttribute("src");
			if (0 !== e.indexOf("data:image/png;base64,"))
				var f = g.getAbsolutePath(t), e = [f.substr(0, f.lastIndexOf("/")), b, e].join("/");
			y[b].elements[d] = {
				height : 0,
				width : 0,
				src : "",
				ready : !1,
				image : c
			};
			c.onload = function() {
				var a = b, e = y[n(a)] ? y[n(a)].elements[n(d)] : null;
				e ? (e.height = Math.round(c.height / x * D), e.width = Math.round(c.width / x * D), e.src = c.src, e.ready = !0, q()) : g.log("Loaded an image for a missing element: " + a + "." + d)
			};
			c.onerror = function() {
				w = !0;
				q();
				p("Skin image not found: " + this.src)
			};
			c.src = e
		}

		function n(a) {
			return a ? a.toLowerCase() : ""
		}

		var y = {}, k = a, p = d, l = !0, I, t = c, w = !1, D = (jwplayer.utils.isMobile(), 1), x = 1;
		"string" != typeof t || "" === t ? h(f.defaultskin().xml) : "xml" != g.extension(t) ? p("Skin not a valid file type") : new f.skinloader("", r, p)
	}
})(jwplayer.html5);
(function(f) {
	var g = jwplayer.utils, b = jwplayer.events, e = g.css;
	f.thumbs = function(c) {
		function a(a) {
			if ("array" == !g.typeOf(a))
				return d("Invalid data");
			h = a;
			e("#" + A, {
				display : "block"
			})
		}

		function d(a) {
			g.log("Thumbnails could not be loaded: " + a)
		}

		function f(a) {
			a = a.target;
			e("#" + A, {
				"background-image" : a.src,
				"background-position" : "0 0",
				width : a.width,
				height : a.height
			})
		}

		var j, h, q, A = c;
		c = new b.eventdispatcher;
		g.extend(this, c);
		this.load = function(b) {
			e("#" + A, {
				display : "none"
			});
			b && ( q = b.split("?")[0].split("/").slice(0, -1).join("/"), (new jwplayer.parsers.srt(a, d, !0)).load(b))
		};
		this.element = function() {
			return j
		};
		this.updateTimeline = function(a) {
			var b = 0;
			if (h) {
				for (; b < h.length && a > h[b].end; )
					b++;
				b == h.length && b--;
				if (h[b].text)
					if ( a = h[b].text, 0 > a.indexOf("://") && ( a = q ? q + "/" + a : a), 0 < a.indexOf("#xywh"))
						try {
							var c = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(a), g = c[1];
							e("#" + A, {
								"background-image" : g,
								"background-position" : -1 * c[2] + "px " + -1 * c[3] + "px",
								width : c[4],
								height : c[5]
							})
						} catch(j) {
							d("Could not parse thumbnail")
						}
					else
						g = new Image, g.addEventListener("load", f, !1), g.src = a
			}
		};
		j = document.createElement("div");
		j.id = A
	}
})(jwplayer.html5);
(function(f) {
	var g = f.utils, b = f.events, e = b.state, c = !0, a = !1;
	f.html5.video = function(d) {
		function f(a, b) {
			O && E.sendEvent(a, b)
		}

		function j() {
		}

		function h() {
			O && (C == e.PLAYING && !G) && ( v = Number(m.currentTime.toFixed(1)), f(b.JWPLAYER_MEDIA_TIME, {
				position : v,
				duration : s
			}))
		}

		function q(d) {
			O && (z || ( z = c, A()), "loadedmetadata" == d.type && (m.muted && (m.muted = a, m.muted = c), f(b.JWPLAYER_MEDIA_META, {
				duration : m.duration,
				height : m.videoHeight,
				width : m.videoWidth
			})))
		}

		function A() {
			u || ( u = c, f(b.JWPLAYER_MEDIA_BUFFER_FULL))
		}

		function n(a) {
			O && !G && (m.paused ? m.currentTime == m.duration && 3 < m.duration || da() : (!g.isFF() || !("play" == a.type && C == e.BUFFERING)) && l(e.PLAYING))
		}

		function y() {
			O && (G || l(e.BUFFERING))
		}

		function k(a) {
			var b;
			if ("array" == g.typeOf(a) && 0 < a.length) {
				b = [];
				for (var c = 0; c < a.length; c++) {
					var d = a[c], e = {};
					e.label = d.label && d.label ? d.label ? d.label : 0 : c;
					b[c] = e
				}
			}
			return b
		}

		function p() {
			u = z = a;
			x = U[J];
			l(e.BUFFERING);
			m.src = x.file;
			m.load();
			F = setInterval(I, 100);
			g.isMobile() && A()
		}

		function l(a) {
			if (!(a == e.PAUSED && C == e.IDLE) && !G && C != a) {
				var c = C;
				C = a;
				f(b.JWPLAYER_PLAYER_STATE, {
					oldstate : c,
					newstate : a
				})
			}
		}

		function I() {
			if (O) {
				var a;
				a = 0 == m.buffered.length || 0 == m.duration ? 0 : m.buffered.end(m.buffered.length - 1) / m.duration;
				a != P && ( P = a, f(b.JWPLAYER_MEDIA_BUFFER, {
					bufferPercent : Math.round(100 * P)
				}));
				1 <= a && clearInterval(F)
			}
		}

		var t = g.isIE(), w = {
			abort : j,
			canplay : q,
			canplaythrough : j,
			durationchange : function() {
				if (O) {
					var a = Number(m.duration.toFixed(1));
					s != a && ( s = a);
					Z && (0 < B && a > B) && aa(B);
					h()
				}
			},
			emptied : j,
			ended : function() {
				O && C != e.IDLE && ( J = -1, Y = c, f(b.JWPLAYER_MEDIA_BEFORECOMPLETE), O && (l(e.IDLE), Y = a, f(b.JWPLAYER_MEDIA_COMPLETE)))
			},
			error : function() {
				O && (g.log("Error playing media: %o", m.error), E.sendEvent(b.JWPLAYER_MEDIA_ERROR, {
					message : "Error loading media: File could not be played"
				}), l(e.IDLE))
			},
			loadeddata : j,
			loadedmetadata : q,
			loadstart : j,
			pause : n,
			play : n,
			playing : n,
			progress : function() {
				z && (0 < B && !Z) && ( t ? setTimeout(function() {
					aa(B)
				}, 200) : aa(B))
			},
			ratechange : j,
			readystatechange : j,
			seeked : function() {
				!G && C != e.PAUSED && l(e.PLAYING)
			},
			seeking : t ? y : j,
			stalled : j,
			suspend : j,
			timeupdate : h,
			volumechange : function() {
				f(b.JWPLAYER_MEDIA_VOLUME, {
					volume : Math.round(100 * m.volume)
				});
				f(b.JWPLAYER_MEDIA_MUTE, {
					mute : m.muted
				})
			},
			waiting : y
		}, D, x, m, s, v, z, u, B, G = a, C = e.IDLE, M, F = -1, P = -1, E = new b.eventdispatcher, O = a, U, J = -1, Z = g.isAndroid(), Q = this, Y = a;
		g.extend(Q, E);
		Q.load = function(a) {
			if (O) {
				D = a;
				B = 0;
				s = a.duration ? a.duration : -1;
				v = 0;
				U = D.sources;
				0 > J && ( J = 0);
				for ( a = 0; a < U.length; a++)
					if (U[a]["default"]) {
						J = a;
						break
					}
				var c = g.getCookies().qualityLabel;
				if (c)
					for ( a = 0; a < U.length; a++)
						if (U[a].label == c) {
							J = a;
							break
						}
				( a = k(U)) && E.sendEvent(b.JWPLAYER_MEDIA_LEVELS, {
					levels : a,
					currentQuality : J
				});
				p()
			}
		};
		Q.stop = function() {
			O && (m.removeAttribute("src"), t || m.load(), J = -1, clearInterval(F), l(e.IDLE))
		};
		Q.play = function() {
			O && !G && m.play()
		};
		var da = Q.pause = function() {
			O && (m.pause(), l(e.PAUSED))
		};
		Q.seekDrag = function(a) {
			O && (( G = a) ? m.pause() : m.play())
		};
		var aa = Q.seek = function(a) {
			O && (!G && 0 == B && f(b.JWPLAYER_MEDIA_SEEK, {
				position : v,
				offset : a
			}), z ? ( B = 0, m.currentTime = a) : B = a)
		}, ga = Q.volume = function(a) {
			g.exists(a) && (m.volume = Math.min(Math.max(0, a / 100), 1), M = 100 * m.volume)
		};
		Q.mute = function(b) {
			g.exists(b) || ( b = !m.muted);
			b ? ( M = 100 * m.volume, m.muted = c) : (ga(M), m.muted = a)
		};
		this.checkComplete = function() {
			return Y
		};
		Q.detachMedia = function() {
			O = a;
			return m
		};
		Q.attachMedia = function(d) {
			O = c;
			d || ( z = a);
			Y && (l(e.IDLE), f(b.JWPLAYER_MEDIA_COMPLETE), Y = a)
		};
		Q.getTag = function() {
			return m
		};
		Q.audioMode = function() {
			if (!U)
				return a;
			var b = U[0].type;
			return "aac" == b || "mp3" == b || "vorbis" == b
		};
		Q.setCurrentQuality = function(a) {
			J != a && ( a = parseInt(a), 0 <= a && (U && U.length > a) && ( J = a, g.saveCookie("qualityLabel", U[a].label), f(b.JWPLAYER_MEDIA_LEVEL_CHANGED, {
				currentQuality : a,
				levels : k(U)
			}), a = m.currentTime, p(), Q.seek(a)))
		};
		Q.getCurrentQuality = function() {
			return J
		};
		Q.getQualityLevels = function() {
			return k(U)
		};
		m = d;
		g.foreach(w, function(b, c) {
			m.addEventListener(b, c, a)
		});
		m.controls = c;
		m.controls = a;
		m.setAttribute("x-webkit-airplay", "allow");
		O = c
	}
})(jwplayer);
(function(f) {
	var g = jwplayer.utils, b = jwplayer.events, e = b.state, c = g.css, a = g.isMobile(), d = g.isIPad(), r = g.isIPod(), j = g.isAndroid(), h = g.isIOS(), q = document, A = "aspectMode", n = "jwmain", y = "jwvideo", k = "jwplaylistcontainer", p = !0, l = !1, I = "hidden", t = "none", w = "block";
	f.view = function(D, x) {
		function m(a) {
			a && (a.element().addEventListener("mousemove", u, l), a.element().addEventListener("mouseout", B, l))
		}

		function s(a, b) {
			var c = q.createElement(a);
			b && (c.className = b);
			return c
		}

		function v() {
			clearTimeout(ma);
			ma = setTimeout(Q, Ia)
		}

		function z() {
			clearTimeout(ma);
			if (X.jwGetState() == e.PAUSED || X.jwGetState() == e.PLAYING)
				Y(), ua || ( ma = setTimeout(Q, Ia))
		}

		function u() {
			clearTimeout(ma);
			ua = p
		}

		function B() {
			ua = l
		}

		function G(a) {
			fa.sendEvent(a.type, a)
		}

		function C(a, d, e) {
			g.exists(e) || ( e = p);
			g.exists(a) && g.exists(d) && (K.width = a, K.height = d);
			T.style.width = isNaN(a) ? a : a + "px";
			-1 == T.className.indexOf(A) && (T.style.height = isNaN(d) ? d : d + "px");
			V && V.redraw();
			R && R.redraw(p);
			H && (H.offset(R && 0 <= H.position().indexOf("bottom") ? R.height() + R.margin() : 0), setTimeout(function() {
				N && N.offset("top-left" == H.position() ? H.element().clientWidth + H.margin() : 0)
			}, 500));
			a = K.playlistsize;
			var f = K.playlistposition;
			M(d);
			if (Ea && a && ("right" == f || "bottom" == f)) {
				Ea.redraw();
				d = {
					display : w
				};
				var h = {};
				d[f] = 0;
				h[f] = a;
				"right" == f ? d.width = a : d.height = a;
				c(qa(k), d);
				c(qa(n), h)
			}
			F();
			e && fa.sendEvent(b.JWPLAYER_RESIZE)
		}

		function M(a) {
			var b = g.bounds(T);
			W = 0 < a.toString().indexOf("%") ? l : 0 == b.height ? l : "bottom" == K.playlistposition ? b.height <= 40 + K.playlistsize : 40 >= b.height;
			R && ( W ? (R.audioMode(p), Y(), V.hidePreview(p), V && V.hide(), da(l)) : (R.audioMode(l), ab(X.jwGetState())));
			H && W && H && H.hide(W);
			T.style.backgroundColor = W ? "transparent" : "#000"
		}

		function F() {
			ba && -1 == T.className.indexOf(A) && g.stretch(K.stretching, ba, ta.clientWidth, ta.clientHeight, ba.videoWidth, ba.videoHeight)
		}

		function P(a) {
			if (K.fullscreen)
				switch(a.keyCode) {
					case 27:
						Na(l)
				}
		}

		function E(a) {
			h || ( a ? (T.className += " jwfullscreen", q.getElementsByTagName("body")[0].style["overflow-y"] = I) : (T.className = T.className.replace(/\s+jwfullscreen/, ""), q.getElementsByTagName("body")[0].style["overflow-y"] = ""))
		}

		function O() {
			var a;
			a: {
				a = [q.mozFullScreenElement, q.webkitCurrentFullScreenElement, ba.webkitDisplayingFullscreen];
				for (var b = 0; b < a.length; b++)
					if (a[b] && (!a[b].id || a[b].id == X.id)) {
						a = p;
						break a
					}
				a = l
			}
			K.fullscreen != a && Na(a)
		}

		function U() {
			R && !W && R.hide()
		}

		function J() {
			N && (!W && K.controls) && N.show()
		}

		function Z() {
			V && K.controls && !W && (!r || X.jwGetState() == e.IDLE) && V.show();
			if (!a || !K.fullscreen)
				ba.controls = l
		}

		function Q() {
			clearTimeout(ma);
			ma = 0;
			L = l;
			var a = X.jwGetState();
			(!x.controls || a != e.PAUSED) && U();
			x.controls || N && !wa && N.hide();
			a != e.IDLE && a != e.PAUSED && (N && !wa && N.hide(), H && H.hide(W))
		}

		function Y() {
			L = p;
			if ((K.controls || W) && !(r && La == e.PAUSED))
				(!r || W) && R && R.show(), J();
			oa.hide && H && !W && H.show()
		}

		function da(a) {
			( a = a && !W) || j ? c(qa(y), {
				visibility : "visible",
				opacity : 1
			}) : c(qa(y), {
				visibility : I,
				opacity : 0
			})
		}

		function aa() {
			wa = p;
			Na(l);
			K.controls && J()
		}

		function ga() {
		}

		function ka(a) {
			wa = l;
			clearTimeout(Qa);
			Qa = setTimeout(function() {
				ab(a.newstate)
			}, 100)
		}

		function la() {
			U()
		}

		function ab(b) {
			La = b;
			switch(b) {
				case e.PLAYING:
					K.getVideo().audioMode() ? (da(l), V.hidePreview(W), V.setHiding(p), R && R.hideFullscreen(p)) : (da(p), F(), V.hidePreview(p), R && R.hideFullscreen(l));
					Q();
					break;
				case e.IDLE:
					da(l);
					W || (V.hidePreview(l), Z(), J(), H && !W && H.show(), R && R.hideFullscreen(l));
					break;
				case e.BUFFERING:
					Z();
					Q();
					a && da(p);
					break;
				case e.PAUSED:
					Z(), Y()
			}
		}

		function qa(a) {
			return "#" + X.id + ( a ? " ." + a : "")
		}

		function Oa(a, b) {
			c(a, {
				display : b ? w : t
			})
		}

		var X = D, K = x, T, va, ra, Va, Ya, ma = 0, Ia = a ? 4E3 : 2E3, ba, ta, Da, Ha, Ca, Ka = l, R, V, N, H, oa = g.extend({}, K.componentConfig("logo")), za, Ea, W, Ba = l, L = l, wa, S, ea, ua = l, La, fa = new b.eventdispatcher;
		g.extend(this, fa);
		this.getCurrentCaptions = function() {
			return za.getCurrentCaptions()
		};
		this.setCurrentCaptions = function(a) {
			za.setCurrentCaptions(a)
		};
		this.getCaptionsList = function() {
			return za.getCaptionsList()
		};
		this.setup = function(d) {
			if (!Ba) {
				X.skin = d;
				va = s("span", n);
				ta = s("span", y);
				ba = K.getVideo().getTag();
				ta.appendChild(ba);
				ra = s("span", "jwcontrols");
				Da = s("span", "jwinstream");
				Ya = s("span", k);
				Va = s("span", "jwaspect");
				d = K.height;
				var h = K.componentConfig("controlbar"), j = K.componentConfig("display");
				M(d);
				za = new f.captions(X, K.captions);
				za.addEventListener(b.JWPLAYER_CAPTIONS_LIST, G);
				za.addEventListener(b.JWPLAYER_CAPTIONS_CHANGED, G);
				ra.appendChild(za.element());
				V = new f.display(X, j);
				V.addEventListener(b.JWPLAYER_DISPLAY_CLICK, function(b) {
					G(b);
					a ? L ? Q() : Y() : ka(X.jwGetState());
					L && (clearTimeout(ma), ma = setTimeout(Q, Ia))
				});
				W && V.hidePreview(p);
				ra.appendChild(V.element());
				H = new f.logo(X, oa);
				ra.appendChild(H.element());
				N = new f.dock(X, K.componentConfig("dock"));
				ra.appendChild(N.element());
				X.edition && !a ? S = new f.rightclick(X, {
					abouttext : K.abouttext,
					aboutlink : K.aboutlink
				}) : a || ( S = new f.rightclick(X, {}));
				K.playlistsize && (K.playlistposition && K.playlistposition != t) && ( Ea = new f.playlistcomponent(X, {}), Ya.appendChild(Ea.element()));
				R = new f.controlbar(X, h);
				R.addEventListener(b.JWPLAYER_USER_ACTION, v);
				ra.appendChild(R.element());
				r && U();
				setTimeout(function() {
					C(K.width, K.height, l)
				}, 0);
				va.appendChild(ta);
				va.appendChild(ra);
				va.appendChild(Da);
				T.appendChild(va);
				T.appendChild(Va);
				T.appendChild(Ya);
				q.addEventListener("webkitfullscreenchange", O, l);
				ba.addEventListener("webkitbeginfullscreen", O, l);
				ba.addEventListener("webkitendfullscreen", O, l);
				q.addEventListener("mozfullscreenchange", O, l);
				q.addEventListener("keydown", P, l);
				X.jwAddEventListener(b.JWPLAYER_PLAYER_READY, ga);
				X.jwAddEventListener(b.JWPLAYER_PLAYER_STATE, ka);
				X.jwAddEventListener(b.JWPLAYER_MEDIA_ERROR, la);
				X.jwAddEventListener(b.JWPLAYER_PLAYLIST_COMPLETE, aa);
				ka({
					newstate : e.IDLE
				});
				a || (ra.addEventListener("mouseout", function() {
					clearTimeout(ma);
					ma = setTimeout(Q, 10)
				}, l), ra.addEventListener("mousemove", z, l), g.isIE() && (ta.addEventListener("mousemove", z, l), ta.addEventListener("click", V.clickHandler)));
				m(R);
				m(N);
				m(H);
				c("#" + T.id + "." + A + " .jwaspect", {
					"margin-top" : K.aspectratio,
					display : w
				});
				d = g.exists(K.aspectratio) ? parseFloat(K.aspectratio) : 100;
				h = K.playlistsize;
				c("#" + T.id + ".playlist-right .jwaspect", {
					"margin-bottom" : -1 * h * (d / 100) + "px"
				});
				c("#" + T.id + ".playlist-right ." + k, {
					width : h + "px",
					right : 0,
					top : 0,
					height : "100%"
				});
				c("#" + T.id + ".playlist-bottom .jwaspect", {
					"padding-bottom" : h + "px"
				});
				c("#" + T.id + ".playlist-bottom ." + k, {
					width : "100%",
					height : h + "px",
					bottom : 0
				});
				c("#" + T.id + ".playlist-right ." + n, {
					right : h + "px"
				});
				c("#" + T.id + ".playlist-bottom ." + n, {
					bottom : h + "px"
				})
			}
		};
		var Na = this.fullscreen = function(c) {
			g.exists(c) || ( c = !K.fullscreen);
			c ? a ? (ba.webkitEnterFullScreen(), K.setFullscreen(p)) : K.fullscreen || (E(p), T.requestFullScreen ? T.requestFullScreen() : T.mozRequestFullScreen ? T.mozRequestFullScreen() : T.webkitRequestFullScreen && T.webkitRequestFullScreen(), K.setFullscreen(p)) : ( a ? (ba.webkitExitFullScreen(), K.setFullscreen(l), d && (ba.controls = p, ba.controls = l)) : K.fullscreen && (E(l), K.setFullscreen(l), q.cancelFullScreen ? q.cancelFullScreen() : q.mozCancelFullScreen ? q.mozCancelFullScreen() : q.webkitCancelFullScreen && q.webkitCancelFullScreen()), d && X.jwGetState() == e.PAUSED && setTimeout(Z, 500));
			R && R.redraw();
			V && V.redraw();
			N && N.redraw();
			F();
			K.fullscreen ? ea = setInterval(F, 200) : clearInterval(ea);
			setTimeout(function() {
				var a = g.bounds(va);
				K.width = a.width;
				K.height = a.height;
				fa.sendEvent(b.JWPLAYER_RESIZE)
			}, 0)
		};
		this.resize = C;
		this.resizeMedia = F;
		var na = this.completeSetup = function() {
			c(qa(), {
				opacity : 1
			})
		}, Qa;
		this.setupInstream = function(a, b, c) {
			Oa(qa("jwinstream"), p);
			Oa(qa("jwcontrols"), l);
			Da.appendChild(a);
			Ha = b;
			Ca = c;
			ka({
				newstate : e.PLAYING
			});
			Ka = p
		};
		this.destroyInstream = function() {
			Oa(qa("jwinstream"), l);
			Oa(qa("jwcontrols"), p);
			Da.innerHTML = "";
			Ka = l
		};
		this.setupError = function(a) {
			Ba = p;
			jwplayer.embed.errorScreen(T, a);
			na()
		};
		this.addButton = function(a, b, c, d) {
			N && N.addButton(a, b, c, d)
		};
		this.removeButton = function(a) {
			N && N.removeButton(a)
		};
		this.setControls = function(a) {
			var c = K.controls, d = a ? p : l;
			K.controls = d;
			d != c && ( d ? ka({
				newstate : X.jwGetState()
			}) : (Q(), V && V.hide()), Ka && ( a ? (Ha.show(), Ca.show()) : (Ha.hide(), Ca.hide())), fa.sendEvent(b.JWPLAYER_CONTROLS, {
				controls : d
			}))
		};
		this.forceState = function(a) {
			V.forceState(a)
		};
		this.releaseState = function() {
			V.releaseState(X.jwGetState())
		};
		this.getSafeRegion = function() {
			var a = K.controls, b = g.bounds(va), c = b.top, d = g.bounds( R ? R.element() : null), e = 0 < N.numButtons(), f = g.bounds(N.element()), h = g.bounds(H.element()), j = 0 == H.position().indexOf("top"), e = Math.max( e ? f.top + f.height - c : 0, j ? h.top + h.height - c : 0), f = b.width, b = d.height ? ( j ? d.top : h.top) - e - c : b.height - e;
			return {
				x : 0,
				y : a ? e : 0,
				width : a ? f : 0,
				height : a ? b : 0
			}
		};
		this.destroy = function() {
			q.removeEventListener("webkitfullscreenchange", O, l);
			q.removeEventListener("mozfullscreenchange", O, l);
			ba.removeEventListener("webkitbeginfullscreen", O, l);
			ba.removeEventListener("webkitendfullscreen", O, l);
			q.removeEventListener("keydown", P, l);
			S && S.destroy()
		};
		T = s("div", "jwplayer playlist-" + K.playlistposition);
		T.id = X.id;
		K.aspectratio && (c(".jwplayer", {
			display : "inline-block"
		}), T.className = T.className.replace("jwplayer", "jwplayer " + A));
		C(K.width, K.height);
		var Ma = document.getElementById(X.id);
		Ma.parentNode.replaceChild(T, Ma)
	};
	c(".jwplayer", {
		position : "relative",
		display : "block",
		opacity : 0,
		"min-height" : 0,
		"-webkit-transition" : "opacity .25s ease",
		"-moz-transition" : "opacity .25s ease",
		"-o-transition" : "opacity .25s ease"
	});
	c("." + n, {
		position : "absolute",
		left : 0,
		right : 0,
		top : 0,
		bottom : 0,
		"-webkit-transition" : "opacity .25s ease",
		"-moz-transition" : "opacity .25s ease",
		"-o-transition" : "opacity .25s ease"
	});
	c("." + y + " ,.jwcontrols", {
		position : "absolute",
		height : "100%",
		width : "100%",
		"-webkit-transition" : "opacity .25s ease",
		"-moz-transition" : "opacity .25s ease",
		"-o-transition" : "opacity .25s ease"
	});
	c("." + y, {
		overflow : I,
		visibility : I,
		opacity : 0,
		cursor : "pointer"
	});
	c("." + y + " video", {
		background : "transparent",
		width : "100%",
		height : "100%"
	});
	c("." + k, {
		position : "absolute",
		height : "100%",
		width : "100%",
		display : t
	});
	c(".jwinstream", {
		position : "absolute",
		top : 0,
		left : 0,
		bottom : 0,
		right : 0,
		display : "none"
	});
	c(".jwaspect", {
		display : "none"
	});
	c(".jwplayer." + A, {
		height : "auto"
	});
	c(".jwplayer.jwfullscreen", {
		width : "100%",
		height : "100%",
		left : 0,
		right : 0,
		top : 0,
		bottom : 0,
		"z-index" : 1E3,
		position : "fixed"
	}, p);
	c(".jwplayer.jwfullscreen ." + n, {
		left : 0,
		right : 0,
		top : 0,
		bottom : 0
	}, p);
	c(".jwplayer.jwfullscreen ." + k, {
		display : t
	}, p);
	c(".jwplayer .jwuniform", {
		"background-size" : "contain !important"
	});
	c(".jwplayer .jwfill", {
		"background-size" : "cover !important",
		"background-position" : "center"
	});
	c(".jwplayer .jwexactfit", {
		"background-size" : "100% 100% !important"
	})
})(jwplayer.html5);
(function(f) {
	var g = jwplayer.utils.extend, b = f.logo, e;
	e = function(c, a) {
		"free" == c.edition() ? a = null : (b.defaults.file = "", b.defaults.prefix = "");
		g(this, new b(c, a))
	};
	e.defaults = {
		prefix : "",
		file : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAATCAYAAACa0IPnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUVGQjQ0N0ZEOThDMTFFMUFDMUZCMzY5RkYyQkY5NDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUVGQjQ0ODBEOThDMTFFMUFDMUZCMzY5RkYyQkY5NDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RUZCNDQ3REQ5OEMxMUUxQUMxRkIzNjlGRjJCRjk0NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RUZCNDQ3RUQ5OEMxMUUxQUMxRkIzNjlGRjJCRjk0NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr5HQqEAAArQSURBVHja3JkJUNT3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%3D%3D"
	};
	g(e.defaults, b.defaults);
	f.logo = e
})(jwplayer.html5);
(function(f) {
	var g = f.model;
	f.model = function(b, e) {
		var c = new jwplayer.utils.key(b.key), a = new g(b, e), d = a.componentConfig;
		a.edition = function() {
			return c.edition()
		};
		a.componentConfig = function(b) {
			return "logo" == b ? a.logo : d(b)
		};
		return a
	}
})(jwplayer.html5);
(function(f) {
	f.player.prototype.edition = function() {
		return this._model.edition()
	}
})(jwplayer.html5);
(function(f) {
	var g = jwplayer.utils.extend, b = f.rightclick;
	f.rightclick = function(e, c) {
		if ("free" == e.edition())
			c.aboutlink = "http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d" + f.version + "\x26m\x3dh\x26e\x3df",
			delete c.abouttext;
		else {
			if (!c.aboutlink) {
				var a = "http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d" + f.version + "\x26m\x3dh\x26e\x3d", d = e.edition();
				c.aboutlink = a + ("pro" == d ? "p" : "premium" == d ? "r" : "ads" == d ? "a" : "f")
			}
			c.abouttext ? c.abouttext = "About " + c.abouttext + " ..." : ( a = e.edition(), a = a.charAt(0).toUpperCase() + a.substr(1), c.abouttext = "About JW Player " + f.version + " (" + a + " edition)")
		}
		g(this, new b(e, c))
	}
})(jwplayer.html5);
(function(f) {
	var g = f.view;
	f.view = function(b, e) {
		var c = new g(b, e);
		"invalid" == e.edition() && c.setupError("Error setting up player: Invalid license key");
		return c
	}
})(jwplayer.html5); 
