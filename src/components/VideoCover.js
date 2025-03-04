import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType } from "../framer_scripts/framer.K3G2LCX5.mjs";
import { motion } from "framer-motion";
import { useObserver } from "https://framerusercontent.com/modules/n8SIflBFpkmSWMNrMimV/UP8LOKoS9HDpnJYpl8r3/Query.js";
import React from "react";
/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */ export default function VideoCover(props) {
  const { radius, url, tint } = props;
  const ref = React.useRef(null);
  const isView = useObserver(ref, "", 0.5);
  const [isPlaying, setIsPlaying] = React.useState(false);
  React.useEffect(() => {
    if (isView) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isView]);
  return /*#__PURE__*/ _jsx(motion.div, {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      radius: radius,
      overflow: "hidden",
    },
    children: /*#__PURE__*/ _jsx("video", {
      ref: ref, // controls
      // autoPlay={isView}
      muted: true,
      loop: true,
      playsInline: true,
      src: url,
      style: { objectFit: "cover", width: "100%", height: "100%", zIndex: 1 },
    }),
  });
}
addPropertyControls(VideoCover, {
  tint: { title: "Tint", type: ControlType.Color, defaultValue: "#f2f2f2" },
  url: {
    title: "Video URL",
    type: ControlType.String,
    defaultValue: "https://example.com/video.mp4",
  },
  radius: {
    title: "Radius",
    type: ControlType.Number,
    defaultValue: 0,
    min: 0,
    max: 50,
  },
});
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "VideoCover",
      slots: [],
      annotations: {
        framerSupportedLayoutWidth: "any",
        framerContractVersion: "1",
        framerSupportedLayoutHeight: "any",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
