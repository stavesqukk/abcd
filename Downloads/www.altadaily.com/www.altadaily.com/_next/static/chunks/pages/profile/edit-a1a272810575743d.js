(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5991], {
        13914: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/profile/edit", function() {
                return r(9673)
            }])
        },
        30030: function(e, t, r) {
            "use strict";
            var s = r(85893),
                n = r(11163),
                a = r(47516);
            t.Z = function(e) {
                var t = e.showText,
                    r = (0, n.useRouter)();
                return (0, s.jsxs)("div", {
                    className: "absolute flex items-center gap-2 hover:cursor-pointer",
                    onClick: function() {
                        return r.back()
                    },
                    children: [(0, s.jsx)(a.gbs, {
                        size: "2rem"
                    }), t && (0, s.jsx)("button", {
                        type: "button",
                        className: "text-xs font-light uppercase",
                        children: "Back"
                    })]
                })
            }
        },
        45284: function(e, t, r) {
            "use strict";
            r.d(t, {
                s: function() {
                    return i
                },
                t: function() {
                    return o
                }
            });
            var s = r(47568),
                n = r(70655),
                a = r(67294);

            function i(e, t, r) {
                (0, a.useEffect)((function() {
                    var s = setTimeout((function() {
                        e.apply(void 0, r)
                    }), t);
                    return function() {
                        clearTimeout(s)
                    }
                }), r)
            }
            var l = Math.PI / 180;

            function o(e, t, r) {
                return c.apply(this, arguments)
            }

            function c() {
                return c = (0, s.Z)((function(e, t, r) {
                    var s, a, i, o, c, u, d, f, x, h, p, m = arguments;
                    return (0, n.__generator)(this, (function(n) {
                        if (s = m.length > 3 && void 0 !== m[3] ? m[3] : 1, a = m.length > 4 && void 0 !== m[4] ? m[4] : 0, !(i = t.getContext("2d"))) throw new Error("No 2d context");
                        return o = e.naturalWidth / e.width, c = e.naturalHeight / e.height, u = window.devicePixelRatio, t.width = Math.floor(r.width * o * u), t.height = Math.floor(r.height * c * u), i.scale(u, u), i.imageSmoothingQuality = "high", d = r.x * o, f = r.y * c, x = a * l, h = e.naturalWidth / 2, p = e.naturalHeight / 2, i.save(), i.translate(-d, -f), i.translate(h, p), i.rotate(x), i.scale(s, s), i.translate(-h, -p), i.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, e.naturalWidth, e.naturalHeight), i.restore(), [2]
                    }))
                })), c.apply(this, arguments)
            }
        },
        59081: function(e, t, r) {
            "use strict";
            var s = r(85893),
                n = r(44080),
                a = r(26064),
                i = r(67294),
                l = r(51649);
            t.Z = function(e) {
                var t = e.open,
                    r = e.setOpen,
                    o = e.options,
                    c = e.children;
                return (0, s.jsx)(n.u.Root, {
                    show: t,
                    as: i.Fragment,
                    children: (0, s.jsxs)(a.V, {
                        as: "div",
                        className: "relative z-50",
                        onClose: r || function() {},
                        children: [(0, s.jsx)(n.u.Child, {
                            as: i.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, s.jsx)("div", {
                                className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            })
                        }), (0, s.jsx)("div", {
                            className: "fixed inset-0 z-50 overflow-y-auto",
                            children: (0, s.jsx)("div", {
                                className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                                children: (0, s.jsx)(n.u.Child, {
                                    as: i.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: (0, s.jsxs)(a.V.Panel, {
                                        className: "relative transform overflow-hidden  bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all  sm:my-8 sm:w-full sm:max-w-md sm:p-6 md:max-w-".concat("large" === (null === o || void 0 === o ? void 0 : o.modalWidth) ? "3xl" : "md"),
                                        children: [r && (0, s.jsx)("div", {
                                            className: "absolute right-0 top-0 hidden pr-4 pt-4 sm:block",
                                            children: (0, s.jsxs)("button", {
                                                type: "button",
                                                className: " text-neutral-400 hover:text-neutral-500 focus:outline-none ",
                                                onClick: function() {
                                                    return r(!1)
                                                },
                                                children: [(0, s.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "Close"
                                                }), (0, s.jsx)(l.QAE, {
                                                    className: "h-6 w-6",
                                                    "aria-hidden": "true"
                                                })]
                                            })
                                        }), o && o.headerText && (0, s.jsx)(a.V.Title, {
                                            as: "p",
                                            className: "text-base font-medium uppercase tracking-tight text-black",
                                            children: o.headerText
                                        }), o && o.subHeaderText && (0, s.jsx)("div", {
                                            className: "text-xs uppercase",
                                            children: o.subHeaderText
                                        }), c]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        9673: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            });
            var s = r(85893),
                n = r(67294),
                a = r(47568),
                i = r(70655),
                l = r(69661),
                o = r(83868),
                c = r.n(o),
                u = r(30030),
                d = r(6154),
                f = r(82084),
                x = r(45284),
                h = r(74764),
                p = r(59081),
                m = function(e) {
                    var t = e.isOpen,
                        r = e.setOpen,
                        l = e.userId,
                        o = (0, n.useState)(""),
                        c = o[0],
                        u = o[1],
                        m = (0, n.useState)(""),
                        v = m[0],
                        b = m[1],
                        g = (0, n.useState)(!1),
                        j = g[0],
                        w = g[1],
                        y = (0, n.useState)(),
                        N = y[0],
                        _ = y[1],
                        k = (0, n.useState)(),
                        C = k[0],
                        Z = k[1],
                        S = (0, n.useState)(!1),
                        E = S[0],
                        T = S[1],
                        F = (0, n.useRef)(null),
                        z = (0, n.useRef)(""),
                        A = (0, n.useRef)(null);
                    (0, n.useEffect)((function() {
                        t || (u(""), b(""), _(void 0), Z(void 0), T(!1))
                    }), [t]), (0, x.s)((0, a.Z)((function() {
                        return (0, i.__generator)(this, (function(e) {
                            return (null === C || void 0 === C ? void 0 : C.width) && (null === C || void 0 === C ? void 0 : C.height) && A.current && F.current && (0, x.t)(A.current, F.current, C), [2]
                        }))
                    })), 100, [C]);
                    var R = function() {
                            var e = (0, a.Z)((function(e) {
                                var t, r, s, n, a, l;
                                return (0, i.__generator)(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            w(!0), t = e, (r = new FormData).append("file", t), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, d.Z.post("https://api.cloudinary.com/v1_1/".concat("flagshipcloud", "/image/upload"), r, {
                                                headers: {
                                                    "Content-Type": "multipart/form-data"
                                                },
                                                params: {
                                                    upload_preset: "flagship_upload_profile"
                                                }
                                            })];
                                        case 2:
                                            return s = i.sent(), n = s.data, a = n.secure_url.replace(/\.[^/.]+$/, ".png"), w(!1), [2, a];
                                        case 3:
                                            return l = i.sent(), w(!1), console.error(l, "Error uploading file to Cloudinary"), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        U = function() {
                            var e = (0, a.Z)((function() {
                                return (0, i.__generator)(this, (function(e) {
                                    if (!F.current) throw new Error("Crop canvas does not exist");
                                    return F.current.toBlob(function() {
                                        var e = (0, a.Z)((function(e) {
                                            var t;
                                            return (0, i.__generator)(this, (function(s) {
                                                if (!e) throw new Error("Failed to create blob");
                                                return z.current && URL.revokeObjectURL(z.current), z.current = URL.createObjectURL(e), t = new File([e], "".concat(l, ".png")), w(!0), R(t).then(function() {
                                                    var e = (0, a.Z)((function(e) {
                                                        return (0, i.__generator)(this, (function(t) {
                                                            switch (t.label) {
                                                                case 0:
                                                                    return e ? (u(e), [4, (0, h.N)(l, {
                                                                        profile_photo_url: e
                                                                    })]) : [3, 2];
                                                                case 1:
                                                                    return [2, 200 === t.sent().status ? "success" : "error"];
                                                                case 2:
                                                                    return [2, "error"];
                                                                case 3:
                                                                    return [2]
                                                            }
                                                        }))
                                                    }));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()).then((function(e) {
                                                    w(!1), "success" === e ? r(!1) : T(!0)
                                                })), [2]
                                            }))
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), [2]
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, s.jsx)(p.Z, {
                        open: t,
                        setOpen: r,
                        children: (0, s.jsxs)("div", {
                            className: "flex w-full flex-col gap-4 pb-4 pt-6",
                            children: [!v && (0, s.jsx)("div", {
                                className: "relative mx-auto my-8 flex h-52 w-full flex-col items-center justify-center border border-solid border-gray-100 text-gray-400 shadow-md",
                                children: "Your image"
                            }), v && (0, s.jsx)("div", {
                                className: "flex w-full items-center justify-center",
                                children: (0, s.jsx)(f.ZP, {
                                    crop: N,
                                    onChange: function(e, t) {
                                        return _(t)
                                    },
                                    onComplete: function(e) {
                                        return Z(e)
                                    },
                                    aspect: 1,
                                    children: (0, s.jsx)("img", {
                                        ref: A,
                                        alt: "Crop me",
                                        src: v,
                                        onLoad: function(e) {
                                            var t, r, s, n = e.currentTarget,
                                                a = n.width,
                                                i = n.height;
                                            _((t = a, r = i, s = 1, (0, f._H)((0, f.YG)({
                                                unit: "%",
                                                width: 90
                                            }, s, t, r), t, r)))
                                        },
                                        className: "w-full object-contain"
                                    })
                                })
                            }), C && (0, s.jsxs)("div", {
                                className: "space-between flex w-full items-center gap-4",
                                children: [(0, s.jsx)("canvas", {
                                    ref: F,
                                    style: {
                                        border: "1px solid black",
                                        width: "50%"
                                    }
                                }), C && (0, s.jsx)("button", {
                                    className: "w-full border border-black bg-gray-100 py-2 text-center text-sm font-light uppercase hover:bg-gray-200",
                                    onClick: function() {
                                        return U()
                                    },
                                    disabled: j,
                                    children: j ? "Uploading..." : c ? E ? "Error" : "Uploaded!" : "Upload"
                                })]
                            }), (0, s.jsx)("div", {
                                className: "flex w-full items-center justify-center bg-black py-2 text-center text-sm font-light uppercase text-white",
                                children: (0, s.jsxs)("label", {
                                    htmlFor: "profile-photo-upload",
                                    className: "custom-file-upload px-3 text-sm font-semibold hover:cursor-pointer",
                                    children: ["Browse from device", (0, s.jsx)("input", {
                                        disabled: j,
                                        id: "profile-photo-upload",
                                        type: "file",
                                        accept: "image/*",
                                        onChange: function(e) {
                                            if (e.target.files && e.target.files.length > 0) {
                                                _(void 0);
                                                var t = new FileReader;
                                                t.addEventListener("load", (function() {
                                                    var e;
                                                    return b((null === (e = t.result) || void 0 === e ? void 0 : e.toString()) || "")
                                                })), t.readAsDataURL(e.target.files[0])
                                            }
                                        },
                                        className: "hidden"
                                    })]
                                })
                            })]
                        })
                    })
                },
                v = r(68239),
                b = r(27037),
                g = r(51667),
                j = function(e) {
                    var t = e.userData,
                        r = (0, n.useState)(!1),
                        a = r[0],
                        i = r[1],
                        o = "".concat(t.first_name ? t.first_name.charAt(0) : "").concat(t.last_name ? t.last_name.charAt(0) : "");
                    return (0, s.jsxs)("div", {
                        className: "flex w-[90%] max-w-[600px] flex-col items-center gap-4",
                        children: [(0, s.jsxs)("div", {
                            className: "grid-3 w-full text-center text-lg font-bold uppercase",
                            children: [(0, s.jsx)(u.Z, {
                                showText: !1
                            }), (0, s.jsx)("div", {
                                children: "Edit profile"
                            }), (0, s.jsx)("div", {})]
                        }), t.profile_photo_url ? (0, s.jsx)(l.Z, {
                            sx: {
                                width: 60,
                                height: 60
                            },
                            src: t.profile_photo_url
                        }) : (0, s.jsx)(l.Z, {
                            sx: {
                                width: 60,
                                height: 60
                            },
                            children: o
                        }), (0, s.jsx)("button", {
                            className: "w-[170px] border border-gray-300 px-4 py-1 text-xs font-light uppercase hover:bg-gray-200",
                            onClick: function() {
                                return i(!0)
                            },
                            children: "Edit profile photo"
                        }), (0, s.jsx)(w, {
                            userData: t
                        }), (0, s.jsx)(m, {
                            isOpen: a,
                            setOpen: i,
                            userId: t.id
                        })]
                    })
                },
                w = function(e) {
                    var t = e.userData,
                        r = (0, n.useState)(t.first_name || ""),
                        l = r[0],
                        o = r[1],
                        u = (0, n.useState)(t.last_name || ""),
                        d = u[0],
                        f = u[1],
                        x = (0, n.useState)(t.zip_code || ""),
                        p = x[0],
                        m = x[1],
                        j = (0, n.useState)(t.bio || ""),
                        w = j[0],
                        y = j[1],
                        N = (0, n.useState)(!1),
                        _ = N[0],
                        k = N[1],
                        C = (0, n.useState)(!1),
                        Z = C[0],
                        S = C[1],
                        E = (0, n.useState)(!1),
                        T = E[0],
                        F = E[1],
                        z = (0, n.useState)(t.email || ""),
                        A = z[0],
                        R = z[1],
                        U = (0, n.useState)(t.city || ""),
                        O = U[0],
                        H = U[1],
                        L = (0, n.useState)(t.is_celsius || !1),
                        D = L[0],
                        P = L[1],
                        I = function() {
                            var e = (0, a.Z)((function() {
                                return (0, i.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return (0, b.L)("update_profile", t.id), S(!0), [4, (0, h.N)(t.id, {
                                                first_name: l,
                                                last_name: d,
                                                zip_code: p,
                                                bio: w,
                                                email: A.trim(),
                                                city: O,
                                                is_celsius: D
                                            })];
                                        case 1:
                                            return 200 != e.sent().status && k(!0), S(!1), F(!0), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        B = w.length >= 100,
                        W = /(^\d{5}$)|(^\d{5}-\d{4}$)|^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$/.test(p),
                        Y = 0 === l.length || 0 === d.length,
                        $ = c()(A),
                        M = function(e) {
                            return 2 === e.split(",").length
                        },
                        V = function(e) {
                            P("Celsius" === e)
                        };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: "w-full border-t-[1px]"
                        }), (0, s.jsxs)("div", {
                            className: "flex w-full items-center",
                            children: [(0, s.jsx)("div", {
                                className: "w-2/5 text-sm uppercase",
                                children: "First Name"
                            }), (0, s.jsx)("input", {
                                className: (0, g.Z)("w-3/5 border-b-[1px] py-2 text-sm focus:border-black focus:outline-none", Y ? "border-rose-900 focus:border-rose-900" : ""),
                                value: l,
                                onChange: function(e) {
                                    return o(e.target.value)
                                }
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex w-full items-center",
                            children: [(0, s.jsx)("div", {
                                className: "w-2/5 text-sm uppercase",
                                children: "Last Name"
                            }), (0, s.jsx)("input", {
                                className: (0, g.Z)("w-3/5 border-b-[1px] py-2 text-sm focus:border-black focus:outline-none", Y ? "border-rose-900 focus:border-rose-900" : ""),
                                value: d,
                                onChange: function(e) {
                                    return f(e.target.value)
                                }
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex w-full items-center",
                            children: [(0, s.jsx)("div", {
                                className: "w-2/5 text-sm uppercase",
                                children: "Email"
                            }), (0, s.jsx)("input", {
                                className: (0, g.Z)("w-3/5 border-b-[1px] py-2 text-sm focus:border-black focus:outline-none", $ ? "" : "border-rose-900 focus:border-rose-900"),
                                value: A,
                                onChange: function(e) {
                                    return R(e.target.value)
                                }
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex w-full items-center",
                            children: [(0, s.jsx)("div", {
                                className: "w-2/5 text-sm uppercase",
                                children: "Zip code (If in US or UK)"
                            }), (0, s.jsx)("input", {
                                className: (0, g.Z)("w-3/5 border-b-[1px] py-2 text-sm focus:border-black focus:outline-none", W ? "" : "border-rose-900 focus:border-rose-900"),
                                value: p,
                                onChange: function(e) {
                                    return m(e.target.value)
                                }
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex w-full items-center",
                            children: [(0, s.jsx)("div", {
                                className: "w-2/5 text-sm uppercase",
                                children: "City "
                            }), (0, s.jsx)("input", {
                                className: (0, g.Z)("w-3/5 border-b-[1px] py-2 text-sm focus:border-black focus:outline-none", M ? "" : "border-rose-900 focus:border-rose-900"),
                                value: O,
                                onChange: function(e) {
                                    return H(e.target.value)
                                }
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex w-full items-center",
                            children: [(0, s.jsx)("div", {
                                className: "w-2/5 text-sm uppercase",
                                children: "Bio"
                            }), (0, s.jsx)("input", {
                                className: (0, g.Z)("w-3/5 border-b-[1px] py-2 text-sm focus:border-black focus:outline-none", B ? "border-rose-900 focus:border-rose-900" : ""),
                                value: w,
                                onChange: function(e) {
                                    return y(e.target.value)
                                }
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-row gap-4 px-4",
                            children: [(0, s.jsx)("div", {
                                className: "flex items-center",
                                children: (0, s.jsx)("label", {
                                    className: "text-md flex items-center text-gray-900 dark:text-gray-300 sm:ml-2",
                                    children: (0, s.jsx)("div", {
                                        onClick: function() {
                                            return V("Fahrenheit")
                                        },
                                        className: "mr-2 flex h-10 w-32 cursor-pointer items-center justify-center border-2 border-black px-2 dark:border-gray-600 ".concat(D ? "bg-white text-black" : "bg-black text-white"),
                                        children: "Fahrenheit"
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "flex items-center",
                                children: (0, s.jsx)("label", {
                                    className: "text-md flex items-center text-gray-900 dark:text-gray-300 sm:ml-2",
                                    children: (0, s.jsx)("div", {
                                        onClick: function() {
                                            return V("Celsius")
                                        },
                                        className: "flex h-10 w-32 cursor-pointer items-center justify-center border-2 border-black px-2 dark:border-gray-600 ".concat(D ? "bg-black text-white" : "bg-white text-black"),
                                        children: "Celsius"
                                    })
                                })
                            })]
                        }), Y && (0, s.jsx)("div", {
                            className: "text-xs font-light uppercase text-rose-900",
                            children: "Cannot enter a blank first or last name."
                        }), !W && (0, s.jsx)("div", {
                            className: "text-xs font-light uppercase text-rose-900",
                            children: "Zip code needs to be a valid 5 digit US zip code."
                        }), B && (0, s.jsx)("div", {
                            className: "text-xs font-light uppercase text-rose-900",
                            children: "Bio needs to be under 100 characters."
                        }), (0, s.jsxs)("button", {
                            onClick: I,
                            className: "mb-8 mt-4 flex w-full items-center justify-center bg-black px-4 py-2 text-sm uppercase text-white disabled:cursor-not-allowed disabled:opacity-70",
                            disabled: B || Y || !W || Z || !$ || !M,
                            children: [Z && (0, s.jsx)("div", {
                                className: "mr-2 inline-block",
                                children: (0, s.jsx)(v.Z, {
                                    size: "20px",
                                    invert: !0
                                })
                            }), Z ? "" : _ ? "Error" : T ? "Saved" : "Save Profile"]
                        })]
                    })
                },
                y = function(e) {
                    var t = e.userData;
                    return (0, s.jsx)("div", {
                        className: "flex w-full flex-col items-center",
                        children: (0, s.jsx)(j, {
                            userData: t
                        })
                    })
                },
                N = r(31618),
                _ = function() {
                    var e = (0, n.useContext)(N.St);
                    return (0, s.jsx)("div", {
                        className: "-mt-[60px] flex w-full flex-col items-center justify-center gap-4",
                        children: e ? (0, s.jsx)(y, {
                            userData: e
                        }) : (0, s.jsx)("div", {
                            children: "User not found"
                        })
                    })
                }
        }
    },
    function(e) {
        e.O(0, [9866, 602, 6524, 9774, 2888, 179], (function() {
            return t = 13914, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);