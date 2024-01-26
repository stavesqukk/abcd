(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3459], {
        76489: function(e, t) {
            "use strict";
            t.parse = function(e, t) {
                if ("string" !== typeof e) throw new TypeError("argument str must be a string");
                for (var o = {}, n = t || {}, s = e.split(";"), a = n.decode || r, u = 0; u < s.length; u++) {
                    var c = s[u],
                        l = c.indexOf("=");
                    if (!(l < 0)) {
                        var d = c.substring(0, l).trim();
                        if (void 0 == o[d]) {
                            var p = c.substring(l + 1, c.length).trim();
                            '"' === p[0] && (p = p.slice(1, -1)), o[d] = i(p, a)
                        }
                    }
                }
                return o
            }, t.serialize = function(e, t, r) {
                var i = r || {},
                    s = i.encode || o;
                if ("function" !== typeof s) throw new TypeError("option encode is invalid");
                if (!n.test(e)) throw new TypeError("argument name is invalid");
                var a = s(t);
                if (a && !n.test(a)) throw new TypeError("argument val is invalid");
                var u = e + "=" + a;
                if (null != i.maxAge) {
                    var c = i.maxAge - 0;
                    if (isNaN(c) || !isFinite(c)) throw new TypeError("option maxAge is invalid");
                    u += "; Max-Age=" + Math.floor(c)
                }
                if (i.domain) {
                    if (!n.test(i.domain)) throw new TypeError("option domain is invalid");
                    u += "; Domain=" + i.domain
                }
                if (i.path) {
                    if (!n.test(i.path)) throw new TypeError("option path is invalid");
                    u += "; Path=" + i.path
                }
                if (i.expires) {
                    if ("function" !== typeof i.expires.toUTCString) throw new TypeError("option expires is invalid");
                    u += "; Expires=" + i.expires.toUTCString()
                }
                i.httpOnly && (u += "; HttpOnly");
                i.secure && (u += "; Secure");
                if (i.sameSite) {
                    switch ("string" === typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                        case !0:
                            u += "; SameSite=Strict";
                            break;
                        case "lax":
                            u += "; SameSite=Lax";
                            break;
                        case "strict":
                            u += "; SameSite=Strict";
                            break;
                        case "none":
                            u += "; SameSite=None";
                            break;
                        default:
                            throw new TypeError("option sameSite is invalid")
                    }
                }
                return u
            };
            var r = decodeURIComponent,
                o = encodeURIComponent,
                n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

            function i(e, t) {
                try {
                    return t(e)
                } catch (r) {
                    return e
                }
            }
        },
        47041: function(e, t, r) {
            "use strict";
            var o = this && this.__assign || function() {
                    return o = Object.assign || function(e) {
                        for (var t, r = 1, o = arguments.length; r < o; r++)
                            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }, o.apply(this, arguments)
                },
                n = this && this.__rest || function(e, t) {
                    var r = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var n = 0;
                        for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
                    }
                    return r
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkCookies = t.hasCookie = t.removeCookies = t.deleteCookie = t.setCookies = t.setCookie = t.getCookie = t.getCookies = void 0;
            var i = r(76489),
                s = function() {
                    return "undefined" !== typeof window
                },
                a = function(e) {
                    void 0 === e && (e = "");
                    try {
                        var t = JSON.stringify(e);
                        return /^[\{\[]/.test(t) ? t : e
                    } catch (r) {
                        return e
                    }
                };
            t.getCookies = function(e) {
                var t;
                if (e && (t = e.req), !s()) return t && t.cookies ? t.cookies : t && t.headers && t.headers.cookie ? (0, i.parse)(t.headers.cookie) : {};
                for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], n = 0, a = o.length; n < a; n++) {
                    var u = o[n].split("="),
                        c = u.slice(1).join("=");
                    r[u[0]] = c
                }
                return r
            };
            t.getCookie = function(e, r) {
                var o, n = (0, t.getCookies)(r)[e];
                if (void 0 !== n) return function(e) {
                    return "true" === e || "false" !== e && ("undefined" !== e ? "null" === e ? null : e : void 0)
                }((o = n) ? o.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : o)
            };
            t.setCookie = function(e, t, r) {
                var u, c, l;
                r && (c = r.req, l = r.res, u = n(r, ["req", "res"]));
                var d = (0, i.serialize)(e, a(t), o({
                    path: "/"
                }, u));
                if (s()) document.cookie = d;
                else if (l && c) {
                    var p = l.getHeader("Set-Cookie");
                    if (Array.isArray(p) || (p = p ? [String(p)] : []), l.setHeader("Set-Cookie", p.concat(d)), c && c.cookies) {
                        var f = c.cookies;
                        "" === t ? delete f[e] : f[e] = a(t)
                    }
                    if (c && c.headers && c.headers.cookie) {
                        f = (0, i.parse)(c.headers.cookie);
                        "" === t ? delete f[e] : f[e] = a(t), c.headers.cookie = Object.entries(f).reduce((function(e, t) {
                            return e.concat("".concat(t[0], "=").concat(t[1], ";"))
                        }), "")
                    }
                }
            };
            t.setCookies = function(e, r, o) {
                return console.warn("[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead."), (0, t.setCookie)(e, r, o)
            };
            t.deleteCookie = function(e, r) {
                return (0, t.setCookie)(e, "", o(o({}, r), {
                    maxAge: -1
                }))
            };
            t.removeCookies = function(e, r) {
                return console.warn("[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead."), (0, t.deleteCookie)(e, r)
            };
            t.hasCookie = function(e, r) {
                return !!e && (0, t.getCookies)(r).hasOwnProperty(e)
            };
            t.checkCookies = function(e, r) {
                return console.warn("[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead."), (0, t.hasCookie)(e, r)
            }
        },
        83236: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/login", function() {
                return r(74821)
            }])
        },
        74821: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return h
                }
            });
            var o = r(85893),
                n = r(11163),
                i = r(67294),
                s = r(47568),
                a = r(70655),
                u = r(51891),
                c = r(12789),
                l = r(6154),
                d = r(47041),
                p = function() {
                    var e = {
                            products: [c.QI.otp],
                            otpOptions: {
                                methods: [c.Pi.SMS],
                                expirationMinutes: 1
                            },
                            sessionOptions: {
                                sessionDurationMinutes: 10080
                            }
                        },
                        t = (0, n.useRouter)(),
                        r = function() {
                            var e = (0, s.Z)((function(e, r, o) {
                                var n, i, s, u;
                                return (0, a.__generator)(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, l.Z.post("/api/waitlist", {
                                                userId: e,
                                                phoneNumber: r,
                                                referralAlias: o
                                            })];
                                        case 1:
                                            if (n = a.sent(), i = n.status, s = n.data, 200 !== i) throw "Could not create a waitlist entry";
                                            return s && "pending" !== s.status ? (t.push("/authenticate"), [2]) : (t.push("/waitlist"), [2]);
                                        case 2:
                                            return u = a.sent(), console.error(u), t.push("/"), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(t, r, o) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        p = (0, i.useCallback)(function() {
                            var e = (0, s.Z)((function(e) {
                                var o, n, i, u;
                                return (0, a.__generator)(this, (function(p) {
                                    switch (p.label) {
                                        case 0:
                                            return e.type !== c.z_.OTPsAuthenticate ? [3, 2] : (o = e.data, n = o.user_id, i = o.user.phone_numbers[0].phone_number, u = (0, d.getCookie)("referral_alias"), [4, l.Z.post("/api/users", {
                                                stytchId: n,
                                                phoneNumber: i,
                                                referralAlias: u
                                            }).then(function() {
                                                var e = (0, s.Z)((function(e) {
                                                    var o, n, s, c;
                                                    return (0, a.__generator)(this, (function(a) {
                                                        switch (a.label) {
                                                            case 0:
                                                                return o = e.data, n = "string" === typeof t.query.redirect && "" !== t.query.redirect.trim() ? t.query.redirect.trim() : "/", o.zip_code ? (t.push(n || "/"), [3, 7]) : [3, 1];
                                                            case 1:
                                                                return a.trys.push([1, 6, , 7]), [4, l.Z.get("/api/waitlist?user_id=".concat(o.id))];
                                                            case 2:
                                                                if (200 != (s = a.sent()).status) throw new Error("Could not query waitlist");
                                                                return 0 !== (c = s.data).length ? [3, 4] : [4, r(o.id, i, u)];
                                                            case 3:
                                                                return a.sent(), [3, 5];
                                                            case 4:
                                                                return "pending" === c[0].status ? (t.push("/waitlist"), [2]) : (t.push("/authenticate"), [2]);
                                                            case 5:
                                                                return [3, 7];
                                                            case 6:
                                                                return a.sent(), t.push("/"), [2];
                                                            case 7:
                                                                return [2]
                                                        }
                                                    }))
                                                }));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()).catch((function(e) {
                                                console.error(e), t.push("/")
                                            }))]);
                                        case 1:
                                            p.sent(), p.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [t]),
                        f = {
                            onEvent: p,
                            onError: function(e) {
                                return console.log(e)
                            }
                        };
                    return (0, o.jsx)(u.yi, {
                        config: e,
                        styles: {
                            fontFamily: "Inter",
                            container: {
                                backgroundColor: "#FFFFFF",
                                borderColor: "#ADBCC5",
                                width: "400px",
                                borderRadius: "0px"
                            },
                            buttons: {
                                primary: {
                                    backgroundColor: "#000000",
                                    textColor: "#FFFFFF",
                                    borderColor: "#19303D",
                                    borderRadius: "0px"
                                },
                                secondary: {
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#19303D",
                                    borderColor: "#19303D",
                                    borderRadius: "0px"
                                }
                            },
                            hideHeaderText: !0,
                            logo: {
                                logoImageUrl: "https://res.cloudinary.com/flagshipcloud/image/upload/v1695919853/Asset_29_2x_xoahcf.png"
                            }
                        },
                        callbacks: f
                    })
                },
                f = r(31618);

            function h() {
                var e = (0, i.useContext)(f.St),
                    t = (0, n.useRouter)();
                return (0, i.useEffect)((function() {
                    if (e) {
                        var r = "string" === typeof t.query.redirect && "" !== t.query.redirect.trim() ? t.query.redirect.trim() : "/";
                        t.push(r || "/")
                    }
                }), [t, e]), (0, o.jsx)("div", {
                    className: "z-10 -mt-20 flex h-full flex-col items-center justify-center p-4 text-tts-black",
                    children: (0, o.jsx)(p, {})
                })
            }
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], (function() {
            return t = 83236, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);