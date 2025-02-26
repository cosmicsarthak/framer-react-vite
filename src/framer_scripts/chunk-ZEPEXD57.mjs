import {
  $a as Ir,
  A as l,
  B as Ue,
  C as B,
  Da as Ye,
  E as xe,
  Ea as lo,
  G as ve,
  H as Ze,
  I as He,
  La as sa,
  N as tt,
  Pa as ne,
  Sa as fo,
  Ua as Ge,
  Xa as G,
  Ya as Ve,
  _ as O,
  _a as ue,
  a as Oe,
  ab as co,
  b as ao,
  bb as rt,
  c as F,
  cb as $,
  d as oo,
  da as na,
  ea as pt,
  eb as ee,
  g as N,
  ga as x,
  hb as z,
  ib as Y,
  j as et,
  ja as M,
  jb as se,
  k as P,
  ka as no,
  l as re,
  la as io,
  m as A,
  ma as E,
  na as so,
  oa as ia,
  p as j,
  pa as Ee,
  q as T,
  r as ae,
  ra as J,
  sa as Q,
  t as qe,
  u as r,
  v as I,
  wa as q,
  ya as Qe,
  z as S,
} from "./chunk-NAESFJNX.mjs";
import { a as Ce, b as V, c as R } from "./chunk-Y5FTINFI.mjs";
function ze(e) {
  let t = so({ state: Object.freeze({ ...e }) }),
    o = (f) => {
      typeof f == "function" && (f = f(t.state)),
        (t.state = Object.freeze({ ...t.state, ...f }));
    },
    a = typeof e == "object" ? Object.freeze({ ...e }) : e,
    n = new Set(),
    s = (f) => {
      typeof f == "function" && (f = f(a)),
        (a = typeof f == "object" ? Object.freeze({ ...a, ...f }) : f),
        n.forEach((c) => c(a));
    };
  function i() {
    let [f, c] = ae(a);
    return (
      re(() => (n.add(c), () => n.delete(c)), []),
      ia() === !0 ? (ia(), [t.state, o]) : [f, s]
    );
  }
  return i;
}
function En(e, t = "0px", o = 0) {
  let [a, n] = ae(!1),
    s = et((i) => {
      let [f] = i;
      n(f.isIntersecting);
    }, []);
  return (
    re(() => {
      let i = { root: null, rootMargin: t, threshold: o },
        f = new IntersectionObserver(s, i),
        c = e.current;
      return (
        c && f.observe(c),
        () => {
          c && f.unobserve(c);
        }
      );
    }, [e, t, o, s]),
    a
  );
}
function je() {
  let [e, t] = ae({ viewW: void 0, viewH: void 0 });
  return (
    re(() => {
      function o() {
        let { innerWidth: n, innerHeight: s } = R;
        return { viewW: n, viewH: s };
      }
      function a() {
        t(o());
      }
      return (
        a(),
        R.addEventListener("resize", a),
        () => R.removeEventListener("resize", a)
      );
    }, []),
    e
  );
}
function fe(e) {
  let [t, o] = ae(!1);
  return (
    re(() => {
      if (typeof R < "u") {
        let a = R.matchMedia(e);
        a.matches !== t && o(a.matches);
        let n = (s) => {
          o(s.matches);
        };
        return (
          a.addEventListener("change", n),
          () => {
            a.removeEventListener("change", n);
          }
        );
      }
    }, [e]),
    t
  );
}
function Vr() {
  return (
    (Vr =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = arguments[t];
          for (var a in o)
            Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
        }
        return e;
      }),
    Vr.apply(this, arguments)
  );
}
function jn(e, t) {
  if (e == null) return {};
  var o = {},
    a = Object.keys(e),
    n,
    s;
  for (s = 0; s < a.length; s++) (n = a[s]), t.indexOf(n) >= 0 || (o[n] = e[n]);
  return o;
}
function Mn(e) {
  re(e, []);
}
function Nn(e, t) {
  t === void 0 && (t = {});
  var o = t,
    a = o.volume,
    n = a === void 0 ? 1 : a,
    s = o.playbackRate,
    i = s === void 0 ? 1 : s,
    f = o.soundEnabled,
    c = f === void 0 || f,
    m = o.interrupt,
    p = m !== void 0 && m,
    d = o.onload,
    y = jn(o, [
      "id",
      "volume",
      "playbackRate",
      "soundEnabled",
      "interrupt",
      "onload",
    ]),
    b = Oe.useRef(null),
    h = Oe.useRef(!1),
    w = Oe.useState(null),
    u = w[0],
    k = w[1],
    g = Oe.useState(null),
    v = g[0],
    C = g[1],
    L = function () {
      typeof d == "function" && d.call(this),
        h.current && k(1e3 * this.duration()),
        C(this);
    };
  Mn(function () {
    return (
      import("./howler-NHZYV4YJ.mjs").then(function (H) {
        if (!h.current) {
          var K;
          (b.current =
            (K = H.Howl) !== null && K !== void 0 ? K : H.default.Howl),
            (h.current = !0),
            new b.current(
              Vr(
                {
                  src: Array.isArray(e) ? e : [e],
                  volume: n,
                  rate: i,
                  onload: L,
                },
                y,
              ),
            );
        }
      }),
      function () {
        h.current = !1;
      }
    );
  }),
    Oe.useEffect(
      function () {
        b.current &&
          v &&
          C(
            new b.current(
              Vr({ src: Array.isArray(e) ? e : [e], volume: n, onload: L }, y),
            ),
          );
      },
      [JSON.stringify(e)],
    ),
    Oe.useEffect(
      function () {
        v && (v.volume(n), v.rate(i));
      },
      [n, i],
    );
  var D = Oe.useCallback(
      function (H) {
        typeof H > "u" && (H = {}),
          v &&
            (c || H.forceSoundEnabled) &&
            (p && v.stop(),
            H.playbackRate && v.rate(H.playbackRate),
            v.play(H.id));
      },
      [v, c, p],
    ),
    _ = Oe.useCallback(
      function (H) {
        v && v.stop(H);
      },
      [v],
    ),
    Z = Oe.useCallback(
      function (H) {
        v && v.pause(H);
      },
      [v],
    ),
    X = [D, { sound: v, stop: _, pause: Z, duration: u }];
  return X;
}
var ie = Nn;
var he = ze({
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
});
function Tt(e) {
  let {
      about: t,
      click1: o,
      click2: a,
      click3: n,
      click4: s,
      hover1: i,
      lock: f,
      unlock: c,
      popup: m,
      swoosh: p,
      slide: d,
      soundon: y,
    } = e,
    [b, h] = he(),
    [w, u] = he();
  return r(l.div, {
    style: { width: 16, height: 16, borderRadius: 16, background: "purple" },
  });
}
M(Tt, {
  about: { type: x.File, allowedFileTypes: ["mp3"] },
  click1: { type: x.File, allowedFileTypes: ["mp3"] },
  click2: { type: x.File, allowedFileTypes: ["mp3"] },
  click3: { type: x.File, allowedFileTypes: ["mp3"] },
  click4: { type: x.File, allowedFileTypes: ["mp3"] },
  hover1: { type: x.File, allowedFileTypes: ["mp3"] },
  lock: { type: x.File, allowedFileTypes: ["mp3"] },
  unlock: { type: x.File, allowedFileTypes: ["mp3"] },
  popup: { type: x.File, allowedFileTypes: ["mp3"] },
  swoosh: { type: x.File, allowedFileTypes: ["mp3"] },
  slide: { type: x.File, allowedFileTypes: ["mp3"] },
  soundon: { type: x.File, allowedFileTypes: ["mp3"] },
});
var Bn = () => (typeof R < "u" ? R.location.pathname : "/"),
  qn = () => {
    let e = Bn();
    return e.includes("blog") ? 2 : e === "/about" ? 1 : 0;
  },
  W = ze({
    transition: qn(),
    language: 0,
    layout: !0,
    sound: !1,
    darkmode: !1,
    auto_theme: !0,
    setting: !1,
    wheel: !1,
    wheel_tooltip: !0,
    docker: !1,
    type: "ALL",
    side_nav: !1,
    wheelOffset: 0,
    layoutOffset: 0,
    layoutWidth: 0,
    scroll_current: 0,
    scroll_to: 0,
    trigger_scroll_to: null,
    hero_width: 0,
    zoom: !1,
    index: 0,
    index_cache: 0,
    length: 0,
    update_length: !1,
    deck_width: 0,
    about_layoutOffset: 0,
    about_layoutWidth: 0,
    about_scroll_progress1: null,
    about_scroll_progress2: 0,
    about_app_overlayer: !1,
    about_zoom: !1,
    noticeboard: !1,
    process: !1,
  }),
  Ne = { type: "spring", stiffness: 170, damping: 28 };
var Pe = {
    monitor: "(max-width: 1560px)",
    desktop: "(max-width: 1400px)",
    tablet: "(max-width: 1199px)",
    book: "(max-width: 1040px)",
    phone: "(max-width: 640px)",
  },
  ut = {
    desktop: "(max-width: 1600px)",
    tablet: "(max-width: 1199px)",
    phone: "(max-width: 810px)",
  };
var Me = {
  in: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0 },
  },
  out: { opacity: 0, scale: 0.65, filter: "blur(8px)", transition: Ne },
  out_veritical: { opacity: 0, scale: 1, filter: "blur(8px)", transition: Ne },
};
function Iy(e) {
  return (t) => {
    let [o, a] = W(),
      n = fe(Pe.tablet);
    re(() => {
      let i = R.location.pathname;
      i === "/"
        ? a({ transition: 0 })
        : i === "/about"
          ? a({ transition: 1 })
          : i.includes("/blog")
            ? a({ transition: 2 })
            : a({ transition: 0 });
    }, [a]);
    let s = {
      horizontal: { position: "absolute", width: "100%" },
      vertical: { position: "relative", width: "100%" },
    };
    return r(e, {
      ...t,
      layout: !0,
      style: n || o.layout ? s.vertical : s.horizontal,
      initial: !1,
      transition: {
        duration: n ? 0 : 0.8,
        ease: [0.99, 0, 0.16, 1],
        delay: n ? 0 : 0.2,
      },
    });
  };
}
function Vy(e) {
  return (t) => {
    let [o, a] = W();
    return (
      re(() => {
        let n = R.location.pathname;
        n === "/"
          ? a({ transition: 0 })
          : n === "/about"
            ? a({ transition: 1 })
            : n.includes("/blog")
              ? a({ transition: 2 })
              : a({ transition: 2 });
      }, [a]),
      r(e, {
        ...t,
        layout: !0,
        variants: Me,
        initial: "in",
        animate: o.transition === 2 ? "in" : "out_veritical",
      })
    );
  };
}
function Uy(e) {
  return (t) => {
    let o = fe(Pe.tablet),
      [a, n] = W();
    return r(Ue, {
      children: o
        ? r(e, { ...t, initial: Me.out, animate: Me.in, exit: Me.out })
        : a.layout &&
          r(e, { ...t, initial: Me.out, animate: Me.in, exit: Me.out }),
    });
  };
}
function Dy(e) {
  return (t) => {
    let o = fe(Pe.tablet),
      [a, n] = W();
    return r(Ue, {
      children:
        !o &&
        !a.layout &&
        r(e, {
          ...t,
          initial: Me.out,
          animate: { ...Me.in, transition: { ...Ne, delay: 1 } },
          exit: Me.out,
        }),
    });
  };
}
function Ty(e) {
  return (t) =>
    r(e, {
      ...t,
      initial: { x: 0, opacity: 1 },
      animate: {
        x: -10,
        opacity: 0.3,
        transition: { duration: 1, repeat: 1 / 0, repeatType: "mirror" },
      },
      transition: { duration: 0 },
    });
}
function Ey(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, { ...t, layout: "position", style: { ...t.style } });
  };
}
function jy(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, {
      ...t,
      style: { ...t.style },
      variant: o.layout ? "Vertical" : "Horizontal",
    });
  };
}
function My(e) {
  return N((t, o) => {
    let [a, n] = W(),
      s = fe(ut.desktop),
      i = fe(ut.tablet),
      f = fe(ut.phone),
      c = T(null),
      { viewH: m, viewW: p } = je();
    re(() => {
      let w = (u) => {
        let k = c.current,
          g = 10;
        !a.layout && a.wheel
          ? Math.abs(u.deltaX) > Math.abs(u.deltaY) + g
            ? console.log("Horizontal Scroll:", u.deltaX)
            : Math.abs(u.deltaY) > Math.abs(u.deltaX) + g &&
              (u.preventDefault(),
              k.scrollBy({ left: u.deltaY * 10, behavior: "auto" }),
              console.log("Vertical Scroll:", u.deltaY))
          : u.shiftKey &&
            (k.scrollBy({ left: u.deltaY, behavior: "auto" }),
            console.log("Shift + Vertical Scroll:", u.deltaY));
      };
      return (
        R.addEventListener("wheel", w, { passive: !1 }),
        () => {
          R.removeEventListener("wheel", w);
        }
      );
    }, [a.wheel]),
      re(() => {
        let w = (u) => {
          let k = c.current;
          u.deltaX !== 0 && k.scrollBy(0, u.deltaX);
        };
      }, [a.wheelOffset]);
    let { scrollXProgress: d } = He({ container: c }),
      [y, b] = ae(0);
    Ze(d, "change", (w) => {
      b(w);
    }),
      re(() => {
        let w = c.current;
        n({ scroll_current: y });
      }, [a.layoutOffset]);
    let h = (w) => {
      n({
        layoutOffset: w.target.scrollLeft,
        layoutWidth: w.target.scrollWidth,
      });
    };
    return (
      re(() => {
        let w = c.current;
        w && w.scrollTo({ left: a.scroll_to, behavior: "smooth" });
      }, [a.scroll_to, a.trigger_scroll_to]),
      r(e, {
        ...t,
        layout: !0,
        ref: c,
        onScroll: h,
        style: {
          ...t.style,
          flexDirection: a.layout ? "column" : "row",
          height: a.layout ? "max-content" : "100vh",
        },
        initial: { opacity: 1, scale: 1 },
        animate: {
          opacity: a.transition == 0 ? (a.setting ? 0.6 : 1) : 0,
          scale:
            a.transition == 0
              ? a.setting
                ? f || a.layout
                  ? 1
                  : a.zoom
                    ? 0.8
                    : 0.9
                : a.zoom
                  ? a.layout || f
                    ? 1
                    : 0.9
                  : 1
              : a.layout || i
                ? 1
                : 0.65,
          filter: a.transition == 0 ? "blur(0px)" : "blur(8px)",
          transition: { ...Ne },
        },
        transition: Ne,
      })
    );
  });
}
function Ny(e) {
  return N((t, o) => {
    let [a, n] = W(),
      s = fe(ut.desktop),
      i = fe(ut.tablet),
      f = fe(ut.phone),
      c = T(null),
      { viewH: m, viewW: p } = je(),
      { scrollXProgress: d } = He({ container: c }),
      [y, b] = ae(0);
    return (
      Ze(d, "change", (w) => {
        b(w);
      }),
      re(() => {
        let w = c.current;
        n({ scroll_current: y });
      }, [a.layoutOffset]),
      r(e, {
        ...t,
        layout: !0,
        ref: c,
        onScroll: (w) => {
          n({
            layoutOffset: w.target.scrollLeft,
            layoutWidth: w.target.scrollWidth,
          });
        },
        style: { ...t.style },
        initial: { opacity: 1, scale: 1 },
        animate: {
          opacity: a.transition == 0 ? (a.setting ? 0.6 : 1) : 0,
          scale:
            a.transition == 0
              ? a.setting
                ? f || a.layout
                  ? 1
                  : a.zoom
                    ? 0.8
                    : 0.9
                : a.zoom
                  ? a.layout || f
                    ? 1
                    : 0.9
                  : 1
              : a.layout || i
                ? 1
                : 0.65,
          filter: a.transition == 0 ? "blur(0px)" : "blur(8px)",
          transition: { ...Ne },
        },
        transition: Ne,
      })
    );
  });
}
function By(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, {
      ...t,
      layout: "position",
      style: {
        ...t.style,
        width: o.layout ? "100%" : "max-content",
        height: o.layout ? "max-content" : "100%",
        padding: o.layout ? "0px 0px 200px 0px" : "0px 200px 0px 80px",
        justifyContent: o.layout ? "center" : "flex-start",
      },
      transition: Ne,
    });
  };
}
function qy(e) {
  return (t) => {
    let [o, a] = W();
    return !o.layout && r(e, { ...t });
  };
}
function Hy(e) {
  return N((t, o) => {
    let [a, n] = W(),
      s = T(null);
    return (
      re(() => {
        if (s.current) {
          let { offsetWidth: i } = s.current;
          n({ hero_width: i });
        }
      }, []),
      r(e, { ...t, style: { ...t.style, height: "90vh" }, ref: s })
    );
  });
}
function Py(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, { ...t, zoom: () => a({ zoom: !0 }) });
  };
}
function Ay(e) {
  return (t) => {
    let [o, a] = W(),
      { viewH: n } = je(),
      s = () => {
        let i = 0.6 * n * 1.333 + 200;
        a({ scroll_to: o.layoutOffset + i, trigger_scroll_to: Date.now() });
      };
    return o.layout ? null : o.side_nav && r(e, { ...t, onClick: s });
  };
}
function Oy(e) {
  return (t) => {
    let [o, a] = W(),
      { viewH: n } = je(),
      s = () => {
        let i = 0.6 * n * 1.333 + 200;
        a({ scroll_to: o.layoutOffset - i, trigger_scroll_to: Date.now() });
      };
    return o.layout ? null : o.side_nav && r(e, { ...t, onClick: s });
  };
}
function Gy(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, {
      ...t,
      style: { ...t.style },
      initial: {
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
      },
      animate: {
        backdropFilter: o.zoom ? "blur(8px)" : "blur(0px)",
        WebkitBackdropFilter: o.zoom ? "blur(8px)" : "blur(0px)",
      },
      transition: { delay: 0.2 },
      onClick: () => a({ zoom: !1 }),
    });
  };
}
function zy(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, {
      ...t,
      style: { ...t.style },
      initial: { scale: 1 },
      animate: { scale: o.setting ? 0.9 : 1, transition: { ...Ne } },
    });
  };
}
function Xy(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W();
    return r(e, { ...a, close: () => s({ zoom: !1 }) });
  };
}
function Wy(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, {
      ...t,
      layout: !0,
      variants: Me,
      initial: "in",
      animate: o.transition === 2 ? "in" : "out_veritical",
    });
  };
}
function Zy(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, {
      ...t,
      variants: Me,
      initial: { opacity: 1, y: 0 },
      animate:
        o.transition === 0
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.9, filter: "blur(5px)" },
      transition: Ne,
    });
  };
}
function Qy(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, {
      ...t,
      variants: Me,
      initial: { opacity: 1, y: 0 },
      animate: o.transition === 0 ? { opacity: 1 } : { opacity: 0 },
      transition: Ne,
    });
  };
}
function Yy(e) {
  return (t) => {
    let [o, a] = W(),
      { viewH: n } = je(),
      s = fe(ut.tablet),
      { scrollY: i } = He(),
      [f, c] = ae(0);
    return (
      Ze(i, "change", (m) => {
        c(m);
      }),
      r(e, {
        ...t,
        style: {
          ...t.style,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        },
        initial: { opacity: 0, y: 0 },
        animate: {
          opacity: s
            ? f >= 0.3 * n
              ? 1
              : 0
            : o.layout && f >= 0.3 * n
              ? 1
              : 0,
        },
        transition: Ne,
      })
    );
  };
}
function Ky(e) {
  return (t) => {
    let [o, a] = W(),
      [n, s] = he(),
      [i] = ie(n.click2, { volume: o.sound ? n.volume : 0 }),
      [f] = ie(n.swoosh, { volume: o.sound ? n.volume : 0 });
    function c() {
      o.sound && i();
    }
    function m() {
      if (o.sound) {
        i();
        let d = setTimeout(() => {
          f();
        }, 880);
        return () => clearTimeout(d);
      }
    }
    return r(e, {
      ...t,
      options: [
        {
          label: "ALL",
          click: () => {
            a({ type: "ALL" }), c();
          },
        },
        {
          label: "WORK",
          click: () => {
            a({ type: "WORK" }), m();
          },
        },
        {
          label: "IDEA",
          click: () => {
            a({ type: "IDEA" }), m();
          },
        },
        {
          label: "PLAYGROUND",
          click: () => {
            a({ type: "PLAYGROUND" }), m();
          },
        },
      ],
    });
  };
}
function Jy(e) {
  return (t) => {
    let [o, a] = W(),
      { viewW: n, viewH: s } = je(),
      i = fe(Pe.tablet),
      { scrollY: f } = He(),
      [c, m] = ae(0);
    Ze(f, "change", (d) => {
      m(d);
    });
    let p = {
      show: {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        transition: { ...Ne, delay: 0 },
      },
      hide: {
        scale: 0.85,
        opacity: 0,
        filter: "blur(8px)",
        transition: { ...Ne, delay: 0 },
      },
    };
    return r(e, {
      ...t,
      variants: p,
      initial: "hide",
      animate:
        o.transition === 0
          ? i || o.layout
            ? c >= 0.5 * s
              ? "show"
              : "hide"
            : o.layoutOffset >= 0.4 * n
              ? "show"
              : "hide"
          : "hide",
    });
  };
}
function mo(e) {
  return (t) => {
    let [o, a] = W(),
      { viewW: n } = je(),
      s = fe(Pe.tablet),
      [i, f] = ae(!1),
      [c, m] = ae("Default");
    return (
      re(() => {
        typeof R < "u" && f(R.matchMedia("(hover: none)").matches);
      }, []),
      re(() => {
        i || s || o.layoutOffset < n ? m("Default") : m("Collasped");
      }, [i, s, o.layoutOffset, n]),
      r(e, {
        ...t,
        variant: c,
        onClick: () => m("Default"),
        onMouseEnter: () => m("Default"),
      })
    );
  };
}
function po(e) {
  return (t) => {
    let [o, a] = W(),
      { viewW: n } = je(),
      s = fe(Pe.tablet);
    return r(e, { ...t, variant: s || o.layout ? "Button" : "Default" });
  };
}
function $y(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, {
      ...t,
      style: { ...t.style },
      initial: {
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
      },
      animate: {
        backdropFilter: o.setting ? "blur(8px)" : "blur(0px)",
        WebkitBackdropFilter: o.setting ? "blur(8px)" : "blur(0px)",
      },
      transition: { delay: 0.2 },
      onClick: () => a({ setting: !1 }),
    });
  };
}
function Ur(e) {
  return (t) => {
    let [o, a] = W(),
      n = fe(Pe.tablet),
      s = fe(Pe.phone),
      i = na("Z1o48jX66", !0);
    function f() {
      a({ transition: 1, setting: !1, setting2: !1 });
      let c = setTimeout(() => i(), 900);
      return () => clearTimeout(c);
    }
    return r(e, { ...t, onClick: () => f() });
  };
}
function uo(e) {
  return (t) => {
    let [o, a] = W(),
      n = fe(Pe.tablet),
      s = fe(Pe.phone),
      i = na("augiA20Il", !0);
    function f() {
      a({ transition: 0, setting: !1 });
      let c = setTimeout(() => i(), 500);
      return () => clearTimeout(c);
    }
    return r(e, { ...t, onClick: () => f() });
  };
}
function e2(e) {
  return (t) => {
    let [o, a] = W(),
      n = fe(Pe.tablet);
    return r(e, {
      ...t,
      variants: Me,
      initial: "in",
      animate:
        o.transition === 0 ? "in" : o.layout || n ? "out_veritical" : "out",
    });
  };
}
var Hn = uo(l.div),
  Pn = [
    "NQzEd4b81",
    "Zi8PaJmMF",
    "MqP2ibBlY",
    "XBCARBXsX",
    "eFF6jlYDo",
    "nPuwru2Jx",
    "XaPQQK0fA",
    "z3_zTu8em",
    "i1E9HRQTF",
    "haon_UN4R",
  ],
  An = "framer-a6wN7",
  On = {
    eFF6jlYDo: "framer-v-1unhfhq",
    haon_UN4R: "framer-v-8muzsz",
    i1E9HRQTF: "framer-v-1qg5s81",
    MqP2ibBlY: "framer-v-ec3gt1",
    nPuwru2Jx: "framer-v-1jpe0dz",
    NQzEd4b81: "framer-v-c9muf3",
    XaPQQK0fA: "framer-v-17j803k",
    XBCARBXsX: "framer-v-1jn2klq",
    z3_zTu8em: "framer-v-7vehq2",
    Zi8PaJmMF: "framer-v-1tfy8lq",
  };
function ho(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Gn = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  zn = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Xn = l(F),
  Wn = {
    Desktop_AlwaysDark: "z3_zTu8em",
    Desktop_AlwaysLight: "XaPQQK0fA",
    Desktop_Dark: "XBCARBXsX",
    Desktop_Light: "MqP2ibBlY",
    Desktop: "NQzEd4b81",
    Mobile_AlwaysDark: "haon_UN4R",
    Mobile_AlwaysLight: "i1E9HRQTF",
    Mobile_Dark: "nPuwru2Jx",
    Mobile_Light: "eFF6jlYDo",
    Mobile: "Zi8PaJmMF",
  },
  Zn = ({ height: e, id: t, title: o, width: a, ...n }) => {
    var s, i, f;
    return {
      ...n,
      a3q1uTWiE: (s = o ?? n.a3q1uTWiE) !== null && s !== void 0 ? s : "Jay Ji",
      variant:
        (f = (i = Wn[n.variant]) !== null && i !== void 0 ? i : n.variant) !==
          null && f !== void 0
          ? f
          : "NQzEd4b81",
    };
  },
  Qn = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Yn = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        a3q1uTWiE: c,
        ...m
      } = Zn(e),
      {
        baseVariant: p,
        classNames: d,
        clearLoadingGesture: y,
        gestureHandlers: b,
        gestureVariant: h,
        isLoading: w,
        setGestureState: u,
        setVariant: k,
        variants: g,
      } = G({
        cycleOrder: Pn,
        defaultVariant: "NQzEd4b81",
        variant: f,
        variantClassNames: On,
      }),
      v = Qn(e, g),
      C = T(null),
      L = A(),
      D = [],
      _ = J();
    return r(B, {
      id: i ?? L,
      children: r(Xn, {
        animate: g,
        initial: !1,
        children: r(zn, {
          value: Gn,
          children: r(l.div, {
            ...m,
            ...b,
            className: E(An, ...D, "framer-c9muf3", s, d),
            "data-framer-name": "Desktop",
            layoutDependency: v,
            layoutId: "NQzEd4b81",
            ref: t ?? C,
            style: {
              backgroundColor:
                "var(--token-0998aeba-5eb4-400a-87c6-fe3a20398e99, rgba(232, 232, 232, 0))",
              ...n,
            },
            ...ho(
              {
                eFF6jlYDo: { "data-framer-name": "Mobile_Light" },
                haon_UN4R: { "data-framer-name": "Mobile_AlwaysDark" },
                i1E9HRQTF: { "data-framer-name": "Mobile_AlwaysLight" },
                MqP2ibBlY: { "data-framer-name": "Desktop_Light" },
                nPuwru2Jx: { "data-framer-name": "Mobile_Dark" },
                XaPQQK0fA: { "data-framer-name": "Desktop_AlwaysLight" },
                XBCARBXsX: { "data-framer-name": "Desktop_Dark" },
                z3_zTu8em: { "data-framer-name": "Desktop_AlwaysDark" },
                Zi8PaJmMF: { "data-framer-name": "Mobile" },
              },
              p,
              h,
            ),
            children: r(Hn, {
              className: "framer-1pot1yi",
              layoutDependency: v,
              layoutId: "sInDfVhgf",
              children: r($, {
                __fromCanvasComponent: !0,
                children: r(F, {
                  children: r(l.p, {
                    style: {
                      "--font-selector": "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                      "--framer-font-family": '"Cabinet Grotesk", sans-serif',
                      "--framer-font-size": "30px",
                      "--framer-font-weight": "700",
                      "--framer-line-height": "1em",
                      "--framer-text-alignment": "center",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                    },
                    children: "Jay Ji",
                  }),
                }),
                className: "framer-19e0w0t",
                fonts: ["FS;Cabinet Grotesk-bold"],
                layoutDependency: v,
                layoutId: "Unh70UWhx",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: c,
                variants: {
                  eFF6jlYDo: {
                    "--extracted-r6o4lv":
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                  },
                  i1E9HRQTF: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                  MqP2ibBlY: {
                    "--extracted-r6o4lv":
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                  },
                  XaPQQK0fA: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                },
                verticalAlignment: "center",
                withExternalLayout: !0,
                ...ho(
                  {
                    eFF6jlYDo: {
                      children: r(F, {
                        children: r(l.p, {
                          style: {
                            "--font-selector":
                              "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                            "--framer-font-family":
                              '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-font-weight": "700",
                            "--framer-line-height": "1em",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                          },
                          children: "Jay Ji",
                        }),
                      }),
                    },
                    haon_UN4R: {
                      children: r(F, {
                        children: r(l.p, {
                          style: {
                            "--font-selector":
                              "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                            "--framer-font-family":
                              '"Cabinet Grotesk", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-font-weight": "700",
                            "--framer-line-height": "1em",
                            "--framer-text-alignment": "center",
                          },
                          children: "Jay Ji",
                        }),
                      }),
                    },
                    i1E9HRQTF: {
                      children: r(F, {
                        children: r(l.p, {
                          style: {
                            "--font-selector":
                              "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                            "--framer-font-family":
                              '"Cabinet Grotesk", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-font-weight": "700",
                            "--framer-line-height": "1em",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "Jay Ji",
                        }),
                      }),
                    },
                    MqP2ibBlY: {
                      children: r(F, {
                        children: r(l.p, {
                          style: {
                            "--font-selector":
                              "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                            "--framer-font-family":
                              '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                            "--framer-font-size": "30px",
                            "--framer-font-weight": "700",
                            "--framer-line-height": "1em",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                          },
                          children: "Jay Ji",
                        }),
                      }),
                    },
                    nPuwru2Jx: {
                      children: r(F, {
                        children: r(l.p, {
                          style: {
                            "--font-selector":
                              "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                            "--framer-font-family":
                              '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-font-weight": "700",
                            "--framer-line-height": "1em",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                          },
                          children: "Jay Ji",
                        }),
                      }),
                    },
                    XaPQQK0fA: {
                      children: r(F, {
                        children: r(l.p, {
                          style: {
                            "--font-selector":
                              "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                            "--framer-font-family":
                              '"Cabinet Grotesk", sans-serif',
                            "--framer-font-size": "30px",
                            "--framer-font-weight": "700",
                            "--framer-line-height": "1em",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "Jay Ji",
                        }),
                      }),
                    },
                    XBCARBXsX: {
                      children: r(F, {
                        children: r(l.p, {
                          style: {
                            "--font-selector":
                              "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                            "--framer-font-family":
                              '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                            "--framer-font-size": "30px",
                            "--framer-font-weight": "700",
                            "--framer-line-height": "1em",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                          },
                          children: "Jay Ji",
                        }),
                      }),
                    },
                    z3_zTu8em: {
                      children: r(F, {
                        children: r(l.p, {
                          style: {
                            "--font-selector":
                              "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                            "--framer-font-family":
                              '"Cabinet Grotesk", sans-serif',
                            "--framer-font-size": "30px",
                            "--framer-font-weight": "700",
                            "--framer-line-height": "1em",
                            "--framer-text-alignment": "center",
                          },
                          children: "Jay Ji",
                        }),
                      }),
                    },
                    Zi8PaJmMF: {
                      children: r(F, {
                        children: r(l.p, {
                          style: {
                            "--font-selector":
                              "RlM7Q2FiaW5ldCBHcm90ZXNrLWJvbGQ=",
                            "--framer-font-family":
                              '"Cabinet Grotesk", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-font-weight": "700",
                            "--framer-line-height": "1em",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                          },
                          children: "Jay Ji",
                        }),
                      }),
                    },
                  },
                  p,
                  h,
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Kn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-a6wN7.framer-occ2l9, .framer-a6wN7 .framer-occ2l9 { display: block; }",
    ".framer-a6wN7.framer-c9muf3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: flex-start; overflow: hidden; padding: 0px; pointer-events: auto; position: relative; width: min-content; }",
    ".framer-a6wN7 .framer-1pot1yi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 42px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-a6wN7 .framer-19e0w0t { flex: none; height: 42px; position: relative; white-space: pre-wrap; width: 80px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-a6wN7.framer-c9muf3, .framer-a6wN7 .framer-1pot1yi { gap: 0px; } .framer-a6wN7.framer-c9muf3 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-a6wN7.framer-c9muf3 > :first-child, .framer-a6wN7 .framer-1pot1yi > :first-child { margin-left: 0px; } .framer-a6wN7.framer-c9muf3 > :last-child, .framer-a6wN7 .framer-1pot1yi > :last-child { margin-right: 0px; } .framer-a6wN7 .framer-1pot1yi > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } }",
    ".framer-a6wN7.framer-v-1tfy8lq .framer-1pot1yi, .framer-a6wN7.framer-v-1unhfhq .framer-1pot1yi, .framer-a6wN7.framer-v-1jpe0dz .framer-1pot1yi, .framer-a6wN7.framer-v-1qg5s81 .framer-1pot1yi, .framer-a6wN7.framer-v-8muzsz .framer-1pot1yi { height: min-content; padding: 4px 0px 4px 0px; }",
    ".framer-a6wN7.framer-v-1tfy8lq .framer-19e0w0t, .framer-a6wN7.framer-v-1unhfhq .framer-19e0w0t, .framer-a6wN7.framer-v-1jpe0dz .framer-19e0w0t, .framer-a6wN7.framer-v-1qg5s81 .framer-19e0w0t, .framer-a6wN7.framer-v-8muzsz .framer-19e0w0t { height: 24px; white-space: pre; width: auto; }",
    ".framer-a6wN7.framer-v-1unhfhq.framer-c9muf3, .framer-a6wN7.framer-v-1jpe0dz.framer-c9muf3, .framer-a6wN7.framer-v-1qg5s81.framer-c9muf3, .framer-a6wN7.framer-v-8muzsz.framer-c9muf3 { height: min-content; }",
  ],
  Et = q(Yn, Kn, "framer-a6wN7"),
  s2 = Et;
Et.displayName = "Home/Logo";
Et.defaultProps = { height: 42, width: 80 };
M(Et, {
  variant: {
    options: [
      "NQzEd4b81",
      "Zi8PaJmMF",
      "MqP2ibBlY",
      "XBCARBXsX",
      "eFF6jlYDo",
      "nPuwru2Jx",
      "XaPQQK0fA",
      "z3_zTu8em",
      "i1E9HRQTF",
      "haon_UN4R",
    ],
    optionTitles: [
      "Desktop",
      "Mobile",
      "Desktop_Light",
      "Desktop_Dark",
      "Mobile_Light",
      "Mobile_Dark",
      "Desktop_AlwaysLight",
      "Desktop_AlwaysDark",
      "Mobile_AlwaysLight",
      "Mobile_AlwaysDark",
    ],
    title: "Variant",
    type: x.Enum,
  },
  a3q1uTWiE: {
    defaultValue: "Jay Ji",
    displayTextArea: !1,
    title: "Title",
    type: x.String,
  },
});
z(
  Et,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Cabinet Grotesk",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/XMXWOHABYLQDJ42L65EFRYNVRY37HQCB/B2O4O6V3JMFM2WDCYQI3A47L5U4THDUL/WN5274VQ3AUBDFP74GB4EC4XYJ3EKVNE.woff2",
          weight: "700",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Xe = ze({ text: "default", show_text: !1 }),
  ke = { type: "spring", stiffness: 170, damping: 28 },
  Ae = { type: "spring", stiffness: 170, damping: 28 },
  Le = {
    desktop: "(max-width: 1600px)",
    tablet: "(max-width: 1199px)",
    phone: "(max-width: 810px)",
  };
var wt = { spring: [0.54, -0.5, 0.2, 1.5] };
function _e(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      i = fe(Le.phone),
      [f, c] = ae({ width: 0, height: 0, offsetX: 0, offsetY: 0 }),
      m = ve(0, ke),
      p = ve(0, ke);
    function d(b) {
      let h = b.currentTarget.getBoundingClientRect(),
        w = b.clientX - h.left,
        u = b.clientY - h.top;
      c({
        width: h.width,
        height: h.width,
        offsetX: xe(w, [0, f.width], [-8, 8], { clamp: !0 }),
        offsetY: xe(u, [0, f.height], [-8, 8], { clamp: !0 }),
      }),
        m.set(f.offsetX),
        p.set(f.offsetY);
    }
    function y() {
      m.set(0), p.set(0);
    }
    return r(l.div, {
      layout: !0,
      style: { ...o, width: "100%", height: "100%", x: m, y: p },
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.85, transition: { duration: 0.15 } },
      onMouseMove: i ? void 0 : d,
      onMouseLeave: i ? void 0 : () => y(),
      onMouseDown: i ? void 0 : () => y(),
      children: r(e, { ...t }),
    });
  };
}
function y2(e) {
  return (t) => {
    let [o, a] = W(),
      n = fe(Le.phone),
      [s, i] = ae({ width: 0, height: 0, offsetX: 0, offsetY: 0 }),
      f = ve(0, ke),
      c = ve(0, ke);
    function m(w) {
      let u = w.currentTarget.getBoundingClientRect(),
        k = w.clientX - u.left,
        g = w.clientY - u.top;
      i({
        width: u.width,
        height: u.width,
        offsetX: xe(k, [0, s.width], [-8, 8], { clamp: !0 }),
        offsetY: xe(g, [0, s.height], [-8, 8], { clamp: !0 }),
      }),
        f.set(s.offsetX),
        c.set(s.offsetY);
    }
    function p() {
      f.set(0), c.set(0);
    }
    let [d, y] = he(),
      [b] = ie(d.hover1, { volume: o.sound ? d.volume : 0 }),
      [h] = ie(d.click1, { volume: o.sound ? d.volume : 0 });
    return r(l.div, {
      layout: !0,
      style: { ...t.style, x: f, y: c },
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.85, transition: { duration: 0.15 } },
      onMouseMove: n ? void 0 : m,
      onMouseEnter: () => b(),
      onMouseLeave: n ? void 0 : () => p(),
      onMouseUp: n ? void 0 : () => p(),
      onMouseDown: n
        ? () => h()
        : () => {
            p(), h();
          },
      children: r(e, { ...t }),
    });
  };
}
function v2(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      i = fe(Le.phone),
      [f, c] = ae({ width: 0, height: 0, offsetX: 0, offsetY: 0 }),
      m = ve(0, ke),
      p = ve(0, ke);
    function d(k) {
      let g = k.currentTarget.getBoundingClientRect(),
        v = k.clientX - g.left,
        C = k.clientY - g.top;
      c({
        width: g.width,
        height: g.width,
        offsetX: xe(v, [0, f.width], [-8, 8], { clamp: !0 }),
        offsetY: xe(C, [0, f.height], [-8, 8], { clamp: !0 }),
      }),
        m.set(f.offsetX),
        p.set(f.offsetY);
    }
    function y() {
      m.set(0), p.set(0);
    }
    let [b, h] = he(),
      [w] = ie(b.popup, { volume: n.sound ? b.volume : 0 }),
      [u] = ie(b.click4, { volume: n.sound ? b.volume : 0 });
    return r(l.div, {
      layout: !0,
      style: { ...o, width: "100%", height: "100%", x: m, y: p },
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.85, transition: { duration: 0.15 } },
      onMouseMove: i ? void 0 : d,
      onMouseEnter: () => w(),
      onMouseLeave: i ? void 0 : () => y(),
      onMouseDown: i
        ? () => u()
        : () => {
            y(), u();
          },
      children: r(e, { ...t }),
    });
  };
}
function x2(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      i = fe(Le.phone),
      [f, c] = ae({ width: 0, height: 0, offsetX: 0, offsetY: 0 }),
      m = ve(0, ke),
      p = ve(0, ke);
    function d(k) {
      let g = k.currentTarget.getBoundingClientRect(),
        v = k.clientX - g.left,
        C = k.clientY - g.top;
      c({
        width: g.width,
        height: g.width,
        offsetX: xe(v, [0, f.width], [-8, 8], { clamp: !0 }),
        offsetY: xe(C, [0, f.height], [-8, 8], { clamp: !0 }),
      }),
        m.set(f.offsetX),
        p.set(f.offsetY);
    }
    function y() {
      m.set(0), p.set(0);
    }
    let [b, h] = he(),
      [w] = ie(b.popup, { volume: n.sound ? b.volume : 0 }),
      [u] = ie(b.click4, { volume: n.sound ? b.volume : 0 });
    return r(l.div, {
      layout: !0,
      style: { ...o, width: "100%", height: "100%", x: m, y: p },
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.85, transition: { duration: 0.15 } },
      onMouseMove: i ? void 0 : d,
      onMouseEnter: () => w(),
      onMouseLeave: i ? void 0 : () => y(),
      onMouseDown: i
        ? () => u()
        : () => {
            y(), u();
          },
      children: r(e, { ...t }),
    });
  };
}
function b2(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      i = fe(Le.phone),
      [f, c] = ae({ width: 0, height: 0, offsetX: 0, offsetY: 0 }),
      m = ve(0, ke),
      p = ve(0, ke);
    function d(k) {
      let g = k.currentTarget.getBoundingClientRect(),
        v = k.clientX - g.left,
        C = k.clientY - g.top;
      c({
        width: g.width,
        height: g.width,
        offsetX: xe(v, [0, f.width], [-8, 8], { clamp: !0 }),
        offsetY: xe(C, [0, f.height], [-8, 8], { clamp: !0 }),
      }),
        m.set(f.offsetX),
        p.set(f.offsetY);
    }
    function y() {
      m.set(0), p.set(0);
    }
    let [b, h] = he(),
      [w] = ie(b.popup, { volume: n.sound ? b.volume : 0 }),
      [u] = ie(b.click4, { volume: n.sound ? b.volume : 0 });
    return r(l.div, {
      layout: !0,
      style: { ...o, width: "100%", height: "100%", x: m, y: p },
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95, transition: { duration: 0.15 } },
      onMouseMove: i ? void 0 : d,
      onMouseEnter: () => w(),
      onMouseLeave: i ? void 0 : () => y(),
      onMouseDown: i
        ? () => u()
        : () => {
            y(), u();
          },
      children: r(e, { ...t }),
    });
  };
}
function w2(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = Xe();
    return (
      re(() => {
        let i = setTimeout(() => {
          n.show_text === !0 && s({ show_text: !1 });
        }, 1200);
        return () => {
          clearTimeout(i);
        };
      }, [n.show_text]),
      r(e, {
        layout: !0,
        ...a,
        style: { ...o },
        text: n.text,
        initial: { opacity: 0 },
        animate: { opacity: n.show_text ? 1 : 0 },
        transition: Ae,
      })
    );
  };
}
function k2(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W();
    return r(e, {
      ...a,
      style: { ...o },
      variant: n.layout ? "Grid" : "Stack",
    });
  };
}
function Dr(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      [i, f] = Xe(),
      c = fe(Le.phone),
      [m, p] = he(),
      [d] = ie(m.hover1, { volume: n.sound ? m.volume : 0 }),
      [y] = ie(m.click2, { volume: n.sound ? m.volume : 0 });
    return r(e, {
      ...a,
      style: { ...o },
      onMouseEnter: () => d(),
      tapA: () => {
        R.localStorage.setItem("ls_layout", "false"),
          s({ layout: !1 }),
          y(),
          f({
            text: c ? "Hide card detail." : "Use stack layout.",
            show_text: !0,
          });
      },
    });
  };
}
function Tr(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      [i, f] = Xe(),
      c = fe(Le.phone),
      [m, p] = he(),
      [d] = ie(m.hover1, { volume: n.sound ? m.volume : 0 }),
      [y] = ie(m.click2, { volume: n.sound ? m.volume : 0 });
    return r(e, {
      ...a,
      style: { ...o },
      onMouseEnter: () => d(),
      tapA: () => {
        R.localStorage.setItem("ls_layout", "true"),
          s({ layout: !0 }),
          y(),
          f({
            text: c ? "Show card detail." : "Use grid layout.",
            show_text: !0,
          });
      },
    });
  };
}
function C2(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      [i, f] = Xe(),
      [c, m] = he(),
      [p] = ie(c.hover1, { volume: 1 }),
      [d] = ie(c.soundon, { volume: 1 });
    function y() {
      if (!n.sound) {
        let b = setTimeout(() => {
          d();
        }, 300);
        return () => clearTimeout(b);
      }
    }
    return r(e, {
      ...a,
      style: { ...o },
      onMouseEnter: () => (n.sound ? p() : void 0),
      tapA: () => {
        s({ sound: !n.sound }),
          y(),
          f({
            text: n.sound ? "Sound effects off." : "Sound effects on.",
            show_text: !0,
          });
      },
      variant: n.sound ? "On" : "Off",
    });
  };
}
function _2(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      [i, f] = Xe(),
      [c, m] = he(),
      [p] = ie(c.hover1, { volume: n.sound ? c.volume : 0 }),
      [d] = ie(c.click2, { volume: n.sound ? c.volume : 0 }),
      [y, b] = ae(go());
    re(() => {
      s({ darkmode: !!y });
    }, [y]);
    let h = () => {
      let k = y ? "light" : "dark";
      b(!y),
        d(),
        f({ text: y ? "Use light theme." : "Use dark theme.", show_text: !0 }),
        localStorage.setItem("currentToggleState", k),
        typeof R < "u" && R.dispatchEvent(new CustomEvent("themeChange"));
    };
    re(() => {
      typeof R < "u" &&
        R.matchMedia("(prefers-color-scheme: dark)").addListener((g) => {
          let v = g.matches ? "dark" : "light";
          if (
            (localStorage.setItem("currentOsTheme", v),
            localStorage.setItem("currentToggleState", v),
            b(v === "dark"),
            typeof document < "u")
          ) {
            let C = document.getElementsByTagName("style")[0],
              L = C.innerHTML.replace(
                /prefers-color-scheme: \w+/,
                `prefers-color-scheme: ${(v === "dark" && v === "dark") || (v === "light" && v === "light") ? "dark" : "light"}`,
              );
            C.innerHTML = L;
          }
          R.dispatchEvent(new CustomEvent("themeChange"));
        });
    }, []),
      re(() => {
        if (typeof R < "u" && typeof document < "u") {
          let k = y ? "dark" : "light",
            g = localStorage.getItem("currentOsTheme") || la(),
            v = document.getElementsByTagName("style")[0],
            C = v.innerHTML.replace(
              /prefers-color-scheme: \w+/,
              `prefers-color-scheme: ${(k === "dark" && g === "dark") || (k === "light" && g === "light") ? "dark" : "light"}`,
            );
          (v.innerHTML = C), localStorage.setItem("currentToggleState", k);
        }
      }, [y]);
    let [w, u] = ae(!1);
    return (
      re(() => {
        u(!0);
      }, []),
      r(e, {
        ...a,
        style: { ...o },
        onMouseEnter: () => p(),
        tapA: h,
        variant: n.darkmode ? "Off" : "On",
      })
    );
  };
}
function la() {
  return typeof R < "u" &&
    typeof document < "u" &&
    R.matchMedia &&
    R.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
function go() {
  let e = la(),
    t =
      localStorage.getItem("currentToggleState") ||
      (e === "dark" ? "dark" : "light");
  if ((localStorage.setItem("currentToggleState", t), typeof document < "u")) {
    let o = document.getElementsByTagName("style")[0],
      a = o.innerHTML.replace(
        /prefers-color-scheme: \w+/,
        `prefers-color-scheme: ${(t === "dark" && e === "dark") || (t === "light" && e === "light") ? "dark" : "light"}`,
      );
    o.innerHTML = a;
  }
  return t === "dark";
}
function yo(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      i = fe(Le.tablet),
      { scrollY: f } = He(),
      [c, m] = ae(0);
    Ze(f, "change", (ce) => {
      m(ce);
    });
    let { viewW: p, viewH: d } = je(),
      [y, b] = he(),
      [h] = ie(y.hover1, { volume: n.sound ? y.volume : 0 }),
      [w] = ie(y.click1, { volume: n.sound ? y.volume : 0 }),
      [u, k] = ae({ width: 0, height: 0, offsetX: 0, offsetY: 0 }),
      g = ve(0, ke),
      v = ve(0, ke);
    re(() => {
      g.set(u.offsetX), v.set(u.offsetY);
    }, [u]);
    function C(ce) {
      let ge = ce.currentTarget.getBoundingClientRect(),
        ye = ce.clientX - ge.left,
        we = ce.clientY - ge.top;
      k({
        width: ge.width,
        height: ge.width,
        offsetX: xe(ye, [0, u.width], [-8, 8], { clamp: !0 }),
        offsetY: xe(we, [0, u.height], [-8, 8], { clamp: !0 }),
      });
    }
    function L() {
      g.set(0), v.set(0);
    }
    function D() {
      g.set(0), v.set(0);
    }
    function _() {
      g.set(0), v.set(0);
    }
    let Z = {
        hide: {
          x: 156,
          y: [0, -14, 0],
          opacity: 0,
          scale: 0.5,
          transition: {
            duration: 0.8,
            ease: wt.spring,
            y: { duration: 0.6 },
            delay: 0.3,
          },
        },
        show: {
          x: 0,
          y: [0, -12, 0],
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: wt.spring,
            y: { duration: 0.6 },
            delay: 0,
          },
        },
      },
      [X, H] = ae(go());
    re(() => {
      s({ darkmode: !!X });
    }, [X]);
    let K = () => {
      let ce = X ? "light" : "dark";
      H(!X),
        localStorage.setItem("currentToggleState", ce),
        typeof R < "u" && R.dispatchEvent(new CustomEvent("themeChange"));
    };
    re(() => {
      typeof R < "u" &&
        R.matchMedia("(prefers-color-scheme: dark)").addListener((ge) => {
          let ye = ge.matches ? "dark" : "light";
          if (
            (localStorage.setItem("currentOsTheme", ye),
            localStorage.setItem("currentToggleState", ye),
            H(ye === "dark"),
            typeof document < "u")
          ) {
            let we = document.getElementsByTagName("style")[0],
              Se = we.innerHTML.replace(
                /prefers-color-scheme: \w+/,
                `prefers-color-scheme: ${(ye === "dark" && ye === "dark") || (ye === "light" && ye === "light") ? "dark" : "light"}`,
              );
            we.innerHTML = Se;
          }
          R.dispatchEvent(new CustomEvent("themeChange"));
        });
    }, []),
      re(() => {
        if (typeof R < "u" && typeof document < "u") {
          let ce = X ? "dark" : "light",
            ge = localStorage.getItem("currentOsTheme") || la(),
            ye = document.getElementsByTagName("style")[0],
            we = ye.innerHTML.replace(
              /prefers-color-scheme: \w+/,
              `prefers-color-scheme: ${(ce === "dark" && ge === "dark") || (ce === "light" && ge === "light") ? "dark" : "light"}`,
            );
          (ye.innerHTML = we), localStorage.setItem("currentToggleState", ce);
        }
      }, [X]);
    let [te, le] = ae(!1);
    return (
      re(() => {
        le(!0);
      }, []),
      !i &&
        r(l.div, {
          style: {
            pointerEvents:
              n.setting === !0 || n.layoutOffset >= 0.2 * p ? "none" : "auto",
          },
          variants: Z,
          initial: !1,
          animate:
            n.setting === !0 || n.layoutOffset >= 0.2 * p || (i && c >= 0.2 * d)
              ? "hide"
              : "show",
          children: r(e, {
            ...a,
            style: { ...o, x: g, y: v },
            onMouseMove: i ? void 0 : C,
            onMouseLeave: i ? void 0 : () => L(),
            onMouseEnter: i
              ? void 0
              : () => {
                  h();
                },
            onMouseDown: i
              ? void 0
              : () => {
                  D(), w();
                },
            onMouseUp: i ? void 0 : () => _(),
            initial: { scale: 1 },
            whileHover: { scale: 1.1, transition: Ae },
            whileTap: { scale: 0.85, transition: { duration: 0.1 } },
            onClick: K,
          }),
        })
    );
  };
}
function vo(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      i = fe(Le.tablet),
      { scrollY: f } = He(),
      [c, m] = ae(0);
    Ze(f, "change", (X) => {
      m(X);
    });
    let { viewW: p, viewH: d } = je(),
      [y, b] = he(),
      [h] = ie(y.hover1, { volume: n.sound ? y.volume : 0 }),
      [w] = ie(y.soundon, { volume: n.sound ? y.volume : 0 }),
      [u, k] = ae({ width: 0, height: 0, offsetX: 0, offsetY: 0 }),
      g = ve(0, ke),
      v = ve(0, ke);
    re(() => {
      g.set(u.offsetX), v.set(u.offsetY);
    }, [u]);
    function C(X) {
      let H = X.currentTarget.getBoundingClientRect(),
        K = X.clientX - H.left,
        te = X.clientY - H.top;
      k({
        width: H.width,
        height: H.width,
        offsetX: xe(K, [0, u.width], [-8, 8], { clamp: !0 }),
        offsetY: xe(te, [0, u.height], [-8, 8], { clamp: !0 }),
      });
    }
    function L() {
      g.set(0), v.set(0);
    }
    function D() {
      if ((g.set(0), v.set(0), !n.sound)) {
        let X = setTimeout(() => {
          w();
        }, 300);
        return () => clearTimeout(X);
      }
    }
    function _() {
      g.set(0), v.set(0);
    }
    let Z = {
      hide: {
        x: 104,
        y: [0, 12, 0],
        opacity: 0,
        scale: 0.5,
        transition: {
          duration: 0.8,
          ease: wt.spring,
          y: { duration: 0.6 },
          delay: 0.1,
        },
      },
      show: {
        x: 0,
        y: [0, 10, 0],
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: wt.spring,
          y: { duration: 0.6 },
          delay: 0.1,
        },
      },
    };
    return (
      !i &&
      r(l.div, {
        style: {
          pointerEvents:
            n.setting === !0 || n.layoutOffset >= 0.2 * p ? "none" : "auto",
        },
        variants: Z,
        initial: !1,
        animate:
          n.setting === !0 || n.layoutOffset >= 0.2 * p || (i && c >= 0.2 * d)
            ? "hide"
            : "show",
        children: r(e, {
          ...a,
          style: { ...o, x: g, y: v },
          onMouseMove: i ? void 0 : C,
          onMouseLeave: i ? void 0 : () => L(),
          onMouseEnter: i ? void 0 : () => h(),
          onMouseDown: i ? void 0 : () => D(),
          onMouseUp: i ? void 0 : () => _(),
          initial: { scale: 1 },
          whileHover: { scale: 1.1, transition: Ae },
          whileTap: { scale: 0.85, transition: { duration: 0.1 } },
        }),
      })
    );
  };
}
function xo(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      i = fe(Le.tablet),
      { scrollY: f } = He(),
      [c, m] = ae(0);
    Ze(f, "change", (X) => {
      m(X);
    });
    let { viewW: p, viewH: d } = je(),
      [y, b] = he(),
      [h] = ie(y.hover1, { volume: n.sound ? y.volume : 0 }),
      [w] = ie(y.click1, { volume: n.sound ? y.volume : 0 }),
      [u, k] = ae({ width: 0, height: 0, offsetX: 0, offsetY: 0 }),
      g = ve(0, ke),
      v = ve(0, ke);
    re(() => {
      g.set(u.offsetX), v.set(u.offsetY);
    }, [u]);
    function C(X) {
      let H = X.currentTarget.getBoundingClientRect(),
        K = X.clientX - H.left,
        te = X.clientY - H.top;
      k({
        width: H.width,
        height: H.width,
        offsetX: xe(K, [0, u.width], [-8, 8], { clamp: !0 }),
        offsetY: xe(te, [0, u.height], [-8, 8], { clamp: !0 }),
      });
    }
    function L() {
      g.set(0), v.set(0);
    }
    function D() {
      g.set(0), v.set(0);
    }
    function _() {
      g.set(0), v.set(0);
    }
    let Z = {
      hide: {
        x: 52,
        y: [0, -12, 0],
        opacity: 0,
        scale: 0.5,
        transition: {
          duration: 0.8,
          ease: wt.spring,
          y: { duration: 0.6 },
          delay: 0,
        },
      },
      show: {
        x: 0,
        y: [0, -8, 0],
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: wt.spring,
          y: { duration: 0.6 },
          delay: 0.3,
        },
      },
    };
    return (
      !i &&
      r(l.div, {
        style: {
          pointerEvents:
            n.setting === !0 || n.layoutOffset >= 0.2 * p ? "none" : "auto",
        },
        variants: Z,
        initial: !1,
        animate:
          n.setting === !0 || n.layoutOffset >= 0.2 * p || (i && c >= 0.2 * d)
            ? "hide"
            : "show",
        children: r(e, {
          ...a,
          style: { ...o, x: g, y: v },
          onMouseMove: i ? void 0 : C,
          onMouseLeave: i ? void 0 : () => L(),
          onMouseEnter: () => h(),
          onMouseDown: i
            ? void 0
            : () => {
                D();
              },
          onMouseUp: i ? void 0 : () => _(),
          initial: { scale: 1 },
          whileHover: { scale: 1.1, transition: Ae },
          whileTap: { scale: 0.85, transition: { duration: 0.1 } },
          onClick: () => {
            R.localStorage.setItem("ls_layout", String(n.layout)),
              s({ layout: !n.layout });
          },
        }),
      })
    );
  };
}
function bo(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      i = fe(Le.tablet);
    return r(e, {
      ...a,
      style: { ...o },
      variant: n.layout ? "Detail" : "Default",
    });
  };
}
function wo(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      i = fe(Le.tablet),
      { viewW: f } = je(),
      [c, m] = he(),
      [p] = ie(c.hover1, { volume: n.sound ? c.volume : 0 }),
      [d] = ie(c.click1, { volume: n.sound ? c.volume : 0 }),
      [y, b] = ae({ width: 0, height: 0, offsetX: 0, offsetY: 0 }),
      h = ve(0, ke),
      w = ve(0, ke);
    re(() => {
      h.set(y.offsetX), w.set(y.offsetY);
    }, [y]);
    function u(L) {
      let D = L.currentTarget.getBoundingClientRect(),
        _ = L.clientX - D.left,
        Z = L.clientY - D.top;
      b({
        width: D.width,
        height: D.width,
        offsetX: xe(_, [0, y.width], [-8, 8], { clamp: !0 }),
        offsetY: xe(Z, [0, y.height], [-8, 8], { clamp: !0 }),
      });
    }
    function k() {
      h.set(0), w.set(0);
    }
    function g() {
      h.set(0), w.set(0);
    }
    function v() {
      h.set(0), w.set(0);
    }
    let C = {
      on: {
        scale: [1, 1.15, 1.15, 1],
        backgroundColor: [
          "rgba(255,255,255,0)",
          "rgba(255,255,255,0.3)",
          "rgba(255,255,255,0.3)",
          "rgba(255,255,255,0)",
        ],
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0 },
      },
      off: {
        scale: [1, 1.15, 1.15, 1],
        backgroundColor: [
          "rgba(255,255,255,0)",
          "rgba(255,255,255,0.3)",
          "rgba(255,255,255,0.3)",
          "rgba(255,255,255,0)",
        ],
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0 },
      },
    };
    return r(l.div, {
      style: { borderRadius: 12 },
      variants: C,
      initial: !1,
      animate: n.setting === !0 || n.layoutOffset >= 0.2 * f ? "on" : "off",
      children: r(e, {
        ...a,
        style: { ...o, x: h, y: w },
        onMouseMove: i ? void 0 : u,
        onMouseLeave: i ? void 0 : () => k(),
        onMouseEnter: i ? void 0 : () => p(),
        onMouseDown: i ? void 0 : () => d(),
        onMouseUp: i ? void 0 : () => v(),
        initial: { scale: 1 },
        whileHover: { scale: 1.1, transition: Ae },
        whileTap: { scale: 0.85, transition: { duration: 0.1 } },
        onClick: () => {
          g();
        },
      }),
    });
  };
}
function F2(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W();
    return r(e, { ...a, setting2: () => s({ setting: !n.setting }) });
  };
}
function ko(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      i = fe(Le.tablet),
      [f, c] = he(),
      [m] = ie(f.hover1, { volume: n.sound ? f.volume : 0 }),
      [p] = ie(f.about, { volume: n.sound ? f.volume : 0, interrupt: !0 }),
      [d, y] = ae({ width: 0, height: 0, offsetX: 0, offsetY: 0 }),
      b = ve(0, ke),
      h = ve(0, ke);
    re(() => {
      b.set(d.offsetX), h.set(d.offsetY);
    }, [d]);
    function w(C) {
      let L = C.currentTarget.getBoundingClientRect(),
        D = C.clientX - L.left,
        _ = C.clientY - L.top;
      y({
        width: L.width,
        height: L.height,
        offsetX: xe(D, [0, d.width], [-8, 8]),
        offsetY: xe(_, [0, d.height], [-8, 8]),
      });
    }
    let u = tt();
    function k() {
      b.set(0), h.set(0);
    }
    function g() {
      b.set(0),
        h.set(0),
        u.start({
          rotate: [0, 15, -15, 15, -15, 0],
          transition: { rotate: { duration: 0.4 } },
        });
    }
    function v() {
      b.set(0), h.set(0);
    }
    return r(e, {
      ...a,
      style: { ...o, x: b, y: h },
      onMouseMove: i ? void 0 : w,
      onMouseLeave: i ? void 0 : () => k(),
      onMouseEnter: i ? void 0 : () => m(),
      onMouseDown: i
        ? void 0
        : () => {
            g(), p();
          },
      onMouseUp: () => v(),
      initial: { scale: 1 },
      animate: i ? void 0 : u,
      whileHover: { scale: 1.1, transition: Ae },
      whileTap: { scale: 0.85, transition: { duration: 0.1 } },
    });
  };
}
function at(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      i = fe(Le.tablet),
      [f, c] = he(),
      [m] = ie(f.popup, { volume: n.sound ? f.volume : 0 }),
      [p] = ie(f.click4, { volume: n.sound ? f.volume : 0 }),
      [d, y] = ae({ width: 0, height: 0, offsetX: 0, offsetY: 0 }),
      b = ve(0, ke),
      h = ve(0, ke);
    re(() => {
      b.set(d.offsetX), h.set(d.offsetY);
    }, [d]);
    function w(L) {
      let D = L.currentTarget.getBoundingClientRect(),
        _ = L.clientX - D.left,
        Z = L.clientY - D.top;
      y({
        width: D.width,
        height: D.height,
        offsetX: xe(_, [0, d.width], [-8, 8]),
        offsetY: xe(Z, [0, d.height], [-8, 8]),
      });
    }
    let u = tt();
    function k() {
      let L = setTimeout(() => {
        m();
      }, 100);
      return () => clearTimeout(L);
    }
    function g() {
      b.set(0), h.set(0);
    }
    function v() {
      b.set(0), h.set(0);
    }
    function C() {
      b.set(0), h.set(0);
    }
    return r(e, {
      ...a,
      style: { ...o, x: b, y: h },
      onMouseMove: i ? void 0 : w,
      onMouseLeave: i ? void 0 : () => g(),
      onMouseEnter: () => k(),
      onMouseDown: i
        ? void 0
        : () => {
            v(), p();
          },
      onMouseUp: i ? void 0 : () => C(),
      initial: { scale: 1 },
      animate: i ? void 0 : u,
      whileHover: { scale: 1.1, transition: Ae },
      whileTap: { scale: 0.85, transition: { duration: 0.1 } },
    });
  };
}
function Co(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      i = fe(Le.tablet),
      [f, c] = he(),
      [m] = ie(f.hover1, { volume: n.sound ? f.volume : 0 }),
      [p] = ie(f.click1, { volume: n.sound ? f.volume : 0 }),
      [d, y] = ae({ width: 0, height: 0, offsetX: 0, offsetY: 0 }),
      b = ve(0, ke),
      h = ve(0, ke);
    re(() => {
      b.set(d.offsetX), h.set(d.offsetY);
    }, [d]);
    function w(L) {
      let D = L.currentTarget.getBoundingClientRect(),
        _ = L.clientX - D.left,
        Z = L.clientY - D.top;
      y({
        width: D.width,
        height: D.height,
        offsetX: xe(_, [0, d.width], [-8, 8]),
        offsetY: xe(Z, [0, d.height], [-8, 8]),
      });
    }
    let u = tt();
    function k() {
      b.set(0), h.set(0);
    }
    function g() {
      b.set(0), h.set(0);
    }
    function v() {
      b.set(0), h.set(0);
    }
    function C() {
      p();
      let L = setTimeout(() => R.scrollTo({ top: 0, behavior: "smooth" }), 200);
      return () => clearTimeout(L);
    }
    return r(e, {
      ...a,
      layout: !0,
      style: { ...o, x: b, y: h },
      onMouseMove: i ? void 0 : w,
      onMouseLeave: i ? void 0 : () => k(),
      onMouseEnter: () => m(),
      onMouseDown: i ? void 0 : () => g(),
      onMouseUp: i ? void 0 : () => v(),
      initial: { x: 0, y: 0 },
      animate: i ? void 0 : u,
      whileHover: { scale: 1.1, transition: Ae },
      whileTap: { scale: 0.85, transition: { duration: 0.1 } },
      onClick: () => C(),
    });
  };
}
function R2(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      [i, f] = Xe(),
      [c, m] = he(),
      [p] = ie(c.hover1, { volume: n.sound ? c.volume : 0 }),
      [d] = ie(c.click2, { volume: n.sound ? c.volume : 0 }),
      y = fe(Le.tablet);
    return (
      re(() => {
        n.layout === !0 && s({ wheel: !1 }), y === !0 && s({ wheel: !1 });
      }, [n.layout, y]),
      r(e, {
        ...a,
        style: { ...o },
        onMouseEnter: () => p(),
        tapA: () => {
          s({ wheel: !n.wheel }),
            d(),
            f({
              text: n.wheel
                ? "Disable wheel control."
                : "Enable wheel control.",
              show_text: !0,
            });
        },
        variant: n.wheel ? "On" : "Off",
      })
    );
  };
}
function S2(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      [i, f] = Xe(),
      [c, m] = he(),
      [p] = ie(c.hover1, { volume: n.sound ? c.volume : 0 }),
      [d] = ie(c.click2, { volume: n.sound ? c.volume : 0 }),
      y = fe(Le.tablet);
    return (
      re(() => {
        n.layout === !0 && s({ side_nav: !1 }), y === !0 && s({ side_nav: !1 });
      }, [n.layout, y]),
      r(e, {
        ...a,
        style: { ...o },
        onMouseEnter: () => p(),
        tapA: () => {
          s({ side_nav: !n.side_nav }),
            d(),
            f({
              text: n.side_nav
                ? "Enable navigation arrows."
                : "Disable navigation arrows.",
              show_text: !0,
            });
        },
        variant: n.side_nav ? "On" : "Off",
      })
    );
  };
}
function L2(e) {
  return (t) => {
    let { style: o, ...a } = t,
      n = fe(Le.phone),
      [s, i] = W(),
      [f, c] = Xe(),
      [m, p] = he(),
      [d] = ie(m.hover1, { volume: s.sound ? m.volume : 0 }),
      [y] = ie(m.click2, { volume: s.sound ? m.volume : 0 });
    return r(e, {
      ...a,
      style: { ...o },
      onMouseEnter: () => d(),
      tapA: () => {
        i({ docker: !s.docker }),
          y(),
          c({
            text: n
              ? "Docker unavailable in the phone."
              : s.layout
                ? "Docker unavailable in grid layout."
                : s.docker
                  ? "Hide navigation docker."
                  : "Show navigation docker.",
            show_text: !0,
          });
      },
      variant: n || s.layout ? "Disable" : s.docker ? "On" : "Off",
    });
  };
}
function _o(e) {
  return (t) => {
    let { style: o, ...a } = t,
      n = fe(Le.phone),
      [s, i] = W(),
      [f, c] = he(),
      [m] = ie(f.slide, { volume: s.sound ? f.volume : 0 });
    return r(e, { ...a, style: { ...o } });
  };
}
function Er(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      [i, f] = Xe(),
      [c, m] = he(),
      [p] = ie(c.hover1, { volume: n.sound ? c.volume : 0 }),
      [d] = ie(c.click2, { volume: n.sound ? c.volume : 0 });
    return r(e, {
      ...a,
      onMouseEnter: () => p(),
      tap: () => {
        s({ language: 0 }),
          d(),
          f({ text: "Switch to English content", show_text: !0 });
      },
    });
  };
}
function Fo(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      [i, f] = Xe(),
      [c, m] = he(),
      [p] = ie(c.hover1, { volume: n.sound ? c.volume : 0 }),
      [d] = ie(c.click2, { volume: n.sound ? c.volume : 0 });
    return r(e, {
      ...a,
      onMouseEnter: () => p(),
      tap: () => {
        s({ language: 1 }),
          d(),
          f({
            text: "\u90E8\u5206\u5185\u5BB9\u5207\u6362\u4E3A\u7B80\u4F53\u4E2D\u6587",
            show_text: !0,
          });
      },
    });
  };
}
function I2(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W(),
      [i, f] = he(),
      [c] = ie(i.popup, { volume: n.sound ? i.volume : 0 }),
      [m] = ie(i.click2, { volume: n.sound ? i.volume : 0 });
    return r(e, {
      ...a,
      style: { ...o },
      variant: n.language == 0 ? "En" : "Chn",
    });
  };
}
function Fe(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W();
    return n.language == 0 && r(e, { layout: !0, ...a });
  };
}
function Re(e) {
  return (t) => {
    let { style: o, ...a } = t,
      [n, s] = W();
    return n.language == 1 && r(e, { layout: !0, ...a, style: { ...t.style } });
  };
}
function V2(e) {
  return (t) => {
    let [o, a] = W();
    return (
      o.language == 0 &&
      r(e, {
        ...t,
        layout: "position",
        style: { ...t.style },
        transition: { type: "spring", stiffness: 178, damping: 28 },
      })
    );
  };
}
function U2(e) {
  return (t) => {
    let [o, a] = W();
    return (
      o.language == 1 &&
      r(e, {
        ...t,
        layout: "position",
        style: { ...t.style },
        transition: { type: "spring", stiffness: 178, damping: 28 },
      })
    );
  };
}
function D2(e) {
  return (t) => {
    let { children: o, style: a, ...n } = t,
      [s, i] = W();
    return r(e, {
      layout: !0,
      ...n,
      style: { ...a },
      children: r(Ue, {
        children: ao.map(o, (f) =>
          oo(f, {
            style: { ...f.props.style },
            initial: {
              opacity: 0,
              filter: "blur(6px)",
              transition: { transition: Ae },
            },
            animate: {
              opacity: 1,
              filter: "blur(0px)",
              transition: { transition: Ae },
            },
            exit: {
              opacity: 0,
              filter: "blur(6px)",
              transition: { transition: Ae },
            },
          }),
        ),
      }),
    });
  };
}
function Ro(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, {
      ...t,
      style: { ...t.style, originX: 0, originY: 1 },
      exit: {
        opacity: 0,
        scale: 0.5,
        transition: { type: "spring", stiffness: 140, damping: 14 },
      },
    });
  };
}
ue.loadFonts([
  "FS;Satoshi-medium",
  "FS;Satoshi-bold",
  "FS;Satoshi-bold italic",
  "FS;Satoshi-medium italic",
]);
var me = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2",
          weight: "500",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2",
          weight: "500",
        },
      ],
    },
  ],
  de = [
    '.framer-1VhOd .framer-styles-preset-9jlebu:not(.rich-text-wrapper), .framer-1VhOd .framer-styles-preset-9jlebu.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 640px) { .framer-1VhOd .framer-styles-preset-9jlebu:not(.rich-text-wrapper), .framer-1VhOd .framer-styles-preset-9jlebu.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 639px) and (min-width: 0px) { .framer-1VhOd .framer-styles-preset-9jlebu:not(.rich-text-wrapper), .framer-1VhOd .framer-styles-preset-9jlebu.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  pe = "framer-1VhOd";
var fa = {};
Ce(fa, { __FramerMetadata__: () => mi, default: () => De });
function kt(e) {
  let { color: t, fill: o, fill_tap: a, hover_effect: n, start: s } = e,
    [i, f] = W(),
    c = tt(),
    m = tt();
  return (
    re(() => {
      s
        ? (c.start({
            rotate: [0, 30, -30, 20, -20, 10, -10, 0],
            transition: {
              duration: 0.8,
              ease: [0.5, 1, 0.89, 1],
              repeat: 1 / 0,
              repeatDelay: 2,
            },
          }),
          m.start({
            y: [0, 1, 1, 1, 1, 1, 1, 0],
            transition: { duration: 0.8, repeat: 1 / 0, repeatDelay: 2 },
          }))
        : (c.stop(), m.stop());
    }, [s]),
    I(l.div, {
      title: "Subscribe",
      style: {
        position: "relative",
        width: 42,
        height: 42,
        borderRadius: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      },
      children: [
        r(l.svg, {
          style: { position: "absolute", originX: 0.5, originY: 0.2 },
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          animate: c,
          children: r("path", {
            d: "M 2.53 14.77 C 2.317 16.164 3.268 17.131 4.432 17.613 C 8.895 19.463 15.105 19.463 19.568 17.613 C 20.732 17.131 21.683 16.163 21.47 14.77 C 21.34 13.913 20.693 13.2 20.214 12.503 C 19.587 11.579 19.525 10.572 19.524 9.5 C 19.525 5.358 16.157 2 12 2 C 7.844 2 4.475 5.358 4.475 9.5 C 4.475 10.572 4.413 11.58 3.785 12.503 C 3.307 13.2 2.661 13.913 2.53 14.77 Z",
            fill: "transparent",
            strokeWidth: "1.8",
            stroke: t,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "",
          }),
        }),
        r(l.svg, {
          style: { position: "absolute" },
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          animate: m,
          children: r("path", {
            d: "M 8 19 C 8.458 20.725 10.075 22 12 22 C 13.925 22 15.541 20.725 16 19",
            fill: "transparent",
            strokeWidth: "1.8",
            stroke: t,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "",
          }),
        }),
      ],
    })
  );
}
kt.defaultProps = {
  color: "#000000",
  fill: "#dddddd",
  fill_tap: "#ffffff",
  start: !0,
};
M(kt, {
  color: { type: x.Color },
  fill: { type: x.Color },
  fill_tap: { type: x.Color },
  start: { type: x.Boolean },
});
var Jn = Y(kt),
  $n = {
    dBXxDpGg9: { hover: !0 },
    Kl68LqE9j: { hover: !0, pressed: !0 },
    LqK6hOvsJ: { hover: !0 },
    n7p8bWC6m: { hover: !0 },
    nBObGXSQT: { hover: !0, pressed: !0 },
    NgHSBu1eL: { hover: !0, pressed: !0 },
    PWFVUVWOQ: { hover: !0 },
    wmCubK61d: { hover: !0 },
  },
  ei = [
    "n7p8bWC6m",
    "LqK6hOvsJ",
    "PWFVUVWOQ",
    "wmCubK61d",
    "dBXxDpGg9",
    "NgHSBu1eL",
    "Kl68LqE9j",
    "nBObGXSQT",
    "BNgYtsM9z",
    "UKjaIInwR",
  ],
  ti = "framer-BZgtU",
  ri = {
    BNgYtsM9z: "framer-v-1izn5ek",
    dBXxDpGg9: "framer-v-1cicka5",
    Kl68LqE9j: "framer-v-1b8eupp",
    LqK6hOvsJ: "framer-v-a8ecb3",
    n7p8bWC6m: "framer-v-quu4j6",
    nBObGXSQT: "framer-v-15bxus8",
    NgHSBu1eL: "framer-v-6rj0k1",
    PWFVUVWOQ: "framer-v-1dwr29x",
    UKjaIInwR: "framer-v-1oxch1x",
    wmCubK61d: "framer-v-7npm7j",
  };
function We(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var ai = { damping: 28, delay: 0, mass: 1, stiffness: 240, type: "spring" },
  ot = (e, t) => `translate(-50%, -50%) ${t}`,
  oi = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  ni = l(F),
  ii = {
    Instagram: "dBXxDpGg9",
    InstagramDark: "nBObGXSQT",
    Linkedin: "PWFVUVWOQ",
    Mail: "LqK6hOvsJ",
    MailDark: "Kl68LqE9j",
    Subscribe: "wmCubK61d",
    Twitter: "n7p8bWC6m",
    TwitterDark: "NgHSBu1eL",
    X: "BNgYtsM9z",
    XDark: "UKjaIInwR",
  },
  si = ({
    bellAnimation: e,
    brightness: t,
    height: o,
    id: a,
    link: n,
    newTab: s,
    smoothScroll: i,
    tap: f,
    tint: c,
    width: m,
    ...p
  }) => {
    var d, y, b, h, w, u;
    return {
      ...p,
      b1BqfRpNR: (d = s ?? p.b1BqfRpNR) !== null && d !== void 0 ? d : !0,
      bUFcBjj2_: i ?? p.bUFcBjj2_,
      dIiBtQnYe: (y = t ?? p.dIiBtQnYe) !== null && y !== void 0 ? y : 100,
      jmykv9nju: n ?? p.jmykv9nju,
      QB6UkYvuv: f ?? p.QB6UkYvuv,
      variant:
        (h = (b = ii[p.variant]) !== null && b !== void 0 ? b : p.variant) !==
          null && h !== void 0
          ? h
          : "n7p8bWC6m",
      VTdF3jUde:
        (w = c ?? p.VTdF3jUde) !== null && w !== void 0
          ? w
          : "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
      ZWLrRxtcU: (u = e ?? p.ZWLrRxtcU) !== null && u !== void 0 ? u : !0,
    };
  },
  li = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  fi = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        VTdF3jUde: c,
        jmykv9nju: m,
        b1BqfRpNR: p,
        bUFcBjj2_: d,
        QB6UkYvuv: y,
        dIiBtQnYe: b,
        ZWLrRxtcU: h,
        ...w
      } = si(e),
      {
        baseVariant: u,
        classNames: k,
        gestureHandlers: g,
        gestureVariant: v,
        setGestureState: C,
        setVariant: L,
        variants: D,
      } = G({
        cycleOrder: ei,
        defaultVariant: "n7p8bWC6m",
        enabledGestures: $n,
        variant: f,
        variantClassNames: ri,
      }),
      _ = li(e, D),
      { activeVariantCallback: Z, delay: X } = ne(u),
      H = Z(async (...mt) => {
        if ((C({ isPressed: !1 }), y && (await y(...mt)) === !1)) return !1;
      }),
      K = T(null),
      te = () => v === "PWFVUVWOQ-hover" || u === "PWFVUVWOQ",
      le = () =>
        !(
          [
            "LqK6hOvsJ-hover",
            "PWFVUVWOQ-hover",
            "wmCubK61d-hover",
            "dBXxDpGg9-hover",
            "Kl68LqE9j-pressed",
            "nBObGXSQT-pressed",
            "Kl68LqE9j-hover",
            "nBObGXSQT-hover",
          ].includes(v) ||
          [
            "LqK6hOvsJ",
            "PWFVUVWOQ",
            "wmCubK61d",
            "dBXxDpGg9",
            "Kl68LqE9j",
            "nBObGXSQT",
            "BNgYtsM9z",
            "UKjaIInwR",
          ].includes(u)
        ),
      ce = () =>
        !!(
          ["LqK6hOvsJ-hover", "Kl68LqE9j-pressed", "Kl68LqE9j-hover"].includes(
            v,
          ) || ["LqK6hOvsJ", "Kl68LqE9j"].includes(u)
        ),
      ge = () => v === "wmCubK61d-hover" || u === "wmCubK61d",
      ye = () =>
        !!(
          ["dBXxDpGg9-hover", "nBObGXSQT-pressed", "nBObGXSQT-hover"].includes(
            v,
          ) || ["dBXxDpGg9", "nBObGXSQT"].includes(u)
        ),
      we = () =>
        !!(
          [
            "LqK6hOvsJ-hover",
            "NgHSBu1eL-pressed",
            "Kl68LqE9j-pressed",
            "nBObGXSQT-pressed",
            "NgHSBu1eL-hover",
            "Kl68LqE9j-hover",
            "nBObGXSQT-hover",
          ].includes(v) ||
          [
            "LqK6hOvsJ",
            "NgHSBu1eL",
            "Kl68LqE9j",
            "nBObGXSQT",
            "BNgYtsM9z",
            "UKjaIInwR",
          ].includes(u)
        ),
      Se = A(),
      be = [],
      $e = J();
    return r(B, {
      id: i ?? Se,
      children: r(ni, {
        animate: D,
        initial: !1,
        children: r(oi, {
          value: ai,
          children: r(Ye, {
            href: m,
            openInNewTab: p,
            smoothScroll: d,
            children: I(l.a, {
              ...w,
              ...g,
              className: `${E(ti, ...be, "framer-quu4j6", s, k)} framer-gzp771`,
              "data-framer-name": "Twitter",
              "data-highlight": !0,
              layoutDependency: _,
              layoutId: "n7p8bWC6m",
              onTap: H,
              ref: t ?? K,
              style: {
                backgroundColor: c,
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                filter: `brightness(${parseFloat(b) / 100})`,
                WebkitFilter: `brightness(${parseFloat(b) / 100})`,
                ...n,
              },
              variants: {
                "dBXxDpGg9-hover": {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                },
                "LqK6hOvsJ-hover": {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                },
                "n7p8bWC6m-hover": {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                },
                "PWFVUVWOQ-hover": {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                },
                Kl68LqE9j: { backgroundColor: "rgb(61, 61, 61)" },
                nBObGXSQT: { backgroundColor: "rgb(61, 61, 61)" },
                NgHSBu1eL: { backgroundColor: "rgb(61, 61, 61)" },
                UKjaIInwR: { backgroundColor: "rgb(61, 61, 61)" },
              },
              ...We(
                {
                  "dBXxDpGg9-hover": { "data-framer-name": void 0 },
                  "Kl68LqE9j-hover": { "data-framer-name": void 0 },
                  "Kl68LqE9j-pressed": { "data-framer-name": void 0 },
                  "LqK6hOvsJ-hover": { "data-framer-name": void 0 },
                  "n7p8bWC6m-hover": { "data-framer-name": void 0 },
                  "nBObGXSQT-hover": { "data-framer-name": void 0 },
                  "nBObGXSQT-pressed": { "data-framer-name": void 0 },
                  "NgHSBu1eL-hover": { "data-framer-name": void 0 },
                  "NgHSBu1eL-pressed": { "data-framer-name": void 0 },
                  "PWFVUVWOQ-hover": { "data-framer-name": void 0 },
                  "wmCubK61d-hover": { "data-framer-name": void 0 },
                  BNgYtsM9z: { "data-framer-name": "X" },
                  dBXxDpGg9: { "data-framer-name": "Instagram" },
                  Kl68LqE9j: { "data-framer-name": "MailDark" },
                  LqK6hOvsJ: { "data-framer-name": "Mail" },
                  nBObGXSQT: { "data-framer-name": "InstagramDark" },
                  NgHSBu1eL: { "data-framer-name": "TwitterDark" },
                  PWFVUVWOQ: { "data-framer-name": "Linkedin" },
                  UKjaIInwR: { "data-framer-name": "XDark" },
                  wmCubK61d: { "data-framer-name": "Subscribe" },
                },
                u,
                v,
              ),
              children: [
                te() &&
                  r(l.div, {
                    className: "framer-ol4ll6",
                    layoutDependency: _,
                    layoutId: "kHrp7hC2z",
                    children:
                      te() &&
                      r(ee, {
                        className: "framer-1wj4odk",
                        "data-framer-name": "linkedin_01",
                        layout: "position",
                        layoutDependency: _,
                        layoutId: "HECVp70Ct",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 7 10 L 7 17 M 11 13 L 11 17 M 11 13 C 11 11.343 12.343 10 14 10 C 15.657 10 17 11.343 17 13 L 17 17 M 11 13 L 11 10" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 7.008 7 L 6.999 7" fill="transparent" stroke-width="2" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 2.5 12 C 2.5 7.522 2.5 5.282 3.891 3.891 C 5.282 2.5 7.521 2.5 12 2.5 C 16.478 2.5 18.718 2.5 20.109 3.891 C 21.5 5.282 21.5 7.521 21.5 12 C 21.5 16.478 21.5 18.718 20.109 20.109 C 18.717 21.5 16.479 21.5 12 21.5 C 7.522 21.5 5.282 21.5 3.891 20.109 C 2.5 18.717 2.5 16.479 2.5 12 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 10208705465,
                        withExternalLayout: !0,
                        ...We(
                          { PWFVUVWOQ: { svgContentId: 10687262499 } },
                          u,
                          v,
                        ),
                      }),
                  }),
                le() &&
                  r(l.div, {
                    className: "framer-gowec5",
                    layoutDependency: _,
                    layoutId: "HF2508VzH",
                    ...We(
                      { "n7p8bWC6m-hover": { transformTemplate: ot } },
                      u,
                      v,
                    ),
                    children: r(ee, {
                      className: "framer-hpn9r5",
                      "data-framer-name": "twitter",
                      layout: "position",
                      layoutDependency: _,
                      layoutId: "sZrizjLQV",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 24"><path d="M 2 18.5 C 3.765 19.521 5.814 20 8 20 C 14.48 20 19.762 14.863 19.992 8.438 L 22 4.5 L 18.646 5 C 17.916 4.354 16.975 3.999 16 4 C 13.428 4 11.5 6.517 12.12 8.98 C 8.568 9.21 5.349 7.021 3.487 4.105 C 2.251 8.302 3.397 13.356 6.5 16.471 C 6.5 17.647 3.5 18.349 2 18.5 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 11777092790,
                      withExternalLayout: !0,
                      ...We(
                        {
                          NgHSBu1eL: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 24"><path d="M 2 18.5 C 3.765 19.521 5.814 20 8 20 C 14.48 20 19.762 14.863 19.992 8.438 L 22 4.5 L 18.646 5 C 17.916 4.354 16.975 3.999 16 4 C 13.428 4 11.5 6.517 12.12 8.98 C 8.568 9.21 5.349 7.021 3.487 4.105 C 2.251 8.302 3.397 13.356 6.5 16.471 C 6.5 17.647 3.5 18.349 2 18.5 Z" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                            svgContentId: 10941907944,
                          },
                        },
                        u,
                        v,
                      ),
                    }),
                  }),
                r(l.div, {
                  className: "framer-84lq70",
                  "data-framer-name": "Arrow",
                  layoutDependency: _,
                  layoutId: "vGIl_rER7",
                  style: { opacity: 1, scale: 1 },
                  transformTemplate: ot,
                  variants: {
                    BNgYtsM9z: { opacity: 0, scale: 0.5 },
                    UKjaIInwR: { opacity: 0, scale: 0.5 },
                  },
                  ...We(
                    {
                      "dBXxDpGg9-hover": { transformTemplate: void 0 },
                      "Kl68LqE9j-hover": { transformTemplate: void 0 },
                      "Kl68LqE9j-pressed": { transformTemplate: void 0 },
                      "LqK6hOvsJ-hover": { transformTemplate: void 0 },
                      "n7p8bWC6m-hover": { transformTemplate: void 0 },
                      "nBObGXSQT-hover": { transformTemplate: void 0 },
                      "nBObGXSQT-pressed": { transformTemplate: void 0 },
                      "NgHSBu1eL-hover": { transformTemplate: void 0 },
                      "NgHSBu1eL-pressed": { transformTemplate: void 0 },
                      "PWFVUVWOQ-hover": { transformTemplate: void 0 },
                      BNgYtsM9z: { transformTemplate: void 0 },
                      UKjaIInwR: { transformTemplate: void 0 },
                    },
                    u,
                    v,
                  ),
                  children: r(ee, {
                    className: "framer-uux9vg",
                    "data-framer-name": "arrow_up_right_01_round",
                    layout: "position",
                    layoutDependency: _,
                    layoutId: "VP4qRpDLb",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 17 7 L 6 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 11 6.132 C 11 6.132 16.634 5.657 17.488 6.512 C 18.343 7.366 17.868 13 17.868 13" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 9795536454,
                    withExternalLayout: !0,
                    ...We(
                      {
                        Kl68LqE9j: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 17 7 L 6 18" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 11 6.132 C 11 6.132 16.634 5.657 17.488 6.512 C 18.343 7.366 17.868 13 17.868 13" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                          svgContentId: 10794643526,
                        },
                        nBObGXSQT: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 17 7 L 6 18" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 11 6.132 C 11 6.132 16.634 5.657 17.488 6.512 C 18.343 7.366 17.868 13 17.868 13" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                          svgContentId: 10794643526,
                        },
                        NgHSBu1eL: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 17 7 L 6 18" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 11 6.132 C 11 6.132 16.634 5.657 17.488 6.512 C 18.343 7.366 17.868 13 17.868 13" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                          svgContentId: 10794643526,
                        },
                        UKjaIInwR: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 17 7 L 6 18" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 11 6.132 C 11 6.132 16.634 5.657 17.488 6.512 C 18.343 7.366 17.868 13 17.868 13" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                          svgContentId: 10794643526,
                        },
                      },
                      u,
                      v,
                    ),
                  }),
                }),
                ce() &&
                  r(l.div, {
                    className: "framer-1jdaa0i",
                    layoutDependency: _,
                    layoutId: "ZY2NnjSBJ",
                    children: r(ee, {
                      className: "framer-enwhhx",
                      "data-framer-name": "mail_01",
                      layout: "position",
                      layoutDependency: _,
                      layoutId: "uJCG2wbIW",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 24"><path d="M 1.5 6 L 8.413 9.917 C 10.962 11.361 12.038 11.361 14.587 9.917 L 21.5 6" fill="transparent" stroke-width="1.5" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 1.517 13.476 C 1.582 16.541 1.615 18.074 2.746 19.209 C 3.877 20.345 5.451 20.384 8.6 20.463 C 10.54 20.513 12.462 20.513 14.402 20.463 C 17.551 20.384 19.125 20.345 20.256 19.209 C 21.387 18.074 21.42 16.541 21.486 13.476 C 21.506 12.49 21.506 11.51 21.486 10.524 C 21.42 7.459 21.387 5.926 20.256 4.791 C 19.125 3.655 17.551 3.616 14.402 3.537 C 12.468 3.488 10.533 3.488 8.6 3.537 C 5.451 3.616 3.877 3.655 2.746 4.791 C 1.615 5.926 1.582 7.459 1.516 10.524 C 1.495 11.508 1.495 12.492 1.516 13.476 Z" fill="transparent" stroke-width="1.5" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 11635495202,
                      withExternalLayout: !0,
                      ...We(
                        {
                          Kl68LqE9j: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 22"><path d="M 1.5 6 L 8.413 9.917 C 10.962 11.361 12.038 11.361 14.587 9.917 L 21.5 6" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 1.517 13.476 C 1.582 16.541 1.615 18.074 2.746 19.209 C 3.877 20.345 5.451 20.384 8.6 20.463 C 10.54 20.513 12.462 20.513 14.402 20.463 C 17.551 20.384 19.125 20.345 20.256 19.209 C 21.387 18.074 21.42 16.541 21.486 13.476 C 21.506 12.49 21.506 11.51 21.486 10.524 C 21.42 7.459 21.387 5.926 20.256 4.791 C 19.125 3.655 17.551 3.616 14.402 3.537 C 12.468 3.488 10.533 3.488 8.6 3.537 C 5.451 3.616 3.877 3.655 2.746 4.791 C 1.615 5.926 1.582 7.459 1.516 10.524 C 1.495 11.508 1.495 12.492 1.516 13.476 Z" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                            svgContentId: 8733930123,
                          },
                          LqK6hOvsJ: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 24"><path d="M 1.5 6 L 8.413 9.917 C 10.962 11.361 12.038 11.361 14.587 9.917 L 21.5 6" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 1.517 13.476 C 1.582 16.541 1.615 18.074 2.746 19.209 C 3.877 20.345 5.451 20.384 8.6 20.463 C 10.54 20.513 12.462 20.513 14.402 20.463 C 17.551 20.384 19.125 20.345 20.256 19.209 C 21.387 18.074 21.42 16.541 21.486 13.476 C 21.506 12.49 21.506 11.51 21.486 10.524 C 21.42 7.459 21.387 5.926 20.256 4.791 C 19.125 3.655 17.551 3.616 14.402 3.537 C 12.468 3.488 10.533 3.488 8.6 3.537 C 5.451 3.616 3.877 3.655 2.746 4.791 C 1.615 5.926 1.582 7.459 1.516 10.524 C 1.495 11.508 1.495 12.492 1.516 13.476 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                            svgContentId: 12465695260,
                          },
                        },
                        u,
                        v,
                      ),
                    }),
                  }),
                ge() &&
                  r(Q, {
                    children: r(l.div, {
                      className: "framer-psz2v1-container",
                      layoutDependency: _,
                      layoutId: "nRDFgUZl7-container",
                      children: r(kt, {
                        color:
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                        fill_tap:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        fill: "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
                        height: "100%",
                        id: "nRDFgUZl7",
                        layoutId: "nRDFgUZl7",
                        start: h,
                        width: "100%",
                      }),
                    }),
                  }),
                ye() &&
                  r(l.div, {
                    className: "framer-1fj4w55",
                    layoutDependency: _,
                    layoutId: "KvEhSKjO4",
                    children:
                      ye() &&
                      r(ee, {
                        className: "framer-2jdod3",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: _,
                        layoutId: "Hyi5sWZWO",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 2.5 12 C 2.5 7.522 2.5 5.282 3.891 3.891 C 5.282 2.5 7.521 2.5 12 2.5 C 16.478 2.5 18.718 2.5 20.109 3.891 C 21.5 5.282 21.5 7.521 21.5 12 C 21.5 16.478 21.5 18.718 20.109 20.109 C 18.717 21.5 16.479 21.5 12 21.5 C 7.522 21.5 5.282 21.5 3.891 20.109 C 2.5 18.717 2.5 16.479 2.5 12 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 16.5 12 C 16.5 14.485 14.485 16.5 12 16.5 C 9.515 16.5 7.5 14.485 7.5 12 C 7.5 9.515 9.515 7.5 12 7.5 C 14.485 7.5 16.5 9.515 16.5 12 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 17.508 6.5 L 17.498 6.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 10305749025,
                        withExternalLayout: !0,
                        ...We(
                          {
                            dBXxDpGg9: { svgContentId: 12726454046 },
                            nBObGXSQT: {
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 2.5 12 C 2.5 7.522 2.5 5.282 3.891 3.891 C 5.282 2.5 7.521 2.5 12 2.5 C 16.478 2.5 18.718 2.5 20.109 3.891 C 21.5 5.282 21.5 7.521 21.5 12 C 21.5 16.478 21.5 18.718 20.109 20.109 C 18.717 21.5 16.479 21.5 12 21.5 C 7.522 21.5 5.282 21.5 3.891 20.109 C 2.5 18.717 2.5 16.479 2.5 12 Z" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 16.5 12 C 16.5 14.485 14.485 16.5 12 16.5 C 9.515 16.5 7.5 14.485 7.5 12 C 7.5 9.515 9.515 7.5 12 7.5 C 14.485 7.5 16.5 9.515 16.5 12 Z" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 17.508 6.5 L 17.498 6.5" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                              svgContentId: 12850698167,
                            },
                          },
                          u,
                          v,
                        ),
                      }),
                  }),
                we() &&
                  r(l.div, {
                    className: "framer-ryhj4h",
                    "data-framer-name": "X",
                    layoutDependency: _,
                    layoutId: "YZw4JXVjH",
                    style: { opacity: 1, scale: 1 },
                    variants: {
                      Kl68LqE9j: { opacity: 0, scale: 0.5 },
                      LqK6hOvsJ: { opacity: 0, scale: 0.5 },
                      nBObGXSQT: { opacity: 0, scale: 0.5 },
                      NgHSBu1eL: { opacity: 0, scale: 0.5 },
                    },
                    ...We(
                      {
                        BNgYtsM9z: { transformTemplate: ot },
                        Kl68LqE9j: { transformTemplate: ot },
                        LqK6hOvsJ: { transformTemplate: ot },
                        nBObGXSQT: { transformTemplate: ot },
                        NgHSBu1eL: { transformTemplate: ot },
                        UKjaIInwR: { transformTemplate: ot },
                      },
                      u,
                      v,
                    ),
                    children: r(ee, {
                      className: "framer-1b270hl",
                      "data-framer-name": "X",
                      layout: "position",
                      layoutDependency: _,
                      layoutId: "W4PkoLOcU",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 19 5 L 5 19 M 5 5 L 19 19" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                      svgContentId: 12018964311,
                      withExternalLayout: !0,
                      ...We(
                        {
                          Kl68LqE9j: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 19 5 L 5 19 M 5 5 L 19 19" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                            svgContentId: 10702977805,
                          },
                          nBObGXSQT: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 19 5 L 5 19 M 5 5 L 19 19" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                            svgContentId: 10567742134,
                          },
                          NgHSBu1eL: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 19 5 L 5 19 M 5 5 L 19 19" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                            svgContentId: 10567742134,
                          },
                          UKjaIInwR: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 19 5 L 5 19 M 5 5 L 19 19" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                            svgContentId: 10567742134,
                          },
                        },
                        u,
                        v,
                      ),
                    }),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  ci = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-BZgtU.framer-gzp771, .framer-BZgtU .framer-gzp771 { display: block; }",
    ".framer-BZgtU.framer-quu4j6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 54px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 54px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-BZgtU .framer-ol4ll6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 24px; min-width: 24px; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-BZgtU .framer-1wj4odk, .framer-BZgtU .framer-uux9vg, .framer-BZgtU .framer-2jdod3, .framer-BZgtU .framer-1b270hl { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-BZgtU .framer-gowec5, .framer-BZgtU .framer-1jdaa0i, .framer-BZgtU .framer-ryhj4h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-BZgtU .framer-hpn9r5, .framer-BZgtU .framer-enwhhx { flex: none; height: 24px; position: relative; width: 23px; }",
    ".framer-BZgtU .framer-84lq70 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: -15%; overflow: visible; padding: 0px; position: absolute; top: 115%; width: min-content; z-index: 1; }",
    ".framer-BZgtU .framer-psz2v1-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-BZgtU .framer-1fj4w55 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 24px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-BZgtU.framer-quu4j6, .framer-BZgtU .framer-ol4ll6, .framer-BZgtU .framer-gowec5, .framer-BZgtU .framer-84lq70, .framer-BZgtU .framer-1jdaa0i, .framer-BZgtU .framer-1fj4w55, .framer-BZgtU .framer-ryhj4h { gap: 0px; } .framer-BZgtU.framer-quu4j6 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-BZgtU.framer-quu4j6 > :first-child, .framer-BZgtU .framer-ol4ll6 > :first-child, .framer-BZgtU .framer-gowec5 > :first-child, .framer-BZgtU .framer-84lq70 > :first-child, .framer-BZgtU .framer-1jdaa0i > :first-child, .framer-BZgtU .framer-1fj4w55 > :first-child, .framer-BZgtU .framer-ryhj4h > :first-child { margin-left: 0px; } .framer-BZgtU.framer-quu4j6 > :last-child, .framer-BZgtU .framer-ol4ll6 > :last-child, .framer-BZgtU .framer-gowec5 > :last-child, .framer-BZgtU .framer-84lq70 > :last-child, .framer-BZgtU .framer-1jdaa0i > :last-child, .framer-BZgtU .framer-1fj4w55 > :last-child, .framer-BZgtU .framer-ryhj4h > :last-child { margin-right: 0px; } .framer-BZgtU .framer-ol4ll6 > *, .framer-BZgtU .framer-gowec5 > *, .framer-BZgtU .framer-84lq70 > *, .framer-BZgtU .framer-1jdaa0i > *, .framer-BZgtU .framer-1fj4w55 > *, .framer-BZgtU .framer-ryhj4h > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-BZgtU.framer-v-a8ecb3 .framer-84lq70, .framer-BZgtU.framer-v-1cicka5 .framer-84lq70, .framer-BZgtU.framer-v-6rj0k1 .framer-84lq70, .framer-BZgtU.framer-v-1b8eupp .framer-84lq70, .framer-BZgtU.framer-v-15bxus8 .framer-1fj4w55 { order: 5; }",
    ".framer-BZgtU.framer-v-a8ecb3 .framer-1jdaa0i, .framer-BZgtU.framer-v-1b8eupp .framer-1jdaa0i, .framer-BZgtU.framer-v-15bxus8 .framer-84lq70 { order: 6; }",
    ".framer-BZgtU.framer-v-a8ecb3 .framer-ryhj4h, .framer-BZgtU.framer-v-1b8eupp .framer-ryhj4h, .framer-BZgtU.framer-v-15bxus8 .framer-ryhj4h { left: 50%; order: 4; position: absolute; top: 50%; }",
    ".framer-BZgtU.framer-v-1dwr29x .framer-ol4ll6 { min-height: unset; min-width: unset; }",
    ".framer-BZgtU.framer-v-1cicka5 .framer-1fj4w55, .framer-BZgtU.framer-v-6rj0k1 .framer-gowec5 { order: 4; }",
    ".framer-BZgtU.framer-v-6rj0k1 .framer-ryhj4h { left: 50%; order: 3; position: absolute; top: 50%; }",
    ".framer-BZgtU.framer-v-1b8eupp .framer-enwhhx { height: 22px; }",
    ".framer-BZgtU.framer-v-1izn5ek .framer-84lq70, .framer-BZgtU.framer-v-1oxch1x .framer-84lq70, .framer-BZgtU.framer-v-quu4j6.hover .framer-84lq70, .framer-BZgtU.framer-v-a8ecb3.hover .framer-84lq70, .framer-BZgtU.framer-v-1dwr29x.hover .framer-84lq70, .framer-BZgtU.framer-v-1cicka5.hover .framer-84lq70, .framer-BZgtU.framer-v-6rj0k1.pressed .framer-84lq70, .framer-BZgtU.framer-v-1b8eupp.pressed .framer-84lq70, .framer-BZgtU.framer-v-6rj0k1.hover .framer-84lq70, .framer-BZgtU.framer-v-1b8eupp.hover .framer-84lq70 { left: unset; position: relative; top: unset; }",
    ".framer-BZgtU.framer-v-1izn5ek .framer-ryhj4h, .framer-BZgtU.framer-v-1oxch1x .framer-ryhj4h { left: 50%; position: absolute; top: 50%; z-index: 1; }",
    ".framer-BZgtU.framer-v-quu4j6.hover .framer-gowec5 { left: 122%; position: absolute; top: -22%; z-index: 1; }",
    ".framer-BZgtU.framer-v-a8ecb3.hover .framer-1jdaa0i, .framer-BZgtU.framer-v-1cicka5.hover .framer-1fj4w55 { position: absolute; right: -24px; top: -24px; z-index: 1; }",
    ".framer-BZgtU.framer-v-1dwr29x.hover .framer-ol4ll6 { min-height: unset; min-width: unset; position: absolute; right: -24px; top: -24px; z-index: 1; }",
    ".framer-BZgtU.framer-v-6rj0k1.pressed .framer-gowec5, .framer-BZgtU.framer-v-6rj0k1.hover .framer-gowec5 { position: absolute; right: -22px; top: -24px; z-index: 1; }",
    ".framer-BZgtU.framer-v-1b8eupp.pressed .framer-1jdaa0i, .framer-BZgtU.framer-v-1b8eupp.hover .framer-1jdaa0i { position: absolute; right: -22px; top: -22px; z-index: 1; }",
    ".framer-BZgtU.framer-v-15bxus8.pressed .framer-84lq70, .framer-BZgtU.framer-v-15bxus8.hover .framer-84lq70 { left: unset; order: 5; position: relative; top: unset; }",
    ".framer-BZgtU.framer-v-15bxus8.pressed .framer-1fj4w55, .framer-BZgtU.framer-v-15bxus8.hover .framer-1fj4w55 { order: 4; position: absolute; right: -23px; top: -24px; z-index: 1; }",
    ".framer-BZgtU.framer-v-15bxus8.pressed .framer-ryhj4h, .framer-BZgtU.framer-v-15bxus8.hover .framer-ryhj4h { order: 9; }",
  ],
  jt = q(fi, ci, "framer-BZgtU"),
  De = jt;
jt.displayName = "Button/Contact";
jt.defaultProps = { height: 54, width: 54 };
M(jt, {
  variant: {
    options: [
      "n7p8bWC6m",
      "LqK6hOvsJ",
      "PWFVUVWOQ",
      "wmCubK61d",
      "dBXxDpGg9",
      "NgHSBu1eL",
      "Kl68LqE9j",
      "nBObGXSQT",
      "BNgYtsM9z",
      "UKjaIInwR",
    ],
    optionTitles: [
      "Twitter",
      "Mail",
      "Linkedin",
      "Subscribe",
      "Instagram",
      "TwitterDark",
      "MailDark",
      "InstagramDark",
      "X",
      "XDark",
    ],
    title: "Variant",
    type: x.Enum,
  },
  VTdF3jUde: {
    defaultValue:
      'var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {"name":"White 100"} */',
    title: "Tint",
    type: x.Color,
  },
  jmykv9nju: { title: "Link", type: x.Link },
  b1BqfRpNR: { defaultValue: !0, title: "New Tab", type: x.Boolean },
  bUFcBjj2_: { defaultValue: !1, title: "Smooth Scroll", type: x.Boolean },
  QB6UkYvuv: { title: "Tap", type: x.EventHandler },
  dIiBtQnYe: { defaultValue: 100, title: "Brightness", type: x.Number },
  ZWLrRxtcU: { defaultValue: !0, title: "Bell Animation", type: x.Boolean },
});
z(jt, [{ explicitInter: !0, fonts: [] }, ...Jn], {
  supportsExplicitInterCodegen: !0,
});
var mi = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerDlnn4rFKe",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerIntrinsicWidth: "54",
        framerIntrinsicHeight: "54",
        framerVariables:
          '{"VTdF3jUde":"tint","jmykv9nju":"link","b1BqfRpNR":"newTab","bUFcBjj2_":"smoothScroll","QB6UkYvuv":"tap","dIiBtQnYe":"brightness","ZWLrRxtcU":"bellAnimation"}',
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"LqK6hOvsJ":{"layout":["fixed","fixed"]},"PWFVUVWOQ":{"layout":["fixed","fixed"]},"wmCubK61d":{"layout":["fixed","fixed"]},"dBXxDpGg9":{"layout":["fixed","fixed"]},"NgHSBu1eL":{"layout":["fixed","fixed"]},"Kl68LqE9j":{"layout":["fixed","fixed"]},"nBObGXSQT":{"layout":["fixed","fixed"]},"BNgYtsM9z":{"layout":["fixed","fixed"]},"UKjaIInwR":{"layout":["fixed","fixed"]},"APvIsXdFD":{"layout":["fixed","fixed"]},"GVGC9EtiV":{"layout":["fixed","fixed"]},"q3GNPHDUm":{"layout":["fixed","fixed"]},"RzK3sLKoW":{"layout":["fixed","fixed"]},"ieXEaecni":{"layout":["fixed","fixed"]},"dJZipBoce":{"layout":["fixed","fixed"]},"wWoZwHE9N":{"layout":["fixed","fixed"]},"IcWwRyyfA":{"layout":["fixed","fixed"]},"VbiDDSHLp":{"layout":["fixed","fixed"]},"AkFOO9v3W":{"layout":["fixed","fixed"]},"aB_Wd3sIi":{"layout":["fixed","fixed"]}}}',
        framerComponentViewportWidth: "true",
        framerImmutableVariables: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var di = Y(De),
  pi = at(l.div),
  ui = Ee(l.div),
  hi = ["YRapQNpGe", "Ay1tEuQ_v", "qrHxSd5Yo", "qf42jsMmk"],
  So = "framer-3pr2D",
  gi = {
    Ay1tEuQ_v: "framer-v-1bkgd7v",
    qf42jsMmk: "framer-v-1sms8mh",
    qrHxSd5Yo: "framer-v-whhqtl",
    YRapQNpGe: "framer-v-ccytp",
  };
function Lo(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var yi = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Io = { damping: 14, delay: 0, mass: 1, stiffness: 140, type: "spring" },
  vi = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Io,
    x: 0,
    y: 10,
  },
  xi = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Io,
    x: 0,
    y: 0,
  },
  bi = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 10,
  },
  wi = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  ki = ({ children: e, blockDocumentScrolling: t, enabled: o = !0 }) => {
    let [a, n] = Ge({ blockDocumentScrolling: t });
    return e({
      hide: () => n(!1),
      show: () => n(!0),
      toggle: () => n(!a),
      visible: o && a,
    });
  },
  Ci = l(F),
  _i = {
    Dark: "qf42jsMmk",
    Hover: "YRapQNpGe",
    Mobile: "Ay1tEuQ_v",
    Tinted: "qrHxSd5Yo",
  },
  Fi = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = _i[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "YRapQNpGe",
    };
  },
  Ri = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Si = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = Fi(e),
      {
        baseVariant: m,
        classNames: p,
        gestureHandlers: d,
        gestureVariant: y,
        setGestureState: b,
        setVariant: h,
        variants: w,
      } = G({
        cycleOrder: hi,
        defaultVariant: "YRapQNpGe",
        variant: f,
        variantClassNames: gi,
      }),
      u = Ri(e, w),
      { activeVariantCallback: k, delay: g } = ne(m),
      v = ({ overlay: H, paginationInfo: K }) =>
        k(async (...te) => {
          b({ isHovered: !0 }), H.show();
        }),
      C = T(null),
      L = () => m !== "Ay1tEuQ_v",
      D = T(null),
      _ = A(),
      Z = [pe],
      X = J();
    return r(B, {
      id: i ?? _,
      children: r(Ci, {
        animate: w,
        initial: !1,
        children: r(ki, {
          blockDocumentScrolling: !1,
          enabled: L(),
          children: (H) =>
            r(qe, {
              children: r(wi, {
                value: yi,
                children: I(l.div, {
                  ...c,
                  ...d,
                  className: E(So, ...Z, "framer-ccytp", s, p),
                  "data-framer-name": "Hover",
                  "data-highlight": !0,
                  id: `${i}-ccytp`,
                  layoutDependency: u,
                  layoutId: "YRapQNpGe",
                  onMouseEnter: v({ overlay: H }),
                  ref: t ?? C,
                  style: {
                    filter: "brightness(1)",
                    WebkitFilter: "brightness(1)",
                    ...n,
                  },
                  variants: {
                    qrHxSd5Yo: {
                      filter: "brightness(0.95)",
                      WebkitFilter: "brightness(0.95)",
                    },
                  },
                  ...Lo(
                    {
                      Ay1tEuQ_v: {
                        "data-framer-name": "Mobile",
                        "data-highlight": void 0,
                        onMouseEnter: void 0,
                      },
                      qf42jsMmk: { "data-framer-name": "Dark" },
                      qrHxSd5Yo: { "data-framer-name": "Tinted" },
                    },
                    m,
                    y,
                  ),
                  children: [
                    r(pi, {
                      className: "framer-djenl9",
                      layoutDependency: u,
                      layoutId: "oexRTPl0O",
                      children: r(Q, {
                        children: r(l.div, {
                          className: "framer-1h6b0gw-container",
                          layoutDependency: u,
                          layoutId: "XXrhBsGXN-container",
                          children: r(De, {
                            b1BqfRpNR: !0,
                            bUFcBjj2_: !1,
                            dIiBtQnYe: 100,
                            height: "100%",
                            id: "XXrhBsGXN",
                            jmykv9nju: "https://www.instagram.com/jayzhushi/",
                            layoutId: "XXrhBsGXN",
                            variant: "dBXxDpGg9",
                            VTdF3jUde:
                              "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                            width: "100%",
                            ZWLrRxtcU: !0,
                            ...Lo(
                              { qf42jsMmk: { variant: "nBObGXSQT" } },
                              m,
                              y,
                            ),
                          }),
                        }),
                      }),
                    }),
                    L() &&
                      r(Ue, {
                        children:
                          H.visible &&
                          r(Qe, {
                            alignment: "start",
                            anchorRef: t ?? C,
                            className: E(So, p, ...Z),
                            collisionDetection: !1,
                            "data-framer-portal-id": `${i}-ccytp`,
                            offsetX: 0,
                            offsetY: -10,
                            onDismiss: H.hide,
                            placement: "top",
                            portalSelector: "#overlay",
                            safeArea: !0,
                            zIndex: 11,
                            children: r(ui, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: xi,
                              className: "framer-6cpd0i",
                              exit: vi,
                              initial: bi,
                              layoutDependency: u,
                              layoutId: "jFUGYxb9H",
                              ref: D,
                              role: "dialog",
                              style: {
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                transformPerspective: 1200,
                              },
                              children: I(l.div, {
                                className: "framer-5qsujr",
                                "data-framer-name": "TwitterCard",
                                layoutDependency: u,
                                layoutId: "JJElUaEAl",
                                style: {
                                  backgroundColor:
                                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                                children: [
                                  r(l.div, {
                                    className: "framer-z4vs9d",
                                    layoutDependency: u,
                                    layoutId: "Eb16u5lA6",
                                    style: {
                                      background:
                                        "linear-gradient(50deg, rgb(249, 206, 52) 0%, rgb(238, 42, 123) 50.48170682814015%, rgb(98, 40, 215) 100%)",
                                      borderBottomLeftRadius: 40,
                                      borderBottomRightRadius: 40,
                                      borderTopLeftRadius: 40,
                                      borderTopRightRadius: 40,
                                    },
                                    children: r(rt, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 512,
                                        intrinsicWidth: 512,
                                        pixelHeight: 512,
                                        pixelWidth: 512,
                                        src: "https://framerusercontent.com/images/Cv7tUcy1rcgOmuD5YAOXl0TIUUg.jpg",
                                      },
                                      className: "framer-12nxb5v",
                                      "data-border": !0,
                                      layoutDependency: u,
                                      layoutId: "Be1Gtq2cr",
                                      style: {
                                        "--border-bottom-width": "2px",
                                        "--border-color":
                                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                        "--border-left-width": "2px",
                                        "--border-right-width": "2px",
                                        "--border-style": "solid",
                                        "--border-top-width": "2px",
                                        borderBottomLeftRadius: 40,
                                        borderBottomRightRadius: 40,
                                        borderTopLeftRadius: 40,
                                        borderTopRightRadius: 40,
                                      },
                                    }),
                                  }),
                                  I(l.div, {
                                    className: "framer-7drpt4",
                                    layoutDependency: u,
                                    layoutId: "BMJ1qMSm_",
                                    children: [
                                      r($, {
                                        __fromCanvasComponent: !0,
                                        children: r(F, {
                                          children: r(l.p, {
                                            className:
                                              "framer-styles-preset-9jlebu",
                                            "data-styles-preset": "sSyE5_N0_",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                                            },
                                            children: "@jayzhushi",
                                          }),
                                        }),
                                        className: "framer-1qysy23",
                                        fonts: ["Inter"],
                                        layoutDependency: u,
                                        layoutId: "XMrQDjWCQ",
                                        style: {
                                          "--extracted-r6o4lv":
                                            "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                          "--framer-link-text-color":
                                            "rgb(0, 153, 255)",
                                          "--framer-link-text-decoration":
                                            "underline",
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      r($, {
                                        __fromCanvasComponent: !0,
                                        children: r(F, {
                                          children: r(l.p, {
                                            className:
                                              "framer-styles-preset-9jlebu",
                                            "data-styles-preset": "sSyE5_N0_",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, var(--token-cb4dbe66-4559-4dce-ac95-ee2520bf67ec, rgba(0, 0, 0, 0.7)))",
                                            },
                                            children: "\u5B63\u6770",
                                          }),
                                        }),
                                        className: "framer-sgbo9l",
                                        fonts: ["Inter"],
                                        layoutDependency: u,
                                        layoutId: "EC_RSsHHb",
                                        style: {
                                          "--extracted-r6o4lv":
                                            "var(--token-cb4dbe66-4559-4dce-ac95-ee2520bf67ec, rgba(0, 0, 0, 0.7))",
                                          "--framer-link-text-color":
                                            "rgb(0, 153, 255)",
                                          "--framer-link-text-decoration":
                                            "underline",
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                      }),
                  ],
                }),
              }),
            }),
        }),
      }),
    });
  }),
  Li = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-3pr2D.framer-1v7v9qh, .framer-3pr2D .framer-1v7v9qh { display: block; }",
    ".framer-3pr2D.framer-ccytp { height: 54px; overflow: visible; position: relative; width: 54px; }",
    ".framer-3pr2D .framer-djenl9 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-3pr2D .framer-1h6b0gw-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-3pr2D .framer-6cpd0i { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 266px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-3pr2D .framer-5qsujr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 87px; justify-content: flex-start; overflow: hidden; padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-3pr2D .framer-z4vs9d { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 56px); overflow: visible; position: relative; width: 56px; }",
    ".framer-3pr2D .framer-12nxb5v { bottom: 2px; flex: none; left: 2px; overflow: visible; position: absolute; right: 2px; top: 2px; }",
    ".framer-3pr2D .framer-7drpt4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-3pr2D .framer-1qysy23, .framer-3pr2D .framer-sgbo9l { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3pr2D .framer-djenl9, .framer-3pr2D .framer-6cpd0i, .framer-3pr2D .framer-5qsujr, .framer-3pr2D .framer-7drpt4 { gap: 0px; } .framer-3pr2D .framer-djenl9 > *, .framer-3pr2D .framer-5qsujr > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-3pr2D .framer-djenl9 > :first-child, .framer-3pr2D .framer-5qsujr > :first-child { margin-left: 0px; } .framer-3pr2D .framer-djenl9 > :last-child, .framer-3pr2D .framer-5qsujr > :last-child { margin-right: 0px; } .framer-3pr2D .framer-6cpd0i > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3pr2D .framer-6cpd0i > :first-child, .framer-3pr2D .framer-7drpt4 > :first-child { margin-top: 0px; } .framer-3pr2D .framer-6cpd0i > :last-child, .framer-3pr2D .framer-7drpt4 > :last-child { margin-bottom: 0px; } .framer-3pr2D .framer-7drpt4 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } }",
    ...de,
    '.framer-3pr2D[data-border="true"]::after, .framer-3pr2D [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Mt = q(Si, Li, "framer-3pr2D"),
  ca = Mt;
Mt.displayName = "Social/Instragram";
Mt.defaultProps = { height: 54, width: 54 };
M(Mt, {
  variant: {
    options: ["YRapQNpGe", "Ay1tEuQ_v", "qrHxSd5Yo", "qf42jsMmk"],
    optionTitles: ["Hover", "Mobile", "Tinted", "Dark"],
    title: "Variant",
    type: x.Enum,
  },
});
z(
  Mt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...di,
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Ii = Fe(l.div),
  Vi = Re(l.div),
  Ui = "framer-0yfxH",
  Di = { KbZxzZZ2u: "framer-v-f280yx" };
var Ti = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Ei = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  ji = l.create(F),
  Mi = ({ height: e, id: t, width: o, ...a }) => ({ ...a }),
  Ni = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Bi = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = Mi(e),
      {
        baseVariant: m,
        classNames: p,
        clearLoadingGesture: d,
        gestureHandlers: y,
        gestureVariant: b,
        isLoading: h,
        setGestureState: w,
        setVariant: u,
        variants: k,
      } = G({ defaultVariant: "KbZxzZZ2u", variant: f, variantClassNames: Di }),
      g = Ni(e, k),
      v = T(null),
      C = A(),
      L = [pe],
      D = J();
    return r(B, {
      id: i ?? C,
      children: r(ji, {
        animate: k,
        initial: !1,
        children: r(Ei, {
          value: Ti,
          children: I(l.div, {
            ...c,
            ...y,
            className: E(Ui, ...L, "framer-f280yx", s, p),
            "data-framer-name": "Variant 1",
            layoutDependency: g,
            layoutId: "KbZxzZZ2u",
            ref: t ?? v,
            style: { ...n },
            children: [
              r(ee, {
                className: "framer-fp8sfu",
                "data-framer-name": "graphic",
                layout: "position",
                layoutDependency: g,
                layoutId: "KQREEiKZX",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 24"><path d="M 18.99 19 L 19 19 M 18.99 19 C 18.368 19.617 17.24 19.464 16.448 19.464 C 15.476 19.464 15.008 19.654 14.315 20.347 C 13.725 20.937 12.934 22 12 22 C 11.066 22 10.275 20.937 9.685 20.347 C 8.991 19.654 8.523 19.464 7.552 19.464 C 6.761 19.464 5.632 19.618 5.009 19 C 4.382 18.378 4.536 17.244 4.536 16.448 C 4.536 15.441 4.316 14.978 3.599 14.262 C 2.533 13.196 2 12.662 2 12 C 2 11.338 2.533 10.804 3.6 9.738 C 4.24 9.098 4.536 8.464 4.536 7.552 C 4.536 6.761 4.382 5.632 5 5.009 C 5.622 4.382 6.756 4.536 7.552 4.536 C 8.464 4.536 9.098 4.239 9.738 3.599 C 10.804 2.533 11.338 2 12 2 C 12.662 2 13.196 2.533 14.262 3.6 C 14.902 4.24 15.536 4.536 16.448 4.536 C 17.239 4.536 18.368 4.382 18.991 5 C 19.618 5.622 19.464 6.756 19.464 7.552 C 19.464 8.559 19.684 9.022 20.401 9.738 C 21.467 10.804 22 11.338 22 12 C 22 12.662 21.467 13.196 20.4 14.262 C 19.684 14.979 19.464 15.442 19.464 16.448 C 19.464 17.244 19.618 18.378 18.991 19 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 9 12.893 L 10.8 14.5 L 15 9.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                svgContentId: 11835526482,
                withExternalLayout: !0,
              }),
              I(Ii, {
                className: "framer-rlp8lr",
                layoutDependency: g,
                layoutId: "JKFUAUxZ1",
                children: [
                  r($, {
                    __fromCanvasComponent: !0,
                    children: r(F, {
                      children: r(l.p, {
                        className: "framer-styles-preset-9jlebu",
                        "data-styles-preset": "sSyE5_N0_",
                        children: "Updated in",
                      }),
                    }),
                    className: "framer-iofzh",
                    fonts: ["Inter"],
                    layoutDependency: g,
                    layoutId: "SivjK3YAE",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  r($, {
                    __fromCanvasComponent: !0,
                    children: r(F, {
                      children: r(l.p, {
                        className: "framer-styles-preset-9jlebu",
                        "data-styles-preset": "sSyE5_N0_",
                        children: "Sep 25, 2024",
                      }),
                    }),
                    className: "framer-joi6fq",
                    fonts: ["Inter"],
                    layoutDependency: g,
                    layoutId: "VMEhHjEm2",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
              I(Vi, {
                className: "framer-kqxh1k",
                layoutDependency: g,
                layoutId: "eZYI2bUmC",
                children: [
                  r($, {
                    __fromCanvasComponent: !0,
                    children: r(F, {
                      children: r(l.p, {
                        className: "framer-styles-preset-9jlebu",
                        "data-styles-preset": "sSyE5_N0_",
                        children: "\u66F4\u65B0\u4E8E",
                      }),
                    }),
                    className: "framer-1tpaygb",
                    fonts: ["Inter"],
                    layoutDependency: g,
                    layoutId: "ol8BYaY0W",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  r($, {
                    __fromCanvasComponent: !0,
                    children: r(F, {
                      children: r(l.p, {
                        className: "framer-styles-preset-9jlebu",
                        "data-styles-preset": "sSyE5_N0_",
                        children: "2024\u5E749\u670825\u65E5",
                      }),
                    }),
                    className: "framer-1fyebya",
                    fonts: ["Inter"],
                    layoutDependency: g,
                    layoutId: "J4lVplMJM",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  qi = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-0yfxH.framer-9xz0e0, .framer-0yfxH .framer-9xz0e0 { display: block; }",
    ".framer-0yfxH.framer-f280yx { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: hidden; padding: 0px 10px 0px 10px; position: relative; width: min-content; }",
    ".framer-0yfxH .framer-fp8sfu { flex: none; height: 24px; position: relative; width: 23px; }",
    ".framer-0yfxH .framer-rlp8lr, .framer-0yfxH .framer-kqxh1k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-0yfxH .framer-iofzh, .framer-0yfxH .framer-joi6fq, .framer-0yfxH .framer-1tpaygb, .framer-0yfxH .framer-1fyebya { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0yfxH.framer-f280yx, .framer-0yfxH .framer-rlp8lr, .framer-0yfxH .framer-kqxh1k { gap: 0px; } .framer-0yfxH.framer-f280yx > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-0yfxH.framer-f280yx > :first-child, .framer-0yfxH .framer-rlp8lr > :first-child, .framer-0yfxH .framer-kqxh1k > :first-child { margin-left: 0px; } .framer-0yfxH.framer-f280yx > :last-child, .framer-0yfxH .framer-rlp8lr > :last-child, .framer-0yfxH .framer-kqxh1k > :last-child { margin-right: 0px; } .framer-0yfxH .framer-rlp8lr > *, .framer-0yfxH .framer-kqxh1k > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } }",
    ...de,
  ],
  jr = q(Bi, qi, "framer-0yfxH"),
  nv = jr;
jr.displayName = "Home/UpdateInfo";
jr.defaultProps = { height: 42, width: 412.5 };
z(
  jr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var es = {};
Ce(es, { __FramerMetadata__: () => $i, default: () => ht });
var Hi = _e(l.div),
  Pi = ["J2J3k_z92", "KuI5DWPh5", "WhsECgdW7"],
  Ai = "framer-HjbG1",
  Oi = {
    J2J3k_z92: "framer-v-1ma13e",
    KuI5DWPh5: "framer-v-mvnvs5",
    WhsECgdW7: "framer-v-1t038nw",
  };
function ma(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Gi = { damping: 28, delay: 0, mass: 1, stiffness: 170, type: "spring" },
  zi = (e, t) => `translateX(-50%) ${t}`,
  Xi = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Wi = l(F),
  Zi = { Hide: "WhsECgdW7", Off: "KuI5DWPh5", On: "J2J3k_z92" },
  Qi = ({ close: e, height: t, id: o, tap: a, width: n, ...s }) => {
    var i, f;
    return {
      ...s,
      gnzem_49b: e ?? s.gnzem_49b,
      heeY2JMQ7: a ?? s.heeY2JMQ7,
      variant:
        (f = (i = Zi[s.variant]) !== null && i !== void 0 ? i : s.variant) !==
          null && f !== void 0
          ? f
          : "J2J3k_z92",
    };
  },
  Yi = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Ki = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        heeY2JMQ7: c,
        gnzem_49b: m,
        ...p
      } = Qi(e),
      {
        baseVariant: d,
        classNames: y,
        gestureHandlers: b,
        gestureVariant: h,
        setGestureState: w,
        setVariant: u,
        variants: k,
      } = G({
        cycleOrder: Pi,
        defaultVariant: "J2J3k_z92",
        variant: f,
        variantClassNames: Oi,
      }),
      g = Yi(e, k),
      { activeVariantCallback: v, delay: C } = ne(d),
      L = v(async (...H) => {
        if (
          (w({ isPressed: !1 }),
          (c && (await c(...H)) === !1) || (m && (await m(...H)) === !1))
        )
          return !1;
      }),
      D = T(null),
      _ = A(),
      Z = [],
      X = J();
    return r(B, {
      id: i ?? _,
      children: r(Wi, {
        animate: k,
        initial: !1,
        children: r(Xi, {
          value: Gi,
          children: I(l.div, {
            ...p,
            ...b,
            className: E(Ai, ...Z, "framer-1ma13e", s, y),
            "data-framer-name": "On",
            "data-highlight": !0,
            layoutDependency: g,
            layoutId: "J2J3k_z92",
            onTap: L,
            ref: t ?? D,
            style: {
              backdropFilter: "blur(8px)",
              backgroundColor:
                "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(232, 232, 232, 0.7))",
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              WebkitBackdropFilter: "blur(8px)",
              ...n,
            },
            variants: {
              KuI5DWPh5: {
                backgroundColor:
                  "var(--token-0998aeba-5eb4-400a-87c6-fe3a20398e99, rgba(232, 232, 232, 0))",
              },
              WhsECgdW7: {
                backgroundColor:
                  "var(--token-0998aeba-5eb4-400a-87c6-fe3a20398e99, rgba(232, 232, 232, 0))",
              },
            },
            ...ma(
              {
                KuI5DWPh5: { "data-framer-name": "Off" },
                WhsECgdW7: { "data-framer-name": "Hide" },
              },
              d,
              h,
            ),
            children: [
              r(Hi, {
                className: "framer-polcwk",
                "data-framer-name": "X",
                layoutDependency: g,
                layoutId: "mj3GODq7T",
                style: {
                  borderBottomLeftRadius: 24,
                  borderBottomRightRadius: 24,
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                  opacity: 1,
                },
                variants: {
                  KuI5DWPh5: { opacity: 0 },
                  WhsECgdW7: { opacity: 0 },
                },
                children: r(ee, {
                  className: "framer-zuc9th",
                  "data-framer-name": "graphic",
                  layout: "position",
                  layoutDependency: g,
                  layoutId: "HGSDY0C5D",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 19 5 L 5 19 M 5 5 L 19 19" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                  svgContentId: 12018964311,
                  withExternalLayout: !0,
                  ...ma({ KuI5DWPh5: { svgContentId: 12321253964 } }, d, h),
                }),
              }),
              r(l.div, {
                className: "framer-7d5wrt",
                "data-border": !0,
                "data-framer-name": "Question",
                layoutDependency: g,
                layoutId: "GcRHwXYyX",
                style: {
                  "--border-bottom-width": "1.8px",
                  "--border-color":
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  "--border-left-width": "1.8px",
                  "--border-right-width": "1.8px",
                  "--border-style": "solid",
                  "--border-top-width": "1.8px",
                  backgroundColor:
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  opacity: 0,
                  scale: 1,
                },
                transformTemplate: zi,
                variants: {
                  KuI5DWPh5: {
                    "--border-bottom-width": "0px",
                    "--border-left-width": "0px",
                    "--border-right-width": "0px",
                    "--border-top-width": "0px",
                    opacity: 1,
                  },
                  WhsECgdW7: {
                    "--border-bottom-width": "0px",
                    "--border-left-width": "0px",
                    "--border-right-width": "0px",
                    "--border-top-width": "0px",
                    scale: 0.5,
                  },
                },
                ...ma(
                  {
                    KuI5DWPh5: { transformTemplate: void 0 },
                    WhsECgdW7: { transformTemplate: void 0 },
                  },
                  d,
                  h,
                ),
                children: r(ee, {
                  className: "framer-19br964",
                  layout: "position",
                  layoutDependency: g,
                  layoutId: "uInuupiZ9",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 10"><path d="M 2.987 2 L 2.994 2" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 3 8.667 L 3 5.333" fill="transparent" stroke-width="1.5" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                  svgContentId: 10737003728,
                  withExternalLayout: !0,
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Ji = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-HjbG1.framer-1o0ah4v, .framer-HjbG1 .framer-1o0ah4v { display: block; }",
    ".framer-HjbG1.framer-1ma13e { cursor: pointer; height: 42px; overflow: hidden; position: relative; width: 42px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-HjbG1 .framer-polcwk { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    ".framer-HjbG1 .framer-zuc9th { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-HjbG1 .framer-7d5wrt { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; overflow: hidden; pointer-events: none; position: absolute; top: -17px; width: 16px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-HjbG1 .framer-19br964 { flex: none; height: 10px; left: calc(50.00000000000002% - 6px / 2); position: absolute; top: calc(50.00000000000002% - 10px / 2); width: 6px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-HjbG1 .framer-polcwk { gap: 0px; } .framer-HjbG1 .framer-polcwk > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-HjbG1 .framer-polcwk > :first-child { margin-top: 0px; } .framer-HjbG1 .framer-polcwk > :last-child { margin-bottom: 0px; } }",
    ".framer-HjbG1.framer-v-mvnvs5.framer-1ma13e, .framer-HjbG1.framer-v-1t038nw.framer-1ma13e { height: 16px; width: 16px; }",
    ".framer-HjbG1.framer-v-mvnvs5 .framer-polcwk, .framer-HjbG1.framer-v-1t038nw .framer-polcwk { bottom: -46px; top: 46px; }",
    ".framer-HjbG1.framer-v-mvnvs5 .framer-7d5wrt, .framer-HjbG1.framer-v-1t038nw .framer-7d5wrt { left: 0px; right: 0px; top: 0px; width: unset; }",
    '.framer-HjbG1[data-border="true"]::after, .framer-HjbG1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Nt = q(Ki, Ji, "framer-HjbG1"),
  ht = Nt;
Nt.displayName = "Toggle/Close";
Nt.defaultProps = { height: 42, width: 42 };
M(Nt, {
  variant: {
    options: ["J2J3k_z92", "KuI5DWPh5", "WhsECgdW7"],
    optionTitles: ["On", "Off", "Hide"],
    title: "Variant",
    type: x.Enum,
  },
  heeY2JMQ7: { title: "Tap", type: x.EventHandler },
  gnzem_49b: { title: "Close", type: x.EventHandler },
});
z(Nt, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var $i = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerVPFSIhH7_",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "42",
        framerIntrinsicHeight: "42",
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerVariables: '{"heeY2JMQ7":"tap","gnzem_49b":"close"}',
        framerComponentViewportWidth: "true",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"KuI5DWPh5":{"layout":["fixed","fixed"]},"WhsECgdW7":{"layout":["fixed","fixed"]}}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var Us = {};
Ce(Us, { __FramerMetadata__: () => Vs, default: () => Is });
var ts = [
    "zsYEifwQ2",
    "c8uENsqb_",
    "b2A1qAeDd",
    "HdPrvZbkh",
    "vt7hmcnx1",
    "kugCTxg7w",
    "ohWUNr1RF",
    "s4l_q7IOk",
    "cQoRLHtqx",
    "eEHqneesN",
    "U0SsSgQMn",
    "OASYeSZEO",
  ],
  rs = "framer-w4I5a",
  as = {
    b2A1qAeDd: "framer-v-1hpor4o",
    c8uENsqb_: "framer-v-96dl7m",
    cQoRLHtqx: "framer-v-19fqxro",
    eEHqneesN: "framer-v-13udi97",
    HdPrvZbkh: "framer-v-1887ggt",
    kugCTxg7w: "framer-v-1chg6ot",
    OASYeSZEO: "framer-v-k5e3k0",
    ohWUNr1RF: "framer-v-7laun6",
    s4l_q7IOk: "framer-v-7jw41h",
    U0SsSgQMn: "framer-v-1ddem6d",
    vt7hmcnx1: "framer-v-1psx7f",
    zsYEifwQ2: "framer-v-14ubgri",
  };
function Vo(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var os = { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  nt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ns = { duration: 0, type: "tween" },
  Uo = (e, t) => `translate(-50%, -50%) ${t}`,
  is = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  ss = l(F),
  ls = {
    OFF: "OASYeSZEO",
    ON: "zsYEifwQ2",
    ON1: "c8uENsqb_",
    ON10: "U0SsSgQMn",
    ON2: "b2A1qAeDd",
    ON3: "HdPrvZbkh",
    ON4: "vt7hmcnx1",
    ON5: "kugCTxg7w",
    ON6: "ohWUNr1RF",
    ON7: "s4l_q7IOk",
    ON8: "cQoRLHtqx",
    ON9: "eEHqneesN",
  },
  fs = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = ls[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "zsYEifwQ2",
    };
  },
  cs = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  ms = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = fs(e),
      {
        baseVariant: m,
        classNames: p,
        gestureHandlers: d,
        gestureVariant: y,
        setGestureState: b,
        setVariant: h,
        variants: w,
      } = G({
        cycleOrder: ts,
        defaultVariant: "zsYEifwQ2",
        variant: f,
        variantClassNames: as,
      }),
      u = cs(e, w),
      { activeVariantCallback: k, delay: g } = ne(m),
      v = k(async (...Se) => {
        await g(() => h("c8uENsqb_"), 1e3);
      }),
      C = k(async (...Se) => {
        await g(() => h("b2A1qAeDd"), 500);
      }),
      L = k(async (...Se) => {
        await g(() => h("HdPrvZbkh"), 100);
      }),
      D = k(async (...Se) => {
        await g(() => h("vt7hmcnx1"), 1e3);
      }),
      _ = k(async (...Se) => {
        await g(() => h("kugCTxg7w"), 100);
      }),
      Z = k(async (...Se) => {
        await g(() => h("ohWUNr1RF"), 1e3);
      }),
      X = k(async (...Se) => {
        await g(() => h("s4l_q7IOk"), 100);
      }),
      H = k(async (...Se) => {
        await g(() => h("cQoRLHtqx"), 2e3);
      }),
      K = k(async (...Se) => {
        await g(() => h("eEHqneesN"), 100);
      }),
      te = k(async (...Se) => {
        await g(() => h("U0SsSgQMn"), 1e3);
      }),
      le = k(async (...Se) => {
        await g(() => h("zsYEifwQ2"), 100);
      });
    fo(m, {
      b2A1qAeDd: L,
      c8uENsqb_: C,
      cQoRLHtqx: K,
      default: v,
      eEHqneesN: te,
      HdPrvZbkh: D,
      kugCTxg7w: Z,
      OASYeSZEO: void 0,
      ohWUNr1RF: X,
      s4l_q7IOk: H,
      U0SsSgQMn: le,
      vt7hmcnx1: _,
    });
    let ce = T(null),
      ge = A(),
      ye = [pe],
      we = J();
    return r(B, {
      id: i ?? ge,
      children: r(ss, {
        animate: w,
        initial: !1,
        children: r(is, {
          value: os,
          ...Vo(
            {
              b2A1qAeDd: { value: nt },
              c8uENsqb_: { value: nt },
              cQoRLHtqx: { value: nt },
              eEHqneesN: { value: ns },
              HdPrvZbkh: { value: nt },
              kugCTxg7w: { value: nt },
              ohWUNr1RF: { value: nt },
              s4l_q7IOk: { value: nt },
              vt7hmcnx1: { value: nt },
            },
            m,
            y,
          ),
          children: I(l.div, {
            ...c,
            ...d,
            className: E(rs, ...ye, "framer-14ubgri", s, p),
            "data-framer-name": "ON",
            "data-highlight": !0,
            layoutDependency: u,
            layoutId: "zsYEifwQ2",
            ref: t ?? ce,
            style: {
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              ...n,
            },
            ...Vo(
              {
                b2A1qAeDd: { "data-framer-name": "ON2" },
                c8uENsqb_: { "data-framer-name": "ON1" },
                cQoRLHtqx: { "data-framer-name": "ON8" },
                eEHqneesN: { "data-framer-name": "ON9" },
                HdPrvZbkh: { "data-framer-name": "ON3" },
                kugCTxg7w: { "data-framer-name": "ON5" },
                OASYeSZEO: {
                  "data-framer-name": "OFF",
                  "data-highlight": void 0,
                },
                ohWUNr1RF: { "data-framer-name": "ON6" },
                s4l_q7IOk: { "data-framer-name": "ON7" },
                U0SsSgQMn: { "data-framer-name": "ON10" },
                vt7hmcnx1: { "data-framer-name": "ON4" },
              },
              m,
              y,
            ),
            children: [
              r(l.div, {
                className: "framer-mtcm9q",
                layoutDependency: u,
                layoutId: "R06Up0q3n",
                children: r(ee, {
                  className: "framer-1q5uuov",
                  layout: "position",
                  layoutDependency: u,
                  layoutId: "NhlA1Dmqv",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 592 105"><path d="M 1 11 C 1 5.477 5.477 1 11 1 L 128 1 C 133.523 1 138 5.477 138 11 L 138 94 C 138 99.523 133.523 104 128 104 L 11 104 C 5.477 104 1 99.523 1 94 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 152 11 C 152 5.477 156.477 1 162 1 L 279 1 C 284.523 1 289 5.477 289 11 L 289 94 C 289 99.523 284.523 104 279 104 L 162 104 C 156.477 104 152 99.523 152 94 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 303 11 C 303 5.477 307.477 1 313 1 L 430 1 C 435.523 1 440 5.477 440 11 L 440 94 C 440 99.523 435.523 104 430 104 L 313 104 C 307.477 104 303 99.523 303 94 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 454 11 C 454 5.477 458.477 1 464 1 L 581 1 C 586.523 1 591 5.477 591 11 L 591 94 C 591 99.523 586.523 104 581 104 L 464 104 C 458.477 104 454 99.523 454 94 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 219.268 32 C 220.038 30.667 221.962 30.667 222.732 32 L 246.981 74 C 247.751 75.333 246.788 77 245.249 77 L 196.751 77 C 195.212 77 194.249 75.333 195.019 74 Z" fill="var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15)) /* {&quot;name&quot;:&quot;Black 15&quot;} */"></path><path d="M 372 26 C 386.912 26 399 38.088 399 53 C 399 67.912 386.912 80 372 80 C 357.088 80 345 67.912 345 53 C 345 38.088 357.088 26 372 26 Z" fill="var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15)) /* {&quot;name&quot;:&quot;Black 15&quot;} */"></path><path d="M 67.707 31.26 C 68.44 29.773 70.56 29.773 71.293 31.26 L 77.117 43.059 C 77.408 43.649 77.971 44.059 78.623 44.153 L 91.644 46.045 C 93.284 46.284 93.939 48.3 92.752 49.457 L 83.33 58.641 C 82.859 59.101 82.643 59.763 82.755 60.411 L 84.979 73.38 C 85.259 75.014 83.544 76.26 82.077 75.488 L 70.431 69.365 C 69.848 69.059 69.152 69.059 68.569 69.365 L 56.923 75.488 C 55.456 76.26 53.741 75.014 54.021 73.38 L 56.245 60.411 C 56.357 59.763 56.141 59.101 55.67 58.641 L 46.248 49.457 C 45.061 48.3 45.716 46.284 47.356 46.045 L 60.377 44.153 C 61.029 44.059 61.592 43.649 61.883 43.059 Z" fill="var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15)) /* {&quot;name&quot;:&quot;Black 15&quot;} */"></path><path d="M 521.5 25.577 C 522.119 25.22 522.881 25.22 523.5 25.577 L 545.316 38.173 C 545.935 38.53 546.316 39.19 546.316 39.905 L 546.316 65.095 C 546.316 65.81 545.935 66.47 545.316 66.827 L 523.5 79.423 C 522.881 79.78 522.119 79.78 521.5 79.423 L 499.684 66.827 C 499.065 66.47 498.684 65.81 498.684 65.095 L 498.684 39.905 C 498.684 39.19 499.065 38.53 499.684 38.173 Z" fill="#CCC"></path></svg>',
                  svgContentId: 11810328209,
                  withExternalLayout: !0,
                }),
              }),
              r(l.div, {
                className: "framer-vsif0f",
                layoutDependency: u,
                layoutId: "xn9gzhnb3",
                style: {
                  backgroundColor:
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  borderBottomLeftRadius: 7,
                  borderBottomRightRadius: 7,
                  borderTopLeftRadius: 7,
                  borderTopRightRadius: 7,
                },
                children: r($, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                      },
                      children: "Beta",
                    }),
                  }),
                  className: "framer-pzha0b",
                  fonts: ["Inter"],
                  layoutDependency: u,
                  layoutId: "Wd8HBajDl",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
              I(l.div, {
                className: "framer-snkkt7",
                "data-framer-name": "Arrow",
                layoutDependency: u,
                layoutId: "SDXhnKIny",
                children: [
                  r(l.div, {
                    className: "framer-nhq494",
                    "data-framer-name": "Arrow",
                    layoutDependency: u,
                    layoutId: "uLpGGe9N2",
                    style: { opacity: 1, scale: 1 },
                    transformTemplate: Uo,
                    variants: {
                      b2A1qAeDd: { opacity: 0, scale: 0.5 },
                      c8uENsqb_: { opacity: 0, scale: 0.5 },
                      cQoRLHtqx: { opacity: 0, scale: 0.5 },
                      HdPrvZbkh: { opacity: 0, scale: 0.5 },
                      kugCTxg7w: { opacity: 0, scale: 0.5 },
                      ohWUNr1RF: { opacity: 0, scale: 0.5 },
                      s4l_q7IOk: { opacity: 0, scale: 0.5 },
                      vt7hmcnx1: { opacity: 0, scale: 0.5 },
                    },
                    children: r(ee, {
                      className: "framer-1b6whzq",
                      layout: "position",
                      layoutDependency: u,
                      layoutId: "o128O8V2m-shape",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26"><path d="M 9.558 0.841 C 9.745 0.485 10.255 0.485 10.442 0.841 L 18.364 15.892 C 18.833 16.782 17.84 17.73 16.972 17.219 L 10.507 13.417 C 10.194 13.233 9.806 13.233 9.493 13.417 L 3.028 17.219 C 2.16 17.73 1.167 16.782 1.636 15.892 Z" transform="translate(1 2.5) rotate(-30 10 9.5)" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                      svgContentId: 10832071133,
                      withExternalLayout: !0,
                    }),
                  }),
                  r(l.div, {
                    className: "framer-nhmg",
                    "data-framer-name": "Circle",
                    layoutDependency: u,
                    layoutId: "XAe0K3p7b",
                    style: { opacity: 0, scale: 0.5 },
                    transformTemplate: Uo,
                    variants: {
                      b2A1qAeDd: { opacity: 1, scale: 0.8 },
                      c8uENsqb_: { opacity: 1, scale: 1 },
                      cQoRLHtqx: { opacity: 1, scale: 1 },
                      HdPrvZbkh: { opacity: 1, scale: 1 },
                      kugCTxg7w: { opacity: 1, scale: 1 },
                      ohWUNr1RF: { opacity: 1, scale: 0.8 },
                      s4l_q7IOk: { opacity: 1, scale: 1 },
                      vt7hmcnx1: { opacity: 1, scale: 0.8 },
                    },
                    children: r(ee, {
                      className: "framer-1mh4wwm",
                      layout: "position",
                      layoutDependency: u,
                      layoutId: "xLuDH23LM-shape",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21 21"><path d="M 5.75 2.273 C 10.294 -0.351 16.104 1.206 18.727 5.75 C 21.351 10.294 19.794 16.104 15.25 18.727 C 10.706 21.351 4.896 19.794 2.273 15.25 C -0.351 10.706 1.206 4.896 5.75 2.273 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 6 3 C 6 3 3.791 0 3 0 C 2.209 0 0 3 0 3" transform="translate(8 9) rotate(90 3 1.5)" fill="transparent" stroke-width="2" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 9256507003,
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  ds = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-w4I5a.framer-xvfef6, .framer-w4I5a .framer-xvfef6 { display: block; }",
    ".framer-w4I5a.framer-14ubgri { height: 214px; overflow: hidden; position: relative; width: 286px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-w4I5a .framer-mtcm9q { flex: none; height: 105px; overflow: visible; position: absolute; right: -380px; top: 40px; width: 592px; }",
    ".framer-w4I5a .framer-1q5uuov { flex: none; height: 105px; left: calc(50.00000000000002% - 592px / 2); position: absolute; top: calc(49.52380952380955% - 105px / 2); width: 592px; }",
    ".framer-w4I5a .framer-vsif0f { align-content: center; align-items: center; bottom: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 12px; overflow: hidden; padding: 2px 10px 2px 10px; position: absolute; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-w4I5a .framer-pzha0b { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-w4I5a .framer-snkkt7 { flex: none; height: 30px; overflow: hidden; position: absolute; right: 8px; top: calc(49.532710280373855% - 30px / 2); width: 30px; }",
    ".framer-w4I5a .framer-nhq494, .framer-w4I5a .framer-nhmg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }",
    ".framer-w4I5a .framer-1b6whzq { flex: none; height: 26px; position: relative; width: 26px; }",
    ".framer-w4I5a .framer-1mh4wwm { flex: none; height: 21px; position: relative; width: 21px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-w4I5a .framer-vsif0f, .framer-w4I5a .framer-nhq494, .framer-w4I5a .framer-nhmg { gap: 0px; } .framer-w4I5a .framer-vsif0f > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-w4I5a .framer-vsif0f > :first-child { margin-top: 0px; } .framer-w4I5a .framer-vsif0f > :last-child { margin-bottom: 0px; } .framer-w4I5a .framer-nhq494 > *, .framer-w4I5a .framer-nhmg > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-w4I5a .framer-nhq494 > :first-child, .framer-w4I5a .framer-nhmg > :first-child { margin-left: 0px; } .framer-w4I5a .framer-nhq494 > :last-child, .framer-w4I5a .framer-nhmg > :last-child { margin-right: 0px; } }",
    ".framer-w4I5a.framer-v-1887ggt .framer-mtcm9q, .framer-w4I5a.framer-v-1psx7f .framer-mtcm9q { left: -78px; right: -228px; width: unset; }",
    ".framer-w4I5a.framer-v-1chg6ot .framer-mtcm9q, .framer-w4I5a.framer-v-7laun6 .framer-mtcm9q { left: -228px; right: -78px; width: unset; }",
    ".framer-w4I5a.framer-v-7jw41h .framer-mtcm9q { left: -381px; right: unset; }",
    ".framer-w4I5a.framer-v-19fqxro .framer-mtcm9q { left: -621px; right: unset; }",
    ".framer-w4I5a.framer-v-19fqxro .framer-snkkt7 { right: -42px; }",
    ".framer-w4I5a.framer-v-13udi97 .framer-mtcm9q { right: -610px; }",
    ".framer-w4I5a.framer-v-13udi97 .framer-snkkt7 { bottom: -37px; left: 98px; right: unset; top: unset; }",
    ".framer-w4I5a.framer-v-1ddem6d .framer-snkkt7, .framer-w4I5a.framer-v-k5e3k0 .framer-snkkt7 { bottom: -37px; left: calc(50.00000000000002% - 30px / 2); right: unset; top: unset; }",
    ...de,
  ],
  Bt = q(ms, ds, "framer-w4I5a"),
  da = Bt;
Bt.displayName = "Utilities/NavArrows";
Bt.defaultProps = { height: 214, width: 286 };
M(Bt, {
  variant: {
    options: [
      "zsYEifwQ2",
      "c8uENsqb_",
      "b2A1qAeDd",
      "HdPrvZbkh",
      "vt7hmcnx1",
      "kugCTxg7w",
      "ohWUNr1RF",
      "s4l_q7IOk",
      "cQoRLHtqx",
      "eEHqneesN",
      "U0SsSgQMn",
      "OASYeSZEO",
    ],
    optionTitles: [
      "ON",
      "ON1",
      "ON2",
      "ON3",
      "ON4",
      "ON5",
      "ON6",
      "ON7",
      "ON8",
      "ON9",
      "ON10",
      "OFF",
    ],
    title: "Variant",
    type: x.Enum,
  },
});
z(
  Bt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var ps = Y(ht),
  us = Y(da),
  hs = Fe($),
  gs = Re($),
  ys = ["hmV4UHOLM", "RYwuKvV2u"],
  vs = "framer-aYedV",
  xs = { hmV4UHOLM: "framer-v-1u2oanh", RYwuKvV2u: "framer-v-1cmx260" };
function Do(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var bs = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ws = (e, t) => `translateX(-50%) ${t}`,
  To = (e, t) => `translate(-50%, -50%) ${t}`,
  ks = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Cs = l(F),
  _s = { Collasped: "RYwuKvV2u", Expanded: "hmV4UHOLM" },
  Fs = ({ close: e, height: t, id: o, open: a, width: n, ...s }) => {
    var i, f;
    return {
      ...s,
      d6MkcFD8T: e ?? s.d6MkcFD8T,
      kEaKLjxdV: a ?? s.kEaKLjxdV,
      variant:
        (f = (i = _s[s.variant]) !== null && i !== void 0 ? i : s.variant) !==
          null && f !== void 0
          ? f
          : "hmV4UHOLM",
    };
  },
  Rs = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Ss = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        kEaKLjxdV: c,
        d6MkcFD8T: m,
        ...p
      } = Fs(e),
      {
        baseVariant: d,
        classNames: y,
        gestureHandlers: b,
        gestureVariant: h,
        setGestureState: w,
        setVariant: u,
        variants: k,
      } = G({
        cycleOrder: ys,
        defaultVariant: "hmV4UHOLM",
        variant: f,
        variantClassNames: xs,
      }),
      g = Rs(e, k),
      { activeVariantCallback: v, delay: C } = ne(d),
      L = v(async (...K) => {
        if (m && (await m(...K)) === !1) return !1;
      }),
      D = v(async (...K) => {
        if (c && (await c(...K)) === !1) return !1;
      }),
      _ = T(null),
      Z = A(),
      X = [pe],
      H = J();
    return r(B, {
      id: i ?? Z,
      children: r(Cs, {
        animate: k,
        initial: !1,
        children: r(ks, {
          value: bs,
          children: I(l.div, {
            ...p,
            ...b,
            className: E(vs, ...X, "framer-1u2oanh", s, y),
            "data-framer-name": "Expanded",
            layoutDependency: g,
            layoutId: "hmV4UHOLM",
            ref: t ?? _,
            style: { ...n },
            ...Do({ RYwuKvV2u: { "data-framer-name": "Collasped" } }, d, h),
            children: [
              r(Q, {
                children: r(l.div, {
                  className: "framer-mowc77-container",
                  layoutDependency: g,
                  layoutId: "EcleyDcxd-container",
                  style: { opacity: 1, scale: 1 },
                  transformTemplate: ws,
                  variants: { RYwuKvV2u: { opacity: 0, scale: 0.4 } },
                  children: r(ht, {
                    heeY2JMQ7: L,
                    height: "100%",
                    id: "EcleyDcxd",
                    layoutId: "EcleyDcxd",
                    variant: "J2J3k_z92",
                    width: "100%",
                  }),
                }),
              }),
              r(l.div, {
                className: "framer-u3zpnt",
                "data-framer-name": "Space",
                "data-highlight": !0,
                layoutDependency: g,
                layoutId: "oO3rbjYi_",
                onTap: D,
                style: {
                  backgroundColor:
                    "var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0))",
                  borderBottomLeftRadius: 24,
                  borderBottomRightRadius: 24,
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                },
                variants: {
                  RYwuKvV2u: {
                    backgroundColor:
                      "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  },
                },
                children: I(l.div, {
                  className: "framer-17nxuy",
                  "data-framer-name": "Content",
                  layoutDependency: g,
                  layoutId: "y5lLvhjPz",
                  transformTemplate: To,
                  children: [
                    I(l.div, {
                      className: "framer-14xsmxa",
                      layoutDependency: g,
                      layoutId: "doTLZdO9l",
                      style: {
                        backgroundColor:
                          "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(232, 232, 232, 0.7))",
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                      },
                      variants: {
                        RYwuKvV2u: {
                          backgroundColor:
                            "var(--token-0998aeba-5eb4-400a-87c6-fe3a20398e99, rgba(232, 232, 232, 0))",
                        },
                      },
                      children: [
                        r(l.div, {
                          className: "framer-1gl9422",
                          "data-framer-name": "Animation",
                          layoutDependency: g,
                          layoutId: "iHQIsSX60",
                          style: {
                            backgroundColor:
                              "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16,
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            opacity: 1,
                          },
                          variants: { RYwuKvV2u: { opacity: 0 } },
                          children: r(Q, {
                            width: "286px",
                            children: r(l.div, {
                              className: "framer-g9vjrz-container",
                              layoutDependency: g,
                              layoutId: "dfRkqbr_t-container",
                              children: r(da, {
                                height: "100%",
                                id: "dfRkqbr_t",
                                layoutId: "dfRkqbr_t",
                                style: { height: "100%", width: "100%" },
                                variant: "U0SsSgQMn",
                                width: "100%",
                                ...Do(
                                  { RYwuKvV2u: { variant: "OASYeSZEO" } },
                                  d,
                                  h,
                                ),
                              }),
                            }),
                          }),
                        }),
                        I(l.div, {
                          className: "framer-1eza88s",
                          "data-framer-name": "Description",
                          layoutDependency: g,
                          layoutId: "Cix7kXnzO",
                          style: { opacity: 1 },
                          variants: { RYwuKvV2u: { opacity: 0 } },
                          children: [
                            r(hs, {
                              __fromCanvasComponent: !0,
                              children: r(F, {
                                children: r(l.p, {
                                  className: "framer-styles-preset-9jlebu",
                                  "data-styles-preset": "sSyE5_N0_",
                                  children:
                                    "Enable the navigation arrows on both edges and click on them to move the stack.",
                                }),
                              }),
                              className: "framer-14h6muq",
                              fonts: ["Inter"],
                              layoutDependency: g,
                              layoutId: "xh6Ww0heP",
                              style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                              },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            r(gs, {
                              __fromCanvasComponent: !0,
                              children: r(F, {
                                children: r(l.p, {
                                  className: "framer-styles-preset-9jlebu",
                                  "data-styles-preset": "sSyE5_N0_",
                                  children:
                                    "\u542F\u7528\u5C4F\u5E55\u4E24\u4FA7\u7684\u5BFC\u822A\u7BAD\u5934\uFF0C\u70B9\u51FB\u7BAD\u5934\u6765\u79FB\u52A8\u6C34\u5E73\u5E03\u5C40\u3002",
                                }),
                              }),
                              className: "framer-fa75wk",
                              fonts: ["Inter"],
                              layoutDependency: g,
                              layoutId: "Jjas6VVCc",
                              style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                              },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    r(l.div, {
                      className: "framer-1ka8oli",
                      "data-framer-name": "Info",
                      layoutDependency: g,
                      layoutId: "N1Ru2qSdL",
                      style: {
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        opacity: 0,
                        scale: 4,
                      },
                      transformTemplate: To,
                      variants: { RYwuKvV2u: { opacity: 1, scale: 1 } },
                      children: r(ee, {
                        className: "framer-pje6jb",
                        layout: "position",
                        layoutDependency: g,
                        layoutId: "RynsqTa1B",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 10"><path d="M 2.987 2 L 2.994 2" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 3 8.667 L 3 5.333" fill="transparent" stroke-width="1.5" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 10737003728,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Ls = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-aYedV.framer-f536af, .framer-aYedV .framer-f536af { display: block; }",
    ".framer-aYedV.framer-1u2oanh { height: 300px; overflow: visible; position: relative; width: 302px; }",
    ".framer-aYedV .framer-mowc77-container { bottom: -62px; flex: none; height: auto; left: 50%; pointer-events: auto; position: absolute; width: auto; }",
    ".framer-aYedV .framer-u3zpnt { bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-aYedV .framer-17nxuy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 50%; width: 302px; }",
    ".framer-aYedV .framer-14xsmxa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 300px; justify-content: center; overflow: hidden; padding: 8px 8px 12px 8px; position: relative; width: 302px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-aYedV .framer-1gl9422 { aspect-ratio: 1.3333333333333333 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 215px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-aYedV .framer-g9vjrz-container { bottom: 1px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-aYedV .framer-1eza88s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 58px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 10px; position: relative; width: 100%; }",
    ".framer-aYedV .framer-14h6muq, .framer-aYedV .framer-fa75wk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-aYedV .framer-1ka8oli { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; overflow: hidden; pointer-events: none; position: absolute; top: 50%; width: 16px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-aYedV .framer-pje6jb { flex: none; height: 10px; left: calc(50.00000000000002% - 6px / 2); position: absolute; top: calc(50.00000000000002% - 10px / 2); width: 6px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-aYedV .framer-17nxuy, .framer-aYedV .framer-14xsmxa, .framer-aYedV .framer-1eza88s { gap: 0px; } .framer-aYedV .framer-17nxuy > *, .framer-aYedV .framer-14xsmxa > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-aYedV .framer-17nxuy > :first-child, .framer-aYedV .framer-14xsmxa > :first-child, .framer-aYedV .framer-1eza88s > :first-child { margin-top: 0px; } .framer-aYedV .framer-17nxuy > :last-child, .framer-aYedV .framer-14xsmxa > :last-child, .framer-aYedV .framer-1eza88s > :last-child { margin-bottom: 0px; } .framer-aYedV .framer-1eza88s > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    ".framer-aYedV.framer-v-1cmx260.framer-1u2oanh { height: 20px; overflow: hidden; width: 20px; }",
    ".framer-aYedV.framer-v-1cmx260 .framer-u3zpnt { bottom: 2px; left: 2px; right: 2px; top: 2px; }",
    ...de,
  ],
  qt = q(Ss, Ls, "framer-aYedV"),
  Is = qt;
qt.displayName = "Utilities/PopupArrow";
qt.defaultProps = { height: 300, width: 302 };
M(qt, {
  variant: {
    options: ["hmV4UHOLM", "RYwuKvV2u"],
    optionTitles: ["Expanded", "Collasped"],
    title: "Variant",
    type: x.Enum,
  },
  kEaKLjxdV: { title: "Open", type: x.EventHandler },
  d6MkcFD8T: { title: "Close", type: x.EventHandler },
});
z(
  qt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...ps,
    ...us,
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Vs = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerDxUBUXd7c",
      slots: [],
      annotations: {
        framerVariables: '{"kEaKLjxdV":"open","d6MkcFD8T":"close"}',
        framerIntrinsicWidth: "302",
        framerComponentViewportWidth: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"RYwuKvV2u":{"layout":["fixed","fixed"]}}}',
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerIntrinsicHeight: "300",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var gt = ze({
  video_play: !0,
  video_loop: !0,
  video_mute: !0,
  video_focus: !1,
  video_progress: 0,
  p_width: 0,
  p_height: 0,
});
function Uv(e) {
  return (t) => {
    let { style: o } = t;
    return r(B, {
      children: r(e, {
        ...t,
        layout: !0,
        style: { ...o },
        transition: { type: "spring", stiffness: 178, damping: 28 },
      }),
    });
  };
}
function Dv(e) {
  return (t) =>
    r(B, {
      children: r(e, {
        ...t,
        layout: "position",
        style: { ...t.style },
        transition: { type: "spring", stiffness: 178, damping: 28 },
      }),
    });
}
function Eo(e) {
  return (t) => {
    let { style: o } = t;
    return r(e, {
      ...t,
      style: {
        ...t.style,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      },
    });
  };
}
function Tv(e) {
  return (t) =>
    r(e, {
      layout: !0,
      ...t,
      animate: { scale: 0.75 },
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 28,
        repeat: 1 / 0,
        repeatDelay: 1,
        repeatType: "reverse",
      },
    });
}
function Ev(e) {
  return (t) => {
    let [o, a] = gt();
    return r(e, {
      ...t,
      variant: o.video_play ? "Pause" : "Play",
      tap: () => a({ video_play: o.video_play !== !0 }),
    });
  };
}
function jv(e) {
  return (t) => {
    let [o, a] = gt();
    return r(e, {
      ...t,
      variant: o.video_loop ? "ON" : "OFF",
      tap: () => a({ video_loop: !o.video_loop }),
    });
  };
}
function Mv(e) {
  return (t) => {
    let [o, a] = gt();
    return r(e, {
      ...t,
      variant: o.video_mute ? "OFF" : "ON",
      tap: () => a({ video_mute: !o.video_mute }),
    });
  };
}
function Nv(e) {
  return (t) => {
    let [o, a] = gt();
    return r(e, {
      ...t,
      variant: o.video_focus ? "Hide" : "Show",
      tap: () => a({ video_focus: !o.video_focus }),
    });
  };
}
function Bv(e) {
  return (t) => {
    let [o, a] = gt(),
      [n, s] = ae(!1),
      [i, f] = ae(1);
    return (
      re(() => {
        o.video_focus && !n ? f(0) : f(1);
      }, [o.video_focus, n]),
      r(e, {
        ...t,
        animate: { opacity: i, transition: { duration: 0.3 } },
        onMouseEnter: () => {
          f(1), s(!0);
        },
        onMouseLeave: o.video_focus
          ? () => {
              f(0), s(!1);
            }
          : () => {
              f(1), s(!1);
            },
      })
    );
  };
}
function qv(e) {
  return (t) => {
    let [o, a] = gt();
    return r(e, {
      ...t,
      initial: { opacity: 0 },
      animate: { opacity: o.video_play ? 0 : 1 },
    });
  };
}
function Hv(e) {
  return (t) => {
    let [o, a] = gt(),
      [n, s] = ae(!1);
    return (
      re(() => {
        s(!0);
      }, []),
      n
        ? r(e, {
            ...t,
            loop: o.video_loop,
            playing: o.video_play,
            onPlay: () => a({ video_play: !0 }),
            onPause: o.video_loop === !1 ? () => a({ video_play: !1 }) : void 0,
            muted: o.video_mute,
          })
        : null
    );
  };
}
function Pv(e) {
  return (t) => {
    let { style: o } = t,
      { scrollYProgress: a } = He(),
      n = ve(a, { stiffness: 200, damping: 30 });
    return r(e, { ...t, style: { originX: 0, originY: 0, scaleY: n, ...o } });
  };
}
function Av(e) {
  return (t) => {
    let [o, a] = W();
    return r(Ue, {
      children: o.wheel
        ? o.setting
          ? ""
          : o.wheel_tooltip
            ? r(e, {
                ...t,
                style: { originY: 0, originX: 0.8, ...t.style },
                initial: { opacity: 0, y: -20, scale: 0.8 },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 178,
                    damping: 28,
                    delay: 2,
                  },
                },
                exit: {
                  opacity: 0,
                  y: -20,
                  scale: 0.8,
                  transition: { type: "spring", stiffness: 178, damping: 28 },
                },
              })
            : ""
        : "",
    });
  };
}
function Ov(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, { ...t, tap: () => a({ wheel_tooltip: !1 }) });
  };
}
function jo(e) {
  return (t) => {
    let [o, a] = W();
    return r(e, {
      ...t,
      style: { ...t.style, originX: 0.8, originY: 0.8 },
      animate: {
        rotate: [0, 30, 0, 26, 0, 23, 0, 14, 0, 7, 0],
        transition: {
          duration: 2,
          repeat: 1 / 0,
          repeatDelay: 0.5,
          ease: [0.5, 1, 0.89, 1],
        },
      },
    });
  };
}
var Ds = jo(rt),
  Ts = [
    "va6bc84au",
    "LcU1swUFt",
    "EE2fTZ4GL",
    "Lj1EkNiH8",
    "FBGLKivEL",
    "xXheVnwHw",
  ],
  Es = "framer-kpH4f",
  js = {
    EE2fTZ4GL: "framer-v-w68vrm",
    FBGLKivEL: "framer-v-chf1qo",
    LcU1swUFt: "framer-v-1qoemtt",
    Lj1EkNiH8: "framer-v-1ig67az",
    va6bc84au: "framer-v-1hykxud",
    xXheVnwHw: "framer-v-1yoingt",
  };
function Ms(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Ns = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Bs = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  qs = l(F),
  Hs = {
    Hand: "EE2fTZ4GL",
    Next: "FBGLKivEL",
    Plus: "Lj1EkNiH8",
    Previous: "xXheVnwHw",
    Shrink: "LcU1swUFt",
    Text: "va6bc84au",
  },
  Ps = ({ height: e, id: t, title: o, width: a, ...n }) => {
    var s, i, f;
    return {
      ...n,
      MBjjK2yoF: (s = o ?? n.MBjjK2yoF) !== null && s !== void 0 ? s : "Mute",
      variant:
        (f = (i = Hs[n.variant]) !== null && i !== void 0 ? i : n.variant) !==
          null && f !== void 0
          ? f
          : "va6bc84au",
    };
  },
  As = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Os = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        MBjjK2yoF: c,
        ...m
      } = Ps(e),
      {
        baseVariant: p,
        classNames: d,
        clearLoadingGesture: y,
        gestureHandlers: b,
        gestureVariant: h,
        isLoading: w,
        setGestureState: u,
        setVariant: k,
        variants: g,
      } = G({
        cycleOrder: Ts,
        defaultVariant: "va6bc84au",
        variant: f,
        variantClassNames: js,
      }),
      v = As(e, g),
      C = T(null),
      L = () => p === "EE2fTZ4GL",
      D = () =>
        ![
          "LcU1swUFt",
          "EE2fTZ4GL",
          "Lj1EkNiH8",
          "FBGLKivEL",
          "xXheVnwHw",
        ].includes(p),
      _ = () =>
        !!["LcU1swUFt", "Lj1EkNiH8", "FBGLKivEL", "xXheVnwHw"].includes(p),
      Z = A(),
      X = [pe],
      H = J();
    return r(B, {
      id: i ?? Z,
      children: r(qs, {
        animate: g,
        initial: !1,
        children: r(Bs, {
          value: Ns,
          children: I(l.div, {
            ...m,
            ...b,
            className: E(Es, ...X, "framer-1hykxud", s, d),
            "data-framer-name": "Text",
            layoutDependency: v,
            layoutId: "va6bc84au",
            ref: t ?? C,
            style: {
              backdropFilter: "blur(5px)",
              backgroundColor:
                "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 24,
              WebkitBackdropFilter: "blur(5px)",
              ...n,
            },
            variants: {
              FBGLKivEL: { borderTopLeftRadius: 24 },
              LcU1swUFt: { borderTopLeftRadius: 24 },
              Lj1EkNiH8: { borderTopLeftRadius: 24 },
              xXheVnwHw: { borderTopLeftRadius: 24 },
            },
            ...Ms(
              {
                EE2fTZ4GL: { "data-framer-name": "Hand" },
                FBGLKivEL: { "data-framer-name": "Next" },
                LcU1swUFt: { "data-framer-name": "Shrink" },
                Lj1EkNiH8: { "data-framer-name": "Plus" },
                xXheVnwHw: { "data-framer-name": "Previous" },
              },
              p,
              h,
            ),
            children: [
              L() &&
                r(Ds, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 163.5,
                    intrinsicWidth: 165,
                    pixelHeight: 327,
                    pixelWidth: 330,
                    src: "https://framerusercontent.com/images/ejvAKzlSSMYF9H4yjp7fsPFKEM.png",
                  },
                  className: "framer-1ufebdz",
                  "data-framer-name": "hand",
                  layoutDependency: v,
                  layoutId: "Xp7q79lgb",
                }),
              D() &&
                r($, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                      },
                      children: "Mute",
                    }),
                  }),
                  className: "framer-1x1y0nv",
                  fonts: ["Inter"],
                  layoutDependency: v,
                  layoutId: "JszyfDCnC",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  text: c,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              _() &&
                I(l.div, {
                  className: "framer-17wlqwh",
                  layoutDependency: v,
                  layoutId: "kTFFV3iIB",
                  style: { opacity: 1, scale: 1 },
                  variants: { LcU1swUFt: { opacity: 0, scale: 0.2 } },
                  children: [
                    r(l.div, {
                      className: "framer-xb8ip1",
                      "data-framer-name": "Arrow",
                      layoutDependency: v,
                      layoutId: "QvYVyWEEF",
                      style: { opacity: 1, rotate: 75 },
                      variants: {
                        FBGLKivEL: { rotate: 90 },
                        Lj1EkNiH8: { opacity: 0, rotate: 90 },
                        xXheVnwHw: { rotate: -90 },
                      },
                      children: r(ee, {
                        className: "framer-1ca282r",
                        "data-framer-name": "Arrow",
                        layout: "position",
                        layoutDependency: v,
                        layoutId: "xMUKvnXPf",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 17 9 C 17 9 13.318 4 12 4 C 10.682 4 7 9 7 9" fill="transparent" stroke-width="2" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 11975585576,
                        withExternalLayout: !0,
                      }),
                    }),
                    r(l.div, {
                      className: "framer-1ns1eyr",
                      "data-framer-name": "Line",
                      layoutDependency: v,
                      layoutId: "EzFzE6Gzo",
                      style: { opacity: 1, rotate: 90, scale: 1 },
                      variants: {
                        FBGLKivEL: { opacity: 0, scale: 0.2 },
                        xXheVnwHw: { opacity: 0, scale: 0.2 },
                      },
                      children: r(ee, {
                        className: "framer-1oki3uw",
                        "data-framer-name": "Line",
                        layout: "position",
                        layoutDependency: v,
                        layoutId: "GTobBDVey",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 12 4 L 12 20" fill="transparent" stroke-width="2" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 12866500918,
                        withExternalLayout: !0,
                      }),
                    }),
                    r(l.div, {
                      className: "framer-gsqbgd",
                      "data-framer-name": "Line",
                      layoutDependency: v,
                      layoutId: "hKknyp04G",
                      style: { opacity: 1, scale: 1 },
                      variants: {
                        FBGLKivEL: { opacity: 0, scale: 0.2 },
                        xXheVnwHw: { opacity: 0, scale: 0.2 },
                      },
                      children: r(ee, {
                        className: "framer-1j67clb",
                        "data-framer-name": "Line",
                        layout: "position",
                        layoutDependency: v,
                        layoutId: "SucI0BihK",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 12 4 L 12 20" fill="transparent" stroke-width="2" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 12866500918,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Gs = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-kpH4f.framer-sbxx9a, .framer-kpH4f .framer-sbxx9a { display: block; }",
    ".framer-kpH4f.framer-1hykxud { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 31px; justify-content: center; overflow: hidden; padding: 6px 12px 6px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-kpH4f .framer-1ufebdz { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 19px); overflow: visible; position: relative; width: 19px; }",
    ".framer-kpH4f .framer-1x1y0nv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-kpH4f .framer-17wlqwh { flex: none; height: 32px; overflow: visible; position: relative; width: 32px; }",
    ".framer-kpH4f .framer-xb8ip1, .framer-kpH4f .framer-1ns1eyr, .framer-kpH4f .framer-gsqbgd { flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; }",
    ".framer-kpH4f .framer-1ca282r, .framer-kpH4f .framer-1oki3uw, .framer-kpH4f .framer-1j67clb { flex: none; height: 24px; left: calc(50.00000000000002% - 24px / 2); position: absolute; top: calc(50.00000000000002% - 24px / 2); width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kpH4f.framer-1hykxud { gap: 0px; } .framer-kpH4f.framer-1hykxud > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-kpH4f.framer-1hykxud > :first-child { margin-top: 0px; } .framer-kpH4f.framer-1hykxud > :last-child { margin-bottom: 0px; } }",
    ".framer-kpH4f.framer-v-1qoemtt.framer-1hykxud { display: block; height: 20px; padding: unset; width: 20px; }",
    ".framer-kpH4f.framer-v-1qoemtt .framer-17wlqwh, .framer-kpH4f.framer-v-1ig67az .framer-17wlqwh, .framer-kpH4f.framer-v-chf1qo .framer-17wlqwh, .framer-kpH4f.framer-v-1yoingt .framer-17wlqwh { left: calc(50.00000000000002% - 32px / 2); position: absolute; top: calc(50.00000000000002% - 32px / 2); }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kpH4f.framer-v-1qoemtt.framer-1hykxud { gap: 0px; } .framer-kpH4f.framer-v-1qoemtt.framer-1hykxud > *, .framer-kpH4f.framer-v-1qoemtt.framer-1hykxud > :first-child, .framer-kpH4f.framer-v-1qoemtt.framer-1hykxud > :last-child { margin: 0px; } }",
    ".framer-kpH4f.framer-v-w68vrm.framer-1hykxud { padding: 6px 12px 6px 10px; }",
    ".framer-kpH4f.framer-v-1ig67az.framer-1hykxud { aspect-ratio: 1 / 1; display: block; height: var(--framer-aspect-ratio-supported, 48px); padding: unset; width: 48px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kpH4f.framer-v-1ig67az.framer-1hykxud { gap: 0px; } .framer-kpH4f.framer-v-1ig67az.framer-1hykxud > *, .framer-kpH4f.framer-v-1ig67az.framer-1hykxud > :first-child, .framer-kpH4f.framer-v-1ig67az.framer-1hykxud > :last-child { margin: 0px; } }",
    ".framer-kpH4f.framer-v-chf1qo.framer-1hykxud, .framer-kpH4f.framer-v-1yoingt.framer-1hykxud { aspect-ratio: 1 / 1; display: block; height: var(--framer-aspect-ratio-supported, 40px); padding: unset; width: 40px; }",
    ".framer-kpH4f.framer-v-chf1qo .framer-xb8ip1 { left: -1px; }",
    ".framer-kpH4f.framer-v-chf1qo .framer-1ns1eyr { left: -11px; }",
    ".framer-kpH4f.framer-v-chf1qo .framer-gsqbgd, .framer-kpH4f.framer-v-1yoingt .framer-gsqbgd { left: -16px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kpH4f.framer-v-chf1qo.framer-1hykxud { gap: 0px; } .framer-kpH4f.framer-v-chf1qo.framer-1hykxud > *, .framer-kpH4f.framer-v-chf1qo.framer-1hykxud > :first-child, .framer-kpH4f.framer-v-chf1qo.framer-1hykxud > :last-child { margin: 0px; } }",
    ".framer-kpH4f.framer-v-1yoingt .framer-xb8ip1 { left: unset; right: -1px; }",
    ".framer-kpH4f.framer-v-1yoingt .framer-1ns1eyr { left: unset; right: -10px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kpH4f.framer-v-1yoingt.framer-1hykxud { gap: 0px; } .framer-kpH4f.framer-v-1yoingt.framer-1hykxud > *, .framer-kpH4f.framer-v-1yoingt.framer-1hykxud > :first-child, .framer-kpH4f.framer-v-1yoingt.framer-1hykxud > :last-child { margin: 0px; } }",
    ...de,
  ],
  Ht = q(Os, Gs, "framer-kpH4f"),
  pa = Ht;
Ht.displayName = "Cursor/Tip";
Ht.defaultProps = { height: 31, width: 60.5 };
M(Ht, {
  variant: {
    options: [
      "va6bc84au",
      "LcU1swUFt",
      "EE2fTZ4GL",
      "Lj1EkNiH8",
      "FBGLKivEL",
      "xXheVnwHw",
    ],
    optionTitles: ["Text", "Shrink", "Hand", "Plus", "Next", "Previous"],
    title: "Variant",
    type: x.Enum,
  },
  MBjjK2yoF: {
    defaultValue: "Mute",
    displayTextArea: !1,
    title: "Title",
    type: x.String,
  },
});
z(
  Ht,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var zs = Y(pa),
  Xs = Ee(l.div),
  Ws = [
    "cc6TANFjz",
    "lOKtvR8eI",
    "qrXesx9n1",
    "zTFDDlNjh",
    "TogF5EtvT",
    "KL7EsyPpV",
    "M1BweyOQ6",
    "RLajb6V4g",
    "jiPF_ovG2",
    "X1zclGT3K",
    "sjXq13n4p",
    "xhdLjs18_",
    "ckJ06GOtB",
    "AK7kULmXl",
  ],
  Zs = "framer-t7mUw",
  Qs = {
    AK7kULmXl: "framer-v-dsfgu4",
    cc6TANFjz: "framer-v-r1oarb",
    ckJ06GOtB: "framer-v-49m2vl",
    jiPF_ovG2: "framer-v-929yof",
    KL7EsyPpV: "framer-v-1eymj1m",
    lOKtvR8eI: "framer-v-xn115z",
    M1BweyOQ6: "framer-v-z3bcc5",
    qrXesx9n1: "framer-v-vlcsh3",
    RLajb6V4g: "framer-v-y31035",
    sjXq13n4p: "framer-v-cpgrwm",
    TogF5EtvT: "framer-v-tzj0lu",
    X1zclGT3K: "framer-v-jd9hyu",
    xhdLjs18_: "framer-v-abvk9l",
    zTFDDlNjh: "framer-v-tsc2i4",
  };
function ua(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Ys = { damping: 40, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Ks = { damping: 30, delay: 0.2, mass: 1, stiffness: 200, type: "spring" },
  Js = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ks,
    x: 0,
    y: 0,
  },
  $s = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  el = (e, t) => `translate(-50%, -50%) ${t}`,
  tl = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  rl = l(F),
  al = {
    "Back to Home": "ckJ06GOtB",
    "Show More": "xhdLjs18_",
    About: "KL7EsyPpV",
    Controls: "TogF5EtvT",
    Default: "cc6TANFjz",
    Hide: "AK7kULmXl",
    Icon: "RLajb6V4g",
    Layout: "zTFDDlNjh",
    Next: "jiPF_ovG2",
    Previous: "X1zclGT3K",
    Project: "M1BweyOQ6",
    Sights: "sjXq13n4p",
    Sound: "lOKtvR8eI",
    Theme: "qrXesx9n1",
  },
  ol = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = al[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "cc6TANFjz",
    };
  },
  nl = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  il = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = ol(e),
      {
        baseVariant: m,
        classNames: p,
        clearLoadingGesture: d,
        gestureHandlers: y,
        gestureVariant: b,
        isLoading: h,
        setGestureState: w,
        setVariant: u,
        variants: k,
      } = G({
        cycleOrder: Ws,
        defaultVariant: "cc6TANFjz",
        variant: f,
        variantClassNames: Qs,
      }),
      g = nl(e, k),
      v = T(null),
      C = A(),
      L = [],
      D = J();
    return r(B, {
      id: i ?? C,
      children: r(rl, {
        animate: k,
        initial: !1,
        children: r(tl, {
          value: Ys,
          children: r(l.div, {
            ...c,
            ...y,
            className: E(Zs, ...L, "framer-r1oarb", s, p),
            "data-framer-name": "Default",
            layoutDependency: g,
            layoutId: "cc6TANFjz",
            ref: t ?? v,
            style: { ...n },
            ...ua(
              {
                AK7kULmXl: { "data-framer-name": "Hide" },
                ckJ06GOtB: { "data-framer-name": "Back to Home" },
                jiPF_ovG2: { "data-framer-name": "Next" },
                KL7EsyPpV: { "data-framer-name": "About" },
                lOKtvR8eI: { "data-framer-name": "Sound" },
                M1BweyOQ6: { "data-framer-name": "Project" },
                qrXesx9n1: { "data-framer-name": "Theme" },
                RLajb6V4g: { "data-framer-name": "Icon" },
                sjXq13n4p: { "data-framer-name": "Sights" },
                TogF5EtvT: { "data-framer-name": "Controls" },
                X1zclGT3K: { "data-framer-name": "Previous" },
                xhdLjs18_: { "data-framer-name": "Show More" },
                zTFDDlNjh: { "data-framer-name": "Layout" },
              },
              m,
              b,
            ),
            children: r(Q, {
              children: r(Xs, {
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                animate: sa("animate", "18lbdcp", Js, "r1oarb"),
                className: "framer-18lbdcp-container",
                "data-framer-appear-id": "18lbdcp",
                initial: sa("initial", "18lbdcp", $s, "r1oarb"),
                layoutDependency: g,
                layoutId: "zqiSGEthh-container",
                style: { opacity: 1 },
                variants: { AK7kULmXl: { opacity: 0 } },
                ...ua(
                  {
                    AK7kULmXl: { animate: void 0, initial: void 0 },
                    ckJ06GOtB: { animate: void 0, initial: void 0 },
                    jiPF_ovG2: { animate: void 0, initial: void 0 },
                    KL7EsyPpV: { animate: void 0, initial: void 0 },
                    lOKtvR8eI: { animate: void 0, initial: void 0 },
                    M1BweyOQ6: {
                      animate: void 0,
                      initial: void 0,
                      transformTemplate: el,
                    },
                    qrXesx9n1: { animate: void 0, initial: void 0 },
                    RLajb6V4g: { animate: void 0, initial: void 0 },
                    sjXq13n4p: { animate: void 0, initial: void 0 },
                    TogF5EtvT: { animate: void 0, initial: void 0 },
                    X1zclGT3K: { animate: void 0, initial: void 0 },
                    xhdLjs18_: { animate: void 0, initial: void 0 },
                    zTFDDlNjh: { animate: void 0, initial: void 0 },
                  },
                  m,
                  b,
                ),
                children: r(pa, {
                  height: "100%",
                  id: "zqiSGEthh",
                  layoutId: "zqiSGEthh",
                  MBjjK2yoF: "Sound",
                  variant: "LcU1swUFt",
                  width: "100%",
                  ...ua(
                    {
                      ckJ06GOtB: {
                        MBjjK2yoF: "Back to Home",
                        variant: "va6bc84au",
                      },
                      jiPF_ovG2: { variant: "FBGLKivEL" },
                      KL7EsyPpV: { variant: "EE2fTZ4GL" },
                      lOKtvR8eI: { variant: "va6bc84au" },
                      M1BweyOQ6: { variant: "Lj1EkNiH8" },
                      qrXesx9n1: { MBjjK2yoF: "Theme", variant: "va6bc84au" },
                      RLajb6V4g: {
                        MBjjK2yoF: "I'm working.",
                        variant: "va6bc84au",
                      },
                      sjXq13n4p: { MBjjK2yoF: "Sights", variant: "va6bc84au" },
                      TogF5EtvT: {
                        MBjjK2yoF: "Controls",
                        variant: "va6bc84au",
                      },
                      X1zclGT3K: { variant: "xXheVnwHw" },
                      xhdLjs18_: {
                        MBjjK2yoF: "Show More",
                        variant: "va6bc84au",
                      },
                      zTFDDlNjh: { MBjjK2yoF: "Layout", variant: "va6bc84au" },
                    },
                    m,
                    b,
                  ),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  sl = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-t7mUw.framer-11g8k4s, .framer-t7mUw .framer-11g8k4s { display: block; }",
    ".framer-t7mUw.framer-r1oarb { height: 20px; position: relative; width: 20px; }",
    ".framer-t7mUw .framer-18lbdcp-container { flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: auto; }",
    ".framer-t7mUw.framer-v-z3bcc5 .framer-18lbdcp-container { left: 120%; top: 120%; }",
  ],
  Pt = q(il, sl, "framer-t7mUw"),
  rx = Pt;
Pt.displayName = "Cursor/Default";
Pt.defaultProps = { height: 20, width: 20 };
M(Pt, {
  variant: {
    options: [
      "cc6TANFjz",
      "lOKtvR8eI",
      "qrXesx9n1",
      "zTFDDlNjh",
      "TogF5EtvT",
      "KL7EsyPpV",
      "M1BweyOQ6",
      "RLajb6V4g",
      "jiPF_ovG2",
      "X1zclGT3K",
      "sjXq13n4p",
      "xhdLjs18_",
      "ckJ06GOtB",
      "AK7kULmXl",
    ],
    optionTitles: [
      "Default",
      "Sound",
      "Theme",
      "Layout",
      "Controls",
      "About",
      "Project",
      "Icon",
      "Next",
      "Previous",
      "Sights",
      "Show More",
      "Back to Home",
      "Hide",
    ],
    title: "Variant",
    type: x.Enum,
  },
});
z(Pt, [{ explicitInter: !0, fonts: [] }, ...zs], {
  supportsExplicitInterCodegen: !0,
});
var zf = {};
Ce(zf, { __FramerMetadata__: () => Gf, default: () => Of });
var Gt = {};
Ce(Gt, { __FramerMetadata__: () => zl, default: () => vt });
var ha = {};
Ce(ha, { __FramerMetadata__: () => xl, default: () => yt });
var fl = ["F3z2GrFiS", "AWfAm4VHO"],
  cl = "framer-Jf1Ad",
  ml = { AWfAm4VHO: "framer-v-4h5wd3", F3z2GrFiS: "framer-v-x46wqu" };
function Mo(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var dl = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var pl = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  ul = { Default: "F3z2GrFiS", Detail: "AWfAm4VHO" },
  hl = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = ul[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "F3z2GrFiS",
    };
  },
  gl = (e, t) => t.join("-") + e.layoutDependency,
  yl = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = hl(e),
      {
        baseVariant: m,
        classNames: p,
        gestureVariant: d,
        setGestureState: y,
        setVariant: b,
        transition: h,
        variants: w,
      } = G({
        cycleOrder: fl,
        defaultVariant: "F3z2GrFiS",
        transitions: dl,
        variant: f,
        variantClassNames: ml,
      }),
      u = gl(e, w),
      k = T(null),
      g = A(),
      v = [];
    return r(B, {
      id: i ?? g,
      children: r(pl, {
        value: h,
        children: I(l.div, {
          ...c,
          animate: w,
          className: E(cl, ...v, "framer-x46wqu", s, p),
          "data-framer-name": "Default",
          initial: f,
          layoutDependency: u,
          layoutId: "F3z2GrFiS",
          onHoverEnd: () => y({ isHovered: !1 }),
          onHoverStart: () => y({ isHovered: !0 }),
          onTap: () => y({ isPressed: !1 }),
          onTapCancel: () => y({ isPressed: !1 }),
          onTapStart: () => y({ isPressed: !0 }),
          ref: t ?? k,
          style: { ...n },
          ...Mo({ AWfAm4VHO: { "data-framer-name": "Detail" } }, m, d),
          children: [
            r(ee, {
              className: "framer-iy0g84",
              "data-framer-name": "rectangular",
              layout: "position",
              layoutDependency: u,
              layoutId: "Uu7Gnc7Cd",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 20"><path d="M 0 6.857 C 0 4.457 0 3.257 0.454 2.34 C 0.854 1.534 1.491 0.878 2.275 0.467 C 3.167 -0 4.333 -0 6.667 -0 L 10 -0 C 12.333 -0 13.5 -0 14.392 0.467 C 15.176 0.878 15.813 1.534 16.213 2.34 C 16.667 3.257 16.667 4.457 16.667 6.857 C 16.667 9.257 16.667 10.457 16.213 11.374 C 15.813 12.181 15.176 12.836 14.392 13.247 C 13.5 13.714 12.333 13.714 10 13.714 L 6.667 13.714 C 4.333 13.714 3.167 13.714 2.275 13.247 C 1.491 12.836 0.854 12.181 0.454 11.374 C 0 10.457 0 9.257 0 6.857 Z" transform="translate(0.667 3.143) rotate(-90 8.333 6.857)" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round"></path><path d="M 6 12.5 L 12 12.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
              svgContentId: 3637693916,
              withExternalLayout: !0,
            }),
            r(ee, {
              className: "framer-1vy1m5w",
              "data-framer-name": "rectangular",
              layout: "position",
              layoutDependency: u,
              layoutId: "rwwqZ8zrO",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 20"><path d="M 5 15 L 13 15" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 5 18 L 13 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 3 6.7 C 3 4.95 3 4.075 3.327 3.406 C 3.615 2.818 4.074 2.34 4.638 2.041 C 5.28 1.7 6.12 1.7 7.8 1.7 L 10.2 1.7 C 11.88 1.7 12.72 1.7 13.362 2.041 C 13.926 2.34 14.385 2.818 14.673 3.406 C 15 4.075 15 4.95 15 6.7 C 15 8.45 15 9.325 14.673 9.994 C 14.385 10.582 13.926 11.06 13.362 11.359 C 12.72 11.7 11.88 11.7 10.2 11.7 L 7.8 11.7 C 6.12 11.7 5.28 11.7 4.638 11.359 C 4.074 11.06 3.615 10.582 3.327 9.994 C 3 9.325 3 8.45 3 6.7 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
              svgContentId: 178402627,
              withExternalLayout: !0,
              ...Mo({ AWfAm4VHO: { svgContentId: 1487607704 } }, m, d),
            }),
          ],
        }),
      }),
    });
  }),
  vl = [
    '.framer-Jf1Ad[data-border="true"]::after, .framer-Jf1Ad [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Jf1Ad.framer-1lpcppm, .framer-Jf1Ad .framer-1lpcppm { display: block; }",
    ".framer-Jf1Ad.framer-x46wqu { height: 36px; overflow: hidden; position: relative; width: 36px; }",
    ".framer-Jf1Ad .framer-iy0g84 { flex: none; height: 20px; left: calc(50.00000000000002% - 18px / 2); position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 18px; }",
    ".framer-Jf1Ad .framer-1vy1m5w { bottom: -25px; flex: none; height: 20px; left: calc(50.00000000000002% - 18px / 2); position: absolute; width: 18px; }",
    ".framer-Jf1Ad.framer-v-4h5wd3 .framer-iy0g84 { top: -22px; }",
    ".framer-Jf1Ad.framer-v-4h5wd3 .framer-1vy1m5w { bottom: unset; top: calc(50.00000000000002% - 20px / 2); }",
  ],
  At = q(yl, vl, "framer-Jf1Ad"),
  yt = At;
At.displayName = "Button/Brief";
At.defaultProps = { height: 36, width: 36 };
M(At, {
  variant: {
    options: ["F3z2GrFiS", "AWfAm4VHO"],
    optionTitles: ["Default", "Detail"],
    title: "Variant",
    type: x.Enum,
  },
});
z(At, []);
var xl = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerbyEnpadr8",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"AWfAm4VHO":{"layout":["fixed","fixed"]}}}',
        framerIntrinsicWidth: "36",
        framerIntrinsicHeight: "36",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var bl = ["RI2EqELaD"];
var wl = { RI2EqELaD: "framer-v-1r1cte3" };
var kl = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  Cl = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  _l = ({ height: e, id: t, width: o, ...a }) => ({ ...a }),
  Fl = (e, t) => t.join("-") + e.layoutDependency,
  Rl = N(function (e, t) {
    let { activeLocale: o } = O(),
      { style: a, className: n, layoutId: s, variant: i, ...f } = _l(e),
      {
        baseVariant: c,
        classNames: m,
        gestureVariant: p,
        setGestureState: d,
        setVariant: y,
        transition: b,
        variants: h,
      } = G({
        cycleOrder: bl,
        defaultVariant: "RI2EqELaD",
        transitions: kl,
        variant: i,
        variantClassNames: wl,
      }),
      w = Fl(e, h),
      u = T(null),
      k = A();
    return r(B, {
      id: s ?? k,
      children: r(l.div, {
        initial: i,
        animate: h,
        onHoverStart: () => d({ isHovered: !0 }),
        onHoverEnd: () => d({ isHovered: !1 }),
        onTapStart: () => d({ isPressed: !0 }),
        onTap: () => d({ isPressed: !1 }),
        onTapCancel: () => d({ isPressed: !1 }),
        className: E("framer-jZOfI", m),
        style: { display: "contents" },
        children: r(Cl, {
          value: b,
          children: r(l.div, {
            ...f,
            className: E("framer-1r1cte3", n),
            "data-framer-name": "Variant 1",
            layoutDependency: w,
            layoutId: "RI2EqELaD",
            ref: t ?? u,
            style: {
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              ...a,
            },
            children: r(ee, {
              className: "framer-1v527ku",
              "data-framer-name": "graphic",
              layout: "position",
              layoutDependency: w,
              layoutId: "Ib_uFjBrW",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 6 12 C 6 10.25 6 9.375 6.327 8.706 C 6.609 8.124 7.068 7.646 7.638 7.341 C 8.28 7 9.12 7 10.8 7 L 13.2 7 C 14.88 7 15.72 7 16.362 7.341 C 16.932 7.646 17.391 8.124 17.673 8.706 C 18 9.375 18 10.25 18 12 C 18 13.75 18 14.625 17.673 15.294 C 17.391 15.876 16.932 16.354 16.362 16.659 C 15.72 17 14.88 17 13.2 17 L 10.8 17 C 9.12 17 8.28 17 7.638 16.659 C 7.068 16.354 6.609 15.876 6.327 15.294 C 6 14.625 6 13.75 6 12 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 21 12 C 21 10.25 21 9.375 21.327 8.706 C 21.609 8.124 22.068 7.646 22.638 7.341 C 23.28 7 24.12 7 25.8 7 L 28.2 7 C 29.88 7 30.72 7 31.362 7.341 C 31.932 7.646 32.391 8.124 32.673 8.706 C 33 9.375 33 10.25 33 12 C 33 13.75 33 14.625 32.673 15.294 C 32.391 15.876 31.932 16.354 31.362 16.659 C 30.72 17 29.88 17 28.2 17 L 25.8 17 C 24.12 17 23.28 17 22.638 16.659 C 22.068 16.354 21.609 15.876 21.327 15.294 C 21 14.625 21 13.75 21 12 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M -9 12 C -9 10.25 -9 9.375 -8.673 8.706 C -8.391 8.124 -7.932 7.646 -7.362 7.341 C -6.72 7 -5.88 7 -4.2 7 L -1.8 7 C -0.12 7 0.72 7 1.362 7.341 C 1.932 7.646 2.391 8.124 2.673 8.706 C 3 9.375 3 10.25 3 12 C 3 13.75 3 14.625 2.673 15.294 C 2.391 15.876 1.932 16.354 1.362 16.659 C 0.72 17 -0.12 17 -1.8 17 L -4.2 17 C -5.88 17 -6.72 17 -7.362 16.659 C -7.932 16.354 -8.391 15.876 -8.673 15.294 C -9 14.625 -9 13.75 -9 12 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
              svgContentId: 1053578462,
              withExternalLayout: !0,
            }),
          }),
        }),
      }),
    });
  }),
  Sl = [
    '.framer-jZOfI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-jZOfI .framer-1qiax4a { display: block; }",
    ".framer-jZOfI .framer-1r1cte3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 36px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jZOfI .framer-1v527ku { flex: none; height: 24px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-jZOfI .framer-1r1cte3 { gap: 0px; } .framer-jZOfI .framer-1r1cte3 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-jZOfI .framer-1r1cte3 > :first-child { margin-left: 0px; } .framer-jZOfI .framer-1r1cte3 > :last-child { margin-right: 0px; } }",
  ],
  Mr = q(Rl, Sl, "framer-jZOfI"),
  ga = Mr;
(Mr.displayName = "Button/Stack"),
  (Mr.defaultProps = { height: 36, width: 36 }),
  z(Mr, []);
var Ll = Y(ga),
  Il = Fe($),
  Vl = Re($),
  Ul = Y(yt),
  Dl = _e(l.div),
  Tl = { RouvpKnIw: { hover: !0 } },
  El = ["Z1T1fYAWN", "RouvpKnIw", "RgK6g1O_Q", "DLSJQF14w"],
  jl = "framer-ZNY0i",
  Ml = {
    DLSJQF14w: "framer-v-1y7ap77",
    RgK6g1O_Q: "framer-v-trcy9r",
    RouvpKnIw: "framer-v-jp449s",
    Z1T1fYAWN: "framer-v-27g8qb",
  };
function ya(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Nl = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Bl = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  ql = l(F),
  Hl = {
    "Off/Mobile": "DLSJQF14w",
    "On/Mobile": "RgK6g1O_Q",
    Off: "RouvpKnIw",
    On: "Z1T1fYAWN",
  },
  Pl = ({ height: e, id: t, tap: o, tapA: a, width: n, ...s }) => {
    var i, f;
    return {
      ...s,
      ah1iEr8il: a ?? s.ah1iEr8il,
      K4FXNGAHE: o ?? s.K4FXNGAHE,
      variant:
        (f = (i = Hl[s.variant]) !== null && i !== void 0 ? i : s.variant) !==
          null && f !== void 0
          ? f
          : "Z1T1fYAWN",
    };
  },
  Al = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Ol = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        K4FXNGAHE: c,
        ah1iEr8il: m,
        ...p
      } = Pl(e),
      {
        baseVariant: d,
        classNames: y,
        clearLoadingGesture: b,
        gestureHandlers: h,
        gestureVariant: w,
        isLoading: u,
        setGestureState: k,
        setVariant: g,
        variants: v,
      } = G({
        cycleOrder: El,
        defaultVariant: "Z1T1fYAWN",
        enabledGestures: Tl,
        variant: f,
        variantClassNames: Ml,
      }),
      C = Al(e, v),
      { activeVariantCallback: L, delay: D } = ne(d),
      _ = L(async (...ce) => {
        if (
          (k({ isPressed: !1 }),
          (c && (await c(...ce)) === !1) || (m && (await m(...ce)) === !1))
        )
          return !1;
      }),
      Z = T(null),
      X = () => !["RgK6g1O_Q", "DLSJQF14w"].includes(d),
      H = () => !!["RgK6g1O_Q", "DLSJQF14w"].includes(d),
      K = A(),
      te = [pe],
      le = J();
    return r(B, {
      id: i ?? K,
      children: r(ql, {
        animate: v,
        initial: !1,
        children: r(Bl, {
          value: Nl,
          children: r(l.div, {
            ...p,
            ...h,
            className: E(jl, ...te, "framer-27g8qb", s, y),
            "data-framer-name": "On",
            "data-highlight": !0,
            layoutDependency: C,
            layoutId: "Z1T1fYAWN",
            onTap: _,
            ref: t ?? Z,
            style: {
              backgroundColor:
                "var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0))",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              opacity: 1,
              ...n,
            },
            variants: {
              "RouvpKnIw-hover": {
                backgroundColor:
                  "var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15))",
              },
              DLSJQF14w: { opacity: 0.5 },
              RouvpKnIw: { opacity: 0.5 },
            },
            ...ya(
              {
                "RouvpKnIw-hover": { "data-framer-name": void 0 },
                DLSJQF14w: { "data-framer-name": "Off/Mobile" },
                RgK6g1O_Q: { "data-framer-name": "On/Mobile" },
                RouvpKnIw: { "data-framer-name": "Off" },
              },
              d,
              w,
            ),
            children: I(Dl, {
              className: "framer-6egf6n",
              layoutDependency: C,
              layoutId: "ItGNt1gpC",
              children: [
                X() &&
                  r(Q, {
                    children: r(l.div, {
                      className: "framer-1xglqdf-container",
                      layoutDependency: C,
                      layoutId: "Jwoq4FD7C-container",
                      children: r(ga, {
                        height: "100%",
                        id: "Jwoq4FD7C",
                        layoutId: "Jwoq4FD7C",
                        width: "100%",
                      }),
                    }),
                  }),
                r(Il, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "Stack",
                    }),
                  }),
                  className: "framer-11uj5d2",
                  fonts: ["Inter"],
                  layoutDependency: C,
                  layoutId: "zFH3i_9um",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...ya(
                    {
                      DLSJQF14w: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "Brief",
                          }),
                        }),
                      },
                      RgK6g1O_Q: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "Brief",
                          }),
                        }),
                      },
                    },
                    d,
                    w,
                  ),
                }),
                r(Vl, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "\u6C34\u5E73",
                    }),
                  }),
                  className: "framer-1u2fqeu",
                  fonts: ["Inter"],
                  layoutDependency: C,
                  layoutId: "k3077n8Mn",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...ya(
                    {
                      DLSJQF14w: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "\u7B80\u8981",
                          }),
                        }),
                      },
                      RgK6g1O_Q: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "\u7B80\u8981",
                          }),
                        }),
                      },
                    },
                    d,
                    w,
                  ),
                }),
                H() &&
                  r(Q, {
                    children: r(l.div, {
                      className: "framer-1hqbz94-container",
                      layoutDependency: C,
                      layoutId: "XJ6d3Fbem-container",
                      children: r(yt, {
                        height: "100%",
                        id: "XJ6d3Fbem",
                        layoutId: "XJ6d3Fbem",
                        style: { height: "100%", width: "100%" },
                        variant: "F3z2GrFiS",
                        width: "100%",
                      }),
                    }),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Gl = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-ZNY0i.framer-1hwwwyy, .framer-ZNY0i .framer-1hwwwyy { display: block; }",
    ".framer-ZNY0i.framer-27g8qb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 83px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-ZNY0i .framer-6egf6n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 20px 0px; position: relative; width: 100%; }",
    ".framer-ZNY0i .framer-1xglqdf-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-ZNY0i .framer-11uj5d2, .framer-ZNY0i .framer-1u2fqeu { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-ZNY0i .framer-1hqbz94-container { flex: none; height: 36px; position: relative; width: 36px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ZNY0i.framer-27g8qb, .framer-ZNY0i .framer-6egf6n { gap: 0px; } .framer-ZNY0i.framer-27g8qb > *, .framer-ZNY0i .framer-6egf6n > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-ZNY0i.framer-27g8qb > :first-child, .framer-ZNY0i .framer-6egf6n > :first-child { margin-top: 0px; } .framer-ZNY0i.framer-27g8qb > :last-child, .framer-ZNY0i .framer-6egf6n > :last-child { margin-bottom: 0px; } }",
    ".framer-ZNY0i.framer-v-trcy9r .framer-11uj5d2, .framer-ZNY0i.framer-v-1y7ap77 .framer-11uj5d2 { order: 2; }",
    ".framer-ZNY0i.framer-v-trcy9r .framer-1u2fqeu, .framer-ZNY0i.framer-v-1y7ap77 .framer-1u2fqeu { order: 3; }",
    ".framer-ZNY0i.framer-v-trcy9r .framer-1hqbz94-container, .framer-ZNY0i.framer-v-1y7ap77 .framer-1hqbz94-container { order: 1; }",
    ...de,
  ],
  Ot = q(Ol, Gl, "framer-ZNY0i"),
  vt = Ot;
Ot.displayName = "Toggle/Stack";
Ot.defaultProps = { height: 110.5, width: 83 };
M(Ot, {
  variant: {
    options: ["Z1T1fYAWN", "RouvpKnIw", "RgK6g1O_Q", "DLSJQF14w"],
    optionTitles: ["On", "Off", "On/Mobile", "Off/Mobile"],
    title: "Variant",
    type: x.Enum,
  },
  K4FXNGAHE: { title: "Tap", type: x.EventHandler },
  ah1iEr8il: { title: "Tap A", type: x.EventHandler },
});
z(
  Ot,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...Ll,
    ...Ul,
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var zl = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerqtXQAdCpB",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "110.5",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"RouvpKnIw":{"layout":["fixed","auto"]},"RgK6g1O_Q":{"layout":["fixed","auto"]},"DLSJQF14w":{"layout":["fixed","auto"]},"b5tzWchme":{"layout":["fixed","auto"]}}}',
        framerVariables: '{"K4FXNGAHE":"tap","ah1iEr8il":"tapA"}',
        framerIntrinsicWidth: "83",
        framerContractVersion: "1",
        framerComponentViewportWidth: "true",
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var Xt = {};
Ce(Xt, { __FramerMetadata__: () => Sf, default: () => xt });
var Xl = ["rz3VYOc70"];
var Wl = { rz3VYOc70: "framer-v-1ce0a1u" };
var Zl = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  Ql = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Yl = ({ height: e, id: t, width: o, ...a }) => ({ ...a }),
  Kl = (e, t) => t.join("-") + e.layoutDependency,
  Jl = N(function (e, t) {
    let { activeLocale: o } = O(),
      { style: a, className: n, layoutId: s, variant: i, ...f } = Yl(e),
      {
        baseVariant: c,
        classNames: m,
        gestureVariant: p,
        setGestureState: d,
        setVariant: y,
        transition: b,
        variants: h,
      } = G({
        cycleOrder: Xl,
        defaultVariant: "rz3VYOc70",
        transitions: Zl,
        variant: i,
        variantClassNames: Wl,
      }),
      w = Kl(e, h),
      u = T(null),
      k = A();
    return r(B, {
      id: s ?? k,
      children: r(l.div, {
        initial: i,
        animate: h,
        onHoverStart: () => d({ isHovered: !0 }),
        onHoverEnd: () => d({ isHovered: !1 }),
        onTapStart: () => d({ isPressed: !0 }),
        onTap: () => d({ isPressed: !1 }),
        onTapCancel: () => d({ isPressed: !1 }),
        className: E("framer-z4HUE", m),
        style: { display: "contents" },
        children: r(Ql, {
          value: b,
          children: r(l.div, {
            ...f,
            className: E("framer-1ce0a1u", n),
            "data-framer-name": "Variant 1",
            layoutDependency: w,
            layoutId: "rz3VYOc70",
            ref: t ?? u,
            style: { ...a },
            children: r(ee, {
              className: "framer-95y9hp",
              "data-framer-name": "rectangular",
              layout: "position",
              layoutDependency: w,
              layoutId: "CQ8YzIWvK",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 20"><path d="M 5 15 L 13 15" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 5 18 L 13 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 3 6.7 C 3 4.95 3 4.075 3.327 3.406 C 3.615 2.818 4.074 2.34 4.638 2.041 C 5.28 1.7 6.12 1.7 7.8 1.7 L 10.2 1.7 C 11.88 1.7 12.72 1.7 13.362 2.041 C 13.926 2.34 14.385 2.818 14.673 3.406 C 15 4.075 15 4.95 15 6.7 C 15 8.45 15 9.325 14.673 9.994 C 14.385 10.582 13.926 11.06 13.362 11.359 C 12.72 11.7 11.88 11.7 10.2 11.7 L 7.8 11.7 C 6.12 11.7 5.28 11.7 4.638 11.359 C 4.074 11.06 3.615 10.582 3.327 9.994 C 3 9.325 3 8.45 3 6.7 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
              svgContentId: 1487607704,
              withExternalLayout: !0,
            }),
          }),
        }),
      }),
    });
  }),
  $l = [
    '.framer-z4HUE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-z4HUE .framer-prz3k { display: block; }",
    ".framer-z4HUE .framer-1ce0a1u { height: 36px; overflow: visible; position: relative; width: 36px; }",
    ".framer-z4HUE .framer-95y9hp { flex: none; height: 20px; left: calc(50.00000000000002% - 18px / 2); position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 18px; }",
  ],
  Nr = q(Jl, $l, "framer-z4HUE"),
  Br = Nr;
(Nr.displayName = "Button/Detail"),
  (Nr.defaultProps = { height: 36, width: 36 }),
  z(Nr, []);
var tf = ["Gi1Eke_Ic"];
var rf = { Gi1Eke_Ic: "framer-v-1lnt74i" };
var af = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var of = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  nf = ({ height: e, id: t, width: o, ...a }) => ({ ...a }),
  sf = (e, t) => t.join("-") + e.layoutDependency,
  lf = N(function (e, t) {
    let { activeLocale: o } = O(),
      { style: a, className: n, layoutId: s, variant: i, ...f } = nf(e),
      {
        baseVariant: c,
        classNames: m,
        gestureVariant: p,
        setGestureState: d,
        setVariant: y,
        transition: b,
        variants: h,
      } = G({
        cycleOrder: tf,
        defaultVariant: "Gi1Eke_Ic",
        transitions: af,
        variant: i,
        variantClassNames: rf,
      }),
      w = sf(e, h),
      u = T(null),
      k = A();
    return r(B, {
      id: s ?? k,
      children: r(l.div, {
        initial: i,
        animate: h,
        onHoverStart: () => d({ isHovered: !0 }),
        onHoverEnd: () => d({ isHovered: !1 }),
        onTapStart: () => d({ isPressed: !0 }),
        onTap: () => d({ isPressed: !1 }),
        onTapCancel: () => d({ isPressed: !1 }),
        className: E("framer-u2nbQ", m),
        style: { display: "contents" },
        children: r(of, {
          value: b,
          children: r(l.div, {
            ...f,
            className: E("framer-1lnt74i", n),
            "data-framer-name": "Variant 1",
            layoutDependency: w,
            layoutId: "Gi1Eke_Ic",
            ref: t ?? u,
            style: { ...a },
            children: r(ee, {
              className: "framer-1tiu58i",
              "data-framer-name": "graphic",
              layout: "position",
              layoutDependency: w,
              layoutId: "Englmcx60",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 7 10.6 C 5.775 10.6 5.162 10.6 4.694 10.355 C 4.28 10.136 3.945 9.792 3.738 9.372 C 3.5 8.89 3.5 8.26 3.5 7 L 3.5 5.2 C 3.5 3.94 3.5 3.31 3.738 2.828 C 3.948 2.405 4.283 2.061 4.694 1.845 C 5.162 1.6 5.775 1.6 7 1.6 C 8.225 1.6 8.838 1.6 9.306 1.845 C 9.717 2.061 10.052 2.405 10.262 2.828 C 10.5 3.31 10.5 3.94 10.5 5.2 L 10.5 7 C 10.5 8.26 10.5 8.89 10.262 9.372 C 10.052 9.795 9.717 10.139 9.306 10.355 C 8.838 10.6 8.225 10.6 7 10.6 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 17 10.6 C 15.775 10.6 15.162 10.6 14.694 10.355 C 14.28 10.136 13.945 9.792 13.738 9.372 C 13.5 8.89 13.5 8.26 13.5 7 L 13.5 5.2 C 13.5 3.94 13.5 3.31 13.738 2.828 C 13.948 2.405 14.283 2.061 14.694 1.845 C 15.162 1.6 15.775 1.6 17 1.6 C 18.225 1.6 18.838 1.6 19.306 1.845 C 19.717 2.061 20.052 2.405 20.262 2.828 C 20.5 3.31 20.5 3.94 20.5 5.2 L 20.5 7 C 20.5 8.26 20.5 8.89 20.262 9.372 C 20.052 9.795 19.717 10.139 19.306 10.355 C 18.838 10.6 18.225 10.6 17 10.6 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 7 22.4 C 5.775 22.4 5.162 22.4 4.694 22.155 C 4.28 21.936 3.945 21.592 3.738 21.172 C 3.5 20.69 3.5 20.06 3.5 18.8 L 3.5 17 C 3.5 15.74 3.5 15.11 3.738 14.628 C 3.948 14.205 4.283 13.861 4.694 13.645 C 5.162 13.4 5.775 13.4 7 13.4 C 8.225 13.4 8.838 13.4 9.306 13.645 C 9.717 13.861 10.052 14.205 10.262 14.628 C 10.5 15.11 10.5 15.74 10.5 17 L 10.5 18.8 C 10.5 20.06 10.5 20.69 10.262 21.172 C 10.052 21.595 9.717 21.939 9.306 22.155 C 8.838 22.4 8.225 22.4 7 22.4 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 17 22.4 C 15.775 22.4 15.162 22.4 14.694 22.155 C 14.28 21.936 13.945 21.592 13.738 21.172 C 13.5 20.69 13.5 20.06 13.5 18.8 L 13.5 17 C 13.5 15.74 13.5 15.11 13.738 14.628 C 13.948 14.205 14.283 13.861 14.694 13.645 C 15.162 13.4 15.775 13.4 17 13.4 C 18.225 13.4 18.838 13.4 19.306 13.645 C 19.717 13.861 20.052 14.205 20.262 14.628 C 20.5 15.11 20.5 15.74 20.5 17 L 20.5 18.8 C 20.5 20.06 20.5 20.69 20.262 21.172 C 20.052 21.595 19.717 21.939 19.306 22.155 C 18.838 22.4 18.225 22.4 17 22.4 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
              svgContentId: 1398611963,
              withExternalLayout: !0,
            }),
          }),
        }),
      }),
    });
  }),
  ff = [
    '.framer-u2nbQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-u2nbQ .framer-ujbsjm { display: block; }",
    ".framer-u2nbQ .framer-1lnt74i { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 36px; }",
    ".framer-u2nbQ .framer-1tiu58i { flex: none; height: 24px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-u2nbQ .framer-1lnt74i { gap: 0px; } .framer-u2nbQ .framer-1lnt74i > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-u2nbQ .framer-1lnt74i > :first-child { margin-left: 0px; } .framer-u2nbQ .framer-1lnt74i > :last-child { margin-right: 0px; } }",
  ],
  qr = q(lf, ff, "framer-u2nbQ"),
  va = qr;
(qr.displayName = "Button/Grid"),
  (qr.defaultProps = { height: 36, width: 36 }),
  z(qr, []);
var cf = Y(va),
  mf = Fe($),
  df = Re($),
  pf = Y(Br),
  uf = _e(l.div),
  hf = { CEy_TuHSw: { hover: !0 } },
  gf = ["Tf0CgnOud", "CEy_TuHSw", "UL1WxhDGo", "ZuaqkmsyN"],
  yf = "framer-m0tpI",
  vf = {
    CEy_TuHSw: "framer-v-9j1rcq",
    Tf0CgnOud: "framer-v-kk4lov",
    UL1WxhDGo: "framer-v-19txemr",
    ZuaqkmsyN: "framer-v-1nfz7yi",
  };
function xa(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var xf = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  bf = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  wf = l(F),
  kf = {
    "Off/Mobile": "ZuaqkmsyN",
    "On/Mobile": "UL1WxhDGo",
    Off: "CEy_TuHSw",
    On: "Tf0CgnOud",
  },
  Cf = ({ height: e, id: t, tap: o, tapA: a, width: n, ...s }) => {
    var i, f;
    return {
      ...s,
      JRBfz956T: a ?? s.JRBfz956T,
      PtGFoa1Gk: o ?? s.PtGFoa1Gk,
      variant:
        (f = (i = kf[s.variant]) !== null && i !== void 0 ? i : s.variant) !==
          null && f !== void 0
          ? f
          : "Tf0CgnOud",
    };
  },
  _f = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Ff = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        PtGFoa1Gk: c,
        JRBfz956T: m,
        ...p
      } = Cf(e),
      {
        baseVariant: d,
        classNames: y,
        clearLoadingGesture: b,
        gestureHandlers: h,
        gestureVariant: w,
        isLoading: u,
        setGestureState: k,
        setVariant: g,
        variants: v,
      } = G({
        cycleOrder: gf,
        defaultVariant: "Tf0CgnOud",
        enabledGestures: hf,
        variant: f,
        variantClassNames: vf,
      }),
      C = _f(e, v),
      { activeVariantCallback: L, delay: D } = ne(d),
      _ = L(async (...ge) => {
        if (
          (k({ isPressed: !1 }),
          (c && (await c(...ge)) === !1) || (m && (await m(...ge)) === !1))
        )
          return !1;
      }),
      Z = T(null),
      X = () => !["UL1WxhDGo", "ZuaqkmsyN"].includes(d),
      H = () => d === "UL1WxhDGo",
      K = () => d === "ZuaqkmsyN",
      te = A(),
      le = [pe],
      ce = J();
    return r(B, {
      id: i ?? te,
      children: r(wf, {
        animate: v,
        initial: !1,
        children: r(bf, {
          value: xf,
          children: r(l.div, {
            ...p,
            ...h,
            className: E(yf, ...le, "framer-kk4lov", s, y),
            "data-framer-name": "On",
            "data-highlight": !0,
            layoutDependency: C,
            layoutId: "Tf0CgnOud",
            onTap: _,
            ref: t ?? Z,
            style: {
              backgroundColor:
                "var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0))",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              opacity: 1,
              ...n,
            },
            variants: {
              "CEy_TuHSw-hover": {
                backgroundColor:
                  "var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15))",
              },
              CEy_TuHSw: { opacity: 0.5 },
              ZuaqkmsyN: { opacity: 0.5 },
            },
            ...xa(
              {
                "CEy_TuHSw-hover": { "data-framer-name": void 0 },
                CEy_TuHSw: { "data-framer-name": "Off" },
                UL1WxhDGo: { "data-framer-name": "On/Mobile" },
                ZuaqkmsyN: { "data-framer-name": "Off/Mobile" },
              },
              d,
              w,
            ),
            children: I(uf, {
              className: "framer-1oiesg4",
              layoutDependency: C,
              layoutId: "bq0oK75Mz",
              children: [
                X() &&
                  r(Q, {
                    children: r(l.div, {
                      className: "framer-1y5t8a6-container",
                      layoutDependency: C,
                      layoutId: "JVGSVaVEq-container",
                      children: r(va, {
                        height: "100%",
                        id: "JVGSVaVEq",
                        layoutId: "JVGSVaVEq",
                        width: "100%",
                      }),
                    }),
                  }),
                r(mf, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "Grid",
                    }),
                  }),
                  className: "framer-o4memi",
                  fonts: ["Inter"],
                  layoutDependency: C,
                  layoutId: "QR_OauJnz",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...xa(
                    {
                      UL1WxhDGo: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "Detail",
                          }),
                        }),
                      },
                      ZuaqkmsyN: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "Detail",
                          }),
                        }),
                      },
                    },
                    d,
                    w,
                  ),
                }),
                r(df, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "\u7F51\u683C",
                    }),
                  }),
                  className: "framer-1gzrdy1",
                  fonts: ["Inter"],
                  layoutDependency: C,
                  layoutId: "UftvDAc2L",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...xa(
                    {
                      UL1WxhDGo: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "\u8BE6\u7EC6",
                          }),
                        }),
                      },
                      ZuaqkmsyN: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "\u8BE6\u7EC6",
                          }),
                        }),
                      },
                    },
                    d,
                    w,
                  ),
                }),
                H() &&
                  r(Q, {
                    children: r(l.div, {
                      className: "framer-15kzdx2-container",
                      layoutDependency: C,
                      layoutId: "tiHht3Y9m-container",
                      children: r(Br, {
                        height: "100%",
                        id: "tiHht3Y9m",
                        layoutId: "tiHht3Y9m",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                K() &&
                  r(Q, {
                    children: r(l.div, {
                      className: "framer-1scd03s-container",
                      layoutDependency: C,
                      layoutId: "Nwlgk9Vgn-container",
                      children: r(Br, {
                        height: "100%",
                        id: "Nwlgk9Vgn",
                        layoutId: "Nwlgk9Vgn",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Rf = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-m0tpI.framer-1xdwyj5, .framer-m0tpI .framer-1xdwyj5 { display: block; }",
    ".framer-m0tpI.framer-kk4lov { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 83px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-m0tpI .framer-1oiesg4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 20px 0px; position: relative; width: 100%; }",
    ".framer-m0tpI .framer-1y5t8a6-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-m0tpI .framer-o4memi, .framer-m0tpI .framer-1gzrdy1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-m0tpI .framer-15kzdx2-container, .framer-m0tpI .framer-1scd03s-container { flex: none; height: 36px; position: relative; width: 36px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-m0tpI.framer-kk4lov, .framer-m0tpI .framer-1oiesg4 { gap: 0px; } .framer-m0tpI.framer-kk4lov > *, .framer-m0tpI .framer-1oiesg4 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-m0tpI.framer-kk4lov > :first-child, .framer-m0tpI .framer-1oiesg4 > :first-child { margin-top: 0px; } .framer-m0tpI.framer-kk4lov > :last-child, .framer-m0tpI .framer-1oiesg4 > :last-child { margin-bottom: 0px; } }",
    ".framer-m0tpI.framer-v-19txemr .framer-o4memi, .framer-m0tpI.framer-v-1nfz7yi .framer-o4memi { order: 2; }",
    ".framer-m0tpI.framer-v-19txemr .framer-1gzrdy1, .framer-m0tpI.framer-v-1nfz7yi .framer-1gzrdy1 { order: 3; }",
    ".framer-m0tpI.framer-v-19txemr .framer-15kzdx2-container { order: 0; }",
    ".framer-m0tpI.framer-v-1nfz7yi .framer-1scd03s-container { order: 1; }",
    ...de,
  ],
  zt = q(Ff, Rf, "framer-m0tpI"),
  xt = zt;
zt.displayName = "Toggle/Grid";
zt.defaultProps = { height: 110.5, width: 83 };
M(zt, {
  variant: {
    options: ["Tf0CgnOud", "CEy_TuHSw", "UL1WxhDGo", "ZuaqkmsyN"],
    optionTitles: ["On", "Off", "On/Mobile", "Off/Mobile"],
    title: "Variant",
    type: x.Enum,
  },
  PtGFoa1Gk: { title: "Tap", type: x.EventHandler },
  JRBfz956T: { title: "Tap A", type: x.EventHandler },
});
z(
  zt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...cf,
    ...pf,
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Sf = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Framerut7gGXHGL",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "83",
        framerIntrinsicHeight: "110.5",
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"CEy_TuHSw":{"layout":["fixed","auto"]},"UL1WxhDGo":{"layout":["fixed","auto"]},"ZuaqkmsyN":{"layout":["fixed","auto"]},"xZw0LrmZC":{"layout":["fixed","auto"]}}}',
        framerContractVersion: "1",
        framerVariables: '{"PtGFoa1Gk":"tap","JRBfz956T":"tapA"}',
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var Lf = Y(vt),
  If = Ve(Tr(vt), Gt),
  Vf = Y(xt),
  Uf = Ve(Dr(xt), Xt),
  Df = ["O4C8qA3Or", "d5nq5beze"],
  Tf = "framer-l3Zzb",
  Ef = { d5nq5beze: "framer-v-2c774v", O4C8qA3Or: "framer-v-10z2djc" };
function ba(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var jf = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Mf = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Nf = l(F),
  Bf = { Grid: "O4C8qA3Or", Stack: "d5nq5beze" },
  qf = ({ height: e, id: t, tap: o, tap2: a, width: n, ...s }) => {
    var i, f;
    return {
      ...s,
      kPKP1Z98f: o ?? s.kPKP1Z98f,
      tcGyL3tqj: a ?? s.tcGyL3tqj,
      variant:
        (f = (i = Bf[s.variant]) !== null && i !== void 0 ? i : s.variant) !==
          null && f !== void 0
          ? f
          : "O4C8qA3Or",
    };
  },
  Hf = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Pf = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        kPKP1Z98f: c,
        tcGyL3tqj: m,
        ...p
      } = qf(e),
      {
        baseVariant: d,
        classNames: y,
        clearLoadingGesture: b,
        gestureHandlers: h,
        gestureVariant: w,
        isLoading: u,
        setGestureState: k,
        setVariant: g,
        variants: v,
      } = G({
        cycleOrder: Df,
        defaultVariant: "O4C8qA3Or",
        variant: f,
        variantClassNames: Ef,
      }),
      C = Hf(e, v),
      { activeVariantCallback: L, delay: D } = ne(d),
      _ = L(async (...le) => {
        if (c && (await c(...le)) === !1) return !1;
      }),
      Z = L(async (...le) => {
        if (m && (await m(...le)) === !1) return !1;
      }),
      X = T(null),
      H = A(),
      K = [],
      te = J();
    return r(B, {
      id: i ?? H,
      children: r(Nf, {
        animate: v,
        initial: !1,
        children: r(Mf, {
          value: jf,
          children: I(l.div, {
            ...p,
            ...h,
            className: E(Tf, ...K, "framer-10z2djc", s, y),
            "data-framer-name": "Grid",
            layoutDependency: C,
            layoutId: "O4C8qA3Or",
            ref: t ?? X,
            style: { ...n },
            ...ba({ d5nq5beze: { "data-framer-name": "Stack" } }, d, w),
            children: [
              r(l.div, {
                className: "framer-1xue0ne",
                layoutDependency: C,
                layoutId: "aaDym_T_8",
                style: {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                },
              }),
              r(Q, {
                width: "90px",
                children: r(l.div, {
                  className: "framer-1pgwcgk-container",
                  layoutDependency: C,
                  layoutId: "U92bkMpAY-container",
                  children: r(If, {
                    height: "100%",
                    id: "U92bkMpAY",
                    K4FXNGAHE: _,
                    layoutId: "U92bkMpAY",
                    style: { width: "100%" },
                    variant: "RgK6g1O_Q",
                    width: "100%",
                    ...ba({ d5nq5beze: { variant: "DLSJQF14w" } }, d, w),
                  }),
                }),
              }),
              r(Q, {
                width: "90px",
                children: r(l.div, {
                  className: "framer-11jhv5y-container",
                  layoutDependency: C,
                  layoutId: "iXicoWOsP-container",
                  children: r(Uf, {
                    height: "100%",
                    id: "iXicoWOsP",
                    layoutId: "iXicoWOsP",
                    PtGFoa1Gk: Z,
                    style: { width: "100%" },
                    variant: "ZuaqkmsyN",
                    width: "100%",
                    ...ba({ d5nq5beze: { variant: "UL1WxhDGo" } }, d, w),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Af = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-l3Zzb.framer-1ifpdw0, .framer-l3Zzb .framer-1ifpdw0 { display: block; }",
    ".framer-l3Zzb.framer-10z2djc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-l3Zzb .framer-1xue0ne { flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 90px; will-change: var(--framer-will-change-override, transform); z-index: 0; }",
    ".framer-l3Zzb .framer-1pgwcgk-container, .framer-l3Zzb .framer-11jhv5y-container { flex: none; height: auto; position: relative; width: 90px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-l3Zzb.framer-10z2djc { gap: 0px; } .framer-l3Zzb.framer-10z2djc > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-l3Zzb.framer-10z2djc > :first-child { margin-left: 0px; } .framer-l3Zzb.framer-10z2djc > :last-child { margin-right: 0px; } }",
    ".framer-l3Zzb.framer-v-2c774v .framer-1xue0ne { height: 101%; left: unset; right: 0px; top: calc(49.450549450549474% - 100.54945054945054% / 2); }",
  ],
  Wt = q(Pf, Af, "framer-l3Zzb"),
  Of = Wt;
Wt.displayName = "Toggle/Brief&Detail";
Wt.defaultProps = { height: 91, width: 188 };
M(Wt, {
  variant: {
    options: ["O4C8qA3Or", "d5nq5beze"],
    optionTitles: ["Grid", "Stack"],
    title: "Variant",
    type: x.Enum,
  },
  kPKP1Z98f: { title: "Tap", type: x.EventHandler },
  tcGyL3tqj: { title: "Tap 2", type: x.EventHandler },
});
z(Wt, [{ explicitInter: !0, fonts: [] }, ...Lf, ...Vf], {
  supportsExplicitInterCodegen: !0,
});
var Gf = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerGgb8Lavra",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerVariables: '{"kPKP1Z98f":"tap","tcGyL3tqj":"tap2"}',
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"d5nq5beze":{"layout":["auto","auto"]}}}',
        framerIntrinsicHeight: "91",
        framerComponentViewportWidth: "true",
        framerIntrinsicWidth: "188",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var cc = {};
Ce(cc, { __FramerMetadata__: () => fc, default: () => lc });
var bt = { type: "spring", stiffness: 170, damping: 28 };
function Ke(e) {
  let {
      color: t,
      fill: o,
      fill_tap: a,
      onTap: n,
      hover_effect: s,
      hover_color: i,
    } = e,
    [f, c] = W(),
    m = {
      show: {
        scale: 1,
        opacity: 1,
        transition: { ...bt, staggerChildren: 0.1, delay: 0.2 },
      },
      hide: {
        scale: 0,
        opacity: 0,
        transition: { ...bt, staggerChildren: 0.1 },
      },
    },
    p = {
      show: {
        scale: [1, 0.8, 1],
        opacity: [1, 0.5, 1],
        transition: { duration: 1.2, repeat: "Infinity" },
      },
      hide: { scale: 0.5, opacity: 0, transition: bt },
    },
    d = {
      show: { transition: { ...bt, staggerChildren: 0.1, delayChildren: 0.3 } },
      hide: { transition: { ...bt, staggerChildren: 0.1 } },
    },
    y = {
      show: { scale: 1, opacity: 1, transition: bt },
      hide: { scale: 0.5, opacity: 0, transition: bt },
    },
    [b, h] = ae(!1);
  return I(l.div, {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      borderRadius: 42,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: o,
      overflow: "hidden",
    },
    onTap: n,
    whileHover: { background: s && a },
    transition: { duration: 0.15 },
    onMouseEnter: () => {
      h(!0);
    },
    onMouseLeave: () => {
      h(!1);
    },
    children: [
      r(l.svg, {
        name: "Sound",
        style: { position: "absolute", top: 9, left: 9 },
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        initial: !1,
        animate: {
          scaleY: f.sound ? [1, 0.8, 1] : [1, 0.7, 1],
          transition: { duration: 0.4 },
        },
        children: r("path", {
          d: "M 14 14.813 L 14 9.186 C 14 6.041 14 4.469 13.075 4.077 C 12.149 3.686 11.06 4.797 8.882 7.022 C 7.754 8.174 7.111 8.429 5.506 8.429 C 4.103 8.429 3.401 8.429 2.896 8.773 C 1.85 9.487 2.01 10.882 2.01 12 C 2.01 13.118 1.851 14.513 2.898 15.227 C 3.402 15.571 4.104 15.571 5.507 15.571 C 7.112 15.571 7.755 15.826 8.883 16.978 C 11.061 19.202 12.15 20.314 13.076 19.923 C 14.001 19.531 14.001 17.959 14.001 14.813 Z",
          fill: "transparent",
          strokeWidth: "2",
          stroke: b ? i : t,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "",
        }),
      }),
      I(l.div, {
        name: "On",
        style: { position: "absolute", top: 9, right: 8, width: 9, height: 24 },
        variants: m,
        initial: "hide",
        animate: f.sound ? "show" : "hide",
        children: [
          r(l.svg, {
            style: { position: "absolute", top: 0, left: 0 },
            xmlns: "http://www.w3.org/2000/svg",
            width: "5",
            height: "24",
            variants: p,
            children: r("path", {
              d: "M 2 9 C 2.625 9.82 3 10.863 3 12 C 3 13.137 2.625 14.18 2 15",
              fill: "transparent",
              strokeWidth: "2",
              stroke: b ? i : t,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "",
            }),
          }),
          r(l.svg, {
            style: { position: "absolute", top: 0, right: 0 },
            xmlns: "http://www.w3.org/2000/svg",
            width: "6",
            height: "24",
            variants: p,
            children: r("path", {
              d: "M 2 7 C 3.25 8.366 4 10.106 4 12 C 4 13.894 3.25 15.634 2 17",
              fill: "transparent",
              strokeWidth: "2",
              stroke: b ? i : t,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "",
            }),
          }),
        ],
      }),
      I(l.div, {
        name: "Off",
        style: { position: "absolute", top: 9, right: 8, width: 8, height: 24 },
        variants: d,
        initial: "show",
        animate: f.sound ? "hide" : "show",
        children: [
          r(l.svg, {
            style: { position: "absolute", top: 0, left: 0 },
            xmlns: "http://www.w3.org/2000/svg",
            width: "8",
            height: "24",
            variants: y,
            children: r("path", {
              d: "M 2 10 L 6 14",
              fill: "transparent",
              strokeWidth: "2",
              stroke: b ? i : t,
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              strokeDasharray: "",
            }),
          }),
          r(l.svg, {
            style: { position: "absolute", top: 0, right: 0 },
            xmlns: "http://www.w3.org/2000/svg",
            width: "8",
            height: "24",
            variants: y,
            children: r("path", {
              d: "M 2 14 L 6 10",
              fill: "transparent",
              strokeWidth: "2",
              stroke: b ? i : t,
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              strokeDasharray: "",
            }),
          }),
        ],
      }),
    ],
  });
}
Ke.defaultProps = {
  color: "#000000",
  fill: "#dddddd",
  fill_tap: "#ffffff",
  hover_effect: !0,
};
M(Ke, {
  color: { type: x.Color },
  hover_color: { type: x.Color },
  fill: { type: x.Color },
  fill_tap: { type: x.Color },
  hover_effect: { type: x.Boolean },
});
var Xf = Y(Ke),
  Wf = Fe($),
  Zf = Re($),
  Qf = _e(l.div),
  Yf = { CFKF3xAWX: { hover: !0 } },
  Kf = ["Csiwc1EI2", "CFKF3xAWX"],
  Jf = "framer-MJFLv",
  $f = { CFKF3xAWX: "framer-v-1tremx6", Csiwc1EI2: "framer-v-1d1mc6w" };
function wa(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var ec = { damping: 28, delay: 0, mass: 1, stiffness: 170, type: "spring" },
  tc = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  rc = l(F),
  ac = { Off: "CFKF3xAWX", On: "Csiwc1EI2" },
  oc = ({ height: e, id: t, tap: o, tapA: a, width: n, ...s }) => {
    var i, f;
    return {
      ...s,
      ah1iEr8il: a ?? s.ah1iEr8il,
      K4FXNGAHE: o ?? s.K4FXNGAHE,
      variant:
        (f = (i = ac[s.variant]) !== null && i !== void 0 ? i : s.variant) !==
          null && f !== void 0
          ? f
          : "Csiwc1EI2",
    };
  },
  nc = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  ic = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        K4FXNGAHE: c,
        ah1iEr8il: m,
        ...p
      } = oc(e),
      {
        baseVariant: d,
        classNames: y,
        clearLoadingGesture: b,
        gestureHandlers: h,
        gestureVariant: w,
        isLoading: u,
        setGestureState: k,
        setVariant: g,
        variants: v,
      } = G({
        cycleOrder: Kf,
        defaultVariant: "Csiwc1EI2",
        enabledGestures: Yf,
        variant: f,
        variantClassNames: $f,
      }),
      C = nc(e, v),
      { activeVariantCallback: L, delay: D } = ne(d),
      _ = L(async (...te) => {
        if (
          (k({ isPressed: !1 }),
          (c && (await c(...te)) === !1) || (m && (await m(...te)) === !1))
        )
          return !1;
      }),
      Z = T(null),
      X = A(),
      H = [pe],
      K = J();
    return r(B, {
      id: i ?? X,
      children: r(rc, {
        animate: v,
        initial: !1,
        children: r(tc, {
          value: ec,
          children: r(l.div, {
            ...p,
            ...h,
            className: E(Jf, ...H, "framer-1d1mc6w", s, y),
            "data-framer-name": "On",
            "data-highlight": !0,
            layoutDependency: C,
            layoutId: "Csiwc1EI2",
            onTap: _,
            ref: t ?? Z,
            style: {
              backgroundColor:
                "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              opacity: 1,
              ...n,
            },
            variants: {
              "CFKF3xAWX-hover": {
                backgroundColor:
                  "var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15))",
              },
              CFKF3xAWX: {
                backgroundColor:
                  "var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0))",
                opacity: 0.5,
              },
            },
            ...wa(
              {
                "CFKF3xAWX-hover": { "data-framer-name": void 0 },
                CFKF3xAWX: { "data-framer-name": "Off" },
              },
              d,
              w,
            ),
            children: I(Qf, {
              className: "framer-8n8br8",
              layoutDependency: C,
              layoutId: "nGsPUuSsh",
              children: [
                r(l.div, {
                  className: "framer-10z44f2",
                  layoutDependency: C,
                  layoutId: "LDeX6Wadl",
                  children: r(Q, {
                    children: r(l.div, {
                      className: "framer-1y0cdwv-container",
                      layoutDependency: C,
                      layoutId: "SXHyazpJf-container",
                      children: r(Ke, {
                        color:
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                        fill_tap:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        fill: "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
                        height: "100%",
                        hover_color:
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                        hover_effect: !1,
                        id: "SXHyazpJf",
                        layoutId: "SXHyazpJf",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                r(Wf, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "Sound",
                    }),
                  }),
                  className: "framer-10ooge3",
                  fonts: ["Inter"],
                  layoutDependency: C,
                  layoutId: "PXhU7NpZn",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...wa(
                    {
                      CFKF3xAWX: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "Mute",
                          }),
                        }),
                      },
                    },
                    d,
                    w,
                  ),
                }),
                r(Zf, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "\u97F3\u6548",
                    }),
                  }),
                  className: "framer-1ohfkmj",
                  fonts: ["Inter"],
                  layoutDependency: C,
                  layoutId: "APDE3rKer",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...wa(
                    {
                      CFKF3xAWX: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "\u9759\u97F3",
                          }),
                        }),
                      },
                    },
                    d,
                    w,
                  ),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  sc = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-MJFLv.framer-1kiqhxp, .framer-MJFLv .framer-1kiqhxp { display: block; }",
    ".framer-MJFLv.framer-1d1mc6w { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 83px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-MJFLv .framer-8n8br8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 20px 0px; position: relative; width: 100%; }",
    ".framer-MJFLv .framer-10z44f2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 36px; }",
    ".framer-MJFLv .framer-1y0cdwv-container { flex: none; height: 42px; position: relative; width: 42px; }",
    ".framer-MJFLv .framer-10ooge3, .framer-MJFLv .framer-1ohfkmj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-MJFLv.framer-1d1mc6w, .framer-MJFLv .framer-8n8br8, .framer-MJFLv .framer-10z44f2 { gap: 0px; } .framer-MJFLv.framer-1d1mc6w > *, .framer-MJFLv .framer-8n8br8 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-MJFLv.framer-1d1mc6w > :first-child, .framer-MJFLv .framer-8n8br8 > :first-child { margin-top: 0px; } .framer-MJFLv.framer-1d1mc6w > :last-child, .framer-MJFLv .framer-8n8br8 > :last-child { margin-bottom: 0px; } .framer-MJFLv .framer-10z44f2 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-MJFLv .framer-10z44f2 > :first-child { margin-left: 0px; } .framer-MJFLv .framer-10z44f2 > :last-child { margin-right: 0px; } }",
    ...de,
  ],
  Zt = q(ic, sc, "framer-MJFLv"),
  lc = Zt;
Zt.displayName = "Toggle/Sound";
Zt.defaultProps = { height: 110.5, width: 83 };
M(Zt, {
  variant: {
    options: ["Csiwc1EI2", "CFKF3xAWX"],
    optionTitles: ["On", "Off"],
    title: "Variant",
    type: x.Enum,
  },
  K4FXNGAHE: { title: "Tap", type: x.EventHandler },
  ah1iEr8il: { title: "Tap A", type: x.EventHandler },
});
z(
  Zt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...Xf,
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var fc = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "Framergxnimy5ij",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "110.5",
        framerComponentViewportWidth: "true",
        framerVariables: '{"K4FXNGAHE":"tap","ah1iEr8il":"tapA"}',
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"CFKF3xAWX":{"layout":["fixed","auto"]},"RSTZB6_oU":{"layout":["fixed","auto"]}}}',
        framerImmutableVariables: "true",
        framerIntrinsicWidth: "83",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var Nc = {};
Ce(Nc, { __FramerMetadata__: () => Mc, default: () => jc });
var Qt = { ease: "easeInOut", duration: 0.6 };
function Je(e) {
  let { color: t, fill: o, fill_tap: a, hover_effect: n, hover_color: s } = e,
    [i, f] = W(),
    c = {
      show: { x: 0, y: 0, rotate: 45, scale: 1, transition: Qt },
      hide: {
        x: [0, -30, 30],
        y: [0, 32, 32],
        rotate: 0,
        scale: 0.6,
        transition: Qt,
      },
    },
    m = {
      show: { x: 0, y: 0, rotate: 0, scale: 1, transition: Qt },
      hide: {
        x: [0, -30, 30],
        y: [0, 32, 32],
        rotate: 60,
        scale: 0.6,
        transition: Qt,
      },
      default: { x: 30, y: 32, rotate: 60, scale: 0.6, transition: Qt },
    },
    [p, d] = ae(!1);
  return I(l.div, {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      borderRadius: 42,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: o,
      overflow: "hidden",
    },
    whileHover: { background: n && a },
    transition: { duration: 0.15 },
    onMouseEnter: () => {
      d(!0);
    },
    onMouseLeave: () => {
      d(!1);
    },
    children: [
      I(l.svg, {
        style: { position: "absolute" },
        width: "24",
        height: "24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        variants: c,
        initial: !1,
        animate: i.darkmode ? "hide" : "show",
        children: [
          r("path", {
            d: "M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
            stroke: p ? s : t,
            strokeWidth: "2",
          }),
          r("path", {
            d: "M12 2v2.5m0 15V22m7.072-17.071-1.767 1.767M6.698 17.303 4.93 19.071M22.002 12h-2.5m-15 0h-2.5m17.07 7.071-1.767-1.768M6.698 6.697 4.93 4.929",
            stroke: p ? s : t,
            strokeWidth: "1.8",
            strokeLinejoin: "round",
          }),
        ],
      }),
      r(l.svg, {
        style: { position: "absolute" },
        width: "24",
        height: "24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        variants: m,
        initial: !1,
        animate: i.darkmode ? "show" : "hide",
        children: r("path", {
          d: "M21.5 14.078A8.557 8.557 0 0 1 9.922 2.5C5.668 3.497 2.5 7.315 2.5 11.873a9.627 9.627 0 0 0 9.627 9.627c4.558 0 8.376-3.168 9.373-7.422Z",
          stroke: p ? s : t,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      }),
    ],
  });
}
Je.defaultProps = {
  color: "#000000",
  fill: "#dddddd",
  fill_tap: "#ffffff",
  hover_effect: !0,
};
M(Je, {
  color: { type: x.Color },
  hover_color: { type: x.Color },
  fill: { type: x.Color },
  fill_tap: { type: x.Color },
  hover_effect: { type: x.Boolean },
});
var Hr = { type: "spring", stiffness: 170, damping: 28 },
  mc = { tablet: "(max-width: 1199px)", phone: "(max-width: 540px)" };
function Ct(e) {
  let { color: t, fill: o, fill_tap: a, hover_color: n } = e,
    [s, i] = W(),
    f = fe(mc.phone),
    c = ({ color: k, grid: g }) =>
      g
        ? r(l.svg, {
            style: { width: 9, height: 10, display: "flex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "9",
            height: "10",
            children: r("path", {
              d: "M 4.5 8.833 C 3.397 8.833 2.846 8.833 2.425 8.629 C 2.052 8.447 1.751 8.16 1.564 7.81 C 1.35 7.408 1.35 6.883 1.35 5.833 L 1.35 4.333 C 1.35 3.283 1.35 2.758 1.564 2.357 C 1.753 2.004 2.055 1.718 2.425 1.538 C 2.846 1.333 3.397 1.333 4.5 1.333 C 5.602 1.333 6.154 1.333 6.575 1.538 C 6.945 1.718 7.247 2.004 7.436 2.357 C 7.65 2.758 7.65 3.283 7.65 4.333 L 7.65 5.833 C 7.65 6.883 7.65 7.408 7.436 7.81 C 7.247 8.163 6.945 8.449 6.575 8.629 C 6.154 8.833 5.602 8.833 4.5 8.833 Z",
              fill: "transparent",
              strokeWidth: "2",
              stroke: k,
              strokeMiterlimit: "10",
            }),
          })
        : r("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "12",
            children: r("path", {
              d: "M 1 6 C 1 4.25 1 3.375 1.327 2.706 C 1.615 2.118 2.074 1.64 2.638 1.341 C 3.28 1 4.12 1 5.8 1 L 8.2 1 C 9.88 1 10.72 1 11.362 1.341 C 11.926 1.64 12.385 2.118 12.673 2.706 C 13 3.375 13 4.25 13 6 C 13 7.75 13 8.625 12.673 9.294 C 12.385 9.882 11.926 10.36 11.362 10.659 C 10.72 11 9.88 11 8.2 11 L 5.8 11 C 4.12 11 3.28 11 2.638 10.659 C 2.074 10.36 1.615 9.882 1.327 9.294 C 1 8.625 1 7.75 1 6 Z",
              fill: "transparent",
              strokeWidth: "2",
              stroke: k,
              strokeLinejoin: "round",
              strokeDasharray: "",
            }),
          }),
    m = {
      initial: {
        x: 7.75,
        scale: 1,
        transition: { ...Hr, delay: 0.4, delayChildren: 0.3 },
      },
      hidden: {
        x: -60,
        scale: 0.8,
        transition: { ...Hr, staggerChildren: 0.01 },
      },
    },
    p = {
      initial: { scale: [1, 1.2, 1], transition: { duration: 0.4 } },
      hidden: { scale: [1, 1.2, 1], transition: { duration: 0.5 } },
    },
    d = {
      initial: { transition: { staggerChildren: 0.03, delayChildren: 0 } },
      hidden: { transition: { staggerChildren: 0.03, delayChildren: 0.4 } },
    },
    y = {
      initial: { opacity: 0, scale: 0.5, transition: Hr },
      hidden: { opacity: 1, scale: 1, transition: Hr },
    },
    [b, h] = ae(!1),
    [w, u] = ae(!1);
  return I(l.div, {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      borderRadius: 42,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: o,
      overflow: "hidden",
    },
    whileHover: { background: a },
    transition: { duration: 0.15 },
    onMouseEnter: () => {
      u(!0);
    },
    onMouseLeave: () => {
      u(!1);
    },
    children: [
      r(l.div, {
        style: {
          position: "absolute",
          height: 24,
          width: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        children: I(l.div, {
          name: "Stack",
          style: { position: "absolute", height: 12, display: "flex", gap: 1 },
          variants: m,
          initial: !1,
          animate: s.layout ? "hidden" : "initial",
          children: [
            r(l.div, {
              variants: p,
              children: r(c, { color: w ? n : t, grid: void 0 }),
            }),
            r(l.div, {
              variants: p,
              children: r(c, { color: w ? n : t, grid: void 0 }),
            }),
            r(l.div, {
              variants: p,
              children: r(c, { color: w ? n : t, grid: void 0 }),
            }),
            r(l.div, {
              variants: p,
              children: r(c, { color: w ? n : t, grid: void 0 }),
            }),
          ],
        }),
      }),
      I(l.div, {
        name: "Grid",
        style: {
          position: "absolute",
          top: 11,
          left: 12,
          width: 18,
          height: 20,
        },
        variants: d,
        initial: !1,
        animate: s.layout ? "hidden" : "initial",
        children: [
          r(l.div, {
            variants: y,
            style: { position: "absolute", top: 0, left: 0 },
            children: r(c, { color: w ? n : t, grid: !0 }),
          }),
          r(l.div, {
            variants: y,
            style: {
              position: "absolute",
              width: 9,
              height: 10,
              top: 0,
              right: 0,
            },
            children: r(c, { color: w ? n : t, grid: !0 }),
          }),
          r(l.div, {
            variants: y,
            style: { position: "absolute", bottom: 0, left: 0 },
            children: r(c, { color: w ? n : t, grid: !0 }),
          }),
          r(l.div, {
            variants: y,
            style: { position: "absolute", bottom: 0, right: 0 },
            children: r(c, { color: w ? n : t, grid: !0 }),
          }),
        ],
      }),
    ],
  });
}
Ct.defaultProps = { color: "#000000", fill: "#dddddd", fill_tap: "#ffffff" };
M(Ct, {
  color: { type: x.Color },
  hover_color: { type: x.Color },
  fill: { type: x.Color },
  fill_tap: { type: x.Color },
});
var Yt = { type: "spring", stiffness: 170, damping: 28 };
function _t(e) {
  let { color: t, fill: o, fill_tap: a, hover_color: n } = e,
    [s, i] = W(),
    f = {
      show: { scale: 1, opacity: 1, transition: { ...Yt, delay: 0.2 } },
      hide: { scale: 0, opacity: 0, transition: { ...Yt } },
    },
    c = {
      show: { y: 0, scale: 1, opacity: 1, transition: { ...Yt, delay: 0 } },
      hide: {
        y: [0, -40, 40],
        scale: 0,
        opacity: 0,
        transition: { ...Yt, y: { duration: 1 } },
      },
    },
    [m, p] = ae(!1);
  return I(l.div, {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      borderRadius: 42,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: o,
      overflow: "hidden",
    },
    whileHover: { background: a },
    transition: { duration: 0.15 },
    onMouseEnter: () => {
      p(!0);
    },
    onMouseLeave: () => {
      p(!1);
    },
    children: [
      I(l.div, {
        name: "Gear",
        style: {
          position: "absolute",
          height: 42,
          width: 42,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        variants: f,
        initial: "show",
        animate: s.setting ? "hide" : "show",
        children: [
          r("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            children: r("path", {
              d: "M 16 6 L 8 6 C 4.686 6 2 8.686 2 12 C 2 15.314 4.686 18 8 18 L 16 18 C 19.314 18 22 15.314 22 12 C 22 8.686 19.314 6 16 6 Z",
              fill: "transparent",
              strokeWidth: "2",
              stroke: m ? n : t,
              strokeMiterlimit: "10",
              strokeDasharray: "",
            }),
          }),
          r(l.svg, {
            style: { position: "absolute", left: 10 },
            animate: { x: m ? 8 : 0, transition: Yt },
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            children: r("path", {
              d: "M 10 12 C 10 13.657 8.657 15 7 15 C 5.343 15 4 13.657 4 12 C 4 10.343 5.343 9 7 9 C 8.657 9 10 10.343 10 12 Z",
              fill: "transparent",
              strokeWidth: "2",
              stroke: m ? n : t,
              strokeMiterlimit: "10",
              strokeDasharray: "",
            }),
          }),
        ],
      }),
      r(l.div, {
        name: "Arrow",
        style: {
          position: "absolute",
          height: 24,
          width: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        variants: c,
        initial: !1,
        animate: s.setting ? "show" : "hide",
        children: r("svg", {
          width: "24",
          height: "24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: r("path", {
            d: "M18 15s-4.419-6-6-6c-1.581 0-6 6-6 6",
            stroke: m ? n : t,
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        }),
      }),
    ],
  });
}
_t.defaultProps = { color: "#000000", fill: "#dddddd", fill_tap: "#ffffff" };
M(_t, {
  color: { type: x.Color },
  hover_color: { type: x.Color },
  fill: { type: x.Color },
  fill_tap: { type: x.Color },
});
function No(e) {
  return (t) => {
    let [o, a] = W(),
      [n, s] = he();
    return r(e, {
      ...t,
      onTap: () => {
        a({ sound: !o.sound });
      },
    });
  };
}
var dc = Y(Je),
  pc = yo(l.div),
  uc = Y(Ke),
  hc = No(Ke),
  gc = vo(l.div),
  yc = Y(Ct),
  vc = Y(yt),
  xc = Ve(bo(yt), ha),
  bc = xo(l.div),
  wc = Y(_t),
  kc = wo(l.div),
  Cc = [
    "XwPo9qGC4",
    "BUN0wW2zJ",
    "SvszP6DBu",
    "mDVTviNgh",
    "VO4pi5TV3",
    "PVKpWD7At",
    "fffltztQF",
  ],
  _c = "framer-fk8oP",
  Fc = {
    BUN0wW2zJ: "framer-v-1p49jud",
    fffltztQF: "framer-v-1h5hpkm",
    mDVTviNgh: "framer-v-11ugt3d",
    PVKpWD7At: "framer-v-1pndmyc",
    SvszP6DBu: "framer-v-115u3sg",
    VO4pi5TV3: "framer-v-12v1w62",
    XwPo9qGC4: "framer-v-9ka035",
  };
function Kt(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Rc = { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
  Sc = (e) => !e,
  Lc = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Ic = l(F),
  Vc = {
    AlwaysDark: "PVKpWD7At",
    AlwaysLight: "fffltztQF",
    Collasped: "BUN0wW2zJ",
    Dark: "mDVTviNgh",
    Default: "XwPo9qGC4",
    Light: "VO4pi5TV3",
    Mobile: "SvszP6DBu",
  },
  Uc = ({
    height: e,
    id: t,
    layoutCursor: o,
    layoutVisible: a,
    mobile: n,
    setting: s,
    setting2: i,
    settingCursor: f,
    soundCursor: c,
    soundVisible: m,
    themeCursor: p,
    themeVisible: d,
    width: y,
    ...b
  }) => {
    var h, w, u, k, g;
    return {
      ...b,
      bW5yPdm2I: s ?? b.bW5yPdm2I,
      bzjewZMVz: c ?? b.bzjewZMVz,
      D_n_dMzCO: n ?? b.D_n_dMzCO,
      IDjhS4IKl: (h = d ?? b.IDjhS4IKl) !== null && h !== void 0 ? h : !0,
      IgMJMP6ld: (w = a ?? b.IgMJMP6ld) !== null && w !== void 0 ? w : !0,
      qRScD7sgw: p ?? b.qRScD7sgw,
      uh2rKEoGW: o ?? b.uh2rKEoGW,
      uLaa8oUgA: i ?? b.uLaa8oUgA,
      variant:
        (k = (u = Vc[b.variant]) !== null && u !== void 0 ? u : b.variant) !==
          null && k !== void 0
          ? k
          : "XwPo9qGC4",
      VscZCNiuc: f ?? b.VscZCNiuc,
      Y6c4BQxZw: (g = m ?? b.Y6c4BQxZw) !== null && g !== void 0 ? g : !0,
    };
  },
  Dc = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Tc = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        bW5yPdm2I: c,
        D_n_dMzCO: m,
        uLaa8oUgA: p,
        qRScD7sgw: d,
        bzjewZMVz: y,
        uh2rKEoGW: b,
        VscZCNiuc: h,
        IDjhS4IKl: w,
        Y6c4BQxZw: u,
        IgMJMP6ld: k,
        ...g
      } = Uc(e),
      {
        baseVariant: v,
        classNames: C,
        clearLoadingGesture: L,
        gestureHandlers: D,
        gestureVariant: _,
        isLoading: Z,
        setGestureState: X,
        setVariant: H,
        variants: K,
      } = G({
        cycleOrder: Cc,
        defaultVariant: "XwPo9qGC4",
        variant: f,
        variantClassNames: Fc,
      }),
      te = Dc(e, K),
      { activeVariantCallback: le, delay: ce } = ne(v),
      ge = le(async (...dt) => {
        if ((c && (await c(...dt)) === !1) || (p && (await p(...dt)) === !1))
          return !1;
      }),
      ye = T(null),
      we = (dt) =>
        v === "SvszP6DBu"
          ? !1
          : ["mDVTviNgh", "VO4pi5TV3", "PVKpWD7At", "fffltztQF"].includes(v)
            ? !0
            : dt,
      Se = Sc(m),
      be = A(),
      $e = [],
      mt = J();
    return r(B, {
      id: i ?? be,
      children: r(Ic, {
        animate: K,
        initial: !1,
        children: r(Lc, {
          value: Rc,
          children: r(l.div, {
            ...g,
            ...D,
            className: E(_c, ...$e, "framer-9ka035", s, C),
            "data-framer-name": "Default",
            layoutDependency: te,
            layoutId: "XwPo9qGC4",
            ref: t ?? ye,
            style: { ...n },
            ...Kt(
              {
                BUN0wW2zJ: { "data-framer-name": "Collasped" },
                fffltztQF: { "data-framer-name": "AlwaysLight" },
                mDVTviNgh: { "data-framer-name": "Dark" },
                PVKpWD7At: { "data-framer-name": "AlwaysDark" },
                SvszP6DBu: { "data-framer-name": "Mobile" },
                VO4pi5TV3: { "data-framer-name": "Light" },
              },
              v,
              _,
            ),
            children: I(l.div, {
              className: "framer-dqit7d",
              layoutDependency: te,
              layoutId: "SlWd41rtv",
              children: [
                we(w) &&
                  r(pc, {
                    className: "framer-262im6",
                    "data-framer-name": "Theme",
                    layoutDependency: te,
                    layoutId: "N0zbtGBIn",
                    style: { opacity: 1 },
                    variants: { BUN0wW2zJ: { opacity: 0 } },
                    children: r(Q, {
                      children: r(l.div, {
                        className: "framer-1o068vx-container",
                        "data-framer-cursor": d,
                        layoutDependency: te,
                        layoutId: "tVTbfPycP-container",
                        children: r(Je, {
                          color:
                            "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                          fill_tap:
                            "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                          fill: "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
                          height: "100%",
                          hover_color:
                            "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                          hover_effect: !0,
                          id: "tVTbfPycP",
                          layoutId: "tVTbfPycP",
                          width: "100%",
                          ...Kt(
                            {
                              fffltztQF: { color: "rgb(255, 255, 255)" },
                              PVKpWD7At: { color: "rgb(0, 0, 0)" },
                              VO4pi5TV3: {
                                color:
                                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                              },
                            },
                            v,
                            _,
                          ),
                        }),
                      }),
                    }),
                  }),
                we(u) &&
                  r(gc, {
                    className: "framer-pc5gro",
                    "data-framer-name": "Sound",
                    layoutDependency: te,
                    layoutId: "GbwuyHnbC",
                    style: { opacity: 1 },
                    variants: { BUN0wW2zJ: { opacity: 0 } },
                    children: r(Q, {
                      children: r(l.div, {
                        className: "framer-1f44v0i-container",
                        "data-framer-cursor": y,
                        layoutDependency: te,
                        layoutId: "tfhlwtX48-container",
                        children: r(hc, {
                          color:
                            "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                          fill_tap:
                            "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                          fill: "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
                          height: "100%",
                          hover_color:
                            "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                          hover_effect: !0,
                          id: "tfhlwtX48",
                          layoutId: "tfhlwtX48",
                          width: "100%",
                          ...Kt(
                            {
                              fffltztQF: { color: "rgb(255, 255, 255)" },
                              PVKpWD7At: { color: "rgb(0, 0, 0)" },
                              VO4pi5TV3: {
                                color:
                                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                              },
                            },
                            v,
                            _,
                          ),
                        }),
                      }),
                    }),
                  }),
                we(k) &&
                  I(bc, {
                    className: "framer-sl3rr1",
                    "data-framer-name": "Layout",
                    layoutDependency: te,
                    layoutId: "N17OAQqYk",
                    style: { opacity: 1 },
                    variants: { BUN0wW2zJ: { opacity: 0 } },
                    children: [
                      Se &&
                        r(Q, {
                          children: r(l.div, {
                            className: "framer-e5f2ip-container",
                            "data-framer-cursor": b,
                            layoutDependency: te,
                            layoutId: "begQRLCEU-container",
                            children: r(Ct, {
                              color:
                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                              fill_tap:
                                "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                              fill: "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
                              height: "100%",
                              hover_color:
                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                              id: "begQRLCEU",
                              layoutId: "begQRLCEU",
                              width: "100%",
                              ...Kt(
                                {
                                  fffltztQF: { color: "rgb(255, 255, 255)" },
                                  PVKpWD7At: { color: "rgb(0, 0, 0)" },
                                  VO4pi5TV3: {
                                    color:
                                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                  },
                                },
                                v,
                                _,
                              ),
                            }),
                          }),
                        }),
                      m &&
                        r(Q, {
                          children: r(l.div, {
                            className: "framer-10wvtsj-container",
                            layoutDependency: te,
                            layoutId: "h94qIsUTG-container",
                            children: r(xc, {
                              height: "100%",
                              id: "h94qIsUTG",
                              layoutId: "h94qIsUTG",
                              style: { height: "100%", width: "100%" },
                              variant: "F3z2GrFiS",
                              width: "100%",
                            }),
                          }),
                        }),
                    ],
                  }),
                r(kc, {
                  className: "framer-16ymgku",
                  "data-framer-name": "Setting",
                  "data-highlight": !0,
                  layoutDependency: te,
                  layoutId: "nzSq6qPBM",
                  onTap: ge,
                  children: r(Q, {
                    children: r(l.div, {
                      className: "framer-1mx905s-container",
                      "data-framer-cursor": h,
                      layoutDependency: te,
                      layoutId: "AzYZK8l1Y-container",
                      children: r(_t, {
                        color:
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                        fill_tap:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        fill: "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
                        height: "100%",
                        hover_color:
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                        id: "AzYZK8l1Y",
                        layoutId: "AzYZK8l1Y",
                        width: "100%",
                        ...Kt(
                          {
                            fffltztQF: { color: "rgb(255, 255, 255)" },
                            PVKpWD7At: { color: "rgb(0, 0, 0)" },
                            VO4pi5TV3: {
                              color:
                                "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                            },
                          },
                          v,
                          _,
                        ),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Ec = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-fk8oP.framer-kfmh6w, .framer-fk8oP .framer-kfmh6w { display: block; }",
    ".framer-fk8oP.framer-9ka035 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 42px; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-fk8oP .framer-dqit7d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-fk8oP .framer-262im6, .framer-fk8oP .framer-pc5gro { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-fk8oP .framer-1o068vx-container, .framer-fk8oP .framer-1f44v0i-container, .framer-fk8oP .framer-e5f2ip-container, .framer-fk8oP .framer-1mx905s-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-fk8oP .framer-sl3rr1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-fk8oP .framer-10wvtsj-container { flex: none; height: 42px; position: relative; width: 42px; }",
    ".framer-fk8oP .framer-16ymgku { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fk8oP.framer-9ka035, .framer-fk8oP .framer-dqit7d, .framer-fk8oP .framer-262im6, .framer-fk8oP .framer-pc5gro, .framer-fk8oP .framer-sl3rr1, .framer-fk8oP .framer-16ymgku { gap: 0px; } .framer-fk8oP.framer-9ka035 > *, .framer-fk8oP .framer-sl3rr1 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-fk8oP.framer-9ka035 > :first-child, .framer-fk8oP .framer-dqit7d > :first-child, .framer-fk8oP .framer-262im6 > :first-child, .framer-fk8oP .framer-pc5gro > :first-child, .framer-fk8oP .framer-sl3rr1 > :first-child { margin-left: 0px; } .framer-fk8oP.framer-9ka035 > :last-child, .framer-fk8oP .framer-dqit7d > :last-child, .framer-fk8oP .framer-262im6 > :last-child, .framer-fk8oP .framer-pc5gro > :last-child, .framer-fk8oP .framer-sl3rr1 > :last-child { margin-right: 0px; } .framer-fk8oP .framer-dqit7d > *, .framer-fk8oP .framer-262im6 > *, .framer-fk8oP .framer-pc5gro > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-fk8oP .framer-16ymgku > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-fk8oP .framer-16ymgku > :first-child { margin-top: 0px; } .framer-fk8oP .framer-16ymgku > :last-child { margin-bottom: 0px; } }",
    ".framer-fk8oP.framer-v-1p49jud.framer-9ka035 { justify-content: center; }",
    ".framer-fk8oP.framer-v-1p49jud .framer-dqit7d { justify-content: flex-end; width: 94px; }",
  ],
  Jt = q(Tc, Ec, "framer-fk8oP"),
  jc = Jt;
Jt.displayName = "Home/Status";
Jt.defaultProps = { height: 42, width: 198 };
M(Jt, {
  variant: {
    options: [
      "XwPo9qGC4",
      "BUN0wW2zJ",
      "SvszP6DBu",
      "mDVTviNgh",
      "VO4pi5TV3",
      "PVKpWD7At",
      "fffltztQF",
    ],
    optionTitles: [
      "Default",
      "Collasped",
      "Mobile",
      "Dark",
      "Light",
      "AlwaysDark",
      "AlwaysLight",
    ],
    title: "Variant",
    type: x.Enum,
  },
  bW5yPdm2I: { title: "Setting", type: x.EventHandler },
  D_n_dMzCO: { defaultValue: !1, title: "Mobile", type: x.Boolean },
  uLaa8oUgA: { title: "Setting 2", type: x.EventHandler },
  qRScD7sgw: { title: "Theme Cursor", type: x.CustomCursor },
  bzjewZMVz: { title: "Sound Cursor", type: x.CustomCursor },
  uh2rKEoGW: { title: "Layout Cursor", type: x.CustomCursor },
  VscZCNiuc: { title: "Setting Cursor", type: x.CustomCursor },
  IDjhS4IKl: { defaultValue: !0, title: "Theme Visible", type: x.Boolean },
  Y6c4BQxZw: { defaultValue: !0, title: "Sound Visible", type: x.Boolean },
  IgMJMP6ld: { defaultValue: !0, title: "Layout Visible", type: x.Boolean },
});
z(Jt, [{ explicitInter: !0, fonts: [] }, ...dc, ...uc, ...yc, ...vc, ...wc], {
  supportsExplicitInterCodegen: !0,
});
var Mc = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerhII_2ClpN",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerComponentViewportWidth: "true",
        framerImmutableVariables: "true",
        framerVariables:
          '{"bW5yPdm2I":"setting","D_n_dMzCO":"mobile","uLaa8oUgA":"setting2","qRScD7sgw":"themeCursor","bzjewZMVz":"soundCursor","uh2rKEoGW":"layoutCursor","VscZCNiuc":"settingCursor","IDjhS4IKl":"themeVisible","Y6c4BQxZw":"soundVisible","IgMJMP6ld":"layoutVisible"}',
        framerIntrinsicWidth: "198",
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "42",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","fixed"]},"BUN0wW2zJ":{"layout":["auto","fixed"]},"SvszP6DBu":{"layout":["auto","fixed"]},"mDVTviNgh":{"layout":["auto","fixed"]},"VO4pi5TV3":{"layout":["auto","fixed"]},"PVKpWD7At":{"layout":["auto","fixed"]},"fffltztQF":{"layout":["auto","fixed"]}}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
ue.loadFonts([
  "FS;Satoshi-medium",
  "FS;Satoshi-bold",
  "FS;Satoshi-bold italic",
  "FS;Satoshi-medium italic",
]);
var Pr = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2",
          weight: "500",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2",
          weight: "500",
        },
      ],
    },
  ],
  Ar = [
    '.framer-mKQBX .framer-styles-preset-1wxnimg:not(.rich-text-wrapper), .framer-mKQBX .framer-styles-preset-1wxnimg.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-cb4dbe66-4559-4dce-ac95-ee2520bf67ec, rgba(0, 0, 0, 0.7)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1599px) and (min-width: 1200px) { .framer-mKQBX .framer-styles-preset-1wxnimg:not(.rich-text-wrapper), .framer-mKQBX .framer-styles-preset-1wxnimg.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-cb4dbe66-4559-4dce-ac95-ee2520bf67ec, rgba(0, 0, 0, 0.7)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-mKQBX .framer-styles-preset-1wxnimg:not(.rich-text-wrapper), .framer-mKQBX .framer-styles-preset-1wxnimg.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-cb4dbe66-4559-4dce-ac95-ee2520bf67ec, rgba(0, 0, 0, 0.7)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-mKQBX .framer-styles-preset-1wxnimg:not(.rich-text-wrapper), .framer-mKQBX .framer-styles-preset-1wxnimg.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-cb4dbe66-4559-4dce-ac95-ee2520bf67ec, rgba(0, 0, 0, 0.7)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  Or = "framer-mKQBX";
ue.loadFonts([
  "FS;Satoshi-medium",
  "FS;Satoshi-bold",
  "FS;Satoshi-bold italic",
  "FS;Satoshi-medium italic",
]);
var qo = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2",
          weight: "500",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2",
          weight: "500",
        },
      ],
    },
  ],
  Ho = [
    '.framer-pQauI .framer-styles-preset-1w7o0dx:not(.rich-text-wrapper), .framer-pQauI .framer-styles-preset-1w7o0dx.rich-text-wrapper h4 { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 10px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1599px) and (min-width: 1200px) { .framer-pQauI .framer-styles-preset-1w7o0dx:not(.rich-text-wrapper), .framer-pQauI .framer-styles-preset-1w7o0dx.rich-text-wrapper h4 { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 10px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-pQauI .framer-styles-preset-1w7o0dx:not(.rich-text-wrapper), .framer-pQauI .framer-styles-preset-1w7o0dx.rich-text-wrapper h4 { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 10px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-pQauI .framer-styles-preset-1w7o0dx:not(.rich-text-wrapper), .framer-pQauI .framer-styles-preset-1w7o0dx.rich-text-wrapper h4 { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 10px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  Po = "framer-pQauI";
var qc = Y(De),
  Hc = at(l.div),
  Pc = Ee(l.div),
  Ac = ["llDAhtHF4", "hop0ZCAyo", "gRpNrhHu5"],
  Ao = "framer-9Pwuf",
  Oc = {
    gRpNrhHu5: "framer-v-cvriz1",
    hop0ZCAyo: "framer-v-1gnd2ek",
    llDAhtHF4: "framer-v-hfuesz",
  };
function Oo(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Gc = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  zc = (e, t) => `translate(-50%, -50%) ${t}`,
  Go = { damping: 14, delay: 0, mass: 1, stiffness: 140, type: "spring" },
  Xc = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Go,
    x: 0,
    y: 10,
  },
  Wc = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Go,
    x: 0,
    y: 0,
  },
  Zc = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 10,
  },
  Qc = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Yc = ({ children: e, blockDocumentScrolling: t, enabled: o = !0 }) => {
    let [a, n] = Ge({ blockDocumentScrolling: t });
    return e({
      hide: () => n(!1),
      show: () => n(!0),
      toggle: () => n(!a),
      visible: o && a,
    });
  },
  Kc = l(F),
  Jc = { Dark: "gRpNrhHu5", Hover: "llDAhtHF4", Mobile: "hop0ZCAyo" },
  $c = ({ cursor: e, height: t, id: o, width: a, ...n }) => {
    var s, i;
    return {
      ...n,
      BMc9d2_8_: e ?? n.BMc9d2_8_,
      variant:
        (i = (s = Jc[n.variant]) !== null && s !== void 0 ? s : n.variant) !==
          null && i !== void 0
          ? i
          : "llDAhtHF4",
    };
  },
  em = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  tm = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        BMc9d2_8_: c,
        ...m
      } = $c(e),
      {
        baseVariant: p,
        classNames: d,
        clearLoadingGesture: y,
        gestureHandlers: b,
        gestureVariant: h,
        isLoading: w,
        setGestureState: u,
        setVariant: k,
        variants: g,
      } = G({
        cycleOrder: Ac,
        defaultVariant: "llDAhtHF4",
        variant: f,
        variantClassNames: Oc,
      }),
      v = em(e, g),
      { activeVariantCallback: C, delay: L } = ne(p),
      D = ({ overlay: le, paginationInfo: ce }) =>
        C(async (...ge) => {
          u({ isHovered: !0 }), le.show();
        }),
      _ = T(null),
      Z = () => p !== "hop0ZCAyo",
      X = T(null),
      H = A(),
      K = [Po, pe],
      te = J();
    return r(B, {
      id: i ?? H,
      children: r(Kc, {
        animate: g,
        initial: !1,
        children: r(Yc, {
          blockDocumentScrolling: !1,
          enabled: Z(),
          children: (le) =>
            r(qe, {
              children: r(Qc, {
                value: Gc,
                children: I(l.div, {
                  ...m,
                  ...b,
                  className: E(Ao, ...K, "framer-hfuesz", s, d),
                  "data-framer-name": "Hover",
                  "data-highlight": !0,
                  id: `${i}-hfuesz`,
                  layoutDependency: v,
                  layoutId: "llDAhtHF4",
                  onMouseEnter: D({ overlay: le }),
                  ref: t ?? _,
                  style: { ...n },
                  ...Oo(
                    {
                      gRpNrhHu5: { "data-framer-name": "Dark" },
                      hop0ZCAyo: {
                        "data-framer-name": "Mobile",
                        "data-highlight": void 0,
                        onMouseEnter: void 0,
                      },
                    },
                    p,
                    h,
                  ),
                  children: [
                    r(Hc, {
                      className: "framer-1bqhg8u",
                      layoutDependency: v,
                      layoutId: "oDWCFIixU",
                      transformTemplate: zc,
                      children: r(Q, {
                        children: r(l.div, {
                          className: "framer-1czpuz3-container",
                          layoutDependency: v,
                          layoutId: "QIwFpCueg-container",
                          children: r(De, {
                            b1BqfRpNR: !0,
                            bUFcBjj2_: !1,
                            dIiBtQnYe: 100,
                            height: "100%",
                            id: "QIwFpCueg",
                            jmykv9nju: "https://twitter.com/jayzhushi",
                            layoutId: "QIwFpCueg",
                            variant: "n7p8bWC6m",
                            VTdF3jUde:
                              "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                            width: "100%",
                            ZWLrRxtcU: !0,
                            ...Oo(
                              { gRpNrhHu5: { variant: "NgHSBu1eL" } },
                              p,
                              h,
                            ),
                          }),
                        }),
                      }),
                    }),
                    Z() &&
                      r(Ue, {
                        children:
                          le.visible &&
                          r(Qe, {
                            alignment: "start",
                            anchorRef: t ?? _,
                            className: E(Ao, d, ...K),
                            collisionDetection: !1,
                            "data-framer-portal-id": `${i}-hfuesz`,
                            offsetX: 0,
                            offsetY: -10,
                            onDismiss: le.hide,
                            placement: "top",
                            portalSelector: "#overlay",
                            safeArea: !0,
                            zIndex: 11,
                            children: r(Pc, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: Wc,
                              className: "framer-1wpgnd9",
                              "data-framer-cursor": c,
                              exit: Xc,
                              initial: Zc,
                              layoutDependency: v,
                              layoutId: "jTTZgV8Q4",
                              ref: X,
                              role: "dialog",
                              style: {
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                transformPerspective: 1200,
                              },
                              children: I(l.div, {
                                className: "framer-rpey96",
                                "data-framer-name": "TwitterCard",
                                layoutDependency: v,
                                layoutId: "mnl3YKbCs",
                                style: {
                                  backgroundColor:
                                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                                children: [
                                  r(rt, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 512,
                                      intrinsicWidth: 512,
                                      pixelHeight: 512,
                                      pixelWidth: 512,
                                      src: "https://framerusercontent.com/images/Cv7tUcy1rcgOmuD5YAOXl0TIUUg.jpg",
                                    },
                                    className: "framer-luq8zf",
                                    "data-border": !0,
                                    layoutDependency: v,
                                    layoutId: "ckRObSIjk",
                                    style: {
                                      "--border-bottom-width": "2px",
                                      "--border-color":
                                        "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                      "--border-left-width": "2px",
                                      "--border-right-width": "2px",
                                      "--border-style": "solid",
                                      "--border-top-width": "2px",
                                      borderBottomLeftRadius: 40,
                                      borderBottomRightRadius: 40,
                                      borderTopLeftRadius: 40,
                                      borderTopRightRadius: 40,
                                      boxShadow:
                                        "0px 0.48290122862090357px 0.2897407371725422px -1.5px rgba(0, 0, 0, 0.14396), 0px 4px 2.4000000000000004px -3px rgba(0, 0, 0, 0.1)",
                                    },
                                  }),
                                  I(l.div, {
                                    className: "framer-19m03ah",
                                    layoutDependency: v,
                                    layoutId: "T4SfvXw04",
                                    children: [
                                      r($, {
                                        __fromCanvasComponent: !0,
                                        children: r(F, {
                                          children: r(l.h4, {
                                            className:
                                              "framer-styles-preset-1w7o0dx",
                                            "data-styles-preset": "xFx_9r8NJ",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-1eung3n, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                                            },
                                            children: "Jay Ji",
                                          }),
                                        }),
                                        className: "framer-dwyncm",
                                        fonts: ["Inter"],
                                        layoutDependency: v,
                                        layoutId: "CkFTW6R_h",
                                        style: {
                                          "--extracted-1eung3n":
                                            "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                          "--framer-link-text-color":
                                            "rgb(0, 153, 255)",
                                          "--framer-link-text-decoration":
                                            "underline",
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      r($, {
                                        __fromCanvasComponent: !0,
                                        children: r(F, {
                                          children: r(l.p, {
                                            className:
                                              "framer-styles-preset-9jlebu",
                                            "data-styles-preset": "sSyE5_N0_",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)))",
                                            },
                                            children: "@jayzhushi",
                                          }),
                                        }),
                                        className: "framer-gtailq",
                                        fonts: ["Inter"],
                                        layoutDependency: v,
                                        layoutId: "AYG7LRKiU",
                                        style: {
                                          "--extracted-r6o4lv":
                                            "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                                          "--framer-link-text-color":
                                            "rgb(0, 153, 255)",
                                          "--framer-link-text-decoration":
                                            "underline",
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                      }),
                  ],
                }),
              }),
            }),
        }),
      }),
    });
  }),
  rm = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-9Pwuf.framer-pxuq8d, .framer-9Pwuf .framer-pxuq8d { display: block; }",
    ".framer-9Pwuf.framer-hfuesz { height: 54px; overflow: visible; position: relative; width: 54px; }",
    ".framer-9Pwuf .framer-1bqhg8u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 50%; width: min-content; }",
    ".framer-9Pwuf .framer-1czpuz3-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-9Pwuf .framer-1wpgnd9 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 266px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-9Pwuf .framer-rpey96 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 87px; justify-content: flex-start; overflow: hidden; padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-9Pwuf .framer-luq8zf { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 56px); overflow: visible; position: relative; width: 56px; }",
    ".framer-9Pwuf .framer-19m03ah { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-9Pwuf .framer-dwyncm, .framer-9Pwuf .framer-gtailq { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-9Pwuf .framer-1bqhg8u, .framer-9Pwuf .framer-1wpgnd9, .framer-9Pwuf .framer-rpey96, .framer-9Pwuf .framer-19m03ah { gap: 0px; } .framer-9Pwuf .framer-1bqhg8u > *, .framer-9Pwuf .framer-rpey96 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-9Pwuf .framer-1bqhg8u > :first-child, .framer-9Pwuf .framer-rpey96 > :first-child { margin-left: 0px; } .framer-9Pwuf .framer-1bqhg8u > :last-child, .framer-9Pwuf .framer-rpey96 > :last-child { margin-right: 0px; } .framer-9Pwuf .framer-1wpgnd9 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-9Pwuf .framer-1wpgnd9 > :first-child, .framer-9Pwuf .framer-19m03ah > :first-child { margin-top: 0px; } .framer-9Pwuf .framer-1wpgnd9 > :last-child, .framer-9Pwuf .framer-19m03ah > :last-child { margin-bottom: 0px; } .framer-9Pwuf .framer-19m03ah > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } }",
    ...Ho,
    ...de,
    '.framer-9Pwuf[data-border="true"]::after, .framer-9Pwuf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  $t = q(tm, rm, "framer-9Pwuf"),
  ka = $t;
$t.displayName = "Social/Twitter";
$t.defaultProps = { height: 54, width: 54 };
M($t, {
  variant: {
    options: ["llDAhtHF4", "hop0ZCAyo", "gRpNrhHu5"],
    optionTitles: ["Hover", "Mobile", "Dark"],
    title: "Variant",
    type: x.Enum,
  },
  BMc9d2_8_: { title: "Cursor", type: x.CustomCursor },
});
z(
  $t,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...qc,
    ...se(qo),
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
ue.loadFonts([]);
var zo = [{ explicitInter: !0, fonts: [] }],
  Xo = [
    '.framer-ycvwY .framer-styles-preset-a8k94f:not(.rich-text-wrapper), .framer-ycvwY .framer-styles-preset-a8k94f.rich-text-wrapper a { --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: var(--token-341b04b2-a492-491e-85d2-ad596063a51c, #f06448) /* {"name":"Theme"} */; --framer-link-hover-text-decoration: underline; --framer-link-text-color: var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)); --framer-link-text-decoration: underline; transition: color 0.2s cubic-bezier(0.44, 0, 0.56, 1) 0s; }',
  ],
  Wo = "framer-ycvwY";
var Fa = {};
Ce(Fa, { __FramerMetadata__: () => Dm, default: () => zr });
ue.loadFonts([
  "FS;Satoshi-medium",
  "FS;Satoshi-bold",
  "FS;Satoshi-bold italic",
  "FS;Satoshi-medium italic",
]);
var Ft = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2",
          weight: "500",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2",
          weight: "500",
        },
      ],
    },
  ],
  Rt = [
    '.framer-B52hn .framer-styles-preset-p7pc09:not(.rich-text-wrapper), .framer-B52hn .framer-styles-preset-p7pc09.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  ],
  St = "framer-B52hn";
var om = Ee(l.div),
  nm = { hCNA0b1IZ: { hover: !0, pressed: !0 } },
  im = ["hCNA0b1IZ", "Zq6Nb291z", "aCGsadEXe", "wVMMoo8QR", "Gkgww08di"],
  sm = "framer-Mopol",
  lm = {
    aCGsadEXe: "framer-v-1rx0100",
    Gkgww08di: "framer-v-vi1pe",
    hCNA0b1IZ: "framer-v-1w4e41e",
    wVMMoo8QR: "framer-v-1xkbyea",
    Zq6Nb291z: "framer-v-kg8g03",
  };
function Zo(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var fm = { damping: 28, delay: 0, mass: 1, stiffness: 178, type: "spring" },
  cm = { delay: 0, duration: 3, ease: [0, 0, 1, 1], type: "tween" },
  mm = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  dm = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  pm = l(F),
  um = {
    Default: "hCNA0b1IZ",
    Disabled: "aCGsadEXe",
    Error: "Gkgww08di",
    Loading: "Zq6Nb291z",
    Success: "wVMMoo8QR",
  },
  hm = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = um[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "hCNA0b1IZ",
    };
  },
  gm = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  ym = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = hm(e),
      {
        baseVariant: m,
        classNames: p,
        gestureHandlers: d,
        gestureVariant: y,
        setGestureState: b,
        setVariant: h,
        variants: w,
      } = G({
        cycleOrder: im,
        defaultVariant: "hCNA0b1IZ",
        enabledGestures: nm,
        variant: f,
        variantClassNames: lm,
      }),
      u = gm(e, w),
      k = T(null),
      g = () => m !== "Zq6Nb291z",
      v = () => m === "Zq6Nb291z",
      C = A(),
      L = [St],
      D = J();
    return r(B, {
      id: i ?? C,
      children: r(pm, {
        animate: w,
        initial: !1,
        children: r(dm, {
          value: fm,
          children: I(l.button, {
            ...c,
            ...d,
            className: E(sm, ...L, "framer-1w4e41e", s, p),
            "data-framer-name": "Default",
            "data-reset": "button",
            layoutDependency: u,
            layoutId: "hCNA0b1IZ",
            ref: t ?? k,
            style: {
              backgroundColor:
                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              ...n,
            },
            variants: {
              "hCNA0b1IZ-hover": { backgroundColor: "rgba(51, 51, 51, 0.85)" },
              "hCNA0b1IZ-pressed": { backgroundColor: "rgb(51, 51, 51)" },
              aCGsadEXe: {
                backgroundColor:
                  "var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15))",
              },
              Gkgww08di: { backgroundColor: "rgba(219, 56, 44, 0.15)" },
            },
            ...Zo(
              {
                "hCNA0b1IZ-hover": { "data-framer-name": void 0 },
                "hCNA0b1IZ-pressed": { "data-framer-name": void 0 },
                aCGsadEXe: { "data-framer-name": "Disabled" },
                Gkgww08di: { "data-framer-name": "Error" },
                wVMMoo8QR: { "data-framer-name": "Success" },
                Zq6Nb291z: { "data-framer-name": "Loading" },
              },
              m,
              y,
            ),
            children: [
              g() &&
                r($, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-p7pc09",
                      "data-styles-preset": "hCbgbtQ8_",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                      },
                      children: "Send",
                    }),
                  }),
                  className: "framer-1v61gp8",
                  fonts: ["Inter"],
                  layoutDependency: u,
                  layoutId: "JYxv5h1xP",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  variants: {
                    Gkgww08di: { "--extracted-r6o4lv": "rgb(219, 56, 44)" },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...Zo(
                    {
                      Gkgww08di: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(219, 56, 44))",
                            },
                            children: "Try again",
                          }),
                        }),
                      },
                      wVMMoo8QR: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                            },
                            children: "Sent",
                          }),
                        }),
                      },
                    },
                    m,
                    y,
                  ),
                }),
              v() &&
                r(l.div, {
                  className: "framer-1xc1pcz",
                  "data-framer-name": "Spinner",
                  layoutDependency: u,
                  layoutId: "nEjKbU8wX",
                  children: r(om, {
                    __framer__loop: mm,
                    __framer__loopEffectEnabled: !0,
                    __framer__loopRepeatDelay: 0,
                    __framer__loopRepeatType: "loop",
                    __framer__loopTransition: cm,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: "framer-195vn7k",
                    "data-framer-name": "Conic",
                    layoutDependency: u,
                    layoutId: "aiUGZpG6C",
                    children: r(ee, {
                      className: "framer-1mom7r9",
                      "data-framer-name": "graphic",
                      layout: "position",
                      layoutDependency: u,
                      layoutId: "l4LozcKCc",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 2.5 L 10 5 M 10 15 L 10 17.5 M 17.5 10 L 15 10 M 5 10 L 2.5 10 M 15.303 4.697 L 13.536 6.465 M 6.464 13.535 L 4.697 15.302 M 15.303 15.303 L 13.536 13.536 M 6.464 6.465 L 4.697 4.697" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                      svgContentId: 9093946901,
                      withExternalLayout: !0,
                    }),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  vm = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Mopol.framer-ucaj52, .framer-Mopol .framer-ucaj52 { display: block; }",
    ".framer-Mopol.framer-1w4e41e { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 10px 20px 10px 20px; position: relative; width: 124px; }",
    ".framer-Mopol .framer-1v61gp8 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-Mopol .framer-1xc1pcz { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }",
    ".framer-Mopol .framer-195vn7k { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }",
    ".framer-Mopol .framer-1mom7r9 { flex: none; height: 20px; left: 0px; position: absolute; top: 0px; width: 20px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Mopol.framer-1w4e41e { gap: 0px; } .framer-Mopol.framer-1w4e41e > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Mopol.framer-1w4e41e > :first-child { margin-left: 0px; } .framer-Mopol.framer-1w4e41e > :last-child { margin-right: 0px; } }",
    ".framer-Mopol.framer-v-kg8g03.framer-1w4e41e, .framer-Mopol.framer-v-1rx0100.framer-1w4e41e, .framer-Mopol.framer-v-1xkbyea.framer-1w4e41e, .framer-Mopol.framer-v-vi1pe.framer-1w4e41e { cursor: unset; }",
    ...Rt,
  ],
  er = q(ym, vm, "framer-Mopol"),
  _a = er;
er.displayName = "Form/Button";
er.defaultProps = { height: 40, width: 124 };
M(er, {
  variant: {
    options: ["hCNA0b1IZ", "Zq6Nb291z", "aCGsadEXe", "wVMMoo8QR", "Gkgww08di"],
    optionTitles: ["Default", "Loading", "Disabled", "Success", "Error"],
    title: "Variant",
    type: x.Enum,
  },
});
z(
  er,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...se(Ft),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var xm = Y(_a),
  bm = Fe($),
  wm = Re($),
  km = "framer-aX3Fv",
  Cm = { fvY13SdyC: "framer-v-1eqow5x" };
var _m = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Fm = (e, t, o) => {
    switch (e.state) {
      case "success":
        var a;
        return (a = t.success) !== null && a !== void 0 ? a : o;
      case "pending":
        var n;
        return (n = t.pending) !== null && n !== void 0 ? n : o;
      case "error":
        var s;
        return (s = t.error) !== null && s !== void 0 ? s : o;
      case "incomplete":
        var i;
        return (i = t.incomplete) !== null && i !== void 0 ? i : o;
    }
  },
  Rm = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Sm = l.create(F),
  Lm = ({ height: e, id: t, width: o, ...a }) => ({ ...a }),
  Im = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Vm = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = Lm(e),
      {
        baseVariant: m,
        classNames: p,
        clearLoadingGesture: d,
        gestureHandlers: y,
        gestureVariant: b,
        isLoading: h,
        setGestureState: w,
        setVariant: u,
        variants: k,
      } = G({ defaultVariant: "fvY13SdyC", variant: f, variantClassNames: Cm }),
      g = Im(e, k),
      v = T(null),
      C = A(),
      L = [pe, Wo],
      D = J();
    return r(B, {
      id: i ?? C,
      children: r(Sm, {
        animate: k,
        initial: !1,
        children: r(Rm, {
          value: _m,
          children: r(l.div, {
            ...c,
            ...y,
            className: E(km, ...L, "framer-1eqow5x", s, p),
            "data-framer-name": "Desktop",
            layoutDependency: g,
            layoutId: "fvY13SdyC",
            ref: t ?? v,
            style: {
              backgroundColor:
                "var(--token-c65da1c5-151d-4ef1-a84e-67cf0d9bccf4, rgb(235, 235, 234))",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              ...n,
            },
            children: r(lo, {
              action:
                "https://api.framer.com/forms/v1/forms/7f2a9144-441f-4dc7-b830-963056afa8e9/submit",
              className: "framer-182dl9w",
              layoutDependency: g,
              layoutId: "W9zkbJajc",
              children: (_) =>
                I(qe, {
                  children: [
                    I(l.div, {
                      className: "framer-b7pwte",
                      layoutDependency: g,
                      layoutId: "QzAL_dVLD",
                      children: [
                        r(l.label, {
                          className: "framer-1en53qs",
                          layoutDependency: g,
                          layoutId: "FSwF16B9J",
                          children: r(Ir, {
                            className: "framer-xflkm6",
                            inputName: "name",
                            layoutDependency: g,
                            layoutId: "FWU1BsEfu",
                            placeholder: "name",
                            required: !0,
                            style: {
                              "--framer-input-background":
                                "var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05))",
                              "--framer-input-border-bottom-width": "1px",
                              "--framer-input-border-color":
                                "var(--token-04260250-53b5-400b-8b47-5cf972cf5efa, rgba(240, 100, 72, 0))",
                              "--framer-input-border-left-width": "1px",
                              "--framer-input-border-radius-bottom-left":
                                "10px",
                              "--framer-input-border-radius-bottom-right":
                                "10px",
                              "--framer-input-border-radius-top-left": "10px",
                              "--framer-input-border-radius-top-right": "10px",
                              "--framer-input-border-right-width": "1px",
                              "--framer-input-border-style": "solid",
                              "--framer-input-border-top-width": "1px",
                              "--framer-input-font-color":
                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                              "--framer-input-icon-color": "rgb(153, 153, 153)",
                              "--framer-input-placeholder-color":
                                "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                            },
                            type: "text",
                          }),
                        }),
                        r(l.label, {
                          className: "framer-11jy5lo",
                          layoutDependency: g,
                          layoutId: "mUzF1MXW4",
                          children: r(Ir, {
                            className: "framer-1sk509b",
                            inputName: "email",
                            layoutDependency: g,
                            layoutId: "Bbi32GcEm",
                            placeholder: "reply@gmail.com",
                            style: {
                              "--framer-input-background":
                                "var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05))",
                              "--framer-input-border-bottom-width": "1px",
                              "--framer-input-border-color":
                                "var(--token-04260250-53b5-400b-8b47-5cf972cf5efa, rgba(240, 100, 72, 0))",
                              "--framer-input-border-left-width": "1px",
                              "--framer-input-border-radius-bottom-left":
                                "10px",
                              "--framer-input-border-radius-bottom-right":
                                "10px",
                              "--framer-input-border-radius-top-left": "10px",
                              "--framer-input-border-radius-top-right": "10px",
                              "--framer-input-border-right-width": "1px",
                              "--framer-input-border-style": "solid",
                              "--framer-input-border-top-width": "1px",
                              "--framer-input-font-color":
                                "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                              "--framer-input-icon-color": "rgb(153, 153, 153)",
                              "--framer-input-placeholder-color":
                                "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                            },
                            type: "email",
                          }),
                        }),
                      ],
                    }),
                    r(l.div, {
                      className: "framer-1elbusv",
                      layoutDependency: g,
                      layoutId: "CXENiRk25",
                      children: r(l.label, {
                        className: "framer-9x8krq",
                        layoutDependency: g,
                        layoutId: "MkItlC1C5",
                        children: r(Ir, {
                          className: "framer-7ex7c5",
                          inputName: "content",
                          layoutDependency: g,
                          layoutId: "ZXfndkbFN",
                          placeholder: "Do you need a cup of coffee?",
                          required: !0,
                          style: {
                            "--framer-input-background":
                              "var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05))",
                            "--framer-input-border-bottom-width": "1px",
                            "--framer-input-border-color":
                              "var(--token-04260250-53b5-400b-8b47-5cf972cf5efa, rgb(240, 100, 72))",
                            "--framer-input-border-left-width": "1px",
                            "--framer-input-border-radius-bottom-left": "10px",
                            "--framer-input-border-radius-bottom-right": "10px",
                            "--framer-input-border-radius-top-left": "10px",
                            "--framer-input-border-radius-top-right": "10px",
                            "--framer-input-border-right-width": "1px",
                            "--framer-input-border-style": "solid",
                            "--framer-input-border-top-width": "1px",
                            "--framer-input-font-color":
                              "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                            "--framer-input-icon-color": "rgb(153, 153, 153)",
                            "--framer-input-placeholder-color":
                              "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                          },
                          type: "textarea",
                        }),
                      }),
                    }),
                    I(l.div, {
                      className: "framer-1a59lna",
                      layoutDependency: g,
                      layoutId: "aTExfdUnB",
                      children: [
                        r(l.label, {
                          className: "framer-1su92qu",
                          layoutDependency: g,
                          layoutId: "v1Swijjci",
                          children: r(co, {
                            className: "framer-xuuswp",
                            defaultValue: "none",
                            inputName: "Reply",
                            layoutDependency: g,
                            layoutId: "d2WZSxnpg",
                            required: !1,
                            selectOptions: [
                              {
                                title: "replay options",
                                type: "option",
                                value: "none",
                              },
                              {
                                title: "I need a reply.",
                                type: "option",
                                value: "yes",
                              },
                              {
                                title: "I don't need a reply.",
                                type: "option",
                                value: "no",
                              },
                            ],
                            style: {
                              "--framer-input-background":
                                "var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05))",
                              "--framer-input-border-bottom-width": "1px",
                              "--framer-input-border-color":
                                "var(--token-04260250-53b5-400b-8b47-5cf972cf5efa, rgba(240, 100, 72, 0))",
                              "--framer-input-border-left-width": "1px",
                              "--framer-input-border-radius-bottom-left":
                                "24px",
                              "--framer-input-border-radius-bottom-right":
                                "24px",
                              "--framer-input-border-radius-top-left": "24px",
                              "--framer-input-border-radius-top-right": "24px",
                              "--framer-input-border-right-width": "1px",
                              "--framer-input-border-style": "solid",
                              "--framer-input-border-top-width": "1px",
                              "--framer-input-font-color":
                                "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                              "--framer-input-icon-color": "rgb(153, 153, 153)",
                              "--framer-input-invalid-text-color":
                                "var(--token-412318b0-4c42-4b14-922b-e959f789ac18, rgba(255, 255, 255, 0.3))",
                            },
                          }),
                        }),
                        r(Q, {
                          height: 40,
                          children: r(l.div, {
                            className: "framer-11txq0u-container",
                            layoutDependency: g,
                            layoutId: "yjqnfx3sh-container",
                            children: r(_a, {
                              height: "100%",
                              id: "yjqnfx3sh",
                              layoutId: "yjqnfx3sh",
                              type: "submit",
                              variant: Fm(
                                _,
                                { pending: "Zq6Nb291z", success: "wVMMoo8QR" },
                                "hCNA0b1IZ",
                              ),
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                    I(l.div, {
                      className: "framer-npph69",
                      layoutDependency: g,
                      layoutId: "D7sGh1GOg",
                      children: [
                        r(bm, {
                          __fromCanvasComponent: !0,
                          children: r(F, {
                            children: I(l.p, {
                              className: "framer-styles-preset-9jlebu",
                              "data-styles-preset": "sSyE5_N0_",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)))",
                              },
                              children: [
                                "Your message will be sent to ",
                                r(Ye, {
                                  href: "mailto:jayzhushi@gmail.com",
                                  nodeId: "tZe5po9AU",
                                  openInNewTab: !0,
                                  smoothScroll: !1,
                                  children: r(l.a, {
                                    className: "framer-styles-preset-a8k94f",
                                    "data-styles-preset": "svgLC4JHy",
                                    children: "jayzhushi@gmail.com",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          className: "framer-4anyd9",
                          fonts: ["Inter"],
                          layoutDependency: g,
                          layoutId: "tZe5po9AU",
                          style: {
                            "--extracted-r6o4lv":
                              "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        r(wm, {
                          __fromCanvasComponent: !0,
                          children: r(F, {
                            children: I(l.p, {
                              className: "framer-styles-preset-9jlebu",
                              "data-styles-preset": "sSyE5_N0_",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3)))",
                              },
                              children: [
                                "\u4F60\u7684\u4FE1\u606F\u5C06\u88AB\u53D1\u9001\u5230 ",
                                r(Ye, {
                                  href: "mailto:jayzhushi@gmail.com",
                                  nodeId: "W4wqUFmJe",
                                  openInNewTab: !0,
                                  smoothScroll: !1,
                                  children: r(l.a, {
                                    className: "framer-styles-preset-a8k94f",
                                    "data-styles-preset": "svgLC4JHy",
                                    children: "jayzhushi@gmail.com",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          className: "framer-mmaml0",
                          fonts: ["Inter"],
                          layoutDependency: g,
                          layoutId: "W4wqUFmJe",
                          style: {
                            "--extracted-r6o4lv":
                              "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
            }),
          }),
        }),
      }),
    });
  }),
  Um = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-aX3Fv.framer-1n5w4uh, .framer-aX3Fv .framer-1n5w4uh { display: block; }",
    ".framer-aX3Fv.framer-1eqow5x { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 417px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-aX3Fv .framer-182dl9w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px; position: relative; width: 100%; }",
    ".framer-aX3Fv .framer-b7pwte, .framer-aX3Fv .framer-1a59lna { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-aX3Fv .framer-1en53qs { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.8 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }",
    '.framer-aX3Fv .framer-xflkm6, .framer-aX3Fv .framer-1sk509b { --framer-input-focused-border-color: var(--token-341b04b2-a492-491e-85d2-ad596063a51c, #f06448); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.15s cubic-bezier(0.12,0.23,0.5,1) 0s; --framer-input-font-family: "Satoshi"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 500; --framer-input-padding: 12px; flex: none; height: 40px; position: relative; width: 100%; }',
    ".framer-aX3Fv .framer-11jy5lo, .framer-aX3Fv .framer-1su92qu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }",
    ".framer-aX3Fv .framer-1elbusv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-aX3Fv .framer-9x8krq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }",
    '.framer-aX3Fv .framer-7ex7c5 { --framer-input-focused-border-color: var(--token-341b04b2-a492-491e-85d2-ad596063a51c, rgba(240, 100, 73, 0.4)); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.15s cubic-bezier(0.12,0.23,0.5,1) 0s; --framer-input-font-family: "Satoshi"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 500; --framer-input-padding: 12px; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 150px; position: relative; width: 100%; }',
    '.framer-aX3Fv .framer-xuuswp { --framer-input-focused-border-color: var(--token-341b04b2-a492-491e-85d2-ad596063a51c, #f06448); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-transition: all 0.15s cubic-bezier(0.12,0.23,0.5,1) 0s; --framer-input-font-family: "Satoshi"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1em; --framer-input-font-size: 16px; --framer-input-font-weight: 500; --framer-input-padding: 12px; flex: none; height: 40px; position: relative; width: 100%; }',
    ".framer-aX3Fv .framer-11txq0u-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-aX3Fv .framer-npph69 { align-content: flex-start; align-items: flex-start; cursor: default; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 8px 0px 8px; position: relative; width: 100%; }",
    ".framer-aX3Fv .framer-4anyd9, .framer-aX3Fv .framer-mmaml0 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-aX3Fv.framer-1eqow5x, .framer-aX3Fv .framer-182dl9w, .framer-aX3Fv .framer-b7pwte, .framer-aX3Fv .framer-1en53qs, .framer-aX3Fv .framer-11jy5lo, .framer-aX3Fv .framer-1elbusv, .framer-aX3Fv .framer-9x8krq, .framer-aX3Fv .framer-1a59lna, .framer-aX3Fv .framer-1su92qu, .framer-aX3Fv .framer-npph69 { gap: 0px; } .framer-aX3Fv.framer-1eqow5x > *, .framer-aX3Fv .framer-182dl9w > *, .framer-aX3Fv .framer-1en53qs > *, .framer-aX3Fv .framer-11jy5lo > *, .framer-aX3Fv .framer-9x8krq > *, .framer-aX3Fv .framer-1su92qu > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-aX3Fv.framer-1eqow5x > :first-child, .framer-aX3Fv .framer-182dl9w > :first-child, .framer-aX3Fv .framer-1en53qs > :first-child, .framer-aX3Fv .framer-11jy5lo > :first-child, .framer-aX3Fv .framer-1elbusv > :first-child, .framer-aX3Fv .framer-9x8krq > :first-child, .framer-aX3Fv .framer-1su92qu > :first-child, .framer-aX3Fv .framer-npph69 > :first-child { margin-top: 0px; } .framer-aX3Fv.framer-1eqow5x > :last-child, .framer-aX3Fv .framer-182dl9w > :last-child, .framer-aX3Fv .framer-1en53qs > :last-child, .framer-aX3Fv .framer-11jy5lo > :last-child, .framer-aX3Fv .framer-1elbusv > :last-child, .framer-aX3Fv .framer-9x8krq > :last-child, .framer-aX3Fv .framer-1su92qu > :last-child, .framer-aX3Fv .framer-npph69 > :last-child { margin-bottom: 0px; } .framer-aX3Fv .framer-b7pwte > *, .framer-aX3Fv .framer-1a59lna > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-aX3Fv .framer-b7pwte > :first-child, .framer-aX3Fv .framer-1a59lna > :first-child { margin-left: 0px; } .framer-aX3Fv .framer-b7pwte > :last-child, .framer-aX3Fv .framer-1a59lna > :last-child { margin-right: 0px; } .framer-aX3Fv .framer-1elbusv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-aX3Fv .framer-npph69 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }",
    ...de,
    ...Xo,
  ],
  Gr = q(Vm, Um, "framer-aX3Fv"),
  zr = Gr;
Gr.displayName = "Utilities/MailForm";
Gr.defaultProps = { height: 340.5, width: 417 };
z(
  Gr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...xm,
    ...se(me),
    ...se(zo),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Dm = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerJU7ZpO_vm",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
        framerIntrinsicWidth: "417",
        framerContractVersion: "1",
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "340.5",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}',
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var Tm = Y(De),
  Em = at(l.div),
  jm = Y(zr),
  Mm = Ve(Ro(zr), Fa),
  Nm = [
    "QkHTEsfZ8",
    "oLGoFrqwT",
    "s49AXmd2v",
    "mxi8gZhg7",
    "hMKOOSP6K",
    "VgQrGJ3F8",
    "dClNCFbbb",
    "k7o1gUq0q",
  ],
  Bm = "framer-3v6hH",
  qm = {
    dClNCFbbb: "framer-v-e92lem",
    hMKOOSP6K: "framer-v-3oadar",
    k7o1gUq0q: "framer-v-wf9l41",
    mxi8gZhg7: "framer-v-kho36m",
    oLGoFrqwT: "framer-v-1c7cpwj",
    QkHTEsfZ8: "framer-v-18x6quu",
    s49AXmd2v: "framer-v-1ccgoc3",
    VgQrGJ3F8: "framer-v-1yof91t",
  };
function Qo(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Hm = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Pm = (e, t) => `translate(-50%, -50%) ${t}`,
  Am = { damping: 14, delay: 0, mass: 1, stiffness: 140, type: "spring" },
  Yo = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Om = ({ children: e, blockDocumentScrolling: t, enabled: o = !0 }) => {
    let [a, n] = Ge({ blockDocumentScrolling: t });
    return e({
      hide: () => n(!1),
      show: () => n(!0),
      toggle: () => n(!a),
      visible: o && a,
    });
  },
  Gm = l(F),
  zm = {
    Dark_Click: "k7o1gUq0q",
    Dark_Hover: "dClNCFbbb",
    Dark: "VgQrGJ3F8",
    Default_Click: "s49AXmd2v",
    Default_Hover: "oLGoFrqwT",
    Default: "QkHTEsfZ8",
    Mobile: "mxi8gZhg7",
    Tinted: "hMKOOSP6K",
  },
  Xm = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = zm[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "QkHTEsfZ8",
    };
  },
  Wm = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Zm = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = Xm(e),
      {
        baseVariant: m,
        classNames: p,
        clearLoadingGesture: d,
        gestureHandlers: y,
        gestureVariant: b,
        isLoading: h,
        setGestureState: w,
        setVariant: u,
        variants: k,
      } = G({
        cycleOrder: Nm,
        defaultVariant: "QkHTEsfZ8",
        variant: f,
        variantClassNames: qm,
      }),
      g = Wm(e, k),
      { activeVariantCallback: v, delay: C } = ne(m),
      L = v(async (...be) => {
        w({ isPressed: !1 }), u("s49AXmd2v");
      }),
      D = ({ overlay: be, paginationInfo: $e }) =>
        v(async (...mt) => {
          w({ isHovered: !0 }), u("oLGoFrqwT"), be.show();
        }),
      _ = ({ overlay: be, paginationInfo: $e }) =>
        v(async (...mt) => {
          w({ isHovered: !0 }), be.show();
        }),
      Z = v(async (...be) => {
        w({ isHovered: !1 }), u("QkHTEsfZ8");
      }),
      X = v(async (...be) => {
        w({ isPressed: !1 }), u("k7o1gUq0q");
      }),
      H = ({ overlay: be, paginationInfo: $e }) =>
        v(async (...mt) => {
          w({ isHovered: !0 }), u("dClNCFbbb"), be.show();
        }),
      K = v(async (...be) => {
        w({ isHovered: !1 }), u("VgQrGJ3F8");
      }),
      te = v(async (...be) => {
        u("QkHTEsfZ8");
      }),
      le = v(async (...be) => {
        u("VgQrGJ3F8");
      }),
      ce = T(null),
      ge = () => m !== "mxi8gZhg7",
      ye = A(),
      we = [],
      Se = J();
    return r(B, {
      id: i ?? ye,
      children: r(Gm, {
        animate: k,
        initial: !1,
        children: r(Om, {
          blockDocumentScrolling: !1,
          children: (be) =>
            r(qe, {
              children: r(Yo, {
                value: Hm,
                children: I(l.div, {
                  ...c,
                  ...y,
                  className: E(Bm, ...we, "framer-18x6quu", s, p),
                  "data-framer-name": "Default",
                  "data-highlight": !0,
                  id: `${i}-18x6quu`,
                  layoutDependency: g,
                  layoutId: "QkHTEsfZ8",
                  onMouseEnter: D({ overlay: be }),
                  onTap: L,
                  ref: t ?? ce,
                  style: {
                    filter: "brightness(1)",
                    WebkitFilter: "brightness(1)",
                    ...n,
                  },
                  variants: {
                    hMKOOSP6K: {
                      filter: "brightness(0.9)",
                      WebkitFilter: "brightness(0.9)",
                    },
                  },
                  ...Qo(
                    {
                      dClNCFbbb: {
                        "data-framer-name": "Dark_Hover",
                        onMouseEnter: _({ overlay: be }),
                        onMouseLeave: K,
                        onTap: X,
                      },
                      hMKOOSP6K: { "data-framer-name": "Tinted" },
                      k7o1gUq0q: {
                        "data-framer-name": "Dark_Click",
                        onMouseEnter: _({ overlay: be }),
                        onTap: void 0,
                      },
                      mxi8gZhg7: {
                        "data-framer-name": "Mobile",
                        onMouseEnter: _({ overlay: be }),
                        onTap: void 0,
                      },
                      oLGoFrqwT: {
                        "data-framer-name": "Default_Hover",
                        onMouseEnter: _({ overlay: be }),
                        onMouseLeave: Z,
                      },
                      s49AXmd2v: {
                        "data-framer-name": "Default_Click",
                        onMouseEnter: _({ overlay: be }),
                        onTap: void 0,
                      },
                      VgQrGJ3F8: {
                        "data-framer-name": "Dark",
                        onMouseEnter: H({ overlay: be }),
                        onTap: X,
                      },
                    },
                    m,
                    b,
                  ),
                  children: [
                    r(Em, {
                      className: "framer-1w1m2r0",
                      layoutDependency: g,
                      layoutId: "uaBRTY9NN",
                      transformTemplate: Pm,
                      children: r(Q, {
                        children: r(l.div, {
                          className: "framer-hb5bxg-container",
                          layoutDependency: g,
                          layoutId: "s6Pj7r31I-container",
                          children: r(De, {
                            b1BqfRpNR: !0,
                            bUFcBjj2_: !1,
                            dIiBtQnYe: 100,
                            height: "100%",
                            id: "s6Pj7r31I",
                            layoutId: "s6Pj7r31I",
                            variant: "LqK6hOvsJ",
                            VTdF3jUde:
                              "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                            width: "100%",
                            ZWLrRxtcU: !0,
                            ...Qo(
                              {
                                dClNCFbbb: { variant: "Kl68LqE9j" },
                                k7o1gUq0q: {
                                  QB6UkYvuv: le,
                                  variant: "UKjaIInwR",
                                },
                                mxi8gZhg7: {
                                  jmykv9nju: "mailto:jayzhushi@gmail.com",
                                },
                                s49AXmd2v: {
                                  QB6UkYvuv: te,
                                  variant: "BNgYtsM9z",
                                },
                                VgQrGJ3F8: { variant: "Kl68LqE9j" },
                              },
                              m,
                              b,
                            ),
                          }),
                        }),
                      }),
                    }),
                    ge() &&
                      r(Yo, {
                        value: Am,
                        children: r(Q, {
                          width: "417px",
                          children: r(l.div, {
                            className: "framer-1dnxfbi-container",
                            layoutDependency: g,
                            layoutId: "snYJq0aEh-container",
                            style: {
                              opacity: 0,
                              originX: 0,
                              originY: 1,
                              scale: 0.5,
                            },
                            variants: {
                              dClNCFbbb: { opacity: 1, scale: 1 },
                              k7o1gUq0q: { opacity: 1, scale: 1 },
                              oLGoFrqwT: { opacity: 1, scale: 1 },
                              s49AXmd2v: { opacity: 1, scale: 1 },
                            },
                            children: r(Mm, {
                              height: "100%",
                              id: "snYJq0aEh",
                              layoutId: "snYJq0aEh",
                              style: { width: "100%" },
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
        }),
      }),
    });
  }),
  Qm = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-3v6hH.framer-cu1vlg, .framer-3v6hH .framer-cu1vlg { display: block; }",
    ".framer-3v6hH.framer-18x6quu { cursor: pointer; height: 54px; overflow: visible; position: relative; width: 54px; }",
    ".framer-3v6hH .framer-1w1m2r0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }",
    ".framer-3v6hH .framer-hb5bxg-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-3v6hH .framer-1dnxfbi-container { bottom: 64px; flex: none; height: auto; left: 0px; pointer-events: none; position: absolute; width: 417px; z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3v6hH .framer-1w1m2r0 { gap: 0px; } .framer-3v6hH .framer-1w1m2r0 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-3v6hH .framer-1w1m2r0 > :first-child { margin-left: 0px; } .framer-3v6hH .framer-1w1m2r0 > :last-child { margin-right: 0px; } }",
    ".framer-3v6hH.framer-v-1c7cpwj .framer-1dnxfbi-container, .framer-3v6hH.framer-v-1ccgoc3 .framer-1dnxfbi-container, .framer-3v6hH.framer-v-e92lem .framer-1dnxfbi-container, .framer-3v6hH.framer-v-wf9l41 .framer-1dnxfbi-container { pointer-events: auto; }",
    ".framer-3v6hH.framer-v-1ccgoc3.framer-18x6quu, .framer-3v6hH.framer-v-kho36m.framer-18x6quu, .framer-3v6hH.framer-v-wf9l41.framer-18x6quu { cursor: unset; }",
  ],
  tr = q(Zm, Qm, "framer-3v6hH"),
  Ra = tr;
tr.displayName = "Social/Mail";
tr.defaultProps = { height: 54, width: 54 };
M(tr, {
  variant: {
    options: [
      "QkHTEsfZ8",
      "oLGoFrqwT",
      "s49AXmd2v",
      "mxi8gZhg7",
      "hMKOOSP6K",
      "VgQrGJ3F8",
      "dClNCFbbb",
      "k7o1gUq0q",
    ],
    optionTitles: [
      "Default",
      "Default_Hover",
      "Default_Click",
      "Mobile",
      "Tinted",
      "Dark",
      "Dark_Hover",
      "Dark_Click",
    ],
    title: "Variant",
    type: x.Enum,
  },
});
z(tr, [{ explicitInter: !0, fonts: [] }, ...Tm, ...jm], {
  supportsExplicitInterCodegen: !0,
});
var rr =
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  Lt = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Ym = {
    ...Lt,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  Km = {
    onClick: { type: x.EventHandler },
    onMouseEnter: { type: x.EventHandler },
    onMouseLeave: { type: x.EventHandler },
  },
  Jm = {
    type: x.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  Xr = {
    font: {
      type: x.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: x.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: e }) => !e,
    },
    fontWeight: {
      type: x.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: e }) => !e,
    },
  },
  ar = {
    af: "Afrikaans",
    sq: "Albanian",
    an: "Aragonese",
    ar: "Arabic (Standard)",
    "ar-dz": "Arabic (Algeria)",
    "ar-bh": "Arabic (Bahrain)",
    "ar-eg": "Arabic (Egypt)",
    "ar-iq": "Arabic (Iraq)",
    "ar-jo": "Arabic (Jordan)",
    "ar-kw": "Arabic (Kuwait)",
    "ar-lb": "Arabic (Lebanon)",
    "ar-ly": "Arabic (Libya)",
    "ar-ma": "Arabic (Morocco)",
    "ar-om": "Arabic (Oman)",
    "ar-qa": "Arabic (Qatar)",
    "ar-sa": "Arabic (Saudi Arabia)",
    "ar-sy": "Arabic (Syria)",
    "ar-tn": "Arabic (Tunisia)",
    "ar-ae": "Arabic (U.A.E.)",
    "ar-ye": "Arabic (Yemen)",
    hy: "Armenian",
    as: "Assamese",
    ast: "Asturian",
    az: "Azerbaijani",
    eu: "Basque",
    bg: "Bulgarian",
    be: "Belarusian",
    bn: "Bengali",
    bs: "Bosnian",
    br: "Breton",
    my: "Burmese",
    ca: "Catalan",
    ch: "Chamorro",
    ce: "Chechen",
    zh: "Chinese",
    "zh-hk": "Chinese (Hong Kong)",
    "zh-cn": "Chinese (PRC)",
    "zh-sg": "Chinese (Singapore)",
    "zh-tw": "Chinese (Taiwan)",
    cv: "Chuvash",
    co: "Corsican",
    cr: "Cree",
    hr: "Croatian",
    cs: "Czech",
    da: "Danish",
    nl: "Dutch (Standard)",
    "nl-be": "Dutch (Belgian)",
    en: "English",
    "en-au": "English (Australia)",
    "en-bz": "English (Belize)",
    "en-ca": "English (Canada)",
    "en-ie": "English (Ireland)",
    "en-jm": "English (Jamaica)",
    "en-nz": "English (New Zealand)",
    "en-ph": "English (Philippines)",
    "en-za": "English (South Africa)",
    "en-tt": "English (Trinidad & Tobago)",
    "en-gb": "English (United Kingdom)",
    "en-us": "English (United States)",
    "en-zw": "English (Zimbabwe)",
    eo: "Esperanto",
    et: "Estonian",
    fo: "Faeroese",
    fa: "Farsi",
    fj: "Fijian",
    fi: "Finnish",
    fr: "French (Standard)",
    "fr-be": "French (Belgium)",
    "fr-ca": "French (Canada)",
    "fr-fr": "French (France)",
    "fr-lu": "French (Luxembourg)",
    "fr-mc": "French (Monaco)",
    "fr-ch": "French (Switzerland)",
    fy: "Frisian",
    fur: "Friulian",
    gd: "Gaelic (Scots)",
    "gd-ie": "Gaelic (Irish)",
    gl: "Galacian",
    ka: "Georgian",
    de: "German (Standard)",
    "de-at": "German (Austria)",
    "de-de": "German (Germany)",
    "de-li": "German (Liechtenstein)",
    "de-lu": "German (Luxembourg)",
    "de-ch": "German (Switzerland)",
    el: "Greek",
    gu: "Gujurati",
    ht: "Haitian",
    he: "Hebrew",
    hi: "Hindi",
    hu: "Hungarian",
    is: "Icelandic",
    id: "Indonesian",
    iu: "Inuktitut",
    ga: "Irish",
    it: "Italian (Standard)",
    "it-ch": "Italian (Switzerland)",
    ja: "Japanese",
    kn: "Kannada",
    ks: "Kashmiri",
    kk: "Kazakh",
    km: "Khmer",
    ky: "Kirghiz",
    tlh: "Klingon",
    ko: "Korean",
    "ko-kp": "Korean (North Korea)",
    "ko-kr": "Korean (South Korea)",
    la: "Latin",
    lv: "Latvian",
    lt: "Lithuanian",
    lb: "Luxembourgish",
    mk: "FYRO Macedonian",
    ms: "Malay",
    ml: "Malayalam",
    mt: "Maltese",
    mi: "Maori",
    mr: "Marathi",
    mo: "Moldavian",
    nv: "Navajo",
    ng: "Ndonga",
    ne: "Nepali",
    no: "Norwegian",
    nb: "Norwegian (Bokmal)",
    nn: "Norwegian (Nynorsk)",
    oc: "Occitan",
    or: "Oriya",
    om: "Oromo",
    "fa-ir": "Persian/Iran",
    pl: "Polish",
    pt: "Portuguese",
    "pt-br": "Portuguese (Brazil)",
    pa: "Punjabi",
    "pa-in": "Punjabi (India)",
    "pa-pk": "Punjabi (Pakistan)",
    qu: "Quechua",
    rm: "Rhaeto-Romanic",
    ro: "Romanian",
    "ro-mo": "Romanian (Moldavia)",
    ru: "Russian",
    "ru-mo": "Russian (Moldavia)",
    sz: "Sami (Lappish)",
    sg: "Sango",
    sa: "Sanskrit",
    sc: "Sardinian",
    sd: "Sindhi",
    si: "Singhalese",
    sr: "Serbian",
    sk: "Slovak",
    sl: "Slovenian",
    so: "Somani",
    sb: "Sorbian",
    es: "Spanish",
    "es-ar": "Spanish (Argentina)",
    "es-bo": "Spanish (Bolivia)",
    "es-cl": "Spanish (Chile)",
    "es-co": "Spanish (Colombia)",
    "es-cr": "Spanish (Costa Rica)",
    "es-do": "Spanish (Dominican Republic)",
    "es-ec": "Spanish (Ecuador)",
    "es-sv": "Spanish (El Salvador)",
    "es-gt": "Spanish (Guatemala)",
    "es-hn": "Spanish (Honduras)",
    "es-mx": "Spanish (Mexico)",
    "es-ni": "Spanish (Nicaragua)",
    "es-pa": "Spanish (Panama)",
    "es-py": "Spanish (Paraguay)",
    "es-pe": "Spanish (Peru)",
    "es-pr": "Spanish (Puerto Rico)",
    "es-es": "Spanish (Spain)",
    "es-uy": "Spanish (Uruguay)",
    "es-ve": "Spanish (Venezuela)",
    sx: "Sutu",
    sw: "Swahili",
    sv: "Swedish",
    "sv-fi": "Swedish (Finland)",
    "sv-sv": "Swedish (Sweden)",
    ta: "Tamil",
    tt: "Tatar",
    te: "Teluga",
    th: "Thai",
    tig: "Tigre",
    ts: "Tsonga",
    tn: "Tswana",
    tr: "Turkish",
    tk: "Turkmen",
    uk: "Ukrainian",
    hsb: "Upper Sorbian",
    ur: "Urdu",
    ve: "Venda",
    vi: "Vietnamese",
    vo: "Volapuk",
    wa: "Walloon",
    cy: "Welsh",
    xh: "Xhosa",
    ji: "Yiddish",
    zu: "Zulu",
  };
function $m(e, t) {
  return Ko(!0, e, t);
}
function ed(e, t) {
  return Ko(!1, e, t);
}
function Ko(e, t, o = !0) {
  let a = io();
  re(() => {
    o && a === e && t();
  }, [a]);
}
var td = () => {
    if (typeof V < "u") {
      let e = V.userAgent.toLowerCase();
      return (
        (e.indexOf("safari") > -1 ||
          e.indexOf("framermobile") > -1 ||
          e.indexOf("framerx") > -1) &&
        e.indexOf("chrome") < 0
      );
    } else return !1;
  },
  rd = () => j(() => td(), []);
var od = {
  100: "Thin",
  200: "Extra-light",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "Semi-bold",
  700: "Bold",
  800: "Extra-bold",
  900: "Black",
};
function Sa(e) {
  let {
      fontFamily: t = "Inter",
      fontSize: o = 16,
      fontWeight: a = 400,
      font: n = !1,
    } = e,
    s = od[a],
    i = `"${t} ${s}", "${t}", ${rr}`,
    f = t
      ? { fontSize: o, fontWeight: a, fontFamily: i }
      : { fontSize: o, fontWeight: a },
    c = async () => {
      await ue
        .loadWebFontsFromSelectors([
          `CUSTOM;${t}`,
          `CUSTOM;${t} ${s}`,
          `GF;${t}-${s.toLowerCase()}`,
        ])
        .catch((m) => console.error(m));
    };
  return (
    re(() => {
      n && c();
    }, [n, t, a]),
    f
  );
}
function nd() {
  return j(() => pt.current() === pt.canvas, []);
}
function La(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: o,
    topLeftRadius: a,
    topRightRadius: n,
    bottomRightRadius: s,
    bottomLeftRadius: i,
  } = e;
  return j(
    () => (o ? `${a}px ${n}px ${s}px ${i}px` : `${t}px`),
    [t, o, a, n, s, i],
  );
}
var Ia = {
  borderRadius: {
    title: "Radius",
    type: x.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
function Va(e) {
  let {
    padding: t,
    paddingPerSide: o,
    paddingTop: a,
    paddingRight: n,
    paddingBottom: s,
    paddingLeft: i,
  } = e;
  return j(() => (o ? `${a}px ${n}px ${s}px ${i}px` : t), [t, o, a, n, s, i]);
}
var Ua = {
  padding: {
    type: x.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
var id =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  sd = /^https?:\/\/([^\/]+)[^\?]+\??(.+)$/,
  ld = (e) => id.test(String(e).toLowerCase()),
  fd = (e) => {
    var t;
    let [, o, a] =
      (t = e.replace("&amp;", "&").match(sd)) !== null && t !== void 0
        ? t
        : [null, null, null];
    return [o, new URLSearchParams(a)];
  },
  Da = q(
    function ({
      url: t,
      input: o,
      button: a,
      layout: n,
      style: s,
      gap: i,
      onSubmit: f,
      ...c
    }) {
      let [m, p] = ae(o.value),
        [d, y] = ae(!1),
        [b, h] = ae(!1),
        [w, u] = ae(!1),
        k = j(() => pt.current() === pt.canvas, []),
        { fontFamily: g, fontSize: v, fontWeight: C } = Sa(c),
        L = La(c),
        D = Va(c),
        _ = et((K) => (K === "" || !ld(K) ? (y(!0), !1) : !0), []),
        Z = et((K) => {
          y(!1), p(K.target.value);
        }, []),
        X = et(() => {
          event.preventDefault();
          let [K, te] = fd(t);
          !_(m) || !K || !te
            ? h(!1)
            : (te.set("MERGE0", m),
              fetch(`https://${K}/subscribe/post`, {
                method: "POST",
                mode: "no-cors",
                headers: {
                  "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
                },
                body: te.toString(),
              })
                .then((le) => {
                  u(!0), f();
                })
                .catch(() => {
                  h(!1);
                }));
        }, [t, m]),
        H = et(() => {
          h(!0);
        }, []);
      return r(l.div, {
        style: {
          ...s,
          ...Lt,
          "--framer-mailchimp-placeholder-color": o.placeholderColor,
        },
        children: w
          ? r(l.div, {
              style: {
                height: "60px",
                width: "60px",
                background: a.fill,
                color: a.color,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { duration: 0.3 },
              children: r("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                children: r("path", {
                  d: "M 2 14 L 10 22 L 26 6",
                  fill: "transparent",
                  strokeWidth: "4",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                }),
              }),
            })
          : I("form", {
              style: {
                width: "100%",
                display: "grid",
                gap: i,
                gridTemplateColumns:
                  n === "vertical" ? "1fr" : "1fr max-content",
                gridTemplateRows: n === "vertical" ? "1fr 1fr" : "1fr",
              },
              onSubmit: X,
              method: "POST",
              children: [
                r("div", {
                  style: { position: "absolute", visibility: "hidden" },
                  "aria-hidden": "true",
                  children: r("input", {
                    type: "text",
                    name: "b_1487cc549a49109c00fe60a80_93cd7be172",
                    tabIndex: -1,
                  }),
                }),
                r("input", {
                  type: "email",
                  name: "email",
                  placeholder: o.placeholder,
                  value: k ? o.value : m,
                  className: "framer-mailchimp-input",
                  onChange: Z,
                  style: {
                    ...$o,
                    padding: D,
                    borderRadius: L,
                    fontFamily: g,
                    fontWeight: C,
                    fontSize: v,
                    background: o.fill,
                    color: o.color,
                    boxShadow: `inset 0 0 0 1px ${d ? o.error : "transparent"}`,
                  },
                }),
                I("div", {
                  style: { position: "relative" },
                  children: [
                    r(l.input, {
                      type: "submit",
                      value: a.label,
                      onClick: H,
                      style: {
                        ...$o,
                        cursor: "pointer",
                        borderRadius: L,
                        padding: D,
                        fontFamily: g,
                        fontWeight: a.fontWeight,
                        fontSize: v,
                        background: a.fill,
                        color: a.color,
                        zIndex: 1,
                      },
                      transition: { type: "ease", duration: 0.3 },
                      whileHover: { opacity: 0.8 },
                    }),
                    b &&
                      r("div", {
                        style: {
                          borderRadius: L,
                          position: "absolute",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          height: "100%",
                          left: 0,
                          top: 0,
                          zIndex: 2,
                          color: a.color,
                          background: a.fill,
                        },
                        children: r(l.div, {
                          style: { height: 16, width: 16 },
                          initial: { rotate: 0 },
                          animate: { rotate: 360 },
                          transition: { duration: 2, repeat: 1 / 0 },
                          children: I("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            children: [
                              r("path", {
                                d: "M 8 0 C 3.582 0 0 3.582 0 8 C 0 12.419 3.582 16 8 16 C 12.418 16 16 12.419 16 8 C 15.999 3.582 12.418 0 8 0 Z M 8 14 C 4.687 14 2 11.314 2 8 C 2 4.687 4.687 2 8 2 C 11.314 2 14 4.687 14 8 C 14 11.314 11.314 14 8 14 Z",
                                fill: "currentColor",
                                opacity: "0.2",
                              }),
                              r("path", {
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
Da.defaultProps = {
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
M(Da, {
  url: {
    title: "URL",
    placeholder: "https://***.us6.list-manage.com/subscribe/post?u=***",
    type: x.String,
    description:
      "Create a [Mailchimp](https://mailchimp.com/) account and copy your embedded form URL. [Learn more\u2026](https://www.framer.com/sites/integrations/mailchimp/)",
  },
  layout: {
    title: "Layout",
    type: x.Enum,
    options: ["horizontal", "vertical"],
    displaySegmentedControl: !0,
  },
  input: {
    title: "Input",
    type: x.Object,
    controls: {
      placeholder: {
        title: "Placeholder",
        type: x.String,
        defaultValue: "email@framer.com",
      },
      placeholderColor: {
        title: " ",
        type: x.Color,
        defaultValue: "rgba(0, 0, 0, 0.3)",
      },
      value: { title: "Value", type: x.String },
      fill: { title: "Fill", type: x.Color, defaultValue: "#EBEBEB" },
      color: { title: "Text", type: x.Color, defaultValue: "#000" },
      error: { title: "Error", type: x.Color, defaultValue: "#EE4444" },
    },
  },
  button: {
    title: "Button",
    type: x.Object,
    controls: {
      label: { title: "Label", type: x.String, defaultValue: "Sign Up" },
      fontWeight: { ...Xr.fontWeight, defaultValue: 600 },
      fill: { title: "Fill", type: x.Color, defaultValue: "#000" },
      color: { title: "Text", type: x.Color, defaultValue: "#FFF" },
    },
  },
  ...Xr,
  fontSize: {
    title: "Font Size",
    type: x.Number,
    displayStepper: !0,
    defaultValue: 16,
  },
  ...Ua,
  ...Ia,
  gap: { title: "Gap", type: x.Number, displayStepper: !0, min: 0 },
  onSubmit: { type: x.EventHandler },
});
var $o = {
    WebkitAppearance: "none",
    width: "100%",
    lineHeight: "1.4em",
    outline: "none",
    border: "none",
  },
  Wr = Da;
var Ta = {};
Ce(Ta, { __FramerMetadata__: () => _d, default: () => nr });
var cd = Y(ka),
  md = Y(ca),
  dd = Y(Ra),
  pd = ["OBjAt4_OD", "W6y1GIkBT", "SB7EB0TcQ", "PTEm0r7OH", "f3YnFdRPF"],
  ud = "framer-vmzjN",
  hd = {
    f3YnFdRPF: "framer-v-fg5t6s",
    OBjAt4_OD: "framer-v-cijr23",
    PTEm0r7OH: "framer-v-etmhf2",
    SB7EB0TcQ: "framer-v-1s23r8w",
    W6y1GIkBT: "framer-v-jz1eyy",
  };
function Zr(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var gd = { damping: 16, delay: 0, mass: 1, stiffness: 140, type: "spring" },
  yd = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  vd = l(F),
  xd = {
    Collasped_Dark: "PTEm0r7OH",
    Collasped: "W6y1GIkBT",
    Default: "OBjAt4_OD",
    Expanded_Dark: "f3YnFdRPF",
    Expanded: "SB7EB0TcQ",
  },
  bd = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = xd[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "OBjAt4_OD",
    };
  },
  wd = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  kd = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = bd(e),
      {
        baseVariant: m,
        classNames: p,
        gestureHandlers: d,
        gestureVariant: y,
        setGestureState: b,
        setVariant: h,
        variants: w,
      } = G({
        cycleOrder: pd,
        defaultVariant: "OBjAt4_OD",
        variant: f,
        variantClassNames: hd,
      }),
      u = wd(e, w),
      { activeVariantCallback: k, delay: g } = ne(m),
      v = k(async (...K) => {
        b({ isHovered: !0 }), h("SB7EB0TcQ");
      }),
      C = k(async (...K) => {
        b({ isHovered: !1 }), h("W6y1GIkBT");
      }),
      L = k(async (...K) => {
        b({ isHovered: !0 }), h("f3YnFdRPF");
      }),
      D = k(async (...K) => {
        b({ isHovered: !1 }), h("PTEm0r7OH");
      }),
      _ = T(null),
      Z = A(),
      X = [],
      H = J();
    return r(B, {
      id: i ?? Z,
      children: r(vd, {
        animate: w,
        initial: !1,
        children: r(yd, {
          value: gd,
          children: I(l.div, {
            ...c,
            ...d,
            className: E(ud, ...X, "framer-cijr23", s, p),
            "data-framer-name": "Default",
            layoutDependency: u,
            layoutId: "OBjAt4_OD",
            ref: t ?? _,
            style: {
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              ...n,
            },
            ...Zr(
              {
                f3YnFdRPF: {
                  "data-framer-name": "Expanded_Dark",
                  "data-highlight": !0,
                  onMouseLeave: D,
                },
                PTEm0r7OH: {
                  "data-framer-name": "Collasped_Dark",
                  "data-highlight": !0,
                  onMouseEnter: L,
                },
                SB7EB0TcQ: {
                  "data-framer-name": "Expanded",
                  "data-highlight": !0,
                  onMouseLeave: C,
                },
                W6y1GIkBT: {
                  "data-framer-name": "Collasped",
                  "data-highlight": !0,
                  onMouseEnter: v,
                },
              },
              m,
              y,
            ),
            children: [
              r(Q, {
                width: "54px",
                children: r(l.div, {
                  className: "framer-49sq04-container",
                  layoutDependency: u,
                  layoutId: "mPkOUb9B0-container",
                  children: r(ka, {
                    height: "100%",
                    id: "mPkOUb9B0",
                    layoutId: "mPkOUb9B0",
                    style: { height: "100%", width: "100%" },
                    variant: "llDAhtHF4",
                    width: "100%",
                    ...Zr(
                      {
                        f3YnFdRPF: { variant: "gRpNrhHu5" },
                        PTEm0r7OH: { variant: "gRpNrhHu5" },
                      },
                      m,
                      y,
                    ),
                  }),
                }),
              }),
              r(Q, {
                width: "54px",
                children: r(l.div, {
                  className: "framer-9eyzup-container",
                  layoutDependency: u,
                  layoutId: "GOUcnVjsM-container",
                  children: r(ca, {
                    height: "100%",
                    id: "GOUcnVjsM",
                    layoutId: "GOUcnVjsM",
                    style: { height: "100%", width: "100%" },
                    variant: "YRapQNpGe",
                    width: "100%",
                    ...Zr(
                      {
                        f3YnFdRPF: { variant: "qf42jsMmk" },
                        PTEm0r7OH: { variant: "qf42jsMmk" },
                        W6y1GIkBT: { variant: "qrHxSd5Yo" },
                      },
                      m,
                      y,
                    ),
                  }),
                }),
              }),
              r(Q, {
                width: "54px",
                children: r(l.div, {
                  className: "framer-7h5zk3-container",
                  layoutDependency: u,
                  layoutId: "oBgg6yqbF-container",
                  children: r(Ra, {
                    height: "100%",
                    id: "oBgg6yqbF",
                    layoutId: "oBgg6yqbF",
                    style: { height: "100%", width: "100%" },
                    variant: "QkHTEsfZ8",
                    width: "100%",
                    ...Zr(
                      {
                        f3YnFdRPF: { variant: "VgQrGJ3F8" },
                        PTEm0r7OH: { variant: "VgQrGJ3F8" },
                        W6y1GIkBT: { variant: "hMKOOSP6K" },
                      },
                      m,
                      y,
                    ),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Cd = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-vmzjN.framer-zl7lx9, .framer-vmzjN .framer-zl7lx9 { display: block; }",
    ".framer-vmzjN.framer-cijr23 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 54px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: auto; }",
    ".framer-vmzjN .framer-49sq04-container { flex: none; height: 54px; position: relative; width: 54px; z-index: 2; }",
    ".framer-vmzjN .framer-9eyzup-container { flex: none; height: 54px; position: relative; width: 54px; z-index: 1; }",
    ".framer-vmzjN .framer-7h5zk3-container { flex: none; height: 54px; position: relative; width: 54px; z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vmzjN.framer-cijr23 { gap: 0px; } .framer-vmzjN.framer-cijr23 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-vmzjN.framer-cijr23 > :first-child { margin-left: 0px; } .framer-vmzjN.framer-cijr23 > :last-child { margin-right: 0px; } }",
    ".framer-vmzjN.framer-v-jz1eyy.framer-cijr23, .framer-vmzjN.framer-v-etmhf2.framer-cijr23 { display: block; padding: unset; width: 202px; }",
    ".framer-vmzjN.framer-v-jz1eyy .framer-49sq04-container, .framer-vmzjN.framer-v-etmhf2 .framer-49sq04-container { bottom: 0px; height: unset; left: 0px; position: absolute; top: 0px; z-index: 3; }",
    ".framer-vmzjN.framer-v-jz1eyy .framer-9eyzup-container, .framer-vmzjN.framer-v-etmhf2 .framer-9eyzup-container { bottom: 0px; height: unset; left: 30px; position: absolute; top: 0px; }",
    ".framer-vmzjN.framer-v-jz1eyy .framer-7h5zk3-container, .framer-vmzjN.framer-v-etmhf2 .framer-7h5zk3-container { bottom: 0px; height: unset; left: 60px; position: absolute; top: 0px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vmzjN.framer-v-jz1eyy.framer-cijr23 { gap: 0px; } .framer-vmzjN.framer-v-jz1eyy.framer-cijr23 > *, .framer-vmzjN.framer-v-jz1eyy.framer-cijr23 > :first-child, .framer-vmzjN.framer-v-jz1eyy.framer-cijr23 > :last-child { margin: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vmzjN.framer-v-etmhf2.framer-cijr23 { gap: 0px; } .framer-vmzjN.framer-v-etmhf2.framer-cijr23 > *, .framer-vmzjN.framer-v-etmhf2.framer-cijr23 > :first-child, .framer-vmzjN.framer-v-etmhf2.framer-cijr23 > :last-child { margin: 0px; } }",
  ],
  or = q(kd, Cd, "framer-vmzjN"),
  nr = or;
or.displayName = "Social/AdaptiveBar";
or.defaultProps = { height: 54, width: 194 };
M(or, {
  variant: {
    options: ["OBjAt4_OD", "W6y1GIkBT", "SB7EB0TcQ", "PTEm0r7OH", "f3YnFdRPF"],
    optionTitles: [
      "Default",
      "Collasped",
      "Expanded",
      "Collasped_Dark",
      "Expanded_Dark",
    ],
    title: "Variant",
    type: x.Enum,
  },
});
z(or, [{ explicitInter: !0, fonts: [] }, ...cd, ...md, ...dd], {
  supportsExplicitInterCodegen: !0,
});
var _d = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Framerew_6tk68D",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","fixed"]},"W6y1GIkBT":{"layout":["fixed","fixed"]},"SB7EB0TcQ":{"layout":["auto","fixed"]},"PTEm0r7OH":{"layout":["fixed","fixed"]},"f3YnFdRPF":{"layout":["auto","fixed"]}}}',
        framerComponentViewportWidth: "true",
        framerContractVersion: "1",
        framerIntrinsicWidth: "194",
        framerIntrinsicHeight: "54",
        framerImmutableVariables: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var Na = {};
Ce(Na, { __FramerMetadata__: () => mp, default: () => It });
function Te(e) {
  let {
      outputType: t,
      fontFamily: o,
      fontSize: a,
      fontWeight: n,
      localeType: s,
      customLocale: i,
      timeFormat: f,
      showYear: c,
      showWeekday: m,
      showHours: p,
      showMinutes: d,
      showSeconds: y,
      monthFormat: b,
      color: h,
      font: w,
      alignment: u,
    } = e,
    [k, g] = ae(`${Math.random()}`),
    v = T(),
    C = j(() => {
      let L = s === "custom" ? [i] : [],
        D;
      switch (t) {
        case "date":
          D = {
            weekday: m ? "long" : void 0,
            day: "numeric",
            month: b,
            year: c ? "numeric" : void 0,
          };
          break;
        case "time":
          D = {
            hour: p ? "numeric" : void 0,
            minute: d ? "numeric" : void 0,
            second: y && d ? "numeric" : void 0,
            hour12: f === "12h",
          };
          break;
        default:
          console.error(`Unsupported outputType: ${t}`);
          break;
      }
      return new Intl.DateTimeFormat(L, D).format(new Date());
    }, [t, s, i, f, c, m, p, d, y, b, k]);
  return (
    re(() => {
      if (t === "time") {
        let L = setInterval(
          () => g(`${Math.random()}`),
          (60 - new Date().getSeconds()) * 1e3,
        );
        return (
          (v.current = L),
          () => {
            if (L) return clearInterval(L);
          }
        );
      }
    }, [v.current, t]),
    r("div", {
      style: {
        ...Lt,
        color: h,
        fontFamily: rr,
        fontWeight: 500,
        fontSize: 16,
        ...w,
      },
      children: r("span", { style: { width: "100%" }, children: C }),
    })
  );
}
Te.defaultProps = {
  height: 20,
  width: 140,
  outputType: "time",
  localeType: "auto",
  customLocale: "en-US",
  color: "#999",
  timeFormat: "24h",
  showYear: !0,
  showWeekday: !0,
  showHours: !0,
  showMinutes: !0,
  showSeconds: !1,
  monthFormat: "long",
  alignment: "center",
};
Te.displayName = "Time & Date";
M(Te, {
  outputType: {
    title: "Type",
    type: x.Enum,
    displaySegmentedControl: !0,
    options: ["date", "time"],
    optionTitles: ["Date", "Time"],
    defaultValue: Te.defaultProps.outputType,
  },
  showWeekday: {
    title: "Weekday",
    type: x.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Te.defaultProps.showWeekday,
    hidden: (e) => e.outputType !== "date",
  },
  monthFormat: {
    title: "Month",
    type: x.Enum,
    options: ["short", "long", "numeric"],
    optionTitles: ["Short", "Long", "Numeric"],
    defaultValue: Te.defaultProps.monthFormat,
    hidden: (e) => e.outputType !== "date",
  },
  showYear: {
    title: "Year",
    type: x.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Te.defaultProps.showYear,
    hidden: (e) => e.outputType !== "date",
  },
  timeFormat: {
    title: "Format",
    type: x.Enum,
    options: ["12h", "24h"],
    optionTitles: ["12h", "24h"],
    displaySegmentedControl: !0,
    defaultValue: Te.defaultProps.timeFormat,
    hidden: (e) => e.outputType !== "time",
  },
  showHours: {
    title: "Hours",
    type: x.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Te.defaultProps.showHours,
    hidden: (e) => e.outputType !== "time",
  },
  showMinutes: {
    title: "Minutes",
    type: x.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Te.defaultProps.showMinutes,
    hidden: (e) => e.outputType !== "time",
  },
  showSeconds: {
    title: "Seconds",
    type: x.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Te.defaultProps.showSeconds,
    hidden: (e) => e.outputType !== "time" || !e.showMinutes,
  },
  localeType: {
    title: "Locale",
    type: x.Enum,
    displaySegmentedControl: !0,
    options: ["custom", "auto"],
    optionTitles: ["Custom", "Auto"],
    defaultValue: Te.defaultProps.localeType,
  },
  customLocale: {
    title: " ",
    type: x.Enum,
    options: Object.keys(ar).sort(),
    optionTitles: Object.keys(ar)
      .sort()
      .map((e) => ar[e]),
    hidden: (e) => e.localeType !== "custom",
    defaultValue: "en",
  },
  font: { type: x.Font, controls: "extended" },
  color: { type: x.Color, defaultValue: Te.defaultProps.color },
});
var Fd = Y(Te),
  Rd = Re($),
  Sd = Fe($),
  Ld = [
    "sMkGer26K",
    "HA6UEnA7B",
    "QNjUH3XFk",
    "jFBqLEFyq",
    "GNYLhonpo",
    "kgj0tpTsU",
    "UsOW_dk_D",
    "w625aUNa9",
  ],
  Id = "framer-FcFnE",
  Vd = {
    GNYLhonpo: "framer-v-1lom2uu",
    HA6UEnA7B: "framer-v-18bi0ba",
    jFBqLEFyq: "framer-v-1bjz902",
    kgj0tpTsU: "framer-v-1wq57wq",
    QNjUH3XFk: "framer-v-kxyvev",
    sMkGer26K: "framer-v-1brt7yu",
    UsOW_dk_D: "framer-v-1bnasks",
    w625aUNa9: "framer-v-b8ewg7",
  };
function it(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Ud = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Dd = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Td = l(F),
  Ed = {
    "Variant 7": "UsOW_dk_D",
    Framer_Dark: "kgj0tpTsU",
    Framer_Light: "jFBqLEFyq",
    Framer: "HA6UEnA7B",
    FramerOnly: "w625aUNa9",
    Time_Dark: "GNYLhonpo",
    Time_Light: "QNjUH3XFk",
    Time: "sMkGer26K",
  },
  jd = ({ height: e, id: t, title: o, width: a, ...n }) => {
    var s, i, f;
    return {
      ...n,
      OZYV48tII: (s = o ?? n.OZYV48tII) !== null && s !== void 0 ? s : "GMT+8",
      variant:
        (f = (i = Ed[n.variant]) !== null && i !== void 0 ? i : n.variant) !==
          null && f !== void 0
          ? f
          : "sMkGer26K",
    };
  },
  Md = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Nd = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        OZYV48tII: c,
        ...m
      } = jd(e),
      {
        baseVariant: p,
        classNames: d,
        clearLoadingGesture: y,
        gestureHandlers: b,
        gestureVariant: h,
        isLoading: w,
        setGestureState: u,
        setVariant: k,
        variants: g,
      } = G({
        cycleOrder: Ld,
        defaultVariant: "sMkGer26K",
        variant: f,
        variantClassNames: Vd,
      }),
      v = Md(e, g),
      { activeVariantCallback: C, delay: L } = ne(p),
      D = C(async (...we) => {
        u({ isHovered: !1 }), k("sMkGer26K");
      }),
      _ = C(async (...we) => {
        k("HA6UEnA7B");
      }),
      Z = C(async (...we) => {
        k("jFBqLEFyq");
      }),
      X = C(async (...we) => {
        k("kgj0tpTsU");
      }),
      H = C(async (...we) => {
        k("QNjUH3XFk");
      }),
      K = C(async (...we) => {
        k("GNYLhonpo");
      }),
      te = T(null),
      le = () => p !== "w625aUNa9",
      ce = A(),
      ge = [pe],
      ye = J();
    return r(B, {
      id: i ?? ce,
      children: r(Td, {
        animate: g,
        initial: !1,
        children: r(Dd, {
          value: Ud,
          children: r(Ye, {
            href: "https://www.framer.com?via=jayzhushi",
            ...it({ HA6UEnA7B: { openInNewTab: !0 } }, p, h),
            children: I(l.a, {
              ...m,
              ...b,
              className: `${E(Id, ...ge, "framer-1brt7yu", s, d)} framer-mk1gl5`,
              "data-framer-name": "Time",
              layoutDependency: v,
              layoutId: "sMkGer26K",
              ref: t ?? te,
              style: {
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                ...n,
              },
              ...it(
                {
                  GNYLhonpo: { "data-framer-name": "Time_Dark" },
                  HA6UEnA7B: {
                    "data-framer-name": "Framer",
                    "data-highlight": !0,
                    onMouseLeave: D,
                  },
                  jFBqLEFyq: { "data-framer-name": "Framer_Light" },
                  kgj0tpTsU: { "data-framer-name": "Framer_Dark" },
                  QNjUH3XFk: { "data-framer-name": "Time_Light" },
                  UsOW_dk_D: { "data-framer-name": "Variant 7" },
                  w625aUNa9: { "data-framer-name": "FramerOnly" },
                },
                p,
                h,
              ),
              children: [
                le() &&
                  I(l.div, {
                    className: "framer-drxj91",
                    "data-highlight": !0,
                    layoutDependency: v,
                    layoutId: "ZGXPp9km3",
                    onMouseEnter: _,
                    ...it(
                      {
                        GNYLhonpo: { onMouseEnter: X },
                        jFBqLEFyq: { onMouseEnter: Z },
                        kgj0tpTsU: { onMouseEnter: X },
                        QNjUH3XFk: { onMouseEnter: Z },
                      },
                      p,
                      h,
                    ),
                    children: [
                      r($, {
                        __fromCanvasComponent: !0,
                        children: r(F, {
                          children: r(l.p, {
                            style: {
                              "--font-selector":
                                "RlM7Q2FiaW5ldCBHcm90ZXNrLW1lZGl1bQ==",
                              "--framer-font-family":
                                '"Cabinet Grotesk", sans-serif',
                              "--framer-font-size": "19px",
                              "--framer-font-weight": "500",
                              "--framer-line-height": "1em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)))",
                            },
                            children: "GMT+8",
                          }),
                        }),
                        className: "framer-1mp5c36",
                        fonts: ["FS;Cabinet Grotesk-medium"],
                        layoutDependency: v,
                        layoutId: "spvG5gaJO",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: c,
                        variants: {
                          GNYLhonpo: {
                            "--extracted-r6o4lv": "rgba(0, 0, 0, 0.5)",
                          },
                          jFBqLEFyq: {
                            "--extracted-r6o4lv": "rgba(255, 255, 255, 0.5)",
                          },
                          kgj0tpTsU: {
                            "--extracted-r6o4lv": "rgba(0, 0, 0, 0.5)",
                          },
                          QNjUH3XFk: {
                            "--extracted-r6o4lv": "rgba(255, 255, 255, 0.5)",
                          },
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                        ...it(
                          {
                            GNYLhonpo: {
                              children: r(F, {
                                children: r(l.p, {
                                  style: {
                                    "--font-selector":
                                      "RlM7Q2FiaW5ldCBHcm90ZXNrLW1lZGl1bQ==",
                                    "--framer-font-family":
                                      '"Cabinet Grotesk", sans-serif',
                                    "--framer-font-size": "19px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "1em",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.5))",
                                  },
                                  children: "GMT+8",
                                }),
                              }),
                            },
                            jFBqLEFyq: {
                              children: r(F, {
                                children: r(l.p, {
                                  style: {
                                    "--font-selector":
                                      "RlM7Q2FiaW5ldCBHcm90ZXNrLW1lZGl1bQ==",
                                    "--framer-font-family":
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    "--framer-font-size": "19px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "1em",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.5))",
                                  },
                                  children: "GMT+8",
                                }),
                              }),
                            },
                            kgj0tpTsU: {
                              children: r(F, {
                                children: r(l.p, {
                                  style: {
                                    "--font-selector":
                                      "RlM7Q2FiaW5ldCBHcm90ZXNrLW1lZGl1bQ==",
                                    "--framer-font-family":
                                      '"Cabinet Grotesk", sans-serif',
                                    "--framer-font-size": "19px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "1em",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.5))",
                                  },
                                  children: "GMT+8",
                                }),
                              }),
                            },
                            QNjUH3XFk: {
                              children: r(F, {
                                children: r(l.p, {
                                  style: {
                                    "--font-selector":
                                      "RlM7Q2FiaW5ldCBHcm90ZXNrLW1lZGl1bQ==",
                                    "--framer-font-family":
                                      '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                                    "--framer-font-size": "19px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "1em",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.5))",
                                  },
                                  children: "GMT+8",
                                }),
                              }),
                            },
                          },
                          p,
                          h,
                        ),
                      }),
                      r(Q, {
                        children: r(l.div, {
                          className: "framer-1x3gcao-container",
                          layoutDependency: v,
                          layoutId: "kFh6EsGa_-container",
                          children: r(Te, {
                            color:
                              "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                            customLocale: "zh-hk",
                            font: {
                              fontFamily:
                                '"Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif',
                              fontSize: "19px",
                              fontStyle: "normal",
                              fontWeight: 500,
                              letterSpacing: "0em",
                              lineHeight: "1em",
                            },
                            height: "100%",
                            id: "kFh6EsGa_",
                            layoutId: "kFh6EsGa_",
                            localeType: "custom",
                            monthFormat: "long",
                            outputType: "time",
                            showHours: !0,
                            showMinutes: !0,
                            showSeconds: !1,
                            showWeekday: !0,
                            showYear: !0,
                            style: { height: "100%" },
                            timeFormat: "24h",
                            width: "100%",
                            ...it(
                              {
                                GNYLhonpo: { color: "rgb(0, 0, 0)" },
                                jFBqLEFyq: { color: "rgb(255, 255, 255)" },
                                kgj0tpTsU: { color: "rgb(0, 0, 0)" },
                                QNjUH3XFk: { color: "rgb(255, 255, 255)" },
                              },
                              p,
                              h,
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                I(l.div, {
                  className: "framer-16oq31z",
                  layoutDependency: v,
                  layoutId: "ugviWVBSt",
                  style: {
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                  },
                  ...it(
                    {
                      GNYLhonpo: { "data-highlight": !0, onMouseLeave: K },
                      jFBqLEFyq: { "data-highlight": !0, onMouseLeave: H },
                      kgj0tpTsU: { "data-highlight": !0, onMouseLeave: K },
                      QNjUH3XFk: { "data-highlight": !0, onMouseLeave: H },
                    },
                    p,
                    h,
                  ),
                  children: [
                    r(ee, {
                      className: "framer-utttmh",
                      "data-framer-name": "framer",
                      layout: "position",
                      layoutDependency: v,
                      layoutId: "pwb5kmxFw",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 7 L 16 13 L 4 13 L 4 7 L 10 7 L 4 1 L 16 1 L 16 7 Z M 10 19 L 4 13 L 10 13 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                      svgContentId: 9009529556,
                      withExternalLayout: !0,
                      ...it(
                        {
                          GNYLhonpo: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 7 L 16 13 L 4 13 L 4 7 L 10 7 L 4 1 L 16 1 L 16 7 Z M 10 19 L 4 13 L 10 13 Z" fill="rgb(0, 0, 0)"></path></svg>',
                            svgContentId: 9162718972,
                          },
                          jFBqLEFyq: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 7 L 16 13 L 4 13 L 4 7 L 10 7 L 4 1 L 16 1 L 16 7 Z M 10 19 L 4 13 L 10 13 Z" fill="rgb(255, 255, 255)"></path></svg>',
                            svgContentId: 9656486514,
                          },
                          kgj0tpTsU: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 7 L 16 13 L 4 13 L 4 7 L 10 7 L 4 1 L 16 1 L 16 7 Z M 10 19 L 4 13 L 10 13 Z" fill="rgb(0, 0, 0)"></path></svg>',
                            svgContentId: 9162718972,
                          },
                          QNjUH3XFk: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 7 L 16 13 L 4 13 L 4 7 L 10 7 L 4 1 L 16 1 L 16 7 Z M 10 19 L 4 13 L 10 13 Z" fill="rgb(255, 255, 255)"></path></svg>',
                            svgContentId: 9656486514,
                          },
                        },
                        p,
                        h,
                      ),
                    }),
                    r(Rd, {
                      __fromCanvasComponent: !0,
                      children: r(F, {
                        children: r(l.p, {
                          className: "framer-styles-preset-9jlebu",
                          "data-styles-preset": "sSyE5_N0_",
                          children: "\u4F7F\u7528 Framer \u521B\u5EFA",
                        }),
                      }),
                      className: "framer-cc8i5u",
                      fonts: ["Inter"],
                      layoutDependency: v,
                      layoutId: "nXvjNl9qR",
                      style: {
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      variants: {
                        GNYLhonpo: { "--extracted-r6o4lv": "rgb(0, 0, 0)" },
                        jFBqLEFyq: {
                          "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        },
                        kgj0tpTsU: { "--extracted-r6o4lv": "rgb(0, 0, 0)" },
                        QNjUH3XFk: {
                          "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        },
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                      ...it(
                        {
                          GNYLhonpo: {
                            children: r(F, {
                              children: r(l.p, {
                                className: "framer-styles-preset-9jlebu",
                                "data-styles-preset": "sSyE5_N0_",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(0, 0, 0))",
                                },
                                children: "\u4F7F\u7528 Framer \u521B\u5EFA",
                              }),
                            }),
                          },
                          jFBqLEFyq: {
                            children: r(F, {
                              children: r(l.p, {
                                className: "framer-styles-preset-9jlebu",
                                "data-styles-preset": "sSyE5_N0_",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: "\u4F7F\u7528 Framer \u521B\u5EFA",
                              }),
                            }),
                          },
                          kgj0tpTsU: {
                            children: r(F, {
                              children: r(l.p, {
                                className: "framer-styles-preset-9jlebu",
                                "data-styles-preset": "sSyE5_N0_",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(0, 0, 0))",
                                },
                                children: "\u4F7F\u7528 Framer \u521B\u5EFA",
                              }),
                            }),
                          },
                          QNjUH3XFk: {
                            children: r(F, {
                              children: r(l.p, {
                                className: "framer-styles-preset-9jlebu",
                                "data-styles-preset": "sSyE5_N0_",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: "\u4F7F\u7528 Framer \u521B\u5EFA",
                              }),
                            }),
                          },
                        },
                        p,
                        h,
                      ),
                    }),
                    r(Sd, {
                      __fromCanvasComponent: !0,
                      children: r(F, {
                        children: r(l.p, {
                          className: "framer-styles-preset-9jlebu",
                          "data-styles-preset": "sSyE5_N0_",
                          children: "Made in Framer",
                        }),
                      }),
                      className: "framer-y1pl5p",
                      fonts: ["Inter"],
                      layoutDependency: v,
                      layoutId: "j5XDl70I2",
                      style: {
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Bd = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-FcFnE.framer-mk1gl5, .framer-FcFnE .framer-mk1gl5 { display: block; }",
    ".framer-FcFnE.framer-1brt7yu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 150px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-FcFnE .framer-drxj91 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 24px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 150px; }",
    ".framer-FcFnE .framer-1mp5c36 { flex: none; height: 18px; position: relative; white-space: pre; width: auto; }",
    ".framer-FcFnE .framer-1x3gcao-container { flex: none; height: 19px; position: relative; width: auto; }",
    ".framer-FcFnE .framer-16oq31z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 24px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 150px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-FcFnE .framer-utttmh { flex: none; height: 20px; position: relative; width: 20px; }",
    ".framer-FcFnE .framer-cc8i5u, .framer-FcFnE .framer-y1pl5p { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-FcFnE.framer-1brt7yu, .framer-FcFnE .framer-drxj91, .framer-FcFnE .framer-16oq31z { gap: 0px; } .framer-FcFnE.framer-1brt7yu > *, .framer-FcFnE .framer-drxj91 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-FcFnE.framer-1brt7yu > :first-child, .framer-FcFnE .framer-drxj91 > :first-child, .framer-FcFnE .framer-16oq31z > :first-child { margin-left: 0px; } .framer-FcFnE.framer-1brt7yu > :last-child, .framer-FcFnE .framer-drxj91 > :last-child, .framer-FcFnE .framer-16oq31z > :last-child { margin-right: 0px; } .framer-FcFnE .framer-16oq31z > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } }",
    ".framer-FcFnE.framer-v-18bi0ba.framer-1brt7yu, .framer-FcFnE.framer-v-1bjz902.framer-1brt7yu, .framer-FcFnE.framer-v-1wq57wq.framer-1brt7yu { justify-content: flex-end; }",
    ...de,
  ],
  ir = q(Nd, Bd, "framer-FcFnE"),
  Ea = ir;
ir.displayName = "Footer/Time";
ir.defaultProps = { height: 24, width: 150 };
M(ir, {
  variant: {
    options: [
      "sMkGer26K",
      "HA6UEnA7B",
      "QNjUH3XFk",
      "jFBqLEFyq",
      "GNYLhonpo",
      "kgj0tpTsU",
      "UsOW_dk_D",
      "w625aUNa9",
    ],
    optionTitles: [
      "Time",
      "Framer",
      "Time_Light",
      "Framer_Light",
      "Time_Dark",
      "Framer_Dark",
      "Variant 7",
      "FramerOnly",
    ],
    title: "Variant",
    type: x.Enum,
  },
  OZYV48tII: {
    defaultValue: "GMT+8",
    displayTextArea: !1,
    title: "Title",
    type: x.String,
  },
});
z(
  ir,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Cabinet Grotesk",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CKQBK2QBTCDREE7L3MXZ3PPW7LDNJCWU/OTOY7FQFSFOJVZKJWKO2EHUJLOGBDN4Q/4CO2ETY7NITKLUDKMYJ75RHJSPHOJ7XT.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...Fd,
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Hd = { upDIhu7BG: { hover: !0 } },
  Pd = ["upDIhu7BG", "oMHgKwzV9", "yRnVIYH9g"];
var Ad = {
  oMHgKwzV9: "framer-v-mpap7o",
  upDIhu7BG: "framer-v-10nmmqi",
  yRnVIYH9g: "framer-v-nnobyn",
};
function Qr(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Od = {
  default: { damping: 28, delay: 0, mass: 1, stiffness: 170, type: "spring" },
};
var Gd = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  zd = { "Variant 1": "upDIhu7BG", Dark: "yRnVIYH9g", Light: "oMHgKwzV9" },
  Xd = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = zd[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "upDIhu7BG",
    };
  },
  Wd = (e, t) => t.join("-") + e.layoutDependency,
  Zd = N(function (e, t) {
    let { activeLocale: o } = O(),
      { style: a, className: n, layoutId: s, variant: i, ...f } = Xd(e),
      {
        baseVariant: c,
        classNames: m,
        gestureVariant: p,
        setGestureState: d,
        setVariant: y,
        transition: b,
        variants: h,
      } = G({
        cycleOrder: Pd,
        defaultVariant: "upDIhu7BG",
        enabledGestures: Hd,
        transitions: Od,
        variant: i,
        variantClassNames: Ad,
      }),
      w = Wd(e, h),
      u = T(null),
      k = A(),
      g = [];
    return r(B, {
      id: s ?? k,
      children: r(l.div, {
        initial: i,
        animate: h,
        onHoverStart: () => d({ isHovered: !0 }),
        onHoverEnd: () => d({ isHovered: !1 }),
        onTapStart: () => d({ isPressed: !0 }),
        onTap: () => d({ isPressed: !1 }),
        onTapCancel: () => d({ isPressed: !1 }),
        className: E("framer-vXxWU", ...g, m),
        style: { display: "contents" },
        children: r(Gd, {
          value: b,
          children: I(l.div, {
            ...f,
            className: E("framer-10nmmqi", n),
            "data-framer-name": "Variant 1",
            layoutDependency: w,
            layoutId: "upDIhu7BG",
            ref: t ?? u,
            style: { ...a },
            ...Qr(
              {
                "upDIhu7BG-hover": { "data-framer-name": void 0 },
                oMHgKwzV9: { "data-framer-name": "Light" },
                yRnVIYH9g: { "data-framer-name": "Dark" },
              },
              c,
              p,
            ),
            children: [
              I(l.div, {
                className: "framer-v6gw1h",
                layoutDependency: w,
                layoutId: "ODknWPrRG",
                children: [
                  r(ee, {
                    className: "framer-140izyf",
                    "data-framer-name": "arrow_up_03_round",
                    layout: "position",
                    layoutDependency: w,
                    layoutId: "Gx9slAmCH",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 17"><path d="M 12 3 L 12 15 M 16 7 C 16 7 13.054 3 12 3 C 10.946 3 8 7 8 7" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 2595457849,
                    withExternalLayout: !0,
                    ...Qr(
                      {
                        oMHgKwzV9: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 17"><path d="M 12 3 L 12 15 M 16 7 C 16 7 13.054 3 12 3 C 10.946 3 8 7 8 7" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                          svgContentId: 1007789671,
                        },
                        yRnVIYH9g: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 17"><path d="M 12 3 L 12 15 M 16 7 C 16 7 13.054 3 12 3 C 10.946 3 8 7 8 7" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                          svgContentId: 2790558096,
                        },
                      },
                      c,
                      p,
                    ),
                  }),
                  r(ee, {
                    className: "framer-6iwiww",
                    "data-framer-name": "arrow_up_03_round",
                    layout: "position",
                    layoutDependency: w,
                    layoutId: "X6mSUKFLZ",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 17"><path d="M 12 3 L 12 15 M 16 7 C 16 7 13.054 3 12 3 C 10.946 3 8 7 8 7" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 2595457849,
                    withExternalLayout: !0,
                    ...Qr(
                      {
                        oMHgKwzV9: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 17"><path d="M 12 3 L 12 15 M 16 7 C 16 7 13.054 3 12 3 C 10.946 3 8 7 8 7" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                          svgContentId: 1007789671,
                        },
                        yRnVIYH9g: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 17"><path d="M 12 3 L 12 15 M 16 7 C 16 7 13.054 3 12 3 C 10.946 3 8 7 8 7" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                          svgContentId: 2790558096,
                        },
                      },
                      c,
                      p,
                    ),
                  }),
                ],
              }),
              r(ee, {
                className: "framer-1j2aw27",
                "data-framer-name": "arrow_up_03_round",
                layout: "position",
                layoutDependency: w,
                layoutId: "MeX_DWs9A",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 7"><path d="M 18 4 L 6 4" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                svgContentId: 4078173666,
                withExternalLayout: !0,
                ...Qr(
                  {
                    oMHgKwzV9: {
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 7"><path d="M 18 4 L 6 4" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                      svgContentId: 3462358616,
                    },
                    yRnVIYH9g: {
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 7"><path d="M 18 4 L 6 4" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                      svgContentId: 3833274875,
                    },
                  },
                  c,
                  p,
                ),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Qd = [
    '.framer-vXxWU [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-vXxWU .framer-jlbswt { display: block; }",
    ".framer-vXxWU .framer-10nmmqi { cursor: pointer; height: 42px; position: relative; width: 42px; }",
    ".framer-vXxWU .framer-v6gw1h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 17px; justify-content: flex-start; left: calc(50.00000000000002% - 24px / 2); overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: calc(52.38095238095241% - 17px / 2); width: 24px; }",
    ".framer-vXxWU .framer-140izyf, .framer-vXxWU .framer-6iwiww { flex: none; height: 17px; position: relative; width: 24px; }",
    ".framer-vXxWU .framer-1j2aw27 { flex: none; height: 7px; left: calc(50.00000000000002% - 24px / 2); position: absolute; top: 9px; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vXxWU .framer-v6gw1h { gap: 0px; } .framer-vXxWU .framer-v6gw1h > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-vXxWU .framer-v6gw1h > :first-child { margin-top: 0px; } .framer-vXxWU .framer-v6gw1h > :last-child { margin-bottom: 0px; } }",
    ".framer-vXxWU.framer-v-mpap7o .framer-10nmmqi, .framer-vXxWU.framer-v-nnobyn .framer-10nmmqi { aspect-ratio: 1 / 1; cursor: unset; height: var(--framer-aspect-ratio-supported, 42px); }",
    ".framer-vXxWU.framer-v-10nmmqi.hover .framer-10nmmqi { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 42px); }",
    ".framer-vXxWU.framer-v-10nmmqi.hover .framer-v6gw1h { justify-content: flex-end; }",
  ],
  sr = q(Zd, Qd, "framer-vXxWU"),
  ja = sr;
sr.displayName = "Button/ArrowTop";
sr.defaultProps = { height: 42, width: 42 };
M(sr, {
  variant: {
    options: ["upDIhu7BG", "oMHgKwzV9", "yRnVIYH9g"],
    optionTitles: ["Variant 1", "Light", "Dark"],
    title: "Variant",
    type: x.Enum,
  },
});
z(sr, []);
var Yd = Y(Ea),
  Kd = _o(l.div),
  Jd = Y(ja),
  $d = Co(l.div),
  ep = ["CBnNT_cVM", "Vt63b1HZL", "jdtc6IfdH", "fpVehunuq", "CeQWXFzpK"],
  tp = "framer-Ddk49",
  rp = {
    CBnNT_cVM: "framer-v-mf77p8",
    CeQWXFzpK: "framer-v-1moem3h",
    fpVehunuq: "framer-v-wdllqb",
    jdtc6IfdH: "framer-v-1xgjlox",
    Vt63b1HZL: "framer-v-sfn81s",
  };
function Ma(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var ap = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  op = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  np = l(F),
  ip = {
    Button: "Vt63b1HZL",
    Default: "CBnNT_cVM",
    Time_Dark: "CeQWXFzpK",
    Time_Light: "fpVehunuq",
    Time: "jdtc6IfdH",
  },
  sp = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = ip[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "CBnNT_cVM",
    };
  },
  lp = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  fp = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = sp(e),
      {
        baseVariant: m,
        classNames: p,
        gestureHandlers: d,
        gestureVariant: y,
        setGestureState: b,
        setVariant: h,
        variants: w,
      } = G({
        cycleOrder: ep,
        defaultVariant: "CBnNT_cVM",
        variant: f,
        variantClassNames: rp,
      }),
      u = lp(e, w),
      k = T(null),
      g = A(),
      v = [],
      C = J();
    return r(B, {
      id: i ?? g,
      children: r(np, {
        animate: w,
        initial: !1,
        children: r(op, {
          value: ap,
          children: I(l.div, {
            ...c,
            ...d,
            className: E(tp, ...v, "framer-mf77p8", s, p),
            "data-framer-name": "Default",
            layoutDependency: u,
            layoutId: "CBnNT_cVM",
            ref: t ?? k,
            style: { ...n },
            ...Ma(
              {
                CeQWXFzpK: { "data-framer-name": "Time_Dark" },
                fpVehunuq: { "data-framer-name": "Time_Light" },
                jdtc6IfdH: { "data-framer-name": "Time" },
                Vt63b1HZL: { "data-framer-name": "Button" },
              },
              m,
              y,
            ),
            children: [
              r(Kd, {
                className: "framer-1aftm3b",
                layoutDependency: u,
                layoutId: "xDWmNoTbi",
                children: r(Q, {
                  children: r(l.div, {
                    className: "framer-1sug4n0-container",
                    layoutDependency: u,
                    layoutId: "HEpYEOG3p-container",
                    children: r(Ea, {
                      height: "100%",
                      id: "HEpYEOG3p",
                      layoutId: "HEpYEOG3p",
                      OZYV48tII: "GMT+8",
                      variant: "HA6UEnA7B",
                      width: "100%",
                      ...Ma(
                        {
                          CeQWXFzpK: { variant: "GNYLhonpo" },
                          fpVehunuq: { variant: "QNjUH3XFk" },
                        },
                        m,
                        y,
                      ),
                    }),
                  }),
                }),
              }),
              r($d, {
                className: "framer-sg0zfc",
                layoutDependency: u,
                layoutId: "BIKQfJM_6",
                children: r(Q, {
                  children: r(l.div, {
                    className: "framer-1v4hmjr-container",
                    layoutDependency: u,
                    layoutId: "wFZ4CE5CM-container",
                    children: r(ja, {
                      height: "100%",
                      id: "wFZ4CE5CM",
                      layoutId: "wFZ4CE5CM",
                      style: { height: "100%", width: "100%" },
                      variant: "upDIhu7BG",
                      width: "100%",
                      ...Ma(
                        {
                          CeQWXFzpK: { variant: "yRnVIYH9g" },
                          fpVehunuq: { variant: "oMHgKwzV9" },
                        },
                        m,
                        y,
                      ),
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  cp = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Ddk49.framer-1clsju4, .framer-Ddk49 .framer-1clsju4 { display: block; }",
    ".framer-Ddk49.framer-mf77p8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 150px; }",
    ".framer-Ddk49 .framer-1aftm3b, .framer-Ddk49 .framer-sg0zfc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Ddk49 .framer-1sug4n0-container { flex: none; height: auto; position: relative; width: auto; z-index: 0; }",
    ".framer-Ddk49 .framer-1v4hmjr-container { flex: none; height: 42px; position: relative; width: 42px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ddk49.framer-mf77p8, .framer-Ddk49 .framer-1aftm3b, .framer-Ddk49 .framer-sg0zfc { gap: 0px; } .framer-Ddk49.framer-mf77p8 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Ddk49.framer-mf77p8 > :first-child, .framer-Ddk49 .framer-1aftm3b > :first-child, .framer-Ddk49 .framer-sg0zfc > :first-child { margin-left: 0px; } .framer-Ddk49.framer-mf77p8 > :last-child, .framer-Ddk49 .framer-1aftm3b > :last-child, .framer-Ddk49 .framer-sg0zfc > :last-child { margin-right: 0px; } .framer-Ddk49 .framer-1aftm3b > *, .framer-Ddk49 .framer-sg0zfc > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-Ddk49.framer-v-sfn81s.framer-mf77p8, .framer-Ddk49.framer-v-1xgjlox.framer-mf77p8, .framer-Ddk49.framer-v-wdllqb.framer-mf77p8, .framer-Ddk49.framer-v-1moem3h.framer-mf77p8 { width: min-content; }",
  ],
  lr = q(fp, cp, "framer-Ddk49"),
  It = lr;
lr.displayName = "Home/FooterCorner";
lr.defaultProps = { height: 42, width: 150 };
M(lr, {
  variant: {
    options: ["CBnNT_cVM", "Vt63b1HZL", "jdtc6IfdH", "fpVehunuq", "CeQWXFzpK"],
    optionTitles: ["Default", "Button", "Time", "Time_Light", "Time_Dark"],
    title: "Variant",
    type: x.Enum,
  },
});
z(lr, [{ explicitInter: !0, fonts: [] }, ...Yd, ...Jd], {
  supportsExplicitInterCodegen: !0,
});
var mp = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "Framert38tnYcdR",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "150",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Vt63b1HZL":{"layout":["auto","auto"]},"jdtc6IfdH":{"layout":["auto","auto"]},"fpVehunuq":{"layout":["auto","auto"]},"CeQWXFzpK":{"layout":["auto","auto"]}}}',
        framerContractVersion: "1",
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "42",
        framerComponentViewportWidth: "true",
        framerDisplayContentsDiv: "false",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var dp = Y(nr),
  pp = Ve(mo(nr), Ta),
  up = Y(It),
  hp = Ve(po(It), Na),
  gp = Y(De),
  st = Ve(_e(De), fa),
  yp = Y(Wr),
  en = Ee(l.div),
  vp = Y(Tt),
  lt = no(It),
  xp = [
    "v2CwCl_6S",
    "Qjx7lyGdh",
    "pmZTzPtc9",
    "pC552Hdl2",
    "e6RicA5Ai",
    "gNhJe7Fbj",
    "tdBhGfIRW",
    "L0sdqDSt8",
  ],
  Ba = "framer-8RpJg",
  bp = {
    e6RicA5Ai: "framer-v-vhu433",
    gNhJe7Fbj: "framer-v-wnqb0w",
    L0sdqDSt8: "framer-v-1wc2ac0",
    pC552Hdl2: "framer-v-n56b7x",
    pmZTzPtc9: "framer-v-1bet4wy",
    Qjx7lyGdh: "framer-v-tizt5h",
    tdBhGfIRW: "framer-v-1ql8g3o",
    v2CwCl_6S: "framer-v-cu9pz0",
  };
function ft(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var wp = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  kp = (e, t) => {
    switch (e) {
      case "fdKvvD3dw":
        return "W6y1GIkBT";
      case "k_rjxTyKi":
        return "PTEm0r7OH";
      default:
        return "OBjAt4_OD";
    }
  },
  Cp = (e, t) => {
    switch (e) {
      case "fdKvvD3dw":
        return !0;
      case "k_rjxTyKi":
        return !1;
      default:
        return !0;
    }
  },
  tn = (e) => !!e,
  qa = { damping: 14, delay: 0, mass: 1, stiffness: 140, type: "spring" },
  _p = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: qa,
    x: 32,
    y: 27,
  },
  rn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: qa,
    x: 0,
    y: 0,
  },
  Fp = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 32,
    y: 27,
  },
  an = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: qa,
    x: 32,
    y: 10,
  },
  on = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 32,
    y: 10,
  },
  nn = ({ children: e, blockDocumentScrolling: t, enabled: o = !0 }) => {
    let [a, n] = Ge({ blockDocumentScrolling: t });
    return e({
      hide: () => n(!1),
      show: () => n(!0),
      toggle: () => n(!a),
      visible: o && a,
    });
  },
  Rp = (e, t) => {
    switch (e) {
      case "fdKvvD3dw":
        return !1;
      case "k_rjxTyKi":
        return !0;
      default:
        return !1;
    }
  },
  Sp = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Lp = l(F),
  sn = {
    Button: "Vt63b1HZL",
    Default: "CBnNT_cVM",
    Time_Dark: "CeQWXFzpK",
    Time_Light: "fpVehunuq",
    Time: "jdtc6IfdH",
  },
  Ip = { Dark: "k_rjxTyKi", Light: "fdKvvD3dw" },
  Vp = {
    Desktop_Project_Default: "tdBhGfIRW",
    Desktop_Project: "e6RicA5Ai",
    Desktop_Vertical: "pmZTzPtc9",
    Desktop: "v2CwCl_6S",
    Mobile_Project_Default: "L0sdqDSt8",
    Mobile_Project: "gNhJe7Fbj",
    Mobile_Vertical: "pC552Hdl2",
    Mobile: "Qjx7lyGdh",
  },
  Up = ({
    bGVariant: e,
    defaultVariant: t,
    height: o,
    id: a,
    socialVariant: n,
    subscribe: s,
    timeVariant: i,
    width: f,
    ...c
  }) => {
    var m, p, d, y, b, h, w, u, k, g, v, C;
    return {
      ...c,
      dtjgVuN4V:
        (d =
          (p = (m = sn[t]) !== null && m !== void 0 ? m : t) !== null &&
          p !== void 0
            ? p
            : c.dtjgVuN4V) !== null && d !== void 0
          ? d
          : "jdtc6IfdH",
      l2OjqhSRj:
        (h =
          (b = (y = sn[i]) !== null && y !== void 0 ? y : i) !== null &&
          b !== void 0
            ? b
            : c.l2OjqhSRj) !== null && h !== void 0
          ? h
          : "jdtc6IfdH",
      LBh0a0IEB:
        (w = e ?? c.LBh0a0IEB) !== null && w !== void 0
          ? w
          : "var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(235, 235, 234))",
      qTXSBARg2:
        (g =
          (k = (u = Ip[n]) !== null && u !== void 0 ? u : n) !== null &&
          k !== void 0
            ? k
            : c.qTXSBARg2) !== null && g !== void 0
          ? g
          : "fdKvvD3dw",
      t4ryDht7l: s ?? c.t4ryDht7l,
      variant:
        (C = (v = Vp[c.variant]) !== null && v !== void 0 ? v : c.variant) !==
          null && C !== void 0
          ? C
          : "v2CwCl_6S",
    };
  },
  Dp = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Tp = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        t4ryDht7l: c,
        l2OjqhSRj: m,
        dtjgVuN4V: p,
        qTXSBARg2: d,
        LBh0a0IEB: y,
        ...b
      } = Up(e),
      {
        baseVariant: h,
        classNames: w,
        clearLoadingGesture: u,
        gestureHandlers: k,
        gestureVariant: g,
        isLoading: v,
        setGestureState: C,
        setVariant: L,
        variants: D,
      } = G({
        cycleOrder: xp,
        defaultVariant: "v2CwCl_6S",
        variant: f,
        variantClassNames: bp,
      }),
      _ = Dp(e, D),
      { activeVariantCallback: Z, delay: X } = ne(h),
      H = ({ overlay: Be, paginationInfo: oy }) =>
        Z(async (...Tn) => {
          if (c && (await c(...Tn)) === !1) return !1;
          Be.show();
        }),
      K = T(null),
      te = () =>
        ![
          "Qjx7lyGdh",
          "pC552Hdl2",
          "e6RicA5Ai",
          "gNhJe7Fbj",
          "L0sdqDSt8",
        ].includes(h),
      le = () => h === "e6RicA5Ai",
      ce = () =>
        ![
          "pmZTzPtc9",
          "e6RicA5Ai",
          "gNhJe7Fbj",
          "tdBhGfIRW",
          "L0sdqDSt8",
        ].includes(h),
      ge = () =>
        !![
          "pmZTzPtc9",
          "e6RicA5Ai",
          "gNhJe7Fbj",
          "tdBhGfIRW",
          "L0sdqDSt8",
        ].includes(h),
      ye = tn(Cp(d, o)),
      we = (Be) =>
        ["Qjx7lyGdh", "pC552Hdl2", "L0sdqDSt8"].includes(h)
          ? !0
          : h === "gNhJe7Fbj"
            ? Be
            : !1,
      Se = () => h !== "pC552Hdl2",
      be = () => !["Qjx7lyGdh", "gNhJe7Fbj", "L0sdqDSt8"].includes(h),
      $e = T(null),
      mt = T(null),
      dt = tn(Rp(d, o)),
      aa = (Be) => (h === "gNhJe7Fbj" ? Be : !1),
      Vn = () => h !== "gNhJe7Fbj",
      ro = T(null),
      Un = T(null),
      Dn = A(),
      oa = [Or, pe],
      ay = J();
    return r(B, {
      id: i ?? Dn,
      children: r(Lp, {
        animate: D,
        initial: !1,
        children: r(Sp, {
          value: wp,
          children: I(l.div, {
            ...b,
            ...k,
            className: E(Ba, ...oa, "framer-cu9pz0", s, w),
            "data-framer-name": "Desktop",
            layoutDependency: _,
            layoutId: "v2CwCl_6S",
            ref: t ?? K,
            style: { backgroundColor: "rgba(0, 0, 0, 0)", ...n },
            variants: { gNhJe7Fbj: { backgroundColor: y } },
            ...ft(
              {
                e6RicA5Ai: { "data-framer-name": "Desktop_Project" },
                gNhJe7Fbj: { "data-framer-name": "Mobile_Project" },
                L0sdqDSt8: { "data-framer-name": "Mobile_Project_Default" },
                pC552Hdl2: { "data-framer-name": "Mobile_Vertical" },
                pmZTzPtc9: { "data-framer-name": "Desktop_Vertical" },
                Qjx7lyGdh: { "data-framer-name": "Mobile" },
                tdBhGfIRW: { "data-framer-name": "Desktop_Project_Default" },
              },
              h,
              g,
            ),
            children: [
              te() &&
                r(Q, {
                  children: r(l.div, {
                    className: "framer-xkf53q-container",
                    layoutDependency: _,
                    layoutId: "PUiAm7qlP-container",
                    children: r(pp, {
                      height: "100%",
                      id: "PUiAm7qlP",
                      layoutId: "PUiAm7qlP",
                      style: { height: "100%" },
                      variant: "OBjAt4_OD",
                      width: "100%",
                      ...ft({ tdBhGfIRW: { variant: "W6y1GIkBT" } }, h, g),
                    }),
                  }),
                }),
              le() &&
                r(Q, {
                  children: r(l.div, {
                    className: "framer-k3bbv2-container",
                    "data-framer-name": "Social/ProjectTheme",
                    layoutDependency: _,
                    layoutId: "wZxWD9ASu-container",
                    name: "Social/ProjectTheme",
                    children: r(nr, {
                      height: "100%",
                      id: "wZxWD9ASu",
                      layoutId: "wZxWD9ASu",
                      name: "Social/ProjectTheme",
                      style: { height: "100%" },
                      variant: kp(d, o),
                      width: "100%",
                    }),
                  }),
                }),
              ce() &&
                r(Q, {
                  children: r(l.div, {
                    className: "framer-aaohzq-container",
                    layoutDependency: _,
                    layoutId: "b2nOkLLrQ-container",
                    children: r(hp, {
                      height: "100%",
                      id: "b2nOkLLrQ",
                      layoutId: "b2nOkLLrQ",
                      variant: "CBnNT_cVM",
                      width: "100%",
                      ...ft(
                        {
                          pC552Hdl2: { variant: "Vt63b1HZL" },
                          Qjx7lyGdh: { variant: "Vt63b1HZL" },
                        },
                        h,
                        g,
                      ),
                    }),
                  }),
                }),
              ge() &&
                r(Q, {
                  children: r(l.div, {
                    className: "framer-28lqvw-container",
                    layoutDependency: _,
                    layoutId: "eoNud8Xsq-container",
                    children: r(It, {
                      height: "100%",
                      id: "eoNud8Xsq",
                      layoutId: "eoNud8Xsq",
                      variant: "Vt63b1HZL",
                      width: "100%",
                      ...ft(
                        {
                          e6RicA5Ai: { variant: m },
                          gNhJe7Fbj: { variant: m },
                          L0sdqDSt8: { variant: p },
                          tdBhGfIRW: { variant: p },
                        },
                        h,
                        g,
                      ),
                    }),
                  }),
                }),
              we(ye) &&
                I(l.div, {
                  className: "framer-18x0uff",
                  "data-framer-name": "Mobile_Light",
                  layoutDependency: _,
                  layoutId: "PAxOgEkAs",
                  children: [
                    r(Q, {
                      width: "54px",
                      children: r(l.div, {
                        className: "framer-u57qdn-container",
                        layoutDependency: _,
                        layoutId: "ch71ONbin-container",
                        children: r(st, {
                          b1BqfRpNR: !0,
                          bUFcBjj2_: !1,
                          dIiBtQnYe: 100,
                          height: "100%",
                          id: "ch71ONbin",
                          layoutId: "ch71ONbin",
                          style: { height: "100%", width: "100%" },
                          variant: "n7p8bWC6m",
                          VTdF3jUde:
                            "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                          width: "100%",
                          ZWLrRxtcU: !0,
                          ...ft(
                            {
                              gNhJe7Fbj: {
                                jmykv9nju: "https://twitter.com/jayzhushi",
                              },
                              L0sdqDSt8: {
                                jmykv9nju: "https://twitter.com/jayzhushi",
                              },
                              pC552Hdl2: {
                                jmykv9nju: "https://twitter.com/jayzhushi",
                              },
                              Qjx7lyGdh: {
                                jmykv9nju: "https://twitter.com/jayzhushi",
                              },
                            },
                            h,
                            g,
                          ),
                        }),
                      }),
                    }),
                    r(Q, {
                      width: "54px",
                      children: r(l.div, {
                        className: "framer-2nc1fz-container",
                        layoutDependency: _,
                        layoutId: "aCr6pvS8_-container",
                        children: r(st, {
                          b1BqfRpNR: !0,
                          bUFcBjj2_: !1,
                          dIiBtQnYe: 100,
                          height: "100%",
                          id: "aCr6pvS8_",
                          layoutId: "aCr6pvS8_",
                          style: { height: "100%", width: "100%" },
                          variant: "PWFVUVWOQ",
                          VTdF3jUde:
                            "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                          width: "100%",
                          ZWLrRxtcU: !0,
                          ...ft(
                            {
                              gNhJe7Fbj: {
                                jmykv9nju:
                                  "https://www.instagram.com/jayzhushi/",
                                variant: "dBXxDpGg9",
                              },
                              L0sdqDSt8: {
                                jmykv9nju:
                                  "https://www.instagram.com/jayzhushi/",
                                variant: "dBXxDpGg9",
                              },
                              pC552Hdl2: {
                                jmykv9nju:
                                  "https://www.instagram.com/jayzhushi/",
                                variant: "dBXxDpGg9",
                              },
                              Qjx7lyGdh: {
                                jmykv9nju:
                                  "https://www.instagram.com/jayzhushi/",
                                variant: "dBXxDpGg9",
                              },
                            },
                            h,
                            g,
                          ),
                        }),
                      }),
                    }),
                    Se() &&
                      r(Q, {
                        width: "54px",
                        children: r(l.div, {
                          className: "framer-1sli958-container",
                          layoutDependency: _,
                          layoutId: "fFs55ypQk-container",
                          children: r(st, {
                            b1BqfRpNR: !0,
                            bUFcBjj2_: !1,
                            dIiBtQnYe: 100,
                            height: "100%",
                            id: "fFs55ypQk",
                            layoutId: "fFs55ypQk",
                            style: { height: "100%", width: "100%" },
                            variant: "LqK6hOvsJ",
                            VTdF3jUde:
                              "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                            width: "100%",
                            ZWLrRxtcU: !0,
                            ...ft(
                              {
                                gNhJe7Fbj: {
                                  jmykv9nju: "mailto:jayzhushi@gmail.com",
                                },
                                L0sdqDSt8: {
                                  jmykv9nju: "mailto:jayzhushi@gmail.com",
                                },
                                Qjx7lyGdh: {
                                  jmykv9nju: "mailto:jayzhushi@gmail.com",
                                },
                              },
                              h,
                              g,
                            ),
                          }),
                        }),
                      }),
                    be() &&
                      r(nn, {
                        blockDocumentScrolling: !1,
                        children: (Be) =>
                          r(qe, {
                            children: r(Q, {
                              children: I(l.div, {
                                className: "framer-1i8ervd-container",
                                id: `${i}-1i8ervd`,
                                layoutDependency: _,
                                layoutId: "aouHcFdY5-container",
                                ref: $e,
                                children: [
                                  r(st, {
                                    b1BqfRpNR: !0,
                                    bUFcBjj2_: !1,
                                    dIiBtQnYe: 100,
                                    height: "100%",
                                    id: "aouHcFdY5",
                                    layoutId: "aouHcFdY5",
                                    QB6UkYvuv: H({ overlay: Be }),
                                    variant: "wmCubK61d",
                                    VTdF3jUde:
                                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                    width: "100%",
                                    ZWLrRxtcU: !0,
                                  }),
                                  r(Ue, {
                                    children:
                                      Be.visible &&
                                      r(Qe, {
                                        alignment: "center",
                                        anchorRef: $e,
                                        className: E(Ba, w, ...oa),
                                        collisionDetection: !1,
                                        "data-framer-portal-id": `${i}-1i8ervd`,
                                        offsetX: -105,
                                        offsetY: -16,
                                        onDismiss: Be.hide,
                                        placement: "top",
                                        portalSelector: "#overlay",
                                        safeArea: !0,
                                        zIndex: 11,
                                        children: r(en, {
                                          __perspectiveFX: !1,
                                          __smartComponentFX: !0,
                                          __targetOpacity: 1,
                                          animate: rn,
                                          className: "framer-1joau5v",
                                          exit: _p,
                                          initial: Fp,
                                          layoutDependency: _,
                                          layoutId: "bdQb6serq",
                                          ref: mt,
                                          role: "dialog",
                                          style: {
                                            backgroundColor:
                                              "rgb(255, 255, 255)",
                                            borderBottomLeftRadius: 24,
                                            borderBottomRightRadius: 24,
                                            borderTopLeftRadius: 24,
                                            borderTopRightRadius: 24,
                                            boxShadow:
                                              "0px 10px 20px 0px rgba(0,0,0,0.05)",
                                            transformPerspective: 1200,
                                          },
                                          variants: {
                                            pC552Hdl2: { boxShadow: "none" },
                                          },
                                          ...ft(
                                            {
                                              pC552Hdl2: {
                                                exit: an,
                                                initial: on,
                                              },
                                            },
                                            h,
                                            g,
                                          ),
                                          children: I(l.div, {
                                            className: "framer-1vpb7p2",
                                            "data-framer-name": "Notify",
                                            layoutDependency: _,
                                            layoutId: "oCJHxPQm0",
                                            style: {
                                              backgroundColor:
                                                "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                              borderBottomLeftRadius: 20,
                                              borderBottomRightRadius: 20,
                                              borderTopLeftRadius: 20,
                                              borderTopRightRadius: 20,
                                            },
                                            children: [
                                              I(l.div, {
                                                className: "framer-1b98n9j",
                                                layoutDependency: _,
                                                layoutId: "LZLVCt0VS",
                                                children: [
                                                  r($, {
                                                    __fromCanvasComponent: !0,
                                                    children: r(F, {
                                                      children: r(l.p, {
                                                        className:
                                                          "framer-styles-preset-1wxnimg",
                                                        "data-styles-preset":
                                                          "tvtD0bAK1",
                                                        children: "Newsletter",
                                                      }),
                                                    }),
                                                    className: "framer-be6m0f",
                                                    fonts: ["Inter"],
                                                    layoutDependency: _,
                                                    layoutId: "c3qWEBkHL",
                                                    style: {
                                                      "--framer-link-text-color":
                                                        "rgb(0, 153, 255)",
                                                      "--framer-link-text-decoration":
                                                        "underline",
                                                    },
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                  r($, {
                                                    __fromCanvasComponent: !0,
                                                    children: r(F, {
                                                      children: r(l.p, {
                                                        className:
                                                          "framer-styles-preset-9jlebu",
                                                        "data-styles-preset":
                                                          "sSyE5_N0_",
                                                        style: {
                                                          "--framer-text-color":
                                                            "var(--extracted-r6o4lv, var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)))",
                                                        },
                                                        children:
                                                          "Get my latest news.",
                                                      }),
                                                    }),
                                                    className: "framer-16p1vyw",
                                                    fonts: ["Inter"],
                                                    layoutDependency: _,
                                                    layoutId: "T1QTGoPkB",
                                                    style: {
                                                      "--extracted-r6o4lv":
                                                        "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                                                      "--framer-link-text-color":
                                                        "rgb(0, 153, 255)",
                                                      "--framer-link-text-decoration":
                                                        "underline",
                                                    },
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                              r(Q, {
                                                children: r(l.div, {
                                                  className:
                                                    "framer-53toz7-container",
                                                  layoutDependency: _,
                                                  layoutId:
                                                    "ompoVKbz6-container",
                                                  children: r(Wr, {
                                                    borderRadius: 12,
                                                    bottomLeftRadius: 12,
                                                    bottomRightRadius: 12,
                                                    button: {
                                                      color:
                                                        "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                                      fill: "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                      fontWeight: 600,
                                                      label: "Sign Up",
                                                    },
                                                    font: !0,
                                                    fontFamily: "Satoshi",
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    gap: 10,
                                                    height: "100%",
                                                    id: "ompoVKbz6",
                                                    input: {
                                                      color:
                                                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                      error: "rgb(238, 68, 68)",
                                                      fill: "var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05))",
                                                      placeholder:
                                                        "email@framer.com",
                                                      placeholderColor:
                                                        "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                                                      value: "",
                                                    },
                                                    isMixedBorderRadius: !1,
                                                    layout: "vertical",
                                                    layoutId: "ompoVKbz6",
                                                    padding: 15,
                                                    paddingBottom: 12,
                                                    paddingLeft: 12,
                                                    paddingPerSide: !0,
                                                    paddingRight: 12,
                                                    paddingTop: 12,
                                                    style: { width: "100%" },
                                                    topLeftRadius: 12,
                                                    topRightRadius: 12,
                                                    url: "https://design.us12.list-manage.com/subscribe/post?u=db06200cf4fc08d5fa6df3cf0&amp;id=cd51730192&amp;f_id=00eaaee0f0",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                      }),
                  ],
                }),
              aa(dt) &&
                I(l.div, {
                  className: "framer-1cbummt",
                  "data-framer-name": "Mobile_Dark",
                  layoutDependency: _,
                  layoutId: "xYfIdsZlt",
                  children: [
                    r(Q, {
                      width: "54px",
                      children: r(l.div, {
                        className: "framer-1ew2i50-container",
                        layoutDependency: _,
                        layoutId: "FFBMTaNeo-container",
                        children: r(st, {
                          b1BqfRpNR: !0,
                          bUFcBjj2_: !1,
                          dIiBtQnYe: 100,
                          height: "100%",
                          id: "FFBMTaNeo",
                          jmykv9nju: "https://twitter.com/jayzhushi",
                          layoutId: "FFBMTaNeo",
                          style: { height: "100%", width: "100%" },
                          variant: "NgHSBu1eL",
                          VTdF3jUde:
                            "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                          width: "100%",
                          ZWLrRxtcU: !0,
                        }),
                      }),
                    }),
                    r(Q, {
                      width: "54px",
                      children: r(l.div, {
                        className: "framer-1s51x9g-container",
                        layoutDependency: _,
                        layoutId: "avf4pXf24-container",
                        children: r(st, {
                          b1BqfRpNR: !0,
                          bUFcBjj2_: !1,
                          dIiBtQnYe: 100,
                          height: "100%",
                          id: "avf4pXf24",
                          jmykv9nju: "https://www.instagram.com/jayzhushi/",
                          layoutId: "avf4pXf24",
                          style: { height: "100%", width: "100%" },
                          variant: "nBObGXSQT",
                          VTdF3jUde:
                            "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                          width: "100%",
                          ZWLrRxtcU: !0,
                        }),
                      }),
                    }),
                    r(Q, {
                      width: "54px",
                      children: r(l.div, {
                        className: "framer-1am75y3-container",
                        layoutDependency: _,
                        layoutId: "AEUbFEpgP-container",
                        children: r(st, {
                          b1BqfRpNR: !0,
                          bUFcBjj2_: !1,
                          dIiBtQnYe: 100,
                          height: "100%",
                          id: "AEUbFEpgP",
                          jmykv9nju: "mailto:jayzhushi@gmail.com",
                          layoutId: "AEUbFEpgP",
                          style: { height: "100%", width: "100%" },
                          variant: "Kl68LqE9j",
                          VTdF3jUde:
                            "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                          width: "100%",
                          ZWLrRxtcU: !0,
                        }),
                      }),
                    }),
                    Vn() &&
                      r(nn, {
                        blockDocumentScrolling: !1,
                        children: (Be) =>
                          r(qe, {
                            children: r(Q, {
                              children: I(l.div, {
                                className: "framer-o95cf4-container",
                                id: `${i}-o95cf4`,
                                layoutDependency: _,
                                layoutId: "VS7mKdIAR-container",
                                ref: ro,
                                children: [
                                  r(st, {
                                    b1BqfRpNR: !0,
                                    bUFcBjj2_: !1,
                                    dIiBtQnYe: 100,
                                    height: "100%",
                                    id: "VS7mKdIAR",
                                    layoutId: "VS7mKdIAR",
                                    QB6UkYvuv: H({ overlay: Be }),
                                    variant: "wmCubK61d",
                                    VTdF3jUde:
                                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                    width: "100%",
                                    ZWLrRxtcU: !0,
                                  }),
                                  r(Ue, {
                                    children:
                                      Be.visible &&
                                      r(Qe, {
                                        alignment: "center",
                                        anchorRef: ro,
                                        className: E(Ba, w, ...oa),
                                        collisionDetection: !1,
                                        "data-framer-portal-id": `${i}-o95cf4`,
                                        offsetX: -105,
                                        offsetY: -16,
                                        onDismiss: Be.hide,
                                        placement: "top",
                                        portalSelector: "#overlay",
                                        safeArea: !0,
                                        zIndex: 11,
                                        children: r(en, {
                                          __perspectiveFX: !1,
                                          __smartComponentFX: !0,
                                          __targetOpacity: 1,
                                          animate: rn,
                                          className: "framer-1brhs1z",
                                          exit: an,
                                          initial: on,
                                          layoutDependency: _,
                                          layoutId: "fgmJoUxif",
                                          ref: Un,
                                          role: "dialog",
                                          style: {
                                            backgroundColor:
                                              "rgb(255, 255, 255)",
                                            borderBottomLeftRadius: 24,
                                            borderBottomRightRadius: 24,
                                            borderTopLeftRadius: 24,
                                            borderTopRightRadius: 24,
                                            transformPerspective: 1200,
                                          },
                                          children: I(l.div, {
                                            className: "framer-ur83s9",
                                            "data-framer-name": "Notify",
                                            layoutDependency: _,
                                            layoutId: "NwoRg4bs4",
                                            style: {
                                              backgroundColor:
                                                "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                              borderBottomLeftRadius: 20,
                                              borderBottomRightRadius: 20,
                                              borderTopLeftRadius: 20,
                                              borderTopRightRadius: 20,
                                            },
                                            children: [
                                              I(l.div, {
                                                className: "framer-c5mmj2",
                                                layoutDependency: _,
                                                layoutId: "l8dbowH5U",
                                                children: [
                                                  r($, {
                                                    __fromCanvasComponent: !0,
                                                    children: r(F, {
                                                      children: r(l.p, {
                                                        className:
                                                          "framer-styles-preset-1wxnimg",
                                                        "data-styles-preset":
                                                          "tvtD0bAK1",
                                                        children: "Newsletter",
                                                      }),
                                                    }),
                                                    className: "framer-1ezcbyq",
                                                    fonts: ["Inter"],
                                                    layoutDependency: _,
                                                    layoutId: "YJXnU4JBu",
                                                    style: {
                                                      "--framer-link-text-color":
                                                        "rgb(0, 153, 255)",
                                                      "--framer-link-text-decoration":
                                                        "underline",
                                                    },
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                  r($, {
                                                    __fromCanvasComponent: !0,
                                                    children: r(F, {
                                                      children: r(l.p, {
                                                        className:
                                                          "framer-styles-preset-9jlebu",
                                                        "data-styles-preset":
                                                          "sSyE5_N0_",
                                                        style: {
                                                          "--framer-text-color":
                                                            "var(--extracted-r6o4lv, var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5)))",
                                                        },
                                                        children:
                                                          "Get my latest news.",
                                                      }),
                                                    }),
                                                    className: "framer-1th09l7",
                                                    fonts: ["Inter"],
                                                    layoutDependency: _,
                                                    layoutId: "lTJD9uZ4r",
                                                    style: {
                                                      "--extracted-r6o4lv":
                                                        "var(--token-cb5833a4-e810-427d-93f0-14fa8b4ce0f8, rgba(0, 0, 0, 0.5))",
                                                      "--framer-link-text-color":
                                                        "rgb(0, 153, 255)",
                                                      "--framer-link-text-decoration":
                                                        "underline",
                                                    },
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                              r(Q, {
                                                children: r(l.div, {
                                                  className:
                                                    "framer-1qts6n1-container",
                                                  layoutDependency: _,
                                                  layoutId:
                                                    "jGLrN2bLR-container",
                                                  children: r(Wr, {
                                                    borderRadius: 12,
                                                    bottomLeftRadius: 12,
                                                    bottomRightRadius: 12,
                                                    button: {
                                                      color:
                                                        "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                                      fill: "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                      fontWeight: 600,
                                                      label: "Sign Up",
                                                    },
                                                    font: !0,
                                                    fontFamily: "Satoshi",
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    gap: 10,
                                                    height: "100%",
                                                    id: "jGLrN2bLR",
                                                    input: {
                                                      color:
                                                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                                      error: "rgb(238, 68, 68)",
                                                      fill: "var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05))",
                                                      placeholder:
                                                        "email@framer.com",
                                                      placeholderColor:
                                                        "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                                                      value: "",
                                                    },
                                                    isMixedBorderRadius: !1,
                                                    layout: "vertical",
                                                    layoutId: "jGLrN2bLR",
                                                    padding: 15,
                                                    paddingBottom: 12,
                                                    paddingLeft: 12,
                                                    paddingPerSide: !0,
                                                    paddingRight: 12,
                                                    paddingTop: 12,
                                                    style: { width: "100%" },
                                                    topLeftRadius: 12,
                                                    topRightRadius: 12,
                                                    url: "https://design.us12.list-manage.com/subscribe/post?u=db06200cf4fc08d5fa6df3cf0&amp;id=cd51730192&amp;f_id=00eaaee0f0",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                      }),
                  ],
                }),
              r(Q, {
                children: r(l.div, {
                  className: "framer-1xl6uza-container",
                  layoutDependency: _,
                  layoutId: "d03TOxXjl-container",
                  style: { opacity: 0 },
                  children: r(Tt, {
                    about:
                      "https://framerusercontent.com/assets/JS0F0ykew7pBc1YLi9C2thx3lA.mp3",
                    click1:
                      "https://framerusercontent.com/assets/NeKEEECpDCUc4QSkjqmTdXLH5GU.mp3",
                    click2:
                      "https://framerusercontent.com/assets/PSUayyGR1zh59jVTvXq7dxzaBs.mp3",
                    click3:
                      "https://framerusercontent.com/assets/tF3exK591Ks2e3NJI0f2jo9XAo.mp3",
                    click4:
                      "https://framerusercontent.com/assets/gVljopYYjzrVbUeGt3La9cq6I4.mp3",
                    height: "100%",
                    hover1:
                      "https://framerusercontent.com/assets/v5V8b74xkcFoD7azK05De3Q2U.mp3",
                    id: "d03TOxXjl",
                    layoutId: "d03TOxXjl",
                    lock: "https://framerusercontent.com/assets/0YxScnd9tCQhXY6WCagHpZm4v8.mp3",
                    popup:
                      "https://framerusercontent.com/assets/upVw7x9UcdCQOnE4UHaGAqt4mM.mp3",
                    slide:
                      "https://framerusercontent.com/assets/Tzsjxn4Nj6hopuN7zbtTykw2C34.mp3",
                    soundon:
                      "https://framerusercontent.com/assets/nBau36Lg0YjnLNUZ4mHwRUnrY.mp3",
                    swoosh:
                      "https://framerusercontent.com/assets/SrckkKlgThNSPqJvnvJrwWMroAw.mp3",
                    unlock:
                      "https://framerusercontent.com/assets/1e9NlcWONVxoxBiQ4ZHyYatDPHI.mp3",
                    width: "100%",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Ep = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-8RpJg.framer-1z84j9, .framer-8RpJg .framer-1z84j9 { display: block; }",
    ".framer-8RpJg.framer-cu9pz0 { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 20px 40px 40px 40px; position: relative; width: 1200px; }",
    ".framer-8RpJg .framer-xkf53q-container, .framer-8RpJg .framer-k3bbv2-container { flex: none; height: 54px; pointer-events: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-8RpJg .framer-aaohzq-container, .framer-8RpJg .framer-28lqvw-container { flex: none; height: auto; pointer-events: auto; position: relative; width: auto; }",
    ".framer-8RpJg .framer-18x0uff { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; pointer-events: auto; position: relative; width: min-content; }",
    ".framer-8RpJg .framer-u57qdn-container, .framer-8RpJg .framer-2nc1fz-container, .framer-8RpJg .framer-1sli958-container, .framer-8RpJg .framer-1ew2i50-container, .framer-8RpJg .framer-1s51x9g-container, .framer-8RpJg .framer-1am75y3-container { flex: none; height: 54px; position: relative; width: 54px; }",
    ".framer-8RpJg .framer-1i8ervd-container, .framer-8RpJg .framer-o95cf4-container { flex: none; height: auto; position: relative; width: auto; z-index: 0; }",
    ".framer-8RpJg .framer-1joau5v, .framer-8RpJg .framer-1brhs1z { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 266px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-8RpJg .framer-1vpb7p2, .framer-8RpJg .framer-ur83s9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-8RpJg .framer-1b98n9j, .framer-8RpJg .framer-c5mmj2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 4px; position: relative; width: min-content; }",
    ".framer-8RpJg .framer-be6m0f, .framer-8RpJg .framer-16p1vyw, .framer-8RpJg .framer-1ezcbyq, .framer-8RpJg .framer-1th09l7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-8RpJg .framer-53toz7-container, .framer-8RpJg .framer-1qts6n1-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-8RpJg .framer-1cbummt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; pointer-events: auto; position: relative; width: min-content; }",
    ".framer-8RpJg .framer-1xl6uza-container { bottom: 20px; flex: none; height: auto; pointer-events: none; position: absolute; right: 20px; width: auto; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8RpJg .framer-18x0uff, .framer-8RpJg .framer-1joau5v, .framer-8RpJg .framer-1vpb7p2, .framer-8RpJg .framer-1b98n9j, .framer-8RpJg .framer-1cbummt, .framer-8RpJg .framer-1brhs1z, .framer-8RpJg .framer-ur83s9, .framer-8RpJg .framer-c5mmj2 { gap: 0px; } .framer-8RpJg .framer-18x0uff > *, .framer-8RpJg .framer-1joau5v > *, .framer-8RpJg .framer-1brhs1z > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-8RpJg .framer-18x0uff > :first-child, .framer-8RpJg .framer-1joau5v > :first-child, .framer-8RpJg .framer-1cbummt > :first-child, .framer-8RpJg .framer-1brhs1z > :first-child { margin-left: 0px; } .framer-8RpJg .framer-18x0uff > :last-child, .framer-8RpJg .framer-1joau5v > :last-child, .framer-8RpJg .framer-1cbummt > :last-child, .framer-8RpJg .framer-1brhs1z > :last-child { margin-right: 0px; } .framer-8RpJg .framer-1vpb7p2 > *, .framer-8RpJg .framer-ur83s9 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-8RpJg .framer-1vpb7p2 > :first-child, .framer-8RpJg .framer-1b98n9j > :first-child, .framer-8RpJg .framer-ur83s9 > :first-child, .framer-8RpJg .framer-c5mmj2 > :first-child { margin-top: 0px; } .framer-8RpJg .framer-1vpb7p2 > :last-child, .framer-8RpJg .framer-1b98n9j > :last-child, .framer-8RpJg .framer-ur83s9 > :last-child, .framer-8RpJg .framer-c5mmj2 > :last-child { margin-bottom: 0px; } .framer-8RpJg .framer-1b98n9j > *, .framer-8RpJg .framer-c5mmj2 > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-8RpJg .framer-1cbummt > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } }",
    ".framer-8RpJg.framer-v-tizt5h.framer-cu9pz0 { align-content: center; align-items: center; flex-direction: column; gap: 40px; justify-content: flex-start; padding: 40px 40px 120px 40px; width: 390px; }",
    ".framer-8RpJg.framer-v-tizt5h .framer-aaohzq-container, .framer-8RpJg.framer-v-n56b7x .framer-aaohzq-container, .framer-8RpJg.framer-v-wnqb0w .framer-28lqvw-container { order: 4; }",
    ".framer-8RpJg.framer-v-tizt5h .framer-18x0uff, .framer-8RpJg.framer-v-n56b7x .framer-18x0uff, .framer-8RpJg.framer-v-wnqb0w .framer-18x0uff, .framer-8RpJg.framer-v-1wc2ac0 .framer-18x0uff { gap: 16px; order: 2; }",
    ".framer-8RpJg.framer-v-tizt5h .framer-1xl6uza-container, .framer-8RpJg.framer-v-n56b7x .framer-1xl6uza-container, .framer-8RpJg.framer-v-wnqb0w .framer-1xl6uza-container, .framer-8RpJg.framer-v-1wc2ac0 .framer-1xl6uza-container { order: 6; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8RpJg.framer-v-tizt5h.framer-cu9pz0, .framer-8RpJg.framer-v-tizt5h .framer-18x0uff { gap: 0px; } .framer-8RpJg.framer-v-tizt5h.framer-cu9pz0 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-8RpJg.framer-v-tizt5h.framer-cu9pz0 > :first-child { margin-top: 0px; } .framer-8RpJg.framer-v-tizt5h.framer-cu9pz0 > :last-child { margin-bottom: 0px; } .framer-8RpJg.framer-v-tizt5h .framer-18x0uff > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-8RpJg.framer-v-tizt5h .framer-18x0uff > :first-child { margin-left: 0px; } .framer-8RpJg.framer-v-tizt5h .framer-18x0uff > :last-child { margin-right: 0px; } }",
    ".framer-8RpJg.framer-v-n56b7x.framer-cu9pz0, .framer-8RpJg.framer-v-wnqb0w.framer-cu9pz0, .framer-8RpJg.framer-v-1wc2ac0.framer-cu9pz0 { align-content: center; align-items: center; flex-direction: column; gap: 40px; justify-content: flex-start; padding: 40px; width: 390px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8RpJg.framer-v-n56b7x.framer-cu9pz0, .framer-8RpJg.framer-v-n56b7x .framer-18x0uff { gap: 0px; } .framer-8RpJg.framer-v-n56b7x.framer-cu9pz0 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-8RpJg.framer-v-n56b7x.framer-cu9pz0 > :first-child { margin-top: 0px; } .framer-8RpJg.framer-v-n56b7x.framer-cu9pz0 > :last-child { margin-bottom: 0px; } .framer-8RpJg.framer-v-n56b7x .framer-18x0uff > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-8RpJg.framer-v-n56b7x .framer-18x0uff > :first-child { margin-left: 0px; } .framer-8RpJg.framer-v-n56b7x .framer-18x0uff > :last-child { margin-right: 0px; } }",
    ".framer-8RpJg.framer-v-wnqb0w .framer-1cbummt, .framer-8RpJg.framer-v-1wc2ac0 .framer-28lqvw-container { order: 3; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8RpJg.framer-v-wnqb0w.framer-cu9pz0, .framer-8RpJg.framer-v-wnqb0w .framer-18x0uff { gap: 0px; } .framer-8RpJg.framer-v-wnqb0w.framer-cu9pz0 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-8RpJg.framer-v-wnqb0w.framer-cu9pz0 > :first-child { margin-top: 0px; } .framer-8RpJg.framer-v-wnqb0w.framer-cu9pz0 > :last-child { margin-bottom: 0px; } .framer-8RpJg.framer-v-wnqb0w .framer-18x0uff > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-8RpJg.framer-v-wnqb0w .framer-18x0uff > :first-child { margin-left: 0px; } .framer-8RpJg.framer-v-wnqb0w .framer-18x0uff > :last-child { margin-right: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8RpJg.framer-v-1wc2ac0.framer-cu9pz0, .framer-8RpJg.framer-v-1wc2ac0 .framer-18x0uff { gap: 0px; } .framer-8RpJg.framer-v-1wc2ac0.framer-cu9pz0 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-8RpJg.framer-v-1wc2ac0.framer-cu9pz0 > :first-child { margin-top: 0px; } .framer-8RpJg.framer-v-1wc2ac0.framer-cu9pz0 > :last-child { margin-bottom: 0px; } .framer-8RpJg.framer-v-1wc2ac0 .framer-18x0uff > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-8RpJg.framer-v-1wc2ac0 .framer-18x0uff > :first-child { margin-left: 0px; } .framer-8RpJg.framer-v-1wc2ac0 .framer-18x0uff > :last-child { margin-right: 0px; } }",
    ...Ar,
    ...de,
  ],
  fr = q(Tp, Ep, "framer-8RpJg"),
  Ow = fr;
fr.displayName = "Home/Footer";
fr.defaultProps = { height: 114, width: 1200 };
M(fr, {
  variant: {
    options: [
      "v2CwCl_6S",
      "Qjx7lyGdh",
      "pmZTzPtc9",
      "pC552Hdl2",
      "e6RicA5Ai",
      "gNhJe7Fbj",
      "tdBhGfIRW",
      "L0sdqDSt8",
    ],
    optionTitles: [
      "Desktop",
      "Mobile",
      "Desktop_Vertical",
      "Mobile_Vertical",
      "Desktop_Project",
      "Mobile_Project",
      "Desktop_Project_Default",
      "Mobile_Project_Default",
    ],
    title: "Variant",
    type: x.Enum,
  },
  t4ryDht7l: { title: "Subscribe", type: x.EventHandler },
  l2OjqhSRj: lt?.variant && {
    ...lt.variant,
    defaultValue: "jdtc6IfdH",
    description: void 0,
    hidden: void 0,
    title: "Time Variant",
  },
  dtjgVuN4V: lt?.variant && {
    ...lt.variant,
    defaultValue: "jdtc6IfdH",
    description: void 0,
    hidden: void 0,
    title: "Default Variant",
  },
  qTXSBARg2: {
    defaultValue: "fdKvvD3dw",
    options: ["fdKvvD3dw", "k_rjxTyKi"],
    optionTitles: ["Light", "Dark"],
    title: "Social Variant",
    type: x.Enum,
  },
  LBh0a0IEB: {
    defaultValue:
      'var(--token-8491ba34-a347-4834-a0f6-2ed6a6f0c292, rgb(235, 235, 234)) /* {"name":"Backdrop"} */',
    title: "BG Variant",
    type: x.Color,
  },
});
z(
  fr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...dp,
    ...up,
    ...gp,
    ...yp,
    ...vp,
    ...se(Pr),
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
ue.loadFonts([
  "FS;Satoshi-medium",
  "FS;Satoshi-bold",
  "FS;Satoshi-bold italic",
  "FS;Satoshi-medium italic",
]);
var Ww = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2",
          weight: "500",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2",
          weight: "500",
        },
      ],
    },
  ],
  Zw = [
    '.framer-q7TOU .framer-styles-preset-1k07u1u:not(.rich-text-wrapper), .framer-q7TOU .framer-styles-preset-1k07u1u.rich-text-wrapper h3 { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 38px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1439px) and (min-width: 1200px) { .framer-q7TOU .framer-styles-preset-1k07u1u:not(.rich-text-wrapper), .framer-q7TOU .framer-styles-preset-1k07u1u.rich-text-wrapper h3 { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 1199px) and (min-width: 640px) { .framer-q7TOU .framer-styles-preset-1k07u1u:not(.rich-text-wrapper), .framer-q7TOU .framer-styles-preset-1k07u1u.rich-text-wrapper h3 { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 639px) and (min-width: 0px) { .framer-q7TOU .framer-styles-preset-1k07u1u:not(.rich-text-wrapper), .framer-q7TOU .framer-styles-preset-1k07u1u.rich-text-wrapper h3 { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  Qw = "framer-q7TOU";
ue.loadFonts([
  "FS;Satoshi-medium",
  "FS;Satoshi-bold",
  "FS;Satoshi-bold italic",
  "FS;Satoshi-medium italic",
]);
var $w = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2",
          weight: "500",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2",
          weight: "500",
        },
      ],
    },
  ],
  e3 = [
    '.framer-v6grV .framer-styles-preset-1nr6prh:not(.rich-text-wrapper), .framer-v6grV .framer-styles-preset-1nr6prh.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1599px) and (min-width: 1200px) { .framer-v6grV .framer-styles-preset-1nr6prh:not(.rich-text-wrapper), .framer-v6grV .framer-styles-preset-1nr6prh.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-v6grV .framer-styles-preset-1nr6prh:not(.rich-text-wrapper), .framer-v6grV .framer-styles-preset-1nr6prh.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-v6grV .framer-styles-preset-1nr6prh:not(.rich-text-wrapper), .framer-v6grV .framer-styles-preset-1nr6prh.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  t3 = "framer-v6grV";
ue.loadFonts([
  "GF;Rethink Sans-500",
  "GF;Rethink Sans-700",
  "GF;Rethink Sans-700italic",
  "GF;Rethink Sans-500italic",
]);
var n3 = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Rethink Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/rethinksans/v5/AMODz4SDuXOMCPfdoglY9JQuWHBGG0X45DmqklNRCEvmma-aua4.woff2",
          weight: "500",
        },
        {
          family: "Rethink Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/rethinksans/v5/AMODz4SDuXOMCPfdoglY9JQuWHBGG0X45DmqkoZWCEvmma-aua4.woff2",
          weight: "700",
        },
        {
          family: "Rethink Sans",
          source: "google",
          style: "italic",
          url: "https://fonts.gstatic.com/s/rethinksans/v5/AMOFz4SDuXOMCPfdoglY9JQEUUK5wyyTfpeth6kSBwrsmI2fqa7iVQ.woff2",
          weight: "700",
        },
        {
          family: "Rethink Sans",
          source: "google",
          style: "italic",
          url: "https://fonts.gstatic.com/s/rethinksans/v5/AMOFz4SDuXOMCPfdoglY9JQEUUK5wyyTfpeth6kS0g3smI2fqa7iVQ.woff2",
          weight: "500",
        },
      ],
    },
  ],
  i3 = [
    '.framer-CpZZc .framer-styles-preset-9k6rgp:not(.rich-text-wrapper), .framer-CpZZc .framer-styles-preset-9k6rgp.rich-text-wrapper h5 { --framer-font-family: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-family-bold: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-family-italic: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1599px) and (min-width: 1200px) { .framer-CpZZc .framer-styles-preset-9k6rgp:not(.rich-text-wrapper), .framer-CpZZc .framer-styles-preset-9k6rgp.rich-text-wrapper h5 { --framer-font-family: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-family-bold: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-family-italic: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-CpZZc .framer-styles-preset-9k6rgp:not(.rich-text-wrapper), .framer-CpZZc .framer-styles-preset-9k6rgp.rich-text-wrapper h5 { --framer-font-family: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-family-bold: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-family-italic: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-CpZZc .framer-styles-preset-9k6rgp:not(.rich-text-wrapper), .framer-CpZZc .framer-styles-preset-9k6rgp.rich-text-wrapper h5 { --framer-font-family: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-family-bold: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-family-italic: "Rethink Sans", "Rethink Sans Placeholder", sans-serif; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  s3 = "framer-CpZZc";
var Kp = {};
Ce(Kp, { __FramerMetadata__: () => Yp, default: () => Qp });
var jp = _e(l.div),
  Mp = { qak4Jrj8b: { hover: !0 } },
  Np = ["ENhjXqhKQ", "qak4Jrj8b"],
  Bp = "framer-5ra5u",
  qp = { ENhjXqhKQ: "framer-v-1vy0fer", qak4Jrj8b: "framer-v-jjmk70" };
function Hp(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Pp = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Ap = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Op = l(F),
  Gp = { Off: "qak4Jrj8b", On: "ENhjXqhKQ" },
  zp = ({ height: e, id: t, tapA: o, width: a, ...n }) => {
    var s, i;
    return {
      ...n,
      heeY2JMQ7: o ?? n.heeY2JMQ7,
      variant:
        (i = (s = Gp[n.variant]) !== null && s !== void 0 ? s : n.variant) !==
          null && i !== void 0
          ? i
          : "ENhjXqhKQ",
    };
  },
  Xp = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Wp = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        heeY2JMQ7: c,
        ...m
      } = zp(e),
      {
        baseVariant: p,
        classNames: d,
        gestureHandlers: y,
        gestureVariant: b,
        setGestureState: h,
        setVariant: w,
        variants: u,
      } = G({
        cycleOrder: Np,
        defaultVariant: "ENhjXqhKQ",
        enabledGestures: Mp,
        variant: f,
        variantClassNames: qp,
      }),
      k = Xp(e, u),
      { activeVariantCallback: g, delay: v } = ne(p),
      C = g(async (...X) => {
        if ((h({ isPressed: !1 }), c && (await c(...X)) === !1)) return !1;
      }),
      L = T(null),
      D = A(),
      _ = [],
      Z = J();
    return r(B, {
      id: i ?? D,
      children: r(Op, {
        animate: u,
        initial: !1,
        children: r(Ap, {
          value: Pp,
          children: r(l.div, {
            ...m,
            ...y,
            className: E(Bp, ..._, "framer-1vy0fer", s, d),
            "data-framer-name": "On",
            "data-highlight": !0,
            layoutDependency: k,
            layoutId: "ENhjXqhKQ",
            onTap: C,
            ref: t ?? L,
            style: {
              backgroundColor:
                "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              borderBottomLeftRadius: 23,
              borderBottomRightRadius: 23,
              borderTopLeftRadius: 23,
              borderTopRightRadius: 23,
              opacity: 1,
              ...n,
            },
            variants: {
              "qak4Jrj8b-hover": {
                backgroundColor:
                  "var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15))",
              },
              qak4Jrj8b: {
                backgroundColor:
                  "var(--token-b030a63b-659f-4465-829f-246a02e259cb, rgba(0, 0, 0, 0.1))",
                opacity: 0.5,
              },
            },
            ...Hp(
              {
                "qak4Jrj8b-hover": { "data-framer-name": void 0 },
                qak4Jrj8b: { "data-framer-name": "Off" },
              },
              p,
              b,
            ),
            children: r(jp, {
              className: "framer-1msww4x",
              layoutDependency: k,
              layoutId: "O3KPyo5SD",
              style: {
                backgroundColor:
                  "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
              },
              children: r(ee, {
                className: "framer-15mfwpw",
                "data-framer-name": "Arrow",
                layout: "position",
                layoutDependency: k,
                layoutId: "of6a2Ibja",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 10 5 C 10 5 6.318 0 5 0 C 3.682 0 0 5 0 5" transform="translate(7 9) rotate(90 5 2.5)" fill="transparent" stroke-width="2" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                svgContentId: 10240537936,
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Zp = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-5ra5u.framer-sme4nu, .framer-5ra5u .framer-sme4nu { display: block; }",
    ".framer-5ra5u.framer-1vy0fer { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: auto; }",
    ".framer-5ra5u .framer-1msww4x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 42px; z-index: 1; }",
    ".framer-5ra5u .framer-15mfwpw { flex: none; height: 24px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5ra5u.framer-1vy0fer, .framer-5ra5u .framer-1msww4x { gap: 0px; } .framer-5ra5u.framer-1vy0fer > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-5ra5u.framer-1vy0fer > :first-child { margin-left: 0px; } .framer-5ra5u.framer-1vy0fer > :last-child { margin-right: 0px; } .framer-5ra5u .framer-1msww4x > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-5ra5u .framer-1msww4x > :first-child { margin-top: 0px; } .framer-5ra5u .framer-1msww4x > :last-child { margin-bottom: 0px; } }",
    ".framer-5ra5u.framer-v-jjmk70.framer-1vy0fer { justify-content: flex-end; }",
  ],
  cr = q(Wp, Zp, "framer-5ra5u"),
  Qp = cr;
cr.displayName = "Toggle/NavArrow";
cr.defaultProps = { height: 42, width: 42 };
M(cr, {
  variant: {
    options: ["ENhjXqhKQ", "qak4Jrj8b"],
    optionTitles: ["On", "Off"],
    title: "Variant",
    type: x.Enum,
  },
  heeY2JMQ7: { title: "Tap A", type: x.EventHandler },
});
z(cr, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var Yp = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramermXMEBBjVa",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerIntrinsicWidth: "42",
        framerIntrinsicHeight: "42",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"qak4Jrj8b":{"layout":["auto","auto"]},"GPjDBubJY":{"layout":["auto","auto"]}}}',
        framerVariables: '{"heeY2JMQ7":"tapA"}',
        framerContractVersion: "1",
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var gu = {};
Ce(gu, { __FramerMetadata__: () => hu, default: () => uu });
var Jp = Y(Je),
  $p = Fe($),
  eu = Re($),
  tu = _e(l.div),
  ru = { bv_kvtKqT: { hover: !0 }, eZIUywzZC: { hover: !0 } },
  au = ["eZIUywzZC", "bv_kvtKqT"],
  ou = "framer-bCcj6",
  nu = { bv_kvtKqT: "framer-v-zww102", eZIUywzZC: "framer-v-v5q0ir" };
function Ha(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var iu = { damping: 28, delay: 0, mass: 1, stiffness: 170, type: "spring" },
  su = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  lu = l(F),
  fu = { Off: "bv_kvtKqT", On: "eZIUywzZC" },
  cu = ({ height: e, id: t, tap: o, tapA: a, width: n, ...s }) => {
    var i, f;
    return {
      ...s,
      ah1iEr8il: a ?? s.ah1iEr8il,
      K4FXNGAHE: o ?? s.K4FXNGAHE,
      variant:
        (f = (i = fu[s.variant]) !== null && i !== void 0 ? i : s.variant) !==
          null && f !== void 0
          ? f
          : "eZIUywzZC",
    };
  },
  mu = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  du = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        K4FXNGAHE: c,
        ah1iEr8il: m,
        ...p
      } = cu(e),
      {
        baseVariant: d,
        classNames: y,
        clearLoadingGesture: b,
        gestureHandlers: h,
        gestureVariant: w,
        isLoading: u,
        setGestureState: k,
        setVariant: g,
        variants: v,
      } = G({
        cycleOrder: au,
        defaultVariant: "eZIUywzZC",
        enabledGestures: ru,
        variant: f,
        variantClassNames: nu,
      }),
      C = mu(e, v),
      { activeVariantCallback: L, delay: D } = ne(d),
      _ = L(async (...te) => {
        if (
          (k({ isPressed: !1 }),
          (c && (await c(...te)) === !1) || (m && (await m(...te)) === !1))
        )
          return !1;
      }),
      Z = T(null),
      X = A(),
      H = [pe],
      K = J();
    return r(B, {
      id: i ?? X,
      children: r(lu, {
        animate: v,
        initial: !1,
        children: r(su, {
          value: iu,
          children: r(l.div, {
            ...p,
            ...h,
            className: E(ou, ...H, "framer-v5q0ir", s, y),
            "data-framer-name": "On",
            "data-highlight": !0,
            layoutDependency: C,
            layoutId: "eZIUywzZC",
            onTap: _,
            ref: t ?? Z,
            style: {
              backgroundColor:
                "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              ...n,
            },
            ...Ha(
              {
                "bv_kvtKqT-hover": { "data-framer-name": void 0 },
                "eZIUywzZC-hover": { "data-framer-name": void 0 },
                bv_kvtKqT: { "data-framer-name": "Off" },
              },
              d,
              w,
            ),
            children: I(tu, {
              className: "framer-vhwzac",
              layoutDependency: C,
              layoutId: "HWpukEn0k",
              children: [
                r(l.div, {
                  className: "framer-vmv02j",
                  layoutDependency: C,
                  layoutId: "lBsrkPoZH",
                  children: r(Q, {
                    children: r(l.div, {
                      className: "framer-1fdvxh5-container",
                      layoutDependency: C,
                      layoutId: "QuhAjQaJi-container",
                      children: r(Je, {
                        color:
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                        fill_tap:
                          "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                        fill: "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
                        height: "100%",
                        hover_color:
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                        hover_effect: !1,
                        id: "QuhAjQaJi",
                        layoutId: "QuhAjQaJi",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                r($p, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "Light",
                    }),
                  }),
                  className: "framer-vuyiu5",
                  fonts: ["Inter"],
                  layoutDependency: C,
                  layoutId: "jBbba1bAb",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...Ha(
                    {
                      bv_kvtKqT: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "Dark",
                          }),
                        }),
                      },
                    },
                    d,
                    w,
                  ),
                }),
                r(eu, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "\u6D45\u8272\u5916\u89C2",
                    }),
                  }),
                  className: "framer-1ans0pn",
                  fonts: ["Inter"],
                  layoutDependency: C,
                  layoutId: "aApVk0T8S",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...Ha(
                    {
                      bv_kvtKqT: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "\u6DF1\u8272\u5916\u89C2",
                          }),
                        }),
                      },
                    },
                    d,
                    w,
                  ),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  pu = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-bCcj6.framer-1geduup, .framer-bCcj6 .framer-1geduup { display: block; }",
    ".framer-bCcj6.framer-v5q0ir { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 83px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-bCcj6 .framer-vhwzac { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 20px 0px; position: relative; width: 100%; }",
    ".framer-bCcj6 .framer-vmv02j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 36px; }",
    ".framer-bCcj6 .framer-1fdvxh5-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-bCcj6 .framer-vuyiu5, .framer-bCcj6 .framer-1ans0pn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-bCcj6.framer-v5q0ir, .framer-bCcj6 .framer-vhwzac, .framer-bCcj6 .framer-vmv02j { gap: 0px; } .framer-bCcj6.framer-v5q0ir > *, .framer-bCcj6 .framer-vhwzac > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-bCcj6.framer-v5q0ir > :first-child, .framer-bCcj6 .framer-vhwzac > :first-child { margin-top: 0px; } .framer-bCcj6.framer-v5q0ir > :last-child, .framer-bCcj6 .framer-vhwzac > :last-child { margin-bottom: 0px; } .framer-bCcj6 .framer-vmv02j > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-bCcj6 .framer-vmv02j > :first-child { margin-left: 0px; } .framer-bCcj6 .framer-vmv02j > :last-child { margin-right: 0px; } }",
    ...de,
  ],
  mr = q(du, pu, "framer-bCcj6"),
  uu = mr;
mr.displayName = "Toggle/Theme";
mr.defaultProps = { height: 110.5, width: 83 };
M(mr, {
  variant: {
    options: ["eZIUywzZC", "bv_kvtKqT"],
    optionTitles: ["On", "Off"],
    title: "Variant",
    type: x.Enum,
  },
  K4FXNGAHE: { title: "Tap", type: x.EventHandler },
  ah1iEr8il: { title: "Tap A", type: x.EventHandler },
});
z(
  mr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...Jp,
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var hu = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerOa1j0sIpg",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "110.5",
        framerComponentViewportWidth: "true",
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerIntrinsicWidth: "83",
        framerContractVersion: "1",
        framerVariables: '{"K4FXNGAHE":"tap","ah1iEr8il":"tapA"}',
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"bv_kvtKqT":{"layout":["fixed","auto"]},"ektPKnAjP":{"layout":["fixed","auto"]},"TkQYv9WdQ":{"layout":["fixed","auto"]}}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var Du = {};
Ce(Du, { __FramerMetadata__: () => Uu, default: () => Vu });
var vu = _e(l.div),
  xu = { pB6nkQDjg: { hover: !0 } },
  bu = ["gAWvhOuby", "pB6nkQDjg"];
var wu = { gAWvhOuby: "framer-v-f0fdhc", pB6nkQDjg: "framer-v-10elm1r" };
function ku(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Cu = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var _u = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Fu = { Off: "pB6nkQDjg", On: "gAWvhOuby" },
  Ru = ({ height: e, id: t, tapA: o, width: a, ...n }) => {
    var s, i;
    return {
      ...n,
      heeY2JMQ7: o ?? n.heeY2JMQ7,
      variant:
        (i = (s = Fu[n.variant]) !== null && s !== void 0 ? s : n.variant) !==
          null && i !== void 0
          ? i
          : "gAWvhOuby",
    };
  },
  Su = (e, t) => t.join("-") + e.layoutDependency,
  Lu = N(function (e, t) {
    let { activeLocale: o } = O(),
      {
        style: a,
        className: n,
        layoutId: s,
        variant: i,
        heeY2JMQ7: f,
        ...c
      } = Ru(e),
      {
        baseVariant: m,
        classNames: p,
        gestureVariant: d,
        setGestureState: y,
        setVariant: b,
        transition: h,
        variants: w,
      } = G({
        cycleOrder: bu,
        defaultVariant: "gAWvhOuby",
        enabledGestures: xu,
        transitions: Cu,
        variant: i,
        variantClassNames: wu,
      }),
      u = Su(e, w),
      { activeVariantCallback: k, delay: g } = ne(m),
      v = k(async (..._) => {
        if (f && (await f(..._)) === !1) return !1;
      }),
      C = T(null),
      L = A(),
      D = [];
    return r(B, {
      id: s ?? L,
      children: r(l.div, {
        initial: i,
        animate: w,
        onHoverStart: () => y({ isHovered: !0 }),
        onHoverEnd: () => y({ isHovered: !1 }),
        onTapStart: () => y({ isPressed: !0 }),
        onTap: () => y({ isPressed: !1 }),
        onTapCancel: () => y({ isPressed: !1 }),
        className: E("framer-IGHT7", ...D, p),
        style: { display: "contents" },
        children: r(_u, {
          value: h,
          children: r(l.div, {
            ...c,
            className: E("framer-f0fdhc", n),
            "data-framer-name": "On",
            "data-highlight": !0,
            layoutDependency: u,
            layoutId: "gAWvhOuby",
            onTap: v,
            ref: t ?? C,
            style: {
              backgroundColor:
                "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              borderBottomLeftRadius: 23,
              borderBottomRightRadius: 23,
              borderTopLeftRadius: 23,
              borderTopRightRadius: 23,
              opacity: 1,
              ...a,
            },
            variants: {
              "pB6nkQDjg-hover": {
                backgroundColor:
                  "var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15))",
              },
              pB6nkQDjg: {
                backgroundColor:
                  "var(--token-b030a63b-659f-4465-829f-246a02e259cb, rgba(0, 0, 0, 0.1))",
                opacity: 0.5,
              },
            },
            ...ku(
              {
                "pB6nkQDjg-hover": { "data-framer-name": void 0 },
                pB6nkQDjg: { "data-framer-name": "Off" },
              },
              m,
              d,
            ),
            children: r(vu, {
              className: "framer-1x96o3h",
              layoutDependency: u,
              layoutId: "T8EQVZlSA",
              style: {
                backgroundColor:
                  "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
              },
              children: r(ee, {
                className: "framer-pkgqbi",
                "data-framer-name": "mouse_01",
                layout: "position",
                layoutDependency: u,
                layoutId: "EBICnXhfg",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 4.74 17.089 C 4.93 19.48 6.824 21.511 9.265 21.812 C 10.163 21.922 11.075 22 12 22 C 12.925 22 13.837 21.922 14.735 21.812 C 17.175 21.511 19.069 19.48 19.259 17.089 C 19.391 15.432 19.5 13.732 19.5 12 C 19.5 10.268 19.39 8.568 19.26 6.911 C 19.07 4.52 17.176 2.489 14.735 2.188 C 13.828 2.07 12.915 2.007 12 2 C 11.075 2 10.163 2.078 9.265 2.188 C 6.825 2.488 4.93 4.52 4.741 6.911 C 4.609 8.568 4.5 10.268 4.5 12 C 4.5 13.732 4.609 15.432 4.74 17.089 Z M 12 5 L 12 9" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                svgContentId: 135276226,
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Iu = [
    '.framer-IGHT7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-IGHT7 .framer-1vh31g5 { display: block; }",
    ".framer-IGHT7 .framer-f0fdhc { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-IGHT7 .framer-1x96o3h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 42px; z-index: 1; }",
    ".framer-IGHT7 .framer-pkgqbi { flex: none; height: 24px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-IGHT7 .framer-f0fdhc, .framer-IGHT7 .framer-1x96o3h { gap: 0px; } .framer-IGHT7 .framer-f0fdhc > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-IGHT7 .framer-f0fdhc > :first-child { margin-left: 0px; } .framer-IGHT7 .framer-f0fdhc > :last-child { margin-right: 0px; } .framer-IGHT7 .framer-1x96o3h > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-IGHT7 .framer-1x96o3h > :first-child { margin-top: 0px; } .framer-IGHT7 .framer-1x96o3h > :last-child { margin-bottom: 0px; } }",
    ".framer-IGHT7.framer-v-10elm1r .framer-f0fdhc { justify-content: flex-end; }",
  ],
  dr = q(Lu, Iu, "framer-IGHT7"),
  Vu = dr;
dr.displayName = "Toggle/Mouse";
dr.defaultProps = { height: 42, width: 42 };
M(dr, {
  variant: {
    options: ["gAWvhOuby", "pB6nkQDjg"],
    optionTitles: ["On", "Off"],
    title: "Variant",
    type: x.Enum,
  },
  heeY2JMQ7: { title: "Tap A", type: x.EventHandler },
});
z(dr, []);
var Uu = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerOmsoN6LDc",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "42",
        framerVariables: '{"heeY2JMQ7":"tapA"}',
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "42",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"pB6nkQDjg":{"layout":["auto","auto"]},"K_cqDoo1q":{"layout":["auto","auto"]}}}',
        framerContractVersion: "1",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var C0 = {};
Ce(C0, { __FramerMetadata__: () => k0, default: () => w0 });
var Pa = {};
Ce(Pa, { __FramerMetadata__: () => zu, default: () => Yr });
var Eu = _e(l.div),
  ju = Er(l.div),
  Mu = ["sFst8IwNF"],
  Nu = "framer-oqBO2",
  Bu = { sFst8IwNF: "framer-v-exfd8n" };
var qu = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var Hu = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Pu = ({ height: e, id: t, tap: o, tapA: a, width: n, ...s }) => ({
    ...s,
    bC9GUQM7W: a ?? s.bC9GUQM7W,
    U7qsjoadA: o ?? s.U7qsjoadA,
  }),
  Au = (e, t) => t.join("-") + e.layoutDependency,
  Ou = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        U7qsjoadA: c,
        bC9GUQM7W: m,
        ...p
      } = Pu(e),
      {
        baseVariant: d,
        classNames: y,
        gestureVariant: b,
        setGestureState: h,
        setVariant: w,
        transition: u,
        variants: k,
      } = G({
        cycleOrder: Mu,
        defaultVariant: "sFst8IwNF",
        transitions: qu,
        variant: f,
        variantClassNames: Bu,
      }),
      g = Au(e, k),
      { activeVariantCallback: v, delay: C } = ne(d),
      L = v(async (...X) => {
        if (
          (h({ isPressed: !1 }),
          (c && (await c(...X)) === !1) || (m && (await m(...X)) === !1))
        )
          return !1;
      }),
      D = T(null),
      _ = A();
    return r(B, {
      id: i ?? _,
      children: r(Hu, {
        value: u,
        children: r(ju, {
          ...p,
          animate: k,
          className: E(Nu, ...[], "framer-exfd8n", s, y),
          "data-framer-name": "Variant 1",
          "data-highlight": !0,
          initial: f,
          layoutDependency: g,
          layoutId: "sFst8IwNF",
          onHoverEnd: () => h({ isHovered: !1 }),
          onHoverStart: () => h({ isHovered: !0 }),
          onTap: L,
          onTapCancel: () => h({ isPressed: !1 }),
          onTapStart: () => h({ isPressed: !0 }),
          ref: t ?? D,
          style: { ...n },
          children: r(Eu, {
            className: "framer-sv6sil",
            layoutDependency: g,
            layoutId: "VMBLoH6jB",
            children: r(ee, {
              className: "framer-vz6ci2",
              "data-framer-name": "graphic",
              layout: "position",
              layoutDependency: g,
              layoutId: "AwzCMCvG3",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 5.999 19 L 12 5 L 12 5 L 17.999 19" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 8.5 15 L 15.5 15" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round"></path></svg>',
              svgContentId: 4168136687,
              withExternalLayout: !0,
            }),
          }),
        }),
      }),
    });
  }),
  Gu = [
    '.framer-oqBO2[data-border="true"]::after, .framer-oqBO2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-oqBO2.framer-sf0zwh, .framer-oqBO2 .framer-sf0zwh { display: block; }",
    ".framer-oqBO2.framer-exfd8n { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 42px; }",
    ".framer-oqBO2 .framer-sv6sil { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 42px; z-index: 1; }",
    ".framer-oqBO2 .framer-vz6ci2 { flex: none; height: 24px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-oqBO2.framer-exfd8n, .framer-oqBO2 .framer-sv6sil { gap: 0px; } .framer-oqBO2.framer-exfd8n > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-oqBO2.framer-exfd8n > :first-child { margin-left: 0px; } .framer-oqBO2.framer-exfd8n > :last-child { margin-right: 0px; } .framer-oqBO2 .framer-sv6sil > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-oqBO2 .framer-sv6sil > :first-child { margin-top: 0px; } .framer-oqBO2 .framer-sv6sil > :last-child { margin-bottom: 0px; } }",
  ],
  pr = q(Ou, Gu, "framer-oqBO2"),
  Yr = pr;
pr.displayName = "Button/En";
pr.defaultProps = { height: 42, width: 42 };
M(pr, {
  U7qsjoadA: { title: "Tap", type: x.EventHandler },
  bC9GUQM7W: { title: "Tap A", type: x.EventHandler },
});
z(pr, []);
var zu = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerBq2Ac4EKY",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "42",
        framerContractVersion: "1",
        framerIntrinsicWidth: "42",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}',
        framerVariables: '{"U7qsjoadA":"tap","bC9GUQM7W":"tapA"}',
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var Aa = {};
Ce(Aa, { __FramerMetadata__: () => a0, default: () => Kr });
var Wu = _e(l.div),
  Zu = ["vkaLybnx6"],
  Qu = "framer-cANkF",
  Yu = { vkaLybnx6: "framer-v-69ghkb" };
var Ku = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var Ju = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  $u = ({ height: e, id: t, tap: o, tapA: a, width: n, ...s }) => ({
    ...s,
    jKPG0MM0s: a ?? s.jKPG0MM0s,
    OjGOS3EcC: o ?? s.OjGOS3EcC,
  }),
  e0 = (e, t) => t.join("-") + e.layoutDependency,
  t0 = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        OjGOS3EcC: c,
        jKPG0MM0s: m,
        ...p
      } = $u(e),
      {
        baseVariant: d,
        classNames: y,
        gestureVariant: b,
        setGestureState: h,
        setVariant: w,
        transition: u,
        variants: k,
      } = G({
        cycleOrder: Zu,
        defaultVariant: "vkaLybnx6",
        transitions: Ku,
        variant: f,
        variantClassNames: Yu,
      }),
      g = e0(e, k),
      { activeVariantCallback: v, delay: C } = ne(d),
      L = v(async (...X) => {
        if (
          (h({ isPressed: !1 }),
          (c && (await c(...X)) === !1) || (m && (await m(...X)) === !1))
        )
          return !1;
      }),
      D = T(null),
      _ = A(),
      Z = [];
    return r(B, {
      id: i ?? _,
      children: r(Ju, {
        value: u,
        children: r(l.div, {
          ...p,
          animate: k,
          className: E(Qu, ...Z, "framer-69ghkb", s, y),
          "data-framer-name": "Variant 1",
          "data-highlight": !0,
          initial: f,
          layoutDependency: g,
          layoutId: "vkaLybnx6",
          onHoverEnd: () => h({ isHovered: !1 }),
          onHoverStart: () => h({ isHovered: !0 }),
          onTap: L,
          onTapCancel: () => h({ isPressed: !1 }),
          onTapStart: () => h({ isPressed: !0 }),
          ref: t ?? D,
          style: { ...n },
          children: r(Wu, {
            className: "framer-wdrrxy",
            layoutDependency: g,
            layoutId: "jTEaZ8k9P",
            children: r(ee, {
              className: "framer-fs0oxr",
              layout: "position",
              layoutDependency: g,
              layoutId: "I7HfBrlD8",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><path d="M 1.417 3.372 L 7.792 3.372 M 15.583 3.372 L 12.042 3.372 M 7.792 3.372 L 12.042 3.372 M 7.792 3.372 L 7.792 1.417 M 12.042 3.372 C 11.295 6.044 9.73 8.569 7.943 10.789 M 3.39 15.583 C 4.834 14.256 6.464 12.627 7.943 10.789 M 7.943 10.789 C 7.032 9.721 5.757 7.994 5.393 7.212 M 7.943 10.789 L 10.676 13.63" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
              svgContentId: 3560494259,
              withExternalLayout: !0,
            }),
          }),
        }),
      }),
    });
  }),
  r0 = [
    '.framer-cANkF[data-border="true"]::after, .framer-cANkF [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-cANkF.framer-1xi2tej, .framer-cANkF .framer-1xi2tej { display: block; }",
    ".framer-cANkF.framer-69ghkb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 42px; }",
    ".framer-cANkF .framer-wdrrxy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 42px; z-index: 1; }",
    ".framer-cANkF .framer-fs0oxr { flex: none; height: 17px; position: relative; width: 17px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-cANkF.framer-69ghkb, .framer-cANkF .framer-wdrrxy { gap: 0px; } .framer-cANkF.framer-69ghkb > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-cANkF.framer-69ghkb > :first-child { margin-left: 0px; } .framer-cANkF.framer-69ghkb > :last-child { margin-right: 0px; } .framer-cANkF .framer-wdrrxy > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-cANkF .framer-wdrrxy > :first-child { margin-top: 0px; } .framer-cANkF .framer-wdrrxy > :last-child { margin-bottom: 0px; } }",
  ],
  ur = q(t0, r0, "framer-cANkF"),
  Kr = ur;
ur.displayName = "Button/Chn";
ur.defaultProps = { height: 42, width: 42 };
M(ur, {
  OjGOS3EcC: { title: "Tap", type: x.EventHandler },
  jKPG0MM0s: { title: "Tap A", type: x.EventHandler },
});
z(ur, []);
var a0 = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramergG6yuTG7K",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerIntrinsicHeight: "42",
        framerDisplayContentsDiv: "false",
        framerIntrinsicWidth: "42",
        framerVariables: '{"OjGOS3EcC":"tap","jKPG0MM0s":"tapA"}',
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var n0 = Y(Yr),
  i0 = Ve(Er(Yr), Pa),
  s0 = Y(Kr),
  l0 = Ve(Fo(Kr), Aa),
  f0 = { ga7hYCsOt: { hover: !0 }, TqwEABpNd: { pressed: !0 } },
  c0 = ["TqwEABpNd", "ga7hYCsOt"],
  m0 = "framer-baBzy",
  d0 = { ga7hYCsOt: "framer-v-1dgfksk", TqwEABpNd: "framer-v-1stm5l9" };
function p0(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var u0 = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var h0 = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  g0 = { Chn: "ga7hYCsOt", En: "TqwEABpNd" },
  y0 = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = g0[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "TqwEABpNd",
    };
  },
  v0 = (e, t) => t.join("-") + e.layoutDependency,
  x0 = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = y0(e),
      {
        baseVariant: m,
        classNames: p,
        gestureVariant: d,
        setGestureState: y,
        setVariant: b,
        transition: h,
        variants: w,
      } = G({
        cycleOrder: c0,
        defaultVariant: "TqwEABpNd",
        enabledGestures: f0,
        transitions: u0,
        variant: f,
        variantClassNames: d0,
      }),
      u = v0(e, w),
      { activeVariantCallback: k, delay: g } = ne(m),
      v = k(async (...Z) => {
        b("TqwEABpNd");
      }),
      C = k(async (...Z) => {
        b("ga7hYCsOt");
      }),
      L = T(null),
      D = A(),
      _ = [];
    return r(B, {
      id: i ?? D,
      children: r(h0, {
        value: h,
        children: I(l.div, {
          ...c,
          animate: w,
          className: E(m0, ..._, "framer-1stm5l9", s, p),
          "data-framer-name": "En",
          initial: f,
          layoutDependency: u,
          layoutId: "TqwEABpNd",
          onHoverEnd: () => y({ isHovered: !1 }),
          onHoverStart: () => y({ isHovered: !0 }),
          onTap: () => y({ isPressed: !1 }),
          onTapCancel: () => y({ isPressed: !1 }),
          onTapStart: () => y({ isPressed: !0 }),
          ref: t ?? L,
          style: {
            backgroundColor:
              "var(--token-f940326c-dd8d-431e-94df-2f567f90411e, rgba(0, 0, 0, 0.05))",
            borderBottomLeftRadius: 42,
            borderBottomRightRadius: 42,
            borderTopLeftRadius: 42,
            borderTopRightRadius: 42,
            ...n,
          },
          variants: {
            "ga7hYCsOt-hover": {
              backgroundColor:
                "var(--token-b030a63b-659f-4465-829f-246a02e259cb, rgba(0, 0, 0, 0.1))",
            },
            "TqwEABpNd-pressed": {
              backgroundColor:
                "var(--token-b030a63b-659f-4465-829f-246a02e259cb, rgba(0, 0, 0, 0.1))",
            },
          },
          ...p0(
            {
              "ga7hYCsOt-hover": { "data-framer-name": void 0 },
              "TqwEABpNd-pressed": { "data-framer-name": void 0 },
              ga7hYCsOt: { "data-framer-name": "Chn" },
            },
            m,
            d,
          ),
          children: [
            r(l.div, {
              className: "framer-mv81pp",
              layoutDependency: u,
              layoutId: "InDkpe0Bo",
              style: {
                backgroundColor:
                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                borderBottomLeftRadius: 21,
                borderBottomRightRadius: 21,
                borderTopLeftRadius: 21,
                borderTopRightRadius: 21,
              },
            }),
            r(l.div, {
              className: "framer-1f3dcm6-container",
              layoutDependency: u,
              layoutId: "KA0rIVtmc-container",
              style: { opacity: 1 },
              variants: { ga7hYCsOt: { opacity: 0.3 } },
              children: r(i0, {
                bC9GUQM7W: v,
                height: "100%",
                id: "KA0rIVtmc",
                layoutId: "KA0rIVtmc",
                style: { height: "100%", width: "100%" },
                width: "100%",
              }),
            }),
            r(l.div, {
              className: "framer-mocj15-container",
              layoutDependency: u,
              layoutId: "o2qJ79ixs-container",
              style: { opacity: 0.3 },
              variants: {
                "ga7hYCsOt-hover": { opacity: 1 },
                ga7hYCsOt: { opacity: 1 },
              },
              children: r(l0, {
                height: "100%",
                id: "o2qJ79ixs",
                jKPG0MM0s: C,
                layoutId: "o2qJ79ixs",
                style: { height: "100%", width: "100%" },
                width: "100%",
              }),
            }),
          ],
        }),
      }),
    });
  }),
  b0 = [
    '.framer-baBzy[data-border="true"]::after, .framer-baBzy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-baBzy.framer-1cxkqme, .framer-baBzy .framer-1cxkqme { display: block; }",
    ".framer-baBzy.framer-1stm5l9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 42px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-baBzy .framer-mv81pp { bottom: 4px; flex: none; left: 4px; overflow: hidden; position: absolute; top: 4px; width: 34px; will-change: var(--framer-will-change-override, transform); z-index: 0; }",
    ".framer-baBzy .framer-1f3dcm6-container, .framer-baBzy .framer-mocj15-container { flex: none; height: 42px; position: relative; width: 42px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-baBzy.framer-1stm5l9 { gap: 0px; } .framer-baBzy.framer-1stm5l9 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-baBzy.framer-1stm5l9 > :first-child { margin-left: 0px; } .framer-baBzy.framer-1stm5l9 > :last-child { margin-right: 0px; } }",
    ".framer-baBzy.framer-v-1dgfksk .framer-mv81pp { left: unset; right: 4px; }",
    ".framer-baBzy.framer-v-1dgfksk.hover .framer-mv81pp { left: unset; }",
  ],
  hr = q(x0, b0, "framer-baBzy"),
  w0 = hr;
hr.displayName = "Toggle/BlogLanguageSwitcher";
hr.defaultProps = { height: 42, width: 84 };
M(hr, {
  variant: {
    options: ["TqwEABpNd", "ga7hYCsOt"],
    optionTitles: ["En", "Chn"],
    title: "Variant",
    type: x.Enum,
  },
});
z(hr, [...n0, ...s0]);
var k0 = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerPQwe3R4AL",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "42",
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","fixed"]},"ga7hYCsOt":{"layout":["auto","fixed"]},"EvOuf9zjT":{"layout":["auto","fixed"]},"BoSflDHd0":{"layout":["auto","fixed"]}}}',
        framerContractVersion: "1",
        framerIntrinsicWidth: "84",
        framerDisplayContentsDiv: "false",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
ue.loadFonts(["FS;Cabinet Grotesk-bold", "FS;Cabinet Grotesk-black"]);
var X3 = [
    {
      family: "Cabinet Grotesk",
      style: "normal",
      url: "https://framerusercontent.com/third-party-assets/fontshare/wf/XMXWOHABYLQDJ42L65EFRYNVRY37HQCB/B2O4O6V3JMFM2WDCYQI3A47L5U4THDUL/WN5274VQ3AUBDFP74GB4EC4XYJ3EKVNE.woff2",
      weight: "700",
    },
    {
      family: "Cabinet Grotesk",
      style: "normal",
      url: "https://framerusercontent.com/third-party-assets/fontshare/wf/54BYDK52GK4J6SPDN2E656FIZHUETKL3/ACYE4XDNEUAHIOQEOGPYPDVAVDI5P67Q/TZVUWRP4UW5PEJWBLXHG5VVGPODI2WLC.woff2",
      weight: "900",
    },
  ],
  W3 = [
    '.framer-EFUan .framer-styles-preset-1jzss2t:not(.rich-text-wrapper), .framer-EFUan .framer-styles-preset-1jzss2t.rich-text-wrapper h2 { --framer-font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Cabinet Grotesk", sans-serif; --framer-font-size: 86px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1599px) and (min-width: 1200px) { .framer-EFUan .framer-styles-preset-1jzss2t:not(.rich-text-wrapper), .framer-EFUan .framer-styles-preset-1jzss2t.rich-text-wrapper h2 { --framer-font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Cabinet Grotesk", sans-serif; --framer-font-size: 69px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-EFUan .framer-styles-preset-1jzss2t:not(.rich-text-wrapper), .framer-EFUan .framer-styles-preset-1jzss2t.rich-text-wrapper h2 { --framer-font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Cabinet Grotesk", sans-serif; --framer-font-size: 55px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-EFUan .framer-styles-preset-1jzss2t:not(.rich-text-wrapper), .framer-EFUan .framer-styles-preset-1jzss2t.rich-text-wrapper h2 { --framer-font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Cabinet Grotesk", sans-serif; --framer-font-size: 46px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  Z3 = "framer-EFUan";
var K3 = {
    HKlErOHWQ: {
      borderRadius: 15,
      bottomLeftRadius: 15,
      bottomRightRadius: 15,
      darkTheme: "framerDark",
      font: {
        fontFamily: '"Fragment Mono", monospace',
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        letterSpacing: "0em",
        lineHeight: "1.5em",
      },
      isMixedBorderRadius: !1,
      lightTheme: "framerLight",
      padding: 30,
      paddingBottom: 30,
      paddingLeft: 30,
      paddingPerSide: !1,
      paddingRight: 30,
      paddingTop: 30,
      theme: "framerDark",
      themeMode: "Static",
      topLeftRadius: 15,
      topRightRadius: 15,
    },
    J4SZ0W0SK: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderRadius: 0,
      bottomLeftRadius: 0,
      bottomRightRadius: 0,
      isMixedBorderRadius: !1,
      topLeftRadius: 0,
      topRightRadius: 0,
    },
    R2sRbbYzf: {
      borderRadius: 0,
      bottomLeftRadius: 0,
      bottomRightRadius: 0,
      isMixedBorderRadius: !1,
      isRed: !0,
      topLeftRadius: 0,
      topRightRadius: 0,
    },
  },
  J3 = {
    HKlErOHWQ: [
      {
        explicitInter: !0,
        fonts: [
          {
            family: "Fragment Mono",
            source: "google",
            style: "normal",
            url: "https://fonts.gstatic.com/s/fragmentmono/v4/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2",
            weight: "400",
          },
        ],
      },
    ],
  };
ue.loadFonts([
  "FS;Satoshi-medium",
  "FS;Satoshi-bold",
  "FS;Satoshi-bold italic",
  "FS;Satoshi-medium italic",
]);
var r6 = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2",
          weight: "500",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2",
          weight: "500",
        },
      ],
    },
  ],
  a6 = [
    '.framer-vmWND .framer-styles-preset-1v9m5cz:not(.rich-text-wrapper), .framer-vmWND .framer-styles-preset-1v9m5cz.rich-text-wrapper h6 { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1599px) and (min-width: 1200px) { .framer-vmWND .framer-styles-preset-1v9m5cz:not(.rich-text-wrapper), .framer-vmWND .framer-styles-preset-1v9m5cz.rich-text-wrapper h6 { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-vmWND .framer-styles-preset-1v9m5cz:not(.rich-text-wrapper), .framer-vmWND .framer-styles-preset-1v9m5cz.rich-text-wrapper h6 { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-vmWND .framer-styles-preset-1v9m5cz:not(.rich-text-wrapper), .framer-vmWND .framer-styles-preset-1v9m5cz.rich-text-wrapper h6 { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  o6 = "framer-vmWND";
ue.loadWebFontsFromSelectors([
  "FS;Cabinet Grotesk-bold",
  "FS;Cabinet Grotesk-black",
]);
var l6 = [
    {
      family: "Cabinet Grotesk",
      style: "normal",
      url: "https://framerusercontent.com/third-party-assets/fontshare/wf/XMXWOHABYLQDJ42L65EFRYNVRY37HQCB/B2O4O6V3JMFM2WDCYQI3A47L5U4THDUL/WN5274VQ3AUBDFP74GB4EC4XYJ3EKVNE.woff2",
      weight: "700",
    },
    {
      family: "Cabinet Grotesk",
      style: "normal",
      url: "https://framerusercontent.com/third-party-assets/fontshare/wf/54BYDK52GK4J6SPDN2E656FIZHUETKL3/ACYE4XDNEUAHIOQEOGPYPDVAVDI5P67Q/TZVUWRP4UW5PEJWBLXHG5VVGPODI2WLC.woff2",
      weight: "900",
    },
  ],
  f6 = [
    '.framer-qpIJM .framer-styles-preset-13b00jl:not(.rich-text-wrapper), .framer-qpIJM .framer-styles-preset-13b00jl.rich-text-wrapper h1 { --framer-font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Cabinet Grotesk", sans-serif; --framer-font-size: 72px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1599px) and (min-width: 1200px) { .framer-qpIJM .framer-styles-preset-13b00jl:not(.rich-text-wrapper), .framer-qpIJM .framer-styles-preset-13b00jl.rich-text-wrapper h1 { --framer-font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Cabinet Grotesk", sans-serif; --framer-font-size: 72px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-qpIJM .framer-styles-preset-13b00jl:not(.rich-text-wrapper), .framer-qpIJM .framer-styles-preset-13b00jl.rich-text-wrapper h1 { --framer-font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Cabinet Grotesk", sans-serif; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-qpIJM .framer-styles-preset-13b00jl:not(.rich-text-wrapper), .framer-qpIJM .framer-styles-preset-13b00jl.rich-text-wrapper h1 { --framer-font-family: "Cabinet Grotesk", "Cabinet Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Cabinet Grotesk", sans-serif; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-letter-spacing: -0.01em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000); --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  c6 = "framer-qpIJM";
ue.loadFonts([]);
var u6 = [{ explicitInter: !0, fonts: [] }],
  h6 = [".framer-FjV9b .framer-styles-preset-cgjq4j {  }"],
  g6 = "framer-FjV9b";
ue.loadWebFontsFromSelectors(["GF;Fragment Mono-regular"]);
var b6 = [
    {
      family: "Fragment Mono",
      style: "normal",
      url: "https://fonts.gstatic.com/s/fragmentmono/v4/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2",
      weight: "400",
    },
  ],
  w6 = [
    '.framer-DGKjk .framer-styles-preset-cfixqb { --framer-code-font-family: "Fragment Mono", monospace; --framer-code-font-style: normal; --framer-code-font-weight: 400; --framer-code-text-color: #333; --framer-font-size-scale: 1; background-color: rgba(0, 0, 0, 0.1); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; padding-bottom: 0.1em; padding-left: 0.2em; padding-right: 0.2em; padding-top: 0.1em; }',
  ],
  k6 = "framer-DGKjk";
var _0 = Ur(l.div),
  F0 = {
    cXCN9WRZT: { hover: !0 },
    i6gOtX9HJ: { hover: !0 },
    Mkh7UlvuR: { hover: !0 },
    W9L1UXgGB: { hover: !0 },
    YjQoYvLeA: { hover: !0 },
  },
  R0 = ["i6gOtX9HJ", "cXCN9WRZT", "Mkh7UlvuR", "W9L1UXgGB", "YjQoYvLeA"],
  S0 = "framer-VW29r",
  L0 = {
    cXCN9WRZT: "framer-v-tkh6u4",
    i6gOtX9HJ: "framer-v-a3t8h1",
    Mkh7UlvuR: "framer-v-1278h8c",
    W9L1UXgGB: "framer-v-1iwkyl2",
    YjQoYvLeA: "framer-v-2j2kif",
  };
function ln(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var I0 = { delay: 0, duration: 0.15, ease: [0.44, 0, 0.56, 1], type: "tween" },
  V0 = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  U0 = l(F),
  D0 = {
    AlwaysDark: "YjQoYvLeA",
    AlwaysLight: "W9L1UXgGB",
    Dark: "Mkh7UlvuR",
    Default: "i6gOtX9HJ",
    Light: "cXCN9WRZT",
  },
  T0 = ({ height: e, icon: t, id: o, tap: a, title: n, width: s, ...i }) => {
    var f, c, m;
    return {
      ...i,
      bXvdJ35Ta: t ?? i.bXvdJ35Ta,
      Hvlqu31z4: a ?? i.Hvlqu31z4,
      variant:
        (c = (f = D0[i.variant]) !== null && f !== void 0 ? f : i.variant) !==
          null && c !== void 0
          ? c
          : "i6gOtX9HJ",
      xH050kkag: (m = n ?? i.xH050kkag) !== null && m !== void 0 ? m : "Home",
    };
  },
  E0 = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  j0 = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        xH050kkag: c,
        bXvdJ35Ta: m,
        Hvlqu31z4: p,
        ...d
      } = T0(e),
      {
        baseVariant: y,
        classNames: b,
        clearLoadingGesture: h,
        gestureHandlers: w,
        gestureVariant: u,
        isLoading: k,
        setGestureState: g,
        setVariant: v,
        variants: C,
      } = G({
        cycleOrder: R0,
        defaultVariant: "i6gOtX9HJ",
        enabledGestures: F0,
        variant: f,
        variantClassNames: L0,
      }),
      L = E0(e, C),
      { activeVariantCallback: D, delay: _ } = ne(y),
      Z = D(async (...le) => {
        if ((g({ isPressed: !1 }), p && (await p(...le)) === !1)) return !1;
      }),
      X = T(null),
      H = A(),
      K = [St],
      te = J();
    return r(B, {
      id: i ?? H,
      children: r(U0, {
        animate: C,
        initial: !1,
        children: r(V0, {
          value: I0,
          children: I(l.div, {
            ...d,
            ...w,
            className: E(S0, ...K, "framer-a3t8h1", s, b),
            "data-framer-name": "Default",
            "data-highlight": !0,
            layoutDependency: L,
            layoutId: "i6gOtX9HJ",
            onTap: Z,
            ref: t ?? X,
            style: {
              backgroundColor:
                "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
              borderBottomLeftRadius: 42,
              borderBottomRightRadius: 42,
              borderTopLeftRadius: 42,
              borderTopRightRadius: 42,
              ...n,
            },
            variants: {
              "cXCN9WRZT-hover": {
                backgroundColor:
                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              },
              "i6gOtX9HJ-hover": {
                backgroundColor:
                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              },
              "Mkh7UlvuR-hover": {
                backgroundColor:
                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              },
              "W9L1UXgGB-hover": {
                backgroundColor:
                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              },
              "YjQoYvLeA-hover": {
                backgroundColor:
                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              },
            },
            ...ln(
              {
                "cXCN9WRZT-hover": { "data-framer-name": void 0 },
                "i6gOtX9HJ-hover": { "data-framer-name": void 0 },
                "Mkh7UlvuR-hover": { "data-framer-name": void 0 },
                "W9L1UXgGB-hover": { "data-framer-name": void 0 },
                "YjQoYvLeA-hover": { "data-framer-name": void 0 },
                cXCN9WRZT: { "data-framer-name": "Light" },
                Mkh7UlvuR: { "data-framer-name": "Dark" },
                W9L1UXgGB: { "data-framer-name": "AlwaysLight" },
                YjQoYvLeA: { "data-framer-name": "AlwaysDark" },
              },
              y,
              u,
            ),
            children: [
              r(_0, {
                className: "framer-1m2szhh",
                layoutDependency: L,
                layoutId: "xx89IsKBg",
                children: r($, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-p7pc09",
                      "data-styles-preset": "hCbgbtQ8_",
                      children: "Home",
                    }),
                  }),
                  className: "framer-1ch8mrs",
                  fonts: ["Inter"],
                  layoutDependency: L,
                  layoutId: "Uk8woBeN2",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  text: c,
                  variants: {
                    cXCN9WRZT: {
                      "--extracted-r6o4lv":
                        "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                    },
                    Mkh7UlvuR: {
                      "--extracted-r6o4lv":
                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    },
                    W9L1UXgGB: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                    YjQoYvLeA: { "--extracted-r6o4lv": "rgb(0, 0, 0)" },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...ln(
                    {
                      "cXCN9WRZT-hover": {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            children: "Home",
                          }),
                        }),
                      },
                      "Mkh7UlvuR-hover": {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            children: "Home",
                          }),
                        }),
                      },
                      "W9L1UXgGB-hover": {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            children: "Home",
                          }),
                        }),
                      },
                      "YjQoYvLeA-hover": {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            children: "Home",
                          }),
                        }),
                      },
                      cXCN9WRZT: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                            },
                            children: "Home",
                          }),
                        }),
                      },
                      Mkh7UlvuR: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                            },
                            children: "Home",
                          }),
                        }),
                      },
                      W9L1UXgGB: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children: "Home",
                          }),
                        }),
                      },
                      YjQoYvLeA: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-p7pc09",
                            "data-styles-preset": "hCbgbtQ8_",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(0, 0, 0))",
                            },
                            children: "Home",
                          }),
                        }),
                      },
                    },
                    y,
                    u,
                  ),
                }),
              }),
              m &&
                r(l.div, {
                  className: "framer-8eyt6p",
                  layoutDependency: L,
                  layoutId: "BNSPZecy9",
                  children: r(ee, {
                    className: "framer-l0deea",
                    "data-framer-name": "arrow_up_right_01_round",
                    layout: "position",
                    layoutDependency: L,
                    layoutId: "gt81IP3hX",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 17 7 L 6 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 11 6.132 C 11 6.132 16.634 5.657 17.488 6.512 C 18.343 7.366 17.868 13 17.868 13" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 9795536454,
                    withExternalLayout: !0,
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  M0 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-VW29r.framer-2p9abb, .framer-VW29r .framer-2p9abb { display: block; }",
    ".framer-VW29r.framer-a3t8h1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-VW29r .framer-1m2szhh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; width: min-content; }",
    ".framer-VW29r .framer-1ch8mrs { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-VW29r .framer-8eyt6p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-VW29r .framer-l0deea { flex: none; height: 24px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-VW29r.framer-a3t8h1, .framer-VW29r .framer-1m2szhh, .framer-VW29r .framer-8eyt6p { gap: 0px; } .framer-VW29r.framer-a3t8h1 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-VW29r.framer-a3t8h1 > :first-child, .framer-VW29r .framer-1m2szhh > :first-child, .framer-VW29r .framer-8eyt6p > :first-child { margin-left: 0px; } .framer-VW29r.framer-a3t8h1 > :last-child, .framer-VW29r .framer-1m2szhh > :last-child, .framer-VW29r .framer-8eyt6p > :last-child { margin-right: 0px; } .framer-VW29r .framer-1m2szhh > *, .framer-VW29r .framer-8eyt6p > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ...Rt,
  ],
  gr = q(j0, M0, "framer-VW29r"),
  Oa = gr;
gr.displayName = "Button/Navigation";
gr.defaultProps = { height: 43, width: 91.5 };
M(gr, {
  variant: {
    options: ["i6gOtX9HJ", "cXCN9WRZT", "Mkh7UlvuR", "W9L1UXgGB", "YjQoYvLeA"],
    optionTitles: ["Default", "Light", "Dark", "AlwaysLight", "AlwaysDark"],
    title: "Variant",
    type: x.Enum,
  },
  xH050kkag: {
    defaultValue: "Home",
    displayTextArea: !1,
    title: "Title",
    type: x.String,
  },
  bXvdJ35Ta: { defaultValue: !1, title: "Icon", type: x.Boolean },
  Hvlqu31z4: { title: "Tap", type: x.EventHandler },
});
z(
  gr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...se(Ft),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var N0 = Ur(l.div),
  B0 = {
    aM0A7zdP1: { hover: !0 },
    DmXzJF2F9: { hover: !0 },
    lDL6Zr7FT: { hover: !0 },
    tYRaSyaz0: { hover: !0 },
    YT72_wyAg: { hover: !0 },
  },
  q0 = ["lDL6Zr7FT", "tYRaSyaz0", "DmXzJF2F9", "aM0A7zdP1", "YT72_wyAg"],
  H0 = "framer-PGgl2",
  P0 = {
    aM0A7zdP1: "framer-v-17aa9yg",
    DmXzJF2F9: "framer-v-4rnnaw",
    lDL6Zr7FT: "framer-v-7n3ffy",
    tYRaSyaz0: "framer-v-yqcdny",
    YT72_wyAg: "framer-v-1m326ae",
  };
function fn(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var A0 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  O0 = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  G0 = l(F),
  z0 = {
    AlwaysDark: "aM0A7zdP1",
    AlwaysLight: "YT72_wyAg",
    Dark: "tYRaSyaz0",
    Default: "lDL6Zr7FT",
    Light: "DmXzJF2F9",
  },
  X0 = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = z0[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "lDL6Zr7FT",
    };
  },
  W0 = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Z0 = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = X0(e),
      {
        baseVariant: m,
        classNames: p,
        clearLoadingGesture: d,
        gestureHandlers: y,
        gestureVariant: b,
        isLoading: h,
        setGestureState: w,
        setVariant: u,
        variants: k,
      } = G({
        cycleOrder: q0,
        defaultVariant: "lDL6Zr7FT",
        enabledGestures: B0,
        variant: f,
        variantClassNames: P0,
      }),
      g = W0(e, k),
      v = T(null),
      C = A(),
      L = [],
      D = J();
    return r(B, {
      id: i ?? C,
      children: r(G0, {
        animate: k,
        initial: !1,
        children: r(O0, {
          value: A0,
          children: r(N0, {
            ...c,
            ...y,
            className: E(H0, ...L, "framer-7n3ffy", s, p),
            "data-framer-name": "Default",
            layoutDependency: g,
            layoutId: "lDL6Zr7FT",
            ref: t ?? v,
            style: {
              backgroundColor:
                "var(--token-b7850564-586d-46b0-98d2-820c4ec87b3f, rgba(255, 255, 255, 0))",
              borderBottomLeftRadius: 42,
              borderBottomRightRadius: 42,
              borderTopLeftRadius: 42,
              borderTopRightRadius: 42,
              ...n,
            },
            variants: {
              "aM0A7zdP1-hover": {
                backgroundColor:
                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              },
              "DmXzJF2F9-hover": {
                backgroundColor:
                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              },
              "lDL6Zr7FT-hover": {
                backgroundColor:
                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              },
              "tYRaSyaz0-hover": {
                backgroundColor:
                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              },
              "YT72_wyAg-hover": {
                backgroundColor:
                  "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              },
            },
            ...fn(
              {
                "aM0A7zdP1-hover": { "data-framer-name": void 0 },
                "DmXzJF2F9-hover": { "data-framer-name": void 0 },
                "lDL6Zr7FT-hover": { "data-framer-name": void 0 },
                "tYRaSyaz0-hover": { "data-framer-name": void 0 },
                "YT72_wyAg-hover": { "data-framer-name": void 0 },
                aM0A7zdP1: { "data-framer-name": "AlwaysDark" },
                DmXzJF2F9: { "data-framer-name": "Light" },
                tYRaSyaz0: { "data-framer-name": "Dark" },
                YT72_wyAg: { "data-framer-name": "AlwaysLight" },
              },
              m,
              b,
            ),
            children: r(ee, {
              className: "framer-1x15cog",
              "data-framer-name": "graphic",
              layout: "position",
              layoutDependency: g,
              layoutId: "KoYi9xzNt",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 22 12 C 22 6.477 17.523 2 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 12.242 17 L 12.242 12 C 12.242 11.529 12.242 11.293 12.096 11.146 C 11.949 11 11.714 11 11.242 11" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 11.992 8 L 12.001 8" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
              svgContentId: 12275862668,
              withExternalLayout: !0,
              ...fn(
                {
                  "aM0A7zdP1-hover": {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 22 12 C 22 6.477 17.523 2 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 Z" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 12.242 17 L 12.242 12 C 12.242 11.529 12.242 11.293 12.096 11.146 C 11.949 11 11.714 11 11.242 11" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 11.992 8 L 12.001 8" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 10289172875,
                  },
                  "DmXzJF2F9-hover": {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 22 12 C 22 6.477 17.523 2 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 12.242 17 L 12.242 12 C 12.242 11.529 12.242 11.293 12.096 11.146 C 11.949 11 11.714 11 11.242 11" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 11.992 8 L 12.001 8" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 12275862668,
                  },
                  "YT72_wyAg-hover": {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 22 12 C 22 6.477 17.523 2 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 12.242 17 L 12.242 12 C 12.242 11.529 12.242 11.293 12.096 11.146 C 11.949 11 11.714 11 11.242 11" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 11.992 8 L 12.001 8" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 9403523907,
                  },
                  aM0A7zdP1: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 22 12 C 22 6.477 17.523 2 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 Z" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 12.242 17 L 12.242 12 C 12.242 11.529 12.242 11.293 12.096 11.146 C 11.949 11 11.714 11 11.242 11" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 11.992 8 L 12.001 8" fill="transparent" stroke-width="1.8" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 10003805782,
                  },
                  DmXzJF2F9: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 22 12 C 22 6.477 17.523 2 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 12.242 17 L 12.242 12 C 12.242 11.529 12.242 11.293 12.096 11.146 C 11.949 11 11.714 11 11.242 11" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 11.992 8 L 12.001 8" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 11551060819,
                  },
                  YT72_wyAg: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 22 12 C 22 6.477 17.523 2 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 Z" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 12.242 17 L 12.242 12 C 12.242 11.529 12.242 11.293 12.096 11.146 C 11.949 11 11.714 11 11.242 11" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 11.992 8 L 12.001 8" fill="transparent" stroke-width="1.8" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                    svgContentId: 11247666126,
                  },
                },
                m,
                b,
              ),
            }),
          }),
        }),
      }),
    });
  }),
  Q0 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-PGgl2.framer-rcqyz4, .framer-PGgl2 .framer-rcqyz4 { display: block; }",
    ".framer-PGgl2.framer-7n3ffy { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 42px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-PGgl2 .framer-1x15cog { flex: none; height: 24px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PGgl2.framer-7n3ffy { gap: 0px; } .framer-PGgl2.framer-7n3ffy > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-PGgl2.framer-7n3ffy > :first-child { margin-left: 0px; } .framer-PGgl2.framer-7n3ffy > :last-child { margin-right: 0px; } }",
  ],
  yr = q(Z0, Q0, "framer-PGgl2"),
  Ga = yr;
yr.displayName = "Button/Info";
yr.defaultProps = { height: 42, width: 42 };
M(yr, {
  variant: {
    options: ["lDL6Zr7FT", "tYRaSyaz0", "DmXzJF2F9", "aM0A7zdP1", "YT72_wyAg"],
    optionTitles: ["Default", "Dark", "Light", "AlwaysDark", "AlwaysLight"],
    title: "Variant",
    type: x.Enum,
  },
});
z(yr, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var Y0 = Y(Oa),
  cn = ko(l.div),
  K0 = Y(Ga),
  J0 = ["V8QTxROtH", "lzwti0GI_"],
  $0 = "framer-gsSET",
  eh = { lzwti0GI_: "framer-v-rhamlg", V8QTxROtH: "framer-v-6tp6u8" };
function za(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var th = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  rh = (e) => !e,
  ah = (e, t) => {
    switch (e) {
      case "wdICwFIgU":
        return "i6gOtX9HJ";
      case "S8mq6sovg":
        return "cXCN9WRZT";
      case "aIDTqiHqQ":
        return "Mkh7UlvuR";
      case "AEum8CP0M":
        return "W9L1UXgGB";
      case "ejAMXCAdb":
        return "YjQoYvLeA";
      default:
        return "i6gOtX9HJ";
    }
  },
  oh = (e, t) => {
    switch (e) {
      case "GeY2IKYyS":
        return "i6gOtX9HJ";
      case "Gcziwg30w":
        return "cXCN9WRZT";
      case "prx67ksiV":
        return "Mkh7UlvuR";
      case "FaGOMwRAP":
        return "W9L1UXgGB";
      case "nlGtyJrl_":
        return "YjQoYvLeA";
      default:
        return "i6gOtX9HJ";
    }
  },
  nh = (e, t) => {
    switch (e) {
      case "wdICwFIgU":
        return "lDL6Zr7FT";
      case "S8mq6sovg":
        return "DmXzJF2F9";
      case "aIDTqiHqQ":
        return "tYRaSyaz0";
      case "AEum8CP0M":
        return "YT72_wyAg";
      case "ejAMXCAdb":
        return "aM0A7zdP1";
      default:
        return "lDL6Zr7FT";
    }
  },
  ih = (e, t) => {
    switch (e) {
      case "GeY2IKYyS":
        return "lDL6Zr7FT";
      case "Gcziwg30w":
        return "DmXzJF2F9";
      case "prx67ksiV":
        return "tYRaSyaz0";
      case "FaGOMwRAP":
        return "YT72_wyAg";
      case "nlGtyJrl_":
        return "aM0A7zdP1";
      default:
        return "lDL6Zr7FT";
    }
  },
  sh = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  lh = l(F),
  fh = {
    AlwaysDark: "ejAMXCAdb",
    AlwaysLight: "AEum8CP0M",
    Dark: "aIDTqiHqQ",
    Default: "wdICwFIgU",
    Light: "S8mq6sovg",
  },
  ch = {
    AlwaysDark: "nlGtyJrl_",
    AlwaysLight: "FaGOMwRAP",
    Dark: "prx67ksiV",
    Default: "GeY2IKYyS",
    Light: "Gcziwg30w",
  },
  mh = { Adaptive: "V8QTxROtH", Default: "lzwti0GI_" },
  dh = ({
    adaptiveColor: e,
    defaultColor: t,
    height: o,
    iconed: a,
    id: n,
    width: s,
    ...i
  }) => {
    var f, c, m, p, d, y, b, h;
    return {
      ...i,
      jhbC2DOAv:
        (m =
          (c = (f = ch[t]) !== null && f !== void 0 ? f : t) !== null &&
          c !== void 0
            ? c
            : i.jhbC2DOAv) !== null && m !== void 0
          ? m
          : "GeY2IKYyS",
      Pm_hOrOqh: a ?? i.Pm_hOrOqh,
      variant:
        (d = (p = mh[i.variant]) !== null && p !== void 0 ? p : i.variant) !==
          null && d !== void 0
          ? d
          : "V8QTxROtH",
      ZaTyyUpS5:
        (h =
          (b = (y = fh[e]) !== null && y !== void 0 ? y : e) !== null &&
          b !== void 0
            ? b
            : i.ZaTyyUpS5) !== null && h !== void 0
          ? h
          : "wdICwFIgU",
    };
  },
  ph = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  uh = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        ZaTyyUpS5: c,
        jhbC2DOAv: m,
        Pm_hOrOqh: p,
        ...d
      } = dh(e),
      {
        baseVariant: y,
        classNames: b,
        gestureHandlers: h,
        gestureVariant: w,
        setGestureState: u,
        setVariant: k,
        variants: g,
      } = G({
        cycleOrder: J0,
        defaultVariant: "V8QTxROtH",
        variant: f,
        variantClassNames: eh,
      }),
      v = ph(e, g),
      C = T(null),
      L = rh(p),
      D = A(),
      _ = [],
      Z = J();
    return r(B, {
      id: i ?? D,
      children: r(lh, {
        animate: g,
        initial: !1,
        children: r(sh, {
          value: th,
          children: I(l.div, {
            ...d,
            ...h,
            className: E($0, ..._, "framer-6tp6u8", s, b),
            "data-framer-name": "Adaptive",
            layoutDependency: v,
            layoutId: "V8QTxROtH",
            ref: t ?? C,
            style: { ...n },
            ...za({ lzwti0GI_: { "data-framer-name": "Default" } }, y, w),
            children: [
              p &&
                r(l.div, {
                  className: "framer-1p75lby",
                  layoutDependency: v,
                  layoutId: "C6mhd1QGe",
                }),
              L &&
                r(cn, {
                  className: "framer-bl6iwu",
                  "data-framer-name": "Text",
                  layoutDependency: v,
                  layoutId: "LGNf3bx5P",
                  children: r(Q, {
                    children: r(l.div, {
                      className: "framer-10tvckf-container",
                      layoutDependency: v,
                      layoutId: "EMmwstfVN-container",
                      children: r(Oa, {
                        bXvdJ35Ta: !1,
                        height: "100%",
                        id: "EMmwstfVN",
                        layoutId: "EMmwstfVN",
                        variant: ah(c, o),
                        width: "100%",
                        xH050kkag: "About",
                        ...za({ lzwti0GI_: { variant: oh(m, o) } }, y, w),
                      }),
                    }),
                  }),
                }),
              p &&
                r(cn, {
                  className: "framer-d3tsv1",
                  "data-framer-name": "Icon",
                  layoutDependency: v,
                  layoutId: "x5x3vRtJt",
                  children: r(Q, {
                    children: r(l.div, {
                      className: "framer-cnffk8-container",
                      layoutDependency: v,
                      layoutId: "R4ky5AfvP-container",
                      children: r(Ga, {
                        height: "100%",
                        id: "R4ky5AfvP",
                        layoutId: "R4ky5AfvP",
                        style: { height: "100%", width: "100%" },
                        variant: nh(c, o),
                        width: "100%",
                        ...za({ lzwti0GI_: { variant: ih(m, o) } }, y, w),
                      }),
                    }),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  hh = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-gsSET.framer-18qjxvw, .framer-gsSET .framer-18qjxvw { display: block; }",
    ".framer-gsSET.framer-6tp6u8 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-gsSET .framer-1p75lby { flex: none; height: 3px; overflow: hidden; position: relative; width: 10px; }",
    ".framer-gsSET .framer-bl6iwu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-gsSET .framer-10tvckf-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-gsSET .framer-d3tsv1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 42px; }",
    ".framer-gsSET .framer-cnffk8-container { flex: none; height: 42px; position: relative; width: 42px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gsSET.framer-6tp6u8, .framer-gsSET .framer-bl6iwu, .framer-gsSET .framer-d3tsv1 { gap: 0px; } .framer-gsSET.framer-6tp6u8 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-gsSET.framer-6tp6u8 > :first-child, .framer-gsSET .framer-bl6iwu > :first-child, .framer-gsSET .framer-d3tsv1 > :first-child { margin-left: 0px; } .framer-gsSET.framer-6tp6u8 > :last-child, .framer-gsSET .framer-bl6iwu > :last-child, .framer-gsSET .framer-d3tsv1 > :last-child { margin-right: 0px; } .framer-gsSET .framer-bl6iwu > *, .framer-gsSET .framer-d3tsv1 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
  ],
  vr = q(uh, hh, "framer-gsSET"),
  O6 = vr;
vr.displayName = "Utilities/AboutToggle";
vr.defaultProps = { height: 43, width: 91.5 };
M(vr, {
  variant: {
    options: ["V8QTxROtH", "lzwti0GI_"],
    optionTitles: ["Adaptive", "Default"],
    title: "Variant",
    type: x.Enum,
  },
  ZaTyyUpS5: {
    defaultValue: "wdICwFIgU",
    options: ["wdICwFIgU", "S8mq6sovg", "aIDTqiHqQ", "AEum8CP0M", "ejAMXCAdb"],
    optionTitles: ["Default", "Light", "Dark", "AlwaysLight", "AlwaysDark"],
    title: "Adaptive Color",
    type: x.Enum,
  },
  jhbC2DOAv: {
    defaultValue: "GeY2IKYyS",
    options: ["GeY2IKYyS", "Gcziwg30w", "prx67ksiV", "FaGOMwRAP", "nlGtyJrl_"],
    optionTitles: ["Default", "Light", "Dark", "AlwaysLight", "AlwaysDark"],
    title: "Default Color",
    type: x.Enum,
  },
  Pm_hOrOqh: { defaultValue: !1, title: "Iconed", type: x.Boolean },
});
z(vr, [{ explicitInter: !0, fonts: [] }, ...Y0, ...K0], {
  supportsExplicitInterCodegen: !0,
});
var gh = Y(De),
  yh = at(l.div),
  vh = Ee(l.div),
  xh = ["ecyK5mEKa", "tLAPjJAhe", "jTgHzDfLY"],
  mn = "framer-Q0R2r",
  bh = {
    ecyK5mEKa: "framer-v-1osa5wq",
    jTgHzDfLY: "framer-v-5rmzl4",
    tLAPjJAhe: "framer-v-1nj5q2i",
  };
function wh(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var kh = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Ch = (e, t) => `translate(-50%, -50%) ${t}`,
  dn = { damping: 14, delay: 0, mass: 1, stiffness: 140, type: "spring" },
  _h = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: dn,
    x: 0,
    y: 10,
  },
  Fh = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: dn,
    x: 0,
    y: 0,
  },
  Rh = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.75,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 10,
  },
  Sh = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  Lh = ({ children: e, blockDocumentScrolling: t, enabled: o = !0 }) => {
    let [a, n] = Ge({ blockDocumentScrolling: t });
    return e({
      hide: () => n(!1),
      show: () => n(!0),
      toggle: () => n(!a),
      visible: o && a,
    });
  },
  Ih = l(F),
  Vh = { Hover: "ecyK5mEKa", Mobile: "tLAPjJAhe", Tinted: "jTgHzDfLY" },
  Uh = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = Vh[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "ecyK5mEKa",
    };
  },
  Dh = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Th = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = Uh(e),
      {
        baseVariant: m,
        classNames: p,
        clearLoadingGesture: d,
        gestureHandlers: y,
        gestureVariant: b,
        isLoading: h,
        setGestureState: w,
        setVariant: u,
        variants: k,
      } = G({
        cycleOrder: xh,
        defaultVariant: "ecyK5mEKa",
        variant: f,
        variantClassNames: bh,
      }),
      g = Dh(e, k),
      { activeVariantCallback: v, delay: C } = ne(m),
      L = ({ overlay: te, paginationInfo: le }) =>
        v(async (...ce) => {
          w({ isHovered: !0 }), te.show();
        }),
      D = T(null),
      _ = () => !["tLAPjJAhe", "jTgHzDfLY"].includes(m),
      Z = T(null),
      X = A(),
      H = [Or, pe],
      K = J();
    return r(B, {
      id: i ?? X,
      children: r(Ih, {
        animate: k,
        initial: !1,
        children: r(Lh, {
          blockDocumentScrolling: !1,
          enabled: _(),
          children: (te) =>
            r(qe, {
              children: r(Sh, {
                value: kh,
                children: I(l.div, {
                  ...c,
                  ...y,
                  className: E(mn, ...H, "framer-1osa5wq", s, p),
                  "data-framer-name": "Hover",
                  "data-highlight": !0,
                  id: `${i}-1osa5wq`,
                  layoutDependency: g,
                  layoutId: "ecyK5mEKa",
                  onMouseEnter: L({ overlay: te }),
                  ref: t ?? D,
                  style: {
                    filter: "brightness(1)",
                    WebkitFilter: "brightness(1)",
                    ...n,
                  },
                  variants: {
                    jTgHzDfLY: {
                      filter: "brightness(0.97)",
                      WebkitFilter: "brightness(0.97)",
                    },
                  },
                  ...wh(
                    {
                      jTgHzDfLY: {
                        "data-framer-name": "Tinted",
                        "data-highlight": void 0,
                        onMouseEnter: void 0,
                      },
                      tLAPjJAhe: {
                        "data-framer-name": "Mobile",
                        "data-highlight": void 0,
                        onMouseEnter: void 0,
                      },
                    },
                    m,
                    b,
                  ),
                  children: [
                    r(yh, {
                      className: "framer-mn4h8a",
                      layoutDependency: g,
                      layoutId: "MfOwZrpmw",
                      children: r(Q, {
                        children: r(l.div, {
                          className: "framer-52k2qm-container",
                          layoutDependency: g,
                          layoutId: "bwmXC6kks-container",
                          transformTemplate: Ch,
                          children: r(De, {
                            b1BqfRpNR: !0,
                            bUFcBjj2_: !1,
                            dIiBtQnYe: 100,
                            height: "100%",
                            id: "bwmXC6kks",
                            jmykv9nju: "https://www.linkedin.com/in/jayzhushi/",
                            layoutId: "bwmXC6kks",
                            variant: "PWFVUVWOQ",
                            VTdF3jUde:
                              "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                            width: "100%",
                            ZWLrRxtcU: !0,
                          }),
                        }),
                      }),
                    }),
                    _() &&
                      r(Ue, {
                        children:
                          te.visible &&
                          r(Qe, {
                            alignment: "start",
                            anchorRef: t ?? D,
                            className: E(mn, p, ...H),
                            collisionDetection: !1,
                            "data-framer-portal-id": `${i}-1osa5wq`,
                            offsetX: 0,
                            offsetY: -10,
                            onDismiss: te.hide,
                            placement: "top",
                            portalSelector: "#overlay",
                            safeArea: !0,
                            zIndex: 11,
                            children: r(vh, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: Fh,
                              className: "framer-1kug8tt",
                              exit: _h,
                              initial: Rh,
                              layoutDependency: g,
                              layoutId: "d4n8namaJ",
                              ref: Z,
                              role: "dialog",
                              style: {
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                transformPerspective: 1200,
                              },
                              children: I(l.div, {
                                className: "framer-khhzlo",
                                "data-framer-name": "LinkedinCard",
                                layoutDependency: g,
                                layoutId: "ZTDqkV4Yl",
                                style: {
                                  backgroundColor:
                                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                                children: [
                                  r(l.div, {
                                    className: "framer-bp4qe0",
                                    layoutDependency: g,
                                    layoutId: "I3IB2O7o8",
                                    style: {
                                      backgroundColor:
                                        "var(--token-5e69cc31-fdee-4167-b061-faf4cad5053f, rgba(0, 0, 0, 0.3))",
                                    },
                                  }),
                                  r(rt, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 512,
                                      intrinsicWidth: 512,
                                      pixelHeight: 512,
                                      pixelWidth: 512,
                                      src: "https://framerusercontent.com/images/Cv7tUcy1rcgOmuD5YAOXl0TIUUg.jpg",
                                    },
                                    className: "framer-15ojbyq",
                                    "data-border": !0,
                                    layoutDependency: g,
                                    layoutId: "DyO89W1kn",
                                    style: {
                                      "--border-bottom-width": "2px",
                                      "--border-color":
                                        "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                                      "--border-left-width": "2px",
                                      "--border-right-width": "2px",
                                      "--border-style": "solid",
                                      "--border-top-width": "2px",
                                      borderBottomLeftRadius: 40,
                                      borderBottomRightRadius: 40,
                                      borderTopLeftRadius: 40,
                                      borderTopRightRadius: 40,
                                      boxShadow:
                                        "0px 0.48290122862090357px 0.2897407371725422px -1.5px rgba(0, 0, 0, 0.14396), 0px 4px 2.4000000000000004px -3px rgba(0, 0, 0, 0.1)",
                                    },
                                  }),
                                  I(l.div, {
                                    className: "framer-3m4dxv",
                                    layoutDependency: g,
                                    layoutId: "HsLHGQeoi",
                                    children: [
                                      r($, {
                                        __fromCanvasComponent: !0,
                                        children: r(F, {
                                          children: r(l.p, {
                                            className:
                                              "framer-styles-preset-1wxnimg",
                                            "data-styles-preset": "tvtD0bAK1",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                                            },
                                            children: "\u5B63\u6770",
                                          }),
                                        }),
                                        className: "framer-1u61pue",
                                        fonts: ["Inter"],
                                        layoutDependency: g,
                                        layoutId: "y41JgJzvw",
                                        style: {
                                          "--extracted-r6o4lv":
                                            "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                                          "--framer-link-text-color":
                                            "rgb(0, 153, 255)",
                                          "--framer-link-text-decoration":
                                            "underline",
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      r($, {
                                        __fromCanvasComponent: !0,
                                        children: r(F, {
                                          children: r(l.p, {
                                            className:
                                              "framer-styles-preset-9jlebu",
                                            "data-styles-preset": "sSyE5_N0_",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, var(--token-cb4dbe66-4559-4dce-ac95-ee2520bf67ec, rgba(0, 0, 0, 0.7)))",
                                            },
                                            children: "Interaction Designer",
                                          }),
                                        }),
                                        className: "framer-1755roe",
                                        fonts: ["Inter"],
                                        layoutDependency: g,
                                        layoutId: "RKHyHUWXv",
                                        style: {
                                          "--extracted-r6o4lv":
                                            "var(--token-cb4dbe66-4559-4dce-ac95-ee2520bf67ec, rgba(0, 0, 0, 0.7))",
                                          "--framer-link-text-color":
                                            "rgb(0, 153, 255)",
                                          "--framer-link-text-decoration":
                                            "underline",
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                      }),
                  ],
                }),
              }),
            }),
        }),
      }),
    });
  }),
  Eh = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Q0R2r.framer-14688hs, .framer-Q0R2r .framer-14688hs { display: block; }",
    ".framer-Q0R2r.framer-1osa5wq { height: 54px; overflow: visible; position: relative; width: 54px; }",
    ".framer-Q0R2r .framer-mn4h8a { flex: none; height: 54px; left: calc(50.00000000000002% - 54px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 54px / 2); width: 54px; }",
    ".framer-Q0R2r .framer-52k2qm-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; }",
    ".framer-Q0R2r .framer-1kug8tt { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 266px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Q0R2r .framer-khhzlo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 87px; justify-content: flex-start; overflow: hidden; padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Q0R2r .framer-bp4qe0 { bottom: 112px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    ".framer-Q0R2r .framer-15ojbyq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 56px); overflow: visible; position: relative; width: 56px; }",
    ".framer-Q0R2r .framer-3m4dxv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Q0R2r .framer-1u61pue, .framer-Q0R2r .framer-1755roe { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Q0R2r .framer-1kug8tt, .framer-Q0R2r .framer-khhzlo, .framer-Q0R2r .framer-3m4dxv { gap: 0px; } .framer-Q0R2r .framer-1kug8tt > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Q0R2r .framer-1kug8tt > :first-child, .framer-Q0R2r .framer-3m4dxv > :first-child { margin-top: 0px; } .framer-Q0R2r .framer-1kug8tt > :last-child, .framer-Q0R2r .framer-3m4dxv > :last-child { margin-bottom: 0px; } .framer-Q0R2r .framer-khhzlo > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Q0R2r .framer-khhzlo > :first-child { margin-left: 0px; } .framer-Q0R2r .framer-khhzlo > :last-child { margin-right: 0px; } .framer-Q0R2r .framer-3m4dxv > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } }",
    ...Ar,
    ...de,
    '.framer-Q0R2r[data-border="true"]::after, .framer-Q0R2r [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  xr = q(Th, Eh, "framer-Q0R2r"),
  K6 = xr;
xr.displayName = "Social/Linkedin";
xr.defaultProps = { height: 54, width: 54 };
M(xr, {
  variant: {
    options: ["ecyK5mEKa", "tLAPjJAhe", "jTgHzDfLY"],
    optionTitles: ["Hover", "Mobile", "Tinted"],
    title: "Variant",
    type: x.Enum,
  },
});
z(
  xr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...gh,
    ...se(Pr),
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var $h = {};
Ce($h, { __FramerMetadata__: () => Jh, default: () => Kh });
var jh = Fe($),
  Mh = Re($),
  Nh = Eo(l.div),
  Bh = [
    "eVJtmaWf9",
    "KMQdZwXp8",
    "jGXaNpgZR",
    "eA_pBon07",
    "wfGsC6Ths",
    "L52MJ5fwt",
    "QTGMbNDp9",
  ],
  qh = "framer-shXGa",
  Hh = {
    eA_pBon07: "framer-v-4ig8og",
    eVJtmaWf9: "framer-v-zzfao0",
    jGXaNpgZR: "framer-v-12r9n5b",
    KMQdZwXp8: "framer-v-eb6pcg",
    L52MJ5fwt: "framer-v-1esf33a",
    QTGMbNDp9: "framer-v-15m3ch5",
    wfGsC6Ths: "framer-v-o22u3e",
  };
function Vt(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Ph = { damping: 14, delay: 0, mass: 1, stiffness: 140, type: "spring" },
  Ah = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Oh = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.85,
    skewX: 0,
    skewY: 0,
    transition: Ah,
  },
  Gh = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  zh = l(F),
  Xh = {
    Coming: "wfGsC6Ths",
    Forward_White: "eA_pBon07",
    Forward: "KMQdZwXp8",
    Learn: "L52MJ5fwt",
    Text_White: "jGXaNpgZR",
    Text: "eVJtmaWf9",
    White: "QTGMbNDp9",
  },
  Wh = ({
    height: e,
    id: t,
    link: o,
    tap: a,
    title: n,
    titleChn: s,
    width: i,
    ...f
  }) => {
    var c, m, p, d;
    return {
      ...f,
      jqcdHdCYz:
        (c = s ?? f.jqcdHdCYz) !== null && c !== void 0 ? c : "\u8FD4\u56DE",
      ny_QEPOPk: o ?? f.ny_QEPOPk,
      TLWmWmG9S: a ?? f.TLWmWmG9S,
      variant:
        (p = (m = Xh[f.variant]) !== null && m !== void 0 ? m : f.variant) !==
          null && p !== void 0
          ? p
          : "eVJtmaWf9",
      xH050kkag: (d = n ?? f.xH050kkag) !== null && d !== void 0 ? d : "Home",
    };
  },
  Zh = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Qh = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        xH050kkag: c,
        jqcdHdCYz: m,
        ny_QEPOPk: p,
        TLWmWmG9S: d,
        ...y
      } = Wh(e),
      {
        baseVariant: b,
        classNames: h,
        clearLoadingGesture: w,
        gestureHandlers: u,
        gestureVariant: k,
        isLoading: g,
        setGestureState: v,
        setVariant: C,
        variants: L,
      } = G({
        cycleOrder: Bh,
        defaultVariant: "eVJtmaWf9",
        variant: f,
        variantClassNames: Hh,
      }),
      D = Zh(e, L),
      { activeVariantCallback: _, delay: Z } = ne(b),
      X = _(async (...ye) => {
        if ((v({ isPressed: !1 }), d && (await d(...ye)) === !1)) return !1;
      }),
      H = T(null),
      K = () => b === "L52MJ5fwt",
      te = () => !!["KMQdZwXp8", "eA_pBon07"].includes(b),
      le = A(),
      ce = [St, pe],
      ge = J();
    return r(B, {
      id: i ?? le,
      children: r(zh, {
        animate: L,
        initial: !1,
        children: r(Gh, {
          value: Ph,
          children: r(Ye, {
            href: p,
            openInNewTab: !0,
            smoothScroll: !1,
            ...Vt({ L52MJ5fwt: { openInNewTab: !1, smoothScroll: !0 } }, b, k),
            children: r(l.a, {
              ...y,
              ...u,
              className: `${E(qh, ...ce, "framer-zzfao0", s, h)} framer-1yfut0v`,
              "data-framer-name": "Text",
              "data-highlight": !0,
              layoutDependency: D,
              layoutId: "eVJtmaWf9",
              onTap: X,
              ref: t ?? H,
              style: {
                borderBottomLeftRadius: 23,
                borderBottomRightRadius: 23,
                borderTopLeftRadius: 23,
                borderTopRightRadius: 23,
                ...n,
              },
              ...Vt(
                {
                  eA_pBon07: { "data-framer-name": "Forward_White" },
                  jGXaNpgZR: { "data-framer-name": "Text_White" },
                  KMQdZwXp8: { "data-framer-name": "Forward" },
                  L52MJ5fwt: { "data-framer-name": "Learn" },
                  QTGMbNDp9: { "data-framer-name": "White" },
                  wfGsC6Ths: { "data-framer-name": "Coming" },
                },
                b,
                k,
              ),
              children: I(Nh, {
                className: "framer-1vmuqax",
                layoutDependency: D,
                layoutId: "nZdW7ZWdH",
                style: {
                  backgroundColor:
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  borderBottomLeftRadius: 40,
                  borderBottomRightRadius: 40,
                  borderTopLeftRadius: 40,
                  borderTopRightRadius: 40,
                },
                variants: {
                  eA_pBon07: {
                    backgroundColor:
                      "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7))",
                  },
                  jGXaNpgZR: { backgroundColor: "rgba(245, 245, 245, 0.7)" },
                  L52MJ5fwt: {
                    backgroundColor:
                      "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7))",
                  },
                  QTGMbNDp9: {
                    backgroundColor:
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                  },
                  wfGsC6Ths: {
                    backgroundColor:
                      "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(244, 244, 244, 0.7))",
                  },
                },
                whileTap: Oh,
                children: [
                  r(jh, {
                    __fromCanvasComponent: !0,
                    children: r(F, {
                      children: r(l.p, {
                        className: "framer-styles-preset-p7pc09",
                        "data-styles-preset": "hCbgbtQ8_",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                        },
                        children: "Home",
                      }),
                    }),
                    className: "framer-dox4z1",
                    fonts: ["Inter"],
                    layoutDependency: D,
                    layoutId: "wnpnX6ev0",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: c,
                    variants: {
                      eA_pBon07: {
                        "--extracted-r6o4lv":
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                      },
                      jGXaNpgZR: {
                        "--extracted-r6o4lv":
                          "var(--token-fc4a4d4a-5503-4fd0-92cd-caaf72cde115, rgb(0, 0, 0))",
                      },
                      L52MJ5fwt: {
                        "--extracted-r6o4lv":
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                      },
                      QTGMbNDp9: {
                        "--extracted-r6o4lv":
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                      },
                      wfGsC6Ths: {
                        "--extracted-r6o4lv":
                          "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                      },
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...Vt(
                      {
                        eA_pBon07: {
                          children: r(F, {
                            children: r(l.p, {
                              className: "framer-styles-preset-p7pc09",
                              "data-styles-preset": "hCbgbtQ8_",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                              },
                              children: "Home",
                            }),
                          }),
                        },
                        jGXaNpgZR: {
                          children: r(F, {
                            children: r(l.p, {
                              className: "framer-styles-preset-p7pc09",
                              "data-styles-preset": "hCbgbtQ8_",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-fc4a4d4a-5503-4fd0-92cd-caaf72cde115, rgb(0, 0, 0)))",
                              },
                              children: "Home",
                            }),
                          }),
                        },
                        L52MJ5fwt: {
                          children: r(F, {
                            children: r(l.p, {
                              className: "framer-styles-preset-p7pc09",
                              "data-styles-preset": "hCbgbtQ8_",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                              },
                              children: "See more",
                            }),
                          }),
                          text: void 0,
                        },
                        QTGMbNDp9: {
                          children: r(F, {
                            children: r(l.p, {
                              className: "framer-styles-preset-9jlebu",
                              "data-styles-preset": "sSyE5_N0_",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                              },
                              children: "Home",
                            }),
                          }),
                        },
                        wfGsC6Ths: {
                          children: r(F, {
                            children: r(l.p, {
                              className: "framer-styles-preset-p7pc09",
                              "data-styles-preset": "hCbgbtQ8_",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)))",
                              },
                              children: "Processing",
                            }),
                          }),
                          text: void 0,
                        },
                      },
                      b,
                      k,
                    ),
                  }),
                  r(Mh, {
                    __fromCanvasComponent: !0,
                    children: r(F, {
                      children: r(l.p, {
                        className: "framer-styles-preset-p7pc09",
                        "data-styles-preset": "hCbgbtQ8_",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                        },
                        children: "Home",
                      }),
                    }),
                    className: "framer-1fkdl4",
                    fonts: ["Inter"],
                    layoutDependency: D,
                    layoutId: "Me4rNUiYv",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: m,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...Vt(
                      {
                        eA_pBon07: {
                          children: r(F, {
                            children: r(l.p, {
                              className: "framer-styles-preset-p7pc09",
                              "data-styles-preset": "hCbgbtQ8_",
                              children: "\u8FD4\u56DE",
                            }),
                          }),
                        },
                        jGXaNpgZR: {
                          children: r(F, {
                            children: r(l.p, {
                              className: "framer-styles-preset-p7pc09",
                              "data-styles-preset": "hCbgbtQ8_",
                              children: "\u8FD4\u56DE",
                            }),
                          }),
                        },
                        L52MJ5fwt: {
                          children: r(F, {
                            children: r(l.p, {
                              className: "framer-styles-preset-p7pc09",
                              "data-styles-preset": "hCbgbtQ8_",
                              children: "\u67E5\u770B\u66F4\u591A",
                            }),
                          }),
                          text: void 0,
                        },
                        QTGMbNDp9: {
                          children: r(F, {
                            children: r(l.p, {
                              className: "framer-styles-preset-9jlebu",
                              "data-styles-preset": "sSyE5_N0_",
                              children: "\u8FD4\u56DE",
                            }),
                          }),
                        },
                        wfGsC6Ths: {
                          children: r(F, {
                            children: r(l.p, {
                              className: "framer-styles-preset-p7pc09",
                              "data-styles-preset": "hCbgbtQ8_",
                              children: "\u8FDB\u884C\u4E2D",
                            }),
                          }),
                          text: void 0,
                        },
                      },
                      b,
                      k,
                    ),
                  }),
                  K() &&
                    r(ee, {
                      className: "framer-1m31por",
                      "data-framer-name": "graphic",
                      layout: "position",
                      layoutDependency: D,
                      layoutId: "My3q3reMt",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 13 4 L 13 19 C 13 19.552 12.552 20 12 20 C 11.448 20 11 19.552 11 19 L 11 4 C 11 3.448 11.448 3 12 3 C 12.552 3 13 3.448 13 4 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 6.308 14.278 C 6.499 14.094 6.756 13.994 7.021 14 C 7.286 14.006 7.538 14.116 7.722 14.308 L 12 18.771 L 16.278 14.308 C 16.66 13.909 17.293 13.896 17.692 14.278 C 18.091 14.66 18.104 15.293 17.722 15.692 L 13.402 20.199 C 13.254 20.36 13.096 20.511 12.929 20.652 C 12.669 20.872 12.341 20.995 12 21 C 11.577 21 11.267 20.808 11.071 20.652 C 10.904 20.511 10.746 20.36 10.599 20.199 L 6.279 15.692 C 6.095 15.501 5.995 15.244 6.001 14.979 C 6.006 14.714 6.117 14.462 6.308 14.278 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                      svgContentId: 11632452227,
                      withExternalLayout: !0,
                      ...Vt({ L52MJ5fwt: { svgContentId: 11566347597 } }, b, k),
                    }),
                  te() &&
                    r(ee, {
                      className: "framer-fpsytu",
                      "data-framer-name": "graphic",
                      layout: "position",
                      layoutDependency: D,
                      layoutId: "GbgUhFPgA",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 17 7 L 6 18" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 11 6.132 C 11 6.132 16.634 5.657 17.488 6.512 C 18.343 7.366 17.868 13 17.868 13" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 10674876457,
                      withExternalLayout: !0,
                      ...Vt(
                        {
                          eA_pBon07: {
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 17 7 L 6 18" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 11 6.132 C 11 6.132 16.634 5.657 17.488 6.512 C 18.343 7.366 17.868 13 17.868 13" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                            svgContentId: 9795536454,
                          },
                          KMQdZwXp8: { svgContentId: 10470045207 },
                        },
                        b,
                        k,
                      ),
                    }),
                ],
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Yh = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-shXGa.framer-1yfut0v, .framer-shXGa .framer-1yfut0v { display: block; }",
    ".framer-shXGa.framer-zzfao0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-shXGa .framer-1vmuqax { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-shXGa .framer-dox4z1, .framer-shXGa .framer-1fkdl4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-shXGa .framer-1m31por, .framer-shXGa .framer-fpsytu { flex: none; height: 24px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-shXGa.framer-zzfao0, .framer-shXGa .framer-1vmuqax { gap: 0px; } .framer-shXGa.framer-zzfao0 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-shXGa.framer-zzfao0 > :first-child, .framer-shXGa .framer-1vmuqax > :first-child { margin-left: 0px; } .framer-shXGa.framer-zzfao0 > :last-child, .framer-shXGa .framer-1vmuqax > :last-child { margin-right: 0px; } .framer-shXGa .framer-1vmuqax > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-shXGa.framer-v-eb6pcg .framer-1vmuqax, .framer-shXGa.framer-v-4ig8og .framer-1vmuqax, .framer-shXGa.framer-v-1esf33a .framer-1vmuqax { padding: 10px 16px 10px 20px; }",
    ".framer-shXGa.framer-v-15m3ch5 .framer-1vmuqax { height: min-content; padding: 8px 20px 8px 20px; }",
    ...Rt,
    ...de,
  ],
  br = q(Qh, Yh, "framer-shXGa"),
  Kh = br;
br.displayName = "Button/Primary";
br.defaultProps = { height: 42, width: 139.5 };
M(br, {
  variant: {
    options: [
      "eVJtmaWf9",
      "KMQdZwXp8",
      "jGXaNpgZR",
      "eA_pBon07",
      "wfGsC6Ths",
      "L52MJ5fwt",
      "QTGMbNDp9",
    ],
    optionTitles: [
      "Text",
      "Forward",
      "Text_White",
      "Forward_White",
      "Coming",
      "Learn",
      "White",
    ],
    title: "Variant",
    type: x.Enum,
  },
  xH050kkag: {
    defaultValue: "Home",
    displayTextArea: !1,
    title: "Title",
    type: x.String,
  },
  jqcdHdCYz: {
    defaultValue: "\u8FD4\u56DE",
    displayTextArea: !1,
    title: "Title_Chn",
    type: x.String,
  },
  ny_QEPOPk: { title: "Link", type: x.Link },
  TLWmWmG9S: { title: "Tap", type: x.EventHandler },
});
z(
  br,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...se(Ft),
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Jh = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramervNGDn_bs4",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "139.5",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"KMQdZwXp8":{"layout":["auto","auto"]},"jGXaNpgZR":{"layout":["auto","auto"]},"eA_pBon07":{"layout":["auto","auto"]},"wfGsC6Ths":{"layout":["auto","auto"]},"L52MJ5fwt":{"layout":["auto","auto"]},"QTGMbNDp9":{"layout":["auto","auto"]}}}',
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerVariables:
          '{"xH050kkag":"title","jqcdHdCYz":"titleChn","ny_QEPOPk":"link","TLWmWmG9S":"tap"}',
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "42",
        framerComponentViewportWidth: "true",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var h1 = {};
Ce(h1, { __FramerMetadata__: () => u1, default: () => p1 });
var e1 = Y(vt),
  t1 = Ve(Dr(vt), Gt),
  r1 = Y(xt),
  a1 = Ve(Tr(xt), Xt),
  o1 = ["aieP0OjgV", "avuKEnzYC"];
var n1 = { aieP0OjgV: "framer-v-18qwq1y", avuKEnzYC: "framer-v-1efsxnr" };
function Xa(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var i1 = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  s1 = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  l1 = { Grid: "avuKEnzYC", Stack: "aieP0OjgV" },
  f1 = ({ height: e, id: t, tap: o, tap2: a, width: n, ...s }) => {
    var i, f;
    return {
      ...s,
      kPKP1Z98f: o ?? s.kPKP1Z98f,
      tcGyL3tqj: a ?? s.tcGyL3tqj,
      variant:
        (f = (i = l1[s.variant]) !== null && i !== void 0 ? i : s.variant) !==
          null && f !== void 0
          ? f
          : "aieP0OjgV",
    };
  },
  c1 = (e, t) => t.join("-") + e.layoutDependency,
  m1 = N(function (e, t) {
    let { activeLocale: o } = O(),
      {
        style: a,
        className: n,
        layoutId: s,
        variant: i,
        kPKP1Z98f: f,
        tcGyL3tqj: c,
        ...m
      } = f1(e),
      {
        baseVariant: p,
        classNames: d,
        gestureVariant: y,
        setGestureState: b,
        setVariant: h,
        transition: w,
        variants: u,
      } = G({
        cycleOrder: o1,
        defaultVariant: "aieP0OjgV",
        transitions: i1,
        variant: i,
        variantClassNames: n1,
      }),
      k = c1(e, u),
      { activeVariantCallback: g, delay: v } = ne(p),
      C = g(async (...X) => {
        if (f && (await f(...X)) === !1) return !1;
      }),
      L = g(async (...X) => {
        if (c && (await c(...X)) === !1) return !1;
      }),
      D = T(null),
      _ = A(),
      Z = [];
    return r(B, {
      id: s ?? _,
      children: r(l.div, {
        initial: i,
        animate: u,
        onHoverStart: () => b({ isHovered: !0 }),
        onHoverEnd: () => b({ isHovered: !1 }),
        onTapStart: () => b({ isPressed: !0 }),
        onTap: () => b({ isPressed: !1 }),
        onTapCancel: () => b({ isPressed: !1 }),
        className: E("framer-Siu35", ...Z, d),
        style: { display: "contents" },
        children: r(s1, {
          value: w,
          children: I(l.div, {
            ...m,
            className: E("framer-18qwq1y", n),
            "data-framer-name": "Stack",
            layoutDependency: k,
            layoutId: "aieP0OjgV",
            ref: t ?? D,
            style: { ...a },
            ...Xa({ avuKEnzYC: { "data-framer-name": "Grid" } }, p, y),
            children: [
              r(l.div, {
                className: "framer-1intkie",
                layoutDependency: k,
                layoutId: "mVFuVT6fL",
                style: {
                  backgroundColor:
                    "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                },
              }),
              r(l.div, {
                className: "framer-127qxkl-container",
                layoutDependency: k,
                layoutId: "gb8kFyv3V-container",
                children: r(t1, {
                  height: "100%",
                  id: "gb8kFyv3V",
                  K4FXNGAHE: C,
                  layoutId: "gb8kFyv3V",
                  style: { width: "100%" },
                  variant: "Z1T1fYAWN",
                  width: "100%",
                  ...Xa({ avuKEnzYC: { variant: "RouvpKnIw" } }, p, y),
                }),
              }),
              r(l.div, {
                className: "framer-13umqrc-container",
                layoutDependency: k,
                layoutId: "Q3lFwnlNX-container",
                children: r(a1, {
                  height: "100%",
                  id: "Q3lFwnlNX",
                  layoutId: "Q3lFwnlNX",
                  PtGFoa1Gk: L,
                  style: { width: "100%" },
                  variant: "CEy_TuHSw",
                  width: "100%",
                  ...Xa({ avuKEnzYC: { variant: "Tf0CgnOud" } }, p, y),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  d1 = [
    '.framer-Siu35 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Siu35 .framer-ex5fmb { display: block; }",
    ".framer-Siu35 .framer-18qwq1y { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-Siu35 .framer-1intkie { flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 90px; will-change: var(--framer-will-change-override, transform); z-index: 0; }",
    ".framer-Siu35 .framer-127qxkl-container, .framer-Siu35 .framer-13umqrc-container { flex: none; height: auto; position: relative; width: 90px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Siu35 .framer-18qwq1y { gap: 0px; } .framer-Siu35 .framer-18qwq1y > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-Siu35 .framer-18qwq1y > :first-child { margin-left: 0px; } .framer-Siu35 .framer-18qwq1y > :last-child { margin-right: 0px; } }",
    ".framer-Siu35.framer-v-1efsxnr .framer-1intkie { height: 101%; left: unset; right: 0px; top: calc(49.450549450549474% - 100.54945054945054% / 2); }",
  ],
  wr = q(m1, d1, "framer-Siu35"),
  p1 = wr;
wr.displayName = "Toggle/Style&Grid";
wr.defaultProps = { height: 91, width: 188 };
M(wr, {
  variant: {
    options: ["aieP0OjgV", "avuKEnzYC"],
    optionTitles: ["Stack", "Grid"],
    title: "Variant",
    type: x.Enum,
  },
  kPKP1Z98f: { title: "Tap", type: x.EventHandler },
  tcGyL3tqj: { title: "Tap 2", type: x.EventHandler },
});
z(wr, [...e1, ...r1]);
var u1 = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerWaILNCwUS",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"avuKEnzYC":{"layout":["auto","auto"]}}}',
        framerIntrinsicWidth: "188",
        framerImmutableVariables: "false",
        framerContractVersion: "1",
        framerIntrinsicHeight: "91",
        framerVariables: '{"kPKP1Z98f":"tap","tcGyL3tqj":"tap2"}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var z1 = {};
Ce(z1, { __FramerMetadata__: () => G1, default: () => O1 });
var y1 = ["ND5rHDXXB", "RcBb0k1On"];
var v1 = { ND5rHDXXB: "framer-v-eotxld", RcBb0k1On: "framer-v-c1to8x" };
function x1(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var b1 = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var w1 = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  k1 = { Bar: "RcBb0k1On", Docker: "ND5rHDXXB" },
  C1 = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = k1[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "ND5rHDXXB",
    };
  },
  _1 = (e, t) => t.join("-") + e.layoutDependency,
  F1 = N(function (e, t) {
    let { activeLocale: o } = O(),
      { style: a, className: n, layoutId: s, variant: i, ...f } = C1(e),
      {
        baseVariant: c,
        classNames: m,
        gestureVariant: p,
        setGestureState: d,
        setVariant: y,
        transition: b,
        variants: h,
      } = G({
        cycleOrder: y1,
        defaultVariant: "ND5rHDXXB",
        transitions: b1,
        variant: i,
        variantClassNames: v1,
      }),
      w = _1(e, h),
      u = T(null),
      k = A();
    return r(B, {
      id: s ?? k,
      children: r(l.div, {
        initial: i,
        animate: h,
        onHoverStart: () => d({ isHovered: !0 }),
        onHoverEnd: () => d({ isHovered: !1 }),
        onTapStart: () => d({ isPressed: !0 }),
        onTap: () => d({ isPressed: !1 }),
        onTapCancel: () => d({ isPressed: !1 }),
        className: E("framer-9SHQB", m),
        style: { display: "contents" },
        children: r(w1, {
          value: b,
          children: r(l.div, {
            ...f,
            className: E("framer-eotxld", n),
            "data-framer-name": "Docker",
            layoutDependency: w,
            layoutId: "ND5rHDXXB",
            ref: t ?? u,
            style: {
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              ...a,
            },
            ...x1({ RcBb0k1On: { "data-framer-name": "Bar" } }, c, p),
            children: r(l.div, {
              className: "framer-1mwbrwn",
              "data-border": !0,
              layoutDependency: w,
              layoutId: "LH4Cj7p6o",
              style: {
                "--border-bottom-width": "1.8px",
                "--border-color":
                  'var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0)) /* {"name":"Black 0"} */',
                "--border-left-width": "1.8px",
                "--border-right-width": "1.8px",
                "--border-style": "solid",
                "--border-top-width": "1.8px",
                borderBottomLeftRadius: 3,
                borderBottomRightRadius: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
              },
              variants: {
                RcBb0k1On: {
                  "--border-color":
                    'var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {"name":"Black 100"} */',
                  borderBottomLeftRadius: 1,
                  borderBottomRightRadius: 1,
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1,
                },
              },
              children: r(ee, {
                className: "framer-6cwdu6",
                "data-framer-name": "graphic",
                layout: "position",
                layoutDependency: w,
                layoutId: "hnu3yU9tl",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 11"><path d="M 22 5.5 C 22 7.105 22 7.908 21.578 8.484 C 21.39 8.738 21.156 8.953 20.889 9.115 C 20.259 9.5 19.38 9.5 17.624 9.5 L 6.376 9.5 C 4.62 9.5 3.742 9.5 3.112 9.115 C 2.845 8.953 2.611 8.738 2.423 8.484 C 2 7.908 2 7.105 2 5.5 C 2 3.895 2 3.092 2.422 2.516 C 2.603 2.267 2.838 2.052 3.111 1.885 C 3.741 1.5 4.619 1.5 6.376 1.5 L 17.626 1.5 C 19.381 1.5 20.259 1.5 20.889 1.885 C 21.162 2.052 21.397 2.267 21.578 2.516 C 22 3.092 22 3.895 22 5.5 Z" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 5.5 4 L 8.5 4 L 8.5 7 L 5.5 7 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 10.5 4 L 13.5 4 L 13.5 7 L 10.5 7 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 15.5 4 L 18.5 4 L 18.5 7 L 15.5 7 Z" fill="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                svgContentId: 40394710,
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  R1 = [
    '.framer-9SHQB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-9SHQB .framer-38mwds { display: block; }",
    ".framer-9SHQB .framer-eotxld { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 36px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-9SHQB .framer-1mwbrwn { flex: none; height: 10px; overflow: hidden; position: relative; width: 22px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-9SHQB .framer-6cwdu6 { flex: none; height: 11px; left: calc(50.00000000000002% - 24px / 2); position: absolute; top: calc(50.00000000000002% - 11px / 2); width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-9SHQB .framer-eotxld { gap: 0px; } .framer-9SHQB .framer-eotxld > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-9SHQB .framer-eotxld > :first-child { margin-left: 0px; } .framer-9SHQB .framer-eotxld > :last-child { margin-right: 0px; } }",
    ".framer-9SHQB.framer-v-c1to8x .framer-1mwbrwn { height: 2px; width: 18px; }",
  ],
  kr = q(F1, R1, "framer-9SHQB"),
  Wa = kr;
(kr.displayName = "Button/Docker"),
  (kr.defaultProps = { height: 36, width: 36 }),
  M(kr, {
    variant: {
      options: ["ND5rHDXXB", "RcBb0k1On"],
      optionTitles: ["Docker", "Bar"],
      title: "Variant",
      type: x.Enum,
    },
  }),
  z(kr, []);
var S1 = Y(Wa),
  L1 = Fe($),
  I1 = Re($),
  V1 = _e(l.div),
  U1 = { vjV16p8X6: { hover: !0 } },
  D1 = ["B0ZNGWm_m", "vjV16p8X6", "qJpYS8eUo"],
  T1 = "framer-JkEUf",
  E1 = {
    B0ZNGWm_m: "framer-v-wctrim",
    qJpYS8eUo: "framer-v-5v3g8t",
    vjV16p8X6: "framer-v-ywf8bv",
  };
function Za(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var j1 = { damping: 28, delay: 0, mass: 1, stiffness: 170, type: "spring" },
  M1 = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  N1 = l(F),
  B1 = { Disable: "qJpYS8eUo", Off: "vjV16p8X6", On: "B0ZNGWm_m" },
  q1 = ({ height: e, id: t, tap: o, tapA: a, width: n, ...s }) => {
    var i, f;
    return {
      ...s,
      ah1iEr8il: a ?? s.ah1iEr8il,
      K4FXNGAHE: o ?? s.K4FXNGAHE,
      variant:
        (f = (i = B1[s.variant]) !== null && i !== void 0 ? i : s.variant) !==
          null && f !== void 0
          ? f
          : "B0ZNGWm_m",
    };
  },
  H1 = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  P1 = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        K4FXNGAHE: c,
        ah1iEr8il: m,
        ...p
      } = q1(e),
      {
        baseVariant: d,
        classNames: y,
        clearLoadingGesture: b,
        gestureHandlers: h,
        gestureVariant: w,
        isLoading: u,
        setGestureState: k,
        setVariant: g,
        variants: v,
      } = G({
        cycleOrder: D1,
        defaultVariant: "B0ZNGWm_m",
        enabledGestures: U1,
        variant: f,
        variantClassNames: E1,
      }),
      C = H1(e, v),
      { activeVariantCallback: L, delay: D } = ne(d),
      _ = L(async (...te) => {
        if (
          (k({ isPressed: !1 }),
          (c && (await c(...te)) === !1) || (m && (await m(...te)) === !1))
        )
          return !1;
      }),
      Z = T(null),
      X = A(),
      H = [pe],
      K = J();
    return r(B, {
      id: i ?? X,
      children: r(N1, {
        animate: v,
        initial: !1,
        children: r(M1, {
          value: j1,
          children: r(l.div, {
            ...p,
            ...h,
            className: E(T1, ...H, "framer-wctrim", s, y),
            "data-framer-name": "On",
            "data-highlight": !0,
            layoutDependency: C,
            layoutId: "B0ZNGWm_m",
            onTap: _,
            ref: t ?? Z,
            style: {
              backgroundColor:
                "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              opacity: 1,
              ...n,
            },
            variants: {
              "vjV16p8X6-hover": {
                backgroundColor:
                  "var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15))",
              },
              qJpYS8eUo: { backgroundColor: "rgba(0, 0, 0, 0)", opacity: 0.3 },
              vjV16p8X6: {
                backgroundColor:
                  "var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0))",
                opacity: 0.5,
              },
            },
            ...Za(
              {
                "vjV16p8X6-hover": { "data-framer-name": void 0 },
                qJpYS8eUo: { "data-framer-name": "Disable" },
                vjV16p8X6: { "data-framer-name": "Off" },
              },
              d,
              w,
            ),
            children: I(V1, {
              className: "framer-1if1zgg",
              layoutDependency: C,
              layoutId: "VnZOahsvf",
              children: [
                r(l.div, {
                  className: "framer-c0rhpv",
                  layoutDependency: C,
                  layoutId: "qgq6cCw5C",
                  children: r(Q, {
                    children: r(l.div, {
                      className: "framer-1itnzlt-container",
                      layoutDependency: C,
                      layoutId: "xI9kkmNSi-container",
                      children: r(Wa, {
                        height: "100%",
                        id: "xI9kkmNSi",
                        layoutId: "xI9kkmNSi",
                        style: { height: "100%", width: "100%" },
                        variant: "ND5rHDXXB",
                        width: "100%",
                        ...Za({ vjV16p8X6: { variant: "RcBb0k1On" } }, d, w),
                      }),
                    }),
                  }),
                }),
                r(L1, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "Docker",
                    }),
                  }),
                  className: "framer-j9lkub",
                  fonts: ["Inter"],
                  layoutDependency: C,
                  layoutId: "lMTfB2JJ8",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                r(I1, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      children: "\u5BFC\u822A\u575E",
                    }),
                  }),
                  className: "framer-1qkxnrr",
                  fonts: ["Inter"],
                  layoutDependency: C,
                  layoutId: "icJY4lyry",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...Za(
                    {
                      qJpYS8eUo: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "\u4E0D\u53EF\u7528",
                          }),
                        }),
                      },
                      vjV16p8X6: {
                        children: r(F, {
                          children: r(l.p, {
                            className: "framer-styles-preset-9jlebu",
                            "data-styles-preset": "sSyE5_N0_",
                            children: "\u5BFC\u822A\u6761",
                          }),
                        }),
                      },
                    },
                    d,
                    w,
                  ),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  A1 = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-JkEUf.framer-iasoyw, .framer-JkEUf .framer-iasoyw { display: block; }",
    ".framer-JkEUf.framer-wctrim { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 83px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-JkEUf .framer-1if1zgg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 20px 0px; position: relative; width: 100%; }",
    ".framer-JkEUf .framer-c0rhpv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 36px; }",
    ".framer-JkEUf .framer-1itnzlt-container { flex: none; height: 36px; position: relative; width: 36px; }",
    ".framer-JkEUf .framer-j9lkub, .framer-JkEUf .framer-1qkxnrr { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-JkEUf.framer-wctrim, .framer-JkEUf .framer-1if1zgg, .framer-JkEUf .framer-c0rhpv { gap: 0px; } .framer-JkEUf.framer-wctrim > *, .framer-JkEUf .framer-1if1zgg > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-JkEUf.framer-wctrim > :first-child, .framer-JkEUf .framer-1if1zgg > :first-child { margin-top: 0px; } .framer-JkEUf.framer-wctrim > :last-child, .framer-JkEUf .framer-1if1zgg > :last-child { margin-bottom: 0px; } .framer-JkEUf .framer-c0rhpv > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-JkEUf .framer-c0rhpv > :first-child { margin-left: 0px; } .framer-JkEUf .framer-c0rhpv > :last-child { margin-right: 0px; } }",
    ...de,
  ],
  Cr = q(P1, A1, "framer-JkEUf"),
  O1 = Cr;
Cr.displayName = "Toggle/Docker";
Cr.defaultProps = { height: 110.5, width: 83 };
M(Cr, {
  variant: {
    options: ["B0ZNGWm_m", "vjV16p8X6", "qJpYS8eUo"],
    optionTitles: ["On", "Off", "Disable"],
    title: "Variant",
    type: x.Enum,
  },
  K4FXNGAHE: { title: "Tap", type: x.EventHandler },
  ah1iEr8il: { title: "Tap A", type: x.EventHandler },
});
z(
  Cr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...S1,
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var G1 = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerXc8vEYAex",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerIntrinsicWidth: "83",
        framerDisplayContentsDiv: "false",
        framerVariables: '{"K4FXNGAHE":"tap","ah1iEr8il":"tapA"}',
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "110.5",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"vjV16p8X6":{"layout":["fixed","auto"]},"qJpYS8eUo":{"layout":["fixed","auto"]},"fqDwtYwZL":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var Cg = {};
Ce(Cg, { __FramerMetadata__: () => kg, default: () => wg });
var pn = Ee(l.div),
  X1 = ["aMllQyYGb", "wuXOcDovs"],
  W1 = "framer-42T8w",
  Z1 = { aMllQyYGb: "framer-v-1nf3z4b", wuXOcDovs: "framer-v-c1vsh" };
function Jr(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var Q1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  un = { delay: 0, duration: 3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Y1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: -200,
    y: 0,
  },
  K1 = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 40,
  },
  J1 = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  $1 = l(F),
  eg = { OFF: "wuXOcDovs", ON: "aMllQyYGb" },
  tg = ({ height: e, id: t, width: o, ...a }) => {
    var n, s;
    return {
      ...a,
      variant:
        (s = (n = eg[a.variant]) !== null && n !== void 0 ? n : a.variant) !==
          null && s !== void 0
          ? s
          : "aMllQyYGb",
    };
  },
  rg = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  ag = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      { style: n, className: s, layoutId: i, variant: f, ...c } = tg(e),
      {
        baseVariant: m,
        classNames: p,
        gestureHandlers: d,
        gestureVariant: y,
        setGestureState: b,
        setVariant: h,
        variants: w,
      } = G({
        cycleOrder: X1,
        defaultVariant: "aMllQyYGb",
        variant: f,
        variantClassNames: Z1,
      }),
      u = rg(e, w),
      k = T(null),
      g = A(),
      v = [pe],
      C = J();
    return r(B, {
      id: i ?? g,
      children: r($1, {
        animate: w,
        initial: !1,
        children: r(J1, {
          value: Q1,
          children: I(l.div, {
            ...c,
            ...d,
            className: E(W1, ...v, "framer-1nf3z4b", s, p),
            "data-framer-name": "ON",
            layoutDependency: u,
            layoutId: "aMllQyYGb",
            ref: t ?? k,
            style: {
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              ...n,
            },
            ...Jr({ wuXOcDovs: { "data-framer-name": "OFF" } }, m, y),
            children: [
              r(pn, {
                __framer__loop: Y1,
                __framer__loopEffectEnabled: !0,
                __framer__loopRepeatDelay: 0.5,
                __framer__loopRepeatType: "mirror",
                __framer__loopTransition: un,
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                className: "framer-1yqri65",
                layoutDependency: u,
                layoutId: "gIueZBBce",
                ...Jr(
                  { wuXOcDovs: { __framer__loopEffectEnabled: void 0 } },
                  m,
                  y,
                ),
                children: r(ee, {
                  className: "framer-1581v8c",
                  layout: "position",
                  layoutDependency: u,
                  layoutId: "OBRNbMtYK-shape",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 592 105"><path d="M 1 11 C 1 5.477 5.477 1 11 1 L 128 1 C 133.523 1 138 5.477 138 11 L 138 94 C 138 99.523 133.523 104 128 104 L 11 104 C 5.477 104 1 99.523 1 94 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 152 11 C 152 5.477 156.477 1 162 1 L 279 1 C 284.523 1 289 5.477 289 11 L 289 94 C 289 99.523 284.523 104 279 104 L 162 104 C 156.477 104 152 99.523 152 94 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 303 11 C 303 5.477 307.477 1 313 1 L 430 1 C 435.523 1 440 5.477 440 11 L 440 94 C 440 99.523 435.523 104 430 104 L 313 104 C 307.477 104 303 99.523 303 94 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 454 11 C 454 5.477 458.477 1 464 1 L 581 1 C 586.523 1 591 5.477 591 11 L 591 94 C 591 99.523 586.523 104 581 104 L 464 104 C 458.477 104 454 99.523 454 94 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 219.268 32 C 220.038 30.667 221.962 30.667 222.732 32 L 246.981 74 C 247.751 75.333 246.788 77 245.249 77 L 196.751 77 C 195.212 77 194.249 75.333 195.019 74 Z" fill="var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15)) /* {&quot;name&quot;:&quot;Black 15&quot;} */"></path><path d="M 372 26 C 386.912 26 399 38.088 399 53 C 399 67.912 386.912 80 372 80 C 357.088 80 345 67.912 345 53 C 345 38.088 357.088 26 372 26 Z" fill="var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15)) /* {&quot;name&quot;:&quot;Black 15&quot;} */"></path><path d="M 67.707 31.26 C 68.44 29.773 70.56 29.773 71.293 31.26 L 77.117 43.059 C 77.408 43.649 77.971 44.059 78.623 44.153 L 91.644 46.045 C 93.284 46.284 93.939 48.3 92.752 49.457 L 83.33 58.641 C 82.859 59.101 82.643 59.763 82.755 60.411 L 84.979 73.38 C 85.259 75.014 83.544 76.26 82.077 75.488 L 70.431 69.365 C 69.848 69.059 69.152 69.059 68.569 69.365 L 56.923 75.488 C 55.456 76.26 53.741 75.014 54.021 73.38 L 56.245 60.411 C 56.357 59.763 56.141 59.101 55.67 58.641 L 46.248 49.457 C 45.061 48.3 45.716 46.284 47.356 46.045 L 60.377 44.153 C 61.029 44.059 61.592 43.649 61.883 43.059 Z" fill="var(--token-1d144205-f295-413d-addb-6f86809c83f1, rgba(0, 0, 0, 0.15)) /* {&quot;name&quot;:&quot;Black 15&quot;} */"></path><path d="M 521.5 25.577 C 522.119 25.22 522.881 25.22 523.5 25.577 L 545.316 38.173 C 545.935 38.53 546.316 39.19 546.316 39.905 L 546.316 65.095 C 546.316 65.81 545.935 66.47 545.316 66.827 L 523.5 79.423 C 522.881 79.78 522.119 79.78 521.5 79.423 L 499.684 66.827 C 499.065 66.47 498.684 65.81 498.684 65.095 L 498.684 39.905 C 498.684 39.19 499.065 38.53 499.684 38.173 Z" fill="#CCC"></path></svg>',
                  svgContentId: 11810328209,
                  withExternalLayout: !0,
                }),
              }),
              r(ee, {
                className: "framer-1ek7sd4",
                layout: "position",
                layoutDependency: u,
                layoutId: "RKiTYO3zW-shape",
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 138 139"><path d="M 7.751 45.506 C 9.583 20.418 30.47 1 55.624 1 L 82.376 1 C 107.53 1 128.417 20.418 130.249 45.506 L 137 138 L 1 138 Z" fill="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path><path d="M 69 1 L 69 23" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */"></path></svg>',
                svgContentId: 8671791120,
                withExternalLayout: !0,
                ...Jr({ wuXOcDovs: { svgContentId: 11571396993 } }, m, y),
              }),
              r(l.div, {
                className: "framer-1bzgjvf",
                "data-border": !0,
                "data-framer-name": "Wheel",
                layoutDependency: u,
                layoutId: "hFnm7ZSwj",
                style: {
                  "--border-bottom-width": "1.8px",
                  "--border-color":
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  "--border-left-width": "1.8px",
                  "--border-right-width": "1.8px",
                  "--border-style": "solid",
                  "--border-top-width": "1.8px",
                  backgroundColor:
                    "var(--token-b030a63b-659f-4465-829f-246a02e259cb, rgba(0, 0, 0, 0.1))",
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14,
                },
                children: r(pn, {
                  __framer__loop: K1,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 0.5,
                  __framer__loopRepeatType: "mirror",
                  __framer__loopTransition: un,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: "framer-hdjeq3",
                  layoutDependency: u,
                  layoutId: "a_NyKu9kI",
                  ...Jr(
                    { wuXOcDovs: { __framer__loopEffectEnabled: void 0 } },
                    m,
                    y,
                  ),
                  children: r(ee, {
                    className: "framer-1fauyad",
                    layout: "position",
                    layoutDependency: u,
                    layoutId: "k5IKYP7Cx-shape",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31 119"><path d="M 1 1.5 L 30 1.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 6.5 L 30 6.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 11.5 L 30 11.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 16.5 L 30 16.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 21.5 L 30 21.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 26.5 L 30 26.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 31.5 L 30 31.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 36.5 L 30 36.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 41.5 L 30 41.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 46.5 L 30 46.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 51.5 L 30 51.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 56.5 L 30 56.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 61.5 L 30 61.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 66.5 L 30 66.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 71.5 L 30 71.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 76.5 L 30 76.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 81.5 L 30 81.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 86.5 L 30 86.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 91.5 L 30 91.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 96.5 L 30 96.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 101.5 L 30 101.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 106.5 L 30 106.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 111.5 L 30 111.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 1 116.5 L 30 116.5" fill="transparent" stroke-width="1.8" stroke="var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                    svgContentId: 9645763554,
                    withExternalLayout: !0,
                  }),
                }),
              }),
              r(l.div, {
                className: "framer-vvylw5",
                layoutDependency: u,
                layoutId: "ejmxqSSHy",
                style: {
                  backgroundColor:
                    "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                  borderBottomLeftRadius: 7,
                  borderBottomRightRadius: 7,
                  borderTopLeftRadius: 7,
                  borderTopRightRadius: 7,
                },
                children: r($, {
                  __fromCanvasComponent: !0,
                  children: r(F, {
                    children: r(l.p, {
                      className: "framer-styles-preset-9jlebu",
                      "data-styles-preset": "sSyE5_N0_",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)))",
                      },
                      children: "Beta",
                    }),
                  }),
                  className: "framer-6ughxg",
                  fonts: ["Inter"],
                  layoutDependency: u,
                  layoutId: "xWr3bZxcF",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  og = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-42T8w.framer-ascpbu, .framer-42T8w .framer-ascpbu { display: block; }",
    ".framer-42T8w.framer-1nf3z4b { height: 214px; overflow: hidden; position: relative; width: 286px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-42T8w .framer-1yqri65 { flex: none; height: 105px; overflow: visible; position: absolute; right: -346px; top: 40px; width: 592px; }",
    ".framer-42T8w .framer-1581v8c { flex: none; height: 105px; left: calc(50.00000000000002% - 592px / 2); position: absolute; top: calc(49.52380952380955% - 105px / 2); width: 592px; }",
    ".framer-42T8w .framer-1ek7sd4 { bottom: -45px; flex: none; height: 139px; left: calc(49.50000000000002% - 138px / 2); position: absolute; width: 138px; }",
    ".framer-42T8w .framer-1bzgjvf { bottom: 23px; flex: none; height: 49px; left: calc(49.650349650349675% - 25px / 2); overflow: hidden; position: absolute; width: 25px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-42T8w .framer-hdjeq3 { bottom: -3px; flex: none; height: 119px; left: 0px; overflow: visible; position: absolute; right: 1px; }",
    ".framer-42T8w .framer-1fauyad { flex: none; height: 119px; left: calc(45.83333333333336% - 31px / 2); position: absolute; top: calc(49.57983193277313% - 119px / 2); width: 31px; }",
    ".framer-42T8w .framer-vvylw5 { align-content: center; align-items: center; bottom: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 12px; overflow: hidden; padding: 2px 10px 2px 10px; position: absolute; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-42T8w .framer-6ughxg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-42T8w .framer-vvylw5 { gap: 0px; } .framer-42T8w .framer-vvylw5 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-42T8w .framer-vvylw5 > :first-child { margin-top: 0px; } .framer-42T8w .framer-vvylw5 > :last-child { margin-bottom: 0px; } }",
    ".framer-42T8w.framer-v-c1vsh .framer-1ek7sd4 { bottom: -46px; left: calc(49.650349650349675% - 138px / 2); }",
    ...de,
    '.framer-42T8w[data-border="true"]::after, .framer-42T8w [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  _r = q(ag, og, "framer-42T8w"),
  Qa = _r;
_r.displayName = "Utilities/ScrollAssistant";
_r.defaultProps = { height: 214, width: 286 };
M(_r, {
  variant: {
    options: ["aMllQyYGb", "wuXOcDovs"],
    optionTitles: ["ON", "OFF"],
    title: "Variant",
    type: x.Enum,
  },
});
z(
  _r,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var ng = Y(ht),
  ig = Y(Qa),
  sg = Fe($),
  lg = Re($),
  fg = ["ZuBY0N3FQ", "qiYYLD700"],
  cg = "framer-U6LWb",
  mg = { qiYYLD700: "framer-v-15qf2cx", ZuBY0N3FQ: "framer-v-itodxn" };
function hn(e, ...t) {
  let o = {};
  return t?.forEach((a) => a && Object.assign(o, e[a])), o;
}
var dg = { damping: 28, delay: 0, mass: 1, stiffness: 170, type: "spring" },
  pg = (e, t) => `translateX(-50%) ${t}`,
  gn = (e, t) => `translate(-50%, -50%) ${t}`,
  ug = ({ value: e, children: t }) => {
    let o = P(S),
      a = e ?? o.transition,
      n = j(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return r(S.Provider, { value: n, children: t });
  },
  hg = l(F),
  gg = { Collasped: "qiYYLD700", Expanded: "ZuBY0N3FQ" },
  yg = ({ close: e, height: t, id: o, open: a, width: n, ...s }) => {
    var i, f;
    return {
      ...s,
      d6MkcFD8T: e ?? s.d6MkcFD8T,
      kEaKLjxdV: a ?? s.kEaKLjxdV,
      variant:
        (f = (i = gg[s.variant]) !== null && i !== void 0 ? i : s.variant) !==
          null && f !== void 0
          ? f
          : "ZuBY0N3FQ",
    };
  },
  vg = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  xg = N(function (e, t) {
    let { activeLocale: o, setLocale: a } = O(),
      {
        style: n,
        className: s,
        layoutId: i,
        variant: f,
        kEaKLjxdV: c,
        d6MkcFD8T: m,
        ...p
      } = yg(e),
      {
        baseVariant: d,
        classNames: y,
        clearLoadingGesture: b,
        gestureHandlers: h,
        gestureVariant: w,
        isLoading: u,
        setGestureState: k,
        setVariant: g,
        variants: v,
      } = G({
        cycleOrder: fg,
        defaultVariant: "ZuBY0N3FQ",
        variant: f,
        variantClassNames: mg,
      }),
      C = vg(e, v),
      { activeVariantCallback: L, delay: D } = ne(d),
      _ = L(async (...le) => {
        if (m && (await m(...le)) === !1) return !1;
      }),
      Z = L(async (...le) => {
        if (c && (await c(...le)) === !1) return !1;
      }),
      X = T(null),
      H = A(),
      K = [pe],
      te = J();
    return r(B, {
      id: i ?? H,
      children: r(hg, {
        animate: v,
        initial: !1,
        children: r(ug, {
          value: dg,
          children: I(l.div, {
            ...p,
            ...h,
            className: E(cg, ...K, "framer-itodxn", s, y),
            "data-framer-name": "Expanded",
            layoutDependency: C,
            layoutId: "ZuBY0N3FQ",
            ref: t ?? X,
            style: { ...n },
            ...hn({ qiYYLD700: { "data-framer-name": "Collasped" } }, d, w),
            children: [
              r(Q, {
                children: r(l.div, {
                  className: "framer-ybl0gi-container",
                  layoutDependency: C,
                  layoutId: "Wtd9D4iqM-container",
                  style: { opacity: 1, scale: 1 },
                  transformTemplate: pg,
                  variants: { qiYYLD700: { opacity: 0, scale: 0.4 } },
                  children: r(ht, {
                    heeY2JMQ7: _,
                    height: "100%",
                    id: "Wtd9D4iqM",
                    layoutId: "Wtd9D4iqM",
                    variant: "J2J3k_z92",
                    width: "100%",
                  }),
                }),
              }),
              r(l.div, {
                className: "framer-109uxv3",
                "data-framer-name": "Space",
                "data-highlight": !0,
                layoutDependency: C,
                layoutId: "ZgMUIKzuk",
                onTap: Z,
                style: {
                  borderBottomLeftRadius: 24,
                  borderBottomRightRadius: 24,
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                },
                children: I(l.div, {
                  className: "framer-1pyz0qx",
                  "data-framer-name": "Content",
                  layoutDependency: C,
                  layoutId: "GYVZD2n69",
                  style: {
                    backgroundColor:
                      "var(--token-50dd0df5-e960-4a6c-8af2-3b7603ba51c8, rgba(0, 0, 0, 0))",
                  },
                  transformTemplate: gn,
                  variants: {
                    qiYYLD700: {
                      backgroundColor:
                        "var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, rgb(0, 0, 0))",
                    },
                  },
                  children: [
                    I(l.div, {
                      className: "framer-1sji601",
                      layoutDependency: C,
                      layoutId: "kUph1Kh9V",
                      style: {
                        backgroundColor:
                          "var(--token-d5b2c715-53d2-46d4-afbc-b28efb0692ca, rgba(232, 232, 232, 0.7))",
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                      },
                      variants: {
                        qiYYLD700: {
                          backgroundColor:
                            "var(--token-0998aeba-5eb4-400a-87c6-fe3a20398e99, rgba(232, 232, 232, 0))",
                        },
                      },
                      children: [
                        r(l.div, {
                          className: "framer-1wauial",
                          "data-framer-name": "Animation",
                          layoutDependency: C,
                          layoutId: "GCW2kzps9",
                          style: {
                            backgroundColor:
                              "var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255))",
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16,
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            opacity: 1,
                          },
                          variants: { qiYYLD700: { opacity: 0 } },
                          children: r(Q, {
                            width: "286px",
                            children: r(l.div, {
                              className: "framer-126y4la-container",
                              layoutDependency: C,
                              layoutId: "B3U37AjtO-container",
                              children: r(Qa, {
                                height: "100%",
                                id: "B3U37AjtO",
                                layoutId: "B3U37AjtO",
                                style: { height: "100%", width: "100%" },
                                variant: "aMllQyYGb",
                                width: "100%",
                                ...hn(
                                  { qiYYLD700: { variant: "wuXOcDovs" } },
                                  d,
                                  w,
                                ),
                              }),
                            }),
                          }),
                        }),
                        I(l.div, {
                          className: "framer-rnaa0b",
                          "data-framer-name": "Description",
                          layoutDependency: C,
                          layoutId: "GjqRFOKIa",
                          style: { opacity: 1 },
                          variants: { qiYYLD700: { opacity: 0 } },
                          children: [
                            r(sg, {
                              __fromCanvasComponent: !0,
                              children: r(F, {
                                children: r(l.p, {
                                  className: "framer-styles-preset-9jlebu",
                                  "data-styles-preset": "sSyE5_N0_",
                                  children:
                                    "In the cases where you don't have a touch device, use the mouse wheel to control the stack.",
                                }),
                              }),
                              className: "framer-ychzne",
                              fonts: ["Inter"],
                              layoutDependency: C,
                              layoutId: "ysKHWzJ8x",
                              style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                              },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            r(lg, {
                              __fromCanvasComponent: !0,
                              children: r(F, {
                                children: r(l.p, {
                                  className: "framer-styles-preset-9jlebu",
                                  "data-styles-preset": "sSyE5_N0_",
                                  children:
                                    "\u5728\u4E0D\u4F7F\u7528\u89E6\u6478\u8BBE\u5907\u7684\u60C5\u51B5\u4E0B\uFF0C\u542F\u7528\u9F20\u6807\u6EDA\u8F6E\u6765\u63A7\u5236\u6C34\u5E73\u6EDA\u52A8\u3002",
                                }),
                              }),
                              className: "framer-19uykqd",
                              fonts: ["Inter"],
                              layoutDependency: C,
                              layoutId: "m_Pr6EZFH",
                              style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                              },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    r(l.div, {
                      className: "framer-19ladts",
                      "data-framer-name": "Info",
                      layoutDependency: C,
                      layoutId: "jIQ09QLTh",
                      style: {
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        opacity: 0,
                        scale: 4,
                      },
                      transformTemplate: gn,
                      variants: { qiYYLD700: { opacity: 1, scale: 1 } },
                      children: r(ee, {
                        className: "framer-w2imfx",
                        layout: "position",
                        layoutDependency: C,
                        layoutId: "Y82oAtoCy",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 10"><path d="M 2.987 2 L 2.994 2" fill="transparent" stroke-width="1.8" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 3 8.667 L 3 5.333" fill="transparent" stroke-width="1.5" stroke="var(--token-c2d1fabf-b433-4a44-8215-ec448220e490, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White 100&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 10737003728,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  bg = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-U6LWb.framer-ysklkh, .framer-U6LWb .framer-ysklkh { display: block; }",
    ".framer-U6LWb.framer-itodxn { height: 300px; overflow: visible; position: relative; width: 302px; }",
    ".framer-U6LWb .framer-ybl0gi-container { bottom: -62px; flex: none; height: auto; left: 50%; pointer-events: auto; position: absolute; width: auto; }",
    ".framer-U6LWb .framer-109uxv3 { bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-U6LWb .framer-1pyz0qx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 50%; width: 302px; }",
    ".framer-U6LWb .framer-1sji601 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 300px; justify-content: center; overflow: hidden; padding: 8px 8px 12px 8px; position: relative; width: 302px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-U6LWb .framer-1wauial { aspect-ratio: 1.3333333333333333 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 150px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-U6LWb .framer-126y4la-container { bottom: 1px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-U6LWb .framer-rnaa0b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 58px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 10px; position: relative; width: 100%; }",
    ".framer-U6LWb .framer-ychzne, .framer-U6LWb .framer-19uykqd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-U6LWb .framer-19ladts { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; overflow: hidden; pointer-events: none; position: absolute; top: 50%; width: 16px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-U6LWb .framer-w2imfx { flex: none; height: 10px; left: calc(50.00000000000002% - 6px / 2); position: absolute; top: calc(50.00000000000002% - 10px / 2); width: 6px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-U6LWb .framer-1pyz0qx, .framer-U6LWb .framer-1sji601, .framer-U6LWb .framer-rnaa0b { gap: 0px; } .framer-U6LWb .framer-1pyz0qx > *, .framer-U6LWb .framer-1sji601 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-U6LWb .framer-1pyz0qx > :first-child, .framer-U6LWb .framer-1sji601 > :first-child, .framer-U6LWb .framer-rnaa0b > :first-child { margin-top: 0px; } .framer-U6LWb .framer-1pyz0qx > :last-child, .framer-U6LWb .framer-1sji601 > :last-child, .framer-U6LWb .framer-rnaa0b > :last-child { margin-bottom: 0px; } .framer-U6LWb .framer-rnaa0b > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    ".framer-U6LWb.framer-v-15qf2cx.framer-itodxn { height: 20px; overflow: hidden; width: 20px; }",
    ".framer-U6LWb.framer-v-15qf2cx .framer-ybl0gi-container { bottom: -51px; }",
    ".framer-U6LWb.framer-v-15qf2cx .framer-109uxv3 { bottom: 2px; left: 2px; right: 2px; top: 2px; }",
    ...de,
  ],
  Fr = q(xg, bg, "framer-U6LWb"),
  wg = Fr;
Fr.displayName = "Utilities/PopupWheel";
Fr.defaultProps = { height: 300, width: 302 };
M(Fr, {
  variant: {
    options: ["ZuBY0N3FQ", "qiYYLD700"],
    optionTitles: ["Expanded", "Collasped"],
    title: "Variant",
    type: x.Enum,
  },
  kEaKLjxdV: { title: "Open", type: x.EventHandler },
  d6MkcFD8T: { title: "Close", type: x.EventHandler },
});
z(
  Fr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...ng,
    ...ig,
    ...se(me),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var kg = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerXmmnHeSMP",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "300",
        framerIntrinsicWidth: "302",
        framerImmutableVariables: "true",
        framerVariables: '{"kEaKLjxdV":"open","d6MkcFD8T":"close"}',
        framerComponentViewportWidth: "true",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"qiYYLD700":{"layout":["fixed","fixed"]}}}',
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
var Ya = ze({ popup: !1, popup_nav: !1 }),
  yn = { type: "spring", stiffness: 170, damping: 28 };
var _g = {
  show: { opacity: 1, scale: 1, transition: { ...yn, delay: 0.2 } },
  hide: { opacity: 0, scale: 0.9, transition: yn },
};
function q8(e) {
  return (t) => {
    let [o, a] = Ya(),
      [n, s] = W();
    return (
      re(() => {
        n.setting === !1 && a({ popup: !1, popup_nav: !1 });
      }, [n.setting]),
      r(e, {
        ...t,
        style: {
          ...t.style,
          pointerEvents: o.popup || o.popup_nav ? "none" : "auto",
        },
        variants: _g,
        initial: "show",
        animate: o.popup || o.popup_nav ? "hide" : "show",
      })
    );
  };
}
function H8(e) {
  return (t) => {
    let [o, a] = Ya();
    return r(l.div, {
      style: {
        position: "absolute",
        width: "max-content",
        height: "max-content",
      },
      initial: { x: 0, y: 0 },
      animate: {
        scale: o.popup_nav ? 0.4 : 1,
        opacity: o.popup_nav ? 0 : 1,
        x: o.popup ? -156 : 0,
        y: o.popup ? -150 : 0,
        zIndex: o.popup ? 5 : 4,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 30,
          zIndex: { delay: 0.4 },
        },
      },
      children: r(e, {
        ...t,
        style: { ...t.style },
        variant: o.popup ? "Expanded" : "Collasped",
        close: () => {
          a({ popup: !1 });
        },
        open: () => a({ popup: !0, popup_nav: !1 }),
      }),
    });
  };
}
function P8(e) {
  return (t) => {
    let [o, a] = Ya();
    return r(l.div, {
      style: {
        position: "absolute",
        width: "max-content",
        height: "max-content",
      },
      initial: { x: 0, y: 0 },
      animate: {
        scale: o.popup ? 0.4 : 1,
        opacity: o.popup ? 0 : 1,
        x: o.popup_nav ? -156 : 0,
        y: o.popup_nav ? -233 : 0,
        zIndex: o.popup_nav ? 5 : 4,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 30,
          zIndex: { delay: 0.4 },
        },
      },
      children: r(e, {
        ...t,
        style: { ...t.style },
        variant: o.popup_nav ? "Expanded" : "Collasped",
        close: () => {
          a({ popup_nav: !1 });
        },
        open: () => a({ popup_nav: !0, popup: !1 }),
      }),
    });
  };
}
ue.loadFonts([]);
var z8 = [{ explicitInter: !0, fonts: [] }],
  X8 = [
    '.framer-X5oWa .framer-styles-preset-i9szyw:not(.rich-text-wrapper), .framer-X5oWa .framer-styles-preset-i9szyw.rich-text-wrapper a { --framer-link-current-text-color: var(--token-341b04b2-a492-491e-85d2-ad596063a51c, #f06448) /* {"name":"Theme"} */; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: var(--token-46294d69-7c7f-4036-8b2c-a3ef80ae1f58, #000000) /* {"name":"Black 100"} */; --framer-link-hover-text-decoration: underline; --framer-link-text-color: var(--token-341b04b2-a492-491e-85d2-ad596063a51c, #f06448); --framer-link-text-decoration: underline; transition: color 0.2s cubic-bezier(0.44, 0, 0.56, 1) 0s; }',
  ],
  W8 = "framer-X5oWa";
var Rr = (e) => e;
var $r = { ms: (e) => 1e3 * e, s: (e) => e / 1e3 };
function Ka(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var vn = (e, t, o) =>
    (((1 - 3 * o + 3 * t) * e + (3 * o - 6 * t)) * e + 3 * t) * e,
  Fg = 1e-7,
  Rg = 12;
function Sg(e, t, o, a, n) {
  let s,
    i,
    f = 0;
  do (i = t + (o - t) / 2), (s = vn(i, a, n) - e), s > 0 ? (o = i) : (t = i);
  while (Math.abs(s) > Fg && ++f < Rg);
  return i;
}
function Sr(e, t, o, a) {
  if (e === t && o === a) return Rr;
  let n = (s) => Sg(s, 0, 1, e, o);
  return (s) => (s === 0 || s === 1 ? s : vn(n(s), t, a));
}
var sk = {
  ease: Sr(0.25, 0.1, 0.25, 1),
  "ease-in": Sr(0.42, 0, 1, 1),
  "ease-in-out": Sr(0.42, 0, 0.58, 1),
  "ease-out": Sr(0, 0, 0.58, 1),
};
function xn(e, t) {
  var o = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      t.indexOf(a) < 0 &&
      (o[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var n = 0;
    for (a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
        (o[a[n]] = e[a[n]]);
  }
  return o;
}
var Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.warning = function () {};
Ut.invariant = function () {};
var dk = Ut.__esModule,
  pk = Ut.warning,
  Dg = Ut.invariant;
var Tg = 5;
function ea(e, t, o) {
  let a = Math.max(t - Tg, 0);
  return Ka(o - e(a), t - a);
}
var Dt = { stiffness: 100, damping: 10, mass: 1 },
  Eg = (e = Dt.stiffness, t = Dt.damping, o = Dt.mass) =>
    t / (2 * Math.sqrt(e * o));
function jg(e, t, o) {
  return (e < t && o >= t) || (e > t && o <= t);
}
var $a = ({
    stiffness: e = Dt.stiffness,
    damping: t = Dt.damping,
    mass: o = Dt.mass,
    from: a = 0,
    to: n = 1,
    velocity: s = 0,
    restSpeed: i = 2,
    restDistance: f = 0.5,
  } = {}) => {
    s = s ? $r.s(s) : 0;
    let c = { done: !1, hasReachedTarget: !1, current: a, target: n },
      m = n - a,
      p = Math.sqrt(e / o) / 1e3,
      d = Eg(e, t, o),
      y;
    if (d < 1) {
      let b = p * Math.sqrt(1 - d * d);
      y = (h) =>
        n -
        Math.exp(-d * p * h) *
          (((d * p * m - s) / b) * Math.sin(b * h) + m * Math.cos(b * h));
    } else y = (b) => n - Math.exp(-p * b) * (m + (p * m - s) * b);
    return (b) => {
      c.current = y(b);
      let h = b === 0 ? s : ea(y, b, c.current),
        w = Math.abs(h) <= i,
        u = Math.abs(n - c.current) <= f;
      return (c.done = w && u), (c.hasReachedTarget = jg(a, n, c.current)), c;
    };
  },
  bn = ({
    from: e = 0,
    velocity: t = 0,
    power: o = 0.8,
    decay: a = 0.325,
    bounceDamping: n,
    bounceStiffness: s,
    changeTarget: i,
    min: f,
    max: c,
    restDistance: m = 0.5,
    restSpeed: p,
  }) => {
    a = $r.ms(a);
    let d = { hasReachedTarget: !1, done: !1, current: e, target: e },
      y = (_) => (f !== void 0 && _ < f) || (c !== void 0 && _ > c),
      b = (_) =>
        f === void 0
          ? c
          : c === void 0 || Math.abs(f - _) < Math.abs(c - _)
            ? f
            : c,
      h = o * t,
      w = e + h,
      u = i === void 0 ? w : i(w);
    (d.target = u), u !== w && (h = u - e);
    let k = (_) => -h * Math.exp(-_ / a),
      g = (_) => u + k(_),
      v = (_) => {
        let Z = k(_),
          X = g(_);
        (d.done = Math.abs(Z) <= m), (d.current = d.done ? u : X);
      },
      C,
      L,
      D = (_) => {
        y(d.current) &&
          ((C = _),
          (L = $a({
            from: d.current,
            to: b(d.current),
            velocity: ea(g, _, d.current),
            damping: n,
            stiffness: s,
            restDistance: m,
            restSpeed: p,
          })));
      };
    return (
      D(0),
      (_) => {
        let Z = !1;
        return (
          !L && C === void 0 && ((Z = !0), v(_), D(_)),
          C !== void 0 && _ > C
            ? ((d.hasReachedTarget = !0), L(_ - C))
            : ((d.hasReachedTarget = !1), !Z && v(_), d)
        );
      }
    );
  },
  Ja = 10,
  Mg = 1e4;
function wn(e) {
  let t,
    o = Ja,
    a = e(0),
    n = [a.current];
  for (; !a.done && o < Mg; )
    (a = e(o)),
      n.push(a.done ? a.target : a.current),
      t === void 0 && a.hasReachedTarget && (t = o),
      (o += Ja);
  let s = o - Ja;
  return (
    n.length === 1 && n.push(a.current),
    { keyframes: n, duration: s / 1e3, overshootDuration: (t ?? s) / 1e3 }
  );
}
var Ng = ["", "X", "Y", "Z"],
  Bg = ["translate", "scale", "rotate", "skew"];
var kn = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (e) => e + "deg",
  },
  qg = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (e) => e + "px",
    },
    rotate: kn,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: Rr },
    skew: kn,
  },
  Hg = new Map(),
  Pg = (e) => `--motion-${e}`,
  Sn = ["x", "y", "z"];
Bg.forEach((e) => {
  Ng.forEach((t) => {
    Sn.push(e + t), Hg.set(Pg(e + t), qg[e]);
  });
});
var qk = new Set(Sn);
var Cn = (e) => document.createElement("div").animate(e, { duration: 0.001 }),
  _n = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        Cn({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!Cn({ opacity: [0, 1] }).finished,
  },
  eo = {},
  Ag = {};
for (let e in _n) Ag[e] = () => (eo[e] === void 0 && (eo[e] = _n[e]()), eo[e]);
function Ln(e, t) {
  var o;
  return (
    typeof e == "string"
      ? t
        ? (((o = t[e]) !== null && o !== void 0) ||
            (t[e] = document.querySelectorAll(e)),
          (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function In(e) {
  let t = new WeakMap();
  return (o = {}) => {
    let a = new Map(),
      n = (i = 0, f = 100, c = 0, m = !1) => {
        let p = `${i}-${f}-${c}-${m}`;
        return (
          a.has(p) ||
            a.set(
              p,
              e(
                Object.assign(
                  {
                    from: i,
                    to: f,
                    velocity: c,
                    restSpeed: m ? 0.05 : 2,
                    restDistance: m ? 0.01 : 0.5,
                  },
                  o,
                ),
              ),
            ),
          a.get(p)
        );
      },
      s = (i) => (t.has(i) || t.set(i, wn(i)), t.get(i));
    return {
      createAnimation: (i, f, c, m, p) => {
        var d, y;
        let b,
          h = i.length;
        if (c && h <= 2 && i.every(Og)) {
          let u = i[h - 1],
            k = h === 1 ? null : i[0],
            g = 0,
            v = 0,
            C = p?.generator;
          if (C) {
            let { animation: _, generatorStartTime: Z } = p,
              X = _?.startTime || Z || 0,
              H = _?.currentTime || performance.now() - X,
              K = C(H).current;
            (v = (d = k) !== null && d !== void 0 ? d : K),
              (h === 1 || (h === 2 && i[0] === null)) &&
                (g = ea((te) => C(te).current, H, K));
          } else v = (y = k) !== null && y !== void 0 ? y : parseFloat(f());
          let L = n(v, u, g, m?.includes("scale")),
            D = s(L);
          (b = Object.assign(Object.assign({}, D), { easing: "linear" })),
            p &&
              ((p.generator = L), (p.generatorStartTime = performance.now()));
        } else b = { easing: "ease", duration: s(n(0, 100)).overshootDuration };
        return b;
      },
    };
  };
}
var Og = (e) => typeof e != "string",
  Hk = In($a),
  Pk = In(bn),
  Gg = { any: 0, all: 1 };
function zg(e, t, { root: o, margin: a, amount: n = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let s = Ln(e),
    i = new WeakMap(),
    f = (m) => {
      m.forEach((p) => {
        let d = i.get(p.target);
        if (p.isIntersecting !== !!d)
          if (p.isIntersecting) {
            let y = t(p);
            typeof y == "function" ? i.set(p.target, y) : c.unobserve(p.target);
          } else d && (d(p), i.delete(p.target));
      });
    },
    c = new IntersectionObserver(f, {
      root: o,
      rootMargin: a,
      threshold: typeof n == "number" ? n : Gg[n],
    });
  return s.forEach((m) => c.observe(m)), () => c.disconnect();
}
var ta = new WeakMap(),
  ct;
function Xg(e, t) {
  if (t) {
    let { inlineSize: o, blockSize: a } = t[0];
    return { width: o, height: a };
  }
  return e instanceof SVGElement && "getBBox" in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function Wg({ target: e, contentRect: t, borderBoxSize: o }) {
  var a;
  (a = ta.get(e)) === null ||
    a === void 0 ||
    a.forEach((n) => {
      n({
        target: e,
        contentSize: t,
        get size() {
          return Xg(e, o);
        },
      });
    });
}
function Zg(e) {
  e.forEach(Wg);
}
function Qg() {
  typeof ResizeObserver < "u" && (ct = new ResizeObserver(Zg));
}
function Yg(e, t) {
  ct || Qg();
  let o = Ln(e);
  return (
    o.forEach((a) => {
      let n = ta.get(a);
      n || ((n = new Set()), ta.set(a, n)), n.add(t), ct?.observe(a);
    }),
    () => {
      o.forEach((a) => {
        let n = ta.get(a);
        n?.delete(t), n?.size || ct?.unobserve(a);
      });
    }
  );
}
var ra = new Set(),
  Lr;
function Kg() {
  (Lr = () => {
    let e = { width: R.innerWidth, height: R.innerHeight },
      t = { target: R, size: e, contentSize: e };
    ra.forEach((o) => o(t));
  }),
    R.addEventListener("resize", Lr);
}
function Jg(e) {
  return (
    ra.add(e),
    Lr || Kg(),
    () => {
      ra.delete(e), !ra.size && Lr && (Lr = void 0);
    }
  );
}
function Ak(e, t) {
  return typeof e == "function" ? Jg(e) : Yg(e, t);
}
function to(e, t, o) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: o } }));
}
function Fn(e, t, o) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: o } }));
}
var $g = {
    isActive: (e) => !!e.inView,
    subscribe: (e, { enable: t, disable: o }, { inViewOptions: a = {} }) => {
      let { once: n } = a,
        s = xn(a, ["once"]);
      return zg(
        e,
        (i) => {
          if ((t(), Fn(e, "viewenter", i), !n))
            return (f) => {
              o(), Fn(e, "viewleave", f);
            };
        },
        s,
      );
    },
  },
  Rn = (e, t, o) => (a) => {
    (!a.pointerType || a.pointerType === "mouse") && (o(), to(e, t, a));
  },
  ey = {
    isActive: (e) => !!e.hover,
    subscribe: (e, { enable: t, disable: o }) => {
      let a = Rn(e, "hoverstart", t),
        n = Rn(e, "hoverend", o);
      return (
        e.addEventListener("pointerenter", a),
        e.addEventListener("pointerleave", n),
        () => {
          e.removeEventListener("pointerenter", a),
            e.removeEventListener("pointerleave", n);
        }
      );
    },
  },
  ty = {
    isActive: (e) => !!e.press,
    subscribe: (e, { enable: t, disable: o }) => {
      let a = (s) => {
          o(), to(e, "pressend", s), R.removeEventListener("pointerup", a);
        },
        n = (s) => {
          t(), to(e, "pressstart", s), R.addEventListener("pointerup", a);
        };
      return (
        e.addEventListener("pointerdown", n),
        () => {
          e.removeEventListener("pointerdown", n),
            R.removeEventListener("pointerup", a);
        }
      );
    },
  },
  ry = { inView: $g, hover: ey, press: ty },
  Ok = ["initial", "animate", ...Object.keys(ry), "exit"];
export {
  ze as a,
  En as b,
  je as c,
  fe as d,
  ie as e,
  he as f,
  W as g,
  Iy as h,
  Vy as i,
  Uy as j,
  Dy as k,
  Ty as l,
  Ey as m,
  jy as n,
  My as o,
  Ny as p,
  By as q,
  qy as r,
  Hy as s,
  Py as t,
  Ay as u,
  Oy as v,
  Gy as w,
  zy as x,
  Xy as y,
  Wy as z,
  Zy as A,
  Qy as B,
  Yy as C,
  Ky as D,
  Jy as E,
  $y as F,
  uo as G,
  e2 as H,
  s2 as I,
  y2 as J,
  v2 as K,
  x2 as L,
  b2 as M,
  w2 as N,
  k2 as O,
  C2 as P,
  _2 as Q,
  xo as R,
  F2 as S,
  R2 as T,
  S2 as U,
  L2 as V,
  Er as W,
  Fo as X,
  I2 as Y,
  Fe as Z,
  Re as _,
  V2 as $,
  U2 as aa,
  D2 as ba,
  me as ca,
  de as da,
  pe as ea,
  De as fa,
  fa as ga,
  ca as ha,
  nv as ia,
  ht as ja,
  es as ka,
  Is as la,
  Us as ma,
  Uv as na,
  Dv as oa,
  Eo as pa,
  Tv as qa,
  Ev as ra,
  jv as sa,
  Mv as ta,
  Nv as ua,
  Bv as va,
  qv as wa,
  Hv as xa,
  Pv as ya,
  Av as za,
  Ov as Aa,
  rx as Ba,
  Of as Ca,
  zf as Da,
  lc as Ea,
  cc as Fa,
  jc as Ga,
  Nc as Ha,
  Lt as Ia,
  Ym as Ja,
  Km as Ka,
  $m as La,
  ed as Ma,
  rd as Na,
  nd as Oa,
  La as Pa,
  Ia as Qa,
  Pr as Ra,
  Ar as Sa,
  Or as Ta,
  qo as Ua,
  Ho as Va,
  Po as Wa,
  ka as Xa,
  zo as Ya,
  Xo as Za,
  Wo as _a,
  Ft as $a,
  Rt as ab,
  St as bb,
  Ra as cb,
  Te as db,
  Ow as eb,
  Ww as fb,
  Zw as gb,
  Qw as hb,
  $w as ib,
  e3 as jb,
  t3 as kb,
  Ak as lb,
  n3 as mb,
  i3 as nb,
  s3 as ob,
  Qp as pb,
  Kp as qb,
  uu as rb,
  gu as sb,
  Vu as tb,
  Du as ub,
  w0 as vb,
  C0 as wb,
  X3 as xb,
  W3 as yb,
  Z3 as zb,
  K3 as Ab,
  J3 as Bb,
  r6 as Cb,
  a6 as Db,
  o6 as Eb,
  l6 as Fb,
  f6 as Gb,
  c6 as Hb,
  u6 as Ib,
  h6 as Jb,
  g6 as Kb,
  z8 as Lb,
  X8 as Mb,
  W8 as Nb,
  b6 as Ob,
  w6 as Pb,
  k6 as Qb,
  O6 as Rb,
  K6 as Sb,
  Kh as Tb,
  $h as Ub,
  p1 as Vb,
  h1 as Wb,
  O1 as Xb,
  z1 as Yb,
  wg as Zb,
  Cg as _b,
  q8 as $b,
  H8 as ac,
  P8 as bc,
};
//# sourceMappingURL=chunk-ZEPEXD57.mjs.map
