import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from "react";
import {
  addPropertyControls,
  ControlType,
  RenderTarget,
  withCSS,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import { motion } from "framer-motion";
import {
  containerStyles,
  usePadding,
  useRadius,
  paddingControl,
  borderRadiusControl,
  fontControls,
  useFontControls,
} from "https://framer.com/m/framer/default-utils.js@^0.45.0";
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const mailchimpRegex = /^https?:\/\/([^\/]+)[^\?]+\??(.+)$/;
const validateEmail = (email) => {
  return emailRegex.test(String(email).toLowerCase());
};
const parseMailChimpUrl = (url) => {
  var ref;
  const [, domain, parameters] =
    (ref = url.replace("&amp;", "&").match(mailchimpRegex)) !== null &&
    ref !== void 0
      ? ref
      : [null, null, null];
  return [domain, new URLSearchParams(parameters)];
};
/**
 * MAILCHIMP
 *
 * @framerIntrinsicWidth 430
 * @framerIntrinsicHeight 52
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight auto
 */ const Mailchimp = withCSS(
  function Mailchimp({
    url,
    input,
    button,
    layout,
    style,
    gap,
    onSubmit,
    ...props
  }) {
    const [email1, setEmail] = useState(input.value);
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const isCanvas = useMemo(() => {
      return RenderTarget.current() === RenderTarget.canvas;
    }, []);
    const { fontFamily, fontSize, fontWeight } = useFontControls(props);
    const borderRadius = useRadius(props);
    const paddingValue = usePadding(props);
    const validateForm = useCallback((email) => {
      if (email === "" || !validateEmail(email)) {
        setError(true);
        return false;
      }
      return true;
    }, []);
    const handleChange = useCallback((event) => {
      setError(false);
      setEmail(event.target.value);
    }, []);
    const handleSubmit = useCallback(() => {
      event.preventDefault();
      const [domain, parameters] = parseMailChimpUrl(url);
      if (!validateForm(email1) || !domain || !parameters) {
        setLoading(false);
      } else {
        parameters.set("MERGE0", email1); // MERGE0 being Mailchimp's email field name
        fetch(`https://${domain}/subscribe/post`, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: parameters.toString(),
        })
          .then((response) => {
            setSuccess(true);
            onSubmit();
          })
          .catch(() => {
            setLoading(false);
          });
      }
    }, [url, email1]);
    const handleClick = useCallback(() => {
      setLoading(true);
    }, []);
    return /*#__PURE__*/ _jsx(motion.div, {
      style: {
        ...style,
        ...containerStyles,
        "--framer-mailchimp-placeholder-color": input.placeholderColor,
      },
      children: isSuccess
        ? /*#__PURE__*/ _jsx(motion.div, {
            style: {
              height: "60px",
              width: "60px",
              background: button.fill,
              color: button.color,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            initial: { scale: 0 },
            animate: { scale: 1 },
            transition: { duration: 0.3 },
            children: /*#__PURE__*/ _jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "28",
              height: "28",
              children: /*#__PURE__*/ _jsx("path", {
                d: "M 2 14 L 10 22 L 26 6",
                fill: "transparent",
                strokeWidth: "4",
                stroke: "currentColor",
                strokeLinecap: "round",
              }),
            }),
          })
        : /*#__PURE__*/ _jsxs("form", {
            style: {
              width: "100%",
              display: "grid",
              gap,
              gridTemplateColumns:
                layout === "vertical" ? "1fr" : "1fr max-content",
              gridTemplateRows: layout === "vertical" ? "1fr 1fr" : "1fr",
            },
            onSubmit: handleSubmit,
            method: "POST",
            children: [
              /*#__PURE__*/ _jsx("div", {
                style: { position: "absolute", visibility: "hidden" },
                "aria-hidden": "true",
                children: /*#__PURE__*/ _jsx("input", {
                  type: "text",
                  name: "b_1487cc549a49109c00fe60a80_93cd7be172",
                  tabIndex: -1,
                }),
              }),
              /*#__PURE__*/ _jsx("input", {
                type: "email",
                name: "email",
                placeholder: input.placeholder,
                value: isCanvas ? input.value : email1,
                className: "framer-mailchimp-input",
                onChange: handleChange,
                style: {
                  ...defaultStyle,
                  padding: paddingValue,
                  borderRadius,
                  fontFamily,
                  fontWeight,
                  fontSize,
                  background: input.fill,
                  color: input.color,
                  boxShadow: `inset 0 0 0 1px ${isError ? input.error : "transparent"}`,
                },
              }),
              /*#__PURE__*/ _jsxs("div", {
                style: { position: "relative" },
                children: [
                  /*#__PURE__*/ _jsx(motion.input, {
                    type: "submit",
                    value: button.label,
                    onClick: handleClick,
                    style: {
                      ...defaultStyle,
                      cursor: "pointer",
                      borderRadius,
                      padding: paddingValue,
                      fontFamily,
                      fontWeight: button.fontWeight,
                      fontSize,
                      background: button.fill,
                      color: button.color,
                      zIndex: 1,
                    },
                    transition: { type: "ease", duration: 0.3 },
                    whileHover: { opacity: 0.8 },
                  }),
                  isLoading &&
                    /*#__PURE__*/ _jsx("div", {
                      style: {
                        borderRadius,
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        left: 0,
                        top: 0,
                        zIndex: 2,
                        color: button.color,
                        background: button.fill,
                      },
                      children: /*#__PURE__*/ _jsx(motion.div, {
                        style: { height: 16, width: 16 },
                        initial: { rotate: 0 },
                        animate: { rotate: 360 },
                        transition: { duration: 2, repeat: Infinity },
                        children: /*#__PURE__*/ _jsxs("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          children: [
                            /*#__PURE__*/ _jsx("path", {
                              d: "M 8 0 C 3.582 0 0 3.582 0 8 C 0 12.419 3.582 16 8 16 C 12.418 16 16 12.419 16 8 C 15.999 3.582 12.418 0 8 0 Z M 8 14 C 4.687 14 2 11.314 2 8 C 2 4.687 4.687 2 8 2 C 11.314 2 14 4.687 14 8 C 14 11.314 11.314 14 8 14 Z",
                              fill: "currentColor",
                              opacity: "0.2",
                            }),
                            /*#__PURE__*/ _jsx("path", {
                              d: "M 8 0 C 12.418 0 15.999 3.582 16 8 C 16 8 16 9 15 9 C 14 9 14 8 14 8 C 14 4.687 11.314 2 8 2 C 4.687 2 2 4.687 2 8 C 2 8 2 9 1 9 C 0 9 0 8 0 8 C 0 3.582 3.582 0 8 0 Z",
                              fill: "currentColor",
                            }),
                          ],
                        }),
                      }),
                    }),
                ],
              }),
            ],
          }),
    });
  },
  [
    ".framer-mailchimp-input::placeholder { color: var(--framer-mailchimp-placeholder-color) !important; }",
  ],
);
Mailchimp.defaultProps = {
  fontSize: 16,
  fontFamily: "Inter",
  fontWeight: 400,
  padding: 15,
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 8,
  topLeftRadius: 8,
  topRightRadius: 8,
  bottomRightRadius: 8,
  bottomLeftRadius: 8,
  gap: 15,
};
addPropertyControls(Mailchimp, {
  url: {
    title: "URL",
    placeholder: "https://***.us6.list-manage.com/subscribe/post?u=***",
    type: ControlType.String,
    description:
      "Create a [Mailchimp](https://mailchimp.com/) account and copy your embedded form URL. [Learn more…](https://www.framer.com/sites/integrations/mailchimp/)",
  },
  layout: {
    title: "Layout",
    type: ControlType.Enum,
    options: ["horizontal", "vertical"],
    displaySegmentedControl: true,
  },
  input: {
    title: "Input",
    type: ControlType.Object,
    controls: {
      placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "email@framer.com",
      },
      placeholderColor: {
        title: " ",
        type: ControlType.Color,
        defaultValue: "rgba(0, 0, 0, 0.3)",
      },
      value: { title: "Value", type: ControlType.String },
      fill: { title: "Fill", type: ControlType.Color, defaultValue: "#EBEBEB" },
      color: { title: "Text", type: ControlType.Color, defaultValue: "#000" },
      error: {
        title: "Error",
        type: ControlType.Color,
        defaultValue: "#EE4444",
      },
    },
  },
  button: {
    title: "Button",
    type: ControlType.Object,
    controls: {
      label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Sign Up",
      },
      fontWeight: { ...fontControls.fontWeight, defaultValue: 600 },
      fill: { title: "Fill", type: ControlType.Color, defaultValue: "#000" },
      color: { title: "Text", type: ControlType.Color, defaultValue: "#FFF" },
    },
  },
  ...fontControls,
  fontSize: {
    title: "Font Size",
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 16,
  },
  ...paddingControl,
  ...borderRadiusControl,
  gap: { title: "Gap", type: ControlType.Number, displayStepper: true, min: 0 },
  onSubmit: { type: ControlType.EventHandler },
});
const defaultStyle = {
  WebkitAppearance: "none",
  width: "100%",
  lineHeight: "1.4em",
  outline: "none",
  border: "none",
};
export default Mailchimp;
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Mailchimp",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "52",
        framerIntrinsicWidth: "430",
        framerContractVersion: "1",
        framerSupportedLayoutHeight: "auto",
        framerSupportedLayoutWidth: "fixed",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./Mailchimp.map
