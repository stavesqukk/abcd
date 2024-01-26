(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5186], {
        26377: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/collection", function() {
                return r(45674)
            }])
        },
        83420: function(e, t, r) {
            "use strict";
            r.d(t, {
                Go: function() {
                    return i
                },
                ki: function() {
                    return l
                },
                n5: function() {
                    return o
                }
            });
            var n = r(47568),
                s = r(70655),
                a = r(6154),
                o = function() {
                    var e = (0, n.Z)((function(e, t) {
                        var r, n, a;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    t(!0), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 4, 5, 6]), [4, fetch("/api/closetUtilization?type=mostWorn", {
                                        method: "GET"
                                    })];
                                case 2:
                                    if (!(r = s.sent()).ok) throw "Could not get most worn items";
                                    return [4, r.json()];
                                case 3:
                                    return n = s.sent(), e(n), [3, 6];
                                case 4:
                                    return a = s.sent(), console.error(a), [3, 6];
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
                i = function() {
                    var e = (0, n.Z)((function(e, t, r, n) {
                        var o, i, l, c, u;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, 3, 4]), [4, a.Z.patch("/api/invitationLink", {
                                        alias: e
                                    })];
                                case 1:
                                    if (o = s.sent(), i = o.status, l = o.data, 200 !== i) throw "Could not customize link";
                                    return c = l.link, t(c.alias), n("Success!"), [3, 4];
                                case 2:
                                    return u = s.sent(), console.error(u), n("This alias is invalid, please try another one."), [3, 4];
                                case 3:
                                    return r(!1), [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n, s) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var e = (0, n.Z)((function(e) {
                        var t, r, n, o, i;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, , 3]), [4, a.Z.get("/api/invitationLink")];
                                case 1:
                                    if (t = s.sent(), r = t.status, n = t.data, 200 !== r) throw "Could not get link from supabase";
                                    return o = n.link, e(o.alias), [3, 3];
                                case 2:
                                    return i = s.sent(), console.error(i), [2, null];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        45674: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSP: function() {
                    return _e
                },
                default: function() {
                    return ze
                }
            });
            var n = r(85893),
                s = r(67294),
                a = r(29988),
                o = r(47568),
                i = r(29815),
                l = r(70655),
                c = r(80008),
                u = r.n(c),
                d = r(41664),
                f = r.n(d),
                m = r(11163),
                h = r.n(m),
                p = r(47516),
                x = r(99304),
                g = r(2261),
                v = r(44976),
                b = r(26042),
                y = r(69396),
                w = r(34386),
                j = r(6154),
                O = r(83991),
                C = r(38578),
                N = r(43990),
                k = r(25087),
                S = r(47929),
                Z = r(58742),
                D = r(8002),
                M = r(68239),
                _ = r(27037),
                z = r(51667),
                Y = function(e) {
                    var t = e.selectedTab,
                        r = e.searchQuery,
                        a = e.setSearchQuery,
                        o = e.onEnterClick,
                        i = e.setClosetSemanticSearchResults,
                        l = e.isLoading,
                        c = (0, s.useRef)(null);
                    return (0, n.jsx)("span", {
                        className: "flex",
                        children: (0, n.jsxs)("span", {
                            className: (0, z.Z)("flex w-full items-center border border-tts-black bg-tts-white bg-tts-white px-3 py-1 sm:hover:bg-gray-200", c && c.current === document.activeElement && "sm:hover:bg-tts-white"),
                            children: [(0, n.jsx)("div", {
                                className: "shrink-0",
                                children: l ? (0, n.jsx)(M.Z, {
                                    size: "16px"
                                }) : (0, n.jsx)(p.lOx, {
                                    size: "1rem"
                                })
                            }), (0, n.jsx)("input", {
                                ref: c,
                                type: "text",
                                className: "w-full border border-transparent bg-inherit text-xs focus:border-transparent focus:outline-none focus:ring-0",
                                placeholder: "owned" === t ? "My white sweater" : "Search for anything to add to wishlist",
                                value: r,
                                onChange: function(e) {
                                    return a(e.target.value)
                                },
                                onKeyDown: function(e) {
                                    "Enter" === e.key && o()
                                }
                            }), r && (0, n.jsx)(w.Z, {
                                title: "CLEAR",
                                children: (0, n.jsx)("button", {
                                    className: "shrink-0",
                                    onClick: function() {
                                        a(""), i && i([])
                                    },
                                    children: (0, n.jsx)(p.czh, {
                                        size: "1.25rem",
                                        fill: "gray"
                                    })
                                })
                            })]
                        })
                    })
                },
                I = function(e) {
                    var t = e.userData,
                        r = e.localClosetImages,
                        a = e.setLocalClosetImages,
                        c = e.isClosetLoading,
                        u = e.setIsLoadingCloset,
                        d = (0, s.useState)(!1),
                        f = d[0],
                        m = d[1],
                        p = (0, s.useState)(!1),
                        x = p[0],
                        g = p[1],
                        v = (0, s.useState)(""),
                        w = v[0],
                        M = v[1],
                        z = (0, s.useState)([]),
                        I = z[0],
                        T = z[1],
                        E = (0, s.useState)(!1),
                        F = E[0],
                        L = E[1],
                        R = (0, D.w)().showSnackbar,
                        P = (0, Z.Uw)((null === t || void 0 === t ? void 0 : t.created_at) || "");
                    (0, s.useEffect)((function() {
                        var e = h().query.traffic;
                        e && "add" === e && m(!0)
                    }), []), (0, s.useEffect)((function() {
                        "" === w && I.length > 0 && T([])
                    }), [w]);
                    var A, $ = function() {
                            var e = (0, o.Z)((function(e, n) {
                                var s, o, i, c, d, f;
                                return (0, l.__generator)(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return s = n.hash, o = n.productName, i = n.category, c = n.productBrand, d = n.uploadMethod, t ? [4, j.Z.post("/api/uploadClosetDirect", {
                                                id: t.id,
                                                images: [e],
                                                names: [o],
                                                categories: [i],
                                                brands: [c],
                                                uploadMethod: d,
                                                hashes: [s]
                                            })] : [2];
                                        case 1:
                                            return 200 === (f = l.sent()).status && (0, _.L)("closet.added_item_to_closet", t.id, {
                                                closet_item: o,
                                                closet_url: e,
                                                upload_method: d
                                            }), c && j.Z.post("/api/favoriteBrand", {
                                                product_brand: c
                                            }), (0, N.pW)(a, u), P && r.length < 30 && Math.random() < .3 && R("Alta will remove the image background overnight, and color-code your closet! \ud83c\udf08"), [2, 200 === f.status]
                                    }
                                }))
                            }));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        B = function() {
                            var e = (0, o.Z)((function() {
                                var e, t, n, s, a, o, c;
                                return (0, l.__generator)(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return l.trys.push([0, 5, , 6]), [4, fetch("/api/semanticSearch?" + new URLSearchParams({
                                                query: w
                                            }), {
                                                method: "GET"
                                            })];
                                        case 1:
                                            return (e = l.sent()).ok ? [4, e.json()] : [3, 3];
                                        case 2:
                                            return t = l.sent(), n = t.slice(0, 5).map((function(e) {
                                                return String(e.id)
                                            })), s = r.filter((function(e) {
                                                var t;
                                                return null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase().includes(w.toLowerCase())
                                            })), a = [], s.length > 0 && (a = s.map((function(e) {
                                                return e.id.toString()
                                            }))), o = n.concat(a), [2, (0, i.Z)(new Set(o))];
                                        case 3:
                                            return console.error("Error fetching semantic search results:", e.status), [2, []];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return c = l.sent(), console.error("Error in getSemanticSearchResults:", c), [2, []];
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(k.Z, {
                            userData: t,
                            onAddItem: $,
                            open: f,
                            setOpen: m,
                            setIsFlagshipConciergeModalOpen: g
                        }), (0, n.jsx)(S.Z, {
                            isOpen: x,
                            setIsOpen: g
                        }), (0, n.jsx)("div", {
                            className: "flex w-full flex-col gap-4",
                            children: c ? (0, n.jsx)(C.Z, {}) : (0, n.jsxs)(n.Fragment, {
                                children: [Array.isArray(r) && r.length >= 100 && (0, n.jsx)(Y, {
                                    selectedTab: "owned",
                                    searchQuery: w,
                                    setSearchQuery: M,
                                    onEnterClick: function() {
                                        t && (0, _.L)("closet.owned_item_semantic_search.searched", t.id, {
                                            query: w
                                        }), L(!0), B().then((function(e) {
                                            T(e), L(!1)
                                        })).catch((function() {
                                            L(!1)
                                        }))
                                    },
                                    setClosetSemanticSearchResults: T,
                                    isLoading: F
                                }), (0, n.jsx)(O.Z, {
                                    userData: t,
                                    selectedTab: "owned",
                                    items: (A = r, I.length > 0 ? A.filter((function(e) {
                                        return I.includes(String(e.id))
                                    })) : A),
                                    onRemoveItem: function(e) {
                                        a(r.filter((function(t) {
                                            return String(t.id) !== e
                                        })))
                                    },
                                    onUpdateItem: function(e) {
                                        var t = r.findIndex((function(t) {
                                            return t.id === e.id
                                        }));
                                        a((function(r) {
                                            return r.map((function(r, n) {
                                                return n === t ? e : r
                                            }))
                                        }))
                                    },
                                    onAddItem: function(e) {
                                        var t = (0, y.Z)((0, b.Z)({}, e), {
                                            from: "closet"
                                        });
                                        a((function(e) {
                                            return [t].concat((0, i.Z)(e))
                                        }))
                                    },
                                    setAddItemModalOpen: m
                                })]
                            })
                        })]
                    })
                },
                T = r(35564),
                E = r(23601),
                F = r(828),
                L = r(30381),
                R = r.n(L),
                P = r(50997),
                A = r(63430),
                $ = r(950),
                B = r(17589),
                W = r(92046),
                q = r(59081);

            function V(e) {
                var t = e.outfit,
                    r = e.userData,
                    a = e.onDelete,
                    o = e.setIsCustomizeOutfitModalOpen,
                    i = e.setOutfitToCustomize,
                    l = t.pieces,
                    c = t.event,
                    u = t.context,
                    d = t.id,
                    f = l.some((function(e) {
                        return "closet" === e.from
                    })),
                    m = (0, s.useState)(l[0]),
                    h = m[0],
                    x = m[1],
                    g = (0, s.useState)(!1),
                    v = g[0],
                    b = g[1],
                    y = (0, s.useState)(!1),
                    w = y[0],
                    j = y[1],
                    O = l.filter((function(e) {
                        return "mock" !== e.from
                    })),
                    C = H(u, r, c, d);
                return (0, n.jsxs)("div", {
                    className: "flex w-full flex-col gap-1 md:min-w-[500px] md:max-w-[500px]",
                    children: [(0, n.jsxs)("div", {
                        className: "sm:border-gray flex w-full flex-col gap-2 pb-8 sm:gap-4 sm:border sm:p-4 sm:pb-4",
                        children: [(0, n.jsx)("div", {
                            className: "flex justify-center pb-1 pt-4 md:flex-row",
                            children: t.context || 6 === O.length ? (0, n.jsx)(B.o, {
                                outfitItems: O,
                                isEditView: !1,
                                userData: r,
                                setProductToOpenModalFor: x,
                                setIsProductDetailsModalOpen: b,
                                queryString: c,
                                isFromCloset: f,
                                context: "saved_outfits"
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [5 === l.length && (0, n.jsx)(A.E, {
                                    outfitItems: O,
                                    isEditView: !1,
                                    userData: r,
                                    setProductToOpenModalFor: x,
                                    setIsProductDetailsModalOpen: b,
                                    queryString: c,
                                    isFromCloset: f,
                                    context: "saved_outfits"
                                }), 4 === l.length && (0, n.jsx)($.M, {
                                    outfitItems: O,
                                    isEditView: !1,
                                    userData: r,
                                    setProductToOpenModalFor: x,
                                    setIsProductDetailsModalOpen: b,
                                    queryString: c,
                                    isFromCloset: f,
                                    context: "saved_outfits"
                                })]
                            })
                        }), h && (0, n.jsx)(W.Z, {
                            context: "saved_outfits",
                            product: h,
                            userData: r,
                            isModalOpen: v,
                            setIsModalOpen: b,
                            event: c
                        }), (0, n.jsx)(U, {
                            isOpen: w,
                            setOpen: j,
                            outfit: t,
                            handleDeleteFavoritedOutfit: a
                        })]
                    }), (0, n.jsxs)("span", {
                        className: "flex items-center gap-2",
                        children: [(0, n.jsx)("button", {
                            className: "flex aspect-square h-8 items-center justify-center hover:cursor-pointer sm:hover:bg-gray-200",
                            onClick: function() {
                                r && (0, _.L)("saved_outfit.customize_clicked", r.id, {
                                    daily_outfit_id: t.id,
                                    outfit_event: t.event
                                }), o(!0), i(t)
                            },
                            children: (0, n.jsx)(p.Hlf, {
                                size: "1.5rem"
                            })
                        }), (0, n.jsx)("button", {
                            className: "flex aspect-square h-8 items-center justify-center hover:cursor-pointer sm:hover:bg-gray-200",
                            onClick: function() {
                                r && (0, _.L)("saved_outfit.delete_clicked", r.id, {
                                    daily_outfit_id: t.id,
                                    outfit_event: t.event
                                }), j(!0)
                            },
                            children: (0, n.jsx)(p.SW4, {
                                size: "1.5rem"
                            })
                        })]
                    }), (0, n.jsx)("p", {
                        className: "truncate pl-1 text-sm",
                        children: t.event
                    }), C && (0, n.jsx)("p", {
                        className: "pl-1 text-sm text-gray-500",
                        children: C
                    })]
                })
            }
            var U = function(e) {
                    var t = e.isOpen,
                        r = e.setOpen,
                        s = e.outfit,
                        a = e.handleDeleteFavoritedOutfit;
                    return (0, n.jsx)(q.Z, {
                        open: t,
                        setOpen: function() {
                            return r(!1)
                        },
                        children: (0, n.jsxs)("div", {
                            className: "mt-4 flex w-full flex-col gap-4",
                            children: [(0, n.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [(0, n.jsx)("div", {
                                    className: "w-full text-left text-base font-medium",
                                    children: "Are you sure you want to remove this outfit?"
                                }), (0, n.jsx)("div", {
                                    className: "w-full text-left text-sm font-light",
                                    children: "This action cannot be undone"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex w-full grow items-center justify-between gap-4",
                                children: [(0, n.jsx)("button", {
                                    className: "flex w-1/2 items-center justify-center border border-black px-4 py-2 text-xs uppercase",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    children: "Cancel"
                                }), (0, n.jsx)("button", {
                                    className: "flex w-1/2 items-center justify-center border border-black bg-black px-4 py-2 text-xs uppercase text-white",
                                    onClick: (0, o.Z)((function() {
                                        return (0, l.__generator)(this, (function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, a(s)];
                                                case 1:
                                                    return e.sent(), r(!1), [2]
                                            }
                                        }))
                                    })),
                                    children: "Remove"
                                })]
                            })]
                        })
                    })
                },
                H = function(e, t, r, n) {
                    return e || "string" === typeof n ? "Created by ".concat(null === t || void 0 === t ? void 0 : t.first_name) : r.toLowerCase().includes("complete the look") ? "Complete the look" : "Event styling"
                },
                Q = function(e) {
                    var t = e.dateAndOutfits,
                        r = e.removeOutfitFromFavoritedOutfitsAndPotentiallyDate,
                        a = e.userData,
                        o = e.setIsCustomizeOutfitModalOpen,
                        i = e.setOutfitToCustomize,
                        l = e.selectedView,
                        c = (0, F.Z)(t, 2),
                        u = c[0],
                        d = c[1],
                        f = (0, s.useState)(!1),
                        m = (f[0], f[1]),
                        h = (0, E.Z)().width,
                        p = function(e) {
                            (0, P.$K)(e, m, u, r)
                        };
                    return (0, n.jsxs)("div", {
                        className: "mt-3 flex w-full flex-col",
                        children: ["day" === l && (0, n.jsx)("div", {
                            className: "mb-4 w-full text-xs uppercase underline",
                            children: "No date" === u ? u : R()(u).format("MMMM D")
                        }), (0, n.jsx)("div", {
                            className: "flex w-full gap-4 sm:overflow-auto",
                            children: h < 640 ? (0, n.jsx)(g.tq, {
                                pagination: h < 640 && (!(d.length > 6) || {
                                    dynamicBullets: !0
                                }),
                                modules: [x.tl],
                                spaceBetween: 10,
                                style: {
                                    "--swiper-pagination-bottom": "52px",
                                    "--swiper-pagination-color": "black",
                                    "--swiper-pagination-bullet-inactive-color": "#999999",
                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                    "--swiper-pagination-bullet-size": "10px",
                                    "--swiper-pagination-bullet-horizontal-gap": "3px"
                                },
                                children: d.map((function(e, t) {
                                    return (0, n.jsx)(g.o5, {
                                        style: {
                                            position: "relative"
                                        },
                                        children: (0, n.jsx)(V, {
                                            outfit: e,
                                            userData: a,
                                            onDelete: p,
                                            setIsCustomizeOutfitModalOpen: o,
                                            setOutfitToCustomize: i
                                        }, t)
                                    }, t)
                                }))
                            }) : d.map((function(e, t) {
                                return (0, n.jsx)(V, {
                                    outfit: e,
                                    userData: a,
                                    onDelete: p,
                                    setIsCustomizeOutfitModalOpen: o,
                                    setOutfitToCustomize: i
                                }, t)
                            }))
                        })]
                    })
                },
                G = function(e) {
                    var t = [];
                    return e.forEach((function(e) {
                        return e.date ? t.push(R()(e.date).format("YYYY-MM-DD")) : t.push("No date")
                    })), (0, i.Z)(new Set(t))
                },
                K = function(e) {
                    var t = e.favoritedOutfits,
                        r = e.setFavoritedOutfits,
                        a = e.setCoCreatedOutfits,
                        o = e.userData,
                        i = e.setIsCustomizeOutfitModalOpen,
                        l = e.setOutfitToCustomize,
                        c = e.selectedView,
                        u = (0, s.useState)({}),
                        d = u[0],
                        f = u[1];
                    (0, s.useEffect)((function() {
                        var e = {};
                        G(t).sort((function(e, t) {
                            return "No date" === e ? -1 : "No date" === t ? 1 : R()(e).diff(R()(t))
                        })).reverse().forEach((function(t) {
                            return e[t] = []
                        })), t.forEach((function(t) {
                            var r = t.date ? R()(t.date).format("YYYY-MM-DD") : "No date";
                            e[r].push(t)
                        })), f(e)
                    }), [t]);
                    var m = function(e, t) {
                            var n = d[t].filter((function(t) {
                                return t.id.toString() !== e.toString()
                            }));
                            if (r((function(t) {
                                    return t.filter((function(t) {
                                        return t.id.toString() !== e.toString()
                                    }))
                                })), a((function(t) {
                                    return t.filter((function(t) {
                                        return t.id.toString() !== e.toString()
                                    }))
                                })), n.length) {
                                var s = (0, b.Z)({}, d);
                                s[t] = n, f(s)
                            } else {
                                var o = (0, b.Z)({}, d);
                                delete o[t], f(o)
                            }
                        },
                        h = Object.entries(d);
                    return (0, n.jsx)("div", {
                        className: (0, z.Z)("mb-8 flex w-full flex-col gap-8", "day" === c && "max-h-[70vh] overflow-y-auto md:max-h-[50vh]"),
                        children: h.map((function(e, t) {
                            return (0, n.jsx)(Q, {
                                dateAndOutfits: e,
                                removeOutfitFromFavoritedOutfitsAndPotentiallyDate: m,
                                userData: o,
                                setIsCustomizeOutfitModalOpen: i,
                                setOutfitToCustomize: l,
                                selectedView: c
                            }, t)
                        }))
                    })
                },
                X = r(85071),
                J = r(8756),
                ee = function(e) {
                    var t = e.isOpen,
                        r = e.onClose,
                        s = e.selectedCategories,
                        a = e.onChangeCategoryFilters;
                    return (0, n.jsx)(J.Z, {
                        open: t,
                        setOpen: r,
                        children: (0, n.jsxs)("section", {
                            className: "flex w-full flex-col justify-center gap-4",
                            children: [(0, n.jsx)("h1", {
                                className: "w-full border-b-[1px] pb-3 text-sm font-semibold",
                                children: "Filters"
                            }), (0, n.jsxs)("span", {
                                className: "flex w-full flex-col gap-2",
                                children: [(0, n.jsxs)("span", {
                                    className: "flex w-full items-center gap-2",
                                    children: [(0, n.jsx)(p.Qns, {
                                        size: "1.25rem"
                                    }), (0, n.jsx)("p", {
                                        className: "text-sm font-semibold",
                                        children: "Category"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex w-full flex-col",
                                    children: [(0, n.jsxs)("button", {
                                        className: "flex items-center gap-4 text-sm font-light",
                                        children: [(0, n.jsx)(X.Z, {
                                            checked: s.includes("daily looks"),
                                            size: "small",
                                            color: "default",
                                            onChange: function() {
                                                return a("daily looks")
                                            }
                                        }), (0, n.jsx)("label", {
                                            children: "Worn"
                                        })]
                                    }), (0, n.jsxs)("button", {
                                        className: "flex items-center gap-4 text-sm font-light",
                                        children: [(0, n.jsx)(X.Z, {
                                            checked: s.includes("exploration"),
                                            size: "small",
                                            color: "default",
                                            onChange: function() {
                                                return a("exploration")
                                            }
                                        }), (0, n.jsx)("label", {
                                            children: "Exploration"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                te = r(1048),
                re = r(32793),
                ne = r(86010);
            var se = e => {
                    const t = s.useRef({});
                    return s.useEffect((() => {
                        t.current = e
                    })), t.current
                },
                ae = r(94780);
            var oe = r(24349),
                ie = r(11496),
                le = r(33616),
                ce = r(98216),
                ue = r(1588),
                de = r(34867);

            function fe(e) {
                return (0, de.Z)("MuiBadge", e)
            }
            var me = (0, ue.Z)("MuiBadge", ["root", "badge", "dot", "standard", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft", "invisible", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "overlapRectangular", "overlapCircular", "anchorOriginTopLeftCircular", "anchorOriginTopLeftRectangular", "anchorOriginTopRightCircular", "anchorOriginTopRightRectangular", "anchorOriginBottomLeftCircular", "anchorOriginBottomLeftRectangular", "anchorOriginBottomRightCircular", "anchorOriginBottomRightRectangular"]);
            const he = ["anchorOrigin", "className", "classes", "component", "components", "componentsProps", "children", "overlap", "color", "invisible", "max", "badgeContent", "slots", "slotProps", "showZero", "variant"],
                pe = (0, ie.ZP)("span", {
                    name: "MuiBadge",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({
                    position: "relative",
                    display: "inline-flex",
                    verticalAlign: "middle",
                    flexShrink: 0
                }),
                xe = (0, ie.ZP)("span", {
                    name: "MuiBadge",
                    slot: "Badge",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.badge, t[r.variant], t[`anchorOrigin${(0,ce.Z)(r.anchorOrigin.vertical)}${(0,ce.Z)(r.anchorOrigin.horizontal)}${(0,ce.Z)(r.overlap)}`], "default" !== r.color && t[`color${(0,ce.Z)(r.color)}`], r.invisible && t.invisible]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, re.Z)({
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    boxSizing: "border-box",
                    fontFamily: e.typography.fontFamily,
                    fontWeight: e.typography.fontWeightMedium,
                    fontSize: e.typography.pxToRem(12),
                    minWidth: 20,
                    lineHeight: 1,
                    padding: "0 6px",
                    height: 20,
                    borderRadius: 10,
                    zIndex: 1,
                    transition: e.transitions.create("transform", {
                        easing: e.transitions.easing.easeInOut,
                        duration: e.transitions.duration.enteringScreen
                    })
                }, "default" !== t.color && {
                    backgroundColor: (e.vars || e).palette[t.color].main,
                    color: (e.vars || e).palette[t.color].contrastText
                }, "dot" === t.variant && {
                    borderRadius: 4,
                    height: 8,
                    minWidth: 8,
                    padding: 0
                }, "top" === t.anchorOrigin.vertical && "right" === t.anchorOrigin.horizontal && "rectangular" === t.overlap && {
                    top: 0,
                    right: 0,
                    transform: "scale(1) translate(50%, -50%)",
                    transformOrigin: "100% 0%",
                    [`&.${me.invisible}`]: {
                        transform: "scale(0) translate(50%, -50%)"
                    }
                }, "bottom" === t.anchorOrigin.vertical && "right" === t.anchorOrigin.horizontal && "rectangular" === t.overlap && {
                    bottom: 0,
                    right: 0,
                    transform: "scale(1) translate(50%, 50%)",
                    transformOrigin: "100% 100%",
                    [`&.${me.invisible}`]: {
                        transform: "scale(0) translate(50%, 50%)"
                    }
                }, "top" === t.anchorOrigin.vertical && "left" === t.anchorOrigin.horizontal && "rectangular" === t.overlap && {
                    top: 0,
                    left: 0,
                    transform: "scale(1) translate(-50%, -50%)",
                    transformOrigin: "0% 0%",
                    [`&.${me.invisible}`]: {
                        transform: "scale(0) translate(-50%, -50%)"
                    }
                }, "bottom" === t.anchorOrigin.vertical && "left" === t.anchorOrigin.horizontal && "rectangular" === t.overlap && {
                    bottom: 0,
                    left: 0,
                    transform: "scale(1) translate(-50%, 50%)",
                    transformOrigin: "0% 100%",
                    [`&.${me.invisible}`]: {
                        transform: "scale(0) translate(-50%, 50%)"
                    }
                }, "top" === t.anchorOrigin.vertical && "right" === t.anchorOrigin.horizontal && "circular" === t.overlap && {
                    top: "14%",
                    right: "14%",
                    transform: "scale(1) translate(50%, -50%)",
                    transformOrigin: "100% 0%",
                    [`&.${me.invisible}`]: {
                        transform: "scale(0) translate(50%, -50%)"
                    }
                }, "bottom" === t.anchorOrigin.vertical && "right" === t.anchorOrigin.horizontal && "circular" === t.overlap && {
                    bottom: "14%",
                    right: "14%",
                    transform: "scale(1) translate(50%, 50%)",
                    transformOrigin: "100% 100%",
                    [`&.${me.invisible}`]: {
                        transform: "scale(0) translate(50%, 50%)"
                    }
                }, "top" === t.anchorOrigin.vertical && "left" === t.anchorOrigin.horizontal && "circular" === t.overlap && {
                    top: "14%",
                    left: "14%",
                    transform: "scale(1) translate(-50%, -50%)",
                    transformOrigin: "0% 0%",
                    [`&.${me.invisible}`]: {
                        transform: "scale(0) translate(-50%, -50%)"
                    }
                }, "bottom" === t.anchorOrigin.vertical && "left" === t.anchorOrigin.horizontal && "circular" === t.overlap && {
                    bottom: "14%",
                    left: "14%",
                    transform: "scale(1) translate(-50%, 50%)",
                    transformOrigin: "0% 100%",
                    [`&.${me.invisible}`]: {
                        transform: "scale(0) translate(-50%, 50%)"
                    }
                }, t.invisible && {
                    transition: e.transitions.create("transform", {
                        easing: e.transitions.easing.easeInOut,
                        duration: e.transitions.duration.leavingScreen
                    })
                })));
            var ge = s.forwardRef((function(e, t) {
                    var r, s, a, o, i, l;
                    const c = (0, le.Z)({
                            props: e,
                            name: "MuiBadge"
                        }),
                        {
                            anchorOrigin: u = {
                                vertical: "top",
                                horizontal: "right"
                            },
                            className: d,
                            component: f,
                            components: m = {},
                            componentsProps: h = {},
                            children: p,
                            overlap: x = "rectangular",
                            color: g = "default",
                            invisible: v = !1,
                            max: b = 99,
                            badgeContent: y,
                            slots: w,
                            slotProps: j,
                            showZero: O = !1,
                            variant: C = "standard"
                        } = c,
                        N = (0, te.Z)(c, he),
                        {
                            badgeContent: k,
                            invisible: S,
                            max: Z,
                            displayValue: D
                        } = function(e) {
                            const {
                                badgeContent: t,
                                invisible: r = !1,
                                max: n = 99,
                                showZero: s = !1
                            } = e, a = se({
                                badgeContent: t,
                                max: n
                            });
                            let o = r;
                            !1 !== r || 0 !== t || s || (o = !0);
                            const {
                                badgeContent: i,
                                max: l = n
                            } = o ? a : e;
                            return {
                                badgeContent: i,
                                invisible: o,
                                max: l,
                                displayValue: i && Number(i) > l ? `${l}+` : i
                            }
                        }({
                            max: b,
                            invisible: v,
                            badgeContent: y,
                            showZero: O
                        }),
                        M = se({
                            anchorOrigin: u,
                            color: g,
                            overlap: x,
                            variant: C,
                            badgeContent: y
                        }),
                        _ = S || null == k && "dot" !== C,
                        {
                            color: z = g,
                            overlap: Y = x,
                            anchorOrigin: I = u,
                            variant: T = C
                        } = _ ? M : c,
                        E = "dot" !== T ? D : void 0,
                        F = (0, re.Z)({}, c, {
                            badgeContent: k,
                            invisible: _,
                            max: Z,
                            displayValue: E,
                            showZero: O,
                            anchorOrigin: I,
                            color: z,
                            overlap: Y,
                            variant: T
                        }),
                        L = (e => {
                            const {
                                color: t,
                                anchorOrigin: r,
                                invisible: n,
                                overlap: s,
                                variant: a,
                                classes: o = {}
                            } = e, i = {
                                root: ["root"],
                                badge: ["badge", a, n && "invisible", `anchorOrigin${(0,ce.Z)(r.vertical)}${(0,ce.Z)(r.horizontal)}`, `anchorOrigin${(0,ce.Z)(r.vertical)}${(0,ce.Z)(r.horizontal)}${(0,ce.Z)(s)}`, `overlap${(0,ce.Z)(s)}`, "default" !== t && `color${(0,ce.Z)(t)}`]
                            };
                            return (0, ae.Z)(i, fe, o)
                        })(F),
                        R = null != (r = null != (s = null == w ? void 0 : w.root) ? s : m.Root) ? r : pe,
                        P = null != (a = null != (o = null == w ? void 0 : w.badge) ? o : m.Badge) ? a : xe,
                        A = null != (i = null == j ? void 0 : j.root) ? i : h.root,
                        $ = null != (l = null == j ? void 0 : j.badge) ? l : h.badge,
                        B = (0, oe.Z)({
                            elementType: R,
                            externalSlotProps: A,
                            externalForwardedProps: N,
                            additionalProps: {
                                ref: t,
                                as: f
                            },
                            ownerState: F,
                            className: (0, ne.Z)(null == A ? void 0 : A.className, L.root, d)
                        }),
                        W = (0, oe.Z)({
                            elementType: P,
                            externalSlotProps: $,
                            ownerState: F,
                            className: (0, ne.Z)(L.badge, null == $ ? void 0 : $.className)
                        });
                    return (0, n.jsxs)(R, (0, re.Z)({}, B, {
                        children: [p, (0, n.jsx)(P, (0, re.Z)({}, W, {
                            children: E
                        }))]
                    }))
                })),
                ve = r(53075),
                be = r(8807),
                ye = function(e) {
                    var t = e.todaysDate,
                        r = e.selectedDate,
                        a = e.setSelectedDate,
                        o = e.datesWithOutfits,
                        i = (0, s.useState)(R()(r).startOf("week")),
                        l = i[0],
                        c = i[1];
                    (0, s.useEffect)((function() {
                        c(R()(r).startOf("week"))
                    }), [r]);
                    var u = t.format("YYYY-MM-DD");
                    return (0, n.jsxs)("div", {
                        className: "mt-1 flex w-full flex-col gap-2",
                        children: [(0, n.jsx)(we, (0, y.Z)((0, b.Z)({}, e), {
                            onNavigate: function(e) {
                                var t = R()(e);
                                a(t)
                            }
                        })), (0, n.jsx)("span", {
                            className: "grid grid-cols-7 gap-1",
                            children: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((function(e) {
                                return (0, n.jsx)("label", {
                                    className: "py-2 text-center text-xs text-gray-500",
                                    children: e.charAt(0)
                                }, e)
                            }))
                        }), (0, n.jsx)("span", {
                            className: "grid grid-cols-7 gap-1",
                            children: Array.from({
                                length: 7
                            }).map((function(e, t) {
                                var s = R()(l).add(t, "days"),
                                    i = s.format("D"),
                                    c = s.format("ddd, MMM D");
                                return (0, n.jsxs)("button", {
                                    className: (0, z.Z)("relative w-full border bg-tts-white p-2 sm:hover:bg-gray-200", s.isSame(u) && "border-tts-black", r.format("YYYY-MM-DD") === s.format("YYYY-MM-DD") && "border-tts-black bg-tts-black text-tts-white sm:hover:bg-tts-black"),
                                    onClick: function() {
                                        return a(s)
                                    },
                                    children: [(0, n.jsx)("p", {
                                        className: "text-xs font-medium",
                                        children: i
                                    }), o.map((function(e) {
                                        return e.format("YYYY-MM-DD")
                                    })).includes(s.format("YYYY-MM-DD")) && (0, n.jsx)("div", {
                                        className: "absolute right-2 top-0 text-[12px]",
                                        children: "\u2728"
                                    })]
                                }, c)
                            }))
                        })]
                    })
                },
                we = function(e) {
                    var t = e.todaysDate,
                        r = e.selectedDate,
                        s = e.setSelectedDate,
                        a = e.onNavigate,
                        o = r.format("MMMM"),
                        i = r.format("YYYY");
                    return (0, n.jsxs)("span", {
                        className: "flex w-full items-center justify-between",
                        children: [(0, n.jsxs)("p", {
                            className: "text-base",
                            children: [o, " ", i]
                        }), (0, n.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, n.jsx)("button", {
                                className: "mr-2 text-sm font-semibold uppercase text-gray-500 hover:underline",
                                onClick: function() {
                                    return s(t)
                                },
                                children: "today"
                            }), (0, n.jsx)("button", {
                                onClick: function() {
                                    a(r.subtract(7, "days"))
                                },
                                children: (0, n.jsx)(p.gbs, {
                                    size: "1.5rem",
                                    fill: "gray"
                                })
                            }), (0, n.jsx)("button", {
                                className: "mx-2",
                                onClick: function() {
                                    a(r.add(7, "days"))
                                },
                                children: (0, n.jsx)(p.lU2, {
                                    size: "1.5rem",
                                    fill: "gray"
                                })
                            })]
                        })]
                    })
                },
                je = function(e) {
                    var t = e.datesWithOutfits,
                        r = void 0 === t ? [] : t,
                        s = e.day,
                        a = e.outsideCurrentMonth,
                        o = e.selected,
                        i = !a && r.some((function(e) {
                            return e.format("YYYY-MM-DD") === s.format("YYYY-MM-DD")
                        }));
                    return (0, n.jsx)(ge, {
                        overlap: "rectangular",
                        badgeContent: i ? "\u2728" : void 0,
                        sx: {
                            "& .MuiBadge-badge": {
                                fontSize: "0.75rem",
                                top: "12px",
                                right: "12px"
                            }
                        },
                        children: (0, n.jsx)(ve.H, (0, y.Z)((0, b.Z)({}, e), {
                            sx: {
                                backgroundColor: "".concat(o && "rgb(33 36 39)")
                            }
                        }))
                    }, e.day.toString())
                },
                Oe = function(e) {
                    var t = e.view,
                        r = e.todaysDate,
                        s = e.selectedDate,
                        a = e.setSelectedDate;
                    return (0, n.jsxs)("aside", {
                        className: "mt-6 flex w-full gap-3",
                        children: ["day" === t && null, "week" === t && (0, n.jsx)(ye, (0, b.Z)({}, e)), "month" === t && (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsxs)("div", {
                                className: "relative w-full",
                                children: [(0, n.jsx)(be.W, {
                                    value: s,
                                    onChange: function(e) {
                                        return e && a(e)
                                    },
                                    defaultValue: r,
                                    sx: {
                                        width: "100%",
                                        maxWidth: "100%",
                                        "& .Mui-selected": {
                                            backgroundColor: "rgb(33 36 39)"
                                        }
                                    },
                                    slots: {
                                        day: je
                                    },
                                    slotProps: {
                                        day: {
                                            datesWithOutfits: e.datesWithOutfits
                                        }
                                    }
                                }), (0, n.jsx)("button", {
                                    className: "absolute right-[90px] top-[5px] text-sm font-semibold uppercase text-gray-500 hover:underline",
                                    onClick: function() {
                                        return a(r)
                                    },
                                    children: "today"
                                })]
                            })
                        })]
                    })
                },
                Ce = r(61582),
                Ne = r(83420),
                ke = r(31618),
                Se = function(e, t, r, n) {
                    var s = Ze(e, r);
                    return "day" === n ? s : s.filter((function(e) {
                        return !t || e.date === (null === t || void 0 === t ? void 0 : t.format("YYYY-MM-DD"))
                    }))
                },
                Ze = function(e, t) {
                    var r = function(e) {
                            return e.event.includes("- daily look") || e.event.includes("- closet") || "daily look" === e.context
                        },
                        n = [];
                    return t.includes("daily looks") && (n = (0, i.Z)(n).concat((0, i.Z)(e.filter((function(e) {
                        return r(e)
                    }))))), t.includes("exploration") && (n = (0, i.Z)(n).concat((0, i.Z)(e.filter((function(e) {
                        return !r(e)
                    }))))), n
                },
                De = function(e) {
                    var t = new Set;
                    return e.forEach((function(e) {
                        t.add(u()(e.date))
                    })), Array.from(t)
                },
                Me = function(e) {
                    var t = e.closetItems,
                        r = e.setClosetItems,
                        a = e.favoritedOutfits,
                        c = e.setFavoritedOutfits,
                        d = e.coCreatedOutfits,
                        h = e.setCoCreatedOutfits,
                        b = (0, E.Z)().width,
                        y = (0, m.useRouter)(),
                        w = (0, s.useContext)(ke.St),
                        j = w && w.zip_code ? v.lookup(w.zip_code) : null,
                        O = j ? u().tz(u()(), j) : u()(),
                        C = (0, s.useState)(null),
                        N = C[0],
                        k = C[1],
                        S = (0, s.useState)("week"),
                        Z = S[0],
                        D = S[1],
                        M = (0, s.useState)("owned"),
                        Y = M[0],
                        F = M[1],
                        L = (0, s.useState)(O),
                        R = L[0],
                        P = L[1],
                        A = (0, s.useState)(!1),
                        $ = A[0],
                        B = A[1],
                        W = (0, s.useState)(["daily looks", "exploration"]),
                        q = W[0],
                        V = W[1],
                        U = (0, s.useState)(null),
                        H = U[0],
                        Q = U[1],
                        G = (0, s.useState)(0),
                        X = (G[0], G[1]),
                        J = (0, s.useState)(!1),
                        te = J[0],
                        re = J[1],
                        ne = (0, s.useState)([]),
                        se = ne[0],
                        ae = ne[1],
                        oe = (0, s.useState)(!1),
                        ie = oe[0],
                        le = oe[1],
                        ce = (0, s.useState)(null),
                        ue = ce[0],
                        de = ce[1],
                        fe = (0, s.useState)(0),
                        me = fe[0],
                        he = fe[1],
                        pe = (0, s.useState)(!1),
                        xe = pe[0],
                        ge = pe[1],
                        ve = (0, s.useState)(!1),
                        be = ve[0],
                        ye = ve[1];
                    (0, s.useEffect)((function() {
                        var e = function() {
                            var e = (0, o.Z)((function() {
                                var e;
                                return (0, l.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!w) return [3, 4];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, fetch("/api/weather?city=".concat(w.city)).then((function(e) {
                                                return e.json()
                                            }))];
                                        case 2:
                                            return (e = t.sent()) && k({
                                                summary: e.summary,
                                                details: e.details,
                                                minTemp: e.minTemp,
                                                maxTemp: e.maxTemp,
                                                precipitation: e.precipitation
                                            }), [3, 4];
                                        case 3:
                                            return t.sent(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e(), (0, Ne.n5)(ae, le);
                        var t = y.query.tab;
                        t && F(t)
                    }), []);
                    var we, je = function() {
                            return (0, n.jsx)("button", {
                                className: "absolute -left-8 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-tts-black bg-tts-white",
                                onClick: function() {
                                    ue && ue.slidePrev()
                                },
                                children: (0, n.jsx)(p.gbs, {
                                    size: "1.5rem"
                                })
                            })
                        },
                        Ze = function() {
                            return (0, n.jsx)("button", {
                                className: "absolute -right-8 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-tts-black bg-tts-white",
                                onClick: function() {
                                    ue && ue.slideNext()
                                },
                                children: (0, n.jsx)(p.lU2, {
                                    size: "1.5rem"
                                })
                            })
                        },
                        Me = Se((0, i.Z)(a).concat((0, i.Z)(d)), R, q, Z);
                    return (0, n.jsxs)(Ce.Z, {
                        children: [(0, n.jsxs)("span", {
                            className: "mb-10 flex w-full flex-col gap-3",
                            children: [(0, n.jsx)("p", {
                                className: "text-sm font-medium",
                                children: "Most worn items this week"
                            }), (0, n.jsxs)("div", {
                                className: "relative flex flex-col gap-4 md:mt-4 md:flex-row md:flex-wrap",
                                children: [b >= 640 && ue && !ie && se.length > 3 && (0, n.jsxs)(n.Fragment, {
                                    children: [0 !== me && (0, n.jsx)(je, {}), me < se.length - (b < 640 ? 4 : 5) && (0, n.jsx)(Ze, {})]
                                }), ie ? (0, n.jsx)("div", {
                                    className: "flex grid w-full grid-cols-4 gap-1 md:grid-cols-5 md:gap-7",
                                    children: Array.from(Array(b < 640 ? 4 : 5).keys()).map((function(e) {
                                        return (0, n.jsx)("div", {
                                            className: "aspect-square w-full animate-pulse bg-gray-200"
                                        }, e)
                                    }))
                                }) : 0 === se.length ? (0, n.jsxs)("div", {
                                    className: "-mt-4 flex flex-col gap-4",
                                    children: [(0, n.jsx)("p", {
                                        className: "text-sm",
                                        children: "Log your daily outfits to see which items you wear the most. Alta also learns your style when you log outfits!"
                                    }), (0, n.jsxs)("button", {
                                        onClick: function() {
                                            w && (0, _.L)("collection.ootd_entrypoint", w.id), ye(!0)
                                        },
                                        className: "flex w-min items-center gap-2 whitespace-nowrap bg-tts-black p-3 text-sm font-semibold uppercase text-tts-white hover:opacity-90",
                                        children: [(0, n.jsx)(p.Hlf, {
                                            size: "1rem",
                                            fill: "white"
                                        }), "Log my OOTD"]
                                    })]
                                }) : (0, n.jsx)("div", {
                                    className: "w-full",
                                    children: (0, n.jsx)(g.tq, {
                                        pagination: !1,
                                        modules: [x.Gk],
                                        slidesPerView: b < 640 ? 3.5 : 5.5,
                                        spaceBetween: b < 640 ? 5 : 28,
                                        onSwiper: function(e) {
                                            de(e)
                                        },
                                        onActiveIndexChange: function(e) {
                                            return he(e.activeIndex)
                                        },
                                        mousewheel: {
                                            forceToAxis: !0
                                        },
                                        children: se.map((function(e, t) {
                                            return (0, n.jsx)(g.o5, {
                                                children: (0, n.jsxs)("div", {
                                                    className: "relative w-full",
                                                    children: [(0, n.jsx)("img", {
                                                        src: null !== (we = e.backgroundRemovedImageUrl) && void 0 !== we ? we : e.imageSrc,
                                                        alt: e.imageAlt,
                                                        className: "aspect-square w-full border object-contain hover:border-tts-black hover:bg-gray-100"
                                                    }), (0, n.jsx)("p", {
                                                        className: "absolute left-2 top-2 text-xs",
                                                        children: t + 1
                                                    })]
                                                })
                                            }, t)
                                        }))
                                    })
                                })]
                            })]
                        }), (0, n.jsxs)("span", {
                            className: "relative mb-6 mt-12 flex w-full",
                            children: [(0, n.jsx)("div", {
                                className: "w-full border-b-[1px] border-tts-black"
                            }), (0, n.jsx)("button", {
                                className: (0, z.Z)("whitespace-nowrap border border-tts-black px-3 py-2 text-sm uppercase text-tts-black sm:hover:cursor-pointer sm:hover:bg-tts-black sm:hover:text-white", "owned" === Y && "border-b-[0px]"),
                                onClick: function() {
                                    return F("owned")
                                },
                                children: "Owned items"
                            }), (0, n.jsx)("button", {
                                className: (0, z.Z)("whitespace-nowrap border border-l-[0px] border-tts-black px-3 py-2 text-sm uppercase text-tts-black sm:hover:cursor-pointer sm:hover:bg-tts-black sm:hover:text-white", "saved" === Y && "border-b-[0px] "),
                                onClick: function() {
                                    return F("saved")
                                },
                                children: "Saved outfits"
                            }), (0, n.jsx)("div", {
                                className: "w-full border-b-[1px] border-tts-black"
                            })]
                        }), "saved" === Y ? (0, n.jsxs)("section", {
                            className: "flex w-full flex-col",
                            children: [(0, n.jsxs)("span", {
                                className: "relative grid w-full grid-cols-3",
                                children: [(0, n.jsxs)("button", {
                                    className: "flex items-center justify-center gap-1 justify-self-start border border-tts-black bg-tts-white px-2 py-1 text-xs font-semibold uppercase sm:hover:bg-gray-100",
                                    onClick: function() {
                                        return B(!0)
                                    },
                                    children: [(0, n.jsx)(p.lOx, {
                                        size: "1rem"
                                    }), b > 640 && "filters"]
                                }), (0, n.jsxs)("div", {
                                    className: "justify-self-center whitespace-nowrap border text-xs font-semibold text-tts-black",
                                    children: [(0, n.jsx)("button", {
                                        className: (0, z.Z)("border px-2 py-1 uppercase", "day" === Z ? "border-tts-black" : "text-gray-400 hover:bg-gray-200"),
                                        onClick: function() {
                                            return D("day")
                                        },
                                        children: "day"
                                    }), (0, n.jsx)("button", {
                                        className: (0, z.Z)("border px-2 py-1 uppercase", "week" === Z ? "border-tts-black" : "text-gray-400 hover:bg-gray-200"),
                                        onClick: function() {
                                            return D("week")
                                        },
                                        children: "week"
                                    }), (0, n.jsx)("button", {
                                        className: (0, z.Z)("border px-2 py-1 uppercase", "month" === Z ? "border-tts-black" : "text-gray-400 hover:bg-gray-200"),
                                        onClick: function() {
                                            return D("month")
                                        },
                                        children: "month"
                                    })]
                                }), (0, n.jsx)(f(), {
                                    href: "/create",
                                    children: (0, n.jsx)("button", {
                                        className: "justify-self-end border border-tts-black px-2 py-1 text-xs font-semibold uppercase sm:hover:bg-gray-200",
                                        children: (0, n.jsx)(p.poH, {
                                            size: "1rem"
                                        })
                                    })
                                })]
                            }), (0, n.jsx)(Oe, {
                                view: Z,
                                todaysDate: O,
                                selectedDate: R,
                                setSelectedDate: P,
                                datesWithOutfits: De((0, i.Z)(a).concat((0, i.Z)(d)))
                            }), Me.length > 0 ? (0, n.jsx)(K, {
                                setFavoritedOutfits: c,
                                setCoCreatedOutfits: h,
                                favoritedOutfits: Me,
                                userData: w,
                                setIsCustomizeOutfitModalOpen: re,
                                setOutfitToCustomize: Q,
                                selectedView: Z
                            }) : (0, n.jsx)("p", {
                                className: "my-4",
                                children: a.length + d.length > 0 ? "No outfits with current filters." : "No outfits saved yet."
                            })]
                        }) : (0, n.jsx)(I, {
                            userData: w,
                            localClosetImages: t,
                            setLocalClosetImages: r,
                            isClosetLoading: xe,
                            setIsLoadingCloset: ge
                        }), (0, n.jsx)(ee, {
                            isOpen: $,
                            onClose: B,
                            selectedCategories: q,
                            onChangeCategoryFilters: function(e) {
                                q.includes(e) ? V(q.filter((function(t) {
                                    return t !== e
                                }))) : V((0, i.Z)(q).concat([e]))
                            }
                        }), (0, n.jsx)(T.Z, {
                            weather: N,
                            isOpen: be,
                            setIsOpen: ye,
                            userData: w,
                            setNumCoCreatedOutfits: function() {
                                return null
                            },
                            context: "daily look",
                            startOutfit: [],
                            startStep: 1
                        }), (0, n.jsx)(T.Z, {
                            weather: N,
                            isOpen: te,
                            setIsOpen: re,
                            userData: w,
                            setNumCoCreatedOutfits: X,
                            context: "exploration",
                            startOutfit: H ? H.pieces : void 0,
                            startStep: 1,
                            startDescription: null === H || void 0 === H ? void 0 : H.stylist_notes,
                            startLabel: null === H || void 0 === H ? void 0 : H.event
                        })]
                    })
                },
                _e = !0,
                ze = function(e) {
                    var t = e.initialClosetItems,
                        r = e.initialFavoritedOutfits,
                        o = e.initialCoCreatedOutfits,
                        i = (0, s.useContext)(ke.St),
                        l = (0, s.useState)(t),
                        c = l[0],
                        u = l[1],
                        d = (0, s.useState)(r),
                        f = d[0],
                        m = d[1],
                        h = (0, s.useState)(o),
                        p = h[0],
                        x = h[1];
                    return (0, s.useEffect)((function() {
                        i && (0, _.L)("collection.viewed", i.id)
                    }), []), (0, n.jsx)(a.Z, {
                        children: (0, n.jsx)("section", {
                            className: "relative w-full",
                            children: (0, n.jsx)(Me, {
                                closetItems: c,
                                setClosetItems: u,
                                favoritedOutfits: f,
                                setFavoritedOutfits: m,
                                coCreatedOutfits: p,
                                setCoCreatedOutfits: x
                            })
                        })
                    })
                }
        }
    },
    function(e) {
        e.O(0, [9866, 3714, 602, 6817, 2211, 6425, 3990, 2292, 925, 5564, 9774, 2888, 179], (function() {
            return t = 26377, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);