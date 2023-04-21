(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver(r => {
        for (const i of r)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(r) {
        const i = {};
        return r.integrity && (i.integrity = r.integrity), r.referrerpolicy && (i.referrerPolicy = r.referrerpolicy), r.crossorigin === "use-credentials" ? i.credentials = "include" : r.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function s(r) {
        if (r.ep) return;
        r.ep = !0;
        const i = n(r);
        fetch(r.href, i)
    }
})();

function lo(t, e) {
    const n = Object.create(null),
        s = t.split(",");
    for (let r = 0; r < s.length; r++) n[s[r]] = !0;
    return e ? r => !!n[r.toLowerCase()] : r => !!n[r]
}

function co(t) {
    if (V(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const s = t[n],
                r = Ie(s) ? mf(s) : co(s);
            if (r)
                for (const i in r) e[i] = r[i]
        }
        return e
    } else {
        if (Ie(t)) return t;
        if (ue(t)) return t
    }
}
const ff = /;(?![^(]*\))/g,
    hf = /:([^]+)/,
    pf = /\/\*.*?\*\//gs;

function mf(t) {
    const e = {};
    return t.replace(pf, "").split(ff).forEach(n => {
        if (n) {
            const s = n.split(hf);
            s.length > 1 && (e[s[0].trim()] = s[1].trim())
        }
    }), e
}

function mn(t) {
    let e = "";
    if (Ie(t)) e = t;
    else if (V(t))
        for (let n = 0; n < t.length; n++) {
            const s = mn(t[n]);
            s && (e += s + " ")
        } else if (ue(t))
            for (const n in t) t[n] && (e += n + " ");
    return e.trim()
}
const gf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    yf = lo(gf);

function ic(t) {
    return !!t || t === ""
}

function _f(t, e) {
    if (t.length !== e.length) return !1;
    let n = !0;
    for (let s = 0; n && s < t.length; s++) n = Un(t[s], e[s]);
    return n
}

function Un(t, e) {
    if (t === e) return !0;
    let n = oa(t),
        s = oa(e);
    if (n || s) return n && s ? t.getTime() === e.getTime() : !1;
    if (n = ys(t), s = ys(e), n || s) return t === e;
    if (n = V(t), s = V(e), n || s) return n && s ? _f(t, e) : !1;
    if (n = ue(t), s = ue(e), n || s) {
        if (!n || !s) return !1;
        const r = Object.keys(t).length,
            i = Object.keys(e).length;
        if (r !== i) return !1;
        for (const o in t) {
            const a = t.hasOwnProperty(o),
                l = e.hasOwnProperty(o);
            if (a && !l || !a && l || !Un(t[o], e[o])) return !1
        }
    }
    return String(t) === String(e)
}

function vf(t, e) {
    return t.findIndex(n => Un(n, e))
}
const gt = t => Ie(t) ? t : t == null ? "" : V(t) || ue(t) && (t.toString === lc || !q(t.toString)) ? JSON.stringify(t, oc, 2) : String(t),
    oc = (t, e) => e && e.__v_isRef ? oc(t, e.value) : Mn(e) ? {
        [`Map(${e.size})`]: [...e.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
    } : Nr(e) ? {
        [`Set(${e.size})`]: [...e.values()]
    } : ue(e) && !V(e) && !cc(e) ? String(e) : e,
    de = {},
    Dn = [],
    lt = () => {},
    bf = () => !1,
    wf = /^on[^a-z]/,
    Pr = t => wf.test(t),
    uo = t => t.startsWith("onUpdate:"),
    Pe = Object.assign,
    fo = (t, e) => {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
    },
    xf = Object.prototype.hasOwnProperty,
    te = (t, e) => xf.call(t, e),
    V = Array.isArray,
    Mn = t => Fs(t) === "[object Map]",
    Nr = t => Fs(t) === "[object Set]",
    oa = t => Fs(t) === "[object Date]",
    q = t => typeof t == "function",
    Ie = t => typeof t == "string",
    ys = t => typeof t == "symbol",
    ue = t => t !== null && typeof t == "object",
    ac = t => ue(t) && q(t.then) && q(t.catch),
    lc = Object.prototype.toString,
    Fs = t => lc.call(t),
    If = t => Fs(t).slice(8, -1),
    cc = t => Fs(t) === "[object Object]",
    ho = t => Ie(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
    tr = lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Dr = t => {
        const e = Object.create(null);
        return n => e[n] || (e[n] = t(n))
    },
    Ef = /-(\w)/g,
    Et = Dr(t => t.replace(Ef, (e, n) => n ? n.toUpperCase() : "")),
    Tf = /\B([A-Z])/g,
    Yn = Dr(t => t.replace(Tf, "-$1").toLowerCase()),
    Mr = Dr(t => t.charAt(0).toUpperCase() + t.slice(1)),
    li = Dr(t => t ? `on${Mr(t)}` : ""),
    _s = (t, e) => !Object.is(t, e),
    nr = (t, e) => {
        for (let n = 0; n < t.length; n++) t[n](e)
    },
    fr = (t, e, n) => {
        Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !1,
            value: n
        })
    },
    vs = t => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e
    };
let aa;
const Sf = () => aa || (aa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let qe;
class uc {
    constructor(e = !1) {
        this.detached = e, this.active = !0, this.effects = [], this.cleanups = [], this.parent = qe, !e && qe && (this.index = (qe.scopes || (qe.scopes = [])).push(this) - 1)
    }
    run(e) {
        if (this.active) {
            const n = qe;
            try {
                return qe = this, e()
            } finally {
                qe = n
            }
        }
    }
    on() {
        qe = this
    }
    off() {
        qe = this.parent
    }
    stop(e) {
        if (this.active) {
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
            for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
            if (this.scopes)
                for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !e) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.parent = void 0, this.active = !1
        }
    }
}

function dc(t) {
    return new uc(t)
}

function kf(t, e = qe) {
    e && e.active && e.effects.push(t)
}

function Af() {
    return qe
}

function Cf(t) {
    qe && qe.cleanups.push(t)
}
const po = t => {
        const e = new Set(t);
        return e.w = 0, e.n = 0, e
    },
    fc = t => (t.w & nn) > 0,
    hc = t => (t.n & nn) > 0,
    Rf = ({
        deps: t
    }) => {
        if (t.length)
            for (let e = 0; e < t.length; e++) t[e].w |= nn
    },
    Of = t => {
        const {
            deps: e
        } = t;
        if (e.length) {
            let n = 0;
            for (let s = 0; s < e.length; s++) {
                const r = e[s];
                fc(r) && !hc(r) ? r.delete(t) : e[n++] = r, r.w &= ~nn, r.n &= ~nn
            }
            e.length = n
        }
    },
    Oi = new WeakMap;
let rs = 0,
    nn = 1;
const Pi = 30;
let ot;
const gn = Symbol(""),
    Ni = Symbol("");
class mo {
    constructor(e, n = null, s) {
        this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, kf(this, s)
    }
    run() {
        if (!this.active) return this.fn();
        let e = ot,
            n = Qt;
        for (; e;) {
            if (e === this) return;
            e = e.parent
        }
        try {
            return this.parent = ot, ot = this, Qt = !0, nn = 1 << ++rs, rs <= Pi ? Rf(this) : la(this), this.fn()
        } finally {
            rs <= Pi && Of(this), nn = 1 << --rs, ot = this.parent, Qt = n, this.parent = void 0, this.deferStop && this.stop()
        }
    }
    stop() {
        ot === this ? this.deferStop = !0 : this.active && (la(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function la(t) {
    const {
        deps: e
    } = t;
    if (e.length) {
        for (let n = 0; n < e.length; n++) e[n].delete(t);
        e.length = 0
    }
}
let Qt = !0;
const pc = [];

function Qn() {
    pc.push(Qt), Qt = !1
}

function Xn() {
    const t = pc.pop();
    Qt = t === void 0 ? !0 : t
}

function Ye(t, e, n) {
    if (Qt && ot) {
        let s = Oi.get(t);
        s || Oi.set(t, s = new Map);
        let r = s.get(n);
        r || s.set(n, r = po()), mc(r)
    }
}

function mc(t, e) {
    let n = !1;
    rs <= Pi ? hc(t) || (t.n |= nn, n = !fc(t)) : n = !t.has(ot), n && (t.add(ot), ot.deps.push(t))
}

function Ot(t, e, n, s, r, i) {
    const o = Oi.get(t);
    if (!o) return;
    let a = [];
    if (e === "clear") a = [...o.values()];
    else if (n === "length" && V(t)) {
        const l = vs(s);
        o.forEach((c, u) => {
            (u === "length" || u >= l) && a.push(c)
        })
    } else switch (n !== void 0 && a.push(o.get(n)), e) {
        case "add":
            V(t) ? ho(n) && a.push(o.get("length")) : (a.push(o.get(gn)), Mn(t) && a.push(o.get(Ni)));
            break;
        case "delete":
            V(t) || (a.push(o.get(gn)), Mn(t) && a.push(o.get(Ni)));
            break;
        case "set":
            Mn(t) && a.push(o.get(gn));
            break
    }
    if (a.length === 1) a[0] && Di(a[0]);
    else {
        const l = [];
        for (const c of a) c && l.push(...c);
        Di(po(l))
    }
}

function Di(t, e) {
    const n = V(t) ? t : [...t];
    for (const s of n) s.computed && ca(s);
    for (const s of n) s.computed || ca(s)
}

function ca(t, e) {
    (t !== ot || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run())
}
const Pf = lo("__proto__,__v_isRef,__isVue"),
    gc = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(ys)),
    Nf = go(),
    Df = go(!1, !0),
    Mf = go(!0),
    ua = Lf();

function Lf() {
    const t = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(e => {
        t[e] = function (...n) {
            const s = ne(this);
            for (let i = 0, o = this.length; i < o; i++) Ye(s, "get", i + "");
            const r = s[e](...n);
            return r === -1 || r === !1 ? s[e](...n.map(ne)) : r
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
        t[e] = function (...n) {
            Qn();
            const s = ne(this)[e].apply(this, n);
            return Xn(), s
        }
    }), t
}

function go(t = !1, e = !1) {
    return function (s, r, i) {
        if (r === "__v_isReactive") return !t;
        if (r === "__v_isReadonly") return t;
        if (r === "__v_isShallow") return e;
        if (r === "__v_raw" && i === (t ? e ? Xf : wc : e ? bc : vc).get(s)) return s;
        const o = V(s);
        if (!t && o && te(ua, r)) return Reflect.get(ua, r, i);
        const a = Reflect.get(s, r, i);
        return (ys(r) ? gc.has(r) : Pf(r)) || (t || Ye(s, "get", r), e) ? a : he(a) ? o && ho(r) ? a : a.value : ue(a) ? t ? xc(a) : Zn(a) : a
    }
}
const Ff = yc(),
    $f = yc(!0);

function yc(t = !1) {
    return function (n, s, r, i) {
        let o = n[s];
        if (Vn(o) && he(o) && !he(r)) return !1;
        if (!t && (!hr(r) && !Vn(r) && (o = ne(o), r = ne(r)), !V(n) && he(o) && !he(r))) return o.value = r, !0;
        const a = V(n) && ho(s) ? Number(s) < n.length : te(n, s),
            l = Reflect.set(n, s, r, i);
        return n === ne(i) && (a ? _s(r, o) && Ot(n, "set", s, r) : Ot(n, "add", s, r)), l
    }
}

function Uf(t, e) {
    const n = te(t, e);
    t[e];
    const s = Reflect.deleteProperty(t, e);
    return s && n && Ot(t, "delete", e, void 0), s
}

function Vf(t, e) {
    const n = Reflect.has(t, e);
    return (!ys(e) || !gc.has(e)) && Ye(t, "has", e), n
}

function jf(t) {
    return Ye(t, "iterate", V(t) ? "length" : gn), Reflect.ownKeys(t)
}
const _c = {
        get: Nf,
        set: Ff,
        deleteProperty: Uf,
        has: Vf,
        ownKeys: jf
    },
    Bf = {
        get: Mf,
        set(t, e) {
            return !0
        },
        deleteProperty(t, e) {
            return !0
        }
    },
    Hf = Pe({}, _c, {
        get: Df,
        set: $f
    }),
    yo = t => t,
    Lr = t => Reflect.getPrototypeOf(t);

function Ks(t, e, n = !1, s = !1) {
    t = t.__v_raw;
    const r = ne(t),
        i = ne(e);
    n || (e !== i && Ye(r, "get", e), Ye(r, "get", i));
    const {
        has: o
    } = Lr(r), a = s ? yo : n ? bo : bs;
    if (o.call(r, e)) return a(t.get(e));
    if (o.call(r, i)) return a(t.get(i));
    t !== r && t.get(e)
}

function Ws(t, e = !1) {
    const n = this.__v_raw,
        s = ne(n),
        r = ne(t);
    return e || (t !== r && Ye(s, "has", t), Ye(s, "has", r)), t === r ? n.has(t) : n.has(t) || n.has(r)
}

function Gs(t, e = !1) {
    return t = t.__v_raw, !e && Ye(ne(t), "iterate", gn), Reflect.get(t, "size", t)
}

function da(t) {
    t = ne(t);
    const e = ne(this);
    return Lr(e).has.call(e, t) || (e.add(t), Ot(e, "add", t, t)), this
}

function fa(t, e) {
    e = ne(e);
    const n = ne(this),
        {
            has: s,
            get: r
        } = Lr(n);
    let i = s.call(n, t);
    i || (t = ne(t), i = s.call(n, t));
    const o = r.call(n, t);
    return n.set(t, e), i ? _s(e, o) && Ot(n, "set", t, e) : Ot(n, "add", t, e), this
}

function ha(t) {
    const e = ne(this),
        {
            has: n,
            get: s
        } = Lr(e);
    let r = n.call(e, t);
    r || (t = ne(t), r = n.call(e, t)), s && s.call(e, t);
    const i = e.delete(t);
    return r && Ot(e, "delete", t, void 0), i
}

function pa() {
    const t = ne(this),
        e = t.size !== 0,
        n = t.clear();
    return e && Ot(t, "clear", void 0, void 0), n
}

function Js(t, e) {
    return function (s, r) {
        const i = this,
            o = i.__v_raw,
            a = ne(o),
            l = e ? yo : t ? bo : bs;
        return !t && Ye(a, "iterate", gn), o.forEach((c, u) => s.call(r, l(c), l(u), i))
    }
}

function Ys(t, e, n) {
    return function (...s) {
        const r = this.__v_raw,
            i = ne(r),
            o = Mn(i),
            a = t === "entries" || t === Symbol.iterator && o,
            l = t === "keys" && o,
            c = r[t](...s),
            u = n ? yo : e ? bo : bs;
        return !e && Ye(i, "iterate", l ? Ni : gn), {
            next() {
                const {
                    value: f,
                    done: h
                } = c.next();
                return h ? {
                    value: f,
                    done: h
                } : {
                    value: a ? [u(f[0]), u(f[1])] : u(f),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Ft(t) {
    return function (...e) {
        return t === "delete" ? !1 : this
    }
}

function qf() {
    const t = {
            get(i) {
                return Ks(this, i)
            },
            get size() {
                return Gs(this)
            },
            has: Ws,
            add: da,
            set: fa,
            delete: ha,
            clear: pa,
            forEach: Js(!1, !1)
        },
        e = {
            get(i) {
                return Ks(this, i, !1, !0)
            },
            get size() {
                return Gs(this)
            },
            has: Ws,
            add: da,
            set: fa,
            delete: ha,
            clear: pa,
            forEach: Js(!1, !0)
        },
        n = {
            get(i) {
                return Ks(this, i, !0)
            },
            get size() {
                return Gs(this, !0)
            },
            has(i) {
                return Ws.call(this, i, !0)
            },
            add: Ft("add"),
            set: Ft("set"),
            delete: Ft("delete"),
            clear: Ft("clear"),
            forEach: Js(!0, !1)
        },
        s = {
            get(i) {
                return Ks(this, i, !0, !0)
            },
            get size() {
                return Gs(this, !0)
            },
            has(i) {
                return Ws.call(this, i, !0)
            },
            add: Ft("add"),
            set: Ft("set"),
            delete: Ft("delete"),
            clear: Ft("clear"),
            forEach: Js(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(i => {
        t[i] = Ys(i, !1, !1), n[i] = Ys(i, !0, !1), e[i] = Ys(i, !1, !0), s[i] = Ys(i, !0, !0)
    }), [t, n, e, s]
}
const [zf, Kf, Wf, Gf] = qf();

function _o(t, e) {
    const n = e ? t ? Gf : Wf : t ? Kf : zf;
    return (s, r, i) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? s : Reflect.get(te(n, r) && r in s ? n : s, r, i)
}
const Jf = {
        get: _o(!1, !1)
    },
    Yf = {
        get: _o(!1, !0)
    },
    Qf = {
        get: _o(!0, !1)
    },
    vc = new WeakMap,
    bc = new WeakMap,
    wc = new WeakMap,
    Xf = new WeakMap;

function Zf(t) {
    switch (t) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function eh(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : Zf(If(t))
}

function Zn(t) {
    return Vn(t) ? t : vo(t, !1, _c, Jf, vc)
}

function th(t) {
    return vo(t, !1, Hf, Yf, bc)
}

function xc(t) {
    return vo(t, !0, Bf, Qf, wc)
}

function vo(t, e, n, s, r) {
    if (!ue(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
    const i = r.get(t);
    if (i) return i;
    const o = eh(t);
    if (o === 0) return t;
    const a = new Proxy(t, o === 2 ? s : n);
    return r.set(t, a), a
}

function Xt(t) {
    return Vn(t) ? Xt(t.__v_raw) : !!(t && t.__v_isReactive)
}

function Vn(t) {
    return !!(t && t.__v_isReadonly)
}

function hr(t) {
    return !!(t && t.__v_isShallow)
}

function Ic(t) {
    return Xt(t) || Vn(t)
}

function ne(t) {
    const e = t && t.__v_raw;
    return e ? ne(e) : t
}

function jn(t) {
    return fr(t, "__v_skip", !0), t
}
const bs = t => ue(t) ? Zn(t) : t,
    bo = t => ue(t) ? xc(t) : t;

function Ec(t) {
    Qt && ot && (t = ne(t), mc(t.dep || (t.dep = po())))
}

function Tc(t, e) {
    t = ne(t), t.dep && Di(t.dep)
}

function he(t) {
    return !!(t && t.__v_isRef === !0)
}

function Ue(t) {
    return Sc(t, !1)
}

function nh(t) {
    return Sc(t, !0)
}

function Sc(t, e) {
    return he(t) ? t : new sh(t, e)
}
class sh {
    constructor(e, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : ne(e), this._value = n ? e : bs(e)
    }
    get value() {
        return Ec(this), this._value
    }
    set value(e) {
        const n = this.__v_isShallow || hr(e) || Vn(e);
        e = n ? e : ne(e), _s(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : bs(e), Tc(this))
    }
}

function ee(t) {
    return he(t) ? t.value : t
}
const rh = {
    get: (t, e, n) => ee(Reflect.get(t, e, n)),
    set: (t, e, n, s) => {
        const r = t[e];
        return he(r) && !he(n) ? (r.value = n, !0) : Reflect.set(t, e, n, s)
    }
};

function kc(t) {
    return Xt(t) ? t : new Proxy(t, rh)
}

function ih(t) {
    const e = V(t) ? new Array(t.length) : {};
    for (const n in t) e[n] = ah(t, n);
    return e
}
class oh {
    constructor(e, n, s) {
        this._object = e, this._key = n, this._defaultValue = s, this.__v_isRef = !0
    }
    get value() {
        const e = this._object[this._key];
        return e === void 0 ? this._defaultValue : e
    }
    set value(e) {
        this._object[this._key] = e
    }
}

function ah(t, e, n) {
    const s = t[e];
    return he(s) ? s : new oh(t, e, n)
}
var Ac;
class lh {
    constructor(e, n, s, r) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ac] = !1, this._dirty = !0, this.effect = new mo(e, () => {
            this._dirty || (this._dirty = !0, Tc(this))
        }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s
    }
    get value() {
        const e = ne(this);
        return Ec(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value
    }
    set value(e) {
        this._setter(e)
    }
}
Ac = "__v_isReadonly";

function ch(t, e, n = !1) {
    let s, r;
    const i = q(t);
    return i ? (s = t, r = lt) : (s = t.get, r = t.set), new lh(s, r, i || !r, n)
}

function Zt(t, e, n, s) {
    let r;
    try {
        r = s ? t(...s) : t()
    } catch (i) {
        Fr(i, e, n)
    }
    return r
}

function Ze(t, e, n, s) {
    if (q(t)) {
        const i = Zt(t, e, n, s);
        return i && ac(i) && i.catch(o => {
            Fr(o, e, n)
        }), i
    }
    const r = [];
    for (let i = 0; i < t.length; i++) r.push(Ze(t[i], e, n, s));
    return r
}

function Fr(t, e, n, s = !0) {
    const r = e ? e.vnode : null;
    if (e) {
        let i = e.parent;
        const o = e.proxy,
            a = n;
        for (; i;) {
            const c = i.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](t, o, a) === !1) return
            }
            i = i.parent
        }
        const l = e.appContext.config.errorHandler;
        if (l) {
            Zt(l, null, 10, [t, o, a]);
            return
        }
    }
    uh(t, n, r, s)
}

function uh(t, e, n, s = !0) {
    console.error(t)
}
let ws = !1,
    Mi = !1;
const Oe = [];
let vt = 0;
const Ln = [];
let kt = null,
    un = 0;
const Cc = Promise.resolve();
let wo = null;

function xo(t) {
    const e = wo || Cc;
    return t ? e.then(this ? t.bind(this) : t) : e
}

function dh(t) {
    let e = vt + 1,
        n = Oe.length;
    for (; e < n;) {
        const s = e + n >>> 1;
        xs(Oe[s]) < t ? e = s + 1 : n = s
    }
    return e
}

function Io(t) {
    (!Oe.length || !Oe.includes(t, ws && t.allowRecurse ? vt + 1 : vt)) && (t.id == null ? Oe.push(t) : Oe.splice(dh(t.id), 0, t), Rc())
}

function Rc() {
    !ws && !Mi && (Mi = !0, wo = Cc.then(Pc))
}

function fh(t) {
    const e = Oe.indexOf(t);
    e > vt && Oe.splice(e, 1)
}

function hh(t) {
    V(t) ? Ln.push(...t) : (!kt || !kt.includes(t, t.allowRecurse ? un + 1 : un)) && Ln.push(t), Rc()
}

function ma(t, e = ws ? vt + 1 : 0) {
    for (; e < Oe.length; e++) {
        const n = Oe[e];
        n && n.pre && (Oe.splice(e, 1), e--, n())
    }
}

function Oc(t) {
    if (Ln.length) {
        const e = [...new Set(Ln)];
        if (Ln.length = 0, kt) {
            kt.push(...e);
            return
        }
        for (kt = e, kt.sort((n, s) => xs(n) - xs(s)), un = 0; un < kt.length; un++) kt[un]();
        kt = null, un = 0
    }
}
const xs = t => t.id == null ? 1 / 0 : t.id,
    ph = (t, e) => {
        const n = xs(t) - xs(e);
        if (n === 0) {
            if (t.pre && !e.pre) return -1;
            if (e.pre && !t.pre) return 1
        }
        return n
    };

function Pc(t) {
    Mi = !1, ws = !0, Oe.sort(ph);
    const e = lt;
    try {
        for (vt = 0; vt < Oe.length; vt++) {
            const n = Oe[vt];
            n && n.active !== !1 && Zt(n, null, 14)
        }
    } finally {
        vt = 0, Oe.length = 0, Oc(), ws = !1, wo = null, (Oe.length || Ln.length) && Pc()
    }
}

function mh(t, e, ...n) {
    if (t.isUnmounted) return;
    const s = t.vnode.props || de;
    let r = n;
    const i = e.startsWith("update:"),
        o = i && e.slice(7);
    if (o && o in s) {
        const u = `${o==="modelValue"?"model":o}Modifiers`,
            {
                number: f,
                trim: h
            } = s[u] || de;
        h && (r = n.map(g => Ie(g) ? g.trim() : g)), f && (r = n.map(vs))
    }
    let a, l = s[a = li(e)] || s[a = li(Et(e))];
    !l && i && (l = s[a = li(Yn(e))]), l && Ze(l, t, 6, r);
    const c = s[a + "Once"];
    if (c) {
        if (!t.emitted) t.emitted = {};
        else if (t.emitted[a]) return;
        t.emitted[a] = !0, Ze(c, t, 6, r)
    }
}

function Nc(t, e, n = !1) {
    const s = e.emitsCache,
        r = s.get(t);
    if (r !== void 0) return r;
    const i = t.emits;
    let o = {},
        a = !1;
    if (!q(t)) {
        const l = c => {
            const u = Nc(c, e, !0);
            u && (a = !0, Pe(o, u))
        };
        !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l)
    }
    return !i && !a ? (ue(t) && s.set(t, null), null) : (V(i) ? i.forEach(l => o[l] = null) : Pe(o, i), ue(t) && s.set(t, o), o)
}

function $r(t, e) {
    return !t || !Pr(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), te(t, e[0].toLowerCase() + e.slice(1)) || te(t, Yn(e)) || te(t, e))
}
let We = null,
    Dc = null;

function pr(t) {
    const e = We;
    return We = t, Dc = t && t.type.__scopeId || null, e
}

function gh(t, e = We, n) {
    if (!e || t._n) return t;
    const s = (...r) => {
        s._d && Sa(-1);
        const i = pr(e);
        let o;
        try {
            o = t(...r)
        } finally {
            pr(i), s._d && Sa(1)
        }
        return o
    };
    return s._n = !0, s._c = !0, s._d = !0, s
}

function ci(t) {
    const {
        type: e,
        vnode: n,
        proxy: s,
        withProxy: r,
        props: i,
        propsOptions: [o],
        slots: a,
        attrs: l,
        emit: c,
        render: u,
        renderCache: f,
        data: h,
        setupState: g,
        ctx: w,
        inheritAttrs: S
    } = t;
    let F, R;
    const U = pr(t);
    try {
        if (n.shapeFlag & 4) {
            const z = r || s;
            F = _t(u.call(z, z, f, i, g, h, w)), R = l
        } else {
            const z = e;
            F = _t(z.length > 1 ? z(i, {
                attrs: l,
                slots: a,
                emit: c
            }) : z(i, null)), R = e.props ? l : yh(l)
        }
    } catch (z) {
        as.length = 0, Fr(z, t, 1), F = ge(ct)
    }
    let P = F;
    if (R && S !== !1) {
        const z = Object.keys(R),
            {
                shapeFlag: W
            } = P;
        z.length && W & 7 && (o && z.some(uo) && (R = _h(R, o)), P = sn(P, R))
    }
    return n.dirs && (P = sn(P), P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs), n.transition && (P.transition = n.transition), F = P, pr(U), F
}
const yh = t => {
        let e;
        for (const n in t)(n === "class" || n === "style" || Pr(n)) && ((e || (e = {}))[n] = t[n]);
        return e
    },
    _h = (t, e) => {
        const n = {};
        for (const s in t)(!uo(s) || !(s.slice(9) in e)) && (n[s] = t[s]);
        return n
    };

function vh(t, e, n) {
    const {
        props: s,
        children: r,
        component: i
    } = t, {
        props: o,
        children: a,
        patchFlag: l
    } = e, c = i.emitsOptions;
    if (e.dirs || e.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return s ? ga(s, o, c) : !!o;
        if (l & 8) {
            const u = e.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const h = u[f];
                if (o[h] !== s[h] && !$r(c, h)) return !0
            }
        }
    } else return (r || a) && (!a || !a.$stable) ? !0 : s === o ? !1 : s ? o ? ga(s, o, c) : !0 : !!o;
    return !1
}

function ga(t, e, n) {
    const s = Object.keys(e);
    if (s.length !== Object.keys(t).length) return !0;
    for (let r = 0; r < s.length; r++) {
        const i = s[r];
        if (e[i] !== t[i] && !$r(n, i)) return !0
    }
    return !1
}

function bh({
    vnode: t,
    parent: e
}, n) {
    for (; e && e.subTree === t;)(t = e.vnode).el = n, e = e.parent
}
const wh = t => t.__isSuspense;

function xh(t, e) {
    e && e.pendingBranch ? V(t) ? e.effects.push(...t) : e.effects.push(t) : hh(t)
}

function sr(t, e) {
    if (ke) {
        let n = ke.provides;
        const s = ke.parent && ke.parent.provides;
        s === n && (n = ke.provides = Object.create(s)), n[t] = e
    }
}

function wt(t, e, n = !1) {
    const s = ke || We;
    if (s) {
        const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
        if (r && t in r) return r[t];
        if (arguments.length > 1) return n && q(e) ? e.call(s.proxy) : e
    }
}
const Qs = {};

function is(t, e, n) {
    return Mc(t, e, n)
}

function Mc(t, e, {
    immediate: n,
    deep: s,
    flush: r,
    onTrack: i,
    onTrigger: o
} = de) {
    const a = ke;
    let l, c = !1,
        u = !1;
    if (he(t) ? (l = () => t.value, c = hr(t)) : Xt(t) ? (l = () => t, s = !0) : V(t) ? (u = !0, c = t.some(P => Xt(P) || hr(P)), l = () => t.map(P => {
            if (he(P)) return P.value;
            if (Xt(P)) return hn(P);
            if (q(P)) return Zt(P, a, 2)
        })) : q(t) ? e ? l = () => Zt(t, a, 2) : l = () => {
            if (!(a && a.isUnmounted)) return f && f(), Ze(t, a, 3, [h])
        } : l = lt, e && s) {
        const P = l;
        l = () => hn(P())
    }
    let f, h = P => {
            f = R.onStop = () => {
                Zt(P, a, 4)
            }
        },
        g;
    if (Es)
        if (h = lt, e ? n && Ze(e, a, 3, [l(), u ? [] : void 0, h]) : l(), r === "sync") {
            const P = _p();
            g = P.__watcherHandles || (P.__watcherHandles = [])
        } else return lt;
    let w = u ? new Array(t.length).fill(Qs) : Qs;
    const S = () => {
        if (R.active)
            if (e) {
                const P = R.run();
                (s || c || (u ? P.some((z, W) => _s(z, w[W])) : _s(P, w))) && (f && f(), Ze(e, a, 3, [P, w === Qs ? void 0 : u && w[0] === Qs ? [] : w, h]), w = P)
            } else R.run()
    };
    S.allowRecurse = !!e;
    let F;
    r === "sync" ? F = S : r === "post" ? F = () => Fe(S, a && a.suspense) : (S.pre = !0, a && (S.id = a.uid), F = () => Io(S));
    const R = new mo(l, F);
    e ? n ? S() : w = R.run() : r === "post" ? Fe(R.run.bind(R), a && a.suspense) : R.run();
    const U = () => {
        R.stop(), a && a.scope && fo(a.scope.effects, R)
    };
    return g && g.push(U), U
}

function Ih(t, e, n) {
    const s = this.proxy,
        r = Ie(t) ? t.includes(".") ? Lc(s, t) : () => s[t] : t.bind(s, s);
    let i;
    q(e) ? i = e : (i = e.handler, n = e);
    const o = ke;
    Bn(this);
    const a = Mc(r, i.bind(s), n);
    return o ? Bn(o) : yn(), a
}

function Lc(t, e) {
    const n = e.split(".");
    return () => {
        let s = t;
        for (let r = 0; r < n.length && s; r++) s = s[n[r]];
        return s
    }
}

function hn(t, e) {
    if (!ue(t) || t.__v_skip || (e = e || new Set, e.has(t))) return t;
    if (e.add(t), he(t)) hn(t.value, e);
    else if (V(t))
        for (let n = 0; n < t.length; n++) hn(t[n], e);
    else if (Nr(t) || Mn(t)) t.forEach(n => {
        hn(n, e)
    });
    else if (cc(t))
        for (const n in t) hn(t[n], e);
    return t
}

function Eh() {
    const t = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return jr(() => {
        t.isMounted = !0
    }), jc(() => {
        t.isUnmounting = !0
    }), t
}
const Qe = [Function, Array],
    Th = {
        name: "BaseTransition",
        props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: Qe,
            onEnter: Qe,
            onAfterEnter: Qe,
            onEnterCancelled: Qe,
            onBeforeLeave: Qe,
            onLeave: Qe,
            onAfterLeave: Qe,
            onLeaveCancelled: Qe,
            onBeforeAppear: Qe,
            onAppear: Qe,
            onAfterAppear: Qe,
            onAppearCancelled: Qe
        },
        setup(t, {
            slots: e
        }) {
            const n = eu(),
                s = Eh();
            let r;
            return () => {
                const i = e.default && $c(e.default(), !0);
                if (!i || !i.length) return;
                let o = i[0];
                if (i.length > 1) {
                    for (const S of i)
                        if (S.type !== ct) {
                            o = S;
                            break
                        }
                }
                const a = ne(t),
                    {
                        mode: l
                    } = a;
                if (s.isLeaving) return ui(o);
                const c = ya(o);
                if (!c) return ui(o);
                const u = Li(c, a, s, n);
                Fi(c, u);
                const f = n.subTree,
                    h = f && ya(f);
                let g = !1;
                const {
                    getTransitionKey: w
                } = c.type;
                if (w) {
                    const S = w();
                    r === void 0 ? r = S : S !== r && (r = S, g = !0)
                }
                if (h && h.type !== ct && (!dn(c, h) || g)) {
                    const S = Li(h, a, s, n);
                    if (Fi(h, S), l === "out-in") return s.isLeaving = !0, S.afterLeave = () => {
                        s.isLeaving = !1, n.update.active !== !1 && n.update()
                    }, ui(o);
                    l === "in-out" && c.type !== ct && (S.delayLeave = (F, R, U) => {
                        const P = Fc(s, h);
                        P[String(h.key)] = h, F._leaveCb = () => {
                            R(), F._leaveCb = void 0, delete u.delayedLeave
                        }, u.delayedLeave = U
                    })
                }
                return o
            }
        }
    },
    Sh = Th;

function Fc(t, e) {
    const {
        leavingVNodes: n
    } = t;
    let s = n.get(e.type);
    return s || (s = Object.create(null), n.set(e.type, s)), s
}

function Li(t, e, n, s) {
    const {
        appear: r,
        mode: i,
        persisted: o = !1,
        onBeforeEnter: a,
        onEnter: l,
        onAfterEnter: c,
        onEnterCancelled: u,
        onBeforeLeave: f,
        onLeave: h,
        onAfterLeave: g,
        onLeaveCancelled: w,
        onBeforeAppear: S,
        onAppear: F,
        onAfterAppear: R,
        onAppearCancelled: U
    } = e, P = String(t.key), z = Fc(n, t), W = (O, Y) => {
        O && Ze(O, s, 9, Y)
    }, ae = (O, Y) => {
        const X = Y[1];
        W(O, Y), V(O) ? O.every(pe => pe.length <= 1) && X() : O.length <= 1 && X()
    }, K = {
        mode: i,
        persisted: o,
        beforeEnter(O) {
            let Y = a;
            if (!n.isMounted)
                if (r) Y = S || a;
                else return;
            O._leaveCb && O._leaveCb(!0);
            const X = z[P];
            X && dn(t, X) && X.el._leaveCb && X.el._leaveCb(), W(Y, [O])
        },
        enter(O) {
            let Y = l,
                X = c,
                pe = u;
            if (!n.isMounted)
                if (r) Y = F || l, X = R || c, pe = U || u;
                else return;
            let Ee = !1;
            const Be = O._enterCb = De => {
                Ee || (Ee = !0, De ? W(pe, [O]) : W(X, [O]), K.delayedLeave && K.delayedLeave(), O._enterCb = void 0)
            };
            Y ? ae(Y, [O, Be]) : Be()
        },
        leave(O, Y) {
            const X = String(t.key);
            if (O._enterCb && O._enterCb(!0), n.isUnmounting) return Y();
            W(f, [O]);
            let pe = !1;
            const Ee = O._leaveCb = Be => {
                pe || (pe = !0, Y(), Be ? W(w, [O]) : W(g, [O]), O._leaveCb = void 0, z[X] === t && delete z[X])
            };
            z[X] = t, h ? ae(h, [O, Ee]) : Ee()
        },
        clone(O) {
            return Li(O, e, n, s)
        }
    };
    return K
}

function ui(t) {
    if (Ur(t)) return t = sn(t), t.children = null, t
}

function ya(t) {
    return Ur(t) ? t.children ? t.children[0] : void 0 : t
}

function Fi(t, e) {
    t.shapeFlag & 6 && t.component ? Fi(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
}

function $c(t, e = !1, n) {
    let s = [],
        r = 0;
    for (let i = 0; i < t.length; i++) {
        let o = t[i];
        const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === ze ? (o.patchFlag & 128 && r++, s = s.concat($c(o.children, e, a))) : (e || o.type !== ct) && s.push(a != null ? sn(o, {
            key: a
        }) : o)
    }
    if (r > 1)
        for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
    return s
}

function Uc(t) {
    return q(t) ? {
        setup: t,
        name: t.name
    } : t
}
const rr = t => !!t.type.__asyncLoader,
    Ur = t => t.type.__isKeepAlive;

function kh(t, e) {
    Vc(t, "a", e)
}

function Ah(t, e) {
    Vc(t, "da", e)
}

function Vc(t, e, n = ke) {
    const s = t.__wdc || (t.__wdc = () => {
        let r = n;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return t()
    });
    if (Vr(e, s, n), n) {
        let r = n.parent;
        for (; r && r.parent;) Ur(r.parent.vnode) && Ch(s, e, n, r), r = r.parent
    }
}

function Ch(t, e, n, s) {
    const r = Vr(e, t, s, !0);
    Bc(() => {
        fo(s[e], r)
    }, n)
}

function Vr(t, e, n = ke, s = !1) {
    if (n) {
        const r = n[t] || (n[t] = []),
            i = e.__weh || (e.__weh = (...o) => {
                if (n.isUnmounted) return;
                Qn(), Bn(n);
                const a = Ze(e, n, t, o);
                return yn(), Xn(), a
            });
        return s ? r.unshift(i) : r.push(i), i
    }
}
const Lt = t => (e, n = ke) => (!Es || t === "sp") && Vr(t, (...s) => e(...s), n),
    Rh = Lt("bm"),
    jr = Lt("m"),
    Oh = Lt("bu"),
    Ph = Lt("u"),
    jc = Lt("bum"),
    Bc = Lt("um"),
    Nh = Lt("sp"),
    Dh = Lt("rtg"),
    Mh = Lt("rtc");

function Lh(t, e = ke) {
    Vr("ec", t, e)
}

function Xe(t, e) {
    const n = We;
    if (n === null) return t;
    const s = zr(n) || n.proxy,
        r = t.dirs || (t.dirs = []);
    for (let i = 0; i < e.length; i++) {
        let [o, a, l, c = de] = e[i];
        o && (q(o) && (o = {
            mounted: o,
            updated: o
        }), o.deep && hn(a), r.push({
            dir: o,
            instance: s,
            value: a,
            oldValue: void 0,
            arg: l,
            modifiers: c
        }))
    }
    return t
}

function on(t, e, n, s) {
    const r = t.dirs,
        i = e && e.dirs;
    for (let o = 0; o < r.length; o++) {
        const a = r[o];
        i && (a.oldValue = i[o].value);
        let l = a.dir[s];
        l && (Qn(), Ze(l, n, 8, [t.el, a, t, e]), Xn())
    }
}
const Hc = "components";

function Fh(t, e) {
    return Uh(Hc, t, !0, e) || t
}
const $h = Symbol();

function Uh(t, e, n = !0, s = !1) {
    const r = We || ke;
    if (r) {
        const i = r.type;
        if (t === Hc) {
            const a = mp(i, !1);
            if (a && (a === e || a === Et(e) || a === Mr(Et(e)))) return i
        }
        const o = _a(r[t] || i[t], e) || _a(r.appContext[t], e);
        return !o && s ? i : o
    }
}

function _a(t, e) {
    return t && (t[e] || t[Et(e)] || t[Mr(Et(e))])
}

function va(t, e, n, s) {
    let r;
    const i = n && n[s];
    if (V(t) || Ie(t)) {
        r = new Array(t.length);
        for (let o = 0, a = t.length; o < a; o++) r[o] = e(t[o], o, void 0, i && i[o])
    } else if (typeof t == "number") {
        r = new Array(t);
        for (let o = 0; o < t; o++) r[o] = e(o + 1, o, void 0, i && i[o])
    } else if (ue(t))
        if (t[Symbol.iterator]) r = Array.from(t, (o, a) => e(o, a, void 0, i && i[a]));
        else {
            const o = Object.keys(t);
            r = new Array(o.length);
            for (let a = 0, l = o.length; a < l; a++) {
                const c = o[a];
                r[a] = e(t[c], c, a, i && i[a])
            }
        }
    else r = [];
    return n && (n[s] = r), r
}
const $i = t => t ? tu(t) ? zr(t) || t.proxy : $i(t.parent) : null,
    os = Pe(Object.create(null), {
        $: t => t,
        $el: t => t.vnode.el,
        $data: t => t.data,
        $props: t => t.props,
        $attrs: t => t.attrs,
        $slots: t => t.slots,
        $refs: t => t.refs,
        $parent: t => $i(t.parent),
        $root: t => $i(t.root),
        $emit: t => t.emit,
        $options: t => Eo(t),
        $forceUpdate: t => t.f || (t.f = () => Io(t.update)),
        $nextTick: t => t.n || (t.n = xo.bind(t.proxy)),
        $watch: t => Ih.bind(t)
    }),
    di = (t, e) => t !== de && !t.__isScriptSetup && te(t, e),
    Vh = {
        get({
            _: t
        }, e) {
            const {
                ctx: n,
                setupState: s,
                data: r,
                props: i,
                accessCache: o,
                type: a,
                appContext: l
            } = t;
            let c;
            if (e[0] !== "$") {
                const g = o[e];
                if (g !== void 0) switch (g) {
                    case 1:
                        return s[e];
                    case 2:
                        return r[e];
                    case 4:
                        return n[e];
                    case 3:
                        return i[e]
                } else {
                    if (di(s, e)) return o[e] = 1, s[e];
                    if (r !== de && te(r, e)) return o[e] = 2, r[e];
                    if ((c = t.propsOptions[0]) && te(c, e)) return o[e] = 3, i[e];
                    if (n !== de && te(n, e)) return o[e] = 4, n[e];
                    Ui && (o[e] = 0)
                }
            }
            const u = os[e];
            let f, h;
            if (u) return e === "$attrs" && Ye(t, "get", e), u(t);
            if ((f = a.__cssModules) && (f = f[e])) return f;
            if (n !== de && te(n, e)) return o[e] = 4, n[e];
            if (h = l.config.globalProperties, te(h, e)) return h[e]
        },
        set({
            _: t
        }, e, n) {
            const {
                data: s,
                setupState: r,
                ctx: i
            } = t;
            return di(r, e) ? (r[e] = n, !0) : s !== de && te(s, e) ? (s[e] = n, !0) : te(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (i[e] = n, !0)
        },
        has({
            _: {
                data: t,
                setupState: e,
                accessCache: n,
                ctx: s,
                appContext: r,
                propsOptions: i
            }
        }, o) {
            let a;
            return !!n[o] || t !== de && te(t, o) || di(e, o) || (a = i[0]) && te(a, o) || te(s, o) || te(os, o) || te(r.config.globalProperties, o)
        },
        defineProperty(t, e, n) {
            return n.get != null ? t._.accessCache[e] = 0 : te(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n)
        }
    };
let Ui = !0;

function jh(t) {
    const e = Eo(t),
        n = t.proxy,
        s = t.ctx;
    Ui = !1, e.beforeCreate && ba(e.beforeCreate, t, "bc");
    const {
        data: r,
        computed: i,
        methods: o,
        watch: a,
        provide: l,
        inject: c,
        created: u,
        beforeMount: f,
        mounted: h,
        beforeUpdate: g,
        updated: w,
        activated: S,
        deactivated: F,
        beforeDestroy: R,
        beforeUnmount: U,
        destroyed: P,
        unmounted: z,
        render: W,
        renderTracked: ae,
        renderTriggered: K,
        errorCaptured: O,
        serverPrefetch: Y,
        expose: X,
        inheritAttrs: pe,
        components: Ee,
        directives: Be,
        filters: De
    } = e;
    if (c && Bh(c, s, null, t.appContext.config.unwrapInjectedRef), o)
        for (const le in o) {
            const ie = o[le];
            q(ie) && (s[le] = ie.bind(n))
        }
    if (r) {
        const le = r.call(n, n);
        ue(le) && (t.data = Zn(le))
    }
    if (Ui = !0, i)
        for (const le in i) {
            const ie = i[le],
                st = q(ie) ? ie.bind(n, n) : q(ie.get) ? ie.get.bind(n, n) : lt,
                rn = !q(ie) && q(ie.set) ? ie.set.bind(n) : lt,
                rt = Ve({
                    get: st,
                    set: rn
                });
            Object.defineProperty(s, le, {
                enumerable: !0,
                configurable: !0,
                get: () => rt.value,
                set: Le => rt.value = Le
            })
        }
    if (a)
        for (const le in a) qc(a[le], s, n, le);
    if (l) {
        const le = q(l) ? l.call(n) : l;
        Reflect.ownKeys(le).forEach(ie => {
            sr(ie, le[ie])
        })
    }
    u && ba(u, t, "c");

    function ve(le, ie) {
        V(ie) ? ie.forEach(st => le(st.bind(n))) : ie && le(ie.bind(n))
    }
    if (ve(Rh, f), ve(jr, h), ve(Oh, g), ve(Ph, w), ve(kh, S), ve(Ah, F), ve(Lh, O), ve(Mh, ae), ve(Dh, K), ve(jc, U), ve(Bc, z), ve(Nh, Y), V(X))
        if (X.length) {
            const le = t.exposed || (t.exposed = {});
            X.forEach(ie => {
                Object.defineProperty(le, ie, {
                    get: () => n[ie],
                    set: st => n[ie] = st
                })
            })
        } else t.exposed || (t.exposed = {});
    W && t.render === lt && (t.render = W), pe != null && (t.inheritAttrs = pe), Ee && (t.components = Ee), Be && (t.directives = Be)
}

function Bh(t, e, n = lt, s = !1) {
    V(t) && (t = Vi(t));
    for (const r in t) {
        const i = t[r];
        let o;
        ue(i) ? "default" in i ? o = wt(i.from || r, i.default, !0) : o = wt(i.from || r) : o = wt(i), he(o) && s ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: a => o.value = a
        }) : e[r] = o
    }
}

function ba(t, e, n) {
    Ze(V(t) ? t.map(s => s.bind(e.proxy)) : t.bind(e.proxy), e, n)
}

function qc(t, e, n, s) {
    const r = s.includes(".") ? Lc(n, s) : () => n[s];
    if (Ie(t)) {
        const i = e[t];
        q(i) && is(r, i)
    } else if (q(t)) is(r, t.bind(n));
    else if (ue(t))
        if (V(t)) t.forEach(i => qc(i, e, n, s));
        else {
            const i = q(t.handler) ? t.handler.bind(n) : e[t.handler];
            q(i) && is(r, i, t)
        }
}

function Eo(t) {
    const e = t.type,
        {
            mixins: n,
            extends: s
        } = e,
        {
            mixins: r,
            optionsCache: i,
            config: {
                optionMergeStrategies: o
            }
        } = t.appContext,
        a = i.get(e);
    let l;
    return a ? l = a : !r.length && !n && !s ? l = e : (l = {}, r.length && r.forEach(c => mr(l, c, o, !0)), mr(l, e, o)), ue(e) && i.set(e, l), l
}

function mr(t, e, n, s = !1) {
    const {
        mixins: r,
        extends: i
    } = e;
    i && mr(t, i, n, !0), r && r.forEach(o => mr(t, o, n, !0));
    for (const o in e)
        if (!(s && o === "expose")) {
            const a = Hh[o] || n && n[o];
            t[o] = a ? a(t[o], e[o]) : e[o]
        } return t
}
const Hh = {
    data: wa,
    props: ln,
    emits: ln,
    methods: ln,
    computed: ln,
    beforeCreate: Me,
    created: Me,
    beforeMount: Me,
    mounted: Me,
    beforeUpdate: Me,
    updated: Me,
    beforeDestroy: Me,
    beforeUnmount: Me,
    destroyed: Me,
    unmounted: Me,
    activated: Me,
    deactivated: Me,
    errorCaptured: Me,
    serverPrefetch: Me,
    components: ln,
    directives: ln,
    watch: zh,
    provide: wa,
    inject: qh
};

function wa(t, e) {
    return e ? t ? function () {
        return Pe(q(t) ? t.call(this, this) : t, q(e) ? e.call(this, this) : e)
    } : e : t
}

function qh(t, e) {
    return ln(Vi(t), Vi(e))
}

function Vi(t) {
    if (V(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
        return e
    }
    return t
}

function Me(t, e) {
    return t ? [...new Set([].concat(t, e))] : e
}

function ln(t, e) {
    return t ? Pe(Pe(Object.create(null), t), e) : e
}

function zh(t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = Pe(Object.create(null), t);
    for (const s in e) n[s] = Me(t[s], e[s]);
    return n
}

function Kh(t, e, n, s = !1) {
    const r = {},
        i = {};
    fr(i, Hr, 1), t.propsDefaults = Object.create(null), zc(t, e, r, i);
    for (const o in t.propsOptions[0]) o in r || (r[o] = void 0);
    n ? t.props = s ? r : th(r) : t.type.props ? t.props = r : t.props = i, t.attrs = i
}

function Wh(t, e, n, s) {
    const {
        props: r,
        attrs: i,
        vnode: {
            patchFlag: o
        }
    } = t, a = ne(r), [l] = t.propsOptions;
    let c = !1;
    if ((s || o > 0) && !(o & 16)) {
        if (o & 8) {
            const u = t.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let h = u[f];
                if ($r(t.emitsOptions, h)) continue;
                const g = e[h];
                if (l)
                    if (te(i, h)) g !== i[h] && (i[h] = g, c = !0);
                    else {
                        const w = Et(h);
                        r[w] = ji(l, a, w, g, t, !1)
                    }
                else g !== i[h] && (i[h] = g, c = !0)
            }
        }
    } else {
        zc(t, e, r, i) && (c = !0);
        let u;
        for (const f in a)(!e || !te(e, f) && ((u = Yn(f)) === f || !te(e, u))) && (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (r[f] = ji(l, a, f, void 0, t, !0)) : delete r[f]);
        if (i !== a)
            for (const f in i)(!e || !te(e, f)) && (delete i[f], c = !0)
    }
    c && Ot(t, "set", "$attrs")
}

function zc(t, e, n, s) {
    const [r, i] = t.propsOptions;
    let o = !1,
        a;
    if (e)
        for (let l in e) {
            if (tr(l)) continue;
            const c = e[l];
            let u;
            r && te(r, u = Et(l)) ? !i || !i.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : $r(t.emitsOptions, l) || (!(l in s) || c !== s[l]) && (s[l] = c, o = !0)
        }
    if (i) {
        const l = ne(n),
            c = a || de;
        for (let u = 0; u < i.length; u++) {
            const f = i[u];
            n[f] = ji(r, l, f, c[f], t, !te(c, f))
        }
    }
    return o
}

function ji(t, e, n, s, r, i) {
    const o = t[n];
    if (o != null) {
        const a = te(o, "default");
        if (a && s === void 0) {
            const l = o.default;
            if (o.type !== Function && q(l)) {
                const {
                    propsDefaults: c
                } = r;
                n in c ? s = c[n] : (Bn(r), s = c[n] = l.call(null, e), yn())
            } else s = l
        }
        o[0] && (i && !a ? s = !1 : o[1] && (s === "" || s === Yn(n)) && (s = !0))
    }
    return s
}

function Kc(t, e, n = !1) {
    const s = e.propsCache,
        r = s.get(t);
    if (r) return r;
    const i = t.props,
        o = {},
        a = [];
    let l = !1;
    if (!q(t)) {
        const u = f => {
            l = !0;
            const [h, g] = Kc(f, e, !0);
            Pe(o, h), g && a.push(...g)
        };
        !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u)
    }
    if (!i && !l) return ue(t) && s.set(t, Dn), Dn;
    if (V(i))
        for (let u = 0; u < i.length; u++) {
            const f = Et(i[u]);
            xa(f) && (o[f] = de)
        } else if (i)
            for (const u in i) {
                const f = Et(u);
                if (xa(f)) {
                    const h = i[u],
                        g = o[f] = V(h) || q(h) ? {
                            type: h
                        } : Object.assign({}, h);
                    if (g) {
                        const w = Ta(Boolean, g.type),
                            S = Ta(String, g.type);
                        g[0] = w > -1, g[1] = S < 0 || w < S, (w > -1 || te(g, "default")) && a.push(f)
                    }
                }
            }
    const c = [o, a];
    return ue(t) && s.set(t, c), c
}

function xa(t) {
    return t[0] !== "$"
}

function Ia(t) {
    const e = t && t.toString().match(/^\s*function (\w+)/);
    return e ? e[1] : t === null ? "null" : ""
}

function Ea(t, e) {
    return Ia(t) === Ia(e)
}

function Ta(t, e) {
    return V(e) ? e.findIndex(n => Ea(n, t)) : q(e) && Ea(e, t) ? 0 : -1
}
const Wc = t => t[0] === "_" || t === "$stable",
    To = t => V(t) ? t.map(_t) : [_t(t)],
    Gh = (t, e, n) => {
        if (e._n) return e;
        const s = gh((...r) => To(e(...r)), n);
        return s._c = !1, s
    },
    Gc = (t, e, n) => {
        const s = t._ctx;
        for (const r in t) {
            if (Wc(r)) continue;
            const i = t[r];
            if (q(i)) e[r] = Gh(r, i, s);
            else if (i != null) {
                const o = To(i);
                e[r] = () => o
            }
        }
    },
    Jc = (t, e) => {
        const n = To(e);
        t.slots.default = () => n
    },
    Jh = (t, e) => {
        if (t.vnode.shapeFlag & 32) {
            const n = e._;
            n ? (t.slots = ne(e), fr(e, "_", n)) : Gc(e, t.slots = {})
        } else t.slots = {}, e && Jc(t, e);
        fr(t.slots, Hr, 1)
    },
    Yh = (t, e, n) => {
        const {
            vnode: s,
            slots: r
        } = t;
        let i = !0,
            o = de;
        if (s.shapeFlag & 32) {
            const a = e._;
            a ? n && a === 1 ? i = !1 : (Pe(r, e), !n && a === 1 && delete r._) : (i = !e.$stable, Gc(e, r)), o = e
        } else e && (Jc(t, e), o = {
            default: 1
        });
        if (i)
            for (const a in r) !Wc(a) && !(a in o) && delete r[a]
    };

function Yc() {
    return {
        app: null,
        config: {
            isNativeTag: bf,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Qh = 0;

function Xh(t, e) {
    return function (s, r = null) {
        q(s) || (s = Object.assign({}, s)), r != null && !ue(r) && (r = null);
        const i = Yc(),
            o = new Set;
        let a = !1;
        const l = i.app = {
            _uid: Qh++,
            _component: s,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: vp,
            get config() {
                return i.config
            },
            set config(c) {},
            use(c, ...u) {
                return o.has(c) || (c && q(c.install) ? (o.add(c), c.install(l, ...u)) : q(c) && (o.add(c), c(l, ...u))), l
            },
            mixin(c) {
                return i.mixins.includes(c) || i.mixins.push(c), l
            },
            component(c, u) {
                return u ? (i.components[c] = u, l) : i.components[c]
            },
            directive(c, u) {
                return u ? (i.directives[c] = u, l) : i.directives[c]
            },
            mount(c, u, f) {
                if (!a) {
                    const h = ge(s, r);
                    return h.appContext = i, u && e ? e(h, c) : t(h, c, f), a = !0, l._container = c, c.__vue_app__ = l, zr(h.component) || h.component.proxy
                }
            },
            unmount() {
                a && (t(null, l._container), delete l._container.__vue_app__)
            },
            provide(c, u) {
                return i.provides[c] = u, l
            }
        };
        return l
    }
}

function Bi(t, e, n, s, r = !1) {
    if (V(t)) {
        t.forEach((h, g) => Bi(h, e && (V(e) ? e[g] : e), n, s, r));
        return
    }
    if (rr(s) && !r) return;
    const i = s.shapeFlag & 4 ? zr(s.component) || s.component.proxy : s.el,
        o = r ? null : i,
        {
            i: a,
            r: l
        } = t,
        c = e && e.r,
        u = a.refs === de ? a.refs = {} : a.refs,
        f = a.setupState;
    if (c != null && c !== l && (Ie(c) ? (u[c] = null, te(f, c) && (f[c] = null)) : he(c) && (c.value = null)), q(l)) Zt(l, a, 12, [o, u]);
    else {
        const h = Ie(l),
            g = he(l);
        if (h || g) {
            const w = () => {
                if (t.f) {
                    const S = h ? te(f, l) ? f[l] : u[l] : l.value;
                    r ? V(S) && fo(S, i) : V(S) ? S.includes(i) || S.push(i) : h ? (u[l] = [i], te(f, l) && (f[l] = u[l])) : (l.value = [i], t.k && (u[t.k] = l.value))
                } else h ? (u[l] = o, te(f, l) && (f[l] = o)) : g && (l.value = o, t.k && (u[t.k] = o))
            };
            o ? (w.id = -1, Fe(w, n)) : w()
        }
    }
}
const Fe = xh;

function Zh(t) {
    return ep(t)
}

function ep(t, e) {
    const n = Sf();
    n.__VUE__ = !0;
    const {
        insert: s,
        remove: r,
        patchProp: i,
        createElement: o,
        createText: a,
        createComment: l,
        setText: c,
        setElementText: u,
        parentNode: f,
        nextSibling: h,
        setScopeId: g = lt,
        insertStaticContent: w
    } = t, S = (d, p, y, _ = null, b = null, E = null, A = !1, I = null, T = !!p.dynamicChildren) => {
        if (d === p) return;
        d && !dn(d, p) && (_ = k(d), Le(d, b, E, !0), d = null), p.patchFlag === -2 && (T = !1, p.dynamicChildren = null);
        const {
            type: x,
            ref: M,
            shapeFlag: N
        } = p;
        switch (x) {
            case Br:
                F(d, p, y, _);
                break;
            case ct:
                R(d, p, y, _);
                break;
            case ir:
                d == null && U(p, y, _, A);
                break;
            case ze:
                Ee(d, p, y, _, b, E, A, I, T);
                break;
            default:
                N & 1 ? W(d, p, y, _, b, E, A, I, T) : N & 6 ? Be(d, p, y, _, b, E, A, I, T) : (N & 64 || N & 128) && x.process(d, p, y, _, b, E, A, I, T, Z)
        }
        M != null && b && Bi(M, d && d.ref, E, p || d, !p)
    }, F = (d, p, y, _) => {
        if (d == null) s(p.el = a(p.children), y, _);
        else {
            const b = p.el = d.el;
            p.children !== d.children && c(b, p.children)
        }
    }, R = (d, p, y, _) => {
        d == null ? s(p.el = l(p.children || ""), y, _) : p.el = d.el
    }, U = (d, p, y, _) => {
        [d.el, d.anchor] = w(d.children, p, y, _, d.el, d.anchor)
    }, P = ({
        el: d,
        anchor: p
    }, y, _) => {
        let b;
        for (; d && d !== p;) b = h(d), s(d, y, _), d = b;
        s(p, y, _)
    }, z = ({
        el: d,
        anchor: p
    }) => {
        let y;
        for (; d && d !== p;) y = h(d), r(d), d = y;
        r(p)
    }, W = (d, p, y, _, b, E, A, I, T) => {
        A = A || p.type === "svg", d == null ? ae(p, y, _, b, E, A, I, T) : Y(d, p, b, E, A, I, T)
    }, ae = (d, p, y, _, b, E, A, I) => {
        let T, x;
        const {
            type: M,
            props: N,
            shapeFlag: L,
            transition: B,
            dirs: J
        } = d;
        if (T = d.el = o(d.type, E, N && N.is, N), L & 8 ? u(T, d.children) : L & 16 && O(d.children, T, null, _, b, E && M !== "foreignObject", A, I), J && on(d, null, _, "created"), N) {
            for (const oe in N) oe !== "value" && !tr(oe) && i(T, oe, null, N[oe], E, d.children, _, b, C);
            "value" in N && i(T, "value", null, N.value), (x = N.onVnodeBeforeMount) && mt(x, _, d)
        }
        K(T, d, d.scopeId, A, _), J && on(d, null, _, "beforeMount");
        const ce = (!b || b && !b.pendingBranch) && B && !B.persisted;
        ce && B.beforeEnter(T), s(T, p, y), ((x = N && N.onVnodeMounted) || ce || J) && Fe(() => {
            x && mt(x, _, d), ce && B.enter(T), J && on(d, null, _, "mounted")
        }, b)
    }, K = (d, p, y, _, b) => {
        if (y && g(d, y), _)
            for (let E = 0; E < _.length; E++) g(d, _[E]);
        if (b) {
            let E = b.subTree;
            if (p === E) {
                const A = b.vnode;
                K(d, A, A.scopeId, A.slotScopeIds, b.parent)
            }
        }
    }, O = (d, p, y, _, b, E, A, I, T = 0) => {
        for (let x = T; x < d.length; x++) {
            const M = d[x] = I ? Vt(d[x]) : _t(d[x]);
            S(null, M, p, y, _, b, E, A, I)
        }
    }, Y = (d, p, y, _, b, E, A) => {
        const I = p.el = d.el;
        let {
            patchFlag: T,
            dynamicChildren: x,
            dirs: M
        } = p;
        T |= d.patchFlag & 16;
        const N = d.props || de,
            L = p.props || de;
        let B;
        y && an(y, !1), (B = L.onVnodeBeforeUpdate) && mt(B, y, p, d), M && on(p, d, y, "beforeUpdate"), y && an(y, !0);
        const J = b && p.type !== "foreignObject";
        if (x ? X(d.dynamicChildren, x, I, y, _, J, E) : A || ie(d, p, I, null, y, _, J, E, !1), T > 0) {
            if (T & 16) pe(I, p, N, L, y, _, b);
            else if (T & 2 && N.class !== L.class && i(I, "class", null, L.class, b), T & 4 && i(I, "style", N.style, L.style, b), T & 8) {
                const ce = p.dynamicProps;
                for (let oe = 0; oe < ce.length; oe++) {
                    const be = ce[oe],
                        it = N[be],
                        An = L[be];
                    (An !== it || be === "value") && i(I, be, it, An, b, d.children, y, _, C)
                }
            }
            T & 1 && d.children !== p.children && u(I, p.children)
        } else !A && x == null && pe(I, p, N, L, y, _, b);
        ((B = L.onVnodeUpdated) || M) && Fe(() => {
            B && mt(B, y, p, d), M && on(p, d, y, "updated")
        }, _)
    }, X = (d, p, y, _, b, E, A) => {
        for (let I = 0; I < p.length; I++) {
            const T = d[I],
                x = p[I],
                M = T.el && (T.type === ze || !dn(T, x) || T.shapeFlag & 70) ? f(T.el) : y;
            S(T, x, M, null, _, b, E, A, !0)
        }
    }, pe = (d, p, y, _, b, E, A) => {
        if (y !== _) {
            if (y !== de)
                for (const I in y) !tr(I) && !(I in _) && i(d, I, y[I], null, A, p.children, b, E, C);
            for (const I in _) {
                if (tr(I)) continue;
                const T = _[I],
                    x = y[I];
                T !== x && I !== "value" && i(d, I, x, T, A, p.children, b, E, C)
            }
            "value" in _ && i(d, "value", y.value, _.value)
        }
    }, Ee = (d, p, y, _, b, E, A, I, T) => {
        const x = p.el = d ? d.el : a(""),
            M = p.anchor = d ? d.anchor : a("");
        let {
            patchFlag: N,
            dynamicChildren: L,
            slotScopeIds: B
        } = p;
        B && (I = I ? I.concat(B) : B), d == null ? (s(x, y, _), s(M, y, _), O(p.children, y, M, b, E, A, I, T)) : N > 0 && N & 64 && L && d.dynamicChildren ? (X(d.dynamicChildren, L, y, b, E, A, I), (p.key != null || b && p === b.subTree) && Qc(d, p, !0)) : ie(d, p, y, M, b, E, A, I, T)
    }, Be = (d, p, y, _, b, E, A, I, T) => {
        p.slotScopeIds = I, d == null ? p.shapeFlag & 512 ? b.ctx.activate(p, y, _, A, T) : De(p, y, _, b, E, A, T) : Te(d, p, T)
    }, De = (d, p, y, _, b, E, A) => {
        const I = d.component = up(d, _, b);
        if (Ur(d) && (I.ctx.renderer = Z), dp(I), I.asyncDep) {
            if (b && b.registerDep(I, ve), !d.el) {
                const T = I.subTree = ge(ct);
                R(null, T, p, y)
            }
            return
        }
        ve(I, d, p, y, b, E, A)
    }, Te = (d, p, y) => {
        const _ = p.component = d.component;
        if (vh(d, p, y))
            if (_.asyncDep && !_.asyncResolved) {
                le(_, p, y);
                return
            } else _.next = p, fh(_.update), _.update();
        else p.el = d.el, _.vnode = p
    }, ve = (d, p, y, _, b, E, A) => {
        const I = () => {
                if (d.isMounted) {
                    let {
                        next: M,
                        bu: N,
                        u: L,
                        parent: B,
                        vnode: J
                    } = d, ce = M, oe;
                    an(d, !1), M ? (M.el = J.el, le(d, M, A)) : M = J, N && nr(N), (oe = M.props && M.props.onVnodeBeforeUpdate) && mt(oe, B, M, J), an(d, !0);
                    const be = ci(d),
                        it = d.subTree;
                    d.subTree = be, S(it, be, f(it.el), k(it), d, b, E), M.el = be.el, ce === null && bh(d, be.el), L && Fe(L, b), (oe = M.props && M.props.onVnodeUpdated) && Fe(() => mt(oe, B, M, J), b)
                } else {
                    let M;
                    const {
                        el: N,
                        props: L
                    } = p, {
                        bm: B,
                        m: J,
                        parent: ce
                    } = d, oe = rr(p);
                    if (an(d, !1), B && nr(B), !oe && (M = L && L.onVnodeBeforeMount) && mt(M, ce, p), an(d, !0), N && G) {
                        const be = () => {
                            d.subTree = ci(d), G(N, d.subTree, d, b, null)
                        };
                        oe ? p.type.__asyncLoader().then(() => !d.isUnmounted && be()) : be()
                    } else {
                        const be = d.subTree = ci(d);
                        S(null, be, y, _, d, b, E), p.el = be.el
                    }
                    if (J && Fe(J, b), !oe && (M = L && L.onVnodeMounted)) {
                        const be = p;
                        Fe(() => mt(M, ce, be), b)
                    }(p.shapeFlag & 256 || ce && rr(ce.vnode) && ce.vnode.shapeFlag & 256) && d.a && Fe(d.a, b), d.isMounted = !0, p = y = _ = null
                }
            },
            T = d.effect = new mo(I, () => Io(x), d.scope),
            x = d.update = () => T.run();
        x.id = d.uid, an(d, !0), x()
    }, le = (d, p, y) => {
        p.component = d;
        const _ = d.vnode.props;
        d.vnode = p, d.next = null, Wh(d, p.props, _, y), Yh(d, p.children, y), Qn(), ma(), Xn()
    }, ie = (d, p, y, _, b, E, A, I, T = !1) => {
        const x = d && d.children,
            M = d ? d.shapeFlag : 0,
            N = p.children,
            {
                patchFlag: L,
                shapeFlag: B
            } = p;
        if (L > 0) {
            if (L & 128) {
                rn(x, N, y, _, b, E, A, I, T);
                return
            } else if (L & 256) {
                st(x, N, y, _, b, E, A, I, T);
                return
            }
        }
        B & 8 ? (M & 16 && C(x, b, E), N !== x && u(y, N)) : M & 16 ? B & 16 ? rn(x, N, y, _, b, E, A, I, T) : C(x, b, E, !0) : (M & 8 && u(y, ""), B & 16 && O(N, y, _, b, E, A, I, T))
    }, st = (d, p, y, _, b, E, A, I, T) => {
        d = d || Dn, p = p || Dn;
        const x = d.length,
            M = p.length,
            N = Math.min(x, M);
        let L;
        for (L = 0; L < N; L++) {
            const B = p[L] = T ? Vt(p[L]) : _t(p[L]);
            S(d[L], B, y, null, b, E, A, I, T)
        }
        x > M ? C(d, b, E, !0, !1, N) : O(p, y, _, b, E, A, I, T, N)
    }, rn = (d, p, y, _, b, E, A, I, T) => {
        let x = 0;
        const M = p.length;
        let N = d.length - 1,
            L = M - 1;
        for (; x <= N && x <= L;) {
            const B = d[x],
                J = p[x] = T ? Vt(p[x]) : _t(p[x]);
            if (dn(B, J)) S(B, J, y, null, b, E, A, I, T);
            else break;
            x++
        }
        for (; x <= N && x <= L;) {
            const B = d[N],
                J = p[L] = T ? Vt(p[L]) : _t(p[L]);
            if (dn(B, J)) S(B, J, y, null, b, E, A, I, T);
            else break;
            N--, L--
        }
        if (x > N) {
            if (x <= L) {
                const B = L + 1,
                    J = B < M ? p[B].el : _;
                for (; x <= L;) S(null, p[x] = T ? Vt(p[x]) : _t(p[x]), y, J, b, E, A, I, T), x++
            }
        } else if (x > L)
            for (; x <= N;) Le(d[x], b, E, !0), x++;
        else {
            const B = x,
                J = x,
                ce = new Map;
            for (x = J; x <= L; x++) {
                const He = p[x] = T ? Vt(p[x]) : _t(p[x]);
                He.key != null && ce.set(He.key, x)
            }
            let oe, be = 0;
            const it = L - J + 1;
            let An = !1,
                sa = 0;
            const ns = new Array(it);
            for (x = 0; x < it; x++) ns[x] = 0;
            for (x = B; x <= N; x++) {
                const He = d[x];
                if (be >= it) {
                    Le(He, b, E, !0);
                    continue
                }
                let pt;
                if (He.key != null) pt = ce.get(He.key);
                else
                    for (oe = J; oe <= L; oe++)
                        if (ns[oe - J] === 0 && dn(He, p[oe])) {
                            pt = oe;
                            break
                        } pt === void 0 ? Le(He, b, E, !0) : (ns[pt - J] = x + 1, pt >= sa ? sa = pt : An = !0, S(He, p[pt], y, null, b, E, A, I, T), be++)
            }
            const ra = An ? tp(ns) : Dn;
            for (oe = ra.length - 1, x = it - 1; x >= 0; x--) {
                const He = J + x,
                    pt = p[He],
                    ia = He + 1 < M ? p[He + 1].el : _;
                ns[x] === 0 ? S(null, pt, y, ia, b, E, A, I, T) : An && (oe < 0 || x !== ra[oe] ? rt(pt, y, ia, 2) : oe--)
            }
        }
    }, rt = (d, p, y, _, b = null) => {
        const {
            el: E,
            type: A,
            transition: I,
            children: T,
            shapeFlag: x
        } = d;
        if (x & 6) {
            rt(d.component.subTree, p, y, _);
            return
        }
        if (x & 128) {
            d.suspense.move(p, y, _);
            return
        }
        if (x & 64) {
            A.move(d, p, y, Z);
            return
        }
        if (A === ze) {
            s(E, p, y);
            for (let N = 0; N < T.length; N++) rt(T[N], p, y, _);
            s(d.anchor, p, y);
            return
        }
        if (A === ir) {
            P(d, p, y);
            return
        }
        if (_ !== 2 && x & 1 && I)
            if (_ === 0) I.beforeEnter(E), s(E, p, y), Fe(() => I.enter(E), b);
            else {
                const {
                    leave: N,
                    delayLeave: L,
                    afterLeave: B
                } = I, J = () => s(E, p, y), ce = () => {
                    N(E, () => {
                        J(), B && B()
                    })
                };
                L ? L(E, J, ce) : ce()
            }
        else s(E, p, y)
    }, Le = (d, p, y, _ = !1, b = !1) => {
        const {
            type: E,
            props: A,
            ref: I,
            children: T,
            dynamicChildren: x,
            shapeFlag: M,
            patchFlag: N,
            dirs: L
        } = d;
        if (I != null && Bi(I, null, y, d, !0), M & 256) {
            p.ctx.deactivate(d);
            return
        }
        const B = M & 1 && L,
            J = !rr(d);
        let ce;
        if (J && (ce = A && A.onVnodeBeforeUnmount) && mt(ce, p, d), M & 6) v(d.component, y, _);
        else {
            if (M & 128) {
                d.suspense.unmount(y, _);
                return
            }
            B && on(d, null, p, "beforeUnmount"), M & 64 ? d.type.remove(d, p, y, b, Z, _) : x && (E !== ze || N > 0 && N & 64) ? C(x, p, y, !1, !0) : (E === ze && N & 384 || !b && M & 16) && C(T, p, y), _ && kn(d)
        }(J && (ce = A && A.onVnodeUnmounted) || B) && Fe(() => {
            ce && mt(ce, p, d), B && on(d, null, p, "unmounted")
        }, y)
    }, kn = d => {
        const {
            type: p,
            el: y,
            anchor: _,
            transition: b
        } = d;
        if (p === ze) {
            zs(y, _);
            return
        }
        if (p === ir) {
            z(d);
            return
        }
        const E = () => {
            r(y), b && !b.persisted && b.afterLeave && b.afterLeave()
        };
        if (d.shapeFlag & 1 && b && !b.persisted) {
            const {
                leave: A,
                delayLeave: I
            } = b, T = () => A(y, E);
            I ? I(d.el, E, T) : T()
        } else E()
    }, zs = (d, p) => {
        let y;
        for (; d !== p;) y = h(d), r(d), d = y;
        r(p)
    }, v = (d, p, y) => {
        const {
            bum: _,
            scope: b,
            update: E,
            subTree: A,
            um: I
        } = d;
        _ && nr(_), b.stop(), E && (E.active = !1, Le(A, d, p, y)), I && Fe(I, p), Fe(() => {
            d.isUnmounted = !0
        }, p), p && p.pendingBranch && !p.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
    }, C = (d, p, y, _ = !1, b = !1, E = 0) => {
        for (let A = E; A < d.length; A++) Le(d[A], p, y, _, b)
    }, k = d => d.shapeFlag & 6 ? k(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : h(d.anchor || d.el), D = (d, p, y) => {
        d == null ? p._vnode && Le(p._vnode, null, null, !0) : S(p._vnode || null, d, p, null, null, null, y), ma(), Oc(), p._vnode = d
    }, Z = {
        p: S,
        um: Le,
        m: rt,
        r: kn,
        mt: De,
        mc: O,
        pc: ie,
        pbc: X,
        n: k,
        o: t
    };
    let fe, G;
    return e && ([fe, G] = e(Z)), {
        render: D,
        hydrate: fe,
        createApp: Xh(D, fe)
    }
}

function an({
    effect: t,
    update: e
}, n) {
    t.allowRecurse = e.allowRecurse = n
}

function Qc(t, e, n = !1) {
    const s = t.children,
        r = e.children;
    if (V(s) && V(r))
        for (let i = 0; i < s.length; i++) {
            const o = s[i];
            let a = r[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[i] = Vt(r[i]), a.el = o.el), n || Qc(o, a)), a.type === Br && (a.el = o.el)
        }
}

function tp(t) {
    const e = t.slice(),
        n = [0];
    let s, r, i, o, a;
    const l = t.length;
    for (s = 0; s < l; s++) {
        const c = t[s];
        if (c !== 0) {
            if (r = n[n.length - 1], t[r] < c) {
                e[s] = r, n.push(s);
                continue
            }
            for (i = 0, o = n.length - 1; i < o;) a = i + o >> 1, t[n[a]] < c ? i = a + 1 : o = a;
            c < t[n[i]] && (i > 0 && (e[s] = n[i - 1]), n[i] = s)
        }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0;) n[i] = o, o = e[o];
    return n
}
const np = t => t.__isTeleport,
    ze = Symbol(void 0),
    Br = Symbol(void 0),
    ct = Symbol(void 0),
    ir = Symbol(void 0),
    as = [];
let at = null;

function me(t = !1) {
    as.push(at = t ? null : [])
}

function sp() {
    as.pop(), at = as[as.length - 1] || null
}
let Is = 1;

function Sa(t) {
    Is += t
}

function Xc(t) {
    return t.dynamicChildren = Is > 0 ? at || Dn : null, sp(), Is > 0 && at && at.push(t), t
}

function _e(t, e, n, s, r, i) {
    return Xc(m(t, e, n, s, r, i, !0))
}

function rp(t, e, n, s, r) {
    return Xc(ge(t, e, n, s, r, !0))
}

function Hi(t) {
    return t ? t.__v_isVNode === !0 : !1
}

function dn(t, e) {
    return t.type === e.type && t.key === e.key
}
const Hr = "__vInternal",
    Zc = ({
        key: t
    }) => t ?? null,
    or = ({
        ref: t,
        ref_key: e,
        ref_for: n
    }) => t != null ? Ie(t) || he(t) || q(t) ? {
        i: We,
        r: t,
        k: e,
        f: !!n
    } : t : null;

function m(t, e = null, n = null, s = 0, r = null, i = t === ze ? 0 : 1, o = !1, a = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t,
        props: e,
        key: e && Zc(e),
        ref: e && or(e),
        scopeId: Dc,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: We
    };
    return a ? (So(l, n), i & 128 && t.normalize(l)) : n && (l.shapeFlag |= Ie(n) ? 8 : 16), Is > 0 && !o && at && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && at.push(l), l
}
const ge = ip;

function ip(t, e = null, n = null, s = 0, r = null, i = !1) {
    if ((!t || t === $h) && (t = ct), Hi(t)) {
        const a = sn(t, e, !0);
        return n && So(a, n), Is > 0 && !i && at && (a.shapeFlag & 6 ? at[at.indexOf(t)] = a : at.push(a)), a.patchFlag |= -2, a
    }
    if (gp(t) && (t = t.__vccOpts), e) {
        e = op(e);
        let {
            class: a,
            style: l
        } = e;
        a && !Ie(a) && (e.class = mn(a)), ue(l) && (Ic(l) && !V(l) && (l = Pe({}, l)), e.style = co(l))
    }
    const o = Ie(t) ? 1 : wh(t) ? 128 : np(t) ? 64 : ue(t) ? 4 : q(t) ? 2 : 0;
    return m(t, e, n, s, r, o, i, !0)
}

function op(t) {
    return t ? Ic(t) || Hr in t ? Pe({}, t) : t : null
}

function sn(t, e, n = !1) {
    const {
        props: s,
        ref: r,
        patchFlag: i,
        children: o
    } = t, a = e ? ap(s || {}, e) : s;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: a,
        key: a && Zc(a),
        ref: e && e.ref ? n && r ? V(r) ? r.concat(or(e)) : [r, or(e)] : or(e) : r,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: o,
        target: t.target,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== ze ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: t.transition,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && sn(t.ssContent),
        ssFallback: t.ssFallback && sn(t.ssFallback),
        el: t.el,
        anchor: t.anchor,
        ctx: t.ctx
    }
}

function Yt(t = " ", e = 0) {
    return ge(Br, null, t, e)
}

function qr(t, e) {
    const n = ge(ir, null, t);
    return n.staticCount = e, n
}

function yt(t = "", e = !1) {
    return e ? (me(), rp(ct, null, t)) : ge(ct, null, t)
}

function _t(t) {
    return t == null || typeof t == "boolean" ? ge(ct) : V(t) ? ge(ze, null, t.slice()) : typeof t == "object" ? Vt(t) : ge(Br, null, String(t))
}

function Vt(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : sn(t)
}

function So(t, e) {
    let n = 0;
    const {
        shapeFlag: s
    } = t;
    if (e == null) e = null;
    else if (V(e)) n = 16;
    else if (typeof e == "object")
        if (s & 65) {
            const r = e.default;
            r && (r._c && (r._d = !1), So(t, r()), r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = e._;
            !r && !(Hr in e) ? e._ctx = We : r === 3 && We && (We.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
        }
    else q(e) ? (e = {
        default: e,
        _ctx: We
    }, n = 32) : (e = String(e), s & 64 ? (n = 16, e = [Yt(e)]) : n = 8);
    t.children = e, t.shapeFlag |= n
}

function ap(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
        const s = t[n];
        for (const r in s)
            if (r === "class") e.class !== s.class && (e.class = mn([e.class, s.class]));
            else if (r === "style") e.style = co([e.style, s.style]);
        else if (Pr(r)) {
            const i = e[r],
                o = s[r];
            o && i !== o && !(V(i) && i.includes(o)) && (e[r] = i ? [].concat(i, o) : o)
        } else r !== "" && (e[r] = s[r])
    }
    return e
}

function mt(t, e, n, s = null) {
    Ze(t, e, 7, [n, s])
}
const lp = Yc();
let cp = 0;

function up(t, e, n) {
    const s = t.type,
        r = (e ? e.appContext : t.appContext) || lp,
        i = {
            uid: cp++,
            vnode: t,
            type: s,
            parent: e,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new uc(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: e ? e.provides : Object.create(r.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Kc(s, r),
            emitsOptions: Nc(s, r),
            emit: null,
            emitted: null,
            propsDefaults: de,
            inheritAttrs: s.inheritAttrs,
            ctx: de,
            data: de,
            props: de,
            attrs: de,
            slots: de,
            refs: de,
            setupState: de,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return i.ctx = {
        _: i
    }, i.root = e ? e.root : i, i.emit = mh.bind(null, i), t.ce && t.ce(i), i
}
let ke = null;
const eu = () => ke || We,
    Bn = t => {
        ke = t, t.scope.on()
    },
    yn = () => {
        ke && ke.scope.off(), ke = null
    };

function tu(t) {
    return t.vnode.shapeFlag & 4
}
let Es = !1;

function dp(t, e = !1) {
    Es = e;
    const {
        props: n,
        children: s
    } = t.vnode, r = tu(t);
    Kh(t, n, r, e), Jh(t, s);
    const i = r ? fp(t, e) : void 0;
    return Es = !1, i
}

function fp(t, e) {
    const n = t.type;
    t.accessCache = Object.create(null), t.proxy = jn(new Proxy(t.ctx, Vh));
    const {
        setup: s
    } = n;
    if (s) {
        const r = t.setupContext = s.length > 1 ? pp(t) : null;
        Bn(t), Qn();
        const i = Zt(s, t, 0, [t.props, r]);
        if (Xn(), yn(), ac(i)) {
            if (i.then(yn, yn), e) return i.then(o => {
                ka(t, o, e)
            }).catch(o => {
                Fr(o, t, 0)
            });
            t.asyncDep = i
        } else ka(t, i, e)
    } else nu(t, e)
}

function ka(t, e, n) {
    q(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ue(e) && (t.setupState = kc(e)), nu(t, n)
}
let Aa;

function nu(t, e, n) {
    const s = t.type;
    if (!t.render) {
        if (!e && Aa && !s.render) {
            const r = s.template || Eo(t).template;
            if (r) {
                const {
                    isCustomElement: i,
                    compilerOptions: o
                } = t.appContext.config, {
                    delimiters: a,
                    compilerOptions: l
                } = s, c = Pe(Pe({
                    isCustomElement: i,
                    delimiters: a
                }, o), l);
                s.render = Aa(r, c)
            }
        }
        t.render = s.render || lt
    }
    Bn(t), Qn(), jh(t), Xn(), yn()
}

function hp(t) {
    return new Proxy(t.attrs, {
        get(e, n) {
            return Ye(t, "get", "$attrs"), e[n]
        }
    })
}

function pp(t) {
    const e = s => {
        t.exposed = s || {}
    };
    let n;
    return {
        get attrs() {
            return n || (n = hp(t))
        },
        slots: t.slots,
        emit: t.emit,
        expose: e
    }
}

function zr(t) {
    if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy(kc(jn(t.exposed)), {
        get(e, n) {
            if (n in e) return e[n];
            if (n in os) return os[n](t)
        },
        has(e, n) {
            return n in e || n in os
        }
    }))
}

function mp(t, e = !0) {
    return q(t) ? t.displayName || t.name : t.name || e && t.__name
}

function gp(t) {
    return q(t) && "__vccOpts" in t
}
const Ve = (t, e) => ch(t, e, Es);

function su(t, e, n) {
    const s = arguments.length;
    return s === 2 ? ue(e) && !V(e) ? Hi(e) ? ge(t, null, [e]) : ge(t, e) : ge(t, null, e) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Hi(n) && (n = [n]), ge(t, e, n))
}
const yp = Symbol(""),
    _p = () => wt(yp),
    vp = "3.2.45",
    bp = "http://www.w3.org/2000/svg",
    fn = typeof document < "u" ? document : null,
    Ca = fn && fn.createElement("template"),
    wp = {
        insert: (t, e, n) => {
            e.insertBefore(t, n || null)
        },
        remove: t => {
            const e = t.parentNode;
            e && e.removeChild(t)
        },
        createElement: (t, e, n, s) => {
            const r = e ? fn.createElementNS(bp, t) : fn.createElement(t, n ? {
                is: n
            } : void 0);
            return t === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r
        },
        createText: t => fn.createTextNode(t),
        createComment: t => fn.createComment(t),
        setText: (t, e) => {
            t.nodeValue = e
        },
        setElementText: (t, e) => {
            t.textContent = e
        },
        parentNode: t => t.parentNode,
        nextSibling: t => t.nextSibling,
        querySelector: t => fn.querySelector(t),
        setScopeId(t, e) {
            t.setAttribute(e, "")
        },
        insertStaticContent(t, e, n, s, r, i) {
            const o = n ? n.previousSibling : e.lastChild;
            if (r && (r === i || r.nextSibling))
                for (; e.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)););
            else {
                Ca.innerHTML = s ? `<svg>${t}</svg>` : t;
                const a = Ca.content;
                if (s) {
                    const l = a.firstChild;
                    for (; l.firstChild;) a.appendChild(l.firstChild);
                    a.removeChild(l)
                }
                e.insertBefore(a, n)
            }
            return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
        }
    };

function xp(t, e, n) {
    const s = t._vtc;
    s && (e = (e ? [e, ...s] : [...s]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}

function Ip(t, e, n) {
    const s = t.style,
        r = Ie(n);
    if (n && !r) {
        for (const i in n) qi(s, i, n[i]);
        if (e && !Ie(e))
            for (const i in e) n[i] == null && qi(s, i, "")
    } else {
        const i = s.display;
        r ? e !== n && (s.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (s.display = i)
    }
}
const Ra = /\s*!important$/;

function qi(t, e, n) {
    if (V(n)) n.forEach(s => qi(t, e, s));
    else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
    else {
        const s = Ep(t, e);
        Ra.test(n) ? t.setProperty(Yn(s), n.replace(Ra, ""), "important") : t[s] = n
    }
}
const Oa = ["Webkit", "Moz", "ms"],
    fi = {};

function Ep(t, e) {
    const n = fi[e];
    if (n) return n;
    let s = Et(e);
    if (s !== "filter" && s in t) return fi[e] = s;
    s = Mr(s);
    for (let r = 0; r < Oa.length; r++) {
        const i = Oa[r] + s;
        if (i in t) return fi[e] = i
    }
    return e
}
const Pa = "http://www.w3.org/1999/xlink";

function Tp(t, e, n, s, r) {
    if (s && e.startsWith("xlink:")) n == null ? t.removeAttributeNS(Pa, e.slice(6, e.length)) : t.setAttributeNS(Pa, e, n);
    else {
        const i = yf(e);
        n == null || i && !ic(n) ? t.removeAttribute(e) : t.setAttribute(e, i ? "" : n)
    }
}

function Sp(t, e, n, s, r, i, o) {
    if (e === "innerHTML" || e === "textContent") {
        s && o(s, r, i), t[e] = n ?? "";
        return
    }
    if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
        t._value = n;
        const l = n ?? "";
        (t.value !== l || t.tagName === "OPTION") && (t.value = l), n == null && t.removeAttribute(e);
        return
    }
    let a = !1;
    if (n === "" || n == null) {
        const l = typeof t[e];
        l === "boolean" ? n = ic(n) : n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0)
    }
    try {
        t[e] = n
    } catch {}
    a && t.removeAttribute(e)
}

function qt(t, e, n, s) {
    t.addEventListener(e, n, s)
}

function kp(t, e, n, s) {
    t.removeEventListener(e, n, s)
}

function Ap(t, e, n, s, r = null) {
    const i = t._vei || (t._vei = {}),
        o = i[e];
    if (s && o) o.value = s;
    else {
        const [a, l] = Cp(e);
        if (s) {
            const c = i[e] = Pp(s, r);
            qt(t, a, c, l)
        } else o && (kp(t, a, o, l), i[e] = void 0)
    }
}
const Na = /(?:Once|Passive|Capture)$/;

function Cp(t) {
    let e;
    if (Na.test(t)) {
        e = {};
        let s;
        for (; s = t.match(Na);) t = t.slice(0, t.length - s[0].length), e[s[0].toLowerCase()] = !0
    }
    return [t[2] === ":" ? t.slice(3) : Yn(t.slice(2)), e]
}
let hi = 0;
const Rp = Promise.resolve(),
    Op = () => hi || (Rp.then(() => hi = 0), hi = Date.now());

function Pp(t, e) {
    const n = s => {
        if (!s._vts) s._vts = Date.now();
        else if (s._vts <= n.attached) return;
        Ze(Np(s, n.value), e, 5, [s])
    };
    return n.value = t, n.attached = Op(), n
}

function Np(t, e) {
    if (V(e)) {
        const n = t.stopImmediatePropagation;
        return t.stopImmediatePropagation = () => {
            n.call(t), t._stopped = !0
        }, e.map(s => r => !r._stopped && s && s(r))
    } else return e
}
const Da = /^on[a-z]/,
    Dp = (t, e, n, s, r = !1, i, o, a, l) => {
        e === "class" ? xp(t, s, r) : e === "style" ? Ip(t, n, s) : Pr(e) ? uo(e) || Ap(t, e, n, s, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Mp(t, e, s, r)) ? Sp(t, e, s, i, o, a, l) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), Tp(t, e, s, r))
    };

function Mp(t, e, n, s) {
    return s ? !!(e === "innerHTML" || e === "textContent" || e in t && Da.test(e) && q(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || Da.test(e) && Ie(n) ? !1 : e in t
}
const Lp = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
Sh.props;
const Hn = t => {
    const e = t.props["onUpdate:modelValue"] || !1;
    return V(e) ? n => nr(e, n) : e
};

function Fp(t) {
    t.target.composing = !0
}

function Ma(t) {
    const e = t.target;
    e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}
const zt = {
        created(t, {
            modifiers: {
                lazy: e,
                trim: n,
                number: s
            }
        }, r) {
            t._assign = Hn(r);
            const i = s || r.props && r.props.type === "number";
            qt(t, e ? "change" : "input", o => {
                if (o.target.composing) return;
                let a = t.value;
                n && (a = a.trim()), i && (a = vs(a)), t._assign(a)
            }), n && qt(t, "change", () => {
                t.value = t.value.trim()
            }), e || (qt(t, "compositionstart", Fp), qt(t, "compositionend", Ma), qt(t, "change", Ma))
        },
        mounted(t, {
            value: e
        }) {
            t.value = e ?? ""
        },
        beforeUpdate(t, {
            value: e,
            modifiers: {
                lazy: n,
                trim: s,
                number: r
            }
        }, i) {
            if (t._assign = Hn(i), t.composing || document.activeElement === t && t.type !== "range" && (n || s && t.value.trim() === e || (r || t.type === "number") && vs(t.value) === e)) return;
            const o = e ?? "";
            t.value !== o && (t.value = o)
        }
    },
    La = {
        created(t, {
            value: e
        }, n) {
            t.checked = Un(e, n.props.value), t._assign = Hn(n), qt(t, "change", () => {
                t._assign(Ts(t))
            })
        },
        beforeUpdate(t, {
            value: e,
            oldValue: n
        }, s) {
            t._assign = Hn(s), e !== n && (t.checked = Un(e, s.props.value))
        }
    },
    Fa = {
        deep: !0,
        created(t, {
            value: e,
            modifiers: {
                number: n
            }
        }, s) {
            const r = Nr(e);
            qt(t, "change", () => {
                const i = Array.prototype.filter.call(t.options, o => o.selected).map(o => n ? vs(Ts(o)) : Ts(o));
                t._assign(t.multiple ? r ? new Set(i) : i : i[0])
            }), t._assign = Hn(s)
        },
        mounted(t, {
            value: e
        }) {
            $a(t, e)
        },
        beforeUpdate(t, e, n) {
            t._assign = Hn(n)
        },
        updated(t, {
            value: e
        }) {
            $a(t, e)
        }
    };

function $a(t, e) {
    const n = t.multiple;
    if (!(n && !V(e) && !Nr(e))) {
        for (let s = 0, r = t.options.length; s < r; s++) {
            const i = t.options[s],
                o = Ts(i);
            if (n) V(e) ? i.selected = vf(e, o) > -1 : i.selected = e.has(o);
            else if (Un(Ts(i), e)) {
                t.selectedIndex !== s && (t.selectedIndex = s);
                return
            }
        }!n && t.selectedIndex !== -1 && (t.selectedIndex = -1)
    }
}

function Ts(t) {
    return "_value" in t ? t._value : t.value
}
const $p = ["ctrl", "shift", "alt", "meta"],
    Up = {
        stop: t => t.stopPropagation(),
        prevent: t => t.preventDefault(),
        self: t => t.target !== t.currentTarget,
        ctrl: t => !t.ctrlKey,
        shift: t => !t.shiftKey,
        alt: t => !t.altKey,
        meta: t => !t.metaKey,
        left: t => "button" in t && t.button !== 0,
        middle: t => "button" in t && t.button !== 1,
        right: t => "button" in t && t.button !== 2,
        exact: (t, e) => $p.some(n => t[`${n}Key`] && !e.includes(n))
    },
    Vp = (t, e) => (n, ...s) => {
        for (let r = 0; r < e.length; r++) {
            const i = Up[e[r]];
            if (i && i(n, e)) return
        }
        return t(n, ...s)
    },
    jp = Pe({
        patchProp: Dp
    }, wp);
let Ua;

function Bp() {
    return Ua || (Ua = Zh(jp))
}
const Hp = (...t) => {
    const e = Bp().createApp(...t),
        {
            mount: n
        } = e;
    return e.mount = s => {
        const r = qp(s);
        if (!r) return;
        const i = e._component;
        !q(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
        const o = n(r, !1, r instanceof SVGElement);
        return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o
    }, e
};

function qp(t) {
    return Ie(t) ? document.querySelector(t) : t
}
const zp = "assets/personajeODM-691a9fd4.webp",
    $s = (t, e) => {
        const n = t.__vccOpts || t;
        for (const [s, r] of e) n[s] = r;
        return n
    },
    Kp = {},
    Wp = {
        class: "w-screen sm:w-auto"
    },
    Gp = m("div", {
        class: "bg-inherit py-5 px-6 sm:py-5 sm:px-16 lg:py-16 lg:px-48 text-start text-neutral-800"
    }, [m("h1", {
        class: "sm:mb-5 text-[#003368] text-4xl sm:text-6xl md:text-6xl font-bold blue:bg-neutral-700 sm:pl-[30px] md:pl-[30px] lg:pl-[-30px] xl:ml-[10px] tracking-widest ease-in duration-500"
    }, [Yt(" AHORRA HASTA 60% EN "), m("p", null, "LOGÍSTICA PARA TU"), m("p", null, "EMPRESA")]), m("div", {
        class: "mx-auto max-w-[900px] ml-5 sm:ml-20"
    }, [m("ul", {
        class: "list-disc flex flex-col space-y-2 py-5 sm:pt-5 pb-5 text-lg sm:text-2xl text-gray-800"
    }, [m("li", null, "Tarifas preferenciales para empresas"), m("li", null, [Yt(" Envía y recibe paquetes el mismo día "), m("p", {
        class: "text-gray-500 inline"
    }, "(sin costo extra)")]), m("li", null, [Yt(" Cobertura en zonas extendidas "), m("p", {
        class: "text-gray-500 inline"
    }, "(sin costo extra)")]), m("li", null, [Yt(" Servicio ocurre, en más de 50 ciudades "), m("p", {
        class: "text-gray-500 inline"
    }, "(Bajío, Norte y Centro del país)")])])]), m("div", {
        class: "mx-auto sm:w-auto sm:pt-[-100px] lg:pt-5 sm:ml-20 sm:py-0 sm:px-20 md:py-15 2xl:py-16"
    }, [m("button", {
        class: "bg-[#003368] h-20 sm:h-20 hover:bg-blue-600 text-white text-xl sm:text-2xl font-extrabold py-2 px-14 sm:py-2 sm:px-18"
    }, [m("a", {
        href: "#tarifas"
    }, "TARIFAS PREFERENCIALES")])]), m("div", {
        class: "flex flex-auto mx-auto w-72 sm:w-80 h-auto mr-28 sm:mt-[-600px] opacity-0 2xl:opacity-100 hidden 2xl:block"
    }, [m("img", {
        src: zp,
        class: "h-[510px] mr-36 w-auto xl:ml-0",
        onerror: "this.src='assets/personajeODM.png'",
        alt: "Personaje"
    })])], -1),
    Jp = [Gp];

function Yp(t, e) {
    return me(), _e("div", Wp, Jp)
}
const ru = $s(Kp, [
        ["render", Yp]
    ]),
    Qp = {},
    Xp = qr('<li class="hover:text-blue-600 mt-3 mb-3 font-regular sm:font-bold text-xl sm:text-2xl pl-5 sm:p-0 text-left sm:text-center text-white md:text-[#003368] xl:text-[#003368]"><a href="#envios" class="inline">Tipos de envíos</a></li><li class="hover:text-blue-600 mt-3 mb-3 font-regular sm:font-bold text-xl sm:text-2xl pl-5 sm:p-0 text-left sm:text-center text-white md:text-[#003368] xl:text-[#003368]"><a href="#cobertura" class="inline">Cobertura de envíos</a></li><li class="hover:text-blue-600 mt-3 mb-3 font-regular sm:font-bold text-xl sm:text-2xl pl-5 sm:p-0 text-left sm:text-center text-white md:text-[#003368] xl:text-[#003368]"><a href="#calcula" class="inline">Calcula tu paquete</a></li><li class="hover:text-blue-600 mt-3 mb-3 font-regular sm:font-bold text-xl sm:text-2xl pl-5 sm:p-0 text-left sm:text-center text-white md:text-[#003368] xl:text-[#003368]"><a href="#tarifas" class="inline">Tarifas preferenciales</a></li><hr class="h-px mt-64 sm:hidden"><li class="mt-3 hover:text-blue-600 mb-3 font-regular sm:font-extrabold text-xl sm:text-2xl pl-5 text-left sm:text-center sm:hidden text-white md:text-[#003368] xl:text-[#003368]"><a href="https://odm.com.mx/aviso-privacidad" target="_blank">Aviso de privacidad</a></li>', 6);

function Zp(t, e) {
    return Xp
}
const em = $s(Qp, [
        ["render", Zp]
    ]),
    iu = "assets/ODMenvios-d1a05ca2.webp",
    tm = {
        components: {
            Links: em
        },
        name: "Navbar",
        setup() {
            let t = Ue(!1);
            const e = () => {
                    t.value = !t.value
                },
                n = s => {
                    const r = document.getElementById("mobile-menu-button");
                    r && !r.contains(s.target) && (t.value = !1)
                };
            return jr(() => {
                document.addEventListener("click", n)
            }), {
                showMenu: t,
                toggleNav: e
            }
        }
    },
    nm = {
        class: "sm:bg-white top-0 z-10 sticky w-screen sm:w-auto"
    },
    sm = {
        class: "pl-0 px-6 sm:py-5 mr-4 md:mr-32 mx-auto md:flex md:justify-between md:items-center sm:order-first"
    },
    rm = {
        class: "flex items-center justify-between mt-0"
    },
    im = m("button", {
        type: "button",
        class: "text-[#003368] hover:text-gray-900 focus:outline-none focus:text-gray-800",
        id: "mobile-menu-button"
    }, [m("svg", {
        viewBox: "0 0 24 24",
        class: "w-14 h-14 fill-current"
    }, [m("path", {
        "fill-rule": "evenodd",
        d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
    })])], -1),
    om = [im],
    am = {
        class: "hidden md:block sm:mr-16 sm:ml-32 sm:ml-5 md:ml-[100px] md:mr-[50px] lg:ml-[200px] lg:ml-[120px] xl:ml-[240px]"
    },
    lm = {
        class: "flex-col mt-0 mr-20 md:flex md:flex-row md:items-center md:space-x-10 md:mt-0 bg-[#003368] h-screen sm:h-auto lg:bg-transparent md:bg-white sm:bg-[#003368] z-0"
    },
    cm = m("img", {
        src: iu,
        onerror: "this.src='assets/ODMenvios.png'",
        class: "w-48 2xl:mr-[150px]"
    }, null, -1),
    um = {
        class: "w-full relative sm:hidden z-0 top-[-56px]"
    };

function dm(t, e, n, s, r, i) {
    const o = Fh("Links");
    return me(), _e("div", nm, [m("nav", sm, [m("div", rm, [m("div", {
        onClick: e[0] || (e[0] = (...a) => s.toggleNav && s.toggleNav(...a)),
        class: "flex md:hidden ml-auto bg-white bg-opacity-70"
    }, om)]), m("div", am, [m("ul", lm, [cm, ge(o)])]), m("div", um, [s.showMenu ? (me(), _e("div", {
        key: 0,
        onClick: e[1] || (e[1] = (...a) => s.toggleNav && s.toggleNav(...a)),
        class: mn([s.showMenu ? "bg-black opacity-25" : "", "absolute w-screen h-screen"])
    }, null, 2)) : yt("", !0), m("div", {
        class: "absolute w-3/4 bg-gray-200",
        onClick: e[2] || (e[2] = (...a) => s.toggleNav && s.toggleNav(...a))
    }, [m("img", {
        src: iu,
        onerror: "this.src='assets/ODMenvios.png'",
        class: mn(["sm:hidden w-full p-8", s.showMenu ? "flex" : "hidden"])
    }, null, 2), m("ul", {
        class: mn([s.showMenu ? "flex flex-col justify-start opacity-100 w-full" : "hidden", "flex-col mt-0 mr-20 md:flex md:flex-row md:items-center md:space-x-10 md:mt-0 bg-[#003368] h-screen sm:h-auto lg:bg-transparent md:bg-white sm:bg-[#003368] z-0"])
    }, [ge(o)], 2)])])])])
}
const fm = $s(tm, [
        ["render", dm]
    ]),
    hm = "assets/SobreODM-8ea1740b.png",
    Va = "assets/CajaODM-b82f9c47.png",
    pm = "assets/maleta-4df1ca78.png",
    mm = {},
    gm = {
        class: "bg-gray-300 w-full md:w-full mt-auto mb-0 h-auto"
    },
    ym = qr('<h1 class="text-4xl font-black capitalize ml-5 sm:ml-24 pt-10 pb-5"> TIPOS DE ENVÍOS </h1><div class="flex flex-wrap justify-center items-center gap-0 sm:gap-5 md:gap-4"><div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-72 xl:w-72 sm:h-96"><div class="p-5"><h3 class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7"> Sobres </h3><p class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"> Hasta 25 hojas </p></div><img class="mr-5 sm:w-40 sm:h-28 w-32 h-24 mt-[-100px] sm:mx-auto ml-48 sm:mt-16 sm:mb-5" src="' + hm + '" alt="Sobre"></div><div class="flex flex-col max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-72 xl:w-72 sm:h-96"><div class="p-5"><h3 class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7"> Paquetes </h3><p class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"> De 0 a 1 kg </p></div><img class="mr-5 sm:w-36 sm:h-36 w-32 h-24 mt-[-100px] sm:mx-auto ml-48 sm:mt-7 sm:mb-0" src="' + Va + '" alt="Paquete"></div><div class="flex flex-col max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-72 xl:w-72 sm:h-96"><div class="p-5"><h3 class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7 sm:pb-5"> Paquetes </h3><span class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"><p>De 1-10 kg</p><p>De 11-20 kg</p><p>De 21-30 kg</p></span></div><img class="mr-5 sm:w-40 sm:h-40 w-32 h-36 mt-[-150px] sm:mx-auto ml-48 sm:mt-[-5px] sm:mb-0" src="' + Va + '" alt="Paquetes"></div><div class="flex flex-col max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-72 xl:w-72 sm:h-96"><div class="p-5"><h3 class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7 sm:pb-5"> Maletas </h3><span class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"><p>De 1-10 kg</p><p>De 11-20 kg</p><p>De 21-30 kg</p></span></div><img class="mr-5 sm:w-24 sm:h-36 w-32 h-36 mt-[-150px] sm:mx-auto ml-48 sm:mt-0 sm:mb-0" src="' + pm + '" alt="Maletas"></div></div><div class="h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0"><p>VOLUMEN MÁXIMO EN TU ENVÍO:</p><p>65 X 50 X 55 = 30cm^3</p></div>', 3),
    _m = [ym];

function vm(t, e) {
    return me(), _e("div", gm, _m)
}
const ou = $s(mm, [
        ["render", vm]
    ]),
    bm = "assets/Calculadora-815723ca.webp",
    wm = {
        class: "w-full"
    },
    xm = m("h1", {
        class: "text-4xl font-black capitalize ml-5 sm:ml-24 py-14"
    }, " CALCULA EL PESO DE TU PAQUETE ", -1),
    Im = {
        class: "my-0 mb-0"
    },
    Em = {
        class: "flex flex-col justify-center items-center"
    },
    Tm = m("div", {
        class: "flex flex-wrap xl:justify-center"
    }, [m("img", {
        src: bm,
        onerror: "this.src='assets/Calculadora.png'",
        class: "h-80 w-80 sm:w-96 sm:h-80",
        alt: "CajaCalculadora"
    })], -1),
    Sm = {
        class: "bg-[#D9D9D9] max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8"
    },
    km = m("h2", {
        class: "text-3xl md:ml-10 font-semibold text-center mt-5"
    }, " Calculadora de peso volumétrico ", -1),
    Am = {
        class: "grid grid-cols-1 gap-4 pt-5 mx-full"
    },
    Cm = {
        class: "flex items-center flex-row space-x-4"
    },
    Rm = m("label", {
        class: "block text-gray-700 text-base font-bold mr-7 text-2xl",
        for: "inline-alto"
    }, "Alto:", -1),
    Om = m("span", {
        class: "flex-none text-gray-700 text-base font-bold ml-2 text-2xl"
    }, "cm", -1),
    Pm = {
        class: "flex items-center flex-row space-x-4"
    },
    Nm = m("label", {
        class: "block text-gray-700 text-base font-bold mb-0 mr-3 text-2xl",
        for: "inline-ancho"
    }, "Ancho:", -1),
    Dm = m("span", {
        class: "flex-none text-gray-700 text-base font-bold ml-2 text-2xl"
    }, "cm", -1),
    Mm = {
        class: "flex items-center flex-row space-x-4"
    },
    Lm = m("label", {
        class: "block text-gray-700 text-base font-bold mb-2 mr-5 text-2xl",
        for: "inline-largo"
    }, "Largo:", -1),
    Fm = m("span", {
        class: "flex-none text-gray-700 text-base font-bold ml-2 text-2xl"
    }, "cm", -1),
    $m = {
        class: "my-4"
    },
    Um = {
        class: "flex items-center justify-center"
    },
    Vm = {
        class: "block text-black text-2xl font-semibold text-center sm:text-left"
    },
    jm = {
        key: 0,
        class: "text-red-600 text-center"
    },
    Bm = m("div", {
        class: "h-auto w-auto pt-5 pb-5 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0"
    }, [m("p", null, "UTILIZA LA FÓRMULA:"), m("p", null, "(Alto(cm) * Ancho(cm) * Largo(cm))/6000")], -1),
    au = {
        __name: "Calculadora",
        setup(t) {
            const e = Ue({
                    largo: "",
                    ancho: "",
                    alto: ""
                }),
                n = Ve({
                    get: () => {
                        let s = 0;
                        return s = e.value.largo * e.value.ancho * e.value.alto / 6e3, s.toFixed(2)
                    },
                    set: s => {
                        e.value.largo = s, e.value.ancho = s, e.value.alto = s
                    }
                });
            return (s, r) => (me(), _e("div", wm, [xm, m("div", Im, [m("div", Em, [Tm, m("div", Sm, [km, m("div", Am, [m("div", Cm, [Rm, Xe(m("input", {
                class: "flex-1 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none text-base sm:text-lg",
                "onUpdate:modelValue": r[0] || (r[0] = i => e.value.alto = i),
                type: "text",
                name: "inline-alto",
                placeholder: "Ingresa el alto"
            }, null, 512), [
                [zt, e.value.alto]
            ]), Om]), m("div", Pm, [Nm, Xe(m("input", {
                class: "flex-1 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none text-base sm:text-lg",
                "onUpdate:modelValue": r[1] || (r[1] = i => e.value.ancho = i),
                type: "text",
                name: "inline-ancho",
                placeholder: "Ingresa el ancho"
            }, null, 512), [
                [zt, e.value.ancho]
            ]), Dm]), m("div", Mm, [Lm, Xe(m("input", {
                class: "flex-1 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none text-base sm:text-lg",
                "onUpdate:modelValue": r[2] || (r[2] = i => e.value.largo = i),
                type: "text",
                name: "inline-largo",
                placeholder: "Ingresa el largo"
            }, null, 512), [
                [zt, e.value.largo]
            ]), Fm])]), m("div", $m, [m("div", Um, [m("span", Vm, [Yt(" El peso total de tu paquete es: "), m("p", {
                class: mn(["text-center text-4xl", {
                    "text-red-600": ee(n) > 30,
                    "text-black": ee(n) <= 30
                }])
            }, gt(ee(n)) + " Kg ", 3), ee(n) > 30 ? (me(), _e("p", jm, " ¡Peso máximo excedido! ")) : yt("", !0)])])])])])]), Bm]))
        }
    },
    Hm = "assets/logoblanco-9affbb48.webp",
    qm = {
        name: "Footer"
    },
    zm = {
        class: "bg-[#003368]"
    },
    Km = qr('<div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"><nav class="flex flex-wrap justify-center -mx-5 -my-2"><div class="px-5 py-2"><a href="https://odm.com.mx/quienes-somos2" class="text-base leading-6 text-white hover:text-neutral-600"> ¿Quiénes somos? </a></div><div class="px-5 py-2"><a href="https://odm.com.mx/preguntas-frecuentes" class="text-base leading-6 text-white hover:text-neutral-600"> Preguntas frecuentes </a></div><div class="px-5 py-2"><a href="http://venta.odm.com.mx/netScripts/request.aspx?APPNAME=Navegante&amp;PRGNAME=AccesoEx&amp;ARGUMENTS=-AAG&amp;_gl=1*z7x1y0*_ga*NjAyODM2MzE2LjE2NzI0MjgyOTU.*_ga_6MKKJY80T1*MTY3OTY3MDk4NC4xMDQuMS4xNjc5NjcyNjE0LjQ5LjAuMA.." class="text-base leading-6 text-white hover:text-neutral-600"> Agencias </a></div><div class="px-5 py-2"><a href="https://odm.com.mx/contactanos" class="text-base leading-6 text-white hover:text-neutral-600"> Contáctanos </a></div></nav><img src="' + Hm + '" alt="Logo" class="w-80 h-28 mx-auto"><div class="flex justify-center mt-8 space-x-6"><a href="#" class="text-white hover:text-neutral-600"><span class="sr-only">Facebook</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-white hover:text-gray-600"><span class="sr-only">Twitter</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a><a href="#" class="text-white hover:text-gray-600"><span class="sr-only">Instagram</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-white hover:text-gray-600"><span class="sr-only">YouTube</span><svg aria-hidden="true" fill="currentColor" class="bi bi-youtube w-6 h-6" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></a></div><p class="mt-8 text-base leading-6 text-center text-white hover:text-neutral-600"><a href="https://odm.com.mx/aviso-privacidad">Aviso de privacidad | Políticas de viaje</a></p><p class="mt-8 text-base leading-6 text-center text-white"> © 2023 Ómnibus de México. Todos los derechos reservados. </p></div>', 1),
    Wm = [Km];

function Gm(t, e, n, s, r, i) {
    return me(), _e("section", zm, Wm)
}
const Jm = $s(qm, [
    ["render", Gm]
]);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lu = function (t) {
        const e = [];
        let n = 0;
        for (let s = 0; s < t.length; s++) {
            let r = t.charCodeAt(s);
            r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = r & 63 | 128) : (r & 64512) === 55296 && s + 1 < t.length && (t.charCodeAt(s + 1) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (t.charCodeAt(++s) & 1023), e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128)
        }
        return e
    },
    Ym = function (t) {
        const e = [];
        let n = 0,
            s = 0;
        for (; n < t.length;) {
            const r = t[n++];
            if (r < 128) e[s++] = String.fromCharCode(r);
            else if (r > 191 && r < 224) {
                const i = t[n++];
                e[s++] = String.fromCharCode((r & 31) << 6 | i & 63)
            } else if (r > 239 && r < 365) {
                const i = t[n++],
                    o = t[n++],
                    a = t[n++],
                    l = ((r & 7) << 18 | (i & 63) << 12 | (o & 63) << 6 | a & 63) - 65536;
                e[s++] = String.fromCharCode(55296 + (l >> 10)), e[s++] = String.fromCharCode(56320 + (l & 1023))
            } else {
                const i = t[n++],
                    o = t[n++];
                e[s++] = String.fromCharCode((r & 15) << 12 | (i & 63) << 6 | o & 63)
            }
        }
        return e.join("")
    },
    cu = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: typeof atob == "function",
        encodeByteArray(t, e) {
            if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                s = [];
            for (let r = 0; r < t.length; r += 3) {
                const i = t[r],
                    o = r + 1 < t.length,
                    a = o ? t[r + 1] : 0,
                    l = r + 2 < t.length,
                    c = l ? t[r + 2] : 0,
                    u = i >> 2,
                    f = (i & 3) << 4 | a >> 4;
                let h = (a & 15) << 2 | c >> 6,
                    g = c & 63;
                l || (g = 64, o || (h = 64)), s.push(n[u], n[f], n[h], n[g])
            }
            return s.join("")
        },
        encodeString(t, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(lu(t), e)
        },
        decodeString(t, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : Ym(this.decodeStringToByteArray(t, e))
        },
        decodeStringToByteArray(t, e) {
            this.init_();
            const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                s = [];
            for (let r = 0; r < t.length;) {
                const i = n[t.charAt(r++)],
                    a = r < t.length ? n[t.charAt(r)] : 0;
                ++r;
                const c = r < t.length ? n[t.charAt(r)] : 64;
                ++r;
                const f = r < t.length ? n[t.charAt(r)] : 64;
                if (++r, i == null || a == null || c == null || f == null) throw Error();
                const h = i << 2 | a >> 4;
                if (s.push(h), c !== 64) {
                    const g = a << 4 & 240 | c >> 2;
                    if (s.push(g), f !== 64) {
                        const w = c << 6 & 192 | f;
                        s.push(w)
                    }
                }
            }
            return s
        },
        init_() {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                for (let t = 0; t < this.ENCODED_VALS.length; t++) this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t)
            }
        }
    },
    Qm = function (t) {
        const e = lu(t);
        return cu.encodeByteArray(e, !0)
    },
    gr = function (t) {
        return Qm(t).replace(/\./g, "")
    },
    uu = function (t) {
        try {
            return cu.decodeString(t, !0)
        } catch (e) {
            console.error("base64Decode failed: ", e)
        }
        return null
    };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ne() {
    return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}

function Xm() {
    return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())
}

function du() {
    const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof t == "object" && t.id !== void 0
}

function Zm() {
    return typeof navigator == "object" && navigator.product === "ReactNative"
}

function eg() {
    const t = Ne();
    return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0
}

function fu() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}

function hu() {
    return new Promise((t, e) => {
        try {
            let n = !0;
            const s = "validate-browser-context-for-indexeddb-analytics-module",
                r = self.indexedDB.open(s);
            r.onsuccess = () => {
                r.result.close(), n || self.indexedDB.deleteDatabase(s), t(!0)
            }, r.onupgradeneeded = () => {
                n = !1
            }, r.onerror = () => {
                var i;
                e(((i = r.error) === null || i === void 0 ? void 0 : i.message) || "")
            }
        } catch (n) {
            e(n)
        }
    })
}

function tg() {
    return !(typeof navigator > "u" || !navigator.cookieEnabled)
}

function ng() {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("Unable to locate global object.")
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sg = () => ng().__FIREBASE_DEFAULTS__,
    rg = () => {
        if (typeof process > "u" || typeof process.env > "u") return;
        const t = {}.__FIREBASE_DEFAULTS__;
        if (t) return JSON.parse(t)
    },
    ig = () => {
        if (typeof document > "u") return;
        let t;
        try {
            t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
        } catch {
            return
        }
        const e = t && uu(t[1]);
        return e && JSON.parse(e)
    },
    ko = () => {
        try {
            return sg() || rg() || ig()
        } catch (t) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
            return
        }
    },
    pu = t => {
        var e, n;
        return (n = (e = ko()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || n === void 0 ? void 0 : n[t]
    },
    og = t => {
        const e = pu(t);
        if (!e) return;
        const n = e.lastIndexOf(":");
        if (n <= 0 || n + 1 === e.length) throw new Error(`Invalid host ${e} with no separate hostname and port!`);
        const s = parseInt(e.substring(n + 1), 10);
        return e[0] === "[" ? [e.substring(1, n - 1), s] : [e.substring(0, n), s]
    },
    ag = () => {
        var t;
        return (t = ko()) === null || t === void 0 ? void 0 : t.config
    },
    mu = t => {
        var e;
        return (e = ko()) === null || e === void 0 ? void 0 : e[`_${t}`]
    };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lg {
    constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, n) => {
            this.resolve = e, this.reject = n
        })
    }
    wrapCallback(e) {
        return (n, s) => {
            n ? this.reject(n) : this.resolve(s), typeof e == "function" && (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, s))
        }
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cg(t, e) {
    if (t.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    const n = {
            alg: "none",
            type: "JWT"
        },
        s = e || "demo-project",
        r = t.iat || 0,
        i = t.sub || t.user_id;
    if (!i) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    const o = Object.assign({
            iss: `https://securetoken.google.com/${s}`,
            aud: s,
            iat: r,
            exp: r + 3600,
            auth_time: r,
            sub: i,
            user_id: i,
            firebase: {
                sign_in_provider: "custom",
                identities: {}
            }
        }, t),
        a = "";
    return [gr(JSON.stringify(n)), gr(JSON.stringify(o)), a].join(".")
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ug = "FirebaseError";
class ft extends Error {
    constructor(e, n, s) {
        super(n), this.code = e, this.customData = s, this.name = ug, Object.setPrototypeOf(this, ft.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Tn.prototype.create)
    }
}
class Tn {
    constructor(e, n, s) {
        this.service = e, this.serviceName = n, this.errors = s
    }
    create(e, ...n) {
        const s = n[0] || {},
            r = `${this.service}/${e}`,
            i = this.errors[e],
            o = i ? dg(i, s) : "Error",
            a = `${this.serviceName}: ${o} (${r}).`;
        return new ft(r, a, s)
    }
}

function dg(t, e) {
    return t.replace(fg, (n, s) => {
        const r = e[s];
        return r != null ? String(r) : `<${s}?>`
    })
}
const fg = /\{\$([^}]+)}/g;

function hg(t) {
    for (const e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0
}

function Ss(t, e) {
    if (t === e) return !0;
    const n = Object.keys(t),
        s = Object.keys(e);
    for (const r of n) {
        if (!s.includes(r)) return !1;
        const i = t[r],
            o = e[r];
        if (ja(i) && ja(o)) {
            if (!Ss(i, o)) return !1
        } else if (i !== o) return !1
    }
    for (const r of s)
        if (!n.includes(r)) return !1;
    return !0
}

function ja(t) {
    return t !== null && typeof t == "object"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Us(t) {
    const e = [];
    for (const [n, s] of Object.entries(t)) Array.isArray(s) ? s.forEach(r => {
        e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r))
    }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(s));
    return e.length ? "&" + e.join("&") : ""
}

function pg(t, e) {
    const n = new mg(t, e);
    return n.subscribe.bind(n)
}
class mg {
    constructor(e, n) {
        this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = n, this.task.then(() => {
            e(this)
        }).catch(s => {
            this.error(s)
        })
    }
    next(e) {
        this.forEachObserver(n => {
            n.next(e)
        })
    }
    error(e) {
        this.forEachObserver(n => {
            n.error(e)
        }), this.close(e)
    }
    complete() {
        this.forEachObserver(e => {
            e.complete()
        }), this.close()
    }
    subscribe(e, n, s) {
        let r;
        if (e === void 0 && n === void 0 && s === void 0) throw new Error("Missing Observer.");
        gg(e, ["next", "error", "complete"]) ? r = e : r = {
            next: e,
            error: n,
            complete: s
        }, r.next === void 0 && (r.next = pi), r.error === void 0 && (r.error = pi), r.complete === void 0 && (r.complete = pi);
        const i = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then(() => {
            try {
                this.finalError ? r.error(this.finalError) : r.complete()
            } catch {}
        }), this.observers.push(r), i
    }
    unsubscribeOne(e) {
        this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this))
    }
    forEachObserver(e) {
        if (!this.finalized)
            for (let n = 0; n < this.observers.length; n++) this.sendOne(n, e)
    }
    sendOne(e, n) {
        this.task.then(() => {
            if (this.observers !== void 0 && this.observers[e] !== void 0) try {
                n(this.observers[e])
            } catch (s) {
                typeof console < "u" && console.error && console.error(s)
            }
        })
    }
    close(e) {
        this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
            this.observers = void 0, this.onNoObservers = void 0
        }))
    }
}

function gg(t, e) {
    if (typeof t != "object" || t === null) return !1;
    for (const n of e)
        if (n in t && typeof t[n] == "function") return !0;
    return !1
}

function pi() {}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yg = 1e3,
    _g = 2,
    vg = 4 * 60 * 60 * 1e3,
    bg = .5;

function Ba(t, e = yg, n = _g) {
    const s = e * Math.pow(n, t),
        r = Math.round(bg * s * (Math.random() - .5) * 2);
    return Math.min(vg, s + r)
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(t) {
    return t && t._delegate ? t._delegate : t
}
class ut {
    constructor(e, n, s) {
        this.name = e, this.instanceFactory = n, this.type = s, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
    }
    setInstantiationMode(e) {
        return this.instantiationMode = e, this
    }
    setMultipleInstances(e) {
        return this.multipleInstances = e, this
    }
    setServiceProps(e) {
        return this.serviceProps = e, this
    }
    setInstanceCreatedCallback(e) {
        return this.onInstanceCreated = e, this
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cn = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wg {
    constructor(e, n) {
        this.name = e, this.container = n, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
    }
    get(e) {
        const n = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(n)) {
            const s = new lg;
            if (this.instancesDeferred.set(n, s), this.isInitialized(n) || this.shouldAutoInitialize()) try {
                const r = this.getOrInitializeService({
                    instanceIdentifier: n
                });
                r && s.resolve(r)
            } catch {}
        }
        return this.instancesDeferred.get(n).promise
    }
    getImmediate(e) {
        var n;
        const s = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier),
            r = (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
        if (this.isInitialized(s) || this.shouldAutoInitialize()) try {
            return this.getOrInitializeService({
                instanceIdentifier: s
            })
        } catch (i) {
            if (r) return null;
            throw i
        } else {
            if (r) return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(e) {
        if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = e, !!this.shouldAutoInitialize()) {
            if (Ig(e)) try {
                this.getOrInitializeService({
                    instanceIdentifier: cn
                })
            } catch {}
            for (const [n, s] of this.instancesDeferred.entries()) {
                const r = this.normalizeInstanceIdentifier(n);
                try {
                    const i = this.getOrInitializeService({
                        instanceIdentifier: r
                    });
                    s.resolve(i)
                } catch {}
            }
        }
    }
    clearInstance(e = cn) {
        this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
    }
    async delete() {
        const e = Array.from(this.instances.values());
        await Promise.all([...e.filter(n => "INTERNAL" in n).map(n => n.INTERNAL.delete()), ...e.filter(n => "_delete" in n).map(n => n._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(e = cn) {
        return this.instances.has(e)
    }
    getOptions(e = cn) {
        return this.instancesOptions.get(e) || {}
    }
    initialize(e = {}) {
        const {
            options: n = {}
        } = e, s = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(s)) throw Error(`${this.name}(${s}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const r = this.getOrInitializeService({
            instanceIdentifier: s,
            options: n
        });
        for (const [i, o] of this.instancesDeferred.entries()) {
            const a = this.normalizeInstanceIdentifier(i);
            s === a && o.resolve(r)
        }
        return r
    }
    onInit(e, n) {
        var s;
        const r = this.normalizeInstanceIdentifier(n),
            i = (s = this.onInitCallbacks.get(r)) !== null && s !== void 0 ? s : new Set;
        i.add(e), this.onInitCallbacks.set(r, i);
        const o = this.instances.get(r);
        return o && e(o, r), () => {
            i.delete(e)
        }
    }
    invokeOnInitCallbacks(e, n) {
        const s = this.onInitCallbacks.get(n);
        if (s)
            for (const r of s) try {
                r(e, n)
            } catch {}
    }
    getOrInitializeService({
        instanceIdentifier: e,
        options: n = {}
    }) {
        let s = this.instances.get(e);
        if (!s && this.component && (s = this.component.instanceFactory(this.container, {
                instanceIdentifier: xg(e),
                options: n
            }), this.instances.set(e, s), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(s, e), this.component.onInstanceCreated)) try {
            this.component.onInstanceCreated(this.container, e, s)
        } catch {}
        return s || null
    }
    normalizeInstanceIdentifier(e = cn) {
        return this.component ? this.component.multipleInstances ? e : cn : e
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}

function xg(t) {
    return t === cn ? void 0 : t
}

function Ig(t) {
    return t.instantiationMode === "EAGER"
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eg {
    constructor(e) {
        this.name = e, this.providers = new Map
    }
    addComponent(e) {
        const n = this.getProvider(e.name);
        if (n.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
        n.setComponent(e)
    }
    addOrOverwriteComponent(e) {
        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
    }
    getProvider(e) {
        if (this.providers.has(e)) return this.providers.get(e);
        const n = new wg(e, this);
        return this.providers.set(e, n), n
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var re;
(function (t) {
    t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT"
})(re || (re = {}));
const Tg = {
        debug: re.DEBUG,
        verbose: re.VERBOSE,
        info: re.INFO,
        warn: re.WARN,
        error: re.ERROR,
        silent: re.SILENT
    },
    Sg = re.INFO,
    kg = {
        [re.DEBUG]: "log",
        [re.VERBOSE]: "log",
        [re.INFO]: "info",
        [re.WARN]: "warn",
        [re.ERROR]: "error"
    },
    Ag = (t, e, ...n) => {
        if (e < t.logLevel) return;
        const s = new Date().toISOString(),
            r = kg[e];
        if (r) console[r](`[${s}]  ${t.name}:`, ...n);
        else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)
    };
class Kr {
    constructor(e) {
        this.name = e, this._logLevel = Sg, this._logHandler = Ag, this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(e) {
        if (!(e in re)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
        this._logLevel = e
    }
    setLogLevel(e) {
        this._logLevel = typeof e == "string" ? Tg[e] : e
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(e) {
        if (typeof e != "function") throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = e
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(e) {
        this._userLogHandler = e
    }
    debug(...e) {
        this._userLogHandler && this._userLogHandler(this, re.DEBUG, ...e), this._logHandler(this, re.DEBUG, ...e)
    }
    log(...e) {
        this._userLogHandler && this._userLogHandler(this, re.VERBOSE, ...e), this._logHandler(this, re.VERBOSE, ...e)
    }
    info(...e) {
        this._userLogHandler && this._userLogHandler(this, re.INFO, ...e), this._logHandler(this, re.INFO, ...e)
    }
    warn(...e) {
        this._userLogHandler && this._userLogHandler(this, re.WARN, ...e), this._logHandler(this, re.WARN, ...e)
    }
    error(...e) {
        this._userLogHandler && this._userLogHandler(this, re.ERROR, ...e), this._logHandler(this, re.ERROR, ...e)
    }
}
const Cg = (t, e) => e.some(n => t instanceof n);
let Ha, qa;

function Rg() {
    return Ha || (Ha = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}

function Og() {
    return qa || (qa = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const gu = new WeakMap,
    zi = new WeakMap,
    yu = new WeakMap,
    mi = new WeakMap,
    Ao = new WeakMap;

function Pg(t) {
    const e = new Promise((n, s) => {
        const r = () => {
                t.removeEventListener("success", i), t.removeEventListener("error", o)
            },
            i = () => {
                n(en(t.result)), r()
            },
            o = () => {
                s(t.error), r()
            };
        t.addEventListener("success", i), t.addEventListener("error", o)
    });
    return e.then(n => {
        n instanceof IDBCursor && gu.set(n, t)
    }).catch(() => {}), Ao.set(e, t), e
}

function Ng(t) {
    if (zi.has(t)) return;
    const e = new Promise((n, s) => {
        const r = () => {
                t.removeEventListener("complete", i), t.removeEventListener("error", o), t.removeEventListener("abort", o)
            },
            i = () => {
                n(), r()
            },
            o = () => {
                s(t.error || new DOMException("AbortError", "AbortError")), r()
            };
        t.addEventListener("complete", i), t.addEventListener("error", o), t.addEventListener("abort", o)
    });
    zi.set(t, e)
}
let Ki = {
    get(t, e, n) {
        if (t instanceof IDBTransaction) {
            if (e === "done") return zi.get(t);
            if (e === "objectStoreNames") return t.objectStoreNames || yu.get(t);
            if (e === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
        }
        return en(t[e])
    },
    set(t, e, n) {
        return t[e] = n, !0
    },
    has(t, e) {
        return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t
    }
};

function Dg(t) {
    Ki = t(Ki)
}

function Mg(t) {
    return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function (e, ...n) {
        const s = t.call(gi(this), e, ...n);
        return yu.set(s, e.sort ? e.sort() : [e]), en(s)
    } : Og().includes(t) ? function (...e) {
        return t.apply(gi(this), e), en(gu.get(this))
    } : function (...e) {
        return en(t.apply(gi(this), e))
    }
}

function Lg(t) {
    return typeof t == "function" ? Mg(t) : (t instanceof IDBTransaction && Ng(t), Cg(t, Rg()) ? new Proxy(t, Ki) : t)
}

function en(t) {
    if (t instanceof IDBRequest) return Pg(t);
    if (mi.has(t)) return mi.get(t);
    const e = Lg(t);
    return e !== t && (mi.set(t, e), Ao.set(e, t)), e
}
const gi = t => Ao.get(t);

function _u(t, e, {
    blocked: n,
    upgrade: s,
    blocking: r,
    terminated: i
} = {}) {
    const o = indexedDB.open(t, e),
        a = en(o);
    return s && o.addEventListener("upgradeneeded", l => {
        s(en(o.result), l.oldVersion, l.newVersion, en(o.transaction))
    }), n && o.addEventListener("blocked", () => n()), a.then(l => {
        i && l.addEventListener("close", () => i()), r && l.addEventListener("versionchange", () => r())
    }).catch(() => {}), a
}
const Fg = ["get", "getKey", "getAll", "getAllKeys", "count"],
    $g = ["put", "add", "delete", "clear"],
    yi = new Map;

function za(t, e) {
    if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
    if (yi.get(e)) return yi.get(e);
    const n = e.replace(/FromIndex$/, ""),
        s = e !== n,
        r = $g.includes(n);
    if (!(n in (s ? IDBIndex : IDBObjectStore).prototype) || !(r || Fg.includes(n))) return;
    const i = async function (o, ...a) {
        const l = this.transaction(o, r ? "readwrite" : "readonly");
        let c = l.store;
        return s && (c = c.index(a.shift())), (await Promise.all([c[n](...a), r && l.done]))[0]
    };
    return yi.set(e, i), i
}
Dg(t => ({
    ...t,
    get: (e, n, s) => za(e, n) || t.get(e, n, s),
    has: (e, n) => !!za(e, n) || t.has(e, n)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ug {
    constructor(e) {
        this.container = e
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(n => {
            if (Vg(n)) {
                const s = n.getImmediate();
                return `${s.library}/${s.version}`
            } else return null
        }).filter(n => n).join(" ")
    }
}

function Vg(t) {
    const e = t.getComponent();
    return (e == null ? void 0 : e.type) === "VERSION"
}
const Wi = "@firebase/app",
    Ka = "0.9.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn = new Kr("@firebase/app"),
    jg = "@firebase/app-compat",
    Bg = "@firebase/analytics-compat",
    Hg = "@firebase/analytics",
    qg = "@firebase/app-check-compat",
    zg = "@firebase/app-check",
    Kg = "@firebase/auth",
    Wg = "@firebase/auth-compat",
    Gg = "@firebase/database",
    Jg = "@firebase/database-compat",
    Yg = "@firebase/functions",
    Qg = "@firebase/functions-compat",
    Xg = "@firebase/installations",
    Zg = "@firebase/installations-compat",
    e0 = "@firebase/messaging",
    t0 = "@firebase/messaging-compat",
    n0 = "@firebase/performance",
    s0 = "@firebase/performance-compat",
    r0 = "@firebase/remote-config",
    i0 = "@firebase/remote-config-compat",
    o0 = "@firebase/storage",
    a0 = "@firebase/storage-compat",
    l0 = "@firebase/firestore",
    c0 = "@firebase/firestore-compat",
    u0 = "firebase",
    d0 = "9.15.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gi = "[DEFAULT]",
    f0 = {
        [Wi]: "fire-core",
        [jg]: "fire-core-compat",
        [Hg]: "fire-analytics",
        [Bg]: "fire-analytics-compat",
        [zg]: "fire-app-check",
        [qg]: "fire-app-check-compat",
        [Kg]: "fire-auth",
        [Wg]: "fire-auth-compat",
        [Gg]: "fire-rtdb",
        [Jg]: "fire-rtdb-compat",
        [Yg]: "fire-fn",
        [Qg]: "fire-fn-compat",
        [Xg]: "fire-iid",
        [Zg]: "fire-iid-compat",
        [e0]: "fire-fcm",
        [t0]: "fire-fcm-compat",
        [n0]: "fire-perf",
        [s0]: "fire-perf-compat",
        [r0]: "fire-rc",
        [i0]: "fire-rc-compat",
        [o0]: "fire-gcs",
        [a0]: "fire-gcs-compat",
        [l0]: "fire-fst",
        [c0]: "fire-fst-compat",
        "fire-js": "fire-js",
        [u0]: "fire-js-all"
    };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yr = new Map,
    Ji = new Map;

function h0(t, e) {
    try {
        t.container.addComponent(e)
    } catch (n) {
        vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n)
    }
}

function Tt(t) {
    const e = t.name;
    if (Ji.has(e)) return vn.debug(`There were multiple attempts to register component ${e}.`), !1;
    Ji.set(e, t);
    for (const n of yr.values()) h0(n, t);
    return !0
}

function Sn(t, e) {
    const n = t.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return n && n.triggerHeartbeat(), t.container.getProvider(e)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const p0 = {
        ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
        ["bad-app-name"]: "Illegal App name: '{$appName}",
        ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
        ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
        ["no-options"]: "Need to provide options, when not being deployed to hosting via source.",
        ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        ["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
        ["idb-open"]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        ["idb-get"]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        ["idb-set"]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        ["idb-delete"]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
    },
    tn = new Tn("app", "Firebase", p0);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class m0 {
    constructor(e, n, s) {
        this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = s, this.container.addComponent(new ut("app", () => this, "PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(e) {
        this.checkDestroyed(), this._automaticDataCollectionEnabled = e
    }
    get name() {
        return this.checkDestroyed(), this._name
    }
    get options() {
        return this.checkDestroyed(), this._options
    }
    get config() {
        return this.checkDestroyed(), this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(e) {
        this._isDeleted = e
    }
    checkDestroyed() {
        if (this.isDeleted) throw tn.create("app-deleted", {
            appName: this._name
        })
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vs = d0;

function vu(t, e = {}) {
    let n = t;
    typeof e != "object" && (e = {
        name: e
    });
    const s = Object.assign({
            name: Gi,
            automaticDataCollectionEnabled: !1
        }, e),
        r = s.name;
    if (typeof r != "string" || !r) throw tn.create("bad-app-name", {
        appName: String(r)
    });
    if (n || (n = ag()), !n) throw tn.create("no-options");
    const i = yr.get(r);
    if (i) {
        if (Ss(n, i.options) && Ss(s, i.config)) return i;
        throw tn.create("duplicate-app", {
            appName: r
        })
    }
    const o = new Eg(r);
    for (const l of Ji.values()) o.addComponent(l);
    const a = new m0(n, s, o);
    return yr.set(r, a), a
}

function Co(t = Gi) {
    const e = yr.get(t);
    if (!e && t === Gi) return vu();
    if (!e) throw tn.create("no-app", {
        appName: t
    });
    return e
}

function et(t, e, n) {
    var s;
    let r = (s = f0[t]) !== null && s !== void 0 ? s : t;
    n && (r += `-${n}`);
    const i = r.match(/\s|\//),
        o = e.match(/\s|\//);
    if (i || o) {
        const a = [`Unable to register library "${r}" with version "${e}":`];
        i && a.push(`library name "${r}" contains illegal characters (whitespace or "/")`), i && o && a.push("and"), o && a.push(`version name "${e}" contains illegal characters (whitespace or "/")`), vn.warn(a.join(" "));
        return
    }
    Tt(new ut(`${r}-version`, () => ({
        library: r,
        version: e
    }), "VERSION"))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g0 = "firebase-heartbeat-database",
    y0 = 1,
    ks = "firebase-heartbeat-store";
let _i = null;

function bu() {
    return _i || (_i = _u(g0, y0, {
        upgrade: (t, e) => {
            switch (e) {
                case 0:
                    t.createObjectStore(ks)
            }
        }
    }).catch(t => {
        throw tn.create("idb-open", {
            originalErrorMessage: t.message
        })
    })), _i
}
async function _0(t) {
    try {
        return (await bu()).transaction(ks).objectStore(ks).get(wu(t))
    } catch (e) {
        if (e instanceof ft) vn.warn(e.message);
        else {
            const n = tn.create("idb-get", {
                originalErrorMessage: e == null ? void 0 : e.message
            });
            vn.warn(n.message)
        }
    }
}
async function Wa(t, e) {
    try {
        const s = (await bu()).transaction(ks, "readwrite");
        return await s.objectStore(ks).put(e, wu(t)), s.done
    } catch (n) {
        if (n instanceof ft) vn.warn(n.message);
        else {
            const s = tn.create("idb-set", {
                originalErrorMessage: n == null ? void 0 : n.message
            });
            vn.warn(s.message)
        }
    }
}

function wu(t) {
    return `${t.name}!${t.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v0 = 1024,
    b0 = 30 * 24 * 60 * 60 * 1e3;
class w0 {
    constructor(e) {
        this.container = e, this._heartbeatsCache = null;
        const n = this.container.getProvider("app").getImmediate();
        this._storage = new I0(n), this._heartbeatsCachePromise = this._storage.read().then(s => (this._heartbeatsCache = s, s))
    }
    async triggerHeartbeat() {
        const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
            s = Ga();
        if (this._heartbeatsCache === null && (this._heartbeatsCache = await this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some(r => r.date === s))) return this._heartbeatsCache.heartbeats.push({
            date: s,
            agent: n
        }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(r => {
            const i = new Date(r.date).valueOf();
            return Date.now() - i <= b0
        }), this._storage.overwrite(this._heartbeatsCache)
    }
    async getHeartbeatsHeader() {
        if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) return "";
        const e = Ga(),
            {
                heartbeatsToSend: n,
                unsentEntries: s
            } = x0(this._heartbeatsCache.heartbeats),
            r = gr(JSON.stringify({
                version: 2,
                heartbeats: n
            }));
        return this._heartbeatsCache.lastSentHeartbeatDate = e, s.length > 0 ? (this._heartbeatsCache.heartbeats = s, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), r
    }
}

function Ga() {
    return new Date().toISOString().substring(0, 10)
}

function x0(t, e = v0) {
    const n = [];
    let s = t.slice();
    for (const r of t) {
        const i = n.find(o => o.agent === r.agent);
        if (i) {
            if (i.dates.push(r.date), Ja(n) > e) {
                i.dates.pop();
                break
            }
        } else if (n.push({
                agent: r.agent,
                dates: [r.date]
            }), Ja(n) > e) {
            n.pop();
            break
        }
        s = s.slice(1)
    }
    return {
        heartbeatsToSend: n,
        unsentEntries: s
    }
}
class I0 {
    constructor(e) {
        this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return fu() ? hu().then(() => !0).catch(() => !1) : !1
    }
    async read() {
        return await this._canUseIndexedDBPromise ? await _0(this.app) || {
            heartbeats: []
        } : {
            heartbeats: []
        }
    }
    async overwrite(e) {
        var n;
        if (await this._canUseIndexedDBPromise) {
            const r = await this.read();
            return Wa(this.app, {
                lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : r.lastSentHeartbeatDate,
                heartbeats: e.heartbeats
            })
        } else return
    }
    async add(e) {
        var n;
        if (await this._canUseIndexedDBPromise) {
            const r = await this.read();
            return Wa(this.app, {
                lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : r.lastSentHeartbeatDate,
                heartbeats: [...r.heartbeats, ...e.heartbeats]
            })
        } else return
    }
}

function Ja(t) {
    return gr(JSON.stringify({
        version: 2,
        heartbeats: t
    })).length
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E0(t) {
    Tt(new ut("platform-logger", e => new Ug(e), "PRIVATE")), Tt(new ut("heartbeat", e => new w0(e), "PRIVATE")), et(Wi, Ka, t), et(Wi, Ka, "esm2017"), et("fire-js", "")
}
E0("");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e {
    constructor(e) {
        this.uid = e
    }
    isAuthenticated() {
        return this.uid != null
    }
    toKey() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
    }
    isEqual(e) {
        return e.uid === this.uid
    }
}
$e.UNAUTHENTICATED = new $e(null), $e.GOOGLE_CREDENTIALS = new $e("google-credentials-uid"), $e.FIRST_PARTY = new $e("first-party-uid"), $e.MOCK_USER = new $e("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let es = "9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qn = new Kr("@firebase/firestore");

function _r(t, ...e) {
    if (qn.logLevel <= re.DEBUG) {
        const n = e.map(Oo);
        qn.debug(`Firestore (${es}): ${t}`, ...n)
    }
}

function Ro(t, ...e) {
    if (qn.logLevel <= re.ERROR) {
        const n = e.map(Oo);
        qn.error(`Firestore (${es}): ${t}`, ...n)
    }
}

function xu(t, ...e) {
    if (qn.logLevel <= re.WARN) {
        const n = e.map(Oo);
        qn.warn(`Firestore (${es}): ${t}`, ...n)
    }
}

function Oo(t) {
    if (typeof t == "string") return t;
    try {
        return e = t, JSON.stringify(e)
    } catch {
        return t
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var e
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ye(t = "Unexpected state") {
    const e = `FIRESTORE (${es}) INTERNAL ASSERTION FAILED: ` + t;
    throw Ro(e), new Error(e)
}

function Pt(t, e) {
    t || ye()
}

function Wr(t, e) {
    return t
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ya = "ok",
    T0 = "cancelled",
    ls = "unknown",
    H = "invalid-argument",
    S0 = "deadline-exceeded",
    k0 = "not-found",
    A0 = "permission-denied",
    Yi = "unauthenticated",
    C0 = "resource-exhausted",
    zn = "failed-precondition",
    R0 = "aborted",
    O0 = "out-of-range",
    Iu = "unimplemented",
    P0 = "internal",
    N0 = "unavailable";
class $ extends ft {
    constructor(e, n) {
        super(e, n), this.code = e, this.message = n, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eu {
    constructor(e, n) {
        this.user = n, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", `Bearer ${e}`)
    }
}
class D0 {
    getToken() {
        return Promise.resolve(null)
    }
    invalidateToken() {}
    start(e, n) {
        e.enqueueRetryable(() => n($e.UNAUTHENTICATED))
    }
    shutdown() {}
}
class M0 {
    constructor(e) {
        this.token = e, this.changeListener = null
    }
    getToken() {
        return Promise.resolve(this.token)
    }
    invalidateToken() {}
    start(e, n) {
        this.changeListener = n, e.enqueueRetryable(() => n(this.token.user))
    }
    shutdown() {
        this.changeListener = null
    }
}
class L0 {
    constructor(e) {
        this.auth = null, e.onInit(n => {
            this.auth = n
        })
    }
    getToken() {
        return this.auth ? this.auth.getToken().then(e => e ? (Pt(typeof e.accessToken == "string"), new Eu(e.accessToken, new $e(this.auth.getUid()))) : null) : Promise.resolve(null)
    }
    invalidateToken() {}
    start(e, n) {}
    shutdown() {}
}
class F0 {
    constructor(e, n, s, r) {
        this.t = e, this.i = n, this.o = s, this.u = r, this.type = "FirstParty", this.user = $e.FIRST_PARTY, this.h = new Map
    }
    l() {
        return this.u ? this.u() : (Pt(!(typeof this.t != "object" || this.t === null || !this.t.auth || !this.t.auth.getAuthHeaderValueForFirstParty)), this.t.auth.getAuthHeaderValueForFirstParty([]))
    }
    get headers() {
        this.h.set("X-Goog-AuthUser", this.i);
        const e = this.l();
        return e && this.h.set("Authorization", e), this.o && this.h.set("X-Goog-Iam-Authorization-Token", this.o), this.h
    }
}
class $0 {
    constructor(e, n, s, r) {
        this.t = e, this.i = n, this.o = s, this.u = r
    }
    getToken() {
        return Promise.resolve(new F0(this.t, this.i, this.o, this.u))
    }
    start(e, n) {
        e.enqueueRetryable(() => n($e.FIRST_PARTY))
    }
    shutdown() {}
    invalidateToken() {}
}
class U0 {
    constructor(e) {
        this.value = e, this.type = "AppCheck", this.headers = new Map, e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value)
    }
}
class V0 {
    constructor(e) {
        this.m = e, this.appCheck = null, e.onInit(n => {
            this.appCheck = n
        })
    }
    getToken() {
        return this.appCheck ? this.appCheck.getToken().then(e => e ? (Pt(typeof e.token == "string"), new U0(e.token)) : null) : Promise.resolve(null)
    }
    invalidateToken() {}
    start(e, n) {}
    shutdown() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j0 {
    constructor(e, n, s, r, i, o, a, l) {
        this.databaseId = e, this.appId = n, this.persistenceKey = s, this.host = r, this.ssl = i, this.forceLongPolling = o, this.autoDetectLongPolling = a, this.useFetchStreams = l
    }
}
class As {
    constructor(e, n) {
        this.projectId = e, this.database = n || "(default)"
    }
    static empty() {
        return new As("", "")
    }
    get isDefaultDatabase() {
        return this.database === "(default)"
    }
    isEqual(e) {
        return e instanceof As && e.projectId === this.projectId && e.database === this.database
    }
}
class Cs {
    constructor(e, n, s) {
        n === void 0 ? n = 0 : n > e.length && ye(), s === void 0 ? s = e.length - n : s > e.length - n && ye(), this.segments = e, this.offset = n, this.len = s
    }
    get length() {
        return this.len
    }
    isEqual(e) {
        return Cs.comparator(this, e) === 0
    }
    child(e) {
        const n = this.segments.slice(this.offset, this.limit());
        return e instanceof Cs ? e.forEach(s => {
            n.push(s)
        }) : n.push(e), this.construct(n)
    }
    limit() {
        return this.offset + this.length
    }
    popFirst(e) {
        return e = e === void 0 ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e)
    }
    popLast() {
        return this.construct(this.segments, this.offset, this.length - 1)
    }
    firstSegment() {
        return this.segments[this.offset]
    }
    lastSegment() {
        return this.get(this.length - 1)
    }
    get(e) {
        return this.segments[this.offset + e]
    }
    isEmpty() {
        return this.length === 0
    }
    isPrefixOf(e) {
        if (e.length < this.length) return !1;
        for (let n = 0; n < this.length; n++)
            if (this.get(n) !== e.get(n)) return !1;
        return !0
    }
    isImmediateParentOf(e) {
        if (this.length + 1 !== e.length) return !1;
        for (let n = 0; n < this.length; n++)
            if (this.get(n) !== e.get(n)) return !1;
        return !0
    }
    forEach(e) {
        for (let n = this.offset, s = this.limit(); n < s; n++) e(this.segments[n])
    }
    toArray() {
        return this.segments.slice(this.offset, this.limit())
    }
    static comparator(e, n) {
        const s = Math.min(e.length, n.length);
        for (let r = 0; r < s; r++) {
            const i = e.get(r),
                o = n.get(r);
            if (i < o) return -1;
            if (i > o) return 1
        }
        return e.length < n.length ? -1 : e.length > n.length ? 1 : 0
    }
}
class xe extends Cs {
    construct(e, n, s) {
        return new xe(e, n, s)
    }
    canonicalString() {
        return this.toArray().join("/")
    }
    toString() {
        return this.canonicalString()
    }
    static fromString(...e) {
        const n = [];
        for (const s of e) {
            if (s.indexOf("//") >= 0) throw new $(H, `Invalid segment (${s}). Paths must not contain // in them.`);
            n.push(...s.split("/").filter(r => r.length > 0))
        }
        return new xe(n)
    }
    static emptyPath() {
        return new xe([])
    }
}
const B0 = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class Ke extends Cs {
    construct(e, n, s) {
        return new Ke(e, n, s)
    }
    static isValidIdentifier(e) {
        return B0.test(e)
    }
    canonicalString() {
        return this.toArray().map(e => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), Ke.isValidIdentifier(e) || (e = "`" + e + "`"), e)).join(".")
    }
    toString() {
        return this.canonicalString()
    }
    isKeyField() {
        return this.length === 1 && this.get(0) === "__name__"
    }
    static keyField() {
        return new Ke(["__name__"])
    }
    static fromServerFormat(e) {
        const n = [];
        let s = "",
            r = 0;
        const i = () => {
            if (s.length === 0) throw new $(H, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            n.push(s), s = ""
        };
        let o = !1;
        for (; r < e.length;) {
            const a = e[r];
            if (a === "\\") {
                if (r + 1 === e.length) throw new $(H, "Path has trailing escape character: " + e);
                const l = e[r + 1];
                if (l !== "\\" && l !== "." && l !== "`") throw new $(H, "Path has invalid escape sequence: " + e);
                s += l, r += 2
            } else a === "`" ? (o = !o, r++) : a !== "." || o ? (s += a, r++) : (i(), r++)
        }
        if (i(), o) throw new $(H, "Unterminated ` in path: " + e);
        return new Ke(n)
    }
    static emptyPath() {
        return new Ke([])
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce {
    constructor(e) {
        this.path = e
    }
    static fromPath(e) {
        return new Ce(xe.fromString(e))
    }
    static fromName(e) {
        return new Ce(xe.fromString(e).popFirst(5))
    }
    static empty() {
        return new Ce(xe.emptyPath())
    }
    get collectionGroup() {
        return this.path.popLast().lastSegment()
    }
    hasCollectionId(e) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === e
    }
    getCollectionGroup() {
        return this.path.get(this.path.length - 2)
    }
    getCollectionPath() {
        return this.path.popLast()
    }
    isEqual(e) {
        return e !== null && xe.comparator(this.path, e.path) === 0
    }
    toString() {
        return this.path.toString()
    }
    static comparator(e, n) {
        return xe.comparator(e.path, n.path)
    }
    static isDocumentKey(e) {
        return e.length % 2 == 0
    }
    static fromSegments(e) {
        return new Ce(new xe(e.slice()))
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tu(t, e, n) {
    if (!n) throw new $(H, `Function ${t}() cannot be called with an empty ${e}.`)
}

function Qa(t) {
    if (!Ce.isDocumentKey(t)) throw new $(H, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)
}

function Xa(t) {
    if (Ce.isDocumentKey(t)) throw new $(H, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)
}

function Gr(t) {
    if (t === void 0) return "undefined";
    if (t === null) return "null";
    if (typeof t == "string") return t.length > 20 && (t = `${t.substring(0,20)}...`), JSON.stringify(t);
    if (typeof t == "number" || typeof t == "boolean") return "" + t;
    if (typeof t == "object") {
        if (t instanceof Array) return "an array"; {
            const e = function (n) {
                return n.constructor ? n.constructor.name : null
            }(t);
            return e ? `a custom ${e} object` : "an object"
        }
    }
    return typeof t == "function" ? "a function" : ye()
}

function Po(t, e) {
    if ("_delegate" in t && (t = t._delegate), !(t instanceof e)) {
        if (e.name === t.constructor.name) throw new $(H, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"); {
            const n = Gr(t);
            throw new $(H, `Expected type '${e.name}', but it was: ${n}`)
        }
    }
    return t
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H0(t) {
    return t == null
}

function vr(t) {
    return t === 0 && 1 / t == -1 / 0
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q0 = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery",
    RunAggregationQuery: "runAggregationQuery"
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Za, Q;

function el(t) {
    if (t === void 0) return Ro("RPC_ERROR", "HTTP error has no status"), ls;
    switch (t) {
        case 200:
            return Ya;
        case 400:
            return zn;
        case 401:
            return Yi;
        case 403:
            return A0;
        case 404:
            return k0;
        case 409:
            return R0;
        case 416:
            return O0;
        case 429:
            return C0;
        case 499:
            return T0;
        case 500:
            return ls;
        case 501:
            return Iu;
        case 503:
            return N0;
        case 504:
            return S0;
        default:
            return t >= 200 && t < 300 ? Ya : t >= 400 && t < 500 ? zn : t >= 500 && t < 600 ? P0 : ls
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(Q = Za || (Za = {}))[Q.OK = 0] = "OK", Q[Q.CANCELLED = 1] = "CANCELLED", Q[Q.UNKNOWN = 2] = "UNKNOWN", Q[Q.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Q[Q.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Q[Q.NOT_FOUND = 5] = "NOT_FOUND", Q[Q.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Q[Q.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Q[Q.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Q[Q.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Q[Q.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Q[Q.ABORTED = 10] = "ABORTED", Q[Q.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Q[Q.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Q[Q.INTERNAL = 13] = "INTERNAL", Q[Q.UNAVAILABLE = 14] = "UNAVAILABLE", Q[Q.DATA_LOSS = 15] = "DATA_LOSS";
class z0 extends class {
    constructor(e) {
        this.databaseInfo = e, this.databaseId = e.databaseId;
        const n = e.ssl ? "https" : "http";
        this.p = n + "://" + e.host, this.g = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents"
    }
    get v() {
        return !1
    }
    I(e, n, s, r, i) {
        const o = this.T(e, n);
        _r("RestConnection", "Sending: ", o, s);
        const a = {};
        return this.A(a, r, i), this.R(e, o, a, s).then(l => (_r("RestConnection", "Received: ", l), l), l => {
            throw xu("RestConnection", `${e} failed with error: `, l, "url: ", o, "request:", s), l
        })
    }
    P(e, n, s, r, i, o) {
        return this.I(e, n, s, r, i)
    }
    A(e, n, s) {
        e["X-Goog-Api-Client"] = "gl-js/ fire/" + es, e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), n && n.headers.forEach((r, i) => e[i] = r), s && s.headers.forEach((r, i) => e[i] = r)
    }
    T(e, n) {
        const s = q0[e];
        return `${this.p}/v1/${n}:${s}`
    }
} {
    constructor(e, n) {
        super(e), this.V = n
    }
    $(e, n) {
        throw new Error("Not supported by FetchConnection")
    }
    async R(e, n, s, r) {
        var i;
        const o = JSON.stringify(r);
        let a;
        try {
            a = await this.V(n, {
                method: "POST",
                headers: s,
                body: o
            })
        } catch (l) {
            const c = l;
            throw new $(el(c.status), "Request failed with error: " + c.statusText)
        }
        if (!a.ok) {
            let l = await a.json();
            Array.isArray(l) && (l = l[0]);
            const c = (i = l == null ? void 0 : l.error) === null || i === void 0 ? void 0 : i.message;
            throw new $(el(a.status), `Request failed with error: ${c??a.statusText}`)
        }
        return a.json()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K0(t) {
    const e = typeof self < "u" && (self.crypto || self.msCrypto),
        n = new Uint8Array(t);
    if (e && typeof e.getRandomValues == "function") e.getRandomValues(n);
    else
        for (let s = 0; s < t; s++) n[s] = Math.floor(256 * Math.random());
    return n
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W0 {
    static N() {
        const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            n = Math.floor(256 / e.length) * e.length;
        let s = "";
        for (; s.length < 20;) {
            const r = K0(40);
            for (let i = 0; i < r.length; ++i) s.length < 20 && r[i] < n && (s += e.charAt(r[i] % e.length))
        }
        return s
    }
}

function Se(t, e) {
    return t < e ? -1 : t > e ? 1 : 0
}

function Su(t, e, n) {
    return t.length === e.length && t.every((s, r) => n(s, e[r]))
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tl(t) {
    let e = 0;
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e
}

function Jr(t, e) {
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt {
    constructor(e) {
        this.binaryString = e
    }
    static fromBase64String(e) {
        const n = atob(e);
        return new Nt(n)
    }
    static fromUint8Array(e) {
        const n = function (s) {
            let r = "";
            for (let i = 0; i < s.length; ++i) r += String.fromCharCode(s[i]);
            return r
        }(e);
        return new Nt(n)
    } [Symbol.iterator]() {
        let e = 0;
        return {
            next: () => e < this.binaryString.length ? {
                value: this.binaryString.charCodeAt(e++),
                done: !1
            } : {
                value: void 0,
                done: !0
            }
        }
    }
    toBase64() {
        return e = this.binaryString, btoa(e);
        var e
    }
    toUint8Array() {
        return function (e) {
            const n = new Uint8Array(e.length);
            for (let s = 0; s < e.length; s++) n[s] = e.charCodeAt(s);
            return n
        }(this.binaryString)
    }
    approximateByteSize() {
        return 2 * this.binaryString.length
    }
    compareTo(e) {
        return Se(this.binaryString, e.binaryString)
    }
    isEqual(e) {
        return this.binaryString === e.binaryString
    }
}
Nt.EMPTY_BYTE_STRING = new Nt("");
const G0 = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

function bn(t) {
    if (Pt(!!t), typeof t == "string") {
        let e = 0;
        const n = G0.exec(t);
        if (Pt(!!n), n[1]) {
            let r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r)
        }
        const s = new Date(t);
        return {
            seconds: Math.floor(s.getTime() / 1e3),
            nanos: e
        }
    }
    return {
        seconds: we(t.seconds),
        nanos: we(t.nanos)
    }
}

function we(t) {
    return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0
}

function Rs(t) {
    return typeof t == "string" ? Nt.fromBase64String(t) : Nt.fromUint8Array(t)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge {
    constructor(e, n) {
        if (this.seconds = e, this.nanoseconds = n, n < 0) throw new $(H, "Timestamp nanoseconds out of range: " + n);
        if (n >= 1e9) throw new $(H, "Timestamp nanoseconds out of range: " + n);
        if (e < -62135596800) throw new $(H, "Timestamp seconds out of range: " + e);
        if (e >= 253402300800) throw new $(H, "Timestamp seconds out of range: " + e)
    }
    static now() {
        return Ge.fromMillis(Date.now())
    }
    static fromDate(e) {
        return Ge.fromMillis(e.getTime())
    }
    static fromMillis(e) {
        const n = Math.floor(e / 1e3),
            s = Math.floor(1e6 * (e - 1e3 * n));
        return new Ge(n, s)
    }
    toDate() {
        return new Date(this.toMillis())
    }
    toMillis() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6
    }
    _compareTo(e) {
        return this.seconds === e.seconds ? Se(this.nanoseconds, e.nanoseconds) : Se(this.seconds, e.seconds)
    }
    isEqual(e) {
        return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
    }
    toString() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
    }
    toJSON() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        }
    }
    valueOf() {
        const e = this.seconds - -62135596800;
        return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ku(t) {
    var e, n;
    return ((n = (((e = t == null ? void 0 : t.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}).__type__) === null || n === void 0 ? void 0 : n.stringValue) === "server_timestamp"
}

function Au(t) {
    const e = t.mapValue.fields.__previous_value__;
    return ku(e) ? Au(e) : e
}

function Os(t) {
    const e = bn(t.mapValue.fields.__local_write_time__.timestampValue);
    return new Ge(e.seconds, e.nanos)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xs = {
    fields: {
        __type__: {
            stringValue: "__max__"
        }
    }
};

function wn(t) {
    return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? ku(t) ? 4 : function (e) {
        return (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
    }(t) ? 9007199254740991 : 10 : ye()
}

function br(t, e) {
    if (t === e) return !0;
    const n = wn(t);
    if (n !== wn(e)) return !1;
    switch (n) {
        case 0:
        case 9007199254740991:
            return !0;
        case 1:
            return t.booleanValue === e.booleanValue;
        case 4:
            return Os(t).isEqual(Os(e));
        case 3:
            return function (s, r) {
                if (typeof s.timestampValue == "string" && typeof r.timestampValue == "string" && s.timestampValue.length === r.timestampValue.length) return s.timestampValue === r.timestampValue;
                const i = bn(s.timestampValue),
                    o = bn(r.timestampValue);
                return i.seconds === o.seconds && i.nanos === o.nanos
            }(t, e);
        case 5:
            return t.stringValue === e.stringValue;
        case 6:
            return function (s, r) {
                return Rs(s.bytesValue).isEqual(Rs(r.bytesValue))
            }(t, e);
        case 7:
            return t.referenceValue === e.referenceValue;
        case 8:
            return function (s, r) {
                return we(s.geoPointValue.latitude) === we(r.geoPointValue.latitude) && we(s.geoPointValue.longitude) === we(r.geoPointValue.longitude)
            }(t, e);
        case 2:
            return function (s, r) {
                if ("integerValue" in s && "integerValue" in r) return we(s.integerValue) === we(r.integerValue);
                if ("doubleValue" in s && "doubleValue" in r) {
                    const i = we(s.doubleValue),
                        o = we(r.doubleValue);
                    return i === o ? vr(i) === vr(o) : isNaN(i) && isNaN(o)
                }
                return !1
            }(t, e);
        case 9:
            return Su(t.arrayValue.values || [], e.arrayValue.values || [], br);
        case 10:
            return function (s, r) {
                const i = s.mapValue.fields || {},
                    o = r.mapValue.fields || {};
                if (tl(i) !== tl(o)) return !1;
                for (const a in i)
                    if (i.hasOwnProperty(a) && (o[a] === void 0 || !br(i[a], o[a]))) return !1;
                return !0
            }(t, e);
        default:
            return ye()
    }
}

function Ps(t, e) {
    return (t.values || []).find(n => br(n, e)) !== void 0
}

function wr(t, e) {
    if (t === e) return 0;
    const n = wn(t),
        s = wn(e);
    if (n !== s) return Se(n, s);
    switch (n) {
        case 0:
        case 9007199254740991:
            return 0;
        case 1:
            return Se(t.booleanValue, e.booleanValue);
        case 2:
            return function (r, i) {
                const o = we(r.integerValue || r.doubleValue),
                    a = we(i.integerValue || i.doubleValue);
                return o < a ? -1 : o > a ? 1 : o === a ? 0 : isNaN(o) ? isNaN(a) ? 0 : -1 : 1
            }(t, e);
        case 3:
            return nl(t.timestampValue, e.timestampValue);
        case 4:
            return nl(Os(t), Os(e));
        case 5:
            return Se(t.stringValue, e.stringValue);
        case 6:
            return function (r, i) {
                const o = Rs(r),
                    a = Rs(i);
                return o.compareTo(a)
            }(t.bytesValue, e.bytesValue);
        case 7:
            return function (r, i) {
                const o = r.split("/"),
                    a = i.split("/");
                for (let l = 0; l < o.length && l < a.length; l++) {
                    const c = Se(o[l], a[l]);
                    if (c !== 0) return c
                }
                return Se(o.length, a.length)
            }(t.referenceValue, e.referenceValue);
        case 8:
            return function (r, i) {
                const o = Se(we(r.latitude), we(i.latitude));
                return o !== 0 ? o : Se(we(r.longitude), we(i.longitude))
            }(t.geoPointValue, e.geoPointValue);
        case 9:
            return function (r, i) {
                const o = r.values || [],
                    a = i.values || [];
                for (let l = 0; l < o.length && l < a.length; ++l) {
                    const c = wr(o[l], a[l]);
                    if (c) return c
                }
                return Se(o.length, a.length)
            }(t.arrayValue, e.arrayValue);
        case 10:
            return function (r, i) {
                if (r === Xs && i === Xs) return 0;
                if (r === Xs) return 1;
                if (i === Xs) return -1;
                const o = r.fields || {},
                    a = Object.keys(o),
                    l = i.fields || {},
                    c = Object.keys(l);
                a.sort(), c.sort();
                for (let u = 0; u < a.length && u < c.length; ++u) {
                    const f = Se(a[u], c[u]);
                    if (f !== 0) return f;
                    const h = wr(o[a[u]], l[c[u]]);
                    if (h !== 0) return h
                }
                return Se(a.length, c.length)
            }(t.mapValue, e.mapValue);
        default:
            throw ye()
    }
}

function nl(t, e) {
    if (typeof t == "string" && typeof e == "string" && t.length === e.length) return Se(t, e);
    const n = bn(t),
        s = bn(e),
        r = Se(n.seconds, s.seconds);
    return r !== 0 ? r : Se(n.nanos, s.nanos)
}

function sl(t, e) {
    return {
        referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`
    }
}

function Cu(t) {
    return !!t && "arrayValue" in t
}

function rl(t) {
    return !!t && "nullValue" in t
}

function il(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue))
}

function vi(t) {
    return !!t && "mapValue" in t
}

function cs(t) {
    if (t.geoPointValue) return {
        geoPointValue: Object.assign({}, t.geoPointValue)
    };
    if (t.timestampValue && typeof t.timestampValue == "object") return {
        timestampValue: Object.assign({}, t.timestampValue)
    };
    if (t.mapValue) {
        const e = {
            mapValue: {
                fields: {}
            }
        };
        return Jr(t.mapValue.fields, (n, s) => e.mapValue.fields[n] = cs(s)), e
    }
    if (t.arrayValue) {
        const e = {
            arrayValue: {
                values: []
            }
        };
        for (let n = 0; n < (t.arrayValue.values || []).length; ++n) e.arrayValue.values[n] = cs(t.arrayValue.values[n]);
        return e
    }
    return Object.assign({}, t)
}
class ol {
    constructor(e, n) {
        this.position = e, this.inclusive = n
    }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ru {}
class ht extends Ru {
    constructor(e, n, s) {
        super(), this.field = e, this.op = n, this.value = s
    }
    static create(e, n, s) {
        return e.isKeyField() ? n === "in" || n === "not-in" ? this.createKeyFieldInFilter(e, n, s) : new J0(e, n, s) : n === "array-contains" ? new X0(e, s) : n === "in" ? new Z0(e, s) : n === "not-in" ? new ey(e, s) : n === "array-contains-any" ? new ty(e, s) : new ht(e, n, s)
    }
    static createKeyFieldInFilter(e, n, s) {
        return n === "in" ? new Y0(e, s) : new Q0(e, s)
    }
    matches(e) {
        const n = e.data.field(this.field);
        return this.op === "!=" ? n !== null && this.matchesComparison(wr(n, this.value)) : n !== null && wn(this.value) === wn(n) && this.matchesComparison(wr(n, this.value))
    }
    matchesComparison(e) {
        switch (this.op) {
            case "<":
                return e < 0;
            case "<=":
                return e <= 0;
            case "==":
                return e === 0;
            case "!=":
                return e !== 0;
            case ">":
                return e > 0;
            case ">=":
                return e >= 0;
            default:
                return ye()
        }
    }
    isInequality() {
        return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
    }
    getFlattenedFilters() {
        return [this]
    }
    getFilters() {
        return [this]
    }
    getFirstInequalityField() {
        return this.isInequality() ? this.field : null
    }
}
class js extends Ru {
    constructor(e, n) {
        super(), this.filters = e, this.op = n, this.D = null
    }
    static create(e, n) {
        return new js(e, n)
    }
    matches(e) {
        return this.op === "and" ? this.filters.find(n => !n.matches(e)) === void 0 : this.filters.find(n => n.matches(e)) !== void 0
    }
    getFlattenedFilters() {
        return this.D !== null || (this.D = this.filters.reduce((e, n) => e.concat(n.getFlattenedFilters()), [])), this.D
    }
    getFilters() {
        return Object.assign([], this.filters)
    }
    getFirstInequalityField() {
        const e = this.F(n => n.isInequality());
        return e !== null ? e.field : null
    }
    F(e) {
        for (const n of this.getFlattenedFilters())
            if (e(n)) return n;
        return null
    }
}
class J0 extends ht {
    constructor(e, n, s) {
        super(e, n, s), this.key = Ce.fromName(s.referenceValue)
    }
    matches(e) {
        const n = Ce.comparator(e.key, this.key);
        return this.matchesComparison(n)
    }
}
class Y0 extends ht {
    constructor(e, n) {
        super(e, "in", n), this.keys = Ou("in", n)
    }
    matches(e) {
        return this.keys.some(n => n.isEqual(e.key))
    }
}
class Q0 extends ht {
    constructor(e, n) {
        super(e, "not-in", n), this.keys = Ou("not-in", n)
    }
    matches(e) {
        return !this.keys.some(n => n.isEqual(e.key))
    }
}

function Ou(t, e) {
    var n;
    return (((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []).map(s => Ce.fromName(s.referenceValue))
}
class X0 extends ht {
    constructor(e, n) {
        super(e, "array-contains", n)
    }
    matches(e) {
        const n = e.data.field(this.field);
        return Cu(n) && Ps(n.arrayValue, this.value)
    }
}
class Z0 extends ht {
    constructor(e, n) {
        super(e, "in", n)
    }
    matches(e) {
        const n = e.data.field(this.field);
        return n !== null && Ps(this.value.arrayValue, n)
    }
}
class ey extends ht {
    constructor(e, n) {
        super(e, "not-in", n)
    }
    matches(e) {
        if (Ps(this.value.arrayValue, {
                nullValue: "NULL_VALUE"
            })) return !1;
        const n = e.data.field(this.field);
        return n !== null && !Ps(this.value.arrayValue, n)
    }
}
class ty extends ht {
    constructor(e, n) {
        super(e, "array-contains-any", n)
    }
    matches(e) {
        const n = e.data.field(this.field);
        return !(!Cu(n) || !n.arrayValue.values) && n.arrayValue.values.some(s => Ps(this.value.arrayValue, s))
    }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar {
    constructor(e, n = "asc") {
        this.field = e, this.dir = n
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re {
    constructor(e) {
        this.timestamp = e
    }
    static fromTimestamp(e) {
        return new Re(e)
    }
    static min() {
        return new Re(new Ge(0, 0))
    }
    static max() {
        return new Re(new Ge(253402300799, 999999999))
    }
    compareTo(e) {
        return this.timestamp._compareTo(e.timestamp)
    }
    isEqual(e) {
        return this.timestamp.isEqual(e.timestamp)
    }
    toMicroseconds() {
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
    }
    toString() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")"
    }
    toTimestamp() {
        return this.timestamp
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr {
    constructor(e, n) {
        this.comparator = e, this.root = n || Ae.EMPTY
    }
    insert(e, n) {
        return new xr(this.comparator, this.root.insert(e, n, this.comparator).copy(null, null, Ae.BLACK, null, null))
    }
    remove(e) {
        return new xr(this.comparator, this.root.remove(e, this.comparator).copy(null, null, Ae.BLACK, null, null))
    }
    get(e) {
        let n = this.root;
        for (; !n.isEmpty();) {
            const s = this.comparator(e, n.key);
            if (s === 0) return n.value;
            s < 0 ? n = n.left : s > 0 && (n = n.right)
        }
        return null
    }
    indexOf(e) {
        let n = 0,
            s = this.root;
        for (; !s.isEmpty();) {
            const r = this.comparator(e, s.key);
            if (r === 0) return n + s.left.size;
            r < 0 ? s = s.left : (n += s.left.size + 1, s = s.right)
        }
        return -1
    }
    isEmpty() {
        return this.root.isEmpty()
    }
    get size() {
        return this.root.size
    }
    minKey() {
        return this.root.minKey()
    }
    maxKey() {
        return this.root.maxKey()
    }
    inorderTraversal(e) {
        return this.root.inorderTraversal(e)
    }
    forEach(e) {
        this.inorderTraversal((n, s) => (e(n, s), !1))
    }
    toString() {
        const e = [];
        return this.inorderTraversal((n, s) => (e.push(`${n}:${s}`), !1)), `{${e.join(", ")}}`
    }
    reverseTraversal(e) {
        return this.root.reverseTraversal(e)
    }
    getIterator() {
        return new Zs(this.root, null, this.comparator, !1)
    }
    getIteratorFrom(e) {
        return new Zs(this.root, e, this.comparator, !1)
    }
    getReverseIterator() {
        return new Zs(this.root, null, this.comparator, !0)
    }
    getReverseIteratorFrom(e) {
        return new Zs(this.root, e, this.comparator, !0)
    }
}
class Zs {
    constructor(e, n, s, r) {
        this.isReverse = r, this.nodeStack = [];
        let i = 1;
        for (; !e.isEmpty();)
            if (i = n ? s(e.key, n) : 1, n && r && (i *= -1), i < 0) e = this.isReverse ? e.left : e.right;
            else {
                if (i === 0) {
                    this.nodeStack.push(e);
                    break
                }
                this.nodeStack.push(e), e = this.isReverse ? e.right : e.left
            }
    }
    getNext() {
        let e = this.nodeStack.pop();
        const n = {
            key: e.key,
            value: e.value
        };
        if (this.isReverse)
            for (e = e.left; !e.isEmpty();) this.nodeStack.push(e), e = e.right;
        else
            for (e = e.right; !e.isEmpty();) this.nodeStack.push(e), e = e.left;
        return n
    }
    hasNext() {
        return this.nodeStack.length > 0
    }
    peek() {
        if (this.nodeStack.length === 0) return null;
        const e = this.nodeStack[this.nodeStack.length - 1];
        return {
            key: e.key,
            value: e.value
        }
    }
}
class Ae {
    constructor(e, n, s, r, i) {
        this.key = e, this.value = n, this.color = s ?? Ae.RED, this.left = r ?? Ae.EMPTY, this.right = i ?? Ae.EMPTY, this.size = this.left.size + 1 + this.right.size
    }
    copy(e, n, s, r, i) {
        return new Ae(e ?? this.key, n ?? this.value, s ?? this.color, r ?? this.left, i ?? this.right)
    }
    isEmpty() {
        return !1
    }
    inorderTraversal(e) {
        return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
    }
    reverseTraversal(e) {
        return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
    }
    min() {
        return this.left.isEmpty() ? this : this.left.min()
    }
    minKey() {
        return this.min().key
    }
    maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey()
    }
    insert(e, n, s) {
        let r = this;
        const i = s(e, r.key);
        return r = i < 0 ? r.copy(null, null, null, r.left.insert(e, n, s), null) : i === 0 ? r.copy(null, n, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, n, s)), r.fixUp()
    }
    removeMin() {
        if (this.left.isEmpty()) return Ae.EMPTY;
        let e = this;
        return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp()
    }
    remove(e, n) {
        let s, r = this;
        if (n(e, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(e, n), null);
        else {
            if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), n(e, r.key) === 0) {
                if (r.right.isEmpty()) return Ae.EMPTY;
                s = r.right.min(), r = r.copy(s.key, s.value, null, null, r.right.removeMin())
            }
            r = r.copy(null, null, null, null, r.right.remove(e, n))
        }
        return r.fixUp()
    }
    isRed() {
        return this.color
    }
    fixUp() {
        let e = this;
        return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e
    }
    moveRedLeft() {
        let e = this.colorFlip();
        return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e
    }
    moveRedRight() {
        let e = this.colorFlip();
        return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e
    }
    rotateLeft() {
        const e = this.copy(null, null, Ae.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null)
    }
    rotateRight() {
        const e = this.copy(null, null, Ae.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e)
    }
    colorFlip() {
        const e = this.left.copy(null, null, !this.left.color, null, null),
            n = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, e, n)
    }
    checkMaxDepth() {
        const e = this.check();
        return Math.pow(2, e) <= this.size + 1
    }
    check() {
        if (this.isRed() && this.left.isRed() || this.right.isRed()) throw ye();
        const e = this.left.check();
        if (e !== this.right.check()) throw ye();
        return e + (this.isRed() ? 0 : 1)
    }
}
Ae.EMPTY = null, Ae.RED = !0, Ae.BLACK = !1;
Ae.EMPTY = new class {
    constructor() {
        this.size = 0
    }
    get key() {
        throw ye()
    }
    get value() {
        throw ye()
    }
    get color() {
        throw ye()
    }
    get left() {
        throw ye()
    }
    get right() {
        throw ye()
    }
    copy(t, e, n, s, r) {
        return this
    }
    insert(t, e, n) {
        return new Ae(t, e)
    }
    remove(t, e) {
        return this
    }
    isEmpty() {
        return !0
    }
    inorderTraversal(t) {
        return !1
    }
    reverseTraversal(t) {
        return !1
    }
    minKey() {
        return null
    }
    maxKey() {
        return null
    }
    isRed() {
        return !1
    }
    checkMaxDepth() {
        return !0
    }
    check() {
        return 0
    }
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir {
    constructor(e) {
        this.comparator = e, this.data = new xr(this.comparator)
    }
    has(e) {
        return this.data.get(e) !== null
    }
    first() {
        return this.data.minKey()
    }
    last() {
        return this.data.maxKey()
    }
    get size() {
        return this.data.size
    }
    indexOf(e) {
        return this.data.indexOf(e)
    }
    forEach(e) {
        this.data.inorderTraversal((n, s) => (e(n), !1))
    }
    forEachInRange(e, n) {
        const s = this.data.getIteratorFrom(e[0]);
        for (; s.hasNext();) {
            const r = s.getNext();
            if (this.comparator(r.key, e[1]) >= 0) return;
            n(r.key)
        }
    }
    forEachWhile(e, n) {
        let s;
        for (s = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator(); s.hasNext();)
            if (!e(s.getNext().key)) return
    }
    firstAfterOrEqual(e) {
        const n = this.data.getIteratorFrom(e);
        return n.hasNext() ? n.getNext().key : null
    }
    getIterator() {
        return new al(this.data.getIterator())
    }
    getIteratorFrom(e) {
        return new al(this.data.getIteratorFrom(e))
    }
    add(e) {
        return this.copy(this.data.remove(e).insert(e, !0))
    }
    delete(e) {
        return this.has(e) ? this.copy(this.data.remove(e)) : this
    }
    isEmpty() {
        return this.data.isEmpty()
    }
    unionWith(e) {
        let n = this;
        return n.size < e.size && (n = e, e = this), e.forEach(s => {
            n = n.add(s)
        }), n
    }
    isEqual(e) {
        if (!(e instanceof Ir) || this.size !== e.size) return !1;
        const n = this.data.getIterator(),
            s = e.data.getIterator();
        for (; n.hasNext();) {
            const r = n.getNext().key,
                i = s.getNext().key;
            if (this.comparator(r, i) !== 0) return !1
        }
        return !0
    }
    toArray() {
        const e = [];
        return this.forEach(n => {
            e.push(n)
        }), e
    }
    toString() {
        const e = [];
        return this.forEach(n => e.push(n)), "SortedSet(" + e.toString() + ")"
    }
    copy(e) {
        const n = new Ir(this.comparator);
        return n.data = e, n
    }
}
class al {
    constructor(e) {
        this.iter = e
    }
    getNext() {
        return this.iter.getNext().key
    }
    hasNext() {
        return this.iter.hasNext()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns {
    constructor(e) {
        this.fields = e, e.sort(Ke.comparator)
    }
    static empty() {
        return new Ns([])
    }
    unionWith(e) {
        let n = new Ir(Ke.comparator);
        for (const s of this.fields) n = n.add(s);
        for (const s of e) n = n.add(s);
        return new Ns(n.toArray())
    }
    covers(e) {
        for (const n of this.fields)
            if (n.isPrefixOf(e)) return !0;
        return !1
    }
    isEqual(e) {
        return Su(this.fields, e.fields, (n, s) => n.isEqual(s))
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt {
    constructor(e) {
        this.value = e
    }
    static empty() {
        return new bt({
            mapValue: {}
        })
    }
    field(e) {
        if (e.isEmpty()) return this.value; {
            let n = this.value;
            for (let s = 0; s < e.length - 1; ++s)
                if (n = (n.mapValue.fields || {})[e.get(s)], !vi(n)) return null;
            return n = (n.mapValue.fields || {})[e.lastSegment()], n || null
        }
    }
    set(e, n) {
        this.getFieldsMap(e.popLast())[e.lastSegment()] = cs(n)
    }
    setAll(e) {
        let n = Ke.emptyPath(),
            s = {},
            r = [];
        e.forEach((o, a) => {
            if (!n.isImmediateParentOf(a)) {
                const l = this.getFieldsMap(n);
                this.applyChanges(l, s, r), s = {}, r = [], n = a.popLast()
            }
            o ? s[a.lastSegment()] = cs(o) : r.push(a.lastSegment())
        });
        const i = this.getFieldsMap(n);
        this.applyChanges(i, s, r)
    }
    delete(e) {
        const n = this.field(e.popLast());
        vi(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()]
    }
    isEqual(e) {
        return br(this.value, e.value)
    }
    getFieldsMap(e) {
        let n = this.value;
        n.mapValue.fields || (n.mapValue = {
            fields: {}
        });
        for (let s = 0; s < e.length; ++s) {
            let r = n.mapValue.fields[e.get(s)];
            vi(r) && r.mapValue.fields || (r = {
                mapValue: {
                    fields: {}
                }
            }, n.mapValue.fields[e.get(s)] = r), n = r
        }
        return n.mapValue.fields
    }
    applyChanges(e, n, s) {
        Jr(n, (r, i) => e[r] = i);
        for (const r of s) delete e[r]
    }
    clone() {
        return new bt(cs(this.value))
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt {
    constructor(e, n, s, r, i, o, a) {
        this.key = e, this.documentType = n, this.version = s, this.readTime = r, this.createTime = i, this.data = o, this.documentState = a
    }
    static newInvalidDocument(e) {
        return new jt(e, 0, Re.min(), Re.min(), Re.min(), bt.empty(), 0)
    }
    static newFoundDocument(e, n, s, r) {
        return new jt(e, 1, n, Re.min(), s, r, 0)
    }
    static newNoDocument(e, n) {
        return new jt(e, 2, n, Re.min(), Re.min(), bt.empty(), 0)
    }
    static newUnknownDocument(e, n) {
        return new jt(e, 3, n, Re.min(), Re.min(), bt.empty(), 2)
    }
    convertToFoundDocument(e, n) {
        return !this.createTime.isEqual(Re.min()) || this.documentType !== 2 && this.documentType !== 0 || (this.createTime = e), this.version = e, this.documentType = 1, this.data = n, this.documentState = 0, this
    }
    convertToNoDocument(e) {
        return this.version = e, this.documentType = 2, this.data = bt.empty(), this.documentState = 0, this
    }
    convertToUnknownDocument(e) {
        return this.version = e, this.documentType = 3, this.data = bt.empty(), this.documentState = 2, this
    }
    setHasCommittedMutations() {
        return this.documentState = 2, this
    }
    setHasLocalMutations() {
        return this.documentState = 1, this.version = Re.min(), this
    }
    setReadTime(e) {
        return this.readTime = e, this
    }
    get hasLocalMutations() {
        return this.documentState === 1
    }
    get hasCommittedMutations() {
        return this.documentState === 2
    }
    get hasPendingWrites() {
        return this.hasLocalMutations || this.hasCommittedMutations
    }
    isValidDocument() {
        return this.documentType !== 0
    }
    isFoundDocument() {
        return this.documentType === 1
    }
    isNoDocument() {
        return this.documentType === 2
    }
    isUnknownDocument() {
        return this.documentType === 3
    }
    isEqual(e) {
        return e instanceof jt && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data)
    }
    mutableCopy() {
        return new jt(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState)
    }
    toString() {
        return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ny {
    constructor(e, n = null, s = [], r = [], i = null, o = null, a = null) {
        this.path = e, this.collectionGroup = n, this.orderBy = s, this.filters = r, this.limit = i, this.startAt = o, this.endAt = a, this.S = null
    }
}

function ll(t, e = null, n = [], s = [], r = null, i = null, o = null) {
    return new ny(t, e, n, s, r, i, o)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pu {
    constructor(e, n = null, s = [], r = [], i = null, o = "F", a = null, l = null) {
        this.path = e, this.collectionGroup = n, this.explicitOrderBy = s, this.filters = r, this.limit = i, this.limitType = o, this.startAt = a, this.endAt = l, this.q = null, this.O = null, this.startAt, this.endAt
    }
}

function Nu(t) {
    return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null
}

function No(t) {
    for (const e of t.filters) {
        const n = e.getFirstInequalityField();
        if (n !== null) return n
    }
    return null
}

function sy(t) {
    return t.collectionGroup !== null
}

function cl(t) {
    const e = Wr(t);
    if (e.q === null) {
        e.q = [];
        const n = No(e),
            s = Nu(e);
        if (n !== null && s === null) n.isKeyField() || e.q.push(new ar(n)), e.q.push(new ar(Ke.keyField(), "asc"));
        else {
            let r = !1;
            for (const i of e.explicitOrderBy) e.q.push(i), i.field.isKeyField() && (r = !0);
            if (!r) {
                const i = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
                e.q.push(new ar(Ke.keyField(), i))
            }
        }
    }
    return e.q
}

function ry(t) {
    const e = Wr(t);
    if (!e.O)
        if (e.limitType === "F") e.O = ll(e.path, e.collectionGroup, cl(e), e.filters, e.limit, e.startAt, e.endAt);
        else {
            const n = [];
            for (const i of cl(e)) {
                const o = i.dir === "desc" ? "asc" : "desc";
                n.push(new ar(i.field, o))
            }
            const s = e.endAt ? new ol(e.endAt.position, e.endAt.inclusive) : null,
                r = e.startAt ? new ol(e.startAt.position, e.startAt.inclusive) : null;
            e.O = ll(e.path, e.collectionGroup, n, e.filters, e.limit, s, r)
        } return e.O
}

function Qi(t, e) {
    e.getFirstInequalityField(), No(t);
    const n = t.filters.concat([e]);
    return new Pu(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function iy(t, e) {
    return function (n) {
        return typeof n == "number" && Number.isInteger(n) && !vr(n) && n <= Number.MAX_SAFE_INTEGER && n >= Number.MIN_SAFE_INTEGER
    }(e) ? function (n) {
        return {
            integerValue: "" + n
        }
    }(e) : function (n, s) {
        if (n.k) {
            if (isNaN(s)) return {
                doubleValue: "NaN"
            };
            if (s === 1 / 0) return {
                doubleValue: "Infinity"
            };
            if (s === -1 / 0) return {
                doubleValue: "-Infinity"
            }
        }
        return {
            doubleValue: vr(s) ? "-0" : s
        }
    }(t, e)
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr {
    constructor() {
        this._ = void 0
    }
}
class oy extends Yr {}
class ay extends Yr {
    constructor(e) {
        super(), this.elements = e
    }
}
class ly extends Yr {
    constructor(e) {
        super(), this.elements = e
    }
}
class cy extends Yr {
    constructor(e, n) {
        super(), this.C = e, this.L = n
    }
}
class us {
    constructor(e, n) {
        this.updateTime = e, this.exists = n
    }
    static none() {
        return new us
    }
    static exists(e) {
        return new us(void 0, e)
    }
    static updateTime(e) {
        return new us(e)
    }
    get isNone() {
        return this.updateTime === void 0 && this.exists === void 0
    }
    isEqual(e) {
        return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime)
    }
}
class Qr {}
class Du extends Qr {
    constructor(e, n, s, r = []) {
        super(), this.key = e, this.value = n, this.precondition = s, this.fieldTransforms = r, this.type = 0
    }
    getFieldMask() {
        return null
    }
}
class Mu extends Qr {
    constructor(e, n, s, r, i = []) {
        super(), this.key = e, this.data = n, this.fieldMask = s, this.precondition = r, this.fieldTransforms = i, this.type = 1
    }
    getFieldMask() {
        return this.fieldMask
    }
}
class uy extends Qr {
    constructor(e, n) {
        super(), this.key = e, this.precondition = n, this.type = 2, this.fieldTransforms = []
    }
    getFieldMask() {
        return null
    }
}
class dy extends Qr {
    constructor(e, n) {
        super(), this.key = e, this.precondition = n, this.type = 3, this.fieldTransforms = []
    }
    getFieldMask() {
        return null
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fy = (() => ({
        asc: "ASCENDING",
        desc: "DESCENDING"
    }))(),
    hy = (() => ({
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "!=": "NOT_EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        in: "IN",
        "not-in": "NOT_IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
    }))(),
    py = (() => ({
        and: "AND",
        or: "OR"
    }))();
class my {
    constructor(e, n) {
        this.databaseId = e, this.k = n
    }
}

function Xi(t, e) {
    return t.k ? `${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z` : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    }
}

function gy(t, e) {
    return t.k ? e.toBase64() : e.toUint8Array()
}

function yy(t, e) {
    return Xi(t, e.toTimestamp())
}

function ul(t) {
    return Pt(!!t), Re.fromTimestamp(function (e) {
        const n = bn(e);
        return new Ge(n.seconds, n.nanos)
    }(t))
}

function Do(t, e) {
    return function (n) {
        return new xe(["projects", n.projectId, "databases", n.database])
    }(t).child("documents").child(e).canonicalString()
}

function Zi(t, e) {
    return Do(t.databaseId, e.path)
}

function _y(t, e) {
    const n = function (r) {
        const i = xe.fromString(r);
        return Pt(Fu(i)), i
    }(e);
    if (n.get(1) !== t.databaseId.projectId) throw new $(H, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
    if (n.get(3) !== t.databaseId.database) throw new $(H, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
    return new Ce((Pt((s = n).length > 4 && s.get(4) === "documents"), s.popFirst(5)));
    var s
}

function dl(t, e) {
    return Do(t.databaseId, e)
}

function vy(t) {
    return new xe(["projects", t.databaseId.projectId, "databases", t.databaseId.database]).canonicalString()
}

function fl(t, e, n) {
    return {
        name: Zi(t, e),
        fields: n.value.mapValue.fields
    }
}

function by(t, e) {
    let n;
    if (e instanceof Du) n = {
        update: fl(t, e.key, e.value)
    };
    else if (e instanceof uy) n = {
        delete: Zi(t, e.key)
    };
    else if (e instanceof Mu) n = {
        update: fl(t, e.key, e.data),
        updateMask: Ty(e.fieldMask)
    };
    else {
        if (!(e instanceof dy)) return ye();
        n = {
            verify: Zi(t, e.key)
        }
    }
    return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map(s => function (r, i) {
        const o = i.transform;
        if (o instanceof oy) return {
            fieldPath: i.field.canonicalString(),
            setToServerValue: "REQUEST_TIME"
        };
        if (o instanceof ay) return {
            fieldPath: i.field.canonicalString(),
            appendMissingElements: {
                values: o.elements
            }
        };
        if (o instanceof ly) return {
            fieldPath: i.field.canonicalString(),
            removeAllFromArray: {
                values: o.elements
            }
        };
        if (o instanceof cy) return {
            fieldPath: i.field.canonicalString(),
            increment: o.L
        };
        throw ye()
    }(0, s))), e.precondition.isNone || (n.currentDocument = function (s, r) {
        return r.updateTime !== void 0 ? {
            updateTime: yy(s, r.updateTime)
        } : r.exists !== void 0 ? {
            exists: r.exists
        } : ye()
    }(t, e.precondition)), n
}

function wy(t, e) {
    const n = {
            structuredQuery: {}
        },
        s = e.path;
    e.collectionGroup !== null ? (n.parent = dl(t, s), n.structuredQuery.from = [{
        collectionId: e.collectionGroup,
        allDescendants: !0
    }]) : (n.parent = dl(t, s.popLast()), n.structuredQuery.from = [{
        collectionId: s.lastSegment()
    }]);
    const r = function (l) {
        if (l.length !== 0) return Lu(js.create(l, "and"))
    }(e.filters);
    r && (n.structuredQuery.where = r);
    const i = function (l) {
        if (l.length !== 0) return l.map(c => function (u) {
            return {
                field: On(u.field),
                direction: xy(u.dir)
            }
        }(c))
    }(e.orderBy);
    i && (n.structuredQuery.orderBy = i);
    const o = function (l, c) {
        return l.k || H0(c) ? c : {
            value: c
        }
    }(t, e.limit);
    var a;
    return o !== null && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = {
        before: (a = e.startAt).inclusive,
        values: a.position
    }), e.endAt && (n.structuredQuery.endAt = function (l) {
        return {
            before: !l.inclusive,
            values: l.position
        }
    }(e.endAt)), n
}

function xy(t) {
    return fy[t]
}

function Iy(t) {
    return hy[t]
}

function Ey(t) {
    return py[t]
}

function On(t) {
    return {
        fieldPath: t.canonicalString()
    }
}

function Lu(t) {
    return t instanceof ht ? function (e) {
        if (e.op === "==") {
            if (il(e.value)) return {
                unaryFilter: {
                    field: On(e.field),
                    op: "IS_NAN"
                }
            };
            if (rl(e.value)) return {
                unaryFilter: {
                    field: On(e.field),
                    op: "IS_NULL"
                }
            }
        } else if (e.op === "!=") {
            if (il(e.value)) return {
                unaryFilter: {
                    field: On(e.field),
                    op: "IS_NOT_NAN"
                }
            };
            if (rl(e.value)) return {
                unaryFilter: {
                    field: On(e.field),
                    op: "IS_NOT_NULL"
                }
            }
        }
        return {
            fieldFilter: {
                field: On(e.field),
                op: Iy(e.op),
                value: e.value
            }
        }
    }(t) : t instanceof js ? function (e) {
        const n = e.getFilters().map(s => Lu(s));
        return n.length === 1 ? n[0] : {
            compositeFilter: {
                op: Ey(e.op),
                filters: n
            }
        }
    }(t) : ye()
}

function Ty(t) {
    const e = [];
    return t.fields.forEach(n => e.push(n.canonicalString())), {
        fieldPaths: e
    }
}

function Fu(t) {
    return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases"
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mo(t) {
    return new my(t, !0)
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sy extends class {} {
    constructor(e, n, s, r) {
        super(), this.authCredentials = e, this.appCheckCredentials = n, this.connection = s, this.C = r, this.Z = !1
    }
    tt() {
        if (this.Z) throw new $(zn, "The client has already been terminated.")
    }
    I(e, n, s) {
        return this.tt(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([r, i]) => this.connection.I(e, n, s, r, i)).catch(r => {
            throw r.name === "FirebaseError" ? (r.code === Yi && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), r) : new $(ls, r.toString())
        })
    }
    P(e, n, s, r) {
        return this.tt(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, o]) => this.connection.P(e, n, s, i, o, r)).catch(i => {
            throw i.name === "FirebaseError" ? (i.code === Yi && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), i) : new $(ls, i.toString())
        })
    }
    terminate() {
        this.Z = !0
    }
}
async function ky(t, e) {
    const n = Wr(t),
        s = vy(n.C) + "/documents",
        r = {
            writes: e.map(i => by(n.C, i))
        };
    await n.I("Commit", s, r)
}
async function Ay(t, e) {
    const n = Wr(t),
        s = wy(n.C, ry(e));
    return (await n.P("RunQuery", s.parent, {
        structuredQuery: s.structuredQuery
    })).filter(r => !!r.document).map(r => function (i, o, a) {
        const l = _y(i, o.name),
            c = ul(o.updateTime),
            u = o.createTime ? ul(o.createTime) : Re.min(),
            f = new bt({
                mapValue: {
                    fields: o.fields
                }
            }),
            h = jt.newFoundDocument(l, c, u, f);
        return a && h.setHasCommittedMutations(), a ? h.setHasCommittedMutations() : h
    }(n.C, r.document, void 0))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ds = new Map;

function $u(t) {
    if (t._terminated) throw new $(zn, "The client has already been terminated.");
    if (!ds.has(t)) {
        _r("ComponentProvider", "Initializing Datastore");
        const i = function (l) {
                return new z0(l, fetch.bind(null))
            }((e = t._databaseId, n = t.app.options.appId || "", s = t._persistenceKey, r = t._freezeSettings(), new j0(e, n, s, r.host, r.ssl, r.experimentalForceLongPolling, r.experimentalAutoDetectLongPolling, r.useFetchStreams))),
            o = Mo(t._databaseId),
            a = function (l, c, u, f) {
                return new Sy(l, c, u, f)
            }(t._authCredentials, t._appCheckCredentials, i, o);
        ds.set(t, a)
    }
    var e, n, s, r;
    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    return ds.get(t)
}
class hl {
    constructor(e) {
        var n;
        if (e.host === void 0) {
            if (e.ssl !== void 0) throw new $(H, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0
        } else this.host = e.host, this.ssl = (n = e.ssl) === null || n === void 0 || n;
        if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, e.cacheSizeBytes === void 0) this.cacheSizeBytes = 41943040;
        else {
            if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576) throw new $(H, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = e.cacheSizeBytes
        }
        this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling, this.useFetchStreams = !!e.useFetchStreams,
            function (s, r, i, o) {
                if (r === !0 && o === !0) throw new $(H, `${s} and ${i} cannot be used together.`)
            }("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling)
    }
    isEqual(e) {
        return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr {
    constructor(e, n, s, r) {
        this._authCredentials = e, this._appCheckCredentials = n, this._databaseId = s, this._app = r, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new hl({}), this._settingsFrozen = !1
    }
    get app() {
        if (!this._app) throw new $(zn, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this._app
    }
    get _initialized() {
        return this._settingsFrozen
    }
    get _terminated() {
        return this._terminateTask !== void 0
    }
    _setSettings(e) {
        if (this._settingsFrozen) throw new $(zn, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new hl(e), e.credentials !== void 0 && (this._authCredentials = function (n) {
            if (!n) return new D0;
            switch (n.type) {
                case "gapi":
                    const s = n.client;
                    return new $0(s, n.sessionIndex || "0", n.iamToken || null, n.authTokenFactory || null);
                case "provider":
                    return n.client;
                default:
                    throw new $(H, "makeAuthCredentialsProvider failed due to invalid credential type")
            }
        }(e.credentials))
    }
    _getSettings() {
        return this._settings
    }
    _freezeSettings() {
        return this._settingsFrozen = !0, this._settings
    }
    _delete() {
        return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask
    }
    toJSON() {
        return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
        }
    }
    _terminate() {
        return function (e) {
            const n = ds.get(e);
            n && (_r("ComponentProvider", "Removing Datastore"), ds.delete(e), n.terminate())
        }(this), Promise.resolve()
    }
}

function Cy(t, e) {
    const n = typeof t == "object" ? t : Co(),
        s = typeof t == "string" ? t : e || "(default)",
        r = Sn(n, "firestore/lite").getImmediate({
            identifier: s
        });
    if (!r._initialized) {
        const i = og("firestore");
        i && Ry(r, ...i)
    }
    return r
}

function Ry(t, e, n, s = {}) {
    var r;
    const i = (t = Po(t, Xr))._getSettings();
    if (i.host !== "firestore.googleapis.com" && i.host !== e && xu("Host has been set in both settings() and useEmulator(), emulator host will be used"), t._setSettings(Object.assign(Object.assign({}, i), {
            host: `${e}:${n}`,
            ssl: !1
        })), s.mockUserToken) {
        let o, a;
        if (typeof s.mockUserToken == "string") o = s.mockUserToken, a = $e.MOCK_USER;
        else {
            o = cg(s.mockUserToken, (r = t._app) === null || r === void 0 ? void 0 : r.options.projectId);
            const l = s.mockUserToken.sub || s.mockUserToken.user_id;
            if (!l) throw new $(H, "mockUserToken must contain 'sub' or 'user_id' field!");
            a = new $e(l)
        }
        t._authCredentials = new M0(new Eu(o, a))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt {
    constructor(e, n, s) {
        this.converter = n, this._key = s, this.type = "document", this.firestore = e
    }
    get _path() {
        return this._key.path
    }
    get id() {
        return this._key.path.lastSegment()
    }
    get path() {
        return this._key.path.canonicalString()
    }
    get parent() {
        return new Rt(this.firestore, this.converter, this._key.path.popLast())
    }
    withConverter(e) {
        return new tt(this.firestore, e, this._key)
    }
}
class ts {
    constructor(e, n, s) {
        this.converter = n, this._query = s, this.type = "query", this.firestore = e
    }
    withConverter(e) {
        return new ts(this.firestore, e, this._query)
    }
}
class Rt extends ts {
    constructor(e, n, s) {
        super(e, n, new Pu(s)), this._path = s, this.type = "collection"
    }
    get id() {
        return this._query.path.lastSegment()
    }
    get path() {
        return this._query.path.canonicalString()
    }
    get parent() {
        const e = this._path.popLast();
        return e.isEmpty() ? null : new tt(this.firestore, null, new Ce(e))
    }
    withConverter(e) {
        return new Rt(this.firestore, e, this._path)
    }
}

function bi(t, e, ...n) {
    if (t = je(t), Tu("collection", "path", e), t instanceof Xr) {
        const s = xe.fromString(e, ...n);
        return Xa(s), new Rt(t, null, s)
    } {
        if (!(t instanceof tt || t instanceof Rt)) throw new $(H, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const s = t._path.child(xe.fromString(e, ...n));
        return Xa(s), new Rt(t.firestore, null, s)
    }
}

function Oy(t, e, ...n) {
    if (t = je(t), arguments.length === 1 && (e = W0.N()), Tu("doc", "path", e), t instanceof Xr) {
        const s = xe.fromString(e, ...n);
        return Qa(s), new tt(t, null, new Ce(s))
    } {
        if (!(t instanceof tt || t instanceof Rt)) throw new $(H, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const s = t._path.child(xe.fromString(e, ...n));
        return Qa(s), new tt(t.firestore, t instanceof Rt ? t.converter : null, new Ce(s))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kn {
    constructor(e) {
        this._byteString = e
    }
    static fromBase64String(e) {
        try {
            return new Kn(Nt.fromBase64String(e))
        } catch (n) {
            throw new $(H, "Failed to construct data from Base64 string: " + n)
        }
    }
    static fromUint8Array(e) {
        return new Kn(Nt.fromUint8Array(e))
    }
    toBase64() {
        return this._byteString.toBase64()
    }
    toUint8Array() {
        return this._byteString.toUint8Array()
    }
    toString() {
        return "Bytes(base64: " + this.toBase64() + ")"
    }
    isEqual(e) {
        return this._byteString.isEqual(e._byteString)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lo {
    constructor(...e) {
        for (let n = 0; n < e.length; ++n)
            if (e[n].length === 0) throw new $(H, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this._internalPath = new Ke(e)
    }
    isEqual(e) {
        return this._internalPath.isEqual(e._internalPath)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uu {
    constructor(e) {
        this._methodName = e
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fo {
    constructor(e, n) {
        if (!isFinite(e) || e < -90 || e > 90) throw new $(H, "Latitude must be a number between -90 and 90, but was: " + e);
        if (!isFinite(n) || n < -180 || n > 180) throw new $(H, "Longitude must be a number between -180 and 180, but was: " + n);
        this._lat = e, this._long = n
    }
    get latitude() {
        return this._lat
    }
    get longitude() {
        return this._long
    }
    isEqual(e) {
        return this._lat === e._lat && this._long === e._long
    }
    toJSON() {
        return {
            latitude: this._lat,
            longitude: this._long
        }
    }
    _compareTo(e) {
        return Se(this._lat, e._lat) || Se(this._long, e._long)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Py = /^__.*__$/;
class Ny {
    constructor(e, n, s) {
        this.data = e, this.fieldMask = n, this.fieldTransforms = s
    }
    toMutation(e, n) {
        return this.fieldMask !== null ? new Mu(e, this.data, this.fieldMask, n, this.fieldTransforms) : new Du(e, this.data, n, this.fieldTransforms)
    }
}

function Vu(t) {
    switch (t) {
        case 0:
        case 2:
        case 1:
            return !0;
        case 3:
        case 4:
            return !1;
        default:
            throw ye()
    }
}
class $o {
    constructor(e, n, s, r, i, o) {
        this.settings = e, this.databaseId = n, this.C = s, this.ignoreUndefinedProperties = r, i === void 0 && this.et(), this.fieldTransforms = i || [], this.fieldMask = o || []
    }
    get path() {
        return this.settings.path
    }
    get nt() {
        return this.settings.nt
    }
    rt(e) {
        return new $o(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.C, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask)
    }
    st(e) {
        var n;
        const s = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
            r = this.rt({
                path: s,
                it: !1
            });
        return r.ot(e), r
    }
    ut(e) {
        var n;
        const s = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
            r = this.rt({
                path: s,
                it: !1
            });
        return r.et(), r
    }
    ct(e) {
        return this.rt({
            path: void 0,
            it: !0
        })
    }
    at(e) {
        return Er(e, this.settings.methodName, this.settings.ht || !1, this.path, this.settings.lt)
    }
    contains(e) {
        return this.fieldMask.find(n => e.isPrefixOf(n)) !== void 0 || this.fieldTransforms.find(n => e.isPrefixOf(n.field)) !== void 0
    }
    et() {
        if (this.path)
            for (let e = 0; e < this.path.length; e++) this.ot(this.path.get(e))
    }
    ot(e) {
        if (e.length === 0) throw this.at("Document fields must not be empty");
        if (Vu(this.nt) && Py.test(e)) throw this.at('Document fields cannot begin and end with "__"')
    }
}
class Dy {
    constructor(e, n, s) {
        this.databaseId = e, this.ignoreUndefinedProperties = n, this.C = s || Mo(e)
    }
    ft(e, n, s, r = !1) {
        return new $o({
            nt: e,
            methodName: n,
            lt: s,
            path: Ke.emptyPath(),
            it: !1,
            ht: r
        }, this.databaseId, this.C, this.ignoreUndefinedProperties)
    }
}

function ju(t) {
    const e = t._freezeSettings(),
        n = Mo(t._databaseId);
    return new Dy(t._databaseId, !!e.ignoreUndefinedProperties, n)
}

function My(t, e, n, s, r, i = {}) {
    const o = t.ft(i.merge || i.mergeFields ? 2 : 0, e, n, r);
    qu("Data must be an object, but it was:", o, s);
    const a = Bu(s, o);
    let l, c;
    if (i.merge) l = new Ns(o.fieldMask), c = o.fieldTransforms;
    else if (i.mergeFields) {
        const u = [];
        for (const f of i.mergeFields) {
            const h = Fy(e, f, n);
            if (!o.contains(h)) throw new $(H, `Field '${h}' is specified in your field mask but missing from your input data.`);
            Uy(u, h) || u.push(h)
        }
        l = new Ns(u), c = o.fieldTransforms.filter(f => l.covers(f.field))
    } else l = null, c = o.fieldTransforms;
    return new Ny(new bt(a), l, c)
}

function Ly(t, e, n, s = !1) {
    return Uo(n, t.ft(s ? 4 : 3, e))
}

function Uo(t, e) {
    if (Hu(t = je(t))) return qu("Unsupported field value:", e, t), Bu(t, e);
    if (t instanceof Uu) return function (n, s) {
        if (!Vu(s.nt)) throw s.at(`${n._methodName}() can only be used with update() and set()`);
        if (!s.path) throw s.at(`${n._methodName}() is not currently supported inside arrays`);
        const r = n._toFieldTransform(s);
        r && s.fieldTransforms.push(r)
    }(t, e), null;
    if (t === void 0 && e.ignoreUndefinedProperties) return null;
    if (e.path && e.fieldMask.push(e.path), t instanceof Array) {
        if (e.settings.it && e.nt !== 4) throw e.at("Nested arrays are not supported");
        return function (n, s) {
            const r = [];
            let i = 0;
            for (const o of n) {
                let a = Uo(o, s.ct(i));
                a == null && (a = {
                    nullValue: "NULL_VALUE"
                }), r.push(a), i++
            }
            return {
                arrayValue: {
                    values: r
                }
            }
        }(t, e)
    }
    return function (n, s) {
        if ((n = je(n)) === null) return {
            nullValue: "NULL_VALUE"
        };
        if (typeof n == "number") return iy(s.C, n);
        if (typeof n == "boolean") return {
            booleanValue: n
        };
        if (typeof n == "string") return {
            stringValue: n
        };
        if (n instanceof Date) {
            const r = Ge.fromDate(n);
            return {
                timestampValue: Xi(s.C, r)
            }
        }
        if (n instanceof Ge) {
            const r = new Ge(n.seconds, 1e3 * Math.floor(n.nanoseconds / 1e3));
            return {
                timestampValue: Xi(s.C, r)
            }
        }
        if (n instanceof Fo) return {
            geoPointValue: {
                latitude: n.latitude,
                longitude: n.longitude
            }
        };
        if (n instanceof Kn) return {
            bytesValue: gy(s.C, n._byteString)
        };
        if (n instanceof tt) {
            const r = s.databaseId,
                i = n.firestore._databaseId;
            if (!i.isEqual(r)) throw s.at(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);
            return {
                referenceValue: Do(n.firestore._databaseId || s.databaseId, n._key.path)
            }
        }
        throw s.at(`Unsupported field value: ${Gr(n)}`)
    }(t, e)
}

function Bu(t, e) {
    const n = {};
    return function (s) {
        for (const r in s)
            if (Object.prototype.hasOwnProperty.call(s, r)) return !1;
        return !0
    }(t) ? e.path && e.path.length > 0 && e.fieldMask.push(e.path) : Jr(t, (s, r) => {
        const i = Uo(r, e.st(s));
        i != null && (n[s] = i)
    }), {
        mapValue: {
            fields: n
        }
    }
}

function Hu(t) {
    return !(typeof t != "object" || t === null || t instanceof Array || t instanceof Date || t instanceof Ge || t instanceof Fo || t instanceof Kn || t instanceof tt || t instanceof Uu)
}

function qu(t, e, n) {
    if (!Hu(n) || ! function (s) {
            return typeof s == "object" && s !== null && (Object.getPrototypeOf(s) === Object.prototype || Object.getPrototypeOf(s) === null)
        }(n)) {
        const s = Gr(n);
        throw s === "an object" ? e.at(t + " a custom object") : e.at(t + " " + s)
    }
}

function Fy(t, e, n) {
    if ((e = je(e)) instanceof Lo) return e._internalPath;
    if (typeof e == "string") return zu(t, e);
    throw Er("Field path arguments must be of type string or ", t, !1, void 0, n)
}
const $y = new RegExp("[~\\*/\\[\\]]");

function zu(t, e, n) {
    if (e.search($y) >= 0) throw Er(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`, t, !1, void 0, n);
    try {
        return new Lo(...e.split("."))._internalPath
    } catch {
        throw Er(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t, !1, void 0, n)
    }
}

function Er(t, e, n, s, r) {
    const i = s && !s.isEmpty(),
        o = r !== void 0;
    let a = `Function ${e}() called with invalid data`;
    n && (a += " (via `toFirestore()`)"), a += ". ";
    let l = "";
    return (i || o) && (l += " (found", i && (l += ` in field ${s}`), o && (l += ` in document ${r}`), l += ")"), new $(H, a + t + l)
}

function Uy(t, e) {
    return t.some(n => n.isEqual(e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vy {
    constructor(e, n, s, r, i) {
        this._firestore = e, this._userDataWriter = n, this._key = s, this._document = r, this._converter = i
    }
    get id() {
        return this._key.path.lastSegment()
    }
    get ref() {
        return new tt(this._firestore, this._converter, this._key)
    }
    exists() {
        return this._document !== null
    }
    data() {
        if (this._document) {
            if (this._converter) {
                const e = new Ku(this._firestore, this._userDataWriter, this._key, this._document, null);
                return this._converter.fromFirestore(e)
            }
            return this._userDataWriter.convertValue(this._document.data.value)
        }
    }
    get(e) {
        if (this._document) {
            const n = this._document.data.field(Wu("DocumentSnapshot.get", e));
            if (n !== null) return this._userDataWriter.convertValue(n)
        }
    }
}
class Ku extends Vy {
    data() {
        return super.data()
    }
}
class jy {
    constructor(e, n) {
        this._docs = n, this.query = e
    }
    get docs() {
        return [...this._docs]
    }
    get size() {
        return this.docs.length
    }
    get empty() {
        return this.docs.length === 0
    }
    forEach(e, n) {
        this._docs.forEach(e, n)
    }
}

function Wu(t, e) {
    return typeof e == "string" ? zu(t, e) : e instanceof Lo ? e._internalPath : e._delegate._internalPath
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo {}
class By extends Vo {}

function wi(t, e, ...n) {
    let s = [];
    e instanceof Vo && s.push(e), s = s.concat(n),
        function (r) {
            const i = r.filter(a => a instanceof jo).length,
                o = r.filter(a => a instanceof Zr).length;
            if (i > 1 || i > 0 && o > 0) throw new $(H, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")
        }(s);
    for (const r of s) t = r._apply(t);
    return t
}
class Zr extends By {
    constructor(e, n, s) {
        super(), this._field = e, this._op = n, this._value = s, this.type = "where"
    }
    static _create(e, n, s) {
        return new Zr(e, n, s)
    }
    _apply(e) {
        const n = this._parse(e);
        return Gu(e._query, n), new ts(e.firestore, e.converter, Qi(e._query, n))
    }
    _parse(e) {
        const n = ju(e.firestore);
        return function (r, i, o, a, l, c, u) {
            let f;
            if (l.isKeyField()) {
                if (c === "array-contains" || c === "array-contains-any") throw new $(H, `Invalid Query. You can't perform '${c}' queries on documentId().`);
                if (c === "in" || c === "not-in") {
                    ml(u, c);
                    const h = [];
                    for (const g of u) h.push(pl(a, r, g));
                    f = {
                        arrayValue: {
                            values: h
                        }
                    }
                } else f = pl(a, r, u)
            } else c !== "in" && c !== "not-in" && c !== "array-contains-any" || ml(u, c), f = Ly(o, i, u, c === "in" || c === "not-in");
            return ht.create(l, c, f)
        }(e._query, "where", n, e.firestore._databaseId, this._field, this._op, this._value)
    }
}

function Hy(t, e, n) {
    const s = e,
        r = Wu("where", t);
    return Zr._create(r, s, n)
}
class jo extends Vo {
    constructor(e, n) {
        super(), this.type = e, this._queryConstraints = n
    }
    static _create(e, n) {
        return new jo(e, n)
    }
    _parse(e) {
        const n = this._queryConstraints.map(s => s._parse(e)).filter(s => s.getFilters().length > 0);
        return n.length === 1 ? n[0] : js.create(n, this._getOperator())
    }
    _apply(e) {
        const n = this._parse(e);
        return n.getFilters().length === 0 ? e : (function (s, r) {
            let i = s;
            const o = r.getFlattenedFilters();
            for (const a of o) Gu(i, a), i = Qi(i, a)
        }(e._query, n), new ts(e.firestore, e.converter, Qi(e._query, n)))
    }
    _getQueryConstraints() {
        return this._queryConstraints
    }
    _getOperator() {
        return this.type === "and" ? "and" : "or"
    }
}

function pl(t, e, n) {
    if (typeof (n = je(n)) == "string") {
        if (n === "") throw new $(H, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!sy(e) && n.indexOf("/") !== -1) throw new $(H, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
        const s = e.path.child(xe.fromString(n));
        if (!Ce.isDocumentKey(s)) throw new $(H, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);
        return sl(t, new Ce(s))
    }
    if (n instanceof tt) return sl(t, n._key);
    throw new $(H, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gr(n)}.`)
}

function ml(t, e) {
    if (!Array.isArray(t) || t.length === 0) throw new $(H, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
    if (t.length > 10) throw new $(H, `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)
}

function Gu(t, e) {
    if (e.isInequality()) {
        const s = No(t),
            r = e.field;
        if (s !== null && !s.isEqual(r)) throw new $(H, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);
        const i = Nu(t);
        i !== null && qy(t, r, i)
    }
    const n = function (s, r) {
        for (const i of s)
            for (const o of i.getFlattenedFilters())
                if (r.indexOf(o.op) >= 0) return o.op;
        return null
    }(t.filters, function (s) {
        switch (s) {
            case "!=":
                return ["!=", "not-in"];
            case "array-contains":
                return ["array-contains", "array-contains-any", "not-in"];
            case "in":
                return ["array-contains-any", "in", "not-in"];
            case "array-contains-any":
                return ["array-contains", "array-contains-any", "in", "not-in"];
            case "not-in":
                return ["array-contains", "array-contains-any", "in", "not-in", "!="];
            default:
                return []
        }
    }(e.op));
    if (n !== null) throw n === e.op ? new $(H, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new $(H, `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)
}

function qy(t, e, n) {
    if (!n.isEqual(e)) throw new $(H, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zy(t, e, n) {
    let s;
    return s = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, s
}
class Ky extends class {
    convertValue(e, n = "none") {
        switch (wn(e)) {
            case 0:
                return null;
            case 1:
                return e.booleanValue;
            case 2:
                return we(e.integerValue || e.doubleValue);
            case 3:
                return this.convertTimestamp(e.timestampValue);
            case 4:
                return this.convertServerTimestamp(e, n);
            case 5:
                return e.stringValue;
            case 6:
                return this.convertBytes(Rs(e.bytesValue));
            case 7:
                return this.convertReference(e.referenceValue);
            case 8:
                return this.convertGeoPoint(e.geoPointValue);
            case 9:
                return this.convertArray(e.arrayValue, n);
            case 10:
                return this.convertObject(e.mapValue, n);
            default:
                throw ye()
        }
    }
    convertObject(e, n) {
        const s = {};
        return Jr(e.fields, (r, i) => {
            s[r] = this.convertValue(i, n)
        }), s
    }
    convertGeoPoint(e) {
        return new Fo(we(e.latitude), we(e.longitude))
    }
    convertArray(e, n) {
        return (e.values || []).map(s => this.convertValue(s, n))
    }
    convertServerTimestamp(e, n) {
        switch (n) {
            case "previous":
                const s = Au(e);
                return s == null ? null : this.convertValue(s, n);
            case "estimate":
                return this.convertTimestamp(Os(e));
            default:
                return null
        }
    }
    convertTimestamp(e) {
        const n = bn(e);
        return new Ge(n.seconds, n.nanos)
    }
    convertDocumentKey(e, n) {
        const s = xe.fromString(e);
        Pt(Fu(s));
        const r = new As(s.get(1), s.get(3)),
            i = new Ce(s.popFirst(5));
        return r.isEqual(n) || Ro(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`), i
    }
} {
    constructor(e) {
        super(), this.firestore = e
    }
    convertBytes(e) {
        return new Kn(e)
    }
    convertReference(e) {
        const n = this.convertDocumentKey(e, this.firestore._databaseId);
        return new tt(this.firestore, null, n)
    }
}

function gl(t) {
    (function (s) {
        if (s.limitType === "L" && s.explicitOrderBy.length === 0) throw new $(Iu, "limitToLast() queries require specifying at least one orderBy() clause")
    })((t = Po(t, ts))._query);
    const e = $u(t.firestore),
        n = new Ky(t.firestore);
    return Ay(e, t._query).then(s => {
        const r = s.map(i => new Ku(t.firestore, n, i.key, i, t.converter));
        return t._query.limitType === "L" && r.reverse(), new jy(t, r)
    })
}

function Wy(t, e) {
    const n = Oy(t = Po(t, Rt)),
        s = zy(t.converter, e),
        r = My(ju(t.firestore), "addDoc", n._key, s, n.converter !== null, {});
    return ky($u(t.firestore), [r.toMutation(n._key, us.exists(!1))]).then(() => n)
}(function (t) {
    es = t
})(`${Vs}_lite`), Tt(new ut("firestore/lite", (t, {
    instanceIdentifier: e,
    options: n
}) => {
    const s = t.getProvider("app").getImmediate(),
        r = new Xr(new L0(t.getProvider("auth-internal")), new V0(t.getProvider("app-check-internal")), function (i, o) {
            if (!Object.prototype.hasOwnProperty.apply(i.options, ["projectId"])) throw new $(H, '"projectId" not provided in firebase.initializeApp.');
            return new As(i.options.projectId, o)
        }(s, e), s);
    return n && r._setSettings(n), r
}, "PUBLIC").setMultipleInstances(!0)), et("firestore-lite", "3.8.0", ""), et("firestore-lite", "3.8.0", "esm2017");
var Gy = !1;
/*!
 * pinia v2.0.28
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
let Ju;
const ei = t => Ju = t,
    Yu = Symbol();

function eo(t) {
    return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function"
}
var fs;
(function (t) {
    t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function"
})(fs || (fs = {}));

function Jy() {
    const t = dc(!0),
        e = t.run(() => Ue({}));
    let n = [],
        s = [];
    const r = jn({
        install(i) {
            ei(r), r._a = i, i.provide(Yu, r), i.config.globalProperties.$pinia = r, s.forEach(o => n.push(o)), s = []
        },
        use(i) {
            return !this._a && !Gy ? s.push(i) : n.push(i), this
        },
        _p: n,
        _a: null,
        _e: t,
        _s: new Map,
        state: e
    });
    return r
}
const Qu = () => {};

function yl(t, e, n, s = Qu) {
    t.push(e);
    const r = () => {
        const i = t.indexOf(e);
        i > -1 && (t.splice(i, 1), s())
    };
    return !n && Af() && Cf(r), r
}

function Cn(t, ...e) {
    t.slice().forEach(n => {
        n(...e)
    })
}

function to(t, e) {
    t instanceof Map && e instanceof Map && e.forEach((n, s) => t.set(s, n)), t instanceof Set && e instanceof Set && e.forEach(t.add, t);
    for (const n in e) {
        if (!e.hasOwnProperty(n)) continue;
        const s = e[n],
            r = t[n];
        eo(r) && eo(s) && t.hasOwnProperty(n) && !he(s) && !Xt(s) ? t[n] = to(r, s) : t[n] = s
    }
    return t
}
const Yy = Symbol();

function Qy(t) {
    return !eo(t) || !t.hasOwnProperty(Yy)
}
const {
    assign: Bt
} = Object;

function Xy(t) {
    return !!(he(t) && t.effect)
}

function Zy(t, e, n, s) {
    const {
        state: r,
        actions: i,
        getters: o
    } = e, a = n.state.value[t];
    let l;

    function c() {
        a || (n.state.value[t] = r ? r() : {});
        const u = ih(n.state.value[t]);
        return Bt(u, i, Object.keys(o || {}).reduce((f, h) => (f[h] = jn(Ve(() => {
            ei(n);
            const g = n._s.get(t);
            return o[h].call(g, g)
        })), f), {}))
    }
    return l = Xu(t, c, e, n, s, !0), l.$reset = function () {
        const f = r ? r() : {};
        this.$patch(h => {
            Bt(h, f)
        })
    }, l
}

function Xu(t, e, n = {}, s, r, i) {
    let o;
    const a = Bt({
            actions: {}
        }, n),
        l = {
            deep: !0
        };
    let c, u, f = jn([]),
        h = jn([]),
        g;
    const w = s.state.value[t];
    !i && !w && (s.state.value[t] = {}), Ue({});
    let S;

    function F(K) {
        let O;
        c = u = !1, typeof K == "function" ? (K(s.state.value[t]), O = {
            type: fs.patchFunction,
            storeId: t,
            events: g
        }) : (to(s.state.value[t], K), O = {
            type: fs.patchObject,
            payload: K,
            storeId: t,
            events: g
        });
        const Y = S = Symbol();
        xo().then(() => {
            S === Y && (c = !0)
        }), u = !0, Cn(f, O, s.state.value[t])
    }
    const R = Qu;

    function U() {
        o.stop(), f = [], h = [], s._s.delete(t)
    }

    function P(K, O) {
        return function () {
            ei(s);
            const Y = Array.from(arguments),
                X = [],
                pe = [];

            function Ee(Te) {
                X.push(Te)
            }

            function Be(Te) {
                pe.push(Te)
            }
            Cn(h, {
                args: Y,
                name: K,
                store: W,
                after: Ee,
                onError: Be
            });
            let De;
            try {
                De = O.apply(this && this.$id === t ? this : W, Y)
            } catch (Te) {
                throw Cn(pe, Te), Te
            }
            return De instanceof Promise ? De.then(Te => (Cn(X, Te), Te)).catch(Te => (Cn(pe, Te), Promise.reject(Te))) : (Cn(X, De), De)
        }
    }
    const z = {
            _p: s,
            $id: t,
            $onAction: yl.bind(null, h),
            $patch: F,
            $reset: R,
            $subscribe(K, O = {}) {
                const Y = yl(f, K, O.detached, () => X()),
                    X = o.run(() => is(() => s.state.value[t], pe => {
                        (O.flush === "sync" ? u : c) && K({
                            storeId: t,
                            type: fs.direct,
                            events: g
                        }, pe)
                    }, Bt({}, l, O)));
                return Y
            },
            $dispose: U
        },
        W = Zn(z);
    s._s.set(t, W);
    const ae = s._e.run(() => (o = dc(), o.run(() => e())));
    for (const K in ae) {
        const O = ae[K];
        if (he(O) && !Xy(O) || Xt(O)) i || (w && Qy(O) && (he(O) ? O.value = w[K] : to(O, w[K])), s.state.value[t][K] = O);
        else if (typeof O == "function") {
            const Y = P(K, O);
            ae[K] = Y, a.actions[K] = O
        }
    }
    return Bt(W, ae), Bt(ne(W), ae), Object.defineProperty(W, "$state", {
        get: () => s.state.value[t],
        set: K => {
            F(O => {
                Bt(O, K)
            })
        }
    }), s._p.forEach(K => {
        Bt(W, o.run(() => K({
            store: W,
            app: s._a,
            pinia: s,
            options: a
        })))
    }), w && i && n.hydrate && n.hydrate(W.$state, w), c = !0, u = !0, W
}

function e_(t, e, n) {
    let s, r;
    const i = typeof e == "function";
    typeof t == "string" ? (s = t, r = i ? n : e) : (r = t, s = t.id);

    function o(a, l) {
        const c = eu();
        return a = a || c && wt(Yu, null), a && ei(a), a = Ju, a._s.has(s) || (i ? Xu(s, e, r, a) : Zy(s, r, a)), a._s.get(s)
    }
    return o.$id = s, o
}
var t_ = "firebase",
    n_ = "9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
et(t_, n_, "app");
const Zu = "@firebase/installations",
    Bo = "0.6.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ed = 1e4,
    td = `w:${Bo}`,
    nd = "FIS_v2",
    s_ = "https://firebaseinstallations.googleapis.com/v1",
    r_ = 60 * 60 * 1e3,
    i_ = "installations",
    o_ = "Installations";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a_ = {
        ["missing-app-config-values"]: 'Missing App configuration value: "{$valueName}"',
        ["not-registered"]: "Firebase Installation is not registered.",
        ["installation-not-found"]: "Firebase Installation not found.",
        ["request-failed"]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        ["app-offline"]: "Could not process request. Application offline.",
        ["delete-pending-registration"]: "Can't delete installation while there is a pending registration request."
    },
    xn = new Tn(i_, o_, a_);

function sd(t) {
    return t instanceof ft && t.code.includes("request-failed")
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rd({
    projectId: t
}) {
    return `${s_}/projects/${t}/installations`
}

function id(t) {
    return {
        token: t.token,
        requestStatus: 2,
        expiresIn: c_(t.expiresIn),
        creationTime: Date.now()
    }
}
async function od(t, e) {
    const s = (await e.json()).error;
    return xn.create("request-failed", {
        requestName: t,
        serverCode: s.code,
        serverMessage: s.message,
        serverStatus: s.status
    })
}

function ad({
    apiKey: t
}) {
    return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": t
    })
}

function l_(t, {
    refreshToken: e
}) {
    const n = ad(t);
    return n.append("Authorization", u_(e)), n
}
async function ld(t) {
    const e = await t();
    return e.status >= 500 && e.status < 600 ? t() : e
}

function c_(t) {
    return Number(t.replace("s", "000"))
}

function u_(t) {
    return `${nd} ${t}`
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function d_({
    appConfig: t,
    heartbeatServiceProvider: e
}, {
    fid: n
}) {
    const s = rd(t),
        r = ad(t),
        i = e.getImmediate({
            optional: !0
        });
    if (i) {
        const c = await i.getHeartbeatsHeader();
        c && r.append("x-firebase-client", c)
    }
    const o = {
            fid: n,
            authVersion: nd,
            appId: t.appId,
            sdkVersion: td
        },
        a = {
            method: "POST",
            headers: r,
            body: JSON.stringify(o)
        },
        l = await ld(() => fetch(s, a));
    if (l.ok) {
        const c = await l.json();
        return {
            fid: c.fid || n,
            registrationStatus: 2,
            refreshToken: c.refreshToken,
            authToken: id(c.authToken)
        }
    } else throw await od("Create Installation", l)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cd(t) {
    return new Promise(e => {
        setTimeout(e, t)
    })
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f_(t) {
    return btoa(String.fromCharCode(...t)).replace(/\+/g, "-").replace(/\//g, "_")
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h_ = /^[cdef][\w-]{21}$/,
    no = "";

function p_() {
    try {
        const t = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(t), t[0] = 112 + t[0] % 16;
        const n = m_(t);
        return h_.test(n) ? n : no
    } catch {
        return no
    }
}

function m_(t) {
    return f_(t).substr(0, 22)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ti(t) {
    return `${t.appName}!${t.appId}`
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ud = new Map;

function dd(t, e) {
    const n = ti(t);
    fd(n, e), g_(n, e)
}

function fd(t, e) {
    const n = ud.get(t);
    if (n)
        for (const s of n) s(e)
}

function g_(t, e) {
    const n = y_();
    n && n.postMessage({
        key: t,
        fid: e
    }), __()
}
let pn = null;

function y_() {
    return !pn && "BroadcastChannel" in self && (pn = new BroadcastChannel("[Firebase] FID Change"), pn.onmessage = t => {
        fd(t.data.key, t.data.fid)
    }), pn
}

function __() {
    ud.size === 0 && pn && (pn.close(), pn = null)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v_ = "firebase-installations-database",
    b_ = 1,
    In = "firebase-installations-store";
let xi = null;

function Ho() {
    return xi || (xi = _u(v_, b_, {
        upgrade: (t, e) => {
            switch (e) {
                case 0:
                    t.createObjectStore(In)
            }
        }
    })), xi
}
async function Tr(t, e) {
    const n = ti(t),
        r = (await Ho()).transaction(In, "readwrite"),
        i = r.objectStore(In),
        o = await i.get(n);
    return await i.put(e, n), await r.done, (!o || o.fid !== e.fid) && dd(t, e.fid), e
}
async function hd(t) {
    const e = ti(t),
        s = (await Ho()).transaction(In, "readwrite");
    await s.objectStore(In).delete(e), await s.done
}
async function ni(t, e) {
    const n = ti(t),
        r = (await Ho()).transaction(In, "readwrite"),
        i = r.objectStore(In),
        o = await i.get(n),
        a = e(o);
    return a === void 0 ? await i.delete(n) : await i.put(a, n), await r.done, a && (!o || o.fid !== a.fid) && dd(t, a.fid), a
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qo(t) {
    let e;
    const n = await ni(t.appConfig, s => {
        const r = w_(s),
            i = x_(t, r);
        return e = i.registrationPromise, i.installationEntry
    });
    return n.fid === no ? {
        installationEntry: await e
    } : {
        installationEntry: n,
        registrationPromise: e
    }
}

function w_(t) {
    const e = t || {
        fid: p_(),
        registrationStatus: 0
    };
    return pd(e)
}

function x_(t, e) {
    if (e.registrationStatus === 0) {
        if (!navigator.onLine) {
            const r = Promise.reject(xn.create("app-offline"));
            return {
                installationEntry: e,
                registrationPromise: r
            }
        }
        const n = {
                fid: e.fid,
                registrationStatus: 1,
                registrationTime: Date.now()
            },
            s = I_(t, n);
        return {
            installationEntry: n,
            registrationPromise: s
        }
    } else return e.registrationStatus === 1 ? {
        installationEntry: e,
        registrationPromise: E_(t)
    } : {
        installationEntry: e
    }
}
async function I_(t, e) {
    try {
        const n = await d_(t, e);
        return Tr(t.appConfig, n)
    } catch (n) {
        throw sd(n) && n.customData.serverCode === 409 ? await hd(t.appConfig) : await Tr(t.appConfig, {
            fid: e.fid,
            registrationStatus: 0
        }), n
    }
}
async function E_(t) {
    let e = await _l(t.appConfig);
    for (; e.registrationStatus === 1;) await cd(100), e = await _l(t.appConfig);
    if (e.registrationStatus === 0) {
        const {
            installationEntry: n,
            registrationPromise: s
        } = await qo(t);
        return s || n
    }
    return e
}

function _l(t) {
    return ni(t, e => {
        if (!e) throw xn.create("installation-not-found");
        return pd(e)
    })
}

function pd(t) {
    return T_(t) ? {
        fid: t.fid,
        registrationStatus: 0
    } : t
}

function T_(t) {
    return t.registrationStatus === 1 && t.registrationTime + ed < Date.now()
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function S_({
    appConfig: t,
    heartbeatServiceProvider: e
}, n) {
    const s = k_(t, n),
        r = l_(t, n),
        i = e.getImmediate({
            optional: !0
        });
    if (i) {
        const c = await i.getHeartbeatsHeader();
        c && r.append("x-firebase-client", c)
    }
    const o = {
            installation: {
                sdkVersion: td,
                appId: t.appId
            }
        },
        a = {
            method: "POST",
            headers: r,
            body: JSON.stringify(o)
        },
        l = await ld(() => fetch(s, a));
    if (l.ok) {
        const c = await l.json();
        return id(c)
    } else throw await od("Generate Auth Token", l)
}

function k_(t, {
    fid: e
}) {
    return `${rd(t)}/${e}/authTokens:generate`
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zo(t, e = !1) {
    let n;
    const s = await ni(t.appConfig, i => {
        if (!md(i)) throw xn.create("not-registered");
        const o = i.authToken;
        if (!e && R_(o)) return i;
        if (o.requestStatus === 1) return n = A_(t, e), i; {
            if (!navigator.onLine) throw xn.create("app-offline");
            const a = P_(i);
            return n = C_(t, a), a
        }
    });
    return n ? await n : s.authToken
}
async function A_(t, e) {
    let n = await vl(t.appConfig);
    for (; n.authToken.requestStatus === 1;) await cd(100), n = await vl(t.appConfig);
    const s = n.authToken;
    return s.requestStatus === 0 ? zo(t, e) : s
}

function vl(t) {
    return ni(t, e => {
        if (!md(e)) throw xn.create("not-registered");
        const n = e.authToken;
        return N_(n) ? Object.assign(Object.assign({}, e), {
            authToken: {
                requestStatus: 0
            }
        }) : e
    })
}
async function C_(t, e) {
    try {
        const n = await S_(t, e),
            s = Object.assign(Object.assign({}, e), {
                authToken: n
            });
        return await Tr(t.appConfig, s), n
    } catch (n) {
        if (sd(n) && (n.customData.serverCode === 401 || n.customData.serverCode === 404)) await hd(t.appConfig);
        else {
            const s = Object.assign(Object.assign({}, e), {
                authToken: {
                    requestStatus: 0
                }
            });
            await Tr(t.appConfig, s)
        }
        throw n
    }
}

function md(t) {
    return t !== void 0 && t.registrationStatus === 2
}

function R_(t) {
    return t.requestStatus === 2 && !O_(t)
}

function O_(t) {
    const e = Date.now();
    return e < t.creationTime || t.creationTime + t.expiresIn < e + r_
}

function P_(t) {
    const e = {
        requestStatus: 1,
        requestTime: Date.now()
    };
    return Object.assign(Object.assign({}, t), {
        authToken: e
    })
}

function N_(t) {
    return t.requestStatus === 1 && t.requestTime + ed < Date.now()
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function D_(t) {
    const e = t,
        {
            installationEntry: n,
            registrationPromise: s
        } = await qo(e);
    return s ? s.catch(console.error) : zo(e).catch(console.error), n.fid
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function M_(t, e = !1) {
    const n = t;
    return await L_(n), (await zo(n, e)).token
}
async function L_(t) {
    const {
        registrationPromise: e
    } = await qo(t);
    e && await e
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F_(t) {
    if (!t || !t.options) throw Ii("App Configuration");
    if (!t.name) throw Ii("App Name");
    const e = ["projectId", "apiKey", "appId"];
    for (const n of e)
        if (!t.options[n]) throw Ii(n);
    return {
        appName: t.name,
        projectId: t.options.projectId,
        apiKey: t.options.apiKey,
        appId: t.options.appId
    }
}

function Ii(t) {
    return xn.create("missing-app-config-values", {
        valueName: t
    })
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gd = "installations",
    $_ = "installations-internal",
    U_ = t => {
        const e = t.getProvider("app").getImmediate(),
            n = F_(e),
            s = Sn(e, "heartbeat");
        return {
            app: e,
            appConfig: n,
            heartbeatServiceProvider: s,
            _delete: () => Promise.resolve()
        }
    },
    V_ = t => {
        const e = t.getProvider("app").getImmediate(),
            n = Sn(e, gd).getImmediate();
        return {
            getId: () => D_(n),
            getToken: r => M_(n, r)
        }
    };

function j_() {
    Tt(new ut(gd, U_, "PUBLIC")), Tt(new ut($_, V_, "PRIVATE"))
}
j_();
et(Zu, Bo);
et(Zu, Bo, "esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sr = "analytics",
    B_ = "firebase_id",
    H_ = "origin",
    q_ = 60 * 1e3,
    z_ = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",
    yd = "https://www.googletagmanager.com/gtag/js";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je = new Kr("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _d(t) {
    return Promise.all(t.map(e => e.catch(n => n)))
}

function K_(t, e) {
    const n = document.createElement("script");
    n.src = `${yd}?l=${t}&id=${e}`, n.async = !0, document.head.appendChild(n)
}

function W_(t) {
    let e = [];
    return Array.isArray(window[t]) ? e = window[t] : window[t] = e, e
}
async function G_(t, e, n, s, r, i) {
    const o = s[r];
    try {
        if (o) await e[o];
        else {
            const l = (await _d(n)).find(c => c.measurementId === r);
            l && await e[l.appId]
        }
    } catch (a) {
        Je.error(a)
    }
    t("config", r, i)
}
async function J_(t, e, n, s, r) {
    try {
        let i = [];
        if (r && r.send_to) {
            let o = r.send_to;
            Array.isArray(o) || (o = [o]);
            const a = await _d(n);
            for (const l of o) {
                const c = a.find(f => f.measurementId === l),
                    u = c && e[c.appId];
                if (u) i.push(u);
                else {
                    i = [];
                    break
                }
            }
        }
        i.length === 0 && (i = Object.values(e)), await Promise.all(i), t("event", s, r || {})
    } catch (i) {
        Je.error(i)
    }
}

function Y_(t, e, n, s) {
    async function r(i, o, a) {
        try {
            i === "event" ? await J_(t, e, n, o, a) : i === "config" ? await G_(t, e, n, s, o, a) : i === "consent" ? t("consent", "update", a) : t("set", o)
        } catch (l) {
            Je.error(l)
        }
    }
    return r
}

function Q_(t, e, n, s, r) {
    let i = function (...o) {
        window[s].push(arguments)
    };
    return window[r] && typeof window[r] == "function" && (i = window[r]), window[r] = Y_(i, t, e, n), {
        gtagCore: i,
        wrappedGtag: window[r]
    }
}

function X_(t) {
    const e = window.document.getElementsByTagName("script");
    for (const n of Object.values(e))
        if (n.src && n.src.includes(yd) && n.src.includes(t)) return n;
    return null
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z_ = {
        ["already-exists"]: "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
        ["already-initialized"]: "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
        ["already-initialized-settings"]: "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
        ["interop-component-reg-failed"]: "Firebase Analytics Interop Component failed to instantiate: {$reason}",
        ["invalid-analytics-context"]: "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
        ["indexeddb-unavailable"]: "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
        ["fetch-throttle"]: "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
        ["config-fetch-failed"]: "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
        ["no-api-key"]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
        ["no-app-id"]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'
    },
    nt = new Tn("analytics", "Analytics", Z_);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ev = 30,
    tv = 1e3;
class nv {
    constructor(e = {}, n = tv) {
        this.throttleMetadata = e, this.intervalMillis = n
    }
    getThrottleMetadata(e) {
        return this.throttleMetadata[e]
    }
    setThrottleMetadata(e, n) {
        this.throttleMetadata[e] = n
    }
    deleteThrottleMetadata(e) {
        delete this.throttleMetadata[e]
    }
}
const vd = new nv;

function sv(t) {
    return new Headers({
        Accept: "application/json",
        "x-goog-api-key": t
    })
}
async function rv(t) {
    var e;
    const {
        appId: n,
        apiKey: s
    } = t, r = {
        method: "GET",
        headers: sv(s)
    }, i = z_.replace("{app-id}", n), o = await fetch(i, r);
    if (o.status !== 200 && o.status !== 304) {
        let a = "";
        try {
            const l = await o.json();
            !((e = l.error) === null || e === void 0) && e.message && (a = l.error.message)
        } catch {}
        throw nt.create("config-fetch-failed", {
            httpStatus: o.status,
            responseMessage: a
        })
    }
    return o.json()
}
async function iv(t, e = vd, n) {
    const {
        appId: s,
        apiKey: r,
        measurementId: i
    } = t.options;
    if (!s) throw nt.create("no-app-id");
    if (!r) {
        if (i) return {
            measurementId: i,
            appId: s
        };
        throw nt.create("no-api-key")
    }
    const o = e.getThrottleMetadata(s) || {
            backoffCount: 0,
            throttleEndTimeMillis: Date.now()
        },
        a = new lv;
    return setTimeout(async () => {
        a.abort()
    }, n !== void 0 ? n : q_), bd({
        appId: s,
        apiKey: r,
        measurementId: i
    }, o, a, e)
}
async function bd(t, {
    throttleEndTimeMillis: e,
    backoffCount: n
}, s, r = vd) {
    var i;
    const {
        appId: o,
        measurementId: a
    } = t;
    try {
        await ov(s, e)
    } catch (l) {
        if (a) return Je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`), {
            appId: o,
            measurementId: a
        };
        throw l
    }
    try {
        const l = await rv(t);
        return r.deleteThrottleMetadata(o), l
    } catch (l) {
        const c = l;
        if (!av(c)) {
            if (r.deleteThrottleMetadata(o), a) return Je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`), {
                appId: o,
                measurementId: a
            };
            throw l
        }
        const u = Number((i = c == null ? void 0 : c.customData) === null || i === void 0 ? void 0 : i.httpStatus) === 503 ? Ba(n, r.intervalMillis, ev) : Ba(n, r.intervalMillis),
            f = {
                throttleEndTimeMillis: Date.now() + u,
                backoffCount: n + 1
            };
        return r.setThrottleMetadata(o, f), Je.debug(`Calling attemptFetch again in ${u} millis`), bd(t, f, s, r)
    }
}

function ov(t, e) {
    return new Promise((n, s) => {
        const r = Math.max(e - Date.now(), 0),
            i = setTimeout(n, r);
        t.addEventListener(() => {
            clearTimeout(i), s(nt.create("fetch-throttle", {
                throttleEndTimeMillis: e
            }))
        })
    })
}

function av(t) {
    if (!(t instanceof ft) || !t.customData) return !1;
    const e = Number(t.customData.httpStatus);
    return e === 429 || e === 500 || e === 503 || e === 504
}
class lv {
    constructor() {
        this.listeners = []
    }
    addEventListener(e) {
        this.listeners.push(e)
    }
    abort() {
        this.listeners.forEach(e => e())
    }
}
async function cv(t, e, n, s, r) {
    if (r && r.global) {
        t("event", n, s);
        return
    } else {
        const i = await e,
            o = Object.assign(Object.assign({}, s), {
                send_to: i
            });
        t("event", n, o)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function uv() {
    if (fu()) try {
        await hu()
    } catch (t) {
        return Je.warn(nt.create("indexeddb-unavailable", {
            errorInfo: t == null ? void 0 : t.toString()
        }).message), !1
    } else return Je.warn(nt.create("indexeddb-unavailable", {
        errorInfo: "IndexedDB is not available in this environment."
    }).message), !1;
    return !0
}
async function dv(t, e, n, s, r, i, o) {
    var a;
    const l = iv(t);
    l.then(g => {
        n[g.measurementId] = g.appId, t.options.measurementId && g.measurementId !== t.options.measurementId && Je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
    }).catch(g => Je.error(g)), e.push(l);
    const c = uv().then(g => {
            if (g) return s.getId()
        }),
        [u, f] = await Promise.all([l, c]);
    X_(i) || K_(i, u.measurementId), r("js", new Date);
    const h = (a = o == null ? void 0 : o.config) !== null && a !== void 0 ? a : {};
    return h[H_] = "firebase", h.update = !0, f != null && (h[B_] = f), r("config", u.measurementId, h), u.measurementId
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fv {
    constructor(e) {
        this.app = e
    }
    _delete() {
        return delete hs[this.app.options.appId], Promise.resolve()
    }
}
let hs = {},
    bl = [];
const wl = {};
let Ei = "dataLayer",
    hv = "gtag",
    xl, wd, Il = !1;

function pv() {
    const t = [];
    if (du() && t.push("This is a browser extension environment."), tg() || t.push("Cookies are not available."), t.length > 0) {
        const e = t.map((s, r) => `(${r+1}) ${s}`).join(" "),
            n = nt.create("invalid-analytics-context", {
                errorInfo: e
            });
        Je.warn(n.message)
    }
}

function mv(t, e, n) {
    pv();
    const s = t.options.appId;
    if (!s) throw nt.create("no-app-id");
    if (!t.options.apiKey)
        if (t.options.measurementId) Je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
        else throw nt.create("no-api-key");
    if (hs[s] != null) throw nt.create("already-exists", {
        id: s
    });
    if (!Il) {
        W_(Ei);
        const {
            wrappedGtag: i,
            gtagCore: o
        } = Q_(hs, bl, wl, Ei, hv);
        wd = i, xl = o, Il = !0
    }
    return hs[s] = dv(t, bl, wl, e, xl, Ei, n), new fv(t)
}

function gv(t = Co()) {
    t = je(t);
    const e = Sn(t, Sr);
    return e.isInitialized() ? e.getImmediate() : yv(t)
}

function yv(t, e = {}) {
    const n = Sn(t, Sr);
    if (n.isInitialized()) {
        const r = n.getImmediate();
        if (Ss(e, n.getOptions())) return r;
        throw nt.create("already-initialized")
    }
    return n.initialize({
        options: e
    })
}

function _v(t, e, n, s) {
    t = je(t), cv(wd, hs[t.app.options.appId], e, n, s).catch(r => Je.error(r))
}
const El = "@firebase/analytics",
    Tl = "0.9.0";

function vv() {
    Tt(new ut(Sr, (e, {
        options: n
    }) => {
        const s = e.getProvider("app").getImmediate(),
            r = e.getProvider("installations-internal").getImmediate();
        return mv(s, r, n)
    }, "PUBLIC")), Tt(new ut("analytics-internal", t, "PRIVATE")), et(El, Tl), et(El, Tl, "esm2017");

    function t(e) {
        try {
            const n = e.getProvider(Sr).getImmediate();
            return {
                logEvent: (s, r, i) => _v(n, s, r, i)
            }
        } catch (n) {
            throw nt.create("interop-component-reg-failed", {
                reason: n
            })
        }
    }
}
vv();

function Ko(t, e) {
    var n = {};
    for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.indexOf(s) < 0 && (n[s] = t[s]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, s = Object.getOwnPropertySymbols(t); r < s.length; r++) e.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[r]) && (n[s[r]] = t[s[r]]);
    return n
}

function xd() {
    return {
        ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    }
}
const bv = xd,
    Id = new Tn("auth", "Firebase", xd());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sl = new Kr("@firebase/auth");

function lr(t, ...e) {
    Sl.logLevel <= re.ERROR && Sl.error(`Auth (${Vs}): ${t}`, ...e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dt(t, ...e) {
    throw Wo(t, ...e)
}

function xt(t, ...e) {
    return Wo(t, ...e)
}

function wv(t, e, n) {
    const s = Object.assign(Object.assign({}, bv()), {
        [e]: n
    });
    return new Tn("auth", "Firebase", s).create(e, {
        appName: t.name
    })
}

function Wo(t, ...e) {
    if (typeof t != "string") {
        const n = e[0],
            s = [...e.slice(1)];
        return s[0] && (s[0].appName = t.name), t._errorFactory.create(n, ...s)
    }
    return Id.create(t, ...e)
}

function j(t, e, ...n) {
    if (!t) throw Wo(e, ...n)
}

function At(t) {
    const e = "INTERNAL ASSERTION FAILED: " + t;
    throw lr(e), new Error(e)
}

function Mt(t, e) {
    t || At(e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kl = new Map;

function Ct(t) {
    Mt(t instanceof Function, "Expected a class definition");
    let e = kl.get(t);
    return e ? (Mt(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t, kl.set(t, e), e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xv(t, e) {
    const n = Sn(t, "auth");
    if (n.isInitialized()) {
        const r = n.getImmediate(),
            i = n.getOptions();
        if (Ss(i, e ?? {})) return r;
        Dt(r, "already-initialized")
    }
    return n.initialize({
        options: e
    })
}

function Iv(t, e) {
    const n = (e == null ? void 0 : e.persistence) || [],
        s = (Array.isArray(n) ? n : [n]).map(Ct);
    e != null && e.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(s, e == null ? void 0 : e.popupRedirectResolver)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function so() {
    var t;
    return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.href) || ""
}

function Ev() {
    return Al() === "http:" || Al() === "https:"
}

function Al() {
    var t;
    return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.protocol) || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tv() {
    return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && (Ev() || du() || "connection" in navigator) ? navigator.onLine : !0
}

function Sv() {
    if (typeof navigator > "u") return null;
    const t = navigator;
    return t.languages && t.languages[0] || t.language || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bs {
    constructor(e, n) {
        this.shortDelay = e, this.longDelay = n, Mt(n > e, "Short delay should be less than long delay!"), this.isMobile = Xm() || Zm()
    }
    get() {
        return Tv() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Go(t, e) {
    Mt(t.emulator, "Emulator should always be set here");
    const {
        url: n
    } = t.emulator;
    return e ? `${n}${e.startsWith("/")?e.slice(1):e}` : n
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ed {
    static initialize(e, n, s) {
        this.fetchImpl = e, n && (this.headersImpl = n), s && (this.responseImpl = s)
    }
    static fetch() {
        if (this.fetchImpl) return this.fetchImpl;
        if (typeof self < "u" && "fetch" in self) return self.fetch;
        At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static headers() {
        if (this.headersImpl) return this.headersImpl;
        if (typeof self < "u" && "Headers" in self) return self.Headers;
        At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static response() {
        if (this.responseImpl) return this.responseImpl;
        if (typeof self < "u" && "Response" in self) return self.Response;
        At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kv = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "internal-error",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error"
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Av = new Bs(3e4, 6e4);

function Cv(t, e) {
    return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), {
        tenantId: t.tenantId
    }) : e
}
async function si(t, e, n, s, r = {}) {
    return Td(t, r, async () => {
        let i = {},
            o = {};
        s && (e === "GET" ? o = s : i = {
            body: JSON.stringify(s)
        });
        const a = Us(Object.assign({
                key: t.config.apiKey
            }, o)).slice(1),
            l = await t._getAdditionalHeaders();
        return l["Content-Type"] = "application/json", t.languageCode && (l["X-Firebase-Locale"] = t.languageCode), Ed.fetch()(Sd(t, t.config.apiHost, n, a), Object.assign({
            method: e,
            headers: l,
            referrerPolicy: "no-referrer"
        }, i))
    })
}
async function Td(t, e, n) {
    t._canInitEmulator = !1;
    const s = Object.assign(Object.assign({}, kv), e);
    try {
        const r = new Ov(t),
            i = await Promise.race([n(), r.promise]);
        r.clearNetworkTimeout();
        const o = await i.json();
        if ("needConfirmation" in o) throw er(t, "account-exists-with-different-credential", o);
        if (i.ok && !("errorMessage" in o)) return o; {
            const a = i.ok ? o.errorMessage : o.error.message,
                [l, c] = a.split(" : ");
            if (l === "FEDERATED_USER_ID_ALREADY_LINKED") throw er(t, "credential-already-in-use", o);
            if (l === "EMAIL_EXISTS") throw er(t, "email-already-in-use", o);
            if (l === "USER_DISABLED") throw er(t, "user-disabled", o);
            const u = s[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
            if (c) throw wv(t, u, c);
            Dt(t, u)
        }
    } catch (r) {
        if (r instanceof ft) throw r;
        Dt(t, "network-request-failed")
    }
}
async function Rv(t, e, n, s, r = {}) {
    const i = await si(t, e, n, s, r);
    return "mfaPendingCredential" in i && Dt(t, "multi-factor-auth-required", {
        _serverResponse: i
    }), i
}

function Sd(t, e, n, s) {
    const r = `${e}${n}?${s}`;
    return t.config.emulator ? Go(t.config, r) : `${t.config.apiScheme}://${r}`
}
class Ov {
    constructor(e) {
        this.auth = e, this.timer = null, this.promise = new Promise((n, s) => {
            this.timer = setTimeout(() => s(xt(this.auth, "network-request-failed")), Av.get())
        })
    }
    clearNetworkTimeout() {
        clearTimeout(this.timer)
    }
}

function er(t, e, n) {
    const s = {
        appName: t.name
    };
    n.email && (s.email = n.email), n.phoneNumber && (s.phoneNumber = n.phoneNumber);
    const r = xt(t, e, s);
    return r.customData._tokenResponse = n, r
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pv(t, e) {
    return si(t, "POST", "/v1/accounts:delete", e)
}
async function Nv(t, e) {
    return si(t, "POST", "/v1/accounts:lookup", e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ps(t) {
    if (t) try {
        const e = new Date(Number(t));
        if (!isNaN(e.getTime())) return e.toUTCString()
    } catch {}
}
async function Dv(t, e = !1) {
    const n = je(t),
        s = await n.getIdToken(e),
        r = Jo(s);
    j(r && r.exp && r.auth_time && r.iat, n.auth, "internal-error");
    const i = typeof r.firebase == "object" ? r.firebase : void 0,
        o = i == null ? void 0 : i.sign_in_provider;
    return {
        claims: r,
        token: s,
        authTime: ps(Ti(r.auth_time)),
        issuedAtTime: ps(Ti(r.iat)),
        expirationTime: ps(Ti(r.exp)),
        signInProvider: o || null,
        signInSecondFactor: (i == null ? void 0 : i.sign_in_second_factor) || null
    }
}

function Ti(t) {
    return Number(t) * 1e3
}

function Jo(t) {
    const [e, n, s] = t.split(".");
    if (e === void 0 || n === void 0 || s === void 0) return lr("JWT malformed, contained fewer than 3 sections"), null;
    try {
        const r = uu(n);
        return r ? JSON.parse(r) : (lr("Failed to decode base64 JWT payload"), null)
    } catch (r) {
        return lr("Caught error parsing JWT payload as JSON", r == null ? void 0 : r.toString()), null
    }
}

function Mv(t) {
    const e = Jo(t);
    return j(e, "internal-error"), j(typeof e.exp < "u", "internal-error"), j(typeof e.iat < "u", "internal-error"), Number(e.exp) - Number(e.iat)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ds(t, e, n = !1) {
    if (n) return e;
    try {
        return await e
    } catch (s) {
        throw s instanceof ft && Lv(s) && t.auth.currentUser === t && await t.auth.signOut(), s
    }
}

function Lv({
    code: t
}) {
    return t === "auth/user-disabled" || t === "auth/user-token-expired"
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fv {
    constructor(e) {
        this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
    }
    _start() {
        this.isRunning || (this.isRunning = !0, this.schedule())
    }
    _stop() {
        this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId))
    }
    getInterval(e) {
        var n;
        if (e) {
            const s = this.errorBackoff;
            return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4), s
        } else {
            this.errorBackoff = 3e4;
            const r = ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0 ? n : 0) - Date.now() - 3e5;
            return Math.max(0, r)
        }
    }
    schedule(e = !1) {
        if (!this.isRunning) return;
        const n = this.getInterval(e);
        this.timerId = setTimeout(async () => {
            await this.iteration()
        }, n)
    }
    async iteration() {
        try {
            await this.user.getIdToken(!0)
        } catch (e) {
            (e == null ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(!0);
            return
        }
        this.schedule()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kd {
    constructor(e, n) {
        this.createdAt = e, this.lastLoginAt = n, this._initializeTime()
    }
    _initializeTime() {
        this.lastSignInTime = ps(this.lastLoginAt), this.creationTime = ps(this.createdAt)
    }
    _copy(e) {
        this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime()
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        }
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kr(t) {
    var e;
    const n = t.auth,
        s = await t.getIdToken(),
        r = await Ds(t, Nv(n, {
            idToken: s
        }));
    j(r == null ? void 0 : r.users.length, n, "internal-error");
    const i = r.users[0];
    t._notifyReloadListener(i);
    const o = !((e = i.providerUserInfo) === null || e === void 0) && e.length ? Vv(i.providerUserInfo) : [],
        a = Uv(t.providerData, o),
        l = t.isAnonymous,
        c = !(t.email && i.passwordHash) && !(a != null && a.length),
        u = l ? c : !1,
        f = {
            uid: i.localId,
            displayName: i.displayName || null,
            photoURL: i.photoUrl || null,
            email: i.email || null,
            emailVerified: i.emailVerified || !1,
            phoneNumber: i.phoneNumber || null,
            tenantId: i.tenantId || null,
            providerData: a,
            metadata: new kd(i.createdAt, i.lastLoginAt),
            isAnonymous: u
        };
    Object.assign(t, f)
}
async function $v(t) {
    const e = je(t);
    await kr(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e)
}

function Uv(t, e) {
    return [...t.filter(s => !e.some(r => r.providerId === s.providerId)), ...e]
}

function Vv(t) {
    return t.map(e => {
        var {
            providerId: n
        } = e, s = Ko(e, ["providerId"]);
        return {
            providerId: n,
            uid: s.rawId || "",
            displayName: s.displayName || null,
            email: s.email || null,
            phoneNumber: s.phoneNumber || null,
            photoURL: s.photoUrl || null
        }
    })
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function jv(t, e) {
    const n = await Td(t, {}, async () => {
        const s = Us({
                grant_type: "refresh_token",
                refresh_token: e
            }).slice(1),
            {
                tokenApiHost: r,
                apiKey: i
            } = t.config,
            o = Sd(t, r, "/v1/token", `key=${i}`),
            a = await t._getAdditionalHeaders();
        return a["Content-Type"] = "application/x-www-form-urlencoded", Ed.fetch()(o, {
            method: "POST",
            headers: a,
            body: s
        })
    });
    return {
        accessToken: n.access_token,
        expiresIn: n.expires_in,
        refreshToken: n.refresh_token
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms {
    constructor() {
        this.refreshToken = null, this.accessToken = null, this.expirationTime = null
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(e) {
        j(e.idToken, "internal-error"), j(typeof e.idToken < "u", "internal-error"), j(typeof e.refreshToken < "u", "internal-error");
        const n = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Mv(e.idToken);
        this.updateTokensAndExpiration(e.idToken, e.refreshToken, n)
    }
    async getToken(e, n = !1) {
        return j(!this.accessToken || this.refreshToken, e, "user-token-expired"), !n && this.accessToken && !this.isExpired ? this.accessToken : this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null
    }
    clearRefreshToken() {
        this.refreshToken = null
    }
    async refresh(e, n) {
        const {
            accessToken: s,
            refreshToken: r,
            expiresIn: i
        } = await jv(e, n);
        this.updateTokensAndExpiration(s, r, Number(i))
    }
    updateTokensAndExpiration(e, n, s) {
        this.refreshToken = n || null, this.accessToken = e || null, this.expirationTime = Date.now() + s * 1e3
    }
    static fromJSON(e, n) {
        const {
            refreshToken: s,
            accessToken: r,
            expirationTime: i
        } = n, o = new Ms;
        return s && (j(typeof s == "string", "internal-error", {
            appName: e
        }), o.refreshToken = s), r && (j(typeof r == "string", "internal-error", {
            appName: e
        }), o.accessToken = r), i && (j(typeof i == "number", "internal-error", {
            appName: e
        }), o.expirationTime = i), o
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        }
    }
    _assign(e) {
        this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime
    }
    _clone() {
        return Object.assign(new Ms, this.toJSON())
    }
    _performRefresh() {
        return At("not implemented")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $t(t, e) {
    j(typeof t == "string" || typeof t > "u", "internal-error", {
        appName: e
    })
}
class _n {
    constructor(e) {
        var {
            uid: n,
            auth: s,
            stsTokenManager: r
        } = e, i = Ko(e, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase", this.proactiveRefresh = new Fv(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = n, this.auth = s, this.stsTokenManager = r, this.accessToken = r.accessToken, this.displayName = i.displayName || null, this.email = i.email || null, this.emailVerified = i.emailVerified || !1, this.phoneNumber = i.phoneNumber || null, this.photoURL = i.photoURL || null, this.isAnonymous = i.isAnonymous || !1, this.tenantId = i.tenantId || null, this.providerData = i.providerData ? [...i.providerData] : [], this.metadata = new kd(i.createdAt || void 0, i.lastLoginAt || void 0)
    }
    async getIdToken(e) {
        const n = await Ds(this, this.stsTokenManager.getToken(this.auth, e));
        return j(n, this.auth, "internal-error"), this.accessToken !== n && (this.accessToken = n, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), n
    }
    getIdTokenResult(e) {
        return Dv(this, e)
    }
    reload() {
        return $v(this)
    }
    _assign(e) {
        this !== e && (j(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map(n => Object.assign({}, n)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
    }
    _clone(e) {
        return new _n(Object.assign(Object.assign({}, this), {
            auth: e,
            stsTokenManager: this.stsTokenManager._clone()
        }))
    }
    _onReload(e) {
        j(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
    }
    _notifyReloadListener(e) {
        this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(e, n = !1) {
        let s = !1;
        e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), s = !0), n && await kr(this), await this.auth._persistUserIfCurrent(this), s && this.auth._notifyListenersIfCurrent(this)
    }
    async delete() {
        const e = await this.getIdToken();
        return await Ds(this, Pv(this.auth, {
            idToken: e
        })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
    }
    toJSON() {
        return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map(e => Object.assign({}, e)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        })
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
    }
    static _fromJSON(e, n) {
        var s, r, i, o, a, l, c, u;
        const f = (s = n.displayName) !== null && s !== void 0 ? s : void 0,
            h = (r = n.email) !== null && r !== void 0 ? r : void 0,
            g = (i = n.phoneNumber) !== null && i !== void 0 ? i : void 0,
            w = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
            S = (a = n.tenantId) !== null && a !== void 0 ? a : void 0,
            F = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
            R = (c = n.createdAt) !== null && c !== void 0 ? c : void 0,
            U = (u = n.lastLoginAt) !== null && u !== void 0 ? u : void 0,
            {
                uid: P,
                emailVerified: z,
                isAnonymous: W,
                providerData: ae,
                stsTokenManager: K
            } = n;
        j(P && K, e, "internal-error");
        const O = Ms.fromJSON(this.name, K);
        j(typeof P == "string", e, "internal-error"), $t(f, e.name), $t(h, e.name), j(typeof z == "boolean", e, "internal-error"), j(typeof W == "boolean", e, "internal-error"), $t(g, e.name), $t(w, e.name), $t(S, e.name), $t(F, e.name), $t(R, e.name), $t(U, e.name);
        const Y = new _n({
            uid: P,
            auth: e,
            email: h,
            emailVerified: z,
            displayName: f,
            isAnonymous: W,
            photoURL: w,
            phoneNumber: g,
            tenantId: S,
            stsTokenManager: O,
            createdAt: R,
            lastLoginAt: U
        });
        return ae && Array.isArray(ae) && (Y.providerData = ae.map(X => Object.assign({}, X))), F && (Y._redirectEventId = F), Y
    }
    static async _fromIdTokenResponse(e, n, s = !1) {
        const r = new Ms;
        r.updateFromServerResponse(n);
        const i = new _n({
            uid: n.localId,
            auth: e,
            stsTokenManager: r,
            isAnonymous: s
        });
        return await kr(i), i
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ad {
    constructor() {
        this.type = "NONE", this.storage = {}
    }
    async _isAvailable() {
        return !0
    }
    async _set(e, n) {
        this.storage[e] = n
    }
    async _get(e) {
        const n = this.storage[e];
        return n === void 0 ? null : n
    }
    async _remove(e) {
        delete this.storage[e]
    }
    _addListener(e, n) {}
    _removeListener(e, n) {}
}
Ad.type = "NONE";
const Cl = Ad;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cr(t, e, n) {
    return `firebase:${t}:${e}:${n}`
}
class Fn {
    constructor(e, n, s) {
        this.persistence = e, this.auth = n, this.userKey = s;
        const {
            config: r,
            name: i
        } = this.auth;
        this.fullUserKey = cr(this.userKey, r.apiKey, i), this.fullPersistenceKey = cr("persistence", r.apiKey, i), this.boundEventHandler = n._onStorageEvent.bind(n), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
    }
    setCurrentUser(e) {
        return this.persistence._set(this.fullUserKey, e.toJSON())
    }
    async getCurrentUser() {
        const e = await this.persistence._get(this.fullUserKey);
        return e ? _n._fromJSON(this.auth, e) : null
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(e) {
        if (this.persistence === e) return;
        const n = await this.getCurrentUser();
        if (await this.removeCurrentUser(), this.persistence = e, n) return this.setCurrentUser(n)
    }
    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }
    static async create(e, n, s = "authUser") {
        if (!n.length) return new Fn(Ct(Cl), e, s);
        const r = (await Promise.all(n.map(async c => {
            if (await c._isAvailable()) return c
        }))).filter(c => c);
        let i = r[0] || Ct(Cl);
        const o = cr(s, e.config.apiKey, e.name);
        let a = null;
        for (const c of n) try {
            const u = await c._get(o);
            if (u) {
                const f = _n._fromJSON(e, u);
                c !== i && (a = f), i = c;
                break
            }
        } catch {}
        const l = r.filter(c => c._shouldAllowMigration);
        return !i._shouldAllowMigration || !l.length ? new Fn(i, e, s) : (i = l[0], a && await i._set(o, a.toJSON()), await Promise.all(n.map(async c => {
            if (c !== i) try {
                await c._remove(o)
            } catch {}
        })), new Fn(i, e, s))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rl(t) {
    const e = t.toLowerCase();
    if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/")) return "Opera";
    if (Od(e)) return "IEMobile";
    if (e.includes("msie") || e.includes("trident/")) return "IE";
    if (e.includes("edge/")) return "Edge";
    if (Cd(e)) return "Firefox";
    if (e.includes("silk/")) return "Silk";
    if (Nd(e)) return "Blackberry";
    if (Dd(e)) return "Webos";
    if (Yo(e)) return "Safari";
    if ((e.includes("chrome/") || Rd(e)) && !e.includes("edge/")) return "Chrome";
    if (Pd(e)) return "Android"; {
        const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
            s = t.match(n);
        if ((s == null ? void 0 : s.length) === 2) return s[1]
    }
    return "Other"
}

function Cd(t = Ne()) {
    return /firefox\//i.test(t)
}

function Yo(t = Ne()) {
    const e = t.toLowerCase();
    return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android")
}

function Rd(t = Ne()) {
    return /crios\//i.test(t)
}

function Od(t = Ne()) {
    return /iemobile/i.test(t)
}

function Pd(t = Ne()) {
    return /android/i.test(t)
}

function Nd(t = Ne()) {
    return /blackberry/i.test(t)
}

function Dd(t = Ne()) {
    return /webos/i.test(t)
}

function ri(t = Ne()) {
    return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t)
}

function Bv(t = Ne()) {
    var e;
    return ri(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
}

function Hv() {
    return eg() && document.documentMode === 10
}

function Md(t = Ne()) {
    return ri(t) || Pd(t) || Dd(t) || Nd(t) || /windows phone/i.test(t) || Od(t)
}

function qv() {
    try {
        return !!(window && window !== window.top)
    } catch {
        return !1
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ld(t, e = []) {
    let n;
    switch (t) {
        case "Browser":
            n = Rl(Ne());
            break;
        case "Worker":
            n = `${Rl(Ne())}-${t}`;
            break;
        default:
            n = t
    }
    const s = e.length ? e.join(",") : "FirebaseCore-web";
    return `${n}/JsCore/${Vs}/${s}`
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zv {
    constructor(e) {
        this.auth = e, this.queue = []
    }
    pushCallback(e, n) {
        const s = i => new Promise((o, a) => {
            try {
                const l = e(i);
                o(l)
            } catch (l) {
                a(l)
            }
        });
        s.onAbort = n, this.queue.push(s);
        const r = this.queue.length - 1;
        return () => {
            this.queue[r] = () => Promise.resolve()
        }
    }
    async runMiddleware(e) {
        if (this.auth.currentUser === e) return;
        const n = [];
        try {
            for (const s of this.queue) await s(e), s.onAbort && n.push(s.onAbort)
        } catch (s) {
            n.reverse();
            for (const r of n) try {
                r()
            } catch {}
            throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: s == null ? void 0 : s.message
            })
        }
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kv {
    constructor(e, n, s) {
        this.app = e, this.heartbeatServiceProvider = n, this.config = s, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Ol(this), this.idTokenSubscription = new Ol(this), this.beforeStateQueue = new zv(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Id, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
            appVerificationDisabledForTesting: !1
        }, this.frameworks = [], this.name = e.name, this.clientVersion = s.sdkClientVersion
    }
    _initializeWithPersistence(e, n) {
        return n && (this._popupRedirectResolver = Ct(n)), this._initializationPromise = this.queue(async () => {
            var s, r;
            if (!this._deleted && (this.persistenceManager = await Fn.create(this, e), !this._deleted)) {
                if (!((s = this._popupRedirectResolver) === null || s === void 0) && s._shouldInitProactively) try {
                    await this._popupRedirectResolver._initialize(this)
                } catch {}
                await this.initializeCurrentUser(n), this.lastNotifiedUid = ((r = this.currentUser) === null || r === void 0 ? void 0 : r.uid) || null, !this._deleted && (this._isInitialized = !0)
            }
        }), this._initializationPromise
    }
    async _onStorageEvent() {
        if (this._deleted) return;
        const e = await this.assertedPersistence.getCurrentUser();
        if (!(!this.currentUser && !e)) {
            if (this.currentUser && e && this.currentUser.uid === e.uid) {
                this._currentUser._assign(e), await this.currentUser.getIdToken();
                return
            }
            await this._updateCurrentUser(e, !0)
        }
    }
    async initializeCurrentUser(e) {
        var n;
        const s = await this.assertedPersistence.getCurrentUser();
        let r = s,
            i = !1;
        if (e && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const o = (n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId,
                a = r == null ? void 0 : r._redirectEventId,
                l = await this.tryRedirectSignIn(e);
            (!o || o === a) && (l != null && l.user) && (r = l.user, i = !0)
        }
        if (!r) return this.directlySetCurrentUser(null);
        if (!r._redirectEventId) {
            if (i) try {
                await this.beforeStateQueue.runMiddleware(r)
            } catch (o) {
                r = s, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(o))
            }
            return r ? this.reloadAndSetCurrentUserOrClear(r) : this.directlySetCurrentUser(null)
        }
        return j(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === r._redirectEventId ? this.directlySetCurrentUser(r) : this.reloadAndSetCurrentUserOrClear(r)
    }
    async tryRedirectSignIn(e) {
        let n = null;
        try {
            n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
        } catch {
            await this._setRedirectUser(null)
        }
        return n
    }
    async reloadAndSetCurrentUserOrClear(e) {
        try {
            await kr(e)
        } catch (n) {
            if ((n == null ? void 0 : n.code) !== "auth/network-request-failed") return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(e)
    }
    useDeviceLanguage() {
        this.languageCode = Sv()
    }
    async _delete() {
        this._deleted = !0
    }
    async updateCurrentUser(e) {
        const n = e ? je(e) : null;
        return n && j(n.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(n && n._clone(this))
    }
    async _updateCurrentUser(e, n = !1) {
        if (!this._deleted) return e && j(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), n || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
            await this.directlySetCurrentUser(e), this.notifyAuthListeners()
        })
    }
    async signOut() {
        return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
    }
    setPersistence(e) {
        return this.queue(async () => {
            await this.assertedPersistence.setPersistence(Ct(e))
        })
    }
    _getPersistence() {
        return this.assertedPersistence.persistence.type
    }
    _updateErrorMap(e) {
        this._errorFactory = new Tn("auth", "Firebase", e())
    }
    onAuthStateChanged(e, n, s) {
        return this.registerStateListener(this.authStateSubscription, e, n, s)
    }
    beforeAuthStateChanged(e, n) {
        return this.beforeStateQueue.pushCallback(e, n)
    }
    onIdTokenChanged(e, n, s) {
        return this.registerStateListener(this.idTokenSubscription, e, n, s)
    }
    toJSON() {
        var e;
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
        }
    }
    async _setRedirectUser(e, n) {
        const s = await this.getOrInitRedirectPersistenceManager(n);
        return e === null ? s.removeCurrentUser() : s.setCurrentUser(e)
    }
    async getOrInitRedirectPersistenceManager(e) {
        if (!this.redirectPersistenceManager) {
            const n = e && Ct(e) || this._popupRedirectResolver;
            j(n, this, "argument-error"), this.redirectPersistenceManager = await Fn.create(this, [Ct(n._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
    }
    async _redirectUserForId(e) {
        var n, s;
        return this._isInitialized && await this.queue(async () => {}), ((n = this._currentUser) === null || n === void 0 ? void 0 : n._redirectEventId) === e ? this._currentUser : ((s = this.redirectUser) === null || s === void 0 ? void 0 : s._redirectEventId) === e ? this.redirectUser : null
    }
    async _persistUserIfCurrent(e) {
        if (e === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(e))
    }
    _notifyListenersIfCurrent(e) {
        e === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
    }
    get _currentUser() {
        return this.currentUser
    }
    notifyAuthListeners() {
        var e, n;
        if (!this._isInitialized) return;
        this.idTokenSubscription.next(this.currentUser);
        const s = (n = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && n !== void 0 ? n : null;
        this.lastNotifiedUid !== s && (this.lastNotifiedUid = s, this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(e, n, s, r) {
        if (this._deleted) return () => {};
        const i = typeof n == "function" ? n : n.next.bind(n),
            o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        return j(o, this, "internal-error"), o.then(() => i(this.currentUser)), typeof n == "function" ? e.addObserver(n, s, r) : e.addObserver(n)
    }
    async directlySetCurrentUser(e) {
        this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
    }
    queue(e) {
        return this.operations = this.operations.then(e, e), this.operations
    }
    get assertedPersistence() {
        return j(this.persistenceManager, this, "internal-error"), this.persistenceManager
    }
    _logFramework(e) {
        !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = Ld(this.config.clientPlatform, this._getFrameworks()))
    }
    _getFrameworks() {
        return this.frameworks
    }
    async _getAdditionalHeaders() {
        var e;
        const n = {
            ["X-Client-Version"]: this.clientVersion
        };
        this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
        const s = await ((e = this.heartbeatServiceProvider.getImmediate({
            optional: !0
        })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
        return s && (n["X-Firebase-Client"] = s), n
    }
}

function Qo(t) {
    return je(t)
}
class Ol {
    constructor(e) {
        this.auth = e, this.observer = null, this.addObserver = pg(n => this.observer = n)
    }
    get next() {
        return j(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
    }
}

function Wv(t, e, n) {
    const s = Qo(t);
    j(s._canInitEmulator, s, "emulator-config-failed"), j(/^https?:\/\//.test(e), s, "invalid-emulator-scheme");
    const r = !!(n != null && n.disableWarnings),
        i = Fd(e),
        {
            host: o,
            port: a
        } = Gv(e),
        l = a === null ? "" : `:${a}`;
    s.config.emulator = {
        url: `${i}//${o}${l}/`
    }, s.settings.appVerificationDisabledForTesting = !0, s.emulatorConfig = Object.freeze({
        host: o,
        port: a,
        protocol: i.replace(":", ""),
        options: Object.freeze({
            disableWarnings: r
        })
    }), r || Jv()
}

function Fd(t) {
    const e = t.indexOf(":");
    return e < 0 ? "" : t.substr(0, e + 1)
}

function Gv(t) {
    const e = Fd(t),
        n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
    if (!n) return {
        host: "",
        port: null
    };
    const s = n[2].split("@").pop() || "",
        r = /^(\[[^\]]+\])(:|$)/.exec(s);
    if (r) {
        const i = r[1];
        return {
            host: i,
            port: Pl(s.substr(i.length + 1))
        }
    } else {
        const [i, o] = s.split(":");
        return {
            host: i,
            port: Pl(o)
        }
    }
}

function Pl(t) {
    if (!t) return null;
    const e = Number(t);
    return isNaN(e) ? null : e
}

function Jv() {
    function t() {
        const e = document.createElement("p"),
            n = e.style;
        e.innerText = "Running in emulator mode. Do not use with production credentials.", n.position = "fixed", n.width = "100%", n.backgroundColor = "#ffffff", n.border = ".1em solid #000000", n.color = "#b50000", n.bottom = "0px", n.left = "0px", n.margin = "0px", n.zIndex = "10000", n.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e)
    }
    typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", t) : t())
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $d {
    constructor(e, n) {
        this.providerId = e, this.signInMethod = n
    }
    toJSON() {
        return At("not implemented")
    }
    _getIdTokenResponse(e) {
        return At("not implemented")
    }
    _linkToIdToken(e, n) {
        return At("not implemented")
    }
    _getReauthenticationResolver(e) {
        return At("not implemented")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $n(t, e) {
    return Rv(t, "POST", "/v1/accounts:signInWithIdp", Cv(t, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yv = "http://localhost";
class En extends $d {
    constructor() {
        super(...arguments), this.pendingToken = null
    }
    static _fromParams(e) {
        const n = new En(e.providerId, e.signInMethod);
        return e.idToken || e.accessToken ? (e.idToken && (n.idToken = e.idToken), e.accessToken && (n.accessToken = e.accessToken), e.nonce && !e.pendingToken && (n.nonce = e.nonce), e.pendingToken && (n.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (n.accessToken = e.oauthToken, n.secret = e.oauthTokenSecret) : Dt("argument-error"), n
    }
    toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        }
    }
    static fromJSON(e) {
        const n = typeof e == "string" ? JSON.parse(e) : e,
            {
                providerId: s,
                signInMethod: r
            } = n,
            i = Ko(n, ["providerId", "signInMethod"]);
        if (!s || !r) return null;
        const o = new En(s, r);
        return o.idToken = i.idToken || void 0, o.accessToken = i.accessToken || void 0, o.secret = i.secret, o.nonce = i.nonce, o.pendingToken = i.pendingToken || null, o
    }
    _getIdTokenResponse(e) {
        const n = this.buildRequest();
        return $n(e, n)
    }
    _linkToIdToken(e, n) {
        const s = this.buildRequest();
        return s.idToken = n, $n(e, s)
    }
    _getReauthenticationResolver(e) {
        const n = this.buildRequest();
        return n.autoCreate = !1, $n(e, n)
    }
    buildRequest() {
        const e = {
            requestUri: Yv,
            returnSecureToken: !0
        };
        if (this.pendingToken) e.pendingToken = this.pendingToken;
        else {
            const n = {};
            this.idToken && (n.id_token = this.idToken), this.accessToken && (n.access_token = this.accessToken), this.secret && (n.oauth_token_secret = this.secret), n.providerId = this.providerId, this.nonce && !this.pendingToken && (n.nonce = this.nonce), e.postBody = Us(n)
        }
        return e
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ud {
    constructor(e) {
        this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}
    }
    setDefaultLanguage(e) {
        this.defaultLanguageCode = e
    }
    setCustomParameters(e) {
        return this.customParameters = e, this
    }
    getCustomParameters() {
        return this.customParameters
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs extends Ud {
    constructor() {
        super(...arguments), this.scopes = []
    }
    addScope(e) {
        return this.scopes.includes(e) || this.scopes.push(e), this
    }
    getScopes() {
        return [...this.scopes]
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends Hs {
    constructor() {
        super("facebook.com")
    }
    static credential(e) {
        return En._fromParams({
            providerId: Kt.PROVIDER_ID,
            signInMethod: Kt.FACEBOOK_SIGN_IN_METHOD,
            accessToken: e
        })
    }
    static credentialFromResult(e) {
        return Kt.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return Kt.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
        try {
            return Kt.credential(e.oauthAccessToken)
        } catch {
            return null
        }
    }
}
Kt.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Kt.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt extends Hs {
    constructor() {
        super("google.com"), this.addScope("profile")
    }
    static credential(e, n) {
        return En._fromParams({
            providerId: Wt.PROVIDER_ID,
            signInMethod: Wt.GOOGLE_SIGN_IN_METHOD,
            idToken: e,
            accessToken: n
        })
    }
    static credentialFromResult(e) {
        return Wt.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return Wt.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e) return null;
        const {
            oauthIdToken: n,
            oauthAccessToken: s
        } = e;
        if (!n && !s) return null;
        try {
            return Wt.credential(n, s)
        } catch {
            return null
        }
    }
}
Wt.GOOGLE_SIGN_IN_METHOD = "google.com";
Wt.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt extends Hs {
    constructor() {
        super("github.com")
    }
    static credential(e) {
        return En._fromParams({
            providerId: Gt.PROVIDER_ID,
            signInMethod: Gt.GITHUB_SIGN_IN_METHOD,
            accessToken: e
        })
    }
    static credentialFromResult(e) {
        return Gt.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return Gt.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
        try {
            return Gt.credential(e.oauthAccessToken)
        } catch {
            return null
        }
    }
}
Gt.GITHUB_SIGN_IN_METHOD = "github.com";
Gt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Hs {
    constructor() {
        super("twitter.com")
    }
    static credential(e, n) {
        return En._fromParams({
            providerId: Jt.PROVIDER_ID,
            signInMethod: Jt.TWITTER_SIGN_IN_METHOD,
            oauthToken: e,
            oauthTokenSecret: n
        })
    }
    static credentialFromResult(e) {
        return Jt.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return Jt.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e) return null;
        const {
            oauthAccessToken: n,
            oauthTokenSecret: s
        } = e;
        if (!n || !s) return null;
        try {
            return Jt.credential(n, s)
        } catch {
            return null
        }
    }
}
Jt.TWITTER_SIGN_IN_METHOD = "twitter.com";
Jt.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wn {
    constructor(e) {
        this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType
    }
    static async _fromIdTokenResponse(e, n, s, r = !1) {
        const i = await _n._fromIdTokenResponse(e, s, r),
            o = Nl(s);
        return new Wn({
            user: i,
            providerId: o,
            _tokenResponse: s,
            operationType: n
        })
    }
    static async _forOperation(e, n, s) {
        await e._updateTokensIfNecessary(s, !0);
        const r = Nl(s);
        return new Wn({
            user: e,
            providerId: r,
            _tokenResponse: s,
            operationType: n
        })
    }
}

function Nl(t) {
    return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar extends ft {
    constructor(e, n, s, r) {
        var i;
        super(n.code, n.message), this.operationType = s, this.user = r, Object.setPrototypeOf(this, Ar.prototype), this.customData = {
            appName: e.name,
            tenantId: (i = e.tenantId) !== null && i !== void 0 ? i : void 0,
            _serverResponse: n.customData._serverResponse,
            operationType: s
        }
    }
    static _fromErrorAndOperation(e, n, s, r) {
        return new Ar(e, n, s, r)
    }
}

function Vd(t, e, n, s) {
    return (e === "reauthenticate" ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)).catch(i => {
        throw i.code === "auth/multi-factor-auth-required" ? Ar._fromErrorAndOperation(t, i, e, s) : i
    })
}
async function Qv(t, e, n = !1) {
    const s = await Ds(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
    return Wn._forOperation(t, "link", s)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xv(t, e, n = !1) {
    const {
        auth: s
    } = t, r = "reauthenticate";
    try {
        const i = await Ds(t, Vd(s, r, e, t), n);
        j(i.idToken, s, "internal-error");
        const o = Jo(i.idToken);
        j(o, s, "internal-error");
        const {
            sub: a
        } = o;
        return j(t.uid === a, s, "user-mismatch"), Wn._forOperation(t, r, i)
    } catch (i) {
        throw (i == null ? void 0 : i.code) === "auth/user-not-found" && Dt(s, "user-mismatch"), i
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Zv(t, e, n = !1) {
    const s = "signIn",
        r = await Vd(t, s, e),
        i = await Wn._fromIdTokenResponse(t, s, r);
    return n || await t._updateCurrentUser(i.user), i
}

function eb(t, e, n, s) {
    return je(t).onIdTokenChanged(e, n, s)
}

function tb(t, e, n) {
    return je(t).beforeAuthStateChanged(e, n)
}
const Cr = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jd {
    constructor(e, n) {
        this.storageRetriever = e, this.type = n
    }
    _isAvailable() {
        try {
            return this.storage ? (this.storage.setItem(Cr, "1"), this.storage.removeItem(Cr), Promise.resolve(!0)) : Promise.resolve(!1)
        } catch {
            return Promise.resolve(!1)
        }
    }
    _set(e, n) {
        return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve()
    }
    _get(e) {
        const n = this.storage.getItem(e);
        return Promise.resolve(n ? JSON.parse(n) : null)
    }
    _remove(e) {
        return this.storage.removeItem(e), Promise.resolve()
    }
    get storage() {
        return this.storageRetriever()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nb() {
    const t = Ne();
    return Yo(t) || ri(t)
}
const sb = 1e3,
    rb = 10;
class Bd extends jd {
    constructor() {
        super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (e, n) => this.onStorageEvent(e, n), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = nb() && qv(), this.fallbackToPolling = Md(), this._shouldAllowMigration = !0
    }
    forAllChangedKeys(e) {
        for (const n of Object.keys(this.listeners)) {
            const s = this.storage.getItem(n),
                r = this.localCache[n];
            s !== r && e(n, r, s)
        }
    }
    onStorageEvent(e, n = !1) {
        if (!e.key) {
            this.forAllChangedKeys((o, a, l) => {
                this.notifyListeners(o, l)
            });
            return
        }
        const s = e.key;
        if (n ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
            const o = this.storage.getItem(s);
            if (e.newValue !== o) e.newValue !== null ? this.storage.setItem(s, e.newValue) : this.storage.removeItem(s);
            else if (this.localCache[s] === e.newValue && !n) return
        }
        const r = () => {
                const o = this.storage.getItem(s);
                !n && this.localCache[s] === o || this.notifyListeners(s, o)
            },
            i = this.storage.getItem(s);
        Hv() && i !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, rb) : r()
    }
    notifyListeners(e, n) {
        this.localCache[e] = n;
        const s = this.listeners[e];
        if (s)
            for (const r of Array.from(s)) r(n && JSON.parse(n))
    }
    startPolling() {
        this.stopPolling(), this.pollTimer = setInterval(() => {
            this.forAllChangedKeys((e, n, s) => {
                this.onStorageEvent(new StorageEvent("storage", {
                    key: e,
                    oldValue: n,
                    newValue: s
                }), !0)
            })
        }, sb)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
    }
    attachListener() {
        window.addEventListener("storage", this.boundEventHandler)
    }
    detachListener() {
        window.removeEventListener("storage", this.boundEventHandler)
    }
    _addListener(e, n) {
        Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(n)
    }
    _removeListener(e, n) {
        this.listeners[e] && (this.listeners[e].delete(n), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling())
    }
    async _set(e, n) {
        await super._set(e, n), this.localCache[e] = JSON.stringify(n)
    }
    async _get(e) {
        const n = await super._get(e);
        return this.localCache[e] = JSON.stringify(n), n
    }
    async _remove(e) {
        await super._remove(e), delete this.localCache[e]
    }
}
Bd.type = "LOCAL";
const ib = Bd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hd extends jd {
    constructor() {
        super(() => window.sessionStorage, "SESSION")
    }
    _addListener(e, n) {}
    _removeListener(e, n) {}
}
Hd.type = "SESSION";
const qd = Hd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ob(t) {
    return Promise.all(t.map(async e => {
        try {
            return {
                fulfilled: !0,
                value: await e
            }
        } catch (n) {
            return {
                fulfilled: !1,
                reason: n
            }
        }
    }))
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii {
    constructor(e) {
        this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
    }
    static _getInstance(e) {
        const n = this.receivers.find(r => r.isListeningto(e));
        if (n) return n;
        const s = new ii(e);
        return this.receivers.push(s), s
    }
    isListeningto(e) {
        return this.eventTarget === e
    }
    async handleEvent(e) {
        const n = e,
            {
                eventId: s,
                eventType: r,
                data: i
            } = n.data,
            o = this.handlersMap[r];
        if (!(o != null && o.size)) return;
        n.ports[0].postMessage({
            status: "ack",
            eventId: s,
            eventType: r
        });
        const a = Array.from(o).map(async c => c(n.origin, i)),
            l = await ob(a);
        n.ports[0].postMessage({
            status: "done",
            eventId: s,
            eventType: r,
            response: l
        })
    }
    _subscribe(e, n) {
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(n)
    }
    _unsubscribe(e, n) {
        this.handlersMap[e] && n && this.handlersMap[e].delete(n), (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler)
    }
}
ii.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xo(t = "", e = 10) {
    let n = "";
    for (let s = 0; s < e; s++) n += Math.floor(Math.random() * 10);
    return t + n
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ab {
    constructor(e) {
        this.target = e, this.handlers = new Set
    }
    removeMessageHandler(e) {
        e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e)
    }
    async _send(e, n, s = 50) {
        const r = typeof MessageChannel < "u" ? new MessageChannel : null;
        if (!r) throw new Error("connection_unavailable");
        let i, o;
        return new Promise((a, l) => {
            const c = Xo("", 20);
            r.port1.start();
            const u = setTimeout(() => {
                l(new Error("unsupported_event"))
            }, s);
            o = {
                messageChannel: r,
                onMessage(f) {
                    const h = f;
                    if (h.data.eventId === c) switch (h.data.status) {
                        case "ack":
                            clearTimeout(u), i = setTimeout(() => {
                                l(new Error("timeout"))
                            }, 3e3);
                            break;
                        case "done":
                            clearTimeout(i), a(h.data.response);
                            break;
                        default:
                            clearTimeout(u), clearTimeout(i), l(new Error("invalid_response"));
                            break
                    }
                }
            }, this.handlers.add(o), r.port1.addEventListener("message", o.onMessage), this.target.postMessage({
                eventType: e,
                eventId: c,
                data: n
            }, [r.port2])
        }).finally(() => {
            o && this.removeMessageHandler(o)
        })
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function It() {
    return window
}

function lb(t) {
    It().location.href = t
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zd() {
    return typeof It().WorkerGlobalScope < "u" && typeof It().importScripts == "function"
}
async function cb() {
    if (!(navigator != null && navigator.serviceWorker)) return null;
    try {
        return (await navigator.serviceWorker.ready).active
    } catch {
        return null
    }
}

function ub() {
    var t;
    return ((t = navigator == null ? void 0 : navigator.serviceWorker) === null || t === void 0 ? void 0 : t.controller) || null
}

function db() {
    return zd() ? self : null
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kd = "firebaseLocalStorageDb",
    fb = 1,
    Rr = "firebaseLocalStorage",
    Wd = "fbase_key";
class qs {
    constructor(e) {
        this.request = e
    }
    toPromise() {
        return new Promise((e, n) => {
            this.request.addEventListener("success", () => {
                e(this.request.result)
            }), this.request.addEventListener("error", () => {
                n(this.request.error)
            })
        })
    }
}

function oi(t, e) {
    return t.transaction([Rr], e ? "readwrite" : "readonly").objectStore(Rr)
}

function hb() {
    const t = indexedDB.deleteDatabase(Kd);
    return new qs(t).toPromise()
}

function ro() {
    const t = indexedDB.open(Kd, fb);
    return new Promise((e, n) => {
        t.addEventListener("error", () => {
            n(t.error)
        }), t.addEventListener("upgradeneeded", () => {
            const s = t.result;
            try {
                s.createObjectStore(Rr, {
                    keyPath: Wd
                })
            } catch (r) {
                n(r)
            }
        }), t.addEventListener("success", async () => {
            const s = t.result;
            s.objectStoreNames.contains(Rr) ? e(s) : (s.close(), await hb(), e(await ro()))
        })
    })
}
async function Dl(t, e, n) {
    const s = oi(t, !0).put({
        [Wd]: e,
        value: n
    });
    return new qs(s).toPromise()
}
async function pb(t, e) {
    const n = oi(t, !1).get(e),
        s = await new qs(n).toPromise();
    return s === void 0 ? null : s.value
}

function Ml(t, e) {
    const n = oi(t, !0).delete(e);
    return new qs(n).toPromise()
}
const mb = 800,
    gb = 3;
class Gd {
    constructor() {
        this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {})
    }
    async _openDb() {
        return this.db ? this.db : (this.db = await ro(), this.db)
    }
    async _withRetries(e) {
        let n = 0;
        for (;;) try {
            const s = await this._openDb();
            return await e(s)
        } catch (s) {
            if (n++ > gb) throw s;
            this.db && (this.db.close(), this.db = void 0)
        }
    }
    async initializeServiceWorkerMessaging() {
        return zd() ? this.initializeReceiver() : this.initializeSender()
    }
    async initializeReceiver() {
        this.receiver = ii._getInstance(db()), this.receiver._subscribe("keyChanged", async (e, n) => ({
            keyProcessed: (await this._poll()).includes(n.key)
        })), this.receiver._subscribe("ping", async (e, n) => ["keyChanged"])
    }
    async initializeSender() {
        var e, n;
        if (this.activeServiceWorker = await cb(), !this.activeServiceWorker) return;
        this.sender = new ab(this.activeServiceWorker);
        const s = await this.sender._send("ping", {}, 800);
        s && !((e = s[0]) === null || e === void 0) && e.fulfilled && !((n = s[0]) === null || n === void 0) && n.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0)
    }
    async notifyServiceWorker(e) {
        if (!(!this.sender || !this.activeServiceWorker || ub() !== this.activeServiceWorker)) try {
            await this.sender._send("keyChanged", {
                key: e
            }, this.serviceWorkerReceiverAvailable ? 800 : 50)
        } catch {}
    }
    async _isAvailable() {
        try {
            if (!indexedDB) return !1;
            const e = await ro();
            return await Dl(e, Cr, "1"), await Ml(e, Cr), !0
        } catch {}
        return !1
    }
    async _withPendingWrite(e) {
        this.pendingWrites++;
        try {
            await e()
        } finally {
            this.pendingWrites--
        }
    }
    async _set(e, n) {
        return this._withPendingWrite(async () => (await this._withRetries(s => Dl(s, e, n)), this.localCache[e] = n, this.notifyServiceWorker(e)))
    }
    async _get(e) {
        const n = await this._withRetries(s => pb(s, e));
        return this.localCache[e] = n, n
    }
    async _remove(e) {
        return this._withPendingWrite(async () => (await this._withRetries(n => Ml(n, e)), delete this.localCache[e], this.notifyServiceWorker(e)))
    }
    async _poll() {
        const e = await this._withRetries(r => {
            const i = oi(r, !1).getAll();
            return new qs(i).toPromise()
        });
        if (!e) return [];
        if (this.pendingWrites !== 0) return [];
        const n = [],
            s = new Set;
        for (const {
                fbase_key: r,
                value: i
            } of e) s.add(r), JSON.stringify(this.localCache[r]) !== JSON.stringify(i) && (this.notifyListeners(r, i), n.push(r));
        for (const r of Object.keys(this.localCache)) this.localCache[r] && !s.has(r) && (this.notifyListeners(r, null), n.push(r));
        return n
    }
    notifyListeners(e, n) {
        this.localCache[e] = n;
        const s = this.listeners[e];
        if (s)
            for (const r of Array.from(s)) r(n)
    }
    startPolling() {
        this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), mb)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
    }
    _addListener(e, n) {
        Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set, this._get(e)), this.listeners[e].add(n)
    }
    _removeListener(e, n) {
        this.listeners[e] && (this.listeners[e].delete(n), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling()
    }
}
Gd.type = "LOCAL";
const yb = Gd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _b() {
    var t, e;
    return (e = (t = document.getElementsByTagName("head")) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : document
}

function vb(t) {
    return new Promise((e, n) => {
        const s = document.createElement("script");
        s.setAttribute("src", t), s.onload = e, s.onerror = r => {
            const i = xt("internal-error");
            i.customData = r, n(i)
        }, s.type = "text/javascript", s.charset = "UTF-8", _b().appendChild(s)
    })
}

function bb(t) {
    return `__${t}${Math.floor(Math.random()*1e6)}`
}
new Bs(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wb(t, e) {
    return e ? Ct(e) : (j(t._popupRedirectResolver, t, "argument-error"), t._popupRedirectResolver)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zo extends $d {
    constructor(e) {
        super("custom", "custom"), this.params = e
    }
    _getIdTokenResponse(e) {
        return $n(e, this._buildIdpRequest())
    }
    _linkToIdToken(e, n) {
        return $n(e, this._buildIdpRequest(n))
    }
    _getReauthenticationResolver(e) {
        return $n(e, this._buildIdpRequest())
    }
    _buildIdpRequest(e) {
        const n = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
        };
        return e && (n.idToken = e), n
    }
}

function xb(t) {
    return Zv(t.auth, new Zo(t), t.bypassAuthState)
}

function Ib(t) {
    const {
        auth: e,
        user: n
    } = t;
    return j(n, e, "internal-error"), Xv(n, new Zo(t), t.bypassAuthState)
}
async function Eb(t) {
    const {
        auth: e,
        user: n
    } = t;
    return j(n, e, "internal-error"), Qv(n, new Zo(t), t.bypassAuthState)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jd {
    constructor(e, n, s, r, i = !1) {
        this.auth = e, this.resolver = s, this.user = r, this.bypassAuthState = i, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(n) ? n : [n]
    }
    execute() {
        return new Promise(async (e, n) => {
            this.pendingPromise = {
                resolve: e,
                reject: n
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
            } catch (s) {
                this.reject(s)
            }
        })
    }
    async onAuthEvent(e) {
        const {
            urlResponse: n,
            sessionId: s,
            postBody: r,
            tenantId: i,
            error: o,
            type: a
        } = e;
        if (o) {
            this.reject(o);
            return
        }
        const l = {
            auth: this.auth,
            requestUri: n,
            sessionId: s,
            tenantId: i || void 0,
            postBody: r || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(a)(l))
        } catch (c) {
            this.reject(c)
        }
    }
    onError(e) {
        this.reject(e)
    }
    getIdpTask(e) {
        switch (e) {
            case "signInViaPopup":
            case "signInViaRedirect":
                return xb;
            case "linkViaPopup":
            case "linkViaRedirect":
                return Eb;
            case "reauthViaPopup":
            case "reauthViaRedirect":
                return Ib;
            default:
                Dt(this.auth, "internal-error")
        }
    }
    resolve(e) {
        Mt(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp()
    }
    reject(e) {
        Mt(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp()
    }
    unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tb = new Bs(2e3, 1e4);
class Nn extends Jd {
    constructor(e, n, s, r, i) {
        super(e, n, r, i), this.provider = s, this.authWindow = null, this.pollId = null, Nn.currentPopupAction && Nn.currentPopupAction.cancel(), Nn.currentPopupAction = this
    }
    async executeNotNull() {
        const e = await this.execute();
        return j(e, this.auth, "internal-error"), e
    }
    async onExecution() {
        Mt(this.filter.length === 1, "Popup operations only handle one event");
        const e = Xo();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch(n => {
            this.reject(n)
        }), this.resolver._isIframeWebStorageSupported(this.auth, n => {
            n || this.reject(xt(this.auth, "web-storage-unsupported"))
        }), this.pollUserCancellation()
    }
    get eventId() {
        var e;
        return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null
    }
    cancel() {
        this.reject(xt(this.auth, "cancelled-popup-request"))
    }
    cleanUp() {
        this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Nn.currentPopupAction = null
    }
    pollUserCancellation() {
        const e = () => {
            var n, s;
            if (!((s = (n = this.authWindow) === null || n === void 0 ? void 0 : n.window) === null || s === void 0) && s.closed) {
                this.pollId = window.setTimeout(() => {
                    this.pollId = null, this.reject(xt(this.auth, "popup-closed-by-user"))
                }, 2e3);
                return
            }
            this.pollId = window.setTimeout(e, Tb.get())
        };
        e()
    }
}
Nn.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sb = "pendingRedirect",
    ur = new Map;
class kb extends Jd {
    constructor(e, n, s = !1) {
        super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], n, void 0, s), this.eventId = null
    }
    async execute() {
        let e = ur.get(this.auth._key());
        if (!e) {
            try {
                const s = await Ab(this.resolver, this.auth) ? await super.execute() : null;
                e = () => Promise.resolve(s)
            } catch (n) {
                e = () => Promise.reject(n)
            }
            ur.set(this.auth._key(), e)
        }
        return this.bypassAuthState || ur.set(this.auth._key(), () => Promise.resolve(null)), e()
    }
    async onAuthEvent(e) {
        if (e.type === "signInViaRedirect") return super.onAuthEvent(e);
        if (e.type === "unknown") {
            this.resolve(null);
            return
        }
        if (e.eventId) {
            const n = await this.auth._redirectUserForId(e.eventId);
            if (n) return this.user = n, super.onAuthEvent(e);
            this.resolve(null)
        }
    }
    async onExecution() {}
    cleanUp() {}
}
async function Ab(t, e) {
    const n = Ob(e),
        s = Rb(t);
    if (!await s._isAvailable()) return !1;
    const r = await s._get(n) === "true";
    return await s._remove(n), r
}

function Cb(t, e) {
    ur.set(t._key(), e)
}

function Rb(t) {
    return Ct(t._redirectPersistence)
}

function Ob(t) {
    return cr(Sb, t.config.apiKey, t.name)
}
async function Pb(t, e, n = !1) {
    const s = Qo(t),
        r = wb(s, e),
        o = await new kb(s, r, n).execute();
    return o && !n && (delete o.user._redirectEventId, await s._persistUserIfCurrent(o.user), await s._setRedirectUser(null, e)), o
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nb = 10 * 60 * 1e3;
class Db {
    constructor(e) {
        this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
    }
    registerConsumer(e) {
        this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
    }
    unregisterConsumer(e) {
        this.consumers.delete(e)
    }
    onEvent(e) {
        if (this.hasEventBeenHandled(e)) return !1;
        let n = !1;
        return this.consumers.forEach(s => {
            this.isEventForConsumer(e, s) && (n = !0, this.sendToConsumer(e, s), this.saveEventToCache(e))
        }), this.hasHandledPotentialRedirect || !Mb(e) || (this.hasHandledPotentialRedirect = !0, n || (this.queuedRedirectEvent = e, n = !0)), n
    }
    sendToConsumer(e, n) {
        var s;
        if (e.error && !Yd(e)) {
            const r = ((s = e.error.code) === null || s === void 0 ? void 0 : s.split("auth/")[1]) || "internal-error";
            n.onError(xt(this.auth, r))
        } else n.onAuthEvent(e)
    }
    isEventForConsumer(e, n) {
        const s = n.eventId === null || !!e.eventId && e.eventId === n.eventId;
        return n.filter.includes(e.type) && s
    }
    hasEventBeenHandled(e) {
        return Date.now() - this.lastProcessedEventTime >= Nb && this.cachedEventUids.clear(), this.cachedEventUids.has(Ll(e))
    }
    saveEventToCache(e) {
        this.cachedEventUids.add(Ll(e)), this.lastProcessedEventTime = Date.now()
    }
}

function Ll(t) {
    return [t.type, t.eventId, t.sessionId, t.tenantId].filter(e => e).join("-")
}

function Yd({
    type: t,
    error: e
}) {
    return t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
}

function Mb(t) {
    switch (t.type) {
        case "signInViaRedirect":
        case "linkViaRedirect":
        case "reauthViaRedirect":
            return !0;
        case "unknown":
            return Yd(t);
        default:
            return !1
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Lb(t, e = {}) {
    return si(t, "GET", "/v1/projects", e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fb = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    $b = /^https?/;
async function Ub(t) {
    if (t.config.emulator) return;
    const {
        authorizedDomains: e
    } = await Lb(t);
    for (const n of e) try {
        if (Vb(n)) return
    } catch {}
    Dt(t, "unauthorized-domain")
}

function Vb(t) {
    const e = so(),
        {
            protocol: n,
            hostname: s
        } = new URL(e);
    if (t.startsWith("chrome-extension://")) {
        const o = new URL(t);
        return o.hostname === "" && s === "" ? n === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : n === "chrome-extension:" && o.hostname === s
    }
    if (!$b.test(n)) return !1;
    if (Fb.test(t)) return s === t;
    const r = t.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(s)
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jb = new Bs(3e4, 6e4);

function Fl() {
    const t = It().___jsl;
    if (t != null && t.H) {
        for (const e of Object.keys(t.H))
            if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
                for (let n = 0; n < t.CP.length; n++) t.CP[n] = null
    }
}

function Bb(t) {
    return new Promise((e, n) => {
        var s, r, i;

        function o() {
            Fl(), gapi.load("gapi.iframes", {
                callback: () => {
                    e(gapi.iframes.getContext())
                },
                ontimeout: () => {
                    Fl(), n(xt(t, "network-request-failed"))
                },
                timeout: jb.get()
            })
        }
        if (!((r = (s = It().gapi) === null || s === void 0 ? void 0 : s.iframes) === null || r === void 0) && r.Iframe) e(gapi.iframes.getContext());
        else if (!((i = It().gapi) === null || i === void 0) && i.load) o();
        else {
            const a = bb("iframefcb");
            return It()[a] = () => {
                gapi.load ? o() : n(xt(t, "network-request-failed"))
            }, vb(`https://apis.google.com/js/api.js?onload=${a}`).catch(l => n(l))
        }
    }).catch(e => {
        throw dr = null, e
    })
}
let dr = null;

function Hb(t) {
    return dr = dr || Bb(t), dr
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qb = new Bs(5e3, 15e3),
    zb = "__/auth/iframe",
    Kb = "emulator/auth/iframe",
    Wb = {
        style: {
            position: "absolute",
            top: "-100px",
            width: "1px",
            height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
    },
    Gb = new Map([
        ["identitytoolkit.googleapis.com", "p"],
        ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
        ["test-identitytoolkit.sandbox.googleapis.com", "t"]
    ]);

function Jb(t) {
    const e = t.config;
    j(e.authDomain, t, "auth-domain-config-required");
    const n = e.emulator ? Go(e, Kb) : `https://${t.config.authDomain}/${zb}`,
        s = {
            apiKey: e.apiKey,
            appName: t.name,
            v: Vs
        },
        r = Gb.get(t.config.apiHost);
    r && (s.eid = r);
    const i = t._getFrameworks();
    return i.length && (s.fw = i.join(",")), `${n}?${Us(s).slice(1)}`
}
async function Yb(t) {
    const e = await Hb(t),
        n = It().gapi;
    return j(n, t, "internal-error"), e.open({
        where: document.body,
        url: Jb(t),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: Wb,
        dontclear: !0
    }, s => new Promise(async (r, i) => {
        await s.restyle({
            setHideOnLeave: !1
        });
        const o = xt(t, "network-request-failed"),
            a = It().setTimeout(() => {
                i(o)
            }, qb.get());

        function l() {
            It().clearTimeout(a), r(s)
        }
        s.ping(l).then(l, () => {
            i(o)
        })
    }))
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qb = {
        location: "yes",
        resizable: "yes",
        statusbar: "yes",
        toolbar: "no"
    },
    Xb = 500,
    Zb = 600,
    ew = "_blank",
    tw = "http://localhost";
class $l {
    constructor(e) {
        this.window = e, this.associatedEvent = null
    }
    close() {
        if (this.window) try {
            this.window.close()
        } catch {}
    }
}

function nw(t, e, n, s = Xb, r = Zb) {
    const i = Math.max((window.screen.availHeight - r) / 2, 0).toString(),
        o = Math.max((window.screen.availWidth - s) / 2, 0).toString();
    let a = "";
    const l = Object.assign(Object.assign({}, Qb), {
            width: s.toString(),
            height: r.toString(),
            top: i,
            left: o
        }),
        c = Ne().toLowerCase();
    n && (a = Rd(c) ? ew : n), Cd(c) && (e = e || tw, l.scrollbars = "yes");
    const u = Object.entries(l).reduce((h, [g, w]) => `${h}${g}=${w},`, "");
    if (Bv(c) && a !== "_self") return sw(e || "", a), new $l(null);
    const f = window.open(e || "", a, u);
    j(f, t, "popup-blocked");
    try {
        f.focus()
    } catch {}
    return new $l(f)
}

function sw(t, e) {
    const n = document.createElement("a");
    n.href = t, n.target = e;
    const s = document.createEvent("MouseEvent");
    s.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(s)
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rw = "__/auth/handler",
    iw = "emulator/auth/handler";

function Ul(t, e, n, s, r, i) {
    j(t.config.authDomain, t, "auth-domain-config-required"), j(t.config.apiKey, t, "invalid-api-key");
    const o = {
        apiKey: t.config.apiKey,
        appName: t.name,
        authType: n,
        redirectUrl: s,
        v: Vs,
        eventId: r
    };
    if (e instanceof Ud) {
        e.setDefaultLanguage(t.languageCode), o.providerId = e.providerId || "", hg(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
        for (const [l, c] of Object.entries(i || {})) o[l] = c
    }
    if (e instanceof Hs) {
        const l = e.getScopes().filter(c => c !== "");
        l.length > 0 && (o.scopes = l.join(","))
    }
    t.tenantId && (o.tid = t.tenantId);
    const a = o;
    for (const l of Object.keys(a)) a[l] === void 0 && delete a[l];
    return `${ow(t)}?${Us(a).slice(1)}`
}

function ow({
    config: t
}) {
    return t.emulator ? Go(t, iw) : `https://${t.authDomain}/${rw}`
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Si = "webStorageSupport";
class aw {
    constructor() {
        this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = qd, this._completeRedirectFn = Pb, this._overrideRedirectResult = Cb
    }
    async _openPopup(e, n, s, r) {
        var i;
        Mt((i = this.eventManagers[e._key()]) === null || i === void 0 ? void 0 : i.manager, "_initialize() not called before _openPopup()");
        const o = Ul(e, n, s, so(), r);
        return nw(e, o, Xo())
    }
    async _openRedirect(e, n, s, r) {
        return await this._originValidation(e), lb(Ul(e, n, s, so(), r)), new Promise(() => {})
    }
    _initialize(e) {
        const n = e._key();
        if (this.eventManagers[n]) {
            const {
                manager: r,
                promise: i
            } = this.eventManagers[n];
            return r ? Promise.resolve(r) : (Mt(i, "If manager is not set, promise should be"), i)
        }
        const s = this.initAndGetManager(e);
        return this.eventManagers[n] = {
            promise: s
        }, s.catch(() => {
            delete this.eventManagers[n]
        }), s
    }
    async initAndGetManager(e) {
        const n = await Yb(e),
            s = new Db(e);
        return n.register("authEvent", r => (j(r == null ? void 0 : r.authEvent, e, "invalid-auth-event"), {
            status: s.onEvent(r.authEvent) ? "ACK" : "ERROR"
        }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = {
            manager: s
        }, this.iframes[e._key()] = n, s
    }
    _isIframeWebStorageSupported(e, n) {
        this.iframes[e._key()].send(Si, {
            type: Si
        }, r => {
            var i;
            const o = (i = r == null ? void 0 : r[0]) === null || i === void 0 ? void 0 : i[Si];
            o !== void 0 && n(!!o), Dt(e, "internal-error")
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    }
    _originValidation(e) {
        const n = e._key();
        return this.originValidationPromises[n] || (this.originValidationPromises[n] = Ub(e)), this.originValidationPromises[n]
    }
    get _shouldInitProactively() {
        return Md() || Yo() || ri()
    }
}
const lw = aw;
var Vl = "@firebase/auth",
    jl = "0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cw {
    constructor(e) {
        this.auth = e, this.internalListeners = new Map
    }
    getUid() {
        var e;
        return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null
    }
    async getToken(e) {
        return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? {
            accessToken: await this.auth.currentUser.getIdToken(e)
        } : null
    }
    addAuthTokenListener(e) {
        if (this.assertAuthConfigured(), this.internalListeners.has(e)) return;
        const n = this.auth.onIdTokenChanged(s => {
            e((s == null ? void 0 : s.stsTokenManager.accessToken) || null)
        });
        this.internalListeners.set(e, n), this.updateProactiveRefresh()
    }
    removeAuthTokenListener(e) {
        this.assertAuthConfigured();
        const n = this.internalListeners.get(e);
        n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
        j(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }
    updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uw(t) {
    switch (t) {
        case "Node":
            return "node";
        case "ReactNative":
            return "rn";
        case "Worker":
            return "webworker";
        case "Cordova":
            return "cordova";
        default:
            return
    }
}

function dw(t) {
    Tt(new ut("auth", (e, {
        options: n
    }) => {
        const s = e.getProvider("app").getImmediate(),
            r = e.getProvider("heartbeat"),
            {
                apiKey: i,
                authDomain: o
            } = s.options;
        return ((a, l) => {
            j(i && !i.includes(":"), "invalid-api-key", {
                appName: a.name
            }), j(!(o != null && o.includes(":")), "argument-error", {
                appName: a.name
            });
            const c = {
                    apiKey: i,
                    authDomain: o,
                    clientPlatform: t,
                    apiHost: "identitytoolkit.googleapis.com",
                    tokenApiHost: "securetoken.googleapis.com",
                    apiScheme: "https",
                    sdkClientVersion: Ld(t)
                },
                u = new Kv(a, l, c);
            return Iv(u, n), u
        })(s, r)
    }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e, n, s) => {
        e.getProvider("auth-internal").initialize()
    })), Tt(new ut("auth-internal", e => {
        const n = Qo(e.getProvider("auth").getImmediate());
        return (s => new cw(s))(n)
    }, "PRIVATE").setInstantiationMode("EXPLICIT")), et(Vl, jl, uw(t)), et(Vl, jl, "esm2017")
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fw = 5 * 60,
    hw = mu("authIdTokenMaxAge") || fw;
let Bl = null;
const pw = t => async e => {
    const n = e && await e.getIdTokenResult(),
        s = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
    if (s && s > hw) return;
    const r = n == null ? void 0 : n.token;
    Bl !== r && (Bl = r, await fetch(t, {
        method: r ? "POST" : "DELETE",
        headers: r ? {
            Authorization: `Bearer ${r}`
        } : {}
    }))
};

function mw(t = Co()) {
    const e = Sn(t, "auth");
    if (e.isInitialized()) return e.getImmediate();
    const n = xv(t, {
            popupRedirectResolver: lw,
            persistence: [yb, ib, qd]
        }),
        s = mu("authTokenSyncURL");
    if (s) {
        const i = pw(s);
        tb(n, i, () => i(n.currentUser)), eb(n, o => i(o))
    }
    const r = pu("auth");
    return r && Wv(n, `http://${r}`), n
}
dw("Browser");
const gw = {
        apiKey: "AIzaSyCTd9riOM7Lbji1mBvHDQuydmNMrWFSj3g",
        authDomain: "precios-envios-odm.firebaseapp.com",
        databaseURL: "https://precios-envios-odm-default-rtdb.firebaseio.com",
        projectId: "precios-envios-odm",
        storageBucket: "precios-envios-odm.appspot.com",
        messagingSenderId: "802208494147",
        appId: "1:802208494147:web:fee055c13df4aef4045af6",
        measurementId: "G-LTMJMJLXRQ"
    },
    yw = vu(gw);
mw();
const ki = Cy();
gv(yw);
const Qd = e_("database", {
        state: () => ({
            documents: [],
            destinos: []
        }),
        actions: {
            async getDocuments(t) {
                this.documents = [];
                const e = wi(bi(ki, t));
                (await gl(e)).forEach(s => {
                    this.documents.push(s.data())
                })
            },
            async getDocumentByKey(t, e, n) {
                const s = wi(bi(ki, t), Hy(e, "==", n)),
                    r = await gl(s);
                console.log(r), r.forEach(i => {
                    this.destinos = i.data().destinos
                })
            },
            async addUrl(t, e, n, s, r, i) {
                this.loadingDoc = !0;
                try {
                    const o = {
                            nombre: t,
                            telefono: e,
                            empresa: n,
                            ciudad: s,
                            email: r,
                            selectedOption: i
                        },
                        a = wi(bi(ki, "contacts")),
                        l = await Wy(a, o);
                    this.documents.push({
                        id: l.id,
                        ...o
                    })
                } catch (o) {
                    console.log(o)
                } finally {
                    this.loadingDoc = !1
                }
            }
        }
    }),
    _w = "assets/Persona-91599647.png",
    vw = {
        class: "w-full"
    },
    bw = m("h1", {
        class: "text-4xl font-black capitalize ml-5 sm:ml-24 pt-14 pb-5"
    }, " TARIFAS PREFERENCIALES ", -1),
    ww = m("h2", {
        class: "text-3xl font-extrabold capitalize sm:ml-32 ml-8"
    }, " Para impulsar tu negocio ", -1),
    xw = {
        class: "relative flex items-top justify-center mt-0 bg-white dark:bg-white sm:items-center sm:pt-0"
    },
    Iw = {
        class: "max-w-6xl mx-auto sm:px-6 lg:px-8 pb-10"
    },
    Ew = {
        class: "mt-0 overflow-hidden"
    },
    Tw = {
        class: "grid grid-cols-1 md:grid-cols-2"
    },
    Sw = ["onSubmit"],
    kw = {
        class: "flex flex-col"
    },
    Aw = m("label", {
        for: "name",
        class: "hidden"
    }, "Nombre completo", -1),
    Cw = {
        class: "flex flex-col"
    },
    Rw = m("label", {
        for: "name",
        class: "hidden"
    }, "Teléfono", -1),
    Ow = {
        class: "flex flex-col"
    },
    Pw = m("label", {
        for: "name",
        class: "hidden"
    }, "Nombre de tu empresa", -1),
    Nw = {
        class: "flex flex-col"
    },
    Dw = m("label", {
        for: "name",
        class: "hidden"
    }, "Ciudad", -1),
    Mw = {
        class: "flex flex-col"
    },
    Lw = m("label", {
        for: "name",
        class: "hidden"
    }, "Correo electrónico", -1),
    Fw = {
        class: "flex flex-col mt-5 space-y-5 ml-5"
    },
    $w = {
        class: "inline-flex items-center"
    },
    Uw = m("span", {
        class: "ml-2"
    }, "20 a 50 envíos mensuales", -1),
    Vw = {
        class: "inline-flex items-center"
    },
    jw = m("span", {
        class: "ml-2"
    }, "Más de 50 envíos mensuales", -1),
    Bw = {
        class: "pt-5 sm:pt-5 sm:flex sm:justify-center"
    },
    Hw = {
        key: 0,
        class: "overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    },
    qw = {
        class: "relative w-auto my-6 mx-auto max-w-3xl"
    },
    zw = {
        class: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
    },
    Kw = m("div", {
        class: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
    }, [m("h3", {
        class: "text-3xl font-semibold"
    }, "¡EXCELENTE!")], -1),
    Ww = m("div", {
        class: "relative p-6 flex-auto"
    }, [m("p", {
        class: "my-4 text-slate-500 text-lg leading-relaxed"
    }, [Yt(" Hemos recibido tu información. "), m("br"), Yt(" En breve nos comunicaremos contigo. ")])], -1),
    Gw = {
        class: "flex items-center justify-end p-6 bg-[#003368]border-t border-solid border-slate-200 rounded-b"
    },
    Jw = qr('<div class="bg-white sm:rounded-lg ml-2 sm:ml-32 order-first sm:order-last"><div class="flex items-center mt-8 text-gray-600 dark:text-gray-400"><img src="' + _w + '" class="sm:w-auto h-48 pl-28 sm:h-72 sm:pl-28" alt="Persona"></div><div class="flex items-center mt-8 text-gray-600 dark:text-gray-400 px-5"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-blue-900"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><a href="https://www.google.com/maps/place/Omnibus+de+Mexico/@19.5076497,-99.1495358,19.26z/data=!4m9!1m2!2m1!1sodm!3m5!1s0x85d1f83442ec5435:0x34b308b875da2b9!8m2!3d19.5078091!4d-99.1493576!16s%2Fg%2F1tcyftcs" target="_blank" class="ml-4 text-md tracking-wide font-semibold w-80"> Av Central 56, Nueva Industrial Vallejo, Gustavo A. Madero, 07700 Ciudad de México, CDMX </a></div><div class="flex items-center mt-4 text-gray-600 dark:text-gray-400 px-5"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-blue-900"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><a href="tel:+525551414300" class="ml-4 text-md tracking-wide font-semibold w-40"> 55-51-41-43-00 </a></div><div class="flex items-center mt-2 text-gray-600 dark:text-gray-400 px-5"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-blue-900"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><a href="mailto:desarrollowebodm@gmail.com?subject=Nuevo Cliente Potencial" class="ml-4 text-md tracking-wide font-semibold w-40"> desarrollowebodm@gmail.com </a></div></div>', 1),
    Xd = {
        __name: "Formulario",
        setup(t) {
            const e = Qd(),
                n = Ue(!1),
                s = () => {
                    this.url && this.telefono && this.empresa && this.ciudad && this.email && this.selectedOption && (this.showModal = !this.showModal)
                },
                r = () => {
                    n.value = !1
                },
                i = Ue(""),
                o = Ue(""),
                a = Ue(""),
                l = Ue(""),
                c = Ue(""),
                u = Ue(""),
                f = () => {
                    if (!i.value || !o.value || !a.value || !l.value || !c.value) {
                        alert("Por favor llena todos los campos");
                        return
                    }
                    e.addUrl(i.value, o.value, a.value, l.value, c.value, u.value), fetch("http://localhost:5000/sendEmail", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            url: i.value,
                            telefono: o.value,
                            empresa: a.value,
                            ciudad: l.value,
                            email: c.value,
                            selectedOption: u.value
                        })
                    }).then(h => h.text()).then(h => {
                        console.log(h), alert(h)
                    }).catch(h => {
                        console.log(h), alert("An error occurred while sending the email.")
                    }), console.log("FORMULARIO"), i.value = "", o.value = "", a.value = "", l.value = "", c.value = "", u.value = ""
                };
            return (h, g) => (me(), _e("div", vw, [bw, ww, m("div", xw, [m("div", Iw, [m("div", Ew, [m("div", Tw, [m("form", {
                class: "p-6 flex flex-col justify-center sm:gap-y-1",
                onSubmit: Vp(f, ["prevent"])
            }, [m("div", kw, [Aw, Xe(m("input", {
                type: "text",
                placeholder: "Nombre completo",
                class: "w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none",
                "onUpdate:modelValue": g[0] || (g[0] = w => i.value = w)
            }, null, 512), [
                [zt, i.value]
            ])]), m("div", Cw, [Rw, Xe(m("input", {
                type: "number",
                placeholder: "Teléfono",
                class: "w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none",
                "onUpdate:modelValue": g[1] || (g[1] = w => o.value = w)
            }, null, 512), [
                [zt, o.value]
            ])]), m("div", Ow, [Pw, Xe(m("input", {
                type: "text",
                placeholder: "Nombre de tu empresa",
                class: "w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none",
                "onUpdate:modelValue": g[2] || (g[2] = w => a.value = w)
            }, null, 512), [
                [zt, a.value]
            ])]), m("div", Nw, [Dw, Xe(m("input", {
                type: "text",
                placeholder: "Ciudad",
                class: "w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none",
                "onUpdate:modelValue": g[3] || (g[3] = w => l.value = w)
            }, null, 512), [
                [zt, l.value]
            ])]), m("div", Mw, [Lw, Xe(m("input", {
                type: "email",
                placeholder: "Correo electrónico",
                class: "w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none",
                "onUpdate:modelValue": g[4] || (g[4] = w => c.value = w)
            }, null, 512), [
                [zt, c.value]
            ])]), m("div", Fw, [m("label", $w, [Xe(m("input", {
                type: "radio",
                class: "form-radio w-7 h-7 sm:w-6 sm:h-6",
                "onUpdate:modelValue": g[5] || (g[5] = w => u.value = w),
                value: "20 a 50 envíos mensuales",
                name: "option"
            }, null, 512), [
                [La, u.value]
            ]), Uw]), m("label", Vw, [Xe(m("input", {
                type: "radio",
                class: "form-radio w-7 h-7 sm:w-6 sm:h-6",
                "onUpdate:modelValue": g[6] || (g[6] = w => u.value = w),
                value: "más de 50 envíos mensuales",
                name: "option"
            }, null, 512), [
                [La, u.value]
            ]), jw])]), m("div", Bw, [m("button", {
                class: "bg-[#003368] h-20 sm:h-20 hover:bg-blue-600 text-white text-xl sm:text-2xl font-extrabold py-2 px-14 sm:py-2 sm:px-18",
                type: "submit",
                onClick: g[7] || (g[7] = w => s())
            }, " SOLICITAR TARIFA PREFERENTE ")]), n.value ? (me(), _e("div", Hw, [m("div", qw, [m("div", zw, [Kw, Ww, m("div", Gw, [m("button", {
                class: "text-white bg-[#003368] border border-solid border-white hover:bg-blue-900 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                type: "button",
                onClick: g[8] || (g[8] = w => r())
            }, " OK ")])])])])) : yt("", !0)], 40, Sw), Jw])])])])]))
        }
    },
    Yw = {
        id: "envios",
        class: "flex flex-col w-full lg:px-52 md:px-0 sm:lg:px-0 px-0 my-auto"
    },
    Qw = {
        id: "cobertura",
        class: "flex flex-col w-full sm:w-full px-3 lg:px-52 md:px-0 sm:lg:px-0 my-auto"
    },
    Xw = m("h1", {
        class: "text-4xl font-black capitalize ml-5 sm:ml-24 pt-16 pb-5 sm:pt-15 sm:pb-5"
    }, " COBERTURA DE ENVÍOS ", -1),
    Zw = m("h2", {
        class: "text-2xl font-regular ml-5 sm:ml-28 pb-8"
    }, " Selecciona la ciudad desde donde envías tu paquete y el destino. ", -1),
    ex = {
        class: "mx-auto"
    },
    tx = {
        class: "flex flex-wrap justify-center pt-0 pb-5 sm:pb-8 sm:space-x-40"
    },
    nx = {
        class: "w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0"
    },
    sx = m("option", null, "¿Dónde dejar tus paquetes?", -1),
    rx = ["value"],
    ix = {
        class: "mt-4 flex items-center"
    },
    ox = m("svg", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
        viewBox: "0 0 24 24",
        class: "text-blue-900 mr-4 w-16 h-16 sm:w-30 sm:h-30"
    }, [m("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    }), m("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
        d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    })], -1),
    ax = m("h2", {
        class: "text-2xl sm:text-4xl font-bold"
    }, "Dirección", -1),
    lx = m("h3", {
        class: "text-gray-500 text-xl sm:text-2xl"
    }, "De:", -1),
    cx = {
        key: 0,
        class: "text-xl sm:text-3xl text-[#003386]"
    },
    ux = {
        class: "w-full md:w-1/2 lg:w-1/3 px-4 mb-0 md:mb-0"
    },
    dx = m("option", {
        value: ""
    }, "¿Dónde recoger tus paquetes?", -1),
    fx = ["value"],
    hx = {
        class: "mt-4 flex items-center"
    },
    px = m("svg", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
        viewBox: "0 0 24 24",
        class: "text-blue-900 mr-4 w-16 h-16 sm:w-30 sm:h-30"
    }, [m("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    }), m("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
        d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    })], -1),
    mx = m("h2", {
        class: "text-2xl sm:text-4xl font-bold"
    }, "Dirección", -1),
    gx = m("h3", {
        class: "text-gray-500 text-xl sm:text-2xl"
    }, "A:", -1),
    yx = {
        key: 0,
        class: "text-xl sm:text-3xl text-[#003386]"
    },
    _x = {
        class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 sm:gap-3 place-items-center px-auto sm:px-fixed mx-0 sm:mx-20"
    },
    vx = {
        key: 0,
        class: "bg-gray-800 p-4 rounded-lg text-center w-full sm:w-1/2"
    },
    bx = m("p", {
        class: "font-extrabold text-2xl sm:text-4xl text-center sm:pt-2 text-white"
    }, " Sobres ", -1),
    wx = m("p", {
        class: "font-extrabold text-xl sm:text-3xl text-center sm:pt-5 text-gray-300"
    }, " Hasta 25 hojas ", -1),
    xx = {
        class: "mt-0 sm:mt-4 text-3xl sm:text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"
    },
    Ix = {
        key: 1,
        class: "bg-gray-800 p-4 rounded-lg text-center w-full sm:w-1/2"
    },
    Ex = m("p", {
        class: "font-extrabold text-2xl sm:text-4xl text-center sm:pt-2 text-white"
    }, " Paquetes ", -1),
    Tx = m("p", {
        class: "font-extrabold text-xl sm:text-3xl text-center sm:pt-5 text-gray-300"
    }, " De 0 - 1 kg. ", -1),
    Sx = {
        class: "mt-0 sm:mt-4 text-3xl sm:text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"
    },
    kx = {
        key: 2,
        class: "bg-gray-800 p-4 rounded-lg text-center w-full sm:w-1/2"
    },
    Ax = m("p", {
        class: "font-extrabold text-2xl sm:text-4xl text-center sm:pt-2 text-white"
    }, " Cajas ", -1),
    Cx = m("p", {
        class: "font-extrabold text-xl sm:text-3xl text-center sm:pt-5 text-gray-300"
    }, " De 1 - 10 kg. ", -1),
    Rx = {
        class: "mt-0 sm:mt-4 text-3xl sm:text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"
    },
    Ox = {
        key: 3,
        class: "bg-gray-800 p-4 rounded-lg text-center w-full sm:w-1/2"
    },
    Px = m("p", {
        class: "font-extrabold text-2xl sm:text-4xl text-center sm:pt-2 text-white"
    }, " Cajas ", -1),
    Nx = m("p", {
        class: "font-extrabold text-xl sm:text-3xl text-center sm:pt-5 text-gray-300"
    }, " De 11 - 20 kg. ", -1),
    Dx = {
        class: "mt-0 sm:mt-4 text-3xl sm:text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"
    },
    Mx = {
        key: 4,
        class: "bg-gray-800 p-4 rounded-lg text-center col-span-1 sm:col-span-2 w-full sm:w-1/2"
    },
    Lx = m("p", {
        class: "font-extrabold text-2xl sm:text-4xl text-center sm:pt-2 text-white"
    }, " Maletas ", -1),
    Fx = m("p", {
        class: "font-extrabold text-xl sm:text-3xl text-center sm:pt-5 text-gray-300"
    }, " De 21 - 30 kg. ", -1),
    $x = {
        class: "mt-0 sm:mt-4 text-3xl sm:text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"
    },
    Ux = m("div", {
        class: "h-auto w-full pt-5 pb-5 mt-5 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0 px-3"
    }, [m("p", null, "***VALOR DE REFERENCIA SUJETO A CAMBIOS***")], -1),
    Vx = {
        id: "calcula",
        class: "flex flex-col w-full lg:px-52 md:px-0 sm:lg:px-0 px-0 my-auto"
    },
    jx = {
        id: "tarifas",
        class: "flex flex-col w-full lg:px-52 md:px-0 sm:lg:px-0 px-0 my-auto"
    },
    Zd = {
        __name: "App",
        setup(t) {
            const e = Qd();
            jr(async () => {
                await e.getDocuments("envios")
            });
            const n = Ue(null),
                s = Ue(null),
                r = async () => {
                    s.value = null, await e.getDocumentByKey("envios", "id", n.value.id)
                }, i = new Intl.NumberFormat("es-MX", {
                    style: "currency",
                    currency: "MXN",
                    minimumFractionDigits: 2
                });
            return (o, a) => (me(), _e(ze, null, [ge(fm), ge(ru), m("div", Yw, [ge(ou)]), m("div", Qw, [Xw, Zw, m("div", ex, [m("div", tx, [m("div", nx, [Xe(m("select", {
                "onUpdate:modelValue": a[0] || (a[0] = l => he(n) ? n.value = l : null),
                onChange: a[1] || (a[1] = l => r()),
                class: "block sm:w-96 py-3 px-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500",
                placeholder: "¿Dónde dejar tus paquetes?"
            }, [sx, (me(!0), _e(ze, null, va(ee(e).$state.documents, l => (me(), _e("option", {
                key: l.id,
                value: l
            }, gt(l.origen), 9, rx))), 128))], 544), [
                [Fa, ee(n)]
            ]), m("div", ix, [ox, m("div", null, [ax, lx, ee(n) != null ? (me(), _e("p", cx, gt(ee(n).ubicacion), 1)) : yt("", !0)])])]), m("div", ux, [Xe(m("select", {
                "onUpdate:modelValue": a[2] || (a[2] = l => he(s) ? s.value = l : null),
                class: "block sm:w-96 w-72 py-3 px-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            }, [dx, (me(!0), _e(ze, null, va(ee(e).$state.destinos, l => (me(), _e("option", {
                key: l.id,
                value: l
            }, gt(l.nombre), 9, fx))), 128))], 512), [
                [Fa, ee(s)]
            ]), m("div", hx, [px, m("div", null, [mx, gx, ee(s) != null ? (me(), _e("p", yx, gt(ee(s).direccion), 1)) : yt("", !0)])])])])]), m("div", _x, [ee(s) != null ? (me(), _e("div", vx, [bx, wx, m("p", xx, gt(ee(i).format(ee(s).precios.SOB)), 1)])) : yt("", !0), ee(s) != null ? (me(), _e("div", Ix, [Ex, Tx, m("p", Sx, gt(ee(i).format(ee(s).precios.PAQ)), 1)])) : yt("", !0), ee(s) != null ? (me(), _e("div", kx, [Ax, Cx, m("p", Rx, gt(ee(i).format(ee(s).precios.C1)), 1)])) : yt("", !0), ee(s) != null ? (me(), _e("div", Ox, [Px, Nx, m("p", Dx, gt(ee(i).format(ee(s).precios.C2)), 1)])) : yt("", !0), ee(s) != null ? (me(), _e("div", Mx, [Lx, Fx, m("p", $x, gt(ee(i).format(ee(s).precios.C3)), 1)])) : yt("", !0)]), Ux]), m("div", Vx, [ge(au)]), m("div", jx, [ge(Xd)]), ge(Jm)], 64))
        }
    };
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
const Pn = typeof window < "u";

function Bx(t) {
    return t.__esModule || t[Symbol.toStringTag] === "Module"
}
const se = Object.assign;

function Ai(t, e) {
    const n = {};
    for (const s in e) {
        const r = e[s];
        n[s] = dt(r) ? r.map(t) : t(r)
    }
    return n
}
const ms = () => {},
    dt = Array.isArray,
    Hx = /\/$/,
    qx = t => t.replace(Hx, "");

function Ci(t, e, n = "/") {
    let s, r = {},
        i = "",
        o = "";
    const a = e.indexOf("#");
    let l = e.indexOf("?");
    return a < l && a >= 0 && (l = -1), l > -1 && (s = e.slice(0, l), i = e.slice(l + 1, a > -1 ? a : e.length), r = t(i)), a > -1 && (s = s || e.slice(0, a), o = e.slice(a, e.length)), s = Gx(s ?? e, n), {
        fullPath: s + (i && "?") + i + o,
        path: s,
        query: r,
        hash: o
    }
}

function zx(t, e) {
    const n = e.query ? t(e.query) : "";
    return e.path + (n && "?") + n + (e.hash || "")
}

function Hl(t, e) {
    return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/"
}

function Kx(t, e, n) {
    const s = e.matched.length - 1,
        r = n.matched.length - 1;
    return s > -1 && s === r && Gn(e.matched[s], n.matched[r]) && ef(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash
}

function Gn(t, e) {
    return (t.aliasOf || t) === (e.aliasOf || e)
}

function ef(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const n in t)
        if (!Wx(t[n], e[n])) return !1;
    return !0
}

function Wx(t, e) {
    return dt(t) ? ql(t, e) : dt(e) ? ql(e, t) : t === e
}

function ql(t, e) {
    return dt(e) ? t.length === e.length && t.every((n, s) => n === e[s]) : t.length === 1 && t[0] === e
}

function Gx(t, e) {
    if (t.startsWith("/")) return t;
    if (!t) return e;
    const n = e.split("/"),
        s = t.split("/");
    let r = n.length - 1,
        i, o;
    for (i = 0; i < s.length; i++)
        if (o = s[i], o !== ".")
            if (o === "..") r > 1 && r--;
            else break;
    return n.slice(0, r).join("/") + "/" + s.slice(i - (i === s.length ? 1 : 0)).join("/")
}
var Ls;
(function (t) {
    t.pop = "pop", t.push = "push"
})(Ls || (Ls = {}));
var gs;
(function (t) {
    t.back = "back", t.forward = "forward", t.unknown = ""
})(gs || (gs = {}));

function Jx(t) {
    if (!t)
        if (Pn) {
            const e = document.querySelector("base");
            t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "")
        } else t = "/";
    return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), qx(t)
}
const Yx = /^[^#]+#/;

function Qx(t, e) {
    return t.replace(Yx, "#") + e
}

function Xx(t, e) {
    const n = document.documentElement.getBoundingClientRect(),
        s = t.getBoundingClientRect();
    return {
        behavior: e.behavior,
        left: s.left - n.left - (e.left || 0),
        top: s.top - n.top - (e.top || 0)
    }
}
const ai = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});

function Zx(t) {
    let e;
    if ("el" in t) {
        const n = t.el,
            s = typeof n == "string" && n.startsWith("#"),
            r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!r) return;
        e = Xx(r, t)
    } else e = t;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.pageXOffset, e.top != null ? e.top : window.pageYOffset)
}

function zl(t, e) {
    return (history.state ? history.state.position - e : -1) + t
}
const io = new Map;

function e1(t, e) {
    io.set(t, e)
}

function t1(t) {
    const e = io.get(t);
    return io.delete(t), e
}
let n1 = () => location.protocol + "//" + location.host;

function tf(t, e) {
    const {
        pathname: n,
        search: s,
        hash: r
    } = e, i = t.indexOf("#");
    if (i > -1) {
        let a = r.includes(t.slice(i)) ? t.slice(i).length : 1,
            l = r.slice(a);
        return l[0] !== "/" && (l = "/" + l), Hl(l, "")
    }
    return Hl(n, t) + s + r
}

function s1(t, e, n, s) {
    let r = [],
        i = [],
        o = null;
    const a = ({
        state: h
    }) => {
        const g = tf(t, location),
            w = n.value,
            S = e.value;
        let F = 0;
        if (h) {
            if (n.value = g, e.value = h, o && o === w) {
                o = null;
                return
            }
            F = S ? h.position - S.position : 0
        } else s(g);
        r.forEach(R => {
            R(n.value, w, {
                delta: F,
                type: Ls.pop,
                direction: F ? F > 0 ? gs.forward : gs.back : gs.unknown
            })
        })
    };

    function l() {
        o = n.value
    }

    function c(h) {
        r.push(h);
        const g = () => {
            const w = r.indexOf(h);
            w > -1 && r.splice(w, 1)
        };
        return i.push(g), g
    }

    function u() {
        const {
            history: h
        } = window;
        h.state && h.replaceState(se({}, h.state, {
            scroll: ai()
        }), "")
    }

    function f() {
        for (const h of i) h();
        i = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u), {
        pauseListeners: l,
        listen: c,
        destroy: f
    }
}

function Kl(t, e, n, s = !1, r = !1) {
    return {
        back: t,
        current: e,
        forward: n,
        replaced: s,
        position: window.history.length,
        scroll: r ? ai() : null
    }
}

function r1(t) {
    const {
        history: e,
        location: n
    } = window, s = {
        value: tf(t, n)
    }, r = {
        value: e.state
    };
    r.value || i(s.value, {
        back: null,
        current: s.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function i(l, c, u) {
        const f = t.indexOf("#"),
            h = f > -1 ? (n.host && document.querySelector("base") ? t : t.slice(f)) + l : n1() + t + l;
        try {
            e[u ? "replaceState" : "pushState"](c, "", h), r.value = c
        } catch (g) {
            console.error(g), n[u ? "replace" : "assign"](h)
        }
    }

    function o(l, c) {
        const u = se({}, e.state, Kl(r.value.back, l, r.value.forward, !0), c, {
            position: r.value.position
        });
        i(l, u, !0), s.value = l
    }

    function a(l, c) {
        const u = se({}, r.value, e.state, {
            forward: l,
            scroll: ai()
        });
        i(u.current, u, !0);
        const f = se({}, Kl(s.value, l, null), {
            position: u.position + 1
        }, c);
        i(l, f, !1), s.value = l
    }
    return {
        location: s,
        state: r,
        push: a,
        replace: o
    }
}

function i1(t) {
    t = Jx(t);
    const e = r1(t),
        n = s1(t, e.state, e.location, e.replace);

    function s(i, o = !0) {
        o || n.pauseListeners(), history.go(i)
    }
    const r = se({
        location: "",
        base: t,
        go: s,
        createHref: Qx.bind(null, t)
    }, e, n);
    return Object.defineProperty(r, "location", {
        enumerable: !0,
        get: () => e.location.value
    }), Object.defineProperty(r, "state", {
        enumerable: !0,
        get: () => e.state.value
    }), r
}

function o1(t) {
    return typeof t == "string" || t && typeof t == "object"
}

function nf(t) {
    return typeof t == "string" || typeof t == "symbol"
}
const Ut = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    },
    sf = Symbol("");
var Wl;
(function (t) {
    t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated"
})(Wl || (Wl = {}));

function Jn(t, e) {
    return se(new Error, {
        type: t,
        [sf]: !0
    }, e)
}

function St(t, e) {
    return t instanceof Error && sf in t && (e == null || !!(t.type & e))
}
const Gl = "[^/]+?",
    a1 = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    l1 = /[.+*?^${}()[\]/\\]/g;

function c1(t, e) {
    const n = se({}, a1, e),
        s = [];
    let r = n.start ? "^" : "";
    const i = [];
    for (const c of t) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (r += "/");
        for (let f = 0; f < c.length; f++) {
            const h = c[f];
            let g = 40 + (n.sensitive ? .25 : 0);
            if (h.type === 0) f || (r += "/"), r += h.value.replace(l1, "\\$&"), g += 40;
            else if (h.type === 1) {
                const {
                    value: w,
                    repeatable: S,
                    optional: F,
                    regexp: R
                } = h;
                i.push({
                    name: w,
                    repeatable: S,
                    optional: F
                });
                const U = R || Gl;
                if (U !== Gl) {
                    g += 10;
                    try {
                        new RegExp(`(${U})`)
                    } catch (z) {
                        throw new Error(`Invalid custom RegExp for param "${w}" (${U}): ` + z.message)
                    }
                }
                let P = S ? `((?:${U})(?:/(?:${U}))*)` : `(${U})`;
                f || (P = F && c.length < 2 ? `(?:/${P})` : "/" + P), F && (P += "?"), r += P, g += 20, F && (g += -8), S && (g += -20), U === ".*" && (g += -50)
            }
            u.push(g)
        }
        s.push(u)
    }
    if (n.strict && n.end) {
        const c = s.length - 1;
        s[c][s[c].length - 1] += .7000000000000001
    }
    n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
    const o = new RegExp(r, n.sensitive ? "" : "i");

    function a(c) {
        const u = c.match(o),
            f = {};
        if (!u) return null;
        for (let h = 1; h < u.length; h++) {
            const g = u[h] || "",
                w = i[h - 1];
            f[w.name] = g && w.repeatable ? g.split("/") : g
        }
        return f
    }

    function l(c) {
        let u = "",
            f = !1;
        for (const h of t) {
            (!f || !u.endsWith("/")) && (u += "/"), f = !1;
            for (const g of h)
                if (g.type === 0) u += g.value;
                else if (g.type === 1) {
                const {
                    value: w,
                    repeatable: S,
                    optional: F
                } = g, R = w in c ? c[w] : "";
                if (dt(R) && !S) throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);
                const U = dt(R) ? R.join("/") : R;
                if (!U)
                    if (F) h.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
                    else throw new Error(`Missing required param "${w}"`);
                u += U
            }
        }
        return u || "/"
    }
    return {
        re: o,
        score: s,
        keys: i,
        parse: a,
        stringify: l
    }
}

function u1(t, e) {
    let n = 0;
    for (; n < t.length && n < e.length;) {
        const s = e[n] - t[n];
        if (s) return s;
        n++
    }
    return t.length < e.length ? t.length === 1 && t[0] === 40 + 40 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 40 + 40 ? 1 : -1 : 0
}

function d1(t, e) {
    let n = 0;
    const s = t.score,
        r = e.score;
    for (; n < s.length && n < r.length;) {
        const i = u1(s[n], r[n]);
        if (i) return i;
        n++
    }
    if (Math.abs(r.length - s.length) === 1) {
        if (Jl(s)) return 1;
        if (Jl(r)) return -1
    }
    return r.length - s.length
}

function Jl(t) {
    const e = t[t.length - 1];
    return t.length > 0 && e[e.length - 1] < 0
}
const f1 = {
        type: 0,
        value: ""
    },
    h1 = /[a-zA-Z0-9_]/;

function p1(t) {
    if (!t) return [
        []
    ];
    if (t === "/") return [
        [f1]
    ];
    if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);

    function e(g) {
        throw new Error(`ERR (${n})/"${c}": ${g}`)
    }
    let n = 0,
        s = n;
    const r = [];
    let i;

    function o() {
        i && r.push(i), i = []
    }
    let a = 0,
        l, c = "",
        u = "";

    function f() {
        c && (n === 0 ? i.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), i.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : e("Invalid state to consume buffer"), c = "")
    }

    function h() {
        c += l
    }
    for (; a < t.length;) {
        if (l = t[a++], l === "\\" && n !== 2) {
            s = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                l === "/" ? (c && f(), o()) : l === ":" ? (f(), n = 1) : h();
                break;
            case 4:
                h(), n = s;
                break;
            case 1:
                l === "(" ? n = 2 : h1.test(l) ? h() : (f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
                break;
            case 2:
                l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
                break;
            case 3:
                f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, u = "";
                break;
            default:
                e("Unknown state");
                break
        }
    }
    return n === 2 && e(`Unfinished custom RegExp for param "${c}"`), f(), o(), r
}

function m1(t, e, n) {
    const s = c1(p1(t.path), n),
        r = se(s, {
            record: t,
            parent: e,
            children: [],
            alias: []
        });
    return e && !r.record.aliasOf == !e.record.aliasOf && e.children.push(r), r
}

function g1(t, e) {
    const n = [],
        s = new Map;
    e = Xl({
        strict: !1,
        end: !0,
        sensitive: !1
    }, e);

    function r(u) {
        return s.get(u)
    }

    function i(u, f, h) {
        const g = !h,
            w = y1(u);
        w.aliasOf = h && h.record;
        const S = Xl(e, u),
            F = [w];
        if ("alias" in u) {
            const P = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const z of P) F.push(se({}, w, {
                components: h ? h.record.components : w.components,
                path: z,
                aliasOf: h ? h.record : w
            }))
        }
        let R, U;
        for (const P of F) {
            const {
                path: z
            } = P;
            if (f && z[0] !== "/") {
                const W = f.record.path,
                    ae = W[W.length - 1] === "/" ? "" : "/";
                P.path = f.record.path + (z && ae + z)
            }
            if (R = m1(P, f, S), h ? h.alias.push(R) : (U = U || R, U !== R && U.alias.push(R), g && u.name && !Ql(R) && o(u.name)), w.children) {
                const W = w.children;
                for (let ae = 0; ae < W.length; ae++) i(W[ae], R, h && h.children[ae])
            }
            h = h || R, (R.record.components && Object.keys(R.record.components).length || R.record.name || R.record.redirect) && l(R)
        }
        return U ? () => {
            o(U)
        } : ms
    }

    function o(u) {
        if (nf(u)) {
            const f = s.get(u);
            f && (s.delete(u), n.splice(n.indexOf(f), 1), f.children.forEach(o), f.alias.forEach(o))
        } else {
            const f = n.indexOf(u);
            f > -1 && (n.splice(f, 1), u.record.name && s.delete(u.record.name), u.children.forEach(o), u.alias.forEach(o))
        }
    }

    function a() {
        return n
    }

    function l(u) {
        let f = 0;
        for (; f < n.length && d1(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !rf(u, n[f]));) f++;
        n.splice(f, 0, u), u.record.name && !Ql(u) && s.set(u.record.name, u)
    }

    function c(u, f) {
        let h, g = {},
            w, S;
        if ("name" in u && u.name) {
            if (h = s.get(u.name), !h) throw Jn(1, {
                location: u
            });
            S = h.record.name, g = se(Yl(f.params, h.keys.filter(U => !U.optional).map(U => U.name)), u.params && Yl(u.params, h.keys.map(U => U.name))), w = h.stringify(g)
        } else if ("path" in u) w = u.path, h = n.find(U => U.re.test(w)), h && (g = h.parse(w), S = h.record.name);
        else {
            if (h = f.name ? s.get(f.name) : n.find(U => U.re.test(f.path)), !h) throw Jn(1, {
                location: u,
                currentLocation: f
            });
            S = h.record.name, g = se({}, f.params, u.params), w = h.stringify(g)
        }
        const F = [];
        let R = h;
        for (; R;) F.unshift(R.record), R = R.parent;
        return {
            name: S,
            path: w,
            params: g,
            matched: F,
            meta: v1(F)
        }
    }
    return t.forEach(u => i(u)), {
        addRoute: i,
        resolve: c,
        removeRoute: o,
        getRoutes: a,
        getRecordMatcher: r
    }
}

function Yl(t, e) {
    const n = {};
    for (const s of e) s in t && (n[s] = t[s]);
    return n
}

function y1(t) {
    return {
        path: t.path,
        redirect: t.redirect,
        name: t.name,
        meta: t.meta || {},
        aliasOf: void 0,
        beforeEnter: t.beforeEnter,
        props: _1(t),
        children: t.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in t ? t.components || null : t.component && {
            default: t.component
        }
    }
}

function _1(t) {
    const e = {},
        n = t.props || !1;
    if ("component" in t) e.default = n;
    else
        for (const s in t.components) e[s] = typeof n == "boolean" ? n : n[s];
    return e
}

function Ql(t) {
    for (; t;) {
        if (t.record.aliasOf) return !0;
        t = t.parent
    }
    return !1
}

function v1(t) {
    return t.reduce((e, n) => se(e, n.meta), {})
}

function Xl(t, e) {
    const n = {};
    for (const s in t) n[s] = s in e ? e[s] : t[s];
    return n
}

function rf(t, e) {
    return e.children.some(n => n === t || rf(t, n))
}
const of = /#/g, b1 = /&/g, w1 = /\//g, x1 = /=/g, I1 = /\?/g, af = /\+/g, E1 = /%5B/g, T1 = /%5D/g, lf = /%5E/g, S1 = /%60/g, cf = /%7B/g, k1 = /%7C/g, uf = /%7D/g, A1 = /%20/g;

function ea(t) {
    return encodeURI("" + t).replace(k1, "|").replace(E1, "[").replace(T1, "]")
}

function C1(t) {
    return ea(t).replace(cf, "{").replace(uf, "}").replace(lf, "^")
}

function oo(t) {
    return ea(t).replace(af, "%2B").replace(A1, "+").replace( of , "%23").replace(b1, "%26").replace(S1, "`").replace(cf, "{").replace(uf, "}").replace(lf, "^")
}

function R1(t) {
    return oo(t).replace(x1, "%3D")
}

function O1(t) {
    return ea(t).replace( of , "%23").replace(I1, "%3F")
}

function P1(t) {
    return t == null ? "" : O1(t).replace(w1, "%2F")
}

function Or(t) {
    try {
        return decodeURIComponent("" + t)
    } catch {}
    return "" + t
}

function N1(t) {
    const e = {};
    if (t === "" || t === "?") return e;
    const s = (t[0] === "?" ? t.slice(1) : t).split("&");
    for (let r = 0; r < s.length; ++r) {
        const i = s[r].replace(af, " "),
            o = i.indexOf("="),
            a = Or(o < 0 ? i : i.slice(0, o)),
            l = o < 0 ? null : Or(i.slice(o + 1));
        if (a in e) {
            let c = e[a];
            dt(c) || (c = e[a] = [c]), c.push(l)
        } else e[a] = l
    }
    return e
}

function Zl(t) {
    let e = "";
    for (let n in t) {
        const s = t[n];
        if (n = R1(n), s == null) {
            s !== void 0 && (e += (e.length ? "&" : "") + n);
            continue
        }(dt(s) ? s.map(i => i && oo(i)) : [s && oo(s)]).forEach(i => {
            i !== void 0 && (e += (e.length ? "&" : "") + n, i != null && (e += "=" + i))
        })
    }
    return e
}

function D1(t) {
    const e = {};
    for (const n in t) {
        const s = t[n];
        s !== void 0 && (e[n] = dt(s) ? s.map(r => r == null ? null : "" + r) : s == null ? s : "" + s)
    }
    return e
}
const M1 = Symbol(""),
    ec = Symbol(""),
    ta = Symbol(""),
    df = Symbol(""),
    ao = Symbol("");

function ss() {
    let t = [];

    function e(s) {
        return t.push(s), () => {
            const r = t.indexOf(s);
            r > -1 && t.splice(r, 1)
        }
    }

    function n() {
        t = []
    }
    return {
        add: e,
        list: () => t,
        reset: n
    }
}

function Ht(t, e, n, s, r) {
    const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return () => new Promise((o, a) => {
        const l = f => {
                f === !1 ? a(Jn(4, {
                    from: n,
                    to: e
                })) : f instanceof Error ? a(f) : o1(f) ? a(Jn(2, {
                    from: e,
                    to: f
                })) : (i && s.enterCallbacks[r] === i && typeof f == "function" && i.push(f), o())
            },
            c = t.call(s && s.instances[r], e, n, l);
        let u = Promise.resolve(c);
        t.length < 3 && (u = u.then(l)), u.catch(f => a(f))
    })
}

function Ri(t, e, n, s) {
    const r = [];
    for (const i of t)
        for (const o in i.components) {
            let a = i.components[o];
            if (!(e !== "beforeRouteEnter" && !i.instances[o]))
                if (L1(a)) {
                    const c = (a.__vccOpts || a)[e];
                    c && r.push(Ht(c, n, s, i, o))
                } else {
                    let l = a();
                    r.push(() => l.then(c => {
                        if (!c) return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));
                        const u = Bx(c) ? c.default : c;
                        i.components[o] = u;
                        const h = (u.__vccOpts || u)[e];
                        return h && Ht(h, n, s, i, o)()
                    }))
                }
        }
    return r
}

function L1(t) {
    return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t
}

function tc(t) {
    const e = wt(ta),
        n = wt(df),
        s = Ve(() => e.resolve(ee(t.to))),
        r = Ve(() => {
            const {
                matched: l
            } = s.value, {
                length: c
            } = l, u = l[c - 1], f = n.matched;
            if (!u || !f.length) return -1;
            const h = f.findIndex(Gn.bind(null, u));
            if (h > -1) return h;
            const g = nc(l[c - 2]);
            return c > 1 && nc(u) === g && f[f.length - 1].path !== g ? f.findIndex(Gn.bind(null, l[c - 2])) : h
        }),
        i = Ve(() => r.value > -1 && V1(n.params, s.value.params)),
        o = Ve(() => r.value > -1 && r.value === n.matched.length - 1 && ef(n.params, s.value.params));

    function a(l = {}) {
        return U1(l) ? e[ee(t.replace) ? "replace" : "push"](ee(t.to)).catch(ms) : Promise.resolve()
    }
    return {
        route: s,
        href: Ve(() => s.value.href),
        isActive: i,
        isExactActive: o,
        navigate: a
    }
}
const F1 = Uc({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: tc,
        setup(t, {
            slots: e
        }) {
            const n = Zn(tc(t)),
                {
                    options: s
                } = wt(ta),
                r = Ve(() => ({
                    [sc(t.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
                    [sc(t.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const i = e.default && e.default(n);
                return t.custom ? i : su("a", {
                    "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: r.value
                }, i)
            }
        }
    }),
    $1 = F1;

function U1(t) {
    if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
        if (t.currentTarget && t.currentTarget.getAttribute) {
            const e = t.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(e)) return
        }
        return t.preventDefault && t.preventDefault(), !0
    }
}

function V1(t, e) {
    for (const n in e) {
        const s = e[n],
            r = t[n];
        if (typeof s == "string") {
            if (s !== r) return !1
        } else if (!dt(r) || r.length !== s.length || s.some((i, o) => i !== r[o])) return !1
    }
    return !0
}

function nc(t) {
    return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
}
const sc = (t, e, n) => t ?? e ?? n,
    j1 = Uc({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(t, {
            attrs: e,
            slots: n
        }) {
            const s = wt(ao),
                r = Ve(() => t.route || s.value),
                i = wt(ec, 0),
                o = Ve(() => {
                    let c = ee(i);
                    const {
                        matched: u
                    } = r.value;
                    let f;
                    for (;
                        (f = u[c]) && !f.components;) c++;
                    return c
                }),
                a = Ve(() => r.value.matched[o.value]);
            sr(ec, Ve(() => o.value + 1)), sr(M1, a), sr(ao, r);
            const l = Ue();
            return is(() => [l.value, a.value, t.name], ([c, u, f], [h, g, w]) => {
                u && (u.instances[f] = c, g && g !== u && c && c === h && (u.leaveGuards.size || (u.leaveGuards = g.leaveGuards), u.updateGuards.size || (u.updateGuards = g.updateGuards))), c && u && (!g || !Gn(u, g) || !h) && (u.enterCallbacks[f] || []).forEach(S => S(c))
            }, {
                flush: "post"
            }), () => {
                const c = r.value,
                    u = t.name,
                    f = a.value,
                    h = f && f.components[u];
                if (!h) return rc(n.default, {
                    Component: h,
                    route: c
                });
                const g = f.props[u],
                    w = g ? g === !0 ? c.params : typeof g == "function" ? g(c) : g : null,
                    F = su(h, se({}, w, e, {
                        onVnodeUnmounted: R => {
                            R.component.isUnmounted && (f.instances[u] = null)
                        },
                        ref: l
                    }));
                return rc(n.default, {
                    Component: F,
                    route: c
                }) || F
            }
        }
    });

function rc(t, e) {
    if (!t) return null;
    const n = t(e);
    return n.length === 1 ? n[0] : n
}
const B1 = j1;

function H1(t) {
    const e = g1(t.routes, t),
        n = t.parseQuery || N1,
        s = t.stringifyQuery || Zl,
        r = t.history,
        i = ss(),
        o = ss(),
        a = ss(),
        l = nh(Ut);
    let c = Ut;
    Pn && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = Ai.bind(null, v => "" + v),
        f = Ai.bind(null, P1),
        h = Ai.bind(null, Or);

    function g(v, C) {
        let k, D;
        return nf(v) ? (k = e.getRecordMatcher(v), D = C) : D = v, e.addRoute(D, k)
    }

    function w(v) {
        const C = e.getRecordMatcher(v);
        C && e.removeRoute(C)
    }

    function S() {
        return e.getRoutes().map(v => v.record)
    }

    function F(v) {
        return !!e.getRecordMatcher(v)
    }

    function R(v, C) {
        if (C = se({}, C || l.value), typeof v == "string") {
            const d = Ci(n, v, C.path),
                p = e.resolve({
                    path: d.path
                }, C),
                y = r.createHref(d.fullPath);
            return se(d, p, {
                params: h(p.params),
                hash: Or(d.hash),
                redirectedFrom: void 0,
                href: y
            })
        }
        let k;
        if ("path" in v) k = se({}, v, {
            path: Ci(n, v.path, C.path).path
        });
        else {
            const d = se({}, v.params);
            for (const p in d) d[p] == null && delete d[p];
            k = se({}, v, {
                params: f(v.params)
            }), C.params = f(C.params)
        }
        const D = e.resolve(k, C),
            Z = v.hash || "";
        D.params = u(h(D.params));
        const fe = zx(s, se({}, v, {
                hash: C1(Z),
                path: D.path
            })),
            G = r.createHref(fe);
        return se({
            fullPath: fe,
            hash: Z,
            query: s === Zl ? D1(v.query) : v.query || {}
        }, D, {
            redirectedFrom: void 0,
            href: G
        })
    }

    function U(v) {
        return typeof v == "string" ? Ci(n, v, l.value.path) : se({}, v)
    }

    function P(v, C) {
        if (c !== v) return Jn(8, {
            from: C,
            to: v
        })
    }

    function z(v) {
        return K(v)
    }

    function W(v) {
        return z(se(U(v), {
            replace: !0
        }))
    }

    function ae(v) {
        const C = v.matched[v.matched.length - 1];
        if (C && C.redirect) {
            const {
                redirect: k
            } = C;
            let D = typeof k == "function" ? k(v) : k;
            return typeof D == "string" && (D = D.includes("?") || D.includes("#") ? D = U(D) : {
                path: D
            }, D.params = {}), se({
                query: v.query,
                hash: v.hash,
                params: "path" in D ? {} : v.params
            }, D)
        }
    }

    function K(v, C) {
        const k = c = R(v),
            D = l.value,
            Z = v.state,
            fe = v.force,
            G = v.replace === !0,
            d = ae(k);
        if (d) return K(se(U(d), {
            state: typeof d == "object" ? se({}, Z, d.state) : Z,
            force: fe,
            replace: G
        }), C || k);
        const p = k;
        p.redirectedFrom = C;
        let y;
        return !fe && Kx(s, D, k) && (y = Jn(16, {
            to: p,
            from: D
        }), rn(D, D, !0, !1)), (y ? Promise.resolve(y) : Y(p, D)).catch(_ => St(_) ? St(_, 2) ? _ : st(_) : le(_, p, D)).then(_ => {
            if (_) {
                if (St(_, 2)) return K(se({
                    replace: G
                }, U(_.to), {
                    state: typeof _.to == "object" ? se({}, Z, _.to.state) : Z,
                    force: fe
                }), C || p)
            } else _ = pe(p, D, !0, G, Z);
            return X(p, D, _), _
        })
    }

    function O(v, C) {
        const k = P(v, C);
        return k ? Promise.reject(k) : Promise.resolve()
    }

    function Y(v, C) {
        let k;
        const [D, Z, fe] = q1(v, C);
        k = Ri(D.reverse(), "beforeRouteLeave", v, C);
        for (const d of D) d.leaveGuards.forEach(p => {
            k.push(Ht(p, v, C))
        });
        const G = O.bind(null, v, C);
        return k.push(G), Rn(k).then(() => {
            k = [];
            for (const d of i.list()) k.push(Ht(d, v, C));
            return k.push(G), Rn(k)
        }).then(() => {
            k = Ri(Z, "beforeRouteUpdate", v, C);
            for (const d of Z) d.updateGuards.forEach(p => {
                k.push(Ht(p, v, C))
            });
            return k.push(G), Rn(k)
        }).then(() => {
            k = [];
            for (const d of v.matched)
                if (d.beforeEnter && !C.matched.includes(d))
                    if (dt(d.beforeEnter))
                        for (const p of d.beforeEnter) k.push(Ht(p, v, C));
                    else k.push(Ht(d.beforeEnter, v, C));
            return k.push(G), Rn(k)
        }).then(() => (v.matched.forEach(d => d.enterCallbacks = {}), k = Ri(fe, "beforeRouteEnter", v, C), k.push(G), Rn(k))).then(() => {
            k = [];
            for (const d of o.list()) k.push(Ht(d, v, C));
            return k.push(G), Rn(k)
        }).catch(d => St(d, 8) ? d : Promise.reject(d))
    }

    function X(v, C, k) {
        for (const D of a.list()) D(v, C, k)
    }

    function pe(v, C, k, D, Z) {
        const fe = P(v, C);
        if (fe) return fe;
        const G = C === Ut,
            d = Pn ? history.state : {};
        k && (D || G ? r.replace(v.fullPath, se({
            scroll: G && d && d.scroll
        }, Z)) : r.push(v.fullPath, Z)), l.value = v, rn(v, C, k, G), st()
    }
    let Ee;

    function Be() {
        Ee || (Ee = r.listen((v, C, k) => {
            if (!zs.listening) return;
            const D = R(v),
                Z = ae(D);
            if (Z) {
                K(se(Z, {
                    replace: !0
                }), D).catch(ms);
                return
            }
            c = D;
            const fe = l.value;
            Pn && e1(zl(fe.fullPath, k.delta), ai()), Y(D, fe).catch(G => St(G, 12) ? G : St(G, 2) ? (K(G.to, D).then(d => {
                St(d, 20) && !k.delta && k.type === Ls.pop && r.go(-1, !1)
            }).catch(ms), Promise.reject()) : (k.delta && r.go(-k.delta, !1), le(G, D, fe))).then(G => {
                G = G || pe(D, fe, !1), G && (k.delta && !St(G, 8) ? r.go(-k.delta, !1) : k.type === Ls.pop && St(G, 20) && r.go(-1, !1)), X(D, fe, G)
            }).catch(ms)
        }))
    }
    let De = ss(),
        Te = ss(),
        ve;

    function le(v, C, k) {
        st(v);
        const D = Te.list();
        return D.length ? D.forEach(Z => Z(v, C, k)) : console.error(v), Promise.reject(v)
    }

    function ie() {
        return ve && l.value !== Ut ? Promise.resolve() : new Promise((v, C) => {
            De.add([v, C])
        })
    }

    function st(v) {
        return ve || (ve = !v, Be(), De.list().forEach(([C, k]) => v ? k(v) : C()), De.reset()), v
    }

    function rn(v, C, k, D) {
        const {
            scrollBehavior: Z
        } = t;
        if (!Pn || !Z) return Promise.resolve();
        const fe = !k && t1(zl(v.fullPath, 0)) || (D || !k) && history.state && history.state.scroll || null;
        return xo().then(() => Z(v, C, fe)).then(G => G && Zx(G)).catch(G => le(G, v, C))
    }
    const rt = v => r.go(v);
    let Le;
    const kn = new Set,
        zs = {
            currentRoute: l,
            listening: !0,
            addRoute: g,
            removeRoute: w,
            hasRoute: F,
            getRoutes: S,
            resolve: R,
            options: t,
            push: z,
            replace: W,
            go: rt,
            back: () => rt(-1),
            forward: () => rt(1),
            beforeEach: i.add,
            beforeResolve: o.add,
            afterEach: a.add,
            onError: Te.add,
            isReady: ie,
            install(v) {
                const C = this;
                v.component("RouterLink", $1), v.component("RouterView", B1), v.config.globalProperties.$router = C, Object.defineProperty(v.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => ee(l)
                }), Pn && !Le && l.value === Ut && (Le = !0, z(r.location).catch(Z => {}));
                const k = {};
                for (const Z in Ut) k[Z] = Ve(() => l.value[Z]);
                v.provide(ta, C), v.provide(df, Zn(k)), v.provide(ao, l);
                const D = v.unmount;
                kn.add(v), v.unmount = function () {
                    kn.delete(v), kn.size < 1 && (c = Ut, Ee && Ee(), Ee = null, l.value = Ut, Le = !1, ve = !1), D()
                }
            }
        };
    return zs
}

function Rn(t) {
    return t.reduce((e, n) => e.then(() => n()), Promise.resolve())
}

function q1(t, e) {
    const n = [],
        s = [],
        r = [],
        i = Math.max(e.matched.length, t.matched.length);
    for (let o = 0; o < i; o++) {
        const a = e.matched[o];
        a && (t.matched.find(c => Gn(c, a)) ? s.push(a) : n.push(a));
        const l = t.matched[o];
        l && (e.matched.find(c => Gn(c, l)) || r.push(l))
    }
    return [n, s, r]
}
const z1 = H1({
        history: i1(),
        routes: [{
            path: "/",
            component: ru
        }, {
            path: "/envios",
            component: ou
        }, {
            path: "/app",
            component: Zd
        }, {
            path: "/calculadora",
            component: au
        }, {
            path: "/formulario",
            component: Xd
        }]
    }),
    na = Hp(Zd);
na.use(z1);
na.use(Jy());
na.mount("#app");