import {
  Ab as p,
  Bb as m,
  Cb as be,
  Db as Ue,
  Eb as we,
  Fb as Fe,
  Gb as Re,
  Hb as _e,
  Ib as Ve,
  Jb as Pe,
  Kb as Ie,
  Lb as Ne,
  Mb as Le,
  Nb as Ae,
  Ob as Ee,
  Pb as Be,
  Qb as je,
  Ra as ie,
  Sa as le,
  Ta as pe,
  Ua as me,
  Va as de,
  Wa as fe,
  Z as ne,
  _ as oe,
  b as ae,
  fb as ce,
  g as se,
  gb as ue,
  hb as ye,
  mb as he,
  nb as ge,
  ob as ve,
  xb as xe,
  yb as Se,
  zb as Ce,
} from "./chunk-ZEPEXD57.mjs";
import {
  A as o,
  C as J,
  Xa as te,
  _ as Q,
  c as x,
  cb as A,
  g as M,
  ga as t,
  hb as re,
  ja as C,
  jb as s,
  k as K,
  kb as b,
  m as q,
  ma as X,
  p as G,
  q as S,
  qa as L,
  ra as $,
  u as e,
  v as Z,
  wa as ee,
  z as N,
} from "./chunk-NAESFJNX.mjs";
function E(r) {
  let {
      type: a,
      text: d,
      text_chn: f,
      color: c,
      family: l,
      lineheight: n,
      size: i,
      gap: U,
      delay: w,
      status: F,
      visible: D,
      align: R,
      bold: O,
    } = r,
    [_, Te] = se(),
    V = _.language === 1 ? f : d,
    H = Array.from(V),
    Y = V.split(/(\s+)/),
    h = {
      before: {},
      after: { transition: { staggerChildren: U, delayChildren: w } },
    },
    u = {
      before: {
        y: i * n,
        transition: { type: "spring", damping: 40, stiffness: 300 },
      },
      after: {
        y: 0,
        transition: { type: "spring", stiffness: 140, damping: 14 },
      },
    },
    g = S(null),
    P = ae(g, "0% 0% 0% 0%", 0.75),
    v = (I, We) =>
      e(
        o.div,
        {
          layout: "position",
          style: { overflow: "hidden" },
          children: e(o.p, {
            layout: "position",
            style: {
              position: "relative",
              display: "inline-block",
              color: c,
              fontFamily: l,
              fontSize: i,
              fontWeight: O ? 600 : 400,
              lineHeight: n,
              letterSpacing: -0.01,
              padding: 0,
              margin: 0,
            },
            variants: u,
            children: I === " " ? "\xA0" : I,
          }),
        },
        We,
      );
  return e(o.div, {
    ref: g,
    style: {
      display: "flex",
      gap: 0,
      justifyContent: R,
      alignItems: "center",
      overflow: "hidden",
      flexWrap: "wrap",
    },
    variants: h,
    initial: "before",
    animate: D === "manual" ? (F ? "after" : "before") : P ? "after" : "before",
    children: a === "String" ? H.map(v) : Y.map(v),
  });
}
E.defaultProps = {
  type: "String",
  text: "Hello- -World!",
  color: "#ffffff",
  family: "'Cabinet Grotesk', sans-serif",
  lineheight: 1.2,
  size: 48,
  gap: 0.01,
  delay: 0.03,
  status: !0,
  visible: "manual",
  align: "flex-start",
};
C(E, {
  type: { type: t.Enum, title: "Type", options: ["Word", "String"] },
  text: { type: t.String, title: "Text" },
  text_chn: { type: t.String, title: "Text_Chn" },
  color: { type: t.Color, defaultValue: "#fff" },
  family: { type: t.String, title: "Font" },
  size: {
    type: t.Number,
    title: "Size",
    defaultValue: 48,
    min: 0,
    max: 300,
    step: 1,
    displayStepper: !0,
  },
  bold: { type: t.Boolean, title: "Bold", defaultValue: !1 },
  lineheight: {
    type: t.Number,
    title: "Line Height",
    defaultValue: 1.2,
    min: 0,
    max: 300,
    step: 0.1,
    displayStepper: !0,
  },
  gap: {
    type: t.Number,
    title: "Gap",
    defaultValue: 0.03,
    min: 0,
    max: 10,
    step: 0.01,
    displayStepper: !0,
  },
  delay: {
    type: t.Number,
    title: "Delay",
    defaultValue: 0,
    min: 0,
    max: 300,
    step: 0.01,
    displayStepper: !0,
  },
  visible: { type: t.Enum, options: ["auto", "manual"] },
  align: { type: t.Enum, options: ["flex-start", "center", "flex-end"] },
  status: { type: t.Boolean },
});
var B,
  j,
  T,
  W,
  k,
  z,
  Oe = ne(A),
  He = oe(A),
  Ye = ["vVgCzG9Ey"],
  Me = "framer-vNpe1",
  Ke = { vVgCzG9Ey: "framer-v-1vx31bu" };
var qe = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Ge = ({ value: r, children: a }) => {
    let d = K(N),
      f = r ?? d.transition,
      c = G(() => ({ ...d, transition: f }), [JSON.stringify(f)]);
    return e(N.Provider, { value: c, children: a });
  },
  Ze = o(x),
  Je = ({ contentChn: r, contentEn: a, height: d, id: f, width: c, ...l }) => {
    var n, i;
    return {
      ...l,
      VIf0LAdUy:
        (n = a ?? l.VIf0LAdUy) !== null && n !== void 0
          ? n
          : e(x, {
              children: e(o.p, {
                children:
                  "As an early participant in XR device research, I contributed to the design of two products. One was a lightweight AR glasses, intended as a wearable product for daily use, providing functions such as translation, navigation, and notifications (later evolved into OPPO AIR GLASS). The other was an AR head-mounted display, supporting multi-degree interaction and using a phone as the computing hub to provide an immersive user interface.",
              }),
            }),
      WBP1YB7T1:
        (i = r ?? l.WBP1YB7T1) !== null && i !== void 0
          ? i
          : e(x, { children: e(o.p, { children: "\u4E2D\u6587" }) }),
    };
  },
  Qe = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Xe = M(function (r, a) {
    let { activeLocale: d, setLocale: f } = Q(),
      {
        style: c,
        className: l,
        layoutId: n,
        variant: i,
        VIf0LAdUy: U,
        WBP1YB7T1: w,
        ...F
      } = Je(r),
      {
        baseVariant: D,
        classNames: R,
        clearLoadingGesture: O,
        gestureHandlers: _,
        gestureVariant: Te,
        isLoading: V,
        setGestureState: H,
        setVariant: Y,
        variants: h,
      } = te({
        cycleOrder: Ye,
        defaultVariant: "vVgCzG9Ey",
        variant: i,
        variantClassNames: Ke,
      }),
      u = Qe(r, h),
      g = S(null),
      P = q(),
      v = [_e, Ce, ye, fe, ve, we, pe, Ae, je, Ie],
      I = $();
    return e(J, {
      id: n ?? P,
      children: e(Ze, {
        animate: h,
        initial: !1,
        children: e(Ge, {
          value: qe,
          children: Z(o.div, {
            ...F,
            ..._,
            className: X(Me, ...v, "framer-1vx31bu", l, R),
            "data-framer-name": "Default",
            layoutDependency: u,
            layoutId: "vVgCzG9Ey",
            ref: a ?? g,
            style: { ...c },
            children: [
              e(L, {
                presets: {
                  "module:0sWquksFr1YDkaIgrl9Z/VgWe6mCMJOseqaLiMnaC/Vimeo.js:default":
                    p.J4SZ0W0SK,
                  "module:NEd4VmDdsxM3StIUbddO/9rhBPUZttCbLCWqJEL42/YouTube.js:Youtube":
                    p.R2sRbbYzf,
                  "module:pVk4QsoHxASnVtUBp6jr/TbhpORLndv1iOkZzyo83/CodeBlock.js:default":
                    p.HKlErOHWQ,
                },
                children: e(Oe, {
                  __fromCanvasComponent: !0,
                  children: U,
                  className: "framer-snt8fx",
                  "data-framer-name": "En",
                  fonts: ["Inter"],
                  layoutDependency: u,
                  layoutId: "ns6b5XD1j",
                  stylesPresetsClassNames: {
                    a: "framer-styles-preset-i9szyw",
                    code: "framer-styles-preset-cfixqb",
                    h1: "framer-styles-preset-13b00jl",
                    h2: "framer-styles-preset-1jzss2t",
                    h3: "framer-styles-preset-1k07u1u",
                    h4: "framer-styles-preset-1w7o0dx",
                    h5: "framer-styles-preset-9k6rgp",
                    h6: "framer-styles-preset-1v9m5cz",
                    img: "framer-styles-preset-cgjq4j",
                    p: "framer-styles-preset-1wxnimg",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
              e(L, {
                presets: {
                  "module:0sWquksFr1YDkaIgrl9Z/VgWe6mCMJOseqaLiMnaC/Vimeo.js:default":
                    p.J4SZ0W0SK,
                  "module:NEd4VmDdsxM3StIUbddO/9rhBPUZttCbLCWqJEL42/YouTube.js:Youtube":
                    p.R2sRbbYzf,
                  "module:pVk4QsoHxASnVtUBp6jr/TbhpORLndv1iOkZzyo83/CodeBlock.js:default":
                    p.HKlErOHWQ,
                },
                children: e(He, {
                  __fromCanvasComponent: !0,
                  children: w,
                  className: "framer-1qbd9zs",
                  "data-framer-name": "Chn",
                  fonts: ["Inter"],
                  layoutDependency: u,
                  layoutId: "Y6lNg7uMt",
                  stylesPresetsClassNames: {
                    a: "framer-styles-preset-i9szyw",
                    code: "framer-styles-preset-cfixqb",
                    h1: "framer-styles-preset-13b00jl",
                    h2: "framer-styles-preset-1jzss2t",
                    h3: "framer-styles-preset-1k07u1u",
                    h4: "framer-styles-preset-1w7o0dx",
                    h5: "framer-styles-preset-9k6rgp",
                    h6: "framer-styles-preset-1v9m5cz",
                    img: "framer-styles-preset-cgjq4j",
                    p: "framer-styles-preset-1wxnimg",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  $e = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-vNpe1.framer-1iyxejl, .framer-vNpe1 .framer-1iyxejl { display: block; }",
    ".framer-vNpe1.framer-1vx31bu { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 780px; }",
    ".framer-vNpe1 .framer-snt8fx, .framer-vNpe1 .framer-1qbd9zs { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vNpe1.framer-1vx31bu { gap: 0px; } .framer-vNpe1.framer-1vx31bu > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-vNpe1.framer-1vx31bu > :first-child { margin-top: 0px; } .framer-vNpe1.framer-1vx31bu > :last-child { margin-bottom: 0px; } }",
    ...Re,
    ...Se,
    ...ue,
    ...de,
    ...ge,
    ...Ue,
    ...le,
    ...Le,
    ...Be,
    ...Pe,
  ],
  y = ee(Xe, $e, "framer-vNpe1"),
  wt = y;
y.displayName = "Utilities/RichText";
y.defaultProps = { height: 241, width: 780 };
C(y, {
  VIf0LAdUy: {
    defaultValue:
      "<p>As an early participant in XR device research, I contributed to the design of two products. One was a lightweight AR glasses, intended as a wearable product for daily use, providing functions such as translation, navigation, and notifications (later evolved into OPPO AIR GLASS). The other was an AR head-mounted display, supporting multi-degree interaction and using a phone as the computing hub to provide an immersive user interface.</p>",
    title: "Content_En",
    type: t.RichText,
  },
  WBP1YB7T1: {
    defaultValue: "<p>\u4E2D\u6587</p>",
    title: "Content_Chn",
    type: t.RichText,
  },
});
re(
  y,
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
    ...s(Fe),
    ...s(xe),
    ...s(ce),
    ...s(me),
    ...s(he),
    ...s(be),
    ...s(ie),
    ...s(Ne),
    ...s(Ee),
    ...s(Ve),
    ...(!((B = m) === null || B === void 0) && B.HKlErOHWQ
      ? b((j = m) === null || j === void 0 ? void 0 : j.HKlErOHWQ)
      : []),
    ...(!((T = m) === null || T === void 0) && T.J4SZ0W0SK
      ? b((W = m) === null || W === void 0 ? void 0 : W.J4SZ0W0SK)
      : []),
    ...(!((k = m) === null || k === void 0) && k.R2sRbbYzf
      ? b((z = m) === null || z === void 0 ? void 0 : z.R2sRbbYzf)
      : []),
  ],
  { supportsExplicitInterCodegen: !0 },
);
export { E as a, wt as b };
//# sourceMappingURL=chunk-645JPX5U.mjs.map
