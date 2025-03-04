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
export default function Settings(props) {
  const { color, fill, fill_tap, hover_color } = props;
  const [store, setStore] = useStore();
  const Gear = {
    show: { scale: 1, opacity: 1, transition: { ...transition, delay: 0.2 } },
    hide: { scale: 0, opacity: 0, transition: { ...transition } },
  };
  const Arrow = {
    show: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    hide: {
      y: [0, -40, 40],
      scale: 0,
      opacity: 0,
      transition: { ...transition, y: { duration: 1 } },
    },
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/ _jsxs(motion.div, {
    // title={"Control Center"}
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
    //     setStore({ setting: !store.setting })
    //     // console.log(store.sound)
    // }}
    whileHover: { background: fill_tap },
    transition: { duration: 0.15 },
    onMouseEnter: () => {
      setHover(true);
    },
    onMouseLeave: () => {
      setHover(false);
    },
    children: [
      /*#__PURE__*/ _jsxs(motion.div, {
        name: "Gear",
        style: {
          position: "absolute",
          height: 42,
          width: 42,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        variants: Gear,
        initial: "show",
        animate: store.setting ? "hide" : "show",
        children: [
          /*#__PURE__*/ _jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            children: /*#__PURE__*/ _jsx("path", {
              d: "M 16 6 L 8 6 C 4.686 6 2 8.686 2 12 C 2 15.314 4.686 18 8 18 L 16 18 C 19.314 18 22 15.314 22 12 C 22 8.686 19.314 6 16 6 Z",
              fill: "transparent",
              strokeWidth: "2",
              stroke: hover ? hover_color : color,
              strokeMiterlimit: "10",
              strokeDasharray: "",
            }),
          }),
          /*#__PURE__*/ _jsx(motion.svg, {
            style: { position: "absolute", left: 10 },
            animate: { x: hover ? 8 : 0, transition: transition },
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            children: /*#__PURE__*/ _jsx("path", {
              d: "M 10 12 C 10 13.657 8.657 15 7 15 C 5.343 15 4 13.657 4 12 C 4 10.343 5.343 9 7 9 C 8.657 9 10 10.343 10 12 Z",
              fill: "transparent",
              strokeWidth: "2",
              stroke: hover ? hover_color : color,
              strokeMiterlimit: "10",
              strokeDasharray: "",
            }),
          }),
        ],
      }),
      /*#__PURE__*/ _jsx(motion.div, {
        name: "Arrow",
        style: {
          position: "absolute",
          height: 24,
          width: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        variants: Arrow,
        initial: false,
        animate: store.setting ? "show" : "hide",
        children: /*#__PURE__*/ _jsx("svg", {
          width: "24",
          height: "24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/ _jsx("path", {
            d: "M18 15s-4.419-6-6-6c-1.581 0-6 6-6 6",
            stroke: hover ? hover_color : color,
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        }),
      }),
    ],
  });
}
Settings.defaultProps = {
  color: "#000000",
  fill: "#dddddd",
  fill_tap: "#ffffff",
};
addPropertyControls(Settings, {
  color: { type: ControlType.Color },
  hover_color: { type: ControlType.Color },
  fill: { type: ControlType.Color },
  fill_tap: { type: ControlType.Color },
}); //    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
//         <path
//             d="M 15.5 12 C 15.5 13.933 13.933 15.5 12 15.5 C 10.067 15.5 8.5 13.933 8.5 12 C 8.5 10.067 10.067 8.5 12 8.5 C 13.933 8.5 15.5 10.067 15.5 12 Z"
//             fill="transparent"
//             strokeWidth="1.8"
//             stroke={color}
//             strokeMiterlimit="10"
//             strokeDasharray=""
//         ></path>
//         <path
//             d="M 20.79 9.152 C 21.598 10.542 22 11.237 22 12 C 22 12.763 21.597 13.458 20.79 14.848 L 18.867 18.164 C 18.064 19.548 17.662 20.24 17.002 20.62 C 16.342 21 15.54 21 13.937 21 L 10.063 21 C 8.46 21 7.658 21 6.998 20.62 C 6.338 20.24 5.936 19.548 5.133 18.164 L 3.21 14.848 C 2.403 13.458 2 12.763 2 12 C 2 11.237 2.403 10.542 3.21 9.152 L 5.133 5.836 C 5.936 4.452 6.338 3.76 6.998 3.38 C 7.658 3 8.46 3 10.063 3 L 13.937 3 C 15.54 3 16.342 3 17.002 3.38 C 17.662 3.76 18.064 4.452 18.867 5.836 L 20.791 9.152 Z"
//             fill="transparent"
//             strokeWidth="1.8"
//             stroke={color}
//             strokeMiterlimit="10"
//             strokeDasharray=""
//         ></path>
//     </svg>
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Settings",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
