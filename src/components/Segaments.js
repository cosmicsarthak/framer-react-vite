import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { motion } from "framer-motion";
import { addPropertyControls, ControlType } from "../framer_scripts/framer.K3G2LCX5.mjs";
import { useStore } from "https://framerusercontent.com/modules/RGCgkyyKvYCOcpgTFJih/l8apYUQ1NMMBi28Mu8sO/Page.js";
import useSound from "use-sound";
import { soundStore } from "https://framerusercontent.com/modules/CvGigTTgCBqyZO02gJUh/CVnKs90WxfWXyC90xdIU/SoundPicker.js";
/**
 * @framerIntrinsicWidth 200
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */ const tabs = [{ label: "Red" }, { label: "Purple" }, { label: "Pink" }];
export default function Segaments(props) {
  const {
    title,
    options,
    def_color,
    act_color,
    tit_color0,
    tit_color1,
    bg_color1,
    bg_color0,
    font,
  } = props;
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
  const items = [
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
  const [selected, setSelected] = React.useState("ALL"); // const baseProps = {
  //     def_color: "#999999",
  //     act_color: "#0099FF",
  //     tit_color0: "#666666",
  //     tit_color1: "#666666",
  //     bg_color1: "#FFFFFF",
  //     bg_color0: "#F3F3F3",
  // }
  return /*#__PURE__*/ _jsx("div", {
    style: {
      ...containerStyle,
      borderRadius: 24,
      backgroundColor: bg_color0,
      overflow: "hidden",
    },
    children: /*#__PURE__*/ _jsx("div", {
      style: {
        display: "flex",
        width: "max-content",
        height: "100%",
        padding: 6,
        justifyContent: "flex-start",
        alignItems: "center",
      },
      children: items.map(({ label, click }, i) =>
        /*#__PURE__*/ _jsxs(
          motion.div,
          {
            style: {
              position: "relative",
              width: "max-content",
              display: "flex",
              justifyContent: "center",
              padding: "6px 12px",
              whiteSpace: "pre",
              color: def_color,
              ...font,
              zIndex: 1,
              overflow: "visible",
            },
            whileHover: { color: act_color },
            initial: { color: store.type === label ? act_color : def_color },
            animate: { color: store.type === label ? act_color : def_color },
            onTap: () => {
              setSelected(label); // console.log(selected)
            },
            onClick: click,
            children: [
              label,
              store.type === label &&
                /*#__PURE__*/ _jsx(motion.div, {
                  layoutId: "contents",
                  style: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: 24,
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    backgroundColor: bg_color1,
                  },
                }),
            ],
          },
          label,
        ),
      ),
    }),
  });
}
const containerStyle = {
  width: "max-content",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  gap: 12,
};
Segaments.defaultProps = {
  title: "Property",
  options: [{ label: "Red" }, { label: "Purple" }, { label: "Pink" }],
  def_color: "#999999",
  act_color: "#0099FF",
  tit_color0: "#666666",
  tit_color1: "#666666",
  bg_color1: "#FFFFFF",
  bg_color0: "#F3F3F3",
};
addPropertyControls(Segaments, {
  title: { type: ControlType.String, title: "Title" },
  options: {
    type: ControlType.Array,
    title: "Options",
    description: "建议最多3个分段",
    control: {
      type: ControlType.Object,
      title: "Button object",
      controls: {
        label: {
          type: ControlType.String,
          title: "Label",
          placeholder: "Option",
        },
        click: { type: ControlType.EventHandler },
      },
      defaultValue: { label: "Target" },
    },
  },
  def_color: { type: ControlType.Color },
  act_color: { type: ControlType.Color },
  tit_color0: { type: ControlType.Color },
  tit_color1: { type: ControlType.Color },
  bg_color1: { type: ControlType.Color },
  bg_color0: { type: ControlType.Color },
  font: {
    // @ts-ignore: Internal API
    type: ControlType.Font,
    controls: "extended",
    displayFontSize: true,
    displayTextAlignment: false,
    defaultFontType: "sans-serif",
    defaultValue: { fontSize: 16, letterSpacing: "0em" },
  },
}); // {
//     <p
//         style={{
//             width: "33%",
//             minWidth: 68,
//             whiteSpace: "pre",
//             fontWeight: 500,
//             fontStyle: "normal",
//             fontFamily: `"Inter-Medium", "Inter", sans-serif`,
//             fontSize: 12,
//             letterSpacing: "0em",
//             lineHeight: 1.2,
//             color: baseProps.tit_color1,
//             margin: "0px 0px 0px 0px",
//         }}
//     >
//         {title}
//     </p>
// }
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Segaments",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
