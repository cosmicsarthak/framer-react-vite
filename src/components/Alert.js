import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { addPropertyControls, ControlType } from "../framer_scripts/framer.K3G2LCX5.mjs";
import { useStore } from "https://framerusercontent.com/modules/RGCgkyyKvYCOcpgTFJih/l8apYUQ1NMMBi28Mu8sO/Page.js";
/**
#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */ const transition = { type: "spring", stiffness: 170, damping: 28 };
export default function Alert(props) {
  const { color, fill, fill_tap, hover_effect, start } = props;
  const [store, setStore] = useStore();
  const up = useAnimationControls();
  const down = useAnimationControls();
  React.useEffect(() => {
    if (start) {
      up.start({
        rotate: [0, 30, -30, 20, -20, 10, -10, 0],
        transition: {
          duration: 0.8,
          ease: [0.5, 1, 0.89, 1],
          repeat: Infinity,
          repeatDelay: 2,
        },
      });
      down.start({
        y: [0, 1, 1, 1, 1, 1, 1, 0],
        transition: { duration: 0.8, repeat: Infinity, repeatDelay: 2 },
      });
    } else {
      up.stop();
      down.stop();
    }
  }, [start]);
  return /*#__PURE__*/ _jsxs(motion.div, {
    title: "Subscribe",
    style: {
      position: "relative",
      width: 42,
      height: 42,
      borderRadius: 12,
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // background: fill,
      overflow: "hidden",
    },
    children: [
      /*#__PURE__*/ _jsx(motion.svg, {
        style: { position: "absolute", originX: 0.5, originY: 0.2 },
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        animate: up,
        children: /*#__PURE__*/ _jsx("path", {
          d: "M 2.53 14.77 C 2.317 16.164 3.268 17.131 4.432 17.613 C 8.895 19.463 15.105 19.463 19.568 17.613 C 20.732 17.131 21.683 16.163 21.47 14.77 C 21.34 13.913 20.693 13.2 20.214 12.503 C 19.587 11.579 19.525 10.572 19.524 9.5 C 19.525 5.358 16.157 2 12 2 C 7.844 2 4.475 5.358 4.475 9.5 C 4.475 10.572 4.413 11.58 3.785 12.503 C 3.307 13.2 2.661 13.913 2.53 14.77 Z",
          fill: "transparent",
          strokeWidth: "1.8",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "",
        }),
      }),
      /*#__PURE__*/ _jsx(motion.svg, {
        style: { position: "absolute" },
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        animate: down,
        children: /*#__PURE__*/ _jsx("path", {
          d: "M 8 19 C 8.458 20.725 10.075 22 12 22 C 13.925 22 15.541 20.725 16 19",
          fill: "transparent",
          strokeWidth: "1.8",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "",
        }),
      }),
    ],
  });
}
Alert.defaultProps = {
  color: "#000000",
  fill: "#dddddd",
  fill_tap: "#ffffff",
  start: true,
};
addPropertyControls(Alert, {
  color: { type: ControlType.Color },
  fill: { type: ControlType.Color },
  fill_tap: { type: ControlType.Color },
  start: { type: ControlType.Boolean },
});
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Alert",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
