"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6524], {
        69661: function(e, t, o) {
            o.d(t, {
                Z: function() {
                    return x
                }
            });
            var n = o(1048),
                r = o(32793),
                i = o(67294),
                a = o(86010),
                s = o(94780),
                h = o(11496),
                c = o(33616),
                l = o(88169),
                d = o(85893),
                p = (0, l.Z)((0, d.jsx)("path", {
                    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                }), "Person"),
                g = o(1588),
                u = o(34867);

            function w(e) {
                return (0, u.Z)("MuiAvatar", e)
            }(0, g.Z)("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
            const m = ["alt", "children", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"],
                v = (0, h.ZP)("div", {
                    name: "MuiAvatar",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: o
                        } = e;
                        return [t.root, t[o.variant], o.colorDefault && t.colorDefault]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, r.Z)({
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    fontFamily: e.typography.fontFamily,
                    fontSize: e.typography.pxToRem(20),
                    lineHeight: 1,
                    borderRadius: "50%",
                    overflow: "hidden",
                    userSelect: "none"
                }, "rounded" === t.variant && {
                    borderRadius: (e.vars || e).shape.borderRadius
                }, "square" === t.variant && {
                    borderRadius: 0
                }, t.colorDefault && (0, r.Z)({
                    color: (e.vars || e).palette.background.default
                }, e.vars ? {
                    backgroundColor: e.vars.palette.Avatar.defaultBg
                } : {
                    backgroundColor: "light" === e.palette.mode ? e.palette.grey[400] : e.palette.grey[600]
                })))),
                f = (0, h.ZP)("img", {
                    name: "MuiAvatar",
                    slot: "Img",
                    overridesResolver: (e, t) => t.img
                })({
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    objectFit: "cover",
                    color: "transparent",
                    textIndent: 1e4
                }),
                y = (0, h.ZP)(p, {
                    name: "MuiAvatar",
                    slot: "Fallback",
                    overridesResolver: (e, t) => t.fallback
                })({
                    width: "75%",
                    height: "75%"
                });
            var x = i.forwardRef((function(e, t) {
                const o = (0, c.Z)({
                        props: e,
                        name: "MuiAvatar"
                    }),
                    {
                        alt: h,
                        children: l,
                        className: p,
                        component: g = "div",
                        imgProps: u,
                        sizes: x,
                        src: C,
                        srcSet: D,
                        variant: b = "circular"
                    } = o,
                    S = (0, n.Z)(o, m);
                let R = null;
                const M = function({
                        crossOrigin: e,
                        referrerPolicy: t,
                        src: o,
                        srcSet: n
                    }) {
                        const [r, a] = i.useState(!1);
                        return i.useEffect((() => {
                            if (!o && !n) return;
                            a(!1);
                            let r = !0;
                            const i = new Image;
                            return i.onload = () => {
                                r && a("loaded")
                            }, i.onerror = () => {
                                r && a("error")
                            }, i.crossOrigin = e, i.referrerPolicy = t, i.src = o, n && (i.srcset = n), () => {
                                r = !1
                            }
                        }), [e, t, o, n]), r
                    }((0, r.Z)({}, u, {
                        src: C,
                        srcSet: D
                    })),
                    _ = C || D,
                    k = _ && "error" !== M,
                    P = (0, r.Z)({}, o, {
                        colorDefault: !k,
                        component: g,
                        variant: b
                    }),
                    A = (e => {
                        const {
                            classes: t,
                            variant: o,
                            colorDefault: n
                        } = e, r = {
                            root: ["root", o, n && "colorDefault"],
                            img: ["img"],
                            fallback: ["fallback"]
                        };
                        return (0, s.Z)(r, w, t)
                    })(P);
                return R = k ? (0, d.jsx)(f, (0, r.Z)({
                    alt: h,
                    src: C,
                    srcSet: D,
                    sizes: x,
                    ownerState: P,
                    className: A.img
                }, u)) : null != l ? l : _ && h ? h[0] : (0, d.jsx)(y, {
                    ownerState: P,
                    className: A.fallback
                }), (0, d.jsx)(v, (0, r.Z)({
                    as: g,
                    ownerState: P,
                    className: (0, a.Z)(A.root, p),
                    ref: t
                }, S, {
                    children: R
                }))
            }))
        },
        88169: function(e, t, o) {
            o.d(t, {
                Z: function() {
                    return y
                }
            });
            var n = o(32793),
                r = o(67294),
                i = o(1048),
                a = o(86010),
                s = o(94780),
                h = o(98216),
                c = o(33616),
                l = o(11496),
                d = o(1588),
                p = o(34867);

            function g(e) {
                return (0, p.Z)("MuiSvgIcon", e)
            }(0, d.Z)("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
            var u = o(85893);
            const w = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"],
                m = (0, l.ZP)("svg", {
                    name: "MuiSvgIcon",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: o
                        } = e;
                        return [t.root, "inherit" !== o.color && t[`color${(0,h.Z)(o.color)}`], t[`fontSize${(0,h.Z)(o.fontSize)}`]]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => {
                    var o, n, r, i, a, s, h, c, l, d, p, g, u, w, m, v, f;
                    return {
                        userSelect: "none",
                        width: "1em",
                        height: "1em",
                        display: "inline-block",
                        fill: t.hasSvgAsChild ? void 0 : "currentColor",
                        flexShrink: 0,
                        transition: null == (o = e.transitions) || null == (n = o.create) ? void 0 : n.call(o, "fill", {
                            duration: null == (r = e.transitions) || null == (i = r.duration) ? void 0 : i.shorter
                        }),
                        fontSize: {
                            inherit: "inherit",
                            small: (null == (a = e.typography) || null == (s = a.pxToRem) ? void 0 : s.call(a, 20)) || "1.25rem",
                            medium: (null == (h = e.typography) || null == (c = h.pxToRem) ? void 0 : c.call(h, 24)) || "1.5rem",
                            large: (null == (l = e.typography) || null == (d = l.pxToRem) ? void 0 : d.call(l, 35)) || "2.1875rem"
                        }[t.fontSize],
                        color: null != (p = null == (g = (e.vars || e).palette) || null == (u = g[t.color]) ? void 0 : u.main) ? p : {
                            action: null == (w = (e.vars || e).palette) || null == (m = w.action) ? void 0 : m.active,
                            disabled: null == (v = (e.vars || e).palette) || null == (f = v.action) ? void 0 : f.disabled,
                            inherit: void 0
                        }[t.color]
                    }
                })),
                v = r.forwardRef((function(e, t) {
                    const o = (0, c.Z)({
                            props: e,
                            name: "MuiSvgIcon"
                        }),
                        {
                            children: l,
                            className: d,
                            color: p = "inherit",
                            component: v = "svg",
                            fontSize: f = "medium",
                            htmlColor: y,
                            inheritViewBox: x = !1,
                            titleAccess: C,
                            viewBox: D = "0 0 24 24"
                        } = o,
                        b = (0, i.Z)(o, w),
                        S = r.isValidElement(l) && "svg" === l.type,
                        R = (0, n.Z)({}, o, {
                            color: p,
                            component: v,
                            fontSize: f,
                            instanceFontSize: e.fontSize,
                            inheritViewBox: x,
                            viewBox: D,
                            hasSvgAsChild: S
                        }),
                        M = {};
                    x || (M.viewBox = D);
                    const _ = (e => {
                        const {
                            color: t,
                            fontSize: o,
                            classes: n
                        } = e, r = {
                            root: ["root", "inherit" !== t && `color${(0,h.Z)(t)}`, `fontSize${(0,h.Z)(o)}`]
                        };
                        return (0, s.Z)(r, g, n)
                    })(R);
                    return (0, u.jsxs)(m, (0, n.Z)({
                        as: v,
                        className: (0, a.Z)(_.root, d),
                        focusable: "false",
                        color: y,
                        "aria-hidden": !C || void 0,
                        role: C ? "img" : void 0,
                        ref: t
                    }, M, b, S && l.props, {
                        ownerState: R,
                        children: [S ? l.props.children : l, C ? (0, u.jsx)("title", {
                            children: C
                        }) : null]
                    }))
                }));
            v.muiName = "SvgIcon";
            var f = v;

            function y(e, t) {
                function o(o, r) {
                    return (0, u.jsx)(f, (0, n.Z)({
                        "data-testid": `${t}Icon`,
                        ref: r
                    }, o, {
                        children: e
                    }))
                }
                return o.muiName = f.muiName, r.memo(r.forwardRef(o))
            }
        },
        82084: function(e, t, o) {
            o.d(t, {
                YG: function() {
                    return s
                },
                ZP: function() {
                    return w
                },
                _H: function() {
                    return h
                }
            });
            var n = o(67294);
            const r = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                unit: "px"
            };

            function i(e, t, o) {
                return Math.min(Math.max(e, t), o)
            }

            function a(e, t) {
                return e.width === t.width && e.height === t.height && e.x === t.x && e.y === t.y && e.unit === t.unit
            }

            function s(e, t, o, n) {
                const r = l(e, o, n);
                return e.width && (r.height = r.width / t), e.height && (r.width = r.height * t), r.y + r.height > n && (r.height = n - r.y, r.width = r.height * t), r.x + r.width > o && (r.width = o - r.x, r.height = r.width / t), "%" === e.unit ? c(r, o, n) : r
            }

            function h(e, t, o) {
                const n = l(e, t, o);
                return n.x = (t - n.width) / 2, n.y = (o - n.height) / 2, "%" === e.unit ? c(n, t, o) : n
            }

            function c(e, t, o) {
                return "%" === e.unit ? { ...r,
                    ...e,
                    unit: "%"
                } : {
                    unit: "%",
                    x: e.x ? e.x / t * 100 : 0,
                    y: e.y ? e.y / o * 100 : 0,
                    width: e.width ? e.width / t * 100 : 0,
                    height: e.height ? e.height / o * 100 : 0
                }
            }

            function l(e, t, o) {
                return e.unit ? "px" === e.unit ? { ...r,
                    ...e,
                    unit: "px"
                } : {
                    unit: "px",
                    x: e.x ? e.x * t / 100 : 0,
                    y: e.y ? e.y * o / 100 : 0,
                    width: e.width ? e.width * t / 100 : 0,
                    height: e.height ? e.height * o / 100 : 0
                } : { ...r,
                    ...e,
                    unit: "px"
                }
            }

            function d(e, t, o, n, r, i = 0, a = 0, s = n, h = r) {
                const c = { ...e
                };
                let l = Math.min(i, n),
                    d = Math.min(a, r),
                    p = Math.min(s, n),
                    g = Math.min(h, r);
                t && (t > 1 ? (l = a ? a * t : l, d = l / t, p = s * t) : (d = i ? i / t : d, l = d * t, g = h / t)), c.y < 0 && (c.height = Math.max(c.height + c.y, d), c.y = 0), c.x < 0 && (c.width = Math.max(c.width + c.x, l), c.x = 0);
                const u = n - (c.x + c.width);
                u < 0 && (c.x = Math.min(c.x, n - l), c.width += u);
                const w = r - (c.y + c.height);
                if (w < 0 && (c.y = Math.min(c.y, r - d), c.height += w), c.width < l && (("sw" === o || "nw" == o) && (c.x -= l - c.width), c.width = l), c.height < d && (("nw" === o || "ne" == o) && (c.y -= d - c.height), c.height = d), c.width > p && (("sw" === o || "nw" == o) && (c.x -= p - c.width), c.width = p), c.height > g && (("nw" === o || "ne" == o) && (c.y -= g - c.height), c.height = g), t) {
                    const e = c.width / c.height;
                    if (e < t) {
                        const e = Math.max(c.width / t, d);
                        ("nw" === o || "ne" == o) && (c.y -= e - c.height), c.height = e
                    } else if (e > t) {
                        const e = Math.max(c.height * t, l);
                        ("sw" === o || "nw" == o) && (c.x -= e - c.width), c.width = e
                    }
                }
                return c
            }

            function p(e) {
                var t, o, n = "";
                if ("string" == typeof e || "number" == typeof e) n += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e))
                        for (t = 0; t < e.length; t++) e[t] && (o = p(e[t])) && (n && (n += " "), n += o);
                    else
                        for (t in e) e[t] && (n && (n += " "), n += t);
                return n
            }
            const g = {
                    capture: !0,
                    passive: !1
                },
                u = class extends n.PureComponent {
                    constructor() {
                        super(...arguments), this.docMoveBound = !1, this.mouseDownOnCrop = !1, this.dragStarted = !1, this.evData = {
                            startClientX: 0,
                            startClientY: 0,
                            startCropX: 0,
                            startCropY: 0,
                            clientX: 0,
                            clientY: 0,
                            isResize: !0
                        }, this.componentRef = (0, n.createRef)(), this.mediaRef = (0, n.createRef)(), this.initChangeCalled = !1, this.state = {
                            cropIsActive: !1,
                            newCropIsBeingDrawn: !1
                        }, this.onCropPointerDown = e => {
                            const {
                                crop: t,
                                disabled: o
                            } = this.props, n = this.getBox();
                            if (!t) return;
                            const r = l(t, n.width, n.height);
                            if (o) return;
                            e.cancelable && e.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({
                                preventScroll: !0
                            });
                            const i = e.target.dataset.ord,
                                a = !!i;
                            let s = e.clientX,
                                h = e.clientY,
                                c = r.x,
                                d = r.y;
                            if (i) {
                                const t = e.clientX - n.x,
                                    o = e.clientY - n.y;
                                let a = 0,
                                    l = 0;
                                "ne" === i || "e" == i ? (a = t - (r.x + r.width), l = o - r.y, c = r.x, d = r.y + r.height) : "se" === i || "s" === i ? (a = t - (r.x + r.width), l = o - (r.y + r.height), c = r.x, d = r.y) : "sw" === i || "w" == i ? (a = t - r.x, l = o - (r.y + r.height), c = r.x + r.width, d = r.y) : ("nw" === i || "n" == i) && (a = t - r.x, l = o - r.y, c = r.x + r.width, d = r.y + r.height), s = c + n.x + a, h = d + n.y + l
                            }
                            this.evData = {
                                startClientX: s,
                                startClientY: h,
                                startCropX: c,
                                startCropY: d,
                                clientX: e.clientX,
                                clientY: e.clientY,
                                isResize: a,
                                ord: i
                            }, this.mouseDownOnCrop = !0, this.setState({
                                cropIsActive: !0
                            })
                        }, this.onComponentPointerDown = e => {
                            const {
                                crop: t,
                                disabled: o,
                                locked: n,
                                keepSelection: r,
                                onChange: i
                            } = this.props, a = this.getBox();
                            if (o || n || r && t) return;
                            e.cancelable && e.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({
                                preventScroll: !0
                            });
                            const s = e.clientX - a.x,
                                h = e.clientY - a.y,
                                d = {
                                    unit: "px",
                                    x: s,
                                    y: h,
                                    width: 0,
                                    height: 0
                                };
                            this.evData = {
                                startClientX: e.clientX,
                                startClientY: e.clientY,
                                startCropX: s,
                                startCropY: h,
                                clientX: e.clientX,
                                clientY: e.clientY,
                                isResize: !0
                            }, this.mouseDownOnCrop = !0, i(l(d, a.width, a.height), c(d, a.width, a.height)), this.setState({
                                cropIsActive: !0,
                                newCropIsBeingDrawn: !0
                            })
                        }, this.onDocPointerMove = e => {
                            const {
                                crop: t,
                                disabled: o,
                                onChange: n,
                                onDragStart: r
                            } = this.props, i = this.getBox();
                            if (o || !t || !this.mouseDownOnCrop) return;
                            e.cancelable && e.preventDefault(), this.dragStarted || (this.dragStarted = !0, r && r(e));
                            const {
                                evData: s
                            } = this;
                            let h;
                            s.clientX = e.clientX, s.clientY = e.clientY, h = s.isResize ? this.resizeCrop() : this.dragCrop(), a(t, h) || n(l(h, i.width, i.height), c(h, i.width, i.height))
                        }, this.onComponentKeyDown = e => {
                            const {
                                crop: t,
                                disabled: o,
                                onChange: n,
                                onComplete: r
                            } = this.props, a = this.getBox();
                            if (o) return;
                            const s = e.key;
                            let h = !1;
                            if (!t) return;
                            const d = this.makePixelCrop(),
                                p = (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) ? u.nudgeStepLarge : e.shiftKey ? u.nudgeStepMedium : u.nudgeStep;
                            if ("ArrowLeft" === s ? (d.x -= p, h = !0) : "ArrowRight" === s ? (d.x += p, h = !0) : "ArrowUp" === s ? (d.y -= p, h = !0) : "ArrowDown" === s && (d.y += p, h = !0), h) {
                                e.cancelable && e.preventDefault(), d.x = i(d.x, 0, a.width - d.width), d.y = i(d.y, 0, a.height - d.height);
                                const t = l(d, a.width, a.height),
                                    o = c(d, a.width, a.height);
                                n(t, o), r && r(t, o)
                            }
                        }, this.onHandlerKeyDown = (e, t) => {
                            const {
                                aspect: o = 0,
                                crop: n,
                                disabled: r,
                                minWidth: i = 0,
                                minHeight: s = 0,
                                maxWidth: h,
                                maxHeight: p,
                                onChange: g,
                                onComplete: w
                            } = this.props, m = this.getBox();
                            if (r || !n) return;
                            if ("ArrowUp" !== e.key && "ArrowDown" !== e.key && "ArrowLeft" !== e.key && "ArrowRight" !== e.key) return;
                            e.stopPropagation(), e.preventDefault();
                            const v = (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) ? u.nudgeStepLarge : e.shiftKey ? u.nudgeStepMedium : u.nudgeStep,
                                f = function(e, t, o, n) {
                                    const r = { ...e
                                    };
                                    return "ArrowLeft" === t ? "nw" === n ? (r.x -= o, r.y -= o, r.width += o, r.height += o) : "w" === n ? (r.x -= o, r.width += o) : "sw" === n ? (r.x -= o, r.width += o, r.height += o) : "ne" === n ? (r.y += o, r.width -= o, r.height -= o) : "e" === n ? r.width -= o : "se" === n && (r.width -= o, r.height -= o) : "ArrowRight" === t && ("nw" === n ? (r.x += o, r.y += o, r.width -= o, r.height -= o) : "w" === n ? (r.x += o, r.width -= o) : "sw" === n ? (r.x += o, r.width -= o, r.height -= o) : "ne" === n ? (r.y -= o, r.width += o, r.height += o) : "e" === n ? r.width += o : "se" === n && (r.width += o, r.height += o)), "ArrowUp" === t ? "nw" === n ? (r.x -= o, r.y -= o, r.width += o, r.height += o) : "n" === n ? (r.y -= o, r.height += o) : "ne" === n ? (r.y -= o, r.width += o, r.height += o) : "sw" === n ? (r.x += o, r.width -= o, r.height -= o) : "s" === n ? r.height -= o : "se" === n && (r.width -= o, r.height -= o) : "ArrowDown" === t && ("nw" === n ? (r.x += o, r.y += o, r.width -= o, r.height -= o) : "n" === n ? (r.y += o, r.height -= o) : "ne" === n ? (r.y += o, r.width -= o, r.height -= o) : "sw" === n ? (r.x -= o, r.width += o, r.height += o) : "s" === n ? r.height += o : "se" === n && (r.width += o, r.height += o)), r
                                }(l(n, m.width, m.height), e.key, v, t),
                                y = d(f, o, t, m.width, m.height, i, s, h, p);
                            if (!a(n, y)) {
                                const e = c(y, m.width, m.height);
                                g(y, e), w && w(y, e)
                            }
                        }, this.onDocPointerDone = e => {
                            const {
                                crop: t,
                                disabled: o,
                                onComplete: n,
                                onDragEnd: r
                            } = this.props, i = this.getBox();
                            this.unbindDocMove(), !o && t && this.mouseDownOnCrop && (this.mouseDownOnCrop = !1, this.dragStarted = !1, r && r(e), n && n(l(t, i.width, i.height), c(t, i.width, i.height)), this.setState({
                                cropIsActive: !1,
                                newCropIsBeingDrawn: !1
                            }))
                        }, this.onDragFocus = e => {
                            var t;
                            null == (t = this.componentRef.current) || t.scrollTo(0, 0)
                        }
                    }
                    get document() {
                        return document
                    }
                    getBox() {
                        const e = this.mediaRef.current;
                        if (!e) return {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        const {
                            x: t,
                            y: o,
                            width: n,
                            height: r
                        } = e.getBoundingClientRect();
                        return {
                            x: t,
                            y: o,
                            width: n,
                            height: r
                        }
                    }
                    componentDidUpdate(e) {
                        const {
                            crop: t,
                            onComplete: o
                        } = this.props;
                        if (o && !e.crop && t) {
                            const {
                                width: e,
                                height: n
                            } = this.getBox();
                            e && n && o(l(t, e, n), c(t, e, n))
                        }
                    }
                    componentWillUnmount() {
                        this.resizeObserver && this.resizeObserver.disconnect()
                    }
                    bindDocMove() {
                        this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, g), this.document.addEventListener("pointerup", this.onDocPointerDone, g), this.document.addEventListener("pointercancel", this.onDocPointerDone, g), this.docMoveBound = !0)
                    }
                    unbindDocMove() {
                        this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, g), this.document.removeEventListener("pointerup", this.onDocPointerDone, g), this.document.removeEventListener("pointercancel", this.onDocPointerDone, g), this.docMoveBound = !1)
                    }
                    getCropStyle() {
                        const {
                            crop: e
                        } = this.props;
                        if (e) return {
                            top: `${e.y}${e.unit}`,
                            left: `${e.x}${e.unit}`,
                            width: `${e.width}${e.unit}`,
                            height: `${e.height}${e.unit}`
                        }
                    }
                    dragCrop() {
                        const {
                            evData: e
                        } = this, t = this.getBox(), o = this.makePixelCrop(), n = e.clientX - e.startClientX, r = e.clientY - e.startClientY;
                        return o.x = i(e.startCropX + n, 0, t.width - o.width), o.y = i(e.startCropY + r, 0, t.height - o.height), o
                    }
                    getPointRegion(e) {
                        const {
                            evData: t
                        } = this, o = t.clientX - e.x, n = t.clientY - e.y < t.startCropY;
                        return o < t.startCropX ? n ? "nw" : "sw" : n ? "ne" : "se"
                    }
                    resizeCrop() {
                        const {
                            evData: e
                        } = this, t = this.getBox(), {
                            aspect: o = 0,
                            minWidth: n = 0,
                            minHeight: r = 0,
                            maxWidth: i,
                            maxHeight: a
                        } = this.props, s = this.getPointRegion(t), h = this.makePixelCrop(), c = e.ord ? e.ord : s, l = e.clientX - e.startClientX, p = e.clientY - e.startClientY, g = {
                            unit: "px",
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        "ne" === s ? (g.x = e.startCropX, g.width = l, o ? (g.height = g.width / o, g.y = e.startCropY - g.height) : (g.height = Math.abs(p), g.y = e.startCropY - g.height)) : "se" === s ? (g.x = e.startCropX, g.y = e.startCropY, g.width = l, g.height = o ? g.width / o : p) : "sw" === s ? (g.x = e.startCropX + l, g.y = e.startCropY, g.width = Math.abs(l), g.height = o ? g.width / o : p) : "nw" === s && (g.x = e.startCropX + l, g.width = Math.abs(l), o ? (g.height = g.width / o, g.y = e.startCropY - g.height) : (g.height = Math.abs(p), g.y = e.startCropY + p));
                        const w = d(g, o, s, t.width, t.height, n, r, i, a);
                        return o || u.xyOrds.indexOf(c) > -1 ? (h.x = w.x, h.y = w.y, h.width = w.width, h.height = w.height) : u.xOrds.indexOf(c) > -1 ? (h.x = w.x, h.width = w.width) : u.yOrds.indexOf(c) > -1 && (h.y = w.y, h.height = w.height), h
                    }
                    createCropSelection() {
                        const {
                            ariaLabels: e = u.defaultProps.ariaLabels,
                            disabled: t,
                            locked: o,
                            renderSelectionAddon: r,
                            ruleOfThirds: i,
                            crop: a
                        } = this.props, s = this.getCropStyle();
                        if (a) return n.createElement("div", {
                            style: s,
                            className: "ReactCrop__crop-selection",
                            onPointerDown: this.onCropPointerDown,
                            "aria-label": e.cropArea,
                            tabIndex: 0,
                            onKeyDown: this.onComponentKeyDown,
                            role: "group"
                        }, !t && !o && n.createElement("div", {
                            className: "ReactCrop__drag-elements",
                            onFocus: this.onDragFocus
                        }, n.createElement("div", {
                            className: "ReactCrop__drag-bar ord-n",
                            "data-ord": "n"
                        }), n.createElement("div", {
                            className: "ReactCrop__drag-bar ord-e",
                            "data-ord": "e"
                        }), n.createElement("div", {
                            className: "ReactCrop__drag-bar ord-s",
                            "data-ord": "s"
                        }), n.createElement("div", {
                            className: "ReactCrop__drag-bar ord-w",
                            "data-ord": "w"
                        }), n.createElement("div", {
                            className: "ReactCrop__drag-handle ord-nw",
                            "data-ord": "nw",
                            tabIndex: 0,
                            "aria-label": e.nwDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "nw"),
                            role: "button"
                        }), n.createElement("div", {
                            className: "ReactCrop__drag-handle ord-n",
                            "data-ord": "n",
                            tabIndex: 0,
                            "aria-label": e.nDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "n"),
                            role: "button"
                        }), n.createElement("div", {
                            className: "ReactCrop__drag-handle ord-ne",
                            "data-ord": "ne",
                            tabIndex: 0,
                            "aria-label": e.neDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "ne"),
                            role: "button"
                        }), n.createElement("div", {
                            className: "ReactCrop__drag-handle ord-e",
                            "data-ord": "e",
                            tabIndex: 0,
                            "aria-label": e.eDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "e"),
                            role: "button"
                        }), n.createElement("div", {
                            className: "ReactCrop__drag-handle ord-se",
                            "data-ord": "se",
                            tabIndex: 0,
                            "aria-label": e.seDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "se"),
                            role: "button"
                        }), n.createElement("div", {
                            className: "ReactCrop__drag-handle ord-s",
                            "data-ord": "s",
                            tabIndex: 0,
                            "aria-label": e.sDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "s"),
                            role: "button"
                        }), n.createElement("div", {
                            className: "ReactCrop__drag-handle ord-sw",
                            "data-ord": "sw",
                            tabIndex: 0,
                            "aria-label": e.swDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "sw"),
                            role: "button"
                        }), n.createElement("div", {
                            className: "ReactCrop__drag-handle ord-w",
                            "data-ord": "w",
                            tabIndex: 0,
                            "aria-label": e.wDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "w"),
                            role: "button"
                        })), r && n.createElement("div", {
                            className: "ReactCrop__selection-addon",
                            onMouseDown: e => e.stopPropagation()
                        }, r(this.state)), i && n.createElement(n.Fragment, null, n.createElement("div", {
                            className: "ReactCrop__rule-of-thirds-hz"
                        }), n.createElement("div", {
                            className: "ReactCrop__rule-of-thirds-vt"
                        })))
                    }
                    makePixelCrop() {
                        const e = { ...r,
                                ...this.props.crop || {}
                            },
                            t = this.getBox();
                        return l(e, t.width, t.height)
                    }
                    render() {
                        const {
                            aspect: e,
                            children: t,
                            circularCrop: o,
                            className: r,
                            crop: i,
                            disabled: a,
                            locked: s,
                            style: h,
                            ruleOfThirds: c
                        } = this.props, {
                            cropIsActive: l,
                            newCropIsBeingDrawn: d
                        } = this.state, g = i ? this.createCropSelection() : null, u = function() {
                            for (var e, t, o = 0, n = ""; o < arguments.length;)(e = arguments[o++]) && (t = p(e)) && (n && (n += " "), n += t);
                            return n
                        }("ReactCrop", r, {
                            "ReactCrop--active": l,
                            "ReactCrop--disabled": a,
                            "ReactCrop--locked": s,
                            "ReactCrop--new-crop": d,
                            "ReactCrop--fixed-aspect": i && e,
                            "ReactCrop--circular-crop": i && o,
                            "ReactCrop--rule-of-thirds": i && c,
                            "ReactCrop--invisible-crop": !this.dragStarted && i && !i.width && !i.height,
                            "ReactCrop--no-animate": o
                        });
                        return n.createElement("div", {
                            ref: this.componentRef,
                            className: u,
                            style: h
                        }, n.createElement("div", {
                            ref: this.mediaRef,
                            className: "ReactCrop__child-wrapper",
                            onPointerDown: this.onComponentPointerDown
                        }, t), g)
                    }
                };
            let w = u;
            w.xOrds = ["e", "w"], w.yOrds = ["n", "s"], w.xyOrds = ["nw", "ne", "se", "sw"], w.nudgeStep = 1, w.nudgeStepMedium = 10, w.nudgeStepLarge = 100, w.defaultProps = {
                ariaLabels: {
                    cropArea: "Use the arrow keys to move the crop selection area",
                    nwDragHandle: "Use the arrow keys to move the north west drag handle to change the crop selection area",
                    nDragHandle: "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
                    neDragHandle: "Use the arrow keys to move the north east drag handle to change the crop selection area",
                    eDragHandle: "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
                    seDragHandle: "Use the arrow keys to move the south east drag handle to change the crop selection area",
                    sDragHandle: "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
                    swDragHandle: "Use the arrow keys to move the south west drag handle to change the crop selection area",
                    wDragHandle: "Use the up and down arrow keys to move the west drag handle to change the crop selection area"
                }
            }
        }
    }
]);