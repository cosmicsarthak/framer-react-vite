import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { motion } from "framer-motion";
import { addPropertyControls, ControlType } from "../framer_scripts/framer.K3G2LCX5.mjs";
import { useStore } from "https://framerusercontent.com/modules/RGCgkyyKvYCOcpgTFJih/l8apYUQ1NMMBi28Mu8sO/Page.js";
import { useMediaQuery } from "https://framerusercontent.com/modules/n8SIflBFpkmSWMNrMimV/UP8LOKoS9HDpnJYpl8r3/Query.js";
/**
#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */ const transition = { type: "spring", stiffness: 170, damping: 28 };
const breakpoint = {
  tablet: "(max-width: 1199px)",
  phone: "(max-width: 540px)",
};
export default function Layouts(props) {
  const { color, fill, fill_tap, hover_color } = props;
  const [store, setStore] = useStore();
  const isPhone = useMediaQuery(breakpoint.phone);
  const SVG = ({ color, grid }) => {
    return grid
      ? /*#__PURE__*/ _jsx(motion.svg, {
          style: { width: 9, height: 10, display: "flex" },
          xmlns: "http://www.w3.org/2000/svg",
          width: "9",
          height: "10",
          children: /*#__PURE__*/ _jsx("path", {
            d: "M 4.5 8.833 C 3.397 8.833 2.846 8.833 2.425 8.629 C 2.052 8.447 1.751 8.16 1.564 7.81 C 1.35 7.408 1.35 6.883 1.35 5.833 L 1.35 4.333 C 1.35 3.283 1.35 2.758 1.564 2.357 C 1.753 2.004 2.055 1.718 2.425 1.538 C 2.846 1.333 3.397 1.333 4.5 1.333 C 5.602 1.333 6.154 1.333 6.575 1.538 C 6.945 1.718 7.247 2.004 7.436 2.357 C 7.65 2.758 7.65 3.283 7.65 4.333 L 7.65 5.833 C 7.65 6.883 7.65 7.408 7.436 7.81 C 7.247 8.163 6.945 8.449 6.575 8.629 C 6.154 8.833 5.602 8.833 4.5 8.833 Z",
            fill: "transparent",
            strokeWidth: "2",
            stroke: color,
            strokeMiterlimit: "10",
          }),
        })
      : /*#__PURE__*/ _jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "14",
          height: "12",
          children: /*#__PURE__*/ _jsx("path", {
            d: "M 1 6 C 1 4.25 1 3.375 1.327 2.706 C 1.615 2.118 2.074 1.64 2.638 1.341 C 3.28 1 4.12 1 5.8 1 L 8.2 1 C 9.88 1 10.72 1 11.362 1.341 C 11.926 1.64 12.385 2.118 12.673 2.706 C 13 3.375 13 4.25 13 6 C 13 7.75 13 8.625 12.673 9.294 C 12.385 9.882 11.926 10.36 11.362 10.659 C 10.72 11 9.88 11 8.2 11 L 5.8 11 C 4.12 11 3.28 11 2.638 10.659 C 2.074 10.36 1.615 9.882 1.327 9.294 C 1 8.625 1 7.75 1 6 Z",
            fill: "transparent",
            strokeWidth: "2",
            stroke: color,
            strokeLinejoin: "round",
            strokeDasharray: "",
          }),
        });
  };
  const stackContainer = {
    initial: {
      x: 7.75,
      scale: 1,
      transition: { ...transition, delay: 0.4, delayChildren: 0.3 },
    },
    hidden: {
      x: -60,
      scale: 0.8,
      transition: { ...transition, staggerChildren: 0.01 },
    },
  };
  const stack = {
    initial: { scale: [1, 1.2, 1], transition: { duration: 0.4 } },
    hidden: { scale: [1, 1.2, 1], transition: { duration: 0.5 } },
  };
  const gridContainer = {
    initial: { transition: { staggerChildren: 0.03, delayChildren: 0 } },
    hidden: { transition: { staggerChildren: 0.03, delayChildren: 0.4 } },
  };
  const grid = {
    initial: { opacity: 0, scale: 0.5, transition: transition },
    hidden: { opacity: 1, scale: 1, transition: transition },
  };
  const [tap, setTap] = React.useState(false);
  const [hover, setHover] = React.useState(false); // const timer = setTimeout(() => {
  //     setStore({ grid: store.layout })
  // }, 1000)
  // function Tap() {
  //     clearTimeout(timer)
  //     setStore({ layout: !store.layout })
  //     timer
  // }
  return /*#__PURE__*/ _jsxs(motion.div, {
    // title={"Change Layout"}
    style: {
      position: "relative",
      width: 42,
      height: 42,
      borderRadius: 42,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: fill,
      overflow: "hidden",
    }, // onTap={() => setStore({ layout: !store.layout })}
    whileHover: { background: fill_tap },
    transition: { duration: 0.15 },
    onMouseEnter: () => {
      setHover(true);
    },
    onMouseLeave: () => {
      setHover(false);
    },
    children: [
      /*#__PURE__*/ _jsx(motion.div, {
        style: {
          position: "absolute",
          height: 24,
          width: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // background: "green",
          overflow: "hidden",
        },
        children: /*#__PURE__*/ _jsxs(motion.div, {
          name: "Stack",
          style: { position: "absolute", height: 12, display: "flex", gap: 1 },
          variants: stackContainer,
          initial: false,
          animate: store.layout ? "hidden" : "initial",
          children: [
            /*#__PURE__*/ _jsx(motion.div, {
              variants: stack,
              children: /*#__PURE__*/ _jsx(SVG, {
                color: hover ? hover_color : color,
                grid: undefined,
              }),
            }),
            /*#__PURE__*/ _jsx(motion.div, {
              variants: stack,
              children: /*#__PURE__*/ _jsx(SVG, {
                color: hover ? hover_color : color,
                grid: undefined,
              }),
            }),
            /*#__PURE__*/ _jsx(motion.div, {
              variants: stack,
              children: /*#__PURE__*/ _jsx(SVG, {
                color: hover ? hover_color : color,
                grid: undefined,
              }),
            }),
            /*#__PURE__*/ _jsx(motion.div, {
              variants: stack,
              children: /*#__PURE__*/ _jsx(SVG, {
                color: hover ? hover_color : color,
                grid: undefined,
              }),
            }),
          ],
        }),
      }),
      /*#__PURE__*/ _jsxs(motion.div, {
        name: "Grid",
        style: {
          position: "absolute",
          top: 11,
          left: 12,
          width: 18,
          height: 20,
        },
        variants: gridContainer,
        initial: false,
        animate: store.layout ? "hidden" : "initial",
        children: [
          /*#__PURE__*/ _jsx(motion.div, {
            variants: grid,
            style: { position: "absolute", top: 0, left: 0 },
            children: /*#__PURE__*/ _jsx(SVG, {
              color: hover ? hover_color : color,
              grid: true,
            }),
          }),
          /*#__PURE__*/ _jsx(motion.div, {
            variants: grid,
            style: {
              position: "absolute",
              width: 9,
              height: 10,
              top: 0,
              right: 0,
            },
            children: /*#__PURE__*/ _jsx(SVG, {
              color: hover ? hover_color : color,
              grid: true,
            }),
          }),
          /*#__PURE__*/ _jsx(motion.div, {
            variants: grid,
            style: { position: "absolute", bottom: 0, left: 0 },
            children: /*#__PURE__*/ _jsx(SVG, {
              color: hover ? hover_color : color,
              grid: true,
            }),
          }),
          /*#__PURE__*/ _jsx(motion.div, {
            variants: grid,
            style: { position: "absolute", bottom: 0, right: 0 },
            children: /*#__PURE__*/ _jsx(SVG, {
              color: hover ? hover_color : color,
              grid: true,
            }),
          }),
        ],
      }),
    ],
  });
}
Layouts.defaultProps = {
  color: "#000000",
  fill: "#dddddd",
  fill_tap: "#ffffff",
};
addPropertyControls(Layouts, {
  color: { type: ControlType.Color },
  hover_color: { type: ControlType.Color },
  fill: { type: ControlType.Color },
  fill_tap: { type: ControlType.Color },
});
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Layouts",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
