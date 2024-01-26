"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5564], {
        38102: function(e, t, r) {
            r.d(t, {
                B1: function() {
                    return d
                },
                T5: function() {
                    return x
                },
                Zq: function() {
                    return h
                },
                _u: function() {
                    return f
                },
                kM: function() {
                    return c
                },
                xm: function() {
                    return m
                },
                yq: function() {
                    return u
                }
            });
            var s = r(47568),
                n = r(26042),
                o = r(69396),
                i = r(70655),
                l = r(6154),
                a = r(38824),
                c = function() {
                    var e = (0, s.Z)((function(e) {
                        var t;
                        return (0, i.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, l.Z.patch("/api/coCreatedOutfits/".concat(e), {
                                        shouldAnalyzeStyles: !0
                                    })];
                                case 1:
                                    return r.sent(), [3, 3];
                                case 2:
                                    return t = r.sent(), console.error(t), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                u = function() {
                    var e = (0, s.Z)((function(e, t) {
                        var r, s;
                        return (0, i.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 2, , 3]), [4, l.Z.patch("/api/eventStylingComponents/".concat(e), {
                                        toRemove: t
                                    })];
                                case 1:
                                    if (r = n.sent(), 200 !== r.status) throw new Error("Could not update event styling component");
                                    return [3, 3];
                                case 2:
                                    return s = n.sent(), console.error(s), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = (0, s.Z)((function(e) {
                        var t, r, s, n, o;
                        return (0, i.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, l.Z.get("/api/eventSearchTerms?limit=10&version=v2")];
                                case 1:
                                    if (t = i.sent(), r = t.status, s = t.data, 200 !== r) throw new Error("Error from Supabase");
                                    return n = s.map((function(e) {
                                        var t, r, s = (null !== (r = null === (t = null === e || void 0 === e ? void 0 : e.event_search_components[0]) || void 0 === t ? void 0 : t.individual_pieces) && void 0 !== r ? r : []).sort((function(e, t) {
                                            return t.score - e.score
                                        }));
                                        return {
                                            id: e.id,
                                            event: e.query,
                                            date: e.date,
                                            theme: e.modifier,
                                            dressCode: e.dress_code,
                                            location: e.location,
                                            hintPieces: (0, a.ad)(s.slice(0, 5))
                                        }
                                    })), e(n), [3, 3];
                                case 2:
                                    return o = i.sent(), console.error(o), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var e = (0, s.Z)((function(e, t, r) {
                        var s, l, a, c;
                        return (0, i.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 3, 4, 5]), [4, fetch("/api/eventStylingOutfits?" + new URLSearchParams({
                                        eventSearchComponentId: e
                                    }), {
                                        method: "GET"
                                    })];
                                case 1:
                                    if (!(s = i.sent()).ok) throw new Error("Error fetching outfits for event from supabase");
                                    return [4, s.json()];
                                case 2:
                                    return l = i.sent(), a = p(l.outfits), t((function(e) {
                                        return (0, o.Z)((0, n.Z)({}, e), {
                                            outfits: a
                                        })
                                    })), [3, 5];
                                case 3:
                                    throw c = i.sent(), console.error(c), c;
                                case 4:
                                    return r(!1), [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, s) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = (0, s.Z)((function(e, t, r) {
                        var s, n, o, a;
                        return (0, i.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, 3, 4]), [4, l.Z.post("/api/eventStylingCatalogItemsFromTexts", {
                                        texts: e
                                    })];
                                case 1:
                                    if (s = i.sent(), n = s.status, o = s.data, 200 !== n) throw new Error("Error from Motion");
                                    return t(o.results), [3, 4];
                                case 2:
                                    throw a = i.sent(), console.error(a), a;
                                case 3:
                                    return r(!1), [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, s) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var e = (0, s.Z)((function(e, t, r) {
                        var s, n, o, l, c, u, d, f, m, x, h, b, v, g, w, j;
                        return (0, i.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    s = e.event, n = e.dressCode, o = e.date, l = e.location, c = e.theme, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, 5, 6]), [4, fetch("/api/eventStylingComponents?" + new URLSearchParams({
                                        event: s,
                                        dressCode: n,
                                        date: null !== o && void 0 !== o ? o : "",
                                        location: l,
                                        theme: c
                                    }), {
                                        method: "GET"
                                    })];
                                case 2:
                                    if (!(u = i.sent()).ok) throw new Error("Error fetching styling components from supabase");
                                    return [4, u.json()];
                                case 3:
                                    return d = i.sent(), f = d.outfits, m = d.components, x = m.individual_pieces, h = m.image_sources, b = m.text_sources, v = m.texts, g = m.id, w = p(f), t({
                                        id: g,
                                        items: (0, a.ad)(x),
                                        texts: v,
                                        textSources: b,
                                        imageSources: h,
                                        outfits: w
                                    }), [3, 6];
                                case 4:
                                    return j = i.sent(), console.error(j), [3, 6];
                                case 5:
                                    return r(!1), [7];
                                case 6:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, s) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function(e) {
                    return e.filter((function(e) {
                        return null !== e.collage_image_url
                    })).map((function(e) {
                        var t = e.outfit_pieces,
                            r = e.style,
                            s = e.stylist_notes,
                            n = e.id,
                            o = e.collage_image_url;
                        return {
                            outfit: (0, a.ad)(t),
                            style: r,
                            stylistNotes: s,
                            outfitId: n,
                            collageImageUrl: o
                        }
                    }))
                },
                h = function() {
                    var e = (0, s.Z)((function(e, t, r) {
                        var s, n, o, l, a, c, u;
                        return (0, i.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    s = e.event, n = e.dressCode, o = e.date, l = e.location, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, 5, 6]), [4, fetch("/api/eventStylingThemes?" + new URLSearchParams({
                                        event: s,
                                        dressCode: n,
                                        date: null !== o && void 0 !== o ? o : "",
                                        location: l
                                    }), {
                                        method: "GET"
                                    })];
                                case 2:
                                    if (!(a = i.sent()).ok) throw new Error("Error fetching themes for event from supabase");
                                    return [4, a.json()];
                                case 3:
                                    return c = i.sent(), t(c.themes), [3, 6];
                                case 4:
                                    return u = i.sent(), console.error(u), [3, 6];
                                case 5:
                                    return r(!1), [7];
                                case 6:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, s) {
                        return e.apply(this, arguments)
                    }
                }();
            ! function() {
                var e = (0, s.Z)((function() {
                    var e, t;
                    return (0, i.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 3, , 4]), [4, fetch("/api/allHistoricalInspirations", {
                                    method: "GET"
                                })];
                            case 1:
                                if (!(e = r.sent()).ok) throw new Error("Error fetching historical inspirations from supabase");
                                return [4, e.json()];
                            case 2:
                                return [2, r.sent()];
                            case 3:
                                return t = r.sent(), console.error(t), [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }()
        },
        35564: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return le
                }
            });
            var s = r(47568),
                n = r(70655),
                o = r(85893),
                i = r(30381),
                l = r.n(i),
                a = r(11163),
                c = r(67294),
                u = r(66409),
                d = r(43990),
                f = r(38102),
                m = r(26042),
                x = r(69396),
                p = r(99534),
                h = r(6154),
                b = r(47516),
                v = r(91383),
                g = r(81400),
                w = r(8323),
                j = r(23601),
                y = r(27037),
                C = r(51667),
                _ = function(e) {
                    var t = e.userData,
                        r = e.item,
                        i = e.isHovering,
                        l = e.height,
                        a = e.setProductToOpenModalFor,
                        u = e.setIsProductDetailsModalOpen,
                        d = e.queryString,
                        f = e.context,
                        m = e.onRemoveItemFromCollage,
                        x = (0, c.useContext)(v.F).dispatch,
                        p = (0, w.h)(),
                        _ = p.globalWishlistItemsIDs,
                        k = p.addToWishlist,
                        S = p.removeFromWishlist,
                        N = (0, c.useState)(_.includes(r.productId)),
                        I = N[0],
                        O = N[1];
                    (0, c.useEffect)((function() {
                        O(_.includes(r.productId))
                    }), [_]);
                    var L, Z = function() {
                            var e = (0, s.Z)((function() {
                                var e, s, o, i, l, a, c, u;
                                return (0, n.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t ? (e = r.productId, s = r.productImages, o = r.name, i = r.brand, l = r.category, a = s[0], c = a.imageSrc, u = a.link, (0, y.L)("".concat(f, ".add_to_wishlist"), t.id, {
                                                wishlist_item_name: o,
                                                wishlist_item_brand: i,
                                                wishlist_item_url: u,
                                                wishlist_product_id: e
                                            }), O((function(e) {
                                                return !e
                                            })), x({
                                                type: g.uX.ADD_TO_TOAST_STACK,
                                                payload: {
                                                    item: r,
                                                    key: (new Date).getTime()
                                                }
                                            }), k(r.productId), [4, h.Z.post("/api/wishlists", {
                                                product_image: c,
                                                product_url: u,
                                                product_name: o,
                                                product_brand: i,
                                                product_id: e,
                                                category: l,
                                                notify_motion: !1
                                            })]) : [3, 2];
                                        case 1:
                                            n.sent(), h.Z.post("/api/fastWishlistingFromProductModal", {
                                                product_name: o,
                                                search_query: d,
                                                product_brand: i
                                            }), i && h.Z.post("/api/favoriteBrand", {
                                                product_brand: i
                                            }), n.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        T = function() {
                            var e = (0, s.Z)((function() {
                                var e;
                                return (0, n.__generator)(this, (function(s) {
                                    return t && (O((function(e) {
                                        return !e
                                    })), e = r.imageSrc, h.Z.delete("/api/wishlists", {
                                        data: e
                                    }), S(r.productId)), [2]
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        A = "closet" === r.from || "mock" === r.from,
                        D = (0, j.Z)().width;
                    return (0, o.jsx)("div", {
                        className: "flex h-full w-full items-center justify-center sm:hover:drop-shadow-md",
                        children: (0, o.jsxs)("div", {
                            className: "relative flex h-full w-full flex-col items-center justify-center gap-2",
                            children: [i && D >= 640 && (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)("div", {
                                    className: (0, C.Z)("absolute left-[calc((100%-90px)/2)] z-10 flex w-[90px] scale-100 items-center justify-center border border-tts-black bg-tts-black px-2 text-[9px] font-light uppercase text-white hover:cursor-pointer sm:left-[calc((100%-120px)/2)] sm:w-[120px] sm:px-3 sm:py-1 sm:text-xs", "short" === l ? "bottom-[calc((100%/2)-30px)]" : "bottom-[calc((100%/2)-10px)]"),
                                    onClick: function() {
                                        t && (0, y.L)("".concat(f, ".outfit_piece.clicked"), t.id, {
                                            item_name: r.name,
                                            item_source: r.from,
                                            item_brand: r.brand,
                                            item_id: r.id,
                                            item_url: r.imageSrc
                                        }), a(r), u(!0)
                                    },
                                    children: "View Product"
                                })
                            }), (0, o.jsxs)("div", {
                                className: "relative",
                                onClick: function() {
                                    D < 640 && (t && (0, y.L)("".concat(f, ".outfit_piece.clicked"), t.id, {
                                        item_name: r.name,
                                        item_source: r.from,
                                        item_brand: r.brand,
                                        item_id: r.id,
                                        item_url: r.imageSrc
                                    }), a(r), u(!0))
                                },
                                children: [!A && I && (0, o.jsx)("div", {
                                    className: "absolute right-[5px] top-[5px] z-10 flex h-[20px] w-[20px] items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                                    onClick: function() {
                                        return T()
                                    },
                                    children: (0, o.jsx)(b.SEb, {
                                        size: "1rem",
                                        fill: "#FF3040"
                                    })
                                }), !A && !I && (0, o.jsx)("div", {
                                    className: "absolute right-[5px] top-[5px] z-10 flex h-[20px] w-[20px] items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                                    onClick: function(e) {
                                        e.stopPropagation(), Z()
                                    },
                                    children: (0, o.jsx)(b.kTx, {
                                        size: "1rem",
                                        fill: "black"
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "absolute left-[5px] top-[5px] z-10 flex h-[20px] w-[20px] items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                                    onClick: function(e) {
                                        e.stopPropagation(), m && m(r)
                                    },
                                    children: (0, o.jsx)(b.czh, {
                                        size: "1rem",
                                        fill: "black"
                                    })
                                }), (0, o.jsx)("img", {
                                    src: "closet" === r.from && null !== (L = r.backgroundRemovedImageUrl) && void 0 !== L ? L : r.imageSrc,
                                    alt: r.imageAlt,
                                    className: (0, C.Z)("w-[150px] cursor-pointer object-contain", "tall" === l ? "max-h-[360px]" : "tall-medium" === l ? "max-h-[210px]" : "medium" === l ? "max-h-[170px]" : "max-h-[100px]", i && D >= 640 && "border-[1px] border-tts-black")
                                })]
                            }), (0, o.jsx)("div", {
                                className: "text-center text-xs uppercase",
                                children: "closet" === r.from ? "\u2728Owned\u2728" : r.brand
                            })]
                        })
                    })
                },
                k = function(e) {
                    var t = e.index,
                        r = e.userData,
                        s = e.setProductToOpenModalFor,
                        n = e.setIsProductDetailsModalOpen,
                        i = e.item,
                        l = e.height,
                        a = e.queryString,
                        u = e.context,
                        d = e.onRemoveItemFromCollage,
                        f = (0, c.useState)(!1),
                        m = f[0],
                        x = f[1];
                    return i ? (0, o.jsx)("div", {
                        onMouseEnter: function() {
                            return x(!0)
                        },
                        onMouseLeave: function() {
                            return x(!1)
                        },
                        className: "flex h-full w-full items-center justify-center bg-transparent duration-200 ease-in-out sm:hover:scale-110",
                        children: (0, o.jsx)(_, {
                            userData: r,
                            item: i,
                            isHovering: m,
                            setProductToOpenModalFor: s,
                            setIsProductDetailsModalOpen: n,
                            height: l,
                            queryString: a,
                            context: u,
                            onRemoveItemFromCollage: d
                        })
                    }, t) : null
                },
                S = function(e) {
                    return (0, o.jsx)(N, (0, m.Z)({}, e))
                },
                N = function(e) {
                    var t = e.outfitItems,
                        r = (0, p.Z)(e, ["outfitItems"]);
                    return (0, o.jsxs)("div", {
                        className: "relative grid w-full grid-cols-3 justify-center gap-3 px-2",
                        children: [0 === t.length && (0, o.jsx)("p", {
                            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-light text-gray-500",
                            children: "Select an item from your closet to get started."
                        }), (0, o.jsxs)("div", {
                            className: "flex h-[400px] w-full flex-col justify-between",
                            children: [(0, o.jsx)("div", {
                                className: "h-1/2",
                                children: t[0] && (0, o.jsx)(k, (0, x.Z)((0, m.Z)({}, r), {
                                    index: 0,
                                    item: t[0],
                                    height: "medium"
                                }))
                            }), (0, o.jsx)("div", {
                                className: "h-1/2",
                                children: t[1] && (0, o.jsx)(k, (0, x.Z)((0, m.Z)({}, r), {
                                    index: 1,
                                    item: t[1],
                                    height: "medium"
                                }))
                            })]
                        }), (0, o.jsxs)("div", {
                            className: "flex h-[400px] w-full flex-col justify-between",
                            children: [(0, o.jsx)("div", {
                                className: "h-1/2",
                                children: t[2] && (0, o.jsx)(k, (0, x.Z)((0, m.Z)({}, r), {
                                    index: 2,
                                    item: t[2],
                                    height: "medium"
                                }))
                            }), (0, o.jsx)("div", {
                                className: "h-1/2",
                                children: t[3] && (0, o.jsx)(k, (0, x.Z)((0, m.Z)({}, r), {
                                    index: 3,
                                    item: t[3],
                                    height: "medium"
                                }))
                            })]
                        }), (0, o.jsxs)("div", {
                            className: "flex h-[400px] w-full flex-col justify-between",
                            children: [(0, o.jsx)("div", {
                                className: "h-1/2",
                                children: t[4] && (0, o.jsx)(k, (0, x.Z)((0, m.Z)({}, r), {
                                    index: 4,
                                    item: t[4],
                                    height: "medium"
                                }))
                            }), (0, o.jsx)("div", {
                                className: "h-1/2",
                                children: t[5] && (0, o.jsx)(k, (0, x.Z)((0, m.Z)({}, r), {
                                    index: 5,
                                    item: t[5],
                                    height: "medium"
                                }))
                            })]
                        })]
                    })
                },
                I = r(17589),
                O = r(92046),
                L = function(e) {
                    var t = e.outfitLabel,
                        r = e.currentOutfit,
                        s = e.userData,
                        n = e.onRemoveItemFromCollage,
                        i = e.inCreationMode,
                        l = e.isOOTD,
                        a = (0, c.useState)(r.find((function(e) {
                            return null !== e
                        }))),
                        u = a[0],
                        d = a[1],
                        f = (0, c.useState)(!1),
                        m = f[0],
                        x = f[1],
                        p = r.filter((function(e) {
                            return null !== e && "mock" !== (null === e || void 0 === e ? void 0 : e.from)
                        }));
                    return (0, o.jsxs)("section", {
                        className: (0, C.Z)("relative flex max-h-[500px] w-full flex-col items-center gap-2 border border-tts-black py-4", l && "border-0"),
                        children: [(0, o.jsx)("h1", {
                            className: "mb-4 text-center text-sm font-semibold uppercase",
                            children: "" !== t && "".concat(s.first_name, "'s ").concat(t.split(" - ")[0])
                        }), i ? (0, o.jsx)(S, {
                            outfitItems: r,
                            isEditView: !1,
                            userData: s,
                            setProductToOpenModalFor: d,
                            setIsProductDetailsModalOpen: x,
                            queryString: "Current progress outfit",
                            onRemoveItemFromCollage: n
                        }) : (0, o.jsx)(I.o, {
                            outfitItems: p,
                            isEditView: !1,
                            userData: s,
                            setProductToOpenModalFor: d,
                            setIsProductDetailsModalOpen: x,
                            queryString: "Current progress outfit",
                            isFromCloset: !0
                        }), u && (0, o.jsx)(O.Z, {
                            context: "co_create",
                            product: u,
                            userData: s,
                            isModalOpen: m,
                            setIsModalOpen: x,
                            event: "Current progress outfit"
                        })]
                    })
                },
                Z = r(68239),
                T = r(8756),
                A = function(e) {
                    return "Would you like to save this outfit?"
                },
                D = function(e) {
                    var t = e.userData,
                        r = e.isOpen,
                        i = e.setIsOpen,
                        l = e.currentOutfit,
                        a = e.handleConfirm,
                        c = e.isLoading,
                        u = e.outfitLabel,
                        d = e.currentContext;
                    return (0, o.jsxs)(T.Z, {
                        open: r,
                        setOpen: i,
                        children: [(0, o.jsx)("span", {
                            className: "mx-auto",
                            children: (0, o.jsx)(L, {
                                outfitLabel: u,
                                currentOutfit: l,
                                userData: t
                            })
                        }), (0, o.jsx)("p", {
                            className: "mt-8 w-full text-sm",
                            children: A(d)
                        }), (0, o.jsxs)("div", {
                            className: "mt-3 flex w-full gap-3",
                            children: [(0, o.jsx)("button", {
                                className: "w-1/2 border border-black py-2 text-center text-sm font-semibold uppercase",
                                onClick: function() {
                                    return i(!1)
                                },
                                children: "Cancel"
                            }), (0, o.jsx)("button", {
                                className: "flex w-1/2 items-center justify-center border border-black bg-tts-black py-2 text-center text-sm font-semibold uppercase text-white",
                                onClick: function() {
                                    var e = (0, s.Z)((function(e) {
                                        return (0, n.__generator)(this, (function(r) {
                                            return e.preventDefault(), (0, y.L)("co_create_modal.clicked_confirm", t.id, {
                                                outfit_label: u
                                            }), a(), [2]
                                        }))
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                children: c ? (0, o.jsx)(Z.Z, {
                                    size: "20px",
                                    invert: !0
                                }) : "Confirm"
                            })]
                        })]
                    })
                },
                M = r(97517),
                E = r(61889),
                R = function(e) {
                    var t = e.userData,
                        r = e.currentOutfit,
                        s = e.label,
                        n = e.setLabel,
                        i = e.creationContext,
                        a = e.setCreationContext,
                        c = e.date,
                        u = e.setDate;
                    return (0, o.jsxs)("section", {
                        className: "flex h-full w-full flex-col items-center gap-4 overflow-y-auto pb-6 md:flex-row",
                        children: [(0, o.jsx)("div", {
                            className: "flex w-full flex-col md:h-full md:w-1/2",
                            children: t && (0, o.jsx)(L, {
                                outfitLabel: s,
                                currentOutfit: r,
                                userData: t
                            })
                        }), (0, o.jsxs)("div", {
                            className: "flex w-full flex-col gap-4 md:h-full md:w-1/2",
                            children: [(0, o.jsxs)("span", {
                                className: "flex w-full flex-col gap-1",
                                children: [(0, o.jsx)("label", {
                                    className: "text-xs font-light uppercase",
                                    children: "My outfit name"
                                }), (0, o.jsx)("input", {
                                    className: "font-base border border-tts-black p-2 text-sm focus:border-tts-black focus:ring-0",
                                    type: "text",
                                    value: s,
                                    onChange: function(e) {
                                        return n(e.target.value)
                                    }
                                })]
                            }), (0, o.jsxs)("span", {
                                className: "flex w-full flex-col gap-1",
                                children: [(0, o.jsx)("label", {
                                    className: "text-xs font-light uppercase",
                                    children: "Outfit category"
                                }), (0, o.jsxs)("select", {
                                    className: "font-base border border-tts-black p-2 text-sm focus:border-tts-black focus:ring-0",
                                    value: i,
                                    onChange: function(e) {
                                        a(e.target.value)
                                    },
                                    children: [(0, o.jsx)("option", {
                                        value: "exploration",
                                        children: "Exploration"
                                    }, "exploration"), (0, o.jsx)("option", {
                                        value: "daily look",
                                        children: "Worn"
                                    }, "daily look")]
                                }), "daily look" === i && (0, o.jsxs)("div", {
                                    className: "font-base text-xs",
                                    children: [" ", "\ud83d\udca1 The wear counts on your closet pieces will be updated in My Collection", " "]
                                })]
                            }), (0, o.jsxs)("span", {
                                className: "flex w-full flex-col gap-1",
                                children: [(0, o.jsx)("label", {
                                    className: "text-xs font-light uppercase",
                                    children: "Date"
                                }), (0, o.jsx)(E.M, {
                                    value: l()(c),
                                    onChange: function(e) {
                                        return u(l()(e).format("YYYY-MM-DD"))
                                    }
                                })]
                            })]
                        })]
                    })
                },
                P = r(29815),
                z = r(83991),
                F = r(25087),
                U = r(47929),
                W = r(35914),
                q = r(53507),
                Q = r(38824),
                G = r(38183),
                Y = r(31618),
                V = function(e) {
                    var t, r, s = e.closetItems,
                        n = e.currentOutfit,
                        i = e.setCurrentOutfit,
                        l = e.categoryOfItemToAdd,
                        a = e.setShowAddItemModal,
                        u = e.setIsUserTryingToAddMoreThanSixItems,
                        d = (0, j.Z)().width,
                        f = (0, c.useState)(!0),
                        m = f[0],
                        x = f[1],
                        p = d < 768 ? 12 : 18,
                        h = function(e) {
                            n.length > 5 ? u(!0) : n.some((function(t) {
                                return (null === t || void 0 === t ? void 0 : t.imageSrc) === e.imageSrc
                            })) ? i((function(t) {
                                return t.filter((function(t) {
                                    return (null === t || void 0 === t ? void 0 : t.imageSrc) !== e.imageSrc
                                }))
                            })) : i((function(t) {
                                return (0, P.Z)(t).concat([e])
                            }))
                        },
                        b = [(0, M.WR)(l)].concat((0, P.Z)(s.filter((function(e) {
                            var t;
                            return null === (t = e.category) || void 0 === t ? void 0 : t.toLowerCase().includes(null !== (r = null === l || void 0 === l ? void 0 : l.toLowerCase()) && void 0 !== r ? r : "N/A")
                        })))),
                        v = "closet" !== (null === (t = s[0]) || void 0 === t ? void 0 : t.from);
                    return (0, o.jsx)("div", {
                        className: "flex w-full flex-col gap-6",
                        children: (0, o.jsxs)("span", {
                            className: "grid w-full grid-cols-4 md:grid-cols-6",
                            children: [(m ? b.slice(0, p) : b).map((function(e, t) {
                                return (0, o.jsx)(H, {
                                    item: e,
                                    currentOutfit: n,
                                    onClick: h
                                }, t)
                            })), b.length > p && (0, o.jsx)("button", {
                                className: "flex aspect-square w-full items-center justify-center border text-xs uppercase text-tts-black hover:cursor-pointer sm:hover:border-gray-400",
                                onClick: function() {
                                    return x((function(e) {
                                        return !e
                                    }))
                                },
                                children: m ? "View all" : "View less"
                            }), !v && (0, o.jsx)("button", {
                                className: "flex aspect-square w-full items-center justify-center text-xs uppercase text-gray-400 hover:cursor-pointer hover:underline",
                                onClick: function() {
                                    return a(!0)
                                },
                                children: "Add more owned items \u2192"
                            })]
                        })
                    })
                },
                B = function(e) {
                    var t = e.selectedCategory,
                        r = e.currentOutfit,
                        s = e.suggestedItems,
                        n = e.setCurrentOutfit,
                        i = e.setIsUserTryingToAddMoreThanSixItems,
                        l = function(e) {
                            r.length > 5 ? i(!0) : r.some((function(t) {
                                return (null === t || void 0 === t ? void 0 : t.imageSrc) === e.imageSrc
                            })) ? n((function(t) {
                                return t.filter((function(t) {
                                    return (null === t || void 0 === t ? void 0 : t.imageSrc) !== e.imageSrc
                                }))
                            })) : n((function(t) {
                                return (0, P.Z)(t).concat([e])
                            }))
                        },
                        a = (0, Q.ad)((null === s || void 0 === s ? void 0 : s.flat()) || []).filter((function(e) {
                            var r;
                            return null === (r = e.category) || void 0 === r ? void 0 : r.toLowerCase().includes(t.toLowerCase())
                        }));
                    return (0, o.jsx)("div", {
                        className: "flex w-full flex-col gap-6",
                        children: (0, o.jsx)("span", {
                            className: "grid w-full grid-cols-4 md:grid-cols-6",
                            children: a.reduce((function(e, t) {
                                return e.some((function(e) {
                                    return e.imageSrc === t.imageSrc
                                })) || e.push(t), e
                            }), []).map((function(e, t) {
                                return (0, o.jsx)(H, {
                                    item: e,
                                    currentOutfit: r,
                                    onClick: l,
                                    showSource: !0
                                }, t)
                            }))
                        })
                    })
                },
                H = function(e) {
                    var t, r = e.item,
                        s = e.currentOutfit,
                        n = e.onClick,
                        i = e.showSource;
                    return (0, o.jsxs)("button", {
                        className: "relative hover:cursor-pointer",
                        onClick: function() {
                            return n(r)
                        },
                        children: [(0, o.jsx)("img", {
                            src: "closet" === r.from && null !== (t = r.backgroundRemovedImageUrl) && void 0 !== t ? t : r.imageSrc,
                            alt: r.imageAlt,
                            className: (0, C.Z)("aspect-square w-full border bg-transparent object-contain sm:hover:border-gray-400", s.some((function(e) {
                                return (null === e || void 0 === e ? void 0 : e.imageSrc) === r.imageSrc
                            })) && "border-tts-black", i && "bg-tts-white")
                        }), i && (0, o.jsx)("p", {
                            className: "absolute left-2 top-2 flex items-center justify-center border border-tts-black bg-gray-200 px-1 text-[10px] uppercase leading-3",
                            children: "closet" === r.from ? "owned" : "Catalog"
                        })]
                    })
                },
                X = function(e) {
                    var t = e.searchQuery,
                        r = e.setSearchQuery;
                    return (0, o.jsxs)("span", {
                        className: "relative w-full",
                        children: [(0, o.jsx)("input", {
                            type: "text",
                            placeholder: "search for an item...",
                            className: "w-full border p-2 text-xs font-light focus:border-tts-black focus:ring-0",
                            value: t,
                            onChange: function(e) {
                                return r(e.target.value)
                            }
                        }), t && (0, o.jsx)("button", {
                            className: "absolute right-[10px] top-[calc(50%-9px)] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gray-200",
                            onClick: function() {
                                r("")
                            },
                            children: (0, o.jsx)(b.czh, {
                                size: "1rem",
                                fill: "black"
                            })
                        })]
                    })
                },
                K = function(e) {
                    var t, r, i, l, a, u, d, f, m, x, p = e.closetItems,
                        v = e.setClosetItems,
                        g = e.wishlistItems,
                        w = e.setCurrentOutfit,
                        _ = e.currentOutfit,
                        k = e.aiRecommendedOutfitSet,
                        S = e.label,
                        N = e.isErroring,
                        I = e.isLoadingClosetItems,
                        O = e.isLoadingWishlistItems,
                        T = e.isLoadingAltaSuggestions,
                        A = (0, c.useState)(""),
                        D = A[0],
                        M = A[1],
                        E = (0, c.useState)("owned"),
                        R = E[0],
                        H = E[1],
                        K = (0, c.useState)("tops"),
                        J = K[0],
                        $ = K[1],
                        ee = (0, c.useState)(!1),
                        te = ee[0],
                        re = ee[1],
                        se = (0, c.useState)(!1),
                        ne = se[0],
                        oe = se[1],
                        ie = (0, c.useState)(!1),
                        le = ie[0],
                        ae = ie[1],
                        ce = (0, j.Z)().width,
                        ue = (0, c.useContext)(Y.St),
                        de = (0, c.useRef)(null),
                        fe = (0, c.useRef)(null),
                        me = (0, c.useRef)({}),
                        xe = function() {
                            if (ue && (0, y.L)("co_create_modal.autocomplete_clicked", ue.id), _.length > 5) ae(!0);
                            else
                                for (var e, t = function(e) {
                                        if (r.includes(s[e]) && n.length < 6) {
                                            var t, o = null !== (t = null === k || void 0 === k ? void 0 : k.pieces.find((function(t) {
                                                    return t[0].category.toLowerCase() === s[e]
                                                }))) && void 0 !== t ? t : [],
                                                i = (0, Q.ad)([o.sort((function(e, t) {
                                                    return e.score - t.score
                                                })).reverse()[0]])[0];
                                            w((function(e) {
                                                return (0, P.Z)(e).concat([i])
                                            })), n.push(i)
                                        }
                                    }, r = (null !== (e = null === k || void 0 === k ? void 0 : k.pieces.map((function(e) {
                                        return e[0].category.toLowerCase()
                                    }))) && void 0 !== e ? e : []).filter((function(e) {
                                        return !_.some((function(t) {
                                            var r;
                                            return (null === t || void 0 === t || null === (r = t.category) || void 0 === r ? void 0 : r.toLowerCase()) === e
                                        }))
                                    })), s = (0, P.Z)(G.CLOSET_CATEGORIES.map((function(e) {
                                        return e.toLowerCase()
                                    }))), n = (0, P.Z)(_), o = 0; o < s.length; o++) t(o)
                        },
                        pe = function() {
                            var e = (0, s.Z)((function(e, t) {
                                var r, s, o, i, l, a, c;
                                return (0, n.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (r = t.hash, s = t.productName, o = t.category, i = t.productBrand, l = t.uploadMethod, !ue) return [2];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, 4, 5]), [4, h.Z.post("/api/uploadClosetDirect", {
                                                id: ue.id,
                                                images: [e],
                                                names: [s],
                                                categories: [o],
                                                brands: [i],
                                                uploadMethod: l,
                                                hashes: [r]
                                            })];
                                        case 2:
                                            return [2, 200 === n.sent().status];
                                        case 3:
                                            return a = n.sent(), console.error(a), [3, 5];
                                        case 4:
                                            return c = {
                                                productId: "",
                                                id: 0,
                                                backgroundRemovedImageUrl: e,
                                                imageSrc: e,
                                                imageAlt: e,
                                                userUploadedImage: e,
                                                from: "closet",
                                                productImages: [{
                                                    imageSrc: e,
                                                    link: e
                                                }],
                                                brand: i,
                                                name: s,
                                                category: null !== o && void 0 !== o ? o : "tops"
                                            }, v((function(e) {
                                                return (0, P.Z)(e).concat([c])
                                            })), [7];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        he = function(e) {
                            var t = me.current[e];
                            if (t) {
                                var r = fe.current;
                                if (r) {
                                    var s = t.offsetLeft - (r.offsetWidth - t.offsetWidth / 2) / 2;
                                    r.scrollTo({
                                        top: 0,
                                        left: s,
                                        behavior: "smooth"
                                    })
                                }
                            }
                        },
                        be = function(e) {
                            return e.filter((function(e) {
                                return (null !== (r = e.brand) && void 0 !== r ? r : "").toLowerCase().includes(D.toLowerCase()) || (null !== (i = e.name) && void 0 !== i ? i : "").toLowerCase().includes(D.toLowerCase()) || (null !== (l = e.category) && void 0 !== l ? l : "").toLowerCase().includes(D.toLowerCase()) || (null !== (a = e.caption) && void 0 !== a ? a : "").toLowerCase().includes(D.toLowerCase()) || (null !== (u = e.productImages[0].imageSrc) && void 0 !== u ? u : "").toLowerCase().includes(D.toLowerCase())
                            }))
                        };
                    return (0, o.jsx)("div", {
                        className: "flex w-full flex-col pb-20",
                        children: (0, o.jsxs)("div", {
                            className: "flex w-full flex-col gap-6 md:grid md:grid-cols-2",
                            children: [(0, o.jsxs)("section", {
                                className: "relative flex w-full flex-col gap-1",
                                children: [ue && (0, o.jsx)(L, {
                                    outfitLabel: S,
                                    currentOutfit: _,
                                    userData: ue,
                                    onRemoveItemFromCollage: function(e) {
                                        w((function(t) {
                                            return t.filter((function(t) {
                                                return (null === t || void 0 === t ? void 0 : t.imageSrc) !== e.imageSrc
                                            }))
                                        })), ae(!1)
                                    },
                                    inCreationMode: !0
                                }), le && (0, o.jsx)("p", {
                                    className: "text-xs text-rose-400",
                                    children: "Unable to add more than 6 items. Please remove an item to add another."
                                })]
                            }), (0, o.jsxs)("section", {
                                className: "flex w-full flex-col gap-4",
                                children: [ce < 768 ? (0, o.jsxs)(o.Fragment, {
                                    children: [T && (0, o.jsx)(W.gT, {
                                        children: (0, o.jsxs)("div", {
                                            className: "flex w-full justify-center bg-tts-black py-2 text-center text-sm font-semibold uppercase text-tts-white",
                                            children: [(0, o.jsx)(q.Z, {
                                                className: "mr-2"
                                            }), "Pulling some pieces..."]
                                        })
                                    }), !T && !N && (0, o.jsx)(W.IL, {
                                        children: (0, o.jsx)("button", {
                                            onClick: xe,
                                            className: "w-full bg-tts-black py-2 text-center text-sm font-semibold uppercase text-tts-white",
                                            children: "\u2728auto-complete outfit\u2728"
                                        })
                                    }), (0, o.jsx)("div", {
                                        ref: fe,
                                        className: "flex w-full flex-nowrap gap-3 overflow-x-auto px-[40%]",
                                        children: G.CLOSET_CATEGORIES.map((function(e, t) {
                                            return (0, o.jsxs)("button", {
                                                ref: function(e) {
                                                    e ? me.current[t.toString()] = e : delete me.current[t.toString()]
                                                },
                                                className: (0, C.Z)("flex items-center gap-2 border border-tts-black px-4 py-2 text-xs uppercase", e.toLowerCase() === J.toLowerCase() && "bg-tts-black text-tts-white"),
                                                onClick: function() {
                                                    he(t.toString()), $(e)
                                                },
                                                children: ["Other Pieces" === e ? "other" : e, _.some((function(t) {
                                                    var r;
                                                    return null === t || void 0 === t || null === (r = t.category) || void 0 === r ? void 0 : r.toLowerCase().includes(e.toLowerCase())
                                                })) && (0, o.jsx)(b.wRn, {
                                                    size: "1rem",
                                                    fill: e.toLowerCase() === J.toLowerCase() ? "white" : "black"
                                                })]
                                            }, t)
                                        }))
                                    })]
                                }) : (0, o.jsxs)(o.Fragment, {
                                    children: [T && (0, o.jsx)(W.gT, {
                                        children: (0, o.jsxs)("div", {
                                            onClick: xe,
                                            className: "flex w-full justify-center bg-tts-black py-2 text-center text-sm font-semibold uppercase text-tts-white",
                                            children: [(0, o.jsx)(q.Z, {
                                                className: "mr-2"
                                            }), "Pulling some pieces..."]
                                        })
                                    }), !T && !N && (0, o.jsx)(W.IL, {
                                        children: (0, o.jsx)("button", {
                                            onClick: xe,
                                            className: "w-full bg-tts-black py-2 text-center text-sm font-semibold uppercase text-tts-white",
                                            children: "\u2728auto-complete outfit\u2728"
                                        })
                                    }), (0, o.jsx)("div", {
                                        className: "flex w-full flex-col",
                                        children: G.CLOSET_CATEGORIES.map((function(e, t) {
                                            var r, s, n, i, l;
                                            return (0, o.jsxs)("div", {
                                                className: "flex w-full flex-col gap-4",
                                                children: [(0, o.jsxs)("button", {
                                                    className: (0, C.Z)("flex w-full items-center justify-between border border-t-0 border-tts-black px-4 py-2 text-xs uppercase hover:bg-gray-200", 0 === t && "border-t-[1px]", e.toLowerCase() === J.toLowerCase() && "bg-tts-black text-tts-white hover:bg-tts-black"),
                                                    onClick: function() {
                                                        he(t.toString()), $(e)
                                                    },
                                                    children: [(0, o.jsxs)("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [e.toLowerCase() === J.toLowerCase() ? (0, o.jsx)(b.OrA, {
                                                            size: "1rem"
                                                        }) : (0, o.jsx)(b.lU2, {
                                                            size: "1rem"
                                                        }), "Other Pieces" === e ? "other" : e]
                                                    }), _.some((function(t) {
                                                        var r;
                                                        return null === t || void 0 === t || null === (r = t.category) || void 0 === r ? void 0 : r.toLowerCase().includes(e.toLowerCase())
                                                    })) && (0, o.jsx)(b.wRn, {
                                                        size: "1rem",
                                                        fill: e.toLowerCase() === J.toLowerCase() ? "white" : "black"
                                                    })]
                                                }), e.toLowerCase() === J.toLowerCase() && (0, o.jsxs)("div", {
                                                    className: (0, C.Z)("flex w-full flex-col gap-4 border-b-[1px] border-tts-black pb-4", t === G.CLOSET_CATEGORIES.length - 1 && "border-b-0"),
                                                    children: ["alta" !== R && (0, o.jsx)(X, {
                                                        setSearchQuery: M,
                                                        searchQuery: D
                                                    }), (0, o.jsxs)("span", {
                                                        className: "flex w-full justify-center",
                                                        ref: de,
                                                        children: [(0, o.jsx)("div", {
                                                            className: "w-full border-b-[1px] border-t-[1px] border-tts-black"
                                                        }), (0, o.jsxs)("button", {
                                                            className: (0, C.Z)("whitespace-nowrap border-b-[1px] border-l-[1px] border-t-[1px] border-tts-black px-4 py-2 text-xs uppercase text-tts-black sm:hover:cursor-pointer sm:hover:bg-tts-black sm:hover:text-white", "alta" === R && "border-b-[0px]"),
                                                            onClick: function() {
                                                                H("alta"), ue && (0, y.L)("co_create_modal.clicked_alta_tab", ue.id)
                                                            },
                                                            children: ["\u2728Alta AI\u2728", " ", T ? "(...)" : "(" + (0, Q.ad)((null === k || void 0 === k || null === (r = k.pieces) || void 0 === r ? void 0 : r.flat()) || []).filter((function(e) {
                                                                var t;
                                                                return null === (t = e.category) || void 0 === t ? void 0 : t.toLowerCase().includes(J.toLowerCase())
                                                            })).length.toString() + ")"]
                                                        }), (0, o.jsxs)("button", {
                                                            className: (0, C.Z)("whitespace-nowrap border-b-[1px] border-l-[1px] border-t-[1px] border-tts-black px-4 py-2 text-xs uppercase text-tts-black sm:hover:cursor-pointer sm:hover:bg-tts-black sm:hover:text-white", "owned" === R && "border-b-[0px]"),
                                                            onClick: function() {
                                                                H("owned"), ue && (0, y.L)("cocreate_owned_tab.clicked", ue.id)
                                                            },
                                                            children: ["Owned (", p.filter((function(e) {
                                                                var t;
                                                                return (null !== (s = null === (t = e.category) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== s ? s : "").includes(null !== (n = null === J || void 0 === J ? void 0 : J.toLowerCase()) && void 0 !== n ? n : "N/A")
                                                            })).length, ")"]
                                                        }), (0, o.jsxs)("button", {
                                                            className: (0, C.Z)("whitespace-nowrap border border-tts-black px-4 py-2 text-xs uppercase text-tts-black sm:hover:cursor-pointer sm:hover:bg-tts-black sm:hover:text-white", "wishlist" === R && "border-b-[0px]"),
                                                            onClick: function() {
                                                                H("wishlist"), ue && (0, y.L)("cocreate_wishlist_tab.clicked", ue.id)
                                                            },
                                                            children: ["Wishlist (", g.filter((function(e) {
                                                                var t;
                                                                return (null !== (i = null === (t = e.category) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== i ? i : "").includes(null !== (l = null === J || void 0 === J ? void 0 : J.toLowerCase()) && void 0 !== l ? l : "N/A")
                                                            })).length, ")"]
                                                        }), (0, o.jsx)("div", {
                                                            className: "w-full border-b-[1px] border-t-[1px] border-tts-black"
                                                        })]
                                                    }), "owned" === R ? I ? (0, o.jsx)("div", {
                                                        className: "mt-2 flex w-full justify-center",
                                                        children: (0, o.jsx)(Z.Z, {
                                                            size: "36px"
                                                        })
                                                    }) : (0, o.jsx)(V, {
                                                        closetItems: (0, z.T)(be(p)),
                                                        currentOutfit: _,
                                                        setCurrentOutfit: w,
                                                        categoryOfItemToAdd: J,
                                                        setShowAddItemModal: re,
                                                        setIsUserTryingToAddMoreThanSixItems: ae
                                                    }) : "wishlist" === R ? O ? (0, o.jsx)("div", {
                                                        className: "mt-2 flex w-full justify-center",
                                                        children: (0, o.jsx)(Z.Z, {
                                                            size: "36px"
                                                        })
                                                    }) : (0, o.jsx)(V, {
                                                        closetItems: be(g),
                                                        currentOutfit: _,
                                                        setCurrentOutfit: w,
                                                        categoryOfItemToAdd: J,
                                                        setShowAddItemModal: re,
                                                        setIsUserTryingToAddMoreThanSixItems: ae
                                                    }) : T ? (0, o.jsxs)("div", {
                                                        className: "mt-2 flex w-full justify-center gap-2",
                                                        children: [(0, o.jsx)(Z.Z, {
                                                            size: "16px"
                                                        }), (0, o.jsx)("p", {
                                                            className: "text-xs font-light",
                                                            children: "generating AI suggestions"
                                                        })]
                                                    }) : (0, o.jsx)(B, {
                                                        selectedCategory: J,
                                                        suggestedItems: null === k || void 0 === k ? void 0 : k.pieces,
                                                        currentOutfit: _,
                                                        setCurrentOutfit: w,
                                                        setIsUserTryingToAddMoreThanSixItems: ae
                                                    })]
                                                })]
                                            }, t)
                                        }))
                                    })]
                                }), ce < 768 && J && (0, o.jsxs)(o.Fragment, {
                                    children: ["alta" !== R && (0, o.jsx)(X, {
                                        setSearchQuery: M,
                                        searchQuery: D
                                    }), (0, o.jsxs)("span", {
                                        className: "flex w-full justify-center",
                                        ref: de,
                                        children: [(0, o.jsx)("div", {
                                            className: "w-full border-b-[1px] border-t-[1px] border-tts-black"
                                        }), (0, o.jsxs)("button", {
                                            className: (0, C.Z)("whitespace-nowrap border-b-[1px] border-l-[1px] border-t-[1px] border-tts-black px-4 py-2 text-xs uppercase text-tts-black sm:hover:cursor-pointer sm:hover:bg-tts-black sm:hover:text-white", "alta" === R && "border-b-[0px]"),
                                            onClick: function() {
                                                H("alta"), ue && (0, y.L)("cocreate_alta_tab.clicked", ue.id)
                                            },
                                            children: ["\u2728Alta AI\u2728", " ", T ? "(...)" : "(" + (0, Q.ad)((null === k || void 0 === k || null === (t = k.pieces) || void 0 === t ? void 0 : t.flat()) || []).filter((function(e) {
                                                var t;
                                                return null === (t = e.category) || void 0 === t ? void 0 : t.toLowerCase().includes(J.toLowerCase())
                                            })).length.toString() + ")"]
                                        }), (0, o.jsxs)("button", {
                                            className: (0, C.Z)("whitespace-nowrap border-b-[1px] border-l-[1px] border-t-[1px] border-tts-black px-4 py-2 text-xs uppercase text-tts-black sm:hover:cursor-pointer sm:hover:bg-tts-black sm:hover:text-white", "owned" === R && "border-b-[0px]"),
                                            onClick: function() {
                                                H("owned"), ue && (0, y.L)("cocreate_owned_tab.clicked", ue.id)
                                            },
                                            children: ["Owned (", p.filter((function(e) {
                                                var t;
                                                return (null !== (d = null === (t = e.category) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== d ? d : "").includes(null !== (f = null === J || void 0 === J ? void 0 : J.toLowerCase()) && void 0 !== f ? f : "N/A")
                                            })).length, ")"]
                                        }), (0, o.jsxs)("button", {
                                            className: (0, C.Z)("whitespace-nowrap border border-tts-black px-4 py-2 text-xs uppercase text-tts-black sm:hover:cursor-pointer sm:hover:bg-tts-black sm:hover:text-white", "wishlist" === R && "border-b-[0px]"),
                                            onClick: function() {
                                                H("wishlist"), ue && (0, y.L)("cocreate_wishlist_tab.clicked", ue.id)
                                            },
                                            children: ["Wishlist (", g.filter((function(e) {
                                                var t;
                                                return (null !== (m = null === (t = e.category) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== m ? m : "").includes(null !== (x = null === J || void 0 === J ? void 0 : J.toLowerCase()) && void 0 !== x ? x : "N/A")
                                            })).length, ")"]
                                        }), (0, o.jsx)("div", {
                                            className: "w-full border-b-[1px] border-t-[1px] border-tts-black"
                                        })]
                                    }), "owned" === R ? I ? (0, o.jsx)("div", {
                                        className: "mt-2 flex w-full justify-center",
                                        children: (0, o.jsx)(Z.Z, {
                                            size: "36px"
                                        })
                                    }) : (0, o.jsx)(V, {
                                        closetItems: (0, z.T)(be(p)),
                                        currentOutfit: _,
                                        setCurrentOutfit: w,
                                        categoryOfItemToAdd: J,
                                        setShowAddItemModal: re,
                                        setIsUserTryingToAddMoreThanSixItems: ae
                                    }) : "wishlist" === R ? O ? (0, o.jsx)("div", {
                                        className: "mt-2 flex w-full justify-center",
                                        children: (0, o.jsx)(Z.Z, {
                                            size: "36px"
                                        })
                                    }) : (0, o.jsx)(V, {
                                        closetItems: be(g),
                                        currentOutfit: _,
                                        setCurrentOutfit: w,
                                        categoryOfItemToAdd: J,
                                        setShowAddItemModal: re,
                                        setIsUserTryingToAddMoreThanSixItems: ae
                                    }) : T ? (0, o.jsxs)("div", {
                                        className: "mt-2 flex w-full justify-center gap-2",
                                        children: [(0, o.jsx)(Z.Z, {
                                            size: "16px"
                                        }), (0, o.jsx)("p", {
                                            className: "text-xs font-light",
                                            children: "generating AI suggestions"
                                        })]
                                    }) : (0, o.jsx)(B, {
                                        selectedCategory: J,
                                        suggestedItems: null === k || void 0 === k ? void 0 : k.pieces,
                                        currentOutfit: _,
                                        setCurrentOutfit: w,
                                        setIsUserTryingToAddMoreThanSixItems: ae
                                    })]
                                }), (0, o.jsx)(F.Z, {
                                    userData: ue,
                                    onAddItem: pe,
                                    open: te,
                                    setOpen: re,
                                    setIsFlagshipConciergeModalOpen: oe
                                }), (0, o.jsx)(U.Z, {
                                    isOpen: ne,
                                    setIsOpen: oe
                                })]
                            })]
                        })
                    })
                },
                J = r(94310),
                $ = function(e) {
                    var t = e.userData,
                        r = e.weather,
                        i = e.isLoadingClosetItems,
                        l = e.isLoadingWishlistItems,
                        a = e.label,
                        u = e.setLabel,
                        d = e.description,
                        f = e.setDescription,
                        m = e.closetItems,
                        x = e.setClosetItems,
                        p = e.wishlistItems,
                        h = e.currentOutfit,
                        b = e.setCurrentOutfit,
                        v = (0, c.useState)(null),
                        g = v[0],
                        w = v[1],
                        j = (0, c.useState)(!1),
                        y = j[0],
                        C = j[1],
                        _ = (0, c.useState)(!1),
                        k = _[0],
                        S = _[1];
                    (0, c.useEffect)((function() {
                        N()
                    }), []);
                    var N = function() {
                        var e = (0, s.Z)((function() {
                            var e;
                            return (0, n.__generator)(this, (function(s) {
                                return C(!0), (0, J.Xj)(null === t || void 0 === t || null === (e = t.workplace_dresscode) || void 0 === e ? void 0 : e.toLowerCase(), h.filter((function(e) {
                                    return null !== e
                                })), r).then((function(e) {
                                    if (!(e && e.length > 0)) throw "Could not fetch recommendations from backend or user is not a member";
                                    w(ee(e.flatMap((function(e) {
                                        return e.outfitSets
                                    })), e[0].outfitSets[0].outfit_name || a, e[0].outfitSets[0].outfit_description || d)), u(e[0].outfitSets[0].outfit_name || a), f(e[0].outfitSets[0].outfit_description || d)
                                })).catch((function(e) {
                                    S(!0), console.error(e)
                                })).finally((function() {
                                    C(!1)
                                })), [2]
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return (0, o.jsx)("section", {
                        className: "flex h-full w-full flex-col items-center gap-4 overflow-y-auto",
                        children: (0, o.jsx)("span", {
                            className: "flex w-full justify-center",
                            children: (0, o.jsx)(K, {
                                closetItems: m,
                                setClosetItems: x,
                                wishlistItems: p,
                                currentOutfit: h,
                                setCurrentOutfit: b,
                                aiRecommendedOutfitSet: g,
                                label: a,
                                isErroring: k,
                                isLoadingClosetItems: i,
                                isLoadingWishlistItems: l,
                                isLoadingAltaSuggestions: y
                            })
                        })
                    })
                },
                ee = function(e, t, r) {
                    var s = e.flatMap((function(e) {
                        return e.pieces
                    })).flatMap((function(e) {
                        return e
                    }));
                    return te(t, r, s)
                },
                te = function(e, t, r) {
                    var s = r.map((function(e) {
                            return (0, m.Z)({
                                category: e.category,
                                img_url: e.img_url,
                                recommended_text: e.recommended_text,
                                score: e.score,
                                source: e.source,
                                name: e.name,
                                brand: e.brand,
                                url: e.url
                            }, "closet" === e.source && {
                                id: e.item_id
                            })
                        })),
                        n = {},
                        o = !0,
                        i = !1,
                        l = void 0;
                    try {
                        for (var a, c = s[Symbol.iterator](); !(o = (a = c.next()).done); o = !0) {
                            var u, d = a.value,
                                f = null !== (u = d.category) && void 0 !== u ? u : "";
                            n[f] && Array.isArray(n[f]) ? (n[f] || []).push(d) : n[f] = [d]
                        }
                    } catch (x) {
                        i = !0, l = x
                    } finally {
                        try {
                            o || null == c.return || c.return()
                        } finally {
                            if (i) throw l
                        }
                    }
                    return {
                        outfit_name: e,
                        outfit_description: t,
                        pieces: Object.values(n)
                    }
                },
                re = r(86805),
                se = r(59081),
                ne = function(e) {
                    var t = e.userData,
                        r = e.isOpen,
                        s = e.setOpen,
                        n = e.onQuit;
                    return (0, o.jsx)(se.Z, {
                        open: r,
                        setOpen: function() {
                            return s(!1)
                        },
                        children: (0, o.jsxs)("div", {
                            className: "mt-4 flex w-full flex-col gap-4",
                            children: [(0, o.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [(0, o.jsx)("h1", {
                                    className: "w-full text-left text-base font-medium",
                                    children: "Are you sure you want to exit?"
                                }), (0, o.jsx)("p", {
                                    className: "w-full text-left text-sm font-light",
                                    children: "Any unsaved progress will be lost. Alta learns your style when you log OOTDs! \u2728"
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "flex w-full grow items-center justify-between gap-4",
                                children: [(0, o.jsx)("button", {
                                    className: "flex w-1/2 items-center justify-center border border-black px-4 py-2 text-xs uppercase",
                                    onClick: function() {
                                        return s(!1)
                                    },
                                    children: "Cancel"
                                }), (0, o.jsx)("button", {
                                    className: "flex w-1/2 items-center justify-center border border-black bg-black px-4 py-2 text-xs uppercase text-white",
                                    onClick: function() {
                                        t && (0, y.L)("co_create_modal.exited_before_completing", t.id), n(), s(!1)
                                    },
                                    children: "Exit"
                                })]
                            })]
                        })
                    })
                },
                oe = function(e) {
                    for (var t = [], r = e.category, s = ie(r), n = 0; n < 6; n++) n === s ? t.push(e) : t.push(null);
                    return t
                },
                ie = function(e) {
                    if (!e) return 0;
                    var t = e.toLowerCase();
                    return t.includes("top") ? 2 : t.includes("bottom") || t.includes("dress") || t.includes("jump") ? 3 : t.includes("shoe") ? 1 : t.includes("accessory") || t.includes("jewelry") ? 0 : t.includes("outerwear") ? 4 : t.includes("bag") ? 5 : 0
                },
                le = function(e) {
                    var t = e.weather,
                        r = e.isOpen,
                        i = e.setIsOpen,
                        m = e.userData,
                        x = e.setNumCoCreatedOutfits,
                        p = e.context,
                        h = e.startStep,
                        b = void 0 === h ? 0 : h,
                        v = e.startOutfit,
                        g = e.startSeedItem,
                        w = e.startLabel,
                        j = e.startDescription,
                        _ = (0, a.useRouter)(),
                        k = (0, c.useState)([]),
                        S = k[0],
                        N = k[1],
                        I = (0, c.useState)([]),
                        O = I[0],
                        L = I[1],
                        Z = (0, c.useState)(null),
                        T = Z[0],
                        A = Z[1],
                        E = (0, c.useState)(0),
                        P = E[0],
                        z = E[1],
                        F = (0, c.useState)(!1),
                        U = F[0],
                        W = F[1],
                        q = (0, c.useState)(!1),
                        Q = q[0],
                        G = q[1],
                        Y = (0, c.useState)(!1),
                        V = Y[0],
                        B = Y[1],
                        H = (0, c.useState)([]),
                        X = H[0],
                        K = H[1],
                        ee = (0, c.useState)(""),
                        te = ee[0],
                        se = ee[1],
                        ie = (0, c.useState)(""),
                        le = ie[0],
                        ae = ie[1],
                        ce = (0, c.useState)(""),
                        ue = ce[0],
                        de = ce[1],
                        fe = (0, c.useState)(!1),
                        me = fe[0],
                        xe = fe[1],
                        pe = (0, c.useState)(!1),
                        he = pe[0],
                        be = pe[1],
                        ve = (0, c.useState)(null),
                        ge = ve[0],
                        we = ve[1],
                        je = (0, c.useState)(p),
                        ye = je[0],
                        Ce = je[1],
                        _e = (0, c.useState)(l()(new Date).format("YYYY-MM-DD")),
                        ke = _e[0],
                        Se = _e[1];
                    (0, c.useEffect)((function() {
                        m && ((0, d.pW)(N, G), (0, d.B2)(L, B))
                    }), []), (0, c.useEffect)((function() {
                        r && m && (0, y.L)("co_create_modal.entered", m.id)
                    }), [r]), (0, c.useEffect)((function() {
                        !T || v && 0 !== v.length || K(oe(T))
                    }), [T, v]), (0, c.useEffect)((function() {
                        b > 0 && z(b), g && A(g), v && v.length > 0 && K(v), w && se(w), j && ae(j)
                    }), [r]);
                    var Ne = function(e) {
                            switch (e) {
                                case 0:
                                    return z((function(e) {
                                        return e + 1
                                    }));
                                case 1:
                                    return xe(!0);
                                case 2:
                                    return Oe();
                                default:
                                    return console.error("Invalid step")
                            }
                        },
                        Ie = function() {
                            (A(null), K([]), z(0), i(!1), se(""), ae(""), we(null), 2 === P) && ("/collection" === _.pathname ? window.location.reload() : _.push("/collection"))
                        },
                        Oe = function() {
                            var e = (0, s.Z)((function() {
                                var e;
                                return (0, n.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, 3, 4]), [4, (0, J.ox)(ue, te, le, ge, ye, ke)];
                                        case 1:
                                            return t.sent(), x((function(e) {
                                                return e + 1
                                            })), [3, 4];
                                        case 2:
                                            return e = t.sent(), console.error(e), [3, 4];
                                        case 3:
                                            return Ie(), [7];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Le = function() {
                            var e = (0, s.Z)((function() {
                                var e, t, r;
                                return (0, n.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            m && (0, y.L)("co_create_modal.saved_outfit", m.id), be(!0), s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, 4, 5]), e = X.filter((function(e) {
                                                return null !== e
                                            })), [4, (0, J.Dp)(null === m || void 0 === m ? void 0 : m.id, p, e, te, le, T)];
                                        case 2:
                                            return (t = s.sent()) && (de(t.id), (0, f.kM)(t.id)), [3, 5];
                                        case 3:
                                            return r = s.sent(), console.error(r), [3, 5];
                                        case 4:
                                            return be(!1), xe(!1), z((function(e) {
                                                return e + 1
                                            })), [7];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, o.jsxs)(re.Z, {
                        open: r,
                        setOpen: i,
                        children: [(0, o.jsxs)(u.ZP, {
                            className: "mx-auto flex w-full max-w-7xl flex-col sm:px-6 lg:px-8",
                            children: [(0, o.jsxs)("aside", {
                                className: "relative flex w-full items-center justify-between p-6",
                                children: [(0, o.jsx)(M.PZ, {
                                    onClick: function() {
                                        2 !== P ? W(!0) : z((function(e) {
                                            return e - 1
                                        }))
                                    }
                                }), (0, o.jsx)(M.Dx, {
                                    step: P
                                }), (0, o.jsxs)("div", {
                                    className: "flex items-center gap-4",
                                    children: [0 === P && null !== T && (0, o.jsx)("button", {
                                        className: (0, C.Z)("z-10 w-min whitespace-nowrap border border-tts-black bg-tts-black px-4 py-2 text-center text-sm font-semibold uppercase text-white hover:cursor-pointer sm:hover:opacity-90"),
                                        disabled: null === T,
                                        onClick: function() {
                                            return Ne(P)
                                        },
                                        children: (0, M.Q)(P)
                                    }), P >= 1 && (0, o.jsx)("button", {
                                        className: (0, C.Z)("z-10 w-min whitespace-nowrap border border-tts-black bg-tts-black px-2 py-1 text-center text-sm font-semibold uppercase text-white hover:cursor-pointer sm:hover:opacity-90"),
                                        onClick: function() {
                                            return Ne(P)
                                        },
                                        children: (0, M.Q)(P)
                                    })]
                                })]
                            }), (0, o.jsx)("section", {
                                className: "relative flex w-full grow flex-col bg-white px-6",
                                children: function(e) {
                                    switch (e) {
                                        case 0:
                                            return null;
                                        case 1:
                                            return (0, o.jsx)($, {
                                                userData: m,
                                                weather: t,
                                                isLoadingClosetItems: Q,
                                                isLoadingWishlistItems: V,
                                                closetItems: S,
                                                setClosetItems: N,
                                                wishlistItems: O,
                                                label: te,
                                                setLabel: se,
                                                description: le,
                                                setDescription: ae,
                                                currentOutfit: X,
                                                setCurrentOutfit: K
                                            });
                                        case 2:
                                            return (0, o.jsx)(R, {
                                                userData: m,
                                                currentOutfit: X,
                                                label: te,
                                                setLabel: se,
                                                date: ke,
                                                setDate: Se,
                                                creationContext: ye,
                                                setCreationContext: Ce
                                            });
                                        default:
                                            return (0, o.jsx)("p", {
                                                children: "Invalid"
                                            })
                                    }
                                }(P)
                            })]
                        }), m && (0, o.jsx)(D, {
                            userData: m,
                            currentOutfit: X.filter((function(e) {
                                return null !== e && "mock" !== e.from
                            })),
                            isOpen: me,
                            setIsOpen: xe,
                            handleConfirm: Le,
                            isLoading: he,
                            outfitLabel: te,
                            currentContext: p
                        }), (0, o.jsx)(ne, {
                            userData: m,
                            isOpen: U,
                            setOpen: W,
                            onQuit: Ie
                        })]
                    })
                }
        }
    }
]);