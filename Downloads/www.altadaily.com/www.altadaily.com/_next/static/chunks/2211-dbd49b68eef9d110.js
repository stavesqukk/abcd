"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2211], {
        70917: function(e, t, r) {
            r.d(t, {
                F4: function() {
                    return d
                },
                iv: function() {
                    return c
                },
                xB: function() {
                    return l
                }
            });
            var n = r(75260),
                o = r(67294),
                i = r(70444),
                a = r(27278),
                s = r(62324),
                l = (r(8417), r(8679), (0, n.w)((function(e, t) {
                    var r = e.styles,
                        l = (0, s.O)([r], void 0, o.useContext(n.T));
                    if (!n.i) {
                        for (var c, d = l.name, u = l.styles, p = l.next; void 0 !== p;) d += " " + p.name, u += p.styles, p = p.next;
                        var f = !0 === t.compat,
                            h = t.insert("", {
                                name: d,
                                styles: u
                            }, t.sheet, f);
                        return f ? null : o.createElement("style", ((c = {})["data-emotion"] = t.key + "-global " + d, c.dangerouslySetInnerHTML = {
                            __html: h
                        }, c.nonce = t.sheet.nonce, c))
                    }
                    var m = o.useRef();
                    return (0, a.j)((function() {
                        var e = t.key + "-global",
                            r = new t.sheet.constructor({
                                key: e,
                                nonce: t.sheet.nonce,
                                container: t.sheet.container,
                                speedy: t.sheet.isSpeedy
                            }),
                            n = !1,
                            o = document.querySelector('style[data-emotion="' + e + " " + l.name + '"]');
                        return t.sheet.tags.length && (r.before = t.sheet.tags[0]), null !== o && (n = !0, o.setAttribute("data-emotion", e), r.hydrate([o])), m.current = [r, n],
                            function() {
                                r.flush()
                            }
                    }), [t]), (0, a.j)((function() {
                        var e = m.current,
                            r = e[0];
                        if (e[1]) e[1] = !1;
                        else {
                            if (void 0 !== l.next && (0, i.My)(t, l.next, !0), r.tags.length) {
                                var n = r.tags[r.tags.length - 1].nextElementSibling;
                                r.before = n, r.flush()
                            }
                            t.insert("", l, r, !1)
                        }
                    }), [t, l.name]), null
                })));

            function c() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, s.O)(t)
            }
            var d = function() {
                var e = c.apply(void 0, arguments),
                    t = "animation-" + e.name;
                return {
                    name: t,
                    styles: "@keyframes " + t + "{" + e.styles + "}",
                    anim: 1,
                    toString: function() {
                        return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
                    }
                }
            }
        },
        93470: function(e, t, r) {
            var n = r(67294),
                o = r(33703),
                i = r(82690),
                a = r(85893);
            const s = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");

            function l(e) {
                const t = [],
                    r = [];
                return Array.from(e.querySelectorAll(s)).forEach(((e, n) => {
                    const o = function(e) {
                        const t = parseInt(e.getAttribute("tabindex") || "", 10);
                        return Number.isNaN(t) ? "true" === e.contentEditable || ("AUDIO" === e.nodeName || "VIDEO" === e.nodeName || "DETAILS" === e.nodeName) && null === e.getAttribute("tabindex") ? 0 : e.tabIndex : t
                    }(e); - 1 !== o && function(e) {
                        return !(e.disabled || "INPUT" === e.tagName && "hidden" === e.type || function(e) {
                            if ("INPUT" !== e.tagName || "radio" !== e.type) return !1;
                            if (!e.name) return !1;
                            const t = t => e.ownerDocument.querySelector(`input[type="radio"]${t}`);
                            let r = t(`[name="${e.name}"]:checked`);
                            return r || (r = t(`[name="${e.name}"]`)), r !== e
                        }(e))
                    }(e) && (0 === o ? t.push(e) : r.push({
                        documentOrder: n,
                        tabIndex: o,
                        node: e
                    }))
                })), r.sort(((e, t) => e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex)).map((e => e.node)).concat(t)
            }

            function c() {
                return !0
            }
            t.Z = function(e) {
                const {
                    children: t,
                    disableAutoFocus: r = !1,
                    disableEnforceFocus: s = !1,
                    disableRestoreFocus: d = !1,
                    getTabbable: u = l,
                    isEnabled: p = c,
                    open: f
                } = e, h = n.useRef(!1), m = n.useRef(null), v = n.useRef(null), g = n.useRef(null), y = n.useRef(null), b = n.useRef(!1), w = n.useRef(null), S = (0, o.Z)(t.ref, w), E = n.useRef(null);
                n.useEffect((() => {
                    f && w.current && (b.current = !r)
                }), [r, f]), n.useEffect((() => {
                    if (!f || !w.current) return;
                    const e = (0, i.Z)(w.current);
                    return w.current.contains(e.activeElement) || (w.current.hasAttribute("tabIndex") || w.current.setAttribute("tabIndex", "-1"), b.current && w.current.focus()), () => {
                        d || (g.current && g.current.focus && (h.current = !0, g.current.focus()), g.current = null)
                    }
                }), [f]), n.useEffect((() => {
                    if (!f || !w.current) return;
                    const e = (0, i.Z)(w.current),
                        t = t => {
                            const {
                                current: r
                            } = w;
                            if (null !== r)
                                if (e.hasFocus() && !s && p() && !h.current) {
                                    if (!r.contains(e.activeElement)) {
                                        if (t && y.current !== t.target || e.activeElement !== y.current) y.current = null;
                                        else if (null !== y.current) return;
                                        if (!b.current) return;
                                        let i = [];
                                        if (e.activeElement !== m.current && e.activeElement !== v.current || (i = u(w.current)), i.length > 0) {
                                            var n, o;
                                            const e = Boolean((null == (n = E.current) ? void 0 : n.shiftKey) && "Tab" === (null == (o = E.current) ? void 0 : o.key)),
                                                t = i[0],
                                                r = i[i.length - 1];
                                            "string" !== typeof t && "string" !== typeof r && (e ? r.focus() : t.focus())
                                        } else r.focus()
                                    }
                                } else h.current = !1
                        },
                        r = t => {
                            E.current = t, !s && p() && "Tab" === t.key && e.activeElement === w.current && t.shiftKey && (h.current = !0, v.current && v.current.focus())
                        };
                    e.addEventListener("focusin", t), e.addEventListener("keydown", r, !0);
                    const n = setInterval((() => {
                        e.activeElement && "BODY" === e.activeElement.tagName && t(null)
                    }), 50);
                    return () => {
                        clearInterval(n), e.removeEventListener("focusin", t), e.removeEventListener("keydown", r, !0)
                    }
                }), [r, s, d, p, f, u]);
                const x = e => {
                    null === g.current && (g.current = e.relatedTarget), b.current = !0
                };
                return (0, a.jsxs)(n.Fragment, {
                    children: [(0, a.jsx)("div", {
                        tabIndex: f ? 0 : -1,
                        onFocus: x,
                        ref: m,
                        "data-testid": "sentinelStart"
                    }), n.cloneElement(t, {
                        ref: S,
                        onFocus: e => {
                            null === g.current && (g.current = e.relatedTarget), b.current = !0, y.current = e.target;
                            const r = t.props.onFocus;
                            r && r(e)
                        }
                    }), (0, a.jsx)("div", {
                        tabIndex: f ? 0 : -1,
                        onFocus: x,
                        ref: v,
                        "data-testid": "sentinelEnd"
                    })]
                })
            }
        },
        78385: function(e, t, r) {
            var n = r(67294),
                o = r(73935),
                i = r(33703),
                a = r(73546),
                s = r(7960),
                l = r(85893);
            const c = n.forwardRef((function(e, t) {
                const {
                    children: r,
                    container: c,
                    disablePortal: d = !1
                } = e, [u, p] = n.useState(null), f = (0, i.Z)(n.isValidElement(r) ? r.ref : null, t);
                if ((0, a.Z)((() => {
                        d || p(function(e) {
                            return "function" === typeof e ? e() : e
                        }(c) || document.body)
                    }), [c, d]), (0, a.Z)((() => {
                        if (u && !d) return (0, s.Z)(t, u), () => {
                            (0, s.Z)(t, null)
                        }
                    }), [t, u, d]), d) {
                    if (n.isValidElement(r)) {
                        const e = {
                            ref: f
                        };
                        return n.cloneElement(r, e)
                    }
                    return (0, l.jsx)(n.Fragment, {
                        children: r
                    })
                }
                return (0, l.jsx)(n.Fragment, {
                    children: u ? o.createPortal(r, u) : u
                })
            }));
            t.Z = c
        },
        31873: function(e, t, r) {
            r.d(t, {
                T: function() {
                    return a
                }
            });
            var n = r(67294);
            r(85893);
            const o = {
                    disableDefaultClasses: !1
                },
                i = n.createContext(o);

            function a(e) {
                const {
                    disableDefaultClasses: t
                } = n.useContext(i);
                return r => t ? "" : e(r)
            }
        },
        45445: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return g
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(11496),
                c = r(33616),
                d = r(16628),
                u = r(1588),
                p = r(34867);

            function f(e) {
                return (0, p.Z)("MuiBackdrop", e)
            }(0, u.Z)("MuiBackdrop", ["root", "invisible"]);
            var h = r(85893);
            const m = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"],
                v = (0, l.ZP)("div", {
                    name: "MuiBackdrop",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, r.invisible && t.invisible]
                    }
                })((({
                    ownerState: e
                }) => (0, o.Z)({
                    position: "fixed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    right: 0,
                    bottom: 0,
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    WebkitTapHighlightColor: "transparent"
                }, e.invisible && {
                    backgroundColor: "transparent"
                })));
            var g = i.forwardRef((function(e, t) {
                var r, i, l;
                const u = (0, c.Z)({
                        props: e,
                        name: "MuiBackdrop"
                    }),
                    {
                        children: p,
                        className: g,
                        component: y = "div",
                        components: b = {},
                        componentsProps: w = {},
                        invisible: S = !1,
                        open: E,
                        slotProps: x = {},
                        slots: C = {},
                        TransitionComponent: P = d.Z,
                        transitionDuration: T
                    } = u,
                    _ = (0, n.Z)(u, m),
                    O = (0, o.Z)({}, u, {
                        component: y,
                        invisible: S
                    }),
                    A = (e => {
                        const {
                            classes: t,
                            invisible: r
                        } = e, n = {
                            root: ["root", r && "invisible"]
                        };
                        return (0, s.Z)(n, f, t)
                    })(O),
                    k = null != (r = x.root) ? r : w.root;
                return (0, h.jsx)(P, (0, o.Z)({ in: E,
                    timeout: T
                }, _, {
                    children: (0, h.jsx)(v, (0, o.Z)({
                        "aria-hidden": !0
                    }, k, {
                        as: null != (i = null != (l = C.root) ? l : b.Root) ? i : y,
                        className: (0, a.Z)(A.root, g, null == k ? void 0 : k.className),
                        ownerState: (0, o.Z)({}, O, null == k ? void 0 : k.ownerState),
                        classes: A,
                        ref: t,
                        children: p
                    }))
                }))
            }))
        },
        87357: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return y
                }
            });
            var n = r(54695),
                o = r(60916),
                i = r(67294),
                a = r(86010),
                s = r(7858),
                l = r(86523),
                c = r(39707),
                d = r(96682),
                u = r(85893);
            const p = ["className", "component"];
            var f = r(37078),
                h = r(21265),
                m = r(10606);
            const v = (0, h.Z)(),
                g = function(e = {}) {
                    const {
                        themeId: t,
                        defaultTheme: r,
                        defaultClassName: f = "MuiBox-root",
                        generateClassName: h
                    } = e, m = (0, s.ZP)("div", {
                        shouldForwardProp: e => "theme" !== e && "sx" !== e && "as" !== e
                    })(l.Z);
                    return i.forwardRef((function(e, i) {
                        const s = (0, d.Z)(r),
                            l = (0, c.Z)(e),
                            {
                                className: v,
                                component: g = "div"
                            } = l,
                            y = (0, o.Z)(l, p);
                        return (0, u.jsx)(m, (0, n.Z)({
                            as: g,
                            ref: i,
                            className: (0, a.Z)(v, h ? h(f) : f),
                            theme: t && s[t] || s
                        }, y))
                    }))
                }({
                    themeId: m.Z,
                    defaultTheme: v,
                    defaultClassName: "MuiBox-root",
                    generateClassName: f.Z.generate
                });
            var y = g
        },
        49990: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return H
                }
            });
            var n = r(32793),
                o = r(1048),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(11496),
                c = r(33616),
                d = r(51705),
                u = r(2068),
                p = r(18791),
                f = r(90844),
                h = r(70917),
                m = r(85893);
            var v = function(e) {
                    const {
                        className: t,
                        classes: r,
                        pulsate: n = !1,
                        rippleX: o,
                        rippleY: s,
                        rippleSize: l,
                        in: c,
                        onExited: d,
                        timeout: u
                    } = e, [p, f] = i.useState(!1), h = (0, a.Z)(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), v = {
                        width: l,
                        height: l,
                        top: -l / 2 + s,
                        left: -l / 2 + o
                    }, g = (0, a.Z)(r.child, p && r.childLeaving, n && r.childPulsate);
                    return c || p || f(!0), i.useEffect((() => {
                        if (!c && null != d) {
                            const e = setTimeout(d, u);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }), [d, c, u]), (0, m.jsx)("span", {
                        className: h,
                        style: v,
                        children: (0, m.jsx)("span", {
                            className: g
                        })
                    })
                },
                g = r(1588);
            var y = (0, g.Z)("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
            const b = ["center", "classes", "className"];
            let w, S, E, x, C = e => e;
            const P = (0, h.F4)(w || (w = C `
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),
                T = (0, h.F4)(S || (S = C `
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),
                _ = (0, h.F4)(E || (E = C `
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),
                O = (0, l.ZP)("span", {
                    name: "MuiTouchRipple",
                    slot: "Root"
                })({
                    overflow: "hidden",
                    pointerEvents: "none",
                    position: "absolute",
                    zIndex: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    borderRadius: "inherit"
                }),
                A = (0, l.ZP)(v, {
                    name: "MuiTouchRipple",
                    slot: "Ripple"
                })(x || (x = C `
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), y.rippleVisible, P, 550, (({
                    theme: e
                }) => e.transitions.easing.easeInOut), y.ripplePulsate, (({
                    theme: e
                }) => e.transitions.duration.shorter), y.child, y.childLeaving, T, 550, (({
                    theme: e
                }) => e.transitions.easing.easeInOut), y.childPulsate, _, (({
                    theme: e
                }) => e.transitions.easing.easeInOut));
            var k = i.forwardRef((function(e, t) {
                    const r = (0, c.Z)({
                            props: e,
                            name: "MuiTouchRipple"
                        }),
                        {
                            center: s = !1,
                            classes: l = {},
                            className: d
                        } = r,
                        u = (0, o.Z)(r, b),
                        [p, h] = i.useState([]),
                        v = i.useRef(0),
                        g = i.useRef(null);
                    i.useEffect((() => {
                        g.current && (g.current(), g.current = null)
                    }), [p]);
                    const w = i.useRef(!1),
                        S = i.useRef(0),
                        E = i.useRef(null),
                        x = i.useRef(null);
                    i.useEffect((() => () => {
                        S.current && clearTimeout(S.current)
                    }), []);
                    const C = i.useCallback((e => {
                            const {
                                pulsate: t,
                                rippleX: r,
                                rippleY: n,
                                rippleSize: o,
                                cb: i
                            } = e;
                            h((e => [...e, (0, m.jsx)(A, {
                                classes: {
                                    ripple: (0, a.Z)(l.ripple, y.ripple),
                                    rippleVisible: (0, a.Z)(l.rippleVisible, y.rippleVisible),
                                    ripplePulsate: (0, a.Z)(l.ripplePulsate, y.ripplePulsate),
                                    child: (0, a.Z)(l.child, y.child),
                                    childLeaving: (0, a.Z)(l.childLeaving, y.childLeaving),
                                    childPulsate: (0, a.Z)(l.childPulsate, y.childPulsate)
                                },
                                timeout: 550,
                                pulsate: t,
                                rippleX: r,
                                rippleY: n,
                                rippleSize: o
                            }, v.current)])), v.current += 1, g.current = i
                        }), [l]),
                        P = i.useCallback(((e = {}, t = {}, r = (() => {})) => {
                            const {
                                pulsate: n = !1,
                                center: o = s || t.pulsate,
                                fakeElement: i = !1
                            } = t;
                            if ("mousedown" === (null == e ? void 0 : e.type) && w.current) return void(w.current = !1);
                            "touchstart" === (null == e ? void 0 : e.type) && (w.current = !0);
                            const a = i ? null : x.current,
                                l = a ? a.getBoundingClientRect() : {
                                    width: 0,
                                    height: 0,
                                    left: 0,
                                    top: 0
                                };
                            let c, d, u;
                            if (o || void 0 === e || 0 === e.clientX && 0 === e.clientY || !e.clientX && !e.touches) c = Math.round(l.width / 2), d = Math.round(l.height / 2);
                            else {
                                const {
                                    clientX: t,
                                    clientY: r
                                } = e.touches && e.touches.length > 0 ? e.touches[0] : e;
                                c = Math.round(t - l.left), d = Math.round(r - l.top)
                            }
                            if (o) u = Math.sqrt((2 * l.width ** 2 + l.height ** 2) / 3), u % 2 === 0 && (u += 1);
                            else {
                                const e = 2 * Math.max(Math.abs((a ? a.clientWidth : 0) - c), c) + 2,
                                    t = 2 * Math.max(Math.abs((a ? a.clientHeight : 0) - d), d) + 2;
                                u = Math.sqrt(e ** 2 + t ** 2)
                            }
                            null != e && e.touches ? null === E.current && (E.current = () => {
                                C({
                                    pulsate: n,
                                    rippleX: c,
                                    rippleY: d,
                                    rippleSize: u,
                                    cb: r
                                })
                            }, S.current = setTimeout((() => {
                                E.current && (E.current(), E.current = null)
                            }), 80)) : C({
                                pulsate: n,
                                rippleX: c,
                                rippleY: d,
                                rippleSize: u,
                                cb: r
                            })
                        }), [s, C]),
                        T = i.useCallback((() => {
                            P({}, {
                                pulsate: !0
                            })
                        }), [P]),
                        _ = i.useCallback(((e, t) => {
                            if (clearTimeout(S.current), "touchend" === (null == e ? void 0 : e.type) && E.current) return E.current(), E.current = null, void(S.current = setTimeout((() => {
                                _(e, t)
                            })));
                            E.current = null, h((e => e.length > 0 ? e.slice(1) : e)), g.current = t
                        }), []);
                    return i.useImperativeHandle(t, (() => ({
                        pulsate: T,
                        start: P,
                        stop: _
                    })), [T, P, _]), (0, m.jsx)(O, (0, n.Z)({
                        className: (0, a.Z)(y.root, l.root, d),
                        ref: x
                    }, u, {
                        children: (0, m.jsx)(f.Z, {
                            component: null,
                            exit: !0,
                            children: p
                        })
                    }))
                })),
                M = r(34867);

            function R(e) {
                return (0, M.Z)("MuiButtonBase", e)
            }
            var Z = (0, g.Z)("MuiButtonBase", ["root", "disabled", "focusVisible"]);
            const I = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"],
                j = (0, l.ZP)("button", {
                    name: "MuiButtonBase",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    backgroundColor: "transparent",
                    outline: 0,
                    border: 0,
                    margin: 0,
                    borderRadius: 0,
                    padding: 0,
                    cursor: "pointer",
                    userSelect: "none",
                    verticalAlign: "middle",
                    MozAppearance: "none",
                    WebkitAppearance: "none",
                    textDecoration: "none",
                    color: "inherit",
                    "&::-moz-focus-inner": {
                        borderStyle: "none"
                    },
                    [`&.${Z.disabled}`]: {
                        pointerEvents: "none",
                        cursor: "default"
                    },
                    "@media print": {
                        colorAdjust: "exact"
                    }
                });
            var H = i.forwardRef((function(e, t) {
                const r = (0, c.Z)({
                        props: e,
                        name: "MuiButtonBase"
                    }),
                    {
                        action: l,
                        centerRipple: f = !1,
                        children: h,
                        className: v,
                        component: g = "button",
                        disabled: y = !1,
                        disableRipple: b = !1,
                        disableTouchRipple: w = !1,
                        focusRipple: S = !1,
                        LinkComponent: E = "a",
                        onBlur: x,
                        onClick: C,
                        onContextMenu: P,
                        onDragLeave: T,
                        onFocus: _,
                        onFocusVisible: O,
                        onKeyDown: A,
                        onKeyUp: M,
                        onMouseDown: Z,
                        onMouseLeave: H,
                        onMouseUp: L,
                        onTouchEnd: D,
                        onTouchMove: $,
                        onTouchStart: W,
                        tabIndex: z = 0,
                        TouchRippleProps: N,
                        touchRippleRef: B,
                        type: F
                    } = r,
                    K = (0, o.Z)(r, I),
                    U = i.useRef(null),
                    J = i.useRef(null),
                    G = (0, d.Z)(J, B),
                    {
                        isFocusVisibleRef: q,
                        onFocus: V,
                        onBlur: X,
                        ref: Y
                    } = (0, p.Z)(),
                    [Q, ee] = i.useState(!1);
                y && Q && ee(!1), i.useImperativeHandle(l, (() => ({
                    focusVisible: () => {
                        ee(!0), U.current.focus()
                    }
                })), []);
                const [te, re] = i.useState(!1);
                i.useEffect((() => {
                    re(!0)
                }), []);
                const ne = te && !b && !y;

                function oe(e, t, r = w) {
                    return (0, u.Z)((n => {
                        t && t(n);
                        return !r && J.current && J.current[e](n), !0
                    }))
                }
                i.useEffect((() => {
                    Q && S && !b && te && J.current.pulsate()
                }), [b, S, Q, te]);
                const ie = oe("start", Z),
                    ae = oe("stop", P),
                    se = oe("stop", T),
                    le = oe("stop", L),
                    ce = oe("stop", (e => {
                        Q && e.preventDefault(), H && H(e)
                    })),
                    de = oe("start", W),
                    ue = oe("stop", D),
                    pe = oe("stop", $),
                    fe = oe("stop", (e => {
                        X(e), !1 === q.current && ee(!1), x && x(e)
                    }), !1),
                    he = (0, u.Z)((e => {
                        U.current || (U.current = e.currentTarget), V(e), !0 === q.current && (ee(!0), O && O(e)), _ && _(e)
                    })),
                    me = () => {
                        const e = U.current;
                        return g && "button" !== g && !("A" === e.tagName && e.href)
                    },
                    ve = i.useRef(!1),
                    ge = (0, u.Z)((e => {
                        S && !ve.current && Q && J.current && " " === e.key && (ve.current = !0, J.current.stop(e, (() => {
                            J.current.start(e)
                        }))), e.target === e.currentTarget && me() && " " === e.key && e.preventDefault(), A && A(e), e.target === e.currentTarget && me() && "Enter" === e.key && !y && (e.preventDefault(), C && C(e))
                    })),
                    ye = (0, u.Z)((e => {
                        S && " " === e.key && J.current && Q && !e.defaultPrevented && (ve.current = !1, J.current.stop(e, (() => {
                            J.current.pulsate(e)
                        }))), M && M(e), C && e.target === e.currentTarget && me() && " " === e.key && !e.defaultPrevented && C(e)
                    }));
                let be = g;
                "button" === be && (K.href || K.to) && (be = E);
                const we = {};
                "button" === be ? (we.type = void 0 === F ? "button" : F, we.disabled = y) : (K.href || K.to || (we.role = "button"), y && (we["aria-disabled"] = y));
                const Se = (0, d.Z)(t, Y, U);
                const Ee = (0, n.Z)({}, r, {
                        centerRipple: f,
                        component: g,
                        disabled: y,
                        disableRipple: b,
                        disableTouchRipple: w,
                        focusRipple: S,
                        tabIndex: z,
                        focusVisible: Q
                    }),
                    xe = (e => {
                        const {
                            disabled: t,
                            focusVisible: r,
                            focusVisibleClassName: n,
                            classes: o
                        } = e, i = {
                            root: ["root", t && "disabled", r && "focusVisible"]
                        }, a = (0, s.Z)(i, R, o);
                        return r && n && (a.root += ` ${n}`), a
                    })(Ee);
                return (0, m.jsxs)(j, (0, n.Z)({
                    as: be,
                    className: (0, a.Z)(xe.root, v),
                    ownerState: Ee,
                    onBlur: fe,
                    onClick: C,
                    onContextMenu: ae,
                    onFocus: he,
                    onKeyDown: ge,
                    onKeyUp: ye,
                    onMouseDown: ie,
                    onMouseLeave: ce,
                    onMouseUp: le,
                    onDragLeave: se,
                    onTouchEnd: ue,
                    onTouchMove: pe,
                    onTouchStart: de,
                    ref: Se,
                    tabIndex: y ? -1 : z,
                    type: F
                }, we, K, {
                    children: [h, ne ? (0, m.jsx)(k, (0, n.Z)({
                        ref: G,
                        center: f
                    }, N)) : null]
                }))
            }))
        },
        85071: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return I
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(41796),
                c = r(98216),
                d = r(11496),
                u = r(49299),
                p = r(74423),
                f = r(49990),
                h = r(1588),
                m = r(34867);

            function v(e) {
                return (0, m.Z)("PrivateSwitchBase", e)
            }(0, h.Z)("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
            var g = r(85893);
            const y = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"],
                b = (0, d.ZP)(f.Z)((({
                    ownerState: e
                }) => (0, o.Z)({
                    padding: 9,
                    borderRadius: "50%"
                }, "start" === e.edge && {
                    marginLeft: "small" === e.size ? -3 : -12
                }, "end" === e.edge && {
                    marginRight: "small" === e.size ? -3 : -12
                }))),
                w = (0, d.ZP)("input")({
                    cursor: "inherit",
                    position: "absolute",
                    opacity: 0,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    margin: 0,
                    padding: 0,
                    zIndex: 1
                });
            var S = i.forwardRef((function(e, t) {
                    const {
                        autoFocus: r,
                        checked: i,
                        checkedIcon: l,
                        className: d,
                        defaultChecked: f,
                        disabled: h,
                        disableFocusRipple: m = !1,
                        edge: S = !1,
                        icon: E,
                        id: x,
                        inputProps: C,
                        inputRef: P,
                        name: T,
                        onBlur: _,
                        onChange: O,
                        onFocus: A,
                        readOnly: k,
                        required: M = !1,
                        tabIndex: R,
                        type: Z,
                        value: I
                    } = e, j = (0, n.Z)(e, y), [H, L] = (0, u.Z)({
                        controlled: i,
                        default: Boolean(f),
                        name: "SwitchBase",
                        state: "checked"
                    }), D = (0, p.Z)();
                    let $ = h;
                    D && "undefined" === typeof $ && ($ = D.disabled);
                    const W = "checkbox" === Z || "radio" === Z,
                        z = (0, o.Z)({}, e, {
                            checked: H,
                            disabled: $,
                            disableFocusRipple: m,
                            edge: S
                        }),
                        N = (e => {
                            const {
                                classes: t,
                                checked: r,
                                disabled: n,
                                edge: o
                            } = e, i = {
                                root: ["root", r && "checked", n && "disabled", o && `edge${(0,c.Z)(o)}`],
                                input: ["input"]
                            };
                            return (0, s.Z)(i, v, t)
                        })(z);
                    return (0, g.jsxs)(b, (0, o.Z)({
                        component: "span",
                        className: (0, a.Z)(N.root, d),
                        centerRipple: !0,
                        focusRipple: !m,
                        disabled: $,
                        tabIndex: null,
                        role: void 0,
                        onFocus: e => {
                            A && A(e), D && D.onFocus && D.onFocus(e)
                        },
                        onBlur: e => {
                            _ && _(e), D && D.onBlur && D.onBlur(e)
                        },
                        ownerState: z,
                        ref: t
                    }, j, {
                        children: [(0, g.jsx)(w, (0, o.Z)({
                            autoFocus: r,
                            checked: i,
                            defaultChecked: f,
                            className: N.input,
                            disabled: $,
                            id: W ? x : void 0,
                            name: T,
                            onChange: e => {
                                if (e.nativeEvent.defaultPrevented) return;
                                const t = e.target.checked;
                                L(t), O && O(e, t)
                            },
                            readOnly: k,
                            ref: P,
                            required: M,
                            ownerState: z,
                            tabIndex: R,
                            type: Z
                        }, "checkbox" === Z && void 0 === I ? {} : {
                            value: I
                        }, C)), H ? l : E]
                    }))
                })),
                E = r(88169),
                x = (0, E.Z)((0, g.jsx)("path", {
                    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                }), "CheckBoxOutlineBlank"),
                C = (0, E.Z)((0, g.jsx)("path", {
                    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                }), "CheckBox"),
                P = (0, E.Z)((0, g.jsx)("path", {
                    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
                }), "IndeterminateCheckBox"),
                T = r(33616);

            function _(e) {
                return (0, m.Z)("MuiCheckbox", e)
            }
            var O = (0, h.Z)("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary"]);
            const A = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"],
                k = (0, d.ZP)(S, {
                    shouldForwardProp: e => (0, d.FO)(e) || "classes" === e,
                    name: "MuiCheckbox",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, r.indeterminate && t.indeterminate, "default" !== r.color && t[`color${(0,c.Z)(r.color)}`]]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, o.Z)({
                    color: (e.vars || e).palette.text.secondary
                }, !t.disableRipple && {
                    "&:hover": {
                        backgroundColor: e.vars ? `rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, l.Fq)("default" === t.color ? e.palette.action.active : e.palette[t.color].main, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    }
                }, "default" !== t.color && {
                    [`&.${O.checked}, &.${O.indeterminate}`]: {
                        color: (e.vars || e).palette[t.color].main
                    },
                    [`&.${O.disabled}`]: {
                        color: (e.vars || e).palette.action.disabled
                    }
                }))),
                M = (0, g.jsx)(C, {}),
                R = (0, g.jsx)(x, {}),
                Z = (0, g.jsx)(P, {});
            var I = i.forwardRef((function(e, t) {
                var r, l;
                const d = (0, T.Z)({
                        props: e,
                        name: "MuiCheckbox"
                    }),
                    {
                        checkedIcon: u = M,
                        color: p = "primary",
                        icon: f = R,
                        indeterminate: h = !1,
                        indeterminateIcon: m = Z,
                        inputProps: v,
                        size: y = "medium",
                        className: b
                    } = d,
                    w = (0, n.Z)(d, A),
                    S = h ? m : f,
                    E = h ? m : u,
                    x = (0, o.Z)({}, d, {
                        color: p,
                        indeterminate: h,
                        size: y
                    }),
                    C = (e => {
                        const {
                            classes: t,
                            indeterminate: r,
                            color: n
                        } = e, i = {
                            root: ["root", r && "indeterminate", `color${(0,c.Z)(n)}`]
                        }, a = (0, s.Z)(i, _, t);
                        return (0, o.Z)({}, t, a)
                    })(x);
                return (0, g.jsx)(k, (0, o.Z)({
                    type: "checkbox",
                    inputProps: (0, o.Z)({
                        "data-indeterminate": h
                    }, v),
                    icon: i.cloneElement(S, {
                        fontSize: null != (r = S.props.fontSize) ? r : y
                    }),
                    checkedIcon: i.cloneElement(E, {
                        fontSize: null != (l = E.props.fontSize) ? l : y
                    }),
                    ownerState: x,
                    ref: t,
                    className: (0, a.Z)(C.root, b)
                }, w, {
                    classes: C
                }))
            }))
        },
        16628: function(e, t, r) {
            var n = r(32793),
                o = r(1048),
                i = r(67294),
                a = r(98885),
                s = r(2734),
                l = r(30577),
                c = r(51705),
                d = r(85893);
            const u = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"],
                p = {
                    entering: {
                        opacity: 1
                    },
                    entered: {
                        opacity: 1
                    }
                },
                f = i.forwardRef((function(e, t) {
                    const r = (0, s.Z)(),
                        f = {
                            enter: r.transitions.duration.enteringScreen,
                            exit: r.transitions.duration.leavingScreen
                        },
                        {
                            addEndListener: h,
                            appear: m = !0,
                            children: v,
                            easing: g,
                            in: y,
                            onEnter: b,
                            onEntered: w,
                            onEntering: S,
                            onExit: E,
                            onExited: x,
                            onExiting: C,
                            style: P,
                            timeout: T = f,
                            TransitionComponent: _ = a.ZP
                        } = e,
                        O = (0, o.Z)(e, u),
                        A = i.useRef(null),
                        k = (0, c.Z)(A, v.ref, t),
                        M = e => t => {
                            if (e) {
                                const r = A.current;
                                void 0 === t ? e(r) : e(r, t)
                            }
                        },
                        R = M(S),
                        Z = M(((e, t) => {
                            (0, l.n)(e);
                            const n = (0, l.C)({
                                style: P,
                                timeout: T,
                                easing: g
                            }, {
                                mode: "enter"
                            });
                            e.style.webkitTransition = r.transitions.create("opacity", n), e.style.transition = r.transitions.create("opacity", n), b && b(e, t)
                        })),
                        I = M(w),
                        j = M(C),
                        H = M((e => {
                            const t = (0, l.C)({
                                style: P,
                                timeout: T,
                                easing: g
                            }, {
                                mode: "exit"
                            });
                            e.style.webkitTransition = r.transitions.create("opacity", t), e.style.transition = r.transitions.create("opacity", t), E && E(e)
                        })),
                        L = M(x);
                    return (0, d.jsx)(_, (0, n.Z)({
                        appear: m,
                        in: y,
                        nodeRef: A,
                        onEnter: Z,
                        onEntered: I,
                        onEntering: R,
                        onExit: H,
                        onExited: L,
                        onExiting: j,
                        addEndListener: e => {
                            h && h(A.current, e)
                        },
                        timeout: T
                    }, O, {
                        children: (e, t) => i.cloneElement(v, (0, n.Z)({
                            style: (0, n.Z)({
                                opacity: 0,
                                visibility: "exited" !== e || y ? void 0 : "hidden"
                            }, p[e], P, v.props.style),
                            ref: k
                        }, t))
                    }))
                }));
            t.Z = f
        },
        78288: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return S
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(67294),
                a = r(59766),
                s = r(94780),
                l = r(96144),
                c = r(11496),
                d = r(33616),
                u = r(1588),
                p = r(34867),
                f = r(55827);

            function h(e) {
                return (0, p.Z)("MuiFilledInput", e)
            }
            var m = (0, o.Z)({}, f.Z, (0, u.Z)("MuiFilledInput", ["root", "underline", "input"])),
                v = r(85893);
            const g = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"],
                y = (0, c.ZP)(l.Ej, {
                    shouldForwardProp: e => (0, c.FO)(e) || "classes" === e,
                    name: "MuiFilledInput",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [...(0, l.Gx)(e, t), !r.disableUnderline && t.underline]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => {
                    var r;
                    const n = "light" === e.palette.mode,
                        i = n ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
                        a = n ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
                        s = n ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
                        l = n ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
                    return (0, o.Z)({
                        position: "relative",
                        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a,
                        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
                        borderTopRightRadius: (e.vars || e).shape.borderRadius,
                        transition: e.transitions.create("background-color", {
                            duration: e.transitions.duration.shorter,
                            easing: e.transitions.easing.easeOut
                        }),
                        "&:hover": {
                            backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
                            "@media (hover: none)": {
                                backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a
                            }
                        },
                        [`&.${m.focused}`]: {
                            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a
                        },
                        [`&.${m.disabled}`]: {
                            backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
                        }
                    }, !t.disableUnderline && {
                        "&:after": {
                            borderBottom: `2px solid ${null==(r=(e.vars||e).palette[t.color||"primary"])?void 0:r.main}`,
                            left: 0,
                            bottom: 0,
                            content: '""',
                            position: "absolute",
                            right: 0,
                            transform: "scaleX(0)",
                            transition: e.transitions.create("transform", {
                                duration: e.transitions.duration.shorter,
                                easing: e.transitions.easing.easeOut
                            }),
                            pointerEvents: "none"
                        },
                        [`&.${m.focused}:after`]: {
                            transform: "scaleX(1) translateX(0)"
                        },
                        [`&.${m.error}`]: {
                            "&:before, &:after": {
                                borderBottomColor: (e.vars || e).palette.error.main
                            }
                        },
                        "&:before": {
                            borderBottom: `1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:i}`,
                            left: 0,
                            bottom: 0,
                            content: '"\\00a0"',
                            position: "absolute",
                            right: 0,
                            transition: e.transitions.create("border-bottom-color", {
                                duration: e.transitions.duration.shorter
                            }),
                            pointerEvents: "none"
                        },
                        [`&:hover:not(.${m.disabled}, .${m.error}):before`]: {
                            borderBottom: `1px solid ${(e.vars||e).palette.text.primary}`
                        },
                        [`&.${m.disabled}:before`]: {
                            borderBottomStyle: "dotted"
                        }
                    }, t.startAdornment && {
                        paddingLeft: 12
                    }, t.endAdornment && {
                        paddingRight: 12
                    }, t.multiline && (0, o.Z)({
                        padding: "25px 12px 8px"
                    }, "small" === t.size && {
                        paddingTop: 21,
                        paddingBottom: 4
                    }, t.hiddenLabel && {
                        paddingTop: 16,
                        paddingBottom: 17
                    }))
                })),
                b = (0, c.ZP)(l.rA, {
                    name: "MuiFilledInput",
                    slot: "Input",
                    overridesResolver: l._o
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, o.Z)({
                    paddingTop: 25,
                    paddingRight: 12,
                    paddingBottom: 8,
                    paddingLeft: 12
                }, !e.vars && {
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: "light" === e.palette.mode ? null : "0 0 0 100px #266798 inset",
                        WebkitTextFillColor: "light" === e.palette.mode ? null : "#fff",
                        caretColor: "light" === e.palette.mode ? null : "#fff",
                        borderTopLeftRadius: "inherit",
                        borderTopRightRadius: "inherit"
                    }
                }, e.vars && {
                    "&:-webkit-autofill": {
                        borderTopLeftRadius: "inherit",
                        borderTopRightRadius: "inherit"
                    },
                    [e.getColorSchemeSelector("dark")]: {
                        "&:-webkit-autofill": {
                            WebkitBoxShadow: "0 0 0 100px #266798 inset",
                            WebkitTextFillColor: "#fff",
                            caretColor: "#fff"
                        }
                    }
                }, "small" === t.size && {
                    paddingTop: 21,
                    paddingBottom: 4
                }, t.hiddenLabel && {
                    paddingTop: 16,
                    paddingBottom: 17
                }, t.multiline && {
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0
                }, t.startAdornment && {
                    paddingLeft: 0
                }, t.endAdornment && {
                    paddingRight: 0
                }, t.hiddenLabel && "small" === t.size && {
                    paddingTop: 8,
                    paddingBottom: 9
                }))),
                w = i.forwardRef((function(e, t) {
                    var r, i, c, u;
                    const p = (0, d.Z)({
                            props: e,
                            name: "MuiFilledInput"
                        }),
                        {
                            components: f = {},
                            componentsProps: m,
                            fullWidth: w = !1,
                            inputComponent: S = "input",
                            multiline: E = !1,
                            slotProps: x,
                            slots: C = {},
                            type: P = "text"
                        } = p,
                        T = (0, n.Z)(p, g),
                        _ = (0, o.Z)({}, p, {
                            fullWidth: w,
                            inputComponent: S,
                            multiline: E,
                            type: P
                        }),
                        O = (e => {
                            const {
                                classes: t,
                                disableUnderline: r
                            } = e, n = {
                                root: ["root", !r && "underline"],
                                input: ["input"]
                            }, i = (0, s.Z)(n, h, t);
                            return (0, o.Z)({}, t, i)
                        })(p),
                        A = {
                            root: {
                                ownerState: _
                            },
                            input: {
                                ownerState: _
                            }
                        },
                        k = (null != x ? x : m) ? (0, a.Z)(null != x ? x : m, A) : A,
                        M = null != (r = null != (i = C.root) ? i : f.Root) ? r : y,
                        R = null != (c = null != (u = C.input) ? u : f.Input) ? c : b;
                    return (0, v.jsx)(l.ZP, (0, o.Z)({
                        slots: {
                            root: M,
                            input: R
                        },
                        componentsProps: k,
                        fullWidth: w,
                        inputComponent: S,
                        multiline: E,
                        ref: t,
                        type: P
                    }, T, {
                        classes: O
                    }))
                }));
            w.muiName = "Input";
            var S = w
        },
        47167: function(e, t, r) {
            const n = r(67294).createContext(void 0);
            t.Z = n
        },
        15704: function(e, t, r) {
            function n({
                props: e,
                states: t,
                muiFormControl: r
            }) {
                return t.reduce(((t, n) => (t[n] = e[n], r && "undefined" === typeof e[n] && (t[n] = r[n]), t)), {})
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        74423: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(67294),
                o = r(47167);

            function i() {
                return n.useContext(o.Z)
            }
        },
        93946: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return w
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(41796),
                c = r(11496),
                d = r(33616),
                u = r(49990),
                p = r(98216),
                f = r(1588),
                h = r(34867);

            function m(e) {
                return (0, h.Z)("MuiIconButton", e)
            }
            var v = (0, f.Z)("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]),
                g = r(85893);
            const y = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"],
                b = (0, c.ZP)(u.Z, {
                    name: "MuiIconButton",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, "default" !== r.color && t[`color${(0,p.Z)(r.color)}`], r.edge && t[`edge${(0,p.Z)(r.edge)}`], t[`size${(0,p.Z)(r.size)}`]]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, o.Z)({
                    textAlign: "center",
                    flex: "0 0 auto",
                    fontSize: e.typography.pxToRem(24),
                    padding: 8,
                    borderRadius: "50%",
                    overflow: "visible",
                    color: (e.vars || e).palette.action.active,
                    transition: e.transitions.create("background-color", {
                        duration: e.transitions.duration.shortest
                    })
                }, !t.disableRipple && {
                    "&:hover": {
                        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, l.Fq)(e.palette.action.active, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    }
                }, "start" === t.edge && {
                    marginLeft: "small" === t.size ? -3 : -12
                }, "end" === t.edge && {
                    marginRight: "small" === t.size ? -3 : -12
                })), (({
                    theme: e,
                    ownerState: t
                }) => {
                    var r;
                    const n = null == (r = (e.vars || e).palette) ? void 0 : r[t.color];
                    return (0, o.Z)({}, "inherit" === t.color && {
                        color: "inherit"
                    }, "inherit" !== t.color && "default" !== t.color && (0, o.Z)({
                        color: null == n ? void 0 : n.main
                    }, !t.disableRipple && {
                        "&:hover": (0, o.Z)({}, n && {
                            backgroundColor: e.vars ? `rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : (0, l.Fq)(n.main, e.palette.action.hoverOpacity)
                        }, {
                            "@media (hover: none)": {
                                backgroundColor: "transparent"
                            }
                        })
                    }), "small" === t.size && {
                        padding: 5,
                        fontSize: e.typography.pxToRem(18)
                    }, "large" === t.size && {
                        padding: 12,
                        fontSize: e.typography.pxToRem(28)
                    }, {
                        [`&.${v.disabled}`]: {
                            backgroundColor: "transparent",
                            color: (e.vars || e).palette.action.disabled
                        }
                    })
                }));
            var w = i.forwardRef((function(e, t) {
                const r = (0, d.Z)({
                        props: e,
                        name: "MuiIconButton"
                    }),
                    {
                        edge: i = !1,
                        children: l,
                        className: c,
                        color: u = "default",
                        disabled: f = !1,
                        disableFocusRipple: h = !1,
                        size: v = "medium"
                    } = r,
                    w = (0, n.Z)(r, y),
                    S = (0, o.Z)({}, r, {
                        edge: i,
                        color: u,
                        disabled: f,
                        disableFocusRipple: h,
                        size: v
                    }),
                    E = (e => {
                        const {
                            classes: t,
                            disabled: r,
                            color: n,
                            edge: o,
                            size: i
                        } = e, a = {
                            root: ["root", r && "disabled", "default" !== n && `color${(0,p.Z)(n)}`, o && `edge${(0,p.Z)(o)}`, `size${(0,p.Z)(i)}`]
                        };
                        return (0, s.Z)(a, m, t)
                    })(S);
                return (0, g.jsx)(b, (0, o.Z)({
                    className: (0, a.Z)(E.root, c),
                    centerRipple: !0,
                    focusRipple: !h,
                    disabled: f,
                    ref: t,
                    ownerState: S
                }, w, {
                    children: l
                }))
            }))
        },
        90089: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return S
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(67294),
                a = r(94780),
                s = r(59766),
                l = r(96144),
                c = r(11496),
                d = r(33616),
                u = r(1588),
                p = r(34867),
                f = r(55827);

            function h(e) {
                return (0, p.Z)("MuiInput", e)
            }
            var m = (0, o.Z)({}, f.Z, (0, u.Z)("MuiInput", ["root", "underline", "input"])),
                v = r(85893);
            const g = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"],
                y = (0, c.ZP)(l.Ej, {
                    shouldForwardProp: e => (0, c.FO)(e) || "classes" === e,
                    name: "MuiInput",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [...(0, l.Gx)(e, t), !r.disableUnderline && t.underline]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => {
                    let r = "light" === e.palette.mode ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
                    return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), (0, o.Z)({
                        position: "relative"
                    }, t.formControl && {
                        "label + &": {
                            marginTop: 16
                        }
                    }, !t.disableUnderline && {
                        "&:after": {
                            borderBottom: `2px solid ${(e.vars||e).palette[t.color].main}`,
                            left: 0,
                            bottom: 0,
                            content: '""',
                            position: "absolute",
                            right: 0,
                            transform: "scaleX(0)",
                            transition: e.transitions.create("transform", {
                                duration: e.transitions.duration.shorter,
                                easing: e.transitions.easing.easeOut
                            }),
                            pointerEvents: "none"
                        },
                        [`&.${m.focused}:after`]: {
                            transform: "scaleX(1) translateX(0)"
                        },
                        [`&.${m.error}`]: {
                            "&:before, &:after": {
                                borderBottomColor: (e.vars || e).palette.error.main
                            }
                        },
                        "&:before": {
                            borderBottom: `1px solid ${r}`,
                            left: 0,
                            bottom: 0,
                            content: '"\\00a0"',
                            position: "absolute",
                            right: 0,
                            transition: e.transitions.create("border-bottom-color", {
                                duration: e.transitions.duration.shorter
                            }),
                            pointerEvents: "none"
                        },
                        [`&:hover:not(.${m.disabled}, .${m.error}):before`]: {
                            borderBottom: `2px solid ${(e.vars||e).palette.text.primary}`,
                            "@media (hover: none)": {
                                borderBottom: `1px solid ${r}`
                            }
                        },
                        [`&.${m.disabled}:before`]: {
                            borderBottomStyle: "dotted"
                        }
                    })
                })),
                b = (0, c.ZP)(l.rA, {
                    name: "MuiInput",
                    slot: "Input",
                    overridesResolver: l._o
                })({}),
                w = i.forwardRef((function(e, t) {
                    var r, i, c, u;
                    const p = (0, d.Z)({
                            props: e,
                            name: "MuiInput"
                        }),
                        {
                            disableUnderline: f,
                            components: m = {},
                            componentsProps: w,
                            fullWidth: S = !1,
                            inputComponent: E = "input",
                            multiline: x = !1,
                            slotProps: C,
                            slots: P = {},
                            type: T = "text"
                        } = p,
                        _ = (0, n.Z)(p, g),
                        O = (e => {
                            const {
                                classes: t,
                                disableUnderline: r
                            } = e, n = {
                                root: ["root", !r && "underline"],
                                input: ["input"]
                            }, i = (0, a.Z)(n, h, t);
                            return (0, o.Z)({}, t, i)
                        })(p),
                        A = {
                            root: {
                                ownerState: {
                                    disableUnderline: f
                                }
                            }
                        },
                        k = (null != C ? C : w) ? (0, s.Z)(null != C ? C : w, A) : A,
                        M = null != (r = null != (i = P.root) ? i : m.Root) ? r : y,
                        R = null != (c = null != (u = P.input) ? u : m.Input) ? c : b;
                    return (0, v.jsx)(l.ZP, (0, o.Z)({
                        slots: {
                            root: M,
                            input: R
                        },
                        slotProps: k,
                        fullWidth: S,
                        inputComponent: E,
                        multiline: x,
                        ref: t,
                        type: T
                    }, _, {
                        classes: O
                    }))
                }));
            w.muiName = "Input";
            var S = w
        },
        96144: function(e, t, r) {
            r.d(t, {
                rA: function() {
                    return F
                },
                Ej: function() {
                    return B
                },
                ZP: function() {
                    return U
                },
                _o: function() {
                    return N
                },
                Gx: function() {
                    return z
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(71387),
                a = r(67294),
                s = r(86010),
                l = r(94780),
                c = r(38331),
                d = r(23960),
                u = r(73935),
                p = r(33703),
                f = r(74161),
                h = r(39336),
                m = r(73546),
                v = r(85893);
            const g = ["onChange", "maxRows", "minRows", "style", "value"];

            function y(e) {
                return parseInt(e, 10) || 0
            }
            const b = {
                visibility: "hidden",
                position: "absolute",
                overflow: "hidden",
                height: 0,
                top: 0,
                left: 0,
                transform: "translateZ(0)"
            };

            function w(e) {
                return void 0 === e || null === e || 0 === Object.keys(e).length || 0 === e.outerHeightStyle && !e.overflow
            }
            var S = a.forwardRef((function(e, t) {
                    const {
                        onChange: r,
                        maxRows: n,
                        minRows: o = 1,
                        style: i,
                        value: s
                    } = e, l = (0, d.Z)(e, g), {
                        current: S
                    } = a.useRef(null != s), E = a.useRef(null), x = (0, p.Z)(t, E), C = a.useRef(null), P = a.useRef(0), [T, _] = a.useState({
                        outerHeightStyle: 0
                    }), O = a.useCallback((() => {
                        const t = E.current,
                            r = (0, f.Z)(t).getComputedStyle(t);
                        if ("0px" === r.width) return {
                            outerHeightStyle: 0
                        };
                        const i = C.current;
                        i.style.width = r.width, i.value = t.value || e.placeholder || "x", "\n" === i.value.slice(-1) && (i.value += " ");
                        const a = r.boxSizing,
                            s = y(r.paddingBottom) + y(r.paddingTop),
                            l = y(r.borderBottomWidth) + y(r.borderTopWidth),
                            c = i.scrollHeight;
                        i.value = "x";
                        const d = i.scrollHeight;
                        let u = c;
                        o && (u = Math.max(Number(o) * d, u)), n && (u = Math.min(Number(n) * d, u)), u = Math.max(u, d);
                        return {
                            outerHeightStyle: u + ("border-box" === a ? s + l : 0),
                            overflow: Math.abs(u - c) <= 1
                        }
                    }), [n, o, e.placeholder]), A = (e, t) => {
                        const {
                            outerHeightStyle: r,
                            overflow: n
                        } = t;
                        return P.current < 20 && (r > 0 && Math.abs((e.outerHeightStyle || 0) - r) > 1 || e.overflow !== n) ? (P.current += 1, {
                            overflow: n,
                            outerHeightStyle: r
                        }) : e
                    }, k = a.useCallback((() => {
                        const e = O();
                        w(e) || _((t => A(t, e)))
                    }), [O]);
                    a.useEffect((() => {
                        const e = (0, h.Z)((() => {
                            P.current = 0, E.current && (() => {
                                const e = O();
                                w(e) || u.flushSync((() => {
                                    _((t => A(t, e)))
                                }))
                            })()
                        }));
                        let t;
                        const r = E.current,
                            n = (0, f.Z)(r);
                        return n.addEventListener("resize", e), "undefined" !== typeof ResizeObserver && (t = new ResizeObserver(e), t.observe(r)), () => {
                            e.clear(), n.removeEventListener("resize", e), t && t.disconnect()
                        }
                    })), (0, m.Z)((() => {
                        k()
                    })), a.useEffect((() => {
                        P.current = 0
                    }), [s]);
                    return (0, v.jsxs)(a.Fragment, {
                        children: [(0, v.jsx)("textarea", (0, c.Z)({
                            value: s,
                            onChange: e => {
                                P.current = 0, S || k(), r && r(e)
                            },
                            ref: x,
                            rows: o,
                            style: (0, c.Z)({
                                height: T.outerHeightStyle,
                                overflow: T.overflow ? "hidden" : void 0
                            }, i)
                        }, l)), (0, v.jsx)("textarea", {
                            "aria-hidden": !0,
                            className: e.className,
                            readOnly: !0,
                            ref: C,
                            tabIndex: -1,
                            style: (0, c.Z)({}, b, i, {
                                paddingTop: 0,
                                paddingBottom: 0
                            })
                        })]
                    })
                })),
                E = r(28442),
                x = r(15704),
                C = r(47167),
                P = r(74423),
                T = r(11496),
                _ = r(33616),
                O = r(98216),
                A = r(51705),
                k = r(58974),
                M = r(70917);

            function R(e) {
                const {
                    styles: t,
                    defaultTheme: r = {}
                } = e, n = "function" === typeof t ? e => {
                    return t(void 0 === (n = e) || null === n || 0 === Object.keys(n).length ? r : e);
                    var n
                } : t;
                return (0, v.jsx)(M.xB, {
                    styles: n
                })
            }
            var Z = r(96682);
            var I = function({
                    styles: e,
                    themeId: t,
                    defaultTheme: r = {}
                }) {
                    const n = (0, Z.Z)(r),
                        o = "function" === typeof e ? e(t && n[t] || n) : e;
                    return (0, v.jsx)(R, {
                        styles: o
                    })
                },
                j = r(90247),
                H = r(10606);
            var L = function(e) {
                    return (0, v.jsx)(I, (0, o.Z)({}, e, {
                        defaultTheme: j.Z,
                        themeId: H.Z
                    }))
                },
                D = r(5108),
                $ = r(55827);
            const W = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"],
                z = (e, t) => {
                    const {
                        ownerState: r
                    } = e;
                    return [t.root, r.formControl && t.formControl, r.startAdornment && t.adornedStart, r.endAdornment && t.adornedEnd, r.error && t.error, "small" === r.size && t.sizeSmall, r.multiline && t.multiline, r.color && t[`color${(0,O.Z)(r.color)}`], r.fullWidth && t.fullWidth, r.hiddenLabel && t.hiddenLabel]
                },
                N = (e, t) => {
                    const {
                        ownerState: r
                    } = e;
                    return [t.input, "small" === r.size && t.inputSizeSmall, r.multiline && t.inputMultiline, "search" === r.type && t.inputTypeSearch, r.startAdornment && t.inputAdornedStart, r.endAdornment && t.inputAdornedEnd, r.hiddenLabel && t.inputHiddenLabel]
                },
                B = (0, T.ZP)("div", {
                    name: "MuiInputBase",
                    slot: "Root",
                    overridesResolver: z
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, o.Z)({}, e.typography.body1, {
                    color: (e.vars || e).palette.text.primary,
                    lineHeight: "1.4375em",
                    boxSizing: "border-box",
                    position: "relative",
                    cursor: "text",
                    display: "inline-flex",
                    alignItems: "center",
                    [`&.${$.Z.disabled}`]: {
                        color: (e.vars || e).palette.text.disabled,
                        cursor: "default"
                    }
                }, t.multiline && (0, o.Z)({
                    padding: "4px 0 5px"
                }, "small" === t.size && {
                    paddingTop: 1
                }), t.fullWidth && {
                    width: "100%"
                }))),
                F = (0, T.ZP)("input", {
                    name: "MuiInputBase",
                    slot: "Input",
                    overridesResolver: N
                })((({
                    theme: e,
                    ownerState: t
                }) => {
                    const r = "light" === e.palette.mode,
                        n = (0, o.Z)({
                            color: "currentColor"
                        }, e.vars ? {
                            opacity: e.vars.opacity.inputPlaceholder
                        } : {
                            opacity: r ? .42 : .5
                        }, {
                            transition: e.transitions.create("opacity", {
                                duration: e.transitions.duration.shorter
                            })
                        }),
                        i = {
                            opacity: "0 !important"
                        },
                        a = e.vars ? {
                            opacity: e.vars.opacity.inputPlaceholder
                        } : {
                            opacity: r ? .42 : .5
                        };
                    return (0, o.Z)({
                        font: "inherit",
                        letterSpacing: "inherit",
                        color: "currentColor",
                        padding: "4px 0 5px",
                        border: 0,
                        boxSizing: "content-box",
                        background: "none",
                        height: "1.4375em",
                        margin: 0,
                        WebkitTapHighlightColor: "transparent",
                        display: "block",
                        minWidth: 0,
                        width: "100%",
                        animationName: "mui-auto-fill-cancel",
                        animationDuration: "10ms",
                        "&::-webkit-input-placeholder": n,
                        "&::-moz-placeholder": n,
                        "&:-ms-input-placeholder": n,
                        "&::-ms-input-placeholder": n,
                        "&:focus": {
                            outline: 0
                        },
                        "&:invalid": {
                            boxShadow: "none"
                        },
                        "&::-webkit-search-decoration": {
                            WebkitAppearance: "none"
                        },
                        [`label[data-shrink=false] + .${$.Z.formControl} &`]: {
                            "&::-webkit-input-placeholder": i,
                            "&::-moz-placeholder": i,
                            "&:-ms-input-placeholder": i,
                            "&::-ms-input-placeholder": i,
                            "&:focus::-webkit-input-placeholder": a,
                            "&:focus::-moz-placeholder": a,
                            "&:focus:-ms-input-placeholder": a,
                            "&:focus::-ms-input-placeholder": a
                        },
                        [`&.${$.Z.disabled}`]: {
                            opacity: 1,
                            WebkitTextFillColor: (e.vars || e).palette.text.disabled
                        },
                        "&:-webkit-autofill": {
                            animationDuration: "5000s",
                            animationName: "mui-auto-fill"
                        }
                    }, "small" === t.size && {
                        paddingTop: 1
                    }, t.multiline && {
                        height: "auto",
                        resize: "none",
                        padding: 0,
                        paddingTop: 0
                    }, "search" === t.type && {
                        MozAppearance: "textfield"
                    })
                })),
                K = (0, v.jsx)(L, {
                    styles: {
                        "@keyframes mui-auto-fill": {
                            from: {
                                display: "block"
                            }
                        },
                        "@keyframes mui-auto-fill-cancel": {
                            from: {
                                display: "block"
                            }
                        }
                    }
                });
            var U = a.forwardRef((function(e, t) {
                var r;
                const c = (0, _.Z)({
                        props: e,
                        name: "MuiInputBase"
                    }),
                    {
                        "aria-describedby": d,
                        autoComplete: u,
                        autoFocus: p,
                        className: f,
                        components: h = {},
                        componentsProps: m = {},
                        defaultValue: g,
                        disabled: y,
                        disableInjectingGlobalStyles: b,
                        endAdornment: w,
                        fullWidth: T = !1,
                        id: M,
                        inputComponent: R = "input",
                        inputProps: Z = {},
                        inputRef: I,
                        maxRows: j,
                        minRows: H,
                        multiline: L = !1,
                        name: z,
                        onBlur: N,
                        onChange: U,
                        onClick: J,
                        onFocus: G,
                        onKeyDown: q,
                        onKeyUp: V,
                        placeholder: X,
                        readOnly: Y,
                        renderSuffix: Q,
                        rows: ee,
                        slotProps: te = {},
                        slots: re = {},
                        startAdornment: ne,
                        type: oe = "text",
                        value: ie
                    } = c,
                    ae = (0, n.Z)(c, W),
                    se = null != Z.value ? Z.value : ie,
                    {
                        current: le
                    } = a.useRef(null != se),
                    ce = a.useRef(),
                    de = a.useCallback((e => {
                        0
                    }), []),
                    ue = (0, A.Z)(ce, I, Z.ref, de),
                    [pe, fe] = a.useState(!1),
                    he = (0, P.Z)();
                const me = (0, x.Z)({
                    props: c,
                    muiFormControl: he,
                    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
                });
                me.focused = he ? he.focused : pe, a.useEffect((() => {
                    !he && y && pe && (fe(!1), N && N())
                }), [he, y, pe, N]);
                const ve = he && he.onFilled,
                    ge = he && he.onEmpty,
                    ye = a.useCallback((e => {
                        (0, D.vd)(e) ? ve && ve(): ge && ge()
                    }), [ve, ge]);
                (0, k.Z)((() => {
                    le && ye({
                        value: se
                    })
                }), [se, ye, le]);
                a.useEffect((() => {
                    ye(ce.current)
                }), []);
                let be = R,
                    we = Z;
                L && "input" === be && (we = ee ? (0, o.Z)({
                    type: void 0,
                    minRows: ee,
                    maxRows: ee
                }, we) : (0, o.Z)({
                    type: void 0,
                    maxRows: j,
                    minRows: H
                }, we), be = S);
                a.useEffect((() => {
                    he && he.setAdornedStart(Boolean(ne))
                }), [he, ne]);
                const Se = (0, o.Z)({}, c, {
                        color: me.color || "primary",
                        disabled: me.disabled,
                        endAdornment: w,
                        error: me.error,
                        focused: me.focused,
                        formControl: he,
                        fullWidth: T,
                        hiddenLabel: me.hiddenLabel,
                        multiline: L,
                        size: me.size,
                        startAdornment: ne,
                        type: oe
                    }),
                    Ee = (e => {
                        const {
                            classes: t,
                            color: r,
                            disabled: n,
                            error: o,
                            endAdornment: i,
                            focused: a,
                            formControl: s,
                            fullWidth: c,
                            hiddenLabel: d,
                            multiline: u,
                            readOnly: p,
                            size: f,
                            startAdornment: h,
                            type: m
                        } = e, v = {
                            root: ["root", `color${(0,O.Z)(r)}`, n && "disabled", o && "error", c && "fullWidth", a && "focused", s && "formControl", "small" === f && "sizeSmall", u && "multiline", h && "adornedStart", i && "adornedEnd", d && "hiddenLabel", p && "readOnly"],
                            input: ["input", n && "disabled", "search" === m && "inputTypeSearch", u && "inputMultiline", "small" === f && "inputSizeSmall", d && "inputHiddenLabel", h && "inputAdornedStart", i && "inputAdornedEnd", p && "readOnly"]
                        };
                        return (0, l.Z)(v, $.u, t)
                    })(Se),
                    xe = re.root || h.Root || B,
                    Ce = te.root || m.root || {},
                    Pe = re.input || h.Input || F;
                return we = (0, o.Z)({}, we, null != (r = te.input) ? r : m.input), (0, v.jsxs)(a.Fragment, {
                    children: [!b && K, (0, v.jsxs)(xe, (0, o.Z)({}, Ce, !(0, E.Z)(xe) && {
                        ownerState: (0, o.Z)({}, Se, Ce.ownerState)
                    }, {
                        ref: t,
                        onClick: e => {
                            ce.current && e.currentTarget === e.target && ce.current.focus(), J && !me.disabled && J(e)
                        }
                    }, ae, {
                        className: (0, s.Z)(Ee.root, Ce.className, f, Y && "MuiInputBase-readOnly"),
                        children: [ne, (0, v.jsx)(C.Z.Provider, {
                            value: null,
                            children: (0, v.jsx)(Pe, (0, o.Z)({
                                ownerState: Se,
                                "aria-invalid": me.error,
                                "aria-describedby": d,
                                autoComplete: u,
                                autoFocus: p,
                                defaultValue: g,
                                disabled: me.disabled,
                                id: M,
                                onAnimationStart: e => {
                                    ye("mui-auto-fill-cancel" === e.animationName ? ce.current : {
                                        value: "x"
                                    })
                                },
                                name: z,
                                placeholder: X,
                                readOnly: Y,
                                required: me.required,
                                rows: ee,
                                value: se,
                                onKeyDown: q,
                                onKeyUp: V,
                                type: oe
                            }, we, !(0, E.Z)(Pe) && {
                                as: be,
                                ownerState: (0, o.Z)({}, Se, we.ownerState)
                            }, {
                                ref: ue,
                                className: (0, s.Z)(Ee.input, we.className, Y && "MuiInputBase-readOnly"),
                                onBlur: e => {
                                    N && N(e), Z.onBlur && Z.onBlur(e), he && he.onBlur ? he.onBlur(e) : fe(!1)
                                },
                                onChange: (e, ...t) => {
                                    if (!le) {
                                        const t = e.target || ce.current;
                                        if (null == t) throw new Error((0, i.Z)(1));
                                        ye({
                                            value: t.value
                                        })
                                    }
                                    Z.onChange && Z.onChange(e, ...t), U && U(e, ...t)
                                },
                                onFocus: e => {
                                    me.disabled ? e.stopPropagation() : (G && G(e), Z.onFocus && Z.onFocus(e), he && he.onFocus ? he.onFocus(e) : fe(!0))
                                }
                            }))
                        }), w, Q ? Q((0, o.Z)({}, me, {
                            startAdornment: ne
                        })) : null]
                    }))]
                })
            }))
        },
        55827: function(e, t, r) {
            r.d(t, {
                u: function() {
                    return i
                }
            });
            var n = r(1588),
                o = r(34867);

            function i(e) {
                return (0, o.Z)("MuiInputBase", e)
            }
            const a = (0, n.Z)("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
            t.Z = a
        },
        5108: function(e, t, r) {
            function n(e) {
                return null != e && !(Array.isArray(e) && 0 === e.length)
            }

            function o(e, t = !1) {
                return e && (n(e.value) && "" !== e.value || t && n(e.defaultValue) && "" !== e.defaultValue)
            }

            function i(e) {
                return e.startAdornment
            }
            r.d(t, {
                B7: function() {
                    return i
                },
                vd: function() {
                    return o
                }
            })
        },
        78462: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return g
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(11496),
                c = r(33616),
                d = r(59773),
                u = r(1588),
                p = r(34867);

            function f(e) {
                return (0, p.Z)("MuiList", e)
            }(0, u.Z)("MuiList", ["root", "padding", "dense", "subheader"]);
            var h = r(85893);
            const m = ["children", "className", "component", "dense", "disablePadding", "subheader"],
                v = (0, l.ZP)("ul", {
                    name: "MuiList",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, !r.disablePadding && t.padding, r.dense && t.dense, r.subheader && t.subheader]
                    }
                })((({
                    ownerState: e
                }) => (0, o.Z)({
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    position: "relative"
                }, !e.disablePadding && {
                    paddingTop: 8,
                    paddingBottom: 8
                }, e.subheader && {
                    paddingTop: 0
                })));
            var g = i.forwardRef((function(e, t) {
                const r = (0, c.Z)({
                        props: e,
                        name: "MuiList"
                    }),
                    {
                        children: l,
                        className: u,
                        component: p = "ul",
                        dense: g = !1,
                        disablePadding: y = !1,
                        subheader: b
                    } = r,
                    w = (0, n.Z)(r, m),
                    S = i.useMemo((() => ({
                        dense: g
                    })), [g]),
                    E = (0, o.Z)({}, r, {
                        component: p,
                        dense: g,
                        disablePadding: y
                    }),
                    x = (e => {
                        const {
                            classes: t,
                            disablePadding: r,
                            dense: n,
                            subheader: o
                        } = e, i = {
                            root: ["root", !r && "padding", n && "dense", o && "subheader"]
                        };
                        return (0, s.Z)(i, f, t)
                    })(E);
                return (0, h.jsx)(d.Z.Provider, {
                    value: S,
                    children: (0, h.jsxs)(v, (0, o.Z)({
                        as: p,
                        className: (0, a.Z)(x.root, u),
                        ref: t,
                        ownerState: E
                    }, w, {
                        children: [b, l]
                    }))
                })
            }))
        },
        59773: function(e, t, r) {
            const n = r(67294).createContext({});
            t.Z = n
        },
        38208: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return W
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(67294),
                a = r(86010),
                s = r(38331),
                l = r(23960),
                c = r(33703),
                d = r(82690),
                u = r(59948);

            function p(...e) {
                return e.reduce(((e, t) => null == t ? e : function(...r) {
                    e.apply(this, r), t.apply(this, r)
                }), (() => {}))
            }
            var f = r(94780),
                h = r(78385),
                m = r(74161),
                v = r(95806);

            function g(e, t) {
                t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
            }

            function y(e) {
                return parseInt((0, m.Z)(e).getComputedStyle(e).paddingRight, 10) || 0
            }

            function b(e, t, r, n, o) {
                const i = [t, r, ...n];
                [].forEach.call(e.children, (e => {
                    const t = -1 === i.indexOf(e),
                        r = ! function(e) {
                            const t = -1 !== ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName),
                                r = "INPUT" === e.tagName && "hidden" === e.getAttribute("type");
                            return t || r
                        }(e);
                    t && r && g(e, o)
                }))
            }

            function w(e, t) {
                let r = -1;
                return e.some(((e, n) => !!t(e) && (r = n, !0))), r
            }

            function S(e, t) {
                const r = [],
                    n = e.container;
                if (!t.disableScrollLock) {
                    if (function(e) {
                            const t = (0, d.Z)(e);
                            return t.body === e ? (0, m.Z)(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
                        }(n)) {
                        const e = (0, v.Z)((0, d.Z)(n));
                        r.push({
                            value: n.style.paddingRight,
                            property: "padding-right",
                            el: n
                        }), n.style.paddingRight = `${y(n)+e}px`;
                        const t = (0, d.Z)(n).querySelectorAll(".mui-fixed");
                        [].forEach.call(t, (t => {
                            r.push({
                                value: t.style.paddingRight,
                                property: "padding-right",
                                el: t
                            }), t.style.paddingRight = `${y(t)+e}px`
                        }))
                    }
                    let e;
                    if (n.parentNode instanceof DocumentFragment) e = (0, d.Z)(n).body;
                    else {
                        const t = n.parentElement,
                            r = (0, m.Z)(n);
                        e = "HTML" === (null == t ? void 0 : t.nodeName) && "scroll" === r.getComputedStyle(t).overflowY ? t : n
                    }
                    r.push({
                        value: e.style.overflow,
                        property: "overflow",
                        el: e
                    }, {
                        value: e.style.overflowX,
                        property: "overflow-x",
                        el: e
                    }, {
                        value: e.style.overflowY,
                        property: "overflow-y",
                        el: e
                    }), e.style.overflow = "hidden"
                }
                return () => {
                    r.forEach((({
                        value: e,
                        el: t,
                        property: r
                    }) => {
                        e ? t.style.setProperty(r, e) : t.style.removeProperty(r)
                    }))
                }
            }
            var E = r(93470),
                x = r(1588),
                C = r(34867);

            function P(e) {
                return (0, C.Z)("MuiModal", e)
            }(0, x.Z)("MuiModal", ["root", "hidden", "backdrop"]);
            var T = r(24349),
                _ = r(31873),
                O = r(85893);
            const A = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"];
            const k = new class {
                constructor() {
                    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = []
                }
                add(e, t) {
                    let r = this.modals.indexOf(e);
                    if (-1 !== r) return r;
                    r = this.modals.length, this.modals.push(e), e.modalRef && g(e.modalRef, !1);
                    const n = function(e) {
                        const t = [];
                        return [].forEach.call(e.children, (e => {
                            "true" === e.getAttribute("aria-hidden") && t.push(e)
                        })), t
                    }(t);
                    b(t, e.mount, e.modalRef, n, !0);
                    const o = w(this.containers, (e => e.container === t));
                    return -1 !== o ? (this.containers[o].modals.push(e), r) : (this.containers.push({
                        modals: [e],
                        container: t,
                        restore: null,
                        hiddenSiblings: n
                    }), r)
                }
                mount(e, t) {
                    const r = w(this.containers, (t => -1 !== t.modals.indexOf(e))),
                        n = this.containers[r];
                    n.restore || (n.restore = S(n, t))
                }
                remove(e, t = !0) {
                    const r = this.modals.indexOf(e);
                    if (-1 === r) return r;
                    const n = w(this.containers, (t => -1 !== t.modals.indexOf(e))),
                        o = this.containers[n];
                    if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), 0 === o.modals.length) o.restore && o.restore(), e.modalRef && g(e.modalRef, t), b(o.container, e.mount, e.modalRef, o.hiddenSiblings, !1), this.containers.splice(n, 1);
                    else {
                        const e = o.modals[o.modals.length - 1];
                        e.modalRef && g(e.modalRef, !1)
                    }
                    return r
                }
                isTopModal(e) {
                    return this.modals.length > 0 && this.modals[this.modals.length - 1] === e
                }
            };
            var M = i.forwardRef((function(e, t) {
                    var r, n;
                    const {
                        children: o,
                        closeAfterTransition: a = !1,
                        container: m,
                        disableAutoFocus: v = !1,
                        disableEnforceFocus: y = !1,
                        disableEscapeKeyDown: b = !1,
                        disablePortal: w = !1,
                        disableRestoreFocus: S = !1,
                        disableScrollLock: x = !1,
                        hideBackdrop: C = !1,
                        keepMounted: M = !1,
                        manager: R = k,
                        onBackdropClick: Z,
                        onClose: I,
                        onKeyDown: j,
                        open: H,
                        onTransitionEnter: L,
                        onTransitionExited: D,
                        slotProps: $ = {},
                        slots: W = {}
                    } = e, z = (0, l.Z)(e, A), N = R, [B, F] = i.useState(!H), K = i.useRef({}), U = i.useRef(null), J = i.useRef(null), G = (0, c.Z)(J, t), q = function(e) {
                        return !!e && e.props.hasOwnProperty("in")
                    }(o), V = null == (r = e["aria-hidden"]) || r, X = () => (K.current.modalRef = J.current, K.current.mountNode = U.current, K.current), Y = () => {
                        N.mount(X(), {
                            disableScrollLock: x
                        }), J.current && (J.current.scrollTop = 0)
                    }, Q = (0, u.Z)((() => {
                        const e = function(e) {
                            return "function" === typeof e ? e() : e
                        }(m) || (0, d.Z)(U.current).body;
                        N.add(X(), e), J.current && Y()
                    })), ee = i.useCallback((() => N.isTopModal(X())), [N]), te = (0, u.Z)((e => {
                        U.current = e, e && J.current && (H && ee() ? Y() : g(J.current, V))
                    })), re = i.useCallback((() => {
                        N.remove(X(), V)
                    }), [N, V]);
                    i.useEffect((() => () => {
                        re()
                    }), [re]), i.useEffect((() => {
                        H ? Q() : q && a || re()
                    }), [H, re, q, a, Q]);
                    const ne = (0, s.Z)({}, e, {
                            closeAfterTransition: a,
                            disableAutoFocus: v,
                            disableEnforceFocus: y,
                            disableEscapeKeyDown: b,
                            disablePortal: w,
                            disableRestoreFocus: S,
                            disableScrollLock: x,
                            exited: B,
                            hideBackdrop: C,
                            keepMounted: M
                        }),
                        oe = (e => {
                            const {
                                open: t,
                                exited: r
                            } = e, n = {
                                root: ["root", !t && r && "hidden"],
                                backdrop: ["backdrop"]
                            };
                            return (0, f.Z)(n, (0, _.T)(P))
                        })(ne),
                        ie = () => {
                            F(!1), L && L()
                        },
                        ae = () => {
                            F(!0), D && D(), a && re()
                        },
                        se = {};
                    void 0 === o.props.tabIndex && (se.tabIndex = "-1"), q && (se.onEnter = p(ie, o.props.onEnter), se.onExited = p(ae, o.props.onExited));
                    const le = null != (n = W.root) ? n : "div",
                        ce = (0, T.Z)({
                            elementType: le,
                            externalSlotProps: $.root,
                            externalForwardedProps: z,
                            additionalProps: {
                                ref: G,
                                role: "presentation",
                                onKeyDown: e => {
                                    j && j(e), "Escape" === e.key && ee() && (b || (e.stopPropagation(), I && I(e, "escapeKeyDown")))
                                }
                            },
                            className: oe.root,
                            ownerState: ne
                        }),
                        de = W.backdrop,
                        ue = (0, T.Z)({
                            elementType: de,
                            externalSlotProps: $.backdrop,
                            additionalProps: {
                                "aria-hidden": !0,
                                onClick: e => {
                                    e.target === e.currentTarget && (Z && Z(e), I && I(e, "backdropClick"))
                                },
                                open: H
                            },
                            className: oe.backdrop,
                            ownerState: ne
                        });
                    return M || H || q && !B ? (0, O.jsx)(h.Z, {
                        ref: te,
                        container: m,
                        disablePortal: w,
                        children: (0, O.jsxs)(le, (0, s.Z)({}, ce, {
                            children: [!C && de ? (0, O.jsx)(de, (0, s.Z)({}, ue)) : null, (0, O.jsx)(E.Z, {
                                disableEnforceFocus: y,
                                disableAutoFocus: v,
                                disableRestoreFocus: S,
                                isEnabled: ee,
                                open: H,
                                children: i.cloneElement(o, se)
                            })]
                        }))
                    }) : null
                })),
                R = r(71276),
                Z = r(28442),
                I = r(11496),
                j = r(33616),
                H = r(45445);
            const L = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"],
                D = (0, I.ZP)("div", {
                    name: "MuiModal",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, !r.open && r.exited && t.hidden]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, o.Z)({
                    position: "fixed",
                    zIndex: (e.vars || e).zIndex.modal,
                    right: 0,
                    bottom: 0,
                    top: 0,
                    left: 0
                }, !t.open && t.exited && {
                    visibility: "hidden"
                }))),
                $ = (0, I.ZP)(H.Z, {
                    name: "MuiModal",
                    slot: "Backdrop",
                    overridesResolver: (e, t) => t.backdrop
                })({
                    zIndex: -1
                });
            var W = i.forwardRef((function(e, t) {
                var r, s, l, c, d, u;
                const p = (0, j.Z)({
                        name: "MuiModal",
                        props: e
                    }),
                    {
                        BackdropComponent: f = $,
                        BackdropProps: h,
                        classes: m,
                        className: v,
                        closeAfterTransition: g = !1,
                        children: y,
                        container: b,
                        component: w,
                        components: S = {},
                        componentsProps: E = {},
                        disableAutoFocus: x = !1,
                        disableEnforceFocus: C = !1,
                        disableEscapeKeyDown: P = !1,
                        disablePortal: T = !1,
                        disableRestoreFocus: _ = !1,
                        disableScrollLock: A = !1,
                        hideBackdrop: k = !1,
                        keepMounted: I = !1,
                        onBackdropClick: H,
                        onClose: W,
                        open: z,
                        slotProps: N,
                        slots: B,
                        theme: F
                    } = p,
                    K = (0, n.Z)(p, L),
                    [U, J] = i.useState(!0),
                    G = {
                        container: b,
                        closeAfterTransition: g,
                        disableAutoFocus: x,
                        disableEnforceFocus: C,
                        disableEscapeKeyDown: P,
                        disablePortal: T,
                        disableRestoreFocus: _,
                        disableScrollLock: A,
                        hideBackdrop: k,
                        keepMounted: I,
                        onBackdropClick: H,
                        onClose: W,
                        open: z
                    },
                    q = (0, o.Z)({}, p, G, {
                        exited: U
                    }),
                    V = null != (r = null != (s = null == B ? void 0 : B.root) ? s : S.Root) ? r : D,
                    X = null != (l = null != (c = null == B ? void 0 : B.backdrop) ? c : S.Backdrop) ? l : f,
                    Y = null != (d = null == N ? void 0 : N.root) ? d : E.root,
                    Q = null != (u = null == N ? void 0 : N.backdrop) ? u : E.backdrop;
                return (0, O.jsx)(M, (0, o.Z)({
                    slots: {
                        root: V,
                        backdrop: X
                    },
                    slotProps: {
                        root: () => (0, o.Z)({}, (0, R.Z)(Y, q), !(0, Z.Z)(V) && {
                            as: w,
                            theme: F
                        }, {
                            className: (0, a.Z)(v, null == Y ? void 0 : Y.className, null == m ? void 0 : m.root, !q.open && q.exited && (null == m ? void 0 : m.hidden))
                        }),
                        backdrop: () => (0, o.Z)({}, h, (0, R.Z)(Q, q), {
                            className: (0, a.Z)(null == Q ? void 0 : Q.className, null == h ? void 0 : h.className, null == m ? void 0 : m.backdrop)
                        })
                    },
                    onTransitionEnter: () => J(!1),
                    onTransitionExited: () => J(!0),
                    ref: t
                }, K, G, {
                    children: y
                }))
            }))
        },
        37058: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return _
                }
            });
            var n, o = r(1048),
                i = r(32793),
                a = r(67294),
                s = r(94780),
                l = r(11496),
                c = r(85893);
            const d = ["children", "classes", "className", "label", "notched"],
                u = (0, l.ZP)("fieldset")({
                    textAlign: "left",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    top: -5,
                    left: 0,
                    margin: 0,
                    padding: "0 8px",
                    pointerEvents: "none",
                    borderRadius: "inherit",
                    borderStyle: "solid",
                    borderWidth: 1,
                    overflow: "hidden",
                    minWidth: "0%"
                }),
                p = (0, l.ZP)("legend")((({
                    ownerState: e,
                    theme: t
                }) => (0, i.Z)({
                    float: "unset",
                    width: "auto",
                    overflow: "hidden"
                }, !e.withLabel && {
                    padding: 0,
                    lineHeight: "11px",
                    transition: t.transitions.create("width", {
                        duration: 150,
                        easing: t.transitions.easing.easeOut
                    })
                }, e.withLabel && (0, i.Z)({
                    display: "block",
                    padding: 0,
                    height: 11,
                    fontSize: "0.75em",
                    visibility: "hidden",
                    maxWidth: .01,
                    transition: t.transitions.create("max-width", {
                        duration: 50,
                        easing: t.transitions.easing.easeOut
                    }),
                    whiteSpace: "nowrap",
                    "& > span": {
                        paddingLeft: 5,
                        paddingRight: 5,
                        display: "inline-block",
                        opacity: 0,
                        visibility: "visible"
                    }
                }, e.notched && {
                    maxWidth: "100%",
                    transition: t.transitions.create("max-width", {
                        duration: 100,
                        easing: t.transitions.easing.easeOut,
                        delay: 50
                    })
                }))));
            var f = r(74423),
                h = r(15704),
                m = r(1588),
                v = r(34867),
                g = r(55827);

            function y(e) {
                return (0, v.Z)("MuiOutlinedInput", e)
            }
            var b = (0, i.Z)({}, g.Z, (0, m.Z)("MuiOutlinedInput", ["root", "notchedOutline", "input"])),
                w = r(96144),
                S = r(33616);
            const E = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"],
                x = (0, l.ZP)(w.Ej, {
                    shouldForwardProp: e => (0, l.FO)(e) || "classes" === e,
                    name: "MuiOutlinedInput",
                    slot: "Root",
                    overridesResolver: w.Gx
                })((({
                    theme: e,
                    ownerState: t
                }) => {
                    const r = "light" === e.palette.mode ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
                    return (0, i.Z)({
                        position: "relative",
                        borderRadius: (e.vars || e).shape.borderRadius,
                        [`&:hover .${b.notchedOutline}`]: {
                            borderColor: (e.vars || e).palette.text.primary
                        },
                        "@media (hover: none)": {
                            [`&:hover .${b.notchedOutline}`]: {
                                borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : r
                            }
                        },
                        [`&.${b.focused} .${b.notchedOutline}`]: {
                            borderColor: (e.vars || e).palette[t.color].main,
                            borderWidth: 2
                        },
                        [`&.${b.error} .${b.notchedOutline}`]: {
                            borderColor: (e.vars || e).palette.error.main
                        },
                        [`&.${b.disabled} .${b.notchedOutline}`]: {
                            borderColor: (e.vars || e).palette.action.disabled
                        }
                    }, t.startAdornment && {
                        paddingLeft: 14
                    }, t.endAdornment && {
                        paddingRight: 14
                    }, t.multiline && (0, i.Z)({
                        padding: "16.5px 14px"
                    }, "small" === t.size && {
                        padding: "8.5px 14px"
                    }))
                })),
                C = (0, l.ZP)((function(e) {
                    const {
                        className: t,
                        label: r,
                        notched: a
                    } = e, s = (0, o.Z)(e, d), l = null != r && "" !== r, f = (0, i.Z)({}, e, {
                        notched: a,
                        withLabel: l
                    });
                    return (0, c.jsx)(u, (0, i.Z)({
                        "aria-hidden": !0,
                        className: t,
                        ownerState: f
                    }, s, {
                        children: (0, c.jsx)(p, {
                            ownerState: f,
                            children: l ? (0, c.jsx)("span", {
                                children: r
                            }) : n || (n = (0, c.jsx)("span", {
                                className: "notranslate",
                                children: "\u200b"
                            }))
                        })
                    }))
                }), {
                    name: "MuiOutlinedInput",
                    slot: "NotchedOutline",
                    overridesResolver: (e, t) => t.notchedOutline
                })((({
                    theme: e
                }) => {
                    const t = "light" === e.palette.mode ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
                    return {
                        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
                    }
                })),
                P = (0, l.ZP)(w.rA, {
                    name: "MuiOutlinedInput",
                    slot: "Input",
                    overridesResolver: w._o
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, i.Z)({
                    padding: "16.5px 14px"
                }, !e.vars && {
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: "light" === e.palette.mode ? null : "0 0 0 100px #266798 inset",
                        WebkitTextFillColor: "light" === e.palette.mode ? null : "#fff",
                        caretColor: "light" === e.palette.mode ? null : "#fff",
                        borderRadius: "inherit"
                    }
                }, e.vars && {
                    "&:-webkit-autofill": {
                        borderRadius: "inherit"
                    },
                    [e.getColorSchemeSelector("dark")]: {
                        "&:-webkit-autofill": {
                            WebkitBoxShadow: "0 0 0 100px #266798 inset",
                            WebkitTextFillColor: "#fff",
                            caretColor: "#fff"
                        }
                    }
                }, "small" === t.size && {
                    padding: "8.5px 14px"
                }, t.multiline && {
                    padding: 0
                }, t.startAdornment && {
                    paddingLeft: 0
                }, t.endAdornment && {
                    paddingRight: 0
                }))),
                T = a.forwardRef((function(e, t) {
                    var r, n, l, d, u;
                    const p = (0, S.Z)({
                            props: e,
                            name: "MuiOutlinedInput"
                        }),
                        {
                            components: m = {},
                            fullWidth: v = !1,
                            inputComponent: g = "input",
                            label: b,
                            multiline: T = !1,
                            notched: _,
                            slots: O = {},
                            type: A = "text"
                        } = p,
                        k = (0, o.Z)(p, E),
                        M = (e => {
                            const {
                                classes: t
                            } = e, r = (0, s.Z)({
                                root: ["root"],
                                notchedOutline: ["notchedOutline"],
                                input: ["input"]
                            }, y, t);
                            return (0, i.Z)({}, t, r)
                        })(p),
                        R = (0, f.Z)(),
                        Z = (0, h.Z)({
                            props: p,
                            muiFormControl: R,
                            states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
                        }),
                        I = (0, i.Z)({}, p, {
                            color: Z.color || "primary",
                            disabled: Z.disabled,
                            error: Z.error,
                            focused: Z.focused,
                            formControl: R,
                            fullWidth: v,
                            hiddenLabel: Z.hiddenLabel,
                            multiline: T,
                            size: Z.size,
                            type: A
                        }),
                        j = null != (r = null != (n = O.root) ? n : m.Root) ? r : x,
                        H = null != (l = null != (d = O.input) ? d : m.Input) ? l : P;
                    return (0, c.jsx)(w.ZP, (0, i.Z)({
                        slots: {
                            root: j,
                            input: H
                        },
                        renderSuffix: e => (0, c.jsx)(C, {
                            ownerState: I,
                            className: M.notchedOutline,
                            label: null != b && "" !== b && Z.required ? u || (u = (0, c.jsxs)(a.Fragment, {
                                children: [b, "\u2009", "*"]
                            })) : b,
                            notched: "undefined" !== typeof _ ? _ : Boolean(e.startAdornment || e.filled || e.focused)
                        }),
                        fullWidth: v,
                        inputComponent: g,
                        multiline: T,
                        ref: t,
                        type: A
                    }, k, {
                        classes: (0, i.Z)({}, M, {
                            notchedOutline: null
                        })
                    }))
                }));
            T.muiName = "Input";
            var _ = T
        },
        68155: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return M
                }
            });
            var n = r(32793),
                o = r(1048),
                i = r(38331),
                a = r(23960),
                s = r(67294),
                l = r(33703),
                c = r(73546),
                d = r(82690),
                u = r(95551),
                p = r(94780),
                f = r(78385),
                h = r(34867);

            function m(e) {
                return (0, h.Z)("MuiPopper", e)
            }(0, r(1588).Z)("MuiPopper", ["root"]);
            var v = r(24349),
                g = r(31873),
                y = r(85893);
            const b = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"],
                w = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];

            function S(e) {
                return "function" === typeof e ? e() : e
            }

            function E(e) {
                return void 0 !== e.nodeType
            }
            const x = {},
                C = s.forwardRef((function(e, t) {
                    var r;
                    const {
                        anchorEl: n,
                        children: o,
                        direction: d,
                        disablePortal: f,
                        modifiers: h,
                        open: w,
                        placement: E,
                        popperOptions: x,
                        popperRef: C,
                        slotProps: P = {},
                        slots: T = {},
                        TransitionProps: _
                    } = e, O = (0, a.Z)(e, b), A = s.useRef(null), k = (0, l.Z)(A, t), M = s.useRef(null), R = (0, l.Z)(M, C), Z = s.useRef(R);
                    (0, c.Z)((() => {
                        Z.current = R
                    }), [R]), s.useImperativeHandle(C, (() => M.current), []);
                    const I = function(e, t) {
                            if ("ltr" === t) return e;
                            switch (e) {
                                case "bottom-end":
                                    return "bottom-start";
                                case "bottom-start":
                                    return "bottom-end";
                                case "top-end":
                                    return "top-start";
                                case "top-start":
                                    return "top-end";
                                default:
                                    return e
                            }
                        }(E, d),
                        [j, H] = s.useState(I),
                        [L, D] = s.useState(S(n));
                    s.useEffect((() => {
                        M.current && M.current.forceUpdate()
                    })), s.useEffect((() => {
                        n && D(S(n))
                    }), [n]), (0, c.Z)((() => {
                        if (!L || !w) return;
                        let e = [{
                            name: "preventOverflow",
                            options: {
                                altBoundary: f
                            }
                        }, {
                            name: "flip",
                            options: {
                                altBoundary: f
                            }
                        }, {
                            name: "onUpdate",
                            enabled: !0,
                            phase: "afterWrite",
                            fn: ({
                                state: e
                            }) => {
                                H(e.placement)
                            }
                        }];
                        null != h && (e = e.concat(h)), x && null != x.modifiers && (e = e.concat(x.modifiers));
                        const t = (0, u.fi)(L, A.current, (0, i.Z)({
                            placement: I
                        }, x, {
                            modifiers: e
                        }));
                        return Z.current(t), () => {
                            t.destroy(), Z.current(null)
                        }
                    }), [L, f, h, w, x, I]);
                    const $ = {
                        placement: j
                    };
                    null !== _ && ($.TransitionProps = _);
                    const W = (0, p.Z)({
                            root: ["root"]
                        }, (0, g.T)(m)),
                        z = null != (r = T.root) ? r : "div",
                        N = (0, v.Z)({
                            elementType: z,
                            externalSlotProps: P.root,
                            externalForwardedProps: O,
                            additionalProps: {
                                role: "tooltip",
                                ref: k
                            },
                            ownerState: e,
                            className: W.root
                        });
                    return (0, y.jsx)(z, (0, i.Z)({}, N, {
                        children: "function" === typeof o ? o($) : o
                    }))
                }));
            var P = s.forwardRef((function(e, t) {
                    const {
                        anchorEl: r,
                        children: n,
                        container: o,
                        direction: l = "ltr",
                        disablePortal: c = !1,
                        keepMounted: u = !1,
                        modifiers: p,
                        open: h,
                        placement: m = "bottom",
                        popperOptions: v = x,
                        popperRef: g,
                        style: b,
                        transition: P = !1,
                        slotProps: T = {},
                        slots: _ = {}
                    } = e, O = (0, a.Z)(e, w), [A, k] = s.useState(!0);
                    if (!u && !h && (!P || A)) return null;
                    let M;
                    if (o) M = o;
                    else if (r) {
                        const e = S(r);
                        M = e && E(e) ? (0, d.Z)(e).body : (0, d.Z)(null).body
                    }
                    const R = h || !u || P && !A ? void 0 : "none",
                        Z = P ? { in: h,
                            onEnter: () => {
                                k(!1)
                            },
                            onExited: () => {
                                k(!0)
                            }
                        } : void 0;
                    return (0, y.jsx)(f.Z, {
                        disablePortal: c,
                        container: M,
                        children: (0, y.jsx)(C, (0, i.Z)({
                            anchorEl: r,
                            direction: l,
                            disablePortal: c,
                            modifiers: p,
                            ref: t,
                            open: P ? !A : h,
                            placement: m,
                            popperOptions: v,
                            popperRef: g,
                            slotProps: T,
                            slots: _
                        }, O, {
                            style: (0, i.Z)({
                                position: "fixed",
                                top: 0,
                                left: 0,
                                display: R
                            }, b),
                            TransitionProps: Z,
                            children: n
                        }))
                    })
                })),
                T = r(34168),
                _ = r(11496),
                O = r(33616);
            const A = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"],
                k = (0, _.ZP)(P, {
                    name: "MuiPopper",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({});
            var M = s.forwardRef((function(e, t) {
                var r;
                const i = (0, T.Z)(),
                    a = (0, O.Z)({
                        props: e,
                        name: "MuiPopper"
                    }),
                    {
                        anchorEl: s,
                        component: l,
                        components: c,
                        componentsProps: d,
                        container: u,
                        disablePortal: p,
                        keepMounted: f,
                        modifiers: h,
                        open: m,
                        placement: v,
                        popperOptions: g,
                        popperRef: b,
                        transition: w,
                        slots: S,
                        slotProps: E
                    } = a,
                    x = (0, o.Z)(a, A),
                    C = null != (r = null == S ? void 0 : S.root) ? r : null == c ? void 0 : c.Root,
                    P = (0, n.Z)({
                        anchorEl: s,
                        container: u,
                        disablePortal: p,
                        keepMounted: f,
                        modifiers: h,
                        open: m,
                        placement: v,
                        popperOptions: g,
                        popperRef: b,
                        transition: w
                    }, x);
                return (0, y.jsx)(k, (0, n.Z)({
                    as: l,
                    direction: null == i ? void 0 : i.direction,
                    slots: {
                        root: C
                    },
                    slotProps: null != E ? E : d
                }, P, {
                    ref: t
                }))
            }))
        },
        14361: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return Ze
                }
            });
            var n = r(32793),
                o = r(1048),
                i = r(67294),
                a = r(86010),
                s = r(59766),
                l = r(71387),
                c = (r(59864), r(94780)),
                d = r(82690).Z,
                u = r(98216),
                p = r(78462),
                f = r(95806).Z,
                h = r(51705),
                m = r(58974),
                v = r(85893);
            const g = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];

            function y(e, t, r) {
                return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild
            }

            function b(e, t, r) {
                return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild
            }

            function w(e, t) {
                if (void 0 === t) return !0;
                let r = e.innerText;
                return void 0 === r && (r = e.textContent), r = r.trim().toLowerCase(), 0 !== r.length && (t.repeating ? r[0] === t.keys[0] : 0 === r.indexOf(t.keys.join("")))
            }

            function S(e, t, r, n, o, i) {
                let a = !1,
                    s = o(e, t, !!t && r);
                for (; s;) {
                    if (s === e.firstChild) {
                        if (a) return !1;
                        a = !0
                    }
                    const t = !n && (s.disabled || "true" === s.getAttribute("aria-disabled"));
                    if (s.hasAttribute("tabindex") && w(s, i) && !t) return s.focus(), !0;
                    s = o(e, s, r)
                }
                return !1
            }
            var E = i.forwardRef((function(e, t) {
                    const {
                        actions: r,
                        autoFocus: a = !1,
                        autoFocusItem: s = !1,
                        children: l,
                        className: c,
                        disabledItemsFocusable: u = !1,
                        disableListWrap: E = !1,
                        onKeyDown: x,
                        variant: C = "selectedMenu"
                    } = e, P = (0, o.Z)(e, g), T = i.useRef(null), _ = i.useRef({
                        keys: [],
                        repeating: !0,
                        previousKeyMatched: !0,
                        lastTime: null
                    });
                    (0, m.Z)((() => {
                        a && T.current.focus()
                    }), [a]), i.useImperativeHandle(r, (() => ({
                        adjustStyleForScrollbar: (e, t) => {
                            const r = !T.current.style.width;
                            if (e.clientHeight < T.current.clientHeight && r) {
                                const r = `${f(d(e))}px`;
                                T.current.style["rtl" === t.direction ? "paddingLeft" : "paddingRight"] = r, T.current.style.width = `calc(100% + ${r})`
                            }
                            return T.current
                        }
                    })), []);
                    const O = (0, h.Z)(T, t);
                    let A = -1;
                    i.Children.forEach(l, ((e, t) => {
                        i.isValidElement(e) ? (e.props.disabled || ("selectedMenu" === C && e.props.selected || -1 === A) && (A = t), A === t && (e.props.disabled || e.props.muiSkipListHighlight || e.type.muiSkipListHighlight) && (A += 1, A >= l.length && (A = -1))) : A === t && (A += 1, A >= l.length && (A = -1))
                    }));
                    const k = i.Children.map(l, ((e, t) => {
                        if (t === A) {
                            const t = {};
                            return s && (t.autoFocus = !0), void 0 === e.props.tabIndex && "selectedMenu" === C && (t.tabIndex = 0), i.cloneElement(e, t)
                        }
                        return e
                    }));
                    return (0, v.jsx)(p.Z, (0, n.Z)({
                        role: "menu",
                        ref: O,
                        className: c,
                        onKeyDown: e => {
                            const t = T.current,
                                r = e.key,
                                n = d(t).activeElement;
                            if ("ArrowDown" === r) e.preventDefault(), S(t, n, E, u, y);
                            else if ("ArrowUp" === r) e.preventDefault(), S(t, n, E, u, b);
                            else if ("Home" === r) e.preventDefault(), S(t, null, E, u, y);
                            else if ("End" === r) e.preventDefault(), S(t, null, E, u, b);
                            else if (1 === r.length) {
                                const o = _.current,
                                    i = r.toLowerCase(),
                                    a = performance.now();
                                o.keys.length > 0 && (a - o.lastTime > 500 ? (o.keys = [], o.repeating = !0, o.previousKeyMatched = !0) : o.repeating && i !== o.keys[0] && (o.repeating = !1)), o.lastTime = a, o.keys.push(i);
                                const s = n && !o.repeating && w(n, o);
                                o.previousKeyMatched && (s || S(t, n, !1, u, y, o)) ? e.preventDefault() : o.previousKeyMatched = !1
                            }
                            x && x(e)
                        },
                        tabIndex: a ? 0 : -1
                    }, P, {
                        children: k
                    }))
                })),
                x = r(24349),
                C = r(28442),
                P = r(11496),
                T = r(33616),
                _ = r(39336).Z,
                O = r(74161).Z,
                A = r(96514),
                k = r(38208),
                M = r(90629),
                R = r(1588),
                Z = r(34867);

            function I(e) {
                return (0, Z.Z)("MuiPopover", e)
            }(0, R.Z)("MuiPopover", ["root", "paper"]);
            const j = ["onEntering"],
                H = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"],
                L = ["slotProps"];

            function D(e, t) {
                let r = 0;
                return "number" === typeof t ? r = t : "center" === t ? r = e.height / 2 : "bottom" === t && (r = e.height), r
            }

            function $(e, t) {
                let r = 0;
                return "number" === typeof t ? r = t : "center" === t ? r = e.width / 2 : "right" === t && (r = e.width), r
            }

            function W(e) {
                return [e.horizontal, e.vertical].map((e => "number" === typeof e ? `${e}px` : e)).join(" ")
            }

            function z(e) {
                return "function" === typeof e ? e() : e
            }
            const N = (0, P.ZP)(k.Z, {
                    name: "MuiPopover",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({}),
                B = (0, P.ZP)(M.Z, {
                    name: "MuiPopover",
                    slot: "Paper",
                    overridesResolver: (e, t) => t.paper
                })({
                    position: "absolute",
                    overflowY: "auto",
                    overflowX: "hidden",
                    minWidth: 16,
                    minHeight: 16,
                    maxWidth: "calc(100% - 32px)",
                    maxHeight: "calc(100% - 32px)",
                    outline: 0
                });
            var F = i.forwardRef((function(e, t) {
                    var r, s, l;
                    const u = (0, T.Z)({
                            props: e,
                            name: "MuiPopover"
                        }),
                        {
                            action: p,
                            anchorEl: f,
                            anchorOrigin: m = {
                                vertical: "top",
                                horizontal: "left"
                            },
                            anchorPosition: g,
                            anchorReference: y = "anchorEl",
                            children: b,
                            className: w,
                            container: S,
                            elevation: E = 8,
                            marginThreshold: P = 16,
                            open: k,
                            PaperProps: M = {},
                            slots: R,
                            slotProps: Z,
                            transformOrigin: F = {
                                vertical: "top",
                                horizontal: "left"
                            },
                            TransitionComponent: K = A.Z,
                            transitionDuration: U = "auto",
                            TransitionProps: {
                                onEntering: J
                            } = {}
                        } = u,
                        G = (0, o.Z)(u.TransitionProps, j),
                        q = (0, o.Z)(u, H),
                        V = null != (r = null == Z ? void 0 : Z.paper) ? r : M,
                        X = i.useRef(),
                        Y = (0, h.Z)(X, V.ref),
                        Q = (0, n.Z)({}, u, {
                            anchorOrigin: m,
                            anchorReference: y,
                            elevation: E,
                            marginThreshold: P,
                            externalPaperSlotProps: V,
                            transformOrigin: F,
                            TransitionComponent: K,
                            transitionDuration: U,
                            TransitionProps: G
                        }),
                        ee = (e => {
                            const {
                                classes: t
                            } = e;
                            return (0, c.Z)({
                                root: ["root"],
                                paper: ["paper"]
                            }, I, t)
                        })(Q),
                        te = i.useCallback((() => {
                            if ("anchorPosition" === y) return g;
                            const e = z(f),
                                t = (e && 1 === e.nodeType ? e : d(X.current).body).getBoundingClientRect();
                            return {
                                top: t.top + D(t, m.vertical),
                                left: t.left + $(t, m.horizontal)
                            }
                        }), [f, m.horizontal, m.vertical, g, y]),
                        re = i.useCallback((e => ({
                            vertical: D(e, F.vertical),
                            horizontal: $(e, F.horizontal)
                        })), [F.horizontal, F.vertical]),
                        ne = i.useCallback((e => {
                            const t = {
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                },
                                r = re(t);
                            if ("none" === y) return {
                                top: null,
                                left: null,
                                transformOrigin: W(r)
                            };
                            const n = te();
                            let o = n.top - r.vertical,
                                i = n.left - r.horizontal;
                            const a = o + t.height,
                                s = i + t.width,
                                l = O(z(f)),
                                c = l.innerHeight - P,
                                d = l.innerWidth - P;
                            if (o < P) {
                                const e = o - P;
                                o -= e, r.vertical += e
                            } else if (a > c) {
                                const e = a - c;
                                o -= e, r.vertical += e
                            }
                            if (i < P) {
                                const e = i - P;
                                i -= e, r.horizontal += e
                            } else if (s > d) {
                                const e = s - d;
                                i -= e, r.horizontal += e
                            }
                            return {
                                top: `${Math.round(o)}px`,
                                left: `${Math.round(i)}px`,
                                transformOrigin: W(r)
                            }
                        }), [f, y, te, re, P]),
                        [oe, ie] = i.useState(k),
                        ae = i.useCallback((() => {
                            const e = X.current;
                            if (!e) return;
                            const t = ne(e);
                            null !== t.top && (e.style.top = t.top), null !== t.left && (e.style.left = t.left), e.style.transformOrigin = t.transformOrigin, ie(!0)
                        }), [ne]);
                    i.useEffect((() => {
                        k && ae()
                    })), i.useImperativeHandle(p, (() => k ? {
                        updatePosition: () => {
                            ae()
                        }
                    } : null), [k, ae]), i.useEffect((() => {
                        if (!k) return;
                        const e = _((() => {
                                ae()
                            })),
                            t = O(f);
                        return t.addEventListener("resize", e), () => {
                            e.clear(), t.removeEventListener("resize", e)
                        }
                    }), [f, k, ae]);
                    let se = U;
                    "auto" !== U || K.muiSupportAuto || (se = void 0);
                    const le = S || (f ? d(z(f)).body : void 0),
                        ce = null != (s = null == R ? void 0 : R.root) ? s : N,
                        de = null != (l = null == R ? void 0 : R.paper) ? l : B,
                        ue = (0, x.Z)({
                            elementType: de,
                            externalSlotProps: (0, n.Z)({}, V, {
                                style: oe ? V.style : (0, n.Z)({}, V.style, {
                                    opacity: 0
                                })
                            }),
                            additionalProps: {
                                elevation: E,
                                ref: Y
                            },
                            ownerState: Q,
                            className: (0, a.Z)(ee.paper, null == V ? void 0 : V.className)
                        }),
                        pe = (0, x.Z)({
                            elementType: ce,
                            externalSlotProps: (null == Z ? void 0 : Z.root) || {},
                            externalForwardedProps: q,
                            additionalProps: {
                                ref: t,
                                slotProps: {
                                    backdrop: {
                                        invisible: !0
                                    }
                                },
                                container: le,
                                open: k
                            },
                            ownerState: Q,
                            className: (0, a.Z)(ee.root, w)
                        }),
                        {
                            slotProps: fe
                        } = pe,
                        he = (0, o.Z)(pe, L);
                    return (0, v.jsx)(ce, (0, n.Z)({}, he, !(0, C.Z)(ce) && {
                        slotProps: fe
                    }, {
                        children: (0, v.jsx)(K, (0, n.Z)({
                            appear: !0,
                            in: k,
                            onEntering: (e, t) => {
                                J && J(e, t), ae()
                            },
                            onExited: () => {
                                ie(!1)
                            },
                            timeout: se
                        }, G, {
                            children: (0, v.jsx)(de, (0, n.Z)({}, ue, {
                                children: b
                            }))
                        }))
                    }))
                })),
                K = r(2734);

            function U(e) {
                return (0, Z.Z)("MuiMenu", e)
            }(0, R.Z)("MuiMenu", ["root", "paper", "list"]);
            const J = ["onEntering"],
                G = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"],
                q = {
                    vertical: "top",
                    horizontal: "right"
                },
                V = {
                    vertical: "top",
                    horizontal: "left"
                },
                X = (0, P.ZP)(F, {
                    shouldForwardProp: e => (0, P.FO)(e) || "classes" === e,
                    name: "MuiMenu",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({}),
                Y = (0, P.ZP)(B, {
                    name: "MuiMenu",
                    slot: "Paper",
                    overridesResolver: (e, t) => t.paper
                })({
                    maxHeight: "calc(100% - 96px)",
                    WebkitOverflowScrolling: "touch"
                }),
                Q = (0, P.ZP)(E, {
                    name: "MuiMenu",
                    slot: "List",
                    overridesResolver: (e, t) => t.list
                })({
                    outline: 0
                });
            var ee = i.forwardRef((function(e, t) {
                const r = (0, T.Z)({
                        props: e,
                        name: "MuiMenu"
                    }),
                    {
                        autoFocus: s = !0,
                        children: l,
                        disableAutoFocusItem: d = !1,
                        MenuListProps: u = {},
                        onClose: p,
                        open: f,
                        PaperProps: h = {},
                        PopoverClasses: m,
                        transitionDuration: g = "auto",
                        TransitionProps: {
                            onEntering: y
                        } = {},
                        variant: b = "selectedMenu"
                    } = r,
                    w = (0, o.Z)(r.TransitionProps, J),
                    S = (0, o.Z)(r, G),
                    E = (0, K.Z)(),
                    x = "rtl" === E.direction,
                    C = (0, n.Z)({}, r, {
                        autoFocus: s,
                        disableAutoFocusItem: d,
                        MenuListProps: u,
                        onEntering: y,
                        PaperProps: h,
                        transitionDuration: g,
                        TransitionProps: w,
                        variant: b
                    }),
                    P = (e => {
                        const {
                            classes: t
                        } = e;
                        return (0, c.Z)({
                            root: ["root"],
                            paper: ["paper"],
                            list: ["list"]
                        }, U, t)
                    })(C),
                    _ = s && !d && f,
                    O = i.useRef(null);
                let A = -1;
                return i.Children.map(l, ((e, t) => {
                    i.isValidElement(e) && (e.props.disabled || ("selectedMenu" === b && e.props.selected || -1 === A) && (A = t))
                })), (0, v.jsx)(X, (0, n.Z)({
                    onClose: p,
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: x ? "right" : "left"
                    },
                    transformOrigin: x ? q : V,
                    slots: {
                        paper: Y
                    },
                    slotProps: {
                        paper: (0, n.Z)({}, h, {
                            classes: (0, n.Z)({}, h.classes, {
                                root: P.paper
                            })
                        })
                    },
                    className: P.root,
                    open: f,
                    ref: t,
                    transitionDuration: g,
                    TransitionProps: (0, n.Z)({
                        onEntering: (e, t) => {
                            O.current && O.current.adjustStyleForScrollbar(e, E), y && y(e, t)
                        }
                    }, w),
                    ownerState: C
                }, S, {
                    classes: m,
                    children: (0, v.jsx)(Q, (0, n.Z)({
                        onKeyDown: e => {
                            "Tab" === e.key && (e.preventDefault(), p && p(e, "tabKeyDown"))
                        },
                        actions: O,
                        autoFocus: s && (-1 === A || d),
                        autoFocusItem: _,
                        variant: b
                    }, u, {
                        className: (0, a.Z)(P.list, u.className),
                        children: l
                    }))
                }))
            }));

            function te(e) {
                return (0, Z.Z)("MuiNativeSelect", e)
            }
            var re = (0, R.Z)("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
            const ne = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"],
                oe = ({
                    ownerState: e,
                    theme: t
                }) => (0, n.Z)({
                    MozAppearance: "none",
                    WebkitAppearance: "none",
                    userSelect: "none",
                    borderRadius: 0,
                    cursor: "pointer",
                    "&:focus": (0, n.Z)({}, t.vars ? {
                        backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
                    } : {
                        backgroundColor: "light" === t.palette.mode ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
                    }, {
                        borderRadius: 0
                    }),
                    "&::-ms-expand": {
                        display: "none"
                    },
                    [`&.${re.disabled}`]: {
                        cursor: "default"
                    },
                    "&[multiple]": {
                        height: "auto"
                    },
                    "&:not([multiple]) option, &:not([multiple]) optgroup": {
                        backgroundColor: (t.vars || t).palette.background.paper
                    },
                    "&&&": {
                        paddingRight: 24,
                        minWidth: 16
                    }
                }, "filled" === e.variant && {
                    "&&&": {
                        paddingRight: 32
                    }
                }, "outlined" === e.variant && {
                    borderRadius: (t.vars || t).shape.borderRadius,
                    "&:focus": {
                        borderRadius: (t.vars || t).shape.borderRadius
                    },
                    "&&&": {
                        paddingRight: 32
                    }
                }),
                ie = (0, P.ZP)("select", {
                    name: "MuiNativeSelect",
                    slot: "Select",
                    shouldForwardProp: P.FO,
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.select, t[r.variant], r.error && t.error, {
                            [`&.${re.multiple}`]: t.multiple
                        }]
                    }
                })(oe),
                ae = ({
                    ownerState: e,
                    theme: t
                }) => (0, n.Z)({
                    position: "absolute",
                    right: 0,
                    top: "calc(50% - .5em)",
                    pointerEvents: "none",
                    color: (t.vars || t).palette.action.active,
                    [`&.${re.disabled}`]: {
                        color: (t.vars || t).palette.action.disabled
                    }
                }, e.open && {
                    transform: "rotate(180deg)"
                }, "filled" === e.variant && {
                    right: 7
                }, "outlined" === e.variant && {
                    right: 7
                }),
                se = (0, P.ZP)("svg", {
                    name: "MuiNativeSelect",
                    slot: "Icon",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.icon, r.variant && t[`icon${(0,u.Z)(r.variant)}`], r.open && t.iconOpen]
                    }
                })(ae);
            var le = i.forwardRef((function(e, t) {
                    const {
                        className: r,
                        disabled: s,
                        error: l,
                        IconComponent: d,
                        inputRef: p,
                        variant: f = "standard"
                    } = e, h = (0, o.Z)(e, ne), m = (0, n.Z)({}, e, {
                        disabled: s,
                        variant: f,
                        error: l
                    }), g = (e => {
                        const {
                            classes: t,
                            variant: r,
                            disabled: n,
                            multiple: o,
                            open: i,
                            error: a
                        } = e, s = {
                            select: ["select", r, n && "disabled", o && "multiple", a && "error"],
                            icon: ["icon", `icon${(0,u.Z)(r)}`, i && "iconOpen", n && "disabled"]
                        };
                        return (0, c.Z)(s, te, t)
                    })(m);
                    return (0, v.jsxs)(i.Fragment, {
                        children: [(0, v.jsx)(ie, (0, n.Z)({
                            ownerState: m,
                            className: (0, a.Z)(g.select, r),
                            disabled: s,
                            ref: p || t
                        }, h)), e.multiple ? null : (0, v.jsx)(se, {
                            as: d,
                            ownerState: m,
                            className: g.icon
                        })]
                    })
                })),
                ce = r(5108),
                de = r(49299);

            function ue(e) {
                return (0, Z.Z)("MuiSelect", e)
            }
            var pe, fe = (0, R.Z)("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
            const he = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"],
                me = (0, P.ZP)("div", {
                    name: "MuiSelect",
                    slot: "Select",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [{
                            [`&.${fe.select}`]: t.select
                        }, {
                            [`&.${fe.select}`]: t[r.variant]
                        }, {
                            [`&.${fe.error}`]: t.error
                        }, {
                            [`&.${fe.multiple}`]: t.multiple
                        }]
                    }
                })(oe, {
                    [`&.${fe.select}`]: {
                        height: "auto",
                        minHeight: "1.4375em",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden"
                    }
                }),
                ve = (0, P.ZP)("svg", {
                    name: "MuiSelect",
                    slot: "Icon",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.icon, r.variant && t[`icon${(0,u.Z)(r.variant)}`], r.open && t.iconOpen]
                    }
                })(ae),
                ge = (0, P.ZP)("input", {
                    shouldForwardProp: e => (0, P.Dz)(e) && "classes" !== e,
                    name: "MuiSelect",
                    slot: "NativeInput",
                    overridesResolver: (e, t) => t.nativeInput
                })({
                    bottom: 0,
                    left: 0,
                    position: "absolute",
                    opacity: 0,
                    pointerEvents: "none",
                    width: "100%",
                    boxSizing: "border-box"
                });

            function ye(e, t) {
                return "object" === typeof t && null !== t ? e === t : String(e) === String(t)
            }

            function be(e) {
                return null == e || "string" === typeof e && !e.trim()
            }
            var we = i.forwardRef((function(e, t) {
                    const {
                        "aria-describedby": r,
                        "aria-label": s,
                        autoFocus: p,
                        autoWidth: f,
                        children: m,
                        className: g,
                        defaultOpen: y,
                        defaultValue: b,
                        disabled: w,
                        displayEmpty: S,
                        error: E = !1,
                        IconComponent: x,
                        inputRef: C,
                        labelId: P,
                        MenuProps: T = {},
                        multiple: _,
                        name: O,
                        onBlur: A,
                        onChange: k,
                        onClose: M,
                        onFocus: R,
                        onOpen: Z,
                        open: I,
                        readOnly: j,
                        renderValue: H,
                        SelectDisplayProps: L = {},
                        tabIndex: D,
                        value: $,
                        variant: W = "standard"
                    } = e, z = (0, o.Z)(e, he), [N, B] = (0, de.Z)({
                        controlled: $,
                        default: b,
                        name: "Select"
                    }), [F, K] = (0, de.Z)({
                        controlled: I,
                        default: y,
                        name: "Select"
                    }), U = i.useRef(null), J = i.useRef(null), [G, q] = i.useState(null), {
                        current: V
                    } = i.useRef(null != I), [X, Y] = i.useState(), Q = (0, h.Z)(t, C), te = i.useCallback((e => {
                        J.current = e, e && q(e)
                    }), []), re = null == G ? void 0 : G.parentNode;
                    i.useImperativeHandle(Q, (() => ({
                        focus: () => {
                            J.current.focus()
                        },
                        node: U.current,
                        value: N
                    })), [N]), i.useEffect((() => {
                        y && F && G && !V && (Y(f ? null : re.clientWidth), J.current.focus())
                    }), [G, f]), i.useEffect((() => {
                        p && J.current.focus()
                    }), [p]), i.useEffect((() => {
                        if (!P) return;
                        const e = d(J.current).getElementById(P);
                        if (e) {
                            const t = () => {
                                getSelection().isCollapsed && J.current.focus()
                            };
                            return e.addEventListener("click", t), () => {
                                e.removeEventListener("click", t)
                            }
                        }
                    }), [P]);
                    const ne = (e, t) => {
                            e ? Z && Z(t) : M && M(t), V || (Y(f ? null : re.clientWidth), K(e))
                        },
                        oe = i.Children.toArray(m),
                        ie = e => t => {
                            let r;
                            if (t.currentTarget.hasAttribute("tabindex")) {
                                if (_) {
                                    r = Array.isArray(N) ? N.slice() : [];
                                    const t = N.indexOf(e.props.value); - 1 === t ? r.push(e.props.value) : r.splice(t, 1)
                                } else r = e.props.value;
                                if (e.props.onClick && e.props.onClick(t), N !== r && (B(r), k)) {
                                    const n = t.nativeEvent || t,
                                        o = new n.constructor(n.type, n);
                                    Object.defineProperty(o, "target", {
                                        writable: !0,
                                        value: {
                                            value: r,
                                            name: O
                                        }
                                    }), k(o, e)
                                }
                                _ || ne(!1, t)
                            }
                        },
                        ae = null !== G && F;
                    let se, le;
                    delete z["aria-invalid"];
                    const fe = [];
                    let we = !1,
                        Se = !1;
                    ((0, ce.vd)({
                        value: N
                    }) || S) && (H ? se = H(N) : we = !0);
                    const Ee = oe.map((e => {
                        if (!i.isValidElement(e)) return null;
                        let t;
                        if (_) {
                            if (!Array.isArray(N)) throw new Error((0, l.Z)(2));
                            t = N.some((t => ye(t, e.props.value))), t && we && fe.push(e.props.children)
                        } else t = ye(N, e.props.value), t && we && (le = e.props.children);
                        return t && (Se = !0), i.cloneElement(e, {
                            "aria-selected": t ? "true" : "false",
                            onClick: ie(e),
                            onKeyUp: t => {
                                " " === t.key && t.preventDefault(), e.props.onKeyUp && e.props.onKeyUp(t)
                            },
                            role: "option",
                            selected: t,
                            value: void 0,
                            "data-value": e.props.value
                        })
                    }));
                    we && (se = _ ? 0 === fe.length ? null : fe.reduce(((e, t, r) => (e.push(t), r < fe.length - 1 && e.push(", "), e)), []) : le);
                    let xe, Ce = X;
                    !f && V && G && (Ce = re.clientWidth), xe = "undefined" !== typeof D ? D : w ? null : 0;
                    const Pe = L.id || (O ? `mui-component-select-${O}` : void 0),
                        Te = (0, n.Z)({}, e, {
                            variant: W,
                            value: N,
                            open: ae,
                            error: E
                        }),
                        _e = (e => {
                            const {
                                classes: t,
                                variant: r,
                                disabled: n,
                                multiple: o,
                                open: i,
                                error: a
                            } = e, s = {
                                select: ["select", r, n && "disabled", o && "multiple", a && "error"],
                                icon: ["icon", `icon${(0,u.Z)(r)}`, i && "iconOpen", n && "disabled"],
                                nativeInput: ["nativeInput"]
                            };
                            return (0, c.Z)(s, ue, t)
                        })(Te);
                    return (0, v.jsxs)(i.Fragment, {
                        children: [(0, v.jsx)(me, (0, n.Z)({
                            ref: te,
                            tabIndex: xe,
                            role: "button",
                            "aria-disabled": w ? "true" : void 0,
                            "aria-expanded": ae ? "true" : "false",
                            "aria-haspopup": "listbox",
                            "aria-label": s,
                            "aria-labelledby": [P, Pe].filter(Boolean).join(" ") || void 0,
                            "aria-describedby": r,
                            onKeyDown: e => {
                                if (!j) {
                                    -1 !== [" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(e.key) && (e.preventDefault(), ne(!0, e))
                                }
                            },
                            onMouseDown: w || j ? null : e => {
                                0 === e.button && (e.preventDefault(), J.current.focus(), ne(!0, e))
                            },
                            onBlur: e => {
                                !ae && A && (Object.defineProperty(e, "target", {
                                    writable: !0,
                                    value: {
                                        value: N,
                                        name: O
                                    }
                                }), A(e))
                            },
                            onFocus: R
                        }, L, {
                            ownerState: Te,
                            className: (0, a.Z)(L.className, _e.select, g),
                            id: Pe,
                            children: be(se) ? pe || (pe = (0, v.jsx)("span", {
                                className: "notranslate",
                                children: "\u200b"
                            })) : se
                        })), (0, v.jsx)(ge, (0, n.Z)({
                            "aria-invalid": E,
                            value: Array.isArray(N) ? N.join(",") : N,
                            name: O,
                            ref: U,
                            "aria-hidden": !0,
                            onChange: e => {
                                const t = oe.find((t => t.props.value === e.target.value));
                                void 0 !== t && (B(t.props.value), k && k(e, t))
                            },
                            tabIndex: -1,
                            disabled: w,
                            className: _e.nativeInput,
                            autoFocus: p,
                            ownerState: Te
                        }, z)), (0, v.jsx)(ve, {
                            as: x,
                            className: _e.icon,
                            ownerState: Te
                        }), (0, v.jsx)(ee, (0, n.Z)({
                            id: `menu-${O||""}`,
                            anchorEl: re,
                            open: ae,
                            onClose: e => {
                                ne(!1, e)
                            },
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "center"
                            },
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "center"
                            }
                        }, T, {
                            MenuListProps: (0, n.Z)({
                                "aria-labelledby": P,
                                role: "listbox",
                                disableListWrap: !0
                            }, T.MenuListProps),
                            PaperProps: (0, n.Z)({}, T.PaperProps, {
                                style: (0, n.Z)({
                                    minWidth: Ce
                                }, null != T.PaperProps ? T.PaperProps.style : null)
                            }),
                            children: Ee
                        }))]
                    })
                })),
                Se = r(15704),
                Ee = r(74423),
                xe = (0, r(88169).Z)((0, v.jsx)("path", {
                    d: "M7 10l5 5 5-5z"
                }), "ArrowDropDown"),
                Ce = r(90089),
                Pe = r(78288),
                Te = r(37058);
            const _e = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"],
                Oe = {
                    name: "MuiSelect",
                    overridesResolver: (e, t) => t.root,
                    shouldForwardProp: e => (0, P.FO)(e) && "variant" !== e,
                    slot: "Root"
                },
                Ae = (0, P.ZP)(Ce.Z, Oe)(""),
                ke = (0, P.ZP)(Te.Z, Oe)(""),
                Me = (0, P.ZP)(Pe.Z, Oe)(""),
                Re = i.forwardRef((function(e, t) {
                    const r = (0, T.Z)({
                            name: "MuiSelect",
                            props: e
                        }),
                        {
                            autoWidth: l = !1,
                            children: c,
                            classes: d = {},
                            className: u,
                            defaultOpen: p = !1,
                            displayEmpty: f = !1,
                            IconComponent: m = xe,
                            id: g,
                            input: y,
                            inputProps: b,
                            label: w,
                            labelId: S,
                            MenuProps: E,
                            multiple: x = !1,
                            native: C = !1,
                            onClose: P,
                            onOpen: _,
                            open: O,
                            renderValue: A,
                            SelectDisplayProps: k,
                            variant: M = "outlined"
                        } = r,
                        R = (0, o.Z)(r, _e),
                        Z = C ? le : we,
                        I = (0, Ee.Z)(),
                        j = (0, Se.Z)({
                            props: r,
                            muiFormControl: I,
                            states: ["variant", "error"]
                        }),
                        H = j.variant || M,
                        L = (0, n.Z)({}, r, {
                            variant: H,
                            classes: d
                        }),
                        D = (e => {
                            const {
                                classes: t
                            } = e;
                            return t
                        })(L),
                        $ = y || {
                            standard: (0, v.jsx)(Ae, {
                                ownerState: L
                            }),
                            outlined: (0, v.jsx)(ke, {
                                label: w,
                                ownerState: L
                            }),
                            filled: (0, v.jsx)(Me, {
                                ownerState: L
                            })
                        }[H],
                        W = (0, h.Z)(t, $.ref);
                    return (0, v.jsx)(i.Fragment, {
                        children: i.cloneElement($, (0, n.Z)({
                            inputComponent: Z,
                            inputProps: (0, n.Z)({
                                children: c,
                                error: j.error,
                                IconComponent: m,
                                variant: H,
                                type: void 0,
                                multiple: x
                            }, C ? {
                                id: g
                            } : {
                                autoWidth: l,
                                defaultOpen: p,
                                displayEmpty: f,
                                labelId: S,
                                MenuProps: E,
                                onClose: P,
                                onOpen: _,
                                open: O,
                                renderValue: A,
                                SelectDisplayProps: (0, n.Z)({
                                    id: g
                                }, k)
                            }, b, {
                                classes: b ? (0, s.Z)(D, b.classes) : D
                            }, y ? y.props.inputProps : {})
                        }, x && C && "outlined" === H ? {
                            notched: !0
                        } : {}, {
                            ref: W,
                            className: (0, a.Z)($.props.className, u)
                        }, !y && {
                            variant: H
                        }, R))
                    })
                }));
            Re.muiName = "Select";
            var Ze = Re
        },
        7906: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return y
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(84279),
                c = r(33616),
                d = r(11496),
                u = r(1588),
                p = r(34867);

            function f(e) {
                return (0, p.Z)("MuiTable", e)
            }(0, u.Z)("MuiTable", ["root", "stickyHeader"]);
            var h = r(85893);
            const m = ["className", "component", "padding", "size", "stickyHeader"],
                v = (0, d.ZP)("table", {
                    name: "MuiTable",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, r.stickyHeader && t.stickyHeader]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, o.Z)({
                    display: "table",
                    width: "100%",
                    borderCollapse: "collapse",
                    borderSpacing: 0,
                    "& caption": (0, o.Z)({}, e.typography.body2, {
                        padding: e.spacing(2),
                        color: (e.vars || e).palette.text.secondary,
                        textAlign: "left",
                        captionSide: "bottom"
                    })
                }, t.stickyHeader && {
                    borderCollapse: "separate"
                }))),
                g = "table";
            var y = i.forwardRef((function(e, t) {
                const r = (0, c.Z)({
                        props: e,
                        name: "MuiTable"
                    }),
                    {
                        className: d,
                        component: u = g,
                        padding: p = "normal",
                        size: y = "medium",
                        stickyHeader: b = !1
                    } = r,
                    w = (0, n.Z)(r, m),
                    S = (0, o.Z)({}, r, {
                        component: u,
                        padding: p,
                        size: y,
                        stickyHeader: b
                    }),
                    E = (e => {
                        const {
                            classes: t,
                            stickyHeader: r
                        } = e, n = {
                            root: ["root", r && "stickyHeader"]
                        };
                        return (0, s.Z)(n, f, t)
                    })(S),
                    x = i.useMemo((() => ({
                        padding: p,
                        size: y,
                        stickyHeader: b
                    })), [p, y, b]);
                return (0, h.jsx)(l.Z.Provider, {
                    value: x,
                    children: (0, h.jsx)(v, (0, o.Z)({
                        as: u,
                        role: u === g ? null : "table",
                        ref: t,
                        className: (0, a.Z)(E.root, d),
                        ownerState: S
                    }, w))
                })
            }))
        },
        84279: function(e, t, r) {
            const n = r(67294).createContext();
            t.Z = n
        },
        44063: function(e, t, r) {
            const n = r(67294).createContext();
            t.Z = n
        },
        295: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return b
                }
            });
            var n = r(32793),
                o = r(1048),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(44063),
                c = r(33616),
                d = r(11496),
                u = r(1588),
                p = r(34867);

            function f(e) {
                return (0, p.Z)("MuiTableBody", e)
            }(0, u.Z)("MuiTableBody", ["root"]);
            var h = r(85893);
            const m = ["className", "component"],
                v = (0, d.ZP)("tbody", {
                    name: "MuiTableBody",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({
                    display: "table-row-group"
                }),
                g = {
                    variant: "body"
                },
                y = "tbody";
            var b = i.forwardRef((function(e, t) {
                const r = (0, c.Z)({
                        props: e,
                        name: "MuiTableBody"
                    }),
                    {
                        className: i,
                        component: d = y
                    } = r,
                    u = (0, o.Z)(r, m),
                    p = (0, n.Z)({}, r, {
                        component: d
                    }),
                    b = (e => {
                        const {
                            classes: t
                        } = e;
                        return (0, s.Z)({
                            root: ["root"]
                        }, f, t)
                    })(p);
                return (0, h.jsx)(l.Z.Provider, {
                    value: g,
                    children: (0, h.jsx)(v, (0, n.Z)({
                        className: (0, a.Z)(b.root, i),
                        as: d,
                        ref: t,
                        role: d === y ? null : "rowgroup",
                        ownerState: p
                    }, u))
                })
            }))
        },
        53252: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return S
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(41796),
                c = r(98216),
                d = r(84279),
                u = r(44063),
                p = r(33616),
                f = r(11496),
                h = r(1588),
                m = r(34867);

            function v(e) {
                return (0, m.Z)("MuiTableCell", e)
            }
            var g = (0, h.Z)("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]),
                y = r(85893);
            const b = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"],
                w = (0, f.ZP)("td", {
                    name: "MuiTableCell",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, t[r.variant], t[`size${(0,c.Z)(r.size)}`], "normal" !== r.padding && t[`padding${(0,c.Z)(r.padding)}`], "inherit" !== r.align && t[`align${(0,c.Z)(r.align)}`], r.stickyHeader && t.stickyHeader]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, o.Z)({}, e.typography.body2, {
                    display: "table-cell",
                    verticalAlign: "inherit",
                    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid\n    ${"light"===e.palette.mode?(0,l.$n)((0,l.Fq)(e.palette.divider,1),.88):(0,l._j)((0,l.Fq)(e.palette.divider,1),.68)}`,
                    textAlign: "left",
                    padding: 16
                }, "head" === t.variant && {
                    color: (e.vars || e).palette.text.primary,
                    lineHeight: e.typography.pxToRem(24),
                    fontWeight: e.typography.fontWeightMedium
                }, "body" === t.variant && {
                    color: (e.vars || e).palette.text.primary
                }, "footer" === t.variant && {
                    color: (e.vars || e).palette.text.secondary,
                    lineHeight: e.typography.pxToRem(21),
                    fontSize: e.typography.pxToRem(12)
                }, "small" === t.size && {
                    padding: "6px 16px",
                    [`&.${g.paddingCheckbox}`]: {
                        width: 24,
                        padding: "0 12px 0 16px",
                        "& > *": {
                            padding: 0
                        }
                    }
                }, "checkbox" === t.padding && {
                    width: 48,
                    padding: "0 0 0 4px"
                }, "none" === t.padding && {
                    padding: 0
                }, "left" === t.align && {
                    textAlign: "left"
                }, "center" === t.align && {
                    textAlign: "center"
                }, "right" === t.align && {
                    textAlign: "right",
                    flexDirection: "row-reverse"
                }, "justify" === t.align && {
                    textAlign: "justify"
                }, t.stickyHeader && {
                    position: "sticky",
                    top: 0,
                    zIndex: 2,
                    backgroundColor: (e.vars || e).palette.background.default
                })));
            var S = i.forwardRef((function(e, t) {
                const r = (0, p.Z)({
                        props: e,
                        name: "MuiTableCell"
                    }),
                    {
                        align: l = "inherit",
                        className: f,
                        component: h,
                        padding: m,
                        scope: g,
                        size: S,
                        sortDirection: E,
                        variant: x
                    } = r,
                    C = (0, n.Z)(r, b),
                    P = i.useContext(d.Z),
                    T = i.useContext(u.Z),
                    _ = T && "head" === T.variant;
                let O;
                O = h || (_ ? "th" : "td");
                let A = g;
                "td" === O ? A = void 0 : !A && _ && (A = "col");
                const k = x || T && T.variant,
                    M = (0, o.Z)({}, r, {
                        align: l,
                        component: O,
                        padding: m || (P && P.padding ? P.padding : "normal"),
                        size: S || (P && P.size ? P.size : "medium"),
                        sortDirection: E,
                        stickyHeader: "head" === k && P && P.stickyHeader,
                        variant: k
                    }),
                    R = (e => {
                        const {
                            classes: t,
                            variant: r,
                            align: n,
                            padding: o,
                            size: i,
                            stickyHeader: a
                        } = e, l = {
                            root: ["root", r, a && "stickyHeader", "inherit" !== n && `align${(0,c.Z)(n)}`, "normal" !== o && `padding${(0,c.Z)(o)}`, `size${(0,c.Z)(i)}`]
                        };
                        return (0, s.Z)(l, v, t)
                    })(M);
                let Z = null;
                return E && (Z = "asc" === E ? "ascending" : "descending"), (0, y.jsx)(w, (0, o.Z)({
                    as: O,
                    ref: t,
                    className: (0, a.Z)(R.root, f),
                    "aria-sort": Z,
                    scope: A,
                    ownerState: M
                }, C))
            }))
        },
        72882: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return v
                }
            });
            var n = r(32793),
                o = r(1048),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(33616),
                c = r(11496),
                d = r(1588),
                u = r(34867);

            function p(e) {
                return (0, u.Z)("MuiTableContainer", e)
            }(0, d.Z)("MuiTableContainer", ["root"]);
            var f = r(85893);
            const h = ["className", "component"],
                m = (0, c.ZP)("div", {
                    name: "MuiTableContainer",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({
                    width: "100%",
                    overflowX: "auto"
                });
            var v = i.forwardRef((function(e, t) {
                const r = (0, l.Z)({
                        props: e,
                        name: "MuiTableContainer"
                    }),
                    {
                        className: i,
                        component: c = "div"
                    } = r,
                    d = (0, o.Z)(r, h),
                    u = (0, n.Z)({}, r, {
                        component: c
                    }),
                    v = (e => {
                        const {
                            classes: t
                        } = e;
                        return (0, s.Z)({
                            root: ["root"]
                        }, p, t)
                    })(u);
                return (0, f.jsx)(m, (0, n.Z)({
                    ref: t,
                    as: c,
                    className: (0, a.Z)(v.root, i),
                    ownerState: u
                }, d))
            }))
        },
        53184: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return b
                }
            });
            var n = r(32793),
                o = r(1048),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(44063),
                c = r(33616),
                d = r(11496),
                u = r(1588),
                p = r(34867);

            function f(e) {
                return (0, p.Z)("MuiTableHead", e)
            }(0, u.Z)("MuiTableHead", ["root"]);
            var h = r(85893);
            const m = ["className", "component"],
                v = (0, d.ZP)("thead", {
                    name: "MuiTableHead",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })({
                    display: "table-header-group"
                }),
                g = {
                    variant: "head"
                },
                y = "thead";
            var b = i.forwardRef((function(e, t) {
                const r = (0, c.Z)({
                        props: e,
                        name: "MuiTableHead"
                    }),
                    {
                        className: i,
                        component: d = y
                    } = r,
                    u = (0, o.Z)(r, m),
                    p = (0, n.Z)({}, r, {
                        component: d
                    }),
                    b = (e => {
                        const {
                            classes: t
                        } = e;
                        return (0, s.Z)({
                            root: ["root"]
                        }, f, t)
                    })(p);
                return (0, h.jsx)(l.Z.Provider, {
                    value: g,
                    children: (0, h.jsx)(v, (0, n.Z)({
                        as: d,
                        className: (0, a.Z)(b.root, i),
                        ref: t,
                        role: d === y ? null : "rowgroup",
                        ownerState: p
                    }, u))
                })
            }))
        },
        80418: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return ue
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(28442),
                c = r(11496),
                d = r(33616),
                u = r(96144),
                p = r(41796),
                f = r(59773),
                h = r(49990),
                m = r(58974),
                v = r(51705),
                g = r(1588);
            var y = (0, g.Z)("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
            var b = (0, g.Z)("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
            var w = (0, g.Z)("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]),
                S = r(34867);

            function E(e) {
                return (0, S.Z)("MuiMenuItem", e)
            }
            var x = (0, g.Z)("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]),
                C = r(85893);
            const P = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"],
                T = (0, c.ZP)(h.Z, {
                    shouldForwardProp: e => (0, c.FO)(e) || "classes" === e,
                    name: "MuiMenuItem",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, o.Z)({}, e.typography.body1, {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    position: "relative",
                    textDecoration: "none",
                    minHeight: 48,
                    paddingTop: 6,
                    paddingBottom: 6,
                    boxSizing: "border-box",
                    whiteSpace: "nowrap"
                }, !t.disableGutters && {
                    paddingLeft: 16,
                    paddingRight: 16
                }, t.divider && {
                    borderBottom: `1px solid ${(e.vars||e).palette.divider}`,
                    backgroundClip: "padding-box"
                }, {
                    "&:hover": {
                        textDecoration: "none",
                        backgroundColor: (e.vars || e).palette.action.hover,
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    },
                    [`&.${x.selected}`]: {
                        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : (0, p.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity),
                        [`&.${x.focusVisible}`]: {
                            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : (0, p.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
                        }
                    },
                    [`&.${x.selected}:hover`]: {
                        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : (0, p.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : (0, p.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity)
                        }
                    },
                    [`&.${x.focusVisible}`]: {
                        backgroundColor: (e.vars || e).palette.action.focus
                    },
                    [`&.${x.disabled}`]: {
                        opacity: (e.vars || e).palette.action.disabledOpacity
                    },
                    [`& + .${y.root}`]: {
                        marginTop: e.spacing(1),
                        marginBottom: e.spacing(1)
                    },
                    [`& + .${y.inset}`]: {
                        marginLeft: 52
                    },
                    [`& .${w.root}`]: {
                        marginTop: 0,
                        marginBottom: 0
                    },
                    [`& .${w.inset}`]: {
                        paddingLeft: 36
                    },
                    [`& .${b.root}`]: {
                        minWidth: 36
                    }
                }, !t.dense && {
                    [e.breakpoints.up("sm")]: {
                        minHeight: "auto"
                    }
                }, t.dense && (0, o.Z)({
                    minHeight: 32,
                    paddingTop: 4,
                    paddingBottom: 4
                }, e.typography.body2, {
                    [`& .${b.root} svg`]: {
                        fontSize: "1.25rem"
                    }
                }))));
            var _ = i.forwardRef((function(e, t) {
                    const r = (0, d.Z)({
                            props: e,
                            name: "MuiMenuItem"
                        }),
                        {
                            autoFocus: l = !1,
                            component: c = "li",
                            dense: u = !1,
                            divider: p = !1,
                            disableGutters: h = !1,
                            focusVisibleClassName: g,
                            role: y = "menuitem",
                            tabIndex: b,
                            className: w
                        } = r,
                        S = (0, n.Z)(r, P),
                        x = i.useContext(f.Z),
                        _ = i.useMemo((() => ({
                            dense: u || x.dense || !1,
                            disableGutters: h
                        })), [x.dense, u, h]),
                        O = i.useRef(null);
                    (0, m.Z)((() => {
                        l && O.current && O.current.focus()
                    }), [l]);
                    const A = (0, o.Z)({}, r, {
                            dense: _.dense,
                            divider: p,
                            disableGutters: h
                        }),
                        k = (e => {
                            const {
                                disabled: t,
                                dense: r,
                                divider: n,
                                disableGutters: i,
                                selected: a,
                                classes: l
                            } = e, c = {
                                root: ["root", r && "dense", t && "disabled", !i && "gutters", n && "divider", a && "selected"]
                            }, d = (0, s.Z)(c, E, l);
                            return (0, o.Z)({}, l, d)
                        })(r),
                        M = (0, v.Z)(O, t);
                    let R;
                    return r.disabled || (R = void 0 !== b ? b : -1), (0, C.jsx)(f.Z.Provider, {
                        value: _,
                        children: (0, C.jsx)(T, (0, o.Z)({
                            ref: M,
                            role: y,
                            tabIndex: R,
                            component: c,
                            focusVisibleClassName: (0, a.Z)(k.focusVisible, g),
                            className: (0, a.Z)(k.root, w)
                        }, S, {
                            ownerState: A,
                            classes: k
                        }))
                    })
                })),
                O = r(14361),
                A = r(53252);

            function k(e) {
                return (0, S.Z)("MuiToolbar", e)
            }(0, g.Z)("MuiToolbar", ["root", "gutters", "regular", "dense"]);
            const M = ["className", "component", "disableGutters", "variant"],
                R = (0, c.ZP)("div", {
                    name: "MuiToolbar",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, !r.disableGutters && t.gutters, t[r.variant]]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, o.Z)({
                    position: "relative",
                    display: "flex",
                    alignItems: "center"
                }, !t.disableGutters && {
                    paddingLeft: e.spacing(2),
                    paddingRight: e.spacing(2),
                    [e.breakpoints.up("sm")]: {
                        paddingLeft: e.spacing(3),
                        paddingRight: e.spacing(3)
                    }
                }, "dense" === t.variant && {
                    minHeight: 48
                })), (({
                    theme: e,
                    ownerState: t
                }) => "regular" === t.variant && e.mixins.toolbar));
            var Z, I, j, H, L, D, $, W, z = i.forwardRef((function(e, t) {
                    const r = (0, d.Z)({
                            props: e,
                            name: "MuiToolbar"
                        }),
                        {
                            className: i,
                            component: l = "div",
                            disableGutters: c = !1,
                            variant: u = "regular"
                        } = r,
                        p = (0, n.Z)(r, M),
                        f = (0, o.Z)({}, r, {
                            component: l,
                            disableGutters: c,
                            variant: u
                        }),
                        h = (e => {
                            const {
                                classes: t,
                                disableGutters: r,
                                variant: n
                            } = e, o = {
                                root: ["root", !r && "gutters", n]
                            };
                            return (0, s.Z)(o, k, t)
                        })(f);
                    return (0, C.jsx)(R, (0, o.Z)({
                        as: l,
                        className: (0, a.Z)(h.root, i),
                        ref: t,
                        ownerState: f
                    }, p))
                })),
                N = r(88169),
                B = (0, N.Z)((0, C.jsx)("path", {
                    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
                }), "KeyboardArrowLeft"),
                F = (0, N.Z)((0, C.jsx)("path", {
                    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
                }), "KeyboardArrowRight"),
                K = r(2734),
                U = r(93946),
                J = (0, N.Z)((0, C.jsx)("path", {
                    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
                }), "LastPage"),
                G = (0, N.Z)((0, C.jsx)("path", {
                    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
                }), "FirstPage");
            const q = ["backIconButtonProps", "count", "getItemAriaLabel", "nextIconButtonProps", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton"];
            var V = i.forwardRef((function(e, t) {
                    const {
                        backIconButtonProps: r,
                        count: i,
                        getItemAriaLabel: a,
                        nextIconButtonProps: s,
                        onPageChange: l,
                        page: c,
                        rowsPerPage: d,
                        showFirstButton: u,
                        showLastButton: p
                    } = e, f = (0, n.Z)(e, q), h = (0, K.Z)();
                    return (0, C.jsxs)("div", (0, o.Z)({
                        ref: t
                    }, f, {
                        children: [u && (0, C.jsx)(U.Z, {
                            onClick: e => {
                                l(e, 0)
                            },
                            disabled: 0 === c,
                            "aria-label": a("first", c),
                            title: a("first", c),
                            children: "rtl" === h.direction ? Z || (Z = (0, C.jsx)(J, {})) : I || (I = (0, C.jsx)(G, {}))
                        }), (0, C.jsx)(U.Z, (0, o.Z)({
                            onClick: e => {
                                l(e, c - 1)
                            },
                            disabled: 0 === c,
                            color: "inherit",
                            "aria-label": a("previous", c),
                            title: a("previous", c)
                        }, r, {
                            children: "rtl" === h.direction ? j || (j = (0, C.jsx)(F, {})) : H || (H = (0, C.jsx)(B, {}))
                        })), (0, C.jsx)(U.Z, (0, o.Z)({
                            onClick: e => {
                                l(e, c + 1)
                            },
                            disabled: -1 !== i && c >= Math.ceil(i / d) - 1,
                            color: "inherit",
                            "aria-label": a("next", c),
                            title: a("next", c)
                        }, s, {
                            children: "rtl" === h.direction ? L || (L = (0, C.jsx)(B, {})) : D || (D = (0, C.jsx)(F, {}))
                        })), p && (0, C.jsx)(U.Z, {
                            onClick: e => {
                                l(e, Math.max(0, Math.ceil(i / d) - 1))
                            },
                            disabled: c >= Math.ceil(i / d) - 1,
                            "aria-label": a("last", c),
                            title: a("last", c),
                            children: "rtl" === h.direction ? $ || ($ = (0, C.jsx)(G, {})) : W || (W = (0, C.jsx)(J, {}))
                        })]
                    }))
                })),
                X = r(27909);

            function Y(e) {
                return (0, S.Z)("MuiTablePagination", e)
            }
            var Q, ee = (0, g.Z)("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);
            const te = ["ActionsComponent", "backIconButtonProps", "className", "colSpan", "component", "count", "getItemAriaLabel", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps", "showFirstButton", "showLastButton"],
                re = (0, c.ZP)(A.Z, {
                    name: "MuiTablePagination",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })((({
                    theme: e
                }) => ({
                    overflow: "auto",
                    color: (e.vars || e).palette.text.primary,
                    fontSize: e.typography.pxToRem(14),
                    "&:last-child": {
                        padding: 0
                    }
                }))),
                ne = (0, c.ZP)(z, {
                    name: "MuiTablePagination",
                    slot: "Toolbar",
                    overridesResolver: (e, t) => (0, o.Z)({
                        [`& .${ee.actions}`]: t.actions
                    }, t.toolbar)
                })((({
                    theme: e
                }) => ({
                    minHeight: 52,
                    paddingRight: 2,
                    [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
                        minHeight: 52
                    },
                    [e.breakpoints.up("sm")]: {
                        minHeight: 52,
                        paddingRight: 2
                    },
                    [`& .${ee.actions}`]: {
                        flexShrink: 0,
                        marginLeft: 20
                    }
                }))),
                oe = (0, c.ZP)("div", {
                    name: "MuiTablePagination",
                    slot: "Spacer",
                    overridesResolver: (e, t) => t.spacer
                })({
                    flex: "1 1 100%"
                }),
                ie = (0, c.ZP)("p", {
                    name: "MuiTablePagination",
                    slot: "SelectLabel",
                    overridesResolver: (e, t) => t.selectLabel
                })((({
                    theme: e
                }) => (0, o.Z)({}, e.typography.body2, {
                    flexShrink: 0
                }))),
                ae = (0, c.ZP)(O.Z, {
                    name: "MuiTablePagination",
                    slot: "Select",
                    overridesResolver: (e, t) => (0, o.Z)({
                        [`& .${ee.selectIcon}`]: t.selectIcon,
                        [`& .${ee.select}`]: t.select
                    }, t.input, t.selectRoot)
                })({
                    color: "inherit",
                    fontSize: "inherit",
                    flexShrink: 0,
                    marginRight: 32,
                    marginLeft: 8,
                    [`& .${ee.select}`]: {
                        paddingLeft: 8,
                        paddingRight: 24,
                        textAlign: "right",
                        textAlignLast: "right"
                    }
                }),
                se = (0, c.ZP)(_, {
                    name: "MuiTablePagination",
                    slot: "MenuItem",
                    overridesResolver: (e, t) => t.menuItem
                })({}),
                le = (0, c.ZP)("p", {
                    name: "MuiTablePagination",
                    slot: "DisplayedRows",
                    overridesResolver: (e, t) => t.displayedRows
                })((({
                    theme: e
                }) => (0, o.Z)({}, e.typography.body2, {
                    flexShrink: 0
                })));

            function ce({
                from: e,
                to: t,
                count: r
            }) {
                return `${e}\u2013${t} of ${-1!==r?r:`more than ${t}`}`
            }

            function de(e) {
                return `Go to ${e} page`
            }
            var ue = i.forwardRef((function(e, t) {
                const r = (0, d.Z)({
                        props: e,
                        name: "MuiTablePagination"
                    }),
                    {
                        ActionsComponent: c = V,
                        backIconButtonProps: p,
                        className: f,
                        colSpan: h,
                        component: m = A.Z,
                        count: v,
                        getItemAriaLabel: g = de,
                        labelDisplayedRows: y = ce,
                        labelRowsPerPage: b = "Rows per page:",
                        nextIconButtonProps: w,
                        onPageChange: S,
                        onRowsPerPageChange: E,
                        page: x,
                        rowsPerPage: P,
                        rowsPerPageOptions: T = [10, 25, 50, 100],
                        SelectProps: _ = {},
                        showFirstButton: O = !1,
                        showLastButton: k = !1
                    } = r,
                    M = (0, n.Z)(r, te),
                    R = r,
                    Z = (e => {
                        const {
                            classes: t
                        } = e;
                        return (0, s.Z)({
                            root: ["root"],
                            toolbar: ["toolbar"],
                            spacer: ["spacer"],
                            selectLabel: ["selectLabel"],
                            select: ["select"],
                            input: ["input"],
                            selectIcon: ["selectIcon"],
                            menuItem: ["menuItem"],
                            displayedRows: ["displayedRows"],
                            actions: ["actions"]
                        }, Y, t)
                    })(R),
                    I = _.native ? "option" : se;
                let j;
                m !== A.Z && "td" !== m || (j = h || 1e3);
                const H = (0, X.Z)(_.id),
                    L = (0, X.Z)(_.labelId);
                return (0, C.jsx)(re, (0, o.Z)({
                    colSpan: j,
                    ref: t,
                    as: m,
                    ownerState: R,
                    className: (0, a.Z)(Z.root, f)
                }, M, {
                    children: (0, C.jsxs)(ne, {
                        className: Z.toolbar,
                        children: [(0, C.jsx)(oe, {
                            className: Z.spacer
                        }), T.length > 1 && (0, C.jsx)(ie, {
                            className: Z.selectLabel,
                            id: L,
                            children: b
                        }), T.length > 1 && (0, C.jsx)(ae, (0, o.Z)({
                            variant: "standard"
                        }, !_.variant && {
                            input: Q || (Q = (0, C.jsx)(u.ZP, {}))
                        }, {
                            value: P,
                            onChange: E,
                            id: H,
                            labelId: L
                        }, _, {
                            classes: (0, o.Z)({}, _.classes, {
                                root: (0, a.Z)(Z.input, Z.selectRoot, (_.classes || {}).root),
                                select: (0, a.Z)(Z.select, (_.classes || {}).select),
                                icon: (0, a.Z)(Z.selectIcon, (_.classes || {}).icon)
                            }),
                            children: T.map((e => (0, i.createElement)(I, (0, o.Z)({}, !(0, l.Z)(I) && {
                                ownerState: R
                            }, {
                                className: Z.menuItem,
                                key: e.label ? e.label : e,
                                value: e.value ? e.value : e
                            }), e.label ? e.label : e)))
                        })), (0, C.jsx)(le, {
                            className: Z.displayedRows,
                            children: y({
                                from: 0 === v ? 0 : x * P + 1,
                                to: -1 === v ? (x + 1) * P : -1 === P ? v : Math.min(v, (x + 1) * P),
                                count: -1 === v ? -1 : v,
                                page: x
                            })
                        }), (0, C.jsx)(c, {
                            className: Z.actions,
                            backIconButtonProps: p,
                            count: v,
                            nextIconButtonProps: w,
                            onPageChange: S,
                            page: x,
                            rowsPerPage: P,
                            showFirstButton: O,
                            showLastButton: k,
                            getItemAriaLabel: g
                        })]
                    })
                }))
            }))
        },
        53816: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return w
                }
            });
            var n = r(32793),
                o = r(1048),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(41796),
                c = r(44063),
                d = r(33616),
                u = r(11496),
                p = r(1588),
                f = r(34867);

            function h(e) {
                return (0, f.Z)("MuiTableRow", e)
            }
            var m = (0, p.Z)("MuiTableRow", ["root", "selected", "hover", "head", "footer"]),
                v = r(85893);
            const g = ["className", "component", "hover", "selected"],
                y = (0, u.ZP)("tr", {
                    name: "MuiTableRow",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, r.head && t.head, r.footer && t.footer]
                    }
                })((({
                    theme: e
                }) => ({
                    color: "inherit",
                    display: "table-row",
                    verticalAlign: "middle",
                    outline: 0,
                    [`&.${m.hover}:hover`]: {
                        backgroundColor: (e.vars || e).palette.action.hover
                    },
                    [`&.${m.selected}`]: {
                        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : (0, l.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity),
                        "&:hover": {
                            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : (0, l.Fq)(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
                        }
                    }
                }))),
                b = "tr";
            var w = i.forwardRef((function(e, t) {
                const r = (0, d.Z)({
                        props: e,
                        name: "MuiTableRow"
                    }),
                    {
                        className: l,
                        component: u = b,
                        hover: p = !1,
                        selected: f = !1
                    } = r,
                    m = (0, o.Z)(r, g),
                    w = i.useContext(c.Z),
                    S = (0, n.Z)({}, r, {
                        component: u,
                        hover: p,
                        selected: f,
                        head: w && "head" === w.variant,
                        footer: w && "footer" === w.variant
                    }),
                    E = (e => {
                        const {
                            classes: t,
                            selected: r,
                            hover: n,
                            head: o,
                            footer: i
                        } = e, a = {
                            root: ["root", r && "selected", n && "hover", o && "head", i && "footer"]
                        };
                        return (0, s.Z)(a, h, t)
                    })(S);
                return (0, v.jsx)(y, (0, n.Z)({
                    as: u,
                    ref: t,
                    className: (0, a.Z)(E.root, l),
                    role: u === b ? null : "row",
                    ownerState: S
                }, m))
            }))
        },
        26280: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return E
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(94780),
                a = r(86010),
                s = r(67294),
                l = r(49990),
                c = r(88169),
                d = r(85893),
                u = (0, c.Z)((0, d.jsx)("path", {
                    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
                }), "ArrowDownward"),
                p = r(11496),
                f = r(33616),
                h = r(98216),
                m = r(1588),
                v = r(34867);

            function g(e) {
                return (0, v.Z)("MuiTableSortLabel", e)
            }
            var y = (0, m.Z)("MuiTableSortLabel", ["root", "active", "icon", "iconDirectionDesc", "iconDirectionAsc"]);
            const b = ["active", "children", "className", "direction", "hideSortIcon", "IconComponent"],
                w = (0, p.ZP)(l.Z, {
                    name: "MuiTableSortLabel",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, r.active && t.active]
                    }
                })((({
                    theme: e
                }) => ({
                    cursor: "pointer",
                    display: "inline-flex",
                    justifyContent: "flex-start",
                    flexDirection: "inherit",
                    alignItems: "center",
                    "&:focus": {
                        color: (e.vars || e).palette.text.secondary
                    },
                    "&:hover": {
                        color: (e.vars || e).palette.text.secondary,
                        [`& .${y.icon}`]: {
                            opacity: .5
                        }
                    },
                    [`&.${y.active}`]: {
                        color: (e.vars || e).palette.text.primary,
                        [`& .${y.icon}`]: {
                            opacity: 1,
                            color: (e.vars || e).palette.text.secondary
                        }
                    }
                }))),
                S = (0, p.ZP)("span", {
                    name: "MuiTableSortLabel",
                    slot: "Icon",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.icon, t[`iconDirection${(0,h.Z)(r.direction)}`]]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => (0, o.Z)({
                    fontSize: 18,
                    marginRight: 4,
                    marginLeft: 4,
                    opacity: 0,
                    transition: e.transitions.create(["opacity", "transform"], {
                        duration: e.transitions.duration.shorter
                    }),
                    userSelect: "none"
                }, "desc" === t.direction && {
                    transform: "rotate(0deg)"
                }, "asc" === t.direction && {
                    transform: "rotate(180deg)"
                })));
            var E = s.forwardRef((function(e, t) {
                const r = (0, f.Z)({
                        props: e,
                        name: "MuiTableSortLabel"
                    }),
                    {
                        active: s = !1,
                        children: l,
                        className: c,
                        direction: p = "asc",
                        hideSortIcon: m = !1,
                        IconComponent: v = u
                    } = r,
                    y = (0, n.Z)(r, b),
                    E = (0, o.Z)({}, r, {
                        active: s,
                        direction: p,
                        hideSortIcon: m,
                        IconComponent: v
                    }),
                    x = (e => {
                        const {
                            classes: t,
                            direction: r,
                            active: n
                        } = e, o = {
                            root: ["root", n && "active"],
                            icon: ["icon", `iconDirection${(0,h.Z)(r)}`]
                        };
                        return (0, i.Z)(o, g, t)
                    })(E);
                return (0, d.jsxs)(w, (0, o.Z)({
                    className: (0, a.Z)(x.root, c),
                    component: "span",
                    disableRipple: !0,
                    ownerState: E,
                    ref: t
                }, y, {
                    children: [l, m && !s ? null : (0, d.jsx)(S, {
                        as: v,
                        className: (0, a.Z)(x.icon),
                        ownerState: E
                    })]
                }))
            }))
        },
        34386: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return I
                }
            });
            var n = r(1048),
                o = r(32793),
                i = r(67294),
                a = r(86010),
                s = r(94780),
                l = r(10238),
                c = r(41796),
                d = r(11496),
                u = r(2734),
                p = r(33616),
                f = r(98216),
                h = r(96514),
                m = r(68155),
                v = r(2068),
                g = r(51705),
                y = r(27909),
                b = r(18791),
                w = r(49299),
                S = r(1588),
                E = r(34867);

            function x(e) {
                return (0, E.Z)("MuiTooltip", e)
            }
            var C = (0, S.Z)("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]),
                P = r(85893);
            const T = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
            const _ = (0, d.ZP)(m.Z, {
                    name: "MuiTooltip",
                    slot: "Popper",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.popper, !r.disableInteractive && t.popperInteractive, r.arrow && t.popperArrow, !r.open && t.popperClose]
                    }
                })((({
                    theme: e,
                    ownerState: t,
                    open: r
                }) => (0, o.Z)({
                    zIndex: (e.vars || e).zIndex.tooltip,
                    pointerEvents: "none"
                }, !t.disableInteractive && {
                    pointerEvents: "auto"
                }, !r && {
                    pointerEvents: "none"
                }, t.arrow && {
                    [`&[data-popper-placement*="bottom"] .${C.arrow}`]: {
                        top: 0,
                        marginTop: "-0.71em",
                        "&::before": {
                            transformOrigin: "0 100%"
                        }
                    },
                    [`&[data-popper-placement*="top"] .${C.arrow}`]: {
                        bottom: 0,
                        marginBottom: "-0.71em",
                        "&::before": {
                            transformOrigin: "100% 0"
                        }
                    },
                    [`&[data-popper-placement*="right"] .${C.arrow}`]: (0, o.Z)({}, t.isRtl ? {
                        right: 0,
                        marginRight: "-0.71em"
                    } : {
                        left: 0,
                        marginLeft: "-0.71em"
                    }, {
                        height: "1em",
                        width: "0.71em",
                        "&::before": {
                            transformOrigin: "100% 100%"
                        }
                    }),
                    [`&[data-popper-placement*="left"] .${C.arrow}`]: (0, o.Z)({}, t.isRtl ? {
                        left: 0,
                        marginLeft: "-0.71em"
                    } : {
                        right: 0,
                        marginRight: "-0.71em"
                    }, {
                        height: "1em",
                        width: "0.71em",
                        "&::before": {
                            transformOrigin: "0 0"
                        }
                    })
                }))),
                O = (0, d.ZP)("div", {
                    name: "MuiTooltip",
                    slot: "Tooltip",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement${(0,f.Z)(r.placement.split("-")[0])}`]]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => {
                    return (0, o.Z)({
                        backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : (0, c.Fq)(e.palette.grey[700], .92),
                        borderRadius: (e.vars || e).shape.borderRadius,
                        color: (e.vars || e).palette.common.white,
                        fontFamily: e.typography.fontFamily,
                        padding: "4px 8px",
                        fontSize: e.typography.pxToRem(11),
                        maxWidth: 300,
                        margin: 2,
                        wordWrap: "break-word",
                        fontWeight: e.typography.fontWeightMedium
                    }, t.arrow && {
                        position: "relative",
                        margin: 0
                    }, t.touch && {
                        padding: "8px 16px",
                        fontSize: e.typography.pxToRem(14),
                        lineHeight: (r = 16 / 14, Math.round(1e5 * r) / 1e5) + "em",
                        fontWeight: e.typography.fontWeightRegular
                    }, {
                        [`.${C.popper}[data-popper-placement*="left"] &`]: (0, o.Z)({
                            transformOrigin: "right center"
                        }, t.isRtl ? (0, o.Z)({
                            marginLeft: "14px"
                        }, t.touch && {
                            marginLeft: "24px"
                        }) : (0, o.Z)({
                            marginRight: "14px"
                        }, t.touch && {
                            marginRight: "24px"
                        })),
                        [`.${C.popper}[data-popper-placement*="right"] &`]: (0, o.Z)({
                            transformOrigin: "left center"
                        }, t.isRtl ? (0, o.Z)({
                            marginRight: "14px"
                        }, t.touch && {
                            marginRight: "24px"
                        }) : (0, o.Z)({
                            marginLeft: "14px"
                        }, t.touch && {
                            marginLeft: "24px"
                        })),
                        [`.${C.popper}[data-popper-placement*="top"] &`]: (0, o.Z)({
                            transformOrigin: "center bottom",
                            marginBottom: "14px"
                        }, t.touch && {
                            marginBottom: "24px"
                        }),
                        [`.${C.popper}[data-popper-placement*="bottom"] &`]: (0, o.Z)({
                            transformOrigin: "center top",
                            marginTop: "14px"
                        }, t.touch && {
                            marginTop: "24px"
                        })
                    });
                    var r
                })),
                A = (0, d.ZP)("span", {
                    name: "MuiTooltip",
                    slot: "Arrow",
                    overridesResolver: (e, t) => t.arrow
                })((({
                    theme: e
                }) => ({
                    overflow: "hidden",
                    position: "absolute",
                    width: "1em",
                    height: "0.71em",
                    boxSizing: "border-box",
                    color: e.vars ? e.vars.palette.Tooltip.bg : (0, c.Fq)(e.palette.grey[700], .9),
                    "&::before": {
                        content: '""',
                        margin: "auto",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "currentColor",
                        transform: "rotate(45deg)"
                    }
                })));
            let k = !1,
                M = null,
                R = {
                    x: 0,
                    y: 0
                };

            function Z(e, t) {
                return r => {
                    t && t(r), e(r)
                }
            }
            var I = i.forwardRef((function(e, t) {
                var r, c, d, S, E, C, I, j, H, L, D, $, W, z, N, B, F, K, U;
                const J = (0, p.Z)({
                        props: e,
                        name: "MuiTooltip"
                    }),
                    {
                        arrow: G = !1,
                        children: q,
                        components: V = {},
                        componentsProps: X = {},
                        describeChild: Y = !1,
                        disableFocusListener: Q = !1,
                        disableHoverListener: ee = !1,
                        disableInteractive: te = !1,
                        disableTouchListener: re = !1,
                        enterDelay: ne = 100,
                        enterNextDelay: oe = 0,
                        enterTouchDelay: ie = 700,
                        followCursor: ae = !1,
                        id: se,
                        leaveDelay: le = 0,
                        leaveTouchDelay: ce = 1500,
                        onClose: de,
                        onOpen: ue,
                        open: pe,
                        placement: fe = "bottom",
                        PopperComponent: he,
                        PopperProps: me = {},
                        slotProps: ve = {},
                        slots: ge = {},
                        title: ye,
                        TransitionComponent: be = h.Z,
                        TransitionProps: we
                    } = J,
                    Se = (0, n.Z)(J, T),
                    Ee = i.isValidElement(q) ? q : (0, P.jsx)("span", {
                        children: q
                    }),
                    xe = (0, u.Z)(),
                    Ce = "rtl" === xe.direction,
                    [Pe, Te] = i.useState(),
                    [_e, Oe] = i.useState(null),
                    Ae = i.useRef(!1),
                    ke = te || ae,
                    Me = i.useRef(),
                    Re = i.useRef(),
                    Ze = i.useRef(),
                    Ie = i.useRef(),
                    [je, He] = (0, w.Z)({
                        controlled: pe,
                        default: !1,
                        name: "Tooltip",
                        state: "open"
                    });
                let Le = je;
                const De = (0, y.Z)(se),
                    $e = i.useRef(),
                    We = i.useCallback((() => {
                        void 0 !== $e.current && (document.body.style.WebkitUserSelect = $e.current, $e.current = void 0), clearTimeout(Ie.current)
                    }), []);
                i.useEffect((() => () => {
                    clearTimeout(Me.current), clearTimeout(Re.current), clearTimeout(Ze.current), We()
                }), [We]);
                const ze = e => {
                        clearTimeout(M), k = !0, He(!0), ue && !Le && ue(e)
                    },
                    Ne = (0, v.Z)((e => {
                        clearTimeout(M), M = setTimeout((() => {
                            k = !1
                        }), 800 + le), He(!1), de && Le && de(e), clearTimeout(Me.current), Me.current = setTimeout((() => {
                            Ae.current = !1
                        }), xe.transitions.duration.shortest)
                    })),
                    Be = e => {
                        Ae.current && "touchstart" !== e.type || (Pe && Pe.removeAttribute("title"), clearTimeout(Re.current), clearTimeout(Ze.current), ne || k && oe ? Re.current = setTimeout((() => {
                            ze(e)
                        }), k ? oe : ne) : ze(e))
                    },
                    Fe = e => {
                        clearTimeout(Re.current), clearTimeout(Ze.current), Ze.current = setTimeout((() => {
                            Ne(e)
                        }), le)
                    },
                    {
                        isFocusVisibleRef: Ke,
                        onBlur: Ue,
                        onFocus: Je,
                        ref: Ge
                    } = (0, b.Z)(),
                    [, qe] = i.useState(!1),
                    Ve = e => {
                        Ue(e), !1 === Ke.current && (qe(!1), Fe(e))
                    },
                    Xe = e => {
                        Pe || Te(e.currentTarget), Je(e), !0 === Ke.current && (qe(!0), Be(e))
                    },
                    Ye = e => {
                        Ae.current = !0;
                        const t = Ee.props;
                        t.onTouchStart && t.onTouchStart(e)
                    },
                    Qe = Be,
                    et = Fe,
                    tt = e => {
                        Ye(e), clearTimeout(Ze.current), clearTimeout(Me.current), We(), $e.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Ie.current = setTimeout((() => {
                            document.body.style.WebkitUserSelect = $e.current, Be(e)
                        }), ie)
                    },
                    rt = e => {
                        Ee.props.onTouchEnd && Ee.props.onTouchEnd(e), We(), clearTimeout(Ze.current), Ze.current = setTimeout((() => {
                            Ne(e)
                        }), ce)
                    };
                i.useEffect((() => {
                    if (Le) return document.addEventListener("keydown", e), () => {
                        document.removeEventListener("keydown", e)
                    };

                    function e(e) {
                        "Escape" !== e.key && "Esc" !== e.key || Ne(e)
                    }
                }), [Ne, Le]);
                const nt = (0, g.Z)(Ee.ref, Ge, Te, t);
                ye || 0 === ye || (Le = !1);
                const ot = i.useRef(),
                    it = {},
                    at = "string" === typeof ye;
                Y ? (it.title = Le || !at || ee ? null : ye, it["aria-describedby"] = Le ? De : null) : (it["aria-label"] = at ? ye : null, it["aria-labelledby"] = Le && !at ? De : null);
                const st = (0, o.Z)({}, it, Se, Ee.props, {
                    className: (0, a.Z)(Se.className, Ee.props.className),
                    onTouchStart: Ye,
                    ref: nt
                }, ae ? {
                    onMouseMove: e => {
                        const t = Ee.props;
                        t.onMouseMove && t.onMouseMove(e), R = {
                            x: e.clientX,
                            y: e.clientY
                        }, ot.current && ot.current.update()
                    }
                } : {});
                const lt = {};
                re || (st.onTouchStart = tt, st.onTouchEnd = rt), ee || (st.onMouseOver = Z(Qe, st.onMouseOver), st.onMouseLeave = Z(et, st.onMouseLeave), ke || (lt.onMouseOver = Qe, lt.onMouseLeave = et)), Q || (st.onFocus = Z(Xe, st.onFocus), st.onBlur = Z(Ve, st.onBlur), ke || (lt.onFocus = Xe, lt.onBlur = Ve));
                const ct = i.useMemo((() => {
                        var e;
                        let t = [{
                            name: "arrow",
                            enabled: Boolean(_e),
                            options: {
                                element: _e,
                                padding: 4
                            }
                        }];
                        return null != (e = me.popperOptions) && e.modifiers && (t = t.concat(me.popperOptions.modifiers)), (0, o.Z)({}, me.popperOptions, {
                            modifiers: t
                        })
                    }), [_e, me]),
                    dt = (0, o.Z)({}, J, {
                        isRtl: Ce,
                        arrow: G,
                        disableInteractive: ke,
                        placement: fe,
                        PopperComponentProp: he,
                        touch: Ae.current
                    }),
                    ut = (e => {
                        const {
                            classes: t,
                            disableInteractive: r,
                            arrow: n,
                            touch: o,
                            placement: i
                        } = e, a = {
                            popper: ["popper", !r && "popperInteractive", n && "popperArrow"],
                            tooltip: ["tooltip", n && "tooltipArrow", o && "touch", `tooltipPlacement${(0,f.Z)(i.split("-")[0])}`],
                            arrow: ["arrow"]
                        };
                        return (0, s.Z)(a, x, t)
                    })(dt),
                    pt = null != (r = null != (c = ge.popper) ? c : V.Popper) ? r : _,
                    ft = null != (d = null != (S = null != (E = ge.transition) ? E : V.Transition) ? S : be) ? d : h.Z,
                    ht = null != (C = null != (I = ge.tooltip) ? I : V.Tooltip) ? C : O,
                    mt = null != (j = null != (H = ge.arrow) ? H : V.Arrow) ? j : A,
                    vt = (0, l.Z)(pt, (0, o.Z)({}, me, null != (L = ve.popper) ? L : X.popper, {
                        className: (0, a.Z)(ut.popper, null == me ? void 0 : me.className, null == (D = null != ($ = ve.popper) ? $ : X.popper) ? void 0 : D.className)
                    }), dt),
                    gt = (0, l.Z)(ft, (0, o.Z)({}, we, null != (W = ve.transition) ? W : X.transition), dt),
                    yt = (0, l.Z)(ht, (0, o.Z)({}, null != (z = ve.tooltip) ? z : X.tooltip, {
                        className: (0, a.Z)(ut.tooltip, null == (N = null != (B = ve.tooltip) ? B : X.tooltip) ? void 0 : N.className)
                    }), dt),
                    bt = (0, l.Z)(mt, (0, o.Z)({}, null != (F = ve.arrow) ? F : X.arrow, {
                        className: (0, a.Z)(ut.arrow, null == (K = null != (U = ve.arrow) ? U : X.arrow) ? void 0 : K.className)
                    }), dt);
                return (0, P.jsxs)(i.Fragment, {
                    children: [i.cloneElement(Ee, st), (0, P.jsx)(pt, (0, o.Z)({
                        as: null != he ? he : m.Z,
                        placement: fe,
                        anchorEl: ae ? {
                            getBoundingClientRect: () => ({
                                top: R.y,
                                left: R.x,
                                right: R.x,
                                bottom: R.y,
                                width: 0,
                                height: 0
                            })
                        } : Pe,
                        popperRef: ot,
                        open: !!Pe && Le,
                        id: De,
                        transition: !0
                    }, lt, vt, {
                        popperOptions: ct,
                        children: ({
                            TransitionProps: e
                        }) => (0, P.jsx)(ft, (0, o.Z)({
                            timeout: xe.transitions.duration.shorter
                        }, e, gt, {
                            children: (0, P.jsxs)(ht, (0, o.Z)({}, yt, {
                                children: [ye, G ? (0, P.jsx)(mt, (0, o.Z)({}, bt, {
                                    ref: Oe
                                })) : null]
                            }))
                        }))
                    }))]
                })
            }))
        },
        88169: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return b
                }
            });
            var n = r(32793),
                o = r(67294),
                i = r(1048),
                a = r(86010),
                s = r(94780),
                l = r(98216),
                c = r(33616),
                d = r(11496),
                u = r(1588),
                p = r(34867);

            function f(e) {
                return (0, p.Z)("MuiSvgIcon", e)
            }(0, u.Z)("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
            var h = r(85893);
            const m = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"],
                v = (0, d.ZP)("svg", {
                    name: "MuiSvgIcon",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: r
                        } = e;
                        return [t.root, "inherit" !== r.color && t[`color${(0,l.Z)(r.color)}`], t[`fontSize${(0,l.Z)(r.fontSize)}`]]
                    }
                })((({
                    theme: e,
                    ownerState: t
                }) => {
                    var r, n, o, i, a, s, l, c, d, u, p, f, h, m, v, g, y;
                    return {
                        userSelect: "none",
                        width: "1em",
                        height: "1em",
                        display: "inline-block",
                        fill: t.hasSvgAsChild ? void 0 : "currentColor",
                        flexShrink: 0,
                        transition: null == (r = e.transitions) || null == (n = r.create) ? void 0 : n.call(r, "fill", {
                            duration: null == (o = e.transitions) || null == (i = o.duration) ? void 0 : i.shorter
                        }),
                        fontSize: {
                            inherit: "inherit",
                            small: (null == (a = e.typography) || null == (s = a.pxToRem) ? void 0 : s.call(a, 20)) || "1.25rem",
                            medium: (null == (l = e.typography) || null == (c = l.pxToRem) ? void 0 : c.call(l, 24)) || "1.5rem",
                            large: (null == (d = e.typography) || null == (u = d.pxToRem) ? void 0 : u.call(d, 35)) || "2.1875rem"
                        }[t.fontSize],
                        color: null != (p = null == (f = (e.vars || e).palette) || null == (h = f[t.color]) ? void 0 : h.main) ? p : {
                            action: null == (m = (e.vars || e).palette) || null == (v = m.action) ? void 0 : v.active,
                            disabled: null == (g = (e.vars || e).palette) || null == (y = g.action) ? void 0 : y.disabled,
                            inherit: void 0
                        }[t.color]
                    }
                })),
                g = o.forwardRef((function(e, t) {
                    const r = (0, c.Z)({
                            props: e,
                            name: "MuiSvgIcon"
                        }),
                        {
                            children: d,
                            className: u,
                            color: p = "inherit",
                            component: g = "svg",
                            fontSize: y = "medium",
                            htmlColor: b,
                            inheritViewBox: w = !1,
                            titleAccess: S,
                            viewBox: E = "0 0 24 24"
                        } = r,
                        x = (0, i.Z)(r, m),
                        C = o.isValidElement(d) && "svg" === d.type,
                        P = (0, n.Z)({}, r, {
                            color: p,
                            component: g,
                            fontSize: y,
                            instanceFontSize: e.fontSize,
                            inheritViewBox: w,
                            viewBox: E,
                            hasSvgAsChild: C
                        }),
                        T = {};
                    w || (T.viewBox = E);
                    const _ = (e => {
                        const {
                            color: t,
                            fontSize: r,
                            classes: n
                        } = e, o = {
                            root: ["root", "inherit" !== t && `color${(0,l.Z)(t)}`, `fontSize${(0,l.Z)(r)}`]
                        };
                        return (0, s.Z)(o, f, n)
                    })(P);
                    return (0, h.jsxs)(v, (0, n.Z)({
                        as: g,
                        className: (0, a.Z)(_.root, u),
                        focusable: "false",
                        color: b,
                        "aria-hidden": !S || void 0,
                        role: S ? "img" : void 0,
                        ref: t
                    }, T, x, C && d.props, {
                        ownerState: P,
                        children: [C ? d.props.children : d, S ? (0, h.jsx)("title", {
                            children: S
                        }) : null]
                    }))
                }));
            g.muiName = "SvgIcon";
            var y = g;

            function b(e, t) {
                function r(r, o) {
                    return (0, h.jsx)(y, (0, n.Z)({
                        "data-testid": `${t}Icon`,
                        ref: o
                    }, r, {
                        children: e
                    }))
                }
                return r.muiName = y.muiName, o.memo(o.forwardRef(r))
            }
        },
        49299: function(e, t, r) {
            var n = r(19032);
            t.Z = n.Z
        },
        58974: function(e, t, r) {
            var n = r(73546);
            t.Z = n.Z
        },
        2068: function(e, t, r) {
            var n = r(59948);
            t.Z = n.Z
        },
        27909: function(e, t, r) {
            var n = r(92996);
            t.Z = n.Z
        },
        18791: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return p
                }
            });
            var n = r(67294);
            let o, i = !0,
                a = !1;
            const s = {
                text: !0,
                search: !0,
                url: !0,
                tel: !0,
                email: !0,
                password: !0,
                number: !0,
                date: !0,
                month: !0,
                week: !0,
                time: !0,
                datetime: !0,
                "datetime-local": !0
            };

            function l(e) {
                e.metaKey || e.altKey || e.ctrlKey || (i = !0)
            }

            function c() {
                i = !1
            }

            function d() {
                "hidden" === this.visibilityState && a && (i = !0)
            }

            function u(e) {
                const {
                    target: t
                } = e;
                try {
                    return t.matches(":focus-visible")
                } catch (r) {}
                return i || function(e) {
                    const {
                        type: t,
                        tagName: r
                    } = e;
                    return !("INPUT" !== r || !s[t] || e.readOnly) || "TEXTAREA" === r && !e.readOnly || !!e.isContentEditable
                }(t)
            }
            var p = function() {
                const e = n.useCallback((e => {
                        var t;
                        null != e && ((t = e.ownerDocument).addEventListener("keydown", l, !0), t.addEventListener("mousedown", c, !0), t.addEventListener("pointerdown", c, !0), t.addEventListener("touchstart", c, !0), t.addEventListener("visibilitychange", d, !0))
                    }), []),
                    t = n.useRef(!1);
                return {
                    isFocusVisibleRef: t,
                    onFocus: function(e) {
                        return !!u(e) && (t.current = !0, !0)
                    },
                    onBlur: function() {
                        return !!t.current && (a = !0, window.clearTimeout(o), o = window.setTimeout((() => {
                            a = !1
                        }), 100), t.current = !1, !0)
                    },
                    ref: e
                }
            }
        },
        39707: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            var n = r(54695),
                o = r(60916),
                i = r(59766),
                a = r(44920);
            const s = ["sx"];

            function l(e) {
                const {
                    sx: t
                } = e, r = (0, o.Z)(e, s), {
                    systemProps: l,
                    otherProps: c
                } = (e => {
                    var t, r;
                    const n = {
                            systemProps: {},
                            otherProps: {}
                        },
                        o = null != (t = null == e || null == (r = e.theme) ? void 0 : r.unstable_sxConfig) ? t : a.Z;
                    return Object.keys(e).forEach((t => {
                        o[t] ? n.systemProps[t] = e[t] : n.otherProps[t] = e[t]
                    })), n
                })(r);
                let d;
                return d = Array.isArray(t) ? [l, ...t] : "function" === typeof t ? (...e) => {
                    const r = t(...e);
                    return (0, i.P)(r) ? (0, n.Z)({}, l, r) : l
                } : (0, n.Z)({}, l, t), (0, n.Z)({}, c, {
                    sx: d
                })
            }
        },
        39336: function(e, t, r) {
            function n(e, t = 166) {
                let r;

                function n(...n) {
                    clearTimeout(r), r = setTimeout((() => {
                        e.apply(this, n)
                    }), t)
                }
                return n.clear = () => {
                    clearTimeout(r)
                }, n
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        95806: function(e, t, r) {
            function n(e) {
                const t = e.documentElement.clientWidth;
                return Math.abs(window.innerWidth - t)
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        74161: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = r(82690);

            function o(e) {
                return (0, n.Z)(e).defaultView || window
            }
        },
        19032: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = r(67294);

            function o({
                controlled: e,
                default: t,
                name: r,
                state: o = "value"
            }) {
                const {
                    current: i
                } = n.useRef(void 0 !== e), [a, s] = n.useState(t);
                return [i ? e : a, n.useCallback((e => {
                    i || s(e)
                }), [])]
            }
        },
        92996: function(e, t, r) {
            var n;
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var o = r(67294);
            let i = 0;
            const a = (n || (n = r.t(o, 2)))["useId".toString()];

            function s(e) {
                if (void 0 !== a) {
                    const t = a();
                    return null != e ? e : t
                }
                return function(e) {
                    const [t, r] = o.useState(e), n = e || t;
                    return o.useEffect((() => {
                        null == t && (i += 1, r(`mui-${i}`))
                    }), [t]), n
                }(e)
            }
        },
        13113: function(e, t) {
            t.Z = {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: -1,
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                whiteSpace: "nowrap",
                width: "1px"
            }
        },
        95551: function(e, t, r) {
            function n(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function o(e) {
                return e instanceof n(e).Element || e instanceof Element
            }

            function i(e) {
                return e instanceof n(e).HTMLElement || e instanceof HTMLElement
            }

            function a(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot)
            }
            r.d(t, {
                fi: function() {
                    return me
                }
            });
            var s = Math.max,
                l = Math.min,
                c = Math.round;

            function d() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
                    return e.brand + "/" + e.version
                })).join(" ") : navigator.userAgent
            }

            function u() {
                return !/^((?!chrome|android).)*safari/i.test(d())
            }

            function p(e, t, r) {
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                var a = e.getBoundingClientRect(),
                    s = 1,
                    l = 1;
                t && i(e) && (s = e.offsetWidth > 0 && c(a.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && c(a.height) / e.offsetHeight || 1);
                var d = (o(e) ? n(e) : window).visualViewport,
                    p = !u() && r,
                    f = (a.left + (p && d ? d.offsetLeft : 0)) / s,
                    h = (a.top + (p && d ? d.offsetTop : 0)) / l,
                    m = a.width / s,
                    v = a.height / l;
                return {
                    width: m,
                    height: v,
                    top: h,
                    right: f + m,
                    bottom: h + v,
                    left: f,
                    x: f,
                    y: h
                }
            }

            function f(e) {
                var t = n(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function h(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function m(e) {
                return ((o(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function v(e) {
                return p(m(e)).left + f(e).scrollLeft
            }

            function g(e) {
                return n(e).getComputedStyle(e)
            }

            function y(e) {
                var t = g(e),
                    r = t.overflow,
                    n = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(r + o + n)
            }

            function b(e, t, r) {
                void 0 === r && (r = !1);
                var o = i(t),
                    a = i(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            r = c(t.width) / e.offsetWidth || 1,
                            n = c(t.height) / e.offsetHeight || 1;
                        return 1 !== r || 1 !== n
                    }(t),
                    s = m(t),
                    l = p(e, a, r),
                    d = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    u = {
                        x: 0,
                        y: 0
                    };
                return (o || !o && !r) && (("body" !== h(t) || y(s)) && (d = function(e) {
                    return e !== n(e) && i(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : f(e);
                    var t
                }(t)), i(t) ? ((u = p(t, !0)).x += t.clientLeft, u.y += t.clientTop) : s && (u.x = v(s))), {
                    x: l.left + d.scrollLeft - u.x,
                    y: l.top + d.scrollTop - u.y,
                    width: l.width,
                    height: l.height
                }
            }

            function w(e) {
                var t = p(e),
                    r = e.offsetWidth,
                    n = e.offsetHeight;
                return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: r,
                    height: n
                }
            }

            function S(e) {
                return "html" === h(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || m(e)
            }

            function E(e) {
                return ["html", "body", "#document"].indexOf(h(e)) >= 0 ? e.ownerDocument.body : i(e) && y(e) ? e : E(S(e))
            }

            function x(e, t) {
                var r;
                void 0 === t && (t = []);
                var o = E(e),
                    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    a = n(o),
                    s = i ? [a].concat(a.visualViewport || [], y(o) ? o : []) : o,
                    l = t.concat(s);
                return i ? l : l.concat(x(S(s)))
            }

            function C(e) {
                return ["table", "td", "th"].indexOf(h(e)) >= 0
            }

            function P(e) {
                return i(e) && "fixed" !== g(e).position ? e.offsetParent : null
            }

            function T(e) {
                for (var t = n(e), r = P(e); r && C(r) && "static" === g(r).position;) r = P(r);
                return r && ("html" === h(r) || "body" === h(r) && "static" === g(r).position) ? t : r || function(e) {
                    var t = /firefox/i.test(d());
                    if (/Trident/i.test(d()) && i(e) && "fixed" === g(e).position) return null;
                    var r = S(e);
                    for (a(r) && (r = r.host); i(r) && ["html", "body"].indexOf(h(r)) < 0;) {
                        var n = g(r);
                        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || t && "filter" === n.willChange || t && n.filter && "none" !== n.filter) return r;
                        r = r.parentNode
                    }
                    return null
                }(e) || t
            }
            var _ = "top",
                O = "bottom",
                A = "right",
                k = "left",
                M = "auto",
                R = [_, O, A, k],
                Z = "start",
                I = "end",
                j = "viewport",
                H = "popper",
                L = R.reduce((function(e, t) {
                    return e.concat([t + "-" + Z, t + "-" + I])
                }), []),
                D = [].concat(R, [M]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + Z, t + "-" + I])
                }), []),
                $ = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function W(e) {
                var t = new Map,
                    r = new Set,
                    n = [];

                function o(e) {
                    r.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!r.has(e)) {
                            var n = t.get(e);
                            n && o(n)
                        }
                    })), n.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    r.has(e.name) || o(e)
                })), n
            }

            function z(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(r) {
                        Promise.resolve().then((function() {
                            t = void 0, r(e())
                        }))
                    }))), t
                }
            }
            var N = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function B() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function F(e) {
                void 0 === e && (e = {});
                var t = e,
                    r = t.defaultModifiers,
                    n = void 0 === r ? [] : r,
                    i = t.defaultOptions,
                    a = void 0 === i ? N : i;
                return function(e, t, r) {
                    void 0 === r && (r = a);
                    var i = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, N, a),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        s = [],
                        l = !1,
                        c = {
                            state: i,
                            setOptions: function(r) {
                                var l = "function" === typeof r ? r(i.options) : r;
                                d(), i.options = Object.assign({}, a, i.options, l), i.scrollParents = {
                                    reference: o(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
                                    popper: x(t)
                                };
                                var u = function(e) {
                                    var t = W(e);
                                    return $.reduce((function(e, r) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === r
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var r = e[t.name];
                                        return e[t.name] = r ? Object.assign({}, r, t, {
                                            options: Object.assign({}, r.options, t.options),
                                            data: Object.assign({}, r.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(n, i.options.modifiers)));
                                return i.orderedModifiers = u.filter((function(e) {
                                    return e.enabled
                                })), i.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        r = e.options,
                                        n = void 0 === r ? {} : r,
                                        o = e.effect;
                                    if ("function" === typeof o) {
                                        var a = o({
                                                state: i,
                                                name: t,
                                                instance: c,
                                                options: n
                                            }),
                                            l = function() {};
                                        s.push(a || l)
                                    }
                                })), c.update()
                            },
                            forceUpdate: function() {
                                if (!l) {
                                    var e = i.elements,
                                        t = e.reference,
                                        r = e.popper;
                                    if (B(t, r)) {
                                        i.rects = {
                                            reference: b(t, T(r), "fixed" === i.options.strategy),
                                            popper: w(r)
                                        }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach((function(e) {
                                            return i.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var n = 0; n < i.orderedModifiers.length; n++)
                                            if (!0 !== i.reset) {
                                                var o = i.orderedModifiers[n],
                                                    a = o.fn,
                                                    s = o.options,
                                                    d = void 0 === s ? {} : s,
                                                    u = o.name;
                                                "function" === typeof a && (i = a({
                                                    state: i,
                                                    options: d,
                                                    name: u,
                                                    instance: c
                                                }) || i)
                                            } else i.reset = !1, n = -1
                                    }
                                }
                            },
                            update: z((function() {
                                return new Promise((function(e) {
                                    c.forceUpdate(), e(i)
                                }))
                            })),
                            destroy: function() {
                                d(), l = !0
                            }
                        };
                    if (!B(e, t)) return c;

                    function d() {
                        s.forEach((function(e) {
                            return e()
                        })), s = []
                    }
                    return c.setOptions(r).then((function(e) {
                        !l && r.onFirstUpdate && r.onFirstUpdate(e)
                    })), c
                }
            }
            var K = {
                passive: !0
            };

            function U(e) {
                return e.split("-")[0]
            }

            function J(e) {
                return e.split("-")[1]
            }

            function G(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function q(e) {
                var t, r = e.reference,
                    n = e.element,
                    o = e.placement,
                    i = o ? U(o) : null,
                    a = o ? J(o) : null,
                    s = r.x + r.width / 2 - n.width / 2,
                    l = r.y + r.height / 2 - n.height / 2;
                switch (i) {
                    case _:
                        t = {
                            x: s,
                            y: r.y - n.height
                        };
                        break;
                    case O:
                        t = {
                            x: s,
                            y: r.y + r.height
                        };
                        break;
                    case A:
                        t = {
                            x: r.x + r.width,
                            y: l
                        };
                        break;
                    case k:
                        t = {
                            x: r.x - n.width,
                            y: l
                        };
                        break;
                    default:
                        t = {
                            x: r.x,
                            y: r.y
                        }
                }
                var c = i ? G(i) : null;
                if (null != c) {
                    var d = "y" === c ? "height" : "width";
                    switch (a) {
                        case Z:
                            t[c] = t[c] - (r[d] / 2 - n[d] / 2);
                            break;
                        case I:
                            t[c] = t[c] + (r[d] / 2 - n[d] / 2)
                    }
                }
                return t
            }
            var V = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function X(e) {
                var t, r = e.popper,
                    o = e.popperRect,
                    i = e.placement,
                    a = e.variation,
                    s = e.offsets,
                    l = e.position,
                    d = e.gpuAcceleration,
                    u = e.adaptive,
                    p = e.roundOffsets,
                    f = e.isFixed,
                    h = s.x,
                    v = void 0 === h ? 0 : h,
                    y = s.y,
                    b = void 0 === y ? 0 : y,
                    w = "function" === typeof p ? p({
                        x: v,
                        y: b
                    }) : {
                        x: v,
                        y: b
                    };
                v = w.x, b = w.y;
                var S = s.hasOwnProperty("x"),
                    E = s.hasOwnProperty("y"),
                    x = k,
                    C = _,
                    P = window;
                if (u) {
                    var M = T(r),
                        R = "clientHeight",
                        Z = "clientWidth";
                    if (M === n(r) && "static" !== g(M = m(r)).position && "absolute" === l && (R = "scrollHeight", Z = "scrollWidth"), i === _ || (i === k || i === A) && a === I) C = O, b -= (f && M === P && P.visualViewport ? P.visualViewport.height : M[R]) - o.height, b *= d ? 1 : -1;
                    if (i === k || (i === _ || i === O) && a === I) x = A, v -= (f && M === P && P.visualViewport ? P.visualViewport.width : M[Z]) - o.width, v *= d ? 1 : -1
                }
                var j, H = Object.assign({
                        position: l
                    }, u && V),
                    L = !0 === p ? function(e, t) {
                        var r = e.x,
                            n = e.y,
                            o = t.devicePixelRatio || 1;
                        return {
                            x: c(r * o) / o || 0,
                            y: c(n * o) / o || 0
                        }
                    }({
                        x: v,
                        y: b
                    }, n(r)) : {
                        x: v,
                        y: b
                    };
                return v = L.x, b = L.y, d ? Object.assign({}, H, ((j = {})[C] = E ? "0" : "", j[x] = S ? "0" : "", j.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + b + "px)" : "translate3d(" + v + "px, " + b + "px, 0)", j)) : Object.assign({}, H, ((t = {})[C] = E ? b + "px" : "", t[x] = S ? v + "px" : "", t.transform = "", t))
            }
            var Y = {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(e) {
                        var t = e.state,
                            r = e.options,
                            n = e.name,
                            o = r.offset,
                            i = void 0 === o ? [0, 0] : o,
                            a = D.reduce((function(e, r) {
                                return e[r] = function(e, t, r) {
                                    var n = U(e),
                                        o = [k, _].indexOf(n) >= 0 ? -1 : 1,
                                        i = "function" === typeof r ? r(Object.assign({}, t, {
                                            placement: e
                                        })) : r,
                                        a = i[0],
                                        s = i[1];
                                    return a = a || 0, s = (s || 0) * o, [k, A].indexOf(n) >= 0 ? {
                                        x: s,
                                        y: a
                                    } : {
                                        x: a,
                                        y: s
                                    }
                                }(r, t.rects, i), e
                            }), {}),
                            s = a[t.placement],
                            l = s.x,
                            c = s.y;
                        null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = a
                    }
                },
                Q = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

            function ee(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return Q[e]
                }))
            }
            var te = {
                start: "end",
                end: "start"
            };

            function re(e) {
                return e.replace(/start|end/g, (function(e) {
                    return te[e]
                }))
            }

            function ne(e, t) {
                var r = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (r && a(r)) {
                    var n = t;
                    do {
                        if (n && e.isSameNode(n)) return !0;
                        n = n.parentNode || n.host
                    } while (n)
                }
                return !1
            }

            function oe(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function ie(e, t, r) {
                return t === j ? oe(function(e, t) {
                    var r = n(e),
                        o = m(e),
                        i = r.visualViewport,
                        a = o.clientWidth,
                        s = o.clientHeight,
                        l = 0,
                        c = 0;
                    if (i) {
                        a = i.width, s = i.height;
                        var d = u();
                        (d || !d && "fixed" === t) && (l = i.offsetLeft, c = i.offsetTop)
                    }
                    return {
                        width: a,
                        height: s,
                        x: l + v(e),
                        y: c
                    }
                }(e, r)) : o(t) ? function(e, t) {
                    var r = p(e, !1, "fixed" === t);
                    return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r
                }(t, r) : oe(function(e) {
                    var t, r = m(e),
                        n = f(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        i = s(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        a = s(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        l = -n.scrollLeft + v(e),
                        c = -n.scrollTop;
                    return "rtl" === g(o || r).direction && (l += s(r.clientWidth, o ? o.clientWidth : 0) - i), {
                        width: i,
                        height: a,
                        x: l,
                        y: c
                    }
                }(m(e)))
            }

            function ae(e, t, r, n) {
                var a = "clippingParents" === t ? function(e) {
                        var t = x(S(e)),
                            r = ["absolute", "fixed"].indexOf(g(e).position) >= 0 && i(e) ? T(e) : e;
                        return o(r) ? t.filter((function(e) {
                            return o(e) && ne(e, r) && "body" !== h(e)
                        })) : []
                    }(e) : [].concat(t),
                    c = [].concat(a, [r]),
                    d = c[0],
                    u = c.reduce((function(t, r) {
                        var o = ie(e, r, n);
                        return t.top = s(o.top, t.top), t.right = l(o.right, t.right), t.bottom = l(o.bottom, t.bottom), t.left = s(o.left, t.left), t
                    }), ie(e, d, n));
                return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u
            }

            function se(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function le(e, t) {
                return t.reduce((function(t, r) {
                    return t[r] = e, t
                }), {})
            }

            function ce(e, t) {
                void 0 === t && (t = {});
                var r = t,
                    n = r.placement,
                    i = void 0 === n ? e.placement : n,
                    a = r.strategy,
                    s = void 0 === a ? e.strategy : a,
                    l = r.boundary,
                    c = void 0 === l ? "clippingParents" : l,
                    d = r.rootBoundary,
                    u = void 0 === d ? j : d,
                    f = r.elementContext,
                    h = void 0 === f ? H : f,
                    v = r.altBoundary,
                    g = void 0 !== v && v,
                    y = r.padding,
                    b = void 0 === y ? 0 : y,
                    w = se("number" !== typeof b ? b : le(b, R)),
                    S = h === H ? "reference" : H,
                    E = e.rects.popper,
                    x = e.elements[g ? S : h],
                    C = ae(o(x) ? x : x.contextElement || m(e.elements.popper), c, u, s),
                    P = p(e.elements.reference),
                    T = q({
                        reference: P,
                        element: E,
                        strategy: "absolute",
                        placement: i
                    }),
                    k = oe(Object.assign({}, E, T)),
                    M = h === H ? k : P,
                    Z = {
                        top: C.top - M.top + w.top,
                        bottom: M.bottom - C.bottom + w.bottom,
                        left: C.left - M.left + w.left,
                        right: M.right - C.right + w.right
                    },
                    I = e.modifiersData.offset;
                if (h === H && I) {
                    var L = I[i];
                    Object.keys(Z).forEach((function(e) {
                        var t = [A, O].indexOf(e) >= 0 ? 1 : -1,
                            r = [_, O].indexOf(e) >= 0 ? "y" : "x";
                        Z[e] += L[r] * t
                    }))
                }
                return Z
            }

            function de(e, t, r) {
                return s(e, l(t, r))
            }
            var ue = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        r = e.options,
                        n = e.name,
                        o = r.mainAxis,
                        i = void 0 === o || o,
                        a = r.altAxis,
                        c = void 0 !== a && a,
                        d = r.boundary,
                        u = r.rootBoundary,
                        p = r.altBoundary,
                        f = r.padding,
                        h = r.tether,
                        m = void 0 === h || h,
                        v = r.tetherOffset,
                        g = void 0 === v ? 0 : v,
                        y = ce(t, {
                            boundary: d,
                            rootBoundary: u,
                            padding: f,
                            altBoundary: p
                        }),
                        b = U(t.placement),
                        S = J(t.placement),
                        E = !S,
                        x = G(b),
                        C = "x" === x ? "y" : "x",
                        P = t.modifiersData.popperOffsets,
                        M = t.rects.reference,
                        R = t.rects.popper,
                        I = "function" === typeof g ? g(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : g,
                        j = "number" === typeof I ? {
                            mainAxis: I,
                            altAxis: I
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, I),
                        H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                        L = {
                            x: 0,
                            y: 0
                        };
                    if (P) {
                        if (i) {
                            var D, $ = "y" === x ? _ : k,
                                W = "y" === x ? O : A,
                                z = "y" === x ? "height" : "width",
                                N = P[x],
                                B = N + y[$],
                                F = N - y[W],
                                K = m ? -R[z] / 2 : 0,
                                q = S === Z ? M[z] : R[z],
                                V = S === Z ? -R[z] : -M[z],
                                X = t.elements.arrow,
                                Y = m && X ? w(X) : {
                                    width: 0,
                                    height: 0
                                },
                                Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                ee = Q[$],
                                te = Q[W],
                                re = de(0, M[z], Y[z]),
                                ne = E ? M[z] / 2 - K - re - ee - j.mainAxis : q - re - ee - j.mainAxis,
                                oe = E ? -M[z] / 2 + K + re + te + j.mainAxis : V + re + te + j.mainAxis,
                                ie = t.elements.arrow && T(t.elements.arrow),
                                ae = ie ? "y" === x ? ie.clientTop || 0 : ie.clientLeft || 0 : 0,
                                se = null != (D = null == H ? void 0 : H[x]) ? D : 0,
                                le = N + oe - se,
                                ue = de(m ? l(B, N + ne - se - ae) : B, N, m ? s(F, le) : F);
                            P[x] = ue, L[x] = ue - N
                        }
                        if (c) {
                            var pe, fe = "x" === x ? _ : k,
                                he = "x" === x ? O : A,
                                me = P[C],
                                ve = "y" === C ? "height" : "width",
                                ge = me + y[fe],
                                ye = me - y[he],
                                be = -1 !== [_, k].indexOf(b),
                                we = null != (pe = null == H ? void 0 : H[C]) ? pe : 0,
                                Se = be ? ge : me - M[ve] - R[ve] - we + j.altAxis,
                                Ee = be ? me + M[ve] + R[ve] - we - j.altAxis : ye,
                                xe = m && be ? function(e, t, r) {
                                    var n = de(e, t, r);
                                    return n > r ? r : n
                                }(Se, me, Ee) : de(m ? Se : ge, me, m ? Ee : ye);
                            P[C] = xe, L[C] = xe - me
                        }
                        t.modifiersData[n] = L
                    }
                },
                requiresIfExists: ["offset"]
            };
            var pe = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, r = e.state,
                        n = e.name,
                        o = e.options,
                        i = r.elements.arrow,
                        a = r.modifiersData.popperOffsets,
                        s = U(r.placement),
                        l = G(s),
                        c = [k, A].indexOf(s) >= 0 ? "height" : "width";
                    if (i && a) {
                        var d = function(e, t) {
                                return se("number" !== typeof(e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : e) ? e : le(e, R))
                            }(o.padding, r),
                            u = w(i),
                            p = "y" === l ? _ : k,
                            f = "y" === l ? O : A,
                            h = r.rects.reference[c] + r.rects.reference[l] - a[l] - r.rects.popper[c],
                            m = a[l] - r.rects.reference[l],
                            v = T(i),
                            g = v ? "y" === l ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
                            y = h / 2 - m / 2,
                            b = d[p],
                            S = g - u[c] - d[f],
                            E = g / 2 - u[c] / 2 + y,
                            x = de(b, E, S),
                            C = l;
                        r.modifiersData[n] = ((t = {})[C] = x, t.centerOffset = x - E, t)
                    }
                },
                effect: function(e) {
                    var t = e.state,
                        r = e.options.element,
                        n = void 0 === r ? "[data-popper-arrow]" : r;
                    null != n && ("string" !== typeof n || (n = t.elements.popper.querySelector(n))) && ne(t.elements.popper, n) && (t.elements.arrow = n)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function fe(e, t, r) {
                return void 0 === r && (r = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - r.y,
                    right: e.right - t.width + r.x,
                    bottom: e.bottom - t.height + r.y,
                    left: e.left - t.width - r.x
                }
            }

            function he(e) {
                return [_, A, O, k].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var me = F({
                defaultModifiers: [{
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(e) {
                        var t = e.state,
                            r = e.instance,
                            o = e.options,
                            i = o.scroll,
                            a = void 0 === i || i,
                            s = o.resize,
                            l = void 0 === s || s,
                            c = n(t.elements.popper),
                            d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return a && d.forEach((function(e) {
                                e.addEventListener("scroll", r.update, K)
                            })), l && c.addEventListener("resize", r.update, K),
                            function() {
                                a && d.forEach((function(e) {
                                    e.removeEventListener("scroll", r.update, K)
                                })), l && c.removeEventListener("resize", r.update, K)
                            }
                    },
                    data: {}
                }, {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state,
                            r = e.name;
                        t.modifiersData[r] = q({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                }, {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(e) {
                        var t = e.state,
                            r = e.options,
                            n = r.gpuAcceleration,
                            o = void 0 === n || n,
                            i = r.adaptive,
                            a = void 0 === i || i,
                            s = r.roundOffsets,
                            l = void 0 === s || s,
                            c = {
                                placement: U(t.placement),
                                variation: J(t.placement),
                                popper: t.elements.popper,
                                popperRect: t.rects.popper,
                                gpuAcceleration: o,
                                isFixed: "fixed" === t.options.strategy
                            };
                        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, X(Object.assign({}, c, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: a,
                            roundOffsets: l
                        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, X(Object.assign({}, c, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: l
                        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-placement": t.placement
                        })
                    },
                    data: {}
                }, {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(e) {
                        var t = e.state;
                        Object.keys(t.elements).forEach((function(e) {
                            var r = t.styles[e] || {},
                                n = t.attributes[e] || {},
                                o = t.elements[e];
                            i(o) && h(o) && (Object.assign(o.style, r), Object.keys(n).forEach((function(e) {
                                var t = n[e];
                                !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                            })))
                        }))
                    },
                    effect: function(e) {
                        var t = e.state,
                            r = {
                                popper: {
                                    position: t.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
                            function() {
                                Object.keys(t.elements).forEach((function(e) {
                                    var n = t.elements[e],
                                        o = t.attributes[e] || {},
                                        a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce((function(e, t) {
                                            return e[t] = "", e
                                        }), {});
                                    i(n) && h(n) && (Object.assign(n.style, a), Object.keys(o).forEach((function(e) {
                                        n.removeAttribute(e)
                                    })))
                                }))
                            }
                    },
                    requires: ["computeStyles"]
                }, Y, {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            r = e.options,
                            n = e.name;
                        if (!t.modifiersData[n]._skip) {
                            for (var o = r.mainAxis, i = void 0 === o || o, a = r.altAxis, s = void 0 === a || a, l = r.fallbackPlacements, c = r.padding, d = r.boundary, u = r.rootBoundary, p = r.altBoundary, f = r.flipVariations, h = void 0 === f || f, m = r.allowedAutoPlacements, v = t.options.placement, g = U(v), y = l || (g === v || !h ? [ee(v)] : function(e) {
                                    if (U(e) === M) return [];
                                    var t = ee(e);
                                    return [re(e), t, re(t)]
                                }(v)), b = [v].concat(y).reduce((function(e, r) {
                                    return e.concat(U(r) === M ? function(e, t) {
                                        void 0 === t && (t = {});
                                        var r = t,
                                            n = r.placement,
                                            o = r.boundary,
                                            i = r.rootBoundary,
                                            a = r.padding,
                                            s = r.flipVariations,
                                            l = r.allowedAutoPlacements,
                                            c = void 0 === l ? D : l,
                                            d = J(n),
                                            u = d ? s ? L : L.filter((function(e) {
                                                return J(e) === d
                                            })) : R,
                                            p = u.filter((function(e) {
                                                return c.indexOf(e) >= 0
                                            }));
                                        0 === p.length && (p = u);
                                        var f = p.reduce((function(t, r) {
                                            return t[r] = ce(e, {
                                                placement: r,
                                                boundary: o,
                                                rootBoundary: i,
                                                padding: a
                                            })[U(r)], t
                                        }), {});
                                        return Object.keys(f).sort((function(e, t) {
                                            return f[e] - f[t]
                                        }))
                                    }(t, {
                                        placement: r,
                                        boundary: d,
                                        rootBoundary: u,
                                        padding: c,
                                        flipVariations: h,
                                        allowedAutoPlacements: m
                                    }) : r)
                                }), []), w = t.rects.reference, S = t.rects.popper, E = new Map, x = !0, C = b[0], P = 0; P < b.length; P++) {
                                var T = b[P],
                                    I = U(T),
                                    j = J(T) === Z,
                                    H = [_, O].indexOf(I) >= 0,
                                    $ = H ? "width" : "height",
                                    W = ce(t, {
                                        placement: T,
                                        boundary: d,
                                        rootBoundary: u,
                                        altBoundary: p,
                                        padding: c
                                    }),
                                    z = H ? j ? A : k : j ? O : _;
                                w[$] > S[$] && (z = ee(z));
                                var N = ee(z),
                                    B = [];
                                if (i && B.push(W[I] <= 0), s && B.push(W[z] <= 0, W[N] <= 0), B.every((function(e) {
                                        return e
                                    }))) {
                                    C = T, x = !1;
                                    break
                                }
                                E.set(T, B)
                            }
                            if (x)
                                for (var F = function(e) {
                                        var t = b.find((function(t) {
                                            var r = E.get(t);
                                            if (r) return r.slice(0, e).every((function(e) {
                                                return e
                                            }))
                                        }));
                                        if (t) return C = t, "break"
                                    }, K = h ? 3 : 1; K > 0; K--) {
                                    if ("break" === F(K)) break
                                }
                            t.placement !== C && (t.modifiersData[n]._skip = !0, t.placement = C, t.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                }, ue, pe, {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(e) {
                        var t = e.state,
                            r = e.name,
                            n = t.rects.reference,
                            o = t.rects.popper,
                            i = t.modifiersData.preventOverflow,
                            a = ce(t, {
                                elementContext: "reference"
                            }),
                            s = ce(t, {
                                altBoundary: !0
                            }),
                            l = fe(a, n),
                            c = fe(s, o, i),
                            d = he(l),
                            u = he(c);
                        t.modifiersData[r] = {
                            referenceClippingOffsets: l,
                            popperEscapeOffsets: c,
                            isReferenceHidden: d,
                            hasPopperEscaped: u
                        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-reference-hidden": d,
                            "data-popper-escaped": u
                        })
                    }
                }]
            })
        },
        8679: function(e, t, r) {
            var n = r(21296),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                a = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                s = {};

            function l(e) {
                return n.isMemo(e) ? a : s[e.$$typeof] || o
            }
            s[n.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, s[n.Memo] = a;
            var c = Object.defineProperty,
                d = Object.getOwnPropertyNames,
                u = Object.getOwnPropertySymbols,
                p = Object.getOwnPropertyDescriptor,
                f = Object.getPrototypeOf,
                h = Object.prototype;
            e.exports = function e(t, r, n) {
                if ("string" !== typeof r) {
                    if (h) {
                        var o = f(r);
                        o && o !== h && e(t, o, n)
                    }
                    var a = d(r);
                    u && (a = a.concat(u(r)));
                    for (var s = l(t), m = l(r), v = 0; v < a.length; ++v) {
                        var g = a[v];
                        if (!i[g] && (!n || !n[g]) && (!m || !m[g]) && (!s || !s[g])) {
                            var y = p(r, g);
                            try {
                                c(t, g, y)
                            } catch (b) {}
                        }
                    }
                }
                return t
            }
        },
        96103: function(e, t) {
            var r = "function" === typeof Symbol && Symbol.for,
                n = r ? Symbol.for("react.element") : 60103,
                o = r ? Symbol.for("react.portal") : 60106,
                i = r ? Symbol.for("react.fragment") : 60107,
                a = r ? Symbol.for("react.strict_mode") : 60108,
                s = r ? Symbol.for("react.profiler") : 60114,
                l = r ? Symbol.for("react.provider") : 60109,
                c = r ? Symbol.for("react.context") : 60110,
                d = r ? Symbol.for("react.async_mode") : 60111,
                u = r ? Symbol.for("react.concurrent_mode") : 60111,
                p = r ? Symbol.for("react.forward_ref") : 60112,
                f = r ? Symbol.for("react.suspense") : 60113,
                h = r ? Symbol.for("react.suspense_list") : 60120,
                m = r ? Symbol.for("react.memo") : 60115,
                v = r ? Symbol.for("react.lazy") : 60116,
                g = r ? Symbol.for("react.block") : 60121,
                y = r ? Symbol.for("react.fundamental") : 60117,
                b = r ? Symbol.for("react.responder") : 60118,
                w = r ? Symbol.for("react.scope") : 60119;

            function S(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case d:
                                case u:
                                case i:
                                case s:
                                case a:
                                case f:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case c:
                                        case p:
                                        case v:
                                        case m:
                                        case l:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }

            function E(e) {
                return S(e) === u
            }
            t.AsyncMode = d, t.ConcurrentMode = u, t.ContextConsumer = c, t.ContextProvider = l, t.Element = n, t.ForwardRef = p, t.Fragment = i, t.Lazy = v, t.Memo = m, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = f, t.isAsyncMode = function(e) {
                return E(e) || S(e) === d
            }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
                return S(e) === c
            }, t.isContextProvider = function(e) {
                return S(e) === l
            }, t.isElement = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }, t.isForwardRef = function(e) {
                return S(e) === p
            }, t.isFragment = function(e) {
                return S(e) === i
            }, t.isLazy = function(e) {
                return S(e) === v
            }, t.isMemo = function(e) {
                return S(e) === m
            }, t.isPortal = function(e) {
                return S(e) === o
            }, t.isProfiler = function(e) {
                return S(e) === s
            }, t.isStrictMode = function(e) {
                return S(e) === a
            }, t.isSuspense = function(e) {
                return S(e) === f
            }, t.isValidElementType = function(e) {
                return "string" === typeof e || "function" === typeof e || e === i || e === u || e === s || e === a || e === f || e === h || "object" === typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === y || e.$$typeof === b || e.$$typeof === w || e.$$typeof === g)
            }, t.typeOf = S
        },
        21296: function(e, t, r) {
            e.exports = r(96103)
        },
        63144: function(e) {
            var t = self.fetch.bind(self);
            e.exports = t, e.exports.default = e.exports
        },
        66409: function(e, t, r) {
            var n = r(67294),
                o = function() {
                    return o = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, o.apply(this, arguments)
                },
                i = function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                    }
                    return r
                },
                a = !1,
                s = (0, n.forwardRef)((function(e, t) {
                    var r = e.style,
                        s = i(e, ["style"]),
                        d = function() {
                            var e = (0, n.useState)(l),
                                t = e[0],
                                r = e[1],
                                o = function() {
                                    var e = (0, n.useState)(!1),
                                        t = e[0],
                                        r = e[1];
                                    return (0, n.useEffect)((function() {
                                        c() && r(!0)
                                    }), []), t
                                }();
                            return (0, n.useEffect)((function() {
                                if (o) return window.addEventListener("resize", e),
                                    function() {
                                        return window.removeEventListener("resize", e)
                                    };

                                function e() {
                                    var e = l();
                                    r(e)
                                }
                            }), [o]), o ? t : null
                        }();
                    !a && (null === r || void 0 === r ? void 0 : r.height) && (a = !0, console.warn("<Div100vh /> overrides the height property of the style prop"));
                    var u = o(o({}, r), {
                        height: d ? d + "px" : "100vh"
                    });
                    return n.createElement("div", o({
                        ref: t,
                        style: u
                    }, s))
                }));

            function l() {
                return c() ? window.innerHeight : null
            }

            function c() {
                return "undefined" !== typeof window && "undefined" !== typeof document
            }
            s.displayName = "Div100vh", t.ZP = s
        },
        19231: function(e, t, r) {
            t.NM = void 0;
            var n = i(r(77095));
            n.default;
            var o = i(r(32659));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.NM = o.default;
            n.default
        },
        61319: function(e, t) {
            t.__esModule = !0, t.noop = t.defaultProps = t.defaultOptions = t.defaultConfig = void 0;
            t.defaultOptions = {};
            t.defaultConfig = {
                disconnectOnLeave: !1
            };
            var r = () => {};
            t.noop = r;
            var n = {
                onEnterViewport: r,
                onLeaveViewport: r
            };
            t.defaultProps = n
        },
        77095: function(e, t, r) {
            t.__esModule = !0, t.default = void 0;
            var n = r(67294),
                o = c(r(8679)),
                i = c(r(32659)),
                a = r(61319),
                s = r(85893),
                l = ["onEnterViewport", "onLeaveViewport"];

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function d() {
                return d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, d.apply(this, arguments)
            }
            var u = function(e, t, r) {
                void 0 === t && (t = a.defaultOptions), void 0 === r && (r = a.defaultConfig);
                var c = (0, n.forwardRef)(((t, r) => {
                    var n, o = d({
                        forwardedRef: r
                    }, (n = e).prototype && n.prototype.isReactComponent && !(e => "function" === typeof e && !(e.prototype && e.prototype.render))(e) ? {
                        ref: r
                    } : {});
                    return (0, s.jsx)(e, d({}, t, o))
                }));

                function u(e) {
                    var {
                        onEnterViewport: o = a.noop,
                        onLeaveViewport: u = a.noop
                    } = e, p = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o
                    }(e, l), f = (0, n.useRef)(), {
                        inViewport: h,
                        enterCount: m,
                        leaveCount: v
                    } = (0, i.default)(f, t, r, {
                        onEnterViewport: o,
                        onLeaveViewport: u
                    }), g = d({}, p, {
                        inViewport: h,
                        enterCount: m,
                        leaveCount: v
                    });
                    return (0, s.jsx)(c, d({}, g, {
                        ref: f
                    }))
                }
                var p = e.displayName || e.name || "Component";
                return u.displayName = "handleViewport(" + p + ")", (0, o.default)(u, c)
            };
            t.default = u
        },
        32659: function(e, t, r) {
            t.__esModule = !0, t.default = void 0;
            var n = r(67294),
                o = r(73935),
                i = r(61319),
                a = function(e, t, r, a) {
                    void 0 === t && (t = i.defaultOptions), void 0 === r && (r = i.defaultConfig), void 0 === a && (a = i.defaultProps);
                    var {
                        onEnterViewport: s,
                        onLeaveViewport: l
                    } = a, [, c] = (0, n.useState)(), d = (0, n.useRef)(), u = (0, n.useRef)(!1), p = (0, n.useRef)(!1), f = (0, n.useRef)(0), h = (0, n.useRef)(0);

                    function m(e) {
                        var t = e[0] || {},
                            {
                                isIntersecting: n,
                                intersectionRatio: o
                            } = t,
                            i = "undefined" !== typeof n ? n : o > 0;
                        if (!p.current && i) return p.current = !0, null == s || s(), f.current += 1, u.current = i, void c(i);
                        p.current && !i && (p.current = !1, null == l || l(), r.disconnectOnLeave && d.current && d.current.disconnect(), h.current += 1, u.current = i, c(i))
                    }
                    return (0, n.useEffect)((() => {
                        var r = d.current;
                        return function(t) {
                            var {
                                observerRef: r
                            } = t, n = e.current;
                            if (n) {
                                var i = (0, o.findDOMNode)(n);
                                i && (null == r || r.observe(i))
                            }
                        }({
                            observerRef: r = function(e) {
                                var {
                                    observerRef: r
                                } = e;
                                return r || (d.current = new IntersectionObserver(m, t), d.current)
                            }({
                                observerRef: r
                            })
                        }), () => {
                            ! function(t) {
                                var {
                                    observerRef: r
                                } = t, n = e.current;
                                if (n) {
                                    var i = (0, o.findDOMNode)(n);
                                    i && (null == r || r.unobserve(i))
                                }
                                null == r || r.disconnect(), d.current = null
                            }({
                                observerRef: r
                            })
                        }
                    }), [e.current, t, r, s, l]), {
                        inViewport: u.current,
                        enterCount: f.current,
                        leaveCount: h.current
                    }
                };
            t.default = a
        },
        69921: function(e, t) {
            var r, n = Symbol.for("react.element"),
                o = Symbol.for("react.portal"),
                i = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"),
                s = Symbol.for("react.profiler"),
                l = Symbol.for("react.provider"),
                c = Symbol.for("react.context"),
                d = Symbol.for("react.server_context"),
                u = Symbol.for("react.forward_ref"),
                p = Symbol.for("react.suspense"),
                f = Symbol.for("react.suspense_list"),
                h = Symbol.for("react.memo"),
                m = Symbol.for("react.lazy"),
                v = Symbol.for("react.offscreen");

            function g(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case i:
                                case s:
                                case a:
                                case p:
                                case f:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case d:
                                        case c:
                                        case u:
                                        case m:
                                        case h:
                                        case l:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }
            r = Symbol.for("react.module.reference")
        },
        59864: function(e, t, r) {
            r(69921)
        },
        90844: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return f
                }
            });
            var n = r(43992),
                o = r(23285);
            var i = r(28673),
                a = r(67294),
                s = r(220);

            function l(e, t) {
                var r = Object.create(null);
                return e && a.Children.map(e, (function(e) {
                    return e
                })).forEach((function(e) {
                    r[e.key] = function(e) {
                        return t && (0, a.isValidElement)(e) ? t(e) : e
                    }(e)
                })), r
            }

            function c(e, t, r) {
                return null != r[t] ? r[t] : e.props[t]
            }

            function d(e, t, r) {
                var n = l(e.children),
                    o = function(e, t) {
                        function r(r) {
                            return r in t ? t[r] : e[r]
                        }
                        e = e || {}, t = t || {};
                        var n, o = Object.create(null),
                            i = [];
                        for (var a in e) a in t ? i.length && (o[a] = i, i = []) : i.push(a);
                        var s = {};
                        for (var l in t) {
                            if (o[l])
                                for (n = 0; n < o[l].length; n++) {
                                    var c = o[l][n];
                                    s[o[l][n]] = r(c)
                                }
                            s[l] = r(l)
                        }
                        for (n = 0; n < i.length; n++) s[i[n]] = r(i[n]);
                        return s
                    }(t, n);
                return Object.keys(o).forEach((function(i) {
                    var s = o[i];
                    if ((0, a.isValidElement)(s)) {
                        var l = i in t,
                            d = i in n,
                            u = t[i],
                            p = (0, a.isValidElement)(u) && !u.props.in;
                        !d || l && !p ? d || !l || p ? d && l && (0, a.isValidElement)(u) && (o[i] = (0, a.cloneElement)(s, {
                            onExited: r.bind(null, s),
                            in: u.props.in,
                            exit: c(s, "exit", e),
                            enter: c(s, "enter", e)
                        })) : o[i] = (0, a.cloneElement)(s, { in: !1
                        }) : o[i] = (0, a.cloneElement)(s, {
                            onExited: r.bind(null, s),
                            in: !0,
                            exit: c(s, "exit", e),
                            enter: c(s, "enter", e)
                        })
                    }
                })), o
            }
            var u = Object.values || function(e) {
                    return Object.keys(e).map((function(t) {
                        return e[t]
                    }))
                },
                p = function(e) {
                    function t(t, r) {
                        var n, o = (n = e.call(this, t, r) || this).handleExited.bind(function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(n));
                        return n.state = {
                            contextValue: {
                                isMounting: !0
                            },
                            handleExited: o,
                            firstRender: !0
                        }, n
                    }(0, i.Z)(t, e);
                    var r = t.prototype;
                    return r.componentDidMount = function() {
                        this.mounted = !0, this.setState({
                            contextValue: {
                                isMounting: !1
                            }
                        })
                    }, r.componentWillUnmount = function() {
                        this.mounted = !1
                    }, t.getDerivedStateFromProps = function(e, t) {
                        var r, n, o = t.children,
                            i = t.handleExited;
                        return {
                            children: t.firstRender ? (r = e, n = i, l(r.children, (function(e) {
                                return (0, a.cloneElement)(e, {
                                    onExited: n.bind(null, e),
                                    in: !0,
                                    appear: c(e, "appear", r),
                                    enter: c(e, "enter", r),
                                    exit: c(e, "exit", r)
                                })
                            }))) : d(e, o, i),
                            firstRender: !1
                        }
                    }, r.handleExited = function(e, t) {
                        var r = l(this.props.children);
                        e.key in r || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function(t) {
                            var r = (0, o.Z)({}, t.children);
                            return delete r[e.key], {
                                children: r
                            }
                        })))
                    }, r.render = function() {
                        var e = this.props,
                            t = e.component,
                            r = e.childFactory,
                            o = (0, n.Z)(e, ["component", "childFactory"]),
                            i = this.state.contextValue,
                            l = u(this.state.children).map(r);
                        return delete o.appear, delete o.enter, delete o.exit, null === t ? a.createElement(s.Z.Provider, {
                            value: i
                        }, l) : a.createElement(s.Z.Provider, {
                            value: i
                        }, a.createElement(t, o, l))
                    }, t
                }(a.Component);
            p.propTypes = {}, p.defaultProps = {
                component: "div",
                childFactory: function(e) {
                    return e
                }
            };
            var f = p
        },
        8422: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.B2BClient = void 0;
            var n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var r = h(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                        }
                    n.default = e, r && r.set(e, n);
                    return n
                }(r(19916)),
                o = r(83846),
                i = r(38484),
                a = r(72718),
                s = r(1811),
                l = r(40113),
                c = r(66672),
                d = r(8582),
                u = r(59223),
                p = r(55816),
                f = r(94824);

            function h(e) {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (h = function(e) {
                    return e ? r : t
                })(e)
            }
            class m extends o.BaseClient {
                constructor(e) {
                    super(e), this.jwtConfig = {
                        projectID: e.project_id,
                        jwks: n.createRemoteJWKSet(new URL(`/v1/sessions/jwks/${e.project_id}`, this.fetchConfig.baseURL))
                    }, this.discovery = new i.Discovery(this.fetchConfig), this.m2m = new a.M2M(this.fetchConfig, this.jwtConfig), this.magicLinks = new s.MagicLinks(this.fetchConfig), this.oauth = new l.OAuth(this.fetchConfig), this.otps = new d.OTPs(this.fetchConfig), this.organizations = new c.Organizations(this.fetchConfig), this.passwords = new u.Passwords(this.fetchConfig), this.sso = new f.SSO(this.fetchConfig), this.sessions = new p.Sessions(this.fetchConfig, this.jwtConfig)
                }
            }
            t.B2BClient = m
        },
        38484: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Discovery = void 0;
            var n = r(57751),
                o = r(57414);
            t.Discovery = class {
                constructor(e) {
                    this.fetchConfig = e, this.intermediateSessions = new n.IntermediateSessions(this.fetchConfig), this.organizations = new o.Organizations(this.fetchConfig)
                }
            }
        },
        57751: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IntermediateSessions = void 0;
            var n = r(69022);
            t.IntermediateSessions = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                exchange(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/discovery/intermediate_sessions/exchange",
                        data: e
                    })
                }
            }
        },
        57414: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Organizations = void 0;
            var n = r(69022);
            t.Organizations = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                create(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/discovery/organizations/create",
                        data: e
                    })
                }
                list(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/discovery/organizations",
                        data: e
                    })
                }
            }
        },
        71586: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        1811: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MagicLinks = void 0;
            var n = r(54034),
                o = r(16443),
                i = r(69022);
            t.MagicLinks = class {
                constructor(e) {
                    this.fetchConfig = e, this.email = new o.Email(this.fetchConfig), this.discovery = new n.Discovery(this.fetchConfig)
                }
                authenticate(e) {
                    return (0, i.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/magic_links/authenticate",
                        data: e
                    })
                }
            }
        },
        54034: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Discovery = void 0;
            var n = r(69022);
            t.Discovery = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                authenticate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/magic_links/discovery/authenticate",
                        data: e
                    })
                }
            }
        },
        16443: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Email = void 0;
            var n = r(88670),
                o = r(69022);
            t.Email = class {
                constructor(e) {
                    this.fetchConfig = e, this.discovery = new n.Discovery(this.fetchConfig)
                }
                loginOrSignup(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/magic_links/email/login_or_signup",
                        data: e
                    })
                }
                invite(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/magic_links/email/invite",
                        data: e
                    })
                }
            }
        },
        88670: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Discovery = void 0;
            var n = r(69022);
            t.Discovery = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                send(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/magic_links/email/discovery/send",
                        data: e
                    })
                }
            }
        },
        40113: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OAuth = void 0;
            var n = r(10837),
                o = r(69022);
            t.OAuth = class {
                constructor(e) {
                    this.fetchConfig = e, this.discovery = new n.Discovery(this.fetchConfig)
                }
                authenticate(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/oauth/authenticate",
                        data: e
                    })
                }
            }
        },
        10837: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Discovery = void 0;
            var n = r(69022);
            t.Discovery = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                authenticate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/oauth/discovery/authenticate",
                        data: e
                    })
                }
            }
        },
        66672: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Organizations = void 0;
            var n = r(83186),
                o = r(69022);
            t.Organizations = class {
                constructor(e) {
                    this.fetchConfig = e, this.members = new n.Members(this.fetchConfig)
                }
                create(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/organizations",
                        data: e
                    })
                }
                get(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "GET",
                        url: `/v1/b2b/organizations/${e.organization_id}`,
                        params: {}
                    })
                }
                update(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "PUT",
                        url: `/v1/b2b/organizations/${e.organization_id}`,
                        data: {
                            organization_name: e.organization_name,
                            organization_slug: e.organization_slug,
                            organization_logo_url: e.organization_logo_url,
                            trusted_metadata: e.trusted_metadata,
                            sso_default_connection_id: e.sso_default_connection_id,
                            sso_jit_provisioning: e.sso_jit_provisioning,
                            sso_jit_provisioning_allowed_connections: e.sso_jit_provisioning_allowed_connections,
                            email_allowed_domains: e.email_allowed_domains,
                            email_jit_provisioning: e.email_jit_provisioning,
                            email_invites: e.email_invites,
                            auth_methods: e.auth_methods,
                            allowed_auth_methods: e.allowed_auth_methods,
                            mfa_policy: e.mfa_policy
                        }
                    })
                }
                delete(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/b2b/organizations/${e.organization_id}`,
                        data: {}
                    })
                }
                search(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/organizations/search",
                        data: e
                    })
                }
            }
        },
        83186: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Members = void 0;
            var n = r(69022);
            t.Members = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                update(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "PUT",
                        url: `/v1/b2b/organizations/${e.organization_id}/members/${e.member_id}`,
                        data: {
                            name: e.name,
                            trusted_metadata: e.trusted_metadata,
                            untrusted_metadata: e.untrusted_metadata,
                            is_breakglass: e.is_breakglass,
                            mfa_phone_number: e.mfa_phone_number,
                            mfa_enrolled: e.mfa_enrolled
                        }
                    })
                }
                delete(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/b2b/organizations/${e.organization_id}/members/${e.member_id}`,
                        data: {}
                    })
                }
                deleteMFAPhoneNumber(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/b2b/organizations/${e.organization_id}/members/mfa_phone_numbers/${e.member_id}`,
                        data: {}
                    })
                }
                search(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/organizations/members/search",
                        data: e
                    })
                }
                deletePassword(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/b2b/organizations/${e.organization_id}/members/passwords/${e.member_password_id}`,
                        data: {}
                    })
                }
                create(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: `/v1/b2b/organizations/${e.organization_id}/members`,
                        data: {
                            email_address: e.email_address,
                            name: e.name,
                            trusted_metadata: e.trusted_metadata,
                            untrusted_metadata: e.untrusted_metadata,
                            create_member_as_pending: e.create_member_as_pending,
                            is_breakglass: e.is_breakglass,
                            mfa_phone_number: e.mfa_phone_number,
                            mfa_enrolled: e.mfa_enrolled
                        }
                    })
                }
                get(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "GET",
                        url: `/v1/b2b/organizations/${e.organization_id}/member`,
                        params: { ...e
                        }
                    })
                }
            }
        },
        8582: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OTPs = void 0;
            var n = r(27853);
            t.OTPs = class {
                constructor(e) {
                    this.fetchConfig = e, this.sms = new n.Sms(this.fetchConfig)
                }
            }
        },
        27853: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Sms = void 0;
            var n = r(69022);
            t.Sms = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                send(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/otps/sms/send",
                        data: e
                    })
                }
                authenticate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/otps/sms/authenticate",
                        data: e
                    })
                }
            }
        },
        59223: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Passwords = void 0;
            var n = r(62405),
                o = r(66300),
                i = r(69022),
                a = r(33346);
            t.Passwords = class {
                constructor(e) {
                    this.fetchConfig = e, this.email = new n.Email(this.fetchConfig), this.sessions = new a.Sessions(this.fetchConfig), this.existingPassword = new o.ExistingPassword(this.fetchConfig)
                }
                strengthCheck(e) {
                    return (0, i.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/passwords/strength_check",
                        data: e
                    })
                }
                migrate(e) {
                    return (0, i.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/passwords/migrate",
                        data: e
                    })
                }
                authenticate(e) {
                    return (0, i.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/passwords/authenticate",
                        data: e
                    })
                }
            }
        },
        62405: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Email = void 0;
            var n = r(69022);
            t.Email = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                resetStart(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/passwords/email/reset/start",
                        data: e
                    })
                }
                reset(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/passwords/email/reset",
                        data: e
                    })
                }
            }
        },
        66300: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ExistingPassword = void 0;
            var n = r(69022);
            t.ExistingPassword = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                reset(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/passwords/existing_password/reset",
                        data: e
                    })
                }
            }
        },
        33346: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Sessions = void 0;
            var n = r(69022);
            t.Sessions = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                reset(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/passwords/session/reset",
                        data: e
                    })
                }
            }
        },
        55816: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Sessions = void 0;
            var n = r(69022),
                o = r(54901);
            t.Sessions = class {
                constructor(e, t) {
                    this.fetchConfig = e, this.jwksClient = t.jwks, this.jwtOptions = {
                        audience: t.projectID,
                        issuer: `stytch.com/${t.projectID}`,
                        typ: "JWT"
                    }
                }
                get(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "GET",
                        url: "/v1/b2b/sessions",
                        params: { ...e
                        }
                    })
                }
                authenticate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/sessions/authenticate",
                        data: e
                    })
                }
                revoke(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/sessions/revoke",
                        data: e
                    })
                }
                exchange(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/sessions/exchange",
                        data: e
                    })
                }
                getJWKS(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "GET",
                        url: `/v1/b2b/sessions/jwks/${e.project_id}`,
                        params: {}
                    })
                }
                async authenticateJwt(e, t) {
                    try {
                        return {
                            member_session: await this.authenticateJwtLocal(e, t),
                            session_jwt: e
                        }
                    } catch (r) {
                        return this.authenticate({
                            session_jwt: e
                        })
                    }
                }
                async authenticateJwtLocal(e, t) {
                    const r = await (0, o.authenticateSessionJwtLocal)(this.jwksClient, this.jwtOptions, e, t),
                        n = "https://stytch.com/organization",
                        {
                            [n]: i,
                            ...a
                        } = r.custom_claims,
                        s = i;
                    return {
                        member_session_id: r.session_id,
                        member_id: r.sub,
                        organization_id: s.organization_id,
                        authentication_factors: r.authentication_factors,
                        started_at: r.started_at,
                        last_accessed_at: r.last_accessed_at,
                        expires_at: r.expires_at,
                        custom_claims: a
                    }
                }
            }
        },
        94824: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SSO = void 0;
            var n = r(72589),
                o = r(69022),
                i = r(47727);
            t.SSO = class {
                constructor(e) {
                    this.fetchConfig = e, this.oidc = new n.OIDC(this.fetchConfig), this.saml = new i.SAML(this.fetchConfig)
                }
                getConnections(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "GET",
                        url: `/v1/b2b/sso/${e.organization_id}`,
                        params: {}
                    })
                }
                deleteConnection(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/b2b/sso/${e.organization_id}/connections/${e.connection_id}`,
                        data: {}
                    })
                }
                authenticate(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/b2b/sso/authenticate",
                        data: e
                    })
                }
            }
        },
        72589: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OIDC = void 0;
            var n = r(69022);
            t.OIDC = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                createConnection(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: `/v1/b2b/sso/oidc/${e.organization_id}`,
                        data: {
                            display_name: e.display_name
                        }
                    })
                }
                updateConnection(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "PUT",
                        url: `/v1/b2b/sso/oidc/${e.organization_id}/connections/${e.connection_id}`,
                        data: {
                            display_name: e.display_name,
                            client_id: e.client_id,
                            client_secret: e.client_secret,
                            issuer: e.issuer,
                            authorization_url: e.authorization_url,
                            token_url: e.token_url,
                            userinfo_url: e.userinfo_url,
                            jwks_url: e.jwks_url
                        }
                    })
                }
            }
        },
        47727: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SAML = void 0;
            var n = r(69022);
            t.SAML = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                createConnection(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: `/v1/b2b/sso/saml/${e.organization_id}`,
                        data: {
                            display_name: e.display_name
                        }
                    })
                }
                updateConnection(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "PUT",
                        url: `/v1/b2b/sso/saml/${e.organization_id}/connections/${e.connection_id}`,
                        data: {
                            idp_entity_id: e.idp_entity_id,
                            display_name: e.display_name,
                            attribute_mapping: e.attribute_mapping,
                            x509_certificate: e.x509_certificate,
                            idp_sso_url: e.idp_sso_url
                        }
                    })
                }
                deleteVerificationCertificate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/b2b/sso/saml/${e.organization_id}/connections/${e.connection_id}/verification_certificates/${e.certificate_id}`,
                        data: {}
                    })
                }
            }
        },
        33337: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Client = void 0;
            var n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var r = m(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                        }
                    n.default = e, r && r.set(e, n);
                    return n
                }(r(19916)),
                o = r(83846),
                i = r(70772),
                a = r(72718),
                s = r(8442),
                l = r(55400),
                c = r(53617),
                d = r(67218),
                u = r(6924),
                p = r(7426),
                f = r(8658),
                h = r(56001);

            function m(e) {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (m = function(e) {
                    return e ? r : t
                })(e)
            }
            class v extends o.BaseClient {
                constructor(e) {
                    super(e), this.jwtConfig = {
                        projectID: e.project_id,
                        jwks: n.createRemoteJWKSet(new URL(`/v1/sessions/jwks/${e.project_id}`, this.fetchConfig.baseURL))
                    }, this.cryptoWallets = new i.CryptoWallets(this.fetchConfig), this.m2m = new a.M2M(this.fetchConfig, this.jwtConfig), this.magicLinks = new s.MagicLinks(this.fetchConfig), this.oauth = new l.OAuth(this.fetchConfig), this.otps = new c.OTPs(this.fetchConfig), this.passwords = new d.Passwords(this.fetchConfig), this.sessions = new u.Sessions(this.fetchConfig, this.jwtConfig), this.totps = new p.TOTPs(this.fetchConfig), this.users = new f.Users(this.fetchConfig), this.webauthn = new h.WebAuthn(this.fetchConfig)
                }
            }
            t.Client = v
        },
        70772: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CryptoWallets = void 0;
            var n = r(69022);
            t.CryptoWallets = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                authenticateStart(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/crypto_wallets/authenticate/start",
                        data: e
                    })
                }
                authenticate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/crypto_wallets/authenticate",
                        data: e
                    })
                }
            }
        },
        94880: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        72718: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.M2M = void 0;
            var n = r(96983),
                o = r(54901),
                i = r(15779),
                a = r(69022);
            t.M2M = class {
                constructor(e, t) {
                    this.fetchConfig = e, this.clients = new n.Clients(this.fetchConfig), this.jwksClient = t.jwks, this.jwtOptions = {
                        audience: t.projectID,
                        issuer: `stytch.com/${t.projectID}`,
                        typ: "JWT"
                    }
                }
                async token(e) {
                    const t = { ...this.fetchConfig,
                            headers: {
                                "User-Agent": this.fetchConfig.headers["User-Agent"],
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        },
                        r = {
                            client_id: e.client_id,
                            client_secret: e.client_secret,
                            grant_type: "client_credentials"
                        };
                    var n;
                    e.scopes && e.scopes.length > 0 && (r.scope = null === (n = e.scopes) || void 0 === n ? void 0 : n.join(" "));
                    return (0, a.request)(t, {
                        method: "POST",
                        url: `/v1/public/${this.jwtOptions.audience}/oauth2/token`,
                        dataRaw: new URLSearchParams(r)
                    })
                }
                async authenticateToken(e) {
                    const {
                        sub: t,
                        scope: r,
                        custom_claims: n
                    } = await (0, o.authenticateM2MJwtLocal)(this.jwksClient, this.jwtOptions, e.access_token, {
                        max_token_age_seconds: e.max_token_age_seconds
                    }), a = r.split(" ");
                    if (e.required_scopes && e.required_scopes.length > 0) {
                        const t = e.required_scopes.filter((e => !a.includes(e)));
                        if (t.length > 0) throw new i.ClientError("missing_scopes", "Missing required scopes", t)
                    }
                    return {
                        client_id: t,
                        scopes: a,
                        custom_claims: n
                    }
                }
            }
        },
        96983: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Clients = void 0;
            var n = r(69022),
                o = r(78476);
            t.Clients = class {
                constructor(e) {
                    this.fetchConfig = e, this.secrets = new o.Secrets(this.fetchConfig)
                }
                get(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "GET",
                        url: `/v1/m2m/clients/${e.client_id}`,
                        params: {}
                    })
                }
                search(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/m2m/clients/search",
                        data: e
                    })
                }
                update(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "PUT",
                        url: `/v1/m2m/clients/${e.client_id}`,
                        data: {
                            client_name: e.client_name,
                            client_description: e.client_description,
                            status: e.status,
                            scopes: e.scopes,
                            trusted_metadata: e.trusted_metadata
                        }
                    })
                }
                delete(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/m2m/clients/${e.client_id}`,
                        data: {}
                    })
                }
                create(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/m2m/clients",
                        data: e
                    })
                }
            }
        },
        78476: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Secrets = void 0;
            var n = r(69022);
            t.Secrets = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                rotateStart(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: `/v1/m2m/clients/${e.client_id}/secrets/rotate/start`,
                        data: {}
                    })
                }
                rotateCancel(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: `/v1/m2m/clients/${e.client_id}/secrets/rotate/cancel`,
                        data: {}
                    })
                }
                rotate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: `/v1/m2m/clients/${e.client_id}/secrets/rotate`,
                        data: {}
                    })
                }
            }
        },
        8442: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MagicLinks = void 0;
            var n = r(99873),
                o = r(69022);
            t.MagicLinks = class {
                constructor(e) {
                    this.fetchConfig = e, this.email = new n.Email(this.fetchConfig)
                }
                authenticate(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/magic_links/authenticate",
                        data: e
                    })
                }
                create(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/magic_links",
                        data: e
                    })
                }
            }
        },
        99873: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Email = void 0;
            var n = r(69022);
            t.Email = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                send(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/magic_links/email/send",
                        data: e
                    })
                }
                loginOrCreate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/magic_links/email/login_or_create",
                        data: e
                    })
                }
                invite(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/magic_links/email/invite",
                        data: e
                    })
                }
                revokeInvite(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/magic_links/email/revoke_invite",
                        data: e
                    })
                }
            }
        },
        55400: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OAuth = void 0;
            var n = r(69022);
            t.OAuth = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                attach(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/oauth/attach",
                        data: e
                    })
                }
                authenticate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/oauth/authenticate",
                        data: e
                    })
                }
            }
        },
        53617: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OTPs = void 0;
            var n = r(58332),
                o = r(69022),
                i = r(11746),
                a = r(37200);
            t.OTPs = class {
                constructor(e) {
                    this.fetchConfig = e, this.sms = new i.Sms(this.fetchConfig), this.whatsapp = new a.Whatsapp(this.fetchConfig), this.email = new n.Email(this.fetchConfig)
                }
                authenticate(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/otps/authenticate",
                        data: e
                    })
                }
            }
        },
        58332: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Email = void 0;
            var n = r(69022);
            t.Email = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                send(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/otps/email/send",
                        data: e
                    })
                }
                loginOrCreate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/otps/email/login_or_create",
                        data: e
                    })
                }
            }
        },
        11746: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Sms = void 0;
            var n = r(69022);
            t.Sms = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                send(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/otps/sms/send",
                        data: e
                    })
                }
                loginOrCreate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/otps/sms/login_or_create",
                        data: e
                    })
                }
            }
        },
        37200: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Whatsapp = void 0;
            var n = r(69022);
            t.Whatsapp = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                send(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/otps/whatsapp/send",
                        data: e
                    })
                }
                loginOrCreate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/otps/whatsapp/login_or_create",
                        data: e
                    })
                }
            }
        },
        67218: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Passwords = void 0;
            var n = r(72542),
                o = r(75777),
                i = r(69022),
                a = r(11001);
            t.Passwords = class {
                constructor(e) {
                    this.fetchConfig = e, this.email = new n.Email(this.fetchConfig), this.existingPassword = new o.ExistingPassword(this.fetchConfig), this.sessions = new a.Sessions(this.fetchConfig)
                }
                create(e) {
                    return (0, i.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/passwords",
                        data: e
                    })
                }
                authenticate(e) {
                    return (0, i.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/passwords/authenticate",
                        data: e
                    })
                }
                strengthCheck(e) {
                    return (0, i.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/passwords/strength_check",
                        data: e
                    })
                }
                migrate(e) {
                    return (0, i.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/passwords/migrate",
                        data: e
                    })
                }
            }
        },
        72542: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Email = void 0;
            var n = r(69022);
            t.Email = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                resetStart(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/passwords/email/reset/start",
                        data: e
                    })
                }
                reset(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/passwords/email/reset",
                        data: e
                    })
                }
            }
        },
        75777: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ExistingPassword = void 0;
            var n = r(69022);
            t.ExistingPassword = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                reset(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/passwords/existing_password/reset",
                        data: e
                    })
                }
            }
        },
        11001: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Sessions = void 0;
            var n = r(69022);
            t.Sessions = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                reset(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/passwords/session/reset",
                        data: e
                    })
                }
            }
        },
        6924: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Sessions = void 0;
            var n = r(69022),
                o = r(54901);
            t.Sessions = class {
                constructor(e, t) {
                    this.fetchConfig = e, this.jwksClient = t.jwks, this.jwtOptions = {
                        audience: t.projectID,
                        issuer: `stytch.com/${t.projectID}`,
                        typ: "JWT"
                    }
                }
                get(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "GET",
                        url: "/v1/sessions",
                        params: { ...e
                        }
                    })
                }
                authenticate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/sessions/authenticate",
                        data: e
                    })
                }
                revoke(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/sessions/revoke",
                        data: e
                    })
                }
                getJWKS(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "GET",
                        url: `/v1/sessions/jwks/${e.project_id}`,
                        params: {}
                    })
                }
                async authenticateJwt(e, t) {
                    try {
                        return {
                            session: await this.authenticateJwtLocal(e, t),
                            session_jwt: e
                        }
                    } catch (r) {
                        return this.authenticate({
                            session_jwt: e
                        })
                    }
                }
                async authenticateJwtLocal(e, t) {
                    const r = await (0, o.authenticateSessionJwtLocal)(this.jwksClient, this.jwtOptions, e, t);
                    return {
                        session_id: r.session_id,
                        attributes: r.attributes,
                        authentication_factors: r.authentication_factors,
                        user_id: r.sub,
                        started_at: r.started_at,
                        last_accessed_at: r.last_accessed_at,
                        expires_at: r.expires_at,
                        custom_claims: r.custom_claims
                    }
                }
            }
        },
        7426: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TOTPs = void 0;
            var n = r(69022);
            t.TOTPs = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                create(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/totps",
                        data: e
                    })
                }
                authenticate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/totps/authenticate",
                        data: e
                    })
                }
                recoveryCodes(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/totps/recovery_codes",
                        data: e
                    })
                }
                recover(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/totps/recover",
                        data: e
                    })
                }
            }
        },
        8658: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Users = t.UserSearchIterator = void 0;
            var n, o = r(69022);
            ! function(e) {
                e[e.pending = 0] = "pending", e[e.inProgress = 1] = "inProgress", e[e.complete = 2] = "complete"
            }(n || (n = {}));
            class i {
                constructor(e, t) {
                    this.client = e, this.data = t, this.mode = n.pending
                }
                async next() {
                    const e = await this.client.search(this.data);
                    return this.data = { ...this.data,
                        cursor: e.results_metadata.next_cursor
                    }, this.data.cursor ? this.mode = n.inProgress : this.mode = n.complete, e.results
                }
                hasNext() {
                    return this.mode !== n.complete
                }
                async * [Symbol.asyncIterator]() {
                    for (; this.hasNext();) yield this.next()
                }
            }
            t.UserSearchIterator = i;
            t.Users = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                create(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/users",
                        data: e
                    })
                }
                get(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "GET",
                        url: `/v1/users/${e.user_id}`,
                        params: {}
                    })
                }
                search(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/users/search",
                        data: e
                    })
                }
                update(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "PUT",
                        url: `/v1/users/${e.user_id}`,
                        data: {
                            name: e.name,
                            attributes: e.attributes,
                            trusted_metadata: e.trusted_metadata,
                            untrusted_metadata: e.untrusted_metadata
                        }
                    })
                }
                delete(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/users/${e.user_id}`,
                        data: {}
                    })
                }
                deleteEmail(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/users/emails/${e.email_id}`,
                        data: {}
                    })
                }
                deletePhoneNumber(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/users/phone_numbers/${e.phone_id}`,
                        data: {}
                    })
                }
                deleteWebAuthnRegistration(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/users/webauthn_registrations/${e.webauthn_registration_id}`,
                        data: {}
                    })
                }
                deleteBiometricRegistration(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/users/biometric_registrations/${e.biometric_registration_id}`,
                        data: {}
                    })
                }
                deleteTOTP(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/users/totps/${e.totp_id}`,
                        data: {}
                    })
                }
                deleteCryptoWallet(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/users/crypto_wallets/${e.crypto_wallet_id}`,
                        data: {}
                    })
                }
                deletePassword(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/users/passwords/${e.password_id}`,
                        data: {}
                    })
                }
                deleteOAuthRegistration(e) {
                    return (0, o.request)(this.fetchConfig, {
                        method: "DELETE",
                        url: `/v1/users/oauth/${e.oauth_user_registration_id}`,
                        data: {}
                    })
                }
                searchAll(e) {
                    return new i(this, e)
                }
            }
        },
        56001: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WebAuthn = void 0;
            var n = r(69022);
            t.WebAuthn = class {
                constructor(e) {
                    this.fetchConfig = e
                }
                registerStart(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/webauthn/register/start",
                        data: e
                    })
                }
                register(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/webauthn/register",
                        data: e
                    })
                }
                authenticateStart(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/webauthn/authenticate/start",
                        data: e
                    })
                }
                authenticate(e) {
                    return (0, n.request)(this.fetchConfig, {
                        method: "POST",
                        url: "/v1/webauthn/authenticate",
                        data: e
                    })
                }
            }
        },
        38519: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                Client: !0,
                B2BClient: !0,
                envs: !0
            };
            Object.defineProperty(t, "Client", {
                enumerable: !0,
                get: function() {
                    return o.Client
                }
            }), Object.defineProperty(t, "B2BClient", {
                enumerable: !0,
                get: function() {
                    return a.B2BClient
                }
            }), t.envs = void 0;
            var o = r(33337),
                i = r(94880);
            Object.keys(i).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                }))
            }));
            var a = r(8422),
                s = r(71586);
            Object.keys(s).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === s[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return s[e]
                    }
                }))
            }));
            var l = function(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                    default: e
                };
                var r = d(t);
                if (r && r.has(e)) return r.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                    }
                n.default = e, r && r.set(e, n);
                return n
            }(r(23039));
            t.envs = l;
            var c = r(15779);

            function d(e) {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (d = function(e) {
                    return e ? r : t
                })(e)
            }
            Object.keys(c).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === c[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return c[e]
                    }
                }))
            }))
        },
        68991: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base64Encode = function(e) {
                let t = "";
                for (let r = 0; r < e.length; r++)
                    if (e.charCodeAt(r) > 128) throw Error("Base64 encoded unicode is not supported. Cannot encode " + e);
                let n = 0,
                    o = 0,
                    i = 0,
                    a = 0,
                    s = 0,
                    l = 0,
                    c = 0,
                    d = 0;
                for (; d < e.length;) n = e.charCodeAt(d++), o = e.charCodeAt(d++), i = e.charCodeAt(d++), a = n >> 2, s = (3 & n) << 4 | o >> 4, l = (15 & o) << 2 | i >> 6, c = 63 & i, isNaN(o) ? l = c = 64 : isNaN(i) && (c = 64), t = t + r.charAt(a) + r.charAt(s) + r.charAt(l) + r.charAt(c);
                return t
            };
            const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        },
        83846: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BaseClient = void 0;
            var n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var r = a(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i]
                        }
                    n.default = e, r && r.set(e, n);
                    return n
                }(r(23039)),
                o = r(8979),
                i = r(68991);

            function a(e) {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (a = function(e) {
                    return e ? r : t
                })(e)
            }
            t.BaseClient = class {
                constructor(e) {
                    if ("object" != typeof e) throw new Error("Unexpected config type. Refer to https://github.com/stytchauth/stytch-node for how to use the Node client library.");
                    if (!e.project_id) throw new Error('Missing "project_id" in config');
                    if (!e.secret) throw new Error('Missing "secret" in config');
                    e.env || (e.project_id.startsWith("project-live-") ? e.env = n.live : e.env = n.test), e.env != n.test && (e.env, n.live);
                    const t = {
                        "Content-Type": "application/json",
                        "User-Agent": `Stytch Node v${o.version}`,
                        Authorization: "Basic " + (0, i.base64Encode)(e.project_id + ":" + e.secret)
                    };
                    this.fetchConfig = {
                        baseURL: e.env,
                        headers: t,
                        timeout: e.timeout || 6e5,
                        agent: e.agent
                    }, this.baseURL = e.env, this.baseURL.endsWith("/") || (this.baseURL += "/")
                }
            }
        },
        23039: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.live = t.test = void 0;
            t.test = "https://test.stytch.com/";
            t.live = "https://api.stytch.com/"
        },
        15779: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClientError = t.RequestError = t.StytchError = void 0;
            class r extends Error {
                constructor(e) {
                    super(JSON.stringify(e)), this.status_code = e.status_code, this.request_id = e.request_id, this.error_type = e.error_type, this.error_message = e.error_message, this.error_url = e.error_url
                }
            }
            t.StytchError = r;
            class n extends Error {
                constructor(e, t) {
                    super(e), this.request = t
                }
            }
            t.RequestError = n;
            class o extends Error {
                constructor(e, t, r) {
                    let n = `${e}: ${t}`;
                    r && (n += `: ${r}`), super(n), this.code = e, this.cause = r
                }
            }
            t.ClientError = o
        },
        69022: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.request = async function(e, t) {
                const r = new URL(t.url, e.baseURL);
                t.params && Object.entries(t.params).forEach((([e, t]) => r.searchParams.append(e, String(t))));
                let o, i;
                try {
                    const n = t.data ? JSON.stringify(t.data) : t.dataRaw;
                    o = await a(r.toString(), {
                        method: t.method,
                        body: n,
                        ...e
                    })
                } catch (s) {
                    const e = s;
                    throw new n.RequestError(e.message, t)
                }
                try {
                    i = await o.json()
                } catch (s) {
                    const e = s;
                    throw new n.RequestError(`Unable to parse JSON response from server: ${e.message}`, t)
                }
                if (o.status >= 400) throw new n.StytchError(i);
                return i
            };
            var n = r(15779),
                o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var r = i(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
                        }
                    n.default = e, r && r.set(e, n);
                    return n
                }(r(63144));

            function i(e) {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (i = function(e) {
                    return e ? r : t
                })(e)
            }
            const a = o.default || o
        },
        54901: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.authenticateJwtLocal = s, t.authenticateM2MJwtLocal = async function(e, t, r, n) {
                const {
                    payload: o,
                    customClaims: i
                } = await s(e, t, r, n), {
                    scope: a,
                    ...l
                } = i, c = a;
                return {
                    sub: o.sub ? ? "",
                    scope: c,
                    custom_claims: l
                }
            }, t.authenticateSessionJwtLocal = async function(e, t, r, n) {
                const {
                    payload: o,
                    customClaims: i
                } = await s(e, t, r, n), {
                    [a]: l,
                    ...c
                } = i, d = l;
                return {
                    session_id: d.id,
                    attributes: d.attributes,
                    authentication_factors: d.authentication_factors,
                    sub: o.sub || "",
                    started_at: d.started_at,
                    last_accessed_at: d.last_accessed_at,
                    expires_at: new Date(d.expires_at || 1e3 * (o.exp || 0)).toISOString(),
                    custom_claims: c
                }
            };
            var n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var r = i(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
                        }
                    n.default = e, r && r.set(e, n);
                    return n
                }(r(19916)),
                o = r(15779);

            function i(e) {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (i = function(e) {
                    return e ? r : t
                })(e)
            }
            const a = "https://stytch.com/session";
            async function s(e, t, r, i) {
                const a = (null === i || void 0 === i ? void 0 : i.current_date) || new Date;
                let s;
                try {
                    s = (await n.jwtVerify(r, e, { ...t,
                        clockTolerance: null === i || void 0 === i ? void 0 : i.clock_tolerance_seconds,
                        currentDate: a
                    })).payload
                } catch (g) {
                    throw new o.ClientError("jwt_invalid", "Could not verify JWT", g)
                }
                const l = null === i || void 0 === i ? void 0 : i.max_token_age_seconds;
                if (null != l) {
                    const e = s.iat;
                    if (!e) throw new o.ClientError("jwt_invalid", "JWT was missing iat claim");
                    if (+a / 1e3 - e >= l) throw new o.ClientError("jwt_too_old", `JWT was issued at ${e}, more than ${l} seconds ago`)
                }
                const {
                    aud: c,
                    exp: d,
                    iat: u,
                    iss: p,
                    jti: f,
                    nbf: h,
                    sub: m,
                    ...v
                } = s;
                return {
                    payload: s,
                    customClaims: v
                }
            }
        },
        17158: function(e, t, r) {
            r.d(t, {
                v: function() {
                    return N
                }
            });
            var n = r(67294),
                o = r(32984),
                i = r(12351),
                a = r(9362),
                s = r(94192),
                l = r(16723),
                c = r(23784),
                d = r(19946),
                u = r(61363);
            var p, f = ((p = f || {})[p.First = 0] = "First", p[p.Previous = 1] = "Previous", p[p.Next = 2] = "Next", p[p.Last = 3] = "Last", p[p.Specific = 4] = "Specific", p[p.Nothing = 5] = "Nothing", p);

            function h(e, t) {
                let r = t.resolveItems();
                if (r.length <= 0) return null;
                let n = t.resolveActiveIndex(),
                    o = null != n ? n : -1,
                    i = (() => {
                        switch (e.focus) {
                            case 0:
                                return r.findIndex((e => !t.resolveDisabled(e)));
                            case 1:
                                {
                                    let e = r.slice().reverse().findIndex(((e, r, n) => !(-1 !== o && n.length - r - 1 >= o) && !t.resolveDisabled(e)));
                                    return -1 === e ? e : r.length - 1 - e
                                }
                            case 2:
                                return r.findIndex(((e, r) => !(r <= o) && !t.resolveDisabled(e)));
                            case 3:
                                {
                                    let e = r.slice().reverse().findIndex((e => !t.resolveDisabled(e)));
                                    return -1 === e ? e : r.length - 1 - e
                                }
                            case 4:
                                return r.findIndex((r => t.resolveId(r) === e.id));
                            case 5:
                                return null;
                            default:
                                ! function(e) {
                                    throw new Error("Unexpected object: " + e)
                                }(e)
                        }
                    })();
                return -1 === i ? n : i
            }
            var m = r(64103),
                v = r(84575),
                g = r(39650),
                y = r(15466);
            var b = r(16567),
                w = r(14157),
                S = r(51074),
                E = r(73781);

            function x(e) {
                return [e.screenX, e.screenY]
            }

            function C() {
                let e = (0, n.useRef)([-1, -1]);
                return {
                    wasMoved(t) {
                        let r = x(t);
                        return (e.current[0] !== r[0] || e.current[1] !== r[1]) && (e.current = r, !0)
                    },
                    update(t) {
                        e.current = x(t)
                    }
                }
            }
            var P, T, _ = ((T = _ || {})[T.Open = 0] = "Open", T[T.Closed = 1] = "Closed", T),
                O = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(O || {}),
                A = ((P = A || {})[P.OpenMenu = 0] = "OpenMenu", P[P.CloseMenu = 1] = "CloseMenu", P[P.GoToItem = 2] = "GoToItem", P[P.Search = 3] = "Search", P[P.ClearSearch = 4] = "ClearSearch", P[P.RegisterItem = 5] = "RegisterItem", P[P.UnregisterItem = 6] = "UnregisterItem", P);

            function k(e, t = (e => e)) {
                let r = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
                    n = (0, v.z2)(t(e.items.slice()), (e => e.dataRef.current.domRef.current)),
                    o = r ? n.indexOf(r) : null;
                return -1 === o && (o = null), {
                    items: n,
                    activeItemIndex: o
                }
            }
            let M = {
                    1: e => 1 === e.menuState ? e : { ...e,
                        activeItemIndex: null,
                        menuState: 1
                    },
                    0: e => 0 === e.menuState ? e : { ...e,
                        menuState: 0
                    },
                    2: (e, t) => {
                        var r;
                        let n = k(e),
                            o = h(t, {
                                resolveItems: () => n.items,
                                resolveActiveIndex: () => n.activeItemIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            });
                        return { ...e,
                            ...n,
                            searchQuery: "",
                            activeItemIndex: o,
                            activationTrigger: null != (r = t.trigger) ? r : 1
                        }
                    },
                    3: (e, t) => {
                        let r = "" !== e.searchQuery ? 0 : 1,
                            n = e.searchQuery + t.value.toLowerCase(),
                            o = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + r).concat(e.items.slice(0, e.activeItemIndex + r)) : e.items).find((e => {
                                var t;
                                return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(n)) && !e.dataRef.current.disabled
                            })),
                            i = o ? e.items.indexOf(o) : -1;
                        return -1 === i || i === e.activeItemIndex ? { ...e,
                            searchQuery: n
                        } : { ...e,
                            searchQuery: n,
                            activeItemIndex: i,
                            activationTrigger: 1
                        }
                    },
                    4: e => "" === e.searchQuery ? e : { ...e,
                        searchQuery: "",
                        searchActiveItemIndex: null
                    },
                    5: (e, t) => {
                        let r = k(e, (e => [...e, {
                            id: t.id,
                            dataRef: t.dataRef
                        }]));
                        return { ...e,
                            ...r
                        }
                    },
                    6: (e, t) => {
                        let r = k(e, (e => {
                            let r = e.findIndex((e => e.id === t.id));
                            return -1 !== r && e.splice(r, 1), e
                        }));
                        return { ...e,
                            ...r,
                            activationTrigger: 1
                        }
                    }
                },
                R = (0, n.createContext)(null);

            function Z(e) {
                let t = (0, n.useContext)(R);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Menu /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Z), t
                }
                return t
            }

            function I(e, t) {
                return (0, o.E)(t.type, M, e, t)
            }
            R.displayName = "MenuContext";
            let j = n.Fragment;
            let H = i.AN.RenderStrategy | i.AN.Static;
            let L = n.Fragment;
            let D = (0, i.yV)((function(e, t) {
                    let r = (0, n.useReducer)(I, {
                            menuState: 1,
                            buttonRef: (0, n.createRef)(),
                            itemsRef: (0, n.createRef)(),
                            items: [],
                            searchQuery: "",
                            activeItemIndex: null,
                            activationTrigger: 1
                        }),
                        [{
                            menuState: a,
                            itemsRef: s,
                            buttonRef: l
                        }, d] = r,
                        u = (0, c.T)(t);
                    (0, g.O)([l, s], ((e, t) => {
                        var r;
                        d({
                            type: 1
                        }), (0, v.sP)(t, v.tJ.Loose) || (e.preventDefault(), null == (r = l.current) || r.focus())
                    }), 0 === a);
                    let p = (0, E.z)((() => {
                            d({
                                type: 1
                            })
                        })),
                        f = (0, n.useMemo)((() => ({
                            open: 0 === a,
                            close: p
                        })), [a, p]),
                        h = e,
                        m = {
                            ref: u
                        };
                    return n.createElement(R.Provider, {
                        value: r
                    }, n.createElement(b.up, {
                        value: (0, o.E)(a, {
                            0: b.ZM.Open,
                            1: b.ZM.Closed
                        })
                    }, (0, i.sY)({
                        ourProps: m,
                        theirProps: h,
                        slot: f,
                        defaultTag: j,
                        name: "Menu"
                    })))
                })),
                $ = (0, i.yV)((function(e, t) {
                    var r;
                    let o = (0, d.M)(),
                        {
                            id: a = `headlessui-menu-button-${o}`,
                            ...l
                        } = e,
                        [p, h] = Z("Menu.Button"),
                        v = (0, c.T)(p.buttonRef, t),
                        g = (0, s.G)(),
                        y = (0, E.z)((e => {
                            switch (e.key) {
                                case u.R.Space:
                                case u.R.Enter:
                                case u.R.ArrowDown:
                                    e.preventDefault(), e.stopPropagation(), h({
                                        type: 0
                                    }), g.nextFrame((() => h({
                                        type: 2,
                                        focus: f.First
                                    })));
                                    break;
                                case u.R.ArrowUp:
                                    e.preventDefault(), e.stopPropagation(), h({
                                        type: 0
                                    }), g.nextFrame((() => h({
                                        type: 2,
                                        focus: f.Last
                                    })))
                            }
                        })),
                        b = (0, E.z)((e => {
                            if (e.key === u.R.Space) e.preventDefault()
                        })),
                        S = (0, E.z)((t => {
                            if ((0, m.P)(t.currentTarget)) return t.preventDefault();
                            e.disabled || (0 === p.menuState ? (h({
                                type: 1
                            }), g.nextFrame((() => {
                                var e;
                                return null == (e = p.buttonRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            }))) : (t.preventDefault(), h({
                                type: 0
                            })))
                        })),
                        x = (0, n.useMemo)((() => ({
                            open: 0 === p.menuState
                        })), [p]),
                        C = {
                            ref: v,
                            id: a,
                            type: (0, w.f)(e, p.buttonRef),
                            "aria-haspopup": "menu",
                            "aria-controls": null == (r = p.itemsRef.current) ? void 0 : r.id,
                            "aria-expanded": e.disabled ? void 0 : 0 === p.menuState,
                            onKeyDown: y,
                            onKeyUp: b,
                            onClick: S
                        };
                    return (0, i.sY)({
                        ourProps: C,
                        theirProps: l,
                        slot: x,
                        defaultTag: "button",
                        name: "Menu.Button"
                    })
                })),
                W = (0, i.yV)((function(e, t) {
                    var r, o;
                    let p = (0, d.M)(),
                        {
                            id: h = `headlessui-menu-items-${p}`,
                            ...m
                        } = e,
                        [g, w] = Z("Menu.Items"),
                        x = (0, c.T)(g.itemsRef, t),
                        C = (0, S.i)(g.itemsRef),
                        P = (0, s.G)(),
                        T = (0, b.oJ)(),
                        _ = null !== T ? (T & b.ZM.Open) === b.ZM.Open : 0 === g.menuState;
                    (0, n.useEffect)((() => {
                        let e = g.itemsRef.current;
                        e && 0 === g.menuState && e !== (null == C ? void 0 : C.activeElement) && e.focus({
                            preventScroll: !0
                        })
                    }), [g.menuState, g.itemsRef, C]),
                    function({
                        container: e,
                        accept: t,
                        walk: r,
                        enabled: o = !0
                    }) {
                        let i = (0, n.useRef)(t),
                            a = (0, n.useRef)(r);
                        (0, n.useEffect)((() => {
                            i.current = t, a.current = r
                        }), [t, r]), (0, l.e)((() => {
                            if (!e || !o) return;
                            let t = (0, y.r)(e);
                            if (!t) return;
                            let r = i.current,
                                n = a.current,
                                s = Object.assign((e => r(e)), {
                                    acceptNode: r
                                }),
                                l = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, !1);
                            for (; l.nextNode();) n(l.currentNode)
                        }), [e, o, i, a])
                    }({
                        container: g.itemsRef.current,
                        enabled: 0 === g.menuState,
                        accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                        walk(e) {
                            e.setAttribute("role", "none")
                        }
                    });
                    let O = (0, E.z)((e => {
                            var t, r;
                            switch (P.dispose(), e.key) {
                                case u.R.Space:
                                    if ("" !== g.searchQuery) return e.preventDefault(), e.stopPropagation(), w({
                                        type: 3,
                                        value: e.key
                                    });
                                case u.R.Enter:
                                    if (e.preventDefault(), e.stopPropagation(), w({
                                            type: 1
                                        }), null !== g.activeItemIndex) {
                                        let {
                                            dataRef: e
                                        } = g.items[g.activeItemIndex];
                                        null == (r = null == (t = e.current) ? void 0 : t.domRef.current) || r.click()
                                    }(0, v.wI)(g.buttonRef.current);
                                    break;
                                case u.R.ArrowDown:
                                    return e.preventDefault(), e.stopPropagation(), w({
                                        type: 2,
                                        focus: f.Next
                                    });
                                case u.R.ArrowUp:
                                    return e.preventDefault(), e.stopPropagation(), w({
                                        type: 2,
                                        focus: f.Previous
                                    });
                                case u.R.Home:
                                case u.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), w({
                                        type: 2,
                                        focus: f.First
                                    });
                                case u.R.End:
                                case u.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), w({
                                        type: 2,
                                        focus: f.Last
                                    });
                                case u.R.Escape:
                                    e.preventDefault(), e.stopPropagation(), w({
                                        type: 1
                                    }), (0, a.k)().nextFrame((() => {
                                        var e;
                                        return null == (e = g.buttonRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                    break;
                                case u.R.Tab:
                                    e.preventDefault(), e.stopPropagation(), w({
                                        type: 1
                                    }), (0, a.k)().nextFrame((() => {
                                        (0, v.EO)(g.buttonRef.current, e.shiftKey ? v.TO.Previous : v.TO.Next)
                                    }));
                                    break;
                                default:
                                    1 === e.key.length && (w({
                                        type: 3,
                                        value: e.key
                                    }), P.setTimeout((() => w({
                                        type: 4
                                    })), 350))
                            }
                        })),
                        A = (0, E.z)((e => {
                            if (e.key === u.R.Space) e.preventDefault()
                        })),
                        k = (0, n.useMemo)((() => ({
                            open: 0 === g.menuState
                        })), [g]),
                        M = {
                            "aria-activedescendant": null === g.activeItemIndex || null == (r = g.items[g.activeItemIndex]) ? void 0 : r.id,
                            "aria-labelledby": null == (o = g.buttonRef.current) ? void 0 : o.id,
                            id: h,
                            onKeyDown: O,
                            onKeyUp: A,
                            role: "menu",
                            tabIndex: 0,
                            ref: x
                        };
                    return (0, i.sY)({
                        ourProps: M,
                        theirProps: m,
                        slot: k,
                        defaultTag: "div",
                        features: H,
                        visible: _,
                        name: "Menu.Items"
                    })
                })),
                z = (0, i.yV)((function(e, t) {
                    let r = (0, d.M)(),
                        {
                            id: o = `headlessui-menu-item-${r}`,
                            disabled: s = !1,
                            ...u
                        } = e,
                        [p, h] = Z("Menu.Item"),
                        m = null !== p.activeItemIndex && p.items[p.activeItemIndex].id === o,
                        g = (0, n.useRef)(null),
                        y = (0, c.T)(t, g);
                    (0, l.e)((() => {
                        if (0 !== p.menuState || !m || 0 === p.activationTrigger) return;
                        let e = (0, a.k)();
                        return e.requestAnimationFrame((() => {
                            var e, t;
                            null == (t = null == (e = g.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                block: "nearest"
                            })
                        })), e.dispose
                    }), [g, m, p.menuState, p.activationTrigger, p.activeItemIndex]);
                    let b = (0, n.useRef)({
                        disabled: s,
                        domRef: g
                    });
                    (0, l.e)((() => {
                        b.current.disabled = s
                    }), [b, s]), (0, l.e)((() => {
                        var e, t;
                        b.current.textValue = null == (t = null == (e = g.current) ? void 0 : e.textContent) ? void 0 : t.toLowerCase()
                    }), [b, g]), (0, l.e)((() => (h({
                        type: 5,
                        id: o,
                        dataRef: b
                    }), () => h({
                        type: 6,
                        id: o
                    }))), [b, o]);
                    let w = (0, E.z)((() => {
                            h({
                                type: 1
                            })
                        })),
                        S = (0, E.z)((e => {
                            if (s) return e.preventDefault();
                            h({
                                type: 1
                            }), (0, v.wI)(p.buttonRef.current)
                        })),
                        x = (0, E.z)((() => {
                            if (s) return h({
                                type: 2,
                                focus: f.Nothing
                            });
                            h({
                                type: 2,
                                focus: f.Specific,
                                id: o
                            })
                        })),
                        P = C(),
                        T = (0, E.z)((e => P.update(e))),
                        _ = (0, E.z)((e => {
                            P.wasMoved(e) && (s || m || h({
                                type: 2,
                                focus: f.Specific,
                                id: o,
                                trigger: 0
                            }))
                        })),
                        O = (0, E.z)((e => {
                            P.wasMoved(e) && (s || m && h({
                                type: 2,
                                focus: f.Nothing
                            }))
                        })),
                        A = (0, n.useMemo)((() => ({
                            active: m,
                            disabled: s,
                            close: w
                        })), [m, s, w]);
                    return (0, i.sY)({
                        ourProps: {
                            id: o,
                            ref: y,
                            role: "menuitem",
                            tabIndex: !0 === s ? void 0 : -1,
                            "aria-disabled": !0 === s || void 0,
                            disabled: void 0,
                            onClick: S,
                            onFocus: x,
                            onPointerEnter: T,
                            onMouseEnter: T,
                            onPointerMove: _,
                            onMouseMove: _,
                            onPointerLeave: O,
                            onMouseLeave: O
                        },
                        theirProps: u,
                        slot: A,
                        defaultTag: L,
                        name: "Menu.Item"
                    })
                })),
                N = Object.assign(D, {
                    Button: $,
                    Items: W,
                    Item: z
                })
        },
        19916: function(e, t, r) {
            r.r(t), r.d(t, {
                CompactEncrypt: function() {
                    return at
                },
                CompactSign: function() {
                    return ct
                },
                EmbeddedJWK: function() {
                    return yt
                },
                EncryptJWT: function() {
                    return ht
                },
                FlattenedEncrypt: function() {
                    return Be
                },
                FlattenedSign: function() {
                    return lt
                },
                GeneralEncrypt: function() {
                    return Ke
                },
                GeneralSign: function() {
                    return ut
                },
                SignJWT: function() {
                    return ft
                },
                UnsecuredJWT: function() {
                    return _t
                },
                base64url: function() {
                    return o
                },
                calculateJwkThumbprint: function() {
                    return vt
                },
                calculateJwkThumbprintUri: function() {
                    return gt
                },
                compactDecrypt: function() {
                    return je
                },
                compactVerify: function() {
                    return Ve
                },
                createLocalJWKSet: function() {
                    return xt
                },
                createRemoteJWKSet: function() {
                    return Tt
                },
                decodeJwt: function() {
                    return Mt
                },
                decodeProtectedHeader: function() {
                    return kt
                },
                errors: function() {
                    return n
                },
                exportJWK: function() {
                    return We
                },
                exportPKCS8: function() {
                    return $e
                },
                exportSPKI: function() {
                    return De
                },
                flattenedDecrypt: function() {
                    return Ie
                },
                flattenedVerify: function() {
                    return qe
                },
                generalDecrypt: function() {
                    return He
                },
                generalVerify: function() {
                    return Xe
                },
                generateKeyPair: function() {
                    return Zt
                },
                generateSecret: function() {
                    return It
                },
                importJWK: function() {
                    return Oe
                },
                importPKCS8: function() {
                    return _e
                },
                importSPKI: function() {
                    return Pe
                },
                importX509: function() {
                    return Te
                },
                jwtDecrypt: function() {
                    return it
                },
                jwtVerify: function() {
                    return ot
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                JOSEAlgNotAllowed: function() {
                    return x
                },
                JOSEError: function() {
                    return w
                },
                JOSENotSupported: function() {
                    return C
                },
                JWEDecryptionFailed: function() {
                    return P
                },
                JWEInvalid: function() {
                    return T
                },
                JWKInvalid: function() {
                    return A
                },
                JWKSInvalid: function() {
                    return k
                },
                JWKSMultipleMatchingKeys: function() {
                    return R
                },
                JWKSNoMatchingKey: function() {
                    return M
                },
                JWKSTimeout: function() {
                    return Z
                },
                JWSInvalid: function() {
                    return _
                },
                JWSSignatureVerificationFailed: function() {
                    return I
                },
                JWTClaimValidationFailed: function() {
                    return S
                },
                JWTExpired: function() {
                    return E
                },
                JWTInvalid: function() {
                    return O
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                decode: function() {
                    return At
                },
                encode: function() {
                    return Ot
                }
            });
            var i = crypto;
            const a = e => e instanceof CryptoKey;
            var s = async (e, t) => {
                const r = `SHA-${e.slice(-3)}`;
                return new Uint8Array(await i.subtle.digest(r, t))
            };
            const l = new TextEncoder,
                c = new TextDecoder,
                d = 2 ** 32;

            function u(...e) {
                const t = e.reduce(((e, {
                        length: t
                    }) => e + t), 0),
                    r = new Uint8Array(t);
                let n = 0;
                return e.forEach((e => {
                    r.set(e, n), n += e.length
                })), r
            }

            function p(e, t, r) {
                if (t < 0 || t >= d) throw new RangeError(`value must be >= 0 and <= 4294967295. Received ${t}`);
                e.set([t >>> 24, t >>> 16, t >>> 8, 255 & t], r)
            }

            function f(e) {
                const t = Math.floor(e / d),
                    r = e % d,
                    n = new Uint8Array(8);
                return p(n, t, 0), p(n, r, 4), n
            }

            function h(e) {
                const t = new Uint8Array(4);
                return p(t, e), t
            }

            function m(e) {
                return u(h(e.length), e)
            }
            const v = e => {
                    let t = e;
                    "string" === typeof t && (t = l.encode(t));
                    const r = [];
                    for (let n = 0; n < t.length; n += 32768) r.push(String.fromCharCode.apply(null, t.subarray(n, n + 32768)));
                    return btoa(r.join(""))
                },
                g = e => v(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"),
                y = e => {
                    const t = atob(e),
                        r = new Uint8Array(t.length);
                    for (let n = 0; n < t.length; n++) r[n] = t.charCodeAt(n);
                    return r
                },
                b = e => {
                    let t = e;
                    t instanceof Uint8Array && (t = c.decode(t)), t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
                    try {
                        return y(t)
                    } catch (r) {
                        throw new TypeError("The input to be decoded is not correctly encoded.")
                    }
                };
            class w extends Error {
                static get code() {
                    return "ERR_JOSE_GENERIC"
                }
                constructor(e) {
                    var t;
                    super(e), this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, null === (t = Error.captureStackTrace) || void 0 === t || t.call(Error, this, this.constructor)
                }
            }
            class S extends w {
                static get code() {
                    return "ERR_JWT_CLAIM_VALIDATION_FAILED"
                }
                constructor(e, t = "unspecified", r = "unspecified") {
                    super(e), this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED", this.claim = t, this.reason = r
                }
            }
            class E extends w {
                static get code() {
                    return "ERR_JWT_EXPIRED"
                }
                constructor(e, t = "unspecified", r = "unspecified") {
                    super(e), this.code = "ERR_JWT_EXPIRED", this.claim = t, this.reason = r
                }
            }
            class x extends w {
                constructor() {
                    super(...arguments), this.code = "ERR_JOSE_ALG_NOT_ALLOWED"
                }
                static get code() {
                    return "ERR_JOSE_ALG_NOT_ALLOWED"
                }
            }
            class C extends w {
                constructor() {
                    super(...arguments), this.code = "ERR_JOSE_NOT_SUPPORTED"
                }
                static get code() {
                    return "ERR_JOSE_NOT_SUPPORTED"
                }
            }
            class P extends w {
                constructor() {
                    super(...arguments), this.code = "ERR_JWE_DECRYPTION_FAILED", this.message = "decryption operation failed"
                }
                static get code() {
                    return "ERR_JWE_DECRYPTION_FAILED"
                }
            }
            class T extends w {
                constructor() {
                    super(...arguments), this.code = "ERR_JWE_INVALID"
                }
                static get code() {
                    return "ERR_JWE_INVALID"
                }
            }
            class _ extends w {
                constructor() {
                    super(...arguments), this.code = "ERR_JWS_INVALID"
                }
                static get code() {
                    return "ERR_JWS_INVALID"
                }
            }
            class O extends w {
                constructor() {
                    super(...arguments), this.code = "ERR_JWT_INVALID"
                }
                static get code() {
                    return "ERR_JWT_INVALID"
                }
            }
            class A extends w {
                constructor() {
                    super(...arguments), this.code = "ERR_JWK_INVALID"
                }
                static get code() {
                    return "ERR_JWK_INVALID"
                }
            }
            class k extends w {
                constructor() {
                    super(...arguments), this.code = "ERR_JWKS_INVALID"
                }
                static get code() {
                    return "ERR_JWKS_INVALID"
                }
            }
            class M extends w {
                constructor() {
                    super(...arguments), this.code = "ERR_JWKS_NO_MATCHING_KEY", this.message = "no applicable key found in the JSON Web Key Set"
                }
                static get code() {
                    return "ERR_JWKS_NO_MATCHING_KEY"
                }
            }
            class R extends w {
                constructor() {
                    super(...arguments), this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS", this.message = "multiple matching keys found in the JSON Web Key Set"
                }
                static get code() {
                    return "ERR_JWKS_MULTIPLE_MATCHING_KEYS"
                }
            }
            Symbol.asyncIterator;
            class Z extends w {
                constructor() {
                    super(...arguments), this.code = "ERR_JWKS_TIMEOUT", this.message = "request timed out"
                }
                static get code() {
                    return "ERR_JWKS_TIMEOUT"
                }
            }
            class I extends w {
                constructor() {
                    super(...arguments), this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED", this.message = "signature verification failed"
                }
                static get code() {
                    return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"
                }
            }
            var j = i.getRandomValues.bind(i);

            function H(e) {
                switch (e) {
                    case "A128GCM":
                    case "A128GCMKW":
                    case "A192GCM":
                    case "A192GCMKW":
                    case "A256GCM":
                    case "A256GCMKW":
                        return 96;
                    case "A128CBC-HS256":
                    case "A192CBC-HS384":
                    case "A256CBC-HS512":
                        return 128;
                    default:
                        throw new C(`Unsupported JWE Algorithm: ${e}`)
                }
            }
            var L = e => j(new Uint8Array(H(e) >> 3));
            var D = (e, t) => {
                if (t.length << 3 !== H(e)) throw new T("Invalid Initialization Vector length")
            };
            var $ = (e, t) => {
                const r = e.byteLength << 3;
                if (r !== t) throw new T(`Invalid Content Encryption Key length. Expected ${t} bits, got ${r} bits`)
            };
            var W = (e, t) => {
                if (!(e instanceof Uint8Array)) throw new TypeError("First argument must be a buffer");
                if (!(t instanceof Uint8Array)) throw new TypeError("Second argument must be a buffer");
                if (e.length !== t.length) throw new TypeError("Input buffers must have the same length");
                const r = e.length;
                let n = 0,
                    o = -1;
                for (; ++o < r;) n |= e[o] ^ t[o];
                return 0 === n
            };

            function z(e, t = "algorithm.name") {
                return new TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`)
            }

            function N(e, t) {
                return e.name === t
            }

            function B(e) {
                return parseInt(e.name.slice(4), 10)
            }

            function F(e, t) {
                if (t.length && !t.some((t => e.usages.includes(t)))) {
                    let e = "CryptoKey does not support this operation, its usages must include ";
                    if (t.length > 2) {
                        const r = t.pop();
                        e += `one of ${t.join(", ")}, or ${r}.`
                    } else 2 === t.length ? e += `one of ${t[0]} or ${t[1]}.` : e += `${t[0]}.`;
                    throw new TypeError(e)
                }
            }

            function K(e, t, ...r) {
                switch (t) {
                    case "HS256":
                    case "HS384":
                    case "HS512":
                        {
                            if (!N(e.algorithm, "HMAC")) throw z("HMAC");
                            const r = parseInt(t.slice(2), 10);
                            if (B(e.algorithm.hash) !== r) throw z(`SHA-${r}`, "algorithm.hash");
                            break
                        }
                    case "RS256":
                    case "RS384":
                    case "RS512":
                        {
                            if (!N(e.algorithm, "RSASSA-PKCS1-v1_5")) throw z("RSASSA-PKCS1-v1_5");
                            const r = parseInt(t.slice(2), 10);
                            if (B(e.algorithm.hash) !== r) throw z(`SHA-${r}`, "algorithm.hash");
                            break
                        }
                    case "PS256":
                    case "PS384":
                    case "PS512":
                        {
                            if (!N(e.algorithm, "RSA-PSS")) throw z("RSA-PSS");
                            const r = parseInt(t.slice(2), 10);
                            if (B(e.algorithm.hash) !== r) throw z(`SHA-${r}`, "algorithm.hash");
                            break
                        }
                    case "EdDSA":
                        if ("Ed25519" !== e.algorithm.name && "Ed448" !== e.algorithm.name) throw z("Ed25519 or Ed448");
                        break;
                    case "ES256":
                    case "ES384":
                    case "ES512":
                        {
                            if (!N(e.algorithm, "ECDSA")) throw z("ECDSA");
                            const r = function(e) {
                                switch (e) {
                                    case "ES256":
                                        return "P-256";
                                    case "ES384":
                                        return "P-384";
                                    case "ES512":
                                        return "P-521";
                                    default:
                                        throw new Error("unreachable")
                                }
                            }(t);
                            if (e.algorithm.namedCurve !== r) throw z(r, "algorithm.namedCurve");
                            break
                        }
                    default:
                        throw new TypeError("CryptoKey does not support this operation")
                }
                F(e, r)
            }

            function U(e, t, ...r) {
                switch (t) {
                    case "A128GCM":
                    case "A192GCM":
                    case "A256GCM":
                        {
                            if (!N(e.algorithm, "AES-GCM")) throw z("AES-GCM");
                            const r = parseInt(t.slice(1, 4), 10);
                            if (e.algorithm.length !== r) throw z(r, "algorithm.length");
                            break
                        }
                    case "A128KW":
                    case "A192KW":
                    case "A256KW":
                        {
                            if (!N(e.algorithm, "AES-KW")) throw z("AES-KW");
                            const r = parseInt(t.slice(1, 4), 10);
                            if (e.algorithm.length !== r) throw z(r, "algorithm.length");
                            break
                        }
                    case "ECDH":
                        switch (e.algorithm.name) {
                            case "ECDH":
                            case "X25519":
                            case "X448":
                                break;
                            default:
                                throw z("ECDH, X25519, or X448")
                        }
                        break;
                    case "PBES2-HS256+A128KW":
                    case "PBES2-HS384+A192KW":
                    case "PBES2-HS512+A256KW":
                        if (!N(e.algorithm, "PBKDF2")) throw z("PBKDF2");
                        break;
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        {
                            if (!N(e.algorithm, "RSA-OAEP")) throw z("RSA-OAEP");
                            const r = parseInt(t.slice(9), 10) || 1;
                            if (B(e.algorithm.hash) !== r) throw z(`SHA-${r}`, "algorithm.hash");
                            break
                        }
                    default:
                        throw new TypeError("CryptoKey does not support this operation")
                }
                F(e, r)
            }

            function J(e, t, ...r) {
                if (r.length > 2) {
                    const t = r.pop();
                    e += `one of type ${r.join(", ")}, or ${t}.`
                } else 2 === r.length ? e += `one of type ${r[0]} or ${r[1]}.` : e += `of type ${r[0]}.`;
                return null == t ? e += ` Received ${t}` : "function" === typeof t && t.name ? e += ` Received function ${t.name}` : "object" === typeof t && null != t && t.constructor && t.constructor.name && (e += ` Received an instance of ${t.constructor.name}`), e
            }
            var G = (e, ...t) => J("Key must be ", e, ...t);

            function q(e, t, ...r) {
                return J(`Key for the ${e} algorithm must be `, t, ...r)
            }
            var V = e => a(e);
            const X = ["CryptoKey"];
            var Y = async (e, t, r, n, o, s) => {
                if (!a(t) && !(t instanceof Uint8Array)) throw new TypeError(G(t, ...X, "Uint8Array"));
                switch (D(e, n), e) {
                    case "A128CBC-HS256":
                    case "A192CBC-HS384":
                    case "A256CBC-HS512":
                        return t instanceof Uint8Array && $(t, parseInt(e.slice(-3), 10)), async function(e, t, r, n, o, a) {
                            if (!(t instanceof Uint8Array)) throw new TypeError(G(t, "Uint8Array"));
                            const s = parseInt(e.slice(1, 4), 10),
                                l = await i.subtle.importKey("raw", t.subarray(s >> 3), "AES-CBC", !1, ["decrypt"]),
                                c = await i.subtle.importKey("raw", t.subarray(0, s >> 3), {
                                    hash: "SHA-" + (s << 1),
                                    name: "HMAC"
                                }, !1, ["sign"]),
                                d = u(a, n, r, f(a.length << 3)),
                                p = new Uint8Array((await i.subtle.sign("HMAC", c, d)).slice(0, s >> 3));
                            let h, m;
                            try {
                                h = W(o, p)
                            } catch (v) {}
                            if (!h) throw new P;
                            try {
                                m = new Uint8Array(await i.subtle.decrypt({
                                    iv: n,
                                    name: "AES-CBC"
                                }, l, r))
                            } catch (g) {}
                            if (!m) throw new P;
                            return m
                        }(e, t, r, n, o, s);
                    case "A128GCM":
                    case "A192GCM":
                    case "A256GCM":
                        return t instanceof Uint8Array && $(t, parseInt(e.slice(1, 4), 10)), async function(e, t, r, n, o, a) {
                            let s;
                            t instanceof Uint8Array ? s = await i.subtle.importKey("raw", t, "AES-GCM", !1, ["decrypt"]) : (U(t, e, "decrypt"), s = t);
                            try {
                                return new Uint8Array(await i.subtle.decrypt({
                                    additionalData: a,
                                    iv: n,
                                    name: "AES-GCM",
                                    tagLength: 128
                                }, s, u(r, o)))
                            } catch (l) {
                                throw new P
                            }
                        }(e, t, r, n, o, s);
                    default:
                        throw new C("Unsupported JWE Content Encryption Algorithm")
                }
            };
            const Q = async () => {
                    throw new C('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `inflateRaw` decrypt option to provide Inflate Raw implementation.')
                },
                ee = async () => {
                    throw new C('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.')
                };
            var te = (...e) => {
                const t = e.filter(Boolean);
                if (0 === t.length || 1 === t.length) return !0;
                let r;
                for (const n of t) {
                    const e = Object.keys(n);
                    if (r && 0 !== r.size)
                        for (const t of e) {
                            if (r.has(t)) return !1;
                            r.add(t)
                        } else r = new Set(e)
                }
                return !0
            };

            function re(e) {
                if ("object" !== typeof(t = e) || null === t || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
                var t;
                if (null === Object.getPrototypeOf(e)) return !0;
                let r = e;
                for (; null !== Object.getPrototypeOf(r);) r = Object.getPrototypeOf(r);
                return Object.getPrototypeOf(e) === r
            }
            var ne = [{
                hash: "SHA-256",
                name: "HMAC"
            }, !0, ["sign"]];

            function oe(e, t) {
                if (e.algorithm.length !== parseInt(t.slice(1, 4), 10)) throw new TypeError(`Invalid key size for alg: ${t}`)
            }

            function ie(e, t, r) {
                if (a(e)) return U(e, t, r), e;
                if (e instanceof Uint8Array) return i.subtle.importKey("raw", e, "AES-KW", !0, [r]);
                throw new TypeError(G(e, ...X, "Uint8Array"))
            }
            const ae = async (e, t, r) => {
                    const n = await ie(t, e, "wrapKey");
                    oe(n, e);
                    const o = await i.subtle.importKey("raw", r, ...ne);
                    return new Uint8Array(await i.subtle.wrapKey("raw", o, n, "AES-KW"))
                },
                se = async (e, t, r) => {
                    const n = await ie(t, e, "unwrapKey");
                    oe(n, e);
                    const o = await i.subtle.unwrapKey("raw", r, n, "AES-KW", ...ne);
                    return new Uint8Array(await i.subtle.exportKey("raw", o))
                };
            async function le(e, t, r, n, o = new Uint8Array(0), c = new Uint8Array(0)) {
                if (!a(e)) throw new TypeError(G(e, ...X));
                if (U(e, "ECDH"), !a(t)) throw new TypeError(G(t, ...X));
                U(t, "ECDH", "deriveBits");
                const d = u(m(l.encode(r)), m(o), m(c), h(n));
                let p;
                p = "X25519" === e.algorithm.name ? 256 : "X448" === e.algorithm.name ? 448 : Math.ceil(parseInt(e.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
                return async function(e, t, r) {
                    const n = Math.ceil((t >> 3) / 32),
                        o = new Uint8Array(32 * n);
                    for (let i = 0; i < n; i++) {
                        const t = new Uint8Array(4 + e.length + r.length);
                        t.set(h(i + 1)), t.set(e, 4), t.set(r, 4 + e.length), o.set(await s("sha256", t), 32 * i)
                    }
                    return o.slice(0, t >> 3)
                }(new Uint8Array(await i.subtle.deriveBits({
                    name: e.algorithm.name,
                    public: e
                }, t, p)), n, d)
            }

            function ce(e) {
                if (!a(e)) throw new TypeError(G(e, ...X));
                return ["P-256", "P-384", "P-521"].includes(e.algorithm.namedCurve) || "X25519" === e.algorithm.name || "X448" === e.algorithm.name
            }
            async function de(e, t, r, n) {
                ! function(e) {
                    if (!(e instanceof Uint8Array) || e.length < 8) throw new T("PBES2 Salt Input must be 8 or more octets")
                }(e);
                const o = function(e, t) {
                        return u(l.encode(e), new Uint8Array([0]), t)
                    }(t, e),
                    s = parseInt(t.slice(13, 16), 10),
                    c = {
                        hash: `SHA-${t.slice(8,11)}`,
                        iterations: r,
                        name: "PBKDF2",
                        salt: o
                    },
                    d = {
                        length: s,
                        name: "AES-KW"
                    },
                    p = await
                function(e, t) {
                    if (e instanceof Uint8Array) return i.subtle.importKey("raw", e, "PBKDF2", !1, ["deriveBits"]);
                    if (a(e)) return U(e, t, "deriveBits", "deriveKey"), e;
                    throw new TypeError(G(e, ...X, "Uint8Array"))
                }(n, t);
                if (p.usages.includes("deriveBits")) return new Uint8Array(await i.subtle.deriveBits(c, p, s));
                if (p.usages.includes("deriveKey")) return i.subtle.deriveKey(c, p, d, !1, ["wrapKey", "unwrapKey"]);
                throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"')
            }

            function ue(e) {
                switch (e) {
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        return "RSA-OAEP";
                    default:
                        throw new C(`alg ${e} is not supported either by JOSE or your javascript runtime`)
                }
            }
            var pe = (e, t) => {
                if (e.startsWith("RS") || e.startsWith("PS")) {
                    const {
                        modulusLength: r
                    } = t.algorithm;
                    if ("number" !== typeof r || r < 2048) throw new TypeError(`${e} requires key modulusLength to be 2048 bits or larger`)
                }
            };

            function fe(e) {
                switch (e) {
                    case "A128GCM":
                        return 128;
                    case "A192GCM":
                        return 192;
                    case "A256GCM":
                    case "A128CBC-HS256":
                        return 256;
                    case "A192CBC-HS384":
                        return 384;
                    case "A256CBC-HS512":
                        return 512;
                    default:
                        throw new C(`Unsupported JWE Algorithm: ${e}`)
                }
            }
            var he = e => j(new Uint8Array(fe(e) >> 3)),
                me = (e, t) => `-----BEGIN ${t}-----\n${(e.match(/.{1,64}/g)||[]).join("\n")}\n-----END ${t}-----`;
            const ve = async (e, t, r) => {
                    if (!a(r)) throw new TypeError(G(r, ...X));
                    if (!r.extractable) throw new TypeError("CryptoKey is not extractable");
                    if (r.type !== e) throw new TypeError(`key is not a ${e} key`);
                    return me(v(new Uint8Array(await i.subtle.exportKey(t, r))), `${e.toUpperCase()} KEY`)
                },
                ge = (e, t, r = 0) => {
                    0 === r && (t.unshift(t.length), t.unshift(6));
                    let n = e.indexOf(t[0], r);
                    if (-1 === n) return !1;
                    const o = e.subarray(n, n + t.length);
                    return o.length === t.length && (o.every(((e, r) => e === t[r])) || ge(e, t, n + 1))
                },
                ye = e => {
                    switch (!0) {
                        case ge(e, [42, 134, 72, 206, 61, 3, 1, 7]):
                            return "P-256";
                        case ge(e, [43, 129, 4, 0, 34]):
                            return "P-384";
                        case ge(e, [43, 129, 4, 0, 35]):
                            return "P-521";
                        case ge(e, [43, 101, 110]):
                            return "X25519";
                        case ge(e, [43, 101, 111]):
                            return "X448";
                        case ge(e, [43, 101, 112]):
                            return "Ed25519";
                        case ge(e, [43, 101, 113]):
                            return "Ed448";
                        default:
                            throw new C("Invalid or unsupported EC Key Curve or OKP Key Sub Type")
                    }
                },
                be = async (e, t, r, n, o) => {
                    var a;
                    let s, l;
                    const c = new Uint8Array(atob(r.replace(e, "")).split("").map((e => e.charCodeAt(0)))),
                        d = "spki" === t;
                    switch (n) {
                        case "PS256":
                        case "PS384":
                        case "PS512":
                            s = {
                                name: "RSA-PSS",
                                hash: `SHA-${n.slice(-3)}`
                            }, l = d ? ["verify"] : ["sign"];
                            break;
                        case "RS256":
                        case "RS384":
                        case "RS512":
                            s = {
                                name: "RSASSA-PKCS1-v1_5",
                                hash: `SHA-${n.slice(-3)}`
                            }, l = d ? ["verify"] : ["sign"];
                            break;
                        case "RSA-OAEP":
                        case "RSA-OAEP-256":
                        case "RSA-OAEP-384":
                        case "RSA-OAEP-512":
                            s = {
                                name: "RSA-OAEP",
                                hash: `SHA-${parseInt(n.slice(-3),10)||1}`
                            }, l = d ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"];
                            break;
                        case "ES256":
                            s = {
                                name: "ECDSA",
                                namedCurve: "P-256"
                            }, l = d ? ["verify"] : ["sign"];
                            break;
                        case "ES384":
                            s = {
                                name: "ECDSA",
                                namedCurve: "P-384"
                            }, l = d ? ["verify"] : ["sign"];
                            break;
                        case "ES512":
                            s = {
                                name: "ECDSA",
                                namedCurve: "P-521"
                            }, l = d ? ["verify"] : ["sign"];
                            break;
                        case "ECDH-ES":
                        case "ECDH-ES+A128KW":
                        case "ECDH-ES+A192KW":
                        case "ECDH-ES+A256KW":
                            {
                                const e = ye(c);s = e.startsWith("P-") ? {
                                    name: "ECDH",
                                    namedCurve: e
                                } : {
                                    name: e
                                },
                                l = d ? [] : ["deriveBits"];
                                break
                            }
                        case "EdDSA":
                            s = {
                                name: ye(c)
                            }, l = d ? ["verify"] : ["sign"];
                            break;
                        default:
                            throw new C('Invalid or unsupported "alg" (Algorithm) value')
                    }
                    return i.subtle.importKey(t, c, s, null !== (a = null === o || void 0 === o ? void 0 : o.extractable) && void 0 !== a && a, l)
                },
                we = (e, t, r) => be(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", e, t, r);

            function Se(e) {
                let t = [],
                    r = 0;
                for (; r < e.length;) {
                    let n = Ee(e.subarray(r));
                    t.push(n), r += n.byteLength
                }
                return t
            }

            function Ee(e) {
                let t = 0,
                    r = 31 & e[0];
                if (t++, 31 === r) {
                    for (r = 0; e[t] >= 128;) r = 128 * r + e[t] - 128, t++;
                    r = 128 * r + e[t] - 128, t++
                }
                let n = 0;
                if (e[t] < 128) n = e[t], t++;
                else {
                    if (128 === n) {
                        for (n = 0; 0 !== e[t + n] || 0 !== e[t + n + 1];) {
                            if (n > e.byteLength) throw new TypeError("invalid indefinite form length");
                            n++
                        }
                        const r = t + n + 2;
                        return {
                            byteLength: r,
                            contents: e.subarray(t, t + n),
                            raw: e.subarray(0, r)
                        }
                    } {
                        let r = 127 & e[t];
                        t++, n = 0;
                        for (let o = 0; o < r; o++) n = 256 * n + e[t], t++
                    }
                }
                const o = t + n;
                return {
                    byteLength: o,
                    contents: e.subarray(t, o),
                    raw: e.subarray(0, o)
                }
            }

            function xe(e) {
                const t = e.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, ""),
                    r = y(t);
                return me(function(e) {
                    const t = Se(Se(Ee(e).contents)[0].contents);
                    return v(t[160 === t[0].raw[0] ? 6 : 5].raw)
                }(r), "PUBLIC KEY")
            }
            var Ce = async e => {
                var t, r;
                if (!e.alg) throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
                const {
                    algorithm: n,
                    keyUsages: o
                } = function(e) {
                    let t, r;
                    switch (e.kty) {
                        case "oct":
                            switch (e.alg) {
                                case "HS256":
                                case "HS384":
                                case "HS512":
                                    t = {
                                        name: "HMAC",
                                        hash: `SHA-${e.alg.slice(-3)}`
                                    }, r = ["sign", "verify"];
                                    break;
                                case "A128CBC-HS256":
                                case "A192CBC-HS384":
                                case "A256CBC-HS512":
                                    throw new C(`${e.alg} keys cannot be imported as CryptoKey instances`);
                                case "A128GCM":
                                case "A192GCM":
                                case "A256GCM":
                                case "A128GCMKW":
                                case "A192GCMKW":
                                case "A256GCMKW":
                                    t = {
                                        name: "AES-GCM"
                                    }, r = ["encrypt", "decrypt"];
                                    break;
                                case "A128KW":
                                case "A192KW":
                                case "A256KW":
                                    t = {
                                        name: "AES-KW"
                                    }, r = ["wrapKey", "unwrapKey"];
                                    break;
                                case "PBES2-HS256+A128KW":
                                case "PBES2-HS384+A192KW":
                                case "PBES2-HS512+A256KW":
                                    t = {
                                        name: "PBKDF2"
                                    }, r = ["deriveBits"];
                                    break;
                                default:
                                    throw new C('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                            }
                            break;
                        case "RSA":
                            switch (e.alg) {
                                case "PS256":
                                case "PS384":
                                case "PS512":
                                    t = {
                                        name: "RSA-PSS",
                                        hash: `SHA-${e.alg.slice(-3)}`
                                    }, r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "RS256":
                                case "RS384":
                                case "RS512":
                                    t = {
                                        name: "RSASSA-PKCS1-v1_5",
                                        hash: `SHA-${e.alg.slice(-3)}`
                                    }, r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "RSA-OAEP":
                                case "RSA-OAEP-256":
                                case "RSA-OAEP-384":
                                case "RSA-OAEP-512":
                                    t = {
                                        name: "RSA-OAEP",
                                        hash: `SHA-${parseInt(e.alg.slice(-3),10)||1}`
                                    }, r = e.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
                                    break;
                                default:
                                    throw new C('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                            }
                            break;
                        case "EC":
                            switch (e.alg) {
                                case "ES256":
                                    t = {
                                        name: "ECDSA",
                                        namedCurve: "P-256"
                                    }, r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "ES384":
                                    t = {
                                        name: "ECDSA",
                                        namedCurve: "P-384"
                                    }, r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "ES512":
                                    t = {
                                        name: "ECDSA",
                                        namedCurve: "P-521"
                                    }, r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "ECDH-ES":
                                case "ECDH-ES+A128KW":
                                case "ECDH-ES+A192KW":
                                case "ECDH-ES+A256KW":
                                    t = {
                                        name: "ECDH",
                                        namedCurve: e.crv
                                    }, r = e.d ? ["deriveBits"] : [];
                                    break;
                                default:
                                    throw new C('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                            }
                            break;
                        case "OKP":
                            switch (e.alg) {
                                case "EdDSA":
                                    t = {
                                        name: e.crv
                                    }, r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "ECDH-ES":
                                case "ECDH-ES+A128KW":
                                case "ECDH-ES+A192KW":
                                case "ECDH-ES+A256KW":
                                    t = {
                                        name: e.crv
                                    }, r = e.d ? ["deriveBits"] : [];
                                    break;
                                default:
                                    throw new C('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                            }
                            break;
                        default:
                            throw new C('Invalid or unsupported JWK "kty" (Key Type) Parameter value')
                    }
                    return {
                        algorithm: t,
                        keyUsages: r
                    }
                }(e), a = [n, null !== (t = e.ext) && void 0 !== t && t, null !== (r = e.key_ops) && void 0 !== r ? r : o];
                if ("PBKDF2" === n.name) return i.subtle.importKey("raw", b(e.k), ...a);
                const s = { ...e
                };
                return delete s.alg, delete s.use, i.subtle.importKey("jwk", s, ...a)
            };
            async function Pe(e, t, r) {
                if ("string" !== typeof e || 0 !== e.indexOf("-----BEGIN PUBLIC KEY-----")) throw new TypeError('"spki" must be SPKI formatted string');
                return we(e, t, r)
            }
            async function Te(e, t, r) {
                if ("string" !== typeof e || 0 !== e.indexOf("-----BEGIN CERTIFICATE-----")) throw new TypeError('"x509" must be X.509 formatted string');
                return ((e, t, r) => {
                    let n;
                    try {
                        n = xe(e)
                    } catch (o) {
                        throw new TypeError("failed to parse the X.509 certificate", {
                            cause: o
                        })
                    }
                    return we(n, t, r)
                })(e, t, r)
            }
            async function _e(e, t, r) {
                if ("string" !== typeof e || 0 !== e.indexOf("-----BEGIN PRIVATE KEY-----")) throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
                return ((e, t, r) => be(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, "pkcs8", e, t, r))(e, t, r)
            }
            async function Oe(e, t, r) {
                var n;
                if (!re(e)) throw new TypeError("JWK must be an object");
                switch (t || (t = e.alg), e.kty) {
                    case "oct":
                        if ("string" !== typeof e.k || !e.k) throw new TypeError('missing "k" (Key Value) Parameter value');
                        return null !== r && void 0 !== r || (r = !0 !== e.ext), r ? Ce({ ...e,
                            alg: t,
                            ext: null !== (n = e.ext) && void 0 !== n && n
                        }) : b(e.k);
                    case "RSA":
                        if (void 0 !== e.oth) throw new C('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
                    case "EC":
                    case "OKP":
                        return Ce({ ...e,
                            alg: t
                        });
                    default:
                        throw new C('Unsupported "kty" (Key Type) Parameter value')
                }
            }
            var Ae = (e, t, r) => {
                e.startsWith("HS") || "dir" === e || e.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(e) ? ((e, t) => {
                    if (!(t instanceof Uint8Array)) {
                        if (!V(t)) throw new TypeError(q(e, t, ...X, "Uint8Array"));
                        if ("secret" !== t.type) throw new TypeError(`${X.join(" or ")} instances for symmetric algorithms must be of type "secret"`)
                    }
                })(e, t) : ((e, t, r) => {
                    if (!V(t)) throw new TypeError(q(e, t, ...X));
                    if ("secret" === t.type) throw new TypeError(`${X.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
                    if ("sign" === r && "public" === t.type) throw new TypeError(`${X.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
                    if ("decrypt" === r && "public" === t.type) throw new TypeError(`${X.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
                    if (t.algorithm && "verify" === r && "private" === t.type) throw new TypeError(`${X.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
                    if (t.algorithm && "encrypt" === r && "private" === t.type) throw new TypeError(`${X.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`)
                })(e, t, r)
            };
            var ke = async (e, t, r, n, o) => {
                if (!a(r) && !(r instanceof Uint8Array)) throw new TypeError(G(r, ...X, "Uint8Array"));
                switch (D(e, n), e) {
                    case "A128CBC-HS256":
                    case "A192CBC-HS384":
                    case "A256CBC-HS512":
                        return r instanceof Uint8Array && $(r, parseInt(e.slice(-3), 10)), async function(e, t, r, n, o) {
                            if (!(r instanceof Uint8Array)) throw new TypeError(G(r, "Uint8Array"));
                            const a = parseInt(e.slice(1, 4), 10),
                                s = await i.subtle.importKey("raw", r.subarray(a >> 3), "AES-CBC", !1, ["encrypt"]),
                                l = await i.subtle.importKey("raw", r.subarray(0, a >> 3), {
                                    hash: "SHA-" + (a << 1),
                                    name: "HMAC"
                                }, !1, ["sign"]),
                                c = new Uint8Array(await i.subtle.encrypt({
                                    iv: n,
                                    name: "AES-CBC"
                                }, s, t)),
                                d = u(o, n, c, f(o.length << 3));
                            return {
                                ciphertext: c,
                                tag: new Uint8Array((await i.subtle.sign("HMAC", l, d)).slice(0, a >> 3))
                            }
                        }(e, t, r, n, o);
                    case "A128GCM":
                    case "A192GCM":
                    case "A256GCM":
                        return r instanceof Uint8Array && $(r, parseInt(e.slice(1, 4), 10)), async function(e, t, r, n, o) {
                            let a;
                            r instanceof Uint8Array ? a = await i.subtle.importKey("raw", r, "AES-GCM", !1, ["encrypt"]) : (U(r, e, "encrypt"), a = r);
                            const s = new Uint8Array(await i.subtle.encrypt({
                                    additionalData: o,
                                    iv: n,
                                    name: "AES-GCM",
                                    tagLength: 128
                                }, a, t)),
                                l = s.slice(-16);
                            return {
                                ciphertext: s.slice(0, -16),
                                tag: l
                            }
                        }(e, t, r, n, o);
                    default:
                        throw new C("Unsupported JWE Content Encryption Algorithm")
                }
            };
            var Me = async function(e, t, r, n, o) {
                switch (Ae(e, t, "decrypt"), e) {
                    case "dir":
                        if (void 0 !== r) throw new T("Encountered unexpected JWE Encrypted Key");
                        return t;
                    case "ECDH-ES":
                        if (void 0 !== r) throw new T("Encountered unexpected JWE Encrypted Key");
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        {
                            if (!re(n.epk)) throw new T('JOSE Header "epk" (Ephemeral Public Key) missing or invalid');
                            if (!ce(t)) throw new C("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                            const o = await Oe(n.epk, e);
                            let i, a;
                            if (void 0 !== n.apu) {
                                if ("string" !== typeof n.apu) throw new T('JOSE Header "apu" (Agreement PartyUInfo) invalid');
                                i = b(n.apu)
                            }
                            if (void 0 !== n.apv) {
                                if ("string" !== typeof n.apv) throw new T('JOSE Header "apv" (Agreement PartyVInfo) invalid');
                                a = b(n.apv)
                            }
                            const s = await le(o, t, "ECDH-ES" === e ? n.enc : e, "ECDH-ES" === e ? fe(n.enc) : parseInt(e.slice(-5, -2), 10), i, a);
                            if ("ECDH-ES" === e) return s;
                            if (void 0 === r) throw new T("JWE Encrypted Key missing");
                            return se(e.slice(-6), s, r)
                        }
                    case "RSA1_5":
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        if (void 0 === r) throw new T("JWE Encrypted Key missing");
                        return (async (e, t, r) => {
                            if (!a(t)) throw new TypeError(G(t, ...X));
                            if (U(t, e, "decrypt", "unwrapKey"), pe(e, t), t.usages.includes("decrypt")) return new Uint8Array(await i.subtle.decrypt(ue(e), t, r));
                            if (t.usages.includes("unwrapKey")) {
                                const n = await i.subtle.unwrapKey("raw", r, t, ue(e), ...ne);
                                return new Uint8Array(await i.subtle.exportKey("raw", n))
                            }
                            throw new TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation')
                        })(e, t, r);
                    case "PBES2-HS256+A128KW":
                    case "PBES2-HS384+A192KW":
                    case "PBES2-HS512+A256KW":
                        {
                            if (void 0 === r) throw new T("JWE Encrypted Key missing");
                            if ("number" !== typeof n.p2c) throw new T('JOSE Header "p2c" (PBES2 Count) missing or invalid');
                            const i = (null === o || void 0 === o ? void 0 : o.maxPBES2Count) || 1e4;
                            if (n.p2c > i) throw new T('JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds');
                            if ("string" !== typeof n.p2s) throw new T('JOSE Header "p2s" (PBES2 Salt) missing or invalid');
                            return (async (e, t, r, n, o) => {
                                const i = await de(o, e, n, t);
                                return se(e.slice(-6), i, r)
                            })(e, t, r, n.p2c, b(n.p2s))
                        }
                    case "A128KW":
                    case "A192KW":
                    case "A256KW":
                        if (void 0 === r) throw new T("JWE Encrypted Key missing");
                        return se(e, t, r);
                    case "A128GCMKW":
                    case "A192GCMKW":
                    case "A256GCMKW":
                        if (void 0 === r) throw new T("JWE Encrypted Key missing");
                        if ("string" !== typeof n.iv) throw new T('JOSE Header "iv" (Initialization Vector) missing or invalid');
                        if ("string" !== typeof n.tag) throw new T('JOSE Header "tag" (Authentication Tag) missing or invalid');
                        return async function(e, t, r, n, o) {
                            const i = e.slice(0, 7);
                            return Y(i, t, r, n, o, new Uint8Array(0))
                        }(e, t, r, b(n.iv), b(n.tag));
                    default:
                        throw new C('Invalid or unsupported "alg" (JWE Algorithm) header value')
                }
            };
            var Re = function(e, t, r, n, o) {
                if (void 0 !== o.crit && void 0 === n.crit) throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
                if (!n || void 0 === n.crit) return new Set;
                if (!Array.isArray(n.crit) || 0 === n.crit.length || n.crit.some((e => "string" !== typeof e || 0 === e.length))) throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
                let i;
                i = void 0 !== r ? new Map([...Object.entries(r), ...t.entries()]) : t;
                for (const a of n.crit) {
                    if (!i.has(a)) throw new C(`Extension Header Parameter "${a}" is not recognized`);
                    if (void 0 === o[a]) throw new e(`Extension Header Parameter "${a}" is missing`);
                    if (i.get(a) && void 0 === n[a]) throw new e(`Extension Header Parameter "${a}" MUST be integrity protected`)
                }
                return new Set(n.crit)
            };
            var Ze = (e, t) => {
                if (void 0 !== t && (!Array.isArray(t) || t.some((e => "string" !== typeof e)))) throw new TypeError(`"${e}" option must be an array of strings`);
                if (t) return new Set(t)
            };
            async function Ie(e, t, r) {
                var n;
                if (!re(e)) throw new T("Flattened JWE must be an object");
                if (void 0 === e.protected && void 0 === e.header && void 0 === e.unprotected) throw new T("JOSE Header missing");
                if ("string" !== typeof e.iv) throw new T("JWE Initialization Vector missing or incorrect type");
                if ("string" !== typeof e.ciphertext) throw new T("JWE Ciphertext missing or incorrect type");
                if ("string" !== typeof e.tag) throw new T("JWE Authentication Tag missing or incorrect type");
                if (void 0 !== e.protected && "string" !== typeof e.protected) throw new T("JWE Protected Header incorrect type");
                if (void 0 !== e.encrypted_key && "string" !== typeof e.encrypted_key) throw new T("JWE Encrypted Key incorrect type");
                if (void 0 !== e.aad && "string" !== typeof e.aad) throw new T("JWE AAD incorrect type");
                if (void 0 !== e.header && !re(e.header)) throw new T("JWE Shared Unprotected Header incorrect type");
                if (void 0 !== e.unprotected && !re(e.unprotected)) throw new T("JWE Per-Recipient Unprotected Header incorrect type");
                let o;
                if (e.protected) try {
                    const t = b(e.protected);
                    o = JSON.parse(c.decode(t))
                } catch (P) {
                    throw new T("JWE Protected Header is invalid")
                }
                if (!te(o, e.header, e.unprotected)) throw new T("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
                const i = { ...o,
                    ...e.header,
                    ...e.unprotected
                };
                if (Re(T, new Map, null === r || void 0 === r ? void 0 : r.crit, o, i), void 0 !== i.zip) {
                    if (!o || !o.zip) throw new T('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
                    if ("DEF" !== i.zip) throw new C('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value')
                }
                const {
                    alg: a,
                    enc: s
                } = i;
                if ("string" !== typeof a || !a) throw new T("missing JWE Algorithm (alg) in JWE Header");
                if ("string" !== typeof s || !s) throw new T("missing JWE Encryption Algorithm (enc) in JWE Header");
                const d = r && Ze("keyManagementAlgorithms", r.keyManagementAlgorithms),
                    p = r && Ze("contentEncryptionAlgorithms", r.contentEncryptionAlgorithms);
                if (d && !d.has(a)) throw new x('"alg" (Algorithm) Header Parameter not allowed');
                if (p && !p.has(s)) throw new x('"enc" (Encryption Algorithm) Header Parameter not allowed');
                let f;
                void 0 !== e.encrypted_key && (f = b(e.encrypted_key));
                let h, m = !1;
                "function" === typeof t && (t = await t(o, e), m = !0);
                try {
                    h = await Me(a, t, f, i, r)
                } catch (_) {
                    if (_ instanceof TypeError || _ instanceof T || _ instanceof C) throw _;
                    h = he(s)
                }
                const v = b(e.iv),
                    g = b(e.tag),
                    y = l.encode(null !== (n = e.protected) && void 0 !== n ? n : "");
                let w;
                w = void 0 !== e.aad ? u(y, l.encode("."), l.encode(e.aad)) : y;
                let S = await Y(s, h, b(e.ciphertext), v, g, w);
                "DEF" === i.zip && (S = await ((null === r || void 0 === r ? void 0 : r.inflateRaw) || Q)(S));
                const E = {
                    plaintext: S
                };
                return void 0 !== e.protected && (E.protectedHeader = o), void 0 !== e.aad && (E.additionalAuthenticatedData = b(e.aad)), void 0 !== e.unprotected && (E.sharedUnprotectedHeader = e.unprotected), void 0 !== e.header && (E.unprotectedHeader = e.header), m ? { ...E,
                    key: t
                } : E
            }
            async function je(e, t, r) {
                if (e instanceof Uint8Array && (e = c.decode(e)), "string" !== typeof e) throw new T("Compact JWE must be a string or Uint8Array");
                const {
                    0: n,
                    1: o,
                    2: i,
                    3: a,
                    4: s,
                    length: l
                } = e.split(".");
                if (5 !== l) throw new T("Invalid Compact JWE");
                const d = await Ie({
                        ciphertext: a,
                        iv: i || void 0,
                        protected: n || void 0,
                        tag: s || void 0,
                        encrypted_key: o || void 0
                    }, t, r),
                    u = {
                        plaintext: d.plaintext,
                        protectedHeader: d.protectedHeader
                    };
                return "function" === typeof t ? { ...u,
                    key: d.key
                } : u
            }
            async function He(e, t, r) {
                if (!re(e)) throw new T("General JWE must be an object");
                if (!Array.isArray(e.recipients) || !e.recipients.every(re)) throw new T("JWE Recipients missing or incorrect type");
                if (!e.recipients.length) throw new T("JWE Recipients has no members");
                for (const o of e.recipients) try {
                    return await Ie({
                        aad: e.aad,
                        ciphertext: e.ciphertext,
                        encrypted_key: o.encrypted_key,
                        header: o.header,
                        iv: e.iv,
                        protected: e.protected,
                        tag: e.tag,
                        unprotected: e.unprotected
                    }, t, r)
                } catch (n) {}
                throw new P
            }
            var Le = async e => {
                if (e instanceof Uint8Array) return {
                    kty: "oct",
                    k: g(e)
                };
                if (!a(e)) throw new TypeError(G(e, ...X, "Uint8Array"));
                if (!e.extractable) throw new TypeError("non-extractable CryptoKey cannot be exported as a JWK");
                const {
                    ext: t,
                    key_ops: r,
                    alg: n,
                    use: o,
                    ...s
                } = await i.subtle.exportKey("jwk", e);
                return s
            };
            async function De(e) {
                return (e => ve("public", "spki", e))(e)
            }
            async function $e(e) {
                return (e => ve("private", "pkcs8", e))(e)
            }
            async function We(e) {
                return Le(e)
            }
            var ze = async function(e, t, r, n, o = {}) {
                let s, l, c;
                switch (Ae(e, r, "encrypt"), e) {
                    case "dir":
                        c = r;
                        break;
                    case "ECDH-ES":
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        {
                            if (!ce(r)) throw new C("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                            const {
                                apu: d,
                                apv: u
                            } = o;
                            let {
                                epk: p
                            } = o;p || (p = (await async function(e) {
                                if (!a(e)) throw new TypeError(G(e, ...X));
                                return i.subtle.generateKey(e.algorithm, !0, ["deriveBits"])
                            }(r)).privateKey);
                            const {
                                x: f,
                                y: h,
                                crv: m,
                                kty: v
                            } = await We(p),
                            y = await le(r, p, "ECDH-ES" === e ? t : e, "ECDH-ES" === e ? fe(t) : parseInt(e.slice(-5, -2), 10), d, u);
                            if (l = {
                                    epk: {
                                        x: f,
                                        crv: m,
                                        kty: v
                                    }
                                }, "EC" === v && (l.epk.y = h), d && (l.apu = g(d)), u && (l.apv = g(u)), "ECDH-ES" === e) {
                                c = y;
                                break
                            }
                            c = n || he(t);
                            const b = e.slice(-6);s = await ae(b, y, c);
                            break
                        }
                    case "RSA1_5":
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        c = n || he(t), s = await (async (e, t, r) => {
                            if (!a(t)) throw new TypeError(G(t, ...X));
                            if (U(t, e, "encrypt", "wrapKey"), pe(e, t), t.usages.includes("encrypt")) return new Uint8Array(await i.subtle.encrypt(ue(e), t, r));
                            if (t.usages.includes("wrapKey")) {
                                const n = await i.subtle.importKey("raw", r, ...ne);
                                return new Uint8Array(await i.subtle.wrapKey("raw", n, t, ue(e)))
                            }
                            throw new TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation')
                        })(e, r, c);
                        break;
                    case "PBES2-HS256+A128KW":
                    case "PBES2-HS384+A192KW":
                    case "PBES2-HS512+A256KW":
                        {
                            c = n || he(t);
                            const {
                                p2c: i,
                                p2s: a
                            } = o;
                            ({
                                encryptedKey: s,
                                ...l
                            } = await (async (e, t, r, n = 2048, o = j(new Uint8Array(16))) => {
                                const i = await de(o, e, n, t);
                                return {
                                    encryptedKey: await ae(e.slice(-6), i, r),
                                    p2c: n,
                                    p2s: g(o)
                                }
                            })(e, r, c, i, a));
                            break
                        }
                    case "A128KW":
                    case "A192KW":
                    case "A256KW":
                        c = n || he(t), s = await ae(e, r, c);
                        break;
                    case "A128GCMKW":
                    case "A192GCMKW":
                    case "A256GCMKW":
                        {
                            c = n || he(t);
                            const {
                                iv: i
                            } = o;
                            ({
                                encryptedKey: s,
                                ...l
                            } = await async function(e, t, r, n) {
                                const o = e.slice(0, 7);
                                n || (n = L(o));
                                const {
                                    ciphertext: i,
                                    tag: a
                                } = await ke(o, r, t, n, new Uint8Array(0));
                                return {
                                    encryptedKey: i,
                                    iv: g(n),
                                    tag: g(a)
                                }
                            }(e, r, c, i));
                            break
                        }
                    default:
                        throw new C('Invalid or unsupported "alg" (JWE Algorithm) header value')
                }
                return {
                    cek: c,
                    encryptedKey: s,
                    parameters: l
                }
            };
            const Ne = Symbol();
            class Be {
                constructor(e) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("plaintext must be an instance of Uint8Array");
                    this._plaintext = e
                }
                setKeyManagementParameters(e) {
                    if (this._keyManagementParameters) throw new TypeError("setKeyManagementParameters can only be called once");
                    return this._keyManagementParameters = e, this
                }
                setProtectedHeader(e) {
                    if (this._protectedHeader) throw new TypeError("setProtectedHeader can only be called once");
                    return this._protectedHeader = e, this
                }
                setSharedUnprotectedHeader(e) {
                    if (this._sharedUnprotectedHeader) throw new TypeError("setSharedUnprotectedHeader can only be called once");
                    return this._sharedUnprotectedHeader = e, this
                }
                setUnprotectedHeader(e) {
                    if (this._unprotectedHeader) throw new TypeError("setUnprotectedHeader can only be called once");
                    return this._unprotectedHeader = e, this
                }
                setAdditionalAuthenticatedData(e) {
                    return this._aad = e, this
                }
                setContentEncryptionKey(e) {
                    if (this._cek) throw new TypeError("setContentEncryptionKey can only be called once");
                    return this._cek = e, this
                }
                setInitializationVector(e) {
                    if (this._iv) throw new TypeError("setInitializationVector can only be called once");
                    return this._iv = e, this
                }
                async encrypt(e, t) {
                    if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) throw new T("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
                    if (!te(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) throw new T("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
                    const r = { ...this._protectedHeader,
                        ...this._unprotectedHeader,
                        ...this._sharedUnprotectedHeader
                    };
                    if (Re(T, new Map, null === t || void 0 === t ? void 0 : t.crit, this._protectedHeader, r), void 0 !== r.zip) {
                        if (!this._protectedHeader || !this._protectedHeader.zip) throw new T('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
                        if ("DEF" !== r.zip) throw new C('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value')
                    }
                    const {
                        alg: n,
                        enc: o
                    } = r;
                    if ("string" !== typeof n || !n) throw new T('JWE "alg" (Algorithm) Header Parameter missing or invalid');
                    if ("string" !== typeof o || !o) throw new T('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
                    let i, a, s, d, p, f, h;
                    if ("dir" === n) {
                        if (this._cek) throw new TypeError("setContentEncryptionKey cannot be called when using Direct Encryption")
                    } else if ("ECDH-ES" === n && this._cek) throw new TypeError("setContentEncryptionKey cannot be called when using Direct Key Agreement"); {
                        let r;
                        ({
                            cek: a,
                            encryptedKey: i,
                            parameters: r
                        } = await ze(n, o, e, this._cek, this._keyManagementParameters)), r && (t && Ne in t ? this._unprotectedHeader ? this._unprotectedHeader = { ...this._unprotectedHeader,
                            ...r
                        } : this.setUnprotectedHeader(r) : this._protectedHeader ? this._protectedHeader = { ...this._protectedHeader,
                            ...r
                        } : this.setProtectedHeader(r))
                    }
                    if (this._iv || (this._iv = L(o)), d = this._protectedHeader ? l.encode(g(JSON.stringify(this._protectedHeader))) : l.encode(""), this._aad ? (p = g(this._aad), s = u(d, l.encode("."), l.encode(p))) : s = d, "DEF" === r.zip) {
                        const e = await ((null === t || void 0 === t ? void 0 : t.deflateRaw) || ee)(this._plaintext);
                        ({
                            ciphertext: f,
                            tag: h
                        } = await ke(o, e, a, this._iv, s))
                    } else({
                        ciphertext: f,
                        tag: h
                    } = await ke(o, this._plaintext, a, this._iv, s));
                    const m = {
                        ciphertext: g(f),
                        iv: g(this._iv),
                        tag: g(h)
                    };
                    return i && (m.encrypted_key = g(i)), p && (m.aad = p), this._protectedHeader && (m.protected = c.decode(d)), this._sharedUnprotectedHeader && (m.unprotected = this._sharedUnprotectedHeader), this._unprotectedHeader && (m.header = this._unprotectedHeader), m
                }
            }
            class Fe {
                constructor(e, t, r) {
                    this.parent = e, this.key = t, this.options = r
                }
                setUnprotectedHeader(e) {
                    if (this.unprotectedHeader) throw new TypeError("setUnprotectedHeader can only be called once");
                    return this.unprotectedHeader = e, this
                }
                addRecipient(...e) {
                    return this.parent.addRecipient(...e)
                }
                encrypt(...e) {
                    return this.parent.encrypt(...e)
                }
                done() {
                    return this.parent
                }
            }
            class Ke {
                constructor(e) {
                    this._recipients = [], this._plaintext = e
                }
                addRecipient(e, t) {
                    const r = new Fe(this, e, {
                        crit: null === t || void 0 === t ? void 0 : t.crit
                    });
                    return this._recipients.push(r), r
                }
                setProtectedHeader(e) {
                    if (this._protectedHeader) throw new TypeError("setProtectedHeader can only be called once");
                    return this._protectedHeader = e, this
                }
                setSharedUnprotectedHeader(e) {
                    if (this._unprotectedHeader) throw new TypeError("setSharedUnprotectedHeader can only be called once");
                    return this._unprotectedHeader = e, this
                }
                setAdditionalAuthenticatedData(e) {
                    return this._aad = e, this
                }
                async encrypt(e) {
                    var t, r, n;
                    if (!this._recipients.length) throw new T("at least one recipient must be added");
                    if (e = {
                            deflateRaw: null === e || void 0 === e ? void 0 : e.deflateRaw
                        }, 1 === this._recipients.length) {
                        const [t] = this._recipients, r = await new Be(this._plaintext).setAdditionalAuthenticatedData(this._aad).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(t.unprotectedHeader).encrypt(t.key, { ...t.options,
                            ...e
                        });
                        let n = {
                            ciphertext: r.ciphertext,
                            iv: r.iv,
                            recipients: [{}],
                            tag: r.tag
                        };
                        return r.aad && (n.aad = r.aad), r.protected && (n.protected = r.protected), r.unprotected && (n.unprotected = r.unprotected), r.encrypted_key && (n.recipients[0].encrypted_key = r.encrypted_key), r.header && (n.recipients[0].header = r.header), n
                    }
                    let o;
                    for (let s = 0; s < this._recipients.length; s++) {
                        const e = this._recipients[s];
                        if (!te(this._protectedHeader, this._unprotectedHeader, e.unprotectedHeader)) throw new T("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
                        const t = { ...this._protectedHeader,
                                ...this._unprotectedHeader,
                                ...e.unprotectedHeader
                            },
                            {
                                alg: r
                            } = t;
                        if ("string" !== typeof r || !r) throw new T('JWE "alg" (Algorithm) Header Parameter missing or invalid');
                        if ("dir" === r || "ECDH-ES" === r) throw new T('"dir" and "ECDH-ES" alg may only be used with a single recipient');
                        if ("string" !== typeof t.enc || !t.enc) throw new T('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
                        if (o) {
                            if (o !== t.enc) throw new T('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients')
                        } else o = t.enc;
                        if (Re(T, new Map, e.options.crit, this._protectedHeader, t), void 0 !== t.zip && (!this._protectedHeader || !this._protectedHeader.zip)) throw new T('JWE "zip" (Compression Algorithm) Header MUST be integrity protected')
                    }
                    const i = he(o);
                    let a = {
                        ciphertext: "",
                        iv: "",
                        recipients: [],
                        tag: ""
                    };
                    for (let s = 0; s < this._recipients.length; s++) {
                        const l = this._recipients[s],
                            c = {};
                        a.recipients.push(c);
                        const d = { ...this._protectedHeader,
                            ...this._unprotectedHeader,
                            ...l.unprotectedHeader
                        }.alg.startsWith("PBES2") ? 2048 + s : void 0;
                        if (0 === s) {
                            const t = await new Be(this._plaintext).setAdditionalAuthenticatedData(this._aad).setContentEncryptionKey(i).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(l.unprotectedHeader).setKeyManagementParameters({
                                p2c: d
                            }).encrypt(l.key, { ...l.options,
                                ...e,
                                [Ne]: !0
                            });
                            a.ciphertext = t.ciphertext, a.iv = t.iv, a.tag = t.tag, t.aad && (a.aad = t.aad), t.protected && (a.protected = t.protected), t.unprotected && (a.unprotected = t.unprotected), c.encrypted_key = t.encrypted_key, t.header && (c.header = t.header);
                            continue
                        }
                        const {
                            encryptedKey: u,
                            parameters: p
                        } = await ze((null === (t = l.unprotectedHeader) || void 0 === t ? void 0 : t.alg) || (null === (r = this._protectedHeader) || void 0 === r ? void 0 : r.alg) || (null === (n = this._unprotectedHeader) || void 0 === n ? void 0 : n.alg), o, l.key, i, {
                            p2c: d
                        });
                        c.encrypted_key = g(u), (l.unprotectedHeader || p) && (c.header = { ...l.unprotectedHeader,
                            ...p
                        })
                    }
                    return a
                }
            }

            function Ue(e, t) {
                const r = `SHA-${e.slice(-3)}`;
                switch (e) {
                    case "HS256":
                    case "HS384":
                    case "HS512":
                        return {
                            hash: r,
                            name: "HMAC"
                        };
                    case "PS256":
                    case "PS384":
                    case "PS512":
                        return {
                            hash: r,
                            name: "RSA-PSS",
                            saltLength: e.slice(-3) >> 3
                        };
                    case "RS256":
                    case "RS384":
                    case "RS512":
                        return {
                            hash: r,
                            name: "RSASSA-PKCS1-v1_5"
                        };
                    case "ES256":
                    case "ES384":
                    case "ES512":
                        return {
                            hash: r,
                            name: "ECDSA",
                            namedCurve: t.namedCurve
                        };
                    case "EdDSA":
                        return {
                            name: t.name
                        };
                    default:
                        throw new C(`alg ${e} is not supported either by JOSE or your javascript runtime`)
                }
            }

            function Je(e, t, r) {
                if (a(t)) return K(t, e, r), t;
                if (t instanceof Uint8Array) {
                    if (!e.startsWith("HS")) throw new TypeError(G(t, ...X));
                    return i.subtle.importKey("raw", t, {
                        hash: `SHA-${e.slice(-3)}`,
                        name: "HMAC"
                    }, !1, [r])
                }
                throw new TypeError(G(t, ...X, "Uint8Array"))
            }
            var Ge = async (e, t, r, n) => {
                const o = await Je(e, t, "verify");
                pe(e, o);
                const a = Ue(e, o.algorithm);
                try {
                    return await i.subtle.verify(a, o, r, n)
                } catch (s) {
                    return !1
                }
            };
            async function qe(e, t, r) {
                var n;
                if (!re(e)) throw new _("Flattened JWS must be an object");
                if (void 0 === e.protected && void 0 === e.header) throw new _('Flattened JWS must have either of the "protected" or "header" members');
                if (void 0 !== e.protected && "string" !== typeof e.protected) throw new _("JWS Protected Header incorrect type");
                if (void 0 === e.payload) throw new _("JWS Payload missing");
                if ("string" !== typeof e.signature) throw new _("JWS Signature missing or incorrect type");
                if (void 0 !== e.header && !re(e.header)) throw new _("JWS Unprotected Header incorrect type");
                let o = {};
                if (e.protected) try {
                    const t = b(e.protected);
                    o = JSON.parse(c.decode(t))
                } catch (g) {
                    throw new _("JWS Protected Header is invalid")
                }
                if (!te(o, e.header)) throw new _("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
                const i = { ...o,
                    ...e.header
                };
                let a = !0;
                if (Re(_, new Map([
                        ["b64", !0]
                    ]), null === r || void 0 === r ? void 0 : r.crit, o, i).has("b64") && (a = o.b64, "boolean" !== typeof a)) throw new _('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
                const {
                    alg: s
                } = i;
                if ("string" !== typeof s || !s) throw new _('JWS "alg" (Algorithm) Header Parameter missing or invalid');
                const d = r && Ze("algorithms", r.algorithms);
                if (d && !d.has(s)) throw new x('"alg" (Algorithm) Header Parameter not allowed');
                if (a) {
                    if ("string" !== typeof e.payload) throw new _("JWS Payload must be a string")
                } else if ("string" !== typeof e.payload && !(e.payload instanceof Uint8Array)) throw new _("JWS Payload must be a string or an Uint8Array instance");
                let p = !1;
                "function" === typeof t && (t = await t(o, e), p = !0), Ae(s, t, "verify");
                const f = u(l.encode(null !== (n = e.protected) && void 0 !== n ? n : ""), l.encode("."), "string" === typeof e.payload ? l.encode(e.payload) : e.payload),
                    h = b(e.signature);
                if (!(await Ge(s, t, h, f))) throw new I;
                let m;
                m = a ? b(e.payload) : "string" === typeof e.payload ? l.encode(e.payload) : e.payload;
                const v = {
                    payload: m
                };
                return void 0 !== e.protected && (v.protectedHeader = o), void 0 !== e.header && (v.unprotectedHeader = e.header), p ? { ...v,
                    key: t
                } : v
            }
            async function Ve(e, t, r) {
                if (e instanceof Uint8Array && (e = c.decode(e)), "string" !== typeof e) throw new _("Compact JWS must be a string or Uint8Array");
                const {
                    0: n,
                    1: o,
                    2: i,
                    length: a
                } = e.split(".");
                if (3 !== a) throw new _("Invalid Compact JWS");
                const s = await qe({
                        payload: o,
                        protected: n,
                        signature: i
                    }, t, r),
                    l = {
                        payload: s.payload,
                        protectedHeader: s.protectedHeader
                    };
                return "function" === typeof t ? { ...l,
                    key: s.key
                } : l
            }
            async function Xe(e, t, r) {
                if (!re(e)) throw new _("General JWS must be an object");
                if (!Array.isArray(e.signatures) || !e.signatures.every(re)) throw new _("JWS Signatures missing or incorrect type");
                for (const o of e.signatures) try {
                    return await qe({
                        header: o.header,
                        payload: e.payload,
                        protected: o.protected,
                        signature: o.signature
                    }, t, r)
                } catch (n) {}
                throw new I
            }
            var Ye = e => Math.floor(e.getTime() / 1e3);
            const Qe = 86400,
                et = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
            var tt = e => {
                const t = et.exec(e);
                if (!t) throw new TypeError("Invalid time period format");
                const r = parseFloat(t[1]);
                switch (t[2].toLowerCase()) {
                    case "sec":
                    case "secs":
                    case "second":
                    case "seconds":
                    case "s":
                        return Math.round(r);
                    case "minute":
                    case "minutes":
                    case "min":
                    case "mins":
                    case "m":
                        return Math.round(60 * r);
                    case "hour":
                    case "hours":
                    case "hr":
                    case "hrs":
                    case "h":
                        return Math.round(3600 * r);
                    case "day":
                    case "days":
                    case "d":
                        return Math.round(r * Qe);
                    case "week":
                    case "weeks":
                    case "w":
                        return Math.round(604800 * r);
                    default:
                        return Math.round(31557600 * r)
                }
            };
            const rt = e => e.toLowerCase().replace(/^application\//, "");
            var nt = (e, t, r = {}) => {
                const {
                    typ: n
                } = r;
                if (n && ("string" !== typeof e.typ || rt(e.typ) !== rt(n))) throw new S('unexpected "typ" JWT header value', "typ", "check_failed");
                let o;
                try {
                    o = JSON.parse(c.decode(t))
                } catch (v) {}
                if (!re(o)) throw new O("JWT Claims Set must be a top-level JSON object");
                const {
                    requiredClaims: i = [],
                    issuer: a,
                    subject: s,
                    audience: l,
                    maxTokenAge: d
                } = r;
                void 0 !== d && i.push("iat"), void 0 !== l && i.push("aud"), void 0 !== s && i.push("sub"), void 0 !== a && i.push("iss");
                for (const c of new Set(i.reverse()))
                    if (!(c in o)) throw new S(`missing required "${c}" claim`, c, "missing");
                if (a && !(Array.isArray(a) ? a : [a]).includes(o.iss)) throw new S('unexpected "iss" claim value', "iss", "check_failed");
                if (s && o.sub !== s) throw new S('unexpected "sub" claim value', "sub", "check_failed");
                if (l && (u = o.aud, p = "string" === typeof l ? [l] : l, !("string" === typeof u ? p.includes(u) : Array.isArray(u) && p.some(Set.prototype.has.bind(new Set(u)))))) throw new S('unexpected "aud" claim value', "aud", "check_failed");
                var u, p;
                let f;
                switch (typeof r.clockTolerance) {
                    case "string":
                        f = tt(r.clockTolerance);
                        break;
                    case "number":
                        f = r.clockTolerance;
                        break;
                    case "undefined":
                        f = 0;
                        break;
                    default:
                        throw new TypeError("Invalid clockTolerance option type")
                }
                const {
                    currentDate: h
                } = r, m = Ye(h || new Date);
                if ((void 0 !== o.iat || d) && "number" !== typeof o.iat) throw new S('"iat" claim must be a number', "iat", "invalid");
                if (void 0 !== o.nbf) {
                    if ("number" !== typeof o.nbf) throw new S('"nbf" claim must be a number', "nbf", "invalid");
                    if (o.nbf > m + f) throw new S('"nbf" claim timestamp check failed', "nbf", "check_failed")
                }
                if (void 0 !== o.exp) {
                    if ("number" !== typeof o.exp) throw new S('"exp" claim must be a number', "exp", "invalid");
                    if (o.exp <= m - f) throw new E('"exp" claim timestamp check failed', "exp", "check_failed")
                }
                if (d) {
                    const e = m - o.iat;
                    if (e - f > ("number" === typeof d ? d : tt(d))) throw new E('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
                    if (e < 0 - f) throw new S('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed")
                }
                return o
            };
            async function ot(e, t, r) {
                var n;
                const o = await Ve(e, t, r);
                if ((null === (n = o.protectedHeader.crit) || void 0 === n ? void 0 : n.includes("b64")) && !1 === o.protectedHeader.b64) throw new O("JWTs MUST NOT use unencoded payload");
                const i = {
                    payload: nt(o.protectedHeader, o.payload, r),
                    protectedHeader: o.protectedHeader
                };
                return "function" === typeof t ? { ...i,
                    key: o.key
                } : i
            }
            async function it(e, t, r) {
                const n = await je(e, t, r),
                    o = nt(n.protectedHeader, n.plaintext, r),
                    {
                        protectedHeader: i
                    } = n;
                if (void 0 !== i.iss && i.iss !== o.iss) throw new S('replicated "iss" claim header parameter mismatch', "iss", "mismatch");
                if (void 0 !== i.sub && i.sub !== o.sub) throw new S('replicated "sub" claim header parameter mismatch', "sub", "mismatch");
                if (void 0 !== i.aud && JSON.stringify(i.aud) !== JSON.stringify(o.aud)) throw new S('replicated "aud" claim header parameter mismatch', "aud", "mismatch");
                const a = {
                    payload: o,
                    protectedHeader: i
                };
                return "function" === typeof t ? { ...a,
                    key: n.key
                } : a
            }
            class at {
                constructor(e) {
                    this._flattened = new Be(e)
                }
                setContentEncryptionKey(e) {
                    return this._flattened.setContentEncryptionKey(e), this
                }
                setInitializationVector(e) {
                    return this._flattened.setInitializationVector(e), this
                }
                setProtectedHeader(e) {
                    return this._flattened.setProtectedHeader(e), this
                }
                setKeyManagementParameters(e) {
                    return this._flattened.setKeyManagementParameters(e), this
                }
                async encrypt(e, t) {
                    const r = await this._flattened.encrypt(e, t);
                    return [r.protected, r.encrypted_key, r.iv, r.ciphertext, r.tag].join(".")
                }
            }
            var st = async (e, t, r) => {
                const n = await Je(e, t, "sign");
                pe(e, n);
                const o = await i.subtle.sign(Ue(e, n.algorithm), n, r);
                return new Uint8Array(o)
            };
            class lt {
                constructor(e) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("payload must be an instance of Uint8Array");
                    this._payload = e
                }
                setProtectedHeader(e) {
                    if (this._protectedHeader) throw new TypeError("setProtectedHeader can only be called once");
                    return this._protectedHeader = e, this
                }
                setUnprotectedHeader(e) {
                    if (this._unprotectedHeader) throw new TypeError("setUnprotectedHeader can only be called once");
                    return this._unprotectedHeader = e, this
                }
                async sign(e, t) {
                    if (!this._protectedHeader && !this._unprotectedHeader) throw new _("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
                    if (!te(this._protectedHeader, this._unprotectedHeader)) throw new _("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
                    const r = { ...this._protectedHeader,
                        ...this._unprotectedHeader
                    };
                    let n = !0;
                    if (Re(_, new Map([
                            ["b64", !0]
                        ]), null === t || void 0 === t ? void 0 : t.crit, this._protectedHeader, r).has("b64") && (n = this._protectedHeader.b64, "boolean" !== typeof n)) throw new _('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
                    const {
                        alg: o
                    } = r;
                    if ("string" !== typeof o || !o) throw new _('JWS "alg" (Algorithm) Header Parameter missing or invalid');
                    Ae(o, e, "sign");
                    let i, a = this._payload;
                    n && (a = l.encode(g(a))), i = this._protectedHeader ? l.encode(g(JSON.stringify(this._protectedHeader))) : l.encode("");
                    const s = u(i, l.encode("."), a),
                        d = await st(o, e, s),
                        p = {
                            signature: g(d),
                            payload: ""
                        };
                    return n && (p.payload = c.decode(a)), this._unprotectedHeader && (p.header = this._unprotectedHeader), this._protectedHeader && (p.protected = c.decode(i)), p
                }
            }
            class ct {
                constructor(e) {
                    this._flattened = new lt(e)
                }
                setProtectedHeader(e) {
                    return this._flattened.setProtectedHeader(e), this
                }
                async sign(e, t) {
                    const r = await this._flattened.sign(e, t);
                    if (void 0 === r.payload) throw new TypeError("use the flattened module for creating JWS with b64: false");
                    return `${r.protected}.${r.payload}.${r.signature}`
                }
            }
            class dt {
                constructor(e, t, r) {
                    this.parent = e, this.key = t, this.options = r
                }
                setProtectedHeader(e) {
                    if (this.protectedHeader) throw new TypeError("setProtectedHeader can only be called once");
                    return this.protectedHeader = e, this
                }
                setUnprotectedHeader(e) {
                    if (this.unprotectedHeader) throw new TypeError("setUnprotectedHeader can only be called once");
                    return this.unprotectedHeader = e, this
                }
                addSignature(...e) {
                    return this.parent.addSignature(...e)
                }
                sign(...e) {
                    return this.parent.sign(...e)
                }
                done() {
                    return this.parent
                }
            }
            class ut {
                constructor(e) {
                    this._signatures = [], this._payload = e
                }
                addSignature(e, t) {
                    const r = new dt(this, e, t);
                    return this._signatures.push(r), r
                }
                async sign() {
                    if (!this._signatures.length) throw new _("at least one signature must be added");
                    const e = {
                        signatures: [],
                        payload: ""
                    };
                    for (let t = 0; t < this._signatures.length; t++) {
                        const r = this._signatures[t],
                            n = new lt(this._payload);
                        n.setProtectedHeader(r.protectedHeader), n.setUnprotectedHeader(r.unprotectedHeader);
                        const {
                            payload: o,
                            ...i
                        } = await n.sign(r.key, r.options);
                        if (0 === t) e.payload = o;
                        else if (e.payload !== o) throw new _("inconsistent use of JWS Unencoded Payload (RFC7797)");
                        e.signatures.push(i)
                    }
                    return e
                }
            }
            class pt {
                constructor(e) {
                    if (!re(e)) throw new TypeError("JWT Claims Set MUST be an object");
                    this._payload = e
                }
                setIssuer(e) {
                    return this._payload = { ...this._payload,
                        iss: e
                    }, this
                }
                setSubject(e) {
                    return this._payload = { ...this._payload,
                        sub: e
                    }, this
                }
                setAudience(e) {
                    return this._payload = { ...this._payload,
                        aud: e
                    }, this
                }
                setJti(e) {
                    return this._payload = { ...this._payload,
                        jti: e
                    }, this
                }
                setNotBefore(e) {
                    return this._payload = "number" === typeof e ? { ...this._payload,
                        nbf: e
                    } : { ...this._payload,
                        nbf: Ye(new Date) + tt(e)
                    }, this
                }
                setExpirationTime(e) {
                    return this._payload = "number" === typeof e ? { ...this._payload,
                        exp: e
                    } : { ...this._payload,
                        exp: Ye(new Date) + tt(e)
                    }, this
                }
                setIssuedAt(e) {
                    return this._payload = "undefined" === typeof e ? { ...this._payload,
                        iat: Ye(new Date)
                    } : { ...this._payload,
                        iat: e
                    }, this
                }
            }
            class ft extends pt {
                setProtectedHeader(e) {
                    return this._protectedHeader = e, this
                }
                async sign(e, t) {
                    var r;
                    const n = new ct(l.encode(JSON.stringify(this._payload)));
                    if (n.setProtectedHeader(this._protectedHeader), Array.isArray(null === (r = this._protectedHeader) || void 0 === r ? void 0 : r.crit) && this._protectedHeader.crit.includes("b64") && !1 === this._protectedHeader.b64) throw new O("JWTs MUST NOT use unencoded payload");
                    return n.sign(e, t)
                }
            }
            class ht extends pt {
                setProtectedHeader(e) {
                    if (this._protectedHeader) throw new TypeError("setProtectedHeader can only be called once");
                    return this._protectedHeader = e, this
                }
                setKeyManagementParameters(e) {
                    if (this._keyManagementParameters) throw new TypeError("setKeyManagementParameters can only be called once");
                    return this._keyManagementParameters = e, this
                }
                setContentEncryptionKey(e) {
                    if (this._cek) throw new TypeError("setContentEncryptionKey can only be called once");
                    return this._cek = e, this
                }
                setInitializationVector(e) {
                    if (this._iv) throw new TypeError("setInitializationVector can only be called once");
                    return this._iv = e, this
                }
                replicateIssuerAsHeader() {
                    return this._replicateIssuerAsHeader = !0, this
                }
                replicateSubjectAsHeader() {
                    return this._replicateSubjectAsHeader = !0, this
                }
                replicateAudienceAsHeader() {
                    return this._replicateAudienceAsHeader = !0, this
                }
                async encrypt(e, t) {
                    const r = new at(l.encode(JSON.stringify(this._payload)));
                    return this._replicateIssuerAsHeader && (this._protectedHeader = { ...this._protectedHeader,
                        iss: this._payload.iss
                    }), this._replicateSubjectAsHeader && (this._protectedHeader = { ...this._protectedHeader,
                        sub: this._payload.sub
                    }), this._replicateAudienceAsHeader && (this._protectedHeader = { ...this._protectedHeader,
                        aud: this._payload.aud
                    }), r.setProtectedHeader(this._protectedHeader), this._iv && r.setInitializationVector(this._iv), this._cek && r.setContentEncryptionKey(this._cek), this._keyManagementParameters && r.setKeyManagementParameters(this._keyManagementParameters), r.encrypt(e, t)
                }
            }
            const mt = (e, t) => {
                if ("string" !== typeof e || !e) throw new A(`${t} missing or invalid`)
            };
            async function vt(e, t) {
                if (!re(e)) throw new TypeError("JWK must be an object");
                if (null !== t && void 0 !== t || (t = "sha256"), "sha256" !== t && "sha384" !== t && "sha512" !== t) throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
                let r;
                switch (e.kty) {
                    case "EC":
                        mt(e.crv, '"crv" (Curve) Parameter'), mt(e.x, '"x" (X Coordinate) Parameter'), mt(e.y, '"y" (Y Coordinate) Parameter'), r = {
                            crv: e.crv,
                            kty: e.kty,
                            x: e.x,
                            y: e.y
                        };
                        break;
                    case "OKP":
                        mt(e.crv, '"crv" (Subtype of Key Pair) Parameter'), mt(e.x, '"x" (Public Key) Parameter'), r = {
                            crv: e.crv,
                            kty: e.kty,
                            x: e.x
                        };
                        break;
                    case "RSA":
                        mt(e.e, '"e" (Exponent) Parameter'), mt(e.n, '"n" (Modulus) Parameter'), r = {
                            e: e.e,
                            kty: e.kty,
                            n: e.n
                        };
                        break;
                    case "oct":
                        mt(e.k, '"k" (Key Value) Parameter'), r = {
                            k: e.k,
                            kty: e.kty
                        };
                        break;
                    default:
                        throw new C('"kty" (Key Type) Parameter missing or unsupported')
                }
                const n = l.encode(JSON.stringify(r));
                return g(await s(t, n))
            }
            async function gt(e, t) {
                null !== t && void 0 !== t || (t = "sha256");
                const r = await vt(e, t);
                return `urn:ietf:params:oauth:jwk-thumbprint:sha-${t.slice(-3)}:${r}`
            }
            async function yt(e, t) {
                const r = { ...e,
                    ...null === t || void 0 === t ? void 0 : t.header
                };
                if (!re(r.jwk)) throw new _('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
                const n = await Oe({ ...r.jwk,
                    ext: !0
                }, r.alg, !0);
                if (n instanceof Uint8Array || "public" !== n.type) throw new _('"jwk" (JSON Web Key) Header Parameter must be a public key');
                return n
            }

            function bt(e) {
                return e && "object" === typeof e && Array.isArray(e.keys) && e.keys.every(wt)
            }

            function wt(e) {
                return re(e)
            }
            class St {
                constructor(e) {
                    if (this._cached = new WeakMap, !bt(e)) throw new k("JSON Web Key Set malformed");
                    var t;
                    this._jwks = (t = e, "function" === typeof structuredClone ? structuredClone(t) : JSON.parse(JSON.stringify(t)))
                }
                async getKey(e, t) {
                    const {
                        alg: r,
                        kid: n
                    } = { ...e,
                        ...null === t || void 0 === t ? void 0 : t.header
                    }, o = function(e) {
                        switch ("string" === typeof e && e.slice(0, 2)) {
                            case "RS":
                            case "PS":
                                return "RSA";
                            case "ES":
                                return "EC";
                            case "Ed":
                                return "OKP";
                            default:
                                throw new C('Unsupported "alg" value for a JSON Web Key Set')
                        }
                    }(r), i = this._jwks.keys.filter((e => {
                        let t = o === e.kty;
                        if (t && "string" === typeof n && (t = n === e.kid), t && "string" === typeof e.alg && (t = r === e.alg), t && "string" === typeof e.use && (t = "sig" === e.use), t && Array.isArray(e.key_ops) && (t = e.key_ops.includes("verify")), t && "EdDSA" === r && (t = "Ed25519" === e.crv || "Ed448" === e.crv), t) switch (r) {
                            case "ES256":
                                t = "P-256" === e.crv;
                                break;
                            case "ES256K":
                                t = "secp256k1" === e.crv;
                                break;
                            case "ES384":
                                t = "P-384" === e.crv;
                                break;
                            case "ES512":
                                t = "P-521" === e.crv
                        }
                        return t
                    })), {
                        0: a,
                        length: s
                    } = i;
                    if (0 === s) throw new M;
                    if (1 !== s) {
                        const e = new R,
                            {
                                _cached: t
                            } = this;
                        throw e[Symbol.asyncIterator] = async function*() {
                            for (const n of i) try {
                                yield await Et(t, n, r)
                            } catch (e) {
                                continue
                            }
                        }, e
                    }
                    return Et(this._cached, a, r)
                }
            }
            async function Et(e, t, r) {
                const n = e.get(t) || e.set(t, {}).get(t);
                if (void 0 === n[r]) {
                    const e = await Oe({ ...t,
                        ext: !0
                    }, r);
                    if (e instanceof Uint8Array || "public" !== e.type) throw new k("JSON Web Key Set members must be public keys");
                    n[r] = e
                }
                return n[r]
            }

            function xt(e) {
                const t = new St(e);
                return async function(e, r) {
                    return t.getKey(e, r)
                }
            }
            var Ct = async (e, t, r) => {
                let n, o, i = !1;
                "function" === typeof AbortController && (n = new AbortController, o = setTimeout((() => {
                    i = !0, n.abort()
                }), t));
                const a = await fetch(e.href, {
                    signal: n ? n.signal : void 0,
                    redirect: "manual",
                    headers: r.headers
                }).catch((e => {
                    if (i) throw new Z;
                    throw e
                }));
                if (void 0 !== o && clearTimeout(o), 200 !== a.status) throw new w("Expected 200 OK from the JSON Web Key Set HTTP response");
                try {
                    return await a.json()
                } catch (s) {
                    throw new w("Failed to parse the JSON Web Key Set HTTP response as JSON")
                }
            };
            class Pt extends St {
                constructor(e, t) {
                    if (super({
                            keys: []
                        }), this._jwks = void 0, !(e instanceof URL)) throw new TypeError("url must be an instance of URL");
                    this._url = new URL(e.href), this._options = {
                        agent: null === t || void 0 === t ? void 0 : t.agent,
                        headers: null === t || void 0 === t ? void 0 : t.headers
                    }, this._timeoutDuration = "number" === typeof(null === t || void 0 === t ? void 0 : t.timeoutDuration) ? null === t || void 0 === t ? void 0 : t.timeoutDuration : 5e3, this._cooldownDuration = "number" === typeof(null === t || void 0 === t ? void 0 : t.cooldownDuration) ? null === t || void 0 === t ? void 0 : t.cooldownDuration : 3e4, this._cacheMaxAge = "number" === typeof(null === t || void 0 === t ? void 0 : t.cacheMaxAge) ? null === t || void 0 === t ? void 0 : t.cacheMaxAge : 6e5
                }
                coolingDown() {
                    return "number" === typeof this._jwksTimestamp && Date.now() < this._jwksTimestamp + this._cooldownDuration
                }
                fresh() {
                    return "number" === typeof this._jwksTimestamp && Date.now() < this._jwksTimestamp + this._cacheMaxAge
                }
                async getKey(e, t) {
                    this._jwks && this.fresh() || await this.reload();
                    try {
                        return await super.getKey(e, t)
                    } catch (r) {
                        if (r instanceof M && !1 === this.coolingDown()) return await this.reload(), super.getKey(e, t);
                        throw r
                    }
                }
                async reload() {
                    this._pendingFetch && ("undefined" !== typeof WebSocketPair || "undefined" !== typeof navigator && "Cloudflare-Workers" === navigator.userAgent || "undefined" !== typeof EdgeRuntime && "vercel" === EdgeRuntime) && (this._pendingFetch = void 0), this._pendingFetch || (this._pendingFetch = Ct(this._url, this._timeoutDuration, this._options).then((e => {
                        if (!bt(e)) throw new k("JSON Web Key Set malformed");
                        this._jwks = {
                            keys: e.keys
                        }, this._jwksTimestamp = Date.now(), this._pendingFetch = void 0
                    })).catch((e => {
                        throw this._pendingFetch = void 0, e
                    }))), await this._pendingFetch
                }
            }

            function Tt(e, t) {
                const r = new Pt(e, t);
                return async function(e, t) {
                    return r.getKey(e, t)
                }
            }
            class _t extends pt {
                encode() {
                    return `${g(JSON.stringify({alg:"none"}))}.${g(JSON.stringify(this._payload))}.`
                }
                static decode(e, t) {
                    if ("string" !== typeof e) throw new O("Unsecured JWT must be a string");
                    const {
                        0: r,
                        1: n,
                        2: o,
                        length: i
                    } = e.split(".");
                    if (3 !== i || "" !== o) throw new O("Invalid Unsecured JWT");
                    let a;
                    try {
                        if (a = JSON.parse(c.decode(b(r))), "none" !== a.alg) throw new Error
                    } catch (s) {
                        throw new O("Invalid Unsecured JWT")
                    }
                    return {
                        payload: nt(a, b(n), t),
                        header: a
                    }
                }
            }
            const Ot = g,
                At = b;

            function kt(e) {
                let t;
                if ("string" === typeof e) {
                    const r = e.split(".");
                    3 !== r.length && 5 !== r.length || ([t] = r)
                } else if ("object" === typeof e && e) {
                    if (!("protected" in e)) throw new TypeError("Token does not contain a Protected Header");
                    t = e.protected
                }
                try {
                    if ("string" !== typeof t || !t) throw new Error;
                    const e = JSON.parse(c.decode(At(t)));
                    if (!re(e)) throw new Error;
                    return e
                } catch (r) {
                    throw new TypeError("Invalid Token or Protected Header formatting")
                }
            }

            function Mt(e) {
                if ("string" !== typeof e) throw new O("JWTs must use Compact JWS serialization, JWT must be a string");
                const {
                    1: t,
                    length: r
                } = e.split(".");
                if (5 === r) throw new O("Only JWTs using Compact JWS serialization can be decoded");
                if (3 !== r) throw new O("Invalid JWT");
                if (!t) throw new O("JWTs must contain a payload");
                let n, o;
                try {
                    n = At(t)
                } catch (i) {
                    throw new O("Failed to parse the base64url encoded payload")
                }
                try {
                    o = JSON.parse(c.decode(n))
                } catch (a) {
                    throw new O("Failed to parse the decoded payload as JSON")
                }
                if (!re(o)) throw new O("Invalid JWT Claims Set");
                return o
            }

            function Rt(e) {
                var t;
                const r = null !== (t = null === e || void 0 === e ? void 0 : e.modulusLength) && void 0 !== t ? t : 2048;
                if ("number" !== typeof r || r < 2048) throw new C("Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used");
                return r
            }
            async function Zt(e, t) {
                return async function(e, t) {
                    var r, n, o;
                    let a, s;
                    switch (e) {
                        case "PS256":
                        case "PS384":
                        case "PS512":
                            a = {
                                name: "RSA-PSS",
                                hash: `SHA-${e.slice(-3)}`,
                                publicExponent: new Uint8Array([1, 0, 1]),
                                modulusLength: Rt(t)
                            }, s = ["sign", "verify"];
                            break;
                        case "RS256":
                        case "RS384":
                        case "RS512":
                            a = {
                                name: "RSASSA-PKCS1-v1_5",
                                hash: `SHA-${e.slice(-3)}`,
                                publicExponent: new Uint8Array([1, 0, 1]),
                                modulusLength: Rt(t)
                            }, s = ["sign", "verify"];
                            break;
                        case "RSA-OAEP":
                        case "RSA-OAEP-256":
                        case "RSA-OAEP-384":
                        case "RSA-OAEP-512":
                            a = {
                                name: "RSA-OAEP",
                                hash: `SHA-${parseInt(e.slice(-3),10)||1}`,
                                publicExponent: new Uint8Array([1, 0, 1]),
                                modulusLength: Rt(t)
                            }, s = ["decrypt", "unwrapKey", "encrypt", "wrapKey"];
                            break;
                        case "ES256":
                            a = {
                                name: "ECDSA",
                                namedCurve: "P-256"
                            }, s = ["sign", "verify"];
                            break;
                        case "ES384":
                            a = {
                                name: "ECDSA",
                                namedCurve: "P-384"
                            }, s = ["sign", "verify"];
                            break;
                        case "ES512":
                            a = {
                                name: "ECDSA",
                                namedCurve: "P-521"
                            }, s = ["sign", "verify"];
                            break;
                        case "EdDSA":
                            s = ["sign", "verify"];
                            const o = null !== (r = null === t || void 0 === t ? void 0 : t.crv) && void 0 !== r ? r : "Ed25519";
                            switch (o) {
                                case "Ed25519":
                                case "Ed448":
                                    a = {
                                        name: o
                                    };
                                    break;
                                default:
                                    throw new C("Invalid or unsupported crv option provided")
                            }
                            break;
                        case "ECDH-ES":
                        case "ECDH-ES+A128KW":
                        case "ECDH-ES+A192KW":
                        case "ECDH-ES+A256KW":
                            {
                                s = ["deriveKey", "deriveBits"];
                                const e = null !== (n = null === t || void 0 === t ? void 0 : t.crv) && void 0 !== n ? n : "P-256";
                                switch (e) {
                                    case "P-256":
                                    case "P-384":
                                    case "P-521":
                                        a = {
                                            name: "ECDH",
                                            namedCurve: e
                                        };
                                        break;
                                    case "X25519":
                                    case "X448":
                                        a = {
                                            name: e
                                        };
                                        break;
                                    default:
                                        throw new C("Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448")
                                }
                                break
                            }
                        default:
                            throw new C('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                    }
                    return i.subtle.generateKey(a, null !== (o = null === t || void 0 === t ? void 0 : t.extractable) && void 0 !== o && o, s)
                }(e, t)
            }
            async function It(e, t) {
                return async function(e, t) {
                    var r;
                    let n, o, a;
                    switch (e) {
                        case "HS256":
                        case "HS384":
                        case "HS512":
                            n = parseInt(e.slice(-3), 10), o = {
                                name: "HMAC",
                                hash: `SHA-${n}`,
                                length: n
                            }, a = ["sign", "verify"];
                            break;
                        case "A128CBC-HS256":
                        case "A192CBC-HS384":
                        case "A256CBC-HS512":
                            return n = parseInt(e.slice(-3), 10), j(new Uint8Array(n >> 3));
                        case "A128KW":
                        case "A192KW":
                        case "A256KW":
                            n = parseInt(e.slice(1, 4), 10), o = {
                                name: "AES-KW",
                                length: n
                            }, a = ["wrapKey", "unwrapKey"];
                            break;
                        case "A128GCMKW":
                        case "A192GCMKW":
                        case "A256GCMKW":
                        case "A128GCM":
                        case "A192GCM":
                        case "A256GCM":
                            n = parseInt(e.slice(1, 4), 10), o = {
                                name: "AES-GCM",
                                length: n
                            }, a = ["encrypt", "decrypt"];
                            break;
                        default:
                            throw new C('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                    }
                    return i.subtle.generateKey(o, null !== (r = null === t || void 0 === t ? void 0 : t.extractable) && void 0 !== r && r, a)
                }(e, t)
            }
        },
        23285: function(e, t, r) {
            function n() {
                return n = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        8332: function(e, t, r) {
            var n = r(38519);
            r.o(n, "Client") && r.d(t, {
                Client: function() {
                    return n.Client
                }
            })
        },
        99304: function(e, t, r) {
            r.d(t, {
                Gk: function() {
                    return i
                },
                tl: function() {
                    return s
                }
            });
            var n = r(13433),
                o = r(7185);

            function i(e) {
                let {
                    swiper: t,
                    extendParams: r,
                    on: i,
                    emit: a
                } = e;
                const s = (0, n.a)();
                let l;
                r({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null,
                        noMousewheelClass: "swiper-no-mousewheel"
                    }
                }), t.mousewheel = {
                    enabled: !1
                };
                let c, d = (0, o.d)();
                const u = [];

                function p() {
                    t.enabled && (t.mouseEntered = !0)
                }

                function f() {
                    t.enabled && (t.mouseEntered = !1)
                }

                function h(e) {
                    return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && (0, o.d)() - d < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && (0, o.d)() - d < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), a("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), a("scroll", e.raw)), d = (new s.Date).getTime(), !1)))
                }

                function m(e) {
                    let r = e,
                        n = !0;
                    if (!t.enabled) return;
                    if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
                    const i = t.params.mousewheel;
                    t.params.cssMode && r.preventDefault();
                    let s = t.el;
                    "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget));
                    const d = s && s.contains(r.target);
                    if (!t.mouseEntered && !d && !i.releaseOnEdges) return !0;
                    r.originalEvent && (r = r.originalEvent);
                    let p = 0;
                    const f = t.rtlTranslate ? -1 : 1,
                        m = function(e) {
                            let t = 0,
                                r = 0,
                                n = 0,
                                o = 0;
                            return "detail" in e && (r = e.detail), "wheelDelta" in e && (r = -e.wheelDelta / 120), "wheelDeltaY" in e && (r = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = r, r = 0), n = 10 * t, o = 10 * r, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (n = e.deltaX), e.shiftKey && !n && (n = o, o = 0), (n || o) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, o *= 40) : (n *= 800, o *= 800)), n && !t && (t = n < 1 ? -1 : 1), o && !r && (r = o < 1 ? -1 : 1), {
                                spinX: t,
                                spinY: r,
                                pixelX: n,
                                pixelY: o
                            }
                        }(r);
                    if (i.forceToAxis)
                        if (t.isHorizontal()) {
                            if (!(Math.abs(m.pixelX) > Math.abs(m.pixelY))) return !0;
                            p = -m.pixelX * f
                        } else {
                            if (!(Math.abs(m.pixelY) > Math.abs(m.pixelX))) return !0;
                            p = -m.pixelY
                        }
                    else p = Math.abs(m.pixelX) > Math.abs(m.pixelY) ? -m.pixelX * f : -m.pixelY;
                    if (0 === p) return !0;
                    i.invert && (p = -p);
                    let v = t.getTranslate() + p * i.sensitivity;
                    if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), n = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), n && t.params.nested && r.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                        const e = {
                                time: (0, o.d)(),
                                delta: Math.abs(p),
                                direction: Math.sign(p)
                            },
                            n = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
                        if (!n) {
                            c = void 0;
                            let s = t.getTranslate() + p * i.sensitivity;
                            const d = t.isBeginning,
                                f = t.isEnd;
                            if (s >= t.minTranslate() && (s = t.minTranslate()), s <= t.maxTranslate() && (s = t.maxTranslate()), t.setTransition(0), t.setTranslate(s), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !f && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                                    direction: e.direction < 0 ? "next" : "prev",
                                    byMousewheel: !0
                                }), t.params.freeMode.sticky) {
                                clearTimeout(l), l = void 0, u.length >= 15 && u.shift();
                                const r = u.length ? u[u.length - 1] : void 0,
                                    n = u[0];
                                if (u.push(e), r && (e.delta > r.delta || e.direction !== r.direction)) u.splice(0);
                                else if (u.length >= 15 && e.time - n.time < 500 && n.delta - e.delta >= 1 && e.delta <= 6) {
                                    const r = p > 0 ? .8 : .2;
                                    c = e, u.splice(0), l = (0, o.n)((() => {
                                        t.slideToClosest(t.params.speed, !0, void 0, r)
                                    }), 0)
                                }
                                l || (l = (0, o.n)((() => {
                                    c = e, u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                                }), 500))
                            }
                            if (n || a("scroll", r), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), i.releaseOnEdges && (s === t.minTranslate() || s === t.maxTranslate())) return !0
                        }
                    } else {
                        const r = {
                            time: (0, o.d)(),
                            delta: Math.abs(p),
                            direction: Math.sign(p),
                            raw: e
                        };
                        u.length >= 2 && u.shift();
                        const n = u.length ? u[u.length - 1] : void 0;
                        if (u.push(r), n ? (r.direction !== n.direction || r.delta > n.delta || r.time > n.time + 150) && h(r) : h(r), function(e) {
                                const r = t.params.mousewheel;
                                if (e.direction < 0) {
                                    if (t.isEnd && !t.params.loop && r.releaseOnEdges) return !0
                                } else if (t.isBeginning && !t.params.loop && r.releaseOnEdges) return !0;
                                return !1
                            }(r)) return !0
                    }
                    return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1
                }

                function v(e) {
                    let r = t.el;
                    "container" !== t.params.mousewheel.eventsTarget && (r = document.querySelector(t.params.mousewheel.eventsTarget)), r[e]("mouseenter", p), r[e]("mouseleave", f), r[e]("wheel", m)
                }

                function g() {
                    return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", m), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0)
                }

                function y() {
                    return t.params.cssMode ? (t.wrapperEl.addEventListener(event, m), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0)
                }
                i("init", (() => {
                    !t.params.mousewheel.enabled && t.params.cssMode && y(), t.params.mousewheel.enabled && g()
                })), i("destroy", (() => {
                    t.params.cssMode && g(), t.mousewheel.enabled && y()
                })), Object.assign(t.mousewheel, {
                    enable: g,
                    disable: y
                })
            }

            function a(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function s(e) {
                let {
                    swiper: t,
                    extendParams: r,
                    on: n,
                    emit: i
                } = e;
                const s = "swiper-pagination";
                let l;
                r({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${s}-bullet`,
                        bulletActiveClass: `${s}-bullet-active`,
                        modifierClass: `${s}-`,
                        currentClass: `${s}-current`,
                        totalClass: `${s}-total`,
                        hiddenClass: `${s}-hidden`,
                        progressbarFillClass: `${s}-progressbar-fill`,
                        progressbarOppositeClass: `${s}-progressbar-opposite`,
                        clickableClass: `${s}-clickable`,
                        lockClass: `${s}-lock`,
                        horizontalClass: `${s}-horizontal`,
                        verticalClass: `${s}-vertical`,
                        paginationDisabledClass: `${s}-disabled`
                    }
                }), t.pagination = {
                    el: null,
                    bullets: []
                };
                let c = 0;
                const d = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

                function u() {
                    return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
                }

                function p(e, r) {
                    const {
                        bulletActiveClass: n
                    } = t.params.pagination;
                    e && (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${n}-${r}`), (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${n}-${r}-${r}`))
                }

                function f(e) {
                    const r = e.target.closest(a(t.params.pagination.bulletClass));
                    if (!r) return;
                    e.preventDefault();
                    const n = (0, o.g)(r) * t.params.slidesPerGroup;
                    if (t.params.loop) {
                        if (t.realIndex === n) return;
                        const e = t.realIndex,
                            r = t.getSlideIndexByData(n),
                            o = t.getSlideIndexByData(t.realIndex);
                        if (r > t.slides.length - t.loopedSlides) {
                            const n = t.activeIndex;
                            t.loopFix({
                                direction: r > o ? "next" : "prev",
                                activeSlideIndex: r,
                                slideTo: !1
                            });
                            n === t.activeIndex && t.slideToLoop(e, 0, !1, !0)
                        }
                        t.slideToLoop(n)
                    } else t.slideTo(n)
                }

                function h() {
                    const e = t.rtl,
                        r = t.params.pagination;
                    if (u()) return;
                    let n, s, f = t.pagination.el;
                    f = d(f);
                    const h = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        m = t.params.loop ? Math.ceil(h / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? (s = t.previousRealIndex || 0, n = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : "undefined" !== typeof t.snapIndex ? (n = t.snapIndex, s = t.previousSnapIndex) : (s = t.previousIndex || 0, n = t.activeIndex || 0), "bullets" === r.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        const i = t.pagination.bullets;
                        let a, d, u;
                        if (r.dynamicBullets && (l = (0, o.f)(i[0], t.isHorizontal() ? "width" : "height", !0), f.forEach((e => {
                                e.style[t.isHorizontal() ? "width" : "height"] = l * (r.dynamicMainBullets + 4) + "px"
                            })), r.dynamicMainBullets > 1 && void 0 !== s && (c += n - (s || 0), c > r.dynamicMainBullets - 1 ? c = r.dynamicMainBullets - 1 : c < 0 && (c = 0)), a = Math.max(n - c, 0), d = a + (Math.min(i.length, r.dynamicMainBullets) - 1), u = (d + a) / 2), i.forEach((e => {
                                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${r.bulletActiveClass}${e}`))].map((e => "string" === typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                                e.classList.remove(...t)
                            })), f.length > 1) i.forEach((e => {
                            const i = (0, o.g)(e);
                            i === n ? e.classList.add(...r.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), r.dynamicBullets && (i >= a && i <= d && e.classList.add(...`${r.bulletActiveClass}-main`.split(" ")), i === a && p(e, "prev"), i === d && p(e, "next"))
                        }));
                        else {
                            const e = i[n];
                            if (e && e.classList.add(...r.bulletActiveClass.split(" ")), t.isElement && i.forEach(((e, t) => {
                                    e.setAttribute("part", t === n ? "bullet-active" : "bullet")
                                })), r.dynamicBullets) {
                                const e = i[a],
                                    t = i[d];
                                for (let n = a; n <= d; n += 1) i[n] && i[n].classList.add(...`${r.bulletActiveClass}-main`.split(" "));
                                p(e, "prev"), p(t, "next")
                            }
                        }
                        if (r.dynamicBullets) {
                            const n = Math.min(i.length, r.dynamicMainBullets + 4),
                                o = (l * n - l) / 2 - u * l,
                                a = e ? "right" : "left";
                            i.forEach((e => {
                                e.style[t.isHorizontal() ? a : "top"] = `${o}px`
                            }))
                        }
                    }
                    f.forEach(((e, o) => {
                        if ("fraction" === r.type && (e.querySelectorAll(a(r.currentClass)).forEach((e => {
                                e.textContent = r.formatFractionCurrent(n + 1)
                            })), e.querySelectorAll(a(r.totalClass)).forEach((e => {
                                e.textContent = r.formatFractionTotal(m)
                            }))), "progressbar" === r.type) {
                            let o;
                            o = r.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                            const i = (n + 1) / m;
                            let s = 1,
                                l = 1;
                            "horizontal" === o ? s = i : l = i, e.querySelectorAll(a(r.progressbarFillClass)).forEach((e => {
                                e.style.transform = `translate3d(0,0,0) scaleX(${s}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`
                            }))
                        }
                        "custom" === r.type && r.renderCustom ? (e.innerHTML = r.renderCustom(t, n + 1, m), 0 === o && i("paginationRender", e)) : (0 === o && i("paginationRender", e), i("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](r.lockClass)
                    }))
                }

                function m() {
                    const e = t.params.pagination;
                    if (u()) return;
                    const r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
                    let n = t.pagination.el;
                    n = d(n);
                    let o = "";
                    if ("bullets" === e.type) {
                        let n = t.params.loop ? Math.ceil(r / t.params.slidesPerGroup) : t.snapGrid.length;
                        t.params.freeMode && t.params.freeMode.enabled && n > r && (n = r);
                        for (let r = 0; r < n; r += 1) e.renderBullet ? o += e.renderBullet.call(t, r, e.bulletClass) : o += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
                    }
                    "fraction" === e.type && (o = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (o = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], n.forEach((r => {
                        "custom" !== e.type && (r.innerHTML = o || ""), "bullets" === e.type && t.pagination.bullets.push(...r.querySelectorAll(a(e.bulletClass)))
                    })), "custom" !== e.type && i("paginationRender", n[0])
                }

                function v() {
                    t.params.pagination = function(e, t, r, n) {
                        return e.params.createElements && Object.keys(n).forEach((i => {
                            if (!r[i] && !0 === r.auto) {
                                let a = (0, o.e)(e.el, `.${n[i]}`)[0];
                                a || (a = (0, o.c)("div", n[i]), a.className = n[i], e.el.append(a)), r[i] = a, t[i] = a
                            }
                        })), r
                    }(t, t.originalParams.pagination, t.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const e = t.params.pagination;
                    if (!e.el) return;
                    let r;
                    "string" === typeof e.el && t.isElement && (r = t.el.querySelector(e.el)), r || "string" !== typeof e.el || (r = [...document.querySelectorAll(e.el)]), r || (r = e.el), r && 0 !== r.length && (t.params.uniqueNavElements && "string" === typeof e.el && Array.isArray(r) && r.length > 1 && (r = [...t.el.querySelectorAll(e.el)], r.length > 1 && (r = r.filter((e => (0, o.a)(e, ".swiper")[0] === t.el))[0])), Array.isArray(r) && 1 === r.length && (r = r[0]), Object.assign(t.pagination, {
                        el: r
                    }), r = d(r), r.forEach((r => {
                        "bullets" === e.type && e.clickable && r.classList.add(...(e.clickableClass || "").split(" ")), r.classList.add(e.modifierClass + e.type), r.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (r.classList.add(`${e.modifierClass}${e.type}-dynamic`), c = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && r.classList.add(e.progressbarOppositeClass), e.clickable && r.addEventListener("click", f), t.enabled || r.classList.add(e.lockClass)
                    })))
                }

                function g() {
                    const e = t.params.pagination;
                    if (u()) return;
                    let r = t.pagination.el;
                    r && (r = d(r), r.forEach((r => {
                        r.classList.remove(e.hiddenClass), r.classList.remove(e.modifierClass + e.type), r.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (r.classList.remove(...(e.clickableClass || "").split(" ")), r.removeEventListener("click", f))
                    }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
                }
                n("changeDirection", (() => {
                    if (!t.pagination || !t.pagination.el) return;
                    const e = t.params.pagination;
                    let {
                        el: r
                    } = t.pagination;
                    r = d(r), r.forEach((r => {
                        r.classList.remove(e.horizontalClass, e.verticalClass), r.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
                    }))
                })), n("init", (() => {
                    !1 === t.params.pagination.enabled ? y() : (v(), m(), h())
                })), n("activeIndexChange", (() => {
                    "undefined" === typeof t.snapIndex && h()
                })), n("snapIndexChange", (() => {
                    h()
                })), n("snapGridLengthChange", (() => {
                    m(), h()
                })), n("destroy", (() => {
                    g()
                })), n("enable disable", (() => {
                    let {
                        el: e
                    } = t.pagination;
                    e && (e = d(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
                })), n("lock unlock", (() => {
                    h()
                })), n("click", ((e, r) => {
                    const n = r.target,
                        o = d(t.pagination.el);
                    if (t.params.pagination.el && t.params.pagination.hideOnClick && o && o.length > 0 && !n.classList.contains(t.params.pagination.bulletClass)) {
                        if (t.navigation && (t.navigation.nextEl && n === t.navigation.nextEl || t.navigation.prevEl && n === t.navigation.prevEl)) return;
                        const e = o[0].classList.contains(t.params.pagination.hiddenClass);
                        i(!0 === e ? "paginationShow" : "paginationHide"), o.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
                    }
                }));
                const y = () => {
                    t.el.classList.add(t.params.pagination.paginationDisabledClass);
                    let {
                        el: e
                    } = t.pagination;
                    e && (e = d(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), g()
                };
                Object.assign(t.pagination, {
                    enable: () => {
                        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                        let {
                            el: e
                        } = t.pagination;
                        e && (e = d(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), v(), m(), h()
                    },
                    disable: y,
                    render: m,
                    update: h,
                    init: v,
                    destroy: g
                })
            }
        },
        13433: function(e, t, r) {
            function n(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function o(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((r => {
                    "undefined" === typeof e[r] ? e[r] = t[r] : n(t[r]) && n(e[r]) && Object.keys(t[r]).length > 0 && o(e[r], t[r])
                }))
            }
            r.d(t, {
                a: function() {
                    return l
                },
                g: function() {
                    return a
                }
            });
            const i = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function a() {
                const e = "undefined" !== typeof document ? document : {};
                return o(e, i), e
            }
            const s = {
                document: i,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function l() {
                const e = "undefined" !== typeof window ? window : {};
                return o(e, s), e
            }
        },
        7185: function(e, t, r) {
            r.d(t, {
                a: function() {
                    return b
                },
                c: function() {
                    return h
                },
                d: function() {
                    return a
                },
                e: function() {
                    return f
                },
                f: function() {
                    return w
                },
                g: function() {
                    return y
                },
                h: function() {
                    return s
                },
                l: function() {
                    return g
                },
                m: function() {
                    return v
                },
                n: function() {
                    return i
                },
                o: function() {
                    return m
                },
                p: function() {
                    return p
                },
                q: function() {
                    return d
                },
                r: function() {
                    return o
                },
                s: function() {
                    return u
                }
            });
            var n = r(13433);

            function o(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (r) {}
                    try {
                        delete t[e]
                    } catch (r) {}
                }))
            }

            function i(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function a() {
                return Date.now()
            }

            function s(e, t) {
                void 0 === t && (t = "x");
                const r = (0, n.a)();
                let o, i, a;
                const s = function(e) {
                    const t = (0, n.a)();
                    let r;
                    return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
                }(e);
                return r.WebKitCSSMatrix ? (i = s.transform || s.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new r.WebKitCSSMatrix("none" === i ? "" : i)) : (a = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), o = a.toString().split(",")), "x" === t && (i = r.WebKitCSSMatrix ? a.m41 : 16 === o.length ? parseFloat(o[12]) : parseFloat(o[4])), "y" === t && (i = r.WebKitCSSMatrix ? a.m42 : 16 === o.length ? parseFloat(o[13]) : parseFloat(o[5])), i || 0
            }

            function l(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function c(e) {
                return "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
            }

            function d() {
                const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];
                for (let r = 1; r < arguments.length; r += 1) {
                    const n = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                    if (void 0 !== n && null !== n && !c(n)) {
                        const r = Object.keys(Object(n)).filter((e => t.indexOf(e) < 0));
                        for (let t = 0, o = r.length; t < o; t += 1) {
                            const o = r[t],
                                i = Object.getOwnPropertyDescriptor(n, o);
                            void 0 !== i && i.enumerable && (l(e[o]) && l(n[o]) ? n[o].__swiper__ ? e[o] = n[o] : d(e[o], n[o]) : !l(e[o]) && l(n[o]) ? (e[o] = {}, n[o].__swiper__ ? e[o] = n[o] : d(e[o], n[o])) : e[o] = n[o])
                        }
                    }
                }
                return e
            }

            function u(e, t, r) {
                e.style.setProperty(t, r)
            }

            function p(e) {
                let {
                    swiper: t,
                    targetPosition: r,
                    side: o
                } = e;
                const i = (0, n.a)(),
                    a = -t.translate;
                let s, l = null;
                const c = t.params.speed;
                t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
                const d = r > a ? "next" : "prev",
                    u = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
                    p = () => {
                        s = (new Date).getTime(), null === l && (l = s);
                        const e = Math.max(Math.min((s - l) / c, 1), 0),
                            n = .5 - Math.cos(e * Math.PI) / 2;
                        let d = a + n * (r - a);
                        if (u(d, r) && (d = r), t.wrapperEl.scrollTo({
                                [o]: d
                            }), u(d, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                                [o]: d
                            })
                        })), void i.cancelAnimationFrame(t.cssModeFrameID);
                        t.cssModeFrameID = i.requestAnimationFrame(p)
                    };
                p()
            }

            function f(e, t) {
                return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
            }

            function h(e, t) {
                void 0 === t && (t = []);
                const r = document.createElement(e);
                return r.classList.add(...Array.isArray(t) ? t : [t]), r
            }

            function m(e, t) {
                const r = [];
                for (; e.previousElementSibling;) {
                    const n = e.previousElementSibling;
                    t ? n.matches(t) && r.push(n) : r.push(n), e = n
                }
                return r
            }

            function v(e, t) {
                const r = [];
                for (; e.nextElementSibling;) {
                    const n = e.nextElementSibling;
                    t ? n.matches(t) && r.push(n) : r.push(n), e = n
                }
                return r
            }

            function g(e, t) {
                return (0, n.a)().getComputedStyle(e, null).getPropertyValue(t)
            }

            function y(e) {
                let t, r = e;
                if (r) {
                    for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
                    return t
                }
            }

            function b(e, t) {
                const r = [];
                let n = e.parentElement;
                for (; n;) t ? n.matches(t) && r.push(n) : r.push(n), n = n.parentElement;
                return r
            }

            function w(e, t, r) {
                const o = (0, n.a)();
                return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(o.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(o.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }
        },
        2261: function(e, t, r) {
            r.d(t, {
                tq: function() {
                    return Y
                },
                o5: function() {
                    return Q
                }
            });
            var n = r(67294),
                o = r(13433),
                i = r(7185);
            let a, s, l;

            function c() {
                return a || (a = function() {
                    const e = (0, o.a)(),
                        t = (0, o.g)();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), a
            }

            function d(e) {
                return void 0 === e && (e = {}), s || (s = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e;
                    const r = c(),
                        n = (0, o.a)(),
                        i = n.navigator.platform,
                        a = t || n.navigator.userAgent,
                        s = {
                            ios: !1,
                            android: !1
                        },
                        l = n.screen.width,
                        d = n.screen.height,
                        u = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let p = a.match(/(iPad).*OS\s([\d_]+)/);
                    const f = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                        h = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        m = "Win32" === i;
                    let v = "MacIntel" === i;
                    return !p && v && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${d}`) >= 0 && (p = a.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), v = !1), u && !m && (s.os = "android", s.android = !0), (p || h || f) && (s.os = "ios", s.ios = !0), s
                }(e)), s
            }

            function u() {
                return l || (l = function() {
                    const e = (0, o.a)();
                    let t = !1;

                    function r() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }
                    if (r()) {
                        const r = String(e.navigator.userAgent);
                        if (r.includes("Version/")) {
                            const [e, n] = r.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                            t = e < 16 || 16 === e && n < 2
                        }
                    }
                    return {
                        isSafari: t || r(),
                        needPerspectiveFix: t,
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), l
            }
            var p = {
                on(e, t, r) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" !== typeof t) return n;
                    const o = r ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][o](t)
                    })), n
                },
                once(e, t, r) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" !== typeof t) return n;

                    function o() {
                        n.off(e, o), o.__emitterProxy && delete o.__emitterProxy;
                        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        t.apply(n, i)
                    }
                    return o.__emitterProxy = t, n.on(e, o, r)
                },
                onAny(e, t) {
                    const r = this;
                    if (!r.eventsListeners || r.destroyed) return r;
                    if ("function" !== typeof e) return r;
                    const n = t ? "unshift" : "push";
                    return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const r = t.eventsAnyListeners.indexOf(e);
                    return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
                },
                off(e, t) {
                    const r = this;
                    return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach((e => {
                        "undefined" === typeof t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(((n, o) => {
                            (n === t || n.__emitterProxy && n.__emitterProxy === t) && r.eventsListeners[e].splice(o, 1)
                        }))
                    })), r) : r
                },
                emit() {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsListeners) return e;
                    let t, r, n;
                    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                    "string" === typeof i[0] || Array.isArray(i[0]) ? (t = i[0], r = i.slice(1, i.length), n = e) : (t = i[0].events, r = i[0].data, n = i[0].context || e), r.unshift(n);
                    return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                            e.apply(n, [t, ...r])
                        })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                            e.apply(n, r)
                        }))
                    })), e
                }
            };
            const f = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (r) {
                        let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !t && e.isElement && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), t && t.remove()
                    }
                },
                h = (e, t) => {
                    if (!e.slides[t]) return;
                    const r = e.slides[t].querySelector('[loading="lazy"]');
                    r && r.removeAttribute("loading")
                },
                m = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext;
                    const r = e.slides.length;
                    if (!r || !t || t < 0) return;
                    t = Math.min(t, r);
                    const n = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        o = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        const r = o,
                            i = [r - t];
                        return i.push(...Array.from({
                            length: t
                        }).map(((e, t) => r + n + t))), void e.slides.forEach(((t, r) => {
                            i.includes(t.column) && h(e, r)
                        }))
                    }
                    const i = o + n - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let a = o - t; a <= i + t; a += 1) {
                            const t = (a % r + r) % r;
                            (t < o || t > i) && h(e, t)
                        } else
                            for (let a = Math.max(o - t, 0); a <= Math.min(i + t, r - 1); a += 1) a !== o && (a > i || a < o) && h(e, a)
                };
            var v = {
                updateSize: function() {
                    const e = this;
                    let t, r;
                    const n = e.el;
                    t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : n.clientWidth, r = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : n.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt((0, i.l)(n, "padding-left") || 0, 10) - parseInt((0, i.l)(n, "padding-right") || 0, 10), r = r - parseInt((0, i.l)(n, "padding-top") || 0, 10) - parseInt((0, i.l)(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
                        width: t,
                        height: r,
                        size: e.isHorizontal() ? t : r
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function r(e, r) {
                        return parseFloat(e.getPropertyValue(t(r)) || 0)
                    }
                    const n = e.params,
                        {
                            wrapperEl: o,
                            slidesEl: a,
                            size: s,
                            rtlTranslate: l,
                            wrongRTL: c
                        } = e,
                        d = e.virtual && n.virtual.enabled,
                        u = d ? e.virtual.slides.length : e.slides.length,
                        p = (0, i.e)(a, `.${e.params.slideClass}, swiper-slide`),
                        f = d ? e.virtual.slides.length : p.length;
                    let h = [];
                    const m = [],
                        v = [];
                    let g = n.slidesOffsetBefore;
                    "function" === typeof g && (g = n.slidesOffsetBefore.call(e));
                    let y = n.slidesOffsetAfter;
                    "function" === typeof y && (y = n.slidesOffsetAfter.call(e));
                    const b = e.snapGrid.length,
                        w = e.slidesGrid.length;
                    let S = n.spaceBetween,
                        E = -g,
                        x = 0,
                        C = 0;
                    if ("undefined" === typeof s) return;
                    "string" === typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * s : "string" === typeof S && (S = parseFloat(S)), e.virtualSize = -S, p.forEach((e => {
                        l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                    })), n.centeredSlides && n.cssMode && ((0, i.s)(o, "--swiper-centered-offset-before", ""), (0, i.s)(o, "--swiper-centered-offset-after", ""));
                    const P = n.grid && n.grid.rows > 1 && e.grid;
                    let T;
                    P && e.grid.initSlides(f);
                    const _ = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e => "undefined" !== typeof n.breakpoints[e].slidesPerView)).length > 0;
                    for (let O = 0; O < f; O += 1) {
                        let o;
                        if (T = 0, p[O] && (o = p[O]), P && e.grid.updateSlide(O, o, f, t), !p[O] || "none" !== (0, i.l)(o, "display")) {
                            if ("auto" === n.slidesPerView) {
                                _ && (p[O].style[t("width")] = "");
                                const a = getComputedStyle(o),
                                    s = o.style.transform,
                                    l = o.style.webkitTransform;
                                if (s && (o.style.transform = "none"), l && (o.style.webkitTransform = "none"), n.roundLengths) T = e.isHorizontal() ? (0, i.f)(o, "width", !0) : (0, i.f)(o, "height", !0);
                                else {
                                    const e = r(a, "width"),
                                        t = r(a, "padding-left"),
                                        n = r(a, "padding-right"),
                                        i = r(a, "margin-left"),
                                        s = r(a, "margin-right"),
                                        l = a.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) T = e + i + s;
                                    else {
                                        const {
                                            clientWidth: r,
                                            offsetWidth: a
                                        } = o;
                                        T = e + t + n + i + s + (a - r)
                                    }
                                }
                                s && (o.style.transform = s), l && (o.style.webkitTransform = l), n.roundLengths && (T = Math.floor(T))
                            } else T = (s - (n.slidesPerView - 1) * S) / n.slidesPerView, n.roundLengths && (T = Math.floor(T)), p[O] && (p[O].style[t("width")] = `${T}px`);
                            p[O] && (p[O].swiperSlideSize = T), v.push(T), n.centeredSlides ? (E = E + T / 2 + x / 2 + S, 0 === x && 0 !== O && (E = E - s / 2 - S), 0 === O && (E = E - s / 2 - S), Math.abs(E) < .001 && (E = 0), n.roundLengths && (E = Math.floor(E)), C % n.slidesPerGroup === 0 && h.push(E), m.push(E)) : (n.roundLengths && (E = Math.floor(E)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup === 0 && h.push(E), m.push(E), E = E + T + S), e.virtualSize += T + S, x = T, C += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, s) + y, l && c && ("slide" === n.effect || "coverflow" === n.effect) && (o.style.width = `${e.virtualSize+S}px`), n.setWrapperSize && (o.style[t("width")] = `${e.virtualSize+S}px`), P && e.grid.updateWrapperSize(T, h, t), !n.centeredSlides) {
                        const t = [];
                        for (let r = 0; r < h.length; r += 1) {
                            let o = h[r];
                            n.roundLengths && (o = Math.floor(o)), h[r] <= e.virtualSize - s && t.push(o)
                        }
                        h = t, Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - s)
                    }
                    if (d && n.loop) {
                        const t = v[0] + S;
                        if (n.slidesPerGroup > 1) {
                            const r = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
                                o = t * n.slidesPerGroup;
                            for (let e = 0; e < r; e += 1) h.push(h[h.length - 1] + o)
                        }
                        for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1) 1 === n.slidesPerGroup && h.push(h[h.length - 1] + t), m.push(m[m.length - 1] + t), e.virtualSize += t
                    }
                    if (0 === h.length && (h = [0]), 0 !== S) {
                        const r = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
                        p.filter(((e, t) => !(n.cssMode && !n.loop) || t !== p.length - 1)).forEach((e => {
                            e.style[r] = `${S}px`
                        }))
                    }
                    if (n.centeredSlides && n.centeredSlidesBounds) {
                        let e = 0;
                        v.forEach((t => {
                            e += t + (S || 0)
                        })), e -= S;
                        const t = e - s;
                        h = h.map((e => e <= 0 ? -g : e > t ? t + y : e))
                    }
                    if (n.centerInsufficientSlides) {
                        let e = 0;
                        if (v.forEach((t => {
                                e += t + (S || 0)
                            })), e -= S, e < s) {
                            const t = (s - e) / 2;
                            h.forEach(((e, r) => {
                                h[r] = e - t
                            })), m.forEach(((e, r) => {
                                m[r] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: p,
                            snapGrid: h,
                            slidesGrid: m,
                            slidesSizesGrid: v
                        }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                        (0, i.s)(o, "--swiper-centered-offset-before", -h[0] + "px"), (0, i.s)(o, "--swiper-centered-offset-after", e.size / 2 - v[v.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            r = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + r))
                    }
                    if (f !== u && e.emit("slidesLengthChange"), h.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== w && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), !d && !n.cssMode && ("slide" === n.effect || "fade" === n.effect)) {
                        const t = `${n.containerModifierClass}backface-hidden`,
                            r = e.el.classList.contains(t);
                        f <= n.maxBackfaceHiddenSlides ? r || e.el.classList.add(t) : r && e.el.classList.remove(t)
                    }
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        r = [],
                        n = t.virtual && t.params.virtual.enabled;
                    let o, i = 0;
                    "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const a = e => n ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
                            r.push(e)
                        }));
                        else
                            for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
                                const e = t.activeIndex + o;
                                if (e > t.slides.length && !n) break;
                                r.push(a(e))
                            } else r.push(a(t.activeIndex));
                    for (o = 0; o < r.length; o += 1)
                        if ("undefined" !== typeof r[o]) {
                            const e = r[o].offsetHeight;
                            i = e > i ? e : i
                        }(i || 0 === i) && (t.wrapperEl.style.height = `${i}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides,
                        r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                    for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - r - e.cssOverflowAdjustment()
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    const t = this,
                        r = t.params,
                        {
                            slides: n,
                            rtlTranslate: o,
                            snapGrid: i
                        } = t;
                    if (0 === n.length) return;
                    "undefined" === typeof n[0].swiperSlideOffset && t.updateSlidesOffset();
                    let a = -e;
                    o && (a = e), n.forEach((e => {
                        e.classList.remove(r.slideVisibleClass)
                    })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    let s = r.spaceBetween;
                    "string" === typeof s && s.indexOf("%") >= 0 ? s = parseFloat(s.replace("%", "")) / 100 * t.size : "string" === typeof s && (s = parseFloat(s));
                    for (let l = 0; l < n.length; l += 1) {
                        const e = n[l];
                        let c = e.swiperSlideOffset;
                        r.cssMode && r.centeredSlides && (c -= n[0].swiperSlideOffset);
                        const d = (a + (r.centeredSlides ? t.minTranslate() : 0) - c) / (e.swiperSlideSize + s),
                            u = (a - i[0] + (r.centeredSlides ? t.minTranslate() : 0) - c) / (e.swiperSlideSize + s),
                            p = -(a - c),
                            f = p + t.slidesSizesGrid[l];
                        (p >= 0 && p < t.size - 1 || f > 1 && f <= t.size || p <= 0 && f >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(l), n[l].classList.add(r.slideVisibleClass)), e.progress = o ? -d : d, e.originalProgress = o ? -u : u
                    }
                },
                updateProgress: function(e) {
                    const t = this;
                    if ("undefined" === typeof e) {
                        const r = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * r || 0
                    }
                    const r = t.params,
                        n = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: o,
                        isBeginning: i,
                        isEnd: a,
                        progressLoop: s
                    } = t;
                    const l = i,
                        c = a;
                    if (0 === n) o = 0, i = !0, a = !0;
                    else {
                        o = (e - t.minTranslate()) / n;
                        const r = Math.abs(e - t.minTranslate()) < 1,
                            s = Math.abs(e - t.maxTranslate()) < 1;
                        i = r || o <= 0, a = s || o >= 1, r && (o = 0), s && (o = 1)
                    }
                    if (r.loop) {
                        const r = t.getSlideIndexByData(0),
                            n = t.getSlideIndexByData(t.slides.length - 1),
                            o = t.slidesGrid[r],
                            i = t.slidesGrid[n],
                            a = t.slidesGrid[t.slidesGrid.length - 1],
                            l = Math.abs(e);
                        s = l >= o ? (l - o) / a : (l + a - i) / a, s > 1 && (s -= 1)
                    }
                    Object.assign(t, {
                        progress: o,
                        progressLoop: s,
                        isBeginning: i,
                        isEnd: a
                    }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), i && !l && t.emit("reachBeginning toEdge"), a && !c && t.emit("reachEnd toEdge"), (l && !i || c && !a) && t.emit("fromEdge"), t.emit("progress", o)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: r,
                            slidesEl: n,
                            activeIndex: o
                        } = e,
                        a = e.virtual && r.virtual.enabled,
                        s = e => (0, i.e)(n, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
                    let l;
                    if (t.forEach((e => {
                            e.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
                        })), a)
                        if (r.loop) {
                            let t = o - e.virtual.slidesBefore;
                            t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = s(`[data-swiper-slide-index="${t}"]`)
                        } else l = s(`[data-swiper-slide-index="${o}"]`);
                    else l = t[o];
                    if (l) {
                        l.classList.add(r.slideActiveClass);
                        let e = (0, i.m)(l, `.${r.slideClass}, swiper-slide`)[0];
                        r.loop && !e && (e = t[0]), e && e.classList.add(r.slideNextClass);
                        let n = (0, i.o)(l, `.${r.slideClass}, swiper-slide`)[0];
                        r.loop && 0 === !n && (n = t[t.length - 1]), n && n.classList.add(r.slidePrevClass)
                    }
                    e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        r = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            snapGrid: n,
                            params: o,
                            activeIndex: i,
                            realIndex: a,
                            snapIndex: s
                        } = t;
                    let l, c = e;
                    const d = e => {
                        let r = e - t.virtual.slidesBefore;
                        return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r
                    };
                    if ("undefined" === typeof c && (c = function(e) {
                            const {
                                slidesGrid: t,
                                params: r
                            } = e, n = e.rtlTranslate ? e.translate : -e.translate;
                            let o;
                            for (let i = 0; i < t.length; i += 1) "undefined" !== typeof t[i + 1] ? n >= t[i] && n < t[i + 1] - (t[i + 1] - t[i]) / 2 ? o = i : n >= t[i] && n < t[i + 1] && (o = i + 1) : n >= t[i] && (o = i);
                            return r.normalizeSlideIndex && (o < 0 || "undefined" === typeof o) && (o = 0), o
                        }(t)), n.indexOf(r) >= 0) l = n.indexOf(r);
                    else {
                        const e = Math.min(o.slidesPerGroupSkip, c);
                        l = e + Math.floor((c - e) / o.slidesPerGroup)
                    }
                    if (l >= n.length && (l = n.length - 1), c === i) return l !== s && (t.snapIndex = l, t.emit("snapIndexChange")), void(t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = d(c)));
                    let u;
                    u = t.virtual && o.virtual.enabled && o.loop ? d(c) : t.slides[c] ? parseInt(t.slides[c].getAttribute("data-swiper-slide-index") || c, 10) : c, Object.assign(t, {
                        previousSnapIndex: s,
                        snapIndex: l,
                        previousRealIndex: a,
                        realIndex: u,
                        previousIndex: i,
                        activeIndex: c
                    }), t.initialized && m(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        r = t.params,
                        n = e.closest(`.${r.slideClass}, swiper-slide`);
                    let o, i = !1;
                    if (n)
                        for (let a = 0; a < t.slides.length; a += 1)
                            if (t.slides[a] === n) {
                                i = !0, o = a;
                                break
                            }
                    if (!n || !i) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = o, r.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };
            var g = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {
                        params: t,
                        rtlTranslate: r,
                        translate: n,
                        wrapperEl: o
                    } = this;
                    if (t.virtualTranslate) return r ? -n : n;
                    if (t.cssMode) return n;
                    let a = (0, i.h)(o, e);
                    return a += this.cssOverflowAdjustment(), r && (a = -a), a || 0
                },
                setTranslate: function(e, t) {
                    const r = this,
                        {
                            rtlTranslate: n,
                            params: o,
                            wrapperEl: i,
                            progress: a
                        } = r;
                    let s, l = 0,
                        c = 0;
                    r.isHorizontal() ? l = n ? -e : e : c = e, o.roundLengths && (l = Math.floor(l), c = Math.floor(c)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : c, o.cssMode ? i[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -c : o.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : c -= r.cssOverflowAdjustment(), i.style.transform = `translate3d(${l}px, ${c}px, 0px)`);
                    const d = r.maxTranslate() - r.minTranslate();
                    s = 0 === d ? 0 : (e - r.minTranslate()) / d, s !== a && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, r, n, o) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === n && (n = !0);
                    const a = this,
                        {
                            params: s,
                            wrapperEl: l
                        } = a;
                    if (a.animating && s.preventInteractionOnTransition) return !1;
                    const c = a.minTranslate(),
                        d = a.maxTranslate();
                    let u;
                    if (u = n && e > c ? c : n && e < d ? d : e, a.updateProgress(u), s.cssMode) {
                        const e = a.isHorizontal();
                        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -u;
                        else {
                            if (!a.support.smoothScroll) return (0, i.p)({
                                swiper: a,
                                targetPosition: -u,
                                side: e ? "left" : "top"
                            }), !0;
                            l.scrollTo({
                                [e ? "left" : "top"]: -u,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(u), r && (a.emit("beforeTransitionStart", t, o), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(u), r && (a.emit("beforeTransitionStart", t, o), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, r && a.emit("transitionEnd"))
                    }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
                }
            };

            function y(e) {
                let {
                    swiper: t,
                    runCallbacks: r,
                    direction: n,
                    step: o
                } = e;
                const {
                    activeIndex: i,
                    previousIndex: a
                } = t;
                let s = n;
                if (s || (s = i > a ? "next" : i < a ? "prev" : "reset"), t.emit(`transition${o}`), r && i !== a) {
                    if ("reset" === s) return void t.emit(`slideResetTransition${o}`);
                    t.emit(`slideChangeTransition${o}`), "next" === s ? t.emit(`slideNextTransition${o}`) : t.emit(`slidePrevTransition${o}`)
                }
            }
            var b = {
                slideTo: function(e, t, r, n, o) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" === typeof e && (e = parseInt(e, 10));
                    const a = this;
                    let s = e;
                    s < 0 && (s = 0);
                    const {
                        params: l,
                        snapGrid: c,
                        slidesGrid: d,
                        previousIndex: u,
                        activeIndex: p,
                        rtlTranslate: f,
                        wrapperEl: h,
                        enabled: m
                    } = a;
                    if (a.animating && l.preventInteractionOnTransition || !m && !n && !o) return !1;
                    const v = Math.min(a.params.slidesPerGroupSkip, s);
                    let g = v + Math.floor((s - v) / a.params.slidesPerGroup);
                    g >= c.length && (g = c.length - 1);
                    const y = -c[g];
                    if (l.normalizeSlideIndex)
                        for (let i = 0; i < d.length; i += 1) {
                            const e = -Math.floor(100 * y),
                                t = Math.floor(100 * d[i]),
                                r = Math.floor(100 * d[i + 1]);
                            "undefined" !== typeof d[i + 1] ? e >= t && e < r - (r - t) / 2 ? s = i : e >= t && e < r && (s = i + 1) : e >= t && (s = i)
                        }
                    if (a.initialized && s !== p) {
                        if (!a.allowSlideNext && (f ? y > a.translate && y > a.minTranslate() : y < a.translate && y < a.minTranslate())) return !1;
                        if (!a.allowSlidePrev && y > a.translate && y > a.maxTranslate() && (p || 0) !== s) return !1
                    }
                    let b;
                    if (s !== (u || 0) && r && a.emit("beforeSlideChangeStart"), a.updateProgress(y), b = s > p ? "next" : s < p ? "prev" : "reset", f && -y === a.translate || !f && y === a.translate) return a.updateActiveIndex(s), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(y), "reset" !== b && (a.transitionStart(r, b), a.transitionEnd(r, b)), !1;
                    if (l.cssMode) {
                        const e = a.isHorizontal(),
                            r = f ? y : -y;
                        if (0 === t) {
                            const t = a.virtual && a.params.virtual.enabled;
                            t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                                h[e ? "scrollLeft" : "scrollTop"] = r
                            }))) : h[e ? "scrollLeft" : "scrollTop"] = r, t && requestAnimationFrame((() => {
                                a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
                            }))
                        } else {
                            if (!a.support.smoothScroll) return (0, i.p)({
                                swiper: a,
                                targetPosition: r,
                                side: e ? "left" : "top"
                            }), !0;
                            h.scrollTo({
                                [e ? "left" : "top"]: r,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return a.setTransition(t), a.setTranslate(y), a.updateActiveIndex(s), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, n), a.transitionStart(r, b), 0 === t ? a.transitionEnd(r, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(r, b))
                    }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e, t, r, n) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" === typeof e) {
                        e = parseInt(e, 10)
                    }
                    const o = this;
                    let i = e;
                    return o.params.loop && (o.virtual && o.params.virtual.enabled ? i += o.virtual.slidesBefore : i = o.getSlideIndexByData(i)), o.slideTo(i, t, r, n)
                },
                slideNext: function(e, t, r) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const n = this,
                        {
                            enabled: o,
                            params: i,
                            animating: a
                        } = n;
                    if (!o) return n;
                    let s = i.slidesPerGroup;
                    "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (s = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                    const l = n.activeIndex < i.slidesPerGroupSkip ? 1 : s,
                        c = n.virtual && i.virtual.enabled;
                    if (i.loop) {
                        if (a && !c && i.loopPreventsSliding) return !1;
                        n.loopFix({
                            direction: "next"
                        }), n._clientLeft = n.wrapperEl.clientLeft
                    }
                    return i.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r)
                },
                slidePrev: function(e, t, r) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const n = this,
                        {
                            params: o,
                            snapGrid: i,
                            slidesGrid: a,
                            rtlTranslate: s,
                            enabled: l,
                            animating: c
                        } = n;
                    if (!l) return n;
                    const d = n.virtual && o.virtual.enabled;
                    if (o.loop) {
                        if (c && !d && o.loopPreventsSliding) return !1;
                        n.loopFix({
                            direction: "prev"
                        }), n._clientLeft = n.wrapperEl.clientLeft
                    }

                    function u(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const p = u(s ? n.translate : -n.translate),
                        f = i.map((e => u(e)));
                    let h = i[f.indexOf(p) - 1];
                    if ("undefined" === typeof h && o.cssMode) {
                        let e;
                        i.forEach(((t, r) => {
                            p >= t && (e = r)
                        })), "undefined" !== typeof e && (h = i[e > 0 ? e - 1 : e])
                    }
                    let m = 0;
                    if ("undefined" !== typeof h && (m = a.indexOf(h), m < 0 && (m = n.activeIndex - 1), "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (m = m - n.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), o.rewind && n.isBeginning) {
                        const o = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                        return n.slideTo(o, e, t, r)
                    }
                    return n.slideTo(m, e, t, r)
                },
                slideReset: function(e, t, r) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, r)
                },
                slideToClosest: function(e, t, r, n) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = .5);
                    const o = this;
                    let i = o.activeIndex;
                    const a = Math.min(o.params.slidesPerGroupSkip, i),
                        s = a + Math.floor((i - a) / o.params.slidesPerGroup),
                        l = o.rtlTranslate ? o.translate : -o.translate;
                    if (l >= o.snapGrid[s]) {
                        const e = o.snapGrid[s];
                        l - e > (o.snapGrid[s + 1] - e) * n && (i += o.params.slidesPerGroup)
                    } else {
                        const e = o.snapGrid[s - 1];
                        l - e <= (o.snapGrid[s] - e) * n && (i -= o.params.slidesPerGroup)
                    }
                    return i = Math.max(i, 0), i = Math.min(i, o.slidesGrid.length - 1), o.slideTo(i, e, t, r)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            slidesEl: r
                        } = e,
                        n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let o, a = e.clickedIndex;
                    const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                    if (t.loop) {
                        if (e.animating) return;
                        o = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - n / 2 || a > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), a = e.getSlideIndex((0, i.e)(r, `${s}[data-swiper-slide-index="${o}"]`)[0]), (0, i.n)((() => {
                            e.slideTo(a)
                        }))) : e.slideTo(a) : a > e.slides.length - n ? (e.loopFix(), a = e.getSlideIndex((0, i.e)(r, `${s}[data-swiper-slide-index="${o}"]`)[0]), (0, i.n)((() => {
                            e.slideTo(a)
                        }))) : e.slideTo(a)
                    } else e.slideTo(a)
                }
            };
            var w = {
                loopCreate: function(e) {
                    const t = this,
                        {
                            params: r,
                            slidesEl: n
                        } = t;
                    if (!r.loop || t.virtual && t.params.virtual.enabled) return;
                    (0, i.e)(n, `.${r.slideClass}, swiper-slide`).forEach(((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t)
                    })), t.loopFix({
                        slideRealIndex: e,
                        direction: r.centeredSlides ? void 0 : "next"
                    })
                },
                loopFix: function(e) {
                    let {
                        slideRealIndex: t,
                        slideTo: r = !0,
                        direction: n,
                        setTranslate: o,
                        activeSlideIndex: i,
                        byController: a,
                        byMousewheel: s
                    } = void 0 === e ? {} : e;
                    const l = this;
                    if (!l.params.loop) return;
                    l.emit("beforeLoopFix");
                    const {
                        slides: c,
                        allowSlidePrev: d,
                        allowSlideNext: u,
                        slidesEl: p,
                        params: f
                    } = l;
                    if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && f.virtual.enabled) return r && (f.centeredSlides || 0 !== l.snapIndex ? f.centeredSlides && l.snapIndex < f.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = d, l.allowSlideNext = u, void l.emit("loopFix");
                    const h = "auto" === f.slidesPerView ? l.slidesPerViewDynamic() : Math.ceil(parseFloat(f.slidesPerView, 10));
                    let m = f.loopedSlides || h;
                    m % f.slidesPerGroup !== 0 && (m += f.slidesPerGroup - m % f.slidesPerGroup), l.loopedSlides = m;
                    const v = [],
                        g = [];
                    let y = l.activeIndex;
                    "undefined" === typeof i ? i = l.getSlideIndex(l.slides.filter((e => e.classList.contains(f.slideActiveClass)))[0]) : y = i;
                    const b = "next" === n || !n,
                        w = "prev" === n || !n;
                    let S = 0,
                        E = 0;
                    if (i < m) {
                        S = Math.max(m - i, f.slidesPerGroup);
                        for (let e = 0; e < m - i; e += 1) {
                            const t = e - Math.floor(e / c.length) * c.length;
                            v.push(c.length - t - 1)
                        }
                    } else if (i > l.slides.length - 2 * m) {
                        E = Math.max(i - (l.slides.length - 2 * m), f.slidesPerGroup);
                        for (let e = 0; e < E; e += 1) {
                            const t = e - Math.floor(e / c.length) * c.length;
                            g.push(t)
                        }
                    }
                    if (w && v.forEach((e => {
                            l.slides[e].swiperLoopMoveDOM = !0, p.prepend(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                        })), b && g.forEach((e => {
                            l.slides[e].swiperLoopMoveDOM = !0, p.append(l.slides[e]), l.slides[e].swiperLoopMoveDOM = !1
                        })), l.recalcSlides(), "auto" === f.slidesPerView && l.updateSlides(), f.watchSlidesProgress && l.updateSlidesOffset(), r)
                        if (v.length > 0 && w)
                            if ("undefined" === typeof t) {
                                const e = l.slidesGrid[y],
                                    t = l.slidesGrid[y + S] - e;
                                s ? l.setTranslate(l.translate - t) : (l.slideTo(y + S, 0, !1, !0), o && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t, l.touchEventsData.currentTranslate = l.translate))
                            } else o && (l.slideToLoop(t, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate);
                    else if (g.length > 0 && b)
                        if ("undefined" === typeof t) {
                            const e = l.slidesGrid[y],
                                t = l.slidesGrid[y - E] - e;
                            s ? l.setTranslate(l.translate - t) : (l.slideTo(y - E, 0, !1, !0), o && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t, l.touchEventsData.currentTranslate = l.translate))
                        } else l.slideToLoop(t, 0, !1, !0);
                    if (l.allowSlidePrev = d, l.allowSlideNext = u, l.controller && l.controller.control && !a) {
                        const e = {
                            slideRealIndex: t,
                            direction: n,
                            setTranslate: o,
                            activeSlideIndex: i,
                            byController: !0
                        };
                        Array.isArray(l.controller.control) ? l.controller.control.forEach((t => {
                            !t.destroyed && t.params.loop && t.loopFix({ ...e,
                                slideTo: t.params.slidesPerView === f.slidesPerView && r
                            })
                        })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({ ...e,
                            slideTo: l.controller.control.params.slidesPerView === f.slidesPerView && r
                        })
                    }
                    l.emit("loopFix")
                },
                loopDestroy: function() {
                    const e = this,
                        {
                            params: t,
                            slidesEl: r
                        } = e;
                    if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                    e.recalcSlides();
                    const n = [];
                    e.slides.forEach((e => {
                        const t = "undefined" === typeof e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                        n[t] = e
                    })), e.slides.forEach((e => {
                        e.removeAttribute("data-swiper-slide-index")
                    })), n.forEach((e => {
                        r.append(e)
                    })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
                }
            };

            function S(e) {
                const t = this,
                    r = (0, o.g)(),
                    n = (0, o.a)(),
                    a = t.touchEventsData;
                a.evCache.push(e);
                const {
                    params: s,
                    touches: l,
                    enabled: c
                } = t;
                if (!c) return;
                if (!s.simulateTouch && "mouse" === e.pointerType) return;
                if (t.animating && s.preventInteractionOnTransition) return;
                !t.animating && s.cssMode && s.loop && t.loopFix();
                let d = e;
                d.originalEvent && (d = d.originalEvent);
                let u = d.target;
                if ("wrapper" === s.touchEventsTarget && !t.wrapperEl.contains(u)) return;
                if ("which" in d && 3 === d.which) return;
                if ("button" in d && d.button > 0) return;
                if (a.isTouched && a.isMoved) return;
                const p = !!s.noSwipingClass && "" !== s.noSwipingClass,
                    f = e.composedPath ? e.composedPath() : e.path;
                p && d.target && d.target.shadowRoot && f && (u = f[0]);
                const h = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
                    m = !(!d.target || !d.target.shadowRoot);
                if (s.noSwiping && (m ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(r) {
                                if (!r || r === (0, o.g)() || r === (0, o.a)()) return null;
                                r.assignedSlot && (r = r.assignedSlot);
                                const n = r.closest(e);
                                return n || r.getRootNode ? n || t(r.getRootNode().host) : null
                            }(t)
                    }(h, u) : u.closest(h))) return void(t.allowClick = !0);
                if (s.swipeHandler && !u.closest(s.swipeHandler)) return;
                l.currentX = d.pageX, l.currentY = d.pageY;
                const v = l.currentX,
                    g = l.currentY,
                    y = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                    b = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                if (y && (v <= b || v >= n.innerWidth - b)) {
                    if ("prevent" !== y) return;
                    e.preventDefault()
                }
                Object.assign(a, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), l.startX = v, l.startY = g, a.touchStartTime = (0, i.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (a.allowThresholdMove = !1);
                let w = !0;
                u.matches(a.focusableElements) && (w = !1, "SELECT" === u.nodeName && (a.isTouched = !1)), r.activeElement && r.activeElement.matches(a.focusableElements) && r.activeElement !== u && r.activeElement.blur();
                const S = w && t.allowTouchMove && s.touchStartPreventDefault;
                !s.touchStartForcePreventDefault && !S || u.isContentEditable || d.preventDefault(), s.freeMode && s.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", d)
            }

            function E(e) {
                const t = (0, o.g)(),
                    r = this,
                    n = r.touchEventsData,
                    {
                        params: a,
                        touches: s,
                        rtlTranslate: l,
                        enabled: c
                    } = r;
                if (!c) return;
                if (!a.simulateTouch && "mouse" === e.pointerType) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", d));
                const u = n.evCache.findIndex((e => e.pointerId === d.pointerId));
                u >= 0 && (n.evCache[u] = d);
                const p = n.evCache.length > 1 ? n.evCache[0] : d,
                    f = p.pageX,
                    h = p.pageY;
                if (d.preventedByNestedSwiper) return s.startX = f, void(s.startY = h);
                if (!r.allowTouchMove) return d.target.matches(n.focusableElements) || (r.allowClick = !1), void(n.isTouched && (Object.assign(s, {
                    startX: f,
                    startY: h,
                    prevX: r.touches.currentX,
                    prevY: r.touches.currentY,
                    currentX: f,
                    currentY: h
                }), n.touchStartTime = (0, i.d)()));
                if (a.touchReleaseOnEdges && !a.loop)
                    if (r.isVertical()) {
                        if (h < s.startY && r.translate <= r.maxTranslate() || h > s.startY && r.translate >= r.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                    } else if (f < s.startX && r.translate <= r.maxTranslate() || f > s.startX && r.translate >= r.minTranslate()) return;
                if (t.activeElement && d.target === t.activeElement && d.target.matches(n.focusableElements)) return n.isMoved = !0, void(r.allowClick = !1);
                if (n.allowTouchCallbacks && r.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                s.currentX = f, s.currentY = h;
                const m = s.currentX - s.startX,
                    v = s.currentY - s.startY;
                if (r.params.threshold && Math.sqrt(m ** 2 + v ** 2) < r.params.threshold) return;
                if ("undefined" === typeof n.isScrolling) {
                    let e;
                    r.isHorizontal() && s.currentY === s.startY || r.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : m * m + v * v >= 25 && (e = 180 * Math.atan2(Math.abs(v), Math.abs(m)) / Math.PI, n.isScrolling = r.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
                }
                if (n.isScrolling && r.emit("touchMoveOpposite", d), "undefined" === typeof n.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (n.startMoving = !0)), n.isScrolling || r.zoom && r.params.zoom && r.params.zoom.enabled && n.evCache.length > 1) return void(n.isTouched = !1);
                if (!n.startMoving) return;
                r.allowClick = !1, !a.cssMode && d.cancelable && d.preventDefault(), a.touchMoveStopPropagation && !a.nested && d.stopPropagation();
                let g = r.isHorizontal() ? m : v,
                    y = r.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
                a.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), y = Math.abs(y) * (l ? 1 : -1)), s.diff = g, g *= a.touchRatio, l && (g = -g, y = -y);
                const b = r.touchesDirection;
                r.swipeDirection = g > 0 ? "prev" : "next", r.touchesDirection = y > 0 ? "prev" : "next";
                const w = r.params.loop && !a.cssMode;
                if (!n.isMoved) {
                    if (w && r.loopFix({
                            direction: r.swipeDirection
                        }), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
                        const e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        r.wrapperEl.dispatchEvent(e)
                    }
                    n.allowMomentumBounce = !1, !a.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", d)
                }
                let S;
                n.isMoved && b !== r.touchesDirection && w && Math.abs(g) >= 1 && (r.loopFix({
                    direction: r.swipeDirection,
                    setTranslate: !0
                }), S = !0), r.emit("sliderMove", d), n.isMoved = !0, n.currentTranslate = g + n.startTranslate;
                let E = !0,
                    x = a.resistanceRatio;
                if (a.touchReleaseOnEdges && (x = 0), g > 0 ? (w && !S && n.currentTranslate > (a.centeredSlides ? r.minTranslate() - r.size / 2 : r.minTranslate()) && r.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), n.currentTranslate > r.minTranslate() && (E = !1, a.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + g) ** x))) : g < 0 && (w && !S && n.currentTranslate < (a.centeredSlides ? r.maxTranslate() + r.size / 2 : r.maxTranslate()) && r.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: r.slides.length - ("auto" === a.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
                    }), n.currentTranslate < r.maxTranslate() && (E = !1, a.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - g) ** x))), E && (d.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate), a.threshold > 0) {
                    if (!(Math.abs(g) > a.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                    if (!n.allowThresholdMove) return n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, void(s.diff = r.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                }
                a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && r.freeMode || a.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate))
            }

            function x(e) {
                const t = this,
                    r = t.touchEventsData,
                    n = r.evCache.findIndex((t => t.pointerId === e.pointerId));
                if (n >= 0 && r.evCache.splice(n, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
                    if (!(["pointercancel", "contextmenu"].includes(e.type) && (t.browser.isSafari || t.browser.isWebView))) return
                }
                const {
                    params: o,
                    touches: a,
                    rtlTranslate: s,
                    slidesGrid: l,
                    enabled: c
                } = t;
                if (!c) return;
                if (!o.simulateTouch && "mouse" === e.pointerType) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), r.allowTouchCallbacks && t.emit("touchEnd", d), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && o.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
                o.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const u = (0, i.d)(),
                    p = u - r.touchStartTime;
                if (t.allowClick) {
                    const e = d.path || d.composedPath && d.composedPath();
                    t.updateClickedSlide(e && e[0] || d.target), t.emit("tap click", d), p < 300 && u - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)
                }
                if (r.lastClickTime = (0, i.d)(), (0, i.n)((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === a.diff || r.currentTranslate === r.startTranslate) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
                let f;
                if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, f = o.followFinger ? s ? t.translate : -t.translate : -r.currentTranslate, o.cssMode) return;
                if (o.freeMode && o.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: f
                });
                let h = 0,
                    m = t.slidesSizesGrid[0];
                for (let i = 0; i < l.length; i += i < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
                    const e = i < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
                    "undefined" !== typeof l[i + e] ? f >= l[i] && f < l[i + e] && (h = i, m = l[i + e] - l[i]) : f >= l[i] && (h = i, m = l[l.length - 1] - l[l.length - 2])
                }
                let v = null,
                    g = null;
                o.rewind && (t.isBeginning ? g = o.virtual && o.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
                const y = (f - l[h]) / m,
                    b = h < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
                if (p > o.longSwipesMs) {
                    if (!o.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (y >= o.longSwipesRatio ? t.slideTo(o.rewind && t.isEnd ? v : h + b) : t.slideTo(h)), "prev" === t.swipeDirection && (y > 1 - o.longSwipesRatio ? t.slideTo(h + b) : null !== g && y < 0 && Math.abs(y) > o.longSwipesRatio ? t.slideTo(g) : t.slideTo(h))
                } else {
                    if (!o.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(h + b) : t.slideTo(h) : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : h + b), "prev" === t.swipeDirection && t.slideTo(null !== g ? g : h))
                }
            }

            function C() {
                const e = this,
                    {
                        params: t,
                        el: r
                    } = e;
                if (r && 0 === r.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: n,
                    allowSlidePrev: o,
                    snapGrid: i
                } = e, a = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                const s = a && t.loop;
                !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || s ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }), 500)), e.allowSlidePrev = o, e.allowSlideNext = n, e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow()
            }

            function P(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function T() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: r,
                        enabled: n
                    } = e;
                if (!n) return;
                let o;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const i = e.maxTranslate() - e.minTranslate();
                o = 0 === i ? 0 : (e.translate - e.minTranslate()) / i, o !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }

            function _(e) {
                const t = this;
                f(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
            }
            let O = !1;

            function A() {}
            const k = (e, t) => {
                const r = (0, o.g)(),
                    {
                        params: n,
                        el: i,
                        wrapperEl: a,
                        device: s
                    } = e,
                    l = !!n.nested,
                    c = "on" === t ? "addEventListener" : "removeEventListener",
                    d = t;
                i[c]("pointerdown", e.onTouchStart, {
                    passive: !1
                }), r[c]("pointermove", e.onTouchMove, {
                    passive: !1,
                    capture: l
                }), r[c]("pointerup", e.onTouchEnd, {
                    passive: !0
                }), r[c]("pointercancel", e.onTouchEnd, {
                    passive: !0
                }), r[c]("pointerout", e.onTouchEnd, {
                    passive: !0
                }), r[c]("pointerleave", e.onTouchEnd, {
                    passive: !0
                }), r[c]("contextmenu", e.onTouchEnd, {
                    passive: !0
                }), (n.preventClicks || n.preventClicksPropagation) && i[c]("click", e.onClick, !0), n.cssMode && a[c]("scroll", e.onScroll), n.updateOnWindowResize ? e[d](s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", C, !0) : e[d]("observerUpdate", C, !0), i[c]("load", e.onLoad, {
                    capture: !0
                })
            };
            const M = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var R = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopedSlides: null,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function Z(e, t) {
                return function(r) {
                    void 0 === r && (r = {});
                    const n = Object.keys(r)[0],
                        o = r[n];
                    "object" === typeof o && null !== o ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === e[n] && (e[n] = {
                        auto: !0
                    }), n in e && "enabled" in o ? (!0 === e[n] && (e[n] = {
                        enabled: !0
                    }), "object" !== typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
                        enabled: !1
                    }), (0, i.q)(t, r)) : (0, i.q)(t, r)) : (0, i.q)(t, r)
                }
            }
            const I = {
                    eventsEmitter: p,
                    update: v,
                    translate: g,
                    transition: {
                        setTransition: function(e, t) {
                            const r = this;
                            r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), r.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            const r = this,
                                {
                                    params: n
                                } = r;
                            n.cssMode || (n.autoHeight && r.updateAutoHeight(), y({
                                swiper: r,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            const r = this,
                                {
                                    params: n
                                } = r;
                            r.animating = !1, n.cssMode || (r.setTransition(0), y({
                                swiper: r,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: b,
                    loop: w,
                    grabCursor: {
                        setGrabCursor: function(e) {
                            const t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                                t.__preventObserver__ = !1
                            }))
                        },
                        unsetGrabCursor: function() {
                            const e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                                e.__preventObserver__ = !1
                            })))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            const e = this,
                                t = (0, o.g)(),
                                {
                                    params: r
                                } = e;
                            e.onTouchStart = S.bind(e), e.onTouchMove = E.bind(e), e.onTouchEnd = x.bind(e), r.cssMode && (e.onScroll = T.bind(e)), e.onClick = P.bind(e), e.onLoad = _.bind(e), O || (t.addEventListener("touchstart", A), O = !0), k(e, "on")
                        },
                        detachEvents: function() {
                            k(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            const e = this,
                                {
                                    realIndex: t,
                                    initialized: r,
                                    params: n,
                                    el: o
                                } = e,
                                a = n.breakpoints;
                            if (!a || a && 0 === Object.keys(a).length) return;
                            const s = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                            if (!s || e.currentBreakpoint === s) return;
                            const l = (s in a ? a[s] : void 0) || e.originalParams,
                                c = M(e, n),
                                d = M(e, l),
                                u = n.enabled;
                            c && !d ? (o.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (o.classList.add(`${n.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === n.grid.fill) && o.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                                if ("undefined" === typeof l[t]) return;
                                const r = n[t] && n[t].enabled,
                                    o = l[t] && l[t].enabled;
                                r && !o && e[t].disable(), !r && o && e[t].enable()
                            }));
                            const p = l.direction && l.direction !== n.direction,
                                f = n.loop && (l.slidesPerView !== n.slidesPerView || p);
                            p && r && e.changeDirection(), (0, i.q)(e.params, l);
                            const h = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), u && !h ? e.disable() : !u && h && e.enable(), e.currentBreakpoint = s, e.emit("_beforeBreakpoint", l), f && r && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", l)
                        },
                        getBreakpoint: function(e, t, r) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
                            let n = !1;
                            const i = (0, o.a)(),
                                a = "window" === t ? i.innerHeight : r.clientHeight,
                                s = Object.keys(e).map((e => {
                                    if ("string" === typeof e && 0 === e.indexOf("@")) {
                                        const t = parseFloat(e.substr(1));
                                        return {
                                            value: a * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                }));
                            s.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                            for (let o = 0; o < s.length; o += 1) {
                                const {
                                    point: e,
                                    value: a
                                } = s[o];
                                "window" === t ? i.matchMedia(`(min-width: ${a}px)`).matches && (n = e) : a <= r.clientWidth && (n = e)
                            }
                            return n || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                {
                                    isLocked: t,
                                    params: r
                                } = e,
                                {
                                    slidesOffsetBefore: n
                                } = r;
                            if (n) {
                                const t = e.slides.length - 1,
                                    r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                                e.isLocked = e.size > r
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            const e = this,
                                {
                                    classNames: t,
                                    params: r,
                                    rtl: n,
                                    el: o,
                                    device: i
                                } = e,
                                a = function(e, t) {
                                    const r = [];
                                    return e.forEach((e => {
                                        "object" === typeof e ? Object.keys(e).forEach((n => {
                                            e[n] && r.push(t + n)
                                        })) : "string" === typeof e && r.push(t + e)
                                    })), r
                                }(["initialized", r.direction, {
                                    "free-mode": e.params.freeMode && r.freeMode.enabled
                                }, {
                                    autoheight: r.autoHeight
                                }, {
                                    rtl: n
                                }, {
                                    grid: r.grid && r.grid.rows > 1
                                }, {
                                    "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                                }, {
                                    android: i.android
                                }, {
                                    ios: i.ios
                                }, {
                                    "css-mode": r.cssMode
                                }, {
                                    centered: r.cssMode && r.centeredSlides
                                }, {
                                    "watch-progress": r.watchSlidesProgress
                                }], r.containerModifierClass);
                            t.push(...a), o.classList.add(...t), e.emitContainerClasses()
                        },
                        removeClasses: function() {
                            const {
                                el: e,
                                classNames: t
                            } = this;
                            e.classList.remove(...t), this.emitContainerClasses()
                        }
                    }
                },
                j = {};
            class H {
                constructor() {
                    let e, t;
                    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                    1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = (0, i.q)({}, t), e && !t.el && (t.el = e);
                    const s = (0, o.g)();
                    if (t.el && "string" === typeof t.el && s.querySelectorAll(t.el).length > 1) {
                        const e = [];
                        return s.querySelectorAll(t.el).forEach((r => {
                            const n = (0, i.q)({}, t, {
                                el: r
                            });
                            e.push(new H(n))
                        })), e
                    }
                    const l = this;
                    l.__swiper__ = !0, l.support = c(), l.device = d({
                        userAgent: t.userAgent
                    }), l.browser = u(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
                    const p = {};
                    l.modules.forEach((e => {
                        e({
                            params: t,
                            swiper: l,
                            extendParams: Z(t, p),
                            on: l.on.bind(l),
                            once: l.once.bind(l),
                            off: l.off.bind(l),
                            emit: l.emit.bind(l)
                        })
                    }));
                    const f = (0, i.q)({}, R, p);
                    return l.params = (0, i.q)({}, f, j, t), l.originalParams = (0, i.q)({}, l.params), l.passedParams = (0, i.q)({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
                        l.on(e, l.params.on[e])
                    })), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
                        enabled: l.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === l.params.direction,
                        isVertical: () => "vertical" === l.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                        },
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: l.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            evCache: []
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.emit("_swiper"), l.params.init && l.init(), l
                }
                getSlideIndex(e) {
                    const {
                        slidesEl: t,
                        params: r
                    } = this, n = (0, i.e)(t, `.${r.slideClass}, swiper-slide`), o = (0, i.g)(n[0]);
                    return (0, i.g)(e) - o
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
                }
                recalcSlides() {
                    const {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = (0, i.e)(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const r = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const n = r.minTranslate(),
                        o = (r.maxTranslate() - n) * e + n;
                    r.translateTo(o, "undefined" === typeof t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.forEach((r => {
                        const n = e.getSlideClasses(r);
                        t.push({
                            slideEl: r,
                            classNames: n
                        }), e.emit("_slideClass", r, n)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    const {
                        params: r,
                        slides: n,
                        slidesGrid: o,
                        slidesSizesGrid: i,
                        size: a,
                        activeIndex: s
                    } = this;
                    let l = 1;
                    if (r.centeredSlides) {
                        let e, t = n[s] ? n[s].swiperSlideSize : 0;
                        for (let r = s + 1; r < n.length; r += 1) n[r] && !e && (t += n[r].swiperSlideSize, l += 1, t > a && (e = !0));
                        for (let r = s - 1; r >= 0; r -= 1) n[r] && !e && (t += n[r].swiperSlideSize, l += 1, t > a && (e = !0))
                    } else if ("current" === e)
                        for (let c = s + 1; c < n.length; c += 1) {
                            (t ? o[c] + i[c] - o[s] < a : o[c] - o[s] < a) && (l += 1)
                        } else
                            for (let c = s - 1; c >= 0; c -= 1) {
                                o[s] - o[c] < a && (l += 1)
                            }
                    return l
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: r
                    } = e;

                    function n() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let o;
                    if (r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                            t.complete && f(e, t)
                        })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) n(), r.autoHeight && e.updateAutoHeight();
                    else {
                        if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
                            const t = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
                            o = e.slideTo(t.length - 1, 0, !1, !0)
                        } else o = e.slideTo(e.activeIndex, 0, !1, !0);
                        o || n()
                    }
                    r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    const r = this,
                        n = r.params.direction;
                    return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${n}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), r.emit("changeDirection"), t && r.update()), r
                }
                changeLanguageDirection(e) {
                    const t = this;
                    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    let r = e || t.params.el;
                    if ("string" === typeof r && (r = document.querySelector(r)), !r) return !1;
                    r.swiper = t, r.parentNode && r.parentNode.host && "SWIPER-CONTAINER" === r.parentNode.host.nodeName && (t.isElement = !0);
                    const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                    let o = (() => {
                        if (r && r.shadowRoot && r.shadowRoot.querySelector) {
                            return r.shadowRoot.querySelector(n())
                        }
                        return (0, i.e)(r, n())[0]
                    })();
                    return !o && t.params.createElements && (o = (0, i.c)("div", t.params.wrapperClass), r.append(o), (0, i.e)(r, `.${t.params.slideClass}`).forEach((e => {
                        o.append(e)
                    }))), Object.assign(t, {
                        el: r,
                        wrapperEl: o,
                        slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
                        hostEl: t.isElement ? r.parentNode.host : r,
                        mounted: !0,
                        rtl: "rtl" === r.dir.toLowerCase() || "rtl" === (0, i.l)(r, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === (0, i.l)(r, "direction")),
                        wrongRTL: "-webkit-box" === (0, i.l)(o, "display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    if (!1 === t.mount(e)) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    const r = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((e => {
                        e.complete ? f(t, e) : e.addEventListener("load", (e => {
                            f(t, e.target)
                        }))
                    })), m(t), t.initialized = !0, m(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    const r = this,
                        {
                            params: n,
                            el: o,
                            wrapperEl: a,
                            slides: s
                        } = r;
                    return "undefined" === typeof r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), t && (r.removeClasses(), o.removeAttribute("style"), a.removeAttribute("style"), s && s.length && s.forEach((e => {
                        e.classList.remove(n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    }))), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((e => {
                        r.off(e)
                    })), !1 !== e && (r.el.swiper = null, (0, i.r)(r)), r.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, i.q)(j, e)
                }
                static get extendedDefaults() {
                    return j
                }
                static get defaults() {
                    return R
                }
                static installModule(e) {
                    H.prototype.__modules__ || (H.prototype.__modules__ = []);
                    const t = H.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => H.installModule(e))), H) : (H.installModule(e), H)
                }
            }
            Object.keys(I).forEach((e => {
                Object.keys(I[e]).forEach((t => {
                    H.prototype[t] = I[e][t]
                }))
            })), H.use([function(e) {
                let {
                    swiper: t,
                    on: r,
                    emit: n
                } = e;
                const i = (0, o.a)();
                let a = null,
                    s = null;
                const l = () => {
                        t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
                    },
                    c = () => {
                        t && !t.destroyed && t.initialized && n("orientationchange")
                    };
                r("init", (() => {
                    t.params.resizeObserver && "undefined" !== typeof i.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
                        s = i.requestAnimationFrame((() => {
                            const {
                                width: r,
                                height: n
                            } = t;
                            let o = r,
                                i = n;
                            e.forEach((e => {
                                let {
                                    contentBoxSize: r,
                                    contentRect: n,
                                    target: a
                                } = e;
                                a && a !== t.el || (o = n ? n.width : (r[0] || r).inlineSize, i = n ? n.height : (r[0] || r).blockSize)
                            })), o === r && i === n || l()
                        }))
                    })), a.observe(t.el)) : (i.addEventListener("resize", l), i.addEventListener("orientationchange", c))
                })), r("destroy", (() => {
                    s && i.cancelAnimationFrame(s), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", c)
                }))
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: r,
                    on: n,
                    emit: a
                } = e;
                const s = [],
                    l = (0, o.a)(),
                    c = function(e, r) {
                        void 0 === r && (r = {});
                        const n = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
                            if (t.__preventObserver__) return;
                            if (1 === e.length) return void a("observerUpdate", e[0]);
                            const r = function() {
                                a("observerUpdate", e[0])
                            };
                            l.requestAnimationFrame ? l.requestAnimationFrame(r) : l.setTimeout(r, 0)
                        }));
                        n.observe(e, {
                            attributes: "undefined" === typeof r.attributes || r.attributes,
                            childList: "undefined" === typeof r.childList || r.childList,
                            characterData: "undefined" === typeof r.characterData || r.characterData
                        }), s.push(n)
                    };
                r({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), n("init", (() => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            const e = (0, i.a)(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) c(e[t])
                        }
                        c(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), c(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                })), n("destroy", (() => {
                    s.forEach((e => {
                        e.disconnect()
                    })), s.splice(0, s.length)
                }))
            }]);
            const L = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function D(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function $(e, t) {
                const r = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => r.indexOf(e) < 0)).forEach((r => {
                    "undefined" === typeof e[r] ? e[r] = t[r] : D(t[r]) && D(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : $(e[r], t[r]) : e[r] = t[r]
                }))
            }

            function W(e) {
                return void 0 === e && (e = {}), e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function z(e) {
                return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el
            }

            function N(e) {
                return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function B(e) {
                void 0 === e && (e = "");
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    r = [];
                return t.forEach((e => {
                    r.indexOf(e) < 0 && r.push(e)
                })), r.join(" ")
            }

            function F(e) {
                return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
            }

            function K() {
                return K = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, K.apply(this, arguments)
            }

            function U(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function J(e) {
                const t = [];
                return n.Children.toArray(e).forEach((e => {
                    U(e) ? t.push(e) : e.props && e.props.children && J(e.props.children).forEach((e => t.push(e)))
                })), t
            }

            function G(e) {
                const t = [],
                    r = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return n.Children.toArray(e).forEach((e => {
                    if (U(e)) t.push(e);
                    else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        const n = J(e.props.children);
                        n.length > 0 ? n.forEach((e => t.push(e))) : r["container-end"].push(e)
                    } else r["container-end"].push(e)
                })), {
                    slides: t,
                    slots: r
                }
            }

            function q(e, t) {
                return "undefined" === typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }
            const V = (0, n.createContext)(null),
                X = (0, n.createContext)(null),
                Y = (0, n.forwardRef)((function(e, t) {
                    let {
                        className: r,
                        tag: o = "div",
                        wrapperTag: i = "div",
                        children: a,
                        onSwiper: s,
                        ...l
                    } = void 0 === e ? {} : e, c = !1;
                    const [d, u] = (0, n.useState)("swiper"), [p, f] = (0, n.useState)(null), [h, m] = (0, n.useState)(!1), v = (0, n.useRef)(!1), g = (0, n.useRef)(null), y = (0, n.useRef)(null), b = (0, n.useRef)(null), w = (0, n.useRef)(null), S = (0, n.useRef)(null), E = (0, n.useRef)(null), x = (0, n.useRef)(null), C = (0, n.useRef)(null), {
                        params: P,
                        passedParams: T,
                        rest: _,
                        events: O
                    } = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        const r = {
                                on: {}
                            },
                            n = {},
                            o = {};
                        $(r, R), r._emitClasses = !0, r.init = !1;
                        const i = {},
                            a = L.map((e => e.replace(/_/, ""))),
                            s = Object.assign({}, e);
                        return Object.keys(s).forEach((s => {
                            "undefined" !== typeof e[s] && (a.indexOf(s) >= 0 ? D(e[s]) ? (r[s] = {}, o[s] = {}, $(r[s], e[s]), $(o[s], e[s])) : (r[s] = e[s], o[s] = e[s]) : 0 === s.search(/on[A-Z]/) && "function" === typeof e[s] ? t ? n[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : r.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : i[s] = e[s])
                        })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                            !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
                        })), {
                            params: r,
                            passedParams: o,
                            rest: i,
                            events: n
                        }
                    }(l), {
                        slides: A,
                        slots: k
                    } = G(a), M = () => {
                        m(!h)
                    };
                    Object.assign(P.on, {
                        _containerClasses(e, t) {
                            u(t)
                        }
                    });
                    const Z = () => {
                        Object.assign(P.on, O), c = !0;
                        const e = { ...P
                        };
                        if (delete e.wrapperClass, y.current = new H(e), y.current.virtual && y.current.params.virtual.enabled) {
                            y.current.virtual.slides = A;
                            const e = {
                                cache: !1,
                                slides: A,
                                renderExternal: f,
                                renderExternalUpdate: !1
                            };
                            $(y.current.params.virtual, e), $(y.current.originalParams.virtual, e)
                        }
                    };
                    g.current || Z(), y.current && y.current.on("_beforeBreakpoint", M);
                    return (0, n.useEffect)((() => () => {
                        y.current && y.current.off("_beforeBreakpoint", M)
                    })), (0, n.useEffect)((() => {
                        !v.current && y.current && (y.current.emitSlidesClasses(), v.current = !0)
                    })), q((() => {
                        if (t && (t.current = g.current), g.current) return y.current.destroyed && Z(),
                            function(e, t) {
                                let {
                                    el: r,
                                    nextEl: n,
                                    prevEl: o,
                                    paginationEl: i,
                                    scrollbarEl: a,
                                    swiper: s
                                } = e;
                                W(t) && n && o && (s.params.navigation.nextEl = n, s.originalParams.navigation.nextEl = n, s.params.navigation.prevEl = o, s.originalParams.navigation.prevEl = o), z(t) && i && (s.params.pagination.el = i, s.originalParams.pagination.el = i), N(t) && a && (s.params.scrollbar.el = a, s.originalParams.scrollbar.el = a), s.init(r)
                            }({
                                el: g.current,
                                nextEl: S.current,
                                prevEl: E.current,
                                paginationEl: x.current,
                                scrollbarEl: C.current,
                                swiper: y.current
                            }, P), s && s(y.current), () => {
                                y.current && !y.current.destroyed && y.current.destroy(!0, !1)
                            }
                    }), []), q((() => {
                        !c && O && y.current && Object.keys(O).forEach((e => {
                            y.current.on(e, O[e])
                        }));
                        const e = function(e, t, r, n, o) {
                            const i = [];
                            if (!t) return i;
                            const a = e => {
                                i.indexOf(e) < 0 && i.push(e)
                            };
                            if (r && n) {
                                const e = n.map(o),
                                    t = r.map(o);
                                e.join("") !== t.join("") && a("children"), n.length !== r.length && a("children")
                            }
                            return L.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((r => {
                                if (r in e && r in t)
                                    if (D(e[r]) && D(t[r])) {
                                        const n = Object.keys(e[r]),
                                            o = Object.keys(t[r]);
                                        n.length !== o.length ? a(r) : (n.forEach((n => {
                                            e[r][n] !== t[r][n] && a(r)
                                        })), o.forEach((n => {
                                            e[r][n] !== t[r][n] && a(r)
                                        })))
                                    } else e[r] !== t[r] && a(r)
                            })), i
                        }(T, b.current, A, w.current, (e => e.key));
                        return b.current = T, w.current = A, e.length && y.current && !y.current.destroyed && function(e) {
                            let {
                                swiper: t,
                                slides: r,
                                passedParams: n,
                                changedParams: o,
                                nextEl: i,
                                prevEl: a,
                                scrollbarEl: s,
                                paginationEl: l
                            } = e;
                            const c = o.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                                {
                                    params: d,
                                    pagination: u,
                                    navigation: p,
                                    scrollbar: f,
                                    virtual: h,
                                    thumbs: m
                                } = t;
                            let v, g, y, b, w, S, E, x;
                            o.includes("thumbs") && n.thumbs && n.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (v = !0), o.includes("controller") && n.controller && n.controller.control && d.controller && !d.controller.control && (g = !0), o.includes("pagination") && n.pagination && (n.pagination.el || l) && (d.pagination || !1 === d.pagination) && u && !u.el && (y = !0), o.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || s) && (d.scrollbar || !1 === d.scrollbar) && f && !f.el && (b = !0), o.includes("navigation") && n.navigation && (n.navigation.prevEl || a) && (n.navigation.nextEl || i) && (d.navigation || !1 === d.navigation) && p && !p.prevEl && !p.nextEl && (w = !0);
                            const C = e => {
                                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), d[e].prevEl = void 0, d[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), d[e].el = void 0, t[e].el = void 0))
                            };
                            o.includes("loop") && t.isElement && (d.loop && !n.loop ? S = !0 : !d.loop && n.loop ? E = !0 : x = !0), c.forEach((e => {
                                if (D(d[e]) && D(n[e])) $(d[e], n[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in n[e]) || n[e].enabled || C(e);
                                else {
                                    const t = n[e];
                                    !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? d[e] = n[e] : !1 === t && C(e)
                                }
                            })), c.includes("controller") && !g && t.controller && t.controller.control && d.controller && d.controller.control && (t.controller.control = d.controller.control), o.includes("children") && r && h && d.virtual.enabled && (h.slides = r, h.update(!0)), o.includes("children") && r && d.loop && (x = !0), v && m.init() && m.update(!0);
                            g && (t.controller.control = d.controller.control), y && (!t.isElement || l && "string" !== typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (d.pagination.el = l), u.init(), u.render(), u.update()), b && (!t.isElement || s && "string" !== typeof s || (s = document.createElement("div"), s.classList.add("swiper-scrollbar"), s.part.add("scrollbar"), t.el.appendChild(s)), s && (d.scrollbar.el = s), f.init(), f.updateSize(), f.setTranslate()), w && (t.isElement && (i && "string" !== typeof i || (i = document.createElement("div"), i.classList.add("swiper-button-next"), i.innerHTML = t.hostEl.constructor.nextButtonSvg, i.part.add("button-next"), t.el.appendChild(i)), a && "string" !== typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-prev"), a.innerHTML = t.hostEl.constructor.prevButtonSvg, a.part.add("button-prev"), t.el.appendChild(a))), i && (d.navigation.nextEl = i), a && (d.navigation.prevEl = a), p.init(), p.update()), o.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext), o.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev), o.includes("direction") && t.changeDirection(n.direction, !1), (S || x) && t.loopDestroy(), (E || x) && t.loopCreate(), t.update()
                        }({
                            swiper: y.current,
                            slides: A,
                            passedParams: T,
                            changedParams: e,
                            nextEl: S.current,
                            prevEl: E.current,
                            scrollbarEl: C.current,
                            paginationEl: x.current
                        }), () => {
                            O && y.current && Object.keys(O).forEach((e => {
                                y.current.off(e, O[e])
                            }))
                        }
                    })), q((() => {
                        var e;
                        !(e = y.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                    }), [p]), n.createElement(o, K({
                        ref: g,
                        className: B(`${d}${r?` ${r}`:""}`)
                    }, _), n.createElement(X.Provider, {
                        value: y.current
                    }, k["container-start"], n.createElement(i, {
                        className: F(P.wrapperClass)
                    }, k["wrapper-start"], P.virtual ? function(e, t, r) {
                        if (!r) return null;
                        const o = e => {
                                let r = e;
                                return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length), r
                            },
                            i = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
                            } : {
                                top: `${r.offset}px`
                            },
                            {
                                from: a,
                                to: s
                            } = r,
                            l = e.params.loop ? -t.length : 0,
                            c = e.params.loop ? 2 * t.length : t.length,
                            d = [];
                        for (let n = l; n < c; n += 1) n >= a && n <= s && d.push(t[o(n)]);
                        return d.map(((t, r) => n.cloneElement(t, {
                            swiper: e,
                            style: i,
                            key: `slide-${r}`
                        })))
                    }(y.current, A, p) : A.map(((e, t) => n.cloneElement(e, {
                        swiper: y.current,
                        swiperSlideIndex: t
                    }))), k["wrapper-end"]), W(P) && n.createElement(n.Fragment, null, n.createElement("div", {
                        ref: E,
                        className: "swiper-button-prev"
                    }), n.createElement("div", {
                        ref: S,
                        className: "swiper-button-next"
                    })), N(P) && n.createElement("div", {
                        ref: C,
                        className: "swiper-scrollbar"
                    }), z(P) && n.createElement("div", {
                        ref: x,
                        className: "swiper-pagination"
                    }), k["container-end"]))
                }));
            Y.displayName = "Swiper";
            const Q = (0, n.forwardRef)((function(e, t) {
                let {
                    tag: r = "div",
                    children: o,
                    className: i = "",
                    swiper: a,
                    zoom: s,
                    lazy: l,
                    virtualIndex: c,
                    swiperSlideIndex: d,
                    ...u
                } = void 0 === e ? {} : e;
                const p = (0, n.useRef)(null),
                    [f, h] = (0, n.useState)("swiper-slide"),
                    [m, v] = (0, n.useState)(!1);

                function g(e, t, r) {
                    t === p.current && h(r)
                }
                q((() => {
                    if ("undefined" !== typeof d && (p.current.swiperSlideIndex = d), t && (t.current = p.current), p.current && a) {
                        if (!a.destroyed) return a.on("_slideClass", g), () => {
                            a && a.off("_slideClass", g)
                        };
                        "swiper-slide" !== f && h("swiper-slide")
                    }
                })), q((() => {
                    a && p.current && !a.destroyed && h(a.getSlideClasses(p.current))
                }), [a]);
                const y = {
                        isActive: f.indexOf("swiper-slide-active") >= 0,
                        isVisible: f.indexOf("swiper-slide-visible") >= 0,
                        isPrev: f.indexOf("swiper-slide-prev") >= 0,
                        isNext: f.indexOf("swiper-slide-next") >= 0
                    },
                    b = () => "function" === typeof o ? o(y) : o;
                return n.createElement(r, K({
                    ref: p,
                    className: B(`${f}${i?` ${i}`:""}`),
                    "data-swiper-slide-index": c,
                    onLoad: () => {
                        v(!0)
                    }
                }, u), s && n.createElement(V.Provider, {
                    value: y
                }, n.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof s ? s : void 0
                }, b(), l && !m && n.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !s && n.createElement(V.Provider, {
                    value: y
                }, b(), l && !m && n.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            }));
            Q.displayName = "SwiperSlide"
        },
        8979: function(e) {
            e.exports = JSON.parse('{"name":"stytch","version":"8.2.0","description":"A wrapper for the Stytch API","types":"./types/lib/index.d.ts","main":"./dist/index.js","exports":{"require":"./dist/index.js","import":"./module.mjs","types":"./types/lib/index.d.ts"},"files":["dist/**/*","types/**/*","module.mjs"],"repository":{"type":"git","url":"git://github.com/stytchauth/stytch-node.git"},"engines":{"node":">= 16.0.0"},"scripts":{"build":"rm -rf dist types && babel lib --out-dir dist --extensions \'.ts\' && tsc --declaration --outDir types --emitDeclarationOnly","format":"prettier --write .","check-format":"prettier --check .","lint":"eslint lib","test":"jest","test-packages":"./test-packages/test.sh"},"author":"Stytch","bugs":{"url":"git://github.com/stytchauth/stytch-node/issues"},"license":"MIT","devDependencies":{"@babel/cli":"^7.15.7","@babel/core":"^7.15.5","@babel/preset-env":"^7.15.6","@babel/preset-typescript":"^7.15.0","@types/jest":"^27.0.2","@types/node":"^15.14.9","@types/node-fetch":"^2.6.1","@typescript-eslint/eslint-plugin":"^4.33.0","@typescript-eslint/parser":"^4.33.0","eslint":"^7.32.0","jest":"^27.2.4","prettier":"2.4.1","ts-jest":"^27.0.5","typescript":"^4.4.3"},"dependencies":{"isomorphic-unfetch":"^3.1.0","jose":"^4.13.2"},"overrides":{"isomorphic-unfetch":{"node-fetch":"2.6.9"}},"eslintConfig":{"extends":"airbnb","env":{"commonjs":true,"node":true,"mocha":true},"rules":{"indent":["error",4],"no-underscore-dangle":0,"strict":0,"prefer-rest-params":0}}}')
        }
    }
]);