import { G as St, lb as kt } from "./chunk-ZEPEXD57.mjs";
import {
  A as P,
  C as ge,
  D as pt,
  F as N,
  L as U,
  M as mt,
  P as ht,
  Xa as bt,
  _ as gt,
  b as Le,
  c as lt,
  d as dt,
  ea as _e,
  eb as xt,
  f as ut,
  g as me,
  ga as t,
  hb as Ct,
  j as Re,
  ja as ye,
  k as ft,
  l as X,
  m as ct,
  ma as yt,
  o as Be,
  p as he,
  q as K,
  r as V,
  ra as wt,
  u as a,
  v as oe,
  wa as vt,
  z as Te,
} from "./chunk-NAESFJNX.mjs";
var yo = St(P.div),
  wo = {
    dx_y2JlL9: { hover: !0 },
    MVosqfaXe: { hover: !0 },
    QjpnfpvSY: { hover: !0 },
    rni1LOOGa: { hover: !0 },
    ThKdiVMMI: { hover: !0 },
  },
  vo = ["rni1LOOGa", "MVosqfaXe", "ThKdiVMMI", "dx_y2JlL9", "QjpnfpvSY"],
  bo = "framer-XQDtk",
  xo = {
    dx_y2JlL9: "framer-v-bqdmlk",
    MVosqfaXe: "framer-v-1y6re34",
    QjpnfpvSY: "framer-v-u87f5t",
    rni1LOOGa: "framer-v-gxfv31",
    ThKdiVMMI: "framer-v-1uty10s",
  };
function Vt(e, ...l) {
  let d = {};
  return l?.forEach((r) => r && Object.assign(d, e[r])), d;
}
var Co = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  So = ({ value: e, children: l }) => {
    let d = ft(Te),
      r = e ?? d.transition,
      p = he(() => ({ ...d, transition: r }), [JSON.stringify(r)]);
    return a(Te.Provider, { value: p, children: l });
  },
  ko = P(lt),
  Vo = {
    AlwaysDark: "QjpnfpvSY",
    AlwaysLight: "dx_y2JlL9",
    Dark: "ThKdiVMMI",
    Default: "rni1LOOGa",
    Light: "MVosqfaXe",
  },
  Po = ({ height: e, id: l, width: d, ...r }) => {
    var p, v;
    return {
      ...r,
      variant:
        (v = (p = Vo[r.variant]) !== null && p !== void 0 ? p : r.variant) !==
          null && v !== void 0
          ? v
          : "rni1LOOGa",
    };
  },
  Mo = (e, l) =>
    e.layoutDependency ? l.join("-") + e.layoutDependency : l.join("-"),
  Io = me(function (e, l) {
    let { activeLocale: d, setLocale: r } = gt(),
      { style: p, className: v, layoutId: k, variant: H, ...u } = Po(e),
      {
        baseVariant: n,
        classNames: b,
        clearLoadingGesture: x,
        gestureHandlers: q,
        gestureVariant: M,
        isLoading: h,
        setGestureState: I,
        setVariant: j,
        variants: D,
      } = bt({
        cycleOrder: vo,
        defaultVariant: "rni1LOOGa",
        enabledGestures: wo,
        variant: H,
        variantClassNames: xo,
      }),
      g = Mo(e, D),
      T = K(null),
      ne = ct(),
      F = [],
      ae = wt();
    return a(ge, {
      id: k ?? ne,
      children: a(ko, {
        animate: D,
        initial: !1,
        children: a(So, {
          value: Co,
          children: a(P.div, {
            ...u,
            ...q,
            className: yt(bo, ...F, "framer-gxfv31", v, b),
            "data-framer-name": "Default",
            layoutDependency: g,
            layoutId: "rni1LOOGa",
            ref: l ?? T,
            style: { ...p },
            ...Vt(
              {
                "dx_y2JlL9-hover": { "data-framer-name": void 0 },
                "MVosqfaXe-hover": { "data-framer-name": void 0 },
                "QjpnfpvSY-hover": { "data-framer-name": void 0 },
                "rni1LOOGa-hover": { "data-framer-name": void 0 },
                "ThKdiVMMI-hover": { "data-framer-name": void 0 },
                dx_y2JlL9: { "data-framer-name": "AlwaysLight" },
                MVosqfaXe: { "data-framer-name": "Light" },
                QjpnfpvSY: { "data-framer-name": "AlwaysDark" },
                ThKdiVMMI: { "data-framer-name": "Dark" },
              },
              n,
              M,
            ),
            children: a(yo, {
              className: "framer-1yf5own",
              layoutDependency: g,
              layoutId: "rni1LOOGasInDfVhgf",
              style: {
                backgroundColor:
                  "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
                borderBottomLeftRadius: 42,
                borderBottomRightRadius: 42,
                borderTopLeftRadius: 42,
                borderTopRightRadius: 42,
              },
              variants: {
                "dx_y2JlL9-hover": {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                },
                "MVosqfaXe-hover": {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                },
                "QjpnfpvSY-hover": {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                },
                "rni1LOOGa-hover": {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                },
                "ThKdiVMMI-hover": {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                },
              },
              children: a(xt, {
                className: "framer-hdemtz",
                "data-framer-name": "graphic",
                layout: "position",
                layoutDependency: g,
                layoutId: "rni1LOOGaJdVVNWd2X",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 15 6 C 15 6 9 10.419 9 12 C 9 13.581 15 18 15 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                svgContentId: 11093982910,
                withExternalLayout: !0,
                ...Vt(
                  {
                    "dx_y2JlL9-hover": {
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 15 6 C 15 6 9 10.419 9 12 C 9 13.581 15 18 15 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 11093982910,
                    },
                    "MVosqfaXe-hover": {
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 15 6 C 15 6 9 10.419 9 12 C 9 13.581 15 18 15 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 11093982910,
                    },
                    "QjpnfpvSY-hover": {
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 15 6 C 15 6 9 10.419 9 12 C 9 13.581 15 18 15 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 11093982910,
                    },
                    dx_y2JlL9: {
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 15 6 C 15 6 9 10.419 9 12 C 9 13.581 15 18 15 18" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 11136151854,
                    },
                    MVosqfaXe: {
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 15 6 C 15 6 9 10.419 9 12 C 9 13.581 15 18 15 18" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 12194471036,
                    },
                    QjpnfpvSY: {
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 15 6 C 15 6 9 10.419 9 12 C 9 13.581 15 18 15 18" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 10548670271,
                    },
                  },
                  n,
                  M,
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Do = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-XQDtk.framer-qnuvs5, .framer-XQDtk .framer-qnuvs5 { display: block; }",
    ".framer-XQDtk.framer-gxfv31 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: hidden; padding: 0px; pointer-events: auto; position: relative; width: 42px; }",
    ".framer-XQDtk .framer-1yf5own { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 42px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-XQDtk .framer-hdemtz { flex: none; height: 24px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-XQDtk.framer-gxfv31, .framer-XQDtk .framer-1yf5own { gap: 0px; } .framer-XQDtk.framer-gxfv31 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-XQDtk.framer-gxfv31 > :first-child, .framer-XQDtk .framer-1yf5own > :first-child { margin-left: 0px; } .framer-XQDtk.framer-gxfv31 > :last-child, .framer-XQDtk .framer-1yf5own > :last-child { margin-right: 0px; } .framer-XQDtk .framer-1yf5own > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } }",
  ],
  re = vt(Io, Do, "framer-XQDtk"),
  Eo = re;
re.displayName = "Button/Previous";
re.defaultProps = { height: 42, width: 42 };
ye(re, {
  variant: {
    options: ["rni1LOOGa", "MVosqfaXe", "ThKdiVMMI", "dx_y2JlL9", "QjpnfpvSY"],
    optionTitles: ["Default", "Light", "Dark", "AlwaysLight", "AlwaysDark"],
    title: "Variant",
    type: t.Enum,
  },
});
Ct(re, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var we = () => typeof document == "object";
function Oo() {
  if (we()) {
    if (typeof document.hidden < "u") return "visibilitychange";
    if (typeof document.msHidden < "u") return "msvisibilitychange";
    if (typeof document.webkitHidden < "u") return "webkitvisibilitychange";
  }
}
function Lo() {
  if (we()) {
    if (typeof document.hidden < "u") return "hidden";
    if (typeof document.msHidden < "u") return "msHidden";
    if (typeof document.webkitHidden < "u") return "webkitHidden";
  }
}
function Dt() {
  if (we()) return !document[Lo()];
}
function Ot() {
  if (!we()) return;
  let [e, l] = V(Dt()),
    d = () => l(Dt());
  return (
    X(() => {
      let r = Oo();
      return (
        document.addEventListener(r, d, !1),
        () => {
          document.removeEventListener(r, d);
        }
      );
    }),
    e
  );
}
var Ne = 0.001;
function c(e) {
  let {
      slots: l,
      startFrom: d,
      direction: r,
      effectsOptions: p,
      autoPlayControl: v,
      dragControl: k,
      alignment: H,
      gap: u,
      padding: n,
      paddingPerSide: b,
      paddingTop: x,
      paddingRight: q,
      paddingBottom: M,
      paddingLeft: h,
      itemAmount: I,
      fadeOptions: j,
      intervalControl: D,
      transitionControl: g,
      arrowOptions: T,
      borderRadius: ne,
      progressOptions: F,
      style: ae,
    } = e,
    {
      effectsOpacity: O,
      effectsScale: ve,
      effectsRotate: ie,
      effectsPerspective: be,
      effectsHover: se,
    } = p,
    {
      fadeContent: A,
      overflow: le,
      fadeWidth: L,
      fadeInset: W,
      fadeAlpha: je,
    } = j,
    {
      showMouseControls: Xe,
      arrowSize: _,
      arrowRadius: qe,
      arrowFill: Fe,
      leftArrow: Rt,
      rightArrow: Bt,
      arrowShouldSpace: G = !0,
      arrowShouldFadeIn: Ae = !1,
      arrowPosition: y,
      arrowPadding: Z,
      arrowGap: Tt,
      arrowPaddingTop: _t,
      arrowPaddingRight: Nt,
      arrowPaddingBottom: Ht,
      arrowPaddingLeft: jt,
    } = T,
    {
      showProgressDots: Xt,
      dotSize: We,
      dotsInset: Ge,
      dotsRadius: qt,
      dotsPadding: Ft,
      dotsGap: At,
      dotsFill: Wt,
      dotsBackground: Gt,
      dotsActiveOpacity: Qt,
      dotsOpacity: zt,
      dotsBlur: Qe,
    } = F,
    Et = b ? `${x}px ${q}px ${M}px ${h}px` : `${n}px`,
    R = _e.current() === _e.canvas,
    m = l.filter(Boolean),
    Q = Le.count(m) > 0,
    i = r === "left" || r === "right",
    de = r === "right" || r === "bottom";
  if (!Q)
    return oe("section", {
      style: Ro,
      children: [
        a("div", { style: Bo, children: "\u2B50\uFE0F" }),
        a("p", { style: To, children: "Connect to Content" }),
        a("p", {
          style: _o,
          children:
            "Add layers or components to make infinite auto-playing slideshows.",
        }),
      ],
    });
  let ee = K(null),
    f = he(() => m.map((o) => ut()), [m]),
    xe = K(void 0),
    [s, Yt] = V({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
    }),
    [$t, ze] = V(!1),
    [Jt, Ee] = V(v),
    [Kt, Ye] = V(!1),
    [z, $e] = V(!1),
    Ce = [],
    Je = 4;
  R && (Je = 1);
  let Ke = Re(() => {
      if (Q && ee.current) {
        let o = m.length - 1,
          S = i ? ee.current.offsetWidth : ee.current.offsetHeight,
          w = f[0].current
            ? i
              ? f[0].current.offsetLeft
              : f[0].current.offsetTop
            : 0,
          J =
            (f[o].current
              ? i
                ? f[o].current.offsetLeft + f[o].current.offsetWidth
                : f[o].current.offsetTop + f[o].current.offsetHeight
              : 0) -
            w +
            u,
          ce = f[0].current
            ? i
              ? f[0].current.offsetWidth
              : f[0].current.offsetHeight
            : 0,
          De = f[0].current ? f[0].current.offsetWidth : 0,
          Oe = f[0].current ? f[0].current.offsetHeight : 0;
        Yt({ parent: S, children: J, item: ce, itemWidth: De, itemHeight: Oe });
      }
    }, [Q]),
    Ue = Re(() => {
      ht.read(Ke);
    }, [Ke]);
  Be(() => {
    Q && Ue();
  }, [Q, I]);
  let Se = K(!0);
  X(
    () =>
      kt(ee.current, ({ contentSize: o }) => {
        !Se.current && (o.width || o.height) && (Ue(), $e(!0)),
          (Se.current = !1);
      }),
    [],
  ),
    X(() => {
      if (z) {
        let o = setTimeout(() => $e(!1), 500);
        return () => clearTimeout(o);
      }
    }, [z]);
  let E = m?.length,
    ue = R ? 0 : s?.children,
    ke = s?.item + u,
    Ut = d * ke,
    [C, te] = V(d + E),
    [Zt, Ze] = V(!1),
    et = Ot(),
    tt = de ? 1 : -1,
    Y = pt(ue),
    ot = i ? -d * (s?.itemWidth + u) : -d * (s?.itemHeight + u),
    Ve = () => tt * C * ke,
    Pe = R
      ? 0
      : N(Y, (o) => {
          let S = U(-ue, -ue * 2, o);
          return isNaN(S) ? 0 : S;
        }),
    eo = U(0, E, C),
    to = U(0, -E, C);
  Be(() => {
    s?.children !== null && !Se.current && z && Y.set(Ve());
  }, [s, ue, tt, Ut, C, ke, z]);
  let rt = () => {
      R ||
        !Q ||
        !s.parent ||
        Zt ||
        (Y.get() !== Ve() && mt(Y, Ve(), g),
        v &&
          Jt &&
          (xe.current = setTimeout(() => {
            te(C + 1), rt();
          }, D * 1e3)));
    },
    $ = (o) => {
      te(de ? C - o : C + o);
    },
    oo = (o) => {
      let S = U(0, E, C),
        w = U(0, -E, C),
        B = o - S,
        J = o - Math.abs(w);
      te(de ? C - J : C + B);
    },
    ro = () => {
      Ze(!0);
    },
    no = (o, { offset: S, velocity: w }) => {
      Ze(!1);
      let B = i ? S.x : S.y,
        J = 200,
        ce = i ? w.x : w.y,
        De = B < -s.item / 2,
        Oe = B > s.item / 2,
        go = Math.abs(B),
        pe = Math.round(go / s.item),
        st = pe === 0 ? 1 : pe;
      ce > J ? $(-st) : ce < -J ? $(st) : (De && $(pe), Oe && $(-pe));
    };
  X(() => {
    if (!(!et || z)) return rt(), () => xe.current && clearTimeout(xe.current);
  }, [Ce, et, z]);
  let ao = 0,
    nt = `calc(${100 / I}% - ${u}px + ${u / I}px)`;
  for (let o = 0; o < Je; o++)
    Ce.push(
      ...Le.map(m, (S, w) => {
        let B;
        return (
          w === 0 && (B = f[0]),
          w === m.length - 1 && (B = f[1]),
          a(
            jo,
            {
              ref: f[w],
              slideKey: o + w + "lg",
              index: o,
              width: i && I > 1 ? nt : "100%",
              height: i ? "100%" : I > 1 ? nt : "100%",
              size: s,
              child: S,
              numChildren: m?.length,
              wrappedValue: Pe,
              childCounter: ao++,
              gap: u,
              isCanvas: R,
              isHorizontal: i,
              effectsOpacity: O,
              effectsScale: ve,
              effectsRotate: ie,
              children: o + w,
            },
            o + w + "lg",
          )
        );
      }),
    );
  let io = i ? "to right" : "to bottom",
    at = L / 2,
    so = 100 - L / 2,
    lo = Ho(W, 0, at),
    uo = 100 - W,
    Me = `linear-gradient(${io}, rgba(0, 0, 0, ${je}) ${lo}%, rgba(0, 0, 0, 1) ${at}%, rgba(0, 0, 0, 1) ${so}%, rgba(0, 0, 0, ${je}) ${uo}%)`,
    Ie = [],
    fe = {};
  if (Xt) {
    for (let o = 0; o < m?.length; o++)
      Ie.push(
        a(
          Xo,
          {
            dotStyle: { ...Fo, width: We, height: We, backgroundColor: Wt },
            buttonStyle: He,
            selectedOpacity: Qt,
            opacity: zt,
            onClick: () => oo(o),
            wrappedIndex: eo,
            wrappedIndexInverted: to,
            total: E,
            index: o,
            gap: At,
            padding: Ft,
            isHorizontal: i,
            isInverted: de,
          },
          o,
        ),
      );
    Qe > 0 &&
      (fe.backdropFilter =
        fe.WebkitBackdropFilter =
        fe.MozBackdropFilter =
          `blur(${Qe}px)`);
  }
  let fo = k
      ? {
          drag: i ? "x" : "y",
          onDragStart: ro,
          onDragEnd: no,
          dragDirectionLock: !0,
          values: { x: Y, y: Y },
          dragMomentum: !1,
        }
      : {},
    co = y === "top-left" || y === "top-mid" || y === "top-right",
    po = y === "bottom-left" || y === "bottom-mid" || y === "bottom-right",
    mo = y === "top-left" || y === "bottom-left",
    ho = y === "top-right" || y === "bottom-right",
    it = y === "top-mid" || y === "bottom-mid" || y === "auto";
  return oe("section", {
    style: {
      ...Lt,
      padding: Et,
      WebkitMaskImage: A ? Me : void 0,
      MozMaskImage: A ? Me : void 0,
      maskImage: A ? Me : void 0,
      opacity: s?.item !== null ? 1 : Ne,
      userSelect: "none",
    },
    onMouseEnter: () => {
      ze(!0), se || Ee(!1);
    },
    onMouseLeave: () => {
      ze(!1), se || Ee(!0);
    },
    onMouseDown: (o) => {
      o.preventDefault(), Ye(!0);
    },
    onMouseUp: () => Ye(!1),
    children: [
      a("div", {
        style: {
          width: "100%",
          height: "100%",
          margin: 0,
          padding: "inherit",
          position: "absolute",
          inset: 0,
          overflow: le ? "visible" : "hidden",
          borderRadius: ne,
          userSelect: "none",
          perspective: R ? "none" : be,
        },
        children: a(P.ul, {
          ref: ee,
          ...fo,
          style: {
            ...Lt,
            gap: u,
            placeItems: H,
            x: i ? (R ? ot : Pe) : 0,
            y: i ? 0 : R ? ot : Pe,
            flexDirection: i ? "row" : "column",
            transformStyle: ie !== 0 && !R ? "preserve-3d" : void 0,
            cursor: k ? (Kt ? "grabbing" : "grab") : "auto",
            userSelect: "none",
            ...ae,
          },
          children: Ce,
        }),
      }),
      oe("fieldset", {
        style: { ...No },
        "aria-label": "Slideshow pagination controls",
        className: "framer--slideshow-controls",
        children: [
          oe(P.div, {
            style: {
              position: "absolute",
              display: "flex",
              flexDirection: i ? "row" : "column",
              justifyContent: G ? "space-between" : "center",
              gap: G ? "unset" : Tt,
              opacity: Ae ? Ne : 1,
              alignItems: "center",
              inset: Z,
              top: G ? Z : co ? _t : "unset",
              left: G ? Z : mo ? jt : it ? 0 : "unset",
              right: G ? Z : ho ? Nt : it ? 0 : "unset",
              bottom: G ? Z : po ? Ht : "unset",
            },
            animate: Ae && { opacity: $t ? 1 : Ne },
            transition: g,
            children: [
              a(P.button, {
                type: "button",
                style: {
                  ...He,
                  backgroundColor: Fe,
                  width: _,
                  height: _,
                  borderRadius: qe,
                  rotate: i ? 0 : 90,
                  display: Xe ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => $(-1),
                "aria-label": "Previous",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: a("img", {
                  width: _,
                  height: _,
                  src:
                    Rt ||
                    "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                  alt: "Back Arrow",
                }),
              }),
              a(P.button, {
                type: "button",
                style: {
                  ...He,
                  backgroundColor: Fe,
                  width: _,
                  height: _,
                  borderRadius: qe,
                  rotate: i ? 0 : 90,
                  display: Xe ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => $(1),
                "aria-label": "Next",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: a("img", {
                  width: _,
                  height: _,
                  src:
                    Bt ||
                    "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                  alt: "Next Arrow",
                }),
              }),
            ],
          }),
          Ie.length > 1
            ? a("div", {
                style: {
                  ...qo,
                  left: i ? "50%" : Ge,
                  top: i ? "unset" : "50%",
                  transform: i ? "translateX(-50%)" : "translateY(-50%)",
                  flexDirection: i ? "row" : "column",
                  bottom: i ? Ge : "unset",
                  borderRadius: qt,
                  backgroundColor: Gt,
                  userSelect: "none",
                  ...fe,
                },
                children: Ie,
              })
            : null,
        ],
      }),
    ],
  });
}
c.defaultProps = {
  direction: "left",
  dragControl: !1,
  startFrom: 0,
  itemAmount: 1,
  infinity: !0,
  gap: 10,
  padding: 10,
  autoPlayControl: !0,
  effectsOptions: {
    effectsOpacity: 1,
    effectsScale: 1,
    effectsRotate: 0,
    effectsPerspective: 1200,
    effectsHover: !0,
  },
  transitionControl: { type: "spring", stiffness: 200, damping: 40 },
  fadeOptions: {
    fadeContent: !1,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  arrowOptions: {
    showMouseControls: !0,
    arrowShouldFadeIn: !1,
    arrowShouldSpace: !0,
    arrowFill: "rgba(0,0,0,0.2)",
    arrowSize: 40,
  },
  progressOptions: { showProgressDots: !0 },
};
ye(c, {
  slots: {
    type: t.Array,
    title: "Content",
    control: { type: t.ComponentInstance },
  },
  direction: {
    type: t.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    displaySegmentedControl: !0,
    defaultValue: c.defaultProps.direction,
  },
  autoPlayControl: { type: t.Boolean, title: "Auto Play", defaultValue: !0 },
  intervalControl: {
    type: t.Number,
    title: "Interval",
    defaultValue: 1.5,
    min: 0.5,
    max: 10,
    step: 0.1,
    displayStepper: !0,
    unit: "s",
    hidden: (e) => !e.autoPlayControl,
  },
  dragControl: { type: t.Boolean, title: "Draggable", defaultValue: !1 },
  startFrom: {
    type: t.Number,
    title: "Current",
    min: 0,
    max: 10,
    displayStepper: !0,
    defaultValue: c.defaultProps.startFrom,
  },
  effectsOptions: {
    type: t.Object,
    title: "Effects",
    controls: {
      effectsOpacity: {
        type: t.Number,
        title: "Opacity",
        defaultValue: c.defaultProps.effectsOptions.effectsOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsScale: {
        type: t.Number,
        title: "Scale",
        defaultValue: c.defaultProps.effectsOptions.effectsScale,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsPerspective: {
        type: t.Number,
        title: "Perspective",
        defaultValue: c.defaultProps.effectsOptions.effectsPerspective,
        min: 200,
        max: 2e3,
        step: 1,
      },
      effectsRotate: {
        type: t.Number,
        title: "Rotate",
        defaultValue: c.defaultProps.effectsOptions.effectsRotate,
        min: -180,
        max: 180,
        step: 1,
      },
      effectsHover: {
        type: t.Boolean,
        title: "On Hover",
        enabledTitle: "Play",
        disabledTitle: "Pause",
        defaultValue: c.defaultProps.effectsOptions.effectsHover,
      },
    },
  },
  alignment: {
    type: t.Enum,
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
  itemAmount: {
    type: t.Number,
    title: "Items",
    min: 1,
    max: 10,
    displayStepper: !0,
    defaultValue: c.defaultProps.itemAmount,
  },
  gap: { type: t.Number, title: "Gap", min: 0 },
  padding: {
    title: "Padding",
    type: t.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    defaultValue: 0,
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  borderRadius: {
    type: t.Number,
    title: "Radius",
    min: 0,
    max: 500,
    displayStepper: !0,
    defaultValue: 0,
  },
  transitionControl: {
    type: t.Transition,
    defaultValue: c.defaultProps.transitionControl,
    title: "Transition",
  },
  fadeOptions: {
    type: t.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: t.Boolean, title: "Fade", defaultValue: !1 },
      overflow: {
        type: t.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(e) {
          return e.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: t.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeInset: {
        type: t.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: t.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
    },
  },
  arrowOptions: {
    type: t.Object,
    title: "Arrows",
    controls: {
      showMouseControls: {
        type: t.Boolean,
        title: "Show",
        defaultValue: c.defaultProps.arrowOptions.showMouseControls,
      },
      arrowFill: {
        type: t.Color,
        title: "Fill",
        hidden: (e) => !e.showMouseControls,
        defaultValue: c.defaultProps.arrowOptions.arrowFill,
      },
      leftArrow: {
        type: t.Image,
        title: "Previous",
        hidden: (e) => !e.showMouseControls,
      },
      rightArrow: {
        type: t.Image,
        title: "Next",
        hidden: (e) => !e.showMouseControls,
      },
      arrowSize: {
        type: t.Number,
        title: "Size",
        min: 0,
        max: 200,
        displayStepper: !0,
        defaultValue: c.defaultProps.arrowOptions.arrowSize,
        hidden: (e) => !e.showMouseControls,
      },
      arrowRadius: {
        type: t.Number,
        title: "Radius",
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (e) => !e.showMouseControls,
      },
      arrowShouldFadeIn: {
        type: t.Boolean,
        title: "Fade In",
        defaultValue: !1,
        hidden: (e) => !e.showMouseControls,
      },
      arrowShouldSpace: {
        type: t.Boolean,
        title: "Distance",
        enabledTitle: "Space",
        disabledTitle: "Group",
        defaultValue: c.defaultProps.arrowOptions.arrowShouldSpace,
        hidden: (e) => !e.showMouseControls,
      },
      arrowPosition: {
        type: t.Enum,
        title: "Position",
        options: [
          "auto",
          "top-left",
          "top-mid",
          "top-right",
          "bottom-left",
          "bottom-mid",
          "bottom-right",
        ],
        optionTitles: [
          "Center",
          "Top Left",
          "Top Middle",
          "Top Right",
          "Bottom Left",
          "Bottom Middle",
          "Bottom Right",
        ],
        hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
      },
      arrowPadding: {
        type: t.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 20,
        displayStepper: !0,
        hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
      },
      arrowPaddingTop: {
        type: t.Number,
        title: "Top",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "bottom-mid" ||
          e.arrowPosition === "bottom-left" ||
          e.arrowPosition === "bottom-right",
      },
      arrowPaddingBottom: {
        type: t.Number,
        title: "Bottom",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "top-mid" ||
          e.arrowPosition === "top-left" ||
          e.arrowPosition === "top-right",
      },
      arrowPaddingRight: {
        type: t.Number,
        title: "Right",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "top-left" ||
          e.arrowPosition === "top-mid" ||
          e.arrowPosition === "bottom-left" ||
          e.arrowPosition === "bottom-mid",
      },
      arrowPaddingLeft: {
        type: t.Number,
        title: "Left",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "top-right" ||
          e.arrowPosition === "top-mid" ||
          e.arrowPosition === "bottom-right" ||
          e.arrowPosition === "bottom-mid",
      },
      arrowGap: {
        type: t.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
      },
    },
  },
  progressOptions: {
    type: t.Object,
    title: "Dots",
    controls: {
      showProgressDots: { type: t.Boolean, title: "Show", defaultValue: !1 },
      dotSize: {
        type: t.Number,
        title: "Size",
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsInset: {
        type: t.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsGap: {
        type: t.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsPadding: {
        type: t.Number,
        title: "Padding",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsFill: {
        type: t.Color,
        title: "Fill",
        defaultValue: "#fff",
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsBackground: {
        type: t.Color,
        title: "Backdrop",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsRadius: {
        type: t.Number,
        title: "Radius",
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsOpacity: {
        type: t.Number,
        title: "Opacity",
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsActiveOpacity: {
        type: t.Number,
        title: "Current",
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsBlur: {
        type: t.Number,
        title: "Blur",
        min: 0,
        max: 50,
        defaultValue: 0,
        step: 1,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
    },
  },
});
var Lt = {
    display: "flex",
    flexDirection: "row",
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
  Ro = {
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
  Bo = { fontSize: 32, marginBottom: 10 },
  To = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  _o = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 180,
    lineHeight: 1.5,
    textAlign: "center",
  },
  He = {
    border: "none",
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    background: "transparent",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
  No = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    pointerEvents: "none",
    userSelect: "none",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  Ho = (e, l, d) => Math.min(Math.max(e, l), d),
  jo = me(function (l, d) {
    var r, p;
    let {
        slideKey: v,
        width: k,
        height: H,
        child: u,
        size: n,
        gap: b,
        wrappedValue: x,
        numChildren: q,
        childCounter: M,
        isCanvas: h,
        effects: I,
        effectsOpacity: j,
        effectsScale: D,
        effectsRotate: g,
        isHorizontal: T,
        isLast: ne,
        index: F,
      } = l,
      ae = (n?.item + b) * M,
      O = [-n?.item, 0, n?.parent - n?.item + b, n?.parent].map((L) => L - ae),
      ve = !h && N(x, O, [-g, 0, 0, g]),
      ie = !h && N(x, O, [g, 0, 0, -g]),
      be = !h && N(x, O, [j, 1, 1, j]),
      se = !h && N(x, O, [D, 1, 1, D]),
      A = !h && N(x, O, [1, 1, 0, 0]),
      le = !h && N(x, (L) => L >= O[1] && L <= O[2]);
    return (
      X(() => {
        if (le)
          return le.onChange((L) => {
            var W;
            (W = d.current) === null ||
              W === void 0 ||
              W.setAttribute("aria-hidden", !L);
          });
      }, []),
      a(ge, {
        inherit: "id",
        children: a("li", {
          style: { display: "contents" },
          "aria-hidden": F !== 0,
          children: dt(
            u,
            {
              ref: d,
              key: v + "child",
              style: {
                ...((r = u.props) === null || r === void 0 ? void 0 : r.style),
                flexShrink: 0,
                userSelect: "none",
                width: k,
                height: H,
                opacity: be,
                scale: se,
                originX: T ? A : 0.5,
                originY: T ? 0.5 : A,
                rotateY: T ? ve : 0,
                rotateX: T ? 0 : ie,
              },
              layoutId: u.props.layoutId
                ? u.props.layoutId + "-original-" + F
                : void 0,
            },
            (p = u.props) === null || p === void 0 ? void 0 : p.children,
          ),
        }),
      })
    );
  });
function Xo({
  selectedOpacity: e,
  opacity: l,
  total: d,
  index: r,
  wrappedIndex: p,
  wrappedIndexInverted: v,
  dotStyle: k,
  buttonStyle: H,
  gap: u,
  padding: n,
  isHorizontal: b,
  isInverted: x,
  ...q
}) {
  let M = p === r;
  x && (M = Math.abs(v) === r);
  let h = u / 2,
    I = !b && r > 0 ? h : n,
    j = !b && r !== d - 1 ? h : n,
    D = b && r !== d - 1 ? h : n,
    g = b && r > 0 ? h : n;
  return a("button", {
    "aria-label": `Scroll to page ${r + 1}`,
    type: "button",
    ...q,
    style: { ...H, padding: `${I}px ${D}px ${j}px ${g}px` },
    children: a(P.div, {
      style: { ...k },
      initial: !1,
      animate: { opacity: M ? e : l },
      transition: { duration: 0.3 },
    }),
  });
}
var qo = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto",
  },
  Fo = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0,
  };
export { Eo as a, c as b };
//# sourceMappingURL=chunk-ZKTFC6HL.mjs.map
