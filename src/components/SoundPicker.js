import { jsx as e } from "react/jsx-runtime";
import { addPropertyControls as t, ControlType as s } from "../framer_scripts/framer.K3G2LCX5.mjs";
import { motion as o } from "framer-motion";
import { createStore as p } from "https://framer.com/m/framer/store.js@^1.0.0";
/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */ export const soundStore = p({
  about: "https://framerusercontent.com/assets/JS0F0ykew7pBc1YLi9C2thx3lA.mp3",
  click1:
    "https://framerusercontent.com/assets/NeKEEECpDCUc4QSkjqmTdXLH5GU.mp3",
  click2: "https://framerusercontent.com/assets/PSUayyGR1zh59jVTvXq7dxzaBs.mp3",
  click3: "https://framerusercontent.com/assets/tF3exK591Ks2e3NJI0f2jo9XAo.mp3",
  click4: "https://framerusercontent.com/assets/gVljopYYjzrVbUeGt3La9cq6I4.mp3",
  hover1: "https://framerusercontent.com/assets/v5V8b74xkcFoD7azK05De3Q2U.mp3",
  lock: "https://framerusercontent.com/assets/0YxScnd9tCQhXY6WCagHpZm4v8.mp3",
  unlock:
    "https://framerusercontent.com/assets/1e9NlcWONVxoxBiQ4ZHyYatDPHI.mp3",
  popup: "https://framerusercontent.com/assets/upVw7x9UcdCQOnE4UHaGAqt4mM.mp3",
  swoosh:
    "https://framerusercontent.com/assets/SrckkKlgThNSPqJvnvJrwWMroAw.mp3",
  slide: "https://framerusercontent.com/assets/Tzsjxn4Nj6hopuN7zbtTykw2C34.mp3",
  soundon: "https://framerusercontent.com/assets/nBau36Lg0YjnLNUZ4mHwRUnrY.mp3",
  volume: 1,
}); // export const soundStore = createStore({
//     about: null,
//     click1: null,
//     click2: null,
//     click3: null,
//     click4: null,
//     hover1: null,
//     lock: null,
//     unlock: null,
//     popup: null,
//     swoosh: null,
//     slide: null,
//     soundon: null,
//     volume: 1,
// })
export default function r(t) {
  let {
      about: s,
      click1: p,
      click2: r,
      click3: l,
      click4: m,
      hover1: c,
      lock: a,
      unlock: i,
      popup: n,
      swoosh: u,
      slide: y,
      soundon: d,
    } = t,
    [F, h] = soundStore(),
    [f, w] = soundStore(); // const [isFileLoaded, setIsFileLoaded] = React.useState(false)
  // React.useEffect(() => {
  //     const audioPromises = [
  //         loadAudio(click1),
  //         loadAudio(click2),
  //         loadAudio(click3),
  //         loadAudio(click4),
  //         loadAudio(hover1),
  //         loadAudio(about),
  //         loadAudio(lock),
  //         loadAudio(unlock),
  //         loadAudio(popup),
  //         loadAudio(swoosh),
  //         loadAudio(slide),
  //         loadAudio(soundon),
  //     ]
  //     Promise.all(audioPromises)
  //         .then((audios) => {
  //             setSound({
  //                 about: about,
  //                 click1: click1,
  //                 click2: click2,
  //                 click3: click3,
  //                 click4: click4,
  //                 hover1: hover1,
  //                 lock: lock,
  //                 unlock: unlock,
  //                 popup: popup,
  //                 swoosh: swoosh,
  //                 slide: slide,
  //                 soundon: soundon,
  //             })
  //             console.log(`所有音频加载完成`, sound.volume)
  //         })
  //         .catch((error) => {
  //             console.error("Sounds Load failed.", error)
  //         })
  // }, [])
  // const loadAudio = (src) => {
  //     return new Promise((resolve, reject) => {
  //         const audio = new Audio(src)
  //         audio.onloadeddata = () => {
  //             console.log(`音频 ${src} 加载完成`)
  //             resolve(audio)
  //         }
  //         audio.onerror = () => {
  //             console.error(`音频 ${src} 加载失败`)
  //             reject(new Error(`音频 ${src} 加载失败`))
  //         }
  //         audio.load()
  //     })
  // }
  return /*#__PURE__*/ e(o.div, {
    style: { width: 16, height: 16, borderRadius: 16, background: "purple" },
  });
}
t(r, {
  about: { type: s.File, allowedFileTypes: ["mp3"] },
  click1: { type: s.File, allowedFileTypes: ["mp3"] },
  click2: { type: s.File, allowedFileTypes: ["mp3"] },
  click3: { type: s.File, allowedFileTypes: ["mp3"] },
  click4: { type: s.File, allowedFileTypes: ["mp3"] },
  hover1: { type: s.File, allowedFileTypes: ["mp3"] },
  lock: { type: s.File, allowedFileTypes: ["mp3"] },
  unlock: { type: s.File, allowedFileTypes: ["mp3"] },
  popup: { type: s.File, allowedFileTypes: ["mp3"] },
  swoosh: { type: s.File, allowedFileTypes: ["mp3"] },
  slide: { type: s.File, allowedFileTypes: ["mp3"] },
  soundon: { type: s.File, allowedFileTypes: ["mp3"] },
});
export const __FramerMetadata__ = {
  exports: {
    soundStore: {
      type: "variable",
      annotations: {
        framerContractVersion: "1",
        framerSupportedLayoutWidth: "auto",
        framerSupportedLayoutHeight: "auto",
      },
    },
    default: {
      type: "reactComponent",
      name: "SoundPicker",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./SoundPicker.map
