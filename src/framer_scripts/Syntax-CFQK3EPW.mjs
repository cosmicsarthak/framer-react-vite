import { ga as re, ja as it, u as pe, wa as lt } from "./chunk-NAESFJNX.mjs";
import "./chunk-JR5VT52U.mjs";
import { c as M, d as T } from "./chunk-Y5FTINFI.mjs";
var ht = {},
  We = { exports: {} };
function Qe(e) {
  return (
    e instanceof Map
      ? (e.clear =
          e.delete =
          e.set =
            function () {
              throw new Error("map is read-only");
            })
      : e instanceof Set &&
        (e.add =
          e.clear =
          e.delete =
            function () {
              throw new Error("set is read-only");
            }),
    Object.freeze(e),
    Object.getOwnPropertyNames(e).forEach(function (t) {
      var n = e[t];
      typeof n != "object" || Object.isFrozen(n) || Qe(n);
    }),
    e
  );
}
We.exports = Qe;
We.exports.default = Qe;
var Ce = class {
  constructor(t) {
    t.data === void 0 && (t.data = {}),
      (this.data = t.data),
      (this.isMatchIgnored = !1);
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
};
function pt(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
function be(e, ...t) {
  let n = Object.create(null);
  for (let o in e) n[o] = e[o];
  return (
    t.forEach(function (o) {
      for (let a in o) n[a] = o[a];
    }),
    n
  );
}
var ya = "</span>",
  ct = (e) => !!e.scope || (e.sublanguage && e.language),
  va = (e, { prefix: t }) => {
    if (e.includes(".")) {
      let n = e.split(".");
      return [
        `${t}${n.shift()}`,
        ...n.map((o, a) => `${o}${"_".repeat(a + 1)}`),
      ].join(" ");
    }
    return `${t}${e}`;
  },
  qe = class {
    constructor(t, n) {
      (this.buffer = ""), (this.classPrefix = n.classPrefix), t.walk(this);
    }
    addText(t) {
      this.buffer += pt(t);
    }
    openNode(t) {
      if (!ct(t)) return;
      let n = "";
      (n = t.sublanguage
        ? `language-${t.language}`
        : va(t.scope, { prefix: this.classPrefix })),
        this.span(n);
    }
    closeNode(t) {
      ct(t) && (this.buffer += ya);
    }
    value() {
      return this.buffer;
    }
    span(t) {
      this.buffer += `<span class="${t}">`;
    }
  },
  dt = (e = {}) => {
    let t = { children: [] };
    return Object.assign(t, e), t;
  },
  ke = class {
    constructor() {
      (this.rootNode = dt()), (this.stack = [this.rootNode]);
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(t) {
      this.top.children.push(t);
    }
    openNode(t) {
      let n = dt({ scope: t });
      this.add(n), this.stack.push(n);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); );
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(t) {
      return this.constructor._walk(t, this.rootNode);
    }
    static _walk(t, n) {
      return (
        typeof n == "string"
          ? t.addText(n)
          : n.children &&
            (t.openNode(n),
            n.children.forEach((o) => this._walk(t, o)),
            t.closeNode(n)),
        t
      );
    }
    static _collapse(t) {
      typeof t != "string" &&
        t.children &&
        (t.children.every((n) => typeof n == "string")
          ? (t.children = [t.children.join("")])
          : t.children.forEach((n) => {
              ke._collapse(n);
            }));
    }
  },
  Ze = class extends ke {
    constructor(t) {
      super(), (this.options = t);
    }
    addKeyword(t, n) {
      t !== "" && (this.openNode(n), this.addText(t), this.closeNode());
    }
    addText(t) {
      t !== "" && this.add(t);
    }
    addSublanguage(t, n) {
      let o = t.root;
      (o.sublanguage = !0), (o.language = n), this.add(o);
    }
    toHTML() {
      return new qe(this, this.options).value();
    }
    finalize() {
      return !0;
    }
  };
function Ne(e) {
  return e ? (typeof e == "string" ? e : e.source) : null;
}
function ft(e) {
  return _e("(?=", e, ")");
}
function wa(e) {
  return _e("(?:", e, ")*");
}
function Ea(e) {
  return _e("(?:", e, ")?");
}
function _e(...e) {
  return e.map((n) => Ne(n)).join("");
}
function ka(e) {
  let t = e[e.length - 1];
  return typeof t == "object" && t.constructor === Object
    ? (e.splice(e.length - 1, 1), t)
    : {};
}
function Xe(...e) {
  return (
    "(" + (ka(e).capture ? "" : "?:") + e.map((o) => Ne(o)).join("|") + ")"
  );
}
function _t(e) {
  return new RegExp(e.toString() + "|").exec("").length - 1;
}
function Na(e, t) {
  let n = e && e.exec(t);
  return n && n.index === 0;
}
var $a = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Ve(e, { joinWith: t }) {
  let n = 0;
  return e
    .map((o) => {
      n += 1;
      let a = n,
        u = Ne(o),
        c = "";
      for (; u.length > 0; ) {
        let s = $a.exec(u);
        if (!s) {
          c += u;
          break;
        }
        (c += u.substring(0, s.index)),
          (u = u.substring(s.index + s[0].length)),
          s[0][0] === "\\" && s[1]
            ? (c += "\\" + String(Number(s[1]) + a))
            : ((c += s[0]), s[0] === "(" && n++);
      }
      return c;
    })
    .map((o) => `(${o})`)
    .join(t);
}
var Aa = /\b\B/,
  yt = "[a-zA-Z]\\w*",
  Je = "[a-zA-Z_]\\w*",
  vt = "\\b\\d+(\\.\\d+)?",
  wt = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
  Et = "\\b(0b[01]+)",
  Oa =
    "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
  Sa = (e = {}) => {
    let t = /^#![ ]*\//;
    return (
      e.binary && (e.begin = _e(t, /.*\b/, e.binary, /\b.*/)),
      be(
        {
          scope: "meta",
          begin: t,
          end: /$/,
          relevance: 0,
          "on:begin": (n, o) => {
            n.index !== 0 && o.ignoreMatch();
          },
        },
        e,
      )
    );
  },
  $e = { begin: "\\\\[\\s\\S]", relevance: 0 },
  ja = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [$e],
  },
  Ma = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [$e],
  },
  Ca = {
    begin:
      /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
  },
  Re = function (e, t, n = {}) {
    let o = be({ scope: "comment", begin: e, end: t, contains: [] }, n);
    o.contains.push({
      scope: "doctag",
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0,
    });
    let a = Xe(
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      /[A-Za-z]+[-][a-z]+/,
      /[A-Za-z][a-z]{2,}/,
    );
    return (
      o.contains.push({
        begin: _e(/[ ]+/, "(", a, /[.]?[:]?([.][ ]|[ ])/, "){3}"),
      }),
      o
    );
  },
  Ta = Re("//", "$"),
  Ra = Re("/\\*", "\\*/"),
  xa = Re("#", "$"),
  Da = { scope: "number", begin: vt, relevance: 0 },
  Ia = { scope: "number", begin: wt, relevance: 0 },
  La = { scope: "number", begin: Et, relevance: 0 },
  Ba = {
    begin: /(?=\/[^/\n]*\/)/,
    contains: [
      {
        scope: "regexp",
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [
          $e,
          { begin: /\[/, end: /\]/, relevance: 0, contains: [$e] },
        ],
      },
    ],
  },
  Fa = { scope: "title", begin: yt, relevance: 0 },
  za = { scope: "title", begin: Je, relevance: 0 },
  Pa = { begin: "\\.\\s*" + Je, relevance: 0 },
  Ua = function (e) {
    return Object.assign(e, {
      "on:begin": (t, n) => {
        n.data._beginMatch = t[1];
      },
      "on:end": (t, n) => {
        n.data._beginMatch !== t[1] && n.ignoreMatch();
      },
    });
  },
  Me = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: Aa,
    IDENT_RE: yt,
    UNDERSCORE_IDENT_RE: Je,
    NUMBER_RE: vt,
    C_NUMBER_RE: wt,
    BINARY_NUMBER_RE: Et,
    RE_STARTERS_RE: Oa,
    SHEBANG: Sa,
    BACKSLASH_ESCAPE: $e,
    APOS_STRING_MODE: ja,
    QUOTE_STRING_MODE: Ma,
    PHRASAL_WORDS_MODE: Ca,
    COMMENT: Re,
    C_LINE_COMMENT_MODE: Ta,
    C_BLOCK_COMMENT_MODE: Ra,
    HASH_COMMENT_MODE: xa,
    NUMBER_MODE: Da,
    C_NUMBER_MODE: Ia,
    BINARY_NUMBER_MODE: La,
    REGEXP_MODE: Ba,
    TITLE_MODE: Fa,
    UNDERSCORE_TITLE_MODE: za,
    METHOD_GUARD: Pa,
    END_SAME_AS_BEGIN: Ua,
  });
function Ha(e, t) {
  e.input[e.index - 1] === "." && t.ignoreMatch();
}
function Ka(e, t) {
  e.className !== void 0 && ((e.scope = e.className), delete e.className);
}
function qa(e, t) {
  t &&
    e.beginKeywords &&
    ((e.begin =
      "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)"),
    (e.__beforeBegin = Ha),
    (e.keywords = e.keywords || e.beginKeywords),
    delete e.beginKeywords,
    e.relevance === void 0 && (e.relevance = 0));
}
function Za(e, t) {
  Array.isArray(e.illegal) && (e.illegal = Xe(...e.illegal));
}
function Ga(e, t) {
  if (e.match) {
    if (e.begin || e.end)
      throw new Error("begin & end are not supported with match");
    (e.begin = e.match), delete e.match;
  }
}
function Wa(e, t) {
  e.relevance === void 0 && (e.relevance = 1);
}
var Qa = (e, t) => {
    if (!e.beforeMatch) return;
    if (e.starts) throw new Error("beforeMatch cannot be used with starts");
    let n = Object.assign({}, e);
    Object.keys(e).forEach((o) => {
      delete e[o];
    }),
      (e.keywords = n.keywords),
      (e.begin = _e(n.beforeMatch, ft(n.begin))),
      (e.starts = {
        relevance: 0,
        contains: [Object.assign(n, { endsParent: !0 })],
      }),
      (e.relevance = 0),
      delete n.beforeMatch;
  },
  Xa = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    "list",
    "value",
  ],
  Va = "keyword";
function kt(e, t, n = Va) {
  let o = Object.create(null);
  return (
    typeof e == "string"
      ? a(n, e.split(" "))
      : Array.isArray(e)
        ? a(n, e)
        : Object.keys(e).forEach(function (u) {
            Object.assign(o, kt(e[u], t, u));
          }),
    o
  );
  function a(u, c) {
    t && (c = c.map((s) => s.toLowerCase())),
      c.forEach(function (s) {
        let r = s.split("|");
        o[r[0]] = [u, Ja(r[0], r[1])];
      });
  }
}
function Ja(e, t) {
  return t ? Number(t) : Ya(e) ? 0 : 1;
}
function Ya(e) {
  return Xa.includes(e.toLowerCase());
}
var ut = {},
  fe = (e) => {
    console.error(e);
  },
  gt = (e, ...t) => {
    console.log(`WARN: ${e}`, ...t);
  },
  ve = (e, t) => {
    ut[`${e}/${t}`] ||
      (console.log(`Deprecated as of ${e}. ${t}`), (ut[`${e}/${t}`] = !0));
  },
  Te = new Error();
function Nt(e, t, { key: n }) {
  let o = 0,
    a = e[n],
    u = {},
    c = {};
  for (let s = 1; s <= t.length; s++)
    (c[s + o] = a[s]), (u[s + o] = !0), (o += _t(t[s - 1]));
  (e[n] = c), (e[n]._emit = u), (e[n]._multi = !0);
}
function eo(e) {
  if (Array.isArray(e.begin)) {
    if (e.skip || e.excludeBegin || e.returnBegin)
      throw (
        (fe(
          "skip, excludeBegin, returnBegin not compatible with beginScope: {}",
        ),
        Te)
      );
    if (typeof e.beginScope != "object" || e.beginScope === null)
      throw (fe("beginScope must be object"), Te);
    Nt(e, e.begin, { key: "beginScope" }),
      (e.begin = Ve(e.begin, { joinWith: "" }));
  }
}
function to(e) {
  if (Array.isArray(e.end)) {
    if (e.skip || e.excludeEnd || e.returnEnd)
      throw (
        (fe("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Te)
      );
    if (typeof e.endScope != "object" || e.endScope === null)
      throw (fe("endScope must be object"), Te);
    Nt(e, e.end, { key: "endScope" }), (e.end = Ve(e.end, { joinWith: "" }));
  }
}
function no(e) {
  e.scope &&
    typeof e.scope == "object" &&
    e.scope !== null &&
    ((e.beginScope = e.scope), delete e.scope);
}
function ao(e) {
  no(e),
    typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }),
    typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }),
    eo(e),
    to(e);
}
function oo(e) {
  function t(c, s) {
    return new RegExp(
      Ne(c),
      "m" +
        (e.case_insensitive ? "i" : "") +
        (e.unicodeRegex ? "u" : "") +
        (s ? "g" : ""),
    );
  }
  class n {
    constructor() {
      (this.matchIndexes = {}),
        (this.regexes = []),
        (this.matchAt = 1),
        (this.position = 0);
    }
    addRule(s, r) {
      (r.position = this.position++),
        (this.matchIndexes[this.matchAt] = r),
        this.regexes.push([r, s]),
        (this.matchAt += _t(s) + 1);
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      let s = this.regexes.map((r) => r[1]);
      (this.matcherRe = t(Ve(s, { joinWith: "|" }), !0)), (this.lastIndex = 0);
    }
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      let r = this.matcherRe.exec(s);
      if (!r) return null;
      let d = r.findIndex((y, f) => f > 0 && y !== void 0),
        m = this.matchIndexes[d];
      return r.splice(0, d), Object.assign(r, m);
    }
  }
  class o {
    constructor() {
      (this.rules = []),
        (this.multiRegexes = []),
        (this.count = 0),
        (this.lastIndex = 0),
        (this.regexIndex = 0);
    }
    getMatcher(s) {
      if (this.multiRegexes[s]) return this.multiRegexes[s];
      let r = new n();
      return (
        this.rules.slice(s).forEach(([d, m]) => r.addRule(d, m)),
        r.compile(),
        (this.multiRegexes[s] = r),
        r
      );
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    addRule(s, r) {
      this.rules.push([s, r]), r.type === "begin" && this.count++;
    }
    exec(s) {
      let r = this.getMatcher(this.regexIndex);
      r.lastIndex = this.lastIndex;
      let d = r.exec(s);
      if (
        this.resumingScanAtSamePosition() &&
        !(d && d.index === this.lastIndex)
      ) {
        let m = this.getMatcher(0);
        (m.lastIndex = this.lastIndex + 1), (d = m.exec(s));
      }
      return (
        d &&
          ((this.regexIndex += d.position + 1),
          this.regexIndex === this.count && this.considerAll()),
        d
      );
    }
  }
  function a(c) {
    let s = new o();
    return (
      c.contains.forEach((r) => s.addRule(r.begin, { rule: r, type: "begin" })),
      c.terminatorEnd && s.addRule(c.terminatorEnd, { type: "end" }),
      c.illegal && s.addRule(c.illegal, { type: "illegal" }),
      s
    );
  }
  function u(c, s) {
    let r = c;
    if (c.isCompiled) return r;
    [Ka, Ga, ao, Qa].forEach((m) => m(c, s)),
      e.compilerExtensions.forEach((m) => m(c, s)),
      (c.__beforeBegin = null),
      [qa, Za, Wa].forEach((m) => m(c, s)),
      (c.isCompiled = !0);
    let d = null;
    return (
      typeof c.keywords == "object" &&
        c.keywords.$pattern &&
        ((c.keywords = Object.assign({}, c.keywords)),
        (d = c.keywords.$pattern),
        delete c.keywords.$pattern),
      (d = d || /\w+/),
      c.keywords && (c.keywords = kt(c.keywords, e.case_insensitive)),
      (r.keywordPatternRe = t(d, !0)),
      s &&
        (c.begin || (c.begin = /\B|\b/),
        (r.beginRe = t(r.begin)),
        c.end || c.endsWithParent || (c.end = /\B|\b/),
        c.end && (r.endRe = t(r.end)),
        (r.terminatorEnd = Ne(r.end) || ""),
        c.endsWithParent &&
          s.terminatorEnd &&
          (r.terminatorEnd += (c.end ? "|" : "") + s.terminatorEnd)),
      c.illegal && (r.illegalRe = t(c.illegal)),
      c.contains || (c.contains = []),
      (c.contains = [].concat(
        ...c.contains.map(function (m) {
          return so(m === "self" ? c : m);
        }),
      )),
      c.contains.forEach(function (m) {
        u(m, r);
      }),
      c.starts && u(c.starts, s),
      (r.matcher = a(r)),
      r
    );
  }
  if (
    (e.compilerExtensions || (e.compilerExtensions = []),
    e.contains && e.contains.includes("self"))
  )
    throw new Error(
      "ERR: contains `self` is not supported at the top-level of a language.  See documentation.",
    );
  return (e.classNameAliases = be(e.classNameAliases || {})), u(e);
}
function $t(e) {
  return !!e && (e.endsWithParent || $t(e.starts));
}
function so(e) {
  return (
    e.variants &&
      !e.cachedVariants &&
      (e.cachedVariants = e.variants.map(function (t) {
        return be(e, { variants: null }, t);
      })),
    e.cachedVariants
      ? e.cachedVariants
      : $t(e)
        ? be(e, { starts: e.starts ? be(e.starts) : null })
        : Object.isFrozen(e)
          ? be(e)
          : e
  );
}
var ro = "11.6.0",
  Ge = class extends Error {
    constructor(t, n) {
      super(t), (this.name = "HTMLInjectionError"), (this.html = n);
    }
  },
  Ke = pt,
  bt = be,
  mt = Symbol("nomatch"),
  io = 7,
  lo = function (e) {
    let t = Object.create(null),
      n = Object.create(null),
      o = [],
      a = !0,
      u =
        "Could not find the language '{}', did you forget to load/include a language module?",
      c = { disableAutodetect: !0, name: "Plain text", contains: [] },
      s = {
        ignoreUnescapedHTML: !1,
        throwUnescapedHTML: !1,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        cssSelector: "pre code",
        languages: null,
        __emitter: Ze,
      };
    function r(p) {
      return s.noHighlightRe.test(p);
    }
    function d(p) {
      let w = p.className + " ";
      w += p.parentNode ? p.parentNode.className : "";
      let A = s.languageDetectRe.exec(w);
      if (A) {
        let j = F(A[1]);
        return (
          j ||
            (gt(u.replace("{}", A[1])),
            gt("Falling back to no-highlight mode for this block.", p)),
          j ? A[1] : "no-highlight"
        );
      }
      return w.split(/\s+/).find((j) => r(j) || F(j));
    }
    function m(p, w, A) {
      let j = "",
        L = "";
      typeof w == "object"
        ? ((j = p), (A = w.ignoreIllegals), (L = w.language))
        : (ve("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
          ve(
            "10.7.0",
            `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`,
          ),
          (L = p),
          (j = w)),
        A === void 0 && (A = !0);
      let q = { code: j, language: L };
      W("before:highlight", q);
      let Z = q.result ? q.result : y(q.language, q.code, A);
      return (Z.code = q.code), W("after:highlight", Z), Z;
    }
    function y(p, w, A, j) {
      let L = Object.create(null);
      function q(k, S) {
        return k.keywords[S];
      }
      function Z() {
        if (!R.keywords) {
          X.addText(K);
          return;
        }
        let k = 0;
        R.keywordPatternRe.lastIndex = 0;
        let S = R.keywordPatternRe.exec(K),
          I = "";
        for (; S; ) {
          I += K.substring(k, S.index);
          let z = ge.case_insensitive ? S[0].toLowerCase() : S[0],
            V = q(R, z);
          if (V) {
            let [ie, fa] = V;
            if (
              (X.addText(I),
              (I = ""),
              (L[z] = (L[z] || 0) + 1),
              L[z] <= io && (je += fa),
              ie.startsWith("_"))
            )
              I += S[0];
            else {
              let _a = ge.classNameAliases[ie] || ie;
              X.addKeyword(S[0], _a);
            }
          } else I += S[0];
          (k = R.keywordPatternRe.lastIndex), (S = R.keywordPatternRe.exec(K));
        }
        (I += K.substring(k)), X.addText(I);
      }
      function ae() {
        if (K === "") return;
        let k = null;
        if (typeof R.subLanguage == "string") {
          if (!t[R.subLanguage]) {
            X.addText(K);
            return;
          }
          (k = y(R.subLanguage, K, !0, rt[R.subLanguage])),
            (rt[R.subLanguage] = k._top);
        } else k = _(K, R.subLanguage.length ? R.subLanguage : null);
        R.relevance > 0 && (je += k.relevance),
          X.addSublanguage(k._emitter, k.language);
      }
      function G() {
        R.subLanguage != null ? ae() : Z(), (K = "");
      }
      function Y(k, S) {
        let I = 1,
          z = S.length - 1;
        for (; I <= z; ) {
          if (!k._emit[I]) {
            I++;
            continue;
          }
          let V = ge.classNameAliases[k[I]] || k[I],
            ie = S[I];
          V ? X.addKeyword(ie, V) : ((K = ie), Z(), (K = "")), I++;
        }
      }
      function me(k, S) {
        return (
          k.scope &&
            typeof k.scope == "string" &&
            X.openNode(ge.classNameAliases[k.scope] || k.scope),
          k.beginScope &&
            (k.beginScope._wrap
              ? (X.addKeyword(
                  K,
                  ge.classNameAliases[k.beginScope._wrap] || k.beginScope._wrap,
                ),
                (K = ""))
              : k.beginScope._multi && (Y(k.beginScope, S), (K = ""))),
          (R = Object.create(k, { parent: { value: R } })),
          R
        );
      }
      function ce(k, S, I) {
        let z = Na(k.endRe, I);
        if (z) {
          if (k["on:end"]) {
            let V = new Ce(k);
            k["on:end"](S, V), V.isMatchIgnored && (z = !1);
          }
          if (z) {
            for (; k.endsParent && k.parent; ) k = k.parent;
            return k;
          }
        }
        if (k.endsWithParent) return ce(k.parent, S, I);
      }
      function de(k) {
        return R.matcher.regexIndex === 0 ? ((K += k[0]), 1) : ((He = !0), 0);
      }
      function P(k) {
        let S = k[0],
          I = k.rule,
          z = new Ce(I),
          V = [I.__beforeBegin, I["on:begin"]];
        for (let ie of V) if (ie && (ie(k, z), z.isMatchIgnored)) return de(S);
        return (
          I.skip
            ? (K += S)
            : (I.excludeBegin && (K += S),
              G(),
              I.returnBegin || I.excludeBegin || (K = S)),
          me(I, k),
          I.returnBegin ? 0 : S.length
        );
      }
      function ue(k) {
        let S = k[0],
          I = w.substring(k.index),
          z = ce(R, k, I);
        if (!z) return mt;
        let V = R;
        R.endScope && R.endScope._wrap
          ? (G(), X.addKeyword(S, R.endScope._wrap))
          : R.endScope && R.endScope._multi
            ? (G(), Y(R.endScope, k))
            : V.skip
              ? (K += S)
              : (V.returnEnd || V.excludeEnd || (K += S),
                G(),
                V.excludeEnd && (K = S));
        do
          R.scope && X.closeNode(),
            R.skip || R.subLanguage || (je += R.relevance),
            (R = R.parent);
        while (R !== z.parent);
        return z.starts && me(z.starts, k), V.returnEnd ? 0 : S.length;
      }
      function Se() {
        let k = [];
        for (let S = R; S !== ge; S = S.parent) S.scope && k.unshift(S.scope);
        k.forEach((S) => X.openNode(S));
      }
      let ye = {};
      function st(k, S) {
        let I = S && S[0];
        if (((K += k), I == null)) return G(), 0;
        if (
          ye.type === "begin" &&
          S.type === "end" &&
          ye.index === S.index &&
          I === ""
        ) {
          if (((K += w.slice(S.index, S.index + 1)), !a)) {
            let z = new Error(`0 width match regex (${p})`);
            throw ((z.languageName = p), (z.badRule = ye.rule), z);
          }
          return 1;
        }
        if (((ye = S), S.type === "begin")) return P(S);
        if (S.type === "illegal" && !A) {
          let z = new Error(
            'Illegal lexeme "' +
              I +
              '" for mode "' +
              (R.scope || "<unnamed>") +
              '"',
          );
          throw ((z.mode = R), z);
        }
        if (S.type === "end") {
          let z = ue(S);
          if (z !== mt) return z;
        }
        if (S.type === "illegal" && I === "") return 1;
        if (Ue > 1e5 && Ue > 3 * S.index)
          throw new Error(
            "potential infinite loop, way more iterations than matches",
          );
        return (K += I), I.length;
      }
      let ge = F(p);
      if (!ge)
        throw (
          (fe(u.replace("{}", p)), new Error('Unknown language: "' + p + '"'))
        );
      let pa = oo(ge),
        Pe = "",
        R = j || pa,
        rt = {},
        X = new s.__emitter(s);
      Se();
      let K = "",
        je = 0,
        he = 0,
        Ue = 0,
        He = !1;
      try {
        for (R.matcher.considerAll(); ; ) {
          Ue++,
            He ? (He = !1) : R.matcher.considerAll(),
            (R.matcher.lastIndex = he);
          let k = R.matcher.exec(w);
          if (!k) break;
          let S = w.substring(he, k.index),
            I = st(S, k);
          he = k.index + I;
        }
        return (
          st(w.substring(he)),
          X.closeAllNodes(),
          X.finalize(),
          (Pe = X.toHTML()),
          {
            language: p,
            value: Pe,
            relevance: je,
            illegal: !1,
            _emitter: X,
            _top: R,
          }
        );
      } catch (k) {
        if (k.message && k.message.includes("Illegal"))
          return {
            language: p,
            value: Ke(w),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: k.message,
              index: he,
              context: w.slice(he - 100, he + 100),
              mode: k.mode,
              resultSoFar: Pe,
            },
            _emitter: X,
          };
        if (a)
          return {
            language: p,
            value: Ke(w),
            illegal: !1,
            relevance: 0,
            errorRaised: k,
            _emitter: X,
            _top: R,
          };
        throw k;
      }
    }
    function f(p) {
      let w = {
        value: Ke(p),
        illegal: !1,
        relevance: 0,
        _top: c,
        _emitter: new s.__emitter(s),
      };
      return w._emitter.addText(p), w;
    }
    function _(p, w) {
      w = w || s.languages || Object.keys(t);
      let A = f(p),
        j = w
          .filter(F)
          .filter(te)
          .map((G) => y(G, p, !1));
      j.unshift(A);
      let L = j.sort((G, Y) => {
          if (G.relevance !== Y.relevance) return Y.relevance - G.relevance;
          if (G.language && Y.language) {
            if (F(G.language).supersetOf === Y.language) return 1;
            if (F(Y.language).supersetOf === G.language) return -1;
          }
          return 0;
        }),
        [q, Z] = L,
        ae = q;
      return (ae.secondBest = Z), ae;
    }
    function N(p, w, A) {
      let j = (w && n[w]) || A;
      p.classList.add("hljs"), p.classList.add(`language-${j}`);
    }
    function l(p) {
      let w = null,
        A = d(p);
      if (r(A)) return;
      if (
        (W("before:highlightElement", { el: p, language: A }),
        p.children.length > 0 &&
          (s.ignoreUnescapedHTML ||
            (console.warn(
              "One of your code blocks includes unescaped HTML. This is a potentially serious security risk.",
            ),
            console.warn(
              "https://github.com/highlightjs/highlight.js/wiki/security",
            ),
            console.warn("The element with unescaped HTML:"),
            console.warn(p)),
          s.throwUnescapedHTML))
      )
        throw new Ge(
          "One of your code blocks includes unescaped HTML.",
          p.innerHTML,
        );
      w = p;
      let j = w.textContent,
        L = A ? m(j, { language: A, ignoreIllegals: !0 }) : _(j);
      (p.innerHTML = L.value),
        N(p, A, L.language),
        (p.result = {
          language: L.language,
          re: L.relevance,
          relevance: L.relevance,
        }),
        L.secondBest &&
          (p.secondBest = {
            language: L.secondBest.language,
            relevance: L.secondBest.relevance,
          }),
        W("after:highlightElement", { el: p, result: L, text: j });
    }
    function i(p) {
      s = bt(s, p);
    }
    let b = () => {
      v(),
        ve("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function h() {
      v(),
        ve(
          "10.6.0",
          "initHighlightingOnLoad() deprecated.  Use highlightAll() now.",
        );
    }
    let g = !1;
    function v() {
      if (document.readyState === "loading") {
        g = !0;
        return;
      }
      document.querySelectorAll(s.cssSelector).forEach(l);
    }
    function $() {
      g && v();
    }
    typeof M < "u" &&
      M.addEventListener &&
      M.addEventListener("DOMContentLoaded", $, !1);
    function E(p, w) {
      let A = null;
      try {
        A = w(e);
      } catch (j) {
        if (
          (fe(
            "Language definition for '{}' could not be registered.".replace(
              "{}",
              p,
            ),
          ),
          !a)
        )
          throw j;
        fe(j), (A = c);
      }
      A.name || (A.name = p),
        (t[p] = A),
        (A.rawDefinition = w.bind(null, e)),
        A.aliases && J(A.aliases, { languageName: p });
    }
    function C(p) {
      delete t[p];
      for (let w of Object.keys(n)) n[w] === p && delete n[w];
    }
    function B() {
      return Object.keys(t);
    }
    function F(p) {
      return (p = (p || "").toLowerCase()), t[p] || t[n[p]];
    }
    function J(p, { languageName: w }) {
      typeof p == "string" && (p = [p]),
        p.forEach((A) => {
          n[A.toLowerCase()] = w;
        });
    }
    function te(p) {
      let w = F(p);
      return w && !w.disableAutodetect;
    }
    function ne(p) {
      p["before:highlightBlock"] &&
        !p["before:highlightElement"] &&
        (p["before:highlightElement"] = (w) => {
          p["before:highlightBlock"](Object.assign({ block: w.el }, w));
        }),
        p["after:highlightBlock"] &&
          !p["after:highlightElement"] &&
          (p["after:highlightElement"] = (w) => {
            p["after:highlightBlock"](Object.assign({ block: w.el }, w));
          });
    }
    function Q(p) {
      ne(p), o.push(p);
    }
    function W(p, w) {
      let A = p;
      o.forEach(function (j) {
        j[A] && j[A](w);
      });
    }
    function U(p) {
      return (
        ve("10.7.0", "highlightBlock will be removed entirely in v12.0"),
        ve("10.7.0", "Please use highlightElement now."),
        l(p)
      );
    }
    Object.assign(e, {
      highlight: m,
      highlightAuto: _,
      highlightAll: v,
      highlightElement: l,
      highlightBlock: U,
      configure: i,
      initHighlighting: b,
      initHighlightingOnLoad: h,
      registerLanguage: E,
      unregisterLanguage: C,
      listLanguages: B,
      getLanguage: F,
      registerAliases: J,
      autoDetection: te,
      inherit: bt,
      addPlugin: Q,
    }),
      (e.debugMode = function () {
        a = !1;
      }),
      (e.safeMode = function () {
        a = !0;
      }),
      (e.versionString = ro),
      (e.regex = {
        concat: _e,
        lookahead: ft,
        either: Xe,
        optional: Ea,
        anyNumberOfTimes: wa,
      });
    for (let p in Me) typeof Me[p] == "object" && We.exports(Me[p]);
    return Object.assign(e, Me), e;
  },
  Ae = lo({});
ht = Ae;
Ae.HighlightJS = Ae;
Ae.default = Ae;
var At = ht;
var Ot = {};
function co(e) {
  let t = e.regex,
    n = t.concat(
      /[\p{L}_]/u,
      t.optional(/[\p{L}0-9_.-]*:/u),
      /[\p{L}0-9_.-]*/u,
    ),
    o = /[\p{L}0-9._:-]+/u,
    a = { className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
    u = {
      begin: /\s/,
      contains: [
        { className: "keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ },
      ],
    },
    c = e.inherit(u, { begin: /\(/, end: /\)/ }),
    s = e.inherit(e.APOS_STRING_MODE, { className: "string" }),
    r = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
    d = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [
        { className: "attr", begin: o, relevance: 0 },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: "string",
              endsParent: !0,
              variants: [
                { begin: /"/, end: /"/, contains: [a] },
                { begin: /'/, end: /'/, contains: [a] },
                { begin: /[^\s"'=<>`]+/ },
              ],
            },
          ],
        },
      ],
    };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg",
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          u,
          r,
          s,
          c,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [u, c, r, s],
              },
            ],
          },
        ],
      },
      e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
      { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
      a,
      {
        className: "meta",
        end: /\?>/,
        variants: [
          { begin: /<\?xml/, relevance: 10, contains: [r] },
          { begin: /<\?[a-z][a-z0-9]+/ },
        ],
      },
      {
        className: "tag",
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [d],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: ["css", "xml"],
        },
      },
      {
        className: "tag",
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [d],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: ["javascript", "handlebars", "xml"],
        },
      },
      { className: "tag", begin: /<>|<\/>/ },
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/))),
        ),
        end: /\/?>/,
        contains: [{ className: "name", begin: n, relevance: 0, starts: d }],
      },
      {
        className: "tag",
        begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
        contains: [
          { className: "name", begin: n, relevance: 0 },
          { begin: />/, relevance: 0, endsParent: !0 },
        ],
      },
    ],
  };
}
Ot = co;
var St = Ot;
var jt = {};
function uo(e) {
  let t = e.regex,
    n = {},
    o = {
      begin: /\$\{/,
      end: /\}/,
      contains: ["self", { begin: /:-/, contains: [n] }],
    };
  Object.assign(n, {
    className: "variable",
    variants: [
      { begin: t.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])") },
      o,
    ],
  });
  let a = {
      className: "subst",
      begin: /\$\(/,
      end: /\)/,
      contains: [e.BACKSLASH_ESCAPE],
    },
    u = {
      begin: /<<-?\s*(?=\w+)/,
      starts: {
        contains: [
          e.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            className: "string",
          }),
        ],
      },
    },
    c = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [e.BACKSLASH_ESCAPE, n, a],
    };
  a.contains.push(c);
  let s = { className: "", begin: /\\"/ },
    r = { className: "string", begin: /'/, end: /'/ },
    d = {
      begin: /\$\(\(/,
      end: /\)\)/,
      contains: [
        { begin: /\d+#[0-9a-f]+/, className: "number" },
        e.NUMBER_MODE,
        n,
      ],
    },
    m = ["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"],
    y = e.SHEBANG({ binary: `(${m.join("|")})`, relevance: 10 }),
    f = {
      className: "function",
      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      returnBegin: !0,
      contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
      relevance: 0,
    },
    _ = [
      "if",
      "then",
      "else",
      "elif",
      "fi",
      "for",
      "while",
      "in",
      "do",
      "done",
      "case",
      "esac",
      "function",
    ],
    N = ["true", "false"],
    l = { match: /(\/[a-z._-]+)+/ },
    i = [
      "break",
      "cd",
      "continue",
      "eval",
      "exec",
      "exit",
      "export",
      "getopts",
      "hash",
      "pwd",
      "readonly",
      "return",
      "shift",
      "test",
      "times",
      "trap",
      "umask",
      "unset",
    ],
    b = [
      "alias",
      "bind",
      "builtin",
      "caller",
      "command",
      "declare",
      "echo",
      "enable",
      "help",
      "let",
      "local",
      "logout",
      "mapfile",
      "printf",
      "read",
      "readarray",
      "source",
      "type",
      "typeset",
      "ulimit",
      "unalias",
    ],
    h = [
      "autoload",
      "bg",
      "bindkey",
      "bye",
      "cap",
      "chdir",
      "clone",
      "comparguments",
      "compcall",
      "compctl",
      "compdescribe",
      "compfiles",
      "compgroups",
      "compquote",
      "comptags",
      "comptry",
      "compvalues",
      "dirs",
      "disable",
      "disown",
      "echotc",
      "echoti",
      "emulate",
      "fc",
      "fg",
      "float",
      "functions",
      "getcap",
      "getln",
      "history",
      "integer",
      "jobs",
      "kill",
      "limit",
      "log",
      "noglob",
      "popd",
      "print",
      "pushd",
      "pushln",
      "rehash",
      "sched",
      "setcap",
      "setopt",
      "stat",
      "suspend",
      "ttyctl",
      "unfunction",
      "unhash",
      "unlimit",
      "unsetopt",
      "vared",
      "wait",
      "whence",
      "where",
      "which",
      "zcompile",
      "zformat",
      "zftp",
      "zle",
      "zmodload",
      "zparseopts",
      "zprof",
      "zpty",
      "zregexparse",
      "zsocket",
      "zstyle",
      "ztcp",
    ],
    g = [
      "chcon",
      "chgrp",
      "chown",
      "chmod",
      "cp",
      "dd",
      "df",
      "dir",
      "dircolors",
      "ln",
      "ls",
      "mkdir",
      "mkfifo",
      "mknod",
      "mktemp",
      "mv",
      "realpath",
      "rm",
      "rmdir",
      "shred",
      "sync",
      "touch",
      "truncate",
      "vdir",
      "b2sum",
      "base32",
      "base64",
      "cat",
      "cksum",
      "comm",
      "csplit",
      "cut",
      "expand",
      "fmt",
      "fold",
      "head",
      "join",
      "md5sum",
      "nl",
      "numfmt",
      "od",
      "paste",
      "ptx",
      "pr",
      "sha1sum",
      "sha224sum",
      "sha256sum",
      "sha384sum",
      "sha512sum",
      "shuf",
      "sort",
      "split",
      "sum",
      "tac",
      "tail",
      "tr",
      "tsort",
      "unexpand",
      "uniq",
      "wc",
      "arch",
      "basename",
      "chroot",
      "date",
      "dirname",
      "du",
      "echo",
      "env",
      "expr",
      "factor",
      "groups",
      "hostid",
      "id",
      "link",
      "logname",
      "nice",
      "nohup",
      "nproc",
      "pathchk",
      "pinky",
      "printenv",
      "printf",
      "pwd",
      "readlink",
      "runcon",
      "seq",
      "sleep",
      "stat",
      "stdbuf",
      "stty",
      "tee",
      "test",
      "timeout",
      "tty",
      "uname",
      "unlink",
      "uptime",
      "users",
      "who",
      "whoami",
      "yes",
    ];
  return {
    name: "Bash",
    aliases: ["sh"],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: _,
      literal: N,
      built_in: [...i, ...b, "set", "shopt", ...h, ...g],
    },
    contains: [y, e.SHEBANG(), f, d, e.HASH_COMMENT_MODE, u, l, c, s, r, n],
  };
}
jt = uo;
var Mt = jt;
var Ct = {};
function go(e) {
  let t = e.regex,
    n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
    o = "decltype\\(auto\\)",
    a = "[a-zA-Z_]\\w*::",
    u = "<[^<>]+>",
    c = "(" + o + "|" + t.optional(a) + "[a-zA-Z_]\\w*" + t.optional(u) + ")",
    s = {
      className: "type",
      variants: [
        { begin: "\\b[a-z\\d_]*_t\\b" },
        { match: /\batomic_[a-z]{3,6}\b/ },
      ],
    },
    r = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
    d = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE],
        },
        { begin: "(u8?|U|L)?'(" + r + "|.)", end: "'", illegal: "." },
        e.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/,
        }),
      ],
    },
    m = {
      className: "number",
      variants: [
        { begin: "\\b(0b[01']+)" },
        {
          begin:
            "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
        },
        {
          begin:
            "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
        },
      ],
      relevance: 0,
    },
    y = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: {
        keyword:
          "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
      },
      contains: [
        { begin: /\\\n/, relevance: 0 },
        e.inherit(d, { className: "string" }),
        { className: "string", begin: /<.*?>/ },
        n,
        e.C_BLOCK_COMMENT_MODE,
      ],
    },
    f = { className: "title", begin: t.optional(a) + e.IDENT_RE, relevance: 0 },
    _ = t.optional(a) + e.IDENT_RE + "\\s*\\(",
    i = {
      keyword: [
        "asm",
        "auto",
        "break",
        "case",
        "continue",
        "default",
        "do",
        "else",
        "enum",
        "extern",
        "for",
        "fortran",
        "goto",
        "if",
        "inline",
        "register",
        "restrict",
        "return",
        "sizeof",
        "struct",
        "switch",
        "typedef",
        "union",
        "volatile",
        "while",
        "_Alignas",
        "_Alignof",
        "_Atomic",
        "_Generic",
        "_Noreturn",
        "_Static_assert",
        "_Thread_local",
        "alignas",
        "alignof",
        "noreturn",
        "static_assert",
        "thread_local",
        "_Pragma",
      ],
      type: [
        "float",
        "double",
        "signed",
        "unsigned",
        "int",
        "short",
        "long",
        "char",
        "void",
        "_Bool",
        "_Complex",
        "_Imaginary",
        "_Decimal32",
        "_Decimal64",
        "_Decimal128",
        "const",
        "static",
        "complex",
        "bool",
        "imaginary",
      ],
      literal: "true false NULL",
      built_in:
        "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
    },
    b = [y, s, n, e.C_BLOCK_COMMENT_MODE, m, d],
    h = {
      variants: [
        { begin: /=/, end: /;/ },
        { begin: /\(/, end: /\)/ },
        { beginKeywords: "new throw return else", end: /;/ },
      ],
      keywords: i,
      contains: b.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: i,
          contains: b.concat(["self"]),
          relevance: 0,
        },
      ]),
      relevance: 0,
    },
    g = {
      begin: "(" + c + "[\\*&\\s]+)+" + _,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: i,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        { begin: o, keywords: i, relevance: 0 },
        {
          begin: _,
          returnBegin: !0,
          contains: [e.inherit(f, { className: "title.function" })],
          relevance: 0,
        },
        { relevance: 0, match: /,/ },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: i,
          relevance: 0,
          contains: [
            n,
            e.C_BLOCK_COMMENT_MODE,
            d,
            m,
            s,
            {
              begin: /\(/,
              end: /\)/,
              keywords: i,
              relevance: 0,
              contains: ["self", n, e.C_BLOCK_COMMENT_MODE, d, m, s],
            },
          ],
        },
        s,
        n,
        e.C_BLOCK_COMMENT_MODE,
        y,
      ],
    };
  return {
    name: "C",
    aliases: ["h"],
    keywords: i,
    disableAutodetect: !0,
    illegal: "</",
    contains: [].concat(h, g, b, [
      y,
      { begin: e.IDENT_RE + "::", keywords: i },
      {
        className: "class",
        beginKeywords: "enum class struct union",
        end: /[{;:<>=]/,
        contains: [{ beginKeywords: "final class struct" }, e.TITLE_MODE],
      },
    ]),
    exports: { preprocessor: y, strings: d, keywords: i },
  };
}
Ct = go;
var Tt = Ct;
var Rt = {};
function bo(e) {
  let t = e.regex,
    n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
    o = "decltype\\(auto\\)",
    a = "[a-zA-Z_]\\w*::",
    u = "<[^<>]+>",
    c =
      "(?!struct)(" +
      o +
      "|" +
      t.optional(a) +
      "[a-zA-Z_]\\w*" +
      t.optional(u) +
      ")",
    s = { className: "type", begin: "\\b[a-z\\d_]*_t\\b" },
    r = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
    d = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE],
        },
        { begin: "(u8?|U|L)?'(" + r + "|.)", end: "'", illegal: "." },
        e.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/,
        }),
      ],
    },
    m = {
      className: "number",
      variants: [
        { begin: "\\b(0b[01']+)" },
        {
          begin:
            "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
        },
        {
          begin:
            "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
        },
      ],
      relevance: 0,
    },
    y = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: {
        keyword:
          "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
      },
      contains: [
        { begin: /\\\n/, relevance: 0 },
        e.inherit(d, { className: "string" }),
        { className: "string", begin: /<.*?>/ },
        n,
        e.C_BLOCK_COMMENT_MODE,
      ],
    },
    f = { className: "title", begin: t.optional(a) + e.IDENT_RE, relevance: 0 },
    _ = t.optional(a) + e.IDENT_RE + "\\s*\\(",
    N = [
      "alignas",
      "alignof",
      "and",
      "and_eq",
      "asm",
      "atomic_cancel",
      "atomic_commit",
      "atomic_noexcept",
      "auto",
      "bitand",
      "bitor",
      "break",
      "case",
      "catch",
      "class",
      "co_await",
      "co_return",
      "co_yield",
      "compl",
      "concept",
      "const_cast|10",
      "consteval",
      "constexpr",
      "constinit",
      "continue",
      "decltype",
      "default",
      "delete",
      "do",
      "dynamic_cast|10",
      "else",
      "enum",
      "explicit",
      "export",
      "extern",
      "false",
      "final",
      "for",
      "friend",
      "goto",
      "if",
      "import",
      "inline",
      "module",
      "mutable",
      "namespace",
      "new",
      "noexcept",
      "not",
      "not_eq",
      "nullptr",
      "operator",
      "or",
      "or_eq",
      "override",
      "private",
      "protected",
      "public",
      "reflexpr",
      "register",
      "reinterpret_cast|10",
      "requires",
      "return",
      "sizeof",
      "static_assert",
      "static_cast|10",
      "struct",
      "switch",
      "synchronized",
      "template",
      "this",
      "thread_local",
      "throw",
      "transaction_safe",
      "transaction_safe_dynamic",
      "true",
      "try",
      "typedef",
      "typeid",
      "typename",
      "union",
      "using",
      "virtual",
      "volatile",
      "while",
      "xor",
      "xor_eq",
    ],
    l = [
      "bool",
      "char",
      "char16_t",
      "char32_t",
      "char8_t",
      "double",
      "float",
      "int",
      "long",
      "short",
      "void",
      "wchar_t",
      "unsigned",
      "signed",
      "const",
      "static",
    ],
    i = [
      "any",
      "auto_ptr",
      "barrier",
      "binary_semaphore",
      "bitset",
      "complex",
      "condition_variable",
      "condition_variable_any",
      "counting_semaphore",
      "deque",
      "false_type",
      "future",
      "imaginary",
      "initializer_list",
      "istringstream",
      "jthread",
      "latch",
      "lock_guard",
      "multimap",
      "multiset",
      "mutex",
      "optional",
      "ostringstream",
      "packaged_task",
      "pair",
      "promise",
      "priority_queue",
      "queue",
      "recursive_mutex",
      "recursive_timed_mutex",
      "scoped_lock",
      "set",
      "shared_future",
      "shared_lock",
      "shared_mutex",
      "shared_timed_mutex",
      "shared_ptr",
      "stack",
      "string_view",
      "stringstream",
      "timed_mutex",
      "thread",
      "true_type",
      "tuple",
      "unique_lock",
      "unique_ptr",
      "unordered_map",
      "unordered_multimap",
      "unordered_multiset",
      "unordered_set",
      "variant",
      "vector",
      "weak_ptr",
      "wstring",
      "wstring_view",
    ],
    b = [
      "abort",
      "abs",
      "acos",
      "apply",
      "as_const",
      "asin",
      "atan",
      "atan2",
      "calloc",
      "ceil",
      "cerr",
      "cin",
      "clog",
      "cos",
      "cosh",
      "cout",
      "declval",
      "endl",
      "exchange",
      "exit",
      "exp",
      "fabs",
      "floor",
      "fmod",
      "forward",
      "fprintf",
      "fputs",
      "free",
      "frexp",
      "fscanf",
      "future",
      "invoke",
      "isalnum",
      "isalpha",
      "iscntrl",
      "isdigit",
      "isgraph",
      "islower",
      "isprint",
      "ispunct",
      "isspace",
      "isupper",
      "isxdigit",
      "labs",
      "launder",
      "ldexp",
      "log",
      "log10",
      "make_pair",
      "make_shared",
      "make_shared_for_overwrite",
      "make_tuple",
      "make_unique",
      "malloc",
      "memchr",
      "memcmp",
      "memcpy",
      "memset",
      "modf",
      "move",
      "pow",
      "printf",
      "putchar",
      "puts",
      "realloc",
      "scanf",
      "sin",
      "sinh",
      "snprintf",
      "sprintf",
      "sqrt",
      "sscanf",
      "std",
      "stderr",
      "stdin",
      "stdout",
      "strcat",
      "strchr",
      "strcmp",
      "strcpy",
      "strcspn",
      "strlen",
      "strncat",
      "strncmp",
      "strncpy",
      "strpbrk",
      "strrchr",
      "strspn",
      "strstr",
      "swap",
      "tan",
      "tanh",
      "terminate",
      "to_underlying",
      "tolower",
      "toupper",
      "vfprintf",
      "visit",
      "vprintf",
      "vsprintf",
    ],
    v = {
      type: l,
      keyword: N,
      literal: ["NULL", "false", "nullopt", "nullptr", "true"],
      built_in: ["_Pragma"],
      _type_hints: i,
    },
    $ = {
      className: "function.dispatch",
      relevance: 0,
      keywords: { _hint: b },
      begin: t.concat(
        /\b/,
        /(?!decltype)/,
        /(?!if)/,
        /(?!for)/,
        /(?!switch)/,
        /(?!while)/,
        e.IDENT_RE,
        t.lookahead(/(<[^<>]+>|)\s*\(/),
      ),
    },
    E = [$, y, s, n, e.C_BLOCK_COMMENT_MODE, m, d],
    C = {
      variants: [
        { begin: /=/, end: /;/ },
        { begin: /\(/, end: /\)/ },
        { beginKeywords: "new throw return else", end: /;/ },
      ],
      keywords: v,
      contains: E.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: v,
          contains: E.concat(["self"]),
          relevance: 0,
        },
      ]),
      relevance: 0,
    },
    B = {
      className: "function",
      begin: "(" + c + "[\\*&\\s]+)+" + _,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: v,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        { begin: o, keywords: v, relevance: 0 },
        { begin: _, returnBegin: !0, contains: [f], relevance: 0 },
        { begin: /::/, relevance: 0 },
        { begin: /:/, endsWithParent: !0, contains: [d, m] },
        { relevance: 0, match: /,/ },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: v,
          relevance: 0,
          contains: [
            n,
            e.C_BLOCK_COMMENT_MODE,
            d,
            m,
            s,
            {
              begin: /\(/,
              end: /\)/,
              keywords: v,
              relevance: 0,
              contains: ["self", n, e.C_BLOCK_COMMENT_MODE, d, m, s],
            },
          ],
        },
        s,
        n,
        e.C_BLOCK_COMMENT_MODE,
        y,
      ],
    };
  return {
    name: "C++",
    aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
    keywords: v,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(C, B, $, E, [
      y,
      {
        begin:
          "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
        end: ">",
        keywords: v,
        contains: ["self", s],
      },
      { begin: e.IDENT_RE + "::", keywords: v },
      {
        match: [
          /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
          /\s+/,
          /\w+/,
        ],
        className: { 1: "keyword", 3: "title.class" },
      },
    ]),
  };
}
Rt = bo;
var xt = Rt;
var Dt = {};
function mo(e) {
  let t = [
      "bool",
      "byte",
      "char",
      "decimal",
      "delegate",
      "double",
      "dynamic",
      "enum",
      "float",
      "int",
      "long",
      "nint",
      "nuint",
      "object",
      "sbyte",
      "short",
      "string",
      "ulong",
      "uint",
      "ushort",
    ],
    n = [
      "public",
      "private",
      "protected",
      "static",
      "internal",
      "protected",
      "abstract",
      "async",
      "extern",
      "override",
      "unsafe",
      "virtual",
      "new",
      "sealed",
      "partial",
    ],
    o = ["default", "false", "null", "true"],
    a = [
      "abstract",
      "as",
      "base",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "do",
      "else",
      "event",
      "explicit",
      "extern",
      "finally",
      "fixed",
      "for",
      "foreach",
      "goto",
      "if",
      "implicit",
      "in",
      "interface",
      "internal",
      "is",
      "lock",
      "namespace",
      "new",
      "operator",
      "out",
      "override",
      "params",
      "private",
      "protected",
      "public",
      "readonly",
      "record",
      "ref",
      "return",
      "scoped",
      "sealed",
      "sizeof",
      "stackalloc",
      "static",
      "struct",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "unchecked",
      "unsafe",
      "using",
      "virtual",
      "void",
      "volatile",
      "while",
    ],
    u = [
      "add",
      "alias",
      "and",
      "ascending",
      "async",
      "await",
      "by",
      "descending",
      "equals",
      "from",
      "get",
      "global",
      "group",
      "init",
      "into",
      "join",
      "let",
      "nameof",
      "not",
      "notnull",
      "on",
      "or",
      "orderby",
      "partial",
      "remove",
      "select",
      "set",
      "unmanaged",
      "value|0",
      "var",
      "when",
      "where",
      "with",
      "yield",
    ],
    c = { keyword: a.concat(u), built_in: t, literal: o },
    s = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }),
    r = {
      className: "number",
      variants: [
        { begin: "\\b(0b[01']+)" },
        {
          begin:
            "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)",
        },
        {
          begin:
            "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
        },
      ],
      relevance: 0,
    },
    d = {
      className: "string",
      begin: '@"',
      end: '"',
      contains: [{ begin: '""' }],
    },
    m = e.inherit(d, { illegal: /\n/ }),
    y = { className: "subst", begin: /\{/, end: /\}/, keywords: c },
    f = e.inherit(y, { illegal: /\n/ }),
    _ = {
      className: "string",
      begin: /\$"/,
      end: '"',
      illegal: /\n/,
      contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, e.BACKSLASH_ESCAPE, f],
    },
    N = {
      className: "string",
      begin: /\$@"/,
      end: '"',
      contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, y],
    },
    l = e.inherit(N, {
      illegal: /\n/,
      contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, f],
    });
  (y.contains = [
    N,
    _,
    d,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    r,
    e.C_BLOCK_COMMENT_MODE,
  ]),
    (f.contains = [
      l,
      _,
      m,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      r,
      e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ }),
    ]);
  let i = { variants: [N, _, d, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE] },
    b = { begin: "<", end: ">", contains: [{ beginKeywords: "in out" }, s] },
    h =
      e.IDENT_RE +
      "(<" +
      e.IDENT_RE +
      "(\\s*,\\s*" +
      e.IDENT_RE +
      ")*>)?(\\[\\])?",
    g = { begin: "@" + e.IDENT_RE, relevance: 0 };
  return {
    name: "C#",
    aliases: ["cs", "c#"],
    keywords: c,
    illegal: /::/,
    contains: [
      e.COMMENT("///", "$", {
        returnBegin: !0,
        contains: [
          {
            className: "doctag",
            variants: [
              { begin: "///", relevance: 0 },
              { begin: "<!--|-->" },
              { begin: "</?", end: ">" },
            ],
          },
        ],
      }),
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: {
          keyword:
            "if else elif endif define undef warning error line region endregion pragma checksum",
        },
      },
      i,
      r,
      {
        beginKeywords: "class interface",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [
          { beginKeywords: "where class" },
          s,
          b,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [s, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
      },
      {
        beginKeywords: "record",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [s, b, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
      },
      {
        className: "meta",
        begin: "^\\s*\\[(?=[\\w])",
        excludeBegin: !0,
        end: "\\]",
        excludeEnd: !0,
        contains: [{ className: "string", begin: /"/, end: /"/ }],
      },
      { beginKeywords: "new return throw await else", relevance: 0 },
      {
        className: "function",
        begin: "(" + h + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
        returnBegin: !0,
        end: /\s*[{;=]/,
        excludeEnd: !0,
        keywords: c,
        contains: [
          { beginKeywords: n.join(" "), relevance: 0 },
          {
            begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
            returnBegin: !0,
            contains: [e.TITLE_MODE, b],
            relevance: 0,
          },
          { match: /\(\)/ },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: c,
            relevance: 0,
            contains: [i, r, e.C_BLOCK_COMMENT_MODE],
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      g,
    ],
  };
}
Dt = mo;
var It = Dt;
var Lt = {},
  ho = (e) => ({
    IMPORTANT: { scope: "meta", begin: "!important" },
    BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
    },
    FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin:
        e.NUMBER_RE +
        "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0,
    },
    CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ },
  }),
  po = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "p",
    "q",
    "quote",
    "samp",
    "section",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video",
  ],
  fo = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    "min-width",
    "max-width",
    "min-height",
    "max-height",
  ],
  _o = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    "host",
    "host-context",
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    "lang",
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    "nth-child",
    "nth-col",
    "nth-last-child",
    "nth-last-col",
    "nth-last-of-type",
    "nth-of-type",
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where",
  ],
  yo = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error",
  ],
  vo = [
    "align-content",
    "align-items",
    "align-self",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "empty-cells",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "isolation",
    "justify-content",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "row-gap",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "speak",
    "speak-as",
    "src",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "unicode-bidi",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "z-index",
  ].reverse();
function wo(e) {
  let t = e.regex,
    n = ho(e),
    o = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
    a = "and or not only",
    u = /@-?\w[\w]*(-\w+)*/,
    c = "[a-zA-Z-][a-zA-Z0-9_-]*",
    s = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: { keyframePosition: "selector-tag" },
    contains: [
      n.BLOCK_COMMENT,
      o,
      n.CSS_NUMBER_MODE,
      { className: "selector-id", begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
      { className: "selector-class", begin: "\\." + c, relevance: 0 },
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + _o.join("|") + ")" },
          { begin: ":(:)?(" + yo.join("|") + ")" },
        ],
      },
      n.CSS_VARIABLE,
      { className: "attribute", begin: "\\b(" + vo.join("|") + ")\\b" },
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          n.BLOCK_COMMENT,
          n.HEXCOLOR,
          n.IMPORTANT,
          n.CSS_NUMBER_MODE,
          ...s,
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            keywords: { built_in: "url data-uri" },
            contains: [
              ...s,
              {
                className: "string",
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0,
              },
            ],
          },
          n.FUNCTION_DISPATCH,
        ],
      },
      {
        begin: t.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        contains: [
          { className: "keyword", begin: u },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: a,
              attribute: fo.join(" "),
            },
            contains: [
              { begin: /[a-z-]+(?=:)/, className: "attribute" },
              ...s,
              n.CSS_NUMBER_MODE,
            ],
          },
        ],
      },
      { className: "selector-tag", begin: "\\b(" + po.join("|") + ")\\b" },
    ],
  };
}
Lt = wo;
var Bt = Lt;
var Ft = {};
function Eo(e) {
  let t = e.regex,
    n = { begin: /<\/?[A-Za-z_]/, end: ">", subLanguage: "xml", relevance: 0 },
    o = { begin: "^[-\\*]{3,}", end: "$" },
    a = {
      className: "code",
      variants: [
        { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
        { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
        { begin: "```", end: "```+[ ]*$" },
        { begin: "~~~", end: "~~~+[ ]*$" },
        { begin: "`.+?`" },
        {
          begin: "(?=^( {4}|\\t))",
          contains: [{ begin: "^( {4}|\\t)", end: "(\\n)$" }],
          relevance: 0,
        },
      ],
    },
    u = {
      className: "bullet",
      begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
      end: "\\s+",
      excludeEnd: !0,
    },
    c = {
      begin: /^\[[^\n]+\]:/,
      returnBegin: !0,
      contains: [
        {
          className: "symbol",
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0,
        },
        { className: "link", begin: /:\s*/, end: /$/, excludeBegin: !0 },
      ],
    },
    s = /[A-Za-z][A-Za-z0-9+.-]*/,
    r = {
      variants: [
        { begin: /\[.+?\]\[.*?\]/, relevance: 0 },
        {
          begin:
            /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2,
        },
        { begin: t.concat(/\[.+?\]\(/, s, /:\/\/.*?\)/), relevance: 2 },
        { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
        { begin: /\[.*?\]\(.*?\)/, relevance: 0 },
      ],
      returnBegin: !0,
      contains: [
        { match: /\[(?=\])/ },
        {
          className: "string",
          relevance: 0,
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          returnEnd: !0,
        },
        {
          className: "link",
          relevance: 0,
          begin: "\\]\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0,
        },
        {
          className: "symbol",
          relevance: 0,
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0,
        },
      ],
    },
    d = {
      className: "strong",
      contains: [],
      variants: [
        { begin: /_{2}/, end: /_{2}/ },
        { begin: /\*{2}/, end: /\*{2}/ },
      ],
    },
    m = {
      className: "emphasis",
      contains: [],
      variants: [
        { begin: /\*(?!\*)/, end: /\*/ },
        { begin: /_(?!_)/, end: /_/, relevance: 0 },
      ],
    },
    y = e.inherit(d, { contains: [] }),
    f = e.inherit(m, { contains: [] });
  d.contains.push(f), m.contains.push(y);
  let _ = [n, r];
  return (
    [d, m, y, f].forEach((i) => {
      i.contains = i.contains.concat(_);
    }),
    (_ = _.concat(d, m)),
    {
      name: "Markdown",
      aliases: ["md", "mkdown", "mkd"],
      contains: [
        {
          className: "section",
          variants: [
            { begin: "^#{1,6}", end: "$", contains: _ },
            {
              begin: "(?=^.+?\\n[=-]{2,}$)",
              contains: [
                { begin: "^[=-]*$" },
                { begin: "^", end: "\\n", contains: _ },
              ],
            },
          ],
        },
        n,
        u,
        d,
        m,
        { className: "quote", begin: "^>\\s+", contains: _, end: "$" },
        a,
        o,
        r,
        c,
      ],
    }
  );
}
Ft = Eo;
var zt = Ft;
var Pt = {};
function ko(e) {
  let t = e.regex;
  return {
    name: "Diff",
    aliases: ["patch"],
    contains: [
      {
        className: "meta",
        relevance: 10,
        match: t.either(
          /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
          /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
          /^--- +\d+,\d+ +----$/,
        ),
      },
      {
        className: "comment",
        variants: [
          {
            begin: t.either(
              /Index: /,
              /^index/,
              /={3,}/,
              /^-{3}/,
              /^\*{3} /,
              /^\+{3}/,
              /^diff --git/,
            ),
            end: /$/,
          },
          { match: /^\*{15}$/ },
        ],
      },
      { className: "addition", begin: /^\+/, end: /$/ },
      { className: "deletion", begin: /^-/, end: /$/ },
      { className: "addition", begin: /^!/, end: /$/ },
    ],
  };
}
Pt = ko;
var Ut = Pt;
var Ht = {};
function No(e) {
  let t = e.regex,
    n =
      "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
    o = t.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/),
    a = t.concat(o, /(::\w+)*/),
    u = {
      "variable.constant": ["__FILE__", "__LINE__"],
      "variable.language": ["self", "super"],
      keyword: [
        "alias",
        "and",
        "attr_accessor",
        "attr_reader",
        "attr_writer",
        "begin",
        "BEGIN",
        "break",
        "case",
        "class",
        "defined",
        "do",
        "else",
        "elsif",
        "end",
        "END",
        "ensure",
        "for",
        "if",
        "in",
        "include",
        "module",
        "next",
        "not",
        "or",
        "redo",
        "require",
        "rescue",
        "retry",
        "return",
        "then",
        "undef",
        "unless",
        "until",
        "when",
        "while",
        "yield",
      ],
      built_in: ["proc", "lambda"],
      literal: ["true", "false", "nil"],
    },
    c = { className: "doctag", begin: "@[A-Za-z]+" },
    s = { begin: "#<", end: ">" },
    r = [
      e.COMMENT("#", "$", { contains: [c] }),
      e.COMMENT("^=begin", "^=end", { contains: [c], relevance: 10 }),
      e.COMMENT("^__END__", e.MATCH_NOTHING_RE),
    ],
    d = { className: "subst", begin: /#\{/, end: /\}/, keywords: u },
    m = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE, d],
      variants: [
        { begin: /'/, end: /'/ },
        { begin: /"/, end: /"/ },
        { begin: /`/, end: /`/ },
        { begin: /%[qQwWx]?\(/, end: /\)/ },
        { begin: /%[qQwWx]?\[/, end: /\]/ },
        { begin: /%[qQwWx]?\{/, end: /\}/ },
        { begin: /%[qQwWx]?</, end: />/ },
        { begin: /%[qQwWx]?\//, end: /\// },
        { begin: /%[qQwWx]?%/, end: /%/ },
        { begin: /%[qQwWx]?-/, end: /-/ },
        { begin: /%[qQwWx]?\|/, end: /\|/ },
        { begin: /\B\?(\\\d{1,3})/ },
        { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
        { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
        { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
        { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
        { begin: /\B\?\\?\S/ },
        {
          begin: t.concat(
            /<<[-~]?'?/,
            t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/),
          ),
          contains: [
            e.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              contains: [e.BACKSLASH_ESCAPE, d],
            }),
          ],
        },
      ],
    },
    y = "[1-9](_?[0-9])*|0",
    f = "[0-9](_?[0-9])*",
    _ = {
      className: "number",
      relevance: 0,
      variants: [
        { begin: `\\b(${y})(\\.(${f}))?([eE][+-]?(${f})|r)?i?\\b` },
        { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
        { begin: "\\b0(_?[0-7])+r?i?\\b" },
      ],
    },
    N = {
      variants: [
        { match: /\(\)/ },
        {
          className: "params",
          begin: /\(/,
          end: /(?=\))/,
          excludeBegin: !0,
          endsParent: !0,
          keywords: u,
        },
      ],
    },
    g = [
      m,
      {
        variants: [
          { match: [/class\s+/, a, /\s+<\s+/, a] },
          { match: [/class\s+/, a] },
        ],
        scope: { 2: "title.class", 4: "title.class.inherited" },
        keywords: u,
      },
      { relevance: 0, match: [a, /\.new[ (]/], scope: { 1: "title.class" } },
      {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant",
      },
      {
        match: [/def/, /\s+/, n],
        scope: { 1: "keyword", 3: "title.function" },
        contains: [N],
      },
      { begin: e.IDENT_RE + "::" },
      {
        className: "symbol",
        begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0,
      },
      {
        className: "symbol",
        begin: ":(?!\\s)",
        contains: [m, { begin: n }],
        relevance: 0,
      },
      _,
      {
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])",
      },
      {
        className: "params",
        begin: /\|/,
        end: /\|/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        keywords: u,
      },
      {
        begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
        keywords: "unless",
        contains: [
          {
            className: "regexp",
            contains: [e.BACKSLASH_ESCAPE, d],
            illegal: /\n/,
            variants: [
              { begin: "/", end: "/[a-z]*" },
              { begin: /%r\{/, end: /\}[a-z]*/ },
              { begin: "%r\\(", end: "\\)[a-z]*" },
              { begin: "%r!", end: "![a-z]*" },
              { begin: "%r\\[", end: "\\][a-z]*" },
            ],
          },
        ].concat(s, r),
        relevance: 0,
      },
    ].concat(s, r);
  (d.contains = g), (N.contains = g);
  let v = "[>?]>",
    $ = "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]",
    E = "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>",
    C = [
      { begin: /^\s*=>/, starts: { end: "$", contains: g } },
      {
        className: "meta.prompt",
        begin: "^(" + v + "|" + $ + "|" + E + ")(?=[ ])",
        starts: { end: "$", keywords: u, contains: g },
      },
    ];
  return (
    r.unshift(s),
    {
      name: "Ruby",
      aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
      keywords: u,
      illegal: /\/\*/,
      contains: [e.SHEBANG({ binary: "ruby" })].concat(C).concat(r).concat(g),
    }
  );
}
Ht = No;
var Kt = Ht;
var qt = {};
function $o(e) {
  let u = {
    keyword: [
      "break",
      "case",
      "chan",
      "const",
      "continue",
      "default",
      "defer",
      "else",
      "fallthrough",
      "for",
      "func",
      "go",
      "goto",
      "if",
      "import",
      "interface",
      "map",
      "package",
      "range",
      "return",
      "select",
      "struct",
      "switch",
      "type",
      "var",
    ],
    type: [
      "bool",
      "byte",
      "complex64",
      "complex128",
      "error",
      "float32",
      "float64",
      "int8",
      "int16",
      "int32",
      "int64",
      "string",
      "uint8",
      "uint16",
      "uint32",
      "uint64",
      "int",
      "uint",
      "uintptr",
      "rune",
    ],
    literal: ["true", "false", "iota", "nil"],
    built_in: [
      "append",
      "cap",
      "close",
      "complex",
      "copy",
      "imag",
      "len",
      "make",
      "new",
      "panic",
      "print",
      "println",
      "real",
      "recover",
      "delete",
    ],
  };
  return {
    name: "Go",
    aliases: ["golang"],
    keywords: u,
    illegal: "</",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        className: "string",
        variants: [
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          { begin: "`", end: "`" },
        ],
      },
      {
        className: "number",
        variants: [
          { begin: e.C_NUMBER_RE + "[i]", relevance: 1 },
          e.C_NUMBER_MODE,
        ],
      },
      { begin: /:=/ },
      {
        className: "function",
        beginKeywords: "func",
        end: "\\s*(\\{|$)",
        excludeEnd: !0,
        contains: [
          e.TITLE_MODE,
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: !0,
            keywords: u,
            illegal: /["']/,
          },
        ],
      },
    ],
  };
}
qt = $o;
var Zt = qt;
var Gt = {};
function Ao(e) {
  let t = e.regex,
    n = /[_A-Za-z][_0-9A-Za-z]*/;
  return {
    name: "GraphQL",
    aliases: ["gql"],
    case_insensitive: !0,
    disableAutodetect: !1,
    keywords: {
      keyword: [
        "query",
        "mutation",
        "subscription",
        "type",
        "input",
        "schema",
        "directive",
        "interface",
        "union",
        "scalar",
        "fragment",
        "enum",
        "on",
      ],
      literal: ["true", "false", "null"],
    },
    contains: [
      e.HASH_COMMENT_MODE,
      e.QUOTE_STRING_MODE,
      e.NUMBER_MODE,
      { scope: "punctuation", match: /[.]{3}/, relevance: 0 },
      {
        scope: "punctuation",
        begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
        relevance: 0,
      },
      {
        scope: "variable",
        begin: /\$/,
        end: /\W/,
        excludeEnd: !0,
        relevance: 0,
      },
      { scope: "meta", match: /@\w+/, excludeEnd: !0 },
      {
        scope: "symbol",
        begin: t.concat(n, t.lookahead(/\s*:/)),
        relevance: 0,
      },
    ],
    illegal: [/[;<']/, /BEGIN/],
  };
}
Gt = Ao;
var Wt = Gt;
var Qt = {};
function Oo(e) {
  let t = e.regex,
    n = {
      className: "number",
      relevance: 0,
      variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: e.NUMBER_RE }],
    },
    o = e.COMMENT();
  o.variants = [
    { begin: /;/, end: /$/ },
    { begin: /#/, end: /$/ },
  ];
  let a = {
      className: "variable",
      variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }],
    },
    u = { className: "literal", begin: /\bon|off|true|false|yes|no\b/ },
    c = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [
        { begin: "'''", end: "'''", relevance: 10 },
        { begin: '"""', end: '"""', relevance: 10 },
        { begin: '"', end: '"' },
        { begin: "'", end: "'" },
      ],
    },
    s = {
      begin: /\[/,
      end: /\]/,
      contains: [o, u, a, c, n, "self"],
      relevance: 0,
    },
    r = /[A-Za-z0-9_-]+/,
    d = /"(\\"|[^"])*"/,
    m = /'[^']*'/,
    y = t.either(r, d, m),
    f = t.concat(y, "(\\s*\\.\\s*", y, ")*", t.lookahead(/\s*=\s*[^#\s]/));
  return {
    name: "TOML, also INI",
    aliases: ["toml"],
    case_insensitive: !0,
    illegal: /\S/,
    contains: [
      o,
      { className: "section", begin: /\[+/, end: /\]+/ },
      {
        begin: f,
        className: "attr",
        starts: { end: /$/, contains: [o, s, u, a, c, n] },
      },
    ],
  };
}
Qt = Oo;
var Xt = Qt;
var Jt = {},
  we = "[0-9](_*[0-9])*",
  xe = `\\.(${we})`,
  De = "[0-9a-fA-F](_*[0-9a-fA-F])*",
  Vt = {
    className: "number",
    variants: [
      { begin: `(\\b(${we})((${xe})|\\.)?|(${xe}))[eE][+-]?(${we})[fFdD]?\\b` },
      { begin: `\\b(${we})((${xe})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${xe})[fFdD]?\\b` },
      { begin: `\\b(${we})[fFdD]\\b` },
      {
        begin: `\\b0[xX]((${De})\\.?|(${De})?\\.(${De}))[pP][+-]?(${we})[fFdD]?\\b`,
      },
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      { begin: `\\b0[xX](${De})[lL]?\\b` },
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
    ],
    relevance: 0,
  };
function Yt(e, t, n) {
  return n === -1 ? "" : e.replace(t, (o) => Yt(e, t, n - 1));
}
function So(e) {
  let t = e.regex,
    n = "[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*",
    o = n + Yt("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2),
    r = {
      keyword: [
        "synchronized",
        "abstract",
        "private",
        "var",
        "static",
        "if",
        "const ",
        "for",
        "while",
        "strictfp",
        "finally",
        "protected",
        "import",
        "native",
        "final",
        "void",
        "enum",
        "else",
        "break",
        "transient",
        "catch",
        "instanceof",
        "volatile",
        "case",
        "assert",
        "package",
        "default",
        "public",
        "try",
        "switch",
        "continue",
        "throws",
        "protected",
        "public",
        "private",
        "module",
        "requires",
        "exports",
        "do",
        "sealed",
      ],
      literal: ["false", "true", "null"],
      type: [
        "char",
        "boolean",
        "long",
        "float",
        "int",
        "byte",
        "short",
        "double",
      ],
      built_in: ["super", "this"],
    },
    d = {
      className: "meta",
      begin: "@" + n,
      contains: [{ begin: /\(/, end: /\)/, contains: ["self"] }],
    },
    m = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      keywords: r,
      relevance: 0,
      contains: [e.C_BLOCK_COMMENT_MODE],
      endsParent: !0,
    };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: r,
    illegal: /<\/|#/,
    contains: [
      e.COMMENT("/\\*\\*", "\\*/", {
        relevance: 0,
        contains: [
          { begin: /\w+@/, relevance: 0 },
          { className: "doctag", begin: "@[A-Za-z]+" },
        ],
      }),
      { begin: /import java\.[a-z]+\./, keywords: "import", relevance: 2 },
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        begin: /"""/,
        end: /"""/,
        className: "string",
        contains: [e.BACKSLASH_ESCAPE],
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      {
        match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, n],
        className: { 1: "keyword", 3: "title.class" },
      },
      { match: /non-sealed/, scope: "keyword" },
      {
        begin: [t.concat(/(?!else)/, n), /\s+/, n, /\s+/, /=(?!=)/],
        className: { 1: "type", 3: "variable", 5: "operator" },
      },
      {
        begin: [/record/, /\s+/, n],
        className: { 1: "keyword", 3: "title.class" },
        contains: [m, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
      },
      { beginKeywords: "new throw return else", relevance: 0 },
      {
        begin: ["(?:" + o + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
        className: { 2: "title.function" },
        keywords: r,
        contains: [
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: r,
            relevance: 0,
            contains: [
              d,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              Vt,
              e.C_BLOCK_COMMENT_MODE,
            ],
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      Vt,
      d,
    ],
  };
}
Jt = So;
var en = Jt;
var nn = {},
  tn = "[A-Za-z$_][0-9A-Za-z$_]*",
  jo = [
    "as",
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
  ],
  Mo = ["true", "false", "null", "undefined", "NaN", "Infinity"],
  an = [
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    "Math",
    "Date",
    "Number",
    "BigInt",
    "String",
    "RegExp",
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    "Reflect",
    "Proxy",
    "Intl",
    "WebAssembly",
  ],
  on = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",
  ],
  sn = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape",
  ],
  Co = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "module",
    "global",
  ],
  To = [].concat(sn, an, on);
function Ro(e) {
  let t = e.regex,
    n = (w, { after: A }) => {
      let j = "</" + w[0].slice(1);
      return w.input.indexOf(j, A) !== -1;
    },
    o = tn,
    a = { begin: "<>", end: "</>" },
    u = /<[A-Za-z0-9\\._:-]+\s*\/>/,
    c = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (w, A) => {
        let j = w[0].length + w.index,
          L = w.input[j];
        if (L === "<" || L === ",") {
          A.ignoreMatch();
          return;
        }
        L === ">" && (n(w, { after: j }) || A.ignoreMatch());
        let q;
        (q = w.input.substring(j).match(/^\s+extends\s+/)) &&
          q.index === 0 &&
          A.ignoreMatch();
      },
    },
    s = {
      $pattern: tn,
      keyword: jo,
      literal: Mo,
      built_in: To,
      "variable.language": Co,
    },
    r = "[0-9](_?[0-9])*",
    d = `\\.(${r})`,
    m = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
    y = {
      className: "number",
      variants: [
        { begin: `(\\b(${m})((${d})|\\.)?|(${d}))[eE][+-]?(${r})\\b` },
        { begin: `\\b(${m})\\b((${d})\\b|\\.)?|(${d})\\b` },
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        { begin: "\\b0[0-7]+n?\\b" },
      ],
      relevance: 0,
    },
    f = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: s,
      contains: [],
    },
    _ = {
      begin: "html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, f],
        subLanguage: "xml",
      },
    },
    N = {
      begin: "css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, f],
        subLanguage: "css",
      },
    },
    l = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [e.BACKSLASH_ESCAPE, f],
    },
    b = {
      className: "comment",
      variants: [
        e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                { className: "doctag", begin: "@[A-Za-z]+" },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0,
                },
                {
                  className: "variable",
                  begin: o + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0,
                },
                { begin: /(?=[^\n])\s/, relevance: 0 },
              ],
            },
          ],
        }),
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE,
      ],
    },
    h = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, _, N, l, y];
  f.contains = h.concat({
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: ["self"].concat(h),
  });
  let g = [].concat(b, f.contains),
    v = g.concat([
      { begin: /\(/, end: /\)/, keywords: s, contains: ["self"].concat(g) },
    ]),
    $ = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: s,
      contains: v,
    },
    E = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            o,
            /\s+/,
            /extends/,
            /\s+/,
            t.concat(o, "(", t.concat(/\./, o), ")*"),
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited",
          },
        },
        {
          match: [/class/, /\s+/, o],
          scope: { 1: "keyword", 3: "title.class" },
        },
      ],
    },
    C = {
      relevance: 0,
      match: t.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      ),
      className: "title.class",
      keywords: { _: [...an, ...on] },
    },
    B = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/,
    },
    F = {
      variants: [
        { match: [/function/, /\s+/, o, /(?=\s*\()/] },
        { match: [/function/, /\s*(?=\()/] },
      ],
      className: { 1: "keyword", 3: "title.function" },
      label: "func.def",
      contains: [$],
      illegal: /%/,
    },
    J = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant",
    };
  function te(w) {
    return t.concat("(?!", w.join("|"), ")");
  }
  let ne = {
      match: t.concat(/\b/, te([...sn, "super"]), o, t.lookahead(/\(/)),
      className: "title.function",
      relevance: 0,
    },
    Q = {
      begin: t.concat(/\./, t.lookahead(t.concat(o, /(?![0-9A-Za-z$_(])/))),
      end: o,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0,
    },
    W = {
      match: [/get|set/, /\s+/, o, /(?=\()/],
      className: { 1: "keyword", 3: "title.function" },
      contains: [{ begin: /\(\)/ }, $],
    },
    U =
      "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
      e.UNDERSCORE_IDENT_RE +
      ")\\s*=>",
    p = {
      match: [
        /const|var|let/,
        /\s+/,
        o,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        t.lookahead(U),
      ],
      keywords: "async",
      className: { 1: "keyword", 3: "title.function" },
      contains: [$],
    };
  return {
    name: "Javascript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    exports: { PARAMS_CONTAINS: v, CLASS_REFERENCE: C },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
      B,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      _,
      N,
      l,
      b,
      y,
      C,
      { className: "attr", begin: o + t.lookahead(":"), relevance: 0 },
      p,
      {
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          b,
          e.REGEXP_MODE,
          {
            className: "function",
            begin: U,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                  { className: null, begin: /\(\s*\)/, skip: !0 },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: v,
                  },
                ],
              },
            ],
          },
          { begin: /,/, relevance: 0 },
          { match: /\s+/, relevance: 0 },
          {
            variants: [
              { begin: a.begin, end: a.end },
              { match: u },
              { begin: c.begin, "on:begin": c.isTrulyOpeningTag, end: c.end },
            ],
            subLanguage: "xml",
            contains: [
              { begin: c.begin, end: c.end, skip: !0, contains: ["self"] },
            ],
          },
        ],
      },
      F,
      { beginKeywords: "while if switch catch for" },
      {
        begin:
          "\\b(?!function)" +
          e.UNDERSCORE_IDENT_RE +
          "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: !0,
        label: "func.def",
        contains: [
          $,
          e.inherit(e.TITLE_MODE, { begin: o, className: "title.function" }),
        ],
      },
      { match: /\.\.\./, relevance: 0 },
      Q,
      { match: "\\$" + o, relevance: 0 },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [$],
      },
      ne,
      J,
      E,
      W,
      { match: /\$[(.]/ },
    ],
  };
}
nn = Ro;
var rn = nn;
var ln = {};
function xo(e) {
  let t = {
      className: "attr",
      begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
      relevance: 1.01,
    },
    n = { match: /[{}[\],:]/, className: "punctuation", relevance: 0 },
    o = ["true", "false", "null"],
    a = { scope: "literal", beginKeywords: o.join(" ") };
  return {
    name: "JSON",
    keywords: { literal: o },
    contains: [
      t,
      n,
      e.QUOTE_STRING_MODE,
      a,
      e.C_NUMBER_MODE,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
    ],
    illegal: "\\S",
  };
}
ln = xo;
var cn = ln;
var dn = {},
  Ee = "[0-9](_*[0-9])*",
  Ie = `\\.(${Ee})`,
  Le = "[0-9a-fA-F](_*[0-9a-fA-F])*",
  Do = {
    className: "number",
    variants: [
      { begin: `(\\b(${Ee})((${Ie})|\\.)?|(${Ie}))[eE][+-]?(${Ee})[fFdD]?\\b` },
      { begin: `\\b(${Ee})((${Ie})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${Ie})[fFdD]?\\b` },
      { begin: `\\b(${Ee})[fFdD]\\b` },
      {
        begin: `\\b0[xX]((${Le})\\.?|(${Le})?\\.(${Le}))[pP][+-]?(${Ee})[fFdD]?\\b`,
      },
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      { begin: `\\b0[xX](${Le})[lL]?\\b` },
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
    ],
    relevance: 0,
  };
function Io(e) {
  let t = {
      keyword:
        "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
      built_in:
        "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
      literal: "true false null",
    },
    n = {
      className: "keyword",
      begin: /\b(break|continue|return|this)\b/,
      starts: { contains: [{ className: "symbol", begin: /@\w+/ }] },
    },
    o = { className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "@" },
    a = {
      className: "subst",
      begin: /\$\{/,
      end: /\}/,
      contains: [e.C_NUMBER_MODE],
    },
    u = { className: "variable", begin: "\\$" + e.UNDERSCORE_IDENT_RE },
    c = {
      className: "string",
      variants: [
        { begin: '"""', end: '"""(?=[^"])', contains: [u, a] },
        { begin: "'", end: "'", illegal: /\n/, contains: [e.BACKSLASH_ESCAPE] },
        {
          begin: '"',
          end: '"',
          illegal: /\n/,
          contains: [e.BACKSLASH_ESCAPE, u, a],
        },
      ],
    };
  a.contains.push(c);
  let s = {
      className: "meta",
      begin:
        "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" +
        e.UNDERSCORE_IDENT_RE +
        ")?",
    },
    r = {
      className: "meta",
      begin: "@" + e.UNDERSCORE_IDENT_RE,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: [e.inherit(c, { className: "string" }), "self"],
        },
      ],
    },
    d = Do,
    m = e.COMMENT("/\\*", "\\*/", { contains: [e.C_BLOCK_COMMENT_MODE] }),
    y = {
      variants: [
        { className: "type", begin: e.UNDERSCORE_IDENT_RE },
        { begin: /\(/, end: /\)/, contains: [] },
      ],
    },
    f = y;
  return (
    (f.variants[1].contains = [y]),
    (y.variants[1].contains = [f]),
    {
      name: "Kotlin",
      aliases: ["kt", "kts"],
      keywords: t,
      contains: [
        e.COMMENT("/\\*\\*", "\\*/", {
          relevance: 0,
          contains: [{ className: "doctag", begin: "@[A-Za-z]+" }],
        }),
        e.C_LINE_COMMENT_MODE,
        m,
        n,
        o,
        s,
        r,
        {
          className: "function",
          beginKeywords: "fun",
          end: "[(]|$",
          returnBegin: !0,
          excludeEnd: !0,
          keywords: t,
          relevance: 5,
          contains: [
            {
              begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
              returnBegin: !0,
              relevance: 0,
              contains: [e.UNDERSCORE_TITLE_MODE],
            },
            {
              className: "type",
              begin: /</,
              end: />/,
              keywords: "reified",
              relevance: 0,
            },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: t,
              relevance: 0,
              contains: [
                {
                  begin: /:/,
                  end: /[=,\/]/,
                  endsWithParent: !0,
                  contains: [y, e.C_LINE_COMMENT_MODE, m],
                  relevance: 0,
                },
                e.C_LINE_COMMENT_MODE,
                m,
                s,
                r,
                c,
                e.C_NUMBER_MODE,
              ],
            },
            m,
          ],
        },
        {
          begin: [/class|interface|trait/, /\s+/, e.UNDERSCORE_IDENT_RE],
          beginScope: { 3: "title.class" },
          keywords: "class interface trait",
          end: /[:\{(]|$/,
          excludeEnd: !0,
          illegal: "extends implements",
          contains: [
            { beginKeywords: "public protected internal private constructor" },
            e.UNDERSCORE_TITLE_MODE,
            {
              className: "type",
              begin: /</,
              end: />/,
              excludeBegin: !0,
              excludeEnd: !0,
              relevance: 0,
            },
            {
              className: "type",
              begin: /[,:]\s*/,
              end: /[<\(,){\s]|$/,
              excludeBegin: !0,
              returnEnd: !0,
            },
            s,
            r,
          ],
        },
        c,
        {
          className: "meta",
          begin: "^#!/usr/bin/env",
          end: "$",
          illegal: `
`,
        },
        d,
      ],
    }
  );
}
dn = Io;
var un = dn;
var gn = {},
  Lo = (e) => ({
    IMPORTANT: { scope: "meta", begin: "!important" },
    BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
    },
    FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin:
        e.NUMBER_RE +
        "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0,
    },
    CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ },
  }),
  Bo = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "p",
    "q",
    "quote",
    "samp",
    "section",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video",
  ],
  Fo = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    "min-width",
    "max-width",
    "min-height",
    "max-height",
  ],
  bn = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    "host",
    "host-context",
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    "lang",
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    "nth-child",
    "nth-col",
    "nth-last-child",
    "nth-last-col",
    "nth-last-of-type",
    "nth-of-type",
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where",
  ],
  mn = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error",
  ],
  zo = [
    "align-content",
    "align-items",
    "align-self",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "empty-cells",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "isolation",
    "justify-content",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "row-gap",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "speak",
    "speak-as",
    "src",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "unicode-bidi",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "z-index",
  ].reverse(),
  Po = bn.concat(mn);
function Uo(e) {
  let t = Lo(e),
    n = Po,
    o = "and or not only",
    a = "[\\w-]+",
    u = "(" + a + "|@\\{" + a + "\\})",
    c = [],
    s = [],
    r = function (g) {
      return { className: "string", begin: "~?" + g + ".*?" + g };
    },
    d = function (g, v, $) {
      return { className: g, begin: v, relevance: $ };
    },
    m = { $pattern: /[a-z-]+/, keyword: o, attribute: Fo.join(" ") },
    y = { begin: "\\(", end: "\\)", contains: s, keywords: m, relevance: 0 };
  s.push(
    e.C_LINE_COMMENT_MODE,
    e.C_BLOCK_COMMENT_MODE,
    r("'"),
    r('"'),
    t.CSS_NUMBER_MODE,
    {
      begin: "(url|data-uri)\\(",
      starts: { className: "string", end: "[\\)\\n]", excludeEnd: !0 },
    },
    t.HEXCOLOR,
    y,
    d("variable", "@@?" + a, 10),
    d("variable", "@\\{" + a + "\\}"),
    d("built_in", "~?`[^`]*?`"),
    {
      className: "attribute",
      begin: a + "\\s*:",
      end: ":",
      returnBegin: !0,
      excludeEnd: !0,
    },
    t.IMPORTANT,
    { beginKeywords: "and not" },
    t.FUNCTION_DISPATCH,
  );
  let f = s.concat({ begin: /\{/, end: /\}/, contains: c }),
    _ = {
      beginKeywords: "when",
      endsWithParent: !0,
      contains: [{ beginKeywords: "and not" }].concat(s),
    },
    N = {
      begin: u + "\\s*:",
      returnBegin: !0,
      end: /[;}]/,
      relevance: 0,
      contains: [
        { begin: /-(webkit|moz|ms|o)-/ },
        t.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + zo.join("|") + ")\\b",
          end: /(?=:)/,
          starts: {
            endsWithParent: !0,
            illegal: "[<=$]",
            relevance: 0,
            contains: s,
          },
        },
      ],
    },
    l = {
      className: "keyword",
      begin:
        "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
      starts: {
        end: "[;{}]",
        keywords: m,
        returnEnd: !0,
        contains: s,
        relevance: 0,
      },
    },
    i = {
      className: "variable",
      variants: [
        { begin: "@" + a + "\\s*:", relevance: 15 },
        { begin: "@" + a },
      ],
      starts: { end: "[;}]", returnEnd: !0, contains: f },
    },
    b = {
      variants: [
        { begin: "[\\.#:&\\[>]", end: "[;{}]" },
        { begin: u, end: /\{/ },
      ],
      returnBegin: !0,
      returnEnd: !0,
      illegal: `[<='$"]`,
      relevance: 0,
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        _,
        d("keyword", "all\\b"),
        d("variable", "@\\{" + a + "\\}"),
        { begin: "\\b(" + Bo.join("|") + ")\\b", className: "selector-tag" },
        t.CSS_NUMBER_MODE,
        d("selector-tag", u, 0),
        d("selector-id", "#" + u),
        d("selector-class", "\\." + u, 0),
        d("selector-tag", "&", 0),
        t.ATTRIBUTE_SELECTOR_MODE,
        { className: "selector-pseudo", begin: ":(" + bn.join("|") + ")" },
        { className: "selector-pseudo", begin: ":(:)?(" + mn.join("|") + ")" },
        { begin: /\(/, end: /\)/, relevance: 0, contains: f },
        { begin: "!important" },
        t.FUNCTION_DISPATCH,
      ],
    },
    h = { begin: a + `:(:)?(${n.join("|")})`, returnBegin: !0, contains: [b] };
  return (
    c.push(
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      l,
      i,
      h,
      N,
      b,
      _,
      t.FUNCTION_DISPATCH,
    ),
    { name: "Less", case_insensitive: !0, illegal: `[=>'/<($"]`, contains: c }
  );
}
gn = Uo;
var hn = gn;
var pn = {};
function Ho(e) {
  let t = "\\[=*\\[",
    n = "\\]=*\\]",
    o = { begin: t, end: n, contains: ["self"] },
    a = [
      e.COMMENT("--(?!" + t + ")", "$"),
      e.COMMENT("--" + t, n, { contains: [o], relevance: 10 }),
    ];
  return {
    name: "Lua",
    keywords: {
      $pattern: e.UNDERSCORE_IDENT_RE,
      literal: "true false nil",
      keyword:
        "and break do else elseif end for goto if in local not or repeat return then until while",
      built_in:
        "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove",
    },
    contains: a.concat([
      {
        className: "function",
        beginKeywords: "function",
        end: "\\)",
        contains: [
          e.inherit(e.TITLE_MODE, {
            begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",
          }),
          {
            className: "params",
            begin: "\\(",
            endsWithParent: !0,
            contains: a,
          },
        ].concat(a),
      },
      e.C_NUMBER_MODE,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      { className: "string", begin: t, end: n, contains: [o], relevance: 5 },
    ]),
  };
}
pn = Ho;
var fn = pn;
var _n = {};
function Ko(e) {
  let t = {
      className: "variable",
      variants: [
        {
          begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
          contains: [e.BACKSLASH_ESCAPE],
        },
        { begin: /\$[@%<?\^\+\*]/ },
      ],
    },
    n = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [e.BACKSLASH_ESCAPE, t],
    },
    o = {
      className: "variable",
      begin: /\$\([\w-]+\s/,
      end: /\)/,
      keywords: {
        built_in:
          "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value",
      },
      contains: [t],
    },
    a = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" },
    u = {
      className: "meta",
      begin: /^\.PHONY:/,
      end: /$/,
      keywords: { $pattern: /[\.\w]+/, keyword: ".PHONY" },
    },
    c = { className: "section", begin: /^[^\s]+:/, end: /$/, contains: [t] };
  return {
    name: "Makefile",
    aliases: ["mk", "mak", "make"],
    keywords: {
      $pattern: /[\w-]+/,
      keyword:
        "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
    },
    contains: [e.HASH_COMMENT_MODE, t, n, o, a, u, c],
  };
}
_n = Ko;
var yn = _n;
var vn = {};
function qo(e) {
  let t = e.regex,
    n = [
      "abs",
      "accept",
      "alarm",
      "and",
      "atan2",
      "bind",
      "binmode",
      "bless",
      "break",
      "caller",
      "chdir",
      "chmod",
      "chomp",
      "chop",
      "chown",
      "chr",
      "chroot",
      "close",
      "closedir",
      "connect",
      "continue",
      "cos",
      "crypt",
      "dbmclose",
      "dbmopen",
      "defined",
      "delete",
      "die",
      "do",
      "dump",
      "each",
      "else",
      "elsif",
      "endgrent",
      "endhostent",
      "endnetent",
      "endprotoent",
      "endpwent",
      "endservent",
      "eof",
      "eval",
      "exec",
      "exists",
      "exit",
      "exp",
      "fcntl",
      "fileno",
      "flock",
      "for",
      "foreach",
      "fork",
      "format",
      "formline",
      "getc",
      "getgrent",
      "getgrgid",
      "getgrnam",
      "gethostbyaddr",
      "gethostbyname",
      "gethostent",
      "getlogin",
      "getnetbyaddr",
      "getnetbyname",
      "getnetent",
      "getpeername",
      "getpgrp",
      "getpriority",
      "getprotobyname",
      "getprotobynumber",
      "getprotoent",
      "getpwent",
      "getpwnam",
      "getpwuid",
      "getservbyname",
      "getservbyport",
      "getservent",
      "getsockname",
      "getsockopt",
      "given",
      "glob",
      "gmtime",
      "goto",
      "grep",
      "gt",
      "hex",
      "if",
      "index",
      "int",
      "ioctl",
      "join",
      "keys",
      "kill",
      "last",
      "lc",
      "lcfirst",
      "length",
      "link",
      "listen",
      "local",
      "localtime",
      "log",
      "lstat",
      "lt",
      "ma",
      "map",
      "mkdir",
      "msgctl",
      "msgget",
      "msgrcv",
      "msgsnd",
      "my",
      "ne",
      "next",
      "no",
      "not",
      "oct",
      "open",
      "opendir",
      "or",
      "ord",
      "our",
      "pack",
      "package",
      "pipe",
      "pop",
      "pos",
      "print",
      "printf",
      "prototype",
      "push",
      "q|0",
      "qq",
      "quotemeta",
      "qw",
      "qx",
      "rand",
      "read",
      "readdir",
      "readline",
      "readlink",
      "readpipe",
      "recv",
      "redo",
      "ref",
      "rename",
      "require",
      "reset",
      "return",
      "reverse",
      "rewinddir",
      "rindex",
      "rmdir",
      "say",
      "scalar",
      "seek",
      "seekdir",
      "select",
      "semctl",
      "semget",
      "semop",
      "send",
      "setgrent",
      "sethostent",
      "setnetent",
      "setpgrp",
      "setpriority",
      "setprotoent",
      "setpwent",
      "setservent",
      "setsockopt",
      "shift",
      "shmctl",
      "shmget",
      "shmread",
      "shmwrite",
      "shutdown",
      "sin",
      "sleep",
      "socket",
      "socketpair",
      "sort",
      "splice",
      "split",
      "sprintf",
      "sqrt",
      "srand",
      "stat",
      "state",
      "study",
      "sub",
      "substr",
      "symlink",
      "syscall",
      "sysopen",
      "sysread",
      "sysseek",
      "system",
      "syswrite",
      "tell",
      "telldir",
      "tie",
      "tied",
      "time",
      "times",
      "tr",
      "truncate",
      "uc",
      "ucfirst",
      "umask",
      "undef",
      "unless",
      "unlink",
      "unpack",
      "unshift",
      "untie",
      "until",
      "use",
      "utime",
      "values",
      "vec",
      "wait",
      "waitpid",
      "wantarray",
      "warn",
      "when",
      "while",
      "write",
      "x|0",
      "xor",
      "y|0",
    ],
    o = /[dualxmsipngr]{0,12}/,
    a = { $pattern: /[\w.]+/, keyword: n.join(" ") },
    u = { className: "subst", begin: "[$@]\\{", end: "\\}", keywords: a },
    c = { begin: /->\{/, end: /\}/ },
    s = {
      variants: [
        { begin: /\$\d/ },
        {
          begin: t.concat(
            /[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
            "(?![A-Za-z])(?![@$%])",
          ),
        },
        { begin: /[$%@][^\s\w{]/, relevance: 0 },
      ],
    },
    r = [e.BACKSLASH_ESCAPE, u, s],
    d = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
    m = (_, N, l = "\\1") => {
      let i = l === "\\1" ? l : t.concat(l, N);
      return t.concat(
        t.concat("(?:", _, ")"),
        N,
        /(?:\\.|[^\\\/])*?/,
        i,
        /(?:\\.|[^\\\/])*?/,
        l,
        o,
      );
    },
    y = (_, N, l) =>
      t.concat(t.concat("(?:", _, ")"), N, /(?:\\.|[^\\\/])*?/, l, o),
    f = [
      s,
      e.HASH_COMMENT_MODE,
      e.COMMENT(/^=\w/, /=cut/, { endsWithParent: !0 }),
      c,
      {
        className: "string",
        contains: r,
        variants: [
          { begin: "q[qwxr]?\\s*\\(", end: "\\)", relevance: 5 },
          { begin: "q[qwxr]?\\s*\\[", end: "\\]", relevance: 5 },
          { begin: "q[qwxr]?\\s*\\{", end: "\\}", relevance: 5 },
          { begin: "q[qwxr]?\\s*\\|", end: "\\|", relevance: 5 },
          { begin: "q[qwxr]?\\s*<", end: ">", relevance: 5 },
          { begin: "qw\\s+q", end: "q", relevance: 5 },
          { begin: "'", end: "'", contains: [e.BACKSLASH_ESCAPE] },
          { begin: '"', end: '"' },
          { begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE] },
          { begin: /\{\w+\}/, relevance: 0 },
          { begin: "-?\\w+\\s*=>", relevance: 0 },
        ],
      },
      {
        className: "number",
        begin:
          "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        relevance: 0,
      },
      {
        begin:
          "(\\/\\/|" +
          e.RE_STARTERS_RE +
          "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        keywords: "split return print reverse grep",
        relevance: 0,
        contains: [
          e.HASH_COMMENT_MODE,
          {
            className: "regexp",
            variants: [
              { begin: m("s|tr|y", t.either(...d, { capture: !0 })) },
              { begin: m("s|tr|y", "\\(", "\\)") },
              { begin: m("s|tr|y", "\\[", "\\]") },
              { begin: m("s|tr|y", "\\{", "\\}") },
            ],
            relevance: 2,
          },
          {
            className: "regexp",
            variants: [
              { begin: /(m|qr)\/\//, relevance: 0 },
              { begin: y("(?:m|qr)?", /\//, /\//) },
              { begin: y("m|qr", t.either(...d, { capture: !0 }), /\1/) },
              { begin: y("m|qr", /\(/, /\)/) },
              { begin: y("m|qr", /\[/, /\]/) },
              { begin: y("m|qr", /\{/, /\}/) },
            ],
          },
        ],
      },
      {
        className: "function",
        beginKeywords: "sub",
        end: "(\\s*\\(.*?\\))?[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [e.TITLE_MODE],
      },
      { begin: "-\\w\\b", relevance: 0 },
      {
        begin: "^__DATA__$",
        end: "^__END__$",
        subLanguage: "mojolicious",
        contains: [{ begin: "^@@.*", end: "$", className: "comment" }],
      },
    ];
  return (
    (u.contains = f),
    (c.contains = f),
    { name: "Perl", aliases: ["pl", "pm"], keywords: a, contains: f }
  );
}
vn = qo;
var wn = vn;
var En = {};
function Zo(e) {
  let t = {
      className: "built_in",
      begin:
        "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+",
    },
    n = /[a-zA-Z@][a-zA-Z0-9_]*/,
    s = {
      "variable.language": ["this", "super"],
      $pattern: n,
      keyword: [
        "while",
        "export",
        "sizeof",
        "typedef",
        "const",
        "struct",
        "for",
        "union",
        "volatile",
        "static",
        "mutable",
        "if",
        "do",
        "return",
        "goto",
        "enum",
        "else",
        "break",
        "extern",
        "asm",
        "case",
        "default",
        "register",
        "explicit",
        "typename",
        "switch",
        "continue",
        "inline",
        "readonly",
        "assign",
        "readwrite",
        "self",
        "@synchronized",
        "id",
        "typeof",
        "nonatomic",
        "IBOutlet",
        "IBAction",
        "strong",
        "weak",
        "copy",
        "in",
        "out",
        "inout",
        "bycopy",
        "byref",
        "oneway",
        "__strong",
        "__weak",
        "__block",
        "__autoreleasing",
        "@private",
        "@protected",
        "@public",
        "@try",
        "@property",
        "@end",
        "@throw",
        "@catch",
        "@finally",
        "@autoreleasepool",
        "@synthesize",
        "@dynamic",
        "@selector",
        "@optional",
        "@required",
        "@encode",
        "@package",
        "@import",
        "@defs",
        "@compatibility_alias",
        "__bridge",
        "__bridge_transfer",
        "__bridge_retained",
        "__bridge_retain",
        "__covariant",
        "__contravariant",
        "__kindof",
        "_Nonnull",
        "_Nullable",
        "_Null_unspecified",
        "__FUNCTION__",
        "__PRETTY_FUNCTION__",
        "__attribute__",
        "getter",
        "setter",
        "retain",
        "unsafe_unretained",
        "nonnull",
        "nullable",
        "null_unspecified",
        "null_resettable",
        "class",
        "instancetype",
        "NS_DESIGNATED_INITIALIZER",
        "NS_UNAVAILABLE",
        "NS_REQUIRES_SUPER",
        "NS_RETURNS_INNER_POINTER",
        "NS_INLINE",
        "NS_AVAILABLE",
        "NS_DEPRECATED",
        "NS_ENUM",
        "NS_OPTIONS",
        "NS_SWIFT_UNAVAILABLE",
        "NS_ASSUME_NONNULL_BEGIN",
        "NS_ASSUME_NONNULL_END",
        "NS_REFINED_FOR_SWIFT",
        "NS_SWIFT_NAME",
        "NS_SWIFT_NOTHROW",
        "NS_DURING",
        "NS_HANDLER",
        "NS_ENDHANDLER",
        "NS_VALUERETURN",
        "NS_VOIDRETURN",
      ],
      literal: ["false", "true", "FALSE", "TRUE", "nil", "YES", "NO", "NULL"],
      built_in: [
        "dispatch_once_t",
        "dispatch_queue_t",
        "dispatch_sync",
        "dispatch_async",
        "dispatch_once",
      ],
      type: [
        "int",
        "float",
        "char",
        "unsigned",
        "signed",
        "short",
        "long",
        "double",
        "wchar_t",
        "unichar",
        "void",
        "bool",
        "BOOL",
        "id|0",
        "_Bool",
      ],
    },
    r = {
      $pattern: n,
      keyword: ["@interface", "@class", "@protocol", "@implementation"],
    };
  return {
    name: "Objective-C",
    aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
    keywords: s,
    illegal: "</",
    contains: [
      t,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      e.C_NUMBER_MODE,
      e.QUOTE_STRING_MODE,
      e.APOS_STRING_MODE,
      {
        className: "string",
        variants: [
          {
            begin: '@"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE],
          },
        ],
      },
      {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          keyword:
            "if else elif endif define undef warning error line pragma ifdef ifndef include",
        },
        contains: [
          { begin: /\\\n/, relevance: 0 },
          e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
          { className: "string", begin: /<.*?>/, end: /$/, illegal: "\\n" },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      {
        className: "class",
        begin: "(" + r.keyword.join("|") + ")\\b",
        end: /(\{|$)/,
        excludeEnd: !0,
        keywords: r,
        contains: [e.UNDERSCORE_TITLE_MODE],
      },
      { begin: "\\." + e.UNDERSCORE_IDENT_RE, relevance: 0 },
    ],
  };
}
En = Zo;
var kn = En;
var Nn = {};
function Go(e) {
  let t = e.regex,
    n = /(?![A-Za-z0-9])(?![$])/,
    o = t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, n),
    a = t.concat(
      /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
      n,
    ),
    u = { scope: "variable", match: "\\$+" + o },
    c = {
      scope: "meta",
      variants: [
        { begin: /<\?php/, relevance: 10 },
        { begin: /<\?=/ },
        { begin: /<\?/, relevance: 0.1 },
        { begin: /\?>/ },
      ],
    },
    s = {
      scope: "subst",
      variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }],
    },
    r = e.inherit(e.APOS_STRING_MODE, { illegal: null }),
    d = e.inherit(e.QUOTE_STRING_MODE, {
      illegal: null,
      contains: e.QUOTE_STRING_MODE.contains.concat(s),
    }),
    m = e.END_SAME_AS_BEGIN({
      begin: /<<<[ \t]*(\w+)\n/,
      end: /[ \t]*(\w+)\b/,
      contains: e.QUOTE_STRING_MODE.contains.concat(s),
    }),
    y = `[ 	
]`,
    f = { scope: "string", variants: [d, r, m] },
    _ = {
      scope: "number",
      variants: [
        { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
        { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
        { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
        {
          begin:
            "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?",
        },
      ],
      relevance: 0,
    },
    N = ["false", "null", "true"],
    l = [
      "__CLASS__",
      "__DIR__",
      "__FILE__",
      "__FUNCTION__",
      "__COMPILER_HALT_OFFSET__",
      "__LINE__",
      "__METHOD__",
      "__NAMESPACE__",
      "__TRAIT__",
      "die",
      "echo",
      "exit",
      "include",
      "include_once",
      "print",
      "require",
      "require_once",
      "array",
      "abstract",
      "and",
      "as",
      "binary",
      "bool",
      "boolean",
      "break",
      "callable",
      "case",
      "catch",
      "class",
      "clone",
      "const",
      "continue",
      "declare",
      "default",
      "do",
      "double",
      "else",
      "elseif",
      "empty",
      "enddeclare",
      "endfor",
      "endforeach",
      "endif",
      "endswitch",
      "endwhile",
      "enum",
      "eval",
      "extends",
      "final",
      "finally",
      "float",
      "for",
      "foreach",
      "from",
      "global",
      "goto",
      "if",
      "implements",
      "instanceof",
      "insteadof",
      "int",
      "integer",
      "interface",
      "isset",
      "iterable",
      "list",
      "match|0",
      "mixed",
      "new",
      "never",
      "object",
      "or",
      "private",
      "protected",
      "public",
      "readonly",
      "real",
      "return",
      "string",
      "switch",
      "throw",
      "trait",
      "try",
      "unset",
      "use",
      "var",
      "void",
      "while",
      "xor",
      "yield",
    ],
    i = [
      "Error|0",
      "AppendIterator",
      "ArgumentCountError",
      "ArithmeticError",
      "ArrayIterator",
      "ArrayObject",
      "AssertionError",
      "BadFunctionCallException",
      "BadMethodCallException",
      "CachingIterator",
      "CallbackFilterIterator",
      "CompileError",
      "Countable",
      "DirectoryIterator",
      "DivisionByZeroError",
      "DomainException",
      "EmptyIterator",
      "ErrorException",
      "Exception",
      "FilesystemIterator",
      "FilterIterator",
      "GlobIterator",
      "InfiniteIterator",
      "InvalidArgumentException",
      "IteratorIterator",
      "LengthException",
      "LimitIterator",
      "LogicException",
      "MultipleIterator",
      "NoRewindIterator",
      "OutOfBoundsException",
      "OutOfRangeException",
      "OuterIterator",
      "OverflowException",
      "ParentIterator",
      "ParseError",
      "RangeException",
      "RecursiveArrayIterator",
      "RecursiveCachingIterator",
      "RecursiveCallbackFilterIterator",
      "RecursiveDirectoryIterator",
      "RecursiveFilterIterator",
      "RecursiveIterator",
      "RecursiveIteratorIterator",
      "RecursiveRegexIterator",
      "RecursiveTreeIterator",
      "RegexIterator",
      "RuntimeException",
      "SeekableIterator",
      "SplDoublyLinkedList",
      "SplFileInfo",
      "SplFileObject",
      "SplFixedArray",
      "SplHeap",
      "SplMaxHeap",
      "SplMinHeap",
      "SplObjectStorage",
      "SplObserver",
      "SplPriorityQueue",
      "SplQueue",
      "SplStack",
      "SplSubject",
      "SplTempFileObject",
      "TypeError",
      "UnderflowException",
      "UnexpectedValueException",
      "UnhandledMatchError",
      "ArrayAccess",
      "BackedEnum",
      "Closure",
      "Fiber",
      "Generator",
      "Iterator",
      "IteratorAggregate",
      "Serializable",
      "Stringable",
      "Throwable",
      "Traversable",
      "UnitEnum",
      "WeakReference",
      "WeakMap",
      "Directory",
      "__PHP_Incomplete_Class",
      "parent",
      "php_user_filter",
      "self",
      "static",
      "stdClass",
    ],
    h = {
      keyword: l,
      literal: ((ne) => {
        let Q = [];
        return (
          ne.forEach((W) => {
            Q.push(W),
              W.toLowerCase() === W
                ? Q.push(W.toUpperCase())
                : Q.push(W.toLowerCase());
          }),
          Q
        );
      })(N),
      built_in: i,
    },
    g = (ne) => ne.map((Q) => Q.replace(/\|\d+$/, "")),
    v = {
      variants: [
        {
          match: [
            /new/,
            t.concat(y, "+"),
            t.concat("(?!", g(i).join("\\b|"), "\\b)"),
            a,
          ],
          scope: { 1: "keyword", 4: "title.class" },
        },
      ],
    },
    $ = t.concat(o, "\\b(?!\\()"),
    E = {
      variants: [
        {
          match: [t.concat(/::/, t.lookahead(/(?!class\b)/)), $],
          scope: { 2: "variable.constant" },
        },
        { match: [/::/, /class/], scope: { 2: "variable.language" } },
        {
          match: [a, t.concat(/::/, t.lookahead(/(?!class\b)/)), $],
          scope: { 1: "title.class", 3: "variable.constant" },
        },
        {
          match: [a, t.concat("::", t.lookahead(/(?!class\b)/))],
          scope: { 1: "title.class" },
        },
        {
          match: [a, /::/, /class/],
          scope: { 1: "title.class", 3: "variable.language" },
        },
      ],
    },
    C = {
      scope: "attr",
      match: t.concat(o, t.lookahead(":"), t.lookahead(/(?!::)/)),
    },
    B = {
      relevance: 0,
      begin: /\(/,
      end: /\)/,
      keywords: h,
      contains: [C, u, E, e.C_BLOCK_COMMENT_MODE, f, _, v],
    },
    F = {
      relevance: 0,
      match: [
        /\b/,
        t.concat(
          "(?!fn\\b|function\\b|",
          g(l).join("\\b|"),
          "|",
          g(i).join("\\b|"),
          "\\b)",
        ),
        o,
        t.concat(y, "*"),
        t.lookahead(/(?=\()/),
      ],
      scope: { 3: "title.function.invoke" },
      contains: [B],
    };
  B.contains.push(F);
  let J = [C, E, e.C_BLOCK_COMMENT_MODE, f, _, v],
    te = {
      begin: t.concat(/#\[\s*/, a),
      beginScope: "meta",
      end: /]/,
      endScope: "meta",
      keywords: { literal: N, keyword: ["new", "array"] },
      contains: [
        {
          begin: /\[/,
          end: /]/,
          keywords: { literal: N, keyword: ["new", "array"] },
          contains: ["self", ...J],
        },
        ...J,
        { scope: "meta", match: a },
      ],
    };
  return {
    case_insensitive: !1,
    keywords: h,
    contains: [
      te,
      e.HASH_COMMENT_MODE,
      e.COMMENT("//", "$"),
      e.COMMENT("/\\*", "\\*/", {
        contains: [{ scope: "doctag", match: "@[A-Za-z]+" }],
      }),
      {
        match: /__halt_compiler\(\);/,
        keywords: "__halt_compiler",
        starts: {
          scope: "comment",
          end: e.MATCH_NOTHING_RE,
          contains: [{ match: /\?>/, scope: "meta", endsParent: !0 }],
        },
      },
      c,
      { scope: "variable.language", match: /\$this\b/ },
      u,
      F,
      E,
      {
        match: [/const/, /\s/, o],
        scope: { 1: "keyword", 3: "variable.constant" },
      },
      v,
      {
        scope: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "[$%\\[]",
        contains: [
          { beginKeywords: "use" },
          e.UNDERSCORE_TITLE_MODE,
          { begin: "=>", endsParent: !0 },
          {
            scope: "params",
            begin: "\\(",
            end: "\\)",
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: h,
            contains: ["self", u, E, e.C_BLOCK_COMMENT_MODE, f, _],
          },
        ],
      },
      {
        scope: "class",
        variants: [
          { beginKeywords: "enum", illegal: /[($"]/ },
          { beginKeywords: "class interface trait", illegal: /[:($"]/ },
        ],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [
          { beginKeywords: "extends implements" },
          e.UNDERSCORE_TITLE_MODE,
        ],
      },
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [
          e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" }),
        ],
      },
      {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [
          { match: /\b(as|const|function)\b/, scope: "keyword" },
          e.UNDERSCORE_TITLE_MODE,
        ],
      },
      f,
      _,
    ],
  };
}
Nn = Go;
var $n = Nn;
var An = {};
function Wo(e) {
  return {
    name: "PHP template",
    subLanguage: "xml",
    contains: [
      {
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: "php",
        contains: [
          { begin: "/\\*", end: "\\*/", skip: !0 },
          { begin: 'b"', end: '"', skip: !0 },
          { begin: "b'", end: "'", skip: !0 },
          e.inherit(e.APOS_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: !0,
          }),
          e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: !0,
          }),
        ],
      },
    ],
  };
}
An = Wo;
var On = An;
var Sn = {};
function Qo(e) {
  return {
    name: "Plain text",
    aliases: ["text", "txt"],
    disableAutodetect: !0,
  };
}
Sn = Qo;
var jn = Sn;
var Mn = {};
function Xo(e) {
  let t = e.regex,
    n = /[\p{XID_Start}_]\p{XID_Continue}*/u,
    o = [
      "and",
      "as",
      "assert",
      "async",
      "await",
      "break",
      "case",
      "class",
      "continue",
      "def",
      "del",
      "elif",
      "else",
      "except",
      "finally",
      "for",
      "from",
      "global",
      "if",
      "import",
      "in",
      "is",
      "lambda",
      "match",
      "nonlocal|10",
      "not",
      "or",
      "pass",
      "raise",
      "return",
      "try",
      "while",
      "with",
      "yield",
    ],
    s = {
      $pattern: /[A-Za-z]\w+|__\w+__/,
      keyword: o,
      built_in: [
        "__import__",
        "abs",
        "all",
        "any",
        "ascii",
        "bin",
        "bool",
        "breakpoint",
        "bytearray",
        "bytes",
        "callable",
        "chr",
        "classmethod",
        "compile",
        "complex",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "exec",
        "filter",
        "float",
        "format",
        "frozenset",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "int",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "list",
        "locals",
        "map",
        "max",
        "memoryview",
        "min",
        "next",
        "object",
        "oct",
        "open",
        "ord",
        "pow",
        "print",
        "property",
        "range",
        "repr",
        "reversed",
        "round",
        "set",
        "setattr",
        "slice",
        "sorted",
        "staticmethod",
        "str",
        "sum",
        "super",
        "tuple",
        "type",
        "vars",
        "zip",
      ],
      literal: [
        "__debug__",
        "Ellipsis",
        "False",
        "None",
        "NotImplemented",
        "True",
      ],
      type: [
        "Any",
        "Callable",
        "Coroutine",
        "Dict",
        "List",
        "Literal",
        "Generic",
        "Optional",
        "Sequence",
        "Set",
        "Tuple",
        "Type",
        "Union",
      ],
    },
    r = { className: "meta", begin: /^(>>>|\.\.\.) / },
    d = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: s,
      illegal: /#/,
    },
    m = { begin: /\{\{/, relevance: 0 },
    y = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [e.BACKSLASH_ESCAPE, r],
          relevance: 10,
        },
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [e.BACKSLASH_ESCAPE, r],
          relevance: 10,
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [e.BACKSLASH_ESCAPE, r, m, d],
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [e.BACKSLASH_ESCAPE, r, m, d],
        },
        { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
        { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
        { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
        { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [e.BACKSLASH_ESCAPE, m, d],
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [e.BACKSLASH_ESCAPE, m, d],
        },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
      ],
    },
    f = "[0-9](_?[0-9])*",
    _ = `(\\b(${f}))?\\.(${f})|\\b(${f})\\.`,
    N = `\\b|${o.join("|")}`,
    l = {
      className: "number",
      relevance: 0,
      variants: [
        { begin: `(\\b(${f})|(${_}))[eE][+-]?(${f})[jJ]?(?=${N})` },
        { begin: `(${_})[jJ]?` },
        { begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${N})` },
        { begin: `\\b0[bB](_?[01])+[lL]?(?=${N})` },
        { begin: `\\b0[oO](_?[0-7])+[lL]?(?=${N})` },
        { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${N})` },
        { begin: `\\b(${f})[jJ](?=${N})` },
      ],
    },
    i = {
      className: "comment",
      begin: t.lookahead(/# type:/),
      end: /$/,
      keywords: s,
      contains: [
        { begin: /# type:/ },
        { begin: /#/, end: /\b\B/, endsWithParent: !0 },
      ],
    },
    b = {
      className: "params",
      variants: [
        { className: "", begin: /\(\s*\)/, skip: !0 },
        {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: s,
          contains: ["self", r, l, y, e.HASH_COMMENT_MODE],
        },
      ],
    };
  return (
    (d.contains = [y, l, r]),
    {
      name: "Python",
      aliases: ["py", "gyp", "ipython"],
      unicodeRegex: !0,
      keywords: s,
      illegal: /(<\/|->|\?)|=>/,
      contains: [
        r,
        l,
        { begin: /\bself\b/ },
        { beginKeywords: "if", relevance: 0 },
        y,
        i,
        e.HASH_COMMENT_MODE,
        {
          match: [/\bdef/, /\s+/, n],
          scope: { 1: "keyword", 3: "title.function" },
          contains: [b],
        },
        {
          variants: [
            { match: [/\bclass/, /\s+/, n, /\s*/, /\(\s*/, n, /\s*\)/] },
            { match: [/\bclass/, /\s+/, n] },
          ],
          scope: { 1: "keyword", 3: "title.class", 6: "title.class.inherited" },
        },
        {
          className: "meta",
          begin: /^[\t ]*@/,
          end: /(?=#)|$/,
          contains: [l, b, y],
        },
      ],
    }
  );
}
Mn = Xo;
var Cn = Mn;
var Tn = {};
function Vo(e) {
  return {
    aliases: ["pycon"],
    contains: [
      {
        className: "meta.prompt",
        starts: { end: / |$/, starts: { end: "$", subLanguage: "python" } },
        variants: [{ begin: /^>>>(?=[ ]|$)/ }, { begin: /^\.\.\.(?=[ ]|$)/ }],
      },
    ],
  };
}
Tn = Vo;
var Rn = Tn;
var xn = {};
function Jo(e) {
  let t = e.regex,
    n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
    o = t.either(
      /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
      /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
      /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/,
    ),
    a = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,
    u = t.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
  return {
    name: "R",
    keywords: {
      $pattern: n,
      keyword: "function if in break next repeat else for while",
      literal:
        "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
      built_in:
        "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm",
    },
    contains: [
      e.COMMENT(/#'/, /$/, {
        contains: [
          {
            scope: "doctag",
            match: /@examples/,
            starts: {
              end: t.lookahead(t.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)),
              endsParent: !0,
            },
          },
          {
            scope: "doctag",
            begin: "@param",
            end: /$/,
            contains: [
              {
                scope: "variable",
                variants: [{ match: n }, { match: /`(?:\\.|[^`\\])+`/ }],
                endsParent: !0,
              },
            ],
          },
          { scope: "doctag", match: /@[a-zA-Z]+/ },
          { scope: "keyword", match: /\\[a-zA-Z]+/ },
        ],
      }),
      e.HASH_COMMENT_MODE,
      {
        scope: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [
          e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\(/, end: /\)(-*)"/ }),
          e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\{/, end: /\}(-*)"/ }),
          e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\[/, end: /\](-*)"/ }),
          e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\(/, end: /\)(-*)'/ }),
          e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\{/, end: /\}(-*)'/ }),
          e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }),
          { begin: '"', end: '"', relevance: 0 },
          { begin: "'", end: "'", relevance: 0 },
        ],
      },
      {
        relevance: 0,
        variants: [
          { scope: { 1: "operator", 2: "number" }, match: [a, o] },
          { scope: { 1: "operator", 2: "number" }, match: [/%[^%]*%/, o] },
          { scope: { 1: "punctuation", 2: "number" }, match: [u, o] },
          { scope: { 2: "number" }, match: [/[^a-zA-Z0-9._]|^/, o] },
        ],
      },
      { scope: { 3: "operator" }, match: [n, /\s+/, /<-/, /\s+/] },
      {
        scope: "operator",
        relevance: 0,
        variants: [{ match: a }, { match: /%[^%]*%/ }],
      },
      { scope: "punctuation", relevance: 0, match: u },
      { begin: "`", end: "`", contains: [{ begin: /\\./ }] },
    ],
  };
}
xn = Jo;
var Dn = xn;
var In = {};
function Yo(e) {
  let t = e.regex,
    n = {
      className: "title.function.invoke",
      relevance: 0,
      begin: t.concat(/\b/, /(?!let\b)/, e.IDENT_RE, t.lookahead(/\s*\(/)),
    },
    o = "([ui](8|16|32|64|128|size)|f(32|64))?",
    a = [
      "abstract",
      "as",
      "async",
      "await",
      "become",
      "box",
      "break",
      "const",
      "continue",
      "crate",
      "do",
      "dyn",
      "else",
      "enum",
      "extern",
      "false",
      "final",
      "fn",
      "for",
      "if",
      "impl",
      "in",
      "let",
      "loop",
      "macro",
      "match",
      "mod",
      "move",
      "mut",
      "override",
      "priv",
      "pub",
      "ref",
      "return",
      "self",
      "Self",
      "static",
      "struct",
      "super",
      "trait",
      "true",
      "try",
      "type",
      "typeof",
      "unsafe",
      "unsized",
      "use",
      "virtual",
      "where",
      "while",
      "yield",
    ],
    u = ["true", "false", "Some", "None", "Ok", "Err"],
    c = [
      "drop ",
      "Copy",
      "Send",
      "Sized",
      "Sync",
      "Drop",
      "Fn",
      "FnMut",
      "FnOnce",
      "ToOwned",
      "Clone",
      "Debug",
      "PartialEq",
      "PartialOrd",
      "Eq",
      "Ord",
      "AsRef",
      "AsMut",
      "Into",
      "From",
      "Default",
      "Iterator",
      "Extend",
      "IntoIterator",
      "DoubleEndedIterator",
      "ExactSizeIterator",
      "SliceConcatExt",
      "ToString",
      "assert!",
      "assert_eq!",
      "bitflags!",
      "bytes!",
      "cfg!",
      "col!",
      "concat!",
      "concat_idents!",
      "debug_assert!",
      "debug_assert_eq!",
      "env!",
      "panic!",
      "file!",
      "format!",
      "format_args!",
      "include_bytes!",
      "include_str!",
      "line!",
      "local_data_key!",
      "module_path!",
      "option_env!",
      "print!",
      "println!",
      "select!",
      "stringify!",
      "try!",
      "unimplemented!",
      "unreachable!",
      "vec!",
      "write!",
      "writeln!",
      "macro_rules!",
      "assert_ne!",
      "debug_assert_ne!",
    ],
    s = [
      "i8",
      "i16",
      "i32",
      "i64",
      "i128",
      "isize",
      "u8",
      "u16",
      "u32",
      "u64",
      "u128",
      "usize",
      "f32",
      "f64",
      "str",
      "char",
      "bool",
      "Box",
      "Option",
      "Result",
      "String",
      "Vec",
    ];
  return {
    name: "Rust",
    aliases: ["rs"],
    keywords: {
      $pattern: e.IDENT_RE + "!?",
      type: s,
      keyword: a,
      literal: u,
      built_in: c,
    },
    illegal: "</",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
      e.inherit(e.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }),
      {
        className: "string",
        variants: [
          { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
          { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ },
        ],
      },
      { className: "symbol", begin: /'[a-zA-Z_][a-zA-Z0-9_]*/ },
      {
        className: "number",
        variants: [
          { begin: "\\b0b([01_]+)" + o },
          { begin: "\\b0o([0-7_]+)" + o },
          { begin: "\\b0x([A-Fa-f0-9_]+)" + o },
          { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + o },
        ],
        relevance: 0,
      },
      {
        begin: [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE],
        className: { 1: "keyword", 3: "title.function" },
      },
      {
        className: "meta",
        begin: "#!?\\[",
        end: "\\]",
        contains: [{ className: "string", begin: /"/, end: /"/ }],
      },
      {
        begin: [/let/, /\s+/, /(?:mut\s+)?/, e.UNDERSCORE_IDENT_RE],
        className: { 1: "keyword", 3: "keyword", 4: "variable" },
      },
      {
        begin: [/for/, /\s+/, e.UNDERSCORE_IDENT_RE, /\s+/, /in/],
        className: { 1: "keyword", 3: "variable", 5: "keyword" },
      },
      {
        begin: [/type/, /\s+/, e.UNDERSCORE_IDENT_RE],
        className: { 1: "keyword", 3: "title.class" },
      },
      {
        begin: [
          /(?:trait|enum|struct|union|impl|for)/,
          /\s+/,
          e.UNDERSCORE_IDENT_RE,
        ],
        className: { 1: "keyword", 3: "title.class" },
      },
      {
        begin: e.IDENT_RE + "::",
        keywords: { keyword: "Self", built_in: c, type: s },
      },
      { className: "punctuation", begin: "->" },
      n,
    ],
  };
}
In = Yo;
var Ln = In;
var Bn = {},
  es = (e) => ({
    IMPORTANT: { scope: "meta", begin: "!important" },
    BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
    },
    FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin:
        e.NUMBER_RE +
        "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0,
    },
    CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ },
  }),
  ts = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "p",
    "q",
    "quote",
    "samp",
    "section",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video",
  ],
  ns = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    "min-width",
    "max-width",
    "min-height",
    "max-height",
  ],
  as = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    "host",
    "host-context",
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    "lang",
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    "nth-child",
    "nth-col",
    "nth-last-child",
    "nth-last-col",
    "nth-last-of-type",
    "nth-of-type",
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where",
  ],
  os = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error",
  ],
  ss = [
    "align-content",
    "align-items",
    "align-self",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "empty-cells",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "isolation",
    "justify-content",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "row-gap",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "speak",
    "speak-as",
    "src",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "unicode-bidi",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "z-index",
  ].reverse();
function rs(e) {
  let t = es(e),
    n = os,
    o = as,
    a = "@[a-z-]+",
    u = "and or not only",
    s = {
      className: "variable",
      begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b",
      relevance: 0,
    };
  return {
    name: "SCSS",
    case_insensitive: !0,
    illegal: "[=/|']",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      t.CSS_NUMBER_MODE,
      { className: "selector-id", begin: "#[A-Za-z0-9_-]+", relevance: 0 },
      { className: "selector-class", begin: "\\.[A-Za-z0-9_-]+", relevance: 0 },
      t.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-tag",
        begin: "\\b(" + ts.join("|") + ")\\b",
        relevance: 0,
      },
      { className: "selector-pseudo", begin: ":(" + o.join("|") + ")" },
      { className: "selector-pseudo", begin: ":(:)?(" + n.join("|") + ")" },
      s,
      { begin: /\(/, end: /\)/, contains: [t.CSS_NUMBER_MODE] },
      t.CSS_VARIABLE,
      { className: "attribute", begin: "\\b(" + ss.join("|") + ")\\b" },
      {
        begin:
          "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b",
      },
      {
        begin: /:/,
        end: /[;}{]/,
        relevance: 0,
        contains: [
          t.BLOCK_COMMENT,
          s,
          t.HEXCOLOR,
          t.CSS_NUMBER_MODE,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          t.IMPORTANT,
          t.FUNCTION_DISPATCH,
        ],
      },
      {
        begin: "@(page|font-face)",
        keywords: { $pattern: a, keyword: "@page @font-face" },
      },
      {
        begin: "@",
        end: "[{;]",
        returnBegin: !0,
        keywords: { $pattern: /[a-z-]+/, keyword: u, attribute: ns.join(" ") },
        contains: [
          { begin: a, className: "keyword" },
          { begin: /[a-z-]+(?=:)/, className: "attribute" },
          s,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          t.HEXCOLOR,
          t.CSS_NUMBER_MODE,
        ],
      },
      t.FUNCTION_DISPATCH,
    ],
  };
}
Bn = rs;
var Fn = Bn;
var zn = {};
function is(e) {
  return {
    name: "Shell Session",
    aliases: ["console", "shellsession"],
    contains: [
      {
        className: "meta.prompt",
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
        starts: { end: /[^\\](?=\s*$)/, subLanguage: "bash" },
      },
    ],
  };
}
zn = is;
var Pn = zn;
var Un = {};
function ls(e) {
  let t = e.regex,
    n = e.COMMENT("--", "$"),
    o = {
      className: "string",
      variants: [{ begin: /'/, end: /'/, contains: [{ begin: /''/ }] }],
    },
    a = { begin: /"/, end: /"/, contains: [{ begin: /""/ }] },
    u = ["true", "false", "unknown"],
    c = [
      "double precision",
      "large object",
      "with timezone",
      "without timezone",
    ],
    s = [
      "bigint",
      "binary",
      "blob",
      "boolean",
      "char",
      "character",
      "clob",
      "date",
      "dec",
      "decfloat",
      "decimal",
      "float",
      "int",
      "integer",
      "interval",
      "nchar",
      "nclob",
      "national",
      "numeric",
      "real",
      "row",
      "smallint",
      "time",
      "timestamp",
      "varchar",
      "varying",
      "varbinary",
    ],
    r = ["add", "asc", "collation", "desc", "final", "first", "last", "view"],
    d = [
      "abs",
      "acos",
      "all",
      "allocate",
      "alter",
      "and",
      "any",
      "are",
      "array",
      "array_agg",
      "array_max_cardinality",
      "as",
      "asensitive",
      "asin",
      "asymmetric",
      "at",
      "atan",
      "atomic",
      "authorization",
      "avg",
      "begin",
      "begin_frame",
      "begin_partition",
      "between",
      "bigint",
      "binary",
      "blob",
      "boolean",
      "both",
      "by",
      "call",
      "called",
      "cardinality",
      "cascaded",
      "case",
      "cast",
      "ceil",
      "ceiling",
      "char",
      "char_length",
      "character",
      "character_length",
      "check",
      "classifier",
      "clob",
      "close",
      "coalesce",
      "collate",
      "collect",
      "column",
      "commit",
      "condition",
      "connect",
      "constraint",
      "contains",
      "convert",
      "copy",
      "corr",
      "corresponding",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "create",
      "cross",
      "cube",
      "cume_dist",
      "current",
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_row",
      "current_schema",
      "current_time",
      "current_timestamp",
      "current_path",
      "current_role",
      "current_transform_group_for_type",
      "current_user",
      "cursor",
      "cycle",
      "date",
      "day",
      "deallocate",
      "dec",
      "decimal",
      "decfloat",
      "declare",
      "default",
      "define",
      "delete",
      "dense_rank",
      "deref",
      "describe",
      "deterministic",
      "disconnect",
      "distinct",
      "double",
      "drop",
      "dynamic",
      "each",
      "element",
      "else",
      "empty",
      "end",
      "end_frame",
      "end_partition",
      "end-exec",
      "equals",
      "escape",
      "every",
      "except",
      "exec",
      "execute",
      "exists",
      "exp",
      "external",
      "extract",
      "false",
      "fetch",
      "filter",
      "first_value",
      "float",
      "floor",
      "for",
      "foreign",
      "frame_row",
      "free",
      "from",
      "full",
      "function",
      "fusion",
      "get",
      "global",
      "grant",
      "group",
      "grouping",
      "groups",
      "having",
      "hold",
      "hour",
      "identity",
      "in",
      "indicator",
      "initial",
      "inner",
      "inout",
      "insensitive",
      "insert",
      "int",
      "integer",
      "intersect",
      "intersection",
      "interval",
      "into",
      "is",
      "join",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "language",
      "large",
      "last_value",
      "lateral",
      "lead",
      "leading",
      "left",
      "like",
      "like_regex",
      "listagg",
      "ln",
      "local",
      "localtime",
      "localtimestamp",
      "log",
      "log10",
      "lower",
      "match",
      "match_number",
      "match_recognize",
      "matches",
      "max",
      "member",
      "merge",
      "method",
      "min",
      "minute",
      "mod",
      "modifies",
      "module",
      "month",
      "multiset",
      "national",
      "natural",
      "nchar",
      "nclob",
      "new",
      "no",
      "none",
      "normalize",
      "not",
      "nth_value",
      "ntile",
      "null",
      "nullif",
      "numeric",
      "octet_length",
      "occurrences_regex",
      "of",
      "offset",
      "old",
      "omit",
      "on",
      "one",
      "only",
      "open",
      "or",
      "order",
      "out",
      "outer",
      "over",
      "overlaps",
      "overlay",
      "parameter",
      "partition",
      "pattern",
      "per",
      "percent",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "period",
      "portion",
      "position",
      "position_regex",
      "power",
      "precedes",
      "precision",
      "prepare",
      "primary",
      "procedure",
      "ptf",
      "range",
      "rank",
      "reads",
      "real",
      "recursive",
      "ref",
      "references",
      "referencing",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "release",
      "result",
      "return",
      "returns",
      "revoke",
      "right",
      "rollback",
      "rollup",
      "row",
      "row_number",
      "rows",
      "running",
      "savepoint",
      "scope",
      "scroll",
      "search",
      "second",
      "seek",
      "select",
      "sensitive",
      "session_user",
      "set",
      "show",
      "similar",
      "sin",
      "sinh",
      "skip",
      "smallint",
      "some",
      "specific",
      "specifictype",
      "sql",
      "sqlexception",
      "sqlstate",
      "sqlwarning",
      "sqrt",
      "start",
      "static",
      "stddev_pop",
      "stddev_samp",
      "submultiset",
      "subset",
      "substring",
      "substring_regex",
      "succeeds",
      "sum",
      "symmetric",
      "system",
      "system_time",
      "system_user",
      "table",
      "tablesample",
      "tan",
      "tanh",
      "then",
      "time",
      "timestamp",
      "timezone_hour",
      "timezone_minute",
      "to",
      "trailing",
      "translate",
      "translate_regex",
      "translation",
      "treat",
      "trigger",
      "trim",
      "trim_array",
      "true",
      "truncate",
      "uescape",
      "union",
      "unique",
      "unknown",
      "unnest",
      "update",
      "upper",
      "user",
      "using",
      "value",
      "values",
      "value_of",
      "var_pop",
      "var_samp",
      "varbinary",
      "varchar",
      "varying",
      "versioning",
      "when",
      "whenever",
      "where",
      "width_bucket",
      "window",
      "with",
      "within",
      "without",
      "year",
    ],
    m = [
      "abs",
      "acos",
      "array_agg",
      "asin",
      "atan",
      "avg",
      "cast",
      "ceil",
      "ceiling",
      "coalesce",
      "corr",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "cume_dist",
      "dense_rank",
      "deref",
      "element",
      "exp",
      "extract",
      "first_value",
      "floor",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "last_value",
      "lead",
      "listagg",
      "ln",
      "log",
      "log10",
      "lower",
      "max",
      "min",
      "mod",
      "nth_value",
      "ntile",
      "nullif",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "position",
      "position_regex",
      "power",
      "rank",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "row_number",
      "sin",
      "sinh",
      "sqrt",
      "stddev_pop",
      "stddev_samp",
      "substring",
      "substring_regex",
      "sum",
      "tan",
      "tanh",
      "translate",
      "translate_regex",
      "treat",
      "trim",
      "trim_array",
      "unnest",
      "upper",
      "value_of",
      "var_pop",
      "var_samp",
      "width_bucket",
    ],
    y = [
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_schema",
      "current_transform_group_for_type",
      "current_user",
      "session_user",
      "system_time",
      "system_user",
      "current_time",
      "localtime",
      "current_timestamp",
      "localtimestamp",
    ],
    f = [
      "create table",
      "insert into",
      "primary key",
      "foreign key",
      "not null",
      "alter table",
      "add constraint",
      "grouping sets",
      "on overflow",
      "character set",
      "respect nulls",
      "ignore nulls",
      "nulls first",
      "nulls last",
      "depth first",
      "breadth first",
    ],
    _ = m,
    N = [...d, ...r].filter((g) => !m.includes(g)),
    l = { className: "variable", begin: /@[a-z0-9]+/ },
    i = {
      className: "operator",
      begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
      relevance: 0,
    },
    b = {
      begin: t.concat(/\b/, t.either(..._), /\s*\(/),
      relevance: 0,
      keywords: { built_in: _ },
    };
  function h(g, { exceptions: v, when: $ } = {}) {
    let E = $;
    return (
      (v = v || []),
      g.map((C) =>
        C.match(/\|\d+$/) || v.includes(C) ? C : E(C) ? `${C}|0` : C,
      )
    );
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: h(N, { when: (g) => g.length < 3 }),
      literal: u,
      type: s,
      built_in: y,
    },
    contains: [
      {
        begin: t.either(...f),
        relevance: 0,
        keywords: {
          $pattern: /[\w\.]+/,
          keyword: N.concat(f),
          literal: u,
          type: s,
        },
      },
      { className: "type", begin: t.either(...c) },
      b,
      l,
      o,
      a,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      n,
      i,
    ],
  };
}
Un = ls;
var Hn = Un;
var Gn = {};
function Wn(e) {
  return e ? (typeof e == "string" ? e : e.source) : null;
}
function Be(e) {
  return H("(?=", e, ")");
}
function H(...e) {
  return e.map((n) => Wn(n)).join("");
}
function cs(e) {
  let t = e[e.length - 1];
  return typeof t == "object" && t.constructor === Object
    ? (e.splice(e.length - 1, 1), t)
    : {};
}
function ee(...e) {
  return (
    "(" + (cs(e).capture ? "" : "?:") + e.map((o) => Wn(o)).join("|") + ")"
  );
}
var nt = (e) => H(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
  ds = ["Protocol", "Type"].map(nt),
  Kn = ["init", "self"].map(nt),
  us = ["Any", "Self"],
  Ye = [
    "actor",
    "any",
    "associatedtype",
    "async",
    "await",
    /as\?/,
    /as!/,
    "as",
    "break",
    "case",
    "catch",
    "class",
    "continue",
    "convenience",
    "default",
    "defer",
    "deinit",
    "didSet",
    "distributed",
    "do",
    "dynamic",
    "else",
    "enum",
    "extension",
    "fallthrough",
    /fileprivate\(set\)/,
    "fileprivate",
    "final",
    "for",
    "func",
    "get",
    "guard",
    "if",
    "import",
    "indirect",
    "infix",
    /init\?/,
    /init!/,
    "inout",
    /internal\(set\)/,
    "internal",
    "in",
    "is",
    "isolated",
    "nonisolated",
    "lazy",
    "let",
    "mutating",
    "nonmutating",
    /open\(set\)/,
    "open",
    "operator",
    "optional",
    "override",
    "postfix",
    "precedencegroup",
    "prefix",
    /private\(set\)/,
    "private",
    "protocol",
    /public\(set\)/,
    "public",
    "repeat",
    "required",
    "rethrows",
    "return",
    "set",
    "some",
    "static",
    "struct",
    "subscript",
    "super",
    "switch",
    "throws",
    "throw",
    /try\?/,
    /try!/,
    "try",
    "typealias",
    /unowned\(safe\)/,
    /unowned\(unsafe\)/,
    "unowned",
    "var",
    "weak",
    "where",
    "while",
    "willSet",
  ],
  qn = ["false", "nil", "true"],
  gs = [
    "assignment",
    "associativity",
    "higherThan",
    "left",
    "lowerThan",
    "none",
    "right",
  ],
  bs = [
    "#colorLiteral",
    "#column",
    "#dsohandle",
    "#else",
    "#elseif",
    "#endif",
    "#error",
    "#file",
    "#fileID",
    "#fileLiteral",
    "#filePath",
    "#function",
    "#if",
    "#imageLiteral",
    "#keyPath",
    "#line",
    "#selector",
    "#sourceLocation",
    "#warn_unqualified_access",
    "#warning",
  ],
  Zn = [
    "abs",
    "all",
    "any",
    "assert",
    "assertionFailure",
    "debugPrint",
    "dump",
    "fatalError",
    "getVaList",
    "isKnownUniquelyReferenced",
    "max",
    "min",
    "numericCast",
    "pointwiseMax",
    "pointwiseMin",
    "precondition",
    "preconditionFailure",
    "print",
    "readLine",
    "repeatElement",
    "sequence",
    "stride",
    "swap",
    "swift_unboxFromSwiftValueWithType",
    "transcode",
    "type",
    "unsafeBitCast",
    "unsafeDowncast",
    "withExtendedLifetime",
    "withUnsafeMutablePointer",
    "withUnsafePointer",
    "withVaList",
    "withoutActuallyEscaping",
    "zip",
  ],
  Qn = ee(
    /[/=\-+!*%<>&|^~?]/,
    /[\u00A1-\u00A7]/,
    /[\u00A9\u00AB]/,
    /[\u00AC\u00AE]/,
    /[\u00B0\u00B1]/,
    /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
    /[\u2016-\u2017]/,
    /[\u2020-\u2027]/,
    /[\u2030-\u203E]/,
    /[\u2041-\u2053]/,
    /[\u2055-\u205E]/,
    /[\u2190-\u23FF]/,
    /[\u2500-\u2775]/,
    /[\u2794-\u2BFF]/,
    /[\u2E00-\u2E7F]/,
    /[\u3001-\u3003]/,
    /[\u3008-\u3020]/,
    /[\u3030]/,
  ),
  Xn = ee(
    Qn,
    /[\u0300-\u036F]/,
    /[\u1DC0-\u1DFF]/,
    /[\u20D0-\u20FF]/,
    /[\uFE00-\uFE0F]/,
    /[\uFE20-\uFE2F]/,
  ),
  et = H(Qn, Xn, "*"),
  Vn = ee(
    /[a-zA-Z_]/,
    /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
    /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
    /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
    /[\u1E00-\u1FFF]/,
    /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
    /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
    /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
    /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
    /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
    /[\uFE47-\uFEFE\uFF00-\uFFFD]/,
  ),
  Fe = ee(Vn, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
  le = H(Vn, Fe, "*"),
  tt = H(/[A-Z]/, Fe, "*"),
  ms = [
    "autoclosure",
    H(/convention\(/, ee("swift", "block", "c"), /\)/),
    "discardableResult",
    "dynamicCallable",
    "dynamicMemberLookup",
    "escaping",
    "frozen",
    "GKInspectable",
    "IBAction",
    "IBDesignable",
    "IBInspectable",
    "IBOutlet",
    "IBSegueAction",
    "inlinable",
    "main",
    "nonobjc",
    "NSApplicationMain",
    "NSCopying",
    "NSManaged",
    H(/objc\(/, le, /\)/),
    "objc",
    "objcMembers",
    "propertyWrapper",
    "requires_stored_property_inits",
    "resultBuilder",
    "testable",
    "UIApplicationMain",
    "unknown",
    "usableFromInline",
  ],
  hs = [
    "iOS",
    "iOSApplicationExtension",
    "macOS",
    "macOSApplicationExtension",
    "macCatalyst",
    "macCatalystApplicationExtension",
    "watchOS",
    "watchOSApplicationExtension",
    "tvOS",
    "tvOSApplicationExtension",
    "swift",
  ];
function ps(e) {
  let t = { match: /\s+/, relevance: 0 },
    n = e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
    o = [e.C_LINE_COMMENT_MODE, n],
    a = { match: [/\./, ee(...ds, ...Kn)], className: { 2: "keyword" } },
    u = { match: H(/\./, ee(...Ye)), relevance: 0 },
    c = Ye.filter((P) => typeof P == "string").concat(["_|0"]),
    s = Ye.filter((P) => typeof P != "string")
      .concat(us)
      .map(nt),
    r = { variants: [{ className: "keyword", match: ee(...s, ...Kn) }] },
    d = { $pattern: ee(/\b\w+/, /#\w+/), keyword: c.concat(bs), literal: qn },
    m = [a, u, r],
    y = { match: H(/\./, ee(...Zn)), relevance: 0 },
    f = { className: "built_in", match: H(/\b/, ee(...Zn), /(?=\()/) },
    _ = [y, f],
    N = { match: /->/, relevance: 0 },
    l = {
      className: "operator",
      relevance: 0,
      variants: [{ match: et }, { match: `\\.(\\.|${Xn})+` }],
    },
    i = [N, l],
    b = "([0-9]_*)+",
    h = "([0-9a-fA-F]_*)+",
    g = {
      className: "number",
      relevance: 0,
      variants: [
        { match: `\\b(${b})(\\.(${b}))?([eE][+-]?(${b}))?\\b` },
        { match: `\\b0x(${h})(\\.(${h}))?([pP][+-]?(${b}))?\\b` },
        { match: /\b0o([0-7]_*)+\b/ },
        { match: /\b0b([01]_*)+\b/ },
      ],
    },
    v = (P = "") => ({
      className: "subst",
      variants: [
        { match: H(/\\/, P, /[0\\tnr"']/) },
        { match: H(/\\/, P, /u\{[0-9a-fA-F]{1,8}\}/) },
      ],
    }),
    $ = (P = "") => ({
      className: "subst",
      match: H(/\\/, P, /[\t ]*(?:[\r\n]|\r\n)/),
    }),
    E = (P = "") => ({
      className: "subst",
      label: "interpol",
      begin: H(/\\/, P, /\(/),
      end: /\)/,
    }),
    C = (P = "") => ({
      begin: H(P, /"""/),
      end: H(/"""/, P),
      contains: [v(P), $(P), E(P)],
    }),
    B = (P = "") => ({
      begin: H(P, /"/),
      end: H(/"/, P),
      contains: [v(P), E(P)],
    }),
    F = {
      className: "string",
      variants: [
        C(),
        C("#"),
        C("##"),
        C("###"),
        B(),
        B("#"),
        B("##"),
        B("###"),
      ],
    },
    J = { match: H(/`/, le, /`/) },
    te = { className: "variable", match: /\$\d+/ },
    ne = { className: "variable", match: `\\$${Fe}+` },
    Q = [J, te, ne],
    W = {
      match: /(@|#(un)?)available/,
      className: "keyword",
      starts: {
        contains: [
          { begin: /\(/, end: /\)/, keywords: hs, contains: [...i, g, F] },
        ],
      },
    },
    U = { className: "keyword", match: H(/@/, ee(...ms)) },
    p = { className: "meta", match: H(/@/, le) },
    w = [W, U, p],
    A = {
      match: Be(/\b[A-Z]/),
      relevance: 0,
      contains: [
        {
          className: "type",
          match: H(
            /(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,
            Fe,
            "+",
          ),
        },
        { className: "type", match: tt, relevance: 0 },
        { match: /[?!]+/, relevance: 0 },
        { match: /\.\.\./, relevance: 0 },
        { match: H(/\s+&\s+/, Be(tt)), relevance: 0 },
      ],
    },
    j = {
      begin: /</,
      end: />/,
      keywords: d,
      contains: [...o, ...m, ...w, N, A],
    };
  A.contains.push(j);
  let L = { match: H(le, /\s*:/), keywords: "_|0", relevance: 0 },
    q = {
      begin: /\(/,
      end: /\)/,
      relevance: 0,
      keywords: d,
      contains: ["self", L, ...o, ...m, ..._, ...i, g, F, ...Q, ...w, A],
    },
    Z = { begin: /</, end: />/, contains: [...o, A] },
    ae = {
      begin: ee(Be(H(le, /\s*:/)), Be(H(le, /\s+/, le, /\s*:/))),
      end: /:/,
      relevance: 0,
      contains: [
        { className: "keyword", match: /\b_\b/ },
        { className: "params", match: le },
      ],
    },
    G = {
      begin: /\(/,
      end: /\)/,
      keywords: d,
      contains: [ae, ...o, ...m, ...i, g, F, ...w, A, q],
      endsParent: !0,
      illegal: /["']/,
    },
    Y = {
      match: [/func/, /\s+/, ee(J.match, le, et)],
      className: { 1: "keyword", 3: "title.function" },
      contains: [Z, G, t],
      illegal: [/\[/, /%/],
    },
    me = {
      match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
      className: { 1: "keyword" },
      contains: [Z, G, t],
      illegal: /\[|%/,
    },
    ce = {
      match: [/operator/, /\s+/, et],
      className: { 1: "keyword", 3: "title" },
    },
    de = {
      begin: [/precedencegroup/, /\s+/, tt],
      className: { 1: "keyword", 3: "title" },
      contains: [A],
      keywords: [...gs, ...qn],
      end: /}/,
    };
  for (let P of F.variants) {
    let ue = P.contains.find((ye) => ye.label === "interpol");
    ue.keywords = d;
    let Se = [...m, ..._, ...i, g, F, ...Q];
    ue.contains = [
      ...Se,
      { begin: /\(/, end: /\)/, contains: ["self", ...Se] },
    ];
  }
  return {
    name: "Swift",
    keywords: d,
    contains: [
      ...o,
      Y,
      me,
      {
        beginKeywords: "struct protocol class extension enum actor",
        end: "\\{",
        excludeEnd: !0,
        keywords: d,
        contains: [
          e.inherit(e.TITLE_MODE, {
            className: "title.class",
            begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/,
          }),
          ...m,
        ],
      },
      ce,
      de,
      { beginKeywords: "import", end: /$/, contains: [...o], relevance: 0 },
      ...m,
      ..._,
      ...i,
      g,
      F,
      ...Q,
      ...w,
      A,
      q,
    ],
  };
}
Gn = ps;
var Jn = Gn;
var Yn = {};
function fs(e) {
  let t = "true false yes no null",
    n = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
    o = {
      className: "attr",
      variants: [
        { begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" },
        { begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)' },
        { begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)" },
      ],
    },
    a = {
      className: "template-variable",
      variants: [
        { begin: /\{\{/, end: /\}\}/ },
        { begin: /%\{/, end: /\}/ },
      ],
    },
    u = {
      className: "string",
      relevance: 0,
      variants: [
        { begin: /'/, end: /'/ },
        { begin: /"/, end: /"/ },
        { begin: /\S+/ },
      ],
      contains: [e.BACKSLASH_ESCAPE, a],
    },
    c = e.inherit(u, {
      variants: [
        { begin: /'/, end: /'/ },
        { begin: /"/, end: /"/ },
        { begin: /[^\s,{}[\]]+/ },
      ],
    }),
    s = "[0-9]{4}(-[0-9][0-9]){0,2}",
    r = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",
    d = "(\\.[0-9]*)?",
    m = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",
    y = { className: "number", begin: "\\b" + s + r + d + m + "\\b" },
    f = {
      end: ",",
      endsWithParent: !0,
      excludeEnd: !0,
      keywords: t,
      relevance: 0,
    },
    _ = { begin: /\{/, end: /\}/, contains: [f], illegal: "\\n", relevance: 0 },
    N = {
      begin: "\\[",
      end: "\\]",
      contains: [f],
      illegal: "\\n",
      relevance: 0,
    },
    l = [
      o,
      { className: "meta", begin: "^---\\s*$", relevance: 10 },
      {
        className: "string",
        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*",
      },
      {
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
      },
      { className: "type", begin: "!\\w+!" + n },
      { className: "type", begin: "!<" + n + ">" },
      { className: "type", begin: "!" + n },
      { className: "type", begin: "!!" + n },
      { className: "meta", begin: "&" + e.UNDERSCORE_IDENT_RE + "$" },
      { className: "meta", begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$" },
      { className: "bullet", begin: "-(?=[ ]|$)", relevance: 0 },
      e.HASH_COMMENT_MODE,
      { beginKeywords: t, keywords: { literal: t } },
      y,
      { className: "number", begin: e.C_NUMBER_RE + "\\b", relevance: 0 },
      _,
      N,
      u,
    ],
    i = [...l];
  return (
    i.pop(),
    i.push(c),
    (f.contains = i),
    { name: "YAML", case_insensitive: !0, aliases: ["yml"], contains: l }
  );
}
Yn = fs;
var ea = Yn;
var ta = {},
  ze = "[A-Za-z$_][0-9A-Za-z$_]*",
  na = [
    "as",
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
  ],
  aa = ["true", "false", "null", "undefined", "NaN", "Infinity"],
  oa = [
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    "Math",
    "Date",
    "Number",
    "BigInt",
    "String",
    "RegExp",
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    "Reflect",
    "Proxy",
    "Intl",
    "WebAssembly",
  ],
  sa = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",
  ],
  ra = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape",
  ],
  ia = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "module",
    "global",
  ],
  la = [].concat(ra, oa, sa);
function _s(e) {
  let t = e.regex,
    n = (w, { after: A }) => {
      let j = "</" + w[0].slice(1);
      return w.input.indexOf(j, A) !== -1;
    },
    o = ze,
    a = { begin: "<>", end: "</>" },
    u = /<[A-Za-z0-9\\._:-]+\s*\/>/,
    c = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (w, A) => {
        let j = w[0].length + w.index,
          L = w.input[j];
        if (L === "<" || L === ",") {
          A.ignoreMatch();
          return;
        }
        L === ">" && (n(w, { after: j }) || A.ignoreMatch());
        let q;
        (q = w.input.substring(j).match(/^\s+extends\s+/)) &&
          q.index === 0 &&
          A.ignoreMatch();
      },
    },
    s = {
      $pattern: ze,
      keyword: na,
      literal: aa,
      built_in: la,
      "variable.language": ia,
    },
    r = "[0-9](_?[0-9])*",
    d = `\\.(${r})`,
    m = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
    y = {
      className: "number",
      variants: [
        { begin: `(\\b(${m})((${d})|\\.)?|(${d}))[eE][+-]?(${r})\\b` },
        { begin: `\\b(${m})\\b((${d})\\b|\\.)?|(${d})\\b` },
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        { begin: "\\b0[0-7]+n?\\b" },
      ],
      relevance: 0,
    },
    f = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: s,
      contains: [],
    },
    _ = {
      begin: "html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, f],
        subLanguage: "xml",
      },
    },
    N = {
      begin: "css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, f],
        subLanguage: "css",
      },
    },
    l = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [e.BACKSLASH_ESCAPE, f],
    },
    b = {
      className: "comment",
      variants: [
        e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                { className: "doctag", begin: "@[A-Za-z]+" },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0,
                },
                {
                  className: "variable",
                  begin: o + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0,
                },
                { begin: /(?=[^\n])\s/, relevance: 0 },
              ],
            },
          ],
        }),
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE,
      ],
    },
    h = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, _, N, l, y];
  f.contains = h.concat({
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: ["self"].concat(h),
  });
  let g = [].concat(b, f.contains),
    v = g.concat([
      { begin: /\(/, end: /\)/, keywords: s, contains: ["self"].concat(g) },
    ]),
    $ = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: s,
      contains: v,
    },
    E = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            o,
            /\s+/,
            /extends/,
            /\s+/,
            t.concat(o, "(", t.concat(/\./, o), ")*"),
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited",
          },
        },
        {
          match: [/class/, /\s+/, o],
          scope: { 1: "keyword", 3: "title.class" },
        },
      ],
    },
    C = {
      relevance: 0,
      match: t.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      ),
      className: "title.class",
      keywords: { _: [...oa, ...sa] },
    },
    B = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/,
    },
    F = {
      variants: [
        { match: [/function/, /\s+/, o, /(?=\s*\()/] },
        { match: [/function/, /\s*(?=\()/] },
      ],
      className: { 1: "keyword", 3: "title.function" },
      label: "func.def",
      contains: [$],
      illegal: /%/,
    },
    J = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant",
    };
  function te(w) {
    return t.concat("(?!", w.join("|"), ")");
  }
  let ne = {
      match: t.concat(/\b/, te([...ra, "super"]), o, t.lookahead(/\(/)),
      className: "title.function",
      relevance: 0,
    },
    Q = {
      begin: t.concat(/\./, t.lookahead(t.concat(o, /(?![0-9A-Za-z$_(])/))),
      end: o,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0,
    },
    W = {
      match: [/get|set/, /\s+/, o, /(?=\()/],
      className: { 1: "keyword", 3: "title.function" },
      contains: [{ begin: /\(\)/ }, $],
    },
    U =
      "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
      e.UNDERSCORE_IDENT_RE +
      ")\\s*=>",
    p = {
      match: [
        /const|var|let/,
        /\s+/,
        o,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        t.lookahead(U),
      ],
      keywords: "async",
      className: { 1: "keyword", 3: "title.function" },
      contains: [$],
    };
  return {
    name: "Javascript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    exports: { PARAMS_CONTAINS: v, CLASS_REFERENCE: C },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
      B,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      _,
      N,
      l,
      b,
      y,
      C,
      { className: "attr", begin: o + t.lookahead(":"), relevance: 0 },
      p,
      {
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          b,
          e.REGEXP_MODE,
          {
            className: "function",
            begin: U,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                  { className: null, begin: /\(\s*\)/, skip: !0 },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: v,
                  },
                ],
              },
            ],
          },
          { begin: /,/, relevance: 0 },
          { match: /\s+/, relevance: 0 },
          {
            variants: [
              { begin: a.begin, end: a.end },
              { match: u },
              { begin: c.begin, "on:begin": c.isTrulyOpeningTag, end: c.end },
            ],
            subLanguage: "xml",
            contains: [
              { begin: c.begin, end: c.end, skip: !0, contains: ["self"] },
            ],
          },
        ],
      },
      F,
      { beginKeywords: "while if switch catch for" },
      {
        begin:
          "\\b(?!function)" +
          e.UNDERSCORE_IDENT_RE +
          "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: !0,
        label: "func.def",
        contains: [
          $,
          e.inherit(e.TITLE_MODE, { begin: o, className: "title.function" }),
        ],
      },
      { match: /\.\.\./, relevance: 0 },
      Q,
      { match: "\\$" + o, relevance: 0 },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [$],
      },
      ne,
      J,
      E,
      W,
      { match: /\$[(.]/ },
    ],
  };
}
function ys(e) {
  let t = _s(e),
    n = ze,
    o = [
      "any",
      "void",
      "number",
      "boolean",
      "string",
      "object",
      "never",
      "symbol",
      "bigint",
      "unknown",
    ],
    a = {
      beginKeywords: "namespace",
      end: /\{/,
      excludeEnd: !0,
      contains: [t.exports.CLASS_REFERENCE],
    },
    u = {
      beginKeywords: "interface",
      end: /\{/,
      excludeEnd: !0,
      keywords: { keyword: "interface extends", built_in: o },
      contains: [t.exports.CLASS_REFERENCE],
    },
    c = { className: "meta", relevance: 10, begin: /^\s*['"]use strict['"]/ },
    s = [
      "type",
      "namespace",
      "interface",
      "public",
      "private",
      "protected",
      "implements",
      "declare",
      "abstract",
      "readonly",
      "enum",
      "override",
    ],
    r = {
      $pattern: ze,
      keyword: na.concat(s),
      literal: aa,
      built_in: la.concat(o),
      "variable.language": ia,
    },
    d = { className: "meta", begin: "@" + n },
    m = (f, _, N) => {
      let l = f.contains.findIndex((i) => i.label === _);
      if (l === -1) throw new Error("can not find mode to replace");
      f.contains.splice(l, 1, N);
    };
  Object.assign(t.keywords, r),
    t.exports.PARAMS_CONTAINS.push(d),
    (t.contains = t.contains.concat([d, a, u])),
    m(t, "shebang", e.SHEBANG()),
    m(t, "use_strict", c);
  let y = t.contains.find((f) => f.label === "func.def");
  return (
    (y.relevance = 0),
    Object.assign(t, { name: "TypeScript", aliases: ["ts", "tsx"] }),
    t
  );
}
ta = ys;
var ca = ta;
var da = {};
function vs(e) {
  let t = e.regex,
    n = { className: "string", begin: /"(""|[^/n])"C\b/ },
    o = {
      className: "string",
      begin: /"/,
      end: /"/,
      illegal: /\n/,
      contains: [{ begin: /""/ }],
    },
    a = /\d{1,2}\/\d{1,2}\/\d{4}/,
    u = /\d{4}-\d{1,2}-\d{1,2}/,
    c = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
    s = /\d{1,2}(:\d{1,2}){1,2}/,
    r = {
      className: "literal",
      variants: [
        { begin: t.concat(/# */, t.either(u, a), / *#/) },
        { begin: t.concat(/# */, s, / *#/) },
        { begin: t.concat(/# */, c, / *#/) },
        { begin: t.concat(/# */, t.either(u, a), / +/, t.either(c, s), / *#/) },
      ],
    },
    d = {
      className: "number",
      relevance: 0,
      variants: [
        {
          begin:
            /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/,
        },
        { begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ },
        { begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ },
        { begin: /&O[0-7_]+((U?[SIL])|[%&])?/ },
        { begin: /&B[01_]+((U?[SIL])|[%&])?/ },
      ],
    },
    m = { className: "label", begin: /^\w+:/ },
    y = e.COMMENT(/'''/, /$/, {
      contains: [{ className: "doctag", begin: /<\/?/, end: />/ }],
    }),
    f = e.COMMENT(null, /$/, {
      variants: [{ begin: /'/ }, { begin: /([\t ]|^)REM(?=\s)/ }],
    });
  return {
    name: "Visual Basic .NET",
    aliases: ["vb"],
    case_insensitive: !0,
    classNameAliases: { label: "symbol" },
    keywords: {
      keyword:
        "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
      built_in:
        "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
      type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
      literal: "true false nothing",
    },
    illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
    contains: [
      n,
      o,
      r,
      d,
      m,
      y,
      f,
      {
        className: "meta",
        begin:
          /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
        end: /$/,
        keywords: {
          keyword:
            "const disable else elseif enable end externalsource if region then",
        },
        contains: [f],
      },
    ],
  };
}
da = vs;
var ua = da;
var ga = {};
function ws(e) {
  e.regex;
  let t = e.COMMENT(/\(;/, /;\)/);
  t.contains.push("self");
  let n = e.COMMENT(/;;/, /$/),
    o = [
      "anyfunc",
      "block",
      "br",
      "br_if",
      "br_table",
      "call",
      "call_indirect",
      "data",
      "drop",
      "elem",
      "else",
      "end",
      "export",
      "func",
      "global.get",
      "global.set",
      "local.get",
      "local.set",
      "local.tee",
      "get_global",
      "get_local",
      "global",
      "if",
      "import",
      "local",
      "loop",
      "memory",
      "memory.grow",
      "memory.size",
      "module",
      "mut",
      "nop",
      "offset",
      "param",
      "result",
      "return",
      "select",
      "set_global",
      "set_local",
      "start",
      "table",
      "tee_local",
      "then",
      "type",
      "unreachable",
    ],
    a = {
      begin: [/(?:func|call|call_indirect)/, /\s+/, /\$[^\s)]+/],
      className: { 1: "keyword", 3: "title.function" },
    },
    u = { className: "variable", begin: /\$[\w_]+/ },
    c = { match: /(\((?!;)|\))+/, className: "punctuation", relevance: 0 },
    s = {
      className: "number",
      relevance: 0,
      match:
        /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
    },
    r = { match: /(i32|i64|f32|f64)(?!\.)/, className: "type" },
    d = {
      className: "keyword",
      match:
        /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/,
    };
  return {
    name: "WebAssembly",
    keywords: { $pattern: /[\w.]+/, keyword: o },
    contains: [
      n,
      t,
      {
        match: [/(?:offset|align)/, /\s*/, /=/],
        className: { 1: "keyword", 3: "operator" },
      },
      u,
      c,
      a,
      e.QUOTE_STRING_MODE,
      r,
      d,
      s,
    ],
  };
}
ga = ws;
var ba = ga;
var ma = {},
  D = At;
D.registerLanguage("xml", St);
D.registerLanguage("bash", Mt);
D.registerLanguage("c", Tt);
D.registerLanguage("cpp", xt);
D.registerLanguage("csharp", It);
D.registerLanguage("css", Bt);
D.registerLanguage("markdown", zt);
D.registerLanguage("diff", Ut);
D.registerLanguage("ruby", Kt);
D.registerLanguage("go", Zt);
D.registerLanguage("graphql", Wt);
D.registerLanguage("ini", Xt);
D.registerLanguage("java", en);
D.registerLanguage("javascript", rn);
D.registerLanguage("json", cn);
D.registerLanguage("kotlin", un);
D.registerLanguage("less", hn);
D.registerLanguage("lua", fn);
D.registerLanguage("makefile", yn);
D.registerLanguage("perl", wn);
D.registerLanguage("objectivec", kn);
D.registerLanguage("php", $n);
D.registerLanguage("php-template", On);
D.registerLanguage("plaintext", jn);
D.registerLanguage("python", Cn);
D.registerLanguage("python-repl", Rn);
D.registerLanguage("r", Dn);
D.registerLanguage("rust", Ln);
D.registerLanguage("scss", Fn);
D.registerLanguage("shell", Pn);
D.registerLanguage("sql", Hn);
D.registerLanguage("swift", Jn);
D.registerLanguage("yaml", ea);
D.registerLanguage("typescript", ca);
D.registerLanguage("vbnet", ua);
D.registerLanguage("wasm", ba);
D.HighlightJS = D;
D.default = D;
ma = D;
var Oe = ma;
/*!
  Theme: Tokyo Night Dark
  Link: https://github.com/enkia/tokyo-night-vscode-theme
*/ var Es = (e = "tokyo-night-dark") => [
  `.${e} .hljs-comment, .${e} .hljs-meta { color: #565f89; }`,
  `.${e} .hljs-deletion, .${e} .hljs-doctag, .${e} .hljs-regexp, .${e} .hljs-selector-attr, .${e} .hljs-selector-class, .${e} .hljs-selector-id, .${e} .hljs-selector-pseudo, .${e} .hljs-tag, .${e} .hljs-template-tag, .${e} .hljs-variable.language_ { color: #f7768e; }`,
  `.${e} .hljs-link, .${e} .hljs-literal, .${e} .hljs-number, .${e} .hljs-params, .${e} .hljs-template-variable, .${e} .hljs-type, .${e} .hljs-variable { color: #ff9e64; }`,
  `.${e} .hljs-attribute, .${e} .hljs-built_in { color: #e0af68; }`,
  `.${e} .hljs-keyword, .${e} .hljs-property, .${e} .hljs-subst, .${e} .hljs-title, .${e} .hljs-title.class_, .${e} .hljs-title.class_.inherited__, .${e} .hljs-title.function_ { color: #7dcfff; }`,
  `.${e} .hljs-selector-tag { color: #73daca; }`,
  `.${e} .hljs-addition, .${e} .hljs-bullet, .${e} .hljs-quote, .${e} .hljs-string, .${e} .hljs-symbol { color: #9ece6a; }`,
  `.${e} .hljs-code, .${e} .hljs-formula, .${e} .hljs-section { color: #7aa2f7; }`,
  `.${e} .hljs-attr, .${e} .hljs-char.escape_, .${e} .hljs-keyword, .${e} .hljs-name, .${e} .hljs-operator { color: #bb9af7; }`,
  `.${e} .hljs-punctuation { color: #c0caf5; }`,
  `.${e} .hljs { background: #1a1b26; color: #9aa5ce; }`,
  `.${e} .hljs-emphasis { font-style: italic; }`,
  `.${e} .hljs-strong { font-weight: 700; }`,
];
/*!
  Theme: Night Owl
  Link: https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/night-owl.min.css
*/ var ks = (e = "night-owl") => [
  `.${e} .hljs { background: #011627; color: #d6deeb; }`,
  `.${e} .hljs-keyword { color: #c792ea; font-style: italic; }`,
  `.${e} .hljs-built_in { color: #addb67; font-style: italic; }`,
  `.${e} .hljs-type { color: #82aaff; }`,
  `.${e} .hljs-literal { color: #ff5874; }`,
  `.${e} .hljs-number { color: #f78c6c; }`,
  `.${e} .hljs-regexp { color: #5ca7e4; }`,
  `.${e} .hljs-string { color: #ecc48d; }`,
  `.${e} .hljs-subst { color: #d3423e; }`,
  `.${e} .hljs-symbol { color: #82aaff; }`,
  `.${e} .hljs-class { color: #ffcb8b; }`,
  `.${e} .hljs-function { color: #82aaff; }`,
  `.${e} .hljs-title { color: #dcdcaa; font-style: italic; }`,
  `.${e} .hljs-params { color: #7fdbca; }`,
  `.${e} .hljs-comment { color: #637777; font-style: italic; }`,
  `.${e} .hljs-doctag { color: #7fdbca; }`,
  `.${e} .hljs-meta.hljs-meta .hljs-keyword { color: #82aaff; }`,
  `.${e} .hljs-meta .hljs-string { color: #ecc48d; }`,
  `.${e} .hljs-section { color: #82b1ff; }`,
  `.${e} .hljs-attr.hljs-name, .${e} .hljs-tag { color: #7fdbca; }`,
  `.${e} .hljs-attribute { color: #80cbc4; }`,
  `.${e} .hljs-variable { color: #addb67; }`,
  `.${e} .hljs-bullet { color: #d9f5dd; }`,
  `.${e} .hljs-code { color: #80cbc4; }`,
  `.${e} .hljs-emphasis { color: #c792ea; font-style: italic; }`,
  `.${e} .hljs-strong { color: #addb67; font-weight: 700; }`,
  `.${e} .hljs-formula { color: #c792ea; }`,
  `.${e} .hljs-link { color: #ff869a; }`,
  `.${e} .hljs-quote { color: #697098; font-style: italic; }`,
  `.${e} .hljs-selector-tag { color: #ff6363; }`,
  `.${e} .hljs-selector-id { color: #fad430; }`,
  `.${e} .hljs-selector-class { color: #addb67; font-style: italic; }`,
  `.${e} .hljs-selector-attr.hljs-selector-pseudo { color: #c792ea; font-style: italic; }`,
  `.${e} .hljs-template-tag { color: #c792ea; }`,
  `.${e} .hljs-template-variable { color: #addb67; }`,
  `.${e} .hljs-addition { color: #addb67ff; font-style: italic; }`,
  `.${e} .hljs-deletion { color: #ef535090; font-style: italic; }`,
];
/*!
  Theme: Night Owl Prism
  Link: https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/night-owl.min.css
*/ var Ns = (e = "night-owl") => [
  `code[class*="${e} language-"], pre[class*="${e} language-"] { color: #d6deeb; font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;  text-align: left;  white-space: pre;  word-spacing: normal;  word-break: normal;  word-wrap: normal;  line-height: 1.5;  font-size: 1em;  -moz-tab-size: 4;  -o-tab-size: 4;  tab-size: 4;  -webkit-hyphens: none;  -moz-hyphens: none;  -ms-hyphens: none;  hyphens: none ; }`,
  `pre[class*="${e} language-"]::-moz-selection, pre[class*="${e} language-"] ::-moz-selection, code[class*="${e} language-"]::-moz-selection, code[class*="${e} language-"] ::-moz-selection { text-shadow: none; background: rgba(29, 59, 83, 0.99); }`,
  `pre[class*="${e} language-"]::selection, pre[class*="${e} language-"] ::selection, code[class*="${e} language-"]::selection, code[class*="${e} language-"] ::selection { text-shadow: none; background: rgba(29, 59, 83, 0.99); }`,
  `@media print { code[class*="${e} language-"], pre[class*="${e} language-"] { text-shadow: none; } }`,
  `:not(pre) > code[class*="${e} language-"], pre[class*="${e} language-"] { color: white;  background: #011627; }`,
  `:not(pre) > code[class*="${e} language-"] { padding: 0.1em;  border-radius: 0.3em;  white-space: normal; }`,
  `.${e} .token.comment, .${e} .token.prolog, .${e} .token.cdata { color: rgb(99, 119, 119);  font-style: italic; }`,
  `.${e} .token.punctuation { color: rgb(199, 146, 234); }`,
  `.${e} .namespace { color: rgb(178, 204, 214); }`,
  `.${e} .token.deleted { color: rgba(239, 83, 80, 0.56);  font-style: italic; }`,
  `.${e} .token.symbol, .${e} .token.property { color: rgb(128, 203, 196); }`,
  `.${e} .token.tag, .${e} .token.operator, .${e} .token.keyword { color: rgb(127, 219, 202); }`,
  `.${e} .token.boolean { color: rgb(255, 88, 116); }`,
  `.${e} .token.number { color: rgb(247, 140, 108); }`,
  `.${e} .token.constant, .${e} .token.function, .${e} .token.builtin, .${e} .token.char { color: rgb(130, 170, 255); }`,
  `.${e} .token.selector, .${e} .token.doctype { color: rgb(199, 146, 234); }`,
  `.${e} .token.attr-name, .${e} .token.inserted { color: rgb(173, 219, 103); }`,
  `.${e} .token.string, .${e} .token.url, .${e} .token.entity, .${e} .language-css .token.string, .${e} .style .token.string { color: rgb(173, 219, 103); }`,
  `.${e} .token.class-name, .${e} .token.atrule, .${e} .token.attr-value { color: rgb(255, 203, 139); }`,
  `.${e} .token.regex, .${e} .token.important, .${e} .token.variable { color: rgb(214, 222, 235); }`,
  `.${e} .token.important, .${e} .token.bold { font-weight: bold; }`,
  `.${e} .token.italic { font-style: italic; }`,
];
/*!
  Theme: GitHub Dark
  Link: https://github.com/primer/github-syntax-dark
*/ var $s = (e = "github-dark") => [
  `.${e} .hljs{ color:#c9d1d9;background:#0d1117; }`,
  `.${e} .hljs-doctag, .${e} .hljs-keyword, .${e} .hljs-meta .hljs-keyword, .${e} .hljs-template-tag, .${e} .hljs-template-variable, .${e} .hljs-type, .${e} .hljs-variable.language_{ color:#ff7b72; }`,
  `.${e} .hljs-title, .${e} .hljs-title.class_, .${e} .hljs-title.class_.inherited__, .${e} .hljs-title.function_{ color:#d2a8ff; }`,
  `.${e} .hljs-attr, .${e} .hljs-attribute, .${e} .hljs-literal, .${e} .hljs-meta, .${e} .hljs-number, .${e} .hljs-operator, .${e} .hljs-selector-attr, .${e} .hljs-selector-class, .${e} .hljs-selector-id, .${e} .hljs-variable{ color:#79c0ff; }`,
  `.${e} .hljs-meta .hljs-string, .${e} .hljs-regexp, .${e} .hljs-string{ color:#a5d6ff; }`,
  `.${e} .hljs-built_in, .${e} .hljs-symbol{ color:#ffa657; }`,
  `.${e} .hljs-code, .${e} .hljs-comment, .${e} .hljs-formula{ color:#8b949e; }`,
  `.${e} .hljs-name, .${e} .hljs-quote, .${e} .hljs-selector-pseudo, .${e} .hljs-selector-tag{ color:#7ee787; }`,
  `.${e} .hljs-subst{ color:#c9d1d9; }`,
  `.${e} .hljs-section{ color:#1f6feb;font-weight:700; }`,
  `.${e} .hljs-bullet{ color:#f2cc60; }`,
  `.${e} .hljs-emphasis{ color:#c9d1d9;font-style:italic; }`,
  `.${e} .hljs-strong{ color:#c9d1d9;font-weight:700; }`,
  `.${e} .hljs-addition{ color:#aff5b4;background-color:#033a16; }`,
  `.${e} .hljs-deletion{ color:#ffdcd7;background-color:#67060c; }`,
];
/*!
  Theme: GitHub Dark
  Link: Light theme as seen on github.com
*/ var As = (e = "github") => [
  `.${e} .hljs { color: #24292e; background: #fff; }`,
  `.${e} .hljs-doctag, .${e} .hljs-keyword, .${e} .hljs-meta .hljs-keyword, .${e} .hljs-template-tag, .${e} .hljs-template-variable, .${e} .hljs-type, .${e} .hljs-variable.language_ { color: #d73a49; }`,
  `.${e} .hljs-title, .${e} .hljs-title.class_, .${e} .hljs-title.class_.inherited__, .${e} .hljs-title.function_ { color: #6f42c1; }`,
  `.${e} .hljs-attr, .${e} .hljs-attribute, .${e} .hljs-literal, .${e} .hljs-meta, .${e} .hljs-number, .${e} .hljs-operator, .${e} .hljs-selector-attr, .${e} .hljs-selector-class, .${e} .hljs-selector-id, .${e} .hljs-variable { color: #005cc5; }`,
  `.${e} .hljs-meta .hljs-string, .${e} .hljs-regexp, .${e} .hljs-string { color: #032f62; }`,
  `.${e} .hljs-built_in, .${e} .hljs-symbol { color: #e36209; }`,
  `.${e} .hljs-code, .${e} .hljs-comment, .${e} .hljs-formula { color: #6a737d; }`,
  `.${e} .hljs-name, .${e} .hljs-quote, .${e} .hljs-selector-pseudo, .${e} .hljs-selector-tag { color: #22863a; }`,
  `.${e} .hljs-subst { color: #24292e; }`,
  `.${e} .hljs-section { color: #005cc5; font-weight: 700; }`,
  `.${e} .hljs-bullet { color: #735c0f; }`,
  `.${e} .hljs-emphasis { color: #24292e; font-style: italic; }`,
  `.${e} .hljs-strong { color: #24292e; font-weight: 700; }`,
  `.${e} .hljs-addition { color: #22863a; background-color: #f0fff4; }`,
  `.${e} .hljs-deletion { color: #b31d28; background-color: #ffeef0; }`,
];
/*!
  Theme: Rosé Pine Moon
  Link: https://highlightjs.org/static/demo/
*/ var Os = (e = "rose-pine-moon") => [
  `.${e} .hljs { color: #e0def4; background: #232136; }`,
  `.${e} .hljs ::selection, .${e} .hljs::selection { background-color: #393552; color: #e0def4; }`,
  `.${e} .hljs-comment { color: #59546d; }`,
  `.${e} .hljs-tag { color: #817c9c; }`,
  `.${e} .hljs-operator, .${e} .hljs-punctuation, .${e} .hljs-subst { color: #e0def4; }`,
  `.${e} .hljs-operator { opacity: 0.7; }`,
  `.${e} .hljs-bullet, .${e} .hljs-deletion, .${e} .hljs-name, .${e} .hljs-selector-tag, .${e} .hljs-template-variable, .${e} .hljs-variable { color: #ecebf0; }`,
  `.${e} .hljs-attr, .${e} .hljs-link, .${e} .hljs-literal, .${e} .hljs-number, .${e} .hljs-symbol, .${e} .hljs-variable.constant_ { color: #eb6f92; }`,
  `.${e} .hljs-class .hljs-title, .${e} .hljs-title, .${e} .hljs-title.class_ { color: #f6c177; }`,
  `.${e} .hljs-strong { font-weight: 700; color: #f6c177; }`,
  `.${e} .hljs-addition, .${e} .hljs-code, .${e} .hljs-string, .${e} .hljs-title.class_.inherited__ { color: #ea9a97; }`,
  `.${e} .hljs-built_in, .${e} .hljs-doctag, .${e} .hljs-keyword.hljs-atrule, .${e} .hljs-quote, .${e} .hljs-regexp { color: #3e8fb0; }`,
  `.${e} .hljs-attribute, .${e} .hljs-function .hljs-title, .${e} .hljs-section, .${e} .hljs-title.function_, .${e} .ruby .hljs-property { color: #9ccfd8; }`,
  `.${e} .diff .hljs-meta, .${e} .hljs-keyword, .${e} .hljs-template-tag, .${e} .hljs-type { color: #c4a7e7; }`,
  `.${e} .hljs-emphasis { color: #c4a7e7; font-style: italic; }`,
  `.${e} .hljs-meta, .${e} .hljs-meta .hljs-keyword, .${e} .hljs-meta .hljs-string { color: #b9b9bc; }`,
  `.${e} .hljs-meta .hljs-keyword, .${e} .hljs-meta-keyword { font-weight: 700; }`,
];
/*!
  Theme: Gradient Dark
  Link: https://highlightjs.org/static/demo/
*/ var Ss = (e = "gradient-dark") => [
  `.${e} .hljs { background-color: transparent; color: #e7e4eb; }`,
  `.${e} .hljs-subtr { color: #e7e4eb; }`,
  `.${e} .hljs-comment, .${e} .hljs-doctag, .${e} .hljs-meta, .${e} .hljs-quote { color: #af8dd9; }`,
  `.${e} .hljs-attr, .${e} .hljs-regexp, .${e} .hljs-selector-id, .${e} .hljs-selector-tag, .${e} .hljs-tag, .${e} .hljs-template-tag { color: #aefbff; }`,
  `.${e} .hljs-bullet, .${e} .hljs-params, .${e} .hljs-selector-class { color: #f19fff; }`,
  `.${e} .hljs-keyword, .${e} .hljs-meta .${e} .hljs-keyword, .${e} .hljs-section, .${e} .hljs-symbol, .${e} .hljs-type { color: #17fc95; }`,
  `.${e} .hljs-addition, .${e} .hljs-link, .${e} .hljs-number { color: #c5fe00; }`,
  `.${e} .hljs-string { color: #38c0ff; }`,
  `.${e} .hljs-addition, .${e} .hljs-attribute { color: #e7ff9f; }`,
  `.${e} .hljs-template-variable, .${e} .hljs-variable { color: #e447ff; }`,
  `.${e} .hljs-built_in, .${e} .hljs-class, .${e} .hljs-formula, .${e} .hljs-function, .${e} .hljs-name, .${e} .hljs-title { color: #ffc800; }`,
  `.${e} .hljs-deletion, .${e} .hljs-literal, .${e} .hljs-selector-pseudo { color: #ff9e44; }`,
  `.${e} .hljs-emphasis, .${e} .hljs-quote { font-style: italic; }`,
  `.${e} .hljs-keyword, .${e} .hljs-params, .${e} .hljs-section, .${e} .hljs-selector-class, .${e} .hljs-selector-id, .${e} .hljs-selector-tag, .${e} .hljs-strong, .${e} .hljs-template-tag { font-weight: 700; }`,
];
/*! 
  Blitz Theme 
  By Benjamin den Boer
  @benjaminnathan
  2022
*/ var js = (e = "blitz") => [
  `.${e} pre code.hljs { display: block; overflow-x: auto; padding: 0; }`,
  `.${e} .hljs { background: #161820; color: #ccd; }`,
  `.${e} .hljs-subst { color: #ccd; }`,
  `.${e} .hljs-attr { color: #7dd; }`,
  `.${e} .hljs-built_in { color: #7dd; }`,
  `.${e} .hljs-property { color: #7dd; }`,
  `.${e} .hljs-code { color: #7dd; }`,
  `.${e} .hljs-section { color: #7dd; }`,
  `.${e} .hljs-doctag { color: #7dd; }`,
  `.${e} .hljs-regexp { color: #7dd; }`,
  `.${e} .hljs-selector-attr { color: #7dd; }`,
  `.${e} .hljs-selector-class { color: #7dd; }`,
  `.${e} .hljs-selector-id { color: #7dd; }`,
  `.${e} .hljs-template-tag { color: #7dd; }`,
  `.${e} .hljs-variable.language_ { color: #7dd; }`,
  `.${e} .hljs-variable { color: #7dd; }`,
  `.${e} .hljs-strong { color: #7dd; font-weight: 700; }`,
  `.${e} .hljs-selector-pseudo { color: #99f; }`,
  `.${e} .hljs-literal { color: #f89; }`,
  `.${e} .hljs-deletion { color: #f89;}`,
  `.${e} .hljs-string { color: #f89; }`,
  `.${e} .hljs-name { color: #fb6; }`,
  `.${e} .hljs-char.escape_ { color: #fb6; }`,
  `.${e} .hljs-operator { color: #fb6; }`,
  `.${e} .hljs-tag { color: #fb6; }`,
  `.${e} .hljs-function { color: #fb6; }`,
  `.${e} .hljs-attribute { color: #fb6; }`,
  `.${e} .hljs-class { color: #fb6; }`,
  `.${e} .hljs-title { color: #fb6; }`,
  `.${e} .hljs-title.class_ { color: #fb6; }`,
  `.${e} .hljs-title.class_.inherited__ { color: #fb6; }`,
  `.${e} .hljs-title.function_ { color: #fb6; }`,
  `.${e} .hljs-number { color: #f96; }`,
  `.${e} .hljs-params { color: #f96; }`,
  `.${e} .hljs-template-variable { color: #f96;}`,
  `.${e} .hljs-link { color: #f96; }`,
  `.${e} .hljs-type { color: #f96; }`,
  `.${e} .hljs-comment { color: #667; }`,
  `.${e} .hljs-meta { color: #667; }`,
  `.${e} .hljs-meta .hljs-string { color: #667; }`,
  `.${e} .hljs-meta .hljs-keyword { color: #667; }`,
  `.${e} .hljs-keyword { color: #3be; }`,
  `.${e} .hljs-emphasis { color: #3be; }`,
  `.${e} .hljs-formula { color: #3be; }`,
  `.${e} .hljs-bullet { color: #3be; }`,
  `.${e} .hljs-quote { color: #3be; }`,
  `.${e} .hljs-symbol { color: #3be; }`,
  `.${e} .hljs-addition { color: #3be; }`,
  `.${e} .hljs-selector-tag { color: #3be; }`,
];
/*!
  Theme: Synthwave for Prism
  Link: https://github.com/PrismJS/prism-themes/blob/master/themes/prism-synthwave84.css
*/ var Ms = (e = "synth-wave") => [
  `.${e} code[class*="language-"], .${e} pre[class*="language-"] { color: #f92aad; text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3; background: none; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; word-wrap: normal; line-height: 1.5;  -moz-tab-size: 4; -o-tab-size: 4; tab-size: 4;  -webkit-hyphens: none; -moz-hyphens: none; -ms-hyphens: none; hyphens: none; }`,
  `.${e} pre[class*="language-"] { padding: 1em; margin: 0.5em 0; overflow: auto; }`,
  `:not(pre) > code[class*="${e} language-"], pre[class*="${e} language-"] { background-color: transparent !important; }`,
  `.${e} :not(pre) > code[class*="language-"] { padding: 0.1em; border-radius: 0.3em; white-space: normal; }`,
  `.${e} .token.comment, .${e} .token.block-comment, .${e} .token.prolog, .${e} .token.doctype, .${e} .token.cdata { color: #8e8e8e; }`,
  `.${e} .token.punctuation { color: #ccc; }`,
  `.${e} .token.tag, .${e} .token.attr-name, .${e} .token.namespace, .${e} .token.number, .${e} .token.unit, .${e} .token.hexcode, .${e} .token.deleted { color: #e2777a; }`,
  `.${e} .token.property, .${e} .token.selector { color: #72f1b8; text-shadow: 0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475; }`,
  `.${e} .token.function-name { color: #6196cc; }`,
  `.${e} .token.boolean, .${e} .token.selector .${e} .token.id, .${e} .token.function { color: #fdfdfd; text-shadow: 0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975; }`,
  `.${e} .token.class-name { color: #fff5f6; text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75; }`,
  `.${e} .token.constant, .${e} .token.symbol { color: #f92aad; text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3; }`,
  `.${e} .token.important, .${e} .token.atrule, .${e} .token.keyword, .${e} .token.selector .token.class, .${e} .token.builtin { color: #f4eee4; text-shadow: 0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575; }`,
  `.${e} .token.string, .${e} .token.char, .${e} .token.attr-value, .${e} .token.regex, .${e} .token.variable { color: #f87c32; }`,
  `.${e} .token.operator, .token.entity, .token.url { color: #67cdcc; }`,
  `.${e} .token.important, .token.bold { font-weight: bold; }`,
  `.${e} .token.italic { font-style: italic; }`,
  `.${e} .token.entity { cursor: help; }`,
  `.${e} .token.inserted { color: green; }`,
];
/*! 
  Blitz Theme for Prism
  By Benjamin den Boer
  @benjaminnathan
  2022 
*/ var Cs = (e = "blitz") => [
  `:not(pre) > code[class*="${e} language-"], 
    pre[class*="${e} language-"] { color: #ccd;  background: #161820; }`,
  `code[class*="${e} language-"], pre[class*="${e} language-"] { color: #ccd; }`,
  `@media print { code[class*="${e} language-"], pre[class*="${e} language-"] { text-shadow: none ; } }`,
  `.${e} .token.script { color: #ccd; }`,
  `.${e} .token.literal-property.property { color: #ccd; }`,
  `.${e} .token.script > .token.literal-property.property { color: #ccd; }`,
  `.${e} .token.tag > .token.spread { color: #ccd; }`,
  `.${e} .token.punctuation { color: #ccd; }`,
  `.${e} .token.symbol { color: #7dd; }`,
  `.${e} .token.property { color: #7dd; }`,
  `.${e} .token.attr-name { color: #7dd; }`,
  `.${e} .token.inserted { color: #7dd; }`,
  `.${e} .token.regex { color: #7dd; }`,
  `.${e} .token.important { color: #7dd; }`,
  `.${e} .token.variable { color: #7dd; }`,
  `.${e} .token.parameter { color: #7dd; }`,
  `.${e} .token.deleted { color: #f89; }`,
  `.${e} .token.boolean { color: #f89; }`,
  `.${e} .token.string { color: #f89;  }`,
  `.${e} .token.url { color: #f89;  }`,
  `.${e} .token.entity { color: #f89; }`,
  `.${e} .language-css .token.string { color: #f89; }`,
  `.${e} .style .token.string { color: #f89; }`,
  `.${e} .token.interpolation-punctuation.punctuation {color: #f89; }`,
  `.${e} .namespace { color: #fb6; }`,
  `.${e} .token.operator { color: #fb6; }`,
  `.${e} .token.constant { color: #fb6; }`,
  `.${e} .token.function { color: #fb6; }`,
  `.${e} .token.builtin { color: #fb6; }`,
  `.${e} .token.char { color: #fb6; }`,
  `.${e} .token.class-name { color: #fb6; }`,
  `.${e} .token.atrule { color: #fb6; }`,
  `.${e} .token.attr-value { color: #fb6; }`,
  `.${e} .token.tag { color: #fb6; }`,
  `.${e} .token.number { color: #f96; }`,
  `.${e} .token.comment { color: #667 }`,
  `.${e} .token.prolog { color: #667 }`,
  `.${e} .token.cdata { color: #667 }`,
  `.${e} .token.doctype { color: #667; }`,
  `.${e} .token.selector { color: #3be; }`,
  `.${e} .token.keyword { color: #3be; }`,
];
/*! 
  Mini Theme 
  By Benjamin den Boer
  @benjaminnathan
  2023
*/ var Ts = (e = "mini") => [
    `.${e} pre code.hljs { display: block; overflow-x: auto; padding: 0; }`,
    `.${e} .hljs { background: #111; color: #999; }`,
    `.${e} .hljs-subst { color: #999; }`,
    `.${e} .hljs-attr { color: #ccc; }`,
    `.${e} .hljs-built_in { color: #ccc; }`,
    `.${e} .hljs-property { color: #ccc; }`,
    `.${e} .hljs-code { color: #ccc; }`,
    `.${e} .hljs-section { color: #ccc; }`,
    `.${e} .hljs-doctag { color: #ccc; }`,
    `.${e} .hljs-regexp { color: #ccc; }`,
    `.${e} .hljs-selector-attr { color: #ccc; }`,
    `.${e} .hljs-selector-class { color: #ccc; }`,
    `.${e} .hljs-selector-id { color: #ccc; }`,
    `.${e} .hljs-template-tag { color: #ccc; }`,
    `.${e} .hljs-variable.language_ { color: #ccc; }`,
    `.${e} .hljs-variable { color: #ccc; }`,
    `.${e} .hljs-strong { color: #ccc; font-weight: ccc; }`,
    `.${e} .hljs-selector-pseudo { color: #ccc; }`,
    `.${e} .hljs-literal { color: #666; }`,
    `.${e} .hljs-deletion { color: #666;}`,
    `.${e} .hljs-string { color: #666; }`,
    `.${e} .hljs-name { color: #ccc; }`,
    `.${e} .hljs-char.escape_ { color: #ccc; }`,
    `.${e} .hljs-operator { color: #ccc; }`,
    `.${e} .hljs-tag { color: #ccc; }`,
    `.${e} .hljs-function { color: #ccc; }`,
    `.${e} .hljs-attribute { color: #ccc; }`,
    `.${e} .hljs-class { color: #ccc; }`,
    `.${e} .hljs-title { color: #ccc; }`,
    `.${e} .hljs-title.class_ { color: #ccc; }`,
    `.${e} .hljs-title.class_.inherited__ { color: #ccc; }`,
    `.${e} .hljs-title.function_ { color: #ccc; }`,
    `.${e} .hljs-number { color: #999; }`,
    `.${e} .hljs-params { color: #999; }`,
    `.${e} .hljs-template-variable { color: #999;}`,
    `.${e} .hljs-link { color: #999; }`,
    `.${e} .hljs-type { color: #999; }`,
    `.${e} .hljs-comment { color: #444; }`,
    `.${e} .hljs-meta { color: #444; }`,
    `.${e} .hljs-meta .hljs-string { color: #444; }`,
    `.${e} .hljs-meta .hljs-keyword { color: #444; }`,
    `.${e} .hljs-keyword { color: #ccc; }`,
    `.${e} .hljs-emphasis { color: #ccc; }`,
    `.${e} .hljs-formula { color: #ccc; }`,
    `.${e} .hljs-bullet { color: #ccc; }`,
    `.${e} .hljs-quote { color: #ccc; }`,
    `.${e} .hljs-symbol { color: #ccc; }`,
    `.${e} .hljs-addition { color: #ccc; }`,
    `.${e} .hljs-selector-tag { color: #ccc; }`,
  ],
  Rs = [
    ...Es(),
    ...ks(),
    ...Ns(),
    ...Os(),
    ...As(),
    ...$s(),
    ...Ss(),
    ...js(),
    ...Cs(),
    ...Ms(),
    ...Ts(),
  ],
  ha = Rs;
var oe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : T,
  at = {},
  xs =
    typeof M < "u"
      ? M
      : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope
        ? self
        : {};
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */ var O = (function (e) {
  var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
    n = 0,
    o = {},
    a = {
      manual: e.Prism && e.Prism.manual,
      disableWorkerMessageHandler:
        e.Prism && e.Prism.disableWorkerMessageHandler,
      util: {
        encode: function l(i) {
          return i instanceof u
            ? new u(i.type, l(i.content), i.alias)
            : Array.isArray(i)
              ? i.map(l)
              : i
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/\u00a0/g, " ");
        },
        type: function (l) {
          return Object.prototype.toString.call(l).slice(8, -1);
        },
        objId: function (l) {
          return (
            l.__id || Object.defineProperty(l, "__id", { value: ++n }), l.__id
          );
        },
        clone: function l(i, b) {
          b = b || {};
          var h, g;
          switch (a.util.type(i)) {
            case "Object":
              if (((g = a.util.objId(i)), b[g])) return b[g];
              (h = {}), (b[g] = h);
              for (var v in i) i.hasOwnProperty(v) && (h[v] = l(i[v], b));
              return h;
            case "Array":
              return (
                (g = a.util.objId(i)),
                b[g]
                  ? b[g]
                  : ((h = []),
                    (b[g] = h),
                    i.forEach(function ($, E) {
                      h[E] = l($, b);
                    }),
                    h)
              );
            default:
              return i;
          }
        },
        getLanguage: function (l) {
          for (; l; ) {
            var i = t.exec(l.className);
            if (i) return i[1].toLowerCase();
            l = l.parentElement;
          }
          return "none";
        },
        setLanguage: function (l, i) {
          (l.className = l.className.replace(RegExp(t, "gi"), "")),
            l.classList.add("language-" + i);
        },
        currentScript: function () {
          if (typeof document > "u") return null;
          if ("currentScript" in document && 1 < 2)
            return document.currentScript;
          try {
            throw new Error();
          } catch (h) {
            var l = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(h.stack) ||
              [])[1];
            if (l) {
              var i = document.getElementsByTagName("script");
              for (var b in i) if (i[b].src == l) return i[b];
            }
            return null;
          }
        },
        isActive: function (l, i, b) {
          for (var h = "no-" + i; l; ) {
            var g = l.classList;
            if (g.contains(i)) return !0;
            if (g.contains(h)) return !1;
            l = l.parentElement;
          }
          return !!b;
        },
      },
      languages: {
        plain: o,
        plaintext: o,
        text: o,
        txt: o,
        extend: function (l, i) {
          var b = a.util.clone(a.languages[l]);
          for (var h in i) b[h] = i[h];
          return b;
        },
        insertBefore: function (l, i, b, h) {
          h = h || a.languages;
          var g = h[l],
            v = {};
          for (var $ in g)
            if (g.hasOwnProperty($)) {
              if ($ == i) for (var E in b) b.hasOwnProperty(E) && (v[E] = b[E]);
              b.hasOwnProperty($) || (v[$] = g[$]);
            }
          var C = h[l];
          return (
            (h[l] = v),
            a.languages.DFS(a.languages, function (B, F) {
              F === C && B != l && ((this || oe)[B] = v);
            }),
            v
          );
        },
        DFS: function l(i, b, h, g) {
          g = g || {};
          var v = a.util.objId;
          for (var $ in i)
            if (i.hasOwnProperty($)) {
              b.call(i, $, i[$], h || $);
              var E = i[$],
                C = a.util.type(E);
              C !== "Object" || g[v(E)]
                ? C === "Array" && !g[v(E)] && ((g[v(E)] = !0), l(E, b, $, g))
                : ((g[v(E)] = !0), l(E, b, null, g));
            }
        },
      },
      plugins: {},
      highlightAll: function (l, i) {
        a.highlightAllUnder(document, l, i);
      },
      highlightAllUnder: function (l, i, b) {
        var h = {
          callback: b,
          container: l,
          selector:
            'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
        };
        a.hooks.run("before-highlightall", h),
          (h.elements = Array.prototype.slice.apply(
            h.container.querySelectorAll(h.selector),
          )),
          a.hooks.run("before-all-elements-highlight", h);
        for (var g, v = 0; (g = h.elements[v++]); )
          a.highlightElement(g, i === !0, h.callback);
      },
      highlightElement: function (l, i, b) {
        var h = a.util.getLanguage(l),
          g = a.languages[h];
        a.util.setLanguage(l, h);
        var v = l.parentElement;
        v && v.nodeName.toLowerCase() === "pre" && a.util.setLanguage(v, h);
        var $ = l.textContent,
          E = { element: l, language: h, grammar: g, code: $ };
        function C(F) {
          (E.highlightedCode = F),
            a.hooks.run("before-insert", E),
            (E.element.innerHTML = E.highlightedCode),
            a.hooks.run("after-highlight", E),
            a.hooks.run("complete", E),
            b && b.call(E.element);
        }
        if (
          (a.hooks.run("before-sanity-check", E),
          (v = E.element.parentElement),
          v &&
            v.nodeName.toLowerCase() === "pre" &&
            !v.hasAttribute("tabindex") &&
            v.setAttribute("tabindex", "0"),
          E.code)
        )
          if ((a.hooks.run("before-highlight", E), E.grammar))
            if (i && e.Worker) {
              var B = new Worker(a.filename);
              (B.onmessage = function (F) {
                C(F.data);
              }),
                B.postMessage(
                  JSON.stringify({
                    language: E.language,
                    code: E.code,
                    immediateClose: !0,
                  }),
                );
            } else C(a.highlight(E.code, E.grammar, E.language));
          else C(a.util.encode(E.code));
        else a.hooks.run("complete", E), b && b.call(E.element);
      },
      highlight: function (l, i, b) {
        var h = { code: l, grammar: i, language: b };
        if ((a.hooks.run("before-tokenize", h), !h.grammar))
          throw new Error('The language "' + h.language + '" has no grammar.');
        return (
          (h.tokens = a.tokenize(h.code, h.grammar)),
          a.hooks.run("after-tokenize", h),
          u.stringify(a.util.encode(h.tokens), h.language)
        );
      },
      tokenize: function (l, i) {
        var b = i.rest;
        if (b) {
          for (var h in b) i[h] = b[h];
          delete i.rest;
        }
        var g = new r();
        return d(g, g.head, l), s(l, g, i, g.head, 0), y(g);
      },
      hooks: {
        all: {},
        add: function (l, i) {
          var b = a.hooks.all;
          (b[l] = b[l] || []), b[l].push(i);
        },
        run: function (l, i) {
          var b = a.hooks.all[l];
          if (b && b.length) for (var h, g = 0; (h = b[g++]); ) h(i);
        },
      },
      Token: u,
    };
  e.Prism = a;
  function u(l, i, b, h) {
    ((this || oe).type = l),
      ((this || oe).content = i),
      ((this || oe).alias = b),
      ((this || oe).length = 0 | (h || "").length);
  }
  u.stringify = function l(i, b) {
    if (typeof i == "string") return i;
    if (Array.isArray(i)) {
      var h = "";
      return (
        i.forEach(function (C) {
          h += l(C, b);
        }),
        h
      );
    }
    var g = {
        type: i.type,
        content: l(i.content, b),
        tag: "span",
        classes: ["token", i.type],
        attributes: {},
        language: b,
      },
      v = i.alias;
    v &&
      (Array.isArray(v)
        ? Array.prototype.push.apply(g.classes, v)
        : g.classes.push(v)),
      a.hooks.run("wrap", g);
    var $ = "";
    for (var E in g.attributes)
      $ +=
        " " + E + '="' + (g.attributes[E] || "").replace(/"/g, "&quot;") + '"';
    return (
      "<" +
      g.tag +
      ' class="' +
      g.classes.join(" ") +
      '"' +
      $ +
      ">" +
      g.content +
      "</" +
      g.tag +
      ">"
    );
  };
  function c(l, i, b, h) {
    l.lastIndex = i;
    var g = l.exec(b);
    if (g && h && g[1]) {
      var v = g[1].length;
      (g.index += v), (g[0] = g[0].slice(v));
    }
    return g;
  }
  function s(l, i, b, h, g, v) {
    for (var $ in b)
      if (b.hasOwnProperty($) && b[$]) {
        var E = b[$];
        E = Array.isArray(E) ? E : [E];
        for (var C = 0; C < E.length; ++C) {
          if (v && v.cause == $ + "," + C) return;
          var B = E[C],
            F = B.inside,
            J = !!B.lookbehind,
            te = !!B.greedy,
            ne = B.alias;
          if (te && !B.pattern.global) {
            var Q = B.pattern.toString().match(/[imsuy]*$/)[0];
            B.pattern = RegExp(B.pattern.source, Q + "g");
          }
          for (
            var W = B.pattern || B, U = h.next, p = g;
            U !== i.tail && !(v && p >= v.reach);
            p += U.value.length, U = U.next
          ) {
            var w = U.value;
            if (i.length > l.length) return;
            if (!(w instanceof u)) {
              var A = 1,
                j;
              if (te) {
                if (((j = c(W, p, l, J)), !j || j.index >= l.length)) break;
                var L = j.index,
                  q = j.index + j[0].length,
                  Z = p;
                for (Z += U.value.length; L >= Z; )
                  (U = U.next), (Z += U.value.length);
                if (((Z -= U.value.length), (p = Z), U.value instanceof u))
                  continue;
                for (
                  var ae = U;
                  ae !== i.tail && (Z < q || typeof ae.value == "string");
                  ae = ae.next
                )
                  A++, (Z += ae.value.length);
                A--, (w = l.slice(p, Z)), (j.index -= p);
              } else if (((j = c(W, 0, w, J)), !j)) continue;
              L = j.index;
              var G = j[0],
                Y = w.slice(0, L),
                me = w.slice(L + G.length),
                ce = p + w.length;
              v && ce > v.reach && (v.reach = ce);
              var de = U.prev;
              Y && ((de = d(i, de, Y)), (p += Y.length)), m(i, de, A);
              var P = new u($, F ? a.tokenize(G, F) : G, ne, G);
              if (((U = d(i, de, P)), me && d(i, U, me), A > 1)) {
                var ue = { cause: $ + "," + C, reach: ce };
                s(l, i, b, U.prev, p, ue),
                  v && ue.reach > v.reach && (v.reach = ue.reach);
              }
            }
          }
        }
      }
  }
  function r() {
    var l = { value: null, prev: null, next: null },
      i = { value: null, prev: l, next: null };
    (l.next = i),
      ((this || oe).head = l),
      ((this || oe).tail = i),
      ((this || oe).length = 0);
  }
  function d(l, i, b) {
    var h = i.next,
      g = { value: b, prev: i, next: h };
    return (i.next = g), (h.prev = g), l.length++, g;
  }
  function m(l, i, b) {
    for (var h = i.next, g = 0; g < b && h !== l.tail; g++) h = h.next;
    (i.next = h), (h.prev = i), (l.length -= g);
  }
  function y(l) {
    for (var i = [], b = l.head.next; b !== l.tail; )
      i.push(b.value), (b = b.next);
    return i;
  }
  if (!e.document)
    return (
      e.addEventListener &&
        (a.disableWorkerMessageHandler ||
          e.addEventListener(
            "message",
            function (l) {
              var i = JSON.parse(l.data),
                b = i.language,
                h = i.code,
                g = i.immediateClose;
              e.postMessage(a.highlight(h, a.languages[b], b)), g && e.close();
            },
            !1,
          )),
      a
    );
  var f = a.util.currentScript();
  f && ((a.filename = f.src), f.hasAttribute("data-manual") && (a.manual = !0));
  function _() {
    a.manual || a.highlightAll();
  }
  if (!a.manual) {
    var N = document.readyState;
    N === "loading" || (N === "interactive" && f && f.defer)
      ? document.addEventListener("DOMContentLoaded", _)
      : M.requestAnimationFrame
        ? M.requestAnimationFrame(_)
        : M.setTimeout(_, 16);
  }
  return a;
})(xs);
at && (at = O);
typeof oe < "u" && (oe.Prism = O);
O.languages.markup = {
  comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
  prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
  doctype: {
    pattern:
      /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/,
    },
  },
  cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
  tag: {
    pattern:
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            { pattern: /^=/, alias: "attr-equals" },
            { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
          ],
        },
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: { namespace: /^[^\s>\/:]+:/ },
      },
    },
  },
  entity: [
    { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
    /&#x?[\da-f]{1,8};/i,
  ],
};
O.languages.markup.tag.inside["attr-value"].inside.entity =
  O.languages.markup.entity;
O.languages.markup.doctype.inside["internal-subset"].inside =
  O.languages.markup;
O.hooks.add("wrap", function (e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
});
Object.defineProperty(O.languages.markup.tag, "addInlined", {
  value: function (t, n) {
    var o = {};
    (o["language-" + n] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: O.languages[n],
    }),
      (o.cdata = /^<!\[CDATA\[|\]\]>$/i);
    var a = {
      "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: o },
    };
    a["language-" + n] = { pattern: /[\s\S]+/, inside: O.languages[n] };
    var u = {};
    (u[t] = {
      pattern: RegExp(
        /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
          /__/g,
          function () {
            return t;
          },
        ),
        "i",
      ),
      lookbehind: !0,
      greedy: !0,
      inside: a,
    }),
      O.languages.insertBefore("markup", "cdata", u);
  },
});
Object.defineProperty(O.languages.markup.tag, "addAttribute", {
  value: function (e, t) {
    O.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source +
          "(?:" +
          e +
          ")" +
          /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i",
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [t, "language-" + t],
              inside: O.languages[t],
            },
            punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
          },
        },
      },
    });
  },
});
O.languages.html = O.languages.markup;
O.languages.mathml = O.languages.markup;
O.languages.svg = O.languages.markup;
O.languages.xml = O.languages.extend("markup", {});
O.languages.ssml = O.languages.xml;
O.languages.atom = O.languages.xml;
O.languages.rss = O.languages.xml;
(function (e) {
  var t =
    /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  (e.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp(
        "@[\\w-](?:" +
          /[^;{\s"']|\s+(?!\s)/.source +
          "|" +
          t.source +
          ")*?" +
          /(?:;|(?=\s*\{))/.source,
      ),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern:
            /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector",
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0,
        },
      },
    },
    url: {
      pattern: RegExp(
        "\\burl\\((?:" +
          t.source +
          "|" +
          /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
          ")\\)",
        "i",
      ),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
      },
    },
    selector: {
      pattern: RegExp(
        `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
          t.source +
          ")*(?=\\s*\\{)",
      ),
      lookbehind: !0,
    },
    string: { pattern: t, greedy: !0 },
    property: {
      pattern:
        /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0,
    },
    important: /!important\b/i,
    function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
    punctuation: /[(){};:,]/,
  }),
    (e.languages.css.atrule.inside.rest = e.languages.css);
  var n = e.languages.markup;
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
})(O);
O.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/,
};
O.languages.javascript = O.languages.extend("clike", {
  "class-name": [
    O.languages.clike["class-name"],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  function:
    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source +
        "(?:" +
        /NaN|Infinity/.source +
        "|" +
        /0[bB][01]+(?:_[01]+)*n?/.source +
        "|" +
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
        "|" +
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
        "|" +
        /\d+(?:_\d+)*n/.source +
        "|" +
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
          .source +
        ")" +
        /(?![\w$])/.source,
    ),
    lookbehind: !0,
  },
  operator:
    /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
});
O.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
O.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
        /\//.source +
        "(?:" +
        /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
          .source +
        "|" +
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
          .source +
        ")" +
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
          .source,
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: O.languages.regex,
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/,
    },
  },
  "function-variable": {
    pattern:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function",
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: O.languages.javascript,
    },
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: O.languages.javascript,
    },
    {
      pattern:
        /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: O.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: O.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
O.languages.insertBefore("javascript", "string", {
  hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
  "template-string": {
    pattern:
      /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": { pattern: /^`|`$/, alias: "string" },
      interpolation: {
        pattern:
          /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation",
          },
          rest: O.languages.javascript,
        },
      },
      string: /[\s\S]+/,
    },
  },
  "string-property": {
    pattern:
      /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
  },
});
O.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern:
      /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property",
  },
});
O.languages.markup &&
  (O.languages.markup.tag.addInlined("script", "javascript"),
  O.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
      .source,
    "javascript",
  ));
O.languages.js = O.languages.javascript;
(function () {
  if (typeof O < "u" && typeof document < "u") {
    Element.prototype.matches ||
      (Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector);
    var e = "Loading\u2026",
      t = function (f, _) {
        return "\u2716 Error " + f + " while fetching file: " + _;
      },
      n = "\u2716 Error: File does not exist or is empty",
      o = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex",
      },
      a = "data-src-status",
      u = "loading",
      c = "loaded",
      s = "failed",
      r =
        "pre[data-src]:not([" +
        a +
        '="' +
        c +
        '"]):not([' +
        a +
        '="' +
        u +
        '"])';
    O.hooks.add("before-highlightall", function (f) {
      f.selector += ", " + r;
    }),
      O.hooks.add("before-sanity-check", function (f) {
        var _ = f.element;
        if (_.matches(r)) {
          (f.code = ""), _.setAttribute(a, u);
          var N = _.appendChild(document.createElement("CODE"));
          N.textContent = e;
          var l = _.getAttribute("data-src"),
            i = f.language;
          if (i === "none") {
            var b = (/\.(\w+)$/.exec(l) || [, "none"])[1];
            i = o[b] || b;
          }
          O.util.setLanguage(N, i), O.util.setLanguage(_, i);
          var h = O.plugins.autoloader;
          h && h.loadLanguages(i),
            m(
              l,
              function (g) {
                _.setAttribute(a, c);
                var v = y(_.getAttribute("data-range"));
                if (v) {
                  var $ = g.split(/\r\n?|\n/g),
                    E = v[0],
                    C = v[1] == null ? $.length : v[1];
                  E < 0 && (E += $.length),
                    (E = Math.max(0, Math.min(E - 1, $.length))),
                    C < 0 && (C += $.length),
                    (C = Math.max(0, Math.min(C, $.length))),
                    (g = $.slice(E, C).join(`
`)),
                    _.hasAttribute("data-start") ||
                      _.setAttribute("data-start", String(E + 1));
                }
                (N.textContent = g), O.highlightElement(N);
              },
              function (g) {
                _.setAttribute(a, s), (N.textContent = g);
              },
            );
        }
      }),
      (O.plugins.fileHighlight = {
        highlight: function (_) {
          for (
            var N = (_ || document).querySelectorAll(r), l, i = 0;
            (l = N[i++]);

          )
            O.highlightElement(l);
        },
      });
    var d = !1;
    O.fileHighlight = function () {
      d ||
        (console.warn(
          "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.",
        ),
        (d = !0)),
        O.plugins.fileHighlight.highlight.apply(this || oe, arguments);
    };
  }
  function m(f, _, N) {
    var l = new XMLHttpRequest();
    l.open("GET", f, !0),
      (l.onreadystatechange = function () {
        l.readyState == 4 &&
          (l.status < 400 && l.responseText
            ? _(l.responseText)
            : l.status >= 400
              ? N(t(l.status, l.statusText))
              : N(n));
      }),
      l.send(null);
  }
  function y(f) {
    var _ = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f || "");
    if (_) {
      var N = Number(_[1]),
        l = _[2],
        i = _[3];
      return l ? (i ? [N, Number(i)] : [N, void 0]) : [N, N];
    }
  }
})();
var ot = at;
(function (e) {
  var t = e.util.clone(e.languages.javascript),
    n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
    o = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
    a = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function u(r, d) {
    return (
      (r = r
        .replace(/<S>/g, function () {
          return n;
        })
        .replace(/<BRACES>/g, function () {
          return o;
        })
        .replace(/<SPREAD>/g, function () {
          return a;
        })),
      RegExp(r, d)
    );
  }
  (a = u(a).source),
    (e.languages.jsx = e.languages.extend("markup", t)),
    (e.languages.jsx.tag.pattern = u(
      /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
        .source,
    )),
    (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
    (e.languages.jsx.tag.inside["attr-value"].pattern =
      /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
    (e.languages.jsx.tag.inside.tag.inside["class-name"] =
      /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
    (e.languages.jsx.tag.inside.comment = t.comment),
    e.languages.insertBefore(
      "inside",
      "attr-name",
      { spread: { pattern: u(/<SPREAD>/.source), inside: e.languages.jsx } },
      e.languages.jsx.tag,
    ),
    e.languages.insertBefore(
      "inside",
      "special-attr",
      {
        script: {
          pattern: u(/=<BRACES>/.source),
          alias: "language-javascript",
          inside: {
            "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" },
            rest: e.languages.jsx,
          },
        },
      },
      e.languages.jsx.tag,
    );
  var c = function (r) {
      return r
        ? typeof r == "string"
          ? r
          : typeof r.content == "string"
            ? r.content
            : r.content.map(c).join("")
        : "";
    },
    s = function (r) {
      for (var d = [], m = 0; m < r.length; m++) {
        var y = r[m],
          f = !1;
        if (
          (typeof y != "string" &&
            (y.type === "tag" && y.content[0] && y.content[0].type === "tag"
              ? y.content[0].content[0].content === "</"
                ? d.length > 0 &&
                  d[d.length - 1].tagName === c(y.content[0].content[1]) &&
                  d.pop()
                : y.content[y.content.length - 1].content === "/>" ||
                  d.push({
                    tagName: c(y.content[0].content[1]),
                    openedBraces: 0,
                  })
              : d.length > 0 && y.type === "punctuation" && y.content === "{"
                ? d[d.length - 1].openedBraces++
                : d.length > 0 &&
                    d[d.length - 1].openedBraces > 0 &&
                    y.type === "punctuation" &&
                    y.content === "}"
                  ? d[d.length - 1].openedBraces--
                  : (f = !0)),
          (f || typeof y == "string") &&
            d.length > 0 &&
            d[d.length - 1].openedBraces === 0)
        ) {
          var _ = c(y);
          m < r.length - 1 &&
            (typeof r[m + 1] == "string" || r[m + 1].type === "plain-text") &&
            ((_ += c(r[m + 1])), r.splice(m + 1, 1)),
            m > 0 &&
              (typeof r[m - 1] == "string" || r[m - 1].type === "plain-text") &&
              ((_ = c(r[m - 1]) + _), r.splice(m - 1, 1), m--),
            (r[m] = new e.Token("plain-text", _, null, _));
        }
        y.content && typeof y.content != "string" && s(y.content);
      }
    };
  e.hooks.add("after-tokenize", function (r) {
    (r.language !== "jsx" && r.language !== "tsx") || s(r.tokens);
  });
})(Prism);
(function (e) {
  var t = e.util.clone(e.languages.typescript);
  (e.languages.tsx = e.languages.extend("jsx", t)),
    delete e.languages.tsx.parameter,
    delete e.languages.tsx["literal-property"];
  var n = e.languages.tsx.tag;
  (n.pattern = RegExp(
    /(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")",
    n.pattern.flags,
  )),
    (n.lookbehind = !0);
})(Prism);
var se = lt(Ds, ha),
  ql = se;
function Ds({
  codeString: e,
  fontSize: t,
  fontFamily: n,
  lineHeight: o,
  radius: a,
  padding: u,
  themeName: c,
  prismThemeName: s,
  languageName: r,
}) {
  let d = r === "jsx" || r === "tsx",
    f = {
      width: "100%",
      height: "100%",
      background: d
        ? {
            blitz: "#161820",
            "night-owl": "#011627",
            "synth-wave": "linear-gradient(to bottom, #2a2139 75%, #34294f);",
          }[s]
        : {
            blitz: "#161820",
            mini: "#111",
            github: "#fff",
            "github-dark": "#0d1117",
            "gradient-dark":
              "linear-gradient(160deg, #652487 0, #443ac3 35%, #0174b7 68%, #04988e 100%)",
            "night-owl": "#011627",
            "rose-pine-moon": "#232136",
            "tokyo-night-dark": "#1a1b26",
          }[c],
      borderRadius: a,
      overflow: "hidden",
    },
    _ = {
      margin: 0,
      padding: u,
      overflowX: "auto",
      display: "block",
      lineHeight: o,
      fontVariantLigatures: "none",
      fontFamily: n ? `${n}, Menlo, monospace` : "Menlo, monospace",
      fontSize: t,
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      wordWrap: "normal",
      borderRadius: a,
    },
    N = r === "auto" ? Oe.highlightAuto(e) : Oe.highlight(e, { language: r });
  if (d) {
    let l = ot.highlight(e, ot.languages[r], r);
    return pe("div", {
      style: f,
      children: pe("pre", {
        style: { margin: 0, borderRadius: a },
        className: `${s} language-${r}`,
        children: pe("code", {
          className: `language-${r}`,
          style: _,
          dangerouslySetInnerHTML: { __html: l },
        }),
      }),
    });
  }
  return pe("div", {
    style: f,
    children: pe("pre", {
      style: { margin: 0 },
      className: c,
      children: pe("code", {
        className: "hljs",
        style: _,
        dangerouslySetInnerHTML: { __html: N.value },
      }),
    }),
  });
}
se.defaultProps = {
  width: 600,
  codeString: `@font-face {
  font-family: Inter; src: url("Inter.woff2");
}

body, .usertext {
  color: #fff; 
  background: #000;
  font-family: Inter, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}
`,
  fontSize: 15,
  lineHeight: 1.5,
  padding: 30,
  radius: 30,
  themeName: "blitz",
  prismThemeName: "blitz",
  languageName: "auto",
};
it(se, {
  themeName: {
    type: re.Enum,
    title: "Theme",
    defaultValue: se.defaultProps.themeName,
    hidden: (e) => e.languageName === "jsx",
    options: [
      "blitz",
      "github",
      "github-dark",
      "gradient-dark",
      "night-owl",
      "rose-pine-moon",
      "tokyo-night-dark",
      "mini",
    ],
    optionTitles: [
      "Blitz",
      "GitHub",
      "GitHub Dark",
      "Gradient Dark",
      "Night Owl",
      "Rose Pine Moon",
      "Tokyo Night",
      "Minimal",
    ],
  },
  prismThemeName: {
    type: re.Enum,
    title: "Theme",
    defaultValue: se.defaultProps.prismThemeName,
    hidden: (e) => e.languageName !== "jsx",
    options: ["blitz", "night-owl", "synth-wave"],
    optionTitles: ["Blitz", "Night Owl", "Synthwave"],
  },
  languageName: {
    type: re.Enum,
    title: "Language",
    defaultValue: se.defaultProps.languageName,
    options: [
      "auto",
      "c",
      "css",
      "go",
      "html",
      "java",
      "javascript",
      "json",
      "jsx",
      "markdown",
      "objectivec",
      "php",
      "python",
      "r",
      "rust",
      "scss",
      "swift",
      "sql",
      "tsx",
      "typescript",
    ],
    optionTitles: [
      "Auto",
      "C",
      "CSS",
      "Go",
      "HTML",
      "Java",
      "JavaScript",
      "JSON",
      "JSX",
      "Markdown",
      "Objective C",
      "PHP",
      "Python",
      "R",
      "Rust",
      "SCSS",
      "Swift",
      "SQL",
      "TSX",
      "TypeScript",
    ],
  },
  codeString: {
    type: re.String,
    defaultValue: se.defaultProps.codeString,
    title: "Code",
    placeholder: "Paste your code\u2026",
    displayTextArea: !0,
  },
  fontSize: {
    type: re.Number,
    title: "Font Size",
    min: 0,
    max: 100,
    defaultValue: se.defaultProps.fontSize,
    displayStepper: !0,
  },
  fontFamily: { type: re.String, title: "Typeface", placeholder: "Menlo" },
  lineHeight: {
    type: re.Number,
    title: "Line",
    min: 0,
    max: 100,
    defaultValue: se.defaultProps.lineHeight,
    step: 0.1,
    displayStepper: !0,
  },
  padding: {
    type: re.Number,
    title: "Padding",
    min: 0,
    max: 500,
    defaultValue: se.defaultProps.padding,
    displayStepper: !0,
  },
  radius: {
    type: re.Number,
    title: "Radius",
    min: 0,
    max: 100,
    defaultValue: se.defaultProps.radius,
  },
});
var Zl = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Syntax",
      slots: [],
      annotations: {
        framerDisableUnlink: "*",
        framerContractVersion: "1",
        framerSupportedLayoutWidth: "any-prefer-fixed",
        framerSupportedLayoutHeight: "any",
        framerIntrinsicWidth: "600",
        framerIntrinsicHeight: "300",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Zl as __FramerMetadata__, ql as default };
//# sourceMappingURL=Syntax-CFQK3EPW.mjs.map
