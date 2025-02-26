import { a as Xe, s as ue } from "./chunk-NAESFJNX.mjs";
var xn = "default" in ue ? Xe : ue,
  ne = {},
  Er = xn;
function h(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var $ = Object.prototype.hasOwnProperty,
  wn =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mt = {},
  Bt = {};
function Tr(e) {
  return $.call(Bt, e)
    ? !0
    : $.call(Mt, e)
      ? !1
      : wn.test(e)
        ? (Bt[e] = !0)
        : ((Mt[e] = !0), !1);
}
function F(e, t, r, n, o, u, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = u),
    (this.removeEmptyString = a);
}
var C = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    C[e] = new F(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  C[t] = new F(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  C[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  C[e] = new F(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    C[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  C[e] = new F(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  C[e] = new F(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  C[e] = new F(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  C[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ht = /[\-:]([a-z])/g;
function gt(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ht, gt);
    C[t] = new F(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ht, gt);
    C[t] = new F(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ht, gt);
  C[t] = new F(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  C[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
C.xlinkHref = new F(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  C[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var xe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Cn = ["Webkit", "ms", "Moz", "O"];
Object.keys(xe).forEach(function (e) {
  Cn.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xe[t] = xe[e]);
  });
});
var En = /["'&<>]/;
function T(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = En.exec(e);
  if (t) {
    var r,
      n = "",
      o = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      o !== r && (n += e.substring(o, r)), (o = r + 1), (n += t);
    }
    e = o !== r ? n + e.substring(o, r) : n;
  }
  return e;
}
var Tn = /([A-Z])/g,
  Fn = /^ms-/,
  ot = Array.isArray;
function j(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Rn(e, t, r) {
  switch (t) {
    case "select":
      return j(1, r.value != null ? r.value : r.defaultValue);
    case "svg":
      return j(2, null);
    case "math":
      return j(3, null);
    case "foreignObject":
      return j(1, null);
    case "table":
      return j(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return j(5, null);
    case "colgroup":
      return j(7, null);
    case "tr":
      return j(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? j(1, null) : e;
}
var Dt = new Map();
function Fr(e, t, r) {
  if (typeof r != "object") throw Error(h(62));
  t = !0;
  for (var n in r)
    if ($.call(r, n)) {
      var o = r[n];
      if (o != null && typeof o != "boolean" && o !== "") {
        if (n.indexOf("--") === 0) {
          var u = T(n);
          o = T(("" + o).trim());
        } else {
          u = n;
          var a = Dt.get(u);
          a !== void 0 ||
            ((a = T(u.replace(Tn, "-$1").toLowerCase().replace(Fn, "-ms-"))),
            Dt.set(u, a)),
            (u = a),
            (o =
              typeof o == "number"
                ? o === 0 || $.call(xe, n)
                  ? "" + o
                  : o + "px"
                : T(("" + o).trim()));
        }
        t ? ((t = !1), e.push(' style="', u, ":", o)) : e.push(";", u, ":", o);
      }
    }
  t || e.push('"');
}
function P(e, t, r, n) {
  switch (r) {
    case "style":
      Fr(e, t, n);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (
    !(2 < r.length) ||
    (r[0] !== "o" && r[0] !== "O") ||
    (r[1] !== "n" && r[1] !== "N")
  ) {
    if (((t = C.hasOwnProperty(r) ? C[r] : null), t !== null)) {
      switch (typeof n) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (((r = t.attributeName), t.type)) {
        case 3:
          n && e.push(" ", r, '=""');
          break;
        case 4:
          n === !0
            ? e.push(" ", r, '=""')
            : n !== !1 && e.push(" ", r, '="', T(n), '"');
          break;
        case 5:
          isNaN(n) || e.push(" ", r, '="', T(n), '"');
          break;
        case 6:
          !isNaN(n) && 1 <= n && e.push(" ", r, '="', T(n), '"');
          break;
        default:
          t.sanitizeURL && (n = "" + n), e.push(" ", r, '="', T(n), '"');
      }
    } else if (Tr(r)) {
      switch (typeof n) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (
            ((t = r.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-")
          )
            return;
      }
      e.push(" ", r, '="', T(n), '"');
    }
  }
}
function we(e, t, r) {
  if (t != null) {
    if (r != null) throw Error(h(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(h(61));
    (t = t.__html), t != null && e.push("" + t);
  }
}
function $n(e) {
  var t = "";
  return (
    Er.Children.forEach(e, function (r) {
      r != null && (t += r);
    }),
    t
  );
}
function Ge(e, t, r, n) {
  e.push(V(r));
  var o,
    u = (r = null);
  for (o in t)
    if ($.call(t, o)) {
      var a = t[o];
      if (a != null)
        switch (o) {
          case "children":
            r = a;
            break;
          case "dangerouslySetInnerHTML":
            u = a;
            break;
          default:
            P(e, n, o, a);
        }
    }
  return (
    e.push(">"), we(e, u, r), typeof r == "string" ? (e.push(T(r)), null) : r
  );
}
var _n = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
  Nt = new Map();
function V(e) {
  var t = Nt.get(e);
  if (t === void 0) {
    if (!_n.test(e)) throw Error(h(65, e));
    (t = "<" + e), Nt.set(e, t);
  }
  return t;
}
function Pn(e, t, r, n, o) {
  switch (t) {
    case "select":
      e.push(V("select"));
      var u = null,
        a = null;
      for (c in r)
        if ($.call(r, c)) {
          var l = r[c];
          if (l != null)
            switch (c) {
              case "children":
                u = l;
                break;
              case "dangerouslySetInnerHTML":
                a = l;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                P(e, n, c, l);
            }
        }
      return e.push(">"), we(e, a, u), u;
    case "option":
      (a = o.selectedValue), e.push(V("option"));
      var i = (l = null),
        s = null,
        c = null;
      for (u in r)
        if ($.call(r, u)) {
          var p = r[u];
          if (p != null)
            switch (u) {
              case "children":
                l = p;
                break;
              case "selected":
                s = p;
                break;
              case "dangerouslySetInnerHTML":
                c = p;
                break;
              case "value":
                i = p;
              default:
                P(e, n, u, p);
            }
        }
      if (a != null)
        if (((r = i !== null ? "" + i : $n(l)), ot(a))) {
          for (n = 0; n < a.length; n++)
            if ("" + a[n] === r) {
              e.push(' selected=""');
              break;
            }
        } else "" + a === r && e.push(' selected=""');
      else s && e.push(' selected=""');
      return e.push(">"), we(e, c, l), l;
    case "textarea":
      e.push(V("textarea")), (c = a = u = null);
      for (l in r)
        if ($.call(r, l) && ((i = r[l]), i != null))
          switch (l) {
            case "children":
              c = i;
              break;
            case "value":
              u = i;
              break;
            case "defaultValue":
              a = i;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(h(91));
            default:
              P(e, n, l, i);
          }
      if ((u === null && a !== null && (u = a), e.push(">"), c != null)) {
        if (u != null) throw Error(h(92));
        if (ot(c) && 1 < c.length) throw Error(h(93));
        u = "" + c;
      }
      return (
        typeof u == "string" &&
          u[0] ===
            `
` &&
          e.push(`
`),
        u !== null && e.push(T("" + u)),
        null
      );
    case "input":
      e.push(V("input")), (i = c = l = u = null);
      for (a in r)
        if ($.call(r, a) && ((s = r[a]), s != null))
          switch (a) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(h(399, "input"));
            case "defaultChecked":
              i = s;
              break;
            case "defaultValue":
              l = s;
              break;
            case "checked":
              c = s;
              break;
            case "value":
              u = s;
              break;
            default:
              P(e, n, a, s);
          }
      return (
        c !== null
          ? P(e, n, "checked", c)
          : i !== null && P(e, n, "checked", i),
        u !== null ? P(e, n, "value", u) : l !== null && P(e, n, "value", l),
        e.push("/>"),
        null
      );
    case "menuitem":
      e.push(V("menuitem"));
      for (var S in r)
        if ($.call(r, S) && ((u = r[S]), u != null))
          switch (S) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(h(400));
            default:
              P(e, n, S, u);
          }
      return e.push(">"), null;
    case "title":
      e.push(V("title")), (u = null);
      for (p in r)
        if ($.call(r, p) && ((a = r[p]), a != null))
          switch (p) {
            case "children":
              u = a;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(h(434));
            default:
              P(e, n, p, a);
          }
      return e.push(">"), u;
    case "listing":
    case "pre":
      e.push(V(t)), (a = u = null);
      for (i in r)
        if ($.call(r, i) && ((l = r[i]), l != null))
          switch (i) {
            case "children":
              u = l;
              break;
            case "dangerouslySetInnerHTML":
              a = l;
              break;
            default:
              P(e, n, i, l);
          }
      if ((e.push(">"), a != null)) {
        if (u != null) throw Error(h(60));
        if (typeof a != "object" || !("__html" in a)) throw Error(h(61));
        (r = a.__html),
          r != null &&
            (typeof r == "string" &&
            0 < r.length &&
            r[0] ===
              `
`
              ? e.push(
                  `
`,
                  r,
                )
              : e.push("" + r));
      }
      return (
        typeof u == "string" &&
          u[0] ===
            `
` &&
          e.push(`
`),
        u
      );
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(V(t));
      for (var x in r)
        if ($.call(r, x) && ((u = r[x]), u != null))
          switch (x) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(h(399, t));
            default:
              P(e, n, x, u);
          }
      return e.push("/>"), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Ge(e, r, t, n);
    case "html":
      return o.insertionMode === 0 && e.push("<!DOCTYPE html>"), Ge(e, r, t, n);
    default:
      if (t.indexOf("-") === -1 && typeof r.is != "string")
        return Ge(e, r, t, n);
      e.push(V(t)), (a = u = null);
      for (s in r)
        if ($.call(r, s) && ((l = r[s]), l != null))
          switch (s) {
            case "children":
              u = l;
              break;
            case "dangerouslySetInnerHTML":
              a = l;
              break;
            case "style":
              Fr(e, n, l);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              Tr(s) &&
                typeof l != "function" &&
                typeof l != "symbol" &&
                e.push(" ", s, '="', T(l), '"');
          }
      return e.push(">"), we(e, a, u), u;
  }
}
function zt(e, t, r) {
  if ((e.push('<!--$?--><template id="'), r === null)) throw Error(h(395));
  return e.push(r), e.push('"></template>');
}
function In(e, t, r, n) {
  switch (r.insertionMode) {
    case 0:
    case 1:
      return (
        e.push('<div hidden id="'),
        e.push(t.segmentPrefix),
        (t = n.toString(16)),
        e.push(t),
        e.push('">')
      );
    case 2:
      return (
        e.push('<svg aria-hidden="true" style="display:none" id="'),
        e.push(t.segmentPrefix),
        (t = n.toString(16)),
        e.push(t),
        e.push('">')
      );
    case 3:
      return (
        e.push('<math aria-hidden="true" style="display:none" id="'),
        e.push(t.segmentPrefix),
        (t = n.toString(16)),
        e.push(t),
        e.push('">')
      );
    case 4:
      return (
        e.push('<table hidden id="'),
        e.push(t.segmentPrefix),
        (t = n.toString(16)),
        e.push(t),
        e.push('">')
      );
    case 5:
      return (
        e.push('<table hidden><tbody id="'),
        e.push(t.segmentPrefix),
        (t = n.toString(16)),
        e.push(t),
        e.push('">')
      );
    case 6:
      return (
        e.push('<table hidden><tr id="'),
        e.push(t.segmentPrefix),
        (t = n.toString(16)),
        e.push(t),
        e.push('">')
      );
    case 7:
      return (
        e.push('<table hidden><colgroup id="'),
        e.push(t.segmentPrefix),
        (t = n.toString(16)),
        e.push(t),
        e.push('">')
      );
    default:
      throw Error(h(397));
  }
}
function Mn(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push("</div>");
    case 2:
      return e.push("</svg>");
    case 3:
      return e.push("</math>");
    case 4:
      return e.push("</table>");
    case 5:
      return e.push("</tbody></table>");
    case 6:
      return e.push("</tr></table>");
    case 7:
      return e.push("</colgroup></table>");
    default:
      throw Error(h(397));
  }
}
var Bn = /[<\u2028\u2029]/g;
function Je(e) {
  return JSON.stringify(e).replace(Bn, function (t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error(
          "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React",
        );
    }
  });
}
function Dn(e, t) {
  return (
    (t = t === void 0 ? "" : t),
    {
      bootstrapChunks: [],
      startInlineScript: "<script>",
      placeholderPrefix: t + "P:",
      segmentPrefix: t + "S:",
      boundaryPrefix: t + "B:",
      idPrefix: t,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
      generateStaticMarkup: e,
    }
  );
}
function Vt(e, t, r, n) {
  return r.generateStaticMarkup
    ? (e.push(T(t)), !1)
    : (t === "" ? (e = n) : (n && e.push("<!-- -->"), e.push(T(t)), (e = !0)),
      e);
}
var ce = Object.assign,
  Nn = Symbol.for("react.element"),
  Rr = Symbol.for("react.portal"),
  $r = Symbol.for("react.fragment"),
  _r = Symbol.for("react.strict_mode"),
  Pr = Symbol.for("react.profiler"),
  Ir = Symbol.for("react.provider"),
  Mr = Symbol.for("react.context"),
  Br = Symbol.for("react.forward_ref"),
  Dr = Symbol.for("react.suspense"),
  Nr = Symbol.for("react.suspense_list"),
  zr = Symbol.for("react.memo"),
  mt = Symbol.for("react.lazy"),
  zn = Symbol.for("react.scope"),
  Vn = Symbol.for("react.debug_trace_mode"),
  Ln = Symbol.for("react.legacy_hidden"),
  On = Symbol.for("react.default_value"),
  Lt = Symbol.iterator;
function ut(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $r:
      return "Fragment";
    case Rr:
      return "Portal";
    case Pr:
      return "Profiler";
    case _r:
      return "StrictMode";
    case Dr:
      return "Suspense";
    case Nr:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Mr:
        return (e.displayName || "Context") + ".Consumer";
      case Ir:
        return (e._context.displayName || "Context") + ".Provider";
      case Br:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zr:
        return (
          (t = e.displayName || null), t !== null ? t : ut(e.type) || "Memo"
        );
      case mt:
        (t = e._payload), (e = e._init);
        try {
          return ut(e(t));
        } catch {}
    }
  return null;
}
var Vr = {};
function Ot(e, t) {
  if (((e = e.contextTypes), !e)) return Vr;
  var r,
    n = {};
  for (r in e) n[r] = t[r];
  return n;
}
var ee = null;
function je(e, t) {
  if (e !== t) {
    (e.context._currentValue2 = e.parentValue), (e = e.parent);
    var r = t.parent;
    if (e === null) {
      if (r !== null) throw Error(h(401));
    } else {
      if (r === null) throw Error(h(401));
      je(e, r);
    }
    t.context._currentValue2 = t.value;
  }
}
function Lr(e) {
  (e.context._currentValue2 = e.parentValue),
    (e = e.parent),
    e !== null && Lr(e);
}
function Or(e) {
  var t = e.parent;
  t !== null && Or(t), (e.context._currentValue2 = e.value);
}
function Ar(e, t) {
  if (((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null))
    throw Error(h(402));
  e.depth === t.depth ? je(e, t) : Ar(e, t);
}
function jr(e, t) {
  var r = t.parent;
  if (r === null) throw Error(h(402));
  e.depth === r.depth ? je(e, r) : jr(e, r),
    (t.context._currentValue2 = t.value);
}
function Ie(e) {
  var t = ee;
  t !== e &&
    (t === null
      ? Or(e)
      : e === null
        ? Lr(t)
        : t.depth === e.depth
          ? je(t, e)
          : t.depth > e.depth
            ? Ar(t, e)
            : jr(t, e),
    (ee = e));
}
var At = {
  isMounted: function () {
    return !1;
  },
  enqueueSetState: function (e, t) {
    (e = e._reactInternals), e.queue !== null && e.queue.push(t);
  },
  enqueueReplaceState: function (e, t) {
    (e = e._reactInternals), (e.replace = !0), (e.queue = [t]);
  },
  enqueueForceUpdate: function () {},
};
function jt(e, t, r, n) {
  var o = e.state !== void 0 ? e.state : null;
  (e.updater = At), (e.props = r), (e.state = o);
  var u = { queue: [], replace: !1 };
  e._reactInternals = u;
  var a = t.contextType;
  if (
    ((e.context = typeof a == "object" && a !== null ? a._currentValue2 : n),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" &&
      ((a = a(r, o)), (o = a == null ? o : ce({}, o, a)), (e.state = o)),
    typeof t.getDerivedStateFromProps != "function" &&
      typeof e.getSnapshotBeforeUpdate != "function" &&
      (typeof e.UNSAFE_componentWillMount == "function" ||
        typeof e.componentWillMount == "function"))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == "function" && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == "function" &&
        e.UNSAFE_componentWillMount(),
      t !== e.state && At.enqueueReplaceState(e, e.state, null),
      u.queue !== null && 0 < u.queue.length)
    )
      if (
        ((t = u.queue),
        (a = u.replace),
        (u.queue = null),
        (u.replace = !1),
        a && t.length === 1)
      )
        e.state = t[0];
      else {
        for (u = a ? t[0] : e.state, o = !0, a = a ? 1 : 0; a < t.length; a++) {
          var l = t[a];
          (l = typeof l == "function" ? l.call(e, u, r, n) : l),
            l != null && (o ? ((o = !1), (u = ce({}, u, l))) : ce(u, l));
        }
        e.state = u;
      }
    else u.queue = null;
}
var An = { id: 1, overflow: "" };
function at(e, t, r) {
  var n = e.id;
  e = e.overflow;
  var o = 32 - Ce(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var u = 32 - Ce(t) + o;
  if (30 < u) {
    var a = o - (o % 5);
    return (
      (u = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      { id: (1 << (32 - Ce(t) + o)) | (r << o) | n, overflow: u + e }
    );
  }
  return { id: (1 << u) | (r << o) | n, overflow: e };
}
var Ce = Math.clz32 ? Math.clz32 : Hn,
  jn = Math.log,
  qn = Math.LN2;
function Hn(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((jn(e) / qn) | 0)) | 0;
}
function Un(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Wn = typeof Object.is == "function" ? Object.is : Un,
  q = null,
  bt = null,
  Ee = null,
  b = null,
  ae = !1,
  Me = !1,
  fe = 0,
  Z = null,
  qe = 0;
function Y() {
  if (q === null) throw Error(h(321));
  return q;
}
function qt() {
  if (0 < qe) throw Error(h(312));
  return { memoizedState: null, queue: null, next: null };
}
function yt() {
  return (
    b === null
      ? Ee === null
        ? ((ae = !1), (Ee = b = qt()))
        : ((ae = !0), (b = Ee))
      : b.next === null
        ? ((ae = !1), (b = b.next = qt()))
        : ((ae = !0), (b = b.next)),
    b
  );
}
function vt() {
  (bt = q = null), (Me = !1), (Ee = null), (qe = 0), (b = Z = null);
}
function qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ht(e, t, r) {
  if (((q = Y()), (b = yt()), ae)) {
    var n = b.queue;
    if (((t = n.dispatch), Z !== null && ((r = Z.get(n)), r !== void 0))) {
      Z.delete(n), (n = b.memoizedState);
      do (n = e(n, r.action)), (r = r.next);
      while (r !== null);
      return (b.memoizedState = n), [n, t];
    }
    return [b.memoizedState, t];
  }
  return (
    (e =
      e === qr ? (typeof t == "function" ? t() : t) : r !== void 0 ? r(t) : t),
    (b.memoizedState = e),
    (e = b.queue = { last: null, dispatch: null }),
    (e = e.dispatch = Zn.bind(null, q, e)),
    [b.memoizedState, e]
  );
}
function Ut(e, t) {
  if (((q = Y()), (b = yt()), (t = t === void 0 ? null : t), b !== null)) {
    var r = b.memoizedState;
    if (r !== null && t !== null) {
      var n = r[1];
      e: if (n === null) n = !1;
      else {
        for (var o = 0; o < n.length && o < t.length; o++)
          if (!Wn(t[o], n[o])) {
            n = !1;
            break e;
          }
        n = !0;
      }
      if (n) return r[0];
    }
  }
  return (e = e()), (b.memoizedState = [e, t]), e;
}
function Zn(e, t, r) {
  if (25 <= qe) throw Error(h(301));
  if (e === q)
    if (
      ((Me = !0),
      (e = { action: r, next: null }),
      Z === null && (Z = new Map()),
      (r = Z.get(t)),
      r === void 0)
    )
      Z.set(t, e);
    else {
      for (t = r; t.next !== null; ) t = t.next;
      t.next = e;
    }
}
function Xn() {
  throw Error(h(394));
}
function ye() {}
var Wt = {
    readContext: function (e) {
      return e._currentValue2;
    },
    useContext: function (e) {
      return Y(), e._currentValue2;
    },
    useMemo: Ut,
    useReducer: Ht,
    useRef: function (e) {
      (q = Y()), (b = yt());
      var t = b.memoizedState;
      return t === null ? ((e = { current: e }), (b.memoizedState = e)) : t;
    },
    useState: function (e) {
      return Ht(qr, e);
    },
    useInsertionEffect: ye,
    useLayoutEffect: function () {},
    useCallback: function (e, t) {
      return Ut(function () {
        return e;
      }, t);
    },
    useImperativeHandle: ye,
    useEffect: ye,
    useDebugValue: ye,
    useDeferredValue: function (e) {
      return Y(), e;
    },
    useTransition: function () {
      return Y(), [!1, Xn];
    },
    useId: function () {
      var e = bt.treeContext,
        t = e.overflow;
      (e = e.id), (e = (e & ~(1 << (32 - Ce(e) - 1))).toString(32) + t);
      var r = Te;
      if (r === null) throw Error(h(404));
      return (
        (t = fe++),
        (e = ":" + r.idPrefix + "R" + e),
        0 < t && (e += "H" + t.toString(32)),
        e + ":"
      );
    },
    useMutableSource: function (e, t) {
      return Y(), t(e._source);
    },
    useSyncExternalStore: function (e, t, r) {
      if (r === void 0) throw Error(h(407));
      return r();
    },
  },
  Te = null,
  Ye =
    Er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      .ReactCurrentDispatcher;
function Gn(e) {
  return console.error(e), null;
}
function le() {}
function Jn(e, t, r, n, o, u, a, l, i) {
  var s = [],
    c = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: n === void 0 ? 12800 : n,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: c,
      pingedTasks: s,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: o === void 0 ? Gn : o,
      onAllReady: u === void 0 ? le : u,
      onShellReady: a === void 0 ? le : a,
      onShellError: l === void 0 ? le : l,
      onFatalError: i === void 0 ? le : i,
    }),
    (r = Be(t, 0, null, r, !1, !1)),
    (r.parentFlushed = !0),
    (e = St(t, e, null, r, c, Vr, null, An)),
    s.push(e),
    t
  );
}
function St(e, t, r, n, o, u, a, l) {
  e.allPendingTasks++, r === null ? e.pendingRootTasks++ : r.pendingTasks++;
  var i = {
    node: t,
    ping: function () {
      var s = e.pingedTasks;
      s.push(i), s.length === 1 && Wr(e);
    },
    blockedBoundary: r,
    blockedSegment: n,
    abortSet: o,
    legacyContext: u,
    context: a,
    treeContext: l,
  };
  return o.add(i), i;
}
function Be(e, t, r, n, o, u) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: n,
    boundary: r,
    lastPushedText: o,
    textEmbedded: u,
  };
}
function pe(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != "string"))
    throw Error(
      'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
        typeof e +
        '" instead',
    );
  return e;
}
function De(e, t) {
  var r = e.onShellError;
  r(t),
    (r = e.onFatalError),
    r(t),
    e.destination !== null
      ? ((e.status = 2), e.destination.destroy(t))
      : ((e.status = 1), (e.fatalError = t));
}
function Zt(e, t, r, n, o) {
  for (q = {}, bt = t, fe = 0, e = r(n, o); Me; )
    (Me = !1), (fe = 0), (qe += 1), (b = null), (e = r(n, o));
  return vt(), e;
}
function Xt(e, t, r, n) {
  var o = r.render(),
    u = n.childContextTypes;
  if (u != null) {
    var a = t.legacyContext;
    if (typeof r.getChildContext != "function") n = a;
    else {
      r = r.getChildContext();
      for (var l in r)
        if (!(l in u)) throw Error(h(108, ut(n) || "Unknown", l));
      n = ce({}, a, r);
    }
    (t.legacyContext = n), M(e, t, o), (t.legacyContext = a);
  } else M(e, t, o);
}
function Gt(e, t) {
  if (e && e.defaultProps) {
    (t = ce({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function lt(e, t, r, n, o) {
  if (typeof r == "function")
    if (r.prototype && r.prototype.isReactComponent) {
      o = Ot(r, t.legacyContext);
      var u = r.contextType;
      (u = new r(n, typeof u == "object" && u !== null ? u._currentValue2 : o)),
        jt(u, r, n, o),
        Xt(e, t, u, r);
    } else {
      (u = Ot(r, t.legacyContext)), (o = Zt(e, t, r, n, u));
      var a = fe !== 0;
      if (
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
      )
        jt(o, r, n, u), Xt(e, t, o, r);
      else if (a) {
        (n = t.treeContext), (t.treeContext = at(n, 1, 0));
        try {
          M(e, t, o);
        } finally {
          t.treeContext = n;
        }
      } else M(e, t, o);
    }
  else {
    if (typeof r != "string") {
      switch (r) {
        case Ln:
        case Vn:
        case _r:
        case Pr:
        case $r:
          M(e, t, n.children);
          return;
        case Nr:
          M(e, t, n.children);
          return;
        case zn:
          throw Error(h(343));
        case Dr:
          e: {
            (r = t.blockedBoundary),
              (o = t.blockedSegment),
              (u = n.fallback),
              (n = n.children),
              (a = new Set());
            var l = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: a,
                errorDigest: null,
              },
              i = Be(e, o.chunks.length, l, o.formatContext, !1, !1);
            o.children.push(i), (o.lastPushedText = !1);
            var s = Be(e, 0, null, o.formatContext, !1, !1);
            (s.parentFlushed = !0),
              (t.blockedBoundary = l),
              (t.blockedSegment = s);
            try {
              if (
                (it(e, t, n),
                e.responseState.generateStaticMarkup ||
                  (s.lastPushedText &&
                    s.textEmbedded &&
                    s.chunks.push("<!-- -->")),
                (s.status = 1),
                Ne(l, s),
                l.pendingTasks === 0)
              )
                break e;
            } catch (c) {
              (s.status = 4),
                (l.forceClientRender = !0),
                (l.errorDigest = pe(e, c));
            } finally {
              (t.blockedBoundary = r), (t.blockedSegment = o);
            }
            (t = St(e, u, r, i, a, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t);
          }
          return;
      }
      if (typeof r == "object" && r !== null)
        switch (r.$$typeof) {
          case Br:
            if (((n = Zt(e, t, r.render, n, o)), fe !== 0)) {
              (r = t.treeContext), (t.treeContext = at(r, 1, 0));
              try {
                M(e, t, n);
              } finally {
                t.treeContext = r;
              }
            } else M(e, t, n);
            return;
          case zr:
            (r = r.type), (n = Gt(r, n)), lt(e, t, r, n, o);
            return;
          case Ir:
            if (
              ((o = n.children),
              (r = r._context),
              (n = n.value),
              (u = r._currentValue2),
              (r._currentValue2 = n),
              (a = ee),
              (ee = n =
                {
                  parent: a,
                  depth: a === null ? 0 : a.depth + 1,
                  context: r,
                  parentValue: u,
                  value: n,
                }),
              (t.context = n),
              M(e, t, o),
              (e = ee),
              e === null)
            )
              throw Error(h(403));
            (n = e.parentValue),
              (e.context._currentValue2 =
                n === On ? e.context._defaultValue : n),
              (e = ee = e.parent),
              (t.context = e);
            return;
          case Mr:
            (n = n.children), (n = n(r._currentValue2)), M(e, t, n);
            return;
          case mt:
            (o = r._init),
              (r = o(r._payload)),
              (n = Gt(r, n)),
              lt(e, t, r, n, void 0);
            return;
        }
      throw Error(h(130, r == null ? r : typeof r, ""));
    }
    switch (
      ((o = t.blockedSegment),
      (u = Pn(o.chunks, r, n, e.responseState, o.formatContext)),
      (o.lastPushedText = !1),
      (a = o.formatContext),
      (o.formatContext = Rn(a, r, n)),
      it(e, t, u),
      (o.formatContext = a),
      r)
    ) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        o.chunks.push("</", r, ">");
    }
    o.lastPushedText = !1;
  }
}
function M(e, t, r) {
  if (((t.node = r), typeof r == "object" && r !== null)) {
    switch (r.$$typeof) {
      case Nn:
        lt(e, t, r.type, r.props, r.ref);
        return;
      case Rr:
        throw Error(h(257));
      case mt:
        var n = r._init;
        (r = n(r._payload)), M(e, t, r);
        return;
    }
    if (ot(r)) {
      Jt(e, t, r);
      return;
    }
    if (
      (r === null || typeof r != "object"
        ? (n = null)
        : ((n = (Lt && r[Lt]) || r["@@iterator"]),
          (n = typeof n == "function" ? n : null)),
      n && (n = n.call(r)))
    ) {
      if (((r = n.next()), !r.done)) {
        var o = [];
        do o.push(r.value), (r = n.next());
        while (!r.done);
        Jt(e, t, o);
      }
      return;
    }
    throw (
      ((e = Object.prototype.toString.call(r)),
      Error(
        h(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(r).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  typeof r == "string"
    ? ((n = t.blockedSegment),
      (n.lastPushedText = Vt(
        t.blockedSegment.chunks,
        r,
        e.responseState,
        n.lastPushedText,
      )))
    : typeof r == "number" &&
      ((n = t.blockedSegment),
      (n.lastPushedText = Vt(
        t.blockedSegment.chunks,
        "" + r,
        e.responseState,
        n.lastPushedText,
      )));
}
function Jt(e, t, r) {
  for (var n = r.length, o = 0; o < n; o++) {
    var u = t.treeContext;
    t.treeContext = at(u, n, o);
    try {
      it(e, t, r[o]);
    } finally {
      t.treeContext = u;
    }
  }
}
function it(e, t, r) {
  var n = t.blockedSegment.formatContext,
    o = t.legacyContext,
    u = t.context;
  try {
    return M(e, t, r);
  } catch (i) {
    if (
      (vt(), typeof i != "object" || i === null || typeof i.then != "function")
    )
      throw (
        ((t.blockedSegment.formatContext = n),
        (t.legacyContext = o),
        (t.context = u),
        Ie(u),
        i)
      );
    r = i;
    var a = t.blockedSegment,
      l = Be(e, a.chunks.length, null, a.formatContext, a.lastPushedText, !0);
    a.children.push(l),
      (a.lastPushedText = !1),
      (e = St(
        e,
        t.node,
        t.blockedBoundary,
        l,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext,
      ).ping),
      r.then(e, e),
      (t.blockedSegment.formatContext = n),
      (t.legacyContext = o),
      (t.context = u),
      Ie(u);
  }
}
function Yn(e) {
  var t = e.blockedBoundary;
  (e = e.blockedSegment), (e.status = 3), Ur(this, t, e);
}
function Hr(e, t, r) {
  var n = e.blockedBoundary;
  (e.blockedSegment.status = 3),
    n === null
      ? (t.allPendingTasks--,
        t.status !== 2 &&
          ((t.status = 2), t.destination !== null && t.destination.push(null)))
      : (n.pendingTasks--,
        n.forceClientRender ||
          ((n.forceClientRender = !0),
          (e = r === void 0 ? Error(h(432)) : r),
          (n.errorDigest = t.onError(e)),
          n.parentFlushed && t.clientRenderedBoundaries.push(n)),
        n.fallbackAbortableTasks.forEach(function (o) {
          return Hr(o, t, r);
        }),
        n.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((n = t.onAllReady), n()));
}
function Ne(e, t) {
  if (
    t.chunks.length === 0 &&
    t.children.length === 1 &&
    t.children[0].boundary === null
  ) {
    var r = t.children[0];
    (r.id = t.id), (r.parentFlushed = !0), r.status === 1 && Ne(e, r);
  } else e.completedSegments.push(t);
}
function Ur(e, t, r) {
  if (t === null) {
    if (r.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(h(389));
      e.completedRootSegment = r;
    }
    e.pendingRootTasks--,
      e.pendingRootTasks === 0 &&
        ((e.onShellError = le), (t = e.onShellReady), t());
  } else
    t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (r.parentFlushed && r.status === 1 && Ne(t, r),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Yn, e),
            t.fallbackAbortableTasks.clear())
          : r.parentFlushed &&
            r.status === 1 &&
            (Ne(t, r),
            t.completedSegments.length === 1 &&
              t.parentFlushed &&
              e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e());
}
function Wr(e) {
  if (e.status !== 2) {
    var t = ee,
      r = Ye.current;
    Ye.current = Wt;
    var n = Te;
    Te = e.responseState;
    try {
      var o,
        u = e.pingedTasks;
      for (o = 0; o < u.length; o++) {
        var a = u[o],
          l = e,
          i = a.blockedSegment;
        if (i.status === 0) {
          Ie(a.context);
          try {
            M(l, a, a.node),
              l.responseState.generateStaticMarkup ||
                (i.lastPushedText &&
                  i.textEmbedded &&
                  i.chunks.push("<!-- -->")),
              a.abortSet.delete(a),
              (i.status = 1),
              Ur(l, a.blockedBoundary, i);
          } catch (k) {
            if (
              (vt(),
              typeof k == "object" && k !== null && typeof k.then == "function")
            ) {
              var s = a.ping;
              k.then(s, s);
            } else {
              a.abortSet.delete(a), (i.status = 4);
              var c = a.blockedBoundary,
                p = k,
                S = pe(l, p);
              if (
                (c === null
                  ? De(l, p)
                  : (c.pendingTasks--,
                    c.forceClientRender ||
                      ((c.forceClientRender = !0),
                      (c.errorDigest = S),
                      c.parentFlushed && l.clientRenderedBoundaries.push(c))),
                l.allPendingTasks--,
                l.allPendingTasks === 0)
              ) {
                var x = l.onAllReady;
                x();
              }
            }
          }
        }
      }
      u.splice(0, o), e.destination !== null && kt(e, e.destination);
    } catch (k) {
      pe(e, k), De(e, k);
    } finally {
      (Te = n), (Ye.current = r), r === Wt && Ie(t);
    }
  }
}
function ve(e, t, r) {
  switch (((r.parentFlushed = !0), r.status)) {
    case 0:
      var n = (r.id = e.nextSegmentId++);
      return (
        (r.lastPushedText = !1),
        (r.textEmbedded = !1),
        (e = e.responseState),
        t.push('<template id="'),
        t.push(e.placeholderPrefix),
        (e = n.toString(16)),
        t.push(e),
        t.push('"></template>')
      );
    case 1:
      r.status = 2;
      var o = !0;
      n = r.chunks;
      var u = 0;
      r = r.children;
      for (var a = 0; a < r.length; a++) {
        for (o = r[a]; u < o.index; u++) t.push(n[u]);
        o = He(e, t, o);
      }
      for (; u < n.length - 1; u++) t.push(n[u]);
      return u < n.length && (o = t.push(n[u])), o;
    default:
      throw Error(h(390));
  }
}
function He(e, t, r) {
  var n = r.boundary;
  if (n === null) return ve(e, t, r);
  if (((n.parentFlushed = !0), n.forceClientRender))
    return (
      e.responseState.generateStaticMarkup ||
        ((n = n.errorDigest),
        t.push("<!--$!-->"),
        t.push("<template"),
        n && (t.push(' data-dgst="'), (n = T(n)), t.push(n), t.push('"')),
        t.push("></template>")),
      ve(e, t, r),
      (e = !!e.responseState.generateStaticMarkup || t.push("<!--/$-->")),
      e
    );
  if (0 < n.pendingTasks) {
    (n.rootSegmentID = e.nextSegmentId++),
      0 < n.completedSegments.length && e.partialBoundaries.push(n);
    var o = e.responseState,
      u = o.nextSuspenseID++;
    return (
      (o = o.boundaryPrefix + u.toString(16)),
      (n = n.id = o),
      zt(t, e.responseState, n),
      ve(e, t, r),
      t.push("<!--/$-->")
    );
  }
  if (n.byteSize > e.progressiveChunkSize)
    return (
      (n.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(n),
      zt(t, e.responseState, n.id),
      ve(e, t, r),
      t.push("<!--/$-->")
    );
  if (
    (e.responseState.generateStaticMarkup || t.push("<!--$-->"),
    (r = n.completedSegments),
    r.length !== 1)
  )
    throw Error(h(391));
  return (
    He(e, t, r[0]),
    (e = !!e.responseState.generateStaticMarkup || t.push("<!--/$-->")),
    e
  );
}
function Yt(e, t, r) {
  return (
    In(t, e.responseState, r.formatContext, r.id),
    He(e, t, r),
    Mn(t, r.formatContext)
  );
}
function Qt(e, t, r) {
  for (var n = r.completedSegments, o = 0; o < n.length; o++) Zr(e, t, r, n[o]);
  if (
    ((n.length = 0),
    (e = e.responseState),
    (n = r.id),
    (r = r.rootSegmentID),
    t.push(e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? t.push('$RC("')
      : ((e.sentCompleteBoundaryFunction = !0),
        t.push(
          'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("',
        )),
    n === null)
  )
    throw Error(h(395));
  return (
    (r = r.toString(16)),
    t.push(n),
    t.push('","'),
    t.push(e.segmentPrefix),
    t.push(r),
    t.push('")<\/script>')
  );
}
function Zr(e, t, r, n) {
  if (n.status === 2) return !0;
  var o = n.id;
  if (o === -1) {
    if ((n.id = r.rootSegmentID) === -1) throw Error(h(392));
    return Yt(e, t, n);
  }
  return (
    Yt(e, t, n),
    (e = e.responseState),
    t.push(e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? t.push('$RS("')
      : ((e.sentCompleteSegmentFunction = !0),
        t.push(
          'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("',
        )),
    t.push(e.segmentPrefix),
    (o = o.toString(16)),
    t.push(o),
    t.push('","'),
    t.push(e.placeholderPrefix),
    t.push(o),
    t.push('")<\/script>')
  );
}
function kt(e, t) {
  try {
    var r = e.completedRootSegment;
    if (r !== null && e.pendingRootTasks === 0) {
      He(e, t, r), (e.completedRootSegment = null);
      var n = e.responseState.bootstrapChunks;
      for (r = 0; r < n.length - 1; r++) t.push(n[r]);
      r < n.length && t.push(n[r]);
    }
    var o,
      u = e.clientRenderedBoundaries;
    for (o = 0; o < u.length; o++) {
      var a = u[o];
      n = t;
      var l = e.responseState,
        i = a.id,
        s = a.errorDigest,
        c = a.errorMessage,
        p = a.errorComponentStack;
      if (
        (n.push(l.startInlineScript),
        l.sentClientRenderFunction
          ? n.push('$RX("')
          : ((l.sentClientRenderFunction = !0),
            n.push(
              'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("',
            )),
        i === null)
      )
        throw Error(h(395));
      if ((n.push(i), n.push('"'), s || c || p)) {
        n.push(",");
        var S = Je(s || "");
        n.push(S);
      }
      if (c || p) {
        n.push(",");
        var x = Je(c || "");
        n.push(x);
      }
      if (p) {
        n.push(",");
        var k = Je(p);
        n.push(k);
      }
      if (!n.push(")<\/script>")) {
        (e.destination = null), o++, u.splice(0, o);
        return;
      }
    }
    u.splice(0, o);
    var A = e.completedBoundaries;
    for (o = 0; o < A.length; o++)
      if (!Qt(e, t, A[o])) {
        (e.destination = null), o++, A.splice(0, o);
        return;
      }
    A.splice(0, o);
    var G = e.partialBoundaries;
    for (o = 0; o < G.length; o++) {
      var J = G[o];
      e: {
        (u = e), (a = t);
        var me = J.completedSegments;
        for (l = 0; l < me.length; l++)
          if (!Zr(u, a, J, me[l])) {
            l++, me.splice(0, l);
            var It = !1;
            break e;
          }
        me.splice(0, l), (It = !0);
      }
      if (!It) {
        (e.destination = null), o++, G.splice(0, o);
        return;
      }
    }
    G.splice(0, o);
    var be = e.completedBoundaries;
    for (o = 0; o < be.length; o++)
      if (!Qt(e, t, be[o])) {
        (e.destination = null), o++, be.splice(0, o);
        return;
      }
    be.splice(0, o);
  } finally {
    e.allPendingTasks === 0 &&
      e.pingedTasks.length === 0 &&
      e.clientRenderedBoundaries.length === 0 &&
      e.completedBoundaries.length === 0 &&
      t.push(null);
  }
}
function Qn(e, t) {
  try {
    var r = e.abortableTasks;
    r.forEach(function (n) {
      return Hr(n, e, t);
    }),
      r.clear(),
      e.destination !== null && kt(e, e.destination);
  } catch (n) {
    pe(e, n), De(e, n);
  }
}
function Kn() {}
function Xr(e, t, r, n) {
  var o = !1,
    u = null,
    a = "",
    l = {
      push: function (s) {
        return s !== null && (a += s), !0;
      },
      destroy: function (s) {
        (o = !0), (u = s);
      },
    },
    i = !1;
  if (
    ((e = Jn(
      e,
      Dn(r, t ? t.identifierPrefix : void 0),
      { insertionMode: 1, selectedValue: null },
      1 / 0,
      Kn,
      void 0,
      function () {
        i = !0;
      },
      void 0,
      void 0,
    )),
    Wr(e),
    Qn(e, n),
    e.status === 1)
  )
    (e.status = 2), l.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = l;
    try {
      kt(e, l);
    } catch (s) {
      pe(e, s), De(e, s);
    }
  }
  if (o) throw u;
  if (!i) throw Error(h(426));
  return a;
}
ne.renderToNodeStream = function () {
  throw Error(h(207));
};
ne.renderToStaticMarkup = function (e, t) {
  return Xr(
    e,
    t,
    !0,
    'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server',
  );
};
ne.renderToStaticNodeStream = function () {
  throw Error(h(208));
};
ne.renderToString = function (e, t) {
  return Xr(
    e,
    t,
    !1,
    'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server',
  );
};
ne.version = "18.2.0";
var eo = "default" in ue ? Xe : ue,
  xt = {},
  Gr = eo;
function g(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var B = null,
  D = 0;
function f(e, t) {
  if (t.length !== 0)
    if (512 < t.length)
      0 < D &&
        (e.enqueue(new Uint8Array(B.buffer, 0, D)),
        (B = new Uint8Array(512)),
        (D = 0)),
        e.enqueue(t);
    else {
      var r = B.length - D;
      r < t.length &&
        (r === 0
          ? e.enqueue(B)
          : (B.set(t.subarray(0, r), D), e.enqueue(B), (t = t.subarray(r))),
        (B = new Uint8Array(512)),
        (D = 0)),
        B.set(t, D),
        (D += t.length);
    }
}
function v(e, t) {
  return f(e, t), !0;
}
function Kt(e) {
  B &&
    0 < D &&
    (e.enqueue(new Uint8Array(B.buffer, 0, D)), (B = null), (D = 0));
}
var Jr = new TextEncoder();
function m(e) {
  return Jr.encode(e);
}
function d(e) {
  return Jr.encode(e);
}
function Yr(e, t) {
  typeof e.error == "function" ? e.error(t) : e.close();
}
var _ = Object.prototype.hasOwnProperty,
  to =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  er = {},
  tr = {};
function Qr(e) {
  return _.call(tr, e)
    ? !0
    : _.call(er, e)
      ? !1
      : to.test(e)
        ? (tr[e] = !0)
        : ((er[e] = !0), !1);
}
function R(e, t, r, n, o, u, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = u),
    (this.removeEmptyString = a);
}
var E = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    E[e] = new R(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  E[t] = new R(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  E[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  E[e] = new R(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    E[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  E[e] = new R(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  E[e] = new R(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  E[e] = new R(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  E[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wt = /[\-:]([a-z])/g;
function Ct(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wt, Ct);
    E[t] = new R(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wt, Ct);
    E[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(wt, Ct);
  E[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  E[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
E.xlinkHref = new R(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  E[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var Fe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ro = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fe).forEach(function (e) {
  ro.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fe[t] = Fe[e]);
  });
});
var no = /["'&<>]/;
function w(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = no.exec(e);
  if (t) {
    var r,
      n = "",
      o = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      o !== r && (n += e.substring(o, r)), (o = r + 1), (n += t);
    }
    e = o !== r ? n + e.substring(o, r) : n;
  }
  return e;
}
var oo = /([A-Z])/g,
  uo = /^ms-/,
  st = Array.isArray,
  ao = d("<script>"),
  lo = d("<\/script>"),
  io = d('<script src="'),
  so = d('<script type="module" src="'),
  rr = d('" async=""><\/script>'),
  co = /(<\/|<)(s)(cript)/gi;
function fo(e, t, r, n) {
  return t + (r === "s" ? "\\u0073" : "\\u0053") + n;
}
function po(e, t, r, n, o) {
  (e = e === void 0 ? "" : e),
    (t = t === void 0 ? ao : d('<script nonce="' + w(t) + '">'));
  var u = [];
  if (
    (r !== void 0 && u.push(t, m(("" + r).replace(co, fo)), lo), n !== void 0)
  )
    for (r = 0; r < n.length; r++) u.push(io, m(w(n[r])), rr);
  if (o !== void 0) for (n = 0; n < o.length; n++) u.push(so, m(w(o[n])), rr);
  return {
    bootstrapChunks: u,
    startInlineScript: t,
    placeholderPrefix: d(e + "P:"),
    segmentPrefix: d(e + "S:"),
    boundaryPrefix: e + "B:",
    idPrefix: e,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
  };
}
function L(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function ho(e) {
  return L(
    e === "http://www.w3.org/2000/svg"
      ? 2
      : e === "http://www.w3.org/1998/Math/MathML"
        ? 3
        : 0,
    null,
  );
}
function go(e, t, r) {
  switch (t) {
    case "select":
      return L(1, r.value != null ? r.value : r.defaultValue);
    case "svg":
      return L(2, null);
    case "math":
      return L(3, null);
    case "foreignObject":
      return L(1, null);
    case "table":
      return L(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return L(5, null);
    case "colgroup":
      return L(7, null);
    case "tr":
      return L(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? L(1, null) : e;
}
var Et = d("<!-- -->");
function nr(e, t, r, n) {
  return t === "" ? n : (n && e.push(Et), e.push(m(w(t))), !0);
}
var or = new Map(),
  mo = d(' style="'),
  ur = d(":"),
  bo = d(";");
function Kr(e, t, r) {
  if (typeof r != "object") throw Error(g(62));
  t = !0;
  for (var n in r)
    if (_.call(r, n)) {
      var o = r[n];
      if (o != null && typeof o != "boolean" && o !== "") {
        if (n.indexOf("--") === 0) {
          var u = m(w(n));
          o = m(w(("" + o).trim()));
        } else {
          u = n;
          var a = or.get(u);
          a !== void 0 ||
            ((a = d(w(u.replace(oo, "-$1").toLowerCase().replace(uo, "-ms-")))),
            or.set(u, a)),
            (u = a),
            (o =
              typeof o == "number"
                ? o === 0 || _.call(Fe, n)
                  ? m("" + o)
                  : m(o + "px")
                : m(w(("" + o).trim())));
        }
        t ? ((t = !1), e.push(mo, u, ur, o)) : e.push(bo, u, ur, o);
      }
    }
  t || e.push(Q);
}
var U = d(" "),
  re = d('="'),
  Q = d('"'),
  ar = d('=""');
function I(e, t, r, n) {
  switch (r) {
    case "style":
      Kr(e, t, n);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (
    !(2 < r.length) ||
    (r[0] !== "o" && r[0] !== "O") ||
    (r[1] !== "n" && r[1] !== "N")
  ) {
    if (((t = E.hasOwnProperty(r) ? E[r] : null), t !== null)) {
      switch (typeof n) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (((r = m(t.attributeName)), t.type)) {
        case 3:
          n && e.push(U, r, ar);
          break;
        case 4:
          n === !0
            ? e.push(U, r, ar)
            : n !== !1 && e.push(U, r, re, m(w(n)), Q);
          break;
        case 5:
          isNaN(n) || e.push(U, r, re, m(w(n)), Q);
          break;
        case 6:
          !isNaN(n) && 1 <= n && e.push(U, r, re, m(w(n)), Q);
          break;
        default:
          t.sanitizeURL && (n = "" + n), e.push(U, r, re, m(w(n)), Q);
      }
    } else if (Qr(r)) {
      switch (typeof n) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (
            ((t = r.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-")
          )
            return;
      }
      e.push(U, m(r), re, m(w(n)), Q);
    }
  }
}
var W = d(">"),
  lr = d("/>");
function Re(e, t, r) {
  if (t != null) {
    if (r != null) throw Error(g(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(g(61));
    (t = t.__html), t != null && e.push(m("" + t));
  }
}
function yo(e) {
  var t = "";
  return (
    Gr.Children.forEach(e, function (r) {
      r != null && (t += r);
    }),
    t
  );
}
var Qe = d(' selected=""');
function Ke(e, t, r, n) {
  e.push(O(r));
  var o,
    u = (r = null);
  for (o in t)
    if (_.call(t, o)) {
      var a = t[o];
      if (a != null)
        switch (o) {
          case "children":
            r = a;
            break;
          case "dangerouslySetInnerHTML":
            u = a;
            break;
          default:
            I(e, n, o, a);
        }
    }
  return (
    e.push(W), Re(e, u, r), typeof r == "string" ? (e.push(m(w(r))), null) : r
  );
}
var et = d(`
`),
  vo = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
  ir = new Map();
function O(e) {
  var t = ir.get(e);
  if (t === void 0) {
    if (!vo.test(e)) throw Error(g(65, e));
    (t = d("<" + e)), ir.set(e, t);
  }
  return t;
}
var So = d("<!DOCTYPE html>");
function ko(e, t, r, n, o) {
  switch (t) {
    case "select":
      e.push(O("select"));
      var u = null,
        a = null;
      for (c in r)
        if (_.call(r, c)) {
          var l = r[c];
          if (l != null)
            switch (c) {
              case "children":
                u = l;
                break;
              case "dangerouslySetInnerHTML":
                a = l;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                I(e, n, c, l);
            }
        }
      return e.push(W), Re(e, a, u), u;
    case "option":
      (a = o.selectedValue), e.push(O("option"));
      var i = (l = null),
        s = null,
        c = null;
      for (u in r)
        if (_.call(r, u)) {
          var p = r[u];
          if (p != null)
            switch (u) {
              case "children":
                l = p;
                break;
              case "selected":
                s = p;
                break;
              case "dangerouslySetInnerHTML":
                c = p;
                break;
              case "value":
                i = p;
              default:
                I(e, n, u, p);
            }
        }
      if (a != null)
        if (((r = i !== null ? "" + i : yo(l)), st(a))) {
          for (n = 0; n < a.length; n++)
            if ("" + a[n] === r) {
              e.push(Qe);
              break;
            }
        } else "" + a === r && e.push(Qe);
      else s && e.push(Qe);
      return e.push(W), Re(e, c, l), l;
    case "textarea":
      e.push(O("textarea")), (c = a = u = null);
      for (l in r)
        if (_.call(r, l) && ((i = r[l]), i != null))
          switch (l) {
            case "children":
              c = i;
              break;
            case "value":
              u = i;
              break;
            case "defaultValue":
              a = i;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(g(91));
            default:
              I(e, n, l, i);
          }
      if ((u === null && a !== null && (u = a), e.push(W), c != null)) {
        if (u != null) throw Error(g(92));
        if (st(c) && 1 < c.length) throw Error(g(93));
        u = "" + c;
      }
      return (
        typeof u == "string" &&
          u[0] ===
            `
` &&
          e.push(et),
        u !== null && e.push(m(w("" + u))),
        null
      );
    case "input":
      e.push(O("input")), (i = c = l = u = null);
      for (a in r)
        if (_.call(r, a) && ((s = r[a]), s != null))
          switch (a) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(g(399, "input"));
            case "defaultChecked":
              i = s;
              break;
            case "defaultValue":
              l = s;
              break;
            case "checked":
              c = s;
              break;
            case "value":
              u = s;
              break;
            default:
              I(e, n, a, s);
          }
      return (
        c !== null
          ? I(e, n, "checked", c)
          : i !== null && I(e, n, "checked", i),
        u !== null ? I(e, n, "value", u) : l !== null && I(e, n, "value", l),
        e.push(lr),
        null
      );
    case "menuitem":
      e.push(O("menuitem"));
      for (var S in r)
        if (_.call(r, S) && ((u = r[S]), u != null))
          switch (S) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(g(400));
            default:
              I(e, n, S, u);
          }
      return e.push(W), null;
    case "title":
      e.push(O("title")), (u = null);
      for (p in r)
        if (_.call(r, p) && ((a = r[p]), a != null))
          switch (p) {
            case "children":
              u = a;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(g(434));
            default:
              I(e, n, p, a);
          }
      return e.push(W), u;
    case "listing":
    case "pre":
      e.push(O(t)), (a = u = null);
      for (i in r)
        if (_.call(r, i) && ((l = r[i]), l != null))
          switch (i) {
            case "children":
              u = l;
              break;
            case "dangerouslySetInnerHTML":
              a = l;
              break;
            default:
              I(e, n, i, l);
          }
      if ((e.push(W), a != null)) {
        if (u != null) throw Error(g(60));
        if (typeof a != "object" || !("__html" in a)) throw Error(g(61));
        (r = a.__html),
          r != null &&
            (typeof r == "string" &&
            0 < r.length &&
            r[0] ===
              `
`
              ? e.push(et, m(r))
              : e.push(m("" + r)));
      }
      return (
        typeof u == "string" &&
          u[0] ===
            `
` &&
          e.push(et),
        u
      );
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(O(t));
      for (var x in r)
        if (_.call(r, x) && ((u = r[x]), u != null))
          switch (x) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(g(399, t));
            default:
              I(e, n, x, u);
          }
      return e.push(lr), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Ke(e, r, t, n);
    case "html":
      return o.insertionMode === 0 && e.push(So), Ke(e, r, t, n);
    default:
      if (t.indexOf("-") === -1 && typeof r.is != "string")
        return Ke(e, r, t, n);
      e.push(O(t)), (a = u = null);
      for (s in r)
        if (_.call(r, s) && ((l = r[s]), l != null))
          switch (s) {
            case "children":
              u = l;
              break;
            case "dangerouslySetInnerHTML":
              a = l;
              break;
            case "style":
              Kr(e, n, l);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              Qr(s) &&
                typeof l != "function" &&
                typeof l != "symbol" &&
                e.push(U, m(s), re, m(w(l)), Q);
          }
      return e.push(W), Re(e, a, u), u;
  }
}
var xo = d("</"),
  wo = d(">"),
  Co = d('<template id="'),
  Eo = d('"></template>'),
  To = d("<!--$-->"),
  Fo = d('<!--$?--><template id="'),
  Ro = d('"></template>'),
  $o = d("<!--$!-->"),
  _o = d("<!--/$-->"),
  Po = d("<template"),
  Io = d('"'),
  Mo = d(' data-dgst="');
d(' data-msg="');
d(' data-stck="');
var Bo = d("></template>");
function sr(e, t, r) {
  if ((f(e, Fo), r === null)) throw Error(g(395));
  return f(e, r), v(e, Ro);
}
var Do = d('<div hidden id="'),
  No = d('">'),
  zo = d("</div>"),
  Vo = d('<svg aria-hidden="true" style="display:none" id="'),
  Lo = d('">'),
  Oo = d("</svg>"),
  Ao = d('<math aria-hidden="true" style="display:none" id="'),
  jo = d('">'),
  qo = d("</math>"),
  Ho = d('<table hidden id="'),
  Uo = d('">'),
  Wo = d("</table>"),
  Zo = d('<table hidden><tbody id="'),
  Xo = d('">'),
  Go = d("</tbody></table>"),
  Jo = d('<table hidden><tr id="'),
  Yo = d('">'),
  Qo = d("</tr></table>"),
  Ko = d('<table hidden><colgroup id="'),
  eu = d('">'),
  tu = d("</colgroup></table>");
function ru(e, t, r, n) {
  switch (r.insertionMode) {
    case 0:
    case 1:
      return f(e, Do), f(e, t.segmentPrefix), f(e, m(n.toString(16))), v(e, No);
    case 2:
      return f(e, Vo), f(e, t.segmentPrefix), f(e, m(n.toString(16))), v(e, Lo);
    case 3:
      return f(e, Ao), f(e, t.segmentPrefix), f(e, m(n.toString(16))), v(e, jo);
    case 4:
      return f(e, Ho), f(e, t.segmentPrefix), f(e, m(n.toString(16))), v(e, Uo);
    case 5:
      return f(e, Zo), f(e, t.segmentPrefix), f(e, m(n.toString(16))), v(e, Xo);
    case 6:
      return f(e, Jo), f(e, t.segmentPrefix), f(e, m(n.toString(16))), v(e, Yo);
    case 7:
      return f(e, Ko), f(e, t.segmentPrefix), f(e, m(n.toString(16))), v(e, eu);
    default:
      throw Error(g(397));
  }
}
function nu(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return v(e, zo);
    case 2:
      return v(e, Oo);
    case 3:
      return v(e, qo);
    case 4:
      return v(e, Wo);
    case 5:
      return v(e, Go);
    case 6:
      return v(e, Qo);
    case 7:
      return v(e, tu);
    default:
      throw Error(g(397));
  }
}
var ou = d(
    'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("',
  ),
  uu = d('$RS("'),
  au = d('","'),
  lu = d('")<\/script>'),
  iu = d(
    'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("',
  ),
  su = d('$RC("'),
  cu = d('","'),
  du = d('")<\/script>'),
  fu = d(
    'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("',
  ),
  pu = d('$RX("'),
  hu = d('"'),
  gu = d(")<\/script>"),
  tt = d(","),
  mu = /[<\u2028\u2029]/g;
function rt(e) {
  return JSON.stringify(e).replace(mu, function (t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error(
          "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React",
        );
    }
  });
}
var de = Object.assign,
  bu = Symbol.for("react.element"),
  en = Symbol.for("react.portal"),
  tn = Symbol.for("react.fragment"),
  rn = Symbol.for("react.strict_mode"),
  nn = Symbol.for("react.profiler"),
  on = Symbol.for("react.provider"),
  un = Symbol.for("react.context"),
  an = Symbol.for("react.forward_ref"),
  ln = Symbol.for("react.suspense"),
  sn = Symbol.for("react.suspense_list"),
  cn = Symbol.for("react.memo"),
  Tt = Symbol.for("react.lazy"),
  yu = Symbol.for("react.scope"),
  vu = Symbol.for("react.debug_trace_mode"),
  Su = Symbol.for("react.legacy_hidden"),
  ku = Symbol.for("react.default_value"),
  cr = Symbol.iterator;
function ct(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case tn:
      return "Fragment";
    case en:
      return "Portal";
    case nn:
      return "Profiler";
    case rn:
      return "StrictMode";
    case ln:
      return "Suspense";
    case sn:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case un:
        return (e.displayName || "Context") + ".Consumer";
      case on:
        return (e._context.displayName || "Context") + ".Provider";
      case an:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case cn:
        return (
          (t = e.displayName || null), t !== null ? t : ct(e.type) || "Memo"
        );
      case Tt:
        (t = e._payload), (e = e._init);
        try {
          return ct(e(t));
        } catch {}
    }
  return null;
}
var dn = {};
function dr(e, t) {
  if (((e = e.contextTypes), !e)) return dn;
  var r,
    n = {};
  for (r in e) n[r] = t[r];
  return n;
}
var te = null;
function Ue(e, t) {
  if (e !== t) {
    (e.context._currentValue = e.parentValue), (e = e.parent);
    var r = t.parent;
    if (e === null) {
      if (r !== null) throw Error(g(401));
    } else {
      if (r === null) throw Error(g(401));
      Ue(e, r);
    }
    t.context._currentValue = t.value;
  }
}
function fn(e) {
  (e.context._currentValue = e.parentValue),
    (e = e.parent),
    e !== null && fn(e);
}
function pn(e) {
  var t = e.parent;
  t !== null && pn(t), (e.context._currentValue = e.value);
}
function hn(e, t) {
  if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null))
    throw Error(g(402));
  e.depth === t.depth ? Ue(e, t) : hn(e, t);
}
function gn(e, t) {
  var r = t.parent;
  if (r === null) throw Error(g(402));
  e.depth === r.depth ? Ue(e, r) : gn(e, r),
    (t.context._currentValue = t.value);
}
function ze(e) {
  var t = te;
  t !== e &&
    (t === null
      ? pn(e)
      : e === null
        ? fn(t)
        : t.depth === e.depth
          ? Ue(t, e)
          : t.depth > e.depth
            ? hn(t, e)
            : gn(t, e),
    (te = e));
}
var fr = {
  isMounted: function () {
    return !1;
  },
  enqueueSetState: function (e, t) {
    (e = e._reactInternals), e.queue !== null && e.queue.push(t);
  },
  enqueueReplaceState: function (e, t) {
    (e = e._reactInternals), (e.replace = !0), (e.queue = [t]);
  },
  enqueueForceUpdate: function () {},
};
function pr(e, t, r, n) {
  var o = e.state !== void 0 ? e.state : null;
  (e.updater = fr), (e.props = r), (e.state = o);
  var u = { queue: [], replace: !1 };
  e._reactInternals = u;
  var a = t.contextType;
  if (
    ((e.context = typeof a == "object" && a !== null ? a._currentValue : n),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" &&
      ((a = a(r, o)), (o = a == null ? o : de({}, o, a)), (e.state = o)),
    typeof t.getDerivedStateFromProps != "function" &&
      typeof e.getSnapshotBeforeUpdate != "function" &&
      (typeof e.UNSAFE_componentWillMount == "function" ||
        typeof e.componentWillMount == "function"))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == "function" && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == "function" &&
        e.UNSAFE_componentWillMount(),
      t !== e.state && fr.enqueueReplaceState(e, e.state, null),
      u.queue !== null && 0 < u.queue.length)
    )
      if (
        ((t = u.queue),
        (a = u.replace),
        (u.queue = null),
        (u.replace = !1),
        a && t.length === 1)
      )
        e.state = t[0];
      else {
        for (u = a ? t[0] : e.state, o = !0, a = a ? 1 : 0; a < t.length; a++) {
          var l = t[a];
          (l = typeof l == "function" ? l.call(e, u, r, n) : l),
            l != null && (o ? ((o = !1), (u = de({}, u, l))) : de(u, l));
        }
        e.state = u;
      }
    else u.queue = null;
}
var xu = { id: 1, overflow: "" };
function dt(e, t, r) {
  var n = e.id;
  e = e.overflow;
  var o = 32 - $e(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var u = 32 - $e(t) + o;
  if (30 < u) {
    var a = o - (o % 5);
    return (
      (u = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      { id: (1 << (32 - $e(t) + o)) | (r << o) | n, overflow: u + e }
    );
  }
  return { id: (1 << u) | (r << o) | n, overflow: e };
}
var $e = Math.clz32 ? Math.clz32 : Eu,
  wu = Math.log,
  Cu = Math.LN2;
function Eu(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wu(e) / Cu) | 0)) | 0;
}
function Tu(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fu = typeof Object.is == "function" ? Object.is : Tu,
  H = null,
  Ft = null,
  _e = null,
  y = null,
  ie = !1,
  Ve = !1,
  he = 0,
  X = null,
  We = 0;
function K() {
  if (H === null) throw Error(g(321));
  return H;
}
function hr() {
  if (0 < We) throw Error(g(312));
  return { memoizedState: null, queue: null, next: null };
}
function Rt() {
  return (
    y === null
      ? _e === null
        ? ((ie = !1), (_e = y = hr()))
        : ((ie = !0), (y = _e))
      : y.next === null
        ? ((ie = !1), (y = y.next = hr()))
        : ((ie = !0), (y = y.next)),
    y
  );
}
function $t() {
  (Ft = H = null), (Ve = !1), (_e = null), (We = 0), (y = X = null);
}
function mn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function gr(e, t, r) {
  if (((H = K()), (y = Rt()), ie)) {
    var n = y.queue;
    if (((t = n.dispatch), X !== null && ((r = X.get(n)), r !== void 0))) {
      X.delete(n), (n = y.memoizedState);
      do (n = e(n, r.action)), (r = r.next);
      while (r !== null);
      return (y.memoizedState = n), [n, t];
    }
    return [y.memoizedState, t];
  }
  return (
    (e =
      e === mn ? (typeof t == "function" ? t() : t) : r !== void 0 ? r(t) : t),
    (y.memoizedState = e),
    (e = y.queue = { last: null, dispatch: null }),
    (e = e.dispatch = Ru.bind(null, H, e)),
    [y.memoizedState, e]
  );
}
function mr(e, t) {
  if (((H = K()), (y = Rt()), (t = t === void 0 ? null : t), y !== null)) {
    var r = y.memoizedState;
    if (r !== null && t !== null) {
      var n = r[1];
      e: if (n === null) n = !1;
      else {
        for (var o = 0; o < n.length && o < t.length; o++)
          if (!Fu(t[o], n[o])) {
            n = !1;
            break e;
          }
        n = !0;
      }
      if (n) return r[0];
    }
  }
  return (e = e()), (y.memoizedState = [e, t]), e;
}
function Ru(e, t, r) {
  if (25 <= We) throw Error(g(301));
  if (e === H)
    if (
      ((Ve = !0),
      (e = { action: r, next: null }),
      X === null && (X = new Map()),
      (r = X.get(t)),
      r === void 0)
    )
      X.set(t, e);
    else {
      for (t = r; t.next !== null; ) t = t.next;
      t.next = e;
    }
}
function $u() {
  throw Error(g(394));
}
function Se() {}
var br = {
    readContext: function (e) {
      return e._currentValue;
    },
    useContext: function (e) {
      return K(), e._currentValue;
    },
    useMemo: mr,
    useReducer: gr,
    useRef: function (e) {
      (H = K()), (y = Rt());
      var t = y.memoizedState;
      return t === null ? ((e = { current: e }), (y.memoizedState = e)) : t;
    },
    useState: function (e) {
      return gr(mn, e);
    },
    useInsertionEffect: Se,
    useLayoutEffect: function () {},
    useCallback: function (e, t) {
      return mr(function () {
        return e;
      }, t);
    },
    useImperativeHandle: Se,
    useEffect: Se,
    useDebugValue: Se,
    useDeferredValue: function (e) {
      return K(), e;
    },
    useTransition: function () {
      return K(), [!1, $u];
    },
    useId: function () {
      var e = Ft.treeContext,
        t = e.overflow;
      (e = e.id), (e = (e & ~(1 << (32 - $e(e) - 1))).toString(32) + t);
      var r = Pe;
      if (r === null) throw Error(g(404));
      return (
        (t = he++),
        (e = ":" + r.idPrefix + "R" + e),
        0 < t && (e += "H" + t.toString(32)),
        e + ":"
      );
    },
    useMutableSource: function (e, t) {
      return K(), t(e._source);
    },
    useSyncExternalStore: function (e, t, r) {
      if (r === void 0) throw Error(g(407));
      return r();
    },
  },
  Pe = null,
  nt =
    Gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      .ReactCurrentDispatcher;
function _u(e) {
  return console.error(e), null;
}
function se() {}
function Pu(e, t, r, n, o, u, a, l, i) {
  var s = [],
    c = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: n === void 0 ? 12800 : n,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: c,
      pingedTasks: s,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: o === void 0 ? _u : o,
      onAllReady: u === void 0 ? se : u,
      onShellReady: a === void 0 ? se : a,
      onShellError: l === void 0 ? se : l,
      onFatalError: i === void 0 ? se : i,
    }),
    (r = Le(t, 0, null, r, !1, !1)),
    (r.parentFlushed = !0),
    (e = _t(t, e, null, r, c, dn, null, xu)),
    s.push(e),
    t
  );
}
function _t(e, t, r, n, o, u, a, l) {
  e.allPendingTasks++, r === null ? e.pendingRootTasks++ : r.pendingTasks++;
  var i = {
    node: t,
    ping: function () {
      var s = e.pingedTasks;
      s.push(i), s.length === 1 && vn(e);
    },
    blockedBoundary: r,
    blockedSegment: n,
    abortSet: o,
    legacyContext: u,
    context: a,
    treeContext: l,
  };
  return o.add(i), i;
}
function Le(e, t, r, n, o, u) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: n,
    boundary: r,
    lastPushedText: o,
    textEmbedded: u,
  };
}
function ge(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != "string"))
    throw Error(
      'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
        typeof e +
        '" instead',
    );
  return e;
}
function Oe(e, t) {
  var r = e.onShellError;
  r(t),
    (r = e.onFatalError),
    r(t),
    e.destination !== null
      ? ((e.status = 2), Yr(e.destination, t))
      : ((e.status = 1), (e.fatalError = t));
}
function yr(e, t, r, n, o) {
  for (H = {}, Ft = t, he = 0, e = r(n, o); Ve; )
    (Ve = !1), (he = 0), (We += 1), (y = null), (e = r(n, o));
  return $t(), e;
}
function vr(e, t, r, n) {
  var o = r.render(),
    u = n.childContextTypes;
  if (u != null) {
    var a = t.legacyContext;
    if (typeof r.getChildContext != "function") n = a;
    else {
      r = r.getChildContext();
      for (var l in r)
        if (!(l in u)) throw Error(g(108, ct(n) || "Unknown", l));
      n = de({}, a, r);
    }
    (t.legacyContext = n), N(e, t, o), (t.legacyContext = a);
  } else N(e, t, o);
}
function Sr(e, t) {
  if (e && e.defaultProps) {
    (t = de({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function ft(e, t, r, n, o) {
  if (typeof r == "function")
    if (r.prototype && r.prototype.isReactComponent) {
      o = dr(r, t.legacyContext);
      var u = r.contextType;
      (u = new r(n, typeof u == "object" && u !== null ? u._currentValue : o)),
        pr(u, r, n, o),
        vr(e, t, u, r);
    } else {
      (u = dr(r, t.legacyContext)), (o = yr(e, t, r, n, u));
      var a = he !== 0;
      if (
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
      )
        pr(o, r, n, u), vr(e, t, o, r);
      else if (a) {
        (n = t.treeContext), (t.treeContext = dt(n, 1, 0));
        try {
          N(e, t, o);
        } finally {
          t.treeContext = n;
        }
      } else N(e, t, o);
    }
  else {
    if (typeof r != "string") {
      switch (r) {
        case Su:
        case vu:
        case rn:
        case nn:
        case tn:
          N(e, t, n.children);
          return;
        case sn:
          N(e, t, n.children);
          return;
        case yu:
          throw Error(g(343));
        case ln:
          e: {
            (r = t.blockedBoundary),
              (o = t.blockedSegment),
              (u = n.fallback),
              (n = n.children),
              (a = new Set());
            var l = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: a,
                errorDigest: null,
              },
              i = Le(e, o.chunks.length, l, o.formatContext, !1, !1);
            o.children.push(i), (o.lastPushedText = !1);
            var s = Le(e, 0, null, o.formatContext, !1, !1);
            (s.parentFlushed = !0),
              (t.blockedBoundary = l),
              (t.blockedSegment = s);
            try {
              if (
                (pt(e, t, n),
                s.lastPushedText && s.textEmbedded && s.chunks.push(Et),
                (s.status = 1),
                Ae(l, s),
                l.pendingTasks === 0)
              )
                break e;
            } catch (c) {
              (s.status = 4),
                (l.forceClientRender = !0),
                (l.errorDigest = ge(e, c));
            } finally {
              (t.blockedBoundary = r), (t.blockedSegment = o);
            }
            (t = _t(e, u, r, i, a, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t);
          }
          return;
      }
      if (typeof r == "object" && r !== null)
        switch (r.$$typeof) {
          case an:
            if (((n = yr(e, t, r.render, n, o)), he !== 0)) {
              (r = t.treeContext), (t.treeContext = dt(r, 1, 0));
              try {
                N(e, t, n);
              } finally {
                t.treeContext = r;
              }
            } else N(e, t, n);
            return;
          case cn:
            (r = r.type), (n = Sr(r, n)), ft(e, t, r, n, o);
            return;
          case on:
            if (
              ((o = n.children),
              (r = r._context),
              (n = n.value),
              (u = r._currentValue),
              (r._currentValue = n),
              (a = te),
              (te = n =
                {
                  parent: a,
                  depth: a === null ? 0 : a.depth + 1,
                  context: r,
                  parentValue: u,
                  value: n,
                }),
              (t.context = n),
              N(e, t, o),
              (e = te),
              e === null)
            )
              throw Error(g(403));
            (n = e.parentValue),
              (e.context._currentValue =
                n === ku ? e.context._defaultValue : n),
              (e = te = e.parent),
              (t.context = e);
            return;
          case un:
            (n = n.children), (n = n(r._currentValue)), N(e, t, n);
            return;
          case Tt:
            (o = r._init),
              (r = o(r._payload)),
              (n = Sr(r, n)),
              ft(e, t, r, n, void 0);
            return;
        }
      throw Error(g(130, r == null ? r : typeof r, ""));
    }
    switch (
      ((o = t.blockedSegment),
      (u = ko(o.chunks, r, n, e.responseState, o.formatContext)),
      (o.lastPushedText = !1),
      (a = o.formatContext),
      (o.formatContext = go(a, r, n)),
      pt(e, t, u),
      (o.formatContext = a),
      r)
    ) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        o.chunks.push(xo, m(r), wo);
    }
    o.lastPushedText = !1;
  }
}
function N(e, t, r) {
  if (((t.node = r), typeof r == "object" && r !== null)) {
    switch (r.$$typeof) {
      case bu:
        ft(e, t, r.type, r.props, r.ref);
        return;
      case en:
        throw Error(g(257));
      case Tt:
        var n = r._init;
        (r = n(r._payload)), N(e, t, r);
        return;
    }
    if (st(r)) {
      kr(e, t, r);
      return;
    }
    if (
      (r === null || typeof r != "object"
        ? (n = null)
        : ((n = (cr && r[cr]) || r["@@iterator"]),
          (n = typeof n == "function" ? n : null)),
      n && (n = n.call(r)))
    ) {
      if (((r = n.next()), !r.done)) {
        var o = [];
        do o.push(r.value), (r = n.next());
        while (!r.done);
        kr(e, t, o);
      }
      return;
    }
    throw (
      ((e = Object.prototype.toString.call(r)),
      Error(
        g(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(r).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  typeof r == "string"
    ? ((n = t.blockedSegment),
      (n.lastPushedText = nr(
        t.blockedSegment.chunks,
        r,
        e.responseState,
        n.lastPushedText,
      )))
    : typeof r == "number" &&
      ((n = t.blockedSegment),
      (n.lastPushedText = nr(
        t.blockedSegment.chunks,
        "" + r,
        e.responseState,
        n.lastPushedText,
      )));
}
function kr(e, t, r) {
  for (var n = r.length, o = 0; o < n; o++) {
    var u = t.treeContext;
    t.treeContext = dt(u, n, o);
    try {
      pt(e, t, r[o]);
    } finally {
      t.treeContext = u;
    }
  }
}
function pt(e, t, r) {
  var n = t.blockedSegment.formatContext,
    o = t.legacyContext,
    u = t.context;
  try {
    return N(e, t, r);
  } catch (i) {
    if (
      ($t(), typeof i != "object" || i === null || typeof i.then != "function")
    )
      throw (
        ((t.blockedSegment.formatContext = n),
        (t.legacyContext = o),
        (t.context = u),
        ze(u),
        i)
      );
    r = i;
    var a = t.blockedSegment,
      l = Le(e, a.chunks.length, null, a.formatContext, a.lastPushedText, !0);
    a.children.push(l),
      (a.lastPushedText = !1),
      (e = _t(
        e,
        t.node,
        t.blockedBoundary,
        l,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext,
      ).ping),
      r.then(e, e),
      (t.blockedSegment.formatContext = n),
      (t.legacyContext = o),
      (t.context = u),
      ze(u);
  }
}
function Iu(e) {
  var t = e.blockedBoundary;
  (e = e.blockedSegment), (e.status = 3), yn(this, t, e);
}
function bn(e, t, r) {
  var n = e.blockedBoundary;
  (e.blockedSegment.status = 3),
    n === null
      ? (t.allPendingTasks--,
        t.status !== 2 &&
          ((t.status = 2), t.destination !== null && t.destination.close()))
      : (n.pendingTasks--,
        n.forceClientRender ||
          ((n.forceClientRender = !0),
          (e = r === void 0 ? Error(g(432)) : r),
          (n.errorDigest = t.onError(e)),
          n.parentFlushed && t.clientRenderedBoundaries.push(n)),
        n.fallbackAbortableTasks.forEach(function (o) {
          return bn(o, t, r);
        }),
        n.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((n = t.onAllReady), n()));
}
function Ae(e, t) {
  if (
    t.chunks.length === 0 &&
    t.children.length === 1 &&
    t.children[0].boundary === null
  ) {
    var r = t.children[0];
    (r.id = t.id), (r.parentFlushed = !0), r.status === 1 && Ae(e, r);
  } else e.completedSegments.push(t);
}
function yn(e, t, r) {
  if (t === null) {
    if (r.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(g(389));
      e.completedRootSegment = r;
    }
    e.pendingRootTasks--,
      e.pendingRootTasks === 0 &&
        ((e.onShellError = se), (t = e.onShellReady), t());
  } else
    t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (r.parentFlushed && r.status === 1 && Ae(t, r),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Iu, e),
            t.fallbackAbortableTasks.clear())
          : r.parentFlushed &&
            r.status === 1 &&
            (Ae(t, r),
            t.completedSegments.length === 1 &&
              t.parentFlushed &&
              e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e());
}
function vn(e) {
  if (e.status !== 2) {
    var t = te,
      r = nt.current;
    nt.current = br;
    var n = Pe;
    Pe = e.responseState;
    try {
      var o,
        u = e.pingedTasks;
      for (o = 0; o < u.length; o++) {
        var a = u[o],
          l = e,
          i = a.blockedSegment;
        if (i.status === 0) {
          ze(a.context);
          try {
            N(l, a, a.node),
              i.lastPushedText && i.textEmbedded && i.chunks.push(Et),
              a.abortSet.delete(a),
              (i.status = 1),
              yn(l, a.blockedBoundary, i);
          } catch (k) {
            if (
              ($t(),
              typeof k == "object" && k !== null && typeof k.then == "function")
            ) {
              var s = a.ping;
              k.then(s, s);
            } else {
              a.abortSet.delete(a), (i.status = 4);
              var c = a.blockedBoundary,
                p = k,
                S = ge(l, p);
              if (
                (c === null
                  ? Oe(l, p)
                  : (c.pendingTasks--,
                    c.forceClientRender ||
                      ((c.forceClientRender = !0),
                      (c.errorDigest = S),
                      c.parentFlushed && l.clientRenderedBoundaries.push(c))),
                l.allPendingTasks--,
                l.allPendingTasks === 0)
              ) {
                var x = l.onAllReady;
                x();
              }
            }
          }
        }
      }
      u.splice(0, o), e.destination !== null && Pt(e, e.destination);
    } catch (k) {
      ge(e, k), Oe(e, k);
    } finally {
      (Pe = n), (nt.current = r), r === br && ze(t);
    }
  }
}
function ke(e, t, r) {
  switch (((r.parentFlushed = !0), r.status)) {
    case 0:
      var n = (r.id = e.nextSegmentId++);
      return (
        (r.lastPushedText = !1),
        (r.textEmbedded = !1),
        (e = e.responseState),
        f(t, Co),
        f(t, e.placeholderPrefix),
        (e = m(n.toString(16))),
        f(t, e),
        v(t, Eo)
      );
    case 1:
      r.status = 2;
      var o = !0;
      n = r.chunks;
      var u = 0;
      r = r.children;
      for (var a = 0; a < r.length; a++) {
        for (o = r[a]; u < o.index; u++) f(t, n[u]);
        o = Ze(e, t, o);
      }
      for (; u < n.length - 1; u++) f(t, n[u]);
      return u < n.length && (o = v(t, n[u])), o;
    default:
      throw Error(g(390));
  }
}
function Ze(e, t, r) {
  var n = r.boundary;
  if (n === null) return ke(e, t, r);
  if (((n.parentFlushed = !0), n.forceClientRender))
    (n = n.errorDigest),
      v(t, $o),
      f(t, Po),
      n && (f(t, Mo), f(t, m(w(n))), f(t, Io)),
      v(t, Bo),
      ke(e, t, r);
  else if (0 < n.pendingTasks) {
    (n.rootSegmentID = e.nextSegmentId++),
      0 < n.completedSegments.length && e.partialBoundaries.push(n);
    var o = e.responseState,
      u = o.nextSuspenseID++;
    (o = d(o.boundaryPrefix + u.toString(16))),
      (n = n.id = o),
      sr(t, e.responseState, n),
      ke(e, t, r);
  } else if (n.byteSize > e.progressiveChunkSize)
    (n.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(n),
      sr(t, e.responseState, n.id),
      ke(e, t, r);
  else {
    if ((v(t, To), (r = n.completedSegments), r.length !== 1))
      throw Error(g(391));
    Ze(e, t, r[0]);
  }
  return v(t, _o);
}
function xr(e, t, r) {
  return (
    ru(t, e.responseState, r.formatContext, r.id),
    Ze(e, t, r),
    nu(t, r.formatContext)
  );
}
function wr(e, t, r) {
  for (var n = r.completedSegments, o = 0; o < n.length; o++) Sn(e, t, r, n[o]);
  if (
    ((n.length = 0),
    (e = e.responseState),
    (n = r.id),
    (r = r.rootSegmentID),
    f(t, e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? f(t, su)
      : ((e.sentCompleteBoundaryFunction = !0), f(t, iu)),
    n === null)
  )
    throw Error(g(395));
  return (
    (r = m(r.toString(16))),
    f(t, n),
    f(t, cu),
    f(t, e.segmentPrefix),
    f(t, r),
    v(t, du)
  );
}
function Sn(e, t, r, n) {
  if (n.status === 2) return !0;
  var o = n.id;
  if (o === -1) {
    if ((n.id = r.rootSegmentID) === -1) throw Error(g(392));
    return xr(e, t, n);
  }
  return (
    xr(e, t, n),
    (e = e.responseState),
    f(t, e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? f(t, uu)
      : ((e.sentCompleteSegmentFunction = !0), f(t, ou)),
    f(t, e.segmentPrefix),
    (o = m(o.toString(16))),
    f(t, o),
    f(t, au),
    f(t, e.placeholderPrefix),
    f(t, o),
    v(t, lu)
  );
}
function Pt(e, t) {
  (B = new Uint8Array(512)), (D = 0);
  try {
    var r = e.completedRootSegment;
    if (r !== null && e.pendingRootTasks === 0) {
      Ze(e, t, r), (e.completedRootSegment = null);
      var n = e.responseState.bootstrapChunks;
      for (r = 0; r < n.length - 1; r++) f(t, n[r]);
      r < n.length && v(t, n[r]);
    }
    var o,
      u = e.clientRenderedBoundaries;
    for (o = 0; o < u.length; o++) {
      var a = u[o];
      n = t;
      var l = e.responseState,
        i = a.id,
        s = a.errorDigest,
        c = a.errorMessage,
        p = a.errorComponentStack;
      if (
        (f(n, l.startInlineScript),
        l.sentClientRenderFunction
          ? f(n, pu)
          : ((l.sentClientRenderFunction = !0), f(n, fu)),
        i === null)
      )
        throw Error(g(395));
      if (
        (f(n, i),
        f(n, hu),
        (s || c || p) && (f(n, tt), f(n, m(rt(s || "")))),
        (c || p) && (f(n, tt), f(n, m(rt(c || "")))),
        p && (f(n, tt), f(n, m(rt(p)))),
        !v(n, gu))
      ) {
        (e.destination = null), o++, u.splice(0, o);
        return;
      }
    }
    u.splice(0, o);
    var S = e.completedBoundaries;
    for (o = 0; o < S.length; o++)
      if (!wr(e, t, S[o])) {
        (e.destination = null), o++, S.splice(0, o);
        return;
      }
    S.splice(0, o), Kt(t), (B = new Uint8Array(512)), (D = 0);
    var x = e.partialBoundaries;
    for (o = 0; o < x.length; o++) {
      var k = x[o];
      e: {
        (u = e), (a = t);
        var A = k.completedSegments;
        for (l = 0; l < A.length; l++)
          if (!Sn(u, a, k, A[l])) {
            l++, A.splice(0, l);
            var G = !1;
            break e;
          }
        A.splice(0, l), (G = !0);
      }
      if (!G) {
        (e.destination = null), o++, x.splice(0, o);
        return;
      }
    }
    x.splice(0, o);
    var J = e.completedBoundaries;
    for (o = 0; o < J.length; o++)
      if (!wr(e, t, J[o])) {
        (e.destination = null), o++, J.splice(0, o);
        return;
      }
    J.splice(0, o);
  } finally {
    Kt(t),
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.close();
  }
}
function Cr(e, t) {
  try {
    var r = e.abortableTasks;
    r.forEach(function (n) {
      return bn(n, e, t);
    }),
      r.clear(),
      e.destination !== null && Pt(e, e.destination);
  } catch (n) {
    ge(e, n), Oe(e, n);
  }
}
xt.renderToReadableStream = function (e, t) {
  return new Promise(function (r, n) {
    var o,
      u,
      a = new Promise(function (c, p) {
        (u = c), (o = p);
      }),
      l = Pu(
        e,
        po(
          t ? t.identifierPrefix : void 0,
          t ? t.nonce : void 0,
          t ? t.bootstrapScriptContent : void 0,
          t ? t.bootstrapScripts : void 0,
          t ? t.bootstrapModules : void 0,
        ),
        ho(t ? t.namespaceURI : void 0),
        t ? t.progressiveChunkSize : void 0,
        t ? t.onError : void 0,
        u,
        function () {
          var c = new ReadableStream(
            {
              type: "bytes",
              pull: function (p) {
                if (l.status === 1) (l.status = 2), Yr(p, l.fatalError);
                else if (l.status !== 2 && l.destination === null) {
                  l.destination = p;
                  try {
                    Pt(l, p);
                  } catch (S) {
                    ge(l, S), Oe(l, S);
                  }
                }
              },
              cancel: function () {
                Cr(l);
              },
            },
            { highWaterMark: 0 },
          );
          (c.allReady = a), r(c);
        },
        function (c) {
          a.catch(function () {}), n(c);
        },
        o,
      );
    if (t && t.signal) {
      var i = t.signal,
        s = function () {
          Cr(l, i.reason), i.removeEventListener("abort", s);
        };
      i.addEventListener("abort", s);
    }
    vn(l);
  });
};
xt.version = "18.2.0";
var z = {},
  oe,
  kn;
oe = ne;
kn = xt;
z.version = oe.version;
z.renderToString = oe.renderToString;
z.renderToStaticMarkup = oe.renderToStaticMarkup;
z.renderToNodeStream = oe.renderToNodeStream;
z.renderToStaticNodeStream = oe.renderToStaticNodeStream;
z.renderToReadableStream = kn.renderToReadableStream;
var Nu = z.version,
  zu = z.renderToString,
  Vu = z.renderToStaticMarkup,
  Lu = z.renderToNodeStream,
  Ou = z.renderToStaticNodeStream,
  Au = z.renderToReadableStream;
export { zu as a, Au as b };
//# sourceMappingURL=chunk-2R6PUQFV.mjs.map
