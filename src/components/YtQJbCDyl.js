// Generated by Framer (63c002f)
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  SVG,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useOnVariantChange,
  useVariantState,
  withCSS,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
const cycleOrder = ["Vhjt8b2at", "dG2Aj27OX", "jQc752G6D"];
const serializationHash = "framer-BdcAV";
const variantClassNames = {
  dG2Aj27OX: "framer-v-1prgdvl",
  jQc752G6D: "framer-v-4k10s1",
  Vhjt8b2at: "framer-v-uqo8kb",
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
const transition2 = {
  delay: 0,
  duration: 0,
  ease: [0.44, 0, 0.56, 1],
  type: "tween",
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
const humanReadableVariantMap = {
  "Variant 2": "dG2Aj27OX",
  "Variant 3": "jQc752G6D",
  Start: "Vhjt8b2at",
};
const getProps = ({ click, height, id, width, ...props }) => {
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
        : "Vhjt8b2at",
    VMpSZdMTg: click !== null && click !== void 0 ? click : props.VMpSZdMTg,
  };
};
const createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
const Component = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, VMpSZdMTg, ...restProps } =
    getProps(props);
  const {
    baseVariant,
    classNames,
    gestureHandlers,
    gestureVariant,
    setGestureState,
    setVariant,
    variants,
  } = useVariantState({
    cycleOrder,
    defaultVariant: "Vhjt8b2at",
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onTap1bj9ook = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (VMpSZdMTg) {
      const res = await VMpSZdMTg(...args);
      if (res === false) return false;
    }
    setVariant("dG2Aj27OX");
  });
  const onAppearl8btd7 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("jQc752G6D"), 600);
  });
  const onAppear1ntyc4p = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("Vhjt8b2at"), 100);
  });
  useOnVariantChange(baseVariant, {
    dG2Aj27OX: onAppearl8btd7,
    jQc752G6D: onAppear1ntyc4p,
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
        ...addPropertyOverrides(
          { jQc752G6D: { value: transition2 } },
          baseVariant,
          gestureVariant,
        ),
        children: /*#__PURE__*/ _jsx(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(
            serializationHash,
            ...sharedStyleClassNames,
            "framer-uqo8kb",
            className,
            classNames,
          ),
          "data-framer-name": "Start",
          "data-highlight": true,
          layoutDependency: layoutDependency,
          layoutId: "Vhjt8b2at",
          onTap: onTap1bj9ook,
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            backgroundColor:
              "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            ...style,
          },
          ...addPropertyOverrides(
            {
              dG2Aj27OX: { "data-framer-name": "Variant 2", onTap: undefined },
              jQc752G6D: { "data-framer-name": "Variant 3", onTap: undefined },
            },
            baseVariant,
            gestureVariant,
          ),
          children: /*#__PURE__*/ _jsxs(motion.div, {
            className: "framer-imqqe9",
            layoutDependency: layoutDependency,
            layoutId: "ZBcH_xhud",
            style: { rotate: 180 },
            children: [
              /*#__PURE__*/ _jsx(SVG, {
                className: "framer-1d9466n",
                "data-framer-name": "arrow_left_03_sharp",
                layout: "position",
                layoutDependency: layoutDependency,
                layoutId: "mSbIkIxFO",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 4 6 L 4 18" fill="transparent" stroke-width="1.5" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                svgContentId: 12706296694,
                withExternalLayout: true,
              }),
              /*#__PURE__*/ _jsx(motion.div, {
                className: "framer-1it6e7u",
                layoutDependency: layoutDependency,
                layoutId: "EgE8ApiNS",
                children: /*#__PURE__*/ _jsx(SVG, {
                  className: "framer-39r30",
                  "data-framer-name": "arrow_left_03_sharp",
                  layout: "position",
                  layoutDependency: layoutDependency,
                  layoutId: "TN_pu0iAC",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 24"><path d="M -3 6 L -3 18" fill="transparent" stroke-width="1.5" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 2 12 L 13 12 M 5 8 L 1.707 11.293 C 1.374 11.626 1.207 11.793 1.207 12 C 1.207 12.207 1.374 12.374 1.707 12.707 L 5 16" fill="transparent" stroke-width="1.5" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                  svgContentId: 10241006643,
                  withExternalLayout: true,
                  ...addPropertyOverrides(
                    {
                      dG2Aj27OX: { svgContentId: 11553556109 },
                      jQc752G6D: { svgContentId: 10164567282 },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  });
});
const css = [
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-BdcAV.framer-1aqih49, .framer-BdcAV .framer-1aqih49 { display: block; }",
  ".framer-BdcAV.framer-uqo8kb { cursor: pointer; height: 60px; overflow: hidden; position: relative; width: 60px; will-change: var(--framer-will-change-override, transform); }",
  ".framer-BdcAV .framer-imqqe9 { flex: none; height: 24px; left: calc(50.00000000000002% - 25px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 25px; }",
  ".framer-BdcAV .framer-1d9466n { flex: none; height: 24px; left: 0px; position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; }",
  ".framer-BdcAV .framer-1it6e7u { bottom: 0px; flex: none; overflow: hidden; position: absolute; right: 1px; top: 0px; width: 19px; }",
  ".framer-BdcAV .framer-39r30 { flex: none; height: 24px; position: absolute; right: 2px; top: calc(50.00000000000002% - 24px / 2); width: 14px; }",
  ".framer-BdcAV.framer-v-1prgdvl.framer-uqo8kb, .framer-BdcAV.framer-v-4k10s1.framer-uqo8kb { aspect-ratio: 1 / 1; cursor: unset; height: var(--framer-aspect-ratio-supported, 60px); }",
  ".framer-BdcAV.framer-v-1prgdvl .framer-39r30 { left: -16px; right: unset; }",
  ".framer-BdcAV.framer-v-4k10s1 .framer-39r30 { right: -15px; }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 60
 * @framerIntrinsicWidth 60
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"dG2Aj27OX":{"layout":["fixed","fixed"]},"jQc752G6D":{"layout":["fixed","fixed"]}}}
 * @framerVariables {"VMpSZdMTg":"click"}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 */ const FramerYtQJbCDyl = withCSS(Component, css, "framer-BdcAV");
export default FramerYtQJbCDyl;
FramerYtQJbCDyl.displayName = "Button/ToEnd";
FramerYtQJbCDyl.defaultProps = { height: 60, width: 60 };
addPropertyControls(FramerYtQJbCDyl, {
  variant: {
    options: ["Vhjt8b2at", "dG2Aj27OX", "jQc752G6D"],
    optionTitles: ["Start", "Variant 2", "Variant 3"],
    title: "Variant",
    type: ControlType.Enum,
  },
  VMpSZdMTg: { title: "Click", type: ControlType.EventHandler },
});
addFonts(FramerYtQJbCDyl, [{ explicitInter: true, fonts: [] }], {
  supportsExplicitInterCodegen: true,
});
export const __FramerMetadata__ = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerYtQJbCDyl",
      slots: [],
      annotations: {
        framerVariables: '{"VMpSZdMTg":"click"}',
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"dG2Aj27OX":{"layout":["fixed","fixed"]},"jQc752G6D":{"layout":["fixed","fixed"]}}}',
        framerIntrinsicHeight: "60",
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
        framerIntrinsicWidth: "60",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./YtQJbCDyl.map
