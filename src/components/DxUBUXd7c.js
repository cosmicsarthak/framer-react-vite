// Generated by Framer (7f988a2)
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  getFonts,
  getFontsFromSharedStyle,
  RichText,
  SVG,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import {
  Language_Chn_Content,
  Language_En_Content,
} from "https://framerusercontent.com/modules/yue1wEIuxL5Wxj17VKpu/rvoe6u8OOiWRrmZZxev9/Toggle.js";
import * as sharedStyle from "https://framerusercontent.com/modules/IJuPkH75DrOaXa8hMB2D/uNPycaMZJ1T8jriUTsGK/sSyE5_N0_.js";
import UtilitiesNavArrows from "https://framerusercontent.com/modules/DijNhOV6wsPigExUlW1R/iUbHiS7BRLhCgdy97mu2/uCGg28JXP.js";
import ToggleClose from "https://framerusercontent.com/modules/l8dPDk7flAoGIG0iln8T/xIMISI5vAhekjBEhgFlr/VPFSIhH7_.js";
const ToggleCloseFonts = getFonts(ToggleClose);
const UtilitiesNavArrowsFonts = getFonts(UtilitiesNavArrows);
const RichTextLanguage_En_Content = Language_En_Content(RichText);
const RichTextLanguage_Chn_Content = Language_Chn_Content(RichText);
const cycleOrder = ["hmV4UHOLM", "RYwuKvV2u"];
const serializationHash = "framer-aYedV";
const variantClassNames = {
  hmV4UHOLM: "framer-v-1u2oanh",
  RYwuKvV2u: "framer-v-1cmx260",
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
const transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;
const transformTemplate2 = (_, t) => `translate(-50%, -50%) ${t}`;
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
  Collasped: "RYwuKvV2u",
  Expanded: "hmV4UHOLM",
};
const getProps = ({ close, height, id, open, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    d6MkcFD8T: close !== null && close !== void 0 ? close : props.d6MkcFD8T,
    kEaKLjxdV: open !== null && open !== void 0 ? open : props.kEaKLjxdV,
    variant:
      (_ref =
        (_humanReadableVariantMap_props_variant =
          humanReadableVariantMap[props.variant]) !== null &&
        _humanReadableVariantMap_props_variant !== void 0
          ? _humanReadableVariantMap_props_variant
          : props.variant) !== null && _ref !== void 0
        ? _ref
        : "hmV4UHOLM",
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
    kEaKLjxdV,
    d6MkcFD8T,
    ...restProps
  } = getProps(props);
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
    defaultVariant: "hmV4UHOLM",
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const heeY2JMQ7pp3zzc = activeVariantCallback(async (...args) => {
    if (d6MkcFD8T) {
      const res = await d6MkcFD8T(...args);
      if (res === false) return false;
    }
  });
  const onTap16osazx = activeVariantCallback(async (...args) => {
    if (kEaKLjxdV) {
      const res = await kEaKLjxdV(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [sharedStyle.className];
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
            "framer-1u2oanh",
            className,
            classNames,
          ),
          "data-framer-name": "Expanded",
          layoutDependency: layoutDependency,
          layoutId: "hmV4UHOLM",
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style },
          ...addPropertyOverrides(
            { RYwuKvV2u: { "data-framer-name": "Collasped" } },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /*#__PURE__*/ _jsx(ComponentViewportProvider, {
              children: /*#__PURE__*/ _jsx(motion.div, {
                className: "framer-mowc77-container",
                layoutDependency: layoutDependency,
                layoutId: "EcleyDcxd-container",
                style: { opacity: 1, scale: 1 },
                transformTemplate: transformTemplate1,
                variants: { RYwuKvV2u: { opacity: 0, scale: 0.4 } },
                children: /*#__PURE__*/ _jsx(ToggleClose, {
                  heeY2JMQ7: heeY2JMQ7pp3zzc,
                  height: "100%",
                  id: "EcleyDcxd",
                  layoutId: "EcleyDcxd",
                  variant: "J2J3k_z92",
                  width: "100%",
                }),
              }),
            }),
            /*#__PURE__*/ _jsx(motion.div, {
              className: "framer-u3zpnt",
              "data-framer-name": "Space",
              "data-highlight": true,
              layoutDependency: layoutDependency,
              layoutId: "oO3rbjYi_",
              onTap: onTap16osazx,
              style: {
                backgroundColor:
                  "var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0))",
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
              },
              variants: {
                RYwuKvV2u: {
                  backgroundColor:
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                },
              },
              children: /*#__PURE__*/ _jsxs(motion.div, {
                className: "framer-17nxuy",
                "data-framer-name": "Content",
                layoutDependency: layoutDependency,
                layoutId: "y5lLvhjPz",
                transformTemplate: transformTemplate2,
                children: [
                  /*#__PURE__*/ _jsxs(motion.div, {
                    className: "framer-14xsmxa",
                    layoutDependency: layoutDependency,
                    layoutId: "doTLZdO9l",
                    style: {
                      backgroundColor:
                        "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(232, 232, 232, 0.7))",
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                    },
                    variants: {
                      RYwuKvV2u: {
                        backgroundColor:
                          "var(--token-0998aeba-5eb4-400a-87c6-fe3a20398e99, rgba(232, 232, 232, 0))",
                      },
                    },
                    children: [
                      /*#__PURE__*/ _jsx(motion.div, {
                        className: "framer-1gl9422",
                        "data-framer-name": "Animation",
                        layoutDependency: layoutDependency,
                        layoutId: "iHQIsSX60",
                        style: {
                          backgroundColor:
                            "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                          borderBottomLeftRadius: 16,
                          borderBottomRightRadius: 16,
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                          opacity: 1,
                        },
                        variants: { RYwuKvV2u: { opacity: 0 } },
                        children: /*#__PURE__*/ _jsx(
                          ComponentViewportProvider,
                          {
                            width: "286px",
                            children: /*#__PURE__*/ _jsx(motion.div, {
                              className: "framer-g9vjrz-container",
                              layoutDependency: layoutDependency,
                              layoutId: "dfRkqbr_t-container",
                              children: /*#__PURE__*/ _jsx(UtilitiesNavArrows, {
                                height: "100%",
                                id: "dfRkqbr_t",
                                layoutId: "dfRkqbr_t",
                                style: { height: "100%", width: "100%" },
                                variant: "U0SsSgQMn",
                                width: "100%",
                                ...addPropertyOverrides(
                                  { RYwuKvV2u: { variant: "OASYeSZEO" } },
                                  baseVariant,
                                  gestureVariant,
                                ),
                              }),
                            }),
                          },
                        ),
                      }),
                      /*#__PURE__*/ _jsxs(motion.div, {
                        className: "framer-1eza88s",
                        "data-framer-name": "Description",
                        layoutDependency: layoutDependency,
                        layoutId: "Cix7kXnzO",
                        style: { opacity: 1 },
                        variants: { RYwuKvV2u: { opacity: 0 } },
                        children: [
                          /*#__PURE__*/ _jsx(RichTextLanguage_En_Content, {
                            __fromCanvasComponent: true,
                            children: /*#__PURE__*/ _jsx(React.Fragment, {
                              children: /*#__PURE__*/ _jsx(motion.p, {
                                className: "framer-styles-preset-9jlebu",
                                "data-styles-preset": "sSyE5_N0_",
                                children:
                                  "Enable the navigation arrows on both edges and click on them to move the stack.",
                              }),
                            }),
                            className: "framer-14h6muq",
                            fonts: ["Inter"],
                            layoutDependency: layoutDependency,
                            layoutId: "xh6Ww0heP",
                            style: {
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: true,
                          }),
                          /*#__PURE__*/ _jsx(RichTextLanguage_Chn_Content, {
                            __fromCanvasComponent: true,
                            children: /*#__PURE__*/ _jsx(React.Fragment, {
                              children: /*#__PURE__*/ _jsx(motion.p, {
                                className: "framer-styles-preset-9jlebu",
                                "data-styles-preset": "sSyE5_N0_",
                                children:
                                  "启用屏幕两侧的导航箭头，点击箭头来移动水平布局。",
                              }),
                            }),
                            className: "framer-fa75wk",
                            fonts: ["Inter"],
                            layoutDependency: layoutDependency,
                            layoutId: "Jjas6VVCc",
                            style: {
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: true,
                          }),
                        ],
                      }),
                    ],
                  }),
                  /*#__PURE__*/ _jsx(motion.div, {
                    className: "framer-1ka8oli",
                    "data-framer-name": "Info",
                    layoutDependency: layoutDependency,
                    layoutId: "N1Ru2qSdL",
                    style: {
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      opacity: 0,
                      scale: 4,
                    },
                    transformTemplate: transformTemplate2,
                    variants: { RYwuKvV2u: { opacity: 1, scale: 1 } },
                    children: /*#__PURE__*/ _jsx(SVG, {
                      className: "framer-pje6jb",
                      layout: "position",
                      layoutDependency: layoutDependency,
                      layoutId: "RynsqTa1B",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 10"><path d="M 2.987 2 L 2.994 2" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 3 8.667 L 3 5.333" fill="transparent" stroke-width="1.5" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 10737003728,
                      withExternalLayout: true,
                    }),
                  }),
                ],
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
  ".framer-aYedV.framer-f536af, .framer-aYedV .framer-f536af { display: block; }",
  ".framer-aYedV.framer-1u2oanh { height: 300px; overflow: visible; position: relative; width: 302px; }",
  ".framer-aYedV .framer-mowc77-container { bottom: -62px; flex: none; height: auto; left: 50%; pointer-events: auto; position: absolute; width: auto; }",
  ".framer-aYedV .framer-u3zpnt { bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }",
  ".framer-aYedV .framer-17nxuy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 50%; width: 302px; }",
  ".framer-aYedV .framer-14xsmxa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 300px; justify-content: center; overflow: hidden; padding: 8px 8px 12px 8px; position: relative; width: 302px; will-change: var(--framer-will-change-override, transform); }",
  ".framer-aYedV .framer-1gl9422 { aspect-ratio: 1.3333333333333333 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 215px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
  ".framer-aYedV .framer-g9vjrz-container { bottom: 1px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }",
  ".framer-aYedV .framer-1eza88s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 58px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 10px; position: relative; width: 100%; }",
  ".framer-aYedV .framer-14h6muq, .framer-aYedV .framer-fa75wk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
  ".framer-aYedV .framer-1ka8oli { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; overflow: hidden; pointer-events: none; position: absolute; top: 50%; width: 16px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
  ".framer-aYedV .framer-pje6jb { flex: none; height: 10px; left: calc(50.00000000000002% - 6px / 2); position: absolute; top: calc(50.00000000000002% - 10px / 2); width: 6px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-aYedV .framer-17nxuy, .framer-aYedV .framer-14xsmxa, .framer-aYedV .framer-1eza88s { gap: 0px; } .framer-aYedV .framer-17nxuy > *, .framer-aYedV .framer-14xsmxa > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-aYedV .framer-17nxuy > :first-child, .framer-aYedV .framer-14xsmxa > :first-child, .framer-aYedV .framer-1eza88s > :first-child { margin-top: 0px; } .framer-aYedV .framer-17nxuy > :last-child, .framer-aYedV .framer-14xsmxa > :last-child, .framer-aYedV .framer-1eza88s > :last-child { margin-bottom: 0px; } .framer-aYedV .framer-1eza88s > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
  ".framer-aYedV.framer-v-1cmx260.framer-1u2oanh { height: 20px; overflow: hidden; width: 20px; }",
  ".framer-aYedV.framer-v-1cmx260 .framer-u3zpnt { bottom: 2px; left: 2px; right: 2px; top: 2px; }",
  ...sharedStyle.css,
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 300
 * @framerIntrinsicWidth 302
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"RYwuKvV2u":{"layout":["fixed","fixed"]}}}
 * @framerVariables {"kEaKLjxdV":"open","d6MkcFD8T":"close"}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 */ const FramerDxUBUXd7c = withCSS(Component, css, "framer-aYedV");
export default FramerDxUBUXd7c;
FramerDxUBUXd7c.displayName = "Utilities/PopupArrow";
FramerDxUBUXd7c.defaultProps = { height: 300, width: 302 };
addPropertyControls(FramerDxUBUXd7c, {
  variant: {
    options: ["hmV4UHOLM", "RYwuKvV2u"],
    optionTitles: ["Expanded", "Collasped"],
    title: "Variant",
    type: ControlType.Enum,
  },
  kEaKLjxdV: { title: "Open", type: ControlType.EventHandler },
  d6MkcFD8T: { title: "Close", type: ControlType.EventHandler },
});
addFonts(
  FramerDxUBUXd7c,
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
    ...ToggleCloseFonts,
    ...UtilitiesNavArrowsFonts,
    ...getFontsFromSharedStyle(sharedStyle.fonts),
  ],
  { supportsExplicitInterCodegen: true },
);
export const __FramerMetadata__ = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerDxUBUXd7c",
      slots: [],
      annotations: {
        framerVariables: '{"kEaKLjxdV":"open","d6MkcFD8T":"close"}',
        framerIntrinsicWidth: "302",
        framerComponentViewportWidth: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"RYwuKvV2u":{"layout":["fixed","fixed"]}}}',
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerIntrinsicHeight: "300",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
