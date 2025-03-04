// Generated by Framer (6b748fa)
import {
  jsx as _jsx,
  jsxs as _jsxs,
  Fragment as _Fragment,
} from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  Floating,
  getFonts,
  getFontsFromSharedStyle,
  Image,
  RichText,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useOverlayState,
  useVariantState,
  withCSS,
  withFX,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfigContext,
} from "framer-motion";
import * as React from "react";
import { Toggle_Social } from "https://framerusercontent.com/modules/yue1wEIuxL5Wxj17VKpu/rvoe6u8OOiWRrmZZxev9/Toggle.js";
import * as sharedStyle1 from "https://framerusercontent.com/modules/IJuPkH75DrOaXa8hMB2D/uNPycaMZJ1T8jriUTsGK/sSyE5_N0_.js";
import * as sharedStyle from "https://framerusercontent.com/modules/ztTZI54upesJ4jQU3PX2/kY0YE8vX4mTWg00HOYGw/tvtD0bAK1.js";
import ButtonContact from "https://framerusercontent.com/modules/pUGxcUytjlJHowFsJI3Q/pia3lOSag069FUN3jFt9/Dlnn4rFKe.js";
const ButtonContactFonts = getFonts(ButtonContact);
const MotionDivToggle_Social = Toggle_Social(motion.div);
const MotionDivWithFX = withFX(motion.div);
const cycleOrder = ["ecyK5mEKa", "tLAPjJAhe", "jTgHzDfLY"];
const serializationHash = "framer-Q0R2r";
const variantClassNames = {
  ecyK5mEKa: "framer-v-1osa5wq",
  jTgHzDfLY: "framer-v-5rmzl4",
  tLAPjJAhe: "framer-v-1nj5q2i",
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
const transformTemplate1 = (_, t) => `translate(-50%, -50%) ${t}`;
const transition2 = {
  damping: 14,
  delay: 0,
  mass: 1,
  stiffness: 140,
  type: "spring",
};
const animation = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.75,
  skewX: 0,
  skewY: 0,
  transformPerspective: 1200,
  transition: transition2,
  x: 0,
  y: 10,
};
const animation1 = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  transformPerspective: 1200,
  transition: transition2,
  x: 0,
  y: 0,
};
const animation2 = {
  opacity: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.75,
  skewX: 0,
  skewY: 0,
  transformPerspective: 1200,
  x: 0,
  y: 10,
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
const Overlay = ({ children, blockDocumentScrolling, enabled = true }) => {
  const [visible, setVisible] = useOverlayState({ blockDocumentScrolling });
  return children({
    hide: () => setVisible(false),
    show: () => setVisible(true),
    toggle: () => setVisible(!visible),
    visible: enabled && visible,
  });
};
const Variants = motion(React.Fragment);
const humanReadableVariantMap = {
  Hover: "ecyK5mEKa",
  Mobile: "tLAPjJAhe",
  Tinted: "jTgHzDfLY",
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
        : "ecyK5mEKa",
  };
};
const createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
const Component = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
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
    defaultVariant: "ecyK5mEKa",
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onMouseEntert682wp = ({ overlay, paginationInfo }) =>
    activeVariantCallback(async (...args) => {
      setGestureState({ isHovered: true });
      overlay.show();
    });
  const ref1 = React.useRef(null);
  const isDisplayed = () => {
    if (["tLAPjJAhe", "jTgHzDfLY"].includes(baseVariant)) return false;
    return true;
  };
  const ref2 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [sharedStyle.className, sharedStyle1.className];
  const componentViewport = useComponentViewport();
  return /*#__PURE__*/ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /*#__PURE__*/ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /*#__PURE__*/ _jsx(Overlay, {
        blockDocumentScrolling: false,
        enabled: isDisplayed(),
        children: (overlay) =>
          /*#__PURE__*/ _jsx(_Fragment, {
            children: /*#__PURE__*/ _jsx(Transition, {
              value: transition1,
              children: /*#__PURE__*/ _jsxs(motion.div, {
                ...restProps,
                ...gestureHandlers,
                className: cx(
                  serializationHash,
                  ...sharedStyleClassNames,
                  "framer-1osa5wq",
                  className,
                  classNames,
                ),
                "data-framer-name": "Hover",
                "data-highlight": true,
                id: `${layoutId}-1osa5wq`,
                layoutDependency: layoutDependency,
                layoutId: "ecyK5mEKa",
                onMouseEnter: onMouseEntert682wp({ overlay }),
                ref: ref !== null && ref !== void 0 ? ref : ref1,
                style: {
                  filter: "brightness(1)",
                  WebkitFilter: "brightness(1)",
                  ...style,
                },
                variants: {
                  jTgHzDfLY: {
                    filter: "brightness(0.97)",
                    WebkitFilter: "brightness(0.97)",
                  },
                },
                ...addPropertyOverrides(
                  {
                    jTgHzDfLY: {
                      "data-framer-name": "Tinted",
                      "data-highlight": undefined,
                      onMouseEnter: undefined,
                    },
                    tLAPjJAhe: {
                      "data-framer-name": "Mobile",
                      "data-highlight": undefined,
                      onMouseEnter: undefined,
                    },
                  },
                  baseVariant,
                  gestureVariant,
                ),
                children: [
                  /*#__PURE__*/ _jsx(MotionDivToggle_Social, {
                    className: "framer-mn4h8a",
                    layoutDependency: layoutDependency,
                    layoutId: "MfOwZrpmw",
                    children: /*#__PURE__*/ _jsx(ComponentViewportProvider, {
                      children: /*#__PURE__*/ _jsx(motion.div, {
                        className: "framer-52k2qm-container",
                        layoutDependency: layoutDependency,
                        layoutId: "bwmXC6kks-container",
                        transformTemplate: transformTemplate1,
                        children: /*#__PURE__*/ _jsx(ButtonContact, {
                          b1BqfRpNR: true,
                          bUFcBjj2_: false,
                          dIiBtQnYe: 100,
                          height: "100%",
                          id: "bwmXC6kks",
                          jmykv9nju: "https://www.linkedin.com/in/jayzhushi/",
                          layoutId: "bwmXC6kks",
                          variant: "PWFVUVWOQ",
                          VTdF3jUde:
                            "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                          width: "100%",
                          ZWLrRxtcU: true,
                        }),
                      }),
                    }),
                  }),
                  isDisplayed() &&
                    /*#__PURE__*/ _jsx(AnimatePresence, {
                      children:
                        overlay.visible &&
                        /*#__PURE__*/ _jsx(Floating, {
                          alignment: "start",
                          anchorRef:
                            ref !== null && ref !== void 0 ? ref : ref1,
                          className: cx(
                            serializationHash,
                            classNames,
                            ...sharedStyleClassNames,
                          ),
                          collisionDetection: false,
                          "data-framer-portal-id": `${layoutId}-1osa5wq`,
                          offsetX: 0,
                          offsetY: -10,
                          onDismiss: overlay.hide,
                          placement: "top",
                          portalSelector: "#overlay",
                          safeArea: true,
                          zIndex: 11,
                          children: /*#__PURE__*/ _jsx(MotionDivWithFX, {
                            __perspectiveFX: false,
                            __smartComponentFX: true,
                            __targetOpacity: 1,
                            animate: animation1,
                            className: "framer-1kug8tt",
                            exit: animation,
                            initial: animation2,
                            layoutDependency: layoutDependency,
                            layoutId: "d4n8namaJ",
                            ref: ref2,
                            role: "dialog",
                            style: {
                              borderBottomLeftRadius: 20,
                              borderBottomRightRadius: 20,
                              borderTopLeftRadius: 20,
                              borderTopRightRadius: 20,
                              transformPerspective: 1200,
                            },
                            children: /*#__PURE__*/ _jsxs(motion.div, {
                              className: "framer-khhzlo",
                              "data-framer-name": "LinkedinCard",
                              layoutDependency: layoutDependency,
                              layoutId: "ZTDqkV4Yl",
                              style: {
                                backgroundColor:
                                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                              },
                              children: [
                                /*#__PURE__*/ _jsx(motion.div, {
                                  className: "framer-bp4qe0",
                                  layoutDependency: layoutDependency,
                                  layoutId: "I3IB2O7o8",
                                  style: {
                                    backgroundColor:
                                      "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                                  },
                                }),
                                /*#__PURE__*/ _jsx(Image, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 512,
                                    intrinsicWidth: 512,
                                    pixelHeight: 512,
                                    pixelWidth: 512,
                                    src: "https://framerusercontent.com/images/Cv7tUcy1rcgOmuD5YAOXl0TIUUg.jpg",
                                  },
                                  className: "framer-15ojbyq",
                                  "data-border": true,
                                  layoutDependency: layoutDependency,
                                  layoutId: "DyO89W1kn",
                                  style: {
                                    "--border-bottom-width": "2px",
                                    "--border-color":
                                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                    "--border-left-width": "2px",
                                    "--border-right-width": "2px",
                                    "--border-style": "solid",
                                    "--border-top-width": "2px",
                                    borderBottomLeftRadius: 40,
                                    borderBottomRightRadius: 40,
                                    borderTopLeftRadius: 40,
                                    borderTopRightRadius: 40,
                                    boxShadow:
                                      "0px 0.48290122862090357px 0.2897407371725422px -1.5px rgba(0, 0, 0, 0.14396), 0px 4px 2.4000000000000004px -3px rgba(0, 0, 0, 0.1)",
                                  },
                                }),
                                /*#__PURE__*/ _jsxs(motion.div, {
                                  className: "framer-3m4dxv",
                                  layoutDependency: layoutDependency,
                                  layoutId: "HsLHGQeoi",
                                  children: [
                                    /*#__PURE__*/ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /*#__PURE__*/ _jsx(
                                        React.Fragment,
                                        {
                                          children: /*#__PURE__*/ _jsx(
                                            motion.p,
                                            {
                                              className:
                                                "framer-styles-preset-1wxnimg",
                                              "data-styles-preset": "tvtD0bAK1",
                                              style: {
                                                "--framer-text-color":
                                                  "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                                              },
                                              children: "季杰",
                                            },
                                          ),
                                        },
                                      ),
                                      className: "framer-1u61pue",
                                      fonts: ["Inter"],
                                      layoutDependency: layoutDependency,
                                      layoutId: "y41JgJzvw",
                                      style: {
                                        "--extracted-r6o4lv":
                                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                        "--framer-link-text-color":
                                          "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration":
                                          "underline",
                                      },
                                      verticalAlignment: "top",
                                      withExternalLayout: true,
                                    }),
                                    /*#__PURE__*/ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /*#__PURE__*/ _jsx(
                                        React.Fragment,
                                        {
                                          children: /*#__PURE__*/ _jsx(
                                            motion.p,
                                            {
                                              className:
                                                "framer-styles-preset-9jlebu",
                                              "data-styles-preset": "sSyE5_N0_",
                                              style: {
                                                "--framer-text-color":
                                                  "var(--extracted-r6o4lv, var(--token-cb4dbe66-4559-4dce-ac95-ee2520bf67ec, rgba(0, 0, 0, 0.7)))",
                                              },
                                              children: "Interaction Designer",
                                            },
                                          ),
                                        },
                                      ),
                                      className: "framer-1755roe",
                                      fonts: ["Inter"],
                                      layoutDependency: layoutDependency,
                                      layoutId: "RKHyHUWXv",
                                      style: {
                                        "--extracted-r6o4lv":
                                          "var(--token-cb4dbe66-4559-4dce-ac95-ee2520bf67ec, rgba(0, 0, 0, 0.7))",
                                        "--framer-link-text-color":
                                          "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration":
                                          "underline",
                                      },
                                      verticalAlignment: "top",
                                      withExternalLayout: true,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                    }),
                ],
              }),
            }),
          }),
      }),
    }),
  });
});
const css = [
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-Q0R2r.framer-14688hs, .framer-Q0R2r .framer-14688hs { display: block; }",
  ".framer-Q0R2r.framer-1osa5wq { height: 54px; overflow: visible; position: relative; width: 54px; }",
  ".framer-Q0R2r .framer-mn4h8a { flex: none; height: 54px; left: calc(50.00000000000002% - 54px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 54px / 2); width: 54px; }",
  ".framer-Q0R2r .framer-52k2qm-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; }",
  ".framer-Q0R2r .framer-1kug8tt { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 266px; will-change: var(--framer-will-change-override, transform); }",
  ".framer-Q0R2r .framer-khhzlo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 87px; justify-content: flex-start; overflow: hidden; padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
  ".framer-Q0R2r .framer-bp4qe0 { bottom: 112px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }",
  ".framer-Q0R2r .framer-15ojbyq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 56px); overflow: visible; position: relative; width: 56px; }",
  ".framer-Q0R2r .framer-3m4dxv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
  ".framer-Q0R2r .framer-1u61pue, .framer-Q0R2r .framer-1755roe { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Q0R2r .framer-1kug8tt, .framer-Q0R2r .framer-khhzlo, .framer-Q0R2r .framer-3m4dxv { gap: 0px; } .framer-Q0R2r .framer-1kug8tt > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Q0R2r .framer-1kug8tt > :first-child, .framer-Q0R2r .framer-3m4dxv > :first-child { margin-top: 0px; } .framer-Q0R2r .framer-1kug8tt > :last-child, .framer-Q0R2r .framer-3m4dxv > :last-child { margin-bottom: 0px; } .framer-Q0R2r .framer-khhzlo > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Q0R2r .framer-khhzlo > :first-child { margin-left: 0px; } .framer-Q0R2r .framer-khhzlo > :last-child { margin-right: 0px; } .framer-Q0R2r .framer-3m4dxv > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } }",
  ...sharedStyle.css,
  ...sharedStyle1.css,
  '.framer-Q0R2r[data-border="true"]::after, .framer-Q0R2r [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 54
 * @framerIntrinsicWidth 54
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"tLAPjJAhe":{"layout":["fixed","fixed"]},"jTgHzDfLY":{"layout":["fixed","fixed"]}}}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 */ const FramerszbLJPNmx = withCSS(Component, css, "framer-Q0R2r");
export default FramerszbLJPNmx;
FramerszbLJPNmx.displayName = "Social/Linkedin";
FramerszbLJPNmx.defaultProps = { height: 54, width: 54 };
addPropertyControls(FramerszbLJPNmx, {
  variant: {
    options: ["ecyK5mEKa", "tLAPjJAhe", "jTgHzDfLY"],
    optionTitles: ["Hover", "Mobile", "Tinted"],
    title: "Variant",
    type: ControlType.Enum,
  },
});
addFonts(
  FramerszbLJPNmx,
  [
    {
      explicitInter: true,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...ButtonContactFonts,
    ...getFontsFromSharedStyle(sharedStyle.fonts),
    ...getFontsFromSharedStyle(sharedStyle1.fonts),
  ],
  { supportsExplicitInterCodegen: true },
);
export const __FramerMetadata__ = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerszbLJPNmx",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "54",
        framerComponentViewportWidth: "true",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerIntrinsicWidth: "54",
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"tLAPjJAhe":{"layout":["fixed","fixed"]},"jTgHzDfLY":{"layout":["fixed","fixed"]}}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
