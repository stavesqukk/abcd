"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8550], {
        38550: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i, o = function() {
                    function e(e) {
                        this.parent = e
                    }
                    return e.prototype.send = function(e, t) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["do", "message:send", [e, t]])
                    }, e.prototype.sendText = function(e) {
                        this.send("text", e)
                    }, e.prototype.sendFile = function(e) {
                        this.send("file", e)
                    }, e.prototype.sendAnimation = function(e) {
                        this.send("animation", e)
                    }, e.prototype.sendAudio = function(e) {
                        this.send("audio", e)
                    }, e.prototype.show = function(e, t) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["do", "message:show", [e, t]])
                    }, e.prototype.showText = function(e) {
                        this.show("text", e)
                    }, e.prototype.showFile = function(e) {
                        this.show("file", e)
                    }, e.prototype.showAnimation = function(e) {
                        this.show("animation", e)
                    }, e.prototype.showAudio = function(e) {
                        this.show("audio", e)
                    }, e.prototype.showPicker = function(e) {
                        this.show("picker", e)
                    }, e.prototype.showField = function(e) {
                        this.show("field", e)
                    }, e.prototype.showCarousel = function(e) {
                        this.show("carousel", e)
                    }, e.prototype.markAsRead = function() {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["do", "message:read"])
                    }, e.prototype.startThread = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["do", "message:thread:start", [e]])
                    }, e.prototype.endThread = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["do", "message:thread:end", [e]])
                    }, e.prototype.onMessageSent = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["off", "message:sent"]), window.$crisp.push(["on", "message:sent", e])
                    }, e.prototype.onMessageReceived = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["off", "message:received"]), window.$crisp.push(["on", "message:received", e])
                    }, e.prototype.onMessageComposeSent = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["off", "message:compose:sent"]), window.$crisp.push(["on", "message:compose:sent", e])
                    }, e.prototype.onMessageComposeReceived = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["off", "message:compose:received"]), window.$crisp.push(["on", "message:compose:received", e])
                    }, e
                }(),
                s = function() {
                    function e(e) {
                        this.parent = e
                    }
                    return e.prototype.setNickname = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["set", "user:nickname", [e]])
                    }, e.prototype.setEmail = function(e, t) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["set", "user:email", [e, t]])
                    }, e.prototype.setPhone = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["set", "user:phone", [e]])
                    }, e.prototype.setAvatar = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["set", "user:avatar", [e]])
                    }, e.prototype.setCompany = function(e, t) {
                        var n = {};
                        t && t.url && (n.url = t.url), t && t.description && (n.description = t.description), t && t.employment && (n.employment = [t.employment.title], t.employment.role && n.employment.push(t.employment.role)), this.parent.createSingletonIfNecessary(), window.$crisp.push(["set", "user:company", [e, n]])
                    }, e.prototype.getEmail = function() {
                        return this.parent.isCrispInjected() ? window.$crisp.get("user:email") : null
                    }, e.prototype.getPhone = function() {
                        return this.parent.isCrispInjected() ? window.$crisp.get("user:phone") : null
                    }, e.prototype.getNickname = function() {
                        return this.parent.isCrispInjected() ? window.$crisp.get("user:nickname") : null
                    }, e.prototype.getAvatar = function() {
                        return this.parent.isCrispInjected() ? window.$crisp.get("user:avatar") : null
                    }, e.prototype.getCompany = function() {
                        return this.parent.isCrispInjected() ? window.$crisp.get("user:company") : null
                    }, e.prototype.onEmailChanged = function(e) {
                        this.parent.isCrispInjected() && (window.$crisp.push(["off", "user:email:changed"]), window.$crisp.push(["on", "user:email:changed", e]))
                    }, e.prototype.onPhoneChanged = function(e) {
                        this.parent.isCrispInjected() && (window.$crisp.push(["off", "user:phone:changed"]), window.$crisp.push(["on", "user:phone:changed", e]))
                    }, e.prototype.onNicknameChanged = function(e) {
                        this.parent.isCrispInjected() && (window.$crisp.push(["off", "user:nickname:changed"]), window.$crisp.push(["on", "user:nickname:changed", e]))
                    }, e.prototype.onAvatarChanged = function(e) {
                        this.parent.isCrispInjected() && (window.$crisp.push(["off", "user:avatar:changed"]), window.$crisp.push(["on", "user:avatar:changed", e]))
                    }, e
                }(),
                r = function() {
                    function e(e) {
                        this.parent = e
                    }
                    return e.prototype.run = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["do", "trigger:run", [e]])
                    }, e
                }();
            ! function(e) {
                e.Red = "red", e.Orange = "orange", e.Yellow = "yellow", e.Green = "green", e.Blue = "blue", e.Purple = "purple", e.Pink = "pink", e.Brown = "brown", e.Grey = "grey", e.Black = "black"
            }(i || (i = {}));
            var p, c, a = function() {
                    function e(e) {
                        this.parent = e
                    }
                    return e.prototype.reset = function(e) {
                        void 0 === e && (e = !1), this.parent.isCrispInjected() && window.$crisp.do("session:reset", [e])
                    }, e.prototype.setSegments = function(e, t) {
                        this.parent.createSingletonIfNecessary(), $crisp.push(["set", "session:segments", [e, t]])
                    }, e.prototype.setData = function(e) {
                        var t = this,
                            n = [];
                        Object.entries(e).forEach((function(e) {
                            t.isValidDataValue(e[0]) && n.push([e[0], e[1]])
                        })), this.parent.createSingletonIfNecessary(), $crisp.push(["set", "session:data", [n]])
                    }, e.prototype.pushEvent = function(e, t, n) {
                        void 0 === t && (t = {}), void 0 === n && (n = i.Blue), this.parent.isCrispInjected() && window.$crisp.push(["set", "session:event", [
                            [
                                [e, t, n]
                            ]
                        ]])
                    }, e.prototype.getData = function(e) {
                        if (this.parent.isCrispInjected()) return window.$crisp.get("session:data", e)
                    }, e.prototype.getIdentifier = function() {
                        return this.parent.isCrispInjected() ? window.$crisp.get("session:identifier") : null
                    }, e.prototype.onLoaded = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["off", "session:loaded"]), window.$crisp.push(["on", "session:loaded", e])
                    }, e.prototype.isValidDataValue = function(e) {
                        return "string" === typeof e || "number" === typeof e || "boolean" === typeof e
                    }, e
                }(),
                d = function() {
                    function e(e) {
                        this.parent = e
                    }
                    return e.prototype.show = function() {
                        this.parent.autoInjectIfNecessary(), window.$crisp.push(["do", "chat:show"])
                    }, e.prototype.hide = function() {
                        this.parent.autoInjectIfNecessary(), window.$crisp.push(["do", "chat:hide"])
                    }, e.prototype.open = function() {
                        this.parent.autoInjectIfNecessary(), window.$crisp.push(["do", "chat:open"])
                    }, e.prototype.close = function() {
                        this.parent.isCrispInjected() && window.$crisp.push(["do", "chat:close"])
                    }, e.prototype.setHelpdeskView = function() {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["do", "helpdesk:search"])
                    }, e.prototype.openHelpdeskArticle = function(e, t, n, i) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["do", "helpdesk:article:open", [e, t, n, i]])
                    }, e.prototype.queryHelpdesk = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["do", "helpdesk:query", [e]])
                    }, e.prototype.unreadCount = function() {
                        return this.parent.isCrispInjected() ? window.$crisp.get("chat:unread:count") : 0
                    }, e.prototype.isChatOpened = function() {
                        return !!this.parent.isCrispInjected() && window.$crisp.is("chat:opened")
                    }, e.prototype.isVisible = function() {
                        return !!this.parent.isCrispInjected() && window.$crisp.is("chat:visible")
                    }, e.prototype.onChatInitiated = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["off", "chat:initiated"]), window.$crisp.push(["on", "chat:initiated", e])
                    }, e.prototype.onChatOpened = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["off", "chat:opened"]), window.$crisp.push(["on", "chat:opened", e])
                    }, e.prototype.onChatClosed = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["off", "chat:closed"]), window.$crisp.push(["on", "chat:closed", e])
                    }, e.prototype.onHelpdeskQueried = function(e) {
                        this.parent.createSingletonIfNecessary(), window.$crisp.push(["off", "helpdesk:queried"]), window.$crisp.push(["on", "helpdesk:queried", e])
                    }, e
                }();
            ! function(e) {
                e.Default = "default", e.Amber = "amber", e.Black = "black", e.Blue = "blue", e.BlueGrey = "blue_grey", e.LightBlue = "light_blue", e.Brown = "brown", e.Cyan = "cyan", e.Green = "green", e.LightGreen = "light_green", e.Grey = "grey", e.Indigo = "indigo", e.Orange = "orange", e.DeepOrange = "deep_orange", e.Pink = "pink", e.Purple = "purple", e.DeepPurple = "deep_purple", e.Red = "red", e.Teal = "teal"
            }(p || (p = {})),
            function(e) {
                e.Left = "left", e.Right = "right"
            }(c || (c = {}));
            var h = new(function() {
                    function e() {
                        this.clientUrl = "https://client.crisp.chat/l.js", this.websiteId = "", this.autoload = !0, this.injected = !1, this.chat = new d(this), this.session = new a(this), this.user = new s(this), this.message = new o(this), this.trigger = new r(this)
                    }
                    return e.prototype.configure = function(e, t) {
                        void 0 === t && (t = {}), this.websiteId = e, this.tokenId = t.tokenId, this.locale = t.locale, this.sessionMerge = t.sessionMerge, this.cookieDomain = t.cookieDomain, this.cookieExpire = t.cookieExpire, this.lockFullview = t.lockFullview, this.lockMaximized = t.lockMaximized, this.safeMode = t.safeMode, void 0 !== t.clientUrl && (this.clientUrl = t.clientUrl), void 0 !== t.autoload && (this.autoload = t.autoload), this.autoload && this.load()
                    }, e.prototype.load = function() {
                        var e = document.getElementsByTagName("head");
                        if (this.createSingletonIfNecessary(), !0 !== this.isCrispInjected()) {
                            if (!this.websiteId) throw new Error("websiteId must be set before loading Crisp");
                            if (window.CRISP_WEBSITE_ID = this.websiteId, window.CRISP_RUNTIME_CONFIG = {}, this.tokenId && (window.CRISP_TOKEN_ID = this.tokenId), this.sessionMerge && (window.CRISP_RUNTIME_CONFIG.session_merge = !0), this.locale && (window.CRISP_RUNTIME_CONFIG.locale = this.locale), this.lockFullview && (window.CRISP_RUNTIME_CONFIG.lock_full_view = !0), this.lockMaximized && (window.CRISP_RUNTIME_CONFIG.lock_maximized = !0), this.cookieDomain && (window.CRISP_COOKIE_DOMAIN = this.cookieDomain), this.cookieExpire && (window.CRISP_COOKIE_EXPIRE = this.cookieExpire), !e || !e[0]) return this.deferredLoading();
                            !0 === this.safeMode && this.setSafeMode(!0);
                            var t = document.createElement("script");
                            t.src = this.clientUrl, t.async = !0, e[0].appendChild(t), this.injected = !0
                        }
                    }, e.prototype.setTokenId = function(e) {
                        this.tokenId = e, !0 === this.isCrispInjected() && (e ? window.CRISP_TOKEN_ID = e : delete window.CRISP_TOKEN_ID)
                    }, e.prototype.setZIndex = function(e) {
                        this.createSingletonIfNecessary(), window.$crisp.push(["config", "container:index", [e]])
                    }, e.prototype.setColorTheme = function(e) {
                        this.createSingletonIfNecessary(), window.$crisp.push(["config", "color:theme", [e]])
                    }, e.prototype.setHideOnAway = function(e) {
                        this.createSingletonIfNecessary(), window.$crisp.push(["config", "hide:on:away", [e]])
                    }, e.prototype.setHideOnMobile = function(e) {
                        this.createSingletonIfNecessary(), window.$crisp.push(["config", "hide:on:mobile", [e]])
                    }, e.prototype.setPosition = function(e) {
                        this.createSingletonIfNecessary(), $crisp.push(["config", "position:reverse", [e === c.Left]])
                    }, e.prototype.setAvailabilityTooltip = function(e) {
                        this.createSingletonIfNecessary(), window.$crisp.push(["config", "availability:tooltip", [e]])
                    }, e.prototype.setVacationMode = function(e) {
                        this.createSingletonIfNecessary(), window.$crisp.push(["config", "hide:vacation", [e]])
                    }, e.prototype.setSafeMode = function(e) {
                        void 0 === e && (e = !0), this.createSingletonIfNecessary(), window.$crisp.push(["safe", e])
                    }, e.prototype.muteSound = function(e) {
                        this.createSingletonIfNecessary(), window.$crisp.push(["config", "sound:mute", [e]])
                    }, e.prototype.toggleOperatorCount = function(e) {
                        this.createSingletonIfNecessary(), window.$crisp.push(["config", "show:operator:count", [e]])
                    }, e.prototype.onWebsiteAvailabilityChanged = function(e) {
                        this.createSingletonIfNecessary(), window.$crisp.push(["off", "website:availability:changed"]), window.$crisp.push(["on", "website:availability:changed", e])
                    }, e.prototype.createSingletonIfNecessary = function() {
                        void 0 === window.$crisp && (window.$crisp = [])
                    }, e.prototype.autoInjectIfNecessary = function() {
                        this.isCrispInjected() || this.load()
                    }, e.prototype.isCrispInjected = function() {
                        return !!(!0 === this.injected || window.$crisp && window.$crisp.is)
                    }, e.prototype.deferredLoading = function() {
                        var e = this;
                        document.addEventListener("DOMContentLoaded", (function() {
                            e.load()
                        }))
                    }, e
                }()),
                u = n(67294),
                w = n(31618),
                f = function() {
                    var e = (0, u.useContext)(w.St);
                    return (0, u.useEffect)((function() {
                        h.configure("13cfa480-bb9b-4ea7-93ed-5b8bea713c1f"), e && e.email && h.user.setEmail(e.email.trim())
                    })), null
                }
        }
    }
]);