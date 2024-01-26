"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2292], {
        46850: function(t, e, r) {
            var n = r(47568),
                s = r(26042),
                a = r(69396),
                o = r(70655),
                i = r(85893),
                c = r(6154),
                u = r(67294),
                l = r(47516),
                d = r(91383),
                p = r(81400),
                h = r(8002),
                f = r(8323),
                m = r(67299),
                g = r(27037),
                _ = r(51667),
                w = r(52693);
            e.Z = function(t) {
                var e, r = t.userData,
                    v = t.item,
                    y = t.onClick,
                    x = t.onDislike,
                    k = t.page,
                    Z = t.context,
                    I = t.setAvailableMaxPrice,
                    S = t.setRecommendedItems,
                    C = (0, u.useContext)(d.F).dispatch,
                    j = (0, u.useState)(null !== (e = v.retailPrice) && void 0 !== e ? e : null),
                    P = j[0],
                    N = j[1],
                    E = (0, h.w)().showSnackbar,
                    T = (0, f.h)(),
                    F = T.globalWishlistItemsIDs,
                    q = T.addToWishlist,
                    D = T.removeFromWishlist,
                    z = T.globalLikedItemsIDs,
                    L = T.addToLikedItems,
                    U = T.removeFromLikedItems,
                    A = (0, u.useState)(F.includes(v.productId)),
                    O = A[0],
                    B = A[1],
                    M = (0, u.useState)(z.includes(v.productId)),
                    R = M[0],
                    W = M[1],
                    G = (0, u.useState)(!1),
                    $ = G[0],
                    H = G[1],
                    K = (0, u.useState)(!1),
                    Q = K[0],
                    X = K[1],
                    Y = (0, u.useState)(!1),
                    J = Y[0],
                    V = Y[1];
                (0, u.useEffect)((function() {
                    B(F.includes(v.productId))
                }), [F]), (0, u.useEffect)((function() {
                    B(F.includes(v.productId)), W(z.includes(v.productId)), v.retailPrice ? N(v.retailPrice) : !(0, w.Yn)(v.productImages[0].link) && (0, w.NQ)(v.productImages[0].link, N, H)
                }), [v]), (0, u.useEffect)((function() {
                    I && P && I((function(t) {
                        return Math.max(t, parseInt(P))
                    })), S && P && S((function(t) {
                        return t.map((function(t) {
                            return t.imageSrc === v.imageSrc ? (0, a.Z)((0, s.Z)({}, t), {
                                retailPrice: P,
                                salePrice: P
                            }) : t
                        }))
                    }))
                }), [P]);
                var tt = function() {
                        var t = (0, n.Z)((function() {
                            var t, e, n, s, a, i, u, l;
                            return (0, o.__generator)(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return t = v.productId, e = v.productImages, n = v.name, s = v.brand, a = v.category, i = e[0], u = i.imageSrc, l = i.link, (0, g.L)("".concat(k, ".").concat(Z, ".add_to_wishlist"), r.id, {
                                            wishlist_item_name: n,
                                            wishlist_item_brand: s,
                                            wishlist_item_url: l,
                                            wishlist_product_id: t
                                        }), B((function(t) {
                                            return !t
                                        })), E("Added to wishlist, check out your Wishlist tab \u2728"), C({
                                            type: p.uX.ADD_TO_TOAST_STACK,
                                            payload: {
                                                item: v,
                                                key: (new Date).getTime()
                                            }
                                        }), q(t), [4, c.Z.post("/api/wishlists", {
                                            product_image: u,
                                            product_url: l,
                                            product_name: n,
                                            product_brand: s,
                                            product_id: t,
                                            category: a,
                                            notify_motion: !1
                                        })];
                                    case 1:
                                        return o.sent(), c.Z.post("/api/fastWishlistingFromProductModal", {
                                            product_name: n,
                                            search_query: "",
                                            product_brand: s
                                        }), s && c.Z.post("/api/favoriteBrand", {
                                            product_brand: s
                                        }), [2]
                                }
                            }))
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    et = function() {
                        var t = (0, n.Z)((function() {
                            var t;
                            return (0, o.__generator)(this, (function(e) {
                                return B((function(t) {
                                    return !t
                                })), t = v.imageSrc, c.Z.delete("/api/wishlists", {
                                    data: t
                                }), D(v.productId), [2]
                            }))
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    rt = function() {
                        var t = (0, n.Z)((function() {
                            return (0, o.__generator)(this, (function(t) {
                                return (0, g.L)("".concat(k, ".").concat(Z, ".liked_piece.clicked"), r.id, {
                                    item: v
                                }), W(!0), E(b()), L(v.productId), c.Z.post("/api/likedItems", {
                                    product_image: v.imageSrc,
                                    product_url: v.productImages[0].link,
                                    product_name: v.name,
                                    product_brand: v.brand,
                                    product_id: v.productId,
                                    category: v.category
                                }), c.Z.post("/api/feedback", {
                                    user_id: r.id,
                                    product_name: v.name,
                                    feedback: "",
                                    raw_query: "",
                                    event: 'clicked "Like this piece"'
                                }), [2]
                            }))
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    nt = function() {
                        var t = (0, n.Z)((function() {
                            return (0, o.__generator)(this, (function(t) {
                                return (0, g.L)("".concat(k, ".").concat(Z, ".liked_piece.un_clicked"), r.id, {
                                    item: v
                                }), W(!1), U(v.productId), [2]
                            }))
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    st = v.retailPrice && v.salePrice && v.salePrice !== v.retailPrice;
                return (0, i.jsxs)("div", {
                    className: (0, _.Z)("relative flex w-full flex-col border border-transparent p-2 hover:cursor-pointer hover:border-tts-black", Q && "border-tts-black"),
                    onClick: function() {
                        return y(v)
                    },
                    onTouchStart: function() {
                        return X(!0)
                    },
                    onTouchEnd: function() {
                        return X(!1)
                    },
                    children: [(0, i.jsx)("img", {
                        src: v.imageSrc,
                        alt: v.imageAlt,
                        className: "aspect-square w-full object-contain"
                    }), (0, i.jsx)("p", {
                        className: "mt-6 text-left text-sm font-medium uppercase md:mt-2",
                        children: v.brand
                    }), (0, i.jsx)("p", {
                        className: "w-full truncate text-left text-sm font-light",
                        children: v.name
                    }), $ ? (0, i.jsx)("div", {
                        className: "mt-[2px] h-5 w-16 animate-pulse bg-gray-200"
                    }) : P ? (0, i.jsxs)("span", {
                        className: "mt-[2px] flex items-center gap-2",
                        children: [st && (0, i.jsxs)("p", {
                            className: "text-left text-sm font-light text-red-500",
                            children: ["$", v.salePrice]
                        }), (0, i.jsxs)("p", {
                            className: (0, _.Z)("text-left text-sm font-light", st && "line-through"),
                            children: ["$", P]
                        })]
                    }) : null, (0, i.jsx)("button", {
                        className: "absolute right-[5px] top-[5px] z-10 flex h-[20px] w-[20px] items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                        onClick: function(t) {
                            t.stopPropagation(), O ? et() : tt()
                        },
                        children: O ? (0, i.jsx)(l.SEb, {
                            size: "1rem",
                            fill: "#FF3040"
                        }) : (0, i.jsx)(l.kTx, {
                            size: "1rem",
                            fill: "black"
                        })
                    }), (0, i.jsx)("button", {
                        className: "absolute left-[5px] top-[5px] z-10 flex h-[20px] w-[20px] items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                        onClick: function(t) {
                            t.stopPropagation(), R ? nt() : rt()
                        },
                        children: R ? (0, i.jsx)(l.gew, {
                            size: "1rem",
                            fill: "#0096FF"
                        }) : (0, i.jsx)(l.UZT, {
                            size: "1rem",
                            fill: "black"
                        })
                    }), x && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("button", {
                            className: "absolute left-[30px] top-[5px] z-10 flex h-[20px] w-[20px] items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                            onClick: function(t) {
                                t.stopPropagation(), V(!0)
                            },
                            children: (0, i.jsx)(l.MZj, {
                                size: "1rem",
                                fill: "black"
                            })
                        }), (0, i.jsx)(m.Z, {
                            userData: r,
                            item: v,
                            isOpen: J,
                            setIsOpen: V,
                            page: k,
                            context: Z,
                            onDislike: x
                        })]
                    })]
                })
            };
            var b = function() {
                return Math.random() < .5 ? "Thanks for the feedback, Alta is learning your style \u2728" : "Click on the piece to see your Closet Compatibility score \ud83e\udd13"
            }
        },
        53215: function(t, e, r) {
            r.d(e, {
                DG: function() {
                    return u
                },
                Fv: function() {
                    return d
                },
                Hz: function() {
                    return h
                },
                Zf: function() {
                    return o
                },
                eO: function() {
                    return l
                },
                fr: function() {
                    return c
                },
                jr: function() {
                    return i
                },
                uf: function() {
                    return p
                }
            });
            var n = r(47568),
                s = r(70655),
                a = r(6154),
                o = (function() {
                    var t = (0, n.Z)((function(t, e, r, n, a) {
                        var o, i, c, u;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    o = t.gender && "Both" !== t.gender ? e + " " + t.gender : e, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 4, 5, 6]), a(!0), [4, fetch("/api/googleShoppingResults?" + new URLSearchParams({
                                        query: o
                                    }), {
                                        method: "GET"
                                    })];
                                case 2:
                                    if (!(i = s.sent()).ok) throw new Error("Could not GET google image results");
                                    return [4, i.json()];
                                case 3:
                                    return c = s.sent(), r(c.results.results), n(c.results.id), [3, 6];
                                case 4:
                                    return u = s.sent(), console.error(u), [3, 6];
                                case 5:
                                    return a(!1), [7];
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                }(), function() {
                    var t = (0, n.Z)((function(t, e) {
                        var r, n, o, i;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, , 3]), [4, a.Z.patch("/api/shoppingSimilarProducts/".concat(e), {
                                        dislikedItem: t
                                    })];
                                case 1:
                                    if (r = s.sent(), n = r.status, o = r.data, 200 === n && o) return [2, o];
                                    throw new Error("Could not update similar products");
                                case 2:
                                    return i = s.sent(), console.error(i), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(e, r) {
                        return t.apply(this, arguments)
                    }
                }()),
                i = function() {
                    var t = (0, n.Z)((function(t, e) {
                        var r, n, o, i;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, , 3]), [4, a.Z.patch("/api/shoppingSemanticSearch/".concat(e), {
                                        dislikedItem: t
                                    })];
                                case 1:
                                    if (r = s.sent(), n = r.status, o = r.data, 200 === n && o) return [2, o];
                                    throw new Error("Could not update search results");
                                case 2:
                                    return i = s.sent(), console.error(i), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(e, r) {
                        return t.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var t = (0, n.Z)((function(t) {
                        var e, r, n, o;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, , 3]), [4, a.Z.patch("/api/recommendedItems/".concat(t), {
                                        hasUnwrappedItems: !0
                                    })];
                                case 1:
                                    if (e = s.sent(), r = e.status, n = e.data, 200 === r && n) return [2, n];
                                    throw new Error("Could not update recommended items row");
                                case 2:
                                    return o = s.sent(), console.error(o), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                u = function() {
                    var t = (0, n.Z)((function(t, e) {
                        var r, n, o, i;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, , 3]), [4, a.Z.patch("/api/recommendedItems/".concat(e), {
                                        dislikedItem: t
                                    })];
                                case 1:
                                    if (r = s.sent(), n = r.status, o = r.data, 200 === n && o) return [2, o];
                                    throw new Error("Could not update recommended items");
                                case 2:
                                    return i = s.sent(), console.error(i), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(e, r) {
                        return t.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var t = (0, n.Z)((function(t) {
                        var e, r, n, o;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, , 3]), [4, a.Z.get("/api/shoppingSemanticSearch")];
                                case 1:
                                    if (e = s.sent(), r = e.status, n = e.data, 200 !== r || !n) throw "Could not fetch recently searched queries from supabase.";
                                    return t(n.existingSearchResults.map((function(t) {
                                        return t.query
                                    }))), [3, 3];
                                case 2:
                                    return o = s.sent(), console.error(o), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var t = (0, n.Z)((function(t, e, r, n, o) {
                        var i, c, u, l;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, 3, 4]), [4, a.Z.post("/api/shoppingSemanticSearch", {
                                        query: t,
                                        shouldUseFavoriteBrands: e
                                    })];
                                case 1:
                                    if (i = s.sent(), c = i.status, u = i.data, 200 !== c || !u) throw "Could not fetch semantic search results from motion.";
                                    return n(u.results.id), r(u.results.results), [3, 4];
                                case 2:
                                    return l = s.sent(), console.error(l), [3, 4];
                                case 3:
                                    return o(!1), [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(e, r, n, s, a) {
                        return t.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var t = (0, n.Z)((function(t, e, r) {
                        var o, i, c;
                        return (0, s.__generator)(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    o = {}, i = t.map(function() {
                                        var t = (0, n.Z)((function(t) {
                                            var e, r, n, i;
                                            return (0, s.__generator)(this, (function(s) {
                                                switch (s.label) {
                                                    case 0:
                                                        return s.trys.push([0, 2, , 3]), [4, a.Z.post("/api/shoppingSemanticSearch", {
                                                            query: t,
                                                            shouldUseFavoriteBrands: !0
                                                        })];
                                                    case 1:
                                                        if (e = s.sent(), r = e.status, n = e.data, 200 !== r || !n) throw "Could not fetch search results.";
                                                        return o[n.results.id] = n.results.results, [3, 3];
                                                    case 2:
                                                        return i = s.sent(), console.error(i), [3, 3];
                                                    case 3:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }()), u.label = 1;
                                case 1:
                                    return u.trys.push([1, 3, 4, 5]), r(!0), [4, Promise.all(i)];
                                case 2:
                                    return u.sent(), e(o), [3, 5];
                                case 3:
                                    return c = u.sent(), console.error(c), [3, 5];
                                case 4:
                                    return r(!1), [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }));
                    return function(e, r, n) {
                        return t.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var t = (0, n.Z)((function(t, e, r, n, o, i) {
                        var c, u, l, d, p;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, 3, 4]), o(!0), [4, a.Z.post("/api/shoppingSimilarProducts", {
                                        item: t,
                                        styles: e,
                                        shouldUseFavoriteBrands: i
                                    })];
                                case 1:
                                    if (c = s.sent(), u = c.status, l = c.data, 200 !== u || !l) throw new Error("Could not fetch shopping similar products from motion.");
                                    return r(null !== (d = l.similarProducts.similar_products) && void 0 !== d ? d : []), n(l.similarProducts.id), [3, 4];
                                case 2:
                                    return p = s.sent(), console.error(p), [3, 4];
                                case 3:
                                    return o(!1), [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(e, r, n, s, a, o) {
                        return t.apply(this, arguments)
                    }
                }(),
                f = (function() {
                    var t = (0, n.Z)((function(t, e, r) {
                        var n, o, i, c;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, 3, 4]), [4, a.Z.get("/api/shoppingRecommendations?item_id=".concat(t.id))];
                                case 1:
                                    if (n = s.sent(), o = n.status, i = n.data, 200 !== o || !i) throw "Could not fetch shopping item suggestions from motion.";
                                    return e(i.recommendations.recommended_items), [3, 4];
                                case 2:
                                    throw c = s.sent(), console.error(c), c;
                                case 3:
                                    return r(!1), [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }(), function() {
                    var t = (0, n.Z)((function(t, e, r, n, o) {
                        var i;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (s.trys.push([0, 2, , 3]), !o || !e) throw "No item category or item image url provided.";
                                    return [4, a.Z.post("/api/wishlists", {
                                        product_image: e,
                                        product_url: t,
                                        product_name: r,
                                        product_brand: n,
                                        category: o,
                                        notify_motion: !1
                                    })];
                                case 1:
                                    return s.sent(), [3, 3];
                                case 2:
                                    throw i = s.sent(), console.error(i), i;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }(), function() {
                    var t = (0, n.Z)((function(t, e, r, n, a, o) {
                        var i, c, u, l, d;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (s.trys.push([0, 2, , 3]), !t) throw "No user data behind this query.";
                                    return [4, f(e)];
                                case 1:
                                    if (i = s.sent(), c = i.title, u = i.image, l = i.brand, !u) throw "Could not fetch image from retailer. Please try searching for another item.";
                                    return r(e), n(u), a(c), o(l), [3, 3];
                                case 2:
                                    throw d = s.sent(), console.error(d), d;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }(), function() {
                    var t = (0, n.Z)((function(t, e, r, n) {
                        var o, i;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (s.trys.push([0, 2, , 3]), !t) throw "No user data behind this query.";
                                    return [4, a.Z.post("/api/completeTheLookOutfits", {
                                        imgUrl: e,
                                        itemCaption: r,
                                        itemCategory: n
                                    })];
                                case 1:
                                    if (200 === (o = s.sent()).status && o.data) return [2, o.data];
                                    throw "Could not fetch complete the look outfits from motion.";
                                case 2:
                                    throw i = s.sent(), console.error(i), i;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }(), function() {
                    var t = (0, n.Z)((function(t) {
                        var e, r, n, o, i, c;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, , 3]), [4, a.Z.get("/api/extractProductFromUrl?url=".concat(t))];
                                case 1:
                                    if (200 === (e = s.sent()).status && e.data) return r = e.data, n = r.title, o = r.image, i = r.brand, [2, {
                                        title: n,
                                        image: o,
                                        brand: i
                                    }];
                                    throw "Could not fetch product details from retailer.";
                                case 2:
                                    throw c = s.sent(), console.error(c), c;
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }())
        }
    }
]);