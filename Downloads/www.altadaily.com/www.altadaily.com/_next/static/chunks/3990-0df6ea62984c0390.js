"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3990], {
        38824: function(e, t, r) {
            r.d(t, {
                ad: function() {
                    return d
                },
                mV: function() {
                    return m
                }
            });
            var n = r(29815),
                s = r(47568),
                a = r(70655),
                i = r(8332),
                o = r(66739),
                l = new i.Client({
                    project_id: "project-live-7d92e592-3a5f-4727-ba3d-f285a186dc98",
                    secret: "secret-live-kPswEpjTo2XvQbJbq1j9cTuq2XZeyj-oPCA=",
                    env: "https://api.stytch.com/"
                }),
                c = function(e) {
                    return l.sessions.authenticateJwt(e).then((function(e) {
                        var t, r = e.session.authentication_factors.find((function(e) {
                                return "otp" === e.type
                            })),
                            n = null === r || void 0 === r || null === (t = r.phone_number_factor) || void 0 === t ? void 0 : t.phone_number;
                        if (!n) return null;
                        var s = e.session.user_id;
                        return s ? {
                            stytchId: s,
                            phoneNumber: n
                        } : null
                    })).catch((function() {
                        return null
                    }))
                },
                u = (function() {
                    var e = (0, s.Z)((function(e) {
                        var t, r, n, s;
                        return (0, a.__generator)(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return e ? [4, c(e)] : [2, null];
                                case 1:
                                    return (t = a.sent()) ? [4, o.Z.from("users").select().eq("phone_number", t.phoneNumber).limit(1)] : [2, null];
                                case 2:
                                    return r = a.sent(), n = r.data, r.error || 0 === n.length ? [2, null] : (s = n[0]).stytch_id == t.stytchId || t.stytchId.startsWith("user-test-") ? [3, 4] : [4, o.Z.from("users").update({
                                        stytch_id: t.stytchId
                                    }).eq("id", s.id)];
                                case 3:
                                    a.sent(), a.label = 4;
                                case 4:
                                    return [2, s.id]
                            }
                        }))
                    }))
                }(), {
                    "bright green": ["green"],
                    "light green": ["green"],
                    "olive green": ["olive green"],
                    "dark green": ["green"],
                    "blue green": ["blue", "green"],
                    white: ["white"],
                    diamond: ["diamond"],
                    silver: ["silver"],
                    gold: ["gold"],
                    cream: ["beige"],
                    "red brown": ["brown"],
                    "orange brown": ["caramel"],
                    "light brown": ["tan"],
                    brown: ["brown"],
                    "nude pink": ["pink", "tan"],
                    "dark brown": ["brown"],
                    red: ["red"],
                    coral: ["red"],
                    orange: ["orange"],
                    "bright orange": ["orange"],
                    "bright blue": ["blue"],
                    "light blue": ["blue"],
                    navy: ["navy"],
                    blue: ["blue"],
                    "blue gray": ["blue"],
                    "light gray": ["gray"],
                    "dark gray": ["gray"],
                    "brown gray": ["gray"],
                    "light yellow": ["yellow"],
                    "mustard yellow": ["yellow"],
                    "bright yellow": ["yellow"],
                    "gray pink": ["pink"],
                    "light pink": ["pink"],
                    magenta: ["magenta"],
                    "rose gold": ["rose gold"],
                    "dark purple": ["purple"],
                    purple: ["purple"],
                    "bright purple": ["purple"],
                    lavender: ["purple"],
                    black: ["black"],
                    gray: ["gray"],
                    green: ["green"],
                    yellow: ["yellow"],
                    pink: ["pink"],
                    beige: ["beige"],
                    maroon: ["maroon"]
                });
            var d = function(e) {
                    return e.map((function(e) {
                        var t, r, s, a, i, o, l, c, d, m, f, p, x = e.img_url,
                            h = null !== (t = e.rmbg_url) && void 0 !== t ? t : null,
                            g = e.url,
                            b = null !== (r = e.original_img_url) && void 0 !== r ? r : null,
                            v = e.source,
                            j = e.brand,
                            w = e.name,
                            y = e.category,
                            k = null !== (s = e.score) && void 0 !== s ? s : null,
                            N = null !== (a = e.recommended_text) && void 0 !== a ? a : null,
                            _ = null !== (i = e.seasons) && void 0 !== i ? i : null,
                            C = null !== (o = e.colors) && void 0 !== o ? o : null,
                            Z = null !== (l = e.dress_codes) && void 0 !== l ? l : null,
                            S = null !== (c = e.retail_price) && void 0 !== c ? c : null,
                            I = null !== (d = e.sale_price) && void 0 !== d ? d : null,
                            T = null !== (m = e.stylist_notes) && void 0 !== m ? m : null;
                        return e.colors && (C = (0, n.Z)(new Set(e.colors.map((function(e) {
                            return u[e] || [e]
                        })).flat()))), {
                            productId: "closet" !== v ? e.id : null,
                            id: "closet" === v ? null !== (p = null !== (f = e.closet_id) && void 0 !== f ? f : e.item_id) && void 0 !== p ? p : e.id : null,
                            backgroundRemovedImageUrl: h,
                            imageSrc: x,
                            imageAlt: x,
                            userUploadedImage: b,
                            from: v,
                            productImages: [{
                                imageSrc: x,
                                link: g
                            }],
                            brand: j,
                            name: w,
                            category: y,
                            score: k,
                            caption: N,
                            seasons: _,
                            colors: C,
                            dressCodes: Z,
                            retailPrice: S,
                            salePrice: I,
                            stylistNotes: T
                        }
                    }))
                },
                m = function(e) {
                    return e.map((function(e) {
                        return {
                            outfit: f(e.outfit_pieces),
                            style: e.style,
                            stylistNotes: e.stylist_notes,
                            outfitId: e.id,
                            collageImageUrl: e.collage_image_url,
                            createdDate: e.start_date_of_week,
                            type: e.type
                        }
                    }))
                },
                f = function(e) {
                    return e.map((function(e) {
                        var t = e.source,
                            r = e.brand,
                            n = e.id,
                            s = e.item_id,
                            a = e.name,
                            i = e.url,
                            o = e.category,
                            l = e.img_url,
                            c = e.rmbg_url;
                        return {
                            productId: n,
                            id: s,
                            backgroundRemovedImageUrl: "closet" === t && null !== c && void 0 !== c ? c : l,
                            imageSrc: l,
                            imageAlt: l,
                            from: t,
                            productImages: [{
                                imageSrc: l,
                                link: i
                            }],
                            brand: r,
                            name: a,
                            category: o,
                            seasons: e.seasons,
                            colors: e.colors,
                            dressCodes: e.dress_codes,
                            salePrice: e.sale_price,
                            retailPrice: e.retail_price
                        }
                    }))
                }
        },
        52693: function(e, t, r) {
            r.d(t, {
                NQ: function() {
                    return l
                },
                Yn: function() {
                    return i
                },
                tp: function() {
                    return o
                }
            });
            var n = r(47568),
                s = r(70655),
                a = r(6154),
                i = function(e) {
                    return e && e.includes("redirect.viglink.com")
                },
                o = function(e) {
                    return "http://redirect.viglink.com?u=".concat(encodeURIComponent(e), "&key=").concat("8676951c884e691aace391460814784f")
                },
                l = function() {
                    var e = (0, n.Z)((function(e, t, r) {
                        var n, i, o;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, 3, 4]), r(!0), [4, a.Z.get("api/price", {
                                        params: {
                                            url: e
                                        }
                                    })];
                                case 1:
                                    if (n = s.sent(), i = n.data, 200 !== n.status) throw new Error("Could not get price from retailer url");
                                    return t(i.toString()), [3, 4];
                                case 2:
                                    return o = s.sent(), console.error("Error fetching data:", o), [2, null];
                                case 3:
                                    return r(!1), [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        92046: function(e, t, r) {
            var n, s = r(47568),
                a = r(14924),
                i = r(26042),
                o = r(69396),
                l = r(70655),
                c = r(85893),
                u = r(6154),
                d = r(11163),
                m = r(67294),
                f = r(47516),
                p = r(91383),
                x = r(81400),
                h = r(8002),
                g = r(68239),
                b = r(59081),
                v = r(27037),
                j = r(51667),
                w = r(52693);
            ! function(e) {
                e.HIDE_PIECE = "\ud83d\udc4e Dislike this piece", e.ADD_TO_WISHLIST = "\u2764\ufe0f Add to Wishlist", e.ADD_TO_CLOSET = "I have This"
            }(n || (n = {}));
            t.Z = function(e) {
                var t = e.context,
                    r = e.product,
                    y = e.userData,
                    k = e.isModalOpen,
                    N = e.setIsModalOpen,
                    _ = e.event,
                    C = e.regenerateProductAfterDislike,
                    Z = e.setIsRegeneratingNewOutfitAfterDislike,
                    S = r.name,
                    I = r.brand,
                    T = r.imageSrc,
                    O = r.productImages[0].link,
                    D = r.productId,
                    A = "closet" === r.from,
                    E = r.category,
                    F = _,
                    L = (0, m.useState)(""),
                    P = L[0],
                    R = L[1],
                    z = (0, m.useState)(),
                    U = z[0],
                    M = z[1],
                    W = (0, m.useState)({
                        ADD_WISHLIST: "initial",
                        HIDE_PIECE: "initial",
                        ADD_CLOSET: "initial"
                    }),
                    B = W[0],
                    H = W[1],
                    q = (0, d.useRouter)(),
                    Y = (0, m.useContext)(p.F).dispatch,
                    G = (0, h.w)().showSnackbar,
                    V = function(e, t) {
                        H((0, o.Z)((0, i.Z)({}, B), (0, a.Z)({}, e, t)))
                    },
                    J = function() {
                        R(""), M(void 0), H({
                            ADD_WISHLIST: "initial",
                            HIDE_PIECE: "initial",
                            ADD_CLOSET: "initial"
                        }), N(!1)
                    },
                    Q = function() {
                        var e = (0, s.Z)((function(e) {
                            return (0, l.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return Z && Z(!0), C ? [4, C(e)] : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return Z && Z(!1), [2]
                                }
                            }))
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    K = function() {
                        var e = (0, s.Z)((function() {
                            return (0, l.__generator)(this, (function(e) {
                                return y && (0, v.L)("".concat(t, ".disliked_piece.clicked"), y.id, {
                                    disliked_piece_name: S,
                                    feedback: P,
                                    raw_query: F
                                }), V("HIDE_PIECE", "loading"), G("Thanks for your feedback, Alta is learning your style \u2728"), u.Z.post("/api/feedback", {
                                    user_id: null === y || void 0 === y ? void 0 : y.id,
                                    product_name: S,
                                    feedback: P,
                                    raw_query: F,
                                    event: 'clicked "Dislike this piece"'
                                }).then(function() {
                                    var e = (0, s.Z)((function(e) {
                                        return (0, l.__generator)(this, (function(t) {
                                            return 200 === e.status ? (V("HIDE_PIECE", "success"), J()) : V("HIDE_PIECE", "error"), [2]
                                        }))
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()).catch((function() {
                                    V("HIDE_PIECE", "error")
                                })), [2]
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    X = function() {
                        var e = (0, s.Z)((function() {
                            return (0, l.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return V("ADD_WISHLIST", "loading"), y ? (Y({
                                            type: x.uX.ADD_TO_TOAST_STACK,
                                            payload: {
                                                item: r,
                                                key: (new Date).getTime()
                                            }
                                        }), [4, u.Z.post("/api/wishlists", {
                                            user_id: y.id,
                                            product_image: T,
                                            product_url: O,
                                            product_name: S,
                                            product_brand: I,
                                            product_id: D,
                                            category: E,
                                            notify_motion: !1
                                        })]) : [3, 2];
                                    case 1:
                                        200 != e.sent().status ? V("ADD_WISHLIST", "error") : (V("ADD_WISHLIST", "success"), N(!1)), u.Z.post("/api/fastWishlistingFromProductModal", {
                                            product_name: S,
                                            search_query: F,
                                            product_brand: I
                                        }), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    $ = function() {
                        var e = (0, s.Z)((function() {
                            return (0, l.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return V("ADD_CLOSET", "loading"), y ? (Y({
                                            type: x.uX.ADD_TO_TOAST_STACK,
                                            payload: {
                                                item: r,
                                                key: (new Date).getTime()
                                            }
                                        }), [4, u.Z.post("/api/uploadClosetDirect", {
                                            id: y.id,
                                            images: [T],
                                            names: [S],
                                            categories: [E],
                                            brands: [I],
                                            uploadMethod: "Clicked catalog item"
                                        })]) : [3, 2];
                                    case 1:
                                        200 != e.sent().status ? (V("ADD_CLOSET", "error"), I && u.Z.post("/api/favoriteBrand", {
                                            product_brand: I
                                        })) : (V("ADD_CLOSET", "success"), N(!1)), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ee = function(e) {
                        e === n.ADD_TO_WISHLIST && (y && (0, v.L)("".concat(t, ".add_to_wishlist.clicked"), y.id), X(), G("Added to your wishlist, Alta will text you when the price drops\u2728")), e === n.ADD_TO_CLOSET && (y && (0, v.L)("".concat(t, ".i_own_this.clicked"), y.id, {
                            item: S,
                            brand: I
                        }), $()), M(e)
                    };
                return (0, m.useEffect)((function() {
                    var e = function() {
                        var e = (0, s.Z)((function() {
                            var e, t;
                            return (0, l.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return y ? [4, V("ADD_WISHLIST", "loading")] : [3, 3];
                                    case 1:
                                        return n.sent(), e = r.productImages, [4, u.Z.get("/api/wishlists?product_image=".concat(e[0].imageSrc))];
                                    case 2:
                                        return [2, 200 == (t = n.sent()).status && t.data.length];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e().then((function(e) {
                        V("ADD_WISHLIST", e && e > 0 ? "added" : "initial")
                    }))
                }), [r, k]), (0, c.jsxs)(b.Z, {
                    open: k,
                    setOpen: function() {
                        return J()
                    },
                    children: [(0, c.jsx)("div", {
                        className: "flex items-center justify-center py-3",
                        children: (0, c.jsx)("img", {
                            src: T,
                            className: "aspect-square w-full object-contain",
                            alt: T
                        })
                    }), (0, c.jsx)("h1", {
                        className: "text-base font-medium uppercase",
                        children: I
                    }), (0, c.jsx)("p", {
                        className: "text-sm font-light",
                        children: A ? "Category: " + E : S
                    }), (0, c.jsxs)("div", {
                        className: "mt-4 flex w-full flex-col",
                        children: [y && !A && (0, c.jsxs)("div", {
                            className: "grid max-h-[50px] grid-cols-3 gap-2",
                            children: [(0, c.jsx)("div", {
                                className: "w-full",
                                children: (0, c.jsx)("button", {
                                    className: (0, j.Z)("h-full w-full border border-gray-700 py-2 text-xs uppercase tracking-wide focus:outline-none", U === n.HIDE_PIECE && "bg-black text-white"),
                                    onClick: function() {
                                        return ee(n.HIDE_PIECE)
                                    },
                                    children: n.HIDE_PIECE
                                })
                            }), (0, c.jsx)("div", {
                                className: "h-full w-full",
                                children: (0, c.jsxs)("button", {
                                    className: (0, j.Z)("h-full w-full border border-gray-700 py-2 text-xs uppercase tracking-wide focus:outline-none", U === n.ADD_TO_WISHLIST && "bg-black text-white"),
                                    onClick: function() {
                                        return ee(n.ADD_TO_WISHLIST)
                                    },
                                    disabled: ["loading", "success", "added"].includes(B.ADD_WISHLIST),
                                    children: ["loading" === B.ADD_WISHLIST && (0, c.jsx)("div", {
                                        className: "m-auto inline-block",
                                        children: (0, c.jsx)(g.Z, {
                                            size: "12px"
                                        })
                                    }), "error" === B.ADD_WISHLIST && "try again", "success" === B.ADD_WISHLIST && "added!", "initial" === B.ADD_WISHLIST && n.ADD_TO_WISHLIST, "added" === B.ADD_WISHLIST && "in wishlist"]
                                })
                            }), (0, c.jsx)("div", {
                                className: "h-full w-full items-center",
                                children: (0, c.jsxs)("button", {
                                    className: (0, j.Z)("h-full w-full border border-gray-700 py-2 text-xs uppercase tracking-wide transition-colors duration-200 hover:bg-gray-100 focus:outline-none", U === n.ADD_TO_CLOSET && "bg-black text-white"),
                                    onClick: function() {
                                        return ee(n.ADD_TO_CLOSET)
                                    },
                                    disabled: ["loading", "success"].includes(B.ADD_CLOSET),
                                    children: ["loading" === B.ADD_CLOSET && (0, c.jsx)("div", {
                                        className: "m-auto inline-block",
                                        children: (0, c.jsx)(g.Z, {
                                            size: "12px"
                                        })
                                    }), "initial" === B.ADD_CLOSET && (0, c.jsxs)("div", {
                                        className: "flex items-center justify-center ",
                                        children: [(0, c.jsx)(f.FhD, {
                                            size: "1.5rem",
                                            fill: "black",
                                            className: "m-0"
                                        }), (0, c.jsx)("span", {
                                            className: "text-xs",
                                            children: n.ADD_TO_CLOSET
                                        })]
                                    }), "error" === B.ADD_CLOSET && "Try again", "success" === B.ADD_CLOSET && "Added"]
                                })
                            })]
                        }), U === n.HIDE_PIECE && (0, c.jsx)("textarea", {
                            placeholder: "Tell us why you disliked this piece...",
                            className: "mt-2 w-full border border-gray-700 py-2 text-xs",
                            onChange: function(e) {
                                return R(e.target.value)
                            },
                            value: P
                        }), U !== n.HIDE_PIECE ? (0, c.jsx)("button", {
                            className: "mt-4 w-full border border-black bg-black py-2 text-xs uppercase text-white",
                            onClick: function() {
                                y && (0, v.L)("".concat(t, ".product.view_product.clicked"), y.id), A ? q.push("/closet") : (y && (0, v.L)("".concat(t, ".outfit_product_details_modal.offsite_cta_tap"), y.id, {
                                    retailer_url: O
                                }), window.open((0, w.Yn)(O) ? O : (0, w.tp)(O), "_blank"), J())
                            },
                            children: A ? "Go to my closet" : "View on website"
                        }) : (0, c.jsx)("button", {
                            className: "mt-4 w-full border border-black bg-black py-2 text-xs uppercase text-white",
                            onClick: function() {
                                Q("swap out PRODUCT_NAME_BEGIN:".concat(S, ":PRODUCT_NAME_END, ").concat(P)), K(), J()
                            },
                            children: "loading" === B.HIDE_PIECE && U === n.HIDE_PIECE ? (0, c.jsx)("div", {
                                className: "m-auto inline-block",
                                children: (0, c.jsx)(g.Z, {
                                    size: "12px"
                                })
                            }) : "Submit Feedback"
                        })]
                    })]
                })
            }
        },
        87500: function(e, t, r) {
            var n = r(85893);
            t.Z = function(e) {
                var t = e.category,
                    r = e.onSelect,
                    s = e.selectedCategory,
                    a = e.numItems;
                return (0, n.jsxs)("button", {
                    className: "flex w-min items-center whitespace-nowrap border px-3 py-2 text-left text-sm hover:cursor-pointer md:w-full md:justify-between ".concat(s === t ? "font-base border-black" : "border-transparent font-light"),
                    onClick: function() {
                        return r(t)
                    },
                    children: [(0, n.jsx)("p", {
                        children: t.toUpperCase()
                    }), void 0 !== a && (0, n.jsx)("p", {
                        className: "ml-2 font-medium md:ml-4",
                        children: a
                    })]
                })
            }
        },
        83991: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return he
                },
                T: function() {
                    return fe
                }
            });
            var n = r(828),
                s = r(29815),
                a = r(85893),
                i = r(67294),
                o = r(47516),
                l = r(19231),
                c = r(87500),
                u = r(47568),
                d = r(70655),
                m = r(6154),
                f = r(68239),
                p = r(59081),
                x = function(e) {
                    var t = e.item,
                        r = e.removeImageFromParent,
                        n = e.onClick,
                        s = e.selectedTab,
                        l = (0, i.useState)("initial"),
                        c = l[0],
                        x = l[1],
                        h = (0, i.useState)(!1),
                        g = h[0],
                        b = h[1],
                        v = (0, i.useState)(!1),
                        j = v[0],
                        w = v[1];
                    (0, i.useEffect)((function() {
                        g || x("initial")
                    }), [g]);
                    var y = function() {
                            var e = (0, u.Z)((function() {
                                return (0, d.__generator)(this, (function(e) {
                                    return "owned" === s && k(), "wishlist" === s && N(), [2]
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        k = function() {
                            x("loading"), m.Z.delete("/api/closets/".concat(t.id)).then((function(e) {
                                200 === e.status ? (r(), x("success"), b(!1)) : (console.error("Error removing item:", e.data), x("error"))
                            })).catch((function() {
                                x("error")
                            }))
                        },
                        N = function() {
                            x("loading"), m.Z.delete("/api/wishlists/".concat(t.productId)).then((function(e) {
                                200 === e.status ? (r(), x("success"), b(!1)) : console.error("Error removing item from wishlist", e.data)
                            })).catch((function() {
                                x("error")
                            }))
                        };
                    return (0, a.jsxs)("section", {
                        className: "relative h-[175px] w-[175px] max-w-[175px] place-self-center border border-black shadow-lg hover:cursor-pointer hover:bg-gray-100 sm:h-[200px] sm:w-[200px] sm:max-w-[200px]",
                        onClick: function() {
                            return n(t)
                        },
                        children: [(0, a.jsx)("div", {
                            className: "flex h-full w-full justify-center",
                            onMouseEnter: function(e) {
                                e.preventDefault(), w(!0)
                            },
                            onMouseLeave: function(e) {
                                e.preventDefault(), w(!1)
                            },
                            children: j ? (0, a.jsx)("img", {
                                src: t.imageSrc,
                                className: "bg-transparent object-contain",
                                alt: t.imageSrc
                            }) : (0, a.jsx)("img", {
                                src: t.backgroundRemovedImageUrl ? t.backgroundRemovedImageUrl : t.imageSrc,
                                className: "bg-transparent object-contain",
                                alt: t.backgroundRemovedImageUrl ? t.backgroundRemovedImageUrl : t.imageSrc
                            })
                        }), (0, a.jsx)("button", {
                            className: "absolute right-2 top-2 flex h-[24px] w-[24px] items-center justify-center hover:cursor-pointer",
                            onClick: function(e) {
                                e.stopPropagation(), b(!0)
                            },
                            children: (0, a.jsx)(o.SW4, {
                                size: "1rem"
                            })
                        }), (0, a.jsx)(p.Z, {
                            open: g,
                            setOpen: b,
                            children: (0, a.jsxs)("section", {
                                className: "mt-4 flex w-full flex-col gap-4",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(0, a.jsx)("h1", {
                                        className: "w-full text-left text-base font-medium",
                                        children: "closet" === t.from ? "Are you sure you want to remove this item from your closet?" : "Are you sure you want to remove this item from your wishlist?"
                                    }), (0, a.jsx)("p", {
                                        className: "w-full text-left text-sm font-light",
                                        children: "This action cannot be undone"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex w-full grow items-center justify-between gap-4",
                                    children: [(0, a.jsx)("button", {
                                        className: "flex w-1/2 items-center justify-center border border-black px-4 py-2 text-xs uppercase",
                                        onClick: function() {
                                            return b(!1)
                                        },
                                        children: "Cancel"
                                    }), (0, a.jsx)("button", {
                                        className: "flex w-1/2 items-center justify-center border border-black bg-black px-4 py-2 text-xs uppercase text-white",
                                        onClick: y,
                                        disabled: ["success", "loading"].includes(c),
                                        children: function() {
                                            switch (c) {
                                                case "loading":
                                                    return (0, a.jsx)(f.Z, {
                                                        size: "16px",
                                                        invert: !0
                                                    });
                                                case "initial":
                                                    return "Remove";
                                                case "success":
                                                    return "Removed";
                                                case "error":
                                                    return "Try again"
                                            }
                                        }()
                                    })]
                                })]
                            })
                        })]
                    })
                },
                h = r(17158),
                g = r(44080),
                b = r(51649),
                v = r(43990),
                j = r(98640),
                w = r(62068),
                y = r(532),
                k = r(8002),
                N = r(76998),
                _ = r(27037),
                C = r(51667),
                Z = r(52693),
                S = r(38183),
                I = function(e) {
                    var t = e.item,
                        r = e.revertPhotoButton,
                        n = e.undoSegmentationButton;
                    return (0, a.jsx)(h.v, {
                        as: "div",
                        className: "absolute right-4 top-4 flex justify-center",
                        children: function(e) {
                            var s = e.open;
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(h.v.Button, {
                                    as: "button",
                                    className: (0, C.Z)("flex h-5 w-5 items-center justify-center border border-tts-black bg-tts-white shadow-md", s && "trasition border-gray-400 duration-100"),
                                    children: (0, a.jsx)(o.KsY, {
                                        size: "1rem",
                                        fill: s ? "gray" : "black"
                                    })
                                }), (0, a.jsx)(g.u, {
                                    as: "div",
                                    className: "absolute right-0 top-5 z-50 flex flex-col shadow-lg",
                                    enter: "transition ease-out duration-200",
                                    enterFrom: "transform opacity-0 scale-95",
                                    enterTo: "transform opacity-100 scale-100",
                                    leave: "transition ease-in duration-75",
                                    leaveFrom: "transform opacity-100 scale-100",
                                    leaveTo: "transform opacity-0 scale-95",
                                    children: (0, a.jsxs)(h.v.Items, {
                                        as: "div",
                                        className: "flex w-[230px] flex-col bg-tts-white",
                                        children: ["closet" === t.from && t.userUploadedImage !== t.imageSrc && t.imageSrc.includes("flagshipcloud") && r, "closet" === t.from && t.backgroundRemovedImageUrl && t.backgroundRemovedImageUrl !== t.imageSrc && n]
                                    })
                                })]
                            })
                        }
                    })
                },
                T = function(e) {
                    var t = e.item,
                        r = e.userData,
                        n = e.isModalOpen,
                        s = e.setIsModalOpen,
                        o = e.hoveredItemToOpen,
                        l = e.setHoveredItemToOpen,
                        c = e.onUpdate,
                        m = e.onRemoveWishlistItem,
                        x = e.addItemLocalCloset,
                        h = (0, i.useState)(!1),
                        g = h[0],
                        w = h[1],
                        C = (0, i.useState)(!1),
                        T = C[0],
                        O = C[1],
                        D = (0, k.w)().showSnackbar,
                        A = (0, i.useState)("initial"),
                        F = A[0],
                        L = A[1],
                        P = (0, i.useState)(!1),
                        R = P[0],
                        U = P[1],
                        M = (0, i.useState)(""),
                        B = M[0],
                        H = M[1],
                        q = (0, i.useState)(""),
                        Y = q[0],
                        G = q[1],
                        V = (0, i.useState)(""),
                        J = V[0],
                        Q = V[1],
                        K = (0, i.useState)(""),
                        X = K[0],
                        $ = K[1],
                        ee = (0, i.useState)([]),
                        te = ee[0],
                        re = ee[1],
                        ne = (0, i.useState)([]),
                        se = ne[0],
                        ae = ne[1],
                        ie = (0, i.useState)([]),
                        oe = ie[0],
                        le = ie[1],
                        ce = (0, i.useState)("initial"),
                        ue = ce[0],
                        de = ce[1],
                        me = (0, i.useState)(0),
                        fe = me[0],
                        pe = me[1],
                        xe = (0, i.useState)(!1),
                        he = xe[0],
                        ge = xe[1],
                        be = t.name,
                        ve = t.brand,
                        je = t.userUploadedImage || t.imageSrc,
                        we = t.backgroundRemovedImageUrl,
                        ye = t.productImages[0].link,
                        ke = !!t.id,
                        Ne = (null === r || void 0 === r ? void 0 : r.id) || "";
                    (0, i.useEffect)((function() {
                        var e, r, n;
                        H(t.brand ? t.brand : ""), G(t.name ? t.name : ""), $(t.category ? t.category : ""), re(null !== (e = t.seasons) && void 0 !== e ? e : []), ae(null !== (r = t.colors) && void 0 !== r ? r : []), le(null !== (n = t.dressCodes) && void 0 !== n ? n : []), Q(t.imageSrc), L("initial"), ke && (0, v.pm)(t.id.toString(), pe, ge)
                    }), [t]), (0, i.useEffect)((function() {
                        _e() ? U(!0) : U(!1)
                    }), [B, Y, X, te, se, oe, J]);
                    var _e = function() {
                            var e, r, n, s = "" !== B && B !== t.brand,
                                a = "" !== Y && Y !== t.name,
                                i = "" !== X && X !== t.category,
                                o = "" !== J && t.imageSrc !== J,
                                l = "closet" === t.from && te.sort() !== (null === (e = t.seasons) || void 0 === e ? void 0 : e.sort()) && te.length > 0,
                                c = "closet" === t.from && se.sort() !== (null === (r = t.colors) || void 0 === r ? void 0 : r.sort()) && se.length > 0,
                                u = "closet" === t.from && oe.sort() !== (null === (n = t.dressCodes) || void 0 === n ? void 0 : n.sort()) && oe.length > 0;
                            return s || a || i || o || l || c || u
                        },
                        Ce = function() {
                            s(!1)
                        },
                        Ze = function() {
                            l(t), w(!0)
                        },
                        Se = function() {
                            var e = (0, u.Z)((function() {
                                var e;
                                return (0, d.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (de("loading"), !r) return [3, 5];
                                            e = (0, j.eb)(r.id, t.imageSrc), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, fetch("/api/changeWishlistToCloset", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify({
                                                    wishlist_product_id: t.productId,
                                                    user_id: r.id,
                                                    image: t.imageSrc,
                                                    name: t.name,
                                                    category: t.category,
                                                    brand: t.brand,
                                                    uploadMethod: "From Wishlist",
                                                    hash: e
                                                })
                                            })];
                                        case 2:
                                            return n.sent(), m(t.productId), x(t), [3, 4];
                                        case 3:
                                            return n.sent(), de("error"), console.error("Error in /changeWishlistToCloset"), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            de("error"), console.error("User is null"), n.label = 6;
                                        case 6:
                                            return de("success"), Ce(), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, a.jsxs)(p.Z, {
                        open: n,
                        setOpen: function() {
                            return Ce()
                        },
                        children: [(0, a.jsx)("div", {
                            className: "absolute left-0 top-0 block p-3 sm:hidden",
                            children: (0, a.jsxs)("button", {
                                type: "button",
                                className: " text-neutral-400 hover:text-neutral-500 focus:outline-none ",
                                onClick: function() {
                                    return s(!1)
                                },
                                children: [(0, a.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close"
                                }), (0, a.jsx)(b.QAE, {
                                    className: "h-6 w-6",
                                    "aria-hidden": "true"
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "flex items-center justify-center py-3",
                            children: (0, a.jsxs)("div", {
                                className: "relative flex w-full flex-col items-center gap-2",
                                onMouseEnter: function() {
                                    return O(!0)
                                },
                                onMouseLeave: function() {
                                    return O(!1)
                                },
                                onClick: function() {
                                    return O((function(e) {
                                        return !e
                                    }))
                                },
                                children: [T ? (0, a.jsx)("img", {
                                    src: je,
                                    className: "aspect-square max-h-[30vh] w-full object-contain",
                                    alt: "product-image-original"
                                }) : (0, a.jsx)("img", {
                                    src: null !== we && void 0 !== we ? we : t.imageSrc,
                                    className: "aspect-square max-h-[30vh] w-full object-contain",
                                    alt: "product-image"
                                }), "closet" === t.from && (T ? (0, a.jsx)("p", {
                                    className: "absolute left-3 top-3 bg-tts-white p-1 text-xs font-light text-tts-black",
                                    children: "Original"
                                }) : (0, a.jsx)("p", {
                                    className: "absolute left-3 top-3 bg-tts-white p-1 text-xs font-light text-tts-black",
                                    children: "Alta-enhanced"
                                })), "closet" === t.from && (t.userUploadedImage !== t.imageSrc && t.imageSrc.includes("flagshipcloud") || t.backgroundRemovedImageUrl && t.backgroundRemovedImageUrl !== t.imageSrc) && (0, a.jsx)(I, {
                                    item: t,
                                    revertPhotoButton: (0, a.jsx)("button", {
                                        className: "flex w-full items-center justify-between border border-tts-black p-2 text-xs uppercase text-black",
                                        onClick: function() {
                                            Q(t.imageSrc), r && (0, _.L)("closet.product.revert_photo.clicked", r.id, {
                                                closet_item: be
                                            }), (0, v.qC)(t.id.toString(), X, t.userUploadedImage || t.imageSrc, B, Y, null, te, se, oe, L, Ce, c)
                                        },
                                        children: "loading" === F ? (0, a.jsx)(f.Z, {
                                            size: "16px"
                                        }) : "Revert to my original photo"
                                    }),
                                    undoSegmentationButton: (0, a.jsx)("button", {
                                        className: "flex w-full items-center justify-between border border-tts-black p-2 text-xs uppercase text-black",
                                        onClick: function() {
                                            r && (0, _.L)("closet.product.undo_segmentation.clicked", r.id, {
                                                closet_item: be
                                            }), (0, v.qC)(t.id.toString(), X, t.imageSrc, B, Y, t.imageSrc, te, se, oe, L, Ce, c)
                                        },
                                        children: "loading" === F ? (0, a.jsx)(f.Z, {
                                            size: "16px"
                                        }) : "Undo background removal"
                                    })
                                })]
                            })
                        }), ke ? (0, a.jsx)("input", {
                            value: B,
                            type: "text",
                            onChange: function(e) {
                                return H(e.target.value)
                            },
                            placeholder: "Add brand here",
                            className: "w-full border-0 bg-transparent p-0 text-base font-medium uppercase focus:border-b-[1px] focus:border-black focus:outline-none focus:ring-0"
                        }) : (0, a.jsxs)("div", {
                            className: "flex flex-col items-center text-base font-medium uppercase",
                            children: [(0, a.jsx)("button", {
                                className: "mb-2 flex w-[130px] items-center justify-center border border-black px-2 text-[10px] uppercase sm:w-[125px] sm:px-4 sm:py-1 sm:text-xs",
                                onClick: Se,
                                children: "loading" === ue ? (0, a.jsx)(f.Z, {
                                    size: "16px"
                                }) : "I own this"
                            }), (0, a.jsx)("div", {
                                className: "self-start",
                                children: ve
                            })]
                        }), !ke && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: "text-sm font-light",
                                children: be
                            }), (0, a.jsx)("button", {
                                className: "mt-4 w-full border border-black bg-white py-2 text-sm font-semibold uppercase text-black hover:bg-gray-200",
                                onClick: function() {
                                    r && (0, _.L)("wishlist.product.complete_the_look.clicked", r.id, {
                                        closet_item: t
                                    }), Ze()
                                },
                                children: "Complete the look"
                            }), (0, a.jsx)("button", {
                                className: "mt-4 w-full border border-black bg-black py-2 text-sm font-semibold uppercase text-white",
                                onClick: function() {
                                    r && (0, _.L)("wishlist.product.view_product.clicked", r.id, {
                                        closet_item: be
                                    }), r && (0, _.L)("wishlist.grid_view.item_details_modal.offsite_cta_tap", r.id, {
                                        retailer_url: ye
                                    }), window.open((0, Z.Yn)(ye) ? ye : (0, Z.tp)(ye), "_blank"), Ce()
                                },
                                children: "View on website"
                            })]
                        }), ke && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("input", {
                                type: "text",
                                value: Y,
                                onChange: function(e) {
                                    return G(e.target.value)
                                },
                                placeholder: "Add product name here",
                                className: "w-full border-0 bg-transparent p-0 text-sm font-light focus:border-b-[1px] focus:border-black focus:outline-none focus:ring-0"
                            }), (0, a.jsxs)("p", {
                                className: "mb-1 mt-4 w-full text-start text-xs uppercase underline",
                                children: ["Worn ", (0, a.jsx)("b", {
                                    children: he ? "..." : fe
                                }), " ", 1 === fe ? "time" : "times"]
                            }), (0, a.jsx)("div", {
                                className: "mb-1 mt-2 w-full text-start text-xs uppercase",
                                children: "Image URL"
                            }), (0, a.jsx)("div", {
                                className: "flex w-full flex-row",
                                children: "success" !== F && (0, a.jsx)("input", {
                                    placeholder: "https://",
                                    type: "text",
                                    value: J,
                                    onChange: function(e) {
                                        return Q(e.target.value)
                                    },
                                    className: "flex w-full items-center justify-center border border-gray-300 bg-white p-2 text-xs text-black focus:border-black focus:outline-none"
                                })
                            }), (0, a.jsx)("div", {
                                className: "mb-1 mt-2 w-full text-start text-xs uppercase",
                                children: "Category"
                            }), (0, a.jsx)("select", {
                                className: "w-full border border-gray-300 text-xs focus:border-black focus:outline-none focus:ring-0",
                                onChange: function(e) {
                                    return $(e.target.value)
                                },
                                children: S.CLOSET_CATEGORIES.map((function(e, r) {
                                    return (0, a.jsx)("option", {
                                        value: e,
                                        selected: e.toLowerCase() === (t.category || "").toLowerCase() || !t.category && e == S.OTHER_CATEGORY_LABEL,
                                        children: e
                                    }, r)
                                }))
                            }), (0, a.jsx)("div", {
                                className: "mb-1 mt-2 w-full text-start text-xs uppercase",
                                children: "Colors"
                            }), (0, a.jsx)(z, {
                                colors: se,
                                setColors: ae,
                                userId: Ne
                            }), (0, a.jsx)("div", {
                                className: "mb-1 mt-2 w-full text-start text-xs uppercase",
                                children: "Seasons"
                            }), (0, a.jsx)(E, {
                                seasons: te,
                                setSeasons: re,
                                userId: Ne
                            }), (0, a.jsx)("div", {
                                className: "mb-1 mt-2 w-full text-start text-xs uppercase",
                                children: "Dress codes"
                            }), (0, a.jsx)(W, {
                                dressCodes: oe,
                                setDressCodes: le,
                                userId: Ne
                            }), R && (0, a.jsx)("button", {
                                className: "mt-4 flex w-full items-center justify-center border border-black bg-white py-2 text-sm font-semibold uppercase text-black hover:bg-gray-200",
                                onClick: function() {
                                    r && (0, _.L)("closet.product.edit_item.clicked", r.id, {
                                            closet_item: be
                                        }),
                                        function() {
                                            if (r) {
                                                var e, n, s = "" !== B && B !== t.brand,
                                                    a = "" !== Y && Y !== t.name,
                                                    i = "" !== X && X !== t.category,
                                                    o = "" !== J && t.imageSrc !== J,
                                                    l = "closet" === t.from && se.sort() !== (null === (e = t.colors) || void 0 === e ? void 0 : e.sort()) && se.length > 0,
                                                    u = "closet" === t.from && oe.sort() !== (null === (n = t.dressCodes) || void 0 === n ? void 0 : n.sort()) && oe.length > 0;
                                                s && ((0, _.L)("closet.product.edited", r.id, {
                                                    edited: "product brand",
                                                    before: t.brand,
                                                    after: B
                                                }), B.toLowerCase().includes("vintage") ? D("Nice vintage find! \u2728") : B in N.ub || D("You have unique brand taste! \u2728")), a && (0, _.L)("closet.product.edited", r.id, {
                                                    edited: "product name",
                                                    before: t.name,
                                                    after: Y
                                                }), i && ((0, _.L)("closet.product.edited", r.id, {
                                                    edited: "category",
                                                    before: t.category,
                                                    after: X
                                                }), D("Thanks for letting Alta know the right category!\u2728")), o && (0, _.L)("closet.product.edited", r.id, {
                                                    edited: "image url",
                                                    before: t.imageSrc,
                                                    after: J
                                                }), l && D("Thanks for letting Alta know the right colors!\ud83c\udf08"), u && D("Thanks for letting Alta know the right dress codes!\u2728"), (0, v.qC)(t.id.toString(), X, J, B, Y, t.backgroundRemovedImageUrl, te, se, oe, L, Ce, c)
                                            }
                                        }()
                                },
                                children: function() {
                                    switch (F) {
                                        case "initial":
                                            return "Save";
                                        case "loading":
                                            return (0, a.jsx)(f.Z, {
                                                size: "16px"
                                            });
                                        case "error":
                                            return "Please try again";
                                        case "success":
                                            return "saved"
                                    }
                                }()
                            }), (0, a.jsx)("button", {
                                className: "mt-4 w-full border border-black bg-black py-2 text-sm font-semibold uppercase text-white",
                                onClick: function() {
                                    r && (0, _.L)("closet.product.complete_the_look.clicked", r.id, {
                                        closet_item: t
                                    }), Ze()
                                },
                                children: "Complete the look"
                            })]
                        }), (0, a.jsx)(y.Z, {
                            page: "closet",
                            context: "closet_item_details_modal",
                            isOpen: g,
                            setIsOpen: w,
                            item: o,
                            userData: r
                        })]
                    })
                },
                O = function(e) {
                    var t = e.season;
                    return (0, a.jsx)("p", {
                        className: (0, C.Z)("w-min px-2 py-1 text-xs", A(t)),
                        children: t.charAt(0).toUpperCase() + t.slice(1)
                    })
                },
                D = function(e) {
                    var t = e.season,
                        r = e.onAddOrRemove,
                        n = e.isRemove;
                    return (0, a.jsxs)("button", {
                        className: (0, C.Z)("flex w-min gap-1 px-2 py-1 text-xs", A(t)),
                        onClick: function() {
                            return r(t, n)
                        },
                        children: [t.charAt(0).toUpperCase() + t.slice(1), n && (0, a.jsx)(o.czh, {
                            size: "1rem"
                        })]
                    })
                },
                A = function(e) {
                    switch (e) {
                        case "spring":
                            return "bg-lime-300";
                        case "summer":
                            return "bg-yellow-300";
                        case "fall":
                            return "bg-amber-500";
                        case "winter":
                            return "bg-sky-50"
                    }
                },
                E = function(e) {
                    var t = e.seasons,
                        r = e.setSeasons,
                        n = e.userId,
                        i = function(e, a) {
                            if (a) {
                                (0, _.L)("closet.product.seasons.edited", n, {
                                    edited: "remove product season",
                                    season: e
                                });
                                var i = t.filter((function(t) {
                                    return t !== e
                                }));
                                r(i)
                            } else {
                                (0, _.L)("closet.product.season.edited", n, {
                                    edited: "remove product season",
                                    season: e
                                });
                                var o = (0, s.Z)(t).concat([e]);
                                r(o)
                            }
                        };
                    return (0, a.jsxs)(h.v, {
                        as: "div",
                        className: "relative flex w-full items-center justify-center border border-gray-300 bg-tts-white p-2",
                        children: [(0, a.jsxs)(h.v.Button, {
                            as: "button",
                            className: "flex w-full flex-wrap gap-2",
                            children: [t.map((function(e, t) {
                                return (0, a.jsx)(O, {
                                    season: e
                                }, t)
                            })), 0 === t.length && (0, a.jsx)("p", {
                                className: "text-xs font-light text-tts-black",
                                children: "Alta will add seasons overnight\u2728"
                            })]
                        }), (0, a.jsxs)(g.u, {
                            as: "div",
                            className: "absolute left-0 top-0 z-50 flex w-full flex-col border shadow-lg",
                            enter: "transition ease-out duration-200",
                            enterFrom: "transform opacity-0 scale-95",
                            enterTo: "transform opacity-100 scale-100",
                            leave: "transition ease-in duration-75",
                            leaveFrom: "transform opacity-100 scale-100",
                            leaveTo: "transform opacity-0 scale-95",
                            children: [(0, a.jsx)("span", {
                                className: "flex w-full flex-wrap gap-2 bg-gray-100 p-3",
                                children: t.map((function(e, t) {
                                    return (0, a.jsx)(D, {
                                        season: e,
                                        onAddOrRemove: i,
                                        isRemove: !0
                                    }, t)
                                }))
                            }), (0, a.jsx)(h.v.Items, {
                                as: "div",
                                className: "flex w-full flex-wrap gap-2 bg-tts-white p-3",
                                children: w.FA.filter((function(e) {
                                    return !t.includes(e)
                                })).map((function(e, t) {
                                    return (0, a.jsx)(h.v.Item, {
                                        children: (0, a.jsx)(D, {
                                            season: e,
                                            onAddOrRemove: i,
                                            isRemove: !1
                                        })
                                    }, t)
                                }))
                            })]
                        })]
                    })
                },
                F = function(e) {
                    var t = e.color;
                    return (0, a.jsx)("p", {
                        className: (0, C.Z)("w-min whitespace-nowrap px-2 py-1 text-xs", P(t), R(t)),
                        children: t.charAt(0).toUpperCase() + t.slice(1)
                    })
                },
                L = function(e) {
                    var t = e.color,
                        r = e.onAddOrRemove,
                        n = e.isRemove;
                    return (0, a.jsxs)("button", {
                        className: (0, C.Z)("flex w-min gap-1 whitespace-nowrap px-2 py-1 text-xs", P(t), R(t)),
                        onClick: function() {
                            return r(t, n)
                        },
                        children: [t.charAt(0).toUpperCase() + t.slice(1), n && (0, a.jsx)(o.czh, {
                            size: "1rem"
                        })]
                    })
                },
                P = function(e) {
                    return {
                        black: "bg-[#000000]",
                        white: "bg-[#FFFFFF]",
                        gray: "bg-[#5a5a5a]",
                        red: "bg-[#FF0000]",
                        blue: "bg-[#0000FF]",
                        green: "bg-[#008000]",
                        yellow: "bg-[#FFFF00]",
                        orange: "bg-[#FFA500]",
                        pink: "bg-[#FF69B4]",
                        purple: "bg-[#800080]",
                        navy: "bg-[#000080]",
                        magenta: "bg-[#FF00FF]",
                        brown: "bg-[#5C4033]",
                        beige: "bg-[#F5F5DC]",
                        gold: "bg-[#FFD700]",
                        silver: "bg-[#C0C0C0]",
                        "rose gold": "bg-[#f7c5ad]",
                        diamond: "bg-[#B9F2FF]",
                        caramel: "bg-[#C78752]",
                        "olive green": "bg-[#666600]",
                        tan: "bg-[#D2B48C]",
                        maroon: "bg-[#800000]"
                    }[e]
                },
                R = function(e) {
                    return ["black", "blue", "navy", "brown", "purple", "magenta", "green", "gray", "olive green"].includes(e) ? "text-tts-white" : "text-tts-black"
                },
                z = function(e) {
                    var t = e.colors,
                        r = e.setColors,
                        n = e.userId,
                        i = function(e, a) {
                            if (a) {
                                var i = t.filter((function(t) {
                                    return t !== e
                                }));
                                (0, _.L)("closet.product.colors.edited", n, {
                                    edited: "remove product color",
                                    color: e
                                }), r(i)
                            } else {
                                var o = (0, s.Z)(t).concat([e]);
                                (0, _.L)("closet.product.colors.edited", n, {
                                    edited: "add product color",
                                    color: e
                                }), r(o)
                            }
                        };
                    return (0, a.jsxs)(h.v, {
                        as: "div",
                        className: "relative flex w-full items-center justify-center border border-gray-300 p-2",
                        children: [(0, a.jsxs)(h.v.Button, {
                            as: "button",
                            className: "flex w-full flex-wrap gap-2",
                            children: [t.map((function(e, t) {
                                return (0, a.jsx)(F, {
                                    color: e
                                }, t)
                            })), 0 === t.length && (0, a.jsx)("p", {
                                className: "text-xs font-light text-tts-black",
                                children: "Alta will add colors overnight\u2728"
                            })]
                        }), (0, a.jsxs)(g.u, {
                            as: "div",
                            className: "absolute right-0 top-0 z-50 flex w-full flex-col border shadow-lg",
                            enter: "transition ease-out duration-200",
                            enterFrom: "transform opacity-0 scale-95",
                            enterTo: "transform opacity-100 scale-100",
                            leave: "transition ease-in duration-75",
                            leaveFrom: "transform opacity-100 scale-100",
                            leaveTo: "transform opacity-0 scale-95",
                            children: [(0, a.jsx)("span", {
                                className: "flex w-full flex-wrap gap-2 bg-gray-100 p-3",
                                children: t.map((function(e, t) {
                                    return (0, a.jsx)(L, {
                                        color: e,
                                        onAddOrRemove: i,
                                        isRemove: !0
                                    }, t)
                                }))
                            }), (0, a.jsx)(h.v.Items, {
                                as: "div",
                                className: "flex w-full flex-wrap gap-2 bg-tts-white p-3",
                                children: w.DM.filter((function(e) {
                                    return !t.includes(e)
                                })).map((function(e, t) {
                                    return (0, a.jsx)(h.v.Item, {
                                        children: (0, a.jsx)(L, {
                                            color: e,
                                            onAddOrRemove: i,
                                            isRemove: !1
                                        })
                                    }, t)
                                }))
                            })]
                        })]
                    })
                },
                U = function(e) {
                    var t = e.dressCode;
                    return (0, a.jsx)("p", {
                        className: "w-min whitespace-nowrap bg-gray-200 px-2 py-1 text-xs text-tts-black",
                        children: t.charAt(0).toUpperCase() + t.slice(1)
                    })
                },
                M = function(e) {
                    var t = e.dressCode,
                        r = e.onAddOrRemove,
                        n = e.isRemove;
                    return (0, a.jsxs)("button", {
                        className: "flex w-min gap-1 whitespace-nowrap bg-gray-200 px-2 py-1 text-xs text-tts-black",
                        onClick: function() {
                            return r(t, n)
                        },
                        children: [t.charAt(0).toUpperCase() + t.slice(1), n && (0, a.jsx)(o.czh, {
                            size: "1rem"
                        })]
                    })
                },
                W = function(e) {
                    var t = e.dressCodes,
                        r = e.setDressCodes,
                        n = e.userId,
                        i = (0, k.w)().showSnackbar,
                        o = function(e, a) {
                            if (a) {
                                var o = t.filter((function(t) {
                                    return t !== e
                                }));
                                (0, _.L)("closet.product.dresscodes.edited", n, {
                                    edited: "remove product dresscodes",
                                    dressCode: e
                                }), r(o)
                            } else {
                                var l = (0, s.Z)(t).concat([e]);
                                (0, _.L)("closet.product.dresscodes.edited", n, {
                                    edited: "remove product dresscodes",
                                    dressCode: e
                                }), r(l)
                            }
                            i("Thanks for letting Alta know the right dress codes!\u2728")
                        };
                    return (0, a.jsxs)(h.v, {
                        as: "div",
                        className: "relative flex h-full w-full items-center justify-center border border-gray-300 p-2",
                        children: [(0, a.jsxs)(h.v.Button, {
                            as: "button",
                            className: (0, C.Z)("flex w-full flex-wrap gap-2"),
                            children: [t.map((function(e, t) {
                                return (0, a.jsx)(U, {
                                    dressCode: e
                                }, t)
                            })), 0 === t.length && (0, a.jsx)("p", {
                                className: "text-xs font-light text-tts-black",
                                children: "Alta will add dress codes overnight\u2728"
                            })]
                        }), (0, a.jsxs)(g.u, {
                            as: "div",
                            className: "absolute bottom-0 right-0 z-50 flex w-full flex-col border shadow-lg",
                            enter: "transition ease-out duration-200",
                            enterFrom: "transform opacity-0 scale-95",
                            enterTo: "transform opacity-100 scale-100",
                            leave: "transition ease-in duration-75",
                            leaveFrom: "transform opacity-100 scale-100",
                            leaveTo: "transform opacity-0 scale-95",
                            children: [(0, a.jsx)("span", {
                                className: "flex w-full flex-wrap gap-2 bg-gray-100 p-3",
                                children: t.map((function(e, t) {
                                    return (0, a.jsx)(M, {
                                        dressCode: e,
                                        onAddOrRemove: o,
                                        isRemove: !0
                                    }, t)
                                }))
                            }), (0, a.jsx)(h.v.Items, {
                                as: "div",
                                className: "flex w-full flex-wrap gap-2 bg-tts-white p-3",
                                children: w.Tg.filter((function(e) {
                                    return !t.includes(e)
                                })).map((function(e, t) {
                                    return (0, a.jsx)(h.v.Item, {
                                        children: (0, a.jsx)(M, {
                                            dressCode: e,
                                            onAddOrRemove: o,
                                            isRemove: !1
                                        })
                                    }, t)
                                }))
                            })]
                        })]
                    })
                },
                B = r(34386),
                H = function(e) {
                    var t = e.sortedColors,
                        r = e.colorDistributionPercentages,
                        n = e.onClickColor,
                        s = (0, i.useState)(null),
                        l = s[0],
                        c = s[1],
                        u = (0, i.useState)(!1),
                        d = u[0],
                        m = u[1];
                    return (0, a.jsxs)(a.Fragment, {
                        children: [d && (0, a.jsxs)("button", {
                            className: "flex items-center gap-1 text-sm uppercase hover:underline",
                            onClick: function() {
                                n(null), m(!1)
                            },
                            children: [(0, a.jsx)(o.gbs, {
                                size: "1rem"
                            }), "All"]
                        }), (0, a.jsx)("div", {
                            className: (0, C.Z)("flex h-8 w-full grow", r.some((function(e) {
                                return isNaN(e)
                            })) && "hidden"),
                            children: t.map((function(e, t) {
                                return (0, a.jsx)(B.Z, {
                                    title: l ? "".concat(l.charAt(0).toUpperCase() + l.slice(1), ": ").concat(r[t], "%") : null,
                                    children: (0, a.jsx)("button", {
                                        style: {
                                            width: "".concat(r[t], "%")
                                        },
                                        className: (0, C.Z)("h-full border border-transparent hover:border-tts-black hover:opacity-90", (0, w.kF)(e)),
                                        onMouseEnter: function() {
                                            return c(e)
                                        },
                                        onClick: function() {
                                            n(e), m(!0)
                                        }
                                    }, e)
                                }, t)
                            }))
                        })]
                    })
                },
                q = r(23601),
                Y = function(e) {
                    var t = e.selectedTab,
                        r = e.item,
                        n = e.userData,
                        s = e.hoveredItemToOpen,
                        l = e.setHoveredItemToOpen,
                        c = e.onClickUpdateItem,
                        x = e.removeImageFromParent,
                        h = (0, i.useState)(""),
                        g = h[0],
                        b = h[1],
                        v = (0, i.useState)(""),
                        j = v[0],
                        w = v[1],
                        k = (0, i.useState)("initial"),
                        N = k[0],
                        C = k[1],
                        S = (0, i.useState)(!1),
                        I = S[0],
                        T = S[1],
                        O = (0, i.useState)(!1),
                        D = O[0],
                        A = O[1],
                        E = (0, i.useState)(!1),
                        F = E[0],
                        L = E[1],
                        P = (0, q.Z)().width;
                    (0, i.useEffect)((function() {
                        D || C("initial")
                    }), [D]);
                    var R = function() {
                            var e = (0, u.Z)((function() {
                                return (0, d.__generator)(this, (function(e) {
                                    return "owned" === t && z(), "wishlist" === t && U(), [2]
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        z = function() {
                            C("loading"), m.Z.delete("/api/closets/".concat(r.id)).then((function(e) {
                                200 === e.status ? (x(), C("success"), A(!1)) : (console.error("Error removing item:", e.data), C("error"))
                            })).catch((function() {
                                C("error")
                            }))
                        },
                        U = function() {
                            var e = (0, u.Z)((function() {
                                return (0, d.__generator)(this, (function(e) {
                                    return C("loading"), m.Z.delete("/api/wishlists/".concat(r.productId)).then((function(e) {
                                        200 === e.status ? (x(), A(!1), C("success")) : console.error("Error removing item from wishlist", e.data)
                                    })).catch((function() {
                                        C("error")
                                    })), [2]
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        M = function() {
                            var e = (0, u.Z)((function() {
                                return (0, d.__generator)(this, (function(e) {
                                    return I ? g && j && m.Z.patch("/api/wishlists/".concat(r.productId), {
                                        product_name: g,
                                        product_brand: j
                                    }).then((function() {
                                        T(!1)
                                    })).catch((function(e) {
                                        console.error(e)
                                    })) : T(!0), [2]
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, a.jsxs)("section", {
                        className: "flex h-[120px] w-full flex-col justify-between sm:h-[200px]",
                        children: [(0, a.jsxs)("div", {
                            className: "flex w-full items-center justify-between",
                            children: [(0, a.jsx)("div", {
                                className: "flex w-full max-w-[180px] flex-col gap-2 truncate sm:gap-3 md:max-w-[400px]",
                                children: I ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("input", {
                                        type: "text",
                                        value: j,
                                        onChange: function(e) {
                                            return w(e.target.value)
                                        },
                                        placeholder: "brand",
                                        className: "bg-transparent pb-1 text-sm font-medium uppercase focus:border-b-[1px] focus:border-black focus:outline-none sm:text-base"
                                    }), (0, a.jsx)("input", {
                                        type: "text",
                                        value: g,
                                        onChange: function(e) {
                                            return b(e.target.value)
                                        },
                                        placeholder: "Product Name",
                                        className: "bg-transparent pb-1 text-xs font-light focus:border-b-[1px] focus:border-black focus:outline-none sm:text-sm"
                                    })]
                                }) : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("p", {
                                        className: "truncate text-sm font-medium uppercase sm:text-base",
                                        children: r.brand ? r.brand : j
                                    }), (0, a.jsx)("p", {
                                        className: "truncate text-xs font-light sm:text-sm",
                                        children: r.name ? r.name : g
                                    })]
                                })
                            }), (0, a.jsx)("button", {
                                className: "flex items-center justify-center self-start hover:cursor-pointer",
                                onClick: function() {
                                    return A(!0)
                                },
                                children: (0, a.jsx)(o.SW4, {
                                    size: P < 640 ? "1rem" : "1.5rem"
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex w-full flex-col items-end justify-end gap-2 sm:flex-row sm:items-center sm:gap-4",
                            children: ["catalog" === r.from ? !r.brand || !r.name && (0, a.jsx)("button", {
                                className: "flex w-[130px] items-center justify-center border border-black bg-white px-2 text-[10px] uppercase sm:w-[175px] sm:px-4 sm:py-1 sm:text-xs",
                                onClick: function() {
                                    return M()
                                },
                                children: I ? "Save" : g ? "Edit" : "Edit item info"
                            }) : (0, a.jsx)("button", {
                                className: "flex w-[130px] items-center justify-center border border-black bg-white px-2 text-[10px] uppercase sm:w-[175px] sm:px-4 sm:py-1 sm:text-xs",
                                onClick: function() {
                                    void 0 !== c && c(r)
                                },
                                children: "Edit item info"
                            }), r.productImages.length && r.productImages[0].link && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("button", {
                                    className: "flex w-[130px] items-center justify-center border border-black px-2 text-[10px] uppercase sm:w-[175px] sm:px-4 sm:py-1 sm:text-xs ".concat("wishlist" === t ? "bg-white text-black " : "bg-black text-white"),
                                    onClick: function() {
                                        n && (0, _.L)("closet.product.complete_the_look.clicked", n.id, {
                                            closet_item: r
                                        }), l(r), L(!0)
                                    },
                                    children: "Complete the look"
                                }), "wishlist" === t && (0, a.jsx)("button", {
                                    className: "flex w-[130px] items-center justify-center border border-black bg-black px-2 text-[10px] uppercase text-white sm:w-[175px] sm:px-4 sm:py-1 sm:text-xs",
                                    onClick: function() {
                                        var e = r.productImages.length ? r.productImages[0].link : "";
                                        n && (0, _.L)("wishlist.list_view.item_details.offsite_cta_tap", n.id, {
                                            retailer_url: e
                                        }), window.open((0, Z.Yn)(e) ? e : (0, Z.tp)(e), "_blank")
                                    },
                                    children: "View on website"
                                })]
                            })]
                        }), (0, a.jsx)(p.Z, {
                            open: D,
                            setOpen: A,
                            children: (0, a.jsxs)("section", {
                                className: "mt-4 flex w-full flex-col gap-4",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(0, a.jsx)("h1", {
                                        className: "w-full text-left text-base font-medium",
                                        children: "closet" === r.from ? "Are you sure you want to remove this item from your closet?" : "Are you sure you want to remove this item from your wishlist?"
                                    }), (0, a.jsx)("p", {
                                        className: "w-full text-left text-sm font-light",
                                        children: "This action cannot be undone."
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex w-full grow items-center justify-between gap-4",
                                    children: [(0, a.jsx)("button", {
                                        className: "flex w-1/2 items-center justify-center border border-black px-4 py-2 text-xs uppercase",
                                        onClick: function() {
                                            return A(!1)
                                        },
                                        children: "Cancel"
                                    }), (0, a.jsx)("button", {
                                        className: "flex w-1/2 items-center justify-center border border-black bg-black px-4 py-2 text-xs uppercase text-white",
                                        onClick: R,
                                        disabled: ["success", "loading"].includes(N),
                                        children: function() {
                                            switch (N) {
                                                case "loading":
                                                    return (0, a.jsx)(f.Z, {
                                                        size: "16px",
                                                        invert: !0
                                                    });
                                                case "initial":
                                                    return "Remove";
                                                case "success":
                                                    return "Removed";
                                                case "error":
                                                    return "Try again"
                                            }
                                        }()
                                    })]
                                })]
                            })
                        }), (0, a.jsx)(y.Z, {
                            page: "closet",
                            context: "product_details_column",
                            isOpen: F,
                            setIsOpen: L,
                            item: s,
                            userData: n
                        })]
                    })
                },
                G = function(e) {
                    var t = e.item,
                        r = (0, i.useState)(!1),
                        n = r[0],
                        s = r[1];
                    return "error" in t ? (0, a.jsx)("div", {
                        className: "overflow-hidden",
                        style: {
                            width: "200px",
                            height: "200px"
                        },
                        children: (0, a.jsx)("div", {
                            className: "h-full",
                            children: t.error
                        })
                    }) : (0, a.jsx)("div", {
                        className: "h-[120px] w-[120px] min-w-[120px] border border-black bg-white sm:h-[200px] sm:w-[200px] sm:min-w-[200px] sm:shadow-lg",
                        onMouseEnter: function(e) {
                            e.preventDefault(), s(!0)
                        },
                        onMouseLeave: function(e) {
                            e.preventDefault(), s(!1)
                        },
                        children: (0, a.jsxs)("div", {
                            className: "relative flex h-full w-full justify-center",
                            children: [n ? (0, a.jsx)("img", {
                                src: t.imageSrc,
                                alt: t.imageAlt,
                                className: "object-contain"
                            }) : (0, a.jsx)("img", {
                                src: t.backgroundRemovedImageUrl || t.imageSrc,
                                alt: t.imageAlt,
                                className: "object-contain"
                            }), (0, a.jsx)("div", {
                                className: "absolute left-2 top-2 flex items-center justify-center border border-black bg-gray-200 px-1 text-[8px] uppercase sm:text-xs",
                                children: "closet" === t.from ? "owned" : "wishlist"
                            })]
                        })
                    })
                },
                V = r(14924),
                J = r(26042),
                Q = r(69396),
                K = r(87357),
                X = r(85071),
                $ = r(7906),
                ee = r(295),
                te = r(53252),
                re = r(72882),
                ne = r(53184),
                se = r(80418),
                ae = r(53816),
                ie = r(26280),
                oe = r(13113);

            function le(e, t, r) {
                return t[r] < e[r] ? -1 : t[r] > e[r] ? 1 : 0
            }
            var ce = [{
                    id: "image",
                    numeric: !1,
                    disablePadding: !0,
                    label: "Item"
                }, {
                    id: "brand",
                    numeric: !1,
                    disablePadding: !0,
                    label: "Brand"
                }, {
                    id: "category",
                    numeric: !1,
                    disablePadding: !1,
                    label: "Category"
                }, {
                    id: "name",
                    numeric: !1,
                    disablePadding: !1,
                    label: "Name"
                }, {
                    id: "seasons",
                    numeric: !1,
                    disablePadding: !1,
                    label: "Seasons"
                }, {
                    id: "colors",
                    numeric: !1,
                    disablePadding: !1,
                    label: "Colors"
                }, {
                    id: "dressCodes",
                    numeric: !1,
                    disablePadding: !1,
                    label: "Dress codes"
                }],
                ue = function(e) {
                    var t, r, n, s, a, i, o, l;
                    return {
                        image: null !== (t = e.backgroundRemovedImageUrl) && void 0 !== t ? t : e.imageSrc,
                        category: null !== (r = e.category) && void 0 !== r ? r : "Other Pieces",
                        brand: null !== (n = e.brand) && void 0 !== n ? n : "",
                        name: null !== (s = e.name) && void 0 !== s ? s : "",
                        id: null !== (a = e.id.toString()) && void 0 !== a ? a : "",
                        seasons: null !== (i = e.seasons) && void 0 !== i ? i : [],
                        colors: null !== (o = e.colors) && void 0 !== o ? o : [],
                        dressCodes: null !== (l = e.dressCodes) && void 0 !== l ? l : []
                    }
                },
                de = function(e) {
                    var t = e.isOpen,
                        r = e.setIsOpen,
                        n = e.numSelected,
                        s = e.onDelete,
                        i = e.isDeleting;
                    return (0, a.jsx)(p.Z, {
                        open: t,
                        setOpen: r,
                        children: (0, a.jsxs)("section", {
                            className: "mt-4 flex w-full flex-col gap-4",
                            children: [(0, a.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [(0, a.jsxs)("h1", {
                                    className: "w-full text-left text-base font-medium",
                                    children: ["Are you sure you want to remove ", n, " items from your closet?"]
                                }), (0, a.jsx)("p", {
                                    className: "w-full text-left text-sm font-light",
                                    children: "This action cannot be undone"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex w-full grow items-center justify-between gap-4",
                                children: [(0, a.jsx)("button", {
                                    className: "flex w-1/2 items-center justify-center border border-black px-4 py-2 text-xs uppercase",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    children: "Cancel"
                                }), (0, a.jsx)("button", {
                                    className: "flex w-1/2 items-center justify-center border border-black bg-black px-4 py-2 text-xs uppercase text-white",
                                    onClick: s,
                                    disabled: i,
                                    children: i ? (0, a.jsx)(f.Z, {
                                        size: "12px",
                                        invert: !0
                                    }) : "remove"
                                })]
                            })]
                        })
                    })
                },
                me = function(e) {
                    var t = e.items,
                        r = e.removeImageFromParent,
                        n = (0, i.useState)("asc"),
                        l = n[0],
                        c = n[1],
                        u = (0, i.useState)("brand"),
                        d = u[0],
                        m = u[1],
                        p = (0, i.useState)([]),
                        x = p[0],
                        h = p[1],
                        g = (0, i.useState)(0),
                        b = g[0],
                        j = g[1],
                        y = (0, i.useState)(5),
                        k = y[0],
                        N = y[1],
                        _ = (0, i.useState)([]),
                        C = _[0],
                        Z = _[1],
                        S = (0, i.useState)(!1),
                        I = S[0],
                        T = S[1],
                        O = (0, i.useState)(!1),
                        D = O[0],
                        A = O[1],
                        E = (0, i.useState)(!1),
                        F = E[0],
                        L = E[1],
                        P = function(e, r, n) {
                            var a = e.id;
                            if (a) {
                                var i = C.findIndex((function(e) {
                                    return e.id === a
                                }));
                                if (i > -1) {
                                    var o = (0, Q.Z)((0, J.Z)({}, C[i].item), (0, V.Z)({}, r, n));
                                    Z((function(e) {
                                        var t = (0, s.Z)(e);
                                        return t[i] = {
                                            id: a,
                                            item: o
                                        }, t
                                    }))
                                } else {
                                    var l = t.find((function(t) {
                                        return t.id.toString() === e.id.toString()
                                    }));
                                    l && Z((function(e) {
                                        return (0, s.Z)(e).concat([{
                                            id: a,
                                            item: (0, Q.Z)((0, J.Z)({}, l), (0, V.Z)({}, r, n))
                                        }])
                                    }))
                                }
                            }
                        },
                        R = function(e) {
                            var t = x.indexOf(e),
                                r = []; - 1 === t ? r = r.concat(x, e) : 0 === t ? r = r.concat(x.slice(1)) : t === x.length - 1 ? r = r.concat(x.slice(0, -1)) : t > 0 && (r = r.concat(x.slice(0, t), x.slice(t + 1))), h(r)
                        },
                        z = function() {
                            T(!0), (0, v.Ti)(C, T, Z)
                        },
                        U = b > 0 ? Math.max(0, (1 + b) * k - t.length) : 0,
                        M = (0, i.useMemo)((function() {
                            return function(e, t) {
                                var r = e.map((function(e, t) {
                                    return [e, t]
                                }));
                                return r.sort((function(e, r) {
                                    var n = t(e[0], r[0]);
                                    return 0 !== n ? n : e[1] - r[1]
                                })), r.map((function(e) {
                                    return e[0]
                                }))
                            }(t.map((function(e) {
                                var t = C.find((function(t) {
                                    return t.id === e.id
                                }));
                                return ue(t ? t.item : e)
                            })), function(e, t) {
                                return "desc" === e ? function(e, r) {
                                    return le(e, r, t)
                                } : function(e, r) {
                                    return -le(e, r, t)
                                }
                            }(l, d)).filter((function(e) {
                                return !!e[d]
                            })).concat(t.map((function(e) {
                                var t = C.find((function(t) {
                                    return t.id === e.id
                                }));
                                return ue(t ? t.item : e)
                            })).filter((function(e) {
                                return !e[d]
                            }))).slice(b * k, b * k + k)
                        }), [l, d, b, k, t]);
                    return (0, a.jsxs)("section", {
                        className: "flex w-full flex-col gap-4 overflow-x-auto",
                        children: [(0, a.jsx)("span", {
                            className: "flex w-full items-center justify-between",
                            children: x.length > 0 ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)("p", {
                                    className: "text-sm font-light",
                                    children: [x.length, " selected"]
                                }), (0, a.jsx)(B.Z, {
                                    title: "DELETE",
                                    children: (0, a.jsx)("button", {
                                        className: "p-2 sm:hover:bg-gray-200",
                                        onClick: function() {
                                            return L(!0)
                                        },
                                        children: (0, a.jsx)(o.SW4, {
                                            size: "1.5rem"
                                        })
                                    })
                                })]
                            }) : (0, a.jsx)("p", {
                                className: "py-2 text-sm font-light",
                                children: "Edit item details to better tailor your outfit inspos."
                            })
                        }), C.length > 0 && (0, a.jsx)("button", {
                            className: "ml-auto flex w-min gap-1 whitespace-nowrap border border-tts-black p-2 text-sm font-semibold uppercase text-tts-black hover:bg-gray-200",
                            onClick: z,
                            disabled: I,
                            children: I ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(f.Z, {
                                    size: "20px"
                                }), "Saving"]
                            }) : "Save Changes"
                        }), (0, a.jsx)(re.Z, {
                            children: (0, a.jsxs)($.Z, {
                                size: "medium",
                                children: [(0, a.jsx)(ne.Z, {
                                    children: (0, a.jsxs)(ae.Z, {
                                        children: [(0, a.jsx)(te.Z, {
                                            padding: "checkbox",
                                            children: (0, a.jsx)(X.Z, {
                                                color: "primary",
                                                indeterminate: x.length > 0 && x.length < t.length,
                                                checked: t.length > 0 && x.length === t.length,
                                                onChange: function(e) {
                                                    if (e.target.checked) {
                                                        var r = t.map((function(e) {
                                                            return e.id.toString()
                                                        }));
                                                        h(r)
                                                    } else h([])
                                                }
                                            })
                                        }), ce.map((function(e) {
                                            return (0, a.jsx)(te.Z, {
                                                align: "left",
                                                padding: "normal",
                                                children: "image" === e.id || "seasons" === e.id || "colors" === e.id || "dressCodes" === e.id ? e.label.toUpperCase() : (0, a.jsxs)(ie.Z, {
                                                    active: d === e.id,
                                                    direction: d === e.id ? l : "asc",
                                                    onClick: function() {
                                                        return t = e.id, c(d === t && "asc" === l ? "desc" : "asc"), void m(t);
                                                        var t
                                                    },
                                                    children: [e.label.toUpperCase(), d === e.id ? (0, a.jsx)(K.Z, {
                                                        component: "span",
                                                        sx: oe.Z,
                                                        children: "desc" === l ? "sorted descending" : "sorted ascending"
                                                    }) : null]
                                                })
                                            }, e.id)
                                        }))]
                                    })
                                }), (0, a.jsxs)(ee.Z, {
                                    children: [M.map((function(e, t) {
                                        return (0, a.jsx)(w.ZP, {
                                            data: e,
                                            onUpdate: P,
                                            selected: x,
                                            onSelect: R
                                        }, t)
                                    })), U > 0 && (0, a.jsx)(ae.Z, {
                                        style: {
                                            height: 53 * U
                                        },
                                        children: (0, a.jsx)(te.Z, {
                                            colSpan: 6
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)(se.Z, {
                            rowsPerPageOptions: [5, 10, 25],
                            component: "div",
                            count: t.length,
                            rowsPerPage: k,
                            page: b,
                            onPageChange: function(e, t) {
                                j(t)
                            },
                            onRowsPerPageChange: function(e) {
                                N(parseInt(e.target.value, 10)), j(0)
                            }
                        }), C.length > 0 && (0, a.jsx)("button", {
                            className: "ml-auto flex w-min gap-1 whitespace-nowrap border border-tts-black p-2 text-sm font-semibold uppercase text-tts-black hover:bg-gray-200",
                            onClick: z,
                            disabled: I,
                            children: I ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(f.Z, {
                                    size: "20px"
                                }), "Saving"]
                            }) : "Save Changes"
                        }), (0, a.jsx)(de, {
                            isOpen: F,
                            setIsOpen: L,
                            numSelected: x.length,
                            onDelete: function() {
                                A(!0), (0, v.s8)(x, A, h, L, r)
                            },
                            isDeleting: D
                        })]
                    })
                },
                fe = function(e) {
                    return e.sort((function(e, t) {
                        var r, n;
                        return (null !== (r = e.colors) && void 0 !== r ? r : []).reduce((function(e, t) {
                            return w.DM.indexOf(t)
                        }), 0) - (null !== (n = t.colors) && void 0 !== n ? n : []).reduce((function(e, t) {
                            return w.DM.indexOf(t)
                        }), 0)
                    }))
                },
                pe = function(e, t) {
                    return "All" === t ? e.length : e.filter((function(e) {
                        var r;
                        return null === (r = e.category) || void 0 === r ? void 0 : r.toLowerCase().includes(t.toLowerCase())
                    })).length
                },
                xe = function(e) {
                    var t = {
                            black: 0,
                            white: 0,
                            gray: 0,
                            red: 0,
                            blue: 0,
                            green: 0,
                            yellow: 0,
                            orange: 0,
                            pink: 0,
                            purple: 0,
                            navy: 0,
                            magenta: 0,
                            brown: 0,
                            beige: 0,
                            gold: 0,
                            silver: 0,
                            "rose gold": 0,
                            diamond: 0,
                            caramel: 0,
                            "olive green": 0,
                            tan: 0,
                            maroon: 0
                        },
                        r = !0,
                        s = !1,
                        a = void 0;
                    try {
                        for (var i, o = e[Symbol.iterator](); !(r = (i = o.next()).done); r = !0) {
                            var l = i.value.colors;
                            if (l && l.length > 0) {
                                var c = l.length,
                                    u = !0,
                                    d = !1,
                                    m = void 0;
                                try {
                                    for (var f, p = l[Symbol.iterator](); !(u = (f = p.next()).done); u = !0) {
                                        var x = f.value;
                                        t[x] += 1 / c
                                    }
                                } catch (j) {
                                    d = !0, m = j
                                } finally {
                                    try {
                                        u || null == p.return || p.return()
                                    } finally {
                                        if (d) throw m
                                    }
                                }
                            }
                        }
                    } catch (j) {
                        s = !0, a = j
                    } finally {
                        try {
                            r || null == o.return || o.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                    var h = Object.values(t).reduce((function(e, t) {
                        return e + t
                    }), 0);
                    t = Object.fromEntries(Object.entries(t).filter((function(e) {
                        var t = (0, n.Z)(e, 2);
                        t[0];
                        return 0 !== t[1]
                    })));
                    for (var g = Object.keys(t).sort((function(e, r) {
                            return t[r] - t[e]
                        })), b = [], v = 0; v < g.length; v++) b.push(Math.round(t[g[v]] / h * 1e3) / 10);
                    return [g, b]
                },
                he = function(e) {
                    var t = e.userData,
                        r = e.selectedTab,
                        u = e.items,
                        d = e.onRemoveItem,
                        m = e.onUpdateItem,
                        f = e.onAddItem,
                        p = e.setAddItemModalOpen,
                        h = (0, q.Z)().width,
                        g = (0, i.useState)("All"),
                        b = g[0],
                        v = g[1],
                        j = (0, i.useState)(u),
                        w = j[0],
                        y = j[1],
                        k = (0, i.useState)(h < 640 ? "list" : "gallery"),
                        N = k[0],
                        Z = k[1],
                        I = (0, i.useState)(null),
                        O = I[0],
                        D = I[1],
                        A = (0, i.useState)(null),
                        E = A[0],
                        F = A[1],
                        L = (0, i.useState)(!1),
                        P = L[0],
                        R = L[1],
                        z = (0, i.useRef)(null),
                        U = (0, i.useRef)(null),
                        M = (0, l.NM)(U).inViewport;
                    (0, i.useEffect)((function() {
                        W(b, u, r)
                    }), [b, u, r]);
                    var W = function(e, t, r) {
                            y("all" === e || "All" === e ? "owned" === r ? fe(t) : t : "owned" === r ? fe(t.filter((function(t) {
                                return !!t.category && t.category.toLowerCase().includes(e.toLowerCase())
                            }))) : t.filter((function(t) {
                                return !!t.category && t.category.toLowerCase().includes(e.toLowerCase())
                            })))
                        },
                        B = function(e) {
                            v(e)
                        },
                        V = (0, n.Z)(xe(w), 2),
                        J = V[0],
                        Q = V[1];
                    return (0, a.jsxs)("div", {
                        className: "flex w-full flex-col gap-4 pb-16",
                        children: [(0, a.jsxs)("section", {
                            className: "flex w-full items-center justify-between gap-6",
                            children: [(0, a.jsxs)("button", {
                                ref: U,
                                onClick: function(e) {
                                    e.preventDefault(), p(!0)
                                },
                                className: "flex h-[34px] items-center justify-center gap-1 border-black bg-tts-black px-4 hover:opacity-90",
                                children: [(0, a.jsx)(o.poH, {
                                    size: "1rem",
                                    fill: "white",
                                    className: "-ml-1"
                                }), (0, a.jsx)("p", {
                                    className: "text-xs font-semibold uppercase text-white",
                                    children: "add items"
                                })]
                            }), !M && h < 640 && (0, a.jsx)("button", {
                                onClick: function(e) {
                                    e.preventDefault(), p(!0)
                                },
                                className: "fixed bottom-20 right-4 flex h-12 w-12 items-center justify-center bg-black shadow-lg",
                                children: (0, a.jsx)(o.poH, {
                                    size: "2rem",
                                    fill: "white"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, a.jsxs)("button", {
                                    className: "flex items-center justify-center gap-1 border border-black px-2 py-2 text-center text-xs uppercase text-black hover:cursor-pointer ".concat("gallery" === N && "bg-gray-200"),
                                    onClick: function() {
                                        Z("gallery"), t && (0, _.L)("closet.gallery_view.clicked", t.id)
                                    },
                                    children: [(0, a.jsx)(o.rp3, {
                                        size: "1rem"
                                    }), h >= 640 && "Grid"]
                                }), (0, a.jsxs)("button", {
                                    className: "flex items-center justify-center gap-1 border-b-[1px] border-r-[1px] border-t-[1px] border-black px-2 py-2 text-center text-xs uppercase text-black hover:cursor-pointer ".concat("list" === N && "bg-gray-200"),
                                    onClick: function() {
                                        Z("list"), t && (0, _.L)("closet.list_view.clicked", t.id)
                                    },
                                    children: [(0, a.jsx)(o.dC0, {
                                        size: "1rem"
                                    }), h >= 640 && "List"]
                                }), "owned" === r && (0, a.jsxs)("button", {
                                    className: "flex items-center justify-center gap-1 border-b-[1px] border-r-[1px] border-t-[1px] border-black px-2 py-2 text-center text-xs uppercase text-black hover:cursor-pointer ".concat("table" === N && "bg-gray-200"),
                                    onClick: function() {
                                        Z("table"), t && (0, _.L)("closet.table_view.clicked", t.id)
                                    },
                                    children: [(0, a.jsx)(o.mkv, {
                                        size: "1rem"
                                    }), h >= 640 && "Table"]
                                })]
                            })]
                        }), "owned" === r && w.length > 0 && "table" !== N && (0, a.jsx)("aside", {
                            className: "w-full",
                            children: (0, a.jsx)(H, {
                                sortedColors: J,
                                colorDistributionPercentages: Q,
                                onClickColor: function(e) {
                                    y(e ? function(t) {
                                        return t.filter((function(t) {
                                            var r;
                                            return null === (r = t.colors) || void 0 === r ? void 0 : r.includes(e)
                                        }))
                                    } : fe(u))
                                }
                            })
                        }), (0, a.jsxs)("section", {
                            className: "flex flex-col gap-2 sm:flex-row sm:gap-6",
                            children: ["table" !== N && (0, a.jsxs)("aside", {
                                ref: z,
                                className: "border-r-1 sm:overflow-none sticky top-16 z-20 mt-2 flex h-full gap-4 overflow-auto scroll-smooth border bg-white p-2 shadow-md sm:mt-4 sm:flex-col sm:p-4",
                                children: [h < 640 && (0, a.jsx)("button", {
                                    className: "sticky left-2 top-[calc((100%-22px)/2)] z-30 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-black bg-white shadow-md",
                                    onClick: function() {
                                        z && z.current && (z.current.scrollLeft -= 200)
                                    },
                                    children: (0, a.jsx)(o.gbs, {
                                        size: "1.25rem"
                                    })
                                }), ["All"].concat((0, s.Z)(S.CLOSET_CATEGORIES)).map((function(e, t) {
                                    return (0, a.jsx)(c.Z, {
                                        category: e,
                                        selectedCategory: b,
                                        onSelect: B,
                                        numItems: pe(u, e)
                                    }, t)
                                })), h < 640 && (0, a.jsx)("button", {
                                    className: "sticky right-2 top-[calc((100%-22px)/2)] z-30 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-black bg-white shadow-md",
                                    onClick: function() {
                                        z && z.current && (z.current.scrollLeft += 200)
                                    },
                                    children: (0, a.jsx)(o.lU2, {
                                        size: "1.25rem"
                                    })
                                })]
                            }), (0, a.jsx)("section", {
                                className: "mt-4 flex grow items-start sm:mt-0 sm:p-4",
                                children: (0, a.jsxs)("div", {
                                    className: (0, C.Z)("list" === N ? "flex w-full flex-col items-center gap-3" : "gallery" === N ? "grid w-full grid-cols-2 gap-4 lg:grid-cols-4" : "flex w-full items-center"),
                                    children: ["table" === N ? (0, a.jsx)(me, {
                                        items: u,
                                        removeImageFromParent: d
                                    }) : w.map((function(e, n) {
                                        return "list" === N ? (0, a.jsxs)("div", {
                                            className: "flex w-full items-center gap-4 border border-black p-2 sm:p-4 sm:hover:bg-gray-100",
                                            children: [(0, a.jsx)(G, {
                                                item: e
                                            }), (0, a.jsx)(Y, {
                                                selectedTab: r,
                                                item: e,
                                                userData: t,
                                                setHoveredItemToOpen: D,
                                                hoveredItemToOpen: O,
                                                onClickUpdateItem: function(e) {
                                                    F(e), R(!0)
                                                },
                                                removeImageFromParent: function() {
                                                    return d("owned" === r ? e.id.toString() : e.productId)
                                                }
                                            })]
                                        }, n) : "gallery" === N ? (0, a.jsx)(x, {
                                            item: e,
                                            selectedTab: r,
                                            removeImageFromParent: function() {
                                                return d("owned" === r ? e.id.toString() : e.productId)
                                            },
                                            onClick: function(e) {
                                                F(e), R(!0)
                                            }
                                        }, n) : void 0
                                    })), 0 === w.length && (0, a.jsx)("p", {
                                        className: "text-sm font-light",
                                        children: "No items with current filters."
                                    }), E && (0, a.jsx)(T, {
                                        item: E,
                                        isModalOpen: P,
                                        setIsModalOpen: R,
                                        userData: t,
                                        hoveredItemToOpen: O,
                                        setHoveredItemToOpen: D,
                                        onUpdate: m,
                                        onRemoveWishlistItem: d,
                                        addItemLocalCloset: f
                                    })]
                                })
                            })]
                        })]
                    })
                }
        },
        38578: function(e, t, r) {
            var n = r(85893),
                s = r(23601);
            t.Z = function() {
                var e = (0, s.Z)().width;
                return (0, n.jsxs)("div", {
                    className: "flex w-full flex-col gap-4 bg-white pb-6 sm:flex-row",
                    children: [(0, n.jsx)("div", {
                        className: "h-[50px] w-full animate-pulse bg-gray-100 sm:h-[435px] sm:w-[175px]"
                    }), (0, n.jsxs)("div", {
                        className: "flex w-full flex-col items-center justify-center gap-8",
                        children: [(0, n.jsx)("div", {
                            className: "grid w-full grid-cols-2 justify-between gap-4 lg:grid-cols-4",
                            children: [1, 2, 3, 4].map((function(e) {
                                return (0, n.jsx)("div", {
                                    className: "group relative flex items-center justify-center overflow-hidden bg-white",
                                    children: (0, n.jsx)("div", {
                                        style: {
                                            width: "200px",
                                            height: "200px"
                                        },
                                        className: "w-full animate-pulse bg-gray-100"
                                    })
                                }, e)
                            }))
                        }), e >= 640 && (0, n.jsx)("div", {
                            className: "grid w-full grid-cols-2 justify-between gap-4 lg:grid-cols-4",
                            children: [1, 2, 3, 4].map((function(e) {
                                return (0, n.jsx)("div", {
                                    className: "group relative flex items-center justify-center overflow-hidden bg-white",
                                    children: (0, n.jsx)("div", {
                                        style: {
                                            width: "200px",
                                            height: "200px"
                                        },
                                        className: "w-full animate-pulse bg-gray-100"
                                    })
                                }, e)
                            }))
                        })]
                    })]
                })
            }
        },
        43990: function(e, t, r) {
            r.d(t, {
                B2: function() {
                    return C
                },
                BU: function() {
                    return g
                },
                E3: function() {
                    return h
                },
                OW: function() {
                    return S
                },
                Ti: function() {
                    return w
                },
                Xe: function() {
                    return x
                },
                Yh: function() {
                    return Z
                },
                nq: function() {
                    return p
                },
                pW: function() {
                    return _
                },
                pm: function() {
                    return N
                },
                qC: function() {
                    return y
                },
                s2: function() {
                    return k
                },
                s8: function() {
                    return j
                },
                uz: function() {
                    return b
                }
            });
            var n = r(47568),
                s = r(26042),
                a = r(69396),
                i = r(828),
                o = r(29815),
                l = r(70655),
                c = r(6154),
                u = r(98640),
                d = r(58742),
                m = r(38824),
                f = /^https/,
                p = function() {
                    var e = (0, n.Z)((function(e, t) {
                        var r, n, s;
                        return (0, l.__generator)(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, 3, 4]), t(!0), [4, c.Z.post("/api/wishlists", {
                                        product_image: e.imageUrl,
                                        product_url: e.retailerUrl,
                                        product_name: e.name,
                                        product_brand: e.brand,
                                        category: e.category,
                                        notify_motion: !1
                                    })];
                                case 1:
                                    if (r = a.sent(), n = r.data, 200 !== r.status) throw new Error("Could not wishlist the item");
                                    return [2, (0, m.ad)([{
                                        id: n.id,
                                        img_url: n.product_image,
                                        url: n.product_url,
                                        name: n.product_name,
                                        brand: n.product_brand,
                                        category: n.category,
                                        source: "catalog"
                                    }])[0]];
                                case 2:
                                    return s = a.sent(), console.error(s), [3, 4];
                                case 3:
                                    return t(!1), [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var e = (0, n.Z)((function(e, t, r) {
                        var n, s, a, i;
                        return (0, l.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 3, 4, 5]), [4, fetch("/api/getGoogleImageResults?" + new URLSearchParams({
                                        query: e
                                    }), {
                                        method: "GET"
                                    })];
                                case 1:
                                    if (!(n = o.sent()).ok) throw new Error("Could not GET google image results");
                                    return [4, n.json()];
                                case 2:
                                    return s = o.sent(), a = s.map((function(e) {
                                        return {
                                            imgUrl: e.imageUrl,
                                            name: e.title,
                                            brand: e.source,
                                            retailerUrl: e.link,
                                            thumbnailUrl: e.thumbnailUrl
                                        }
                                    })), t(a), [3, 5];
                                case 3:
                                    return i = o.sent(), console.error(i), [2, null];
                                case 4:
                                    return r(!1), [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = (0, n.Z)((function(e, t, r, i) {
                        var u, d, m, f, p, x, h, g, b;
                        return (0, l.__generator)(this, (function(v) {
                            switch (v.label) {
                                case 0:
                                    u = function() {
                                        var e = (0, n.Z)((function(e, t) {
                                            return (0, l.__generator)(this, (function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return [4, c.Z.post("https://api.cloudinary.com/v1_1/".concat("flagshipcloud", "/image/upload"), e, {
                                                            headers: {
                                                                "Content-Type": "multipart/form-data"
                                                            },
                                                            params: {
                                                                upload_preset: "flagship_upload_closet",
                                                                public_id: t
                                                            }
                                                        })];
                                                    case 1:
                                                        return [2, r.sent()]
                                                }
                                            }))
                                        }));
                                        return function(t, r) {
                                            return e.apply(this, arguments)
                                        }
                                    }(), v.label = 1;
                                case 1:
                                    return v.trys.push([1, 6, , 7]), [4, u(e, t)];
                                case 2:
                                    return d = v.sent(), m = d.data, f = m.secure_url.replace(/\.[^/.]+$/, ".png"), r = (0, a.Z)((0, s.Z)({}, r), {
                                        uploadState: "success",
                                        imageUrl: f
                                    }), [4, fetch("/api/getImageInfo", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            image: f,
                                            getCategoryInfo: !0
                                        })
                                    })];
                                case 3:
                                    return p = v.sent(), i((function(e) {
                                        return (0, o.Z)(e).concat([t])
                                    })), p.ok ? [4, p.json()] : [3, 5];
                                case 4:
                                    x = v.sent(), h = x.caption, g = x.category, r = (0, a.Z)((0, s.Z)({}, r), {
                                        category: g,
                                        name: h
                                    }), v.label = 5;
                                case 5:
                                    return [2, r];
                                case 6:
                                    return b = v.sent(), console.error(b, "Error uploading file to Cloudinary"), [2, r = (0, a.Z)((0, s.Z)({}, r), {
                                        uploadState: "error"
                                    })];
                                case 7:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n, s) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var e = (0, n.Z)((function(e, t) {
                        var r;
                        return (0, l.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return r = Promise.all(e.map(function() {
                                        var e = (0, n.Z)((function(e) {
                                            var r, n, s, a, i, o, c, u;
                                            return (0, l.__generator)(this, (function(l) {
                                                switch (l.label) {
                                                    case 0:
                                                        return l.trys.push([0, 2, , 3]), r = e.imageUrl, n = e.category, s = e.name, a = e.brand, i = e.method, o = e.hash, c = e.retailerUrlOrFileName, [4, t(r, {
                                                            hash: o,
                                                            productUrl: c,
                                                            productBrand: a,
                                                            productName: s,
                                                            category: n,
                                                            uploadMethod: i
                                                        })];
                                                    case 1:
                                                        return l.sent(), [3, 3];
                                                    case 2:
                                                        return u = l.sent(), console.error(u), [2, null];
                                                    case 3:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }())), [4, r];
                                case 1:
                                    return [2, s.sent()]
                            }
                        }))
                    }));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = (0, n.Z)((function(e, t, r, o, c) {
                        var m;
                        return (0, l.__generator)(this, (function(p) {
                            switch (p.label) {
                                case 0:
                                    return [4, Promise.all(t.filter((function(e) {
                                        return e.retailerUrlOrFileName
                                    })).map(function() {
                                        var t = (0, n.Z)((function(t) {
                                            var r, n, o, c, m, p, x, h, g, b, j;
                                            return (0, l.__generator)(this, (function(l) {
                                                switch (l.label) {
                                                    case 0:
                                                        if (t.imageUrl) return [2, t];
                                                        l.label = 1;
                                                    case 1:
                                                        return l.trys.push([1, 8, , 9]), [4, fetch("/api/extractProductFromUrl?" + new URLSearchParams({
                                                            url: t.retailerUrlOrFileName
                                                        }), {
                                                            method: "GET"
                                                        })];
                                                    case 2:
                                                        if (!(r = l.sent()).ok) throw new Error("Could not get image from link");
                                                        return [4, r.json()];
                                                    case 3:
                                                        if (n = l.sent(), o = n.title, c = n.image, m = n.brand, !c) throw new Error("Empty image data from extraction");
                                                        return p = c, f.test(c) || (p = v(c)), x = "", Object.entries(d.I2).forEach((function(e) {
                                                            var t = (0, i.Z)(e, 2),
                                                                r = t[0];
                                                            t[1].some((function(e) {
                                                                return o.toLowerCase().includes(e.toLowerCase())
                                                            })) && (x = r)
                                                        })), "" !== x ? [3, 7] : [4, fetch("/api/itemCategory?" + new URLSearchParams({
                                                            imageUrl: p
                                                        }), {
                                                            method: "GET"
                                                        })];
                                                    case 4:
                                                        return (h = l.sent()).ok ? [3, 5] : (console.error("Could not get item category from image"), [3, 7]);
                                                    case 5:
                                                        return [4, h.json()];
                                                    case 6:
                                                        x = l.sent().category, l.label = 7;
                                                    case 7:
                                                        return b = (0, u.eb)(null !== (g = null === e || void 0 === e ? void 0 : e.id) && void 0 !== g ? g : "", p), [2, {
                                                            imageUrl: p,
                                                            category: x,
                                                            name: null !== o && void 0 !== o ? o : "",
                                                            brand: null !== m && void 0 !== m ? m : "",
                                                            retailerUrlOrFileName: t.retailerUrlOrFileName,
                                                            method: "Product Link",
                                                            hash: b,
                                                            uploadState: "success"
                                                        }];
                                                    case 8:
                                                        return j = l.sent(), console.error(j), [2, (0, a.Z)((0, s.Z)({}, t), {
                                                            uploadState: "error"
                                                        })];
                                                    case 9:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }()))];
                                case 1:
                                    return m = p.sent(), r(m), o(!1), c("confirmation"), [2]
                            }
                        }))
                    }));
                    return function(t, r, n, s, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function(e) {
                    return e.startsWith("//") ? "https:" + e : e.startsWith("http:") ? e.replace("http:", "https:") : e
                },
                j = function() {
                    var e = (0, n.Z)((function(e, t, r, s, a) {
                        return (0, l.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, Promise.allSettled(e.map(function() {
                                        var e = (0, n.Z)((function(e) {
                                            return (0, l.__generator)(this, (function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, c.Z.delete("/api/closets/".concat(e))];
                                                    case 1:
                                                        return 200 === t.sent().status && a(e), [2]
                                                }
                                            }))
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()))];
                                case 1:
                                    return i.sent(), r([]), t(!1), s(!1), [2]
                            }
                        }))
                    }));
                    return function(t, r, n, s, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var e = (0, n.Z)((function(e, t, r) {
                        return (0, l.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, 3, 4]), [4, Promise.all(e.map(function() {
                                        var e = (0, n.Z)((function(e) {
                                            var t, r, n;
                                            return (0, l.__generator)(this, (function(s) {
                                                switch (s.label) {
                                                    case 0:
                                                        t = e.id, r = e.item, s.label = 1;
                                                    case 1:
                                                        return s.trys.push([1, 3, , 4]), [4, c.Z.patch("/api/closets/".concat(t), {
                                                            category: r.category,
                                                            product_image: r.imageSrc,
                                                            product_name: r.name,
                                                            product_brand: r.brand,
                                                            seasons: r.seasons,
                                                            colors: r.colors,
                                                            dress_codes: r.dressCodes
                                                        })];
                                                    case 2:
                                                        return s.sent(), [3, 4];
                                                    case 3:
                                                        return n = s.sent(), console.error(n), [3, 4];
                                                    case 4:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()))];
                                case 1:
                                    return s.sent(), [3, 4];
                                case 2:
                                    return s.sent(), console.error("Promise.all failed for multiple updates"), [3, 4];
                                case 3:
                                    return t(!1), r([]), [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = function(e, t, r, s, a, i, o, u, d, f, p, x) {
                    f("loading"), c.Z.patch("/api/closets/".concat(e), {
                        category: t,
                        product_image: r,
                        product_name: a,
                        product_brand: s,
                        segmented_product_image: i,
                        seasons: o.length > 0 ? o : null,
                        colors: u.length > 0 ? u : null,
                        dress_codes: d.length > 0 ? d : null
                    }).then(function() {
                        var e = (0, n.Z)((function(e) {
                            var t, r, n, s, a, i;
                            return (0, l.__generator)(this, (function(o) {
                                return 200 === e.status ? (f("success"), t = e.data[0], a = {
                                    closet_id: t.id,
                                    url: t.product_image,
                                    img_url: t.product_image,
                                    rmbg_url: t.segmented_product_image,
                                    original_img_url: t.user_uploaded_closet_image,
                                    category: t.category,
                                    brand: t.product_brand,
                                    name: t.product_name,
                                    source: "closet",
                                    seasons: null !== (r = t.seasons) && void 0 !== r ? r : [],
                                    colors: null !== (n = t.colors) && void 0 !== n ? n : [],
                                    dress_codes: null !== (s = t.dress_codes) && void 0 !== s ? s : []
                                }, i = (0, m.ad)([a])[0], x(i), p()) : f("error"), [2]
                            }))
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()).catch((function() {
                        f("error")
                    }))
                },
                k = function() {
                    var e = (0, n.Z)((function(e, t, r, n) {
                        var s, a, i;
                        return (0, l.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 3, , 4]), [4, fetch("/api/completeTheLookOutfits", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            imgUrl: e,
                                            itemCaption: t || "",
                                            itemCategory: r,
                                            dressCode: n
                                        })
                                    })];
                                case 1:
                                    if (!(s = o.sent()).ok) throw new Error("Could not fetch CTL outfits from backend");
                                    return [4, s.json()];
                                case 2:
                                    if (!(a = o.sent())) throw new Error("Could not fetch CTL outfits from backend");
                                    return [2, a];
                                case 3:
                                    return i = o.sent(), console.error(i), [2, null];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n, s) {
                        return e.apply(this, arguments)
                    }
                }(),
                N = function() {
                    var e = (0, n.Z)((function(e, t, r) {
                        var n, s, a;
                        return (0, l.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 3, 4, 5]), r(!0), [4, fetch("/api/numTimesWorn?" + new URLSearchParams({
                                        itemId: e
                                    }), {
                                        method: "GET"
                                    })];
                                case 1:
                                    if (!(n = i.sent()).ok) throw new Error("Could not GET number of times worn from supabase");
                                    return [4, n.json()];
                                case 2:
                                    return s = i.sent(), t(s), [3, 5];
                                case 3:
                                    return a = i.sent(), console.error(a), [3, 5];
                                case 4:
                                    return r(!1), [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                _ = function() {
                    var e = (0, n.Z)((function(e, t) {
                        var r, n, s, a, i;
                        return (0, l.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    t(!0), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 4, 5, 6]), [4, fetch("/api/closets", {
                                        method: "GET"
                                    })];
                                case 2:
                                    if (!(r = o.sent()).ok) throw new Error("Could not GET closet items from supabase");
                                    return [4, r.json()];
                                case 3:
                                    return n = o.sent(), s = n.filter((function(e) {
                                        return null !== e.product_image
                                    })).map((function(e) {
                                        return {
                                            closet_id: e.id,
                                            url: e.product_image,
                                            img_url: e.product_image,
                                            category: e.category,
                                            rmbg_url: e.segmented_product_image,
                                            original_img_url: e.user_uploaded_closet_image,
                                            source: "closet",
                                            brand: e.product_brand,
                                            name: e.product_name,
                                            seasons: e.seasons,
                                            colors: e.colors,
                                            dress_codes: e.dress_codes
                                        }
                                    })), a = (0, m.ad)(s), e(a), [3, 6];
                                case 4:
                                    return i = o.sent(), console.error(i), [3, 6];
                                case 5:
                                    return t(!1), [7];
                                case 6:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = (0, n.Z)((function(e, t) {
                        var r, n, s, a, i;
                        return (0, l.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    t(!0), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 4, 5, 6]), [4, fetch("/api/wishlists", {
                                        method: "GET"
                                    })];
                                case 2:
                                    if (!(r = o.sent()).ok) throw new Error("Could not GET wishlist items from supabase");
                                    return [4, r.json()];
                                case 3:
                                    return n = o.sent(), s = n.map((function(e) {
                                        return {
                                            id: e.id,
                                            img_url: e.product_image,
                                            url: e.product_url,
                                            name: e.product_name,
                                            brand: e.product_brand,
                                            category: e.category,
                                            source: "catalog"
                                        }
                                    })), a = (0, m.ad)(s), e(a), [3, 6];
                                case 4:
                                    return i = o.sent(), console.error(i), [3, 6];
                                case 5:
                                    return t(!1), [7];
                                case 6:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                Z = function() {
                    var e = (0, n.Z)((function(e, t, r, n, s, a) {
                        var i, o;
                        return (0, l.__generator)(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    i = {
                                        text: "".concat(e.first_name, " ").concat(e.last_name, " has scheduled to get their closet catalogued via Alta concierge on ").concat(t, " from ").concat(r, ", ").concat(n, ". Address: ").concat(s, ". Special instructions provided by the user: ").concat(a)
                                    }, l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), [4, c.Z.post("https://hooks.slack.com/services/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", JSON.stringify(i), {
                                        withCredentials: !1
                                    })];
                                case 2:
                                    return 200 === l.sent().status ? [2, "success"] : (console.error("Could not send message to slack"), [3, 4]);
                                case 3:
                                    return o = l.sent(), console.error("ERROR", o), [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n, s, a, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = ["\ud83d\udca1 Tip:  \u2764\ufe0f a piece to add it to your wishlist, and we'll text you when the price drops.", "\ud83d\udca1 Tip: click \u2764\ufe0f or \ud83d\udc4e on an outfit to help Alta further learn your style.", "\ud83d\udca1 Tip: click \ud83d\udc4e and give feedback on a recommended piece that you don't like.", "\ud83d\udca1 Tip: if you \u2764\ufe0f an outfit, it will be added to your Saved Outfits in My Collection.", "\ud83d\udca1 Tip: you can always edit the dress codes of your closet pieces for more specific recommendations.", "\ud83d\udca1 Tip: try forwarding your shopping receipts to receipts@altadaily.com to add to your collection!", "\ud83d\udcac \"It's a new era in fashion - there are no rules. I's all about the individual and their personal style.\" - Alexander McQueen", '\ud83d\udcac "Style is a way to say who you are without having to speak." -Rachel Zoe', '\ud83d\udcac "Florals? For Spring? Groundbreaking." -Miranda Priestly', '\ud83d\udcac "You can never be overdressed or overeducated." -Oscar Wilde', '\ud83d\udcac "Fashions fade, style is eternal." -Yves Saint Laurent', '\ud83d\udcac "Style is something each of us already has, all we need to do is find it." -Diane von Furstenberg']
        },
        98640: function(e, t, r) {
            r.d(t, {
                Rb: function() {
                    return a
                },
                eb: function() {
                    return i
                }
            });
            var n = r(42474),
                s = r.n(n),
                a = function(e, t) {
                    var r = new Date(t.lastModified).toISOString();
                    return s().createHash("sha256").update(e + ":" + t.name + r).digest("hex")
                },
                i = function(e, t) {
                    return s().createHash("sha256").update(e + ":" + t).digest("hex")
                }
        },
        62068: function(e, t, r) {
            r.d(t, {
                DM: function() {
                    return x
                },
                FA: function() {
                    return p
                },
                Tg: function() {
                    return h
                },
                kF: function() {
                    return k
                }
            });
            var n = r(29815),
                s = r(85893),
                a = r(17158),
                i = r(44080),
                o = r(85071),
                l = r(53252),
                c = r(53816),
                u = r(67294),
                d = r(47516),
                m = r(51667),
                f = r(38183),
                p = ["spring", "summer", "fall", "winter"],
                x = ["white", "beige", "gold", "silver", "rose gold", "yellow", "pink", "orange", "green", "magenta", "blue", "gray", "purple", "red", "brown", "navy", "diamond", "black", "caramel", "olive green", "tan", "maroon"],
                h = ["athletic", "casual", "business casual", "business professional", "semi-formal", "black tie", "party", "dressy"],
                g = function(e) {
                    var t = e.season;
                    return (0, s.jsx)("p", {
                        className: (0, m.Z)("w-min px-2 py-1 text-sm", v(t)),
                        children: t.charAt(0).toUpperCase() + t.slice(1)
                    })
                },
                b = function(e) {
                    var t = e.season,
                        r = e.onAddOrRemove,
                        n = e.isRemove;
                    return (0, s.jsxs)("button", {
                        className: (0, m.Z)("flex w-min gap-1 px-2 py-1 text-sm", v(t)),
                        onClick: function() {
                            return r(t, n)
                        },
                        children: [t.charAt(0).toUpperCase() + t.slice(1), n && (0, s.jsx)(d.czh, {
                            size: "1rem"
                        })]
                    })
                },
                v = function(e) {
                    switch (e) {
                        case "spring":
                            return "bg-lime-300";
                        case "summer":
                            return "bg-yellow-300";
                        case "fall":
                            return "bg-amber-500";
                        case "winter":
                            return "bg-sky-50"
                    }
                },
                j = function(e) {
                    var t = e.row,
                        r = e.seasons,
                        o = e.setSeasons,
                        l = e.onUpdate,
                        c = function(e, s) {
                            if (s) {
                                var a = r.filter((function(t) {
                                    return t !== e
                                }));
                                o(a), l(t, "seasons", a)
                            } else {
                                var i = (0, n.Z)(r).concat([e]);
                                o(i), l(t, "seasons", i)
                            }
                        };
                    return (0, s.jsxs)(a.v, {
                        as: "div",
                        className: "relative flex h-full min-w-[110px] max-w-[265px] items-center justify-center px-2",
                        children: [(0, s.jsxs)(a.v.Button, {
                            as: "button",
                            className: (0, m.Z)("flex w-full flex-wrap gap-2"),
                            children: [r.map((function(e, t) {
                                return (0, s.jsx)(g, {
                                    season: e
                                }, t)
                            })), 0 === r.length && "Add season"]
                        }), (0, s.jsxs)(i.u, {
                            as: "div",
                            className: "absolute left-0 top-0 z-50 flex w-[200px] flex-col border shadow-lg",
                            enter: "transition ease-out duration-200",
                            enterFrom: "transform opacity-0 scale-95",
                            enterTo: "transform opacity-100 scale-100",
                            leave: "transition ease-in duration-75",
                            leaveFrom: "transform opacity-100 scale-100",
                            leaveTo: "transform opacity-0 scale-95",
                            children: [(0, s.jsx)("span", {
                                className: "flex w-full flex-wrap gap-2 bg-gray-100 p-3",
                                children: r.map((function(e, t) {
                                    return (0, s.jsx)(b, {
                                        season: e,
                                        onAddOrRemove: c,
                                        isRemove: !0
                                    }, t)
                                }))
                            }), (0, s.jsx)(a.v.Items, {
                                as: "div",
                                className: "flex w-full flex-col gap-2 bg-tts-white p-3",
                                children: p.filter((function(e) {
                                    return !r.includes(e)
                                })).map((function(e, t) {
                                    return (0, s.jsx)(a.v.Item, {
                                        children: (0, s.jsx)(b, {
                                            season: e,
                                            onAddOrRemove: c,
                                            isRemove: !1
                                        })
                                    }, t)
                                }))
                            })]
                        })]
                    })
                },
                w = function(e) {
                    var t = e.color;
                    return (0, s.jsx)("p", {
                        className: (0, m.Z)("w-min whitespace-nowrap px-2 py-1 text-sm", k(t), N(t)),
                        children: t.charAt(0).toUpperCase() + t.slice(1)
                    })
                },
                y = function(e) {
                    var t = e.color,
                        r = e.onAddOrRemove,
                        n = e.isRemove;
                    return (0, s.jsxs)("button", {
                        className: (0, m.Z)("flex w-min gap-1 whitespace-nowrap px-2 py-1 text-sm", k(t), N(t)),
                        onClick: function() {
                            return r(t, n)
                        },
                        children: [t.charAt(0).toUpperCase() + t.slice(1), n && (0, s.jsx)(d.czh, {
                            size: "1rem"
                        })]
                    })
                },
                k = function(e) {
                    return {
                        black: "bg-[#000000]",
                        white: "bg-[#fffff2]",
                        gray: "bg-[#5A5A5A]",
                        red: "bg-[#FF0000]",
                        blue: "bg-[#0000FF]",
                        green: "bg-[#008000]",
                        yellow: "bg-[#FFFF00]",
                        orange: "bg-[#FFA500]",
                        pink: "bg-[#FF69B4]",
                        purple: "bg-[#800080]",
                        navy: "bg-[#000080]",
                        magenta: "bg-[#FF00FF]",
                        brown: "bg-[#5C4033]",
                        beige: "bg-[#F5F5DC]",
                        gold: "bg-[#FFD700]",
                        silver: "bg-[#C0C0C0]",
                        "rose gold": "bg-[#f7c5ad]",
                        diamond: "bg-[#B9F2FF]",
                        caramel: "bg-[#C78752]",
                        "olive green": "bg-[#666600]",
                        tan: "bg-[#D2B48C]",
                        maroon: "bg-[#800000]"
                    }[e]
                },
                N = function(e) {
                    return ["black", "blue", "navy", "brown", "purple", "magenta", "green", "gray"].includes(e) ? "text-tts-white" : "text-tts-black"
                },
                _ = function(e) {
                    var t = e.row,
                        r = e.colors,
                        o = e.setColors,
                        l = e.onUpdate,
                        c = function(e, s) {
                            if (s) {
                                var a = r.filter((function(t) {
                                    return t !== e
                                }));
                                o(a), l(t, "colors", a)
                            } else {
                                var i = (0, n.Z)(r).concat([e]);
                                o(i), l(t, "colors", i)
                            }
                        };
                    return (0, s.jsxs)(a.v, {
                        as: "div",
                        className: "relative flex h-full min-w-[110px] max-w-[265px] items-center justify-center px-2",
                        children: [(0, s.jsxs)(a.v.Button, {
                            as: "button",
                            className: (0, m.Z)("flex w-full flex-wrap gap-2"),
                            children: [r.map((function(e, t) {
                                return (0, s.jsx)(w, {
                                    color: e
                                }, t)
                            })), 0 === r.length && "Add color"]
                        }), (0, s.jsxs)(i.u, {
                            as: "div",
                            className: "absolute right-0 top-0 z-50 flex w-[200px] flex-col border shadow-lg",
                            enter: "transition ease-out duration-200",
                            enterFrom: "transform opacity-0 scale-95",
                            enterTo: "transform opacity-100 scale-100",
                            leave: "transition ease-in duration-75",
                            leaveFrom: "transform opacity-100 scale-100",
                            leaveTo: "transform opacity-0 scale-95",
                            children: [(0, s.jsx)("span", {
                                className: "flex w-full flex-wrap gap-2 bg-gray-100 p-3",
                                children: r.map((function(e, t) {
                                    return (0, s.jsx)(y, {
                                        color: e,
                                        onAddOrRemove: c,
                                        isRemove: !0
                                    }, t)
                                }))
                            }), (0, s.jsx)(a.v.Items, {
                                as: "div",
                                className: "flex w-full flex-col gap-2 bg-tts-white p-3",
                                children: x.filter((function(e) {
                                    return !r.includes(e)
                                })).map((function(e, t) {
                                    return (0, s.jsx)(a.v.Item, {
                                        children: (0, s.jsx)(y, {
                                            color: e,
                                            onAddOrRemove: c,
                                            isRemove: !1
                                        })
                                    }, t)
                                }))
                            })]
                        })]
                    })
                },
                C = function(e) {
                    var t = e.dressCode;
                    return (0, s.jsx)("p", {
                        className: "w-min whitespace-nowrap bg-gray-200 px-2 py-1 text-sm text-tts-black",
                        children: t.charAt(0).toUpperCase() + t.slice(1)
                    })
                },
                Z = function(e) {
                    var t = e.dressCode,
                        r = e.onAddOrRemove,
                        n = e.isRemove;
                    return (0, s.jsxs)("button", {
                        className: "flex w-min gap-1 whitespace-nowrap bg-gray-200 px-2 py-1 text-sm text-tts-black",
                        onClick: function() {
                            return r(t, n)
                        },
                        children: [t.charAt(0).toUpperCase() + t.slice(1), n && (0, s.jsx)(d.czh, {
                            size: "1rem"
                        })]
                    })
                },
                S = function(e) {
                    var t = e.row,
                        r = e.dressCodes,
                        o = e.setDressCodes,
                        l = e.onUpdate,
                        c = function(e, s) {
                            if (s) {
                                var a = r.filter((function(t) {
                                    return t !== e
                                }));
                                o(a), l(t, "dressCodes", a)
                            } else {
                                var i = (0, n.Z)(r).concat([e]);
                                o(i), l(t, "dressCodes", i)
                            }
                        };
                    return (0, s.jsxs)(a.v, {
                        as: "div",
                        className: "relative flex h-full min-w-[110px] max-w-[265px] items-center justify-center px-2",
                        children: [(0, s.jsxs)(a.v.Button, {
                            as: "button",
                            className: (0, m.Z)("flex w-full flex-wrap gap-2"),
                            children: [r.map((function(e, t) {
                                return (0, s.jsx)(C, {
                                    dressCode: e
                                }, t)
                            })), 0 === r.length && "Add dress code"]
                        }), (0, s.jsxs)(i.u, {
                            as: "div",
                            className: "absolute right-0 top-0 z-50 flex w-[200px] flex-col border shadow-lg",
                            enter: "transition ease-out duration-200",
                            enterFrom: "transform opacity-0 scale-95",
                            enterTo: "transform opacity-100 scale-100",
                            leave: "transition ease-in duration-75",
                            leaveFrom: "transform opacity-100 scale-100",
                            leaveTo: "transform opacity-0 scale-95",
                            children: [(0, s.jsx)("span", {
                                className: "flex w-full flex-wrap gap-2 bg-gray-100 p-3",
                                children: r.map((function(e, t) {
                                    return (0, s.jsx)(Z, {
                                        dressCode: e,
                                        onAddOrRemove: c,
                                        isRemove: !0
                                    }, t)
                                }))
                            }), (0, s.jsx)(a.v.Items, {
                                as: "div",
                                className: "flex w-full flex-col gap-2 bg-tts-white p-3",
                                children: h.filter((function(e) {
                                    return !r.includes(e)
                                })).map((function(e, t) {
                                    return (0, s.jsx)(a.v.Item, {
                                        children: (0, s.jsx)(Z, {
                                            dressCode: e,
                                            onAddOrRemove: c,
                                            isRemove: !1
                                        })
                                    }, t)
                                }))
                            })]
                        })]
                    })
                };
            t.ZP = function(e) {
                var t = e.data,
                    r = e.onUpdate,
                    n = e.selected,
                    a = e.onSelect,
                    i = (0, u.useState)(t.brand),
                    d = i[0],
                    m = i[1],
                    p = (0, u.useState)(t.category),
                    x = p[0],
                    h = p[1],
                    g = (0, u.useState)(t.name),
                    b = g[0],
                    v = g[1],
                    w = (0, u.useState)(t.seasons),
                    y = w[0],
                    k = w[1],
                    N = (0, u.useState)(t.colors),
                    C = N[0],
                    Z = N[1],
                    I = (0, u.useState)(t.dressCodes),
                    T = I[0],
                    O = I[1];
                (0, u.useEffect)((function() {
                    m(t.brand), h(t.category), v(t.name), k(t.seasons), Z(t.colors), O(t.dressCodes)
                }), [t]);
                var D = -1 !== n.indexOf(t.id);
                return (0, s.jsxs)(c.Z, {
                    hover: !0,
                    role: "checkbox",
                    tabIndex: -1,
                    children: [(0, s.jsx)(l.Z, {
                        padding: "checkbox",
                        children: (0, s.jsx)(o.Z, {
                            color: "primary",
                            checked: D,
                            onChange: function(e) {
                                return a(t.id)
                            }
                        })
                    }), (0, s.jsx)(l.Z, {
                        component: "th",
                        scope: "row",
                        padding: "none",
                        sx: {
                            width: "80px"
                        },
                        children: (0, s.jsx)("img", {
                            className: "aspect-square w-16 bg-transparent object-contain",
                            src: t.image,
                            alt: t.image
                        })
                    }), (0, s.jsx)(l.Z, {
                        align: "left",
                        sx: {
                            width: "250px"
                        },
                        children: (0, s.jsx)("input", {
                            className: "w-full border-gray-300 text-sm uppercase placeholder:text-gray-300 focus:border-tts-black focus:outline-none focus:ring-0",
                            type: "text",
                            value: d,
                            onChange: function(e) {
                                e.preventDefault(), m(e.target.value), r(t, "brand", e.target.value)
                            },
                            placeholder: "Add brand"
                        })
                    }), (0, s.jsx)(l.Z, {
                        align: "left",
                        sx: {
                            width: "200px"
                        },
                        children: (0, s.jsx)("select", {
                            className: "w-full border-gray-300 text-sm focus:border-tts-black focus:outline-none focus:ring-0",
                            value: x,
                            onChange: function(e) {
                                h(e.target.value), r(t, "category", e.target.value)
                            },
                            children: f.CLOSET_CATEGORIES.map((function(e, t) {
                                return (0, s.jsx)("option", {
                                    value: e,
                                    selected: e.toLowerCase() === (x || "").toLowerCase() || !x && e == f.OTHER_CATEGORY_LABEL,
                                    children: e
                                }, t)
                            }))
                        })
                    }), (0, s.jsx)(l.Z, {
                        align: "left",
                        sx: {
                            minWidth: "200px"
                        },
                        children: (0, s.jsx)("input", {
                            className: "w-full border-gray-300 text-sm placeholder:text-gray-300 focus:border-tts-black focus:outline-none focus:ring-0",
                            type: "text",
                            value: b,
                            onChange: function(e) {
                                e.preventDefault(), v(e.target.value), r(t, "name", e.target.value)
                            },
                            placeholder: "Add item color and name"
                        })
                    }), (0, s.jsx)(l.Z, {
                        align: "left",
                        className: "border",
                        sx: {
                            width: "200px"
                        },
                        children: (0, s.jsx)(j, {
                            row: t,
                            seasons: y,
                            setSeasons: k,
                            onUpdate: r
                        })
                    }), (0, s.jsx)(l.Z, {
                        align: "left",
                        className: "border",
                        sx: {
                            width: "175px"
                        },
                        children: (0, s.jsx)(_, {
                            row: t,
                            colors: C,
                            setColors: Z,
                            onUpdate: r
                        })
                    }), (0, s.jsx)(l.Z, {
                        align: "left",
                        className: "border",
                        sx: {
                            width: "250px"
                        },
                        children: (0, s.jsx)(S, {
                            row: t,
                            dressCodes: T,
                            setDressCodes: O,
                            onUpdate: r
                        })
                    })]
                })
            }
        },
        25087: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return I
                }
            });
            var n = r(85893),
                s = r(67294),
                a = r(66409),
                i = r(47516),
                o = r(41664),
                l = r.n(o),
                c = r(43990),
                u = r(58742),
                d = r(47568),
                m = r(26042),
                f = r(69396),
                p = r(29815),
                x = r(70655),
                h = r(32512),
                g = r(98640),
                b = r(15694),
                v = r(68239),
                j = function(e) {
                    var t = e.userData,
                        r = e.onAddItemsFromFiles,
                        a = (0, s.useState)([]),
                        o = a[0],
                        l = a[1],
                        u = (0, s.useState)([]),
                        j = u[0],
                        y = u[1],
                        k = (0, s.useState)("upload"),
                        N = k[0],
                        _ = k[1],
                        C = (0, s.useState)(!1),
                        Z = C[0],
                        S = C[1],
                        I = (0, s.useState)(!1),
                        T = I[0],
                        O = I[1],
                        D = (0, s.useState)(!0),
                        A = D[0],
                        E = D[1],
                        F = (0, h.uI)({
                            accept: "image/*",
                            multiple: !0,
                            onDrop: function(e) {
                                return R(e)
                            }
                        }),
                        L = F.getRootProps,
                        P = F.getInputProps,
                        R = function() {
                            var e = (0, d.Z)((function(e) {
                                var r;
                                return (0, x.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return e.length && e ? (S(!0), [4, Promise.all(e.map(function() {
                                                var e = (0, d.Z)((function(e) {
                                                    var r, n, s, a;
                                                    return (0, x.__generator)(this, (function(i) {
                                                        switch (i.label) {
                                                            case 0:
                                                                return (r = new FormData).append("file", e), s = (0, g.Rb)(null !== (n = null === t || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "", e), j.includes(s) ? [2, null] : (a = {
                                                                    imageUrl: "",
                                                                    category: "",
                                                                    retailerUrlOrFileName: e.name,
                                                                    brand: "",
                                                                    name: "",
                                                                    hash: s,
                                                                    method: "Screen Shot or Camera Roll",
                                                                    uploadState: "pending"
                                                                }, [4, (0, c.E3)(r, s, a, y)]);
                                                            case 1:
                                                                return [2, i.sent()]
                                                        }
                                                    }))
                                                }));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()))]) : [2];
                                        case 1:
                                            return r = n.sent(), l((function(e) {
                                                return (0, p.Z)(e).concat((0, p.Z)(r.filter((function(e) {
                                                    return null !== e
                                                }))))
                                            })), _("confirmation"), S(!1), [2]
                                    }
                                }))
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        z = function(e, t, r) {
                            l((function(n) {
                                var s = (0, p.Z)(n),
                                    a = (0, m.Z)({}, s[e]);
                                return a[t] = r, s[e] = a, s
                            }))
                        },
                        U = !o.every((function(e) {
                            return (null === e || void 0 === e ? void 0 : e.category) && (null === e || void 0 === e ? void 0 : e.name)
                        })),
                        M = o.filter((function(e) {
                            return "error" === (null === e || void 0 === e ? void 0 : e.uploadState)
                        }));
                    return (0, n.jsxs)("section", {
                        className: "flex w-full flex-col items-end gap-2 pb-8",
                        children: [(0, n.jsx)("div", {
                            className: "md: flex w-full flex-col gap-2 gap-4 md:grid md:grid-cols-2",
                            children: o.map((function(e, t) {
                                return "error" === e.uploadState ? null : (0, n.jsxs)("span", {
                                    className: "flex w-full flex-col border border-tts-black",
                                    children: [(0, n.jsxs)("span", {
                                        className: "flex w-full items-center justify-between border-b-[1px] border-tts-black p-2",
                                        children: [(0, n.jsx)("p", {
                                            className: "flex aspect-square h-full items-center justify-center text-sm font-semibold",
                                            children: t + 1
                                        }), (0, n.jsx)("button", {
                                            className: "flex aspect-square h-full items-center justify-center text-tts-black hover:bg-gray-200",
                                            onClick: function() {
                                                return l((function(e) {
                                                    return e.filter((function(e, r) {
                                                        return r !== t
                                                    }))
                                                }))
                                            },
                                            children: (0, n.jsx)(i.czh, {
                                                size: "1.5rem"
                                            })
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "w-full p-2 px-4",
                                        children: (0, n.jsx)("div", {
                                            className: "flex flex-col gap-3 md:grid md:grid-cols-2",
                                            children: (0, n.jsx)(b.Z, {
                                                index: t,
                                                uploadObject: e,
                                                setUploadObject: z
                                            })
                                        })
                                    })]
                                }, t)
                            }))
                        }), "confirmation" === N && M.length > 0 && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("p", {
                                className: "text-sm font-light",
                                children: "We could not upload the following files. Please try different photos."
                            }), (0, n.jsx)("div", {
                                className: "flex flex-col",
                                children: M.map((function(e, t) {
                                    return (0, n.jsx)("p", {
                                        className: "text-sm font-light",
                                        children: e.retailerUrlOrFileName
                                    }, t)
                                }))
                            })]
                        }), "confirmation" === N && (0, n.jsx)("button", {
                            className: "w-min whitespace-nowrap bg-tts-black px-4 py-2 text-sm font-semibold uppercase text-tts-white enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-75",
                            onClick: function() {
                                O(!0), r(o, O)
                            },
                            disabled: U,
                            children: T ? "adding..." : "Add to closet"
                        }), Z ? (0, n.jsxs)("div", {
                            className: "flex h-16 w-full items-center justify-center gap-1 bg-gray-400 p-2 text-sm font-semibold uppercase text-tts-black",
                            children: [(0, n.jsx)(v.Z, {
                                size: "20px"
                            }), "Uploading"]
                        }) : (0, n.jsxs)("div", (0, f.Z)((0, m.Z)({}, L()), {
                            className: "flex h-24 w-full items-center justify-center gap-1 bg-gray-200 p-2 text-sm font-semibold uppercase text-tts-black hover:cursor-pointer hover:bg-gray-400",
                            children: [(0, n.jsx)(i.UL7, {
                                size: "1.25rem"
                            }), o.length > 0 ? "Upload more images" : "Drag and drop or browse files", (0, n.jsx)("input", (0, m.Z)({}, P()))]
                        })), "upload" === N && !Z && (0, n.jsx)("div", {
                            className: "mt-4 flex w-full flex-col items-center justify-center gap-4",
                            children: (0, n.jsxs)("div", {
                                className: "w-full px-4 py-2 ".concat(A && "bg-gray-100"),
                                children: [(0, n.jsxs)("button", {
                                    onClick: function() {
                                        return E((function(e) {
                                            return !e
                                        }))
                                    },
                                    className: "flex w-full items-center text-left text-gray-500",
                                    children: [(0, n.jsx)("p", {
                                        className: "flex-grow text-sm font-semibold",
                                        children: "Not sure what to upload?"
                                    }), A ? (0, n.jsx)(i.jRD, {
                                        size: "1.25rem"
                                    }) : (0, n.jsx)(i.OrA, {
                                        size: "1.25rem"
                                    })]
                                }), A && (0, n.jsx)(w, {})]
                            })
                        })]
                    })
                },
                w = function() {
                    return (0, n.jsxs)("div", {
                        className: "mt-4",
                        children: [(0, n.jsx)("p", {
                            className: "mb-4 text-sm font-light",
                            children: "Take photos or screenshots of clothes, shoes, and accessories against a solid white or black background. We recommend hanging pieces on an over-the-door hook, or laying your pieces layflat style. You can always upload more later!"
                        }), (0, n.jsx)("p", {
                            className: "mb-4 text-sm font-light",
                            children: "Alta will automatically caption and categorize your pieces."
                        }), (0, n.jsx)("p", {
                            className: "mb-4 text-sm font-light",
                            children: "Please upload no more than 20 photos at a time (this will be increased soon)."
                        }), (0, n.jsxs)("div", {
                            className: "mb-4 flex flex-col",
                            children: [(0, n.jsx)("p", {
                                className: "mb-2 text-sm font-semibold",
                                children: "Examples"
                            }), (0, n.jsx)("img", {
                                alt: "Photo holding clothing, shoes, clothing on hanger",
                                src: "/images/SamplesNotConcierge.png",
                                className: "object-contain"
                            })]
                        })]
                    })
                },
                y = {
                    imageUrl: "",
                    category: "",
                    retailerUrlOrFileName: "",
                    brand: "",
                    name: "",
                    hash: "",
                    method: "Product Link",
                    uploadState: "pending"
                },
                k = function(e) {
                    var t = e.userData,
                        r = e.onAddItemsWithLinks,
                        a = (0, s.useState)([y]),
                        o = a[0],
                        l = a[1],
                        u = (0, s.useState)("links"),
                        d = u[0],
                        f = u[1],
                        x = (0, s.useState)(!1),
                        h = x[0],
                        g = x[1],
                        v = (0, s.useState)(!1),
                        j = v[0],
                        w = v[1],
                        k = function(e, t, r) {
                            l((function(n) {
                                var s = (0, p.Z)(n),
                                    a = (0, m.Z)({}, s[e]);
                                return a[t] = r, s[e] = a, s
                            }))
                        },
                        N = o.every((function(e) {
                            return e.imageUrl
                        })),
                        _ = N && !o.every((function(e) {
                            return e.category && e.name
                        })),
                        C = o.filter((function(e) {
                            return "error" === e.uploadState
                        }));
                    return (0, n.jsxs)("section", {
                        className: "flex w-full flex-col items-end gap-3",
                        children: [(0, n.jsx)("div", {
                            className: "flex w-full flex-col gap-4 md:grid md:grid-cols-2",
                            children: o.map((function(e, t) {
                                return "error" === e.uploadState ? null : (0, n.jsxs)("span", {
                                    className: "flex w-full flex-col border border-tts-black",
                                    children: [(0, n.jsxs)("span", {
                                        className: "flex w-full items-center justify-between border-b-[1px] border-tts-black p-2",
                                        children: [(0, n.jsx)("p", {
                                            className: "flex aspect-square h-full items-center justify-center text-sm font-semibold",
                                            children: t + 1
                                        }), (0, n.jsx)("button", {
                                            className: "flex aspect-square h-full items-center justify-center text-tts-black hover:bg-gray-200",
                                            onClick: function() {
                                                return l((function(e) {
                                                    return e.filter((function(e, r) {
                                                        return r !== t
                                                    }))
                                                }))
                                            },
                                            children: (0, n.jsx)(i.czh, {
                                                size: "1.5rem"
                                            })
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "w-full p-2 px-4",
                                        children: e.imageUrl ? (0, n.jsx)("div", {
                                            className: "flex flex-col gap-3 md:grid md:grid-cols-2",
                                            children: (0, n.jsx)(b.Z, {
                                                index: t,
                                                uploadObject: e,
                                                setUploadObject: k
                                            })
                                        }) : (0, n.jsx)("input", {
                                            type: "text",
                                            className: "w-full grow border-b-[1px] border-tts-black p-2 text-sm hover:bg-gray-200 focus:border-tts-black focus:outline-0 focus:ring-0",
                                            placeholder: "Paste a product link or an image link",
                                            value: e.retailerUrlOrFileName,
                                            onChange: function(e) {
                                                return k(t, "retailerUrlOrFileName", e.target.value)
                                            }
                                        })
                                    })]
                                }, t)
                            }))
                        }), (0, n.jsx)("button", {
                            className: "w-min whitespace-nowrap bg-tts-black px-4 py-2 text-sm font-semibold uppercase text-tts-white enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-75",
                            onClick: function() {
                                N ? (w(!0), r(o, w)) : (g(!0), (0, c.uz)(t, o, l, g, f))
                            },
                            disabled: _,
                            children: N ? j ? "Adding..." : "Add to closet" : h ? "Saving..." : "Continue"
                        }), (0, n.jsxs)("button", {
                            className: "flex h-16 w-full items-center justify-center gap-1 bg-gray-200 p-2 text-sm font-semibold uppercase text-tts-black hover:bg-gray-400",
                            onClick: function() {
                                return l((function(e) {
                                    return (0, p.Z)(e).concat([y])
                                }))
                            },
                            children: [(0, n.jsx)(i.poH, {
                                size: "1.25rem"
                            }), "Add More"]
                        }), "confirmation" === d && C.length > 0 && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("p", {
                                className: "text-left text-sm font-light text-red-500",
                                children: "The following retailers don't allow us to get item details (wer'e working on it!). Please add the product via Database or Screenshots."
                            }), (0, n.jsx)("div", {
                                className: "flex flex-col",
                                children: C.map((function(e, t) {
                                    return (0, n.jsxs)("p", {
                                        className: "text-sm font-light",
                                        children: [e.retailerUrlOrFileName.split(".com")[0], ".com"]
                                    }, t)
                                }))
                            })]
                        })]
                    })
                },
                N = function(e) {
                    var t = e.onClickScheduleConcierge;
                    return (0, n.jsxs)("section", {
                        className: "flex w-full flex-col gap-2",
                        children: [(0, n.jsx)("button", {
                            className: "flex w-full p-2 text-sm font-semibold underline underline-offset-2 hover:decoration-gray-400",
                            onClick: t,
                            children: "Schedule a closet concierge \u2197"
                        }), (0, n.jsx)(l(), {
                            href: "/upload",
                            children: (0, n.jsx)("button", {
                                className: "flex w-full p-2 text-sm font-semibold underline underline-offset-2 hover:decoration-gray-400",
                                children: "Upload concierge session photos \u2197"
                            })
                        }), (0, n.jsx)("button", {
                            className: "flex w-full p-2 text-left text-sm font-semibold underline underline-offset-2 hover:decoration-gray-400",
                            onClick: function() {
                                return window.open("mailto:receipts@altadaily.com", "_blank")
                            },
                            children: "Forward email receipts to receipts@altadaily.com \u2197"
                        }), (0, n.jsx)(l(), {
                            href: "/starterCloset",
                            children: (0, n.jsx)("button", {
                                className: "flex w-full p-2 text-sm font-semibold underline underline-offset-2 hover:decoration-gray-400",
                                children: "Browse our basics library \u2197"
                            })
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsxs)("p", {
                                className: "w-full p-2 text-sm font-semibold underline underline-offset-2",
                                children: [" ", "Video-to-Closet"]
                            }), (0, n.jsx)("p", {
                                className: "w-full p-2 text-sm",
                                children: "New! Email jenny@altadaily.com a 1-2 minute video of your closet, and have ALTA add the pieces to your digital closet for you. We recommend capturing one category (such as shoes or outerwear) at a time, and try to get the entire item in the frame. (Note: if you want exact brands and product names, we recommend using Database, Links, or Email Receipts.)"
                            }), (0, n.jsx)("img", {
                                src: " https://res.cloudinary.com/flagshipcloud/image/upload/v1705009423/landing/before_vs_after_Large_heavy_tmrahi.gif",
                                alt: "Video to closet GIF"
                            })]
                        })]
                    })
                },
                _ = function(e) {
                    var t = e.userData,
                        r = e.selectedMethod,
                        s = e.onClickScheduleConcierge,
                        a = e.onAddItem,
                        i = e.onSuccess,
                        o = function(e, t) {
                            (0, c.BU)(e, a).finally((function() {
                                t(!1), i()
                            }))
                        };
                    return (0, n.jsxs)("section", {
                        className: "mt-6 flex w-full flex-col",
                        children: ["links" === r && (0, n.jsx)(k, {
                            userData: t,
                            onAddItemsWithLinks: o
                        }), "files" === r && (0, n.jsx)(j, {
                            userData: t,
                            onAddItemsFromFiles: o
                        }), "database" === r && (0, n.jsx)(u.ZP, {
                            userData: t,
                            onAddItemsFromDatabase: o
                        }), "concierge" === r && (0, n.jsx)(N, {
                            onClickScheduleConcierge: s
                        })]
                    })
                },
                C = r(97517),
                Z = r(86805),
                S = r(51667),
                I = function(e) {
                    var t = e.userData,
                        r = e.open,
                        o = e.setOpen,
                        l = e.onAddItem,
                        c = e.setIsFlagshipConciergeModalOpen,
                        u = (0, s.useState)("database"),
                        d = u[0],
                        m = u[1];
                    (0, s.useEffect)((function() {
                        r || m("database")
                    }), [r]);
                    return (0, n.jsx)(Z.Z, {
                        open: r,
                        setOpen: o,
                        children: (0, n.jsxs)(a.ZP, {
                            className: "mx-auto flex w-full max-w-7xl flex-col sm:px-6 lg:px-8",
                            children: [(0, n.jsxs)("aside", {
                                className: "relative flex w-full items-center justify-between p-6",
                                children: [(0, n.jsx)(C.PZ, {
                                    onClick: function() {
                                        return o(!1)
                                    }
                                }), (0, n.jsx)("div", {
                                    className: "absolute inset-0 z-0 flex flex-col items-center justify-center",
                                    children: (0, n.jsx)("h1", {
                                        className: "whitespace-nowrap text-center text-sm font-semibold text-tts-black",
                                        children: "Add items"
                                    })
                                })]
                            }), (0, n.jsxs)("section", {
                                className: "relative flex w-full flex-col bg-white px-6",
                                children: [(0, n.jsx)("p", {
                                    className: "text-xs",
                                    children: "Only upload items such as pajamas, undergarments, swimsuits, and costumes if you want them to be included in your outfit recommendations."
                                }), (0, n.jsx)("p", {
                                    className: "text-xs text-purple-500",
                                    children: "Need help uploading closet pieces? Chat us!"
                                }), (0, n.jsxs)("span", {
                                    className: "mt-4 flex w-full items-center",
                                    children: [(0, n.jsxs)("button", {
                                        className: (0, S.Z)("flex w-1/3 flex-col items-center gap-2 border-b-[1px] py-2 sm:hover:bg-gray-200", "database" === d && "border-tts-black"),
                                        onClick: function() {
                                            return m("database")
                                        },
                                        children: [(0, n.jsx)(i.Goc, {
                                            size: "1.5rem"
                                        }), (0, n.jsx)("p", {
                                            className: "text-center text-xs uppercase text-black hover:cursor-pointer",
                                            children: "Database"
                                        })]
                                    }), (0, n.jsxs)("button", {
                                        className: (0, S.Z)("flex w-1/3 flex-col items-center gap-2 border-b-[1px] py-2 sm:hover:bg-gray-200", "links" === d && "border-tts-black"),
                                        onClick: function() {
                                            return m("links")
                                        },
                                        children: [(0, n.jsx)(i.BNl, {
                                            size: "1.5rem"
                                        }), (0, n.jsx)("p", {
                                            className: "text-center text-xs uppercase text-black hover:cursor-pointer",
                                            children: "Links"
                                        })]
                                    }), (0, n.jsxs)("button", {
                                        className: (0, S.Z)("flex w-1/3 flex-col items-center gap-2 border-b-[1px] py-2 sm:hover:bg-gray-200", "files" === d && "border-tts-black"),
                                        onClick: function() {
                                            return m("files")
                                        },
                                        children: [(0, n.jsx)(i.VU$, {
                                            size: "1.5rem"
                                        }), (0, n.jsx)("p", {
                                            className: "text-center text-xs uppercase text-black hover:cursor-pointer",
                                            children: "Photos & Screenshots"
                                        })]
                                    }), (0, n.jsxs)("button", {
                                        className: (0, S.Z)("flex h-full w-1/3 flex-col items-center gap-2 border-b-[1px] py-2 sm:hover:bg-gray-200", "concierge" === d && "border-tts-black"),
                                        onClick: function() {
                                            return m("concierge")
                                        },
                                        children: [(0, n.jsx)("p", {
                                            className: "mb-1 text-[24px] uppercase",
                                            children: "A"
                                        }), (0, n.jsx)("p", {
                                            className: "text-center text-xs uppercase text-black hover:cursor-pointer",
                                            children: "Concierge"
                                        })]
                                    })]
                                }), (0, n.jsx)(_, {
                                    userData: t,
                                    selectedMethod: d,
                                    onClickScheduleConcierge: function() {
                                        return c(!0)
                                    },
                                    onAddItem: l,
                                    onSuccess: function() {
                                        return o(!1)
                                    }
                                })]
                            })]
                        })
                    })
                }
        },
        47929: function(e, t, r) {
            var n = r(47568),
                s = r(70655),
                a = r(85893),
                i = r(6154),
                o = r(41664),
                l = r.n(o),
                c = r(67294),
                u = r(43990),
                d = r(59081),
                m = r(51667),
                f = r(31618),
                p = ["Morning", "Afternoon", "Evening", "Flexible"];
            t.Z = function(e) {
                var t = e.isOpen,
                    r = e.setIsOpen,
                    o = (0, c.useContext)(f.St),
                    x = (0, c.useState)(!1),
                    h = x[0],
                    g = x[1],
                    b = (0, c.useState)(""),
                    v = b[0],
                    j = b[1],
                    w = (0, c.useState)(""),
                    y = w[0],
                    k = w[1],
                    N = (0, c.useState)(""),
                    _ = N[0],
                    C = N[1],
                    Z = (0, c.useState)(""),
                    S = Z[0],
                    I = Z[1],
                    T = (0, c.useState)(!1),
                    O = T[0],
                    D = T[1],
                    A = function() {
                        var e = (0, n.Z)((function() {
                            var e;
                            return (0, s.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return o ? (e = o.timezone ? o.timezone : "", D(!0), [4, i.Z.post("/api/closetCatalogueAppointments", {
                                            time_range: y,
                                            date: v,
                                            address: _,
                                            timezone: e,
                                            special_instructions: S
                                        })]) : [3, 2];
                                    case 1:
                                        200 != t.sent().status && console.error("Could not submit appointment"), (0, u.Yh)(o, v, y, e, _, S), D(!1), r(!1), g(!1), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    E = !v || !y || !_;
                return (0, a.jsx)(d.Z, {
                    open: t,
                    setOpen: function() {
                        r(!1), g(!1)
                    },
                    options: {
                        modalWidth: "large"
                    },
                    children: (0, a.jsxs)("div", {
                        className: "flex w-full flex-col justify-center gap-4",
                        children: [!h && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("div", {
                                className: "flex w-full flex-col justify-center md:flex-row",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex w-full flex-col gap-4 border-b-[1px] p-6 md:border-b-[0px] md:border-r-[1px]",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-center text-[15.5px] font-bold md:text-2xl",
                                        children: "\u2728ALTA CLOSET CONCIERGE\u2728"
                                    }), (0, a.jsx)("div", {
                                        children: "In partnership with Marie Kondo's KonMari International, Alta is excited to offer a closet concierge service with professional organizers who will help you tidy and catalog your closet."
                                    }), (0, a.jsxs)("ul", {
                                        className: "list-disc pl-4 font-light",
                                        children: [(0, a.jsx)("li", {
                                            className: "mb-2 text-sm",
                                            children: "In your 3 hour collaborative session, you will learn the KonMari method, apply tidying techniques, and create a space that brings you joy and peace."
                                        }), (0, a.jsx)("li", {
                                            className: "mb-2 text-sm",
                                            children: "Your concierge will help you catalogue around 150 key pieces, and we recommend booking additional sessions for changing of seasons, or for multiple-closet homes."
                                        }), (0, a.jsxs)("li", {
                                            className: "text-sm",
                                            children: ["Photos of your pieces can then be uploaded to your Alta digital closet. For more information, see our", " ", (0, a.jsx)(l(), {
                                                href: "/faq",
                                                children: (0, a.jsx)("span", {
                                                    className: "text-sky-600 sm:hover:cursor-pointer sm:hover:underline",
                                                    children: "FAQ"
                                                })
                                            }), "."]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex w-full flex-col items-center p-6 md:w-1/2",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [(0, a.jsx)("div", {
                                            className: "text-2xl font-bold",
                                            children: "$275"
                                        }), (0, a.jsx)("div", {
                                            className: "text-xs font-light",
                                            children: "initial 3 hour session*"
                                        })]
                                    }), (0, a.jsx)("button", {
                                        onClick: function() {
                                            return g(!0)
                                        },
                                        className: "mt-6 w-full bg-black py-2 text-sm uppercase text-white md:mt-auto",
                                        children: "Book appointment"
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "my-4 flex h-60 w-full justify-center gap-8 sm:h-[360px]",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex w-1/3 flex-col items-center justify-center gap-2",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-sm font-light",
                                        children: "Before: messy"
                                    }), (0, a.jsx)("img", {
                                        alt: "Photo of clothing on hanger, screenshot of clothing, photo of woman wearing clothing, mirror selfie",
                                        src: "/images/Messy.png",
                                        className: "h-[200px] object-cover sm:h-[360px]"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex w-1/3 flex-col items-center justify-center gap-2",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-sm font-light",
                                        children: "After: \u2728clean\u2728"
                                    }), (0, a.jsx)("img", {
                                        alt: "Photo of clothing on hanger, screenshot of clothing, photo of woman wearing clothing, mirror selfie",
                                        src: "/images/Clean.png",
                                        className: "h-[200px] object-cover sm:h-[360px]"
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "px-6 text-left text-xs font-light",
                                children: "*Cancellations within 24 hours prior to the scheduled appointment will result in the full amount being charged."
                            })]
                        }), h && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: "-mt-[5px] ml-auto text-xs text-black hover:cursor-pointer sm:hidden",
                                onClick: function() {
                                    r(!1), g(!1)
                                },
                                children: "CLOSE"
                            }), (0, a.jsx)("div", {
                                className: "flex w-full flex-col items-center justify-center gap-4 md:flex-row",
                                children: (0, a.jsxs)("div", {
                                    className: "flex w-full flex-col items-center justify-center",
                                    children: [(0, a.jsx)("div", {
                                        className: "mt-4 w-full",
                                        children: "What are some upcoming dates you are available for a 3-hour Tidying Lesson and Concierge Organization session?"
                                    }), (0, a.jsx)("input", {
                                        className: "ml-auto mt-2 w-full border border-black px-3 py-2 text-sm focus:border-black focus:outline-none",
                                        placeholder: "Such as: Monday the 14th, and anytime the week of the 21st...",
                                        value: v,
                                        onChange: function(e) {
                                            return j(e.target.value)
                                        }
                                    }), (0, a.jsx)("div", {
                                        className: "mt-4 w-full",
                                        children: "What times of day are generally best for you?"
                                    }), (0, a.jsx)("div", {
                                        className: "mt-2 grid w-full grid-cols-2 gap-4",
                                        children: p.map((function(e, t) {
                                            var r = e === y;
                                            return (0, a.jsx)("div", {
                                                onClick: function() {
                                                    return k(e)
                                                },
                                                className: (0, m.Z)("w-full border border-black px-6 py-2 text-center text-sm font-light text-black hover:cursor-pointer hover:bg-gray-300", r ? "bg-black text-white hover:bg-black" : ""),
                                                children: e
                                            }, t)
                                        }))
                                    }), (0, a.jsx)("div", {
                                        className: "mt-6 w-full",
                                        children: "Home address"
                                    }), (0, a.jsx)("input", {
                                        className: "mt-2 w-full border border-black px-3 py-2 text-sm focus:border-black focus:outline-none",
                                        value: _,
                                        placeholder: "123 Oz Rd. Apt 4, Emerald City, NY 11111",
                                        onChange: function(e) {
                                            C(e.target.value)
                                        }
                                    }), (0, a.jsx)("div", {
                                        className: "mt-6 w-full",
                                        children: "Any additional entry instructions?"
                                    }), (0, a.jsx)("input", {
                                        className: "mt-2 w-full border border-black px-3 py-2 text-sm focus:border-black focus:outline-none",
                                        value: S,
                                        placeholder: "Ring the doorbell or call me when you arrive...",
                                        onChange: function(e) {
                                            I(e.target.value)
                                        }
                                    }), (0, a.jsx)("button", {
                                        disabled: E,
                                        className: (0, m.Z)("mt-6 w-full bg-black py-2 text-center text-sm uppercase text-white", E ? "cursor-not-allowed opacity-50" : ""),
                                        onClick: (0, n.Z)((function() {
                                            return (0, s.__generator)(this, (function(e) {
                                                return [2, A()]
                                            }))
                                        })),
                                        children: O ? "Booking..." : "Book"
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        58742: function(e, t, r) {
            r.d(t, {
                I2: function() {
                    return x
                },
                QY: function() {
                    return h
                },
                Uw: function() {
                    return g
                }
            });
            var n = r(26042),
                s = r(828),
                a = r(29815),
                i = r(85893),
                o = r(34386),
                l = r(67294),
                c = r(47516),
                u = r(43990),
                d = r(98640),
                m = r(15694),
                f = r(8002),
                p = r(51667),
                x = {
                    Tops: ["Blouse", "Turtleneck", "T-shirt", "Tshirt", "Shirt", "Button-down", "Polo", "Tank top", "Tanktop", "tank", "Sweater", "Crop top", "Cami", "Bodysuit"],
                    Bottoms: ["Jeans", "Trousers", "Shorts", "Skirt", "Leggings", "Sweatpants", "Chinos", "Joggers", "Cargo pants", "Culottes", "Dress pants", "Pants"],
                    Accessories: ["Scarf", "Hat", "Belt", "Sunglasses", "Gloves", "Socks", "Tights", "Beanie"],
                    Shoes: ["Sneakers", "Boots", "Sandals", "Heels", "Flats", "Loafers", "Oxfords", "Slippers", "Mules", "Espadrilles", "Wedges"],
                    Jewelry: ["Necklace", "Earrings", "Bracelet", "Ring", "Watch", "Anklet", "Brooch", "Cufflinks", "Choker", "Bangle", "Pendant"],
                    Outerwear: ["Jacket", "Coat", "Blazer", "Parka", "Trench", "Puffer", "Bomber", "Windbreaker", "Peacoat", "Poncho", "Hoodie", "Cardigan"],
                    Dresses: ["Gown", "Sundress", "Jumpsuit", "Romper"],
                    "Other Pieces": ["Swimsuit", "Bikini", "Bra", "Pajamas"]
                },
                h = function(e) {
                    var t = e.addedLinks,
                        r = e.searchResults,
                        n = e.isSearching,
                        s = e.onClickResult;
                    return (0, i.jsx)("div", {
                        className: "grid w-full grid-cols-2 gap-2 md:grid-cols-4",
                        children: n ? Array.from(Array(4).keys()).map((function(e) {
                            return (0, i.jsx)("div", {
                                className: "aspect-square w-full animate-pulse bg-gray-200"
                            }, e)
                        })) : r.map((function(e, r) {
                            return (0, i.jsxs)("button", {
                                className: (0, p.Z)("flex w-full flex-col p-2 hover:bg-gray-200", (n = e.imgUrl, t.includes(n) && "bg-gray-200 opacity-90")),
                                onClick: function() {
                                    return function(e) {
                                        s(e)
                                    }(e)
                                },
                                children: [(0, i.jsx)("img", {
                                    src: e.imgUrl,
                                    alt: e.name,
                                    className: "mb-1 aspect-square w-full border object-contain"
                                }), (0, i.jsx)("p", {
                                    className: "w-full overflow-hidden text-ellipsis whitespace-nowrap text-left text-xs font-light text-gray-600",
                                    children: e.brand
                                }), (0, i.jsx)("p", {
                                    className: "w-full overflow-hidden text-ellipsis whitespace-nowrap text-left text-xs font-light",
                                    children: e.name
                                })]
                            }, r);
                            var n
                        }))
                    })
                },
                g = function(e) {
                    if ("" === e) return !1;
                    var t = new Date(e),
                        r = new Date;
                    return t > new Date(r.getFullYear(), r.getMonth(), r.getDate() - 3)
                };
            t.ZP = function(e) {
                var t = e.userData,
                    r = e.onAddItemsFromDatabase,
                    b = "Both" === (null === t || void 0 === t ? void 0 : t.gender) ? "" : (null === t || void 0 === t ? void 0 : t.gender) || "",
                    v = g((null === t || void 0 === t ? void 0 : t.created_at) || ""),
                    j = (0, l.useState)(""),
                    w = j[0],
                    y = j[1],
                    k = (0, l.useState)([]),
                    N = k[0],
                    _ = k[1],
                    C = (0, l.useState)([]),
                    Z = C[0],
                    S = C[1],
                    I = (0, l.useState)(!1),
                    T = I[0],
                    O = I[1],
                    D = (0, l.useState)(!1),
                    A = D[0],
                    E = D[1],
                    F = (0, f.w)().showSnackbar,
                    L = (0, l.useRef)(null),
                    P = function(e, t, r) {
                        _((function(s) {
                            var i = (0, a.Z)(s),
                                o = (0, n.Z)({}, i[e]);
                            return o[t] = r, i[e] = o, i
                        }))
                    },
                    R = !N.every((function(e) {
                        return e.category && e.name
                    }));
                return (0, i.jsxs)("section", {
                    className: "flex w-full flex-col items-end gap-6 pb-8",
                    children: [N.length > 0 && (0, i.jsx)("div", {
                        className: "flex w-full flex-col gap-2 gap-4 md:grid md:grid-cols-2",
                        children: N.map((function(e, t) {
                            return (0, i.jsxs)("span", {
                                className: "flex w-full flex-col border border-tts-black",
                                children: [(0, i.jsxs)("span", {
                                    className: "flex w-full items-center justify-between border-b-[1px] border-tts-black p-2",
                                    children: [(0, i.jsx)("p", {
                                        className: "flex aspect-square h-full items-center justify-center text-sm font-semibold",
                                        children: t + 1
                                    }), (0, i.jsx)("button", {
                                        className: "flex aspect-square h-full items-center justify-center text-tts-black hover:bg-gray-200",
                                        onClick: function() {
                                            return _((function(e) {
                                                return e.filter((function(e, r) {
                                                    return r !== t
                                                }))
                                            }))
                                        },
                                        children: (0, i.jsx)(c.czh, {
                                            size: "1.5rem"
                                        })
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "w-full p-2 px-4",
                                    children: (0, i.jsx)("div", {
                                        className: "flex flex-col gap-3 md:grid md:grid-cols-2",
                                        children: (0, i.jsx)(m.Z, {
                                            index: t,
                                            uploadObject: e,
                                            setUploadObject: P
                                        })
                                    })
                                })]
                            }, t)
                        }))
                    }), N.length > 0 && (0, i.jsx)("button", {
                        className: "w-min whitespace-nowrap bg-tts-black px-4 py-2 text-sm font-semibold uppercase text-tts-white enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-75",
                        onClick: function() {
                            E(!0), r(N, E)
                        },
                        disabled: R,
                        children: A ? "Adding..." : "Add to closet"
                    }), (0, i.jsxs)("span", {
                        className: "flex w-full flex-col",
                        children: [(0, i.jsx)("label", {
                            className: "mb-1 text-base font-light",
                            children: N.length > 0 ? "Add more" : "Search for a product"
                        }), (0, i.jsxs)("span", {
                            className: (0, p.Z)("flex w-full items-center border border-tts-black bg-tts-white p-2 sm:hover:bg-gray-200", L && L.current === document.activeElement && "sm:hover:bg-tts-white"),
                            children: [(0, i.jsx)("div", {
                                className: "shrink-0",
                                children: (0, i.jsx)(c.Goc, {
                                    size: "1rem"
                                })
                            }), (0, i.jsx)("input", {
                                ref: L,
                                type: "text",
                                className: "w-full border border-transparent bg-inherit text-sm focus:border-transparent focus:outline-none focus:ring-0",
                                placeholder: "White Nike Air Force One Sneakers (try color + brand + item description)",
                                value: w,
                                onChange: function(e) {
                                    return y(e.target.value)
                                },
                                onKeyDown: function(e) {
                                    "Enter" === e.key && function() {
                                        O(!0);
                                        var e = w + " " + b;
                                        (0, u.Xe)(e, S, O)
                                    }()
                                }
                            }), w && (0, i.jsx)(o.Z, {
                                title: "CLEAR",
                                children: (0, i.jsx)("button", {
                                    className: "shrink-0",
                                    onClick: function() {
                                        return y("")
                                    },
                                    children: (0, i.jsx)(c.czh, {
                                        size: "1.25rem",
                                        fill: "gray"
                                    })
                                })
                            })]
                        })]
                    }), (0, i.jsx)(h, {
                        addedLinks: N.map((function(e) {
                            return e.imageUrl
                        })),
                        searchResults: Z,
                        isSearching: T,
                        onClickResult: function(e) {
                            var r, n = "";
                            Object.entries(x).forEach((function(t) {
                                var r = (0, s.Z)(t, 2),
                                    a = r[0];
                                r[1].some((function(t) {
                                    return e.name.toLowerCase().includes(t.toLowerCase())
                                })) && (n = a)
                            }));
                            var i = {
                                imageUrl: e.imgUrl,
                                category: n,
                                brand: e.brand,
                                name: e.name,
                                uploadState: "pending",
                                hash: (0, d.eb)(null !== (r = null === t || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : "", e.imgUrl),
                                method: "Google Image Search",
                                retailerUrlOrFileName: e.retailerUrl
                            };
                            _((function(e) {
                                return (0, a.Z)(e).concat([i])
                            })), 0 === N.length && v && F("You can select & add multiple pieces at once. Welcome to Alta!")
                        }
                    })]
                })
            }
        },
        15694: function(e, t, r) {
            var n = r(85893),
                s = r(38183);
            t.Z = function(e) {
                var t = e.index,
                    r = e.uploadObject,
                    a = e.setUploadObject,
                    i = function(e, r) {
                        return a(t, e, r)
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("img", {
                        className: "aspect-square w-full object-contain",
                        src: r.imageUrl,
                        alt: "Item image"
                    }), (0, n.jsxs)("div", {
                        className: "flex w-full flex-col",
                        children: [(0, n.jsx)("p", {
                            className: "mb-1 text-xs font-light uppercase",
                            children: "Product Name"
                        }), (0, n.jsx)("input", {
                            className: "mb-2 w-full border p-2 text-xs",
                            type: "text",
                            placeholder: "Red halter maxi dress",
                            onChange: function(e) {
                                return i("name", e.target.value)
                            },
                            value: r.name
                        }), (0, n.jsx)("p", {
                            className: "mb-1 text-xs font-light uppercase",
                            children: "Brand (optional)"
                        }), (0, n.jsx)("input", {
                            className: "mb-2 w-full border p-2 text-xs",
                            type: "text",
                            placeholder: "E.g. Ralph Lauren",
                            onChange: function(e) {
                                return i("brand", e.target.value)
                            },
                            value: r.brand
                        }), (0, n.jsx)("p", {
                            className: "mb-1 text-xs font-light uppercase",
                            children: "Category"
                        }), (0, n.jsxs)("select", {
                            className: "mb-4 w-full text-xs uppercase",
                            value: r.category,
                            onChange: function(e) {
                                i("category", e.target.value)
                            },
                            children: [(0, n.jsx)("option", {
                                value: "",
                                disabled: !0,
                                children: "Please select a category"
                            }), s.CLOSET_CATEGORIES.map((function(e) {
                                return (0, n.jsx)("option", {
                                    value: e,
                                    children: e
                                }, e)
                            }))]
                        }), r.category || r.name ? r.category ? r.name ? null : (0, n.jsx)("p", {
                            className: "mt-4 text-xs text-red-500",
                            children: "Please add the product name to proceed."
                        }) : (0, n.jsx)("p", {
                            className: "mt-4 text-xs text-red-500",
                            children: "Please select a category to proceed."
                        }) : (0, n.jsx)("p", {
                            className: "mt-4 text-xs text-red-500",
                            children: "Please select a category and add the product name to proceed."
                        })]
                    })]
                })
            }
        },
        532: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return I
                }
            });
            var n = r(29815),
                s = r(85893),
                a = r(6154),
                i = r(80008),
                o = r.n(i),
                l = r(67294),
                c = r(66409),
                u = r(47516),
                d = r(99304),
                m = r(2261),
                f = r(44976),
                p = r(43990),
                x = r(63430),
                h = r(950),
                g = r(17589),
                b = r(92046),
                v = r(38824),
                j = function(e) {
                    var t = e.item,
                        r = e.outfit,
                        a = e.userData,
                        i = (0, l.useState)(t),
                        o = i[0],
                        c = i[1],
                        u = (0, l.useState)(!1),
                        d = u[0],
                        m = u[1],
                        f = r.outfit_name,
                        p = r.pieces,
                        j = (0, n.Z)((0, v.ad)(p).filter((function(e, t, r) {
                            return t === r.findIndex((function(t) {
                                return t.imageSrc === e.imageSrc
                            }))
                        }))).concat([t]),
                        w = j.length,
                        y = "What to wear with outfit: ".concat(f);
                    return (0, s.jsxs)("div", {
                        className: "flex w-full flex-col items-center gap-2",
                        children: [(0, s.jsxs)("div", {
                            className: "flex w-full flex-wrap pb-8 sm:w-[500px] sm:border sm:p-6 sm:pb-6",
                            children: [5 === w && (0, s.jsx)(x.E, {
                                outfitItems: j,
                                isEditView: !1,
                                userData: a,
                                setProductToOpenModalFor: c,
                                setIsProductDetailsModalOpen: m,
                                queryString: y,
                                isFromCloset: !0,
                                context: "complete_the_look"
                            }), 4 === w && (0, s.jsx)(h.M, {
                                outfitItems: j,
                                isEditView: !1,
                                userData: a,
                                setProductToOpenModalFor: c,
                                setIsProductDetailsModalOpen: m,
                                queryString: y,
                                isFromCloset: !0,
                                context: "complete_the_look"
                            }), 6 === w && (0, s.jsx)(g.o, {
                                outfitItems: j,
                                isEditView: !1,
                                userData: a,
                                setProductToOpenModalFor: c,
                                setIsProductDetailsModalOpen: m,
                                queryString: y,
                                isFromCloset: !0,
                                context: "complete_the_look"
                            })]
                        }), o && (0, s.jsx)(b.Z, {
                            context: "complete_the_look",
                            product: o,
                            userData: a,
                            isModalOpen: d,
                            setIsModalOpen: m,
                            event: y
                        })]
                    })
                },
                w = r(78561),
                y = r(8002),
                k = r(97517),
                N = r(23601),
                _ = r(12367),
                C = r(86805),
                Z = r(27037),
                S = function(e) {
                    var t = e.item;
                    return "error" in t ? (0, s.jsx)("div", {
                        className: "overflow-hidden",
                        style: {
                            width: "200px",
                            height: "200px"
                        },
                        children: (0, s.jsx)("div", {
                            className: "h-full",
                            children: t.error
                        })
                    }) : (0, s.jsx)("div", {
                        className: "h-[120px] w-[120px] min-w-[120px] border border-black bg-white sm:h-[200px] sm:w-[200px] sm:min-w-[200px]",
                        children: (0, s.jsx)("div", {
                            className: "flex h-full w-full justify-center",
                            children: t.productImages.map((function(e, r) {
                                return (0, s.jsx)("img", {
                                    src: e.imageSrc,
                                    alt: t.imageAlt,
                                    className: "object-contain"
                                }, r)
                            }))
                        })
                    })
                },
                I = function(e) {
                    var t = e.isOpen,
                        r = e.setIsOpen,
                        i = e.item,
                        x = e.userData,
                        h = e.page,
                        g = e.context,
                        b = e.dressCode,
                        I = (0, y.w)().showSnackbar,
                        T = (0, l.useState)([]),
                        O = T[0],
                        D = T[1],
                        A = (0, l.useState)(null),
                        E = A[0],
                        F = A[1],
                        L = (0, l.useState)([]),
                        P = L[0],
                        R = L[1],
                        z = (0, l.useState)([]),
                        U = z[0],
                        M = z[1],
                        W = (0, l.useState)(null),
                        B = W[0],
                        H = W[1],
                        q = (0, l.useState)(p.OW[Math.floor(Math.random() * p.OW.length)]),
                        Y = q[0],
                        G = (q[1], (0, l.useState)(0)),
                        V = G[0],
                        J = G[1];
                    (0, l.useEffect)((function() {
                        t && x && i && (X(!0), (0, p.s2)(i.imageSrc, i.name, i.category, b).then((function(e) {
                            if (X(!1), !e) throw "Could not fetch outfits from backend";
                            var t, r = (t = e.outfits).filter((function(e, r) {
                                return r === t.findIndex((function(t) {
                                    return JSON.stringify(t.pieces) === JSON.stringify(e.pieces)
                                }))
                            }));
                            D(r)
                        })).catch((function(e) {
                            X(!1), console.error(e)
                        }))), t || J(0)
                    }), [t, x, i, b]);
                    var Q = (0, l.useState)(!1),
                        K = Q[0],
                        X = Q[1],
                        $ = (0, N.Z)().width,
                        ee = x && x.zip_code ? f.lookup(x.zip_code) : null,
                        te = ee ? o().tz(o()(), ee).format("YYYY-MM-DD") : o()().format("YYYY-MM-DD"),
                        re = function(e) {
                            var t = {
                                from: e.source,
                                name: e.name,
                                category: e.category,
                                imageAlt: e.img_url,
                                imageSrc: e.img_url,
                                productImages: [{
                                    name: "Ready-to-wear piece.",
                                    imageSrc: e.img_url
                                }],
                                backgroundRemovedImageUrl: e.img_url
                            };
                            return e.brand && (t.name = e.brand + " " + e.name), e.rmbg_url && (t.backgroundRemovedImageUrl = e.rmbg_url), t
                        },
                        ne = function() {
                            return (0, s.jsx)("button", {
                                className: "absolute -left-8 top-[calc((100%)/2)] z-30 flex items-center justify-center rounded-full border border-tts-black bg-tts-white",
                                onClick: function() {
                                    B && B.slidePrev()
                                },
                                children: (0, s.jsx)(u.gbs, {
                                    size: "1.5rem"
                                })
                            })
                        },
                        se = function() {
                            return (0, s.jsx)("button", {
                                className: "absolute -right-8 top-[calc((100%)/2)] z-30 flex items-center justify-center rounded-full border border-tts-black bg-tts-white",
                                onClick: function() {
                                    B && B.slideNext()
                                },
                                children: (0, s.jsx)(u.lU2, {
                                    size: "1.5rem"
                                })
                            })
                        };
                    return (0, s.jsx)(C.Z, {
                        open: t,
                        setOpen: r,
                        shouldBringContentForward: !0,
                        children: (0, s.jsxs)(c.ZP, {
                            className: "mx-auto flex w-full max-w-7xl flex-col overflow-y-auto sm:px-6 lg:px-8",
                            children: [(0, s.jsx)("aside", {
                                className: "relative flex w-full items-center justify-between p-6",
                                children: (0, s.jsx)(k.PZ, {
                                    onClick: function() {
                                        r(!1), M([]), R([])
                                    }
                                })
                            }), (0, s.jsxs)("div", {
                                className: "relative flex w-full flex-col gap-4 bg-white px-6",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex w-full flex-col",
                                    children: [(0, s.jsx)("div", {
                                        className: "pb-6 text-lg font-bold",
                                        children: "What to wear with"
                                    }), i && (0, s.jsxs)("div", {
                                        className: "flex w-full gap-4",
                                        children: [(0, s.jsx)(S, {
                                            item: i
                                        }), (0, s.jsxs)("div", {
                                            className: "flex h-full flex-col",
                                            children: [(0, s.jsx)("div", {
                                                className: "text-base font-semibold uppercase",
                                                children: i.brand
                                            }), (0, s.jsx)("div", {
                                                className: "text-sm",
                                                children: i.name
                                            })]
                                        })]
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: "text-sm",
                                    children: "Here's how you can style this piece using what you already have in your closet."
                                }), (0, s.jsx)("div", {
                                    className: "-mt-4 text-sm text-gray-500",
                                    children: "Outfits might include items from our catalog to give you the best look possible."
                                }), (0, s.jsxs)("div", {
                                    className: "relative flex w-full flex-col gap-4 py-4 md:flex-row",
                                    children: [$ >= 640 && B && !K && O.length > 0 && (0, s.jsxs)(s.Fragment, {
                                        children: [0 !== V && (0, s.jsx)(ne, {}), 0 === V && (0, s.jsx)(se, {})]
                                    }), K ? (0, s.jsxs)("div", {
                                        className: "flex h-[30px] w-full flex-col gap-4 text-left text-xs",
                                        children: [(0, s.jsx)("p", {
                                            className: "italic",
                                            children: Y
                                        }), (0, s.jsx)("p", {
                                            className: "font-bold italic text-purple-800",
                                            children: "Note: due to unprecedented demand, outfit generations may take up to 1 minute. We are upgrading our servers and speeding things up as fast as we can! \u26a1 Also, if you are not getting closet items in your Complete the Look, please chat us!"
                                        }), (0, s.jsx)("div", {
                                            className: "flex w-full flex-col pb-8 md:grid md:grid-cols-3 md:gap-6",
                                            children: $ < 640 ? (0, s.jsx)(_.Z, {}) : [0, 1, 2].map((function(e) {
                                                return (0, s.jsx)(_.Z, {}, e)
                                            }))
                                        })]
                                    }) : (0, s.jsx)("div", {
                                        className: "w-full px-1",
                                        children: (0, s.jsx)(m.tq, {
                                            pagination: $ < 640 && (!(O.length > 6) || {
                                                dynamicBullets: !0
                                            }),
                                            modules: [d.tl, d.Gk],
                                            style: {
                                                "--swiper-pagination-bottom": "52px",
                                                "--swiper-pagination-color": "black",
                                                "--swiper-pagination-bullet-inactive-color": "#999999",
                                                "--swiper-pagination-bullet-inactive-opacity": "1",
                                                "--swiper-pagination-bullet-size": "10px",
                                                "--swiper-pagination-bullet-horizontal-gap": "3px"
                                            },
                                            slidesPerView: $ < 640 ? 1 : 2.2,
                                            spaceBetween: $ < 640 ? 10 : 40,
                                            centeredSlides: $ < 640,
                                            onSwiper: function(e) {
                                                H(e)
                                            },
                                            onActiveIndexChange: function(e) {
                                                return J(e.activeIndex)
                                            },
                                            mousewheel: {
                                                forceToAxis: !0
                                            },
                                            children: i && x && O.map((function(e, t) {
                                                var r = U.includes(t),
                                                    l = P.map((function(e) {
                                                        return e.index
                                                    })).includes(t);
                                                return (0, s.jsx)(m.o5, {
                                                    style: {
                                                        position: "relative",
                                                        width: "500px"
                                                    },
                                                    children: (0, s.jsxs)("div", {
                                                        className: "w-full shrink-0",
                                                        children: [(0, s.jsx)(j, {
                                                            outfit: e,
                                                            item: i,
                                                            userData: x
                                                        }), (0, s.jsxs)("div", {
                                                            className: "flex flex-row",
                                                            children: [(0, s.jsx)("button", {
                                                                onClick: function() {
                                                                    return function(e, t) {
                                                                        x && ((0, Z.L)("".concat(h, ".").concat(g, ".complete_the_look.favorited_outfit"), x.id), U.includes(t) ? (fetch("/api/unfavoriteEventOutfit", {
                                                                            method: "POST",
                                                                            headers: {
                                                                                "Content-Type": "application/json"
                                                                            },
                                                                            body: JSON.stringify({
                                                                                modifier: "",
                                                                                event: e.outfit_name + " - Complete The Look",
                                                                                date: te ? o()(te).format("YYYY-MM-DD") : null,
                                                                                user_id: x.id,
                                                                                pieces: e.pieces.map(re)
                                                                            })
                                                                        }).then((function(e) {
                                                                            return 200 === e.status ? e.text().then((function(e) {
                                                                                return e ? JSON.parse(e) : {}
                                                                            })) : null
                                                                        })).catch((function(e) {
                                                                            return console.error(e, "Outfit could not be unfavorited"), null
                                                                        })), M((function(e) {
                                                                            return e.filter((function(e) {
                                                                                return e !== t
                                                                            }))
                                                                        }))) : (M((function(e) {
                                                                            return (0, n.Z)(e).concat([t])
                                                                        })), I("Outfit saved to My Collection"), fetch("/api/favoritedEventOutfits", {
                                                                            method: "POST",
                                                                            headers: {
                                                                                "Content-Type": "application/json"
                                                                            },
                                                                            body: JSON.stringify({
                                                                                modifier: "",
                                                                                event: e.outfit_name + " - Complete The Look",
                                                                                date: te ? o()(te).format("YYYY-MM-DD") : null,
                                                                                user_first_name: x.first_name,
                                                                                pieces: [i].concat((0, n.Z)((0, v.ad)(e.pieces))),
                                                                                outfits_seen_before_favorited: 0,
                                                                                style: e.outfit_name,
                                                                                dress_code: null,
                                                                                daily_outfit_id: null
                                                                            })
                                                                        }).then((function(e) {
                                                                            return 200 === e.status ? e.json() : null
                                                                        })).catch((function(e) {
                                                                            return console.error(e, "Outfit could not be favorited"), null
                                                                        }))))
                                                                    }(e, t)
                                                                },
                                                                className: "z-50 flex aspect-square h-8 items-center justify-center hover:cursor-pointer sm:hover:bg-gray-200",
                                                                children: r ? (0, s.jsx)(u.SEb, {
                                                                    size: "1.5rem",
                                                                    fill: "#FF3040"
                                                                }) : (0, s.jsx)(u.kTx, {
                                                                    size: "1.5rem",
                                                                    fill: "black"
                                                                })
                                                            }), (0, s.jsx)("button", {
                                                                className: "z-50 flex aspect-square h-8 items-center justify-center hover:cursor-pointer sm:hover:bg-gray-200",
                                                                onClick: function() {
                                                                    ! function(e, t) {
                                                                        if (x)
                                                                            if (P.map((function(e) {
                                                                                    return e.index
                                                                                })).includes(t)) {
                                                                                var r = P.find((function(e) {
                                                                                    return e.index === t
                                                                                }));
                                                                                (0, Z.L)("".concat(h, ".").concat(g, ".complete_the_look.undo_disliked_outfit"), x.id), a.Z.delete("/api/dislikedCompleteTheLookOutfits/".concat(null === r || void 0 === r ? void 0 : r.dislikedOutfitObjId)).then((function(e) {
                                                                                    200 === e.status && R(P.filter((function(e) {
                                                                                        return e.index != t
                                                                                    })))
                                                                                }))
                                                                            } else(0, Z.L)("".concat(h, ".").concat(g, ".complete_the_look.disliked_outfit"), x.id), F(e.outfit_name)
                                                                    }(e, t)
                                                                },
                                                                children: l ? (0, s.jsx)(u.NNt, {
                                                                    size: "1.5rem",
                                                                    fill: "black"
                                                                }) : (0, s.jsx)(u.MZj, {
                                                                    size: "1.5rem",
                                                                    fill: "black"
                                                                })
                                                            }), (0, s.jsx)(w.Z, {
                                                                isOpen: E === e.outfit_name,
                                                                pieces: (0, v.ad)(e.pieces),
                                                                onClose: function() {
                                                                    return F(null)
                                                                },
                                                                onSubmit: function(r) {
                                                                    return function(e, t, r, s) {
                                                                        var i = s.additionalFeedback,
                                                                            o = s.dislikedPieces;
                                                                        x && a.Z.post("/api/dislikedCompleteTheLookOutfits", {
                                                                            outfit: e,
                                                                            disliked_pieces: o,
                                                                            feedback: i,
                                                                            closet_item_image_url: t.imageSrc,
                                                                            closet_item_caption: t.caption,
                                                                            closet_item_category: t.category
                                                                        }).then((function(e) {
                                                                            200 === e.status && R((0, n.Z)(P).concat([{
                                                                                index: r,
                                                                                dislikedOutfitObjId: e.data.data.id
                                                                            }]))
                                                                        }))
                                                                    }(e, i, t, r)
                                                                }
                                                            })]
                                                        }), (0, s.jsx)("p", {
                                                            className: "font-base whitespace-nowrap pl-1 text-sm",
                                                            children: e.outfit_name
                                                        })]
                                                    }, t)
                                                }, t)
                                            }))
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        78561: function(e, t, r) {
            var n = r(29815),
                s = r(85893),
                a = r(67294),
                i = r(47516),
                o = r(8002),
                l = r(23601),
                c = r(8756);
            t.Z = function(e) {
                var t = e.isOpen,
                    r = e.pieces,
                    d = e.onClose,
                    m = e.onSubmit,
                    f = (0, l.Z)().width,
                    p = (0, a.useState)([]),
                    x = p[0],
                    h = p[1],
                    g = (0, a.useState)(""),
                    b = g[0],
                    v = g[1],
                    j = (0, o.w)().showSnackbar;
                return (0, s.jsxs)(c.Z, {
                    open: t,
                    setOpen: d,
                    children: [(0, s.jsxs)("p", {
                        className: "mt-4 text-sm font-semibold",
                        children: ["Tell us which pieces don't match", " ", (0, s.jsx)("span", {
                            className: "text-gray-500",
                            children: "(optional)"
                        })]
                    }), (0, s.jsx)("div", {
                        className: "mt-6 grid grid-cols-3 gap-2 md:grid-cols-5",
                        children: r.map((function(e, t) {
                            return (0, s.jsxs)("div", {
                                className: "relative w-full",
                                children: [(0, s.jsx)("img", {
                                    src: e.imageSrc,
                                    alt: e.name,
                                    className: "aspect-square w-full object-cover"
                                }), (0, s.jsx)("button", {
                                    className: "absolute right-0 top-0 flex aspect-square w-6 items-center justify-center border border-tts-black bg-tts-white hover:bg-gray-100 md:w-10",
                                    onClick: function() {
                                        return function(e) {
                                            x.includes(e) ? h((function(t) {
                                                return t.filter((function(t) {
                                                    return t !== e
                                                }))
                                            })) : h((function(t) {
                                                return (0, n.Z)(t).concat([e])
                                            }))
                                        }(e)
                                    },
                                    children: x.includes(e) ? (0, s.jsx)(i.NNt, {
                                        size: f < 640 ? "1rem" : "1.5rem",
                                        fill: "#FF3040"
                                    }) : (0, s.jsx)(i.MZj, {
                                        size: f < 640 ? "1rem" : "1.5rem",
                                        fill: "black"
                                    })
                                })]
                            }, t)
                        }))
                    }), (0, s.jsx)("p", {
                        className: "mt-6 text-sm font-semibold",
                        children: "Additional Feedback"
                    }), (0, s.jsx)("p", {
                        className: "text-xs font-medium text-gray-500",
                        children: "Please make sure your My Collection pieces were tagged by our AI with your preferred dress code"
                    }), (0, s.jsx)("textarea", {
                        className: "mt-4 w-full border text-sm focus:border-tts-black focus:outline-none focus:ring-0",
                        placeholder: "Example: I don't like the accessories",
                        value: b,
                        onChange: function(e) {
                            return v(e.target.value)
                        }
                    }), (0, s.jsx)("button", {
                        className: "mt-4 w-full border border-tts-black px-4 py-2 text-sm font-semibold uppercase text-tts-black",
                        onClick: function() {
                            m({
                                dislikedPieces: x,
                                additionalFeedback: b
                            });
                            var e = u(b.toLowerCase());
                            j(e), d()
                        },
                        children: "Hide This Outfit"
                    })]
                })
            };
            var u = function(e) {
                return e.includes("too") || e.includes("ugly") ? "Thanks for your feedback, feel free to add more Preferences in Profile! \u2728" : e.includes("no") || e.includes("dislike") || e.includes("don't") ? "Thank you, feel free to add more Personal Style Rules in Profile! \u2728" : e.includes("color") || e.includes("colors") ? "Thank you, can you also check those pieces have the right color tag in My Collection? \ud83c\udf08" : e.includes("casual") || e.includes("formal") || e.includes("dressy") ? "Thank you, can you also check those pieces have the right dress code tag in My Collection? \ud83c\udff7\ufe0f " : e.includes("two") ? "Thank you, can you also check those pieces have the right category tag in My Collection? \ud83c\udff7\ufe0f " : "Thanks for your feedback, Alta is learning your style \u2728"
            }
        },
        63430: function(e, t, r) {
            r.d(t, {
                E: function() {
                    return l
                }
            });
            var n = r(26042),
                s = r(69396),
                a = r(99534),
                i = r(85893),
                o = r(25046),
                l = function(e) {
                    if (e.outfitItems.some((function(e) {
                            return !e.category
                        }))) return (0, i.jsx)(d, (0, n.Z)({}, e));
                    var t;
                    return (t = "dress", e.outfitItems.filter((function(e) {
                        var r;
                        return null === (r = e.category) || void 0 === r ? void 0 : r.toLowerCase().includes(t.toLowerCase())
                    })))[0] ? (0, i.jsx)(c, (0, n.Z)({}, e)) : (0, i.jsx)(u, (0, n.Z)({}, e))
                },
                c = function(e) {
                    var t = e.outfitItems,
                        r = (0, a.Z)(e, ["outfitItems"]),
                        l = function(e) {
                            return t.filter((function(t) {
                                var r;
                                return null === (r = t.category) || void 0 === r ? void 0 : r.toLowerCase().includes(e.toLowerCase())
                            }))
                        },
                        c = l("dress")[0],
                        u = l("shoes")[0],
                        d = l("bag")[0],
                        m = l("jewelry"),
                        f = l("accessories")[0],
                        p = l("outerwear")[0],
                        x = m[0],
                        h = m.length > 1 ? m[1] : null;
                    return (0, i.jsxs)("div", {
                        className: "flex w-full justify-center gap-3 ",
                        children: [(0, i.jsxs)("div", {
                            className: "flex h-[400px] flex-col justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "h-2/3",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 0,
                                    item: p || (h || f),
                                    height: "tall-medium"
                                }))
                            }), (0, i.jsx)("div", {
                                className: "h-1/3",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 1,
                                    item: u,
                                    height: "short"
                                }))
                            })]
                        }), (0, i.jsx)("div", {
                            className: "flex h-[400px] flex-col",
                            children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                index: 2,
                                item: c,
                                height: "tall"
                            }))
                        }), (0, i.jsxs)("div", {
                            className: "flex h-[400px] flex-col justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "h-1/3",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 3,
                                    item: x || f,
                                    height: "short"
                                }))
                            }), (0, i.jsx)("div", {
                                className: "2/3",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 4,
                                    item: d || (f || (h || x)),
                                    height: "tall-medium"
                                }))
                            })]
                        })]
                    })
                },
                u = function(e) {
                    var t = e.outfitItems,
                        r = (0, a.Z)(e, ["outfitItems"]),
                        l = function(e) {
                            return t.filter((function(t) {
                                var r;
                                return null === (r = t.category) || void 0 === r ? void 0 : r.toLowerCase().includes(e.toLowerCase())
                            }))
                        },
                        c = l("top")[0],
                        u = l("bottom")[0],
                        d = l("shoes")[0],
                        m = l("bag")[0],
                        f = l("jewelry"),
                        p = l("accessories")[0],
                        x = l("outerwear")[0],
                        h = f[0],
                        g = f.length > 1 ? f[1] : null;
                    return (0, i.jsxs)("div", {
                        className: "flex w-full justify-center gap-3 ",
                        children: [(0, i.jsxs)("div", {
                            className: "flex h-[400px] flex-col justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "h-2/3",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 0,
                                    item: x || (h || p),
                                    height: "tall-medium"
                                }))
                            }), (0, i.jsx)("div", {
                                className: "h-1/3",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 1,
                                    item: d,
                                    height: "short"
                                }))
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "flex h-[400px] flex-col justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 2,
                                    item: c,
                                    height: "medium"
                                }))
                            }), (0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 3,
                                    item: u,
                                    height: "medium"
                                }))
                            })]
                        }), (0, i.jsx)("div", {
                            className: "flex h-[400px] flex-col",
                            children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                index: 4,
                                item: m || (p || (g || h)),
                                height: "medium"
                            }))
                        })]
                    })
                },
                d = function(e) {
                    var t = e.outfitItems,
                        r = (0, a.Z)(e, ["outfitItems"]);
                    return (0, i.jsxs)("div", {
                        className: "flex w-full justify-center gap-3 ",
                        children: [(0, i.jsxs)("div", {
                            className: "flex h-[400px] flex-col justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 0,
                                    item: t[0],
                                    height: "medium"
                                }))
                            }), (0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 1,
                                    item: t[1],
                                    height: "medium"
                                }))
                            })]
                        }), (0, i.jsx)("div", {
                            className: "flex h-[400px] flex-col",
                            children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                index: 2,
                                item: t[2],
                                height: "tall-medium"
                            }))
                        }), (0, i.jsxs)("div", {
                            className: "flex h-[400px] flex-col justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 3,
                                    item: t[3],
                                    height: "medium"
                                }))
                            }), (0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 4,
                                    item: t[4],
                                    height: "medium"
                                }))
                            })]
                        })]
                    })
                }
        },
        950: function(e, t, r) {
            r.d(t, {
                M: function() {
                    return l
                }
            });
            var n = r(26042),
                s = r(69396),
                a = r(99534),
                i = r(85893),
                o = r(25046),
                l = function(e) {
                    if (e.outfitItems.some((function(e) {
                            return !e.category
                        }))) return (0, i.jsx)(d, (0, n.Z)({}, e));
                    var t;
                    return (t = "dress", e.outfitItems.filter((function(e) {
                        var r;
                        return null === (r = e.category) || void 0 === r ? void 0 : r.toLowerCase().includes(t.toLowerCase())
                    })))[0] ? (0, i.jsx)(c, (0, n.Z)({}, e)) : (0, i.jsx)(u, (0, n.Z)({}, e))
                },
                c = function(e) {
                    var t = e.outfitItems,
                        r = (0, a.Z)(e, ["outfitItems"]),
                        l = function(e) {
                            return t.filter((function(t) {
                                var r;
                                return null === (r = t.category) || void 0 === r ? void 0 : r.toLowerCase().includes(e.toLowerCase())
                            }))
                        },
                        c = l("dress")[0],
                        u = l("shoes")[0],
                        d = l("bag")[0],
                        m = l("jewelry"),
                        f = l("accessories")[0],
                        p = m[0],
                        x = m.length > 1 ? m[1] : null;
                    return (0, i.jsxs)("div", {
                        className: "flex w-full justify-center gap-3",
                        children: [(0, i.jsxs)("div", {
                            className: "flex h-[400px] flex-col justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 0,
                                    item: p || f,
                                    height: "medium"
                                }))
                            }), (0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 1,
                                    item: u,
                                    height: "medium"
                                }))
                            })]
                        }), (0, i.jsx)("div", {
                            className: "flex h-[400px] flex-col",
                            children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                index: 2,
                                item: c,
                                height: "tall"
                            }))
                        }), (0, i.jsx)("div", {
                            className: "flex h-[400px] flex-col",
                            children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                index: 3,
                                item: d || (f || (x || p)),
                                height: "tall"
                            }))
                        })]
                    })
                },
                u = function(e) {
                    var t = e.outfitItems,
                        r = (0, a.Z)(e, ["outfitItems"]),
                        l = function(e) {
                            return t.filter((function(t) {
                                var r;
                                return null === (r = t.category) || void 0 === r ? void 0 : r.toLowerCase().includes(e.toLowerCase())
                            }))
                        },
                        c = l("top")[0],
                        u = l("bottom")[0],
                        d = l("shoes")[0],
                        m = l("bag")[0],
                        f = l("jewelry")[0],
                        p = l("accessories")[0],
                        x = l("outerwear")[0];
                    return (0, i.jsxs)("div", {
                        className: "flex w-full justify-center gap-3",
                        children: [(0, i.jsx)("div", {
                            className: "flex h-[400px] flex-col justify-center",
                            children: (0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 1,
                                    item: d,
                                    height: "medium"
                                }))
                            })
                        }), (0, i.jsxs)("div", {
                            className: "flex h-[400px] flex-col justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "h-1/3",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 2,
                                    item: c,
                                    height: "short"
                                }))
                            }), (0, i.jsx)("div", {
                                className: "h-2/3",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 3,
                                    item: u,
                                    height: "tall-medium"
                                }))
                            })]
                        }), (0, i.jsx)("div", {
                            className: "flex h-[400px] flex-col justify-center",
                            children: (0, i.jsx)("div", {
                                className: "h-2/3",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 0,
                                    item: x || (m || (f || p)),
                                    height: "tall-medium"
                                }))
                            })
                        })]
                    })
                },
                d = function(e) {
                    var t = e.outfitItems,
                        r = (0, a.Z)(e, ["outfitItems"]);
                    return (0, i.jsxs)("div", {
                        className: "flex w-full justify-center gap-3 ",
                        children: [(0, i.jsxs)("div", {
                            className: "flex h-[400px] flex-col justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 0,
                                    item: t[0],
                                    height: "medium"
                                }))
                            }), (0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 1,
                                    item: t[1],
                                    height: "medium"
                                }))
                            })]
                        }), (0, i.jsx)("div", {
                            className: "flex h-[400px] flex-col",
                            children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                index: 2,
                                item: t[2],
                                height: "tall-medium"
                            }))
                        }), (0, i.jsx)("div", {
                            className: "flex h-[400px] flex-col",
                            children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                index: 3,
                                item: t[3],
                                height: "tall-medium"
                            }))
                        })]
                    })
                }
        },
        25046: function(e, t, r) {
            var n = r(47568),
                s = r(70655),
                a = r(85893),
                i = r(6154),
                o = r(67294),
                l = r(47516),
                c = r(91383),
                u = r(81400),
                d = r(8323),
                m = r(23601),
                f = r(67299),
                p = r(68239),
                x = r(27037),
                h = r(51667),
                g = function(e) {
                    var t = e.userData,
                        r = e.index,
                        g = e.item,
                        b = e.isHovering,
                        v = e.isEditView,
                        j = e.setIsItemRegenerateModalOpen,
                        w = e.setItemToRegenerateIndex,
                        y = e.isRegeneratingItem,
                        k = e.indexOfItemToRegenerate,
                        N = e.height,
                        _ = e.setItemToRegenerate,
                        C = e.setProductToOpenModalFor,
                        Z = e.setIsProductDetailsModalOpen,
                        S = e.queryString,
                        I = e.isFromCloset,
                        T = e.context,
                        O = (0, o.useContext)(c.F).dispatch,
                        D = (0, d.h)(),
                        A = D.globalWishlistItemsIDs,
                        E = D.addToWishlist,
                        F = D.removeFromWishlist,
                        L = (0, o.useState)(A.includes(g.productId)),
                        P = L[0],
                        R = L[1],
                        z = (0, o.useState)(!1),
                        U = z[0],
                        M = z[1],
                        W = (0, o.useState)(!1),
                        B = W[0],
                        H = W[1];
                    (0, o.useEffect)((function() {
                        R(A.includes(g.productId))
                    }), [A]), (0, o.useEffect)((function() {
                        y && r === k && R(!1)
                    }), [y, k, r]);
                    var q = function() {
                            var e = (0, n.Z)((function() {
                                var e, r, n, a, o, l, c, d;
                                return (0, s.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return t ? (e = g.productId, r = g.productImages, n = g.name, a = g.brand, o = g.category, l = r[0], c = l.imageSrc, d = l.link, (0, x.L)("".concat(T, ".add_to_wishlist"), t.id, {
                                                wishlist_item_url: d,
                                                wishlist_product_id: e
                                            }), R((function(e) {
                                                return !e
                                            })), O({
                                                type: u.uX.ADD_TO_TOAST_STACK,
                                                payload: {
                                                    item: g,
                                                    key: (new Date).getTime()
                                                }
                                            }), E(e), [4, i.Z.post("/api/wishlists", {
                                                product_image: c,
                                                product_url: d,
                                                product_name: n,
                                                product_brand: a,
                                                product_id: e,
                                                category: o,
                                                notify_motion: !1
                                            })]) : [3, 2];
                                        case 1:
                                            s.sent(), i.Z.post("/api/fastWishlistingFromProductModal", {
                                                product_name: n,
                                                search_query: S,
                                                product_brand: a
                                            }), a && i.Z.post("/api/favoriteBrand", {
                                                product_brand: a
                                            }), s.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Y = function() {
                            var e = (0, n.Z)((function() {
                                var e;
                                return (0, s.__generator)(this, (function(r) {
                                    return t && (R((function(e) {
                                        return !e
                                    })), e = g.imageSrc, i.Z.delete("/api/wishlists", {
                                        data: e
                                    }), F(g.productId)), [2]
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    (0, o.useEffect)((function() {
                        var e = function() {
                            var e = (0, n.Z)((function() {
                                var e, r, n, a;
                                return (0, s.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (!t) return [3, 5];
                                            e = g.productImages, r = g.productId, s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 4, , 5]), [4, fetch("/api/wishlists?" + new URLSearchParams({
                                                product_image: e[0].imageSrc,
                                                product_id: r
                                            }), {
                                                method: "GET"
                                            })];
                                        case 2:
                                            if (!(n = s.sent()).ok) throw new Error("Could not query wishlist state for item");
                                            return [4, n.json()];
                                        case 3:
                                            return [2, s.sent().length];
                                        case 4:
                                            return a = s.sent(), console.error(a), [2, 0];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e().then((function(e) {
                            e && e > 0 && R(!0)
                        }))
                    }), []);
                    var G, V = "closet" === g.from,
                        J = (0, m.Z)().width;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [t && (0, a.jsx)(f.Z, {
                            userData: t,
                            item: g,
                            isOpen: B,
                            setIsOpen: H,
                            page: "complete_the_look",
                            context: "outfit_card",
                            onDislike: function() {
                                H(!1), M(!0)
                            }
                        }), (0, a.jsx)("div", {
                            className: "flex h-full w-full items-center justify-center sm:hover:drop-shadow-md",
                            children: y && r === k ? (0, a.jsxs)("div", {
                                className: "flex h-full flex-col items-center justify-center gap-2",
                                children: [(0, a.jsx)(p.Z, {
                                    size: "40px"
                                }), (0, a.jsx)("div", {
                                    className: "text-center text-xs font-light uppercase",
                                    children: "Finding something special"
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: "relative flex h-full w-full flex-col items-center justify-center gap-2",
                                children: [b && J >= 640 && (0, a.jsxs)(a.Fragment, {
                                    children: [!I && v && (0, a.jsx)("div", {
                                        className: (0, h.Z)("absolute left-[calc((100%-90px)/2)] z-10 flex w-[90px] items-center justify-center border border-tts-black bg-gray-200 px-2 text-[9px] font-light uppercase text-black hover:cursor-pointer  sm:left-[calc((100%-120px)/2)] sm:w-[120px] sm:px-3 sm:py-1 sm:text-xs", "short" === N ? "bottom-[calc((100%/2))]" : "bottom-[calc((100%/2)+20px)]"),
                                        onClick: function() {
                                            w && _ && j && (w(r), _(g), j(!0), t && (0, x.L)("".concat(T, ".swap_out_item"), t.id, {
                                                item_id: g.id,
                                                item_url: g.imageSrc
                                            }))
                                        },
                                        children: "Swap out"
                                    }), (0, a.jsx)("div", {
                                        className: (0, h.Z)("absolute left-[calc((100%-90px)/2)] z-10 flex w-[90px] scale-100 items-center justify-center border border-tts-black bg-tts-black px-2 text-[9px] font-light uppercase text-white hover:cursor-pointer sm:left-[calc((100%-120px)/2)] sm:w-[120px] sm:px-3 sm:py-1 sm:text-xs", "short" === N ? "bottom-[calc((100%/2)-30px)]" : "bottom-[calc((100%/2)-10px)]"),
                                        onClick: function() {
                                            t && (0, x.L)("".concat(T, ".outfit_piece.clicked"), t.id, {
                                                item_name: g.name,
                                                item_source: g.from,
                                                item_brand: g.brand,
                                                item_id: g.id,
                                                item_url: g.imageSrc
                                            }), w && _ && (w(r), _(g)), C(g), Z(!0)
                                        },
                                        children: "View Product"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "relative",
                                    onClick: function() {
                                        J < 640 && (t && (0, x.L)("".concat(T, ".outfit_piece.clicked"), t.id, {
                                            item_name: g.name,
                                            item_source: g.from,
                                            item_brand: g.brand,
                                            item_id: g.id,
                                            item_url: g.imageSrc
                                        }), w && _ && (w(r), _(g)), C(g), Z(!0))
                                    },
                                    children: [!V && U && (0, a.jsx)("div", {
                                        className: "absolute left-[5px] top-[5px] z-10 flex h-[20px] w-[20px] items-center justify-center border border-tts-black bg-tts-white shadow-md",
                                        children: (0, a.jsx)(l.NNt, {
                                            size: "1rem",
                                            fill: "black"
                                        })
                                    }), !V && !U && (0, a.jsx)("div", {
                                        className: "absolute left-[5px] top-[5px] z-10 flex h-[20px] w-[20px] items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                                        onClick: function(e) {
                                            e.stopPropagation(), H(!0)
                                        },
                                        children: (0, a.jsx)(l.MZj, {
                                            size: "1rem",
                                            fill: "black"
                                        })
                                    }), !V && P && (0, a.jsx)("div", {
                                        className: "absolute right-[5px] top-[5px] z-10 flex h-[20px] w-[20px] items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                                        onClick: function() {
                                            return Y()
                                        },
                                        children: (0, a.jsx)(l.SEb, {
                                            size: "1rem",
                                            fill: "#FF3040"
                                        })
                                    }), !V && !P && (0, a.jsx)("div", {
                                        className: "absolute right-[5px] top-[5px] z-10 flex h-[20px] w-[20px] items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                                        onClick: function(e) {
                                            e.stopPropagation(), q()
                                        },
                                        children: (0, a.jsx)(l.kTx, {
                                            size: "1rem",
                                            fill: "black"
                                        })
                                    }), !I && J < 640 && v && (0, a.jsx)("div", {
                                        className: "absolute left-[5px] top-[5px] z-10 flex h-[20px] w-[20px] items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                                        onClick: function(e) {
                                            e.stopPropagation(), w && _ && j && (w(r), _(g), j(!0))
                                        },
                                        children: (0, a.jsx)(l.Gko, {
                                            size: "1rem",
                                            fill: "black"
                                        })
                                    }), (0, a.jsx)("img", {
                                        src: "closet" === g.from && null !== (G = g.backgroundRemovedImageUrl) && void 0 !== G ? G : g.imageSrc,
                                        alt: g.imageAlt,
                                        className: (0, h.Z)("w-[150px] cursor-pointer object-contain", "tall" === N ? "max-h-[360px]" : "tall-medium" === N ? "max-h-[210px]" : "medium" === N ? "max-h-[170px]" : "max-h-[100px]", b && J >= 640 && "border-[1px] border-tts-black")
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "text-center text-xs uppercase",
                                    children: "closet" === g.from ? "\u2728Owned\u2728" : g.brand
                                })]
                            })
                        })]
                    })
                };
            t.Z = function(e) {
                var t = e.index,
                    r = e.isEditView,
                    n = e.userData,
                    s = e.setProductToOpenModalFor,
                    i = e.setIsProductDetailsModalOpen,
                    l = e.item,
                    c = e.setIsItemRegenerateModalOpen,
                    u = e.setItemToRegenerateIndex,
                    d = e.isRegeneratingItem,
                    m = e.itemToRegenerateIndex,
                    f = e.height,
                    p = e.setItemToRegenerate,
                    x = e.queryString,
                    h = e.isFromCloset,
                    b = e.context,
                    v = (0, o.useState)(!1),
                    j = v[0],
                    w = v[1];
                return l ? (0, a.jsx)("div", {
                    onMouseEnter: function() {
                        return w(!0)
                    },
                    onMouseLeave: function() {
                        return w(!1)
                    },
                    className: "flex h-full w-full items-center justify-center bg-transparent duration-200 ease-in-out sm:hover:scale-110",
                    children: (0, a.jsx)(g, {
                        userData: n,
                        index: t,
                        item: l,
                        isHovering: j,
                        isEditView: r,
                        setIsItemRegenerateModalOpen: c,
                        setItemToRegenerateIndex: u,
                        setProductToOpenModalFor: s,
                        setIsProductDetailsModalOpen: i,
                        isRegeneratingItem: d,
                        indexOfItemToRegenerate: m,
                        height: f,
                        setItemToRegenerate: p,
                        queryString: x,
                        isFromCloset: h,
                        context: b
                    })
                }, t) : null
            }
        },
        17589: function(e, t, r) {
            r.d(t, {
                o: function() {
                    return l
                }
            });
            var n = r(26042),
                s = r(69396),
                a = r(99534),
                i = r(85893),
                o = r(25046),
                l = function(e) {
                    return (0, i.jsx)(c, (0, n.Z)({}, e))
                },
                c = function(e) {
                    var t = e.outfitItems,
                        r = (0, a.Z)(e, ["outfitItems"]);
                    return (0, i.jsxs)("div", {
                        className: "flex w-full justify-center gap-3 ",
                        children: [(0, i.jsxs)("div", {
                            className: "flex h-[400px] flex-col justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 0,
                                    item: t[0],
                                    height: "medium"
                                }))
                            }), (0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 1,
                                    item: t[1],
                                    height: "medium"
                                }))
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "flex h-[400px] flex-col justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 2,
                                    item: t[2],
                                    height: "medium"
                                }))
                            }), (0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 3,
                                    item: t[3],
                                    height: "medium"
                                }))
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "flex h-[400px] flex-col justify-between",
                            children: [(0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 4,
                                    item: t[4],
                                    height: "medium"
                                }))
                            }), (0, i.jsx)("div", {
                                className: "h-1/2",
                                children: (0, i.jsx)(o.Z, (0, s.Z)((0, n.Z)({}, r), {
                                    index: 5,
                                    item: t[5],
                                    height: "medium"
                                }))
                            })]
                        })]
                    })
                }
        },
        97517: function(e, t, r) {
            r.d(t, {
                Dx: function() {
                    return a
                },
                PZ: function() {
                    return i
                },
                Q: function() {
                    return l
                },
                WR: function() {
                    return c
                }
            });
            var n = r(85893),
                s = r(47516),
                a = function(e) {
                    var t = e.step;
                    return (0, n.jsx)("div", {
                        className: "absolute inset-0 z-0 flex items-center justify-center",
                        children: (0, n.jsx)("h1", {
                            className: "whitespace-nowrap text-center text-sm font-semibold text-tts-black",
                            children: o(t)
                        })
                    })
                },
                i = function(e) {
                    var t = e.onClick;
                    return (0, n.jsx)("button", {
                        className: "z-10 flex h-[30px] w-[30px] items-center justify-center border border-tts-black",
                        onClick: function() {
                            return t()
                        },
                        children: (0, n.jsx)(s.gbs, {
                            size: "1.5rem"
                        })
                    })
                },
                o = function(e) {
                    switch (e) {
                        case 0:
                            return "Create your own outfit";
                        case 1:
                            return "Customize your outfit";
                        case 2:
                            return "Name your outfit";
                        default:
                            return "Invalid step"
                    }
                },
                l = function(e) {
                    switch (e) {
                        case 0:
                        case 1:
                            return "Next";
                        case 2:
                            return "Submit";
                        default:
                            return "Invalid step"
                    }
                },
                c = function(e) {
                    var t = "https://res.cloudinary.com/flagshipcloud/image/upload/v1694742108/app-assets/Group_15_rbqy9a.png";
                    return {
                        category: e,
                        imageSrc: t,
                        imageAlt: "null item",
                        from: "mock",
                        productId: "mock",
                        id: "mock",
                        productImages: [{
                            imageSrc: t,
                            link: t,
                            name: "null item"
                        }]
                    }
                }
        },
        29988: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            var n = r(85893),
                s = r(51891),
                a = r(11163),
                i = r(67294),
                o = r(53507);

            function l(e) {
                var t = e.children,
                    r = (0, i.useState)(!0),
                    l = r[0],
                    c = r[1],
                    u = (0, a.useRouter)(),
                    d = (0, s.Au)().session;
                return (0, i.useEffect)((function() {
                    l || d || u.push({
                        pathname: "/login",
                        query: {
                            redirect: u.pathname
                        }
                    }), c(!1)
                }), [d, u, l, c]), d ? (0, n.jsx)(n.Fragment, {
                    children: t
                }) : (0, n.jsx)("div", {
                    className: "relative h-screen w-full p-8",
                    children: (0, n.jsx)("div", {
                        className: "flex h-full w-full items-center justify-center",
                        children: (0, n.jsx)(o.Z, {})
                    })
                })
            }
        },
        12367: function(e, t, r) {
            var n = r(85893);
            t.Z = function() {
                return (0, n.jsxs)("div", {
                    className: "flex w-full flex-col gap-4",
                    children: [(0, n.jsx)("div", {
                        className: "aspect-[7/10] w-full border border-tts-black p-6",
                        children: (0, n.jsx)("div", {
                            className: "h-full w-full animate-pulse bg-gray-200"
                        })
                    }), (0, n.jsx)("div", {
                        className: "h-8 w-full animate-pulse bg-gray-200"
                    })]
                })
            }
        },
        67299: function(e, t, r) {
            var n = r(47568),
                s = r(70655),
                a = r(85893),
                i = r(6154),
                o = r(67294),
                l = r(47516),
                c = r(58742),
                u = r(8002),
                d = r(23601),
                m = r(59081),
                f = r(27037),
                p = function(e) {
                    var t = e.text,
                        r = e.selected,
                        n = e.onClick;
                    return (0, a.jsx)("button", {
                        onClick: n,
                        className: "mr-2 rounded-md border border-solid px-2 py-1 text-xs uppercase ".concat(r ? "border-black bg-black text-white hover:bg-black" : "bg-white text-black hover:bg-gray-50"),
                        children: "\ud83d\udc4e ".concat(t)
                    })
                };
            t.Z = function(e) {
                var t = e.userData,
                    r = e.item,
                    c = e.isOpen,
                    h = e.setIsOpen,
                    g = e.onDislike,
                    b = e.page,
                    v = e.context,
                    j = (0, d.Z)().width,
                    w = (0, o.useState)(""),
                    y = w[0],
                    k = w[1],
                    N = (0, u.w)().showSnackbar,
                    _ = function() {
                        var e = (0, n.Z)((function() {
                            var e;
                            return (0, s.__generator)(this, (function(n) {
                                (0, f.L)("".concat(b, ".").concat(v, ".disliked_piece.clicked"), t.id, {
                                    product_name: r.name,
                                    product_brand: r.brand,
                                    feedback: y
                                }), g(r);
                                try {
                                    i.Z.post("/api/feedback", {
                                        product_name: r.name,
                                        feedback: y,
                                        raw_query: "",
                                        event: 'clicked "Dislike this piece"',
                                        product_brand: r.brand
                                    }), k("")
                                } catch (s) {
                                    console.error(s)
                                }
                                return h(!1), (e = x(t, y)) && N(e), [2]
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    C = function(e) {
                        return "I don't like the ".concat(e, ".")
                    },
                    Z = function(e) {
                        var n = C(e);
                        y.includes(n) ? ((0, f.L)("".concat(b, ".").concat(v, ".disliked_piece.dislike_brand.undo"), t.id, {
                            item_product_id: r.productId,
                            reason: e
                        }), k(y.replace(n, "").trim())) : ((0, f.L)("".concat(b, ".").concat(v, ".disliked_piece.dislike_brand.clicked"), t.id, {
                            item_product_id: r.productId,
                            reason: e
                        }), k("".concat(y, " ").concat(n).trim()), "brand" === e && i.Z.post("/api/dislikeBrand", {
                            product_brand: r.brand
                        }).then((function(e) {
                            200 === e.status ? (0, f.L)("".concat(b, ".").concat(v, ".disliked_piece.dislike_brand.success"), t.id, {
                                item_product_id: r.productId,
                                product_brand: r.brand
                            }) : (0, f.L)("".concat(b, ".").concat(v, ".disliked_piece.dislike_brand.error"), t.id, {
                                item_product_id: r.productId,
                                product_brand: r.brand
                            })
                        })).catch((function() {
                            (0, f.L)("".concat(b, ".").concat(v, ".disliked_piece.dislike_brand.error"), t.id, {
                                item_product_id: r.productId,
                                product_brand: r.brand
                            })
                        })))
                    };
                return (0, a.jsxs)(m.Z, {
                    open: c,
                    setOpen: h,
                    children: [(0, a.jsxs)("span", {
                        className: "flex w-full justify-between border-b-[1px] pb-4",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, a.jsx)("h1", {
                                className: "text-left text-base font-medium",
                                children: "Dislike this item"
                            }), (0, a.jsx)("p", {
                                className: "text-sm font-light text-tts-black",
                                children: "Alta learns from your feedback \u2728"
                            })]
                        }), j < 640 && (0, a.jsx)("button", {
                            className: "h-6 w-6",
                            onClick: function() {
                                return h(!1)
                            },
                            children: (0, a.jsx)(l.czh, {
                                size: "1.5rem"
                            })
                        })]
                    }), (0, a.jsxs)("center", {
                        className: "mt-4 flex w-full flex-col",
                        children: [(0, a.jsx)("img", {
                            src: r.imageSrc,
                            alt: r.imageAlt,
                            className: "mt-4 aspect-square w-full object-contain"
                        }), (0, a.jsx)("p", {
                            className: "mt-2 w-full text-left text-base uppercase",
                            children: r.brand
                        }), (0, a.jsx)("p", {
                            className: "w-full text-left text-sm font-light md:text-base",
                            children: r.name
                        }), (0, a.jsxs)("div", {
                            className: "mt-2 flex flex-row",
                            children: [(0, a.jsx)(p, {
                                text: "color",
                                selected: y.includes(C("color")),
                                onClick: function() {
                                    return Z("color")
                                }
                            }), (0, a.jsx)(p, {
                                text: "brand",
                                selected: y.includes(C("brand")),
                                onClick: function() {
                                    return Z("brand")
                                }
                            }), (0, a.jsx)(p, {
                                text: "style",
                                selected: y.includes(C("style")),
                                onClick: function() {
                                    return Z("style")
                                }
                            })]
                        }), (0, a.jsxs)("label", {
                            className: "mt-4 w-full text-left text-xs font-light text-tts-black",
                            children: ["Reason ", (0, a.jsx)("span", {
                                className: "text-gray-600",
                                children: "(optional)"
                            })]
                        }), (0, a.jsx)("textarea", {
                            className: "mt-1 w-full p-2 text-xs font-light text-tts-black focus:border-tts-black focus:ring-0",
                            placeholder: "Don't like the length...",
                            value: y,
                            onChange: function(e) {
                                return k(e.target.value)
                            }
                        }), (0, a.jsx)("button", {
                            className: "mt-3 w-full bg-tts-black p-2 text-sm font-semibold uppercase text-tts-white hover:opacity-90",
                            onClick: _,
                            children: "Submit"
                        })]
                    })]
                })
            };
            var x = function(e, t) {
                return t.includes("style") ? "Hint: You can add more preferences in your Profile \u2728" : t.includes("bright") || t.includes("neon") || t.includes("dark") ? "Hint: You can add more disliked colors in your Profile  \ud83c\udf08" : t.includes("gold jewelry") || t.includes("silver jewelry") ? "Hint: You can add jewelry preferences in your Profile  \ud83c\udf08" : t.includes("already") ? "If you previously disliked this item or style, please chat us to let us know & fix it for you!" : (0, c.Uw)(e.created_at) && t.includes("color") ? "Hint: You can add more disliked colors in your Profile \ud83c\udf08. Welcome to Alta!" : null
            }
        },
        86805: function(e, t, r) {
            var n = r(85893),
                s = r(44080),
                a = r(26064),
                i = r(67294);
            t.Z = function(e) {
                var t = e.open,
                    r = e.setOpen,
                    o = e.children,
                    l = e.shouldBringContentForward;
                return (0, n.jsx)(s.u.Root, {
                    show: t,
                    as: i.Fragment,
                    children: (0, n.jsx)(a.V, {
                        as: "div",
                        className: "relative ".concat(l ? "z-50" : "z-40"),
                        onClose: r || function() {},
                        children: (0, n.jsx)("div", {
                            className: "fixed inset-0 z-50 overflow-y-auto",
                            children: (0, n.jsx)("div", {
                                className: "flex min-h-full items-end justify-center text-center",
                                children: (0, n.jsx)(s.u.Child, {
                                    as: i.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: (0, n.jsx)(a.V.Panel, {
                                        className: "relative w-screen transform overflow-x-hidden bg-white text-left transition-all",
                                        children: o
                                    })
                                })
                            })
                        })
                    })
                })
            }
        },
        59081: function(e, t, r) {
            var n = r(85893),
                s = r(44080),
                a = r(26064),
                i = r(67294),
                o = r(51649);
            t.Z = function(e) {
                var t = e.open,
                    r = e.setOpen,
                    l = e.options,
                    c = e.children;
                return (0, n.jsx)(s.u.Root, {
                    show: t,
                    as: i.Fragment,
                    children: (0, n.jsxs)(a.V, {
                        as: "div",
                        className: "relative z-50",
                        onClose: r || function() {},
                        children: [(0, n.jsx)(s.u.Child, {
                            as: i.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, n.jsx)("div", {
                                className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            })
                        }), (0, n.jsx)("div", {
                            className: "fixed inset-0 z-50 overflow-y-auto",
                            children: (0, n.jsx)("div", {
                                className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                                children: (0, n.jsx)(s.u.Child, {
                                    as: i.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: (0, n.jsxs)(a.V.Panel, {
                                        className: "relative transform overflow-hidden  bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all  sm:my-8 sm:w-full sm:max-w-md sm:p-6 md:max-w-".concat("large" === (null === l || void 0 === l ? void 0 : l.modalWidth) ? "3xl" : "md"),
                                        children: [r && (0, n.jsx)("div", {
                                            className: "absolute right-0 top-0 hidden pr-4 pt-4 sm:block",
                                            children: (0, n.jsxs)("button", {
                                                type: "button",
                                                className: " text-neutral-400 hover:text-neutral-500 focus:outline-none ",
                                                onClick: function() {
                                                    return r(!1)
                                                },
                                                children: [(0, n.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "Close"
                                                }), (0, n.jsx)(o.QAE, {
                                                    className: "h-6 w-6",
                                                    "aria-hidden": "true"
                                                })]
                                            })
                                        }), l && l.headerText && (0, n.jsx)(a.V.Title, {
                                            as: "p",
                                            className: "text-base font-medium uppercase tracking-tight text-black",
                                            children: l.headerText
                                        }), l && l.subHeaderText && (0, n.jsx)("div", {
                                            className: "text-xs uppercase",
                                            children: l.subHeaderText
                                        }), c]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        8756: function(e, t, r) {
            var n = r(85893),
                s = r(44080),
                a = r(26064),
                i = r(67294),
                o = r(51649);
            t.Z = function(e) {
                var t = e.open,
                    r = e.setOpen,
                    l = e.options,
                    c = e.children;
                return (0, n.jsx)(s.u.Root, {
                    show: t,
                    as: i.Fragment,
                    children: (0, n.jsxs)(a.V, {
                        as: "div",
                        className: "relative z-50",
                        onClose: r || function() {},
                        children: [(0, n.jsx)(s.u.Child, {
                            as: i.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, n.jsx)("div", {
                                className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            })
                        }), (0, n.jsx)("div", {
                            className: "fixed inset-0 z-50 overflow-y-auto",
                            children: (0, n.jsx)("div", {
                                className: "m-auto flex items-end justify-center p-4 sm:items-center sm:p-0 md:w-2/3 lg:w-1/2",
                                children: (0, n.jsx)(s.u.Child, {
                                    as: i.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: (0, n.jsxs)(a.V.Panel, {
                                        className: "relative transform overflow-hidden bg-white px-4 py-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 md:max-w-3xl",
                                        children: [r && (0, n.jsx)("div", {
                                            className: "absolute right-0 top-0 pr-4 pt-4",
                                            children: (0, n.jsxs)("button", {
                                                type: "button",
                                                className: "text-neutral-400 hover:text-neutral-500 focus:outline-none ",
                                                onClick: function() {
                                                    return r(!1)
                                                },
                                                children: [(0, n.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "Close"
                                                }), (0, n.jsx)(o.QAE, {
                                                    className: "h-6 w-6",
                                                    "aria-hidden": "true"
                                                })]
                                            })
                                        }), l && l.headerText && (0, n.jsx)(a.V.Title, {
                                            as: "p",
                                            className: "text-base font-medium uppercase tracking-tight text-black",
                                            children: l.headerText
                                        }), l && l.subHeaderText && (0, n.jsx)("div", {
                                            className: "text-xs uppercase",
                                            children: l.subHeaderText
                                        }), c]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        38183: function(e, t, r) {
            r.r(t), r.d(t, {
                CLOSET_CATEGORIES: function() {
                    return Z
                },
                OTHER_CATEGORY_LABEL: function() {
                    return C
                },
                SearchBar: function() {
                    return S
                }
            });
            var n = r(47568),
                s = r(26042),
                a = r(69396),
                i = r(29815),
                o = r(70655),
                l = r(85893),
                c = r(34386),
                u = r(6154),
                d = r(11163),
                m = r.n(d),
                f = r(67294),
                p = r(47516),
                x = r(83991),
                h = r(38578),
                g = r(43990),
                b = r(25087),
                v = r(47929),
                j = r(29988),
                w = r(61582),
                y = r(68239),
                k = r(27037),
                N = r(51667),
                _ = r(31618),
                C = "Other Pieces",
                Z = ["Tops", "Bottoms", "Dresses", "Shoes", "Bags", "Outerwear", "Jewelry", "Accessories", C],
                S = function(e) {
                    var t = e.selectedTab,
                        r = e.searchQuery,
                        n = e.setSearchQuery,
                        s = e.onEnterClick,
                        a = e.setClosetSemanticSearchResults,
                        i = e.isLoading,
                        o = (0, f.useRef)(null);
                    return (0, l.jsx)("span", {
                        className: "flex",
                        children: (0, l.jsxs)("span", {
                            className: (0, N.Z)("flex w-full items-center border border-tts-black bg-tts-white px-3 py-1 sm:hover:bg-gray-200", o && o.current === document.activeElement && "sm:hover:bg-tts-white"),
                            children: [(0, l.jsx)("div", {
                                className: "shrink-0",
                                children: i ? (0, l.jsx)(y.Z, {
                                    size: "16px"
                                }) : (0, l.jsx)(p.lOx, {
                                    size: "1rem"
                                })
                            }), (0, l.jsx)("input", {
                                ref: o,
                                type: "text",
                                className: "w-full border border-transparent bg-inherit text-xs focus:border-transparent focus:outline-none focus:ring-0",
                                placeholder: "owned" === t ? "My white sweater" : "Nike Air Force One",
                                value: r,
                                onChange: function(e) {
                                    return n(e.target.value)
                                },
                                onKeyDown: function(e) {
                                    "Enter" === e.key && s()
                                }
                            }), r && (0, l.jsx)(c.Z, {
                                title: "CLEAR",
                                children: (0, l.jsx)("button", {
                                    className: "shrink-0",
                                    onClick: function() {
                                        n(""), a && a([])
                                    },
                                    children: (0, l.jsx)(p.czh, {
                                        size: "1.25rem",
                                        fill: "gray"
                                    })
                                })
                            })]
                        })
                    })
                };
            t.default = function() {
                var e = (0, f.useContext)(_.St),
                    t = (0, f.useState)([]),
                    r = t[0],
                    c = t[1],
                    d = (0, f.useState)(!1),
                    p = d[0],
                    y = d[1],
                    N = (0, f.useState)(!1),
                    C = N[0],
                    Z = N[1],
                    I = (0, f.useState)(!1),
                    T = I[0],
                    O = I[1],
                    D = (0, f.useState)(""),
                    A = D[0],
                    E = D[1],
                    F = (0, f.useState)([]),
                    L = F[0],
                    P = F[1],
                    R = (0, f.useState)(!1),
                    z = R[0],
                    U = R[1];
                (0, f.useEffect)((function() {
                    var t = m().query.traffic;
                    t && "add" === t && Z(!0), e && (0, g.pW)(c, y)
                }), []);
                var M, W = function() {
                        var t = (0, n.Z)((function(t, r) {
                            var n, s, a, i, l, d;
                            return (0, o.__generator)(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return n = r.hash, s = r.productName, a = r.category, i = r.productBrand, l = r.uploadMethod, e ? [4, u.Z.post("/api/uploadClosetDirect", {
                                            id: e.id,
                                            images: [t],
                                            names: [s],
                                            categories: [a],
                                            brands: [i],
                                            uploadMethod: l,
                                            hashes: [n]
                                        })] : [2];
                                    case 1:
                                        return 200 === (d = o.sent()).status && (0, k.L)("closet.added_item_to_closet", e.id, {
                                            closet_item: s,
                                            closet_url: t,
                                            upload_method: l
                                        }), i && u.Z.post("/api/favoriteBrand", {
                                            product_brand: i
                                        }), (0, g.pW)(c, y), [2, 200 === d.status]
                                }
                            }))
                        }));
                        return function(e, r) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    B = "Both" === (null === e || void 0 === e ? void 0 : e.gender) ? "" : (null === e || void 0 === e ? void 0 : e.gender) || "",
                    H = function() {
                        var e = (0, n.Z)((function() {
                            var e, t, r;
                            return (0, o.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        e = A + " " + B, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 6, , 7]), [4, fetch("/api/semanticSearch?" + new URLSearchParams({
                                            query: e
                                        }), {
                                            method: "GET"
                                        })];
                                    case 2:
                                        return (t = n.sent()).ok ? [4, t.json()] : [3, 4];
                                    case 3:
                                        return [2, n.sent().slice(0, 5).map((function(e) {
                                            return String(e.id)
                                        }))];
                                    case 4:
                                        return console.error("Error fetching semantic search results:", t.status), [2, []];
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return r = n.sent(), console.error("Error in getSemanticSearchResults:", r), [2, []];
                                    case 7:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return null === e || e && e.is_on_waitlist ? (m().push("/login"), null) : (0, l.jsx)(j.Z, {
                    children: (0, l.jsxs)(w.Z, {
                        children: [(0, l.jsx)(b.Z, {
                            userData: e,
                            onAddItem: W,
                            open: C,
                            setOpen: Z,
                            setIsFlagshipConciergeModalOpen: O
                        }), (0, l.jsx)(v.Z, {
                            isOpen: T,
                            setIsOpen: O
                        }), (0, l.jsx)("div", {
                            className: "flex w-full flex-col ",
                            children: p ? (0, l.jsx)(h.Z, {}) : (0, l.jsxs)(l.Fragment, {
                                children: [r.length >= 200 && (0, l.jsx)(S, {
                                    selectedTab: "owned",
                                    searchQuery: A,
                                    setSearchQuery: E,
                                    onEnterClick: function() {
                                        e && (0, k.L)("closet.owned_item_semantic_search.searched", e.id, {
                                            query: A
                                        }), U(!0), H().then((function(e) {
                                            P(e), U(!1)
                                        })).catch((function() {
                                            U(!1)
                                        }))
                                    },
                                    setClosetSemanticSearchResults: P,
                                    isLoading: z
                                }), (0, l.jsx)(x.Z, {
                                    userData: e,
                                    selectedTab: "owned",
                                    items: (M = r, L.length > 0 ? M.filter((function(e) {
                                        return L.includes(String(e.id))
                                    })) : M),
                                    onRemoveItem: function(e) {
                                        c(r.filter((function(t) {
                                            return String(t.id) !== e
                                        })))
                                    },
                                    onUpdateItem: function(e) {
                                        var t = r.findIndex((function(t) {
                                            return t.id === e.id
                                        }));
                                        c((function(r) {
                                            return r.map((function(r, n) {
                                                return n === t ? e : r
                                            }))
                                        }))
                                    },
                                    onAddItem: function(e) {
                                        var t = (0, a.Z)((0, s.Z)({}, e), {
                                            from: "closet"
                                        });
                                        c((function(e) {
                                            return [t].concat((0, i.Z)(e))
                                        }))
                                    },
                                    setAddItemModalOpen: Z
                                })]
                            })
                        })]
                    })
                })
            }
        }
    }
]);