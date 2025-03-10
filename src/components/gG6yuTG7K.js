// Generated by Framer (570b8b5)
import { jsx as _jsx } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  SVG,
  useActiveVariantCallback,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { Effect_MagicHover } from "https://framerusercontent.com/modules/yue1wEIuxL5Wxj17VKpu/rvoe6u8OOiWRrmZZxev9/Toggle.js";
import * as localizedValues from "./gG6yuTG7K-0.js";
const MotionDivEffect_MagicHover = Effect_MagicHover(motion.div);
const cycleOrder = ["vkaLybnx6"];
const serializationHash = "framer-cANkF";
const variantClassNames = { vkaLybnx6: "framer-v-69ghkb" };
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
const getProps = ({ height, id, tap, tapA, width, ...props }) => {
  return {
    ...props,
    jKPG0MM0s: tapA !== null && tapA !== void 0 ? tapA : props.jKPG0MM0s,
    OjGOS3EcC: tap !== null && tap !== void 0 ? tap : props.OjGOS3EcC,
  };
};
const createLayoutDependency = (props, variants) =>
  variants.join("-") + props.layoutDependency;
const Component = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const {
    style,
    className,
    layoutId,
    variant,
    OjGOS3EcC,
    jKPG0MM0s,
    ...restProps
  } = getProps(props);
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
    defaultVariant: "vkaLybnx6",
    transitions,
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onTap1hzrqp0 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (OjGOS3EcC) {
      const res = await OjGOS3EcC(...args);
      if (res === false) return false;
    }
    if (jKPG0MM0s) {
      const res = await jKPG0MM0s(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  return /*#__PURE__*/ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /*#__PURE__*/ _jsx(Transition, {
      value: transition,
      children: /*#__PURE__*/ _jsx(motion.div, {
        ...restProps,
        animate: variants,
        className: cx(
          serializationHash,
          ...sharedStyleClassNames,
          "framer-69ghkb",
          className,
          classNames,
        ),
        "data-framer-name": "Variant 1",
        "data-highlight": true,
        initial: variant,
        layoutDependency: layoutDependency,
        layoutId: "vkaLybnx6",
        onHoverEnd: () => setGestureState({ isHovered: false }),
        onHoverStart: () => setGestureState({ isHovered: true }),
        onTap: onTap1hzrqp0,
        onTapCancel: () => setGestureState({ isPressed: false }),
        onTapStart: () => setGestureState({ isPressed: true }),
        ref: ref !== null && ref !== void 0 ? ref : ref1,
        style: { ...style },
        children: /*#__PURE__*/ _jsx(MotionDivEffect_MagicHover, {
          className: "framer-wdrrxy",
          layoutDependency: layoutDependency,
          layoutId: "jTEaZ8k9P",
          children: /*#__PURE__*/ _jsx(SVG, {
            className: "framer-fs0oxr",
            layout: "position",
            layoutDependency: layoutDependency,
            layoutId: "I7HfBrlD8",
            opacity: 1,
            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><path d="M 1.417 3.372 L 7.792 3.372 M 15.583 3.372 L 12.042 3.372 M 7.792 3.372 L 12.042 3.372 M 7.792 3.372 L 7.792 1.417 M 12.042 3.372 C 11.295 6.044 9.73 8.569 7.943 10.789 M 3.39 15.583 C 4.834 14.256 6.464 12.627 7.943 10.789 M 7.943 10.789 C 7.032 9.721 5.757 7.994 5.393 7.212 M 7.943 10.789 L 10.676 13.63" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
            svgContentId: 3560494259,
            withExternalLayout: true,
          }),
        }),
      }),
    }),
  });
});
const css = [
  '.framer-cANkF[data-border="true"]::after, .framer-cANkF [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-cANkF.framer-1xi2tej, .framer-cANkF .framer-1xi2tej { display: block; }",
  ".framer-cANkF.framer-69ghkb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 42px; }",
  ".framer-cANkF .framer-wdrrxy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 42px; z-index: 1; }",
  ".framer-cANkF .framer-fs0oxr { flex: none; height: 17px; position: relative; width: 17px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-cANkF.framer-69ghkb, .framer-cANkF .framer-wdrrxy { gap: 0px; } .framer-cANkF.framer-69ghkb > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-cANkF.framer-69ghkb > :first-child { margin-left: 0px; } .framer-cANkF.framer-69ghkb > :last-child { margin-right: 0px; } .framer-cANkF .framer-wdrrxy > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-cANkF .framer-wdrrxy > :first-child { margin-top: 0px; } .framer-cANkF .framer-wdrrxy > :last-child { margin-bottom: 0px; } }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 42
 * @framerIntrinsicWidth 42
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}
 * @framerVariables {"OjGOS3EcC":"tap","jKPG0MM0s":"tapA"}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 */ const FramergG6yuTG7K = withCSS(Component, css, "framer-cANkF");
export default FramergG6yuTG7K;
FramergG6yuTG7K.displayName = "Button/Chn";
FramergG6yuTG7K.defaultProps = { height: 42, width: 42 };
addPropertyControls(FramergG6yuTG7K, {
  OjGOS3EcC: { title: "Tap", type: ControlType.EventHandler },
  jKPG0MM0s: { title: "Tap A", type: ControlType.EventHandler },
});
addFonts(FramergG6yuTG7K, []);
export const __FramerMetadata__ = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramergG6yuTG7K",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerIntrinsicHeight: "42",
        framerDisplayContentsDiv: "false",
        framerIntrinsicWidth: "42",
        framerVariables: '{"OjGOS3EcC":"tap","jKPG0MM0s":"tapA"}',
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
