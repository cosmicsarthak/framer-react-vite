import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { addPropertyControls, ControlType } from "../framer_scripts/framer.K3G2LCX5.mjs";
import { useStore } from "https://framerusercontent.com/modules/RGCgkyyKvYCOcpgTFJih/l8apYUQ1NMMBi28Mu8sO/Page.js";
/**
 * @framerIntrinsicHeight 60
 * @framerIntrinsicWidth 60
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */ export default function ScrollJumper(props) {
  const { image, alt, radius, offset, border_color, onTap } = props;
  const [store, setStore] = useStore();
  const toResponsiveImage = (value) => {
    if (
      typeof value === "object" &&
      value !== null &&
      typeof value.src === "string"
    ) {
      return value;
    }
    return typeof value === "string" ? { src: value } : undefined;
  };
  return /*#__PURE__*/ _jsx(motion.div, {
    style: {
      ...containerStyle,
      borderRadius: radius,
      WebkitBorderRadius: radius,
      MozBorderRadius: radius,
    },
    onTap: onTap,
    children: /*#__PURE__*/ _jsx(motion.img, {
      style: { width: "100%", height: "100%", objectFit: "cover" },
      src: image.src,
      alt: image.alt,
    }),
  });
}
ScrollJumper.defaultProps = {
  image:
    "https://images.unsplash.com/photo-1688516353461-540cd4b178fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
  alt: "image",
  radius: 0,
};
addPropertyControls(ScrollJumper, {
  image: { type: ControlType.String, title: "Image" },
  offset: { type: ControlType.Number, title: "offset" },
  radius: { type: ControlType.Number, title: "Radius" },
});
const containerStyle = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
}; // <Image
//     background={{
//         alt: "",
//         fit: "fill",
//         sizes: "224px",
//         ...toResponsiveImage(image),
//     }}
// />
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "ScrollJumper",
      slots: [],
      annotations: {
        framerSupportedLayoutHeight: "any-prefer-fixed",
        framerContractVersion: "1",
        framerIntrinsicWidth: "60",
        framerSupportedLayoutWidth: "any-prefer-fixed",
        framerIntrinsicHeight: "60",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
