import { jsx as _jsx } from "react/jsx-runtime";
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0";
import { useStore } from "https://framerusercontent.com/modules/RGCgkyyKvYCOcpgTFJih/l8apYUQ1NMMBi28Mu8sO/Page.js";
import {
  LayoutGroup,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
import { useMediaQuery } from "https://framerusercontent.com/modules/n8SIflBFpkmSWMNrMimV/UP8LOKoS9HDpnJYpl8r3/Query.js";
import * as React from "react";
import { useObserver } from "https://framerusercontent.com/modules/n8SIflBFpkmSWMNrMimV/UP8LOKoS9HDpnJYpl8r3/Query.js";
const useUtilities = createStore({
  video_play: true,
  video_loop: true,
  video_mute: true,
  video_focus: false,
  video_progress: 0,
  p_width: 0,
  p_height: 0,
});
const breakpoint = {
  desktop: "(max-width: 1600px)",
  tablet: "(max-width: 1199px)",
  phone: "(max-width: 810)",
};
export function LayoutAll(Component) {
  return (props) => {
    const { style } = props;
    return /*#__PURE__*/ _jsx(LayoutGroup, {
      children: /*#__PURE__*/ _jsx(Component, {
        ...props,
        layout: true,
        style: { ...style },
        transition: { type: "spring", stiffness: 178, damping: 28 },
      }),
    });
  };
}
export function Blend_Difference(Component) {
  return (props) => {
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: { mixBlendMode: "difference" },
    });
  };
}
export function LayoutFont(Component) {
  return (props) => {
    return /*#__PURE__*/ _jsx(LayoutGroup, {
      children: /*#__PURE__*/ _jsx(Component, {
        ...props,
        layout: "position",
        style: { ...props.style },
        transition: { type: "spring", stiffness: 178, damping: 28 },
      }),
    });
  };
}
export function LayoutNone(Component) {
  return (props) => {
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: false,
      style: { ...props.style },
      transition: { duration: 0 },
    });
  };
}
export function LayoutImage(Component) {
  return (props) => {
    return /*#__PURE__*/ _jsx(LayoutGroup, {
      children: /*#__PURE__*/ _jsx(Component, {
        layout: "size",
        ...props,
        style: { ...props.style },
        transition: { type: "spring", stiffness: 178, damping: 28 },
      }),
    });
  };
}
export function AnimatePresence_Clildren(Component) {
  return (props) => {
    return /*#__PURE__*/ _jsx(AnimatePresence, {
      children: /*#__PURE__*/ _jsx(LayoutGroup, {
        children: /*#__PURE__*/ _jsx(Component, {
          ...props,
          layout: true,
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { type: "spring", stiffness: 178, damping: 28 },
        }),
      }),
    });
  };
}
export function AnimatePresence_Parent(Component) {
  return (props) => {
    const { children, style } = props;
    return /*#__PURE__*/ _jsx(Component, { ...props });
  };
}
export function Media_ScaleFix_Parent(Component) {
  return /*#__PURE__*/ React.forwardRef((props, ref) => {
    const [utilities, setUtilities] = useUtilities();
    const [store, setStore] = useStore(); // const ref = React.useRef(null)
    React.useEffect(() => {
      setUtilities({ p_width: ref.current.offsetWidth });
      setUtilities({ p_height: ref.current.offsetHeight });
      const cb = () => {
        setUtilities({ p_width: ref.current.offsetWidth });
        setUtilities({ p_height: ref.current.offsetHeight });
      };
      window.addEventListener("resize", cb);
      return () => {
        window.removeEventListener("resize", cb);
      };
    }, [store.layout]);
    return /*#__PURE__*/ _jsx(Component, { ...props, ref: ref });
  });
}
export function Media_ScaleFix_Children(Component) {
  return (props) => {
    const [utilities, setUtilities] = useUtilities();
    const [store, setStore] = useStore(); // const control = useAnimationControls()
    // function Start() {
    //     control.start({
    //         width: utilities.p_width,
    //         height: utilities.p_height,
    //         transition: { type: "spring", stiffness: 178, damping: 28 },
    //     })
    // }
    // React.useEffect(() => {
    //     Start()
    // }, [store.layout])
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: true,
      style: {
        ...props.style,
        left: 0,
        top: 0,
        width: utilities.p_width,
        height: utilities.p_height,
      },
      initial: false, // animate={{
      //     width: store.layout ? 700 : utilities.p_width,
      //     height: store.layout ? 700 : utilities.p_height,
      // }}
      transition: { type: "spring", stiffness: 178, damping: 28 },
    });
  };
}
export function Home_InView(Component) {
  return /*#__PURE__*/ React.forwardRef((props, ref) => {
    const { children, style } = props; // const ref = React.useRef(null)
    const inView = useObserver(ref, "0% 0% 0% 0%", 0.75);
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      ref: ref,
      status: inView,
    });
  });
}
export function BrowserDetection(Component) {
  return (props) => {
    // 使用 useState 来存储这些值
    const [isSafari, setIsSafari] = React.useState(false);
    const [isTouchDevice, setIsTouchDevice] = React.useState(false);
    const [store, setStore] = useStore(); // 将浏览器检测移到 useEffect 中
    React.useEffect(() => {
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        // 检测 Safari
        setIsSafari(!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)); // 检测触摸设备
        setIsTouchDevice("ontouchstart" in document.documentElement);
      }
    }, []); // 空依赖数组，只在组件挂载时运行一次
    return /*#__PURE__*/ _jsx(AnimatePresence, {
      children:
        !store.layout &&
        /*#__PURE__*/ _jsx(Component, {
          initial: { opacity: 1 },
          exit: { opacity: 0 },
          enter: { opacity: 1 },
          layout: "position",
          variant: "Mouse",
          transition: { type: "spring", stiffness: 178, damping: 28 },
          ...props,
        }),
    });
  };
}
export function Effect_BackdropBlur(Component) {
  return (props) => {
    const { style } = props;
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: {
        ...props.style,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      },
    });
  };
}
export function BackToTop(Component) {
  return (props) => {
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      tap: () =>
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 500),
    });
  };
}
export function AnimateLayout(Component) {
  return (props) => {
    return /*#__PURE__*/ _jsx(AnimatePresence, {
      children: /*#__PURE__*/ _jsx(Component, { layout: true, ...props }),
    });
  };
}
export function Layout_columnGap(Component) {
  return (props) => {
    const isMobile = useMediaQuery(breakpoint.tablet);
    const isPhone = useMediaQuery(breakpoint.phone);
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: "position",
      style: {
        ...props.style,
        rowGap: "0px",
        columnGap:
          store.language == 1
            ? "0px"
            : isPhone
              ? "5px"
              : isMobile
                ? "8px"
                : "10px",
      },
      transition: isMobile
        ? { duration: 0 }
        : { type: "spring", stiffness: 178, damping: 28 },
    });
  };
}
export function Layout_SecondTitle(Component) {
  return (props) => {
    const isMobile = useMediaQuery(breakpoint.tablet);
    const isPhone = useMediaQuery(breakpoint.phone);
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: "position",
      style: {
        ...props.style,
        rowGap: "0px",
        columnGap:
          store.language == 1
            ? "0px"
            : isPhone
              ? "5px"
              : isMobile
                ? "8px"
                : "10px",
      },
      animate: {
        opacity: store.layout ? 0 : 1,
        scale: store.layout ? 0.95 : 1,
        filter: store.layout ? "blur(8px)" : "blur(0px)",
      },
      transition: { type: "spring", stiffness: 178, damping: 28 },
    });
  };
}
export function Layout_columnGapPrimary(Component) {
  return (props) => {
    const isMobile = useMediaQuery(breakpoint.tablet);
    const isPhone = useMediaQuery(breakpoint.phone);
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: "position",
      style: {
        ...props.style,
        rowGap: "0px",
        columnGap:
          store.language == 1
            ? "0px"
            : isPhone
              ? "10px"
              : isMobile
                ? "14px"
                : "24px",
      },
      transition: isMobile
        ? { duration: 0 }
        : { type: "spring", stiffness: 178, damping: 28 },
    });
  };
}
export function Layout_PrimaryTitles(Component) {
  return (props) => {
    const isMobile = useMediaQuery(breakpoint.tablet);
    const isPhone = useMediaQuery(breakpoint.phone);
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      status: store.layout ? "Enter" : "Exit",
    });
  };
}
export function Animate_ArrowKey(Component) {
  return (props) => {
    return /*#__PURE__*/ _jsx(Component, {
      layout: true,
      ...props,
      animate: { scale: 0.75 },
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 28,
        repeat: Infinity,
        repeatDelay: 1,
        repeatType: "reverse",
      },
    });
  };
}
export function Animate_Looptips1(Component) {
  return (props) => {
    const [expanded, setExpanded] = React.useState(false);
    const [mouse, setMouse] = React.useState(true);
    React.useEffect(() => {
      if (mouse) {
        const timerId = setInterval(() => setExpanded(!expanded), 1e3);
        return () => {
          clearInterval(timerId);
        };
      } else {
        setExpanded(true);
      }
    }, [mouse]);
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      variant: expanded ? "Expanded" : "Collasped",
      onMouseEnter: () => setMouse(false),
      onMouseLeave: () => setMouse(true),
    });
  };
}
export function Project_Play(Component) {
  return (props) => {
    const [utilities, setUtilities] = useUtilities();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      variant: utilities.video_play ? "Pause" : "Play",
      tap: () =>
        setUtilities({
          video_play: utilities.video_play === true ? false : true,
        }),
    });
  };
}
export function Project_Loop(Component) {
  return (props) => {
    const [utilities, setUtilities] = useUtilities();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      variant: utilities.video_loop ? "ON" : "OFF",
      tap: () => setUtilities({ video_loop: !utilities.video_loop }),
    });
  };
}
export function Project_Mute(Component) {
  return (props) => {
    const [utilities, setUtilities] = useUtilities();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      variant: utilities.video_mute ? "OFF" : "ON",
      tap: () => setUtilities({ video_mute: !utilities.video_mute }),
    });
  };
}
export function Project_Focus(Component) {
  return (props) => {
    const [utilities, setUtilities] = useUtilities();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      variant: utilities.video_focus ? "Hide" : "Show",
      tap: () => setUtilities({ video_focus: !utilities.video_focus }),
    });
  };
}
export function Project_UI(Component) {
  return (props) => {
    // Move useState hooks outside of any conditionals
    const [utilities, setUtilities] = useUtilities();
    const [hover, setHover] = React.useState(false);
    const [opacity, setOpacity] = React.useState(1); // Use useEffect for client-side only code
    React.useEffect(() => {
      if (utilities.video_focus && !hover) {
        setOpacity(0);
      } else {
        setOpacity(1);
      }
    }, [utilities.video_focus, hover]);
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      animate: { opacity: opacity, transition: { duration: 0.3 } },
      onMouseEnter: () => {
        setOpacity(1);
        setHover(true);
      },
      onMouseLeave: utilities.video_focus
        ? () => {
            setOpacity(0);
            setHover(false);
          }
        : () => {
            setOpacity(1);
            setHover(false);
          },
    });
  };
}
export function Project_Overlayer(Component) {
  return (props) => {
    const [utilities, setUtilities] = useUtilities();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      initial: { opacity: 0 },
      animate: { opacity: utilities.video_play ? 0 : 1 },
    });
  };
}
export function Project_Video(Component) {
  return (props) => {
    const [utilities, setUtilities] = useUtilities();
    const [isBrowser, setIsBrowser] = React.useState(false); // Check for browser environment after mount
    React.useEffect(() => {
      setIsBrowser(true);
    }, []); // Only render video component on client-side
    if (!isBrowser) {
      return null; // or a loading placeholder
    }
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      loop: utilities.video_loop,
      playing: utilities.video_play,
      onPlay: () => setUtilities({ video_play: true }),
      onPause:
        utilities.video_loop === false
          ? () => setUtilities({ video_play: false })
          : undefined,
      muted: utilities.video_mute,
    });
  };
}
export function Transform_Progress(Component) {
  return (props) => {
    const { style } = props;
    const { scrollYProgress } = useScroll();
    const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: { originX: 0, originY: 0, scaleY: scrollY, ...style },
    });
  };
}
export function Tooltip_Info(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(AnimatePresence, {
      children: store.wheel
        ? !store.setting
          ? store.wheel_tooltip
            ? /*#__PURE__*/ _jsx(Component, {
                ...props,
                style: { originY: 0, originX: 0.8, ...props.style },
                initial: { opacity: 0, y: -20, scale: 0.8 },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 178,
                    damping: 28,
                    delay: 2,
                  },
                },
                exit: {
                  opacity: 0,
                  y: -20,
                  scale: 0.8,
                  transition: { type: "spring", stiffness: 178, damping: 28 },
                },
              })
            : ""
          : ""
        : "",
    });
  };
}
export function Tooltip_Button(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      tap: () => setStore({ wheel_tooltip: false }),
    });
  };
}
export function Cursor_Hand(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: { ...props.style, originX: 0.8, originY: 0.8 },
      animate: {
        rotate: [0, 30, 0, 26, 0, 23, 0, 14, 0, 7, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: [0.5, 1, 0.89, 1],
        },
      },
    });
  };
}
export const __FramerMetadata__ = {
  exports: {
    Project_Focus: {
      type: "reactHoc",
      name: "Project_Focus",
      annotations: { framerContractVersion: "1" },
    },
    Project_Play: {
      type: "reactHoc",
      name: "Project_Play",
      annotations: { framerContractVersion: "1" },
    },
    AnimatePresence_Clildren: {
      type: "reactHoc",
      name: "AnimatePresence_Clildren",
      annotations: { framerContractVersion: "1" },
    },
    BackToTop: {
      type: "reactHoc",
      name: "BackToTop",
      annotations: { framerContractVersion: "1" },
    },
    Cursor_Hand: {
      type: "reactHoc",
      name: "Cursor_Hand",
      annotations: { framerContractVersion: "1" },
    },
    Home_InView: {
      type: "reactHoc",
      name: "Home_InView",
      annotations: { framerContractVersion: "1" },
    },
    Layout_columnGap: {
      type: "reactHoc",
      name: "Layout_columnGap",
      annotations: { framerContractVersion: "1" },
    },
    LayoutNone: {
      type: "reactHoc",
      name: "LayoutNone",
      annotations: { framerContractVersion: "1" },
    },
    Tooltip_Button: {
      type: "reactHoc",
      name: "Tooltip_Button",
      annotations: { framerContractVersion: "1" },
    },
    LayoutFont: {
      type: "reactHoc",
      name: "LayoutFont",
      annotations: { framerContractVersion: "1" },
    },
    LayoutImage: {
      type: "reactHoc",
      name: "LayoutImage",
      annotations: { framerContractVersion: "1" },
    },
    Project_Loop: {
      type: "reactHoc",
      name: "Project_Loop",
      annotations: { framerContractVersion: "1" },
    },
    Effect_BackdropBlur: {
      type: "reactHoc",
      name: "Effect_BackdropBlur",
      annotations: { framerContractVersion: "1" },
    },
    Media_ScaleFix_Parent: {
      type: "reactHoc",
      name: "Media_ScaleFix_Parent",
      annotations: { framerContractVersion: "1" },
    },
    Project_Mute: {
      type: "reactHoc",
      name: "Project_Mute",
      annotations: { framerContractVersion: "1" },
    },
    LayoutAll: {
      type: "reactHoc",
      name: "LayoutAll",
      annotations: { framerContractVersion: "1" },
    },
    Project_Video: {
      type: "reactHoc",
      name: "Project_Video",
      annotations: { framerContractVersion: "1" },
    },
    Layout_PrimaryTitles: {
      type: "reactHoc",
      name: "Layout_PrimaryTitles",
      annotations: { framerContractVersion: "1" },
    },
    BrowserDetection: {
      type: "reactHoc",
      name: "BrowserDetection",
      annotations: { framerContractVersion: "1" },
    },
    Tooltip_Info: {
      type: "reactHoc",
      name: "Tooltip_Info",
      annotations: { framerContractVersion: "1" },
    },
    Project_UI: {
      type: "reactHoc",
      name: "Project_UI",
      annotations: { framerContractVersion: "1" },
    },
    Blend_Difference: {
      type: "reactHoc",
      name: "Blend_Difference",
      annotations: { framerContractVersion: "1" },
    },
    Media_ScaleFix_Children: {
      type: "reactHoc",
      name: "Media_ScaleFix_Children",
      annotations: { framerContractVersion: "1" },
    },
    Layout_columnGapPrimary: {
      type: "reactHoc",
      name: "Layout_columnGapPrimary",
      annotations: { framerContractVersion: "1" },
    },
    Transform_Progress: {
      type: "reactHoc",
      name: "Transform_Progress",
      annotations: { framerContractVersion: "1" },
    },
    AnimatePresence_Parent: {
      type: "reactHoc",
      name: "AnimatePresence_Parent",
      annotations: { framerContractVersion: "1" },
    },
    Project_Overlayer: {
      type: "reactHoc",
      name: "Project_Overlayer",
      annotations: { framerContractVersion: "1" },
    },
    Animate_ArrowKey: {
      type: "reactHoc",
      name: "Animate_ArrowKey",
      annotations: { framerContractVersion: "1" },
    },
    Animate_Looptips1: {
      type: "reactHoc",
      name: "Animate_Looptips1",
      annotations: { framerContractVersion: "1" },
    },
    AnimateLayout: {
      type: "reactHoc",
      name: "AnimateLayout",
      annotations: { framerContractVersion: "1" },
    },
    Layout_SecondTitle: {
      type: "reactHoc",
      name: "Layout_SecondTitle",
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./Utilities.map
