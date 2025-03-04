import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { motion } from "framer-motion";
import { addPropertyControls, ControlType } from "../framer_scripts/framer.K3G2LCX5.mjs";
import { useStore } from "https://framerusercontent.com/modules/RGCgkyyKvYCOcpgTFJih/l8apYUQ1NMMBi28Mu8sO/Page.js";
/**
#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */ const transition = { ease: "easeInOut", duration: 0.6 };
export default function Appearence(props) {
  const { color, fill, fill_tap, hover_effect, hover_color } = props;
  const [store, setStore] = useStore();
  const light = {
    show: { x: 0, y: 0, rotate: 45, scale: 1, transition: transition },
    hide: {
      x: [0, -30, 30],
      y: [0, 32, 32],
      rotate: 0,
      scale: 0.6,
      transition: transition,
    },
  };
  const dark = {
    show: { x: 0, y: 0, rotate: 0, scale: 1, transition: transition },
    hide: {
      x: [0, -30, 30],
      y: [0, 32, 32],
      rotate: 60,
      scale: 0.6,
      transition: transition,
    },
    default: { x: 30, y: 32, rotate: 60, scale: 0.6, transition: transition },
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/ _jsxs(motion.div, {
    // title={"Change Appearence."}
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
    }, // onTap={() => {
    //     setStore({ darkmode: !store.darkmode })
    // }}
    whileHover: { background: hover_effect && fill_tap },
    transition: { duration: 0.15 },
    onMouseEnter: () => {
      setHover(true);
    },
    onMouseLeave: () => {
      setHover(false);
    },
    children: [
      /*#__PURE__*/ _jsxs(motion.svg, {
        style: { position: "absolute" },
        width: "24",
        height: "24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        variants: light,
        initial: false,
        animate: store.darkmode ? "hide" : "show",
        children: [
          /*#__PURE__*/ _jsx("path", {
            d: "M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
            stroke: hover ? hover_color : color,
            strokeWidth: "2",
          }),
          /*#__PURE__*/ _jsx("path", {
            d: "M12 2v2.5m0 15V22m7.072-17.071-1.767 1.767M6.698 17.303 4.93 19.071M22.002 12h-2.5m-15 0h-2.5m17.07 7.071-1.767-1.768M6.698 6.697 4.93 4.929",
            stroke: hover ? hover_color : color,
            strokeWidth: "1.8",
            strokeLinejoin: "round",
          }),
        ],
      }),
      /*#__PURE__*/ _jsx(motion.svg, {
        style: { position: "absolute" },
        width: "24",
        height: "24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        variants: dark,
        initial: false,
        animate: store.darkmode ? "show" : "hide",
        children: /*#__PURE__*/ _jsx("path", {
          d: "M21.5 14.078A8.557 8.557 0 0 1 9.922 2.5C5.668 3.497 2.5 7.315 2.5 11.873a9.627 9.627 0 0 0 9.627 9.627c4.558 0 8.376-3.168 9.373-7.422Z",
          stroke: hover ? hover_color : color,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      }),
    ],
  });
}
Appearence.defaultProps = {
  color: "#000000",
  fill: "#dddddd",
  fill_tap: "#ffffff",
  hover_effect: true,
};
addPropertyControls(Appearence, {
  color: { type: ControlType.Color },
  hover_color: { type: ControlType.Color },
  fill: { type: ControlType.Color },
  fill_tap: { type: ControlType.Color },
  hover_effect: { type: ControlType.Boolean },
}); // const light = {
//     show: {
//         scale: 1,
//         opacity: 1,
//         rotate: 0,
//         transition: { ...transition, delay: 0.4 },
//     },
//     hide: {
//         scale: 0.5,
//         opacity: 0,
//         rotate: [0, 30, -30],
//         transition: { transition },
//     },
// }
// const dark = {
//     show: {
//         scale: 1,
//         opacity: 1,
//         rotate: 0,
//         transition: { ...transition, delay: 0.4 },
//     },
//     hide: {
//         scale: 0.5,
//         opacity: 0,
//         rotate: 30,
//         transition: transition,
//     },
// }
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Appearence",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
