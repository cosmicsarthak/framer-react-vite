import {
  Ka as Ee,
  La as _e,
  Ma as Pe,
  Na as Ie,
  Oa as Te,
  Pa as Se,
  Qa as Me,
  ca as He,
  da as Oe,
  ea as Xe,
  pa as Qe,
} from "./chunk-ZEPEXD57.mjs";
import {
  A as C,
  C as le,
  O as Fe,
  Pa as qe,
  Xa as pe,
  _ as de,
  _a as ze,
  c as B,
  cb as Ge,
  eb as J,
  g as ae,
  ga as a,
  h as je,
  hb as ye,
  ib as he,
  j as ne,
  ja as S,
  jb as Ye,
  k as oe,
  ka as Le,
  l as P,
  la as Be,
  m as ie,
  ma as fe,
  p as q,
  q as v,
  r as W,
  ra as me,
  sa as ce,
  u as n,
  v as se,
  wa as ue,
  y as Ue,
  z,
} from "./chunk-NAESFJNX.mjs";
var at = ["jNeCYogxP", "nRX44bhYF"],
  nt = "framer-tXIYT",
  ot = { jNeCYogxP: "framer-v-darowi", nRX44bhYF: "framer-v-172q6y2" };
function Ae(e, ...t) {
  let r = {};
  return t?.forEach((i) => i && Object.assign(r, e[i])), r;
}
var it = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  st = ({ value: e, children: t }) => {
    let r = oe(z),
      i = e ?? r.transition,
      l = q(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
    return n(z.Provider, { value: l, children: t });
  },
  lt = C(B),
  dt = { Media: "jNeCYogxP", Prototype: "nRX44bhYF" },
  ft = ({ height: e, id: t, title: r, width: i, ...l }) => {
    var d, s, o;
    return {
      ...l,
      q8CEoMexq:
        (d = r ?? l.q8CEoMexq) !== null && d !== void 0 ? d : "Loading media",
      variant:
        (o = (s = dt[l.variant]) !== null && s !== void 0 ? s : l.variant) !==
          null && o !== void 0
          ? o
          : "jNeCYogxP",
    };
  },
  mt = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  ct = ae(function (e, t) {
    let { activeLocale: r, setLocale: i } = de(),
      {
        style: l,
        className: d,
        layoutId: s,
        variant: o,
        q8CEoMexq: m,
        ...f
      } = ft(e),
      {
        baseVariant: h,
        classNames: c,
        clearLoadingGesture: y,
        gestureHandlers: F,
        gestureVariant: R,
        isLoading: V,
        setGestureState: L,
        setVariant: g,
        variants: b,
      } = pe({
        cycleOrder: at,
        defaultVariant: "jNeCYogxP",
        variant: o,
        variantClassNames: ot,
      }),
      u = mt(e, b),
      A = v(null),
      k = () => h !== "nRX44bhYF",
      D = () => h === "nRX44bhYF",
      N = ie(),
      I = [Xe],
      H = me();
    return n(le, {
      id: s ?? N,
      children: n(lt, {
        animate: b,
        initial: !1,
        children: n(st, {
          value: it,
          children: se(C.div, {
            ...f,
            ...F,
            className: fe(nt, ...I, "framer-darowi", d, c),
            "data-framer-name": "Media",
            layoutDependency: u,
            layoutId: "jNeCYogxP",
            ref: t ?? A,
            style: { ...l },
            ...Ae({ nRX44bhYF: { "data-framer-name": "Prototype" } }, h, R),
            children: [
              k() &&
                n(J, {
                  className: "framer-5pr1g3",
                  "data-framer-name": "Load",
                  layout: "position",
                  layoutDependency: u,
                  layoutId: "NhmZIFtep",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30"><path d="M 15 3.75 L 15 7.5 M 15 22.5 L 15 26.25 M 26.25 15 L 22.5 15 M 7.5 15 L 3.75 15 M 22.954 7.046 L 20.304 9.698 M 9.696 20.302 L 7.045 22.954 M 22.954 22.954 L 20.304 20.304 M 9.696 9.698 L 7.045 7.046" fill="transparent" stroke-width="2.25" stroke="var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)) /* {&quot;name&quot;:&quot;Black 30&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path></svg>',
                  svgContentId: 8613066163,
                  withExternalLayout: !0,
                }),
              D() &&
                n(J, {
                  className: "framer-8p909s",
                  "data-framer-name": "Prototype",
                  layout: "position",
                  layoutDependency: u,
                  layoutId: "cvQh1AfCo",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30"><path d="M 18.125 7.5 C 19.096 7.5 19.581 7.5 19.964 7.659 C 20.475 7.87 20.88 8.275 21.091 8.786 C 21.25 9.169 21.25 9.654 21.25 10.625 C 21.25 11.596 21.25 12.081 21.091 12.464 C 20.88 12.974 20.474 13.38 19.964 13.591 C 19.581 13.75 19.096 13.75 18.125 13.75 L 11.875 13.75 C 10.904 13.75 10.419 13.75 10.036 13.591 C 9.526 13.38 9.12 12.974 8.909 12.464 C 8.75 12.081 8.75 11.596 8.75 10.625 C 8.75 9.654 8.75 9.169 8.909 8.786 C 9.12 8.275 9.525 7.87 10.036 7.659 C 10.419 7.5 10.904 7.5 11.875 7.5 Z M 13.75 21.25 L 11.25 21.25 M 11.25 21.25 L 8.75 21.25 M 11.25 21.25 L 11.25 23.75 M 11.25 21.25 L 11.25 18.75" fill="transparent" stroke-width="1.8" stroke="var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)) /* {&quot;name&quot;:&quot;Black 30&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 21.25 22.5 L 21.25 20" fill="transparent" stroke-width="1.8" stroke="var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)) /* {&quot;name&quot;:&quot;Black 30&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 26.25 16.25 L 26.25 13.75 C 26.25 9.062 26.25 6.719 25.056 5.076 C 24.671 4.546 24.204 4.079 23.674 3.694 C 22.031 2.5 19.686 2.5 15 2.5 C 10.313 2.5 7.969 2.5 6.326 3.694 C 5.796 4.079 5.329 4.545 4.944 5.075 C 3.75 6.719 3.75 9.064 3.75 13.75 L 3.75 16.25 C 3.75 20.937 3.75 23.281 4.944 24.924 C 5.329 25.454 5.796 25.921 6.326 26.306 C 7.969 27.5 10.314 27.5 15 27.5 C 19.688 27.5 22.031 27.5 23.674 26.306 C 24.204 25.921 24.671 25.454 25.056 24.924 C 26.25 23.281 26.25 20.936 26.25 16.25 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)) /* {&quot;name&quot;:&quot;Black 30&quot;} */" stroke-linecap="round" stroke-miterlimit="10"></path></svg>',
                  svgContentId: 12665599514,
                  withExternalLayout: !0,
                  ...Ae({ nRX44bhYF: { svgContentId: 10473274077 } }, h, R),
                }),
              n(Ge, {
                __fromCanvasComponent: !0,
                children: n(B, {
                  children: n(C.p, {
                    className: "framer-styles-preset-9jlebu",
                    "data-styles-preset": "sSyE5_N0_",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)))",
                    },
                    children: "Media is loading.",
                  }),
                }),
                className: "framer-1f8q15w",
                fonts: ["Inter"],
                layoutDependency: u,
                layoutId: "JXM4_5XKo",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: m,
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...Ae(
                  {
                    nRX44bhYF: {
                      children: n(B, {
                        children: n(C.p, {
                          className: "framer-styles-preset-9jlebu",
                          "data-styles-preset": "sSyE5_N0_",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)))",
                          },
                          children: "Loading Prototype",
                        }),
                      }),
                      text: void 0,
                    },
                  },
                  h,
                  R,
                ),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  ut = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-tXIYT.framer-15vyrt2, .framer-tXIYT .framer-15vyrt2 { display: block; }",
    ".framer-tXIYT.framer-darowi { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-tXIYT .framer-5pr1g3, .framer-tXIYT .framer-8p909s { flex: none; height: 30px; position: relative; width: 30px; }",
    ".framer-tXIYT .framer-1f8q15w { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-tXIYT.framer-darowi { gap: 0px; } .framer-tXIYT.framer-darowi > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-tXIYT.framer-darowi > :first-child { margin-top: 0px; } .framer-tXIYT.framer-darowi > :last-child { margin-bottom: 0px; } }",
    ...Oe,
  ],
  ee = ue(ct, ut, "framer-tXIYT"),
  De = ee;
ee.displayName = "Utilities/LoadTip";
ee.defaultProps = { height: 59, width: 106.5 };
S(ee, {
  variant: {
    options: ["jNeCYogxP", "nRX44bhYF"],
    optionTitles: ["Media", "Prototype"],
    title: "Variant",
    type: a.Enum,
  },
  q8CEoMexq: {
    defaultValue: "Loading media",
    displayTextArea: !1,
    title: "Title",
    type: a.String,
  },
});
ye(
  ee,
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
    ...Ye(He),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Je;
(function (e) {
  (e.Fill = "fill"),
    (e.Contain = "contain"),
    (e.Cover = "cover"),
    (e.None = "none"),
    (e.ScaleDown = "scale-down");
})(Je || (Je = {}));
var Ze;
(function (e) {
  (e.Video = "Upload"), (e.Url = "URL");
})(Ze || (Ze = {}));
var pt = "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4";
function yt(e) {
  let {
    width: t,
    height: r,
    topLeft: i,
    topRight: l,
    bottomRight: d,
    bottomLeft: s,
    id: o,
    children: m,
    ...f
  } = e;
  return f;
}
function G(e) {
  let t = yt(e);
  return n(xt, { ...t });
}
function ht(e) {
  let t = Be(),
    r = v(!1),
    i = v(!1),
    l = ne((o) => {
      if (!e.current) return;
      let m = (o === 1 ? 0.999 : o) * e.current.duration,
        f = Math.abs(e.current.currentTime - m) < 0.1;
      e.current.duration > 0 && !f && (e.current.currentTime = m);
    }, []),
    d = ne(() => {
      let o = e.current;
      if (!o) return;
      (o.preload = "auto"),
        !(
          o.currentTime > 0 &&
          o.onplaying &&
          !o.paused &&
          !o.ended &&
          o.readyState >= o.HAVE_CURRENT_DATA
        ) &&
          o &&
          !r.current &&
          t &&
          ((r.current = !0),
          (i.current = !0),
          o
            .play()
            .catch((f) => {})
            .finally(() => (r.current = !1)));
    }, []),
    s = ne(() => {
      !e.current || r.current || (e.current.pause(), (i.current = !1));
    }, []);
  return { play: d, pause: s, setProgress: l, isPlaying: i };
}
function gt({
  playingProp: e,
  muted: t,
  loop: r,
  playsinline: i,
  controls: l,
}) {
  let [d] = W(() => e),
    [s, o] = W(!1);
  e !== d && !s && o(!0);
  let m = d && t && r && i && !l && !s,
    f;
  return (
    m ? (f = "on-viewport") : d ? (f = "on-mount") : (f = "no-autoplay"), f
  );
}
var xt = je(function (t) {
  let {
      srcType: r = "URL",
      srcUrl: i,
      srcFile: l = "",
      posterEnabled: d = !1,
      controls: s = !1,
      playing: o = !0,
      loop: m = !0,
      muted: f = !0,
      playsinline: h = !0,
      restartOnEnter: c = !1,
      objectFit: y = "cover",
      backgroundColor: F = "rgba(0,0,0,0)",
      radius: R = 0,
      volume: V = 25,
      startTime: L = 0,
      poster: g,
      playing: b,
      progress: u,
      onSeeked: A,
      onPause: k,
      onPlay: D,
      onEnd: N,
      onClick: I,
      onMouseEnter: H,
      onMouseLeave: E,
      onMouseDown: O,
      onMouseUp: Ce,
    } = t,
    x = v(),
    be = Ie(),
    X = v(null),
    re = v(null),
    _ = Te(),
    we = Se(t),
    U = _
      ? "no-autoplay"
      : gt({ playingProp: b, muted: f, loop: m, playsinline: h, controls: s }),
    j = _ ? !0 : Fe(x),
    T = _ ? !1 : Fe(x, { margin: "0px 0px 100px 100px", once: !0 }),
    w = L === 100 ? 99.9 : L,
    { play: Q, pause: Ve, setProgress: Re, isPlaying: ke } = ht(x);
  P(() => {
    _ || (b ? Q() : Ve());
  }, [b]),
    P(() => {
      _ || (U === "on-viewport" && (j ? Q() : Ve()));
    }, [U, j]);
  let Ne = v(!1);
  P(() => {
    if (!Ne.current) {
      Ne.current = !0;
      return;
    }
    let p = Ue(u) ? u.get() : (u ?? 0) * 0.01;
    Re((p ?? 0) || (w ?? 0) / 100);
  }, [w, l, i, u]),
    P(() => {
      if (Ue(u)) return u.on("change", (p) => Re(p));
    }, [u]),
    _e(() => {
      X.current !== null && x.current && ((!re && m) || !X.current) && Q();
    }),
    Pe(() => {
      x.current &&
        ((re.current = x.current.ended), (X.current = x.current.paused), Ve());
    });
  let tt = q(() => {
    let p = "";
    if (r === "URL") return i + p;
    if (r === "Upload") return l + p;
  }, [r, l, i, w]);
  P(() => {
    be && x.current && U === "on-mount" && setTimeout(() => Q(), 50);
  }, []),
    P(() => {
      x.current && !f && (x.current.volume = (V ?? 0) / 100);
    }, [V]);
  let rt = () => {
    let p = x.current;
    p &&
      (p.currentTime < 0.3 && w > 0 && Re((w ?? 0) * 0.01),
      (ke.current || U === "on-mount" || (U === "on-viewport" && j)) && Q());
  };
  return n("video", {
    onClick: I,
    onMouseEnter: H,
    onMouseLeave: E,
    onMouseDown: O,
    onMouseUp: Ce,
    src: tt,
    loop: m,
    ref: x,
    onSeeked: (p) => A?.(p),
    onPause: (p) => k?.(p),
    onPlay: (p) => D?.(p),
    onEnded: (p) => N?.(p),
    autoPlay: ke.current || U === "on-mount" || (U === "on-viewport" && j),
    preload: ke.current
      ? "auto"
      : _ && !g
        ? "metadata"
        : U !== "on-mount" && !T
          ? "none"
          : "metadata",
    poster:
      d && !l && i === pt
        ? "https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg"
        : d && g
          ? g
          : void 0,
    onLoadedData: rt,
    controls: s,
    muted: _ ? !0 : f,
    playsInline: h,
    style: {
      cursor: I ? "pointer" : "auto",
      width: "100%",
      height: "100%",
      borderRadius: we,
      display: "block",
      objectFit: y,
      backgroundColor: F,
      objectPosition: "50% 50%",
    },
  });
});
G.displayName = "Video";
function vt(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ct(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [])
    .map(vt)
    .join(" ");
}
var Ke = ["cover", "fill", "contain", "scale-down", "none"];
S(G, {
  srcType: {
    type: a.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: ["URL", "Upload"],
  },
  srcUrl: {
    type: a.String,
    title: "URL",
    defaultValue:
      "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
    hidden(e) {
      return e.srcType === "Upload";
    },
  },
  srcFile: {
    type: a.File,
    title: "File",
    allowedFileTypes: ["mp4", "webm"],
    hidden(e) {
      return e.srcType === "URL";
    },
  },
  playing: {
    type: a.Boolean,
    title: "Playing",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  posterEnabled: {
    type: a.Boolean,
    title: "Poster",
    enabledTitle: "Yes",
    disabledTitle: "No",
    description:
      "We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).",
  },
  poster: { type: a.Image, title: " ", hidden: ({ posterEnabled: e }) => !e },
  backgroundColor: {
    type: a.Color,
    title: "Background",
    defaultValue: "rgba(0,0,0,0)",
  },
  ...Me,
  startTime: {
    title: "Start Time",
    type: a.Number,
    min: 0,
    max: 100,
    step: 0.1,
    unit: "%",
  },
  loop: {
    type: a.Boolean,
    title: "Loop",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  objectFit: {
    type: a.Enum,
    title: "Fit",
    options: Ke,
    optionTitles: Ke.map(Ct),
  },
  controls: {
    type: a.Boolean,
    title: "Controls",
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: !1,
  },
  muted: {
    type: a.Boolean,
    title: "Muted",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  volume: {
    type: a.Number,
    max: 100,
    min: 0,
    unit: "%",
    hidden: ({ muted: e }) => e,
    defaultValue: 25,
  },
  onEnd: { type: a.EventHandler },
  onSeeked: { type: a.EventHandler },
  onPause: { type: a.EventHandler },
  onPlay: { type: a.EventHandler },
  ...Ee,
});
function Y(e) {
  let {
      radius: t,
      type: r,
      url: i,
      file: l,
      tint: d,
      play: s,
      onVideoEnd: o,
    } = e,
    [m, f] = W(!0),
    h = v(null);
  return (
    P(() => {
      let c = () => {
          o && o();
        },
        y = h.current;
      return (
        y && (s ? y.play() : y.pause(), y.addEventListener("ended", c)),
        () => {
          y && y.removeEventListener("ended", c);
        }
      );
    }, [s, o]),
    n("video", {
      ref: h,
      muted: !0,
      playsInline: !0,
      src: r === "URL" ? i : l,
      style: { objectFit: "cover", width: "100%", height: "100%", zIndex: 1 },
    })
  );
}
S(Y, {
  type: {
    title: "Type",
    type: a.Enum,
    options: ["URL", "FILE"],
    defaultValue: "URL",
  },
  url: {
    title: "Url",
    type: a.String,
    defaultValue: "https://example.com/video.mp4",
    hidden(e) {
      return e.type === "FILE";
    },
  },
  file: {
    title: "File",
    type: a.File,
    allowedFileTypes: ["mp4", "webm", "avi"],
    hidden(e) {
      return e.type === "URL";
    },
  },
  play: { title: "Play", type: a.Boolean, defaultValue: !1 },
  radius: { title: "Radius", type: a.Number, defaultValue: 0, min: 0, max: 50 },
  onVideoEnd: { title: "onVideoEnd", type: a.EventHandler },
});
var bt = he(De),
  wt = Qe(C.div),
  Vt = he(G),
  Rt = he(Y),
  M = Le(Y),
  ge = Le(G),
  kt = ["jEPG_8UxH", "dt3kcqr_j"],
  Ut = "framer-cAzU9",
  Ft = { dt3kcqr_j: "framer-v-rgz6ts", jEPG_8UxH: "framer-v-1f31pxb" };
function xe(e, ...t) {
  let r = {};
  return t?.forEach((i) => i && Object.assign(r, e[i])), r;
}
var ve = (e, t) => {
    if (typeof e == "number" && Number.isFinite(e))
      return Math.max(0, e) + "px";
    if (typeof e != "string" || typeof t != "number") return;
    let r = e.split(" ");
    return r[t] || r[t - 2] || r[0];
  },
  Lt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Et = (e, t) => `translate(-50%, -50%) ${t}`,
  et = { damping: 28, delay: 0, mass: 1, stiffness: 170, type: "spring" },
  _t = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.05,
    skewX: 0,
    skewY: 0,
    transition: et,
  },
  Pt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.95,
    skewX: 0,
    skewY: 0,
    transition: et,
  },
  It = (e, t) => {
    switch (e) {
      case "JeHZqSR04":
        return !0;
      case "Z62L0mxle":
        return !1;
      default:
        return !1;
    }
  },
  $e = (e) => !!e,
  Tt = (e, t) => {
    switch (e) {
      case "JeHZqSR04":
        return !1;
      case "Z62L0mxle":
        return !0;
      default:
        return !0;
    }
  },
  St = ({ value: e, children: t }) => {
    let r = oe(z),
      i = e ?? r.transition,
      l = q(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
    return n(z.Provider, { value: l, children: t });
  },
  Mt = C.create(B),
  At = { Custom: "Z62L0mxle", Framer: "JeHZqSR04" },
  Dt = { Pause: "dt3kcqr_j", Play: "jEPG_8UxH" },
  Nt = ({
    file: e,
    file2: t,
    height: r,
    iconBg: i,
    id: l,
    loop: d,
    radius: s,
    type: o,
    url: m,
    video: f,
    width: h,
    ...c
  }) => {
    var y, F, R, V, L, g, b, u;
    return {
      ...c,
      bgamx6SGu: d ?? c.bgamx6SGu,
      DBCm87yi5:
        (y = i ?? c.DBCm87yi5) !== null && y !== void 0
          ? y
          : "rgba(255, 255, 255, 0.3)",
      dSxHiSeFJ: e ?? c.dSxHiSeFJ,
      n03ilhzqN: (F = o ?? c.n03ilhzqN) !== null && F !== void 0 ? F : "URL",
      QU6BORGAD: s ?? c.QU6BORGAD,
      RDkHtR3nz:
        (L =
          (V = (R = At[f]) !== null && R !== void 0 ? R : f) !== null &&
          V !== void 0
            ? V
            : c.RDkHtR3nz) !== null && L !== void 0
          ? L
          : "Z62L0mxle",
      RwojOCEEr:
        (g = m ?? c.RwojOCEEr) !== null && g !== void 0
          ? g
          : "https://example.com/video.mp4",
      ufwgLsgPQ: t ?? c.ufwgLsgPQ,
      variant:
        (u = (b = Dt[c.variant]) !== null && b !== void 0 ? b : c.variant) !==
          null && u !== void 0
          ? u
          : "jEPG_8UxH",
    };
  },
  jt = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Bt = ae(function (e, t) {
    let { activeLocale: r, setLocale: i } = de(),
      {
        style: l,
        className: d,
        layoutId: s,
        variant: o,
        RDkHtR3nz: m,
        n03ilhzqN: f,
        ufwgLsgPQ: h,
        RwojOCEEr: c,
        QU6BORGAD: y,
        bgamx6SGu: F,
        DBCm87yi5: R,
        dSxHiSeFJ: V,
        ...L
      } = Nt(e),
      {
        baseVariant: g,
        classNames: b,
        clearLoadingGesture: u,
        gestureHandlers: A,
        gestureVariant: k,
        isLoading: D,
        setGestureState: N,
        setVariant: I,
        variants: H,
      } = pe({
        cycleOrder: kt,
        defaultVariant: "jEPG_8UxH",
        variant: o,
        variantClassNames: Ft,
      }),
      E = jt(e, H),
      { activeVariantCallback: O, delay: Ce } = qe(g),
      x = O(async (...w) => {
        I("jEPG_8UxH");
      }),
      be = O(async (...w) => {
        await Ce(() => I("dt3kcqr_j"), 400);
      }),
      X = O(async (...w) => {
        I("dt3kcqr_j");
      }),
      re = v(null),
      _ = $e(It(m, r)),
      we = $e(Tt(m, r)),
      U = ie(),
      j = [],
      T = me();
    return n(le, {
      id: s ?? U,
      children: n(Mt, {
        animate: H,
        initial: !1,
        children: n(St, {
          value: Lt,
          children: se(C.div, {
            ...L,
            ...A,
            className: fe(Ut, ...j, "framer-1f31pxb", d, b),
            "data-framer-name": "Play",
            layoutDependency: E,
            layoutId: "jEPG_8UxH",
            ref: t ?? re,
            style: {
              borderBottomLeftRadius: ve(y, 3),
              borderBottomRightRadius: ve(y, 2),
              borderTopLeftRadius: ve(y, 0),
              borderTopRightRadius: ve(y, 1),
              ...l,
            },
            ...xe({ dt3kcqr_j: { "data-framer-name": "Pause" } }, g, k),
            children: [
              n(ce, {
                height: 59,
                y:
                  (T?.y || 0) +
                  ((T?.height || 500) * 0.5000000000000002 - 29.5),
                children: n(C.div, {
                  className: "framer-myxaov-container",
                  layoutDependency: E,
                  layoutId: "yMuwlVUeR-container",
                  transformTemplate: Et,
                  children: n(De, {
                    height: "100%",
                    id: "yMuwlVUeR",
                    layoutId: "yMuwlVUeR",
                    q8CEoMexq: "Loading media",
                    variant: "jNeCYogxP",
                    width: "100%",
                  }),
                }),
              }),
              n(wt, {
                className: "framer-1fodfnm",
                layoutDependency: E,
                layoutId: "gKANqavyT",
                style: {
                  backgroundColor: R,
                  borderBottomLeftRadius: 42,
                  borderBottomRightRadius: 42,
                  borderTopLeftRadius: 42,
                  borderTopRightRadius: 42,
                  opacity: 0,
                },
                variants: { dt3kcqr_j: { opacity: 1 } },
                ...xe(
                  {
                    dt3kcqr_j: {
                      "data-highlight": !0,
                      onTap: x,
                      whileHover: _t,
                      whileTap: Pt,
                    },
                  },
                  g,
                  k,
                ),
                children: n(C.div, {
                  className: "framer-1qpklwj",
                  layoutDependency: E,
                  layoutId: "gKANqavyTixIelMBUC",
                  style: {
                    borderBottomLeftRadius: 42,
                    borderBottomRightRadius: 42,
                    borderTopLeftRadius: 42,
                    borderTopRightRadius: 42,
                  },
                  children: n(J, {
                    className: "framer-9v1xl9",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: E,
                    layoutId: "Pg6KzNSro",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 24"><path d="M 18.408 4 L 18.408 6.506 C 18.408 6.612 18.342 6.707 18.242 6.743 C 18.142 6.779 18.031 6.748 17.963 6.666 C 16.447 4.967 14.277 3.997 12 4 C 7.582 4 4 7.582 4 12 C 4 16.418 7.582 20 12 20 C 16.418 20 20 16.418 20 12" fill="transparent" stroke-width="1.8" stroke="rgba(0, 0, 0, 0.5)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 11948405837,
                    withExternalLayout: !0,
                  }),
                }),
              }),
              _ &&
                n(ce, {
                  children: n(C.div, {
                    className: "framer-esyrce-container",
                    layoutDependency: E,
                    layoutId: "QKQyzuWeG-container",
                    children: n(G, {
                      backgroundColor:
                        "var(--token-b030a63b-659f-4465-829f-246a02e259cb, rgba(0, 0, 0, 0.1))",
                      borderRadius: 0,
                      bottomLeftRadius: 0,
                      bottomRightRadius: 0,
                      controls: !1,
                      height: "100%",
                      id: "QKQyzuWeG",
                      isMixedBorderRadius: !1,
                      layoutId: "QKQyzuWeG",
                      loop: F,
                      muted: !0,
                      objectFit: "cover",
                      onEnd: be,
                      playing: !0,
                      posterEnabled: !0,
                      srcFile: V,
                      srcType: "Upload",
                      srcUrl:
                        "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
                      startTime: 0,
                      style: { height: "100%", width: "100%" },
                      topLeftRadius: 0,
                      topRightRadius: 0,
                      volume: 25,
                      width: "100%",
                      ...xe({ dt3kcqr_j: { playing: !1 } }, g, k),
                    }),
                  }),
                }),
              we &&
                n(ce, {
                  children: n(C.div, {
                    className: "framer-1g9uw8q-container",
                    layoutDependency: E,
                    layoutId: "zmY_2Qc0Z-container",
                    children: n(Y, {
                      file: h,
                      height: "100%",
                      id: "zmY_2Qc0Z",
                      layoutId: "zmY_2Qc0Z",
                      onVideoEnd: X,
                      play: !0,
                      radius: 0,
                      style: { height: "100%", width: "100%" },
                      type: f,
                      url: c,
                      width: "100%",
                      ...xe(
                        { dt3kcqr_j: { onVideoEnd: void 0, play: !1 } },
                        g,
                        k,
                      ),
                    }),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  qt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-cAzU9.framer-1yhtlox, .framer-cAzU9 .framer-1yhtlox { display: block; }",
    ".framer-cAzU9.framer-1f31pxb { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 500px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 500px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-cAzU9 .framer-myxaov-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; z-index: 0; }",
    ".framer-cAzU9 .framer-1fodfnm { align-content: center; align-items: center; bottom: 18px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: 36px; justify-content: center; overflow: visible; padding: 9px; position: absolute; right: 18px; width: 36px; z-index: 1; }",
    ".framer-cAzU9 .framer-1qpklwj { flex: none; height: 24px; overflow: visible; position: relative; width: 24px; }",
    ".framer-cAzU9 .framer-9v1xl9 { flex: none; height: 24px; left: calc(45.83333333333336% - 23px / 2); position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 23px; }",
    ".framer-cAzU9 .framer-esyrce-container, .framer-cAzU9 .framer-1g9uw8q-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-cAzU9.framer-1f31pxb, .framer-cAzU9 .framer-1fodfnm { gap: 0px; } .framer-cAzU9.framer-1f31pxb > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-cAzU9.framer-1f31pxb > :first-child, .framer-cAzU9 .framer-1fodfnm > :first-child { margin-left: 0px; } .framer-cAzU9.framer-1f31pxb > :last-child, .framer-cAzU9 .framer-1fodfnm > :last-child { margin-right: 0px; } .framer-cAzU9 .framer-1fodfnm > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } }",
    ".framer-cAzU9.framer-v-rgz6ts .framer-1fodfnm { cursor: pointer; }",
  ],
  te = ue(Bt, qt, "framer-cAzU9"),
  ta = te;
te.displayName = "Utilities/Replay";
te.defaultProps = { height: 500, width: 500 };
S(te, {
  variant: {
    options: ["jEPG_8UxH", "dt3kcqr_j"],
    optionTitles: ["Play", "Pause"],
    title: "Variant",
    type: a.Enum,
  },
  RDkHtR3nz: {
    defaultValue: "Z62L0mxle",
    options: ["JeHZqSR04", "Z62L0mxle"],
    optionTitles: ["Framer", "Custom"],
    title: "Video",
    type: a.Enum,
  },
  n03ilhzqN: M?.type && {
    ...M.type,
    defaultValue: "URL",
    description: void 0,
    hidden: void 0,
    title: "Type",
  },
  ufwgLsgPQ: M?.file && {
    ...M.file,
    __defaultAssetReference: "",
    description: void 0,
    hidden: void 0,
    title: "File 2",
  },
  RwojOCEEr: {
    defaultValue: "https://example.com/video.mp4",
    title: "Url",
    type: a.String,
  },
  QU6BORGAD: { defaultValue: 0, title: "Radius", type: a.Number },
  bgamx6SGu: { defaultValue: !1, title: "Loop", type: a.Boolean },
  DBCm87yi5: {
    defaultValue: "rgba(255, 255, 255, 0.3)",
    title: "Icon Bg",
    type: a.Color,
  },
  dSxHiSeFJ: ge?.srcFile && {
    ...ge.srcFile,
    __defaultAssetReference: "",
    description: void 0,
    hidden: void 0,
    title: "File",
  },
});
ye(te, [{ explicitInter: !0, fonts: [] }, ...bt, ...Vt, ...Rt], {
  supportsExplicitInterCodegen: !0,
});
ze.loadFonts(["FS;Cabinet Grotesk-bold", "FS;Cabinet Grotesk-black"]);
var oa = [
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
          family: "Cabinet Grotesk",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/54BYDK52GK4J6SPDN2E656FIZHUETKL3/ACYE4XDNEUAHIOQEOGPYPDVAVDI5P67Q/TZVUWRP4UW5PEJWBLXHG5VVGPODI2WLC.woff2",
          weight: "900",
        },
      ],
    },
  ],
  ia = [
    '.framer-TDo91 .framer-styles-preset-s9s357:not(.rich-text-wrapper), .framer-TDo91 .framer-styles-preset-s9s357.rich-text-wrapper h4 { --framer-font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Cabinet Grotesk", sans-serif; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1439px) and (min-width: 1200px) { .framer-TDo91 .framer-styles-preset-s9s357:not(.rich-text-wrapper), .framer-TDo91 .framer-styles-preset-s9s357.rich-text-wrapper h4 { --framer-font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Cabinet Grotesk", sans-serif; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 1199px) and (min-width: 640px) { .framer-TDo91 .framer-styles-preset-s9s357:not(.rich-text-wrapper), .framer-TDo91 .framer-styles-preset-s9s357.rich-text-wrapper h4 { --framer-font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Cabinet Grotesk", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 639px) and (min-width: 0px) { .framer-TDo91 .framer-styles-preset-s9s357:not(.rich-text-wrapper), .framer-TDo91 .framer-styles-preset-s9s357.rich-text-wrapper h4 { --framer-font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Cabinet Grotesk", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  sa = "framer-TDo91";
export { oa as a, ia as b, sa as c, De as d, G as e, ta as f };
//# sourceMappingURL=chunk-53S5Y7XE.mjs.map
