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
import {
  Effect_MagicHover,
  Language_ToEn,
} from "https://framerusercontent.com/modules/yue1wEIuxL5Wxj17VKpu/rvoe6u8OOiWRrmZZxev9/Toggle.js";
import * as localizedValues from "./Bq2Ac4EKY-0.js";
const MotionDivEffect_MagicHover = Effect_MagicHover(motion.div);
const MotionDivLanguage_ToEn = Language_ToEn(motion.div);
const cycleOrder = ["sFst8IwNF"];
const serializationHash = "framer-oqBO2";
const variantClassNames = { sFst8IwNF: "framer-v-exfd8n" };
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
    bC9GUQM7W: tapA !== null && tapA !== void 0 ? tapA : props.bC9GUQM7W,
    U7qsjoadA: tap !== null && tap !== void 0 ? tap : props.U7qsjoadA,
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
    U7qsjoadA,
    bC9GUQM7W,
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
    defaultVariant: "sFst8IwNF",
    transitions,
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onTap8lhpt7 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (U7qsjoadA) {
      const res = await U7qsjoadA(...args);
      if (res === false) return false;
    }
    if (bC9GUQM7W) {
      const res = await bC9GUQM7W(...args);
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
      children: /*#__PURE__*/ _jsx(MotionDivLanguage_ToEn, {
        ...restProps,
        animate: variants,
        className: cx(
          serializationHash,
          ...sharedStyleClassNames,
          "framer-exfd8n",
          className,
          classNames,
        ),
        "data-framer-name": "Variant 1",
        "data-highlight": true,
        initial: variant,
        layoutDependency: layoutDependency,
        layoutId: "sFst8IwNF",
        onHoverEnd: () => setGestureState({ isHovered: false }),
        onHoverStart: () => setGestureState({ isHovered: true }),
        onTap: onTap8lhpt7,
        onTapCancel: () => setGestureState({ isPressed: false }),
        onTapStart: () => setGestureState({ isPressed: true }),
        ref: ref !== null && ref !== void 0 ? ref : ref1,
        style: { ...style },
        children: /*#__PURE__*/ _jsx(MotionDivEffect_MagicHover, {
          className: "framer-sv6sil",
          layoutDependency: layoutDependency,
          layoutId: "VMBLoH6jB",
          children: /*#__PURE__*/ _jsx(SVG, {
            className: "framer-vz6ci2",
            "data-framer-name": "graphic",
            layout: "position",
            layoutDependency: layoutDependency,
            layoutId: "AwzCMCvG3",
            opacity: 1,
            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 5.999 19 L 12 5 L 12 5 L 17.999 19" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 8.5 15 L 15.5 15" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round"></path></svg>',
            svgContentId: 4168136687,
            withExternalLayout: true,
          }),
        }),
      }),
    }),
  });
});
const css = [
  '.framer-oqBO2[data-border="true"]::after, .framer-oqBO2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-oqBO2.framer-sf0zwh, .framer-oqBO2 .framer-sf0zwh { display: block; }",
  ".framer-oqBO2.framer-exfd8n { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 42px; }",
  ".framer-oqBO2 .framer-sv6sil { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 42px; z-index: 1; }",
  ".framer-oqBO2 .framer-vz6ci2 { flex: none; height: 24px; position: relative; width: 24px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-oqBO2.framer-exfd8n, .framer-oqBO2 .framer-sv6sil { gap: 0px; } .framer-oqBO2.framer-exfd8n > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-oqBO2.framer-exfd8n > :first-child { margin-left: 0px; } .framer-oqBO2.framer-exfd8n > :last-child { margin-right: 0px; } .framer-oqBO2 .framer-sv6sil > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-oqBO2 .framer-sv6sil > :first-child { margin-top: 0px; } .framer-oqBO2 .framer-sv6sil > :last-child { margin-bottom: 0px; } }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 42
 * @framerIntrinsicWidth 42
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}
 * @framerVariables {"U7qsjoadA":"tap","bC9GUQM7W":"tapA"}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 */ const FramerBq2Ac4EKY = withCSS(Component, css, "framer-oqBO2");
export default FramerBq2Ac4EKY;
FramerBq2Ac4EKY.displayName = "Button/En";
FramerBq2Ac4EKY.defaultProps = { height: 42, width: 42 };
addPropertyControls(FramerBq2Ac4EKY, {
  U7qsjoadA: { title: "Tap", type: ControlType.EventHandler },
  bC9GUQM7W: { title: "Tap A", type: ControlType.EventHandler },
});
addFonts(FramerBq2Ac4EKY, []);
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerBq2Ac4EKY",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "42",
        framerContractVersion: "1",
        framerIntrinsicWidth: "42",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}',
        framerVariables: '{"U7qsjoadA":"tap","bC9GUQM7W":"tapA"}',
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
