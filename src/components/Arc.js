import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { Children as i } from "react";
import {
  addPropertyControls as n,
  ControlType as a,
  RenderTarget as l,
  withCSS as r,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import { motion as o } from "framer-motion";
import p from "@emotion/hash";
import { renderToString as s } from "react-dom/server";
/**
 * ARC TEXT
 * By Adam and Benjamin
 *
 * @framerIntrinsicWidth 150
 * @framerIntrinsicHeight 150
 * @framerDisableUnlink
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */ let d = r(
  function (n) {
    let a, r, d; // Checks
    let x = i.count(n.slots) > 0,
      b = l.current() === l.canvas,
      $ = x && "graphic" === n.type,
      w = "circle" === n.type,
      S = "ellipse" === n.type,
      v = S ? n.cylinderHeight / 2 : 0,
      V = f(n.flip, v); // If graphic is connected
    if ($) {
      let i = m(n.slots),
        l = m(i.props.svg),
        o = m(i.props.children); // Show placeholder on canvas if connected layer isn’t a graphic
      if (b && !o.props.frame)
        return /*#__PURE__*/ t("div", {
          style: u,
          children: [
            /*#__PURE__*/ e("div", { style: h, children: "💎" }),
            /*#__PURE__*/ e("p", {
              style: g,
              children: "Please connect to Graphic",
            }),
            /*#__PURE__*/ e("p", {
              style: y,
              children:
                "You can only connect the Arc to a Graphic with a single path.",
            }),
          ],
        }); // Grab the react element from the canvas and turn it into SVG
      if (b && o) {
        let e = s(o),
          t = o.props.frame;
        for (let i of ((r = `0 0 ${t.width} ${t.height}`),
        e.match(/[\w-]+="[^"]*"/g)))
          i.includes("d=") && (a = c(i));
      } // On the preview/deploy we already get the SVG string
      if (!b && l) {
        let e = l.match(/[\w-]+="[^"]*"/g);
        for (let t of ((r = (r = (r = l.split("viewBox=")[1]).split(
          ">",
        )[0]).replace(/^"(.+(?="$))"$/, "$1")),
        e))
          t.includes("d=") && (a = c(t));
      }
    } // Unique IDs to avoid multiple instances on the canvas sharing a single path
    let C = `curve-${p(a || V)}`;
    return (
      "top" === n.alignmentBaseline && (d = "Text Top"),
      "center" === n.alignmentBaseline && (d = "Central"),
      "bottom" === n.alignmentBaseline && (d = "Hanging"),
      /*#__PURE__*/ e(o.div, {
        style: {
          width: "100%",
          height: "100%", // userSelect: "none",
          // pointerEvents: "none",
          position: "relative",
        },
        draggable: "false",
        children: /*#__PURE__*/ t(o.svg, {
          className: "transform-origin-center-center",
          style: {
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
            transformOrigin: "center",
            willChange: n.rotate && "transform",
          },
          viewBox: $ ? r : "0 0 100 100",
          overflow: "visible",
          animate: w && n.rotate && { rotate: 360 },
          transition: w &&
            n.rotate && {
              duration: 100 / n.rotateSpeed,
              repeat: 1 / 0,
              ease: "linear",
            },
          children: [
            /*#__PURE__*/ e("path", {
              id: C,
              d: $ ? a : V,
              strokeWidth: "none",
              fill: "transparent",
            }),
            /*#__PURE__*/ e("text", {
              children: /*#__PURE__*/ t("textPath", {
                href: `#${C}`,
                startOffset: n.startOffset,
                dominantBaseline: d,
                style: { ...n.font, wordSpacing: n.wordSpacing, fill: n.color },
                children: [
                  n.text,
                  !b &&
                    n.animate &&
                    /*#__PURE__*/ e("animate", {
                      attributeName: "startOffset",
                      from: `${n.animateStart}%`,
                      to: `${n.animateEnd}%`,
                      begin: "0s",
                      dur: `${n.animateDuration}s`,
                      repeatCount: "indefinite",
                    }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  }, // Work around a bug with framer-motion that calculates a px origin when animating SVG elements.
  [
    ".transform-origin-center-center { transform-origin: center center !important; }",
  ],
);
export default d;
/* Method to get the first child */ function m(e) {
  let t;
  return (
    i.map(e, (e) => {
      void 0 === t && (t = e);
    }),
    t
  );
}
(d.defaultProps = { height: 50, width: 50 }),
  n(d, {
    text: {
      title: "Content",
      type: a.String,
      defaultValue: "✦ THANK YOU ✦ FOR VISITING",
      displayTextArea: !0,
    },
    type: {
      title: "Type",
      type: a.Enum,
      options: ["circle", "ellipse", "graphic"],
      optionTitles: ["Circle", "Ellipse", "Graphic"],
      defaultValue: !0,
    },
    cylinderHeight: {
      title: "Height",
      type: a.Number,
      unit: "px",
      min: 0,
      max: 1e3,
      hidden: ({ type: e }) => "ellipse" !== e,
    },
    rotate: {
      type: a.Boolean,
      title: "Rotate",
      defaultValue: !1,
      hidden: ({ type: e }) => "circle" !== e,
    },
    rotateSpeed: {
      type: a.Number,
      title: "Speed",
      min: 0,
      max: 50,
      defaultValue: 5,
      displayStepper: !0,
      step: 1,
      hidden: ({ type: e, rotate: t }) => "circle" !== e || !t,
    },
    slots: {
      type: a.ComponentInstance,
      title: "Graphic",
      hidden: ({ type: e }) => "graphic" !== e,
    },
    alignmentBaseline: {
      title: "Align",
      type: a.Enum,
      options: ["top", "center", "bottom"],
      optionIcons: ["align-top", "align-middle", "align-bottom"],
      defaultValue: "bottom",
      displaySegmentedControl: !0,
    },
    flip: {
      type: a.Boolean,
      defaultValue: !1,
      title: "Direction",
      enabledTitle: "CW",
      disabledTitle: "CCW",
      hidden: ({ type: e }) => "graphic" === e,
    },
    startOffset: {
      title: "Offset",
      type: a.Number,
      defaultValue: 0,
      max: 360,
      unit: "\xb0",
      step: 0.5,
    },
    color: { title: "Color", type: a.Color, defaultValue: "#999" },
    font: {
      type: a.Font,
      title: "Font",
      controls: "extended",
      displayTextAlignment: !1,
    },
    wordSpacing: {
      type: a.Number,
      step: 1,
      defaultValue: 0,
      title: "Word",
      displayStepper: !0,
    },
    animate: { type: a.Boolean, defaultValue: !1, title: "Animate" },
    animateStart: {
      type: a.Number,
      min: -200,
      max: 200,
      step: 0.1,
      defaultValue: -50,
      title: "From",
      unit: "%",
      hidden: (e) => !e.animate,
    },
    animateEnd: {
      type: a.Number,
      min: -200,
      max: 200,
      step: 0.1,
      defaultValue: 150,
      title: "To",
      unit: "%",
      hidden: (e) => !e.animate,
    },
    animateDuration: {
      type: a.Number,
      min: 0,
      max: 50,
      defaultValue: 5,
      title: "Time",
      unit: "s",
      displayStepper: !0,
      hidden: (e) => !e.animate,
    },
  });
/* Method to get stringless attributes */ let c = (e) =>
    e.split("=")[1].replace(/['"]+/g, ""),
  f = (e, t) => {
    let i = 50 - t,
      n = 50 + t;
    return e
      ? `M 0 50 L 0 ${n} A 1 1 0 1 0 100 ${n} L 100 ${i} A 1 1 0 1 0 0 ${i} L 0 50`
      : `M 0 50 L 0 ${i} A 1 1 0 0 1 100 ${i} L 100 50 L 100 ${n} A 1 1 0 0 1 0 ${n} L 0 ${i}`;
  },
  u = {
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
  h = { fontSize: 32, marginBottom: 10 },
  g = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  y = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 160,
    lineHeight: 1.5,
    textAlign: "center",
  };
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Arc",
      slots: [],
      annotations: {
        framerSupportedLayoutWidth: "fixed",
        framerSupportedLayoutHeight: "fixed",
        framerDisableUnlink: "*",
        framerContractVersion: "1",
        framerIntrinsicWidth: "150",
        framerIntrinsicHeight: "150",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./Arc.map
