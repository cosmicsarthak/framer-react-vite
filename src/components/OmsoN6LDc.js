// Generated by Framer (9a49031)
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
import * as localizedValues from "./OmsoN6LDc-0.js";
const MotionDivEffect_MagicHover = Effect_MagicHover(motion.div);
const enabledGestures = { pB6nkQDjg: { hover: true } };
const cycleOrder = ["gAWvhOuby", "pB6nkQDjg"];
const serializationHash = "framer-IGHT7";
const variantClassNames = {
  gAWvhOuby: "framer-v-f0fdhc",
  pB6nkQDjg: "framer-v-10elm1r",
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
const humanReadableVariantMap = { Off: "pB6nkQDjg", On: "gAWvhOuby" };
const getProps = ({ height, id, tapA, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    heeY2JMQ7: tapA !== null && tapA !== void 0 ? tapA : props.heeY2JMQ7,
    variant:
      (_ref =
        (_humanReadableVariantMap_props_variant =
          humanReadableVariantMap[props.variant]) !== null &&
        _humanReadableVariantMap_props_variant !== void 0
          ? _humanReadableVariantMap_props_variant
          : props.variant) !== null && _ref !== void 0
        ? _ref
        : "gAWvhOuby",
  };
};
const createLayoutDependency = (props, variants) =>
  variants.join("-") + props.layoutDependency;
const Component = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  const { activeLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, heeY2JMQ7, ...restProps } =
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
    defaultVariant: "gAWvhOuby",
    enabledGestures,
    transitions,
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onTapio6yfw = activeVariantCallback(async (...args) => {
    if (heeY2JMQ7) {
      const res = await heeY2JMQ7(...args);
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
      className: cx("framer-IGHT7", ...sharedStyleClassNames, classNames),
      style: { display: "contents" },
      children: /*#__PURE__*/ _jsx(Transition, {
        value: transition,
        children: /*#__PURE__*/ _jsx(motion.div, {
          ...restProps,
          className: cx("framer-f0fdhc", className),
          "data-framer-name": "On",
          "data-highlight": true,
          layoutDependency: layoutDependency,
          layoutId: "gAWvhOuby",
          onTap: onTapio6yfw,
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            backgroundColor:
              "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
            borderBottomLeftRadius: 23,
            borderBottomRightRadius: 23,
            borderTopLeftRadius: 23,
            borderTopRightRadius: 23,
            opacity: 1,
            ...style,
          },
          variants: {
            "pB6nkQDjg-hover": {
              backgroundColor:
                "var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15))",
            },
            pB6nkQDjg: {
              backgroundColor:
                "var(--token-b030a63b-659f-4465-829f-246a02e259cb, rgba(0, 0, 0, 0.1))",
              opacity: 0.5,
            },
          },
          ...addPropertyOverrides(
            {
              "pB6nkQDjg-hover": { "data-framer-name": undefined },
              pB6nkQDjg: { "data-framer-name": "Off" },
            },
            baseVariant,
            gestureVariant,
          ),
          children: /*#__PURE__*/ _jsx(MotionDivEffect_MagicHover, {
            className: "framer-1x96o3h",
            layoutDependency: layoutDependency,
            layoutId: "T8EQVZlSA",
            style: {
              backgroundColor:
                "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
            },
            children: /*#__PURE__*/ _jsx(SVG, {
              className: "framer-pkgqbi",
              "data-framer-name": "mouse_01",
              layout: "position",
              layoutDependency: layoutDependency,
              layoutId: "EBICnXhfg",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 4.74 17.089 C 4.93 19.48 6.824 21.511 9.265 21.812 C 10.163 21.922 11.075 22 12 22 C 12.925 22 13.837 21.922 14.735 21.812 C 17.175 21.511 19.069 19.48 19.259 17.089 C 19.391 15.432 19.5 13.732 19.5 12 C 19.5 10.268 19.39 8.568 19.26 6.911 C 19.07 4.52 17.176 2.489 14.735 2.188 C 13.828 2.07 12.915 2.007 12 2 C 11.075 2 10.163 2.078 9.265 2.188 C 6.825 2.488 4.93 4.52 4.741 6.911 C 4.609 8.568 4.5 10.268 4.5 12 C 4.5 13.732 4.609 15.432 4.74 17.089 Z M 12 5 L 12 9" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
              svgContentId: 135276226,
              withExternalLayout: true,
            }),
          }),
        }),
      }),
    }),
  });
});
const css = [
  '.framer-IGHT7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-IGHT7 .framer-1vh31g5 { display: block; }",
  ".framer-IGHT7 .framer-f0fdhc { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
  ".framer-IGHT7 .framer-1x96o3h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 42px; z-index: 1; }",
  ".framer-IGHT7 .framer-pkgqbi { flex: none; height: 24px; position: relative; width: 24px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-IGHT7 .framer-f0fdhc, .framer-IGHT7 .framer-1x96o3h { gap: 0px; } .framer-IGHT7 .framer-f0fdhc > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-IGHT7 .framer-f0fdhc > :first-child { margin-left: 0px; } .framer-IGHT7 .framer-f0fdhc > :last-child { margin-right: 0px; } .framer-IGHT7 .framer-1x96o3h > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-IGHT7 .framer-1x96o3h > :first-child { margin-top: 0px; } .framer-IGHT7 .framer-1x96o3h > :last-child { margin-bottom: 0px; } }",
  ".framer-IGHT7.framer-v-10elm1r .framer-f0fdhc { justify-content: flex-end; }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 42
 * @framerIntrinsicWidth 42
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"pB6nkQDjg":{"layout":["auto","auto"]},"K_cqDoo1q":{"layout":["auto","auto"]}}}
 * @framerVariables {"heeY2JMQ7":"tapA"}
 * @framerImmutableVariables true
 */ const FramerOmsoN6LDc = withCSS(Component, css, "framer-IGHT7");
export default FramerOmsoN6LDc;
FramerOmsoN6LDc.displayName = "Toggle/Mouse";
FramerOmsoN6LDc.defaultProps = { height: 42, width: 42 };
addPropertyControls(FramerOmsoN6LDc, {
  variant: {
    options: ["gAWvhOuby", "pB6nkQDjg"],
    optionTitles: ["On", "Off"],
    title: "Variant",
    type: ControlType.Enum,
  },
  heeY2JMQ7: { title: "Tap A", type: ControlType.EventHandler },
});
addFonts(FramerOmsoN6LDc, []);
export const __FramerMetadata__ = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerOmsoN6LDc",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "42",
        framerVariables: '{"heeY2JMQ7":"tapA"}',
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "42",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"pB6nkQDjg":{"layout":["auto","auto"]},"K_cqDoo1q":{"layout":["auto","auto"]}}}',
        framerContractVersion: "1",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
