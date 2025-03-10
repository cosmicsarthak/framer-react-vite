// Generated by Framer (68f6254)
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  getFontsFromSharedStyle,
  Link,
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
import { Effect_BackdropBlur } from "https://framerusercontent.com/modules/kLa7qiYA4dfsdQ7XGm00/YD1twedwd956Done8Gic/Utilities.js";
import * as sharedStyle from "https://framerusercontent.com/modules/qMvHZklk6ZnfqFNzWCME/SHnEQjAcXf1z04yktG2e/hCbgbtQ8_.js";
import * as sharedStyle1 from "https://framerusercontent.com/modules/IJuPkH75DrOaXa8hMB2D/uNPycaMZJ1T8jriUTsGK/sSyE5_N0_.js";
const RichTextLanguage_En_Content = Language_En_Content(RichText);
const RichTextLanguage_Chn_Content = Language_Chn_Content(RichText);
const MotionDivEffect_BackdropBlur = Effect_BackdropBlur(motion.div);
const cycleOrder = [
  "eVJtmaWf9",
  "KMQdZwXp8",
  "jGXaNpgZR",
  "eA_pBon07",
  "wfGsC6Ths",
  "L52MJ5fwt",
  "QTGMbNDp9",
];
const serializationHash = "framer-shXGa";
const variantClassNames = {
  eA_pBon07: "framer-v-4ig8og",
  eVJtmaWf9: "framer-v-zzfao0",
  jGXaNpgZR: "framer-v-12r9n5b",
  KMQdZwXp8: "framer-v-eb6pcg",
  L52MJ5fwt: "framer-v-1esf33a",
  QTGMbNDp9: "framer-v-15m3ch5",
  wfGsC6Ths: "framer-v-o22u3e",
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
  damping: 14,
  delay: 0,
  mass: 1,
  stiffness: 140,
  type: "spring",
};
const transition2 = {
  delay: 0,
  duration: 0.2,
  ease: [0.44, 0, 0.56, 1],
  type: "tween",
};
const animation = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 0.85,
  skewX: 0,
  skewY: 0,
  transition: transition2,
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
  Coming: "wfGsC6Ths",
  Forward_White: "eA_pBon07",
  Forward: "KMQdZwXp8",
  Learn: "L52MJ5fwt",
  Text_White: "jGXaNpgZR",
  Text: "eVJtmaWf9",
  White: "QTGMbNDp9",
};
const getProps = ({
  height,
  id,
  link,
  tap,
  title,
  titleChn,
  width,
  ...props
}) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1, _ref2;
  return {
    ...props,
    jqcdHdCYz:
      (_ref =
        titleChn !== null && titleChn !== void 0
          ? titleChn
          : props.jqcdHdCYz) !== null && _ref !== void 0
        ? _ref
        : "返回",
    ny_QEPOPk: link !== null && link !== void 0 ? link : props.ny_QEPOPk,
    TLWmWmG9S: tap !== null && tap !== void 0 ? tap : props.TLWmWmG9S,
    variant:
      (_ref1 =
        (_humanReadableVariantMap_props_variant =
          humanReadableVariantMap[props.variant]) !== null &&
        _humanReadableVariantMap_props_variant !== void 0
          ? _humanReadableVariantMap_props_variant
          : props.variant) !== null && _ref1 !== void 0
        ? _ref1
        : "eVJtmaWf9",
    xH050kkag:
      (_ref2 = title !== null && title !== void 0 ? title : props.xH050kkag) !==
        null && _ref2 !== void 0
        ? _ref2
        : "Home",
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
    xH050kkag,
    jqcdHdCYz,
    ny_QEPOPk,
    TLWmWmG9S,
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
    defaultVariant: "eVJtmaWf9",
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onTap2ga9y4 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (TLWmWmG9S) {
      const res = await TLWmWmG9S(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React.useRef(null);
  const isDisplayed = () => {
    if (baseVariant === "L52MJ5fwt") return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (["KMQdZwXp8", "eA_pBon07"].includes(baseVariant)) return true;
    return false;
  };
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [sharedStyle.className, sharedStyle1.className];
  const componentViewport = useComponentViewport();
  return /*#__PURE__*/ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /*#__PURE__*/ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /*#__PURE__*/ _jsx(Transition, {
        value: transition1,
        children: /*#__PURE__*/ _jsx(Link, {
          href: ny_QEPOPk,
          openInNewTab: true,
          smoothScroll: false,
          ...addPropertyOverrides(
            { L52MJ5fwt: { openInNewTab: false, smoothScroll: true } },
            baseVariant,
            gestureVariant,
          ),
          children: /*#__PURE__*/ _jsx(motion.a, {
            ...restProps,
            ...gestureHandlers,
            className: `${cx(serializationHash, ...sharedStyleClassNames, "framer-zzfao0", className, classNames)} framer-1yfut0v`,
            "data-framer-name": "Text",
            "data-highlight": true,
            layoutDependency: layoutDependency,
            layoutId: "eVJtmaWf9",
            onTap: onTap2ga9y4,
            ref: ref !== null && ref !== void 0 ? ref : ref1,
            style: {
              borderBottomLeftRadius: 23,
              borderBottomRightRadius: 23,
              borderTopLeftRadius: 23,
              borderTopRightRadius: 23,
              ...style,
            },
            ...addPropertyOverrides(
              {
                eA_pBon07: { "data-framer-name": "Forward_White" },
                jGXaNpgZR: { "data-framer-name": "Text_White" },
                KMQdZwXp8: { "data-framer-name": "Forward" },
                L52MJ5fwt: { "data-framer-name": "Learn" },
                QTGMbNDp9: { "data-framer-name": "White" },
                wfGsC6Ths: { "data-framer-name": "Coming" },
              },
              baseVariant,
              gestureVariant,
            ),
            children: /*#__PURE__*/ _jsxs(MotionDivEffect_BackdropBlur, {
              className: "framer-1vmuqax",
              layoutDependency: layoutDependency,
              layoutId: "nZdW7ZWdH",
              style: {
                backgroundColor:
                  "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
              },
              variants: {
                eA_pBon07: {
                  backgroundColor:
                    "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7))",
                },
                jGXaNpgZR: { backgroundColor: "rgba(245, 245, 245, 0.7)" },
                L52MJ5fwt: {
                  backgroundColor:
                    "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7))",
                },
                QTGMbNDp9: {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                },
                wfGsC6Ths: {
                  backgroundColor:
                    "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7))",
                },
              },
              whileTap: animation,
              children: [
                /*#__PURE__*/ _jsx(RichTextLanguage_En_Content, {
                  __fromCanvasComponent: true,
                  children: /*#__PURE__*/ _jsx(React.Fragment, {
                    children: /*#__PURE__*/ _jsx(motion.p, {
                      className: "framer-styles-preset-p7pc09",
                      "data-styles-preset": "hCbgbtQ8_",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                      },
                      children: "Home",
                    }),
                  }),
                  className: "framer-dox4z1",
                  fonts: ["Inter"],
                  layoutDependency: layoutDependency,
                  layoutId: "wnpnX6ev0",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  text: xH050kkag,
                  variants: {
                    eA_pBon07: {
                      "--extracted-r6o4lv":
                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    },
                    jGXaNpgZR: {
                      "--extracted-r6o4lv":
                        "var(--token-fc4a4d4a-5503-4fd0-92cd-caaf72cde115, rgb(0, 0, 0))",
                    },
                    L52MJ5fwt: {
                      "--extracted-r6o4lv":
                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    },
                    QTGMbNDp9: {
                      "--extracted-r6o4lv":
                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    },
                    wfGsC6Ths: {
                      "--extracted-r6o4lv":
                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: true,
                  ...addPropertyOverrides(
                    {
                      eA_pBon07: {
                        children: /*#__PURE__*/ _jsx(React.Fragment, {
                          children: /*#__PURE__*/ _jsx(motion.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                            },
                            children: "Home",
                          }),
                        }),
                      },
                      jGXaNpgZR: {
                        children: /*#__PURE__*/ _jsx(React.Fragment, {
                          children: /*#__PURE__*/ _jsx(motion.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-fc4a4d4a-5503-4fd0-92cd-caaf72cde115, rgb(0, 0, 0)))",
                            },
                            children: "Home",
                          }),
                        }),
                      },
                      L52MJ5fwt: {
                        children: /*#__PURE__*/ _jsx(React.Fragment, {
                          children: /*#__PURE__*/ _jsx(motion.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                            },
                            children: "See more",
                          }),
                        }),
                        text: undefined,
                      },
                      QTGMbNDp9: {
                        children: /*#__PURE__*/ _jsx(React.Fragment, {
                          children: /*#__PURE__*/ _jsx(motion.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                            },
                            children: "Home",
                          }),
                        }),
                      },
                      wfGsC6Ths: {
                        children: /*#__PURE__*/ _jsx(React.Fragment, {
                          children: /*#__PURE__*/ _jsx(motion.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                            },
                            children: "Processing",
                          }),
                        }),
                        text: undefined,
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                }),
                /*#__PURE__*/ _jsx(RichTextLanguage_Chn_Content, {
                  __fromCanvasComponent: true,
                  children: /*#__PURE__*/ _jsx(React.Fragment, {
                    children: /*#__PURE__*/ _jsx(motion.p, {
                      className: "framer-styles-preset-p7pc09",
                      "data-styles-preset": "hCbgbtQ8_",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                      },
                      children: "Home",
                    }),
                  }),
                  className: "framer-1fkdl4",
                  fonts: ["Inter"],
                  layoutDependency: layoutDependency,
                  layoutId: "Me4rNUiYv",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  text: jqcdHdCYz,
                  verticalAlignment: "top",
                  withExternalLayout: true,
                  ...addPropertyOverrides(
                    {
                      eA_pBon07: {
                        children: /*#__PURE__*/ _jsx(React.Fragment, {
                          children: /*#__PURE__*/ _jsx(motion.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            children: "返回",
                          }),
                        }),
                      },
                      jGXaNpgZR: {
                        children: /*#__PURE__*/ _jsx(React.Fragment, {
                          children: /*#__PURE__*/ _jsx(motion.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            children: "返回",
                          }),
                        }),
                      },
                      L52MJ5fwt: {
                        children: /*#__PURE__*/ _jsx(React.Fragment, {
                          children: /*#__PURE__*/ _jsx(motion.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            children: "查看更多",
                          }),
                        }),
                        text: undefined,
                      },
                      QTGMbNDp9: {
                        children: /*#__PURE__*/ _jsx(React.Fragment, {
                          children: /*#__PURE__*/ _jsx(motion.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "返回",
                          }),
                        }),
                      },
                      wfGsC6Ths: {
                        children: /*#__PURE__*/ _jsx(React.Fragment, {
                          children: /*#__PURE__*/ _jsx(motion.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            children: "进行中",
                          }),
                        }),
                        text: undefined,
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                }),
                isDisplayed() &&
                  /*#__PURE__*/ _jsx(SVG, {
                    className: "framer-1m31por",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: layoutDependency,
                    layoutId: "My3q3reMt",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 13 4 L 13 19 C 13 19.552 12.552 20 12 20 C 11.448 20 11 19.552 11 19 L 11 4 C 11 3.448 11.448 3 12 3 C 12.552 3 13 3.448 13 4 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 6.308 14.278 C 6.499 14.094 6.756 13.994 7.021 14 C 7.286 14.006 7.538 14.116 7.722 14.308 L 12 18.771 L 16.278 14.308 C 16.66 13.909 17.293 13.896 17.692 14.278 C 18.091 14.66 18.104 15.293 17.722 15.692 L 13.402 20.199 C 13.254 20.36 13.096 20.511 12.929 20.652 C 12.669 20.872 12.341 20.995 12 21 C 11.577 21 11.267 20.808 11.071 20.652 C 10.904 20.511 10.746 20.36 10.599 20.199 L 6.279 15.692 C 6.095 15.501 5.995 15.244 6.001 14.979 C 6.006 14.714 6.117 14.462 6.308 14.278 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                    svgContentId: 11632452227,
                    withExternalLayout: true,
                    ...addPropertyOverrides(
                      { L52MJ5fwt: { svgContentId: 11566347597 } },
                      baseVariant,
                      gestureVariant,
                    ),
                  }),
                isDisplayed1() &&
                  /*#__PURE__*/ _jsx(SVG, {
                    className: "framer-fpsytu",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: layoutDependency,
                    layoutId: "GbgUhFPgA",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 17 7 L 6 18" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 11 6.132 C 11 6.132 16.634 5.657 17.488 6.512 C 18.343 7.366 17.868 13 17.868 13" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 10674876457,
                    withExternalLayout: true,
                    ...addPropertyOverrides(
                      {
                        eA_pBon07: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 17 7 L 6 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 11 6.132 C 11 6.132 16.634 5.657 17.488 6.512 C 18.343 7.366 17.868 13 17.868 13" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                          svgContentId: 9795536454,
                        },
                        KMQdZwXp8: { svgContentId: 10470045207 },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
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
  ".framer-shXGa.framer-1yfut0v, .framer-shXGa .framer-1yfut0v { display: block; }",
  ".framer-shXGa.framer-zzfao0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
  ".framer-shXGa .framer-1vmuqax { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
  ".framer-shXGa .framer-dox4z1, .framer-shXGa .framer-1fkdl4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
  ".framer-shXGa .framer-1m31por, .framer-shXGa .framer-fpsytu { flex: none; height: 24px; position: relative; width: 24px; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-shXGa.framer-zzfao0, .framer-shXGa .framer-1vmuqax { gap: 0px; } .framer-shXGa.framer-zzfao0 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-shXGa.framer-zzfao0 > :first-child, .framer-shXGa .framer-1vmuqax > :first-child { margin-left: 0px; } .framer-shXGa.framer-zzfao0 > :last-child, .framer-shXGa .framer-1vmuqax > :last-child { margin-right: 0px; } .framer-shXGa .framer-1vmuqax > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
  ".framer-shXGa.framer-v-eb6pcg .framer-1vmuqax, .framer-shXGa.framer-v-4ig8og .framer-1vmuqax, .framer-shXGa.framer-v-1esf33a .framer-1vmuqax { padding: 10px 16px 10px 20px; }",
  ".framer-shXGa.framer-v-15m3ch5 .framer-1vmuqax { height: min-content; padding: 8px 20px 8px 20px; }",
  ...sharedStyle.css,
  ...sharedStyle1.css,
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 42
 * @framerIntrinsicWidth 139.5
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"KMQdZwXp8":{"layout":["auto","auto"]},"jGXaNpgZR":{"layout":["auto","auto"]},"eA_pBon07":{"layout":["auto","auto"]},"wfGsC6Ths":{"layout":["auto","auto"]},"L52MJ5fwt":{"layout":["auto","auto"]},"QTGMbNDp9":{"layout":["auto","auto"]}}}
 * @framerVariables {"xH050kkag":"title","jqcdHdCYz":"titleChn","ny_QEPOPk":"link","TLWmWmG9S":"tap"}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 */ const FramervNGDn_bs4 = withCSS(Component, css, "framer-shXGa");
export default FramervNGDn_bs4;
FramervNGDn_bs4.displayName = "Button/Primary";
FramervNGDn_bs4.defaultProps = { height: 42, width: 139.5 };
addPropertyControls(FramervNGDn_bs4, {
  variant: {
    options: [
      "eVJtmaWf9",
      "KMQdZwXp8",
      "jGXaNpgZR",
      "eA_pBon07",
      "wfGsC6Ths",
      "L52MJ5fwt",
      "QTGMbNDp9",
    ],
    optionTitles: [
      "Text",
      "Forward",
      "Text_White",
      "Forward_White",
      "Coming",
      "Learn",
      "White",
    ],
    title: "Variant",
    type: ControlType.Enum,
  },
  xH050kkag: {
    defaultValue: "Home",
    displayTextArea: false,
    title: "Title",
    type: ControlType.String,
  },
  jqcdHdCYz: {
    defaultValue: "返回",
    displayTextArea: false,
    title: "Title_Chn",
    type: ControlType.String,
  },
  ny_QEPOPk: { title: "Link", type: ControlType.Link },
  TLWmWmG9S: { title: "Tap", type: ControlType.EventHandler },
});
addFonts(
  FramervNGDn_bs4,
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
    ...getFontsFromSharedStyle(sharedStyle1.fonts),
  ],
  { supportsExplicitInterCodegen: true },
);
export const __FramerMetadata__ = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramervNGDn_bs4",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "139.5",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"KMQdZwXp8":{"layout":["auto","auto"]},"jGXaNpgZR":{"layout":["auto","auto"]},"eA_pBon07":{"layout":["auto","auto"]},"wfGsC6Ths":{"layout":["auto","auto"]},"L52MJ5fwt":{"layout":["auto","auto"]},"QTGMbNDp9":{"layout":["auto","auto"]}}}',
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerVariables:
          '{"xH050kkag":"title","jqcdHdCYz":"titleChn","ny_QEPOPk":"link","TLWmWmG9S":"tap"}',
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "42",
        framerComponentViewportWidth: "true",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
