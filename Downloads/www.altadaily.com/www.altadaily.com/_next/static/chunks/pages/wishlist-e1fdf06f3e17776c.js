(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4737], {
        87559: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/wishlist", function() {
                return s(76612)
            }])
        },
        76612: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: function() {
                    return I
                },
                default: function() {
                    return S
                }
            });
            var l = s(828),
                n = s(29815),
                a = s(85893),
                r = s(6154),
                i = s(11163),
                o = s.n(i),
                c = s(67294),
                u = s(83991),
                d = s(43990),
                m = s(58742),
                x = s(26042),
                h = s(69396),
                f = s(66409),
                p = s(97517),
                w = s(86805),
                g = s(38183),
                b = function(e) {
                    var t = e.open,
                        s = e.setOpen,
                        l = e.wishlistItemToUpload,
                        n = e.setWishlistItemToUpload,
                        r = e.searchBar,
                        i = e.googleSearchResults,
                        o = e.handleUpdateParentWishlistUploadItem,
                        u = e.onCloseModal,
                        d = e.onAddItem,
                        m = e.isUploadingWishlistItem,
                        b = (0, c.useRef)(null);
                    (0, c.useEffect)((function() {
                        t || u()
                    }), [t]);
                    return (0, a.jsx)(w.Z, {
                        open: t,
                        setOpen: s,
                        children: (0, a.jsxs)(f.ZP, {
                            className: "mx-auto flex w-full max-w-7xl flex-col sm:px-6 lg:px-8",
                            children: [(0, a.jsxs)("aside", {
                                ref: b,
                                className: "relative flex w-full items-center justify-between p-6",
                                children: [(0, a.jsx)(p.PZ, {
                                    onClick: function() {
                                        return s(!1)
                                    }
                                }), (0, a.jsx)("div", {
                                    className: "absolute inset-0 z-0 flex flex-col items-center justify-center",
                                    children: (0, a.jsx)("h1", {
                                        className: "whitespace-nowrap text-center text-sm font-semibold text-tts-black",
                                        children: "Add to wishlist"
                                    })
                                })]
                            }), (0, a.jsxs)("section", {
                                className: "relative flex w-full flex-col bg-white px-6",
                                children: [l && (0, a.jsx)("span", {
                                    className: "mb-6 flex w-full flex-col border border-tts-black",
                                    children: (0, a.jsx)("div", {
                                        className: "w-full p-2 px-4",
                                        children: (0, a.jsxs)("div", {
                                            className: "flex flex-col gap-3 md:grid md:grid-cols-2",
                                            children: [(0, a.jsx)("img", {
                                                className: "aspect-square w-full object-contain",
                                                src: l.imageUrl,
                                                alt: "Item image"
                                            }), (0, a.jsxs)("div", {
                                                className: "flex w-full flex-col",
                                                children: [(0, a.jsx)("p", {
                                                    className: "mb-1 text-xs font-light uppercase",
                                                    children: "Product Name"
                                                }), (0, a.jsx)("input", {
                                                    className: "mb-2 w-full border p-2 text-xs",
                                                    type: "text",
                                                    placeholder: "Red halter maxi dress",
                                                    onChange: function(e) {
                                                        return n((0, h.Z)((0, x.Z)({}, l), {
                                                            name: e.target.value
                                                        }))
                                                    },
                                                    value: l.name
                                                }), (0, a.jsx)("p", {
                                                    className: "mb-1 text-xs font-light uppercase",
                                                    children: "Brand (optional)"
                                                }), (0, a.jsx)("input", {
                                                    className: "mb-2 w-full border p-2 text-xs",
                                                    type: "text",
                                                    placeholder: "E.g. Ralph Lauren",
                                                    onChange: function(e) {
                                                        return n((0, h.Z)((0, x.Z)({}, l), {
                                                            brand: e.target.value
                                                        }))
                                                    },
                                                    value: l.brand
                                                }), (0, a.jsx)("p", {
                                                    className: "mb-1 text-xs font-light uppercase",
                                                    children: "Category"
                                                }), (0, a.jsxs)("select", {
                                                    className: "mb-4 w-full text-xs uppercase",
                                                    value: l.category,
                                                    onChange: function(e) {
                                                        return n((0, h.Z)((0, x.Z)({}, l), {
                                                            category: e.target.value
                                                        }))
                                                    },
                                                    children: [(0, a.jsx)("option", {
                                                        value: "",
                                                        disabled: !0,
                                                        children: "Please select a category"
                                                    }), g.CLOSET_CATEGORIES.map((function(e) {
                                                        return (0, a.jsx)("option", {
                                                            value: e,
                                                            children: e
                                                        }, e)
                                                    }))]
                                                }), l.category || l.name ? l.category ? l.name ? null : (0, a.jsx)("p", {
                                                    className: "mt-4 text-xs text-red-500",
                                                    children: "Please add the product name to proceed."
                                                }) : (0, a.jsx)("p", {
                                                    className: "mt-4 text-xs text-red-500",
                                                    children: "Please select a category to proceed."
                                                }) : (0, a.jsx)("p", {
                                                    className: "mt-4 text-xs text-red-500",
                                                    children: "Please select a category and add the product name to proceed."
                                                }), l.category && l.name && (0, a.jsx)("button", {
                                                    className: "mb-2 ml-auto w-min bg-tts-black px-4 py-2 text-sm font-semibold uppercase text-tts-white enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-75",
                                                    onClick: function(e) {
                                                        e.preventDefault(), d()
                                                    },
                                                    children: m ? "Adding..." : "Add"
                                                })]
                                            })]
                                        })
                                    })
                                }), r, i((function(e) {
                                    o(e), b && b.current && b.current.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                }))]
                            })]
                        })
                    })
                },
                j = s(8002),
                v = s(29988),
                N = s(61582),
                _ = s(27037),
                y = s(31618),
                I = !0;

            function S(e) {
                var t = e.wishlistItems,
                    s = (0, c.useContext)(y.St),
                    i = (0, j.w)().showSnackbar,
                    x = (0, c.useState)(t),
                    h = x[0],
                    f = x[1],
                    p = (0, c.useState)(""),
                    w = p[0],
                    I = p[1],
                    S = (0, c.useState)(!1),
                    U = S[0],
                    C = S[1],
                    Z = (0, c.useState)(null),
                    k = Z[0],
                    E = Z[1],
                    P = (0, c.useState)([]),
                    T = P[0],
                    A = P[1],
                    O = (0, c.useState)(!1),
                    R = O[0],
                    L = O[1],
                    W = (0, c.useState)(!1),
                    B = W[0],
                    q = W[1],
                    M = function() {
                        A([]), E(null), I("")
                    };
                return null === s || s && s.is_on_waitlist ? (o().push("/login"), null) : (0, a.jsx)(v.Z, {
                    children: (0, a.jsxs)(N.Z, {
                        children: [(0, a.jsx)(b, {
                            open: U,
                            setOpen: C,
                            wishlistItemToUpload: k,
                            setWishlistItemToUpload: E,
                            searchBar: (0, a.jsx)(g.SearchBar, {
                                selectedTab: "wishlist",
                                searchQuery: w,
                                setSearchQuery: I,
                                onEnterClick: function() {
                                    s && (0, _.L)("wishlist.wishlist_item_google_search.searched", s.id, {
                                        query: w
                                    }), L(!0), (0, d.Xe)(w, A, L)
                                }
                            }),
                            googleSearchResults: function(e) {
                                return (0, a.jsx)("div", {
                                    className: "py-4",
                                    children: (0, a.jsx)(m.QY, {
                                        addedLinks: k ? [k.imageUrl] : [],
                                        searchResults: T,
                                        isSearching: R,
                                        onClickResult: e
                                    })
                                })
                            },
                            handleUpdateParentWishlistUploadItem: function(e) {
                                var t = "";
                                Object.entries(m.I2).forEach((function(s) {
                                    var n = (0, l.Z)(s, 2),
                                        a = n[0];
                                    n[1].some((function(t) {
                                        return e.name.toLowerCase().includes(t.toLowerCase())
                                    })) && (t = a)
                                }));
                                var s = {
                                    imageUrl: e.imgUrl,
                                    retailerUrl: e.retailerUrl,
                                    name: e.name,
                                    brand: e.brand,
                                    category: t
                                };
                                E(s)
                            },
                            onCloseModal: M,
                            onAddItem: function() {
                                if (k) {
                                    (0, d.nq)(k, q).then((function(e) {
                                        e && f((function(t) {
                                            return [e].concat((0, n.Z)(t))
                                        }))
                                    })).finally((function() {
                                        C(!1), M()
                                    })), s && (0, _.L)("wishlist.added_item", null === s || void 0 === s ? void 0 : s.id, {
                                        wishlist_item: k.name,
                                        wishlist_url: k.retailerUrl
                                    });
                                    var e = k.brand;
                                    s && k && e && r.Z.post("/api/favoriteBrand", {
                                        product_brand: e
                                    }), i("Alta will text you when your wishlist item goes on sale \u2728")
                                }
                            },
                            isUploadingWishlistItem: B
                        }), (0, a.jsx)("div", {
                            className: "flex w-full flex-col ",
                            children: (0, a.jsx)(u.Z, {
                                userData: s,
                                selectedTab: "wishlist",
                                items: h,
                                onRemoveItem: function(e) {
                                    f((function(t) {
                                        return t.filter((function(t) {
                                            return t.productId !== e
                                        }))
                                    }))
                                },
                                onUpdateItem: function(e) {
                                    f((function(t) {
                                        return t.map((function(t) {
                                            return t.productId === e.productId ? e : t
                                        }))
                                    }))
                                },
                                onAddItem: function(e) {
                                    f((function(t) {
                                        return [e].concat((0, n.Z)(t))
                                    }))
                                },
                                setAddItemModalOpen: C
                            })
                        })]
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [9866, 3714, 602, 6817, 2211, 3990, 9774, 2888, 179], (function() {
            return t = 87559, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);