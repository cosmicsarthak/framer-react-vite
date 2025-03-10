import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { addPropertyControls, ControlType } from "../framer_scripts/framer.K3G2LCX5.mjs";
import {
  localeOptions,
  containerStyles,
  fontStack,
} from "https://framer.com/m/framer/default-utils.js@^0.45.0";
/**
 * TIME
 *
 * @framerIntrinsicWidth 140
 * @framerIntrinsicHeight 20
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */ export function Time(props) {
  const {
    outputType,
    fontFamily,
    fontSize,
    fontWeight,
    localeType,
    customLocale,
    timeFormat,
    showYear,
    showWeekday,
    showHours,
    showMinutes,
    showSeconds,
    monthFormat,
    color,
    font,
    alignment,
  } = props;
  const [rerenderOutputKey, setRerenderOutputKey] = React.useState(
    `${Math.random()}`,
  );
  const timerRef = React.useRef();
  const text = React.useMemo(() => {
    const locale = localeType === "custom" ? [customLocale] : [];
    let formatOptions;
    switch (outputType) {
      case "date":
        formatOptions = {
          weekday: showWeekday ? "long" : undefined,
          day: "numeric",
          month: monthFormat,
          year: showYear ? "numeric" : undefined,
        };
        break;
      case "time":
        formatOptions = {
          hour: showHours ? "numeric" : undefined,
          minute: showMinutes ? "numeric" : undefined,
          second: showSeconds && showMinutes ? "numeric" : undefined,
          hour12: timeFormat === "12h",
        };
        break;
      default:
        console.error(`Unsupported outputType: ${outputType}`);
        break;
    }
    return new Intl.DateTimeFormat(locale, formatOptions).format(new Date());
  }, [
    outputType,
    localeType,
    customLocale,
    timeFormat,
    showYear,
    showWeekday,
    showHours,
    showMinutes,
    showSeconds,
    monthFormat,
    rerenderOutputKey,
  ]);
  React.useEffect(() => {
    if (outputType === "time") {
      const timer = setInterval(
        () => setRerenderOutputKey(`${Math.random()}`),
        (60 - new Date().getSeconds()) * 1e3,
      );
      timerRef.current = timer;
      return () => {
        if (timer) {
          return clearInterval(timer);
        }
      };
    }
  }, [timerRef.current, outputType]);
  return /*#__PURE__*/ _jsx("div", {
    style: {
      ...containerStyles,
      color,
      fontFamily: fontStack,
      fontWeight: 500,
      fontSize: 16,
      ...font,
    },
    children: /*#__PURE__*/ _jsx("span", {
      style: { width: "100%" },
      children: text,
    }),
  });
}
Time.defaultProps = {
  height: 20,
  width: 140,
  outputType: "time",
  localeType: "auto",
  customLocale: "en-US",
  color: "#999",
  timeFormat: "24h",
  showYear: true,
  showWeekday: true,
  showHours: true,
  showMinutes: true,
  showSeconds: false,
  monthFormat: "long",
  alignment: "center",
};
Time.displayName = "Time & Date";
addPropertyControls(Time, {
  outputType: {
    title: "Type",
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ["date", "time"],
    optionTitles: ["Date", "Time"],
    defaultValue: Time.defaultProps.outputType,
  },
  showWeekday: {
    title: "Weekday",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Time.defaultProps.showWeekday,
    hidden: (props) => props.outputType !== "date",
  },
  monthFormat: {
    title: "Month",
    type: ControlType.Enum,
    options: ["short", "long", "numeric"],
    optionTitles: ["Short", "Long", "Numeric"],
    defaultValue: Time.defaultProps.monthFormat,
    hidden: (props) => props.outputType !== "date",
  },
  showYear: {
    title: "Year",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Time.defaultProps.showYear,
    hidden: (props) => props.outputType !== "date",
  },
  timeFormat: {
    title: "Format",
    type: ControlType.Enum,
    options: ["12h", "24h"],
    optionTitles: ["12h", "24h"],
    displaySegmentedControl: true,
    defaultValue: Time.defaultProps.timeFormat,
    hidden: (props) => props.outputType !== "time",
  },
  showHours: {
    title: "Hours",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Time.defaultProps.showHours,
    hidden: (props) => props.outputType !== "time",
  },
  showMinutes: {
    title: "Minutes",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Time.defaultProps.showMinutes,
    hidden: (props) => props.outputType !== "time",
  },
  showSeconds: {
    title: "Seconds",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Time.defaultProps.showSeconds,
    hidden: (props) => props.outputType !== "time" || !props.showMinutes,
  },
  localeType: {
    title: "Locale",
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ["custom", "auto"],
    optionTitles: ["Custom", "Auto"],
    defaultValue: Time.defaultProps.localeType,
  },
  customLocale: {
    title: " ",
    type: ControlType.Enum,
    options: Object.keys(localeOptions).sort(),
    optionTitles: Object.keys(localeOptions)
      .sort()
      .map((key) => localeOptions[key]),
    hidden: (props) => props.localeType !== "custom",
    defaultValue: "en",
  },
  font: {
    // @ts-expect-error – Internal
    type: ControlType.Font,
    controls: "extended",
  },
  color: { type: ControlType.Color, defaultValue: Time.defaultProps.color },
});
export const __FramerMetadata__ = {
  exports: {
    Time: {
      type: "reactComponent",
      name: "Time",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "140",
        framerIntrinsicHeight: "20",
        framerContractVersion: "1",
        framerSupportedLayoutHeight: "any",
        framerSupportedLayoutWidth: "any",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./Time.map
