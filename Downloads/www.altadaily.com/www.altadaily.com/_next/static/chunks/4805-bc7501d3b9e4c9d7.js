"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4805], {
        76489: function(e, t) {
            t.parse = function(e, t) {
                if ("string" !== typeof e) throw new TypeError("argument str must be a string");
                for (var r = {}, o = t || {}, i = e.split(";"), a = o.decode || s, l = 0; l < i.length; l++) {
                    var c = i[l],
                        u = c.indexOf("=");
                    if (!(u < 0)) {
                        var d = c.substring(0, u).trim();
                        if (void 0 == r[d]) {
                            var p = c.substring(u + 1, c.length).trim();
                            '"' === p[0] && (p = p.slice(1, -1)), r[d] = n(p, a)
                        }
                    }
                }
                return r
            }, t.serialize = function(e, t, s) {
                var n = s || {},
                    i = n.encode || r;
                if ("function" !== typeof i) throw new TypeError("option encode is invalid");
                if (!o.test(e)) throw new TypeError("argument name is invalid");
                var a = i(t);
                if (a && !o.test(a)) throw new TypeError("argument val is invalid");
                var l = e + "=" + a;
                if (null != n.maxAge) {
                    var c = n.maxAge - 0;
                    if (isNaN(c) || !isFinite(c)) throw new TypeError("option maxAge is invalid");
                    l += "; Max-Age=" + Math.floor(c)
                }
                if (n.domain) {
                    if (!o.test(n.domain)) throw new TypeError("option domain is invalid");
                    l += "; Domain=" + n.domain
                }
                if (n.path) {
                    if (!o.test(n.path)) throw new TypeError("option path is invalid");
                    l += "; Path=" + n.path
                }
                if (n.expires) {
                    if ("function" !== typeof n.expires.toUTCString) throw new TypeError("option expires is invalid");
                    l += "; Expires=" + n.expires.toUTCString()
                }
                n.httpOnly && (l += "; HttpOnly");
                n.secure && (l += "; Secure");
                if (n.sameSite) {
                    switch ("string" === typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
                        case !0:
                            l += "; SameSite=Strict";
                            break;
                        case "lax":
                            l += "; SameSite=Lax";
                            break;
                        case "strict":
                            l += "; SameSite=Strict";
                            break;
                        case "none":
                            l += "; SameSite=None";
                            break;
                        default:
                            throw new TypeError("option sameSite is invalid")
                    }
                }
                return l
            };
            var s = decodeURIComponent,
                r = encodeURIComponent,
                o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

            function n(e, t) {
                try {
                    return t(e)
                } catch (s) {
                    return e
                }
            }
        },
        47041: function(e, t, s) {
            var r = this && this.__assign || function() {
                    return r = Object.assign || function(e) {
                        for (var t, s = 1, r = arguments.length; s < r; s++)
                            for (var o in t = arguments[s]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                },
                o = this && this.__rest || function(e, t) {
                    var s = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (s[r[o]] = e[r[o]])
                    }
                    return s
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkCookies = t.hasCookie = t.removeCookies = t.deleteCookie = t.setCookies = t.setCookie = t.getCookie = t.getCookies = void 0;
            var n = s(76489),
                i = function() {
                    return "undefined" !== typeof window
                },
                a = function(e) {
                    void 0 === e && (e = "");
                    try {
                        var t = JSON.stringify(e);
                        return /^[\{\[]/.test(t) ? t : e
                    } catch (s) {
                        return e
                    }
                };
            t.getCookies = function(e) {
                var t;
                if (e && (t = e.req), !i()) return t && t.cookies ? t.cookies : t && t.headers && t.headers.cookie ? (0, n.parse)(t.headers.cookie) : {};
                for (var s = {}, r = document.cookie ? document.cookie.split("; ") : [], o = 0, a = r.length; o < a; o++) {
                    var l = r[o].split("="),
                        c = l.slice(1).join("=");
                    s[l[0]] = c
                }
                return s
            };
            t.getCookie = function(e, s) {
                var r, o = (0, t.getCookies)(s)[e];
                if (void 0 !== o) return function(e) {
                    return "true" === e || "false" !== e && ("undefined" !== e ? "null" === e ? null : e : void 0)
                }((r = o) ? r.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : r)
            };
            t.setCookie = function(e, t, s) {
                var l, c, u;
                s && (c = s.req, u = s.res, l = o(s, ["req", "res"]));
                var d = (0, n.serialize)(e, a(t), r({
                    path: "/"
                }, l));
                if (i()) document.cookie = d;
                else if (u && c) {
                    var p = u.getHeader("Set-Cookie");
                    if (Array.isArray(p) || (p = p ? [String(p)] : []), u.setHeader("Set-Cookie", p.concat(d)), c && c.cookies) {
                        var m = c.cookies;
                        "" === t ? delete m[e] : m[e] = a(t)
                    }
                    if (c && c.headers && c.headers.cookie) {
                        m = (0, n.parse)(c.headers.cookie);
                        "" === t ? delete m[e] : m[e] = a(t), c.headers.cookie = Object.entries(m).reduce((function(e, t) {
                            return e.concat("".concat(t[0], "=").concat(t[1], ";"))
                        }), "")
                    }
                }
            };
            t.setCookies = function(e, s, r) {
                return console.warn("[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead."), (0, t.setCookie)(e, s, r)
            };
            t.deleteCookie = function(e, s) {
                return (0, t.setCookie)(e, "", r(r({}, s), {
                    maxAge: -1
                }))
            };
            t.removeCookies = function(e, s) {
                return console.warn("[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead."), (0, t.deleteCookie)(e, s)
            };
            t.hasCookie = function(e, s) {
                return !!e && (0, t.getCookies)(s).hasOwnProperty(e)
            };
            t.checkCookies = function(e, s) {
                return console.warn("[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead."), (0, t.hasCookie)(e, s)
            }
        },
        69409: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return y
                }
            });
            var r = s(85893),
                o = s(67294),
                n = s(66409),
                i = s(47516),
                a = s(47568),
                l = s(70655),
                c = s(6154),
                u = s(91383),
                d = s(81400),
                p = s(8323),
                m = s(27037),
                f = s(51667),
                x = s(52693),
                h = function(e) {
                    var t, s = e.item,
                        n = e.userData,
                        h = e.context,
                        g = e.page,
                        w = (0, o.useContext)(u.F).dispatch,
                        v = (0, p.h)(),
                        b = v.globalWishlistItemsIDs,
                        y = v.addToWishlist,
                        j = v.removeFromWishlist,
                        k = (0, o.useState)(null !== (t = s.retailPrice) && void 0 !== t ? t : null),
                        N = k[0],
                        _ = k[1],
                        C = (0, o.useState)(b.includes(s.productId)),
                        S = C[0],
                        T = C[1],
                        A = (0, o.useState)(!1),
                        I = A[0],
                        O = A[1];
                    (0, o.useEffect)((function() {
                        T(b.includes(s.productId))
                    }), [b]), (0, o.useEffect)((function() {
                        "closet" === s.from || I || N || !s.retailPrice && !(0, x.Yn)(s.productImages[0].link) && (0, x.NQ)(s.productImages[0].link, _, O)
                    }), [s]);
                    var E, Z = function() {
                            var e = (0, a.Z)((function() {
                                var e, t, r, o, i, a, u, p;
                                return (0, l.__generator)(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return n ? (e = s.productId, t = s.productImages, r = s.name, o = s.brand, i = s.category, a = t[0], u = a.imageSrc, p = a.link, (0, m.L)("".concat(g, ".").concat(h, ".outfit_details_modal.add_to_wishlist"), n.id, {
                                                wishlist_item_name: r,
                                                wishlist_item_brand: o,
                                                wishlist_item_url: p,
                                                wishlist_product_id: e
                                            }), T((function(e) {
                                                return !e
                                            })), w({
                                                type: d.uX.ADD_TO_TOAST_STACK,
                                                payload: {
                                                    item: s,
                                                    key: (new Date).getTime()
                                                }
                                            }), y(e), [4, c.Z.post("/api/wishlists", {
                                                product_image: u,
                                                product_url: p,
                                                product_name: r,
                                                product_brand: o,
                                                product_id: e,
                                                category: i,
                                                notify_motion: !1
                                            })]) : [3, 2];
                                        case 1:
                                            l.sent(), c.Z.post("/api/fastWishlistingFromProductModal", {
                                                user_id: n.id,
                                                product_name: r,
                                                search_query: ""
                                            }), o && c.Z.post("/api/favoriteBrand", {
                                                product_brand: o
                                            }), l.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        P = function() {
                            var e = (0, a.Z)((function() {
                                var e;
                                return (0, l.__generator)(this, (function(t) {
                                    return n && (T((function(e) {
                                        return !e
                                    })), e = s.imageSrc, c.Z.delete("/api/wishlists", {
                                        data: e
                                    }), j(s.productId)), [2]
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        q = s.retailPrice && s.salePrice && s.salePrice !== s.retailPrice;
                    return (0, r.jsxs)("div", {
                        className: "relative flex w-full flex-col md:flex-row md:gap-3",
                        children: [(0, r.jsxs)("div", {
                            className: "relative w-full shrink-0 md:w-[250px]",
                            children: [(0, r.jsx)("img", {
                                className: "aspect-square w-full bg-gray-100 object-contain",
                                src: "closet" === s.from && null !== (E = s.backgroundRemovedImageUrl) && void 0 !== E ? E : s.imageSrc,
                                alt: s.imageAlt
                            }), "closet" !== s.from && (0, r.jsx)("button", {
                                className: "absolute right-[5px] top-[5px] z-10 flex h-[20px] w-[20px] items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                                onClick: function() {
                                    S ? P() : Z()
                                },
                                children: S ? (0, r.jsx)(i.SEb, {
                                    size: "1rem",
                                    fill: "#FF3040"
                                }) : (0, r.jsx)(i.kTx, {
                                    size: "1rem",
                                    fill: "black"
                                })
                            })]
                        }), "closet" === s.from ? (0, r.jsxs)("div", {
                            className: "mt-1 flex flex-col md:mt-0",
                            children: [(0, r.jsx)("p", {
                                className: "mt-1 text-xs font-medium uppercase",
                                children: "\u2728Owned\u2728"
                            }), (0, r.jsx)("p", {
                                className: "truncate text-xs font-light",
                                children: s.name
                            })]
                        }) : (0, r.jsxs)("div", {
                            className: "mt-1 flex flex-col md:mt-0",
                            children: [(0, r.jsx)("p", {
                                className: "text-xs font-medium uppercase",
                                children: s.brand
                            }), (0, r.jsx)("p", {
                                className: "truncate text-xs font-light",
                                children: s.name
                            }), I ? (0, r.jsx)("div", {
                                className: "mt-[2px] h-4 w-16 animate-pulse bg-gray-200"
                            }) : N ? (0, r.jsxs)("span", {
                                className: "mt-[2px] flex items-center gap-2",
                                children: [q && (0, r.jsxs)("p", {
                                    className: "text-left text-sm font-light text-red-500",
                                    children: ["$", s.salePrice]
                                }), (0, r.jsxs)("p", {
                                    className: (0, f.Z)("text-left text-sm font-light", q && "line-through"),
                                    children: ["$", N]
                                })]
                            }) : null, (0, r.jsx)("button", {
                                className: "mt-2 w-min whitespace-nowrap border border-tts-black bg-tts-black px-2 py-1 text-sm font-semibold uppercase text-tts-white md:mt-3 md:hover:opacity-90",
                                onClick: function() {
                                    return e = s.productImages[0].link, n && (0, m.L)("".concat(g, ".").concat(h, ".outfit_details_modal.offsite_cta_tap"), n.id, {
                                        retailer_url: e
                                    }), void window.open((0, x.Yn)(e) ? e : (0, x.tp)(e), "_blank");
                                    var e
                                },
                                children: "View on website \u2197"
                            })]
                        })]
                    })
                },
                g = s(97517),
                w = s(23601),
                v = s(86805),
                b = function(e) {
                    var t = ["dresses", "outerwear", "tops", "bottoms", "bags", "shoes", "jewelry", "accessories", "other pieces", ""];
                    return e.sort((function(e, s) {
                        var r, o;
                        return t.indexOf((null !== (r = e.category) && void 0 !== r ? r : "").toLowerCase()) - t.indexOf((null !== (o = s.category) && void 0 !== o ? o : "").toLowerCase())
                    }))
                },
                y = function(e) {
                    var t = e.isOpen,
                        s = e.setIsOpen,
                        a = e.userData,
                        l = e.outfit,
                        c = e.context,
                        u = e.page,
                        d = (0, w.Z)().width,
                        p = l.stylistNotes,
                        m = l.style,
                        x = l.outfit,
                        y = l.collageImageUrl,
                        j = (0, o.useState)(d < 768),
                        k = j[0],
                        N = j[1],
                        _ = b(x);
                    return (0, r.jsx)(v.Z, {
                        open: t,
                        setOpen: s,
                        children: (0, r.jsxs)(n.ZP, {
                            className: "mx-auto flex w-full max-w-7xl flex-col sm:px-6 lg:px-8",
                            children: [(0, r.jsxs)("aside", {
                                className: "relative flex w-full items-center justify-between p-6",
                                children: [(0, r.jsx)(g.PZ, {
                                    onClick: function() {
                                        return s(!1)
                                    }
                                }), (0, r.jsx)("div", {
                                    className: "absolute inset-0 z-0 flex flex-col items-center justify-center",
                                    children: (0, r.jsx)("h1", {
                                        className: "max-w-[65%] truncate whitespace-nowrap text-center text-sm font-medium text-tts-black",
                                        children: m
                                    })
                                })]
                            }), (0, r.jsxs)("article", {
                                className: "relative flex w-full flex-col gap-6 bg-white px-6 pb-10 md:grid md:grid-cols-2 md:pb-20",
                                children: [(0, r.jsxs)("section", {
                                    className: "flex w-full flex-col gap-4 border-b-[1px] pb-6 md:border-0",
                                    children: [(0, r.jsxs)("center", {
                                        className: "relative flex w-full flex-col",
                                        children: [(0, r.jsx)("p", {
                                            className: "absolute left-3 top-2 text-sm font-bold uppercase md:text-lg",
                                            children: "ALTA"
                                        }), (0, r.jsx)("img", {
                                            src: y,
                                            className: "w-full border border-tts-black p-4 md:p-[26px]",
                                            alt: "Collage"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex w-full flex-col",
                                        children: [(0, r.jsxs)("button", {
                                            className: "flex w-full items-center justify-between",
                                            onClick: function() {
                                                return N((function(e) {
                                                    return !e
                                                }))
                                            },
                                            children: [(0, r.jsx)("h1", {
                                                className: "whitespace-nowrap text-sm font-medium text-tts-black",
                                                children: "Your stylist says:"
                                            }), k ? (0, r.jsx)(i.OrA, {
                                                size: "1.25rem"
                                            }) : (0, r.jsx)(i.jRD, {
                                                size: "1.25rem"
                                            })]
                                        }), (0, r.jsx)("p", {
                                            className: (0, f.Z)("mt-2 text-sm font-light", k && "line-clamp-3"),
                                            children: p
                                        })]
                                    })]
                                }), (0, r.jsxs)("section", {
                                    className: "flex w-full flex-col gap-4",
                                    children: [(0, r.jsx)("h1", {
                                        className: "whitespace-nowrap text-sm font-medium text-tts-black md:hidden",
                                        children: "In this outfit"
                                    }), (0, r.jsx)("div", {
                                        className: "grid w-full grid-cols-2 gap-4 md:flex md:flex-col md:overflow-y-auto",
                                        children: _.map((function(e, t) {
                                            return (0, r.jsx)(h, {
                                                userData: a,
                                                item: e,
                                                outfit: l,
                                                page: u,
                                                context: c
                                            }, t)
                                        }))
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        38930: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return D
                }
            });
            var r = s(47568),
                o = s(70655),
                n = s(85893),
                i = s(51891),
                a = s(41664),
                l = s.n(a),
                c = s(11163),
                u = s(67294),
                d = s(47516),
                p = s(62093),
                m = s(23601),
                f = s(51667),
                x = ["inspo", "closet", "completeTheLook", "stylingRequest"],
                h = function(e) {
                    var t = e.selectedTab,
                        s = e.setSelectedTab;
                    return (0, n.jsx)("section", {
                        className: "flex w-full flex-col",
                        children: x.map((function(e, r) {
                            return (0, n.jsxs)("div", {
                                className: (0, f.Z)("flex w-full flex-col border-b-[1px] border-tts-black py-2 "),
                                children: [(0, n.jsx)("button", {
                                    className: "flex w-full px-4 text-left text-base uppercase",
                                    onClick: function() {
                                        return s(e)
                                    },
                                    children: y(e)
                                }), e === t && (0, n.jsx)(w, {
                                    content: e
                                })]
                            }, r)
                        }))
                    })
                },
                g = function(e) {
                    var t = e.selectedTab,
                        s = e.setSelectedTab;
                    return (0, n.jsxs)("div", {
                        className: "flex w-full flex-col pb-12",
                        children: [(0, n.jsxs)("span", {
                            className: "flex w-full items-center justify-between",
                            children: [(0, n.jsx)("p", {
                                className: "grow border-b-[1px] border-r-[1px] border-t-[1px] border-tts-black py-2 pl-20 text-base uppercase",
                                children: "how it works"
                            }), x.map((function(e, r) {
                                return (0, n.jsx)("button", {
                                    className: (0, f.Z)("flex border-b-[1px] border-r-[1px] border-t-[1px] border-tts-black px-4 py-2 text-base uppercase hover:bg-tts-black hover:text-tts-white", e === t && "mb-[1px] border-b-0", 3 === r && "border-r-0"),
                                    onClick: function() {
                                        return s(e)
                                    },
                                    children: y(e)
                                }, r)
                            }))]
                        }), (0, n.jsx)(v, {
                            content: t
                        })]
                    })
                },
                w = function(e) {
                    var t = e.content;
                    return (0, n.jsxs)("div", {
                        className: (0, f.Z)("flex w-full shrink-0 flex-col items-center gap-3 bg-transparent px-4 py-8 sm:ml-[55px] sm:w-[700px]"),
                        children: [(0, n.jsx)("video", {
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            className: "w-full border",
                            children: (0, n.jsx)("source", {
                                src: b(t),
                                type: "video/mp4"
                            })
                        }), (0, n.jsx)("p", {
                            className: "text-sm font-normal",
                            children: j(t)
                        })]
                    })
                },
                v = function(e) {
                    var t = e.content;
                    return (0, n.jsxs)("section", {
                        className: "mx-auto flex w-full max-w-[1660px] items-center justify-center",
                        children: [(0, n.jsxs)("div", {
                            className: "flex w-1/2 items-center justify-center p-[5%]",
                            children: ["closet" === t && (0, n.jsx)("video", {
                                autoPlay: !0,
                                muted: !0,
                                loop: !0,
                                playsInline: !0,
                                className: "aspect-square w-full",
                                children: (0, n.jsx)("source", {
                                    src: b("closet"),
                                    type: "video/mp4"
                                })
                            }), "completeTheLook" === t && (0, n.jsx)("video", {
                                autoPlay: !0,
                                muted: !0,
                                loop: !0,
                                playsInline: !0,
                                className: "aspect-square w-full",
                                children: (0, n.jsx)("source", {
                                    src: b("completeTheLook"),
                                    type: "video/mp4"
                                })
                            }), "inspo" === t && (0, n.jsx)("video", {
                                autoPlay: !0,
                                muted: !0,
                                loop: !0,
                                playsInline: !0,
                                className: "aspect-square w-full",
                                children: (0, n.jsx)("source", {
                                    src: b("inspo"),
                                    type: "video/mp4"
                                })
                            }), "stylingRequest" === t && (0, n.jsxs)("video", {
                                autoPlay: !0,
                                muted: !0,
                                loop: !0,
                                playsInline: !0,
                                className: "aspect-square w-full",
                                children: ["\u2202", (0, n.jsx)("source", {
                                    src: b("stylingRequest"),
                                    type: "video/mp4"
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "flex h-full w-1/2 flex-col items-center justify-center gap-4 p-[10%]",
                            children: [(0, n.jsx)("h1", {
                                className: "w-full text-left text-base font-normal uppercase",
                                children: y(t)
                            }), (0, n.jsx)("p", {
                                className: "w-full text-base font-normal",
                                children: j(t)
                            })]
                        })]
                    })
                },
                b = function(e) {
                    return "inspo" === e ? "https://res.cloudinary.com/flagshipcloud/video/upload/v1694117845/1_V1_ku6eri.mp4" : "stylingRequest" === e ? "https://res.cloudinary.com/flagshipcloud/video/upload/v1694117901/2_FULL_V1_bdpgyd.mp4" : "closet" === e ? "https://res.cloudinary.com/flagshipcloud/video/upload/v1694640425/landing/3_V3_jhfgge.mp4" : "completeTheLook" === e ? "https://res.cloudinary.com/flagshipcloud/video/upload/v1698984177/landing/CTL_men_jqra5y.mov" : ""
                },
                y = function(e) {
                    return "inspo" === e ? "Weekly personalized fits" : "stylingRequest" === e ? "Style requests" : "closet" === e ? "Digital Closet" : "completeTheLook" === e ? "Complete the look" : ""
                },
                j = function(e) {
                    return "inspo" === e ? "Feel confident in weekly outfits curated specifically for you." : "stylingRequest" === e ? "Get personalized outfits for any upcoming events." : "closet" === e ? "Create outfit combinations from items you own with the help of our assistant. In partnership with Marie Kondo's KonMari International, Alta also offers a closet concierge service to assist you in organizing and cataloguing your closet." : "completeTheLook" === e ? "See how any item can be styled using what you already have in your closet." : ""
                },
                k = function() {
                    var e = (0, m.Z)().width,
                        t = (0, u.useState)("inspo"),
                        s = t[0],
                        r = t[1];
                    return (0, n.jsx)("section", {
                        className: "w-full pb-4",
                        children: e < 640 ? (0, n.jsx)(h, {
                            selectedTab: s,
                            setSelectedTab: r
                        }) : (0, n.jsx)(g, {
                            selectedTab: s,
                            setSelectedTab: r
                        })
                    })
                },
                N = s(26042),
                _ = s(69396),
                C = "https://res.cloudinary.com/flagshipcloud/image/upload/v1698982772/landing/Group_143_yrism7.png",
                S = "https://res.cloudinary.com/flagshipcloud/image/upload/v1695415686/professional_1_vjxfad.png",
                T = "https://res.cloudinary.com/flagshipcloud/image/upload/v1695413920/image_51_z8glno.png",
                A = "https://res.cloudinary.com/flagshipcloud/image/upload/v1695413921/image_346_txvme3.png",
                I = "https://res.cloudinary.com/flagshipcloud/image/upload/v1695413922/image_348_zyhwga.png",
                O = "https://res.cloudinary.com/flagshipcloud/image/upload/v1695413922/image_349_sgd8f9.png",
                E = "https://res.cloudinary.com/flagshipcloud/image/upload/v1695413921/image_271_crcjyd.png",
                Z = "https://res.cloudinary.com/flagshipcloud/image/upload/v1695413920/image_119_zzzppa.png",
                P = "https://res.cloudinary.com/flagshipcloud/image/upload/v1695413920/image_83_rqh4bx.png",
                q = function(e) {
                    var t = e.items;
                    return (0, n.jsx)(n.Fragment, {
                        children: t.map((function(e) {
                            return (0, n.jsx)("div", {
                                className: "absolute flex items-center justify-center",
                                style: {
                                    top: "".concat(e.top, "%"),
                                    left: "".concat(e.left, "%")
                                },
                                children: (0, n.jsx)("img", {
                                    src: e.item,
                                    alt: e.item,
                                    className: "aspect-square w-full object-contain"
                                })
                            }, e.id)
                        }))
                    })
                },
                z = function(e) {
                    var t = e.desktopExplanation,
                        s = (0, m.Z)().width,
                        r = (0, u.useState)(!1),
                        o = r[0],
                        i = r[1],
                        a = (0, u.useState)([]),
                        l = a[0],
                        c = a[1];
                    return (0, u.useEffect)((function() {
                        var e = [S, T, A, I, O, E, Z, P].map((function(e, t) {
                            return {
                                id: t,
                                top: 60 * Math.random(),
                                left: Math.max(80 * Math.random(), 11),
                                speedX: (.01 * Math.random() + .04) * (Math.random() < .5 ? 1 : -1),
                                speedY: (.01 * Math.random() + .04) * (Math.random() < .5 ? 1 : -1),
                                item: e
                            }
                        }));
                        c(e)
                    }), []), (0, u.useEffect)((function() {
                        var e = function() {
                                c((function(e) {
                                    return e.map((function(e) {
                                        var t = e.speedX,
                                            s = e.speedY;
                                        (e.left <= 10 || e.left >= 80) && (t = -e.speedX), (e.top <= 0 || e.top >= 60) && (s = -e.speedY);
                                        var r = e.left + t,
                                            o = e.top + s;
                                        return (0, _.Z)((0, N.Z)({}, e), {
                                            left: r,
                                            top: o,
                                            speedX: t,
                                            speedY: s
                                        })
                                    }))
                                })), requestAnimationFrame(e)
                            },
                            t = requestAnimationFrame(e);
                        return function() {
                            return cancelAnimationFrame(t)
                        }
                    }), []), (0, n.jsxs)("section", {
                        className: "relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden border-b-[1px] border-tts-black md:h-[600px] md:border-b-0",
                        children: [(0, n.jsx)("div", {
                            onMouseEnter: function(e) {
                                e.preventDefault(), i(!0)
                            },
                            onMouseLeave: function(e) {
                                e.preventDefault(), i(!1)
                            },
                            className: "relative z-50",
                            children: (0, n.jsx)("img", {
                                src: o ? "https://res.cloudinary.com/flagshipcloud/image/upload/v1695412746/Mask_group_q6depl.png" : "https://res.cloudinary.com/flagshipcloud/image/upload/v1695413176/ALTA_2_vdbqoc.png",
                                alt: "big-logo",
                                className: "z-50 w-[200px] md:w-2/3 lg:w-[710px]"
                            })
                        }), s >= 768 && t, s < 768 && (0, n.jsx)("div", {
                            className: "absolute inset-0 mx-auto my-auto flex h-full w-[70%] items-center justify-center",
                            children: (0, n.jsx)("img", {
                                src: C,
                                alt: C,
                                className: "w-full"
                            })
                        }), s >= 768 && (0, n.jsx)(q, {
                            items: l
                        })]
                    })
                },
                L = function(e) {
                    var t = e.onClickCTA,
                        s = e.onClickSeeMore;
                    return (0, n.jsxs)("section", {
                        className: "mx-auto flex w-full max-w-7xl flex-col border-b-[1px] border-tts-black px-4 py-12",
                        children: [(0, n.jsx)("h2", {
                            className: "pb-3 text-sm uppercase md:text-lg",
                            children: "Your Personal AI Stylist"
                        }), (0, n.jsx)("p", {
                            className: "mt-2 w-3/4 pb-3 text-sm md:text-base",
                            children: "Elevate your style with ALTA. Get personalized outfit selections based on your closet, preferences, personal style, weather, and calendar, for any day of the week or special event."
                        }), (0, n.jsxs)("span", {
                            className: "mt-3 flex w-full items-center gap-3",
                            children: [(0, n.jsx)("button", {
                                className: "w-min whitespace-nowrap bg-tts-black px-3 py-1 text-sm font-semibold uppercase text-tts-black text-tts-white sm:hover:opacity-90",
                                onClick: function() {
                                    return t()
                                },
                                children: "Get Early Access \u2197"
                            }), (0, n.jsxs)("button", {
                                className: "flex w-min items-center gap-1 whitespace-nowrap text-sm font-semibold text-tts-black sm:hover:underline",
                                onClick: function() {
                                    return s()
                                },
                                children: ["See how it works", (0, n.jsx)(d.OrA, {
                                    size: "1rem"
                                })]
                            })]
                        })]
                    })
                },
                M = function(e) {
                    var t = e.onClickCTA,
                        s = e.onClickSeeMore;
                    return (0, n.jsxs)("section", {
                        className: "z-50 mx-auto mt-8 flex w-2/3 flex-col px-4 py-12 lg:w-[710px]",
                        children: [(0, n.jsx)("h2", {
                            className: "pb-3 text-sm uppercase md:text-lg",
                            children: "Your Personal AI Stylist"
                        }), (0, n.jsx)("p", {
                            className: "mt-2 w-3/4 pb-3 text-sm md:text-base",
                            children: "Elevate your style with ALTA. Get personalized outfit selections based on your closet, preferences, personal style, weather, and calendar, for any day of the week or special event."
                        }), (0, n.jsxs)("span", {
                            className: "mt-3 flex w-full items-center gap-3",
                            children: [(0, n.jsx)("button", {
                                className: "w-min whitespace-nowrap bg-tts-black px-3 py-1 text-sm font-semibold uppercase text-tts-black text-tts-white sm:hover:opacity-90",
                                onClick: function() {
                                    return t()
                                },
                                children: "Get Early Access \u2197"
                            }), (0, n.jsxs)("button", {
                                className: "flex w-min items-center gap-1 whitespace-nowrap text-sm font-semibold text-tts-black sm:hover:underline",
                                onClick: function() {
                                    return s()
                                },
                                children: ["See how it works", (0, n.jsx)(d.OrA, {
                                    size: "1rem"
                                })]
                            })]
                        })]
                    })
                },
                D = function() {
                    var e = (0, m.Z)().width,
                        t = (0, i.G6)(),
                        s = (0, c.useRouter)(),
                        a = function() {
                            var e = (0, r.Z)((function() {
                                return (0, o.__generator)(this, (function(e) {
                                    return t.session.revoke().then((function(e) {
                                        return s.push("/login")
                                    })).catch((function(e) {
                                        return s.push("/login")
                                    })), [2]
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        d = (0, u.useRef)(null),
                        f = function() {
                            d.current && d.current.scrollIntoView({
                                behavior: "smooth"
                            })
                        };
                    return (0, n.jsxs)("div", {
                        className: "relative m-auto -mt-48 flex h-full flex-grow flex-col bg-tts-white",
                        children: [(0, n.jsxs)("section", {
                            className: "flex w-full flex-col items-center",
                            children: [(0, n.jsx)(l(), {
                                href: "/login",
                                children: (0, n.jsx)("div", {
                                    className: "w-full bg-gradient-to-r from-[#D1D1D1] via-[#9D50FF] to-[#FF4747] sm:hover:cursor-pointer",
                                    children: (0, n.jsx)(p.Z, {
                                        direction: "toLeft",
                                        children: function() {
                                            return (0, n.jsx)("p", {
                                                className: "mr-[100px] h-full whitespace-nowrap bg-transparent py-2 text-sm font-semibold uppercase md:mr-[300px]",
                                                children: "get early access \u2197"
                                            })
                                        }
                                    })
                                })
                            }), (0, n.jsx)(z, {
                                desktopExplanation: (0, n.jsx)(M, {
                                    onClickCTA: a,
                                    onClickSeeMore: f
                                })
                            })]
                        }), e < 768 && (0, n.jsx)(L, {
                            onClickCTA: a,
                            onClickSeeMore: f
                        }), (0, n.jsx)("section", {
                            ref: d,
                            className: "w-full pb-12",
                            children: (0, n.jsx)(k, {})
                        })]
                    })
                }
        }
    }
]);