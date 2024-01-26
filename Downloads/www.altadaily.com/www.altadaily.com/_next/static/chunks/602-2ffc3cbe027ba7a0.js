"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [602], {
        39516: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return p
                },
                f: function() {
                    return d
                }
            });
            var r = n(67294),
                o = n(19946),
                l = n(12351),
                i = n(16723),
                u = n(23784),
                a = n(73781);
            let s = (0, r.createContext)(null);

            function c() {
                let e = (0, r.useContext)(s);
                if (null === e) {
                    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, c), e
                }
                return e
            }

            function d() {
                let [e, t] = (0, r.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0, r.useMemo)((() => function(e) {
                    let n = (0, a.z)((e => (t((t => [...t, e])), () => t((t => {
                            let n = t.slice(),
                                r = n.indexOf(e);
                            return -1 !== r && n.splice(r, 1), n
                        }))))),
                        o = (0, r.useMemo)((() => ({
                            register: n,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        })), [n, e.slot, e.name, e.props]);
                    return r.createElement(s.Provider, {
                        value: o
                    }, e.children)
                }), [t])]
            }
            let f = (0, l.yV)((function(e, t) {
                    let n = (0, o.M)(),
                        {
                            id: r = `headlessui-description-${n}`,
                            ...a
                        } = e,
                        s = c(),
                        d = (0, u.T)(t);
                    (0, i.e)((() => s.register(r)), [r, s.register]);
                    let f = {
                        ref: d,
                        ...s.props,
                        id: r
                    };
                    return (0, l.sY)({
                        ourProps: f,
                        theirProps: a,
                        slot: s.slot || {},
                        defaultTag: "p",
                        name: s.name || "Description"
                    })
                })),
                p = Object.assign(f, {})
        },
        26064: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return Ce
                }
            });
            var r = n(67294),
                o = n.t(r, 2),
                l = n(32984),
                i = n(12351),
                u = n(23784),
                a = n(61363),
                s = n(64103),
                c = n(19946),
                d = n(82180),
                f = n(46045),
                p = n(84575),
                m = n(73781),
                v = n(3855);
            var h = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(h || {});

            function E() {
                let e = (0, r.useRef)(0);
                return function(e, t, n) {
                    let o = (0, v.E)(t);
                    (0, r.useEffect)((() => {
                        function t(e) {
                            o.current(e)
                        }
                        return window.addEventListener(e, t, n), () => window.removeEventListener(e, t, n)
                    }), [e, n])
                }("keydown", (t => {
                    "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0)
                }), !0), e
            }
            var g = n(14879),
                w = n(51074);

            function b(e, t, n, o) {
                let l = (0, v.E)(n);
                (0, r.useEffect)((() => {
                    function n(e) {
                        l.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, n, o), () => e.removeEventListener(t, n, o)
                }), [e, t, o])
            }
            var y = n(81021);

            function T(e, t) {
                let n = (0, r.useRef)([]),
                    o = (0, m.z)(e);
                (0, r.useEffect)((() => {
                    let e = [...n.current];
                    for (let [r, l] of t.entries())
                        if (n.current[r] !== l) {
                            let r = o(t, e);
                            return n.current = t, r
                        }
                }), [o, ...t])
            }
            var F = n(94192);

            function P(e) {
                if (!e) return new Set;
                if ("function" == typeof e) return new Set(e());
                let t = new Set;
                for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
                return t
            }
            var L = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(L || {});
            let C = (0, i.yV)((function(e, t) {
                    let n = (0, r.useRef)(null),
                        o = (0, u.T)(n, t),
                        {
                            initialFocus: a,
                            containers: s,
                            features: c = 30,
                            ...v
                        } = e;
                    (0, d.H)() || (c = 1);
                    let y = (0, w.i)(n);
                    O({
                        ownerDocument: y
                    }, Boolean(16 & c));
                    let T = A({
                        ownerDocument: y,
                        container: n,
                        initialFocus: a
                    }, Boolean(2 & c));
                    ! function({
                        ownerDocument: e,
                        container: t,
                        containers: n,
                        previousActiveElement: r
                    }, o) {
                        let l = (0, g.t)();
                        b(null == e ? void 0 : e.defaultView, "focus", (e => {
                            if (!o || !l.current) return;
                            let i = P(n);
                            t.current instanceof HTMLElement && i.add(t.current);
                            let u = r.current;
                            if (!u) return;
                            let a = e.target;
                            a && a instanceof HTMLElement ? R(i, a) ? (r.current = a, (0, p.C5)(a)) : (e.preventDefault(), e.stopPropagation(), (0, p.C5)(u)) : (0, p.C5)(r.current)
                        }), !0)
                    }({
                        ownerDocument: y,
                        container: n,
                        containers: s,
                        previousActiveElement: T
                    }, Boolean(8 & c));
                    let L = E(),
                        C = (0, m.z)((e => {
                            let t = n.current;
                            t && (0, l.E)(L.current, {
                                [h.Forwards]: () => {
                                    (0, p.jA)(t, p.TO.First, {
                                        skipElements: [e.relatedTarget]
                                    })
                                },
                                [h.Backwards]: () => {
                                    (0, p.jA)(t, p.TO.Last, {
                                        skipElements: [e.relatedTarget]
                                    })
                                }
                            })
                        })),
                        S = (0, F.G)(),
                        M = (0, r.useRef)(!1),
                        k = {
                            ref: o,
                            onKeyDown(e) {
                                "Tab" == e.key && (M.current = !0, S.requestAnimationFrame((() => {
                                    M.current = !1
                                })))
                            },
                            onBlur(e) {
                                let t = P(s);
                                n.current instanceof HTMLElement && t.add(n.current);
                                let r = e.relatedTarget;
                                r instanceof HTMLElement && "true" !== r.dataset.headlessuiFocusGuard && (R(t, r) || (M.current ? (0, p.jA)(n.current, (0, l.E)(L.current, {
                                    [h.Forwards]: () => p.TO.Next,
                                    [h.Backwards]: () => p.TO.Previous
                                }) | p.TO.WrapAround, {
                                    relativeTo: e.target
                                }) : e.target instanceof HTMLElement && (0, p.C5)(e.target)))
                            }
                        };
                    return r.createElement(r.Fragment, null, Boolean(4 & c) && r.createElement(f._, {
                        as: "button",
                        type: "button",
                        "data-headlessui-focus-guard": !0,
                        onFocus: C,
                        features: f.A.Focusable
                    }), (0, i.sY)({
                        ourProps: k,
                        theirProps: v,
                        defaultTag: "div",
                        name: "FocusTrap"
                    }), Boolean(4 & c) && r.createElement(f._, {
                        as: "button",
                        type: "button",
                        "data-headlessui-focus-guard": !0,
                        onFocus: C,
                        features: f.A.Focusable
                    }))
                })),
                S = Object.assign(C, {
                    features: L
                }),
                M = [];

            function O({
                ownerDocument: e
            }, t) {
                let n = function(e = !0) {
                    let t = (0, r.useRef)(M.slice());
                    return T((([e], [n]) => {
                        !0 === n && !1 === e && (0, y.Y)((() => {
                            t.current.splice(0)
                        })), !1 === n && !0 === e && (t.current = M.slice())
                    }), [e, M, t]), (0, m.z)((() => {
                        var e;
                        return null != (e = t.current.find((e => null != e && e.isConnected))) ? e : null
                    }))
                }(t);
                T((() => {
                    t || (null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && (0, p.C5)(n())
                }), [t]);
                let o = (0, r.useRef)(!1);
                (0, r.useEffect)((() => (o.current = !1, () => {
                    o.current = !0, (0, y.Y)((() => {
                        o.current && (0, p.C5)(n())
                    }))
                })), [])
            }

            function A({
                ownerDocument: e,
                container: t,
                initialFocus: n
            }, o) {
                let l = (0, r.useRef)(null),
                    i = (0, g.t)();
                return T((() => {
                    if (!o) return;
                    let r = t.current;
                    r && (0, y.Y)((() => {
                        if (!i.current) return;
                        let t = null == e ? void 0 : e.activeElement;
                        if (null != n && n.current) {
                            if ((null == n ? void 0 : n.current) === t) return void(l.current = t)
                        } else if (r.contains(t)) return void(l.current = t);
                        null != n && n.current ? (0, p.C5)(n.current) : (0, p.jA)(r, p.TO.First) === p.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.current = null == e ? void 0 : e.activeElement
                    }))
                }), [o]), l
            }

            function R(e, t) {
                for (let n of e)
                    if (n.contains(t)) return !0;
                return !1
            }! function(e) {
                function t() {
                    "loading" !== document.readyState && (e(), document.removeEventListener("DOMContentLoaded", t))
                }
                "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("DOMContentLoaded", t), t())
            }((() => {
                function e(e) {
                    e.target instanceof HTMLElement && e.target !== document.body && M[0] !== e.target && (M.unshift(e.target), M = M.filter((e => null != e && e.isConnected)), M.splice(10))
                }
                window.addEventListener("click", e, {
                    capture: !0
                }), window.addEventListener("mousedown", e, {
                    capture: !0
                }), window.addEventListener("focus", e, {
                    capture: !0
                }), document.body.addEventListener("click", e, {
                    capture: !0
                }), document.body.addEventListener("mousedown", e, {
                    capture: !0
                }), document.body.addEventListener("focus", e, {
                    capture: !0
                })
            }));
            var k = n(73935),
                D = n(16723);
            let x = (0, r.createContext)(!1);

            function N() {
                return (0, r.useContext)(x)
            }

            function H(e) {
                return r.createElement(x.Provider, {
                    value: e.force
                }, e.children)
            }
            var I = n(77896);
            let V = r.Fragment;
            let Y = r.Fragment,
                _ = (0, r.createContext)(null);
            let z = (0, i.yV)((function(e, t) {
                    let n = e,
                        o = (0, r.useRef)(null),
                        l = (0, u.T)((0, u.h)((e => {
                            o.current = e
                        })), t),
                        a = (0, w.i)(o),
                        s = function(e) {
                            let t = N(),
                                n = (0, r.useContext)(_),
                                o = (0, w.i)(e),
                                [l, i] = (0, r.useState)((() => {
                                    if (!t && null !== n || I.O.isServer) return null;
                                    let e = null == o ? void 0 : o.getElementById("headlessui-portal-root");
                                    if (e) return e;
                                    if (null === o) return null;
                                    let r = o.createElement("div");
                                    return r.setAttribute("id", "headlessui-portal-root"), o.body.appendChild(r)
                                }));
                            return (0, r.useEffect)((() => {
                                null !== l && (null != o && o.body.contains(l) || null == o || o.body.appendChild(l))
                            }), [l, o]), (0, r.useEffect)((() => {
                                t || null !== n && i(n.current)
                            }), [n, i, t]), l
                        }(o),
                        [c] = (0, r.useState)((() => {
                            var e;
                            return I.O.isServer ? null : null != (e = null == a ? void 0 : a.createElement("div")) ? e : null
                        })),
                        f = (0, d.H)(),
                        p = (0, r.useRef)(!1);
                    return (0, D.e)((() => {
                        if (p.current = !1, s && c) return s.contains(c) || (c.setAttribute("data-headlessui-portal", ""), s.appendChild(c)), () => {
                            p.current = !0, (0, y.Y)((() => {
                                var e;
                                p.current && (!s || !c || (c instanceof Node && s.contains(c) && s.removeChild(c), s.childNodes.length <= 0 && (null == (e = s.parentElement) || e.removeChild(s))))
                            }))
                        }
                    }), [s, c]), f && s && c ? (0, k.createPortal)((0, i.sY)({
                        ourProps: {
                            ref: l
                        },
                        theirProps: n,
                        defaultTag: V,
                        name: "Portal"
                    }), c) : null
                })),
                B = (0, i.yV)((function(e, t) {
                    let {
                        target: n,
                        ...o
                    } = e, l = {
                        ref: (0, u.T)(t)
                    };
                    return r.createElement(_.Provider, {
                        value: n
                    }, (0, i.sY)({
                        ourProps: l,
                        theirProps: o,
                        defaultTag: Y,
                        name: "Popover.Group"
                    }))
                })),
                j = Object.assign(z, {
                    Group: B
                });
            var q = n(39516),
                W = n(16567);
            let G = (0, r.createContext)((() => {}));
            G.displayName = "StackContext";
            var U = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(U || {});

            function Z({
                children: e,
                onUpdate: t,
                type: n,
                element: o,
                enabled: l
            }) {
                let i = (0, r.useContext)(G),
                    u = (0, m.z)(((...e) => {
                        null == t || t(...e), i(...e)
                    }));
                return (0, D.e)((() => {
                    let e = void 0 === l || !0 === l;
                    return e && u(0, n, o), () => {
                        e && u(1, n, o)
                    }
                }), [u, n, o, l]), r.createElement(G.Provider, {
                    value: u
                }, e)
            }
            var $ = n(39650);
            const K = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                },
                {
                    useState: J,
                    useEffect: X,
                    useLayoutEffect: Q,
                    useDebugValue: ee
                } = o;

            function te(e) {
                const t = e.getSnapshot,
                    n = e.value;
                try {
                    const e = t();
                    return !K(n, e)
                } catch {
                    return !0
                }
            }
            "undefined" != typeof window && "undefined" != typeof window.document && window.document.createElement;
            const ne = (e => e.useSyncExternalStore)(o);
            var re = n(9362);

            function oe() {
                let e;
                return {
                    before({
                        doc: t
                    }) {
                        var n;
                        let r = t.documentElement;
                        e = (null != (n = t.defaultView) ? n : window).innerWidth - r.clientWidth
                    },
                    after({
                        doc: t,
                        d: n
                    }) {
                        let r = t.documentElement,
                            o = r.clientWidth - r.offsetWidth,
                            l = e - o;
                        n.style(r, "paddingRight", `${l}px`)
                    }
                }
            }

            function le() {
                return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
            }

            function ie() {
                if (!le()) return {};
                let e;
                return {
                    before() {
                        e = window.pageYOffset
                    },
                    after({
                        doc: t,
                        d: n,
                        meta: r
                    }) {
                        function o(e) {
                            return r.containers.flatMap((e => e())).some((t => t.contains(e)))
                        }
                        n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
                        let l = null;
                        n.addEventListener(t, "click", (e => {
                            if (e.target instanceof HTMLElement) try {
                                let n = e.target.closest("a");
                                if (!n) return;
                                let {
                                    hash: r
                                } = new URL(n.href), i = t.querySelector(r);
                                i && !o(i) && (l = i)
                            } catch {}
                        }), !0), n.addEventListener(t, "touchmove", (e => {
                            e.target instanceof HTMLElement && !o(e.target) && e.preventDefault()
                        }), {
                            passive: !1
                        }), n.add((() => {
                            window.scrollTo(0, window.pageYOffset + e), l && l.isConnected && (l.scrollIntoView({
                                block: "nearest"
                            }), l = null)
                        }))
                    }
                }
            }

            function ue(e) {
                let t = {};
                for (let n of e) Object.assign(t, n(t));
                return t
            }
            let ae = function(e, t) {
                let n = e(),
                    r = new Set;
                return {
                    getSnapshot: () => n,
                    subscribe: e => (r.add(e), () => r.delete(e)),
                    dispatch(e, ...o) {
                        let l = t[e].call(n, ...o);
                        l && (n = l, r.forEach((e => e())))
                    }
                }
            }((() => new Map), {
                PUSH(e, t) {
                    var n;
                    let r = null != (n = this.get(e)) ? n : {
                        doc: e,
                        count: 0,
                        d: (0, re.k)(),
                        meta: new Set
                    };
                    return r.count++, r.meta.add(t), this.set(e, r), this
                },
                POP(e, t) {
                    let n = this.get(e);
                    return n && (n.count--, n.meta.delete(t)), this
                },
                SCROLL_PREVENT({
                    doc: e,
                    d: t,
                    meta: n
                }) {
                    let r = {
                            doc: e,
                            d: t,
                            meta: ue(n)
                        },
                        o = [ie(), oe(), {
                            before({
                                doc: e,
                                d: t
                            }) {
                                t.style(e.documentElement, "overflow", "hidden")
                            }
                        }];
                    o.forEach((({
                        before: e
                    }) => null == e ? void 0 : e(r))), o.forEach((({
                        after: e
                    }) => null == e ? void 0 : e(r)))
                },
                SCROLL_ALLOW({
                    d: e
                }) {
                    e.dispose()
                },
                TEARDOWN({
                    doc: e
                }) {
                    this.delete(e)
                }
            });

            function se(e, t, n) {
                let r = function(e) {
                        return ne(e.subscribe, e.getSnapshot, e.getSnapshot)
                    }(ae),
                    o = e ? r.get(e) : void 0,
                    l = !!o && o.count > 0;
                return (0, D.e)((() => {
                    if (e && t) return ae.dispatch("PUSH", e, n), () => ae.dispatch("POP", e, n)
                }), [t, e]), l
            }
            ae.subscribe((() => {
                let e = ae.getSnapshot(),
                    t = new Map;
                for (let [n] of e) t.set(n, n.documentElement.style.overflow);
                for (let n of e.values()) {
                    let e = "hidden" === t.get(n.doc),
                        r = 0 !== n.count;
                    (r && !e || !r && e) && ae.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), 0 === n.count && ae.dispatch("TEARDOWN", n)
                }
            }));
            let ce = new Map,
                de = new Map;

            function fe(e, t = !0) {
                (0, D.e)((() => {
                    var n;
                    if (!t) return;
                    let r = "function" == typeof e ? e() : e.current;
                    if (!r) return;
                    let o = null != (n = de.get(r)) ? n : 0;
                    return de.set(r, o + 1), 0 !== o || (ce.set(r, {
                            "aria-hidden": r.getAttribute("aria-hidden"),
                            inert: r.inert
                        }), r.setAttribute("aria-hidden", "true"), r.inert = !0),
                        function() {
                            var e;
                            if (!r) return;
                            let t = null != (e = de.get(r)) ? e : 1;
                            if (1 === t ? de.delete(r) : de.set(r, t - 1), 1 !== t) return;
                            let n = ce.get(r);
                            n && (null === n["aria-hidden"] ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", n["aria-hidden"]), r.inert = n.inert, ce.delete(r))
                        }
                }), [e, t])
            }
            var pe, me = ((pe = me || {})[pe.Open = 0] = "Open", pe[pe.Closed = 1] = "Closed", pe),
                ve = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(ve || {});
            let he = {
                    0: (e, t) => e.titleId === t.id ? e : { ...e,
                        titleId: t.id
                    }
                },
                Ee = (0, r.createContext)(null);

            function ge(e) {
                let t = (0, r.useContext)(Ee);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, ge), t
                }
                return t
            }

            function we(e, t) {
                return (0, l.E)(t.type, he, e, t)
            }
            Ee.displayName = "DialogContext";
            let be = i.AN.RenderStrategy | i.AN.Static;
            let ye = (0, i.yV)((function(e, t) {
                    let n = (0, c.M)(),
                        {
                            id: o = `headlessui-dialog-${n}`,
                            open: s,
                            onClose: p,
                            initialFocus: v,
                            __demoMode: h = !1,
                            ...E
                        } = e,
                        [g, y] = (0, r.useState)(0),
                        T = (0, W.oJ)();
                    void 0 === s && null !== T && (s = (T & W.ZM.Open) === W.ZM.Open);
                    let F = (0, r.useRef)(null),
                        P = (0, u.T)(F, t),
                        L = (0, r.useRef)(null),
                        C = (0, w.i)(F),
                        M = e.hasOwnProperty("open") || null !== T,
                        O = e.hasOwnProperty("onClose");
                    if (!M && !O) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!M) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!O) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" != typeof s) throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s}`);
                    if ("function" != typeof p) throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${p}`);
                    let A = s ? 0 : 1,
                        [R, k] = (0, r.useReducer)(we, {
                            titleId: null,
                            descriptionId: null,
                            panelRef: (0, r.createRef)()
                        }),
                        D = (0, m.z)((() => p(!1))),
                        x = (0, m.z)((e => k({
                            type: 0,
                            id: e
                        }))),
                        N = !!(0, d.H)() && (!h && 0 === A),
                        I = g > 1,
                        V = null !== (0, r.useContext)(Ee),
                        Y = I ? "parent" : "leaf",
                        _ = null !== T && (T & W.ZM.Closing) === W.ZM.Closing,
                        z = !V && !_ && N,
                        B = (0, r.useCallback)((() => {
                            var e, t;
                            return null != (t = Array.from(null != (e = null == C ? void 0 : C.querySelectorAll("body > *")) ? e : []).find((e => "headlessui-portal-root" !== e.id && (e.contains(L.current) && e instanceof HTMLElement)))) ? t : null
                        }), [L]);
                    fe(B, z);
                    let G = !!I || N,
                        K = (0, r.useCallback)((() => {
                            var e, t;
                            return null != (t = Array.from(null != (e = null == C ? void 0 : C.querySelectorAll("[data-headlessui-portal]")) ? e : []).find((e => e.contains(L.current) && e instanceof HTMLElement))) ? t : null
                        }), [L]);
                    fe(K, G);
                    let J = (0, m.z)((() => {
                            var e, t;
                            return [...Array.from(null != (e = null == C ? void 0 : C.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) ? e : []).filter((e => !(e === document.body || e === document.head || !(e instanceof HTMLElement) || e.contains(L.current) || R.panelRef.current && e.contains(R.panelRef.current)))), null != (t = R.panelRef.current) ? t : F.current]
                        })),
                        X = !(!N || I);
                    (0, $.O)((() => J()), D, X);
                    let Q = !(I || 0 !== A);
                    b(null == C ? void 0 : C.defaultView, "keydown", (e => {
                            Q && (e.defaultPrevented || e.key === a.R.Escape && (e.preventDefault(), e.stopPropagation(), D()))
                        })),
                        function(e, t, n = (() => [document.body])) {
                            se(e, t, (e => {
                                var t;
                                return {
                                    containers: [...null != (t = e.containers) ? t : [], n]
                                }
                            }))
                        }(C, !(_ || 0 !== A || V), J), (0, r.useEffect)((() => {
                            if (0 !== A || !F.current) return;
                            let e = new ResizeObserver((e => {
                                for (let t of e) {
                                    let e = t.target.getBoundingClientRect();
                                    0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && D()
                                }
                            }));
                            return e.observe(F.current), () => e.disconnect()
                        }), [A, F, D]);
                    let [ee, te] = (0, q.f)(), ne = (0, r.useMemo)((() => [{
                        dialogState: A,
                        close: D,
                        setTitleId: x
                    }, R]), [A, R, D, x]), re = (0, r.useMemo)((() => ({
                        open: 0 === A
                    })), [A]), oe = {
                        ref: P,
                        id: o,
                        role: "dialog",
                        "aria-modal": 0 === A || void 0,
                        "aria-labelledby": R.titleId,
                        "aria-describedby": ee
                    };
                    return r.createElement(Z, {
                        type: "Dialog",
                        enabled: 0 === A,
                        element: F,
                        onUpdate: (0, m.z)(((e, t) => {
                            "Dialog" === t && (0, l.E)(e, {
                                [U.Add]: () => y((e => e + 1)),
                                [U.Remove]: () => y((e => e - 1))
                            })
                        }))
                    }, r.createElement(H, {
                        force: !0
                    }, r.createElement(j, null, r.createElement(Ee.Provider, {
                        value: ne
                    }, r.createElement(j.Group, {
                        target: F
                    }, r.createElement(H, {
                        force: !1
                    }, r.createElement(te, {
                        slot: re,
                        name: "Dialog.Description"
                    }, r.createElement(S, {
                        initialFocus: v,
                        containers: J,
                        features: N ? (0, l.E)(Y, {
                            parent: S.features.RestoreFocus,
                            leaf: S.features.All & ~S.features.FocusLock
                        }) : S.features.None
                    }, (0, i.sY)({
                        ourProps: oe,
                        theirProps: E,
                        slot: re,
                        defaultTag: "div",
                        features: be,
                        visible: 0 === A,
                        name: "Dialog"
                    })))))))), r.createElement(f._, {
                        features: f.A.Hidden,
                        ref: L
                    }))
                })),
                Te = (0, i.yV)((function(e, t) {
                    let n = (0, c.M)(),
                        {
                            id: o = `headlessui-dialog-backdrop-${n}`,
                            ...l
                        } = e,
                        [{
                            dialogState: a
                        }, s] = ge("Dialog.Backdrop"),
                        d = (0, u.T)(t);
                    (0, r.useEffect)((() => {
                        if (null === s.panelRef.current) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                    }), [s.panelRef]);
                    let f = (0, r.useMemo)((() => ({
                        open: 0 === a
                    })), [a]);
                    return r.createElement(H, {
                        force: !0
                    }, r.createElement(j, null, (0, i.sY)({
                        ourProps: {
                            ref: d,
                            id: o,
                            "aria-hidden": !0
                        },
                        theirProps: l,
                        slot: f,
                        defaultTag: "div",
                        name: "Dialog.Backdrop"
                    })))
                })),
                Fe = (0, i.yV)((function(e, t) {
                    let n = (0, c.M)(),
                        {
                            id: o = `headlessui-dialog-panel-${n}`,
                            ...l
                        } = e,
                        [{
                            dialogState: a
                        }, s] = ge("Dialog.Panel"),
                        d = (0, u.T)(t, s.panelRef),
                        f = (0, r.useMemo)((() => ({
                            open: 0 === a
                        })), [a]),
                        p = (0, m.z)((e => {
                            e.stopPropagation()
                        }));
                    return (0, i.sY)({
                        ourProps: {
                            ref: d,
                            id: o,
                            onClick: p
                        },
                        theirProps: l,
                        slot: f,
                        defaultTag: "div",
                        name: "Dialog.Panel"
                    })
                })),
                Pe = (0, i.yV)((function(e, t) {
                    let n = (0, c.M)(),
                        {
                            id: o = `headlessui-dialog-overlay-${n}`,
                            ...l
                        } = e,
                        [{
                            dialogState: a,
                            close: d
                        }] = ge("Dialog.Overlay"),
                        f = (0, u.T)(t),
                        p = (0, m.z)((e => {
                            if (e.target === e.currentTarget) {
                                if ((0, s.P)(e.currentTarget)) return e.preventDefault();
                                e.preventDefault(), e.stopPropagation(), d()
                            }
                        })),
                        v = (0, r.useMemo)((() => ({
                            open: 0 === a
                        })), [a]);
                    return (0, i.sY)({
                        ourProps: {
                            ref: f,
                            id: o,
                            "aria-hidden": !0,
                            onClick: p
                        },
                        theirProps: l,
                        slot: v,
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                })),
                Le = (0, i.yV)((function(e, t) {
                    let n = (0, c.M)(),
                        {
                            id: o = `headlessui-dialog-title-${n}`,
                            ...l
                        } = e,
                        [{
                            dialogState: a,
                            setTitleId: s
                        }] = ge("Dialog.Title"),
                        d = (0, u.T)(t);
                    (0, r.useEffect)((() => (s(o), () => s(null))), [o, s]);
                    let f = (0, r.useMemo)((() => ({
                        open: 0 === a
                    })), [a]);
                    return (0, i.sY)({
                        ourProps: {
                            ref: d,
                            id: o
                        },
                        theirProps: l,
                        slot: f,
                        defaultTag: "h2",
                        name: "Dialog.Title"
                    })
                })),
                Ce = Object.assign(ye, {
                    Backdrop: Te,
                    Panel: Fe,
                    Overlay: Pe,
                    Title: Le,
                    Description: q.d
                })
        },
        44080: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return x
                }
            });
            var r = n(67294),
                o = n(12351),
                l = n(16567),
                i = n(32984),
                u = n(14879),
                a = n(16723),
                s = n(3855),
                c = n(82180),
                d = n(23784);
            var f = n(9362);

            function p(e, ...t) {
                e && t.length > 0 && e.classList.add(...t)
            }

            function m(e, ...t) {
                e && t.length > 0 && e.classList.remove(...t)
            }

            function v(e, t, n, r) {
                let o = n ? "enter" : "leave",
                    l = (0, f.k)(),
                    u = void 0 !== r ? function(e) {
                        let t = {
                            called: !1
                        };
                        return (...n) => {
                            if (!t.called) return t.called = !0, e(...n)
                        }
                    }(r) : () => {};
                "enter" === o && (e.removeAttribute("hidden"), e.style.display = "");
                let a = (0, i.E)(o, {
                        enter: () => t.enter,
                        leave: () => t.leave
                    }),
                    s = (0, i.E)(o, {
                        enter: () => t.enterTo,
                        leave: () => t.leaveTo
                    }),
                    c = (0, i.E)(o, {
                        enter: () => t.enterFrom,
                        leave: () => t.leaveFrom
                    });
                return m(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), p(e, ...a, ...c), l.nextFrame((() => {
                    m(e, ...c), p(e, ...s),
                        function(e, t) {
                            let n = (0, f.k)();
                            if (!e) return n.dispose;
                            let {
                                transitionDuration: r,
                                transitionDelay: o
                            } = getComputedStyle(e), [l, i] = [r, o].map((e => {
                                let [t = 0] = e.split(",").filter(Boolean).map((e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e))).sort(((e, t) => t - e));
                                return t
                            })), u = l + i;
                            if (0 !== u) {
                                n.group((n => {
                                    n.setTimeout((() => {
                                        t(), n.dispose()
                                    }), u), n.addEventListener(e, "transitionrun", (e => {
                                        e.target === e.currentTarget && n.dispose()
                                    }))
                                }));
                                let r = n.addEventListener(e, "transitionend", (e => {
                                    e.target === e.currentTarget && (t(), r())
                                }))
                            } else t();
                            n.add((() => t())), n.dispose
                        }(e, (() => (m(e, ...a), p(e, ...t.entered), u())))
                })), l.dispose
            }
            var h = n(94192);

            function E({
                container: e,
                direction: t,
                classes: n,
                onStart: r,
                onStop: o
            }) {
                let l = (0, u.t)(),
                    i = (0, h.G)(),
                    c = (0, s.E)(t);
                (0, a.e)((() => {
                    let t = (0, f.k)();
                    i.add(t.dispose);
                    let u = e.current;
                    if (u && "idle" !== c.current && l.current) return t.dispose(), r.current(c.current), t.add(v(u, n.current, "enter" === c.current, (() => {
                        t.dispose(), o.current(c.current)
                    }))), t.dispose
                }), [t])
            }
            var g = n(73781),
                w = n(44067);

            function b(e = "") {
                return e.split(" ").filter((e => e.trim().length > 1))
            }
            let y = (0, r.createContext)(null);
            y.displayName = "TransitionContext";
            var T, F = ((T = F || {}).Visible = "visible", T.Hidden = "hidden", T);
            let P = (0, r.createContext)(null);

            function L(e) {
                return "children" in e ? L(e.children) : e.current.filter((({
                    el: e
                }) => null !== e.current)).filter((({
                    state: e
                }) => "visible" === e)).length > 0
            }

            function C(e, t) {
                let n = (0, s.E)(e),
                    l = (0, r.useRef)([]),
                    a = (0, u.t)(),
                    c = (0, h.G)(),
                    d = (0, g.z)(((e, t = o.l4.Hidden) => {
                        let r = l.current.findIndex((({
                            el: t
                        }) => t === e)); - 1 !== r && ((0, i.E)(t, {
                            [o.l4.Unmount]() {
                                l.current.splice(r, 1)
                            },
                            [o.l4.Hidden]() {
                                l.current[r].state = "hidden"
                            }
                        }), c.microTask((() => {
                            var e;
                            !L(l) && a.current && (null == (e = n.current) || e.call(n))
                        })))
                    })),
                    f = (0, g.z)((e => {
                        let t = l.current.find((({
                            el: t
                        }) => t === e));
                        return t ? "visible" !== t.state && (t.state = "visible") : l.current.push({
                            el: e,
                            state: "visible"
                        }), () => d(e, o.l4.Unmount)
                    })),
                    p = (0, r.useRef)([]),
                    m = (0, r.useRef)(Promise.resolve()),
                    v = (0, r.useRef)({
                        enter: [],
                        leave: [],
                        idle: []
                    }),
                    E = (0, g.z)(((e, n, r) => {
                        p.current.splice(0), t && (t.chains.current[n] = t.chains.current[n].filter((([t]) => t !== e))), null == t || t.chains.current[n].push([e, new Promise((e => {
                            p.current.push(e)
                        }))]), null == t || t.chains.current[n].push([e, new Promise((e => {
                            Promise.all(v.current[n].map((([e, t]) => t))).then((() => e()))
                        }))]), "enter" === n ? m.current = m.current.then((() => null == t ? void 0 : t.wait.current)).then((() => r(n))) : r(n)
                    })),
                    w = (0, g.z)(((e, t, n) => {
                        Promise.all(v.current[t].splice(0).map((([e, t]) => t))).then((() => {
                            var e;
                            null == (e = p.current.shift()) || e()
                        })).then((() => n(t)))
                    }));
                return (0, r.useMemo)((() => ({
                    children: l,
                    register: f,
                    unregister: d,
                    onStart: E,
                    onStop: w,
                    wait: m,
                    chains: v
                })), [f, d, l, E, w, v, m])
            }

            function S() {}
            P.displayName = "NestingContext";
            let M = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function O(e) {
                var t;
                let n = {};
                for (let r of M) n[r] = null != (t = e[r]) ? t : S;
                return n
            }
            let A = o.AN.RenderStrategy;
            let R = (0, o.yV)((function(e, t) {
                    let {
                        show: n,
                        appear: i = !1,
                        unmount: u,
                        ...s
                    } = e, f = (0, r.useRef)(null), p = (0, d.T)(f, t);
                    (0, c.H)();
                    let m = (0, l.oJ)();
                    if (void 0 === n && null !== m && (n = (m & l.ZM.Open) === l.ZM.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [v, h] = (0, r.useState)(n ? "visible" : "hidden"), E = C((() => {
                        h("hidden")
                    })), [g, w] = (0, r.useState)(!0), b = (0, r.useRef)([n]);
                    (0, a.e)((() => {
                        !1 !== g && b.current[b.current.length - 1] !== n && (b.current.push(n), w(!1))
                    }), [b, n]);
                    let T = (0, r.useMemo)((() => ({
                        show: n,
                        appear: i,
                        initial: g
                    })), [n, i, g]);
                    (0, r.useEffect)((() => {
                        if (n) h("visible");
                        else if (L(E)) {
                            let e = f.current;
                            if (!e) return;
                            let t = e.getBoundingClientRect();
                            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && h("hidden")
                        } else h("hidden")
                    }), [n, E]);
                    let F = {
                        unmount: u
                    };
                    return r.createElement(P.Provider, {
                        value: E
                    }, r.createElement(y.Provider, {
                        value: T
                    }, (0, o.sY)({
                        ourProps: { ...F,
                            as: r.Fragment,
                            children: r.createElement(k, {
                                ref: p,
                                ...F,
                                ...s
                            })
                        },
                        theirProps: {},
                        defaultTag: r.Fragment,
                        features: A,
                        visible: "visible" === v,
                        name: "Transition"
                    })))
                })),
                k = (0, o.yV)((function(e, t) {
                    let {
                        beforeEnter: n,
                        afterEnter: a,
                        beforeLeave: f,
                        afterLeave: p,
                        enter: m,
                        enterFrom: v,
                        enterTo: h,
                        entered: T,
                        leave: F,
                        leaveFrom: S,
                        leaveTo: M,
                        ...R
                    } = e, k = (0, r.useRef)(null), D = (0, d.T)(k, t), x = R.unmount ? o.l4.Unmount : o.l4.Hidden, {
                        show: N,
                        appear: H,
                        initial: I
                    } = function() {
                        let e = (0, r.useContext)(y);
                        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), [V, Y] = (0, r.useState)(N ? "visible" : "hidden"), _ = function() {
                        let e = (0, r.useContext)(P);
                        if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(), {
                        register: z,
                        unregister: B
                    } = _, j = (0, r.useRef)(null);
                    (0, r.useEffect)((() => z(k)), [z, k]), (0, r.useEffect)((() => {
                        if (x === o.l4.Hidden && k.current) return N && "visible" !== V ? void Y("visible") : (0, i.E)(V, {
                            hidden: () => B(k),
                            visible: () => z(k)
                        })
                    }), [V, k, z, B, N, x]);
                    let q = (0, s.E)({
                            enter: b(m),
                            enterFrom: b(v),
                            enterTo: b(h),
                            entered: b(T),
                            leave: b(F),
                            leaveFrom: b(S),
                            leaveTo: b(M)
                        }),
                        W = function(e) {
                            let t = (0, r.useRef)(O(e));
                            return (0, r.useEffect)((() => {
                                t.current = O(e)
                            }), [e]), t
                        }({
                            beforeEnter: n,
                            afterEnter: a,
                            beforeLeave: f,
                            afterLeave: p
                        }),
                        G = (0, c.H)();
                    (0, r.useEffect)((() => {
                        if (G && "visible" === V && null === k.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }), [k, V, G]);
                    let U = I && !H,
                        Z = !G || U || j.current === N ? "idle" : N ? "enter" : "leave",
                        $ = function(e = 0) {
                            let [t, n] = (0, r.useState)(e), o = (0, u.t)(), l = (0, r.useCallback)((e => {
                                o.current && n((t => t | e))
                            }), [t, o]), i = (0, r.useCallback)((e => Boolean(t & e)), [t]), a = (0, r.useCallback)((e => {
                                o.current && n((t => t & ~e))
                            }), [n, o]), s = (0, r.useCallback)((e => {
                                o.current && n((t => t ^ e))
                            }), [n]);
                            return {
                                flags: t,
                                addFlag: l,
                                hasFlag: i,
                                removeFlag: a,
                                toggleFlag: s
                            }
                        }(0),
                        K = (0, g.z)((e => (0, i.E)(e, {
                            enter: () => {
                                $.addFlag(l.ZM.Opening), W.current.beforeEnter()
                            },
                            leave: () => {
                                $.addFlag(l.ZM.Closing), W.current.beforeLeave()
                            },
                            idle: () => {}
                        }))),
                        J = (0, g.z)((e => (0, i.E)(e, {
                            enter: () => {
                                $.removeFlag(l.ZM.Opening), W.current.afterEnter()
                            },
                            leave: () => {
                                $.removeFlag(l.ZM.Closing), W.current.afterLeave()
                            },
                            idle: () => {}
                        }))),
                        X = C((() => {
                            Y("hidden"), B(k)
                        }), _);
                    E({
                        container: k,
                        classes: q,
                        direction: Z,
                        onStart: (0, s.E)((e => {
                            X.onStart(k, e, K)
                        })),
                        onStop: (0, s.E)((e => {
                            X.onStop(k, e, J), "leave" === e && !L(X) && (Y("hidden"), B(k))
                        }))
                    }), (0, r.useEffect)((() => {
                        U && (x === o.l4.Hidden ? j.current = null : j.current = N)
                    }), [N, U, V]);
                    let Q = R,
                        ee = {
                            ref: D
                        };
                    return H && N && (Q = { ...Q,
                        className: (0, w.A)(R.className, ...q.current.enter, ...q.current.enterFrom)
                    }), r.createElement(P.Provider, {
                        value: X
                    }, r.createElement(l.up, {
                        value: (0, i.E)(V, {
                            visible: l.ZM.Open,
                            hidden: l.ZM.Closed
                        }) | $.flags
                    }, (0, o.sY)({
                        ourProps: ee,
                        theirProps: Q,
                        defaultTag: "div",
                        features: A,
                        visible: "visible" === V,
                        name: "Transition.Child"
                    })))
                })),
                D = (0, o.yV)((function(e, t) {
                    let n = null !== (0, r.useContext)(y),
                        o = null !== (0, l.oJ)();
                    return r.createElement(r.Fragment, null, !n && o ? r.createElement(R, {
                        ref: t,
                        ...e
                    }) : r.createElement(k, {
                        ref: t,
                        ...e
                    }))
                })),
                x = Object.assign(R, {
                    Child: D,
                    Root: R
                })
        },
        94192: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return l
                }
            });
            var r = n(67294),
                o = n(9362);

            function l() {
                let [e] = (0, r.useState)(o.k);
                return (0, r.useEffect)((() => () => e.dispose()), [e]), e
            }
        },
        14879: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return l
                }
            });
            var r = n(67294),
                o = n(16723);

            function l() {
                let e = (0, r.useRef)(!1);
                return (0, o.e)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), e
            }
        },
        39650: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return u
                }
            });
            var r = n(67294),
                o = n(84575),
                l = n(3855);

            function i(e, t, n) {
                let o = (0, l.E)(t);
                (0, r.useEffect)((() => {
                    function t(e) {
                        o.current(e)
                    }
                    return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)
                }), [e, n])
            }

            function u(e, t, n = !0) {
                let l = (0, r.useRef)(!1);

                function u(n, r) {
                    if (!l.current || n.defaultPrevented) return;
                    let i = function e(t) {
                            return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                        }(e),
                        u = r(n);
                    if (null !== u && u.getRootNode().contains(u)) {
                        for (let e of i) {
                            if (null === e) continue;
                            let t = e instanceof HTMLElement ? e : e.current;
                            if (null != t && t.contains(u) || n.composed && n.composedPath().includes(t)) return
                        }
                        return !(0, o.sP)(u, o.tJ.Loose) && -1 !== u.tabIndex && n.preventDefault(), t(n, u)
                    }
                }(0, r.useEffect)((() => {
                    requestAnimationFrame((() => {
                        l.current = n
                    }))
                }), [n]);
                let a = (0, r.useRef)(null);
                i("mousedown", (e => {
                    var t, n;
                    l.current && (a.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                }), !0), i("click", (e => {
                    a.current && (u(e, (() => a.current)), a.current = null)
                }), !0), i("blur", (e => u(e, (() => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null))), !0)
            }
        },
        51074: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return l
                }
            });
            var r = n(67294),
                o = n(15466);

            function l(...e) {
                return (0, r.useMemo)((() => (0, o.r)(...e)), [...e])
            }
        },
        46045: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return l
                },
                _: function() {
                    return i
                }
            });
            var r = n(12351);
            var o, l = ((o = l || {})[o.None = 1] = "None", o[o.Focusable = 2] = "Focusable", o[o.Hidden = 4] = "Hidden", o);
            let i = (0, r.yV)((function(e, t) {
                let {
                    features: n = 1,
                    ...o
                } = e, l = {
                    ref: t,
                    "aria-hidden": 2 === (2 & n) || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...4 === (4 & n) && 2 !== (2 & n) && {
                            display: "none"
                        }
                    }
                };
                return (0, r.sY)({
                    ourProps: l,
                    theirProps: o,
                    slot: {},
                    defaultTag: "div",
                    name: "Hidden"
                })
            }))
        },
        9362: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return o
                }
            });
            var r = n(81021);

            function o() {
                let e = [],
                    t = {
                        addEventListener: (e, n, r, o) => (e.addEventListener(n, r, o), t.add((() => e.removeEventListener(n, r, o)))),
                        requestAnimationFrame(...e) {
                            let n = requestAnimationFrame(...e);
                            return t.add((() => cancelAnimationFrame(n)))
                        },
                        nextFrame: (...e) => t.requestAnimationFrame((() => t.requestAnimationFrame(...e))),
                        setTimeout(...e) {
                            let n = setTimeout(...e);
                            return t.add((() => clearTimeout(n)))
                        },
                        microTask(...e) {
                            let n = {
                                current: !0
                            };
                            return (0, r.Y)((() => {
                                n.current && e[0]()
                            })), t.add((() => {
                                n.current = !1
                            }))
                        },
                        style(e, t, n) {
                            let r = e.style.getPropertyValue(t);
                            return Object.assign(e.style, {
                                [t]: n
                            }), this.add((() => {
                                Object.assign(e.style, {
                                    [t]: r
                                })
                            }))
                        },
                        group(e) {
                            let t = o();
                            return e(t), this.add((() => t.dispose()))
                        },
                        add: t => (e.push(t), () => {
                            let n = e.indexOf(t);
                            if (n >= 0)
                                for (let t of e.splice(n, 1)) t()
                        }),
                        dispose() {
                            for (let t of e.splice(0)) t()
                        }
                    };
                return t
            }
        },
        84575: function(e, t, n) {
            n.d(t, {
                C5: function() {
                    return g
                },
                EO: function() {
                    return y
                },
                TO: function() {
                    return c
                },
                fE: function() {
                    return d
                },
                jA: function() {
                    return T
                },
                sP: function() {
                    return v
                },
                tJ: function() {
                    return m
                },
                wI: function() {
                    return h
                },
                z2: function() {
                    return b
                }
            });
            var r = n(9362),
                o = n(32984),
                l = n(15466);
            let i = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e => `${e}:not([tabindex='-1'])`)).join(",");
            var u, a, s, c = ((s = c || {})[s.First = 1] = "First", s[s.Previous = 2] = "Previous", s[s.Next = 4] = "Next", s[s.Last = 8] = "Last", s[s.WrapAround = 16] = "WrapAround", s[s.NoScroll = 32] = "NoScroll", s),
                d = ((a = d || {})[a.Error = 0] = "Error", a[a.Overflow = 1] = "Overflow", a[a.Success = 2] = "Success", a[a.Underflow = 3] = "Underflow", a),
                f = ((u = f || {})[u.Previous = -1] = "Previous", u[u.Next = 1] = "Next", u);

            function p(e = document.body) {
                return null == e ? [] : Array.from(e.querySelectorAll(i)).sort(((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER))))
            }
            var m = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(m || {});

            function v(e, t = 0) {
                var n;
                return e !== (null == (n = (0, l.r)(e)) ? void 0 : n.body) && (0, o.E)(t, {
                    0: () => e.matches(i),
                    1() {
                        let t = e;
                        for (; null !== t;) {
                            if (t.matches(i)) return !0;
                            t = t.parentElement
                        }
                        return !1
                    }
                })
            }

            function h(e) {
                let t = (0, l.r)(e);
                (0, r.k)().nextFrame((() => {
                    t && !v(t.activeElement, 0) && g(e)
                }))
            }
            var E = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(E || {});

            function g(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", (e => {
                e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }), !0), document.addEventListener("click", (e => {
                1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }), !0));
            let w = ["textarea", "input"].join(",");

            function b(e, t = (e => e)) {
                return e.slice().sort(((e, n) => {
                    let r = t(e),
                        o = t(n);
                    if (null === r || null === o) return 0;
                    let l = r.compareDocumentPosition(o);
                    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                }))
            }

            function y(e, t) {
                return T(p(), t, {
                    relativeTo: e
                })
            }

            function T(e, t, {
                sorted: n = !0,
                relativeTo: r = null,
                skipElements: o = []
            } = {}) {
                let l = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                    i = Array.isArray(e) ? n ? b(e) : e : p(e);
                o.length > 0 && i.length > 1 && (i = i.filter((e => !o.includes(e)))), r = null != r ? r : l.activeElement;
                let u, a = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    s = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, i.indexOf(r)) - 1;
                        if (4 & t) return Math.max(0, i.indexOf(r)) + 1;
                        if (8 & t) return i.length - 1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    c = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    d = 0,
                    f = i.length;
                do {
                    if (d >= f || d + f <= 0) return 0;
                    let e = s + d;
                    if (16 & t) e = (e + f) % f;
                    else {
                        if (e < 0) return 3;
                        if (e >= f) return 1
                    }
                    u = i[e], null == u || u.focus(c), d += a
                } while (u !== l.activeElement);
                return 6 & t && function(e) {
                    var t, n;
                    return null != (n = null == (t = null == e ? void 0 : e.matches) ? void 0 : t.call(e, w)) && n
                }(u) && u.select(), 2
            }
        },
        81021: function(e, t, n) {
            function r(e) {
                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch((e => setTimeout((() => {
                    throw e
                }))))
            }
            n.d(t, {
                Y: function() {
                    return r
                }
            })
        }
    }
]);