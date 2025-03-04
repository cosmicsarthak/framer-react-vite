import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import {
  addPropertyControls,
  ControlType, // @ts-ignore: Internal API
  useQueryData, // @ts-ignore: Internal API
  PathVariablesContext, // @ts-ignore: Internal API
  ResolveLinks,
} from "../framer_scripts/framer.K3G2LCX5.mjs";
import { motion, AnimatePresence } from "framer-motion";
import Blog from "https://framerusercontent.com/modules/x45ob7ic9XKSetY8LDfs/iWKRPi7HfKfk9H114z9T/TYK5zFM4J.js";
import { useStore } from "https://framerusercontent.com/modules/RGCgkyyKvYCOcpgTFJih/l8apYUQ1NMMBi28Mu8sO/Page.js";
import { useMediaQuery } from "https://framerusercontent.com/modules/n8SIflBFpkmSWMNrMimV/UP8LOKoS9HDpnJYpl8r3/Query.js";
import React from "react";
import HomePrimaryCard2 from "https://framerusercontent.com/modules/2wfPbLr1uL6exC7e9FJd/OsasAIg1ueCt8hdzAQbR/NeIZlwfvx.js"; // import { useObserverProgress } from "../Utilities/Query.tsx"
const transition = { type: "spring", stiffness: 170, damping: 28 };
const breakpoint1 = {
  desktop: "(max-width: 1600px)",
  tablet: "(max-width: 1199px)",
  phone: "(max-width: 810px)",
};
const ease = { spring: [0.54, -0.5, 0.2, 1.5] };
const volume = { default: 1, reduce: 0.55, slient: 0.5 };
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
}; //
export default function CMSList(props) {
  const { layouts, direction, gap, card, cursor } = props;
  const [store, setStore] = useStore();
  const isDesktop = useMediaQuery(breakpoint1.desktop);
  const isTablet = useMediaQuery(breakpoint1.tablet);
  const isPhone = useMediaQuery(breakpoint1.phone); // Layouts
  const type = {
    StackH: {
      display: "flex",
      gap: 200,
      width: "min-content",
      height: "min-content",
      gridTemplateColumns: "repeat(1, minmax(50px, 1fr))",
      gridAutoRows: "min-content",
      justifyContent: "flex-start",
      overflow: "visible",
    },
    StackV: {
      display: "grid",
      gap: 40, // width: "100%",
      // height: "max-content",
      gridTemplateColumns: "repeat(1, minmax(50px, 1fr))",
      gridAutoRows: "min-content",
      justifyContent: "center",
      overflow: "visible",
    },
    Grid3: {
      display: "grid",
      gap: 40,
      width: "calc(100vw - 160px)",
      height: "max-content",
      gridTemplateColumns: "repeat(3, minmax(50px, 1fr))",
      gridAutoRows: "min-content",
      justifyContent: "center",
      overflow: "visible",
    },
    Grid2: {
      display: "grid",
      gap: 40,
      width: "calc(100vw - 80px)",
      height: "max-content",
      gridTemplateColumns: "repeat(2, minmax(50px, 1fr))",
      gridAutoRows: "min-content",
      justifyContent: "center",
      overflow: "visible",
    },
  };
  const item = {
    SliderH: {
      width: "auto",
      height: "60vh",
      aspectRatio: "4 / 3",
      gridColumn: "auto / span 1",
    },
    SliderV: {
      width: "100%",
      height: "auto",
      aspectRatio: "4 / 3",
      gridColumn: "auto / span 1",
    },
    Detail: {
      width: "100%",
      height: "auto",
      aspectRatio: "1 / 1",
      gridColumn: "auto / span 1",
    },
    SliderH2: {
      width: "auto",
      height: "60vh",
      aspectRatio: "1 / 1",
      gridColumn: "auto / span 1",
    },
    DetailP: {
      width: "100%",
      height: "auto",
      aspectRatio: "1 / 1.1",
      gridColumn: "auto / span 1",
    },
    Spotlight: {
      width: "100%",
      height: "auto",
      aspectRatio: "947 / 454",
      gridColumn: "auto / span 2",
    },
  };
  function setLayout() {
    if (layouts === "Desktop") {
      return store.layout ? "Grid3" : "StackH";
    }
    if (layouts === "Grid3") {
      return "Grid3";
    }
    if (layouts === "Grid2") {
      return "Grid2";
    }
    if (layouts === "Grid2T") {
      return "Grid2";
    }
    if (layouts === "StackV") {
      return "StackV";
    }
    if (layouts === "StackVP") {
      return "StackV";
    }
    if (layouts === "StackVPG") {
      return "StackV";
    }
    if (layouts === "StackH") {
      return "StackH";
    }
  }
  const isTouchDevice =
    typeof window !== "undefined"
      ? window.matchMedia("(hover: none)").matches
      : false;
  function setVariant(spotlight, type) {
    if (layouts === "Desktop") {
      return store.layout
        ? spotlight
          ? "Desktop_Spotlight"
          : "Desktop_Detail"
        : type === "qCJw6bvLq"
          ? "Desktop_Play"
          : isTouchDevice
            ? "Desktop_Detail"
            : "Desktop";
    }
    if (layouts === "Grid3") {
      return spotlight ? "Desktop_Spotlight" : "Desktop_Detail";
    }
    if (layouts === "Grid2") {
      return spotlight ? "Desktop_Spotlight" : "Desktop_Detail";
    }
    if (layouts === "Grid2T") {
      return spotlight ? "Tablet_Spotlight" : "Tablet_Detail";
    }
    if (layouts === "StackV") {
      return "Tablet";
    }
    if (layouts === "StackVP") {
      return "Phone";
    }
    if (layouts === "StackVPG") {
      return "Phone_Detail";
    }
    if (layouts === "StackH") {
      return "Desktop";
    }
  }
  function setRatio(spotlight, type) {
    if (layouts === "Desktop") {
      return store.layout
        ? spotlight
          ? "Spotlight"
          : "Detail"
        : type === "qCJw6bvLq"
          ? "SliderH2"
          : "SliderH";
    }
    if (layouts === "Grid3") {
      return spotlight ? "Spotlight" : "Detail";
    }
    if (layouts === "Grid2") {
      return spotlight ? "Spotlight" : "Detail";
    }
    if (layouts === "Grid2T") {
      return spotlight ? "Spotlight" : "Detail";
    }
    if (layouts === "StackV") {
      return "SliderV";
    }
    if (layouts === "StackVP") {
      return "Detail";
    }
    if (layouts === "StackVPG") {
      return "DetailP";
    }
    if (layouts === "StackH") {
      return "SliderH";
    }
  } // Filter
  const [content, setContent] = React.useState([]);
  const data = useQueryData({
    from: { data: Blog, type: "Collection" },
    select: [
      { name: "B6ayqpvjf", type: "Identifier" },
      { name: "hRQvHJnkU", type: "Identifier" },
      { name: "TBCnzfSIw", type: "Identifier" },
      { name: "RXH9Y2zBS", type: "Identifier" },
      { name: "PcSOxCIah", type: "Identifier" },
      { name: "cdI59d3FI", type: "Identifier" },
      { name: "wsjEhoSf3", type: "Identifier" },
      { name: "NxWTLgp2C", type: "Identifier" },
      { name: "YlQuuq2WI", type: "Identifier" },
      { name: "FBN3s_gfM", type: "Identifier" },
      { name: "h3NndMT3X", type: "Identifier" },
      { name: "i7eUIM6KL", type: "Identifier" },
      { name: "OaSZjrd_f", type: "Identifier" },
      { name: "rGWYgbHC_", type: "Identifier" },
      { name: "oDr5GBPtj", type: "Identifier" },
      { name: "cQRb6rBgD", type: "Identifier" },
      { name: "ikH4Oa3Vj", type: "Identifier" },
      { name: "pG27F_S6T", type: "Identifier" },
      { name: "id", type: "Identifier" },
    ],
    where: {
      left: { name: "NxWTLgp2C", type: "Identifier" },
      operator: "!=",
      right: { type: "LiteralValue", value: "" },
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
  }, [data, store.type]); // Date
  function formatDateToMonthYear(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }
  return /*#__PURE__*/ _jsx(motion.div, {
    layout: false,
    style: type[setLayout()],
    children: /*#__PURE__*/ _jsx(_Fragment, {
      children: /*#__PURE__*/ _jsx(AnimatePresence, {
        children: content.map(
          (
            {
              YlQuuq2WI: image,
              B6ayqpvjf: title,
              hRQvHJnkU: title_chn,
              NxWTLgp2C: type,
              TBCnzfSIw: intro,
              RXH9Y2zBS: intro_chn,
              cdI59d3FI: date,
              rGWYgbHC_: dynamic_cover,
              ikH4Oa3Vj: cover_link,
              cQRb6rBgD: status,
              FBN3s_gfM: FBN3s_gfMBhbOYeZh1,
              h3NndMT3X: magic_title,
              PcSOxCIah: subtitle,
              pG27F_S6T: spotlight,
              id: idBhbOYeZh1,
            },
            i,
          ) =>
            /*#__PURE__*/ _jsx(
              PathVariablesContext.Provider,
              {
                value: FBN3s_gfMBhbOYeZh1,
                children: /*#__PURE__*/ _jsx(ResolveLinks, {
                  links: [
                    {
                      href: {
                        pathVariables: { FBN3s_gfM: FBN3s_gfMBhbOYeZh1 },
                        webPageId: "JoVJkkCak",
                      },
                      implicitPathVariables: undefined,
                    },
                  ],
                  children: (resolvedLinks) =>
                    /*#__PURE__*/ _jsx(
                      motion.div,
                      {
                        layout: "position",
                        id: `BhbOYeZh1-${idBhbOYeZh1}`,
                        style: item[setRatio(spotlight, type)],
                        initial: {
                          opacity: 0,
                          scale: 0.75,
                          filter: "blur(8px)",
                        },
                        animate: {
                          opacity: 1,
                          scale: 1,
                          filter: "blur(0px)",
                          transition: { ...transition },
                        },
                        exit: {
                          opacity: 0,
                          scale: 0.75,
                          filter: "blur(8px)",
                          transition: transition,
                        },
                        transition: transition,
                        children: /*#__PURE__*/ _jsx(HomePrimaryCard2, {
                          layout: true,
                          style: { width: "100%", height: "100%" },
                          variant: setVariant(spotlight, type),
                          title: store.language === 0 ? title : title_chn,
                          size:
                            title.length >= 9
                              ? isTablet
                                ? 36
                                : 64
                              : isTablet
                                ? 96
                                : 128,
                          status:
                            status === "tlFDSBbIS"
                              ? "InProgress"
                              : status === "r3oNrDKny"
                                ? "New"
                                : "None",
                          titleEffect: false,
                          subtitle: subtitle,
                          detail: store.language === 0 ? intro : intro_chn,
                          image: image,
                          video: dynamic_cover,
                          videoUrl: cover_link,
                          date: formatDateToMonthYear(date),
                          cursor: cursor,
                          wNpLyCwPV: resolvedLinks[0],
                        }),
                      },
                      `BhbOYeZh1-${idBhbOYeZh1}`,
                    ),
                }),
              },
              idBhbOYeZh1,
            ),
        ),
      }),
    }),
  });
}
addPropertyControls(CMSList, {
  layouts: {
    type: ControlType.Enum,
    options: [
      "Desktop",
      "StackH",
      "StackV",
      "StackVP",
      "StackVPG",
      "Grid3",
      "Grid2",
      "Grid2T",
    ],
    defaultValue: "StackH",
    displaySegmentedControl: true,
    segmentedControlDirection: "vertical",
  },
  cursor: {
    // @ts-ignore: Internal API
    type: ControlType.CustomCursor,
  },
}); // <Link
//                                 href={{
//                                     pathVariables: { FBN3s_gfMBhbOYeZh1 },
//                                     webPageId: "JoVJkkCak",
//                                 }}
//                             >}
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "CMSList",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./CMSList.map
