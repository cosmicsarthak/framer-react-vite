import { a as bn } from "./chunk-2R6PUQFV.mjs";
import { a as cr } from "./chunk-7NJ3POQQ.mjs";
import { a as ta, b as Ae } from "./chunk-645JPX5U.mjs";
import {
  a as xi,
  b as vi,
  c as wi,
  d as ra,
  f as it,
} from "./chunk-53S5Y7XE.mjs";
import { a as lr } from "./chunk-GDW2HGW6.mjs";
import {
  $b as Ei,
  A as Pn,
  Aa as li,
  B as Un,
  Ba as Re,
  C as qn,
  Ca as Qr,
  D as Hn,
  Da as mi,
  E as Bn,
  Ea as Jr,
  F as Xn,
  Fa as fi,
  Ga as Zr,
  H as Mn,
  Ha as di,
  I as Br,
  J as An,
  L as Yn,
  M as On,
  N as Wn,
  O as Xr,
  P as Qn,
  Q as Jn,
  R as Zn,
  Rb as sa,
  S as Kn,
  Sb as la,
  T as $n,
  Tb as ma,
  U as ei,
  Ua as ci,
  Ub as ji,
  V as ti,
  Va as pi,
  Vb as fa,
  Wa as hi,
  Wb as Gi,
  Xa as Kr,
  Xb as da,
  Y as ri,
  Yb as Ti,
  Z as Ne,
  Zb as ca,
  _ as Se,
  _b as Vi,
  ac as zi,
  b as kn,
  bc as Pi,
  c as Cn,
  ca as ht,
  cb as $r,
  d as pt,
  da as ut,
  e as Me,
  ea as yt,
  eb as ea,
  f as ir,
  fa as Mr,
  fb as ui,
  g as Ee,
  ga as ai,
  gb as yi,
  h as Rn,
  ha as Ar,
  hb as gi,
  ia as Yr,
  ib as mr,
  j as _n,
  ja as Or,
  jb as fr,
  k as Dn,
  ka as ni,
  kb as dr,
  l as Ln,
  la as Wr,
  lb as bi,
  m as In,
  ma as ii,
  mb as ki,
  n as or,
  nb as Ci,
  o as Fn,
  ob as Ri,
  p as Hr,
  pb as aa,
  q as Nn,
  qa as oi,
  qb as _i,
  r as Sn,
  rb as na,
  s as sr,
  sb as Di,
  t as jn,
  tb as ia,
  u as Gn,
  ub as Li,
  v as Tn,
  vb as oa,
  w as Vn,
  wb as Ii,
  x as En,
  xb as Fi,
  y as zn,
  yb as Ni,
  za as si,
  zb as Si,
} from "./chunk-ZEPEXD57.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as a,
  B as Fe,
  C as z,
  Ca as gn,
  D as ln,
  Da as Dt,
  E as mn,
  F as rr,
  G as fn,
  Ga as ie,
  Ha as xn,
  J as dn,
  K as cn,
  Ka as nt,
  L as pn,
  O as hn,
  Pa as le,
  Qa as vn,
  R as _t,
  Sa as Ve,
  Ua as wn,
  Va as ar,
  Xa as A,
  Ya as pe,
  _ as B,
  a as rt,
  b as at,
  bb as Lt,
  c as w,
  cb as te,
  d as Pr,
  ea as ct,
  eb as ae,
  f as Ur,
  g as q,
  ga as m,
  gb as nr,
  hb as X,
  ib as N,
  j as nn,
  ja as P,
  jb as ve,
  k as Y,
  l as Le,
  m as H,
  ma as V,
  n as on,
  p as M,
  pa as Te,
  q as T,
  r as Ce,
  ra as re,
  sa as v,
  t as Ie,
  u as e,
  ua as oe,
  v as p,
  w as qr,
  wa as U,
  x as sn,
  xa as un,
  z as S,
  za as yn,
} from "./chunk-NAESFJNX.mjs";
import "./chunk-JR5VT52U.mjs";
import { a as Rt, c as W } from "./chunk-Y5FTINFI.mjs";
var Ea = {};
Rt(Ea, { __FramerMetadata__: () => tc, default: () => Cr });
var Va = {};
Rt(Va, { __FramerMetadata__: () => Bd, default: () => kr });
function It(t) {
  let { radius: r, url: i, tint: n } = t,
    o = rt.useRef(null),
    f = kn(o, "", 0.5),
    [s, C] = rt.useState(!1);
  return (
    rt.useEffect(() => {
      f ? o.current.play() : o.current.pause();
    }, [f]),
    e(a.div, {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        radius: r,
        overflow: "hidden",
      },
      children: e("video", {
        ref: o,
        muted: !0,
        loop: !0,
        playsInline: !0,
        src: i,
        style: { objectFit: "cover", width: "100%", height: "100%", zIndex: 1 },
      }),
    })
  );
}
P(It, {
  tint: { title: "Tint", type: m.Color, defaultValue: "#f2f2f2" },
  url: {
    title: "Video URL",
    type: m.String,
    defaultValue: "https://example.com/video.mp4",
  },
  radius: { title: "Radius", type: m.Number, defaultValue: 0, min: 0, max: 50 },
});
function Ui(t) {
  for (var r = 0, i, n = 0, o = t.length; o >= 4; ++n, o -= 4)
    (i =
      (255 & t.charCodeAt(n)) |
      ((255 & t.charCodeAt(++n)) << 8) |
      ((255 & t.charCodeAt(++n)) << 16) |
      ((255 & t.charCodeAt(++n)) << 24)),
      (i = 1540483477 * (65535 & i) + ((59797 * (i >>> 16)) << 16)),
      (i ^= i >>> 24),
      (r =
        (1540483477 * (65535 & i) + ((59797 * (i >>> 16)) << 16)) ^
        (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)));
  switch (o) {
    case 3:
      r ^= (255 & t.charCodeAt(n + 2)) << 16;
    case 2:
      r ^= (255 & t.charCodeAt(n + 1)) << 8;
    case 1:
      (r ^= 255 & t.charCodeAt(n)),
        (r = 1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16));
  }
  return (
    (r ^= r >>> 13),
    (r = 1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var ha = U(
    function (t) {
      let r,
        i,
        n,
        o = at.count(t.slots) > 0,
        f = ct.current() === ct.canvas,
        s = o && t.type === "graphic",
        C = t.type === "circle",
        b = t.type === "ellipse",
        D = b ? t.cylinderHeight / 2 : 0,
        l = Fo(t.flip, D);
      if (s) {
        let _ = pa(t.slots),
          F = pa(_.props.svg),
          I = pa(_.props.children);
        if (f && !I.props.frame)
          return p("div", {
            style: No,
            children: [
              e("div", { style: So, children: "\u{1F48E}" }),
              e("p", { style: jo, children: "Please connect to Graphic" }),
              e("p", {
                style: Go,
                children:
                  "You can only connect the Arc to a Graphic with a single path.",
              }),
            ],
          });
        if (f && I) {
          let h = bn(I),
            k = I.props.frame;
          for (let L of ((i = `0 0 ${k.width} ${k.height}`),
          h.match(/[\w-]+="[^"]*"/g)))
            L.includes("d=") && (r = qi(L));
        }
        if (!f && F) {
          let h = F.match(/[\w-]+="[^"]*"/g);
          for (let k of ((i = (i = (i = F.split("viewBox=")[1]).split(
            ">",
          )[0]).replace(/^"(.+(?="$))"$/, "$1")),
          h))
            k.includes("d=") && (r = qi(k));
        }
      }
      let c = `curve-${Ui(r || l)}`;
      return (
        t.alignmentBaseline === "top" && (n = "Text Top"),
        t.alignmentBaseline === "center" && (n = "Central"),
        t.alignmentBaseline === "bottom" && (n = "Hanging"),
        e(a.div, {
          style: { width: "100%", height: "100%", position: "relative" },
          draggable: "false",
          children: p(a.svg, {
            className: "transform-origin-center-center",
            style: {
              width: "100%",
              height: "100%",
              position: "absolute",
              inset: 0,
              transformOrigin: "center",
              willChange: t.rotate && "transform",
            },
            viewBox: s ? i : "0 0 100 100",
            overflow: "visible",
            animate: C && t.rotate && { rotate: 360 },
            transition: C &&
              t.rotate && {
                duration: 100 / t.rotateSpeed,
                repeat: 1 / 0,
                ease: "linear",
              },
            children: [
              e("path", {
                id: c,
                d: s ? r : l,
                strokeWidth: "none",
                fill: "transparent",
              }),
              e("text", {
                children: p("textPath", {
                  href: `#${c}`,
                  startOffset: t.startOffset,
                  dominantBaseline: n,
                  style: {
                    ...t.font,
                    wordSpacing: t.wordSpacing,
                    fill: t.color,
                  },
                  children: [
                    t.text,
                    !f &&
                      t.animate &&
                      e("animate", {
                        attributeName: "startOffset",
                        from: `${t.animateStart}%`,
                        to: `${t.animateEnd}%`,
                        begin: "0s",
                        dur: `${t.animateDuration}s`,
                        repeatCount: "indefinite",
                      }),
                  ],
                }),
              }),
            ],
          }),
        })
      );
    },
    [
      ".transform-origin-center-center { transform-origin: center center !important; }",
    ],
  ),
  gt = ha;
function pa(t) {
  let r;
  return (
    at.map(t, (i) => {
      r === void 0 && (r = i);
    }),
    r
  );
}
(ha.defaultProps = { height: 50, width: 50 }),
  P(ha, {
    text: {
      title: "Content",
      type: m.String,
      defaultValue: "\u2726 THANK YOU \u2726 FOR VISITING",
      displayTextArea: !0,
    },
    type: {
      title: "Type",
      type: m.Enum,
      options: ["circle", "ellipse", "graphic"],
      optionTitles: ["Circle", "Ellipse", "Graphic"],
      defaultValue: !0,
    },
    cylinderHeight: {
      title: "Height",
      type: m.Number,
      unit: "px",
      min: 0,
      max: 1e3,
      hidden: ({ type: t }) => t !== "ellipse",
    },
    rotate: {
      type: m.Boolean,
      title: "Rotate",
      defaultValue: !1,
      hidden: ({ type: t }) => t !== "circle",
    },
    rotateSpeed: {
      type: m.Number,
      title: "Speed",
      min: 0,
      max: 50,
      defaultValue: 5,
      displayStepper: !0,
      step: 1,
      hidden: ({ type: t, rotate: r }) => t !== "circle" || !r,
    },
    slots: {
      type: m.ComponentInstance,
      title: "Graphic",
      hidden: ({ type: t }) => t !== "graphic",
    },
    alignmentBaseline: {
      title: "Align",
      type: m.Enum,
      options: ["top", "center", "bottom"],
      optionIcons: ["align-top", "align-middle", "align-bottom"],
      defaultValue: "bottom",
      displaySegmentedControl: !0,
    },
    flip: {
      type: m.Boolean,
      defaultValue: !1,
      title: "Direction",
      enabledTitle: "CW",
      disabledTitle: "CCW",
      hidden: ({ type: t }) => t === "graphic",
    },
    startOffset: {
      title: "Offset",
      type: m.Number,
      defaultValue: 0,
      max: 360,
      unit: "\xB0",
      step: 0.5,
    },
    color: { title: "Color", type: m.Color, defaultValue: "#999" },
    font: {
      type: m.Font,
      title: "Font",
      controls: "extended",
      displayTextAlignment: !1,
    },
    wordSpacing: {
      type: m.Number,
      step: 1,
      defaultValue: 0,
      title: "Word",
      displayStepper: !0,
    },
    animate: { type: m.Boolean, defaultValue: !1, title: "Animate" },
    animateStart: {
      type: m.Number,
      min: -200,
      max: 200,
      step: 0.1,
      defaultValue: -50,
      title: "From",
      unit: "%",
      hidden: (t) => !t.animate,
    },
    animateEnd: {
      type: m.Number,
      min: -200,
      max: 200,
      step: 0.1,
      defaultValue: 150,
      title: "To",
      unit: "%",
      hidden: (t) => !t.animate,
    },
    animateDuration: {
      type: m.Number,
      min: 0,
      max: 50,
      defaultValue: 5,
      title: "Time",
      unit: "s",
      displayStepper: !0,
      hidden: (t) => !t.animate,
    },
  });
var qi = (t) => t.split("=")[1].replace(/['"]+/g, ""),
  Fo = (t, r) => {
    let i = 50 - r,
      n = 50 + r;
    return t
      ? `M 0 50 L 0 ${n} A 1 1 0 1 0 100 ${n} L 100 ${i} A 1 1 0 1 0 0 ${i} L 0 50`
      : `M 0 50 L 0 ${i} A 1 1 0 0 1 100 ${i} L 100 50 L 100 ${n} A 1 1 0 0 1 0 ${n} L 0 ${i}`;
  },
  No = {
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
  So = { fontSize: 32, marginBottom: 10 },
  jo = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Go = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 160,
    lineHeight: 1.5,
    textAlign: "center",
  };
var To = Te(a.div),
  Vo = N(gt),
  Eo = ["Y3W7ZpbDr"],
  zo = "framer-TOv0s",
  Po = { Y3W7ZpbDr: "framer-v-vnaifp" };
var Uo = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  qo = { delay: 0, duration: 25, ease: [0, 0, 1, 1], type: "tween" },
  Ho = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Hi = (t, r) => `translate(-50%, -50%) ${r}`,
  Bo = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  Xo = a(w),
  Mo = ({ height: t, id: r, width: i, ...n }) => ({ ...n }),
  Ao = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Yo = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      { style: o, className: f, layoutId: s, variant: C, ...b } = Mo(t),
      {
        baseVariant: D,
        classNames: l,
        clearLoadingGesture: c,
        gestureHandlers: _,
        gestureVariant: F,
        isLoading: I,
        setGestureState: h,
        setVariant: k,
        variants: L,
      } = A({
        cycleOrder: Eo,
        defaultVariant: "Y3W7ZpbDr",
        variant: C,
        variantClassNames: Po,
      }),
      g = Ao(t, L),
      j = T(null),
      d = H(),
      R = [],
      u = re();
    return e(z, {
      id: s ?? d,
      children: e(Xo, {
        animate: L,
        initial: !1,
        children: e(Bo, {
          value: Uo,
          children: p(a.div, {
            ...b,
            ..._,
            className: V(zo, ...R, "framer-vnaifp", f, l),
            "data-framer-name": "InProgress",
            layoutDependency: g,
            layoutId: "Y3W7ZpbDr",
            ref: r ?? j,
            style: {
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
              ...o,
            },
            children: [
              e(To, {
                __framer__loop: Ho,
                __framer__loopEffectEnabled: !0,
                __framer__loopRepeatDelay: 0,
                __framer__loopRepeatType: "loop",
                __framer__loopTransition: qo,
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                className: "framer-kyy27t",
                "data-framer-name": "Flower",
                layoutDependency: g,
                layoutId: "Gycw0EF4q",
                children: e(ae, {
                  className: "framer-irmye",
                  layout: "position",
                  layoutDependency: g,
                  layoutId: "WFsN1PTPW",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 97 97"><path d="M 44.612 4.945 C 46.667 2.585 50.333 2.585 52.388 4.945 L 52.388 4.945 C 54.678 7.574 58.454 8.326 61.576 6.772 L 61.576 6.772 C 64.377 5.379 67.764 6.782 68.76 9.748 L 68.76 9.748 C 69.869 13.054 73.071 15.193 76.549 14.953 L 76.549 14.953 C 79.671 14.737 82.263 17.329 82.047 20.451 L 82.047 20.451 C 81.807 23.929 83.946 27.131 87.252 28.24 L 87.252 28.24 C 90.218 29.236 91.621 32.623 90.228 35.424 L 90.228 35.424 C 88.674 38.546 89.426 42.322 92.055 44.612 L 92.055 44.612 C 94.415 46.667 94.415 50.333 92.055 52.388 L 92.055 52.388 C 89.426 54.678 88.674 58.454 90.228 61.576 L 90.228 61.576 C 91.621 64.377 90.218 67.764 87.252 68.76 L 87.252 68.76 C 83.946 69.869 81.807 73.071 82.047 76.549 L 82.047 76.549 C 82.263 79.671 79.671 82.263 76.549 82.047 L 76.549 82.047 C 73.071 81.807 69.869 83.946 68.76 87.252 L 68.76 87.252 C 67.764 90.218 64.377 91.621 61.576 90.228 L 61.576 90.228 C 58.454 88.674 54.678 89.426 52.388 92.055 L 52.388 92.055 C 50.333 94.415 46.667 94.415 44.612 92.055 L 44.612 92.055 C 42.322 89.426 38.546 88.674 35.424 90.228 L 35.424 90.228 C 32.623 91.621 29.236 90.218 28.24 87.252 L 28.24 87.252 C 27.131 83.946 23.929 81.807 20.451 82.047 L 20.451 82.047 C 17.329 82.263 14.737 79.671 14.953 76.549 L 14.953 76.549 C 15.193 73.071 13.054 69.869 9.748 68.76 L 9.748 68.76 C 6.782 67.764 5.379 64.377 6.772 61.576 L 6.772 61.576 C 8.326 58.454 7.574 54.678 4.945 52.388 L 4.945 52.388 C 2.585 50.333 2.585 46.667 4.945 44.612 L 4.945 44.612 C 7.574 42.322 8.326 38.546 6.772 35.424 L 6.772 35.424 C 5.379 32.623 6.782 29.236 9.748 28.24 L 9.748 28.24 C 13.054 27.131 15.193 23.929 14.953 20.451 L 14.953 20.451 C 14.737 17.329 17.329 14.737 20.451 14.953 L 20.451 14.953 C 23.929 15.193 27.131 13.054 28.24 9.748 L 28.24 9.748 C 29.236 6.782 32.623 5.379 35.424 6.772 L 35.424 6.772 C 38.546 8.326 42.322 7.574 44.612 4.945 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                  svgContentId: 11733465069,
                  withExternalLayout: !0,
                }),
              }),
              p(a.div, {
                className: "framer-1j43mh2",
                layoutDependency: g,
                layoutId: "f8MRwyPx9",
                children: [
                  e(v, {
                    children: e(a.div, {
                      className: "framer-14r2fdx-container",
                      "data-framer-name": "InProgress",
                      layoutDependency: g,
                      layoutId: "rCLLQ3dTM-container",
                      name: "InProgress",
                      transformTemplate: Hi,
                      children: e(gt, {
                        alignmentBaseline: "bottom",
                        animate: !1,
                        animateDuration: 5,
                        animateEnd: 150,
                        animateStart: -50,
                        color:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        cylinderHeight: 0,
                        flip: !0,
                        font: {
                          fontFamily:
                            '"Satoshi", "Satoshi Placeholder", sans-serif',
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                          lineHeight: "1em",
                        },
                        height: "100%",
                        id: "rCLLQ3dTM",
                        layoutId: "rCLLQ3dTM",
                        name: "InProgress",
                        rotate: !1,
                        rotateSpeed: 2,
                        slots: [],
                        startOffset: 29.5,
                        style: { height: "100%", width: "100%" },
                        text: "UPDATES",
                        type: "circle",
                        width: "100%",
                        wordSpacing: 0,
                      }),
                    }),
                  }),
                  e(ae, {
                    className: "framer-189mkz5",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: g,
                    layoutId: "tgYUl4ORC",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 18"><path d="M 20.75 0.75 C 21.047 0.75 21.288 0.991 21.288 1.288 C 21.288 2.729 22.014 4.214 23.15 5.35 C 24.286 6.486 25.771 7.212 27.212 7.212 C 27.509 7.212 27.75 7.453 27.75 7.75 C 27.75 8.047 27.509 8.288 27.212 8.288 C 25.771 8.288 24.286 9.014 23.15 10.15 C 22.014 11.286 21.288 12.771 21.288 14.212 C 21.288 14.509 21.047 14.75 20.75 14.75 C 20.453 14.75 20.212 14.509 20.212 14.212 C 20.212 12.771 19.486 11.286 18.35 10.15 C 17.214 9.014 15.729 8.288 14.288 8.288 C 13.991 8.288 13.75 8.047 13.75 7.75 C 13.75 7.453 13.991 7.212 14.288 7.212 C 15.729 7.212 17.214 6.486 18.35 5.35 C 19.486 4.214 20.212 2.729 20.212 1.288 C 20.212 0.991 20.453 0.75 20.75 0.75 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */"></path><path d="M 37.25 7.75 C 37.441 7.75 37.596 7.905 37.596 8.096 C 37.596 9.022 38.062 9.977 38.793 10.707 C 39.523 11.437 40.478 11.904 41.404 11.904 C 41.595 11.904 41.75 12.059 41.75 12.25 C 41.75 12.441 41.595 12.596 41.404 12.596 C 40.478 12.596 39.523 13.062 38.793 13.793 C 38.063 14.523 37.596 15.478 37.596 16.404 C 37.596 16.595 37.441 16.75 37.25 16.75 C 37.059 16.75 36.904 16.595 36.904 16.404 C 36.904 15.478 36.438 14.523 35.707 13.793 C 34.977 13.062 34.022 12.596 33.096 12.596 C 32.905 12.596 32.75 12.441 32.75 12.25 C 32.75 12.059 32.905 11.904 33.096 11.904 C 34.022 11.904 34.977 11.438 35.707 10.707 C 36.438 9.977 36.904 9.022 36.904 8.096 C 36.904 7.905 37.059 7.75 37.25 7.75 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */"></path><path d="M 4.25 7.75 C 4.441 7.75 4.596 7.905 4.596 8.096 C 4.596 9.022 5.062 9.977 5.793 10.707 C 6.523 11.437 7.478 11.904 8.404 11.904 C 8.595 11.904 8.75 12.059 8.75 12.25 C 8.75 12.441 8.595 12.596 8.404 12.596 C 7.478 12.596 6.523 13.062 5.793 13.793 C 5.063 14.523 4.596 15.478 4.596 16.404 C 4.596 16.595 4.441 16.75 4.25 16.75 C 4.059 16.75 3.904 16.595 3.904 16.404 C 3.904 15.478 3.438 14.523 2.707 13.793 C 1.977 13.062 1.022 12.596 0.096 12.596 C -0.095 12.596 -0.25 12.441 -0.25 12.25 C -0.25 12.059 -0.095 11.904 0.096 11.904 C 1.022 11.904 1.977 11.438 2.707 10.707 C 3.438 9.977 3.904 9.022 3.904 8.096 C 3.904 7.905 4.059 7.75 4.25 7.75 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */"></path></svg>',
                    svgContentId: 9595866272,
                    withExternalLayout: !0,
                  }),
                  e(te, {
                    __fromCanvasComponent: !0,
                    children: e(w, {
                      children: e(a.p, {
                        style: {
                          "--font-selector": "RlM7U2F0b3NoaS1ib2xk",
                          "--framer-font-family":
                            '"Satoshi", "Satoshi Placeholder", sans-serif',
                          "--framer-font-size": "27px",
                          "--framer-font-weight": "700",
                          "--framer-line-height": "1em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                          "--framer-text-transform": "uppercase",
                        },
                        children: "New",
                      }),
                    }),
                    className: "framer-16bvjr0",
                    fonts: ["FS;Satoshi-bold"],
                    layoutDependency: g,
                    layoutId: "R4tk66PY2",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    transformTemplate: Hi,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(ae, {
                    className: "framer-detxkb",
                    layout: "position",
                    layoutDependency: g,
                    layoutId: "smRKhcbU_",
                    opacity: 1,
                    radius: 3,
                    style: {
                      backgroundColor: "rgb(255, 255, 255)",
                      borderBottomLeftRadius: 3,
                      borderBottomRightRadius: 3,
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                    },
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 2"></svg>',
                    svgContentId: 8954219077,
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
  Oo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-TOv0s.framer-17rmc2x, .framer-TOv0s .framer-17rmc2x { display: block; }",
    ".framer-TOv0s.framer-vnaifp { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100px; }",
    ".framer-TOv0s .framer-kyy27t { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }",
    ".framer-TOv0s .framer-irmye { flex: none; height: 97px; left: calc(50.00000000000002% - 97px / 2); position: absolute; top: calc(50.00000000000002% - 97px / 2); width: 97px; }",
    ".framer-TOv0s .framer-1j43mh2 { flex: 1 0 0px; height: 1px; overflow: visible; position: relative; width: 100%; }",
    ".framer-TOv0s .framer-14r2fdx-container { aspect-ratio: 1 / 1; flex: none; height: 53%; left: 50%; position: absolute; top: 50%; width: var(--framer-aspect-ratio-supported, 53px); z-index: 1; }",
    ".framer-TOv0s .framer-189mkz5 { flex: none; height: 18px; left: calc(50.00000000000002% - 42px / 2); position: absolute; top: 16px; width: 42px; }",
    ".framer-TOv0s .framer-16bvjr0 { flex: none; height: auto; left: 50%; position: absolute; top: 48%; white-space: pre; width: auto; }",
    ".framer-TOv0s .framer-detxkb { bottom: 32px; flex: none; height: 2px; left: calc(50.00000000000002% - 18px / 2); position: absolute; width: 18px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TOv0s.framer-vnaifp { gap: 0px; } .framer-TOv0s.framer-vnaifp > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-TOv0s.framer-vnaifp > :first-child { margin-top: 0px; } .framer-TOv0s.framer-vnaifp > :last-child { margin-bottom: 0px; } }",
  ],
  pr = U(Yo, Oo, "framer-TOv0s"),
  ua = pr;
pr.displayName = "Home/SealNEW";
pr.defaultProps = { height: 100, width: 100 };
X(
  pr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
          weight: "700",
        },
      ],
    },
    ...Vo,
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Qo = N(gt),
  Bi = Te(a.div),
  Jo = ["sBbVTkEzY"],
  Zo = "framer-vmej5",
  Ko = { sBbVTkEzY: "framer-v-162cfys" };
var $o = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var es = { delay: 0, duration: 25, ease: [0, 0, 1, 1], type: "tween" },
  ts = { opacity: 1, rotate: 360, scale: 1, x: 0, y: 0 },
  rs = { delay: 0, duration: 8, ease: [0, 0, 1, 1], type: "tween" },
  as = { opacity: 1, rotate: -360, scale: 1, x: 0, y: 0 },
  ns = (t, r) => `translate(-50%, -50%) ${r}`,
  is = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  os = ({ height: t, id: r, width: i, ...n }) => ({ ...n }),
  ss = (t, r) => r.join("-") + t.layoutDependency,
  ls = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      { style: o, className: f, layoutId: s, variant: C, ...b } = os(t),
      {
        baseVariant: D,
        classNames: l,
        gestureVariant: c,
        setGestureState: _,
        setVariant: F,
        transition: I,
        variants: h,
      } = A({
        cycleOrder: Jo,
        defaultVariant: "sBbVTkEzY",
        transitions: $o,
        variant: C,
        variantClassNames: Ko,
      }),
      k = ss(t, h),
      L = T(null),
      g = H(),
      j = [];
    return e(z, {
      id: s ?? g,
      children: e(is, {
        value: I,
        children: p(a.div, {
          ...b,
          animate: h,
          className: V(Zo, ...j, "framer-162cfys", f, l),
          "data-framer-name": "InProgress",
          initial: C,
          layoutDependency: k,
          layoutId: "sBbVTkEzY",
          onHoverEnd: () => _({ isHovered: !1 }),
          onHoverStart: () => _({ isHovered: !0 }),
          onTap: () => _({ isPressed: !1 }),
          onTapCancel: () => _({ isPressed: !1 }),
          onTapStart: () => _({ isPressed: !0 }),
          ref: r ?? L,
          style: {
            backgroundColor:
              "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
            borderTopLeftRadius: 100,
            borderTopRightRadius: 100,
            ...o,
          },
          children: [
            e(Bi, {
              __framer__loop: ts,
              __framer__loopEffectEnabled: !0,
              __framer__loopRepeatDelay: 0,
              __framer__loopRepeatType: "loop",
              __framer__loopTransition: es,
              __perspectiveFX: !1,
              __smartComponentFX: !0,
              __targetOpacity: 1,
              className: "framer-1rz1waw-container",
              "data-framer-name": "InProgress",
              layoutDependency: k,
              layoutId: "bigjQiF6A-container",
              name: "InProgress",
              children: e(gt, {
                alignmentBaseline: "bottom",
                animate: !1,
                animateDuration: 5,
                animateEnd: 150,
                animateStart: -50,
                color:
                  'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                cylinderHeight: 0,
                flip: !0,
                font: {
                  fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  letterSpacing: "0.01em",
                  lineHeight: "1em",
                },
                height: "100%",
                id: "bigjQiF6A",
                layoutId: "bigjQiF6A",
                name: "InProgress",
                rotate: !0,
                rotateSpeed: 2,
                slots: [],
                startOffset: 0,
                style: { height: "100%", width: "100%" },
                text: "\u25CF ONGOING \u25CF ONGOING",
                type: "circle",
                width: "100%",
                wordSpacing: 0,
              }),
            }),
            e(Bi, {
              __framer__loop: as,
              __framer__loopEffectEnabled: !0,
              __framer__loopRepeatDelay: 0,
              __framer__loopRepeatType: "loop",
              __framer__loopTransition: rs,
              __perspectiveFX: !1,
              __smartComponentFX: !0,
              __targetOpacity: 1,
              className: "framer-v68usu",
              "data-framer-name": "Center",
              layoutDependency: k,
              layoutId: "iFkpTAQNc",
              style: {
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              },
              transformTemplate: ns,
              children: e(ae, {
                className: "framer-1bsmh8a",
                "data-framer-name": "graphic",
                layout: "position",
                layoutDependency: k,
                layoutId: "zHKa0wGEO",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56"><path d="M 23.5 7.983 C 26.285 6.375 29.715 6.375 32.5 7.983 L 43.085 14.094 C 45.87 15.702 47.585 18.673 47.585 21.888 L 47.585 34.112 C 47.585 37.327 45.87 40.298 43.085 41.906 L 32.5 48.017 C 29.715 49.625 26.285 49.625 23.5 48.017 L 12.915 41.906 C 10.13 40.298 8.415 37.327 8.415 34.112 L 8.415 21.888 C 8.415 18.673 10.13 15.702 12.915 14.094 Z M 25.846 36.612 C 25.846 37.209 26.33 37.692 26.926 37.692 L 29.074 37.692 C 29.67 37.692 30.154 37.209 30.154 36.612 L 30.154 19.388 C 30.154 18.791 29.67 18.308 29.074 18.308 L 26.926 18.308 C 26.33 18.308 25.846 18.791 25.846 19.388 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                svgContentId: 2352495373,
                withExternalLayout: !0,
              }),
            }),
          ],
        }),
      }),
    });
  }),
  ms = [
    '.framer-vmej5[data-border="true"]::after, .framer-vmej5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-vmej5.framer-d69l00, .framer-vmej5 .framer-d69l00 { display: block; }",
    ".framer-vmej5.framer-162cfys { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; width: 100px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-vmej5 .framer-1rz1waw-container { aspect-ratio: 1 / 1; flex: none; height: 76%; position: relative; width: var(--framer-aspect-ratio-supported, 61px); z-index: 1; }",
    ".framer-vmej5 .framer-v68usu { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 55px); justify-content: center; left: 50%; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: 50%; width: 55%; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-vmej5 .framer-1bsmh8a { flex: none; height: 56px; position: relative; width: 56px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vmej5.framer-162cfys, .framer-vmej5 .framer-v68usu { gap: 0px; } .framer-vmej5.framer-162cfys > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-vmej5.framer-162cfys > :first-child { margin-top: 0px; } .framer-vmej5.framer-162cfys > :last-child { margin-bottom: 0px; } .framer-vmej5 .framer-v68usu > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-vmej5 .framer-v68usu > :first-child { margin-left: 0px; } .framer-vmej5 .framer-v68usu > :last-child { margin-right: 0px; } }",
  ],
  hr = U(ls, ms, "framer-vmej5"),
  ya = hr;
hr.displayName = "Home/SealPROGRESS";
hr.defaultProps = { height: 100, width: 100 };
X(hr, [
  {
    family: "Satoshi",
    style: "normal",
    url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
    weight: "700",
  },
  ...Qo,
]);
var ds = N(ya),
  cs = N(ua),
  ps = N(ra),
  hs = N(It),
  us = On(a.div),
  ys = N(ta),
  gs = { NkHyS93wC: { hover: !0 }, RDED3Lnu2: { hover: !0 } },
  xs = [
    "LuRtDD_l2",
    "RDED3Lnu2",
    "BCHeYDnwo",
    "O4hKJ0RXd",
    "NkHyS93wC",
    "u0cG5shRy",
    "GRJqh10wy",
    "l8e7esFmI",
    "xgckLOIrc",
  ],
  vs = "framer-yLcFn",
  ws = {
    BCHeYDnwo: "framer-v-6i2hzc",
    GRJqh10wy: "framer-v-1qwo05l",
    l8e7esFmI: "framer-v-l6pb76",
    LuRtDD_l2: "framer-v-ghqpc5",
    NkHyS93wC: "framer-v-1xdkaha",
    O4hKJ0RXd: "framer-v-a8kl7d",
    RDED3Lnu2: "framer-v-mkyc60",
    u0cG5shRy: "framer-v-nr69pw",
    xgckLOIrc: "framer-v-5adt8m",
  };
function ot(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var bs = { damping: 28, delay: 0, mass: 1, stiffness: 170, type: "spring" },
  ga = (t, r) =>
    typeof t == "string" && typeof r == "string"
      ? t.toLowerCase() === r.toLowerCase()
      : t === r,
  ks = (t) => !t,
  Cs = (t, r) => `translate(-50%, -50%) ${r}`,
  Ye = (t) =>
    typeof t == "object" && t !== null && typeof t.src == "string"
      ? t
      : typeof t == "string"
        ? { src: t }
        : void 0,
  Xi = (t, r) => `translateX(-50%) ${r}`,
  xa = (t, r) => `translateY(-50%) ${r}`,
  Rs = { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
  Mi = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  _s = a(w),
  Ds = { InProgress: "DV2AnUHs0", New: "cktrhVVKi", None: "mJ2ilmNEO" },
  Ls = {
    Desktop_Detail: "RDED3Lnu2",
    Desktop_Play: "xgckLOIrc",
    Desktop_Spotlight: "BCHeYDnwo",
    Desktop: "LuRtDD_l2",
    Phone_Detail: "GRJqh10wy",
    Phone: "l8e7esFmI",
    Tablet_Detail: "NkHyS93wC",
    Tablet_Spotlight: "u0cG5shRy",
    Tablet: "O4hKJ0RXd",
  },
  Is = ({
    cursor: t,
    date: r,
    detail: i,
    height: n,
    id: o,
    image: f,
    link: s,
    size: C,
    status: b,
    subtitle: D,
    title: l,
    video: c,
    videoUrl: _,
    width: F,
    ...I
  }) => {
    var h, k, L, g, j, d, R, u, Q, G, K, J;
    return {
      ...I,
      AEtlhULHf: t ?? I.AEtlhULHf,
      CBgsI8HqG:
        (h = i ?? I.CBgsI8HqG) !== null && h !== void 0
          ? h
          : "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout,",
      F2HMfFnC4:
        (g =
          (L = (k = Ds[b]) !== null && k !== void 0 ? k : b) !== null &&
          L !== void 0
            ? L
            : I.F2HMfFnC4) !== null && g !== void 0
          ? g
          : "DV2AnUHs0",
      mprw3Vg7j:
        (j = f ?? I.mprw3Vg7j) !== null && j !== void 0
          ? j
          : {
              src: "https://framerusercontent.com/images/jtfrNdMevUAdtkPnUdmmF3R9KE.jpg?scale-down-to=1024",
              srcSet:
                "https://framerusercontent.com/images/jtfrNdMevUAdtkPnUdmmF3R9KE.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/jtfrNdMevUAdtkPnUdmmF3R9KE.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/jtfrNdMevUAdtkPnUdmmF3R9KE.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/jtfrNdMevUAdtkPnUdmmF3R9KE.jpg 3684w",
            },
      n5hT9RT2l:
        (d = D ?? I.n5hT9RT2l) !== null && d !== void 0 ? d : "Web Design",
      QQeU4zxc7:
        (R = _ ?? I.QQeU4zxc7) !== null && R !== void 0
          ? R
          : "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
      rIRTxctbq: (u = C ?? I.rIRTxctbq) !== null && u !== void 0 ? u : 128,
      szafOWPaS: (Q = r ?? I.szafOWPaS) !== null && Q !== void 0 ? Q : "2023",
      UdC1xJKal: c ?? I.UdC1xJKal,
      variant:
        (K = (G = Ls[I.variant]) !== null && G !== void 0 ? G : I.variant) !==
          null && K !== void 0
          ? K
          : "LuRtDD_l2",
      wNpLyCwPV: s ?? I.wNpLyCwPV,
      y3xvU3Dlj:
        (J = l ?? I.y3xvU3Dlj) !== null && J !== void 0
          ? J
          : "The Project Name",
    };
  },
  Fs = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Ns = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        mprw3Vg7j: b,
        y3xvU3Dlj: D,
        rIRTxctbq: l,
        n5hT9RT2l: c,
        CBgsI8HqG: _,
        szafOWPaS: F,
        UdC1xJKal: I,
        QQeU4zxc7: h,
        F2HMfFnC4: k,
        AEtlhULHf: L,
        wNpLyCwPV: g,
        ...j
      } = Is(t),
      {
        baseVariant: d,
        classNames: R,
        clearLoadingGesture: u,
        gestureHandlers: Q,
        gestureVariant: G,
        isLoading: K,
        setGestureState: J,
        setVariant: Z,
        variants: E,
      } = A({
        cycleOrder: xs,
        defaultVariant: "LuRtDD_l2",
        enabledGestures: gs,
        variant: C,
        variantClassNames: ws,
      }),
      x = Fs(t, E),
      O = T(null),
      y = ks(ga(k, "mJ2ilmNEO")),
      ue = ga(k, "DV2AnUHs0"),
      ye = ga(k, "cktrhVVKi"),
      we = () =>
        !!(
          ["RDED3Lnu2-hover", "NkHyS93wC-hover"].includes(G) ||
          [
            "RDED3Lnu2",
            "BCHeYDnwo",
            "NkHyS93wC",
            "u0cG5shRy",
            "xgckLOIrc",
          ].includes(d)
        ),
      ze = () =>
        !!(
          ["RDED3Lnu2-hover", "NkHyS93wC-hover"].includes(G) ||
          ["RDED3Lnu2", "NkHyS93wC", "xgckLOIrc"].includes(d)
        ),
      Je = () => !(G === "NkHyS93wC-hover" || d === "NkHyS93wC"),
      Pe = () => G === "NkHyS93wC-hover" || d === "NkHyS93wC",
      Ue = () =>
        !!(
          ["RDED3Lnu2-hover", "NkHyS93wC-hover"].includes(G) ||
          [
            "RDED3Lnu2",
            "BCHeYDnwo",
            "NkHyS93wC",
            "u0cG5shRy",
            "GRJqh10wy",
            "l8e7esFmI",
            "xgckLOIrc",
          ].includes(d)
        ),
      mt = () =>
        !(
          ["RDED3Lnu2-hover", "NkHyS93wC-hover"].includes(G) ||
          ["RDED3Lnu2", "NkHyS93wC", "l8e7esFmI", "xgckLOIrc"].includes(d)
        ),
      Ze = () => d !== "xgckLOIrc",
      be = () =>
        !(
          ["RDED3Lnu2-hover", "NkHyS93wC-hover"].includes(G) ||
          ["RDED3Lnu2", "NkHyS93wC", "l8e7esFmI"].includes(d)
        ),
      ke = () =>
        !["BCHeYDnwo", "u0cG5shRy", "GRJqh10wy", "l8e7esFmI"].includes(d),
      Ge = () =>
        !(
          ["RDED3Lnu2-hover", "NkHyS93wC-hover"].includes(G) ||
          [
            "RDED3Lnu2",
            "BCHeYDnwo",
            "NkHyS93wC",
            "u0cG5shRy",
            "GRJqh10wy",
            "l8e7esFmI",
            "xgckLOIrc",
          ].includes(d)
        ),
      qe = H(),
      Xe = [dr, wi, gi, yt],
      he = re();
    return e(z, {
      id: s ?? qe,
      children: e(_s, {
        animate: E,
        initial: !1,
        children: e(Mi, {
          value: bs,
          children: e(Dt, {
            href: g,
            openInNewTab: !1,
            smoothScroll: !1,
            children: p(a.a, {
              ...j,
              ...Q,
              className: `${V(vs, ...Xe, "framer-ghqpc5", f, R)} framer-1idlbsq`,
              "data-framer-cursor": L,
              "data-framer-name": "Desktop",
              layoutDependency: x,
              layoutId: "LuRtDD_l2",
              ref: r ?? O,
              style: { ...o },
              ...ot(
                {
                  "NkHyS93wC-hover": { "data-framer-name": void 0 },
                  "RDED3Lnu2-hover": { "data-framer-name": void 0 },
                  BCHeYDnwo: { "data-framer-name": "Desktop_Spotlight" },
                  GRJqh10wy: { "data-framer-name": "Phone_Detail" },
                  l8e7esFmI: { "data-framer-name": "Phone" },
                  NkHyS93wC: { "data-framer-name": "Tablet_Detail" },
                  O4hKJ0RXd: { "data-framer-name": "Tablet" },
                  RDED3Lnu2: { "data-framer-name": "Desktop_Detail" },
                  u0cG5shRy: { "data-framer-name": "Tablet_Spotlight" },
                  xgckLOIrc: { "data-framer-name": "Desktop_Play" },
                },
                d,
                G,
              ),
              children: [
                p(us, {
                  className: "framer-1ourw5g",
                  "data-framer-name": "Cover",
                  layoutDependency: x,
                  layoutId: "iRH8JhebQ",
                  style: {
                    backgroundColor:
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                    borderBottomLeftRadius: 36,
                    borderBottomRightRadius: 36,
                    borderTopLeftRadius: 36,
                    borderTopRightRadius: 36,
                  },
                  children: [
                    y &&
                      p(a.div, {
                        className: "framer-4w86oo",
                        "data-framer-name": "Seal",
                        layoutDependency: x,
                        layoutId: "bQXv_mfOI",
                        children: [
                          ue &&
                            e(v, {
                              children: e(a.div, {
                                className: "framer-15bqvzv-container",
                                layoutDependency: x,
                                layoutId: "K6E0h3wX1-container",
                                children: e(ya, {
                                  height: "100%",
                                  id: "K6E0h3wX1",
                                  layoutId: "K6E0h3wX1",
                                  width: "100%",
                                }),
                              }),
                            }),
                          ye &&
                            e(v, {
                              children: e(a.div, {
                                className: "framer-tk5g10-container",
                                layoutDependency: x,
                                layoutId: "WNNyMuD1T-container",
                                children: e(ua, {
                                  height: "100%",
                                  id: "WNNyMuD1T",
                                  layoutId: "WNNyMuD1T",
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                        ],
                      }),
                    p(a.div, {
                      className: "framer-vkwc9u",
                      "data-framer-name": "Media",
                      layoutDependency: x,
                      layoutId: "Wjo79kWY2",
                      style: {
                        borderBottomLeftRadius: 28,
                        borderBottomRightRadius: 28,
                        borderTopLeftRadius: 28,
                        borderTopRightRadius: 28,
                      },
                      children: [
                        we() &&
                          e(v, {
                            children: e(a.div, {
                              className: "framer-1td9vv0-container",
                              layoutDependency: x,
                              layoutId: "iCTtgmQp2-container",
                              style: { opacity: 1 },
                              transformTemplate: Cs,
                              variants: {
                                "NkHyS93wC-hover": { opacity: 0 },
                                "RDED3Lnu2-hover": { opacity: 0 },
                              },
                              children: e(ra, {
                                height: "100%",
                                id: "iCTtgmQp2",
                                layoutId: "iCTtgmQp2",
                                q8CEoMexq: "Loading media",
                                variant: "jNeCYogxP",
                                width: "100%",
                              }),
                            }),
                          }),
                        e(Lt, {
                          background: {
                            alt: "",
                            fit: "fill",
                            sizes: "784px",
                            ...Ye(b),
                          },
                          className: "framer-gupn37",
                          "data-framer-name": "Image",
                          layoutDependency: x,
                          layoutId: "eDucXYolO",
                          style: { opacity: 1 },
                          transformTemplate: Xi,
                          variants: {
                            "NkHyS93wC-hover": { opacity: 0 },
                            "RDED3Lnu2-hover": { opacity: 0 },
                          },
                          ...ot(
                            {
                              "NkHyS93wC-hover": { transformTemplate: void 0 },
                              "RDED3Lnu2-hover": { transformTemplate: void 0 },
                              BCHeYDnwo: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  sizes: "655px",
                                  ...Ye(b),
                                },
                              },
                              GRJqh10wy: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  sizes: `calc(${he?.width || "100vw"} + 17px)`,
                                  ...Ye(b),
                                },
                                transformTemplate: xa,
                              },
                              l8e7esFmI: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  sizes: `calc(${he?.width || "100vw"} + 86px)`,
                                  ...Ye(b),
                                },
                                transformTemplate: xa,
                              },
                              NkHyS93wC: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  sizes: `calc(${he?.width || "100vw"} + 24px)`,
                                  ...Ye(b),
                                },
                                transformTemplate: void 0,
                              },
                              RDED3Lnu2: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  sizes: `calc(${he?.width || "100vw"} + 24px)`,
                                  ...Ye(b),
                                },
                                transformTemplate: void 0,
                              },
                              u0cG5shRy: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  sizes: "655px",
                                  ...Ye(b),
                                },
                              },
                              xgckLOIrc: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  sizes: `calc(${he?.width || "100vw"} + 24px)`,
                                  ...Ye(b),
                                },
                                transformTemplate: void 0,
                              },
                            },
                            d,
                            G,
                          ),
                        }),
                        I &&
                          e(v, {
                            children: e(a.div, {
                              className: "framer-nubuym-container",
                              layoutDependency: x,
                              layoutId: "Y9IWApvxe-container",
                              style: { opacity: 1 },
                              transformTemplate: Xi,
                              variants: {
                                "NkHyS93wC-hover": { opacity: 0 },
                                "RDED3Lnu2-hover": { opacity: 0 },
                              },
                              ...ot(
                                {
                                  "NkHyS93wC-hover": {
                                    transformTemplate: void 0,
                                  },
                                  "RDED3Lnu2-hover": {
                                    transformTemplate: void 0,
                                  },
                                  GRJqh10wy: { transformTemplate: xa },
                                  l8e7esFmI: { transformTemplate: void 0 },
                                  NkHyS93wC: { transformTemplate: void 0 },
                                  RDED3Lnu2: { transformTemplate: void 0 },
                                  xgckLOIrc: { transformTemplate: void 0 },
                                },
                                d,
                                G,
                              ),
                              children: e(It, {
                                height: "100%",
                                id: "Y9IWApvxe",
                                layoutId: "Y9IWApvxe",
                                radius: 0,
                                style: { height: "100%", width: "100%" },
                                tint: "var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0))",
                                url: h,
                                width: "100%",
                              }),
                            }),
                          }),
                        ze() &&
                          p(a.div, {
                            className: "framer-1dezoao",
                            "data-framer-name": "En",
                            layoutDependency: x,
                            layoutId: "I3vEnXI5V",
                            style: {
                              backgroundColor: "rgb(255, 255, 255)",
                              borderBottomLeftRadius: 20,
                              borderBottomRightRadius: 20,
                              borderTopLeftRadius: 20,
                              borderTopRightRadius: 20,
                              opacity: 0,
                            },
                            variants: {
                              "NkHyS93wC-hover": { opacity: 1 },
                              "RDED3Lnu2-hover": { opacity: 1 },
                              NkHyS93wC: {
                                backgroundColor:
                                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                              },
                              RDED3Lnu2: {
                                backgroundColor:
                                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                              },
                              xgckLOIrc: {
                                backgroundColor:
                                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                              },
                            },
                            children: [
                              Je() &&
                                e(a.div, {
                                  className: "framer-z57asx",
                                  layoutDependency: x,
                                  layoutId: "XsnRT2U8Q",
                                  style: {
                                    backgroundColor:
                                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                    borderBottomLeftRadius: 48,
                                    borderBottomRightRadius: 48,
                                    borderTopLeftRadius: 48,
                                    borderTopRightRadius: 48,
                                  },
                                  children: e(te, {
                                    __fromCanvasComponent: !0,
                                    children: e(w, {
                                      children: e(a.p, {
                                        className:
                                          "framer-styles-preset-1nr6prh",
                                        "data-styles-preset": "uRhxzqfGc",
                                        style: {
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                                        },
                                        children:
                                          "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout,",
                                      }),
                                    }),
                                    className: "framer-19w9b0z",
                                    "data-framer-name": "Long",
                                    fonts: ["Inter"],
                                    layoutDependency: x,
                                    layoutId: "eQLS_ZCXx",
                                    style: {
                                      "--extracted-r6o4lv":
                                        "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                      "--framer-link-text-color":
                                        "rgb(0, 153, 255)",
                                      "--framer-link-text-decoration":
                                        "underline",
                                    },
                                    text: _,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...ot(
                                      { xgckLOIrc: { text: void 0 } },
                                      d,
                                      G,
                                    ),
                                  }),
                                }),
                              Pe() &&
                                e(a.div, {
                                  className: "framer-1u9ns5i",
                                  layoutDependency: x,
                                  layoutId: "yoCaEc7lw",
                                  style: {
                                    backgroundColor:
                                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                    borderBottomLeftRadius: 48,
                                    borderBottomRightRadius: 48,
                                    borderTopLeftRadius: 48,
                                    borderTopRightRadius: 48,
                                  },
                                  children: e(te, {
                                    __fromCanvasComponent: !0,
                                    children: e(w, {
                                      children: e(a.p, {
                                        className:
                                          "framer-styles-preset-1nr6prh",
                                        "data-styles-preset": "uRhxzqfGc",
                                        style: {
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                                        },
                                        children:
                                          "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout,",
                                      }),
                                    }),
                                    className: "framer-1ghsyum",
                                    "data-framer-name": "Long",
                                    fonts: ["Inter"],
                                    layoutDependency: x,
                                    layoutId: "W4c7eAPgg",
                                    style: {
                                      "--extracted-r6o4lv":
                                        "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                      "--framer-link-text-color":
                                        "rgb(0, 153, 255)",
                                      "--framer-link-text-decoration":
                                        "underline",
                                    },
                                    text: _,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                            ],
                          }),
                      ],
                    }),
                    Ue() &&
                      e(Mi, {
                        value: Rs,
                        children: p(a.div, {
                          className: "framer-1apgqc6",
                          "data-framer-name": "Text",
                          layoutDependency: x,
                          layoutId: "ERhErUAnV",
                          children: [
                            p(a.div, {
                              className: "framer-f50dec",
                              "data-framer-name": "En",
                              layoutDependency: x,
                              layoutId: "XkVppH5wK",
                              children: [
                                e(te, {
                                  __fromCanvasComponent: !0,
                                  children: e(w, {
                                    children: e(a.h4, {
                                      className: "framer-styles-preset-s9s357",
                                      "data-styles-preset": "S7LK1M03a",
                                      children: "The Project Name",
                                    }),
                                  }),
                                  className: "framer-1267ep3",
                                  fonts: ["Inter"],
                                  layoutDependency: x,
                                  layoutId: "awDOTdHgA",
                                  style: {
                                    "--framer-link-text-color":
                                      "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration":
                                      "underline",
                                  },
                                  text: D,
                                  variants: {
                                    BCHeYDnwo: {
                                      "--extracted-1eung3n":
                                        "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                                    },
                                    u0cG5shRy: {
                                      "--extracted-1eung3n":
                                        "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                                    },
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...ot(
                                    {
                                      BCHeYDnwo: {
                                        children: e(w, {
                                          children: e(a.h4, {
                                            className:
                                              "framer-styles-preset-s9s357",
                                            "data-styles-preset": "S7LK1M03a",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-1eung3n, var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)))",
                                            },
                                            children: "The Project Name",
                                          }),
                                        }),
                                      },
                                      u0cG5shRy: {
                                        children: e(w, {
                                          children: e(a.h4, {
                                            className:
                                              "framer-styles-preset-s9s357",
                                            "data-styles-preset": "S7LK1M03a",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-1eung3n, var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)))",
                                            },
                                            children: "The Project Name",
                                          }),
                                        }),
                                      },
                                    },
                                    d,
                                    G,
                                  ),
                                }),
                                mt() &&
                                  e(te, {
                                    __fromCanvasComponent: !0,
                                    children: e(w, {
                                      children: e(a.p, {
                                        className:
                                          "framer-styles-preset-1nr6prh",
                                        "data-styles-preset": "uRhxzqfGc",
                                        children:
                                          "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout,",
                                      }),
                                    }),
                                    className: "framer-i71vhh",
                                    "data-framer-name": "Long",
                                    fonts: ["Inter"],
                                    layoutDependency: x,
                                    layoutId: "ZJWXIxog4",
                                    style: {
                                      "--framer-link-text-color":
                                        "rgb(0, 153, 255)",
                                      "--framer-link-text-decoration":
                                        "underline",
                                      opacity: 0.7,
                                    },
                                    text: _,
                                    variants: {
                                      BCHeYDnwo: {
                                        "--extracted-a0htzi":
                                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                        opacity: 1,
                                      },
                                      u0cG5shRy: { opacity: 1 },
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...ot(
                                      {
                                        BCHeYDnwo: {
                                          children: e(w, {
                                            children: e(a.h3, {
                                              className:
                                                "framer-styles-preset-1k07u1u",
                                              "data-styles-preset": "nFsKlHIkr",
                                              style: {
                                                "--framer-text-color":
                                                  "var(--extracted-a0htzi, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                                              },
                                              children:
                                                "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout,",
                                            }),
                                          }),
                                        },
                                        u0cG5shRy: {
                                          children: e(w, {
                                            children: e(a.h3, {
                                              className:
                                                "framer-styles-preset-1k07u1u",
                                              "data-styles-preset": "nFsKlHIkr",
                                              children:
                                                "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout,",
                                            }),
                                          }),
                                        },
                                      },
                                      d,
                                      G,
                                    ),
                                  }),
                              ],
                            }),
                            Ze() &&
                              p(a.div, {
                                className: "framer-15dvqnl",
                                layoutDependency: x,
                                layoutId: "T78nGNwIG",
                                style: {
                                  background:
                                    "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%)",
                                  borderBottomRightRadius: 0,
                                  opacity: 1,
                                },
                                variants: {
                                  "NkHyS93wC-hover": { opacity: 0 },
                                  BCHeYDnwo: {
                                    background:
                                      'linear-gradient(90deg, var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0)) /* {"name":"White 0"} */ 0%, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {"name":"White 100"} */ 50%)',
                                  },
                                  GRJqh10wy: {
                                    background:
                                      'linear-gradient(180deg, var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0)) /* {"name":"White 0"} */ 0%, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {"name":"White 100"} */ 50%)',
                                  },
                                  l8e7esFmI: {
                                    background:
                                      'linear-gradient(90deg, var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0)) /* {"name":"White 0"} */ 0%, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {"name":"White 100"} */ 20%)',
                                    borderBottomRightRadius: 3,
                                  },
                                  NkHyS93wC: {
                                    background:
                                      'linear-gradient(90deg, var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0)) /* {"name":"White 0"} */ 0%, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {"name":"White 100"} */ 20%)',
                                  },
                                  RDED3Lnu2: {
                                    background:
                                      'linear-gradient(90deg, var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0)) /* {"name":"White 0"} */ 0%, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {"name":"White 100"} */ 20%)',
                                  },
                                  u0cG5shRy: {
                                    background:
                                      'linear-gradient(90deg, var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0)) /* {"name":"White 0"} */ 0%, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {"name":"White 100"} */ 50%)',
                                  },
                                },
                                children: [
                                  be() &&
                                    e(a.div, {
                                      className: "framer-18rqnvl",
                                      "data-framer-name": "Tag",
                                      layoutDependency: x,
                                      layoutId: "pithrmqPJ",
                                      style: {
                                        backgroundColor:
                                          "var(--token-d7734951-9ca4-4e4e-998a-b8f30cce2eed, rgb(0, 0, 0))",
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                      },
                                      children: e(te, {
                                        __fromCanvasComponent: !0,
                                        children: e(w, {
                                          children: e(a.p, {
                                            className:
                                              "framer-styles-preset-9jlebu",
                                            "data-styles-preset": "sSyE5_N0_",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                            },
                                            children: "Web Design",
                                          }),
                                        }),
                                        className: "framer-gnmaai",
                                        fonts: ["Inter"],
                                        layoutDependency: x,
                                        layoutId: "CxypYD5PD",
                                        style: {
                                          "--extracted-r6o4lv":
                                            "rgb(255, 255, 255)",
                                          "--framer-link-text-color":
                                            "rgb(0, 153, 255)",
                                          "--framer-link-text-decoration":
                                            "underline",
                                        },
                                        text: c,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  e(a.div, {
                                    className: "framer-1vm2aip",
                                    "data-framer-name": "Date",
                                    layoutDependency: x,
                                    layoutId: "U7qQQQPQ9",
                                    style: {
                                      borderBottomLeftRadius: 20,
                                      borderBottomRightRadius: 20,
                                      borderTopLeftRadius: 20,
                                      borderTopRightRadius: 20,
                                      opacity: 1,
                                    },
                                    variants: {
                                      "RDED3Lnu2-hover": { opacity: 0 },
                                    },
                                    children: e(te, {
                                      __fromCanvasComponent: !0,
                                      children: e(w, {
                                        children: e(a.p, {
                                          className:
                                            "framer-styles-preset-9jlebu",
                                          "data-styles-preset": "sSyE5_N0_",
                                          style: {
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)))",
                                          },
                                          children: "2023",
                                        }),
                                      }),
                                      className: "framer-fig0mw",
                                      fonts: ["Inter"],
                                      layoutDependency: x,
                                      layoutId: "RaaC2RTR1",
                                      style: {
                                        "--extracted-r6o4lv":
                                          "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                                        "--framer-link-text-color":
                                          "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration":
                                          "underline",
                                      },
                                      text: F,
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ke() &&
                              e(a.div, {
                                className: "framer-1shx7s2",
                                "data-framer-name": "Tag",
                                layoutDependency: x,
                                layoutId: "t1VRfq0e0",
                                style: {
                                  backgroundColor:
                                    "var(--token-d7734951-9ca4-4e4e-998a-b8f30cce2eed, rgb(0, 0, 0))",
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                  opacity: 1,
                                },
                                variants: {
                                  "NkHyS93wC-hover": { opacity: 1 },
                                  "RDED3Lnu2-hover": { opacity: 1 },
                                  NkHyS93wC: { opacity: 0 },
                                  RDED3Lnu2: { opacity: 0 },
                                },
                                children: e(te, {
                                  __fromCanvasComponent: !0,
                                  children: e(w, {
                                    children: e(a.p, {
                                      className: "framer-styles-preset-9jlebu",
                                      "data-styles-preset": "sSyE5_N0_",
                                      style: {
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                      },
                                      children: "Web Design",
                                    }),
                                  }),
                                  className: "framer-u15my",
                                  fonts: ["Inter"],
                                  layoutDependency: x,
                                  layoutId: "R4Oz7erR8",
                                  style: {
                                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                    "--framer-link-text-color":
                                      "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration":
                                      "underline",
                                  },
                                  text: c,
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                          ],
                        }),
                      }),
                  ],
                }),
                Ge() &&
                  e(v, {
                    children: e(a.div, {
                      className: "framer-1mgcnzo-container",
                      layoutDependency: x,
                      layoutId: "E3VwG5vgD-container",
                      children: e(ta, {
                        align: "flex-start",
                        bold: !0,
                        color: "rgb(255, 255, 255)",
                        delay: 0,
                        family: "'Cabinet Grotesk', sans-serif",
                        gap: 0.03,
                        height: "100%",
                        id: "E3VwG5vgD",
                        layoutId: "E3VwG5vgD",
                        lineheight: 1.2,
                        size: l,
                        status: !0,
                        style: { width: "100%" },
                        text_chn: D,
                        text: D,
                        type: "Word",
                        visible: "auto",
                        width: "100%",
                        ...ot({ O4hKJ0RXd: { align: "center" } }, d, G),
                      }),
                    }),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Ss = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-yLcFn.framer-1idlbsq, .framer-yLcFn .framer-1idlbsq { display: block; }",
    ".framer-yLcFn.framer-ghqpc5 { height: 600px; overflow: visible; position: relative; text-decoration: none; width: 800px; }",
    ".framer-yLcFn .framer-1ourw5g { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: flex-end; left: 0px; overflow: visible; padding: 8px; position: absolute; right: 0px; top: 0px; }",
    ".framer-yLcFn .framer-4w86oo { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: -20px; overflow: visible; padding: 0px; pointer-events: none; position: absolute; top: -20px; user-select: none; width: min-content; z-index: 2; }",
    ".framer-yLcFn .framer-15bqvzv-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-yLcFn .framer-tk5g10-container { flex: none; height: 100px; position: relative; width: 100px; }",
    ".framer-yLcFn .framer-vkwc9u { bottom: 8px; flex: none; left: 8px; overflow: hidden; position: absolute; right: 8px; top: 8px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-yLcFn .framer-1td9vv0-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; }",
    ".framer-yLcFn .framer-gupn37 { aspect-ratio: 1.3424657534246576 / 1; bottom: 0px; flex: none; left: 50%; overflow: hidden; position: absolute; top: 0px; width: var(--framer-aspect-ratio-supported, 784px); }",
    ".framer-yLcFn .framer-nubuym-container { aspect-ratio: 1.3424657534246576 / 1; bottom: -6px; flex: none; left: 50%; position: absolute; top: -6px; width: var(--framer-aspect-ratio-supported, 800px); }",
    ".framer-yLcFn .framer-1dezoao { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-yLcFn .framer-z57asx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 580px; overflow: visible; padding: 40px 24px 40px 24px; position: relative; width: 80%; }",
    ".framer-yLcFn .framer-19w9b0z, .framer-yLcFn .framer-1ghsyum { flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yLcFn .framer-1u9ns5i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 40px 24px 40px 24px; position: relative; width: 80%; }",
    ".framer-yLcFn .framer-1apgqc6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 200px; justify-content: space-between; overflow: hidden; padding: 0px 10px 10px 10px; position: relative; width: 100%; }",
    ".framer-yLcFn .framer-f50dec { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 450px; }",
    ".framer-yLcFn .framer-1267ep3, .framer-yLcFn .framer-gnmaai, .framer-yLcFn .framer-fig0mw, .framer-yLcFn .framer-u15my { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-yLcFn .framer-i71vhh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yLcFn .framer-15dvqnl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 1; }",
    ".framer-yLcFn .framer-18rqnvl, .framer-yLcFn .framer-1shx7s2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 6px 12px 6px 12px; position: relative; width: min-content; }",
    ".framer-yLcFn .framer-1vm2aip { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 12px 0px 12px; position: relative; width: min-content; }",
    ".framer-yLcFn .framer-1mgcnzo-container { bottom: 20px; flex: none; height: auto; left: -90px; mix-blend-mode: difference; pointer-events: none; position: absolute; right: 90px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yLcFn .framer-1ourw5g, .framer-yLcFn .framer-4w86oo, .framer-yLcFn .framer-1dezoao, .framer-yLcFn .framer-z57asx, .framer-yLcFn .framer-1u9ns5i, .framer-yLcFn .framer-f50dec, .framer-yLcFn .framer-15dvqnl, .framer-yLcFn .framer-18rqnvl, .framer-yLcFn .framer-1vm2aip, .framer-yLcFn .framer-1shx7s2 { gap: 0px; } .framer-yLcFn .framer-1ourw5g > *, .framer-yLcFn .framer-z57asx > *, .framer-yLcFn .framer-1u9ns5i > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-yLcFn .framer-1ourw5g > :first-child, .framer-yLcFn .framer-1dezoao > :first-child, .framer-yLcFn .framer-z57asx > :first-child, .framer-yLcFn .framer-1u9ns5i > :first-child, .framer-yLcFn .framer-f50dec > :first-child { margin-top: 0px; } .framer-yLcFn .framer-1ourw5g > :last-child, .framer-yLcFn .framer-1dezoao > :last-child, .framer-yLcFn .framer-z57asx > :last-child, .framer-yLcFn .framer-1u9ns5i > :last-child, .framer-yLcFn .framer-f50dec > :last-child { margin-bottom: 0px; } .framer-yLcFn .framer-4w86oo > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-yLcFn .framer-4w86oo > :first-child, .framer-yLcFn .framer-15dvqnl > :first-child, .framer-yLcFn .framer-18rqnvl > :first-child, .framer-yLcFn .framer-1vm2aip > :first-child, .framer-yLcFn .framer-1shx7s2 > :first-child { margin-left: 0px; } .framer-yLcFn .framer-4w86oo > :last-child, .framer-yLcFn .framer-15dvqnl > :last-child, .framer-yLcFn .framer-18rqnvl > :last-child, .framer-yLcFn .framer-1vm2aip > :last-child, .framer-yLcFn .framer-1shx7s2 > :last-child { margin-right: 0px; } .framer-yLcFn .framer-1dezoao > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-yLcFn .framer-f50dec > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-yLcFn .framer-15dvqnl > *, .framer-yLcFn .framer-18rqnvl > *, .framer-yLcFn .framer-1vm2aip > *, .framer-yLcFn .framer-1shx7s2 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-yLcFn.framer-v-mkyc60.framer-ghqpc5, .framer-yLcFn.framer-v-1xdkaha.framer-ghqpc5 { cursor: pointer; width: 550px; }",
    ".framer-yLcFn.framer-v-mkyc60 .framer-1ourw5g, .framer-yLcFn.framer-v-1xdkaha .framer-1ourw5g, .framer-yLcFn.framer-v-1qwo05l .framer-1ourw5g, .framer-yLcFn.framer-v-5adt8m .framer-1ourw5g { justify-content: flex-start; }",
    ".framer-yLcFn.framer-v-mkyc60 .framer-4w86oo, .framer-yLcFn.framer-v-6i2hzc .framer-4w86oo, .framer-yLcFn.framer-v-1xdkaha .framer-4w86oo, .framer-yLcFn.framer-v-nr69pw .framer-4w86oo, .framer-yLcFn.framer-v-5adt8m .framer-4w86oo { left: 20px; top: 20px; }",
    ".framer-yLcFn.framer-v-mkyc60 .framer-vkwc9u, .framer-yLcFn.framer-v-a8kl7d .framer-vkwc9u, .framer-yLcFn.framer-v-1xdkaha .framer-vkwc9u, .framer-yLcFn.framer-v-l6pb76 .framer-vkwc9u, .framer-yLcFn.framer-v-5adt8m .framer-vkwc9u { bottom: unset; flex: 1 0 0px; height: 1px; left: unset; position: relative; right: unset; top: unset; width: 100%; }",
    ".framer-yLcFn.framer-v-mkyc60 .framer-gupn37, .framer-yLcFn.framer-v-1xdkaha .framer-gupn37, .framer-yLcFn.framer-v-1xdkaha .framer-nubuym-container, .framer-yLcFn.framer-v-5adt8m .framer-gupn37 { aspect-ratio: unset; bottom: -20px; left: -20px; right: -20px; top: -20px; width: unset; }",
    ".framer-yLcFn.framer-v-mkyc60 .framer-nubuym-container, .framer-yLcFn.framer-v-5adt8m .framer-nubuym-container { aspect-ratio: unset; bottom: -20px; left: -20px; right: -20px; top: -16px; width: unset; }",
    ".framer-yLcFn.framer-v-mkyc60 .framer-1apgqc6, .framer-yLcFn.framer-v-1xdkaha .framer-1apgqc6, .framer-yLcFn.framer-v-5adt8m .framer-1apgqc6 { align-content: center; align-items: center; flex-direction: row; height: min-content; padding: 4px 12px 10px 12px; }",
    ".framer-yLcFn.framer-v-mkyc60 .framer-f50dec, .framer-yLcFn.framer-v-1xdkaha .framer-f50dec, .framer-yLcFn.framer-v-5adt8m .framer-f50dec { gap: 2px; order: 2; width: min-content; }",
    ".framer-yLcFn.framer-v-mkyc60 .framer-15dvqnl, .framer-yLcFn.framer-v-1xdkaha .framer-15dvqnl { bottom: 6px; flex: none; height: unset; order: 0; padding: 0px 10px 0px 20px; position: absolute; right: 0px; top: 3px; }",
    ".framer-yLcFn.framer-v-mkyc60 .framer-1shx7s2, .framer-yLcFn.framer-v-1xdkaha .framer-1shx7s2, .framer-yLcFn.framer-v-5adt8m .framer-1shx7s2 { order: 1; position: absolute; right: 12px; top: 4px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yLcFn.framer-v-mkyc60 .framer-1apgqc6, .framer-yLcFn.framer-v-mkyc60 .framer-f50dec { gap: 0px; } .framer-yLcFn.framer-v-mkyc60 .framer-1apgqc6 > *, .framer-yLcFn.framer-v-mkyc60 .framer-1apgqc6 > :first-child, .framer-yLcFn.framer-v-mkyc60 .framer-1apgqc6 > :last-child { margin: 0px; } .framer-yLcFn.framer-v-mkyc60 .framer-f50dec > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } .framer-yLcFn.framer-v-mkyc60 .framer-f50dec > :first-child { margin-top: 0px; } .framer-yLcFn.framer-v-mkyc60 .framer-f50dec > :last-child { margin-bottom: 0px; } }",
    ".framer-yLcFn.framer-v-6i2hzc.framer-ghqpc5 { width: 1140px; }",
    ".framer-yLcFn.framer-v-6i2hzc .framer-1ourw5g { flex-direction: row; gap: 12px; justify-content: flex-start; }",
    ".framer-yLcFn.framer-v-6i2hzc .framer-vkwc9u, .framer-yLcFn.framer-v-nr69pw .framer-vkwc9u { bottom: unset; flex: 1 0 0px; height: 100%; left: unset; position: relative; right: unset; top: unset; width: 1px; }",
    ".framer-yLcFn.framer-v-6i2hzc .framer-gupn37 { bottom: -20px; left: 50%; top: -20px; width: var(--framer-aspect-ratio-supported, 838px); }",
    ".framer-yLcFn.framer-v-6i2hzc .framer-nubuym-container, .framer-yLcFn.framer-v-nr69pw .framer-nubuym-container { bottom: -20px; left: 50%; top: -20px; width: var(--framer-aspect-ratio-supported, 832px); }",
    ".framer-yLcFn.framer-v-6i2hzc .framer-1apgqc6, .framer-yLcFn.framer-v-nr69pw .framer-1apgqc6 { flex: 0.75 0 0px; height: 100%; padding: 16px 16px 10px 12px; width: 1px; }",
    ".framer-yLcFn.framer-v-6i2hzc .framer-f50dec, .framer-yLcFn.framer-v-nr69pw .framer-f50dec { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; gap: 10px; height: 1px; padding: 0px 0px 40px 0px; width: 100%; }",
    ".framer-yLcFn.framer-v-6i2hzc .framer-1267ep3, .framer-yLcFn.framer-v-nr69pw .framer-1267ep3 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yLcFn.framer-v-6i2hzc .framer-15dvqnl, .framer-yLcFn.framer-v-nr69pw .framer-15dvqnl, .framer-yLcFn.framer-v-1qwo05l .framer-15dvqnl { flex: none; gap: unset; height: min-content; justify-content: space-between; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yLcFn.framer-v-6i2hzc .framer-1ourw5g, .framer-yLcFn.framer-v-6i2hzc .framer-f50dec, .framer-yLcFn.framer-v-6i2hzc .framer-15dvqnl { gap: 0px; } .framer-yLcFn.framer-v-6i2hzc .framer-1ourw5g > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-yLcFn.framer-v-6i2hzc .framer-1ourw5g > :first-child { margin-left: 0px; } .framer-yLcFn.framer-v-6i2hzc .framer-1ourw5g > :last-child { margin-right: 0px; } .framer-yLcFn.framer-v-6i2hzc .framer-f50dec > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-yLcFn.framer-v-6i2hzc .framer-f50dec > :first-child { margin-top: 0px; } .framer-yLcFn.framer-v-6i2hzc .framer-f50dec > :last-child { margin-bottom: 0px; } .framer-yLcFn.framer-v-6i2hzc .framer-15dvqnl > *, .framer-yLcFn.framer-v-6i2hzc .framer-15dvqnl > :first-child, .framer-yLcFn.framer-v-6i2hzc .framer-15dvqnl > :last-child { margin: 0px; } }",
    ".framer-yLcFn.framer-v-a8kl7d.framer-ghqpc5 { height: 450px; width: 600px; }",
    ".framer-yLcFn.framer-v-a8kl7d .framer-4w86oo { left: -10px; top: -10px; }",
    ".framer-yLcFn.framer-v-a8kl7d .framer-gupn37 { aspect-ratio: 1.4113411341134114 / 1; bottom: -60px; top: -61px; }",
    ".framer-yLcFn.framer-v-a8kl7d .framer-nubuym-container { bottom: -59px; top: -59px; width: var(--framer-aspect-ratio-supported, 741px); }",
    ".framer-yLcFn.framer-v-a8kl7d .framer-1mgcnzo-container { bottom: 30px; left: 12px; right: 12px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yLcFn.framer-v-1xdkaha .framer-1apgqc6, .framer-yLcFn.framer-v-1xdkaha .framer-f50dec { gap: 0px; } .framer-yLcFn.framer-v-1xdkaha .framer-1apgqc6 > *, .framer-yLcFn.framer-v-1xdkaha .framer-1apgqc6 > :first-child, .framer-yLcFn.framer-v-1xdkaha .framer-1apgqc6 > :last-child { margin: 0px; } .framer-yLcFn.framer-v-1xdkaha .framer-f50dec > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } .framer-yLcFn.framer-v-1xdkaha .framer-f50dec > :first-child { margin-top: 0px; } .framer-yLcFn.framer-v-1xdkaha .framer-f50dec > :last-child { margin-bottom: 0px; } }",
    ".framer-yLcFn.framer-v-nr69pw.framer-ghqpc5 { width: 1130px; }",
    ".framer-yLcFn.framer-v-nr69pw .framer-1ourw5g { flex-direction: row; justify-content: flex-start; }",
    ".framer-yLcFn.framer-v-nr69pw .framer-gupn37 { bottom: -20px; left: 50%; top: -20px; width: var(--framer-aspect-ratio-supported, 854px); }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yLcFn.framer-v-nr69pw .framer-1ourw5g, .framer-yLcFn.framer-v-nr69pw .framer-f50dec, .framer-yLcFn.framer-v-nr69pw .framer-15dvqnl { gap: 0px; } .framer-yLcFn.framer-v-nr69pw .framer-1ourw5g > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-yLcFn.framer-v-nr69pw .framer-1ourw5g > :first-child { margin-left: 0px; } .framer-yLcFn.framer-v-nr69pw .framer-1ourw5g > :last-child { margin-right: 0px; } .framer-yLcFn.framer-v-nr69pw .framer-f50dec > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-yLcFn.framer-v-nr69pw .framer-f50dec > :first-child { margin-top: 0px; } .framer-yLcFn.framer-v-nr69pw .framer-f50dec > :last-child { margin-bottom: 0px; } .framer-yLcFn.framer-v-nr69pw .framer-15dvqnl > *, .framer-yLcFn.framer-v-nr69pw .framer-15dvqnl > :first-child, .framer-yLcFn.framer-v-nr69pw .framer-15dvqnl > :last-child { margin: 0px; } }",
    ".framer-yLcFn.framer-v-1qwo05l.framer-ghqpc5 { height: 415px; width: 380px; }",
    ".framer-yLcFn.framer-v-1qwo05l .framer-4w86oo, .framer-yLcFn.framer-v-l6pb76 .framer-4w86oo { left: 16px; top: 16px; }",
    ".framer-yLcFn.framer-v-1qwo05l .framer-vkwc9u { aspect-ratio: 1.5166666666666666 / 1; bottom: unset; height: var(--framer-aspect-ratio-supported, 132px); left: unset; position: relative; right: unset; top: unset; width: 100%; }",
    ".framer-yLcFn.framer-v-1qwo05l .framer-gupn37 { bottom: unset; height: var(--framer-aspect-ratio-supported, 296px); left: -16px; right: -17px; top: 50%; width: unset; }",
    ".framer-yLcFn.framer-v-1qwo05l .framer-nubuym-container { bottom: unset; height: var(--framer-aspect-ratio-supported, 296px); left: -17px; right: -17px; top: 50%; width: unset; }",
    ".framer-yLcFn.framer-v-1qwo05l .framer-1apgqc6 { flex: 1 0 0px; height: 1px; padding: 0px 8px 8px 8px; }",
    ".framer-yLcFn.framer-v-1qwo05l .framer-f50dec { align-content: flex-start; align-items: flex-start; gap: 2px; padding: 0px 0px 0px 4px; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yLcFn.framer-v-1qwo05l .framer-f50dec, .framer-yLcFn.framer-v-1qwo05l .framer-15dvqnl { gap: 0px; } .framer-yLcFn.framer-v-1qwo05l .framer-f50dec > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } .framer-yLcFn.framer-v-1qwo05l .framer-f50dec > :first-child { margin-top: 0px; } .framer-yLcFn.framer-v-1qwo05l .framer-f50dec > :last-child { margin-bottom: 0px; } .framer-yLcFn.framer-v-1qwo05l .framer-15dvqnl > *, .framer-yLcFn.framer-v-1qwo05l .framer-15dvqnl > :first-child, .framer-yLcFn.framer-v-1qwo05l .framer-15dvqnl > :last-child { margin: 0px; } }",
    ".framer-yLcFn.framer-v-l6pb76.framer-ghqpc5 { height: 450px; width: 450px; }",
    ".framer-yLcFn.framer-v-l6pb76 .framer-gupn37 { bottom: unset; height: var(--framer-aspect-ratio-supported, 399px); left: -50px; right: -52px; top: 50%; width: unset; }",
    ".framer-yLcFn.framer-v-l6pb76 .framer-nubuym-container { aspect-ratio: unset; bottom: unset; height: 399px; left: -51px; right: -51px; top: calc(49.87146529562984% - 399px / 2); width: unset; }",
    ".framer-yLcFn.framer-v-l6pb76 .framer-1apgqc6 { flex-direction: row; gap: 6px; height: min-content; justify-content: center; padding: 0px 2px 4px 8px; }",
    ".framer-yLcFn.framer-v-l6pb76 .framer-f50dec { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; gap: 0px; padding: 0px 0px 0px 4px; width: 1px; }",
    ".framer-yLcFn.framer-v-l6pb76 .framer-15dvqnl { bottom: 4px; flex: none; height: unset; padding: 0px 2px 0px 20px; position: absolute; right: 2px; top: 0px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yLcFn.framer-v-l6pb76 .framer-1apgqc6, .framer-yLcFn.framer-v-l6pb76 .framer-f50dec { gap: 0px; } .framer-yLcFn.framer-v-l6pb76 .framer-1apgqc6 > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-yLcFn.framer-v-l6pb76 .framer-1apgqc6 > :first-child { margin-left: 0px; } .framer-yLcFn.framer-v-l6pb76 .framer-1apgqc6 > :last-child { margin-right: 0px; } .framer-yLcFn.framer-v-l6pb76 .framer-f50dec > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-yLcFn.framer-v-l6pb76 .framer-f50dec > :first-child { margin-top: 0px; } .framer-yLcFn.framer-v-l6pb76 .framer-f50dec > :last-child { margin-bottom: 0px; } }",
    ".framer-yLcFn.framer-v-5adt8m.framer-ghqpc5 { width: 550px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yLcFn.framer-v-5adt8m .framer-1apgqc6, .framer-yLcFn.framer-v-5adt8m .framer-f50dec { gap: 0px; } .framer-yLcFn.framer-v-5adt8m .framer-1apgqc6 > *, .framer-yLcFn.framer-v-5adt8m .framer-1apgqc6 > :first-child, .framer-yLcFn.framer-v-5adt8m .framer-1apgqc6 > :last-child { margin: 0px; } .framer-yLcFn.framer-v-5adt8m .framer-f50dec > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } .framer-yLcFn.framer-v-5adt8m .framer-f50dec > :first-child { margin-top: 0px; } .framer-yLcFn.framer-v-5adt8m .framer-f50dec > :last-child { margin-bottom: 0px; } }",
    ".framer-yLcFn.framer-v-mkyc60.hover .framer-vkwc9u, .framer-yLcFn.framer-v-1xdkaha.hover .framer-vkwc9u { bottom: unset; left: unset; right: unset; top: unset; }",
    ".framer-yLcFn.framer-v-mkyc60.hover .framer-gupn37, .framer-yLcFn.framer-v-mkyc60.hover .framer-nubuym-container, .framer-yLcFn.framer-v-1xdkaha.hover .framer-gupn37, .framer-yLcFn.framer-v-1xdkaha.hover .framer-nubuym-container { aspect-ratio: unset; width: unset; }",
    ".framer-yLcFn.framer-v-mkyc60.hover .framer-15dvqnl, .framer-yLcFn.framer-v-1xdkaha.hover .framer-15dvqnl { height: unset; }",
    ...fr,
    ...vi,
    ...yi,
    ...ut,
  ],
  Ft = U(Ns, Ss, "framer-yLcFn"),
  Yi = Ft;
Ft.displayName = "Home/PrimaryCard2";
Ft.defaultProps = { height: 600, width: 800 };
P(Ft, {
  variant: {
    options: [
      "LuRtDD_l2",
      "RDED3Lnu2",
      "BCHeYDnwo",
      "O4hKJ0RXd",
      "NkHyS93wC",
      "u0cG5shRy",
      "GRJqh10wy",
      "l8e7esFmI",
      "xgckLOIrc",
    ],
    optionTitles: [
      "Desktop",
      "Desktop_Detail",
      "Desktop_Spotlight",
      "Tablet",
      "Tablet_Detail",
      "Tablet_Spotlight",
      "Phone_Detail",
      "Phone",
      "Desktop_Play",
    ],
    title: "Variant",
    type: m.Enum,
  },
  mprw3Vg7j: {
    __defaultAssetReference:
      "data:framer/asset-reference,jtfrNdMevUAdtkPnUdmmF3R9KE.jpg?originalFilename=photo-1523039918496-486825032d8a%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHw3fHxwdXJlfGVufDB8fHx8MTcwMTIzMTAwOHww%26ixlib%3Drb-4.0.jpg&preferredSize=auto",
    title: "Image",
    type: m.ResponsiveImage,
  },
  y3xvU3Dlj: {
    defaultValue: "The Project Name",
    displayTextArea: !1,
    title: "Title",
    type: m.String,
  },
  rIRTxctbq: {
    defaultValue: 128,
    displayStepper: !0,
    max: 300,
    min: 0,
    step: 1,
    title: "Size",
    type: m.Number,
  },
  n5hT9RT2l: {
    defaultValue: "Web Design",
    displayTextArea: !1,
    title: "Subtitle",
    type: m.String,
  },
  CBgsI8HqG: {
    defaultValue:
      "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout,",
    displayTextArea: !1,
    title: "Detail",
    type: m.String,
  },
  szafOWPaS: {
    defaultValue: "2023",
    displayTextArea: !1,
    title: "Date",
    type: m.String,
  },
  UdC1xJKal: { defaultValue: !1, title: "Video", type: m.Boolean },
  QQeU4zxc7: {
    defaultValue:
      "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
    placeholder: "../example.mp4",
    title: "Video Url",
    type: m.String,
  },
  F2HMfFnC4: {
    defaultValue: "DV2AnUHs0",
    options: ["mJ2ilmNEO", "DV2AnUHs0", "cktrhVVKi"],
    optionTitles: ["None", "InProgress", "New"],
    title: "Status",
    type: m.Enum,
  },
  AEtlhULHf: { title: "Cursor", type: m.CustomCursor },
  wNpLyCwPV: { title: "Link", type: m.Link },
});
X(
  Ft,
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
    ...ds,
    ...cs,
    ...ps,
    ...hs,
    ...ys,
    ...ve(mr),
    ...ve(xi),
    ...ve(ui),
    ...ve(ht),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var va = { type: "spring", stiffness: 170, damping: 28 },
  wa = {
    desktop: "(max-width: 1600px)",
    tablet: "(max-width: 1199px)",
    phone: "(max-width: 810px)",
  };
function Oe(t) {
  let { layouts: r, direction: i, gap: n, card: o, cursor: f } = t,
    [s, C] = Ee(),
    b = pt(wa.desktop),
    D = pt(wa.tablet),
    l = pt(wa.phone),
    c = {
      StackH: {
        display: "flex",
        gap: 200,
        width: "min-content",
        height: "min-content",
        gridTemplateColumns: "repeat(1, minmax(50px, 1fr))",
        gridAutoRows: "min-content",
        justifyContent: "flex-start",
        overflow: "visible",
      },
      StackV: {
        display: "grid",
        gap: 40,
        gridTemplateColumns: "repeat(1, minmax(50px, 1fr))",
        gridAutoRows: "min-content",
        justifyContent: "center",
        overflow: "visible",
      },
      Grid3: {
        display: "grid",
        gap: 40,
        width: "calc(100vw - 160px)",
        height: "max-content",
        gridTemplateColumns: "repeat(3, minmax(50px, 1fr))",
        gridAutoRows: "min-content",
        justifyContent: "center",
        overflow: "visible",
      },
      Grid2: {
        display: "grid",
        gap: 40,
        width: "calc(100vw - 80px)",
        height: "max-content",
        gridTemplateColumns: "repeat(2, minmax(50px, 1fr))",
        gridAutoRows: "min-content",
        justifyContent: "center",
        overflow: "visible",
      },
    },
    _ = {
      SliderH: {
        width: "auto",
        height: "60vh",
        aspectRatio: "4 / 3",
        gridColumn: "auto / span 1",
      },
      SliderV: {
        width: "100%",
        height: "auto",
        aspectRatio: "4 / 3",
        gridColumn: "auto / span 1",
      },
      Detail: {
        width: "100%",
        height: "auto",
        aspectRatio: "1 / 1",
        gridColumn: "auto / span 1",
      },
      SliderH2: {
        width: "auto",
        height: "60vh",
        aspectRatio: "1 / 1",
        gridColumn: "auto / span 1",
      },
      DetailP: {
        width: "100%",
        height: "auto",
        aspectRatio: "1 / 1.1",
        gridColumn: "auto / span 1",
      },
      Spotlight: {
        width: "100%",
        height: "auto",
        aspectRatio: "947 / 454",
        gridColumn: "auto / span 2",
      },
    };
  function F() {
    if (r === "Desktop") return s.layout ? "Grid3" : "StackH";
    if (r === "Grid3") return "Grid3";
    if (r === "Grid2" || r === "Grid2T") return "Grid2";
    if (r === "StackV" || r === "StackVP" || r === "StackVPG") return "StackV";
    if (r === "StackH") return "StackH";
  }
  let I = typeof W < "u" ? W.matchMedia("(hover: none)").matches : !1;
  function h(R, u) {
    if (r === "Desktop")
      return s.layout
        ? R
          ? "Desktop_Spotlight"
          : "Desktop_Detail"
        : u === "qCJw6bvLq"
          ? "Desktop_Play"
          : I
            ? "Desktop_Detail"
            : "Desktop";
    if (r === "Grid3" || r === "Grid2")
      return R ? "Desktop_Spotlight" : "Desktop_Detail";
    if (r === "Grid2T") return R ? "Tablet_Spotlight" : "Tablet_Detail";
    if (r === "StackV") return "Tablet";
    if (r === "StackVP") return "Phone";
    if (r === "StackVPG") return "Phone_Detail";
    if (r === "StackH") return "Desktop";
  }
  function k(R, u) {
    if (r === "Desktop")
      return s.layout
        ? R
          ? "Spotlight"
          : "Detail"
        : u === "qCJw6bvLq"
          ? "SliderH2"
          : "SliderH";
    if (r === "Grid3" || r === "Grid2" || r === "Grid2T")
      return R ? "Spotlight" : "Detail";
    if (r === "StackV") return "SliderV";
    if (r === "StackVP") return "Detail";
    if (r === "StackVPG") return "DetailP";
    if (r === "StackH") return "SliderH";
  }
  let [L, g] = rt.useState([]),
    j = ar({
      from: { data: lr, type: "Collection" },
      select: [
        { name: "B6ayqpvjf", type: "Identifier" },
        { name: "hRQvHJnkU", type: "Identifier" },
        { name: "TBCnzfSIw", type: "Identifier" },
        { name: "RXH9Y2zBS", type: "Identifier" },
        { name: "PcSOxCIah", type: "Identifier" },
        { name: "cdI59d3FI", type: "Identifier" },
        { name: "wsjEhoSf3", type: "Identifier" },
        { name: "NxWTLgp2C", type: "Identifier" },
        { name: "YlQuuq2WI", type: "Identifier" },
        { name: "FBN3s_gfM", type: "Identifier" },
        { name: "h3NndMT3X", type: "Identifier" },
        { name: "i7eUIM6KL", type: "Identifier" },
        { name: "OaSZjrd_f", type: "Identifier" },
        { name: "rGWYgbHC_", type: "Identifier" },
        { name: "oDr5GBPtj", type: "Identifier" },
        { name: "cQRb6rBgD", type: "Identifier" },
        { name: "ikH4Oa3Vj", type: "Identifier" },
        { name: "pG27F_S6T", type: "Identifier" },
        { name: "id", type: "Identifier" },
      ],
      where: {
        left: { name: "NxWTLgp2C", type: "Identifier" },
        operator: "!=",
        right: { type: "LiteralValue", value: "" },
        type: "BinaryOperation",
      },
    });
  rt.useEffect(() => {
    if (s.type === "IDEA") {
      let R = j.filter((u) => u.NxWTLgp2C === "yHvm0KK6A");
      g(R);
    } else if (s.type === "WORK") {
      let R = j.filter((u) => u.NxWTLgp2C === "nLUm4zPVe");
      g(R);
    } else if (s.type === "PLAYGROUND") {
      let R = j.filter((u) => u.NxWTLgp2C === "qCJw6bvLq");
      g(R);
    } else s.type === "ALL" && g(j);
  }, [j, s.type]);
  function d(R) {
    return new Date(R).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }
  return e(a.div, {
    layout: !1,
    style: c[F()],
    children: e(Ie, {
      children: e(Fe, {
        children: L.map(
          (
            {
              YlQuuq2WI: R,
              B6ayqpvjf: u,
              hRQvHJnkU: Q,
              NxWTLgp2C: G,
              TBCnzfSIw: K,
              RXH9Y2zBS: J,
              cdI59d3FI: Z,
              rGWYgbHC_: E,
              ikH4Oa3Vj: x,
              cQRb6rBgD: O,
              FBN3s_gfM: y,
              h3NndMT3X: ue,
              PcSOxCIah: ye,
              pG27F_S6T: we,
              id: ze,
            },
            Je,
          ) =>
            e(
              gn.Provider,
              {
                value: y,
                children: e(xn, {
                  links: [
                    {
                      href: {
                        pathVariables: { FBN3s_gfM: y },
                        webPageId: "JoVJkkCak",
                      },
                      implicitPathVariables: void 0,
                    },
                  ],
                  children: (Pe) =>
                    e(
                      a.div,
                      {
                        layout: "position",
                        id: `BhbOYeZh1-${ze}`,
                        style: _[k(we, G)],
                        initial: {
                          opacity: 0,
                          scale: 0.75,
                          filter: "blur(8px)",
                        },
                        animate: {
                          opacity: 1,
                          scale: 1,
                          filter: "blur(0px)",
                          transition: { ...va },
                        },
                        exit: {
                          opacity: 0,
                          scale: 0.75,
                          filter: "blur(8px)",
                          transition: va,
                        },
                        transition: va,
                        children: e(Yi, {
                          layout: !0,
                          style: { width: "100%", height: "100%" },
                          variant: h(we, G),
                          title: s.language === 0 ? u : Q,
                          size: u.length >= 9 ? (D ? 36 : 64) : D ? 96 : 128,
                          status:
                            O === "tlFDSBbIS"
                              ? "InProgress"
                              : O === "r3oNrDKny"
                                ? "New"
                                : "None",
                          titleEffect: !1,
                          subtitle: ye,
                          detail: s.language === 0 ? K : J,
                          image: R,
                          video: E,
                          videoUrl: x,
                          date: d(Z),
                          cursor: f,
                          wNpLyCwPV: Pe[0],
                        }),
                      },
                      `BhbOYeZh1-${ze}`,
                    ),
                }),
              },
              ze,
            ),
        ),
      }),
    }),
  });
}
P(Oe, {
  layouts: {
    type: m.Enum,
    options: [
      "Desktop",
      "StackH",
      "StackV",
      "StackVP",
      "StackVPG",
      "Grid3",
      "Grid2",
      "Grid2T",
    ],
    defaultValue: "StackH",
    displaySegmentedControl: !0,
    segmentedControlDirection: "vertical",
  },
  cursor: { type: m.CustomCursor },
});
function fe(t) {
  let {
      trigger: r,
      text: i,
      text_chn: n,
      color: o,
      font: f,
      enter_transition: s,
      exit_transition: C,
      stiffness: b,
      damping: D,
      delay: l,
      gap: c,
      exit_delay: _,
    } = t,
    [F, I] = Ee(),
    h = {
      hide: { y: "100%", transition: { duration: 0, delay: c + _ } },
      show: {
        y: 0,
        transition: { type: "spring", stiffness: b, damping: D, delay: c + l },
      },
    },
    k = T(null);
  return e(a.div, {
    style: {
      width: "max-content",
      display: "flex",
      gap: 0,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    children: e(Fe, {
      children: e(a.p, {
        style: {
          display: "inline-block",
          color: o,
          padding: 0,
          margin: 0,
          ...f,
        },
        variants: h,
        initial: "hide",
        animate: "show",
        exit: "hide",
        children: F.language === 1 ? n : i,
      }),
    }),
  });
}
fe.defaultProps = {
  type: "String",
  text: "Hello- -WorldPp!",
  color: "#000",
  gap: 0.01,
  delay: 0.03,
  status: !0,
  visible: "manual",
  align: "flex-start",
};
P(fe, {
  trigger: { type: m.Enum, options: ["Enter", "Exit", "Show", "Hide"] },
  text: { type: m.String, title: "Text" },
  text_chn: { type: m.String, title: "\u6587\u672C" },
  color: { type: m.Color, defaultValue: "#000" },
  font: {
    type: m.Font,
    controls: "extended",
    displayFontSize: !0,
    displayTextAlignment: !1,
    defaultFontType: "sans-serif",
    defaultValue: { fontSize: 64, lineHeight: "1.3em" },
  },
  stiffness: {
    type: m.Number,
    defaultValue: 140,
    min: 0,
    max: 3e3,
    step: 1,
    displayStepper: !0,
  },
  damping: {
    type: m.Number,
    defaultValue: 14,
    min: 0,
    max: 3e3,
    step: 1,
    displayStepper: !0,
  },
  gap: {
    type: m.Number,
    title: "Gap",
    defaultValue: 0,
    min: 0,
    max: 10,
    step: 0.01,
    displayStepper: !0,
  },
  delay: {
    type: m.Number,
    title: "Delay",
    defaultValue: 0,
    min: 0,
    max: 300,
    step: 0.01,
    displayStepper: !0,
  },
  exit_delay: {
    type: m.Number,
    title: "Exit Delay",
    defaultValue: 0,
    min: 0,
    max: 300,
    step: 0.01,
    displayStepper: !0,
  },
});
var js = 100,
  Gs = {
    left: (t) => `translateX(-${t}px)`,
    right: (t) => `translateX(${t}px)`,
    top: (t) => `translateY(-${t}px)`,
    bottom: (t) => `translateY(${t}px)`,
  },
  ba =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function xt(t) {
  let {
      slots: r,
      gap: i,
      padding: n,
      paddingPerSide: o,
      paddingTop: f,
      paddingRight: s,
      paddingBottom: C,
      paddingLeft: b,
      speed: D,
      hoverFactor: l,
      direction: c,
      alignment: _,
      sizingOptions: F,
      fadeOptions: I,
      style: h,
    } = t,
    {
      fadeContent: k,
      overflow: L,
      fadeWidth: g,
      fadeInset: j,
      fadeAlpha: d,
    } = I,
    { widthType: R, heightType: u } = F,
    Q = o ? `${f}px ${s}px ${C}px ${b}px` : `${n}px`,
    G = ct.current() === ct.canvas,
    K = r.filter(Boolean),
    J = at.count(K),
    Z = J > 0;
  c === !0 && (c = "left");
  let E = c === "left" || c === "right",
    x = ln(0),
    O = Gs[c],
    y = rr(x, O),
    ue = T(null),
    ye = M(() => [Ur(), Ur()], []),
    [we, ze] = Ce({ parent: null, children: null }),
    Je = [],
    Pe = [],
    Ue = 0,
    mt = 0;
  G && ((Ue = J ? Math.floor(10 / J) : 0), (mt = 1)),
    !G &&
      Z &&
      we.parent &&
      ((Ue = Math.round((we.parent / we.children) * 2) + 1),
      (Ue = Math.min(Ue, js)),
      (mt = 1));
  let Ze = nn(() => {
      if (Z && ue.current) {
        let de = E ? ue.current.offsetWidth : ue.current.offsetHeight,
          ce = ye[0].current
            ? E
              ? ye[0].current.offsetLeft
              : ye[0].current.offsetTop
            : 0,
          De =
            (ye[1].current
              ? E
                ? ye[1].current.offsetLeft + ye[1].current.offsetWidth
                : ye[1].current.offsetTop + ye[1].current.offsetHeight
              : 0) -
            ce +
            i;
        ze({ parent: de, children: De });
      }
    }, []),
    be = G ? { contentVisibility: "auto" } : {};
  if (Z) {
    if (!G) {
      let de = T(!0);
      Le(
        () => (
          qr.read(Ze),
          bi(ue.current, ({ contentSize: ce }) => {
            !de.current && (ce.width || ce.height) && qr.read(Ze),
              (de.current = !1);
          })
        ),
        [],
      );
    }
    Je = at.map(K, (de, ce) => {
      var Be, De, $e, et;
      let tt;
      ce === 0 && (tt = ye[0]), ce === K.length - 1 && (tt = ye[1]);
      let dt = {
        width: R
          ? (Be = de.props) === null || Be === void 0
            ? void 0
            : Be.width
          : "100%",
        height: u
          ? (De = de.props) === null || De === void 0
            ? void 0
            : De.height
          : "100%",
      };
      return e(z, {
        inherit: "id",
        children: e("li", {
          ref: tt,
          style: dt,
          children: Pr(
            de,
            {
              style: {
                ...(($e = de.props) === null || $e === void 0
                  ? void 0
                  : $e.style),
                ...dt,
                flexShrink: 0,
                ...be,
              },
              layoutId: de.props.layoutId
                ? de.props.layoutId + "-original-" + ce
                : void 0,
            },
            (et = de.props) === null || et === void 0 ? void 0 : et.children,
          ),
        }),
      });
    });
  }
  if (!G)
    for (let de = 0; de < Ue; de++)
      Pe = [
        ...Pe,
        ...at.map(K, (ce, Be) => {
          var De, $e, et, tt, dt, zr;
          let Io = {
            width: R
              ? (De = ce.props) === null || De === void 0
                ? void 0
                : De.width
              : "100%",
            height: u
              ? ($e = ce.props) === null || $e === void 0
                ? void 0
                : $e.height
              : "100%",
            willChange: "transform",
          };
          return e(
            z,
            {
              inherit: "id",
              children: e(
                "li",
                {
                  style: Io,
                  "aria-hidden": !0,
                  children: Pr(
                    ce,
                    {
                      key: de + " " + Be,
                      style: {
                        ...((et = ce.props) === null || et === void 0
                          ? void 0
                          : et.style),
                        width: R
                          ? (tt = ce.props) === null || tt === void 0
                            ? void 0
                            : tt.width
                          : "100%",
                        height: u
                          ? (dt = ce.props) === null || dt === void 0
                            ? void 0
                            : dt.height
                          : "100%",
                        flexShrink: 0,
                        ...be,
                      },
                      layoutId: ce.props.layoutId
                        ? ce.props.layoutId + "-dupe-" + de
                        : void 0,
                    },
                    (zr = ce.props) === null || zr === void 0
                      ? void 0
                      : zr.children,
                  ),
                },
                de + "li" + Be,
              ),
            },
            de + "lg" + Be,
          );
        }),
      ];
  let ke = we.children + we.children * Math.round(we.parent / we.children),
    Ge = T(null),
    qe = T(null),
    Xe = T(0),
    he = T(!1),
    tr = cn(),
    Ke = T(null),
    ge = T(null);
  if (!G) {
    let de = hn(ue);
    ba
      ? (Le(() => {
          if (!(tr || !ke || !D))
            return (
              (ge.current = Ke.current.animate(
                { transform: [O(0), O(ke)] },
                {
                  duration: (Math.abs(ke) / D) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                },
              )),
              () => ge.current.cancel()
            );
        }, [l, ke, D]),
        Le(() => {
          ge.current &&
            (de && ge.current.playState === "paused"
              ? ge.current.play()
              : !de &&
                ge.current.playState === "running" &&
                ge.current.pause());
        }, [de]))
      : dn((ce) => {
          if (!ke || tr || ba) return;
          Ge.current === null && (Ge.current = ce), (ce = ce - Ge.current);
          let De = (qe.current === null ? 0 : ce - qe.current) * (D / 1e3);
          he.current && (De *= l),
            (Xe.current += De),
            (Xe.current = pn(0, ke, Xe.current)),
            (qe.current = ce),
            de && x.set(Xe.current);
        });
  }
  let se = E ? "to right" : "to bottom",
    xe = g / 2,
    He = 100 - g / 2,
    ft = Ps(j, 0, xe),
    Vr = 100 - j,
    Er = `linear-gradient(${se}, rgba(0, 0, 0, ${d}) ${ft}%, rgba(0, 0, 0, 1) ${xe}%, rgba(0, 0, 0, 1) ${He}%, rgba(0, 0, 0, ${d}) ${Vr}%)`;
  return Z
    ? e("section", {
        style: {
          ...Oi,
          opacity: mt,
          WebkitMaskImage: k ? Er : void 0,
          MozMaskImage: k ? Er : void 0,
          maskImage: k ? Er : void 0,
          overflow: L ? "visible" : "hidden",
          padding: Q,
        },
        ref: ue,
        children: p(a.ul, {
          ref: Ke,
          style: {
            ...Oi,
            gap: i,
            top: c === "bottom" && Wi(ke) ? -ke : void 0,
            left: c === "right" && Wi(ke) ? -ke : void 0,
            placeItems: _,
            position: "relative",
            flexDirection: E ? "row" : "column",
            ...h,
            willChange: G ? "auto" : "transform",
            transform: ba ? O(0) : y,
          },
          onMouseEnter: () => {
            (he.current = !0), ge.current && (ge.current.playbackRate = l);
          },
          onMouseLeave: () => {
            (he.current = !1), ge.current && (ge.current.playbackRate = 1);
          },
          children: [Je, Pe],
        }),
      })
    : p("section", {
        style: Ts,
        children: [
          e("div", { style: Vs, children: "\u2728" }),
          e("p", { style: Es, children: "Connect to Content" }),
          e("p", {
            style: zs,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
xt.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
P(xt, {
  slots: {
    type: m.Array,
    title: "Children",
    control: { type: m.ComponentInstance },
  },
  speed: {
    type: m.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: m.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: m.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: m.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: m.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: m.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: m.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: m.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: m.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: m.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: m.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(t) {
          return t.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: m.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeInset: {
        type: m.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: m.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: m.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var Oi = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  Ts = {
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
    padding: "20px 20px 30px 20px",
  },
  Vs = { fontSize: 32, marginBottom: 10 },
  Es = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  zs = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  Ps = (t, r, i) => Math.min(Math.max(t, r), i),
  Wi = (t) => typeof t == "number" && !isNaN(t);
var Us = Ne(te),
  qs = Se(te),
  Hs = N(xt),
  Bs = Zn(a.div),
  Xs = ["Tc5rzSAMC"],
  Ms = "framer-3qD2W",
  As = { Tc5rzSAMC: "framer-v-1g21gpf" };
var Ys = a(w),
  Os = ({ height: t, id: r, width: i, ...n }) => ({ ...n }),
  Ws = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Qs = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      { style: o, className: f, layoutId: s, variant: C, ...b } = Os(t),
      {
        baseVariant: D,
        classNames: l,
        clearLoadingGesture: c,
        gestureHandlers: _,
        gestureVariant: F,
        isLoading: I,
        setGestureState: h,
        setVariant: k,
        variants: L,
      } = A({
        cycleOrder: Xs,
        defaultVariant: "Tc5rzSAMC",
        variant: C,
        variantClassNames: As,
      }),
      g = Ws(t, L),
      j = T(null),
      d = H(),
      R = [hi],
      u = re();
    return e(z, {
      id: s ?? d,
      children: e(Ys, {
        animate: L,
        initial: !1,
        children: e(a.div, {
          ...b,
          ..._,
          className: V(Ms, ...R, "framer-1g21gpf", f, l),
          "data-framer-name": "Desktop",
          layoutDependency: g,
          layoutId: "Tc5rzSAMC",
          ref: r ?? j,
          style: {
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            ...o,
          },
          children: p(Bs, {
            className: "framer-1wsp1zt",
            layoutDependency: g,
            layoutId: "IArmCftNA",
            style: {
              backgroundColor:
                "var(--token-06c3110c-0775-4f83-beaa-2e83a6a2d842, rgb(0, 0, 0))",
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            },
            children: [
              e(v, {
                children: e(a.div, {
                  className: "framer-f5mbrb-container",
                  layoutDependency: g,
                  layoutId: "GV0yIbynm-container",
                  children: e(xt, {
                    alignment: "center",
                    direction: "left",
                    fadeOptions: {
                      fadeAlpha: 0,
                      fadeContent: !0,
                      fadeInset: 0,
                      fadeWidth: 25,
                      overflow: !1,
                    },
                    gap: 10,
                    height: "100%",
                    hoverFactor: 0.5,
                    id: "GV0yIbynm",
                    layoutId: "GV0yIbynm",
                    padding: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingPerSide: !1,
                    paddingRight: 10,
                    paddingTop: 10,
                    sizingOptions: { heightType: !0, widthType: !0 },
                    slots: [
                      p(a.div, {
                        className: "framer-9rziyk",
                        layoutDependency: g,
                        layoutId: "B9w8U9iBN",
                        children: [
                          e(Us, {
                            __fromCanvasComponent: !0,
                            children: e(w, {
                              children: e(a.h4, {
                                className: "framer-styles-preset-1w7o0dx",
                                "data-styles-preset": "xFx_9r8NJ",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n, rgb(255, 255, 255))",
                                },
                                children: "\u2726 Get immersed",
                              }),
                            }),
                            className: "framer-1pzpeou",
                            fonts: ["Inter"],
                            layoutDependency: g,
                            layoutId: "h3qQTJJjs",
                            style: {
                              "--extracted-1eung3n": "rgb(255, 255, 255)",
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(qs, {
                            __fromCanvasComponent: !0,
                            children: e(w, {
                              children: e(a.h4, {
                                className: "framer-styles-preset-1w7o0dx",
                                "data-styles-preset": "xFx_9r8NJ",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n, rgb(255, 255, 255))",
                                },
                                children: "\u2726 \u6C89\u6D78\u5176\u4E2D",
                              }),
                            }),
                            className: "framer-495i07",
                            fonts: ["Inter"],
                            layoutDependency: g,
                            layoutId: "NQQcwITHn",
                            style: {
                              "--extracted-1eung3n": "rgb(255, 255, 255)",
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                    speed: 50,
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                  }),
                }),
              }),
              e(a.div, {
                className: "framer-1idgvyo",
                layoutDependency: g,
                layoutId: "fqNGB7wGi",
                style: {
                  background:
                    'linear-gradient(90deg, var(--token-06c3110c-0775-4f83-beaa-2e83a6a2d842, rgb(0, 0, 0)) /* {"name":"Dark 100"} */ 49.58239489489488%, var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0)) /* {"name":"Black 0"} */ 100%)',
                },
              }),
              e(a.div, {
                className: "framer-1iuql2w",
                layoutDependency: g,
                layoutId: "qdw7aKq5c",
                style: {
                  background:
                    'linear-gradient(270deg, var(--token-06c3110c-0775-4f83-beaa-2e83a6a2d842, rgb(0, 0, 0)) /* {"name":"Dark 100"} */ 49.58239489489488%, var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0)) /* {"name":"Black 0"} */ 100%)',
                },
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Js = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-3qD2W.framer-1a7id9, .framer-3qD2W .framer-1a7id9 { display: block; }",
    ".framer-3qD2W.framer-1g21gpf { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-3qD2W .framer-1wsp1zt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 24px; position: relative; width: 226px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-3qD2W .framer-f5mbrb-container { flex: none; height: 30px; position: relative; width: 170px; }",
    ".framer-3qD2W .framer-9rziyk { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-3qD2W .framer-1pzpeou, .framer-3qD2W .framer-495i07 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-3qD2W .framer-1idgvyo { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 52px; z-index: 1; }",
    ".framer-3qD2W .framer-1iuql2w { bottom: 0px; flex: none; overflow: hidden; position: absolute; right: 0px; top: 0px; width: 52px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3qD2W.framer-1g21gpf, .framer-3qD2W .framer-1wsp1zt, .framer-3qD2W .framer-9rziyk { gap: 0px; } .framer-3qD2W.framer-1g21gpf > *, .framer-3qD2W .framer-1wsp1zt > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3qD2W.framer-1g21gpf > :first-child, .framer-3qD2W .framer-1wsp1zt > :first-child { margin-top: 0px; } .framer-3qD2W.framer-1g21gpf > :last-child, .framer-3qD2W .framer-1wsp1zt > :last-child { margin-bottom: 0px; } .framer-3qD2W .framer-9rziyk > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-3qD2W .framer-9rziyk > :first-child { margin-left: 0px; } .framer-3qD2W .framer-9rziyk > :last-child { margin-right: 0px; } }",
    ...pi,
  ],
  ur = U(Qs, Js, "framer-3qD2W"),
  ka = ur;
ur.displayName = "Home/Immersed";
ur.defaultProps = { height: 78, width: 226 };
X(
  ur,
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
    ...Hs,
    ...ve(ci),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Zs = [
    "h8a_pZJCm",
    "NFj1vp7St",
    "X5XFaT1T0",
    "v_V6Q3Udx",
    "ekaJDNXT2",
    "e2HhRmGaA",
    "Gguwbuzjf",
    "JYHBin7ud",
  ],
  Ks = "framer-bSX6l",
  $s = {
    e2HhRmGaA: "framer-v-1dmnua9",
    ekaJDNXT2: "framer-v-13se6hj",
    Gguwbuzjf: "framer-v-18w6533",
    h8a_pZJCm: "framer-v-57w426",
    JYHBin7ud: "framer-v-1p5cfew",
    NFj1vp7St: "framer-v-1x3hveh",
    v_V6Q3Udx: "framer-v-1k0ntq",
    X5XFaT1T0: "framer-v-5w90xr",
  };
function Qi(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var el = { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
  tl = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  rl = a(w),
  al = {
    Desktop_Initial: "X5XFaT1T0",
    Desktop_Show: "v_V6Q3Udx",
    Monitor_Initial: "h8a_pZJCm",
    Monitor_Show: "NFj1vp7St",
    Phone_Initial: "Gguwbuzjf",
    Phone_Show: "JYHBin7ud",
    Tablet_Initial: "ekaJDNXT2",
    Tablet_Show: "e2HhRmGaA",
  },
  nl = ({ height: t, id: r, width: i, ...n }) => {
    var o, f;
    return {
      ...n,
      variant:
        (f = (o = al[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && f !== void 0
          ? f
          : "h8a_pZJCm",
    };
  },
  il = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  ol = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      { style: o, className: f, layoutId: s, variant: C, ...b } = nl(t),
      {
        baseVariant: D,
        classNames: l,
        clearLoadingGesture: c,
        gestureHandlers: _,
        gestureVariant: F,
        isLoading: I,
        setGestureState: h,
        setVariant: k,
        variants: L,
      } = A({
        cycleOrder: Zs,
        defaultVariant: "h8a_pZJCm",
        variant: C,
        variantClassNames: $s,
      }),
      g = il(t, L),
      { activeVariantCallback: j, delay: d } = le(D),
      R = j(async (...x) => {
        await d(() => k("NFj1vp7St"), 1500);
      }),
      u = j(async (...x) => {
        await d(() => k("v_V6Q3Udx"), 1500);
      }),
      Q = j(async (...x) => {
        await d(() => k("e2HhRmGaA"), 1500);
      }),
      G = j(async (...x) => {
        await d(() => k("JYHBin7ud"), 1500);
      });
    Ve(D, {
      default: R,
      e2HhRmGaA: void 0,
      ekaJDNXT2: Q,
      Gguwbuzjf: G,
      JYHBin7ud: void 0,
      v_V6Q3Udx: void 0,
      X5XFaT1T0: u,
    });
    let K = T(null),
      J = H(),
      Z = [],
      E = re();
    return e(z, {
      id: s ?? J,
      children: e(rl, {
        animate: L,
        initial: !1,
        children: e(tl, {
          value: el,
          children: e(a.div, {
            ...b,
            ..._,
            className: V(Ks, ...Z, "framer-57w426", f, l),
            "data-framer-name": "Monitor_Initial",
            "data-highlight": !0,
            layoutDependency: g,
            layoutId: "h8a_pZJCm",
            ref: r ?? K,
            style: { ...o },
            ...Qi(
              {
                e2HhRmGaA: {
                  "data-framer-name": "Tablet_Show",
                  "data-highlight": void 0,
                },
                ekaJDNXT2: { "data-framer-name": "Tablet_Initial" },
                Gguwbuzjf: { "data-framer-name": "Phone_Initial" },
                JYHBin7ud: {
                  "data-framer-name": "Phone_Show",
                  "data-highlight": void 0,
                },
                NFj1vp7St: { "data-framer-name": "Monitor_Show" },
                v_V6Q3Udx: {
                  "data-framer-name": "Desktop_Show",
                  "data-highlight": void 0,
                },
                X5XFaT1T0: { "data-framer-name": "Desktop_Initial" },
              },
              D,
              F,
            ),
            children: e(a.div, {
              className: "framer-kdvm8l",
              "data-framer-name": "Cover",
              layoutDependency: g,
              layoutId: "HStqakslQ",
              style: {
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
              },
              children: e(a.div, {
                className: "framer-1bivklo",
                layoutDependency: g,
                layoutId: "Dnr3PiQad",
                style: {
                  backgroundColor:
                    "var(--token-06c3110c-0775-4f83-beaa-2e83a6a2d842, rgb(0, 0, 0))",
                  borderBottomLeftRadius: 53,
                  borderBottomRightRadius: 53,
                  borderTopLeftRadius: 53,
                  borderTopRightRadius: 53,
                },
                children: e(a.div, {
                  className: "framer-1i0me3a",
                  layoutDependency: g,
                  layoutId: "biyDJ158s",
                  children: e(ae, {
                    className: "framer-1h39rvi",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: g,
                    layoutId: "dwHfk6UP1",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56"><path d="M 42.128 23.464 C 43.745 21.824 46.117 21.177 48.342 21.767 C 50.568 22.358 52.307 24.096 52.898 26.321 C 53.49 28.547 52.844 30.918 51.205 32.536 C 48.699 35.042 44.636 35.043 42.129 32.537 C 39.623 30.031 39.623 25.968 42.128 23.462 Z M 12.087 24.535 C 14.868 23.182 18.275 24.124 19.903 26.763 L 22.288 30.625 C 22.596 31.122 22.778 31.416 22.925 31.621 C 22.995 31.717 23.193 31.862 23.408 31.67 C 23.604 31.507 23.854 31.264 24.276 30.854 C 26.948 28.257 31.388 28.67 33.5 31.75 L 35.369 34.475 C 36.705 36.414 37.096 38.853 36.433 41.113 L 35.887 42.971 C 35.243 45.133 33.717 46.923 31.684 47.901 L 22.724 52.255 C 20.033 53.561 16.847 53.318 14.385 51.618 L 6.347 46.041 C 3.49 44.086 2.247 40.494 3.283 37.191 L 5.383 30.548 C 6.055 28.453 7.558 26.726 9.541 25.772 L 12.089 24.535 Z" fill="rgb(255, 255, 255)"></path><path d="M 36.633 3.565 C 37.056 3.977 37.295 4.543 37.295 5.133 C 37.295 5.724 37.056 6.289 36.633 6.701 L 34.377 8.918 C 33.49 9.783 32.075 9.783 31.187 8.918 C 30.765 8.506 30.527 7.941 30.527 7.351 C 30.527 6.761 30.765 6.196 31.187 5.784 L 33.444 3.568 C 34.331 2.702 35.746 2.702 36.633 3.568 Z M 52.423 3.568 C 52.846 3.98 53.085 4.545 53.085 5.136 C 53.085 5.726 52.846 6.292 52.423 6.704 L 34.377 24.435 C 33.49 25.3 32.075 25.3 31.187 24.435 C 30.764 24.023 30.526 23.457 30.526 22.867 C 30.526 22.276 30.764 21.711 31.187 21.299 L 49.233 3.57 C 50.121 2.705 51.536 2.705 52.423 3.57 Z M 29.867 10.215 C 30.289 10.627 30.527 11.192 30.527 11.782 C 30.527 12.372 30.289 12.937 29.867 13.349 L 23.1 19.999 C 22.213 20.864 20.798 20.864 19.91 19.999 C 19.488 19.587 19.25 19.022 19.25 18.432 C 19.25 17.842 19.488 17.277 19.91 16.865 L 26.677 10.215 C 27.564 9.35 28.979 9.35 29.867 10.215 Z" fill="rgb(255, 255, 255)"></path></svg>',
                    svgContentId: 12850868960,
                    withExternalLayout: !0,
                    ...Qi(
                      {
                        e2HhRmGaA: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34"><path d="M 25.578 14.246 C 26.56 13.251 27.999 12.857 29.351 13.216 C 30.702 13.574 31.758 14.63 32.117 15.981 C 32.476 17.332 32.084 18.772 31.089 19.754 C 29.567 21.276 27.1 21.276 25.579 19.755 C 24.057 18.233 24.057 15.766 25.578 14.245 Z M 7.338 14.896 C 9.027 14.075 11.095 14.647 12.084 16.249 L 13.532 18.594 C 13.719 18.896 13.829 19.074 13.919 19.199 C 13.961 19.257 14.082 19.345 14.212 19.228 C 14.331 19.129 14.483 18.982 14.739 18.733 C 16.361 17.156 19.057 17.407 20.339 19.277 L 21.474 20.931 C 22.285 22.109 22.523 23.589 22.12 24.962 L 21.788 26.089 C 21.397 27.402 20.471 28.489 19.237 29.083 L 13.797 31.726 C 12.163 32.519 10.228 32.372 8.734 31.34 L 3.853 27.954 C 2.119 26.766 1.364 24.586 1.993 22.58 L 3.268 18.547 C 3.676 17.275 4.589 16.226 5.793 15.647 L 7.34 14.896 Z" fill="rgb(255, 255, 255)"></path><path d="M 22.242 2.165 C 22.499 2.415 22.643 2.758 22.643 3.117 C 22.643 3.475 22.499 3.819 22.242 4.069 L 20.872 5.415 C 20.333 5.94 19.474 5.94 18.935 5.415 C 18.679 5.164 18.534 4.821 18.534 4.463 C 18.534 4.105 18.679 3.762 18.935 3.512 L 20.305 2.166 C 20.844 1.641 21.703 1.641 22.242 2.166 Z M 31.828 2.166 C 32.085 2.416 32.23 2.76 32.23 3.118 C 32.23 3.477 32.085 3.82 31.828 4.07 L 20.872 14.835 C 20.333 15.361 19.474 15.361 18.935 14.835 C 18.678 14.585 18.533 14.242 18.533 13.883 C 18.533 13.525 18.678 13.181 18.935 12.931 L 29.892 2.168 C 30.43 1.642 31.29 1.642 31.828 2.168 Z M 18.133 6.202 C 18.39 6.452 18.534 6.795 18.534 7.153 C 18.534 7.512 18.39 7.855 18.133 8.105 L 14.025 12.142 C 13.486 12.668 12.627 12.668 12.088 12.142 C 11.832 11.892 11.687 11.549 11.687 11.191 C 11.687 10.833 11.832 10.49 12.088 10.24 L 16.197 6.202 C 16.735 5.677 17.595 5.677 18.133 6.202 Z" fill="rgb(255, 255, 255)"></path></svg>',
                          svgContentId: 9217798269,
                        },
                        JYHBin7ud: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 22"><path d="M 16.55 9.218 C 17.186 8.574 18.117 8.32 18.992 8.552 C 19.866 8.783 20.549 9.466 20.781 10.34 C 21.014 11.215 20.76 12.146 20.116 12.782 C 19.132 13.767 17.536 13.767 16.551 12.782 C 15.566 11.798 15.566 10.202 16.55 9.217 Z M 4.748 9.639 C 5.841 9.107 7.179 9.477 7.819 10.514 L 8.756 12.031 C 8.877 12.227 8.948 12.342 9.006 12.423 C 9.034 12.46 9.112 12.517 9.196 12.442 C 9.273 12.378 9.371 12.282 9.537 12.121 C 10.587 11.101 12.331 11.263 13.161 12.473 L 13.895 13.544 C 14.42 14.306 14.574 15.264 14.313 16.152 L 14.098 16.881 C 13.845 17.731 13.246 18.434 12.447 18.818 L 8.927 20.529 C 7.87 21.042 6.618 20.946 5.651 20.279 L 2.493 18.088 C 1.371 17.319 0.883 15.908 1.29 14.611 L 2.115 12.001 C 2.379 11.178 2.969 10.499 3.748 10.125 L 4.749 9.639 Z" fill="rgb(255, 255, 255)"></path><path d="M 14.392 1.401 C 14.558 1.563 14.652 1.785 14.652 2.017 C 14.652 2.249 14.558 2.471 14.392 2.633 L 13.505 3.504 C 13.157 3.843 12.601 3.843 12.252 3.504 C 12.086 3.342 11.993 3.12 11.993 2.888 C 11.993 2.656 12.086 2.434 12.252 2.272 L 13.139 1.402 C 13.487 1.062 14.043 1.062 14.392 1.402 Z M 20.595 1.402 C 20.761 1.563 20.855 1.786 20.855 2.018 C 20.855 2.25 20.761 2.472 20.595 2.634 L 13.505 9.599 C 13.157 9.939 12.601 9.939 12.252 9.599 C 12.086 9.437 11.992 9.215 11.992 8.983 C 11.992 8.751 12.086 8.529 12.252 8.367 L 19.342 1.403 C 19.69 1.063 20.246 1.063 20.595 1.403 Z M 11.733 4.013 C 11.899 4.175 11.993 4.397 11.993 4.629 C 11.993 4.86 11.899 5.082 11.733 5.244 L 9.075 7.857 C 8.726 8.197 8.17 8.197 7.822 7.857 C 7.656 7.695 7.562 7.473 7.562 7.241 C 7.562 7.009 7.656 6.787 7.822 6.626 L 10.48 4.013 C 10.829 3.673 11.385 3.673 11.733 4.013 Z" fill="rgb(255, 255, 255)"></path></svg>',
                          svgContentId: 11810255475,
                        },
                        v_V6Q3Udx: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 44"><path d="M 33.101 18.436 C 34.371 17.148 36.235 16.639 37.983 17.103 C 39.732 17.567 41.098 18.932 41.563 20.681 C 42.028 22.429 41.52 24.293 40.232 25.564 C 38.264 27.533 35.071 27.534 33.102 25.565 C 31.132 23.596 31.132 20.404 33.101 18.434 Z M 9.497 19.277 C 11.682 18.214 14.359 18.955 15.638 21.028 L 17.512 24.062 C 17.754 24.453 17.897 24.684 18.012 24.845 C 18.067 24.92 18.223 25.034 18.392 24.884 C 18.546 24.755 18.742 24.565 19.074 24.242 C 21.173 22.202 24.662 22.526 26.321 24.946 L 27.79 27.087 C 28.84 28.611 29.147 30.528 28.626 32.303 L 28.197 33.763 C 27.691 35.461 26.492 36.868 24.895 37.636 L 17.855 41.057 C 15.74 42.084 13.237 41.893 11.302 40.557 L 4.987 36.175 C 2.742 34.639 1.765 31.817 2.579 29.221 L 4.229 24.002 C 4.757 22.356 5.939 20.999 7.496 20.249 L 9.498 19.277 Z" fill="rgb(255, 255, 255)"></path><path d="M 28.783 2.801 C 29.116 3.125 29.303 3.569 29.303 4.033 C 29.303 4.497 29.116 4.942 28.783 5.265 L 27.011 7.007 C 26.313 7.687 25.201 7.687 24.504 7.007 C 24.172 6.683 23.985 6.239 23.985 5.776 C 23.985 5.312 24.172 4.868 24.504 4.545 L 26.277 2.803 C 26.974 2.123 28.086 2.123 28.783 2.803 Z M 41.189 2.803 C 41.522 3.127 41.709 3.571 41.709 4.035 C 41.709 4.499 41.522 4.943 41.189 5.267 L 27.01 19.199 C 26.313 19.878 25.201 19.878 24.504 19.199 C 24.172 18.875 23.984 18.431 23.984 17.967 C 23.984 17.503 24.172 17.058 24.504 16.735 L 38.683 2.805 C 39.38 2.125 40.492 2.125 41.189 2.805 Z M 23.467 8.026 C 23.799 8.35 23.986 8.794 23.986 9.257 C 23.986 9.721 23.799 10.165 23.467 10.489 L 18.15 15.714 C 17.453 16.393 16.341 16.393 15.644 15.714 C 15.312 15.39 15.125 14.946 15.125 14.482 C 15.125 14.019 15.312 13.575 15.644 13.251 L 20.961 8.026 C 21.658 7.347 22.77 7.347 23.467 8.026 Z" fill="rgb(255, 255, 255)"></path></svg>',
                          svgContentId: 9544012357,
                        },
                      },
                      D,
                      F,
                    ),
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  sl = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-bSX6l.framer-pv9kqr, .framer-bSX6l .framer-pv9kqr { display: block; }",
    ".framer-bSX6l.framer-57w426 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 81px; justify-content: flex-start; overflow: visible; padding: 0px 0px 8px 0px; position: relative; width: 1px; }",
    ".framer-bSX6l .framer-kdvm8l { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 1px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-bSX6l .framer-1bivklo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 140px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-bSX6l .framer-1i0me3a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-bSX6l .framer-1h39rvi { flex: none; height: 56px; position: relative; width: 56px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-bSX6l.framer-57w426, .framer-bSX6l .framer-kdvm8l, .framer-bSX6l .framer-1bivklo, .framer-bSX6l .framer-1i0me3a { gap: 0px; } .framer-bSX6l.framer-57w426 > *, .framer-bSX6l .framer-kdvm8l > *, .framer-bSX6l .framer-1bivklo > *, .framer-bSX6l .framer-1i0me3a > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-bSX6l.framer-57w426 > :first-child, .framer-bSX6l .framer-kdvm8l > :first-child, .framer-bSX6l .framer-1bivklo > :first-child, .framer-bSX6l .framer-1i0me3a > :first-child { margin-left: 0px; } .framer-bSX6l.framer-57w426 > :last-child, .framer-bSX6l .framer-kdvm8l > :last-child, .framer-bSX6l .framer-1bivklo > :last-child, .framer-bSX6l .framer-1i0me3a > :last-child { margin-right: 0px; } }",
    ".framer-bSX6l.framer-v-1x3hveh.framer-57w426 { width: min-content; }",
    ".framer-bSX6l.framer-v-1x3hveh .framer-kdvm8l { flex: none; width: 140px; }",
    ".framer-bSX6l.framer-v-1x3hveh .framer-1bivklo { align-content: center; align-items: center; justify-content: center; }",
    ".framer-bSX6l.framer-v-5w90xr.framer-57w426 { height: 64px; padding: 0px 0px 7px 0px; }",
    ".framer-bSX6l.framer-v-5w90xr .framer-1bivklo, .framer-bSX6l.framer-v-13se6hj .framer-1bivklo { height: 54px; }",
    ".framer-bSX6l.framer-v-1k0ntq.framer-57w426 { height: 64px; padding: 0px 0px 7px 0px; width: min-content; }",
    ".framer-bSX6l.framer-v-1k0ntq .framer-kdvm8l { flex: none; width: 98px; }",
    ".framer-bSX6l.framer-v-1k0ntq .framer-1bivklo { align-content: center; align-items: center; justify-content: center; width: 98px; }",
    ".framer-bSX6l.framer-v-1k0ntq .framer-1h39rvi { height: 44px; width: 44px; }",
    ".framer-bSX6l.framer-v-13se6hj.framer-57w426 { height: 54px; padding: 0px 0px 5px 0px; }",
    ".framer-bSX6l.framer-v-1dmnua9.framer-57w426 { height: 54px; padding: 0px 0px 5px 0px; width: min-content; }",
    ".framer-bSX6l.framer-v-1dmnua9 .framer-kdvm8l { flex: none; width: 80px; }",
    ".framer-bSX6l.framer-v-1dmnua9 .framer-1bivklo { align-content: center; align-items: center; justify-content: center; width: 80px; }",
    ".framer-bSX6l.framer-v-1dmnua9 .framer-1h39rvi { height: 34px; width: 34px; }",
    ".framer-bSX6l.framer-v-18w6533.framer-57w426 { height: 34px; padding: 0px 0px 4px 0px; }",
    ".framer-bSX6l.framer-v-18w6533 .framer-1bivklo { height: 34px; }",
    ".framer-bSX6l.framer-v-1p5cfew.framer-57w426 { height: 34px; padding: 0px 0px 4px 0px; width: min-content; }",
    ".framer-bSX6l.framer-v-1p5cfew .framer-kdvm8l { flex: none; width: 56px; }",
    ".framer-bSX6l.framer-v-1p5cfew .framer-1bivklo { align-content: center; align-items: center; justify-content: center; width: 56px; }",
    ".framer-bSX6l.framer-v-1p5cfew .framer-1h39rvi { height: 22px; width: 22px; }",
  ],
  Nt = U(ol, sl, "framer-bSX6l"),
  yr = Nt;
Nt.displayName = "Home/PrimaryTitleArrow";
Nt.defaultProps = { height: 81, width: 1 };
P(Nt, {
  variant: {
    options: [
      "h8a_pZJCm",
      "NFj1vp7St",
      "X5XFaT1T0",
      "v_V6Q3Udx",
      "ekaJDNXT2",
      "e2HhRmGaA",
      "Gguwbuzjf",
      "JYHBin7ud",
    ],
    optionTitles: [
      "Monitor_Initial",
      "Monitor_Show",
      "Desktop_Initial",
      "Desktop_Show",
      "Tablet_Initial",
      "Tablet_Show",
      "Phone_Initial",
      "Phone_Show",
    ],
    title: "Variant",
    type: m.Enum,
  },
});
X(Nt, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var fl = ["brTi_c7ZO", "sgVvxIUuI", "oJIUazuxs"];
var dl = {
  brTi_c7ZO: "framer-v-12g5mhk",
  oJIUazuxs: "framer-v-cmtkfp",
  sgVvxIUuI: "framer-v-swcs80",
};
function cl(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var pl = {
  default: { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: "tween" },
  oJIUazuxs: { delay: 0, duration: 0, ease: [0.44, 0, 0.56, 1], type: "tween" },
  sgVvxIUuI: { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: "tween" },
};
var hl = (t, r) => `translateY(-50%) ${r}`,
  ul = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  yl = { "Variant 3": "oJIUazuxs", Down: "sgVvxIUuI", Up: "brTi_c7ZO" },
  gl = ({ height: t, id: r, width: i, ...n }) => {
    var o, f;
    return {
      ...n,
      variant:
        (f = (o = yl[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && f !== void 0
          ? f
          : "brTi_c7ZO",
    };
  },
  xl = (t, r) => r.join("-") + t.layoutDependency,
  vl = q(function (t, r) {
    let { activeLocale: i } = B(),
      { style: n, className: o, layoutId: f, variant: s, ...C } = gl(t),
      {
        baseVariant: b,
        classNames: D,
        gestureVariant: l,
        setGestureState: c,
        setVariant: _,
        transition: F,
        variants: I,
      } = A({
        cycleOrder: fl,
        defaultVariant: "brTi_c7ZO",
        transitions: pl,
        variant: s,
        variantClassNames: dl,
      }),
      h = xl(t, I),
      { activeVariantCallback: k, delay: L } = le(b),
      g = k(async (...Q) => {
        await L(() => _("sgVvxIUuI"), 300);
      }),
      j = k(async (...Q) => {
        await L(() => _("oJIUazuxs"), 1200);
      }),
      d = k(async (...Q) => {
        await L(() => _("brTi_c7ZO"), 100);
      });
    Ve(b, { default: g, oJIUazuxs: d, sgVvxIUuI: j });
    let R = T(null),
      u = H();
    return e(z, {
      id: f ?? u,
      children: e(a.div, {
        initial: s,
        animate: I,
        onHoverStart: () => c({ isHovered: !0 }),
        onHoverEnd: () => c({ isHovered: !1 }),
        onTapStart: () => c({ isPressed: !0 }),
        onTap: () => c({ isPressed: !1 }),
        onTapCancel: () => c({ isPressed: !1 }),
        className: V("framer-mIywZ", D),
        style: { display: "contents" },
        children: e(ul, {
          value: F,
          children: p(a.div, {
            ...C,
            className: V("framer-12g5mhk", o),
            "data-framer-name": "Up",
            "data-highlight": !0,
            layoutDependency: h,
            layoutId: "brTi_c7ZO",
            ref: r ?? R,
            style: { ...n },
            ...cl(
              {
                oJIUazuxs: { "data-framer-name": "Variant 3" },
                sgVvxIUuI: { "data-framer-name": "Down" },
              },
              b,
              l,
            ),
            children: [
              e(ae, {
                className: "framer-19718mh",
                "data-framer-name": "rectangular",
                layout: "position",
                layoutDependency: h,
                layoutId: "kwL3fzLZi",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 2 12 C 2 9.2 2 7.8 2.545 6.73 C 3.024 5.789 3.789 5.024 4.73 4.545 C 5.8 4 7.2 4 10 4 L 14 4 C 16.8 4 18.2 4 19.27 4.545 C 20.211 5.024 20.976 5.789 21.455 6.73 C 22 7.8 22 9.2 22 12 C 22 14.8 22 16.2 21.455 17.27 C 20.976 18.211 20.211 18.976 19.27 19.455 C 18.2 20 16.8 20 14 20 L 10 20 C 7.2 20 5.8 20 4.73 19.455 C 3.789 18.976 3.024 18.211 2.545 17.27 C 2 16.2 2 14.8 2 12 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                svgContentId: 1790040714,
                withExternalLayout: !0,
              }),
              e(a.div, {
                className: "framer-1qmegsk",
                layoutDependency: h,
                layoutId: "HP6Dygj54",
                style: {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                  borderBottomLeftRadius: 2,
                  borderBottomRightRadius: 2,
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                  opacity: 1,
                },
                transformTemplate: hl,
                variants: {
                  oJIUazuxs: { opacity: 0 },
                  sgVvxIUuI: { opacity: 0 },
                },
              }),
              e(a.div, {
                className: "framer-1skqmnj",
                layoutDependency: h,
                layoutId: "X2bM23iR9",
                style: {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                  borderBottomLeftRadius: 2,
                  borderBottomRightRadius: 2,
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                  opacity: 1,
                },
                variants: {
                  oJIUazuxs: { opacity: 0 },
                  sgVvxIUuI: { opacity: 0 },
                },
              }),
            ],
          }),
        }),
      }),
    });
  }),
  wl = [
    '.framer-mIywZ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-mIywZ .framer-18h9jd1 { display: block; }",
    ".framer-mIywZ .framer-12g5mhk { height: 42px; position: relative; width: 42px; }",
    ".framer-mIywZ .framer-19718mh { flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; }",
    ".framer-mIywZ .framer-1qmegsk { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 4px); overflow: hidden; position: absolute; right: 14px; top: 45%; width: 4px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-mIywZ .framer-1skqmnj { aspect-ratio: 1 / 1; bottom: 16px; flex: none; height: var(--framer-aspect-ratio-supported, 4px); overflow: hidden; position: absolute; right: 16px; width: 4px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-mIywZ.framer-v-swcs80 .framer-12g5mhk, .framer-mIywZ.framer-v-cmtkfp .framer-12g5mhk { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 42px); }",
    ".framer-mIywZ.framer-v-swcs80 .framer-1qmegsk { left: 16px; right: unset; }",
    ".framer-mIywZ.framer-v-swcs80 .framer-1skqmnj { left: 14px; right: unset; }",
  ],
  St = U(vl, wl, "framer-mIywZ"),
  Ca = St;
(St.displayName = "Button/TouchPad"),
  (St.defaultProps = { height: 42, width: 42 }),
  P(St, {
    variant: {
      options: ["brTi_c7ZO", "sgVvxIUuI", "oJIUazuxs"],
      optionTitles: ["Up", "Down", "Variant 3"],
      title: "Variant",
      type: m.Enum,
    },
  }),
  X(St, []);
var bl = oi(a.div),
  kl = ["QJF9A9kA2"],
  Cl = { QJF9A9kA2: "framer-v-5p5l6j" };
var Rl = {
    default: {
      delay: 0,
      duration: 0.2,
      ease: [0.44, 0, 0.56, 1],
      type: "tween",
    },
  },
  _l = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  Dl = ({ height: t, id: r, width: i, ...n }) => ({ ...n }),
  Ll = (t, r) => r.join("-") + t.layoutDependency,
  Il = q(function (t, r) {
    let { activeLocale: i } = B(),
      { style: n, className: o, layoutId: f, variant: s, ...C } = Dl(t),
      {
        baseVariant: b,
        classNames: D,
        gestureVariant: l,
        setGestureState: c,
        setVariant: _,
        transition: F,
        variants: I,
      } = A({
        cycleOrder: kl,
        defaultVariant: "QJF9A9kA2",
        transitions: Rl,
        variant: s,
        variantClassNames: Cl,
      }),
      h = Ll(t, I),
      k = H();
    return e(z, {
      id: f ?? k,
      children: e(a.div, {
        initial: s,
        animate: I,
        onHoverStart: () => c({ isHovered: !0 }),
        onHoverEnd: () => c({ isHovered: !1 }),
        onTapStart: () => c({ isPressed: !0 }),
        onTap: () => c({ isPressed: !1 }),
        onTapCancel: () => c({ isPressed: !1 }),
        className: V("framer-dJXBY", D),
        style: { display: "contents" },
        children: e(_l, {
          value: F,
          children: e(a.div, {
            ...C,
            className: V("framer-5p5l6j", o),
            "data-framer-name": "Up",
            layoutDependency: h,
            layoutId: "QJF9A9kA2",
            ref: r,
            style: { ...n },
            children: p(bl, {
              className: "framer-kj0kde",
              layoutDependency: h,
              layoutId: "HHu6gXLk8",
              children: [
                e(ae, {
                  className: "framer-1bwdedv",
                  "data-framer-name": "scissor_rectangle",
                  layout: "position",
                  layoutDependency: h,
                  layoutId: "KcF_NDfYq",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30"><path d="M 5 15 C 5 10.286 5 7.928 6.464 6.464 C 7.928 5 10.285 5 15 5 C 19.714 5 22.072 5 23.536 6.464 C 25 7.928 25 10.285 25 15 C 25 19.714 25 22.072 23.536 23.536 C 22.071 25 19.715 25 15 25 C 10.286 25 7.928 25 6.464 23.536 C 5 22.071 5 19.715 5 15 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10"></path></svg>',
                  svgContentId: 3559415441,
                  withExternalLayout: !0,
                }),
                e(ae, {
                  className: "framer-19ixq5g",
                  "data-framer-name": "arrow_left_01_round",
                  layout: "position",
                  layoutDependency: h,
                  layoutId: "LOpRdkBzo",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18"><path d="M 11.854 4.055 C 11.608 3.722 11.139 3.651 10.805 3.896 C 10.017 4.482 9.251 5.097 8.508 5.739 C 7.936 6.236 7.345 6.786 6.891 7.3 C 6.664 7.556 6.456 7.821 6.301 8.08 C 6.158 8.316 6 8.642 6 9 C 6 9.357 6.157 9.684 6.301 9.921 C 6.457 10.179 6.664 10.444 6.891 10.7 C 7.345 11.214 7.936 11.765 8.508 12.261 C 9.251 12.903 10.017 13.518 10.805 14.104 C 11.033 14.271 11.336 14.297 11.588 14.169 C 11.841 14.042 12 13.783 12 13.5 L 12 4.5 C 12 4.34 11.949 4.184 11.854 4.055 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                  svgContentId: 648395362,
                  withExternalLayout: !0,
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Fl = [
    '.framer-dJXBY [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-dJXBY .framer-1kzacl1 { display: block; }",
    ".framer-dJXBY .framer-5p5l6j { height: 42px; position: relative; width: 42px; }",
    ".framer-dJXBY .framer-kj0kde { flex: none; height: 30px; left: calc(50.00000000000002% - 30px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 30px / 2); width: 30px; }",
    ".framer-dJXBY .framer-1bwdedv { flex: none; height: 30px; left: calc(50.00000000000002% - 30px / 2); position: absolute; top: calc(50.00000000000002% - 30px / 2); width: 30px; }",
    ".framer-dJXBY .framer-19ixq5g { flex: none; height: 18px; left: calc(50.00000000000002% - 18px / 2); position: absolute; top: calc(50.00000000000002% - 18px / 2); width: 18px; }",
  ],
  gr = U(Il, Fl, "framer-dJXBY"),
  Ra = gr;
gr.displayName = "Button/ArrowKey";
gr.defaultProps = { height: 42, width: 42 };
X(gr, []);
var Sl = Te(a.div),
  jl = ["aXI0rTi8F"];
var Gl = { aXI0rTi8F: "framer-v-4ruc4e" };
var Tl = {
  default: { delay: 0, duration: 0, ease: [0.44, 0, 0.56, 1], type: "tween" },
};
var Vl = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.56, 1], type: "tween" },
  El = { opacity: 1, rotate: 0, scale: 1, x: 0, y: 4 },
  zl = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  Pl = ({ height: t, id: r, width: i, ...n }) => ({ ...n }),
  Ul = (t, r) => r.join("-") + t.layoutDependency,
  ql = q(function (t, r) {
    let { activeLocale: i } = B(),
      { style: n, className: o, layoutId: f, variant: s, ...C } = Pl(t),
      {
        baseVariant: b,
        classNames: D,
        gestureVariant: l,
        setGestureState: c,
        setVariant: _,
        transition: F,
        variants: I,
      } = A({
        cycleOrder: jl,
        defaultVariant: "aXI0rTi8F",
        transitions: Tl,
        variant: s,
        variantClassNames: Gl,
      }),
      h = Ul(t, I),
      k = T(null),
      L = H();
    return e(z, {
      id: f ?? L,
      children: e(a.div, {
        initial: s,
        animate: I,
        onHoverStart: () => c({ isHovered: !0 }),
        onHoverEnd: () => c({ isHovered: !1 }),
        onTapStart: () => c({ isPressed: !0 }),
        onTap: () => c({ isPressed: !1 }),
        onTapCancel: () => c({ isPressed: !1 }),
        className: V("framer-9zZEy", D),
        style: { display: "contents" },
        children: e(zl, {
          value: F,
          children: p(a.div, {
            ...C,
            className: V("framer-4ruc4e", o),
            "data-framer-name": "Up",
            layoutDependency: h,
            layoutId: "aXI0rTi8F",
            ref: r ?? k,
            style: { ...n },
            children: [
              e(ae, {
                className: "framer-17d946p",
                "data-framer-name": "Body",
                layout: "position",
                layoutDependency: h,
                layoutId: "CbWZckUTM",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 4.74 17.089 C 4.93 19.48 6.824 21.511 9.265 21.812 C 10.163 21.922 11.075 22 12 22 C 12.925 22 13.837 21.922 14.735 21.812 C 17.175 21.511 19.069 19.48 19.259 17.089 C 19.391 15.432 19.5 13.732 19.5 12 C 19.5 10.268 19.39 8.568 19.26 6.911 C 19.07 4.52 17.176 2.489 14.735 2.188 C 13.828 2.07 12.915 2.007 12 2 C 11.075 2 10.163 2.078 9.265 2.188 C 6.825 2.488 4.93 4.52 4.741 6.911 C 4.609 8.568 4.5 10.268 4.5 12 C 4.5 13.732 4.609 15.432 4.74 17.089 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                svgContentId: 4054867194,
                withExternalLayout: !0,
              }),
              e(Sl, {
                __framer__loop: El,
                __framer__loopEffectEnabled: !0,
                __framer__loopRepeatDelay: 0.2,
                __framer__loopRepeatType: "mirror",
                __framer__loopTransition: Vl,
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                className: "framer-1x9xor4",
                layoutDependency: h,
                layoutId: "KExBrTRwa",
                children: e(ae, {
                  className: "framer-rpqutz",
                  "data-framer-name": "Key",
                  layout: "position",
                  layoutDependency: h,
                  layoutId: "UPKneLqOS",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 12 5 L 12 9" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                  svgContentId: 2969069891,
                  withExternalLayout: !0,
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Hl = [
    '.framer-9zZEy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-9zZEy .framer-1iyp0uz { display: block; }",
    ".framer-9zZEy .framer-4ruc4e { height: 42px; position: relative; width: 42px; }",
    ".framer-9zZEy .framer-17d946p, .framer-9zZEy .framer-rpqutz { flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; }",
    ".framer-9zZEy .framer-1x9xor4 { bottom: 9px; flex: none; left: 9px; overflow: visible; position: absolute; right: 9px; top: 9px; }",
  ],
  xr = U(ql, Hl, "framer-9zZEy"),
  _a = xr;
(xr.displayName = "Button/Mouse"),
  (xr.defaultProps = { height: 42, width: 42 }),
  X(xr, []);
var Xl = ["lQS671WU9"];
var Ml = { lQS671WU9: "framer-v-1jihmzc" };
var Al = { default: { duration: 0, type: "tween" } };
var Yl = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  Ol = ({ height: t, id: r, width: i, ...n }) => ({ ...n }),
  Wl = (t, r) => r.join("-") + t.layoutDependency,
  Ql = q(function (t, r) {
    let { activeLocale: i } = B(),
      { style: n, className: o, layoutId: f, variant: s, ...C } = Ol(t),
      {
        baseVariant: b,
        classNames: D,
        gestureVariant: l,
        setGestureState: c,
        setVariant: _,
        transition: F,
        variants: I,
      } = A({
        cycleOrder: Xl,
        defaultVariant: "lQS671WU9",
        transitions: Al,
        variant: s,
        variantClassNames: Ml,
      }),
      h = Wl(t, I),
      k = T(null),
      L = H();
    return e(z, {
      id: f ?? L,
      children: e(a.div, {
        initial: s,
        animate: I,
        onHoverStart: () => c({ isHovered: !0 }),
        onHoverEnd: () => c({ isHovered: !1 }),
        onTapStart: () => c({ isPressed: !0 }),
        onTap: () => c({ isPressed: !1 }),
        onTapCancel: () => c({ isPressed: !1 }),
        className: V("framer-5ZydW", D),
        style: { display: "contents" },
        children: e(Yl, {
          value: F,
          children: e(a.div, {
            ...C,
            className: V("framer-1jihmzc", o),
            "data-framer-name": "Left",
            layoutDependency: h,
            layoutId: "lQS671WU9",
            ref: r ?? k,
            style: { ...n },
            children: e(ae, {
              className: "framer-811bk2",
              "data-framer-name": "arrow_left_01_sharp",
              layout: "position",
              layoutDependency: h,
              layoutId: "MFR743p8y",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 15 6 L 9.707 11.293 C 9.374 11.626 9.207 11.793 9.207 12 C 9.207 12.207 9.374 12.374 9.707 12.707 L 15 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
              svgContentId: 1074520109,
              withExternalLayout: !0,
            }),
          }),
        }),
      }),
    });
  }),
  Jl = [
    '.framer-5ZydW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-5ZydW .framer-dqlenb { display: block; }",
    ".framer-5ZydW .framer-1jihmzc { height: 24px; position: relative; width: 24px; }",
    ".framer-5ZydW .framer-811bk2 { flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; }",
  ],
  vr = U(Ql, Jl, "framer-5ZydW"),
  Da = vr;
(vr.displayName = "Button/ArrowLeft"),
  (vr.defaultProps = { height: 24, width: 24 }),
  X(vr, []);
var Kl = N(_a),
  $l = N(Ca),
  em = N(Da),
  tm = N(Ra),
  rm = ["RVDdRvwK4", "r1qjybY2U", "wiNPp4Mhl", "X8WW8lwrn"];
var am = {
  r1qjybY2U: "framer-v-1ve7pnz",
  RVDdRvwK4: "framer-v-1iv40hc",
  wiNPp4Mhl: "framer-v-8zdxu4",
  X8WW8lwrn: "framer-v-i6h8pv",
};
function nm(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var im = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var om = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  sm = {
    ArrowKey: "X8WW8lwrn",
    Mouse: "RVDdRvwK4",
    Touch: "wiNPp4Mhl",
    TouchPad: "r1qjybY2U",
  },
  lm = ({ height: t, id: r, width: i, ...n }) => {
    var o, f;
    return {
      ...n,
      variant:
        (f = (o = sm[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && f !== void 0
          ? f
          : "RVDdRvwK4",
    };
  },
  mm = (t, r) => r.join("-") + t.layoutDependency,
  fm = q(function (t, r) {
    let { activeLocale: i } = B(),
      { style: n, className: o, layoutId: f, variant: s, ...C } = lm(t),
      {
        baseVariant: b,
        classNames: D,
        gestureVariant: l,
        setGestureState: c,
        setVariant: _,
        transition: F,
        variants: I,
      } = A({
        cycleOrder: rm,
        defaultVariant: "RVDdRvwK4",
        transitions: im,
        variant: s,
        variantClassNames: am,
      }),
      h = mm(t, I),
      k = T(null),
      L = () => !["r1qjybY2U", "wiNPp4Mhl", "X8WW8lwrn"].includes(b),
      g = () => b === "r1qjybY2U",
      j = () => b === "wiNPp4Mhl",
      d = () => b === "X8WW8lwrn",
      R = H(),
      u = [];
    return e(z, {
      id: f ?? R,
      children: e(a.div, {
        initial: s,
        animate: I,
        onHoverStart: () => c({ isHovered: !0 }),
        onHoverEnd: () => c({ isHovered: !1 }),
        onTapStart: () => c({ isPressed: !0 }),
        onTap: () => c({ isPressed: !1 }),
        onTapCancel: () => c({ isPressed: !1 }),
        className: V("framer-rwXUw", ...u, D),
        style: { display: "contents" },
        children: e(om, {
          value: F,
          children: p(a.div, {
            ...C,
            className: V("framer-1iv40hc", o),
            "data-framer-name": "Mouse",
            layoutDependency: h,
            layoutId: "RVDdRvwK4",
            ref: r ?? k,
            style: { ...n },
            ...nm(
              {
                r1qjybY2U: { "data-framer-name": "TouchPad" },
                wiNPp4Mhl: { "data-framer-name": "Touch" },
                X8WW8lwrn: { "data-framer-name": "ArrowKey" },
              },
              b,
              l,
            ),
            children: [
              L() &&
                e(a.div, {
                  className: "framer-1wqyrv5-container",
                  layoutDependency: h,
                  layoutId: "DIZZJudFa-container",
                  children: e(_a, {
                    height: "100%",
                    id: "DIZZJudFa",
                    layoutId: "DIZZJudFa",
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                  }),
                }),
              g() &&
                e(a.div, {
                  className: "framer-iwn23i-container",
                  layoutDependency: h,
                  layoutId: "ZUohrLTSn-container",
                  children: e(Ca, {
                    height: "100%",
                    id: "ZUohrLTSn",
                    layoutId: "ZUohrLTSn",
                    style: { height: "100%", width: "100%" },
                    variant: "brTi_c7ZO",
                    width: "100%",
                  }),
                }),
              j() &&
                e(a.div, {
                  className: "framer-a2upln-container",
                  layoutDependency: h,
                  layoutId: "EWHLXcSo4-container",
                  children: e(Da, {
                    height: "100%",
                    id: "EWHLXcSo4",
                    layoutId: "EWHLXcSo4",
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                  }),
                }),
              d() &&
                e(a.div, {
                  className: "framer-mi6792-container",
                  layoutDependency: h,
                  layoutId: "jliYFCfr4-container",
                  children: e(Ra, {
                    height: "100%",
                    id: "jliYFCfr4",
                    layoutId: "jliYFCfr4",
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  dm = [
    '.framer-rwXUw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-rwXUw .framer-1on6amf { display: block; }",
    ".framer-rwXUw .framer-1iv40hc { height: 42px; overflow: visible; position: relative; width: 42px; }",
    ".framer-rwXUw .framer-1wqyrv5-container { bottom: 0px; flex: none; left: 0px; position: absolute; top: 0px; width: 42px; }",
    ".framer-rwXUw .framer-iwn23i-container { bottom: 0px; flex: none; position: absolute; right: 0px; top: 0px; width: 42px; }",
    ".framer-rwXUw .framer-a2upln-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-rwXUw .framer-mi6792-container { flex: none; height: 42px; left: 0px; position: absolute; top: 0px; width: 42px; }",
    ".framer-rwXUw.framer-v-8zdxu4 .framer-1iv40hc { height: 24px; width: 24px; }",
  ],
  jt = U(fm, dm, "framer-rwXUw"),
  La = jt;
jt.displayName = "Utilities/ScrollTip";
jt.defaultProps = { height: 42, width: 42 };
P(jt, {
  variant: {
    options: ["RVDdRvwK4", "r1qjybY2U", "wiNPp4Mhl", "X8WW8lwrn"],
    optionTitles: ["Mouse", "TouchPad", "Touch", "ArrowKey"],
    title: "Variant",
    type: m.Enum,
  },
});
X(jt, [...Kl, ...$l, ...em, ...tm]);
var cm = N(La),
  pm = ["x79Cymwke", "NASPpDxlW"];
var hm = { NASPpDxlW: "framer-v-ucvs99", x79Cymwke: "framer-v-xqjup5" };
function um(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var ym = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var gm = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  xm = { Collasped: "NASPpDxlW", Expanded: "x79Cymwke" },
  vm = ({ height: t, id: r, mouseEnter: i, width: n, ...o }) => {
    var f, s;
    return {
      ...o,
      IvqgtxtHe: i ?? o.IvqgtxtHe,
      variant:
        (s = (f = xm[o.variant]) !== null && f !== void 0 ? f : o.variant) !==
          null && s !== void 0
          ? s
          : "x79Cymwke",
    };
  },
  wm = (t, r) => r.join("-") + t.layoutDependency,
  bm = q(function (t, r) {
    let { activeLocale: i } = B(),
      {
        style: n,
        className: o,
        layoutId: f,
        variant: s,
        IvqgtxtHe: C,
        ...b
      } = vm(t),
      {
        baseVariant: D,
        classNames: l,
        gestureVariant: c,
        setGestureState: _,
        setVariant: F,
        transition: I,
        variants: h,
      } = A({
        cycleOrder: pm,
        defaultVariant: "x79Cymwke",
        transitions: ym,
        variant: s,
        variantClassNames: hm,
      }),
      k = wm(t, h),
      { activeVariantCallback: L, delay: g } = le(D),
      j = L(async (...Q) => {
        if (C && (await C(...Q)) === !1) return !1;
      }),
      d = T(null),
      R = H(),
      u = [];
    return e(z, {
      id: f ?? R,
      children: e(a.div, {
        initial: s,
        animate: h,
        onHoverStart: () => _({ isHovered: !0 }),
        onHoverEnd: () => _({ isHovered: !1 }),
        onTapStart: () => _({ isPressed: !0 }),
        onTap: () => _({ isPressed: !1 }),
        onTapCancel: () => _({ isPressed: !1 }),
        className: V("framer-rzU9R", ...u, l),
        style: { display: "contents" },
        children: e(gm, {
          value: I,
          children: e(a.div, {
            ...b,
            className: V("framer-xqjup5", o),
            "data-framer-name": "Expanded",
            "data-highlight": !0,
            layoutDependency: k,
            layoutId: "x79Cymwke",
            onMouseEnter: j,
            ref: r ?? d,
            style: { ...n },
            ...um({ NASPpDxlW: { "data-framer-name": "Collasped" } }, D, c),
            children: e(a.div, {
              className: "framer-1mawjvd",
              layoutDependency: k,
              layoutId: "Nicai3q2w",
              style: {
                backgroundColor:
                  "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
              },
              children: e(a.div, {
                className: "framer-1yhq2d6-container",
                layoutDependency: k,
                layoutId: "kYHlRcHDL-container",
                children: e(La, {
                  height: "100%",
                  id: "kYHlRcHDL",
                  layoutId: "kYHlRcHDL",
                  style: { height: "100%", width: "100%" },
                  variant: "r1qjybY2U",
                  width: "100%",
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  km = [
    '.framer-rzU9R [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-rzU9R .framer-1x51tue { display: block; }",
    ".framer-rzU9R .framer-xqjup5 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-rzU9R .framer-1mawjvd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 42px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-rzU9R .framer-1yhq2d6-container { flex: none; height: 42px; position: relative; width: 42px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-rzU9R .framer-xqjup5, .framer-rzU9R .framer-1mawjvd { gap: 0px; } .framer-rzU9R .framer-xqjup5 > *, .framer-rzU9R .framer-1mawjvd > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-rzU9R .framer-xqjup5 > :first-child, .framer-rzU9R .framer-1mawjvd > :first-child { margin-left: 0px; } .framer-rzU9R .framer-xqjup5 > :last-child, .framer-rzU9R .framer-1mawjvd > :last-child { margin-right: 0px; } }",
    ".framer-rzU9R.framer-v-ucvs99 .framer-1mawjvd { height: 12px; padding: 0px 0px 0px 6px; width: 12px; }",
  ],
  Gt = U(bm, km, "framer-rzU9R"),
  Ia = Gt;
Gt.displayName = "Utilities/Touchpad";
Gt.defaultProps = { height: 42, width: 42 };
P(Gt, {
  variant: {
    options: ["x79Cymwke", "NASPpDxlW"],
    optionTitles: ["Expanded", "Collasped"],
    title: "Variant",
    type: m.Enum,
  },
  IvqgtxtHe: { title: "Mouse Enter", type: m.EventHandler },
});
X(Gt, [...cm]);
var Ji = Te(a.div),
  Cm = ["Ysjx9c0DL", "KB8tywx3q"],
  Rm = "framer-hyUpO",
  _m = { KB8tywx3q: "framer-v-1t2er75", Ysjx9c0DL: "framer-v-1phz421" };
function Dm(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var Lm = { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
  Im = { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Fm = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Nm = (t, r) => `translate(-50%, -50%) ${r}`,
  Sm = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.56, 1], type: "tween" },
  jm = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 4,
  },
  Gm = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  Tm = a(w),
  Vm = { Collasped: "KB8tywx3q", Expanded: "Ysjx9c0DL" },
  Em = ({ height: t, id: r, mouseEnter: i, title: n, width: o, ...f }) => {
    var s, C, b;
    return {
      ...f,
      FCG7x4AVC: i ?? f.FCG7x4AVC,
      RzZwMeUe3: (s = n ?? f.RzZwMeUe3) !== null && s !== void 0 ? s : "Shift",
      variant:
        (b = (C = Vm[f.variant]) !== null && C !== void 0 ? C : f.variant) !==
          null && b !== void 0
          ? b
          : "Ysjx9c0DL",
    };
  },
  zm = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Pm = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        RzZwMeUe3: b,
        FCG7x4AVC: D,
        ...l
      } = Em(t),
      {
        baseVariant: c,
        classNames: _,
        clearLoadingGesture: F,
        gestureHandlers: I,
        gestureVariant: h,
        isLoading: k,
        setGestureState: L,
        setVariant: g,
        variants: j,
      } = A({
        cycleOrder: Cm,
        defaultVariant: "Ysjx9c0DL",
        variant: C,
        variantClassNames: _m,
      }),
      d = zm(t, j),
      { activeVariantCallback: R, delay: u } = le(c),
      Q = R(async (...E) => {
        if ((L({ isHovered: !0 }), D && (await D(...E)) === !1)) return !1;
      }),
      G = T(null),
      K = H(),
      J = [],
      Z = re();
    return e(z, {
      id: s ?? K,
      children: e(Tm, {
        animate: j,
        initial: !1,
        children: e(Gm, {
          value: Lm,
          children: e(a.div, {
            ...l,
            ...I,
            className: V(Rm, ...J, "framer-1phz421", f, _),
            "data-framer-name": "Expanded",
            "data-highlight": !0,
            layoutDependency: d,
            layoutId: "Ysjx9c0DL",
            onMouseEnter: Q,
            ref: r ?? G,
            style: {
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              ...o,
            },
            ...Dm({ KB8tywx3q: { "data-framer-name": "Collasped" } }, c, h),
            children: p(a.div, {
              className: "framer-1pdv11y",
              layoutDependency: d,
              layoutId: "qqDojExoq",
              style: {
                backgroundColor:
                  "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
              },
              children: [
                p(Ji, {
                  __framer__loop: Fm,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 2,
                  __framer__loopRepeatType: "mirror",
                  __framer__loopTransition: Im,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: "framer-qrdflz",
                  layoutDependency: d,
                  layoutId: "UFRSywgO5",
                  children: [
                    e(te, {
                      __fromCanvasComponent: !0,
                      children: e(w, {
                        children: e(a.p, {
                          style: {
                            "--font-selector": "RlM7U2F0b3NoaS1ib2xk",
                            "--framer-font-family": '"Satoshi", sans-serif',
                            "--framer-font-size": "12px",
                            "--framer-font-weight": "700",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                          },
                          children: "Shift",
                        }),
                      }),
                      className: "framer-1maj1hx",
                      fonts: ["FS;Satoshi-bold"],
                      layoutDependency: d,
                      layoutId: "oMddYw20G",
                      style: {
                        "--extracted-r6o4lv":
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      text: b,
                      transformTemplate: Nm,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(ae, {
                      className: "framer-rns9l",
                      "data-framer-name": "rectangular",
                      layout: "position",
                      layoutDependency: d,
                      layoutId: "DkDZKauuX",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 43 20"><path d="M 1 10 C 1 7.2 1 5.8 1.545 4.73 C 2.024 3.789 2.789 3.024 3.73 2.545 C 4.8 2 6.2 2 9 2 L 33 2 C 35.8 2 37.43 1.955 38.5 2.5 C 39.441 2.979 40.021 3.559 40.5 4.5 C 41.045 5.57 41 7.2 41 10 C 41 12.8 41.045 14.43 40.5 15.5 C 40.021 16.441 39.441 17.021 38.5 17.5 C 37.43 18.045 35.8 18 33 18 L 9 18 C 6.2 18 4.8 18 3.73 17.455 C 2.789 16.976 2.024 16.211 1.545 15.27 C 1 14.2 1 12.8 1 10 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 12455772165,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
                e(ae, {
                  className: "framer-1phgxrx",
                  "data-framer-name": "graphic",
                  layout: "position",
                  layoutDependency: d,
                  layoutId: "uYF1uZ7FB",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><path d="M 6 2 L 6 10 M 2 6 L 10 6" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                  svgContentId: 11546905650,
                  withExternalLayout: !0,
                }),
                p(a.div, {
                  className: "framer-17wsc2u",
                  layoutDependency: d,
                  layoutId: "f56polUNi",
                  children: [
                    e(ae, {
                      className: "framer-wzwy35",
                      "data-framer-name": "Body",
                      layout: "position",
                      layoutDependency: d,
                      layoutId: "f56polUNiCbWZckUTM",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 4.74 17.089 C 4.93 19.48 6.824 21.511 9.265 21.812 C 10.163 21.922 11.075 22 12 22 C 12.925 22 13.837 21.922 14.735 21.812 C 17.175 21.511 19.069 19.48 19.259 17.089 C 19.391 15.432 19.5 13.732 19.5 12 C 19.5 10.268 19.39 8.568 19.26 6.911 C 19.07 4.52 17.176 2.489 14.735 2.188 C 13.828 2.07 12.915 2.007 12 2 C 11.075 2 10.163 2.078 9.265 2.188 C 6.825 2.488 4.93 4.52 4.741 6.911 C 4.609 8.568 4.5 10.268 4.5 12 C 4.5 13.732 4.609 15.432 4.74 17.089 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 12644801786,
                      withExternalLayout: !0,
                    }),
                    e(Ji, {
                      __framer__loop: jm,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0.2,
                      __framer__loopRepeatType: "mirror",
                      __framer__loopTransition: Sm,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: "framer-1l004c5",
                      layoutDependency: d,
                      layoutId: "f56polUNiKExBrTRwa",
                      children: e(ae, {
                        className: "framer-9i2uef",
                        "data-framer-name": "Key",
                        layout: "position",
                        layoutDependency: d,
                        layoutId: "f56polUNiUPKneLqOS",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 12 5 L 12 9" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 11559004483,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Um = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-hyUpO.framer-47smjt, .framer-hyUpO .framer-47smjt { display: block; }",
    ".framer-hyUpO.framer-1phz421 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 42px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-hyUpO .framer-1pdv11y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 42px; justify-content: flex-start; overflow: hidden; padding: 0px 6px 0px 6px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-hyUpO .framer-qrdflz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; overflow: hidden; padding: 0px 10px 0px 10px; position: relative; width: min-content; }",
    ".framer-hyUpO .framer-1maj1hx { -webkit-user-select: none; flex: none; height: auto; left: 50%; position: absolute; top: 50%; user-select: none; white-space: pre; width: auto; z-index: 1; }",
    ".framer-hyUpO .framer-rns9l { flex: none; height: 20px; position: relative; width: 43px; }",
    ".framer-hyUpO .framer-1phgxrx { flex: none; height: 12px; position: relative; width: 12px; }",
    ".framer-hyUpO .framer-17wsc2u { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 42px); position: relative; width: 42px; }",
    ".framer-hyUpO .framer-wzwy35, .framer-hyUpO .framer-9i2uef { flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; }",
    ".framer-hyUpO .framer-1l004c5 { bottom: 9px; flex: none; left: 9px; overflow: visible; position: absolute; right: 9px; top: 9px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hyUpO.framer-1phz421, .framer-hyUpO .framer-1pdv11y, .framer-hyUpO .framer-qrdflz { gap: 0px; } .framer-hyUpO.framer-1phz421 > *, .framer-hyUpO .framer-1pdv11y > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-hyUpO.framer-1phz421 > :first-child, .framer-hyUpO .framer-1pdv11y > :first-child, .framer-hyUpO .framer-qrdflz > :first-child { margin-left: 0px; } .framer-hyUpO.framer-1phz421 > :last-child, .framer-hyUpO .framer-1pdv11y > :last-child, .framer-hyUpO .framer-qrdflz > :last-child { margin-right: 0px; } .framer-hyUpO .framer-qrdflz > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-hyUpO.framer-v-1t2er75 .framer-1pdv11y { height: 12px; padding: 0px 0px 0px 12px; width: 12px; }",
  ],
  Tt = U(Pm, Um, "framer-hyUpO"),
  Fa = Tt;
Tt.displayName = "Utilities/ShiftWheel";
Tt.defaultProps = { height: 42, width: 129 };
P(Tt, {
  variant: {
    options: ["Ysjx9c0DL", "KB8tywx3q"],
    optionTitles: ["Expanded", "Collasped"],
    title: "Variant",
    type: m.Enum,
  },
  RzZwMeUe3: {
    defaultValue: "Shift",
    displayTextArea: !1,
    title: "Title",
    type: m.String,
  },
  FCG7x4AVC: { title: "Mouse Enter", type: m.EventHandler },
});
X(
  Tt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
          weight: "700",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 },
);
var qm = N(Ia),
  Hm = N(Fa),
  Bm = [
    "yUpRR_W64",
    "OwQollwq5",
    "mr_Rha0DO",
    "Lz_p0wApJ",
    "c0VJ2lvXo",
    "F3YWrVhNh",
  ],
  Xm = "framer-G8AYi",
  Mm = {
    c0VJ2lvXo: "framer-v-14gpqqp",
    F3YWrVhNh: "framer-v-1vy7j9y",
    Lz_p0wApJ: "framer-v-1r5b4xh",
    mr_Rha0DO: "framer-v-5y9y9x",
    OwQollwq5: "framer-v-65m11j",
    yUpRR_W64: "framer-v-gnu4gf",
  };
function Vt(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var Am = { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
  Ym = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  Om = a(w),
  Wm = {
    "Variant 3": "mr_Rha0DO",
    "Variant 4": "Lz_p0wApJ",
    "Variant 5": "c0VJ2lvXo",
    "Variant 6": "F3YWrVhNh",
    Key: "OwQollwq5",
    Pad: "yUpRR_W64",
  },
  Qm = ({ height: t, id: r, width: i, ...n }) => {
    var o, f;
    return {
      ...n,
      variant:
        (f = (o = Wm[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && f !== void 0
          ? f
          : "yUpRR_W64",
    };
  },
  Jm = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Zm = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      { style: o, className: f, layoutId: s, variant: C, ...b } = Qm(t),
      {
        baseVariant: D,
        classNames: l,
        gestureHandlers: c,
        gestureVariant: _,
        setGestureState: F,
        setVariant: I,
        variants: h,
      } = A({
        cycleOrder: Bm,
        defaultVariant: "yUpRR_W64",
        variant: C,
        variantClassNames: Mm,
      }),
      k = Jm(t, h),
      { activeVariantCallback: L, delay: g } = le(D),
      j = L(async (...O) => {
        I("OwQollwq5");
      }),
      d = L(async (...O) => {
        await g(() => I("mr_Rha0DO"), 3e3);
      }),
      R = L(async (...O) => {
        await g(() => I("yUpRR_W64"), 3e3);
      }),
      u = L(async (...O) => {
        I("Lz_p0wApJ");
      }),
      Q = L(async (...O) => {
        I("OwQollwq5");
      }),
      G = L(async (...O) => {
        I("c0VJ2lvXo");
      }),
      K = L(async (...O) => {
        I("mr_Rha0DO");
      });
    Ve(D, {
      c0VJ2lvXo: d,
      default: j,
      F3YWrVhNh: d,
      Lz_p0wApJ: void 0,
      mr_Rha0DO: R,
      OwQollwq5: d,
    });
    let J = T(null),
      Z = H(),
      E = [],
      x = re();
    return e(z, {
      id: s ?? Z,
      children: e(Om, {
        animate: h,
        initial: !1,
        children: e(Ym, {
          value: Am,
          children: p(a.div, {
            ...b,
            ...c,
            className: V(Xm, ...E, "framer-gnu4gf", f, l),
            "data-framer-name": "Pad",
            "data-highlight": !0,
            layoutDependency: k,
            layoutId: "yUpRR_W64",
            ref: r ?? J,
            style: { ...o },
            ...Vt(
              {
                c0VJ2lvXo: { "data-framer-name": "Variant 5" },
                F3YWrVhNh: { "data-framer-name": "Variant 6" },
                Lz_p0wApJ: {
                  "data-framer-name": "Variant 4",
                  "data-highlight": void 0,
                },
                mr_Rha0DO: { "data-framer-name": "Variant 3" },
                OwQollwq5: { "data-framer-name": "Key" },
              },
              D,
              _,
            ),
            children: [
              e(a.div, {
                className: "framer-14iz3s6",
                "data-highlight": !0,
                layoutDependency: k,
                layoutId: "s4pgi8Nj9",
                onMouseEnter: u,
                ...Vt(
                  {
                    F3YWrVhNh: {
                      "data-highlight": void 0,
                      onMouseEnter: void 0,
                    },
                    Lz_p0wApJ: { onMouseEnter: void 0, onMouseLeave: Q },
                  },
                  D,
                  _,
                ),
                children: e(v, {
                  children: e(a.div, {
                    className: "framer-uaueik-container",
                    layoutDependency: k,
                    layoutId: "GuPA1E9Pu-container",
                    children: e(Ia, {
                      height: "100%",
                      id: "GuPA1E9Pu",
                      layoutId: "GuPA1E9Pu",
                      style: { height: "100%" },
                      variant: "x79Cymwke",
                      width: "100%",
                      ...Vt(
                        {
                          c0VJ2lvXo: { variant: "NASPpDxlW" },
                          F3YWrVhNh: { variant: "NASPpDxlW" },
                          OwQollwq5: { variant: "NASPpDxlW" },
                        },
                        D,
                        _,
                      ),
                    }),
                  }),
                }),
              }),
              e(a.div, {
                className: "framer-9bszot",
                "data-highlight": !0,
                layoutDependency: k,
                layoutId: "Gvb0QmZy6",
                onMouseEnter: G,
                ...Vt(
                  {
                    c0VJ2lvXo: { onMouseEnter: void 0, onMouseLeave: K },
                    F3YWrVhNh: {
                      "data-highlight": void 0,
                      onMouseEnter: void 0,
                    },
                  },
                  D,
                  _,
                ),
                children: e(v, {
                  children: e(a.div, {
                    className: "framer-pg9uon-container",
                    layoutDependency: k,
                    layoutId: "IqJbBoK0o-container",
                    children: e(Fa, {
                      height: "100%",
                      id: "IqJbBoK0o",
                      layoutId: "IqJbBoK0o",
                      RzZwMeUe3: "Shift",
                      variant: "KB8tywx3q",
                      width: "100%",
                      ...Vt(
                        {
                          c0VJ2lvXo: { variant: "Ysjx9c0DL" },
                          OwQollwq5: { variant: "Ysjx9c0DL" },
                        },
                        D,
                        _,
                      ),
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Km = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-G8AYi.framer-mhsu3s, .framer-G8AYi .framer-mhsu3s { display: block; }",
    ".framer-G8AYi.framer-gnu4gf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 42px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 161px; }",
    ".framer-G8AYi .framer-14iz3s6, .framer-G8AYi .framer-9bszot { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-G8AYi .framer-uaueik-container { flex: none; height: 42px; position: relative; width: auto; }",
    ".framer-G8AYi .framer-pg9uon-container { flex: none; height: auto; position: relative; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-G8AYi.framer-gnu4gf, .framer-G8AYi .framer-14iz3s6, .framer-G8AYi .framer-9bszot { gap: 0px; } .framer-G8AYi.framer-gnu4gf > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-G8AYi.framer-gnu4gf > :first-child, .framer-G8AYi .framer-14iz3s6 > :first-child, .framer-G8AYi .framer-9bszot > :first-child { margin-left: 0px; } .framer-G8AYi.framer-gnu4gf > :last-child, .framer-G8AYi .framer-14iz3s6 > :last-child, .framer-G8AYi .framer-9bszot > :last-child { margin-right: 0px; } .framer-G8AYi .framer-14iz3s6 > *, .framer-G8AYi .framer-9bszot > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
  ],
  Et = U(Zm, Km, "framer-G8AYi"),
  Na = Et;
Et.displayName = "Utilities/LoopVariants";
Et.defaultProps = { height: 42, width: 161 };
P(Et, {
  variant: {
    options: [
      "yUpRR_W64",
      "OwQollwq5",
      "mr_Rha0DO",
      "Lz_p0wApJ",
      "c0VJ2lvXo",
      "F3YWrVhNh",
    ],
    optionTitles: [
      "Pad",
      "Key",
      "Variant 3",
      "Variant 4",
      "Variant 5",
      "Variant 6",
    ],
    title: "Variant",
    type: m.Enum,
  },
});
X(Et, [{ explicitInter: !0, fonts: [] }, ...qm, ...Hm], {
  supportsExplicitInterCodegen: !0,
});
var $m = Ln(a.div),
  ef = Ne(te),
  tf = Se(te),
  rf = N(Na),
  af = ["U7o7VZZFU", "BPCbmzxXx"],
  nf = "framer-xxSto",
  of = { BPCbmzxXx: "framer-v-10ky0mi", U7o7VZZFU: "framer-v-1arkv3u" };
function Zi(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var sf = { damping: 28, delay: 1.3, mass: 1, stiffness: 178, type: "spring" },
  lf = { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
  mf = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  ff = a(w),
  df = { SwipeLeft: "U7o7VZZFU", SwipeUp: "BPCbmzxXx" },
  cf = ({ height: t, id: r, width: i, ...n }) => {
    var o, f;
    return {
      ...n,
      variant:
        (f = (o = df[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && f !== void 0
          ? f
          : "U7o7VZZFU",
    };
  },
  pf = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  hf = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      { style: o, className: f, layoutId: s, variant: C, ...b } = cf(t),
      {
        baseVariant: D,
        classNames: l,
        clearLoadingGesture: c,
        gestureHandlers: _,
        gestureVariant: F,
        isLoading: I,
        setGestureState: h,
        setVariant: k,
        variants: L,
      } = A({
        cycleOrder: af,
        defaultVariant: "U7o7VZZFU",
        variant: C,
        variantClassNames: of,
      }),
      g = pf(t, L),
      j = T(null),
      d = H(),
      R = [yt],
      u = re();
    return e(z, {
      id: s ?? d,
      children: e(ff, {
        animate: L,
        initial: !1,
        children: e(mf, {
          value: sf,
          ...Zi({ BPCbmzxXx: { value: lf } }, D, F),
          children: p(a.div, {
            ...b,
            ..._,
            className: V(nf, ...R, "framer-1arkv3u", f, l),
            "data-framer-name": "SwipeLeft",
            layoutDependency: g,
            layoutId: "U7o7VZZFU",
            ref: r ?? j,
            style: { ...o },
            ...Zi({ BPCbmzxXx: { "data-framer-name": "SwipeUp" } }, D, F),
            children: [
              p(a.div, {
                className: "framer-1gx3g3m",
                layoutDependency: g,
                layoutId: "JSAN7d7ZB",
                children: [
                  e($m, {
                    className: "framer-1hy14ow",
                    layoutDependency: g,
                    layoutId: "EB8WmDR0M",
                    children: e(ae, {
                      className: "framer-u6punt",
                      layout: "position",
                      layoutDependency: g,
                      layoutId: "FVpXzD1cMMFR743p8y",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 15 6 L 9.707 11.293 C 9.374 11.626 9.207 11.793 9.207 12 C 9.207 12.207 9.374 12.374 9.707 12.707 L 15 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 12200614001,
                      withExternalLayout: !0,
                    }),
                  }),
                  e(ef, {
                    __fromCanvasComponent: !0,
                    children: e(w, {
                      children: e(a.p, {
                        className: "framer-styles-preset-9jlebu",
                        "data-styles-preset": "sSyE5_N0_",
                        children: "Explore content with",
                      }),
                    }),
                    className: "framer-17jsbwi",
                    fonts: ["Inter"],
                    layoutDependency: g,
                    layoutId: "ZWn_Z5_bW",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(tf, {
                    __fromCanvasComponent: !0,
                    children: e(w, {
                      children: e(a.p, {
                        className: "framer-styles-preset-9jlebu",
                        "data-styles-preset": "sSyE5_N0_",
                        children: "\u63A2\u7D22\u5185\u5BB9",
                      }),
                    }),
                    className: "framer-3k8kct",
                    fonts: ["Inter"],
                    layoutDependency: g,
                    layoutId: "CW4WSA375",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
              e(v, {
                children: e(a.div, {
                  className: "framer-k5meu2-container",
                  layoutDependency: g,
                  layoutId: "c_NQZoVWi-container",
                  style: { opacity: 1 },
                  variants: { BPCbmzxXx: { opacity: 0 } },
                  children: e(Na, {
                    height: "100%",
                    id: "c_NQZoVWi",
                    layoutId: "c_NQZoVWi",
                    style: { height: "100%" },
                    variant: "yUpRR_W64",
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
  uf = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-xxSto.framer-8etf3o, .framer-xxSto .framer-8etf3o { display: block; }",
    ".framer-xxSto.framer-1arkv3u { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 42px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 362px; }",
    ".framer-xxSto .framer-1gx3g3m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-xxSto .framer-1hy14ow { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-xxSto .framer-u6punt { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-xxSto .framer-17jsbwi, .framer-xxSto .framer-3k8kct { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-xxSto .framer-k5meu2-container { flex: none; height: 42px; position: relative; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xxSto.framer-1arkv3u, .framer-xxSto .framer-1gx3g3m, .framer-xxSto .framer-1hy14ow { gap: 0px; } .framer-xxSto.framer-1arkv3u > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-xxSto.framer-1arkv3u > :first-child, .framer-xxSto .framer-1gx3g3m > :first-child, .framer-xxSto .framer-1hy14ow > :first-child { margin-left: 0px; } .framer-xxSto.framer-1arkv3u > :last-child, .framer-xxSto .framer-1gx3g3m > :last-child, .framer-xxSto .framer-1hy14ow > :last-child { margin-right: 0px; } .framer-xxSto .framer-1gx3g3m > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-xxSto .framer-1hy14ow > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ...ut,
  ],
  zt = U(hf, uf, "framer-xxSto"),
  Sa = zt;
zt.displayName = "Utilities/LoopTips";
zt.defaultProps = { height: 42, width: 362 };
P(zt, {
  variant: {
    options: ["U7o7VZZFU", "BPCbmzxXx"],
    optionTitles: ["SwipeLeft", "SwipeUp"],
    title: "Variant",
    type: m.Enum,
  },
});
X(
  zt,
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
    ...rf,
    ...ve(ht),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var ja = {};
Rt(ja, { __FramerMetadata__: () => Sf, default: () => wr });
var yf = Ne(te),
  gf = Se(te),
  xf = { cU0xCisiI: { hover: !0 } },
  vf = ["cU0xCisiI"],
  wf = "framer-EBH0e",
  bf = { cU0xCisiI: "framer-v-uux9jp" };
function kf(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var Cf = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Rf = (t) => {
    if (typeof t != "number") return t;
    if (Number.isFinite(t)) return Math.max(0, t) + "px";
  },
  _f = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  Df = a(w),
  Lf = ({
    click: t,
    height: r,
    id: i,
    padding: n,
    width: o,
    zoom: f,
    ...s
  }) => {
    var C;
    return {
      ...s,
      gaejvaWNT: t ?? s.gaejvaWNT,
      ktrOcOIHd: f ?? s.ktrOcOIHd,
      WkYYvDCa1:
        (C = n ?? s.WkYYvDCa1) !== null && C !== void 0
          ? C
          : "14px 20px 14px 20px",
    };
  },
  If = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Ff = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        gaejvaWNT: b,
        ktrOcOIHd: D,
        WkYYvDCa1: l,
        ...c
      } = Lf(t),
      {
        baseVariant: _,
        classNames: F,
        clearLoadingGesture: I,
        gestureHandlers: h,
        gestureVariant: k,
        isLoading: L,
        setGestureState: g,
        setVariant: j,
        variants: d,
      } = A({
        cycleOrder: vf,
        defaultVariant: "cU0xCisiI",
        enabledGestures: xf,
        variant: C,
        variantClassNames: bf,
      }),
      R = If(t, d),
      { activeVariantCallback: u, delay: Q } = le(_),
      G = u(async (...x) => {
        if ((b && (await b(...x)) === !1) || (D && (await D(...x)) === !1))
          return !1;
      }),
      K = T(null),
      J = H(),
      Z = [Ri],
      E = re();
    return e(z, {
      id: s ?? J,
      children: e(Df, {
        animate: d,
        initial: !1,
        children: e(_f, {
          value: Cf,
          children: e(a.div, {
            ...c,
            ...h,
            className: V(wf, ...Z, "framer-uux9jp", f, F),
            "data-framer-name": "Titles",
            layoutDependency: R,
            layoutId: "cU0xCisiI",
            ref: r ?? K,
            style: { ...o },
            ...kf({ "cU0xCisiI-hover": { "data-framer-name": void 0 } }, _, k),
            children: p(a.div, {
              className: "framer-ewkntx",
              "data-highlight": !0,
              layoutDependency: R,
              layoutId: "m3nUdoGdr",
              onTap: G,
              style: {
                "--ftyot2": Rf(l),
                backgroundColor:
                  "var(--token-06c3110c-0775-4f83-beaa-2e83a6a2d842, rgb(0, 0, 0))",
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
              },
              children: [
                e(yf, {
                  __fromCanvasComponent: !0,
                  children: e(w, {
                    children: e(a.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, rgb(255, 255, 255))",
                      },
                      children:
                        "Jayzhushi.com has been remastered, check the logs.",
                    }),
                  }),
                  className: "framer-1gv2bud",
                  fonts: ["Inter"],
                  layoutDependency: R,
                  layoutId: "NY3BnV4bM",
                  style: {
                    "--extracted-1lwpl3i": "rgb(255, 255, 255)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(gf, {
                  __fromCanvasComponent: !0,
                  children: e(w, {
                    children: e(a.h5, {
                      className: "framer-styles-preset-9k6rgp",
                      "data-styles-preset": "f9YDJyYdv",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-1lwpl3i, rgb(255, 255, 255))",
                      },
                      children:
                        "Jayzhushi.com \u5DF2\u7ECF\u91CD\u5236\uFF0C\u656C\u8BF7\u67E5\u770B\u66F4\u65B0\u65E5\u5FD7",
                    }),
                  }),
                  className: "framer-1gwwgtx",
                  fonts: ["Inter"],
                  layoutDependency: R,
                  layoutId: "udVHyErfR",
                  style: {
                    "--extracted-1lwpl3i": "rgb(255, 255, 255)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(a.div, {
                  className: "framer-1hbwro5",
                  layoutDependency: R,
                  layoutId: "bUhMO6o5O",
                  style: { rotate: 0 },
                  variants: { "cU0xCisiI-hover": { rotate: 90 } },
                  children: e(ae, {
                    className: "framer-25g2tg",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: R,
                    layoutId: "PYGNbe5ah",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 3.333 L 10 16.667 M 16.667 10 L 3.333 10" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                    svgContentId: 10091957626,
                    withExternalLayout: !0,
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Nf = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-EBH0e.framer-kiiyki, .framer-EBH0e .framer-kiiyki { display: block; }",
    ".framer-EBH0e.framer-uux9jp { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 600px; }",
    ".framer-EBH0e .framer-ewkntx { align-content: center; align-items: center; cursor: pointer; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: var(--ftyot2); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-EBH0e .framer-1gv2bud, .framer-EBH0e .framer-1gwwgtx { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-EBH0e .framer-1hbwro5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-EBH0e .framer-25g2tg { flex: none; height: 20px; position: relative; width: 20px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-EBH0e.framer-uux9jp, .framer-EBH0e .framer-ewkntx, .framer-EBH0e .framer-1hbwro5 { gap: 0px; } .framer-EBH0e.framer-uux9jp > *, .framer-EBH0e .framer-1hbwro5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-EBH0e.framer-uux9jp > :first-child, .framer-EBH0e .framer-ewkntx > :first-child, .framer-EBH0e .framer-1hbwro5 > :first-child { margin-left: 0px; } .framer-EBH0e.framer-uux9jp > :last-child, .framer-EBH0e .framer-ewkntx > :last-child, .framer-EBH0e .framer-1hbwro5 > :last-child { margin-right: 0px; } .framer-EBH0e .framer-ewkntx > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } }",
    ...Ci,
  ],
  Pt = U(Ff, Nf, "framer-EBH0e"),
  wr = Pt;
Pt.displayName = "Home/NoticeBoard";
Pt.defaultProps = { height: 75, width: 600 };
P(Pt, {
  gaejvaWNT: { title: "Click", type: m.EventHandler },
  ktrOcOIHd: { title: "Zoom", type: m.EventHandler },
  WkYYvDCa1: {
    defaultValue: "14px 20px 14px 20px",
    title: "Padding",
    type: m.Padding,
  },
});
X(
  Pt,
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
    ...ve(ki),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Sf = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerO7FC3YBnl",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"JbdUNmnJg":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
        framerContractVersion: "1",
        framerIntrinsicHeight: "75",
        framerImmutableVariables: "true",
        framerVariables:
          '{"gaejvaWNT":"click","ktrOcOIHd":"zoom","WkYYvDCa1":"padding"}',
        framerIntrinsicWidth: "600",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var jf = N(wr),
  Ki = pe(jn(wr), ja),
  We = nt(Te(a.div)),
  Gf = An(a.div),
  Tf = N(fe),
  Vf = N(yr),
  Ef = N(Sa),
  zf = Dn(a.div),
  Pf = N(Mr),
  Ga = pe(Yn(Mr), ai),
  $i = _n(a.div),
  Uf = N(ka),
  qf = ["wjO3vJukO", "kEI69CE4x", "Y79x8Bi33", "L6nrxpQNX"],
  Hf = "framer-NnDgX",
  Bf = {
    kEI69CE4x: "framer-v-11kkge0",
    L6nrxpQNX: "framer-v-1dobbam",
    wjO3vJukO: "framer-v-o9so21",
    Y79x8Bi33: "framer-v-w8rfgq",
  };
function ne(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var Xf = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Mf = { damping: 14, delay: 0.2, mass: 1, stiffness: 140, type: "spring" },
  eo = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Mf,
    x: 0,
    y: 0,
  },
  Af = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 60,
  },
  Yf = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 84,
  },
  Of = { damping: 14, delay: 0.32, mass: 1, stiffness: 140, type: "spring" },
  to = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Of,
    x: 0,
    y: 0,
  },
  Wf = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 58,
  },
  Qf = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 37,
  },
  Jf = (t, r) => `translateY(-50%) ${r}`,
  Zf = { delay: 0.45, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Kf = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Zf,
    x: 0,
    y: 0,
  },
  $f = {
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
  ed = { damping: 14, delay: 0.6, mass: 1, stiffness: 140, type: "spring" },
  td = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: ed,
    x: 0,
    y: 0,
  },
  Ta = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 80,
  },
  rd = { damping: 14, delay: 0.64, mass: 1, stiffness: 140, type: "spring" },
  ad = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: rd,
    x: 0,
    y: 0,
  },
  nd = { damping: 14, delay: 0.68, mass: 1, stiffness: 140, type: "spring" },
  id = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: nd,
    x: 0,
    y: 0,
  },
  od = { damping: 14, delay: 0.72, mass: 1, stiffness: 100, type: "spring" },
  sd = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: od,
    x: 0,
    y: 0,
  },
  ld = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.45,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 0,
  },
  md = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  fd = a.create(w),
  dd = {
    Desktop: "kEI69CE4x",
    Monitor: "wjO3vJukO",
    Phone: "L6nrxpQNX",
    Tablet: "Y79x8Bi33",
  },
  cd = ({ cursor: t, height: r, id: i, notice: n, width: o, ...f }) => {
    var s, C;
    return {
      ...f,
      qaEc9EhOH: t ?? f.qaEc9EhOH,
      qdPCOLmbA: n ?? f.qdPCOLmbA,
      variant:
        (C = (s = dd[f.variant]) !== null && s !== void 0 ? s : f.variant) !==
          null && C !== void 0
          ? C
          : "wjO3vJukO",
    };
  },
  pd = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  hd = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        qaEc9EhOH: b,
        qdPCOLmbA: D,
        ...l
      } = cd(t),
      {
        baseVariant: c,
        classNames: _,
        clearLoadingGesture: F,
        gestureHandlers: I,
        gestureVariant: h,
        isLoading: k,
        setGestureState: L,
        setVariant: g,
        variants: j,
      } = A({
        cycleOrder: qf,
        defaultVariant: "wjO3vJukO",
        variant: C,
        variantClassNames: Bf,
      }),
      d = pd(t, j),
      { activeVariantCallback: R, delay: u } = le(c),
      Q = R(async (...ue) => {
        if (D && (await D(...ue)) === !1) return !1;
      }),
      G = T(null),
      K = () => c !== "L6nrxpQNX",
      J = () => c === "L6nrxpQNX",
      Z = () => !["Y79x8Bi33", "L6nrxpQNX"].includes(c),
      E = () => !!["Y79x8Bi33", "L6nrxpQNX"].includes(c),
      x = H(),
      O = [],
      y = re();
    return e(z, {
      id: s ?? x,
      children: e(fd, {
        animate: j,
        initial: !1,
        children: e(md, {
          value: Xf,
          children: p(a.div, {
            ...l,
            ...I,
            className: V(Hf, ...O, "framer-o9so21", f, _),
            "data-framer-name": "Monitor",
            layoutDependency: d,
            layoutId: "wjO3vJukO",
            ref: r ?? G,
            style: { ...o },
            ...ne(
              {
                kEI69CE4x: { "data-framer-name": "Desktop" },
                L6nrxpQNX: { "data-framer-name": "Phone" },
                Y79x8Bi33: { "data-framer-name": "Tablet" },
              },
              c,
              h,
            ),
            children: [
              p(a.div, {
                className: "framer-mqjs1b",
                "data-framer-name": "Main",
                layoutDependency: d,
                layoutId: "z9AmBGlcf",
                children: [
                  K() &&
                    e(Gf, {
                      className: "framer-1vgzpxb",
                      "data-framer-name": "Whatthefxck",
                      layoutDependency: d,
                      layoutId: "HJ8QHAsI5",
                      children: e(v, {
                        height: 75,
                        width: "550px",
                        y:
                          (y?.y || 0) +
                          0 +
                          (((y?.height || 564) - 0 - 904) / 2 + 0 + 0) +
                          0 +
                          0 +
                          10,
                        ...ne(
                          {
                            kEI69CE4x: {
                              y:
                                (y?.y || 0) +
                                0 +
                                (((y?.height || 518) - 0 - 904) / 2 + 0 + 0) +
                                0 +
                                0 +
                                10,
                            },
                            Y79x8Bi33: { y: void 0 },
                          },
                          c,
                          h,
                        ),
                        children: e(We, {
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: eo,
                          className: "framer-1bky5ic-container",
                          "data-framer-appear-id": "1bky5ic",
                          initial: Af,
                          layoutDependency: d,
                          layoutId: "wxDkU5aRf-container",
                          optimized: !0,
                          children: e(Ki, {
                            gaejvaWNT: Q,
                            height: "100%",
                            id: "wxDkU5aRf",
                            layoutId: "wxDkU5aRf",
                            style: { width: "100%" },
                            width: "100%",
                            WkYYvDCa1: "14px 20px 14px 20px",
                          }),
                        }),
                      }),
                    }),
                  J() &&
                    e(a.div, {
                      className: "framer-lugczf",
                      "data-framer-name": "Noti",
                      layoutDependency: d,
                      layoutId: "qN5MCkj5s",
                      children: e(v, {
                        height: 75,
                        ...ne(
                          {
                            L6nrxpQNX: {
                              width: `max(${y?.width || "100vw"} * 1, 1px)`,
                            },
                          },
                          c,
                          h,
                        ),
                        children: e(We, {
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: eo,
                          className: "framer-schasc-container",
                          "data-framer-appear-id": "schasc",
                          initial: Yf,
                          layoutDependency: d,
                          layoutId: "A5AhCppu4-container",
                          optimized: !0,
                          children: e(Ki, {
                            gaejvaWNT: Q,
                            height: "100%",
                            id: "A5AhCppu4",
                            layoutId: "A5AhCppu4",
                            style: { width: "100%" },
                            width: "100%",
                            WkYYvDCa1: "14px 20px 14px 24px",
                          }),
                        }),
                      }),
                    }),
                  p(a.div, {
                    className: "framer-7fosmq",
                    "data-framer-name": "Titles",
                    layoutDependency: d,
                    layoutId: "MG9MfhVux",
                    children: [
                      Z() &&
                        p(a.div, {
                          className: "framer-2enn4i",
                          layoutDependency: d,
                          layoutId: "hlxfCkK7O",
                          children: [
                            e(v, {
                              children: e(a.div, {
                                className: "framer-1y1v4y-container",
                                layoutDependency: d,
                                layoutId: "fK2J6Y90r-container",
                                children: e(fe, {
                                  color:
                                    "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                                  damping: 14,
                                  delay: 0.2,
                                  exit_delay: 1,
                                  font: {
                                    fontFamily:
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    fontSize: "86px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    letterSpacing: "-0.01em",
                                    lineHeight: "1.1em",
                                  },
                                  gap: 0,
                                  height: "100%",
                                  id: "fK2J6Y90r",
                                  layoutId: "fK2J6Y90r",
                                  stiffness: 140,
                                  text_chn: "\u4E00\u4E2A",
                                  text: "an",
                                  trigger: "Enter",
                                  width: "100%",
                                  ...ne(
                                    {
                                      kEI69CE4x: {
                                        font: {
                                          fontFamily:
                                            '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                          fontSize: "72px",
                                          fontStyle: "normal",
                                          fontWeight: 500,
                                          letterSpacing: "-0.01em",
                                          lineHeight: "1.1em",
                                        },
                                      },
                                    },
                                    c,
                                    h,
                                  ),
                                }),
                              }),
                            }),
                            e(v, {
                              children: e(a.div, {
                                className: "framer-1x9psfw-container",
                                layoutDependency: d,
                                layoutId: "ts2ixHBDy-container",
                                children: e(fe, {
                                  color:
                                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                  damping: 14,
                                  delay: 0.2,
                                  exit_delay: 1,
                                  font: {
                                    fontFamily:
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    fontSize: "86px",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    letterSpacing: "-0.01em",
                                    lineHeight: "1.1em",
                                  },
                                  gap: 0.04,
                                  height: "100%",
                                  id: "ts2ixHBDy",
                                  layoutId: "ts2ixHBDy",
                                  stiffness: 140,
                                  text_chn: "\u8DE8\u5B66\u79D1",
                                  text: "interdisciplinary",
                                  trigger: "Enter",
                                  width: "100%",
                                  ...ne(
                                    {
                                      kEI69CE4x: {
                                        font: {
                                          fontFamily:
                                            '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                          fontSize: "72px",
                                          fontStyle: "normal",
                                          fontWeight: 700,
                                          letterSpacing: "-0.01em",
                                          lineHeight: "1.1em",
                                        },
                                      },
                                    },
                                    c,
                                    h,
                                  ),
                                }),
                              }),
                            }),
                            e(v, {
                              children: e(a.div, {
                                className: "framer-dp8a7k-container",
                                layoutDependency: d,
                                layoutId: "TR7Gk8Ooe-container",
                                children: e(fe, {
                                  color:
                                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                  damping: 14,
                                  delay: 0.2,
                                  exit_delay: 1,
                                  font: {
                                    fontFamily:
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    fontSize: "86px",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    letterSpacing: "-0.01em",
                                    lineHeight: "1.1em",
                                  },
                                  gap: 0.08,
                                  height: "100%",
                                  id: "TR7Gk8Ooe",
                                  layoutId: "TR7Gk8Ooe",
                                  stiffness: 140,
                                  text_chn: "\u8BBE\u8BA1\u5E08",
                                  text: "designer",
                                  trigger: "Enter",
                                  width: "100%",
                                  ...ne(
                                    {
                                      kEI69CE4x: {
                                        font: {
                                          fontFamily:
                                            '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                          fontSize: "72px",
                                          fontStyle: "normal",
                                          fontWeight: 700,
                                          letterSpacing: "-0.01em",
                                          lineHeight: "1.1em",
                                        },
                                      },
                                    },
                                    c,
                                    h,
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                      Z() &&
                        p(a.div, {
                          className: "framer-1nypbct",
                          layoutDependency: d,
                          layoutId: "hZOxfcRfo",
                          children: [
                            e(a.div, {
                              className: "framer-169fuzj",
                              "data-framer-cursor": b,
                              layoutDependency: d,
                              layoutId: "dVlBTBzIQ",
                              children: e(v, {
                                height: 81,
                                y:
                                  (y?.y || 0) +
                                  0 +
                                  (((y?.height || 564) - 0 - 904) / 2 + 0 + 0) +
                                  0 +
                                  101 +
                                  0 +
                                  212 +
                                  54.5 +
                                  10 +
                                  0,
                                ...ne(
                                  {
                                    kEI69CE4x: {
                                      y:
                                        (y?.y || 0) +
                                        0 +
                                        (((y?.height || 518) - 0 - 904) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        101 +
                                        0 +
                                        212 +
                                        54.5 +
                                        10 +
                                        0,
                                    },
                                  },
                                  c,
                                  h,
                                ),
                                children: e(a.div, {
                                  className: "framer-13s8xye-container",
                                  layoutDependency: d,
                                  layoutId: "Ppe6PRqUX-container",
                                  children: e(yr, {
                                    height: "100%",
                                    id: "Ppe6PRqUX",
                                    layoutId: "Ppe6PRqUX",
                                    variant: "h8a_pZJCm",
                                    width: "100%",
                                    ...ne(
                                      { kEI69CE4x: { variant: "X5XFaT1T0" } },
                                      c,
                                      h,
                                    ),
                                  }),
                                }),
                              }),
                            }),
                            e(v, {
                              children: e(a.div, {
                                className: "framer-9jmw56-container",
                                layoutDependency: d,
                                layoutId: "F0eFA5PXD-container",
                                children: e(fe, {
                                  color:
                                    "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                                  damping: 14,
                                  delay: 0.2,
                                  exit_delay: 1,
                                  font: {
                                    fontFamily:
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    fontSize: "86px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    letterSpacing: "-0.01em",
                                    lineHeight: "1.1em",
                                  },
                                  gap: 0.12,
                                  height: "100%",
                                  id: "F0eFA5PXD",
                                  layoutId: "F0eFA5PXD",
                                  stiffness: 140,
                                  text_chn: "\u4ED6",
                                  text: "who",
                                  trigger: "Enter",
                                  width: "100%",
                                  ...ne(
                                    {
                                      kEI69CE4x: {
                                        font: {
                                          fontFamily:
                                            '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                          fontSize: "72px",
                                          fontStyle: "normal",
                                          fontWeight: 500,
                                          letterSpacing: "-0.01em",
                                          lineHeight: "1.1em",
                                        },
                                      },
                                    },
                                    c,
                                    h,
                                  ),
                                }),
                              }),
                            }),
                            e(v, {
                              children: e(a.div, {
                                className: "framer-5rhn77-container",
                                layoutDependency: d,
                                layoutId: "pYbwejfZh-container",
                                children: e(fe, {
                                  color:
                                    "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                                  damping: 14,
                                  delay: 0.2,
                                  exit_delay: 1,
                                  font: {
                                    fontFamily:
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    fontSize: "86px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    letterSpacing: "-0.01em",
                                    lineHeight: "1.1em",
                                  },
                                  gap: 0.16,
                                  height: "100%",
                                  id: "pYbwejfZh",
                                  layoutId: "pYbwejfZh",
                                  stiffness: 140,
                                  text_chn: "\u5C1D\u8BD5",
                                  text: "seek",
                                  trigger: "Enter",
                                  width: "100%",
                                  ...ne(
                                    {
                                      kEI69CE4x: {
                                        font: {
                                          fontFamily:
                                            '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                          fontSize: "72px",
                                          fontStyle: "normal",
                                          fontWeight: 500,
                                          letterSpacing: "-0.01em",
                                          lineHeight: "1.1em",
                                        },
                                      },
                                    },
                                    c,
                                    h,
                                  ),
                                }),
                              }),
                            }),
                            e(v, {
                              children: e(a.div, {
                                className: "framer-179n6j-container",
                                layoutDependency: d,
                                layoutId: "B3F1rLcWy-container",
                                children: e(fe, {
                                  color:
                                    "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                                  damping: 14,
                                  delay: 0.2,
                                  exit_delay: 1,
                                  font: {
                                    fontFamily:
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    fontSize: "86px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    letterSpacing: "-0.01em",
                                    lineHeight: "1.1em",
                                  },
                                  gap: 0.2,
                                  height: "100%",
                                  id: "B3F1rLcWy",
                                  layoutId: "B3F1rLcWy",
                                  stiffness: 140,
                                  text_chn: "\u7740",
                                  text: "to",
                                  trigger: "Enter",
                                  width: "100%",
                                  ...ne(
                                    {
                                      kEI69CE4x: {
                                        font: {
                                          fontFamily:
                                            '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                          fontSize: "72px",
                                          fontStyle: "normal",
                                          fontWeight: 500,
                                          letterSpacing: "-0.01em",
                                          lineHeight: "1.1em",
                                        },
                                      },
                                    },
                                    c,
                                    h,
                                  ),
                                }),
                              }),
                            }),
                            e(v, {
                              children: e(a.div, {
                                className: "framer-f3jocx-container",
                                layoutDependency: d,
                                layoutId: "wIOcGLvmv-container",
                                children: e(fe, {
                                  color:
                                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                  damping: 14,
                                  delay: 0.2,
                                  exit_delay: 1,
                                  font: {
                                    fontFamily:
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    fontSize: "86px",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    letterSpacing: "-0.01em",
                                    lineHeight: "1.1em",
                                  },
                                  gap: 0.24,
                                  height: "100%",
                                  id: "wIOcGLvmv",
                                  layoutId: "wIOcGLvmv",
                                  stiffness: 140,
                                  text_chn: "\u878D\u5408",
                                  text: "blend",
                                  trigger: "Enter",
                                  width: "100%",
                                  ...ne(
                                    {
                                      kEI69CE4x: {
                                        font: {
                                          fontFamily:
                                            '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                          fontSize: "72px",
                                          fontStyle: "normal",
                                          fontWeight: 700,
                                          letterSpacing: "-0.01em",
                                          lineHeight: "1.1em",
                                        },
                                      },
                                    },
                                    c,
                                    h,
                                  ),
                                }),
                              }),
                            }),
                            e(v, {
                              children: e(a.div, {
                                className: "framer-p5sm2n-container",
                                layoutDependency: d,
                                layoutId: "vge7Xk10E-container",
                                children: e(fe, {
                                  color:
                                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                  damping: 14,
                                  delay: 0.2,
                                  exit_delay: 1,
                                  font: {
                                    fontFamily:
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    fontSize: "86px",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    letterSpacing: "-0.01em",
                                    lineHeight: "1.1em",
                                  },
                                  gap: 0.28,
                                  height: "100%",
                                  id: "vge7Xk10E",
                                  layoutId: "vge7Xk10E",
                                  stiffness: 140,
                                  text_chn: "\u89C1\u89E3",
                                  text: "insights",
                                  trigger: "Enter",
                                  width: "100%",
                                  ...ne(
                                    {
                                      kEI69CE4x: {
                                        font: {
                                          fontFamily:
                                            '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                          fontSize: "72px",
                                          fontStyle: "normal",
                                          fontWeight: 700,
                                          letterSpacing: "-0.01em",
                                          lineHeight: "1.1em",
                                        },
                                      },
                                    },
                                    c,
                                    h,
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                      Z() &&
                        p(a.div, {
                          className: "framer-1ke0w7q",
                          layoutDependency: d,
                          layoutId: "eXSwj00AT",
                          children: [
                            e(v, {
                              children: e(a.div, {
                                className: "framer-19zbx2f-container",
                                layoutDependency: d,
                                layoutId: "zkBiiyfsd-container",
                                children: e(fe, {
                                  color:
                                    "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                                  damping: 14,
                                  delay: 0.2,
                                  exit_delay: 1,
                                  font: {
                                    fontFamily:
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    fontSize: "86px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    letterSpacing: "-0.01em",
                                    lineHeight: "1.1em",
                                  },
                                  gap: 0.32,
                                  height: "100%",
                                  id: "zkBiiyfsd",
                                  layoutId: "zkBiiyfsd",
                                  stiffness: 140,
                                  text_chn: "&",
                                  text: "&",
                                  trigger: "Enter",
                                  width: "100%",
                                  ...ne(
                                    {
                                      kEI69CE4x: {
                                        font: {
                                          fontFamily:
                                            '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                          fontSize: "72px",
                                          fontStyle: "normal",
                                          fontWeight: 500,
                                          letterSpacing: "-0.01em",
                                          lineHeight: "1.1em",
                                        },
                                      },
                                    },
                                    c,
                                    h,
                                  ),
                                }),
                              }),
                            }),
                            e(v, {
                              children: e(a.div, {
                                className: "framer-1b6cv5k-container",
                                layoutDependency: d,
                                layoutId: "wMdqJ9Wy1-container",
                                children: e(fe, {
                                  color:
                                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                  damping: 14,
                                  delay: 0.2,
                                  exit_delay: 1,
                                  font: {
                                    fontFamily:
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    fontSize: "86px",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    letterSpacing: "-0.01em",
                                    lineHeight: "1.1em",
                                  },
                                  gap: 0.36,
                                  height: "100%",
                                  id: "wMdqJ9Wy1",
                                  layoutId: "wMdqJ9Wy1",
                                  stiffness: 140,
                                  text_chn: "\u89E3\u9501",
                                  text: "unlock",
                                  trigger: "Enter",
                                  width: "100%",
                                  ...ne(
                                    {
                                      kEI69CE4x: {
                                        font: {
                                          fontFamily:
                                            '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                          fontSize: "72px",
                                          fontStyle: "normal",
                                          fontWeight: 700,
                                          letterSpacing: "-0.01em",
                                          lineHeight: "1.1em",
                                        },
                                      },
                                    },
                                    c,
                                    h,
                                  ),
                                }),
                              }),
                            }),
                            e(v, {
                              children: e(a.div, {
                                className: "framer-1adq0m-container",
                                layoutDependency: d,
                                layoutId: "aLcldb6XD-container",
                                children: e(fe, {
                                  color:
                                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                  damping: 14,
                                  delay: 0.2,
                                  exit_delay: 1,
                                  font: {
                                    fontFamily:
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    fontSize: "86px",
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    letterSpacing: "-0.01em",
                                    lineHeight: "1.1em",
                                  },
                                  gap: 0.4,
                                  height: "100%",
                                  id: "aLcldb6XD",
                                  layoutId: "aLcldb6XD",
                                  stiffness: 140,
                                  text_chn: "\u7075\u611F\u3002",
                                  text: "inspiration.",
                                  trigger: "Enter",
                                  width: "100%",
                                  ...ne(
                                    {
                                      kEI69CE4x: {
                                        font: {
                                          fontFamily:
                                            '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                          fontSize: "72px",
                                          fontStyle: "normal",
                                          fontWeight: 700,
                                          letterSpacing: "-0.01em",
                                          lineHeight: "1.1em",
                                        },
                                      },
                                    },
                                    c,
                                    h,
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                      E() &&
                        e(v, {
                          children: e(a.div, {
                            className: "framer-nc5iir-container",
                            layoutDependency: d,
                            layoutId: "TDjvptexd-container",
                            children: e(fe, {
                              color:
                                "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                              damping: 14,
                              delay: 0.2,
                              exit_delay: 1,
                              font: {
                                fontFamily:
                                  '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                fontSize: "64px",
                                fontStyle: "normal",
                                fontWeight: 500,
                                letterSpacing: "-0.01em",
                                lineHeight: "1.1em",
                              },
                              gap: 0,
                              height: "100%",
                              id: "TDjvptexd",
                              layoutId: "TDjvptexd",
                              stiffness: 140,
                              text_chn: "\u4E00\u4E2A",
                              text: "an",
                              trigger: "Show",
                              width: "100%",
                              ...ne(
                                {
                                  L6nrxpQNX: {
                                    font: {
                                      fontFamily:
                                        '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                      fontSize: "44px",
                                      fontStyle: "normal",
                                      fontWeight: 500,
                                      letterSpacing: "-0.01em",
                                      lineHeight: "1.1em",
                                    },
                                    trigger: "Enter",
                                  },
                                  Y79x8Bi33: { trigger: "Enter" },
                                },
                                c,
                                h,
                              ),
                            }),
                          }),
                        }),
                      E() &&
                        e(v, {
                          children: e(a.div, {
                            className: "framer-4zmyea-container",
                            layoutDependency: d,
                            layoutId: "KkgqQEqkC-container",
                            children: e(fe, {
                              color:
                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                              damping: 14,
                              delay: 0.2,
                              exit_delay: 1,
                              font: {
                                fontFamily:
                                  '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                fontSize: "64px",
                                fontStyle: "normal",
                                fontWeight: 700,
                                letterSpacing: "-0.01em",
                                lineHeight: "1.1em",
                              },
                              gap: 0.04,
                              height: "100%",
                              id: "KkgqQEqkC",
                              layoutId: "KkgqQEqkC",
                              stiffness: 140,
                              text_chn: "\u8DE8\u5B66\u79D1",
                              text: "interdisciplinary",
                              trigger: "Show",
                              width: "100%",
                              ...ne(
                                {
                                  L6nrxpQNX: {
                                    font: {
                                      fontFamily:
                                        '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                      fontSize: "44px",
                                      fontStyle: "normal",
                                      fontWeight: 700,
                                      letterSpacing: "-0.01em",
                                      lineHeight: "1.1em",
                                    },
                                    trigger: "Enter",
                                  },
                                  Y79x8Bi33: { trigger: "Enter" },
                                },
                                c,
                                h,
                              ),
                            }),
                          }),
                        }),
                      E() &&
                        e(v, {
                          children: e(a.div, {
                            className: "framer-1x3nzu4-container",
                            layoutDependency: d,
                            layoutId: "wSTdf69Ww-container",
                            children: e(fe, {
                              color:
                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                              damping: 14,
                              delay: 0.2,
                              exit_delay: 1,
                              font: {
                                fontFamily:
                                  '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                fontSize: "64px",
                                fontStyle: "normal",
                                fontWeight: 700,
                                letterSpacing: "-0.01em",
                                lineHeight: "1.1em",
                              },
                              gap: 0.08,
                              height: "100%",
                              id: "wSTdf69Ww",
                              layoutId: "wSTdf69Ww",
                              stiffness: 140,
                              text_chn: "\u8BBE\u8BA1\u5E08",
                              text: "designer",
                              trigger: "Show",
                              width: "100%",
                              ...ne(
                                {
                                  L6nrxpQNX: {
                                    font: {
                                      fontFamily:
                                        '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                      fontSize: "44px",
                                      fontStyle: "normal",
                                      fontWeight: 700,
                                      letterSpacing: "-0.01em",
                                      lineHeight: "1.1em",
                                    },
                                    trigger: "Enter",
                                  },
                                  Y79x8Bi33: { trigger: "Enter" },
                                },
                                c,
                                h,
                              ),
                            }),
                          }),
                        }),
                      E() &&
                        e(a.div, {
                          className: "framer-14ii4y7",
                          "data-framer-cursor": b,
                          layoutDependency: d,
                          layoutId: "T8ksaE1bp",
                          children: e(v, {
                            height: 81,
                            children: e(We, {
                              className: "framer-1fhjfq8-container",
                              "data-framer-appear-id": "1fhjfq8",
                              layoutDependency: d,
                              layoutId: "rflzPeQB4-container",
                              variants: {
                                L6nrxpQNX: { transformPerspective: 1200 },
                                Y79x8Bi33: { transformPerspective: 1200 },
                              },
                              ...ne(
                                {
                                  L6nrxpQNX: {
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    animate: to,
                                    initial: Qf,
                                    optimized: !0,
                                  },
                                  Y79x8Bi33: {
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    animate: to,
                                    initial: Wf,
                                    optimized: !0,
                                  },
                                },
                                c,
                                h,
                              ),
                              children: e(yr, {
                                height: "100%",
                                id: "rflzPeQB4",
                                layoutId: "rflzPeQB4",
                                variant: "ekaJDNXT2",
                                width: "100%",
                                ...ne(
                                  {
                                    L6nrxpQNX: { variant: "JYHBin7ud" },
                                    Y79x8Bi33: { variant: "e2HhRmGaA" },
                                  },
                                  c,
                                  h,
                                ),
                              }),
                            }),
                          }),
                        }),
                      E() &&
                        e(v, {
                          children: e(a.div, {
                            className: "framer-9wn1tr-container",
                            layoutDependency: d,
                            layoutId: "fvVTKPnUW-container",
                            children: e(fe, {
                              color:
                                "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                              damping: 14,
                              delay: 0.2,
                              exit_delay: 1,
                              font: {
                                fontFamily:
                                  '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                fontSize: "64px",
                                fontStyle: "normal",
                                fontWeight: 500,
                                letterSpacing: "-0.01em",
                                lineHeight: "1.1em",
                              },
                              gap: 0.12,
                              height: "100%",
                              id: "fvVTKPnUW",
                              layoutId: "fvVTKPnUW",
                              stiffness: 140,
                              text_chn: "\u4ED6",
                              text: "who",
                              trigger: "Show",
                              width: "100%",
                              ...ne(
                                {
                                  L6nrxpQNX: {
                                    font: {
                                      fontFamily:
                                        '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                      fontSize: "44px",
                                      fontStyle: "normal",
                                      fontWeight: 500,
                                      letterSpacing: "-0.01em",
                                      lineHeight: "1.1em",
                                    },
                                    trigger: "Enter",
                                  },
                                  Y79x8Bi33: { trigger: "Enter" },
                                },
                                c,
                                h,
                              ),
                            }),
                          }),
                        }),
                      E() &&
                        e(v, {
                          children: e(a.div, {
                            className: "framer-it7flg-container",
                            layoutDependency: d,
                            layoutId: "IbwB_M73n-container",
                            children: e(fe, {
                              color:
                                "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                              damping: 14,
                              delay: 0.2,
                              exit_delay: 1,
                              font: {
                                fontFamily:
                                  '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                fontSize: "64px",
                                fontStyle: "normal",
                                fontWeight: 500,
                                letterSpacing: "-0.01em",
                                lineHeight: "1.1em",
                              },
                              gap: 0.16,
                              height: "100%",
                              id: "IbwB_M73n",
                              layoutId: "IbwB_M73n",
                              stiffness: 140,
                              text_chn: "\u5C1D\u8BD5",
                              text: "seeks",
                              trigger: "Show",
                              width: "100%",
                              ...ne(
                                {
                                  L6nrxpQNX: {
                                    font: {
                                      fontFamily:
                                        '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                      fontSize: "44px",
                                      fontStyle: "normal",
                                      fontWeight: 500,
                                      letterSpacing: "-0.01em",
                                      lineHeight: "1.1em",
                                    },
                                    trigger: "Enter",
                                  },
                                  Y79x8Bi33: { trigger: "Enter" },
                                },
                                c,
                                h,
                              ),
                            }),
                          }),
                        }),
                      E() &&
                        e(v, {
                          children: e(a.div, {
                            className: "framer-1gz819r-container",
                            layoutDependency: d,
                            layoutId: "A_T4iqjim-container",
                            children: e(fe, {
                              color:
                                "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                              damping: 14,
                              delay: 0.2,
                              exit_delay: 1,
                              font: {
                                fontFamily:
                                  '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                fontSize: "64px",
                                fontStyle: "normal",
                                fontWeight: 500,
                                letterSpacing: "-0.01em",
                                lineHeight: "1.1em",
                              },
                              gap: 0.2,
                              height: "100%",
                              id: "A_T4iqjim",
                              layoutId: "A_T4iqjim",
                              stiffness: 140,
                              text_chn: "\u7740",
                              text: "to",
                              trigger: "Show",
                              width: "100%",
                              ...ne(
                                {
                                  L6nrxpQNX: {
                                    font: {
                                      fontFamily:
                                        '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                      fontSize: "44px",
                                      fontStyle: "normal",
                                      fontWeight: 500,
                                      letterSpacing: "-0.01em",
                                      lineHeight: "1.1em",
                                    },
                                    trigger: "Enter",
                                  },
                                  Y79x8Bi33: { trigger: "Enter" },
                                },
                                c,
                                h,
                              ),
                            }),
                          }),
                        }),
                      E() &&
                        e(v, {
                          children: e(a.div, {
                            className: "framer-tqmjzc-container",
                            layoutDependency: d,
                            layoutId: "gN4Le5IyC-container",
                            children: e(fe, {
                              color:
                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                              damping: 14,
                              delay: 0.2,
                              exit_delay: 1,
                              font: {
                                fontFamily:
                                  '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                fontSize: "64px",
                                fontStyle: "normal",
                                fontWeight: 700,
                                letterSpacing: "-0.01em",
                                lineHeight: "1.1em",
                              },
                              gap: 0.24,
                              height: "100%",
                              id: "gN4Le5IyC",
                              layoutId: "gN4Le5IyC",
                              stiffness: 140,
                              text_chn: "\u878D\u5408",
                              text: "blend",
                              trigger: "Show",
                              width: "100%",
                              ...ne(
                                {
                                  L6nrxpQNX: {
                                    font: {
                                      fontFamily:
                                        '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                      fontSize: "44px",
                                      fontStyle: "normal",
                                      fontWeight: 700,
                                      letterSpacing: "-0.01em",
                                      lineHeight: "1.1em",
                                    },
                                    trigger: "Enter",
                                  },
                                  Y79x8Bi33: { trigger: "Enter" },
                                },
                                c,
                                h,
                              ),
                            }),
                          }),
                        }),
                      E() &&
                        e(v, {
                          children: e(a.div, {
                            className: "framer-f4nppg-container",
                            layoutDependency: d,
                            layoutId: "YqPrUUQqC-container",
                            children: e(fe, {
                              color:
                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                              damping: 14,
                              delay: 0.2,
                              exit_delay: 1,
                              font: {
                                fontFamily:
                                  '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                fontSize: "64px",
                                fontStyle: "normal",
                                fontWeight: 700,
                                letterSpacing: "-0.01em",
                                lineHeight: "1.1em",
                              },
                              gap: 0.28,
                              height: "100%",
                              id: "YqPrUUQqC",
                              layoutId: "YqPrUUQqC",
                              stiffness: 140,
                              text_chn: "\u89C1\u89E3",
                              text: "insights",
                              trigger: "Show",
                              width: "100%",
                              ...ne(
                                {
                                  L6nrxpQNX: {
                                    font: {
                                      fontFamily:
                                        '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                      fontSize: "44px",
                                      fontStyle: "normal",
                                      fontWeight: 700,
                                      letterSpacing: "-0.01em",
                                      lineHeight: "1.1em",
                                    },
                                    trigger: "Enter",
                                  },
                                  Y79x8Bi33: { trigger: "Enter" },
                                },
                                c,
                                h,
                              ),
                            }),
                          }),
                        }),
                      E() &&
                        e(v, {
                          children: e(a.div, {
                            className: "framer-1j970wv-container",
                            layoutDependency: d,
                            layoutId: "Nbg006q1Z-container",
                            children: e(fe, {
                              color:
                                "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                              damping: 14,
                              delay: 0.2,
                              exit_delay: 1,
                              font: {
                                fontFamily:
                                  '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                fontSize: "64px",
                                fontStyle: "normal",
                                fontWeight: 500,
                                letterSpacing: "-0.01em",
                                lineHeight: "1.1em",
                              },
                              gap: 0.32,
                              height: "100%",
                              id: "Nbg006q1Z",
                              layoutId: "Nbg006q1Z",
                              stiffness: 140,
                              text_chn: "&",
                              text: "&",
                              trigger: "Show",
                              width: "100%",
                              ...ne(
                                {
                                  L6nrxpQNX: {
                                    font: {
                                      fontFamily:
                                        '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                      fontSize: "44px",
                                      fontStyle: "normal",
                                      fontWeight: 500,
                                      letterSpacing: "-0.01em",
                                      lineHeight: "1.1em",
                                    },
                                    trigger: "Enter",
                                  },
                                  Y79x8Bi33: { trigger: "Enter" },
                                },
                                c,
                                h,
                              ),
                            }),
                          }),
                        }),
                      E() &&
                        e(v, {
                          children: e(a.div, {
                            className: "framer-q21gea-container",
                            layoutDependency: d,
                            layoutId: "DuUIudwwU-container",
                            children: e(fe, {
                              color:
                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                              damping: 14,
                              delay: 0.2,
                              exit_delay: 1,
                              font: {
                                fontFamily:
                                  '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                fontSize: "64px",
                                fontStyle: "normal",
                                fontWeight: 700,
                                letterSpacing: "-0.01em",
                                lineHeight: "1.1em",
                              },
                              gap: 0.36,
                              height: "100%",
                              id: "DuUIudwwU",
                              layoutId: "DuUIudwwU",
                              stiffness: 140,
                              text_chn: "\u89E3\u9501",
                              text: "unlock",
                              trigger: "Show",
                              width: "100%",
                              ...ne(
                                {
                                  L6nrxpQNX: {
                                    font: {
                                      fontFamily:
                                        '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                      fontSize: "44px",
                                      fontStyle: "normal",
                                      fontWeight: 700,
                                      letterSpacing: "-0.01em",
                                      lineHeight: "1.1em",
                                    },
                                    trigger: "Enter",
                                  },
                                  Y79x8Bi33: { trigger: "Enter" },
                                },
                                c,
                                h,
                              ),
                            }),
                          }),
                        }),
                      E() &&
                        e(v, {
                          children: e(a.div, {
                            className: "framer-9otu6-container",
                            layoutDependency: d,
                            layoutId: "WtwKcXE7f-container",
                            children: e(fe, {
                              color:
                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                              damping: 14,
                              delay: 0.2,
                              exit_delay: 1,
                              font: {
                                fontFamily:
                                  '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                fontSize: "64px",
                                fontStyle: "normal",
                                fontWeight: 700,
                                letterSpacing: "-0.01em",
                                lineHeight: "1.1em",
                              },
                              gap: 0.4,
                              height: "100%",
                              id: "WtwKcXE7f",
                              layoutId: "WtwKcXE7f",
                              stiffness: 140,
                              text_chn: "\u7075\u611F",
                              text: "inspiration.",
                              trigger: "Show",
                              width: "100%",
                              ...ne(
                                {
                                  L6nrxpQNX: {
                                    font: {
                                      fontFamily:
                                        '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                      fontSize: "44px",
                                      fontStyle: "normal",
                                      fontWeight: 700,
                                      letterSpacing: "-0.01em",
                                      lineHeight: "1.1em",
                                    },
                                    trigger: "Enter",
                                  },
                                  Y79x8Bi33: { trigger: "Enter" },
                                },
                                c,
                                h,
                              ),
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              p(a.div, {
                className: "framer-1y32892",
                layoutDependency: d,
                layoutId: "d2KeoDrDY",
                children: [
                  e(zf, {
                    className: "framer-mha0ds",
                    "data-framer-name": "Indicator",
                    layoutDependency: d,
                    layoutId: "vH2KjLHyM",
                    transformTemplate: Jf,
                    children: e(v, {
                      height: 43,
                      y:
                        (y?.y || 0) +
                        0 +
                        (((y?.height || 564) - 0 - 904) / 2 + 725 + 100) +
                        17.50000000000002 +
                        0,
                      ...ne(
                        {
                          kEI69CE4x: {
                            y:
                              (y?.y || 0) +
                              0 +
                              (((y?.height || 518) - 0 - 904) / 2 + 725 + 100) +
                              17.50000000000002 +
                              0,
                          },
                          L6nrxpQNX: { y: void 0 },
                          Y79x8Bi33: { y: void 0 },
                        },
                        c,
                        h,
                      ),
                      children: e(We, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: Kf,
                        className: "framer-9acxl1-container",
                        "data-framer-appear-id": "9acxl1",
                        initial: $f,
                        layoutDependency: d,
                        layoutId: "R9KFyvvJT-container",
                        optimized: !0,
                        style: { transformPerspective: 1200 },
                        children: e(Sa, {
                          height: "100%",
                          id: "R9KFyvvJT",
                          layoutId: "R9KFyvvJT",
                          style: { height: "100%" },
                          variant: "U7o7VZZFU",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                  p($i, {
                    className: "framer-2erftm",
                    layoutDependency: d,
                    layoutId: "BB3sEJYQr",
                    children: [
                      e(We, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: td,
                        className: "framer-1jt0gjy",
                        "data-framer-appear-id": "1jt0gjy",
                        initial: Ta,
                        layoutDependency: d,
                        layoutId: "shueqoRtN",
                        optimized: !0,
                        style: { transformPerspective: 1200 },
                        children: e(v, {
                          height: 54,
                          width: "54px",
                          y:
                            (y?.y || 0) +
                            0 +
                            (((y?.height || 564) - 0 - 904) / 2 + 725 + 100) +
                            4.5 +
                            8 +
                            0,
                          ...ne(
                            {
                              kEI69CE4x: {
                                y:
                                  (y?.y || 0) +
                                  0 +
                                  (((y?.height || 518) - 0 - 904) / 2 +
                                    725 +
                                    100) +
                                  4.5 +
                                  8 +
                                  0,
                              },
                              L6nrxpQNX: { y: void 0 },
                              Y79x8Bi33: { y: void 0 },
                            },
                            c,
                            h,
                          ),
                          children: e(a.div, {
                            className: "framer-1mklcpx-container",
                            layoutDependency: d,
                            layoutId: "EL5bkOO9J-container",
                            children: e(Ga, {
                              b1BqfRpNR: !0,
                              bUFcBjj2_: !1,
                              dIiBtQnYe: 100,
                              height: "100%",
                              id: "EL5bkOO9J",
                              jmykv9nju: "https://twitter.com/jayzhushi",
                              layoutId: "EL5bkOO9J",
                              style: { height: "100%", width: "100%" },
                              variant: "n7p8bWC6m",
                              VTdF3jUde:
                                "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                              width: "100%",
                              ZWLrRxtcU: !0,
                            }),
                          }),
                        }),
                      }),
                      e(We, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: ad,
                        className: "framer-1ixtfp7",
                        "data-framer-appear-id": "1ixtfp7",
                        initial: Ta,
                        layoutDependency: d,
                        layoutId: "Iq1yv5mgy",
                        optimized: !0,
                        style: { transformPerspective: 1200 },
                        children: e(v, {
                          height: 54,
                          width: "54px",
                          y:
                            (y?.y || 0) +
                            0 +
                            (((y?.height || 564) - 0 - 904) / 2 + 725 + 100) +
                            4.5 +
                            8 +
                            0,
                          ...ne(
                            {
                              kEI69CE4x: {
                                y:
                                  (y?.y || 0) +
                                  0 +
                                  (((y?.height || 518) - 0 - 904) / 2 +
                                    725 +
                                    100) +
                                  4.5 +
                                  8 +
                                  0,
                              },
                              L6nrxpQNX: { y: void 0 },
                              Y79x8Bi33: { y: void 0 },
                            },
                            c,
                            h,
                          ),
                          children: e(a.div, {
                            className: "framer-1mjdi7w-container",
                            layoutDependency: d,
                            layoutId: "IcqAFN2Ow-container",
                            children: e(Ga, {
                              b1BqfRpNR: !0,
                              bUFcBjj2_: !1,
                              dIiBtQnYe: 100,
                              height: "100%",
                              id: "IcqAFN2Ow",
                              jmykv9nju: "https://www.instagram.com/jayzhushi/",
                              layoutId: "IcqAFN2Ow",
                              style: { height: "100%", width: "100%" },
                              variant: "dBXxDpGg9",
                              VTdF3jUde:
                                "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                              width: "100%",
                              ZWLrRxtcU: !0,
                            }),
                          }),
                        }),
                      }),
                      e(We, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: id,
                        className: "framer-19u2dzk",
                        "data-framer-appear-id": "19u2dzk",
                        initial: Ta,
                        layoutDependency: d,
                        layoutId: "nexFvp1Sf",
                        optimized: !0,
                        style: { transformPerspective: 1200 },
                        children: e(v, {
                          height: 54,
                          width: "54px",
                          y:
                            (y?.y || 0) +
                            0 +
                            (((y?.height || 564) - 0 - 904) / 2 + 725 + 100) +
                            4.5 +
                            8 +
                            0,
                          ...ne(
                            {
                              kEI69CE4x: {
                                y:
                                  (y?.y || 0) +
                                  0 +
                                  (((y?.height || 518) - 0 - 904) / 2 +
                                    725 +
                                    100) +
                                  4.5 +
                                  8 +
                                  0,
                              },
                              L6nrxpQNX: { y: void 0 },
                              Y79x8Bi33: { y: void 0 },
                            },
                            c,
                            h,
                          ),
                          children: e(a.div, {
                            className: "framer-gjdcyk-container",
                            layoutDependency: d,
                            layoutId: "a25ZvMxjm-container",
                            children: e(Ga, {
                              b1BqfRpNR: !0,
                              bUFcBjj2_: !1,
                              dIiBtQnYe: 100,
                              height: "100%",
                              id: "a25ZvMxjm",
                              jmykv9nju: "mailto:jayzhushi@gmail.com",
                              layoutId: "a25ZvMxjm",
                              style: { height: "100%", width: "100%" },
                              variant: "LqK6hOvsJ",
                              VTdF3jUde:
                                "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                              width: "100%",
                              ZWLrRxtcU: !0,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Z() &&
                    e($i, {
                      className: "framer-4wsxmm",
                      layoutDependency: d,
                      layoutId: "gzD2iuzLg",
                      children: e(v, {
                        height: 78,
                        y:
                          (y?.y || 0) +
                          0 +
                          (((y?.height || 564) - 0 - 904) / 2 + 725 + 100) +
                          0.5 +
                          0,
                        ...ne(
                          {
                            kEI69CE4x: {
                              y:
                                (y?.y || 0) +
                                0 +
                                (((y?.height || 518) - 0 - 904) / 2 +
                                  725 +
                                  100) +
                                0.5 +
                                0,
                            },
                          },
                          c,
                          h,
                        ),
                        children: e(We, {
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: sd,
                          className: "framer-1ed3f03-container",
                          "data-framer-appear-id": "1ed3f03",
                          initial: ld,
                          layoutDependency: d,
                          layoutId: "SZslXOC11-container",
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: e(ka, {
                            height: "100%",
                            id: "SZslXOC11",
                            layoutId: "SZslXOC11",
                            width: "100%",
                          }),
                        }),
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
  ud = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-NnDgX.framer-auvi8d, .framer-NnDgX .framer-auvi8d { display: block; }",
    ".framer-NnDgX.framer-o9so21 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-NnDgX .framer-mqjs1b { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: auto; }",
    ".framer-NnDgX .framer-1vgzpxb, .framer-NnDgX .framer-lugczf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px 0px 4px 0px; position: relative; width: 100%; }",
    ".framer-NnDgX .framer-1bky5ic-container { flex: none; height: auto; position: relative; width: 550px; }",
    ".framer-NnDgX .framer-schasc-container { flex: 0.9 0 0px; height: auto; position: relative; width: 1px; }",
    ".framer-NnDgX .framer-7fosmq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 100px 0px 0px; position: relative; width: 1200px; z-index: 0; }",
    ".framer-NnDgX .framer-2enn4i, .framer-NnDgX .framer-1nypbct, .framer-NnDgX .framer-1ke0w7q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-NnDgX .framer-1y1v4y-container, .framer-NnDgX .framer-1x9psfw-container, .framer-NnDgX .framer-dp8a7k-container, .framer-NnDgX .framer-13s8xye-container, .framer-NnDgX .framer-9jmw56-container, .framer-NnDgX .framer-5rhn77-container, .framer-NnDgX .framer-179n6j-container, .framer-NnDgX .framer-f3jocx-container, .framer-NnDgX .framer-p5sm2n-container, .framer-NnDgX .framer-19zbx2f-container, .framer-NnDgX .framer-1b6cv5k-container, .framer-NnDgX .framer-1adq0m-container, .framer-NnDgX .framer-nc5iir-container, .framer-NnDgX .framer-4zmyea-container, .framer-NnDgX .framer-1x3nzu4-container, .framer-NnDgX .framer-1fhjfq8-container, .framer-NnDgX .framer-9wn1tr-container, .framer-NnDgX .framer-it7flg-container, .framer-NnDgX .framer-1gz819r-container, .framer-NnDgX .framer-tqmjzc-container, .framer-NnDgX .framer-f4nppg-container, .framer-NnDgX .framer-1j970wv-container, .framer-NnDgX .framer-q21gea-container, .framer-NnDgX .framer-9otu6-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-NnDgX .framer-169fuzj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-NnDgX .framer-14ii4y7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 6px 0px 2px 0px; position: relative; width: min-content; }",
    ".framer-NnDgX .framer-1y32892 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 79px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: auto; }",
    ".framer-NnDgX .framer-mha0ds { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 49%; width: min-content; z-index: 1; }",
    ".framer-NnDgX .framer-9acxl1-container { flex: none; height: 43px; pointer-events: auto; position: relative; width: auto; }",
    ".framer-NnDgX .framer-2erftm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; width: min-content; }",
    ".framer-NnDgX .framer-1jt0gjy, .framer-NnDgX .framer-1ixtfp7, .framer-NnDgX .framer-19u2dzk, .framer-NnDgX .framer-4wsxmm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-NnDgX .framer-1mklcpx-container, .framer-NnDgX .framer-1mjdi7w-container, .framer-NnDgX .framer-gjdcyk-container { flex: none; height: 54px; position: relative; width: 54px; }",
    ".framer-NnDgX .framer-1ed3f03-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NnDgX.framer-o9so21, .framer-NnDgX .framer-mqjs1b, .framer-NnDgX .framer-1vgzpxb, .framer-NnDgX .framer-lugczf, .framer-NnDgX .framer-7fosmq, .framer-NnDgX .framer-2enn4i, .framer-NnDgX .framer-1nypbct, .framer-NnDgX .framer-169fuzj, .framer-NnDgX .framer-1ke0w7q, .framer-NnDgX .framer-14ii4y7, .framer-NnDgX .framer-mha0ds, .framer-NnDgX .framer-2erftm, .framer-NnDgX .framer-1jt0gjy, .framer-NnDgX .framer-1ixtfp7, .framer-NnDgX .framer-19u2dzk, .framer-NnDgX .framer-4wsxmm { gap: 0px; } .framer-NnDgX.framer-o9so21 > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-NnDgX.framer-o9so21 > :first-child, .framer-NnDgX .framer-mqjs1b > :first-child, .framer-NnDgX .framer-7fosmq > :first-child, .framer-NnDgX .framer-169fuzj > :first-child, .framer-NnDgX .framer-14ii4y7 > :first-child { margin-top: 0px; } .framer-NnDgX.framer-o9so21 > :last-child, .framer-NnDgX .framer-mqjs1b > :last-child, .framer-NnDgX .framer-7fosmq > :last-child, .framer-NnDgX .framer-169fuzj > :last-child, .framer-NnDgX .framer-14ii4y7 > :last-child { margin-bottom: 0px; } .framer-NnDgX .framer-mqjs1b > *, .framer-NnDgX .framer-7fosmq > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-NnDgX .framer-1vgzpxb > *, .framer-NnDgX .framer-lugczf > *, .framer-NnDgX .framer-mha0ds > *, .framer-NnDgX .framer-1jt0gjy > *, .framer-NnDgX .framer-1ixtfp7 > *, .framer-NnDgX .framer-19u2dzk > *, .framer-NnDgX .framer-4wsxmm > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-NnDgX .framer-1vgzpxb > :first-child, .framer-NnDgX .framer-lugczf > :first-child, .framer-NnDgX .framer-2enn4i > :first-child, .framer-NnDgX .framer-1nypbct > :first-child, .framer-NnDgX .framer-1ke0w7q > :first-child, .framer-NnDgX .framer-mha0ds > :first-child, .framer-NnDgX .framer-2erftm > :first-child, .framer-NnDgX .framer-1jt0gjy > :first-child, .framer-NnDgX .framer-1ixtfp7 > :first-child, .framer-NnDgX .framer-19u2dzk > :first-child, .framer-NnDgX .framer-4wsxmm > :first-child { margin-left: 0px; } .framer-NnDgX .framer-1vgzpxb > :last-child, .framer-NnDgX .framer-lugczf > :last-child, .framer-NnDgX .framer-2enn4i > :last-child, .framer-NnDgX .framer-1nypbct > :last-child, .framer-NnDgX .framer-1ke0w7q > :last-child, .framer-NnDgX .framer-mha0ds > :last-child, .framer-NnDgX .framer-2erftm > :last-child, .framer-NnDgX .framer-1jt0gjy > :last-child, .framer-NnDgX .framer-1ixtfp7 > :last-child, .framer-NnDgX .framer-19u2dzk > :last-child, .framer-NnDgX .framer-4wsxmm > :last-child { margin-right: 0px; } .framer-NnDgX .framer-2enn4i > *, .framer-NnDgX .framer-1nypbct > *, .framer-NnDgX .framer-1ke0w7q > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-NnDgX .framer-169fuzj > *, .framer-NnDgX .framer-14ii4y7 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-NnDgX .framer-2erftm > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } }",
    ".framer-NnDgX.framer-v-11kkge0 .framer-7fosmq { width: 1000px; }",
    ".framer-NnDgX.framer-v-11kkge0 .framer-2enn4i, .framer-NnDgX.framer-v-11kkge0 .framer-1nypbct, .framer-NnDgX.framer-v-11kkge0 .framer-1ke0w7q { gap: 18px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NnDgX.framer-v-11kkge0 .framer-2enn4i, .framer-NnDgX.framer-v-11kkge0 .framer-1nypbct, .framer-NnDgX.framer-v-11kkge0 .framer-1ke0w7q { gap: 0px; } .framer-NnDgX.framer-v-11kkge0 .framer-2enn4i > *, .framer-NnDgX.framer-v-11kkge0 .framer-1nypbct > *, .framer-NnDgX.framer-v-11kkge0 .framer-1ke0w7q > * { margin: 0px; margin-left: calc(18px / 2); margin-right: calc(18px / 2); } .framer-NnDgX.framer-v-11kkge0 .framer-2enn4i > :first-child, .framer-NnDgX.framer-v-11kkge0 .framer-1nypbct > :first-child, .framer-NnDgX.framer-v-11kkge0 .framer-1ke0w7q > :first-child { margin-left: 0px; } .framer-NnDgX.framer-v-11kkge0 .framer-2enn4i > :last-child, .framer-NnDgX.framer-v-11kkge0 .framer-1nypbct > :last-child, .framer-NnDgX.framer-v-11kkge0 .framer-1ke0w7q > :last-child { margin-right: 0px; } }",
    ".framer-NnDgX.framer-v-w8rfgq.framer-o9so21 { gap: 40px; width: 619px; }",
    ".framer-NnDgX.framer-v-w8rfgq .framer-mqjs1b, .framer-NnDgX.framer-v-w8rfgq .framer-1y32892 { align-self: unset; width: 100%; }",
    ".framer-NnDgX.framer-v-w8rfgq .framer-7fosmq { flex-direction: row; padding: 0px; width: 100%; }",
    ".framer-NnDgX.framer-v-w8rfgq .framer-14ii4y7 { padding: 12px 0px 2px 0px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NnDgX.framer-v-w8rfgq.framer-o9so21, .framer-NnDgX.framer-v-w8rfgq .framer-7fosmq { gap: 0px; } .framer-NnDgX.framer-v-w8rfgq.framer-o9so21 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-NnDgX.framer-v-w8rfgq.framer-o9so21 > :first-child { margin-top: 0px; } .framer-NnDgX.framer-v-w8rfgq.framer-o9so21 > :last-child { margin-bottom: 0px; } .framer-NnDgX.framer-v-w8rfgq .framer-7fosmq > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-NnDgX.framer-v-w8rfgq .framer-7fosmq > :first-child { margin-left: 0px; } .framer-NnDgX.framer-v-w8rfgq .framer-7fosmq > :last-child { margin-right: 0px; } }",
    ".framer-NnDgX.framer-v-1dobbam.framer-o9so21 { gap: 20px; width: 390px; }",
    ".framer-NnDgX.framer-v-1dobbam .framer-mqjs1b { align-self: unset; gap: 16px; order: 0; width: 100%; }",
    ".framer-NnDgX.framer-v-1dobbam .framer-7fosmq { flex-direction: row; gap: 8px; padding: 0px; width: 100%; }",
    ".framer-NnDgX.framer-v-1dobbam .framer-14ii4y7 { padding: 10px 0px 2px 0px; }",
    ".framer-NnDgX.framer-v-1dobbam .framer-1y32892 { align-self: unset; order: 1; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NnDgX.framer-v-1dobbam.framer-o9so21, .framer-NnDgX.framer-v-1dobbam .framer-mqjs1b, .framer-NnDgX.framer-v-1dobbam .framer-7fosmq { gap: 0px; } .framer-NnDgX.framer-v-1dobbam.framer-o9so21 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-NnDgX.framer-v-1dobbam.framer-o9so21 > :first-child, .framer-NnDgX.framer-v-1dobbam .framer-mqjs1b > :first-child { margin-top: 0px; } .framer-NnDgX.framer-v-1dobbam.framer-o9so21 > :last-child, .framer-NnDgX.framer-v-1dobbam .framer-mqjs1b > :last-child { margin-bottom: 0px; } .framer-NnDgX.framer-v-1dobbam .framer-mqjs1b > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-NnDgX.framer-v-1dobbam .framer-7fosmq > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-NnDgX.framer-v-1dobbam .framer-7fosmq > :first-child { margin-left: 0px; } .framer-NnDgX.framer-v-1dobbam .framer-7fosmq > :last-child { margin-right: 0px; } }",
  ],
  Ut = U(hd, ud, "framer-NnDgX"),
  vt = Ut;
Ut.displayName = "Home/PrimaryTitles";
Ut.defaultProps = { height: 564, width: 1200 };
P(Ut, {
  variant: {
    options: ["wjO3vJukO", "kEI69CE4x", "Y79x8Bi33", "L6nrxpQNX"],
    optionTitles: ["Monitor", "Desktop", "Tablet", "Phone"],
    title: "Variant",
    type: m.Enum,
  },
  qaEc9EhOH: { title: "Cursor", type: m.CustomCursor },
  qdPCOLmbA: { title: "Notice", type: m.EventHandler },
});
X(
  Ut,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Cabinet Grotesk",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CKQBK2QBTCDREE7L3MXZ3PPW7LDNJCWU/OTOY7FQFSFOJVZKJWKO2EHUJLOGBDN4Q/4CO2ETY7NITKLUDKMYJ75RHJSPHOJ7XT.woff2",
          weight: "500",
        },
        {
          family: "Cabinet Grotesk",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/XMXWOHABYLQDJ42L65EFRYNVRY37HQCB/B2O4O6V3JMFM2WDCYQI3A47L5U4THDUL/WN5274VQ3AUBDFP74GB4EC4XYJ3EKVNE.woff2",
          weight: "700",
        },
      ],
    },
    ...jf,
    ...Tf,
    ...Vf,
    ...Ef,
    ...Pf,
    ...Uf,
  ],
  { supportsExplicitInterCodegen: !0 },
);
var yd = N(vt),
  gd = sr(a.div),
  xd = N(Oe),
  vd = [
    "CB5xn9rgs",
    "IOEDYeiHk",
    "mFIR53SMu",
    "ggzaDwIuD",
    "DUUL6JP1s",
    "Fohu5X3Uj",
    "VVTqbK6_6",
    "WKxObi6RI",
  ],
  wd = "framer-sEQuY",
  bd = {
    CB5xn9rgs: "framer-v-1xzmj9i",
    DUUL6JP1s: "framer-v-8igzcl",
    Fohu5X3Uj: "framer-v-pvhlnj",
    ggzaDwIuD: "framer-v-7zzhy2",
    IOEDYeiHk: "framer-v-13br1x5",
    mFIR53SMu: "framer-v-1639ls8",
    VVTqbK6_6: "framer-v-1lpxdq7",
    WKxObi6RI: "framer-v-diwb7b",
  };
function br(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var kd = { damping: 28, delay: 0, mass: 1, stiffness: 170, type: "spring" },
  Cd = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  Rd = a(w),
  _d = {
    Desktop_Stack: "VVTqbK6_6",
    Desktop: "IOEDYeiHk",
    Monitor_Stack: "DUUL6JP1s",
    Monitor: "CB5xn9rgs",
    Phone_Grid: "WKxObi6RI",
    Phone: "ggzaDwIuD",
    Tablet_Grid: "Fohu5X3Uj",
    Tablet: "mFIR53SMu",
  },
  Dd = ({
    height: t,
    iconCursor: r,
    id: i,
    notice: n,
    projectCursor: o,
    width: f,
    ...s
  }) => {
    var C, b;
    return {
      ...s,
      BjX2ajSNA: r ?? s.BjX2ajSNA,
      uHSd6ozPR: o ?? s.uHSd6ozPR,
      variant:
        (b = (C = _d[s.variant]) !== null && C !== void 0 ? C : s.variant) !==
          null && b !== void 0
          ? b
          : "CB5xn9rgs",
      xIdMDR5tj: n ?? s.xIdMDR5tj,
    };
  },
  Ld = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Id = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        xIdMDR5tj: b,
        uHSd6ozPR: D,
        BjX2ajSNA: l,
        ...c
      } = Dd(t),
      {
        baseVariant: _,
        classNames: F,
        clearLoadingGesture: I,
        gestureHandlers: h,
        gestureVariant: k,
        isLoading: L,
        setGestureState: g,
        setVariant: j,
        variants: d,
      } = A({
        cycleOrder: vd,
        defaultVariant: "CB5xn9rgs",
        variant: C,
        variantClassNames: bd,
      }),
      R = Ld(t, d),
      { activeVariantCallback: u, delay: Q } = le(_),
      G = u(async (...O) => {
        if (b && (await b(...O)) === !1) return !1;
      }),
      K = T(null),
      J = () => !!["DUUL6JP1s", "VVTqbK6_6"].includes(_),
      Z = H(),
      E = [],
      x = re();
    return e(z, {
      id: s ?? Z,
      children: e(Rd, {
        animate: d,
        initial: !1,
        children: e(Cd, {
          value: kd,
          children: e(a.div, {
            ...c,
            ...h,
            className: V(wd, ...E, "framer-1xzmj9i", f, F),
            "data-framer-name": "Monitor",
            "data-hide-scrollbars": !0,
            layoutDependency: R,
            layoutId: "CB5xn9rgs",
            ref: r ?? K,
            style: { ...o },
            ...br(
              {
                DUUL6JP1s: { "data-framer-name": "Monitor_Stack" },
                Fohu5X3Uj: { "data-framer-name": "Tablet_Grid" },
                ggzaDwIuD: { "data-framer-name": "Phone" },
                IOEDYeiHk: { "data-framer-name": "Desktop" },
                mFIR53SMu: { "data-framer-name": "Tablet" },
                VVTqbK6_6: { "data-framer-name": "Desktop_Stack" },
                WKxObi6RI: { "data-framer-name": "Phone_Grid" },
              },
              _,
              k,
            ),
            children: p(a.div, {
              className: "framer-1kyqzkt",
              "data-framer-name": "Content",
              "data-hide-scrollbars": !0,
              layoutDependency: R,
              layoutId: "nOzCjHiDM",
              children: [
                p(gd, {
                  className: "framer-19bk3hq",
                  "data-framer-name": "Title",
                  layoutDependency: R,
                  layoutId: "MqDm_IeN8",
                  children: [
                    e(v, {
                      ...br(
                        {
                          Fohu5X3Uj: {
                            width: `max(${x?.width || "100vw"} - 200px, 1px)`,
                          },
                          ggzaDwIuD: {
                            width: `max(${x?.width || "100vw"} - 60px, 1px)`,
                          },
                          mFIR53SMu: {
                            width: `max(${x?.width || "100vw"} - 200px, 1px)`,
                          },
                          WKxObi6RI: {
                            width: `max(${x?.width || "100vw"} - 60px, 1px)`,
                          },
                        },
                        _,
                        k,
                      ),
                      children: e(a.div, {
                        className: "framer-1yxz0iz-container",
                        layoutDependency: R,
                        layoutId: "ZRKURw22a-container",
                        children: e(vt, {
                          height: "100%",
                          id: "ZRKURw22a",
                          layoutId: "ZRKURw22a",
                          qaEc9EhOH: l,
                          qdPCOLmbA: G,
                          variant: "wjO3vJukO",
                          width: "100%",
                          ...br(
                            {
                              Fohu5X3Uj: {
                                style: { width: "100%" },
                                variant: "Y79x8Bi33",
                              },
                              ggzaDwIuD: {
                                style: { width: "100%" },
                                variant: "L6nrxpQNX",
                              },
                              IOEDYeiHk: { variant: "kEI69CE4x" },
                              mFIR53SMu: {
                                style: { width: "100%" },
                                variant: "Y79x8Bi33",
                              },
                              VVTqbK6_6: { variant: "kEI69CE4x" },
                              WKxObi6RI: {
                                style: { width: "100%" },
                                variant: "L6nrxpQNX",
                              },
                            },
                            _,
                            k,
                          ),
                        }),
                      }),
                    }),
                    J() &&
                      e(a.div, {
                        className: "framer-1xbiao2",
                        "data-framer-name": "StackPadding",
                        layoutDependency: R,
                        layoutId: "IkiuK4Pus",
                      }),
                  ],
                }),
                e(a.div, {
                  className: "framer-1jsy1v4",
                  layoutDependency: R,
                  layoutId: "Nmj6MoStE",
                  children: e(v, {
                    children: e(a.div, {
                      className: "framer-1r3snlm-container",
                      layoutDependency: R,
                      layoutId: "HiXNS9Gu9-container",
                      children: e(Oe, {
                        cursor: D,
                        height: "100%",
                        id: "HiXNS9Gu9",
                        layoutId: "HiXNS9Gu9",
                        layouts: "Grid3",
                        style: { width: "100%" },
                        width: "100%",
                        ...br(
                          {
                            DUUL6JP1s: { layouts: "StackH" },
                            Fohu5X3Uj: { layouts: "Grid2T" },
                            ggzaDwIuD: { layouts: "StackVP" },
                            IOEDYeiHk: { layouts: "Grid2" },
                            mFIR53SMu: { layouts: "StackV" },
                            VVTqbK6_6: { layouts: "StackH" },
                            WKxObi6RI: { layouts: "StackVPG" },
                          },
                          _,
                          k,
                        ),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Fd = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-sEQuY.framer-1cwkx6t, .framer-sEQuY .framer-1cwkx6t { display: block; }",
    ".framer-sEQuY.framer-1xzmj9i { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1600px; }",
    ".framer-sEQuY .framer-1kyqzkt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: auto; padding: 0px 0px 214px 0px; position: relative; width: 100%; }",
    ".framer-sEQuY .framer-19bk3hq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: calc(var(--framer-viewport-height, 100vh) * 0.9); justify-content: center; min-height: 500px; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-sEQuY .framer-1yxz0iz-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-sEQuY .framer-1xbiao2 { flex: none; height: 108px; overflow: hidden; position: relative; width: 200px; }",
    ".framer-sEQuY .framer-1jsy1v4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 80px 0px 80px; position: relative; width: 100%; }",
    ".framer-sEQuY .framer-1r3snlm-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-sEQuY.framer-1xzmj9i, .framer-sEQuY .framer-1kyqzkt, .framer-sEQuY .framer-19bk3hq, .framer-sEQuY .framer-1jsy1v4 { gap: 0px; } .framer-sEQuY.framer-1xzmj9i > *, .framer-sEQuY .framer-1kyqzkt > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-sEQuY.framer-1xzmj9i > :first-child, .framer-sEQuY .framer-1kyqzkt > :first-child, .framer-sEQuY .framer-1jsy1v4 > :first-child { margin-top: 0px; } .framer-sEQuY.framer-1xzmj9i > :last-child, .framer-sEQuY .framer-1kyqzkt > :last-child, .framer-sEQuY .framer-1jsy1v4 > :last-child { margin-bottom: 0px; } .framer-sEQuY .framer-19bk3hq > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-sEQuY .framer-19bk3hq > :first-child { margin-left: 0px; } .framer-sEQuY .framer-19bk3hq > :last-child { margin-right: 0px; } .framer-sEQuY .framer-1jsy1v4 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    ".framer-sEQuY.framer-v-13br1x5.framer-1xzmj9i { width: 1200px; }",
    ".framer-sEQuY.framer-v-13br1x5 .framer-19bk3hq { width: 100%; }",
    ".framer-sEQuY.framer-v-13br1x5 .framer-1jsy1v4, .framer-sEQuY.framer-v-1639ls8 .framer-1jsy1v4, .framer-sEQuY.framer-v-pvhlnj .framer-1jsy1v4 { padding: 0px 40px 0px 40px; }",
    ".framer-sEQuY.framer-v-1639ls8.framer-1xzmj9i, .framer-sEQuY.framer-v-pvhlnj.framer-1xzmj9i { width: 810px; }",
    ".framer-sEQuY.framer-v-1639ls8 .framer-19bk3hq, .framer-sEQuY.framer-v-pvhlnj .framer-19bk3hq { height: min-content; padding: 120px 100px 200px 100px; width: 100%; }",
    ".framer-sEQuY.framer-v-1639ls8 .framer-1yxz0iz-container, .framer-sEQuY.framer-v-7zzhy2 .framer-1yxz0iz-container, .framer-sEQuY.framer-v-pvhlnj .framer-1yxz0iz-container, .framer-sEQuY.framer-v-diwb7b .framer-1yxz0iz-container { flex: 1 0 0px; width: 1px; }",
    ".framer-sEQuY.framer-v-7zzhy2.framer-1xzmj9i, .framer-sEQuY.framer-v-diwb7b.framer-1xzmj9i { width: 290px; }",
    ".framer-sEQuY.framer-v-7zzhy2 .framer-19bk3hq, .framer-sEQuY.framer-v-diwb7b .framer-19bk3hq { height: min-content; padding: 100px 30px 100px 30px; width: 100%; }",
    ".framer-sEQuY.framer-v-7zzhy2 .framer-1jsy1v4, .framer-sEQuY.framer-v-diwb7b .framer-1jsy1v4 { padding: 0px 10px 0px 10px; }",
    ".framer-sEQuY.framer-v-8igzcl.framer-1xzmj9i { align-content: flex-start; align-items: flex-start; height: 960px; justify-content: center; overflow: visible; width: min-content; }",
    ".framer-sEQuY.framer-v-8igzcl .framer-1kyqzkt, .framer-sEQuY.framer-v-1lpxdq7 .framer-1kyqzkt { flex: 1 0 0px; flex-direction: row; height: 1px; padding: 0px; width: min-content; }",
    ".framer-sEQuY.framer-v-8igzcl .framer-19bk3hq, .framer-sEQuY.framer-v-1lpxdq7 .framer-19bk3hq { height: 100%; }",
    ".framer-sEQuY.framer-v-8igzcl .framer-1yxz0iz-container, .framer-sEQuY.framer-v-1lpxdq7 .framer-1yxz0iz-container { order: 1; }",
    ".framer-sEQuY.framer-v-8igzcl .framer-1xbiao2, .framer-sEQuY.framer-v-1lpxdq7 .framer-1xbiao2 { order: 0; }",
    ".framer-sEQuY.framer-v-8igzcl .framer-1jsy1v4 { flex-direction: row; gap: 200px; height: 100%; padding: 80px; width: min-content; }",
    ".framer-sEQuY.framer-v-8igzcl .framer-1r3snlm-container { order: 0; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-sEQuY.framer-v-8igzcl .framer-1kyqzkt, .framer-sEQuY.framer-v-8igzcl .framer-1jsy1v4 { gap: 0px; } .framer-sEQuY.framer-v-8igzcl .framer-1kyqzkt > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-sEQuY.framer-v-8igzcl .framer-1kyqzkt > :first-child, .framer-sEQuY.framer-v-8igzcl .framer-1jsy1v4 > :first-child { margin-left: 0px; } .framer-sEQuY.framer-v-8igzcl .framer-1kyqzkt > :last-child, .framer-sEQuY.framer-v-8igzcl .framer-1jsy1v4 > :last-child { margin-right: 0px; } .framer-sEQuY.framer-v-8igzcl .framer-1jsy1v4 > * { margin: 0px; margin-left: calc(200px / 2); margin-right: calc(200px / 2); } }",
    ".framer-sEQuY.framer-v-1lpxdq7.framer-1xzmj9i { align-content: flex-start; align-items: flex-start; height: 960px; overflow: visible; width: min-content; }",
    ".framer-sEQuY.framer-v-1lpxdq7 .framer-1jsy1v4 { align-content: flex-start; align-items: flex-start; height: 100%; justify-content: center; width: min-content; }",
    ".framer-sEQuY.framer-v-1lpxdq7 .framer-1r3snlm-container { width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-sEQuY.framer-v-1lpxdq7 .framer-1kyqzkt { gap: 0px; } .framer-sEQuY.framer-v-1lpxdq7 .framer-1kyqzkt > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-sEQuY.framer-v-1lpxdq7 .framer-1kyqzkt > :first-child { margin-left: 0px; } .framer-sEQuY.framer-v-1lpxdq7 .framer-1kyqzkt > :last-child { margin-right: 0px; } }",
    '.framer-sEQuY[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-sEQuY [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '.framer-sEQuY[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-sEQuY [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  qt = U(Id, Fd, "framer-sEQuY"),
  wt = qt;
qt.displayName = "Home/Main";
qt.defaultProps = { height: 5428.5, width: 1600 };
P(qt, {
  variant: {
    options: [
      "CB5xn9rgs",
      "IOEDYeiHk",
      "mFIR53SMu",
      "ggzaDwIuD",
      "DUUL6JP1s",
      "Fohu5X3Uj",
      "VVTqbK6_6",
      "WKxObi6RI",
    ],
    optionTitles: [
      "Monitor",
      "Desktop",
      "Tablet",
      "Phone",
      "Monitor_Stack",
      "Tablet_Grid",
      "Desktop_Stack",
      "Phone_Grid",
    ],
    title: "Variant",
    type: m.Enum,
  },
  xIdMDR5tj: { title: "Notice", type: m.EventHandler },
  uHSd6ozPR: { title: "Project Cursor", type: m.CustomCursor },
  BjX2ajSNA: { title: "Icon Cursor", type: m.CustomCursor },
});
X(qt, [{ explicitInter: !0, fonts: [] }, ...yd, ...xd], {
  supportsExplicitInterCodegen: !0,
});
var Nd = N(wt),
  Sd = ["mzy8kT2OF", "fW5etKQni"],
  jd = "framer-0qHJP",
  Gd = { fW5etKQni: "framer-v-1dtr47a", mzy8kT2OF: "framer-v-oyfhie" };
function ro(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var Td = { duration: 0, type: "tween" },
  Vd = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  Ed = a(w),
  zd = { Horizontal: "fW5etKQni", Vertical: "mzy8kT2OF" },
  Pd = ({
    height: t,
    iconCursor: r,
    id: i,
    notice: n,
    projectCursor: o,
    width: f,
    ...s
  }) => {
    var C, b;
    return {
      ...s,
      d95Uyy9vG: r ?? s.d95Uyy9vG,
      J6eOx28iq: n ?? s.J6eOx28iq,
      lxzOuQJFn: o ?? s.lxzOuQJFn,
      variant:
        (b = (C = zd[s.variant]) !== null && C !== void 0 ? C : s.variant) !==
          null && b !== void 0
          ? b
          : "mzy8kT2OF",
    };
  },
  Ud = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  qd = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        J6eOx28iq: b,
        lxzOuQJFn: D,
        d95Uyy9vG: l,
        ...c
      } = Pd(t),
      {
        baseVariant: _,
        classNames: F,
        clearLoadingGesture: I,
        gestureHandlers: h,
        gestureVariant: k,
        isLoading: L,
        setGestureState: g,
        setVariant: j,
        variants: d,
      } = A({
        cycleOrder: Sd,
        defaultVariant: "mzy8kT2OF",
        variant: C,
        variantClassNames: Gd,
      }),
      R = Ud(t, d),
      { activeVariantCallback: u, delay: Q } = le(_),
      G = u(async (...x) => {
        if (b && (await b(...x)) === !1) return !1;
      }),
      K = T(null),
      J = H(),
      Z = [],
      E = re();
    return e(z, {
      id: s ?? J,
      children: e(Ed, {
        animate: d,
        initial: !1,
        children: e(Vd, {
          value: Td,
          children: e(a.div, {
            ...c,
            ...h,
            className: V(jd, ...Z, "framer-oyfhie", f, F),
            "data-framer-name": "Vertical",
            "data-hide-scrollbars": !0,
            layoutDependency: R,
            layoutId: "mzy8kT2OF",
            ref: r ?? K,
            style: { ...o },
            ...ro({ fW5etKQni: { "data-framer-name": "Horizontal" } }, _, k),
            children: e(v, {
              width: E?.width || "100vw",
              children: e(a.div, {
                className: "framer-cblh00-container",
                layoutDependency: R,
                layoutId: "TIZgBesEr-container",
                children: e(wt, {
                  BjX2ajSNA: l,
                  height: "100%",
                  id: "TIZgBesEr",
                  layoutId: "TIZgBesEr",
                  style: { width: "100%" },
                  uHSd6ozPR: D,
                  variant: "Fohu5X3Uj",
                  width: "100%",
                  xIdMDR5tj: G,
                  ...ro({ fW5etKQni: { variant: "mFIR53SMu" } }, _, k),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Hd = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-0qHJP.framer-1ew864b, .framer-0qHJP .framer-1ew864b { display: block; }",
    ".framer-0qHJP.framer-oyfhie { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 810px; }",
    ".framer-0qHJP .framer-cblh00-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0qHJP.framer-oyfhie { gap: 0px; } .framer-0qHJP.framer-oyfhie > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-0qHJP.framer-oyfhie > :first-child { margin-top: 0px; } .framer-0qHJP.framer-oyfhie > :last-child { margin-bottom: 0px; } }",
    '.framer-0qHJP[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-0qHJP [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '.framer-0qHJP[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-0qHJP [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  Ht = U(qd, Hd, "framer-0qHJP"),
  kr = Ht;
Ht.displayName = "Home/LayouTablet";
Ht.defaultProps = { height: 8678, width: 810 };
P(Ht, {
  variant: {
    options: ["mzy8kT2OF", "fW5etKQni"],
    optionTitles: ["Vertical", "Horizontal"],
    title: "Variant",
    type: m.Enum,
  },
  J6eOx28iq: { title: "Notice", type: m.EventHandler },
  lxzOuQJFn: { title: "Project Cursor", type: m.CustomCursor },
  d95Uyy9vG: { title: "Icon Cursor", type: m.CustomCursor },
});
X(Ht, [{ explicitInter: !0, fonts: [] }, ...Nd], {
  supportsExplicitInterCodegen: !0,
});
var Bd = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "Frameru6uvtxOlk",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"fW5etKQni":{"layout":["fixed","auto"]}}}',
        framerImmutableVariables: "true",
        framerVariables:
          '{"J6eOx28iq":"notice","lxzOuQJFn":"projectCursor","d95Uyy9vG":"iconCursor"}',
        framerComponentViewportWidth: "true",
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerIntrinsicHeight: "8678",
        framerIntrinsicWidth: "810",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var Xd = N(kr),
  Md = pe(or(kr), Va),
  Ad = ["HmKlmI9F2"],
  Yd = "framer-WgzFW",
  Od = { HmKlmI9F2: "framer-v-wfahwp" };
var Wd = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Qd = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  Jd = a(w),
  Zd = ({
    height: t,
    iconCursor: r,
    id: i,
    notice: n,
    projectCursor: o,
    width: f,
    ...s
  }) => ({
    ...s,
    hxNeo0OUE: o ?? s.hxNeo0OUE,
    mZtE1brt4: r ?? s.mZtE1brt4,
    pbuE6UhMj: n ?? s.pbuE6UhMj,
  }),
  Kd = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  $d = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        hxNeo0OUE: b,
        mZtE1brt4: D,
        pbuE6UhMj: l,
        ...c
      } = Zd(t),
      {
        baseVariant: _,
        classNames: F,
        gestureHandlers: I,
        gestureVariant: h,
        setGestureState: k,
        setVariant: L,
        variants: g,
      } = A({
        cycleOrder: Ad,
        defaultVariant: "HmKlmI9F2",
        variant: C,
        variantClassNames: Od,
      }),
      j = Kd(t, g),
      { activeVariantCallback: d, delay: R } = le(_),
      u = d(async (...Z) => {
        if (l && (await l(...Z)) === !1) return !1;
      }),
      Q = T(null),
      G = H(),
      K = [],
      J = re();
    return e(z, {
      id: s ?? G,
      children: e(Jd, {
        animate: g,
        initial: !1,
        children: e(Qd, {
          value: Wd,
          children: e(a.div, {
            ...c,
            ...I,
            className: V(Yd, ...K, "framer-wfahwp", f, F),
            "data-framer-name": "Variant 1",
            layoutDependency: j,
            layoutId: "HmKlmI9F2",
            ref: r ?? Q,
            style: { ...o },
            children: e(v, {
              width: `max(${J?.width || "100vw"}, 1px)`,
              children: e(a.div, {
                className: "framer-yge6ts-container",
                layoutDependency: j,
                layoutId: "SvF8_Fs7d-container",
                children: e(Md, {
                  d95Uyy9vG: D,
                  height: "100%",
                  id: "SvF8_Fs7d",
                  J6eOx28iq: u,
                  layoutId: "SvF8_Fs7d",
                  lxzOuQJFn: b,
                  style: { width: "100%" },
                  variant: "mzy8kT2OF",
                  width: "100%",
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  ec = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-WgzFW.framer-87ywv0, .framer-WgzFW .framer-87ywv0 { display: block; }",
    ".framer-WgzFW.framer-wfahwp { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 810px; }",
    ".framer-WgzFW .framer-yge6ts-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-WgzFW.framer-wfahwp { gap: 0px; } .framer-WgzFW.framer-wfahwp > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-WgzFW.framer-wfahwp > :first-child { margin-left: 0px; } .framer-WgzFW.framer-wfahwp > :last-child { margin-right: 0px; } }",
  ],
  Bt = U($d, ec, "framer-WgzFW"),
  Cr = Bt;
Bt.displayName = "Home/HeroTablet";
Bt.defaultProps = { height: 4429, width: 810 };
P(Bt, {
  hxNeo0OUE: { title: "Project Cursor", type: m.CustomCursor },
  mZtE1brt4: { title: "Icon Cursor", type: m.CustomCursor },
  pbuE6UhMj: { title: "Notice", type: m.EventHandler },
});
X(Bt, [{ explicitInter: !0, fonts: [] }, ...Xd], {
  supportsExplicitInterCodegen: !0,
});
var tc = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramermFk05Wwh7",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerVariables:
          '{"hxNeo0OUE":"projectCursor","mZtE1brt4":"iconCursor","pbuE6UhMj":"notice"}',
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "4429",
        framerIntrinsicWidth: "810",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var ao = Ne(te),
  no = Se(te),
  rc = N(Ae),
  ac = N(it),
  nc = ["YiwQOAe3h", "VUyNBJ87b"],
  ic = "framer-pBT1s",
  oc = { VUyNBJ87b: "framer-v-62ywz", YiwQOAe3h: "framer-v-jgv0z8" };
function st(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var sc = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  lc = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  mc = a(w),
  fc = { Default: "YiwQOAe3h", Phone: "VUyNBJ87b" },
  dc = ({ height: t, id: r, width: i, ...n }) => {
    var o, f;
    return {
      ...n,
      variant:
        (f = (o = fc[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && f !== void 0
          ? f
          : "YiwQOAe3h",
    };
  },
  cc = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  pc = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      { style: o, className: f, layoutId: s, variant: C, ...b } = dc(t),
      {
        baseVariant: D,
        classNames: l,
        clearLoadingGesture: c,
        gestureHandlers: _,
        gestureVariant: F,
        isLoading: I,
        setGestureState: h,
        setVariant: k,
        variants: L,
      } = A({
        cycleOrder: nc,
        defaultVariant: "YiwQOAe3h",
        variant: C,
        variantClassNames: oc,
      }),
      g = cc(t, L),
      j = T(null),
      d = H(),
      R = [Si, dr],
      u = re();
    return e(z, {
      id: s ?? d,
      children: e(mc, {
        animate: L,
        initial: !1,
        children: e(lc, {
          value: sc,
          children: p(a.div, {
            ...b,
            ..._,
            className: V(ic, ...R, "framer-jgv0z8", f, l),
            "data-framer-name": "Default",
            layoutDependency: g,
            layoutId: "YiwQOAe3h",
            ref: r ?? j,
            style: { ...o },
            ...st({ VUyNBJ87b: { "data-framer-name": "Phone" } }, D, F),
            children: [
              p(a.div, {
                className: "framer-1q9568k",
                "data-framer-name": "Title",
                layoutDependency: g,
                layoutId: "gFomtGhBm",
                children: [
                  e(ao, {
                    __fromCanvasComponent: !0,
                    children: e(w, {
                      children: e(a.h2, {
                        className: "framer-styles-preset-1jzss2t",
                        "data-styles-preset": "CHTVVTxbR",
                        children: "Jayzhushi.com has been remastered.",
                      }),
                    }),
                    className: "framer-123d496",
                    fonts: ["Inter"],
                    layoutDependency: g,
                    layoutId: "fPmHlQFVy",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(no, {
                    __fromCanvasComponent: !0,
                    children: e(w, {
                      children: p(a.h2, {
                        className: "framer-styles-preset-1jzss2t",
                        "data-styles-preset": "CHTVVTxbR",
                        children: [
                          "Jayzhushi.com ",
                          e(a.br, {}),
                          "\u5DF2\u91CD\u5236\u3002",
                        ],
                      }),
                    }),
                    className: "framer-98yf4s",
                    fonts: ["Inter"],
                    layoutDependency: g,
                    layoutId: "boBmcwefx",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  p(a.div, {
                    className: "framer-vtkruo",
                    layoutDependency: g,
                    layoutId: "HYmXuAIIz",
                    children: [
                      e(ao, {
                        __fromCanvasComponent: !0,
                        children: e(w, {
                          children: e(a.p, {
                            className: "framer-styles-preset-1nr6prh",
                            "data-styles-preset": "uRhxzqfGc",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)))",
                            },
                            children: "July 12, 2024\uFF5C1 min read",
                          }),
                        }),
                        className: "framer-16qcs7i",
                        fonts: ["Inter"],
                        layoutDependency: g,
                        layoutId: "IdHSYLTrg",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      e(no, {
                        __fromCanvasComponent: !0,
                        children: e(w, {
                          children: e(a.p, {
                            className: "framer-styles-preset-1nr6prh",
                            "data-styles-preset": "uRhxzqfGc",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)))",
                            },
                            children:
                              "2024\u5E747\u670812\u65E5\uFF5C1 \u5206\u949F\u9605\u8BFB",
                          }),
                        }),
                        className: "framer-1ayz7lj",
                        fonts: ["Inter"],
                        layoutDependency: g,
                        layoutId: "dEik7SUiR",
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
              p(a.div, {
                className: "framer-12q96ha",
                layoutDependency: g,
                layoutId: "LgPn7aXNk",
                children: [
                  e(v, {
                    width: u?.width || "100vw",
                    ...st(
                      {
                        VUyNBJ87b: {
                          width: `calc(${u?.width || "100vw"} * 0.9)`,
                        },
                      },
                      D,
                      F,
                    ),
                    children: e(a.div, {
                      className: "framer-y39cdu-container",
                      layoutDependency: g,
                      layoutId: "vL6tqciNj-container",
                      children: e(Ae, {
                        height: "100%",
                        id: "vL6tqciNj",
                        layoutId: "vL6tqciNj",
                        style: { width: "100%" },
                        VIf0LAdUy: p(w, {
                          children: [
                            p("p", {
                              children: [
                                e(Dt, {
                                  href: "http://jayzhushi.com/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e("a", {
                                    children: "Jayzhushi.com",
                                  }),
                                }),
                                " is dedicated to bringing any idea to life. Over the past few weeks, I have revamped parts of the website, optimizing details and adding new content.",
                              ],
                            }),
                            e("p", {
                              children: e("br", {
                                className: "trailing-break",
                              }),
                            }),
                            e("ol", {
                              children: e("li", {
                                "data-preset-tag": "h3",
                                children: e("h3", {
                                  children: "Optimized Layout Animations",
                                }),
                              }),
                            }),
                            e("p", {
                              children:
                                "The new animations are more intuitive and smooth, resolving some animation issues on mobile interfaces.",
                            }),
                          ],
                        }),
                        WBP1YB7T1: p(w, {
                          children: [
                            p("p", {
                              children: [
                                e(Dt, {
                                  href: "http://jayzhushi.com/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e("a", {
                                    children: "Jayzhushi.com",
                                  }),
                                }),
                                " \u81F4\u529B\u4E8E\u5C06\u4EFB\u4F55\u60F3\u6CD5\u5E26\u5165\u73B0\u5B9E\u3002\u7ECF\u8FC7\u8FC7\u53BB\u51E0\u5468\u7684\u52AA\u529B\uFF0C\u6211\u91CD\u5236\u4E86\u7F51\u7AD9\u4E2D\u7684\u90E8\u5206\u5185\u5BB9\uFF0C\u4F18\u5316\u4E86\u7EC6\u8282\uFF0C\u5E76\u5E26\u6765\u4E86\u65B0\u7684\u5185\u5BB9\u3002",
                              ],
                            }),
                            e("p", {
                              children: e("br", {
                                className: "trailing-break",
                              }),
                            }),
                            e("ol", {
                              children: e("li", {
                                "data-preset-tag": "h3",
                                children: e("h3", {
                                  children: e("strong", {
                                    children:
                                      "\u4F18\u5316\u7684\u5E03\u5C40\u52A8\u753B",
                                  }),
                                }),
                              }),
                            }),
                            e("p", {
                              children:
                                "\u65B0\u7684\u52A8\u753B\u6548\u679C\u66F4\u52A0\u7B26\u5408\u76F4\u89C9\u4E14\u6D41\u7545\uFF0C\u5E76\u4E14\u6D88\u9664\u4E86\u79FB\u52A8\u754C\u9762\u7684\u4E00\u4E9B\u52A8\u753B\u95EE\u9898\u3002",
                            }),
                          ],
                        }),
                        width: "100%",
                      }),
                    }),
                  }),
                  e(v, {
                    width: u?.width || "100vw",
                    children: e(a.div, {
                      className: "framer-dkbwh1-container",
                      layoutDependency: g,
                      layoutId: "khe0VrjGL-container",
                      children: e(it, {
                        bgamx6SGu: !1,
                        DBCm87yi5: "rgba(255, 255, 255, 0.3)",
                        height: "100%",
                        id: "khe0VrjGL",
                        layoutId: "khe0VrjGL",
                        n03ilhzqN: "FILE",
                        QU6BORGAD: 24,
                        RDkHtR3nz: "Z62L0mxle",
                        RwojOCEEr: "https://example.com/video.mp4",
                        style: { height: "100%", width: "100%" },
                        ufwgLsgPQ:
                          "https://framerusercontent.com/assets/xOG9GkRDSGbHzObZzWoL0bSp4.mp4",
                        variant: "jEPG_8UxH",
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              p(a.div, {
                className: "framer-1ie6727",
                layoutDependency: g,
                layoutId: "exHHNN3nj",
                children: [
                  e(v, {
                    width: u?.width || "100vw",
                    ...st(
                      {
                        VUyNBJ87b: {
                          width: `calc(${u?.width || "100vw"} * 0.9)`,
                        },
                      },
                      D,
                      F,
                    ),
                    children: e(a.div, {
                      className: "framer-1nt8e4d-container",
                      layoutDependency: g,
                      layoutId: "E6vh7uYoo-container",
                      children: e(Ae, {
                        height: "100%",
                        id: "E6vh7uYoo",
                        layoutId: "E6vh7uYoo",
                        style: { width: "100%" },
                        VIf0LAdUy: p(w, {
                          children: [
                            e("ol", {
                              start: "2",
                              children: e("li", {
                                "data-preset-tag": "h3",
                                children: e("h3", {
                                  children: "Intuitive Navigation Assistance ",
                                }),
                              }),
                            }),
                            e("p", {
                              children:
                                "By enabling \u201Cnavigation arrows\u201D in the control center, clicking the screen edges will help you scroll through the horizontal layout.",
                            }),
                          ],
                        }),
                        WBP1YB7T1: p(w, {
                          children: [
                            e("ol", {
                              start: "2",
                              children: e("li", {
                                "data-preset-tag": "h3",
                                children: e("h3", {
                                  children:
                                    "\u76F4\u89C9\u7684\u5BFC\u822A\u8F85\u52A9 ",
                                }),
                              }),
                            }),
                            e("p", {
                              children:
                                "\u5728\u63A7\u5236\u4E2D\u5FC3\u542F\u7528\u201C\u5BFC\u822A\u7BAD\u5934\u201D\u540E\uFF0C\u70B9\u51FB\u5C4F\u5E55\u8FB9\u7F18\u53EF\u4EE5\u5E2E\u52A9\u4F60\u6EDA\u52A8\u6C34\u5E73\u5E03\u5C40\u3002",
                            }),
                          ],
                        }),
                        width: "100%",
                      }),
                    }),
                  }),
                  e(v, {
                    width: u?.width || "100vw",
                    children: e(a.div, {
                      className: "framer-l2vymk-container",
                      layoutDependency: g,
                      layoutId: "a_pnA_A3_-container",
                      children: e(it, {
                        bgamx6SGu: !1,
                        DBCm87yi5: "rgba(255, 255, 255, 0.3)",
                        height: "100%",
                        id: "a_pnA_A3_",
                        layoutId: "a_pnA_A3_",
                        n03ilhzqN: "FILE",
                        QU6BORGAD: 24,
                        RDkHtR3nz: "Z62L0mxle",
                        RwojOCEEr: "https://example.com/video.mp4",
                        style: { height: "100%", width: "100%" },
                        ufwgLsgPQ:
                          "https://framerusercontent.com/assets/cZfuxFexdYbrBJwNRxtmlOymBm0.mp4",
                        variant: "jEPG_8UxH",
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              p(a.div, {
                className: "framer-1mx6ta3",
                layoutDependency: g,
                layoutId: "XIj6PK7j9",
                children: [
                  e(v, {
                    width: u?.width || "100vw",
                    ...st(
                      {
                        VUyNBJ87b: {
                          width: `calc(${u?.width || "100vw"} * 0.9)`,
                        },
                      },
                      D,
                      F,
                    ),
                    children: e(a.div, {
                      className: "framer-1komsny-container",
                      layoutDependency: g,
                      layoutId: "DlSbLXmyn-container",
                      children: e(Ae, {
                        height: "100%",
                        id: "DlSbLXmyn",
                        layoutId: "DlSbLXmyn",
                        style: { width: "100%" },
                        VIf0LAdUy: p(w, {
                          children: [
                            e("ol", {
                              start: "3",
                              children: e("li", {
                                "data-preset-tag": "h3",
                                children: e("h3", { children: "Playground " }),
                              }),
                            }),
                            e("p", {
                              children:
                                "I've categorized some of the prototype ideas from daily life or work into separate Playground categories and added new pages for your inspiration.",
                            }),
                          ],
                        }),
                        WBP1YB7T1: p(w, {
                          children: [
                            e("ol", {
                              start: "3",
                              children: e("li", {
                                "data-preset-tag": "h3",
                                children: e("h3", { children: "Playground" }),
                              }),
                            }),
                            e("p", {
                              children:
                                "\u6211\u5C06\u4E00\u4E9B\u65E5\u5E38\u6216\u5DE5\u4F5C\u4E2D\u7A81\u53D1\u5947\u60F3\u7684\u539F\u578B\u6548\u679C\u72EC\u7ACB\u4E3A Playground \u7C7B\u76EE\uFF0C\u5E76\u4E3A\u5B83\u4EEC\u6DFB\u52A0\u4E86\u4E13\u95E8\u7684\u9875\u9762\uFF0C\u4F9B\u4F60\u53C2\u8003\u4EE5\u83B7\u5F97\u7075\u611F\u3002",
                            }),
                          ],
                        }),
                        width: "100%",
                      }),
                    }),
                  }),
                  e(v, {
                    width: u?.width || "100vw",
                    children: e(a.div, {
                      className: "framer-fotw5t-container",
                      layoutDependency: g,
                      layoutId: "uY42qynR9-container",
                      children: e(it, {
                        bgamx6SGu: !1,
                        DBCm87yi5: "rgba(255, 255, 255, 0.3)",
                        height: "100%",
                        id: "uY42qynR9",
                        layoutId: "uY42qynR9",
                        n03ilhzqN: "FILE",
                        QU6BORGAD: 24,
                        RDkHtR3nz: "Z62L0mxle",
                        RwojOCEEr: "https://example.com/video.mp4",
                        style: { height: "100%", width: "100%" },
                        ufwgLsgPQ:
                          "https://framerusercontent.com/assets/Me6DnCnGqDwIjBsDpPLOxAJKg.mp4",
                        variant: "jEPG_8UxH",
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              p(a.div, {
                className: "framer-1kew85m",
                layoutDependency: g,
                layoutId: "KWEVCdTRv",
                children: [
                  e(v, {
                    width: u?.width || "100vw",
                    ...st(
                      {
                        VUyNBJ87b: {
                          width: `calc(${u?.width || "100vw"} * 0.9)`,
                        },
                      },
                      D,
                      F,
                    ),
                    children: e(a.div, {
                      className: "framer-2azbj6-container",
                      layoutDependency: g,
                      layoutId: "PIbz8ohgT-container",
                      children: e(Ae, {
                        height: "100%",
                        id: "PIbz8ohgT",
                        layoutId: "PIbz8ohgT",
                        style: { width: "100%" },
                        VIf0LAdUy: p(w, {
                          children: [
                            e("ol", {
                              start: "4",
                              children: e("li", {
                                "data-preset-tag": "h3",
                                children: e("h3", {
                                  children: "Supplemented Career Information",
                                }),
                              }),
                            }),
                            e("p", {
                              children:
                                "I have added descriptions of my job responsibilities to the career section, so you can better understand my work direction when needed.",
                            }),
                          ],
                        }),
                        WBP1YB7T1: p(w, {
                          children: [
                            e("ol", {
                              start: "4",
                              children: e("li", {
                                "data-preset-tag": "h3",
                                children: e("h3", {
                                  children:
                                    "\u6269\u5145\u7684\u804C\u4E1A\u4FE1\u606F",
                                }),
                              }),
                            }),
                            e("p", {
                              children:
                                "\u6211\u5728\u804C\u4E1A\u7ECF\u5386\u4E2D\u8865\u5145\u4E86\u5DE5\u4F5C\u5185\u5BB9\u7684\u63CF\u8FF0\uFF0C\u4EE5\u4FBF\u4F60\u5728\u9700\u8981\u65F6\u5BF9\u6211\u7684\u5DE5\u4F5C\u65B9\u5411\u6709\u4E00\u5B9A\u4E86\u89E3\u3002",
                            }),
                          ],
                        }),
                        width: "100%",
                      }),
                    }),
                  }),
                  e(v, {
                    width: u?.width || "100vw",
                    children: e(a.div, {
                      className: "framer-2fl8s-container",
                      layoutDependency: g,
                      layoutId: "Yh5tNcZnL-container",
                      children: e(it, {
                        bgamx6SGu: !1,
                        DBCm87yi5: "rgba(255, 255, 255, 0.3)",
                        height: "100%",
                        id: "Yh5tNcZnL",
                        layoutId: "Yh5tNcZnL",
                        n03ilhzqN: "FILE",
                        QU6BORGAD: 24,
                        RDkHtR3nz: "Z62L0mxle",
                        RwojOCEEr: "https://example.com/video.mp4",
                        style: { height: "100%", width: "100%" },
                        ufwgLsgPQ:
                          "https://framerusercontent.com/assets/YUFQFobsnyXW2u2yYoMIcshU8E.mp4",
                        variant: "jEPG_8UxH",
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              p(a.div, {
                className: "framer-163xnyg",
                layoutDependency: g,
                layoutId: "dUK4KSlt1",
                children: [
                  e(v, {
                    width: u?.width || "100vw",
                    ...st(
                      {
                        VUyNBJ87b: {
                          width: `calc(${u?.width || "100vw"} * 0.9)`,
                        },
                      },
                      D,
                      F,
                    ),
                    children: e(a.div, {
                      className: "framer-1kfnzb-container",
                      layoutDependency: g,
                      layoutId: "mIm3WM48j-container",
                      children: e(Ae, {
                        height: "100%",
                        id: "mIm3WM48j",
                        layoutId: "mIm3WM48j",
                        style: { width: "100%" },
                        VIf0LAdUy: p(w, {
                          children: [
                            e("ol", {
                              start: "5",
                              children: e("li", {
                                "data-preset-tag": "h3",
                                children: e("h3", {
                                  children: "Expanded Design Processes",
                                }),
                              }),
                            }),
                            e("p", {
                              children:
                                "I have added content about the design processes in some project introductions, providing detailed information about the projects. This is particularly suitable for students or beginners to reference, and more design processes will be added soon.",
                            }),
                          ],
                        }),
                        WBP1YB7T1: p(w, {
                          children: [
                            e("ol", {
                              start: "5",
                              children: e("li", {
                                "data-preset-tag": "h3",
                                children: e("h3", {
                                  children:
                                    "\u9879\u76EE\u4E2D\u7684\u8BBE\u8BA1\u6D41\u7A0B",
                                }),
                              }),
                            }),
                            e("p", {
                              children:
                                "\u6211\u5728\u90E8\u5206\u9879\u76EE\u4ECB\u7ECD\u4E2D\u8865\u5145\u4E86\u8BBE\u8BA1\u6D41\u7A0B\u7684\u5185\u5BB9\uFF0C\u4EE5\u4FBF\u4F60\u4E86\u89E3\u9879\u76EE\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8FD9\u4E5F\u7279\u522B\u9002\u5408\u5B66\u751F\u6216\u521D\u5B66\u8005\u53C2\u8003\uFF0C\u66F4\u591A\u7684\u8BBE\u8BA1\u6D41\u7A0B\u5C06\u4F1A\u9010\u6B65\u8865\u5145\u3002 ",
                            }),
                          ],
                        }),
                        width: "100%",
                      }),
                    }),
                  }),
                  e(v, {
                    width: u?.width || "100vw",
                    children: e(a.div, {
                      className: "framer-1k7sko1-container",
                      layoutDependency: g,
                      layoutId: "s3IbjfMNG-container",
                      children: e(it, {
                        bgamx6SGu: !1,
                        DBCm87yi5: "rgba(255, 255, 255, 0.3)",
                        height: "100%",
                        id: "s3IbjfMNG",
                        layoutId: "s3IbjfMNG",
                        n03ilhzqN: "FILE",
                        QU6BORGAD: 24,
                        RDkHtR3nz: "Z62L0mxle",
                        RwojOCEEr: "https://example.com/video.mp4",
                        style: { height: "100%", width: "100%" },
                        ufwgLsgPQ:
                          "https://framerusercontent.com/assets/0udVhKSglLPui23xwAxvYKkq4I.mp4",
                        variant: "jEPG_8UxH",
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              e(v, {
                width: u?.width || "100vw",
                ...st(
                  {
                    VUyNBJ87b: { width: `calc(${u?.width || "100vw"} * 0.9)` },
                  },
                  D,
                  F,
                ),
                children: e(a.div, {
                  className: "framer-1c68sh9-container",
                  layoutDependency: g,
                  layoutId: "ikJOZxBaz-container",
                  children: e(Ae, {
                    height: "100%",
                    id: "ikJOZxBaz",
                    layoutId: "ikJOZxBaz",
                    style: { width: "100%" },
                    VIf0LAdUy: e(w, {
                      children: e("p", {
                        children:
                          "Additionally, new projects will soon be updated on the website, so feel free to check back from time to time. If you have any comments or suggestions you can contact me via Twitter or email, I am very much looking forward to your constructive ideas.\u{1F37B}",
                      }),
                    }),
                    WBP1YB7T1: e(w, {
                      children: e("p", {
                        children:
                          "\u6B64\u5916\uFF0C\u65B0\u7684\u9879\u76EE\u4E5F\u5373\u5C06\u66F4\u65B0\u5230\u7F51\u7AD9\u4E2D\uFF0C\u6B22\u8FCE\u4F60\u4E0D\u5B9A\u65F6\u56DE\u6765\u770B\u770B\u3002\u5982\u679C\u4F60\u6709\u4EFB\u4F55\u610F\u89C1\u6216\u5EFA\u8BAE\u53EF\u4EE5\u901A\u8FC7 Twitter \u6216\u90AE\u7BB1\u8054\u7CFB\u6211\uFF0C\u6211\u975E\u5E38\u671F\u5F85\u4F60\u5177\u6709\u5EFA\u8BBE\u6027\u7684\u60F3\u6CD5\u3002\u{1F37B}",
                      }),
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
  hc = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-pBT1s.framer-krfotk, .framer-pBT1s .framer-krfotk { display: block; }",
    ".framer-pBT1s.framer-jgv0z8 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 780px; }",
    ".framer-pBT1s .framer-1q9568k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-pBT1s .framer-123d496, .framer-pBT1s .framer-98yf4s, .framer-pBT1s .framer-16qcs7i, .framer-pBT1s .framer-1ayz7lj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-pBT1s .framer-vtkruo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-pBT1s .framer-12q96ha, .framer-pBT1s .framer-1ie6727, .framer-pBT1s .framer-1mx6ta3, .framer-pBT1s .framer-1kew85m, .framer-pBT1s .framer-163xnyg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-pBT1s .framer-y39cdu-container, .framer-pBT1s .framer-1nt8e4d-container, .framer-pBT1s .framer-1komsny-container, .framer-pBT1s .framer-2azbj6-container, .framer-pBT1s .framer-1kfnzb-container, .framer-pBT1s .framer-1c68sh9-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-pBT1s .framer-dkbwh1-container, .framer-pBT1s .framer-l2vymk-container, .framer-pBT1s .framer-fotw5t-container, .framer-pBT1s .framer-2fl8s-container, .framer-pBT1s .framer-1k7sko1-container { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 443px); position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-pBT1s.framer-jgv0z8, .framer-pBT1s .framer-1q9568k, .framer-pBT1s .framer-vtkruo, .framer-pBT1s .framer-12q96ha, .framer-pBT1s .framer-1ie6727, .framer-pBT1s .framer-1mx6ta3, .framer-pBT1s .framer-1kew85m, .framer-pBT1s .framer-163xnyg { gap: 0px; } .framer-pBT1s.framer-jgv0z8 > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-pBT1s.framer-jgv0z8 > :first-child, .framer-pBT1s .framer-1q9568k > :first-child, .framer-pBT1s .framer-vtkruo > :first-child, .framer-pBT1s .framer-12q96ha > :first-child, .framer-pBT1s .framer-1ie6727 > :first-child, .framer-pBT1s .framer-1mx6ta3 > :first-child, .framer-pBT1s .framer-1kew85m > :first-child, .framer-pBT1s .framer-163xnyg > :first-child { margin-top: 0px; } .framer-pBT1s.framer-jgv0z8 > :last-child, .framer-pBT1s .framer-1q9568k > :last-child, .framer-pBT1s .framer-vtkruo > :last-child, .framer-pBT1s .framer-12q96ha > :last-child, .framer-pBT1s .framer-1ie6727 > :last-child, .framer-pBT1s .framer-1mx6ta3 > :last-child, .framer-pBT1s .framer-1kew85m > :last-child, .framer-pBT1s .framer-163xnyg > :last-child { margin-bottom: 0px; } .framer-pBT1s .framer-1q9568k > *, .framer-pBT1s .framer-vtkruo > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-pBT1s .framer-12q96ha > *, .framer-pBT1s .framer-1ie6727 > *, .framer-pBT1s .framer-1mx6ta3 > *, .framer-pBT1s .framer-1kew85m > *, .framer-pBT1s .framer-163xnyg > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }",
    ".framer-pBT1s.framer-v-62ywz.framer-jgv0z8 { align-content: center; align-items: center; width: 390px; }",
    ".framer-pBT1s.framer-v-62ywz .framer-1q9568k, .framer-pBT1s.framer-v-62ywz .framer-y39cdu-container, .framer-pBT1s.framer-v-62ywz .framer-1nt8e4d-container, .framer-pBT1s.framer-v-62ywz .framer-1komsny-container, .framer-pBT1s.framer-v-62ywz .framer-2azbj6-container, .framer-pBT1s.framer-v-62ywz .framer-1kfnzb-container, .framer-pBT1s.framer-v-62ywz .framer-1c68sh9-container { width: 90%; }",
    ".framer-pBT1s.framer-v-62ywz .framer-dkbwh1-container, .framer-pBT1s.framer-v-62ywz .framer-l2vymk-container, .framer-pBT1s.framer-v-62ywz .framer-fotw5t-container, .framer-pBT1s.framer-v-62ywz .framer-1k7sko1-container { height: var(--framer-aspect-ratio-supported, 224px); }",
    ".framer-pBT1s.framer-v-62ywz .framer-2fl8s-container { height: var(--framer-aspect-ratio-supported, 223px); }",
    ...Ni,
    ...fr,
  ],
  Xt = U(pc, hc, "framer-pBT1s"),
  Mt = Xt;
Xt.displayName = "Home/NoticeContent";
Xt.defaultProps = { height: 4362, width: 780 };
P(Xt, {
  variant: {
    options: ["YiwQOAe3h", "VUyNBJ87b"],
    optionTitles: ["Default", "Phone"],
    title: "Variant",
    type: m.Enum,
  },
});
X(
  Xt,
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
    ...rc,
    ...ac,
    ...ve(Fi),
    ...ve(mr),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Pa = {};
Rt(Pa, { __FramerMetadata__: () => qc, default: () => _r });
var za = {};
Rt(za, { __FramerMetadata__: () => Lc, default: () => Rr });
var uc = N(wt),
  yc = ["LSoNEMdIJ", "qUF1uWCcd"],
  gc = "framer-ILMkc",
  xc = { LSoNEMdIJ: "framer-v-dtw9jt", qUF1uWCcd: "framer-v-7bvttc" };
function io(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var vc = { duration: 0, type: "tween" },
  wc = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  bc = a(w),
  kc = { Horizontal: "qUF1uWCcd", Vertical: "LSoNEMdIJ" },
  Cc = ({
    height: t,
    iconCursor: r,
    id: i,
    notice: n,
    projectCursor: o,
    width: f,
    ...s
  }) => {
    var C, b;
    return {
      ...s,
      d95Uyy9vG: r ?? s.d95Uyy9vG,
      J6eOx28iq: n ?? s.J6eOx28iq,
      lxzOuQJFn: o ?? s.lxzOuQJFn,
      variant:
        (b = (C = kc[s.variant]) !== null && C !== void 0 ? C : s.variant) !==
          null && b !== void 0
          ? b
          : "LSoNEMdIJ",
    };
  },
  Rc = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  _c = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        J6eOx28iq: b,
        lxzOuQJFn: D,
        d95Uyy9vG: l,
        ...c
      } = Cc(t),
      {
        baseVariant: _,
        classNames: F,
        clearLoadingGesture: I,
        gestureHandlers: h,
        gestureVariant: k,
        isLoading: L,
        setGestureState: g,
        setVariant: j,
        variants: d,
      } = A({
        cycleOrder: yc,
        defaultVariant: "LSoNEMdIJ",
        variant: C,
        variantClassNames: xc,
      }),
      R = Rc(t, d),
      { activeVariantCallback: u, delay: Q } = le(_),
      G = u(async (...x) => {
        if (b && (await b(...x)) === !1) return !1;
      }),
      K = T(null),
      J = H(),
      Z = [],
      E = re();
    return e(z, {
      id: s ?? J,
      children: e(bc, {
        animate: d,
        initial: !1,
        children: e(wc, {
          value: vc,
          children: e(a.div, {
            ...c,
            ...h,
            className: V(gc, ...Z, "framer-dtw9jt", f, F),
            "data-framer-name": "Vertical",
            "data-hide-scrollbars": !0,
            layoutDependency: R,
            layoutId: "LSoNEMdIJ",
            ref: r ?? K,
            style: { ...o },
            ...io({ qUF1uWCcd: { "data-framer-name": "Horizontal" } }, _, k),
            children: e(v, {
              width: E?.width || "100vw",
              children: e(a.div, {
                className: "framer-17jtu61-container",
                layoutDependency: R,
                layoutId: "vwr_rhZjE-container",
                children: e(wt, {
                  BjX2ajSNA: l,
                  height: "100%",
                  id: "vwr_rhZjE",
                  layoutId: "vwr_rhZjE",
                  style: { width: "100%" },
                  uHSd6ozPR: D,
                  variant: "ggzaDwIuD",
                  width: "100%",
                  xIdMDR5tj: G,
                  ...io({ qUF1uWCcd: { variant: "WKxObi6RI" } }, _, k),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Dc = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-ILMkc.framer-1lfm08y, .framer-ILMkc .framer-1lfm08y { display: block; }",
    ".framer-ILMkc.framer-dtw9jt { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 390px; }",
    ".framer-ILMkc .framer-17jtu61-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ILMkc.framer-dtw9jt { gap: 0px; } .framer-ILMkc.framer-dtw9jt > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ILMkc.framer-dtw9jt > :first-child { margin-top: 0px; } .framer-ILMkc.framer-dtw9jt > :last-child { margin-bottom: 0px; } }",
    '.framer-ILMkc[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-ILMkc [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '.framer-ILMkc[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-ILMkc [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  At = U(_c, Dc, "framer-ILMkc"),
  Rr = At;
At.displayName = "Home/LayoutPhone";
At.defaultProps = { height: 7670, width: 390 };
P(At, {
  variant: {
    options: ["LSoNEMdIJ", "qUF1uWCcd"],
    optionTitles: ["Vertical", "Horizontal"],
    title: "Variant",
    type: m.Enum,
  },
  J6eOx28iq: { title: "Notice", type: m.EventHandler },
  lxzOuQJFn: { title: "Project Cursor", type: m.CustomCursor },
  d95Uyy9vG: { title: "Icon Cursor", type: m.CustomCursor },
});
X(At, [{ explicitInter: !0, fonts: [] }, ...uc], {
  supportsExplicitInterCodegen: !0,
});
var Lc = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerPpouRypIR",
      slots: [],
      annotations: {
        framerComponentViewportWidth: "true",
        framerContractVersion: "1",
        framerDisplayContentsDiv: "false",
        framerIntrinsicWidth: "390",
        framerImmutableVariables: "true",
        framerVariables:
          '{"J6eOx28iq":"notice","lxzOuQJFn":"projectCursor","d95Uyy9vG":"iconCursor"}',
        framerIntrinsicHeight: "7670",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"qUF1uWCcd":{"layout":["fixed","auto"]}}}',
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var Ic = N(Rr),
  Fc = pe(or(Rr), za),
  Nc = ["tKghdUEtj"],
  Sc = "framer-D7A19",
  jc = { tKghdUEtj: "framer-v-1h6j0eo" };
var Gc = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Tc = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  Vc = a(w),
  Ec = ({
    height: t,
    iconCursor: r,
    id: i,
    notice: n,
    projectCursor: o,
    width: f,
    ...s
  }) => ({
    ...s,
    pRnzzx5xV: r ?? s.pRnzzx5xV,
    XnEXOPyGv: o ?? s.XnEXOPyGv,
    YLDaAyo77: n ?? s.YLDaAyo77,
  }),
  zc = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Pc = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        XnEXOPyGv: b,
        pRnzzx5xV: D,
        YLDaAyo77: l,
        ...c
      } = Ec(t),
      {
        baseVariant: _,
        classNames: F,
        gestureHandlers: I,
        gestureVariant: h,
        setGestureState: k,
        setVariant: L,
        variants: g,
      } = A({
        cycleOrder: Nc,
        defaultVariant: "tKghdUEtj",
        variant: C,
        variantClassNames: jc,
      }),
      j = zc(t, g),
      { activeVariantCallback: d, delay: R } = le(_),
      u = d(async (...Z) => {
        if (l && (await l(...Z)) === !1) return !1;
      }),
      Q = T(null),
      G = H(),
      K = [],
      J = re();
    return e(z, {
      id: s ?? G,
      children: e(Vc, {
        animate: g,
        initial: !1,
        children: e(Tc, {
          value: Gc,
          children: e(a.div, {
            ...c,
            ...I,
            className: V(Sc, ...K, "framer-1h6j0eo", f, F),
            "data-framer-name": "Variant 1",
            layoutDependency: j,
            layoutId: "tKghdUEtj",
            ref: r ?? Q,
            style: { ...o },
            children: e(v, {
              width: J?.width || "100vw",
              children: e(a.div, {
                className: "framer-1qexyga-container",
                layoutDependency: j,
                layoutId: "Zh_6F8jUh-container",
                children: e(Fc, {
                  d95Uyy9vG: D,
                  height: "100%",
                  id: "Zh_6F8jUh",
                  J6eOx28iq: u,
                  layoutId: "Zh_6F8jUh",
                  lxzOuQJFn: b,
                  style: { width: "100%" },
                  variant: "LSoNEMdIJ",
                  width: "100%",
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Uc = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-D7A19.framer-1hwcl5x, .framer-D7A19 .framer-1hwcl5x { display: block; }",
    ".framer-D7A19.framer-1h6j0eo { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 390px; }",
    ".framer-D7A19 .framer-1qexyga-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-D7A19.framer-1h6j0eo { gap: 0px; } .framer-D7A19.framer-1h6j0eo > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-D7A19.framer-1h6j0eo > :first-child { margin-top: 0px; } .framer-D7A19.framer-1h6j0eo > :last-child { margin-bottom: 0px; } }",
  ],
  Yt = U(Pc, Uc, "framer-D7A19"),
  _r = Yt;
Yt.displayName = "Home/HeroPhone";
Yt.defaultProps = { height: 6338, width: 390 };
P(Yt, {
  XnEXOPyGv: { title: "Project Cursor", type: m.CustomCursor },
  pRnzzx5xV: { title: "Icon Cursor", type: m.CustomCursor },
  YLDaAyo77: { title: "Notice", type: m.EventHandler },
});
X(Yt, [{ explicitInter: !0, fonts: [] }, ...Ic], {
  supportsExplicitInterCodegen: !0,
});
var qc = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerzNfJs9xcz",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "6338",
        framerContractVersion: "1",
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
        framerDisplayContentsDiv: "false",
        framerIntrinsicWidth: "390",
        framerVariables:
          '{"XnEXOPyGv":"projectCursor","pRnzzx5xV":"iconCursor","YLDaAyo77":"notice"}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
function Ot(t) {
  let { image: r, alt: i, radius: n, offset: o, border_color: f, onTap: s } = t,
    [C, b] = Ee(),
    D = (l) =>
      typeof l == "object" && l !== null && typeof l.src == "string"
        ? l
        : typeof l == "string"
          ? { src: l }
          : void 0;
  return e(a.div, {
    style: {
      ...Hc,
      borderRadius: n,
      WebkitBorderRadius: n,
      MozBorderRadius: n,
    },
    onTap: s,
    children: e(a.img, {
      style: { width: "100%", height: "100%", objectFit: "cover" },
      src: r.src,
      alt: r.alt,
    }),
  });
}
Ot.defaultProps = {
  image:
    "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
  alt: "image",
  radius: 0,
};
P(Ot, {
  image: { type: m.String, title: "Image" },
  offset: { type: m.Number, title: "offset" },
  radius: { type: m.Number, title: "Radius" },
});
var Hc = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
var Bc = ["qr2QzdCcO", "qlEUdCB3p", "Rjlk4rXmz"],
  Xc = "framer-Q5uVp",
  Mc = {
    qlEUdCB3p: "framer-v-12m82qf",
    qr2QzdCcO: "framer-v-188594e",
    Rjlk4rXmz: "framer-v-odwj8o",
  };
function Ua(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var Ac = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Yc = { delay: 0, duration: 0, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Oc = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  Wc = a(w),
  Qc = {
    "Variant 2": "qlEUdCB3p",
    "Variant 3": "Rjlk4rXmz",
    Start: "qr2QzdCcO",
  },
  Jc = ({ click: t, height: r, id: i, width: n, ...o }) => {
    var f, s;
    return {
      ...o,
      aWW5kWiC1: t ?? o.aWW5kWiC1,
      variant:
        (s = (f = Qc[o.variant]) !== null && f !== void 0 ? f : o.variant) !==
          null && s !== void 0
          ? s
          : "qr2QzdCcO",
    };
  },
  Zc = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Kc = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        aWW5kWiC1: b,
        ...D
      } = Jc(t),
      {
        baseVariant: l,
        classNames: c,
        gestureHandlers: _,
        gestureVariant: F,
        setGestureState: I,
        setVariant: h,
        variants: k,
      } = A({
        cycleOrder: Bc,
        defaultVariant: "qr2QzdCcO",
        variant: C,
        variantClassNames: Mc,
      }),
      L = Zc(t, k),
      { activeVariantCallback: g, delay: j } = le(l),
      d = g(async (...Z) => {
        if ((I({ isPressed: !1 }), b && (await b(...Z)) === !1)) return !1;
        h("qlEUdCB3p");
      }),
      R = g(async (...Z) => {
        await j(() => h("Rjlk4rXmz"), 600);
      }),
      u = g(async (...Z) => {
        await j(() => h("qr2QzdCcO"), 100);
      });
    Ve(l, { qlEUdCB3p: R, Rjlk4rXmz: u });
    let Q = T(null),
      G = H(),
      K = [],
      J = re();
    return e(z, {
      id: s ?? G,
      children: e(Wc, {
        animate: k,
        initial: !1,
        children: e(Oc, {
          value: Ac,
          ...Ua({ Rjlk4rXmz: { value: Yc } }, l, F),
          children: e(a.div, {
            ...D,
            ..._,
            className: V(Xc, ...K, "framer-188594e", f, c),
            "data-framer-name": "Start",
            "data-highlight": !0,
            layoutDependency: L,
            layoutId: "qr2QzdCcO",
            onTap: d,
            ref: r ?? Q,
            style: {
              backgroundColor:
                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
              borderTopLeftRadius: 17,
              borderTopRightRadius: 17,
              ...o,
            },
            ...Ua(
              {
                qlEUdCB3p: { "data-framer-name": "Variant 2", onTap: void 0 },
                Rjlk4rXmz: { "data-framer-name": "Variant 3", onTap: void 0 },
              },
              l,
              F,
            ),
            children: p(a.div, {
              className: "framer-1yeaxtp",
              layoutDependency: L,
              layoutId: "ypX8jxx3q",
              children: [
                e(ae, {
                  className: "framer-rsl5zv",
                  "data-framer-name": "arrow_left_03_sharp",
                  layout: "position",
                  layoutDependency: L,
                  layoutId: "URot_wfjI",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 4 6 L 4 18" fill="transparent" stroke-width="1.5" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                  svgContentId: 12706296694,
                  withExternalLayout: !0,
                }),
                e(a.div, {
                  className: "framer-vaitbj",
                  layoutDependency: L,
                  layoutId: "QHos4dy_I",
                  children: e(ae, {
                    className: "framer-1hib3fn",
                    "data-framer-name": "arrow_left_03_sharp",
                    layout: "position",
                    layoutDependency: L,
                    layoutId: "BCsLCV4C5",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 24"><path d="M -3 6 L -3 18" fill="transparent" stroke-width="1.5" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 2 12 L 13 12 M 5 8 L 1.707 11.293 C 1.374 11.626 1.207 11.793 1.207 12 C 1.207 12.207 1.374 12.374 1.707 12.707 L 5 16" fill="transparent" stroke-width="1.5" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 9636045236,
                    withExternalLayout: !0,
                    ...Ua(
                      {
                        qlEUdCB3p: { svgContentId: 8994638054 },
                        Rjlk4rXmz: { svgContentId: 10047822424 },
                      },
                      l,
                      F,
                    ),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  $c = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Q5uVp.framer-cthm7s, .framer-Q5uVp .framer-cthm7s { display: block; }",
    ".framer-Q5uVp.framer-188594e { cursor: pointer; height: 60px; overflow: hidden; position: relative; width: 60px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Q5uVp .framer-1yeaxtp { flex: none; height: 24px; left: calc(50.00000000000002% - 25px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 25px; }",
    ".framer-Q5uVp .framer-rsl5zv { flex: none; height: 24px; left: 0px; position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; }",
    ".framer-Q5uVp .framer-vaitbj { bottom: 0px; flex: none; overflow: hidden; position: absolute; right: 1px; top: 0px; width: 19px; }",
    ".framer-Q5uVp .framer-1hib3fn { flex: none; height: 24px; position: absolute; right: 2px; top: calc(50.00000000000002% - 24px / 2); width: 14px; }",
    ".framer-Q5uVp.framer-v-12m82qf.framer-188594e, .framer-Q5uVp.framer-v-odwj8o.framer-188594e { aspect-ratio: 1 / 1; cursor: unset; height: var(--framer-aspect-ratio-supported, 60px); }",
    ".framer-Q5uVp.framer-v-12m82qf .framer-1hib3fn { left: -16px; right: unset; }",
    ".framer-Q5uVp.framer-v-odwj8o .framer-1hib3fn { right: -15px; }",
  ],
  Wt = U(Kc, $c, "framer-Q5uVp"),
  oo = Wt;
Wt.displayName = "Button/ToFront";
Wt.defaultProps = { height: 60, width: 60 };
P(Wt, {
  variant: {
    options: ["qr2QzdCcO", "qlEUdCB3p", "Rjlk4rXmz"],
    optionTitles: ["Start", "Variant 2", "Variant 3"],
    title: "Variant",
    type: m.Enum,
  },
  aWW5kWiC1: { title: "Click", type: m.EventHandler },
});
X(Wt, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var ep = ["Vhjt8b2at", "dG2Aj27OX", "jQc752G6D"],
  tp = "framer-BdcAV",
  rp = {
    dG2Aj27OX: "framer-v-1prgdvl",
    jQc752G6D: "framer-v-4k10s1",
    Vhjt8b2at: "framer-v-uqo8kb",
  };
function qa(t, ...r) {
  let i = {};
  return r?.forEach((n) => n && Object.assign(i, t[n])), i;
}
var ap = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  np = { delay: 0, duration: 0, ease: [0.44, 0, 0.56, 1], type: "tween" },
  ip = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  op = a(w),
  sp = {
    "Variant 2": "dG2Aj27OX",
    "Variant 3": "jQc752G6D",
    Start: "Vhjt8b2at",
  },
  lp = ({ click: t, height: r, id: i, width: n, ...o }) => {
    var f, s;
    return {
      ...o,
      variant:
        (s = (f = sp[o.variant]) !== null && f !== void 0 ? f : o.variant) !==
          null && s !== void 0
          ? s
          : "Vhjt8b2at",
      VMpSZdMTg: t ?? o.VMpSZdMTg,
    };
  },
  mp = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  fp = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        VMpSZdMTg: b,
        ...D
      } = lp(t),
      {
        baseVariant: l,
        classNames: c,
        gestureHandlers: _,
        gestureVariant: F,
        setGestureState: I,
        setVariant: h,
        variants: k,
      } = A({
        cycleOrder: ep,
        defaultVariant: "Vhjt8b2at",
        variant: C,
        variantClassNames: rp,
      }),
      L = mp(t, k),
      { activeVariantCallback: g, delay: j } = le(l),
      d = g(async (...Z) => {
        if ((I({ isPressed: !1 }), b && (await b(...Z)) === !1)) return !1;
        h("dG2Aj27OX");
      }),
      R = g(async (...Z) => {
        await j(() => h("jQc752G6D"), 600);
      }),
      u = g(async (...Z) => {
        await j(() => h("Vhjt8b2at"), 100);
      });
    Ve(l, { dG2Aj27OX: R, jQc752G6D: u });
    let Q = T(null),
      G = H(),
      K = [],
      J = re();
    return e(z, {
      id: s ?? G,
      children: e(op, {
        animate: k,
        initial: !1,
        children: e(ip, {
          value: ap,
          ...qa({ jQc752G6D: { value: np } }, l, F),
          children: e(a.div, {
            ...D,
            ..._,
            className: V(tp, ...K, "framer-uqo8kb", f, c),
            "data-framer-name": "Start",
            "data-highlight": !0,
            layoutDependency: L,
            layoutId: "Vhjt8b2at",
            onTap: d,
            ref: r ?? Q,
            style: {
              backgroundColor:
                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
              borderTopLeftRadius: 17,
              borderTopRightRadius: 17,
              ...o,
            },
            ...qa(
              {
                dG2Aj27OX: { "data-framer-name": "Variant 2", onTap: void 0 },
                jQc752G6D: { "data-framer-name": "Variant 3", onTap: void 0 },
              },
              l,
              F,
            ),
            children: p(a.div, {
              className: "framer-imqqe9",
              layoutDependency: L,
              layoutId: "ZBcH_xhud",
              style: { rotate: 180 },
              children: [
                e(ae, {
                  className: "framer-1d9466n",
                  "data-framer-name": "arrow_left_03_sharp",
                  layout: "position",
                  layoutDependency: L,
                  layoutId: "mSbIkIxFO",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 4 6 L 4 18" fill="transparent" stroke-width="1.5" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                  svgContentId: 12706296694,
                  withExternalLayout: !0,
                }),
                e(a.div, {
                  className: "framer-1it6e7u",
                  layoutDependency: L,
                  layoutId: "EgE8ApiNS",
                  children: e(ae, {
                    className: "framer-39r30",
                    "data-framer-name": "arrow_left_03_sharp",
                    layout: "position",
                    layoutDependency: L,
                    layoutId: "TN_pu0iAC",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 24"><path d="M -3 6 L -3 18" fill="transparent" stroke-width="1.5" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 2 12 L 13 12 M 5 8 L 1.707 11.293 C 1.374 11.626 1.207 11.793 1.207 12 C 1.207 12.207 1.374 12.374 1.707 12.707 L 5 16" fill="transparent" stroke-width="1.5" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 10241006643,
                    withExternalLayout: !0,
                    ...qa(
                      {
                        dG2Aj27OX: { svgContentId: 11553556109 },
                        jQc752G6D: { svgContentId: 10164567282 },
                      },
                      l,
                      F,
                    ),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  dp = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-BdcAV.framer-1aqih49, .framer-BdcAV .framer-1aqih49 { display: block; }",
    ".framer-BdcAV.framer-uqo8kb { cursor: pointer; height: 60px; overflow: hidden; position: relative; width: 60px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-BdcAV .framer-imqqe9 { flex: none; height: 24px; left: calc(50.00000000000002% - 25px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 25px; }",
    ".framer-BdcAV .framer-1d9466n { flex: none; height: 24px; left: 0px; position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; }",
    ".framer-BdcAV .framer-1it6e7u { bottom: 0px; flex: none; overflow: hidden; position: absolute; right: 1px; top: 0px; width: 19px; }",
    ".framer-BdcAV .framer-39r30 { flex: none; height: 24px; position: absolute; right: 2px; top: calc(50.00000000000002% - 24px / 2); width: 14px; }",
    ".framer-BdcAV.framer-v-1prgdvl.framer-uqo8kb, .framer-BdcAV.framer-v-4k10s1.framer-uqo8kb { aspect-ratio: 1 / 1; cursor: unset; height: var(--framer-aspect-ratio-supported, 60px); }",
    ".framer-BdcAV.framer-v-1prgdvl .framer-39r30 { left: -16px; right: unset; }",
    ".framer-BdcAV.framer-v-4k10s1 .framer-39r30 { right: -15px; }",
  ],
  Qt = U(fp, dp, "framer-BdcAV"),
  so = Qt;
Qt.displayName = "Button/ToEnd";
Qt.defaultProps = { height: 60, width: 60 };
P(Qt, {
  variant: {
    options: ["Vhjt8b2at", "dG2Aj27OX", "jQc752G6D"],
    optionTitles: ["Start", "Variant 2", "Variant 3"],
    title: "Variant",
    type: m.Enum,
  },
  VMpSZdMTg: { title: "Click", type: m.EventHandler },
});
X(Qt, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var cp = ["p_6pEW1ir"],
  pp = "framer-mQxlI",
  hp = { p_6pEW1ir: "framer-v-nchxj1" };
var up = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  yp = ({ value: t, children: r }) => {
    let i = Y(S),
      n = t ?? i.transition,
      o = M(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(S.Provider, { value: o, children: r });
  },
  gp = a(w),
  xp = ({ height: t, id: r, text: i, width: n, ...o }) => {
    var f;
    return {
      ...o,
      rLEYIFRSY:
        (f = i ?? o.rLEYIFRSY) !== null && f !== void 0 ? f : "Hover Text",
    };
  },
  vp = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  wp = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        rLEYIFRSY: b,
        ...D
      } = xp(t),
      {
        baseVariant: l,
        classNames: c,
        clearLoadingGesture: _,
        gestureHandlers: F,
        gestureVariant: I,
        isLoading: h,
        setGestureState: k,
        setVariant: L,
        variants: g,
      } = A({
        cycleOrder: cp,
        defaultVariant: "p_6pEW1ir",
        variant: C,
        variantClassNames: hp,
      }),
      j = vp(t, g),
      d = T(null),
      R = H(),
      u = [],
      Q = re();
    return e(z, {
      id: s ?? R,
      children: e(gp, {
        animate: g,
        initial: !1,
        children: e(yp, {
          value: up,
          children: e(a.div, {
            ...D,
            ...F,
            className: V(pp, ...u, "framer-nchxj1", f, c),
            "data-framer-name": "Desktop",
            layoutDependency: j,
            layoutId: "p_6pEW1ir",
            ref: r ?? d,
            style: { ...o },
            children: e(te, {
              __fromCanvasComponent: !0,
              children: e(w, {
                children: e(a.p, {
                  style: {
                    "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                    "--framer-font-family": '"Satoshi", sans-serif',
                    "--framer-font-weight": "500",
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)))",
                  },
                  children: "Hover Text",
                }),
              }),
              className: "framer-1mr2f3h",
              fonts: ["FS;Satoshi-medium"],
              layoutDependency: j,
              layoutId: "FQc9XXYhe",
              style: {
                "--extracted-r6o4lv":
                  "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
              },
              text: b,
              verticalAlignment: "top",
              withExternalLayout: !0,
            }),
          }),
        }),
      }),
    });
  }),
  bp = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-mQxlI.framer-1nctyp9, .framer-mQxlI .framer-1nctyp9 { display: block; }",
    ".framer-mQxlI.framer-nchxj1 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-mQxlI .framer-1mr2f3h { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-mQxlI.framer-nchxj1 { gap: 0px; } .framer-mQxlI.framer-nchxj1 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-mQxlI.framer-nchxj1 > :first-child { margin-left: 0px; } .framer-mQxlI.framer-nchxj1 > :last-child { margin-right: 0px; } }",
  ],
  Jt = U(wp, bp, "framer-mQxlI"),
  lo = Jt;
Jt.displayName = "Utilities/ScrollHoverText";
Jt.defaultProps = { height: 19, width: 76 };
P(Jt, {
  rLEYIFRSY: {
    defaultValue: "Hover Text",
    displayTextArea: !1,
    title: "text",
    type: m.String,
  },
});
X(
  Jt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2",
          weight: "500",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 },
);
var _e = { type: "spring", stiffness: 170, damping: 28 };
var kp = {
  desktop: "(max-width: 1600px)",
  tablet: "(max-width: 1199px)",
  phone: "(max-width: 540px)",
};
function bt(t) {
  let {
      button: r,
      fill: i,
      fill_2: n,
      pro_color: o,
      pro_color2: f,
      theme: s,
      theme_2: C,
      pin_color: b,
      border_color: D,
    } = t,
    [l, c] = Ee(),
    _ = pt(kp.desktop),
    F = T(null),
    I = T(null),
    h = T(null),
    { viewH: k, viewW: L } = Cn();
  Le(() => {
    l.layout && ue(!1);
  }, [l.layout]);
  let g = 0.6 * k * 1.333 + 200,
    [j, d] = Ce(0),
    [R, u] = Ce(0);
  Le(() => {
    let se = F.current,
      xe = h.current;
    d(Math.round(l.layoutOffset / g - 1));
    let He = (se.offsetWidth * 0.25) / se.scrollWidth,
      ft = (se.scrollWidth - se.offsetWidth * 0.25) / se.scrollWidth,
      Vr = mn(
        l.scroll_current,
        [0, He, ft, 1],
        [0, 0, se.scrollWidth / 2, se.scrollWidth],
      );
    u(Vr), (se.scrollLeft = R);
  }, [l.layoutOffset, l.trigger_scroll_to]),
    Le(() => {
      let se = F.current;
      function xe(He) {
        !l.layout &&
          l.wheel &&
          (He.preventDefault(), (se.scrollLeft = se.scrollLeft + He.deltaY));
      }
      return (
        se.addEventListener("wheel", xe),
        () => {
          se.removeEventListener("wheel", xe);
        }
      );
    }, [l.layout, l.wheel]);
  function Q(se) {
    let xe = _
        ? l.hero_width - (L - 0.6 * k * 1.333) / 2
        : l.hero_width - (L - 0.6 * k * 1.333) / 2 + 200,
      He = _
        ? l.hero_width -
          (L - 0.6 * k * 1.333) / 2 +
          se * (0.6 * k * 1.333 + 200)
        : l.hero_width -
          (L - 0.6 * k * 1.333) / 2 +
          se * (0.6 * k * 1.333 + 200) +
          200;
    c({ scroll_to: se == 0 ? xe : He, trigger_scroll_to: Date.now() });
  }
  function G() {
    c({ scroll_to: l.layoutWidth, trigger_scroll_to: Date.now() }),
      F.current.scrollTo({ left: F.current.scrollWidth, behavior: "smooth" });
  }
  function K() {
    c({ scroll_to: 0, trigger_scroll_to: Date.now() }),
      F.current.scrollTo({ left: 0, behavior: "smooth" });
  }
  let J = {
      current: {
        filter: "blur(0px)",
        scale: 1,
        opactiy: 1,
        width: 80,
        transition: _e,
      },
      current_hide: {
        filter: "blur(8px)",
        scale: 0.5,
        opactiy: 0,
        width: 80,
        transition: { ..._e, delay: 0.1 },
      },
      default: {
        filter: "blur(0px)",
        scale: 1,
        opactiy: 1,
        width: 60,
        transition: _e,
      },
      default_hide: {
        filter: "blur(8px)",
        scale: 0.5,
        opactiy: 0,
        width: 60,
        transition: { ..._e, delay: 0.1 },
      },
    },
    [Z, E] = Ce(!1),
    [x, O] = Ce("Unknow"),
    [y, ue] = Ce(!1),
    [ye, we] = Ce(!1),
    ze = {
      min: {
        background: n,
        width: 200,
        height: 5,
        transition: { ..._e, delay: 0.2 },
      },
      max: { background: i, width: 400, height: 76, transition: _e },
      hide: { background: i, width: 0, height: 5, transition: _e },
    },
    Je = rr(sn(l.scroll_current), [0, 1], [0, 180]),
    Pe = fn(Je, { stiffness: 200, damping: 40 }),
    Ue = {
      hide: { opacity: 0, width: 2, transition: _e },
      show: { opacity: 1, width: 20, transition: { ..._e, delay: 0.8 } },
    },
    [mt, Ze] = Ce([]);
  Le(() => {
    l.type === "ALL" ? Ze(r) : Ze(r.filter((se) => se.type === l.type));
  }, [l.type]);
  let [be, ke] = ir(),
    [Ge] = Me(be.hover1, { volume: l.sound ? be.volume : 0 }),
    [qe] = Me(be.click2, { volume: l.sound ? be.volume : 0 }),
    [Xe] = Me(be.lock, { volume: l.sound ? be.volume : 0 }),
    [he] = Me(be.unlock, { volume: l.sound ? be.volume : 0 }),
    [tr, Ke] = Ce([]),
    ge = ar({
      from: { data: lr, type: "Collection" },
      select: [
        { name: "B6ayqpvjf", type: "Identifier" },
        { name: "TBCnzfSIw", type: "Identifier" },
        { name: "cdI59d3FI", type: "Identifier" },
        { name: "wsjEhoSf3", type: "Identifier" },
        { name: "NxWTLgp2C", type: "Identifier" },
        { name: "YlQuuq2WI", type: "Identifier" },
        { name: "FBN3s_gfM", type: "Identifier" },
        { name: "h3NndMT3X", type: "Identifier" },
        { name: "i7eUIM6KL", type: "Identifier" },
        { name: "OaSZjrd_f", type: "Identifier" },
        { name: "id", type: "Identifier" },
      ],
      where: {
        left: { name: "NxWTLgp2C", type: "Identifier" },
        operator: "!=",
        right: { type: "LiteralValue", value: "" },
        type: "BinaryOperation",
      },
    });
  return (
    Le(() => {
      if (l.type === "IDEA") {
        let se = ge.filter((xe) => xe.NxWTLgp2C === "yHvm0KK6A");
        Ke(se);
      } else if (l.type === "WORK") {
        let se = ge.filter((xe) => xe.NxWTLgp2C === "nLUm4zPVe");
        Ke(se);
      } else if (l.type === "PLAYGROUND") {
        let se = ge.filter((xe) => xe.NxWTLgp2C === "qCJw6bvLq");
        Ke(se);
      } else l.type === "ALL" && Ke(ge);
    }, [ge, l.type]),
    p("div", {
      style: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "column",
        gap: 8,
        padding: "10px 36px 30px 36px",
      },
      onMouseEnter: () => ue(!0),
      onMouseLeave: () => ue(!1),
      children: [
        e(lo, {
          text: x,
          initial: { opacity: 0 },
          animate: { opacity: Z ? 1 : 0 },
        }),
        e(Rp, {
          pin: l.docker,
          fill: b,
          onTap: () => {
            W.localStorage.setItem("ls_docker", String(l.docker)),
              c({ docker: !l.docker }),
              O(l.docker ? "Lock Docker: OFF" : "Lock Docker: ON"),
              l.docker ? he() : Xe();
          },
          show: y,
          onMouseEnter: () => {
            O("Lock Docker"), E(!0), Ge();
          },
          onMouseLeave: () => E(!1),
        }),
        p(a.div, {
          style: {
            ...Cp,
            justifyContent: "center",
            alignItems: "flex-start",
            position: "relative",
            width: 200,
            height: "max-content",
            background: i,
            borderRadius: 24,
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            transform: "translateZ(0)",
          },
          ref: I,
          variants: ze,
          initial: "min",
          animate: l.layout ? "hide" : l.docker || y ? "max" : "min",
          children: [
            e(a.div, {
              name: "progress",
              className: "hide-scrollbar",
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: 20,
                height: 5,
                background: o,
                borderRadius: 4,
                WebkitBorderRadius: 4,
                MozBorderRadius: 4,
                x: Pe,
                boxShadow: `0px 0px 0px 3px ${f}`,
              },
              variants: Ue,
              initial: "show",
              animate: l.docker || y ? "hide" : "show",
            }),
            e("div", {
              name: "center",
              className: "hide-scrollbar",
              style: { display: "flex", justifyContent: "center" },
              children: e("div", {
                name: "Group",
                className: "hide-scrollbar",
                style: {
                  display: "flex",
                  justifyContent: "flex-start",
                  width: 400,
                  padding: 8,
                  height: "max-content",
                  overflow: "scroll",
                  borderRadius: 17,
                },
                ref: F,
                children: p(a.div, {
                  style: {
                    display: "flex",
                    justifyContent: "flex-start",
                    height: "max-content",
                    width: "max-content",
                    gap: 6,
                  },
                  ref: h,
                  children: [
                    e(a.div, {
                      style: { flexShrink: 0 },
                      onMouseEnter: () => {
                        O("Go to the end."), E(!0), Ge();
                      },
                      onMouseLeave: () => E(!1),
                      variants: J,
                      initial: "default_hide",
                      animate: l.docker || y ? "default" : "default_hide",
                      children: e(so, {
                        click: () => {
                          G(), qe();
                        },
                      }),
                    }),
                    e(Fe, {
                      initial: !1,
                      mode: "popLayout",
                      children: tr.map(
                        ({ B6ayqpvjf: se, YlQuuq2WI: xe, id: He }, ft) =>
                          e(
                            a.div,
                            {
                              style: { flexShrink: 0 },
                              layout: !0,
                              initial: {
                                filter: "blur(8px)",
                                scale: 0.5,
                                opacity: 0,
                              },
                              animate: {
                                filter: "blur(0px)",
                                scale: 1,
                                opacity: 1,
                                transition: { ..._e, delay: 0.3 },
                              },
                              exit: {
                                filter: "blur(8px)",
                                scale: 0.5,
                                opacity: 0,
                                transition: _e,
                              },
                              onTap: () => qe(),
                              children: e(a.div, {
                                style: {
                                  width: 60,
                                  height: 60,
                                  borderRadius: 17,
                                  overflow: "hidden",
                                },
                                onMouseEnter: () => {
                                  O(`${se}`), E(!0), Ge();
                                },
                                onMouseLeave: () => E(!1),
                                whileTap: { scale: 0.95 },
                                whileHover: { scale: 1.1 },
                                variants: J,
                                initial: "default",
                                animate:
                                  j == ft
                                    ? l.docker || y
                                      ? "current"
                                      : "current_hide"
                                    : l.docker || y
                                      ? "default"
                                      : "default_hide",
                                children: e(Ot, {
                                  image: xe,
                                  border_color: D,
                                  onTap: () => Q(ft),
                                }),
                              }),
                            },
                            `scroll${se}`,
                          ),
                      ),
                    }),
                    e(a.div, {
                      style: { flexShrink: 0 },
                      onMouseEnter: () => {
                        O("Go to the front."), E(!0), Ge();
                      },
                      onMouseLeave: () => E(!1),
                      variants: J,
                      initial: "default_hide",
                      animate: l.docker || y ? "default" : "default_hide",
                      children: e(oo, {
                        click: () => {
                          K(), qe();
                        },
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
var Cp = { height: "100%", display: "flex", overflow: "hidden" };
bt.defaultProps = {
  button: [
    {
      key: 0,
      image:
        "https://images.unsplash.com/photo-1692606742905-c4bd330534c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "1",
      type: "project",
    },
    {
      key: 1,
      image:
        "https://images.unsplash.com/photo-1657142072334-5a88134f1503?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=80",
      title: "2",
      type: "idea",
    },
    {
      key: 2,
      image:
        "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      title: "3",
      type: "project",
    },
    {
      key: 3,
      image:
        "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      title: "1",
      type: "idea",
    },
    {
      key: 4,
      image:
        "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      title: "1",
      type: "project",
    },
    {
      key: 5,
      image:
        "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      title: "1",
      type: "idea",
    },
    {
      key: 6,
      image:
        "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      title: "1",
      type: "project",
    },
  ],
  fill: "#dddddd",
  fill_2: "#cccccc",
  pro_color: "#ffffff",
  pro_color2: "#000000",
  theme: "rgba(255,255,255,1)",
  theme_2: "rgba(255,255,255,0)",
};
P(bt, {
  button: {
    type: m.Array,
    title: "Buttons",
    control: {
      type: m.Object,
      title: "Button",
      controls: {
        key: { type: m.Number, title: "Key", defaultValue: 0 },
        image: {
          type: m.String,
          title: "Image",
          defaultValue:
            "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
        },
        title: { type: m.String, title: "Title", defaultValue: "Hover Title" },
        type: {
          type: m.Enum,
          title: "Type",
          options: ["project", "idea"],
          defaultValue: "project",
        },
      },
      defaultValue: { buttonText: "New button", buttonColor: "#fc0" },
    },
  },
  fill: { type: m.Color, title: "Fill" },
  fill_2: { type: m.Color, title: "Fill_2" },
  pro_color: { type: m.Color, title: "Progress" },
  pro_color2: { type: m.Color, title: "Progress_2" },
  theme: { type: m.Color, title: "Theme" },
  theme_2: { type: m.Color, title: "Theme_2" },
  pin_color: { type: m.Color, title: "Pin" },
  border_color: { type: m.Color, title: "Border" },
});
function Rp({
  show: t,
  pin: r,
  fill: i,
  onTap: n,
  onMouseEnter: o,
  onMouseLeave: f,
}) {
  let s = {
    show: { scale: 1, opacity: 1, transition: { ..._e, delay: 0.4 } },
    hide: { scale: 0.5, opacity: 0, transition: _e },
  };
  return e(a.div, {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 58,
      right: 6,
      width: 20,
      height: 20,
      borderRadius: 42,
      border: `2px solid ${i}`,
    },
    variants: s,
    initial: "hide",
    animate: t ? "show" : "hide",
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
    onTap: n,
    onMouseEnter: o,
    onMouseLeave: f,
    children: e(a.div, {
      style: { width: 12, height: 12, background: i, borderRadius: 20 },
      initial: { opacity: 0, scale: 1.3 },
      animate: { opacity: r ? 1 : 0, scale: r ? 1 : 1.3 },
    }),
  });
}
function kt(t) {
  let {
      title: r,
      options: i,
      def_color: n,
      act_color: o,
      tit_color0: f,
      tit_color1: s,
      bg_color1: C,
      bg_color0: b,
      font: D,
    } = t,
    [l, c] = Ee(),
    [_, F] = ir(),
    [I] = Me(_.click2, { volume: l.sound ? _.volume : 0 }),
    [h] = Me(_.swoosh, { volume: l.sound ? _.volume : 0 });
  function k() {
    l.sound && I();
  }
  function L() {
    if (l.sound) {
      I();
      let R = setTimeout(() => {
        h();
      }, 880);
      return () => clearTimeout(R);
    }
  }
  let g = [
      {
        label: "ALL",
        click: () => {
          c({ type: "ALL" }), k();
        },
      },
      {
        label: "WORK",
        click: () => {
          c({ type: "WORK" }), L();
        },
      },
      {
        label: "IDEA",
        click: () => {
          c({ type: "IDEA" }), L();
        },
      },
      {
        label: "PLAYGROUND",
        click: () => {
          c({ type: "PLAYGROUND" }), L();
        },
      },
    ],
    [j, d] = Ce("ALL");
  return e("div", {
    style: { ..._p, borderRadius: 24, backgroundColor: b, overflow: "hidden" },
    children: e("div", {
      style: {
        display: "flex",
        width: "max-content",
        height: "100%",
        padding: 6,
        justifyContent: "flex-start",
        alignItems: "center",
      },
      children: g.map(({ label: R, click: u }, Q) =>
        p(
          a.div,
          {
            style: {
              position: "relative",
              width: "max-content",
              display: "flex",
              justifyContent: "center",
              padding: "6px 12px",
              whiteSpace: "pre",
              color: n,
              ...D,
              zIndex: 1,
              overflow: "visible",
            },
            whileHover: { color: o },
            initial: { color: l.type === R ? o : n },
            animate: { color: l.type === R ? o : n },
            onTap: () => {
              d(R);
            },
            onClick: u,
            children: [
              R,
              l.type === R &&
                e(a.div, {
                  layoutId: "contents",
                  style: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: 24,
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    backgroundColor: C,
                  },
                }),
            ],
          },
          R,
        ),
      ),
    }),
  });
}
var _p = {
  width: "max-content",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  gap: 12,
};
kt.defaultProps = {
  title: "Property",
  options: [{ label: "Red" }, { label: "Purple" }, { label: "Pink" }],
  def_color: "#999999",
  act_color: "#0099FF",
  tit_color0: "#666666",
  tit_color1: "#666666",
  bg_color1: "#FFFFFF",
  bg_color0: "#F3F3F3",
};
P(kt, {
  title: { type: m.String, title: "Title" },
  options: {
    type: m.Array,
    title: "Options",
    description: "\u5EFA\u8BAE\u6700\u591A3\u4E2A\u5206\u6BB5",
    control: {
      type: m.Object,
      title: "Button object",
      controls: {
        label: { type: m.String, title: "Label", placeholder: "Option" },
        click: { type: m.EventHandler },
      },
      defaultValue: { label: "Target" },
    },
  },
  def_color: { type: m.Color },
  act_color: { type: m.Color },
  tit_color0: { type: m.Color },
  tit_color1: { type: m.Color },
  bg_color1: { type: m.Color },
  bg_color0: { type: m.Color },
  font: {
    type: m.Font,
    controls: "extended",
    displayFontSize: !0,
    displayTextAlignment: !1,
    defaultFontType: "sans-serif",
    defaultValue: { fontSize: 16, letterSpacing: "0em" },
  },
});
var Dp = N(Br),
  Ha = nt(oe),
  Lp = N(Zr),
  Ip = pe(Kn(Zr), di),
  Fp = Un(a.div),
  Np = Xn(a.div),
  Dr = Ne(a.div),
  mo = Se(a.div),
  Ba = Pn(a.div),
  Sp = N(Kr),
  jp = N(Ar),
  Gp = N(la),
  Tp = N($r),
  Vp = N(Yr),
  Ep = N(ca),
  zp = pe(zi(ca), Vi),
  Pp = N(Wr),
  Up = pe(Pi(Wr), ii),
  Zt = Ne(te),
  Kt = Se(te),
  qp = N(Qr),
  Hp = pe(Xr(Qr), mi),
  Bp = N(fa),
  Xp = pe(Xr(fa), Gi),
  Mp = N(Jr),
  Ap = pe(Qn(Jr), fi),
  Yp = N(na),
  Op = pe(Jn(na), Di),
  Wp = N(da),
  Qp = pe(ti(da), Ti),
  Jp = N(ia),
  Zp = pe($n(ia), Li),
  Kp = N(aa),
  $p = pe(ei(aa), _i),
  e0 = N(oa),
  t0 = pe(ri(oa), Ii),
  r0 = Wn(te),
  a0 = Ei(a.div),
  fo = nt(a.div),
  n0 = N(sa),
  co = qn(a.div),
  i0 = N(ma),
  o0 = pe(li(ma), ji),
  s0 = si(a.div),
  l0 = Sn(a.div),
  m0 = N(vt),
  Xa = Vn(a.div),
  f0 = N(Mt),
  Ma = En(a.div),
  d0 = N(Or),
  Aa = pe(zn(Or), ni),
  c0 = sr(a.div),
  p0 = N(Oe),
  h0 = Nn(a.div),
  u0 = Fn(a.div),
  y0 = N(Cr),
  g0 = pe(Hr(Cr), Ea),
  x0 = N(_r),
  v0 = pe(Hr(_r), Pa),
  w0 = N(bt),
  b0 = In(bt),
  k0 = Mn(a.div),
  C0 = N(kt),
  R0 = Hn(kt),
  _0 = Bn(a.div),
  D0 = N(ea),
  L0 = Rn(a.div),
  I0 = nt(Tn(a.div)),
  F0 = nt(Gn(a.div)),
  N0 = N(Re),
  S0 = {
    dETHUdG53: "(min-width: 810px) and (max-width: 1199px)",
    rG1ySt2KS: "(min-width: 1200px) and (max-width: 1599px)",
    wdvlRRgij: "(max-width: 809px)",
    WQLkyLRf1: "(min-width: 1600px)",
  },
  $t = () => typeof document < "u",
  po = "framer-nG0pR",
  j0 = {
    dETHUdG53: "framer-v-1y1tbw8",
    rG1ySt2KS: "framer-v-1nxy63x",
    wdvlRRgij: "framer-v-zn6nx8",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  je = { damping: 12, delay: 0, mass: 0.1, stiffness: 400, type: "spring" },
  G0 = { damping: 30, delay: 0.4, mass: 1, stiffness: 200, type: "spring" },
  Ya = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: G0,
    x: 0,
    y: 0,
  },
  Oa = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -20,
  },
  Ct = { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
  Wa = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ct,
    x: 0,
    y: 0,
  },
  T0 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ct,
    x: 0,
    y: 0,
  },
  V0 = {
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
  Co = { damping: 14, delay: 0.12, mass: 1, stiffness: 140, type: "spring" },
  Lr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Co,
    x: 0,
    y: 100,
  },
  E0 = { damping: 14, delay: 0.3, mass: 1, stiffness: 140, type: "spring" },
  Ir = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: E0,
    x: 0,
    y: 0,
  },
  Qe = {
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
  Ro = { damping: 14, delay: 0.08, mass: 1, stiffness: 140, type: "spring" },
  ho = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ro,
    x: 0,
    y: 100,
  },
  z0 = { damping: 14, delay: 0.34, mass: 1, stiffness: 140, type: "spring" },
  Qa = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: z0,
    x: 0,
    y: 0,
  },
  an = { damping: 14, delay: 0.04, mass: 1, stiffness: 140, type: "spring" },
  uo = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: an,
    x: 0,
    y: 100,
  },
  P0 = { damping: 14, delay: 0.38, mass: 1, stiffness: 140, type: "spring" },
  Ja = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: P0,
    x: 0,
    y: 0,
  },
  U0 = { damping: 14, delay: 0.16, mass: 1, stiffness: 140, type: "spring" },
  q0 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: U0,
    x: 0,
    y: 95,
  },
  Fr = {
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
  H0 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Co,
    x: 0,
    y: 96,
  },
  B0 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ro,
    x: 0,
    y: 96,
  },
  X0 = { damping: 14, delay: 0.42, mass: 1, stiffness: 140, type: "spring" },
  M0 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: X0,
    x: 0,
    y: 0,
  },
  A0 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: an,
    x: 0,
    y: 96,
  },
  Y0 = { damping: 14, delay: 0.46, mass: 1, stiffness: 140, type: "spring" },
  O0 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Y0,
    x: 0,
    y: 0,
  },
  W0 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: an,
    x: 0,
    y: 86,
  },
  Q0 = { damping: 14, delay: 0.5, mass: 1, stiffness: 140, type: "spring" },
  J0 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Q0,
    x: 0,
    y: 0,
  },
  Z0 = {
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
  lt = (t, r) => `translateX(-50%) ${r}`,
  K0 = { damping: 28, delay: 0.06, mass: 1, stiffness: 178, type: "spring" },
  yo = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transition: K0,
    x: 0,
    y: -40,
  },
  $0 = { damping: 28, delay: 0.34, mass: 1, stiffness: 178, type: "spring" },
  go = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: $0,
    x: 0,
    y: 0,
  },
  er = {
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
  e1 = { damping: 28, delay: 0.09, mass: 1, stiffness: 178, type: "spring" },
  xo = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transition: e1,
    x: 0,
    y: -40,
  },
  t1 = { damping: 28, delay: 0.31, mass: 1, stiffness: 178, type: "spring" },
  vo = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: t1,
    x: 0,
    y: 0,
  },
  r1 = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transition: Ct,
    x: 0,
    y: -20,
  },
  _o = { damping: 28, delay: 0.4, mass: 1, stiffness: 178, type: "spring" },
  a1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: _o,
    x: 0,
    y: 0,
  },
  n1 = {
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
  i1 = { damping: 28, delay: 0, mass: 1, stiffness: 170, type: "spring" },
  o1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transition: i1,
    x: 0,
    y: 0,
  },
  s1 = { damping: 28, delay: 0.4, mass: 1, stiffness: 170, type: "spring" },
  Nr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: s1,
    x: 0,
    y: 0,
  },
  Sr = {
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
  l1 = { damping: 28, delay: 0.03, mass: 1, stiffness: 178, type: "spring" },
  m1 = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transition: l1,
    x: 0,
    y: -40,
  },
  f1 = { damping: 28, delay: 0.37, mass: 1, stiffness: 178, type: "spring" },
  d1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: f1,
    x: 0,
    y: 0,
  },
  c1 = {
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
  p1 = { damping: 28, delay: 0.05, mass: 1, stiffness: 170, type: "spring" },
  h1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transition: p1,
    x: 0,
    y: 0,
  },
  u1 = { damping: 28, delay: 0.3, mass: 1, stiffness: 170, type: "spring" },
  y1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: u1,
    x: 0,
    y: 0,
  },
  g1 = { damping: 28, delay: 0.1, mass: 1, stiffness: 170, type: "spring" },
  x1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transition: g1,
    x: 0,
    y: 0,
  },
  v1 = { damping: 28, delay: 0.35, mass: 1, stiffness: 170, type: "spring" },
  w1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: v1,
    x: 0,
    y: 0,
  },
  b1 = { damping: 28, delay: 0.15, mass: 1, stiffness: 170, type: "spring" },
  k1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transition: b1,
    x: 0,
    y: 0,
  },
  C1 = { damping: 28, delay: 0.12, mass: 1, stiffness: 178, type: "spring" },
  R1 = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transition: C1,
    x: 0,
    y: -40,
  },
  _1 = { damping: 28, delay: 0.28, mass: 1, stiffness: 178, type: "spring" },
  D1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: _1,
    x: 0,
    y: 0,
  },
  Do = { damping: 30, delay: 0, mass: 1, stiffness: 300, type: "spring" },
  L1 = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Do,
    x: 0,
    y: 0,
  },
  I1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Do,
    x: 0,
    y: 0,
  },
  F1 = {
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
  jr = ({ children: t, blockDocumentScrolling: r, enabled: i = !0 }) => {
    let [n, o] = wn({ blockDocumentScrolling: r });
    return t({
      hide: () => o(!1),
      show: () => o(!0),
      toggle: () => o(!n),
      visible: i && n,
    });
  },
  Za = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.2,
    skewX: 0,
    skewY: 0,
    transition: Ct,
    x: 0,
    y: 1300,
  },
  N1 = { damping: 28, delay: 0.1, mass: 1, stiffness: 178, type: "spring" },
  Ka = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: N1,
    x: 0,
    y: 0,
  },
  $a = {
    opacity: 1,
    rotate: 1,
    rotateX: 0,
    rotateY: 0,
    scale: 1.2,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 1300,
  },
  en = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0,
    skewX: 0,
    skewY: 0,
    transition: Ct,
    x: 0,
    y: 0,
  },
  tn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: _o,
    x: 0,
    y: 0,
  },
  rn = {
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
  S1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.2,
    skewX: 0,
    skewY: 0,
    transition: Ct,
    x: 0,
    y: 1e3,
  },
  j1 = {
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
  G1 = {
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
  T1 = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 20,
  },
  V1 = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  wo = {
    opacity: 0.5,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: V1,
  },
  Lo = { delay: 0, duration: 0.2, ease: [0.12, 0.23, 0.5, 1], type: "tween" },
  E1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Lo,
    x: -40,
  },
  bo = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  z1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Lo,
    x: 40,
  },
  Gr = cr(),
  P1 = {
    Desktop: "rG1ySt2KS",
    Monitor: "WQLkyLRf1",
    Phone: "wdvlRRgij",
    Tablet: "dETHUdG53",
  },
  U1 = ({ height: t, id: r, width: i, ...n }) => {
    var o, f;
    return {
      ...n,
      variant:
        (f = (o = P1[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && f !== void 0
          ? f
          : "WQLkyLRf1",
    };
  },
  ko = {
    alignment: "start",
    component: Re,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: je,
    variant: "cc6TANFjz",
  },
  q1 = {
    alignment: "start",
    component: Re,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: je,
    variant: "qrXesx9n1",
  },
  H1 = {
    alignment: "start",
    component: Re,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: je,
    variant: "lOKtvR8eI",
  },
  B1 = {
    alignment: "start",
    component: Re,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: je,
    variant: "zTFDDlNjh",
  },
  X1 = {
    alignment: "start",
    component: Re,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: je,
    variant: "TogF5EtvT",
  },
  M1 = {
    alignment: "start",
    component: Re,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: je,
    variant: "RLajb6V4g",
  },
  A1 = {
    alignment: "start",
    component: Re,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: je,
    variant: "M1BweyOQ6",
  },
  Y1 = { component: Re, transition: je, variant: "M1BweyOQ6" },
  O1 = { component: Re, transition: je, variant: "cc6TANFjz" },
  W1 = {
    alignment: "start",
    component: Re,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: je,
    variant: "X1zclGT3K",
  },
  Q1 = {
    alignment: "start",
    component: Re,
    offset: { x: 12, y: 16 },
    placement: "bottom",
    transition: je,
    variant: "jiPF_ovG2",
  },
  J1 = q(function (t, r) {
    let { activeLocale: i, setLocale: n } = B(),
      {
        style: o,
        className: f,
        layoutId: s,
        variant: C,
        xIdMDR5tj: b,
        ...D
      } = U1(t);
    Le(() => {
      let x = cr(void 0, i);
      if (x.robots) {
        let O = document.querySelector('meta[name="robots"]');
        O
          ? O.setAttribute("content", x.robots)
          : ((O = document.createElement("meta")),
            O.setAttribute("name", "robots"),
            O.setAttribute("content", x.robots),
            document.head.appendChild(O));
      }
    }, [void 0, i]),
      on(() => {
        let x = cr(void 0, i);
        if (((document.title = x.title || ""), x.viewport)) {
          var O;
          (O = document.querySelector('meta[name="viewport"]')) === null ||
            O === void 0 ||
            O.setAttribute("content", x.viewport);
        }
        let y = x.bodyClassName;
        if (y) {
          let ue = document.body;
          ue.classList.forEach(
            (ye) => ye.startsWith("framer-body-") && ue.classList.remove(ye),
          ),
            ue.classList.add(`${x.bodyClassName}-framer-nG0pR`);
        }
        return () => {
          y &&
            document.body.classList.remove(`${x.bodyClassName}-framer-nG0pR`);
        };
      }, [void 0, i]);
    let [l, c] = vn(C, S0, !1),
      _ = void 0,
      { activeVariantCallback: F, delay: I } = le(void 0),
      h = ({ overlay: x, paginationInfo: O }) =>
        F(async (...y) => {
          x.toggle();
        }),
      k = ({ overlay: x, paginationInfo: O }) =>
        F(async (...y) => {
          x.hide();
        }),
      L = ({ overlay: x, paginationInfo: O }) =>
        F(async (...y) => {
          x.toggle();
        }),
      g = ({ overlay: x, paginationInfo: O }) =>
        F(async (...y) => {
          x.hide();
        }),
      j = ({ overlay: x, paginationInfo: O }) =>
        F(async (...y) => {
          x.toggle();
        }),
      d = ({ overlay: x, paginationInfo: O }) =>
        F(async (...y) => {
          x.toggle();
        }),
      R = T(null),
      u = () => ($t() ? l !== "wdvlRRgij" : !0),
      Q = () => !$t() || l === "wdvlRRgij",
      G = () => ($t() ? !["dETHUdG53", "wdvlRRgij"].includes(l) : !0),
      K = () => !$t() || l === "dETHUdG53",
      J = () => !!(!$t() || ["dETHUdG53", "wdvlRRgij"].includes(l)),
      Z = H(),
      E = [yt];
    return (
      un({
        "179ov0m": A1,
        "1eji443": { ...ko, variant: "KL7EsyPpV" },
        "1f8gcp2": M1,
        "1gvcplb": O1,
        "1njbiag": ko,
        "1s5udjy": H1,
        "1wwll4i": Y1,
        "1xujo3j": X1,
        "9kzsde": B1,
        emi50q: q1,
        k46mno: W1,
        s56f5m: Q1,
      }),
      e(yn.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: j0 },
        children: p(z, {
          id: s ?? Z,
          children: [
            p(a.div, {
              ...D,
              className: V(po, ...E, "framer-72rtr7", f),
              "data-framer-cursor": "1njbiag",
              ref: r ?? R,
              style: { ...o },
              children: [
                e("div", {
                  className: "framer-15zyjyk",
                  "data-framer-name": "Logo",
                  name: "Logo",
                  children: e("div", {
                    className: "framer-qw2ikh",
                    children: e(ie, {
                      breakpoint: l,
                      overrides: { dETHUdG53: { y: 23 }, wdvlRRgij: { y: 7 } },
                      children: e(v, {
                        height: 42,
                        y: 40,
                        children: e(Ha, {
                          animate: Ya,
                          className: "framer-1n15c9x-container",
                          "data-framer-appear-id": "1n15c9x",
                          initial: Oa,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: e(ie, {
                            breakpoint: l,
                            overrides: { wdvlRRgij: { variant: "Zi8PaJmMF" } },
                            children: e(Br, {
                              a3q1uTWiE: "Jay Ji",
                              height: "100%",
                              id: "vIK1YoIpR",
                              layoutId: "vIK1YoIpR",
                              variant: "NQzEd4b81",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                e(fo, {
                  animate: Ya,
                  className: "framer-1pi5rar",
                  "data-framer-appear-id": "1pi5rar",
                  "data-framer-name": "Control",
                  initial: Oa,
                  name: "Control",
                  optimized: !0,
                  style: { transformPerspective: 1200 },
                  children: e(jr, {
                    children: (x) =>
                      e(Ie, {
                        children: e(ie, {
                          breakpoint: l,
                          overrides: {
                            dETHUdG53: { y: 23 },
                            wdvlRRgij: { y: 7 },
                          },
                          children: e(v, {
                            height: 42,
                            y: 40,
                            children: p(oe, {
                              className: "framer-165pb4l-container",
                              id: "165pb4l",
                              children: [
                                e(ie, {
                                  breakpoint: l,
                                  overrides: {
                                    dETHUdG53: {
                                      IDjhS4IKl: !1,
                                      IgMJMP6ld: !1,
                                      Y6c4BQxZw: !1,
                                    },
                                    wdvlRRgij: {
                                      D_n_dMzCO: !0,
                                      IDjhS4IKl: !1,
                                      IgMJMP6ld: !1,
                                      Y6c4BQxZw: !1,
                                    },
                                  },
                                  children: e(Ip, {
                                    bW5yPdm2I: h({ overlay: x }),
                                    bzjewZMVz: "1s5udjy",
                                    D_n_dMzCO: !1,
                                    height: "100%",
                                    id: "L3LXRNAYR",
                                    IDjhS4IKl: !0,
                                    IgMJMP6ld: !0,
                                    layoutId: "L3LXRNAYR",
                                    qRScD7sgw: "emi50q",
                                    uh2rKEoGW: "9kzsde",
                                    variant: "XwPo9qGC4",
                                    VscZCNiuc: "1xujo3j",
                                    width: "100%",
                                    Y6c4BQxZw: !0,
                                  }),
                                }),
                                e(Fe, {
                                  children:
                                    x.visible &&
                                    e(Ie, {
                                      children: _t(
                                        p(w, {
                                          children: [
                                            e(
                                              a.div,
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
                                                className: "framer-yvobuu",
                                                "data-framer-portal-id":
                                                  "165pb4l",
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
                                                onTap: () => x.hide(),
                                              },
                                              "vZaRACvWT",
                                            ),
                                            e(Np, {
                                              className: "framer-pow8r5",
                                              "data-framer-name": "ClickLayer",
                                              "data-framer-portal-id":
                                                "165pb4l",
                                              name: "ClickLayer",
                                              onTap: k({ overlay: x }),
                                              children: e(Fp, {
                                                className: "framer-12mwnfa",
                                                "data-framer-name":
                                                  "Transition",
                                                name: "Transition",
                                                children: e(a.div, {
                                                  animate: T0,
                                                  className: "framer-18cxbxj",
                                                  "data-framer-name":
                                                    "Backdrop",
                                                  exit: Wa,
                                                  initial: V0,
                                                  name: "Backdrop",
                                                }),
                                              }),
                                            }),
                                            u() &&
                                              p(Ba, {
                                                className:
                                                  "framer-13vfuvn hidden-zn6nx8",
                                                "data-framer-name": "Hello",
                                                "data-framer-portal-id":
                                                  "165pb4l",
                                                name: "Hello",
                                                children: [
                                                  e(Dr, {
                                                    className: "framer-1uyt8r3",
                                                    children: e(ie, {
                                                      breakpoint: l,
                                                      overrides: {
                                                        dETHUdG53: {
                                                          children: e(w, {
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
                                                        rG1ySt2KS: {
                                                          children: e(w, {
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
                                                      children: e(te, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        animate: Ir,
                                                        children: e(w, {
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
                                                          "framer-fmmb8o",
                                                        exit: Lr,
                                                        fonts: [
                                                          "FS;Cabinet Grotesk-bold",
                                                        ],
                                                        initial: Qe,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        verticalAlignment:
                                                          "top",
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                  }),
                                                  e(Dr, {
                                                    className: "framer-w3hrdp",
                                                    children: e(ie, {
                                                      breakpoint: l,
                                                      overrides: {
                                                        dETHUdG53: {
                                                          children: e(w, {
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
                                                        rG1ySt2KS: {
                                                          children: e(w, {
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
                                                      children: e(te, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        animate: Qa,
                                                        children: e(w, {
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
                                                          "framer-91gdj2",
                                                        exit: ho,
                                                        fonts: [
                                                          "FS;Cabinet Grotesk-bold",
                                                        ],
                                                        initial: Qe,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        verticalAlignment:
                                                          "top",
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                  }),
                                                  e(mo, {
                                                    className: "framer-1iddyy1",
                                                    "data-framer-name": "CN",
                                                    name: "CN",
                                                    children: e(ie, {
                                                      breakpoint: l,
                                                      overrides: {
                                                        dETHUdG53: {
                                                          children: e(w, {
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
                                                        rG1ySt2KS: {
                                                          children: e(w, {
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
                                                      children: e(te, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        animate: Ir,
                                                        children: e(w, {
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
                                                          "framer-5drs9m",
                                                        exit: Lr,
                                                        fonts: [
                                                          "FS;Cabinet Grotesk-bold",
                                                        ],
                                                        initial: Qe,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        verticalAlignment:
                                                          "top",
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                  }),
                                                  e(a.div, {
                                                    className: "framer-bbk3ui",
                                                    children: e(ie, {
                                                      breakpoint: l,
                                                      overrides: {
                                                        dETHUdG53: {
                                                          background: {
                                                            alt: "",
                                                            fit: "fill",
                                                            intrinsicHeight: 163.5,
                                                            intrinsicWidth: 165,
                                                            loading: nr(820),
                                                            pixelHeight: 327,
                                                            pixelWidth: 330,
                                                            src: "https://framerusercontent.com/images/ejvAKzlSSMYF9H4yjp7fsPFKEM.png",
                                                          },
                                                        },
                                                        rG1ySt2KS: {
                                                          background: {
                                                            alt: "",
                                                            fit: "fill",
                                                            intrinsicHeight: 163.5,
                                                            intrinsicWidth: 165,
                                                            loading: nr(800),
                                                            pixelHeight: 327,
                                                            pixelWidth: 330,
                                                            src: "https://framerusercontent.com/images/ejvAKzlSSMYF9H4yjp7fsPFKEM.png",
                                                          },
                                                        },
                                                      },
                                                      children: e(Lt, {
                                                        animate: Ja,
                                                        background: {
                                                          alt: "",
                                                          fit: "fill",
                                                          intrinsicHeight: 163.5,
                                                          intrinsicWidth: 165,
                                                          loading: nr(774),
                                                          pixelHeight: 327,
                                                          pixelWidth: 330,
                                                          src: "https://framerusercontent.com/images/ejvAKzlSSMYF9H4yjp7fsPFKEM.png",
                                                        },
                                                        className:
                                                          "framer-7r3757",
                                                        "data-framer-name":
                                                          "hand",
                                                        exit: uo,
                                                        initial: Qe,
                                                        name: "hand",
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            p(Ba, {
                                              className: "framer-1y8y89e",
                                              "data-framer-name": "Bottom",
                                              "data-framer-portal-id":
                                                "165pb4l",
                                              name: "Bottom",
                                              children: [
                                                p(a.div, {
                                                  className: "framer-13k41d1",
                                                  children: [
                                                    e(ie, {
                                                      breakpoint: l,
                                                      overrides: {
                                                        wdvlRRgij: {
                                                          y: void 0,
                                                        },
                                                      },
                                                      children: e(v, {
                                                        height: 54,
                                                        width: "54px",
                                                        y: 906,
                                                        children: e(oe, {
                                                          animate: Qa,
                                                          className:
                                                            "framer-ny3yh4-container",
                                                          exit: q0,
                                                          initial: Fr,
                                                          style: {
                                                            transformPerspective: 1200,
                                                          },
                                                          children: e(ie, {
                                                            breakpoint: l,
                                                            overrides: {
                                                              wdvlRRgij: {
                                                                variant:
                                                                  "hop0ZCAyo",
                                                              },
                                                            },
                                                            children: e(Kr, {
                                                              height: "100%",
                                                              id: "h1mfaZAgJ",
                                                              layoutId:
                                                                "h1mfaZAgJ",
                                                              style: {
                                                                height: "100%",
                                                                width: "100%",
                                                              },
                                                              variant:
                                                                "llDAhtHF4",
                                                              width: "100%",
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    e(ie, {
                                                      breakpoint: l,
                                                      overrides: {
                                                        wdvlRRgij: {
                                                          y: void 0,
                                                        },
                                                      },
                                                      children: e(v, {
                                                        height: 54,
                                                        width: "54px",
                                                        y: 906,
                                                        children: e(oe, {
                                                          animate: Ja,
                                                          className:
                                                            "framer-csyor9-container",
                                                          exit: H0,
                                                          initial: Fr,
                                                          style: {
                                                            transformPerspective: 1200,
                                                          },
                                                          children: e(Ar, {
                                                            height: "100%",
                                                            id: "FzgUcR8dz",
                                                            layoutId:
                                                              "FzgUcR8dz",
                                                            style: {
                                                              height: "100%",
                                                              width: "100%",
                                                            },
                                                            variant:
                                                              "YRapQNpGe",
                                                            width: "100%",
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    e(ie, {
                                                      breakpoint: l,
                                                      overrides: {
                                                        wdvlRRgij: {
                                                          y: void 0,
                                                        },
                                                      },
                                                      children: e(v, {
                                                        height: 54,
                                                        width: "54px",
                                                        y: 906,
                                                        children: e(oe, {
                                                          animate: M0,
                                                          className:
                                                            "framer-13svxd-container",
                                                          exit: B0,
                                                          initial: Fr,
                                                          style: {
                                                            transformPerspective: 1200,
                                                          },
                                                          children: e(ie, {
                                                            breakpoint: l,
                                                            overrides: {
                                                              wdvlRRgij: {
                                                                variant:
                                                                  "tLAPjJAhe",
                                                              },
                                                            },
                                                            children: e(la, {
                                                              height: "100%",
                                                              id: "NkBZKejcQ",
                                                              layoutId:
                                                                "NkBZKejcQ",
                                                              style: {
                                                                height: "100%",
                                                                width: "100%",
                                                              },
                                                              variant:
                                                                "ecyK5mEKa",
                                                              width: "100%",
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    e(ie, {
                                                      breakpoint: l,
                                                      overrides: {
                                                        wdvlRRgij: {
                                                          y: void 0,
                                                        },
                                                      },
                                                      children: e(v, {
                                                        height: 54,
                                                        width: "54px",
                                                        y: 906,
                                                        children: e(oe, {
                                                          animate: O0,
                                                          className:
                                                            "framer-1f9a22y-container",
                                                          exit: A0,
                                                          initial: Fr,
                                                          style: {
                                                            transformPerspective: 1200,
                                                          },
                                                          children: e(ie, {
                                                            breakpoint: l,
                                                            overrides: {
                                                              wdvlRRgij: {
                                                                variant:
                                                                  "mxi8gZhg7",
                                                              },
                                                            },
                                                            children: e($r, {
                                                              height: "100%",
                                                              id: "XkObNYFDI",
                                                              layoutId:
                                                                "XkObNYFDI",
                                                              style: {
                                                                height: "100%",
                                                                width: "100%",
                                                              },
                                                              variant:
                                                                "QkHTEsfZ8",
                                                              width: "100%",
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                e(a.div, {
                                                  className: "framer-1r8xyd6",
                                                  children: e(ie, {
                                                    breakpoint: l,
                                                    overrides: {
                                                      wdvlRRgij: { y: void 0 },
                                                    },
                                                    children: e(v, {
                                                      height: 42,
                                                      y: 918,
                                                      children: e(oe, {
                                                        animate: J0,
                                                        className:
                                                          "framer-1eyn2wq-container",
                                                        exit: W0,
                                                        initial: Z0,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        children: e(Yr, {
                                                          height: "100%",
                                                          id: "YkbRbqXGy",
                                                          layoutId: "YkbRbqXGy",
                                                          width: "100%",
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                Q() &&
                                                  p(a.div, {
                                                    className:
                                                      "framer-18obioi hidden-72rtr7 hidden-1nxy63x hidden-1y1tbw8",
                                                    "data-framer-name": "Title",
                                                    name: "Title",
                                                    children: [
                                                      e(Dr, {
                                                        className:
                                                          "framer-not0b7",
                                                        children: e(te, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          animate: Ir,
                                                          children: e(w, {
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
                                                            "framer-io4qgw",
                                                          exit: Lr,
                                                          fonts: [
                                                            "FS;Cabinet Grotesk-bold",
                                                          ],
                                                          initial: Qe,
                                                          style: {
                                                            transformPerspective: 1200,
                                                          },
                                                          verticalAlignment:
                                                            "top",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(mo, {
                                                        className:
                                                          "framer-177gt34",
                                                        children: e(te, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          animate: Ir,
                                                          children: e(w, {
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
                                                            "framer-j8via3",
                                                          exit: Lr,
                                                          fonts: [
                                                            "FS;Cabinet Grotesk-bold",
                                                          ],
                                                          initial: Qe,
                                                          style: {
                                                            transformPerspective: 1200,
                                                          },
                                                          verticalAlignment:
                                                            "top",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(Dr, {
                                                        className:
                                                          "framer-z9ukaa",
                                                        children: e(te, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          animate: Qa,
                                                          children: e(w, {
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
                                                            "framer-lq18qm",
                                                          exit: ho,
                                                          fonts: [
                                                            "FS;Cabinet Grotesk-bold",
                                                          ],
                                                          initial: Qe,
                                                          style: {
                                                            transformPerspective: 1200,
                                                          },
                                                          verticalAlignment:
                                                            "top",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(a.div, {
                                                        className:
                                                          "framer-1t9e5cr",
                                                        children: e(Lt, {
                                                          animate: Ja,
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
                                                            "framer-mmvll2",
                                                          "data-framer-name":
                                                            "hand",
                                                          exit: uo,
                                                          initial: Qe,
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
                                            e(ie, {
                                              breakpoint: l,
                                              overrides: {
                                                wdvlRRgij: {
                                                  transformTemplate: lt,
                                                },
                                              },
                                              children: p(Ba, {
                                                className: "framer-3upszd",
                                                "data-framer-name": "Options",
                                                "data-framer-portal-id":
                                                  "165pb4l",
                                                name: "Options",
                                                children: [
                                                  G() &&
                                                    e(v, {
                                                      height: 300,
                                                      y: 362,
                                                      children: e(oe, {
                                                        animate: go,
                                                        className:
                                                          "framer-jicr2l-container hidden-1y1tbw8 hidden-zn6nx8",
                                                        exit: yo,
                                                        initial: er,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        children: e(zp, {
                                                          height: "100%",
                                                          id: "F78OFu6B4",
                                                          layoutId: "F78OFu6B4",
                                                          variant: "qiYYLD700",
                                                          width: "100%",
                                                        }),
                                                      }),
                                                    }),
                                                  G() &&
                                                    e(v, {
                                                      height: 300,
                                                      y: 445,
                                                      children: e(oe, {
                                                        animate: vo,
                                                        className:
                                                          "framer-1d79nn7-container hidden-1y1tbw8 hidden-zn6nx8",
                                                        exit: xo,
                                                        initial: er,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        children: e(Up, {
                                                          height: "100%",
                                                          id: "J5PpjxIWT",
                                                          layoutId: "J5PpjxIWT",
                                                          variant: "RYwuKvV2u",
                                                          width: "100%",
                                                        }),
                                                      }),
                                                    }),
                                                  p(a0, {
                                                    className: "framer-1nmebs1",
                                                    "data-framer-name":
                                                      "Options",
                                                    name: "Options",
                                                    children: [
                                                      p(a.div, {
                                                        animate: a1,
                                                        className:
                                                          "framer-1qp37d5",
                                                        exit: r1,
                                                        initial: n1,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        children: [
                                                          p(a.div, {
                                                            className:
                                                              "framer-lnxje9",
                                                            children: [
                                                              e(Zt, {
                                                                __fromCanvasComponent:
                                                                  !0,
                                                                children: e(w, {
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
                                                                  "framer-dryt64",
                                                                fonts: [
                                                                  "Inter",
                                                                ],
                                                                verticalAlignment:
                                                                  "top",
                                                                withExternalLayout:
                                                                  !0,
                                                              }),
                                                              e(ie, {
                                                                breakpoint: l,
                                                                overrides: {
                                                                  wdvlRRgij: {
                                                                    children: e(
                                                                      w,
                                                                      {
                                                                        children:
                                                                          e(
                                                                            "p",
                                                                            {
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
                                                                            },
                                                                          ),
                                                                      },
                                                                    ),
                                                                  },
                                                                },
                                                                children: e(
                                                                  Kt,
                                                                  {
                                                                    __fromCanvasComponent:
                                                                      !0,
                                                                    children: e(
                                                                      w,
                                                                      {
                                                                        children:
                                                                          e(
                                                                            "p",
                                                                            {
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
                                                                                "\u663E\u793A\u5E03\u5C40",
                                                                            },
                                                                          ),
                                                                      },
                                                                    ),
                                                                    className:
                                                                      "framer-1v23mnh",
                                                                    fonts: [
                                                                      "Inter",
                                                                    ],
                                                                    verticalAlignment:
                                                                      "top",
                                                                    withExternalLayout:
                                                                      !0,
                                                                  },
                                                                ),
                                                              }),
                                                            ],
                                                          }),
                                                          Q() &&
                                                            e(ie, {
                                                              breakpoint: l,
                                                              overrides: {
                                                                wdvlRRgij: {
                                                                  height: 91,
                                                                  y: 88,
                                                                },
                                                              },
                                                              children: e(v, {
                                                                children: e(
                                                                  oe,
                                                                  {
                                                                    className:
                                                                      "framer-1xhsnbg-container hidden-72rtr7 hidden-1nxy63x hidden-1y1tbw8",
                                                                    children: e(
                                                                      Hp,
                                                                      {
                                                                        height:
                                                                          "100%",
                                                                        id: "SQO5Rnwcv",
                                                                        layoutId:
                                                                          "SQO5Rnwcv",
                                                                        variant:
                                                                          "O4C8qA3Or",
                                                                        width:
                                                                          "100%",
                                                                      },
                                                                    ),
                                                                  },
                                                                ),
                                                              }),
                                                            }),
                                                          u() &&
                                                            e(v, {
                                                              children: e(oe, {
                                                                animate: Nr,
                                                                className:
                                                                  "framer-uei72z-container hidden-zn6nx8",
                                                                exit: o1,
                                                                initial: Sr,
                                                                style: {
                                                                  transformPerspective: 1200,
                                                                },
                                                                children: e(
                                                                  Xp,
                                                                  {
                                                                    height:
                                                                      "100%",
                                                                    id: "HcO1XaenL",
                                                                    layoutId:
                                                                      "HcO1XaenL",
                                                                    variant:
                                                                      "aieP0OjgV",
                                                                    width:
                                                                      "100%",
                                                                  },
                                                                ),
                                                              }),
                                                            }),
                                                        ],
                                                      }),
                                                      p(a.div, {
                                                        animate: d1,
                                                        className:
                                                          "framer-kt4ktf",
                                                        exit: m1,
                                                        initial: c1,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        children: [
                                                          e(ie, {
                                                            breakpoint: l,
                                                            overrides: {
                                                              wdvlRRgij: {
                                                                y: 205,
                                                              },
                                                            },
                                                            children: e(v, {
                                                              height: 110,
                                                              width: "90px",
                                                              y: 225,
                                                              children: e(oe, {
                                                                animate: y1,
                                                                className:
                                                                  "framer-ntid8u-container",
                                                                exit: h1,
                                                                initial: Sr,
                                                                style: {
                                                                  transformPerspective: 1200,
                                                                },
                                                                children: e(
                                                                  Ap,
                                                                  {
                                                                    height:
                                                                      "100%",
                                                                    id: "M_M28SC0C",
                                                                    layoutId:
                                                                      "M_M28SC0C",
                                                                    style: {
                                                                      width:
                                                                        "100%",
                                                                    },
                                                                    variant:
                                                                      "Csiwc1EI2",
                                                                    width:
                                                                      "100%",
                                                                  },
                                                                ),
                                                              }),
                                                            }),
                                                          }),
                                                          e(ie, {
                                                            breakpoint: l,
                                                            overrides: {
                                                              wdvlRRgij: {
                                                                y: 205,
                                                              },
                                                            },
                                                            children: e(v, {
                                                              height: 110,
                                                              width: "90px",
                                                              y: 225,
                                                              children: e(oe, {
                                                                animate: w1,
                                                                className:
                                                                  "framer-61opoj-container",
                                                                exit: x1,
                                                                initial: Sr,
                                                                style: {
                                                                  transformPerspective: 1200,
                                                                },
                                                                children: e(
                                                                  Op,
                                                                  {
                                                                    height:
                                                                      "100%",
                                                                    id: "zsi4keksl",
                                                                    layoutId:
                                                                      "zsi4keksl",
                                                                    style: {
                                                                      width:
                                                                        "100%",
                                                                    },
                                                                    variant:
                                                                      "eZIUywzZC",
                                                                    width:
                                                                      "100%",
                                                                  },
                                                                ),
                                                              }),
                                                            }),
                                                          }),
                                                          e(ie, {
                                                            breakpoint: l,
                                                            overrides: {
                                                              wdvlRRgij: {
                                                                y: 205,
                                                              },
                                                            },
                                                            children: e(v, {
                                                              height: 110,
                                                              width: "90px",
                                                              y: 225,
                                                              children: e(oe, {
                                                                animate: Nr,
                                                                className:
                                                                  "framer-dt9xuz-container",
                                                                exit: k1,
                                                                initial: Sr,
                                                                style: {
                                                                  transformPerspective: 1200,
                                                                },
                                                                children: e(
                                                                  Qp,
                                                                  {
                                                                    height:
                                                                      "100%",
                                                                    id: "ozuLSf5te",
                                                                    layoutId:
                                                                      "ozuLSf5te",
                                                                    style: {
                                                                      width:
                                                                        "100%",
                                                                    },
                                                                    variant:
                                                                      "B0ZNGWm_m",
                                                                    width:
                                                                      "100%",
                                                                  },
                                                                ),
                                                              }),
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                      G() &&
                                                        p(a.div, {
                                                          animate: go,
                                                          className:
                                                            "framer-15r51dx hidden-1y1tbw8 hidden-zn6nx8",
                                                          exit: yo,
                                                          initial: er,
                                                          style: {
                                                            transformPerspective: 1200,
                                                          },
                                                          children: [
                                                            p(a.div, {
                                                              className:
                                                                "framer-nq4nmf",
                                                              children: [
                                                                e(Zt, {
                                                                  __fromCanvasComponent:
                                                                    !0,
                                                                  children: e(
                                                                    w,
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
                                                                            "Control with wheel",
                                                                        }),
                                                                    },
                                                                  ),
                                                                  className:
                                                                    "framer-1qhjr2p",
                                                                  fonts: [
                                                                    "Inter",
                                                                  ],
                                                                  verticalAlignment:
                                                                    "top",
                                                                  withExternalLayout:
                                                                    !0,
                                                                }),
                                                                e(Kt, {
                                                                  __fromCanvasComponent:
                                                                    !0,
                                                                  children: e(
                                                                    w,
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
                                                                            "\u4F7F\u7528\u6EDA\u8F6E\u63A7\u5236\u89C6\u56FE",
                                                                        }),
                                                                    },
                                                                  ),
                                                                  className:
                                                                    "framer-6gojv2",
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
                                                              children: e(oe, {
                                                                className:
                                                                  "framer-napae8-container",
                                                                children: e(
                                                                  Zp,
                                                                  {
                                                                    height:
                                                                      "100%",
                                                                    id: "epMgjyYO0",
                                                                    layoutId:
                                                                      "epMgjyYO0",
                                                                    variant:
                                                                      "pB6nkQDjg",
                                                                    width:
                                                                      "100%",
                                                                  },
                                                                ),
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      G() &&
                                                        p(a.div, {
                                                          animate: vo,
                                                          className:
                                                            "framer-ne48p9 hidden-1y1tbw8 hidden-zn6nx8",
                                                          exit: xo,
                                                          initial: er,
                                                          style: {
                                                            transformPerspective: 1200,
                                                          },
                                                          children: [
                                                            p(a.div, {
                                                              className:
                                                                "framer-pl20cu",
                                                              children: [
                                                                e(Zt, {
                                                                  __fromCanvasComponent:
                                                                    !0,
                                                                  children: e(
                                                                    w,
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
                                                                            "Navigation Arrows",
                                                                        }),
                                                                    },
                                                                  ),
                                                                  className:
                                                                    "framer-t4lmx2",
                                                                  fonts: [
                                                                    "Inter",
                                                                  ],
                                                                  verticalAlignment:
                                                                    "top",
                                                                  withExternalLayout:
                                                                    !0,
                                                                }),
                                                                e(Kt, {
                                                                  __fromCanvasComponent:
                                                                    !0,
                                                                  children: e(
                                                                    w,
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
                                                                            "\u542F\u7528\u5C4F\u5E55\u5BFC\u822A\u7BAD\u5934",
                                                                        }),
                                                                    },
                                                                  ),
                                                                  className:
                                                                    "framer-1fgfwl3",
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
                                                              height: 42,
                                                              y: 453,
                                                              children: e(oe, {
                                                                className:
                                                                  "framer-xvmxk-container",
                                                                children: e(
                                                                  $p,
                                                                  {
                                                                    height:
                                                                      "100%",
                                                                    id: "m57BlV9qH",
                                                                    layoutId:
                                                                      "m57BlV9qH",
                                                                    variant:
                                                                      "qak4Jrj8b",
                                                                    width:
                                                                      "100%",
                                                                  },
                                                                ),
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      p(a.div, {
                                                        animate: D1,
                                                        className:
                                                          "framer-gdeoaj",
                                                        exit: R1,
                                                        initial: er,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        children: [
                                                          p(a.div, {
                                                            className:
                                                              "framer-1sl0k16",
                                                            children: [
                                                              e(Zt, {
                                                                __fromCanvasComponent:
                                                                  !0,
                                                                children: e(w, {
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
                                                                  "framer-14hn0d1",
                                                                fonts: [
                                                                  "Inter",
                                                                ],
                                                                verticalAlignment:
                                                                  "top",
                                                                withExternalLayout:
                                                                  !0,
                                                              }),
                                                              e(Kt, {
                                                                __fromCanvasComponent:
                                                                  !0,
                                                                children: e(w, {
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
                                                                  "framer-5pufq5",
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
                                                            children: e(oe, {
                                                              className:
                                                                "framer-xftyqy-container",
                                                              children: e(t0, {
                                                                height: "100%",
                                                                id: "ACYHnpS5y",
                                                                layoutId:
                                                                  "ACYHnpS5y",
                                                                variant:
                                                                  "TqwEABpNd",
                                                                width: "100%",
                                                              }),
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                      e(a.div, {
                                                        animate: I1,
                                                        className:
                                                          "framer-yp8vfv",
                                                        exit: L1,
                                                        initial: F1,
                                                        style: {
                                                          transformPerspective: 1200,
                                                        },
                                                        children: e(r0, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: e(w, {
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
                                                            "framer-hvx785",
                                                          fonts: ["Inter"],
                                                          verticalAlignment:
                                                            "top",
                                                          withExternalLayout:
                                                            !0,
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
                }),
                e(fo, {
                  animate: Ya,
                  className: "framer-d6ulcc",
                  "data-framer-appear-id": "d6ulcc",
                  "data-framer-name": "About",
                  initial: Oa,
                  name: "About",
                  optimized: !0,
                  style: { transformPerspective: 1200 },
                  children: e(ie, {
                    breakpoint: l,
                    overrides: { dETHUdG53: { y: 23 }, wdvlRRgij: { y: 7 } },
                    children: e(v, {
                      height: 43,
                      y: 40,
                      children: e(oe, {
                        className: "framer-elbkze-container",
                        "data-framer-cursor": "1eji443",
                        children: e(ie, {
                          breakpoint: l,
                          overrides: {
                            dETHUdG53: { Pm_hOrOqh: !0 },
                            wdvlRRgij: { Pm_hOrOqh: !0 },
                          },
                          children: e(sa, {
                            height: "100%",
                            id: "K3I4FOBAh",
                            jhbC2DOAv: "GeY2IKYyS",
                            layoutId: "K3I4FOBAh",
                            Pm_hOrOqh: !1,
                            variant: "V8QTxROtH",
                            width: "100%",
                            ZaTyyUpS5: "wdICwFIgU",
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                K() &&
                  e(co, {
                    className:
                      "framer-1aheq3q hidden-72rtr7 hidden-1nxy63x hidden-zn6nx8",
                    "data-framer-name": "CoverL",
                    name: "CoverL",
                    children: e(a.div, {
                      className: "framer-lorwwc",
                      "data-framer-name": "Gap",
                      name: "Gap",
                    }),
                  }),
                J() &&
                  e(co, {
                    className: "framer-tf92a6 hidden-72rtr7 hidden-1nxy63x",
                    "data-framer-name": "CoverR",
                    name: "CoverR",
                    children: e(a.div, {
                      className: "framer-14nf5k4",
                      "data-framer-name": "Gap",
                      name: "Gap",
                    }),
                  }),
                G() &&
                  p(s0, {
                    className: "framer-13ta38r hidden-1y1tbw8 hidden-zn6nx8",
                    "data-framer-name": "Tooltip",
                    name: "Tooltip",
                    children: [
                      p(a.div, {
                        className: "framer-4ssxkq",
                        children: [
                          e(Zt, {
                            __fromCanvasComponent: !0,
                            children: e(w, {
                              children: p("p", {
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
                            className: "framer-vdw7z3",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(Kt, {
                            __fromCanvasComponent: !0,
                            children: e(w, {
                              children: p("p", {
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
                            className: "framer-1mr6rse",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      e(a.div, {
                        className: "framer-1u8ozc4",
                        children: e(v, {
                          height: 42,
                          y: 323,
                          children: e(oe, {
                            className: "framer-s97eg8-container",
                            children: e(o0, {
                              height: "100%",
                              id: "CwBrAZFK0",
                              jqcdHdCYz: "\u4E86\u89E3",
                              layoutId: "CwBrAZFK0",
                              variant: "eVJtmaWf9",
                              width: "100%",
                              xH050kkag: "Dismiss",
                            }),
                          }),
                        }),
                      }),
                      e(a.div, {
                        className: "framer-krckdj",
                        children: e(ae, {
                          className: "framer-4z1kks",
                          layout: "position",
                          opacity: 1,
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 20"><path d="M 12.313 3.35 C 13.511 1.698 15.973 1.698 17.171 3.35 L 29.242 20 L 0.242 20 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */"></path></svg>',
                          svgContentId: 10144947966,
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
                G() &&
                  p(u0, {
                    className: "framer-rs1d4 hidden-1y1tbw8 hidden-zn6nx8",
                    "data-framer-name": "HeroDesktop",
                    "data-hide-scrollbars": !0,
                    name: "HeroDesktop",
                    children: [
                      p(c0, {
                        className: "framer-hippag",
                        "data-framer-name": "Title",
                        name: "Title",
                        children: [
                          e(l0, {
                            className: "framer-1hs0epg",
                            "data-framer-name": "StackPadding",
                            name: "StackPadding",
                          }),
                          e(jr, {
                            children: (x) =>
                              e(Ie, {
                                children: e(v, {
                                  height: 564,
                                  y: 233,
                                  children: p(oe, {
                                    className: "framer-ho35m0-container",
                                    id: "ho35m0",
                                    children: [
                                      e(ie, {
                                        breakpoint: l,
                                        overrides: {
                                          rG1ySt2KS: { variant: "kEI69CE4x" },
                                        },
                                        children: e(vt, {
                                          height: "100%",
                                          id: "RjymolCqq",
                                          layoutId: "RjymolCqq",
                                          qaEc9EhOH: "1f8gcp2",
                                          qdPCOLmbA: L({ overlay: x }),
                                          variant: "wjO3vJukO",
                                          width: "100%",
                                        }),
                                      }),
                                      e(Fe, {
                                        children:
                                          x.visible &&
                                          e(Ie, {
                                            children: _t(
                                              p(w, {
                                                children: [
                                                  e(
                                                    a.div,
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
                                                        "framer-w7hujk",
                                                      "data-framer-portal-id":
                                                        "ho35m0",
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
                                                      initial: { opacity: 0 },
                                                      onTap: () => x.hide(),
                                                    },
                                                    "SgodOjRgM",
                                                  ),
                                                  e(Xa, {
                                                    className: "framer-16lkkix",
                                                    "data-framer-name":
                                                      "ClickLayer",
                                                    "data-framer-portal-id":
                                                      "ho35m0",
                                                    name: "ClickLayer",
                                                    onTap: k({ overlay: x }),
                                                  }),
                                                  e(a.div, {
                                                    animate: Ka,
                                                    className: "framer-1a5t4y",
                                                    "data-framer-name":
                                                      "Appear",
                                                    "data-framer-portal-id":
                                                      "ho35m0",
                                                    exit: Za,
                                                    initial: $a,
                                                    name: "Appear",
                                                    style: {
                                                      transformPerspective: 1200,
                                                    },
                                                    children: e(Ma, {
                                                      className:
                                                        "framer-185nj6g",
                                                      "data-hide-scrollbars":
                                                        !0,
                                                      children: e(a.div, {
                                                        className:
                                                          "framer-10w0tne",
                                                        children: e(v, {
                                                          height: 4362,
                                                          width: "780px",
                                                          y: 240,
                                                          children: e(oe, {
                                                            className:
                                                              "framer-1vjyge4-container",
                                                            children: e(Mt, {
                                                              height: "100%",
                                                              id: "pIJFebUCJ",
                                                              layoutId:
                                                                "pIJFebUCJ",
                                                              style: {
                                                                width: "100%",
                                                              },
                                                              variant:
                                                                "YiwQOAe3h",
                                                              width: "100%",
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  e(v, {
                                                    height: 42,
                                                    y: 912,
                                                    children: e(oe, {
                                                      animate: tn,
                                                      className:
                                                        "framer-19a4b3-container",
                                                      "data-framer-portal-id":
                                                        "ho35m0",
                                                      exit: en,
                                                      initial: rn,
                                                      transformTemplate: lt,
                                                      children: e(Aa, {
                                                        heeY2JMQ7: g({
                                                          overlay: x,
                                                        }),
                                                        height: "100%",
                                                        id: "jJkkjkHWE",
                                                        layoutId: "jJkkjkHWE",
                                                        variant: "J2J3k_z92",
                                                        width: "100%",
                                                      }),
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
                        ],
                      }),
                      e(h0, {
                        className: "framer-1uwa7vc",
                        "data-framer-name": "CMS",
                        name: "CMS",
                        children: e(v, {
                          children: e(oe, {
                            className: "framer-1q35kr2-container",
                            children: e(Oe, {
                              cursor: "179ov0m",
                              height: "100%",
                              id: "b8KaROAvp",
                              layoutId: "b8KaROAvp",
                              layouts: "Desktop",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                K() &&
                  e(jr, {
                    blockDocumentScrolling: !0,
                    children: (x) =>
                      e(Ie, {
                        children: e(ie, {
                          breakpoint: l,
                          overrides: {
                            dETHUdG53: { height: 4429, width: "100vw", y: 0 },
                          },
                          children: e(v, {
                            children: p(oe, {
                              className:
                                "framer-iskjvj-container hidden-72rtr7 hidden-1nxy63x hidden-zn6nx8",
                              id: "iskjvj",
                              children: [
                                e(g0, {
                                  height: "100%",
                                  hxNeo0OUE: "1wwll4i",
                                  id: "NtTpP9QGU",
                                  layoutId: "NtTpP9QGU",
                                  mZtE1brt4: "1f8gcp2",
                                  pbuE6UhMj: j({ overlay: x }),
                                  style: { width: "100%" },
                                  width: "100%",
                                }),
                                e(Fe, {
                                  children:
                                    x.visible &&
                                    e(Ie, {
                                      children: _t(
                                        p(w, {
                                          children: [
                                            e(
                                              a.div,
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
                                                className: "framer-1nefxy8",
                                                "data-framer-portal-id":
                                                  "iskjvj",
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
                                                initial: { opacity: 0 },
                                                onTap: () => x.hide(),
                                              },
                                              "aUANkSLkU",
                                            ),
                                            e(Xa, {
                                              className: "framer-nux87d",
                                              "data-framer-name": "ClickLayer",
                                              "data-framer-portal-id": "iskjvj",
                                              name: "ClickLayer",
                                              onTap: k({ overlay: x }),
                                            }),
                                            e(a.div, {
                                              animate: Ka,
                                              className: "framer-1kgaq9y",
                                              "data-framer-name": "Appear",
                                              "data-framer-portal-id": "iskjvj",
                                              exit: Za,
                                              initial: $a,
                                              name: "Appear",
                                              style: {
                                                transformPerspective: 1200,
                                              },
                                              children: e(Ma, {
                                                className: "framer-u221wl",
                                                "data-hide-scrollbars": !0,
                                                children: e(a.div, {
                                                  className: "framer-1xaektt",
                                                  children: e(v, {
                                                    height: 4362,
                                                    width: "580px",
                                                    y: 240,
                                                    children: e(oe, {
                                                      className:
                                                        "framer-16mb45j-container",
                                                      children: e(Mt, {
                                                        height: "100%",
                                                        id: "tRlWPkjN8",
                                                        layoutId: "tRlWPkjN8",
                                                        style: {
                                                          width: "100%",
                                                        },
                                                        variant: "YiwQOAe3h",
                                                        width: "100%",
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(v, {
                                              height: 42,
                                              y: 912,
                                              children: e(oe, {
                                                animate: tn,
                                                className:
                                                  "framer-l6gnf6-container",
                                                "data-framer-portal-id":
                                                  "iskjvj",
                                                exit: en,
                                                initial: rn,
                                                transformTemplate: lt,
                                                children: e(Aa, {
                                                  heeY2JMQ7: g({ overlay: x }),
                                                  height: "100%",
                                                  id: "U2xt3v4sJ",
                                                  layoutId: "U2xt3v4sJ",
                                                  variant: "J2J3k_z92",
                                                  width: "100%",
                                                }),
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
                Q() &&
                  e(jr, {
                    blockDocumentScrolling: !0,
                    children: (x) =>
                      e(Ie, {
                        children: e(ie, {
                          breakpoint: l,
                          overrides: {
                            wdvlRRgij: { height: 6338, width: "100vw", y: 0 },
                          },
                          children: e(v, {
                            children: p(oe, {
                              className:
                                "framer-dn9kcg-container hidden-72rtr7 hidden-1nxy63x hidden-1y1tbw8",
                              id: "dn9kcg",
                              children: [
                                e(v0, {
                                  height: "100%",
                                  id: "kL1c4F4v0",
                                  layoutId: "kL1c4F4v0",
                                  pRnzzx5xV: "1f8gcp2",
                                  style: { width: "100%" },
                                  width: "100%",
                                  XnEXOPyGv: "1gvcplb",
                                  YLDaAyo77: d({ overlay: x }),
                                }),
                                e(Fe, {
                                  children:
                                    x.visible &&
                                    e(Ie, {
                                      children: _t(
                                        p(w, {
                                          children: [
                                            e(
                                              a.div,
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
                                                className: "framer-1kdhvtp",
                                                "data-framer-portal-id":
                                                  "dn9kcg",
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
                                                initial: { opacity: 0 },
                                                onTap: () => x.hide(),
                                              },
                                              "wGSEQZYRx",
                                            ),
                                            e(Xa, {
                                              className: "framer-113fygj",
                                              "data-framer-name": "ClickLayer",
                                              "data-framer-portal-id": "dn9kcg",
                                              name: "ClickLayer",
                                              onTap: k({ overlay: x }),
                                            }),
                                            e(ie, {
                                              breakpoint: l,
                                              overrides: {
                                                wdvlRRgij: {
                                                  exit: S1,
                                                  initial: j1,
                                                },
                                              },
                                              children: e(a.div, {
                                                animate: Ka,
                                                className: "framer-1ngdde4",
                                                "data-framer-name": "Appear",
                                                "data-framer-portal-id":
                                                  "dn9kcg",
                                                exit: Za,
                                                initial: $a,
                                                name: "Appear",
                                                style: {
                                                  transformPerspective: 1200,
                                                },
                                                children: e(Ma, {
                                                  className: "framer-1wd9khk",
                                                  "data-hide-scrollbars": !0,
                                                  children: e(a.div, {
                                                    className: "framer-1i4j6tm",
                                                    children: e(ie, {
                                                      breakpoint: l,
                                                      overrides: {
                                                        wdvlRRgij: {
                                                          width:
                                                            "min(max(100vw, 1px) - 20px, 500px)",
                                                        },
                                                      },
                                                      children: e(v, {
                                                        height: 4362,
                                                        width: "500px",
                                                        y: 240,
                                                        children: e(oe, {
                                                          className:
                                                            "framer-dpfcli-container",
                                                          children: e(Mt, {
                                                            height: "100%",
                                                            id: "gsjBmQhB4",
                                                            layoutId:
                                                              "gsjBmQhB4",
                                                            style: {
                                                              maxWidth: "100%",
                                                              width: "100%",
                                                            },
                                                            variant:
                                                              "VUyNBJ87b",
                                                            width: "100%",
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(v, {
                                              height: 42,
                                              y: 912,
                                              children: e(oe, {
                                                animate: tn,
                                                className:
                                                  "framer-1rm2q7l-container",
                                                "data-framer-portal-id":
                                                  "dn9kcg",
                                                exit: en,
                                                initial: rn,
                                                transformTemplate: lt,
                                                children: e(Aa, {
                                                  heeY2JMQ7: g({ overlay: x }),
                                                  height: "100%",
                                                  id: "fQNVWQq60",
                                                  layoutId: "fQNVWQq60",
                                                  variant: "J2J3k_z92",
                                                  width: "100%",
                                                }),
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
                G() &&
                  p(k0, {
                    className: "framer-1013drl hidden-1y1tbw8 hidden-zn6nx8",
                    "data-framer-name": "ScrollBar",
                    name: "ScrollBar",
                    transformTemplate: lt,
                    children: [
                      e(v, {
                        children: e(Ha, {
                          animate: Nr,
                          className: "framer-uf2bud-container",
                          "data-framer-appear-id": "uf2bud",
                          initial: G1,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: e(b0, {
                            border_color:
                              "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                            button: [
                              {
                                image:
                                  "https://images.unsplash.com/photo-1657142072334-5a88134f1503?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=80",
                                key: 0,
                                title: "Hover Title",
                                type: "project",
                              },
                              {
                                image:
                                  "https://images.unsplash.com/photo-1676030789620-664650aa60a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
                                key: 1,
                                title: "Hover Title",
                                type: "idea",
                              },
                              {
                                image:
                                  "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
                                key: 2,
                                title: "Hover Title",
                                type: "project",
                              },
                              {
                                image:
                                  "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
                                key: 3,
                                title: "Hover Title",
                                type: "idea",
                              },
                              {
                                image:
                                  "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
                                key: 4,
                                title: "Hover Title",
                                type: "project",
                              },
                              {
                                image:
                                  "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
                                key: 5,
                                title: "Hover Title",
                                type: "idea",
                              },
                              {
                                image:
                                  "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
                                key: 6,
                                title: "Hover Title",
                                type: "project",
                              },
                              {
                                image:
                                  "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
                                key: 7,
                                title: "Hover Title",
                                type: "idea",
                              },
                              {
                                image:
                                  "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
                                key: 8,
                                title: "Hover Title",
                                type: "project",
                              },
                              {
                                image:
                                  "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
                                key: 9,
                                title: "Hover Title",
                                type: "idea",
                              },
                            ],
                            fill_2:
                              "var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15))",
                            fill: "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(232, 232, 232, 0.7))",
                            height: "100%",
                            id: "uy6NNMG1K",
                            layoutId: "uy6NNMG1K",
                            pin_color:
                              "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                            pro_color:
                              "var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0))",
                            pro_color2:
                              "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                            theme_2:
                              "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
                            theme:
                              "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(a.div, { className: "framer-1mzg2n8" }),
                    ],
                  }),
                e(_0, {
                  className: "framer-1lrndve",
                  "data-framer-name": "Filter",
                  name: "Filter",
                  transformTemplate: lt,
                  children: e(v, {
                    children: e(oe, {
                      className: "framer-ad4fj5-container",
                      children: e(ie, {
                        breakpoint: l,
                        overrides: {
                          wdvlRRgij: {
                            bg_color0:
                              "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(204, 204, 204, 0.3))",
                          },
                        },
                        children: e(R0, {
                          act_color:
                            "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                          bg_color0:
                            "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7))",
                          bg_color1:
                            "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                          def_color:
                            "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                          font: {
                            fontFamily:
                              '"Satoshi", "Satoshi Placeholder", sans-serif',
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            letterSpacing: "0em",
                            lineHeight: "1em",
                          },
                          height: "100%",
                          id: "IK0MiFxRb",
                          layoutId: "IK0MiFxRb",
                          options: [
                            { label: "ALL" },
                            { label: "PROJECT" },
                            { label: "IDEA" },
                            { label: "PLAYGROUND" },
                          ],
                          tit_color0:
                            "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                          tit_color1:
                            "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(219, 219, 217))",
                          title: "Property",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
                e(L0, {
                  className: "framer-mj7ayi",
                  "data-framer-name": "Footer",
                  name: "Footer",
                  children: e(ie, {
                    breakpoint: l,
                    overrides: {
                      dETHUdG53: { y: 4315 },
                      wdvlRRgij: { y: 6224 },
                    },
                    children: e(v, {
                      height: 114,
                      width: "max(100vw, 1px)",
                      y: 886,
                      children: e(Ha, {
                        animate: Nr,
                        className: "framer-zhziib-container",
                        "data-framer-appear-id": "zhziib",
                        initial: T1,
                        optimized: !0,
                        style: { transformPerspective: 1200 },
                        children: e(ie, {
                          breakpoint: l,
                          overrides: { wdvlRRgij: { variant: "Qjx7lyGdh" } },
                          children: e(ea, {
                            dtjgVuN4V: "jdtc6IfdH",
                            height: "100%",
                            id: "Bcv9L_PNR",
                            l2OjqhSRj: "jdtc6IfdH",
                            layoutId: "Bcv9L_PNR",
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
                e(te, {
                  __fromCanvasComponent: !0,
                  children: e(w, {
                    children: e("h1", { children: "Jay Ji Jayzhushi" }),
                  }),
                  className: "framer-1jmg9jp",
                  fonts: ["Inter"],
                  transformTemplate: lt,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                u() &&
                  e(I0, {
                    animate: Wa,
                    className: "framer-8fb8qa hidden-zn6nx8",
                    "data-framer-appear-id": "8fb8qa",
                    "data-framer-cursor": "k46mno",
                    "data-framer-name": "NavLayerL",
                    initial: bo,
                    name: "NavLayerL",
                    optimized: !0,
                    whileHover: wo,
                    whileTap: E1,
                  }),
                u() &&
                  e(F0, {
                    animate: Wa,
                    className: "framer-tpclc3 hidden-zn6nx8",
                    "data-framer-appear-id": "tpclc3",
                    "data-framer-cursor": "s56f5m",
                    "data-framer-name": "NavLayerR",
                    initial: bo,
                    name: "NavLayerR",
                    optimized: !0,
                    whileHover: wo,
                    whileTap: z1,
                  }),
              ],
            }),
            e("div", { className: V(po, ...E), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Z1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Gr.bodyClassName}-framer-nG0pR { background: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(235, 235, 234)) /* {"name":"Backdrop"} */; }`,
    ".framer-nG0pR.framer-lux5qc, .framer-nG0pR .framer-lux5qc { display: block; }",
    ".framer-nG0pR.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, #ebebea); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1600px; }",
    ".framer-nG0pR .framer-15zyjyk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: 42px; justify-content: flex-start; left: 42px; overflow: visible; padding: 0px; pointer-events: auto; position: absolute; top: 40px; width: min-content; z-index: 5; }",
    ".framer-nG0pR .framer-qw2ikh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-nG0pR .framer-1n15c9x-container, .framer-nG0pR .framer-165pb4l-container, .framer-nG0pR .framer-1eyn2wq-container, .framer-nG0pR .framer-1xhsnbg-container, .framer-nG0pR .framer-uei72z-container, .framer-nG0pR .framer-napae8-container, .framer-nG0pR .framer-xvmxk-container, .framer-nG0pR .framer-xftyqy-container, .framer-nG0pR .framer-elbkze-container, .framer-nG0pR .framer-s97eg8-container, .framer-nG0pR .framer-ho35m0-container, .framer-nG0pR .framer-1q35kr2-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-nG0pR .framer-1pi5rar { align-content: center; align-items: center; background-color: var(--token-0998aeba-5eb4-400a-87c6-fe3a20398e99, rgba(232, 232, 232, 0.7)); border-bottom-left-radius: 17px; border-bottom-right-radius: 17px; border-top-left-radius: 17px; border-top-right-radius: 17px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; pointer-events: auto; position: absolute; right: 121px; top: 40px; width: min-content; z-index: 5; }",
    ".framer-nG0pR .framer-yvobuu { inset: 0px; position: fixed; user-select: none; z-index: 4; }",
    ".framer-nG0pR .framer-pow8r5 { bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: hidden; position: fixed; right: 0px; top: 0px; z-index: 4; }",
    ".framer-nG0pR .framer-12mwnfa { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-nG0pR .framer-18cxbxj { background-color: var(--token-813e2b74-368d-46c9-aab0-978671346ba5, rgba(201, 201, 199, 0.7)); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-nG0pR .framer-13vfuvn { align-content: center; align-items: center; bottom: 120px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 40px; overflow: hidden; padding: 0px; position: fixed; width: min-content; z-index: 4; }",
    ".framer-nG0pR .framer-1uyt8r3, .framer-nG0pR .framer-w3hrdp, .framer-nG0pR .framer-1iddyy1, .framer-nG0pR .framer-bbk3ui { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 106px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-nG0pR .framer-fmmb8o, .framer-nG0pR .framer-91gdj2, .framer-nG0pR .framer-5drs9m, .framer-nG0pR .framer-io4qgw, .framer-nG0pR .framer-j8via3, .framer-nG0pR .framer-lq18qm, .framer-nG0pR .framer-dryt64, .framer-nG0pR .framer-1v23mnh, .framer-nG0pR .framer-1qhjr2p, .framer-nG0pR .framer-6gojv2, .framer-nG0pR .framer-t4lmx2, .framer-nG0pR .framer-1fgfwl3, .framer-nG0pR .framer-14hn0d1, .framer-nG0pR .framer-5pufq5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-nG0pR .framer-7r3757, .framer-nG0pR .framer-mmvll2 { aspect-ratio: 1.0091743119266054 / 1; flex: none; height: 100%; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 202px); }",
    ".framer-nG0pR .framer-1y8y89e { align-content: flex-end; align-items: flex-end; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; left: 0px; overflow: visible; padding: 20px; position: fixed; right: 0px; z-index: 4; }",
    ".framer-nG0pR .framer-13k41d1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: min-content; }",
    ".framer-nG0pR .framer-ny3yh4-container, .framer-nG0pR .framer-csyor9-container { flex: none; height: 54px; position: relative; width: 54px; z-index: 2; }",
    ".framer-nG0pR .framer-13svxd-container { flex: none; height: 54px; position: relative; width: 54px; z-index: 1; }",
    ".framer-nG0pR .framer-1f9a22y-container { flex: none; height: 54px; position: relative; width: 54px; z-index: 0; }",
    ".framer-nG0pR .framer-1r8xyd6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 20px; position: relative; width: min-content; }",
    ".framer-nG0pR .framer-18obioi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-nG0pR .framer-not0b7, .framer-nG0pR .framer-177gt34, .framer-nG0pR .framer-z9ukaa, .framer-nG0pR .framer-1t9e5cr { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-nG0pR .framer-3upszd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: fixed; right: 40px; top: 100px; width: min-content; z-index: 4; }",
    ".framer-nG0pR .framer-jicr2l-container { flex: none; height: auto; left: 157px; position: absolute; top: 262px; width: auto; z-index: 4; }",
    ".framer-nG0pR .framer-1d79nn7-container { flex: none; height: auto; left: 154px; position: absolute; top: 345px; width: auto; z-index: 4; }",
    ".framer-nG0pR .framer-1nmebs1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-nG0pR .framer-1qp37d5 { align-content: center; align-items: center; background-color: var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(232, 232, 232, 0.7)); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 8px; position: relative; width: min-content; }",
    ".framer-nG0pR .framer-lnxje9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 10px; position: relative; width: 90px; }",
    ".framer-nG0pR .framer-kt4ktf { align-content: center; align-items: center; background-color: var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(232, 232, 232, 0.7)); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-nG0pR .framer-ntid8u-container, .framer-nG0pR .framer-61opoj-container, .framer-nG0pR .framer-dt9xuz-container { flex: none; height: auto; position: relative; width: 90px; }",
    ".framer-nG0pR .framer-15r51dx, .framer-nG0pR .framer-ne48p9 { align-content: center; align-items: center; background-color: var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7)); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 74px; justify-content: space-between; overflow: hidden; padding: 8px 16px 8px 8px; position: relative; width: 303px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-nG0pR .framer-nq4nmf, .framer-nG0pR .framer-pl20cu, .framer-nG0pR .framer-1sl0k16 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 10px; position: relative; width: min-content; }",
    ".framer-nG0pR .framer-gdeoaj { align-content: center; align-items: center; background-color: var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(232, 232, 232, 0.7)); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 74px; justify-content: space-between; overflow: hidden; padding: 8px 16px 8px 8px; position: relative; width: 303px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-nG0pR .framer-yp8vfv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 4px 16px 0px 16px; position: relative; width: 303px; }",
    ".framer-nG0pR .framer-hvx785 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: 38px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-nG0pR .framer-d6ulcc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 30px; top: 40px; width: min-content; z-index: 5; }",
    ".framer-nG0pR .framer-1aheq3q { -webkit-user-select: none; align-content: flex-end; align-items: flex-end; background-color: var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7)); border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 56px; justify-content: center; left: 16px; overflow: hidden; padding: 0px; pointer-events: none; position: fixed; top: 16px; user-select: none; width: 120px; will-change: var(--framer-will-change-override, transform); z-index: 4; }",
    '.framer-nG0pR .framer-lorwwc, .framer-nG0pR .framer-14nf5k4 { background: linear-gradient(90deg, var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0)) /* {"name":"Black 0"} */ 0%, var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05)) /* {"name":"Black 5"} */ 50.09407691728758%, var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0)) /* {"name":"Black 0"} */ 100%); flex: 0.9 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; }',
    ".framer-nG0pR .framer-tf92a6 { -webkit-user-select: none; align-content: flex-end; align-items: flex-end; background: linear-gradient(180deg, var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7)) 0%, var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7)) 100%); background-color: var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7)); border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 56px; justify-content: center; overflow: hidden; padding: 0px; pointer-events: none; position: fixed; right: 22px; top: 33px; user-select: none; width: 311px; will-change: var(--framer-will-change-override, transform); z-index: 4; }",
    ".framer-nG0pR .framer-13ta38r { align-content: flex-end; align-items: flex-end; background-color: var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, #ffffff); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: absolute; right: 70px; top: 99px; width: 295px; z-index: 1; }",
    ".framer-nG0pR .framer-4ssxkq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-nG0pR .framer-vdw7z3, .framer-nG0pR .framer-1mr6rse { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-nG0pR .framer-1u8ozc4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-nG0pR .framer-krckdj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 209px; overflow: hidden; padding: 0px; position: absolute; top: -14px; width: min-content; z-index: 1; }",
    ".framer-nG0pR .framer-4z1kks { flex: none; height: 20px; position: relative; width: 30px; }",
    ".framer-nG0pR .framer-rs1d4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: flex-start; overflow: auto; padding: 0px; position: relative; width: 100%; }",
    ".framer-nG0pR .framer-hippag { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 90%; justify-content: center; min-height: 500px; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-nG0pR .framer-1hs0epg { -webkit-user-select: none; flex: none; height: 108px; overflow: hidden; pointer-events: none; position: relative; user-select: none; width: 200px; }",
    '.framer-nG0pR .framer-w7hujk, .framer-nG0pR .framer-1nefxy8, .framer-nG0pR .framer-1kdhvtp { background-color: var(--token-813e2b74-368d-46c9-aab0-978671346ba5, rgba(201, 201, 199, 0.7)) /* {"name":"Overlayer 70"} */; inset: 0px; position: fixed; user-select: none; z-index: 0; }',
    ".framer-nG0pR .framer-16lkkix, .framer-nG0pR .framer-nux87d, .framer-nG0pR .framer-113fygj { bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: hidden; position: fixed; right: 0px; top: 0px; z-index: 0; }",
    ".framer-nG0pR .framer-1a5t4y { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: calc(50.00000000000002% - 1000px / 2); overflow: hidden; padding: 0px 20px 0px 20px; position: fixed; top: 0px; width: 1000px; z-index: 0; }",
    ".framer-nG0pR .framer-185nj6g, .framer-nG0pR .framer-u221wl, .framer-nG0pR .framer-1wd9khk { align-content: flex-start; align-items: flex-start; border-top-left-radius: 36px; border-top-right-radius: 36px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; overflow: auto; padding: 140px 0px 140px 0px; position: relative; width: 1px; }",
    ".framer-nG0pR .framer-10w0tne { align-content: center; align-items: center; background-color: var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, #ffffff); border-bottom-left-radius: 36px; border-bottom-right-radius: 36px; border-top-left-radius: 36px; border-top-right-radius: 36px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 100px 100px 200px 100px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-nG0pR .framer-1vjyge4-container { flex: none; height: auto; position: relative; width: 780px; }",
    ".framer-nG0pR .framer-19a4b3-container { bottom: 46px; flex: none; height: auto; left: 50%; pointer-events: auto; position: fixed; transform: translateX(-50%); width: auto; z-index: 2; }",
    ".framer-nG0pR .framer-1uwa7vc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 200px; height: 100%; justify-content: flex-start; overflow: visible; padding: 80px; position: relative; width: min-content; }",
    ".framer-nG0pR .framer-iskjvj-container, .framer-nG0pR .framer-dn9kcg-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-nG0pR .framer-1kgaq9y, .framer-nG0pR .framer-1ngdde4 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: calc(50.00000000000002% - 960px / 2); overflow: hidden; padding: 0px; position: fixed; top: 0px; width: 960px; z-index: 0; }",
    ".framer-nG0pR .framer-1xaektt, .framer-nG0pR .framer-1i4j6tm { align-content: center; align-items: center; background-color: var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, #ffffff); border-bottom-left-radius: 36px; border-bottom-right-radius: 36px; border-top-left-radius: 36px; border-top-right-radius: 36px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 100px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-nG0pR .framer-16mb45j-container { flex: none; height: auto; position: relative; width: 580px; }",
    ".framer-nG0pR .framer-l6gnf6-container, .framer-nG0pR .framer-1rm2q7l-container { bottom: 46px; flex: none; height: auto; left: 50%; pointer-events: auto; position: fixed; transform: translateX(-50%); width: auto; z-index: 1; }",
    ".framer-nG0pR .framer-dpfcli-container { flex: none; height: auto; max-width: 500px; position: relative; width: 100%; }",
    ".framer-nG0pR .framer-1013drl { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: fixed; transform: translateX(-50%); width: min-content; }",
    ".framer-nG0pR .framer-uf2bud-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-nG0pR .framer-1mzg2n8 { flex: none; height: 1vh; overflow: hidden; position: relative; width: 186px; }",
    ".framer-nG0pR .framer-1lrndve { -webkit-backdrop-filter: blur(8px); align-content: center; align-items: center; backdrop-filter: blur(8px); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: fixed; top: 39px; transform: translateX(-50%); width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-nG0pR .framer-ad4fj5-container { cursor: pointer; flex: none; height: auto; position: relative; width: auto; }",
    ".framer-nG0pR .framer-mj7ayi { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; pointer-events: none; position: absolute; right: 0px; }",
    ".framer-nG0pR .framer-zhziib-container { flex: 1 0 0px; height: auto; pointer-events: none; position: relative; width: 1px; }",
    ".framer-nG0pR .framer-1jmg9jp { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; -webkit-user-select: none; bottom: 0px; flex: none; height: auto; left: 50%; opacity: 0; pointer-events: none; position: absolute; transform: translateX(-50%); user-select: none; white-space: pre; width: auto; z-index: -1; }",
    ".framer-nG0pR .framer-8fb8qa { background: radial-gradient(100% 50% at 5.5% 50%, rgba(240, 100, 72, 0.4) 0%, rgba(240, 100, 73, 0) 100%); flex: none; height: 738px; left: 0px; opacity: 0; overflow: hidden; position: fixed; top: calc(50.00000000000002% - 738px / 2); width: 200px; z-index: 0; }",
    ".framer-nG0pR .framer-tpclc3 { background: radial-gradient(100% 50% at 100% 50%, rgba(240, 100, 73, 0.4) 0%, rgba(240, 100, 73, 0) 100%); flex: none; height: 738px; opacity: 0; overflow: hidden; position: fixed; right: 0px; top: calc(50.00000000000002% - 738px / 2); width: 200px; z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-nG0pR.framer-72rtr7, .framer-nG0pR .framer-15zyjyk, .framer-nG0pR .framer-qw2ikh, .framer-nG0pR .framer-1pi5rar, .framer-nG0pR .framer-13vfuvn, .framer-nG0pR .framer-1uyt8r3, .framer-nG0pR .framer-w3hrdp, .framer-nG0pR .framer-1iddyy1, .framer-nG0pR .framer-bbk3ui, .framer-nG0pR .framer-13k41d1, .framer-nG0pR .framer-1r8xyd6, .framer-nG0pR .framer-18obioi, .framer-nG0pR .framer-not0b7, .framer-nG0pR .framer-177gt34, .framer-nG0pR .framer-z9ukaa, .framer-nG0pR .framer-1t9e5cr, .framer-nG0pR .framer-3upszd, .framer-nG0pR .framer-1nmebs1, .framer-nG0pR .framer-1qp37d5, .framer-nG0pR .framer-lnxje9, .framer-nG0pR .framer-kt4ktf, .framer-nG0pR .framer-nq4nmf, .framer-nG0pR .framer-pl20cu, .framer-nG0pR .framer-1sl0k16, .framer-nG0pR .framer-yp8vfv, .framer-nG0pR .framer-d6ulcc, .framer-nG0pR .framer-1aheq3q, .framer-nG0pR .framer-tf92a6, .framer-nG0pR .framer-13ta38r, .framer-nG0pR .framer-4ssxkq, .framer-nG0pR .framer-1u8ozc4, .framer-nG0pR .framer-krckdj, .framer-nG0pR .framer-rs1d4, .framer-nG0pR .framer-hippag, .framer-nG0pR .framer-1a5t4y, .framer-nG0pR .framer-185nj6g, .framer-nG0pR .framer-10w0tne, .framer-nG0pR .framer-1uwa7vc, .framer-nG0pR .framer-1kgaq9y, .framer-nG0pR .framer-u221wl, .framer-nG0pR .framer-1xaektt, .framer-nG0pR .framer-1ngdde4, .framer-nG0pR .framer-1wd9khk, .framer-nG0pR .framer-1i4j6tm, .framer-nG0pR .framer-1013drl, .framer-nG0pR .framer-1lrndve, .framer-nG0pR .framer-mj7ayi { gap: 0px; } .framer-nG0pR.framer-72rtr7 > *, .framer-nG0pR .framer-lnxje9 > *, .framer-nG0pR .framer-nq4nmf > *, .framer-nG0pR .framer-pl20cu > *, .framer-nG0pR .framer-1sl0k16 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-nG0pR.framer-72rtr7 > :first-child, .framer-nG0pR .framer-3upszd > :first-child, .framer-nG0pR .framer-1nmebs1 > :first-child, .framer-nG0pR .framer-lnxje9 > :first-child, .framer-nG0pR .framer-nq4nmf > :first-child, .framer-nG0pR .framer-pl20cu > :first-child, .framer-nG0pR .framer-1sl0k16 > :first-child, .framer-nG0pR .framer-13ta38r > :first-child, .framer-nG0pR .framer-4ssxkq > :first-child, .framer-nG0pR .framer-krckdj > :first-child, .framer-nG0pR .framer-10w0tne > :first-child, .framer-nG0pR .framer-1xaektt > :first-child, .framer-nG0pR .framer-1i4j6tm > :first-child, .framer-nG0pR .framer-1013drl > :first-child { margin-top: 0px; } .framer-nG0pR.framer-72rtr7 > :last-child, .framer-nG0pR .framer-3upszd > :last-child, .framer-nG0pR .framer-1nmebs1 > :last-child, .framer-nG0pR .framer-lnxje9 > :last-child, .framer-nG0pR .framer-nq4nmf > :last-child, .framer-nG0pR .framer-pl20cu > :last-child, .framer-nG0pR .framer-1sl0k16 > :last-child, .framer-nG0pR .framer-13ta38r > :last-child, .framer-nG0pR .framer-4ssxkq > :last-child, .framer-nG0pR .framer-krckdj > :last-child, .framer-nG0pR .framer-10w0tne > :last-child, .framer-nG0pR .framer-1xaektt > :last-child, .framer-nG0pR .framer-1i4j6tm > :last-child, .framer-nG0pR .framer-1013drl > :last-child { margin-bottom: 0px; } .framer-nG0pR .framer-15zyjyk > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-nG0pR .framer-15zyjyk > :first-child, .framer-nG0pR .framer-qw2ikh > :first-child, .framer-nG0pR .framer-1pi5rar > :first-child, .framer-nG0pR .framer-13vfuvn > :first-child, .framer-nG0pR .framer-1uyt8r3 > :first-child, .framer-nG0pR .framer-w3hrdp > :first-child, .framer-nG0pR .framer-1iddyy1 > :first-child, .framer-nG0pR .framer-bbk3ui > :first-child, .framer-nG0pR .framer-13k41d1 > :first-child, .framer-nG0pR .framer-1r8xyd6 > :first-child, .framer-nG0pR .framer-18obioi > :first-child, .framer-nG0pR .framer-not0b7 > :first-child, .framer-nG0pR .framer-177gt34 > :first-child, .framer-nG0pR .framer-z9ukaa > :first-child, .framer-nG0pR .framer-1t9e5cr > :first-child, .framer-nG0pR .framer-1qp37d5 > :first-child, .framer-nG0pR .framer-kt4ktf > :first-child, .framer-nG0pR .framer-yp8vfv > :first-child, .framer-nG0pR .framer-d6ulcc > :first-child, .framer-nG0pR .framer-1aheq3q > :first-child, .framer-nG0pR .framer-tf92a6 > :first-child, .framer-nG0pR .framer-1u8ozc4 > :first-child, .framer-nG0pR .framer-rs1d4 > :first-child, .framer-nG0pR .framer-hippag > :first-child, .framer-nG0pR .framer-1a5t4y > :first-child, .framer-nG0pR .framer-185nj6g > :first-child, .framer-nG0pR .framer-1uwa7vc > :first-child, .framer-nG0pR .framer-1kgaq9y > :first-child, .framer-nG0pR .framer-u221wl > :first-child, .framer-nG0pR .framer-1ngdde4 > :first-child, .framer-nG0pR .framer-1wd9khk > :first-child, .framer-nG0pR .framer-1lrndve > :first-child, .framer-nG0pR .framer-mj7ayi > :first-child { margin-left: 0px; } .framer-nG0pR .framer-15zyjyk > :last-child, .framer-nG0pR .framer-qw2ikh > :last-child, .framer-nG0pR .framer-1pi5rar > :last-child, .framer-nG0pR .framer-13vfuvn > :last-child, .framer-nG0pR .framer-1uyt8r3 > :last-child, .framer-nG0pR .framer-w3hrdp > :last-child, .framer-nG0pR .framer-1iddyy1 > :last-child, .framer-nG0pR .framer-bbk3ui > :last-child, .framer-nG0pR .framer-13k41d1 > :last-child, .framer-nG0pR .framer-1r8xyd6 > :last-child, .framer-nG0pR .framer-18obioi > :last-child, .framer-nG0pR .framer-not0b7 > :last-child, .framer-nG0pR .framer-177gt34 > :last-child, .framer-nG0pR .framer-z9ukaa > :last-child, .framer-nG0pR .framer-1t9e5cr > :last-child, .framer-nG0pR .framer-1qp37d5 > :last-child, .framer-nG0pR .framer-kt4ktf > :last-child, .framer-nG0pR .framer-yp8vfv > :last-child, .framer-nG0pR .framer-d6ulcc > :last-child, .framer-nG0pR .framer-1aheq3q > :last-child, .framer-nG0pR .framer-tf92a6 > :last-child, .framer-nG0pR .framer-1u8ozc4 > :last-child, .framer-nG0pR .framer-rs1d4 > :last-child, .framer-nG0pR .framer-hippag > :last-child, .framer-nG0pR .framer-1a5t4y > :last-child, .framer-nG0pR .framer-185nj6g > :last-child, .framer-nG0pR .framer-1uwa7vc > :last-child, .framer-nG0pR .framer-1kgaq9y > :last-child, .framer-nG0pR .framer-u221wl > :last-child, .framer-nG0pR .framer-1ngdde4 > :last-child, .framer-nG0pR .framer-1wd9khk > :last-child, .framer-nG0pR .framer-1lrndve > :last-child, .framer-nG0pR .framer-mj7ayi > :last-child { margin-right: 0px; } .framer-nG0pR .framer-qw2ikh > *, .framer-nG0pR .framer-13vfuvn > *, .framer-nG0pR .framer-1uyt8r3 > *, .framer-nG0pR .framer-w3hrdp > *, .framer-nG0pR .framer-1iddyy1 > *, .framer-nG0pR .framer-bbk3ui > *, .framer-nG0pR .framer-1r8xyd6 > *, .framer-nG0pR .framer-18obioi > *, .framer-nG0pR .framer-not0b7 > *, .framer-nG0pR .framer-177gt34 > *, .framer-nG0pR .framer-z9ukaa > *, .framer-nG0pR .framer-1t9e5cr > *, .framer-nG0pR .framer-yp8vfv > *, .framer-nG0pR .framer-d6ulcc > *, .framer-nG0pR .framer-1aheq3q > *, .framer-nG0pR .framer-tf92a6 > *, .framer-nG0pR .framer-1u8ozc4 > *, .framer-nG0pR .framer-1a5t4y > *, .framer-nG0pR .framer-1kgaq9y > *, .framer-nG0pR .framer-1ngdde4 > *, .framer-nG0pR .framer-1lrndve > *, .framer-nG0pR .framer-mj7ayi > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-nG0pR .framer-1pi5rar > *, .framer-nG0pR .framer-rs1d4 > *, .framer-nG0pR .framer-hippag > *, .framer-nG0pR .framer-185nj6g > *, .framer-nG0pR .framer-u221wl > *, .framer-nG0pR .framer-1wd9khk > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-nG0pR .framer-13k41d1 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-nG0pR .framer-3upszd > *, .framer-nG0pR .framer-1nmebs1 > *, .framer-nG0pR .framer-krckdj > *, .framer-nG0pR .framer-1013drl > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-nG0pR .framer-1qp37d5 > *, .framer-nG0pR .framer-kt4ktf > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-nG0pR .framer-13ta38r > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-nG0pR .framer-4ssxkq > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-nG0pR .framer-10w0tne > *, .framer-nG0pR .framer-1xaektt > *, .framer-nG0pR .framer-1i4j6tm > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-nG0pR .framer-1uwa7vc > * { margin: 0px; margin-left: calc(200px / 2); margin-right: calc(200px / 2); } }",
    `@media (min-width: 1200px) and (max-width: 1599px) { .${Gr.bodyClassName}-framer-nG0pR { background: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(235, 235, 234)) /* {"name":"Backdrop"} */; } .framer-nG0pR.framer-72rtr7 { width: 1200px; } .framer-nG0pR .framer-1uyt8r3, .framer-nG0pR .framer-w3hrdp, .framer-nG0pR .framer-1iddyy1, .framer-nG0pR .framer-bbk3ui { height: 80px; } .framer-nG0pR .framer-jicr2l-container, .framer-nG0pR .framer-1d79nn7-container { width: 20px; } .framer-nG0pR .framer-nq4nmf, .framer-nG0pR .framer-pl20cu, .framer-nG0pR .framer-1sl0k16 { gap: 4px; } .framer-nG0pR .framer-1hs0epg { width: 100px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-nG0pR .framer-nq4nmf, .framer-nG0pR .framer-pl20cu, .framer-nG0pR .framer-1sl0k16 { gap: 0px; } .framer-nG0pR .framer-nq4nmf > *, .framer-nG0pR .framer-pl20cu > *, .framer-nG0pR .framer-1sl0k16 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-nG0pR .framer-nq4nmf > :first-child, .framer-nG0pR .framer-pl20cu > :first-child, .framer-nG0pR .framer-1sl0k16 > :first-child { margin-top: 0px; } .framer-nG0pR .framer-nq4nmf > :last-child, .framer-nG0pR .framer-pl20cu > :last-child, .framer-nG0pR .framer-1sl0k16 > :last-child { margin-bottom: 0px; } }}`,
    `@media (min-width: 810px) and (max-width: 1199px) { .${Gr.bodyClassName}-framer-nG0pR { background: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(235, 235, 234)) /* {"name":"Backdrop"} */; } .framer-nG0pR.framer-72rtr7 { width: 810px; } .framer-nG0pR .framer-15zyjyk { left: 36px; position: fixed; top: 23px; } .framer-nG0pR .framer-1pi5rar { position: fixed; right: 82px; top: 23px; } .framer-nG0pR .framer-1uyt8r3, .framer-nG0pR .framer-w3hrdp, .framer-nG0pR .framer-1iddyy1, .framer-nG0pR .framer-bbk3ui { height: 60px; } .framer-nG0pR .framer-d6ulcc { position: fixed; top: 23px; } .framer-nG0pR .framer-tf92a6 { right: 16px; top: 16px; width: 122px; } .framer-nG0pR .framer-1nefxy8 { background-color: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, #ebebea) /* {"name":"Backdrop"} */; } .framer-nG0pR .framer-1kgaq9y { left: 20px; right: 20px; width: unset; } .framer-nG0pR .framer-1lrndve { bottom: 40px; top: unset; }}`,
    `@media (max-width: 809px) { .${Gr.bodyClassName}-framer-nG0pR { background: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(235, 235, 234)) /* {"name":"Backdrop"} */; } .framer-nG0pR.framer-72rtr7 { width: 390px; } .framer-nG0pR .framer-15zyjyk { left: 16px; position: fixed; top: 7px; } .framer-nG0pR .framer-1pi5rar { gap: 4px; position: fixed; right: 62px; top: 7px; } .framer-nG0pR .framer-1y8y89e { align-content: center; align-items: center; bottom: 8px; flex-direction: column; gap: 10px; justify-content: flex-end; left: 8px; padding: 0px; right: 8px; } .framer-nG0pR .framer-13k41d1 { align-content: flex-start; align-items: flex-start; flex-wrap: wrap; gap: 10px; justify-content: center; order: 1; overflow: hidden; width: 100%; } .framer-nG0pR .framer-1r8xyd6 { order: 2; padding: 0px 20px 20px 20px; } .framer-nG0pR .framer-18obioi, .framer-nG0pR .framer-not0b7 { order: 0; } .framer-nG0pR .framer-177gt34 { order: 2; } .framer-nG0pR .framer-z9ukaa { order: 1; } .framer-nG0pR .framer-1t9e5cr { order: 3; } .framer-nG0pR .framer-3upszd { left: 50%; right: unset; top: 80px; transform: translateX(-50%); } .framer-nG0pR .framer-d6ulcc { position: fixed; right: 10px; top: 7px; } .framer-nG0pR .framer-tf92a6 { background: linear-gradient(180deg, var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, #ebebea) /* {"name":"Backdrop"} */ 0%, var(--token-c78c5adc-b8aa-4f62-9549-7632a988e6f0, rgba(235, 235, 234, 0.85)) /* {"name":"Backdrop 85"} */ 100%); background-color: unset; border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; left: 0px; right: 0px; top: 0px; width: unset; } .framer-nG0pR .framer-1kdhvtp { background-color: var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, #ebebea) /* {"name":"Backdrop"} */; } .framer-nG0pR .framer-1ngdde4 { left: 0px; right: 0px; width: unset; } .framer-nG0pR .framer-1i4j6tm { padding: 100px 10px 100px 10px; } .framer-nG0pR .framer-1lrndve { bottom: 40px; top: unset; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-nG0pR .framer-1pi5rar, .framer-nG0pR .framer-1y8y89e, .framer-nG0pR .framer-13k41d1 { gap: 0px; } .framer-nG0pR .framer-1pi5rar > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-nG0pR .framer-1pi5rar > :first-child, .framer-nG0pR .framer-13k41d1 > :first-child { margin-left: 0px; } .framer-nG0pR .framer-1pi5rar > :last-child, .framer-nG0pR .framer-13k41d1 > :last-child { margin-right: 0px; } .framer-nG0pR .framer-1y8y89e > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-nG0pR .framer-1y8y89e > :first-child { margin-top: 0px; } .framer-nG0pR .framer-1y8y89e > :last-child { margin-bottom: 0px; } .framer-nG0pR .framer-13k41d1 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }}`,
    ...ut,
    '.framer-nG0pR[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-nG0pR [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '.framer-nG0pR[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-nG0pR [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  Tr = U(J1, Z1, "framer-nG0pR"),
  Bx = Tr;
Tr.displayName = "Home";
Tr.defaultProps = { height: 1e3, width: 1600 };
X(
  Tr,
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
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
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
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2",
          weight: "500",
        },
      ],
    },
    ...Dp,
    ...Lp,
    ...Sp,
    ...jp,
    ...Gp,
    ...Tp,
    ...Vp,
    ...Ep,
    ...Pp,
    ...qp,
    ...Bp,
    ...Mp,
    ...Yp,
    ...Wp,
    ...Jp,
    ...Kp,
    ...e0,
    ...n0,
    ...i0,
    ...m0,
    ...f0,
    ...d0,
    ...p0,
    ...y0,
    ...x0,
    ...w0,
    ...C0,
    ...D0,
    ...N0,
    ...ve(ht),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Xx = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerDisplayContentsDiv: "false",
        framerIntrinsicWidth: "1600",
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"rG1ySt2KS":{"layout":["fixed","auto"]},"dETHUdG53":{"layout":["fixed","auto"]},"wdvlRRgij":{"layout":["fixed","auto"]}}}',
        framerIntrinsicHeight: "1000",
        framerComponentViewportWidth: "true",
        framerResponsiveScreen: "",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Xx as __FramerMetadata__, Bx as default };
//# sourceMappingURL=5Yjfdqumrd598d0Bgxk3o3F43gFwWINSb2OvFV_IwH0.2LH3ZX66.mjs.map
