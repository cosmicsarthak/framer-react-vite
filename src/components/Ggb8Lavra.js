// Generated by Framer (44d7d2d)
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  getFonts,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
  withMappedReactProps,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import {
  Control_Layout_Grid,
  Control_Layout_Stack,
} from "https://framerusercontent.com/modules/yue1wEIuxL5Wxj17VKpu/rvoe6u8OOiWRrmZZxev9/Toggle.js";
import ToggleStack, * as ToggleStackInfo from "https://framerusercontent.com/modules/HumWSZ81vaIIGeDTOfUm/XQ6j5uhKK8rl5wiLt0SJ/qtXQAdCpB.js";
import ToggleGrid, * as ToggleGridInfo from "https://framerusercontent.com/modules/trK0GkT7taC1OYWt41sV/ExcNmI9suWRjXrpKa0VC/ut7gGXHGL.js";
const ToggleStackFonts = getFonts(ToggleStack);
const ToggleStackControl_Layout_GridWithMappedReactProps1gw2s11 =
  withMappedReactProps(Control_Layout_Grid(ToggleStack), ToggleStackInfo);
const ToggleGridFonts = getFonts(ToggleGrid);
const ToggleGridControl_Layout_StackWithMappedReactPropsuk01re =
  withMappedReactProps(Control_Layout_Stack(ToggleGrid), ToggleGridInfo);
const cycleOrder = ["O4C8qA3Or", "d5nq5beze"];
const serializationHash = "framer-l3Zzb";
const variantClassNames = {
  d5nq5beze: "framer-v-2c774v",
  O4C8qA3Or: "framer-v-10z2djc",
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
const transition1 = {
  damping: 60,
  delay: 0,
  mass: 1,
  stiffness: 500,
  type: "spring",
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
const Variants = motion(React.Fragment);
const humanReadableVariantMap = { Grid: "O4C8qA3Or", Stack: "d5nq5beze" };
const getProps = ({ height, id, tap, tap2, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    kPKP1Z98f: tap !== null && tap !== void 0 ? tap : props.kPKP1Z98f,
    tcGyL3tqj: tap2 !== null && tap2 !== void 0 ? tap2 : props.tcGyL3tqj,
    variant:
      (_ref =
        (_humanReadableVariantMap_props_variant =
          humanReadableVariantMap[props.variant]) !== null &&
        _humanReadableVariantMap_props_variant !== void 0
          ? _humanReadableVariantMap_props_variant
          : props.variant) !== null && _ref !== void 0
        ? _ref
        : "O4C8qA3Or",
  };
};
const createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
const Component = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const {
    style,
    className,
    layoutId,
    variant,
    kPKP1Z98f,
    tcGyL3tqj,
    ...restProps
  } = getProps(props);
  const {
    baseVariant,
    classNames,
    clearLoadingGesture,
    gestureHandlers,
    gestureVariant,
    isLoading,
    setGestureState,
    setVariant,
    variants,
  } = useVariantState({
    cycleOrder,
    defaultVariant: "O4C8qA3Or",
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const K4FXNGAHE18jhjcs = activeVariantCallback(async (...args) => {
    if (kPKP1Z98f) {
      const res = await kPKP1Z98f(...args);
      if (res === false) return false;
    }
  });
  const PtGFoa1Gk14phee0 = activeVariantCallback(async (...args) => {
    if (tcGyL3tqj) {
      const res = await tcGyL3tqj(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /*#__PURE__*/ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /*#__PURE__*/ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /*#__PURE__*/ _jsx(Transition, {
        value: transition1,
        children: /*#__PURE__*/ _jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(
            serializationHash,
            ...sharedStyleClassNames,
            "framer-10z2djc",
            className,
            classNames,
          ),
          "data-framer-name": "Grid",
          layoutDependency: layoutDependency,
          layoutId: "O4C8qA3Or",
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style },
          ...addPropertyOverrides(
            { d5nq5beze: { "data-framer-name": "Stack" } },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /*#__PURE__*/ _jsx(motion.div, {
              className: "framer-1xue0ne",
              layoutDependency: layoutDependency,
              layoutId: "aaDym_T_8",
              style: {
                backgroundColor:
                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
            }),
            /*#__PURE__*/ _jsx(ComponentViewportProvider, {
              width: "90px",
              children: /*#__PURE__*/ _jsx(motion.div, {
                className: "framer-1pgwcgk-container",
                layoutDependency: layoutDependency,
                layoutId: "U92bkMpAY-container",
                children: /*#__PURE__*/ _jsx(
                  ToggleStackControl_Layout_GridWithMappedReactProps1gw2s11,
                  {
                    height: "100%",
                    id: "U92bkMpAY",
                    K4FXNGAHE: K4FXNGAHE18jhjcs,
                    layoutId: "U92bkMpAY",
                    style: { width: "100%" },
                    variant: "RgK6g1O_Q",
                    width: "100%",
                    ...addPropertyOverrides(
                      { d5nq5beze: { variant: "DLSJQF14w" } },
                      baseVariant,
                      gestureVariant,
                    ),
                  },
                ),
              }),
            }),
            /*#__PURE__*/ _jsx(ComponentViewportProvider, {
              width: "90px",
              children: /*#__PURE__*/ _jsx(motion.div, {
                className: "framer-11jhv5y-container",
                layoutDependency: layoutDependency,
                layoutId: "iXicoWOsP-container",
                children: /*#__PURE__*/ _jsx(
                  ToggleGridControl_Layout_StackWithMappedReactPropsuk01re,
                  {
                    height: "100%",
                    id: "iXicoWOsP",
                    layoutId: "iXicoWOsP",
                    PtGFoa1Gk: PtGFoa1Gk14phee0,
                    style: { width: "100%" },
                    variant: "ZuaqkmsyN",
                    width: "100%",
                    ...addPropertyOverrides(
                      { d5nq5beze: { variant: "UL1WxhDGo" } },
                      baseVariant,
                      gestureVariant,
                    ),
                  },
                ),
              }),
            }),
          ],
        }),
      }),
    }),
  });
});
const css = [
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-l3Zzb.framer-1ifpdw0, .framer-l3Zzb .framer-1ifpdw0 { display: block; }",
  ".framer-l3Zzb.framer-10z2djc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
  ".framer-l3Zzb .framer-1xue0ne { flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 90px; will-change: var(--framer-will-change-override, transform); z-index: 0; }",
  ".framer-l3Zzb .framer-1pgwcgk-container, .framer-l3Zzb .framer-11jhv5y-container { flex: none; height: auto; position: relative; width: 90px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-l3Zzb.framer-10z2djc { gap: 0px; } .framer-l3Zzb.framer-10z2djc > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-l3Zzb.framer-10z2djc > :first-child { margin-left: 0px; } .framer-l3Zzb.framer-10z2djc > :last-child { margin-right: 0px; } }",
  ".framer-l3Zzb.framer-v-2c774v .framer-1xue0ne { height: 101%; left: unset; right: 0px; top: calc(49.450549450549474% - 100.54945054945054% / 2); }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 91
 * @framerIntrinsicWidth 188
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"d5nq5beze":{"layout":["auto","auto"]}}}
 * @framerVariables {"kPKP1Z98f":"tap","tcGyL3tqj":"tap2"}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 */ const FramerGgb8Lavra = withCSS(Component, css, "framer-l3Zzb");
export default FramerGgb8Lavra;
FramerGgb8Lavra.displayName = "Toggle/Brief&Detail";
FramerGgb8Lavra.defaultProps = { height: 91, width: 188 };
addPropertyControls(FramerGgb8Lavra, {
  variant: {
    options: ["O4C8qA3Or", "d5nq5beze"],
    optionTitles: ["Grid", "Stack"],
    title: "Variant",
    type: ControlType.Enum,
  },
  kPKP1Z98f: { title: "Tap", type: ControlType.EventHandler },
  tcGyL3tqj: { title: "Tap 2", type: ControlType.EventHandler },
});
addFonts(
  FramerGgb8Lavra,
  [{ explicitInter: true, fonts: [] }, ...ToggleStackFonts, ...ToggleGridFonts],
  { supportsExplicitInterCodegen: true },
);
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerGgb8Lavra",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerVariables: '{"kPKP1Z98f":"tap","tcGyL3tqj":"tap2"}',
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"d5nq5beze":{"layout":["auto","auto"]}}}',
        framerIntrinsicHeight: "91",
        framerComponentViewportWidth: "true",
        framerIntrinsicWidth: "188",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
