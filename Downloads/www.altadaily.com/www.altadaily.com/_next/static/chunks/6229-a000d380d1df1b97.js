"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6229], {
        46229: function(e, t, r) {
            r.d(t, {
                AT: function() {
                    return M
                },
                Cz: function() {
                    return C
                },
                D_: function() {
                    return f
                },
                GX: function() {
                    return A
                },
                HC: function() {
                    return w
                },
                J3: function() {
                    return p
                },
                Jg: function() {
                    return b
                },
                Xv: function() {
                    return m
                },
                Yz: function() {
                    return h
                },
                ar: function() {
                    return _
                },
                eu: function() {
                    return x
                },
                j2: function() {
                    return k
                },
                kI: function() {
                    return v
                },
                o7: function() {
                    return Z
                },
                oy: function() {
                    return E
                }
            });
            var n = r(47568),
                s = r(26042),
                a = r(69396),
                i = r(29815),
                o = r(70655),
                u = r(6154),
                c = r(40221),
                l = r(30381),
                d = r.n(l),
                p = ["casual", "classic and elegant", "streetwear", "romantic", "retro", "sporty", "bohemian", "minimalist", "edgy", "glam", "gothic aesthetic"],
                f = ["retro", "streetwear", "sporty", "minimalist", "edgy", "gothic aesthetic", "workwear", "classic preppy", "tailored"],
                h = {
                    retro: "Retro",
                    streetwear: "Streetwear",
                    sporty: "Sporty",
                    minimalist: "Minimalist",
                    edgy: "Edgy",
                    "gothic aesthetic": "Goth",
                    workwear: "Workwear",
                    "classic preppy": "Classic & Preppy",
                    tailored: "Tailored",
                    casual: "Casual",
                    "classic and elegant": "Classic & Elegant",
                    romantic: "Romantic",
                    bohemian: "Boho",
                    glam: "Glam",
                    "edgy tailored": "Tailored"
                },
                m = function() {
                    var e = (0, n.Z)((function(e, t, r, n, c, l) {
                        var d, p, f, h, m, _, y, v, b, w, Z, C, E, k, x, A, M, B;
                        return (0, o.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    d = e, (p = new FormData).append("file", d), c(!0), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 5, 6, 7]), [4, u.Z.post("https://api.cloudinary.com/v1_1/".concat("flagshipcloud", "/image/upload"), p, {
                                        headers: {
                                            "Content-Type": "multipart/form-data"
                                        },
                                        params: {
                                            upload_preset: "selfies"
                                        }
                                    })];
                                case 2:
                                    return f = o.sent(), h = f.data, m = h.secure_url.replace(/\.[^/.]+$/, ".png"), [4, u.Z.post("/api/gpt4/itemCaption", {
                                        imageUrl: m,
                                        caption: t
                                    })];
                                case 3:
                                    if (_ = o.sent(), y = _.status, v = _.data, 200 !== y) throw new Error("Could not generate caption.");
                                    return b = v.caption, w = v.category, Z = {
                                        imageSrc: m,
                                        caption: b,
                                        name: b,
                                        category: w,
                                        from: "cropped"
                                    }, l((function(e) {
                                        return e.map((function(e) {
                                            return e.label === t && e.confidence === r ? (0, a.Z)((0, s.Z)({}, e), {
                                                imgUrl: m,
                                                caption: b,
                                                category: w
                                            }) : e
                                        }))
                                    })), [4, u.Z.get("/api/taggedItemMatches", {
                                        params: {
                                            itemImageUrl: m,
                                            caption: b,
                                            category: w
                                        }
                                    })];
                                case 4:
                                    if (C = o.sent(), E = C.status, k = C.data, 200 !== E) throw "Could not generate matches.";
                                    return x = k.catalogMatches, A = k.closetMatches, M = k.googleLensSearchMatches, n((function(e) {
                                        var n = (0, s.Z)({}, e);
                                        return n["".concat(t, "-").concat(r)] = [Z].concat((0, i.Z)(A), (0, i.Z)(g(x, M))), n
                                    })), [3, 7];
                                case 5:
                                    return B = o.sent(), console.error("Could not finish uploading and finding matches:", B), [3, 7];
                                case 6:
                                    return c(!1), [7];
                                case 7:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n, s, a, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function(e, t) {
                    for (var r = Math.max(e.length, t.length), n = [], s = 0; s < r; s++) s < t.length && n.push(t[s]), s < e.length && n.push(e[s]);
                    return n
                },
                _ = function(e, t, r) {
                    var n = r.sourceOrGender;
                    return y(e, t.id, n)
                },
                y = function(e, t, r) {
                    switch (r) {
                        case "All":
                        default:
                            return e;
                        case "Menswear":
                            return e.filter((function(e) {
                                return "Menswear" === e.user.gender
                            }));
                        case "Womenswear":
                            return e.filter((function(e) {
                                return "Womenswear" === e.user.gender
                            }));
                        case "User":
                            return e.filter((function(e) {
                                return e.user.id === t
                            }))
                    }
                },
                v = function() {
                    var e = (0, n.Z)((function(e, t) {
                        var r, n, s, a, i, c, l, p, f;
                        return (0, o.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, u.Z.patch("/api/selfies/".concat(e), t)];
                                case 1:
                                    if (r = o.sent(), n = r.status, s = r.data, 200 === n) return [2, {
                                        id: s.id,
                                        caption: s.caption,
                                        createdAt: d()(s.created_at),
                                        boundingBoxes: s.processed_bounding_boxes,
                                        location: null !== (a = s.location) && void 0 !== a ? a : null,
                                        isPublic: s.is_public,
                                        media: {
                                            id: s.media.id,
                                            url: s.media.media_url,
                                            hash: s.media.hash,
                                            createdAt: d()(s.media.created_at)
                                        },
                                        user: {
                                            id: s.users.id,
                                            name: s.users.first_name,
                                            photo_url: null !== (i = s.users.profile_photo_url) && void 0 !== i ? i : "",
                                            gender: null !== (c = s.users.gender) && void 0 !== c ? c : "Both"
                                        },
                                        outfit: {
                                            id: s.outfits.id,
                                            items: s.outfits.clothing_pieces,
                                            styles: null !== (l = s.outfits.styles) && void 0 !== l ? l : [],
                                            dressCodes: null !== (p = s.outfits.dress_codes) && void 0 !== p ? p : []
                                        }
                                    }];
                                    throw new Error("Could not update selfie");
                                case 2:
                                    return f = o.sent(), console.error(f), [2, null];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = (0, n.Z)((function(e) {
                        var t;
                        return (0, o.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, u.Z.delete("/api/selfies/".concat(e))];
                                case 1:
                                    if (200 === r.sent().status) return [2, !0];
                                    throw new Error("Could not delete selfie");
                                case 2:
                                    return t = r.sent(), console.error(t), [2, !1];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var e = (0, n.Z)((function(e, t) {
                        var r, n, s, a, i, c, l, p, f;
                        return (0, o.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    t(!0), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, 4, 5]), [4, u.Z.get("/api/selfies?self=true")];
                                case 2:
                                    return r = o.sent(), n = r.status, s = r.data, 200 === n && e(s.selfies.map((function(e) {
                                        return {
                                            id: e.id,
                                            caption: e.caption,
                                            createdAt: d()(e.created_at),
                                            boundingBoxes: e.processed_bounding_boxes,
                                            isPublic: e.is_public,
                                            media: {
                                                id: e.media.id,
                                                url: e.media.media_url,
                                                hash: e.media.hash,
                                                createdAt: d()(e.media.created_at)
                                            },
                                            user: {
                                                id: e.users.id,
                                                name: e.users.first_name,
                                                photo_url: null !== (a = e.users.profile_photo_url) && void 0 !== a ? a : "",
                                                gender: null !== (i = e.users.gender) && void 0 !== i ? i : "Both"
                                            },
                                            outfit: {
                                                id: e.outfits.id,
                                                items: e.outfits.clothing_pieces,
                                                styles: null !== (c = e.outfits.styles) && void 0 !== c ? c : [],
                                                dressCodes: null !== (l = e.outfits.dress_codes) && void 0 !== l ? l : []
                                            },
                                            upvotes: null !== (p = e.upvotes) && void 0 !== p ? p : 0
                                        }
                                    }))), [3, 5];
                                case 3:
                                    return f = o.sent(), console.error(f), [3, 5];
                                case 4:
                                    return t(!1), [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                Z = function() {
                    var e = (0, n.Z)((function(e, t) {
                        var r, n, s, a, i, c, l, p, f, h;
                        return (0, o.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    t(!0), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, 4, 5]), [4, u.Z.get("/api/selfies")];
                                case 2:
                                    return r = o.sent(), n = r.status, s = r.data, 200 === n && e(s.selfies.map((function(e) {
                                        return {
                                            id: e.id,
                                            caption: e.caption,
                                            createdAt: d()(e.created_at),
                                            boundingBoxes: e.processed_bounding_boxes,
                                            location: null !== (a = e.location) && void 0 !== a ? a : null,
                                            isPublic: e.is_public,
                                            media: {
                                                id: e.media.id,
                                                url: e.media.media_url,
                                                hash: e.media.hash,
                                                createdAt: d()(e.media.created_at)
                                            },
                                            user: {
                                                id: e.users.id,
                                                name: e.users.first_name,
                                                photo_url: null !== (i = e.users.profile_photo_url) && void 0 !== i ? i : "",
                                                gender: null !== (c = e.users.gender) && void 0 !== c ? c : "Both"
                                            },
                                            outfit: {
                                                id: e.outfits.id,
                                                items: e.outfits.clothing_pieces,
                                                styles: null !== (l = e.outfits.styles) && void 0 !== l ? l : [],
                                                dressCodes: null !== (p = e.outfits.dress_codes) && void 0 !== p ? p : []
                                            },
                                            upvotes: null !== (f = e.upvotes) && void 0 !== f ? f : 0
                                        }
                                    }))), [3, 5];
                                case 3:
                                    return h = o.sent(), console.error(h), [3, 5];
                                case 4:
                                    return t(!1), [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = (0, n.Z)((function(e, t, r, n, s, a, c, l, p, f, h, m, g) {
                        var _, y, v, b, w, Z, C, E, k, x, A;
                        return (0, o.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    f(!0), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, 4, 5]), [4, u.Z.post("/api/selfies", {
                                        mediaId: e.id,
                                        caption: t,
                                        location: r,
                                        outfitItems: n,
                                        boundingBoxes: s,
                                        styles: a,
                                        dressCodes: c,
                                        isSelfiePublic: l
                                    })];
                                case 2:
                                    return _ = o.sent(), y = _.status, v = _.data, 200 === y && (b = v.selfie, p((function(e) {
                                        return [{
                                            id: b.id,
                                            caption: b.caption,
                                            createdAt: d()(b.created_at),
                                            boundingBoxes: b.processed_bounding_boxes,
                                            location: null !== (w = b.location) && void 0 !== w ? w : null,
                                            isPublic: b.is_public,
                                            media: {
                                                id: b.media.id,
                                                url: b.media.media_url,
                                                hash: b.media.hash,
                                                createdAt: d()(b.media.created_at)
                                            },
                                            user: {
                                                id: b.users.id,
                                                name: b.users.first_name,
                                                photo_url: null !== (Z = b.users.profile_photo_url) && void 0 !== Z ? Z : "",
                                                gender: null !== (C = b.users.gender) && void 0 !== C ? C : "Both"
                                            },
                                            outfit: {
                                                id: b.outfits.id,
                                                items: b.outfits.clothing_pieces,
                                                styles: null !== (E = b.outfits.styles) && void 0 !== E ? E : [],
                                                dressCodes: null !== (k = b.outfits.dress_codes) && void 0 !== k ? k : []
                                            },
                                            upvotes: null !== (x = b.upvotes) && void 0 !== x ? x : 0
                                        }].concat((0, i.Z)(e))
                                    })), g("Styles analyzed and saved to your Profile")), [3, 5];
                                case 3:
                                    return A = o.sent(), console.error(A), [3, 5];
                                case 4:
                                    return f(!1), h(!1), m({}), [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n, s, a, i, o, u, c, l, d, p, f) {
                        return e.apply(this, arguments)
                    }
                }(),
                E = function() {
                    var e = (0, n.Z)((function(e, t) {
                        var r, n, s, a;
                        return (0, o.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return r = "/api/media", t && (r += "?type=".concat(t)), [4, u.Z.get(r)];
                                case 1:
                                    return n = i.sent(), s = n.status, a = n.data, 200 === s && e(a.media.map((function(e) {
                                        return {
                                            id: e.id,
                                            url: e.media_url,
                                            hash: e.hash,
                                            createdAt: d()(e.created_at)
                                        }
                                    }))), [2]
                            }
                        }))
                    }));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var e = (0, n.Z)((function(e, t, r) {
                        var n, s, a;
                        return (0, o.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    r(!0), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, 5, 6]), [4, fetch("/api/processMedia?" + new URLSearchParams({
                                        imgUrl: e.url,
                                        type: "dressCodes"
                                    }), {
                                        method: "GET"
                                    })];
                                case 2:
                                    if (!(n = i.sent()).ok) throw new Error("Error getting dress codes");
                                    return [4, n.json()];
                                case 3:
                                    return s = i.sent(), t(s), [3, 6];
                                case 4:
                                    return a = i.sent(), console.error(a), [3, 6];
                                case 5:
                                    return r(!1), [7];
                                case 6:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var e = (0, n.Z)((function(e, t, r) {
                        var n, s, a;
                        return (0, o.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    r(!0), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, 5, 6]), [4, fetch("/api/processMedia?" + new URLSearchParams({
                                        imgUrl: e.url,
                                        type: "styles"
                                    }), {
                                        method: "GET"
                                    })];
                                case 2:
                                    if (!(n = i.sent()).ok) throw new Error("Error getting styles");
                                    return [4, n.json()];
                                case 3:
                                    return s = i.sent(), t(s), [3, 6];
                                case 4:
                                    return a = i.sent(), console.error(a), [3, 6];
                                case 5:
                                    return r(!1), [7];
                                case 6:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var e = (0, n.Z)((function(e, t, r, n) {
                        var s, a, i, c;
                        return (0, o.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    r(!0), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, 4, 5]), [4, u.Z.post("/api/processMedia", {
                                        mediaId: e.id
                                    })];
                                case 2:
                                    if (s = o.sent(), a = s.status, i = s.data, 200 !== a) throw new Error("Error processing image");
                                    return t(i), [3, 5];
                                case 3:
                                    return c = o.sent(), console.error(c), [3, 5];
                                case 4:
                                    return r(!1), n((function(e) {
                                        return e + 1
                                    })), [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n, s) {
                        return e.apply(this, arguments)
                    }
                }(),
                M = function() {
                    var e = (0, n.Z)((function(e, t, r, n, s, a) {
                        var l, p, f, h, m, g, _, y, v, b, w, Z, C, E, k, x, A;
                        return (0, o.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    l = {
                                        maxSizeMB: 5,
                                        maxWidthOrHeight: 1920,
                                        fileType: "image/png"
                                    }, o.label = 1;
                                case 1:
                                    return o.trys.push([1, 9, 10, 11]), p = new FormData, [4, (0, c.Z)(e, l)];
                                case 2:
                                    return f = o.sent(), p.append("image_file", f), [4, fetch("https://sdk.photoroom.com/v1/segment", {
                                        method: "POST",
                                        headers: {
                                            Accept: "image/png, application/json",
                                            "x-api-key": "6fc9e4b31921a8d3eeddb5f58a2522a602440c4d"
                                        },
                                        body: p
                                    })];
                                case 3:
                                    return (h = o.sent()).ok || console.error("Could not segment image submitted, using un-segmented image"), h.ok ? [4, h.blob()] : [3, 5];
                                case 4:
                                    return g = o.sent(), [3, 6];
                                case 5:
                                    g = f, o.label = 6;
                                case 6:
                                    return m = g, (_ = new FormData).append("file", m), [4, u.Z.post("https://api.cloudinary.com/v1_1/".concat("flagshipcloud", "/image/upload"), _, {
                                        headers: {
                                            "Content-Type": "multipart/form-data"
                                        },
                                        params: {
                                            upload_preset: "selfies"
                                        }
                                    })];
                                case 7:
                                    return y = o.sent(), v = y.data, b = v.secure_url.replace(/\.[^/.]+$/, ".png"), [4, u.Z.post("/api/media", {
                                        mediaUrl: b,
                                        hash: t,
                                        type: "image"
                                    })];
                                case 8:
                                    return w = o.sent(), Z = w.status, C = w.data, 200 === Z && (E = C.media, x = {
                                        id: E.id,
                                        url: b,
                                        hash: t,
                                        createdAt: d()(null !== (k = E.created_at) && void 0 !== k ? k : new Date)
                                    }, s(x), a((function(e) {
                                        return [x].concat((0, i.Z)(e))
                                    }))), [3, 11];
                                case 9:
                                    return A = o.sent(), console.error(A, "Error uploading file to Cloudinary"), [3, 11];
                                case 10:
                                    return r(!1), n(!1), [7];
                                case 11:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n, s, a, i) {
                        return e.apply(this, arguments)
                    }
                }()
        }
    }
]);