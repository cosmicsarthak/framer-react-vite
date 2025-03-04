import { jsx as _jsx } from "react/jsx-runtime";
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0";
import {
  motion,
  useAnimationControls,
  useTransform,
  useSpring,
  useScroll,
  AnimatePresence,
  transform,
  useMotionValueEvent,
} from "framer-motion"; // @ts-ignore: Internal API
import { useRouteHandler } from "../framer_scripts/framer.K3G2LCX5.mjs";
import {
  useMediaQuery,
  useWindowDimensions,
} from "https://framerusercontent.com/modules/n8SIflBFpkmSWMNrMimV/UP8LOKoS9HDpnJYpl8r3/Query.js";
import * as React from "react";
import useSound from "use-sound";
import { soundStore } from "https://framerusercontent.com/modules/CvGigTTgCBqyZO02gJUh/CVnKs90WxfWXyC90xdIU/SoundPicker.js";
const getInitialPath = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "/";
};
const getInitialTransition = () => {
  const path = getInitialPath();
  if (path.includes("blog")) return 2;
  if (path === "/about") return 1;
  return 0;
};
export const useStore = createStore({
  transition: getInitialTransition(),
  language: 0,
  layout: true,
  sound: false,
  darkmode: false,
  auto_theme: true,
  setting: false,
  wheel: false,
  wheel_tooltip: true,
  docker: false,
  type: "ALL",
  side_nav: false,
  wheelOffset: 0,
  layoutOffset: 0,
  layoutWidth: 0,
  scroll_current: 0,
  scroll_to: 0,
  trigger_scroll_to: null,
  hero_width: 0,
  zoom: false,
  index: 0,
  index_cache: 0,
  length: 0,
  update_length: false,
  deck_width: 0,
  about_layoutOffset: 0,
  about_layoutWidth: 0,
  about_scroll_progress1: null,
  about_scroll_progress2: 0,
  about_app_overlayer: false,
  about_zoom: false,
  noticeboard: false,
  process: false,
});
const transition = { type: "spring", stiffness: 170, damping: 28 };
const none = { duration: 0 };
const magics = { type: "spring", stiffness: 170, damping: 28 };
const breakpoint = {
  monitor: "(max-width: 1560px)",
  desktop: "(max-width: 1400px)",
  tablet: "(max-width: 1199px)",
  book: "(max-width: 1040px)",
  phone: "(max-width: 640px)",
};
const breakpoint1 = {
  desktop: "(max-width: 1600px)",
  tablet: "(max-width: 1199px)",
  phone: "(max-width: 810px)",
};
const ease = { spring: [0.54, -0.5, 0.2, 1.5] };
const page_transition = {
  in: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0 },
  },
  out: { opacity: 0, scale: 0.65, filter: "blur(8px)", transition: transition },
  out_veritical: {
    opacity: 0,
    scale: 1,
    filter: "blur(8px)",
    transition: transition,
  },
};
export function Layout_Footer(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const isMobile = useMediaQuery(breakpoint.tablet);
    React.useEffect(() => {
      const currentPath = window.location.pathname;
      if (currentPath === "/") {
        setStore({ transition: 0 });
      } else if (currentPath === "/about") {
        setStore({ transition: 1 });
      } else if (currentPath.includes("/blog")) {
        setStore({ transition: 2 });
      } else {
        setStore({ transition: 0 });
      }
    }, [setStore]);
    const variants = {
      horizontal: { position: "absolute", width: "100%" },
      vertical: { position: "relative", width: "100%" },
    };
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: true,
      style: isMobile
        ? variants.vertical
        : store.layout
          ? variants.vertical
          : variants.horizontal,
      initial: false,
      transition: {
        duration: isMobile ? 0 : 0.8,
        ease: [0.99, 0, 0.16, 1],
        delay: isMobile ? 0 : 0.2,
      },
    });
  };
}
export function Layout_Footer_in_About(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const isMobile = useMediaQuery(breakpoint.tablet);
    React.useEffect(() => {
      const currentPath = window.location.pathname;
      if (currentPath === "/") {
        setStore({ transition: 0 });
      } else if (currentPath === "/about") {
        setStore({ transition: 1 });
      } else if (currentPath.includes("/blog")) {
        setStore({ transition: 2 });
      } else {
        setStore({ transition: 1 });
      }
    }, [setStore]);
    const variants = {
      horizontal: { position: "absolute", width: "100%" },
      vertical: { position: "relative", width: "100%" },
    };
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: true,
      style: isMobile
        ? variants.vertical
        : store.layout
          ? variants.vertical
          : variants.horizontal,
      initial: false,
      transition: {
        duration: isMobile ? 0 : 0.8,
        ease: [0.99, 0, 0.16, 1],
        delay: isMobile ? 0 : 0.2,
      },
    });
  };
}
export function Layout_Footer_in_Blog(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    React.useEffect(() => {
      const currentPath = window.location.pathname;
      if (currentPath === "/") {
        setStore({ transition: 0 });
      } else if (currentPath === "/about") {
        setStore({ transition: 1 });
      } else if (currentPath.includes("/blog")) {
        setStore({ transition: 2 });
      } else {
        setStore({ transition: 2 });
      }
    }, [setStore]);
    return /*#__PURE__*/ _jsx(Component, {
      ...props, // style={{ PointerEvents: "none", ...props.style }}
      layout: true,
      variants: page_transition,
      initial: "in",
      animate: store.transition === 2 ? "in" : "out_veritical",
    });
  };
}
export function Layout_HeroSocial(Component) {
  return (props) => {
    const isMobile = useMediaQuery(breakpoint.tablet);
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(AnimatePresence, {
      children: isMobile
        ? /*#__PURE__*/ _jsx(Component, {
            ...props,
            initial: page_transition.out,
            animate: page_transition.in,
            exit: page_transition.out,
          })
        : store.layout &&
          /*#__PURE__*/ _jsx(Component, {
            ...props,
            initial: page_transition.out,
            animate: page_transition.in,
            exit: page_transition.out,
          }),
    });
  };
}
export function Layout_HeroIndicator(Component) {
  return (props) => {
    const isMobile = useMediaQuery(breakpoint.tablet);
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(AnimatePresence, {
      children:
        !isMobile &&
        !store.layout &&
        /*#__PURE__*/ _jsx(Component, {
          ...props,
          initial: page_transition.out,
          animate: {
            ...page_transition.in,
            transition: { ...transition, delay: 1 },
          },
          exit: page_transition.out,
        }),
    });
  };
}
export function Layout_TipsLoop(Component) {
  return (props) => {
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      initial: { x: 0, opacity: 1 },
      animate: {
        x: -10,
        opacity: 0.3,
        transition: { duration: 1, repeat: Infinity, repeatType: "mirror" },
      },
      transition: { duration: 0 },
    });
  };
}
export function Layout_ScrollBar(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: "position",
      style: { ...props.style },
    });
  };
}
export function Layout_Variants(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: { ...props.style, width: store.layout ? "100%" : "max-content" },
      variant: store.layout ? "Vertical" : "Horizontal",
    });
  };
}
export function Layout_Variants_Monitor(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: { ...props.style, width: store.layout ? "100%" : "max-content" },
      variant: store.layout ? "Vertical" : "Horizontal",
    });
  };
}
export function Layout_Variants_Mobile(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: { ...props.style },
      variant: store.layout ? "Vertical" : "Horizontal",
    });
  };
}
export function Layout_Deck(Component) {
  return /*#__PURE__*/ React.forwardRef((props, ref) => {
    const [store, setStore] = useStore();
    const componentRef = React.useRef(null);
    React.useEffect(() => {
      let touchStartX = 0;
      let touchStartY = 0;
      let lastTouchX = 0;
      let lastTouchY = 0;
      let isTouching = false;
      let velocityX = 0;
      const handleWheel = (event) => {
        if (event.deltaX !== 0) {
          window.scrollBy(0, event.deltaX);
        }
      };
      const handleTouchStart = (event) => {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        lastTouchX = touchStartX;
        lastTouchY = touchStartY;
        isTouching = true;
      };
      const handleTouchMove = (event) => {
        const touchEndX = event.touches[0].clientX;
        const touchEndY = event.touches[0].clientY;
        const deltaX = touchEndX - lastTouchX;
        const deltaY = touchEndY - lastTouchY;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          window.scrollBy(0, -deltaX);
          event.preventDefault(); // Prevent the default touch action
        }
        velocityX = deltaX;
        lastTouchX = touchEndX;
        lastTouchY = touchEndY;
      };
      const handleTouchEnd = () => {
        isTouching = false;
        const deceleration = 0.95;
        const applyInertia = () => {
          if (!isTouching && Math.abs(velocityX) > 0.5) {
            window.scrollBy(0, -velocityX);
            velocityX *= deceleration;
            requestAnimationFrame(applyInertia);
          }
        };
        requestAnimationFrame(applyInertia);
      };
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd, { passive: false });
      return () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    }, []);
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      ref: componentRef,
      style: {
        ...props.style,
        height: store.layout ? "max-content" : `${store.deck_width}px`,
      },
    });
  });
}
export function Layout_Deck_Width(Component) {
  return /*#__PURE__*/ React.forwardRef((props, ref) => {
    const [store, setStore] = useStore();
    const { viewH, viewW } = useWindowDimensions();
    const componentRef = React.useRef(null);
    React.useEffect(() => {
      if (componentRef.current) {
        const { offsetWidth } = componentRef.current;
        setStore({ deck_width: offsetWidth });
      }
    }, []);
    const { scrollYProgress } = useScroll();
    const offsetX = useTransform(
      scrollYProgress,
      [0, 1],
      [0, -store.deck_width + viewW],
    );
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: false,
      ref: componentRef,
      style: {
        ...props.style,
        flexDirection: store.layout ? "column" : "row",
        width: store.layout ? "100%" : "auto",
      },
    });
  });
}
export function Layout_Deck_Stage(Component) {
  return /*#__PURE__*/ React.forwardRef((props, ref) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: false,
      style: { ...props.style, height: store.layout ? "max-content" : "100vh" },
    });
  });
}
export function Layout_Change(Component) {
  return /*#__PURE__*/ React.forwardRef((props, ref) => {
    const [store, setStore] = useStore();
    const isDesktop = useMediaQuery(breakpoint1.desktop);
    const isTablet = useMediaQuery(breakpoint1.tablet);
    const isPhone = useMediaQuery(breakpoint1.phone);
    const componentRef = React.useRef(null);
    const { viewH, viewW } = useWindowDimensions(); // 滚轮控制
    React.useEffect(() => {
      const handleWheel = (event) => {
        const current = componentRef.current;
        const threshold = 10; // 设置阈值以区分主要滚动方向
        if (!store.layout && store.wheel) {
          if (Math.abs(event.deltaX) > Math.abs(event.deltaY) + threshold) {
            // 主要是水平滚动，使用浏览器默认行为
            console.log("Horizontal Scroll:", event.deltaX);
          } else if (
            Math.abs(event.deltaY) >
            Math.abs(event.deltaX) + threshold
          ) {
            // 主要是垂直滚动
            event.preventDefault(); // 阻止默认行为
            current.scrollBy({ left: event.deltaY * 10, behavior: "auto" });
            console.log("Vertical Scroll:", event.deltaY);
          }
        } else {
          // 当 store.wheel 为 false 时，仅允许 shift + 滚轮的水平滚动
          if (event.shiftKey) {
            current.scrollBy({ left: event.deltaY, behavior: "auto" });
            console.log("Shift + Vertical Scroll:", event.deltaY);
          }
        }
      };
      window.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }, [store.wheel]); // 依赖 store.wheel 变化
    React.useEffect(() => {
      const handleWheel = (event) => {
        const current = componentRef.current;
        if (event.deltaX !== 0) {
          current.scrollBy(0, event.deltaX);
        }
      }; // current.scrollLeft = current.scrollLeft + store.wheelOffset
    }, [store.wheelOffset]); // 当前滚动进度
    const { scrollXProgress } = useScroll({ container: componentRef });
    const [scrollXP, setScrollXP] = React.useState(0);
    useMotionValueEvent(scrollXProgress, "change", (latest) => {
      setScrollXP(latest);
    });
    React.useEffect(() => {
      const current = componentRef.current;
      setStore({ scroll_current: scrollXP });
    }, [store.layoutOffset]); // 滚动时返回滚动距离与宽度
    const handleContainerScroll = (e) => {
      setStore({
        layoutOffset: e.target.scrollLeft,
        layoutWidth: e.target.scrollWidth,
      });
    }; // 使水平布局滚动指定距离
    React.useEffect(() => {
      const current = componentRef.current;
      if (current) {
        current.scrollTo({ left: store.scroll_to, behavior: "smooth" });
      }
    }, [store.scroll_to, store.trigger_scroll_to]);
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: true,
      ref: componentRef,
      onScroll: handleContainerScroll,
      style: {
        ...props.style,
        flexDirection: store.layout ? "column" : "row",
        height: store.layout ? "max-content" : "100vh",
      },
      initial: { opacity: 1, scale: 1 },
      animate: {
        opacity: store.transition == 0 ? (store.setting ? 0.6 : 1) : 0,
        scale:
          store.transition == 0
            ? store.setting
              ? isPhone
                ? 1
                : store.layout
                  ? 1
                  : store.zoom
                    ? 0.8
                    : 0.9
              : store.zoom
                ? store.layout
                  ? 1
                  : isPhone
                    ? 1
                    : 0.9
                : 1
            : store.layout
              ? 1
              : isTablet
                ? 1
                : 0.65,
        filter: store.transition == 0 ? "blur(0px)" : "blur(8px)",
        transition: { ...transition },
      },
      transition: transition,
    });
  });
}
export function Layout_Change_Mobile(Component) {
  return /*#__PURE__*/ React.forwardRef((props, ref) => {
    const [store, setStore] = useStore();
    const isDesktop = useMediaQuery(breakpoint1.desktop);
    const isTablet = useMediaQuery(breakpoint1.tablet);
    const isPhone = useMediaQuery(breakpoint1.phone);
    const componentRef = React.useRef(null);
    const { viewH, viewW } = useWindowDimensions(); // 当前滚动进度
    const { scrollXProgress } = useScroll({ container: componentRef });
    const [scrollXP, setScrollXP] = React.useState(0);
    useMotionValueEvent(scrollXProgress, "change", (latest) => {
      setScrollXP(latest);
    });
    React.useEffect(() => {
      const current = componentRef.current;
      setStore({ scroll_current: scrollXP });
    }, [store.layoutOffset]); // 滚动时返回滚动距离与宽度
    const handleContainerScroll = (e) => {
      setStore({
        layoutOffset: e.target.scrollLeft,
        layoutWidth: e.target.scrollWidth,
      });
    };
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: true,
      ref: componentRef,
      onScroll: handleContainerScroll,
      style: { ...props.style },
      initial: { opacity: 1, scale: 1 },
      animate: {
        opacity: store.transition == 0 ? (store.setting ? 0.6 : 1) : 0,
        scale:
          store.transition == 0
            ? store.setting
              ? isPhone
                ? 1
                : store.layout
                  ? 1
                  : store.zoom
                    ? 0.8
                    : 0.9
              : store.zoom
                ? store.layout
                  ? 1
                  : isPhone
                    ? 1
                    : 0.9
                : 1
            : store.layout
              ? 1
              : isTablet
                ? 1
                : 0.65,
        filter: store.transition == 0 ? "blur(0px)" : "blur(8px)",
        transition: { ...transition },
      },
      transition: transition,
    });
  });
}
export function Layout_Change_Stack(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: "position",
      style: {
        ...props.style,
        width: store.layout ? "100%" : "max-content",
        height: store.layout ? "max-content" : "100%",
        padding: store.layout ? "0px 0px 200px 0px" : "0px 200px 0px 80px",
        justifyContent: store.layout ? "center" : "flex-start",
      },
      transition: transition,
    });
  };
}
export function Layout_Change_HeroPadding(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return !store.layout && /*#__PURE__*/ _jsx(Component, { ...props });
  };
}
export function Layout_HeroWidth(Component) {
  return /*#__PURE__*/ React.forwardRef((props, ref) => {
    const [store, setStore] = useStore();
    const componentRef = React.useRef(null);
    React.useEffect(() => {
      if (componentRef.current) {
        const { offsetWidth } = componentRef.current;
        setStore({ hero_width: offsetWidth });
      }
    }, []);
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: { ...props.style, height: "90vh" },
      ref: componentRef,
    });
  });
}
export function Layout_Zoom(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      zoom: () => setStore({ zoom: true }),
    });
  };
}
export function Layout_Control_Next(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const { viewH } = useWindowDimensions();
    const handleClick = () => {
      const offset = 0.6 * viewH * 1.333 + 200;
      setStore({
        scroll_to: store.layoutOffset + offset,
        trigger_scroll_to: Date.now(),
      });
    };
    return store.layout
      ? null
      : store.side_nav &&
          /*#__PURE__*/ _jsx(Component, { ...props, onClick: handleClick });
  };
}
export function Layout_Control_Previous(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const { viewH } = useWindowDimensions();
    const handleClick = () => {
      const offset = 0.6 * viewH * 1.333 + 200;
      setStore({
        scroll_to: store.layoutOffset - offset,
        trigger_scroll_to: Date.now(),
      });
    };
    return store.layout
      ? null
      : store.side_nav &&
          /*#__PURE__*/ _jsx(Component, { ...props, onClick: handleClick });
  };
}
export function Layout_ZoomLayer(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: { ...props.style },
      initial: {
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
      },
      animate: {
        backdropFilter: store.zoom ? "blur(8px)" : "blur(0px)",
        WebkitBackdropFilter: store.zoom ? "blur(8px)" : "blur(0px)",
      },
      transition: { delay: 0.2 },
      onClick: () => setStore({ zoom: false }),
    });
  };
}
export function Layout_ZoomContent(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: { ...props.style },
      initial: { scale: 1 },
      animate: {
        scale: store.setting ? 0.9 : 1,
        transition: { ...transition },
      },
    });
  };
}
export function Layout_ZoomOFF(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      close: () => setStore({ zoom: false }),
    });
  };
}
export function Layout_Content_Blog(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      layout: true,
      variants: page_transition,
      initial: "in",
      animate: store.transition === 2 ? "in" : "out_veritical",
    });
  };
}
export function Transition_Overlayer(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      variants: page_transition,
      initial: { opacity: 1, y: 0 },
      animate:
        store.transition === 0
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.9, filter: "blur(5px)" },
      transition: transition,
    });
  };
}
export function Transition_Overlayer_BG(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      variants: page_transition,
      initial: { opacity: 1, y: 0 },
      animate: store.transition === 0 ? { opacity: 1 } : { opacity: 0 },
      transition: transition,
    });
  };
}
export function Layout_Header_Visibility(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const { viewH } = useWindowDimensions();
    const isMobile = useMediaQuery(breakpoint1.tablet);
    const { scrollY } = useScroll();
    const [vh, setVh] = React.useState(0);
    useMotionValueEvent(scrollY, "change", (latest) => {
      setVh(latest);
    });
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: {
        ...props.style,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      },
      initial: { opacity: 0, y: 0 },
      animate: {
        // store.transition === 0
        opacity:
          //     ?
          isMobile
            ? vh >= 0.3 * viewH
              ? 1
              : 0
            : store.layout
              ? vh >= 0.3 * viewH
                ? 1
                : 0
              : 0,
      },
      transition: transition,
    });
  };
}
export function Type_Switch(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const [sound, setSound] = soundStore();
    const [sound_click] = useSound(sound.click2, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_swoosh] = useSound(sound.swoosh, {
      volume: store.sound ? sound.volume : 0,
    });
    function tab_all() {
      if (store.sound) {
        sound_click();
      }
    }
    function tab_other() {
      if (store.sound) {
        sound_click();
        const timer = setTimeout(() => {
          sound_swoosh();
        }, 880);
        return () => clearTimeout(timer);
      }
    }
    const options = [
      {
        label: "ALL",
        click: () => {
          setStore({ type: "ALL" }), tab_all();
        },
      },
      {
        label: "WORK",
        click: () => {
          setStore({ type: "WORK" }), tab_other();
        },
      },
      {
        label: "IDEA",
        click: () => {
          setStore({ type: "IDEA" }), tab_other();
        },
      },
      {
        label: "PLAYGROUND",
        click: () => {
          setStore({ type: "PLAYGROUND" }), tab_other();
        },
      },
    ];
    return /*#__PURE__*/ _jsx(Component, { ...props, options: options });
  };
}
export function Type_Project(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isTablet = useMediaQuery(breakpoint.tablet);
    const isPhone = useMediaQuery(breakpoint.phone);
    const [sound, setSound] = soundStore();
    const [sound_click] = useSound(sound.click3, {
      volume: store.sound ? sound.volume : 0,
    });
    return /*#__PURE__*/ _jsx(AnimatePresence, {
      children:
        store.type !== "IDEA" &&
        /*#__PURE__*/ _jsx(Component, {
          ...props,
          layout: true,
          style: {
            ...style,
            width: isTablet ? "100%" : store.layout ? "100%" : "auto",
            height: isTablet ? "auto" : store.layout ? "auto" : "60%",
            aspectRatio: isPhone ? "3 / 4" : store.layout ? "3 / 4" : "4 / 3",
          },
          initial: {
            opacity: 0,
            scale: 0.75,
            filter: "blur(8px)",
            transition: transition,
          },
          animate: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: { ...transition, delay: 0.3 },
          },
          exit: {
            opacity: 0,
            scale: 0.75,
            filter: "blur(8px)",
            transition: transition,
          },
          whileHover: { zIndex: 2 },
          transition: transition,
          onClick: () => sound_click(),
        }),
    });
  };
}
export function Filter_Visiblity(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const { viewW, viewH } = useWindowDimensions();
    const isMobile = useMediaQuery(breakpoint.tablet);
    const { scrollY } = useScroll();
    const [vh, setVh] = React.useState(0);
    useMotionValueEvent(scrollY, "change", (latest) => {
      setVh(latest);
    });
    const variant = {
      show: {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        transition: { ...transition, delay: 0 },
      },
      hide: {
        scale: 0.85,
        opacity: 0,
        filter: "blur(8px)",
        transition: { ...transition, delay: 0 },
      },
    };
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      variants: variant,
      initial: "hide",
      animate:
        store.transition === 0
          ? isMobile
            ? vh >= 0.5 * viewH
              ? "show"
              : "hide"
            : store.layout
              ? vh >= 0.5 * viewH
                ? "show"
                : "hide"
              : store.layoutOffset >= 0.4 * viewW
                ? "show"
                : "hide"
          : "hide",
    });
  };
}
export function Social_Visibility(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const { viewW } = useWindowDimensions();
    const isMobile = useMediaQuery(breakpoint.tablet); // 将 isTouchDevice 的检测移到 useState 中
    const [isTouchDevice, setIsTouchDevice] = React.useState(false);
    const [variant, setVariant] = React.useState("Default"); // 在 useEffect 中检测触摸设备
    React.useEffect(() => {
      if (typeof window !== "undefined") {
        setIsTouchDevice(window.matchMedia("(hover: none)").matches);
      }
    }, []);
    React.useEffect(() => {
      if (isTouchDevice || isMobile || store.layoutOffset < viewW) {
        setVariant("Default");
      } else {
        setVariant("Collasped");
      }
    }, [isTouchDevice, isMobile, store.layoutOffset, viewW]);
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      variant: variant,
      onClick: () => setVariant("Default"),
      onMouseEnter: () => setVariant("Default"),
    });
  };
}
export function Logo_Visibility_Overlayer(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const { viewW, viewH } = useWindowDimensions();
    const isMobile = useMediaQuery(breakpoint.tablet);
    const { scrollY } = useScroll();
    const [vh, setVh] = React.useState(0);
    useMotionValueEvent(scrollY, "change", (latest) => {
      setVh(latest);
    });
    const variants = { show: { opacity: 1 }, hide: { opacity: 0 } };
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: { ...props.style },
      variants: variants,
      initial: "hide",
      animate: isMobile
        ? vh >= 0.5 * viewH
          ? "show"
          : "hide"
        : store.layout
          ? vh >= 0.5 * viewH
            ? "show"
            : "hide"
          : store.layoutOffset >= 0.3 * viewW
            ? "show"
            : "hide",
      transition: { duration: 0 },
    });
  };
}
export function BackTop_Visibility(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const { viewW } = useWindowDimensions();
    const isMobile = useMediaQuery(breakpoint.tablet);
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      variant: isMobile ? "Button" : store.layout ? "Button" : "Default",
    });
  };
}
export function Overlayer_Dismiss(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: { ...props.style },
      initial: {
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
      },
      animate: {
        backdropFilter: store.setting ? "blur(8px)" : "blur(0px)",
        WebkitBackdropFilter: store.setting ? "blur(8px)" : "blur(0px)",
      },
      transition: { delay: 0.2 },
      onClick: () => setStore({ setting: false }),
    });
  };
}
export function Transition_About(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const isMobile = useMediaQuery(breakpoint.tablet);
    const isPhone = useMediaQuery(breakpoint.phone);
    const openAbout = useRouteHandler("Z1o48jX66", true);
    function ClickEvent() {
      setStore({ transition: 1, setting: false, setting2: false });
      const router = setTimeout(() => openAbout(), 900);
      return () => clearTimeout(router);
    }
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      onClick: () => ClickEvent(),
    });
  };
}
export function Transition_Home(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const isMobile = useMediaQuery(breakpoint.tablet);
    const isPhone = useMediaQuery(breakpoint.phone);
    const openHome = useRouteHandler("augiA20Il", true);
    function ClickEvent() {
      setStore({ transition: 0, setting: false });
      const router = setTimeout(() => openHome(), 500);
      return () => clearTimeout(router);
    }
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      onClick: () => ClickEvent(),
    });
  };
}
export function Transition_Previous(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    function ClickEvent() {
      const router = setTimeout(() => window.history.back(), 500);
      return () => clearTimeout(router);
    }
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      onClick: () => ClickEvent(),
    });
  };
}
export function Transition_Scrollbar(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const isMobile = useMediaQuery(breakpoint.tablet);
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      variants: page_transition,
      initial: "in",
      animate:
        store.transition === 0
          ? "in"
          : store.layout
            ? "out_veritical"
            : isMobile
              ? "out_veritical"
              : "out",
    });
  };
} // export function Transition_About_Things(Component): ComponentType {
//     return (props) => {
//         const [store, setStore] = useStore()
//         const isMobile = useMediaQuery(breakpoint.tablet)
//         return (
//             <Component
//                 {...props}
//                 variants={page_transition}
//                 initial={"in"}
//                 animate={
//                     store.transition === 1
//                         ? "in"
//                         : store.layout
//                           ? "out_veritical"
//                           : isMobile
//                             ? "out_veritical"
//                             : "out"
//                 }
//             />
//         )
//     }
// }
export function Transition_Home_SP(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isMobile = useMediaQuery(breakpoint.tablet);
    return /*#__PURE__*/ _jsx(motion.div, {
      variants: page_transition,
      initial: "in",
      animate:
        store.transition === 1
          ? "in"
          : store.layout
            ? "out_veritical"
            : isMobile
              ? "out_veritical"
              : "out",
      children: /*#__PURE__*/ _jsx(Component, {
        ...rest,
        style: { ...style },
        initial: { opacity: 1 },
        animate: { opacity: store.setting ? 0 : 1 },
      }),
    });
  };
}
export function Toggle_Home_Overlayer_SP(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isMobile = useMediaQuery(breakpoint.phone);
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style },
      onClick: () => setStore({ setting: false }),
      variants: page_transition,
      initial: "in",
      animate:
        store.transition === 1
          ? "in"
          : store.layout
            ? "out_veritical"
            : isMobile
              ? "out_veritical"
              : "out",
    });
  };
}
export function Toggle_Blog_Overlayer_SP(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isMobile = useMediaQuery(breakpoint.phone);
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style },
      onClick: () => setStore({ setting: false }),
      variants: page_transition,
      initial: "in",
      animate:
        store.transition === 2
          ? "in"
          : store.layout
            ? "out_veritical"
            : isMobile
              ? "out_veritical"
              : "out",
    });
  };
}
export function Toggle_About_Overlayer_in_Blog(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isPhone = useMediaQuery(breakpoint.tablet);
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.about, {
      volume: store.sound ? sound.volume : 0,
      interrupt: true,
    });
    const [element, setElement] = React.useState({
      width: 0,
      height: 0,
      offsetX: 0,
      offsetY: 0,
    });
    const toX = useSpring(0, magics);
    const toY = useSpring(0, magics);
    React.useEffect(() => {
      toX.set(element.offsetX);
      toY.set(element.offsetY);
    }, [element]);
    function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const targetX = event.clientX - rect.left;
      const targetY = event.clientY - rect.top;
      setElement({
        width: rect.width,
        height: rect.height,
        offsetX: transform(targetX, [0, element.width], [-8, 8]),
        offsetY: transform(targetY, [0, element.height], [-8, 8]),
      });
    }
    const controls = useAnimationControls();
    function onHoverEnd() {
      toX.set(0);
      toY.set(0);
    }
    function onPressStart() {
      toX.set(0);
      toY.set(0);
      controls.start({
        rotate: [0, 15, -15, 15, -15, 0],
        transition: { rotate: { duration: 0.4 } },
      });
    }
    function onPressEnd() {
      toX.set(0);
      toY.set(0);
    }
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style, x: toX, y: toY },
      onMouseMove: isPhone ? undefined : handleMouse,
      onMouseLeave: isPhone ? undefined : () => onHoverEnd(),
      onMouseEnter: isPhone ? undefined : () => sound_hover(),
      onMouseDown: isPhone
        ? undefined
        : () => {
            onPressStart(), sound_click();
          },
      onMouseUp: () => onPressEnd(),
      initial: { x: 0, y: 0 },
      animate: isPhone ? undefined : controls,
      whileHover: { scale: 1.1, transition: transition },
      whileTap: { scale: 0.85, transition: { duration: 0.1 } },
      onClick: () => setStore({ setting: false }),
    });
  };
}
export const __FramerMetadata__ = {
  exports: {
    Social_Visibility: {
      type: "reactHoc",
      name: "Social_Visibility",
      annotations: { framerContractVersion: "1" },
    },
    Transition_Overlayer: {
      type: "reactHoc",
      name: "Transition_Overlayer",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Content_Blog: {
      type: "reactHoc",
      name: "Layout_Content_Blog",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Deck_Stage: {
      type: "reactHoc",
      name: "Layout_Deck_Stage",
      annotations: { framerContractVersion: "1" },
    },
    Transition_Previous: {
      type: "reactHoc",
      name: "Transition_Previous",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Footer_in_About: {
      type: "reactHoc",
      name: "Layout_Footer_in_About",
      annotations: { framerContractVersion: "1" },
    },
    Transition_Overlayer_BG: {
      type: "reactHoc",
      name: "Transition_Overlayer_BG",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Footer: {
      type: "reactHoc",
      name: "Layout_Footer",
      annotations: { framerContractVersion: "1" },
    },
    Transition_Scrollbar: {
      type: "reactHoc",
      name: "Transition_Scrollbar",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_About_Overlayer_in_Blog: {
      type: "reactHoc",
      name: "Toggle_About_Overlayer_in_Blog",
      annotations: { framerContractVersion: "1" },
    },
    Layout_TipsLoop: {
      type: "reactHoc",
      name: "Layout_TipsLoop",
      annotations: { framerContractVersion: "1" },
    },
    Layout_HeroSocial: {
      type: "reactHoc",
      name: "Layout_HeroSocial",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Header_Visibility: {
      type: "reactHoc",
      name: "Layout_Header_Visibility",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Change: {
      type: "reactHoc",
      name: "Layout_Change",
      annotations: { framerContractVersion: "1" },
    },
    Layout_HeroIndicator: {
      type: "reactHoc",
      name: "Layout_HeroIndicator",
      annotations: { framerContractVersion: "1" },
    },
    Layout_ScrollBar: {
      type: "reactHoc",
      name: "Layout_ScrollBar",
      annotations: { framerContractVersion: "1" },
    },
    Logo_Visibility_Overlayer: {
      type: "reactHoc",
      name: "Logo_Visibility_Overlayer",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Variants: {
      type: "reactHoc",
      name: "Layout_Variants",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_Home_Overlayer_SP: {
      type: "reactHoc",
      name: "Toggle_Home_Overlayer_SP",
      annotations: { framerContractVersion: "1" },
    },
    Layout_HeroWidth: {
      type: "reactHoc",
      name: "Layout_HeroWidth",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Variants_Monitor: {
      type: "reactHoc",
      name: "Layout_Variants_Monitor",
      annotations: { framerContractVersion: "1" },
    },
    Layout_ZoomContent: {
      type: "reactHoc",
      name: "Layout_ZoomContent",
      annotations: { framerContractVersion: "1" },
    },
    Layout_ZoomLayer: {
      type: "reactHoc",
      name: "Layout_ZoomLayer",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_Blog_Overlayer_SP: {
      type: "reactHoc",
      name: "Toggle_Blog_Overlayer_SP",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Change_Mobile: {
      type: "reactHoc",
      name: "Layout_Change_Mobile",
      annotations: { framerContractVersion: "1" },
    },
    Transition_About: {
      type: "reactHoc",
      name: "Transition_About",
      annotations: { framerContractVersion: "1" },
    },
    Transition_Home_SP: {
      type: "reactHoc",
      name: "Transition_Home_SP",
      annotations: { framerContractVersion: "1" },
    },
    BackTop_Visibility: {
      type: "reactHoc",
      name: "BackTop_Visibility",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Change_HeroPadding: {
      type: "reactHoc",
      name: "Layout_Change_HeroPadding",
      annotations: { framerContractVersion: "1" },
    },
    Layout_ZoomOFF: {
      type: "reactHoc",
      name: "Layout_ZoomOFF",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Variants_Mobile: {
      type: "reactHoc",
      name: "Layout_Variants_Mobile",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Footer_in_Blog: {
      type: "reactHoc",
      name: "Layout_Footer_in_Blog",
      annotations: { framerContractVersion: "1" },
    },
    Overlayer_Dismiss: {
      type: "reactHoc",
      name: "Overlayer_Dismiss",
      annotations: { framerContractVersion: "1" },
    },
    Type_Switch: {
      type: "reactHoc",
      name: "Type_Switch",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Zoom: {
      type: "reactHoc",
      name: "Layout_Zoom",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Deck_Width: {
      type: "reactHoc",
      name: "Layout_Deck_Width",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Control_Previous: {
      type: "reactHoc",
      name: "Layout_Control_Previous",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Change_Stack: {
      type: "reactHoc",
      name: "Layout_Change_Stack",
      annotations: { framerContractVersion: "1" },
    },
    Transition_Home: {
      type: "reactHoc",
      name: "Transition_Home",
      annotations: { framerContractVersion: "1" },
    },
    Type_Project: {
      type: "reactHoc",
      name: "Type_Project",
      annotations: { framerContractVersion: "1" },
    },
    Filter_Visiblity: {
      type: "reactHoc",
      name: "Filter_Visiblity",
      annotations: { framerContractVersion: "1" },
    },
    useStore: { type: "variable", annotations: { framerContractVersion: "1" } },
    Layout_Deck: {
      type: "reactHoc",
      name: "Layout_Deck",
      annotations: { framerContractVersion: "1" },
    },
    Layout_Control_Next: {
      type: "reactHoc",
      name: "Layout_Control_Next",
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./Page.map
