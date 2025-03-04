// Generated by Framer (d1ef57f)
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  SVG,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import * as localizedValues from "./KPW3gRMCY-0.js";
const enabledGestures = { upDIhu7BG: { hover: true } };
const cycleOrder = ["upDIhu7BG", "oMHgKwzV9", "yRnVIYH9g"];
const serializationHash = "framer-vXxWU";
const variantClassNames = {
  oMHgKwzV9: "framer-v-mpap7o",
  upDIhu7BG: "framer-v-10nmmqi",
  yRnVIYH9g: "framer-v-nnobyn",
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
  default: { damping: 28, delay: 0, mass: 1, stiffness: 170, type: "spring" },
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
  "Variant 1": "upDIhu7BG",
  Dark: "yRnVIYH9g",
  Light: "oMHgKwzV9",
};
const getProps = ({ height, id, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant:
      (_ref =
        (_humanReadableVariantMap_props_variant =
          humanReadableVariantMap[props.variant]) !== null &&
        _humanReadableVariantMap_props_variant !== void 0
          ? _humanReadableVariantMap_props_variant
          : props.variant) !== null && _ref !== void 0
        ? _ref
        : "upDIhu7BG",
  };
};
const createLayoutDependency = (props, variants) =>
  variants.join("-") + props.layoutDependency;
const Component = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  const { activeLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
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
    defaultVariant: "upDIhu7BG",
    enabledGestures,
    transitions,
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
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
      className: cx("framer-vXxWU", ...sharedStyleClassNames, classNames),
      style: { display: "contents" },
      children: /*#__PURE__*/ _jsx(Transition, {
        value: transition,
        children: /*#__PURE__*/ _jsxs(motion.div, {
          ...restProps,
          className: cx("framer-10nmmqi", className),
          "data-framer-name": "Variant 1",
          layoutDependency: layoutDependency,
          layoutId: "upDIhu7BG",
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style },
          ...addPropertyOverrides(
            {
              "upDIhu7BG-hover": { "data-framer-name": undefined },
              oMHgKwzV9: { "data-framer-name": "Light" },
              yRnVIYH9g: { "data-framer-name": "Dark" },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /*#__PURE__*/ _jsxs(motion.div, {
              className: "framer-v6gw1h",
              layoutDependency: layoutDependency,
              layoutId: "ODknWPrRG",
              children: [
                /*#__PURE__*/ _jsx(SVG, {
                  className: "framer-140izyf",
                  "data-framer-name": "arrow_up_03_round",
                  layout: "position",
                  layoutDependency: layoutDependency,
                  layoutId: "Gx9slAmCH",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 17"><path d="M 12 3 L 12 15 M 16 7 C 16 7 13.054 3 12 3 C 10.946 3 8 7 8 7" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                  svgContentId: 2595457849,
                  withExternalLayout: true,
                  ...addPropertyOverrides(
                    {
                      oMHgKwzV9: {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 17"><path d="M 12 3 L 12 15 M 16 7 C 16 7 13.054 3 12 3 C 10.946 3 8 7 8 7" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 1007789671,
                      },
                      yRnVIYH9g: {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 17"><path d="M 12 3 L 12 15 M 16 7 C 16 7 13.054 3 12 3 C 10.946 3 8 7 8 7" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 2790558096,
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                }),
                /*#__PURE__*/ _jsx(SVG, {
                  className: "framer-6iwiww",
                  "data-framer-name": "arrow_up_03_round",
                  layout: "position",
                  layoutDependency: layoutDependency,
                  layoutId: "X6mSUKFLZ",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 17"><path d="M 12 3 L 12 15 M 16 7 C 16 7 13.054 3 12 3 C 10.946 3 8 7 8 7" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                  svgContentId: 2595457849,
                  withExternalLayout: true,
                  ...addPropertyOverrides(
                    {
                      oMHgKwzV9: {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 17"><path d="M 12 3 L 12 15 M 16 7 C 16 7 13.054 3 12 3 C 10.946 3 8 7 8 7" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 1007789671,
                      },
                      yRnVIYH9g: {
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 17"><path d="M 12 3 L 12 15 M 16 7 C 16 7 13.054 3 12 3 C 10.946 3 8 7 8 7" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 2790558096,
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                }),
              ],
            }),
            /*#__PURE__*/ _jsx(SVG, {
              className: "framer-1j2aw27",
              "data-framer-name": "arrow_up_03_round",
              layout: "position",
              layoutDependency: layoutDependency,
              layoutId: "MeX_DWs9A",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 7"><path d="M 18 4 L 6 4" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
              svgContentId: 4078173666,
              withExternalLayout: true,
              ...addPropertyOverrides(
                {
                  oMHgKwzV9: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 7"><path d="M 18 4 L 6 4" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                    svgContentId: 3462358616,
                  },
                  yRnVIYH9g: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 7"><path d="M 18 4 L 6 4" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                    svgContentId: 3833274875,
                  },
                },
                baseVariant,
                gestureVariant,
              ),
            }),
          ],
        }),
      }),
    }),
  });
});
const css = [
  '.framer-vXxWU [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-vXxWU .framer-jlbswt { display: block; }",
  ".framer-vXxWU .framer-10nmmqi { cursor: pointer; height: 42px; position: relative; width: 42px; }",
  ".framer-vXxWU .framer-v6gw1h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 17px; justify-content: flex-start; left: calc(50.00000000000002% - 24px / 2); overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: calc(52.38095238095241% - 17px / 2); width: 24px; }",
  ".framer-vXxWU .framer-140izyf, .framer-vXxWU .framer-6iwiww { flex: none; height: 17px; position: relative; width: 24px; }",
  ".framer-vXxWU .framer-1j2aw27 { flex: none; height: 7px; left: calc(50.00000000000002% - 24px / 2); position: absolute; top: 9px; width: 24px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vXxWU .framer-v6gw1h { gap: 0px; } .framer-vXxWU .framer-v6gw1h > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-vXxWU .framer-v6gw1h > :first-child { margin-top: 0px; } .framer-vXxWU .framer-v6gw1h > :last-child { margin-bottom: 0px; } }",
  ".framer-vXxWU.framer-v-mpap7o .framer-10nmmqi, .framer-vXxWU.framer-v-nnobyn .framer-10nmmqi { aspect-ratio: 1 / 1; cursor: unset; height: var(--framer-aspect-ratio-supported, 42px); }",
  ".framer-vXxWU.framer-v-10nmmqi.hover .framer-10nmmqi { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 42px); }",
  ".framer-vXxWU.framer-v-10nmmqi.hover .framer-v6gw1h { justify-content: flex-end; }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 42
 * @framerIntrinsicWidth 42
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"oMHgKwzV9":{"layout":["fixed","fixed"]},"yRnVIYH9g":{"layout":["fixed","fixed"]},"ysi4LUbOY":{"layout":["fixed","fixed"]}}}
 * @framerImmutableVariables true
 */ const FramerKPW3gRMCY = withCSS(Component, css, "framer-vXxWU");
export default FramerKPW3gRMCY;
FramerKPW3gRMCY.displayName = "Button/ArrowTop";
FramerKPW3gRMCY.defaultProps = { height: 42, width: 42 };
addPropertyControls(FramerKPW3gRMCY, {
  variant: {
    options: ["upDIhu7BG", "oMHgKwzV9", "yRnVIYH9g"],
    optionTitles: ["Variant 1", "Light", "Dark"],
    title: "Variant",
    type: ControlType.Enum,
  },
});
addFonts(FramerKPW3gRMCY, []);
export const __FramerMetadata__ = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerKPW3gRMCY",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"oMHgKwzV9":{"layout":["fixed","fixed"]},"yRnVIYH9g":{"layout":["fixed","fixed"]},"ysi4LUbOY":{"layout":["fixed","fixed"]}}}',
        framerContractVersion: "1",
        framerIntrinsicHeight: "42",
        framerImmutableVariables: "true",
        framerIntrinsicWidth: "42",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./KPW3gRMCY.map
