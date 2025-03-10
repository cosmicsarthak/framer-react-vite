// Generated by Framer (6b748fa)
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  RichText,
  SVG,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
  withFX,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
const MotionDivWithFX = withFX(motion.div);
const cycleOrder = ["Ysjx9c0DL", "KB8tywx3q"];
const serializationHash = "framer-hyUpO";
const variantClassNames = {
  KB8tywx3q: "framer-v-1t2er75",
  Ysjx9c0DL: "framer-v-1phz421",
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
  damping: 28,
  delay: 0,
  mass: 1,
  stiffness: 178,
  type: "spring",
};
const transition2 = {
  delay: 0,
  duration: 1,
  ease: [0.44, 0, 0.56, 1],
  type: "tween",
};
const animation = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.9,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 0,
};
const transformTemplate1 = (_, t) => `translate(-50%, -50%) ${t}`;
const transition3 = {
  delay: 0,
  duration: 0.8,
  ease: [0.44, 0, 0.56, 1],
  type: "tween",
};
const animation1 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: 0,
  y: 4,
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
  Collasped: "KB8tywx3q",
  Expanded: "Ysjx9c0DL",
};
const getProps = ({ height, id, mouseEnter, title, width, ...props }) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1;
  return {
    ...props,
    FCG7x4AVC:
      mouseEnter !== null && mouseEnter !== void 0
        ? mouseEnter
        : props.FCG7x4AVC,
    RzZwMeUe3:
      (_ref = title !== null && title !== void 0 ? title : props.RzZwMeUe3) !==
        null && _ref !== void 0
        ? _ref
        : "Shift",
    variant:
      (_ref1 =
        (_humanReadableVariantMap_props_variant =
          humanReadableVariantMap[props.variant]) !== null &&
        _humanReadableVariantMap_props_variant !== void 0
          ? _humanReadableVariantMap_props_variant
          : props.variant) !== null && _ref1 !== void 0
        ? _ref1
        : "Ysjx9c0DL",
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
    RzZwMeUe3,
    FCG7x4AVC,
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
    defaultVariant: "Ysjx9c0DL",
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onMouseEnterhscgdw = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: true });
    if (FCG7x4AVC) {
      const res = await FCG7x4AVC(...args);
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
        children: /*#__PURE__*/ _jsx(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(
            serializationHash,
            ...sharedStyleClassNames,
            "framer-1phz421",
            className,
            classNames,
          ),
          "data-framer-name": "Expanded",
          "data-highlight": true,
          layoutDependency: layoutDependency,
          layoutId: "Ysjx9c0DL",
          onMouseEnter: onMouseEnterhscgdw,
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            ...style,
          },
          ...addPropertyOverrides(
            { KB8tywx3q: { "data-framer-name": "Collasped" } },
            baseVariant,
            gestureVariant,
          ),
          children: /*#__PURE__*/ _jsxs(motion.div, {
            className: "framer-1pdv11y",
            layoutDependency: layoutDependency,
            layoutId: "qqDojExoq",
            style: {
              backgroundColor:
                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            },
            children: [
              /*#__PURE__*/ _jsxs(MotionDivWithFX, {
                __framer__loop: animation,
                __framer__loopEffectEnabled: true,
                __framer__loopRepeatDelay: 2,
                __framer__loopRepeatType: "mirror",
                __framer__loopTransition: transition2,
                __perspectiveFX: false,
                __smartComponentFX: true,
                __targetOpacity: 1,
                className: "framer-qrdflz",
                layoutDependency: layoutDependency,
                layoutId: "UFRSywgO5",
                children: [
                  /*#__PURE__*/ _jsx(RichText, {
                    __fromCanvasComponent: true,
                    children: /*#__PURE__*/ _jsx(React.Fragment, {
                      children: /*#__PURE__*/ _jsx(motion.p, {
                        style: {
                          "--font-selector": "RlM7U2F0b3NoaS1ib2xk",
                          "--framer-font-family": '"Satoshi", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-font-weight": "700",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                        },
                        children: "Shift",
                      }),
                    }),
                    className: "framer-1maj1hx",
                    fonts: ["FS;Satoshi-bold"],
                    layoutDependency: layoutDependency,
                    layoutId: "oMddYw20G",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: RzZwMeUe3,
                    transformTemplate: transformTemplate1,
                    verticalAlignment: "top",
                    withExternalLayout: true,
                  }),
                  /*#__PURE__*/ _jsx(SVG, {
                    className: "framer-rns9l",
                    "data-framer-name": "rectangular",
                    layout: "position",
                    layoutDependency: layoutDependency,
                    layoutId: "DkDZKauuX",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 43 20"><path d="M 1 10 C 1 7.2 1 5.8 1.545 4.73 C 2.024 3.789 2.789 3.024 3.73 2.545 C 4.8 2 6.2 2 9 2 L 33 2 C 35.8 2 37.43 1.955 38.5 2.5 C 39.441 2.979 40.021 3.559 40.5 4.5 C 41.045 5.57 41 7.2 41 10 C 41 12.8 41.045 14.43 40.5 15.5 C 40.021 16.441 39.441 17.021 38.5 17.5 C 37.43 18.045 35.8 18 33 18 L 9 18 C 6.2 18 4.8 18 3.73 17.455 C 2.789 16.976 2.024 16.211 1.545 15.27 C 1 14.2 1 12.8 1 10 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 12455772165,
                    withExternalLayout: true,
                  }),
                ],
              }),
              /*#__PURE__*/ _jsx(SVG, {
                className: "framer-1phgxrx",
                "data-framer-name": "graphic",
                layout: "position",
                layoutDependency: layoutDependency,
                layoutId: "uYF1uZ7FB",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><path d="M 6 2 L 6 10 M 2 6 L 10 6" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                svgContentId: 11546905650,
                withExternalLayout: true,
              }),
              /*#__PURE__*/ _jsxs(motion.div, {
                className: "framer-17wsc2u",
                layoutDependency: layoutDependency,
                layoutId: "f56polUNi",
                children: [
                  /*#__PURE__*/ _jsx(SVG, {
                    className: "framer-wzwy35",
                    "data-framer-name": "Body",
                    layout: "position",
                    layoutDependency: layoutDependency,
                    layoutId: "f56polUNiCbWZckUTM",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 4.74 17.089 C 4.93 19.48 6.824 21.511 9.265 21.812 C 10.163 21.922 11.075 22 12 22 C 12.925 22 13.837 21.922 14.735 21.812 C 17.175 21.511 19.069 19.48 19.259 17.089 C 19.391 15.432 19.5 13.732 19.5 12 C 19.5 10.268 19.39 8.568 19.26 6.911 C 19.07 4.52 17.176 2.489 14.735 2.188 C 13.828 2.07 12.915 2.007 12 2 C 11.075 2 10.163 2.078 9.265 2.188 C 6.825 2.488 4.93 4.52 4.741 6.911 C 4.609 8.568 4.5 10.268 4.5 12 C 4.5 13.732 4.609 15.432 4.74 17.089 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 12644801786,
                    withExternalLayout: true,
                  }),
                  /*#__PURE__*/ _jsx(MotionDivWithFX, {
                    __framer__loop: animation1,
                    __framer__loopEffectEnabled: true,
                    __framer__loopRepeatDelay: 0.2,
                    __framer__loopRepeatType: "mirror",
                    __framer__loopTransition: transition3,
                    __perspectiveFX: false,
                    __smartComponentFX: true,
                    __targetOpacity: 1,
                    className: "framer-1l004c5",
                    layoutDependency: layoutDependency,
                    layoutId: "f56polUNiKExBrTRwa",
                    children: /*#__PURE__*/ _jsx(SVG, {
                      className: "framer-9i2uef",
                      "data-framer-name": "Key",
                      layout: "position",
                      layoutDependency: layoutDependency,
                      layoutId: "f56polUNiUPKneLqOS",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 12 5 L 12 9" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 11559004483,
                      withExternalLayout: true,
                    }),
                  }),
                ],
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
  ".framer-hyUpO.framer-47smjt, .framer-hyUpO .framer-47smjt { display: block; }",
  ".framer-hyUpO.framer-1phz421 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 42px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
  ".framer-hyUpO .framer-1pdv11y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 42px; justify-content: flex-start; overflow: hidden; padding: 0px 6px 0px 6px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
  ".framer-hyUpO .framer-qrdflz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; overflow: hidden; padding: 0px 10px 0px 10px; position: relative; width: min-content; }",
  ".framer-hyUpO .framer-1maj1hx { -webkit-user-select: none; flex: none; height: auto; left: 50%; position: absolute; top: 50%; user-select: none; white-space: pre; width: auto; z-index: 1; }",
  ".framer-hyUpO .framer-rns9l { flex: none; height: 20px; position: relative; width: 43px; }",
  ".framer-hyUpO .framer-1phgxrx { flex: none; height: 12px; position: relative; width: 12px; }",
  ".framer-hyUpO .framer-17wsc2u { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 42px); position: relative; width: 42px; }",
  ".framer-hyUpO .framer-wzwy35, .framer-hyUpO .framer-9i2uef { flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; }",
  ".framer-hyUpO .framer-1l004c5 { bottom: 9px; flex: none; left: 9px; overflow: visible; position: absolute; right: 9px; top: 9px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hyUpO.framer-1phz421, .framer-hyUpO .framer-1pdv11y, .framer-hyUpO .framer-qrdflz { gap: 0px; } .framer-hyUpO.framer-1phz421 > *, .framer-hyUpO .framer-1pdv11y > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-hyUpO.framer-1phz421 > :first-child, .framer-hyUpO .framer-1pdv11y > :first-child, .framer-hyUpO .framer-qrdflz > :first-child { margin-left: 0px; } .framer-hyUpO.framer-1phz421 > :last-child, .framer-hyUpO .framer-1pdv11y > :last-child, .framer-hyUpO .framer-qrdflz > :last-child { margin-right: 0px; } .framer-hyUpO .framer-qrdflz > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
  ".framer-hyUpO.framer-v-1t2er75 .framer-1pdv11y { height: 12px; padding: 0px 0px 0px 12px; width: 12px; }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 42
 * @framerIntrinsicWidth 129
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["auto","fixed"]},"KB8tywx3q":{"layout":["auto","fixed"]}}}
 * @framerVariables {"RzZwMeUe3":"title","FCG7x4AVC":"mouseEnter"}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 */ const FramerLp_W3PPh2 = withCSS(Component, css, "framer-hyUpO");
export default FramerLp_W3PPh2;
FramerLp_W3PPh2.displayName = "Utilities/ShiftWheel";
FramerLp_W3PPh2.defaultProps = { height: 42, width: 129 };
addPropertyControls(FramerLp_W3PPh2, {
  variant: {
    options: ["Ysjx9c0DL", "KB8tywx3q"],
    optionTitles: ["Expanded", "Collasped"],
    title: "Variant",
    type: ControlType.Enum,
  },
  RzZwMeUe3: {
    defaultValue: "Shift",
    displayTextArea: false,
    title: "Title",
    type: ControlType.String,
  },
  FCG7x4AVC: { title: "Mouse Enter", type: ControlType.EventHandler },
});
addFonts(
  FramerLp_W3PPh2,
  [
    {
      explicitInter: true,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
          weight: "700",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: true },
);
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerLp_W3PPh2",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "129",
        framerDisplayContentsDiv: "false",
        framerComponentViewportWidth: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","fixed"]},"KB8tywx3q":{"layout":["auto","fixed"]}}}',
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerIntrinsicHeight: "42",
        framerVariables: '{"RzZwMeUe3":"title","FCG7x4AVC":"mouseEnter"}',
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./Lp_W3PPh2.map
