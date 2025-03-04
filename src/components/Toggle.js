import { jsx as _jsx } from "react/jsx-runtime";
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0";
import {
  motion,
  useAnimationControls,
  transform,
  useSpring,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import {
  useMediaQuery,
  useWindowDimensions,
} from "https://framerusercontent.com/modules/n8SIflBFpkmSWMNrMimV/UP8LOKoS9HDpnJYpl8r3/Query.js";
import * as React from "react";
import useSound from "use-sound";
import { useStore } from "https://framerusercontent.com/modules/RGCgkyyKvYCOcpgTFJih/l8apYUQ1NMMBi28Mu8sO/Page.js";
import { soundStore } from "https://framerusercontent.com/modules/CvGigTTgCBqyZO02gJUh/CVnKs90WxfWXyC90xdIU/SoundPicker.js";
export const toggleStore = createStore({ text: "default", show_text: false });
const magics = { type: "spring", stiffness: 170, damping: 28 };
const transition = { type: "spring", stiffness: 170, damping: 28 };
const breakpoint1 = {
  desktop: "(max-width: 1600px)",
  tablet: "(max-width: 1199px)",
  phone: "(max-width: 810px)",
};
const volume = { default: 1, reduce: 0.55, slient: 0.5 };
const ease = { spring: [0.54, -0.5, 0.2, 1.5] };
export function Effect_MagicHover(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isPhone = useMediaQuery(breakpoint1.phone);
    const [element, setElement] = React.useState({
      width: 0,
      height: 0,
      offsetX: 0,
      offsetY: 0,
    });
    const toX = useSpring(0, magics);
    const toY = useSpring(0, magics);
    function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const targetX = event.clientX - rect.left;
      const targetY = event.clientY - rect.top;
      setElement({
        width: rect.width,
        height: rect.width,
        offsetX: transform(targetX, [0, element.width], [-8, 8], {
          clamp: true,
        }),
        offsetY: transform(targetY, [0, element.height], [-8, 8], {
          clamp: true,
        }),
      });
      toX.set(element.offsetX);
      toY.set(element.offsetY);
    }
    function onAction() {
      toX.set(0);
      toY.set(0);
    }
    return /*#__PURE__*/ _jsx(motion.div, {
      layout: true,
      style: { ...style, width: "100%", height: "100%", x: toX, y: toY },
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.85, transition: { duration: 0.15 } },
      onMouseMove: isPhone ? undefined : handleMouse,
      onMouseLeave: isPhone ? undefined : () => onAction(),
      onMouseDown: isPhone ? undefined : () => onAction(),
      children: /*#__PURE__*/ _jsx(Component, { ...props }),
    });
  };
}
export function Effect_MagicHover_Sound(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const isPhone = useMediaQuery(breakpoint1.phone);
    const [element, setElement] = React.useState({
      width: 0,
      height: 0,
      offsetX: 0,
      offsetY: 0,
    });
    const toX = useSpring(0, magics);
    const toY = useSpring(0, magics);
    function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const targetX = event.clientX - rect.left;
      const targetY = event.clientY - rect.top;
      setElement({
        width: rect.width,
        height: rect.width,
        offsetX: transform(targetX, [0, element.width], [-8, 8], {
          clamp: true,
        }),
        offsetY: transform(targetY, [0, element.height], [-8, 8], {
          clamp: true,
        }),
      });
      toX.set(element.offsetX);
      toY.set(element.offsetY);
    }
    function onAction() {
      toX.set(0);
      toY.set(0);
    }
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click1, {
      volume: store.sound ? sound.volume : 0,
    });
    return /*#__PURE__*/ _jsx(motion.div, {
      layout: true,
      style: { ...props.style, x: toX, y: toY },
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.85, transition: { duration: 0.15 } },
      onMouseMove: isPhone ? undefined : handleMouse,
      onMouseEnter: () => sound_hover(),
      onMouseLeave: isPhone ? undefined : () => onAction(),
      onMouseUp: isPhone ? undefined : () => onAction(),
      onMouseDown: isPhone
        ? () => sound_click()
        : () => {
            onAction(), sound_click();
          },
      children: /*#__PURE__*/ _jsx(Component, { ...props }),
    });
  };
}
export function Toggle_Back(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isMobile = useMediaQuery(breakpoint1.tablet);
    const isPhone = useMediaQuery(breakpoint1.phone);
    const [element, setElement] = React.useState({
      width: 0,
      height: 0,
      offsetX: 0,
      offsetY: 0,
    });
    const toX = useSpring(0, magics);
    const toY = useSpring(0, magics);
    function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const targetX = event.clientX - rect.left;
      const targetY = event.clientY - rect.top;
      setElement({
        width: rect.width,
        height: rect.width,
        offsetX: transform(targetX, [0, element.width], [-8, 8], {
          clamp: true,
        }),
        offsetY: transform(targetY, [0, element.height], [-8, 8], {
          clamp: true,
        }),
      });
      toX.set(element.offsetX);
      toY.set(element.offsetY);
    }
    function onAction() {
      toX.set(0);
      toY.set(0);
    }
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click1, {
      volume: store.sound ? sound.volume : 0,
    });
    const page_transition = {
      in: {
        width: "max-content",
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0 },
      },
      out: {
        width: 0,
        opacity: 0,
        scale: 0.65,
        filter: "blur(8px)",
        transition: transition,
      },
    };
    return /*#__PURE__*/ _jsx(AnimatePresence, {
      mode: "popLayout",
      children:
        store.transition != 1 &&
        /*#__PURE__*/ _jsx(motion.div, {
          variants: page_transition,
          initial: "in",
          animate: "in",
          exit: "out",
          children: /*#__PURE__*/ _jsx(Component, {
            ...rest,
            style: { ...style, x: toX, y: toY },
            onMouseMove: isPhone ? undefined : handleMouse,
            onMouseEnter: () => sound_hover(),
            onMouseLeave: isPhone ? undefined : () => onAction(),
            onMouseDown: isPhone
              ? () => sound_click()
              : () => {
                  onAction(), sound_click();
                },
            initial: { scale: 1 },
            whileHover: { scale: 1.1, transition: transition },
            whileTap: { scale: 0.85, transition: { duration: 0.1 } },
          }),
        }),
    });
  };
}
export function Effect_MagicHover_Sound2(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isPhone = useMediaQuery(breakpoint1.phone);
    const [element, setElement] = React.useState({
      width: 0,
      height: 0,
      offsetX: 0,
      offsetY: 0,
    });
    const toX = useSpring(0, magics);
    const toY = useSpring(0, magics);
    function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const targetX = event.clientX - rect.left;
      const targetY = event.clientY - rect.top;
      setElement({
        width: rect.width,
        height: rect.width,
        offsetX: transform(targetX, [0, element.width], [-8, 8], {
          clamp: true,
        }),
        offsetY: transform(targetY, [0, element.height], [-8, 8], {
          clamp: true,
        }),
      });
      toX.set(element.offsetX);
      toY.set(element.offsetY);
    }
    function onAction() {
      toX.set(0);
      toY.set(0);
    }
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.popup, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click4, {
      volume: store.sound ? sound.volume : 0,
    });
    return /*#__PURE__*/ _jsx(motion.div, {
      layout: true,
      style: { ...style, width: "100%", height: "100%", x: toX, y: toY },
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.85, transition: { duration: 0.15 } },
      onMouseMove: isPhone ? undefined : handleMouse,
      onMouseEnter: () => sound_hover(),
      onMouseLeave: isPhone ? undefined : () => onAction(),
      onMouseDown: isPhone
        ? () => sound_click()
        : () => {
            onAction(), sound_click();
          },
      children: /*#__PURE__*/ _jsx(Component, { ...props }),
    });
  };
}
export function Effect_MagicHover_Sound_LayoutP(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isPhone = useMediaQuery(breakpoint1.phone);
    const [element, setElement] = React.useState({
      width: 0,
      height: 0,
      offsetX: 0,
      offsetY: 0,
    });
    const toX = useSpring(0, magics);
    const toY = useSpring(0, magics);
    function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const targetX = event.clientX - rect.left;
      const targetY = event.clientY - rect.top;
      setElement({
        width: rect.width,
        height: rect.width,
        offsetX: transform(targetX, [0, element.width], [-8, 8], {
          clamp: true,
        }),
        offsetY: transform(targetY, [0, element.height], [-8, 8], {
          clamp: true,
        }),
      });
      toX.set(element.offsetX);
      toY.set(element.offsetY);
    }
    function onAction() {
      toX.set(0);
      toY.set(0);
    }
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.popup, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click4, {
      volume: store.sound ? sound.volume : 0,
    });
    return /*#__PURE__*/ _jsx(motion.div, {
      layout: true,
      style: { ...style, width: "100%", height: "100%", x: toX, y: toY },
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.85, transition: { duration: 0.15 } },
      onMouseMove: isPhone ? undefined : handleMouse,
      onMouseEnter: () => sound_hover(),
      onMouseLeave: isPhone ? undefined : () => onAction(),
      onMouseDown: isPhone
        ? () => sound_click()
        : () => {
            onAction(), sound_click();
          },
      children: /*#__PURE__*/ _jsx(Component, { ...props }),
    });
  };
}
export function Effect_MagicHover_Home(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isPhone = useMediaQuery(breakpoint1.phone);
    const [element, setElement] = React.useState({
      width: 0,
      height: 0,
      offsetX: 0,
      offsetY: 0,
    });
    const toX = useSpring(0, magics);
    const toY = useSpring(0, magics);
    function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const targetX = event.clientX - rect.left;
      const targetY = event.clientY - rect.top;
      setElement({
        width: rect.width,
        height: rect.width,
        offsetX: transform(targetX, [0, element.width], [-8, 8], {
          clamp: true,
        }),
        offsetY: transform(targetY, [0, element.height], [-8, 8], {
          clamp: true,
        }),
      });
      toX.set(element.offsetX);
      toY.set(element.offsetY);
    }
    function onAction() {
      toX.set(0);
      toY.set(0);
    }
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.popup, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click4, {
      volume: store.sound ? sound.volume : 0,
    });
    return /*#__PURE__*/ _jsx(motion.div, {
      layout: true,
      style: { ...style, width: "100%", height: "100%", x: toX, y: toY },
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95, transition: { duration: 0.15 } },
      onMouseMove: isPhone ? undefined : handleMouse,
      onMouseEnter: () => sound_hover(),
      onMouseLeave: isPhone ? undefined : () => onAction(),
      onMouseDown: isPhone
        ? () => sound_click()
        : () => {
            onAction(), sound_click();
          },
      children: /*#__PURE__*/ _jsx(Component, { ...props }),
    });
  };
}
export function Toggle_Text(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = toggleStore();
    React.useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (store.show_text === true) {
          setStore({ show_text: false });
        }
      }, 1200);
      return () => {
        clearTimeout(timeoutId);
      };
    }, [store.show_text]);
    return /*#__PURE__*/ _jsx(Component, {
      layout: true,
      ...rest,
      style: { ...style },
      text: store.text,
      initial: { opacity: 0 },
      animate: { opacity: store.show_text ? 1 : 0 },
      transition: transition,
    });
  };
}
export function Control_Layout_State(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style },
      variant: store.layout ? "Grid" : "Stack",
    });
  };
}
export function Control_Layout_Stack(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const [tstore, setTStore] = toggleStore();
    const isPhone = useMediaQuery(breakpoint1.phone);
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click2, {
      volume: store.sound ? sound.volume : 0,
    });
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style },
      onMouseEnter: () => sound_hover(),
      tapA: () => {
        window.localStorage.setItem("ls_layout", "false"),
          setStore({ layout: false }),
          sound_click(),
          setTStore({
            text: isPhone ? "Hide card detail." : "Use stack layout.",
            show_text: true,
          });
      },
    });
  };
}
export function Control_Layout_Grid(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const [tstore, setTStore] = toggleStore();
    const isPhone = useMediaQuery(breakpoint1.phone);
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click2, {
      volume: store.sound ? sound.volume : 0,
    });
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style },
      onMouseEnter: () => sound_hover(),
      tapA: () => {
        window.localStorage.setItem("ls_layout", "true"),
          setStore({ layout: true }),
          sound_click(),
          setTStore({
            text: isPhone ? "Show card detail." : "Use grid layout.",
            show_text: true,
          });
      },
    });
  };
}
export function Control_Sound(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const [tstore, setTStore] = toggleStore();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, { volume: 1 });
    const [sound_click] = useSound(sound.soundon, { volume: 1 });
    function EnableSound() {
      if (!store.sound) {
        const timer = setTimeout(() => {
          sound_click();
        }, 300);
        return () => clearTimeout(timer);
      } else {
        undefined;
      }
    } // const currentSoundValue = localStorage.getItem("ls_sound") === "false"
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style },
      onMouseEnter: () => (store.sound ? sound_hover() : undefined),
      tapA: () => {
        setStore({ sound: !store.sound }),
          EnableSound(),
          setTStore({
            text: store.sound ? "Sound effects off." : "Sound effects on.",
            show_text: true,
          });
      },
      variant: store.sound ? "On" : "Off",
    });
  };
}
export function Control_Theme(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const [tstore, setTStore] = toggleStore();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click2, {
      volume: store.sound ? sound.volume : 0,
    }); // mode
    const [isOn, setIsOn] = React.useState(setInitialState());
    React.useEffect(() => {
      setStore({ darkmode: !isOn ? false : true });
    }, [isOn]);
    const toggle = () => {
      const newToggleState = !isOn ? "dark" : "light";
      setIsOn(!isOn);
      sound_click();
      setTStore({
        text: !isOn ? "Use dark theme." : "Use light theme.",
        show_text: true,
      });
      localStorage.setItem("currentToggleState", newToggleState);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("themeChange"));
      }
    };
    React.useEffect(() => {
      if (typeof window !== "undefined") {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addListener((e) => {
          const newTheme = e.matches ? "dark" : "light";
          localStorage.setItem("currentOsTheme", newTheme);
          localStorage.setItem("currentToggleState", newTheme);
          setIsOn(newTheme === "dark");
          if (typeof document !== "undefined") {
            const styleTag = document.getElementsByTagName("style")[0];
            const newCSS = styleTag.innerHTML.replace(
              /prefers-color-scheme: \w+/,
              `prefers-color-scheme: ${(newTheme === "dark" && newTheme === "dark") || (newTheme === "light" && newTheme === "light") ? "dark" : "light"}`,
            );
            styleTag.innerHTML = newCSS;
          }
          window.dispatchEvent(new CustomEvent("themeChange"));
        });
      }
    }, []);
    React.useEffect(() => {
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        const currentToggleState = isOn ? "dark" : "light";
        const currentOsTheme =
          localStorage.getItem("currentOsTheme") || getOSTheme();
        const styleTag = document.getElementsByTagName("style")[0];
        const newCSS = styleTag.innerHTML.replace(
          /prefers-color-scheme: \w+/,
          `prefers-color-scheme: ${(currentToggleState === "dark" && currentOsTheme === "dark") || (currentToggleState === "light" && currentOsTheme === "light") ? "dark" : "light"}`,
        );
        styleTag.innerHTML = newCSS;
        localStorage.setItem("currentToggleState", currentToggleState);
      }
    }, [isOn]);
    const [isClient, setIsClient] = React.useState(false);
    React.useEffect(() => {
      setIsClient(true);
    }, []);
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style },
      onMouseEnter: () => sound_hover(),
      tapA: toggle,
      variant: store.darkmode ? "Off" : "On",
    });
  };
} // Toggle Theme
function getOSTheme() {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
}
function setInitialState() {
  const osTheme = getOSTheme();
  const currentToggleState =
    localStorage.getItem("currentToggleState") ||
    (osTheme === "dark" ? "dark" : "light");
  localStorage.setItem("currentToggleState", currentToggleState);
  if (typeof document !== "undefined") {
    const styleTag = document.getElementsByTagName("style")[0];
    const newCSS = styleTag.innerHTML.replace(
      /prefers-color-scheme: \w+/,
      `prefers-color-scheme: ${(currentToggleState === "dark" && osTheme === "dark") || (currentToggleState === "light" && osTheme === "light") ? "dark" : "light"}`,
    );
    styleTag.innerHTML = newCSS;
  }
  return currentToggleState === "dark";
}
export function Toggle_Theme(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isTablet = useMediaQuery(breakpoint1.tablet);
    const { scrollY } = useScroll();
    const [vh, setVh] = React.useState(0);
    useMotionValueEvent(scrollY, "change", (latest) => {
      setVh(latest);
    });
    const { viewW, viewH } = useWindowDimensions();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click1, {
      volume: store.sound ? sound.volume : 0,
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
        height: rect.width,
        offsetX: transform(targetX, [0, element.width], [-8, 8], {
          clamp: true,
        }),
        offsetY: transform(targetY, [0, element.height], [-8, 8], {
          clamp: true,
        }),
      });
    }
    function onHoverEnd() {
      toX.set(0);
      toY.set(0);
    }
    function onPressStart() {
      toX.set(0);
      toY.set(0);
    }
    function onPressEnd() {
      toX.set(0);
      toY.set(0);
    }
    const transform_effect = {
      hide: {
        x: 156,
        y: [0, -14, 0],
        opacity: 0,
        scale: 0.5,
        transition: {
          duration: 0.8,
          ease: ease.spring,
          y: { duration: 0.6 },
          delay: 0.3,
        },
      },
      show: {
        x: 0,
        y: [0, -12, 0],
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: ease.spring,
          y: { duration: 0.6 },
          delay: 0,
        },
      },
    }; // mode
    const [isOn, setIsOn] = React.useState(setInitialState());
    React.useEffect(() => {
      setStore({ darkmode: !isOn ? false : true });
    }, [isOn]);
    const toggle = () => {
      const newToggleState = !isOn ? "dark" : "light";
      setIsOn(!isOn);
      localStorage.setItem("currentToggleState", newToggleState);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("themeChange"));
      }
    };
    React.useEffect(() => {
      if (typeof window !== "undefined") {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addListener((e) => {
          const newTheme = e.matches ? "dark" : "light";
          localStorage.setItem("currentOsTheme", newTheme);
          localStorage.setItem("currentToggleState", newTheme);
          setIsOn(newTheme === "dark");
          if (typeof document !== "undefined") {
            const styleTag = document.getElementsByTagName("style")[0];
            const newCSS = styleTag.innerHTML.replace(
              /prefers-color-scheme: \w+/,
              `prefers-color-scheme: ${(newTheme === "dark" && newTheme === "dark") || (newTheme === "light" && newTheme === "light") ? "dark" : "light"}`,
            );
            styleTag.innerHTML = newCSS;
          }
          window.dispatchEvent(new CustomEvent("themeChange"));
        });
      }
    }, []);
    React.useEffect(() => {
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        const currentToggleState = isOn ? "dark" : "light";
        const currentOsTheme =
          localStorage.getItem("currentOsTheme") || getOSTheme();
        const styleTag = document.getElementsByTagName("style")[0];
        const newCSS = styleTag.innerHTML.replace(
          /prefers-color-scheme: \w+/,
          `prefers-color-scheme: ${(currentToggleState === "dark" && currentOsTheme === "dark") || (currentToggleState === "light" && currentOsTheme === "light") ? "dark" : "light"}`,
        );
        styleTag.innerHTML = newCSS;
        localStorage.setItem("currentToggleState", currentToggleState);
      }
    }, [isOn]);
    const [isClient, setIsClient] = React.useState(false);
    React.useEffect(() => {
      setIsClient(true);
    }, []);
    return (
      !isTablet &&
      /*#__PURE__*/ _jsx(motion.div, {
        style: {
          pointerEvents:
            store.setting === true
              ? "none"
              : store.layoutOffset >= 0.2 * viewW
                ? "none"
                : "auto",
        },
        variants: transform_effect,
        initial: false,
        animate:
          store.setting === true
            ? "hide"
            : store.layoutOffset >= 0.2 * viewW
              ? "hide"
              : isTablet
                ? vh >= 0.2 * viewH
                  ? "hide"
                  : "show"
                : "show",
        children: /*#__PURE__*/ _jsx(Component, {
          ...rest,
          style: { ...style, x: toX, y: toY },
          onMouseMove: isTablet ? undefined : handleMouse,
          onMouseLeave: isTablet ? undefined : () => onHoverEnd(),
          onMouseEnter: isTablet
            ? undefined
            : () => {
                sound_hover();
              },
          onMouseDown: isTablet
            ? undefined
            : () => {
                onPressStart(), sound_click();
              },
          onMouseUp: isTablet ? undefined : () => onPressEnd(),
          initial: { scale: 1 },
          whileHover: { scale: 1.1, transition: transition },
          whileTap: { scale: 0.85, transition: { duration: 0.1 } }, // onClick={() => {
          //     setStore({
          //         darkmode: !store.darkmode,
          //         auto_theme: false,
          //     })
          // }}
          onClick: toggle,
        }),
      })
    );
  };
}
export function Toggle_Sound(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isTablet = useMediaQuery(breakpoint1.tablet);
    const { scrollY } = useScroll();
    const [vh, setVh] = React.useState(0);
    useMotionValueEvent(scrollY, "change", (latest) => {
      setVh(latest);
    });
    const { viewW, viewH } = useWindowDimensions();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.soundon, {
      volume: store.sound ? sound.volume : 0,
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
        height: rect.width,
        offsetX: transform(targetX, [0, element.width], [-8, 8], {
          clamp: true,
        }),
        offsetY: transform(targetY, [0, element.height], [-8, 8], {
          clamp: true,
        }),
      });
    }
    function onHoverEnd() {
      toX.set(0);
      toY.set(0);
    }
    function onPressStart() {
      toX.set(0);
      toY.set(0);
      if (!store.sound) {
        const timer = setTimeout(() => {
          sound_click();
        }, 300);
        return () => clearTimeout(timer);
      } else {
        undefined;
      }
    }
    function onPressEnd() {
      toX.set(0);
      toY.set(0);
    }
    const transform_effect = {
      hide: {
        x: 104,
        y: [0, 12, 0],
        opacity: 0,
        scale: 0.5,
        transition: {
          duration: 0.8,
          ease: ease.spring,
          y: { duration: 0.6 },
          delay: 0.1,
        },
      },
      show: {
        x: 0,
        y: [0, 10, 0],
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: ease.spring,
          y: { duration: 0.6 },
          delay: 0.1,
        },
      },
    };
    return (
      !isTablet &&
      /*#__PURE__*/ _jsx(motion.div, {
        style: {
          pointerEvents:
            store.setting === true
              ? "none"
              : store.layoutOffset >= 0.2 * viewW
                ? "none"
                : "auto",
        },
        variants: transform_effect,
        initial: false,
        animate:
          store.setting === true
            ? "hide"
            : store.layoutOffset >= 0.2 * viewW
              ? "hide"
              : isTablet
                ? vh >= 0.2 * viewH
                  ? "hide"
                  : "show"
                : "show",
        children: /*#__PURE__*/ _jsx(Component, {
          ...rest,
          style: { ...style, x: toX, y: toY },
          onMouseMove: isTablet ? undefined : handleMouse,
          onMouseLeave: isTablet ? undefined : () => onHoverEnd(),
          onMouseEnter: isTablet ? undefined : () => sound_hover(),
          onMouseDown: isTablet ? undefined : () => onPressStart(),
          onMouseUp: isTablet ? undefined : () => onPressEnd(),
          initial: { scale: 1 },
          whileHover: { scale: 1.1, transition: transition },
          whileTap: { scale: 0.85, transition: { duration: 0.1 } },
        }),
      })
    );
  };
}
export function Toggle_Layout(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isTablet = useMediaQuery(breakpoint1.tablet);
    const { scrollY } = useScroll();
    const [vh, setVh] = React.useState(0);
    useMotionValueEvent(scrollY, "change", (latest) => {
      setVh(latest);
    });
    const { viewW, viewH } = useWindowDimensions();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click1, {
      volume: store.sound ? sound.volume : 0,
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
        height: rect.width,
        offsetX: transform(targetX, [0, element.width], [-8, 8], {
          clamp: true,
        }),
        offsetY: transform(targetY, [0, element.height], [-8, 8], {
          clamp: true,
        }),
      });
    }
    function onHoverEnd() {
      toX.set(0);
      toY.set(0);
    }
    function onPressStart() {
      toX.set(0);
      toY.set(0);
    }
    function onPressEnd() {
      toX.set(0);
      toY.set(0);
    }
    const transform_effect = {
      hide: {
        x: 52,
        y: [0, -12, 0],
        opacity: 0,
        scale: 0.5,
        transition: {
          duration: 0.8,
          ease: ease.spring,
          y: { duration: 0.6 },
          delay: 0,
        },
      },
      show: {
        x: 0,
        y: [0, -8, 0],
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: ease.spring,
          y: { duration: 0.6 },
          delay: 0.3,
        },
      },
    };
    return (
      !isTablet &&
      /*#__PURE__*/ _jsx(motion.div, {
        style: {
          pointerEvents:
            store.setting === true
              ? "none"
              : store.layoutOffset >= 0.2 * viewW
                ? "none"
                : "auto",
        },
        variants: transform_effect,
        initial: false,
        animate:
          store.setting === true
            ? "hide"
            : store.layoutOffset >= 0.2 * viewW
              ? "hide"
              : isTablet
                ? vh >= 0.2 * viewH
                  ? "hide"
                  : "show"
                : "show",
        children: /*#__PURE__*/ _jsx(Component, {
          ...rest,
          style: { ...style, x: toX, y: toY },
          onMouseMove: isTablet ? undefined : handleMouse,
          onMouseLeave: isTablet ? undefined : () => onHoverEnd(),
          onMouseEnter: () => sound_hover(),
          onMouseDown: isTablet
            ? undefined
            : () => {
                onPressStart(), sound_click;
              },
          onMouseUp: isTablet ? undefined : () => onPressEnd(),
          initial: { scale: 1 },
          whileHover: { scale: 1.1, transition: transition },
          whileTap: { scale: 0.85, transition: { duration: 0.1 } },
          onClick: () => {
            window.localStorage.setItem("ls_layout", String(store.layout)),
              setStore({ layout: !store.layout });
          },
        }),
      })
    );
  };
}
export function Toggle_Layout_Mobile(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isPhone = useMediaQuery(breakpoint1.tablet);
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style },
      variant: store.layout ? "Detail" : "Default",
    });
  };
}
export function Toggle_Setting(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isPhone = useMediaQuery(breakpoint1.tablet);
    const { viewW } = useWindowDimensions();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click1, {
      volume: store.sound ? sound.volume : 0,
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
        height: rect.width,
        offsetX: transform(targetX, [0, element.width], [-8, 8], {
          clamp: true,
        }),
        offsetY: transform(targetY, [0, element.height], [-8, 8], {
          clamp: true,
        }),
      });
    }
    function onHoverEnd() {
      toX.set(0);
      toY.set(0);
    }
    function onPressStart() {
      toX.set(0);
      toY.set(0);
    }
    function onPressEnd() {
      toX.set(0);
      toY.set(0);
    }
    const transform_effect = {
      on: {
        scale: [1, 1.15, 1.15, 1],
        backgroundColor: [
          "rgba(255,255,255,0)",
          "rgba(255,255,255,0.3)",
          "rgba(255,255,255,0.3)",
          "rgba(255,255,255,0)",
        ],
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0 },
      },
      off: {
        scale: [1, 1.15, 1.15, 1],
        backgroundColor: [
          "rgba(255,255,255,0)",
          "rgba(255,255,255,0.3)",
          "rgba(255,255,255,0.3)",
          "rgba(255,255,255,0)",
        ],
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0 },
      },
    };
    return /*#__PURE__*/ _jsx(motion.div, {
      style: { borderRadius: 12 },
      variants: transform_effect,
      initial: false,
      animate:
        store.setting === true
          ? "on"
          : store.layoutOffset >= 0.2 * viewW
            ? "on"
            : "off",
      children: /*#__PURE__*/ _jsx(Component, {
        ...rest,
        style: { ...style, x: toX, y: toY },
        onMouseMove: isPhone ? undefined : handleMouse,
        onMouseLeave: isPhone ? undefined : () => onHoverEnd(),
        onMouseEnter: isPhone ? undefined : () => sound_hover(),
        onMouseDown: isPhone ? undefined : () => sound_click(),
        onMouseUp: isPhone ? undefined : () => onPressEnd(),
        initial: { scale: 1 },
        whileHover: { scale: 1.1, transition: transition },
        whileTap: { scale: 0.85, transition: { duration: 0.1 } },
        onClick: () => {
          // setStore({ setting: !store.setting }),
          onPressStart();
        },
      }),
    });
  };
}
export function Toggle_Setting2(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      setting2: () => setStore({ setting: !store.setting }),
    });
  };
}
export function Toggle_About(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isPhone = useMediaQuery(breakpoint1.tablet);
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
    } // const openAboutPage = useRouteHandler("arBEd3Yo3", true)
    // <motion.div
    //     initial={{ opacity: 1 }}
    //     animate={{ opacity: store.setting ? 0 : 1 }}
    // >
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
      initial: { scale: 1 },
      animate: isPhone ? undefined : controls,
      whileHover: { scale: 1.1, transition: transition },
      whileTap: { scale: 0.85, transition: { duration: 0.1 } },
    });
  };
}
export function Toggle_Social(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isPhone = useMediaQuery(breakpoint1.tablet);
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.popup, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click4, {
      volume: store.sound ? sound.volume : 0,
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
    function onHoverStart() {
      const timer = setTimeout(() => {
        sound_hover();
      }, 100);
      return () => clearTimeout(timer);
    }
    function onHoverEnd() {
      toX.set(0);
      toY.set(0);
    }
    function onPressStart() {
      toX.set(0);
      toY.set(0);
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
      onMouseEnter: () => onHoverStart(),
      onMouseDown: isPhone
        ? undefined
        : () => {
            onPressStart(), sound_click();
          },
      onMouseUp: isPhone ? undefined : () => onPressEnd(),
      initial: { scale: 1 },
      animate: isPhone ? undefined : controls,
      whileHover: { scale: 1.1, transition: transition },
      whileTap: { scale: 0.85, transition: { duration: 0.1 } },
    });
  };
}
export function Toggle_BackTop(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const isPhone = useMediaQuery(breakpoint1.tablet);
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click1, {
      volume: store.sound ? sound.volume : 0,
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
    }
    function onPressEnd() {
      toX.set(0);
      toY.set(0);
    }
    function back_to_top() {
      sound_click();
      const timer = setTimeout(
        () => window.scrollTo({ top: 0, behavior: "smooth" }),
        200,
      );
      return () => clearTimeout(timer);
    }
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      layout: true,
      style: { ...style, x: toX, y: toY },
      onMouseMove: isPhone ? undefined : handleMouse,
      onMouseLeave: isPhone ? undefined : () => onHoverEnd(),
      onMouseEnter: () => sound_hover(),
      onMouseDown: isPhone ? undefined : () => onPressStart(),
      onMouseUp: isPhone ? undefined : () => onPressEnd(),
      initial: { x: 0, y: 0 },
      animate: isPhone ? undefined : controls,
      whileHover: { scale: 1.1, transition: transition },
      whileTap: { scale: 0.85, transition: { duration: 0.1 } },
      onClick: () => back_to_top(),
    });
  };
}
export function Toggle_Immerse(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      text: store.layout ? "✦ Get immersed" : "✦ Get efficiency",
    });
  };
}
export function Control_Wheel(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const [tstore, setTStore] = toggleStore();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click2, {
      volume: store.sound ? sound.volume : 0,
    });
    const isMobile = useMediaQuery(breakpoint1.tablet);
    React.useEffect(() => {
      if (store.layout === true) {
        // window.localStorage.setItem("ls_wheel", "false"),
        setStore({ wheel: false });
      }
      if (isMobile === true) {
        // window.localStorage.setItem("ls_wheel", "false"),
        setStore({ wheel: false });
      }
    }, [store.layout, isMobile]);
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style },
      onMouseEnter: () => sound_hover(),
      tapA: () => {
        // window.localStorage.setItem(
        //     "ls_wheel",
        //     String(store.wheel)
        // ),
        setStore({ wheel: !store.wheel });
        sound_click(),
          setTStore({
            text: store.wheel
              ? "Disable wheel control."
              : "Enable wheel control.",
            show_text: true,
          });
      },
      variant: store.wheel ? "On" : "Off",
    });
  };
}
export function Control_NavArrow(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const [tstore, setTStore] = toggleStore();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click2, {
      volume: store.sound ? sound.volume : 0,
    });
    const isMobile = useMediaQuery(breakpoint1.tablet);
    React.useEffect(() => {
      if (store.layout === true) {
        setStore({ side_nav: false });
      }
      if (isMobile === true) {
        setStore({ side_nav: false });
      }
    }, [store.layout, isMobile]);
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style },
      onMouseEnter: () => sound_hover(),
      tapA: () => {
        setStore({ side_nav: !store.side_nav });
        sound_click(),
          setTStore({
            text: store.side_nav
              ? "Enable navigation arrows."
              : "Disable navigation arrows.",
            show_text: true,
          });
      },
      variant: store.side_nav ? "On" : "Off",
    });
  };
}
export function Control_Docker(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const isPhone = useMediaQuery(breakpoint1.phone);
    const [store, setStore] = useStore();
    const [tstore, setTStore] = toggleStore();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click2, {
      volume: store.sound ? sound.volume : 0,
    });
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style },
      onMouseEnter: () => sound_hover(),
      tapA: () => {
        // window.localStorage.setItem(
        //     "ls_docker",
        //     String(store.docker)
        // )
        setStore({ docker: !store.docker }),
          sound_click(),
          setTStore({
            text: isPhone
              ? "Docker unavailable in the phone."
              : store.layout
                ? "Docker unavailable in grid layout."
                : store.docker
                  ? "Hide navigation docker."
                  : "Show navigation docker.",
            show_text: true,
          });
      },
      variant: isPhone
        ? "Disable"
        : store.layout
          ? "Disable"
          : store.docker
            ? "On"
            : "Off",
    });
  };
}
export function Footer_Slide(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const isPhone = useMediaQuery(breakpoint1.phone);
    const [store, setStore] = useStore();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.slide, {
      volume: store.sound ? sound.volume : 0,
    });
    return /*#__PURE__*/ _jsx(Component, { ...rest, style: { ...style } });
  };
}
export function Language_ToEn(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const [tstore, setTStore] = toggleStore();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click2, {
      volume: store.sound ? sound.volume : 0,
    });
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      onMouseEnter: () => sound_hover(),
      tap: () => {
        setStore({ language: 0 }),
          sound_click(),
          setTStore({ text: "Switch to English content", show_text: true });
      },
    });
  };
}
export function Language_ToChn(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const [tstore, setTStore] = toggleStore();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.hover1, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click2, {
      volume: store.sound ? sound.volume : 0,
    });
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      onMouseEnter: () => sound_hover(),
      tap: () => {
        setStore({ language: 1 }),
          sound_click(),
          setTStore({ text: "部分内容切换为简体中文", show_text: true });
      },
    });
  };
}
export function Language_Toggle(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    const [sound, setSound] = soundStore();
    const [sound_hover] = useSound(sound.popup, {
      volume: store.sound ? sound.volume : 0,
    });
    const [sound_click] = useSound(sound.click2, {
      volume: store.sound ? sound.volume : 0,
    });
    return /*#__PURE__*/ _jsx(Component, {
      ...rest,
      style: { ...style },
      variant: store.language == 0 ? "En" : "Chn",
    });
  };
}
export function Language_En_Content(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    return (
      store.language == 0 &&
      /*#__PURE__*/ _jsx(Component, { layout: true, ...rest })
    );
  };
}
export function Language_Chn_Content(Component) {
  return (props) => {
    const { style, ...rest } = props;
    const [store, setStore] = useStore();
    return (
      store.language == 1 &&
      /*#__PURE__*/ _jsx(Component, {
        layout: true,
        ...rest,
        style: { ...props.style },
      })
    );
  };
}
export function Language_En_Content_LayoutFont(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return (
      store.language == 0 &&
      /*#__PURE__*/ _jsx(Component, {
        ...props,
        layout: "position",
        style: { ...props.style },
        transition: { type: "spring", stiffness: 178, damping: 28 },
      })
    );
  };
}
export function Language_Chn_Content_LayoutFont(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return (
      store.language == 1 &&
      /*#__PURE__*/ _jsx(Component, {
        ...props,
        layout: "position",
        style: { ...props.style },
        transition: { type: "spring", stiffness: 178, damping: 28 },
      })
    );
  };
}
export function Language_Content(Component) {
  return (props) => {
    const { children, style, ...rest } = props;
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      layout: true,
      ...rest,
      style: { ...style },
      children: /*#__PURE__*/ _jsx(AnimatePresence, {
        children: React.Children.map(children, (child) =>
          /*#__PURE__*/ React.cloneElement(child, {
            style: { ...child.props.style },
            initial: {
              opacity: 0,
              filter: "blur(6px)",
              transition: { transition },
            },
            animate: {
              opacity: 1,
              filter: "blur(0px)",
              transition: { transition },
            },
            exit: {
              opacity: 0,
              filter: "blur(6px)",
              transition: { transition },
            },
          }),
        ),
      }),
    });
  };
}
export function Overlayer_Social_Popup(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /*#__PURE__*/ _jsx(Component, {
      ...props,
      style: { ...props.style, originX: 0, originY: 1 },
      exit: {
        opacity: 0,
        scale: 0.5,
        transition: { type: "spring", stiffness: 140, damping: 14 },
      },
    });
  };
}
export const __FramerMetadata__ = {
  exports: {
    Control_Docker: {
      type: "reactHoc",
      name: "Control_Docker",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_Setting: {
      type: "reactHoc",
      name: "Toggle_Setting",
      annotations: { framerContractVersion: "1" },
    },
    Control_NavArrow: {
      type: "reactHoc",
      name: "Control_NavArrow",
      annotations: { framerContractVersion: "1" },
    },
    Control_Layout_Stack: {
      type: "reactHoc",
      name: "Control_Layout_Stack",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_Setting2: {
      type: "reactHoc",
      name: "Toggle_Setting2",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_Text: {
      type: "reactHoc",
      name: "Toggle_Text",
      annotations: { framerContractVersion: "1" },
    },
    Effect_MagicHover: {
      type: "reactHoc",
      name: "Effect_MagicHover",
      annotations: { framerContractVersion: "1" },
    },
    Language_Content: {
      type: "reactHoc",
      name: "Language_Content",
      annotations: { framerContractVersion: "1" },
    },
    Language_ToChn: {
      type: "reactHoc",
      name: "Language_ToChn",
      annotations: { framerContractVersion: "1" },
    },
    Effect_MagicHover_Sound_LayoutP: {
      type: "reactHoc",
      name: "Effect_MagicHover_Sound_LayoutP",
      annotations: { framerContractVersion: "1" },
    },
    toggleStore: {
      type: "variable",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_About: {
      type: "reactHoc",
      name: "Toggle_About",
      annotations: { framerContractVersion: "1" },
    },
    Effect_MagicHover_Home: {
      type: "reactHoc",
      name: "Effect_MagicHover_Home",
      annotations: { framerContractVersion: "1" },
    },
    Language_En_Content_LayoutFont: {
      type: "reactHoc",
      name: "Language_En_Content_LayoutFont",
      annotations: { framerContractVersion: "1" },
    },
    Control_Sound: {
      type: "reactHoc",
      name: "Control_Sound",
      annotations: { framerContractVersion: "1" },
    },
    Footer_Slide: {
      type: "reactHoc",
      name: "Footer_Slide",
      annotations: { framerContractVersion: "1" },
    },
    Language_Chn_Content: {
      type: "reactHoc",
      name: "Language_Chn_Content",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_Immerse: {
      type: "reactHoc",
      name: "Toggle_Immerse",
      annotations: { framerContractVersion: "1" },
    },
    Language_Toggle: {
      type: "reactHoc",
      name: "Language_Toggle",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_Social: {
      type: "reactHoc",
      name: "Toggle_Social",
      annotations: { framerContractVersion: "1" },
    },
    Control_Layout_Grid: {
      type: "reactHoc",
      name: "Control_Layout_Grid",
      annotations: { framerContractVersion: "1" },
    },
    Effect_MagicHover_Sound2: {
      type: "reactHoc",
      name: "Effect_MagicHover_Sound2",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_Sound: {
      type: "reactHoc",
      name: "Toggle_Sound",
      annotations: { framerContractVersion: "1" },
    },
    Language_En_Content: {
      type: "reactHoc",
      name: "Language_En_Content",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_Layout: {
      type: "reactHoc",
      name: "Toggle_Layout",
      annotations: { framerContractVersion: "1" },
    },
    Control_Layout_State: {
      type: "reactHoc",
      name: "Control_Layout_State",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_Layout_Mobile: {
      type: "reactHoc",
      name: "Toggle_Layout_Mobile",
      annotations: { framerContractVersion: "1" },
    },
    Language_Chn_Content_LayoutFont: {
      type: "reactHoc",
      name: "Language_Chn_Content_LayoutFont",
      annotations: { framerContractVersion: "1" },
    },
    Language_ToEn: {
      type: "reactHoc",
      name: "Language_ToEn",
      annotations: { framerContractVersion: "1" },
    },
    Effect_MagicHover_Sound: {
      type: "reactHoc",
      name: "Effect_MagicHover_Sound",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_Theme: {
      type: "reactHoc",
      name: "Toggle_Theme",
      annotations: { framerContractVersion: "1" },
    },
    Control_Wheel: {
      type: "reactHoc",
      name: "Control_Wheel",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_BackTop: {
      type: "reactHoc",
      name: "Toggle_BackTop",
      annotations: { framerContractVersion: "1" },
    },
    Overlayer_Social_Popup: {
      type: "reactHoc",
      name: "Overlayer_Social_Popup",
      annotations: { framerContractVersion: "1" },
    },
    Toggle_Back: {
      type: "reactHoc",
      name: "Toggle_Back",
      annotations: { framerContractVersion: "1" },
    },
    Control_Theme: {
      type: "reactHoc",
      name: "Control_Theme",
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
