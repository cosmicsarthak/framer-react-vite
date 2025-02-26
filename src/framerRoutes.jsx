import * as React from "react";
import * as Framer from "./framer_scripts/framer.K3G2LCX5.mjs"; // TODO: Find Why? `chunk-NAESFJNX.mjs` is not working Why?

import augiA20IlPage from "./framer_scripts/NUvLnQMfst2j2z8iup7H/augiA20Il.js";


// const routes = {
//     augiA20Il: {
//         elements: {},
//         page: Framer.lazy(() =>
//             import("./framer_scripts/NUvLnQMfst2j2z8iup7H/augiA20Il.js")
//         ),
//         path: "/"
//     },
//     Z1o48jX66: {
//         elements: {},
//         page: Framer.lazy(() =>
//             import("https://framerusercontent.com/modules/HRZHa4Ev6qBCemK1w1Qb/fbxDPhDaMw4WOcLPBLjY/Z1o48jX66.js")
//         ),
//         path: "/about"
//     },
//     JoVJkkCak: {
//         collectionId: "TYK5zFM4J",
//         elements: {
//             AZEO4C012: "detail-head",
//             DZuky0fx2: "head-1",
//             HEyBqOSHU: "detail",
//             jCgwSWz4B: "catalog-trigger",
//             XDYwJy2tw: "head"
//         },
//         page: Framer.lazy(() =>
//             import("https://framerusercontent.com/modules/OnPPijqXWqqyGrqybLaK/rzIwImcmsm2bdbb3ZBj3/JoVJkkCak.js")
//         ),
//         path: "/blog/:FBN3s_gfM"
//     },
//     Ybl2KOy0F: {
//         page: Framer.lazy(() =>
//             import("https://framerusercontent.com/modules/zYyG3XmGpNAPGZgx2NH8/5TAmYpp9ZT1KMYwsFVeP/Ybl2KOy0F.js")
//         )
//     }
// };

const routes = {
  augiA20Il: {
    elements: {},
    page: augiA20IlPage,
    path: "/",
  },
};

const locales = [{ code: "en", id: "default", name: "English", slug: "" }];

export async function getPageRoot({ routeId, pathVariables, localeId }) {
  await routes[routeId].page.preload();

  const content = React.createElement(Framer.PageRoot, {
    isWebsite: true,
    routeId,
    pathVariables,
    routes,
    collectionUtils: {
      TYK5zFM4J: async () =>
        (
          await import(
            "https://framerusercontent.com/modules/x45ob7ic9XKSetY8LDfs/iWKRPi7HfKfk9H114z9T/TYK5zFM4J.js"
          )
        )?.["utils"],
    },
    framerSiteId:
      "dfafbaa85046da8350a0a1fb65a0defba26acca23e398967f8567c0171c1a49f",
    notFoundPage: () => Promise.resolve(() => <div>404 - Page Not Found</div>),
    isReducedMotion: true,
    localeId,
    locales,
  });

  return content;
}
