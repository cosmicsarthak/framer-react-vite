// Generated by Framer (9f68555)
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  cx,
  getFontsFromSharedStyle,
  RichText,
  SVG,
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
const MotionDivLanguage_En_Content = Language_En_Content(motion.div);
const MotionDivLanguage_Chn_Content = Language_Chn_Content(motion.div);
const serializationHash = "framer-0yfxH";
const variantClassNames = { KbZxzZZ2u: "framer-v-f280yx" };
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
const Variants = motion.create(React.Fragment);
const getProps = ({ height, id, width, ...props }) => {
  return { ...props };
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
    defaultVariant: "KbZxzZZ2u",
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
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
            "framer-f280yx",
            className,
            classNames,
          ),
          "data-framer-name": "Variant 1",
          layoutDependency: layoutDependency,
          layoutId: "KbZxzZZ2u",
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style },
          children: [
            /*#__PURE__*/ _jsx(SVG, {
              className: "framer-fp8sfu",
              "data-framer-name": "graphic",
              layout: "position",
              layoutDependency: layoutDependency,
              layoutId: "KQREEiKZX",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 24"><path d="M 18.99 19 L 19 19 M 18.99 19 C 18.368 19.617 17.24 19.464 16.448 19.464 C 15.476 19.464 15.008 19.654 14.315 20.347 C 13.725 20.937 12.934 22 12 22 C 11.066 22 10.275 20.937 9.685 20.347 C 8.991 19.654 8.523 19.464 7.552 19.464 C 6.761 19.464 5.632 19.618 5.009 19 C 4.382 18.378 4.536 17.244 4.536 16.448 C 4.536 15.441 4.316 14.978 3.599 14.262 C 2.533 13.196 2 12.662 2 12 C 2 11.338 2.533 10.804 3.6 9.738 C 4.24 9.098 4.536 8.464 4.536 7.552 C 4.536 6.761 4.382 5.632 5 5.009 C 5.622 4.382 6.756 4.536 7.552 4.536 C 8.464 4.536 9.098 4.239 9.738 3.599 C 10.804 2.533 11.338 2 12 2 C 12.662 2 13.196 2.533 14.262 3.6 C 14.902 4.24 15.536 4.536 16.448 4.536 C 17.239 4.536 18.368 4.382 18.991 5 C 19.618 5.622 19.464 6.756 19.464 7.552 C 19.464 8.559 19.684 9.022 20.401 9.738 C 21.467 10.804 22 11.338 22 12 C 22 12.662 21.467 13.196 20.4 14.262 C 19.684 14.979 19.464 15.442 19.464 16.448 C 19.464 17.244 19.618 18.378 18.991 19 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 9 12.893 L 10.8 14.5 L 15 9.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
              svgContentId: 11835526482,
              withExternalLayout: true,
            }),
            /*#__PURE__*/ _jsxs(MotionDivLanguage_En_Content, {
              className: "framer-rlp8lr",
              layoutDependency: layoutDependency,
              layoutId: "JKFUAUxZ1",
              children: [
                /*#__PURE__*/ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /*#__PURE__*/ _jsx(React.Fragment, {
                    children: /*#__PURE__*/ _jsx(motion.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "Updated in",
                    }),
                  }),
                  className: "framer-iofzh",
                  fonts: ["Inter"],
                  layoutDependency: layoutDependency,
                  layoutId: "SivjK3YAE",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: true,
                }),
                /*#__PURE__*/ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /*#__PURE__*/ _jsx(React.Fragment, {
                    children: /*#__PURE__*/ _jsx(motion.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "Sep 25, 2024",
                    }),
                  }),
                  className: "framer-joi6fq",
                  fonts: ["Inter"],
                  layoutDependency: layoutDependency,
                  layoutId: "VMEhHjEm2",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: true,
                }),
              ],
            }),
            /*#__PURE__*/ _jsxs(MotionDivLanguage_Chn_Content, {
              className: "framer-kqxh1k",
              layoutDependency: layoutDependency,
              layoutId: "eZYI2bUmC",
              children: [
                /*#__PURE__*/ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /*#__PURE__*/ _jsx(React.Fragment, {
                    children: /*#__PURE__*/ _jsx(motion.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "更新于",
                    }),
                  }),
                  className: "framer-1tpaygb",
                  fonts: ["Inter"],
                  layoutDependency: layoutDependency,
                  layoutId: "ol8BYaY0W",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: true,
                }),
                /*#__PURE__*/ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /*#__PURE__*/ _jsx(React.Fragment, {
                    children: /*#__PURE__*/ _jsx(motion.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "2024年9月25日",
                    }),
                  }),
                  className: "framer-1fyebya",
                  fonts: ["Inter"],
                  layoutDependency: layoutDependency,
                  layoutId: "J4lVplMJM",
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
      }),
    }),
  });
});
const css = [
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-0yfxH.framer-9xz0e0, .framer-0yfxH .framer-9xz0e0 { display: block; }",
  ".framer-0yfxH.framer-f280yx { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: hidden; padding: 0px 10px 0px 10px; position: relative; width: min-content; }",
  ".framer-0yfxH .framer-fp8sfu { flex: none; height: 24px; position: relative; width: 23px; }",
  ".framer-0yfxH .framer-rlp8lr, .framer-0yfxH .framer-kqxh1k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
  ".framer-0yfxH .framer-iofzh, .framer-0yfxH .framer-joi6fq, .framer-0yfxH .framer-1tpaygb, .framer-0yfxH .framer-1fyebya { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0yfxH.framer-f280yx, .framer-0yfxH .framer-rlp8lr, .framer-0yfxH .framer-kqxh1k { gap: 0px; } .framer-0yfxH.framer-f280yx > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-0yfxH.framer-f280yx > :first-child, .framer-0yfxH .framer-rlp8lr > :first-child, .framer-0yfxH .framer-kqxh1k > :first-child { margin-left: 0px; } .framer-0yfxH.framer-f280yx > :last-child, .framer-0yfxH .framer-rlp8lr > :last-child, .framer-0yfxH .framer-kqxh1k > :last-child { margin-right: 0px; } .framer-0yfxH .framer-rlp8lr > *, .framer-0yfxH .framer-kqxh1k > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } }",
  ...sharedStyle.css,
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 42
 * @framerIntrinsicWidth 412.5
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["auto","fixed"]}}}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 */ const FramerDtDZpEoPO = withCSS(Component, css, "framer-0yfxH");
export default FramerDtDZpEoPO;
FramerDtDZpEoPO.displayName = "Home/UpdateInfo";
FramerDtDZpEoPO.defaultProps = { height: 42, width: 412.5 };
addFonts(
  FramerDtDZpEoPO,
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
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
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
    default: {
      type: "reactComponent",
      name: "FramerDtDZpEoPO",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "412.5",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","fixed"]}}}',
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "42",
        framerComponentViewportWidth: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
