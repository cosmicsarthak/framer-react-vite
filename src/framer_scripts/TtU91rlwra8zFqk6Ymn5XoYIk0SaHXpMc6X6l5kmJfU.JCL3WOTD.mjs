import { a as Ue, b as he } from "./chunk-645JPX5U.mjs";
import { a as br } from "./chunk-UIMBLXRJ.mjs";
import { a as qt, b as Vt } from "./chunk-ZKTFC6HL.mjs";
import {
  $ as gr,
  $a as Sa,
  $b as Ya,
  Aa as Na,
  Ba as be,
  Ca as lt,
  Da as Ta,
  Ea as st,
  F as xa,
  Fa,
  Ga as ft,
  Ha as Ba,
  I as et,
  J as ya,
  K as va,
  N as wa,
  O as rt,
  P as ba,
  Q as ka,
  Ra as yr,
  Rb as yt,
  S as Ca,
  Sa as vr,
  Sb as vt,
  T as qa,
  Ta as wr,
  Tb as wt,
  U as Va,
  Ub as Wa,
  V as La,
  Vb as bt,
  Wb as Xa,
  Xa as mt,
  Xb as kt,
  Y as _a,
  Yb as Oa,
  Z as oe,
  Zb as Ct,
  _ as ie,
  _b as Za,
  aa as xr,
  ab as Qa,
  ac as Ga,
  bb as Pa,
  bc as Ka,
  c as _e,
  ca as ja,
  cb as dt,
  d as N,
  da as Ia,
  db as ct,
  ea as Ra,
  eb as pt,
  g as X,
  ha as tt,
  ia as at,
  ib as je,
  ja as ot,
  jb as Ie,
  ka as Ma,
  kb as Re,
  la as it,
  ma as za,
  mb as de,
  na as nt,
  nb as ce,
  ob as pe,
  pb as ht,
  qb as Aa,
  rb as ut,
  sb as Ea,
  tb as gt,
  ub as Ua,
  vb as xt,
  wb as Ha,
  xb as Me,
  yb as ze,
  za as Da,
  zb as De,
} from "./chunk-ZEPEXD57.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as t,
  B as Qe,
  C as E,
  D as cr,
  Da as ha,
  E as pr,
  F as ma,
  G as da,
  Ga as z,
  H as Pe,
  I as Ae,
  La as B,
  Pa as ur,
  Qa as ua,
  R as Ee,
  Ua as ga,
  Xa as G,
  Ya as ee,
  _ as U,
  b as Jr,
  bb as qe,
  c as m,
  cb as w,
  ea as $r,
  eb as h,
  g as T,
  ga as k,
  hb as W,
  ib as C,
  ja as Q,
  jb as le,
  k as Z,
  l as Ve,
  m as A,
  ma as P,
  n as fa,
  p as Y,
  pa as hr,
  q as F,
  r as Le,
  ra as me,
  sa as v,
  t as ve,
  u as e,
  ua as D,
  v as f,
  wa as H,
  xa as ca,
  z as R,
  za as pa,
} from "./chunk-NAESFJNX.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-OXBNEL3I.mjs";
import { a as ye, c as O } from "./chunk-Y5FTINFI.mjs";
var si = va(t.div),
  fi = ["ixQh3qpTV", "oY9Oepvq_", "hrea27bUt"],
  mi = "framer-F6VZV",
  di = {
    hrea27bUt: "framer-v-bbyvnb",
    ixQh3qpTV: "framer-v-z14vn5",
    oY9Oepvq_: "framer-v-1c6hgjn",
  };
function Lt(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var ci = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  pi = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  hi = t(m),
  ui = { Instagram: "hrea27bUt", Mail: "oY9Oepvq_", Twitter: "ixQh3qpTV" },
  gi = ({ height: a, id: r, link: i, width: o, ...l }) => {
    var s, p;
    return {
      ...l,
      ei62XrgAV: i ?? l.ei62XrgAV,
      variant:
        (p = (s = ui[l.variant]) !== null && s !== void 0 ? s : l.variant) !==
          null && p !== void 0
          ? p
          : "ixQh3qpTV",
    };
  },
  xi = (a, r) => r.join("-") + a.layoutDependency,
  yi = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      {
        style: l,
        className: s,
        layoutId: p,
        variant: b,
        ei62XrgAV: _,
        ...d
      } = gi(a),
      {
        baseVariant: q,
        classNames: j,
        gestureVariant: u,
        setGestureState: x,
        setVariant: I,
        variants: V,
      } = G({
        cycleOrder: fi,
        defaultVariant: "ixQh3qpTV",
        variant: b,
        variantClassNames: di,
      }),
      n = xi(a, V),
      y = F(null),
      c = () => q === "hrea27bUt",
      M = () => q === "oY9Oepvq_",
      $ = () => !["oY9Oepvq_", "hrea27bUt"].includes(q),
      K = A(),
      g = [],
      se = me();
    return e(E, {
      id: p ?? K,
      children: e(hi, {
        animate: V,
        initial: !1,
        children: e(pi, {
          value: ci,
          children: e(ha, {
            href: _,
            openInNewTab: !0,
            children: e(t.a, {
              ...d,
              className: `${P(mi, ...g, "framer-z14vn5", s, j)} framer-1wi24r9`,
              "data-framer-name": "Twitter",
              layoutDependency: n,
              layoutId: "ixQh3qpTV",
              onHoverEnd: () => x({ isHovered: !1 }),
              onHoverStart: () => x({ isHovered: !0 }),
              onTap: () => x({ isPressed: !1 }),
              onTapCancel: () => x({ isPressed: !1 }),
              onTapStart: () => x({ isPressed: !0 }),
              ref: r ?? y,
              style: {
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                ...l,
              },
              ...Lt(
                {
                  hrea27bUt: { "data-framer-name": "Instagram" },
                  oY9Oepvq_: { "data-framer-name": "Mail" },
                },
                q,
                u,
              ),
              children: f(si, {
                className: "framer-19i8icw",
                layoutDependency: n,
                layoutId: "dT4qYBbvV",
                style: {
                  backgroundColor:
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                },
                children: [
                  c() &&
                    e(h, {
                      className: "framer-1v4p8tp",
                      "data-framer-name": "instagram",
                      layout: "position",
                      layoutDependency: n,
                      layoutId: "obPYU5NYB",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36"><path d="M 26.39 11.25 C 27.219 11.25 27.891 10.578 27.891 9.75 C 27.891 8.922 27.219 8.25 26.39 8.25 L 26.377 8.25 C 25.547 8.252 24.876 8.924 24.877 9.75 C 24.877 10.578 25.548 11.25 26.377 11.25 L 26.392 11.25 Z M 18.169 2.625 C 21.469 2.625 24.064 2.625 26.087 2.895 C 28.162 3.174 29.808 3.755 31.101 5.04 C 32.394 6.33 32.977 7.967 33.256 10.032 C 33.528 12.047 33.528 14.628 33.528 17.915 L 33.528 18.086 C 33.528 21.371 33.528 23.954 33.257 25.968 C 32.977 28.034 32.394 29.672 31.102 30.959 C 29.806 32.246 28.162 32.826 26.087 33.104 C 24.064 33.375 21.47 33.375 18.169 33.375 L 17.997 33.375 C 14.697 33.375 12.102 33.375 10.078 33.105 C 8.003 32.826 6.358 32.246 5.065 30.96 C 3.772 29.67 3.189 28.034 2.91 25.968 C 2.637 23.954 2.637 21.372 2.637 18.086 L 2.637 17.915 C 2.637 14.63 2.637 12.047 2.908 10.032 C 3.189 7.967 3.772 6.329 5.063 5.042 C 6.359 3.755 8.003 3.174 10.078 2.897 C 12.102 2.625 14.695 2.625 17.997 2.625 Z M 18.083 11.25 C 14.338 11.25 11.302 14.272 11.302 18 C 11.302 21.728 14.338 24.75 18.083 24.75 C 21.828 24.75 24.864 21.728 24.864 18 C 24.864 14.272 21.828 11.25 18.083 11.25 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */"></path></svg>',
                      svgContentId: 3575211554,
                      withExternalLayout: !0,
                      ...Lt({ hrea27bUt: { svgContentId: 907120122 } }, q, u),
                    }),
                  M() &&
                    e(h, {
                      className: "framer-g3ul1v",
                      "data-framer-name": "mail",
                      layout: "position",
                      layoutDependency: n,
                      layoutId: "EcMcjNl3C",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36"><path d="M 22.382 4.184 C 24.661 4.241 26.495 4.286 27.964 4.544 C 29.503 4.812 30.752 5.327 31.809 6.392 C 32.861 7.452 33.372 8.69 33.635 10.208 C 33.886 11.655 33.923 13.451 33.971 15.675 L 33.972 15.762 C 34.004 17.258 34.004 18.743 33.972 20.238 L 33.971 20.325 C 33.923 22.55 33.886 24.345 33.635 25.793 C 33.372 27.311 32.861 28.548 31.809 29.609 C 30.752 30.672 29.503 31.188 27.964 31.458 C 26.495 31.713 24.661 31.761 22.382 31.818 L 22.296 31.82 C 19.377 31.895 16.487 31.895 13.569 31.82 L 13.482 31.817 C 11.203 31.761 9.37 31.715 7.901 31.457 C 6.361 31.188 5.111 30.674 4.056 29.609 C 3.004 28.548 2.493 27.311 2.23 25.793 C 1.979 24.345 1.941 22.55 1.893 20.325 L 1.892 20.238 C 1.86 18.746 1.86 17.254 1.892 15.762 L 1.893 15.675 C 1.941 13.451 1.979 11.655 2.23 10.208 C 2.493 8.69 3.004 7.452 4.056 6.392 C 5.111 5.328 6.361 4.812 7.901 4.542 C 9.37 4.287 11.203 4.241 13.482 4.182 L 13.569 4.181 C 16.487 4.106 19.377 4.106 22.296 4.181 Z M 11.031 11.782 C 10.686 11.562 10.249 11.548 9.891 11.746 C 9.533 11.943 9.31 12.321 9.309 12.731 C 9.309 13.142 9.531 13.52 9.89 13.717 L 14.286 16.327 C 15.587 17.1 16.711 17.625 17.932 17.625 C 19.154 17.625 20.277 17.1 21.578 16.327 L 25.975 13.717 C 26.333 13.52 26.555 13.142 26.555 12.731 C 26.554 12.321 26.332 11.943 25.973 11.746 C 25.615 11.548 25.178 11.562 24.833 11.782 L 20.437 14.391 C 19.175 15.141 18.504 15.375 17.932 15.375 C 17.36 15.375 16.689 15.139 15.428 14.391 L 11.031 11.781 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */"></path></svg>',
                      svgContentId: 3078783454,
                      withExternalLayout: !0,
                      ...Lt({ oY9Oepvq_: { svgContentId: 2242366367 } }, q, u),
                    }),
                  $() &&
                    e(h, {
                      className: "framer-8uhbzi",
                      "data-framer-name": "twitter",
                      layout: "position",
                      layoutDependency: n,
                      layoutId: "IGxBvpa6T",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36"><path d="M 16.965 12.357 C 16.794 8.454 19.978 4.875 24.11 4.875 C 25.73 4.875 27.225 5.412 28.425 6.315 L 32.986 5.637 C 33.405 5.575 33.823 5.751 34.07 6.093 C 34.317 6.436 34.351 6.886 34.158 7.262 L 31.246 12.95 C 30.748 23.072 22.346 31.125 12.055 31.125 C 8.597 31.125 5.307 30.371 2.449 28.725 C 2.024 28.481 1.805 27.992 1.908 27.514 C 2.011 27.036 2.412 26.68 2.901 26.631 C 3.959 26.525 5.559 26.222 6.864 25.748 C 7.524 25.508 8.038 25.253 8.366 25.002 L 8.452 24.933 C 3.879 19.926 2.272 12.258 4.171 5.84 C 4.297 5.417 4.658 5.107 5.097 5.045 C 5.535 4.983 5.969 5.182 6.207 5.553 C 8.633 9.335 12.607 12.143 16.966 12.357 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */"></path></svg>',
                      svgContentId: 3878125549,
                      withExternalLayout: !0,
                    }),
                ],
              }),
            }),
          }),
        }),
      }),
    });
  }),
  vi = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-F6VZV.framer-1wi24r9, .framer-F6VZV .framer-1wi24r9 { display: block; }",
    ".framer-F6VZV.framer-z14vn5 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-F6VZV .framer-19i8icw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 16px 16px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-F6VZV .framer-1v4p8tp, .framer-F6VZV .framer-g3ul1v, .framer-F6VZV .framer-8uhbzi { flex: none; height: 36px; position: relative; width: 36px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-F6VZV.framer-z14vn5, .framer-F6VZV .framer-19i8icw { gap: 0px; } .framer-F6VZV.framer-z14vn5 > *, .framer-F6VZV .framer-19i8icw > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-F6VZV.framer-z14vn5 > :first-child, .framer-F6VZV .framer-19i8icw > :first-child { margin-left: 0px; } .framer-F6VZV.framer-z14vn5 > :last-child, .framer-F6VZV .framer-19i8icw > :last-child { margin-right: 0px; } }",
  ],
  He = H(yi, vi, "framer-F6VZV"),
  We = He;
He.displayName = "Social/FocusIcon";
He.defaultProps = { height: 68, width: 68 };
Q(He, {
  variant: {
    options: ["ixQh3qpTV", "oY9Oepvq_", "hrea27bUt"],
    optionTitles: ["Twitter", "Mail", "Instagram"],
    title: "Variant",
    type: k.Enum,
  },
  ei62XrgAV: { title: "Link", type: k.Link },
});
W(He, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var qr = {};
ye(qr, { __FramerMetadata__: () => Qi, default: () => Oe });
var kr = gr(w),
  Cr = xr(w),
  bi = ["OLArY6Kvq", "phmJcfDEN"],
  ki = "framer-dEk0L",
  Ci = { OLArY6Kvq: "framer-v-1uqzqpv", phmJcfDEN: "framer-v-1uep5mz" };
function qi(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var Vi = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Li = { damping: 30, delay: 0, mass: 1, stiffness: 200, type: "spring" },
  _i = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.15,
    skewX: 0,
    skewY: 0,
    transition: Li,
  },
  ji = { delay: 0, duration: 0.15, ease: [0.12, 0.23, 0.5, 1], type: "tween" },
  Ii = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ji,
  },
  Ri = (a) => !a,
  Mi = (a, r) =>
    typeof a == "string" &&
    typeof r == "string" &&
    a.toLowerCase().includes(r.toLowerCase()),
  zi = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  Di = t(m),
  Ni = { Horizontal: "OLArY6Kvq", Vertical: "phmJcfDEN" },
  Ti = ({
    bg: a,
    click: r,
    company: i,
    companyChn: o,
    cursor: l,
    end: s,
    expand: p,
    height: b,
    id: _,
    major: d,
    majorChn: q,
    offset: j,
    title: u,
    titleChn: x,
    width: I,
    year: V,
    yearChn: n,
    ...y
  }) => {
    var c, M, $, K, g, se, L, J, ae, xe, Ce, mr;
    return {
      ...y,
      bBt0Y0dH0: a ?? y.bBt0Y0dH0,
      CRhbL2gw6: (c = i ?? y.CRhbL2gw6) !== null && c !== void 0 ? c : "OPPO",
      FAIPuZDH3:
        (M = x ?? y.FAIPuZDH3) !== null && M !== void 0
          ? M
          : "\u4EA4\u4E92\u8BBE\u8BA1\u5E08",
      fRXJRwGZj: l ?? y.fRXJRwGZj,
      gm_FjbD1y:
        ($ = d ?? y.gm_FjbD1y) !== null && $ !== void 0 ? $ : "Sociology",
      LBDUzGfXM:
        (K = q ?? y.LBDUzGfXM) !== null && K !== void 0
          ? K
          : "\u793E\u4F1A\u5B66",
      MCcxBvB9S:
        (g = u ?? y.MCcxBvB9S) !== null && g !== void 0
          ? g
          : "Interaction Designer",
      ns9AozcEI: (se = j ?? y.ns9AozcEI) !== null && se !== void 0 ? se : !0,
      oBPepH3jt: (L = o ?? y.oBPepH3jt) !== null && L !== void 0 ? L : "OPPO",
      PFpiGLFXx:
        (J = n ?? y.PFpiGLFXx) !== null && J !== void 0
          ? J
          : "2019 - \u81F3\u4ECA / \u4E0A\u6D77",
      qGSlDhFbo: r ?? y.qGSlDhFbo,
      SoGlaK5fL: (ae = p ?? y.SoGlaK5fL) !== null && ae !== void 0 ? ae : !0,
      variant:
        (Ce =
          (xe = Ni[y.variant]) !== null && xe !== void 0 ? xe : y.variant) !==
          null && Ce !== void 0
          ? Ce
          : "OLArY6Kvq",
      WaEMJlDaj:
        (mr = V ?? y.WaEMJlDaj) !== null && mr !== void 0
          ? mr
          : "2019 - Present / Shanghai",
      zHJ8c3doh: s ?? y.zHJ8c3doh,
    };
  },
  Fi = (a, r) =>
    a.layoutDependency ? r.join("-") + a.layoutDependency : r.join("-"),
  Bi = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      {
        style: l,
        className: s,
        layoutId: p,
        variant: b,
        CRhbL2gw6: _,
        oBPepH3jt: d,
        MCcxBvB9S: q,
        FAIPuZDH3: j,
        WaEMJlDaj: u,
        PFpiGLFXx: x,
        gm_FjbD1y: I,
        LBDUzGfXM: V,
        zHJ8c3doh: n,
        ns9AozcEI: y,
        qGSlDhFbo: c,
        bBt0Y0dH0: M,
        fRXJRwGZj: $,
        SoGlaK5fL: K,
        ...g
      } = Ti(a),
      {
        baseVariant: se,
        classNames: L,
        clearLoadingGesture: J,
        gestureHandlers: ae,
        gestureVariant: xe,
        isLoading: Ce,
        setGestureState: mr,
        setVariant: Zf,
        variants: na,
      } = G({
        cycleOrder: bi,
        defaultVariant: "OLArY6Kvq",
        variant: b,
        variantClassNames: Ci,
      }),
      ne = Fi(a, na),
      { activeVariantCallback: ei, delay: Yf } = ur(se),
      ri = ei(async (...dr) => {
        if ((c && (await c(...dr)) === !1) || (M && (await M(...dr)) === !1))
          return !1;
      }),
      ti = F(null),
      la = (dr) => (se === "phmJcfDEN" ? dr : !1),
      ai = Ri(y),
      sa = Mi(I, "Sociology"),
      oi = A(),
      ii = [wr, Pa],
      Gf = me();
    return e(E, {
      id: p ?? oi,
      children: e(Di, {
        animate: na,
        initial: !1,
        children: e(zi, {
          value: Vi,
          children: f(t.div, {
            ...g,
            ...ae,
            className: P(ki, ...ii, "framer-1uqzqpv", s, L),
            "data-framer-name": "Horizontal",
            layoutDependency: ne,
            layoutId: "OLArY6Kvq",
            ref: r ?? ti,
            style: { ...l },
            ...qi({ phmJcfDEN: { "data-framer-name": "Vertical" } }, se, xe),
            children: [
              f(t.div, {
                className: "framer-dhgplg",
                layoutDependency: ne,
                layoutId: "qo_A2DPMt",
                children: [
                  la(y) &&
                    e(t.div, {
                      className: "framer-1hyb4l8",
                      layoutDependency: ne,
                      layoutId: "SF3K8K1ea",
                      style: {
                        backgroundColor: "rgb(255, 255, 255)",
                        opacity: 0,
                      },
                    }),
                  e(t.div, {
                    className: "framer-odzsry",
                    "data-framer-cursor": $,
                    "data-highlight": !0,
                    layoutDependency: ne,
                    layoutId: "uuxvwW9K1",
                    onTap: ri,
                    style: {
                      backgroundColor:
                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    },
                    whileHover: _i,
                    whileTap: Ii,
                    children:
                      K &&
                      e(t.div, {
                        className: "framer-1ca9bap",
                        layoutDependency: ne,
                        layoutId: "xarI4zYkq",
                        children: e(h, {
                          className: "framer-rmkdvp",
                          "data-framer-name": "graphic",
                          layout: "position",
                          layoutDependency: ne,
                          layoutId: "r4c2XrUTr",
                          opacity: 1,
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><path d="M 6 2 L 6 10 M 10 6 L 2 6" fill="transparent" stroke-width="1.8" stroke="var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(235, 235, 234)) /* {&quot;name&quot;:&quot;Backdrop&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                          svgContentId: 12349437001,
                          withExternalLayout: !0,
                        }),
                      }),
                  }),
                  e(t.div, {
                    className: "framer-1j4brh5",
                    layoutDependency: ne,
                    layoutId: "pyprpvFT8",
                    style: {
                      backgroundColor:
                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    },
                  }),
                  la(ai) &&
                    e(t.div, {
                      className: "framer-1xn3ka3",
                      layoutDependency: ne,
                      layoutId: "Bbg_IYvZ9",
                      style: {
                        backgroundColor:
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                      },
                    }),
                  n &&
                    e(t.div, {
                      className: "framer-17l8b67",
                      layoutDependency: ne,
                      layoutId: "vlV5t7O7V",
                      style: {
                        backgroundColor:
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                    }),
                ],
              }),
              f(t.div, {
                className: "framer-1whb13m",
                layoutDependency: ne,
                layoutId: "Xhgmu4vM4",
                children: [
                  f(t.div, {
                    className: "framer-5yc1r",
                    layoutDependency: ne,
                    layoutId: "sf11MKAP8",
                    children: [
                      e(kr, {
                        __fromCanvasComponent: !0,
                        children: e(m, {
                          children: e(t.p, {
                            className: "framer-styles-preset-1wxnimg",
                            "data-styles-preset": "tvtD0bAK1",
                            children: "OPPO",
                          }),
                        }),
                        className: "framer-lwyinv",
                        fonts: ["Inter"],
                        layoutDependency: ne,
                        layoutId: "wbftmVSRc",
                        style: {
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: _,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      e(Cr, {
                        __fromCanvasComponent: !0,
                        children: e(m, {
                          children: e(t.p, {
                            className: "framer-styles-preset-1wxnimg",
                            "data-styles-preset": "tvtD0bAK1",
                            children: "OPPO",
                          }),
                        }),
                        className: "framer-1aeaqmv",
                        fonts: ["Inter"],
                        layoutDependency: ne,
                        layoutId: "eeoVVB6Ip",
                        style: {
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: d,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      e(kr, {
                        __fromCanvasComponent: !0,
                        children: e(m, {
                          children: e(t.p, {
                            className: "framer-styles-preset-1wxnimg",
                            "data-styles-preset": "tvtD0bAK1",
                            children: "Interaction Designer",
                          }),
                        }),
                        className: "framer-1cfko3p",
                        fonts: ["Inter"],
                        layoutDependency: ne,
                        layoutId: "yq_J4PGsg",
                        style: {
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: q,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      e(Cr, {
                        __fromCanvasComponent: !0,
                        children: e(m, {
                          children: e(t.p, {
                            className: "framer-styles-preset-1wxnimg",
                            "data-styles-preset": "tvtD0bAK1",
                            children: "Interaction Designer",
                          }),
                        }),
                        className: "framer-1nidqx9",
                        fonts: ["Inter"],
                        layoutDependency: ne,
                        layoutId: "AeScDIiy1",
                        style: {
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: j,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                  e(kr, {
                    __fromCanvasComponent: !0,
                    children: e(m, {
                      children: e(t.p, {
                        className: "framer-styles-preset-p7pc09",
                        "data-styles-preset": "hCbgbtQ8_",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)))",
                        },
                        children: "2019 - Present / Shanghai",
                      }),
                    }),
                    className: "framer-v99yag",
                    fonts: ["Inter"],
                    layoutDependency: ne,
                    layoutId: "gF1QCOO6D",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: u,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(Cr, {
                    __fromCanvasComponent: !0,
                    children: e(m, {
                      children: e(t.p, {
                        className: "framer-styles-preset-p7pc09",
                        "data-styles-preset": "hCbgbtQ8_",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)))",
                        },
                        children: "2019 - Present / Shanghai",
                      }),
                    }),
                    className: "framer-1gv3f9r",
                    fonts: ["Inter"],
                    layoutDependency: ne,
                    layoutId: "YoMMfHpKB",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: x,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  sa &&
                    e(kr, {
                      __fromCanvasComponent: !0,
                      children: e(m, {
                        children: e(t.p, {
                          className: "framer-styles-preset-p7pc09",
                          "data-styles-preset": "hCbgbtQ8_",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)))",
                          },
                          children: "Sociology",
                        }),
                      }),
                      className: "framer-1m2yzmr",
                      fonts: ["Inter"],
                      layoutDependency: ne,
                      layoutId: "fdXhKtP_J",
                      style: {
                        "--extracted-r6o4lv":
                          "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      text: I,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  sa &&
                    e(Cr, {
                      __fromCanvasComponent: !0,
                      children: e(m, {
                        children: e(t.p, {
                          className: "framer-styles-preset-p7pc09",
                          "data-styles-preset": "hCbgbtQ8_",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)))",
                          },
                          children: "Sociology",
                        }),
                      }),
                      className: "framer-17m2hoh",
                      fonts: ["Inter"],
                      layoutDependency: ne,
                      layoutId: "b2SWAbXh3",
                      style: {
                        "--extracted-r6o4lv":
                          "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      text: V,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Si = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-dEk0L.framer-1j11c9h, .framer-dEk0L .framer-1j11c9h { display: block; }",
    ".framer-dEk0L.framer-1uqzqpv { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 300px; justify-content: flex-start; overflow: visible; padding: 100px 0px 0px 0px; position: relative; width: 450px; }",
    ".framer-dEk0L .framer-dhgplg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-dEk0L .framer-1hyb4l8 { -webkit-user-select: none; flex: none; height: 7px; overflow: hidden; pointer-events: none; position: relative; user-select: none; width: 1px; }",
    ".framer-dEk0L .framer-odzsry { align-content: center; align-items: center; aspect-ratio: 1 / 1; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 20px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-dEk0L .framer-1ca9bap { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-dEk0L .framer-rmkdvp { flex: none; height: 12px; position: relative; width: 12px; }",
    ".framer-dEk0L .framer-1j4brh5 { flex: 1 0 0px; height: 2px; overflow: hidden; position: relative; width: 1px; }",
    ".framer-dEk0L .framer-1xn3ka3 { flex: none; height: 7px; overflow: hidden; position: relative; width: 2px; }",
    ".framer-dEk0L .framer-17l8b67 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 10px); overflow: hidden; position: relative; width: 10px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-dEk0L .framer-1whb13m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 450px; }",
    ".framer-dEk0L .framer-5yc1r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-dEk0L .framer-lwyinv, .framer-dEk0L .framer-1aeaqmv, .framer-dEk0L .framer-1cfko3p, .framer-dEk0L .framer-1nidqx9, .framer-dEk0L .framer-v99yag, .framer-dEk0L .framer-1gv3f9r, .framer-dEk0L .framer-1m2yzmr, .framer-dEk0L .framer-17m2hoh { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-dEk0L.framer-1uqzqpv, .framer-dEk0L .framer-dhgplg, .framer-dEk0L .framer-odzsry, .framer-dEk0L .framer-1ca9bap, .framer-dEk0L .framer-1whb13m, .framer-dEk0L .framer-5yc1r { gap: 0px; } .framer-dEk0L.framer-1uqzqpv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-dEk0L.framer-1uqzqpv > :first-child, .framer-dEk0L .framer-1whb13m > :first-child, .framer-dEk0L .framer-5yc1r > :first-child { margin-top: 0px; } .framer-dEk0L.framer-1uqzqpv > :last-child, .framer-dEk0L .framer-1whb13m > :last-child, .framer-dEk0L .framer-5yc1r > :last-child { margin-bottom: 0px; } .framer-dEk0L .framer-dhgplg > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-dEk0L .framer-dhgplg > :first-child, .framer-dEk0L .framer-odzsry > :first-child, .framer-dEk0L .framer-1ca9bap > :first-child { margin-left: 0px; } .framer-dEk0L .framer-dhgplg > :last-child, .framer-dEk0L .framer-odzsry > :last-child, .framer-dEk0L .framer-1ca9bap > :last-child { margin-right: 0px; } .framer-dEk0L .framer-odzsry > *, .framer-dEk0L .framer-1ca9bap > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-dEk0L .framer-1whb13m > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-dEk0L .framer-5yc1r > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }",
    ".framer-dEk0L.framer-v-1uep5mz.framer-1uqzqpv { flex-direction: row; height: 200px; padding: 0px; width: 400px; }",
    ".framer-dEk0L.framer-v-1uep5mz .framer-dhgplg { flex-direction: column; height: 100%; width: min-content; }",
    ".framer-dEk0L.framer-v-1uep5mz .framer-1hyb4l8 { order: 0; }",
    ".framer-dEk0L.framer-v-1uep5mz .framer-odzsry { order: 2; }",
    ".framer-dEk0L.framer-v-1uep5mz .framer-1j4brh5 { height: 1px; order: 3; width: 2px; }",
    ".framer-dEk0L.framer-v-1uep5mz .framer-1xn3ka3 { order: 1; }",
    ".framer-dEk0L.framer-v-1uep5mz .framer-17l8b67 { order: 4; }",
    ".framer-dEk0L.framer-v-1uep5mz .framer-1whb13m { flex: 1 0 0px; width: 1px; }",
    ".framer-dEk0L.framer-v-1uep5mz .framer-5yc1r { width: 100%; }",
    ".framer-dEk0L.framer-v-1uep5mz .framer-lwyinv, .framer-dEk0L.framer-v-1uep5mz .framer-1cfko3p, .framer-dEk0L.framer-v-1uep5mz .framer-v99yag, .framer-dEk0L.framer-v-1uep5mz .framer-1m2yzmr { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-dEk0L.framer-v-1uep5mz.framer-1uqzqpv, .framer-dEk0L.framer-v-1uep5mz .framer-dhgplg { gap: 0px; } .framer-dEk0L.framer-v-1uep5mz.framer-1uqzqpv > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-dEk0L.framer-v-1uep5mz.framer-1uqzqpv > :first-child { margin-left: 0px; } .framer-dEk0L.framer-v-1uep5mz.framer-1uqzqpv > :last-child { margin-right: 0px; } .framer-dEk0L.framer-v-1uep5mz .framer-dhgplg > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-dEk0L.framer-v-1uep5mz .framer-dhgplg > :first-child { margin-top: 0px; } .framer-dEk0L.framer-v-1uep5mz .framer-dhgplg > :last-child { margin-bottom: 0px; } }",
    ...vr,
    ...Qa,
  ],
  Xe = H(Bi, Si, "framer-dEk0L"),
  Oe = Xe;
Xe.displayName = "About/Timeline";
Xe.defaultProps = { height: 300, width: 450 };
Q(Xe, {
  variant: {
    options: ["OLArY6Kvq", "phmJcfDEN"],
    optionTitles: ["Horizontal", "Vertical"],
    title: "Variant",
    type: k.Enum,
  },
  CRhbL2gw6: {
    defaultValue: "OPPO",
    displayTextArea: !1,
    title: "Company",
    type: k.String,
  },
  oBPepH3jt: {
    defaultValue: "OPPO",
    displayTextArea: !1,
    title: "Company_Chn",
    type: k.String,
  },
  MCcxBvB9S: {
    defaultValue: "Interaction Designer",
    displayTextArea: !1,
    title: "Title",
    type: k.String,
  },
  FAIPuZDH3: {
    defaultValue: "\u4EA4\u4E92\u8BBE\u8BA1\u5E08",
    title: "Title_Chn",
    type: k.String,
  },
  WaEMJlDaj: {
    defaultValue: "2019 - Present / Shanghai",
    displayTextArea: !1,
    title: "Year",
    type: k.String,
  },
  PFpiGLFXx: {
    defaultValue: "2019 - \u81F3\u4ECA / \u4E0A\u6D77",
    title: "Year_Chn",
    type: k.String,
  },
  gm_FjbD1y: {
    defaultValue: "Sociology",
    displayTextArea: !1,
    title: "Major",
    type: k.String,
  },
  LBDUzGfXM: {
    defaultValue: "\u793E\u4F1A\u5B66",
    title: "Major_Chn",
    type: k.String,
  },
  zHJ8c3doh: { defaultValue: !1, title: "End", type: k.Boolean },
  ns9AozcEI: { defaultValue: !0, title: "Offset", type: k.Boolean },
  qGSlDhFbo: { title: "Click", type: k.EventHandler },
  bBt0Y0dH0: { title: "Bg", type: k.EventHandler },
  fRXJRwGZj: { title: "Cursor", type: k.CustomCursor },
  SoGlaK5fL: { defaultValue: !0, title: "Expand", type: k.Boolean },
});
W(
  Xe,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...le(yr),
    ...le(Sa),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Qi = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerOqdcKJw4g",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "450",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"phmJcfDEN":{"layout":["fixed","fixed"]}}}',
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "300",
        framerVariables:
          '{"CRhbL2gw6":"company","oBPepH3jt":"companyChn","MCcxBvB9S":"title","FAIPuZDH3":"titleChn","WaEMJlDaj":"year","PFpiGLFXx":"yearChn","gm_FjbD1y":"major","LBDUzGfXM":"majorChn","zHJ8c3doh":"end","ns9AozcEI":"offset","qGSlDhFbo":"click","bBt0Y0dH0":"bg","fRXJRwGZj":"cursor","SoGlaK5fL":"expand"}',
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var Ft = {};
ye(Ft, { __FramerMetadata__: () => T0, default: () => Tr });
var ge = { type: "spring", stiffness: 170, damping: 28 },
  S = { tablet: "(max-width: 1199px)", phone: "(max-width: 810px)" };
var Vr = {
  in: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0 },
  },
  out: { opacity: 0, scale: 0.65, filter: "blur(8px)", transition: ge },
  out_veritical: { opacity: 0, scale: 1, filter: "blur(8px)", transition: ge },
};
function Ja(a) {
  return T((r, i) => {
    let [o, l] = X(),
      s = N(S.tablet),
      { scrollY: p } = Ae(),
      [b, _] = Le(0);
    Pe(p, "change", (I) => {
      _(I);
    });
    let d = cr(0),
      q = F(null),
      [j, u] = Le(0),
      x = da(d, { stiffness: 500, damping: 60 });
    return (
      Ve(() => {
        let I = q.current,
          V = s || o.layout ? I.offsetTop : I.offsetLeft,
          n =
            s || o.layout
              ? I.offsetTop + I.offsetHeight
              : I.offsetLeft + I.offsetWidth,
          y = s || o.layout ? b : o.about_layoutOffset;
        d.set(pr(y, [V, n], [0, 1])),
          u(pr(y, [V, n], [0, 1])),
          l({
            about_scroll_progress1: x,
            about_scroll_progress2: pr(y, [V, n], [0, 1]),
          });
      }, [o.about_layoutOffset, b]),
      e(a, {
        ...r,
        ref: q,
        style: {
          ...r.style,
          flexDirection: s || o.layout ? "column" : "row",
          gap: s ? 260 : o.layout ? 270 : 200,
        },
      })
    );
  });
}
function $a(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet);
    return e(a, {
      ...r,
      variants: Vr,
      initial: { opacity: 1, y: 0 },
      animate:
        i.transition === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: ge,
    });
  };
}
function eo(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet);
    return e(a, {
      ...r,
      variants: Vr,
      initial: { opacity: 1, y: 0 },
      animate:
        i.transition === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
      transition: ge,
    });
  };
}
function ro(a) {
  return (r) => {
    let [i, o] = X();
    return e(a, {
      ...r,
      variants: Vr,
      initial: { opacity: 1, y: 0 },
      animate:
        i.transition === 1
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.9, filter: "blur(5px)" },
      transition: ge,
    });
  };
}
function to(a) {
  return T((r, i) => {
    let { style: o } = r,
      [l, s] = X(),
      { viewW: p } = _e(),
      b = F(null);
    Ve(() => {
      let u = (x) => {
        let I = b.current,
          V = 10;
        !l.layout && l.wheel
          ? Math.abs(x.deltaX) > Math.abs(x.deltaY) + V
            ? console.log("Horizontal Scroll:", x.deltaX)
            : Math.abs(x.deltaY) > Math.abs(x.deltaX) + V &&
              (x.preventDefault(),
              I.scrollBy({ left: x.deltaY * 10, behavior: "auto" }),
              console.log("Vertical Scroll:", x.deltaY))
          : x.shiftKey &&
            (I.scrollBy({ left: x.deltaY, behavior: "auto" }),
            console.log("Shift + Vertical Scroll:", x.deltaY));
      };
      return (
        O.addEventListener("wheel", u, { passive: !1 }),
        () => {
          O.removeEventListener("wheel", u);
        }
      );
    }, [l.wheel]);
    let _ = N(S.tablet),
      d = N(S.phone),
      q = {
        horizontal: {
          flexDirection: "row",
          height: "calc(100vh)",
          gap: 0,
          ...o,
        },
        vertical: {
          flexDirection: "column",
          height: "max-content",
          gap: 100,
          ...o,
        },
      };
    return e(a, {
      ...r,
      layout: !0,
      ref: b,
      onScroll: (u) => {
        s({
          about_layoutOffset: u.target.scrollLeft,
          about_layoutWidth: u.target.scrollWidth,
        });
      },
      style: _ || l.layout ? q.vertical : q.horizontal,
      variants: Vr,
      initial: "in",
      animate:
        l.transition === 1 ? "in" : l.layout || _ ? "out_veritical" : "out",
    });
  });
}
function ao(a) {
  return (r) => {
    let { style: i, ...o } = r,
      [l, s] = X(),
      p = N(S.tablet),
      b = {
        horizontal: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "max-content",
          height: "max-content",
          paddingLeft: 300,
          paddingRight: 300,
          ...i,
        },
        vertical: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "max-content",
          paddingLeft: 10,
          paddingRight: 10,
          ...i,
        },
      };
    return e(a, {
      ...r,
      layout: !0,
      style: p || l.layout ? b.vertical : b.horizontal,
    });
  };
}
function oo(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet);
    Ve(() => {
      let p = O.location.pathname;
      p === "/"
        ? o({ transition: 0 })
        : p === "/about"
          ? o({ transition: 1 })
          : p.includes("/blog")
            ? o({ transition: 2 })
            : o({ transition: 1 });
    }, [o]);
    let s = {
      horizontal: { position: "absolute", width: "100%" },
      vertical: { position: "relative", width: "100%" },
    };
    return e(a, {
      ...r,
      layout: !0,
      style: l || i.layout ? s.vertical : s.horizontal,
      initial: !1,
      transition: {
        duration: l ? 0 : 0.8,
        ease: [0.99, 0, 0.16, 1],
        delay: l ? 0 : 0.2,
      },
    });
  };
}
function io(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet);
    return e(a, {
      ...r,
      layout: !0,
      style: { ...r.style, flexDirection: l || i.layout ? "column" : "row" },
    });
  };
}
function no(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet);
    return e(a, {
      ...r,
      layout: !0,
      style: {
        ...r.style,
        width: l ? 300 : i.layout ? "100%" : "max-content",
        flexDirection: l || i.layout ? "column" : "row",
      },
    });
  };
}
function lo(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet);
    return e(a, {
      ...r,
      variant: l || i.layout ? "Vertical" : "Horizontal",
      bg: () => o({ about_zoom: !0 }),
    });
  };
}
function so(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet);
    return e(a, { ...r, variant: l || i.layout ? "Vertical" : "Horizontal" });
  };
}
function fo(a) {
  return T((r, i) => {
    let [o, l] = X(),
      s = F(null),
      p = N(S.tablet);
    return e(a, {
      ...r,
      ref: s,
      style: { ...r.style, originX: 0.5, originY: 0.5 },
      initial: { opacity: 1, scale: 1 },
      animate: {
        opacity: o.setting ? 0.6 : 1,
        scale: o.setting
          ? p || o.layout
            ? 1
            : o.about_zoom
              ? 0.8
              : 0.9
          : o.about_zoom
            ? p || o.layout
              ? 1
              : 0.9
            : 1,
        transition: { ...ge, delay: 0.15 },
      },
    });
  });
}
function mo(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet),
      s = N(S.phone);
    return e(a, {
      ...r,
      variant: s
        ? "Vertical_Mobile"
        : l || i.layout
          ? "Vertical_Desktop"
          : "Horizontal",
      openLayer: () => o({ about_app_overlayer: !0 }),
    });
  };
}
function co(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet),
      s = N(S.phone);
    return e(a, {
      ...r,
      variant:
        i.about_scroll_progress2 >= 0.082
          ? s
            ? "Vertical_Mobile"
            : i.layout
              ? "Vertical"
              : "Default"
          : s
            ? "Vertical_Mobile_Collasped"
            : i.layout
              ? "Vertical_Collasped"
              : "Collasped",
    });
  };
}
function po(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet),
      s = N(S.phone);
    return e(a, {
      ...r,
      variant:
        i.about_scroll_progress2 >= 0.177
          ? s
            ? "Vertical_Mobile"
            : i.layout
              ? "Vertical"
              : "Default"
          : s
            ? "Vertical_Mobile_Collasped"
            : i.layout
              ? "Vertical_Collasped"
              : "Collasped",
    });
  };
}
function ho(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet),
      s = N(S.phone);
    return e(a, {
      ...r,
      variant:
        i.about_scroll_progress2 >= 0.3
          ? s
            ? "Vertical_Mobile"
            : i.layout
              ? "Vertical"
              : "Default"
          : s
            ? "Vertical_Mobile_Collasped"
            : i.layout
              ? "Vertical_Collasped"
              : "Collasped",
    });
  };
}
function uo(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet),
      s = N(S.phone);
    return e(a, {
      ...r,
      variant:
        i.about_scroll_progress2 >= 0.407
          ? s
            ? "Vertical_Mobile"
            : i.layout
              ? "Vertical"
              : "Default"
          : s
            ? "Vertical_Mobile_Collasped"
            : i.layout
              ? "Vertical_Collasped"
              : "Collasped",
    });
  };
}
function go(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet),
      s = N(S.phone);
    return e(a, {
      ...r,
      variant:
        i.about_scroll_progress2 >= 0.52
          ? s
            ? "Vertical_Mobile"
            : i.layout
              ? "Vertical"
              : "Default"
          : s
            ? "Vertical_Mobile_Collasped"
            : i.layout
              ? "Vertical_Collasped"
              : "Collasped",
    });
  };
}
function xo(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet),
      s = N(S.phone);
    return e(a, {
      ...r,
      variant:
        i.about_scroll_progress2 >= 0.69
          ? s
            ? "Vertical_Mobile"
            : i.layout
              ? "Vertical"
              : "Default"
          : s
            ? "Vertical_Mobile_Collasped"
            : i.layout
              ? "Vertical_Collasped"
              : "Collasped",
    });
  };
}
function yo(a) {
  return (r) => {
    let [i, o] = X(),
      l = N(S.tablet),
      s = N(S.phone);
    return e(a, {
      ...r,
      variant:
        i.about_scroll_progress2 >= 0.85
          ? s
            ? "Vertical_Mobile"
            : i.layout
              ? "Vertical"
              : "Default"
          : s
            ? "Vertical_Mobile_Collasped"
            : i.layout
              ? "Vertical_Collasped"
              : "Collasped",
    });
  };
}
function vo(a) {
  return (r) => {
    let [i, o] = X();
    return e(a, {
      ...r,
      style: { ...r.style },
      initial: {
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
      },
      animate: {
        backdropFilter: i.about_zoom ? "blur(8px)" : "blur(0px)",
        WebkitBackdropFilter: i.about_zoom ? "blur(8px)" : "blur(0px)",
      },
      transition: { delay: 0.2 },
      onClick: () => o({ about_zoom: !1 }),
    });
  };
}
function wo(a) {
  return (r) => {
    let [i, o] = X();
    return e(a, {
      ...r,
      style: { ...r.style },
      initial: { scale: 1 },
      animate: {
        scale: i.setting ? 0.9 : 1,
        transition: { ...ge, delay: 0.15 },
      },
    });
  };
}
function bo(a) {
  return (r) => {
    let { style: i, ...o } = r,
      [l, s] = X();
    return e(a, { ...o, close: () => s({ about_zoom: !1 }) });
  };
}
function ko(a) {
  return (r) => {
    let [i, o] = X(),
      { viewW: l, viewH: s } = _e(),
      p = N(S.tablet),
      { scrollY: b } = Ae(),
      [_, d] = Le(0);
    Pe(b, "change", (j) => {
      d(j);
    });
    let q = {
      show: { scale: 1, opacity: 1, filter: "blur(0px)" },
      hide: { scale: 0.75, opacity: 0, filter: "blur(6px)" },
    };
    return e(a, {
      ...r,
      style: { ...r.style },
      variants: q,
      initial: "show",
      animate:
        p || i.layout
          ? _ >= 0.5 * s
            ? "show"
            : "hide"
          : i.about_layoutOffset >= 0.3 * l
            ? "show"
            : "hide",
      transition: ge,
    });
  };
}
function Co(a) {
  return (r) => {
    let [i, o] = X(),
      { viewW: l, viewH: s } = _e(),
      p = N(S.tablet),
      b = N(S.phone),
      _ = {
        horizontal: { width: p ? 1 : 0.2 * l, height: p ? 0.1 * s : 1 },
        vertical: { width: 1, height: 0.1 * s },
      };
    return e(a, {
      ...r,
      layout: !0,
      style: i.layout ? _.vertical : _.horizontal,
    });
  };
}
function qo(a) {
  return (r) => {
    let [i, o] = X(),
      { viewH: l } = _e(),
      s = N(S.tablet),
      { scrollY: p } = Ae(),
      [b, _] = Le(0);
    return (
      Pe(p, "change", (d) => {
        _(d);
      }),
      e(a, {
        ...r,
        style: {
          ...r.style,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        },
        initial: { opacity: 0, y: 0 },
        animate: {
          opacity:
            i.transition === 1
              ? s
                ? b >= 0.3 * l
                  ? 1
                  : 0
                : i.layout && b >= 0.3 * l
                  ? 1
                  : 0
              : 0,
          y: i.transition === 1 ? 0 : -20,
        },
        transition: ge,
      })
    );
  };
}
function Vo(a) {
  return (r) => {
    let [i, o] = X(),
      { viewH: l, viewW: s } = _e(),
      p = N(S.tablet),
      { scrollY: b } = Ae(),
      [_, d] = Le(0);
    return (
      Pe(b, "change", (q) => {
        d(q);
      }),
      e(a, {
        ...r,
        style: {
          ...r.style,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        },
        initial: { opacity: 0, y: 0 },
        animate: {
          width: p ? 122 : 311,
          opacity:
            i.transition === 1
              ? p
                ? _ >= 0.3 * l
                  ? 1
                  : 0
                : i.layout && _ >= 0.3 * l
                  ? 1
                  : 0
              : 0,
          y: i.transition === 1 ? 0 : -20,
        },
        transition: ge,
      })
    );
  };
}
var Lo = { tablet: "(max-width: 1199px)", phone: "(max-width: 810px)" };
function Ne(a) {
  let { color: r } = a,
    [i, o] = X(),
    l = N(Lo.tablet),
    s = N(Lo.phone);
  return e("div", {
    style: Pi,
    children: e("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      style: { overflow: "visible" },
      width: "100%",
      height: "100%",
      children: e(t.path, {
        d: "M 3 190.511 C 294.316 93.158 358.316 352.526 647 370.5 C 935.684 388.474 1056.188 -17.819 1341.5 3.5 C 1626.812 24.819 1646.012 287.78 1878.011 388.978 C 2110.01 490.175 2424.41 200.098 2700 160.5 C 2975.59 120.902 3058.743 312.731 2916 418",
        fill: "transparent",
        strokeWidth: "5",
        stroke: r,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "12, 16",
        pathLength: "1",
        style: { pathLength: i.about_scroll_progress1, originX: 0, originY: 0 },
      }),
    }),
  });
}
var Pi = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "visible",
};
Ne.defaultProps = { color: "#000000" };
Q(Ne, { color: { type: k.Color } });
var _t = {};
ye(_t, { __FramerMetadata__: () => en, default: () => Lr });
var Ei = oe(w),
  Ui = ie(w),
  Hi = [
    "WjH4tVh5M",
    "lGTMO5YF9",
    "QRB3pHpUe",
    "R2eC3qcCw",
    "ycBcJs_wL",
    "AuMh4DWCt",
  ],
  Wi = "framer-Aomj4",
  Xi = {
    AuMh4DWCt: "framer-v-o73gkj",
    lGTMO5YF9: "framer-v-qhstwt",
    QRB3pHpUe: "framer-v-163aa4q",
    R2eC3qcCw: "framer-v-11e3zkv",
    WjH4tVh5M: "framer-v-158sena",
    ycBcJs_wL: "framer-v-1jei6z8",
  };
function _o(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var Oi = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var Zi = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  Yi = {
    Collasped: "lGTMO5YF9",
    Default: "WjH4tVh5M",
    Vertical_Collasped: "R2eC3qcCw",
    Vertical_Mobile_Collasped: "AuMh4DWCt",
    Vertical_Mobile: "ycBcJs_wL",
    Vertical: "QRB3pHpUe",
  },
  Gi = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = Yi[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "WjH4tVh5M",
    };
  },
  Ki = (a, r) => r.join("-") + a.layoutDependency,
  Ji = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = Gi(a),
      {
        baseVariant: d,
        classNames: q,
        gestureVariant: j,
        setGestureState: u,
        setVariant: x,
        transition: I,
        variants: V,
      } = G({
        cycleOrder: Hi,
        defaultVariant: "WjH4tVh5M",
        transitions: Oi,
        variant: b,
        variantClassNames: Xi,
      }),
      n = Ki(a, V),
      y = F(null),
      c = A(),
      M = [pe];
    return e(E, {
      id: p ?? c,
      children: e(Zi, {
        value: I,
        children: f(t.div, {
          ..._,
          animate: V,
          className: P(Wi, ...M, "framer-158sena", s, q),
          "data-framer-name": "Default",
          initial: b,
          layoutDependency: n,
          layoutId: "WjH4tVh5M",
          onHoverEnd: () => u({ isHovered: !1 }),
          onHoverStart: () => u({ isHovered: !0 }),
          onTap: () => u({ isPressed: !1 }),
          onTapCancel: () => u({ isPressed: !1 }),
          onTapStart: () => u({ isPressed: !0 }),
          ref: r ?? y,
          style: { opacity: 1, ...l },
          variants: {
            AuMh4DWCt: { opacity: 0.15 },
            lGTMO5YF9: { opacity: 0.15 },
            R2eC3qcCw: { opacity: 0.15 },
          },
          ..._o(
            {
              AuMh4DWCt: { "data-framer-name": "Vertical_Mobile_Collasped" },
              lGTMO5YF9: { "data-framer-name": "Collasped" },
              QRB3pHpUe: { "data-framer-name": "Vertical" },
              R2eC3qcCw: { "data-framer-name": "Vertical_Collasped" },
              ycBcJs_wL: { "data-framer-name": "Vertical_Mobile" },
            },
            d,
            j,
          ),
          children: [
            f(t.div, {
              className: "framer-o77npp",
              "data-border": !0,
              layoutDependency: n,
              layoutId: "eKQUZBv3n",
              style: {
                "--border-bottom-width": "2px",
                "--border-color":
                  'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
              children: [
                e(Ei, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children:
                        "The process of bringing concepts to the 3D world is exciting and challenging, and I'll be utilizing Blender and the physics renderer to see how they perform in real environments.",
                    }),
                  }),
                  className: "framer-1851viw",
                  layoutDependency: n,
                  layoutId: "xYhq4pnpw",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(Ui, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children:
                        "\u5C06\u6982\u5FF5\u6620\u5C04\u5230\u4E09\u7EF4\u73B0\u5B9E\u4E16\u754C\u7684\u8FC7\u7A0B\u5145\u6EE1\u6FC0\u52A8\u4E0E\u6311\u6218\uFF0C\u6211\u4F1A\u5229\u7528 Blender \u548C\u7269\u7406\u6E32\u67D3\u5668\u6765\u770B\u770B\u5B83\u4EEC\u5728\u771F\u5B9E\u73AF\u5883\u4E2D\u7684\u8868\u73B0\u3002",
                    }),
                  }),
                  className: "framer-17ppm8m",
                  layoutDependency: n,
                  layoutId: "FBpgJhQoc",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ],
            }),
            e(h, {
              className: "framer-upu7uz",
              layout: "position",
              layoutDependency: n,
              layoutId: "d6DhZY3ds",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 71 93"><path d="M 6.512 6.526 L 6.512 65.263 L 63.488 39.158" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 6.512 65.263 L 63.488 87.289" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 6.512 0 C 10.108 0 13.023 2.922 13.023 6.526 C 13.023 10.131 10.108 13.053 6.512 13.053 C 2.915 13.053 0 10.131 0 6.526 C 0 2.922 2.915 0 6.512 0 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 63.488 32.632 C 67.085 32.632 70 35.554 70 39.158 C 70 42.762 67.085 45.684 63.488 45.684 C 59.892 45.684 56.977 42.762 56.977 39.158 C 56.977 35.554 59.892 32.632 63.488 32.632 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 63.488 79.947 C 67.085 79.947 70 82.869 70 86.474 C 70 90.078 67.085 93 63.488 93 C 59.892 93 56.977 90.078 56.977 86.474 C 56.977 82.869 59.892 79.947 63.488 79.947 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
              svgContentId: 3155920934,
              withExternalLayout: !0,
              ..._o(
                {
                  AuMh4DWCt: { svgContentId: 1425836794 },
                  QRB3pHpUe: { svgContentId: 4157204056 },
                  R2eC3qcCw: { svgContentId: 4157204056 },
                  ycBcJs_wL: { svgContentId: 1425836794 },
                },
                d,
                j,
              ),
            }),
            f(t.div, {
              className: "framer-htxyc1",
              "data-border": !0,
              layoutDependency: n,
              layoutId: "YJzdl1xXM",
              style: {
                "--border-bottom-width": "2px",
                "--border-color":
                  'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                backgroundColor:
                  "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              },
              children: [
                e(h, {
                  className: "framer-rfos4n",
                  "data-framer-name": "graphic",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "OlTwWRgkm",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 2.857 2.937 C 4.577 1.085 17.511 5.621 17.5 7.278 C 17.488 9.155 12.449 9.733 11.053 10.125 C 10.213 10.36 9.987 10.602 9.794 11.483 C 8.917 15.471 8.475 17.454 7.472 17.5 C 5.872 17.57 1.178 4.743 2.856 2.937 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="8.333333333333334" stroke-dasharray=""></path></svg>',
                  svgContentId: 892050229,
                  withExternalLayout: !0,
                }),
                e(h, {
                  className: "framer-ym0p9p",
                  "data-framer-name": "graphic",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "W4kwqpSPy",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 11.25 9 C 11.25 9.414 11.586 9.75 12 9.75 C 12.414 9.75 12.75 9.414 12.75 9 Z M 14.396 6.445 C 14.642 6.779 15.111 6.85 15.445 6.604 C 15.779 6.358 15.85 5.889 15.604 5.555 Z M 8.396 5.555 C 8.15 5.889 8.221 6.358 8.555 6.604 C 8.889 6.85 9.358 6.779 9.604 6.445 Z M 12.75 9 L 12.75 3 L 11.25 3 L 11.25 9 Z M 12 3.75 C 11.89 3.75 11.866 3.71 11.969 3.771 C 12.051 3.821 12.164 3.906 12.306 4.031 C 12.587 4.28 12.913 4.626 13.23 4.991 C 13.628 5.452 14.01 5.927 14.374 6.415 L 14.391 6.438 L 14.395 6.444 L 14.396 6.444 C 14.798 6.147 15.201 5.851 15.604 5.555 L 15.602 5.552 C 15.6 5.55 15.598 5.547 15.596 5.545 L 15.576 5.518 C 15.464 5.367 15.35 5.218 15.234 5.07 C 14.953 4.709 14.662 4.355 14.363 4.008 C 14.032 3.619 13.676 3.251 13.299 2.907 C 13.126 2.751 12.94 2.61 12.743 2.487 C 12.573 2.384 12.308 2.25 12 2.25 Z M 9 6 L 9.604 6.445 L 9.604 6.443 C 9.606 6.443 9.607 6.44 9.609 6.438 C 9.637 6.399 9.666 6.361 9.695 6.323 C 10.039 5.868 10.397 5.424 10.77 4.992 C 11.087 4.626 11.413 4.28 11.694 4.031 C 11.799 3.935 11.911 3.848 12.031 3.771 C 12.134 3.709 12.11 3.75 12 3.75 L 12 2.25 C 11.692 2.25 11.426 2.384 11.257 2.487 C 11.06 2.61 10.874 2.751 10.701 2.907 C 10.346 3.22 9.971 3.624 9.637 4.008 C 9.207 4.505 8.796 5.018 8.404 5.545 L 8.398 5.552 L 8.397 5.554 L 8.397 5.555 Z M 9 12.75 C 9.414 12.75 9.75 12.414 9.75 12 C 9.75 11.586 9.414 11.25 9 11.25 Z M 5.555 15.604 C 5.889 15.85 6.358 15.779 6.604 15.445 C 6.85 15.111 6.779 14.642 6.445 14.396 Z M 6.445 9.604 C 6.779 9.358 6.85 8.889 6.604 8.555 C 6.358 8.221 5.889 8.15 5.555 8.396 Z M 9 11.25 L 3 11.25 L 3 12.75 L 9 12.75 Z M 2.25 12 C 2.25 12.307 2.384 12.573 2.487 12.743 C 2.601 12.933 2.751 13.123 2.907 13.299 C 3.22 13.653 3.624 14.029 4.008 14.363 C 4.508 14.795 5.024 15.209 5.554 15.603 L 5.555 15.603 L 6 15 L 6.445 14.396 L 6.443 14.396 C 6.441 14.394 6.44 14.393 6.438 14.391 L 6.414 14.374 C 6.273 14.268 6.132 14.16 5.993 14.051 C 5.652 13.786 5.319 13.512 4.992 13.23 C 4.653 12.942 4.332 12.633 4.031 12.305 C 3.935 12.201 3.848 12.088 3.771 11.969 C 3.709 11.866 3.75 11.889 3.75 11.999 L 2.25 11.999 Z M 6 9 L 5.555 8.396 L 5.552 8.398 L 5.545 8.404 C 5.503 8.435 5.461 8.466 5.419 8.498 C 4.937 8.863 4.467 9.243 4.009 9.638 C 3.624 9.971 3.22 10.346 2.907 10.701 C 2.751 10.874 2.61 11.06 2.487 11.257 C 2.384 11.427 2.25 11.692 2.25 12 L 3.75 12 C 3.75 12.11 3.71 12.134 3.771 12.031 C 3.848 11.912 3.935 11.799 4.031 11.694 C 4.28 11.412 4.626 11.087 4.991 10.77 C 5.461 10.364 5.945 9.975 6.443 9.605 L 6.445 9.604 Z M 15 11.25 C 14.586 11.25 14.25 11.586 14.25 12 C 14.25 12.414 14.586 12.75 15 12.75 Z M 18.445 8.396 C 18.111 8.15 17.642 8.221 17.396 8.555 C 17.15 8.889 17.221 9.358 17.555 9.604 Z M 17.555 14.396 C 17.221 14.642 17.15 15.111 17.396 15.445 C 17.642 15.779 18.111 15.85 18.445 15.604 Z M 21 11.25 L 15 11.25 L 15 12.75 L 21 12.75 Z M 21.75 12 C 21.75 11.692 21.616 11.426 21.513 11.257 C 21.39 11.06 21.249 10.874 21.093 10.701 C 20.78 10.346 20.376 9.971 19.992 9.637 C 19.535 9.242 19.064 8.862 18.581 8.498 L 18.482 8.424 C 18.473 8.417 18.464 8.411 18.455 8.404 L 18.448 8.398 C 18.447 8.397 18.446 8.397 18.445 8.396 L 18 9 L 17.555 9.604 L 17.557 9.604 C 17.557 9.606 17.56 9.607 17.562 9.609 L 17.586 9.626 C 17.728 9.732 17.868 9.839 18.007 9.949 C 18.282 10.163 18.647 10.456 19.008 10.769 C 19.374 11.087 19.72 11.412 19.969 11.694 C 20.094 11.836 20.179 11.949 20.229 12.031 C 20.291 12.134 20.25 12.11 20.25 12 Z M 18 15 L 18.445 15.604 L 18.448 15.602 C 18.459 15.593 18.47 15.584 18.482 15.576 L 18.581 15.502 C 19.064 15.138 19.534 14.758 19.991 14.362 C 20.376 14.029 20.78 13.654 21.093 13.299 C 21.249 13.127 21.39 12.94 21.513 12.743 C 21.616 12.573 21.75 12.308 21.75 12 L 20.25 12 C 20.25 11.89 20.29 11.866 20.229 11.969 C 20.179 12.051 20.095 12.164 19.969 12.306 C 19.72 12.587 19.374 12.913 19.009 13.23 C 18.539 13.636 18.055 14.024 17.557 14.395 L 17.555 14.396 Z M 12.75 15 C 12.75 14.586 12.414 14.25 12 14.25 C 11.586 14.25 11.25 14.586 11.25 15 Z M 9.604 17.555 C 9.358 17.221 8.889 17.15 8.555 17.396 C 8.221 17.642 8.15 18.111 8.396 18.445 Z M 15.604 18.445 C 15.85 18.111 15.779 17.642 15.445 17.396 C 15.111 17.15 14.642 17.221 14.396 17.555 Z M 12.75 21 L 12.75 15 L 11.25 15 L 11.25 21 Z M 12 20.25 C 12.11 20.25 12.134 20.29 12.031 20.229 C 11.911 20.152 11.799 20.065 11.694 19.969 C 11.366 19.668 11.058 19.348 10.77 19.009 C 10.397 18.577 10.038 18.133 9.695 17.677 L 9.626 17.586 L 9.609 17.562 C 9.608 17.56 9.606 17.559 9.605 17.557 L 9.604 17.555 C 9.202 17.852 8.799 18.149 8.396 18.445 L 8.398 18.448 L 8.404 18.455 L 8.424 18.482 C 8.536 18.633 8.65 18.782 8.766 18.93 C 8.991 19.218 9.3 19.604 9.637 19.992 C 9.971 20.376 10.347 20.78 10.701 21.093 C 10.878 21.249 11.067 21.399 11.257 21.513 C 11.427 21.616 11.692 21.75 12 21.75 Z M 15 18 L 14.396 17.555 L 14.396 17.557 C 14.394 17.557 14.393 17.56 14.391 17.562 L 14.374 17.586 C 14.269 17.728 14.161 17.868 14.051 18.007 C 13.837 18.282 13.544 18.647 13.231 19.008 C 12.913 19.374 12.587 19.72 12.306 19.969 C 12.201 20.065 12.088 20.152 11.969 20.229 C 11.866 20.291 11.889 20.25 12 20.25 L 12 21.75 C 12.308 21.75 12.573 21.616 12.743 21.513 C 12.933 21.399 13.123 21.249 13.299 21.093 C 13.654 20.78 14.029 20.376 14.363 19.992 C 14.795 19.492 15.209 18.976 15.603 18.445 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                  svgContentId: 1208636060,
                  withExternalLayout: !0,
                }),
                e(h, {
                  className: "framer-lg7n9",
                  "data-framer-name": "graphic",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "Eu6Y2qTv2",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 2 12 C 2 6.477 6.477 2 12 2 C 17.523 2 22 6.477 22 12 C 22 17.523 17.523 22 12 22 C 6.477 22 2 17.523 2 12 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 2 12 C 7.185 16.827 16.464 16.388 22 12.356" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 11.537 2 C 6.989 6.5 6.484 17 11.994 22" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                  svgContentId: 257005087,
                  withExternalLayout: !0,
                }),
              ],
            }),
            f(t.div, {
              className: "framer-1jkniki",
              layoutDependency: n,
              layoutId: "kpiMymXvO",
              children: [
                f(t.div, {
                  className: "framer-8wxpw8",
                  "data-border": !0,
                  layoutDependency: n,
                  layoutId: "C7tcSRWh_",
                  style: {
                    "--border-bottom-width": "2px",
                    "--border-color":
                      'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                    "--border-left-width": "2px",
                    "--border-right-width": "2px",
                    "--border-style": "solid",
                    "--border-top-width": "2px",
                    backgroundColor:
                      "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                  },
                  children: [
                    e(h, {
                      className: "framer-1mgwb3a",
                      layout: "position",
                      layoutDependency: n,
                      layoutId: "J8rkEAUwX",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 230 363"><g transform="translate(-222.988 -7.085) rotate(-30 330.077 179.262)" id="ss1162751471_1"><path d="M 0.177 223.753 L 660.049 224.273" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.141 179.002 L 660.014 179.523" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.212 268.503 L 660.084 269.024" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.247 313.254 L 660.12 313.774" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.106 134.252 L 659.978 134.772" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.071 89.501 L 659.943 90.022" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.035 44.751 L 659.908 45.271" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0 -0 L 659.872 0.521" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.283 358.004 L 660.155 358.525" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path></g><g transform="translate(-206.183 18.475) rotate(30 330.077 179.262)" id="ss1162751471_11"><path d="M 0.106 224.273 L 659.978 223.753" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.141 179.523 L 660.014 179.002" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.071 269.024 L 659.943 268.503" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.035 313.774 L 659.908 313.254" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.177 134.772 L 660.049 134.252" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.212 90.022 L 660.084 89.501" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.247 45.271 L 660.12 44.751" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M 0.283 0.521 L 660.155 0" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path><path d="M -0 358.525 L 659.872 358.004" fill="transparent" stroke-width="1.8" stroke="var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {&quot;name&quot;:&quot;Black 5&quot;} */"></path></g></svg>',
                      svgContentId: 1162751471,
                      withExternalLayout: !0,
                    }),
                    e(h, {
                      className: "framer-1lr8d68",
                      layout: "position",
                      layoutDependency: n,
                      layoutId: "pwhb3DzI0",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 92 118"><path d="M 0.308 76.505 L 44.5 50 L 44.5 0 L 0 25 Z" transform="translate(24.152 0.872) rotate(-120 22.25 38.252)" fill="var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217)) /* {&quot;name&quot;:&quot;Backdrop&quot;} */"></path><path d="M 46.5 115 L 91 90 L 91 40 L 46.5 65 Z" fill="var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217)) /* {&quot;name&quot;:&quot;Backdrop&quot;} */"></path><path d="M 1.5 40 L 46 65 L 46 115 L 1.5 90 Z" fill="var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217)) /* {&quot;name&quot;:&quot;Backdrop&quot;} */"></path><path d="M 1.5 91 L 46 117 L 91 91 L 91 40 L 46 14 L 1.5 39.5 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 2 39.5 L 46.011 64.5 L 90 40.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 46 65.5 L 46 116" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                      svgContentId: 685126497,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
                e(h, {
                  className: "framer-1x70wk3",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "tLLguBsAo",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 54"><path d="M 55.902 24.548 C 55.573 22.311 54.772 20.19 53.519 18.244 C 52.426 16.545 51.024 15.035 49.35 13.751 L 49.355 13.747 L 31.778 0.701 C 31.766 0.69 31.752 0.68 31.739 0.671 C 31.154 0.238 30.363 0 29.512 0 C 28.659 0 27.837 0.239 27.198 0.672 C 26.511 1.136 26.118 1.751 26.091 2.407 C 26.065 3.018 26.367 3.606 26.942 4.064 C 28.074 4.927 29.202 5.808 30.333 6.691 C 31.429 7.547 32.56 8.43 33.684 9.289 L 12.156 9.275 C 9.694 9.275 8.018 10.392 7.673 12.262 C 7.521 13.082 7.789 13.982 8.386 14.672 C 9.021 15.404 9.941 15.807 10.979 15.807 L 12.62 15.808 C 14.887 15.808 17.165 15.803 19.439 15.798 L 21.607 15.793 L 2.069 29.762 L 1.991 29.817 C 0.9 30.625 0.185 31.758 0.031 32.926 C -0.086 33.81 0.128 34.619 0.649 35.264 C 1.27 36.034 2.239 36.457 3.379 36.457 C 4.499 36.457 5.641 36.047 6.598 35.3 L 17.149 26.956 C 17.104 27.363 17.049 27.961 17.055 28.395 C 17.067 29.082 17.295 30.46 17.657 31.579 C 18.403 33.879 19.661 35.983 21.394 37.831 C 23.198 39.754 25.394 41.278 27.922 42.361 C 30.595 43.503 33.468 44.083 36.462 44.083 L 36.49 44.083 C 39.494 44.076 42.376 43.487 45.058 42.332 C 47.59 41.236 49.786 39.706 51.582 37.783 C 53.313 35.926 54.569 33.818 55.314 31.52 C 55.683 30.383 55.919 29.209 56.018 28.021 C 56.11 26.873 56.071 25.704 55.902 24.548 Z M 36.681 35.571 C 30.083 35.571 24.732 30.945 24.732 25.239 C 24.732 19.533 30.083 14.907 36.681 14.907 C 43.28 14.907 48.631 19.533 48.631 25.239 C 48.631 30.945 43.28 35.571 36.681 35.571 Z M 43.572 24.331 C 43.67 26.034 42.966 27.616 41.73 28.786 C 40.472 29.979 38.678 30.728 36.671 30.728 C 34.666 30.728 32.871 29.979 31.613 28.786 C 30.377 27.616 29.675 26.034 29.772 24.332 C 29.866 22.678 30.701 21.218 31.959 20.184 C 33.196 19.167 34.857 18.547 36.671 18.547 C 38.486 18.547 40.146 19.167 41.383 20.184 C 42.641 21.218 43.477 22.677 43.572 24.331 Z" transform="translate(4 5.211) rotate(-10 28.033 22.042)" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                  svgContentId: 1915665679,
                  withExternalLayout: !0,
                }),
              ],
            }),
          ],
        }),
      }),
    });
  }),
  $i = [
    '.framer-Aomj4[data-border="true"]::after, .framer-Aomj4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Aomj4.framer-3tf9ml, .framer-Aomj4 .framer-3tf9ml { display: block; }",
    ".framer-Aomj4.framer-158sena { height: 773px; overflow: visible; position: relative; width: 579px; }",
    ".framer-Aomj4 .framer-o77npp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 197px; overflow: hidden; padding: 16px 16px 16px 16px; position: absolute; top: 255px; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Aomj4 .framer-1851viw, .framer-Aomj4 .framer-17ppm8m { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 250px; word-break: break-word; word-wrap: break-word; }",
    ".framer-Aomj4 .framer-upu7uz { flex: none; height: 93px; left: 0px; position: absolute; top: 145px; width: 71px; }",
    ".framer-Aomj4 .framer-htxyc1 { align-content: center; align-items: center; bottom: 126px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: auto; justify-content: center; overflow: hidden; padding: 10px 6px 10px 6px; position: absolute; right: 85px; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Aomj4 .framer-rfos4n { flex: none; height: 20px; position: relative; width: 20px; }",
    ".framer-Aomj4 .framer-ym0p9p, .framer-Aomj4 .framer-lg7n9 { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-Aomj4 .framer-1jkniki { bottom: 112px; flex: none; height: 174px; overflow: hidden; position: absolute; right: 146px; width: 187px; }",
    ".framer-Aomj4 .framer-8wxpw8 { bottom: 0px; flex: none; height: 162px; overflow: hidden; position: absolute; right: 0px; width: 167px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Aomj4 .framer-1mgwb3a { bottom: -1px; flex: none; height: 363px; left: calc(49.78165938864631% - 230px / 2); position: absolute; width: 230px; }",
    ".framer-Aomj4 .framer-1lr8d68 { flex: none; height: 118px; left: calc(50.29940119760481% - 92px / 2); position: absolute; top: calc(48.14814814814817% - 118px / 2); width: 92px; }",
    ".framer-Aomj4 .framer-1x70wk3 { flex: none; height: 54px; left: 0px; position: absolute; top: 0px; width: 64px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Aomj4 .framer-o77npp, .framer-Aomj4 .framer-htxyc1 { gap: 0px; } .framer-Aomj4 .framer-o77npp > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Aomj4 .framer-o77npp > :first-child, .framer-Aomj4 .framer-htxyc1 > :first-child { margin-top: 0px; } .framer-Aomj4 .framer-o77npp > :last-child, .framer-Aomj4 .framer-htxyc1 > :last-child { margin-bottom: 0px; } .framer-Aomj4 .framer-htxyc1 > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }",
    ".framer-Aomj4.framer-v-163aa4q .framer-o77npp, .framer-Aomj4.framer-v-11e3zkv .framer-o77npp { left: 207px; top: 235px; }",
    ".framer-Aomj4.framer-v-163aa4q .framer-upu7uz, .framer-Aomj4.framer-v-11e3zkv .framer-upu7uz { left: unset; right: -52px; top: 95px; }",
    ".framer-Aomj4.framer-v-163aa4q .framer-htxyc1, .framer-Aomj4.framer-v-11e3zkv .framer-htxyc1 { bottom: unset; left: 178px; right: unset; top: 275px; }",
    ".framer-Aomj4.framer-v-163aa4q .framer-1jkniki, .framer-Aomj4.framer-v-11e3zkv .framer-1jkniki { bottom: 162px; left: 36px; right: unset; }",
    ".framer-Aomj4.framer-v-1jei6z8 .framer-o77npp, .framer-Aomj4.framer-v-o73gkj .framer-o77npp { left: 187px; top: 195px; }",
    ".framer-Aomj4.framer-v-1jei6z8 .framer-1851viw, .framer-Aomj4.framer-v-1jei6z8 .framer-17ppm8m, .framer-Aomj4.framer-v-o73gkj .framer-1851viw, .framer-Aomj4.framer-v-o73gkj .framer-17ppm8m { width: 220px; }",
    ".framer-Aomj4.framer-v-1jei6z8 .framer-upu7uz, .framer-Aomj4.framer-v-o73gkj .framer-upu7uz { bottom: 254px; left: unset; right: 143px; top: unset; }",
    ".framer-Aomj4.framer-v-1jei6z8 .framer-htxyc1, .framer-Aomj4.framer-v-o73gkj .framer-htxyc1 { bottom: unset; left: 158px; right: unset; top: 235px; }",
    ".framer-Aomj4.framer-v-1jei6z8 .framer-1jkniki, .framer-Aomj4.framer-v-o73gkj .framer-1jkniki { bottom: 172px; left: 136px; right: unset; }",
    ...ce,
  ],
  Ze = H(Ji, $i, "framer-Aomj4"),
  Lr = Ze;
Ze.displayName = "About/PathBlender";
Ze.defaultProps = { height: 773, width: 579 };
Q(Ze, {
  variant: {
    options: [
      "WjH4tVh5M",
      "lGTMO5YF9",
      "QRB3pHpUe",
      "R2eC3qcCw",
      "ycBcJs_wL",
      "AuMh4DWCt",
    ],
    optionTitles: [
      "Default",
      "Collasped",
      "Vertical",
      "Vertical_Collasped",
      "Vertical_Mobile",
      "Vertical_Mobile_Collasped",
    ],
    title: "Variant",
    type: k.Enum,
  },
});
W(Ze, [...de]);
var en = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "Framerbvk3LZmGj",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerIntrinsicHeight: "773",
        framerImmutableVariables: "true",
        framerIntrinsicWidth: "579",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"lGTMO5YF9":{"layout":["fixed","fixed"]},"QRB3pHpUe":{"layout":["fixed","fixed"]},"R2eC3qcCw":{"layout":["fixed","fixed"]},"ycBcJs_wL":{"layout":["fixed","fixed"]},"AuMh4DWCt":{"layout":["fixed","fixed"]}}}',
        framerDisplayContentsDiv: "false",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var jt = {};
ye(jt, { __FramerMetadata__: () => un, default: () => _r });
var tn = oe(w),
  an = ie(w),
  on = [
    "HnFC7P4gV",
    "G3h6lxaSh",
    "e1dHDRTKO",
    "WF7teKfJA",
    "jGN7Pfum5",
    "m039kPmI6",
  ],
  nn = "framer-81Mfl",
  ln = {
    e1dHDRTKO: "framer-v-io5ba2",
    G3h6lxaSh: "framer-v-bmgo76",
    HnFC7P4gV: "framer-v-1xwbe8a",
    jGN7Pfum5: "framer-v-1co8196",
    m039kPmI6: "framer-v-yme9jw",
    WF7teKfJA: "framer-v-eehbve",
  };
function jo(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var sn = {
  default: { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
};
var fn = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  mn = {
    Collasped: "G3h6lxaSh",
    Default: "HnFC7P4gV",
    Vertical_Collasped: "WF7teKfJA",
    Vertical_Mobile_Collasped: "m039kPmI6",
    Vertical_Mobile: "jGN7Pfum5",
    Vertical: "e1dHDRTKO",
  },
  dn = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = mn[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "HnFC7P4gV",
    };
  },
  cn = (a, r) => r.join("-") + a.layoutDependency,
  pn = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = dn(a),
      {
        baseVariant: d,
        classNames: q,
        gestureVariant: j,
        setGestureState: u,
        setVariant: x,
        transition: I,
        variants: V,
      } = G({
        cycleOrder: on,
        defaultVariant: "HnFC7P4gV",
        transitions: sn,
        variant: b,
        variantClassNames: ln,
      }),
      n = cn(a, V),
      y = F(null),
      c = A(),
      M = [pe];
    return e(E, {
      id: p ?? c,
      children: e(fn, {
        value: I,
        children: f(t.div, {
          ..._,
          animate: V,
          className: P(nn, ...M, "framer-1xwbe8a", s, q),
          "data-framer-name": "Default",
          initial: b,
          layoutDependency: n,
          layoutId: "HnFC7P4gV",
          onHoverEnd: () => u({ isHovered: !1 }),
          onHoverStart: () => u({ isHovered: !0 }),
          onTap: () => u({ isPressed: !1 }),
          onTapCancel: () => u({ isPressed: !1 }),
          onTapStart: () => u({ isPressed: !0 }),
          ref: r ?? y,
          style: { opacity: 1, ...l },
          variants: {
            G3h6lxaSh: { opacity: 0.15 },
            m039kPmI6: { opacity: 0.15 },
            WF7teKfJA: { opacity: 0.15 },
          },
          ...jo(
            {
              e1dHDRTKO: { "data-framer-name": "Vertical" },
              G3h6lxaSh: { "data-framer-name": "Collasped" },
              jGN7Pfum5: { "data-framer-name": "Vertical_Mobile" },
              m039kPmI6: { "data-framer-name": "Vertical_Mobile_Collasped" },
              WF7teKfJA: { "data-framer-name": "Vertical_Collasped" },
            },
            d,
            j,
          ),
          children: [
            e(h, {
              className: "framer-5qymqx",
              "data-framer-name": "graphic",
              layout: "position",
              layoutDependency: n,
              layoutId: "HkaWWoHUT",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><g transform="translate(6 6) rotate(90 18 17.999)" id="ss3218725681_1"><path d="M 20.57 32.73 L 5.644 35.5 C 2.782 36.03 1.35 36.296 0.526 35.472 C -0.298 34.648 -0.034 33.216 0.498 30.352 L 3.27 15.426 C 3.714 13.034 3.938 11.836 4.726 11.114 C 5.514 10.39 6.958 10.25 9.844 9.966 C 12.624 9.696 15.256 8.744 18 6 L 30 18 C 27.256 20.744 26.302 23.374 26.03 26.156 C 25.748 29.042 25.606 30.486 24.884 31.274 C 24.16 32.062 22.964 32.284 20.57 32.73 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path><path d="M 16 24.42 C 14.887 24.254 13.854 23.738 13.052 22.948 M 13.052 22.948 C 12.262 22.146 11.746 21.114 11.58 20 M 13.054 22.948 L 2 34" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 18 6 C 19.424 3.9 21.354 0.362 24.214 0.022 C 26.164 -0.21 27.782 1.406 31.014 4.64 L 31.36 4.986 C 34.594 8.218 36.21 9.836 35.978 11.786 C 35.638 14.646 32.102 16.576 30 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path></g></svg>',
              svgContentId: 3218725681,
              withExternalLayout: !0,
              ...jo(
                {
                  e1dHDRTKO: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><g transform="translate(6 6) rotate(90 18 17.999)" id="ss949984322_1"><path d="M 20.57 32.73 L 5.644 35.5 C 2.782 36.03 1.35 36.296 0.526 35.472 C -0.298 34.648 -0.034 33.216 0.498 30.352 L 3.27 15.426 C 3.714 13.034 3.938 11.836 4.726 11.114 C 5.514 10.39 6.958 10.25 9.844 9.966 C 12.624 9.696 15.256 8.744 18 6 L 30 18 C 27.256 20.744 26.302 23.374 26.03 26.156 C 25.748 29.042 25.606 30.486 24.884 31.274 C 24.16 32.062 22.964 32.284 20.57 32.73 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path><path d="M 16 24.42 C 14.887 24.254 13.854 23.738 13.052 22.948 M 13.052 22.948 C 12.262 22.146 11.746 21.114 11.58 20 M 13.054 22.948 L 2 34" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 18 6 C 19.424 3.9 21.354 0.362 24.214 0.022 C 26.164 -0.21 27.782 1.406 31.014 4.64 L 31.36 4.986 C 34.594 8.218 36.21 9.836 35.978 11.786 C 35.638 14.646 32.102 16.576 30 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path></g></svg>',
                    svgContentId: 949984322,
                  },
                  G3h6lxaSh: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><g transform="translate(6 6) rotate(90 18 17.999)" id="ss3769881991_1"><path d="M 20.57 32.73 L 5.644 35.5 C 2.782 36.03 1.35 36.296 0.526 35.472 C -0.298 34.648 -0.034 33.216 0.498 30.352 L 3.27 15.426 C 3.714 13.034 3.938 11.836 4.726 11.114 C 5.514 10.39 6.958 10.25 9.844 9.966 C 12.624 9.696 15.256 8.744 18 6 L 30 18 C 27.256 20.744 26.302 23.374 26.03 26.156 C 25.748 29.042 25.606 30.486 24.884 31.274 C 24.16 32.062 22.964 32.284 20.57 32.73 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path><path d="M 16 24.42 C 14.887 24.254 13.854 23.738 13.052 22.948 M 13.052 22.948 C 12.262 22.146 11.746 21.114 11.58 20 M 13.054 22.948 L 2 34" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 18 6 C 19.424 3.9 21.354 0.362 24.214 0.022 C 26.164 -0.21 27.782 1.406 31.014 4.64 L 31.36 4.986 C 34.594 8.218 36.21 9.836 35.978 11.786 C 35.638 14.646 32.102 16.576 30 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path></g></svg>',
                    svgContentId: 3769881991,
                  },
                  jGN7Pfum5: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><g transform="translate(6 6) rotate(90 18 17.999)" id="ss420854854_1"><path d="M 20.57 32.73 L 5.644 35.5 C 2.782 36.03 1.35 36.296 0.526 35.472 C -0.298 34.648 -0.034 33.216 0.498 30.352 L 3.27 15.426 C 3.714 13.034 3.938 11.836 4.726 11.114 C 5.514 10.39 6.958 10.25 9.844 9.966 C 12.624 9.696 15.256 8.744 18 6 L 30 18 C 27.256 20.744 26.302 23.374 26.03 26.156 C 25.748 29.042 25.606 30.486 24.884 31.274 C 24.16 32.062 22.964 32.284 20.57 32.73 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path><path d="M 16 24.42 C 14.887 24.254 13.854 23.738 13.052 22.948 M 13.052 22.948 C 12.262 22.146 11.746 21.114 11.58 20 M 13.054 22.948 L 2 34" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 18 6 C 19.424 3.9 21.354 0.362 24.214 0.022 C 26.164 -0.21 27.782 1.406 31.014 4.64 L 31.36 4.986 C 34.594 8.218 36.21 9.836 35.978 11.786 C 35.638 14.646 32.102 16.576 30 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path></g></svg>',
                    svgContentId: 420854854,
                  },
                  m039kPmI6: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><g transform="translate(6 6) rotate(90 18 17.999)" id="ss1766040642_1"><path d="M 20.57 32.73 L 5.644 35.5 C 2.782 36.03 1.35 36.296 0.526 35.472 C -0.298 34.648 -0.034 33.216 0.498 30.352 L 3.27 15.426 C 3.714 13.034 3.938 11.836 4.726 11.114 C 5.514 10.39 6.958 10.25 9.844 9.966 C 12.624 9.696 15.256 8.744 18 6 L 30 18 C 27.256 20.744 26.302 23.374 26.03 26.156 C 25.748 29.042 25.606 30.486 24.884 31.274 C 24.16 32.062 22.964 32.284 20.57 32.73 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path><path d="M 16 24.42 C 14.887 24.254 13.854 23.738 13.052 22.948 M 13.052 22.948 C 12.262 22.146 11.746 21.114 11.58 20 M 13.054 22.948 L 2 34" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 18 6 C 19.424 3.9 21.354 0.362 24.214 0.022 C 26.164 -0.21 27.782 1.406 31.014 4.64 L 31.36 4.986 C 34.594 8.218 36.21 9.836 35.978 11.786 C 35.638 14.646 32.102 16.576 30 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path></g></svg>',
                    svgContentId: 1766040642,
                  },
                  WF7teKfJA: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><g transform="translate(6 6) rotate(90 18 17.999)" id="ss2128061654_1"><path d="M 20.57 32.73 L 5.644 35.5 C 2.782 36.03 1.35 36.296 0.526 35.472 C -0.298 34.648 -0.034 33.216 0.498 30.352 L 3.27 15.426 C 3.714 13.034 3.938 11.836 4.726 11.114 C 5.514 10.39 6.958 10.25 9.844 9.966 C 12.624 9.696 15.256 8.744 18 6 L 30 18 C 27.256 20.744 26.302 23.374 26.03 26.156 C 25.748 29.042 25.606 30.486 24.884 31.274 C 24.16 32.062 22.964 32.284 20.57 32.73 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path><path d="M 16 24.42 C 14.887 24.254 13.854 23.738 13.052 22.948 M 13.052 22.948 C 12.262 22.146 11.746 21.114 11.58 20 M 13.054 22.948 L 2 34" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 18 6 C 19.424 3.9 21.354 0.362 24.214 0.022 C 26.164 -0.21 27.782 1.406 31.014 4.64 L 31.36 4.986 C 34.594 8.218 36.21 9.836 35.978 11.786 C 35.638 14.646 32.102 16.576 30 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path></g></svg>',
                    svgContentId: 2128061654,
                  },
                },
                d,
                j,
              ),
            }),
            f(t.div, {
              className: "framer-6ji0xe",
              layoutDependency: n,
              layoutId: "VdMKcUy92",
              children: [
                e(w, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.p, {
                      style: {
                        "--font-selector": "SW50ZXItTWVkaXVt",
                        "--framer-font-family":
                          '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "11px",
                        "--framer-font-weight": "500",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children: "Frame",
                    }),
                  }),
                  className: "framer-9dijj7",
                  fonts: ["Inter-Medium"],
                  layoutDependency: n,
                  layoutId: "G4QoH4GMR",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                f(t.div, {
                  className: "framer-12aasbm",
                  layoutDependency: n,
                  layoutId: "BFGRvmCJ7",
                  children: [
                    e(t.div, {
                      className: "framer-12xht8q",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "hN09Llj9W",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                      },
                    }),
                    e(t.div, {
                      className: "framer-14ta47c",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "dMeqXKzLr",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    e(t.div, {
                      className: "framer-67g0o2",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "GOP4F4ZNh",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    e(t.div, {
                      className: "framer-15mw6jp",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "SCy0xreu_",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    e(t.div, {
                      className: "framer-1ojr6n9",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "ZxcV7KkRb",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                  ],
                }),
                f(t.div, {
                  className: "framer-c45p2m",
                  layoutDependency: n,
                  layoutId: "UaX94KSO5",
                  style: { rotate: -15 },
                  children: [
                    e(t.div, {
                      className: "framer-mff9oc",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "hei5tdeIc",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                      },
                      children: e(h, {
                        className: "framer-11qet7o",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: n,
                        layoutId: "nP3GLzSeq",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36"><path d="M 5.836 30.164 C 3.75 28.075 3.75 24.718 3.75 18 C 3.75 11.283 3.75 7.923 5.836 5.837 C 7.923 3.75 11.281 3.75 18 3.75 C 24.717 3.75 28.077 3.75 30.164 5.837 C 32.25 7.923 32.25 11.282 32.25 18 C 32.25 24.717 32.25 28.077 30.164 30.164 C 28.075 32.25 24.718 32.25 18 32.25 C 11.283 32.25 7.923 32.25 5.836 30.164 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 3.75 13.5 L 32.25 13.5 M 24 32.25 L 24 13.5 M 12 32.25 L 12 13.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10"></path></svg>',
                        svgContentId: 3544131234,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(t.div, {
                      className: "framer-j976sj",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "Ay8UE2ALT",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    e(t.div, {
                      className: "framer-4u45i4",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "k4DUKMyYp",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    e(t.div, {
                      className: "framer-13irhzl",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "x5rhEw1zp",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    e(t.div, {
                      className: "framer-f80a7z",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "xBQwufMPs",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                  ],
                }),
                f(t.div, {
                  className: "framer-1nw3um9",
                  layoutDependency: n,
                  layoutId: "AOLeJjf6H",
                  style: { rotate: 30 },
                  children: [
                    e(t.div, {
                      className: "framer-69es0z",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "Wak4dr79I",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                      },
                      children: e(h, {
                        className: "framer-qhn00y",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: n,
                        layoutId: "mRGolpOKj",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36"><path d="M 3 18 C 3 9.716 9.716 3 18 3 C 26.284 3 33 9.716 33 18 C 33 26.284 26.284 33 18 33 C 9.716 33 3 26.284 3 18 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 3 18 C 10.778 25.24 24.696 24.582 33 18.534" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10"></path><path d="M 17.306 3 C 10.484 9.75 9.726 25.5 17.991 33" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10"></path></svg>',
                        svgContentId: 1116436151,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(t.div, {
                      className: "framer-11ra3gd",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "shg86qQae",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    e(t.div, {
                      className: "framer-1m22pa3",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "BEnJUFrZP",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    e(t.div, {
                      className: "framer-533wlv",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "yahzxlPkz",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    e(t.div, {
                      className: "framer-cgjimx",
                      "data-border": !0,
                      layoutDependency: n,
                      layoutId: "IvbeuYzo3",
                      style: {
                        "--border-bottom-width": "2px",
                        "--border-color":
                          'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                        "--border-left-width": "2px",
                        "--border-right-width": "2px",
                        "--border-style": "solid",
                        "--border-top-width": "2px",
                        backgroundColor:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                  ],
                }),
              ],
            }),
            e(t.div, {
              className: "framer-1pibh3x",
              layoutDependency: n,
              layoutId: "wE5HbnOrX",
              children: e(h, {
                className: "framer-rp4wdv",
                layout: "position",
                layoutDependency: n,
                layoutId: "WS1C1kZMz",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><g transform="translate(12 7.2) rotate(15 12 18)" id="ss3097824742_1"><path d="M 12 18 C 12 14.686 14.686 12 18 12 C 21.314 12 24 14.686 24 18 C 24 21.314 21.314 24 18 24 C 14.686 24 12 21.314 12 18 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path><path d="M 6 36 C 9.314 36 12 33.314 12 30 L 12 24 L 6 24 C 2.686 24 0 26.686 0 30 C 0 33.314 2.686 36 6 36 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path><path d="M 12 12 L 12 24 L 6 24 C 2.686 24 0 21.314 0 18 C 0 14.686 2.686 12 6 12 Z M 12 -0 L 12 12 L 6 12 C 2.686 12 0 9.314 0 6 C 0 2.686 2.686 -0 6 -0 Z M 12 -0 L 12 12 L 18 12 C 21.314 12 24 9.314 24 6 C 24 2.686 21.314 -0 18 -0 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>',
                svgContentId: 3097824742,
                withExternalLayout: !0,
              }),
            }),
            f(t.div, {
              className: "framer-104oyk3",
              "data-border": !0,
              layoutDependency: n,
              layoutId: "U2phVRNIw",
              style: {
                "--border-bottom-width": "2px",
                "--border-color":
                  'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
              children: [
                e(tn, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children:
                        "I have many creative concepts at times, which I will record  and find reasonable and intuitive solutions.",
                    }),
                  }),
                  className: "framer-1b4ttym",
                  layoutDependency: n,
                  layoutId: "PsNzZG9pO",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(an, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children:
                        "\u6211\u65F6\u5E38\u6709\u8BB8\u591A\u521B\u610F\u6982\u5FF5\uFF0C\u6211\u4F1A\u5C06\u5B83\u4EEC\u9010\u4E00\u8BB0\u5F55\u4E0B\u6765\uFF0C\u5E76\u627E\u5230\u5408\u7406\u7684\u3001\u7B26\u5408\u76F4\u89C9\u7684\u89E3\u51B3\u65B9\u6848\u3002\u5728\u8FD9\u5176\u4E2D\uFF0CFigma \u662F\u6211\u7684\u5F97\u529B\u52A9\u624B\u4E4B\u4E00\u3002",
                    }),
                  }),
                  className: "framer-m5x4v8",
                  layoutDependency: n,
                  layoutId: "Vh9l3Rwa9",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ],
            }),
          ],
        }),
      }),
    });
  }),
  hn = [
    '.framer-81Mfl[data-border="true"]::after, .framer-81Mfl [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-81Mfl.framer-1js1chc, .framer-81Mfl .framer-1js1chc { display: block; }",
    ".framer-81Mfl.framer-1xwbe8a { height: 520px; overflow: visible; position: relative; width: 381px; }",
    ".framer-81Mfl .framer-5qymqx { flex: none; height: 48px; position: absolute; right: 50px; top: 105px; width: 48px; }",
    ".framer-81Mfl .framer-6ji0xe { flex: none; height: 189px; left: 0px; overflow: visible; position: absolute; top: 0px; width: 173px; }",
    ".framer-81Mfl .framer-9dijj7 { flex: none; height: auto; left: 9px; position: absolute; top: 0px; white-space: pre; width: auto; }",
    ".framer-81Mfl .framer-12aasbm { flex: none; height: 90px; left: 7px; overflow: visible; position: absolute; top: 15px; width: 90px; }",
    ".framer-81Mfl .framer-12xht8q, .framer-81Mfl .framer-mff9oc, .framer-81Mfl .framer-69es0z { bottom: 1px; flex: none; left: 1px; overflow: visible; position: absolute; right: 1px; top: 1px; }",
    ".framer-81Mfl .framer-14ta47c, .framer-81Mfl .framer-j976sj, .framer-81Mfl .framer-11ra3gd { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 6px); left: 0px; overflow: visible; position: absolute; top: -1px; width: 6px; }",
    ".framer-81Mfl .framer-67g0o2, .framer-81Mfl .framer-4u45i4, .framer-81Mfl .framer-1m22pa3 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 6px); overflow: visible; position: absolute; right: 0px; top: -1px; width: 6px; }",
    ".framer-81Mfl .framer-15mw6jp, .framer-81Mfl .framer-13irhzl, .framer-81Mfl .framer-533wlv { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 6px); left: 0px; overflow: visible; position: absolute; width: 6px; }",
    ".framer-81Mfl .framer-1ojr6n9, .framer-81Mfl .framer-f80a7z, .framer-81Mfl .framer-cgjimx { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 6px); overflow: visible; position: absolute; right: 0px; width: 6px; }",
    ".framer-81Mfl .framer-c45p2m { flex: none; height: 90px; overflow: visible; position: absolute; right: 11px; top: 35px; width: 90px; }",
    ".framer-81Mfl .framer-11qet7o { flex: none; height: 36px; left: calc(51.136363636363654% - 36px / 2); position: absolute; top: calc(47.72727272727275% - 36px / 2); width: 36px; }",
    ".framer-81Mfl .framer-1nw3um9 { bottom: 17px; flex: none; height: 90px; left: 17px; overflow: visible; position: absolute; width: 90px; }",
    ".framer-81Mfl .framer-qhn00y { flex: none; height: 36px; left: calc(50.00000000000002% - 36px / 2); position: absolute; top: calc(48.86363636363639% - 36px / 2); width: 36px; }",
    ".framer-81Mfl .framer-1pibh3x { flex: none; height: 48px; overflow: hidden; position: absolute; right: 121px; top: 179px; width: 48px; }",
    ".framer-81Mfl .framer-rp4wdv { flex: none; height: 48px; left: calc(50.00000000000002% - 48px / 2); position: absolute; top: calc(50.00000000000002% - 48px / 2); width: 48px; }",
    ".framer-81Mfl .framer-104oyk3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 99px; overflow: hidden; padding: 16px 16px 16px 16px; position: absolute; top: 268px; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-81Mfl .framer-1b4ttym, .framer-81Mfl .framer-m5x4v8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 250px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-81Mfl .framer-104oyk3 { gap: 0px; } .framer-81Mfl .framer-104oyk3 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-81Mfl .framer-104oyk3 > :first-child { margin-top: 0px; } .framer-81Mfl .framer-104oyk3 > :last-child { margin-bottom: 0px; } }",
    ".framer-81Mfl.framer-v-bmgo76 .framer-5qymqx { right: 40px; }",
    ".framer-81Mfl.framer-v-bmgo76 .framer-c45p2m, .framer-81Mfl.framer-v-eehbve .framer-c45p2m, .framer-81Mfl.framer-v-yme9jw .framer-c45p2m { right: 1px; top: calc(47.61904761904764% - 90px / 2); }",
    ".framer-81Mfl.framer-v-bmgo76 .framer-1nw3um9, .framer-81Mfl.framer-v-eehbve .framer-1nw3um9, .framer-81Mfl.framer-v-yme9jw .framer-1nw3um9 { bottom: 7px; left: 7px; }",
    ".framer-81Mfl.framer-v-bmgo76 .framer-1pibh3x { right: 111px; top: 199px; }",
    ".framer-81Mfl.framer-v-io5ba2 .framer-5qymqx { right: -10px; top: 135px; }",
    ".framer-81Mfl.framer-v-io5ba2 .framer-6ji0xe, .framer-81Mfl.framer-v-eehbve .framer-6ji0xe { left: 80px; top: calc(48.84615384615387% - 189px / 2); }",
    ".framer-81Mfl.framer-v-io5ba2 .framer-1pibh3x { left: 102px; right: unset; top: 29px; }",
    ".framer-81Mfl.framer-v-io5ba2 .framer-104oyk3, .framer-81Mfl.framer-v-eehbve .framer-104oyk3 { bottom: 430px; left: 327px; top: unset; }",
    ".framer-81Mfl.framer-v-eehbve .framer-5qymqx { right: -20px; top: 145px; }",
    ".framer-81Mfl.framer-v-eehbve .framer-1pibh3x { left: 92px; right: unset; top: 49px; }",
    ".framer-81Mfl.framer-v-1co8196 .framer-5qymqx { right: -30px; top: 125px; }",
    ".framer-81Mfl.framer-v-1co8196 .framer-6ji0xe, .framer-81Mfl.framer-v-yme9jw .framer-6ji0xe { left: unset; right: -56px; top: -75px; }",
    ".framer-81Mfl.framer-v-1co8196 .framer-1pibh3x { left: 132px; right: unset; top: 79px; }",
    ".framer-81Mfl.framer-v-1co8196 .framer-104oyk3, .framer-81Mfl.framer-v-yme9jw .framer-104oyk3 { left: 118px; top: 186px; }",
    ".framer-81Mfl.framer-v-1co8196 .framer-1b4ttym, .framer-81Mfl.framer-v-1co8196 .framer-m5x4v8, .framer-81Mfl.framer-v-yme9jw .framer-1b4ttym, .framer-81Mfl.framer-v-yme9jw .framer-m5x4v8 { width: 180px; }",
    ".framer-81Mfl.framer-v-yme9jw .framer-5qymqx { right: -40px; top: 135px; }",
    ".framer-81Mfl.framer-v-yme9jw .framer-1pibh3x { left: 122px; right: unset; top: 89px; }",
    ...ce,
  ],
  Ye = H(pn, hn, "framer-81Mfl"),
  _r = Ye;
Ye.displayName = "About/PathFigma";
Ye.defaultProps = { height: 520, width: 381 };
Q(Ye, {
  variant: {
    options: [
      "HnFC7P4gV",
      "G3h6lxaSh",
      "e1dHDRTKO",
      "WF7teKfJA",
      "jGN7Pfum5",
      "m039kPmI6",
    ],
    optionTitles: [
      "Default",
      "Collasped",
      "Vertical",
      "Vertical_Collasped",
      "Vertical_Mobile",
      "Vertical_Mobile_Collasped",
    ],
    title: "Variant",
    type: k.Enum,
  },
});
W(Ye, [...de]);
var un = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerGpskADjQV",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "520",
        framerDisplayContentsDiv: "false",
        framerIntrinsicWidth: "381",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"G3h6lxaSh":{"layout":["fixed","fixed"]},"e1dHDRTKO":{"layout":["fixed","fixed"]},"WF7teKfJA":{"layout":["fixed","fixed"]},"jGN7Pfum5":{"layout":["fixed","fixed"]},"m039kPmI6":{"layout":["fixed","fixed"]}}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var It = {};
ye(It, { __FramerMetadata__: () => Sn, default: () => jr });
function ue(a) {
  let {
      pathAnimation: r,
      from: i,
      to: o,
      animate: l,
      shouldLoop: s,
      loopOptions: p,
      slots: b = [],
      endCircle: _,
    } = a,
    d = Jr.count(b) > 0,
    q = f("div", {
      style: gn,
      children: [
        e("div", { style: xn, children: "\u270D\uFE0F" }),
        e("p", { style: yn, children: "Connect to Graphic" }),
        e("p", {
          style: vn,
          children: "Animates single or joined paths on Web Pages only.",
        }),
      ],
    });
  if (d) {
    let j = Io(b),
      u = Io(j.props.svg),
      x = r.type === "spring",
      I = {
        pathLength: {
          ...r,
          repeat: s ? 1 / 0 : 0,
          repeatType: p,
          stiffness: x ? r.stiffness / 1e3 : r.stiffness,
          damping: x ? r.damping / 1e3 : r.damping,
        },
      },
      V = cr(0),
      n = ma(V, [0, 0.025], [0, 1]),
      y = {
        variants: {
          start: { pathLength: i / 100 },
          end: { pathLength: o / 100 },
        },
        transition: I,
      },
      c = $r.current() === $r.canvas;
    if ((c && (q = j), !c && u)) {
      let M = u.match(/[\w-]+="[^"]*"/g),
        $,
        K,
        g,
        se,
        L;
      for (let ae of M)
        ae.includes("d=") && ($ = Ge(ae)),
          ae.includes("stroke=") && (K = Ge(ae)),
          ae.includes("stroke-width=") && (g = Ge(ae)),
          ae.includes("stroke-linecap=") && (se = Ge(ae)),
          ae.includes("stroke-linejoin=") && (L = Ge(ae));
      let J;
      (J = u.split("viewBox=")[1]),
        (J = J.split(">")[0]),
        (J = J.replace(/^"(.+(?="$))"$/, "$1")),
        (q = e(t.div, {
          initial: c || l === !1 ? !1 : "start",
          animate: c || l === !1 ? !1 : "end",
          style: {
            width: "100%",
            height: "100%",
            display: "flex",
            placeContent: "center",
            placeItems: "center",
            backgroundColor: "transparent",
            overflow: "hidden",
          },
          children: e(t.svg, {
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            viewBox: J,
            children: e(t.path, {
              ...y,
              d: $,
              stroke: K,
              strokeWidth: g,
              strokeLinejoin: L,
              strokeLinecap: se,
              fill: "transparent",
              style: !_ && { pathLength: V, opacity: n },
              initial: c || l === !1 ? !1 : "start",
              animate: c || l === !1 ? !1 : "end",
            }),
          }),
        }));
    }
  }
  return q;
}
ue.defaultProps = {
  animate: !0,
  shouldLoop: !1,
  loopOptions: "reverse",
  from: 0,
  to: 100,
  pathAnimation: { type: "tween", duration: 2 },
  endCircle: !0,
};
Q(ue, {
  slots: { type: k.ComponentInstance, title: "Children" },
  animate: {
    title: "Animate",
    type: k.Boolean,
    defaultValue: ue.defaultProps.animate,
    enabledTitle: "True",
    disabledTitle: "False",
  },
  shouldLoop: {
    title: "Loop",
    type: k.Boolean,
    defaultValue: ue.defaultProps.shouldLoop,
    enabledTitle: "True",
    disabledTitle: "False",
    hidden(a) {
      return a.animate === !1;
    },
  },
  loopOptions: {
    type: k.Enum,
    title: "Type",
    defaultValue: ue.defaultProps.loopOptions,
    options: ["loop", "reverse", "mirror"],
    optionTitles: ["Loop", "Reverse", "Mirror"],
    hidden(a) {
      return a.shouldLoop === !1;
    },
  },
  endCircle: {
    title: "End Circle",
    type: k.Boolean,
    defaultValue: ue.defaultProps.endCircle,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    hidden(a) {
      return a.animate === !1;
    },
  },
  from: {
    title: "From",
    type: k.Number,
    min: 0,
    max: 100,
    displayStepper: !0,
    step: 1,
    defaultValue: ue.defaultProps.from,
    unit: "%",
    hidden(a) {
      return a.animate === !1;
    },
  },
  to: {
    title: "To",
    type: k.Number,
    min: 0,
    max: 100,
    displayStepper: !0,
    step: 1,
    defaultValue: ue.defaultProps.to,
    unit: "%",
    hidden(a) {
      return a.animate === !1;
    },
  },
  pathAnimation: {
    title: " ",
    type: k.Transition,
    defaultValue: ue.defaultProps.pathAnimation,
    hidden(a) {
      return a.animate === !1;
    },
  },
});
var Ge = (a) => a.split("=")[1].replace(/['"]+/g, "");
function Io(a) {
  let r;
  return (
    Jr.map(a, (i) => {
      r === void 0 && (r = i);
    }),
    r
  );
}
var gn = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
  },
  xn = { fontSize: 32, marginBottom: 10 },
  yn = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  vn = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  };
var bn = oe(w),
  kn = ie(w),
  Cn = C(ue),
  qn = hr(t.div),
  Vn = [
    "QzmPcnCyo",
    "BAKxvevuu",
    "rZiLc0hom",
    "IoNj2dRgK",
    "MWsYLcoZO",
    "Cv4vHdxd4",
  ],
  Ln = "framer-z7cEM",
  _n = {
    BAKxvevuu: "framer-v-1m2kmrr",
    Cv4vHdxd4: "framer-v-iyj12e",
    IoNj2dRgK: "framer-v-1hbbin7",
    MWsYLcoZO: "framer-v-dhvizj",
    QzmPcnCyo: "framer-v-1nrrj4f",
    rZiLc0hom: "framer-v-13on17a",
  };
function jn(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var In = {
  default: { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
};
var Rn = { delay: 0, duration: 20, ease: [0, 0, 1, 1], type: "tween" },
  Mn = { opacity: 1, rotate: 360, scale: 1, x: 0, y: 0 },
  zn = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  Dn = {
    Collasped: "BAKxvevuu",
    Default: "QzmPcnCyo",
    Vertical_Collasped: "IoNj2dRgK",
    Vertical_Mobile_Collasped: "Cv4vHdxd4",
    Vertical_Mobile: "MWsYLcoZO",
    Vertical: "rZiLc0hom",
  },
  Nn = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = Dn[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "QzmPcnCyo",
    };
  },
  Tn = (a, r) => r.join("-") + a.layoutDependency,
  Fn = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = Nn(a),
      {
        baseVariant: d,
        classNames: q,
        gestureVariant: j,
        setGestureState: u,
        setVariant: x,
        transition: I,
        variants: V,
      } = G({
        cycleOrder: Vn,
        defaultVariant: "QzmPcnCyo",
        transitions: In,
        variant: b,
        variantClassNames: _n,
      }),
      n = Tn(a, V),
      y = F(null),
      c = A(),
      M = [pe];
    return e(E, {
      id: p ?? c,
      children: e(zn, {
        value: I,
        children: f(t.div, {
          ..._,
          animate: V,
          className: P(Ln, ...M, "framer-1nrrj4f", s, q),
          "data-framer-name": "Default",
          initial: b,
          layoutDependency: n,
          layoutId: "QzmPcnCyo",
          onHoverEnd: () => u({ isHovered: !1 }),
          onHoverStart: () => u({ isHovered: !0 }),
          onTap: () => u({ isPressed: !1 }),
          onTapCancel: () => u({ isPressed: !1 }),
          onTapStart: () => u({ isPressed: !0 }),
          ref: r ?? y,
          style: { opacity: 1, ...l },
          variants: {
            BAKxvevuu: { opacity: 0.15 },
            Cv4vHdxd4: { opacity: 0.15 },
            IoNj2dRgK: { opacity: 0.15 },
          },
          ...jn(
            {
              BAKxvevuu: { "data-framer-name": "Collasped" },
              Cv4vHdxd4: { "data-framer-name": "Vertical_Mobile_Collasped" },
              IoNj2dRgK: { "data-framer-name": "Vertical_Collasped" },
              MWsYLcoZO: { "data-framer-name": "Vertical_Mobile" },
              rZiLc0hom: { "data-framer-name": "Vertical" },
            },
            d,
            j,
          ),
          children: [
            f(t.div, {
              className: "framer-wxag6i",
              "data-border": !0,
              layoutDependency: n,
              layoutId: "yZgtuiuOn",
              style: {
                "--border-bottom-width": "2px",
                "--border-color":
                  'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
              children: [
                e(bn, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children:
                        "It's a complicated process to realize a concept, but with Framer, I feel confident that I can turn my ideas into reality and ensure the quality of the user experience.",
                    }),
                  }),
                  className: "framer-jbkxxt",
                  layoutDependency: n,
                  layoutId: "sYxF0wXhx",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(kn, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children:
                        "\u800C\u5B9E\u73B0\u6982\u5FF5\u7684\u8FC7\u7A0B\u66F2\u6298\u590D\u6742\uFF0C\u4F46\u6709\u4E86 Framer\uFF0C\u6211\u80FD\u591F\u5C06\u60F3\u6CD5\u8F6C\u5316\u4E3A\u73B0\u5B9E\uFF0C\u5E76\u4FDD\u8BC1\u826F\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002",
                    }),
                  }),
                  className: "framer-1xpcus7",
                  layoutDependency: n,
                  layoutId: "sn1VsrdxI",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ],
            }),
            f(t.div, {
              className: "framer-1awth9u",
              layoutDependency: n,
              layoutId: "QiRtuXCtw",
              style: { rotate: 15 },
              children: [
                e(w, {
                  __fromCanvasComponent: !0,
                  children: f(m, {
                    children: [
                      e(t.div, {
                        style: {
                          "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                          "--framer-font-family": '"Space Mono", monospace',
                          "--framer-font-size": "10px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1.3em",
                          "--framer-text-color":
                            "var(--extracted-tcooor, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children: "1",
                      }),
                      e(t.div, {
                        style: {
                          "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                          "--framer-font-family": '"Space Mono", monospace',
                          "--framer-font-size": "10px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1.3em",
                          "--framer-text-color":
                            "var(--extracted-1l8g7xg, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children: "2",
                      }),
                      e(t.div, {
                        style: {
                          "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                          "--framer-font-family": '"Space Mono", monospace',
                          "--framer-font-size": "10px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1.3em",
                          "--framer-text-color":
                            "var(--extracted-39j9wk, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children: "3",
                      }),
                      e(t.div, {
                        style: {
                          "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                          "--framer-font-family": '"Space Mono", monospace',
                          "--framer-font-size": "10px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1.3em",
                          "--framer-text-color":
                            "var(--extracted-sba20y, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children: "4",
                      }),
                      e(t.div, {
                        style: {
                          "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                          "--framer-font-family": '"Space Mono", monospace',
                          "--framer-font-size": "10px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1.3em",
                          "--framer-text-color":
                            "var(--extracted-lbydze, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children: "5",
                      }),
                      e(t.div, {
                        style: {
                          "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                          "--framer-font-family": '"Space Mono", monospace',
                          "--framer-font-size": "10px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1.3em",
                          "--framer-text-color":
                            "var(--extracted-164hrq8, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children: "6",
                      }),
                    ],
                  }),
                  className: "framer-19gi3s1",
                  fonts: ["GF;Space Mono-700"],
                  layoutDependency: n,
                  layoutId: "xRjqEp_44",
                  style: {
                    "--extracted-164hrq8":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--extracted-1l8g7xg":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--extracted-39j9wk":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--extracted-lbydze":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--extracted-sba20y":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--extracted-tcooor":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(w, {
                  __fromCanvasComponent: !0,
                  children: f(m, {
                    children: [
                      e(t.div, {
                        style: {
                          "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                          "--framer-font-family": '"Space Mono", monospace',
                          "--framer-font-size": "10px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1.3em",
                          "--framer-text-color":
                            "var(--extracted-tcooor, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children: "initial={{ rotate: 0 }}",
                      }),
                      e(t.div, {
                        style: {
                          "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                          "--framer-font-family": '"Space Mono", monospace',
                          "--framer-font-size": "10px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1.3em",
                          "--framer-text-color":
                            "var(--extracted-1l8g7xg, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children: "animate={{ rotate: 360 }}",
                      }),
                      e(t.div, {
                        style: {
                          "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                          "--framer-font-family": '"Space Mono", monospace',
                          "--framer-font-size": "10px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1.3em",
                          "--framer-text-color":
                            "var(--extracted-39j9wk, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children: "transition={{ ",
                      }),
                      e(t.div, {
                        style: {
                          "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                          "--framer-font-family": '"Space Mono", monospace',
                          "--framer-font-size": "10px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1.3em",
                          "--framer-text-color":
                            "var(--extracted-sba20y, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children: '      repeat: "Infinity", ',
                      }),
                      e(t.div, {
                        style: {
                          "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                          "--framer-font-family": '"Space Mono", monospace',
                          "--framer-font-size": "10px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1.3em",
                          "--framer-text-color":
                            "var(--extracted-lbydze, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children: '      repeatType: "mirror", ',
                      }),
                      e(t.div, {
                        style: {
                          "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                          "--framer-font-family": '"Space Mono", monospace',
                          "--framer-font-size": "10px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1.3em",
                          "--framer-text-color":
                            "var(--extracted-164hrq8, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children: "}}",
                      }),
                    ],
                  }),
                  className: "framer-16hg1lo",
                  fonts: ["GF;Space Mono-700"],
                  layoutDependency: n,
                  layoutId: "Dub8EeDEY",
                  style: {
                    "--extracted-164hrq8":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--extracted-1l8g7xg":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--extracted-39j9wk":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--extracted-lbydze":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--extracted-sba20y":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--extracted-tcooor":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ],
            }),
            e(h, {
              className: "framer-114oeri",
              layout: "position",
              layoutDependency: n,
              layoutId: "U1iqUY7wl-shape",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 46"><path d="M 12.673 12.641 L 25.329 25.266 L 0 25.284 L 0.007 14.756 C 0.009 13.014 0.374 12.65 2.119 12.649 Z M 12.673 12.641 L 0.018 0.016 L 23.235 0 C 24.981 -0.001 25.346 0.363 25.345 2.104 L 25.339 10.527 C 25.338 12.268 24.972 12.633 23.227 12.634 Z M 12.656 37.909 L 0 25.284 L 12.664 25.275 Z" transform="translate(6.332 4.043) rotate(-15 12.672 18.955)" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path></svg>',
              svgContentId: 3553898388,
              withExternalLayout: !0,
            }),
            f(t.div, {
              className: "framer-pwi8nv",
              layoutDependency: n,
              layoutId: "q9o1AI3vq",
              style: { rotate: 15 },
              children: [
                e(t.div, {
                  className: "framer-189xbsn",
                  "data-border": !0,
                  layoutDependency: n,
                  layoutId: "G3SQhPZvs",
                  style: {
                    "--border-bottom-width": "2px",
                    "--border-color":
                      'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                    "--border-left-width": "2px",
                    "--border-right-width": "2px",
                    "--border-style": "solid",
                    "--border-top-width": "2px",
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  },
                  children: e(qn, {
                    __framer__loop: Mn,
                    __framer__loopEffectEnabled: !0,
                    __framer__loopRepeatDelay: 0,
                    __framer__loopRepeatType: "loop",
                    __framer__loopTransition: Rn,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: "framer-5sppe6-container",
                    layoutDependency: n,
                    layoutId: "cKY_xlEqB-container",
                    children: e(ue, {
                      animate: !0,
                      endCircle: !1,
                      from: 0,
                      height: "100%",
                      id: "cKY_xlEqB",
                      layoutId: "cKY_xlEqB",
                      loopOptions: "reverse",
                      pathAnimation: {
                        damping: 60,
                        delay: 0,
                        duration: 2,
                        ease: [0.44, 0, 0.56, 1],
                        mass: 1,
                        stiffness: 500,
                        type: "tween",
                      },
                      shouldLoop: !0,
                      slots: [
                        e(h, {
                          className: "framer-zxs2v5",
                          "data-framer-name": "graphic",
                          layout: "position",
                          layoutDependency: n,
                          layoutId: "dgbgcnhWv",
                          opacity: 1,
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 87 87"><path d="M 49.764 12.484 L 56.144 25.35 C 57.014 27.14 59.334 28.859 61.292 29.185 L 72.852 31.124 C 80.247 32.368 81.987 37.776 76.658 43.108 L 67.668 52.171 C 66.145 53.708 65.312 56.666 65.783 58.79 L 68.357 70.01 C 70.387 78.891 65.71 82.324 57.917 77.684 L 47.078 71.213 C 45.12 70.046 41.894 70.046 39.9 71.213 L 29.069 77.684 C 21.311 82.324 16.599 78.851 18.629 70.01 L 21.203 58.79 C 21.674 56.67 20.84 53.708 19.318 52.175 L 10.328 43.112 C 5.039 37.772 6.743 32.364 14.134 31.121 L 25.698 29.181 C 27.619 28.855 29.939 27.137 30.809 25.346 L 37.189 12.481 C 40.669 5.503 46.324 5.503 49.768 12.481 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                          svgContentId: 4197431359,
                          withExternalLayout: !0,
                        }),
                      ],
                      style: { height: "100%", width: "100%" },
                      to: 100,
                      width: "100%",
                    }),
                  }),
                }),
                e(t.div, {
                  className: "framer-1fyytlm",
                  "data-border": !0,
                  layoutDependency: n,
                  layoutId: "MuqPZ5yCp",
                  style: {
                    "--border-bottom-width": "2px",
                    "--border-color":
                      'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                    "--border-left-width": "2px",
                    "--border-right-width": "2px",
                    "--border-style": "solid",
                    "--border-top-width": "2px",
                    backgroundColor:
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  },
                }),
                e(t.div, {
                  className: "framer-1hwsw4l",
                  "data-border": !0,
                  layoutDependency: n,
                  layoutId: "qP9wVNBi6",
                  style: {
                    "--border-bottom-width": "2px",
                    "--border-color":
                      'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                    "--border-left-width": "2px",
                    "--border-right-width": "2px",
                    "--border-style": "solid",
                    "--border-top-width": "2px",
                    backgroundColor:
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  },
                }),
                e(t.div, {
                  className: "framer-1ima3zx",
                  "data-border": !0,
                  layoutDependency: n,
                  layoutId: "sgkQ0dUhO",
                  style: {
                    "--border-bottom-width": "2px",
                    "--border-color":
                      'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                    "--border-left-width": "2px",
                    "--border-right-width": "2px",
                    "--border-style": "solid",
                    "--border-top-width": "2px",
                    backgroundColor:
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  },
                }),
                e(t.div, {
                  className: "framer-1vu3b1q",
                  "data-border": !0,
                  layoutDependency: n,
                  layoutId: "xHQZLrE5j",
                  style: {
                    "--border-bottom-width": "2px",
                    "--border-color":
                      'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                    "--border-left-width": "2px",
                    "--border-right-width": "2px",
                    "--border-style": "solid",
                    "--border-top-width": "2px",
                    backgroundColor:
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  },
                }),
                f(t.div, {
                  className: "framer-dro8xl",
                  layoutDependency: n,
                  layoutId: "eICFDVV4I",
                  children: [
                    e(h, {
                      className: "framer-1v0ulhg",
                      "data-framer-name": "graphic",
                      layout: "position",
                      layoutDependency: n,
                      layoutId: "Ct2Mn4Tn0",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14"><path d="M 1.458 7 C 1.458 4.388 1.458 3.081 2.27 2.27 C 3.081 1.458 4.387 1.458 7 1.458 C 9.612 1.458 10.919 1.458 11.73 2.27 C 12.542 3.081 12.542 4.387 12.542 7 C 12.542 9.612 12.542 10.919 11.73 11.73 C 10.918 12.542 9.613 12.542 7 12.542 C 4.388 12.542 3.081 12.542 2.27 11.73 C 1.458 10.918 1.458 9.613 1.458 7 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 8.723 7.23 C 8.635 7.596 8.217 7.855 7.381 8.371 C 6.574 8.87 6.171 9.12 5.845 9.02 C 5.708 8.977 5.585 8.898 5.489 8.791 C 5.25 8.528 5.25 8.018 5.25 7 C 5.25 5.981 5.25 5.472 5.489 5.209 C 5.588 5.101 5.711 5.022 5.845 4.98 C 6.171 4.88 6.574 5.13 7.382 5.629 C 8.217 6.146 8.635 6.404 8.723 6.77 C 8.759 6.921 8.759 7.079 8.723 7.23 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */"></path></svg>',
                      svgContentId: 2502751192,
                      withExternalLayout: !0,
                    }),
                    e(w, {
                      __fromCanvasComponent: !0,
                      children: e(m, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "SW50ZXItTWVkaXVt",
                            "--framer-font-family":
                              '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "11px",
                            "--framer-font-weight": "500",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                          },
                          children: "Frame",
                        }),
                      }),
                      className: "framer-fgbv1l",
                      fonts: ["Inter-Medium"],
                      layoutDependency: n,
                      layoutId: "IkS1HPiBw",
                      style: {
                        "--extracted-r6o4lv":
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  }),
  Bn = [
    '.framer-z7cEM[data-border="true"]::after, .framer-z7cEM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-z7cEM.framer-1tqyymi, .framer-z7cEM .framer-1tqyymi { display: block; }",
    ".framer-z7cEM.framer-1nrrj4f { height: 440px; overflow: visible; position: relative; width: 509px; }",
    ".framer-z7cEM .framer-wxag6i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 227px; overflow: hidden; padding: 16px 16px 16px 16px; position: absolute; top: 157px; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-z7cEM .framer-jbkxxt, .framer-z7cEM .framer-1xpcus7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 250px; word-break: break-word; word-wrap: break-word; }",
    ".framer-z7cEM .framer-1awth9u { align-content: center; align-items: center; bottom: 27px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; left: 9px; overflow: visible; padding: 10px 10px 10px 10px; position: absolute; width: auto; }",
    ".framer-z7cEM .framer-19gi3s1 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 7px; word-break: break-word; word-wrap: break-word; }",
    ".framer-z7cEM .framer-16hg1lo { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 181px; word-break: break-word; word-wrap: break-word; }",
    ".framer-z7cEM .framer-114oeri { flex: none; height: 46px; left: 146px; position: absolute; top: calc(47.04545454545457% - 46px / 2); width: 38px; }",
    ".framer-z7cEM .framer-pwi8nv { flex: none; height: 129px; left: 97px; overflow: hidden; position: absolute; top: 13px; width: 113px; }",
    ".framer-z7cEM .framer-189xbsn { bottom: 2px; flex: none; height: 109px; left: calc(49.557522123893825% - 109px / 2); overflow: visible; position: absolute; width: 109px; }",
    ".framer-z7cEM .framer-5sppe6-container { flex: none; height: 89px; left: calc(50.314465408805056% - 89px / 2); position: absolute; top: calc(49.685534591194994% - 89px / 2); width: 89px; }",
    ".framer-z7cEM .framer-zxs2v5 { height: 87px; position: relative; width: 87px; }",
    ".framer-z7cEM .framer-1fyytlm { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 6px); left: 0px; overflow: visible; position: absolute; top: 16px; width: 6px; }",
    ".framer-z7cEM .framer-1hwsw4l { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 6px); overflow: visible; position: absolute; right: 0px; top: 16px; width: 6px; }",
    ".framer-z7cEM .framer-1ima3zx { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 6px); left: 0px; overflow: visible; position: absolute; width: 6px; }",
    ".framer-z7cEM .framer-1vu3b1q { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 6px); overflow: visible; position: absolute; right: 0px; width: 6px; }",
    ".framer-z7cEM .framer-dro8xl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: 0px; width: min-content; }",
    ".framer-z7cEM .framer-1v0ulhg { flex: none; height: 14px; position: relative; width: 14px; }",
    ".framer-z7cEM .framer-fgbv1l { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-z7cEM .framer-wxag6i, .framer-z7cEM .framer-1awth9u, .framer-z7cEM .framer-dro8xl { gap: 0px; } .framer-z7cEM .framer-wxag6i > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-z7cEM .framer-wxag6i > :first-child { margin-top: 0px; } .framer-z7cEM .framer-wxag6i > :last-child { margin-bottom: 0px; } .framer-z7cEM .framer-1awth9u > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-z7cEM .framer-1awth9u > :first-child, .framer-z7cEM .framer-dro8xl > :first-child { margin-left: 0px; } .framer-z7cEM .framer-1awth9u > :last-child, .framer-z7cEM .framer-dro8xl > :last-child { margin-right: 0px; } .framer-z7cEM .framer-dro8xl > * { margin: 0px; margin-left: calc(2px / 2); margin-right: calc(2px / 2); } }",
    ".framer-z7cEM.framer-v-1m2kmrr .framer-114oeri { left: 166px; top: 174px; }",
    ".framer-z7cEM.framer-v-13on17a .framer-wxag6i, .framer-z7cEM.framer-v-1hbbin7 .framer-wxag6i { left: 307px; top: 57px; }",
    ".framer-z7cEM.framer-v-13on17a .framer-1awth9u, .framer-z7cEM.framer-v-1hbbin7 .framer-1awth9u { bottom: 7px; left: unset; right: 2px; }",
    ".framer-z7cEM.framer-v-13on17a .framer-114oeri { left: 78px; top: 103px; }",
    ".framer-z7cEM.framer-v-13on17a .framer-pwi8nv, .framer-z7cEM.framer-v-1hbbin7 .framer-pwi8nv { bottom: 78px; left: 167px; top: unset; }",
    ".framer-z7cEM.framer-v-1hbbin7 .framer-114oeri { left: 88px; top: 123px; }",
    ".framer-z7cEM.framer-v-dhvizj .framer-wxag6i, .framer-z7cEM.framer-v-iyj12e .framer-wxag6i { left: 217px; top: 147px; }",
    ".framer-z7cEM.framer-v-dhvizj .framer-jbkxxt, .framer-z7cEM.framer-v-dhvizj .framer-1xpcus7, .framer-z7cEM.framer-v-iyj12e .framer-jbkxxt, .framer-z7cEM.framer-v-iyj12e .framer-1xpcus7 { width: 190px; }",
    ".framer-z7cEM.framer-v-dhvizj .framer-1awth9u, .framer-z7cEM.framer-v-iyj12e .framer-1awth9u { bottom: -23px; left: unset; right: 22px; }",
    ".framer-z7cEM.framer-v-dhvizj .framer-114oeri { left: 138px; top: 33px; }",
    ".framer-z7cEM.framer-v-dhvizj .framer-pwi8nv, .framer-z7cEM.framer-v-iyj12e .framer-pwi8nv { left: unset; right: 18px; top: 2px; }",
    ".framer-z7cEM.framer-v-iyj12e .framer-114oeri { left: 138px; top: 53px; }",
    ...ce,
  ],
  Ke = H(Fn, Bn, "framer-z7cEM"),
  jr = Ke;
Ke.displayName = "About/PathFramer";
Ke.defaultProps = { height: 440, width: 509 };
Q(Ke, {
  variant: {
    options: [
      "QzmPcnCyo",
      "BAKxvevuu",
      "rZiLc0hom",
      "IoNj2dRgK",
      "MWsYLcoZO",
      "Cv4vHdxd4",
    ],
    optionTitles: [
      "Default",
      "Collasped",
      "Vertical",
      "Vertical_Collasped",
      "Vertical_Mobile",
      "Vertical_Mobile_Collasped",
    ],
    title: "Variant",
    type: k.Enum,
  },
});
W(Ke, [
  {
    family: "Space Mono",
    style: "normal",
    url: "https://fonts.gstatic.com/s/spacemono/v13/i7dMIFZifjKcF5UAWdDRaPpZYFeQHwyVd3U.woff2",
    weight: "700",
  },
  ...Cn,
  ...de,
]);
var Sn = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerLVYSIbjA4",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"BAKxvevuu":{"layout":["fixed","fixed"]},"rZiLc0hom":{"layout":["fixed","fixed"]},"IoNj2dRgK":{"layout":["fixed","fixed"]},"MWsYLcoZO":{"layout":["fixed","fixed"]},"Cv4vHdxd4":{"layout":["fixed","fixed"]}}}',
        framerIntrinsicWidth: "509",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerIntrinsicHeight: "440",
        framerDisplayContentsDiv: "false",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var Mt = {};
ye(Mt, { __FramerMetadata__: () => x1, default: () => Mr });
var An = C(ct),
  En = hr(t.div),
  Un = ["RW_DOWEFf", "Eqb6zgc4d", "x8Jl49UlW", "GSPxmIOiO"],
  Hn = "framer-VjCek",
  Wn = {
    Eqb6zgc4d: "framer-v-1yvgvyc",
    GSPxmIOiO: "framer-v-yowwjf",
    RW_DOWEFf: "framer-v-1pa813f",
    x8Jl49UlW: "framer-v-1ph7pin",
  };
function Ir(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var Xn = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var On = { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
  Zn = { opacity: 1, rotate: 0, scale: 1, x: -213, y: 0 },
  Yn = { opacity: 1, rotate: 0, scale: 1, x: -193, y: 0 },
  Gn = { opacity: 1, rotate: 0, scale: 1, x: -184, y: 0 },
  Kn = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  Jn = {
    "Variant 2": "Eqb6zgc4d",
    "Variant 3": "x8Jl49UlW",
    Instagram: "RW_DOWEFf",
    NoAnimate: "GSPxmIOiO",
  },
  $n = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = Jn[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "RW_DOWEFf",
    };
  },
  e1 = (a, r) => r.join("-") + a.layoutDependency,
  r1 = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = $n(a),
      {
        baseVariant: d,
        classNames: q,
        gestureVariant: j,
        setGestureState: u,
        setVariant: x,
        transition: I,
        variants: V,
      } = G({
        cycleOrder: Un,
        defaultVariant: "RW_DOWEFf",
        transitions: Xn,
        variant: b,
        variantClassNames: Wn,
      }),
      n = e1(a, V),
      y = F(null),
      c = () => !["Eqb6zgc4d", "x8Jl49UlW", "GSPxmIOiO"].includes(d),
      M = () => !["x8Jl49UlW", "GSPxmIOiO"].includes(d),
      $ = A(),
      K = [];
    return e(E, {
      id: p ?? $,
      children: e(Kn, {
        value: I,
        children: f(t.div, {
          ..._,
          animate: V,
          className: P(Hn, ...K, "framer-1pa813f", s, q),
          "data-framer-name": "Instagram",
          initial: b,
          layoutDependency: n,
          layoutId: "RW_DOWEFf",
          onHoverEnd: () => u({ isHovered: !1 }),
          onHoverStart: () => u({ isHovered: !0 }),
          onTap: () => u({ isPressed: !1 }),
          onTapCancel: () => u({ isPressed: !1 }),
          onTapStart: () => u({ isPressed: !0 }),
          ref: r ?? y,
          style: {
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            ...l,
          },
          variants: {
            Eqb6zgc4d: {
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            },
            GSPxmIOiO: {
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            },
            x8Jl49UlW: {
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            },
          },
          ...Ir(
            {
              Eqb6zgc4d: { "data-framer-name": "Variant 2" },
              GSPxmIOiO: { "data-framer-name": "NoAnimate" },
              x8Jl49UlW: { "data-framer-name": "Variant 3" },
            },
            d,
            j,
          ),
          children: [
            c() &&
              f(t.div, {
                className: "framer-iy58ie",
                layoutDependency: n,
                layoutId: "UJUVaGNhy",
                children: [
                  e(t.div, {
                    className: "framer-cefxos-container",
                    layoutDependency: n,
                    layoutId: "fWpayr6MB-container",
                    children: e(ct, {
                      color:
                        'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                      customLocale: "en",
                      font: {
                        fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        lineHeight: "1em",
                      },
                      height: "100%",
                      id: "fWpayr6MB",
                      layoutId: "fWpayr6MB",
                      localeType: "auto",
                      monthFormat: "long",
                      outputType: "time",
                      showHours: !0,
                      showMinutes: !0,
                      showSeconds: !1,
                      showWeekday: !0,
                      showYear: !0,
                      style: { width: "100%" },
                      timeFormat: "24h",
                      width: "100%",
                    }),
                  }),
                  e(h, {
                    className: "framer-vwwe6e",
                    layout: "position",
                    layoutDependency: n,
                    layoutId: "iFehlGESU-shape",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 23"><path d="M 1.231 11.5 C 1.231 5.817 5.838 1.211 11.52 1.211 L 52.48 1.211 C 58.162 1.211 62.769 5.817 62.769 11.5 L 62.769 11.5 C 62.769 17.183 58.162 21.789 52.48 21.789 L 11.52 21.789 C 5.838 21.789 1.231 17.183 1.231 11.5 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                    svgContentId: 3064506634,
                    withExternalLayout: !0,
                  }),
                  f(t.div, {
                    className: "framer-1c013ih",
                    layoutDependency: n,
                    layoutId: "uswFjvLmL",
                    style: {
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    },
                    children: [
                      e(h, {
                        className: "framer-1q57pm2",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: n,
                        layoutId: "dv1mSrEg9",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 3.303 8.833 L 3.363 8.833 C 3.652 8.833 3.917 8.833 4.131 8.862 C 4.369 8.894 4.619 8.969 4.825 9.175 C 5.031 9.381 5.106 9.631 5.138 9.869 C 5.167 10.084 5.167 10.349 5.167 10.637 L 5.167 11.363 C 5.167 11.652 5.167 11.917 5.138 12.131 C 5.106 12.369 5.031 12.619 4.825 12.825 C 4.619 13.031 4.369 13.106 4.131 13.138 C 3.916 13.167 3.651 13.167 3.363 13.167 L 3.303 13.167 C 3.015 13.167 2.75 13.167 2.535 13.138 C 2.298 13.106 2.048 13.031 1.842 12.825 C 1.635 12.619 1.561 12.369 1.529 12.131 C 1.5 11.916 1.5 11.651 1.5 11.363 L 1.5 10.637 C 1.5 10.348 1.5 10.083 1.529 9.869 C 1.561 9.631 1.635 9.381 1.842 9.175 C 2.048 8.969 2.298 8.894 2.535 8.862 C 2.751 8.833 3.015 8.833 3.303 8.833 Z M 7.97 6.167 L 8.03 6.167 C 8.319 6.167 8.583 6.167 8.798 6.195 C 9.035 6.227 9.285 6.302 9.491 6.509 C 9.698 6.715 9.773 6.965 9.805 7.202 C 9.833 7.417 9.833 7.682 9.833 7.97 L 9.833 11.363 C 9.833 11.652 9.833 11.917 9.805 12.131 C 9.773 12.369 9.698 12.619 9.491 12.825 C 9.285 13.031 9.035 13.106 8.798 13.138 C 8.583 13.167 8.318 13.167 8.03 13.167 L 7.97 13.167 C 7.681 13.167 7.417 13.167 7.202 13.138 C 6.965 13.106 6.715 13.031 6.509 12.825 C 6.302 12.619 6.227 12.369 6.195 12.131 C 6.167 11.916 6.167 11.651 6.167 11.363 L 6.167 7.97 C 6.167 7.681 6.167 7.417 6.195 7.202 C 6.227 6.965 6.302 6.715 6.509 6.509 C 6.715 6.302 6.965 6.227 7.202 6.195 C 7.417 6.167 7.682 6.167 7.97 6.167 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 12.637 3.5 L 12.697 3.5 C 12.985 3.5 13.25 3.5 13.465 3.529 C 13.702 3.561 13.952 3.635 14.158 3.842 C 14.365 4.048 14.439 4.298 14.471 4.535 C 14.5 4.751 14.5 5.015 14.5 5.303 L 14.5 11.363 C 14.5 11.652 14.5 11.917 14.471 12.131 C 14.439 12.369 14.365 12.619 14.158 12.825 C 13.952 13.031 13.702 13.106 13.465 13.138 C 13.249 13.167 12.985 13.167 12.697 13.167 L 12.637 13.167 C 12.348 13.167 12.083 13.167 11.869 13.138 C 11.631 13.106 11.381 13.031 11.175 12.825 C 10.969 12.619 10.894 12.369 10.862 12.131 C 10.833 11.916 10.833 11.651 10.833 11.363 L 10.833 5.303 C 10.833 5.015 10.833 4.75 10.862 4.535 C 10.894 4.298 10.969 4.048 11.175 3.842 C 11.381 3.635 11.631 3.561 11.869 3.529 C 12.084 3.5 12.349 3.5 12.637 3.5 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                        svgContentId: 491684760,
                        withExternalLayout: !0,
                      }),
                      e(h, {
                        className: "framer-aj1t0r",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: n,
                        layoutId: "AIvKIaGJA",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 12.435 4.232 C 12.836 4.633 13.008 5.139 13.089 5.739 C 13.096 5.792 13.103 5.846 13.108 5.9 L 13.45 5.957 C 13.663 5.993 13.849 6.023 14.001 6.061 C 14.169 6.097 14.329 6.161 14.475 6.25 C 14.729 6.412 14.928 6.648 15.047 6.925 C 15.111 7.084 15.147 7.252 15.155 7.423 C 15.167 7.579 15.167 7.767 15.167 7.983 L 15.167 8.017 C 15.167 8.233 15.167 8.421 15.155 8.578 C 15.147 8.749 15.11 8.917 15.047 9.075 C 14.928 9.353 14.729 9.588 14.475 9.751 C 14.323 9.847 14.164 9.9 14.002 9.94 C 13.849 9.977 13.663 10.007 13.45 10.043 L 13.108 10.1 C 13.103 10.155 13.096 10.209 13.089 10.261 C 13.008 10.861 12.836 11.367 12.435 11.768 C 12.033 12.169 11.528 12.341 10.928 12.423 C 10.35 12.5 9.615 12.5 8.703 12.5 L 5.297 12.5 C 4.385 12.5 3.65 12.5 3.072 12.423 C 2.472 12.341 1.967 12.169 1.565 11.768 C 1.165 11.367 0.991 10.861 0.911 10.261 C 0.833 9.683 0.833 8.948 0.833 8.037 L 0.833 7.963 C 0.833 7.052 0.833 6.317 0.911 5.739 C 0.992 5.139 1.164 4.633 1.565 4.232 C 1.967 3.831 2.472 3.658 3.072 3.578 C 3.65 3.5 4.385 3.5 5.297 3.5 L 8.703 3.5 C 9.615 3.5 10.35 3.5 10.928 3.578 C 11.528 3.659 12.033 3.831 12.435 4.232 Z M 13.161 6.923 C 13.167 7.241 13.167 7.587 13.167 7.963 L 13.167 8.037 C 13.167 8.413 13.167 8.76 13.161 9.077 L 13.269 9.059 C 13.503 9.021 13.653 8.995 13.767 8.968 C 13.826 8.957 13.883 8.937 13.936 8.908 C 14.021 8.854 14.087 8.775 14.127 8.683 C 14.147 8.626 14.157 8.566 14.158 8.505 C 14.167 8.389 14.167 8.237 14.167 8 C 14.167 7.763 14.167 7.611 14.158 7.495 C 14.157 7.434 14.147 7.374 14.127 7.317 C 14.087 7.225 14.021 7.147 13.936 7.093 C 13.883 7.064 13.826 7.043 13.767 7.033 C 13.602 6.997 13.436 6.966 13.269 6.941 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                        svgContentId: 284414223,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                ],
              }),
            M() &&
              f(t.div, {
                className: "framer-1hleqn0",
                layoutDependency: n,
                layoutId: "LKcf6HkLQ",
                children: [
                  e(h, {
                    className: "framer-lqdtds",
                    "data-framer-name": "instagram_wordmark",
                    layout: "position",
                    layoutDependency: n,
                    layoutId: "svfrjajqS",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 83 30"><path d="M 6.399 4.911 C 4.798 5.589 3.036 7.506 2.48 9.913 C 1.776 12.961 4.707 14.251 4.947 13.828 C 5.23 13.331 4.422 13.163 4.255 11.581 C 4.04 9.538 4.979 7.255 6.16 6.254 C 6.38 6.068 6.369 6.327 6.369 6.806 L 6.322 16.959 C 6.322 19.131 6.234 19.817 6.075 20.494 C 5.913 21.181 5.654 21.645 5.851 21.824 C 6.07 22.024 7.008 21.548 7.55 20.782 C 8.201 19.862 8.428 18.758 8.469 17.559 C 8.519 16.114 8.517 13.821 8.519 12.512 L 8.499 5.687 C 8.489 5.169 7.07 4.626 6.4 4.91 M 63.277 15.075 C 63.225 16.204 62.978 17.087 62.672 17.709 C 62.079 18.915 60.847 19.289 60.324 17.556 C 60.04 16.612 60.026 15.035 60.231 13.717 C 60.439 12.374 61.022 11.36 61.986 11.452 C 62.937 11.542 63.382 12.782 63.277 15.075 Z M 47.246 22.081 C 47.233 23.957 46.941 25.602 46.315 26.081 C 45.428 26.759 44.235 26.25 44.482 24.881 C 44.701 23.67 45.734 22.433 47.248 20.921 L 47.246 22.082 Z M 47.003 15.065 C 46.949 16.093 46.686 17.126 46.398 17.71 C 45.805 18.915 44.565 19.292 44.051 17.557 C 43.699 16.371 43.783 14.837 43.957 13.87 C 44.183 12.616 44.73 11.452 45.712 11.452 C 46.667 11.452 47.138 12.513 47.003 15.065 Z M 37.717 15.049 C 37.659 16.138 37.449 17.049 37.112 17.71 C 36.502 18.907 35.296 19.286 34.764 17.557 C 34.381 16.31 34.511 14.609 34.671 13.69 C 34.908 12.327 35.5 11.361 36.426 11.452 C 37.376 11.546 37.838 12.783 37.717 15.049 Z M 80.275 16.321 C 80.042 16.321 79.936 16.563 79.849 16.971 C 79.544 18.39 79.225 18.711 78.811 18.711 C 78.351 18.711 77.937 18.009 77.83 16.603 C 77.746 15.497 77.76 13.461 77.867 11.436 C 77.889 11.02 77.775 10.609 76.673 10.203 C 76.198 10.029 75.508 9.772 75.165 10.611 C 74.195 12.981 73.815 14.863 73.726 15.627 C 73.721 15.667 73.673 15.675 73.665 15.582 C 73.608 14.97 73.481 13.858 73.465 11.52 C 73.462 11.064 73.366 10.676 72.869 10.358 C 72.546 10.152 71.566 9.787 71.214 10.221 C 70.908 10.576 70.554 11.531 70.186 12.663 L 69.679 14.206 L 69.686 10.781 C 69.688 10.426 69.447 10.308 69.374 10.286 C 69.048 10.19 68.404 10.03 68.129 10.03 C 67.792 10.03 67.71 10.221 67.71 10.499 L 67.656 16.027 L 67.657 16.346 C 67.471 17.385 66.866 18.795 66.208 18.795 C 65.55 18.795 65.24 18.206 65.24 15.511 C 65.24 13.94 65.286 13.256 65.309 12.119 L 65.347 10.848 C 65.342 10.498 64.744 10.321 64.466 10.256 C 64.186 10.19 63.943 10.165 63.754 10.176 C 63.485 10.191 63.295 10.369 63.295 10.615 L 63.297 10.996 C 62.951 10.446 62.395 10.063 62.025 9.952 C 61.028 9.653 59.988 9.918 59.204 11.029 C 58.58 11.912 58.205 12.911 58.058 14.348 C 57.95 15.398 57.985 16.463 58.177 17.363 C 57.945 18.379 57.514 18.795 57.042 18.795 C 56.356 18.795 55.86 17.663 55.917 15.705 C 55.955 14.418 56.21 13.514 56.488 12.206 C 56.607 11.649 56.511 11.357 56.269 11.078 C 56.047 10.821 55.574 10.69 54.895 10.851 C 54.411 10.966 53.719 11.09 53.086 11.185 C 53.086 11.185 53.124 11.031 53.156 10.759 C 53.32 9.333 51.789 9.448 51.301 9.904 C 51.009 10.176 50.81 10.496 50.735 11.073 C 50.615 11.988 51.353 12.42 51.353 12.42 C 51.111 13.54 50.518 15.005 49.906 16.064 C 49.577 16.631 49.327 17.051 49.003 17.498 L 49 17 L 49.037 12.12 L 49.075 10.861 C 49.071 10.605 48.924 10.509 48.617 10.386 C 48.345 10.278 48.024 10.203 47.691 10.177 C 47.27 10.144 47.017 10.37 47.024 10.637 C 47.025 10.687 47.025 10.996 47.025 10.996 C 46.679 10.446 46.123 10.064 45.753 9.953 C 44.756 9.653 43.717 9.919 42.932 11.03 C 42.309 11.912 41.9 13.151 41.786 14.337 C 41.677 15.443 41.698 16.383 41.845 17.174 C 41.686 17.967 41.231 18.796 40.716 18.796 C 40.057 18.796 39.682 18.206 39.682 15.512 C 39.682 13.94 39.729 13.256 39.752 12.12 L 39.789 10.848 C 39.784 10.498 39.187 10.322 38.908 10.256 C 38.617 10.188 38.365 10.163 38.173 10.178 C 37.918 10.197 37.739 10.428 37.739 10.6 L 37.739 10.996 C 37.393 10.446 36.837 10.064 36.467 9.953 C 35.471 9.653 34.437 9.923 33.646 11.029 C 33.131 11.751 32.714 12.551 32.5 14.321 C 32.438 14.833 32.411 15.312 32.414 15.76 C 32.209 17.032 31.301 18.498 30.559 18.498 C 30.124 18.498 29.711 17.645 29.711 15.827 C 29.711 13.406 29.859 9.96 29.884 9.627 L 31.003 9.609 C 31.471 9.604 31.895 9.615 32.518 9.583 C 32.83 9.567 33.132 8.431 32.809 8.291 C 32.663 8.227 31.629 8.172 31.22 8.163 C 30.875 8.155 29.916 8.083 29.916 8.083 L 30.022 5.554 C 30.039 5.352 29.782 5.249 29.634 5.186 C 29.275 5.032 28.954 4.958 28.573 4.879 C 28.047 4.769 27.808 4.877 27.762 5.326 C 27.692 6.008 27.655 8.006 27.655 8.006 C 27.269 8.006 25.95 7.929 25.564 7.929 C 25.205 7.929 24.818 9.491 25.314 9.51 L 27.539 9.572 L 27.51 14.491 C 27.148 16.405 25.869 17.439 25.869 17.439 C 26.144 16.173 25.583 15.222 24.573 14.417 C 24.201 14.12 23.466 13.558 22.644 12.943 C 22.644 12.943 23.12 12.468 23.543 11.513 C 23.842 10.836 23.855 10.062 23.121 9.891 C 21.908 9.609 20.908 10.511 20.609 11.473 C 20.378 12.219 20.501 12.772 20.954 13.347 C 20.987 13.389 21.023 13.432 21.06 13.475 C 20.786 14.009 20.41 14.729 20.092 15.286 C 19.207 16.835 18.539 18.06 18.034 18.06 C 17.631 18.06 17.636 16.816 17.636 15.652 C 17.636 14.648 17.709 13.139 17.768 11.577 C 17.787 11.06 17.532 10.766 17.104 10.499 C 16.844 10.337 16.289 10.019 15.968 10.019 C 15.486 10.019 14.099 10.085 12.787 13.924 C 12.622 14.408 12.297 15.29 12.297 15.29 L 12.325 10.673 C 12.325 10.565 12.268 10.46 12.138 10.388 C 11.917 10.267 11.327 10.019 10.802 10.019 C 10.552 10.019 10.427 10.136 10.427 10.371 L 10.381 17.594 C 10.381 18.143 10.395 18.784 10.449 19.063 C 10.502 19.342 10.589 19.571 10.696 19.707 C 10.803 19.843 10.927 19.946 11.131 19.988 C 11.321 20.028 12.361 20.163 12.415 19.761 C 12.48 19.279 12.482 18.757 13.029 16.812 C 13.879 13.784 14.988 12.307 15.509 11.782 C 15.6 11.69 15.704 11.685 15.699 11.835 L 15.546 15.567 C 15.405 19.339 16.083 20.038 17.052 20.038 C 17.793 20.038 18.838 19.292 19.957 17.406 L 21.82 14.246 L 22.921 15.272 C 23.806 16.122 24.096 16.929 23.903 17.695 C 23.756 18.281 23.201 18.885 22.213 18.298 C 21.925 18.127 21.802 17.994 21.513 17.801 C 21.357 17.698 21.12 17.667 20.977 17.775 C 20.607 18.058 20.396 18.417 20.275 18.861 C 20.157 19.294 20.585 19.522 21.029 19.721 C 21.411 19.893 22.232 20.049 22.756 20.067 C 24.796 20.137 26.43 19.07 27.568 16.32 C 27.771 18.695 28.638 20.039 30.144 20.039 C 31.151 20.039 32.16 18.722 32.601 17.426 C 32.728 17.954 32.915 18.414 33.158 18.802 C 34.318 20.662 36.569 20.262 37.7 18.682 C 38.049 18.194 38.103 18.018 38.103 18.018 C 38.268 19.51 39.455 20.031 40.134 20.031 C 40.895 20.031 41.681 19.667 42.232 18.412 C 42.295 18.546 42.366 18.676 42.444 18.802 C 43.604 20.662 45.855 20.262 46.986 18.682 C 47.034 18.615 47.08 18.548 47.126 18.48 L 47.159 19.46 L 46.118 20.426 C 44.376 22.044 43.051 23.272 42.953 24.702 C 42.828 26.525 44.289 27.202 45.394 27.291 C 46.567 27.385 47.573 26.729 48.19 25.811 C 48.734 25.003 49.089 23.263 49.063 21.545 L 49.022 19.045 C 49.635 18.325 50.325 17.415 50.96 16.35 C 51.652 15.189 52.395 13.631 52.775 12.418 C 52.775 12.418 53.419 12.423 54.108 12.378 C 54.328 12.363 54.391 12.409 54.35 12.572 C 54.301 12.769 53.481 15.971 54.229 18.104 C 54.742 19.564 55.897 20.034 56.582 20.034 C 57.383 20.034 58.15 19.421 58.561 18.511 C 58.609 18.611 58.661 18.708 58.719 18.802 C 59.879 20.662 62.122 20.259 63.261 18.682 C 63.518 18.326 63.664 18.018 63.664 18.018 C 63.908 19.562 65.094 20.039 65.774 20.039 C 66.482 20.039 67.154 19.745 67.699 18.44 C 67.721 19.015 67.757 19.485 67.814 19.633 C 67.849 19.723 68.05 19.837 68.196 19.892 C 68.843 20.135 69.504 20.02 69.747 19.97 C 69.917 19.935 70.049 19.798 70.066 19.443 C 70.114 18.511 70.085 16.946 70.363 15.782 C 70.831 13.829 71.268 13.072 71.476 12.697 C 71.592 12.487 71.723 12.452 71.728 12.675 C 71.737 13.125 71.759 14.446 71.941 16.221 C 72.074 17.527 72.252 18.298 72.389 18.542 C 72.78 19.241 73.262 19.274 73.654 19.274 C 73.904 19.274 74.426 19.204 74.38 18.76 C 74.357 18.543 74.397 17.204 74.859 15.28 C 75.16 14.024 75.663 12.889 75.845 12.474 C 75.911 12.321 75.943 12.442 75.941 12.465 C 75.903 13.33 75.817 16.16 76.166 17.708 C 76.638 19.804 78.003 20.039 78.479 20.039 C 79.495 20.039 80.326 19.257 80.606 17.199 C 80.674 16.704 80.574 16.321 80.275 16.321" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                    svgContentId: 779670038,
                    withExternalLayout: !0,
                  }),
                  e(h, {
                    className: "framer-1d7d0c6",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: n,
                    layoutId: "ckPipOnrg",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 16.219 3.328 C 13.984 1.958 12.033 2.51 10.862 3.39 C 10.382 3.751 10.142 3.932 10 3.932 C 9.858 3.932 9.618 3.751 9.138 3.39 C 7.967 2.51 6.016 1.958 3.781 3.328 C 0.848 5.128 0.185 11.062 6.95 16.07 C 8.238 17.023 8.883 17.5 10 17.5 C 11.118 17.5 11.762 17.023 13.05 16.069 C 19.815 11.063 19.152 5.128 16.219 3.328 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path></svg>',
                    svgContentId: 453553511,
                    withExternalLayout: !0,
                  }),
                ],
              }),
            f(t.div, {
              className: "framer-6z69mu",
              layoutDependency: n,
              layoutId: "T3Awwhm3s",
              children: [
                f(t.div, {
                  className: "framer-1yx5y0j",
                  layoutDependency: n,
                  layoutId: "jR2CXfJir",
                  children: [
                    e(h, {
                      className: "framer-d95mz8",
                      layout: "position",
                      layoutDependency: n,
                      layoutId: "D7pSIBTM7",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58 19"><path d="M 10 1.141 C 14.617 1.141 18.359 4.883 18.359 9.5 C 18.359 14.117 14.617 17.859 10 17.859 C 5.383 17.859 1.641 14.117 1.641 9.5 C 1.641 4.883 5.383 1.141 10 1.141 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 24 9.5 C 24 8.948 24.448 8.5 25 8.5 L 57 8.5 C 57.552 8.5 58 8.948 58 9.5 L 58 9.5 C 58 10.052 57.552 10.5 57 10.5 L 25 10.5 C 24.448 10.5 24 10.052 24 9.5 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                      svgContentId: 3802276326,
                      withExternalLayout: !0,
                    }),
                    c() &&
                      e(h, {
                        className: "framer-1k7ec14",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: n,
                        layoutId: "gf73IUGjC",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.997 10 L 10.004 10 M 15 10 L 15.008 10 M 5 10 L 5.008 10" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                        svgContentId: 3641965367,
                        withExternalLayout: !0,
                      }),
                  ],
                }),
                e(t.div, {
                  className: "framer-1hefpjn",
                  "data-border": !0,
                  layoutDependency: n,
                  layoutId: "SJbFtb12O",
                  style: {
                    "--border-bottom-width": "2px",
                    "--border-color":
                      'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                    "--border-left-width": "2px",
                    "--border-right-width": "2px",
                    "--border-style": "solid",
                    "--border-top-width": "2px",
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  },
                  children: f(En, {
                    __framer__loop: Zn,
                    __framer__loopEffectEnabled: !0,
                    __framer__loopRepeatDelay: 1,
                    __framer__loopRepeatType: "mirror",
                    __framer__loopTransition: On,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: "framer-11rkpn5",
                    "data-framer-name": "Photo",
                    layoutDependency: n,
                    layoutId: "RXfpPBg0v",
                    style: {
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                    },
                    ...Ir(
                      {
                        Eqb6zgc4d: { __framer__loop: Yn },
                        GSPxmIOiO: { __framer__loopEffectEnabled: void 0 },
                        x8Jl49UlW: { __framer__loop: Gn },
                      },
                      d,
                      j,
                    ),
                    children: [
                      e(t.div, {
                        className: "framer-1n19qo1",
                        "data-border": !0,
                        layoutDependency: n,
                        layoutId: "GvYxY4a2e",
                        style: {
                          "--border-bottom-width": "2px",
                          "--border-color":
                            'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                          "--border-left-width": "2px",
                          "--border-right-width": "2px",
                          "--border-style": "solid",
                          "--border-top-width": "2px",
                          borderBottomLeftRadius: 4,
                          borderBottomRightRadius: 4,
                          borderTopLeftRadius: 4,
                          borderTopRightRadius: 4,
                        },
                        children: e(h, {
                          className: "framer-10fw3cy",
                          layout: "position",
                          layoutDependency: n,
                          layoutId: "rGsY3tTfy-shape",
                          opacity: 1,
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 152 153"><path d="M 74.797 16.07 C 76.151 12.753 80.849 12.753 82.203 16.07 L 98.883 56.925 C 99.29 57.92 100.08 58.71 101.075 59.117 L 141.93 75.797 C 145.247 77.151 145.247 81.849 141.93 83.203 L 101.075 99.883 C 100.08 100.29 99.29 101.08 98.883 102.075 L 82.203 142.93 C 80.849 146.247 76.151 146.247 74.797 142.93 L 58.117 102.075 C 57.71 101.08 56.92 100.29 55.925 99.883 L 15.07 83.203 C 11.753 81.849 11.753 77.151 15.07 75.797 L 55.925 59.117 C 56.92 58.71 57.71 57.92 58.117 56.925 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 23.648 5.535 C 24.326 3.876 26.674 3.876 27.352 5.535 L 32.285 17.619 C 32.488 18.117 32.883 18.512 33.381 18.715 L 45.465 23.648 C 47.124 24.326 47.124 26.674 45.465 27.352 L 33.381 32.285 C 32.883 32.488 32.488 32.883 32.285 33.381 L 27.352 45.465 C 26.674 47.124 24.326 47.124 23.648 45.465 L 18.715 33.381 C 18.512 32.883 18.117 32.488 17.619 32.285 L 5.535 27.352 C 3.876 26.674 3.876 24.326 5.535 23.648 L 17.619 18.715 C 18.117 18.512 18.512 18.117 18.715 17.619 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                          svgContentId: 2537989941,
                          withExternalLayout: !0,
                          ...Ir(
                            {
                              Eqb6zgc4d: {
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 101"><path d="M 49.209 10.608 C 50.098 8.423 53.192 8.423 54.081 10.608 L 65.056 37.582 C 65.323 38.236 65.841 38.756 66.495 39.024 L 93.401 50.047 C 95.579 50.939 95.579 54.022 93.401 54.914 L 66.495 65.937 C 65.841 66.205 65.323 66.724 65.056 67.379 L 54.081 94.353 C 53.192 96.538 50.098 96.538 49.209 94.353 L 38.233 67.379 C 37.967 66.724 37.448 66.205 36.794 65.937 L 9.888 54.914 C 7.711 54.022 7.711 50.939 9.888 50.047 L 36.794 39.024 C 37.448 38.756 37.967 38.236 38.233 37.582 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 15.554 3.665 C 16 2.568 17.553 2.568 17.999 3.665 L 21.24 11.631 C 21.374 11.959 21.634 12.22 21.962 12.355 L 29.913 15.612 C 31.006 16.06 31.006 17.607 29.913 18.055 L 21.962 21.312 C 21.634 21.446 21.374 21.707 21.24 22.036 L 17.999 30.002 C 17.553 31.098 16 31.098 15.554 30.002 L 12.312 22.036 C 12.179 21.707 11.918 21.446 11.59 21.312 L 3.64 18.055 C 2.547 17.607 2.547 16.06 3.64 15.612 L 11.59 12.355 C 11.918 12.22 12.179 11.959 12.312 11.631 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                                svgContentId: 1905700902,
                              },
                              GSPxmIOiO: {
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 102 103"><path d="M 50.209 11.608 C 51.098 9.423 54.192 9.423 55.081 11.608 L 66.056 38.582 C 66.323 39.236 66.841 39.756 67.495 40.024 L 94.401 51.047 C 96.579 51.939 96.579 55.022 94.401 55.914 L 67.495 66.937 C 66.841 67.205 66.323 67.724 66.056 68.379 L 55.081 95.353 C 54.192 97.538 51.098 97.538 50.209 95.353 L 39.233 68.379 C 38.967 67.724 38.448 67.205 37.794 66.937 L 10.888 55.914 C 8.711 55.022 8.711 51.939 10.888 51.047 L 37.794 40.024 C 38.448 39.756 38.967 39.236 39.233 38.582 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 16.554 4.665 C 17 3.568 18.553 3.568 18.999 4.665 L 22.24 12.631 C 22.374 12.959 22.634 13.22 22.962 13.355 L 30.913 16.612 C 32.006 17.06 32.006 18.607 30.913 19.055 L 22.962 22.312 C 22.634 22.446 22.374 22.707 22.24 23.036 L 18.999 31.002 C 18.553 32.098 17 32.098 16.554 31.002 L 13.312 23.036 C 13.179 22.707 12.918 22.446 12.59 22.312 L 4.64 19.055 C 3.547 18.607 3.547 17.06 4.64 16.612 L 12.59 13.355 C 12.918 13.22 13.179 12.959 13.312 12.631 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                                svgContentId: 805235312,
                              },
                              x8Jl49UlW: {
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 101"><path d="M 49.209 10.608 C 50.098 8.423 53.192 8.423 54.081 10.608 L 65.056 37.582 C 65.323 38.236 65.841 38.756 66.495 39.024 L 93.401 50.047 C 95.579 50.939 95.579 54.022 93.401 54.914 L 66.495 65.937 C 65.841 66.205 65.323 66.724 65.056 67.379 L 54.081 94.353 C 53.192 96.538 50.098 96.538 49.209 94.353 L 38.233 67.379 C 37.967 66.724 37.448 66.205 36.794 65.937 L 9.888 54.914 C 7.711 54.022 7.711 50.939 9.888 50.047 L 36.794 39.024 C 37.448 38.756 37.967 38.236 38.233 37.582 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 15.554 3.665 C 16 2.568 17.553 2.568 17.999 3.665 L 21.24 11.631 C 21.374 11.959 21.634 12.22 21.962 12.355 L 29.913 15.612 C 31.006 16.06 31.006 17.607 29.913 18.055 L 21.962 21.312 C 21.634 21.446 21.374 21.707 21.24 22.036 L 17.999 30.002 C 17.553 31.098 16 31.098 15.554 30.002 L 12.312 22.036 C 12.179 21.707 11.918 21.446 11.59 21.312 L 3.64 18.055 C 2.547 17.607 2.547 16.06 3.64 15.612 L 11.59 12.355 C 11.918 12.22 12.179 11.959 12.312 11.631 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                                svgContentId: 1905700902,
                              },
                            },
                            d,
                            j,
                          ),
                        }),
                      }),
                      e(t.div, {
                        className: "framer-13tuf5b",
                        "data-border": !0,
                        layoutDependency: n,
                        layoutId: "gBxAH1U0l",
                        style: {
                          "--border-bottom-width": "2px",
                          "--border-color":
                            'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                          "--border-left-width": "2px",
                          "--border-right-width": "2px",
                          "--border-style": "solid",
                          "--border-top-width": "2px",
                          borderBottomLeftRadius: 4,
                          borderBottomRightRadius: 4,
                          borderTopLeftRadius: 4,
                          borderTopRightRadius: 4,
                        },
                        children: e(h, {
                          className: "framer-hqgdvk",
                          layout: "position",
                          layoutDependency: n,
                          layoutId: "B5vPvckQ0-shape",
                          opacity: 1,
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 151 147"><path d="M 27.488 4.515 C 41.841 4.515 53.476 16.122 53.476 30.439 C 53.476 44.757 41.841 56.364 27.488 56.364 C 13.135 56.364 1.5 44.757 1.5 30.439 C 1.5 16.122 13.135 4.515 27.488 4.515 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 76.821 19.125 L 139.763 127.875 L 13.88 127.875 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                          svgContentId: 1250408896,
                          withExternalLayout: !0,
                          ...Ir(
                            {
                              Eqb6zgc4d: {
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 87 85"><path d="M 15.838 2.611 C 24.107 2.611 30.811 9.322 30.811 17.601 C 30.811 25.88 24.107 32.591 15.838 32.591 C 7.568 32.591 0.864 25.88 0.864 17.601 C 0.864 9.322 7.568 2.611 15.838 2.611 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 44.261 11.059 L 80.526 73.941 L 7.997 73.941 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                                svgContentId: 1907156319,
                              },
                              GSPxmIOiO: {
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 89 87"><path d="M 16.838 3.611 C 25.107 3.611 31.811 10.322 31.811 18.601 C 31.811 26.88 25.107 33.591 16.838 33.591 C 8.568 33.591 1.864 26.88 1.864 18.601 C 1.864 10.322 8.568 3.611 16.838 3.611 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 45.261 12.059 L 81.526 74.941 L 8.997 74.941 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                                svgContentId: 2658927461,
                              },
                              x8Jl49UlW: {
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 87 85"><path d="M 15.838 2.611 C 24.107 2.611 30.811 9.322 30.811 17.601 C 30.811 25.88 24.107 32.591 15.838 32.591 C 7.568 32.591 0.864 25.88 0.864 17.601 C 0.864 9.322 7.568 2.611 15.838 2.611 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 44.261 11.059 L 80.526 73.941 L 7.997 73.941 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                                svgContentId: 1907156319,
                              },
                            },
                            d,
                            j,
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
                M() &&
                  f(t.div, {
                    className: "framer-9l98tq",
                    layoutDependency: n,
                    layoutId: "EqPquml_l",
                    children: [
                      f(t.div, {
                        className: "framer-jx7kl0",
                        layoutDependency: n,
                        layoutId: "vVRKxhxO6",
                        children: [
                          e(h, {
                            className: "framer-1rc5d4u",
                            "data-framer-name": "graphic",
                            layout: "position",
                            layoutDependency: n,
                            layoutId: "B11EWdLYB",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 16.219 3.328 C 13.984 1.958 12.033 2.51 10.862 3.39 C 10.382 3.751 10.142 3.932 10 3.932 C 9.858 3.932 9.618 3.751 9.138 3.39 C 7.967 2.51 6.016 1.958 3.781 3.328 C 0.848 5.128 0.185 11.062 6.95 16.07 C 8.238 17.023 8.883 17.5 10 17.5 C 11.118 17.5 11.762 17.023 13.05 16.069 C 19.815 11.063 19.152 5.128 16.219 3.328 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path></svg>',
                            svgContentId: 453553511,
                            withExternalLayout: !0,
                          }),
                          e(h, {
                            className: "framer-1jthdit",
                            "data-framer-name": "graphic",
                            layout: "position",
                            layoutDependency: n,
                            layoutId: "JGRiSx48i",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 11.808 17.408 C 15.295 17.177 18.072 14.361 18.3 10.825 C 18.344 10.133 18.344 9.417 18.3 8.725 C 18.072 5.19 15.295 2.375 11.808 2.142 C 10.604 2.064 9.396 2.064 8.192 2.142 C 4.705 2.374 1.928 5.19 1.7 8.726 C 1.656 9.425 1.656 10.127 1.7 10.826 C 1.783 12.113 2.353 13.306 3.023 14.312 C 3.413 15.017 3.156 15.896 2.75 16.665 C 2.458 17.219 2.312 17.496 2.429 17.696 C 2.546 17.896 2.808 17.902 3.333 17.915 C 4.37 17.94 5.069 17.647 5.624 17.237 C 5.938 17.005 6.096 16.889 6.204 16.876 C 6.313 16.862 6.527 16.951 6.953 17.126 C 7.337 17.284 7.783 17.382 8.191 17.409 C 9.378 17.487 10.619 17.487 11.809 17.409 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path></svg>',
                            svgContentId: 3079396654,
                            withExternalLayout: !0,
                          }),
                          e(h, {
                            className: "framer-ok13nz",
                            "data-framer-name": "graphic",
                            layout: "position",
                            layoutDependency: n,
                            layoutId: "hUT9LOvqS",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 17.54 2.544 C 15.725 0.589 2.072 5.377 2.083 7.125 C 2.096 9.107 7.415 9.717 8.889 10.131 C 9.776 10.38 10.013 10.634 10.217 11.564 C 11.143 15.774 11.609 17.869 12.668 17.916 C 14.357 17.991 19.311 4.451 17.54 2.543 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 9.583 10.417 L 12.5 7.5" fill="transparent" stroke-width="1.25" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                            svgContentId: 4239440054,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      e(h, {
                        className: "framer-1asmci0",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: n,
                        layoutId: "Y1DTpxpew",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 9.997 10 L 10.004 10 M 15 10 L 15.008 10 M 5 10 L 5.008 10" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                        svgContentId: 3641965367,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
              ],
            }),
            c() &&
              f(t.div, {
                className: "framer-novoe",
                layoutDependency: n,
                layoutId: "FJuRa9ZcT",
                children: [
                  e(h, {
                    className: "framer-1qwp9ix",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: n,
                    layoutId: "TRZrAySHt",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 7.589 2.378 C 8.375 1.803 9.126 1.458 10 1.458 C 10.874 1.458 11.625 1.803 12.411 2.378 C 13.173 2.935 14.031 3.758 15.113 4.797 L 15.143 4.824 L 17.292 6.81 L 17.292 11.297 C 17.292 12.828 17.292 14.042 17.164 14.991 C 17.033 15.968 16.756 16.758 16.133 17.383 C 15.508 18.006 14.718 18.282 13.741 18.414 C 12.791 18.542 11.578 18.542 10.047 18.542 L 9.953 18.542 C 8.422 18.542 7.208 18.542 6.259 18.414 C 5.283 18.282 4.492 18.006 3.868 17.383 C 3.244 16.758 2.968 15.968 2.836 14.991 C 2.708 14.041 2.708 12.828 2.708 11.297 L 2.708 6.81 L 4.858 4.824 L 4.887 4.797 C 5.97 3.758 6.828 2.935 7.589 2.378 Z M 9.997 13.125 C 9.423 13.125 8.958 13.592 8.958 14.167 C 8.958 14.742 9.423 15.208 9.996 15.208 C 10.571 15.206 11.037 14.742 11.042 14.167 C 11.037 13.592 10.571 13.127 9.996 13.125 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 8.45 3.555 C 7.778 4.047 6.991 4.8 5.862 5.881 L 2.243 9.352 C 1.911 9.67 1.383 9.659 1.065 9.327 C 0.747 8.994 0.758 8.467 1.09 8.148 L 4.752 4.637 C 5.827 3.607 6.694 2.776 7.467 2.21 C 8.271 1.622 9.065 1.25 10 1.25 C 10.935 1.25 11.729 1.622 12.533 2.21 C 13.307 2.776 14.173 3.607 15.248 4.637 L 18.91 8.148 C 19.242 8.467 19.253 8.994 18.935 9.327 C 18.617 9.659 18.089 9.67 17.757 9.352 L 14.138 5.881 C 13.009 4.8 12.223 4.048 11.549 3.555 C 10.898 3.078 10.445 2.917 10 2.917 C 9.555 2.917 9.103 3.078 8.45 3.555 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                    svgContentId: 4204610751,
                    withExternalLayout: !0,
                  }),
                  e(h, {
                    className: "framer-1hx9eym",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: n,
                    layoutId: "VI7tOO1go",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 14.583 14.583 L 18.333 18.333" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 16.667 9.167 C 16.667 5.025 13.309 1.667 9.167 1.667 C 5.025 1.667 1.667 5.025 1.667 9.167 C 1.667 13.309 5.025 16.667 9.167 16.667 C 13.309 16.667 16.667 13.309 16.667 9.167 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 3807933280,
                    withExternalLayout: !0,
                  }),
                  e(h, {
                    className: "framer-1ymahrp",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: n,
                    layoutId: "zLdGoKU3h",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 2.083 10 C 2.083 6.268 2.083 4.402 3.243 3.243 C 4.402 2.083 6.268 2.083 10 2.083 C 13.732 2.083 15.598 2.083 16.758 3.243 C 17.917 4.402 17.917 6.268 17.917 10 C 17.917 13.732 17.917 15.598 16.758 16.758 C 15.598 17.917 13.732 17.917 10 17.917 C 6.268 17.917 4.402 17.917 3.243 16.758 C 2.083 15.598 2.083 13.732 2.083 10 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 10 6.667 L 10 13.333 M 13.333 10 L 6.667 10" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 849496913,
                    withExternalLayout: !0,
                  }),
                  e(h, {
                    className: "framer-ib436h",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: n,
                    layoutId: "tNfvBU3zx",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 2.083 6.25 L 17.917 6.25 M 14.167 2.083 L 11.667 6.25 M 8.333 2.083 L 5.833 6.25" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 2.083 10 C 2.083 6.268 2.083 4.402 3.243 3.243 C 4.402 2.083 6.268 2.083 10 2.083 C 13.732 2.083 15.598 2.083 16.758 3.243 C 17.917 4.402 17.917 6.268 17.917 10 C 17.917 13.732 17.917 15.598 16.758 16.758 C 15.598 17.917 13.732 17.917 10 17.917 C 6.268 17.917 4.402 17.917 3.243 16.758 C 2.083 15.598 2.083 13.732 2.083 10 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="8.333333333333334" stroke-dasharray=""></path><path d="M 12.461 12.413 C 12.335 12.935 11.738 13.304 10.544 14.042 C 9.392 14.755 8.815 15.113 8.35 14.968 C 8.154 14.907 7.979 14.794 7.842 14.642 C 7.5 14.267 7.5 13.539 7.5 12.083 C 7.5 10.628 7.5 9.9 7.842 9.525 C 7.983 9.37 8.158 9.258 8.35 9.197 C 8.815 9.054 9.392 9.412 10.545 10.125 C 11.738 10.863 12.335 11.232 12.462 11.754 C 12.513 11.971 12.513 12.196 12.462 12.413 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 3292263729,
                    withExternalLayout: !0,
                  }),
                  e(h, {
                    className: "framer-1plkf5",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: n,
                    layoutId: "n4K7d2J_8",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 1.667 10 C 1.667 5.398 5.398 1.667 10 1.667 C 14.602 1.667 18.333 5.398 18.333 10 C 18.333 14.602 14.602 18.333 10 18.333 C 5.398 18.333 1.667 14.602 1.667 10 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="8.333333333333334" stroke-dasharray=""></path><path d="M 6.25 14.167 C 8.193 12.132 11.786 12.036 13.75 14.167 M 12.079 7.917 C 12.079 9.067 11.146 10 9.993 10 C 9.44 10 8.91 9.781 8.519 9.39 C 8.127 9 7.907 8.47 7.907 7.917 C 7.907 6.767 8.84 5.833 9.993 5.833 C 11.145 5.833 12.078 6.765 12.079 7.917 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                    svgContentId: 216415060,
                    withExternalLayout: !0,
                  }),
                ],
              }),
            c() &&
              e(h, {
                className: "framer-ulkwee",
                layout: "position",
                layoutDependency: n,
                layoutId: "sZ6JSz3qn-shape",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 79 3"><path d="M 1.5 1 L 77.5 1" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                svgContentId: 1985682267,
                withExternalLayout: !0,
              }),
          ],
        }),
      }),
    });
  }),
  t1 = [
    '.framer-VjCek[data-border="true"]::after, .framer-VjCek [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-VjCek.framer-1ifm8h8, .framer-VjCek .framer-1ifm8h8 { display: block; }",
    ".framer-VjCek.framer-1pa813f { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 407px; justify-content: flex-start; overflow: hidden; padding: 10px 10px 10px 10px; position: relative; width: 229px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-VjCek .framer-iy58ie { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 27px; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-VjCek .framer-cefxos-container { flex: none; height: auto; position: relative; width: 33px; }",
    ".framer-VjCek .framer-vwwe6e { flex: none; height: 23px; position: relative; width: 64px; }",
    ".framer-VjCek .framer-1c013ih { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-VjCek .framer-1q57pm2, .framer-VjCek .framer-aj1t0r { flex: none; height: 16px; position: relative; width: 16px; }",
    ".framer-VjCek .framer-1hleqn0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 30px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-VjCek .framer-lqdtds { flex: none; height: 30px; position: relative; width: 83px; }",
    ".framer-VjCek .framer-1d7d0c6, .framer-VjCek .framer-1k7ec14, .framer-VjCek .framer-1rc5d4u, .framer-VjCek .framer-1jthdit, .framer-VjCek .framer-ok13nz, .framer-VjCek .framer-1asmci0, .framer-VjCek .framer-1qwp9ix, .framer-VjCek .framer-1hx9eym, .framer-VjCek .framer-1ymahrp, .framer-VjCek .framer-ib436h, .framer-VjCek .framer-1plkf5 { flex: none; height: 20px; position: relative; width: 20px; }",
    ".framer-VjCek .framer-6z69mu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 10px 0px; position: relative; width: 100%; }",
    ".framer-VjCek .framer-1yx5y0j, .framer-VjCek .framer-9l98tq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-VjCek .framer-d95mz8 { flex: none; height: 19px; position: relative; width: 58px; }",
    ".framer-VjCek .framer-1hefpjn { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-VjCek .framer-11rkpn5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-VjCek .framer-1n19qo1, .framer-VjCek .framer-13tuf5b { flex: none; height: 100%; overflow: visible; position: relative; width: 209px; }",
    ".framer-VjCek .framer-10fw3cy { flex: none; height: 153px; left: calc(50.23923444976079% - 152px / 2); position: absolute; top: calc(49.743589743589766% - 153px / 2); width: 152px; }",
    ".framer-VjCek .framer-hqgdvk { flex: none; height: 147px; left: calc(54.54545454545456% - 151px / 2); position: absolute; top: calc(52.307692307692335% - 147px / 2); width: 151px; }",
    ".framer-VjCek .framer-jx7kl0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 20px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-VjCek .framer-novoe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 0px 0px 10px 0px; position: relative; width: 100%; }",
    ".framer-VjCek .framer-ulkwee { flex: none; height: 3px; position: relative; width: 79px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-VjCek.framer-1pa813f, .framer-VjCek .framer-1c013ih, .framer-VjCek .framer-6z69mu, .framer-VjCek .framer-1hefpjn, .framer-VjCek .framer-11rkpn5, .framer-VjCek .framer-jx7kl0 { gap: 0px; } .framer-VjCek.framer-1pa813f > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-VjCek.framer-1pa813f > :first-child, .framer-VjCek .framer-6z69mu > :first-child, .framer-VjCek .framer-1hefpjn > :first-child { margin-top: 0px; } .framer-VjCek.framer-1pa813f > :last-child, .framer-VjCek .framer-6z69mu > :last-child, .framer-VjCek .framer-1hefpjn > :last-child { margin-bottom: 0px; } .framer-VjCek .framer-1c013ih > *, .framer-VjCek .framer-11rkpn5 > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-VjCek .framer-1c013ih > :first-child, .framer-VjCek .framer-11rkpn5 > :first-child, .framer-VjCek .framer-jx7kl0 > :first-child { margin-left: 0px; } .framer-VjCek .framer-1c013ih > :last-child, .framer-VjCek .framer-11rkpn5 > :last-child, .framer-VjCek .framer-jx7kl0 > :last-child { margin-right: 0px; } .framer-VjCek .framer-6z69mu > *, .framer-VjCek .framer-1hefpjn > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-VjCek .framer-jx7kl0 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }",
    ".framer-VjCek.framer-v-1yvgvyc.framer-1pa813f { height: 229px; width: 209px; }",
    ".framer-VjCek.framer-v-1yvgvyc .framer-6z69mu, .framer-VjCek.framer-v-1ph7pin .framer-6z69mu, .framer-VjCek.framer-v-yowwjf .framer-6z69mu { padding: 0px 0px 0px 0px; }",
    ".framer-VjCek.framer-v-1yvgvyc .framer-1n19qo1, .framer-VjCek.framer-v-1yvgvyc .framer-13tuf5b { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; padding: 0px 0px 0px 0px; width: 189px; }",
    ".framer-VjCek.framer-v-1yvgvyc .framer-10fw3cy, .framer-VjCek.framer-v-1ph7pin .framer-10fw3cy { height: 101px; left: unset; position: relative; top: unset; width: 100px; }",
    ".framer-VjCek.framer-v-1yvgvyc .framer-hqgdvk, .framer-VjCek.framer-v-1ph7pin .framer-hqgdvk { height: 85px; left: unset; position: relative; top: unset; width: 87px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-VjCek.framer-v-1yvgvyc .framer-1n19qo1, .framer-VjCek.framer-v-1yvgvyc .framer-13tuf5b { gap: 0px; } .framer-VjCek.framer-v-1yvgvyc .framer-1n19qo1 > *, .framer-VjCek.framer-v-1yvgvyc .framer-13tuf5b > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-VjCek.framer-v-1yvgvyc .framer-1n19qo1 > :first-child, .framer-VjCek.framer-v-1yvgvyc .framer-13tuf5b > :first-child { margin-left: 0px; } .framer-VjCek.framer-v-1yvgvyc .framer-1n19qo1 > :last-child, .framer-VjCek.framer-v-1yvgvyc .framer-13tuf5b > :last-child { margin-right: 0px; } }",
    ".framer-VjCek.framer-v-1ph7pin.framer-1pa813f, .framer-VjCek.framer-v-yowwjf.framer-1pa813f { height: 200px; width: 200px; }",
    ".framer-VjCek.framer-v-1ph7pin .framer-1n19qo1, .framer-VjCek.framer-v-1ph7pin .framer-13tuf5b, .framer-VjCek.framer-v-yowwjf .framer-1n19qo1, .framer-VjCek.framer-v-yowwjf .framer-13tuf5b { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; padding: 0px 0px 0px 0px; width: 180px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-VjCek.framer-v-1ph7pin .framer-1n19qo1, .framer-VjCek.framer-v-1ph7pin .framer-13tuf5b { gap: 0px; } .framer-VjCek.framer-v-1ph7pin .framer-1n19qo1 > *, .framer-VjCek.framer-v-1ph7pin .framer-13tuf5b > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-VjCek.framer-v-1ph7pin .framer-1n19qo1 > :first-child, .framer-VjCek.framer-v-1ph7pin .framer-13tuf5b > :first-child { margin-left: 0px; } .framer-VjCek.framer-v-1ph7pin .framer-1n19qo1 > :last-child, .framer-VjCek.framer-v-1ph7pin .framer-13tuf5b > :last-child { margin-right: 0px; } }",
    ".framer-VjCek.framer-v-yowwjf .framer-10fw3cy { height: 103px; left: unset; position: relative; top: unset; width: 102px; }",
    ".framer-VjCek.framer-v-yowwjf .framer-hqgdvk { height: 87px; left: unset; position: relative; top: unset; width: 89px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-VjCek.framer-v-yowwjf .framer-1n19qo1, .framer-VjCek.framer-v-yowwjf .framer-13tuf5b { gap: 0px; } .framer-VjCek.framer-v-yowwjf .framer-1n19qo1 > *, .framer-VjCek.framer-v-yowwjf .framer-13tuf5b > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-VjCek.framer-v-yowwjf .framer-1n19qo1 > :first-child, .framer-VjCek.framer-v-yowwjf .framer-13tuf5b > :first-child { margin-left: 0px; } .framer-VjCek.framer-v-yowwjf .framer-1n19qo1 > :last-child, .framer-VjCek.framer-v-yowwjf .framer-13tuf5b > :last-child { margin-right: 0px; } }",
  ],
  Je = H(r1, t1, "framer-VjCek"),
  Rt = Je;
Je.displayName = "About/Instagram";
Je.defaultProps = { height: 407, width: 229 };
Q(Je, {
  variant: {
    options: ["RW_DOWEFf", "Eqb6zgc4d", "x8Jl49UlW", "GSPxmIOiO"],
    optionTitles: ["Instagram", "Variant 2", "Variant 3", "NoAnimate"],
    title: "Variant",
    type: k.Enum,
  },
});
W(Je, [
  {
    family: "Inter",
    style: "normal",
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZ1rib2Bg-4.woff2",
    weight: "600",
  },
  ...An,
]);
var a1 = C(Rt),
  o1 = oe(w),
  i1 = ie(w),
  n1 = [
    "WTqIuZ_lT",
    "hzOXdm1WO",
    "G7I1c6Whg",
    "o74f4Uw7T",
    "CQcurg_Sv",
    "gjQ3ibaWu",
  ],
  l1 = "framer-NnytS",
  s1 = {
    CQcurg_Sv: "framer-v-mf1lpl",
    G7I1c6Whg: "framer-v-1jcn32g",
    gjQ3ibaWu: "framer-v-1lsmris",
    hzOXdm1WO: "framer-v-1e0wp1o",
    o74f4Uw7T: "framer-v-1astwza",
    WTqIuZ_lT: "framer-v-1h0t2gq",
  };
function Rr(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var f1 = {
  default: { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
};
var m1 = (a, r) => `translateY(-50%) ${r}`,
  d1 = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  c1 = {
    Collasped: "hzOXdm1WO",
    Default: "WTqIuZ_lT",
    Vertical_Collasped: "o74f4Uw7T",
    Vertical_Mobile_Collasped: "gjQ3ibaWu",
    Vertical_Mobile: "CQcurg_Sv",
    Vertical: "G7I1c6Whg",
  },
  p1 = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = c1[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "WTqIuZ_lT",
    };
  },
  h1 = (a, r) => r.join("-") + a.layoutDependency,
  u1 = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = p1(a),
      {
        baseVariant: d,
        classNames: q,
        gestureVariant: j,
        setGestureState: u,
        setVariant: x,
        transition: I,
        variants: V,
      } = G({
        cycleOrder: n1,
        defaultVariant: "WTqIuZ_lT",
        transitions: f1,
        variant: b,
        variantClassNames: s1,
      }),
      n = h1(a, V),
      y = F(null),
      c = A(),
      M = [pe];
    return e(E, {
      id: p ?? c,
      children: e(d1, {
        value: I,
        children: f(t.div, {
          ..._,
          animate: V,
          className: P(l1, ...M, "framer-1h0t2gq", s, q),
          "data-framer-name": "Default",
          initial: b,
          layoutDependency: n,
          layoutId: "WTqIuZ_lT",
          onHoverEnd: () => u({ isHovered: !1 }),
          onHoverStart: () => u({ isHovered: !0 }),
          onTap: () => u({ isPressed: !1 }),
          onTapCancel: () => u({ isPressed: !1 }),
          onTapStart: () => u({ isPressed: !0 }),
          ref: r ?? y,
          style: { opacity: 1, ...l },
          variants: {
            hzOXdm1WO: { opacity: 0.15 },
            o74f4Uw7T: { opacity: 0.15 },
          },
          ...Rr(
            {
              CQcurg_Sv: { "data-framer-name": "Vertical_Mobile" },
              G7I1c6Whg: { "data-framer-name": "Vertical" },
              gjQ3ibaWu: { "data-framer-name": "Vertical_Mobile_Collasped" },
              hzOXdm1WO: { "data-framer-name": "Collasped" },
              o74f4Uw7T: { "data-framer-name": "Vertical_Collasped" },
            },
            d,
            j,
          ),
          children: [
            e(t.div, {
              className: "framer-193ed28-container",
              layoutDependency: n,
              layoutId: "bu7WWaRiW-container",
              style: { rotate: 15 },
              transformTemplate: m1,
              ...Rr(
                {
                  G7I1c6Whg: { transformTemplate: void 0 },
                  o74f4Uw7T: { transformTemplate: void 0 },
                },
                d,
                j,
              ),
              children: e(Rt, {
                height: "100%",
                id: "bu7WWaRiW",
                layoutId: "bu7WWaRiW",
                variant: "x8Jl49UlW",
                width: "100%",
                ...Rr(
                  {
                    hzOXdm1WO: { variant: "GSPxmIOiO" },
                    o74f4Uw7T: { variant: "GSPxmIOiO" },
                  },
                  d,
                  j,
                ),
              }),
            }),
            f(t.div, {
              className: "framer-k985lo",
              "data-border": !0,
              layoutDependency: n,
              layoutId: "PyItwKDse",
              style: {
                "--border-bottom-width": "2px",
                "--border-color":
                  'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                backgroundColor:
                  "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
              children: [
                e(o1, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children:
                        "My creativity is inspired by daily life as well as online works, which not only drives my passion for creativity, but also makes me start to think about problems.",
                    }),
                  }),
                  className: "framer-1opmuzr",
                  layoutDependency: n,
                  layoutId: "pVK2PHg50",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(i1, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children:
                        "\u6211\u7684\u521B\u610F\u6C72\u53D6\u4E8E\u65E5\u5E38\u751F\u6D3B\u7684\u7075\u611F\uFF0C\u4E5F\u53D7\u7F51\u7EDC\u4F5C\u54C1\u7684\u542F\u53D1\uFF0C\u8FD9\u4E0D\u4EC5\u63A8\u52A8\u4E86\u6211\u7684\u521B\u4F5C\u70ED\u60C5\uFF0C\u4E5F\u8BA9\u6211\u5F00\u59CB\u601D\u8003\u95EE\u9898\u3002",
                    }),
                  }),
                  className: "framer-d9rwne",
                  layoutDependency: n,
                  layoutId: "LCa_87fUe",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ],
            }),
            e(h, {
              className: "framer-17yderw",
              "data-framer-name": "graphic",
              layout: "position",
              layoutDependency: n,
              layoutId: "h4LNhgA5K",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 55 54"><path d="M 34.053 1.933 C 28.823 -1.266 24.258 0.024 21.516 2.077 C 20.393 2.919 19.832 3.341 19.5 3.341 C 19.168 3.341 18.607 2.919 17.484 2.077 C 14.742 0.024 10.177 -1.266 4.947 1.933 C -1.915 6.131 -3.467 19.977 12.363 31.663 C 15.378 33.886 16.885 35 19.5 35 C 22.115 35 23.622 33.888 26.637 31.661 C 42.467 19.979 40.915 6.131 34.053 1.933 Z" transform="translate(7.667 9.5) rotate(30 19.5 17.5)" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path></svg>',
              svgContentId: 650171792,
              withExternalLayout: !0,
              ...Rr(
                {
                  CQcurg_Sv: { svgContentId: 722674036 },
                  G7I1c6Whg: { svgContentId: 4087430663 },
                  gjQ3ibaWu: { svgContentId: 722674036 },
                  o74f4Uw7T: { svgContentId: 4087430663 },
                },
                d,
                j,
              ),
            }),
            e(t.div, {
              className: "framer-mfnrt3",
              layoutDependency: n,
              layoutId: "u8ZKuYe06",
              style: { rotate: 15 },
              children: e(h, {
                className: "framer-f5g3ps",
                "data-framer-name": "instagram_wordmark",
                layout: "position",
                layoutDependency: n,
                layoutId: "hIDNZ3V6q",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 114 41"><path d="M 8.789 6.711 C 6.59 7.639 4.17 10.259 3.406 13.547 C 2.439 17.714 6.465 19.476 6.795 18.898 C 7.183 18.219 6.073 17.989 5.845 15.828 C 5.549 13.036 6.839 9.915 8.461 8.547 C 8.762 8.292 8.748 8.646 8.748 9.301 L 8.684 23.177 C 8.684 26.145 8.562 27.083 8.343 28.009 C 8.122 28.947 7.766 29.582 8.036 29.826 C 8.337 30.099 9.625 29.449 10.37 28.402 C 11.264 27.145 11.576 25.636 11.633 23.998 C 11.701 22.022 11.698 18.888 11.701 17.1 L 11.673 7.773 C 11.66 7.065 9.71 6.322 8.79 6.71 M 86.911 20.603 C 86.84 22.146 86.5 23.352 86.079 24.203 C 85.265 25.85 83.573 26.361 82.855 23.994 C 82.464 22.703 82.446 20.548 82.727 18.746 C 83.012 16.912 83.813 15.526 85.137 15.651 C 86.443 15.774 87.055 17.469 86.911 20.603 Z M 64.892 30.177 C 64.874 32.742 64.473 34.99 63.614 35.644 C 62.395 36.57 60.757 35.875 61.096 34.004 C 61.396 32.349 62.816 30.658 64.895 28.592 L 64.892 30.179 Z M 64.559 20.588 C 64.484 21.994 64.123 23.406 63.728 24.204 C 62.913 25.851 61.209 26.366 60.503 23.994 C 60.021 22.374 60.136 20.277 60.375 18.956 C 60.685 17.242 61.436 15.652 62.785 15.652 C 64.097 15.652 64.744 17.101 64.559 20.588 Z M 51.804 20.567 C 51.724 22.055 51.436 23.3 50.973 24.203 C 50.136 25.839 48.479 26.358 47.749 23.994 C 47.222 22.29 47.401 19.966 47.62 18.71 C 47.946 16.847 48.76 15.526 50.031 15.652 C 51.336 15.78 51.971 17.47 51.804 20.567 Z M 110.257 22.305 C 109.938 22.305 109.792 22.637 109.672 23.194 C 109.254 25.133 108.815 25.572 108.247 25.572 C 107.614 25.572 107.045 24.612 106.899 22.69 C 106.784 21.179 106.803 18.397 106.95 15.63 C 106.979 15.061 106.824 14.499 105.309 13.945 C 104.658 13.706 103.71 13.356 103.239 14.502 C 101.906 17.741 101.385 20.313 101.262 21.357 C 101.256 21.411 101.19 21.422 101.178 21.296 C 101.1 20.459 100.925 18.939 100.904 15.744 C 100.9 15.121 100.768 14.591 100.085 14.156 C 99.642 13.874 98.296 13.376 97.811 13.969 C 97.392 14.454 96.905 15.759 96.4 17.306 L 95.703 19.414 L 95.714 14.735 C 95.716 14.249 95.385 14.087 95.285 14.058 C 94.837 13.927 93.952 13.708 93.575 13.708 C 93.112 13.708 92.999 13.968 92.999 14.348 L 92.926 21.904 L 92.927 22.34 C 92.671 23.76 91.84 25.687 90.936 25.687 C 90.032 25.687 89.606 24.881 89.606 21.199 C 89.606 19.051 89.67 18.117 89.702 16.563 L 89.754 14.825 C 89.747 14.347 88.926 14.106 88.544 14.017 C 88.159 13.927 87.826 13.892 87.565 13.907 C 87.197 13.928 86.936 14.172 86.936 14.506 L 86.938 15.028 C 86.463 14.276 85.699 13.753 85.191 13.602 C 83.822 13.192 82.394 13.555 81.316 15.073 C 80.46 16.279 79.944 17.646 79.742 19.609 C 79.593 21.044 79.642 22.499 79.906 23.729 C 79.587 25.118 78.995 25.687 78.346 25.687 C 77.405 25.687 76.723 24.14 76.802 21.464 C 76.854 19.704 77.204 18.469 77.586 16.682 C 77.749 15.92 77.617 15.522 77.285 15.139 C 76.98 14.789 76.331 14.61 75.398 14.83 C 74.733 14.987 73.783 15.156 72.913 15.286 C 72.913 15.286 72.966 15.075 73.009 14.703 C 73.235 12.754 71.132 12.912 70.461 13.535 C 70.061 13.907 69.788 14.345 69.684 15.133 C 69.52 16.384 70.533 16.974 70.533 16.974 C 70.201 18.504 69.386 20.507 68.545 21.954 C 68.094 22.729 67.75 23.303 67.305 23.914 L 67.301 23.233 L 67.352 16.564 L 67.404 14.844 C 67.399 14.494 67.196 14.362 66.775 14.195 C 66.401 14.047 65.96 13.944 65.503 13.909 C 64.926 13.863 64.577 14.172 64.587 14.537 C 64.588 14.605 64.588 15.028 64.588 15.028 C 64.113 14.277 63.35 13.754 62.842 13.602 C 61.473 13.193 60.044 13.556 58.967 15.074 C 58.111 16.28 57.55 17.973 57.393 19.594 C 57.243 21.105 57.272 22.39 57.474 23.471 C 57.256 24.555 56.63 25.687 55.923 25.687 C 55.018 25.687 54.503 24.882 54.503 21.199 C 54.503 19.051 54.567 18.117 54.599 16.564 L 54.651 14.825 C 54.644 14.347 53.823 14.106 53.44 14.017 C 53.041 13.924 52.694 13.89 52.43 13.909 C 52.081 13.935 51.835 14.251 51.835 14.486 L 51.835 15.028 C 51.36 14.276 50.596 13.753 50.088 13.602 C 48.719 13.193 47.298 13.561 46.213 15.073 C 45.505 16.059 44.932 17.152 44.639 19.572 C 44.554 20.272 44.516 20.927 44.521 21.539 C 44.238 23.277 42.992 25.28 41.972 25.28 C 41.375 25.28 40.807 24.115 40.807 21.631 C 40.807 18.322 41.011 13.612 41.045 13.157 L 42.583 13.132 C 43.225 13.125 43.807 13.141 44.663 13.096 C 45.092 13.075 45.506 11.523 45.063 11.331 C 44.862 11.244 43.443 11.168 42.88 11.156 C 42.407 11.145 41.09 11.047 41.09 11.047 L 41.236 7.59 C 41.259 7.315 40.905 7.173 40.702 7.087 C 40.209 6.877 39.768 6.776 39.245 6.668 C 38.522 6.518 38.194 6.665 38.13 7.279 C 38.035 8.211 37.984 10.941 37.984 10.941 C 37.453 10.941 35.642 10.836 35.112 10.836 C 34.619 10.836 34.087 12.971 34.768 12.997 L 37.824 13.082 L 37.785 19.804 C 37.287 22.42 35.531 23.834 35.531 23.834 C 35.908 22.103 35.138 20.803 33.751 19.703 C 33.24 19.297 32.231 18.53 31.102 17.689 C 31.102 17.689 31.755 17.04 32.337 15.734 C 32.747 14.81 32.765 13.751 31.757 13.518 C 30.09 13.132 28.717 14.364 28.307 15.68 C 27.989 16.699 28.159 17.455 28.781 18.241 C 28.826 18.299 28.875 18.357 28.926 18.416 C 28.55 19.146 28.033 20.129 27.596 20.891 C 26.381 23.007 25.463 24.681 24.77 24.681 C 24.216 24.681 24.223 22.982 24.223 21.391 C 24.223 20.019 24.324 17.957 24.404 15.821 C 24.431 15.115 24.08 14.713 23.492 14.349 C 23.135 14.127 22.373 13.692 21.931 13.692 C 21.27 13.692 19.364 13.783 17.563 19.029 C 17.336 19.691 16.89 20.896 16.89 20.896 L 16.928 14.586 C 16.928 14.438 16.85 14.295 16.671 14.197 C 16.367 14.032 15.558 13.692 14.836 13.692 C 14.493 13.692 14.321 13.853 14.321 14.174 L 14.258 24.045 C 14.258 24.795 14.278 25.671 14.351 26.053 C 14.425 26.434 14.544 26.747 14.691 26.933 C 14.838 27.118 15.008 27.259 15.288 27.317 C 15.549 27.371 16.978 27.556 17.052 27.006 C 17.141 26.348 17.144 25.635 17.895 22.977 C 19.063 18.838 20.586 16.819 21.302 16.102 C 21.427 15.977 21.57 15.969 21.563 16.175 L 21.352 21.275 C 21.158 26.429 22.09 27.385 23.42 27.385 C 24.438 27.385 25.873 26.366 27.41 23.788 L 29.97 19.47 L 31.482 20.872 C 32.697 22.033 33.096 23.137 32.831 24.183 C 32.629 24.984 31.866 25.81 30.51 25.007 C 30.114 24.773 29.945 24.592 29.548 24.328 C 29.334 24.187 29.008 24.144 28.812 24.293 C 28.304 24.679 28.013 25.169 27.847 25.777 C 27.686 26.368 28.274 26.68 28.883 26.952 C 29.408 27.187 30.536 27.4 31.255 27.425 C 34.057 27.52 36.301 26.062 37.864 22.304 C 38.144 25.55 39.334 27.386 41.402 27.386 C 42.785 27.386 44.171 25.586 44.778 23.816 C 44.952 24.537 45.209 25.165 45.542 25.696 C 47.136 28.239 50.227 27.691 51.78 25.532 C 52.26 24.865 52.334 24.625 52.334 24.625 C 52.56 26.664 54.191 27.376 55.124 27.376 C 56.169 27.376 57.249 26.879 58.006 25.163 C 58.092 25.346 58.189 25.524 58.297 25.696 C 59.89 28.238 62.982 27.691 64.535 25.532 C 64.601 25.441 64.665 25.349 64.727 25.256 L 64.773 26.596 L 63.343 27.916 C 60.95 30.127 59.13 31.805 58.996 33.759 C 58.824 36.25 60.83 37.176 62.348 37.297 C 63.96 37.426 65.341 36.529 66.189 35.275 C 66.935 34.17 67.424 31.793 67.388 29.445 L 67.331 26.027 C 68.173 25.043 69.121 23.8 69.993 22.345 C 70.944 20.759 71.964 18.628 72.486 16.971 C 72.486 16.971 73.371 16.978 74.316 16.916 C 74.619 16.896 74.705 16.958 74.65 17.181 C 74.582 17.451 73.456 21.827 74.484 24.742 C 75.187 26.737 76.774 27.38 77.714 27.38 C 78.816 27.38 79.869 26.542 80.433 25.299 C 80.499 25.435 80.571 25.567 80.65 25.695 C 82.244 28.238 85.325 27.688 86.888 25.532 C 87.241 25.045 87.442 24.625 87.442 24.625 C 87.777 26.735 89.407 27.387 90.34 27.387 C 91.312 27.387 92.235 26.985 92.984 25.201 C 93.015 25.987 93.064 26.629 93.142 26.831 C 93.19 26.955 93.466 27.111 93.667 27.186 C 94.556 27.518 95.463 27.361 95.797 27.292 C 96.03 27.245 96.211 27.057 96.236 26.572 C 96.301 25.299 96.261 23.159 96.643 21.569 C 97.287 18.9 97.887 17.865 98.172 17.353 C 98.331 17.066 98.511 17.018 98.517 17.322 C 98.531 17.937 98.561 19.742 98.81 22.169 C 98.994 23.953 99.238 25.008 99.426 25.341 C 99.963 26.296 100.625 26.341 101.163 26.341 C 101.507 26.341 102.224 26.245 102.16 25.638 C 102.129 25.342 102.183 23.512 102.818 20.883 C 103.232 19.166 103.923 17.615 104.172 17.048 C 104.264 16.839 104.307 17.004 104.305 17.036 C 104.252 18.218 104.135 22.085 104.613 24.201 C 105.261 27.066 107.137 27.387 107.791 27.387 C 109.186 27.387 110.327 26.318 110.712 23.505 C 110.805 22.828 110.667 22.306 110.257 22.306" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                svgContentId: 2324700670,
                withExternalLayout: !0,
              }),
            }),
            e(h, {
              className: "framer-34njhb",
              "data-framer-name": "graphic",
              layout: "position",
              layoutDependency: n,
              layoutId: "WWmcwVSbb",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49"><path d="M 4.083 37.771 C 7.687 39.855 11.87 40.833 16.333 40.833 C 29.563 40.833 40.347 30.345 40.817 17.228 L 44.917 9.188 L 38.069 10.208 C 36.578 8.89 34.656 8.164 32.667 8.167 C 27.415 8.167 23.479 13.306 24.745 18.334 C 17.493 18.804 10.921 14.335 7.119 8.381 C 4.596 16.95 6.936 27.268 13.271 33.628 C 13.271 36.029 7.146 37.463 4.083 37.771 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
              svgContentId: 3395608624,
              withExternalLayout: !0,
            }),
          ],
        }),
      }),
    });
  }),
  g1 = [
    '.framer-NnytS[data-border="true"]::after, .framer-NnytS [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-NnytS.framer-16lp5mv, .framer-NnytS .framer-16lp5mv { display: block; }",
    ".framer-NnytS.framer-1h0t2gq { height: 556px; overflow: visible; position: relative; width: 512px; }",
    ".framer-NnytS .framer-193ed28-container { flex: none; height: auto; left: 23px; position: absolute; top: 55%; width: auto; }",
    ".framer-NnytS .framer-k985lo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 230px; overflow: hidden; padding: 16px 16px 16px 16px; position: absolute; top: 280px; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-NnytS .framer-1opmuzr, .framer-NnytS .framer-d9rwne { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 250px; word-break: break-word; word-wrap: break-word; }",
    ".framer-NnytS .framer-17yderw { flex: none; height: 54px; position: absolute; right: 44px; top: 110px; width: 55px; }",
    ".framer-NnytS .framer-mfnrt3 { flex: none; height: 41px; overflow: hidden; position: absolute; right: 150px; top: 15px; width: 114px; }",
    ".framer-NnytS .framer-f5g3ps { flex: none; height: 41px; left: calc(50.00000000000002% - 114px / 2); position: absolute; top: calc(48.78048780487807% - 41px / 2); width: 114px; }",
    ".framer-NnytS .framer-34njhb { flex: none; height: 49px; left: calc(52.73437500000002% - 49px / 2); position: absolute; top: 208px; width: 49px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NnytS .framer-k985lo { gap: 0px; } .framer-NnytS .framer-k985lo > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-NnytS .framer-k985lo > :first-child { margin-top: 0px; } .framer-NnytS .framer-k985lo > :last-child { margin-bottom: 0px; } }",
    ".framer-NnytS.framer-v-1e0wp1o .framer-34njhb { left: calc(50.78125000000002% - 49px / 2); top: calc(45.323741007194265% - 49px / 2); }",
    ".framer-NnytS.framer-v-1jcn32g .framer-193ed28-container, .framer-NnytS.framer-v-1astwza .framer-193ed28-container { bottom: 41px; left: unset; right: 59px; top: unset; }",
    ".framer-NnytS.framer-v-1jcn32g .framer-k985lo, .framer-NnytS.framer-v-1astwza .framer-k985lo { left: -91px; top: 65px; }",
    ".framer-NnytS.framer-v-1jcn32g .framer-17yderw, .framer-NnytS.framer-v-1astwza .framer-17yderw { right: 186px; top: 203px; }",
    ".framer-NnytS.framer-v-1jcn32g .framer-mfnrt3, .framer-NnytS.framer-v-1astwza .framer-mfnrt3 { right: 64px; top: -2px; }",
    ".framer-NnytS.framer-v-1jcn32g .framer-34njhb, .framer-NnytS.framer-v-1astwza .framer-34njhb { left: calc(45.11718750000002% - 49px / 2); top: 95px; }",
    ".framer-NnytS.framer-v-mf1lpl .framer-193ed28-container, .framer-NnytS.framer-v-1lsmris .framer-193ed28-container { left: -57px; top: 55%; }",
    ".framer-NnytS.framer-v-mf1lpl .framer-k985lo, .framer-NnytS.framer-v-1lsmris .framer-k985lo { left: 49px; top: 5px; }",
    ".framer-NnytS.framer-v-mf1lpl .framer-1opmuzr, .framer-NnytS.framer-v-mf1lpl .framer-d9rwne, .framer-NnytS.framer-v-1lsmris .framer-1opmuzr, .framer-NnytS.framer-v-1lsmris .framer-d9rwne { width: 180px; }",
    ".framer-NnytS.framer-v-mf1lpl .framer-17yderw, .framer-NnytS.framer-v-1lsmris .framer-17yderw { right: 166px; top: 203px; }",
    ".framer-NnytS.framer-v-mf1lpl .framer-mfnrt3, .framer-NnytS.framer-v-1lsmris .framer-mfnrt3 { right: 114px; top: -32px; }",
    ".framer-NnytS.framer-v-mf1lpl .framer-34njhb, .framer-NnytS.framer-v-1lsmris .framer-34njhb { left: 117px; top: 195px; }",
    ...ce,
  ],
  $e = H(u1, g1, "framer-NnytS"),
  Mr = $e;
$e.displayName = "About/PathInsTragram";
$e.defaultProps = { height: 556, width: 512 };
Q($e, {
  variant: {
    options: [
      "WTqIuZ_lT",
      "hzOXdm1WO",
      "G7I1c6Whg",
      "o74f4Uw7T",
      "CQcurg_Sv",
      "gjQ3ibaWu",
    ],
    optionTitles: [
      "Default",
      "Collasped",
      "Vertical",
      "Vertical_Collasped",
      "Vertical_Mobile",
      "Vertical_Mobile_Collasped",
    ],
    title: "Variant",
    type: k.Enum,
  },
});
W($e, [...a1, ...de]);
var x1 = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerQP1GZSIO9",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerIntrinsicWidth: "512",
        framerContractVersion: "1",
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"hzOXdm1WO":{"layout":["fixed","fixed"]},"G7I1c6Whg":{"layout":["fixed","fixed"]},"o74f4Uw7T":{"layout":["fixed","fixed"]},"CQcurg_Sv":{"layout":["fixed","fixed"]},"gjQ3ibaWu":{"layout":["fixed","fixed"]}}}',
        framerIntrinsicHeight: "556",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var zt = {};
ye(zt, { __FramerMetadata__: () => M1, default: () => zr });
var v1 = oe(w),
  w1 = ie(w),
  b1 = [
    "LxFp6w2NE",
    "R5LkNWzto",
    "BDdrhVgyS",
    "smFmInkIw",
    "VIm7tKzBK",
    "St0Skcir1",
  ],
  k1 = "framer-ez7Tj",
  C1 = {
    BDdrhVgyS: "framer-v-7scdzu",
    LxFp6w2NE: "framer-v-14a16hj",
    R5LkNWzto: "framer-v-j9cbrm",
    smFmInkIw: "framer-v-14m4jjn",
    St0Skcir1: "framer-v-afjkbk",
    VIm7tKzBK: "framer-v-1woa5hj",
  };
function Ro(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var q1 = {
  default: { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
};
var V1 = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  L1 = {
    Collasped: "R5LkNWzto",
    Default: "LxFp6w2NE",
    Vertical_Collasped: "smFmInkIw",
    Vertical_Mobile_Collasped: "St0Skcir1",
    Vertical_Mobile: "VIm7tKzBK",
    Vertical: "BDdrhVgyS",
  },
  _1 = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = L1[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "LxFp6w2NE",
    };
  },
  j1 = (a, r) => r.join("-") + a.layoutDependency,
  I1 = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = _1(a),
      {
        baseVariant: d,
        classNames: q,
        gestureVariant: j,
        setGestureState: u,
        setVariant: x,
        transition: I,
        variants: V,
      } = G({
        cycleOrder: b1,
        defaultVariant: "LxFp6w2NE",
        transitions: q1,
        variant: b,
        variantClassNames: C1,
      }),
      n = j1(a, V),
      y = F(null),
      c = A(),
      M = [pe];
    return e(E, {
      id: p ?? c,
      children: e(V1, {
        value: I,
        children: f(t.div, {
          ..._,
          animate: V,
          className: P(k1, ...M, "framer-14a16hj", s, q),
          "data-framer-name": "Default",
          initial: b,
          layoutDependency: n,
          layoutId: "LxFp6w2NE",
          onHoverEnd: () => u({ isHovered: !1 }),
          onHoverStart: () => u({ isHovered: !0 }),
          onTap: () => u({ isPressed: !1 }),
          onTapCancel: () => u({ isPressed: !1 }),
          onTapStart: () => u({ isPressed: !0 }),
          ref: r ?? y,
          style: { opacity: 1, ...l },
          variants: {
            R5LkNWzto: { opacity: 0.15 },
            smFmInkIw: { opacity: 0.15 },
            St0Skcir1: { opacity: 0.15 },
          },
          ...Ro(
            {
              BDdrhVgyS: { "data-framer-name": "Vertical" },
              R5LkNWzto: { "data-framer-name": "Collasped" },
              smFmInkIw: { "data-framer-name": "Vertical_Collasped" },
              St0Skcir1: { "data-framer-name": "Vertical_Mobile_Collasped" },
              VIm7tKzBK: { "data-framer-name": "Vertical_Mobile" },
            },
            d,
            j,
          ),
          children: [
            f(t.div, {
              className: "framer-my2gjt",
              "data-border": !0,
              layoutDependency: n,
              layoutId: "CGuDVj1xS",
              style: {
                "--border-bottom-width": "2px",
                "--border-color":
                  'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
              children: [
                e(v1, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children:
                        "The invaluable experience gained along the way will eventually become part of the legend.",
                    }),
                  }),
                  className: "framer-3l2iyl",
                  layoutDependency: n,
                  layoutId: "Z6nvuxf0X",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(w1, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children:
                        "\u8FD9\u6761\u9053\u8DEF\u4E0A\u79EF\u7D2F\u7684\u5B9D\u8D35\u7ECF\u9A8C\u6700\u7EC8\u5C06\u6210\u4E3A\u4F20\u5947\u7684\u4E00\u90E8\u5206\uFF0C\u7559\u4E0B\u6C38\u6052\u7684\u5370\u8BB0\u3002",
                    }),
                  }),
                  className: "framer-eh29mk",
                  layoutDependency: n,
                  layoutId: "wH36pwEAG",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ],
            }),
            f(t.div, {
              className: "framer-j9fesv",
              "data-border": !0,
              layoutDependency: n,
              layoutId: "inywakn7G",
              style: {
                "--border-bottom-width": "2px",
                "--border-color":
                  'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                rotate: -15,
              },
              children: [
                e(h, {
                  className: "framer-182reek",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "X87TCnKi5",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 68 74"><path d="M 2.5 1.5 L 66.5 1.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 2.5 59.5 L 66.5 59.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 2.5 71.5 L 66.5 71.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1.5 15 C 1.5 12.791 3.291 11 5.5 11 L 62.5 11 C 64.709 11 66.5 12.791 66.5 15 L 66.5 45 C 66.5 47.209 64.709 49 62.5 49 L 5.5 49 C 3.291 49 1.5 47.209 1.5 45 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                  svgContentId: 2964739591,
                  withExternalLayout: !0,
                }),
                e(w, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.div, {
                      style: {
                        "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                        "--framer-font-family": '"Space Mono", monospace',
                        "--framer-font-size": "9px",
                        "--framer-font-weight": "700",
                        "--framer-line-height": "1.3em",
                        "--framer-text-color":
                          "var(--extracted-tcooor, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children: "Milestone",
                    }),
                  }),
                  className: "framer-xinxv3",
                  fonts: ["GF;Space Mono-700"],
                  layoutDependency: n,
                  layoutId: "xzDFAXiKf",
                  style: {
                    "--extracted-tcooor":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ],
            }),
            f(t.div, {
              className: "framer-4e48ss",
              "data-border": !0,
              layoutDependency: n,
              layoutId: "ZZcv0Yt0o",
              style: {
                "--border-bottom-width": "2px",
                "--border-color":
                  'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                backgroundColor:
                  "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                rotate: -15,
              },
              children: [
                e(w, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.div, {
                      style: {
                        "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                        "--framer-font-family": '"Space Mono", monospace',
                        "--framer-font-size": "9px",
                        "--framer-font-weight": "700",
                        "--framer-line-height": "1.3em",
                        "--framer-text-color":
                          "var(--extracted-tcooor, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children: "Diary",
                    }),
                  }),
                  className: "framer-1ro13w6",
                  fonts: ["GF;Space Mono-700"],
                  layoutDependency: n,
                  layoutId: "rUSyL75Pz",
                  style: {
                    "--extracted-tcooor":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(h, {
                  className: "framer-1vr2ui2",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "zNbhUB2Zb",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27 37"><path d="M 1 5 C 1 2.791 2.791 1 5 1 L 22 1 C 24.209 1 26 2.791 26 5 L 26 32 C 26 34.209 24.209 36 22 36 L 5 36 C 2.791 36 1 34.209 1 32 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                  svgContentId: 2000262839,
                  withExternalLayout: !0,
                }),
                e(h, {
                  className: "framer-19qc2b3",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "sTKpqk7cV",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27 37"><path d="M 1 5 C 1 2.791 2.791 1 5 1 L 22 1 C 24.209 1 26 2.791 26 5 L 26 32 C 26 34.209 24.209 36 22 36 L 5 36 C 2.791 36 1 34.209 1 32 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                  svgContentId: 2000262839,
                  withExternalLayout: !0,
                }),
              ],
            }),
            f(t.div, {
              className: "framer-1foczmc",
              "data-border": !0,
              layoutDependency: n,
              layoutId: "Vr3EQkfzT",
              style: {
                "--border-bottom-width": "2px",
                "--border-color":
                  'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                backgroundColor:
                  "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                rotate: 15,
              },
              children: [
                e(w, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.div, {
                      style: {
                        "--font-selector": "R0Y7U3BhY2UgTW9uby03MDA=",
                        "--framer-font-family": '"Space Mono", monospace',
                        "--framer-font-size": "9px",
                        "--framer-font-weight": "700",
                        "--framer-line-height": "1.3em",
                        "--framer-text-color":
                          "var(--extracted-tcooor, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children: "Script",
                    }),
                  }),
                  className: "framer-1olb5un",
                  fonts: ["GF;Space Mono-700"],
                  layoutDependency: n,
                  layoutId: "y77OsHwJd",
                  style: {
                    "--extracted-tcooor":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(h, {
                  className: "framer-12sgqtt",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "OELEC0MUw",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 67 96"><path d="M 1.5 1.5 L 65.5 1.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1.5 59.5 L 65.5 59.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1.5 71.5 L 65.5 71.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 2 83 L 3 83" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 2 94 L 3 94" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 6 83 L 44 83" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 6 94 L 44 94" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                  svgContentId: 2138149746,
                  withExternalLayout: !0,
                }),
                e(h, {
                  className: "framer-1nipaew",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "JyPeOqhr6",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 39"><g transform="translate(4 0)" id="ss3876219509_1"><g><defs><path d="M 0 4 C 0 1.791 1.791 -0 4 -0 L 7.256 -0 C 9.465 -0 11.256 1.791 11.256 4 L 11.256 22.2 L 0 22.2 Z" id="a1024z"></path><clipPath id="a1025z"><use xlink:href="#a1024z"></use></clipPath></defs><use xlink:href="#a1024z" fill="transparent" clip-path="url(#a1025z)" stroke-width="3.6" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></use></g><path d="M 0 22.2 L 11.256 22.2 L 11.256 37 L 0 37 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></g><g transform="translate(20.372 0)" id="ss3876219509_4"><g><defs><path d="M -0 4 C -0 1.791 1.791 -0 4 -0 L 7.256 -0 C 9.465 -0 11.256 1.791 11.256 4 L 11.256 30.34 L -0 30.34 Z" id="a1028z"></path><clipPath id="a1029z"><use xlink:href="#a1028z"></use></clipPath></defs><use xlink:href="#a1028z" fill="transparent" clip-path="url(#a1029z)" stroke-width="3.6" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></use></g><path d="M -0 30.34 L 11.256 30.34 L 11.256 37 L -0 37 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></g><g transform="translate(36.744 0)" id="ss3876219509_7"><g><defs><path d="M 0 4 C 0 1.791 1.791 -0 4 -0 L 7.256 -0 C 9.465 -0 11.256 1.791 11.256 4 L 11.256 23.31 L 0 23.31 Z" id="a1032z"></path><clipPath id="a1033z"><use xlink:href="#a1032z"></use></clipPath></defs><use xlink:href="#a1032z" fill="transparent" clip-path="url(#a1033z)" stroke-width="3.6" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></use></g><path d="M 0 23.31 L 11.256 23.31 L 11.256 37 L 0 37 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></g><path d="M 1 37 L 50.5 37" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                  svgContentId: 3876219509,
                  withExternalLayout: !0,
                }),
              ],
            }),
            e(t.div, {
              className: "framer-1uuqrqw",
              layoutDependency: n,
              layoutId: "UL592HAjs",
              style: { rotate: -15 },
              children: e(h, {
                className: "framer-x8gew2",
                "data-framer-name": "graphic",
                layout: "position",
                layoutDependency: n,
                layoutId: "CJBPMj_UY",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M 14 14 L 33.5 14 C 37.714 14 39.82 14 41.334 15.012 C 41.989 15.449 42.551 16.011 42.988 16.666 C 44 18.18 44 20.286 44 24.5 C 44 31.522 44 35.034 42.314 37.556 C 41.584 38.648 40.646 39.586 39.554 40.316 C 37.036 42 33.524 42 26.5 42 L 24 42 C 14.572 42 9.858 42 6.928 39.07 C 4 36.144 4 31.428 4 22 L 4 15.888 C 4 12.256 4 10.44 4.76 9.076 C 5.302 8.104 6.104 7.302 7.076 6.76 C 8.44 6 10.256 6 13.888 6 C 16.216 6 17.38 6 18.4 6.382 C 20.726 7.254 21.686 9.368 22.736 11.466 L 24 14" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path></svg>',
                svgContentId: 789189055,
                withExternalLayout: !0,
              }),
            }),
            e(t.div, {
              className: "framer-1h44iyp",
              layoutDependency: n,
              layoutId: "WLZ6CFGoK",
              children: e(h, {
                className: "framer-190qb9m",
                "data-framer-name": "graphic",
                layout: "position",
                layoutDependency: n,
                layoutId: "SZeBgzS5D",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M 34 24 C 34 29.523 29.523 34 24 34 C 18.477 34 14 29.523 14 24 C 14 18.477 18.477 14 24 14 C 29.523 14 34 18.477 34 24 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10"></path><path d="M 23.99 6 L 24.01 6 M 23.992 42 L 24.012 42 M 36.718 11.272 L 36.736 11.272 M 11.268 36.728 L 11.288 36.728 M 11.268 11.272 L 11.288 11.272 M 36.716 36.73 L 36.736 36.73 M 41.98 24 L 42 24 M 6 24 L 6.018 24" fill="transparent" stroke-width="3.6" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                svgContentId: 4063524864,
                withExternalLayout: !0,
              }),
            }),
            e(t.div, {
              className: "framer-1v2e9yw",
              layoutDependency: n,
              layoutId: "fmgcMLQ1g",
              style: { rotate: 0 },
              variants: {
                R5LkNWzto: { rotate: 15 },
                smFmInkIw: { rotate: 15 },
                St0Skcir1: { rotate: 15 },
              },
              children: e(h, {
                className: "framer-qiw41y",
                "data-framer-name": "graphic",
                layout: "position",
                layoutDependency: n,
                layoutId: "QQ_6VbJNy",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 102"><path d="M 30.252 59.294 C 31.905 65.46 38.246 69.119 44.415 67.467 C 50.584 65.815 54.245 59.477 52.591 53.312 L 52.592 53.312 L 39.572 4.747 L 56.327 0.26 L 69.346 48.824 L 69.346 48.824 C 73.478 64.239 64.326 80.083 48.904 84.214 C 33.482 88.344 17.63 79.196 13.497 63.782 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                svgContentId: 3792562148,
                withExternalLayout: !0,
              }),
            }),
            e(h, {
              className: "framer-1bdf21r",
              "data-framer-name": "graphic",
              layout: "position",
              layoutDependency: n,
              layoutId: "NkAcwDjfH",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M 0.453 11.546 L 11.999 0 M 0.453 11.546 C 1.463 12.556 6.229 11.566 7.669 11.546 M 0.453 11.546 C -0.557 10.536 0.433 5.77 0.453 4.33" transform="translate(18.001 18) rotate(-180 6 6)" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 5 24 C 5 15.044 5 10.564 7.782 7.782 C 10.564 5 15.042 5 24 5 C 32.956 5 37.436 5 40.218 7.782 C 43 10.564 43 15.042 43 24 C 43 32.956 43 37.436 40.218 40.218 C 37.434 43 32.958 43 24 43 C 15.044 43 10.564 43 7.782 40.218 C 5 37.434 5 32.958 5 24 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10"></path></svg>',
              svgContentId: 3756064701,
              withExternalLayout: !0,
              ...Ro(
                {
                  BDdrhVgyS: { svgContentId: 4244449560 },
                  R5LkNWzto: { svgContentId: 707830069 },
                  smFmInkIw: { svgContentId: 1424432008 },
                  St0Skcir1: { svgContentId: 1424432008 },
                  VIm7tKzBK: { svgContentId: 4244449560 },
                },
                d,
                j,
              ),
            }),
          ],
        }),
      }),
    });
  }),
  R1 = [
    '.framer-ez7Tj[data-border="true"]::after, .framer-ez7Tj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-ez7Tj.framer-10dlp72, .framer-ez7Tj .framer-10dlp72 { display: block; }",
    ".framer-ez7Tj.framer-14a16hj { height: 432px; overflow: visible; position: relative; width: 478px; }",
    ".framer-ez7Tj .framer-my2gjt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 78px; overflow: hidden; padding: 16px 16px 16px 16px; position: absolute; top: 0px; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-ez7Tj .framer-3l2iyl, .framer-ez7Tj .framer-eh29mk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 250px; word-break: break-word; word-wrap: break-word; }",
    ".framer-ez7Tj .framer-j9fesv { bottom: 88px; flex: none; height: 127px; left: 93px; overflow: hidden; position: absolute; width: 100px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-ez7Tj .framer-182reek { bottom: 22px; flex: none; height: 74px; left: 9px; position: absolute; width: 68px; }",
    ".framer-ez7Tj .framer-xinxv3, .framer-ez7Tj .framer-1ro13w6, .framer-ez7Tj .framer-1olb5un { flex: none; height: auto; left: 10px; position: absolute; top: 12px; white-space: pre-wrap; width: 64px; word-break: break-word; word-wrap: break-word; }",
    ".framer-ez7Tj .framer-4e48ss { bottom: 60px; flex: none; height: 83px; left: 63px; overflow: hidden; position: absolute; width: 100px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-ez7Tj .framer-1vr2ui2 { bottom: 16px; flex: none; height: 37px; left: 9px; position: absolute; width: 27px; }",
    ".framer-ez7Tj .framer-19qc2b3 { bottom: 16px; flex: none; height: 37px; left: calc(54.00000000000003% - 27px / 2); position: absolute; width: 27px; }",
    ".framer-ez7Tj .framer-1foczmc { bottom: 11px; flex: none; height: 140px; left: 153px; overflow: hidden; position: absolute; width: 100px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-ez7Tj .framer-12sgqtt { flex: none; height: 96px; left: 10px; position: absolute; top: calc(56.42857142857145% - 96px / 2); width: 67px; }",
    ".framer-ez7Tj .framer-1nipaew { flex: none; height: 39px; left: 18px; position: absolute; top: 43px; width: 52px; }",
    ".framer-ez7Tj .framer-1uuqrqw { bottom: 151px; flex: none; height: 48px; left: 6px; overflow: hidden; position: absolute; width: 48px; }",
    ".framer-ez7Tj .framer-x8gew2, .framer-ez7Tj .framer-190qb9m { flex: none; height: 48px; left: calc(50.00000000000002% - 48px / 2); position: absolute; top: calc(50.00000000000002% - 48px / 2); width: 48px; }",
    ".framer-ez7Tj .framer-1h44iyp { flex: none; height: 48px; left: 16px; overflow: hidden; position: absolute; top: 113px; width: 48px; }",
    ".framer-ez7Tj .framer-1v2e9yw { flex: none; height: 102px; overflow: hidden; position: absolute; right: 0px; top: 73px; width: 80px; }",
    ".framer-ez7Tj .framer-qiw41y { flex: none; height: 102px; left: calc(50.00000000000002% - 80px / 2); position: absolute; top: calc(50.00000000000002% - 102px / 2); width: 80px; }",
    ".framer-ez7Tj .framer-1bdf21r { bottom: 164px; flex: none; height: 48px; position: absolute; right: 118px; width: 48px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ez7Tj .framer-my2gjt { gap: 0px; } .framer-ez7Tj .framer-my2gjt > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ez7Tj .framer-my2gjt > :first-child { margin-top: 0px; } .framer-ez7Tj .framer-my2gjt > :last-child { margin-bottom: 0px; } }",
    ".framer-ez7Tj.framer-v-j9cbrm .framer-1h44iyp { left: -4px; top: 123px; }",
    ".framer-ez7Tj.framer-v-j9cbrm .framer-1bdf21r { bottom: 154px; right: 128px; }",
    ".framer-ez7Tj.framer-v-7scdzu .framer-my2gjt, .framer-ez7Tj.framer-v-14m4jjn .framer-my2gjt { left: 278px; top: 10px; }",
    ".framer-ez7Tj.framer-v-7scdzu .framer-j9fesv, .framer-ez7Tj.framer-v-14m4jjn .framer-j9fesv { bottom: 98px; left: 73px; }",
    ".framer-ez7Tj.framer-v-7scdzu .framer-4e48ss, .framer-ez7Tj.framer-v-14m4jjn .framer-4e48ss { bottom: 70px; left: 43px; }",
    ".framer-ez7Tj.framer-v-7scdzu .framer-1foczmc, .framer-ez7Tj.framer-v-14m4jjn .framer-1foczmc { bottom: 21px; left: 133px; }",
    ".framer-ez7Tj.framer-v-7scdzu .framer-1uuqrqw, .framer-ez7Tj.framer-v-14m4jjn .framer-1uuqrqw { bottom: unset; left: -34px; top: calc(47.91666666666669% - 48px / 2); }",
    ".framer-ez7Tj.framer-v-7scdzu .framer-1h44iyp, .framer-ez7Tj.framer-v-14m4jjn .framer-1h44iyp { left: 136px; }",
    ".framer-ez7Tj.framer-v-7scdzu .framer-1v2e9yw, .framer-ez7Tj.framer-v-14m4jjn .framer-1v2e9yw { bottom: -43px; right: 70px; top: unset; }",
    ".framer-ez7Tj.framer-v-7scdzu .framer-1bdf21r, .framer-ez7Tj.framer-v-1woa5hj .framer-1bdf21r { bottom: unset; right: 108px; top: calc(51.85185185185187% - 48px / 2); }",
    ".framer-ez7Tj.framer-v-14m4jjn .framer-1bdf21r, .framer-ez7Tj.framer-v-afjkbk .framer-1bdf21r { bottom: unset; top: calc(54.166666666666686% - 48px / 2); }",
    ".framer-ez7Tj.framer-v-1woa5hj .framer-my2gjt, .framer-ez7Tj.framer-v-afjkbk .framer-my2gjt { left: 18px; top: 90px; }",
    ".framer-ez7Tj.framer-v-1woa5hj .framer-3l2iyl, .framer-ez7Tj.framer-v-1woa5hj .framer-eh29mk, .framer-ez7Tj.framer-v-afjkbk .framer-3l2iyl, .framer-ez7Tj.framer-v-afjkbk .framer-eh29mk { width: 200px; }",
    ".framer-ez7Tj.framer-v-1woa5hj .framer-j9fesv, .framer-ez7Tj.framer-v-afjkbk .framer-j9fesv { bottom: 58px; left: 73px; }",
    ".framer-ez7Tj.framer-v-1woa5hj .framer-4e48ss, .framer-ez7Tj.framer-v-afjkbk .framer-4e48ss { bottom: 30px; left: 43px; }",
    ".framer-ez7Tj.framer-v-1woa5hj .framer-1foczmc, .framer-ez7Tj.framer-v-afjkbk .framer-1foczmc { bottom: -19px; left: 133px; }",
    ".framer-ez7Tj.framer-v-1woa5hj .framer-1uuqrqw, .framer-ez7Tj.framer-v-afjkbk .framer-1uuqrqw { bottom: unset; left: 106px; top: 23px; }",
    ".framer-ez7Tj.framer-v-1woa5hj .framer-1h44iyp, .framer-ez7Tj.framer-v-afjkbk .framer-1h44iyp { left: unset; right: 124px; top: 93px; }",
    ".framer-ez7Tj.framer-v-1woa5hj .framer-1v2e9yw, .framer-ez7Tj.framer-v-afjkbk .framer-1v2e9yw { bottom: -53px; right: 110px; top: unset; }",
    ...ce,
  ],
  er = H(I1, R1, "framer-ez7Tj"),
  zr = er;
er.displayName = "About/PathCraft";
er.defaultProps = { height: 432, width: 478 };
Q(er, {
  variant: {
    options: [
      "LxFp6w2NE",
      "R5LkNWzto",
      "BDdrhVgyS",
      "smFmInkIw",
      "VIm7tKzBK",
      "St0Skcir1",
    ],
    optionTitles: [
      "Default",
      "Collasped",
      "Vertical",
      "Vertical_Collasped",
      "Vertical_Mobile",
      "Vertical_Mobile_Collasped",
    ],
    title: "Variant",
    type: k.Enum,
  },
});
W(er, [
  {
    family: "Space Mono",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/spacemono/v13/i7dMIFZifjKcF5UAWdDRaPpZYFeQHwyVd3U.woff2",
    weight: "700",
  },
  ...de,
]);
var M1 = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerVowyGadAR",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerIntrinsicWidth: "478",
        framerIntrinsicHeight: "432",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"R5LkNWzto":{"layout":["fixed","fixed"]},"BDdrhVgyS":{"layout":["fixed","fixed"]},"smFmInkIw":{"layout":["fixed","fixed"]},"VIm7tKzBK":{"layout":["fixed","fixed"]},"St0Skcir1":{"layout":["fixed","fixed"]}}}',
        framerContractVersion: "1",
        framerImmutableVariables: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var Nt = {};
ye(Nt, { __FramerMetadata__: () => O1, default: () => Dr });
var z1 = oe(w),
  D1 = ie(w),
  N1 = C(Vt),
  T1 = [
    "TFLsgGxTv",
    "l99BZkyaP",
    "hyacml7_S",
    "OTfy5ICzi",
    "o07vj9JAw",
    "jt_xg5Fzd",
  ],
  F1 = "framer-VfhrH",
  B1 = {
    hyacml7_S: "framer-v-1owezrw",
    jt_xg5Fzd: "framer-v-mwl0zv",
    l99BZkyaP: "framer-v-9g0gm6",
    o07vj9JAw: "framer-v-10rr8uz",
    OTfy5ICzi: "framer-v-1kfhw67",
    TFLsgGxTv: "framer-v-1lxk3n4",
  };
function S1(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var Q1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Dt = (a, r) => `translateX(-50%) ${r}`,
  Mo = (a, r) => `translateY(-50%) ${r}`,
  P1 = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  A1 = t(m),
  E1 = {
    Collasped: "l99BZkyaP",
    Default: "TFLsgGxTv",
    Vertical_Collasped: "OTfy5ICzi",
    Vertical_Mobile_Collasped: "jt_xg5Fzd",
    Vertical_Mobile: "o07vj9JAw",
    Vertical: "hyacml7_S",
  },
  U1 = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = E1[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "TFLsgGxTv",
    };
  },
  H1 = (a, r) =>
    a.layoutDependency ? r.join("-") + a.layoutDependency : r.join("-"),
  W1 = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = U1(a),
      {
        baseVariant: d,
        classNames: q,
        gestureHandlers: j,
        gestureVariant: u,
        setGestureState: x,
        setVariant: I,
        variants: V,
      } = G({
        cycleOrder: T1,
        defaultVariant: "TFLsgGxTv",
        variant: b,
        variantClassNames: B1,
      }),
      n = H1(a, V),
      y = F(null),
      c = A(),
      M = [pe],
      $ = me();
    return e(E, {
      id: p ?? c,
      children: e(A1, {
        animate: V,
        initial: !1,
        children: e(P1, {
          value: Q1,
          children: f(t.div, {
            ..._,
            ...j,
            className: P(F1, ...M, "framer-1lxk3n4", s, q),
            "data-framer-name": "Default",
            layoutDependency: n,
            layoutId: "TFLsgGxTv",
            ref: r ?? y,
            style: { opacity: 1, ...l },
            variants: {
              jt_xg5Fzd: { opacity: 0.15 },
              l99BZkyaP: { opacity: 0.15 },
              OTfy5ICzi: { opacity: 0.15 },
            },
            ...S1(
              {
                hyacml7_S: { "data-framer-name": "Vertical" },
                jt_xg5Fzd: { "data-framer-name": "Vertical_Mobile_Collasped" },
                l99BZkyaP: { "data-framer-name": "Collasped" },
                o07vj9JAw: { "data-framer-name": "Vertical_Mobile" },
                OTfy5ICzi: { "data-framer-name": "Vertical_Collasped" },
              },
              d,
              u,
            ),
            children: [
              f(t.div, {
                className: "framer-1nzsdbe",
                "data-border": !0,
                layoutDependency: n,
                layoutId: "jIdw_pQZ8",
                style: {
                  "--border-bottom-width": "2px",
                  "--border-color":
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  "--border-left-width": "2px",
                  "--border-right-width": "2px",
                  "--border-style": "solid",
                  "--border-top-width": "2px",
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                },
                children: [
                  e(z1, {
                    __fromCanvasComponent: !0,
                    children: e(m, {
                      children: e(t.h5, {
                        className: "framer-styles-preset-9k6rgp",
                        "data-styles-preset": "f9YDJyYdv",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children:
                          "Whether I'm creating or solving a problem, I empathize to understand the needs of others and explore the nature of the problem.",
                      }),
                    }),
                    className: "framer-h775co",
                    fonts: ["Inter"],
                    layoutDependency: n,
                    layoutId: "lZNZ6OXkh",
                    style: {
                      "--extracted-1lwpl3i":
                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(D1, {
                    __fromCanvasComponent: !0,
                    children: e(m, {
                      children: e(t.h5, {
                        className: "framer-styles-preset-9k6rgp",
                        "data-styles-preset": "f9YDJyYdv",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                        },
                        children:
                          "\u65E0\u8BBA\u662F\u521B\u4F5C\u8FD8\u662F\u89E3\u51B3\u95EE\u9898\uFF0C\u6211\u90FD\u901A\u8FC7\u5171\u60C5\u6765\u7406\u89E3\u4ED6\u4EBA\u7684\u9700\u6C42\uFF0C\u63A2\u7D22\u95EE\u9898\u7684\u672C\u8D28\u3002",
                      }),
                    }),
                    className: "framer-zfa1gb",
                    fonts: ["Inter"],
                    layoutDependency: n,
                    layoutId: "Rl7tlrhqa",
                    style: {
                      "--extracted-1lwpl3i":
                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(v, {
                    children: e(t.div, {
                      className: "framer-p8n4hn-container",
                      layoutDependency: n,
                      layoutId: "b1m2yAqMe-container",
                      children: e(Vt, {
                        alignment: "center",
                        arrowOptions: {
                          arrowFill: "rgba(0, 0, 0, 0.2)",
                          arrowGap: 10,
                          arrowPadding: 20,
                          arrowPaddingBottom: 0,
                          arrowPaddingLeft: 0,
                          arrowPaddingRight: 0,
                          arrowPaddingTop: 0,
                          arrowPosition: "auto",
                          arrowRadius: 40,
                          arrowShouldFadeIn: !1,
                          arrowShouldSpace: !0,
                          arrowSize: 40,
                          showMouseControls: !1,
                        },
                        autoPlayControl: !0,
                        borderRadius: 0,
                        direction: "left",
                        dragControl: !1,
                        effectsOptions: {
                          effectsHover: !0,
                          effectsOpacity: 1,
                          effectsPerspective: 1200,
                          effectsRotate: 0,
                          effectsScale: 1,
                        },
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !1,
                          fadeInset: 0,
                          fadeWidth: 25,
                          overflow: !1,
                        },
                        gap: 10,
                        height: "100%",
                        id: "b1m2yAqMe",
                        intervalControl: 2,
                        itemAmount: 1,
                        layoutId: "b1m2yAqMe",
                        padding: 0,
                        paddingBottom: 0,
                        paddingLeft: 0,
                        paddingPerSide: !1,
                        paddingRight: 0,
                        paddingTop: 0,
                        progressOptions: {
                          dotsActiveOpacity: 1,
                          dotsBackground: "rgba(0, 0, 0, 0.2)",
                          dotsBlur: 0,
                          dotsFill: "rgb(255, 255, 255)",
                          dotsGap: 10,
                          dotsInset: 10,
                          dotSize: 10,
                          dotsOpacity: 0.5,
                          dotsPadding: 10,
                          dotsRadius: 50,
                          showProgressDots: !1,
                        },
                        slots: [
                          f(t.div, {
                            className: "framer-3yl8va",
                            layoutDependency: n,
                            layoutId: "FRAgVpZMN",
                            children: [
                              e(h, {
                                className: "framer-dyq9el",
                                layout: "position",
                                layoutDependency: n,
                                layoutId: "oQ2CACoYn",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 209 27"><path d="M 1.861 8.782 C 1.861 4.793 5.095 1.559 9.083 1.559 L 200.639 1.559 C 204.628 1.559 207.861 4.793 207.861 8.782 L 207.861 18.081 C 207.861 22.069 204.628 25.303 200.639 25.303 L 9.083 25.303 C 5.095 25.303 1.861 22.069 1.861 18.081 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                                svgContentId: 10216468716,
                                withExternalLayout: !0,
                              }),
                              e(w, {
                                __fromCanvasComponent: !0,
                                children: e(m, {
                                  children: e(t.div, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7U3BhY2UgTW9uby03MDA=",
                                      "--framer-font-family":
                                        '"Space Mono", monospace',
                                      "--framer-font-size": "10px",
                                      "--framer-font-weight": "700",
                                      "--framer-line-height": "1.3em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-tcooor, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                                    },
                                    children: "Web Design",
                                  }),
                                }),
                                className: "framer-fg2f5y",
                                fonts: ["GF;Space Mono-700"],
                                layoutDependency: n,
                                layoutId: "e6yaw_lwK",
                                style: {
                                  "--extracted-tcooor":
                                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                transformTemplate: Dt,
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          f(t.div, {
                            className: "framer-1qnebcg",
                            layoutDependency: n,
                            layoutId: "j8shcLWf9",
                            children: [
                              e(h, {
                                className: "framer-16hou19",
                                layout: "position",
                                layoutDependency: n,
                                layoutId: "FTWsjkyjJ",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 209 27"><path d="M 1.861 8.639 C 1.861 4.65 5.095 1.417 9.083 1.417 L 200.639 1.417 C 204.628 1.417 207.861 4.65 207.861 8.639 L 207.861 17.938 C 207.861 21.927 204.628 25.16 200.639 25.16 L 9.083 25.16 C 5.095 25.16 1.861 21.927 1.861 17.938 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                                svgContentId: 10153453369,
                                withExternalLayout: !0,
                              }),
                              e(w, {
                                __fromCanvasComponent: !0,
                                children: e(m, {
                                  children: e(t.div, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7U3BhY2UgTW9uby03MDA=",
                                      "--framer-font-family":
                                        '"Space Mono", monospace',
                                      "--framer-font-size": "10px",
                                      "--framer-font-weight": "700",
                                      "--framer-line-height": "1.3em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-tcooor, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                                    },
                                    children: "Psychology",
                                  }),
                                }),
                                className: "framer-1nc7fw3",
                                fonts: ["GF;Space Mono-700"],
                                layoutDependency: n,
                                layoutId: "CjDev1sAi",
                                style: {
                                  "--extracted-tcooor":
                                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                transformTemplate: Dt,
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          f(t.div, {
                            className: "framer-43gcrn",
                            layoutDependency: n,
                            layoutId: "XLCy9E1aS",
                            children: [
                              e(h, {
                                className: "framer-sluccx",
                                layout: "position",
                                layoutDependency: n,
                                layoutId: "ChpohSbMN",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 209 27"><path d="M 1.861 8.712 C 1.861 4.722 5.095 1.488 9.085 1.488 L 200.638 1.488 C 204.627 1.488 207.861 4.722 207.861 8.712 L 207.861 18.008 C 207.861 21.998 204.627 25.232 200.638 25.232 L 9.085 25.232 C 5.095 25.232 1.861 21.998 1.861 18.008 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                                svgContentId: 12813816114,
                                withExternalLayout: !0,
                              }),
                              e(w, {
                                __fromCanvasComponent: !0,
                                children: e(m, {
                                  children: e(t.div, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7U3BhY2UgTW9uby03MDA=",
                                      "--framer-font-family":
                                        '"Space Mono", monospace',
                                      "--framer-font-size": "10px",
                                      "--framer-font-weight": "700",
                                      "--framer-line-height": "1.3em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-tcooor, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                                    },
                                    children: "Video Edit",
                                  }),
                                }),
                                className: "framer-15i3hee",
                                fonts: ["GF;Space Mono-700"],
                                layoutDependency: n,
                                layoutId: "Lm8GPHRAL",
                                style: {
                                  "--extracted-tcooor":
                                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                transformTemplate: Dt,
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          f(t.div, {
                            className: "framer-1qn5d9z",
                            layoutDependency: n,
                            layoutId: "kNkPGYL9k",
                            children: [
                              e(h, {
                                className: "framer-zvx5ek",
                                layout: "position",
                                layoutDependency: n,
                                layoutId: "DikB0UjgV",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 209 28"><path d="M 1.932 8.68 C 1.932 4.538 5.29 1.18 9.432 1.18 L 200.432 1.18 C 204.574 1.18 207.932 4.538 207.932 8.68 L 207.932 18.68 C 207.932 22.822 204.574 26.18 200.432 26.18 L 9.432 26.18 C 5.29 26.18 1.932 22.822 1.932 18.68 Z" fill="transparent" stroke-width="1.87" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                                svgContentId: 12414419801,
                                withExternalLayout: !0,
                              }),
                              e(w, {
                                __fromCanvasComponent: !0,
                                children: e(m, {
                                  children: e(t.div, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7U3BhY2UgTW9uby03MDA=",
                                      "--framer-font-family":
                                        '"Space Mono", monospace',
                                      "--framer-font-size": "10px",
                                      "--framer-font-weight": "700",
                                      "--framer-line-height": "1.3em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-tcooor, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                                    },
                                    children: "React Animation",
                                  }),
                                }),
                                className: "framer-1oncpq2",
                                fonts: ["GF;Space Mono-700"],
                                layoutDependency: n,
                                layoutId: "pOPkF14ut",
                                style: {
                                  "--extracted-tcooor":
                                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                transformTemplate: Mo,
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          f(t.div, {
                            className: "framer-hwsbwc",
                            layoutDependency: n,
                            layoutId: "afCAxQS8U",
                            children: [
                              e(h, {
                                className: "framer-1kxcr9a",
                                layout: "position",
                                layoutDependency: n,
                                layoutId: "mI76Tbi6e",
                                opacity: 1,
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 209 27"><path d="M 1.861 8.895 C 1.861 4.907 5.095 1.673 9.083 1.673 L 200.639 1.673 C 204.628 1.673 207.861 4.907 207.861 8.895 L 207.861 18.194 C 207.861 22.183 204.628 25.417 200.639 25.417 L 9.083 25.417 C 5.095 25.417 1.861 22.183 1.861 18.194 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                                svgContentId: 11420438546,
                                withExternalLayout: !0,
                              }),
                              e(w, {
                                __fromCanvasComponent: !0,
                                children: e(m, {
                                  children: e(t.div, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7U3BhY2UgTW9uby03MDA=",
                                      "--framer-font-family":
                                        '"Space Mono", monospace',
                                      "--framer-font-size": "10px",
                                      "--framer-font-weight": "700",
                                      "--framer-line-height": "1.3em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-tcooor, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                                    },
                                    children: "Begin a venture",
                                  }),
                                }),
                                className: "framer-1i3gg8e",
                                fonts: ["GF;Space Mono-700"],
                                layoutDependency: n,
                                layoutId: "hN5GMXE9b",
                                style: {
                                  "--extracted-tcooor":
                                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                transformTemplate: Mo,
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                        startFrom: 0,
                        style: { height: "100%", width: "100%" },
                        transitionControl: {
                          damping: 28,
                          delay: 0,
                          duration: 0.3,
                          ease: [0.44, 0, 0.56, 1],
                          mass: 1,
                          stiffness: 178,
                          type: "spring",
                        },
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              e(t.div, {
                className: "framer-1nu6jwf",
                layoutDependency: n,
                layoutId: "Bgu4jtPrS",
                children: e(h, {
                  className: "framer-1pwjm9o",
                  "data-framer-name": "Google_2015_logo",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "aHHur6fTx",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 255 90"><path d="M 109.57 46.462 C 109.57 57.832 100.725 66.211 89.87 66.211 C 79.015 66.211 70.169 57.832 70.169 46.462 C 70.169 35.011 79.015 26.712 89.87 26.712 C 100.725 26.712 109.57 35.011 109.57 46.462 Z M 100.946 46.462 C 100.946 39.356 95.82 34.495 89.87 34.495 C 83.92 34.495 78.793 39.356 78.793 46.462 C 78.793 53.496 83.92 58.429 89.87 58.429 C 95.82 58.429 100.946 53.487 100.946 46.462 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 152.07 46.462 C 152.07 57.832 143.225 66.211 132.37 66.211 C 121.515 66.211 112.669 57.832 112.669 46.462 C 112.669 35.02 121.515 26.712 132.37 26.712 C 143.225 26.712 152.07 35.011 152.07 46.462 Z M 143.446 46.462 C 143.446 39.356 138.32 34.495 132.37 34.495 C 126.42 34.495 121.293 39.356 121.293 46.462 C 121.293 53.496 126.42 58.429 132.37 58.429 C 138.32 58.429 143.446 53.487 143.446 46.462 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 192.799 27.905 L 192.799 63.362 C 192.799 77.947 184.246 83.903 174.135 83.903 C 164.617 83.903 158.888 77.501 156.728 72.266 L 164.236 69.123 C 165.573 72.337 168.849 76.13 174.126 76.13 C 180.598 76.13 184.609 72.114 184.609 64.555 L 184.609 61.714 L 184.308 61.714 C 182.378 64.11 178.659 66.202 173.967 66.202 C 164.147 66.202 155.152 57.601 155.152 46.533 C 155.152 35.385 164.147 26.712 173.967 26.712 C 178.651 26.712 182.369 28.805 184.308 31.129 L 184.609 31.129 L 184.609 27.914 L 192.799 27.914 Z M 185.22 46.533 C 185.22 39.579 180.607 34.495 174.737 34.495 C 168.787 34.495 163.802 39.579 163.802 46.533 C 163.802 53.416 168.787 58.429 174.737 58.429 C 180.607 58.429 185.22 53.416 185.22 46.533 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 206.302 7.123 L 206.302 65 L 197.891 65 L 197.891 7.123 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 239.08 52.962 L 245.774 57.449 C 243.614 60.664 238.407 66.202 229.411 66.202 C 218.255 66.202 209.923 57.529 209.923 46.453 C 209.923 34.708 218.326 26.703 228.446 26.703 C 238.637 26.703 243.622 34.86 245.252 39.267 L 246.146 41.511 L 219.893 52.445 C 221.903 56.408 225.029 58.429 229.411 58.429 C 233.803 58.429 236.849 56.256 239.08 52.962 Z M 218.477 45.856 L 236.026 38.528 C 235.06 36.062 232.156 34.343 228.739 34.343 C 224.356 34.343 218.255 38.234 218.477 45.856 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 38.33 41.324 L 38.33 32.945 L 66.406 32.945 C 66.681 34.405 66.822 36.133 66.822 38.003 C 66.822 44.289 65.114 52.062 59.606 57.601 C 54.249 63.21 47.405 66.202 38.339 66.202 C 21.533 66.202 7.402 52.436 7.402 35.536 C 7.402 18.636 21.533 4.871 38.339 4.871 C 47.635 4.871 54.258 8.539 59.234 13.321 L 53.355 19.233 C 49.787 15.867 44.953 13.249 38.33 13.249 C 26.058 13.249 16.46 23.195 16.46 35.536 C 16.46 47.877 26.058 57.823 38.33 57.823 C 46.29 57.823 50.823 54.609 53.727 51.688 C 56.082 49.32 57.632 45.936 58.243 41.315 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path></svg>',
                  svgContentId: 12415439905,
                  withExternalLayout: !0,
                }),
              }),
              e(t.div, {
                className: "framer-1y04bh0",
                layoutDependency: n,
                layoutId: "PZltGPSG1",
                style: { rotate: 0 },
                variants: {
                  hyacml7_S: { rotate: 75 },
                  jt_xg5Fzd: { rotate: 67 },
                  o07vj9JAw: { rotate: 67 },
                  OTfy5ICzi: { rotate: 75 },
                },
                children: e(h, {
                  className: "framer-1a47vou",
                  "data-framer-name": "graphic",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "VfrjMlwdu",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 52"><path d="M 10.658 9.62 C 11.832 8.086 12.419 7.319 13.223 6.909 C 14.025 6.5 14.946 6.5 16.781 6.5 L 22.016 6.5 C 23.894 6.5 24.832 6.5 25.417 7.135 C 26 7.77 26 8.79 26 10.833 L 26 19.5 L 16.781 19.5 C 14.946 19.5 14.027 19.5 13.223 19.091 C 12.422 18.681 11.832 17.914 10.658 16.382 L 10.192 15.775 C 9.174 14.445 8.667 13.782 8.667 13 C 8.667 12.216 9.176 11.553 10.192 10.227 Z M 41.342 20.453 C 40.168 18.919 39.581 18.152 38.777 17.743 C 37.975 17.333 37.054 17.333 35.219 17.333 L 26 17.333 L 26 30.333 L 35.219 30.333 C 37.054 30.333 37.973 30.333 38.777 29.924 C 39.579 29.514 40.168 28.747 41.342 27.215 L 41.808 26.609 C 42.826 25.281 43.333 24.618 43.333 23.833 C 43.333 23.049 42.824 22.386 41.808 21.06 Z M 26 45.5 L 26 8.667 M 19.5 45.5 L 32.5 45.5" fill="transparent" stroke-width="4" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                  svgContentId: 12020127171,
                  withExternalLayout: !0,
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  X1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-VfhrH.framer-kvjz4f, .framer-VfhrH .framer-kvjz4f { display: block; }",
    ".framer-VfhrH.framer-1lxk3n4 { height: 408px; overflow: visible; position: relative; width: 280px; }",
    ".framer-VfhrH .framer-1nzsdbe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 2px; overflow: hidden; padding: 16px; position: absolute; top: 104px; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-VfhrH .framer-h775co, .framer-VfhrH .framer-zfa1gb { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 220px; word-break: break-word; word-wrap: break-word; }",
    ".framer-VfhrH .framer-p8n4hn-container { flex: none; height: 30px; position: relative; width: 215px; }",
    ".framer-VfhrH .framer-3yl8va, .framer-VfhrH .framer-1qnebcg, .framer-VfhrH .framer-43gcrn { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-VfhrH .framer-dyq9el, .framer-VfhrH .framer-16hou19, .framer-VfhrH .framer-sluccx, .framer-VfhrH .framer-1kxcr9a { flex: none; height: 27px; position: relative; width: 209px; }",
    ".framer-VfhrH .framer-fg2f5y, .framer-VfhrH .framer-1nc7fw3, .framer-VfhrH .framer-15i3hee { bottom: 8px; flex: none; height: auto; left: 21%; position: absolute; white-space: pre; width: auto; z-index: 1; }",
    ".framer-VfhrH .framer-1qn5d9z, .framer-VfhrH .framer-hwsbwc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-VfhrH .framer-zvx5ek { flex: none; height: 28px; position: relative; width: 209px; }",
    ".framer-VfhrH .framer-1oncpq2 { flex: none; height: auto; position: absolute; right: 103px; top: 46%; white-space: pre; width: auto; z-index: 1; }",
    ".framer-VfhrH .framer-1i3gg8e { flex: none; height: auto; position: absolute; right: 103px; top: 48%; white-space: pre; width: auto; z-index: 1; }",
    ".framer-VfhrH .framer-1nu6jwf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: min-content; }",
    ".framer-VfhrH .framer-1pwjm9o { flex: none; height: 90px; position: relative; width: 255px; }",
    ".framer-VfhrH .framer-1y04bh0 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 52px; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: 0px; width: 52px; }",
    ".framer-VfhrH .framer-1a47vou { flex: none; height: 52px; position: relative; width: 52px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-VfhrH .framer-1nzsdbe, .framer-VfhrH .framer-3yl8va, .framer-VfhrH .framer-1qnebcg, .framer-VfhrH .framer-43gcrn, .framer-VfhrH .framer-1qn5d9z, .framer-VfhrH .framer-hwsbwc, .framer-VfhrH .framer-1nu6jwf, .framer-VfhrH .framer-1y04bh0 { gap: 0px; } .framer-VfhrH .framer-1nzsdbe > *, .framer-VfhrH .framer-3yl8va > *, .framer-VfhrH .framer-1qnebcg > *, .framer-VfhrH .framer-43gcrn > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-VfhrH .framer-1nzsdbe > :first-child, .framer-VfhrH .framer-3yl8va > :first-child, .framer-VfhrH .framer-1qnebcg > :first-child, .framer-VfhrH .framer-43gcrn > :first-child { margin-top: 0px; } .framer-VfhrH .framer-1nzsdbe > :last-child, .framer-VfhrH .framer-3yl8va > :last-child, .framer-VfhrH .framer-1qnebcg > :last-child, .framer-VfhrH .framer-43gcrn > :last-child { margin-bottom: 0px; } .framer-VfhrH .framer-1qn5d9z > *, .framer-VfhrH .framer-hwsbwc > *, .framer-VfhrH .framer-1nu6jwf > *, .framer-VfhrH .framer-1y04bh0 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-VfhrH .framer-1qn5d9z > :first-child, .framer-VfhrH .framer-hwsbwc > :first-child, .framer-VfhrH .framer-1nu6jwf > :first-child, .framer-VfhrH .framer-1y04bh0 > :first-child { margin-left: 0px; } .framer-VfhrH .framer-1qn5d9z > :last-child, .framer-VfhrH .framer-hwsbwc > :last-child, .framer-VfhrH .framer-1nu6jwf > :last-child, .framer-VfhrH .framer-1y04bh0 > :last-child { margin-right: 0px; } }",
    ".framer-VfhrH.framer-v-1owezrw .framer-1y04bh0, .framer-VfhrH.framer-v-1kfhw67 .framer-1y04bh0 { bottom: unset; left: 285px; right: unset; top: 356px; }",
    ".framer-VfhrH.framer-v-10rr8uz .framer-1nzsdbe, .framer-VfhrH.framer-v-mwl0zv .framer-1nzsdbe { left: unset; right: 26px; }",
    ".framer-VfhrH.framer-v-10rr8uz .framer-1nu6jwf, .framer-VfhrH.framer-v-mwl0zv .framer-1nu6jwf { left: unset; right: -15px; }",
    ".framer-VfhrH.framer-v-10rr8uz .framer-1y04bh0, .framer-VfhrH.framer-v-mwl0zv .framer-1y04bh0 { bottom: unset; right: 247px; top: 327px; }",
    ...ce,
    '.framer-VfhrH[data-border="true"]::after, .framer-VfhrH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  rr = H(W1, X1, "framer-VfhrH"),
  Dr = rr;
rr.displayName = "About/PathGoogle";
rr.defaultProps = { height: 408, width: 280 };
Q(rr, {
  variant: {
    options: [
      "TFLsgGxTv",
      "l99BZkyaP",
      "hyacml7_S",
      "OTfy5ICzi",
      "o07vj9JAw",
      "jt_xg5Fzd",
    ],
    optionTitles: [
      "Default",
      "Collasped",
      "Vertical",
      "Vertical_Collasped",
      "Vertical_Mobile",
      "Vertical_Mobile_Collasped",
    ],
    title: "Variant",
    type: k.Enum,
  },
});
W(
  rr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
        {
          family: "Space Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/spacemono/v13/i7dMIFZifjKcF5UAWdDRaPpZYFeQHwyVd3U.woff2",
          weight: "700",
        },
      ],
    },
    ...N1,
    ...le(de),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var O1 = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "Framerw2VbgkdXR",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerIntrinsicWidth: "280",
        framerIntrinsicHeight: "408",
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"l99BZkyaP":{"layout":["fixed","fixed"]},"hyacml7_S":{"layout":["fixed","fixed"]},"OTfy5ICzi":{"layout":["fixed","fixed"]},"o07vj9JAw":{"layout":["fixed","fixed"]},"jt_xg5Fzd":{"layout":["fixed","fixed"]}}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var Tt = {};
ye(Tt, { __FramerMetadata__: () => s0, default: () => Nr });
var Y1 = oe(w),
  G1 = ie(w),
  K1 = [
    "aNe2TOdti",
    "D_7c_I3_C",
    "mVUP33KfZ",
    "aRTfQKgGD",
    "rG_wjCDtW",
    "ZlkoTl1b8",
  ],
  J1 = "framer-XHz4p",
  $1 = {
    aNe2TOdti: "framer-v-ciov06",
    aRTfQKgGD: "framer-v-19kr729",
    D_7c_I3_C: "framer-v-1xf9eox",
    mVUP33KfZ: "framer-v-1wumcb3",
    rG_wjCDtW: "framer-v-tf4rvz",
    ZlkoTl1b8: "framer-v-1hbgjrk",
  };
function e0(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var r0 = {
  default: { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
};
var t0 = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  a0 = {
    Collasped: "D_7c_I3_C",
    Default: "aNe2TOdti",
    Vertical_Collasped: "aRTfQKgGD",
    Vertical_Mobile_Collasped: "ZlkoTl1b8",
    Vertical_Mobile: "rG_wjCDtW",
    Vertical: "mVUP33KfZ",
  },
  o0 = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = a0[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "aNe2TOdti",
    };
  },
  i0 = (a, r) => r.join("-") + a.layoutDependency,
  n0 = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = o0(a),
      {
        baseVariant: d,
        classNames: q,
        gestureVariant: j,
        setGestureState: u,
        setVariant: x,
        transition: I,
        variants: V,
      } = G({
        cycleOrder: K1,
        defaultVariant: "aNe2TOdti",
        transitions: r0,
        variant: b,
        variantClassNames: $1,
      }),
      n = i0(a, V),
      y = F(null),
      c = A(),
      M = [pe];
    return e(E, {
      id: p ?? c,
      children: e(t0, {
        value: I,
        children: f(t.div, {
          ..._,
          animate: V,
          className: P(J1, ...M, "framer-ciov06", s, q),
          "data-framer-name": "Default",
          initial: b,
          layoutDependency: n,
          layoutId: "aNe2TOdti",
          onHoverEnd: () => u({ isHovered: !1 }),
          onHoverStart: () => u({ isHovered: !0 }),
          onTap: () => u({ isPressed: !1 }),
          onTapCancel: () => u({ isPressed: !1 }),
          onTapStart: () => u({ isPressed: !0 }),
          ref: r ?? y,
          style: { opacity: 1, ...l },
          variants: {
            aRTfQKgGD: { opacity: 0.15 },
            D_7c_I3_C: { opacity: 0.15 },
            ZlkoTl1b8: { opacity: 0.15 },
          },
          ...e0(
            {
              aRTfQKgGD: { "data-framer-name": "Vertical_Collasped" },
              D_7c_I3_C: { "data-framer-name": "Collasped" },
              mVUP33KfZ: { "data-framer-name": "Vertical" },
              rG_wjCDtW: { "data-framer-name": "Vertical_Mobile" },
              ZlkoTl1b8: { "data-framer-name": "Vertical_Mobile_Collasped" },
            },
            d,
            j,
          ),
          children: [
            f(t.div, {
              className: "framer-85b7uj",
              "data-border": !0,
              layoutDependency: n,
              layoutId: "NcWZIMZZk",
              style: {
                "--border-bottom-width": "2px",
                "--border-color":
                  'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                "--border-left-width": "2px",
                "--border-right-width": "2px",
                "--border-style": "solid",
                "--border-top-width": "2px",
                backgroundColor:
                  "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
              children: [
                e(Y1, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children:
                        "It is important to bring the product to the users, listen to their feedback, validate my ideas and continuously improve my creativity.",
                    }),
                  }),
                  className: "framer-1o4nlhn",
                  layoutDependency: n,
                  layoutId: "bmfohiz43",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(G1, {
                  __fromCanvasComponent: !0,
                  children: e(m, {
                    children: e(t.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                      },
                      children:
                        "\u91CD\u8981\u7684\u662F\u5C06\u4EA7\u54C1\u5E26\u7ED9\u7528\u6237\uFF0C\u503E\u542C\u4ED6\u4EEC\u7684\u53CD\u9988\uFF0C\u9A8C\u8BC1\u6211\u7684\u60F3\u6CD5\uFF0C\u4E0D\u65AD\u6539\u8FDB\u6211\u7684\u521B\u610F\u3002",
                    }),
                  }),
                  className: "framer-xicbnj",
                  layoutDependency: n,
                  layoutId: "yEdHWx3yO",
                  style: {
                    "--extracted-1lwpl3i":
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ],
            }),
            e(t.div, {
              className: "framer-52dv6a",
              layoutDependency: n,
              layoutId: "dPHWzOrKq",
              style: { rotate: -15 },
              children: e(h, {
                className: "framer-3kphe6",
                layout: "position",
                layoutDependency: n,
                layoutId: "P60ArxH7e",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 167 102"><g transform="translate(10 0)" id="ss712663557_1"><g><defs><path d="M 0 4 C 0 1.791 1.791 0 4 0 L 18 0 C 20.209 0 22 1.791 22 4 L 22 60 L 0 60 Z" id="a1354z"></path><clipPath id="a1355z"><use xlink:href="#a1354z"></use></clipPath></defs><use xlink:href="#a1354z" fill="transparent" clip-path="url(#a1355z)" stroke-width="3.6" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></use></g><path d="M 0 60 L 22 60 L 22 100 L 0 100 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></g><g transform="translate(42 0)" id="ss712663557_4"><g><defs><path d="M 0 4 C 0 1.791 1.791 0 4 0 L 18 0 C 20.209 0 22 1.791 22 4 L 22 82 L 0 82 Z" id="a1358z"></path><clipPath id="a1359z"><use xlink:href="#a1358z"></use></clipPath></defs><use xlink:href="#a1358z" fill="transparent" clip-path="url(#a1359z)" stroke-width="3.6" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></use></g><path d="M 0 82 L 22 82 L 22 100 L 0 100 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></g><g transform="translate(74 0)" id="ss712663557_7"><g><defs><path d="M 0 4 C 0 1.791 1.791 0 4 0 L 18 0 C 20.209 0 22 1.791 22 4 L 22 63 L 0 63 Z" id="a1362z"></path><clipPath id="a1363z"><use xlink:href="#a1362z"></use></clipPath></defs><use xlink:href="#a1362z" fill="transparent" clip-path="url(#a1363z)" stroke-width="3.6" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></use></g><path d="M 0 63 L 22 63 L 22 100 L 0 100 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></g><g transform="translate(106 0)" id="ss712663557_10"><g><defs><path d="M 0 4 C 0 1.791 1.791 0 4 0 L 18 0 C 20.209 0 22 1.791 22 4 L 22 98 L 0 98 Z" id="a1366z"></path><clipPath id="a1367z"><use xlink:href="#a1366z"></use></clipPath></defs><use xlink:href="#a1366z" fill="transparent" clip-path="url(#a1367z)" stroke-width="3.6" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></use></g><path d="M 0 98 L 22 98 L 22 100 L 0 100 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></g><g transform="translate(138 0)" id="ss712663557_13"><g><defs><path d="M 0 4 C 0 1.791 1.791 0 4 0 L 18 0 C 20.209 0 22 1.791 22 4 L 22 32 L 0 32 Z" id="a1370z"></path><clipPath id="a1371z"><use xlink:href="#a1370z"></use></clipPath></defs><use xlink:href="#a1370z" fill="transparent" clip-path="url(#a1371z)" stroke-width="3.6" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></use></g><path d="M 0 32 L 22 32 L 22 100 L 0 100 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></g><path d="M 1 100 L 166 100" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                svgContentId: 712663557,
                withExternalLayout: !0,
              }),
            }),
            f(t.div, {
              className: "framer-5vuitv",
              layoutDependency: n,
              layoutId: "aMvpKmNbF",
              children: [
                e(h, {
                  className: "framer-lzh33l",
                  "data-framer-name": "graphic",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "moRJVflQg",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56"><path d="M 33.063 48.743 C 42.826 48.097 50.601 40.21 51.24 30.31 C 51.364 28.373 51.364 26.367 51.24 24.43 C 50.601 14.532 42.826 6.65 33.063 5.999 C 29.691 5.778 26.309 5.778 22.937 5.999 C 13.174 6.648 5.399 14.532 4.76 24.432 C 4.636 26.39 4.636 28.354 4.76 30.312 C 4.993 33.917 6.587 37.256 8.465 40.075 C 9.555 42.047 8.836 44.508 7.7 46.662 C 6.883 48.214 6.473 48.988 6.802 49.548 C 7.128 50.108 7.863 50.127 9.331 50.162 C 12.236 50.232 14.194 49.411 15.748 48.265 C 16.627 47.614 17.068 47.29 17.372 47.252 C 17.675 47.215 18.275 47.462 19.469 47.952 C 20.543 48.396 21.791 48.669 22.934 48.746 C 26.259 48.965 29.734 48.965 33.066 48.746 Z" fill="transparent" stroke-width="2.1" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path><g transform="translate(10 19)" id="ss3911223133_2"><path d="M 18 18 C 21.413 18 24.28 15.696 25.085 12.582 C 25.459 11.133 24.916 10.8 23.483 10.8 L 12.517 10.8 C 11.084 10.8 10.541 11.133 10.915 12.582 C 11.718 15.696 14.587 18 18 18 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 9 2.7 C 9 1.209 10.209 0 11.7 0 C 13.191 0 14.4 1.209 14.4 2.7 M 21.6 2.7 C 21.6 1.209 22.809 0 24.3 0 C 25.791 0 27 1.209 27 2.7" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 7.2 7.2 C 4.401 7.918 -0.827 9.421 0.111 14.008 C 0.594 16.276 3.126 16.695 4.5 15.674 C 7.808 13.217 4.5 10.8 7.2 7.2 Z M 28.8 7.2 C 31.599 7.918 36.827 9.421 35.889 14.008 C 35.406 16.276 32.876 16.695 31.5 15.674 C 28.192 13.217 31.5 10.8 28.8 7.2 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>',
                  svgContentId: 3911223133,
                  withExternalLayout: !0,
                }),
                e(h, {
                  className: "framer-mefx8c",
                  "data-framer-name": "graphic",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "Y3li4iVE6",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56"><path d="M 22.937 48.743 C 13.174 48.097 5.399 40.21 4.76 30.31 C 4.636 28.373 4.636 26.367 4.76 24.43 C 5.399 14.532 13.174 6.65 22.937 5.999 C 26.309 5.778 29.691 5.778 33.063 5.999 C 42.826 6.648 50.601 14.532 51.24 24.432 C 51.364 26.39 51.364 28.354 51.24 30.312 C 51.007 33.917 49.413 37.256 47.535 40.075 C 46.445 42.047 47.164 44.508 48.3 46.662 C 49.117 48.214 49.527 48.988 49.198 49.548 C 48.872 50.108 48.137 50.127 46.669 50.162 C 43.764 50.232 41.806 49.411 40.252 48.265 C 39.373 47.614 38.932 47.29 38.628 47.252 C 38.325 47.215 37.725 47.462 36.531 47.952 C 35.457 48.396 34.209 48.669 33.066 48.746 C 29.741 48.965 26.266 48.965 22.934 48.746 Z" fill="transparent" stroke-width="2.1" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path><path d="M 20.889 33.4 C 22.566 35.668 25.202 37.002 28 37 C 30.798 37.002 33.434 35.668 35.111 33.4 M 24.444 22.6 C 24.444 24.588 22.853 26.2 20.889 26.2 C 18.925 26.2 17.333 24.588 17.333 22.6 C 17.333 20.612 18.925 19 20.889 19 C 22.853 19 24.444 20.612 24.444 22.6 Z M 24.444 22.6 C 25.44 21.592 26.514 20.8 28 20.8 C 29.486 20.8 30.56 21.592 31.556 22.6 M 44 20.8 L 38.19 20.8 M 17.81 20.8 L 12 20.8 M 31.556 22.6 C 31.556 24.588 33.147 26.2 35.111 26.2 C 37.075 26.2 38.667 24.588 38.667 22.6 C 38.667 20.612 37.075 19 35.111 19 C 33.147 19 31.556 20.612 31.556 22.6 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                  svgContentId: 2968997767,
                  withExternalLayout: !0,
                }),
                e(h, {
                  className: "framer-z687lv",
                  "data-framer-name": "graphic",
                  layout: "position",
                  layoutDependency: n,
                  layoutId: "fr5rOkZ2X",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56"><path d="M 22.937 48.743 C 13.174 48.097 5.399 40.21 4.76 30.31 C 4.636 28.373 4.636 26.367 4.76 24.43 C 5.399 14.532 13.174 6.65 22.937 5.999 C 26.309 5.778 29.691 5.778 33.063 5.999 C 42.826 6.648 50.601 14.532 51.24 24.432 C 51.364 26.39 51.364 28.354 51.24 30.312 C 51.007 33.917 49.413 37.256 47.535 40.075 C 46.445 42.047 47.164 44.508 48.3 46.662 C 49.117 48.214 49.527 48.988 49.198 49.548 C 48.872 50.108 48.137 50.127 46.669 50.162 C 43.764 50.232 41.806 49.411 40.252 48.265 C 39.373 47.614 38.932 47.29 38.628 47.252 C 38.325 47.215 37.725 47.462 36.531 47.952 C 35.457 48.396 34.209 48.669 33.066 48.746 C 29.741 48.965 26.266 48.965 22.934 48.746 Z" fill="transparent" stroke-width="2.1" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path><g transform="translate(21 21)" id="ss3674454029_2"><path d="M 4 0 L 1.931 0 C 1.206 0 0.512 0.293 0 0.815 M 10.4 0 L 12.469 0 C 13.193 0 13.888 0.293 14.4 0.815" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 0.8 10.593 C 2.309 12.646 4.681 13.854 7.2 13.852 C 9.718 13.854 12.09 12.646 13.6 10.593" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 12 12.222 C 15.11 13.001 20.918 14.634 19.877 19.617 C 19.339 22.081 16.526 22.538 15 21.43 C 11.323 18.76 15 16.133 12 12.222 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>',
                  svgContentId: 3674454029,
                  withExternalLayout: !0,
                }),
              ],
            }),
            e(t.div, {
              className: "framer-1xjso1n",
              layoutDependency: n,
              layoutId: "OI23Vs4HS",
              style: { rotate: -15 },
              children: e(h, {
                className: "framer-1ftmv4h",
                "data-framer-name": "graphic",
                layout: "position",
                layoutDependency: n,
                layoutId: "ZrhlmSVUZ",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M 43 25.9 L 43 22.1 C 43 14.04 43 10.008 40.218 7.504 C 37.434 5 32.958 5 24 5 C 15.044 5 10.564 5 7.782 7.504 C 5 10.008 5 14.04 5 22.1 L 5 25.9 C 5 33.96 5 37.992 7.782 40.496 C 10.564 43 15.042 43 24 43 C 32.956 43 37.436 43 40.218 40.496 C 43 37.992 43 33.96 43 25.9 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="20" stroke-dasharray=""></path><path d="M 36 16 L 28 16 M 32 12 L 32 20 M 36 35 L 28 35 M 36 29 L 28 29 M 20 35 L 16.5 31.5 M 16.5 31.5 L 13 28 M 16.5 31.5 L 20 28 M 16.5 31.5 L 13 35 M 20 16 L 12 16" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                svgContentId: 1944580526,
                withExternalLayout: !0,
              }),
            }),
          ],
        }),
      }),
    });
  }),
  l0 = [
    '.framer-XHz4p[data-border="true"]::after, .framer-XHz4p [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-XHz4p.framer-70yoe5, .framer-XHz4p .framer-70yoe5 { display: block; }",
    ".framer-XHz4p.framer-ciov06 { height: 410px; overflow: visible; position: relative; width: 550px; }",
    ".framer-XHz4p .framer-85b7uj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 268px; overflow: hidden; padding: 16px 16px 16px 16px; position: absolute; top: 181px; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-XHz4p .framer-1o4nlhn, .framer-XHz4p .framer-xicbnj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 250px; word-break: break-word; word-wrap: break-word; }",
    ".framer-XHz4p .framer-52dv6a { bottom: 85px; flex: none; height: 102px; left: 67px; overflow: hidden; position: absolute; width: 167px; }",
    ".framer-XHz4p .framer-3kphe6 { flex: none; height: 102px; left: calc(49.70059880239523% - 167px / 2); position: absolute; top: calc(50.00000000000002% - 102px / 2); width: 167px; }",
    ".framer-XHz4p .framer-5vuitv { flex: none; height: 56px; left: 0px; overflow: hidden; position: absolute; top: 90px; width: 178px; }",
    ".framer-XHz4p .framer-lzh33l { flex: none; height: 56px; left: 0px; position: absolute; top: calc(50.00000000000002% - 56px / 2); width: 56px; }",
    ".framer-XHz4p .framer-mefx8c { flex: none; height: 56px; left: calc(50.00000000000002% - 56px / 2); position: absolute; top: calc(50.00000000000002% - 56px / 2); width: 56px; }",
    ".framer-XHz4p .framer-z687lv { flex: none; height: 56px; position: absolute; right: 0px; top: calc(50.00000000000002% - 56px / 2); width: 56px; }",
    ".framer-XHz4p .framer-1xjso1n { flex: none; height: 48px; left: calc(46.72727272727275% - 48px / 2); overflow: hidden; position: absolute; top: 6px; width: 48px; }",
    ".framer-XHz4p .framer-1ftmv4h { flex: none; height: 48px; left: calc(50.00000000000002% - 48px / 2); position: absolute; top: calc(50.00000000000002% - 48px / 2); width: 48px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-XHz4p .framer-85b7uj { gap: 0px; } .framer-XHz4p .framer-85b7uj > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-XHz4p .framer-85b7uj > :first-child { margin-top: 0px; } .framer-XHz4p .framer-85b7uj > :last-child { margin-bottom: 0px; } }",
    ".framer-XHz4p.framer-v-1xf9eox .framer-1xjso1n { top: -14px; }",
    ".framer-XHz4p.framer-v-1wumcb3 .framer-85b7uj, .framer-XHz4p.framer-v-19kr729 .framer-85b7uj { left: 288px; top: 21px; }",
    ".framer-XHz4p.framer-v-1wumcb3 .framer-52dv6a, .framer-XHz4p.framer-v-19kr729 .framer-52dv6a { bottom: 105px; left: -33px; }",
    ".framer-XHz4p.framer-v-1wumcb3 .framer-5vuitv, .framer-XHz4p.framer-v-19kr729 .framer-5vuitv { left: -80px; top: 70px; }",
    ".framer-XHz4p.framer-v-1wumcb3 .framer-1xjso1n { left: 183px; top: -64px; }",
    ".framer-XHz4p.framer-v-19kr729 .framer-1xjso1n { left: 193px; top: -54px; }",
    ".framer-XHz4p.framer-v-tf4rvz .framer-85b7uj, .framer-XHz4p.framer-v-1hbgjrk .framer-85b7uj { left: 198px; top: 31px; }",
    ".framer-XHz4p.framer-v-tf4rvz .framer-1o4nlhn, .framer-XHz4p.framer-v-tf4rvz .framer-xicbnj, .framer-XHz4p.framer-v-1hbgjrk .framer-1o4nlhn, .framer-XHz4p.framer-v-1hbgjrk .framer-xicbnj { width: 200px; }",
    ".framer-XHz4p.framer-v-tf4rvz .framer-52dv6a, .framer-XHz4p.framer-v-1hbgjrk .framer-52dv6a { bottom: 43px; left: 37px; }",
    ".framer-XHz4p.framer-v-tf4rvz .framer-5vuitv, .framer-XHz4p.framer-v-1hbgjrk .framer-5vuitv { bottom: 121px; left: unset; right: 122px; top: unset; }",
    ".framer-XHz4p.framer-v-tf4rvz .framer-1xjso1n { left: 23px; top: -64px; }",
    ".framer-XHz4p.framer-v-1hbgjrk .framer-1xjso1n { left: 33px; top: -54px; }",
    ...ce,
  ],
  tr = H(n0, l0, "framer-XHz4p"),
  Nr = tr;
tr.displayName = "About/PathNumber";
tr.defaultProps = { height: 410, width: 550 };
Q(tr, {
  variant: {
    options: [
      "aNe2TOdti",
      "D_7c_I3_C",
      "mVUP33KfZ",
      "aRTfQKgGD",
      "rG_wjCDtW",
      "ZlkoTl1b8",
    ],
    optionTitles: [
      "Default",
      "Collasped",
      "Vertical",
      "Vertical_Collasped",
      "Vertical_Mobile",
      "Vertical_Mobile_Collasped",
    ],
    title: "Variant",
    type: k.Enum,
  },
});
W(tr, [...de]);
var s0 = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerXcYvvaQQx",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "550",
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"D_7c_I3_C":{"layout":["fixed","fixed"]},"mVUP33KfZ":{"layout":["fixed","fixed"]},"aRTfQKgGD":{"layout":["fixed","fixed"]},"rG_wjCDtW":{"layout":["fixed","fixed"]},"ZlkoTl1b8":{"layout":["fixed","fixed"]}}}',
        framerContractVersion: "1",
        framerIntrinsicHeight: "410",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var f0 = C(Ne),
  m0 = C(Mr),
  d0 = ee(co(Mr), Mt),
  c0 = C(Dr),
  p0 = ee(po(Dr), Nt),
  h0 = C(_r),
  u0 = ee(ho(_r), jt),
  g0 = C(Lr),
  x0 = ee(uo(Lr), _t),
  y0 = C(jr),
  v0 = ee(go(jr), It),
  w0 = C(Nr),
  b0 = ee(xo(Nr), Tt),
  k0 = C(zr),
  C0 = ee(yo(zr), zt),
  q0 = ["lJkOUJdxM", "AUkbFd2uw", "MIvme0Kyr"],
  V0 = "framer-oSWt9",
  L0 = {
    AUkbFd2uw: "framer-v-ig0216",
    lJkOUJdxM: "framer-v-kzcqv1",
    MIvme0Kyr: "framer-v-15ssl34",
  };
function we(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var _0 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  j0 = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  I0 = t(m),
  R0 = {
    Horizontal: "lJkOUJdxM",
    Vertical_Desktop: "AUkbFd2uw",
    Vertical_Mobile: "MIvme0Kyr",
  },
  M0 = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = R0[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "lJkOUJdxM",
    };
  },
  z0 = (a, r) =>
    a.layoutDependency ? r.join("-") + a.layoutDependency : r.join("-"),
  D0 = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = M0(a),
      {
        baseVariant: d,
        classNames: q,
        clearLoadingGesture: j,
        gestureHandlers: u,
        gestureVariant: x,
        isLoading: I,
        setGestureState: V,
        setVariant: n,
        variants: y,
      } = G({
        cycleOrder: q0,
        defaultVariant: "lJkOUJdxM",
        variant: b,
        variantClassNames: L0,
      }),
      c = z0(a, y),
      M = F(null),
      $ = () => d !== "MIvme0Kyr",
      K = A(),
      g = [],
      se = me();
    return e(E, {
      id: p ?? K,
      children: e(I0, {
        animate: y,
        initial: !1,
        children: e(j0, {
          value: _0,
          children: f(t.div, {
            ..._,
            ...u,
            className: P(V0, ...g, "framer-kzcqv1", s, q),
            "data-framer-name": "Horizontal",
            layoutDependency: c,
            layoutId: "lJkOUJdxM",
            ref: r ?? M,
            style: { ...l },
            ...we(
              {
                AUkbFd2uw: { "data-framer-name": "Vertical_Desktop" },
                MIvme0Kyr: { "data-framer-name": "Vertical_Mobile" },
              },
              d,
              x,
            ),
            children: [
              e(v, {
                children: e(t.div, {
                  className: "framer-1nflqy1-container",
                  layoutDependency: c,
                  layoutId: "PHicLKEZG-container",
                  style: { rotate: 0 },
                  variants: {
                    AUkbFd2uw: { rotate: 90 },
                    MIvme0Kyr: { rotate: 90 },
                  },
                  children: e(Ne, {
                    color:
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    height: "100%",
                    id: "PHicLKEZG",
                    layoutId: "PHicLKEZG",
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                  }),
                }),
              }),
              e(t.div, {
                className: "framer-jcweaa",
                "data-framer-name": "Start",
                layoutDependency: c,
                layoutId: "kPxRi0b_h",
                style: {
                  backgroundColor:
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                },
              }),
              e(t.div, {
                className: "framer-1u13tcg",
                "data-framer-name": "End",
                layoutDependency: c,
                layoutId: "tvUDGFuLT",
                style: {
                  backgroundColor:
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                },
              }),
              e(t.div, {
                className: "framer-1rrw8md",
                "data-border": !0,
                "data-framer-name": "Stop1",
                layoutDependency: c,
                layoutId: "arvLNx1hu",
                style: {
                  "--border-bottom-width": "5px",
                  "--border-color":
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  "--border-left-width": "5px",
                  "--border-right-width": "5px",
                  "--border-style": "solid",
                  "--border-top-width": "5px",
                  backgroundColor:
                    "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                },
              }),
              e(t.div, {
                className: "framer-gvl63c",
                "data-border": !0,
                "data-framer-name": "Stop2",
                layoutDependency: c,
                layoutId: "ttsqyaeyf",
                style: {
                  "--border-bottom-width": "5px",
                  "--border-color":
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  "--border-left-width": "5px",
                  "--border-right-width": "5px",
                  "--border-style": "solid",
                  "--border-top-width": "5px",
                  backgroundColor:
                    "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                },
              }),
              e(t.div, {
                className: "framer-1ga4ig2",
                "data-border": !0,
                "data-framer-name": "Stop3",
                layoutDependency: c,
                layoutId: "o0KREpPSl",
                style: {
                  "--border-bottom-width": "5px",
                  "--border-color":
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  "--border-left-width": "5px",
                  "--border-right-width": "5px",
                  "--border-style": "solid",
                  "--border-top-width": "5px",
                  backgroundColor:
                    "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                },
              }),
              e(t.div, {
                className: "framer-1j3hvkt",
                "data-border": !0,
                "data-framer-name": "Stop4",
                layoutDependency: c,
                layoutId: "Erl1dQeqH",
                style: {
                  "--border-bottom-width": "5px",
                  "--border-color":
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  "--border-left-width": "5px",
                  "--border-right-width": "5px",
                  "--border-style": "solid",
                  "--border-top-width": "5px",
                  backgroundColor:
                    "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                },
              }),
              e(t.div, {
                className: "framer-1uk0rvv",
                "data-border": !0,
                "data-framer-name": "Stop5",
                layoutDependency: c,
                layoutId: "C7Csag0bx",
                style: {
                  "--border-bottom-width": "5px",
                  "--border-color":
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  "--border-left-width": "5px",
                  "--border-right-width": "5px",
                  "--border-style": "solid",
                  "--border-top-width": "5px",
                  backgroundColor:
                    "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                },
              }),
              e(t.div, {
                className: "framer-1rj30ee",
                "data-border": !0,
                "data-framer-name": "Stop6",
                layoutDependency: c,
                layoutId: "djXv0mimu",
                style: {
                  "--border-bottom-width": "5px",
                  "--border-color":
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  "--border-left-width": "5px",
                  "--border-right-width": "5px",
                  "--border-style": "solid",
                  "--border-top-width": "5px",
                  backgroundColor:
                    "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                },
              }),
              e(t.div, {
                className: "framer-ja3jsr",
                "data-border": !0,
                "data-framer-name": "Stop7",
                layoutDependency: c,
                layoutId: "KCvnUJcfT",
                style: {
                  "--border-bottom-width": "5px",
                  "--border-color":
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  "--border-left-width": "5px",
                  "--border-right-width": "5px",
                  "--border-style": "solid",
                  "--border-top-width": "5px",
                  backgroundColor:
                    "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                },
              }),
              e(v, {
                children: e(t.div, {
                  className: "framer-gqmzj2-container",
                  layoutDependency: c,
                  layoutId: "yfOyXGDtG-container",
                  children: e(d0, {
                    height: "100%",
                    id: "yfOyXGDtG",
                    layoutId: "yfOyXGDtG",
                    style: { height: "100%", width: "100%" },
                    variant: "WTqIuZ_lT",
                    width: "100%",
                    ...we(
                      {
                        AUkbFd2uw: { variant: "G7I1c6Whg" },
                        MIvme0Kyr: { variant: "CQcurg_Sv" },
                      },
                      d,
                      x,
                    ),
                  }),
                }),
              }),
              e(v, {
                width: "280px",
                ...we(
                  {
                    AUkbFd2uw: { width: void 0 },
                    MIvme0Kyr: { width: void 0 },
                  },
                  d,
                  x,
                ),
                children: e(t.div, {
                  className: "framer-22nwlf-container",
                  layoutDependency: c,
                  layoutId: "UDzqSfV4g-container",
                  children: e(p0, {
                    height: "100%",
                    id: "UDzqSfV4g",
                    layoutId: "UDzqSfV4g",
                    style: { height: "100%", width: "100%" },
                    variant: "TFLsgGxTv",
                    width: "100%",
                    ...we(
                      {
                        AUkbFd2uw: { variant: "hyacml7_S" },
                        MIvme0Kyr: { variant: "o07vj9JAw" },
                      },
                      d,
                      x,
                    ),
                  }),
                }),
              }),
              e(v, {
                children: e(t.div, {
                  className: "framer-1cya16k-container",
                  layoutDependency: c,
                  layoutId: "H3rx4swM5-container",
                  children: e(u0, {
                    height: "100%",
                    id: "H3rx4swM5",
                    layoutId: "H3rx4swM5",
                    style: { height: "100%", width: "100%" },
                    variant: "HnFC7P4gV",
                    width: "100%",
                    ...we(
                      {
                        AUkbFd2uw: { variant: "e1dHDRTKO" },
                        MIvme0Kyr: { variant: "jGN7Pfum5" },
                      },
                      d,
                      x,
                    ),
                  }),
                }),
              }),
              e(v, {
                children: e(t.div, {
                  className: "framer-8ld2zu-container",
                  layoutDependency: c,
                  layoutId: "nfnff7po5-container",
                  children: e(x0, {
                    height: "100%",
                    id: "nfnff7po5",
                    layoutId: "nfnff7po5",
                    style: { height: "100%", width: "100%" },
                    variant: "WjH4tVh5M",
                    width: "100%",
                    ...we(
                      {
                        AUkbFd2uw: { variant: "QRB3pHpUe" },
                        MIvme0Kyr: { variant: "ycBcJs_wL" },
                      },
                      d,
                      x,
                    ),
                  }),
                }),
              }),
              e(v, {
                children: e(t.div, {
                  className: "framer-lx2a28-container",
                  layoutDependency: c,
                  layoutId: "DGZsb38ib-container",
                  children: e(v0, {
                    height: "100%",
                    id: "DGZsb38ib",
                    layoutId: "DGZsb38ib",
                    style: { height: "100%", width: "100%" },
                    variant: "QzmPcnCyo",
                    width: "100%",
                    ...we(
                      {
                        AUkbFd2uw: { variant: "rZiLc0hom" },
                        MIvme0Kyr: { variant: "MWsYLcoZO" },
                      },
                      d,
                      x,
                    ),
                  }),
                }),
              }),
              e(v, {
                children: e(t.div, {
                  className: "framer-zbsw23-container",
                  layoutDependency: c,
                  layoutId: "PYX1E5iJA-container",
                  children: e(b0, {
                    height: "100%",
                    id: "PYX1E5iJA",
                    layoutId: "PYX1E5iJA",
                    style: { height: "100%", width: "100%" },
                    variant: "aNe2TOdti",
                    width: "100%",
                    ...we(
                      {
                        AUkbFd2uw: { variant: "mVUP33KfZ" },
                        MIvme0Kyr: { variant: "rG_wjCDtW" },
                      },
                      d,
                      x,
                    ),
                  }),
                }),
              }),
              e(v, {
                children: e(t.div, {
                  className: "framer-12gyunw-container",
                  layoutDependency: c,
                  layoutId: "TW00oNe_Y-container",
                  children: e(C0, {
                    height: "100%",
                    id: "TW00oNe_Y",
                    layoutId: "TW00oNe_Y",
                    style: { height: "100%", width: "100%" },
                    variant: "LxFp6w2NE",
                    width: "100%",
                    ...we(
                      {
                        AUkbFd2uw: { variant: "BDdrhVgyS" },
                        MIvme0Kyr: { variant: "VIm7tKzBK" },
                      },
                      d,
                      x,
                    ),
                  }),
                }),
              }),
              f(t.div, {
                className: "framer-fd0c48",
                "data-framer-name": "PathSide",
                layoutDependency: c,
                layoutId: "WYRCXfZwt",
                style: { rotate: 0 },
                variants: {
                  AUkbFd2uw: { rotate: 90 },
                  MIvme0Kyr: { rotate: 90 },
                },
                children: [
                  e(t.div, {
                    className: "framer-ql8gtt",
                    layoutDependency: c,
                    layoutId: "dM6L12VQn",
                    children: e(h, {
                      className: "framer-114yfvf",
                      layout: "position",
                      layoutDependency: c,
                      layoutId: "Acc1J16oV",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 142 121"><path d="M 0 58.873 C 32.842 58.873 106.154 20.727 126.881 0" transform="translate(7.9 31.336) rotate(212 63.44 29.437)" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                      svgContentId: 10107819221,
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t.div, {
                    className: "framer-aoimyx",
                    layoutDependency: c,
                    layoutId: "Q5R1yl41l",
                    children: e(h, {
                      className: "framer-uh783",
                      layout: "position",
                      layoutDependency: c,
                      layoutId: "T56Cx01D4",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 129 139"><path d="M 0 58.873 C 32.842 58.873 106.154 20.727 126.881 0" transform="translate(0.9 40.336) rotate(231 63.44 29.437)" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                      svgContentId: 12863605928,
                      withExternalLayout: !0,
                    }),
                  }),
                  $() &&
                    e(t.div, {
                      className: "framer-1lwgsny",
                      layoutDependency: c,
                      layoutId: "TfvQ3ENUF",
                      children: e(h, {
                        className: "framer-1vcnoeg",
                        layout: "position",
                        layoutDependency: c,
                        layoutId: "iDgyAScUU",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 175 94"><path d="M 0 82.453 C 31.622 60.971 112.635 17.788 168.916 0" transform="translate(3.042 6.023) rotate(183 84.458 41.227)" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                        svgContentId: 12821586126,
                        withExternalLayout: !0,
                      }),
                    }),
                  e(t.div, {
                    className: "framer-sk8lmk",
                    layoutDependency: c,
                    layoutId: "vdl_D1pAJ",
                    children: e(h, {
                      className: "framer-1jp4t6k",
                      layout: "position",
                      layoutDependency: c,
                      layoutId: "hbjbO6f5u",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 99 110"><path d="M 0 42.977 C 28.55 38.965 79.268 15.627 100.575 0" transform="translate(-0.862 33.241) rotate(53 50.288 21.489)" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                      svgContentId: 12036351707,
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t.div, {
                    className: "framer-35m3nu",
                    layoutDependency: c,
                    layoutId: "MrgaUppom",
                    children: e(h, {
                      className: "framer-4slydg",
                      layout: "position",
                      layoutDependency: c,
                      layoutId: "EMf8pnGpJ-shape",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 110 62"><path d="M 0 38.282 C 32.842 38.282 79.435 15.627 100.742 0" transform="translate(4.879 12.109) rotate(12 50.371 19.141)" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                      svgContentId: 12840544707,
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  N0 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-oSWt9.framer-1t2r9jf, .framer-oSWt9 .framer-1t2r9jf { display: block; }",
    ".framer-oSWt9.framer-kzcqv1 { height: 95px; overflow: visible; position: relative; width: 3000px; }",
    ".framer-oSWt9 .framer-1nflqy1-container { flex: none; height: 95px; left: 0px; position: absolute; right: 0px; top: -190px; z-index: 0; }",
    ".framer-oSWt9 .framer-jcweaa { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 23px); left: -9px; overflow: hidden; position: absolute; top: -11px; width: 23px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-oSWt9 .framer-1u13tcg { aspect-ratio: 1 / 1; bottom: -150px; flex: none; height: var(--framer-aspect-ratio-supported, 23px); overflow: hidden; position: absolute; right: 79px; width: 23px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-oSWt9 .framer-1rrw8md { flex: none; height: 36px; left: calc(9.266666666666689% - 36px / 2); overflow: hidden; position: absolute; top: calc(21.05263157894739% - 36px / 2); width: 36px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-oSWt9 .framer-gvl63c { flex: none; height: 36px; left: calc(19.433333333333355% - 36px / 2); overflow: hidden; position: absolute; top: calc(181.0526315789474% - 36px / 2); width: 36px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-oSWt9 .framer-1ga4ig2 { flex: none; height: 36px; left: calc(32.26666666666669% - 36px / 2); overflow: hidden; position: absolute; top: calc(21.05263157894739% - 36px / 2); width: 36px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-oSWt9 .framer-1j3hvkt { flex: none; height: 36px; left: calc(42.93333333333336% - 36px / 2); overflow: hidden; position: absolute; top: calc(-194.73684210526315% - 36px / 2); width: 36px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-oSWt9 .framer-1uk0rvv { flex: none; height: 36px; left: calc(54.93333333333336% - 36px / 2); overflow: hidden; position: absolute; top: calc(2.220446049250313e-14% - 36px / 2); width: 36px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-oSWt9 .framer-1rj30ee { flex: none; height: 36px; left: calc(71.2666666666667% - 36px / 2); overflow: hidden; position: absolute; top: calc(202.10526315789474% - 36px / 2); width: 36px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-oSWt9 .framer-ja3jsr { flex: none; height: 36px; left: calc(89.60000000000002% - 36px / 2); overflow: hidden; position: absolute; top: calc(-28.421052631578924% - 36px / 2); width: 36px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-oSWt9 .framer-gqmzj2-container { flex: none; height: 556px; left: calc(4.433333333333356% - 512px / 2); position: absolute; top: calc(106.31578947368423% - 556px / 2); width: 512px; }",
    ".framer-oSWt9 .framer-22nwlf-container { flex: none; height: 408px; left: calc(18.66666666666669% - 280px / 2); position: absolute; top: calc(-17.894736842105242% - 408px / 2); width: 280px; }",
    ".framer-oSWt9 .framer-1cya16k-container { flex: none; height: 520px; left: calc(32.43333333333335% - 381px / 2); position: absolute; top: calc(125.26315789473685% - 520px / 2); width: 381px; }",
    ".framer-oSWt9 .framer-8ld2zu-container { flex: none; height: 773px; left: calc(42.56666666666669% - 579px / 2); position: absolute; top: calc(4.210526315789496% - 773px / 2); width: 579px; }",
    ".framer-oSWt9 .framer-lx2a28-container { flex: none; height: 440px; left: calc(58.13333333333336% - 509px / 2); position: absolute; top: calc(-62.10526315789472% - 440px / 2); width: 509px; }",
    ".framer-oSWt9 .framer-zbsw23-container { flex: none; height: 410px; left: calc(73.63333333333335% - 550px / 2); position: absolute; top: calc(236.84210526315786% - 410px / 2); width: 550px; }",
    ".framer-oSWt9 .framer-12gyunw-container { flex: none; height: 432px; left: calc(93.13333333333335% - 478px / 2); position: absolute; top: calc(21.05263157894739% - 432px / 2); width: 478px; }",
    ".framer-oSWt9 .framer-fd0c48 { flex: none; height: 562px; left: calc(40.76666666666669% - 2260px / 2); overflow: hidden; position: absolute; top: calc(10.526315789473706% - 562px / 2); width: 2260px; }",
    ".framer-oSWt9 .framer-ql8gtt { flex: none; height: 121px; left: 0px; overflow: hidden; position: absolute; top: 136px; width: 142px; }",
    ".framer-oSWt9 .framer-114yfvf { flex: none; height: 121px; left: calc(50.00000000000002% - 142px / 2); position: absolute; top: calc(49.586776859504155% - 121px / 2); width: 142px; }",
    ".framer-oSWt9 .framer-aoimyx { flex: none; height: 139px; overflow: hidden; position: absolute; right: 811px; top: 0px; width: 129px; }",
    ".framer-oSWt9 .framer-uh783 { flex: none; height: 139px; left: calc(49.61240310077522% - 129px / 2); position: absolute; top: calc(49.640287769784194% - 139px / 2); width: 129px; }",
    ".framer-oSWt9 .framer-1lwgsny { bottom: 165px; flex: none; height: 94px; overflow: hidden; position: absolute; right: 0px; width: 175px; }",
    ".framer-oSWt9 .framer-1vcnoeg { flex: none; height: 94px; left: calc(49.71428571428574% - 175px / 2); position: absolute; top: calc(50.00000000000002% - 94px / 2); width: 175px; }",
    ".framer-oSWt9 .framer-sk8lmk { bottom: 0px; flex: none; height: 110px; overflow: hidden; position: absolute; right: 468px; width: 99px; }",
    ".framer-oSWt9 .framer-1jp4t6k { flex: none; height: 110px; left: calc(49.494949494949516% - 99px / 2); position: absolute; top: calc(50.00000000000002% - 110px / 2); width: 99px; }",
    ".framer-oSWt9 .framer-35m3nu { bottom: 40px; flex: none; height: 62px; left: 597px; overflow: hidden; position: absolute; width: 110px; }",
    ".framer-oSWt9 .framer-4slydg { flex: none; height: 62px; left: calc(50.00000000000002% - 110px / 2); position: absolute; top: calc(50.00000000000002% - 62px / 2); width: 110px; }",
    ".framer-oSWt9.framer-v-ig0216.framer-kzcqv1, .framer-oSWt9.framer-v-15ssl34.framer-kzcqv1 { height: 3000px; width: 95px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-1nflqy1-container, .framer-oSWt9.framer-v-15ssl34 .framer-1nflqy1-container { left: -1263px; right: unset; top: 1452px; width: 3000px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-jcweaa, .framer-oSWt9.framer-v-15ssl34 .framer-jcweaa { aspect-ratio: unset; height: 23px; left: 80px; top: -10px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-1u13tcg, .framer-oSWt9.framer-v-15ssl34 .framer-1u13tcg { aspect-ratio: unset; bottom: unset; height: 23px; left: calc(-141.05263157894734% - 23px / 2); right: unset; top: calc(97.00000000000001% - 23px / 2); }",
    ".framer-oSWt9.framer-v-ig0216 .framer-1rrw8md, .framer-oSWt9.framer-v-15ssl34 .framer-1rrw8md { left: unset; right: 2px; top: 260px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-gvl63c, .framer-oSWt9.framer-v-15ssl34 .framer-gvl63c { left: unset; right: 154px; top: 565px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-1ga4ig2, .framer-oSWt9.framer-v-15ssl34 .framer-1ga4ig2 { left: unset; right: 2px; top: 950px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-1j3hvkt, .framer-oSWt9.framer-v-15ssl34 .framer-1j3hvkt { left: unset; right: -203px; top: 1270px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-1uk0rvv, .framer-oSWt9.framer-v-15ssl34 .framer-1uk0rvv { left: unset; right: -18px; top: 1630px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-1rj30ee, .framer-oSWt9.framer-v-15ssl34 .framer-1rj30ee { left: unset; right: 174px; top: 2120px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-ja3jsr, .framer-oSWt9.framer-v-15ssl34 .framer-ja3jsr { left: unset; right: -45px; top: 2670px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-gqmzj2-container, .framer-oSWt9.framer-v-15ssl34 .framer-gqmzj2-container { left: calc(95.78947368421055% - 512px / 2); top: 43px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-22nwlf-container { height: auto; left: unset; right: 467px; top: 340px; width: auto; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-1cya16k-container, .framer-oSWt9.framer-v-15ssl34 .framer-1cya16k-container { left: calc(-37.89473684210524% - 381px / 2); top: 830px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-8ld2zu-container, .framer-oSWt9.framer-v-15ssl34 .framer-8ld2zu-container { left: calc(28.42105263157897% - 579px / 2); top: 1000px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-lx2a28-container { left: calc(91.57894736842107% - 509px / 2); top: 1575px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-zbsw23-container, .framer-oSWt9.framer-v-15ssl34 .framer-zbsw23-container { left: calc(52.63157894736844% - 550px / 2); top: 2090px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-12gyunw-container, .framer-oSWt9.framer-v-15ssl34 .framer-12gyunw-container { left: calc(82.10526315789475% - 478px / 2); top: 2480px; }",
    ".framer-oSWt9.framer-v-ig0216 .framer-fd0c48, .framer-oSWt9.framer-v-15ssl34 .framer-fd0c48 { left: unset; right: -1121px; top: 943px; width: 2262px; }",
    ".framer-oSWt9.framer-v-15ssl34 .framer-22nwlf-container { height: auto; left: unset; right: -133px; top: 420px; width: auto; }",
    ".framer-oSWt9.framer-v-15ssl34 .framer-lx2a28-container { left: calc(-10.526315789473662% - 509px / 2); top: 1645px; }",
    '.framer-oSWt9[data-border="true"]::after, .framer-oSWt9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  ar = H(D0, N0, "framer-oSWt9"),
  Tr = ar;
ar.displayName = "About/AppQueue";
ar.defaultProps = { height: 95, width: 3e3 };
Q(ar, {
  variant: {
    options: ["lJkOUJdxM", "AUkbFd2uw", "MIvme0Kyr"],
    optionTitles: ["Horizontal", "Vertical_Desktop", "Vertical_Mobile"],
    title: "Variant",
    type: k.Enum,
  },
});
W(
  ar,
  [
    { explicitInter: !0, fonts: [] },
    ...f0,
    ...m0,
    ...c0,
    ...h0,
    ...g0,
    ...y0,
    ...w0,
    ...k0,
  ],
  { supportsExplicitInterCodegen: !0 },
);
var T0 = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerregPB5Cp5",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "95",
        framerContractVersion: "1",
        framerIntrinsicWidth: "3000",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"AUkbFd2uw":{"layout":["fixed","fixed"]},"MIvme0Kyr":{"layout":["fixed","fixed"]}}}',
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var F0 = oe(w),
  B0 = ie(w),
  S0 = C(he),
  Q0 = ["DTiyBUz1X", "iMfkjRqob"],
  P0 = "framer-3h3ke",
  A0 = { DTiyBUz1X: "framer-v-63p1nb", iMfkjRqob: "framer-v-125l1q5" };
function zo(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var E0 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  U0 = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  H0 = t(m),
  W0 = { Default: "DTiyBUz1X", Phone: "iMfkjRqob" },
  X0 = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = W0[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "DTiyBUz1X",
    };
  },
  O0 = (a, r) =>
    a.layoutDependency ? r.join("-") + a.layoutDependency : r.join("-"),
  Z0 = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = X0(a),
      {
        baseVariant: d,
        classNames: q,
        clearLoadingGesture: j,
        gestureHandlers: u,
        gestureVariant: x,
        isLoading: I,
        setGestureState: V,
        setVariant: n,
        variants: y,
      } = G({
        cycleOrder: Q0,
        defaultVariant: "DTiyBUz1X",
        variant: b,
        variantClassNames: A0,
      }),
      c = O0(a, y),
      M = F(null),
      $ = A(),
      K = [De, Re],
      g = me();
    return e(E, {
      id: p ?? $,
      children: e(H0, {
        animate: y,
        initial: !1,
        children: e(U0, {
          value: E0,
          children: f(t.div, {
            ..._,
            ...u,
            className: P(P0, ...K, "framer-63p1nb", s, q),
            "data-framer-name": "Default",
            layoutDependency: c,
            layoutId: "DTiyBUz1X",
            ref: r ?? M,
            style: { ...l },
            ...zo({ iMfkjRqob: { "data-framer-name": "Phone" } }, d, x),
            children: [
              f(t.div, {
                className: "framer-1fo55ja",
                "data-framer-name": "Title",
                layoutDependency: c,
                layoutId: "Df6kaQZ55",
                children: [
                  e(w, {
                    __fromCanvasComponent: !0,
                    children: e(m, {
                      children: e(t.h2, {
                        className: "framer-styles-preset-1jzss2t",
                        "data-styles-preset": "CHTVVTxbR",
                        children: "Microsoft",
                      }),
                    }),
                    className: "framer-1yd9g09",
                    fonts: ["Inter"],
                    layoutDependency: c,
                    layoutId: "lhnlg_ooI",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  f(t.div, {
                    className: "framer-tr71ej",
                    layoutDependency: c,
                    layoutId: "C7sYH6LtJ",
                    children: [
                      e(F0, {
                        __fromCanvasComponent: !0,
                        children: e(m, {
                          children: e(t.p, {
                            className: "framer-styles-preset-1nr6prh",
                            "data-styles-preset": "uRhxzqfGc",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)))",
                            },
                            children:
                              "Intern\uFF5C2018 Summer / Beijing\uFF5C1 min read",
                          }),
                        }),
                        className: "framer-x2g9u9",
                        fonts: ["Inter"],
                        layoutDependency: c,
                        layoutId: "O2pLWnjVS",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      e(B0, {
                        __fromCanvasComponent: !0,
                        children: e(m, {
                          children: e(t.p, {
                            className: "framer-styles-preset-1nr6prh",
                            "data-styles-preset": "uRhxzqfGc",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)))",
                            },
                            children:
                              "\u5B9E\u4E60\u751F\uFF5C2018 \u590F / \u5317\u4EAC\uFF5C1 \u5206\u949F\u9605\u8BFB",
                          }),
                        }),
                        className: "framer-14s8wgb",
                        fonts: ["Inter"],
                        layoutDependency: c,
                        layoutId: "tTf6P3nJ_",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                ],
              }),
              e(v, {
                width: g?.width || "100vw",
                ...zo(
                  {
                    iMfkjRqob: { width: `calc(${g?.width || "100vw"} * 0.9)` },
                  },
                  d,
                  x,
                ),
                children: e(t.div, {
                  className: "framer-jehreo-container",
                  layoutDependency: c,
                  layoutId: "EN8Fy_nBE-container",
                  children: e(he, {
                    height: "100%",
                    id: "EN8Fy_nBE",
                    layoutId: "EN8Fy_nBE",
                    style: { width: "100%" },
                    VIf0LAdUy: f(m, {
                      children: [
                        e("p", {
                          children:
                            "I had a delightful internship at Microsoft. I worked at the Microsoft Software Technology Center Asia (STCA), where I participated in projects related to the AI creations of Microsoft Xiaoice. ",
                        }),
                        e("p", {
                          children:
                            "My internship responsibilities were multifaceted. On one hand, I needed to design new applications based on business background information, primarily leveraging Xiaoice\u2019s creative capabilities to develop entertainment products for the general public. In this task, I designed simple outfit rating applications and psychological analysis applications for young users. On the other hand, I assisted senior designers in creating more complex scenarios, such as developing an AI music generation application for music creators, and designing parameter control and sheet music interfaces. ",
                        }),
                        e("p", {
                          children:
                            "The internship at Microsoft allowed me to put my design studies into practice and step into the implementation phase, including exploring web development technologies.\xA0 ",
                        }),
                        e("p", {
                          children:
                            "I am grateful to the designers and product managers at Microsoft for their care and guidance.",
                        }),
                      ],
                    }),
                    WBP1YB7T1: f(m, {
                      children: [
                        e("p", {
                          children:
                            "\u6211\u5728 Microsoft \u7ECF\u5386\u4E86\u4E00\u6BB5\u77ED\u6682\u800C\u6109\u60A6\u7684\u5B9E\u4E60\u65F6\u95F4\u3002\u6211\u6240\u5728\u7684\u90E8\u95E8\u662F\u5FAE\u8F6F\u4E9A\u6D32\u4E92\u8054\u7F51\u5DE5\u7A0B\u9662\uFF08Microsoft Software Technology Center Asia, STCA\uFF09\uFF0C\u53C2\u4E0E\u4E86\u5FAE\u8F6F\u5C0F\u51B0\u4EBA\u5DE5\u667A\u80FD\u521B\u4F5C\u7684\u76F8\u5173\u5DE5\u4F5C\u3002",
                        }),
                        e("p", {
                          children:
                            " \u6211\u7684\u5B9E\u4E60\u5DE5\u4F5C\u6DB5\u76D6\u591A\u4E2A\u65B9\u9762\u3002\u4E00\u65B9\u9762\uFF0C\u6211\u9700\u8981\u57FA\u4E8E\u4E1A\u52A1\u80CC\u666F\u4FE1\u606F\u5B8C\u6210\u65B0\u5E94\u7528\u7684\u8BBE\u8BA1\uFF0C\u4E3B\u8981\u662F\u5229\u7528\u5C0F\u51B0\u7684\u521B\u4F5C\u80FD\u529B\uFF0C\u4E3A\u5927\u4F17\u8BBE\u8BA1\u5A31\u4E50\u5316\u4EA7\u54C1\u3002\u5728\u8FD9\u9879\u4EFB\u52A1\u4E2D\uFF0C\u6211\u4E3A\u5E74\u8F7B\u7528\u6237\u8BBE\u8BA1\u4E86\u7B80\u5355\u7684\u7A7F\u642D\u8BC4\u5206\u5E94\u7528\u548C\u5FC3\u7406\u5206\u6790\u5E94\u7528\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u6211\u534F\u52A9\u8D44\u6DF1\u8BBE\u8BA1\u5E08\u5B8C\u6210\u66F4\u591A\u573A\u666F\u7684\u8BBE\u8BA1\uFF0C\u4F8B\u5982\u4E3A\u97F3\u4E50\u521B\u4F5C\u8005\u5236\u4F5C AI \u97F3\u4E50\u751F\u6210\u5E94\u7528\uFF0C\u8BBE\u8BA1\u53C2\u6570\u63A7\u5236\u548C\u4E50\u8C31\u754C\u9762\u3002 ",
                        }),
                        e("p", {
                          children:
                            "\u5728 Microsoft \u7684\u5B9E\u4E60\u8BA9\u6211\u6709\u673A\u4F1A\u5B9E\u8DF5\u4E4B\u524D\u7684\u8BBE\u8BA1\u5B66\u4E60\uFF0C\u4E5F\u8BA9\u6211\u8FC8\u5165\u4E86\u8BBE\u8BA1\u5B9E\u73B0\u7684\u9636\u6BB5\uFF0C\u5F00\u59CB\u7814\u7A76\u7F51\u9875\u5F00\u53D1\u7B49\u6280\u672F\u3002 ",
                        }),
                        e("p", {
                          children:
                            "\u611F\u8C22\u5728 Microsoft \u9047\u5230\u7684\u8BBE\u8BA1\u5E08\u548C\u4EA7\u54C1\u7ECF\u7406\u4EEC\u7ED9\u4E88\u7684\u5173\u7231\u548C\u6307\u5BFC\u3002",
                        }),
                      ],
                    }),
                    width: "100%",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Y0 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-3h3ke.framer-104pfup, .framer-3h3ke .framer-104pfup { display: block; }",
    ".framer-3h3ke.framer-63p1nb { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 780px; }",
    ".framer-3h3ke .framer-1fo55ja { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-3h3ke .framer-1yd9g09, .framer-3h3ke .framer-x2g9u9, .framer-3h3ke .framer-14s8wgb { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-3h3ke .framer-tr71ej { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-3h3ke .framer-jehreo-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3h3ke.framer-63p1nb, .framer-3h3ke .framer-1fo55ja, .framer-3h3ke .framer-tr71ej { gap: 0px; } .framer-3h3ke.framer-63p1nb > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-3h3ke.framer-63p1nb > :first-child, .framer-3h3ke .framer-1fo55ja > :first-child, .framer-3h3ke .framer-tr71ej > :first-child { margin-top: 0px; } .framer-3h3ke.framer-63p1nb > :last-child, .framer-3h3ke .framer-1fo55ja > :last-child, .framer-3h3ke .framer-tr71ej > :last-child { margin-bottom: 0px; } .framer-3h3ke .framer-1fo55ja > *, .framer-3h3ke .framer-tr71ej > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    ".framer-3h3ke.framer-v-125l1q5.framer-63p1nb { align-content: center; align-items: center; width: 390px; }",
    ".framer-3h3ke.framer-v-125l1q5 .framer-1fo55ja, .framer-3h3ke.framer-v-125l1q5 .framer-jehreo-container { width: 90%; }",
    ...ze,
    ...Ie,
  ],
  or = H(Z0, Y0, "framer-3h3ke"),
  Bt = or;
or.displayName = "About/Microsoft";
or.defaultProps = { height: 834.5, width: 780 };
Q(or, {
  variant: {
    options: ["DTiyBUz1X", "iMfkjRqob"],
    optionTitles: ["Default", "Phone"],
    title: "Variant",
    type: k.Enum,
  },
});
W(
  or,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...S0,
    ...le(Me),
    ...le(je),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var G0 = oe(w),
  K0 = ie(w),
  J0 = C(he),
  $0 = ["dN9OFE8w_", "FBKY_wpNr"],
  el = "framer-lDNKK",
  rl = { dN9OFE8w_: "framer-v-c6vjxr", FBKY_wpNr: "framer-v-gtjx3y" };
function Fe(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var tl = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  al = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  ol = t(m),
  il = { Default: "dN9OFE8w_", Phone: "FBKY_wpNr" },
  nl = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = il[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "dN9OFE8w_",
    };
  },
  ll = (a, r) =>
    a.layoutDependency ? r.join("-") + a.layoutDependency : r.join("-"),
  sl = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = nl(a),
      {
        baseVariant: d,
        classNames: q,
        clearLoadingGesture: j,
        gestureHandlers: u,
        gestureVariant: x,
        isLoading: I,
        setGestureState: V,
        setVariant: n,
        variants: y,
      } = G({
        cycleOrder: $0,
        defaultVariant: "dN9OFE8w_",
        variant: b,
        variantClassNames: rl,
      }),
      c = ll(a, y),
      M = F(null),
      $ = A(),
      K = [De, Re],
      g = me();
    return e(E, {
      id: p ?? $,
      children: e(ol, {
        animate: y,
        initial: !1,
        children: e(al, {
          value: tl,
          children: f(t.div, {
            ..._,
            ...u,
            className: P(el, ...K, "framer-c6vjxr", s, q),
            "data-framer-name": "Default",
            layoutDependency: c,
            layoutId: "dN9OFE8w_",
            ref: r ?? M,
            style: { ...l },
            ...Fe({ FBKY_wpNr: { "data-framer-name": "Phone" } }, d, x),
            children: [
              f(t.div, {
                className: "framer-d4grbi",
                "data-framer-name": "Title",
                layoutDependency: c,
                layoutId: "etqlxD13n",
                children: [
                  e(w, {
                    __fromCanvasComponent: !0,
                    children: e(m, {
                      children: e(t.h2, {
                        className: "framer-styles-preset-1jzss2t",
                        "data-styles-preset": "CHTVVTxbR",
                        children: "OPPO",
                      }),
                    }),
                    className: "framer-1wsa4qb",
                    fonts: ["Inter"],
                    layoutDependency: c,
                    layoutId: "TiNkXt7BO",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  f(t.div, {
                    className: "framer-1mv39mf",
                    layoutDependency: c,
                    layoutId: "Y_qgr3OcM",
                    children: [
                      e(G0, {
                        __fromCanvasComponent: !0,
                        children: e(m, {
                          children: e(t.p, {
                            className: "framer-styles-preset-1nr6prh",
                            "data-styles-preset": "uRhxzqfGc",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)))",
                            },
                            children:
                              "Interaction Designer\uFF5C2019 - Present / Shanghai\uFF5C4 min read",
                          }),
                        }),
                        className: "framer-krvyfs",
                        fonts: ["Inter"],
                        layoutDependency: c,
                        layoutId: "gek8itlNQ",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      e(K0, {
                        __fromCanvasComponent: !0,
                        children: e(m, {
                          children: e(t.p, {
                            className: "framer-styles-preset-1nr6prh",
                            "data-styles-preset": "uRhxzqfGc",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)))",
                            },
                            children:
                              "\u4EA4\u4E92\u8BBE\u8BA1\u5E08 \uFF5C 2019 - \u81F3\u4ECA / \u4E0A\u6D77\uFF5C4 \u5206\u949F\u9605\u8BFB",
                          }),
                        }),
                        className: "framer-ldf5xq",
                        fonts: ["Inter"],
                        layoutDependency: c,
                        layoutId: "ROaQLTWlU",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                ],
              }),
              e(v, {
                width: g?.width || "100vw",
                ...Fe(
                  {
                    FBKY_wpNr: { width: `calc(${g?.width || "100vw"} * 0.9)` },
                  },
                  d,
                  x,
                ),
                children: e(t.div, {
                  className: "framer-t5x8n1-container",
                  layoutDependency: c,
                  layoutId: "eyN9aKY2t-container",
                  children: e(he, {
                    height: "100%",
                    id: "eyN9aKY2t",
                    layoutId: "eyN9aKY2t",
                    style: { width: "100%" },
                    VIf0LAdUy: f(m, {
                      children: [
                        e("p", {
                          children:
                            "OPPO was my first stop after graduation. I worked in the OPPO Research Institute, which focuses on innovative products such as XR glasses, digital humans, and AI products. During my five years as an interaction designer, I participated in the design of various types of products.",
                        }),
                        e("p", {
                          children: e("br", { className: "trailing-break" }),
                        }),
                        e("ol", {
                          children: e("li", {
                            "data-preset-tag": "h3",
                            children: e("h3", { children: "XR Devices" }),
                          }),
                        }),
                        e("p", {
                          children:
                            "As an early participant in XR device research, I contributed to the design of two products. One was a lightweight AR glasses, intended as a wearable product for daily use, providing functions such as translation, navigation, and notifications (later evolved into OPPO AIR GLASS). The other was an AR head-mounted display, supporting multi-degree interaction and using a phone as the computing hub to provide an immersive user interface.",
                        }),
                        e("p", {
                          children:
                            "In the projects I showcased, some ideas from the lightweight AR glasses were applied to Acrobat, while Dedao was a software specifically designed for immersive devices.",
                        }),
                      ],
                    }),
                    WBP1YB7T1: f(m, {
                      children: [
                        e("p", {
                          children:
                            "OPPO \u662F\u6211\u6BD5\u4E1A\u540E\u7684\u7B2C\u4E00\u7AD9\u3002\u6211\u6240\u5728\u7684\u7CFB\u7EDF\u4E3AOPPO\u7814\u7A76\u9662\uFF0C\u8FD9\u91CC\u56F4\u7ED5\u7740\u521B\u65B0\u4EA7\u54C1\u5F00\u5C55\u4E1A\u52A1\uFF0C\u5982XR\u773C\u955C\u3001\u6570\u5B57\u4EBA\u3001AI\u4EA7\u54C1\u3002\u5728\u6211\u62C5\u4EFB\u4EA4\u4E92\u8BBE\u8BA1\u5E08\u7684\u4E94\u5E74\u5185\uFF0C\u6211\u53C2\u4E0E\u4E86\u591A\u79CD\u7C7B\u578B\u7684\u4EA7\u54C1\u8BBE\u8BA1\u3002 ",
                        }),
                        e("p", {
                          children: e("br", { className: "trailing-break" }),
                        }),
                        e("ol", {
                          children: e("li", {
                            "data-preset-tag": "h3",
                            children: e("h3", { children: "XR \u8BBE\u5907 " }),
                          }),
                        }),
                        e("p", {
                          children:
                            "\u4F5C\u4E3A XR \u8BBE\u5907\u7814\u7A76\u7684\u65E9\u671F\u53C2\u4E0E\u8005\uFF0C\u6211\u53C2\u4E0E\u4E86\u4E24\u4E2A\u4EA7\u54C1\u7684\u8BBE\u8BA1\u3002\u4E00\u4E2A\u662F\u8F7B\u91CF\u5316 AR \u773C\u955C\uFF0C\u4F5C\u4E3A\u4EBA\u4EEC\u65E5\u5E38\u51FA\u884C\u7684\u7A7F\u6234\u4EA7\u54C1\uFF0C\u63D0\u4F9B\u7FFB\u8BD1\u3001\u5BFC\u822A\u548C\u901A\u77E5\u7B49\u529F\u80FD\uFF08\u540E\u6765\u6F14\u5316\u4E3A OPPO AIR GLASS\uFF09\u3002\u53E6\u4E00\u4E2A\u662F AR \u5934\u6234\u5F0F\u663E\u793A\u5668\uFF0C\u652F\u6301\u591A\u81EA\u7531\u5EA6\u4E92\u52A8\uFF0C\u901A\u8FC7\u624B\u673A\u4F5C\u4E3A\u8BA1\u7B97\u4E2D\u67A2\uFF0C\u63D0\u4F9B\u6C89\u6D78\u5F0F\u7684\u7528\u6237\u754C\u9762\u3002 \u5728\u6211\u9648\u5217\u7684\u9879\u76EE\u4E2D\uFF0C\u6211\u5C06\u4E00\u4E9B\u8F7B\u91CF\u5316 AR \u773C\u955C\u4E2D\u7684\u60F3\u6CD5\u5E94\u7528\u5230 Acrobat\uFF0C\u800C Dedao \u5219\u662F\u4E3A\u6C89\u6D78\u8BBE\u5907\u4E13\u95E8\u8BBE\u8BA1\u7684\u8F6F\u4EF6\u3002 ",
                        }),
                      ],
                    }),
                    width: "100%",
                  }),
                }),
              }),
              e(v, {
                width: g?.width || "100vw",
                ...Fe(
                  {
                    FBKY_wpNr: { width: `calc(${g?.width || "100vw"} * 0.9)` },
                  },
                  d,
                  x,
                ),
                children: e(t.div, {
                  className: "framer-1aoky53-container",
                  layoutDependency: c,
                  layoutId: "unMAU3lBa-container",
                  children: e(he, {
                    height: "100%",
                    id: "unMAU3lBa",
                    layoutId: "unMAU3lBa",
                    style: { width: "100%" },
                    VIf0LAdUy: f(m, {
                      children: [
                        e("ol", {
                          start: "2",
                          children: e("li", {
                            "data-preset-tag": "h3",
                            children: e("h3", { children: "Digital Humans" }),
                          }),
                        }),
                        e("p", {
                          children:
                            "The digital human project was the second major project I participated in. This project had three parts and introduced me to a new field.",
                        }),
                        e("ul", {
                          children: e("li", {
                            "data-preset-tag": "p",
                            children: e("p", {
                              children:
                                "The first part was character design. I needed to determine the character\u2019s features based on stakeholder information and worked with third-party designers to complete the character\u2019s concept art, clothing, models, expressions, and movements, as well as scene design suitable for displaying the character\u2019s style.",
                            }),
                          }),
                        }),
                        e("ul", {
                          children: e("li", {
                            "data-preset-tag": "p",
                            children: e("p", {
                              children:
                                "The second part involved designing use cases for the character. Through discussions with team members, we devised a fitness scenario where the character interacts with users via a large screen, becoming their fitness companion. This scenario also influenced the character\u2019s style definition. In this phase, I designed sample courses, interactive games, and large-screen interfaces.",
                            }),
                          }),
                        }),
                        e("ul", {
                          children: e("li", {
                            "data-preset-tag": "p",
                            children: e("p", {
                              children:
                                "The third part was to introduce the character to more end users, bringing her into the e-commerce realm. To make ORII more suitable for live e-commerce, I designed a set of preset actions and expressions for her to assist backend operators. Based on OPPO\u2019s primary user base, we also designed a new image for ORII for targeted use.",
                            }),
                          }),
                        }),
                        e("p", {
                          children:
                            "In my project presentation, I showcased ORII\u2019s style, actions, and scenario features. More details will be gradually added to the website in future updates.",
                        }),
                      ],
                    }),
                    WBP1YB7T1: f(m, {
                      children: [
                        e("ol", {
                          start: "2",
                          children: e("li", {
                            "data-preset-tag": "h3",
                            children: f("h3", {
                              children: [
                                e("strong", { children: "\u6570\u5B57\u4EBA" }),
                                " ",
                              ],
                            }),
                          }),
                        }),
                        e("p", {
                          children:
                            "\u6570\u5B57\u4EBA\u662F\u6211\u53C2\u4E0E\u7684\u7B2C\u4E8C\u4E2A\u5927\u578B\u9879\u76EE\u3002\u5728\u8FD9\u4E2A\u9879\u76EE\u4E2D\uFF0C\u6211\u8FDB\u5165\u4E86\u4E00\u4E2A\u5168\u65B0\u7684\u9886\u57DF\uFF0C\u8BE5\u9879\u76EE\u5206\u4E3A\u4E09\u4E2A\u90E8\u5206\u3002 ",
                        }),
                        e("ul", {
                          children: e("li", {
                            "data-preset-tag": "p",
                            children: e("p", {
                              children:
                                "\u7B2C\u4E00\u90E8\u5206\u662F\u8BBE\u8BA1\u4EBA\u7269\u3002\u6211\u9700\u8981\u6839\u636E\u5229\u76CA\u76F8\u5173\u8005\u7684\u4FE1\u606F\u5B9A\u4F4D\u4EBA\u7269\u7279\u5F81\uFF0C\u901A\u8FC7\u4E0E\u7B2C\u4E09\u65B9\u8BBE\u8BA1\u5E08\u5408\u4F5C\u5B8C\u6210\u539F\u753B\u3001\u670D\u88C5\u3001\u6A21\u578B\u3001\u8868\u60C5\u4E0E\u52A8\u4F5C\u8BBE\u8BA1\uFF0C\u4EE5\u53CA\u5C55\u793A\u4EBA\u7269\u98CE\u683C\u7684\u573A\u666F\u8BBE\u8BA1\u3002",
                            }),
                          }),
                        }),
                        e("ul", {
                          children: e("li", {
                            "data-preset-tag": "p",
                            children: e("p", {
                              children:
                                "\u7B2C\u4E8C\u90E8\u5206\u662F\u4E3A\u4EBA\u7269\u8BBE\u8BA1\u4F7F\u7528\u573A\u666F\u3002\u901A\u8FC7\u4E0E\u56E2\u961F\u6210\u5458\u7684\u8BA8\u8BBA\uFF0C\u6211\u4EEC\u4E3A\u4EBA\u7269\u8BBE\u8BA1\u4E86\u4E00\u5957\u5065\u8EAB\u573A\u666F\u65B9\u6848\uFF0C\u8BA9\u5979\u901A\u8FC7\u5927\u5C4F\u5E55\u4E92\u52A8\u6210\u4E3A\u7528\u6237\u7684\u5065\u8EAB\u642D\u6863\u3002\u8FD9\u4E00\u65B9\u6848\u4E5F\u5F71\u54CD\u4E86\u4EBA\u7269\u98CE\u683C\u7684\u5B9A\u4E49\u3002\u5728\u8FD9\u4E2A\u90E8\u5206\u4E2D\uFF0C\u6211\u8BBE\u8BA1\u4E86\u793A\u4F8B\u8BFE\u7A0B\u3001\u4E92\u52A8\u6E38\u620F\u548C\u5927\u5C4F\u5E55\u754C\u9762\u3002 ",
                            }),
                          }),
                        }),
                        e("ul", {
                          children: e("li", {
                            "data-preset-tag": "p",
                            children: e("p", {
                              children:
                                "\u7B2C\u4E09\u90E8\u5206\u662F\u8BA9\u4EBA\u7269\u63A5\u89E6\u66F4\u591A\u7EC8\u7AEF\u7528\u6237\uFF0C\u5C06\u4EBA\u7269\u5F15\u5165\u7535\u5546\u9886\u57DF\u3002\u4E3A\u4E86\u8BA9 ORII \u66F4\u9002\u5408\u7535\u5546\u76F4\u64AD\uFF0C\u6211\u4E3A\u5979\u8BBE\u8BA1\u4E86\u4E00\u5957\u9884\u7F6E\u7684\u52A8\u4F5C\u548C\u8868\u60C5\uFF0C\u4EE5\u914D\u5408\u540E\u7AEF\u8FD0\u8425\u4EBA\u5458\u4F7F\u7528\u3002\u57FA\u4E8E OPPO \u7684\u4E3B\u8981\u7528\u6237\u7FA4\u4F53\uFF0C\u6211\u4EEC\u8FD8\u4E3A ORII \u8BBE\u8BA1\u4E86\u65B0\u7684\u5F62\u8C61\u4EE5\u4FBF\u6709\u9488\u5BF9\u6027\u5730\u4F7F\u7528\u3002 \u5728\u6211\u9648\u5217\u7684\u9879\u76EE ORII \u4E2D\uFF0C\u5C55\u793A\u4E86\u5979\u7684\u98CE\u683C\u3001\u52A8\u4F5C\u4E0E\u573A\u666F\u7279\u5F81\u3002\u6709\u5173\u4E8E\u66F4\u591A\u7EC6\u8282\uFF0C\u6211\u4F1A\u5728\u672A\u6765\u7684\u66F4\u65B0\u4E2D\u9010\u6E10\u52A0\u5165\u5230\u7F51\u7AD9\u3002 ",
                            }),
                          }),
                        }),
                      ],
                    }),
                    width: "100%",
                  }),
                }),
              }),
              e(v, {
                width: g?.width || "100vw",
                ...Fe(
                  {
                    FBKY_wpNr: { width: `calc(${g?.width || "100vw"} * 0.9)` },
                  },
                  d,
                  x,
                ),
                children: e(t.div, {
                  className: "framer-v4a4fm-container",
                  layoutDependency: c,
                  layoutId: "jWIO3Ssxk-container",
                  children: e(he, {
                    height: "100%",
                    id: "jWIO3Ssxk",
                    layoutId: "jWIO3Ssxk",
                    style: { width: "100%" },
                    VIf0LAdUy: f(m, {
                      children: [
                        e("ol", {
                          start: "3",
                          children: e("li", {
                            "data-preset-tag": "h3",
                            children: e("h3", { children: "AI Applications" }),
                          }),
                        }),
                        e("p", {
                          children:
                            "For AI applications on smartphones, I focused on photo albums and personalization. In the photo album aspect, I designed a feature that uses a tagging system to create albums and memory collections. For personalization, I explored using AI image algorithms to generate smooth dynamic wallpapers. During the prototyping process, I became more proficient in using React, which allowed me to achieve more refined animation effects.",
                        }),
                      ],
                    }),
                    WBP1YB7T1: f(m, {
                      children: [
                        e("ol", {
                          start: "3",
                          children: e("li", {
                            "data-preset-tag": "h3",
                            children: e("h3", { children: "AI \u5E94\u7528" }),
                          }),
                        }),
                        e("p", {
                          children:
                            "\u9488\u5BF9\u624B\u673A\u4E0A\u7684 AI \u5E94\u7528\uFF0C\u6211\u4E3B\u8981\u56F4\u7ED5\u76F8\u518C\u548C\u4E2A\u6027\u5316\u8FDB\u884C\u63A2\u7D22\u3002\u5728\u76F8\u518C\u65B9\u9762\uFF0C\u6211\u8BBE\u8BA1\u4E86\u4E00\u5957\u5229\u7528\u56FE\u7247\u6807\u7B7E\u7CFB\u7EDF\u521B\u5EFA\u56FE\u96C6\u548C\u56DE\u5FC6\u76F8\u518C\u7684\u529F\u80FD\u3002\u5728\u4E2A\u6027\u5316\u65B9\u9762\uFF0C\u6211\u5C1D\u8BD5\u57FA\u4E8E AI \u56FE\u50CF\u7B97\u6CD5\u751F\u6210\u6D41\u7545\u7684\u52A8\u6001\u58C1\u7EB8\u3002\u800C\u5728\u5236\u4F5C\u539F\u578B\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u5BF9 React \u7684\u4F7F\u7528\u8D8A\u6765\u8D8A\u719F\u7EC3\uFF0C\u8FD9\u4E5F\u8BA9\u6211\u5B9E\u73B0\u4E86\u66F4\u52A0\u7EC6\u817B\u7684\u52A8\u753B\u6548\u679C\u3002",
                        }),
                      ],
                    }),
                    width: "100%",
                  }),
                }),
              }),
              f(t.div, {
                className: "framer-1rfi0d2",
                layoutDependency: c,
                layoutId: "BikV0U28Q",
                children: [
                  e(v, {
                    width: g?.width || "100vw",
                    ...Fe(
                      {
                        FBKY_wpNr: {
                          width: `calc(${g?.width || "100vw"} * 0.9)`,
                        },
                      },
                      d,
                      x,
                    ),
                    children: e(t.div, {
                      className: "framer-1v2mnmk-container",
                      layoutDependency: c,
                      layoutId: "n3WhVfr1C-container",
                      children: e(he, {
                        height: "100%",
                        id: "n3WhVfr1C",
                        layoutId: "n3WhVfr1C",
                        style: { width: "100%" },
                        VIf0LAdUy: f(m, {
                          children: [
                            e("ol", {
                              start: "4",
                              children: e("li", {
                                "data-preset-tag": "h3",
                                children: e("h3", { children: "Others" }),
                              }),
                            }),
                            e("p", {
                              children:
                                "In the early stages of joining OPPO, I participated in the interaction research of some IOT products. I set up a lab simulating a living environment, connecting household devices (lights, fans, air conditioners, etc.) and designing unique control panels for them. Additionally, I explored the use of large-screen devices with engineers, such as using a bicycle to control a racing game on the TV and using gestures to control TV elements.",
                            }),
                          ],
                        }),
                        WBP1YB7T1: f(m, {
                          children: [
                            e("ol", {
                              start: "4",
                              children: e("li", {
                                "data-preset-tag": "h3",
                                children: e("h3", {
                                  children: e("strong", {
                                    children: "\u5176\u4ED6",
                                  }),
                                }),
                              }),
                            }),
                            e("p", {
                              children:
                                "\u5728\u6211\u52A0\u5165 OPPO \u7684\u521D\u671F\uFF0C\u6211\u53C2\u4E0E\u4E86\u4E00\u4E9B IOT \u4EA7\u54C1\u4EA4\u4E92\u7684\u7814\u7A76\u3002\u6211\u642D\u5EFA\u4E86\u6A21\u62DF\u751F\u6D3B\u73AF\u5883\u7684\u5B9E\u9A8C\u5BA4\uFF0C\u8FDE\u63A5\u5BB6\u5EAD\u8BBE\u5907\uFF08\u706F\u5149\u3001\u98CE\u6247\u3001\u7A7A\u8C03\u7B49\uFF09\u5E76\u4E3A\u5B83\u4EEC\u8BBE\u8BA1\u72EC\u7279\u7684\u63A7\u5236\u9762\u677F\u3002\u6B64\u5916\uFF0C\u6211\u4E0E\u5DE5\u7A0B\u5E08\u4E00\u540C\u63A2\u7D22\u4E86\u5927\u5C4F\u5E55\u8BBE\u5907\u7684\u73A9\u6CD5\uFF0C\u4F8B\u5982\u5229\u7528\u811A\u8E0F\u8F66\u6765\u63A7\u5236\u7535\u89C6\u4E0A\u7684\u8D5B\u8F66\u6E38\u620F\uFF0C\u4F7F\u7528\u624B\u52BF\u63A7\u5236\u7535\u89C6\u4E0A\u7684\u5143\u7D20\u7B49\u3002",
                            }),
                          ],
                        }),
                        width: "100%",
                      }),
                    }),
                  }),
                  e(qe, {
                    background: {
                      alt: "Laboratories that simulate living environments.",
                      fit: "fill",
                      intrinsicHeight: 450.5,
                      intrinsicWidth: 600,
                      pixelHeight: 901,
                      pixelWidth: 1200,
                      sizes: g?.width || "100vw",
                      src: "https://framerusercontent.com/images/JG4grkj6OQhJ7T11OEnWQ0ChQk.png?scale-down-to=1024",
                      srcSet:
                        "https://framerusercontent.com/images/JG4grkj6OQhJ7T11OEnWQ0ChQk.png?scale-down-to=512 512w,https://framerusercontent.com/images/JG4grkj6OQhJ7T11OEnWQ0ChQk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/JG4grkj6OQhJ7T11OEnWQ0ChQk.png 1200w",
                    },
                    className: "framer-1jkrkw8",
                    "data-framer-name": "imported",
                    layoutDependency: c,
                    layoutId: "KOra10ZEu",
                    style: {
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                    },
                  }),
                  e(qe, {
                    background: {
                      alt: "Control the racing game on the tablet on a sport bike.",
                      fit: "fill",
                      intrinsicHeight: 448,
                      intrinsicWidth: 600,
                      pixelHeight: 896,
                      pixelWidth: 1200,
                      sizes: g?.width || "100vw",
                      src: "https://framerusercontent.com/images/tHi49QkLeLrzMpIikXBuo1SN91E.png?scale-down-to=1024",
                      srcSet:
                        "https://framerusercontent.com/images/tHi49QkLeLrzMpIikXBuo1SN91E.png?scale-down-to=512 512w,https://framerusercontent.com/images/tHi49QkLeLrzMpIikXBuo1SN91E.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/tHi49QkLeLrzMpIikXBuo1SN91E.png 1200w",
                    },
                    className: "framer-1i0a2hs",
                    "data-framer-name": "imported",
                    layoutDependency: c,
                    layoutId: "Z7bKDwuwB",
                    style: {
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                    },
                  }),
                ],
              }),
              e(v, {
                width: g?.width || "100vw",
                ...Fe(
                  {
                    FBKY_wpNr: { width: `calc(${g?.width || "100vw"} * 0.9)` },
                  },
                  d,
                  x,
                ),
                children: e(t.div, {
                  className: "framer-1b2bmb0-container",
                  layoutDependency: c,
                  layoutId: "sB2BiscsT-container",
                  children: e(he, {
                    height: "100%",
                    id: "sB2BiscsT",
                    layoutId: "sB2BiscsT",
                    style: { width: "100%" },
                    VIf0LAdUy: f(m, {
                      children: [
                        e("p", {
                          children:
                            "During the mid-phase of my time at OPPO, I briefly participated in the design of some mobile products. Among them, the rollable screen phone was my favorite. This new form of phone screen was exciting, and I created a desktop software prototype to convey the impressive effect of the expanding screen.",
                        }),
                        e("p", {
                          children:
                            "Finally, in the final stage before leaving OPPO, I participated in the design work of Matter IOT devices, designing the processes for adding, managing, and controlling devices in ColorOS.",
                        }),
                        e("p", {
                          children:
                            "My experience at OPPO was complex and enriching, leading to many changes in my design philosophy. I became more focused on the interaction process and user response, rather than just the UI presentation; emphasizing the relationship between physics and dynamic graphics rather than preset mathematical curves. Long-term collaboration with engineers also gave me a deeper understanding of technical capabilities.",
                        }),
                        e("p", {
                          children: e("br", { className: "trailing-break" }),
                        }),
                        e("p", {
                          children:
                            "I am grateful to my colleagues for their tolerance, freedom, and support.",
                        }),
                      ],
                    }),
                    WBP1YB7T1: f(m, {
                      children: [
                        e("p", {
                          children:
                            "\u5728 OPPO \u7684\u4E2D\u671F\u9636\u6BB5\uFF0C\u6211\u77ED\u6682\u53C2\u4E0E\u4E86\u4E00\u4E9B\u624B\u673A\u4EA7\u54C1\u7684\u8BBE\u8BA1\u5DE5\u4F5C\u3002\u5176\u4E2D\u6700\u8BA9\u6211\u559C\u7231\u7684\u662F\u5377\u8F74\u5C4F\u624B\u673A\uFF0C\u8FD9\u79CD\u65B0\u5F62\u6001\u7684\u624B\u673A\u5C4F\u5E55\u4EE4\u4EBA\u6FC0\u52A8\u3002\u6211\u66FE\u5236\u4F5C\u4E86\u4E00\u4E2A\u684C\u9762\u8F6F\u4EF6\u539F\u578B\uFF0C\u4EE5\u4F20\u8FBE\u5C4F\u5E55\u53D8\u5927\u6240\u5E26\u6765\u7684\u9707\u64BC\u6548\u679C\u3002 ",
                        }),
                        e("p", {
                          children:
                            "\u6700\u540E\uFF0C\u5728\u5373\u5C06\u79BB\u5F00 OPPO \u7684\u9636\u6BB5\uFF0C\u6211\u53C2\u4E0E\u4E86 Matter IOT \u8BBE\u5907\u7684\u8BBE\u8BA1\u5DE5\u4F5C\uFF0C\u4E3A ColorOS \u8BBE\u8BA1\u4E86\u8BBE\u5907\u6DFB\u52A0\u3001\u7BA1\u7406\u548C\u63A7\u5236\u7684\u6D41\u7A0B\u3002 \u5728 OPPO \u7684\u7ECF\u5386\u662F\u590D\u6742\u4E14\u5145\u5B9E\u7684\uFF0C\u6211\u7684\u8BBE\u8BA1\u7406\u5FF5\u4E5F\u53D1\u751F\u4E86\u8BB8\u591A\u53D8\u5316\u3002\u6211\u66F4\u52A0\u6CE8\u91CD\u4EA4\u4E92\u8FC7\u7A0B\u4E0E\u7528\u6237\u53CD\u5E94\uFF0C\u800C\u4E0D\u662F\u4E00\u5473\u8FFD\u6C42 UI \u7684\u5448\u73B0\uFF1B\u6CE8\u91CD\u7269\u7406\u5B66\u4E0E\u52A8\u6001\u56FE\u5F62\u4E4B\u95F4\u7684\u5173\u8054\u800C\u975E\u9884\u8BBE\u7684\u6570\u5B66\u66F2\u7EBF\u3002\u957F\u671F\u4E0E\u5DE5\u7A0B\u5E08\u7684\u534F\u4F5C\uFF0C\u4E5F\u8BA9\u6211\u5BF9\u6280\u672F\u80FD\u529B\u6709\u4E86\u66F4\u6DF1\u5165\u7684\u7406\u89E3\u3002 ",
                        }),
                        e("p", {
                          children:
                            "\u611F\u8C22\u6211\u7684\u540C\u4E8B\u4EEC\u7ED9\u4E88\u7684\u5305\u5BB9\u3001\u81EA\u7531\u4E0E\u652F\u6301\u3002",
                        }),
                      ],
                    }),
                    width: "100%",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  fl = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-lDNKK.framer-1kcpqvq, .framer-lDNKK .framer-1kcpqvq { display: block; }",
    ".framer-lDNKK.framer-c6vjxr { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 780px; }",
    ".framer-lDNKK .framer-d4grbi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-lDNKK .framer-1wsa4qb, .framer-lDNKK .framer-krvyfs, .framer-lDNKK .framer-ldf5xq { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-lDNKK .framer-1mv39mf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-lDNKK .framer-t5x8n1-container, .framer-lDNKK .framer-1aoky53-container, .framer-lDNKK .framer-v4a4fm-container, .framer-lDNKK .framer-1v2mnmk-container, .framer-lDNKK .framer-1b2bmb0-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-lDNKK .framer-1rfi0d2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-lDNKK .framer-1jkrkw8, .framer-lDNKK .framer-1i0a2hs { aspect-ratio: 1.3448275862068966 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 580px); overflow: visible; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-lDNKK.framer-c6vjxr, .framer-lDNKK .framer-d4grbi, .framer-lDNKK .framer-1mv39mf, .framer-lDNKK .framer-1rfi0d2 { gap: 0px; } .framer-lDNKK.framer-c6vjxr > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-lDNKK.framer-c6vjxr > :first-child, .framer-lDNKK .framer-d4grbi > :first-child, .framer-lDNKK .framer-1mv39mf > :first-child, .framer-lDNKK .framer-1rfi0d2 > :first-child { margin-top: 0px; } .framer-lDNKK.framer-c6vjxr > :last-child, .framer-lDNKK .framer-d4grbi > :last-child, .framer-lDNKK .framer-1mv39mf > :last-child, .framer-lDNKK .framer-1rfi0d2 > :last-child { margin-bottom: 0px; } .framer-lDNKK .framer-d4grbi > *, .framer-lDNKK .framer-1mv39mf > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-lDNKK .framer-1rfi0d2 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }",
    ".framer-lDNKK.framer-v-gtjx3y.framer-c6vjxr { align-content: center; align-items: center; width: 390px; }",
    ".framer-lDNKK.framer-v-gtjx3y .framer-d4grbi, .framer-lDNKK.framer-v-gtjx3y .framer-t5x8n1-container, .framer-lDNKK.framer-v-gtjx3y .framer-1aoky53-container, .framer-lDNKK.framer-v-gtjx3y .framer-v4a4fm-container, .framer-lDNKK.framer-v-gtjx3y .framer-1v2mnmk-container, .framer-lDNKK.framer-v-gtjx3y .framer-1b2bmb0-container { width: 90%; }",
    ".framer-lDNKK.framer-v-gtjx3y .framer-1jkrkw8, .framer-lDNKK.framer-v-gtjx3y .framer-1i0a2hs { height: var(--framer-aspect-ratio-supported, 290px); }",
    ...ze,
    ...Ie,
  ],
  ir = H(sl, fl, "framer-lDNKK"),
  St = ir;
ir.displayName = "About/OPPO";
ir.defaultProps = { height: 4222, width: 780 };
Q(ir, {
  variant: {
    options: ["dN9OFE8w_", "FBKY_wpNr"],
    optionTitles: ["Default", "Phone"],
    title: "Variant",
    type: k.Enum,
  },
});
W(
  ir,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...J0,
    ...le(Me),
    ...le(je),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var ml = oe(w),
  dl = ie(w),
  cl = C(he),
  pl = ["RWp9Lk1yN", "gII0VuImt"],
  hl = "framer-06Zut",
  ul = { gII0VuImt: "framer-v-1y0refa", RWp9Lk1yN: "framer-v-hgyuwc" };
function To(a, ...r) {
  let i = {};
  return r?.forEach((o) => o && Object.assign(i, a[o])), i;
}
var gl = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  xl = ({ value: a, children: r }) => {
    let i = Z(R),
      o = a ?? i.transition,
      l = Y(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(R.Provider, { value: l, children: r });
  },
  yl = t(m),
  vl = { Default: "RWp9Lk1yN", Phone: "gII0VuImt" },
  wl = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = vl[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "RWp9Lk1yN",
    };
  },
  bl = (a, r) =>
    a.layoutDependency ? r.join("-") + a.layoutDependency : r.join("-"),
  kl = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = wl(a),
      {
        baseVariant: d,
        classNames: q,
        clearLoadingGesture: j,
        gestureHandlers: u,
        gestureVariant: x,
        isLoading: I,
        setGestureState: V,
        setVariant: n,
        variants: y,
      } = G({
        cycleOrder: pl,
        defaultVariant: "RWp9Lk1yN",
        variant: b,
        variantClassNames: ul,
      }),
      c = bl(a, y),
      M = F(null),
      $ = A(),
      K = [De, Re],
      g = me();
    return e(E, {
      id: p ?? $,
      children: e(yl, {
        animate: y,
        initial: !1,
        children: e(xl, {
          value: gl,
          children: f(t.div, {
            ..._,
            ...u,
            className: P(hl, ...K, "framer-hgyuwc", s, q),
            "data-framer-name": "Default",
            layoutDependency: c,
            layoutId: "RWp9Lk1yN",
            ref: r ?? M,
            style: { ...l },
            ...To({ gII0VuImt: { "data-framer-name": "Phone" } }, d, x),
            children: [
              f(t.div, {
                className: "framer-dm4r8y",
                "data-framer-name": "Title",
                layoutDependency: c,
                layoutId: "MkyLJiwJR",
                children: [
                  e(w, {
                    __fromCanvasComponent: !0,
                    children: e(m, {
                      children: e(t.h2, {
                        className: "framer-styles-preset-1jzss2t",
                        "data-styles-preset": "CHTVVTxbR",
                        children: "National Taiwan Normal University",
                      }),
                    }),
                    className: "framer-mvh0ru",
                    fonts: ["Inter"],
                    layoutDependency: c,
                    layoutId: "ibFqINjzt",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  f(t.div, {
                    className: "framer-t8pz91",
                    layoutDependency: c,
                    layoutId: "BJykUHcD1",
                    children: [
                      e(ml, {
                        __fromCanvasComponent: !0,
                        children: e(m, {
                          children: e(t.p, {
                            className: "framer-styles-preset-1nr6prh",
                            "data-styles-preset": "uRhxzqfGc",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)))",
                            },
                            children:
                              "Sociology exchange\uFF5C2018 - 2017 / Taipei\uFF5C2 min read",
                          }),
                        }),
                        className: "framer-j5qp6z",
                        fonts: ["Inter"],
                        layoutDependency: c,
                        layoutId: "tKLpRv_GZ",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      e(dl, {
                        __fromCanvasComponent: !0,
                        children: e(m, {
                          children: e(t.p, {
                            className: "framer-styles-preset-1nr6prh",
                            "data-styles-preset": "uRhxzqfGc",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)))",
                            },
                            children:
                              "\u793E\u4F1A\u5B66\u4EA4\u6362\u751F\uFF5C2018 - 2017 / \u53F0\u5317\uFF5C2 \u5206\u949F\u9605\u8BFB",
                          }),
                        }),
                        className: "framer-1b8drdf",
                        fonts: ["Inter"],
                        layoutDependency: c,
                        layoutId: "OIipzCT7X",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                ],
              }),
              e(v, {
                width: g?.width || "100vw",
                ...To(
                  {
                    gII0VuImt: { width: `calc(${g?.width || "100vw"} * 0.9)` },
                  },
                  d,
                  x,
                ),
                children: e(t.div, {
                  className: "framer-y6jqcl-container",
                  layoutDependency: c,
                  layoutId: "BeqMnp3X5-container",
                  children: e(he, {
                    height: "100%",
                    id: "BeqMnp3X5",
                    layoutId: "BeqMnp3X5",
                    style: { width: "100%" },
                    VIf0LAdUy: f(m, {
                      children: [
                        e("p", {
                          children:
                            "The experience at NTNU had a profound impact on me. When I first arrived in Taiwan, I deeply understood the concept of cultural shock described in sociology.",
                        }),
                        e("p", {
                          children:
                            "My studies at NTNU mainly focused on topics such as social enterprises, community building, psychology, and aging. I visited several local social enterprises and non-profit organizations in Taiwan, such as the \u201CChildren Are Us Foundation,\u201D which provides training and career development for people with disabilities, to understand how a social enterprise balances business and social welfare. I compared the developmental differences between Taiwan and mainland China by analyzing data from social enterprises in both regions. I explored local communities in Taipei, like \u201CGuzhuang Village\u201D to understand how they promote harmonious coexistence among children, young people, and the elderly. Through conversations with psychologists and patients, I learned about the basic processes and methodologies of psychological counseling\u2026\u2026",
                        }),
                        e("p", {
                          children:
                            "During this time, my self-learning ability peaked. I mastered the use of many design software tools, began programming with Coffee Script, and learned various design theories. I integrated some of my design skills into my coursework and achieved good results.",
                        }),
                        e("p", {
                          children:
                            "In mainland China, I was an average student, but in Taiwan, I received high praise from local teachers. This made me rethink educational issues and reflect on my past experiences and behaviors. I was very grateful for the teachers\u2019 evaluations and suggestions, as well as the warm hospitality of the Taiwanese people.",
                        }),
                        e("p", {
                          children: e("br", { className: "trailing-break" }),
                        }),
                        e("p", {
                          children:
                            "(This is an article updated with the progress of my memories.)",
                        }),
                      ],
                    }),
                    WBP1YB7T1: f(m, {
                      children: [
                        e("p", {
                          children:
                            "\u5728 NTNU \u7684\u7ECF\u5386\u5BF9\u6211\u6709\u7740\u6DF1\u8FDC\u7684\u5F71\u54CD\u3002\u521A\u843D\u5730\u53F0\u6E7E\u65F6\uFF0C\u6211\u5C31\u6DF1\u523B\u7406\u89E3\u5230\u4E86\u793E\u4F1A\u5B66\u4E2D\u5173\u4E8E\u6587\u5316\u9707\u64BC\u7684\u63CF\u8FF0\u3002",
                        }),
                        e("p", {
                          children:
                            " \u5728 NTNU \u7684\u5B66\u4E60\u4E3B\u8981\u56F4\u7ED5\u793E\u4F1A\u4F01\u4E1A\u3001\u793E\u533A\u5EFA\u8BBE\u3001\u5FC3\u7406\u5B66\u4E0E\u8001\u9F84\u5316\u7B49\u8BDD\u9898\u5C55\u5F00\u3002\u6211\u53C2\u89C2\u4E86\u4E00\u4E9B\u53F0\u6E7E\u672C\u5730\u7684\u793E\u4F1A\u4F01\u4E1A\u548C\u975E\u8425\u5229\u7EC4\u7EC7\uFF0C\u5982\u4E3A\u6B8B\u75BE\u4EBA\u58EB\u63D0\u4F9B\u57F9\u8BAD\u4E0E\u804C\u4E1A\u53D1\u5C55\u7684\u201C\u559C\u61A8\u513F\u57FA\u91D1\u4F1A\u201D\uFF0C\u4E86\u89E3\u4F5C\u4E3A\u4E00\u4E2A\u793E\u4F1A\u4F01\u4E1A\u5982\u4F55\u5E73\u8861\u5546\u4E1A\u4E0E\u793E\u4F1A\u798F\u7949\uFF1B\u901A\u8FC7\u5206\u6790\u53F0\u6E7E\u548C\u5927\u9646\u793E\u4F1A\u4F01\u4E1A\u7684\u6570\u636E\uFF0C\u5BF9\u6BD4\u4E24\u5730\u7684\u53D1\u5C55\u5DEE\u5F02\uFF1B\u63A2\u8BBF\u53F0\u5317\u672C\u5730\u5C45\u6C11\u793E\u533A\u201C\u53E4\u5E84\u91CC\u201D\uFF0C\u4E86\u89E3\u4ED6\u4EEC\u5982\u4F55\u4FC3\u8FDB\u793E\u533A\u513F\u7AE5\u3001\u5E74\u8F7B\u4EBA\u4E0E\u9AD8\u9F84\u8005\u7684\u548C\u8C10\u5171\u5904\uFF1B\u901A\u8FC7\u4E0E\u5FC3\u7406\u533B\u751F\u548C\u60A3\u8005\u7684\u5BF9\u8BDD\uFF0C\u4E86\u89E3\u5FC3\u7406\u54A8\u8BE2\u7684\u57FA\u672C\u6D41\u7A0B\u548C\u5B9E\u8DF5\u65B9\u6CD5\u2026\u2026 ",
                        }),
                        e("p", {
                          children:
                            "\u5728\u8FD9\u6BB5\u65F6\u95F4\uFF0C\u6211\u7684\u81EA\u5B66\u80FD\u529B\u8FBE\u5230\u4E86\u5DC5\u5CF0\uFF0C\u638C\u63E1\u4E86\u8BB8\u591A\u8BBE\u8BA1\u8F6F\u4EF6\u7684\u4F7F\u7528\uFF0C\u5F00\u59CB\u4F7F\u7528 Coffee Script \u7F16\u7A0B\uFF0C\u5E76\u4E86\u89E3\u4E86\u8BB8\u591A\u8BBE\u8BA1\u7406\u8BBA\u3002\u6211\u5C06\u4E00\u4E9B\u8BBE\u8BA1\u80FD\u529B\u878D\u5165\u5230\u8BFE\u4E1A\u4E2D\uFF0C\u5E76\u53D6\u5F97\u4E86\u4E0D\u9519\u7684\u6548\u679C\u3002 ",
                        }),
                        e("p", {
                          children:
                            "\u5728\u4E2D\u56FD\u5927\u9646\uFF0C\u6211\u662F\u4E00\u4E2A\u6210\u7EE9\u5E73\u5EB8\u7684\u5B66\u751F\uFF0C\u4F46\u5728\u53F0\u6E7E\u5374\u5F97\u5230\u4E86\u672C\u5730\u8001\u5E08\u7684\u9AD8\u5EA6\u8D5E\u8D4F\uFF0C\u8FD9\u4F7F\u6211\u91CD\u65B0\u601D\u8003\u6559\u80B2\u95EE\u9898\uFF0C\u53CD\u601D\u66FE\u7ECF\u7684\u7ECF\u5386\u4E0E\u884C\u4E3A\u3002\u6211\u975E\u5E38\u611F\u8C22\u8001\u5E08\u4EEC\u5BF9\u6211\u7684\u8BC4\u4EF7\u4E0E\u5EFA\u8BAE\uFF0C\u4EE5\u53CA\u53F0\u6E7E\u672C\u5730\u4EBA\u53CB\u597D\u7684\u62DB\u5F85\u3002 \uFF08\u8FD9\u5C06\u662F\u4E00\u7BC7\u968F\u7740\u56DE\u5FC6\u8FDB\u7A0B\u800C\u66F4\u65B0\u7684\u6587\u7AE0\uFF09",
                        }),
                      ],
                    }),
                    width: "100%",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Cl = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-06Zut.framer-1jukpvv, .framer-06Zut .framer-1jukpvv { display: block; }",
    ".framer-06Zut.framer-hgyuwc { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 780px; }",
    ".framer-06Zut .framer-dm4r8y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-06Zut .framer-mvh0ru, .framer-06Zut .framer-j5qp6z, .framer-06Zut .framer-1b8drdf { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-06Zut .framer-t8pz91 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-06Zut .framer-y6jqcl-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-06Zut.framer-hgyuwc, .framer-06Zut .framer-dm4r8y, .framer-06Zut .framer-t8pz91 { gap: 0px; } .framer-06Zut.framer-hgyuwc > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-06Zut.framer-hgyuwc > :first-child, .framer-06Zut .framer-dm4r8y > :first-child, .framer-06Zut .framer-t8pz91 > :first-child { margin-top: 0px; } .framer-06Zut.framer-hgyuwc > :last-child, .framer-06Zut .framer-dm4r8y > :last-child, .framer-06Zut .framer-t8pz91 > :last-child { margin-bottom: 0px; } .framer-06Zut .framer-dm4r8y > *, .framer-06Zut .framer-t8pz91 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    ".framer-06Zut.framer-v-1y0refa.framer-hgyuwc { align-content: center; align-items: center; width: 390px; }",
    ".framer-06Zut.framer-v-1y0refa .framer-dm4r8y, .framer-06Zut.framer-v-1y0refa .framer-y6jqcl-container { width: 90%; }",
    ...ze,
    ...Ie,
  ],
  nr = H(kl, Cl, "framer-06Zut"),
  Qt = nr;
nr.displayName = "About/NTNU";
nr.defaultProps = { height: 1299, width: 780 };
Q(nr, {
  variant: {
    options: ["RWp9Lk1yN", "gII0VuImt"],
    optionTitles: ["Default", "Phone"],
    title: "Variant",
    type: k.Enum,
  },
});
W(
  nr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...cl,
    ...le(Me),
    ...le(je),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var ql = C(qt),
  Vl = ya(t.div),
  Ll = C(et),
  _l = ko(t.div),
  Pt = eo(t.div),
  jl = C(ft),
  Il = ee(Ca(ft), Ba),
  Rl = xa(t.div),
  Fr = oe(t.div),
  Fo = ie(t.div),
  At = ro(t.div),
  Ml = C(mt),
  zl = C(tt),
  Dl = C(vt),
  Nl = C(dt),
  Tl = C(at),
  Fl = C(Ct),
  Bl = ee(Ga(Ct), Za),
  Sl = C(it),
  Ql = ee(Ka(it), za),
  lr = oe(w),
  sr = ie(w),
  Pl = C(lt),
  Al = ee(rt(lt), Ta),
  El = C(bt),
  Ul = ee(rt(bt), Xa),
  Hl = C(st),
  Wl = ee(ba(st), Fa),
  Xl = C(ut),
  Ol = ee(ka(ut), Ea),
  Zl = C(kt),
  Yl = ee(La(kt), Oa),
  Gl = C(gt),
  Kl = ee(qa(gt), Ua),
  Jl = C(ht),
  $l = ee(Va(ht), Aa),
  es = C(xt),
  rs = ee(_a(xt), Ha),
  ts = wa(w),
  as = Ya(t.div),
  os = C(yt),
  Bo = qo(t.div),
  is = Vo(t.div),
  ns = Co(t.div),
  ls = C(Ue),
  ss = nt(t.div),
  Br = gr(w),
  Sr = xr(w),
  fs = nt(qe),
  ms = C(Oe),
  Et = ee(lo(Oe), qr),
  Ut = vo(t.div),
  ds = C(St),
  Ht = wo(t.div),
  cs = C(ot),
  Wt = ee(bo(ot), Ma),
  ps = C(Bt),
  hs = C(Qt),
  us = ee(so(Oe), qr),
  gs = no(t.div),
  xs = io(t.div),
  ys = C(Tr),
  vs = ee(mo(Tr), Ft),
  ws = Ja(t.div),
  bs = C(We),
  ks = ao(t.div),
  Cs = to(t.div),
  qs = C(pt),
  Vs = $a(t.div),
  Ls = oo(t.div),
  _s = fo(t.div),
  js = C(wt),
  Is = ee(Na(wt), Wa),
  Rs = Da(t.div),
  Ms = C(be);
var zs = {
    BBRdIKwYS: "(min-width: 1600px)",
    pAXXkDDy0: "(max-width: 809px)",
    TOXdTkESZ: "(min-width: 810px) and (max-width: 1199px)",
    WqfZIyIlR: "(min-width: 1200px) and (max-width: 1599px)",
  },
  Xt = () => typeof document < "u",
  So = "framer-Qi0qV",
  Ds = {
    BBRdIKwYS: "framer-v-8ypfs1",
    pAXXkDDy0: "framer-v-165phi3",
    TOXdTkESZ: "framer-v-1ck2j05",
    WqfZIyIlR: "framer-v-c7lyoo",
  },
  Be = { damping: 12, delay: 0, mass: 0.1, stiffness: 400, type: "spring" },
  Ns = { damping: 30, delay: 0.3, mass: 1, stiffness: 200, type: "spring" },
  Qr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ns,
    x: 0,
    y: 0,
  },
  Pr = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: -46,
    y: 0,
  },
  Ts = { damping: 30, delay: 0.1, mass: 1, stiffness: 200, type: "spring" },
  Ar = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ts,
    x: 0,
    y: 0,
  },
  Ot = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: -46,
    y: 0,
  },
  Fs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: -28,
    y: 0,
  },
  Se = { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
  Bs = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Se,
    x: 0,
    y: 0,
  },
  Ss = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Se,
    x: 0,
    y: 0,
  },
  Qs = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Go = { damping: 14, delay: 0.12, mass: 1, stiffness: 140, type: "spring" },
  Er = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Go,
    x: 0,
    y: 100,
  },
  Ps = { damping: 14, delay: 0.3, mass: 1, stiffness: 140, type: "spring" },
  Ur = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ps,
    x: 0,
    y: 0,
  },
  ke = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 100,
  },
  Ko = { damping: 14, delay: 0.08, mass: 1, stiffness: 140, type: "spring" },
  Qo = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ko,
    x: 0,
    y: 100,
  },
  As = { damping: 14, delay: 0.34, mass: 1, stiffness: 140, type: "spring" },
  Zt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: As,
    x: 0,
    y: 0,
  },
  ia = { damping: 14, delay: 0.04, mass: 1, stiffness: 140, type: "spring" },
  Po = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ia,
    x: 0,
    y: 100,
  },
  Es = { damping: 14, delay: 0.38, mass: 1, stiffness: 140, type: "spring" },
  Yt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Es,
    x: 0,
    y: 0,
  },
  Us = { damping: 14, delay: 0.16, mass: 1, stiffness: 140, type: "spring" },
  Hs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Us,
    x: 0,
    y: 95,
  },
  Hr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 96,
  },
  Ws = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Go,
    x: 0,
    y: 96,
  },
  Xs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ko,
    x: 0,
    y: 96,
  },
  Os = { damping: 14, delay: 0.42, mass: 1, stiffness: 140, type: "spring" },
  Zs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Os,
    x: 0,
    y: 0,
  },
  Ys = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ia,
    x: 0,
    y: 96,
  },
  Gs = { damping: 14, delay: 0.46, mass: 1, stiffness: 140, type: "spring" },
  Ks = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Gs,
    x: 0,
    y: 0,
  },
  Js = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ia,
    x: 0,
    y: 86,
  },
  $s = { damping: 14, delay: 0.5, mass: 1, stiffness: 140, type: "spring" },
  ef = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: $s,
    x: 0,
    y: 0,
  },
  rf = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 86,
  },
  Wr = (a, r) => `translateX(-50%) ${r}`,
  tf = { damping: 28, delay: 0.06, mass: 1, stiffness: 178, type: "spring" },
  Ao = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transition: tf,
    x: 0,
    y: -40,
  },
  af = { damping: 28, delay: 0.34, mass: 1, stiffness: 178, type: "spring" },
  Eo = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: af,
    x: 0,
    y: 0,
  },
  fr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -70,
  },
  of = { damping: 28, delay: 0.09, mass: 1, stiffness: 178, type: "spring" },
  Uo = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transition: of,
    x: 0,
    y: -40,
  },
  nf = { damping: 28, delay: 0.31, mass: 1, stiffness: 178, type: "spring" },
  Ho = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: nf,
    x: 0,
    y: 0,
  },
  lf = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transition: Se,
    x: 0,
    y: -20,
  },
  Jo = { damping: 28, delay: 0.4, mass: 1, stiffness: 178, type: "spring" },
  sf = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Jo,
    x: 0,
    y: 0,
  },
  ff = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -20,
  },
  mf = { damping: 28, delay: 0, mass: 1, stiffness: 170, type: "spring" },
  df = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transition: mf,
    x: 0,
    y: 0,
  },
  cf = { damping: 28, delay: 0.4, mass: 1, stiffness: 170, type: "spring" },
  Wo = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: cf,
    x: 0,
    y: 0,
  },
  Xr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.8,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 0,
  },
  pf = { damping: 28, delay: 0.03, mass: 1, stiffness: 178, type: "spring" },
  hf = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transition: pf,
    x: 0,
    y: -40,
  },
  uf = { damping: 28, delay: 0.37, mass: 1, stiffness: 178, type: "spring" },
  gf = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: uf,
    x: 0,
    y: 0,
  },
  xf = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -40,
  },
  yf = { damping: 28, delay: 0.05, mass: 1, stiffness: 170, type: "spring" },
  vf = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transition: yf,
    x: 0,
    y: 0,
  },
  wf = { damping: 28, delay: 0.3, mass: 1, stiffness: 170, type: "spring" },
  bf = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: wf,
    x: 0,
    y: 0,
  },
  kf = { damping: 28, delay: 0.1, mass: 1, stiffness: 170, type: "spring" },
  Cf = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transition: kf,
    x: 0,
    y: 0,
  },
  qf = { damping: 28, delay: 0.35, mass: 1, stiffness: 170, type: "spring" },
  Vf = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: qf,
    x: 0,
    y: 0,
  },
  Lf = { damping: 28, delay: 0.15, mass: 1, stiffness: 170, type: "spring" },
  _f = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transition: Lf,
    x: 0,
    y: 0,
  },
  jf = { damping: 28, delay: 0.12, mass: 1, stiffness: 178, type: "spring" },
  If = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transition: jf,
    x: 0,
    y: -40,
  },
  Rf = { damping: 28, delay: 0.28, mass: 1, stiffness: 178, type: "spring" },
  Mf = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Rf,
    x: 0,
    y: 0,
  },
  $o = { damping: 30, delay: 0, mass: 1, stiffness: 300, type: "spring" },
  zf = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: $o,
    x: 0,
    y: 0,
  },
  Df = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: $o,
    x: 0,
    y: 0,
  },
  Nf = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 0,
  },
  Or = ({ children: a, blockDocumentScrolling: r, enabled: i = !0 }) => {
    let [o, l] = ga({ blockDocumentScrolling: r });
    return a({
      hide: () => l(!1),
      show: () => l(!0),
      toggle: () => l(!o),
      visible: i && o,
    });
  },
  Tf = { damping: 28, delay: 0.5, mass: 1, stiffness: 170, type: "spring" },
  Zr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Tf,
    x: 0,
    y: 0,
  },
  Yr = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 400,
    y: 0,
  },
  Gt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.2,
    skewX: 0,
    skewY: 0,
    transition: Se,
    x: 0,
    y: 1200,
  },
  Ff = { damping: 28, delay: 0.1, mass: 1, stiffness: 178, type: "spring" },
  Kt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ff,
    x: 0,
    y: 0,
  },
  Jt = {
    opacity: 1,
    rotate: 1,
    rotateX: 0,
    rotateY: 0,
    scale: 1.2,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 1200,
  },
  $t = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.2,
    skewX: 0,
    skewY: 0,
    transition: Se,
    x: 0,
    y: 1e3,
  },
  ea = {
    opacity: 1,
    rotate: 1,
    rotateX: 0,
    rotateY: 0,
    scale: 1.2,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 1e3,
  },
  ra = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0,
    skewX: 0,
    skewY: 0,
    transition: Se,
    x: 0,
    y: 0,
  },
  ta = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Jo,
    x: 0,
    y: 0,
  },
  aa = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Bf = { delay: 0, duration: 0, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Xo = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Bf,
    x: 0,
    y: 0,
  },
  Oo = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 0,
  },
  Sf = { delay: 0.1, duration: 0, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Zo = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Sf,
    x: 0,
    y: 0,
  },
  Yo = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 0,
  },
  Gr = br(),
  Qf = {
    Desktop: "WqfZIyIlR",
    Monitor: "BBRdIKwYS",
    Phone: "pAXXkDDy0",
    Tablet: "TOXdTkESZ",
  },
  Pf = ({ height: a, id: r, width: i, ...o }) => {
    var l, s;
    return {
      ...o,
      variant:
        (s = (l = Qf[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && s !== void 0
          ? s
          : "BBRdIKwYS",
    };
  },
  oa = {
    alignment: "start",
    component: be,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: Be,
    variant: "cc6TANFjz",
  },
  Af = {
    alignment: "start",
    component: be,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: Be,
    variant: "qrXesx9n1",
  },
  Ef = {
    alignment: "start",
    component: be,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: Be,
    variant: "lOKtvR8eI",
  },
  Uf = {
    alignment: "start",
    component: be,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: Be,
    variant: "zTFDDlNjh",
  },
  Hf = {
    alignment: "start",
    component: be,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: Be,
    variant: "TogF5EtvT",
  },
  Wf = {
    alignment: "start",
    component: be,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: Be,
    variant: "xhdLjs18_",
  },
  Xf = T(function (a, r) {
    let { activeLocale: i, setLocale: o } = U(),
      { style: l, className: s, layoutId: p, variant: b, ..._ } = Pf(a);
    Ve(() => {
      let L = br(void 0, i);
      if (L.robots) {
        let J = document.querySelector('meta[name="robots"]');
        J
          ? J.setAttribute("content", L.robots)
          : ((J = document.createElement("meta")),
            J.setAttribute("name", "robots"),
            J.setAttribute("content", L.robots),
            document.head.appendChild(J));
      }
    }, [void 0, i]),
      fa(() => {
        let L = br(void 0, i);
        if (((document.title = L.title || ""), L.viewport)) {
          var J;
          (J = document.querySelector('meta[name="viewport"]')) === null ||
            J === void 0 ||
            J.setAttribute("content", L.viewport);
        }
        let ae = L.bodyClassName;
        if (ae) {
          let xe = document.body;
          xe.classList.forEach(
            (Ce) => Ce.startsWith("framer-body-") && xe.classList.remove(Ce),
          ),
            xe.classList.add(`${L.bodyClassName}-framer-Qi0qV`);
        }
        return () => {
          ae &&
            document.body.classList.remove(`${L.bodyClassName}-framer-Qi0qV`);
        };
      }, [void 0, i]);
    let [d, q] = ua(b, zs, !1),
      j = void 0,
      { activeVariantCallback: u, delay: x } = ur(void 0),
      I = ({ overlay: L, paginationInfo: J }) =>
        u(async (...ae) => {
          L.toggle();
        }),
      V = ({ overlay: L, paginationInfo: J }) =>
        u(async (...ae) => {
          L.hide();
        }),
      n = ({ overlay: L, paginationInfo: J }) =>
        u(async (...ae) => {
          L.toggle();
        }),
      y = ({ overlay: L, paginationInfo: J }) =>
        u(async (...ae) => {
          L.hide();
        }),
      c = F(null),
      M = () => (Xt() ? d !== "pAXXkDDy0" : !0),
      $ = () => !Xt() || d === "pAXXkDDy0",
      K = () => (Xt() ? !["TOXdTkESZ", "pAXXkDDy0"].includes(d) : !0),
      g = A(),
      se = [Ra, wr];
    return (
      ca({
        "172rt5d": { ...oa, variant: "ckJ06GOtB" },
        "1eji443": { ...oa, variant: "KL7EsyPpV" },
        "1njbiag": oa,
        "1s5udjy": Ef,
        "1x0iujx": Wf,
        "1xujo3j": Hf,
        "9kzsde": Uf,
        emi50q: Af,
      }),
      e(pa.Provider, {
        value: { primaryVariantId: "BBRdIKwYS", variantClassNames: Ds },
        children: f(E, {
          id: p ?? g,
          children: [
            f(t.div, {
              ..._,
              className: P(So, ...se, "framer-8ypfs1", s),
              "data-framer-cursor": "1njbiag",
              ref: r ?? c,
              style: { ...l },
              children: [
                f(Pt, {
                  className: "framer-z8624m",
                  "data-framer-name": "Logo",
                  name: "Logo",
                  children: [
                    e(Vl, {
                      className: "framer-t7rr2a",
                      "data-framer-name": "Previous",
                      name: "Previous",
                      children: e(z, {
                        breakpoint: d,
                        overrides: { pAXXkDDy0: { width: "24px" } },
                        children: e(v, {
                          children: e(z, {
                            breakpoint: d,
                            overrides: {
                              pAXXkDDy0: {
                                "data-framer-appear-id": "krwifh",
                                animate: B("animate", "krwifh", Qr, "165phi3"),
                                initial: B("initial", "krwifh", Pr, "165phi3"),
                              },
                              TOXdTkESZ: {
                                "data-framer-appear-id": "17sk6",
                                animate: B("animate", "17sk6", Qr, "1ck2j05"),
                                initial: B("initial", "17sk6", Pr, "1ck2j05"),
                              },
                              WqfZIyIlR: {
                                "data-framer-appear-id": "1h0wfy8",
                                animate: B("animate", "1h0wfy8", Qr, "c7lyoo"),
                                initial: B("initial", "1h0wfy8", Pr, "c7lyoo"),
                              },
                            },
                            children: e(D, {
                              animate: B("animate", "hqvv9f", Qr, "8ypfs1"),
                              className: "framer-hqvv9f-container",
                              "data-framer-appear-id": "hqvv9f",
                              "data-framer-cursor": "172rt5d",
                              initial: B("initial", "hqvv9f", Pr, "8ypfs1"),
                              style: { transformPerspective: 1200 },
                              children: e(z, {
                                breakpoint: d,
                                overrides: {
                                  pAXXkDDy0: {
                                    style: { height: "100%", width: "100%" },
                                  },
                                },
                                children: e(qt, {
                                  height: "100%",
                                  id: "x_Qm26ql9",
                                  layoutId: "x_Qm26ql9",
                                  style: { height: "100%" },
                                  variant: "rni1LOOGa",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    e(_l, {
                      className: "framer-1r608sz",
                      "data-framer-name": "Logo",
                      name: "Logo",
                      children: e(v, {
                        children: e(z, {
                          breakpoint: d,
                          overrides: {
                            pAXXkDDy0: {
                              "data-framer-appear-id": "1l5xdpw",
                              animate: B("animate", "1l5xdpw", Ar, "165phi3"),
                              initial: B("initial", "1l5xdpw", Fs, "165phi3"),
                            },
                            TOXdTkESZ: {
                              "data-framer-appear-id": "qyetp4",
                              animate: B("animate", "qyetp4", Ar, "1ck2j05"),
                              initial: B("initial", "qyetp4", Ot, "1ck2j05"),
                            },
                            WqfZIyIlR: {
                              "data-framer-appear-id": "1sgsc9h",
                              animate: B("animate", "1sgsc9h", Ar, "c7lyoo"),
                              initial: B("initial", "1sgsc9h", Ot, "c7lyoo"),
                            },
                          },
                          children: e(D, {
                            animate: B("animate", "tgeyjp", Ar, "8ypfs1"),
                            className: "framer-tgeyjp-container",
                            "data-framer-appear-id": "tgeyjp",
                            initial: B("initial", "tgeyjp", Ot, "8ypfs1"),
                            style: { transformPerspective: 1200 },
                            children: e(z, {
                              breakpoint: d,
                              overrides: {
                                pAXXkDDy0: { variant: "Zi8PaJmMF" },
                              },
                              children: e(et, {
                                a3q1uTWiE: "Jay Ji",
                                height: "100%",
                                id: "aJNcia0aM",
                                layoutId: "aJNcia0aM",
                                variant: "NQzEd4b81",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                e(Pt, {
                  className: "framer-1lr8mqj",
                  "data-framer-name": "Control",
                  name: "Control",
                  children: e(Or, {
                    children: (L) =>
                      e(ve, {
                        children: e(v, {
                          children: f(D, {
                            className: "framer-1d0r8m2-container",
                            id: "1d0r8m2",
                            children: [
                              e(z, {
                                breakpoint: d,
                                overrides: {
                                  pAXXkDDy0: {
                                    IDjhS4IKl: !1,
                                    IgMJMP6ld: !1,
                                    Y6c4BQxZw: !1,
                                  },
                                  TOXdTkESZ: {
                                    IDjhS4IKl: !1,
                                    IgMJMP6ld: !1,
                                    Y6c4BQxZw: !1,
                                  },
                                },
                                children: e(Il, {
                                  bW5yPdm2I: I({ overlay: L }),
                                  bzjewZMVz: "1s5udjy",
                                  D_n_dMzCO: !1,
                                  height: "100%",
                                  id: "RRo5dFLss",
                                  IDjhS4IKl: !0,
                                  IgMJMP6ld: !0,
                                  layoutId: "RRo5dFLss",
                                  qRScD7sgw: "emi50q",
                                  style: { height: "100%" },
                                  uh2rKEoGW: "9kzsde",
                                  variant: "XwPo9qGC4",
                                  VscZCNiuc: "1xujo3j",
                                  width: "100%",
                                  Y6c4BQxZw: !0,
                                }),
                              }),
                              e(Qe, {
                                children:
                                  L.visible &&
                                  e(ve, {
                                    children: Ee(
                                      f(m, {
                                        children: [
                                          e(
                                            t.div,
                                            {
                                              animate: {
                                                opacity: 1,
                                                transition: {
                                                  delay: 0,
                                                  duration: 0,
                                                  ease: [0.5, 0, 0.88, 0.77],
                                                  type: "tween",
                                                },
                                              },
                                              className: "framer-1gx2q11",
                                              "data-framer-portal-id":
                                                "1d0r8m2",
                                              exit: {
                                                opacity: 0,
                                                transition: {
                                                  delay: 0,
                                                  duration: 0,
                                                  ease: [0.12, 0.23, 0.5, 1],
                                                  type: "tween",
                                                },
                                              },
                                              initial: { opacity: 0 },
                                              onTap: () => L.hide(),
                                            },
                                            "jvRB41F6h",
                                          ),
                                          e(Rl, {
                                            className: "framer-1qbq5su",
                                            "data-framer-name": "ClickLayer",
                                            "data-framer-portal-id": "1d0r8m2",
                                            name: "ClickLayer",
                                            onTap: V({ overlay: L }),
                                            children: e(t.div, {
                                              className: "framer-17x9kb7",
                                              "data-framer-name": "Transition",
                                              name: "Transition",
                                              children: e(t.div, {
                                                animate: Ss,
                                                className: "framer-1n4w6g2",
                                                "data-framer-name": "Backdrop",
                                                exit: Bs,
                                                initial: Qs,
                                                name: "Backdrop",
                                              }),
                                            }),
                                          }),
                                          M() &&
                                            f(At, {
                                              className:
                                                "framer-tt48z6 hidden-165phi3",
                                              "data-framer-name": "Hello",
                                              "data-framer-portal-id":
                                                "1d0r8m2",
                                              name: "Hello",
                                              children: [
                                                e(Fr, {
                                                  className: "framer-81bw63",
                                                  children: e(z, {
                                                    breakpoint: d,
                                                    overrides: {
                                                      TOXdTkESZ: {
                                                        children: e(m, {
                                                          children: e("h2", {
                                                            style: {
                                                              "--font-selector":
                                                                "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                                                              "--framer-font-family":
                                                                '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "55px",
                                                              "--framer-font-weight":
                                                                "700",
                                                              "--framer-line-height":
                                                                "1.1em",
                                                              "--framer-text-color":
                                                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                            },
                                                            children: "Let's",
                                                          }),
                                                        }),
                                                      },
                                                      WqfZIyIlR: {
                                                        children: e(m, {
                                                          children: e("h2", {
                                                            style: {
                                                              "--font-selector":
                                                                "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                                                              "--framer-font-family":
                                                                '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "69px",
                                                              "--framer-font-weight":
                                                                "700",
                                                              "--framer-line-height":
                                                                "1.1em",
                                                              "--framer-text-color":
                                                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                            },
                                                            children: "Let's",
                                                          }),
                                                        }),
                                                      },
                                                    },
                                                    children: e(w, {
                                                      __fromCanvasComponent: !0,
                                                      animate: Ur,
                                                      children: e(m, {
                                                        children: e("h2", {
                                                          style: {
                                                            "--font-selector":
                                                              "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                                                            "--framer-font-family":
                                                              '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                                            "--framer-font-size":
                                                              "86px",
                                                            "--framer-font-weight":
                                                              "700",
                                                            "--framer-line-height":
                                                              "1.1em",
                                                            "--framer-text-color":
                                                              "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                          },
                                                          children: "Let's",
                                                        }),
                                                      }),
                                                      className:
                                                        "framer-1oxpaxo",
                                                      exit: Er,
                                                      fonts: [
                                                        "FS;Cabinet Grotesk-bold",
                                                      ],
                                                      initial: ke,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      verticalAlignment: "top",
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                }),
                                                e(Fr, {
                                                  className: "framer-l6o5u1",
                                                  children: e(z, {
                                                    breakpoint: d,
                                                    overrides: {
                                                      TOXdTkESZ: {
                                                        children: e(m, {
                                                          children: e("h2", {
                                                            style: {
                                                              "--font-selector":
                                                                "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                                                              "--framer-font-family":
                                                                '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "55px",
                                                              "--framer-font-weight":
                                                                "700",
                                                              "--framer-line-height":
                                                                "1.1em",
                                                              "--framer-text-color":
                                                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                            },
                                                            children: "Talk!",
                                                          }),
                                                        }),
                                                      },
                                                      WqfZIyIlR: {
                                                        children: e(m, {
                                                          children: e("h2", {
                                                            style: {
                                                              "--font-selector":
                                                                "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                                                              "--framer-font-family":
                                                                '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "69px",
                                                              "--framer-font-weight":
                                                                "700",
                                                              "--framer-line-height":
                                                                "1.1em",
                                                              "--framer-text-color":
                                                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                            },
                                                            children: "Talk!",
                                                          }),
                                                        }),
                                                      },
                                                    },
                                                    children: e(w, {
                                                      __fromCanvasComponent: !0,
                                                      animate: Zt,
                                                      children: e(m, {
                                                        children: e("h2", {
                                                          style: {
                                                            "--font-selector":
                                                              "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                                                            "--framer-font-family":
                                                              '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                                            "--framer-font-size":
                                                              "86px",
                                                            "--framer-font-weight":
                                                              "700",
                                                            "--framer-line-height":
                                                              "1.1em",
                                                            "--framer-text-color":
                                                              "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                          },
                                                          children: "Talk!",
                                                        }),
                                                      }),
                                                      className:
                                                        "framer-rzpqry",
                                                      exit: Qo,
                                                      fonts: [
                                                        "FS;Cabinet Grotesk-bold",
                                                      ],
                                                      initial: ke,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      verticalAlignment: "top",
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                }),
                                                e(Fo, {
                                                  className: "framer-117j4w9",
                                                  "data-framer-name": "CN",
                                                  name: "CN",
                                                  children: e(z, {
                                                    breakpoint: d,
                                                    overrides: {
                                                      TOXdTkESZ: {
                                                        children: e(m, {
                                                          children: e("h2", {
                                                            style: {
                                                              "--font-selector":
                                                                "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                                                              "--framer-font-family":
                                                                '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "55px",
                                                              "--framer-font-weight":
                                                                "700",
                                                              "--framer-line-height":
                                                                "1.1em",
                                                              "--framer-text-color":
                                                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                            },
                                                            children:
                                                              "\u8C08\u7B11\u98CE\u751F!",
                                                          }),
                                                        }),
                                                      },
                                                      WqfZIyIlR: {
                                                        children: e(m, {
                                                          children: e("h2", {
                                                            style: {
                                                              "--font-selector":
                                                                "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                                                              "--framer-font-family":
                                                                '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "69px",
                                                              "--framer-font-weight":
                                                                "700",
                                                              "--framer-line-height":
                                                                "1.1em",
                                                              "--framer-text-color":
                                                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                            },
                                                            children:
                                                              "\u8C08\u7B11\u98CE\u751F!",
                                                          }),
                                                        }),
                                                      },
                                                    },
                                                    children: e(w, {
                                                      __fromCanvasComponent: !0,
                                                      animate: Ur,
                                                      children: e(m, {
                                                        children: e("h2", {
                                                          style: {
                                                            "--font-selector":
                                                              "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                                                            "--framer-font-family":
                                                              '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                                            "--framer-font-size":
                                                              "86px",
                                                            "--framer-font-weight":
                                                              "700",
                                                            "--framer-line-height":
                                                              "1.1em",
                                                            "--framer-text-color":
                                                              "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                          },
                                                          children:
                                                            "\u8C08\u7B11\u98CE\u751F!",
                                                        }),
                                                      }),
                                                      className:
                                                        "framer-1u9etr8",
                                                      exit: Er,
                                                      fonts: [
                                                        "FS;Cabinet Grotesk-bold",
                                                      ],
                                                      initial: ke,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      verticalAlignment: "top",
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                }),
                                                e(t.div, {
                                                  className: "framer-i6aon6",
                                                  children: e(qe, {
                                                    animate: Yt,
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 163.5,
                                                      intrinsicWidth: 165,
                                                      pixelHeight: 327,
                                                      pixelWidth: 330,
                                                      src: "https://framerusercontent.com/images/ejvAKzlSSMYF9H4yjp7fsPFKEM.png",
                                                    },
                                                    className: "framer-imc386",
                                                    "data-framer-name": "hand",
                                                    exit: Po,
                                                    initial: ke,
                                                    name: "hand",
                                                    style: {
                                                      transformPerspective: 1200,
                                                    },
                                                  }),
                                                }),
                                              ],
                                            }),
                                          f(At, {
                                            className: "framer-1tsai5",
                                            "data-framer-name": "Bottom",
                                            "data-framer-portal-id": "1d0r8m2",
                                            name: "Bottom",
                                            children: [
                                              f(t.div, {
                                                className: "framer-13y4hzr",
                                                children: [
                                                  e(v, {
                                                    width: "54px",
                                                    children: e(D, {
                                                      animate: Zt,
                                                      className:
                                                        "framer-hmkepd-container",
                                                      exit: Hs,
                                                      initial: Hr,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      children: e(z, {
                                                        breakpoint: d,
                                                        overrides: {
                                                          pAXXkDDy0: {
                                                            variant:
                                                              "hop0ZCAyo",
                                                          },
                                                        },
                                                        children: e(mt, {
                                                          height: "100%",
                                                          id: "H7ni5vBxR",
                                                          layoutId: "H7ni5vBxR",
                                                          style: {
                                                            height: "100%",
                                                            width: "100%",
                                                          },
                                                          variant: "llDAhtHF4",
                                                          width: "100%",
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  e(v, {
                                                    width: "54px",
                                                    children: e(D, {
                                                      animate: Yt,
                                                      className:
                                                        "framer-pes0q5-container",
                                                      exit: Ws,
                                                      initial: Hr,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      children: e(tt, {
                                                        height: "100%",
                                                        id: "EI0NvIRHP",
                                                        layoutId: "EI0NvIRHP",
                                                        style: {
                                                          height: "100%",
                                                          width: "100%",
                                                        },
                                                        variant: "YRapQNpGe",
                                                        width: "100%",
                                                      }),
                                                    }),
                                                  }),
                                                  e(v, {
                                                    width: "54px",
                                                    children: e(D, {
                                                      animate: Zs,
                                                      className:
                                                        "framer-1egyuu1-container",
                                                      exit: Xs,
                                                      initial: Hr,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      children: e(z, {
                                                        breakpoint: d,
                                                        overrides: {
                                                          pAXXkDDy0: {
                                                            variant:
                                                              "tLAPjJAhe",
                                                          },
                                                        },
                                                        children: e(vt, {
                                                          height: "100%",
                                                          id: "Mnysjjelp",
                                                          layoutId: "Mnysjjelp",
                                                          style: {
                                                            height: "100%",
                                                            width: "100%",
                                                          },
                                                          variant: "ecyK5mEKa",
                                                          width: "100%",
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  e(v, {
                                                    width: "54px",
                                                    children: e(D, {
                                                      animate: Ks,
                                                      className:
                                                        "framer-1ax5acu-container",
                                                      exit: Ys,
                                                      initial: Hr,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      children: e(z, {
                                                        breakpoint: d,
                                                        overrides: {
                                                          pAXXkDDy0: {
                                                            variant:
                                                              "mxi8gZhg7",
                                                          },
                                                        },
                                                        children: e(dt, {
                                                          height: "100%",
                                                          id: "i2und59Zj",
                                                          layoutId: "i2und59Zj",
                                                          style: {
                                                            height: "100%",
                                                            width: "100%",
                                                          },
                                                          variant: "QkHTEsfZ8",
                                                          width: "100%",
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              e(t.div, {
                                                className: "framer-1csr904",
                                                children: e(v, {
                                                  children: e(D, {
                                                    animate: ef,
                                                    className:
                                                      "framer-105vktp-container",
                                                    exit: Js,
                                                    initial: rf,
                                                    style: {
                                                      transformPerspective: 1200,
                                                    },
                                                    children: e(at, {
                                                      height: "100%",
                                                      id: "hvWCBNOy8",
                                                      layoutId: "hvWCBNOy8",
                                                      width: "100%",
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              $() &&
                                                f(t.div, {
                                                  className:
                                                    "framer-1frzh93 hidden-8ypfs1 hidden-c7lyoo hidden-1ck2j05",
                                                  "data-framer-name": "Title",
                                                  name: "Title",
                                                  children: [
                                                    e(Fr, {
                                                      className:
                                                        "framer-11uzj7c",
                                                      children: e(w, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        animate: Ur,
                                                        children: e(m, {
                                                          children: e("h2", {
                                                            style: {
                                                              "--font-selector":
                                                                "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                                                              "--framer-font-family":
                                                                '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "46px",
                                                              "--framer-font-weight":
                                                                "700",
                                                              "--framer-line-height":
                                                                "1.1em",
                                                              "--framer-text-color":
                                                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                            },
                                                            children: "Let's",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-1oxu2vn",
                                                        exit: Er,
                                                        fonts: [
                                                          "FS;Cabinet Grotesk-bold",
                                                        ],
                                                        initial: ke,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        verticalAlignment:
                                                          "top",
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    e(Fo, {
                                                      className:
                                                        "framer-n082ab",
                                                      children: e(w, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        animate: Ur,
                                                        children: e(m, {
                                                          children: e("h2", {
                                                            style: {
                                                              "--font-selector":
                                                                "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                                                              "--framer-font-family":
                                                                '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "46px",
                                                              "--framer-font-weight":
                                                                "700",
                                                              "--framer-line-height":
                                                                "1.1em",
                                                              "--framer-text-color":
                                                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                            },
                                                            children:
                                                              "\u8C08\u7B11\u98CE\u751F",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-arp3kt",
                                                        exit: Er,
                                                        fonts: [
                                                          "FS;Cabinet Grotesk-bold",
                                                        ],
                                                        initial: ke,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        verticalAlignment:
                                                          "top",
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    e(Fr, {
                                                      className:
                                                        "framer-1ek5obm",
                                                      children: e(w, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        animate: Zt,
                                                        children: e(m, {
                                                          children: e("h2", {
                                                            style: {
                                                              "--font-selector":
                                                                "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                                                              "--framer-font-family":
                                                                '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "46px",
                                                              "--framer-font-weight":
                                                                "700",
                                                              "--framer-line-height":
                                                                "1.1em",
                                                              "--framer-text-color":
                                                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                            },
                                                            children: "Talk!",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-1vcuz7v",
                                                        exit: Qo,
                                                        fonts: [
                                                          "FS;Cabinet Grotesk-bold",
                                                        ],
                                                        initial: ke,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        verticalAlignment:
                                                          "top",
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    e(t.div, {
                                                      className:
                                                        "framer-ywlg8s",
                                                      children: e(qe, {
                                                        animate: Yt,
                                                        background: {
                                                          alt: "",
                                                          fit: "fill",
                                                          intrinsicHeight: 163.5,
                                                          intrinsicWidth: 165,
                                                          pixelHeight: 327,
                                                          pixelWidth: 330,
                                                          src: "https://framerusercontent.com/images/ejvAKzlSSMYF9H4yjp7fsPFKEM.png",
                                                        },
                                                        className:
                                                          "framer-1v31d7k",
                                                        "data-framer-name":
                                                          "hand",
                                                        exit: Po,
                                                        initial: ke,
                                                        name: "hand",
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          e(z, {
                                            breakpoint: d,
                                            overrides: {
                                              pAXXkDDy0: {
                                                transformTemplate: Wr,
                                              },
                                            },
                                            children: f(At, {
                                              className: "framer-etfx77",
                                              "data-framer-name": "Options",
                                              "data-framer-portal-id":
                                                "1d0r8m2",
                                              name: "Options",
                                              children: [
                                                K() &&
                                                  e(v, {
                                                    children: e(D, {
                                                      animate: Eo,
                                                      className:
                                                        "framer-fbagex-container hidden-1ck2j05 hidden-165phi3",
                                                      exit: Ao,
                                                      initial: fr,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      children: e(Bl, {
                                                        height: "100%",
                                                        id: "OlT1nQ3ok",
                                                        layoutId: "OlT1nQ3ok",
                                                        variant: "qiYYLD700",
                                                        width: "100%",
                                                      }),
                                                    }),
                                                  }),
                                                K() &&
                                                  e(v, {
                                                    children: e(D, {
                                                      animate: Ho,
                                                      className:
                                                        "framer-1jx9nqw-container hidden-1ck2j05 hidden-165phi3",
                                                      exit: Uo,
                                                      initial: fr,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      children: e(Ql, {
                                                        height: "100%",
                                                        id: "p63Vf2L0B",
                                                        layoutId: "p63Vf2L0B",
                                                        variant: "RYwuKvV2u",
                                                        width: "100%",
                                                      }),
                                                    }),
                                                  }),
                                                f(as, {
                                                  className: "framer-1nhx9kz",
                                                  "data-framer-name": "Options",
                                                  name: "Options",
                                                  children: [
                                                    f(t.div, {
                                                      animate: sf,
                                                      className:
                                                        "framer-m9i1kp",
                                                      exit: lf,
                                                      initial: ff,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      children: [
                                                        f(t.div, {
                                                          className:
                                                            "framer-14s6xpw",
                                                          children: [
                                                            e(lr, {
                                                              __fromCanvasComponent:
                                                                !0,
                                                              children: e(m, {
                                                                children: e(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "framer-styles-preset-9jlebu",
                                                                    "data-styles-preset":
                                                                      "sSyE5_N0_",
                                                                    style: {
                                                                      "--framer-text-color":
                                                                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                                    },
                                                                    children:
                                                                      "Display",
                                                                  },
                                                                ),
                                                              }),
                                                              className:
                                                                "framer-1n8t5n1",
                                                              fonts: ["Inter"],
                                                              verticalAlignment:
                                                                "top",
                                                              withExternalLayout:
                                                                !0,
                                                            }),
                                                            e(z, {
                                                              breakpoint: d,
                                                              overrides: {
                                                                pAXXkDDy0: {
                                                                  children: e(
                                                                    m,
                                                                    {
                                                                      children:
                                                                        e("p", {
                                                                          className:
                                                                            "framer-styles-preset-9jlebu",
                                                                          "data-styles-preset":
                                                                            "sSyE5_N0_",
                                                                          style:
                                                                            {
                                                                              "--framer-text-color":
                                                                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                                            },
                                                                          children:
                                                                            "\u663E\u793A\u5185\u5BB9",
                                                                        }),
                                                                    },
                                                                  ),
                                                                },
                                                              },
                                                              children: e(sr, {
                                                                __fromCanvasComponent:
                                                                  !0,
                                                                children: e(m, {
                                                                  children: e(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "framer-styles-preset-9jlebu",
                                                                      "data-styles-preset":
                                                                        "sSyE5_N0_",
                                                                      style: {
                                                                        "--framer-text-color":
                                                                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                                      },
                                                                      children:
                                                                        "\u663E\u793A\u5E03\u5C40",
                                                                    },
                                                                  ),
                                                                }),
                                                                className:
                                                                  "framer-i9imyj",
                                                                fonts: [
                                                                  "Inter",
                                                                ],
                                                                verticalAlignment:
                                                                  "top",
                                                                withExternalLayout:
                                                                  !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        $() &&
                                                          e(v, {
                                                            children: e(D, {
                                                              className:
                                                                "framer-w0hzx-container hidden-8ypfs1 hidden-c7lyoo hidden-1ck2j05",
                                                              children: e(Al, {
                                                                height: "100%",
                                                                id: "avFSd2o8_",
                                                                layoutId:
                                                                  "avFSd2o8_",
                                                                variant:
                                                                  "O4C8qA3Or",
                                                                width: "100%",
                                                              }),
                                                            }),
                                                          }),
                                                        M() &&
                                                          e(v, {
                                                            children: e(D, {
                                                              animate: Wo,
                                                              className:
                                                                "framer-10tirnd-container hidden-165phi3",
                                                              exit: df,
                                                              initial: Xr,
                                                              style: {
                                                                transformPerspective: 1200,
                                                              },
                                                              children: e(Ul, {
                                                                height: "100%",
                                                                id: "NMdILXzXO",
                                                                layoutId:
                                                                  "NMdILXzXO",
                                                                variant:
                                                                  "aieP0OjgV",
                                                                width: "100%",
                                                              }),
                                                            }),
                                                          }),
                                                      ],
                                                    }),
                                                    f(t.div, {
                                                      animate: gf,
                                                      className:
                                                        "framer-16xzdgi",
                                                      exit: hf,
                                                      initial: xf,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      children: [
                                                        e(v, {
                                                          width: "90px",
                                                          children: e(D, {
                                                            animate: bf,
                                                            className:
                                                              "framer-1f3rlf1-container",
                                                            exit: vf,
                                                            initial: Xr,
                                                            style: {
                                                              transformPerspective: 1200,
                                                            },
                                                            children: e(Wl, {
                                                              height: "100%",
                                                              id: "hG_j709bh",
                                                              layoutId:
                                                                "hG_j709bh",
                                                              style: {
                                                                width: "100%",
                                                              },
                                                              variant:
                                                                "Csiwc1EI2",
                                                              width: "100%",
                                                            }),
                                                          }),
                                                        }),
                                                        e(v, {
                                                          width: "90px",
                                                          children: e(D, {
                                                            animate: Vf,
                                                            className:
                                                              "framer-l7fulh-container",
                                                            exit: Cf,
                                                            initial: Xr,
                                                            style: {
                                                              transformPerspective: 1200,
                                                            },
                                                            children: e(Ol, {
                                                              height: "100%",
                                                              id: "VQX9t8hUo",
                                                              layoutId:
                                                                "VQX9t8hUo",
                                                              style: {
                                                                width: "100%",
                                                              },
                                                              variant:
                                                                "eZIUywzZC",
                                                              width: "100%",
                                                            }),
                                                          }),
                                                        }),
                                                        e(v, {
                                                          width: "90px",
                                                          children: e(D, {
                                                            animate: Wo,
                                                            className:
                                                              "framer-1uftehr-container",
                                                            exit: _f,
                                                            initial: Xr,
                                                            style: {
                                                              transformPerspective: 1200,
                                                            },
                                                            children: e(Yl, {
                                                              height: "100%",
                                                              id: "FjbrCtLXN",
                                                              layoutId:
                                                                "FjbrCtLXN",
                                                              style: {
                                                                width: "100%",
                                                              },
                                                              variant:
                                                                "B0ZNGWm_m",
                                                              width: "100%",
                                                            }),
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    K() &&
                                                      f(t.div, {
                                                        animate: Eo,
                                                        className:
                                                          "framer-1nn2ccz hidden-1ck2j05 hidden-165phi3",
                                                        exit: Ao,
                                                        initial: fr,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        children: [
                                                          f(t.div, {
                                                            className:
                                                              "framer-1seztzk",
                                                            children: [
                                                              e(lr, {
                                                                __fromCanvasComponent:
                                                                  !0,
                                                                children: e(m, {
                                                                  children: e(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "framer-styles-preset-9jlebu",
                                                                      "data-styles-preset":
                                                                        "sSyE5_N0_",
                                                                      style: {
                                                                        "--framer-text-color":
                                                                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                                      },
                                                                      children:
                                                                        "Control with wheel",
                                                                    },
                                                                  ),
                                                                }),
                                                                className:
                                                                  "framer-yw6zqy",
                                                                fonts: [
                                                                  "Inter",
                                                                ],
                                                                verticalAlignment:
                                                                  "top",
                                                                withExternalLayout:
                                                                  !0,
                                                              }),
                                                              e(sr, {
                                                                __fromCanvasComponent:
                                                                  !0,
                                                                children: e(m, {
                                                                  children: e(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "framer-styles-preset-9jlebu",
                                                                      "data-styles-preset":
                                                                        "sSyE5_N0_",
                                                                      style: {
                                                                        "--framer-text-color":
                                                                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                                      },
                                                                      children:
                                                                        "\u4F7F\u7528\u6EDA\u8F6E\u63A7\u5236\u89C6\u56FE",
                                                                    },
                                                                  ),
                                                                }),
                                                                className:
                                                                  "framer-1h8htsv",
                                                                fonts: [
                                                                  "Inter",
                                                                ],
                                                                verticalAlignment:
                                                                  "top",
                                                                withExternalLayout:
                                                                  !0,
                                                              }),
                                                            ],
                                                          }),
                                                          e(v, {
                                                            children: e(D, {
                                                              className:
                                                                "framer-dzpt0i-container",
                                                              children: e(Kl, {
                                                                height: "100%",
                                                                id: "SJUWinX_i",
                                                                layoutId:
                                                                  "SJUWinX_i",
                                                                variant:
                                                                  "pB6nkQDjg",
                                                                width: "100%",
                                                              }),
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    K() &&
                                                      f(t.div, {
                                                        animate: Ho,
                                                        className:
                                                          "framer-a69u3x hidden-1ck2j05 hidden-165phi3",
                                                        exit: Uo,
                                                        initial: fr,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        children: [
                                                          f(t.div, {
                                                            className:
                                                              "framer-d7hxmj",
                                                            children: [
                                                              e(lr, {
                                                                __fromCanvasComponent:
                                                                  !0,
                                                                children: e(m, {
                                                                  children: e(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "framer-styles-preset-9jlebu",
                                                                      "data-styles-preset":
                                                                        "sSyE5_N0_",
                                                                      style: {
                                                                        "--framer-text-color":
                                                                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                                      },
                                                                      children:
                                                                        "Navigation Arrows",
                                                                    },
                                                                  ),
                                                                }),
                                                                className:
                                                                  "framer-5taba0",
                                                                fonts: [
                                                                  "Inter",
                                                                ],
                                                                verticalAlignment:
                                                                  "top",
                                                                withExternalLayout:
                                                                  !0,
                                                              }),
                                                              e(sr, {
                                                                __fromCanvasComponent:
                                                                  !0,
                                                                children: e(m, {
                                                                  children: e(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "framer-styles-preset-9jlebu",
                                                                      "data-styles-preset":
                                                                        "sSyE5_N0_",
                                                                      style: {
                                                                        "--framer-text-color":
                                                                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                                      },
                                                                      children:
                                                                        "\u542F\u7528\u5C4F\u5E55\u5BFC\u822A\u7BAD\u5934",
                                                                    },
                                                                  ),
                                                                }),
                                                                className:
                                                                  "framer-6al4ad",
                                                                fonts: [
                                                                  "Inter",
                                                                ],
                                                                verticalAlignment:
                                                                  "top",
                                                                withExternalLayout:
                                                                  !0,
                                                              }),
                                                            ],
                                                          }),
                                                          e(v, {
                                                            children: e(D, {
                                                              className:
                                                                "framer-10ma0j8-container",
                                                              children: e($l, {
                                                                height: "100%",
                                                                id: "BzFrWBvYC",
                                                                layoutId:
                                                                  "BzFrWBvYC",
                                                                variant:
                                                                  "qak4Jrj8b",
                                                                width: "100%",
                                                              }),
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    f(t.div, {
                                                      animate: Mf,
                                                      className:
                                                        "framer-4i7j72",
                                                      exit: If,
                                                      initial: fr,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      children: [
                                                        f(t.div, {
                                                          className:
                                                            "framer-6hsf0t",
                                                          children: [
                                                            e(lr, {
                                                              __fromCanvasComponent:
                                                                !0,
                                                              children: e(m, {
                                                                children: e(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "framer-styles-preset-9jlebu",
                                                                    "data-styles-preset":
                                                                      "sSyE5_N0_",
                                                                    style: {
                                                                      "--framer-text-color":
                                                                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                                    },
                                                                    children:
                                                                      "Article Language",
                                                                  },
                                                                ),
                                                              }),
                                                              className:
                                                                "framer-18au4fh",
                                                              fonts: ["Inter"],
                                                              verticalAlignment:
                                                                "top",
                                                              withExternalLayout:
                                                                !0,
                                                            }),
                                                            e(sr, {
                                                              __fromCanvasComponent:
                                                                !0,
                                                              children: e(m, {
                                                                children: e(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "framer-styles-preset-9jlebu",
                                                                    "data-styles-preset":
                                                                      "sSyE5_N0_",
                                                                    style: {
                                                                      "--framer-text-color":
                                                                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                                    },
                                                                    children:
                                                                      "\u6587\u7AE0\u663E\u793A\u8BED\u8A00",
                                                                  },
                                                                ),
                                                              }),
                                                              className:
                                                                "framer-10bvqap",
                                                              fonts: ["Inter"],
                                                              verticalAlignment:
                                                                "top",
                                                              withExternalLayout:
                                                                !0,
                                                            }),
                                                          ],
                                                        }),
                                                        e(v, {
                                                          children: e(D, {
                                                            className:
                                                              "framer-10757po-container",
                                                            children: e(rs, {
                                                              height: "100%",
                                                              id: "x40ApKL5U",
                                                              layoutId:
                                                                "x40ApKL5U",
                                                              variant:
                                                                "TqwEABpNd",
                                                              width: "100%",
                                                            }),
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    e(t.div, {
                                                      animate: Df,
                                                      className:
                                                        "framer-xs1gtm",
                                                      exit: zf,
                                                      initial: Nf,
                                                      style: {
                                                        transformPerspective: 1200,
                                                      },
                                                      children: e(ts, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(m, {
                                                          children: e("p", {
                                                            className:
                                                              "framer-styles-preset-9jlebu",
                                                            "data-styles-preset":
                                                              "sSyE5_N0_",
                                                            style: {
                                                              "--framer-text-alignment":
                                                                "center",
                                                            },
                                                            children:
                                                              "Text Content",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-1lbf3c0",
                                                        fonts: ["Inter"],
                                                        verticalAlignment:
                                                          "top",
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                      document.querySelector("#overlay"),
                                    ),
                                  }),
                              }),
                            ],
                          }),
                        }),
                      }),
                  }),
                }),
                e(Pt, {
                  className: "framer-913wxl",
                  "data-framer-name": "About",
                  name: "About",
                  children: e(v, {
                    children: e(D, {
                      className: "framer-1qh1shh-container",
                      "data-framer-cursor": "1eji443",
                      children: e(z, {
                        breakpoint: d,
                        overrides: {
                          pAXXkDDy0: { Pm_hOrOqh: !0 },
                          TOXdTkESZ: { Pm_hOrOqh: !0 },
                        },
                        children: e(yt, {
                          height: "100%",
                          id: "DPhlconm3",
                          jhbC2DOAv: "GeY2IKYyS",
                          layoutId: "DPhlconm3",
                          Pm_hOrOqh: !1,
                          variant: "V8QTxROtH",
                          width: "100%",
                          ZaTyyUpS5: "wdICwFIgU",
                        }),
                      }),
                    }),
                  }),
                }),
                M() &&
                  e(Bo, {
                    className: "framer-b4gvz1 hidden-165phi3",
                    "data-framer-name": "CoverL",
                    name: "CoverL",
                    children: e(t.div, {
                      className: "framer-mzckfq",
                      "data-framer-name": "Gap",
                      name: "Gap",
                    }),
                  }),
                M() &&
                  e(is, {
                    className: "framer-1o9arzo hidden-165phi3",
                    "data-framer-name": "CoverR",
                    name: "CoverR",
                    children: e(t.div, {
                      className: "framer-1wjzuuw",
                      "data-framer-name": "Gap",
                      name: "Gap",
                    }),
                  }),
                f(_s, {
                  className: "framer-ghs43q",
                  "data-framer-name": "Wheel",
                  "data-hide-scrollbars": !0,
                  name: "Wheel",
                  children: [
                    f(Cs, {
                      className: "framer-4itezu",
                      "data-framer-name": "Content",
                      "data-hide-scrollbars": !0,
                      name: "Content",
                      children: [
                        e(ns, { className: "framer-e75uzy" }),
                        f(ss, {
                          className: "framer-16kajam",
                          children: [
                            e(v, {
                              children: e(D, {
                                className: "framer-a4sbri-container",
                                children: e(z, {
                                  breakpoint: d,
                                  overrides: {
                                    pAXXkDDy0: { size: 24 },
                                    TOXdTkESZ: { size: 36 },
                                  },
                                  children: e(Ue, {
                                    align: "flex-start",
                                    bold: !1,
                                    color:
                                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                    delay: 0,
                                    family: "'Cabinet Grotesk', sans-serif",
                                    gap: 0.03,
                                    height: "100%",
                                    id: "j6CmCgW6t",
                                    layoutId: "j6CmCgW6t",
                                    lineheight: 1.2,
                                    size: 48,
                                    status: !0,
                                    text_chn: "I' m",
                                    text: "I' m",
                                    type: "String",
                                    visible: "manual",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                            e(v, {
                              children: e(D, {
                                className: "framer-ciuu6n-container",
                                children: e(z, {
                                  breakpoint: d,
                                  overrides: { pAXXkDDy0: { size: 96 } },
                                  children: e(Ue, {
                                    align: "flex-start",
                                    bold: !0,
                                    color:
                                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                    delay: 0.2,
                                    family: "'Cabinet Grotesk', sans-serif",
                                    gap: 0.03,
                                    height: "100%",
                                    id: "kKbGf8xdh",
                                    layoutId: "kKbGf8xdh",
                                    lineheight: 1.2,
                                    size: 192,
                                    status: !0,
                                    text_chn: "Jay Ji",
                                    text: "Jay Ji",
                                    type: "String",
                                    visible: "manual",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        e(z, {
                          breakpoint: d,
                          overrides: {
                            pAXXkDDy0: {
                              "data-framer-appear-id": "14yafcj",
                              animate: B("animate", "14yafcj", Zr, "165phi3"),
                              initial: B("initial", "14yafcj", Yr, "165phi3"),
                            },
                            TOXdTkESZ: {
                              "data-framer-appear-id": "srso0v",
                              animate: B("animate", "srso0v", Zr, "1ck2j05"),
                              initial: B("initial", "srso0v", Yr, "1ck2j05"),
                            },
                            WqfZIyIlR: {
                              "data-framer-appear-id": "cu3jfm",
                              animate: B("animate", "cu3jfm", Zr, "c7lyoo"),
                              initial: B("initial", "cu3jfm", Yr, "c7lyoo"),
                            },
                          },
                          children: f(ks, {
                            animate: B("animate", "1w1er0q", Zr, "8ypfs1"),
                            className: "framer-1w1er0q",
                            "data-framer-appear-id": "1w1er0q",
                            initial: B("initial", "1w1er0q", Yr, "8ypfs1"),
                            style: { transformPerspective: 1200 },
                            children: [
                              e(Br, {
                                __fromCanvasComponent: !0,
                                children: e(m, {
                                  children: e("p", {
                                    className: "framer-styles-preset-1wxnimg",
                                    "data-styles-preset": "tvtD0bAK1",
                                    children:
                                      "As an inter-disciplinary designer, I have worked on augmented reality products, designing software and interfaces using intuitive interaction. I am currently working as an interaction designer at OPPO, based in Shanghai.",
                                  }),
                                }),
                                className: "framer-fkc3j6",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(Sr, {
                                __fromCanvasComponent: !0,
                                children: e(m, {
                                  children: e("p", {
                                    className: "framer-styles-preset-1wxnimg",
                                    "data-styles-preset": "tvtD0bAK1",
                                    children:
                                      "\u4F5C\u4E3A\u4E00\u540D\u8DE8\u5B66\u79D1\u8BBE\u8BA1\u5E08\uFF0C\u6211\u53C2\u4E0E\u8FC7\u589E\u5F3A\u73B0\u5B9E\u7C7B\u4EA7\u54C1\u7684\u8BBE\u8BA1\uFF0C\u5229\u7528\u76F4\u89C9\u7684\u4E92\u52A8\u65B9\u5F0F\u8BBE\u8BA1\u8F6F\u4EF6\u4E0E\u754C\u9762\u3002\u6211\u76EE\u524D\u5728OPPO\u62C5\u4EFB\u4EA4\u4E92\u8BBE\u8BA1\u5E08\uFF0C\u5E38\u9A7B\u4E8E\u4E0A\u6D77\u3002",
                                  }),
                                }),
                                className: "framer-1e2m4pg",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(z, {
                                breakpoint: d,
                                overrides: {
                                  pAXXkDDy0: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 2240,
                                      intrinsicWidth: 3360,
                                      pixelHeight: 2240,
                                      pixelWidth: 3360,
                                      sizes: "min(100vw - 20px, 580px)",
                                      src: "https://framerusercontent.com/images/sFRP83Tyk3nTPSDiyS5az9PyA.jpg",
                                      srcSet:
                                        "https://framerusercontent.com/images/sFRP83Tyk3nTPSDiyS5az9PyA.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/sFRP83Tyk3nTPSDiyS5az9PyA.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/sFRP83Tyk3nTPSDiyS5az9PyA.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/sFRP83Tyk3nTPSDiyS5az9PyA.jpg 3360w",
                                    },
                                  },
                                },
                                children: e(fs, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 2240,
                                    intrinsicWidth: 3360,
                                    pixelHeight: 2240,
                                    pixelWidth: 3360,
                                    sizes: "800px",
                                    src: "https://framerusercontent.com/images/sFRP83Tyk3nTPSDiyS5az9PyA.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/sFRP83Tyk3nTPSDiyS5az9PyA.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/sFRP83Tyk3nTPSDiyS5az9PyA.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/sFRP83Tyk3nTPSDiyS5az9PyA.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/sFRP83Tyk3nTPSDiyS5az9PyA.jpg 3360w",
                                  },
                                  className: "framer-1qjphke",
                                }),
                              }),
                              e(t.div, {
                                className: "framer-13kpyu9",
                                "data-framer-name": "Spacer",
                                name: "Spacer",
                              }),
                              f(gs, {
                                className: "framer-1fijoiz",
                                "data-framer-name": "Timeline",
                                name: "Timeline",
                                children: [
                                  e(Or, {
                                    blockDocumentScrolling: !0,
                                    children: (L) =>
                                      e(ve, {
                                        children: e(z, {
                                          breakpoint: d,
                                          overrides: {
                                            pAXXkDDy0: { width: "300px" },
                                            TOXdTkESZ: { width: "400px" },
                                          },
                                          children: e(v, {
                                            children: f(D, {
                                              className:
                                                "framer-juiu7h-container",
                                              id: "juiu7h",
                                              children: [
                                                e(z, {
                                                  breakpoint: d,
                                                  overrides: {
                                                    pAXXkDDy0: {
                                                      style: { width: "100%" },
                                                      variant: "phmJcfDEN",
                                                    },
                                                    TOXdTkESZ: {
                                                      style: { width: "100%" },
                                                      variant: "phmJcfDEN",
                                                    },
                                                  },
                                                  children: e(Et, {
                                                    CRhbL2gw6: "OPPO",
                                                    FAIPuZDH3:
                                                      "\u4EA4\u4E92\u8BBE\u8BA1\u5E08",
                                                    fRXJRwGZj: "1x0iujx",
                                                    gm_FjbD1y: "",
                                                    height: "100%",
                                                    id: "V58pJYQuR",
                                                    layoutId: "V58pJYQuR",
                                                    LBDUzGfXM: "",
                                                    MCcxBvB9S:
                                                      "Interaction Designer",
                                                    ns9AozcEI: !0,
                                                    oBPepH3jt: "OPPO",
                                                    PFpiGLFXx:
                                                      "2019 - \u81F3\u4ECA / \u4E0A\u6D77",
                                                    qGSlDhFbo: n({
                                                      overlay: L,
                                                    }),
                                                    SoGlaK5fL: !0,
                                                    variant: "OLArY6Kvq",
                                                    WaEMJlDaj:
                                                      "2019 - Present / Shanghai",
                                                    width: "100%",
                                                    zHJ8c3doh: !1,
                                                  }),
                                                }),
                                                e(Qe, {
                                                  children:
                                                    L.visible &&
                                                    e(ve, {
                                                      children: Ee(
                                                        f(m, {
                                                          children: [
                                                            e(
                                                              t.div,
                                                              {
                                                                animate: {
                                                                  opacity: 1,
                                                                  transition: {
                                                                    damping: 28,
                                                                    delay: 0,
                                                                    mass: 1,
                                                                    stiffness: 170,
                                                                    type: "spring",
                                                                  },
                                                                },
                                                                className:
                                                                  "framer-1h4xq0h",
                                                                "data-framer-portal-id":
                                                                  "juiu7h",
                                                                exit: {
                                                                  opacity: 0,
                                                                  transition: {
                                                                    damping: 28,
                                                                    delay: 0.2,
                                                                    mass: 1,
                                                                    stiffness: 170,
                                                                    type: "spring",
                                                                  },
                                                                },
                                                                initial: {
                                                                  opacity: 0,
                                                                },
                                                                onTap: () =>
                                                                  L.hide(),
                                                              },
                                                              "B9giSXEvC",
                                                            ),
                                                            e(Ut, {
                                                              className:
                                                                "framer-u6gaeq",
                                                              "data-framer-name":
                                                                "ClickLayer",
                                                              "data-framer-portal-id":
                                                                "juiu7h",
                                                              name: "ClickLayer",
                                                              onTap: V({
                                                                overlay: L,
                                                              }),
                                                            }),
                                                            e(z, {
                                                              breakpoint: d,
                                                              overrides: {
                                                                pAXXkDDy0: {
                                                                  exit: $t,
                                                                  initial: ea,
                                                                },
                                                              },
                                                              children: e(
                                                                t.div,
                                                                {
                                                                  animate: Kt,
                                                                  className:
                                                                    "framer-y9urm4",
                                                                  "data-framer-name":
                                                                    "Appear",
                                                                  "data-framer-portal-id":
                                                                    "juiu7h",
                                                                  exit: Gt,
                                                                  initial: Jt,
                                                                  name: "Appear",
                                                                  style: {
                                                                    transformPerspective: 1200,
                                                                  },
                                                                  children: e(
                                                                    Ht,
                                                                    {
                                                                      className:
                                                                        "framer-17xej3k",
                                                                      "data-hide-scrollbars":
                                                                        !0,
                                                                      children:
                                                                        e(
                                                                          t.div,
                                                                          {
                                                                            className:
                                                                              "framer-1npvunh",
                                                                            children:
                                                                              e(
                                                                                z,
                                                                                {
                                                                                  breakpoint:
                                                                                    d,
                                                                                  overrides:
                                                                                    {
                                                                                      pAXXkDDy0:
                                                                                        {
                                                                                          width:
                                                                                            void 0,
                                                                                        },
                                                                                      TOXdTkESZ:
                                                                                        {
                                                                                          width:
                                                                                            "580px",
                                                                                        },
                                                                                    },
                                                                                  children:
                                                                                    e(
                                                                                      v,
                                                                                      {
                                                                                        width:
                                                                                          "780px",
                                                                                        children:
                                                                                          e(
                                                                                            D,
                                                                                            {
                                                                                              className:
                                                                                                "framer-1x6zma9-container",
                                                                                              children:
                                                                                                e(
                                                                                                  z,
                                                                                                  {
                                                                                                    breakpoint:
                                                                                                      d,
                                                                                                    overrides:
                                                                                                      {
                                                                                                        pAXXkDDy0:
                                                                                                          {
                                                                                                            style:
                                                                                                              {
                                                                                                                maxWidth:
                                                                                                                  "100%",
                                                                                                                width:
                                                                                                                  "100%",
                                                                                                              },
                                                                                                            variant:
                                                                                                              "FBKY_wpNr",
                                                                                                          },
                                                                                                      },
                                                                                                    children:
                                                                                                      e(
                                                                                                        St,
                                                                                                        {
                                                                                                          height:
                                                                                                            "100%",
                                                                                                          id: "KKnDYP8u_",
                                                                                                          layoutId:
                                                                                                            "KKnDYP8u_",
                                                                                                          style:
                                                                                                            {
                                                                                                              width:
                                                                                                                "100%",
                                                                                                            },
                                                                                                          variant:
                                                                                                            "dN9OFE8w_",
                                                                                                          width:
                                                                                                            "100%",
                                                                                                        },
                                                                                                      ),
                                                                                                  },
                                                                                                ),
                                                                                            },
                                                                                          ),
                                                                                      },
                                                                                    ),
                                                                                },
                                                                              ),
                                                                          },
                                                                        ),
                                                                    },
                                                                  ),
                                                                },
                                                              ),
                                                            }),
                                                            e(v, {
                                                              children: e(D, {
                                                                animate: ta,
                                                                className:
                                                                  "framer-3q8i9f-container",
                                                                "data-framer-portal-id":
                                                                  "juiu7h",
                                                                exit: ra,
                                                                initial: aa,
                                                                transformTemplate:
                                                                  Wr,
                                                                children: e(
                                                                  Wt,
                                                                  {
                                                                    heeY2JMQ7:
                                                                      y({
                                                                        overlay:
                                                                          L,
                                                                      }),
                                                                    height:
                                                                      "100%",
                                                                    id: "h6JZmZg6w",
                                                                    layoutId:
                                                                      "h6JZmZg6w",
                                                                    variant:
                                                                      "J2J3k_z92",
                                                                    width:
                                                                      "100%",
                                                                  },
                                                                ),
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        document.querySelector(
                                                          "#overlay",
                                                        ),
                                                      ),
                                                    }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  e(Or, {
                                    blockDocumentScrolling: !0,
                                    children: (L) =>
                                      e(ve, {
                                        children: e(z, {
                                          breakpoint: d,
                                          overrides: {
                                            pAXXkDDy0: { width: "300px" },
                                            TOXdTkESZ: { width: "400px" },
                                          },
                                          children: e(v, {
                                            children: f(D, {
                                              className:
                                                "framer-xtm0kv-container",
                                              id: "xtm0kv",
                                              children: [
                                                e(z, {
                                                  breakpoint: d,
                                                  overrides: {
                                                    pAXXkDDy0: {
                                                      style: { width: "100%" },
                                                      variant: "phmJcfDEN",
                                                    },
                                                    TOXdTkESZ: {
                                                      style: { width: "100%" },
                                                      variant: "phmJcfDEN",
                                                    },
                                                  },
                                                  children: e(Et, {
                                                    CRhbL2gw6: "Microsoft",
                                                    FAIPuZDH3:
                                                      "\u5B9E\u4E60\u751F",
                                                    fRXJRwGZj: "1x0iujx",
                                                    gm_FjbD1y: "",
                                                    height: "100%",
                                                    id: "bvn8iIpti",
                                                    layoutId: "bvn8iIpti",
                                                    LBDUzGfXM: "",
                                                    MCcxBvB9S: "Intern",
                                                    ns9AozcEI: !1,
                                                    oBPepH3jt: "\u5FAE\u8F6F",
                                                    PFpiGLFXx:
                                                      "2018 \u590F / \u5317\u4EAC",
                                                    qGSlDhFbo: n({
                                                      overlay: L,
                                                    }),
                                                    SoGlaK5fL: !0,
                                                    variant: "OLArY6Kvq",
                                                    WaEMJlDaj:
                                                      "2018 Summer / Beijing",
                                                    width: "100%",
                                                    zHJ8c3doh: !1,
                                                  }),
                                                }),
                                                e(Qe, {
                                                  children:
                                                    L.visible &&
                                                    e(ve, {
                                                      children: Ee(
                                                        f(m, {
                                                          children: [
                                                            e(
                                                              t.div,
                                                              {
                                                                animate: {
                                                                  opacity: 1,
                                                                  transition: {
                                                                    damping: 28,
                                                                    delay: 0,
                                                                    mass: 1,
                                                                    stiffness: 170,
                                                                    type: "spring",
                                                                  },
                                                                },
                                                                className:
                                                                  "framer-1v3cai4",
                                                                "data-framer-portal-id":
                                                                  "xtm0kv",
                                                                exit: {
                                                                  opacity: 0,
                                                                  transition: {
                                                                    damping: 28,
                                                                    delay: 0.2,
                                                                    mass: 1,
                                                                    stiffness: 170,
                                                                    type: "spring",
                                                                  },
                                                                },
                                                                initial: {
                                                                  opacity: 0,
                                                                },
                                                                onTap: () =>
                                                                  L.hide(),
                                                              },
                                                              "XRmHDFuUU",
                                                            ),
                                                            e(Ut, {
                                                              className:
                                                                "framer-1nndeq4",
                                                              "data-framer-name":
                                                                "ClickLayer",
                                                              "data-framer-portal-id":
                                                                "xtm0kv",
                                                              name: "ClickLayer",
                                                              onTap: V({
                                                                overlay: L,
                                                              }),
                                                            }),
                                                            e(z, {
                                                              breakpoint: d,
                                                              overrides: {
                                                                pAXXkDDy0: {
                                                                  exit: $t,
                                                                  initial: ea,
                                                                },
                                                              },
                                                              children: e(
                                                                t.div,
                                                                {
                                                                  animate: Kt,
                                                                  className:
                                                                    "framer-zzf828",
                                                                  "data-framer-name":
                                                                    "Appear",
                                                                  "data-framer-portal-id":
                                                                    "xtm0kv",
                                                                  exit: Gt,
                                                                  initial: Jt,
                                                                  name: "Appear",
                                                                  style: {
                                                                    transformPerspective: 1200,
                                                                  },
                                                                  children: e(
                                                                    Ht,
                                                                    {
                                                                      className:
                                                                        "framer-1enhwhz",
                                                                      "data-hide-scrollbars":
                                                                        !0,
                                                                      children:
                                                                        e(
                                                                          t.div,
                                                                          {
                                                                            className:
                                                                              "framer-4j4le6",
                                                                            children:
                                                                              e(
                                                                                z,
                                                                                {
                                                                                  breakpoint:
                                                                                    d,
                                                                                  overrides:
                                                                                    {
                                                                                      pAXXkDDy0:
                                                                                        {
                                                                                          width:
                                                                                            void 0,
                                                                                        },
                                                                                      TOXdTkESZ:
                                                                                        {
                                                                                          width:
                                                                                            "580px",
                                                                                        },
                                                                                    },
                                                                                  children:
                                                                                    e(
                                                                                      v,
                                                                                      {
                                                                                        width:
                                                                                          "780px",
                                                                                        children:
                                                                                          e(
                                                                                            D,
                                                                                            {
                                                                                              className:
                                                                                                "framer-3zwn15-container",
                                                                                              children:
                                                                                                e(
                                                                                                  z,
                                                                                                  {
                                                                                                    breakpoint:
                                                                                                      d,
                                                                                                    overrides:
                                                                                                      {
                                                                                                        pAXXkDDy0:
                                                                                                          {
                                                                                                            style:
                                                                                                              {
                                                                                                                maxWidth:
                                                                                                                  "100%",
                                                                                                                width:
                                                                                                                  "100%",
                                                                                                              },
                                                                                                            variant:
                                                                                                              "iMfkjRqob",
                                                                                                          },
                                                                                                      },
                                                                                                    children:
                                                                                                      e(
                                                                                                        Bt,
                                                                                                        {
                                                                                                          height:
                                                                                                            "100%",
                                                                                                          id: "QbJ27to74",
                                                                                                          layoutId:
                                                                                                            "QbJ27to74",
                                                                                                          style:
                                                                                                            {
                                                                                                              width:
                                                                                                                "100%",
                                                                                                            },
                                                                                                          variant:
                                                                                                            "DTiyBUz1X",
                                                                                                          width:
                                                                                                            "100%",
                                                                                                        },
                                                                                                      ),
                                                                                                  },
                                                                                                ),
                                                                                            },
                                                                                          ),
                                                                                      },
                                                                                    ),
                                                                                },
                                                                              ),
                                                                          },
                                                                        ),
                                                                    },
                                                                  ),
                                                                },
                                                              ),
                                                            }),
                                                            e(v, {
                                                              children: e(D, {
                                                                animate: ta,
                                                                className:
                                                                  "framer-4pyn5d-container",
                                                                "data-framer-portal-id":
                                                                  "xtm0kv",
                                                                exit: ra,
                                                                initial: aa,
                                                                transformTemplate:
                                                                  Wr,
                                                                children: e(
                                                                  Wt,
                                                                  {
                                                                    heeY2JMQ7:
                                                                      y({
                                                                        overlay:
                                                                          L,
                                                                      }),
                                                                    height:
                                                                      "100%",
                                                                    id: "lvZzutykV",
                                                                    layoutId:
                                                                      "lvZzutykV",
                                                                    variant:
                                                                      "J2J3k_z92",
                                                                    width:
                                                                      "100%",
                                                                  },
                                                                ),
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        document.querySelector(
                                                          "#overlay",
                                                        ),
                                                      ),
                                                    }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  e(Or, {
                                    blockDocumentScrolling: !0,
                                    children: (L) =>
                                      e(ve, {
                                        children: e(z, {
                                          breakpoint: d,
                                          overrides: {
                                            pAXXkDDy0: { width: "300px" },
                                            TOXdTkESZ: { width: "400px" },
                                          },
                                          children: e(v, {
                                            children: f(D, {
                                              className:
                                                "framer-12asay7-container",
                                              id: "12asay7",
                                              children: [
                                                e(z, {
                                                  breakpoint: d,
                                                  overrides: {
                                                    pAXXkDDy0: {
                                                      style: { width: "100%" },
                                                      variant: "phmJcfDEN",
                                                    },
                                                    TOXdTkESZ: {
                                                      style: { width: "100%" },
                                                      variant: "phmJcfDEN",
                                                    },
                                                  },
                                                  children: e(Et, {
                                                    CRhbL2gw6:
                                                      "National Taiwan Normal University",
                                                    FAIPuZDH3:
                                                      "\u4EA4\u6362\u751F",
                                                    fRXJRwGZj: "1x0iujx",
                                                    gm_FjbD1y: "Sociology",
                                                    height: "100%",
                                                    id: "M9c4uegf7",
                                                    layoutId: "M9c4uegf7",
                                                    LBDUzGfXM:
                                                      "\u793E\u4F1A\u5B66",
                                                    MCcxBvB9S: "Exchange",
                                                    ns9AozcEI: !1,
                                                    oBPepH3jt:
                                                      "\u56FD\u7ACB\u53F0\u6E7E\u5E08\u8303\u5927\u5B66",
                                                    PFpiGLFXx:
                                                      "2018 - 2017 / \u53F0\u5317",
                                                    qGSlDhFbo: n({
                                                      overlay: L,
                                                    }),
                                                    SoGlaK5fL: !0,
                                                    variant: "OLArY6Kvq",
                                                    WaEMJlDaj:
                                                      "2018 - 2017 / Taipei",
                                                    width: "100%",
                                                    zHJ8c3doh: !1,
                                                  }),
                                                }),
                                                e(Qe, {
                                                  children:
                                                    L.visible &&
                                                    e(ve, {
                                                      children: Ee(
                                                        f(m, {
                                                          children: [
                                                            e(
                                                              t.div,
                                                              {
                                                                animate: {
                                                                  opacity: 1,
                                                                  transition: {
                                                                    damping: 28,
                                                                    delay: 0,
                                                                    mass: 1,
                                                                    stiffness: 170,
                                                                    type: "spring",
                                                                  },
                                                                },
                                                                className:
                                                                  "framer-17dj2p5",
                                                                "data-framer-portal-id":
                                                                  "12asay7",
                                                                exit: {
                                                                  opacity: 0,
                                                                  transition: {
                                                                    damping: 28,
                                                                    delay: 0.2,
                                                                    mass: 1,
                                                                    stiffness: 170,
                                                                    type: "spring",
                                                                  },
                                                                },
                                                                initial: {
                                                                  opacity: 0,
                                                                },
                                                                onTap: () =>
                                                                  L.hide(),
                                                              },
                                                              "wfJUTVHoQ",
                                                            ),
                                                            e(Ut, {
                                                              className:
                                                                "framer-1c8wzan",
                                                              "data-framer-name":
                                                                "ClickLayer",
                                                              "data-framer-portal-id":
                                                                "12asay7",
                                                              name: "ClickLayer",
                                                              onTap: V({
                                                                overlay: L,
                                                              }),
                                                            }),
                                                            e(z, {
                                                              breakpoint: d,
                                                              overrides: {
                                                                pAXXkDDy0: {
                                                                  exit: $t,
                                                                  initial: ea,
                                                                },
                                                              },
                                                              children: e(
                                                                t.div,
                                                                {
                                                                  animate: Kt,
                                                                  className:
                                                                    "framer-1mve8ho",
                                                                  "data-framer-name":
                                                                    "Appear",
                                                                  "data-framer-portal-id":
                                                                    "12asay7",
                                                                  exit: Gt,
                                                                  initial: Jt,
                                                                  name: "Appear",
                                                                  style: {
                                                                    transformPerspective: 1200,
                                                                  },
                                                                  children: e(
                                                                    Ht,
                                                                    {
                                                                      className:
                                                                        "framer-1633rgc",
                                                                      "data-hide-scrollbars":
                                                                        !0,
                                                                      children:
                                                                        e(
                                                                          t.div,
                                                                          {
                                                                            className:
                                                                              "framer-1ts3jvh",
                                                                            children:
                                                                              e(
                                                                                z,
                                                                                {
                                                                                  breakpoint:
                                                                                    d,
                                                                                  overrides:
                                                                                    {
                                                                                      pAXXkDDy0:
                                                                                        {
                                                                                          width:
                                                                                            void 0,
                                                                                        },
                                                                                      TOXdTkESZ:
                                                                                        {
                                                                                          width:
                                                                                            "580px",
                                                                                        },
                                                                                    },
                                                                                  children:
                                                                                    e(
                                                                                      v,
                                                                                      {
                                                                                        width:
                                                                                          "780px",
                                                                                        children:
                                                                                          e(
                                                                                            D,
                                                                                            {
                                                                                              className:
                                                                                                "framer-1dxufin-container",
                                                                                              children:
                                                                                                e(
                                                                                                  z,
                                                                                                  {
                                                                                                    breakpoint:
                                                                                                      d,
                                                                                                    overrides:
                                                                                                      {
                                                                                                        pAXXkDDy0:
                                                                                                          {
                                                                                                            style:
                                                                                                              {
                                                                                                                maxWidth:
                                                                                                                  "100%",
                                                                                                                width:
                                                                                                                  "100%",
                                                                                                              },
                                                                                                            variant:
                                                                                                              "gII0VuImt",
                                                                                                          },
                                                                                                      },
                                                                                                    children:
                                                                                                      e(
                                                                                                        Qt,
                                                                                                        {
                                                                                                          height:
                                                                                                            "100%",
                                                                                                          id: "PCEHGEfeA",
                                                                                                          layoutId:
                                                                                                            "PCEHGEfeA",
                                                                                                          style:
                                                                                                            {
                                                                                                              width:
                                                                                                                "100%",
                                                                                                            },
                                                                                                          variant:
                                                                                                            "RWp9Lk1yN",
                                                                                                          width:
                                                                                                            "100%",
                                                                                                        },
                                                                                                      ),
                                                                                                  },
                                                                                                ),
                                                                                            },
                                                                                          ),
                                                                                      },
                                                                                    ),
                                                                                },
                                                                              ),
                                                                          },
                                                                        ),
                                                                    },
                                                                  ),
                                                                },
                                                              ),
                                                            }),
                                                            e(v, {
                                                              children: e(D, {
                                                                animate: ta,
                                                                className:
                                                                  "framer-11x6x8l-container",
                                                                "data-framer-portal-id":
                                                                  "12asay7",
                                                                exit: ra,
                                                                initial: aa,
                                                                transformTemplate:
                                                                  Wr,
                                                                children: e(
                                                                  Wt,
                                                                  {
                                                                    heeY2JMQ7:
                                                                      y({
                                                                        overlay:
                                                                          L,
                                                                      }),
                                                                    height:
                                                                      "100%",
                                                                    id: "pLI0E10g4",
                                                                    layoutId:
                                                                      "pLI0E10g4",
                                                                    variant:
                                                                      "J2J3k_z92",
                                                                    width:
                                                                      "100%",
                                                                  },
                                                                ),
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        document.querySelector(
                                                          "#overlay",
                                                        ),
                                                      ),
                                                    }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  e(z, {
                                    breakpoint: d,
                                    overrides: {
                                      pAXXkDDy0: { width: "300px" },
                                      TOXdTkESZ: { width: "400px" },
                                    },
                                    children: e(v, {
                                      children: e(D, {
                                        className: "framer-1refmh9-container",
                                        children: e(z, {
                                          breakpoint: d,
                                          overrides: {
                                            pAXXkDDy0: {
                                              style: { width: "100%" },
                                              variant: "phmJcfDEN",
                                            },
                                            TOXdTkESZ: {
                                              style: { width: "100%" },
                                              variant: "phmJcfDEN",
                                            },
                                          },
                                          children: e(us, {
                                            CRhbL2gw6: "Fuzhou University",
                                            FAIPuZDH3: "\u6587\u5B66\u58EB",
                                            gm_FjbD1y: "Sociology",
                                            height: "100%",
                                            id: "ypEcGlCSm",
                                            layoutId: "ypEcGlCSm",
                                            LBDUzGfXM: "\u793E\u4F1A\u5B66",
                                            MCcxBvB9S: "Bachelor of Arts",
                                            ns9AozcEI: !1,
                                            oBPepH3jt:
                                              "\u798F\u5DDE\u5927\u5B66",
                                            PFpiGLFXx:
                                              "2019 - 2015 / \u798F\u5DDE",
                                            SoGlaK5fL: !1,
                                            variant: "OLArY6Kvq",
                                            WaEMJlDaj: "2019 - 2015 / Fuzhou",
                                            width: "100%",
                                            zHJ8c3doh: !0,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              e(t.div, {
                                className: "framer-1yd4ix5",
                                "data-framer-name": "Spacer",
                                name: "Spacer",
                              }),
                              f(xs, {
                                className: "framer-a3654k",
                                children: [
                                  e(Br, {
                                    __fromCanvasComponent: !0,
                                    children: e(m, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-1wxnimg",
                                        "data-styles-preset": "tvtD0bAK1",
                                        children:
                                          "Over the past 4 years, I have worked on AR glasses, digital characters, and responsive interfaces, both on experimental projects and on highly visible works at launch. These experiences and my professional background have built a unique design paradigm for me - creating work that is beautiful, harmonious and sustainable.",
                                      }),
                                    }),
                                    className: "framer-4zz4i5",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(Sr, {
                                    __fromCanvasComponent: !0,
                                    children: e(m, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-1wxnimg",
                                        "data-styles-preset": "tvtD0bAK1",
                                        children:
                                          "\u5728\u8FC7\u53BB4\u5E74\u7684\u804C\u4E1A\u751F\u6DAF\u4E2D\uFF0C\u6211\u81F4\u529B\u4E8EAR\u773C\u955C\u3001\u6570\u5B57\u4EBA\u7269\u3001\u54CD\u5E94\u5F0F\u754C\u9762\u7B49\u9886\u57DF\uFF0C\u65E2\u6709\u524D\u6CBF\u7684\u5B9E\u9A8C\u6027\u9879\u76EE\uFF0C\u4E5F\u6709\u5728\u53D1\u5E03\u4F1A\u4E0A\u5907\u53D7\u77A9\u76EE\u7684\u4F5C\u54C1\u3002\u8FD9\u4E9B\u7ECF\u5386\u548C\u6211\u7684\u4E13\u4E1A\u80CC\u666F\u4E3A\u6211\u6784\u5EFA\u4E86\u72EC\u7279\u7684\u8BBE\u8BA1\u6A21\u5F0F\u2014\u2014\u521B\u9020\u7F8E\u89C2\u3001\u548C\u8C10\u4E14\u53EF\u6301\u7EED\u7684\u4F5C\u54C1\u3002",
                                      }),
                                    }),
                                    className: "framer-1d0af55",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(t.div, {
                                    className: "framer-194dks",
                                    "data-framer-name": "Spacer",
                                    name: "Spacer",
                                  }),
                                  e(Br, {
                                    __fromCanvasComponent: !0,
                                    children: e(m, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-1wxnimg",
                                        "data-styles-preset": "tvtD0bAK1",
                                        children:
                                          "I majored in Sociology in college, and this background was a unexpected asset to my design journey, allowing me to focus on technology and aesthetics while taking a deeper look at the social aspects and psychology of the user, which guides the design of my products.",
                                      }),
                                    }),
                                    className: "framer-tlkawy",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(Sr, {
                                    __fromCanvasComponent: !0,
                                    children: e(m, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-1wxnimg",
                                        "data-styles-preset": "tvtD0bAK1",
                                        children:
                                          "\u6211\u5728\u5927\u5B66\u65F6\u4E3B\u4FEE\u793E\u4F1A\u5B66\uFF0C\u8FD9\u4E00\u80CC\u666F\u51FA\u4EBA\u610F\u6599\u5730\u6210\u4E3A\u6211\u8BBE\u8BA1\u9053\u8DEF\u4E0A\u7684\u4E00\u7B14\u8D22\u5BCC\uFF0C\u5B83\u8BA9\u6211\u5728\u5173\u6CE8\u6280\u672F\u548C\u7F8E\u5B66\u7684\u540C\u65F6\uFF0C\u66F4\u52A0\u6DF1\u5165\u5730\u8003\u8651\u793E\u4F1A\u5C42\u9762\u548C\u7528\u6237\u5FC3\u7406\uFF0C\u4EE5\u6B64\u6307\u5BFC\u6211\u7684\u4EA7\u54C1\u8BBE\u8BA1\u3002",
                                      }),
                                    }),
                                    className: "framer-1od6tmx",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              e(t.div, {
                                className: "framer-bu0sms",
                                "data-framer-name": "Spacer",
                                name: "Spacer",
                              }),
                              e(ws, {
                                className: "framer-14rhvh0",
                                "data-framer-name": "Worflow",
                                name: "Worflow",
                                children: e(v, {
                                  children: e(D, {
                                    className: "framer-mkux7w-container",
                                    children: e(vs, {
                                      height: "100%",
                                      id: "VWSg2ZZTg",
                                      layoutId: "VWSg2ZZTg",
                                      variant: "lJkOUJdxM",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                              e(Br, {
                                __fromCanvasComponent: !0,
                                children: e(m, {
                                  children: e("p", {
                                    className: "framer-styles-preset-1wxnimg",
                                    "data-styles-preset": "tvtD0bAK1",
                                    children:
                                      "Sometimes I have immature ideas, so prototyping using design or technology has become one of my hobbies. I am currently trying to make the transition from designing products to creating them. Ideas are welcome to collide with me.",
                                  }),
                                }),
                                className: "framer-wtcdji",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(Sr, {
                                __fromCanvasComponent: !0,
                                children: e(m, {
                                  children: e("p", {
                                    className: "framer-styles-preset-1wxnimg",
                                    "data-styles-preset": "tvtD0bAK1",
                                    children:
                                      "\u6211\u65F6\u5E38\u6709\u4E00\u4E9B\u4E0D\u6210\u719F\u7684\u60F3\u6CD5\uFF0C\u56E0\u6B64\u5229\u7528\u8BBE\u8BA1\u6216\u6280\u672F\u624B\u6BB5\u5236\u4F5C\u539F\u578B\u6210\u4E3A\u4E86\u6211\u7684\u7231\u597D\u4E4B\u4E00\u3002\u6211\u76EE\u524D\u6B63\u5C1D\u8BD5\u4ECE\u8BBE\u8BA1\u4EA7\u54C1\u5230\u521B\u9020\u4EA7\u54C1\u7684\u8F6C\u578B\u3002",
                                  }),
                                }),
                                className: "framer-o0ywiv",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(t.div, {
                                className: "framer-11mtm36",
                                "data-framer-name": "Spacer",
                                name: "Spacer",
                              }),
                              f(t.div, {
                                className: "framer-ku5p7h",
                                "data-framer-name": "Social",
                                name: "Social",
                                children: [
                                  e(v, {
                                    children: e(D, {
                                      className: "framer-smelwa-container",
                                      children: e(z, {
                                        breakpoint: d,
                                        overrides: { pAXXkDDy0: { size: 48 } },
                                        children: e(Ue, {
                                          align: "center",
                                          bold: !0,
                                          color:
                                            "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                          delay: 0,
                                          family:
                                            "'Cabinet Grotesk', sans-serif",
                                          gap: 0.03,
                                          height: "100%",
                                          id: "fkGaHzvE7",
                                          layoutId: "fkGaHzvE7",
                                          lineheight: 1.2,
                                          size: 72,
                                          status: !0,
                                          style: { width: "100%" },
                                          text_chn: "\u8C08\u7B11\u98CE\u751F",
                                          text: "Get in touch.",
                                          type: "Word",
                                          visible: "manual",
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  }),
                                  f(t.div, {
                                    className: "framer-fdhd20",
                                    children: [
                                      e(v, {
                                        children: e(D, {
                                          className: "framer-5ey6sg-container",
                                          children: e(We, {
                                            ei62XrgAV:
                                              "https://twitter.com/jayzhushi",
                                            height: "100%",
                                            id: "btD98Dwce",
                                            layoutId: "btD98Dwce",
                                            variant: "ixQh3qpTV",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(v, {
                                        children: e(D, {
                                          className: "framer-byl1ne-container",
                                          children: e(We, {
                                            ei62XrgAV:
                                              "https://www.instagram.com/jayzhushi/",
                                            height: "100%",
                                            id: "r7TRWFxpa",
                                            layoutId: "r7TRWFxpa",
                                            variant: "hrea27bUt",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(v, {
                                        children: e(D, {
                                          className: "framer-11wmpkx-container",
                                          children: e(We, {
                                            ei62XrgAV:
                                              "mailto:jayzhushi@gmail.com",
                                            height: "100%",
                                            id: "rK3ssz1Xw",
                                            layoutId: "rK3ssz1Xw",
                                            variant: "oY9Oepvq_",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        K() &&
                          e(t.div, {
                            className:
                              "framer-bcqt7p hidden-1ck2j05 hidden-165phi3",
                          }),
                      ],
                    }),
                    e(Ls, {
                      className: "framer-1sjxfa5",
                      "data-framer-name": "Footer",
                      name: "Footer",
                      children: e(Vs, {
                        className: "framer-18k1uim",
                        children: e(v, {
                          width: "max(100vw, 1px)",
                          children: e(z, {
                            breakpoint: d,
                            overrides: {
                              pAXXkDDy0: {
                                "data-framer-appear-id": "42caia",
                                animate: B("animate", "42caia", Zo, "165phi3"),
                                initial: B("initial", "42caia", Yo, "165phi3"),
                              },
                              TOXdTkESZ: {
                                "data-framer-appear-id": "evttoy",
                                animate: B("animate", "evttoy", Zo, "1ck2j05"),
                                initial: B("initial", "evttoy", Yo, "1ck2j05"),
                              },
                              WqfZIyIlR: {
                                "data-framer-appear-id": "1x7dq3s",
                                animate: B("animate", "1x7dq3s", Xo, "c7lyoo"),
                                initial: B("initial", "1x7dq3s", Oo, "c7lyoo"),
                              },
                            },
                            children: e(D, {
                              animate: B("animate", "n8xp2k", Xo, "8ypfs1"),
                              className: "framer-n8xp2k-container",
                              "data-framer-appear-id": "n8xp2k",
                              initial: B("initial", "n8xp2k", Oo, "8ypfs1"),
                              style: { transformPerspective: 1200 },
                              children: e(z, {
                                breakpoint: d,
                                overrides: {
                                  pAXXkDDy0: { variant: "Qjx7lyGdh" },
                                },
                                children: e(pt, {
                                  dtjgVuN4V: "jdtc6IfdH",
                                  height: "100%",
                                  id: "dFGcf34Xq",
                                  l2OjqhSRj: "jdtc6IfdH",
                                  layoutId: "dFGcf34Xq",
                                  LBh0a0IEB:
                                    "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(235, 235, 234))",
                                  qTXSBARg2: "fdKvvD3dw",
                                  style: { width: "100%" },
                                  variant: "v2CwCl_6S",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                $() &&
                  e(Bo, {
                    className:
                      "framer-1y12t1r hidden-8ypfs1 hidden-c7lyoo hidden-1ck2j05",
                    "data-framer-name": "CoverRM",
                    name: "CoverRM",
                    children: e(t.div, {
                      className: "framer-17d02xf",
                      "data-framer-name": "Gap",
                      name: "Gap",
                    }),
                  }),
                K() &&
                  f(Rs, {
                    className: "framer-19yx6ec hidden-1ck2j05 hidden-165phi3",
                    "data-framer-name": "Tooltip",
                    name: "Tooltip",
                    children: [
                      f(t.div, {
                        className: "framer-solxe1",
                        children: [
                          e(lr, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: f("p", {
                                className: "framer-styles-preset-9jlebu",
                                "data-styles-preset": "sSyE5_N0_",
                                style: {
                                  "--framer-text-color":
                                    "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                                },
                                children: [
                                  "Scroll wheel control is enabled, disable ",
                                  e("span", {
                                    style: {
                                      "--framer-text-color":
                                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                    },
                                    children: "Control with Wheel",
                                  }),
                                  " if you experience scrolling problems.",
                                ],
                              }),
                            }),
                            className: "framer-125o3c3",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(sr, {
                            __fromCanvasComponent: !0,
                            children: e(m, {
                              children: f("p", {
                                className: "framer-styles-preset-9jlebu",
                                "data-styles-preset": "sSyE5_N0_",
                                style: {
                                  "--framer-text-color":
                                    "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                                },
                                children: [
                                  '\u6EDA\u8F6E\u63A7\u5236\u5DF2\u542F\u7528\uFF0C\u5982\u679C\u9047\u5230\u6EDA\u52A8\u95EE\u9898\uFF0C\u8BF7\u7981\u7528 "',
                                  e("span", {
                                    style: {
                                      "--framer-text-color":
                                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                    },
                                    children: "\u6EDA\u8F6E\u63A7\u5236",
                                  }),
                                  '"\u3002',
                                ],
                              }),
                            }),
                            className: "framer-f9nusg",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      e(t.div, {
                        className: "framer-17xlx7k",
                        children: e(v, {
                          children: e(D, {
                            className: "framer-b1jzju-container",
                            children: e(Is, {
                              height: "100%",
                              id: "lAzN8N3_L",
                              jqcdHdCYz: "\u4E86\u89E3",
                              layoutId: "lAzN8N3_L",
                              variant: "eVJtmaWf9",
                              width: "100%",
                              xH050kkag: "Dismiss",
                            }),
                          }),
                        }),
                      }),
                      e(t.div, {
                        className: "framer-iy4fkj",
                        children: e(h, {
                          className: "framer-1fvj93",
                          layout: "position",
                          opacity: 1,
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 20"><path d="M 12.313 3.35 C 13.511 1.698 15.973 1.698 17.171 3.35 L 29.242 20 L 0.242 20 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */"></path></svg>',
                          svgContentId: 10144947966,
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            e("div", { className: P(So, ...se), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Of = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Gr.bodyClassName}-framer-Qi0qV { background: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217)) /* {"name":"Backdrop"} */; }`,
    ".framer-Qi0qV.framer-2uib3p, .framer-Qi0qV .framer-2uib3p { display: block; }",
    ".framer-Qi0qV.framer-8ypfs1 { align-content: center; align-items: center; background-color: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, #dbdbd9); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1600px; }",
    ".framer-Qi0qV .framer-z8624m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 42px; justify-content: flex-start; left: 30px; overflow: visible; padding: 0px; position: fixed; top: 40px; width: min-content; z-index: 5; }",
    ".framer-Qi0qV .framer-t7rr2a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-hqvv9f-container { flex: none; height: 42px; pointer-events: auto; position: relative; width: auto; }",
    ".framer-Qi0qV .framer-1r608sz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-tgeyjp-container { flex: none; height: auto; pointer-events: auto; position: relative; width: auto; }",
    ".framer-Qi0qV .framer-1lr8mqj { align-content: center; align-items: center; background-color: var(--token-0998aeba-5eb4-400a-87c6-fe3a20398e99, rgba(232, 232, 232, 0.7)); border-bottom-left-radius: 17px; border-bottom-right-radius: 17px; border-top-left-radius: 17px; border-top-right-radius: 17px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; pointer-events: auto; position: fixed; right: 121px; top: 40px; width: min-content; z-index: 5; }",
    ".framer-Qi0qV .framer-1d0r8m2-container { flex: none; height: 42px; position: relative; width: auto; }",
    ".framer-Qi0qV .framer-1gx2q11 { inset: 0px; position: fixed; user-select: none; z-index: 4; }",
    ".framer-Qi0qV .framer-1qbq5su { bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: hidden; position: fixed; right: 0px; top: 0px; z-index: 4; }",
    ".framer-Qi0qV .framer-17x9kb7 { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-Qi0qV .framer-1n4w6g2 { background-color: var(--token-813e2b74-368d-46c9-aab0-978671346ba5, rgba(201, 201, 199, 0.7)); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-Qi0qV .framer-tt48z6 { align-content: center; align-items: center; bottom: 120px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 40px; overflow: hidden; padding: 0px; position: fixed; width: min-content; z-index: 4; }",
    ".framer-Qi0qV .framer-81bw63, .framer-Qi0qV .framer-l6o5u1, .framer-Qi0qV .framer-117j4w9, .framer-Qi0qV .framer-i6aon6 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 106px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-1oxpaxo, .framer-Qi0qV .framer-rzpqry, .framer-Qi0qV .framer-1u9etr8, .framer-Qi0qV .framer-1oxu2vn, .framer-Qi0qV .framer-arp3kt, .framer-Qi0qV .framer-1vcuz7v, .framer-Qi0qV .framer-1n8t5n1, .framer-Qi0qV .framer-i9imyj, .framer-Qi0qV .framer-yw6zqy, .framer-Qi0qV .framer-1h8htsv, .framer-Qi0qV .framer-5taba0, .framer-Qi0qV .framer-6al4ad, .framer-Qi0qV .framer-18au4fh, .framer-Qi0qV .framer-10bvqap { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-Qi0qV .framer-imc386 { aspect-ratio: 1.0091743119266054 / 1; flex: none; height: 100%; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 107px); }",
    ".framer-Qi0qV .framer-1tsai5 { align-content: flex-end; align-items: flex-end; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; left: 0px; overflow: visible; padding: 20px; position: fixed; right: 0px; z-index: 4; }",
    ".framer-Qi0qV .framer-13y4hzr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-hmkepd-container, .framer-Qi0qV .framer-pes0q5-container { flex: none; height: 54px; position: relative; width: 54px; z-index: 2; }",
    ".framer-Qi0qV .framer-1egyuu1-container { flex: none; height: 54px; position: relative; width: 54px; z-index: 1; }",
    ".framer-Qi0qV .framer-1ax5acu-container { flex: none; height: 54px; position: relative; width: 54px; z-index: 0; }",
    ".framer-Qi0qV .framer-1csr904 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 20px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-105vktp-container, .framer-Qi0qV .framer-w0hzx-container, .framer-Qi0qV .framer-10tirnd-container, .framer-Qi0qV .framer-dzpt0i-container, .framer-Qi0qV .framer-10ma0j8-container, .framer-Qi0qV .framer-10757po-container, .framer-Qi0qV .framer-1qh1shh-container, .framer-Qi0qV .framer-a4sbri-container, .framer-Qi0qV .framer-ciuu6n-container, .framer-Qi0qV .framer-juiu7h-container, .framer-Qi0qV .framer-xtm0kv-container, .framer-Qi0qV .framer-12asay7-container, .framer-Qi0qV .framer-1refmh9-container, .framer-Qi0qV .framer-5ey6sg-container, .framer-Qi0qV .framer-byl1ne-container, .framer-Qi0qV .framer-11wmpkx-container, .framer-Qi0qV .framer-b1jzju-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-Qi0qV .framer-1frzh93 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-11uzj7c, .framer-Qi0qV .framer-n082ab, .framer-Qi0qV .framer-1ek5obm, .framer-Qi0qV .framer-ywlg8s { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-1v31d7k { aspect-ratio: 1.0091743119266054 / 1; flex: none; height: 100%; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 202px); }",
    ".framer-Qi0qV .framer-etfx77 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: fixed; right: 40px; top: 100px; width: min-content; z-index: 4; }",
    ".framer-Qi0qV .framer-fbagex-container { flex: none; height: auto; left: 157px; position: absolute; top: 262px; width: auto; z-index: 4; }",
    ".framer-Qi0qV .framer-1jx9nqw-container { flex: none; height: auto; left: 154px; position: absolute; top: 345px; width: auto; z-index: 4; }",
    ".framer-Qi0qV .framer-1nhx9kz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-m9i1kp { align-content: center; align-items: center; background-color: var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(232, 232, 232, 0.7)); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 8px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-14s6xpw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 10px; position: relative; width: 90px; }",
    ".framer-Qi0qV .framer-16xzdgi { align-content: center; align-items: center; background-color: var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(232, 232, 232, 0.7)); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Qi0qV .framer-1f3rlf1-container, .framer-Qi0qV .framer-l7fulh-container, .framer-Qi0qV .framer-1uftehr-container { flex: none; height: auto; position: relative; width: 90px; }",
    ".framer-Qi0qV .framer-1nn2ccz, .framer-Qi0qV .framer-a69u3x { align-content: center; align-items: center; background-color: var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7)); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 74px; justify-content: space-between; overflow: hidden; padding: 8px 16px 8px 8px; position: relative; width: 303px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Qi0qV .framer-1seztzk, .framer-Qi0qV .framer-d7hxmj, .framer-Qi0qV .framer-6hsf0t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 10px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-4i7j72 { align-content: center; align-items: center; background-color: var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(232, 232, 232, 0.7)); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 74px; justify-content: space-between; overflow: hidden; padding: 8px 16px 8px 8px; position: relative; width: 303px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Qi0qV .framer-xs1gtm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 4px 16px 0px 16px; position: relative; width: 303px; }",
    ".framer-Qi0qV .framer-1lbf3c0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: 38px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-Qi0qV .framer-913wxl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: fixed; right: 30px; top: 40px; width: min-content; z-index: 5; }",
    ".framer-Qi0qV .framer-b4gvz1 { -webkit-user-select: none; align-content: flex-end; align-items: flex-end; background-color: var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7)); border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 56px; justify-content: center; left: 22px; overflow: hidden; padding: 0px; pointer-events: none; position: fixed; top: 33px; user-select: none; width: 158px; will-change: var(--framer-will-change-override, transform); z-index: 4; }",
    '.framer-Qi0qV .framer-mzckfq, .framer-Qi0qV .framer-1wjzuuw, .framer-Qi0qV .framer-17d02xf { background: linear-gradient(90deg, var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0)) /* {"name":"Black 0"} */ 0%, var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {"name":"Black 5"} */ 50.09407691728758%, var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0)) /* {"name":"Black 0"} */ 100%); flex: 0.9 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; }',
    ".framer-Qi0qV .framer-1o9arzo { -webkit-user-select: none; align-content: flex-end; align-items: flex-end; background-color: var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7)); border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 56px; justify-content: center; overflow: hidden; padding: 0px; pointer-events: none; position: fixed; right: 22px; top: 33px; user-select: none; width: 311px; will-change: var(--framer-will-change-override, transform); z-index: 4; }",
    ".framer-Qi0qV .framer-ghs43q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: auto; padding: 0px; position: relative; width: 100%; }",
    ".framer-Qi0qV .framer-4itezu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: flex-start; overflow: auto; padding: 0px; position: relative; width: 100%; }",
    ".framer-Qi0qV .framer-e75uzy { flex: none; height: 1px; overflow: hidden; position: relative; width: 19%; }",
    ".framer-Qi0qV .framer-16kajam { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 580px; }",
    ".framer-Qi0qV .framer-1w1er0q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 300px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-fkc3j6, .framer-Qi0qV .framer-1e2m4pg, .framer-Qi0qV .framer-4zz4i5, .framer-Qi0qV .framer-1d0af55, .framer-Qi0qV .framer-tlkawy, .framer-Qi0qV .framer-1od6tmx, .framer-Qi0qV .framer-wtcdji, .framer-Qi0qV .framer-o0ywiv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 580px; word-break: break-word; word-wrap: break-word; }",
    ".framer-Qi0qV .framer-1qjphke { aspect-ratio: 1.3333333333333333 / 1; border-bottom-left-radius: 36px; border-bottom-right-radius: 36px; border-top-left-radius: 36px; border-top-right-radius: 36px; flex: none; height: 50vh; overflow: hidden; position: relative; width: var(--framer-aspect-ratio-supported, 667px); will-change: var(--framer-will-change-override, transform); }",
    ".framer-Qi0qV .framer-13kpyu9, .framer-Qi0qV .framer-1yd4ix5, .framer-Qi0qV .framer-bu0sms, .framer-Qi0qV .framer-11mtm36 { flex: none; height: 1px; overflow: hidden; position: relative; width: 20px; }",
    ".framer-Qi0qV .framer-1fijoiz { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    '.framer-Qi0qV .framer-1h4xq0h, .framer-Qi0qV .framer-1v3cai4, .framer-Qi0qV .framer-17dj2p5 { background-color: var(--token-813e2b74-368d-46c9-aab0-978671346ba5, rgba(201, 201, 199, 0.7)) /* {"name":"Overlayer 70"} */; inset: 0px; position: fixed; user-select: none; z-index: 0; }',
    ".framer-Qi0qV .framer-u6gaeq, .framer-Qi0qV .framer-1nndeq4, .framer-Qi0qV .framer-1c8wzan { bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: hidden; position: fixed; right: 0px; top: 0px; z-index: 0; }",
    ".framer-Qi0qV .framer-y9urm4, .framer-Qi0qV .framer-zzf828, .framer-Qi0qV .framer-1mve8ho { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: calc(50.00000000000002% - 960px / 2); overflow: hidden; padding: 0px; position: fixed; top: 0px; width: 960px; z-index: 0; }",
    ".framer-Qi0qV .framer-17xej3k, .framer-Qi0qV .framer-1enhwhz, .framer-Qi0qV .framer-1633rgc { align-content: flex-start; align-items: flex-start; border-top-left-radius: 36px; border-top-right-radius: 36px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; overflow: auto; padding: 140px 0px 140px 0px; position: relative; width: 1px; }",
    ".framer-Qi0qV .framer-1npvunh, .framer-Qi0qV .framer-4j4le6, .framer-Qi0qV .framer-1ts3jvh { align-content: center; align-items: center; background-color: var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, #ffffff); border-bottom-left-radius: 36px; border-bottom-right-radius: 36px; border-top-left-radius: 36px; border-top-right-radius: 36px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 100px 100px 200px 100px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Qi0qV .framer-1x6zma9-container, .framer-Qi0qV .framer-3zwn15-container, .framer-Qi0qV .framer-1dxufin-container { flex: none; height: auto; position: relative; width: 780px; }",
    ".framer-Qi0qV .framer-3q8i9f-container, .framer-Qi0qV .framer-4pyn5d-container, .framer-Qi0qV .framer-11x6x8l-container { bottom: 46px; flex: none; height: auto; left: 50%; pointer-events: auto; position: fixed; transform: translateX(-50%); width: auto; z-index: 0; }",
    ".framer-Qi0qV .framer-a3654k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-194dks { flex: none; height: 100px; overflow: hidden; position: relative; width: 100px; }",
    ".framer-Qi0qV .framer-14rhvh0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 200px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 100px 0px 0px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-mkux7w-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-Qi0qV .framer-ku5p7h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-smelwa-container { flex: none; height: auto; position: relative; width: 409px; }",
    ".framer-Qi0qV .framer-fdhd20 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Qi0qV .framer-bcqt7p { flex: none; height: 100px; overflow: hidden; position: relative; width: 300px; }",
    ".framer-Qi0qV .framer-1sjxfa5 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; pointer-events: none; position: absolute; right: 0px; z-index: 3; }",
    ".framer-Qi0qV .framer-18k1uim { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-Qi0qV .framer-n8xp2k-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    '.framer-Qi0qV .framer-1y12t1r { -webkit-user-select: none; align-content: flex-end; align-items: flex-end; background: linear-gradient(180deg, var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, #ebebea) /* {"name":"Backdrop"} */ 0%, var(--token-c78c5adc-b8aa-4f62-9549-7632a988e6f0, rgba(235, 235, 234, 0.85)) /* {"name":"Backdrop 85"} */ 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 56px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; pointer-events: none; position: fixed; right: 0px; top: 0px; user-select: none; z-index: 4; }',
    ".framer-Qi0qV .framer-19yx6ec { align-content: flex-end; align-items: flex-end; background-color: var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, #ffffff); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: absolute; right: 70px; top: 99px; width: 295px; z-index: 1; }",
    ".framer-Qi0qV .framer-solxe1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Qi0qV .framer-125o3c3, .framer-Qi0qV .framer-f9nusg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-Qi0qV .framer-17xlx7k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Qi0qV .framer-iy4fkj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 209px; overflow: hidden; padding: 0px; position: absolute; top: -14px; width: min-content; z-index: 1; }",
    ".framer-Qi0qV .framer-1fvj93 { flex: none; height: 20px; position: relative; width: 30px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Qi0qV.framer-8ypfs1, .framer-Qi0qV .framer-z8624m, .framer-Qi0qV .framer-t7rr2a, .framer-Qi0qV .framer-1r608sz, .framer-Qi0qV .framer-1lr8mqj, .framer-Qi0qV .framer-tt48z6, .framer-Qi0qV .framer-81bw63, .framer-Qi0qV .framer-l6o5u1, .framer-Qi0qV .framer-117j4w9, .framer-Qi0qV .framer-i6aon6, .framer-Qi0qV .framer-13y4hzr, .framer-Qi0qV .framer-1csr904, .framer-Qi0qV .framer-1frzh93, .framer-Qi0qV .framer-11uzj7c, .framer-Qi0qV .framer-n082ab, .framer-Qi0qV .framer-1ek5obm, .framer-Qi0qV .framer-ywlg8s, .framer-Qi0qV .framer-etfx77, .framer-Qi0qV .framer-1nhx9kz, .framer-Qi0qV .framer-m9i1kp, .framer-Qi0qV .framer-14s6xpw, .framer-Qi0qV .framer-16xzdgi, .framer-Qi0qV .framer-1seztzk, .framer-Qi0qV .framer-d7hxmj, .framer-Qi0qV .framer-6hsf0t, .framer-Qi0qV .framer-xs1gtm, .framer-Qi0qV .framer-913wxl, .framer-Qi0qV .framer-b4gvz1, .framer-Qi0qV .framer-1o9arzo, .framer-Qi0qV .framer-ghs43q, .framer-Qi0qV .framer-4itezu, .framer-Qi0qV .framer-16kajam, .framer-Qi0qV .framer-1w1er0q, .framer-Qi0qV .framer-1fijoiz, .framer-Qi0qV .framer-y9urm4, .framer-Qi0qV .framer-17xej3k, .framer-Qi0qV .framer-1npvunh, .framer-Qi0qV .framer-zzf828, .framer-Qi0qV .framer-1enhwhz, .framer-Qi0qV .framer-4j4le6, .framer-Qi0qV .framer-1mve8ho, .framer-Qi0qV .framer-1633rgc, .framer-Qi0qV .framer-1ts3jvh, .framer-Qi0qV .framer-a3654k, .framer-Qi0qV .framer-14rhvh0, .framer-Qi0qV .framer-ku5p7h, .framer-Qi0qV .framer-fdhd20, .framer-Qi0qV .framer-1sjxfa5, .framer-Qi0qV .framer-18k1uim, .framer-Qi0qV .framer-1y12t1r, .framer-Qi0qV .framer-19yx6ec, .framer-Qi0qV .framer-solxe1, .framer-Qi0qV .framer-17xlx7k, .framer-Qi0qV .framer-iy4fkj { gap: 0px; } .framer-Qi0qV.framer-8ypfs1 > *, .framer-Qi0qV .framer-14s6xpw > *, .framer-Qi0qV .framer-1seztzk > *, .framer-Qi0qV .framer-d7hxmj > *, .framer-Qi0qV .framer-6hsf0t > *, .framer-Qi0qV .framer-ghs43q > *, .framer-Qi0qV .framer-16kajam > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Qi0qV.framer-8ypfs1 > :first-child, .framer-Qi0qV .framer-etfx77 > :first-child, .framer-Qi0qV .framer-1nhx9kz > :first-child, .framer-Qi0qV .framer-14s6xpw > :first-child, .framer-Qi0qV .framer-1seztzk > :first-child, .framer-Qi0qV .framer-d7hxmj > :first-child, .framer-Qi0qV .framer-6hsf0t > :first-child, .framer-Qi0qV .framer-ghs43q > :first-child, .framer-Qi0qV .framer-16kajam > :first-child, .framer-Qi0qV .framer-1npvunh > :first-child, .framer-Qi0qV .framer-4j4le6 > :first-child, .framer-Qi0qV .framer-1ts3jvh > :first-child, .framer-Qi0qV .framer-ku5p7h > :first-child, .framer-Qi0qV .framer-19yx6ec > :first-child, .framer-Qi0qV .framer-solxe1 > :first-child, .framer-Qi0qV .framer-iy4fkj > :first-child { margin-top: 0px; } .framer-Qi0qV.framer-8ypfs1 > :last-child, .framer-Qi0qV .framer-etfx77 > :last-child, .framer-Qi0qV .framer-1nhx9kz > :last-child, .framer-Qi0qV .framer-14s6xpw > :last-child, .framer-Qi0qV .framer-1seztzk > :last-child, .framer-Qi0qV .framer-d7hxmj > :last-child, .framer-Qi0qV .framer-6hsf0t > :last-child, .framer-Qi0qV .framer-ghs43q > :last-child, .framer-Qi0qV .framer-16kajam > :last-child, .framer-Qi0qV .framer-1npvunh > :last-child, .framer-Qi0qV .framer-4j4le6 > :last-child, .framer-Qi0qV .framer-1ts3jvh > :last-child, .framer-Qi0qV .framer-ku5p7h > :last-child, .framer-Qi0qV .framer-19yx6ec > :last-child, .framer-Qi0qV .framer-solxe1 > :last-child, .framer-Qi0qV .framer-iy4fkj > :last-child { margin-bottom: 0px; } .framer-Qi0qV .framer-z8624m > *, .framer-Qi0qV .framer-1r608sz > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-Qi0qV .framer-z8624m > :first-child, .framer-Qi0qV .framer-t7rr2a > :first-child, .framer-Qi0qV .framer-1r608sz > :first-child, .framer-Qi0qV .framer-1lr8mqj > :first-child, .framer-Qi0qV .framer-tt48z6 > :first-child, .framer-Qi0qV .framer-81bw63 > :first-child, .framer-Qi0qV .framer-l6o5u1 > :first-child, .framer-Qi0qV .framer-117j4w9 > :first-child, .framer-Qi0qV .framer-i6aon6 > :first-child, .framer-Qi0qV .framer-13y4hzr > :first-child, .framer-Qi0qV .framer-1csr904 > :first-child, .framer-Qi0qV .framer-1frzh93 > :first-child, .framer-Qi0qV .framer-11uzj7c > :first-child, .framer-Qi0qV .framer-n082ab > :first-child, .framer-Qi0qV .framer-1ek5obm > :first-child, .framer-Qi0qV .framer-ywlg8s > :first-child, .framer-Qi0qV .framer-m9i1kp > :first-child, .framer-Qi0qV .framer-16xzdgi > :first-child, .framer-Qi0qV .framer-xs1gtm > :first-child, .framer-Qi0qV .framer-913wxl > :first-child, .framer-Qi0qV .framer-b4gvz1 > :first-child, .framer-Qi0qV .framer-1o9arzo > :first-child, .framer-Qi0qV .framer-4itezu > :first-child, .framer-Qi0qV .framer-1w1er0q > :first-child, .framer-Qi0qV .framer-1fijoiz > :first-child, .framer-Qi0qV .framer-y9urm4 > :first-child, .framer-Qi0qV .framer-17xej3k > :first-child, .framer-Qi0qV .framer-zzf828 > :first-child, .framer-Qi0qV .framer-1enhwhz > :first-child, .framer-Qi0qV .framer-1mve8ho > :first-child, .framer-Qi0qV .framer-1633rgc > :first-child, .framer-Qi0qV .framer-a3654k > :first-child, .framer-Qi0qV .framer-14rhvh0 > :first-child, .framer-Qi0qV .framer-fdhd20 > :first-child, .framer-Qi0qV .framer-1sjxfa5 > :first-child, .framer-Qi0qV .framer-18k1uim > :first-child, .framer-Qi0qV .framer-1y12t1r > :first-child, .framer-Qi0qV .framer-17xlx7k > :first-child { margin-left: 0px; } .framer-Qi0qV .framer-z8624m > :last-child, .framer-Qi0qV .framer-t7rr2a > :last-child, .framer-Qi0qV .framer-1r608sz > :last-child, .framer-Qi0qV .framer-1lr8mqj > :last-child, .framer-Qi0qV .framer-tt48z6 > :last-child, .framer-Qi0qV .framer-81bw63 > :last-child, .framer-Qi0qV .framer-l6o5u1 > :last-child, .framer-Qi0qV .framer-117j4w9 > :last-child, .framer-Qi0qV .framer-i6aon6 > :last-child, .framer-Qi0qV .framer-13y4hzr > :last-child, .framer-Qi0qV .framer-1csr904 > :last-child, .framer-Qi0qV .framer-1frzh93 > :last-child, .framer-Qi0qV .framer-11uzj7c > :last-child, .framer-Qi0qV .framer-n082ab > :last-child, .framer-Qi0qV .framer-1ek5obm > :last-child, .framer-Qi0qV .framer-ywlg8s > :last-child, .framer-Qi0qV .framer-m9i1kp > :last-child, .framer-Qi0qV .framer-16xzdgi > :last-child, .framer-Qi0qV .framer-xs1gtm > :last-child, .framer-Qi0qV .framer-913wxl > :last-child, .framer-Qi0qV .framer-b4gvz1 > :last-child, .framer-Qi0qV .framer-1o9arzo > :last-child, .framer-Qi0qV .framer-4itezu > :last-child, .framer-Qi0qV .framer-1w1er0q > :last-child, .framer-Qi0qV .framer-1fijoiz > :last-child, .framer-Qi0qV .framer-y9urm4 > :last-child, .framer-Qi0qV .framer-17xej3k > :last-child, .framer-Qi0qV .framer-zzf828 > :last-child, .framer-Qi0qV .framer-1enhwhz > :last-child, .framer-Qi0qV .framer-1mve8ho > :last-child, .framer-Qi0qV .framer-1633rgc > :last-child, .framer-Qi0qV .framer-a3654k > :last-child, .framer-Qi0qV .framer-14rhvh0 > :last-child, .framer-Qi0qV .framer-fdhd20 > :last-child, .framer-Qi0qV .framer-1sjxfa5 > :last-child, .framer-Qi0qV .framer-18k1uim > :last-child, .framer-Qi0qV .framer-1y12t1r > :last-child, .framer-Qi0qV .framer-17xlx7k > :last-child { margin-right: 0px; } .framer-Qi0qV .framer-t7rr2a > *, .framer-Qi0qV .framer-tt48z6 > *, .framer-Qi0qV .framer-81bw63 > *, .framer-Qi0qV .framer-l6o5u1 > *, .framer-Qi0qV .framer-117j4w9 > *, .framer-Qi0qV .framer-i6aon6 > *, .framer-Qi0qV .framer-1csr904 > *, .framer-Qi0qV .framer-1frzh93 > *, .framer-Qi0qV .framer-11uzj7c > *, .framer-Qi0qV .framer-n082ab > *, .framer-Qi0qV .framer-1ek5obm > *, .framer-Qi0qV .framer-ywlg8s > *, .framer-Qi0qV .framer-xs1gtm > *, .framer-Qi0qV .framer-913wxl > *, .framer-Qi0qV .framer-b4gvz1 > *, .framer-Qi0qV .framer-1o9arzo > *, .framer-Qi0qV .framer-y9urm4 > *, .framer-Qi0qV .framer-zzf828 > *, .framer-Qi0qV .framer-1mve8ho > *, .framer-Qi0qV .framer-1sjxfa5 > *, .framer-Qi0qV .framer-18k1uim > *, .framer-Qi0qV .framer-1y12t1r > *, .framer-Qi0qV .framer-17xlx7k > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Qi0qV .framer-1lr8mqj > *, .framer-Qi0qV .framer-4itezu > *, .framer-Qi0qV .framer-1fijoiz > *, .framer-Qi0qV .framer-17xej3k > *, .framer-Qi0qV .framer-1enhwhz > *, .framer-Qi0qV .framer-1633rgc > *, .framer-Qi0qV .framer-a3654k > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Qi0qV .framer-13y4hzr > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-Qi0qV .framer-etfx77 > *, .framer-Qi0qV .framer-1nhx9kz > *, .framer-Qi0qV .framer-iy4fkj > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Qi0qV .framer-m9i1kp > *, .framer-Qi0qV .framer-16xzdgi > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-Qi0qV .framer-1w1er0q > * { margin: 0px; margin-left: calc(100px / 2); margin-right: calc(100px / 2); } .framer-Qi0qV .framer-1npvunh > *, .framer-Qi0qV .framer-4j4le6 > *, .framer-Qi0qV .framer-1ts3jvh > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-Qi0qV .framer-14rhvh0 > * { margin: 0px; margin-left: calc(200px / 2); margin-right: calc(200px / 2); } .framer-Qi0qV .framer-ku5p7h > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-Qi0qV .framer-fdhd20 > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } .framer-Qi0qV .framer-19yx6ec > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-Qi0qV .framer-solxe1 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } }",
    "@media (min-width: 1600px) { .framer-Qi0qV .hidden-8ypfs1 { display: none !important; } }",
    `@media (min-width: 1200px) and (max-width: 1599px) { .framer-Qi0qV .hidden-c7lyoo { display: none !important; } .${Gr.bodyClassName}-framer-Qi0qV { background: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217)) /* {"name":"Backdrop"} */; } .framer-Qi0qV.framer-8ypfs1 { width: 1200px; } .framer-Qi0qV .framer-81bw63, .framer-Qi0qV .framer-l6o5u1, .framer-Qi0qV .framer-117j4w9, .framer-Qi0qV .framer-i6aon6 { height: 80px; } .framer-Qi0qV .framer-imc386 { width: var(--framer-aspect-ratio-supported, 81px); } .framer-Qi0qV .framer-fbagex-container, .framer-Qi0qV .framer-1jx9nqw-container { width: 20px; } .framer-Qi0qV .framer-1seztzk, .framer-Qi0qV .framer-d7hxmj, .framer-Qi0qV .framer-6hsf0t { gap: 4px; } .framer-Qi0qV .framer-16kajam { width: 520px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Qi0qV .framer-1seztzk, .framer-Qi0qV .framer-d7hxmj, .framer-Qi0qV .framer-6hsf0t { gap: 0px; } .framer-Qi0qV .framer-1seztzk > *, .framer-Qi0qV .framer-d7hxmj > *, .framer-Qi0qV .framer-6hsf0t > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-Qi0qV .framer-1seztzk > :first-child, .framer-Qi0qV .framer-d7hxmj > :first-child, .framer-Qi0qV .framer-6hsf0t > :first-child { margin-top: 0px; } .framer-Qi0qV .framer-1seztzk > :last-child, .framer-Qi0qV .framer-d7hxmj > :last-child, .framer-Qi0qV .framer-6hsf0t > :last-child { margin-bottom: 0px; } }}`,
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-Qi0qV .hidden-1ck2j05 { display: none !important; } .${Gr.bodyClassName}-framer-Qi0qV { background: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217)) /* {"name":"Backdrop"} */; } .framer-Qi0qV.framer-8ypfs1 { width: 810px; } .framer-Qi0qV .framer-z8624m { left: 24px; top: 23px; } .framer-Qi0qV .framer-1lr8mqj { right: 82px; top: 23px; } .framer-Qi0qV .framer-1d0r8m2-container { order: 0; } .framer-Qi0qV .framer-81bw63, .framer-Qi0qV .framer-l6o5u1, .framer-Qi0qV .framer-117j4w9, .framer-Qi0qV .framer-i6aon6 { height: 60px; } .framer-Qi0qV .framer-imc386 { width: var(--framer-aspect-ratio-supported, 202px); } .framer-Qi0qV .framer-913wxl { top: 23px; } .framer-Qi0qV .framer-b4gvz1 { left: 16px; top: 16px; } .framer-Qi0qV .framer-1o9arzo { right: 16px; top: 16px; width: 122px; } .framer-Qi0qV .framer-4itezu { flex-direction: column; height: min-content; overflow: visible; padding: 0px 0px 200px 0px; } .framer-Qi0qV .framer-e75uzy { height: 123px; width: 1px; } .framer-Qi0qV .framer-1w1er0q { flex-direction: column; overflow: hidden; padding: 0px 10px 0px 10px; width: 100%; } .framer-Qi0qV .framer-1qjphke { width: var(--framer-aspect-ratio-supported, 267px); } .framer-Qi0qV .framer-1fijoiz { align-content: flex-start; align-items: flex-start; align-self: unset; flex-direction: column; height: min-content; width: 400px; } .framer-Qi0qV .framer-juiu7h-container, .framer-Qi0qV .framer-xtm0kv-container, .framer-Qi0qV .framer-12asay7-container, .framer-Qi0qV .framer-1refmh9-container { width: 100%; } .framer-Qi0qV .framer-1h4xq0h, .framer-Qi0qV .framer-1v3cai4, .framer-Qi0qV .framer-17dj2p5 { background-color: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, #ebebea) /* {"name":"Backdrop"} */; } .framer-Qi0qV .framer-y9urm4, .framer-Qi0qV .framer-zzf828, .framer-Qi0qV .framer-1mve8ho { left: 20px; right: 20px; width: unset; } .framer-Qi0qV .framer-1x6zma9-container, .framer-Qi0qV .framer-3zwn15-container, .framer-Qi0qV .framer-1dxufin-container { width: 580px; } .framer-Qi0qV .framer-a3654k { align-content: center; align-items: center; flex-direction: column; justify-content: flex-start; } .framer-Qi0qV .framer-14rhvh0 { flex-direction: column; gap: 0px; padding: 0px 0px 150px 0px; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Qi0qV .framer-4itezu, .framer-Qi0qV .framer-1w1er0q, .framer-Qi0qV .framer-1fijoiz, .framer-Qi0qV .framer-a3654k, .framer-Qi0qV .framer-14rhvh0 { gap: 0px; } .framer-Qi0qV .framer-4itezu > *, .framer-Qi0qV .framer-1fijoiz > *, .framer-Qi0qV .framer-a3654k > *, .framer-Qi0qV .framer-14rhvh0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Qi0qV .framer-4itezu > :first-child, .framer-Qi0qV .framer-1w1er0q > :first-child, .framer-Qi0qV .framer-1fijoiz > :first-child, .framer-Qi0qV .framer-a3654k > :first-child, .framer-Qi0qV .framer-14rhvh0 > :first-child { margin-top: 0px; } .framer-Qi0qV .framer-4itezu > :last-child, .framer-Qi0qV .framer-1w1er0q > :last-child, .framer-Qi0qV .framer-1fijoiz > :last-child, .framer-Qi0qV .framer-a3654k > :last-child, .framer-Qi0qV .framer-14rhvh0 > :last-child { margin-bottom: 0px; } .framer-Qi0qV .framer-1w1er0q > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } }}`,
    `@media (max-width: 809px) { .framer-Qi0qV .hidden-165phi3 { display: none !important; } .${Gr.bodyClassName}-framer-Qi0qV { background: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217)) /* {"name":"Backdrop"} */; } .framer-Qi0qV.framer-8ypfs1 { width: 390px; } .framer-Qi0qV .framer-z8624m { height: min-content; left: 12px; order: 0; top: 7px; } .framer-Qi0qV .framer-hqvv9f-container { width: 24px; } .framer-Qi0qV .framer-1lr8mqj { gap: 4px; order: 1; right: 62px; top: 7px; } .framer-Qi0qV .framer-1tsai5 { align-content: center; align-items: center; bottom: 8px; flex-direction: column; gap: 10px; justify-content: flex-end; left: 8px; padding: 0px; right: 8px; } .framer-Qi0qV .framer-13y4hzr { align-content: flex-start; align-items: flex-start; flex-wrap: wrap; gap: 10px; justify-content: center; order: 1; overflow: hidden; width: 100%; } .framer-Qi0qV .framer-1csr904 { order: 2; padding: 0px 20px 20px 20px; } .framer-Qi0qV .framer-1frzh93, .framer-Qi0qV .framer-11uzj7c { order: 0; } .framer-Qi0qV .framer-n082ab { order: 2; } .framer-Qi0qV .framer-1ek5obm { order: 1; } .framer-Qi0qV .framer-ywlg8s { order: 3; } .framer-Qi0qV .framer-etfx77 { left: 50%; right: unset; top: 80px; transform: translateX(-50%); } .framer-Qi0qV .framer-913wxl { order: 2; right: 10px; top: 7px; } .framer-Qi0qV .framer-ghs43q { order: 6; } .framer-Qi0qV .framer-4itezu { flex-direction: column; height: min-content; padding: 0px 0px 400px 0px; } .framer-Qi0qV .framer-e75uzy, .framer-Qi0qV .framer-13kpyu9, .framer-Qi0qV .framer-1yd4ix5, .framer-Qi0qV .framer-bu0sms, .framer-Qi0qV .framer-11mtm36 { -webkit-user-select: none; pointer-events: none; user-select: none; } .framer-Qi0qV .framer-16kajam { width: 260px; } .framer-Qi0qV .framer-1w1er0q { flex-direction: column; overflow: hidden; padding: 0px 10px 0px 10px; width: 100%; } .framer-Qi0qV .framer-fkc3j6, .framer-Qi0qV .framer-1e2m4pg, .framer-Qi0qV .framer-4zz4i5, .framer-Qi0qV .framer-1d0af55, .framer-Qi0qV .framer-tlkawy, .framer-Qi0qV .framer-1od6tmx, .framer-Qi0qV .framer-wtcdji, .framer-Qi0qV .framer-o0ywiv { max-width: 580px; width: 90%; } .framer-Qi0qV .framer-1qjphke { height: var(--framer-aspect-ratio-supported, 150px); max-width: 580px; width: 100%; } .framer-Qi0qV .framer-1fijoiz { align-content: flex-start; align-items: flex-start; align-self: unset; flex-direction: column; height: min-content; width: 300px; } .framer-Qi0qV .framer-juiu7h-container, .framer-Qi0qV .framer-xtm0kv-container, .framer-Qi0qV .framer-12asay7-container, .framer-Qi0qV .framer-1refmh9-container, .framer-Qi0qV .framer-ku5p7h, .framer-Qi0qV .framer-smelwa-container { width: 100%; } .framer-Qi0qV .framer-1h4xq0h, .framer-Qi0qV .framer-1v3cai4, .framer-Qi0qV .framer-17dj2p5 { background-color: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, #ebebea) /* {"name":"Backdrop"} */; } .framer-Qi0qV .framer-y9urm4, .framer-Qi0qV .framer-zzf828, .framer-Qi0qV .framer-1mve8ho { left: 0px; right: 0px; width: unset; } .framer-Qi0qV .framer-1npvunh, .framer-Qi0qV .framer-4j4le6, .framer-Qi0qV .framer-1ts3jvh { padding: 100px 10px 200px 10px; } .framer-Qi0qV .framer-1x6zma9-container, .framer-Qi0qV .framer-3zwn15-container, .framer-Qi0qV .framer-1dxufin-container { max-width: 500px; width: 100%; } .framer-Qi0qV .framer-a3654k { align-content: center; align-items: center; flex-direction: column; justify-content: flex-start; width: 100%; } .framer-Qi0qV .framer-14rhvh0 { flex-direction: column; gap: 0px; padding: 0px; width: 100%; } .framer-Qi0qV .framer-fdhd20 { gap: 20px; } .framer-Qi0qV .framer-1y12t1r { order: 5; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Qi0qV .framer-1lr8mqj, .framer-Qi0qV .framer-1tsai5, .framer-Qi0qV .framer-13y4hzr, .framer-Qi0qV .framer-4itezu, .framer-Qi0qV .framer-1w1er0q, .framer-Qi0qV .framer-1fijoiz, .framer-Qi0qV .framer-a3654k, .framer-Qi0qV .framer-14rhvh0, .framer-Qi0qV .framer-fdhd20 { gap: 0px; } .framer-Qi0qV .framer-1lr8mqj > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-Qi0qV .framer-1lr8mqj > :first-child, .framer-Qi0qV .framer-13y4hzr > :first-child, .framer-Qi0qV .framer-fdhd20 > :first-child { margin-left: 0px; } .framer-Qi0qV .framer-1lr8mqj > :last-child, .framer-Qi0qV .framer-13y4hzr > :last-child, .framer-Qi0qV .framer-fdhd20 > :last-child { margin-right: 0px; } .framer-Qi0qV .framer-1tsai5 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Qi0qV .framer-1tsai5 > :first-child, .framer-Qi0qV .framer-4itezu > :first-child, .framer-Qi0qV .framer-1w1er0q > :first-child, .framer-Qi0qV .framer-1fijoiz > :first-child, .framer-Qi0qV .framer-a3654k > :first-child, .framer-Qi0qV .framer-14rhvh0 > :first-child { margin-top: 0px; } .framer-Qi0qV .framer-1tsai5 > :last-child, .framer-Qi0qV .framer-4itezu > :last-child, .framer-Qi0qV .framer-1w1er0q > :last-child, .framer-Qi0qV .framer-1fijoiz > :last-child, .framer-Qi0qV .framer-a3654k > :last-child, .framer-Qi0qV .framer-14rhvh0 > :last-child { margin-bottom: 0px; } .framer-Qi0qV .framer-13y4hzr > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Qi0qV .framer-4itezu > *, .framer-Qi0qV .framer-1fijoiz > *, .framer-Qi0qV .framer-a3654k > *, .framer-Qi0qV .framer-14rhvh0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Qi0qV .framer-1w1er0q > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-Qi0qV .framer-fdhd20 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } }}`,
    ...Ia,
    ...vr,
    '.framer-Qi0qV[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-Qi0qV [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '.framer-Qi0qV[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-Qi0qV [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  Kr = H(Xf, Of, "framer-Qi0qV"),
  _c = Kr;
Kr.displayName = "About";
Kr.defaultProps = { height: 1e3, width: 1600 };
W(
  Kr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Cabinet Grotesk",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/XMXWOHABYLQDJ42L65EFRYNVRY37HQCB/B2O4O6V3JMFM2WDCYQI3A47L5U4THDUL/WN5274VQ3AUBDFP74GB4EC4XYJ3EKVNE.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQ bJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...ql,
    ...Ll,
    ...jl,
    ...Ml,
    ...zl,
    ...Dl,
    ...Nl,
    ...Tl,
    ...Fl,
    ...Sl,
    ...Pl,
    ...El,
    ...Hl,
    ...Xl,
    ...Zl,
    ...Gl,
    ...Jl,
    ...es,
    ...os,
    ...ls,
    ...ms,
    ...ds,
    ...cs,
    ...ps,
    ...hs,
    ...ys,
    ...bs,
    ...qs,
    ...js,
    ...Ms,
    ...le(ja),
    ...le(yr),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var jc = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerZ1o48jX66",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerImmutableVariables: "true",
        framerIntrinsicWidth: "1600",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"WqfZIyIlR":{"layout":["fixed","auto"]},"TOXdTkESZ":{"layout":["fixed","auto"]},"pAXXkDDy0":{"layout":["fixed","auto"]}}}',
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "1000",
        framerComponentViewportWidth: "true",
        framerResponsiveScreen: "",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { jc as __FramerMetadata__, _c as default };
//# sourceMappingURL=TtU91rlwra8zFqk6Ymn5XoYIk0SaHXpMc6X6l5kmJfU.JCL3WOTD.mjs.map
