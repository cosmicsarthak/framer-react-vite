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
 */ const transition = { type: "spring", stiffness: 170, damping: 28 };
export default function Volume(props) {
  const { color, fill, fill_tap, onTap, hover_effect, hover_color } = props;
  const [store, setStore] = useStore();
  const volumeOnContainer = {
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        ...transition,
        staggerChildren: 0.1, // delayChildren: 0.3,
        delay: 0.2,
      },
    },
    hide: {
      scale: 0,
      opacity: 0,
      transition: { ...transition, staggerChildren: 0.1 },
    },
  };
  const volumeOn = {
    show: {
      scale: [1, 0.8, 1],
      opacity: [1, 0.5, 1],
      transition: { duration: 1.2, repeat: "Infinity" },
    },
    hide: { scale: 0.5, opacity: 0, transition: transition },
  };
  const volumeOffContainer = {
    show: {
      transition: { ...transition, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hide: { transition: { ...transition, staggerChildren: 0.1 } },
  };
  const volumeOff = {
    show: { scale: 1, opacity: 1, transition: transition },
    hide: { scale: 0.5, opacity: 0, transition: transition },
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/ _jsxs(motion.div, {
    // title={"Toggle Sounds."}
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
    },
    onTap: onTap,
    whileHover: { background: hover_effect && fill_tap },
    transition: { duration: 0.15 },
    onMouseEnter: () => {
      setHover(true);
    },
    onMouseLeave: () => {
      setHover(false);
    },
    children: [
      /*#__PURE__*/ _jsx(motion.svg, {
        name: "Sound",
        style: { position: "absolute", top: 9, left: 9 },
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        initial: false,
        animate: {
          scaleY: store.sound ? [1, 0.8, 1] : [1, 0.7, 1],
          transition: { duration: 0.4 },
        },
        children: /*#__PURE__*/ _jsx("path", {
          d: "M 14 14.813 L 14 9.186 C 14 6.041 14 4.469 13.075 4.077 C 12.149 3.686 11.06 4.797 8.882 7.022 C 7.754 8.174 7.111 8.429 5.506 8.429 C 4.103 8.429 3.401 8.429 2.896 8.773 C 1.85 9.487 2.01 10.882 2.01 12 C 2.01 13.118 1.851 14.513 2.898 15.227 C 3.402 15.571 4.104 15.571 5.507 15.571 C 7.112 15.571 7.755 15.826 8.883 16.978 C 11.061 19.202 12.15 20.314 13.076 19.923 C 14.001 19.531 14.001 17.959 14.001 14.813 Z",
          fill: "transparent",
          strokeWidth: "2",
          stroke: hover ? hover_color : color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "",
        }),
      }),
      /*#__PURE__*/ _jsxs(motion.div, {
        name: "On",
        style: { position: "absolute", top: 9, right: 8, width: 9, height: 24 },
        variants: volumeOnContainer,
        initial: "hide",
        animate: store.sound ? "show" : "hide",
        children: [
          /*#__PURE__*/ _jsx(motion.svg, {
            style: { position: "absolute", top: 0, left: 0 },
            xmlns: "http://www.w3.org/2000/svg",
            width: "5",
            height: "24",
            variants: volumeOn,
            children: /*#__PURE__*/ _jsx("path", {
              d: "M 2 9 C 2.625 9.82 3 10.863 3 12 C 3 13.137 2.625 14.18 2 15",
              fill: "transparent",
              strokeWidth: "2",
              stroke: hover ? hover_color : color,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "",
            }),
          }),
          /*#__PURE__*/ _jsx(motion.svg, {
            style: { position: "absolute", top: 0, right: 0 },
            xmlns: "http://www.w3.org/2000/svg",
            width: "6",
            height: "24",
            variants: volumeOn,
            children: /*#__PURE__*/ _jsx("path", {
              d: "M 2 7 C 3.25 8.366 4 10.106 4 12 C 4 13.894 3.25 15.634 2 17",
              fill: "transparent",
              strokeWidth: "2",
              stroke: hover ? hover_color : color,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "",
            }),
          }),
        ],
      }),
      /*#__PURE__*/ _jsxs(motion.div, {
        name: "Off",
        style: { position: "absolute", top: 9, right: 8, width: 8, height: 24 },
        variants: volumeOffContainer,
        initial: "show",
        animate: store.sound ? "hide" : "show",
        children: [
          /*#__PURE__*/ _jsx(motion.svg, {
            style: { position: "absolute", top: 0, left: 0 },
            xmlns: "http://www.w3.org/2000/svg",
            width: "8",
            height: "24",
            variants: volumeOff,
            children: /*#__PURE__*/ _jsx("path", {
              d: "M 2 10 L 6 14",
              fill: "transparent",
              strokeWidth: "2",
              stroke: hover ? hover_color : color,
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              strokeDasharray: "",
            }),
          }),
          /*#__PURE__*/ _jsx(motion.svg, {
            style: { position: "absolute", top: 0, right: 0 },
            xmlns: "http://www.w3.org/2000/svg",
            width: "8",
            height: "24",
            variants: volumeOff,
            children: /*#__PURE__*/ _jsx("path", {
              d: "M 2 14 L 6 10",
              fill: "transparent",
              strokeWidth: "2",
              stroke: hover ? hover_color : color,
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              strokeDasharray: "",
            }),
          }),
        ],
      }),
    ],
  });
}
Volume.defaultProps = {
  color: "#000000",
  fill: "#dddddd",
  fill_tap: "#ffffff",
  hover_effect: true,
};
addPropertyControls(Volume, {
  color: { type: ControlType.Color },
  hover_color: { type: ControlType.Color },
  fill: { type: ControlType.Color },
  fill_tap: { type: ControlType.Color },
  hover_effect: { type: ControlType.Boolean },
});
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Volume",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
