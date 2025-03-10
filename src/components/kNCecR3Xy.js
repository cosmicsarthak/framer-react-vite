// Generated by Framer (9a49031)
import { jsx as _jsx } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  getFonts,
  useActiveVariantCallback,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import * as localizedValues from "./kNCecR3Xy-0.js";
import UtilitiesScrollTip from "https://framerusercontent.com/modules/RuyVGw6mFLt1kPRdyrmG/xj3zvWXt6AwDx6pu02tf/UP8gL43yw.js";
const UtilitiesScrollTipFonts = getFonts(UtilitiesScrollTip);
const cycleOrder = ["x79Cymwke", "NASPpDxlW"];
const serializationHash = "framer-rzU9R";
const variantClassNames = {
  NASPpDxlW: "framer-v-ucvs99",
  x79Cymwke: "framer-v-xqjup5",
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach(
        (variant) =>
          variant && Object.assign(nextOverrides, overrides[variant]),
      );
  return nextOverrides;
}
const transitions = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
const valuesByLocaleId = { YzTqEHveH: localizedValues };
const getLocalizedValue = (key, locale) => {
  while (locale) {
    const values = valuesByLocaleId[locale.id];
    if (values) {
      const value = values[key];
      if (value) {
        return value;
      }
    }
    locale = locale.fallback;
  }
};
const Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition =
    value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(
    () => ({ ...config, transition }),
    [JSON.stringify(transition)],
  );
  return /*#__PURE__*/ _jsx(MotionConfigContext.Provider, {
    value: contextValue,
    children: children,
  });
};
const humanReadableVariantMap = {
  Collasped: "NASPpDxlW",
  Expanded: "x79Cymwke",
};
const getProps = ({ height, id, mouseEnter, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    IvqgtxtHe:
      mouseEnter !== null && mouseEnter !== void 0
        ? mouseEnter
        : props.IvqgtxtHe,
    variant:
      (_ref =
        (_humanReadableVariantMap_props_variant =
          humanReadableVariantMap[props.variant]) !== null &&
        _humanReadableVariantMap_props_variant !== void 0
          ? _humanReadableVariantMap_props_variant
          : props.variant) !== null && _ref !== void 0
        ? _ref
        : "x79Cymwke",
  };
};
const createLayoutDependency = (props, variants) =>
  variants.join("-") + props.layoutDependency;
const Component = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  const { activeLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, IvqgtxtHe, ...restProps } =
    getProps(props);
  const {
    baseVariant,
    classNames,
    gestureVariant,
    setGestureState,
    setVariant,
    transition,
    variants,
  } = useVariantState({
    cycleOrder,
    defaultVariant: "x79Cymwke",
    transitions,
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onMouseEnter28sqqd = activeVariantCallback(async (...args) => {
    if (IvqgtxtHe) {
      const res = await IvqgtxtHe(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  return /*#__PURE__*/ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /*#__PURE__*/ _jsx(motion.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true }),
      onHoverEnd: () => setGestureState({ isHovered: false }),
      onTapStart: () => setGestureState({ isPressed: true }),
      onTap: () => setGestureState({ isPressed: false }),
      onTapCancel: () => setGestureState({ isPressed: false }),
      className: cx("framer-rzU9R", ...sharedStyleClassNames, classNames),
      style: { display: "contents" },
      children: /*#__PURE__*/ _jsx(Transition, {
        value: transition,
        children: /*#__PURE__*/ _jsx(motion.div, {
          ...restProps,
          className: cx("framer-xqjup5", className),
          "data-framer-name": "Expanded",
          "data-highlight": true,
          layoutDependency: layoutDependency,
          layoutId: "x79Cymwke",
          onMouseEnter: onMouseEnter28sqqd,
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style },
          ...addPropertyOverrides(
            { NASPpDxlW: { "data-framer-name": "Collasped" } },
            baseVariant,
            gestureVariant,
          ),
          children: /*#__PURE__*/ _jsx(motion.div, {
            className: "framer-1mawjvd",
            layoutDependency: layoutDependency,
            layoutId: "Nicai3q2w",
            style: {
              backgroundColor:
                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            },
            children: /*#__PURE__*/ _jsx(motion.div, {
              className: "framer-1yhq2d6-container",
              layoutDependency: layoutDependency,
              layoutId: "kYHlRcHDL-container",
              children: /*#__PURE__*/ _jsx(UtilitiesScrollTip, {
                height: "100%",
                id: "kYHlRcHDL",
                layoutId: "kYHlRcHDL",
                style: { height: "100%", width: "100%" },
                variant: "r1qjybY2U",
                width: "100%",
              }),
            }),
          }),
        }),
      }),
    }),
  });
});
const css = [
  '.framer-rzU9R [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-rzU9R .framer-1x51tue { display: block; }",
  ".framer-rzU9R .framer-xqjup5 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
  ".framer-rzU9R .framer-1mawjvd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 42px; will-change: var(--framer-will-change-override, transform); }",
  ".framer-rzU9R .framer-1yhq2d6-container { flex: none; height: 42px; position: relative; width: 42px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-rzU9R .framer-xqjup5, .framer-rzU9R .framer-1mawjvd { gap: 0px; } .framer-rzU9R .framer-xqjup5 > *, .framer-rzU9R .framer-1mawjvd > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-rzU9R .framer-xqjup5 > :first-child, .framer-rzU9R .framer-1mawjvd > :first-child { margin-left: 0px; } .framer-rzU9R .framer-xqjup5 > :last-child, .framer-rzU9R .framer-1mawjvd > :last-child { margin-right: 0px; } }",
  ".framer-rzU9R.framer-v-ucvs99 .framer-1mawjvd { height: 12px; padding: 0px 0px 0px 6px; width: 12px; }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 42
 * @framerIntrinsicWidth 42
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"NASPpDxlW":{"layout":["auto","auto"]}}}
 * @framerVariables {"IvqgtxtHe":"mouseEnter"}
 * @framerImmutableVariables true
 */ const FramerkNCecR3Xy = withCSS(Component, css, "framer-rzU9R");
export default FramerkNCecR3Xy;
FramerkNCecR3Xy.displayName = "Utilities/Touchpad";
FramerkNCecR3Xy.defaultProps = { height: 42, width: 42 };
addPropertyControls(FramerkNCecR3Xy, {
  variant: {
    options: ["x79Cymwke", "NASPpDxlW"],
    optionTitles: ["Expanded", "Collasped"],
    title: "Variant",
    type: ControlType.Enum,
  },
  IvqgtxtHe: { title: "Mouse Enter", type: ControlType.EventHandler },
});
addFonts(FramerkNCecR3Xy, [...UtilitiesScrollTipFonts]);
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerkNCecR3Xy",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "42",
        framerIntrinsicWidth: "42",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"NASPpDxlW":{"layout":["auto","auto"]}}}',
        framerImmutableVariables: "true",
        framerVariables: '{"IvqgtxtHe":"mouseEnter"}',
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
