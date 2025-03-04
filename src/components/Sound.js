import { jsx as _jsx } from "react/jsx-runtime";
import { useStore } from "https://framerusercontent.com/modules/RGCgkyyKvYCOcpgTFJih/l8apYUQ1NMMBi28Mu8sO/Page.js";
import { soundStore } from "https://framerusercontent.com/modules/CvGigTTgCBqyZO02gJUh/CVnKs90WxfWXyC90xdIU/SoundPicker.js"; // export const sound = {
//     hover: "https://github.com/Vsplorer/SequenceImage/blob/main/test_sound2.mp3?raw=true",
//     card_project:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/card_project.mp3?raw=true",
//     card_idea:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/card_idea.mp3?raw=true",
//     card_swoosh:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/card_swoosh.mp3?raw=true",
//     tab_switch:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/tab_switch.mp3?raw=true",
//     tab_all:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/test_tab1.mp3?raw=true",
//     tab_project:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/test_tab2.mp3?raw=true",
//     tab_idea:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/test_tab3.mp3?raw=true",
//     toggle_hover:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/toggle_hover.mp3?raw=true",
//     toggle_tap:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/toggle_tap.mp3?raw=true",
//     toggle_tap2:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/toggle_tap2.mp3?raw=true",
//     toggle_sound:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/toggle_sound.mp3?raw=true",
//     toggle_about:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/toggle_about.mp3?raw=true",
//     bar_lock:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/bar_lock.mp3?raw=true",
//     bar_unlock:
//         "https://github.com/Vsplorer/SequenceImage/blob/main/bar_unlock.mp3?raw=true",
// }
export const sound = {
  hover: "",
  card_project: "",
  card_idea: "",
  card_swoosh: "",
  tab_switch: "",
  tab_all: "",
  tab_project: "",
  tab_idea: "",
  toggle_hover: "",
  toggle_tap: "",
  toggle_tap2: "",
  toggle_sound: "",
  toggle_about: "",
  bar_lock: "",
  bar_unlock: "",
};
export function Sound_Switch(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const [sound, setSound] = soundStore(); // const [sound_hover] = useSound(sound.hover1, {
    //     volume: sound.volume,
    // })
    // const [sound_click] = useSound(sound.click1, {
    //     volume: sound.volume,
    // })
    return /*#__PURE__*/ _jsx(Component, {
      ...props, // onMouseEnter={() => sound.hover()}
      onTap: () => {
        // sound_click(),
        setStore({ sound: !store.sound });
      },
    });
  };
}
export const __FramerMetadata__ = {
  exports: {
    sound: { type: "variable", annotations: { framerContractVersion: "1" } },
    Sound_Switch: {
      type: "reactHoc",
      name: "Sound_Switch",
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
