import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0";
import { useStore } from "https://framerusercontent.com/modules/RGCgkyyKvYCOcpgTFJih/l8apYUQ1NMMBi28Mu8sO/Page.js";
import * as React from "react";
const controlStore = createStore({ popup: false, popup_nav: false });
const transition = { type: "spring", stiffness: 170, damping: 28 };
const breakpoint = {
  tablet: "(max-width: 1199px)",
  phone: "(max-width: 540px)",
};
const volume = { default: 1, reduce: 0.55, slient: 0.5 };
const ease = { spring: [0.54, -0.5, 0.2, 1.5] };
const variants = {
  show: { opacity: 1, scale: 1, transition: { ...transition, delay: 0.2 } },
  hide: { opacity: 0, scale: 0.9, transition: transition },
};
export function Options(Component) {
  return (props) => {
    const [store, setStore] = controlStore();
    const [sstore, setSstore] = useStore();
    React.useEffect(() => {
      if (sstore.setting === false) {
        setStore({ popup: false, popup_nav: false });
      }
    }, [sstore.setting]);
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: {
        ...props.style,
        pointerEvents: store.popup ? "none" : store.popup_nav ? "none" : "auto",
      },
      variants: variants,
      initial: "show",
      animate: store.popup ? "hide" : store.popup_nav ? "hide" : "show",
    });
  };
}
export function Popup(Component) {
  return (props) => {
    const [store, setStore] = controlStore();
    return /*#__PURE__*/ _jsx(motion.div, {
      style: {
        position: "absolute",
        width: "max-content",
        height: "max-content",
      },
      initial: { x: 0, y: 0 },
      animate: {
        scale: store.popup_nav ? 0.4 : 1,
        opacity: store.popup_nav ? 0 : 1,
        x: store.popup ? -156 : 0,
        y: store.popup ? -150 : 0,
        zIndex: store.popup ? 5 : 4,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 30,
          zIndex: { delay: 0.4 },
        },
      },
      children: /*#__PURE__*/ _jsx(Component, {
        ...props,
        style: { ...props.style },
        variant: store.popup ? "Expanded" : "Collasped",
        close: () => {
          setStore({ popup: false });
        },
        open: () => setStore({ popup: true, popup_nav: false }),
      }),
    });
  };
}
export function Popup_Nav(Component) {
  return (props) => {
    const [store, setStore] = controlStore();
    return /*#__PURE__*/ _jsx(motion.div, {
      style: {
        position: "absolute",
        width: "max-content",
        height: "max-content",
      },
      initial: { x: 0, y: 0 },
      animate: {
        scale: store.popup ? 0.4 : 1,
        opacity: store.popup ? 0 : 1,
        x: store.popup_nav ? -156 : 0,
        y: store.popup_nav ? -233 : 0,
        zIndex: store.popup_nav ? 5 : 4,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 30,
          zIndex: { delay: 0.4 },
        },
      },
      children: /*#__PURE__*/ _jsx(Component, {
        ...props,
        style: { ...props.style },
        variant: store.popup_nav ? "Expanded" : "Collasped",
        close: () => {
          setStore({ popup_nav: false });
        },
        open: () => setStore({ popup_nav: true, popup: false }),
      }),
    });
  };
}
export const __FramerMetadata__ = {
  exports: {
    Popup_Nav: {
      type: "reactHoc",
      name: "Popup_Nav",
      annotations: { framerContractVersion: "1" },
    },
    Popup: {
      type: "reactHoc",
      name: "Popup",
      annotations: { framerContractVersion: "1" },
    },
    Options: {
      type: "reactHoc",
      name: "Options",
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
