"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [221], {
        40221: function(e, t, r) {
            function n(e, t) {
                return new Promise((function(r, n) {
                    let o;
                    return i(e).then((function(e) {
                        try {
                            return o = e, r(new Blob([t.slice(0, 2), o, t.slice(2)], {
                                type: "image/jpeg"
                            }))
                        } catch (e) {
                            return n(e)
                        }
                    }), n)
                }))
            }
            r.d(t, {
                Z: function() {
                    return k
                }
            });
            const i = e => new Promise(((t, r) => {
                const n = new FileReader;
                n.addEventListener("load", (({
                    target: {
                        result: e
                    }
                }) => {
                    const n = new DataView(e);
                    let i = 0;
                    if (65496 !== n.getUint16(i)) return r("not a valid JPEG");
                    for (i += 2;;) {
                        const o = n.getUint16(i);
                        if (65498 === o) break;
                        const a = n.getUint16(i + 2);
                        if (65505 === o && 1165519206 === n.getUint32(i + 4)) {
                            const o = i + 10;
                            let f;
                            switch (n.getUint16(o)) {
                                case 18761:
                                    f = !0;
                                    break;
                                case 19789:
                                    f = !1;
                                    break;
                                default:
                                    return r("TIFF header contains invalid endian")
                            }
                            if (42 !== n.getUint16(o + 2, f)) return r("TIFF header contains invalid version");
                            const s = n.getUint32(o + 4, f),
                                l = o + s + 2 + 12 * n.getUint16(o + s, f);
                            for (let e = o + s + 2; e < l; e += 12)
                                if (274 == n.getUint16(e, f)) {
                                    if (3 !== n.getUint16(e + 2, f)) return r("Orientation data type is invalid");
                                    if (1 !== n.getUint32(e + 4, f)) return r("Orientation data count is invalid");
                                    n.setUint16(e + 8, 1, f);
                                    break
                                }
                            return t(e.slice(i, i + 2 + a))
                        }
                        i += 2 + a
                    }
                    return t(new Blob)
                })), n.readAsArrayBuffer(e)
            }));
            var o = {},
                a = {
                    get exports() {
                        return o
                    },
                    set exports(e) {
                        o = e
                    }
                };
            ! function(e) {
                var t, r, n = {};
                a.exports = n, n.parse = function(e, t) {
                        for (var r = n.bin.readUshort, i = n.bin.readUint, o = 0, a = {}, f = new Uint8Array(e), s = f.length - 4; 101010256 != i(f, s);) s--;
                        o = s, o += 4;
                        var l = r(f, o += 4);
                        r(f, o += 2);
                        var c = i(f, o += 2),
                            u = i(f, o += 4);
                        o += 4, o = u;
                        for (var h = 0; h < l; h++) {
                            i(f, o), o += 4, o += 4, o += 4, i(f, o += 4), c = i(f, o += 4);
                            var d = i(f, o += 4),
                                A = r(f, o += 4),
                                g = r(f, o + 2),
                                w = r(f, o + 4);
                            o += 6;
                            var p = i(f, o += 8);
                            o += 4, o += A + g + w, n._readLocal(f, p, a, c, d, t)
                        }
                        return a
                    }, n._readLocal = function(e, t, r, i, o, a) {
                        var f = n.bin.readUshort,
                            s = n.bin.readUint;
                        s(e, t), f(e, t += 4), f(e, t += 2);
                        var l = f(e, t += 2);
                        s(e, t += 2), s(e, t += 4), t += 4;
                        var c = f(e, t += 8),
                            u = f(e, t += 2);
                        t += 2;
                        var h = n.bin.readUTF8(e, t, c);
                        if (t += c, t += u, a) r[h] = {
                            size: o,
                            csize: i
                        };
                        else {
                            var d = new Uint8Array(e.buffer, t);
                            if (0 == l) r[h] = new Uint8Array(d.buffer.slice(t, t + i));
                            else {
                                if (8 != l) throw "unknown compression method: " + l;
                                var A = new Uint8Array(o);
                                n.inflateRaw(d, A), r[h] = A
                            }
                        }
                    }, n.inflateRaw = function(e, t) {
                        return n.F.inflate(e, t)
                    }, n.inflate = function(e, t) {
                        return e[0], e[1], n.inflateRaw(new Uint8Array(e.buffer, e.byteOffset + 2, e.length - 6), t)
                    }, n.deflate = function(e, t) {
                        null == t && (t = {
                            level: 6
                        });
                        var r = 0,
                            i = new Uint8Array(50 + Math.floor(1.1 * e.length));
                        i[r] = 120, i[r + 1] = 156, r += 2, r = n.F.deflateRaw(e, i, r, t.level);
                        var o = n.adler(e, 0, e.length);
                        return i[r + 0] = o >>> 24 & 255, i[r + 1] = o >>> 16 & 255, i[r + 2] = o >>> 8 & 255, i[r + 3] = o >>> 0 & 255, new Uint8Array(i.buffer, 0, r + 4)
                    }, n.deflateRaw = function(e, t) {
                        null == t && (t = {
                            level: 6
                        });
                        var r = new Uint8Array(50 + Math.floor(1.1 * e.length)),
                            i = n.F.deflateRaw(e, r, i, t.level);
                        return new Uint8Array(r.buffer, 0, i)
                    }, n.encode = function(e, t) {
                        null == t && (t = !1);
                        var r = 0,
                            i = n.bin.writeUint,
                            o = n.bin.writeUshort,
                            a = {};
                        for (var f in e) {
                            var s = !n._noNeed(f) && !t,
                                l = e[f],
                                c = n.crc.crc(l, 0, l.length);
                            a[f] = {
                                cpr: s,
                                usize: l.length,
                                crc: c,
                                file: s ? n.deflateRaw(l) : l
                            }
                        }
                        for (var f in a) r += a[f].file.length + 30 + 46 + 2 * n.bin.sizeUTF8(f);
                        r += 22;
                        var u = new Uint8Array(r),
                            h = 0,
                            d = [];
                        for (var f in a) {
                            var A = a[f];
                            d.push(h), h = n._writeHeader(u, h, f, A, 0)
                        }
                        var g = 0,
                            w = h;
                        for (var f in a) A = a[f], d.push(h), h = n._writeHeader(u, h, f, A, 1, d[g++]);
                        var p = h - w;
                        return i(u, h, 101010256), h += 4, o(u, h += 4, g), o(u, h += 2, g), i(u, h += 2, p), i(u, h += 4, w), h += 4, h += 2, u.buffer
                    }, n._noNeed = function(e) {
                        var t = e.split(".").pop().toLowerCase();
                        return -1 != "png,jpg,jpeg,zip".indexOf(t)
                    }, n._writeHeader = function(e, t, r, i, o, a) {
                        var f = n.bin.writeUint,
                            s = n.bin.writeUshort,
                            l = i.file;
                        return f(e, t, 0 == o ? 67324752 : 33639248), t += 4, 1 == o && (t += 2), s(e, t, 20), s(e, t += 2, 0), s(e, t += 2, i.cpr ? 8 : 0), f(e, t += 2, 0), f(e, t += 4, i.crc), f(e, t += 4, l.length), f(e, t += 4, i.usize), s(e, t += 4, n.bin.sizeUTF8(r)), s(e, t += 2, 0), t += 2, 1 == o && (t += 2, t += 2, f(e, t += 6, a), t += 4), t += n.bin.writeUTF8(e, t, r), 0 == o && (e.set(l, t), t += l.length), t
                    }, n.crc = {
                        table: function() {
                            for (var e = new Uint32Array(256), t = 0; t < 256; t++) {
                                for (var r = t, n = 0; n < 8; n++) 1 & r ? r = 3988292384 ^ r >>> 1 : r >>>= 1;
                                e[t] = r
                            }
                            return e
                        }(),
                        update: function(e, t, r, i) {
                            for (var o = 0; o < i; o++) e = n.crc.table[255 & (e ^ t[r + o])] ^ e >>> 8;
                            return e
                        },
                        crc: function(e, t, r) {
                            return 4294967295 ^ n.crc.update(4294967295, e, t, r)
                        }
                    }, n.adler = function(e, t, r) {
                        for (var n = 1, i = 0, o = t, a = t + r; o < a;) {
                            for (var f = Math.min(o + 5552, a); o < f;) i += n += e[o++];
                            n %= 65521, i %= 65521
                        }
                        return i << 16 | n
                    }, n.bin = {
                        readUshort: function(e, t) {
                            return e[t] | e[t + 1] << 8
                        },
                        writeUshort: function(e, t, r) {
                            e[t] = 255 & r, e[t + 1] = r >> 8 & 255
                        },
                        readUint: function(e, t) {
                            return 16777216 * e[t + 3] + (e[t + 2] << 16 | e[t + 1] << 8 | e[t])
                        },
                        writeUint: function(e, t, r) {
                            e[t] = 255 & r, e[t + 1] = r >> 8 & 255, e[t + 2] = r >> 16 & 255, e[t + 3] = r >> 24 & 255
                        },
                        readASCII: function(e, t, r) {
                            for (var n = "", i = 0; i < r; i++) n += String.fromCharCode(e[t + i]);
                            return n
                        },
                        writeASCII: function(e, t, r) {
                            for (var n = 0; n < r.length; n++) e[t + n] = r.charCodeAt(n)
                        },
                        pad: function(e) {
                            return e.length < 2 ? "0" + e : e
                        },
                        readUTF8: function(e, t, r) {
                            for (var i, o = "", a = 0; a < r; a++) o += "%" + n.bin.pad(e[t + a].toString(16));
                            try {
                                i = decodeURIComponent(o)
                            } catch (i) {
                                return n.bin.readASCII(e, t, r)
                            }
                            return i
                        },
                        writeUTF8: function(e, t, r) {
                            for (var n = r.length, i = 0, o = 0; o < n; o++) {
                                var a = r.charCodeAt(o);
                                if (0 == (4294967168 & a)) e[t + i] = a, i++;
                                else if (0 == (4294965248 & a)) e[t + i] = 192 | a >> 6, e[t + i + 1] = 128 | a >> 0 & 63, i += 2;
                                else if (0 == (4294901760 & a)) e[t + i] = 224 | a >> 12, e[t + i + 1] = 128 | a >> 6 & 63, e[t + i + 2] = 128 | a >> 0 & 63, i += 3;
                                else {
                                    if (0 != (4292870144 & a)) throw "e";
                                    e[t + i] = 240 | a >> 18, e[t + i + 1] = 128 | a >> 12 & 63, e[t + i + 2] = 128 | a >> 6 & 63, e[t + i + 3] = 128 | a >> 0 & 63, i += 4
                                }
                            }
                            return i
                        },
                        sizeUTF8: function(e) {
                            for (var t = e.length, r = 0, n = 0; n < t; n++) {
                                var i = e.charCodeAt(n);
                                if (0 == (4294967168 & i)) r++;
                                else if (0 == (4294965248 & i)) r += 2;
                                else if (0 == (4294901760 & i)) r += 3;
                                else {
                                    if (0 != (4292870144 & i)) throw "e";
                                    r += 4
                                }
                            }
                            return r
                        }
                    }, n.F = {}, n.F.deflateRaw = function(e, t, r, i) {
                        var o = [
                                [0, 0, 0, 0, 0],
                                [4, 4, 8, 4, 0],
                                [4, 5, 16, 8, 0],
                                [4, 6, 16, 16, 0],
                                [4, 10, 16, 32, 0],
                                [8, 16, 32, 32, 0],
                                [8, 16, 128, 128, 0],
                                [8, 32, 128, 256, 0],
                                [32, 128, 258, 1024, 1],
                                [32, 258, 258, 4096, 1]
                            ][i],
                            a = n.F.U,
                            f = n.F._goodIndex;
                        n.F._hash;
                        var s = n.F._putsE,
                            l = 0,
                            c = r << 3,
                            u = 0,
                            h = e.length;
                        if (0 == i) {
                            for (; l < h;) s(t, c, l + (F = Math.min(65535, h - l)) == h ? 1 : 0), c = n.F._copyExact(e, l, F, t, c + 8), l += F;
                            return c >>> 3
                        }
                        var d = a.lits,
                            A = a.strt,
                            g = a.prev,
                            w = 0,
                            p = 0,
                            v = 0,
                            m = 0,
                            b = 0,
                            y = 0;
                        for (h > 2 && (A[y = n.F._hash(e, 0)] = 0), l = 0; l < h; l++) {
                            if (b = y, l + 1 < h - 2) {
                                y = n.F._hash(e, l + 1);
                                var E = l + 1 & 32767;
                                g[E] = A[y], A[y] = E
                            }
                            if (u <= l) {
                                (w > 14e3 || p > 26697) && h - l > 100 && (u < l && (d[w] = l - u, w += 2, u = l), c = n.F._writeBlock(l == h - 1 || u == h ? 1 : 0, d, w, m, e, v, l - v, t, c), w = p = m = 0, v = l);
                                var U = 0;
                                l < h - 2 && (U = n.F._bestMatch(e, l, g, b, Math.min(o[2], h - l), o[3]));
                                var F = U >>> 16,
                                    B = 65535 & U;
                                if (0 != U) {
                                    B = 65535 & U;
                                    var Q = f(F = U >>> 16, a.of0);
                                    a.lhst[257 + Q]++;
                                    var _ = f(B, a.df0);
                                    a.dhst[_]++, m += a.exb[Q] + a.dxb[_], d[w] = F << 23 | l - u, d[w + 1] = B << 16 | Q << 8 | _, w += 2, u = l + F
                                } else a.lhst[e[l]]++;
                                p++
                            }
                        }
                        for (v == l && 0 != e.length || (u < l && (d[w] = l - u, w += 2, u = l), c = n.F._writeBlock(1, d, w, m, e, v, l - v, t, c), w = 0, p = 0, w = p = m = 0, v = l); 0 != (7 & c);) c++;
                        return c >>> 3
                    }, n.F._bestMatch = function(e, t, r, i, o, a) {
                        var f = 32767 & t,
                            s = r[f],
                            l = f - s + 32768 & 32767;
                        if (s == f || i != n.F._hash(e, t - l)) return 0;
                        for (var c = 0, u = 0, h = Math.min(32767, t); l <= h && 0 != --a && s != f;) {
                            if (0 == c || e[t + c] == e[t + c - l]) {
                                var d = n.F._howLong(e, t, l);
                                if (d > c) {
                                    if (u = l, (c = d) >= o) break;
                                    l + 2 < d && (d = l + 2);
                                    for (var A = 0, g = 0; g < d - 2; g++) {
                                        var w = t - l + g + 32768 & 32767,
                                            p = w - r[w] + 32768 & 32767;
                                        p > A && (A = p, s = w)
                                    }
                                }
                            }
                            l += (f = s) - (s = r[f]) + 32768 & 32767
                        }
                        return c << 16 | u
                    }, n.F._howLong = function(e, t, r) {
                        if (e[t] != e[t - r] || e[t + 1] != e[t + 1 - r] || e[t + 2] != e[t + 2 - r]) return 0;
                        var n = t,
                            i = Math.min(e.length, t + 258);
                        for (t += 3; t < i && e[t] == e[t - r];) t++;
                        return t - n
                    }, n.F._hash = function(e, t) {
                        return (e[t] << 8 | e[t + 1]) + (e[t + 2] << 4) & 65535
                    }, n.saved = 0, n.F._writeBlock = function(e, t, r, i, o, a, f, s, l) {
                        var c, u, h, d, A, g, w, p, v, m = n.F.U,
                            b = n.F._putsF,
                            y = n.F._putsE;
                        m.lhst[256]++, u = (c = n.F.getTrees())[0], h = c[1], d = c[2], A = c[3], g = c[4], w = c[5], p = c[6], v = c[7];
                        var E = 32 + (0 == (l + 3 & 7) ? 0 : 8 - (l + 3 & 7)) + (f << 3),
                            U = i + n.F.contSize(m.fltree, m.lhst) + n.F.contSize(m.fdtree, m.dhst),
                            F = i + n.F.contSize(m.ltree, m.lhst) + n.F.contSize(m.dtree, m.dhst);
                        F += 14 + 3 * w + n.F.contSize(m.itree, m.ihst) + (2 * m.ihst[16] + 3 * m.ihst[17] + 7 * m.ihst[18]);
                        for (var B = 0; B < 286; B++) m.lhst[B] = 0;
                        for (B = 0; B < 30; B++) m.dhst[B] = 0;
                        for (B = 0; B < 19; B++) m.ihst[B] = 0;
                        var Q = E < U && E < F ? 0 : U < F ? 1 : 2;
                        if (b(s, l, e), b(s, l + 1, Q), l += 3, 0 == Q) {
                            for (; 0 != (7 & l);) l++;
                            l = n.F._copyExact(o, a, f, s, l)
                        } else {
                            var _, C;
                            if (1 == Q && (_ = m.fltree, C = m.fdtree), 2 == Q) {
                                n.F.makeCodes(m.ltree, u), n.F.revCodes(m.ltree, u), n.F.makeCodes(m.dtree, h), n.F.revCodes(m.dtree, h), n.F.makeCodes(m.itree, d), n.F.revCodes(m.itree, d), _ = m.ltree, C = m.dtree, y(s, l, A - 257), y(s, l += 5, g - 1), y(s, l += 5, w - 4), l += 4;
                                for (var I = 0; I < w; I++) y(s, l + 3 * I, m.itree[1 + (m.ordr[I] << 1)]);
                                l += 3 * w, l = n.F._codeTiny(p, m.itree, s, l), l = n.F._codeTiny(v, m.itree, s, l)
                            }
                            for (var M = a, R = 0; R < r; R += 2) {
                                for (var S = t[R], x = S >>> 23, T = M + (8388607 & S); M < T;) l = n.F._writeLit(o[M++], _, s, l);
                                if (0 != x) {
                                    var k = t[R + 1],
                                        H = k >> 16,
                                        O = k >> 8 & 255,
                                        P = 255 & k;
                                    y(s, l = n.F._writeLit(257 + O, _, s, l), x - m.of0[O]), l += m.exb[O], b(s, l = n.F._writeLit(P, C, s, l), H - m.df0[P]), l += m.dxb[P], M += x
                                }
                            }
                            l = n.F._writeLit(256, _, s, l)
                        }
                        return l
                    }, n.F._copyExact = function(e, t, r, n, i) {
                        var o = i >>> 3;
                        return n[o] = r, n[o + 1] = r >>> 8, n[o + 2] = 255 - n[o], n[o + 3] = 255 - n[o + 1], o += 4, n.set(new Uint8Array(e.buffer, t, r), o), i + (r + 4 << 3)
                    }, n.F.getTrees = function() {
                        for (var e = n.F.U, t = n.F._hufTree(e.lhst, e.ltree, 15), r = n.F._hufTree(e.dhst, e.dtree, 15), i = [], o = n.F._lenCodes(e.ltree, i), a = [], f = n.F._lenCodes(e.dtree, a), s = 0; s < i.length; s += 2) e.ihst[i[s]]++;
                        for (s = 0; s < a.length; s += 2) e.ihst[a[s]]++;
                        for (var l = n.F._hufTree(e.ihst, e.itree, 7), c = 19; c > 4 && 0 == e.itree[1 + (e.ordr[c - 1] << 1)];) c--;
                        return [t, r, l, o, f, c, i, a]
                    }, n.F.getSecond = function(e) {
                        for (var t = [], r = 0; r < e.length; r += 2) t.push(e[r + 1]);
                        return t
                    }, n.F.nonZero = function(e) {
                        for (var t = "", r = 0; r < e.length; r += 2) 0 != e[r + 1] && (t += (r >> 1) + ",");
                        return t
                    }, n.F.contSize = function(e, t) {
                        for (var r = 0, n = 0; n < t.length; n++) r += t[n] * e[1 + (n << 1)];
                        return r
                    }, n.F._codeTiny = function(e, t, r, i) {
                        for (var o = 0; o < e.length; o += 2) {
                            var a = e[o],
                                f = e[o + 1];
                            i = n.F._writeLit(a, t, r, i);
                            var s = 16 == a ? 2 : 17 == a ? 3 : 7;
                            a > 15 && (n.F._putsE(r, i, f, s), i += s)
                        }
                        return i
                    }, n.F._lenCodes = function(e, t) {
                        for (var r = e.length; 2 != r && 0 == e[r - 1];) r -= 2;
                        for (var n = 0; n < r; n += 2) {
                            var i = e[n + 1],
                                o = n + 3 < r ? e[n + 3] : -1,
                                a = n + 5 < r ? e[n + 5] : -1,
                                f = 0 == n ? -1 : e[n - 1];
                            if (0 == i && o == i && a == i) {
                                for (var s = n + 5; s + 2 < r && e[s + 2] == i;) s += 2;
                                (l = Math.min(s + 1 - n >>> 1, 138)) < 11 ? t.push(17, l - 3) : t.push(18, l - 11), n += 2 * l - 2
                            } else if (i == f && o == i && a == i) {
                                for (s = n + 5; s + 2 < r && e[s + 2] == i;) s += 2;
                                var l = Math.min(s + 1 - n >>> 1, 6);
                                t.push(16, l - 3), n += 2 * l - 2
                            } else t.push(i, 0)
                        }
                        return r >>> 1
                    }, n.F._hufTree = function(e, t, r) {
                        var i = [],
                            o = e.length,
                            a = t.length,
                            f = 0;
                        for (f = 0; f < a; f += 2) t[f] = 0, t[f + 1] = 0;
                        for (f = 0; f < o; f++) 0 != e[f] && i.push({
                            lit: f,
                            f: e[f]
                        });
                        var s = i.length,
                            l = i.slice(0);
                        if (0 == s) return 0;
                        if (1 == s) {
                            var c = i[0].lit;
                            return l = 0 == c ? 1 : 0, t[1 + (c << 1)] = 1, t[1 + (l << 1)] = 1, 1
                        }
                        i.sort((function(e, t) {
                            return e.f - t.f
                        }));
                        var u = i[0],
                            h = i[1],
                            d = 0,
                            A = 1,
                            g = 2;
                        for (i[0] = {
                                lit: -1,
                                f: u.f + h.f,
                                l: u,
                                r: h,
                                d: 0
                            }; A != s - 1;) u = d != A && (g == s || i[d].f < i[g].f) ? i[d++] : i[g++], h = d != A && (g == s || i[d].f < i[g].f) ? i[d++] : i[g++], i[A++] = {
                            lit: -1,
                            f: u.f + h.f,
                            l: u,
                            r: h
                        };
                        var w = n.F.setDepth(i[A - 1], 0);
                        for (w > r && (n.F.restrictDepth(l, r, w), w = r), f = 0; f < s; f++) t[1 + (l[f].lit << 1)] = l[f].d;
                        return w
                    }, n.F.setDepth = function(e, t) {
                        return -1 != e.lit ? (e.d = t, t) : Math.max(n.F.setDepth(e.l, t + 1), n.F.setDepth(e.r, t + 1))
                    }, n.F.restrictDepth = function(e, t, r) {
                        var n = 0,
                            i = 1 << r - t,
                            o = 0;
                        for (e.sort((function(e, t) {
                                return t.d == e.d ? e.f - t.f : t.d - e.d
                            })), n = 0; n < e.length && e[n].d > t; n++) {
                            var a = e[n].d;
                            e[n].d = t, o += i - (1 << r - a)
                        }
                        for (o >>>= r - t; o > 0;)(a = e[n].d) < t ? (e[n].d++, o -= 1 << t - a - 1) : n++;
                        for (; n >= 0; n--) e[n].d == t && o < 0 && (e[n].d--, o++);
                        0 != o && console.log("debt left")
                    }, n.F._goodIndex = function(e, t) {
                        var r = 0;
                        return t[16 | r] <= e && (r |= 16), t[8 | r] <= e && (r |= 8), t[4 | r] <= e && (r |= 4), t[2 | r] <= e && (r |= 2), t[1 | r] <= e && (r |= 1), r
                    }, n.F._writeLit = function(e, t, r, i) {
                        return n.F._putsF(r, i, t[e << 1]), i + t[1 + (e << 1)]
                    }, n.F.inflate = function(e, t) {
                        var r = Uint8Array;
                        if (3 == e[0] && 0 == e[1]) return t || new r(0);
                        var i = n.F,
                            o = i._bitsF,
                            a = i._bitsE,
                            f = i._decodeTiny,
                            s = i.makeCodes,
                            l = i.codes2map,
                            c = i._get17,
                            u = i.U,
                            h = null == t;
                        h && (t = new r(e.length >>> 2 << 3));
                        for (var d, A, g = 0, w = 0, p = 0, v = 0, m = 0, b = 0, y = 0, E = 0, U = 0; 0 == g;)
                            if (g = o(e, U, 1), w = o(e, U + 1, 2), U += 3, 0 != w) {
                                if (h && (t = n.F._check(t, E + (1 << 17))), 1 == w && (d = u.flmap, A = u.fdmap, b = 511, y = 31), 2 == w) {
                                    p = a(e, U, 5) + 257, v = a(e, U + 5, 5) + 1, m = a(e, U + 10, 4) + 4, U += 14;
                                    for (var F = 0; F < 38; F += 2) u.itree[F] = 0, u.itree[F + 1] = 0;
                                    var B = 1;
                                    for (F = 0; F < m; F++) {
                                        var Q = a(e, U + 3 * F, 3);
                                        u.itree[1 + (u.ordr[F] << 1)] = Q, Q > B && (B = Q)
                                    }
                                    U += 3 * m, s(u.itree, B), l(u.itree, B, u.imap), d = u.lmap, A = u.dmap, U = f(u.imap, (1 << B) - 1, p + v, e, U, u.ttree);
                                    var _ = i._copyOut(u.ttree, 0, p, u.ltree);
                                    b = (1 << _) - 1;
                                    var C = i._copyOut(u.ttree, p, v, u.dtree);
                                    y = (1 << C) - 1, s(u.ltree, _), l(u.ltree, _, d), s(u.dtree, C), l(u.dtree, C, A)
                                }
                                for (;;) {
                                    var I = d[c(e, U) & b];
                                    U += 15 & I;
                                    var M = I >>> 4;
                                    if (M >>> 8 == 0) t[E++] = M;
                                    else {
                                        if (256 == M) break;
                                        var R = E + M - 254;
                                        if (M > 264) {
                                            var S = u.ldef[M - 257];
                                            R = E + (S >>> 3) + a(e, U, 7 & S), U += 7 & S
                                        }
                                        var x = A[c(e, U) & y];
                                        U += 15 & x;
                                        var T = x >>> 4,
                                            k = u.ddef[T],
                                            H = (k >>> 4) + o(e, U, 15 & k);
                                        for (U += 15 & k, h && (t = n.F._check(t, E + (1 << 17))); E < R;) t[E] = t[E++ - H], t[E] = t[E++ - H], t[E] = t[E++ - H], t[E] = t[E++ - H];
                                        E = R
                                    }
                                }
                            } else {
                                0 != (7 & U) && (U += 8 - (7 & U));
                                var O = 4 + (U >>> 3),
                                    P = e[O - 4] | e[O - 3] << 8;
                                h && (t = n.F._check(t, E + P)), t.set(new r(e.buffer, e.byteOffset + O, P), E), U = O + P << 3, E += P
                            }
                        return t.length == E ? t : t.slice(0, E)
                    }, n.F._check = function(e, t) {
                        var r = e.length;
                        if (t <= r) return e;
                        var n = new Uint8Array(Math.max(r << 1, t));
                        return n.set(e, 0), n
                    }, n.F._decodeTiny = function(e, t, r, i, o, a) {
                        for (var f = n.F._bitsE, s = n.F._get17, l = 0; l < r;) {
                            var c = e[s(i, o) & t];
                            o += 15 & c;
                            var u = c >>> 4;
                            if (u <= 15) a[l] = u, l++;
                            else {
                                var h = 0,
                                    d = 0;
                                16 == u ? (d = 3 + f(i, o, 2), o += 2, h = a[l - 1]) : 17 == u ? (d = 3 + f(i, o, 3), o += 3) : 18 == u && (d = 11 + f(i, o, 7), o += 7);
                                for (var A = l + d; l < A;) a[l] = h, l++
                            }
                        }
                        return o
                    }, n.F._copyOut = function(e, t, r, n) {
                        for (var i = 0, o = 0, a = n.length >>> 1; o < r;) {
                            var f = e[o + t];
                            n[o << 1] = 0, n[1 + (o << 1)] = f, f > i && (i = f), o++
                        }
                        for (; o < a;) n[o << 1] = 0, n[1 + (o << 1)] = 0, o++;
                        return i
                    }, n.F.makeCodes = function(e, t) {
                        for (var r, i, o, a, f = n.F.U, s = e.length, l = f.bl_count, c = 0; c <= t; c++) l[c] = 0;
                        for (c = 1; c < s; c += 2) l[e[c]]++;
                        var u = f.next_code;
                        for (r = 0, l[0] = 0, i = 1; i <= t; i++) r = r + l[i - 1] << 1, u[i] = r;
                        for (o = 0; o < s; o += 2) 0 != (a = e[o + 1]) && (e[o] = u[a], u[a]++)
                    }, n.F.codes2map = function(e, t, r) {
                        for (var i = e.length, o = n.F.U.rev15, a = 0; a < i; a += 2)
                            if (0 != e[a + 1])
                                for (var f = a >> 1, s = e[a + 1], l = f << 4 | s, c = t - s, u = e[a] << c, h = u + (1 << c); u != h;) r[o[u] >>> 15 - t] = l, u++
                    }, n.F.revCodes = function(e, t) {
                        for (var r = n.F.U.rev15, i = 15 - t, o = 0; o < e.length; o += 2) {
                            var a = e[o] << t - e[o + 1];
                            e[o] = r[a] >>> i
                        }
                    }, n.F._putsE = function(e, t, r) {
                        r <<= 7 & t;
                        var n = t >>> 3;
                        e[n] |= r, e[n + 1] |= r >>> 8
                    }, n.F._putsF = function(e, t, r) {
                        r <<= 7 & t;
                        var n = t >>> 3;
                        e[n] |= r, e[n + 1] |= r >>> 8, e[n + 2] |= r >>> 16
                    }, n.F._bitsE = function(e, t, r) {
                        return (e[t >>> 3] | e[1 + (t >>> 3)] << 8) >>> (7 & t) & (1 << r) - 1
                    }, n.F._bitsF = function(e, t, r) {
                        return (e[t >>> 3] | e[1 + (t >>> 3)] << 8 | e[2 + (t >>> 3)] << 16) >>> (7 & t) & (1 << r) - 1
                    }, n.F._get17 = function(e, t) {
                        return (e[t >>> 3] | e[1 + (t >>> 3)] << 8 | e[2 + (t >>> 3)] << 16) >>> (7 & t)
                    }, n.F._get25 = function(e, t) {
                        return (e[t >>> 3] | e[1 + (t >>> 3)] << 8 | e[2 + (t >>> 3)] << 16 | e[3 + (t >>> 3)] << 24) >>> (7 & t)
                    }, n.F.U = (t = Uint16Array, r = Uint32Array, {
                        next_code: new t(16),
                        bl_count: new t(16),
                        ordr: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                        of0: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
                        exb: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
                        ldef: new t(32),
                        df0: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
                        dxb: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
                        ddef: new r(32),
                        flmap: new t(512),
                        fltree: [],
                        fdmap: new t(32),
                        fdtree: [],
                        lmap: new t(32768),
                        ltree: [],
                        ttree: [],
                        dmap: new t(32768),
                        dtree: [],
                        imap: new t(512),
                        itree: [],
                        rev15: new t(32768),
                        lhst: new r(286),
                        dhst: new r(30),
                        ihst: new r(19),
                        lits: new r(15e3),
                        strt: new t(65536),
                        prev: new t(32768)
                    }),
                    function() {
                        for (var e = n.F.U, t = 0; t < 32768; t++) {
                            var r = t;
                            r = (4278255360 & (r = (4042322160 & (r = (3435973836 & (r = (2863311530 & r) >>> 1 | (1431655765 & r) << 1)) >>> 2 | (858993459 & r) << 2)) >>> 4 | (252645135 & r) << 4)) >>> 8 | (16711935 & r) << 8, e.rev15[t] = (r >>> 16 | r << 16) >>> 17
                        }

                        function i(e, t, r) {
                            for (; 0 != t--;) e.push(0, r)
                        }
                        for (t = 0; t < 32; t++) e.ldef[t] = e.of0[t] << 3 | e.exb[t], e.ddef[t] = e.df0[t] << 4 | e.dxb[t];
                        i(e.fltree, 144, 8), i(e.fltree, 112, 9), i(e.fltree, 24, 7), i(e.fltree, 8, 8), n.F.makeCodes(e.fltree, 9), n.F.codes2map(e.fltree, 9, e.flmap), n.F.revCodes(e.fltree, 9), i(e.fdtree, 32, 5), n.F.makeCodes(e.fdtree, 5), n.F.codes2map(e.fdtree, 5, e.fdmap), n.F.revCodes(e.fdtree, 5), i(e.itree, 19, 0), i(e.ltree, 286, 0), i(e.dtree, 30, 0), i(e.ttree, 320, 0)
                    }()
            }();
            var f = function(e, t) {
                return t.forEach((function(t) {
                    t && "string" != typeof t && !Array.isArray(t) && Object.keys(t).forEach((function(r) {
                        if ("default" !== r && !(r in e)) {
                            var n = Object.getOwnPropertyDescriptor(t, r);
                            Object.defineProperty(e, r, n.get ? n : {
                                enumerable: !0,
                                get: function() {
                                    return t[r]
                                }
                            })
                        }
                    }))
                })), Object.freeze(e)
            }({
                __proto__: null,
                default: o
            }, [o]);
            const s = function() {
                var e = {
                    nextZero(e, t) {
                        for (; 0 != e[t];) t++;
                        return t
                    },
                    readUshort: (e, t) => e[t] << 8 | e[t + 1],
                    writeUshort(e, t, r) {
                        e[t] = r >> 8 & 255, e[t + 1] = 255 & r
                    },
                    readUint: (e, t) => 16777216 * e[t] + (e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]),
                    writeUint(e, t, r) {
                        e[t] = r >> 24 & 255, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r
                    },
                    readASCII(e, t, r) {
                        let n = "";
                        for (let i = 0; i < r; i++) n += String.fromCharCode(e[t + i]);
                        return n
                    },
                    writeASCII(e, t, r) {
                        for (let n = 0; n < r.length; n++) e[t + n] = r.charCodeAt(n)
                    },
                    readBytes(e, t, r) {
                        const n = [];
                        for (let i = 0; i < r; i++) n.push(e[t + i]);
                        return n
                    },
                    pad: e => e.length < 2 ? `0${e}` : e,
                    readUTF8(t, r, n) {
                        let i, o = "";
                        for (let a = 0; a < n; a++) o += `%${e.pad(t[r+a].toString(16))}`;
                        try {
                            i = decodeURIComponent(o)
                        } catch (i) {
                            return e.readASCII(t, r, n)
                        }
                        return i
                    }
                };

                function t(t, r, n, i) {
                    const a = r * n,
                        f = o(i),
                        s = Math.ceil(r * f / 8),
                        l = new Uint8Array(4 * a),
                        c = new Uint32Array(l.buffer),
                        {
                            ctype: u
                        } = i,
                        {
                            depth: h
                        } = i,
                        d = e.readUshort;
                    if (6 == u) {
                        const e = a << 2;
                        if (8 == h)
                            for (var A = 0; A < e; A += 4) l[A] = t[A], l[A + 1] = t[A + 1], l[A + 2] = t[A + 2], l[A + 3] = t[A + 3];
                        if (16 == h)
                            for (A = 0; A < e; A++) l[A] = t[A << 1]
                    } else if (2 == u) {
                        const e = i.tabs.tRNS;
                        if (null == e) {
                            if (8 == h)
                                for (A = 0; A < a; A++) {
                                    var g = 3 * A;
                                    c[A] = 255 << 24 | t[g + 2] << 16 | t[g + 1] << 8 | t[g]
                                }
                            if (16 == h)
                                for (A = 0; A < a; A++) g = 6 * A, c[A] = 255 << 24 | t[g + 4] << 16 | t[g + 2] << 8 | t[g]
                        } else {
                            var w = e[0];
                            const r = e[1],
                                n = e[2];
                            if (8 == h)
                                for (A = 0; A < a; A++) {
                                    var p = A << 2;
                                    g = 3 * A, c[A] = 255 << 24 | t[g + 2] << 16 | t[g + 1] << 8 | t[g], t[g] == w && t[g + 1] == r && t[g + 2] == n && (l[p + 3] = 0)
                                }
                            if (16 == h)
                                for (A = 0; A < a; A++) p = A << 2, g = 6 * A, c[A] = 255 << 24 | t[g + 4] << 16 | t[g + 2] << 8 | t[g], d(t, g) == w && d(t, g + 2) == r && d(t, g + 4) == n && (l[p + 3] = 0)
                        }
                    } else if (3 == u) {
                        const e = i.tabs.PLTE,
                            o = i.tabs.tRNS,
                            f = o ? o.length : 0;
                        if (1 == h)
                            for (var v = 0; v < n; v++) {
                                var m = v * s,
                                    b = v * r;
                                for (A = 0; A < r; A++) {
                                    p = b + A << 2;
                                    var y = 3 * (E = t[m + (A >> 3)] >> 7 - ((7 & A) << 0) & 1);
                                    l[p] = e[y], l[p + 1] = e[y + 1], l[p + 2] = e[y + 2], l[p + 3] = E < f ? o[E] : 255
                                }
                            }
                        if (2 == h)
                            for (v = 0; v < n; v++)
                                for (m = v * s, b = v * r, A = 0; A < r; A++) p = b + A << 2, y = 3 * (E = t[m + (A >> 2)] >> 6 - ((3 & A) << 1) & 3), l[p] = e[y], l[p + 1] = e[y + 1], l[p + 2] = e[y + 2], l[p + 3] = E < f ? o[E] : 255;
                        if (4 == h)
                            for (v = 0; v < n; v++)
                                for (m = v * s, b = v * r, A = 0; A < r; A++) p = b + A << 2, y = 3 * (E = t[m + (A >> 1)] >> 4 - ((1 & A) << 2) & 15), l[p] = e[y], l[p + 1] = e[y + 1], l[p + 2] = e[y + 2], l[p + 3] = E < f ? o[E] : 255;
                        if (8 == h)
                            for (A = 0; A < a; A++) {
                                var E;
                                p = A << 2, y = 3 * (E = t[A]), l[p] = e[y], l[p + 1] = e[y + 1], l[p + 2] = e[y + 2], l[p + 3] = E < f ? o[E] : 255
                            }
                    } else if (4 == u) {
                        if (8 == h)
                            for (A = 0; A < a; A++) {
                                p = A << 2;
                                var U = t[F = A << 1];
                                l[p] = U, l[p + 1] = U, l[p + 2] = U, l[p + 3] = t[F + 1]
                            }
                        if (16 == h)
                            for (A = 0; A < a; A++) {
                                var F;
                                p = A << 2, U = t[F = A << 2], l[p] = U, l[p + 1] = U, l[p + 2] = U, l[p + 3] = t[F + 2]
                            }
                    } else if (0 == u)
                        for (w = i.tabs.tRNS ? i.tabs.tRNS : -1, v = 0; v < n; v++) {
                            const e = v * s,
                                n = v * r;
                            if (1 == h)
                                for (var B = 0; B < r; B++) {
                                    var Q = (U = 255 * (t[e + (B >>> 3)] >>> 7 - (7 & B) & 1)) == 255 * w ? 0 : 255;
                                    c[n + B] = Q << 24 | U << 16 | U << 8 | U
                                } else if (2 == h)
                                    for (B = 0; B < r; B++) Q = (U = 85 * (t[e + (B >>> 2)] >>> 6 - ((3 & B) << 1) & 3)) == 85 * w ? 0 : 255, c[n + B] = Q << 24 | U << 16 | U << 8 | U;
                                else if (4 == h)
                                for (B = 0; B < r; B++) Q = (U = 17 * (t[e + (B >>> 1)] >>> 4 - ((1 & B) << 2) & 15)) == 17 * w ? 0 : 255, c[n + B] = Q << 24 | U << 16 | U << 8 | U;
                            else if (8 == h)
                                for (B = 0; B < r; B++) Q = (U = t[e + B]) == w ? 0 : 255, c[n + B] = Q << 24 | U << 16 | U << 8 | U;
                            else if (16 == h)
                                for (B = 0; B < r; B++) U = t[e + (B << 1)], Q = d(t, e + (B << 1)) == w ? 0 : 255, c[n + B] = Q << 24 | U << 16 | U << 8 | U
                        }
                    return l
                }

                function r(e, t, r, f) {
                    const s = o(e),
                        l = Math.ceil(r * s / 8),
                        c = new Uint8Array((l + 1 + e.interlace) * f);
                    return t = e.tabs.CgBI ? i(t, c) : n(t, c), 0 == e.interlace ? t = a(t, e, 0, r, f) : 1 == e.interlace && (t = function(e, t) {
                        const r = t.width,
                            n = t.height,
                            i = o(t),
                            f = i >> 3,
                            s = Math.ceil(r * i / 8),
                            l = new Uint8Array(n * s);
                        let c = 0;
                        const u = [0, 0, 4, 0, 2, 0, 1],
                            h = [0, 4, 0, 2, 0, 1, 0],
                            d = [8, 8, 8, 4, 4, 2, 2],
                            A = [8, 8, 4, 4, 2, 2, 1];
                        let g = 0;
                        for (; g < 7;) {
                            const o = d[g],
                                p = A[g];
                            let v = 0,
                                m = 0,
                                b = u[g];
                            for (; b < n;) b += o, m++;
                            let y = h[g];
                            for (; y < r;) y += p, v++;
                            const E = Math.ceil(v * i / 8);
                            a(e, t, c, v, m);
                            let U = 0,
                                F = u[g];
                            for (; F < n;) {
                                let t = h[g],
                                    n = c + U * E << 3;
                                for (; t < r;) {
                                    var w;
                                    if (1 == i && (w = (w = e[n >> 3]) >> 7 - (7 & n) & 1, l[F * s + (t >> 3)] |= w << 7 - ((7 & t) << 0)), 2 == i && (w = (w = e[n >> 3]) >> 6 - (7 & n) & 3, l[F * s + (t >> 2)] |= w << 6 - ((3 & t) << 1)), 4 == i && (w = (w = e[n >> 3]) >> 4 - (7 & n) & 15, l[F * s + (t >> 1)] |= w << 4 - ((1 & t) << 2)), i >= 8) {
                                        const r = F * s + t * f;
                                        for (let t = 0; t < f; t++) l[r + t] = e[(n >> 3) + t]
                                    }
                                    n += i, t += p
                                }
                                U++, F += o
                            }
                            v * m != 0 && (c += m * (1 + E)), g += 1
                        }
                        return l
                    }(t, e)), t
                }

                function n(e, t) {
                    return i(new Uint8Array(e.buffer, 2, e.length - 6), t)
                }
                var i = function() {
                    const e = {
                        H: {}
                    };
                    return e.H.N = function(t, r) {
                            const n = Uint8Array;
                            let i, o, a = 0,
                                f = 0,
                                s = 0,
                                l = 0,
                                c = 0,
                                u = 0,
                                h = 0,
                                d = 0,
                                A = 0;
                            if (3 == t[0] && 0 == t[1]) return r || new n(0);
                            const g = e.H,
                                w = g.b,
                                p = g.e,
                                v = g.R,
                                m = g.n,
                                b = g.A,
                                y = g.Z,
                                E = g.m,
                                U = null == r;
                            for (U && (r = new n(t.length >>> 2 << 5)); 0 == a;)
                                if (a = w(t, A, 1), f = w(t, A + 1, 2), A += 3, 0 != f) {
                                    if (U && (r = e.H.W(r, d + (1 << 17))), 1 == f && (i = E.J, o = E.h, u = 511, h = 31), 2 == f) {
                                        s = p(t, A, 5) + 257, l = p(t, A + 5, 5) + 1, c = p(t, A + 10, 4) + 4, A += 14;
                                        let e = 1;
                                        for (var F = 0; F < 38; F += 2) E.Q[F] = 0, E.Q[F + 1] = 0;
                                        for (F = 0; F < c; F++) {
                                            const r = p(t, A + 3 * F, 3);
                                            E.Q[1 + (E.X[F] << 1)] = r, r > e && (e = r)
                                        }
                                        A += 3 * c, m(E.Q, e), b(E.Q, e, E.u), i = E.w, o = E.d, A = v(E.u, (1 << e) - 1, s + l, t, A, E.v);
                                        const r = g.V(E.v, 0, s, E.C);
                                        u = (1 << r) - 1;
                                        const n = g.V(E.v, s, l, E.D);
                                        h = (1 << n) - 1, m(E.C, r), b(E.C, r, i), m(E.D, n), b(E.D, n, o)
                                    }
                                    for (;;) {
                                        const e = i[y(t, A) & u];
                                        A += 15 & e;
                                        const n = e >>> 4;
                                        if (n >>> 8 == 0) r[d++] = n;
                                        else {
                                            if (256 == n) break; {
                                                let e = d + n - 254;
                                                if (n > 264) {
                                                    const r = E.q[n - 257];
                                                    e = d + (r >>> 3) + p(t, A, 7 & r), A += 7 & r
                                                }
                                                const i = o[y(t, A) & h];
                                                A += 15 & i;
                                                const a = i >>> 4,
                                                    f = E.c[a],
                                                    s = (f >>> 4) + w(t, A, 15 & f);
                                                for (A += 15 & f; d < e;) r[d] = r[d++ - s], r[d] = r[d++ - s], r[d] = r[d++ - s], r[d] = r[d++ - s];
                                                d = e
                                            }
                                        }
                                    }
                                } else {
                                    0 != (7 & A) && (A += 8 - (7 & A));
                                    const i = 4 + (A >>> 3),
                                        o = t[i - 4] | t[i - 3] << 8;
                                    U && (r = e.H.W(r, d + o)), r.set(new n(t.buffer, t.byteOffset + i, o), d), A = i + o << 3, d += o
                                }
                            return r.length == d ? r : r.slice(0, d)
                        }, e.H.W = function(e, t) {
                            const r = e.length;
                            if (t <= r) return e;
                            const n = new Uint8Array(r << 1);
                            return n.set(e, 0), n
                        }, e.H.R = function(t, r, n, i, o, a) {
                            const f = e.H.e,
                                s = e.H.Z;
                            let l = 0;
                            for (; l < n;) {
                                const e = t[s(i, o) & r];
                                o += 15 & e;
                                const n = e >>> 4;
                                if (n <= 15) a[l] = n, l++;
                                else {
                                    let e = 0,
                                        t = 0;
                                    16 == n ? (t = 3 + f(i, o, 2), o += 2, e = a[l - 1]) : 17 == n ? (t = 3 + f(i, o, 3), o += 3) : 18 == n && (t = 11 + f(i, o, 7), o += 7);
                                    const r = l + t;
                                    for (; l < r;) a[l] = e, l++
                                }
                            }
                            return o
                        }, e.H.V = function(e, t, r, n) {
                            let i = 0,
                                o = 0;
                            const a = n.length >>> 1;
                            for (; o < r;) {
                                const r = e[o + t];
                                n[o << 1] = 0, n[1 + (o << 1)] = r, r > i && (i = r), o++
                            }
                            for (; o < a;) n[o << 1] = 0, n[1 + (o << 1)] = 0, o++;
                            return i
                        }, e.H.n = function(t, r) {
                            const n = e.H.m,
                                i = t.length;
                            let o, a, f, s;
                            const l = n.j;
                            for (var c = 0; c <= r; c++) l[c] = 0;
                            for (c = 1; c < i; c += 2) l[t[c]]++;
                            const u = n.K;
                            for (o = 0, l[0] = 0, a = 1; a <= r; a++) o = o + l[a - 1] << 1, u[a] = o;
                            for (f = 0; f < i; f += 2) s = t[f + 1], 0 != s && (t[f] = u[s], u[s]++)
                        }, e.H.A = function(t, r, n) {
                            const i = t.length,
                                o = e.H.m.r;
                            for (let e = 0; e < i; e += 2)
                                if (0 != t[e + 1]) {
                                    const i = e >> 1,
                                        a = t[e + 1],
                                        f = i << 4 | a,
                                        s = r - a;
                                    let l = t[e] << s;
                                    const c = l + (1 << s);
                                    for (; l != c;) n[o[l] >>> 15 - r] = f, l++
                                }
                        }, e.H.l = function(t, r) {
                            const n = e.H.m.r,
                                i = 15 - r;
                            for (let e = 0; e < t.length; e += 2) {
                                const o = t[e] << r - t[e + 1];
                                t[e] = n[o] >>> i
                            }
                        }, e.H.M = function(e, t, r) {
                            r <<= 7 & t;
                            const n = t >>> 3;
                            e[n] |= r, e[n + 1] |= r >>> 8
                        }, e.H.I = function(e, t, r) {
                            r <<= 7 & t;
                            const n = t >>> 3;
                            e[n] |= r, e[n + 1] |= r >>> 8, e[n + 2] |= r >>> 16
                        }, e.H.e = function(e, t, r) {
                            return (e[t >>> 3] | e[1 + (t >>> 3)] << 8) >>> (7 & t) & (1 << r) - 1
                        }, e.H.b = function(e, t, r) {
                            return (e[t >>> 3] | e[1 + (t >>> 3)] << 8 | e[2 + (t >>> 3)] << 16) >>> (7 & t) & (1 << r) - 1
                        }, e.H.Z = function(e, t) {
                            return (e[t >>> 3] | e[1 + (t >>> 3)] << 8 | e[2 + (t >>> 3)] << 16) >>> (7 & t)
                        }, e.H.i = function(e, t) {
                            return (e[t >>> 3] | e[1 + (t >>> 3)] << 8 | e[2 + (t >>> 3)] << 16 | e[3 + (t >>> 3)] << 24) >>> (7 & t)
                        }, e.H.m = function() {
                            const e = Uint16Array,
                                t = Uint32Array;
                            return {
                                K: new e(16),
                                j: new e(16),
                                X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                                S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
                                T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
                                q: new e(32),
                                p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
                                z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
                                c: new t(32),
                                J: new e(512),
                                _: [],
                                h: new e(32),
                                $: [],
                                w: new e(32768),
                                C: [],
                                v: [],
                                d: new e(32768),
                                D: [],
                                u: new e(512),
                                Q: [],
                                r: new e(32768),
                                s: new t(286),
                                Y: new t(30),
                                a: new t(19),
                                t: new t(15e3),
                                k: new e(65536),
                                g: new e(32768)
                            }
                        }(),
                        function() {
                            const t = e.H.m;
                            for (var r = 0; r < 32768; r++) {
                                let e = r;
                                e = (2863311530 & e) >>> 1 | (1431655765 & e) << 1, e = (3435973836 & e) >>> 2 | (858993459 & e) << 2, e = (4042322160 & e) >>> 4 | (252645135 & e) << 4, e = (4278255360 & e) >>> 8 | (16711935 & e) << 8, t.r[r] = (e >>> 16 | e << 16) >>> 17
                            }

                            function n(e, t, r) {
                                for (; 0 != t--;) e.push(0, r)
                            }
                            for (r = 0; r < 32; r++) t.q[r] = t.S[r] << 3 | t.T[r], t.c[r] = t.p[r] << 4 | t.z[r];
                            n(t._, 144, 8), n(t._, 112, 9), n(t._, 24, 7), n(t._, 8, 8), e.H.n(t._, 9), e.H.A(t._, 9, t.J), e.H.l(t._, 9), n(t.$, 32, 5), e.H.n(t.$, 5), e.H.A(t.$, 5, t.h), e.H.l(t.$, 5), n(t.Q, 19, 0), n(t.C, 286, 0), n(t.D, 30, 0), n(t.v, 320, 0)
                        }(), e.H.N
                }();

                function o(e) {
                    return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth
                }

                function a(e, t, r, n, i) {
                    let a = o(t);
                    const s = Math.ceil(n * a / 8);
                    let l, c;
                    a = Math.ceil(a / 8);
                    let u = e[r],
                        h = 0;
                    if (u > 1 && (e[r] = [0, 0, 1][u - 2]), 3 == u)
                        for (h = a; h < s; h++) e[h + 1] = e[h + 1] + (e[h + 1 - a] >>> 1) & 255;
                    for (let o = 0; o < i; o++)
                        if (l = r + o * s, c = l + o + 1, u = e[c - 1], h = 0, 0 == u)
                            for (; h < s; h++) e[l + h] = e[c + h];
                        else if (1 == u) {
                        for (; h < a; h++) e[l + h] = e[c + h];
                        for (; h < s; h++) e[l + h] = e[c + h] + e[l + h - a]
                    } else if (2 == u)
                        for (; h < s; h++) e[l + h] = e[c + h] + e[l + h - s];
                    else if (3 == u) {
                        for (; h < a; h++) e[l + h] = e[c + h] + (e[l + h - s] >>> 1);
                        for (; h < s; h++) e[l + h] = e[c + h] + (e[l + h - s] + e[l + h - a] >>> 1)
                    } else {
                        for (; h < a; h++) e[l + h] = e[c + h] + f(0, e[l + h - s], 0);
                        for (; h < s; h++) e[l + h] = e[c + h] + f(e[l + h - a], e[l + h - s], e[l + h - a - s])
                    }
                    return e
                }

                function f(e, t, r) {
                    const n = e + t - r,
                        i = n - e,
                        o = n - t,
                        a = n - r;
                    return i * i <= o * o && i * i <= a * a ? e : o * o <= a * a ? t : r
                }

                function s(t, r, n) {
                    n.width = e.readUint(t, r), r += 4, n.height = e.readUint(t, r), r += 4, n.depth = t[r], r++, n.ctype = t[r], r++, n.compress = t[r], r++, n.filter = t[r], r++, n.interlace = t[r], r++
                }

                function l(e, t, r, n, i, o, a, f, s) {
                    const l = Math.min(t, i),
                        c = Math.min(r, o);
                    let u = 0,
                        h = 0;
                    for (let y = 0; y < c; y++)
                        for (let r = 0; r < l; r++)
                            if (a >= 0 && f >= 0 ? (u = y * t + r << 2, h = (f + y) * i + a + r << 2) : (u = (-f + y) * t - a + r << 2, h = y * i + r << 2), 0 == s) n[h] = e[u], n[h + 1] = e[u + 1], n[h + 2] = e[u + 2], n[h + 3] = e[u + 3];
                            else if (1 == s) {
                        var d = e[u + 3] * (1 / 255),
                            A = e[u] * d,
                            g = e[u + 1] * d,
                            w = e[u + 2] * d,
                            p = n[h + 3] * (1 / 255),
                            v = n[h] * p,
                            m = n[h + 1] * p,
                            b = n[h + 2] * p;
                        const t = 1 - d,
                            r = d + p * t,
                            i = 0 == r ? 0 : 1 / r;
                        n[h + 3] = 255 * r, n[h + 0] = (A + v * t) * i, n[h + 1] = (g + m * t) * i, n[h + 2] = (w + b * t) * i
                    } else if (2 == s) d = e[u + 3], A = e[u], g = e[u + 1], w = e[u + 2], p = n[h + 3], v = n[h], m = n[h + 1], b = n[h + 2], d == p && A == v && g == m && w == b ? (n[h] = 0, n[h + 1] = 0, n[h + 2] = 0, n[h + 3] = 0) : (n[h] = A, n[h + 1] = g, n[h + 2] = w, n[h + 3] = d);
                    else if (3 == s) {
                        if (d = e[u + 3], A = e[u], g = e[u + 1], w = e[u + 2], p = n[h + 3], v = n[h], m = n[h + 1], b = n[h + 2], d == p && A == v && g == m && w == b) continue;
                        if (d < 220 && p > 20) return !1
                    }
                    return !0
                }
                return {
                    decode: function(t) {
                        const o = new Uint8Array(t);
                        let a = 8;
                        const f = e,
                            l = f.readUshort,
                            c = f.readUint,
                            u = {
                                tabs: {},
                                frames: []
                            },
                            h = new Uint8Array(o.length);
                        let d, A = 0,
                            g = 0;
                        const w = [137, 80, 78, 71, 13, 10, 26, 10];
                        for (var p = 0; p < 8; p++)
                            if (o[p] != w[p]) throw "The input is not a PNG file!";
                        for (; a < o.length;) {
                            const t = f.readUint(o, a);
                            a += 4;
                            const w = f.readASCII(o, a, 4);
                            if (a += 4, "IHDR" == w) s(o, a, u);
                            else if ("iCCP" == w) {
                                for (var v = a; 0 != o[v];) v++;
                                f.readASCII(o, a, v - a), o[v + 1];
                                const r = o.slice(v + 2, a + t);
                                let s = null;
                                try {
                                    s = n(r)
                                } catch (e) {
                                    s = i(r)
                                }
                                u.tabs[w] = s
                            } else if ("CgBI" == w) u.tabs[w] = o.slice(a, a + 4);
                            else if ("IDAT" == w) {
                                for (p = 0; p < t; p++) h[A + p] = o[a + p];
                                A += t
                            } else if ("acTL" == w) u.tabs[w] = {
                                num_frames: c(o, a),
                                num_plays: c(o, a + 4)
                            }, d = new Uint8Array(o.length);
                            else if ("fcTL" == w) {
                                0 != g && ((F = u.frames[u.frames.length - 1]).data = r(u, d.slice(0, g), F.rect.width, F.rect.height), g = 0);
                                const e = {
                                    x: c(o, a + 12),
                                    y: c(o, a + 16),
                                    width: c(o, a + 4),
                                    height: c(o, a + 8)
                                };
                                let t = l(o, a + 22);
                                t = l(o, a + 20) / (0 == t ? 100 : t);
                                const n = {
                                    rect: e,
                                    delay: Math.round(1e3 * t),
                                    dispose: o[a + 24],
                                    blend: o[a + 25]
                                };
                                u.frames.push(n)
                            } else if ("fdAT" == w) {
                                for (p = 0; p < t - 4; p++) d[g + p] = o[a + p + 4];
                                g += t - 4
                            } else if ("pHYs" == w) u.tabs[w] = [f.readUint(o, a), f.readUint(o, a + 4), o[a + 8]];
                            else if ("cHRM" == w)
                                for (u.tabs[w] = [], p = 0; p < 8; p++) u.tabs[w].push(f.readUint(o, a + 4 * p));
                            else if ("tEXt" == w || "zTXt" == w) {
                                null == u.tabs[w] && (u.tabs[w] = {});
                                var m = f.nextZero(o, a),
                                    b = f.readASCII(o, a, m - a),
                                    y = a + t - m - 1;
                                if ("tEXt" == w) U = f.readASCII(o, m + 1, y);
                                else {
                                    var E = n(o.slice(m + 2, m + 2 + y));
                                    U = f.readUTF8(E, 0, E.length)
                                }
                                u.tabs[w][b] = U
                            } else if ("iTXt" == w) {
                                null == u.tabs[w] && (u.tabs[w] = {}), m = 0, v = a, m = f.nextZero(o, v), b = f.readASCII(o, v, m - v);
                                const e = o[v = m + 1];
                                var U;
                                o[v + 1], v += 2, m = f.nextZero(o, v), f.readASCII(o, v, m - v), v = m + 1, m = f.nextZero(o, v), f.readUTF8(o, v, m - v), y = t - ((v = m + 1) - a), 0 == e ? U = f.readUTF8(o, v, y) : (E = n(o.slice(v, v + y)), U = f.readUTF8(E, 0, E.length)), u.tabs[w][b] = U
                            } else if ("PLTE" == w) u.tabs[w] = f.readBytes(o, a, t);
                            else if ("hIST" == w) {
                                const e = u.tabs.PLTE.length / 3;
                                for (u.tabs[w] = [], p = 0; p < e; p++) u.tabs[w].push(l(o, a + 2 * p))
                            } else if ("tRNS" == w) 3 == u.ctype ? u.tabs[w] = f.readBytes(o, a, t) : 0 == u.ctype ? u.tabs[w] = l(o, a) : 2 == u.ctype && (u.tabs[w] = [l(o, a), l(o, a + 2), l(o, a + 4)]);
                            else if ("gAMA" == w) u.tabs[w] = f.readUint(o, a) / 1e5;
                            else if ("sRGB" == w) u.tabs[w] = o[a];
                            else if ("bKGD" == w) 0 == u.ctype || 4 == u.ctype ? u.tabs[w] = [l(o, a)] : 2 == u.ctype || 6 == u.ctype ? u.tabs[w] = [l(o, a), l(o, a + 2), l(o, a + 4)] : 3 == u.ctype && (u.tabs[w] = o[a]);
                            else if ("IEND" == w) break;
                            a += t, f.readUint(o, a), a += 4
                        }
                        var F;
                        return 0 != g && ((F = u.frames[u.frames.length - 1]).data = r(u, d.slice(0, g), F.rect.width, F.rect.height)), u.data = r(u, h, u.width, u.height), delete u.compress, delete u.interlace, delete u.filter, u
                    },
                    toRGBA8: function(e) {
                        const r = e.width,
                            n = e.height;
                        if (null == e.tabs.acTL) return [t(e.data, r, n, e).buffer];
                        const i = [];
                        null == e.frames[0].data && (e.frames[0].data = e.data);
                        const o = r * n * 4,
                            a = new Uint8Array(o),
                            f = new Uint8Array(o),
                            s = new Uint8Array(o);
                        for (let u = 0; u < e.frames.length; u++) {
                            const h = e.frames[u],
                                d = h.rect.x,
                                A = h.rect.y,
                                g = h.rect.width,
                                w = h.rect.height,
                                p = t(h.data, g, w, e);
                            if (0 != u)
                                for (var c = 0; c < o; c++) s[c] = a[c];
                            if (0 == h.blend ? l(p, g, w, a, r, n, d, A, 0) : 1 == h.blend && l(p, g, w, a, r, n, d, A, 1), i.push(a.buffer.slice(0)), 0 == h.dispose);
                            else if (1 == h.dispose) l(f, g, w, a, r, n, d, A, 0);
                            else if (2 == h.dispose)
                                for (c = 0; c < o; c++) a[c] = s[c]
                        }
                        return i
                    },
                    _paeth: f,
                    _copyTile: l,
                    _bin: e
                }
            }();
            ! function() {
                const {
                    _copyTile: e
                } = s, {
                    _bin: t
                } = s, r = s._paeth;
                var n = {
                    table: function() {
                        const e = new Uint32Array(256);
                        for (let t = 0; t < 256; t++) {
                            let r = t;
                            for (let e = 0; e < 8; e++) 1 & r ? r = 3988292384 ^ r >>> 1 : r >>>= 1;
                            e[t] = r
                        }
                        return e
                    }(),
                    update(e, t, r, i) {
                        for (let o = 0; o < i; o++) e = n.table[255 & (e ^ t[r + o])] ^ e >>> 8;
                        return e
                    },
                    crc: (e, t, r) => 4294967295 ^ n.update(4294967295, e, t, r)
                };

                function i(e, t, r, n) {
                    t[r] += e[0] * n >> 4, t[r + 1] += e[1] * n >> 4, t[r + 2] += e[2] * n >> 4, t[r + 3] += e[3] * n >> 4
                }

                function o(e) {
                    return Math.max(0, Math.min(255, e))
                }

                function a(e, t) {
                    const r = e[0] - t[0],
                        n = e[1] - t[1],
                        i = e[2] - t[2],
                        o = e[3] - t[3];
                    return r * r + n * n + i * i + o * o
                }

                function l(e, t, r, n, f, s, l) {
                    null == l && (l = 1);
                    const c = n.length,
                        u = [];
                    for (var h = 0; h < c; h++) {
                        const e = n[h];
                        u.push([e >>> 0 & 255, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255])
                    }
                    for (h = 0; h < c; h++) {
                        let e = 4294967295;
                        for (var d = 0, A = 0; A < c; A++) {
                            var g = a(u[h], u[A]);
                            A != h && g < e && (e = g, d = A)
                        }
                    }
                    const w = new Uint32Array(f.buffer),
                        p = new Int16Array(t * r * 4),
                        v = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
                    for (h = 0; h < v.length; h++) v[h] = 255 * ((v[h] + .5) / 16 - .5);
                    for (let b = 0; b < r; b++)
                        for (let f = 0; f < t; f++) {
                            var m;
                            h = 4 * (b * t + f), 2 != l ? m = [o(e[h] + p[h]), o(e[h + 1] + p[h + 1]), o(e[h + 2] + p[h + 2]), o(e[h + 3] + p[h + 3])] : (g = v[4 * (3 & b) + (3 & f)], m = [o(e[h] + g), o(e[h + 1] + g), o(e[h + 2] + g), o(e[h + 3] + g)]), d = 0;
                            let y = 16777215;
                            for (A = 0; A < c; A++) {
                                const e = a(m, u[A]);
                                e < y && (y = e, d = A)
                            }
                            const E = u[d],
                                U = [m[0] - E[0], m[1] - E[1], m[2] - E[2], m[3] - E[3]];
                            1 == l && (f != t - 1 && i(U, p, h + 4, 7), b != r - 1 && (0 != f && i(U, p, h + 4 * t - 4, 3), i(U, p, h + 4 * t, 5), f != t - 1 && i(U, p, h + 4 * t + 4, 1))), s[h >> 2] = d, w[h >> 2] = n[d]
                        }
                }

                function c(e, r, i, o, a) {
                    null == a && (a = {});
                    const {
                        crc: f
                    } = n, s = t.writeUint, l = t.writeUshort, c = t.writeASCII;
                    let u = 8;
                    const h = e.frames.length > 1;
                    let d, A = !1,
                        g = 33 + (h ? 20 : 0);
                    if (null != a.sRGB && (g += 13), null != a.pHYs && (g += 21), null != a.iCCP && (d = pako.deflate(a.iCCP), g += 21 + d.length + 4), 3 == e.ctype) {
                        for (var w = e.plte.length, p = 0; p < w; p++) e.plte[p] >>> 24 != 255 && (A = !0);
                        g += 8 + 3 * w + 4 + (A ? 8 + 1 * w + 4 : 0)
                    }
                    for (var v = 0; v < e.frames.length; v++) h && (g += 38), g += (E = e.frames[v]).cimg.length + 12, 0 != v && (g += 4);
                    g += 12;
                    const m = new Uint8Array(g),
                        b = [137, 80, 78, 71, 13, 10, 26, 10];
                    for (p = 0; p < 8; p++) m[p] = b[p];
                    if (s(m, u, 13), u += 4, c(m, u, "IHDR"), u += 4, s(m, u, r), u += 4, s(m, u, i), u += 4, m[u] = e.depth, u++, m[u] = e.ctype, u++, m[u] = 0, u++, m[u] = 0, u++, m[u] = 0, u++, s(m, u, f(m, u - 17, 17)), u += 4, null != a.sRGB && (s(m, u, 1), u += 4, c(m, u, "sRGB"), u += 4, m[u] = a.sRGB, u++, s(m, u, f(m, u - 5, 5)), u += 4), null != a.iCCP) {
                        const e = 13 + d.length;
                        s(m, u, e), u += 4, c(m, u, "iCCP"), u += 4, c(m, u, "ICC profile"), u += 11, u += 2, m.set(d, u), u += d.length, s(m, u, f(m, u - (e + 4), e + 4)), u += 4
                    }
                    if (null != a.pHYs && (s(m, u, 9), u += 4, c(m, u, "pHYs"), u += 4, s(m, u, a.pHYs[0]), u += 4, s(m, u, a.pHYs[1]), u += 4, m[u] = a.pHYs[2], u++, s(m, u, f(m, u - 13, 13)), u += 4), h && (s(m, u, 8), u += 4, c(m, u, "acTL"), u += 4, s(m, u, e.frames.length), u += 4, s(m, u, null != a.loop ? a.loop : 0), u += 4, s(m, u, f(m, u - 12, 12)), u += 4), 3 == e.ctype) {
                        for (s(m, u, 3 * (w = e.plte.length)), u += 4, c(m, u, "PLTE"), u += 4, p = 0; p < w; p++) {
                            const t = 3 * p,
                                r = e.plte[p],
                                n = 255 & r,
                                i = r >>> 8 & 255,
                                o = r >>> 16 & 255;
                            m[u + t + 0] = n, m[u + t + 1] = i, m[u + t + 2] = o
                        }
                        if (u += 3 * w, s(m, u, f(m, u - 3 * w - 4, 3 * w + 4)), u += 4, A) {
                            for (s(m, u, w), u += 4, c(m, u, "tRNS"), u += 4, p = 0; p < w; p++) m[u + p] = e.plte[p] >>> 24 & 255;
                            u += w, s(m, u, f(m, u - w - 4, w + 4)), u += 4
                        }
                    }
                    let y = 0;
                    for (v = 0; v < e.frames.length; v++) {
                        var E = e.frames[v];
                        h && (s(m, u, 26), u += 4, c(m, u, "fcTL"), u += 4, s(m, u, y++), u += 4, s(m, u, E.rect.width), u += 4, s(m, u, E.rect.height), u += 4, s(m, u, E.rect.x), u += 4, s(m, u, E.rect.y), u += 4, l(m, u, o[v]), u += 2, l(m, u, 1e3), u += 2, m[u] = E.dispose, u++, m[u] = E.blend, u++, s(m, u, f(m, u - 30, 30)), u += 4);
                        const t = E.cimg;
                        s(m, u, (w = t.length) + (0 == v ? 0 : 4)), u += 4;
                        const r = u;
                        c(m, u, 0 == v ? "IDAT" : "fdAT"), u += 4, 0 != v && (s(m, u, y++), u += 4), m.set(t, u), u += w, s(m, u, f(m, r, u - r)), u += 4
                    }
                    return s(m, u, 0), u += 4, c(m, u, "IEND"), u += 4, s(m, u, f(m, u - 4, 4)), u += 4, m.buffer
                }

                function u(e, t, r) {
                    for (let n = 0; n < e.frames.length; n++) {
                        const i = e.frames[n];
                        i.rect.width;
                        const o = i.rect.height,
                            a = new Uint8Array(o * i.bpl + o);
                        i.cimg = g(i.img, o, i.bpp, i.bpl, a, t, r)
                    }
                }

                function h(t, r, n, i, o) {
                    const a = o[0],
                        f = o[1],
                        s = o[2],
                        c = o[3],
                        u = o[4],
                        h = o[5];
                    let g = 6,
                        w = 8,
                        v = 255;
                    for (var m = 0; m < t.length; m++) {
                        const e = new Uint8Array(t[m]);
                        for (var b = e.length, y = 0; y < b; y += 4) v &= e[y + 3]
                    }
                    const E = 255 != v,
                        U = function(t, r, n, i, o, a) {
                            const f = [];
                            for (var s = 0; s < t.length; s++) {
                                const u = new Uint8Array(t[s]),
                                    d = new Uint32Array(u.buffer);
                                var l;
                                let g = 0,
                                    w = 0,
                                    p = r,
                                    v = n,
                                    m = i ? 1 : 0;
                                if (0 != s) {
                                    const b = a || i || 1 == s || 0 != f[s - 2].dispose ? 1 : 2;
                                    let y = 0,
                                        E = 1e9;
                                    for (let e = 0; e < b; e++) {
                                        var c = new Uint8Array(t[s - 1 - e]);
                                        const i = new Uint32Array(t[s - 1 - e]);
                                        let a = r,
                                            f = n,
                                            l = -1,
                                            u = -1;
                                        for (let e = 0; e < n; e++)
                                            for (let t = 0; t < r; t++) d[h = e * r + t] != i[h] && (t < a && (a = t), t > l && (l = t), e < f && (f = e), e > u && (u = e)); - 1 == l && (a = f = l = u = 0), o && (1 == (1 & a) && a--, 1 == (1 & f) && f--);
                                        const A = (l - a + 1) * (u - f + 1);
                                        A < E && (E = A, y = e, g = a, w = f, p = l - a + 1, v = u - f + 1)
                                    }
                                    c = new Uint8Array(t[s - 1 - y]), 1 == y && (f[s - 1].dispose = 2), l = new Uint8Array(p * v * 4), e(c, r, n, l, p, v, -g, -w, 0), m = e(u, r, n, l, p, v, -g, -w, 3) ? 1 : 0, 1 == m ? A(u, r, n, l, {
                                        x: g,
                                        y: w,
                                        width: p,
                                        height: v
                                    }) : e(u, r, n, l, p, v, -g, -w, 0)
                                } else l = u.slice(0);
                                f.push({
                                    rect: {
                                        x: g,
                                        y: w,
                                        width: p,
                                        height: v
                                    },
                                    img: l,
                                    blend: m,
                                    dispose: 0
                                })
                            }
                            if (i)
                                for (s = 0; s < f.length; s++) {
                                    if (1 == (g = f[s]).blend) continue;
                                    const e = g.rect,
                                        i = f[s - 1].rect,
                                        a = Math.min(e.x, i.x),
                                        l = Math.min(e.y, i.y),
                                        c = {
                                            x: a,
                                            y: l,
                                            width: Math.max(e.x + e.width, i.x + i.width) - a,
                                            height: Math.max(e.y + e.height, i.y + i.height) - l
                                        };
                                    f[s - 1].dispose = 1, s - 1 != 0 && d(t, r, n, f, s - 1, c, o), d(t, r, n, f, s, c, o)
                                }
                            let u = 0;
                            if (1 != t.length)
                                for (var h = 0; h < f.length; h++) {
                                    var g;
                                    u += (g = f[h]).rect.width * g.rect.height
                                }
                            return f
                        }(t, r, n, a, f, s),
                        F = {},
                        B = [],
                        Q = [];
                    if (0 != i) {
                        const e = [];
                        for (y = 0; y < U.length; y++) e.push(U[y].img.buffer);
                        const t = function(e) {
                                let t = 0;
                                for (var r = 0; r < e.length; r++) t += e[r].byteLength;
                                const n = new Uint8Array(t);
                                let i = 0;
                                for (r = 0; r < e.length; r++) {
                                    const t = new Uint8Array(e[r]),
                                        o = t.length;
                                    for (let e = 0; e < o; e += 4) {
                                        let r = t[e],
                                            o = t[e + 1],
                                            a = t[e + 2];
                                        const f = t[e + 3];
                                        0 == f && (r = o = a = 0), n[i + e] = r, n[i + e + 1] = o, n[i + e + 2] = a, n[i + e + 3] = f
                                    }
                                    i += o
                                }
                                return n.buffer
                            }(e),
                            r = p(t, i);
                        for (y = 0; y < r.plte.length; y++) B.push(r.plte[y].est.rgba);
                        let n = 0;
                        for (y = 0; y < U.length; y++) {
                            const e = (C = U[y]).img.length;
                            var _ = new Uint8Array(r.inds.buffer, n >> 2, e >> 2);
                            Q.push(_);
                            const t = new Uint8Array(r.abuf, n, e);
                            h && l(C.img, C.rect.width, C.rect.height, B, t, _), C.img.set(t), n += e
                        }
                    } else
                        for (m = 0; m < U.length; m++) {
                            var C = U[m];
                            const e = new Uint32Array(C.img.buffer);
                            var I = C.rect.width;
                            for (b = e.length, _ = new Uint8Array(b), Q.push(_), y = 0; y < b; y++) {
                                const t = e[y];
                                if (0 != y && t == e[y - 1]) _[y] = _[y - 1];
                                else if (y > I && t == e[y - I]) _[y] = _[y - I];
                                else {
                                    let e = F[t];
                                    if (null == e && (F[t] = e = B.length, B.push(t), B.length >= 300)) break;
                                    _[y] = e
                                }
                            }
                        }
                    const M = B.length;
                    for (M <= 256 && 0 == u && (w = M <= 2 ? 1 : M <= 4 ? 2 : M <= 16 ? 4 : 8, w = Math.max(w, c)), m = 0; m < U.length; m++) {
                        (C = U[m]).rect.x, C.rect.y, I = C.rect.width;
                        const e = C.rect.height;
                        let t = C.img;
                        new Uint32Array(t.buffer);
                        let r = 4 * I,
                            n = 4;
                        if (M <= 256 && 0 == u) {
                            r = Math.ceil(w * I / 8);
                            var R = new Uint8Array(r * e);
                            const i = Q[m];
                            for (let t = 0; t < e; t++) {
                                y = t * r;
                                const e = t * I;
                                if (8 == w)
                                    for (var S = 0; S < I; S++) R[y + S] = i[e + S];
                                else if (4 == w)
                                    for (S = 0; S < I; S++) R[y + (S >> 1)] |= i[e + S] << 4 - 4 * (1 & S);
                                else if (2 == w)
                                    for (S = 0; S < I; S++) R[y + (S >> 2)] |= i[e + S] << 6 - 2 * (3 & S);
                                else if (1 == w)
                                    for (S = 0; S < I; S++) R[y + (S >> 3)] |= i[e + S] << 7 - 1 * (7 & S)
                            }
                            t = R, g = 3, n = 1
                        } else if (0 == E && 1 == U.length) {
                            R = new Uint8Array(I * e * 3);
                            const i = I * e;
                            for (y = 0; y < i; y++) {
                                const e = 3 * y,
                                    r = 4 * y;
                                R[e] = t[r], R[e + 1] = t[r + 1], R[e + 2] = t[r + 2]
                            }
                            t = R, g = 2, n = 3, r = 3 * I
                        }
                        C.img = t, C.bpl = r, C.bpp = n
                    }
                    return {
                        ctype: g,
                        depth: w,
                        plte: B,
                        frames: U
                    }
                }

                function d(t, r, n, i, o, a, f) {
                    const s = Uint8Array,
                        l = Uint32Array,
                        c = new s(t[o - 1]),
                        u = new l(t[o - 1]),
                        h = o + 1 < t.length ? new s(t[o + 1]) : null,
                        d = new s(t[o]),
                        g = new l(d.buffer);
                    let w = r,
                        p = n,
                        v = -1,
                        m = -1;
                    for (let e = 0; e < a.height; e++)
                        for (let t = 0; t < a.width; t++) {
                            const n = a.x + t,
                                f = a.y + e,
                                s = f * r + n,
                                l = g[s];
                            0 == l || 0 == i[o - 1].dispose && u[s] == l && (null == h || 0 != h[4 * s + 3]) || (n < w && (w = n), n > v && (v = n), f < p && (p = f), f > m && (m = f))
                        } - 1 == v && (w = p = v = m = 0), f && (1 == (1 & w) && w--, 1 == (1 & p) && p--), a = {
                            x: w,
                            y: p,
                            width: v - w + 1,
                            height: m - p + 1
                        };
                    const b = i[o];
                    b.rect = a, b.blend = 1, b.img = new Uint8Array(a.width * a.height * 4), 0 == i[o - 1].dispose ? (e(c, r, n, b.img, a.width, a.height, -a.x, -a.y, 0), A(d, r, n, b.img, a)) : e(d, r, n, b.img, a.width, a.height, -a.x, -a.y, 0)
                }

                function A(t, r, n, i, o) {
                    e(t, r, n, i, o.width, o.height, -o.x, -o.y, 2)
                }

                function g(e, t, r, n, i, o, a) {
                    const s = [];
                    let l, c = [0, 1, 2, 3, 4]; - 1 != o ? c = [o] : (t * n > 5e5 || 1 == r) && (c = [0]), a && (l = {
                        level: 0
                    });
                    const u = f;
                    for (var h = 0; h < c.length; h++) {
                        for (let o = 0; o < t; o++) w(i, e, o, n, r, c[h]);
                        s.push(u.deflate(i, l))
                    }
                    let d, A = 1e9;
                    for (h = 0; h < s.length; h++) s[h].length < A && (d = h, A = s[h].length);
                    return s[d]
                }

                function w(e, t, n, i, o, a) {
                    const f = n * i;
                    let s = f + n;
                    if (e[s] = a, s++, 0 == a)
                        if (i < 500)
                            for (var l = 0; l < i; l++) e[s + l] = t[f + l];
                        else e.set(new Uint8Array(t.buffer, f, i), s);
                    else if (1 == a) {
                        for (l = 0; l < o; l++) e[s + l] = t[f + l];
                        for (l = o; l < i; l++) e[s + l] = t[f + l] - t[f + l - o] + 256 & 255
                    } else if (0 == n) {
                        for (l = 0; l < o; l++) e[s + l] = t[f + l];
                        if (2 == a)
                            for (l = o; l < i; l++) e[s + l] = t[f + l];
                        if (3 == a)
                            for (l = o; l < i; l++) e[s + l] = t[f + l] - (t[f + l - o] >> 1) + 256 & 255;
                        if (4 == a)
                            for (l = o; l < i; l++) e[s + l] = t[f + l] - r(t[f + l - o], 0, 0) + 256 & 255
                    } else {
                        if (2 == a)
                            for (l = 0; l < i; l++) e[s + l] = t[f + l] + 256 - t[f + l - i] & 255;
                        if (3 == a) {
                            for (l = 0; l < o; l++) e[s + l] = t[f + l] + 256 - (t[f + l - i] >> 1) & 255;
                            for (l = o; l < i; l++) e[s + l] = t[f + l] + 256 - (t[f + l - i] + t[f + l - o] >> 1) & 255
                        }
                        if (4 == a) {
                            for (l = 0; l < o; l++) e[s + l] = t[f + l] + 256 - r(0, t[f + l - i], 0) & 255;
                            for (l = o; l < i; l++) e[s + l] = t[f + l] + 256 - r(t[f + l - o], t[f + l - i], t[f + l - o - i]) & 255
                        }
                    }
                }

                function p(e, t) {
                    const r = new Uint8Array(e),
                        n = r.slice(0),
                        i = new Uint32Array(n.buffer),
                        o = v(n, t),
                        a = o[0],
                        f = o[1],
                        s = r.length,
                        l = new Uint8Array(s >> 2);
                    let c;
                    if (r.length < 2e7)
                        for (var u = 0; u < s; u += 4) c = m(a, h = r[u] * (1 / 255), d = r[u + 1] * (1 / 255), A = r[u + 2] * (1 / 255), g = r[u + 3] * (1 / 255)), l[u >> 2] = c.ind, i[u >> 2] = c.est.rgba;
                    else
                        for (u = 0; u < s; u += 4) {
                            var h = r[u] * (1 / 255),
                                d = r[u + 1] * (1 / 255),
                                A = r[u + 2] * (1 / 255),
                                g = r[u + 3] * (1 / 255);
                            for (c = a; c.left;) c = b(c.est, h, d, A, g) <= 0 ? c.left : c.right;
                            l[u >> 2] = c.ind, i[u >> 2] = c.est.rgba
                        }
                    return {
                        abuf: n.buffer,
                        inds: l,
                        plte: f
                    }
                }

                function v(e, t, r) {
                    null == r && (r = 1e-4);
                    const n = new Uint32Array(e.buffer),
                        i = {
                            i0: 0,
                            i1: e.length,
                            bst: null,
                            est: null,
                            tdst: 0,
                            left: null,
                            right: null
                        };
                    i.bst = U(e, i.i0, i.i1), i.est = F(i.bst);
                    const o = [i];
                    for (; o.length < t;) {
                        let t = 0,
                            i = 0;
                        for (var a = 0; a < o.length; a++) o[a].est.L > t && (t = o[a].est.L, i = a);
                        if (t < r) break;
                        const f = o[i],
                            s = y(e, n, f.i0, f.i1, f.est.e, f.est.eMq255);
                        if (f.i0 >= s || f.i1 <= s) {
                            f.est.L = 0;
                            continue
                        }
                        const l = {
                            i0: f.i0,
                            i1: s,
                            bst: null,
                            est: null,
                            tdst: 0,
                            left: null,
                            right: null
                        };
                        l.bst = U(e, l.i0, l.i1), l.est = F(l.bst);
                        const c = {
                            i0: s,
                            i1: f.i1,
                            bst: null,
                            est: null,
                            tdst: 0,
                            left: null,
                            right: null
                        };
                        for (c.bst = {
                                R: [],
                                m: [],
                                N: f.bst.N - l.bst.N
                            }, a = 0; a < 16; a++) c.bst.R[a] = f.bst.R[a] - l.bst.R[a];
                        for (a = 0; a < 4; a++) c.bst.m[a] = f.bst.m[a] - l.bst.m[a];
                        c.est = F(c.bst), f.left = l, f.right = c, o[i] = l, o.push(c)
                    }
                    for (o.sort(((e, t) => t.bst.N - e.bst.N)), a = 0; a < o.length; a++) o[a].ind = a;
                    return [i, o]
                }

                function m(e, t, r, n, i) {
                    if (null == e.left) return e.tdst = function(e, t, r, n, i) {
                        const o = t - e[0],
                            a = r - e[1],
                            f = n - e[2],
                            s = i - e[3];
                        return o * o + a * a + f * f + s * s
                    }(e.est.q, t, r, n, i), e;
                    const o = b(e.est, t, r, n, i);
                    let a = e.left,
                        f = e.right;
                    o > 0 && (a = e.right, f = e.left);
                    const s = m(a, t, r, n, i);
                    if (s.tdst <= o * o) return s;
                    const l = m(f, t, r, n, i);
                    return l.tdst < s.tdst ? l : s
                }

                function b(e, t, r, n, i) {
                    const {
                        e: o
                    } = e;
                    return o[0] * t + o[1] * r + o[2] * n + o[3] * i - e.eMq
                }

                function y(e, t, r, n, i, o) {
                    for (n -= 4; r < n;) {
                        for (; E(e, r, i) <= o;) r += 4;
                        for (; E(e, n, i) > o;) n -= 4;
                        if (r >= n) break;
                        const a = t[r >> 2];
                        t[r >> 2] = t[n >> 2], t[n >> 2] = a, r += 4, n -= 4
                    }
                    for (; E(e, r, i) > o;) r -= 4;
                    return r + 4
                }

                function E(e, t, r) {
                    return e[t] * r[0] + e[t + 1] * r[1] + e[t + 2] * r[2] + e[t + 3] * r[3]
                }

                function U(e, t, r) {
                    const n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        i = [0, 0, 0, 0],
                        o = r - t >> 2;
                    for (let a = t; a < r; a += 4) {
                        const t = e[a] * (1 / 255),
                            r = e[a + 1] * (1 / 255),
                            o = e[a + 2] * (1 / 255),
                            f = e[a + 3] * (1 / 255);
                        i[0] += t, i[1] += r, i[2] += o, i[3] += f, n[0] += t * t, n[1] += t * r, n[2] += t * o, n[3] += t * f, n[5] += r * r, n[6] += r * o, n[7] += r * f, n[10] += o * o, n[11] += o * f, n[15] += f * f
                    }
                    return n[4] = n[1], n[8] = n[2], n[9] = n[6], n[12] = n[3], n[13] = n[7], n[14] = n[11], {
                        R: n,
                        m: i,
                        N: o
                    }
                }

                function F(e) {
                    const {
                        R: t
                    } = e, {
                        m: r
                    } = e, {
                        N: n
                    } = e, i = r[0], o = r[1], a = r[2], f = r[3], s = 0 == n ? 0 : 1 / n, l = [t[0] - i * i * s, t[1] - i * o * s, t[2] - i * a * s, t[3] - i * f * s, t[4] - o * i * s, t[5] - o * o * s, t[6] - o * a * s, t[7] - o * f * s, t[8] - a * i * s, t[9] - a * o * s, t[10] - a * a * s, t[11] - a * f * s, t[12] - f * i * s, t[13] - f * o * s, t[14] - f * a * s, t[15] - f * f * s], c = l, u = B;
                    let h = [Math.random(), Math.random(), Math.random(), Math.random()],
                        d = 0,
                        A = 0;
                    if (0 != n)
                        for (let w = 0; w < 16 && (h = u.multVec(c, h), A = Math.sqrt(u.dot(h, h)), h = u.sml(1 / A, h), !(0 != w && Math.abs(A - d) < 1e-9)); w++) d = A;
                    const g = [i * s, o * s, a * s, f * s];
                    return {
                        Cov: l,
                        q: g,
                        e: h,
                        L: d,
                        eMq255: u.dot(u.sml(255, g), h),
                        eMq: u.dot(h, g),
                        rgba: (Math.round(255 * g[3]) << 24 | Math.round(255 * g[2]) << 16 | Math.round(255 * g[1]) << 8 | Math.round(255 * g[0]) << 0) >>> 0
                    }
                }
                var B = {
                    multVec: (e, t) => [e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3], e[4] * t[0] + e[5] * t[1] + e[6] * t[2] + e[7] * t[3], e[8] * t[0] + e[9] * t[1] + e[10] * t[2] + e[11] * t[3], e[12] * t[0] + e[13] * t[1] + e[14] * t[2] + e[15] * t[3]],
                    dot: (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3],
                    sml: (e, t) => [e * t[0], e * t[1], e * t[2], e * t[3]]
                };
                s.encode = function(e, t, r, n, i, o, a) {
                    null == n && (n = 0), null == a && (a = !1);
                    const f = h(e, t, r, n, [!1, !1, !1, 0, a, !1]);
                    return u(f, -1), c(f, t, r, i, o)
                }, s.encodeLL = function(e, t, r, n, i, o, a, f) {
                    const s = {
                            ctype: 0 + (1 == n ? 0 : 2) + (0 == i ? 0 : 4),
                            depth: o,
                            frames: []
                        },
                        l = (n + i) * o,
                        h = l * t;
                    for (let c = 0; c < e.length; c++) s.frames.push({
                        rect: {
                            x: 0,
                            y: 0,
                            width: t,
                            height: r
                        },
                        img: new Uint8Array(e[c]),
                        blend: 0,
                        dispose: 1,
                        bpp: Math.ceil(l / 8),
                        bpl: Math.ceil(h / 8)
                    });
                    return u(s, 0, !0), c(s, t, r, a, f)
                }, s.encode.compress = h, s.encode.dither = l, s.quantize = p, s.quantize.getKDtree = v, s.quantize.getNearest = m
            }();
            const l = {
                toArrayBuffer(e, t) {
                    const r = e.width,
                        n = e.height,
                        i = r << 2,
                        o = e.getContext("2d").getImageData(0, 0, r, n),
                        a = new Uint32Array(o.data.buffer),
                        f = (32 * r + 31) / 32 << 2,
                        s = f * n,
                        c = 122 + s,
                        u = new ArrayBuffer(c),
                        h = new DataView(u),
                        d = 1 << 20;
                    let A, g, w, p, v = d,
                        m = 0,
                        b = 0,
                        y = 0;

                    function E(e) {
                        h.setUint16(b, e, !0), b += 2
                    }

                    function U(e) {
                        h.setUint32(b, e, !0), b += 4
                    }

                    function F(e) {
                        b += e
                    }
                    E(19778), U(c), F(4), U(122), U(108), U(r), U(-n >>> 0), E(1), E(32), U(3), U(s), U(2835), U(2835), F(8), U(16711680), U(65280), U(255), U(4278190080), U(1466527264),
                        function e() {
                            for (; m < n && v > 0;) {
                                for (p = 122 + m * f, A = 0; A < i;) v--, g = a[y++], w = g >>> 24, h.setUint32(p + A, g << 8 | w), A += 4;
                                m++
                            }
                            y < a.length ? (v = d, setTimeout(e, l._dly)) : t(u)
                        }()
                },
                toBlob(e, t) {
                    this.toArrayBuffer(e, (e => {
                        t(new Blob([e], {
                            type: "image/bmp"
                        }))
                    }))
                },
                _dly: 9
            };
            var c = {
                    CHROME: "CHROME",
                    FIREFOX: "FIREFOX",
                    DESKTOP_SAFARI: "DESKTOP_SAFARI",
                    IE: "IE",
                    IOS: "IOS",
                    ETC: "ETC"
                },
                u = {
                    [c.CHROME]: 16384,
                    [c.FIREFOX]: 11180,
                    [c.DESKTOP_SAFARI]: 16384,
                    [c.IE]: 8192,
                    [c.IOS]: 4096,
                    [c.ETC]: 8192
                };
            const h = "undefined" != typeof window,
                d = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
                A = h && window.cordova && window.cordova.require && window.cordova.require("cordova/modulemapper"),
                g = (h || d) && (A && A.getOriginalSymbol(window, "File") || "undefined" != typeof File && File),
                w = (h || d) && (A && A.getOriginalSymbol(window, "FileReader") || "undefined" != typeof FileReader && FileReader);

            function p(e, t, r = Date.now()) {
                return new Promise((n => {
                    const i = e.split(","),
                        o = i[0].match(/:(.*?);/)[1],
                        a = globalThis.atob(i[1]);
                    let f = a.length;
                    const s = new Uint8Array(f);
                    for (; f--;) s[f] = a.charCodeAt(f);
                    const l = new Blob([s], {
                        type: o
                    });
                    l.name = t, l.lastModified = r, n(l)
                }))
            }

            function v(e) {
                return new Promise(((t, r) => {
                    const n = new w;
                    n.onload = () => t(n.result), n.onerror = e => r(e), n.readAsDataURL(e)
                }))
            }

            function m(e) {
                return new Promise(((t, r) => {
                    const n = new Image;
                    n.onload = () => t(n), n.onerror = e => r(e), n.src = e
                }))
            }

            function b() {
                if (void 0 !== b.cachedResult) return b.cachedResult;
                let e = c.ETC;
                const {
                    userAgent: t
                } = navigator;
                return /Chrom(e|ium)/i.test(t) ? e = c.CHROME : /iP(ad|od|hone)/i.test(t) && /WebKit/i.test(t) ? e = c.IOS : /Safari/i.test(t) ? e = c.DESKTOP_SAFARI : /Firefox/i.test(t) ? e = c.FIREFOX : (/MSIE/i.test(t) || 1 == !!document.documentMode) && (e = c.IE), b.cachedResult = e, b.cachedResult
            }

            function y(e, t) {
                const r = b(),
                    n = u[r];
                let i = e,
                    o = t,
                    a = i * o;
                const f = i > o ? o / i : i / o;
                for (; a > n * n;) {
                    const e = (n + i) / 2,
                        t = (n + o) / 2;
                    e < t ? (o = t, i = t * f) : (o = e * f, i = e), a = i * o
                }
                return {
                    width: i,
                    height: o
                }
            }

            function E(e, t) {
                let r, n;
                try {
                    if (r = new OffscreenCanvas(e, t), n = r.getContext("2d"), null === n) throw new Error("getContext of OffscreenCanvas returns null")
                } catch (e) {
                    r = document.createElement("canvas"), n = r.getContext("2d")
                }
                return r.width = e, r.height = t, [r, n]
            }

            function U(e, t) {
                const {
                    width: r,
                    height: n
                } = y(e.width, e.height), [i, o] = E(r, n);
                return t && /jpe?g/.test(t) && (o.fillStyle = "white", o.fillRect(0, 0, i.width, i.height)), o.drawImage(e, 0, 0, i.width, i.height), i
            }

            function F() {
                return void 0 !== F.cachedResult || (F.cachedResult = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "undefined" != typeof document && "ontouchend" in document), F.cachedResult
            }

            function B(e, t = {}) {
                return new Promise((function(r, n) {
                    let i, o;
                    var a = function() {
                            try {
                                return o = U(i, t.fileType || e.type), r([i, o])
                            } catch (e) {
                                return n(e)
                            }
                        },
                        f = function(t) {
                            try {
                                var r = function(e) {
                                    try {
                                        throw e
                                    } catch (e) {
                                        return n(e)
                                    }
                                };
                                try {
                                    let t;
                                    return v(e).then((function(e) {
                                        try {
                                            return t = e, m(t).then((function(e) {
                                                try {
                                                    return i = e,
                                                        function() {
                                                            try {
                                                                return a()
                                                            } catch (e) {
                                                                return n(e)
                                                            }
                                                        }()
                                                } catch (e) {
                                                    return r(e)
                                                }
                                            }), r)
                                        } catch (e) {
                                            return r(e)
                                        }
                                    }), r)
                                } catch (e) {
                                    r(e)
                                }
                            } catch (e) {
                                return n(e)
                            }
                        };
                    try {
                        if (F() || [c.DESKTOP_SAFARI, c.MOBILE_SAFARI].includes(b())) throw new Error("Skip createImageBitmap on IOS and Safari");
                        return createImageBitmap(e).then((function(e) {
                            try {
                                return i = e, a()
                            } catch (e) {
                                return f()
                            }
                        }), f)
                    } catch (e) {
                        f()
                    }
                }))
            }

            function Q(e, t, r, n, i = 1) {
                return new Promise((function(o, a) {
                    let f;
                    if ("image/png" === t) {
                        let u, h, d;
                        return u = e.getContext("2d"), ({
                            data: h
                        } = u.getImageData(0, 0, e.width, e.height)), d = s.encode([h.buffer], e.width, e.height, 4096 * i), f = new Blob([d], {
                            type: t
                        }), f.name = r, f.lastModified = n, c.call(this)
                    } {
                        if ("image/bmp" === t) return new Promise((t => l.toBlob(e, t))).then(function(e) {
                            try {
                                return f = e, f.name = r, f.lastModified = n, A.call(this)
                            } catch (e) {
                                return a(e)
                            }
                        }.bind(this), a); {
                            if ("function" == typeof OffscreenCanvas && e instanceof OffscreenCanvas) return e.convertToBlob({
                                type: t,
                                quality: i
                            }).then(function(e) {
                                try {
                                    return f = e, f.name = r, f.lastModified = n, g.call(this)
                                } catch (e) {
                                    return a(e)
                                }
                            }.bind(this), a); {
                                let w;
                                return w = e.toDataURL(t, i), p(w, r, n).then(function(e) {
                                    try {
                                        return f = e, g.call(this)
                                    } catch (e) {
                                        return a(e)
                                    }
                                }.bind(this), a)
                            }

                            function g() {
                                return A.call(this)
                            }
                        }

                        function A() {
                            return c.call(this)
                        }
                    }

                    function c() {
                        return o(f)
                    }
                }))
            }

            function _(e) {
                e.width = 0, e.height = 0
            }

            function C() {
                return new Promise((function(e, t) {
                    let r, n, i, o, a;
                    return void 0 !== C.cachedResult ? e(C.cachedResult) : (r = "data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==", p("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==", "test.jpg", Date.now()).then((function(r) {
                        try {
                            return n = r, B(n).then((function(r) {
                                try {
                                    return i = r[1], Q(i, n.type, n.name, n.lastModified).then((function(r) {
                                        try {
                                            return o = r, _(i), B(o).then((function(r) {
                                                try {
                                                    return a = r[0], C.cachedResult = 1 === a.width && 2 === a.height, e(C.cachedResult)
                                                } catch (e) {
                                                    return t(e)
                                                }
                                            }), t)
                                        } catch (e) {
                                            return t(e)
                                        }
                                    }), t)
                                } catch (e) {
                                    return t(e)
                                }
                            }), t)
                        } catch (e) {
                            return t(e)
                        }
                    }), t))
                }))
            }

            function I(e) {
                return new Promise(((t, r) => {
                    const n = new w;
                    n.onload = e => {
                        const r = new DataView(e.target.result);
                        if (65496 != r.getUint16(0, !1)) return t(-2);
                        const n = r.byteLength;
                        let i = 2;
                        for (; i < n;) {
                            if (r.getUint16(i + 2, !1) <= 8) return t(-1);
                            const e = r.getUint16(i, !1);
                            if (i += 2, 65505 == e) {
                                if (1165519206 != r.getUint32(i += 2, !1)) return t(-1);
                                const e = 18761 == r.getUint16(i += 6, !1);
                                i += r.getUint32(i + 4, e);
                                const n = r.getUint16(i, e);
                                i += 2;
                                for (let o = 0; o < n; o++)
                                    if (274 == r.getUint16(i + 12 * o, e)) return t(r.getUint16(i + 12 * o + 8, e))
                            } else {
                                if (65280 != (65280 & e)) break;
                                i += r.getUint16(i, !1)
                            }
                        }
                        return t(-1)
                    }, n.onerror = e => r(e), n.readAsArrayBuffer(e)
                }))
            }

            function M(e, t) {
                const {
                    width: r
                } = e, {
                    height: n
                } = e, {
                    maxWidthOrHeight: i
                } = t;
                let o, a = e;
                return isFinite(i) && (r > i || n > i) && ([a, o] = E(r, n), r > n ? (a.width = i, a.height = n / r * i) : (a.width = r / n * i, a.height = i), o.drawImage(e, 0, 0, a.width, a.height), _(e)), a
            }

            function R(e, t) {
                const {
                    width: r
                } = e, {
                    height: n
                } = e, [i, o] = E(r, n);
                switch (t > 4 && t < 9 ? (i.width = n, i.height = r) : (i.width = r, i.height = n), t) {
                    case 2:
                        o.transform(-1, 0, 0, 1, r, 0);
                        break;
                    case 3:
                        o.transform(-1, 0, 0, -1, r, n);
                        break;
                    case 4:
                        o.transform(1, 0, 0, -1, 0, n);
                        break;
                    case 5:
                        o.transform(0, 1, 1, 0, 0, 0);
                        break;
                    case 6:
                        o.transform(0, 1, -1, 0, n, 0);
                        break;
                    case 7:
                        o.transform(0, -1, -1, 0, n, r);
                        break;
                    case 8:
                        o.transform(0, -1, 1, 0, 0, r)
                }
                return o.drawImage(e, 0, 0, r, n), _(e), i
            }

            function S(e, t, r = 0) {
                return new Promise((function(n, i) {
                    let o, a, f, s, l, c, u, h, d, A, g, w, p, v, m, b, y, U, F, S;

                    function x(e = 5) {
                        if (t.signal && t.signal.aborted) throw t.signal.reason;
                        o += e, t.onProgress(Math.min(o, 100))
                    }

                    function T(e) {
                        if (t.signal && t.signal.aborted) throw t.signal.reason;
                        o = Math.min(Math.max(e, o), 100), t.onProgress(o)
                    }
                    return o = r, a = t.maxIteration || 10, f = 1024 * t.maxSizeMB * 1024, x(), B(e, t).then(function(r) {
                        try {
                            return [, s] = r, x(), l = M(s, t), x(), new Promise((function(r, n) {
                                var i;
                                if (!(i = t.exifOrientation)) return I(e).then(function(e) {
                                    try {
                                        return i = e, o.call(this)
                                    } catch (e) {
                                        return n(e)
                                    }
                                }.bind(this), n);

                                function o() {
                                    return r(i)
                                }
                                return o.call(this)
                            })).then(function(r) {
                                try {
                                    return c = r, x(), C().then(function(r) {
                                        try {
                                            return u = r ? l : R(l, c), x(), h = t.initialQuality || 1, d = t.fileType || e.type, Q(u, d, e.name, e.lastModified, h).then(function(r) {
                                                try {
                                                    {
                                                        if (A = r, x(), g = A.size > f, w = A.size > e.size, !g && !w) return T(100), n(A);
                                                        var o;

                                                        function B() {
                                                            if (a-- && (m > f || m > p)) {
                                                                let t, r;
                                                                return t = S ? .95 * F.width : F.width, r = S ? .95 * F.height : F.height, [y, U] = E(t, r), U.drawImage(F, 0, 0, t, r), h *= "image/png" === d ? .85 : .95, Q(y, d, e.name, e.lastModified, h).then((function(e) {
                                                                    try {
                                                                        return b = e, _(F), F = y, m = b.size, T(Math.min(99, Math.floor((v - m) / (v - f) * 100))), B
                                                                    } catch (e) {
                                                                        return i(e)
                                                                    }
                                                                }), i)
                                                            }
                                                            return [1]
                                                        }
                                                        return p = e.size, v = A.size, m = v, F = u, S = !t.alwaysKeepResolution && g, (o = function(e) {
                                                            for (; e;) {
                                                                if (e.then) return void e.then(o, i);
                                                                try {
                                                                    if (e.pop) {
                                                                        if (e.length) return e.pop() ? C.call(this) : e;
                                                                        e = B
                                                                    } else e = e.call(this)
                                                                } catch (e) {
                                                                    return i(e)
                                                                }
                                                            }
                                                        }.bind(this))(B);

                                                        function C() {
                                                            return _(F), _(y), _(l), _(u), _(s), T(100), n(b)
                                                        }
                                                    }
                                                } catch (c) {
                                                    return i(c)
                                                }
                                            }.bind(this), i)
                                        } catch (e) {
                                            return i(e)
                                        }
                                    }.bind(this), i)
                                } catch (e) {
                                    return i(e)
                                }
                            }.bind(this), i)
                        } catch (e) {
                            return i(e)
                        }
                    }.bind(this), i)
                }))
            }
            let x;

            function T(e, t) {
                return new Promise(((r, n) => {
                    x || (x = function(e) {
                        const t = [];
                        return "function" == typeof e ? t.push(`(${e})()`) : t.push(e), URL.createObjectURL(new Blob(t))
                    }("\nlet scriptImported = false\nself.addEventListener('message', async (e) => {\n  const { file, id, imageCompressionLibUrl, options } = e.data\n  options.onProgress = (progress) => self.postMessage({ progress, id })\n  try {\n    if (!scriptImported) {\n      // console.log('[worker] importScripts', imageCompressionLibUrl)\n      self.importScripts(imageCompressionLibUrl)\n      scriptImported = true\n    }\n    // console.log('[worker] self', self)\n    const compressedFile = await imageCompression(file, options)\n    self.postMessage({ file: compressedFile, id })\n  } catch (e) {\n    // console.error('[worker] error', e)\n    self.postMessage({ error: e.message + '\\n' + e.stack, id })\n  }\n})\n"));
                    const i = new Worker(x);
                    i.addEventListener("message", (function(e) {
                        if (t.signal && t.signal.aborted) i.terminate();
                        else if (void 0 === e.data.progress) {
                            if (e.data.error) return n(new Error(e.data.error)), void i.terminate();
                            r(e.data.file), i.terminate()
                        } else t.onProgress(e.data.progress)
                    })), i.addEventListener("error", n), t.signal && t.signal.addEventListener("abort", (() => {
                        n(t.signal.reason), i.terminate()
                    })), i.postMessage({
                        file: e,
                        imageCompressionLibUrl: t.libURL,
                        options: { ...t,
                            onProgress: void 0,
                            signal: void 0
                        }
                    })
                }))
            }

            function k(e, t) {
                return new Promise((function(r, i) {
                    let o, a, f, s, l, c;
                    if (o = { ...t
                        }, f = 0, ({
                            onProgress: s
                        } = o), o.maxSizeMB = o.maxSizeMB || Number.POSITIVE_INFINITY, l = "boolean" != typeof o.useWebWorker || o.useWebWorker, delete o.useWebWorker, o.onProgress = e => {
                            f = e, "function" == typeof s && s(f)
                        }, !(e instanceof Blob || e instanceof g)) return i(new Error("The file given is not an instance of Blob or File"));
                    if (!/^image/.test(e.type)) return i(new Error("The file given is not an image"));
                    if (c = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope, !l || "function" != typeof Worker || c) return S(e, o).then(function(e) {
                        try {
                            return a = e, d.call(this)
                        } catch (e) {
                            return i(e)
                        }
                    }.bind(this), i);
                    var u = function() {
                            try {
                                return d.call(this)
                            } catch (e) {
                                return i(e)
                            }
                        }.bind(this),
                        h = function(t) {
                            try {
                                return S(e, o).then((function(e) {
                                    try {
                                        return a = e, u()
                                    } catch (e) {
                                        return i(e)
                                    }
                                }), i)
                            } catch (e) {
                                return i(e)
                            }
                        };
                    try {
                        return o.libURL = o.libURL || "https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js", T(e, o).then((function(e) {
                            try {
                                return a = e, u()
                            } catch (e) {
                                return h()
                            }
                        }), h)
                    } catch (e) {
                        h()
                    }

                    function d() {
                        try {
                            a.name = e.name, a.lastModified = e.lastModified
                        } catch (e) {}
                        try {
                            o.preserveExif && "image/jpeg" === e.type && (!o.fileType || o.fileType && o.fileType === e.type) && (a = n(e, a))
                        } catch (e) {}
                        return r(a)
                    }
                }))
            }
            k.getDataUrlFromFile = v, k.getFilefromDataUrl = p, k.loadImage = m, k.drawImageInCanvas = U, k.drawFileInCanvas = B, k.canvasToFile = Q, k.getExifOrientation = I, k.handleMaxWidthOrHeight = M, k.followExifOrientation = R, k.cleanupCanvasMemory = _, k.isAutoOrientationInBrowser = C, k.approximateBelowMaximumCanvasSizeOfBrowser = y, k.copyExifWithoutOrientation = n, k.getBrowserName = b, k.version = "2.0.2"
        }
    }
]);