import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
  Children,
  useEffect,
  useState,
  useRef,
  useMemo,
  createRef,
  useCallback,
  cloneElement,
} from "react";
import { addPropertyControls, ControlType, RenderTarget } from "../framer_scripts/framer.K3G2LCX5.mjs";
import {
  useAnimationFrame,
  useReducedMotion,
  LayoutGroup,
  useInView,
  useMotionValue,
  useTransform,
  motion,
  wrap,
  frame,
} from "framer-motion";
import { resize } from "@motionone/dom";
const MAX_DUPLICATED_ITEMS = 100;
const directionTransformers = {
  left: (offset) => `translateX(-${offset}px)`,
  right: (offset) => `translateX(${offset}px)`,
  top: (offset) => `translateY(-${offset}px)`,
  bottom: (offset) => `translateY(${offset}px)`,
};
const supportsAcceleratedAnimations =
  typeof Animation !== "undefined" &&
  typeof Animation.prototype.updatePlaybackRate === "function";
/**
 *
 * @framerIntrinsicWidth 400
 * @framerIntrinsicHeight 200
 *
 * @framerDisableUnlink
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */ export default function Ticker(props) {
  /* Props */ let {
    slots,
    gap,
    padding,
    paddingPerSide,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    speed,
    hoverFactor,
    direction,
    alignment,
    sizingOptions,
    fadeOptions,
    style,
  } = props;
  const { fadeContent, overflow, fadeWidth, fadeInset, fadeAlpha } =
    fadeOptions;
  const { widthType, heightType } = sizingOptions;
  const paddingValue = paddingPerSide
    ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
    : `${padding}px`;
  /* Checks */ const isCanvas = RenderTarget.current() === RenderTarget.canvas; // Remove empty slots (such as hidden layers)
  const filteredSlots = slots.filter(Boolean);
  const numChildren = Children.count(filteredSlots);
  const hasChildren = numChildren > 0;
  if (direction === true) {
    direction = "left";
  }
  const isHorizontal = direction === "left" || direction === "right";
  const offset = useMotionValue(0);
  const transformer = directionTransformers[direction];
  const transform = useTransform(offset, transformer);
  /* Refs and State */ const parentRef = useRef(null);
  const childrenRef = useMemo(() => {
    return [/*#__PURE__*/ createRef(), /*#__PURE__*/ createRef()];
  }, []);
  const [size, setSize] = useState({ parent: null, children: null });
  /* Arrays */ let clonedChildren = [];
  let dupedChildren = [];
  /* Duplicate value */ let duplicateBy = 0;
  let opacity = 0;
  if (isCanvas) {
    duplicateBy = numChildren ? Math.floor(10 / numChildren) : 0;
    opacity = 1;
  }
  if (!isCanvas && hasChildren && size.parent) {
    duplicateBy = Math.round((size.parent / size.children) * 2) + 1;
    duplicateBy = Math.min(duplicateBy, MAX_DUPLICATED_ITEMS);
    opacity = 1;
  }
  /* Measure parent and child */ const measure = useCallback(() => {
    if (hasChildren && parentRef.current) {
      const parentLength = isHorizontal
        ? parentRef.current.offsetWidth
        : parentRef.current.offsetHeight;
      const start = childrenRef[0].current
        ? isHorizontal
          ? childrenRef[0].current.offsetLeft
          : childrenRef[0].current.offsetTop
        : 0;
      const end = childrenRef[1].current
        ? isHorizontal
          ? childrenRef[1].current.offsetLeft +
            childrenRef[1].current.offsetWidth
          : childrenRef[1].current.offsetTop +
            childrenRef[1].current.offsetHeight
        : 0;
      const childrenLength = end - start + gap;
      setSize({ parent: parentLength, children: childrenLength });
    }
  }, []);
  const childrenStyles = isCanvas ? { contentVisibility: "auto" } : {};
  /* Add refs to first and last child */ if (hasChildren) {
    // TODO: These conditional hooks will be unsafe if hasChildren ever changes outside the canvas.
    if (!isCanvas) {
      /**
       * Track whether this is the initial resize event. By default this will fire on mount,
       * which we do in the useEffect. We should only fire it on subsequent resizes.
       */ let initialResize = useRef(true);
      useEffect(() => {
        frame.read(measure);
        return resize(parentRef.current, ({ contentSize }) => {
          if (
            !initialResize.current &&
            (contentSize.width || contentSize.height)
          ) {
            frame.read(measure);
          }
          initialResize.current = false;
        });
      }, []);
    }
    clonedChildren = Children.map(filteredSlots, (child, index) => {
      var _child_props, _child_props1, _child_props2, _child_props3;
      let ref;
      if (index === 0) {
        ref = childrenRef[0];
      }
      if (index === filteredSlots.length - 1) {
        ref = childrenRef[1];
      }
      const size = {
        width: widthType
          ? (_child_props = child.props) === null || _child_props === void 0
            ? void 0
            : _child_props.width
          : "100%",
        height: heightType
          ? (_child_props1 = child.props) === null || _child_props1 === void 0
            ? void 0
            : _child_props1.height
          : "100%",
      };
      return /*#__PURE__*/ _jsx(LayoutGroup, {
        inherit: "id",
        children: /*#__PURE__*/ _jsx("li", {
          ref: ref,
          style: size,
          children: /*#__PURE__*/ cloneElement(
            child,
            {
              style: {
                ...((_child_props2 = child.props) === null ||
                _child_props2 === void 0
                  ? void 0
                  : _child_props2.style),
                ...size,
                flexShrink: 0,
                ...childrenStyles,
              },
              layoutId: child.props.layoutId
                ? child.props.layoutId + "-original-" + index
                : undefined,
            },
            (_child_props3 = child.props) === null || _child_props3 === void 0
              ? void 0
              : _child_props3.children,
          ),
        }),
      });
    });
  }
  if (!isCanvas) {
    for (let i = 0; i < duplicateBy; i++) {
      dupedChildren = [
        ...dupedChildren,
        ...Children.map(filteredSlots, (child, childIndex) => {
          var _child_props,
            _child_props1,
            _child_props2,
            _child_props3,
            _child_props4,
            _child_props5;
          const size = {
            width: widthType
              ? (_child_props = child.props) === null || _child_props === void 0
                ? void 0
                : _child_props.width
              : "100%",
            height: heightType
              ? (_child_props1 = child.props) === null ||
                _child_props1 === void 0
                ? void 0
                : _child_props1.height
              : "100%",
            willChange: "transform",
          };
          return /*#__PURE__*/ _jsx(
            LayoutGroup,
            {
              inherit: "id",
              children: /*#__PURE__*/ _jsx(
                "li",
                {
                  style: size,
                  "aria-hidden": true,
                  children: /*#__PURE__*/ cloneElement(
                    child,
                    {
                      key: i + " " + childIndex,
                      style: {
                        ...((_child_props2 = child.props) === null ||
                        _child_props2 === void 0
                          ? void 0
                          : _child_props2.style),
                        width: widthType
                          ? (_child_props3 = child.props) === null ||
                            _child_props3 === void 0
                            ? void 0
                            : _child_props3.width
                          : "100%",
                        height: heightType
                          ? (_child_props4 = child.props) === null ||
                            _child_props4 === void 0
                            ? void 0
                            : _child_props4.height
                          : "100%",
                        flexShrink: 0,
                        ...childrenStyles,
                      },
                      layoutId: child.props.layoutId
                        ? child.props.layoutId + "-dupe-" + i
                        : undefined,
                    },
                    (_child_props5 = child.props) === null ||
                      _child_props5 === void 0
                      ? void 0
                      : _child_props5.children,
                  ),
                },
                i + "li" + childIndex,
              ),
            },
            i + "lg" + childIndex,
          );
        }),
      ];
    }
  }
  const animateToValue =
    size.children + size.children * Math.round(size.parent / size.children);
  const initialTime = useRef(null);
  const prevTime = useRef(null);
  const xOrY = useRef(0);
  const isHover = useRef(false);
  const isReducedMotion = useReducedMotion();
  const listRef = useRef(null);
  const animationRef = useRef(null);
  /**
   * Setup animations
   */ if (!isCanvas) {
    const isInView = useInView(parentRef);
    /**
     * If this is an animation we can hardware accelerate, animate with WAAPI
     */ if (supportsAcceleratedAnimations) {
      useEffect(() => {
        if (isReducedMotion || !animateToValue || !speed) {
          return;
        }
        animationRef.current = listRef.current.animate(
          { transform: [transformer(0), transformer(animateToValue)] },
          {
            duration: (Math.abs(animateToValue) / speed) * 1e3,
            iterations: Infinity,
            easing: "linear",
          },
        );
        return () => animationRef.current.cancel();
      }, [hoverFactor, animateToValue, speed]); // Pause the animation when it's out of view
      useEffect(() => {
        if (!animationRef.current) return;
        if (isInView && animationRef.current.playState === "paused") {
          animationRef.current.play();
        } else if (!isInView && animationRef.current.playState === "running") {
          animationRef.current.pause();
        }
      }, [isInView]);
    } else {
      /**
       * If we can't accelerate this animation because we have a hoverFactor defined
       * animate with a rAF loop.
       */ useAnimationFrame((t) => {
        if (
          !animateToValue ||
          isReducedMotion ||
          supportsAcceleratedAnimations
        ) {
          return;
        }
        /**
         * In case this animation is delayed from starting because we're running a bunch
         * of other work, we want to set an initial time rather than counting from 0.
         * That ensures that if the animation is delayed, it starts from the first frame
         * rather than jumping.
         */ if (initialTime.current === null) {
          initialTime.current = t;
        }
        t = t - initialTime.current;
        const timeSince = prevTime.current === null ? 0 : t - prevTime.current;
        let delta = timeSince * (speed / 1e3);
        if (isHover.current) {
          delta *= hoverFactor;
        }
        xOrY.current += delta;
        xOrY.current = wrap(0, animateToValue, xOrY.current);
        prevTime.current = t;
        if (!isInView) return;
        offset.set(xOrY.current);
      });
    }
  }
  /* Fades */ const fadeDirection = isHorizontal ? "to right" : "to bottom";
  const fadeWidthStart = fadeWidth / 2;
  const fadeWidthEnd = 100 - fadeWidth / 2;
  const fadeInsetStart = clamp(fadeInset, 0, fadeWidthStart);
  const fadeInsetEnd = 100 - fadeInset;
  const fadeMask = `linear-gradient(${fadeDirection}, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetStart}%, rgba(0, 0, 0, 1) ${fadeWidthStart}%, rgba(0, 0, 0, 1) ${fadeWidthEnd}%, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetEnd}%)`;
  /* Empty state */ if (!hasChildren) {
    return /*#__PURE__*/ _jsxs("section", {
      style: placeholderStyles,
      children: [
        /*#__PURE__*/ _jsx("div", { style: emojiStyles, children: "✨" }),
        /*#__PURE__*/ _jsx("p", {
          style: titleStyles,
          children: "Connect to Content",
        }),
        /*#__PURE__*/ _jsx("p", {
          style: subtitleStyles,
          children: "Add layers or components to infinitely loop on your page.",
        }),
      ],
    });
  }
  return /*#__PURE__*/ _jsx("section", {
    style: {
      ...containerStyle,
      opacity: opacity,
      WebkitMaskImage: fadeContent ? fadeMask : undefined,
      MozMaskImage: fadeContent ? fadeMask : undefined,
      maskImage: fadeContent ? fadeMask : undefined,
      overflow: overflow ? "visible" : "hidden",
      padding: paddingValue,
    },
    ref: parentRef,
    children: /*#__PURE__*/ _jsxs(motion.ul, {
      ref: listRef,
      style: {
        ...containerStyle,
        gap: gap,
        top:
          direction === "bottom" && isValidNumber(animateToValue)
            ? -animateToValue
            : undefined,
        left:
          direction === "right" && isValidNumber(animateToValue)
            ? -animateToValue
            : undefined,
        placeItems: alignment,
        position: "relative",
        flexDirection: isHorizontal ? "row" : "column",
        ...style,
        willChange: isCanvas ? "auto" : "transform",
        transform: supportsAcceleratedAnimations ? transformer(0) : transform,
      },
      onMouseEnter: () => {
        isHover.current = true;
        if (animationRef.current) {
          // TODO Replace with updatePlaybackRate when Chrome bugs sorted
          animationRef.current.playbackRate = hoverFactor;
        }
      },
      onMouseLeave: () => {
        isHover.current = false;
        if (animationRef.current) {
          // TODO Replace with updatePlaybackRate when Chrome bugs sorted
          animationRef.current.playbackRate = 1;
        }
      },
      children: [clonedChildren, dupedChildren],
    }),
  });
}
/* Default Properties */ Ticker.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: true, heightType: true },
  fadeOptions: {
    fadeContent: true,
    overflow: false,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: true,
};
/* Property Controls */ addPropertyControls(Ticker, {
  slots: {
    type: ControlType.Array,
    title: "Children",
    control: { type: ControlType.ComponentInstance },
  },
  speed: {
    type: ControlType.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: true,
    step: 5,
  },
  direction: {
    type: ControlType.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: true,
  },
  alignment: {
    type: ControlType.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: true,
  },
  gap: { type: ControlType.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: ControlType.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: ControlType.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: ControlType.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: true,
      },
      heightType: {
        type: ControlType.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: true,
      },
    },
  },
  fadeOptions: {
    type: ControlType.Object,
    title: "Clipping",
    controls: {
      fadeContent: {
        type: ControlType.Boolean,
        title: "Fade",
        defaultValue: true,
      },
      overflow: {
        type: ControlType.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: false,
        hidden(props) {
          return props.fadeContent === true;
        },
      },
      fadeWidth: {
        type: ControlType.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(props) {
          return props.fadeContent === false;
        },
      },
      fadeInset: {
        type: ControlType.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(props) {
          return props.fadeContent === false;
        },
      },
      fadeAlpha: {
        type: ControlType.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(props) {
          return props.fadeContent === false;
        },
      },
    },
  },
  hoverFactor: {
    type: ControlType.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: true,
    description: "Slows down the speed while you are hovering.",
  },
});
/* Placeholder Styles */ const containerStyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  placeItems: "center",
  margin: 0,
  padding: 0,
  listStyleType: "none",
  textIndent: "none",
};
/* Styles */ const placeholderStyles = {
  display: "flex",
  width: "100%",
  height: "100%",
  placeContent: "center",
  placeItems: "center",
  flexDirection: "column",
  color: "#96F",
  background: "rgba(136, 85, 255, 0.1)",
  fontSize: 11,
  overflow: "hidden",
  padding: "20px 20px 30px 20px",
};
const emojiStyles = { fontSize: 32, marginBottom: 10 };
const titleStyles = {
  margin: 0,
  marginBottom: 10,
  fontWeight: 600,
  textAlign: "center",
};
const subtitleStyles = {
  margin: 0,
  opacity: 0.7,
  maxWidth: 150,
  lineHeight: 1.5,
  textAlign: "center",
};
/* Clamp function, used for fadeInset */ const clamp = (num, min, max) =>
  Math.min(Math.max(num, min), max);
const isValidNumber = (value) => typeof value === "number" && !isNaN(value);
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Ticker",
      slots: [],
      annotations: {
        framerDisableUnlink: "*",
        framerIntrinsicWidth: "400",
        framerContractVersion: "1",
        framerSupportedLayoutWidth: "fixed",
        framerIntrinsicHeight: "200",
        framerSupportedLayoutHeight: "fixed",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./Ticker.map
