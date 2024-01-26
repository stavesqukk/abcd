(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4980], {
        37868: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/profile/preferences", function() {
                return s(75881)
            }])
        },
        30030: function(e, t, s) {
            "use strict";
            var r = s(85893),
                n = s(11163),
                a = s(47516);
            t.Z = function(e) {
                var t = e.showText,
                    s = (0, n.useRouter)();
                return (0, r.jsxs)("div", {
                    className: "absolute flex items-center gap-2 hover:cursor-pointer",
                    onClick: function() {
                        return s.back()
                    },
                    children: [(0, r.jsx)(a.gbs, {
                        size: "2rem"
                    }), t && (0, r.jsx)("button", {
                        type: "button",
                        className: "text-xs font-light uppercase",
                        children: "Back"
                    })]
                })
            }
        },
        75881: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return ee
                }
            });
            var r = s(85893),
                n = s(67294),
                a = s(47516),
                i = s(30030),
                l = s(23601),
                c = s(47568),
                o = s(29815),
                d = s(70655),
                u = s(86893),
                m = s(76998),
                p = s(74764),
                f = s(53507),
                h = s(27037),
                g = "animate-fade-in duration-500 ease-out bg-tts-white border-gray-900 text-gray-900 text-center cursor-pointer w-auto",
                x = "bg-[#E8F1FE] text-center cursor-pointer w-auto border-[#5C9CF8]",
                v = ["$", "$$", "$$$", "$$$$"],
                j = function(e) {
                    var t = e.userData,
                        s = function(e, t) {
                            return t.filter((function(t) {
                                var s = m.gW[t];
                                return "Both" === e || "Both" === s || s === e
                            }))
                        },
                        a = (0, n.useState)(t.budget || []),
                        i = a[0],
                        l = a[1],
                        j = Object.entries(m.KS).flatMap((function(e) {
                            return e[1]
                        })),
                        b = (0, n.useState)(Object.entries(m.KS).filter((function(e) {
                            return v.includes(e[0])
                        })).flatMap((function(e) {
                            return e[1]
                        })).concat()),
                        y = b[0],
                        w = b[1],
                        N = (0, n.useState)(JSON.parse(String(t.favorite_brands) || "[]")),
                        k = N[0],
                        S = N[1],
                        _ = (0, n.useState)(t.disliked_brands || []),
                        C = _[0],
                        B = _[1],
                        D = (0, n.useState)(k.filter((function(e) {
                            return !j.includes(e)
                        }))),
                        Z = D[0],
                        F = D[1],
                        E = (0, n.useState)(""),
                        z = E[0],
                        P = E[1],
                        T = (0, n.useState)(!1),
                        O = T[0],
                        W = T[1],
                        I = (0, n.useState)(!1),
                        U = I[0],
                        L = I[1],
                        q = t.gender || "Both",
                        A = [],
                        H = function(e) {
                            k.includes(e) ? (S(k.filter((function(t) {
                                return t !== e
                            }))), F(Z.filter((function(t) {
                                return t !== e
                            })))) : (S((0, o.Z)(k).concat([e])), F((0, o.Z)(Z).concat([e])))
                        },
                        M = function() {
                            var e = (0, c.Z)((function() {
                                return (0, d.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return W(!0), [4, (0, p.N)(t.id, {
                                                budget: i,
                                                favorite_brands: JSON.stringify(k),
                                                disliked_brands: C
                                            })];
                                        case 1:
                                            return e.sent(), (0, h.L)("profile.edit_budgetbrands_tab", t.id), W(!1), L(!0), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        $ = i.length > 0;
                    return (0, r.jsxs)("div", {
                        className: "flex w-full flex-col",
                        children: [(0, r.jsx)("div", {
                            children: "Budget"
                        }), (0, r.jsx)("div", {
                            className: "mb-6 mt-2 grid grid-cols-2 gap-4 md:mb-20 md:grid-cols-4",
                            children: v.map((function(e, t) {
                                var n = i.includes(e) ? x : g;
                                return (0, r.jsx)("div", {
                                    onClick: function() {
                                        return function(e) {
                                            var t = [];
                                            if (i.includes(e)) A = i.filter((function(t) {
                                                return t !== e
                                            })), t = s(q, k).filter((function(t) {
                                                return !m.KS[e].includes(t)
                                            })), l(A), w(Object.entries(m.KS).filter((function(e) {
                                                return A.includes(e[0])
                                            })).flatMap((function(e) {
                                                return e[1]
                                            }))), S(t);
                                            else {
                                                var r = (0, o.Z)(i).concat([e]);
                                                l(r), w(Object.entries(m.KS).filter((function(e) {
                                                    return r.includes(e[0])
                                                })).flatMap((function(e) {
                                                    return e[1]
                                                })))
                                            }
                                        }(e)
                                    },
                                    className: "".concat(n, " min-w-[109px] border-2 border-solid p-2 text-center font-body"),
                                    children: (0, r.jsx)("p", {
                                        children: e
                                    })
                                }, t)
                            }))
                        }), $ && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                children: "Favorite brands"
                            }), (0, r.jsxs)("div", {
                                className: "mt-8 grid grid-cols-2 gap-4 md:grid-cols-4",
                                children: [s(q, y).map((function(e, t) {
                                    var s = k.includes(e),
                                        n = C.includes(e),
                                        a = s ? x : n ? "bg-rose-200 text-center cursor-pointer w-auto border-rose-600" : g;
                                    return (0, r.jsxs)("div", {
                                        className: "".concat(a, " flex w-40 items-center justify-between border-2 border-solid p-2 text-center font-body"),
                                        children: [(0, r.jsx)("div", {
                                            className: "flex items-center justify-center hover:scale-110 hover:cursor-pointer hover:opacity-100",
                                            onClick: function() {
                                                return function(e) {
                                                    var t = C.includes(e) ? C.filter((function(t) {
                                                        return t !== e
                                                    })) : (0, o.Z)(C).concat([e]);
                                                    B(t)
                                                }(e)
                                            },
                                            children: s ? (0, r.jsx)("div", {
                                                className: "w-[0.9rem]"
                                            }) : (0, r.jsx)(u.oLd, {
                                                size: "0.9rem"
                                            })
                                        }), (0, r.jsx)("p", {
                                            children: e
                                        }), (0, r.jsx)("div", {
                                            className: "flex items-center justify-center hover:scale-110 hover:cursor-pointer hover:opacity-100",
                                            onClick: function() {
                                                return H(e)
                                            },
                                            children: n ? (0, r.jsx)("div", {
                                                className: "w-[0.9rem]"
                                            }) : (0, r.jsx)(u.fmn, {
                                                size: "0.9rem"
                                            })
                                        })]
                                    }, t)
                                })), Z.filter((function(e) {
                                    return !j.includes(e)
                                })).map((function(e, t) {
                                    var s = k.includes(e) ? x : g;
                                    return (0, r.jsx)("div", {
                                        onClick: function() {
                                            return H(e)
                                        },
                                        className: "".concat(s, " w-40 items-center border-2 border-solid p-2 text-center font-body"),
                                        children: (0, r.jsx)("p", {
                                            children: e
                                        })
                                    }, t)
                                })), (0, r.jsxs)("form", {
                                    className: "".concat(g, " items-middle flex w-40 flex-row justify-between border-2 border-solid p-2 text-center font-body"),
                                    onSubmit: function(e) {
                                        e.preventDefault(), z && (H(z), P(""))
                                    },
                                    children: [(0, r.jsx)("input", {
                                        placeholder: "Brand name",
                                        value: z,
                                        onChange: function(e) {
                                            return P(e.target.value)
                                        },
                                        className: "w-full"
                                    }), (0, r.jsxs)("button", {
                                        type: "submit",
                                        className: "flex flex-row items-center text-sm",
                                        children: [(0, r.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "1.5",
                                            stroke: "currentColor",
                                            className: "mr-1 h-4 w-4",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M12 4.5v15m7.5-7.5h-15"
                                            })
                                        }), "ADD"]
                                    })]
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "relative mt-8 bg-black px-4 py-2 text-center text-sm uppercase text-white hover:cursor-pointer",
                            onClick: function() {
                                return M()
                            },
                            children: (0, r.jsxs)("div", {
                                className: "flex items-center justify-center",
                                children: [O && (0, r.jsx)("div", {
                                    className: "mr-3 inline-block",
                                    children: (0, r.jsx)(f.Z, {})
                                }), O ? "Updating preferences..." : U ? "Saved" : "Save preferences"]
                            })
                        })]
                    })
                },
                b = "animate-fade-in duration-500 ease-out bg-tts-white border-gray-900 text-gray-900 text-center cursor-pointer w-auto",
                y = "bg-[#E8F1FE] text-center cursor-pointer w-auto text-gray-500 border-[#5C9CF8]",
                w = ["Yellow Gold", "Silver", "Rose Gold"],
                N = [{
                    name: "Skirts",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564636/app-assets/Skirts_ylk9jf.png"
                }, {
                    name: "Shorts",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564636/app-assets/Shorts_tbk2wd.png"
                }, {
                    name: "Sweaters",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564637/app-assets/Sweaters_qlerux.png"
                }, {
                    name: "T-shirts",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564637/app-assets/Tshirts_tr0muk.png"
                }, {
                    name: "Dresses",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564625/app-assets/Dresses_ixk0n7.png"
                }, {
                    name: "Jeans",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564626/app-assets/Jeans_h9dp6z.png"
                }, {
                    name: "Pants",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564635/app-assets/Pants_jxghwa.png"
                }, {
                    name: "Jewelry",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564625/app-assets/Earrings_x0ehy5.png"
                }, {
                    name: "Blazers",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564624/app-assets/Blazer_dptgtk.png"
                }, {
                    name: "Scarves",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564636/app-assets/Scarves_ny91qa.png"
                }, {
                    name: "Bags",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564623/app-assets/Bags_vwolfg.png"
                }],
                k = [{
                    name: "Stiletto Heels",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564626/app-assets/Heels_hne0oc.png"
                }, {
                    name: "Sandals",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564636/app-assets/Sandals_byyaiy.png"
                }, {
                    name: "Wedges",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564637/app-assets/Wedges_nqdfpv.png"
                }, {
                    name: "Flats",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564625/app-assets/Flats_vr4xro.png"
                }, {
                    name: "Sneakers",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564637/app-assets/Sneakers_qc2eui.png"
                }, {
                    name: "Booties",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564624/app-assets/Booties_hbvocc.png"
                }, {
                    name: "Tall Boots",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564624/app-assets/Boots_tfcxsa.png"
                }, {
                    name: "Slides",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564636/app-assets/Slides_dktuto.png"
                }, {
                    name: "Loafers",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564635/app-assets/Loafers_d0jwup.png"
                }, {
                    name: "Flip Flops",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564625/app-assets/FlipFlops_mykugb.png"
                }, {
                    name: "Kitten Heel",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564626/app-assets/Kittenheel_fxirlo.png"
                }],
                S = [{
                    name: "Pinks",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564635/app-assets/Pink_qhwruq.png"
                }, {
                    name: "Beiges",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564623/app-assets/Beige_ihnuyw.png"
                }, {
                    name: "Whites",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564637/app-assets/White_ejok0h.png"
                }, {
                    name: "Blacks",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564623/app-assets/Black_lsti8z.png"
                }, {
                    name: "Blues",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564623/app-assets/Blue_tk5c09.png"
                }, {
                    name: "Brown",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564624/app-assets/Brown_xx2ivm.png"
                }, {
                    name: "Reds",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564636/app-assets/Red_ulogjj.png"
                }, {
                    name: "Gray",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564625/app-assets/Gray_hoqxam.png"
                }, {
                    name: "Greens",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564626/app-assets/Green_hjwxp9.png"
                }, {
                    name: "Orange",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564635/app-assets/Orange_gyy8jx.png"
                }, {
                    name: "Purples",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564635/app-assets/Purple_rz1tdf.png"
                }, {
                    name: "Turquoise",
                    img: "https://res.cloudinary.com/flagshipcloud/image/upload/v1692564637/app-assets/Turquoise_eophkh.png"
                }],
                _ = function(e) {
                    var t = e.userData,
                        s = (0, n.useState)(!1),
                        a = s[0],
                        i = s[1],
                        l = (0, n.useState)(!1),
                        u = l[0],
                        m = l[1],
                        g = (0, n.useState)(t.jewelry_tone || []),
                        x = g[0],
                        v = g[1],
                        j = (0, n.useState)(t.avoid_shoes || []),
                        _ = j[0],
                        C = j[1],
                        B = (0, n.useState)(t.avoid_clothing || []),
                        D = B[0],
                        Z = B[1],
                        F = (0, n.useState)(t.avoid_colors || []),
                        E = F[0],
                        z = F[1],
                        P = function(e, t) {
                            var s = function(e, t) {
                                return e.includes(t)
                            };
                            if ("jewelryTone" === t)
                                if (s(x, e)) {
                                    var r = x.filter((function(t) {
                                        return t !== e
                                    }));
                                    v(r)
                                } else {
                                    var n = (0, o.Z)(x);
                                    n.push(e), v(n)
                                }
                            else if ("avoidClothing" === t)
                                if (s(D, e)) {
                                    var a = D.filter((function(t) {
                                        return t !== e
                                    }));
                                    Z(a)
                                } else {
                                    var i = (0, o.Z)(D);
                                    i.push(e), Z(i)
                                }
                            else if ("avoidShoes" === t)
                                if (s(_, e)) {
                                    var l = _.filter((function(t) {
                                        return t !== e
                                    }));
                                    C(l)
                                } else {
                                    var c = (0, o.Z)(_);
                                    c.push(e), C(c)
                                }
                            else if ("avoidColors" === t)
                                if (s(E, e)) {
                                    var d = E.filter((function(t) {
                                        return t !== e
                                    }));
                                    z(d)
                                } else {
                                    var u = (0, o.Z)(E);
                                    u.push(e), z(u)
                                }
                        },
                        T = function() {
                            var e = (0, c.Z)((function() {
                                return (0, d.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return i(!0), [4, (0, p.N)(t.id, {
                                                jewelry_tone: x,
                                                avoid_clothing: D,
                                                avoid_shoes: _,
                                                avoid_colors: E
                                            })];
                                        case 1:
                                            return e.sent(), (0, h.L)("profile.edit_preferences_tab", t.id), i(!1), m(!0), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, r.jsxs)("div", {
                        className: "flex w-full flex-col",
                        children: [(0, r.jsx)("div", {
                            children: "Favorite jewelry tones"
                        }), (0, r.jsx)("div", {
                            className: "grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-4",
                            children: w.map((function(e, t) {
                                var s = x.includes(e) ? y : b;
                                return (0, r.jsx)("div", {
                                    onClick: function() {
                                        return P(e, "jewelryTone")
                                    },
                                    className: "".concat(s, " w-40 border-2 border-solid p-2 text-center font-body"),
                                    children: (0, r.jsx)("p", {
                                        children: e
                                    })
                                }, t)
                            }))
                        }), (0, r.jsx)("div", {
                            className: "mt-8 md:mt-16",
                            children: "Clothing categories you dislike"
                        }), (0, r.jsx)("div", {
                            className: "grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-4",
                            children: N.map((function(e, t) {
                                var s = D.includes(e.name) ? y : b;
                                return (0, r.jsxs)("div", {
                                    onClick: function() {
                                        return P(e.name, "avoidClothing")
                                    },
                                    className: "".concat(s, " w-40 border-2 border-solid p-2 text-center font-body"),
                                    children: [(0, r.jsx)("img", {
                                        src: e.img,
                                        alt: e.name,
                                        className: "h-20 w-full object-contain"
                                    }), (0, r.jsx)("p", {
                                        children: e.name
                                    })]
                                }, t)
                            }))
                        }), (0, r.jsx)("div", {
                            className: "mt-8 md:mt-16",
                            children: "Shoe categories you dislike"
                        }), (0, r.jsx)("div", {
                            className: "grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-4",
                            children: k.map((function(e, t) {
                                var s = _.includes(e.name) ? y : b;
                                return (0, r.jsxs)("div", {
                                    onClick: function() {
                                        return P(e.name, "avoidShoes")
                                    },
                                    className: "".concat(s, " w-40 border-2 border-solid p-2 text-center font-body"),
                                    children: [(0, r.jsx)("img", {
                                        src: e.img,
                                        alt: e.name,
                                        className: "h-20 w-full object-contain"
                                    }), (0, r.jsx)("p", {
                                        children: e.name
                                    })]
                                }, t)
                            }))
                        }), (0, r.jsx)("div", {
                            className: "mt-8 md:mt-16",
                            children: "Colors to Avoid"
                        }), (0, r.jsx)("div", {
                            className: "grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-4",
                            children: S.map((function(e, t) {
                                var s = E.includes(e.name) ? y : b;
                                return (0, r.jsxs)("div", {
                                    onClick: function() {
                                        return P(e.name, "avoidColors")
                                    },
                                    className: "".concat(s, " w-40 border-2 border-solid p-2 text-center font-body"),
                                    children: [(0, r.jsx)("img", {
                                        src: e.img,
                                        alt: e.name,
                                        className: "h-20 w-full object-contain"
                                    }), (0, r.jsx)("p", {
                                        children: e.name
                                    })]
                                }, t)
                            }))
                        }), (0, r.jsx)("div", {
                            className: "relative mt-8 bg-black px-4 py-2 text-center text-sm uppercase text-white hover:cursor-pointer",
                            onClick: function() {
                                return T()
                            },
                            children: (0, r.jsxs)("div", {
                                className: "flex items-center justify-center",
                                children: [a && (0, r.jsx)("div", {
                                    className: "mr-3 inline-block",
                                    children: (0, r.jsx)(f.Z, {})
                                }), a ? "Updating preferences..." : u ? "Saved" : "Save preferences"]
                            })
                        })]
                    })
                },
                C = s(828),
                B = s(89009),
                D = (s(87042), s(35914)),
                Z = s(51667),
                F = [{
                    shape: "Pear",
                    img: "/images/Pear.png"
                }, {
                    shape: "Apple",
                    img: "/images/Apple.png"
                }, {
                    shape: "Rectangle",
                    img: "/images/Rectangle.png"
                }, {
                    shape: "Hourglass",
                    img: "/images/Hourglass.png"
                }, {
                    shape: "Inverted Triangle",
                    img: "/images/Triangle.png"
                }];
            var E = function(e) {
                    var t = e.onSliderChange,
                        s = e.sliderValues,
                        n = F[P(s)];
                    return (0, r.jsxs)("div", {
                        className: "mt-4 flex w-full justify-center gap-6",
                        children: [(0, r.jsxs)("div", {
                            className: "flex w-[30%] flex-col items-center justify-center",
                            children: [(0, r.jsx)("img", {
                                src: n.img,
                                alt: n.shape,
                                className: "mb-2 max-h-[360px] w-auto"
                            }), (0, r.jsx)("p", {
                                className: "text-center text-xs uppercase",
                                children: n.shape
                            })]
                        }), (0, r.jsx)("div", {
                            className: "flex w-1/2 flex-col gap-6 sm:w-1/3",
                            children: ["bust", "waist", "hips"].map((function(e, n) {
                                return (0, r.jsx)(z, {
                                    index: n,
                                    label: e,
                                    defaultValue: s[n],
                                    onSliderChange: t
                                }, n)
                            }))
                        })]
                    })
                },
                z = function(e) {
                    var t = e.index,
                        s = e.label,
                        n = e.onSliderChange,
                        a = e.defaultValue,
                        i = [{
                            left: "Narrower",
                            middle: "Average",
                            right: "Wider"
                        }, {
                            left: "Narrower",
                            middle: "Average",
                            right: "Wider"
                        }, {
                            left: "Narrower",
                            middle: "Average",
                            right: "Wider"
                        }][t],
                        l = i.left,
                        c = i.middle,
                        o = i.right;
                    return (0, r.jsxs)("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [(0, r.jsx)("div", {
                            className: "mt-2 self-start text-sm font-bold uppercase",
                            children: s
                        }), (0, r.jsxs)("div", {
                            className: "flex w-full justify-between",
                            children: [(0, r.jsx)("div", {
                                className: "text-xs",
                                children: l
                            }), (0, r.jsx)("div", {
                                className: "text-xs",
                                children: c
                            }), (0, r.jsx)("div", {
                                className: "text-xs",
                                children: o
                            })]
                        }), (0, r.jsx)("div", {
                            className: "w-[90%]",
                            children: (0, r.jsx)(B.Z, {
                                onChange: function(e) {
                                    return n(e, t)
                                },
                                trackStyle: {
                                    backgroundColor: "black"
                                },
                                handleStyle: {
                                    borderColor: "black",
                                    backgroundColor: "black",
                                    opacity: 100
                                },
                                defaultValue: a,
                                step: 10
                            })
                        })]
                    })
                },
                P = function(e) {
                    var t = (0, C.Z)(e, 3),
                        s = t[0],
                        r = t[1],
                        n = t[2];
                    return s === r && r === n ? 2 : s <= r && r <= n ? 0 : s < r && r > n ? 1 : s > r && r < n ? 3 : s >= r && r >= n ? 4 : 2
                },
                T = function(e) {
                    var t = e.height,
                        s = e.onUpdateHeight,
                        a = e.bodyShape,
                        i = e.onUpdateBodyShape,
                        l = (t || "").match(/([0-9]*) ft ?([0-9]*)? ?i?n?/),
                        c = l && l.length ? l[1] : "",
                        o = l && l.length ? l[2] : "",
                        d = (0, n.useState)([]),
                        u = d[0],
                        m = (d[1], (0, n.useState)(function(e) {
                            switch (e) {
                                case "Pear":
                                    return [30, 50, 70];
                                case "Apple":
                                    return [30, 50, 30];
                                case "Hourglass":
                                    return [50, 30, 50];
                                case "Inverted Triangle":
                                    return [70, 50, 30];
                                default:
                                    return [50, 50, 50]
                            }
                        }(a))),
                        p = m[0],
                        f = m[1];
                    return (0, n.useEffect)((function() {
                        i(F[P(p)].shape)
                    }), [p, i]), (0, r.jsxs)("div", {
                        className: "w-7xl center flex w-full max-w-3xl flex-col gap-4",
                        children: [(0, r.jsx)(D.gT, {
                            children: (0, r.jsx)(E, {
                                onSliderChange: function(e, t) {
                                    for (var s = [0, 0, 0], r = 0; r < 3; r++) s[r] = r === t ? e : p[r];
                                    f(s)
                                },
                                sliderValues: p
                            })
                        }), (0, r.jsx)(D.Ue, {
                            children: (0, r.jsx)("div", {
                                className: (0, Z.Z)("flex w-full flex-col md:flex-row md:gap-4"),
                                children: (0, r.jsxs)("div", {
                                    className: "w-full md:w-1/2",
                                    children: [(0, r.jsx)("div", {
                                        className: "text-md mt-4 font-bold uppercase",
                                        children: "Height"
                                    }), (0, r.jsxs)("div", {
                                        className: "grid w-full grid-cols-2 gap-4",
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex items-center border-2 border-gray-400 px-4 ".concat(u.includes("height") ? "border-red-700" : ""),
                                            children: [(0, r.jsx)("input", {
                                                type: "text",
                                                name: "height",
                                                value: c,
                                                onChange: function(e) {
                                                    s(e.target.value, o)
                                                },
                                                className: "mr-2 w-full border-transparent pl-0 text-left placeholder:text-gray-300 focus:border-transparent focus:ring-0",
                                                placeholder: "5"
                                            }), "FT"]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex items-center border-2 border-gray-400 px-4 ".concat(u.includes("height") ? "border-red-700" : ""),
                                            children: [(0, r.jsx)("input", {
                                                type: "text",
                                                name: "height",
                                                value: o,
                                                onChange: function(e) {
                                                    s(c, e.target.value)
                                                },
                                                className: "mr-2 w-full border-transparent pl-0 text-left placeholder:text-gray-300 focus:border-transparent focus:ring-0",
                                                placeholder: "4"
                                            }), "IN"]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                O = s(6849),
                W = function(e) {
                    var t = e.userData,
                        s = (0, n.useState)(t.height || ""),
                        a = s[0],
                        i = s[1],
                        l = (0, n.useState)(t.body_shape || ""),
                        o = l[0],
                        u = l[1],
                        m = (0, n.useState)(t.occupation || ""),
                        g = m[0],
                        x = m[1],
                        v = (0, n.useState)(t.other_preferences || ""),
                        j = v[0],
                        b = v[1],
                        y = (0, n.useState)(t.workplace_dresscode || ""),
                        w = y[0],
                        N = y[1],
                        k = (0, n.useState)(!1),
                        S = k[0],
                        _ = k[1],
                        C = (0, n.useState)(!1),
                        B = C[0],
                        D = C[1],
                        Z = function() {
                            var e = (0, c.Z)((function() {
                                return (0, d.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return _(!0), [4, (0, p.N)(t.id, {
                                                occupation: g,
                                                other_preferences: j,
                                                workplace_dresscode: w,
                                                body_shape: o,
                                                height: a
                                            })];
                                        case 1:
                                            return e.sent(), (0, h.L)("profile.edit_misc_tab", t.id, {
                                                occupation: g,
                                                other_preferences: j,
                                                workplace_dresscode: w,
                                                body_shape: o
                                            }), _(!1), D(!0), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, r.jsxs)("div", {
                        className: "flex w-full flex-col",
                        children: [(0, r.jsx)("div", {
                            children: "Occupation"
                        }), (0, r.jsx)("textarea", {
                            className: "w-full border-2 border-gray-300 p-2 md:mt-2",
                            placeholder: 'Such as "I work in consulting, wear business casual, and WFH on Fridays" or "Currently a full-time Mom"',
                            value: g,
                            onChange: function(e) {
                                return x(e.target.value)
                            }
                        }), (0, r.jsx)("div", {
                            className: "mt-6",
                            children: "Workplace & Weekday Dress Code"
                        }), (0, r.jsx)("select", {
                            className: "mt-4 border-2 border-gray-300 focus:border-black focus:outline-none focus:ring-0 ",
                            onChange: function(e) {
                                N(e.target.value)
                            },
                            placeholder: "Business professional",
                            value: w,
                            children: O.D.map((function(e, t) {
                                return (0, r.jsx)("option", {
                                    value: e,
                                    children: e
                                }, t)
                            }))
                        }), (0, r.jsx)("div", {
                            className: "mt-6",
                            children: "Personal Style Rules"
                        }), (0, r.jsx)("textarea", {
                            className: "w-full border-2 border-gray-300 p-2 md:mt-2",
                            placeholder: 'Such as "I dislike skinny jeans and tight pants", "I rarely wear prints" or "Never wear strapless"...',
                            value: j,
                            onChange: function(e) {
                                return b(e.target.value)
                            }
                        }), (0, r.jsx)("div", {
                            className: "mt-6",
                            children: "Body Shape"
                        }), (0, r.jsx)(T, {
                            height: a,
                            onUpdateHeight: function(e, t) {
                                i(null != t && "0" != t ? "".concat(e, " ft ").concat(t, " in") : "".concat(e, " ft"))
                            },
                            bodyShape: o,
                            onUpdateBodyShape: function(e) {
                                u(e)
                            }
                        }), (0, r.jsx)("div", {
                            className: "relative mt-8 bg-black px-4 py-2 text-center text-sm uppercase text-white hover:cursor-pointer",
                            onClick: function() {
                                return Z()
                            },
                            children: (0, r.jsxs)("div", {
                                className: "flex items-center justify-center",
                                children: [S && (0, r.jsx)("div", {
                                    className: "mr-3 inline-block",
                                    children: (0, r.jsx)(f.Z, {})
                                }), S ? "Updating preferences..." : B ? "Saved" : "Save preferences"]
                            })
                        })]
                    })
                },
                I = "animate-fade-in duration-500 ease-out bg-tts-white border-gray-900 text-gray-900 text-center cursor-pointer w-auto opacity-50 hover:opacity-100",
                U = "bg-[#E8F1FE] text-center cursor-pointer w-auto text-gray-500 border-[#5C9CF8]",
                L = ["Arms", "Shoulders", "Back", "Cleavage", "Waist", "Butt", "Legs", "No preference"],
                q = ["Arms", "Shoulders", "Back", "Cleavage", "Waist", "Butt", "Legs", "No preference"],
                A = function(e) {
                    var t = e.userData,
                        s = (t.height || "").match(/([0-9]*) ft ([0-9]*) in/),
                        a = (0, n.useState)(t.plus_size),
                        i = a[0],
                        l = a[1],
                        u = (0, n.useState)(t.petite),
                        m = u[0],
                        g = u[1],
                        x = (0, n.useState)(s && s.length ? s[1] : ""),
                        v = x[0],
                        j = x[1],
                        b = (0, n.useState)(s && s.length ? s[2] : ""),
                        y = b[0],
                        w = b[1],
                        N = (0, n.useState)(t.flaunt_body_parts || []),
                        k = N[0],
                        S = N[1],
                        _ = (0, n.useState)(t.avoid_body_parts || []),
                        C = _[0],
                        B = _[1],
                        D = (0, n.useState)(!1),
                        Z = D[0],
                        F = D[1],
                        E = (0, n.useState)(!1),
                        z = E[0],
                        P = E[1],
                        T = (0, n.useState)(!1),
                        O = T[0],
                        W = T[1],
                        A = function(e, t) {
                            var s = function(e, t) {
                                return e.includes(t)
                            };
                            if ("flaunt" === t)
                                if (s(k, e)) {
                                    var r = k.filter((function(t) {
                                        return t !== e
                                    }));
                                    S(r)
                                } else {
                                    var n = (0, o.Z)(k);
                                    n.push(e), S(n)
                                }
                            else if ("avoid" === t)
                                if (s(C, e)) {
                                    var a = C.filter((function(t) {
                                        return t !== e
                                    }));
                                    B(a)
                                } else {
                                    var i = (0, o.Z)(C);
                                    i.push(e), B(i)
                                }
                        },
                        H = function(e) {
                            "petite" === e && g((function(e) {
                                return !e
                            })), "plusSize" === e && l((function(e) {
                                return !e
                            }))
                        },
                        M = function() {
                            var e = (0, c.Z)((function() {
                                var e;
                                return (0, d.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return e = v && y ? "".concat(v, " ft ").concat(y, " in") : "".concat(v, " ft"), F(!0), [4, (0, p.N)(t.id, {
                                                petite: m,
                                                plus_size: i,
                                                height: e,
                                                avoid_body_parts: C,
                                                flaunt_body_parts: k
                                            })];
                                        case 1:
                                            return s.sent(), (0, h.L)("profile.edit_physique_tab", t.id), F(!1), P(!0), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                            className: "flex flex-col items-center gap-4 sm:flex-row",
                            children: [(0, r.jsxs)("label", {
                                children: ["Height:", (0, r.jsx)("input", {
                                    type: "text",
                                    name: "height",
                                    value: v,
                                    onChange: function(e) {
                                        j(e.target.value)
                                    },
                                    className: "mx-2 w-14 border-2 text-center placeholder:text-gray-300",
                                    placeholder: "5"
                                }), "ft", (0, r.jsx)("input", {
                                    type: "text",
                                    name: "height",
                                    value: y,
                                    onChange: function(e) {
                                        w(e.target.value)
                                    },
                                    className: "mx-2 w-14 border-2 text-center placeholder:text-gray-300",
                                    placeholder: "4"
                                }), "in"]
                            }), (0, r.jsx)("div", {
                                className: "flex items-center",
                                children: (0, r.jsxs)("div", {
                                    className: "flex flex-row gap-4",
                                    children: [(0, r.jsx)("div", {
                                        className: "flex items-center",
                                        children: (0, r.jsxs)("label", {
                                            className: "text-md flex items-center text-gray-900 dark:text-gray-300 sm:ml-2",
                                            children: [(0, r.jsx)("input", {
                                                name: "plusSize",
                                                type: "checkbox",
                                                checked: i,
                                                onChange: function() {
                                                    return H("plusSize")
                                                },
                                                className: "focus:ring-black-500 dark:focus:ring-black-600 peer mr-2 h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 sm:mr-4"
                                            }), (0, r.jsx)("div", {
                                                className: i ? "text-black" : "text-gray-300",
                                                children: "Plus size"
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "flex items-center",
                                        children: (0, r.jsxs)("label", {
                                            className: "text-md flex items-center text-gray-900 dark:text-gray-300 sm:ml-2",
                                            children: [(0, r.jsx)("input", {
                                                name: "petite",
                                                type: "checkbox",
                                                checked: m,
                                                onChange: function() {
                                                    return H("petite")
                                                },
                                                className: "focus:ring-black-500 dark:focus:ring-black-600 peer mr-2 h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 sm:mr-4"
                                            }), (0, r.jsx)("div", {
                                                className: m ? "text-black" : "text-gray-300",
                                                children: "Petite"
                                            })]
                                        })
                                    })]
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "mt-8 md:mt-16",
                            children: "Body Parts to Flaunt"
                        }), (0, r.jsx)("div", {
                            className: "grid grid-cols-2 gap-4 md:mt-4 md:grid-cols-4",
                            children: L.map((function(e, t) {
                                var s = k.includes(e) ? U : I;
                                return (0, r.jsx)("div", {
                                    onClick: function() {
                                        return A(e, "flaunt")
                                    },
                                    className: "".concat(s, " w-40 border-2 border-solid p-2 text-center font-body"),
                                    children: (0, r.jsx)("p", {
                                        children: e
                                    })
                                }, t)
                            }))
                        }), (0, r.jsx)("div", {
                            className: "mt-8 md:mt-16",
                            children: "Body Parts to Avoid Showcasing"
                        }), (0, r.jsx)("div", {
                            className: "grid grid-cols-2 gap-4 md:mt-4 md:grid-cols-4",
                            children: q.map((function(e, t) {
                                var s = C.includes(e) ? U : I;
                                return (0, r.jsx)("div", {
                                    onClick: function() {
                                        return A(e, "avoid")
                                    },
                                    className: "".concat(s, " w-40 border-2 border-solid p-2 text-center font-body"),
                                    children: (0, r.jsx)("p", {
                                        children: e
                                    })
                                }, t)
                            }))
                        }), O ? (0, r.jsx)("div", {
                            className: "mt-8 w-full text-center font-light text-red-500",
                            children: "Please complete entering your height"
                        }) : (0, r.jsx)("div", {
                            className: "mt-8"
                        }), (0, r.jsx)("div", {
                            className: "relative bg-black px-4 py-2 text-center text-sm uppercase text-white hover:cursor-pointer",
                            onClick: function() {
                                0 === function() {
                                    var e = [];
                                    return v || e.push(v), y || e.push(y), e
                                }().length ? (W(!1), M()) : W(!0)
                            },
                            children: (0, r.jsxs)("div", {
                                className: "flex items-center justify-center",
                                children: [Z && (0, r.jsx)("div", {
                                    className: "mr-3 inline-block",
                                    children: (0, r.jsx)(f.Z, {})
                                }), Z ? "Updating preferences..." : z ? "Saved" : "Save preferences"]
                            })
                        })]
                    })
                };
            s(86042);
            var H = function(e, t, s) {
                    var r = {};
                    return e.filter((function(e) {
                        return e.event === t && ("Both" === s || e.gender === s)
                    })).reduce((function(e, t) {
                        var s = "".concat(t.event, "_").concat(t.style);
                        return r[s] || (r[s] = t, e.push({
                            name: t.style,
                            image: t.image_url
                        })), e
                    }), [])
                },
                M = "animate-fade-in duration-500 ease-out bg-tts-white border-gray-900 text-gray-900 text-center cursor-pointer w-auto",
                $ = "bg-[#E8F1FE] text-center cursor-pointer w-auto text-gray-500 border-[#5C9CF8]",
                R = function(e) {
                    var t, s = e.userData,
                        a = (0, n.useState)(null !== (t = s.gender) && void 0 !== t ? t : "Both"),
                        i = a[0],
                        l = a[1],
                        u = (0, n.useState)([]),
                        m = u[0],
                        g = u[1],
                        x = (0, n.useState)([]),
                        v = x[0],
                        j = x[1],
                        b = (0, n.useState)([]),
                        y = b[0],
                        w = b[1],
                        N = (0, n.useState)([]),
                        k = N[0],
                        S = N[1],
                        _ = (0, n.useState)([]),
                        C = _[0],
                        B = _[1],
                        D = (0, n.useState)(s.plus_size),
                        Z = D[0],
                        F = D[1],
                        E = (0, n.useState)(s.petite),
                        z = E[0],
                        P = E[1],
                        T = (0, n.useState)(!1),
                        O = T[0],
                        W = T[1],
                        I = (0, n.useState)(!1),
                        U = I[0],
                        L = I[1],
                        q = (0, n.useState)(s.style_feedback || []),
                        A = q[0],
                        R = q[1];
                    (0, n.useEffect)((function() {
                        var e = function() {
                            var e = (0, c.Z)((function() {
                                var e, t;
                                return (0, d.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return s.trys.push([0, 3, , 4]), [4, fetch("/api/onboarding/styles", {
                                                method: "GET"
                                            })];
                                        case 1:
                                            if (!(e = s.sent()).ok) throw new Error("Error fetching styles from supabase");
                                            return [4, e.json()];
                                        case 2:
                                            return t = s.sent(), g(t), [3, 4];
                                        case 3:
                                            return s.sent(), console.error("Error fetching related data"), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), []), (0, n.useEffect)((function() {
                        m.length > 0 && (j(H(m, "Everyday", i)), w(H(m, "Professional", i)), S(H(m, "Dates & Nights Out", i)), B(H(m, "Black Tie", i)))
                    }), [m]);
                    var G = function(e, t) {
                            var s = A.findIndex((function(e) {
                                return e.event === t
                            }));
                            if (s > -1) {
                                var r = A[s],
                                    n = r.event,
                                    a = r.styles;
                                if (a.includes(e)) {
                                    var i = a.filter((function(t) {
                                            return t !== e
                                        })),
                                        l = A.map((function(e) {
                                            return e.event === n ? {
                                                event: n,
                                                styles: i
                                            } : e
                                        }));
                                    R(l)
                                } else {
                                    var c = (0, o.Z)(a);
                                    c.push(e);
                                    var d = A.map((function(e) {
                                        return e.event === n ? {
                                            event: n,
                                            styles: c
                                        } : e
                                    }));
                                    R(d)
                                }
                            } else {
                                var u = (0, o.Z)(A);
                                u.push({
                                    event: t,
                                    styles: [e]
                                }), R(u)
                            }
                        },
                        K = function() {
                            var e = (0, c.Z)((function() {
                                return (0, d.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return W(!0), [4, (0, p.N)(s.id, {
                                                style_feedback: A,
                                                gender: i,
                                                plus_size: Z,
                                                petite: z
                                            })];
                                        case 1:
                                            return e.sent(), (0, h.L)("profile.edit_styles_tab", s.id), W(!1), L(!0), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, r.jsxs)("div", {
                        className: "flex w-full flex-col",
                        children: [(0, r.jsxs)("section", {
                            className: "mb-4 flex w-full flex-col gap-3",
                            children: [(0, r.jsx)("p", {
                                children: "I generally wear"
                            }), (0, r.jsxs)("div", {
                                className: "mb-4 flex w-full gap-3",
                                children: [(0, r.jsx)("div", {
                                    onClick: function() {
                                        return l("Menswear")
                                    },
                                    className: "".concat("Menswear" === i ? $ : M, " w-40 border-2 border-solid p-2 text-center font-body"),
                                    children: (0, r.jsx)("p", {
                                        children: "Menswear"
                                    })
                                }), (0, r.jsx)("div", {
                                    onClick: function() {
                                        return l("Womenswear")
                                    },
                                    className: "".concat("Womenswear" === i ? $ : M, " w-40 border-2 border-solid p-2 text-center font-body"),
                                    children: (0, r.jsx)("p", {
                                        children: "Womenswear"
                                    })
                                }), (0, r.jsx)("div", {
                                    onClick: function() {
                                        return l("Both")
                                    },
                                    className: "".concat("Both" === i ? $ : M, " w-40 border-2 border-solid p-2 text-center font-body"),
                                    children: (0, r.jsx)("p", {
                                        children: "Both"
                                    })
                                })]
                            }), (0, r.jsx)("p", {
                                children: "I am (optional)"
                            }), (0, r.jsxs)("div", {
                                className: "mb-4 flex w-full gap-3",
                                children: [(0, r.jsx)("div", {
                                    onClick: function() {
                                        return P((function(e) {
                                            return !e
                                        }))
                                    },
                                    className: "".concat(z ? $ : M, " w-40 border-2 border-solid p-2 text-center font-body"),
                                    children: (0, r.jsx)("p", {
                                        children: "Petite"
                                    })
                                }), (0, r.jsx)("div", {
                                    onClick: function() {
                                        return F((function(e) {
                                            return !e
                                        }))
                                    },
                                    className: "".concat(Z ? $ : M, " w-40 border-2 border-solid p-2 text-center font-body"),
                                    children: (0, r.jsx)("p", {
                                        children: "Plus size"
                                    })
                                })]
                            })]
                        }), (0, r.jsx)("p", {
                            children: "Everyday"
                        }), (0, r.jsx)("div", {
                            className: "mt-8 grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3",
                            children: v.map((function(e, t) {
                                var s = A.some((function(t) {
                                    return "Everyday" === t.event && t.styles.includes(e.name)
                                })) ? $ : M;
                                return (0, r.jsxs)("div", {
                                    onClick: function() {
                                        G(e.name, "Everyday")
                                    },
                                    className: "".concat(s, " flex w-full flex-col border-2 border-solid p-2 text-center font-body"),
                                    children: [(0, r.jsx)("p", {
                                        children: e.name
                                    }), (0, r.jsx)("img", {
                                        src: e.image,
                                        alt: e.name
                                    })]
                                }, t)
                            }))
                        }), (0, r.jsx)("div", {
                            className: "mt-8 md:mt-16",
                            children: "Professional"
                        }), (0, r.jsx)("div", {
                            className: "mt-8 grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3",
                            children: y.map((function(e, t) {
                                var s = A.some((function(t) {
                                    return "Professional" === t.event && t.styles.includes(e.name)
                                })) ? $ : M;
                                return (0, r.jsxs)("div", {
                                    onClick: function() {
                                        G(e.name, "Professional")
                                    },
                                    className: "".concat(s, " w-full border-2 border-solid p-2 text-center font-body"),
                                    children: [(0, r.jsx)("p", {
                                        children: e.name
                                    }), (0, r.jsx)("img", {
                                        src: e.image,
                                        alt: e.name
                                    })]
                                }, t)
                            }))
                        }), (0, r.jsx)("div", {
                            className: "mt-8 md:mt-16",
                            children: "Dates & nights out"
                        }), (0, r.jsx)("div", {
                            className: "mt-8 grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3",
                            children: k.map((function(e, t) {
                                var s = A.some((function(t) {
                                    return "Dates & Nights Out" === t.event && t.styles.includes(e.name)
                                })) ? $ : M;
                                return (0, r.jsxs)("div", {
                                    onClick: function() {
                                        G(e.name, "Dates & Nights Out")
                                    },
                                    className: "".concat(s, " w-full border-2 border-solid p-2 text-center font-body"),
                                    children: [(0, r.jsx)("p", {
                                        children: e.name
                                    }), (0, r.jsx)("img", {
                                        src: e.image,
                                        alt: e.name
                                    })]
                                }, t)
                            }))
                        }), C.length > 0 && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: "mt-8 md:mt-16",
                                children: "Black tie"
                            }), (0, r.jsx)("div", {
                                className: "mt-8 grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3",
                                children: C.map((function(e, t) {
                                    var s = A.some((function(t) {
                                        return "Black Tie" === t.event && t.styles.includes(e.name)
                                    })) ? $ : M;
                                    return (0, r.jsxs)("div", {
                                        onClick: function() {
                                            G(e.name, "Black Tie")
                                        },
                                        className: "".concat(s, " w-full border-2 border-solid p-2 text-center font-body"),
                                        children: [(0, r.jsx)("p", {
                                            children: e.name
                                        }), (0, r.jsx)("img", {
                                            src: e.image,
                                            alt: e.name
                                        })]
                                    }, t)
                                }))
                            })]
                        }), (0, r.jsx)("div", {
                            className: "relative mt-8 bg-black px-4 py-2 text-center text-sm uppercase text-white hover:cursor-pointer",
                            onClick: function() {
                                return K()
                            },
                            children: (0, r.jsxs)("div", {
                                className: "flex items-center justify-center",
                                children: [O && (0, r.jsx)("div", {
                                    className: "mr-3 inline-block",
                                    children: (0, r.jsx)(f.Z, {})
                                }), O ? "Updating preferences..." : U ? "Saved" : "Save preferences"]
                            })
                        })]
                    })
                },
                G = s(31618),
                K = function(e) {
                    var t = e.label,
                        s = e.children;
                    return (0, r.jsxs)("div", {
                        className: "flex w-full flex-col gap-2 px-4 sm:w-[225px] sm:px-0",
                        children: [(0, r.jsx)("div", {
                            className: "text-xs uppercase text-gray-400",
                            children: t
                        }), s]
                    })
                },
                J = function(e) {
                    var t = e.selectedDivider,
                        s = e.title,
                        n = e.icon,
                        i = e.onClick;
                    return (0, r.jsxs)("div", {
                        className: (0, Z.Z)("flex w-full items-center justify-between py-2 hover:cursor-pointer sm:border-l-[2px] sm:pl-2", t === s ? "border-black" : "border-white"),
                        onClick: function() {
                            return i(s)
                        },
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [(0, r.jsx)("div", {
                                children: n
                            }), (0, r.jsx)("div", {
                                className: "text-left text-sm",
                                children: s
                            })]
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsx)(a.lU2, {
                                size: "1.5rem"
                            })
                        })]
                    })
                },
                V = function(e) {
                    var t = e.selectedDivider;
                    return (0, r.jsx)("div", {
                        className: "flex max-h-[60vh] grow flex-col overflow-scroll p-12 pt-0",
                        children: (0, r.jsx)(Y, {
                            selectedDivider: t
                        })
                    })
                },
                X = function(e) {
                    var t = e.selectedDivider,
                        s = e.isOpen,
                        n = e.setIsOpen;
                    return (0, r.jsx)(r.Fragment, {
                        children: s && (0, r.jsxs)("div", {
                            className: "absolute z-10 flex w-full grow flex-col bg-white p-3",
                            children: [(0, r.jsxs)("div", {
                                className: "grid-3 flex w-full flex-row items-center",
                                children: [(0, r.jsx)("div", {
                                    className: "w-1/3"
                                }), (0, r.jsx)("div", {
                                    className: "w-1/3 whitespace-nowrap text-center text-base font-bold",
                                    children: t
                                }), (0, r.jsx)("div", {
                                    className: "flex w-1/3 justify-end",
                                    children: (0, r.jsx)("div", {
                                        className: "hover:cursor-pointer",
                                        onClick: function() {
                                            return n(!1)
                                        },
                                        children: (0, r.jsx)(a.czh, {
                                            size: "2rem"
                                        })
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "h-[calc(100vh-225px)] overflow-scroll pb-20",
                                children: (0, r.jsx)(Y, {
                                    selectedDivider: t
                                })
                            })]
                        })
                    })
                },
                Y = function(e) {
                    var t = e.selectedDivider,
                        s = (0, n.useContext)(G.St);
                    return s ? "Physique" === t ? (0, r.jsx)(A, {
                        userData: s
                    }) : "Styles" === t ? (0, r.jsx)(R, {
                        userData: s
                    }) : "Items preference" === t ? (0, r.jsx)(_, {
                        userData: s
                    }) : "Budget & brands" === t ? (0, r.jsx)(j, {
                        userData: s
                    }) : "Misc." === t ? (0, r.jsx)(W, {
                        userData: s
                    }) : (0, r.jsx)("div", {
                        children: "Error"
                    }) : null
                },
                Q = function() {
                    var e = (0, n.useState)("Styles"),
                        t = e[0],
                        s = e[1],
                        c = (0, n.useState)(!1),
                        o = c[0],
                        d = c[1],
                        u = (0, l.Z)().width,
                        m = function(e) {
                            s(e), u < 640 && d(!0)
                        };
                    return (0, r.jsxs)("div", {
                        className: "flex w-full max-w-[600px] flex-col items-center sm:max-w-[1000px]",
                        children: [(0, r.jsxs)("div", {
                            className: "grid-3 w-full border-b-[1px] pb-4 text-center text-lg font-bold uppercase md:mb-6",
                            children: [(0, r.jsx)(i.Z, {
                                showText: !1
                            }), (0, r.jsx)("div", {
                                children: "Edit preferences"
                            }), (0, r.jsx)("div", {})]
                        }), (0, r.jsxs)("div", {
                            className: "flex w-full",
                            children: [(0, r.jsx)("div", {
                                className: "w-full sm:w-1/4",
                                children: (0, r.jsxs)(K, {
                                    label: "Your preferences",
                                    children: [(0, r.jsx)(J, {
                                        selectedDivider: t,
                                        title: "Styles",
                                        icon: (0, r.jsx)(a.RwX, {
                                            size: "1.5rem"
                                        }),
                                        onClick: m
                                    }), (0, r.jsx)(J, {
                                        selectedDivider: t,
                                        title: "Items preference",
                                        icon: (0, r.jsx)(a.FhD, {
                                            size: "1.5rem"
                                        }),
                                        onClick: m
                                    }), (0, r.jsx)(J, {
                                        selectedDivider: t,
                                        title: "Budget & brands",
                                        icon: (0, r.jsx)(a.QlY, {
                                            size: "1.5rem"
                                        }),
                                        onClick: m
                                    }), (0, r.jsx)(J, {
                                        selectedDivider: t,
                                        title: "Misc.",
                                        icon: (0, r.jsx)(a.rjU, {
                                            size: "1.5rem"
                                        }),
                                        onClick: m
                                    })]
                                })
                            }), u >= 640 && (0, r.jsx)("div", {
                                className: "w-3/4",
                                children: (0, r.jsx)(V, {
                                    selectedDivider: t
                                })
                            }), u < 640 && (0, r.jsx)(X, {
                                isOpen: o,
                                setIsOpen: d,
                                selectedDivider: t
                            })]
                        })]
                    })
                },
                ee = function() {
                    var e = (0, n.useContext)(G.St);
                    return (0, r.jsx)("div", {
                        className: "-mt-[60px] flex w-full flex-col items-center justify-center gap-4",
                        children: e ? (0, r.jsx)(Q, {}) : (0, r.jsx)("div", {
                            children: "User not found"
                        })
                    })
                }
        }
    },
    function(e) {
        e.O(0, [9415, 9774, 2888, 179], (function() {
            return t = 37868, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);