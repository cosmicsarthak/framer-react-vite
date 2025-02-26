import {
  Aa as I,
  Fa as w,
  Q as y,
  Ra as P,
  S as p,
  U as n,
  V as R,
  W as F,
  X as k,
  Y as _,
  aa as b,
  e as c,
  fa as v,
  ha as E,
  i as h,
  lb as S,
} from "./chunk-NAESFJNX.mjs";
import "./chunk-JR5VT52U.mjs";
import { c as r } from "./chunk-Y5FTINFI.mjs";
var T = "default" in p ? y : p,
  d = {},
  M = T;
d.createRoot = M.createRoot;
d.hydrateRoot = M.hydrateRoot;
var O = d.createRoot,
  z = d.hydrateRoot;
var u = {
    augiA20Il: {
      elements: {},
      page: n(
        () =>
          import("./5Yjfdqumrd598d0Bgxk3o3F43gFwWINSb2OvFV_IwH0.2LH3ZX66.mjs"),
      ),
      path: "/",
    },
    Z1o48jX66: {
      elements: {},
      page: n(
        () =>
          import("./TtU91rlwra8zFqk6Ymn5XoYIk0SaHXpMc6X6l5kmJfU.JCL3WOTD.mjs"),
      ),
      path: "/about",
    },
    JoVJkkCak: {
      collectionId: "TYK5zFM4J",
      elements: {
        AZEO4C012: "detail-head",
        DZuky0fx2: "head-1",
        HEyBqOSHU: "detail",
        jCgwSWz4B: "catalog-trigger",
        XDYwJy2tw: "head",
      },
      page: n(
        () =>
          import("./Mg3SXq1sM3adUQVB51WVAo7cD4tplCG76x6HCIQ865s.RZBY6JJK.mjs"),
      ),
      path: "/blog/:FBN3s_gfM",
    },
    Ybl2KOy0F: { page: n(() => import("./Ybl2KOy0F-RYLQ6HG3.mjs")) },
  },
  x = [{ code: "en", id: "default", name: "English", slug: "" }];
async function C({ routeId: t, pathVariables: o, localeId: a }) {
  await u[t].page.preload();
  let s = c(w, {
      isWebsite: !0,
      routeId: t,
      pathVariables: o,
      routes: u,
      collectionUtils: {
        TYK5zFM4J: async () =>
          (
            await import(
              "./8kQmbvD0kXKBZIpzzEorUqqm_2VkU8SGJeufXSiSUuA.QX5JQ5WE.mjs"
            )
          )?.utils,
      },
      framerSiteId:
        "dfafbaa85046da8350a0a1fb65a0defba26acca23e398967f8567c0171c1a49f",
      notFoundPage: n(() => import("./SitesNotFoundPage.js@1.1-YQDMFK6Y.mjs")),
      isReducedMotion: !0,
      localeId: a,
      locales: x,
      preserveQueryParams: void 0,
    }),
    i = c(I, {
      children: s,
      value: {
        enableAsyncURLUpdates: !0,
        replaceNestedLinks: !0,
        useGranularSuspense: !0,
        wrapUpdatesInTransitions: !1,
      },
    });
  return c(R, { children: i, value: { routes: {} } });
}
var B = typeof document < "u";
if (B) {
  (r.__framer_importFromPackage = (o, a) => () =>
    c(v, {
      error: 'Package component not supported: "' + a + '" in "' + o + '"',
    })),
    (r.process = {
      ...r.process,
      env: { ...(r.process ? r.process.env : void 0), NODE_ENV: "production" },
    }),
    (r.__framer_events = r.__framer_events || []),
    E();
  let t = document.getElementById("main");
  "framerHydrateV2" in t.dataset ? V(!0, t) : V(!1, t);
}
function D() {
  B && r.__framer_events.push(arguments);
}
async function V(t, o) {
  try {
    let g = function (e, H) {
        let m = H?.componentStack;
        console.warn(
          "Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.",
          e,
          m,
        ),
          !(Math.random() > 0.01) &&
            D("published_site_load_recoverable_error", {
              message: String(e),
              componentStack: m,
              stack: m
                ? void 0
                : e instanceof Error && typeof e.stack == "string"
                  ? e.stack
                  : null,
            });
      },
      a,
      s,
      i,
      l;
    if (t) {
      let e = JSON.parse(o.dataset.framerHydrateV2);
      (a = e.routeId),
        (s = e.localeId),
        (i = e.pathVariables),
        (l = e.breakpoints);
    } else {
      let e = b(u, decodeURIComponent(location.pathname), !0, x);
      (a = e.routeId), (s = e.localeId), (i = e.pathVariables);
    }
    let f = await C({ routeId: a, localeId: s, pathVariables: i });
    t
      ? (S("framer-rewrite-breakpoints", () => {
          P(l), r.__framer_onRewriteBreakpoints?.(l);
        }),
        h(() => {
          F(), _(), k(), z(o, f, { onRecoverableError: g });
        }))
      : O(o, { onRecoverableError: g }).render(f);
  } catch (a) {
    throw (
      (D("published_site_load_error", {
        message: String(a),
        stack:
          a instanceof Error && typeof a.stack == "string" ? a.stack : null,
      }),
      a)
    );
  }
}
export { C as getPageRoot };
//# sourceMappingURL=script_main.GSY7DNMY.mjs.map
