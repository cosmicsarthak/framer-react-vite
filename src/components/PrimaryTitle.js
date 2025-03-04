import { jsx as _jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import { addPropertyControls, ControlType } from "../framer_scripts/framer.K3G2LCX5.mjs";
import { useStore } from "https://framerusercontent.com/modules/RGCgkyyKvYCOcpgTFJih/l8apYUQ1NMMBi28Mu8sO/Page.js";
/**
#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */ const breakpoint = {
  monitor: "(max-width: 1560px)",
  desktop: "(max-width: 1400px)",
  tablet: "(max-width: 1199px)",
  book: "(max-width: 1040px)",
  phone: "(max-width: 640px)",
  phoneS: "(max-width: 400px)",
  phoneXS: "(max-width: 320px)",
  phoneXXS: "(max-width: 260px)",
  mini: "(max-width: 360px)",
};
export default function PrimaryTitle(props) {
  const {
    trigger,
    text,
    text_chn,
    color,
    font,
    enter_transition,
    exit_transition,
    stiffness,
    damping,
    delay,
    gap,
    exit_delay,
  } = props;
  const [store, setStore] = useStore();
  const letterVariants = {
    hide: { y: "100%", transition: { duration: 0, delay: gap + exit_delay } },
    show: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: stiffness,
        damping: damping,
        delay: gap + delay,
      },
    },
  };
  const ref = React.useRef(null);
  return /*#__PURE__*/ _jsx(motion.div, {
    style: {
      width: "max-content",
      display: "flex",
      gap: 0,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    children: /*#__PURE__*/ _jsx(AnimatePresence, {
      children: /*#__PURE__*/ _jsx(motion.p, {
        style: {
          display: "inline-block",
          color: color,
          padding: 0,
          margin: 0,
          ...font,
        },
        variants: letterVariants,
        initial: "hide",
        animate: "show",
        exit: "hide",
        children: store.language === 1 ? text_chn : text,
      }),
    }),
  });
}
PrimaryTitle.defaultProps = {
  type: "String",
  text: "Hello- -WorldPp!",
  color: "#000",
  gap: 0.01,
  delay: 0.03,
  status: true,
  visible: "manual",
  align: "flex-start",
};
addPropertyControls(PrimaryTitle, {
  trigger: {
    type: ControlType.Enum,
    options: ["Enter", "Exit", "Show", "Hide"],
  },
  text: { type: ControlType.String, title: "Text" },
  text_chn: { type: ControlType.String, title: "文本" },
  color: { type: ControlType.Color, defaultValue: "#000" },
  font: {
    // @ts-ignore: Internal API
    type: ControlType.Font,
    controls: "extended",
    displayFontSize: true,
    displayTextAlignment: false,
    defaultFontType: "sans-serif",
    defaultValue: { fontSize: 64, lineHeight: "1.3em" },
  },
  stiffness: {
    type: ControlType.Number,
    defaultValue: 140,
    min: 0,
    max: 3e3,
    step: 1,
    displayStepper: true,
  },
  damping: {
    type: ControlType.Number,
    defaultValue: 14,
    min: 0,
    max: 3e3,
    step: 1,
    displayStepper: true,
  },
  gap: {
    type: ControlType.Number,
    title: "Gap",
    defaultValue: 0,
    min: 0,
    max: 10,
    step: 0.01,
    displayStepper: true,
  },
  delay: {
    type: ControlType.Number,
    title: "Delay",
    defaultValue: 0,
    min: 0,
    max: 300,
    step: 0.01,
    displayStepper: true,
  },
  exit_delay: {
    type: ControlType.Number,
    title: "Exit Delay",
    defaultValue: 0,
    min: 0,
    max: 300,
    step: 0.01,
    displayStepper: true,
  },
});
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "PrimaryTitle",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
