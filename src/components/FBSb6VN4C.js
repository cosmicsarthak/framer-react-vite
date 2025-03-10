// Generated by Framer (aab6bf9)
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  getFontsFromSharedStyle,
  RichText,
  SVG,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
  withFX,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import * as sharedStyle from "https://framerusercontent.com/modules/IJuPkH75DrOaXa8hMB2D/uNPycaMZJ1T8jriUTsGK/sSyE5_N0_.js";
const MotionDivWithFX = withFX(motion.div);
const cycleOrder = ["aMllQyYGb", "wuXOcDovs"];
const serializationHash = "framer-42T8w";
const variantClassNames = {
  aMllQyYGb: "framer-v-1nf3z4b",
  wuXOcDovs: "framer-v-c1vsh",
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
  duration: 3,
  ease: [0.44, 0, 0.56, 1],
  type: "tween",
};
const animation = {
  opacity: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  skewX: 0,
  skewY: 0,
  x: -200,
  y: 0,
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
  y: 40,
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
const humanReadableVariantMap = { OFF: "wuXOcDovs", ON: "aMllQyYGb" };
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
        : "aMllQyYGb",
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
    gestureHandlers,
    gestureVariant,
    setGestureState,
    setVariant,
    variants,
  } = useVariantState({
    cycleOrder,
    defaultVariant: "aMllQyYGb",
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
            "framer-1nf3z4b",
            className,
            classNames,
          ),
          "data-framer-name": "ON",
          layoutDependency: layoutDependency,
          layoutId: "aMllQyYGb",
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            ...style,
          },
          ...addPropertyOverrides(
            { wuXOcDovs: { "data-framer-name": "OFF" } },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /*#__PURE__*/ _jsx(MotionDivWithFX, {
              __framer__loop: animation,
              __framer__loopEffectEnabled: true,
              __framer__loopRepeatDelay: 0.5,
              __framer__loopRepeatType: "mirror",
              __framer__loopTransition: transition2,
              __perspectiveFX: false,
              __smartComponentFX: true,
              __targetOpacity: 1,
              className: "framer-1yqri65",
              layoutDependency: layoutDependency,
              layoutId: "gIueZBBce",
              ...addPropertyOverrides(
                { wuXOcDovs: { __framer__loopEffectEnabled: undefined } },
                baseVariant,
                gestureVariant,
              ),
              children: /*#__PURE__*/ _jsx(SVG, {
                className: "framer-1581v8c",
                layout: "position",
                layoutDependency: layoutDependency,
                layoutId: "OBRNbMtYK-shape",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 592 105"><path d="M 1 11 C 1 5.477 5.477 1 11 1 L 128 1 C 133.523 1 138 5.477 138 11 L 138 94 C 138 99.523 133.523 104 128 104 L 11 104 C 5.477 104 1 99.523 1 94 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 152 11 C 152 5.477 156.477 1 162 1 L 279 1 C 284.523 1 289 5.477 289 11 L 289 94 C 289 99.523 284.523 104 279 104 L 162 104 C 156.477 104 152 99.523 152 94 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 303 11 C 303 5.477 307.477 1 313 1 L 430 1 C 435.523 1 440 5.477 440 11 L 440 94 C 440 99.523 435.523 104 430 104 L 313 104 C 307.477 104 303 99.523 303 94 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 454 11 C 454 5.477 458.477 1 464 1 L 581 1 C 586.523 1 591 5.477 591 11 L 591 94 C 591 99.523 586.523 104 581 104 L 464 104 C 458.477 104 454 99.523 454 94 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 219.268 32 C 220.038 30.667 221.962 30.667 222.732 32 L 246.981 74 C 247.751 75.333 246.788 77 245.249 77 L 196.751 77 C 195.212 77 194.249 75.333 195.019 74 Z" fill="var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15)) /* {&quot;name&quot;:&quot;Black 15&quot;} */"></path><path d="M 372 26 C 386.912 26 399 38.088 399 53 C 399 67.912 386.912 80 372 80 C 357.088 80 345 67.912 345 53 C 345 38.088 357.088 26 372 26 Z" fill="var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15)) /* {&quot;name&quot;:&quot;Black 15&quot;} */"></path><path d="M 67.707 31.26 C 68.44 29.773 70.56 29.773 71.293 31.26 L 77.117 43.059 C 77.408 43.649 77.971 44.059 78.623 44.153 L 91.644 46.045 C 93.284 46.284 93.939 48.3 92.752 49.457 L 83.33 58.641 C 82.859 59.101 82.643 59.763 82.755 60.411 L 84.979 73.38 C 85.259 75.014 83.544 76.26 82.077 75.488 L 70.431 69.365 C 69.848 69.059 69.152 69.059 68.569 69.365 L 56.923 75.488 C 55.456 76.26 53.741 75.014 54.021 73.38 L 56.245 60.411 C 56.357 59.763 56.141 59.101 55.67 58.641 L 46.248 49.457 C 45.061 48.3 45.716 46.284 47.356 46.045 L 60.377 44.153 C 61.029 44.059 61.592 43.649 61.883 43.059 Z" fill="var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15)) /* {&quot;name&quot;:&quot;Black 15&quot;} */"></path><path d="M 521.5 25.577 C 522.119 25.22 522.881 25.22 523.5 25.577 L 545.316 38.173 C 545.935 38.53 546.316 39.19 546.316 39.905 L 546.316 65.095 C 546.316 65.81 545.935 66.47 545.316 66.827 L 523.5 79.423 C 522.881 79.78 522.119 79.78 521.5 79.423 L 499.684 66.827 C 499.065 66.47 498.684 65.81 498.684 65.095 L 498.684 39.905 C 498.684 39.19 499.065 38.53 499.684 38.173 Z" fill="#CCC"></path></svg>',
                svgContentId: 11810328209,
                withExternalLayout: true,
              }),
            }),
            /*#__PURE__*/ _jsx(SVG, {
              className: "framer-1ek7sd4",
              layout: "position",
              layoutDependency: layoutDependency,
              layoutId: "RKiTYO3zW-shape",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 138 139"><path d="M 7.751 45.506 C 9.583 20.418 30.47 1 55.624 1 L 82.376 1 C 107.53 1 128.417 20.418 130.249 45.506 L 137 138 L 1 138 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 69 1 L 69 23" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
              svgContentId: 8671791120,
              withExternalLayout: true,
              ...addPropertyOverrides(
                { wuXOcDovs: { svgContentId: 11571396993 } },
                baseVariant,
                gestureVariant,
              ),
            }),
            /*#__PURE__*/ _jsx(motion.div, {
              className: "framer-1bzgjvf",
              "data-border": true,
              "data-framer-name": "Wheel",
              layoutDependency: layoutDependency,
              layoutId: "hFnm7ZSwj",
              style: {
                "--border-bottom-width": "1.8px",
                "--border-color":
                  "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                "--border-left-width": "1.8px",
                "--border-right-width": "1.8px",
                "--border-style": "solid",
                "--border-top-width": "1.8px",
                backgroundColor:
                  "var(--token-b030a63b-659f-4465-829f-246a02e259cb, rgba(0, 0, 0, 0.1))",
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
              },
              children: /*#__PURE__*/ _jsx(MotionDivWithFX, {
                __framer__loop: animation1,
                __framer__loopEffectEnabled: true,
                __framer__loopRepeatDelay: 0.5,
                __framer__loopRepeatType: "mirror",
                __framer__loopTransition: transition2,
                __perspectiveFX: false,
                __smartComponentFX: true,
                __targetOpacity: 1,
                className: "framer-hdjeq3",
                layoutDependency: layoutDependency,
                layoutId: "a_NyKu9kI",
                ...addPropertyOverrides(
                  { wuXOcDovs: { __framer__loopEffectEnabled: undefined } },
                  baseVariant,
                  gestureVariant,
                ),
                children: /*#__PURE__*/ _jsx(SVG, {
                  className: "framer-1fauyad",
                  layout: "position",
                  layoutDependency: layoutDependency,
                  layoutId: "k5IKYP7Cx-shape",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 119"><path d="M 1 1.5 L 30 1.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 6.5 L 30 6.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 11.5 L 30 11.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 16.5 L 30 16.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 21.5 L 30 21.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 26.5 L 30 26.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 31.5 L 30 31.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 36.5 L 30 36.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 41.5 L 30 41.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 46.5 L 30 46.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 51.5 L 30 51.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 56.5 L 30 56.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 61.5 L 30 61.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 66.5 L 30 66.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 71.5 L 30 71.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 76.5 L 30 76.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 81.5 L 30 81.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 86.5 L 30 86.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 91.5 L 30 91.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 96.5 L 30 96.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 101.5 L 30 101.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 106.5 L 30 106.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 111.5 L 30 111.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 116.5 L 30 116.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                  svgContentId: 9645763554,
                  withExternalLayout: true,
                }),
              }),
            }),
            /*#__PURE__*/ _jsx(motion.div, {
              className: "framer-vvylw5",
              layoutDependency: layoutDependency,
              layoutId: "ejmxqSSHy",
              style: {
                backgroundColor:
                  "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                borderBottomLeftRadius: 7,
                borderBottomRightRadius: 7,
                borderTopLeftRadius: 7,
                borderTopRightRadius: 7,
              },
              children: /*#__PURE__*/ _jsx(RichText, {
                __fromCanvasComponent: true,
                children: /*#__PURE__*/ _jsx(React.Fragment, {
                  children: /*#__PURE__*/ _jsx(motion.p, {
                    className: "framer-styles-preset-9jlebu",
                    "data-styles-preset": "sSyE5_N0_",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                    },
                    children: "Beta",
                  }),
                }),
                className: "framer-6ughxg",
                fonts: ["Inter"],
                layoutDependency: layoutDependency,
                layoutId: "xWr3bZxcF",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                verticalAlignment: "top",
                withExternalLayout: true,
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
  ".framer-42T8w.framer-ascpbu, .framer-42T8w .framer-ascpbu { display: block; }",
  ".framer-42T8w.framer-1nf3z4b { height: 214px; overflow: hidden; position: relative; width: 286px; will-change: var(--framer-will-change-override, transform); }",
  ".framer-42T8w .framer-1yqri65 { flex: none; height: 105px; overflow: visible; position: absolute; right: -346px; top: 40px; width: 592px; }",
  ".framer-42T8w .framer-1581v8c { flex: none; height: 105px; left: calc(50.00000000000002% - 592px / 2); position: absolute; top: calc(49.52380952380955% - 105px / 2); width: 592px; }",
  ".framer-42T8w .framer-1ek7sd4 { bottom: -45px; flex: none; height: 139px; left: calc(49.50000000000002% - 138px / 2); position: absolute; width: 138px; }",
  ".framer-42T8w .framer-1bzgjvf { bottom: 23px; flex: none; height: 49px; left: calc(49.650349650349675% - 25px / 2); overflow: hidden; position: absolute; width: 25px; will-change: var(--framer-will-change-override, transform); }",
  ".framer-42T8w .framer-hdjeq3 { bottom: -3px; flex: none; height: 119px; left: 0px; overflow: visible; position: absolute; right: 1px; }",
  ".framer-42T8w .framer-1fauyad { flex: none; height: 119px; left: calc(45.83333333333336% - 31px / 2); position: absolute; top: calc(49.57983193277313% - 119px / 2); width: 31px; }",
  ".framer-42T8w .framer-vvylw5 { align-content: center; align-items: center; bottom: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 12px; overflow: hidden; padding: 2px 10px 2px 10px; position: absolute; width: min-content; will-change: var(--framer-will-change-override, transform); }",
  ".framer-42T8w .framer-6ughxg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
  "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-42T8w .framer-vvylw5 { gap: 0px; } .framer-42T8w .framer-vvylw5 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-42T8w .framer-vvylw5 > :first-child { margin-top: 0px; } .framer-42T8w .framer-vvylw5 > :last-child { margin-bottom: 0px; } }",
  ".framer-42T8w.framer-v-c1vsh .framer-1ek7sd4 { bottom: -46px; left: calc(49.650349650349675% - 138px / 2); }",
  ...sharedStyle.css,
  '.framer-42T8w[data-border="true"]::after, .framer-42T8w [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 214
 * @framerIntrinsicWidth 286
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"wuXOcDovs":{"layout":["fixed","fixed"]}}}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 */ const FramerFBSb6VN4C = withCSS(Component, css, "framer-42T8w");
export default FramerFBSb6VN4C;
FramerFBSb6VN4C.displayName = "Utilities/ScrollAssistant";
FramerFBSb6VN4C.defaultProps = { height: 214, width: 286 };
addPropertyControls(FramerFBSb6VN4C, {
  variant: {
    options: ["aMllQyYGb", "wuXOcDovs"],
    optionTitles: ["ON", "OFF"],
    title: "Variant",
    type: ControlType.Enum,
  },
});
addFonts(
  FramerFBSb6VN4C,
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
    default: {
      type: "reactComponent",
      name: "FramerFBSb6VN4C",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "286",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerDisplayContentsDiv: "false",
        framerComponentViewportWidth: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"wuXOcDovs":{"layout":["fixed","fixed"]}}}',
        framerIntrinsicHeight: "214",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
