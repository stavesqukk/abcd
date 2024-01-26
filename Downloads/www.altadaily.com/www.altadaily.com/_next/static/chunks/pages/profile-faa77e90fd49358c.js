(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [277], {
        99813: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/profile", function() {
                return s(10309)
            }])
        },
        83420: function(e, t, s) {
            "use strict";
            s.d(t, {
                Go: function() {
                    return l
                },
                ki: function() {
                    return c
                },
                n5: function() {
                    return i
                }
            });
            var r = s(47568),
                n = s(70655),
                a = s(6154),
                i = function() {
                    var e = (0, r.Z)((function(e, t) {
                        var s, r, a;
                        return (0, n.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    t(!0), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 4, 5, 6]), [4, fetch("/api/closetUtilization?type=mostWorn", {
                                        method: "GET"
                                    })];
                                case 2:
                                    if (!(s = n.sent()).ok) throw "Could not get most worn items";
                                    return [4, s.json()];
                                case 3:
                                    return r = n.sent(), e(r), [3, 6];
                                case 4:
                                    return a = n.sent(), console.error(a), [3, 6];
                                case 5:
                                    return t(!1), [7];
                                case 6:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, s) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var e = (0, r.Z)((function(e, t, s, r) {
                        var i, l, c, o, u;
                        return (0, n.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 2, 3, 4]), [4, a.Z.patch("/api/invitationLink", {
                                        alias: e
                                    })];
                                case 1:
                                    if (i = n.sent(), l = i.status, c = i.data, 200 !== l) throw "Could not customize link";
                                    return o = c.link, t(o.alias), r("Success!"), [3, 4];
                                case 2:
                                    return u = n.sent(), console.error(u), r("This alias is invalid, please try another one."), [3, 4];
                                case 3:
                                    return s(!1), [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, s, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var e = (0, r.Z)((function(e) {
                        var t, s, r, i, l;
                        return (0, n.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 2, , 3]), [4, a.Z.get("/api/invitationLink")];
                                case 1:
                                    if (t = n.sent(), s = t.status, r = t.data, 200 !== s) throw "Could not get link from supabase";
                                    return i = r.link, e(i.alias), [3, 3];
                                case 2:
                                    return l = n.sent(), console.error(l), [2, null];
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
        10309: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var r = s(47568),
                n = s(70655),
                a = s(85893),
                i = s(51891),
                l = s(30381),
                c = s.n(l),
                o = s(41664),
                u = s.n(o),
                f = s(11163),
                x = s(67294),
                d = s(88078),
                h = s(94310),
                m = s(47516),
                p = s(51667),
                y = function(e, t, s, r) {
                    return e ? (0, a.jsx)(m.hXj, {
                        className: "mx-auto my-auto text-white",
                        size: "1.5rem"
                    }) : r || t || s ? null : (0, a.jsx)(m.czh, {
                        className: "mx-auto my-auto text-white",
                        size: "1.5rem"
                    })
                },
                g = function(e) {
                    var t = e.coCreatedOutfits,
                        s = e.isLoading,
                        r = e.dateDifferential,
                        n = e.currentWeekSunday,
                        i = e.favoritedOutfits,
                        l = e.selfies,
                        o = n.clone().add(r, "days").format("YYYY-MM-DD"),
                        u = t.some((function(e) {
                            return e.date === o
                        })) || i.some((function(e) {
                            return e.date === o
                        })) || l.some((function(e) {
                            return c()(e.createdAt).format("YYYY-MM-DD") === o
                        })),
                        f = c()(new Date).format("YYYY-MM-DD"),
                        x = c()(new Date).isBefore(o),
                        d = c()(f).isSame(o);
                    return (0, a.jsxs)("div", {
                        className: "flex flex-col items-center gap-1",
                        children: [(0, a.jsx)("p", {
                            className: "text-xs",
                            children: c()(o).format("dd")
                        }), (0, a.jsx)("span", {
                            className: (0, p.Z)("h-6 w-6 rounded-full shadow-sm", u ? h.au : x || d ? "bg-gray-300" : s ? "animate-pulse bg-gray-500" : "bg-gray-500"),
                            children: y(u, x, s, d)
                        })]
                    })
                },
                b = function(e) {
                    var t = e.isLoading,
                        s = e.userData,
                        r = e.coCreatedOutfits,
                        n = e.favoritedOutfits,
                        i = e.selfies,
                        l = (0, x.useState)(0),
                        o = l[0],
                        u = l[1];
                    (0, x.useEffect)((function() {
                        u((0, h.CY)(s, r, n, i))
                    }), [r, s, n, i]);
                    var f = c()().startOf("week");
                    return (0, a.jsxs)("section", {
                        className: "flex w-full flex-col items-center justify-center gap-2 border border-gray-300 p-2 text-black",
                        children: [t ? (0, a.jsx)(d.Z, {
                            variant: "rectangular",
                            width: 150,
                            height: 32,
                            className: "mx-auto"
                        }) : (0, a.jsxs)("h1", {
                            className: "mx-auto text-sm text-tts-black",
                            children: [(0, a.jsx)("span", {
                                className: "text-2xl",
                                children: o
                            }), " day streak"]
                        }), (0, a.jsx)("span", {
                            className: "flex w-full items-center justify-center gap-5",
                            children: Array.from(Array(7).keys()).map((function(e, s) {
                                return (0, a.jsx)(g, {
                                    isLoading: t,
                                    coCreatedOutfits: r,
                                    favoritedOutfits: n,
                                    selfies: i,
                                    dateDifferential: e,
                                    currentWeekSunday: f
                                }, s)
                            }))
                        }), (0, a.jsx)("p", {
                            className: "mt-2 text-start text-xs font-light",
                            children: "Save an outfit every day to build your streak!"
                        })]
                    })
                },
                j = s(29988),
                w = s(50997),
                v = s(61582),
                N = s(34386),
                k = s(20640),
                _ = s.n(k),
                S = s(83420),
                O = s(68239),
                Y = s(8756),
                C = function(e) {
                    var t = e.userData,
                        s = e.isOpen,
                        r = e.setIsOpen,
                        n = e.inviteLinkAlias,
                        i = e.setInviteLinkAlias,
                        l = (0, x.useState)(""),
                        c = l[0],
                        o = l[1],
                        u = (0, x.useState)(!1),
                        f = u[0],
                        d = u[1],
                        h = (0, x.useState)(!1),
                        p = h[0],
                        y = h[1],
                        g = (0, x.useState)(""),
                        b = g[0],
                        j = g[1];
                    (0, x.useEffect)((function() {
                        s || (d(!1), o(""))
                    }), [s]);
                    return (0, a.jsx)(Y.Z, {
                        open: s,
                        setOpen: r,
                        children: (0, a.jsxs)("section", {
                            className: "flex w-full flex-col",
                            children: [(0, a.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [(0, a.jsx)("h1", {
                                    className: "w-full text-left text-base font-medium",
                                    children: "Invite friends to Alta"
                                }), 0 === t.num_referrals ? (0, a.jsx)("p", {
                                    className: "w-full text-left text-sm font-light",
                                    children: "Share the link below with your friends to get started."
                                }) : (0, a.jsxs)("p", {
                                    className: "w-full text-left text-sm font-light",
                                    children: ["You've invited", " ", (0, a.jsx)("span", {
                                        className: "font-semibold underline",
                                        children: t.num_referrals
                                    }), " ", t.num_referrals > 1 ? "friends" : "friend", " to Alta using this link. Share with more friends!"]
                                })]
                            }), (0, a.jsxs)("span", {
                                className: "mt-4 flex w-full",
                                children: [(0, a.jsx)("input", {
                                    type: "text",
                                    readOnly: !0,
                                    className: "flex grow border border-tts-black bg-gray-100 text-sm font-light focus:border-tts-black focus:outline-0 focus:ring-0",
                                    value: "https://www.altadaily.com/invite/".concat(n)
                                }), f ? (0, a.jsx)(N.Z, {
                                    title: "COPIED",
                                    children: (0, a.jsx)("div", {
                                        className: "flex h-[38px] items-center justify-center bg-tts-black px-2 text-sm font-semibold uppercase text-tts-white sm:hover:opacity-90",
                                        children: (0, a.jsx)(m.hXj, {
                                            size: "1.25rem"
                                        })
                                    })
                                }) : (0, a.jsx)(N.Z, {
                                    title: "COPY",
                                    children: (0, a.jsx)("button", {
                                        className: "flex h-[38px] items-center justify-center bg-tts-black px-2 text-sm font-semibold uppercase text-tts-white sm:hover:opacity-90",
                                        onClick: function() {
                                            return _()("https://www.altadaily.com/invite/" + n), void d(!0)
                                        },
                                        children: (0, a.jsx)(m.LhG, {
                                            size: "1.25rem"
                                        })
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: "my-4 w-full border-b-[1px]"
                            }), (0, a.jsxs)("div", {
                                className: "w-full flex-col gap-1",
                                children: [(0, a.jsx)("label", {
                                    className: "w-full text-left text-base font-medium",
                                    children: "Customize invite link"
                                }), (0, a.jsxs)("span", {
                                    className: "flex w-full gap-3",
                                    children: [(0, a.jsx)("p", {
                                        className: "flex items-center text-sm font-light",
                                        children: "https://www.altadaily.com/invite/"
                                    }), (0, a.jsxs)("span", {
                                        className: "flex w-full grow",
                                        children: [(0, a.jsx)("input", {
                                            type: "text",
                                            placeholder: "Enter alias",
                                            className: "w-full border border-tts-black text-sm font-light focus:border-tts-black focus:outline-0 focus:ring-0",
                                            value: c,
                                            onChange: function(e) {
                                                return o(e.target.value)
                                            }
                                        }), (0, a.jsx)(N.Z, {
                                            title: "CUSTOMIZE",
                                            children: (0, a.jsx)("button", {
                                                className: "flex h-[38px] items-center justify-center bg-tts-black px-2 text-sm font-semibold uppercase text-tts-white sm:hover:opacity-90",
                                                onClick: function() {
                                                    return j(""), y(!0), void(0, S.Go)(c, i, y, j).finally((function() {
                                                        o("")
                                                    }))
                                                },
                                                children: p ? (0, a.jsx)(O.Z, {
                                                    size: "20px",
                                                    invert: !0
                                                }) : (0, a.jsx)(m.$XA, {
                                                    size: "1.25rem"
                                                })
                                            })
                                        })]
                                    })]
                                }), !p && (0, a.jsx)("p", {
                                    className: "ml-auto mt-2 w-min whitespace-nowrap text-xs font-light",
                                    children: b
                                })]
                            })]
                        })
                    })
                },
                A = s(828),
                Z = s(46229),
                D = function(e) {
                    switch (e) {
                        case 0:
                            return "bg-gray-500";
                        case 1:
                            return "bg-gray-400";
                        case 2:
                            return "bg-gray-300";
                        case 3:
                            return "bg-gray-200";
                        case 4:
                            return "bg-gray-100";
                        default:
                            return "bg-gray-50"
                    }
                },
                M = function(e) {
                    var t = e.userStyles,
                        s = e.isLoadingSelfies,
                        r = Object.values(t).reduce((function(e, t) {
                            return e + t
                        }), 0);
                    return (0, a.jsx)("div", {
                        className: "my-4 flex flex-col justify-between md:my-0",
                        children: (0, a.jsxs)("div", {
                            className: "flex w-full flex-col gap-2",
                            children: [(0, a.jsx)("p", {
                                className: "text-xs uppercase",
                                children: "Styles you wore this week"
                            }), s ? (0, a.jsx)("div", {
                                className: "flex h-8 w-full animate-pulse items-center justify-center bg-gray-200",
                                children: (0, a.jsx)("p", {
                                    className: "text-xs uppercase",
                                    children: "Analyzing..."
                                })
                            }) : (0, a.jsx)("span", {
                                className: "flex h-8 w-full",
                                children: 0 === Object.entries(t).length ? (0, a.jsx)("p", {
                                    className: "text-center text-xs font-light text-gray-600",
                                    children: "Log your daily outfits to see your analyzed styles from this week."
                                }) : Object.entries(t).map((function(e, t) {
                                    var s = (0, A.Z)(e, 2),
                                        n = s[0],
                                        i = s[1];
                                    return (0, a.jsx)(N.Z, {
                                        title: "".concat(Math.round(i / r * 100), "%") + " " + Z.Yz[n],
                                        enterTouchDelay: 0,
                                        children: (0, a.jsx)("button", {
                                            style: {
                                                width: "".concat(i / r * 100, "%")
                                            },
                                            className: (0, p.Z)("h-full border border-transparent hover:border-tts-black hover:opacity-90", D(t))
                                        })
                                    }, t)
                                }))
                            })]
                        })
                    })
                },
                L = s(27037),
                z = s(29444),
                E = s(31618),
                I = function(e, t) {
                    var s = e.map((function(e) {
                            return e.outfit.styles
                        })).flat().concat(t.map((function(e) {
                            return e.styles
                        })).flat()),
                        r = {},
                        n = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var l, c = s[Symbol.iterator](); !(n = (l = c.next()).done); n = !0) {
                            var o = l.value;
                            r[o] = (r[o] || 0) + 1
                        }
                    } catch (g) {
                        a = !0, i = g
                    } finally {
                        try {
                            n || null == c.return || c.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    var u = Object.keys(r).sort((function(e, t) {
                            return r[t] - r[e]
                        })).slice(0, 5),
                        f = {},
                        x = !0,
                        d = !1,
                        h = void 0;
                    try {
                        for (var m, p = u[Symbol.iterator](); !(x = (m = p.next()).done); x = !0) {
                            var y = m.value;
                            f[y] = r[y]
                        }
                    } catch (g) {
                        d = !0, h = g
                    } finally {
                        try {
                            x || null == p.return || p.return()
                        } finally {
                            if (d) throw h
                        }
                    }
                    return f
                },
                T = function() {
                    var e = (0, x.useContext)(E.St),
                        t = (0, i.G6)(),
                        s = (0, f.useRouter)(),
                        l = (0, x.useState)(""),
                        o = l[0],
                        d = l[1],
                        h = (0, x.useState)([]),
                        m = h[0],
                        y = h[1],
                        g = (0, x.useState)([]),
                        N = g[0],
                        k = g[1],
                        _ = (0, x.useState)([]),
                        O = _[0],
                        Y = _[1],
                        A = (0, x.useState)(!1),
                        T = A[0],
                        G = A[1],
                        P = (0, x.useState)(!1),
                        U = P[0],
                        X = P[1],
                        W = (0, x.useState)(!1),
                        R = W[0],
                        B = W[1],
                        H = (0, x.useState)(!1),
                        q = H[0],
                        F = H[1];
                    (0, x.useEffect)((function() {
                        if (e) {
                            (0, L.L)("profile.viewed", e.id), (0, S.ki)(d);
                            var t = (0, z.determineStepFromUserData)(e);
                            (null === t || "number" === typeof t && t >= z.ONBOARDING_REASON_STEP) && ((0, w.Qo)(y, G), (0, w.gu)(k, X), (0, Z.HC)(Y, B))
                        }
                    }), []);
                    var Q = e ? (0, E.Hq)(e) : "",
                        $ = e && e.first_name && e.last_name ? e.first_name.charAt(0).toUpperCase() + e.last_name.charAt(0).toUpperCase() : "AA",
                        J = e ? c()(e.created_at).format("MMMM YYYY") : c()().format("MMMM YYYY"),
                        K = e ? e.bio : "",
                        V = e && e.profile_photo_url ? e.profile_photo_url : "",
                        ee = I(O.filter((function(e) {
                            return e.createdAt.isAfter(c()().subtract(1, "week"))
                        })), N.filter((function(e) {
                            return "daily look" === e.context
                        })).filter((function(e) {
                            return c()(e.date).isAfter(c()().subtract(1, "week"))
                        }))),
                        te = function() {
                            var a = (0, r.Z)((function() {
                                return (0, n.__generator)(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e && (0, L.L)("nav_bar.sign_out.clicked", e.id), [4, t.session.revoke()];
                                        case 1:
                                            return r.sent(), s.reload(), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return a.apply(this, arguments)
                            }
                        }();
                    return (0, a.jsx)(j.Z, {
                        children: (0, a.jsxs)(v.Z, {
                            hasMaxWidth: !1,
                            children: [(0, a.jsx)("div", {
                                className: "mx-auto flex w-full flex-col items-center justify-center gap-4",
                                children: (0, a.jsxs)("section", {
                                    className: "w-full max-w-7xl px-4 sm:px-6 lg:px-8",
                                    children: [(0, a.jsx)("span", {
                                        className: "flex w-full items-center gap-6",
                                        children: (0, a.jsxs)("span", {
                                            className: "flex w-full justify-between md:justify-center",
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex flex-col gap-1",
                                                children: [V ? (0, a.jsx)("img", {
                                                    className: "h-[100px] w-[100px]",
                                                    src: V,
                                                    alt: "Profile photo"
                                                }) : (0, a.jsx)("p", {
                                                    className: "flex h-[100px] w-[100px] items-center justify-center border border-tts-black text-center text-lg font-semibold",
                                                    children: $
                                                }), (0, a.jsx)("p", {
                                                    className: "text-base font-semibold uppercase",
                                                    children: Q
                                                }), K && (0, a.jsx)("p", {
                                                    className: "whitespace-nowrap text-xs font-light",
                                                    children: K
                                                }), (0, a.jsxs)("p", {
                                                    className: "whitespace-nowrap text-xs font-light text-gray-500",
                                                    children: ["Member since ", J]
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "flex h-min flex-wrap justify-end gap-2",
                                                children: Object.keys(ee).map((function(e, t) {
                                                    return (0, a.jsx)("p", {
                                                        className: (0, p.Z)("h-min whitespace-nowrap px-2 py-1 text-sm font-light", D(t)),
                                                        children: Z.Yz[e]
                                                    }, t)
                                                }))
                                            })]
                                        })
                                    }), (0, a.jsxs)("span", {
                                        className: "mt-4 flex w-full gap-2",
                                        children: [(0, a.jsx)(u(), {
                                            href: "/profile/edit",
                                            children: (0, a.jsx)("button", {
                                                className: "w-1/2 border border-gray-300 px-3 py-2 text-xs uppercase hover:bg-gray-200",
                                                children: "profile"
                                            })
                                        }), (0, a.jsx)(u(), {
                                            href: "/profile/preferences",
                                            children: (0, a.jsx)("button", {
                                                className: "w-1/2 border border-gray-300 px-3 py-2 text-xs uppercase hover:bg-gray-200",
                                                children: "preferences"
                                            })
                                        }), (0, a.jsx)("button", {
                                            className: "w-1/2 border border-gray-300 px-3 py-2 text-xs uppercase hover:bg-gray-200",
                                            onClick: function() {
                                                return F(!0)
                                            },
                                            children: "invite"
                                        }), (0, a.jsx)("button", {
                                            onClick: function() {
                                                return te()
                                            },
                                            className: "whitespace-nowrap border border-gray-300 px-3 text-xs uppercase hover:bg-gray-200",
                                            children: "Sign out"
                                        })]
                                    }), (0, a.jsxs)("section", {
                                        className: "flex w-full flex-col gap-2 border-gray-300 py-4 md:grid md:grid-cols-2",
                                        children: [(0, a.jsx)(b, {
                                            userData: e,
                                            isLoading: U || T,
                                            coCreatedOutfits: N,
                                            favoritedOutfits: m,
                                            selfies: O
                                        }), (0, a.jsx)(M, {
                                            userStyles: ee,
                                            isLoadingSelfies: R || U
                                        })]
                                    })]
                                })
                            }), e && (0, a.jsx)(C, {
                                userData: e,
                                isOpen: q,
                                setIsOpen: F,
                                inviteLinkAlias: o,
                                setInviteLinkAlias: d
                            })]
                        })
                    })
                }
        }
    },
    function(e) {
        e.O(0, [9866, 3714, 602, 6817, 2211, 221, 7331, 3990, 2292, 925, 6229, 9774, 2888, 179], (function() {
            return t = 99813, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);