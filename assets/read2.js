! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function (e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 269)
}({
    12: function (t, e) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function () {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    },
    14: function (t, e, n) {
        var r = n(15).Symbol;
        t.exports = r
    },
    15: function (t, e, n) {
        var r = n(16),
            o = "object" == typeof self && self && self.Object === Object && self,
            c = r || o || Function("return this")();
        t.exports = c
    },
    16: function (t, e, n) {
        (function (e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n
        }).call(this, n(7))
    },
    17: function (t, e) {
        var n = Array.isArray;
        t.exports = n
    },
    18: function (t, e) {
        var n = 9007199254740991;
        t.exports = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
        }
    },
    19: function (t, e, n) {
        var r = n(53),
            o = n(18);
        t.exports = function (t) {
            return null != t && o(t.length) && !r(t)
        }
    },
    269: function (t, e, n) {
        t.exports = n(270)
    },
    270: function (t, e, n) {
        "use strict";
        n.r(e),
            function (t) {
                n(271);
                var e = n(29);
                $(document).ready(function () {
                    getnowplace("document"), new Vue({
                        el: "#readpage",
                        mounted: function () {
                            var e = this;
                            t.browser && (setTimeout(function () {
                                e.moveline()
                            }, 1e3), window.addEventListener("scroll", this.moveline))
                        },
                        destroyed: function () {
                            window.removeEventListener("scroll", this.moveline)
                        },
                        methods: {
                            moveline: function () {
                                var t = document.documentElement.scrollTop + document.body.scrollTop,
                                    n = document.querySelector(".leftline").offsetTop,
                                    r = .8 * window.innerHeight,
                                    o = window.innerHeight;
                                t > n - r ? $(".leftline").addClass("active") : $(".leftline").removeClass("active");
                                var c = window.pageYOffset;
                                e(document.querySelectorAll(".downlist"), function (t) {
                                    var e = t.offsetTop;
                                    c > e - o ? t.classList.add("startopen") : t.classList.remove("startopen")
                                })
                            }
                        }
                    })
                })
            }.call(this, n(5))
    },
    271: function (t, e, n) {},
    29: function (t, e, n) {
        var r = n(30),
            o = n(31),
            c = n(56),
            u = n(17);
        t.exports = function (t, e) {
            return (u(t) ? r : o)(t, c(e))
        }
    },
    30: function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
            return t
        }
    },
    31: function (t, e, n) {
        var r = n(32),
            o = n(55)(r);
        t.exports = o
    },
    32: function (t, e, n) {
        var r = n(33),
            o = n(35);
        t.exports = function (t, e) {
            return t && r(t, e, o)
        }
    },
    33: function (t, e, n) {
        var r = n(34)();
        t.exports = r
    },
    34: function (t, e) {
        t.exports = function (t) {
            return function (e, n, r) {
                for (var o = -1, c = Object(e), u = r(e), i = u.length; i--;) {
                    var f = u[t ? i : ++o];
                    if (!1 === n(c[f], f, c)) break
                }
                return e
            }
        }
    },
    35: function (t, e, n) {
        var r = n(36),
            o = n(49),
            c = n(19);
        t.exports = function (t) {
            return c(t) ? r(t) : o(t)
        }
    },
    36: function (t, e, n) {
        var r = n(37),
            o = n(38),
            c = n(17),
            u = n(42),
            i = n(44),
            f = n(45),
            a = Object.prototype.hasOwnProperty;
        t.exports = function (t, e) {
            var n = c(t),
                l = !n && o(t),
                s = !n && !l && u(t),
                p = !n && !l && !s && f(t),
                b = n || l || s || p,
                v = b ? r(t.length, String) : [],
                y = v.length;
            for (var d in t) !e && !a.call(t, d) || b && ("length" == d || s && ("offset" == d || "parent" == d) || p && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || i(d, y)) || v.push(d);
            return v
        }
    },
    37: function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
            return r
        }
    },
    38: function (t, e, n) {
        var r = n(39),
            o = n(9),
            c = Object.prototype,
            u = c.hasOwnProperty,
            i = c.propertyIsEnumerable,
            f = r(function () {
                return arguments
            }()) ? r : function (t) {
                return o(t) && u.call(t, "callee") && !i.call(t, "callee")
            };
        t.exports = f
    },
    39: function (t, e, n) {
        var r = n(8),
            o = n(9),
            c = "[object Arguments]";
        t.exports = function (t) {
            return o(t) && r(t) == c
        }
    },
    40: function (t, e, n) {
        var r = n(14),
            o = Object.prototype,
            c = o.hasOwnProperty,
            u = o.toString,
            i = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            var e = c.call(t, i),
                n = t[i];
            try {
                t[i] = void 0;
                var r = !0
            } catch (t) {}
            var o = u.call(t);
            return r && (e ? t[i] = n : delete t[i]), o
        }
    },
    41: function (t, e) {
        var n = Object.prototype.toString;
        t.exports = function (t) {
            return n.call(t)
        }
    },
    42: function (t, e, n) {
        (function (t) {
            var r = n(15),
                o = n(43),
                c = e && !e.nodeType && e,
                u = c && "object" == typeof t && t && !t.nodeType && t,
                i = u && u.exports === c ? r.Buffer : void 0,
                f = (i ? i.isBuffer : void 0) || o;
            t.exports = f
        }).call(this, n(12)(t))
    },
    43: function (t, e) {
        t.exports = function () {
            return !1
        }
    },
    44: function (t, e) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, e) {
            var o = typeof t;
            return !!(e = null == e ? n : e) && ("number" == o || "symbol" != o && r.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
    },
    45: function (t, e, n) {
        var r = n(46),
            o = n(47),
            c = n(48),
            u = c && c.isTypedArray,
            i = u ? o(u) : r;
        t.exports = i
    },
    46: function (t, e, n) {
        var r = n(8),
            o = n(18),
            c = n(9),
            u = {};
        u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1, t.exports = function (t) {
            return c(t) && o(t.length) && !!u[r(t)]
        }
    },
    47: function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return t(e)
            }
        }
    },
    48: function (t, e, n) {
        (function (t) {
            var r = n(16),
                o = e && !e.nodeType && e,
                c = o && "object" == typeof t && t && !t.nodeType && t,
                u = c && c.exports === o && r.process,
                i = function () {
                    try {
                        var t = c && c.require && c.require("util").types;
                        return t || u && u.binding && u.binding("util")
                    } catch (t) {}
                }();
            t.exports = i
        }).call(this, n(12)(t))
    },
    49: function (t, e, n) {
        var r = n(50),
            o = n(51),
            c = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!r(t)) return o(t);
            var e = [];
            for (var n in Object(t)) c.call(t, n) && "constructor" != n && e.push(n);
            return e
        }
    },
    5: function (t, e) {
        var n, r, o = t.exports = {};

        function c() {
            throw new Error("setTimeout has not been defined")
        }

        function u() {
            throw new Error("clearTimeout has not been defined")
        }

        function i(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === c || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }! function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : c
            } catch (t) {
                n = c
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : u
            } catch (t) {
                r = u
            }
        }();
        var f, a = [],
            l = !1,
            s = -1;

        function p() {
            l && f && (l = !1, f.length ? a = f.concat(a) : s = -1, a.length && b())
        }

        function b() {
            if (!l) {
                var t = i(p);
                l = !0;
                for (var e = a.length; e;) {
                    for (f = a, a = []; ++s < e;) f && f[s].run();
                    s = -1, e = a.length
                }
                f = null, l = !1,
                    function (t) {
                        if (r === clearTimeout) return clearTimeout(t);
                        if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                        try {
                            r(t)
                        } catch (e) {
                            try {
                                return r.call(null, t)
                            } catch (e) {
                                return r.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function v(t, e) {
            this.fun = t, this.array = e
        }

        function y() {}
        o.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            a.push(new v(t, e)), 1 !== a.length || l || i(b)
        }, v.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function (t) {
            return []
        }, o.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function () {
            return "/"
        }, o.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function () {
            return 0
        }
    },
    50: function (t, e) {
        var n = Object.prototype;
        t.exports = function (t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || n)
        }
    },
    51: function (t, e, n) {
        var r = n(52)(Object.keys, Object);
        t.exports = r
    },
    52: function (t, e) {
        t.exports = function (t, e) {
            return function (n) {
                return t(e(n))
            }
        }
    },
    53: function (t, e, n) {
        var r = n(8),
            o = n(54),
            c = "[object AsyncFunction]",
            u = "[object Function]",
            i = "[object GeneratorFunction]",
            f = "[object Proxy]";
        t.exports = function (t) {
            if (!o(t)) return !1;
            var e = r(t);
            return e == u || e == i || e == c || e == f
        }
    },
    54: function (t, e) {
        t.exports = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
    },
    55: function (t, e, n) {
        var r = n(19);
        t.exports = function (t, e) {
            return function (n, o) {
                if (null == n) return n;
                if (!r(n)) return t(n, o);
                for (var c = n.length, u = e ? c : -1, i = Object(n);
                    (e ? u-- : ++u < c) && !1 !== o(i[u], u, i););
                return n
            }
        }
    },
    56: function (t, e, n) {
        var r = n(57);
        t.exports = function (t) {
            return "function" == typeof t ? t : r
        }
    },
    57: function (t, e) {
        t.exports = function (t) {
            return t
        }
    },
    7: function (t, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    },
    8: function (t, e, n) {
        var r = n(14),
            o = n(40),
            c = n(41),
            u = "[object Null]",
            i = "[object Undefined]",
            f = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            return null == t ? void 0 === t ? i : u : f && f in Object(t) ? o(t) : c(t)
        }
    },
    9: function (t, e) {
        t.exports = function (t) {
            return null != t && "object" == typeof t
        }
    }
});
