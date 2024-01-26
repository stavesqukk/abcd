"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [925], {
        27990: function(e, t, r) {
            r.d(t, {
                yW: function() {
                    return n
                }
            });
            var n = function(e) {
                for (var t, r = e.length; r > 0;) {
                    var n;
                    t = Math.floor(Math.random() * r), r--, n = [e[t], e[r]], e[r] = n[0], e[t] = n[1]
                }
                return e
            }
        },
        94310: function(e, t, r) {
            r.d(t, {
                ks: function() {
                    return v
                },
                CI: function() {
                    return _
                },
                Tb: function() {
                    return N
                },
                Xj: function() {
                    return I
                },
                Dp: function() {
                    return C
                },
                ox: function() {
                    return k
                },
                Lt: function() {
                    return j
                },
                CY: function() {
                    return D
                },
                au: function() {
                    return y
                }
            });
            var n = r(47568),
                s = r(29815),
                a = r(82222),
                l = r(70655),
                i = r(6154),
                o = (r(80269), r(80008)),
                c = r.n(o),
                u = r(44976),
                d = r(955),
                f = r(27990),
                m = r(38824),
                p = r(49802),
                h = r(34155),
                x = function() {
                    var e = (0, n.Z)((function(e) {
                        var t, r, n, s, a, o = arguments;
                        return (0, l.__generator)(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    t = o.length > 1 && void 0 !== o[1] && o[1], l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), r = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=".concat(h.env.REACT_APP_ACCUWEATHER_API_KEY, "&q=").concat(e), [4, i.Z.get(r)];
                                case 2:
                                    return n = l.sent(), (s = n.data) && s.length > 0 ? t ? [2, s[0]] : [2, s[0].Key] : [3, 4];
                                case 3:
                                    return a = l.sent(), console.error(a), [2, null];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var e = (0, n.Z)((function(e) {
                        var t, r;
                        return (0, l.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return t = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/".concat(e, "?apikey=").concat(h.env.REACT_APP_ACCUWEATHER_API_KEY), [4, fetch(t)];
                                case 1:
                                    if (!(r = n.sent()).ok) throw console.error("ERROR", r), new Error("Weather response error: ".concat(r.status, " ").concat(r.statusText));
                                    return [4, r.json()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = (function() {
                    var e = (0, n.Z)((function(e, t, r) {
                        var n, s, a, i, o, c, u, d, f, m, h, b, y, v, j;
                        return (0, l.__generator)(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, (s = (0, p.eI)("https://dvvxvgzwtwbstrlopsvw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2dnh2Z3p3dHdic3RybG9wc3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4MTU3ODAsImV4cCI6MTk5MzM5MTc4MH0.5kn39qbHSWxUnNy88qd14AQe_rFOlo5J2x_4HI78bmA")).from("users").select("*").eq("id", r).limit(1).single()];
                                case 1:
                                    return a = l.sent(), i = a.data, o = "", c = "", !i || i.city ? [3, 4] : [4, x(e, !0)];
                                case 2:
                                    return u = l.sent(), c = u.Key, o = "".concat(u.LocalizedName, ", ").concat(u.AdministrativeArea.LocalizedName), [4, s.from("users").update({
                                        city: o
                                    }).eq("id", r)];
                                case 3:
                                    return l.sent(), [3, 5];
                                case 4:
                                    o = null === i || void 0 === i ? void 0 : i.city, l.label = 5;
                                case 5:
                                    return [4, s.from("weather").select("*").eq("city", o).single()];
                                case 6:
                                    return d = l.sent(), (f = d.data) && f.last_updated === t && f.accuweather_location_key ? [2, {
                                        weather: f
                                    }] : (f && (c = f.accuweather_location_key), c ? [3, 8] : [4, x(e, !0)]);
                                case 7:
                                    m = l.sent(), c = m.Key, l.label = 8;
                                case 8:
                                    return [4, g(c)];
                                case 9:
                                    return h = l.sent(), b = {
                                        city: o,
                                        summary: h.Headline.Category,
                                        details: h.Headline.Text,
                                        minTemp: h.DailyForecasts[0].Temperature.Minimum.Value,
                                        maxTemp: h.DailyForecasts[0].Temperature.Maximum.Value,
                                        last_updated: t,
                                        precipitation: w(h.DailyForecasts[0].Day.HasPrecipitation, h.DailyForecasts[0].Day.PrecipitationType, null === (n = h.DailyForecasts[0].Day.Evapotranspiration) || void 0 === n ? void 0 : n.Value),
                                        accuweather_location_key: c
                                    }, [4, s.from("weather").upsert([b], {
                                        onConflict: "city"
                                    }).select()];
                                case 10:
                                    if (y = l.sent(), v = y.data, (j = y.error) || !v) throw console.error("Upsert error", j), j;
                                    return [2, {
                                        weather: v[0]
                                    }]
                            }
                        }))
                    }))
                }(), function(e, t) {
                    if (!e || !t) return "mild";
                    var r = (e + t) / 2;
                    return r >= 80 ? "hot" : r >= 70 ? "warm" : r >= 60 ? "mild" : r >= 50 ? "cool" : "cold"
                }),
                w = function(e, t, r, n) {
                    if (e) {
                        if ("Rain" === t) return "Light" === r ? "drizzle" : "rainy";
                        if ("Snow" === t || "Ice" === t || "Mixed" === t) return "snowy"
                    }
                    return n ? "humid" : "dry"
                },
                y = "bg-gradient-to-r from-tts-black to-red-700",
                v = function() {
                    var e = (0, n.Z)((function(e, t, r) {
                        var n, s, a, i, o;
                        return (0, l.__generator)(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return l.trys.push([0, 5, 6, 7]), [4, fetch("/api/semanticSearch?" + new URLSearchParams({
                                        query: e
                                    }), {
                                        method: "GET"
                                    })];
                                case 1:
                                    return (n = l.sent()).ok ? [4, n.json()] : [3, 3];
                                case 2:
                                    return s = l.sent(), a = s.filter((function(e) {
                                        return null !== e.product_image
                                    })).map((function(e) {
                                        return {
                                            closet_id: e.id,
                                            url: e.product_image,
                                            img_url: e.product_image,
                                            category: e.category,
                                            rmbg_url: e.segmented_product_image,
                                            original_img_url: e.user_uploaded_closet_image,
                                            source: "closet",
                                            brand: e.product_brand,
                                            name: e.product_name,
                                            seasons: e.seasons,
                                            colors: e.colors,
                                            dress_codes: e.dress_codes
                                        }
                                    })), i = (0, m.ad)(a), t(i), [3, 4];
                                case 3:
                                    console.error("Error fetching semantic search results:", n.status), l.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return o = l.sent(), console.error("Error in getSemanticSearchResults:", o), [3, 7];
                                case 6:
                                    return r(!1), [7];
                                case 7:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                j = (function() {
                    var e = (0, n.Z)((function(e, t, r) {
                        var n, s, a, i;
                        return (0, l.__generator)(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return l.trys.push([0, 3, 4, 5]), [4, fetch("/api/homeFeedEventStyling?" + new URLSearchParams({
                                        content: r
                                    }), {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    })];
                                case 1:
                                    if (!(n = l.sent()).ok) throw new Error("Could not get catalog outfits from backend");
                                    return [4, n.json()];
                                case 2:
                                    return s = l.sent(), a = s.eventStylingComponents.map((function(e) {
                                        var t = e.components,
                                            r = t.individual_pieces,
                                            n = t.image_sources,
                                            s = t.text_sources,
                                            a = t.texts,
                                            l = t.id,
                                            i = e.query_metadata,
                                            o = i.query,
                                            c = i.modifier,
                                            u = i.date,
                                            d = i.dress_code,
                                            p = i.location;
                                        return {
                                            components: {
                                                id: l,
                                                items: (0, f.yW)((0, m.ad)(r)),
                                                texts: a,
                                                textSources: s,
                                                imageSources: n,
                                                outfits: []
                                            },
                                            queryMetadata: {
                                                event: o,
                                                dressCode: d,
                                                location: p,
                                                theme: c,
                                                date: u
                                            }
                                        }
                                    })), e(a), [3, 5];
                                case 3:
                                    return i = l.sent(), console.error(i), [3, 5];
                                case 4:
                                    return t(!1), [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }))
                }(), function() {
                    var e = (0, n.Z)((function() {
                        var e, t, r;
                        return (0, l.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 3, , 4]), [4, fetch("/api/weeklyOutfits", {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    })];
                                case 1:
                                    if (!(e = n.sent()).ok) throw new Error("Could not get weekly outfits from backend");
                                    return [4, e.json()];
                                case 2:
                                    if (!(t = n.sent())) throw new Error("Could not get weekly outfits from backend");
                                    return [2, t];
                                case 3:
                                    return r = n.sent(), console.error(r), [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                _ = function() {
                    var e = (0, n.Z)((function(e, t, r) {
                        var n, s, a;
                        return (0, l.__generator)(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return l.trys.push([0, 3, 4, 5]), r(!0), [4, fetch("/api/recommendedItems", {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    })];
                                case 1:
                                    if (!(n = l.sent()).ok) throw new Error("Could not get recommended items from edge function");
                                    return [4, n.json()];
                                case 2:
                                    return s = l.sent(), e((0, d.D)(s.recommended_items)), t(s.id), [3, 5];
                                case 3:
                                    return a = l.sent(), console.error(a), [3, 5];
                                case 4:
                                    return r(!1), [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                N = (function() {
                    var e = (0, n.Z)((function() {
                        var e, t, r;
                        return (0, l.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 3, , 4]), [4, fetch("/api/dailyWishlistOutfits", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    })];
                                case 1:
                                    if (!(e = n.sent()).ok) throw new Error("Could not get catalog outfits from backend");
                                    return [4, e.json()];
                                case 2:
                                    if (!(t = n.sent())) throw new Error("Could not get catalog outfits from backend");
                                    return [2, t];
                                case 3:
                                    return r = n.sent(), console.error(r), [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }(), function() {
                    var e = (0, n.Z)((function() {
                        var e, t, r;
                        return (0, l.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 3, , 4]), [4, fetch("/api/dailyInspirations", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    })];
                                case 1:
                                    if (!(e = n.sent()).ok) throw new Error("Could not get catalog outfits from backend");
                                    return [4, e.json()];
                                case 2:
                                    if (!(t = n.sent())) throw new Error("Could not get catalog outfits from backend");
                                    return [2, t];
                                case 3:
                                    return r = n.sent(), console.error(r), [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }(), function() {
                    var e = (0, n.Z)((function(e, t, r, n) {
                        var s, a, i;
                        return (0, l.__generator)(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    if (!e) return [2];
                                    t(!0), l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), (s = e.city) && r && r(s), s ? [4, fetch("/api/weather?city=".concat(s)).then((function(e) {
                                        return e.json()
                                    }))] : (console.error("Null city and state, cannot fetch weather"), [2]);
                                case 2:
                                    return a = l.sent(), n && n({
                                        summary: a.summary,
                                        details: a.details,
                                        minTemp: a.minTemp,
                                        maxTemp: a.maxTemp,
                                        precipitation: a.precipitation
                                    }), t(!1), [2, {
                                        weatherData: a,
                                        cityAndState: s
                                    }];
                                case 3:
                                    return i = l.sent(), console.error("Error fetching user city and weather data", i), t(!1), [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n, s) {
                        return e.apply(this, arguments)
                    }
                }()),
                k = function() {
                    var e = (0, n.Z)((function(e, t, r, n, s, a) {
                        var o, c;
                        return (0, l.__generator)(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    if (!e) return [2];
                                    l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), [4, i.Z.patch("/api/coCreatedOutfits/".concat(e), {
                                        label: t,
                                        description: r,
                                        selectedRatingIndex: n,
                                        creationContext: s,
                                        date: a
                                    })];
                                case 2:
                                    if (o = l.sent(), 200 === o.status) return [2, "Success"];
                                    throw "Could not update co created outfit";
                                case 3:
                                    return c = l.sent(), console.error(c), [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n, s, a, l) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function() {
                    var e = (0, n.Z)((function(e, t, r, n, s) {
                        var a, i, o, c, u = arguments;
                        return (0, l.__generator)(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return a = u.length > 5 && void 0 !== u[5] ? u[5] : 3, i = null === s || void 0 === s ? void 0 : s.precipitation, o = b(null === s || void 0 === s ? void 0 : s.minTemp, null === s || void 0 === s ? void 0 : s.maxTemp), c = Z(e), [4, fetch("/api/coCreateOutfits", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            validatedDressCode: c,
                                            imgUrl: t,
                                            itemCaption: null !== r && void 0 !== r ? r : "",
                                            itemCategory: n,
                                            precipitation: i,
                                            temperatureEnum: o,
                                            numSetsToRequest: a
                                        })
                                    }).then((function(e) {
                                        return 200 === e.status ? e.json() : null
                                    })).catch((function(e) {
                                        return console.error(e), null
                                    }))];
                                case 1:
                                    return [2, l.sent()]
                            }
                        }))
                    }));
                    return function(t, r, n, s, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                Z = function(e) {
                    return e && ["casual", "business casual", "business professional", "dressy"].includes(e) ? e : "dressy"
                },
                C = function() {
                    var e = (0, n.Z)((function(e, t, r, n, s, a) {
                        return (0, l.__generator)(this, (function(l) {
                            return [2, i.Z.post("/api/coCreatedOutfits", {
                                userId: e,
                                context: t,
                                outfit: r,
                                outfitLabel: n,
                                outfitDescription: s,
                                seedItem: a
                            }).then((function(e) {
                                if (200 === e.status) return e.data;
                                throw "Could not create co created outfit in supabase"
                            })).catch((function(e) {
                                throw e
                            }))]
                        }))
                    }));
                    return function(t, r, n, s, a, l) {
                        return e.apply(this, arguments)
                    }
                }(),
                I = function() {
                    var e = (0, n.Z)((function(e, t, r) {
                        var n, s, a, i;
                        return (0, l.__generator)(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    n = [], l.label = 1;
                                case 1:
                                    if (l.trys.push([1, 3, , 4]), s = P(t), a = null, !s) throw "Could not find a reasonable seed item";
                                    return "tops" === s.category && (a = t.find((function(e) {
                                        var t;
                                        return null === (t = e.category) || void 0 === t ? void 0 : t.toLowerCase().includes("bottoms")
                                    }))), n.push(S(e, s.imageSrc, s.caption ? s.caption : s.name, s.category, r, 1)), a && n.push(S(e, a.imageSrc, a.caption ? a.caption : a.name, a.category, r, 1)), [4, Promise.all(n)];
                                case 2:
                                    return [2, l.sent()];
                                case 3:
                                    throw i = l.sent(), console.error(i), i;
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                P = function(e) {
                    if (1 === e.length) return e[0];
                    var t, r = !0,
                        n = !1,
                        s = void 0;
                    try {
                        for (var l, i = function() {
                                var r = l.value;
                                if (t = e.find((function(e) {
                                        var t;
                                        return null === (t = e.category) || void 0 === t ? void 0 : t.toLowerCase().includes(r.toLowerCase())
                                    }))) return {
                                    v: t
                                }
                            }, o = ["dresses", "tops"][Symbol.iterator](); !(r = (l = o.next()).done); r = !0) {
                            var c = i();
                            if ("object" === (0, a.Z)(c)) return c.v
                        }
                    } catch (u) {
                        n = !0, s = u
                    } finally {
                        try {
                            r || null == o.return || o.return()
                        } finally {
                            if (n) throw s
                        }
                    }
                    return null
                },
                D = function(e, t, r, n) {
                    var a = u.lookup((null === e || void 0 === e ? void 0 : e.zip_code) || "10003"),
                        l = c().tz(c()(), a || "America/New_York").format("YYYY-MM-DD"),
                        i = c().tz(c()(), a || "America/New_York").subtract(1, "days").format("YYYY-MM-DD"),
                        o = (0, s.Z)(new Set(t.map((function(e) {
                            return e.date
                        })))),
                        d = (0, s.Z)(new Set(r.map((function(e) {
                            return e.date
                        })))),
                        f = (0, s.Z)(new Set(n.map((function(e) {
                            return c()(e.createdAt).format("YYYY-MM-DD")
                        })))),
                        m = o.includes(l) || d.includes(l) || f.includes(l);
                    return O(m ? l : i, (0, s.Z)(new Set((0, s.Z)(o).concat((0, s.Z)(d), (0, s.Z)(f)))), 0)
                },
                O = function(e, t, r) {
                    return t.includes(e) ? O(c()(e).subtract(1, "days").format("YYYY-MM-DD"), t, r + 1) : r
                }
        },
        955: function(e, t, r) {
            r.d(t, {
                D: function() {
                    return y
                }
            });
            var n = r(14924),
                s = r(26042),
                a = r(69396),
                l = r(29815),
                i = r(85893),
                o = r(30381),
                c = r.n(o),
                u = r(67294),
                d = r(47516),
                f = r(99304),
                m = r(2261),
                p = r(94310),
                h = r(23601),
                x = r(46850),
                g = r(14176),
                b = r(53215),
                w = r(51667);
            t.Z = function(e) {
                var t = e.userData,
                    r = e.recommendedItemHasBeenUnwrapped,
                    l = (0, h.Z)().width,
                    o = (0, u.useState)(""),
                    y = o[0],
                    v = o[1],
                    j = (0, u.useState)({}),
                    _ = j[0],
                    N = j[1],
                    k = (0, u.useState)(null),
                    S = k[0],
                    Z = k[1],
                    C = (0, u.useState)(""),
                    I = C[0],
                    P = C[1],
                    D = (0, u.useState)(!1),
                    O = D[0],
                    A = D[1],
                    E = (0, u.useState)(!1),
                    z = E[0],
                    T = E[1],
                    q = (0, u.useState)(null),
                    L = q[0],
                    M = q[1],
                    Y = (0, u.useState)(0),
                    R = Y[0],
                    U = Y[1],
                    F = (0, u.useState)(r),
                    H = F[0],
                    W = F[1];
                (0, u.useEffect)((function() {
                    (0, p.CI)(N, v, A)
                }), []), (0, u.useEffect)((function() {
                    var e;
                    Object.keys(_).length > 0 && !I && P(null !== (e = Object.entries(_)[0][1][0].caption) && void 0 !== e ? e : "")
                }), [_]), (0, u.useEffect)((function() {
                    y && !r && H && (0, b.fr)(y)
                }), [y]);
                var G = function(e) {
                        Z(e), T(!0)
                    },
                    B = function(e) {
                        N((function(t) {
                            return e.caption ? (0, a.Z)((0, s.Z)({}, t), (0, n.Z)({}, e.caption, t[e.caption].filter((function(t) {
                                return t.imageSrc !== e.imageSrc
                            })))) : t
                        })), (0, b.DG)(e, y)
                    },
                    J = function() {
                        return (0, i.jsx)("button", {
                            className: "absolute left-1 top-[calc((100%)/2)] z-20 flex items-center justify-center rounded-full border border-tts-black bg-tts-white",
                            onClick: function() {
                                L && L.slidePrev()
                            },
                            children: (0, i.jsx)(d.gbs, {
                                size: "1.5rem"
                            })
                        })
                    },
                    V = function() {
                        return (0, i.jsx)("button", {
                            className: "absolute right-1 top-[calc((100%)/2)] z-20 flex items-center justify-center rounded-full border border-tts-black bg-tts-white",
                            onClick: function() {
                                L && L.slideNext()
                            },
                            children: (0, i.jsx)(d.lU2, {
                                size: "1.5rem"
                            })
                        })
                    },
                    K = I ? _[I] : [],
                    Q = c()(new Date).format("dddd"),
                    X = t.first_name ? t.first_name.charAt(0).toUpperCase() + t.first_name.slice(1) : "";
                return (0, i.jsxs)("section", {
                    className: "relative flex w-full flex-col gap-4 border-b-[1px] pb-8 pt-8 md:pb-4 md:pt-16",
                    children: [(0, i.jsxs)("div", {
                        className: "flex w-full flex-col",
                        children: [(0, i.jsxs)("h1", {
                            className: "text-2xl font-semibold",
                            children: [Q, "'s finds", X ? " for ".concat(X) : ""]
                        }), "90210" === t.zip_code && (0, i.jsx)("p", {
                            className: "text-xs font-light text-purple-500",
                            children: "Note: We are adding brands and retailers in your country as quickly as we can! \ud83c\udf0e"
                        })]
                    }), !H && (0, i.jsx)("button", {
                        onClick: function() {
                            W(!0), y && (0, b.fr)(y)
                        },
                        className: "absolute left-1/2 top-40 z-10 -translate-x-1/2 border border-tts-black bg-tts-black px-3 py-2 text-base font-semibold uppercase text-white hover:opacity-90",
                        children: "Unwrap now"
                    }), (0, i.jsxs)("div", {
                        className: (0, w.Z)("flex w-full flex-col gap-4 transition-all duration-[2000ms]", !H && "pointer-events-none blur-md"),
                        children: [(0, i.jsx)("span", {
                            className: (0, w.Z)("mt-6 w-full gap-3 ", O ? "grid grid-cols-6" : "flex overflow-x-auto"),
                            children: O ? Array.from(Array(6).keys()).map((function(e) {
                                return (0, i.jsx)("div", {
                                    className: "aspect-square w-full animate-pulse bg-gray-200"
                                }, e)
                            })) : Object.keys(_).map((function(e, t) {
                                return (0, i.jsxs)("button", {
                                    className: (0, w.Z)("shrink-0 whitespace-nowrap border border-tts-black p-3 text-sm font-semibold uppercase text-tts-black sm:hover:cursor-pointer sm:hover:bg-gray-200", I === e && "bg-tts-black text-tts-white sm:hover:bg-tts-black"),
                                    onClick: function() {
                                        P(e), null === L || void 0 === L || L.slideTo(0)
                                    },
                                    children: ["#", t + 1 < 10 && "0", t + 1]
                                }, t)
                            }))
                        }), (0, i.jsxs)("center", {
                            className: "flex w-full flex-col gap-6 border border-tts-black p-6",
                            children: [(0, i.jsxs)("div", {
                                className: "flex w-full flex-col gap-1",
                                children: [(0, i.jsx)("h2", {
                                    className: "text-left text-base font-medium",
                                    children: "Description & aesthetic"
                                }), O ? (0, i.jsx)("div", {
                                    className: "h-5 w-full animate-pulse bg-gray-200"
                                }) : (0, i.jsx)("p", {
                                    className: "w-full text-left text-sm font-light",
                                    children: (null === I || void 0 === I ? void 0 : I.charAt(0).toUpperCase()) + (null === I || void 0 === I ? void 0 : I.slice(1))
                                }), !O && 0 === I.length && (0, i.jsx)("p", {
                                    className: "w-full text-left text-sm font-light text-purple-500",
                                    children: "Oh no! Your shopping suggestions did not load. Please chat us so we can help you!"
                                })]
                            }), (0, i.jsx)("div", {
                                className: "my-4 w-full border-b-[1px] border-tts-black"
                            }), (0, i.jsxs)("div", {
                                className: "relative flex w-full flex-col",
                                children: [(0, i.jsxs)("h2", {
                                    className: "gap-2 text-left text-base font-medium",
                                    children: ["Curated collection just for", " ", X || "you"]
                                }), (0, i.jsx)("p", {
                                    className: "w-full text-left text-sm font-light",
                                    children: "Help Alta understand your style by clicking \u2764\ufe0f or \ud83d\udc4e. Click on the piece itself to see how it fits into your closet."
                                }), (0, i.jsx)("p", {
                                    className: "w-full text-left text-sm font-light text-purple-500",
                                    children: "NOTE: If you are seeing pieces you previously disliked or have given feedback on already, let us know!"
                                }), l >= 640 && L && !O && K && K.length > 3 && (0, i.jsxs)(i.Fragment, {
                                    children: [0 !== R && (0, i.jsx)(J, {}), R < K.length - 3 && (0, i.jsx)(V, {})]
                                }), O ? (0, i.jsx)("div", {
                                    className: "mt-8 flex w-full gap-5 overflow-x-auto md:gap-6",
                                    children: Array.from(Array(l < 640 ? 2 : 3).keys()).map((function(e) {
                                        return (0, i.jsxs)("div", {
                                            className: "flex w-full flex-col gap-2",
                                            children: [(0, i.jsx)("div", {
                                                className: "aspect-square w-full animate-pulse bg-gray-200"
                                            }), (0, i.jsx)("div", {
                                                className: "h-5 w-full animate-pulse bg-gray-200"
                                            }), (0, i.jsx)("div", {
                                                className: "h-4 w-full animate-pulse bg-gray-100"
                                            })]
                                        }, e)
                                    }))
                                }) : (0, i.jsx)("div", {
                                    className: "mt-8 w-full",
                                    children: (0, i.jsx)(m.tq, {
                                        modules: [f.tl, f.Gk],
                                        pagination: l < 640 && (!(K.length > 6) || {
                                            dynamicBullets: !0
                                        }),
                                        style: {
                                            "--swiper-pagination-bottom": "0px",
                                            "--swiper-pagination-color": "black",
                                            "--swiper-pagination-bullet-inactive-color": "#999999",
                                            "--swiper-pagination-bullet-inactive-opacity": "1",
                                            "--swiper-pagination-bullet-size": "10px",
                                            "--swiper-pagination-bullet-horizontal-gap": "3px"
                                        },
                                        slidesPerView: l < 640 ? 1.4 : 3,
                                        spaceBetween: l < 640 ? 20 : 60,
                                        onSwiper: function(e) {
                                            M(e)
                                        },
                                        onActiveIndexChange: function(e) {
                                            return U(e.activeIndex)
                                        },
                                        mousewheel: {
                                            forceToAxis: !0
                                        },
                                        children: K.map((function(e, r) {
                                            return (0, i.jsx)(m.o5, {
                                                children: (0, i.jsx)("div", {
                                                    className: "w-full pb-8 md:pb-0",
                                                    children: (0, i.jsx)(x.Z, {
                                                        userData: t,
                                                        item: e,
                                                        onClick: G,
                                                        onDislike: B,
                                                        page: "shopping",
                                                        context: "daily_curated_items"
                                                    }, r)
                                                })
                                            }, r)
                                        }))
                                    })
                                })]
                            })]
                        })]
                    }), S && (0, i.jsx)(g.Z, {
                        item: S,
                        isOpen: z,
                        setIsOpen: T,
                        userData: t,
                        page: "shopping",
                        context: "daily_curated_items"
                    })]
                })
            };
            var y = function(e) {
                var t = (0, l.Z)(new Set(e.map((function(e) {
                    return e.caption
                }))));
                return Object.fromEntries(t.map((function(t) {
                    return [t, e.filter((function(e) {
                        return e.caption === t
                    }))]
                })))
            }
        },
        27042: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return Z
                }
            });
            var n = r(29815),
                s = r(85893),
                a = r(34386),
                l = r(6154),
                i = r(67294),
                o = r(66409),
                c = r(47516),
                u = r(94310),
                d = r(23601),
                f = r(26042),
                m = r(69396),
                p = r(85071),
                h = r(8756),
                x = r(51667),
                g = function(e) {
                    var t = e.isOpen,
                        r = e.setIsOpen,
                        a = e.recommendedItems,
                        l = e.filters,
                        o = e.setFilters,
                        c = e.availableMaxPrice,
                        u = (0, i.useState)(l),
                        d = u[0],
                        g = u[1],
                        w = (0, i.useState)(!1),
                        v = w[0],
                        j = w[1],
                        _ = (0, i.useState)(!1),
                        N = _[0],
                        k = _[1];
                    (0, i.useEffect)((function() {
                        t && g(l)
                    }), [t, l]);
                    var S, Z, C = (0, n.Z)(new Set(a.map((function(e) {
                            return e.category
                        })).filter((function(e) {
                            return !!e
                        })))),
                        I = (0, n.Z)(new Set(a.map((function(e) {
                            return e.brand
                        })).filter((function(e) {
                            return !!e
                        })).map((function(e) {
                            return b(e)
                        })))).sort(),
                        P = (0, n.Z)(new Set(a.map((function(e) {
                            return e.colors ? e.colors[0] : null
                        })).filter((function(e) {
                            return !!e
                        })))),
                        D = y(d, a).length,
                        O = a.some((function(e) {
                            return e.salePrice && e.salePrice !== e.retailPrice
                        }));
                    return (0, s.jsx)(h.Z, {
                        open: t,
                        setOpen: r,
                        children: (0, s.jsxs)("section", {
                            className: "flex w-full flex-col justify-center gap-4",
                            children: [(0, s.jsx)("h1", {
                                className: "w-full border-b-[1px] pb-3 text-sm font-semibold uppercase",
                                children: "Refine"
                            }), (0, s.jsxs)("center", {
                                className: "flex max-h-[70vh] w-full flex-col gap-3 overflow-y-auto pt-4",
                                children: [C.length > 0 && (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsxs)("span", {
                                        className: "flex w-full flex-col items-center gap-2",
                                        children: [(0, s.jsx)("p", {
                                            className: "w-full text-left text-base font-medium",
                                            children: "Category"
                                        }), (0, s.jsx)("div", {
                                            className: "flex max-h-[30vh] w-full flex-col overflow-y-auto",
                                            children: C.map((function(e, t) {
                                                var r;
                                                return (0, s.jsxs)("button", {
                                                    className: "flex items-center gap-2 text-sm font-normal",
                                                    children: [(0, s.jsx)(p.Z, {
                                                        checked: !!(null === (r = d.categories) || void 0 === r ? void 0 : r.includes(e)),
                                                        size: "small",
                                                        color: "default",
                                                        onChange: function() {
                                                            return function(e) {
                                                                if (d.categories && d.categories.includes(e)) {
                                                                    var t = d.categories.filter((function(t) {
                                                                        return t !== e
                                                                    }));
                                                                    g((function(e) {
                                                                        return (0, m.Z)((0, f.Z)({}, e), {
                                                                            categories: t.length > 0 ? t : null
                                                                        })
                                                                    }))
                                                                } else g((function(t) {
                                                                    return (0, m.Z)((0, f.Z)({}, t), {
                                                                        categories: t.categories ? (0, n.Z)(t.categories).concat([e]) : [e]
                                                                    })
                                                                }))
                                                            }(e)
                                                        }
                                                    }), (0, s.jsx)("label", {
                                                        children: e.charAt(0).toUpperCase() + e.slice(1)
                                                    })]
                                                }, t)
                                            }))
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "my-3 w-full border-b-[1px]"
                                    })]
                                }), (0, s.jsxs)("span", {
                                    className: "flex w-full flex-col gap-1",
                                    children: [(0, s.jsx)("p", {
                                        className: "w-full text-left text-base font-medium",
                                        children: "Price"
                                    }), (0, s.jsxs)("span", {
                                        className: "flex w-full items-center justify-between",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex w-full flex-col",
                                            children: [(0, s.jsx)("label", {
                                                className: "mb-1 mt-2 w-full text-left text-sm font-normal",
                                                children: "Minimum"
                                            }), (0, s.jsxs)("span", {
                                                onFocus: function() {
                                                    return j(!0)
                                                },
                                                onBlur: function() {
                                                    var e = parseInt(d.minPrice || "0");
                                                    g((function(t) {
                                                        return (0, m.Z)((0, f.Z)({}, t), {
                                                            minPrice: e.toString()
                                                        })
                                                    })), j(!1)
                                                },
                                                className: (0, x.Z)("flex w-full items-center justify-center gap-2 border border-gray-300 bg-white p-2 text-sm text-tts-black", v && "border-tts-black"),
                                                children: [(0, s.jsx)("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: "$"
                                                }), (0, s.jsx)("input", {
                                                    type: "number",
                                                    value: null !== (S = d.minPrice) && void 0 !== S ? S : "0",
                                                    onChange: function(e) {
                                                        return g((function(t) {
                                                            return (0, m.Z)((0, f.Z)({}, t), {
                                                                minPrice: e.target.value
                                                            })
                                                        }))
                                                    },
                                                    className: "flex w-full items-center justify-center border-0 bg-white p-0 text-sm text-tts-black focus:outline-none focus:ring-0"
                                                })]
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: "mx-4 h-[1px] w-4 border-b-[1px] border-tts-black pt-8"
                                        }), (0, s.jsxs)("div", {
                                            className: "flex w-full flex-col",
                                            children: [(0, s.jsx)("label", {
                                                className: "mb-1 mt-2 w-full text-left text-sm font-normal",
                                                children: "Maximum"
                                            }), (0, s.jsxs)("span", {
                                                onFocus: function() {
                                                    return k(!0)
                                                },
                                                onBlur: function() {
                                                    var e = parseInt(d.maxPrice || c.toString());
                                                    g((function(t) {
                                                        return (0, m.Z)((0, f.Z)({}, t), {
                                                            maxPrice: e.toString()
                                                        })
                                                    })), k(!1)
                                                },
                                                className: (0, x.Z)("flex w-full items-center justify-center gap-2 border border-gray-300 bg-white p-2 text-sm text-tts-black", N && "border-tts-black"),
                                                children: [(0, s.jsx)("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: "$"
                                                }), (0, s.jsx)("input", {
                                                    type: "number",
                                                    value: null !== (Z = d.maxPrice) && void 0 !== Z ? Z : c,
                                                    onChange: function(e) {
                                                        return g((function(t) {
                                                            return (0, m.Z)((0, f.Z)({}, t), {
                                                                maxPrice: e.target.value
                                                            })
                                                        }))
                                                    },
                                                    className: "flex w-full items-center justify-center border-0 bg-white p-0 text-sm text-tts-black focus:outline-none focus:ring-0"
                                                })]
                                            })]
                                        })]
                                    }), O && (0, s.jsxs)("button", {
                                        className: "flex items-center text-sm font-normal",
                                        children: [(0, s.jsx)(p.Z, {
                                            checked: d.shouldDisplaySaleItemsOnly,
                                            size: "small",
                                            color: "default",
                                            onChange: function() {
                                                return g((function(e) {
                                                    return (0, m.Z)((0, f.Z)({}, e), {
                                                        shouldDisplaySaleItemsOnly: !e.shouldDisplaySaleItemsOnly
                                                    })
                                                }))
                                            }
                                        }), (0, s.jsx)("label", {
                                            children: "Sale items only"
                                        })]
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "my-3 w-full border-b-[1px]"
                                }), (0, s.jsxs)("span", {
                                    className: "flex w-full flex-col items-center gap-2",
                                    children: [(0, s.jsx)("p", {
                                        className: "w-full text-left text-base font-medium",
                                        children: "Brands"
                                    }), (0, s.jsx)("div", {
                                        className: "flex max-h-[30vh] w-full flex-col overflow-y-auto",
                                        children: I.map((function(e, t) {
                                            var r;
                                            return (0, s.jsxs)("button", {
                                                className: "flex items-center gap-2 text-sm font-normal",
                                                children: [(0, s.jsx)(p.Z, {
                                                    checked: !!(null === (r = d.brands) || void 0 === r ? void 0 : r.includes(e)),
                                                    size: "small",
                                                    color: "default",
                                                    onChange: function() {
                                                        return function(e) {
                                                            if (d.brands && d.brands.includes(e)) {
                                                                var t = d.brands.filter((function(t) {
                                                                    return t !== e
                                                                }));
                                                                g((function(e) {
                                                                    return (0, m.Z)((0, f.Z)({}, e), {
                                                                        brands: t.length > 0 ? t : null
                                                                    })
                                                                }))
                                                            } else g((function(t) {
                                                                return (0, m.Z)((0, f.Z)({}, t), {
                                                                    brands: t.brands ? (0, n.Z)(t.brands).concat([e]) : [e]
                                                                })
                                                            }))
                                                        }(e)
                                                    }
                                                }), (0, s.jsx)("label", {
                                                    children: e
                                                })]
                                            }, t)
                                        }))
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "my-3 w-full border-b-[1px]"
                                }), P.length > 0 && (0, s.jsxs)("span", {
                                    className: "flex w-full flex-col items-center gap-2",
                                    children: [(0, s.jsx)("p", {
                                        className: "w-full text-left text-base font-medium",
                                        children: "Color"
                                    }), (0, s.jsx)("div", {
                                        className: "flex max-h-[30vh] w-full flex-col overflow-y-auto",
                                        children: P.map((function(e, t) {
                                            var r;
                                            return (0, s.jsxs)("button", {
                                                className: "flex items-center gap-2 text-sm font-normal",
                                                children: [(0, s.jsx)(p.Z, {
                                                    checked: !!(null === (r = d.colors) || void 0 === r ? void 0 : r.includes(e)),
                                                    size: "small",
                                                    color: "default",
                                                    onChange: function() {
                                                        return function(e) {
                                                            if (d.colors && d.colors.includes(e)) {
                                                                var t = d.colors.filter((function(t) {
                                                                    return t !== e
                                                                }));
                                                                g((function(e) {
                                                                    return (0, m.Z)((0, f.Z)({}, e), {
                                                                        colors: t.length > 0 ? t : null
                                                                    })
                                                                }))
                                                            } else g((function(t) {
                                                                return (0, m.Z)((0, f.Z)({}, t), {
                                                                    colors: t.colors ? (0, n.Z)(t.colors).concat([e]) : [e]
                                                                })
                                                            }))
                                                        }(e)
                                                    }
                                                }), (0, s.jsx)("label", {
                                                    children: e.charAt(0).toUpperCase() + e.slice(1)
                                                })]
                                            }, t)
                                        }))
                                    })]
                                })]
                            }), (0, s.jsxs)("span", {
                                className: "flex w-full justify-between border-t-[1px] pt-6",
                                children: [(0, s.jsx)("button", {
                                    className: "border border-tts-black p-2 text-sm font-semibold uppercase text-tts-black hover:bg-gray-100",
                                    onClick: function() {
                                        g({
                                            categories: null,
                                            colors: null,
                                            brands: null,
                                            minPrice: null,
                                            maxPrice: null,
                                            shouldDisplaySaleItemsOnly: !1
                                        })
                                    },
                                    children: "Clear all"
                                }), (0, s.jsx)("button", {
                                    className: "bg-tts-black p-2 text-sm font-semibold uppercase text-tts-white hover:opacity-90",
                                    onClick: function() {
                                        o(d), r(!1)
                                    },
                                    children: D > 0 ? "View ".concat(D, " items") : "No results"
                                })]
                            })]
                        })
                    })
                },
                b = function(e) {
                    return e.split(" ").map((function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
                    })).join(" ")
                },
                w = function(e) {
                    var t;
                    return (t = Math).max.apply(t, (0, n.Z)(e.map((function(e) {
                        var t, r, n = null !== (r = null !== (t = e.salePrice) && void 0 !== t ? t : e.retailPrice) && void 0 !== r ? r : "0";
                        return parseInt(n)
                    }))))
                },
                y = function(e, t) {
                    var r = w(t);
                    return t.filter((function(t) {
                        var n, s, a, l, i = null === e.categories || e.categories.includes(t.category),
                            o = null !== (s = null !== (n = t.salePrice) && void 0 !== n ? n : t.retailPrice) && void 0 !== s ? s : "0",
                            c = parseInt(o),
                            u = parseInt(null !== (a = e.minPrice) && void 0 !== a ? a : "0"),
                            d = parseInt(null !== (l = e.maxPrice) && void 0 !== l ? l : r.toString()),
                            f = c >= u && c <= d,
                            m = null === e.brands || e.brands.includes(b(t.brand)),
                            p = null === e.colors || e.colors.includes(t.colors ? t.colors[0] : ""),
                            h = !e.shouldDisplaySaleItemsOnly || t.salePrice && t.salePrice !== t.retailPrice;
                        return i && f && m && p && h
                    }))
                },
                v = r(46850),
                j = r(14176),
                _ = r(27037),
                N = function(e) {
                    var t = e.userData,
                        r = e.results,
                        n = e.isLoading,
                        a = e.onDislikeItem,
                        l = e.context,
                        o = (0, i.useState)(null),
                        c = o[0],
                        u = o[1],
                        d = (0, i.useState)(!1),
                        f = d[0],
                        m = d[1],
                        p = function(e) {
                            u(e), m(!0), t && (0, _.L)("shopping.search.".concat(l, ".results_clicked"), t.id, {
                                item_url: e.imageSrc
                            })
                        };
                    return (0, s.jsxs)("div", {
                        className: "mt-4 grid w-full grid-cols-2 gap-4 md:grid-cols-4",
                        children: [n ? Array.from(Array(4).keys()).map((function(e) {
                            return (0, s.jsx)("div", {
                                className: "aspect-square w-full animate-pulse bg-gray-200"
                            }, e)
                        })) : r.map((function(e, r) {
                            return (0, s.jsx)(v.Z, {
                                userData: t,
                                item: e,
                                onClick: p,
                                onDislike: a,
                                page: "shopping",
                                context: "search.".concat(l)
                            }, r)
                        })), c && (0, s.jsx)(j.Z, {
                            item: c,
                            isOpen: f,
                            setIsOpen: m,
                            userData: t,
                            page: "shopping",
                            context: "search.".concat(l)
                        })]
                    })
                },
                k = r(53215),
                S = r(86805),
                Z = function(e) {
                    var t = e.userData,
                        r = e.isOpen,
                        f = e.setIsOpen,
                        m = e.query,
                        p = e.setQuery,
                        h = (0, d.Z)().width,
                        b = (0, i.useState)([]),
                        v = b[0],
                        j = b[1],
                        Z = (0, i.useState)(""),
                        C = Z[0],
                        I = Z[1],
                        P = (0, i.useState)([]),
                        D = P[0],
                        O = P[1],
                        A = (0, i.useState)(""),
                        E = A[0],
                        z = A[1],
                        T = (0, i.useState)([]),
                        q = T[0],
                        L = T[1],
                        M = (0, i.useState)({
                            categories: null,
                            colors: null,
                            minPrice: null,
                            maxPrice: null,
                            brands: null,
                            shouldDisplaySaleItemsOnly: !1
                        }),
                        Y = M[0],
                        R = M[1],
                        U = (0, i.useState)(0),
                        F = U[0],
                        H = U[1],
                        W = (0, i.useState)(!1),
                        G = W[0],
                        B = W[1],
                        J = (0, i.useState)(!1),
                        V = J[0],
                        K = J[1],
                        Q = (0, i.useState)(!1),
                        X = Q[0],
                        $ = Q[1],
                        ee = (0, i.useState)(!1),
                        te = ee[0],
                        re = ee[1];
                    (0, i.useEffect)((function() {
                        r ? ae() : R({
                            categories: null,
                            colors: null,
                            minPrice: null,
                            maxPrice: null,
                            brands: null,
                            shouldDisplaySaleItemsOnly: !1
                        })
                    }), [r]), (0, i.useEffect)((function() {
                        (0, n.Z)(v).concat((0, n.Z)(D)).length > 0 && H(w((0, n.Z)(v).concat((0, n.Z)(D))))
                    }), [v, D]);
                    var ne, se, ae = function() {
                            t && (0, _.L)("shopping.unified_search_bar.searched", t.id, {
                                query: m
                            });
                            try {
                                l.Z.post("/api/feedback", {
                                    user_id: null === t || void 0 === t ? void 0 : t.id,
                                    product_name: " ",
                                    raw_query: m,
                                    event: "user searched for this item"
                                })
                            } catch (e) {
                                console.error(e)
                            }
                            le(), ie(), oe()
                        },
                        le = function() {
                            B(!0), (0, k.Fv)(m, !1, j, I, B)
                        },
                        ie = function() {
                            K(!0), (0, k.Fv)(m, !0, O, z, K)
                        },
                        oe = function() {
                            $(!0), (0, u.ks)(m, L, $)
                        },
                        ce = Object.values(Y).some((function(e) {
                            return "boolean" === typeof e ? !0 === e : null !== e
                        })),
                        ue = y(Y, v),
                        de = y(Y, D),
                        fe = t.first_name ? t.first_name.charAt(0).toUpperCase() + t.first_name.slice(1) : "";
                    return (0, s.jsx)(S.Z, {
                        open: r,
                        setOpen: f,
                        children: (0, s.jsxs)(o.ZP, {
                            className: "mx-auto flex w-full max-w-7xl flex-col overflow-y-auto sm:px-6 lg:px-8",
                            children: [(0, s.jsxs)("aside", {
                                className: "relative flex w-full items-center gap-2 px-4 py-6 sm:px-6 md:gap-6",
                                children: [(0, s.jsx)("button", {
                                    className: "z-10 flex items-center justify-center",
                                    onClick: function() {
                                        return f(!1)
                                    },
                                    children: (0, s.jsx)(c.gbs, {
                                        size: "1.5rem"
                                    })
                                }), (0, s.jsx)("span", {
                                    className: "flex grow flex-col",
                                    children: (0, s.jsxs)("span", {
                                        className: "flex w-full items-center border bg-tts-white bg-tts-white p-2 focus:border-tts-black sm:hover:bg-gray-200 focus:sm:hover:bg-tts-white",
                                        children: [(0, s.jsx)("div", {
                                            className: "shrink-0",
                                            children: (0, s.jsx)(c.Goc, {
                                                size: "1rem"
                                            })
                                        }), (0, s.jsx)("input", {
                                            type: "text",
                                            className: "w-full border border-transparent bg-inherit text-sm font-light focus:border-transparent focus:outline-none focus:ring-0",
                                            placeholder: "Search for anything",
                                            value: m,
                                            onChange: function(e) {
                                                return p(e.target.value)
                                            },
                                            onKeyDown: function(e) {
                                                "Enter" === e.key && (e.preventDefault(), ae())
                                            }
                                        }), m && (0, s.jsx)(a.Z, {
                                            title: "CLEAR",
                                            children: (0, s.jsx)("button", {
                                                className: "shrink-0",
                                                onClick: function() {
                                                    return p("")
                                                },
                                                children: (0, s.jsx)(c.czh, {
                                                    size: "1.25rem",
                                                    fill: "gray"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, s.jsxs)("button", {
                                    className: (0, x.Z)("relative flex h-full w-14 items-center justify-center gap-1 border text-sm font-semibold uppercase text-tts-black hover:bg-gray-100 sm:w-24", ce && "border-tts-black"),
                                    onClick: function() {
                                        return re(!0)
                                    },
                                    disabled: G || V,
                                    children: [h < 640 && (G || V) ? (0, s.jsx)("div", {
                                        className: "aspect-square w-6 animate-pulse bg-gray-200"
                                    }) : (0, s.jsx)(c.lOx, {
                                        size: h < 640 ? "1.25rem" : "1rem"
                                    }), h >= 640 && (G || V ? (0, s.jsx)("div", {
                                        className: "flex h-4 w-12 animate-pulse bg-gray-200"
                                    }) : "Refine"), ce && (0, s.jsx)("div", {
                                        className: "absolute -right-2 -top-2 flex aspect-square w-5 items-center justify-center rounded-full border border-tts-white bg-tts-black text-xs font-light text-tts-white",
                                        children: Object.values(Y).filter((function(e) {
                                            return "boolean" === typeof e ? !0 === e : null !== e
                                        })).length
                                    })]
                                })]
                            }), (0, s.jsxs)("section", {
                                className: "flex grow flex-col bg-tts-white px-4",
                                children: [t && (0, s.jsxs)("div", {
                                    className: "flex w-full flex-col py-6",
                                    children: [(0, s.jsxs)("h1", {
                                        className: "text-base font-semibold",
                                        children: [G ? "Curating" : "Curated", " ", "shopping results", fe ? " for ".concat(fe) : "", G && "..."]
                                    }), (0, s.jsx)(N, {
                                        userData: t,
                                        results: ue,
                                        isLoading: G,
                                        onDislikeItem: function(e) {
                                            j((function(t) {
                                                return t.filter((function(t) {
                                                    return t.imageSrc !== e.imageSrc
                                                }))
                                            })), (0, k.jr)(e, C)
                                        },
                                        context: "query_string_biased"
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "my-4 w-full border-b-[1px]"
                                }), t && (0, s.jsxs)("div", {
                                    className: "flex w-full flex-col py-6",
                                    children: [(0, s.jsxs)("h1", {
                                        className: "text-base font-semibold",
                                        children: [V ? "Selecting" : "Selected", " ", "from brands you love", V && "..."]
                                    }), (0, s.jsx)(N, {
                                        userData: t,
                                        results: de,
                                        isLoading: V,
                                        onDislikeItem: function(e) {
                                            O((function(t) {
                                                return t.filter((function(t) {
                                                    return t.imageSrc !== e.imageSrc
                                                }))
                                            })), (0, k.jr)(e, E)
                                        },
                                        context: "favorite_brands_biased"
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "my-4 w-full border-b-[1px]"
                                }), (0, s.jsxs)("div", {
                                    className: "flex w-full flex-col py-6",
                                    children: [(0, s.jsx)("h1", {
                                        className: "text-base font-semibold",
                                        children: "Relevant items you already own"
                                    }), (0, s.jsx)("div", {
                                        className: "mt-4 grid w-full grid-cols-2 gap-4 md:grid-cols-4",
                                        children: X ? Array.from(Array(4).keys()).map((function(e) {
                                            return (0, s.jsx)("div", {
                                                className: "aspect-square w-full animate-pulse bg-gray-200"
                                            }, e)
                                        })) : q.map((function(e, t) {
                                            return (0, s.jsxs)("div", {
                                                className: "relative flex w-full flex-col gap-1 border border-transparent p-2 sm:hover:border sm:hover:border-tts-black",
                                                children: [(0, s.jsx)("img", {
                                                    src: null !== (ne = e.backgroundRemovedImageUrl) && void 0 !== ne ? ne : e.imageSrc,
                                                    alt: e.imageAlt,
                                                    className: "aspect-square w-full object-contain"
                                                }), (0, s.jsx)("p", {
                                                    className: "text-xs font-semibold uppercase",
                                                    children: null !== (se = e.brand) && void 0 !== se ? se : e.category
                                                }), (0, s.jsx)("p", {
                                                    className: "text-xs font-light",
                                                    children: e.name
                                                })]
                                            }, t)
                                        }))
                                    })]
                                })]
                            }), (!G || !V) && (0, s.jsx)(g, {
                                isOpen: te,
                                setIsOpen: re,
                                recommendedItems: (0, n.Z)(v).concat((0, n.Z)(D)),
                                filters: Y,
                                setFilters: R,
                                availableMaxPrice: F
                            })]
                        })
                    })
                }
        },
        14176: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return S
                }
            });
            var n = r(47568),
                s = r(29815),
                a = r(70655),
                l = r(85893),
                i = r(6154),
                o = r(67294),
                c = r(66409),
                u = r(47516),
                d = r(532),
                f = r(8002),
                m = r(97517),
                p = r(8323),
                h = r(23601),
                x = r(46850),
                g = r(27042),
                b = r(53215),
                w = r(86805),
                y = r(27037),
                v = r(51667),
                j = r(38824),
                _ = (r(58742), r(52693)),
                N = function(e) {
                    var t = e.userData,
                        r = e.item,
                        s = e.isOpen,
                        S = e.setIsOpen,
                        Z = e.inheritedSimilarProducts,
                        C = e.inheritedSimilarProductsUsingFavoriteBrands,
                        I = e.page,
                        P = e.context;
                    t && (0, y.L)("".concat(I, ".").concat(P, ".shopping_product_details_modal.opened"), t.id);
                    var D, O, A = (0, f.w)().showSnackbar,
                        E = (0, h.Z)().width,
                        z = (0, p.h)(),
                        T = z.globalWishlistItemsIDs,
                        q = z.addToWishlist,
                        L = z.removeFromWishlist,
                        M = (0, o.useState)(null !== Z && void 0 !== Z ? Z : []),
                        Y = M[0],
                        R = M[1],
                        U = (0, o.useState)(""),
                        F = U[0],
                        H = U[1],
                        W = (0, o.useState)(null !== C && void 0 !== C ? C : []),
                        G = W[0],
                        B = W[1],
                        J = (0, o.useState)(""),
                        V = J[0],
                        K = J[1],
                        Q = (0, o.useState)(null !== (D = r.retailPrice) && void 0 !== D ? D : null),
                        X = Q[0],
                        $ = Q[1],
                        ee = (0, o.useState)(null),
                        te = ee[0],
                        re = ee[1],
                        ne = (0, o.useState)(!1),
                        se = ne[0],
                        ae = ne[1],
                        le = (0, o.useState)(!1),
                        ie = le[0],
                        oe = le[1],
                        ce = (0, o.useState)(!1),
                        ue = ce[0],
                        de = ce[1],
                        fe = (0, o.useState)(T.includes(r.productId)),
                        me = fe[0],
                        pe = fe[1],
                        he = (0, o.useState)(!1),
                        xe = he[0],
                        ge = he[1],
                        be = (0, o.useState)(!1),
                        we = be[0],
                        ye = be[1],
                        ve = (0, o.useState)(!1),
                        je = ve[0],
                        _e = ve[1],
                        Ne = (0, o.useState)(null !== (O = r.caption) && void 0 !== O ? O : ""),
                        ke = Ne[0],
                        Se = Ne[1],
                        Ze = (0, o.useState)(!1),
                        Ce = Ze[0],
                        Ie = Ze[1],
                        Pe = (0, o.useState)(!1),
                        De = Pe[0],
                        Oe = Pe[1],
                        Ae = (0, o.useState)(!1),
                        Ee = Ae[0],
                        ze = Ae[1],
                        Te = (0, o.useState)([]),
                        qe = Te[0],
                        Le = Te[1];
                    (0, o.useEffect)((function() {
                        pe(T.includes(r.productId))
                    }), [T]), (0, o.useEffect)((function() {
                        var e, s = function() {
                                var e = (0, n.Z)((function() {
                                    var e, n, s, l, o;
                                    return (0, a.__generator)(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                if (!t || !r.caption && !r.name) return [3, 5];
                                                a.label = 1;
                                            case 1:
                                                return a.trys.push([1, 3, 4, 5]), Oe(!0), e = r.name ? function(e) {
                                                    for (var t = e.split(/\s+/), r = 0; r < t.length; r++)
                                                        if ("size" === t[r].toLowerCase() || "sz" === t[r].toLowerCase()) {
                                                            r + 1 < t.length ? t.splice(r, 2) : t.splice(r, 1);
                                                            break
                                                        }
                                                    return t.join(" ").trim()
                                                }(r.name) : r.caption, [4, i.Z.get("/api/itemStylistNotes?" + new URLSearchParams({
                                                    itemCaption: e
                                                }))];
                                            case 2:
                                                if (n = a.sent(), s = n.status, l = n.data, 200 !== s || !l) throw new Error("Could not query stylist notes for item");
                                                return [2, l];
                                            case 3:
                                                return o = a.sent(), console.error(o), [2, ""];
                                            case 4:
                                                return Oe(!1), [7];
                                            case 5:
                                                return [2]
                                        }
                                    }))
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            l = function() {
                                var e = (0, n.Z)((function() {
                                    var e, n, s;
                                    return (0, a.__generator)(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                if (!t || !r.caption && !r.name) return [3, 6];
                                                a.label = 1;
                                            case 1:
                                                return a.trys.push([1, 4, 5, 6]), ze(!0), [4, fetch("/api/itemClosetCompatibility?" + new URLSearchParams({
                                                    itemCaption: null !== (e = r.caption) && void 0 !== e ? e : r.name,
                                                    itemImage: r.imageSrc
                                                }), {
                                                    method: "GET"
                                                })];
                                            case 2:
                                                if (!(n = a.sent()).ok) throw new Error("Could not query compatible closet items for item");
                                                return [4, n.json()];
                                            case 3:
                                                return [2, a.sent()];
                                            case 4:
                                                return s = a.sent(), console.error(s), [2, null];
                                            case 5:
                                                return ze(!1), [7];
                                            case 6:
                                                return [2]
                                        }
                                    }))
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                        pe(T.includes(r.productId)), s().then((function(e) {
                            e && (r.stylistNotes = e)
                        })), l().then((function(e) {
                            if (e) {
                                var t = e.filter((function(e) {
                                    return null !== e.product_image
                                })).map((function(e) {
                                    return {
                                        closet_id: e.id,
                                        url: e.product_image,
                                        img_url: e.product_image,
                                        category: e.category,
                                        rmbg_url: e.segmented_product_image,
                                        original_img_url: e.user_uploaded_closet_image,
                                        source: "closet",
                                        brand: e.product_brand,
                                        name: e.product_name,
                                        seasons: e.seasons,
                                        colors: e.colors,
                                        dress_codes: e.dress_codes
                                    }
                                }));
                                Le((0, j.ad)(t))
                            }
                        })), r.retailPrice ? $(r.retailPrice) : (!r.retailPrice && (0, _.Yn)(r.productImages[0].link), (0, _.NQ)(r.productImages[0].link, $, ye)), Se(null !== (e = r.caption) && void 0 !== e ? e : "")
                    }), [r]), (0, o.useEffect)((function() {
                        Z && 0 !== Z.length || (0, b.Hz)(r, [], R, H, ae, !1), C && 0 !== C.length || (0, b.Hz)(r, [], B, K, oe, !0)
                    }), [r, Z, C]);
                    var Me, Ye = function(e) {
                            t && (0, y.L)("".concat(I, ".").concat(P, ".shopping_product_details_modal.similar_product_tap"), t.id), re(e), de(!0)
                        },
                        Re = function() {
                            var e = (0, n.Z)((function() {
                                var e, n, s, l, o, c, u, d;
                                return (0, a.__generator)(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return t ? (e = r.productId, n = r.productImages, s = r.name, l = r.brand, o = r.category, c = n[0], u = c.imageSrc, d = c.link, (0, y.L)("".concat(I, ".").concat(P, ".shopping_product_details_modal.add_to_wishlist"), t.id, {
                                                wishlist_item_name: s,
                                                wishlist_item_brand: l,
                                                wishlist_item_url: d,
                                                wishlist_product_id: e
                                            }), pe((function(e) {
                                                return !e
                                            })), A("Added to your wishlist, Alta will text you when the price drops\u2728"), q(e), [4, i.Z.post("/api/wishlists", {
                                                product_image: u,
                                                product_url: d,
                                                product_name: s,
                                                product_brand: l,
                                                product_id: e,
                                                category: o,
                                                notify_motion: !1
                                            })]) : [3, 2];
                                        case 1:
                                            a.sent(), i.Z.post("/api/fastWishlistingFromProductModal", {
                                                product_name: s,
                                                search_query: "Shopping recommendation - product details modal",
                                                product_brand: l
                                            }), l && i.Z.post("/api/favoriteBrand", {
                                                product_brand: l
                                            }), a.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ue = function() {
                            var e = (0, n.Z)((function() {
                                var e;
                                return (0, a.__generator)(this, (function(n) {
                                    return t && (pe((function(e) {
                                        return !e
                                    })), e = r.imageSrc, i.Z.delete("/api/wishlists", {
                                        data: e
                                    }), L(r.productId)), [2]
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Fe = function(e) {
                            R((function(t) {
                                return t.filter((function(t) {
                                    return t.imageSrc !== e.imageSrc
                                }))
                            })), (0, b.Zf)(e, F)
                        },
                        He = function(e) {
                            B((function(t) {
                                return t.filter((function(t) {
                                    return t.imageSrc !== e.imageSrc
                                }))
                            })), (0, b.Zf)(e, V)
                        },
                        We = r.retailPrice && r.salePrice && r.salePrice !== r.retailPrice;
                    return (0, l.jsx)(w.Z, {
                        open: s,
                        setOpen: S,
                        children: (0, l.jsxs)(c.ZP, {
                            className: "mx-auto flex w-full max-w-7xl flex-col sm:px-6 lg:px-8",
                            children: [(0, l.jsx)("aside", {
                                className: "relative flex w-full items-center justify-between p-4 md:p-6",
                                children: (0, l.jsx)(m.PZ, {
                                    onClick: function() {
                                        S(!1)
                                    }
                                })
                            }), (0, l.jsxs)("section", {
                                className: "flex w-full flex-col gap-4",
                                children: [(0, l.jsxs)("span", {
                                    className: "flex w-full flex-col gap-3 md:grid md:grid-cols-2 md:gap-6",
                                    children: [(0, l.jsxs)("div", {
                                        className: "relative flex w-full flex-col px-4",
                                        children: [(0, l.jsx)("img", {
                                            src: r.imageSrc,
                                            alt: r.imageAlt,
                                            className: "aspect-square w-full object-contain"
                                        }), me ? (0, l.jsx)("div", {
                                            className: "absolute right-[5%] top-[5%] z-10 flex h-6 w-6 items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                                            onClick: function() {
                                                return Ue()
                                            },
                                            children: (0, l.jsx)(u.SEb, {
                                                size: "2rem",
                                                fill: "#FF3040"
                                            })
                                        }) : (0, l.jsx)("div", {
                                            className: "absolute right-[5%] top-[5%] z-10 flex h-6 w-6 items-center justify-center border border-tts-black bg-tts-white shadow-md hover:cursor-pointer",
                                            onClick: function(e) {
                                                e.stopPropagation(), Re()
                                            },
                                            children: (0, l.jsx)(u.kTx, {
                                                size: "2rem",
                                                fill: "black"
                                            })
                                        }), r.caption && (0, l.jsxs)("button", {
                                            onClick: function() {
                                                t && (0, y.L)("".concat(I, ".").concat(P, ".try_searching_for"), t.id, {
                                                    caption: r.caption
                                                }), Ie(!0)
                                            },
                                            className: "mb-4 mt-8 flex w-full items-center gap-2 border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-light text-gray-500 hover:border-tts-black hover:bg-gray-200 hover:text-tts-black",
                                            children: [(0, l.jsx)(u.Goc, {
                                                size: "1rem"
                                            }), (0, l.jsxs)("p", {
                                                className: "truncate",
                                                children: ["Try searching for: \u201c", r.caption, "\u201d"]
                                            })]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex h-full w-full flex-col justify-center px-4",
                                        children: [(0, l.jsx)("p", {
                                            className: "text-base font-semibold uppercase",
                                            children: r.brand
                                        }), (0, l.jsx)("p", {
                                            className: "text-sm font-light md:text-base",
                                            children: r.name
                                        }), we ? (0, l.jsx)("div", {
                                            className: "mt-[2px] h-5 w-16 animate-pulse bg-gray-200 md:h-6"
                                        }) : X ? (0, l.jsxs)("span", {
                                            className: "mt-[2px] flex items-center gap-2",
                                            children: [We && (0, l.jsxs)("p", {
                                                className: "text-left text-sm font-light text-red-500 md:text-base",
                                                children: ["$", r.salePrice]
                                            }), (0, l.jsxs)("p", {
                                                className: (0, v.Z)("text-left text-sm font-light md:text-base", We && "line-through"),
                                                children: ["$", X]
                                            })]
                                        }) : null, (0, l.jsxs)("div", {
                                            className: "mt-2 grid w-full grid-cols-2 gap-2 md:flex",
                                            children: [(0, l.jsx)("button", {
                                                className: "w-full border border-tts-black bg-tts-white px-2 py-1 text-sm font-semibold uppercase text-tts-black",
                                                onClick: function() {
                                                    t && (0, y.L)("".concat(I, ".").concat(P, ".shopping_product_details_modal.complete_the_look"), t.id, {
                                                        item_name: r.name
                                                    }), ge(!0)
                                                },
                                                children: "Complete the look"
                                            }), (0, l.jsx)("button", {
                                                className: "w-full border border-tts-black bg-tts-black px-2 py-1 text-sm font-semibold uppercase text-tts-white",
                                                onClick: function() {
                                                    return e = r.productImages[0].link, t && (0, y.L)("".concat(I, ".").concat(P, ".shopping_product_details_modal.offsite_cta_tap"), t.id, {
                                                        retailer_url: e
                                                    }), void window.open((0, _.Yn)(e) ? e : (0, _.tp)(e), "_blank");
                                                    var e
                                                },
                                                children: "View on website \u2197"
                                            })]
                                        }), (r.stylistNotes || De) && (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)("div", {
                                                className: "my-8 w-full border-b-[1px] px-4"
                                            }), (0, l.jsxs)("div", {
                                                className: "flex w-full flex-col gap-2",
                                                children: [(0, l.jsxs)("button", {
                                                    className: "flex w-full items-center justify-between",
                                                    onClick: function() {
                                                        return _e((function(e) {
                                                            return !e
                                                        }))
                                                    },
                                                    disabled: De,
                                                    children: [(0, l.jsxs)("h1", {
                                                        className: "whitespace-nowrap text-sm font-medium text-tts-black",
                                                        children: ["Stylist notes for ", null === t || void 0 === t ? void 0 : t.first_name]
                                                    }), je ? (0, l.jsx)(u.OrA, {
                                                        size: "1.25rem"
                                                    }) : (0, l.jsx)(u.jRD, {
                                                        size: "1.25rem"
                                                    })]
                                                }), De ? (0, l.jsx)("div", {
                                                    className: "h-5 w-full animate-pulse bg-gray-200"
                                                }) : (0, l.jsx)("p", {
                                                    className: (0, v.Z)("text-sm font-light", je && "truncate"),
                                                    children: r.stylistNotes ? r.stylistNotes.charAt(0).toUpperCase() + r.stylistNotes.slice(1) : "Could not find stylist notes for this item, please try again!"
                                                })]
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "mt-8 flex w-full flex-col gap-2",
                                            children: [(0, l.jsxs)("h1", {
                                                className: "w-full whitespace-nowrap text-left text-sm font-medium text-tts-black",
                                                children: ["Compatible items you own (", Ee ? "..." : qe.length, ")"]
                                            }), Ee ? (0, l.jsx)("span", {
                                                className: "grid w-full grid-cols-3 gap-3 md:grid-cols-4",
                                                children: Array.from(Array(E < 768 ? 3 : 4).keys()).map((function(e) {
                                                    return (0, l.jsx)("div", {
                                                        className: "aspect-square w-full animate-pulse bg-gray-200"
                                                    }, e)
                                                }))
                                            }) : qe.length > 0 ? (0, l.jsx)("span", {
                                                className: "flex w-full gap-2 overflow-x-auto",
                                                children: qe.map((function(e, t) {
                                                    return (0, l.jsx)("img", {
                                                        src: null !== (Me = e.backgroundRemovedImageUrl) && void 0 !== Me ? Me : e.imageSrc,
                                                        alt: e.imageAlt,
                                                        className: "aspect-square w-24 shrink-0 border object-contain md:w-32"
                                                    }, t)
                                                }))
                                            }) : (0, l.jsx)("p", {
                                                className: "text-sm font-light",
                                                children: "No compatible items yet, try adding more items you own!"
                                            })]
                                        })]
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "my-8 w-full border-b-[1px] px-4"
                                }), t && (0, l.jsxs)("span", {
                                    className: "flex w-full flex-col gap-2 pb-6",
                                    children: [(0, l.jsx)("h1", {
                                        className: "px-4 text-base font-semibold",
                                        children: "Similar items from your favorite brands"
                                    }), (0, l.jsx)("div", {
                                        className: "mt-6 grid w-full grid-cols-2 gap-3 px-4 md:grid-cols-4",
                                        children: ie ? Array.from(Array(4).keys()).map((function(e) {
                                            return (0, l.jsxs)("div", {
                                                className: "flex w-full flex-col gap-1",
                                                children: [(0, l.jsx)("div", {
                                                    className: "aspect-square w-full animate-pulse bg-gray-200"
                                                }), (0, l.jsx)("div", {
                                                    className: "h-5 w-full animate-pulse bg-gray-200"
                                                }), (0, l.jsx)("div", {
                                                    className: "h-4 w-full animate-pulse bg-gray-100"
                                                })]
                                            }, e)
                                        })) : G.filter((function(e) {
                                            return e.imageSrc !== r.imageSrc
                                        })).map((function(e, r) {
                                            return (0, l.jsx)(x.Z, {
                                                userData: t,
                                                item: e,
                                                onClick: Ye,
                                                onDislike: He,
                                                page: I,
                                                context: "".concat(P, ".shopping_product_details_modal")
                                            }, r)
                                        }))
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "my-8 w-full border-b-[1px] px-4"
                                }), t && (0, l.jsxs)("span", {
                                    className: "flex w-full flex-col gap-2 pb-6",
                                    children: [(0, l.jsx)("h1", {
                                        className: "px-4 text-base font-semibold",
                                        children: "You may also like"
                                    }), (0, l.jsx)("div", {
                                        className: "mt-6 grid w-full grid-cols-2 gap-3 px-4 md:grid-cols-4",
                                        children: se ? Array.from(Array(4).keys()).map((function(e) {
                                            return (0, l.jsxs)("div", {
                                                className: "flex w-full flex-col gap-1",
                                                children: [(0, l.jsx)("div", {
                                                    className: "aspect-square w-full animate-pulse bg-gray-200"
                                                }), (0, l.jsx)("div", {
                                                    className: "h-5 w-full animate-pulse bg-gray-200"
                                                }), (0, l.jsx)("div", {
                                                    className: "h-4 w-full animate-pulse bg-gray-100"
                                                })]
                                            }, e)
                                        })) : Y.filter((function(e) {
                                            return e.imageSrc !== r.imageSrc
                                        })).map((function(e, r) {
                                            return (0, l.jsx)(x.Z, {
                                                userData: t,
                                                item: e,
                                                onClick: Ye,
                                                onDislike: Fe,
                                                page: I,
                                                context: "".concat(P, ".shopping_product_details_modal")
                                            }, r)
                                        }))
                                    })]
                                })]
                            }), t && r.caption && (0, l.jsx)(g.Z, {
                                userData: t,
                                isOpen: Ce,
                                setIsOpen: Ie,
                                query: ke,
                                setQuery: Se
                            }), (0, l.jsx)(d.Z, {
                                page: I,
                                context: P,
                                isOpen: xe,
                                setIsOpen: ge,
                                item: r,
                                userData: t
                            }), te && (0, l.jsx)(N, {
                                userData: t,
                                item: te,
                                isOpen: ue,
                                setIsOpen: de,
                                inheritedSimilarProducts: k(r, te, Y),
                                inheritedSimilarProductsUsingFavoriteBrands: k(r, te, G),
                                page: I,
                                context: P
                            })]
                        })
                    })
                },
                k = function(e, t, r) {
                    var n = new Set;
                    return [e, t].concat((0, s.Z)(r)).filter((function(e) {
                        return !n.has(e.imageSrc) && (n.add(e.imageSrc), !0)
                    }))
                },
                S = N
        }
    }
]);