// Generated by Framer (6b748fa)
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
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
import * as sharedStyle from "https://framerusercontent.com/modules/YaScuEuAgsRkwMZoLqKT/s7ISYLRiruX2fMZeRNFz/f9YDJyYdv.js";
const RichTextLanguage_En_Content = Language_En_Content(RichText);
const RichTextLanguage_Chn_Content = Language_Chn_Content(RichText);
const enabledGestures = { cU0xCisiI: { hover: true } };
const cycleOrder = ["cU0xCisiI"];
const serializationHash = "framer-EBH0e";
const variantClassNames = { cU0xCisiI: "framer-v-uux9jp" };
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
const numberToPixelString = (value) => {
  if (typeof value !== "number") return value;
  if (!Number.isFinite(value)) return undefined;
  return Math.max(0, value) + "px";
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
const getProps = ({ click, height, id, padding, width, zoom, ...props }) => {
  var _ref;
  return {
    ...props,
    gaejvaWNT: click !== null && click !== void 0 ? click : props.gaejvaWNT,
    ktrOcOIHd: zoom !== null && zoom !== void 0 ? zoom : props.ktrOcOIHd,
    WkYYvDCa1:
      (_ref =
        padding !== null && padding !== void 0 ? padding : props.WkYYvDCa1) !==
        null && _ref !== void 0
        ? _ref
        : "14px 20px 14px 20px",
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
    gaejvaWNT,
    ktrOcOIHd,
    WkYYvDCa1,
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
    defaultVariant: "cU0xCisiI",
    enabledGestures,
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onTap9dg6og = activeVariantCallback(async (...args) => {
    if (gaejvaWNT) {
      const res = await gaejvaWNT(...args);
      if (res === false) return false;
    }
    if (ktrOcOIHd) {
      const res = await ktrOcOIHd(...args);
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
        children: /*#__PURE__*/ _jsx(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(
            serializationHash,
            ...sharedStyleClassNames,
            "framer-uux9jp",
            className,
            classNames,
          ),
          "data-framer-name": "Titles",
          layoutDependency: layoutDependency,
          layoutId: "cU0xCisiI",
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style },
          ...addPropertyOverrides(
            { "cU0xCisiI-hover": { "data-framer-name": undefined } },
            baseVariant,
            gestureVariant,
          ),
          children: /*#__PURE__*/ _jsxs(motion.div, {
            className: "framer-ewkntx",
            "data-highlight": true,
            layoutDependency: layoutDependency,
            layoutId: "m3nUdoGdr",
            onTap: onTap9dg6og,
            style: {
              "--ftyot2": numberToPixelString(WkYYvDCa1),
              backgroundColor:
                "var(--token-06c3110c-0775-4f83-beaa-2e83a6a2d842, rgb(0, 0, 0))",
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            },
            children: [
              /*#__PURE__*/ _jsx(RichTextLanguage_En_Content, {
                __fromCanvasComponent: true,
                children: /*#__PURE__*/ _jsx(React.Fragment, {
                  children: /*#__PURE__*/ _jsx(motion.h5, {
                    className: "framer-styles-preset-9k6rgp",
                    "data-styles-preset": "f9YDJyYdv",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-1lwpl3i, rgb(255, 255, 255))",
                    },
                    children:
                      "Jayzhushi.com has been remastered, check the logs.",
                  }),
                }),
                className: "framer-1gv2bud",
                fonts: ["Inter"],
                layoutDependency: layoutDependency,
                layoutId: "NY3BnV4bM",
                style: {
                  "--extracted-1lwpl3i": "rgb(255, 255, 255)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                verticalAlignment: "top",
                withExternalLayout: true,
              }),
              /*#__PURE__*/ _jsx(RichTextLanguage_Chn_Content, {
                __fromCanvasComponent: true,
                children: /*#__PURE__*/ _jsx(React.Fragment, {
                  children: /*#__PURE__*/ _jsx(motion.h5, {
                    className: "framer-styles-preset-9k6rgp",
                    "data-styles-preset": "f9YDJyYdv",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-1lwpl3i, rgb(255, 255, 255))",
                    },
                    children: "Jayzhushi.com 已经重制，敬请查看更新日志",
                  }),
                }),
                className: "framer-1gwwgtx",
                fonts: ["Inter"],
                layoutDependency: layoutDependency,
                layoutId: "udVHyErfR",
                style: {
                  "--extracted-1lwpl3i": "rgb(255, 255, 255)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                verticalAlignment: "top",
                withExternalLayout: true,
              }),
              /*#__PURE__*/ _jsx(motion.div, {
                className: "framer-1hbwro5",
                layoutDependency: layoutDependency,
                layoutId: "bUhMO6o5O",
                style: { rotate: 0 },
                variants: { "cU0xCisiI-hover": { rotate: 90 } },
                children: /*#__PURE__*/ _jsx(SVG, {
                  className: "framer-25g2tg",
                  "data-framer-name": "graphic",
                  layout: "position",
                  layoutDependency: layoutDependency,
                  layoutId: "PYGNbe5ah",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 3.333 L 10 16.667 M 16.667 10 L 3.333 10" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                  svgContentId: 10091957626,
                  withExternalLayout: true,
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
  ".framer-EBH0e.framer-kiiyki, .framer-EBH0e .framer-kiiyki { display: block; }",
  ".framer-EBH0e.framer-uux9jp { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 600px; }",
  ".framer-EBH0e .framer-ewkntx { align-content: center; align-items: center; cursor: pointer; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: var(--ftyot2); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
  ".framer-EBH0e .framer-1gv2bud, .framer-EBH0e .framer-1gwwgtx { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
  ".framer-EBH0e .framer-1hbwro5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
  ".framer-EBH0e .framer-25g2tg { flex: none; height: 20px; position: relative; width: 20px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-EBH0e.framer-uux9jp, .framer-EBH0e .framer-ewkntx, .framer-EBH0e .framer-1hbwro5 { gap: 0px; } .framer-EBH0e.framer-uux9jp > *, .framer-EBH0e .framer-1hbwro5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-EBH0e.framer-uux9jp > :first-child, .framer-EBH0e .framer-ewkntx > :first-child, .framer-EBH0e .framer-1hbwro5 > :first-child { margin-left: 0px; } .framer-EBH0e.framer-uux9jp > :last-child, .framer-EBH0e .framer-ewkntx > :last-child, .framer-EBH0e .framer-1hbwro5 > :last-child { margin-right: 0px; } .framer-EBH0e .framer-ewkntx > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } }",
  ...sharedStyle.css,
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 75
 * @framerIntrinsicWidth 600
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"JbdUNmnJg":{"layout":["fixed","auto"]}}}
 * @framerVariables {"gaejvaWNT":"click","ktrOcOIHd":"zoom","WkYYvDCa1":"padding"}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 */ const FramerO7FC3YBnl = withCSS(Component, css, "framer-EBH0e");
export default FramerO7FC3YBnl;
FramerO7FC3YBnl.displayName = "Home/NoticeBoard";
FramerO7FC3YBnl.defaultProps = { height: 75, width: 600 };
addPropertyControls(FramerO7FC3YBnl, {
  gaejvaWNT: { title: "Click", type: ControlType.EventHandler },
  ktrOcOIHd: { title: "Zoom", type: ControlType.EventHandler },
  WkYYvDCa1: {
    defaultValue: "14px 20px 14px 20px",
    title: "Padding",
    type: ControlType.Padding,
  },
});
addFonts(
  FramerO7FC3YBnl,
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
    ...getFontsFromSharedStyle(sharedStyle.fonts),
  ],
  { supportsExplicitInterCodegen: true },
);
export const __FramerMetadata__ = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerO7FC3YBnl",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"JbdUNmnJg":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
        framerContractVersion: "1",
        framerIntrinsicHeight: "75",
        framerImmutableVariables: "true",
        framerVariables:
          '{"gaejvaWNT":"click","ktrOcOIHd":"zoom","WkYYvDCa1":"padding"}',
        framerIntrinsicWidth: "600",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
