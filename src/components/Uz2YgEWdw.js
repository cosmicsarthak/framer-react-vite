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
  getFonts,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useOverlayState,
  useVariantState,
  withCSS,
  withMappedReactProps,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import {
  Overlayer_Social_Popup,
  Toggle_Social,
} from "https://framerusercontent.com/modules/yue1wEIuxL5Wxj17VKpu/rvoe6u8OOiWRrmZZxev9/Toggle.js";
import ButtonContact from "https://framerusercontent.com/modules/pUGxcUytjlJHowFsJI3Q/pia3lOSag069FUN3jFt9/Dlnn4rFKe.js";
import UtilitiesMailForm, * as UtilitiesMailFormInfo from "https://framerusercontent.com/modules/PghMVN7qlxNHaEPz4yaH/JoyulFWG0RWLaWpx81FJ/JU7ZpO_vm.js";
const ButtonContactFonts = getFonts(ButtonContact);
const MotionDivToggle_Social = Toggle_Social(motion.div);
const UtilitiesMailFormFonts = getFonts(UtilitiesMailForm);
const UtilitiesMailFormOverlayer_Social_PopupWithMappedReactProps19wdhnc =
  withMappedReactProps(
    Overlayer_Social_Popup(UtilitiesMailForm),
    UtilitiesMailFormInfo,
  );
const cycleOrder = [
  "QkHTEsfZ8",
  "oLGoFrqwT",
  "s49AXmd2v",
  "mxi8gZhg7",
  "hMKOOSP6K",
  "VgQrGJ3F8",
  "dClNCFbbb",
  "k7o1gUq0q",
];
const serializationHash = "framer-3v6hH";
const variantClassNames = {
  dClNCFbbb: "framer-v-e92lem",
  hMKOOSP6K: "framer-v-3oadar",
  k7o1gUq0q: "framer-v-wf9l41",
  mxi8gZhg7: "framer-v-kho36m",
  oLGoFrqwT: "framer-v-1c7cpwj",
  QkHTEsfZ8: "framer-v-18x6quu",
  s49AXmd2v: "framer-v-1ccgoc3",
  VgQrGJ3F8: "framer-v-1yof91t",
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
  Dark_Click: "k7o1gUq0q",
  Dark_Hover: "dClNCFbbb",
  Dark: "VgQrGJ3F8",
  Default_Click: "s49AXmd2v",
  Default_Hover: "oLGoFrqwT",
  Default: "QkHTEsfZ8",
  Mobile: "mxi8gZhg7",
  Tinted: "hMKOOSP6K",
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
        : "QkHTEsfZ8",
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
    defaultVariant: "QkHTEsfZ8",
    variant,
    variantClassNames,
  });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } =
    useActiveVariantCallback(baseVariant);
  const onTap14hdtg1 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    setVariant("s49AXmd2v");
  });
  const onMouseEnter1x6oi9v = ({ overlay, paginationInfo }) =>
    activeVariantCallback(async (...args) => {
      setGestureState({ isHovered: true });
      setVariant("oLGoFrqwT");
      overlay.show();
    });
  const onMouseEntert682wp = ({ overlay, paginationInfo }) =>
    activeVariantCallback(async (...args) => {
      setGestureState({ isHovered: true });
      overlay.show();
    });
  const onMouseLeave100gv80 = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: false });
    setVariant("QkHTEsfZ8");
  });
  const onTapebonnb = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    setVariant("k7o1gUq0q");
  });
  const onMouseEnter11p6x1f = ({ overlay, paginationInfo }) =>
    activeVariantCallback(async (...args) => {
      setGestureState({ isHovered: true });
      setVariant("dClNCFbbb");
      overlay.show();
    });
  const onMouseLeaveqdbhn1 = activeVariantCallback(async (...args) => {
    setGestureState({ isHovered: false });
    setVariant("VgQrGJ3F8");
  });
  const QB6UkYvuvgewx3z = activeVariantCallback(async (...args) => {
    setVariant("QkHTEsfZ8");
  });
  const QB6UkYvuv7za6qw = activeVariantCallback(async (...args) => {
    setVariant("VgQrGJ3F8");
  });
  const ref1 = React.useRef(null);
  const isDisplayed = () => {
    if (baseVariant === "mxi8gZhg7") return false;
    return true;
  };
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /*#__PURE__*/ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /*#__PURE__*/ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /*#__PURE__*/ _jsx(Overlay, {
        blockDocumentScrolling: false,
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
                  "framer-18x6quu",
                  className,
                  classNames,
                ),
                "data-framer-name": "Default",
                "data-highlight": true,
                id: `${layoutId}-18x6quu`,
                layoutDependency: layoutDependency,
                layoutId: "QkHTEsfZ8",
                onMouseEnter: onMouseEnter1x6oi9v({ overlay }),
                onTap: onTap14hdtg1,
                ref: ref !== null && ref !== void 0 ? ref : ref1,
                style: {
                  filter: "brightness(1)",
                  WebkitFilter: "brightness(1)",
                  ...style,
                },
                variants: {
                  hMKOOSP6K: {
                    filter: "brightness(0.9)",
                    WebkitFilter: "brightness(0.9)",
                  },
                },
                ...addPropertyOverrides(
                  {
                    dClNCFbbb: {
                      "data-framer-name": "Dark_Hover",
                      onMouseEnter: onMouseEntert682wp({ overlay }),
                      onMouseLeave: onMouseLeaveqdbhn1,
                      onTap: onTapebonnb,
                    },
                    hMKOOSP6K: { "data-framer-name": "Tinted" },
                    k7o1gUq0q: {
                      "data-framer-name": "Dark_Click",
                      onMouseEnter: onMouseEntert682wp({ overlay }),
                      onTap: undefined,
                    },
                    mxi8gZhg7: {
                      "data-framer-name": "Mobile",
                      onMouseEnter: onMouseEntert682wp({ overlay }),
                      onTap: undefined,
                    },
                    oLGoFrqwT: {
                      "data-framer-name": "Default_Hover",
                      onMouseEnter: onMouseEntert682wp({ overlay }),
                      onMouseLeave: onMouseLeave100gv80,
                    },
                    s49AXmd2v: {
                      "data-framer-name": "Default_Click",
                      onMouseEnter: onMouseEntert682wp({ overlay }),
                      onTap: undefined,
                    },
                    VgQrGJ3F8: {
                      "data-framer-name": "Dark",
                      onMouseEnter: onMouseEnter11p6x1f({ overlay }),
                      onTap: onTapebonnb,
                    },
                  },
                  baseVariant,
                  gestureVariant,
                ),
                children: [
                  /*#__PURE__*/ _jsx(MotionDivToggle_Social, {
                    className: "framer-1w1m2r0",
                    layoutDependency: layoutDependency,
                    layoutId: "uaBRTY9NN",
                    transformTemplate: transformTemplate1,
                    children: /*#__PURE__*/ _jsx(ComponentViewportProvider, {
                      children: /*#__PURE__*/ _jsx(motion.div, {
                        className: "framer-hb5bxg-container",
                        layoutDependency: layoutDependency,
                        layoutId: "s6Pj7r31I-container",
                        children: /*#__PURE__*/ _jsx(ButtonContact, {
                          b1BqfRpNR: true,
                          bUFcBjj2_: false,
                          dIiBtQnYe: 100,
                          height: "100%",
                          id: "s6Pj7r31I",
                          layoutId: "s6Pj7r31I",
                          variant: "LqK6hOvsJ",
                          VTdF3jUde:
                            "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                          width: "100%",
                          ZWLrRxtcU: true,
                          ...addPropertyOverrides(
                            {
                              dClNCFbbb: { variant: "Kl68LqE9j" },
                              k7o1gUq0q: {
                                QB6UkYvuv: QB6UkYvuv7za6qw,
                                variant: "UKjaIInwR",
                              },
                              mxi8gZhg7: {
                                jmykv9nju: "mailto:jayzhushi@gmail.com",
                              },
                              s49AXmd2v: {
                                QB6UkYvuv: QB6UkYvuvgewx3z,
                                variant: "BNgYtsM9z",
                              },
                              VgQrGJ3F8: { variant: "Kl68LqE9j" },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        }),
                      }),
                    }),
                  }),
                  isDisplayed() &&
                    /*#__PURE__*/ _jsx(Transition, {
                      value: transition2,
                      children: /*#__PURE__*/ _jsx(ComponentViewportProvider, {
                        width: "417px",
                        children: /*#__PURE__*/ _jsx(motion.div, {
                          className: "framer-1dnxfbi-container",
                          layoutDependency: layoutDependency,
                          layoutId: "snYJq0aEh-container",
                          style: {
                            opacity: 0,
                            originX: 0,
                            originY: 1,
                            scale: 0.5,
                          },
                          variants: {
                            dClNCFbbb: { opacity: 1, scale: 1 },
                            k7o1gUq0q: { opacity: 1, scale: 1 },
                            oLGoFrqwT: { opacity: 1, scale: 1 },
                            s49AXmd2v: { opacity: 1, scale: 1 },
                          },
                          children: /*#__PURE__*/ _jsx(
                            UtilitiesMailFormOverlayer_Social_PopupWithMappedReactProps19wdhnc,
                            {
                              height: "100%",
                              id: "snYJq0aEh",
                              layoutId: "snYJq0aEh",
                              style: { width: "100%" },
                              width: "100%",
                            },
                          ),
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
  ".framer-3v6hH.framer-cu1vlg, .framer-3v6hH .framer-cu1vlg { display: block; }",
  ".framer-3v6hH.framer-18x6quu { cursor: pointer; height: 54px; overflow: visible; position: relative; width: 54px; }",
  ".framer-3v6hH .framer-1w1m2r0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }",
  ".framer-3v6hH .framer-hb5bxg-container { flex: none; height: auto; position: relative; width: auto; }",
  ".framer-3v6hH .framer-1dnxfbi-container { bottom: 64px; flex: none; height: auto; left: 0px; pointer-events: none; position: absolute; width: 417px; z-index: 0; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3v6hH .framer-1w1m2r0 { gap: 0px; } .framer-3v6hH .framer-1w1m2r0 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-3v6hH .framer-1w1m2r0 > :first-child { margin-left: 0px; } .framer-3v6hH .framer-1w1m2r0 > :last-child { margin-right: 0px; } }",
  ".framer-3v6hH.framer-v-1c7cpwj .framer-1dnxfbi-container, .framer-3v6hH.framer-v-1ccgoc3 .framer-1dnxfbi-container, .framer-3v6hH.framer-v-e92lem .framer-1dnxfbi-container, .framer-3v6hH.framer-v-wf9l41 .framer-1dnxfbi-container { pointer-events: auto; }",
  ".framer-3v6hH.framer-v-1ccgoc3.framer-18x6quu, .framer-3v6hH.framer-v-kho36m.framer-18x6quu, .framer-3v6hH.framer-v-wf9l41.framer-18x6quu { cursor: unset; }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 54
 * @framerIntrinsicWidth 54
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"oLGoFrqwT":{"layout":["fixed","fixed"]},"s49AXmd2v":{"layout":["fixed","fixed"]},"mxi8gZhg7":{"layout":["fixed","fixed"]},"hMKOOSP6K":{"layout":["fixed","fixed"]},"VgQrGJ3F8":{"layout":["fixed","fixed"]},"dClNCFbbb":{"layout":["fixed","fixed"]},"k7o1gUq0q":{"layout":["fixed","fixed"]}}}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 */ const FramerUz2YgEWdw = withCSS(Component, css, "framer-3v6hH");
export default FramerUz2YgEWdw;
FramerUz2YgEWdw.displayName = "Social/Mail";
FramerUz2YgEWdw.defaultProps = { height: 54, width: 54 };
addPropertyControls(FramerUz2YgEWdw, {
  variant: {
    options: [
      "QkHTEsfZ8",
      "oLGoFrqwT",
      "s49AXmd2v",
      "mxi8gZhg7",
      "hMKOOSP6K",
      "VgQrGJ3F8",
      "dClNCFbbb",
      "k7o1gUq0q",
    ],
    optionTitles: [
      "Default",
      "Default_Hover",
      "Default_Click",
      "Mobile",
      "Tinted",
      "Dark",
      "Dark_Hover",
      "Dark_Click",
    ],
    title: "Variant",
    type: ControlType.Enum,
  },
});
addFonts(
  FramerUz2YgEWdw,
  [
    { explicitInter: true, fonts: [] },
    ...ButtonContactFonts,
    ...UtilitiesMailFormFonts,
  ],
  { supportsExplicitInterCodegen: true },
);
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerUz2YgEWdw",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "54",
        framerIntrinsicHeight: "54",
        framerContractVersion: "1",
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"oLGoFrqwT":{"layout":["fixed","fixed"]},"s49AXmd2v":{"layout":["fixed","fixed"]},"mxi8gZhg7":{"layout":["fixed","fixed"]},"hMKOOSP6K":{"layout":["fixed","fixed"]},"VgQrGJ3F8":{"layout":["fixed","fixed"]},"dClNCFbbb":{"layout":["fixed","fixed"]},"k7o1gUq0q":{"layout":["fixed","fixed"]}}}',
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
