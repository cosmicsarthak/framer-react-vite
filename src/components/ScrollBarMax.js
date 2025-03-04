import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react"; // import styled from "styled-components"
import {
  motion,
  transform,
  useTransform,
  motionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { addPropertyControls, ControlType, useQueryData } from "../framer_scripts/framer.K3G2LCX5.mjs";
import { useStore } from "https://framerusercontent.com/modules/RGCgkyyKvYCOcpgTFJih/l8apYUQ1NMMBi28Mu8sO/Page.js";
import useSound from "use-sound";
import ScrollJumper from "https://framerusercontent.com/modules/fI01Ivs5czvb0iejUS2E/GgL5S6sJ1vLEW5lY7oGw/ScrollJumper.js";
import {
  useWindowDimensions,
  useMediaQuery,
} from "https://framerusercontent.com/modules/n8SIflBFpkmSWMNrMimV/UP8LOKoS9HDpnJYpl8r3/Query.js";
import ButtonToFront from "https://framerusercontent.com/modules/oyg8JiVj4SYtaF8KorQN/Oln3Jjx7SF3fnwMFOHNG/Ga945Y3Wf.js";
import ButtonToEnd from "https://framerusercontent.com/modules/AEWtmgflAWUdzZzlWBT4/IqkRUhtoRdDELvqGU5eI/YtQJbCDyl.js";
import UtilitiesScrollHoverText from "https://framerusercontent.com/modules/fzaffwrQUMQy5c4rXyiI/ktdClhyl9NsbMxD5z3cQ/xbqo4dS4M.js";
import Blog from "https://framerusercontent.com/modules/x45ob7ic9XKSetY8LDfs/iWKRPi7HfKfk9H114z9T/TYK5zFM4J.js";
import { soundStore } from "https://framerusercontent.com/modules/CvGigTTgCBqyZO02gJUh/CVnKs90WxfWXyC90xdIU/SoundPicker.js";
/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */ const transition = { type: "spring", stiffness: 170, damping: 28 };
const volume = { default: 1, reduce: 0.55, slient: 0.5 };
const breakpoint = {
  desktop: "(max-width: 1600px)",
  tablet: "(max-width: 1199px)",
  phone: "(max-width: 540px)",
};
export default function ScrollBarMax(props) {
  const {
    button,
    fill,
    fill_2,
    pro_color,
    pro_color2,
    theme,
    theme_2,
    pin_color,
    border_color,
  } = props;
  const [store, setStore] = useStore();
  const isDesktop = useMediaQuery(breakpoint.desktop);
  const ref = React.useRef(null);
  const proRef = React.useRef(null);
  const conRef = React.useRef(null);
  const { viewH, viewW } = useWindowDimensions(); // 控制导航栏显示
  React.useEffect(() => {
    if (store.layout) {
      setShowBar(false);
    }
  }, [store.layout]); // 控制导航栏滚动
  const offsetPerCard = 0.6 * viewH * 1.333 + 200;
  const [current, setCurrent] = React.useState(0);
  const [barValue, setBarValue] = React.useState(0);
  React.useEffect(() => {
    const bar = ref.current;
    const content = conRef.current;
    setCurrent(Math.round(store.layoutOffset / offsetPerCard - 1));
    const startPoint = (bar.offsetWidth * 0.25) / bar.scrollWidth;
    const endPoint =
      (bar.scrollWidth - bar.offsetWidth * 0.25) / bar.scrollWidth;
    const barRange = transform(
      store.scroll_current,
      [0, startPoint, endPoint, 1],
      [0, 0, bar.scrollWidth / 2, bar.scrollWidth],
    );
    setBarValue(barRange);
    bar.scrollLeft = barValue;
  }, [store.layoutOffset, store.trigger_scroll_to]); // 滚轮控制
  React.useEffect(() => {
    const current = ref.current;
    function handleWheel(event) {
      if (!store.layout && store.wheel) {
        event.preventDefault();
        current.scrollLeft = current.scrollLeft + event.deltaY;
      }
    }
    current.addEventListener("wheel", handleWheel);
    return () => {
      current.removeEventListener("wheel", handleWheel);
    };
  }, [store.layout, store.wheel]); // 点击滚动到卡片
  function ToCard(index) {
    const offsets1 = isDesktop
      ? store.hero_width - (viewW - 0.6 * viewH * 1.333) / 2
      : store.hero_width - (viewW - 0.6 * viewH * 1.333) / 2 + 200; // console.log("hero", store.hero_width)
    const offsets = isDesktop
      ? store.hero_width -
        (viewW - 0.6 * viewH * 1.333) / 2 +
        index * (0.6 * viewH * 1.333 + 200)
      : store.hero_width -
        (viewW - 0.6 * viewH * 1.333) / 2 +
        index * (0.6 * viewH * 1.333 + 200) +
        200;
    setStore({
      scroll_to: index == 0 ? offsets1 : offsets,
      trigger_scroll_to: Date.now(),
    });
  }
  function ToEnd() {
    setStore({ scroll_to: store.layoutWidth, trigger_scroll_to: Date.now() });
    ref.current.scrollTo({ left: ref.current.scrollWidth, behavior: "smooth" });
  }
  function ToFront() {
    setStore({ scroll_to: 0, trigger_scroll_to: Date.now() });
    ref.current.scrollTo({ left: 0, behavior: "smooth" });
  }
  const variant = {
    current: {
      filter: "blur(0px)",
      scale: 1,
      opactiy: 1,
      width: 80,
      transition: transition,
    },
    current_hide: {
      filter: "blur(8px)",
      scale: 0.5,
      opactiy: 0,
      width: 80,
      transition: { ...transition, delay: 0.1 },
    },
    default: {
      filter: "blur(0px)",
      scale: 1,
      opactiy: 1,
      width: 60,
      transition: transition,
    },
    default_hide: {
      filter: "blur(8px)",
      scale: 0.5,
      opactiy: 0,
      width: 60,
      transition: { ...transition, delay: 0.1 },
    },
  };
  const [showTitle, setShowTitle] = React.useState(false);
  const [currentTitle, setCurrentTitle] = React.useState("Unknow");
  const [showBar, setShowBar] = React.useState(false);
  const [pinBar, setPinBar] = React.useState(false);
  const bar = {
    min: {
      background: fill_2,
      width: 200,
      height: 5,
      transition: { ...transition, delay: 0.2 },
    },
    max: { background: fill, width: 400, height: 76, transition: transition },
    hide: { background: fill, width: 0, height: 5, transition: transition },
  };
  const progress = useTransform(
    motionValue(store.scroll_current),
    [0, 1],
    [0, 180],
  );
  const progressSpring = useSpring(progress, { stiffness: 200, damping: 40 });
  const progressStyle = {
    hide: { opacity: 0, width: 2, transition: transition },
    show: { opacity: 1, width: 20, transition: { ...transition, delay: 0.8 } },
  };
  const [group, setGroup] = React.useState([]);
  React.useEffect(() => {
    if (store.type === "ALL") {
      setGroup(button);
    } else {
      setGroup(button.filter((button) => button.type === store.type));
    }
  }, [store.type]);
  const [sound, setSound] = soundStore();
  const [sound_hover] = useSound(sound.hover1, {
    volume: store.sound ? sound.volume : 0,
  });
  const [sound_click] = useSound(sound.click2, {
    volume: store.sound ? sound.volume : 0,
  });
  const [pin_on] = useSound(sound.lock, {
    volume: store.sound ? sound.volume : 0,
  });
  const [pin_off] = useSound(sound.unlock, {
    volume: store.sound ? sound.volume : 0,
  }); // CMS
  const [content, setContent] = React.useState([]);
  const data = useQueryData({
    from: { data: Blog, type: "Collection" },
    select: [
      { name: "B6ayqpvjf", type: "Identifier" },
      { name: "TBCnzfSIw", type: "Identifier" },
      { name: "cdI59d3FI", type: "Identifier" },
      { name: "wsjEhoSf3", type: "Identifier" },
      { name: "NxWTLgp2C", type: "Identifier" },
      { name: "YlQuuq2WI", type: "Identifier" },
      { name: "FBN3s_gfM", type: "Identifier" },
      { name: "h3NndMT3X", type: "Identifier" },
      { name: "i7eUIM6KL", type: "Identifier" },
      { name: "OaSZjrd_f", type: "Identifier" },
      { name: "id", type: "Identifier" },
    ],
    where: {
      left: { name: "NxWTLgp2C", type: "Identifier" },
      operator: "!=",
      right: { type: "LiteralValue", value: "" }, // nLUm4zPVe: idea, yHvm0KK6A: project
      type: "BinaryOperation",
    },
  });
  React.useEffect(() => {
    if (store.type === "IDEA") {
      const filteredGroup = data.filter(
        (item) => item.NxWTLgp2C === "yHvm0KK6A",
      );
      setContent(filteredGroup);
    } else if (store.type === "WORK") {
      const filteredGroup = data.filter(
        (item) => item.NxWTLgp2C === "nLUm4zPVe",
      );
      setContent(filteredGroup);
    } else if (store.type === "PLAYGROUND") {
      const filteredGroup = data.filter(
        (item) => item.NxWTLgp2C === "qCJw6bvLq",
      );
      setContent(filteredGroup);
    } else if (store.type === "ALL") {
      setContent(data);
    }
  }, [data, store.type]);
  return /*#__PURE__*/ _jsxs("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      flexDirection: "column",
      gap: 8,
      padding: "10px 36px 30px 36px",
    },
    onMouseEnter: () => setShowBar(true),
    onMouseLeave: () => setShowBar(false),
    children: [
      /*#__PURE__*/ _jsx(UtilitiesScrollHoverText, {
        text: currentTitle,
        initial: { opacity: 0 },
        animate: { opacity: showTitle ? 1 : 0 },
      }),
      /*#__PURE__*/ _jsx(Pin, {
        pin: store.docker,
        fill: pin_color,
        onTap: () => {
          // setPinBar(!pinBar)
          window.localStorage.setItem("ls_docker", String(store.docker)),
            setStore({ docker: !store.docker });
          setCurrentTitle(
            !store.docker ? "Lock Docker: ON" : "Lock Docker: OFF",
          );
          !store.docker ? pin_on() : pin_off();
        },
        show: showBar,
        onMouseEnter: () => {
          setCurrentTitle("Lock Docker");
          setShowTitle(true);
          sound_hover();
        },
        onMouseLeave: () => setShowTitle(false),
      }),
      /*#__PURE__*/ _jsxs(motion.div, {
        style: {
          ...containerStyle,
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          width: 200,
          height: "max-content",
          background: fill,
          borderRadius: 24,
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          transform: "translateZ(0)",
        },
        ref: proRef,
        variants: bar,
        initial: "min",
        animate: store.layout
          ? "hide"
          : store.docker
            ? "max"
            : showBar
              ? "max"
              : "min",
        children: [
          /*#__PURE__*/ _jsx(motion.div, {
            name: "progress",
            className: "hide-scrollbar",
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: 20,
              height: 5,
              background: pro_color,
              borderRadius: 4,
              WebkitBorderRadius: 4,
              MozBorderRadius: 4,
              x: progressSpring,
              boxShadow: `0px 0px 0px 3px ${pro_color2}`,
            },
            variants: progressStyle,
            initial: "show",
            animate: store.docker ? "hide" : showBar ? "hide" : "show",
          }),
          /*#__PURE__*/ _jsx("div", {
            name: "center",
            className: "hide-scrollbar",
            style: { display: "flex", justifyContent: "center" },
            children: /*#__PURE__*/ _jsx("div", {
              name: "Group",
              className: "hide-scrollbar",
              style: {
                display: "flex",
                justifyContent: "flex-start",
                width: 400,
                padding: 8,
                height: "max-content",
                overflow: "scroll",
                borderRadius: 17,
              },
              ref: ref,
              children: /*#__PURE__*/ _jsxs(motion.div, {
                style: {
                  display: "flex",
                  justifyContent: "flex-start",
                  height: "max-content",
                  width: "max-content",
                  gap: 6,
                },
                ref: conRef,
                children: [
                  /*#__PURE__*/ _jsx(motion.div, {
                    style: { flexShrink: 0 },
                    onMouseEnter: () => {
                      setCurrentTitle("Go to the end.");
                      setShowTitle(true);
                      sound_hover();
                    },
                    onMouseLeave: () => setShowTitle(false),
                    variants: variant,
                    initial: "default_hide",
                    animate: store.docker
                      ? "default"
                      : showBar
                        ? "default"
                        : "default_hide",
                    children: /*#__PURE__*/ _jsx(ButtonToEnd, {
                      click: () => {
                        ToEnd(), sound_click();
                      },
                    }),
                  }),
                  /*#__PURE__*/ _jsx(AnimatePresence, {
                    initial: false,
                    mode: "popLayout",
                    children: content.map(
                      ({ B6ayqpvjf, YlQuuq2WI, id: idBhbOYeZh1 }, index) => {
                        return /*#__PURE__*/ _jsx(
                          motion.div,
                          {
                            style: { flexShrink: 0 },
                            layout: true,
                            initial: {
                              filter: "blur(8px)",
                              scale: 0.5,
                              opacity: 0,
                            },
                            animate: {
                              filter: "blur(0px)",
                              scale: 1,
                              opacity: 1,
                              transition: { ...transition, delay: 0.3 },
                            },
                            exit: {
                              filter: "blur(8px)",
                              scale: 0.5,
                              opacity: 0,
                              transition: transition,
                            },
                            onTap: () => sound_click(),
                            children: /*#__PURE__*/ _jsx(motion.div, {
                              style: {
                                width: 60,
                                height: 60,
                                borderRadius: 17,
                                overflow: "hidden",
                              },
                              onMouseEnter: () => {
                                setCurrentTitle(`${B6ayqpvjf}`);
                                setShowTitle(true);
                                sound_hover();
                              },
                              onMouseLeave: () => setShowTitle(false), // whileHover={{ scale: 1.05 }}
                              whileTap: { scale: 0.95 },
                              whileHover: { scale: 1.1 },
                              variants: variant,
                              initial: "default",
                              animate:
                                current == index
                                  ? store.docker
                                    ? "current"
                                    : showBar
                                      ? "current"
                                      : "current_hide"
                                  : store.docker
                                    ? "default"
                                    : showBar
                                      ? "default"
                                      : "default_hide",
                              children: /*#__PURE__*/ _jsx(ScrollJumper, {
                                image: YlQuuq2WI,
                                border_color: border_color,
                                onTap: () => ToCard(index),
                              }),
                            }),
                          },
                          `scroll${B6ayqpvjf}`,
                        );
                      },
                    ),
                  }),
                  /*#__PURE__*/ _jsx(motion.div, {
                    style: { flexShrink: 0 },
                    onMouseEnter: () => {
                      setCurrentTitle("Go to the front.");
                      setShowTitle(true);
                      sound_hover();
                    },
                    onMouseLeave: () => setShowTitle(false),
                    variants: variant,
                    initial: "default_hide",
                    animate: store.docker
                      ? "default"
                      : showBar
                        ? "default"
                        : "default_hide",
                    children: /*#__PURE__*/ _jsx(ButtonToFront, {
                      click: () => {
                        ToFront(), sound_click();
                      },
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
const containerStyle = { height: "100%", display: "flex", overflow: "hidden" };
ScrollBarMax.defaultProps = {
  button: [
    {
      key: 0,
      image:
        "https://images.unsplash.com/photo-1692606742905-c4bd330534c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "1",
      type: "project",
    },
    {
      key: 1,
      image:
        "https://images.unsplash.com/photo-1657142072334-5a88134f1503?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=80",
      title: "2",
      type: "idea",
    },
    {
      key: 2,
      image:
        "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      title: "3",
      type: "project",
    },
    {
      key: 3,
      image:
        "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      title: "1",
      type: "idea",
    },
    {
      key: 4,
      image:
        "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      title: "1",
      type: "project",
    },
    {
      key: 5,
      image:
        "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      title: "1",
      type: "idea",
    },
    {
      key: 6,
      image:
        "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      title: "1",
      type: "project",
    },
  ],
  fill: "#dddddd",
  fill_2: "#cccccc",
  pro_color: "#ffffff",
  pro_color2: "#000000",
  theme: "rgba(255,255,255,1)",
  theme_2: "rgba(255,255,255,0)",
};
addPropertyControls(ScrollBarMax, {
  button: {
    type: ControlType.Array,
    title: "Buttons",
    control: {
      type: ControlType.Object,
      title: "Button",
      controls: {
        // offset: {
        //     type: ControlType.Number,
        //     title: "Offset",
        //     placeholder: "offset value",
        // },
        key: { type: ControlType.Number, title: "Key", defaultValue: 0 },
        image: {
          type: ControlType.String,
          title: "Image",
          defaultValue:
            "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
        },
        title: {
          type: ControlType.String,
          title: "Title",
          defaultValue: "Hover Title",
        },
        type: {
          type: ControlType.Enum,
          title: "Type",
          options: ["project", "idea"],
          defaultValue: "project",
        },
      },
      defaultValue: { buttonText: "New button", buttonColor: "#fc0" },
    },
  },
  fill: { type: ControlType.Color, title: "Fill" },
  fill_2: { type: ControlType.Color, title: "Fill_2" },
  pro_color: { type: ControlType.Color, title: "Progress" },
  pro_color2: { type: ControlType.Color, title: "Progress_2" },
  theme: { type: ControlType.Color, title: "Theme" },
  theme_2: { type: ControlType.Color, title: "Theme_2" },
  pin_color: { type: ControlType.Color, title: "Pin" },
  border_color: { type: ControlType.Color, title: "Border" },
}); // <div
//     style={{
//         position: "relative",
//         height: "100%",
//         width: 42,
//     }}
// />
// <div
//                 name="ToFront"
//                 style={{
//                     position: "absolute",
//                     left: 8,
//                     background: fill,
//                     // background: `linear-gradient(90deg, ${fill} 30%, ${fill_2}  100%)`,
//                     height: 42,
//                     width: 42,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     zIndex: 1,
//                     borderRadius: 42,
//                 }}
//             >
//                 <motion.div>
//                     <ButtonToFront />
//                 </motion.div>
//             </div>
function Pin({ show, pin, fill, onTap, onMouseEnter, onMouseLeave }) {
  const variant = {
    show: { scale: 1, opacity: 1, transition: { ...transition, delay: 0.4 } },
    hide: { scale: 0.5, opacity: 0, transition: transition },
  };
  return /*#__PURE__*/ _jsx(motion.div, {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 58,
      right: 6,
      width: 20,
      height: 20,
      borderRadius: 42,
      border: `2px solid ${fill}`,
    },
    variants: variant,
    initial: "hide",
    animate: show ? "show" : "hide",
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
    onTap: onTap,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: /*#__PURE__*/ _jsx(motion.div, {
      style: { width: 12, height: 12, background: fill, borderRadius: 20 },
      initial: { opacity: 0, scale: 1.3 },
      animate: { opacity: pin ? 1 : 0, scale: pin ? 1 : 1.3 },
    }),
  });
} // const Scroll = styled.div`
//     display: flex;
//     justify-content: flex-start;
//     width: 400px;
//     padding: 8px;
//     height: max-content;
//     overflow: scroll;
//     border-radius: 17px;
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//     ::-webkit-scrollbar {
//         display: none;
//     }
// `

export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "ScrollBarMax",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./ScrollBarMax.map
