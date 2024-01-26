(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        48312: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(1153)
            }])
        },
        32231: function(e, t, s) {
            "use strict";
            var r = s(85893),
                n = s(78385),
                i = s(58703),
                a = s(67294),
                l = s(47516),
                o = s(91383),
                c = s(532),
                u = s(81400),
                d = s(27037);
            t.Z = function(e) {
                var t = e.page,
                    s = e.userData,
                    m = e.completeTheLookItem,
                    f = e.setCompleteTheLookItem,
                    x = (0, a.useState)(!1),
                    p = x[0],
                    h = x[1],
                    b = (0, a.useContext)(o.F),
                    j = b.state,
                    g = b.dispatch,
                    v = function() {
                        g({
                            type: u.uX.CLOSE_TOAST
                        })
                    };
                return j.toastStack.length > 0 ? (0, r.jsxs)(n.Z, {
                    children: [(0, r.jsx)(i.Z, {
                        anchorOrigin: {
                            horizontal: "center",
                            vertical: "bottom"
                        },
                        open: j.isToastOpen,
                        sx: {
                            "& .MuiSnackbarContent-root": {
                                borderRadius: "0",
                                backgroundColor: "rgb(33 36 39)",
                                zIndex: "9999"
                            }
                        },
                        autoHideDuration: 4e3,
                        onClose: v,
                        children: (0, r.jsxs)("div", {
                            className: "flex items-center gap-3 border border-black bg-white p-3 text-sm font-light text-black shadow-md",
                            children: [(0, r.jsx)("div", {
                                children: "See how this piece fits into your closet"
                            }), (0, r.jsx)("button", {
                                "aria-label": "close",
                                onClick: function() {
                                    return j.toastStack.length > 0 && (s && (0, d.L)("complete_the_look_upsell_toast.cta_tap", s.id), f(j.toastStack[0].item), h(!0)), void v()
                                },
                                className: "bg-black p-2 text-xs font-bold uppercase text-white transition ease-in-out hover:cursor-pointer hover:opacity-75",
                                children: "View"
                            }), (0, r.jsx)("button", {
                                "aria-label": "close",
                                onClick: function() {
                                    return v()
                                },
                                children: (0, r.jsx)(l.czh, {
                                    size: "1.25rem"
                                })
                            })]
                        })
                    }, j.toastStack[0].key), p && m && (0, r.jsx)(c.Z, {
                        page: t,
                        context: "complete_the_look_upsell_toast",
                        isOpen: p,
                        setIsOpen: h,
                        item: m,
                        userData: s
                    })]
                }) : null
            }
        },
        1153: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: function() {
                    return Te
                },
                default: function() {
                    return Me
                },
                getFormattedEditorials: function() {
                    return Le
                }
            });
            var r = s(85893),
                n = s(67294),
                i = s(31959),
                a = s(47568),
                l = s(70655),
                o = s(51891),
                c = s(47041),
                u = s(11163),
                d = s(32231),
                m = s(61582),
                f = function(e, t) {
                    var s = e.getHours();
                    return s < 12 ? "Good morning, ".concat(t, "!") : s < 18 ? "Good afternoon, ".concat(t, "!") : "Good evening, ".concat(t, "!")
                },
                x = function(e) {
                    var t = e.weather,
                        s = e.cityAndState,
                        n = e.userData,
                        i = e.isLoading,
                        a = (null === n || void 0 === n ? void 0 : n.is_celsius) || !1,
                        l = a ? "\xb0C" : "\xb0F";
                    return (0, r.jsxs)(m.Z, {
                        children: [(0, r.jsx)("h1", {
                            className: "w-full text-center text-2xl font-semibold text-tts-black md:text-left md:text-3xl",
                            children: (null === n || void 0 === n ? void 0 : n.is_a_member) ? f(new Date, n && n.first_name || "") : "Welcome to Alta" + (n && n.first_name ? ", ".concat(n.first_name.charAt(0).toUpperCase() + n.first_name.slice(1)) : "")
                        }), (0, r.jsx)("section", {
                            className: "mt-4 flex w-full border-2 md:mt-6",
                            children: i ? (0, r.jsxs)("div", {
                                className: "flex w-full flex-col justify-center gap-2 p-2 md:p-4",
                                children: [(0, r.jsx)("div", {
                                    className: "h-5 w-full animate-pulse bg-gray-200"
                                }), (0, r.jsx)("div", {
                                    className: "h-5 w-full animate-pulse bg-gray-200"
                                }), (0, r.jsx)("div", {
                                    className: "h-5 w-full animate-pulse bg-gray-200"
                                })]
                            }) : (0, r.jsx)("div", {
                                className: "flex w-full flex-col items-start justify-items-start p-2 text-sm sm:p-4",
                                children: s && t && t.maxTemp && t.minTemp && (0, r.jsxs)("div", {
                                    className: "flex w-full flex-col items-start gap-1",
                                    children: [(0, r.jsxs)("p", {
                                        className: "whitespace-nowrap font-semibold text-tts-black",
                                        children: ["Today in ", s]
                                    }), (0, r.jsxs)("p", {
                                        className: "w-full whitespace-nowrap font-medium text-gray-500",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-base text-black",
                                            children: "\ud83c\udf21\ufe0f"
                                        }), " High:", " ", a ? Math.round(5 * (t.maxTemp - 32) / 9) : t.maxTemp, l, " | Low:", " ", a ? Math.round(5 * (t.minTemp - 32) / 9) : t.minTemp, l]
                                    }), (0, r.jsxs)("p", {
                                        className: "w-full truncate whitespace-nowrap font-medium text-gray-500",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-base text-black",
                                            children: p(t)
                                        }), " ", t.details]
                                    })]
                                })
                            })
                        })]
                    })
                },
                p = function(e) {
                    var t = e.summary;
                    if (t) {
                        if (t.includes("cloud")) return "\u2601\ufe0f";
                        if (t.includes("rain")) return "\ud83c\udf27\ufe0f";
                        if (t.includes("snow") || t.includes("ice")) return "\ud83c\udf28\ufe0f";
                        if (t.includes("sun")) return "\u2600\ufe0f";
                        if (t.includes("thunderstorm")) return "\u26c8\ufe0f"
                    }
                    switch (e.precipitation) {
                        case "humid":
                            return "\ud83d\udca7";
                        case "drizzle":
                            return "\ud83c\udf26\ufe0f";
                        case "rainy":
                            return "\ud83c\udf27\ufe0f";
                        case "snowy":
                            return "\ud83c\udf28\ufe0f";
                        default:
                            return "\u2600\ufe0f"
                    }
                },
                h = s(94310),
                b = s(30381),
                j = s.n(b),
                g = s(41664),
                v = s.n(g),
                w = s(23601),
                y = s(27037),
                k = "https://res.cloudinary.com/flagshipcloud/image/upload/v1706021999/app-assets/tuo1lxh0swcza9jbctzb.png",
                _ = "https://res.cloudinary.com/flagshipcloud/image/upload/v1706026121/app-assets/tlgtseccvojsj1mmzrve.png",
                N = function(e) {
                    var t = e.userData,
                        s = (0, w.Z)().width;
                    return (0, r.jsx)(m.Z, {
                        children: (0, r.jsxs)("div", {
                            className: "mt-4 flex w-full flex-col border-2",
                            children: [(0, r.jsxs)("span", {
                                className: "flex w-full items-center justify-between p-2 md:p-4",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex flex-col gap-1 border border-tts-white",
                                    children: [(0, r.jsxs)("h1", {
                                        className: "text-sm font-semibold text-tts-black",
                                        children: ["Your ", j()(new Date).format("dddd"), " Alta finds are here \u2728"]
                                    }), (0, r.jsx)("p", {
                                        className: "text-xs font-medium text-gray-500",
                                        children: "Let us help you start your day right"
                                    })]
                                }), (0, r.jsx)(v(), {
                                    href: "/shopping",
                                    children: (0, r.jsx)("div", {
                                        onClick: function() {
                                            (0, y.L)("inspo.daily_shopping_announcement_banner.clicked", t.id)
                                        },
                                        className: "flex items-center justify-center bg-tts-black px-3 py-2 text-sm font-semibold uppercase text-white hover:cursor-pointer hover:opacity-90",
                                        children: "Explore"
                                    })
                                })]
                            }), t.is_a_member && (s < 768 ? (0, r.jsx)("img", {
                                src: t.gender && "Menswear" === t.gender ? k : _,
                                alt: "Finds-inspo-asset",
                                className: "mt-2 h-auto w-full object-contain"
                            }) : (0, r.jsxs)("span", {
                                className: "mt-4 flex w-full",
                                children: [(0, r.jsx)("img", {
                                    src: t.gender && "Menswear" == t.gender ? k : _,
                                    alt: "Finds-inspo-asset",
                                    className: "h-auto w-1/2 -scale-x-100 transform object-contain"
                                }), (0, r.jsx)("img", {
                                    src: t.gender && "Menswear" == t.gender ? k : _,
                                    alt: "Finds-inspo-asset",
                                    className: "h-auto w-1/2 object-contain"
                                })]
                            }))]
                        })
                    })
                },
                S = s(1048),
                C = s(32793),
                Z = s(86010),
                O = s(94780),
                z = s(70917),
                D = s(98216),
                T = s(33616),
                M = s(11496),
                L = s(1588),
                I = s(34867);

            function A(e) {
                return (0, I.Z)("MuiCircularProgress", e)
            }(0, L.Z)("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
            const E = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
            let F, P, Y, U, H = e => e;
            const R = 44,
                q = (0, z.F4)(F || (F = H `
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),
                B = (0, z.F4)(P || (P = H `
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),
                G = (0, M.ZP)("span", {
                    name: "MuiCircularProgress",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: s
                        } = e;
                        return [t.root, t[s.variant], t[`color${(0,D.Z)(s.color)}`]]
                    }
                })((({
                    ownerState: e,
                    theme: t
                }) => (0, C.Z)({
                    display: "inline-block"
                }, "determinate" === e.variant && {
                    transition: t.transitions.create("transform")
                }, "inherit" !== e.color && {
                    color: (t.vars || t).palette[e.color].main
                })), (({
                    ownerState: e
                }) => "indeterminate" === e.variant && (0, z.iv)(Y || (Y = H `
      animation: ${0} 1.4s linear infinite;
    `), q))),
                W = (0, M.ZP)("svg", {
                    name: "MuiCircularProgress",
                    slot: "Svg",
                    overridesResolver: (e, t) => t.svg
                })({
                    display: "block"
                }),
                $ = (0, M.ZP)("circle", {
                    name: "MuiCircularProgress",
                    slot: "Circle",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: s
                        } = e;
                        return [t.circle, t[`circle${(0,D.Z)(s.variant)}`], s.disableShrink && t.circleDisableShrink]
                    }
                })((({
                    ownerState: e,
                    theme: t
                }) => (0, C.Z)({
                    stroke: "currentColor"
                }, "determinate" === e.variant && {
                    transition: t.transitions.create("stroke-dashoffset")
                }, "indeterminate" === e.variant && {
                    strokeDasharray: "80px, 200px",
                    strokeDashoffset: 0
                })), (({
                    ownerState: e
                }) => "indeterminate" === e.variant && !e.disableShrink && (0, z.iv)(U || (U = H `
      animation: ${0} 1.4s ease-in-out infinite;
    `), B)));
            var V = n.forwardRef((function(e, t) {
                    const s = (0, T.Z)({
                            props: e,
                            name: "MuiCircularProgress"
                        }),
                        {
                            className: n,
                            color: i = "primary",
                            disableShrink: a = !1,
                            size: l = 40,
                            style: o,
                            thickness: c = 3.6,
                            value: u = 0,
                            variant: d = "indeterminate"
                        } = s,
                        m = (0, S.Z)(s, E),
                        f = (0, C.Z)({}, s, {
                            color: i,
                            disableShrink: a,
                            size: l,
                            thickness: c,
                            value: u,
                            variant: d
                        }),
                        x = (e => {
                            const {
                                classes: t,
                                variant: s,
                                color: r,
                                disableShrink: n
                            } = e, i = {
                                root: ["root", s, `color${(0,D.Z)(r)}`],
                                svg: ["svg"],
                                circle: ["circle", `circle${(0,D.Z)(s)}`, n && "circleDisableShrink"]
                            };
                            return (0, O.Z)(i, A, t)
                        })(f),
                        p = {},
                        h = {},
                        b = {};
                    if ("determinate" === d) {
                        const e = 2 * Math.PI * ((R - c) / 2);
                        p.strokeDasharray = e.toFixed(3), b["aria-valuenow"] = Math.round(u), p.strokeDashoffset = `${((100-u)/100*e).toFixed(3)}px`, h.transform = "rotate(-90deg)"
                    }
                    return (0, r.jsx)(G, (0, C.Z)({
                        className: (0, Z.Z)(x.root, n),
                        style: (0, C.Z)({
                            width: l,
                            height: l
                        }, h, o),
                        ownerState: f,
                        ref: t,
                        role: "progressbar"
                    }, b, m, {
                        children: (0, r.jsx)(W, {
                            className: x.svg,
                            ownerState: f,
                            viewBox: "22 22 44 44",
                            children: (0, r.jsx)($, {
                                className: x.circle,
                                style: p,
                                ownerState: f,
                                cx: R,
                                cy: R,
                                r: (R - c) / 2,
                                fill: "none",
                                strokeWidth: c
                            })
                        })
                    }))
                })),
                J = s(47516),
                X = s(80008),
                K = s.n(X),
                Q = s(44976);
            s(66739);
            var ee = function(e) {
                    var t = e.userData,
                        s = (0, w.Z)().width,
                        n = Math.floor(t.num_processed_closet_uploads / 30 * 100);
                    return (0, r.jsx)(m.Z, {
                        children: (0, r.jsxs)("div", {
                            className: "mt-4 flex w-full flex-col gap-3 border-2 pb-3",
                            children: [(0, r.jsxs)("span", {
                                className: "relative w-full",
                                children: [(0, r.jsx)("img", {
                                    src: "https://res.cloudinary.com/flagshipcloud/image/upload/v1706026121/app-assets/tlgtseccvojsj1mmzrve.png",
                                    alt: "Emoji-background",
                                    className: "object-fit h-auto w-full"
                                }), (0, r.jsx)("div", {
                                    className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                                    children: (0, r.jsx)(V, {
                                        size: s < 768 ? 64 : 128,
                                        variant: "determinate",
                                        value: n
                                    })
                                }), (0, r.jsxs)("p", {
                                    className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[18px]/[20px] font-black italic text-tts-black",
                                    children: [n, "%"]
                                })]
                            }), (0, r.jsxs)("span", {
                                className: "flex w-full flex-col items-center gap-1 px-2 md:px-4",
                                children: [(0, r.jsx)("p", {
                                    className: "text-sm font-bold text-tts-black",
                                    children: "\ud83e\udef6 Alta works best if you add your full closet \ud83e\udef6"
                                }), (0, r.jsx)("p", {
                                    className: "w-[90%] text-center text-xs font-medium text-gray-500",
                                    children: "Start adding your clothes to get the best recommendations on existing outfits and new clothes to buy."
                                })]
                            }), (0, r.jsx)("span", {
                                className: "flex w-full justify-center px-2 md:px-4",
                                children: (0, r.jsx)(v(), {
                                    href: "/collection",
                                    children: (0, r.jsxs)("div", {
                                        onClick: function() {
                                            (0, y.L)("home.pre_membership_cta.clicked", t.id)
                                        },
                                        className: "flex w-full items-center justify-center gap-1 whitespace-nowrap bg-tts-black py-2 text-sm font-semibold uppercase text-white hover:cursor-pointer hover:opacity-90",
                                        children: [(0, r.jsx)(J.poH, {
                                            size: "1.5rem"
                                        }), "Finish adding your closet"]
                                    })
                                })
                            })]
                        })
                    })
                },
                te = s(51667),
                se = function(e) {
                    var t = e.capsule,
                        s = (0, w.Z)().width,
                        i = (0, n.useState)(!1),
                        a = i[0],
                        l = i[1];
                    return (0, r.jsx)(v(), {
                        href: "/capsule/".concat(t.stub),
                        children: (0, r.jsxs)("div", {
                            className: "flex w-full gap-4 md:flex-col md:gap-1",
                            onMouseEnter: function() {
                                return s >= 768 && l(!0)
                            },
                            onMouseLeave: function() {
                                return s >= 768 && l(!1)
                            },
                            onTouchStart: function() {
                                return l(!0)
                            },
                            onTouchEnd: function() {
                                return l(!1)
                            },
                            children: [(0, r.jsx)("img", {
                                className: (0, te.Z)("w-[40%] border-2 md:w-full", a && "border-tts-black"),
                                src: t.thumbnailUrl,
                                alt: "Thumbnail"
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col justify-between",
                                children: [(0, r.jsx)("p", {
                                    className: "text-sm font-medium uppercase",
                                    children: t.title
                                }), (0, r.jsxs)("button", {
                                    className: (0, te.Z)("mt-3 flex items-center gap-1 text-xs font-medium uppercase", a && "underline"),
                                    children: ["view capsule ", (0, r.jsx)(J.OEZ, {
                                        size: "1.25rem"
                                    })]
                                })]
                            })]
                        })
                    })
                },
                re = function(e) {
                    var t = e.title;
                    return (0, r.jsxs)("span", {
                        className: "mt-6 flex w-full items-center py-4 md:py-6",
                        children: [(0, r.jsx)("div", {
                            className: "w-full border-b-[1px]"
                        }), (0, r.jsx)("h1", {
                            className: "whitespace-nowrap px-4 text-2xl font-semibold text-tts-black",
                            children: t
                        }), (0, r.jsx)("div", {
                            className: "w-full border-b-[1px]"
                        })]
                    })
                },
                ne = function(e) {
                    var t = e.capsules,
                        s = (0, w.Z)().width;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [s < 768 && (0, r.jsx)(re, {
                            title: "Capsule Closets"
                        }), (0, r.jsx)(m.Z, {
                            children: (0, r.jsxs)("section", {
                                className: "flex w-full flex-col pb-12 md:mt-6 md:border-b-[1px] md:py-12",
                                children: [s >= 768 && (0, r.jsx)("h1", {
                                    className: "mb-4 text-2xl font-semibold",
                                    children: "Capsule closets"
                                }), (0, r.jsx)("div", {
                                    className: "mt-6 flex flex-col gap-8 md:grid md:grid-cols-3",
                                    children: t.map((function(e, t) {
                                        return (0, r.jsx)(se, {
                                            capsule: e
                                        }, t)
                                    }))
                                })]
                            })
                        })]
                    })
                },
                ie = function(e) {
                    var t = e.userData,
                        s = (0, w.Z)().width,
                        n = function() {
                            (0, y.L)("home.pre_membership_outfit_mock_cta.clicked", t.id)
                        };
                    return (0, r.jsxs)(r.Fragment, {
                        children: [s < 768 && (0, r.jsx)(re, {
                            title: "Outfits made for you"
                        }), (0, r.jsx)(m.Z, {
                            children: (0, r.jsxs)("section", {
                                className: "flex w-full flex-col md:mt-6 md:border-b-[1px] md:py-12",
                                children: [s < 768 ? (0, r.jsxs)("div", {
                                    className: "-mt-1 flex w-full flex-col",
                                    children: [(0, r.jsx)("p", {
                                        className: "text-center text-[12px]/[16px] font-medium text-gray-500",
                                        children: "Alta is in beta, the outfits are not perfect (yet \ud83d\ude09)."
                                    }), (0, r.jsx)("p", {
                                        className: "text-center text-[12px]/[16px] font-medium text-gray-500",
                                        children: "Keep adding items to your closet to make it even better."
                                    })]
                                }) : (0, r.jsx)("h1", {
                                    className: "text-2xl font-semibold",
                                    children: "Outfits made for you"
                                }), (0, r.jsx)("div", {
                                    className: "flex w-full gap-7 py-4 md:grid md:grid-cols-3",
                                    children: s < 768 ? (0, r.jsx)(ae, {
                                        onClickCTA: n
                                    }) : Array.from(Array(3).keys()).map((function(e) {
                                        return (0, r.jsx)(ae, {
                                            onClickCTA: n
                                        }, e)
                                    }))
                                })]
                            })
                        })]
                    })
                },
                ae = function(e) {
                    var t = e.onClickCTA;
                    return (0, r.jsxs)("div", {
                        className: "flex w-full flex-col gap-3",
                        children: [(0, r.jsxs)("div", {
                            className: "relative w-full",
                            children: [(0, r.jsx)("img", {
                                src: "https://res.cloudinary.com/flagshipcloud/image/upload/v1706027910/app-assets/dom5oqfnxyo6gwyiqkk6.png",
                                alt: "Blur-outfit",
                                className: "h-auto w-full"
                            }), (0, r.jsxs)("div", {
                                className: "absolute left-1/2 top-1/2 flex w-4/5 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4",
                                children: [(0, r.jsx)("h1", {
                                    className: "text-[48px]",
                                    children: "\ud83d\udd12"
                                }), (0, r.jsxs)("p", {
                                    className: "text-center text-[16px]/[20px] font-medium text-white",
                                    children: ["Unlock ", (0, r.jsx)("span", {
                                        className: "font-black italic",
                                        children: "personalized looks"
                                    }), " ", "by adding the rest of your closet"]
                                })]
                            })]
                        }), (0, r.jsx)(v(), {
                            href: "/collection",
                            children: (0, r.jsxs)("div", {
                                onClick: t,
                                className: "flex w-full items-center justify-center gap-1 whitespace-nowrap bg-tts-black py-2 text-sm font-semibold uppercase text-white hover:cursor-pointer hover:opacity-90",
                                children: [(0, r.jsx)(J.poH, {
                                    size: "1.5rem"
                                }), "Finish adding your closet"]
                            })
                        })]
                    })
                },
                le = s(6154),
                oe = s(99304),
                ce = s(2261),
                ue = s(43990),
                de = s(25087),
                me = s(47929),
                fe = s(532),
                xe = function(e) {
                    var t, s = e.activeSwiperIndex,
                        i = e.item,
                        a = e.index,
                        l = e.onClickItem,
                        o = (0, w.Z)().width,
                        c = (0, n.useState)(!1),
                        u = c[0],
                        d = c[1];
                    return (0, r.jsxs)("center", {
                        className: "flex w-full flex-col gap-4",
                        onMouseEnter: function() {
                            return o >= 768 && d(!0)
                        },
                        onMouseLeave: function() {
                            return o >= 768 && d(!1)
                        },
                        onTouchStart: function() {
                            return d(!0)
                        },
                        onTouchEnd: function() {
                            return d(!1)
                        },
                        children: [(0, r.jsxs)("div", {
                            className: (0, te.Z)("relative w-full p-[2px]", u && "bg-tts-black"),
                            children: [(0, r.jsx)("img", {
                                src: null !== (t = i.backgroundRemovedImageUrl) && void 0 !== t ? t : i.imageSrc,
                                alt: i.imageAlt,
                                className: (0, te.Z)("aspect-square w-full border-2 bg-tts-white object-contain p-4", u && "border-tts-black")
                            }), (0, r.jsx)("p", {
                                className: "absolute left-3 top-3 text-xs",
                                children: a + 1
                            })]
                        }), (o < 768 ? s === a : u) ? (0, r.jsx)("button", {
                            className: "w-full bg-tts-black py-2 text-sm font-semibold uppercase text-white hover:opacity-90",
                            onClick: function() {
                                return l(i)
                            },
                            children: "Complete the look"
                        }) : (0, r.jsx)("div", {
                            className: "h-9"
                        })]
                    })
                },
                pe = function(e) {
                    var t = e.userData,
                        s = (0, w.Z)().width,
                        i = (0, n.useState)([]),
                        o = i[0],
                        c = i[1],
                        u = (0, n.useState)(!1),
                        d = u[0],
                        f = u[1],
                        x = (0, n.useState)(null),
                        p = x[0],
                        h = x[1],
                        b = (0, n.useState)(null),
                        j = b[0],
                        g = b[1],
                        k = (0, n.useState)(0),
                        _ = k[0],
                        N = k[1],
                        S = (0, n.useState)(!1),
                        C = S[0],
                        Z = S[1],
                        O = (0, n.useState)(!1),
                        z = O[0],
                        D = O[1],
                        T = (0, n.useState)(!1),
                        M = T[0],
                        L = T[1];
                    (0, n.useEffect)((function() {
                        (0, ue.pW)(c, f)
                    }), []);
                    var I = function(e) {
                            (0, y.L)("home.recently_uploaded_closet_items.complete_the_look_tap", t.id), h(e), Z(!0)
                        },
                        A = function() {
                            var e = (0, a.Z)((function(e, s) {
                                var r, n, i, a, o, u;
                                return (0, l.__generator)(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return r = s.hash, n = s.productName, i = s.category, a = s.productBrand, o = s.uploadMethod, t ? [4, le.Z.post("/api/uploadClosetDirect", {
                                                id: t.id,
                                                images: [e],
                                                names: [n],
                                                categories: [i],
                                                brands: [a],
                                                uploadMethod: o,
                                                hashes: [r]
                                            })] : [2];
                                        case 1:
                                            return 200 === (u = l.sent()).status && (0, y.L)("home.recently_uploaded_closet_items.added_item_to_closet", t.id, {
                                                closet_item: n,
                                                closet_url: e,
                                                upload_method: o
                                            }), a && le.Z.post("/api/favoriteBrand", {
                                                product_brand: a
                                            }), (0, ue.pW)(c, f), [2, 200 === u.status]
                                    }
                                }))
                            }));
                            return function(t, s) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        E = function() {
                            return (0, r.jsx)("button", {
                                className: "absolute -left-8 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-tts-black bg-tts-white",
                                onClick: function() {
                                    j && j.slidePrev()
                                },
                                children: (0, r.jsx)(J.gbs, {
                                    size: "1.5rem"
                                })
                            })
                        },
                        F = function() {
                            return (0, r.jsx)("button", {
                                className: "absolute -right-8 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-tts-black bg-tts-white",
                                onClick: function() {
                                    j && j.slideNext()
                                },
                                children: (0, r.jsx)(J.lU2, {
                                    size: "1.5rem"
                                })
                            })
                        },
                        P = o.slice(0, 8);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [s < 768 && (0, r.jsx)(re, {
                            title: "Last uploaded items"
                        }), (0, r.jsxs)(m.Z, {
                            children: [(0, r.jsxs)("section", {
                                className: "flex w-full flex-col md:mt-6 md:border-b-[1px] md:py-12",
                                children: [(0, r.jsxs)("span", {
                                    className: "flex w-full items-center justify-between",
                                    children: [s >= 768 && (0, r.jsx)("h1", {
                                        className: "whitespace-nowrap text-2xl font-semibold",
                                        children: "Last uploaded items"
                                    }), (0, r.jsxs)("span", {
                                        className: "mt-2 flex w-full justify-center gap-3 md:w-min",
                                        children: [(0, r.jsx)(v(), {
                                            href: "/collection?tab=owned",
                                            children: (0, r.jsx)("div", {
                                                onClick: function() {
                                                    (0, y.L)("home.recently_uploaded_closet_items.view_whole_closet_tap", t.id)
                                                },
                                                className: "flex items-center whitespace-nowrap border border-tts-black bg-tts-black px-3 py-2 text-sm font-semibold uppercase text-white hover:cursor-pointer hover:opacity-90",
                                                children: "view whole closet"
                                            })
                                        }), (0, r.jsxs)("button", {
                                            onClick: function() {
                                                (0, y.L)("home.recently_uploaded_closet_items.add_to_closet_tap", t.id), D(!0)
                                            },
                                            className: "flex items-center gap-1 whitespace-nowrap border border-tts-black bg-white px-3 py-2 text-sm font-semibold uppercase text-tts-black hover:bg-gray-100",
                                            children: [(0, r.jsx)(J.poH, {
                                                size: "1.5rem"
                                            }), "add to closet"]
                                        })]
                                    })]
                                }), s >= 768 && (0, r.jsx)("h3", {
                                    className: "-mt-2 flex items-center text-base font-light",
                                    children: "Hover over items to complete the look."
                                }), (0, r.jsxs)("div", {
                                    className: "relative mt-6 flex flex-col gap-4 md:mt-8 md:flex-row md:flex-wrap",
                                    children: [s >= 768 && j && !d && o.length > 0 && (0, r.jsxs)(r.Fragment, {
                                        children: [0 !== _ && (0, r.jsx)(E, {}), _ < P.length - 4 && (0, r.jsx)(F, {})]
                                    }), d ? (0, r.jsx)("div", {
                                        className: "flex grid w-full grid-cols-2 gap-3 md:grid-cols-4 md:gap-7",
                                        children: Array.from(Array(s < 640 ? 2 : 4).keys()).map((function(e) {
                                            return (0, r.jsx)("div", {
                                                className: "aspect-square w-full animate-pulse bg-gray-200"
                                            }, e)
                                        }))
                                    }) : 0 === P.length ? (0, r.jsx)("div", {
                                        className: "-mt-4 flex flex-col gap-4",
                                        children: (0, r.jsx)("p", {
                                            className: "text-sm",
                                            children: "Add more items to your closet to see how to style them with items you own."
                                        })
                                    }) : (0, r.jsx)("div", {
                                        className: "w-full",
                                        children: (0, r.jsx)(ce.tq, {
                                            pagination: !1,
                                            modules: [oe.Gk],
                                            slidesPerView: s < 768 ? 1.5 : 4,
                                            spaceBetween: s < 768 ? 12 : 28,
                                            onSwiper: function(e) {
                                                g(e)
                                            },
                                            centeredSlides: s < 768,
                                            onActiveIndexChange: function(e) {
                                                return N(e.activeIndex)
                                            },
                                            mousewheel: {
                                                forceToAxis: !0
                                            },
                                            children: P.map((function(e, t) {
                                                return (0, r.jsx)(ce.o5, {
                                                    children: (0, r.jsx)(xe, {
                                                        item: e,
                                                        index: t,
                                                        activeSwiperIndex: _,
                                                        onClickItem: I
                                                    })
                                                }, t)
                                            }))
                                        })
                                    })]
                                })]
                            }), (0, r.jsx)(fe.Z, {
                                page: "home",
                                context: "recently_uploaded_closet_items",
                                isOpen: C,
                                setIsOpen: Z,
                                item: p,
                                userData: t
                            }), (0, r.jsx)(de.Z, {
                                userData: t,
                                onAddItem: A,
                                open: z,
                                setOpen: D,
                                setIsFlagshipConciergeModalOpen: L
                            }), (0, r.jsx)(me.Z, {
                                isOpen: M,
                                setIsOpen: L
                            })]
                        })]
                    })
                },
                he = s(29815),
                be = s(78561),
                je = s(8002),
                ge = s(69409),
                ve = s(35914);

            function we(e) {
                var t = e.userData,
                    s = e.outfitWithPiecesAndStyle,
                    i = e.activeSwiperIndex,
                    o = e.slideIndex,
                    c = e.onClickCustomizeOutfit,
                    u = e.onHideOutfit,
                    d = e.page,
                    m = e.context,
                    f = (0, w.Z)().width,
                    x = (0, je.w)().showSnackbar,
                    p = s.outfit,
                    h = s.style,
                    b = s.outfitId,
                    j = s.collageImageUrl,
                    g = s.type,
                    v = s.stylistNotes,
                    k = (0, n.useState)(!1),
                    _ = k[0],
                    N = k[1],
                    S = (0, n.useState)(!1),
                    C = S[0],
                    Z = S[1],
                    O = (0, n.useState)(!1),
                    z = O[0],
                    D = O[1],
                    T = (0, n.useState)(!1),
                    M = T[0],
                    L = T[1],
                    I = (0, n.useState)(!0),
                    A = I[0],
                    E = I[1];
                (0, n.useEffect)((function() {
                    var e = function() {
                        var e = (0, a.Z)((function() {
                            var e, t;
                            return (0, l.__generator)(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return s.trys.push([0, 3, , 4]), [4, fetch("/api/favoritedEventOutfits?" + new URLSearchParams({
                                            daily_outfit_id: b
                                        }), {
                                            method: "GET"
                                        })];
                                    case 1:
                                        if (!(e = s.sent()).ok) throw new Error("Could not fetch favorited outfits");
                                        return [4, e.json()];
                                    case 2:
                                        return [2, s.sent().length];
                                    case 3:
                                        return t = s.sent(), console.error(t), [2, 0];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e().then((function(e) {
                        D(e && 1 === e)
                    }))
                }), [b]), (0, n.useEffect)((function() {
                    f < 768 && i !== o && E(!0)
                }), [i]);
                var F = t && t.zip_code ? Q.lookup(t.zip_code) : null,
                    P = F ? K().tz(K()(), F).format("YYYY-MM-DD") : K()().format("YYYY-MM-DD");
                return (0, r.jsxs)("div", {
                    className: "flex w-full flex-col gap-4 md:gap-1",
                    onMouseEnter: function() {
                        return f >= 768 && N(!0)
                    },
                    onMouseLeave: function() {
                        return f >= 768 && N(!1)
                    },
                    onTouchStart: function() {
                        return N(!0)
                    },
                    onTouchEnd: function() {
                        return N(!1)
                    },
                    children: [(0, r.jsx)("center", {
                        className: "flex w-full flex-col hover:cursor-pointer",
                        onClick: function() {
                            t && (0, y.L)("".concat(d, ".").concat(m, ".viewed_outfit_details"), t.id, {
                                outfit: s
                            }), Z(!0)
                        },
                        children: (0, r.jsxs)("div", {
                            className: (0, te.Z)("relative w-full p-[2px]", _ && "bg-tts-black"),
                            children: [(0, r.jsx)("img", {
                                src: j,
                                className: (0, te.Z)("w-full border-2 bg-tts-white p-4 md:p-[26px]", _ && "border-tts-black"),
                                alt: "Collage"
                            }), _ && (0, r.jsx)(ve.gT, {
                                children: (0, r.jsx)("p", {
                                    className: "absolute left-3 top-2 text-sm font-bold uppercase md:text-lg",
                                    children: "ALTA"
                                })
                            })]
                        })
                    }), (0, r.jsxs)("span", {
                        className: "z-10 flex w-full items-center justify-between gap-1",
                        children: [(0, r.jsx)("p", {
                            className: (0, te.Z)("truncate pl-1 text-sm font-medium text-tts-black", _ && "font-semibold"),
                            children: h
                        }), (0, r.jsxs)("span", {
                            className: "flex shrink-0 items-center gap-[2px]",
                            children: [(0, r.jsx)("button", {
                                className: "flex aspect-square h-8 items-center justify-center hover:cursor-pointer sm:hover:bg-gray-200",
                                onClick: function() {
                                    t && (z ? ((0, y.L)("".concat(d, ".").concat(m, ".unfavorited_outfit"), t.id, {
                                        daily_outfit_id: b,
                                        outfit_event: h
                                    }), x("Outfit removed from your profile"), fetch("/api/unfavoriteEventOutfit", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            daily_outfit_id: b
                                        })
                                    }).then((function(e) {
                                        return 200 === e.status ? e.json() : null
                                    })).catch((function(e) {
                                        return console.error(e, "Outfit could not be unfavorited"), null
                                    }))) : ((0, y.L)("".concat(d, ".").concat(m, ".favorited_outfit"), t.id, {
                                        daily_outfit_id: b,
                                        outfit_event: h
                                    }), x("Outfit saved to My Collection"), fetch("/api/favoritedEventOutfits", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            modifier: "",
                                            event: h,
                                            date: P ? K()(P).format("YYYY-MM-DD") : null,
                                            user_first_name: t.first_name,
                                            pieces: p,
                                            outfits_seen_before_favorited: 3,
                                            style: h,
                                            daily_outfit_id: b
                                        })
                                    }).then((function(e) {
                                        return 200 === e.status ? e.json() : null
                                    })).catch((function(e) {
                                        return console.error(e, "Outfit could not be favorited"), null
                                    }))), D((function(e) {
                                        return !e
                                    })))
                                },
                                children: z ? (0, r.jsx)(J.SEb, {
                                    size: "1.5rem",
                                    fill: "#FF3040"
                                }) : (0, r.jsx)(J.kTx, {
                                    size: "1.5rem",
                                    fill: "black"
                                })
                            }), (0, r.jsx)("button", {
                                className: "flex aspect-square h-8 items-center justify-center hover:cursor-pointer sm:hover:bg-gray-200",
                                onClick: function() {
                                    L(!0)
                                },
                                children: (0, r.jsx)(J.MZj, {
                                    size: "1.5rem",
                                    fill: "black"
                                })
                            }), (0, r.jsx)("button", {
                                className: "flex aspect-square h-8 items-center justify-center hover:cursor-pointer sm:hover:bg-gray-200",
                                onClick: function() {
                                    return c(s)
                                },
                                children: (0, r.jsx)(J.n2B, {
                                    size: "1.5rem",
                                    fill: "black"
                                })
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex w-full flex-col p-1 pb-6",
                        children: [(0, r.jsxs)("button", {
                            className: "mb-2 flex w-full items-center justify-between",
                            onClick: function() {
                                return E((function(e) {
                                    return !e
                                }))
                            },
                            children: [(0, r.jsx)("h1", {
                                className: "whitespace-nowrap text-sm font-medium text-tts-black",
                                children: "Your stylist says:"
                            }), A ? (0, r.jsx)(J.OrA, {
                                size: "1.25rem"
                            }) : (0, r.jsx)(J.jRD, {
                                size: "1.25rem"
                            })]
                        }), (0, r.jsx)("p", {
                            className: (0, te.Z)("text-sm font-light", A && "line-clamp-3"),
                            children: v
                        })]
                    }), (0, r.jsx)(ge.Z, {
                        isOpen: C,
                        setIsOpen: Z,
                        userData: t,
                        outfit: s,
                        page: d,
                        context: m
                    }), (0, r.jsx)(be.Z, {
                        isOpen: M,
                        pieces: p,
                        onClose: function() {
                            L(!1)
                        },
                        onSubmit: function(e) {
                            var s = e.additionalFeedback,
                                r = e.dislikedPieces;
                            t && ((0, y.L)("".concat(d, ".").concat(m, ".disliked_outfit"), t.id, {
                                daily_outfit_id: b,
                                outfit_event: h
                            }), fetch("/api/dislikeOutfits", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    outfit_type: g,
                                    event: h,
                                    date: P ? K()(P).format("YYYY-MM-DD") : null,
                                    disliked_pieces: r,
                                    style: h,
                                    user_id: t.id,
                                    outfit_id: b,
                                    feedback: s
                                })
                            }).catch((function(e) {
                                return console.error(e, "Outfit could not be disliked"), null
                            })), u(b))
                        }
                    })]
                })
            }
            var ye = s(35564),
                ke = s(12367),
                _e = s(68239),
                Ne = s(38824),
                Se = function(e) {
                    var t = e.userData,
                        s = e.weather,
                        i = (0, w.Z)().width,
                        a = (0, n.useState)([]),
                        l = a[0],
                        o = a[1],
                        c = (0, n.useState)(null),
                        u = c[0],
                        d = c[1],
                        f = (0, n.useState)([]),
                        x = f[0],
                        p = f[1],
                        b = (0, n.useState)(!1),
                        j = b[0],
                        g = b[1],
                        k = (0, n.useState)(!1),
                        _ = k[0],
                        N = k[1],
                        S = (0, n.useState)(!1),
                        C = S[0],
                        Z = S[1],
                        O = (0, n.useState)(null),
                        z = O[0],
                        D = O[1],
                        T = (0, n.useState)(0),
                        M = T[0],
                        L = T[1];
                    (0, n.useEffect)((function() {
                        t && t.is_a_member && (g(!0), (0, h.Lt)().then((function(e) {
                            if (!e) throw new Error("Could not fetch weekly outfits from backend or user is not a member");
                            var t = (0, Ne.mV)(e.outfits).filter((function(e) {
                                return !!e.collageImageUrl
                            }));
                            o(t)
                        })).catch((function(e) {
                            console.error(e)
                        })).finally((function() {
                            g(!1)
                        })))
                    }), []), (0, n.useEffect)((function() {
                        var e = setTimeout((function() {
                            Z(!0)
                        }), 4e3);
                        return function() {
                            return clearTimeout(e)
                        }
                    }), []);
                    var I = function() {
                            return (0, r.jsx)("button", {
                                className: "absolute -left-8 top-1/2 z-20 flex items-center justify-center rounded-full border border-tts-black bg-tts-white",
                                onClick: function() {
                                    z && z.slidePrev()
                                },
                                children: (0, r.jsx)(J.gbs, {
                                    size: "1.5rem"
                                })
                            })
                        },
                        A = function() {
                            return (0, r.jsx)("button", {
                                className: "absolute -right-8 top-1/2 z-20 flex items-center justify-center rounded-full border border-tts-black bg-tts-white",
                                onClick: function() {
                                    z && z.slideNext()
                                },
                                children: (0, r.jsx)(J.lU2, {
                                    size: "1.5rem"
                                })
                            })
                        },
                        E = function(e) {
                            (0, y.L)("weekly_outfits.customize_outfit", t.id, {
                                daily_outfit_id: e.outfitId,
                                outfit_name: "".concat(e.style)
                            }), d(e), N(!0)
                        },
                        F = l.filter((function(e) {
                            return !x.includes(e.outfitId)
                        }));
                    return (0, r.jsxs)(r.Fragment, {
                        children: [i < 768 && (0, r.jsx)(re, {
                            title: "Outfits made for you"
                        }), (0, r.jsx)(m.Z, {
                            children: (0, r.jsxs)("section", {
                                className: "flex w-full flex-col md:mt-6 md:border-b-[1px] md:py-12",
                                children: [i < 768 ? (0, r.jsxs)("div", {
                                    className: "-mt-1 flex w-full flex-col",
                                    children: [(0, r.jsx)("p", {
                                        className: "text-center text-[12px]/[16px] font-medium text-gray-500",
                                        children: "Alta is in beta, the outfits are not perfect (yet \ud83d\ude09)."
                                    }), t.num_processed_closet_uploads < 100 && (0, r.jsx)("p", {
                                        className: "text-center text-[12px]/[16px] font-medium text-gray-500",
                                        children: "Keep adding items to your closet to make it even better."
                                    })]
                                }) : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("h1", {
                                        className: "text-2xl font-semibold",
                                        children: "Outfits made for you"
                                    }), (0, r.jsxs)("p", {
                                        className: "flex items-center text-base font-light",
                                        children: ["Click ", (0, r.jsx)(J.n2B, {
                                            size: "1rem",
                                            fill: "black",
                                            className: "mx-1"
                                        }), " to edit an outfit."]
                                    })]
                                }), (0, r.jsxs)("span", {
                                    className: "mt-2 flex w-full items-center gap-3 overflow-x-auto py-2 md:justify-end",
                                    children: [(0, r.jsx)(v(), {
                                        href: "/create",
                                        children: (0, r.jsx)("div", {
                                            className: "shrink-0 border border-tts-black bg-white px-3 py-2 text-sm font-semibold uppercase text-tts-black hover:cursor-pointer hover:bg-gray-100",
                                            children: "Log my ootd"
                                        })
                                    }), (0, r.jsx)(v(), {
                                        href: "/create?type=event%20styling",
                                        children: (0, r.jsx)("div", {
                                            className: "shrink-0 border border-tts-black bg-white px-3 py-2 text-sm font-semibold uppercase text-tts-black hover:cursor-pointer hover:bg-gray-100",
                                            children: "style me for an event"
                                        })
                                    }), (0, r.jsx)(v(), {
                                        href: "/collection?tab=saved",
                                        children: (0, r.jsx)("div", {
                                            className: "shrink-0 border border-tts-black bg-tts-black px-3 py-2 text-sm font-semibold uppercase text-white hover:cursor-pointer hover:opacity-90",
                                            children: "view all outfits"
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "relative flex flex-col gap-4 py-4 md:flex-row md:flex-wrap",
                                    children: [i >= 640 && z && !j && F.length > 3 && (0, r.jsxs)(r.Fragment, {
                                        children: [0 !== M && (0, r.jsx)(I, {}), M < F.length - 3 && (0, r.jsx)(A, {})]
                                    }), j ? (0, r.jsxs)("span", {
                                        className: "flex w-full flex-col gap-3",
                                        children: [C && (0, r.jsxs)("span", {
                                            className: "flex w-full items-center justify-center gap-3",
                                            children: [(0, r.jsx)(_e.Z, {
                                                size: "20px"
                                            }), (0, r.jsxs)("p", {
                                                className: "text-[12px]/[16px] font-medium text-gray-500",
                                                children: ["Thank you for uploading a big part of your closet. We're creating", " ", (0, r.jsx)("span", {
                                                    className: "underline",
                                                    children: "fresh outfits"
                                                }), ", inspired by your new additions."]
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: "flex w-full md:grid md:grid-cols-3 md:gap-6",
                                            children: i < 640 ? (0, r.jsx)(ke.Z, {}) : [0, 1, 2].map((function(e) {
                                                return (0, r.jsx)(ke.Z, {}, e)
                                            }))
                                        })]
                                    }) : (0, r.jsx)("div", {
                                        className: "w-full",
                                        children: (0, r.jsx)(ce.tq, {
                                            pagination: i < 640,
                                            modules: [oe.tl, oe.Gk],
                                            style: {
                                                "--swiper-pagination-bottom": "0px",
                                                "--swiper-pagination-color": "black",
                                                "--swiper-pagination-bullet-inactive-color": "#999999",
                                                "--swiper-pagination-bullet-inactive-opacity": "1",
                                                "--swiper-pagination-bullet-size": "10px",
                                                "--swiper-pagination-bullet-horizontal-gap": "2px"
                                            },
                                            slidesPerView: i < 640 ? 1 : 3,
                                            spaceBetween: i < 640 ? 10 : 30,
                                            centeredSlides: i < 640,
                                            onSwiper: function(e) {
                                                D(e)
                                            },
                                            onActiveIndexChange: function(e) {
                                                L(e.activeIndex)
                                            },
                                            mousewheel: {
                                                forceToAxis: !0
                                            },
                                            children: F.map((function(e, s) {
                                                return (0, r.jsx)(ce.o5, {
                                                    children: (0, r.jsx)(we, {
                                                        userData: t,
                                                        page: "home",
                                                        activeSwiperIndex: M,
                                                        slideIndex: s,
                                                        context: "weekly_outfits",
                                                        outfitWithPiecesAndStyle: e,
                                                        onClickCustomizeOutfit: E,
                                                        onHideOutfit: function(e) {
                                                            return p((function(t) {
                                                                return (0, he.Z)(t).concat([e])
                                                            }))
                                                        }
                                                    })
                                                }, s)
                                            }))
                                        })
                                    }), F.length > 0 && (0, r.jsx)(ye.Z, {
                                        weather: s,
                                        isOpen: _,
                                        setIsOpen: N,
                                        userData: t,
                                        setNumCoCreatedOutfits: function() {
                                            return null
                                        },
                                        context: "daily look",
                                        startOutfit: null === u || void 0 === u ? void 0 : u.outfit,
                                        startStep: 1,
                                        startDescription: null === u || void 0 === u ? void 0 : u.stylistNotes,
                                        startLabel: null === u || void 0 === u ? void 0 : u.style
                                    })]
                                })]
                            })
                        })]
                    })
                },
                Ce = s(29444),
                Ze = s(31618);

            function Oe(e) {
                var t = e.editorials,
                    s = (0, n.useState)(null),
                    i = s[0],
                    f = s[1],
                    p = (0, n.useState)(""),
                    b = p[0],
                    j = p[1],
                    g = (0, n.useState)(!1),
                    v = g[0],
                    w = g[1],
                    k = (0, n.useState)(null),
                    _ = k[0],
                    S = k[1],
                    C = (0, n.useContext)(Ze.St),
                    Z = (0, u.useRouter)(),
                    O = (0, o.G6)();
                return (0, n.useEffect)((function() {
                    var e = function() {
                        var e = (0, a.Z)((function() {
                            return (0, l.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, O.session.revoke()];
                                    case 1:
                                        return e.sent(), Z.push("/login"), [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    ((0, c.getCookie)("stytch_session_jwt") || e(), C) && (null !== (0, Ce.determineStepFromUserData)(C) ? Z.push("/authenticate") : ((0, y.L)("inspo.viewed", C.id), (0, h.Tb)(C, w, j, f)))
                }), []), C ? (0, r.jsxs)(m.Z, {
                    hasMaxWidth: !1,
                    children: [(0, r.jsx)(x, {
                        weather: i,
                        userData: C,
                        cityAndState: b,
                        isLoading: v
                    }), (0, r.jsx)(N, {
                        userData: C
                    }), C && (C.is_a_member ? (0, r.jsx)(Se, {
                        userData: C,
                        weather: i
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(ee, {
                            userData: C
                        }), (0, r.jsx)(ie, {
                            userData: C
                        })]
                    })), C && (0, r.jsx)(pe, {
                        userData: C,
                        weather: i
                    }), (0, r.jsx)(ne, {
                        capsules: t
                    }), (0, r.jsx)(d.Z, {
                        page: "home",
                        userData: C,
                        completeTheLookItem: _,
                        setCompleteTheLookItem: S
                    })]
                }) : null
            }
            var ze = s(38930),
                De = s(29988),
                Te = !0;

            function Me(e) {
                var t = e.editorials,
                    s = (0, n.useContext)(Ze.St);
                return null === s || s && s.is_on_waitlist ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.Z, {}), (0, r.jsx)(ze.Z, {})]
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.Z, {}), (0, r.jsx)(De.Z, {
                        children: (0, r.jsx)(Oe, {
                            editorials: t
                        })
                    })]
                })
            }
            var Le = function(e) {
                var t;
                return e.map((function(e) {
                    return {
                        id: e.id,
                        createdAt: e.created_at,
                        title: e.title,
                        thumbnailUrl: e.thumbnail_url,
                        type: e.type,
                        audienceGender: e.audience_gender,
                        season: e.season,
                        stub: e.stub,
                        headerAssetUrl: e.header_asset_url,
                        mobileHeaderAssetUrl: e.mobile_header_asset_url,
                        subtitle: null !== (t = e.subtitle) && void 0 !== t ? t : "",
                        dressCode: e.dress_code
                    }
                }))
            }
        }
    },
    function(e) {
        e.O(0, [9866, 3714, 602, 6817, 2211, 6425, 3990, 2292, 925, 5564, 4805, 9774, 2888, 179], (function() {
            return t = 48312, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);