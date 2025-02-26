import { Ia as st, ga as h, ja as ot } from "./chunk-NAESFJNX.mjs";
var oe,
  L,
  $,
  Ct = Object.create,
  vt = Object.defineProperty,
  Mt = Object.getOwnPropertyDescriptor,
  wt = Object.getOwnPropertyNames,
  Et = Object.getPrototypeOf,
  Dt = Object.prototype.hasOwnProperty,
  le = (e, t) =>
    function () {
      return t || (0, e[wt(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Ft = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let f of wt(t))
        Dt.call(e, f) ||
          f === r ||
          vt(e, f, {
            get: () => t[f],
            enumerable: !(a = Mt(t, f)) || a.enumerable,
          });
    return e;
  },
  nt = (e, t, r) => (
    (r = e != null ? Ct(Et(e)) : {}),
    Ft(
      !t && e && e.__esModule
        ? r
        : vt(r, "default", { value: e, enumerable: !0 }),
      e,
    )
  ),
  Pt = le({
    "../../../node_modules/dataloader/index.js"(e, t) {
      var r,
        a = (function () {
          function u(n, o) {
            if (typeof n != "function")
              throw TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  n +
                  ".",
              );
            (this._batchLoadFn = n),
              (this._maxBatchSize = (function (l) {
                if (!(!l || l.batch !== !1)) return 1;
                var c = l && l.maxBatchSize;
                if (c === void 0) return 1 / 0;
                if (typeof c != "number" || c < 1)
                  throw TypeError(
                    "maxBatchSize must be a positive number: " + c,
                  );
                return c;
              })(o)),
              (this._batchScheduleFn = (function (l) {
                var c = l && l.batchScheduleFn;
                if (c === void 0) return f;
                if (typeof c != "function")
                  throw TypeError("batchScheduleFn must be a function: " + c);
                return c;
              })(o)),
              (this._cacheKeyFn = (function (l) {
                var c = l && l.cacheKeyFn;
                if (c === void 0)
                  return function (v) {
                    return v;
                  };
                if (typeof c != "function")
                  throw TypeError("cacheKeyFn must be a function: " + c);
                return c;
              })(o)),
              (this._cacheMap = (function (l) {
                if (!(!l || l.cache !== !1)) return null;
                var c = l && l.cacheMap;
                if (c === void 0) return new Map();
                if (c !== null) {
                  var v = ["get", "set", "delete", "clear"].filter(
                    function (d) {
                      return c && typeof c[d] != "function";
                    },
                  );
                  if (v.length !== 0)
                    throw TypeError(
                      "Custom cacheMap missing methods: " + v.join(", "),
                    );
                }
                return c;
              })(o)),
              (this._batch = null),
              (this.name = o && o.name ? o.name : null);
          }
          var i = u.prototype;
          return (
            (i.load = function (n) {
              if (n == null)
                throw TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(n) +
                    ".",
                );
              var o = (function (b) {
                  var w = b._batch;
                  if (
                    w !== null &&
                    !w.hasDispatched &&
                    w.keys.length < b._maxBatchSize
                  )
                    return w;
                  var _ = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (b._batch = _),
                    b._batchScheduleFn(function () {
                      (function (x, T) {
                        var m;
                        if (((T.hasDispatched = !0), T.keys.length === 0)) {
                          p(T);
                          return;
                        }
                        try {
                          m = x._batchLoadFn(T.keys);
                        } catch (k) {
                          return s(
                            x,
                            T,
                            TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(k) +
                                ".",
                            ),
                          );
                        }
                        if (!m || typeof m.then != "function")
                          return s(
                            x,
                            T,
                            TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(m) +
                                ".",
                            ),
                          );
                        m.then(function (k) {
                          if (!g(k))
                            throw TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(k) +
                                ".",
                            );
                          if (k.length !== T.keys.length)
                            throw TypeError(
                              `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                String(T.keys) +
                                `

Values:
` +
                                String(k),
                            );
                          p(T);
                          for (var B = 0; B < T.callbacks.length; B++) {
                            var I = k[B];
                            I instanceof Error
                              ? T.callbacks[B].reject(I)
                              : T.callbacks[B].resolve(I);
                          }
                        }).catch(function (k) {
                          s(x, T, k);
                        });
                      })(b, _);
                    }),
                    _
                  );
                })(this),
                l = this._cacheMap,
                c = this._cacheKeyFn(n);
              if (l) {
                var v = l.get(c);
                if (v) {
                  var d = o.cacheHits || (o.cacheHits = []);
                  return new Promise(function (b) {
                    d.push(function () {
                      b(v);
                    });
                  });
                }
              }
              o.keys.push(n);
              var y = new Promise(function (b, w) {
                o.callbacks.push({ resolve: b, reject: w });
              });
              return l && l.set(c, y), y;
            }),
            (i.loadMany = function (n) {
              if (!g(n))
                throw TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    n +
                    ".",
                );
              for (var o = [], l = 0; l < n.length; l++)
                o.push(
                  this.load(n[l]).catch(function (c) {
                    return c;
                  }),
                );
              return Promise.all(o);
            }),
            (i.clear = function (n) {
              var o = this._cacheMap;
              if (o) {
                var l = this._cacheKeyFn(n);
                o.delete(l);
              }
              return this;
            }),
            (i.clearAll = function () {
              var n = this._cacheMap;
              return n && n.clear(), this;
            }),
            (i.prime = function (n, o) {
              var l = this._cacheMap;
              if (l) {
                var c,
                  v = this._cacheKeyFn(n);
                l.get(v) === void 0 &&
                  (o instanceof Error
                    ? (c = Promise.reject(o)).catch(function () {})
                    : (c = Promise.resolve(o)),
                  l.set(v, c));
              }
              return this;
            }),
            u
          );
        })(),
        f =
          typeof process == "object" && typeof process.nextTick == "function"
            ? function (u) {
                r || (r = Promise.resolve()),
                  r.then(function () {
                    process.nextTick(u);
                  });
              }
            : typeof setImmediate == "function"
              ? function (u) {
                  setImmediate(u);
                }
              : function (u) {
                  setTimeout(u);
                };
      function s(u, i, n) {
        p(i);
        for (var o = 0; o < i.keys.length; o++)
          u.clear(i.keys[o]), i.callbacks[o].reject(n);
      }
      function p(u) {
        if (u.cacheHits)
          for (var i = 0; i < u.cacheHits.length; i++) u.cacheHits[i]();
      }
      function g(u) {
        return (
          typeof u == "object" &&
          u !== null &&
          typeof u.length == "number" &&
          (u.length === 0 ||
            (u.length > 0 &&
              Object.prototype.hasOwnProperty.call(u, u.length - 1)))
        );
      }
      t.exports = a;
    },
  }),
  jt = le({
    "../../../node_modules/splaytree/dist/splay.js"(e, t) {
      var r;
      (r = function () {
        var a = function (u, i) {
          (this.next = null),
            (this.key = u),
            (this.data = i),
            (this.left = null),
            (this.right = null);
        };
        function f(u, i) {
          return u > i ? 1 : u < i ? -1 : 0;
        }
        function s(u, i, n) {
          for (var o = new a(null, null), l = o, c = o; ; ) {
            var v = n(u, i.key);
            if (v < 0) {
              if (i.left === null) break;
              if (0 > n(u, i.left.key)) {
                var d = i.left;
                if (((i.left = d.right), (d.right = i), (i = d).left === null))
                  break;
              }
              (c.left = i), (c = i), (i = i.left);
            } else if (v > 0) {
              if (i.right === null) break;
              if (n(u, i.right.key) > 0) {
                var d = i.right;
                if (((i.right = d.left), (d.left = i), (i = d).right === null))
                  break;
              }
              (l.right = i), (l = i), (i = i.right);
            } else break;
          }
          return (
            (l.right = i.left),
            (c.left = i.right),
            (i.left = o.right),
            (i.right = o.left),
            i
          );
        }
        function p(u, i, n, o) {
          var l = new a(u, i);
          if (n === null) return (l.left = l.right = null), l;
          n = s(u, n, o);
          var c = o(u, n.key);
          return (
            c < 0
              ? ((l.left = n.left), (l.right = n), (n.left = null))
              : c >= 0 && ((l.right = n.right), (l.left = n), (n.right = null)),
            l
          );
        }
        function g(u, i, n) {
          var o = null,
            l = null;
          if (i) {
            i = s(u, i, n);
            var c = n(i.key, u);
            c === 0
              ? ((o = i.left), (l = i.right))
              : c < 0
                ? ((l = i.right), (i.right = null), (o = i))
                : ((o = i.left), (i.left = null), (l = i));
          }
          return { left: o, right: l };
        }
        return (function () {
          function u(i) {
            i === void 0 && (i = f),
              (this._root = null),
              (this._size = 0),
              (this._comparator = i);
          }
          return (
            (u.prototype.insert = function (i, n) {
              return (
                this._size++,
                (this._root = p(i, n, this._root, this._comparator))
              );
            }),
            (u.prototype.add = function (i, n) {
              var o = new a(i, n);
              this._root === null &&
                ((o.left = o.right = null), this._size++, (this._root = o));
              var l = this._comparator,
                c = s(i, this._root, l),
                v = l(i, c.key);
              return (
                v === 0
                  ? (this._root = c)
                  : (v < 0
                      ? ((o.left = c.left), (o.right = c), (c.left = null))
                      : v > 0 &&
                        ((o.right = c.right), (o.left = c), (c.right = null)),
                    this._size++,
                    (this._root = o)),
                this._root
              );
            }),
            (u.prototype.remove = function (i) {
              this._root = this._remove(i, this._root, this._comparator);
            }),
            (u.prototype._remove = function (i, n, o) {
              var l;
              return n === null
                ? null
                : ((n = s(i, n, o)),
                  o(i, n.key) === 0
                    ? (n.left === null
                        ? (l = n.right)
                        : ((l = s(i, n.left, o)).right = n.right),
                      this._size--,
                      l)
                    : n);
            }),
            (u.prototype.pop = function () {
              var i = this._root;
              if (i) {
                for (; i.left; ) i = i.left;
                return (
                  (this._root = s(i.key, this._root, this._comparator)),
                  (this._root = this._remove(
                    i.key,
                    this._root,
                    this._comparator,
                  )),
                  { key: i.key, data: i.data }
                );
              }
              return null;
            }),
            (u.prototype.findStatic = function (i) {
              for (var n = this._root, o = this._comparator; n; ) {
                var l = o(i, n.key);
                if (l === 0) return n;
                n = l < 0 ? n.left : n.right;
              }
              return null;
            }),
            (u.prototype.find = function (i) {
              return this._root &&
                ((this._root = s(i, this._root, this._comparator)),
                this._comparator(i, this._root.key) !== 0)
                ? null
                : this._root;
            }),
            (u.prototype.contains = function (i) {
              for (var n = this._root, o = this._comparator; n; ) {
                var l = o(i, n.key);
                if (l === 0) return !0;
                n = l < 0 ? n.left : n.right;
              }
              return !1;
            }),
            (u.prototype.forEach = function (i, n) {
              for (var o = this._root, l = [], c = !1; !c; )
                o !== null
                  ? (l.push(o), (o = o.left))
                  : l.length !== 0
                    ? ((o = l.pop()), i.call(n, o), (o = o.right))
                    : (c = !0);
              return this;
            }),
            (u.prototype.range = function (i, n, o, l) {
              for (
                var c = [], v = this._comparator, d = this._root;
                c.length !== 0 || d;

              )
                if (d) c.push(d), (d = d.left);
                else {
                  if (v((d = c.pop()).key, n) > 0) break;
                  if (v(d.key, i) >= 0 && o.call(l, d)) return this;
                  d = d.right;
                }
              return this;
            }),
            (u.prototype.keys = function () {
              var i = [];
              return (
                this.forEach(function (n) {
                  var o = n.key;
                  return i.push(o);
                }),
                i
              );
            }),
            (u.prototype.values = function () {
              var i = [];
              return (
                this.forEach(function (n) {
                  var o = n.data;
                  return i.push(o);
                }),
                i
              );
            }),
            (u.prototype.min = function () {
              return this._root ? this.minNode(this._root).key : null;
            }),
            (u.prototype.max = function () {
              return this._root ? this.maxNode(this._root).key : null;
            }),
            (u.prototype.minNode = function (i) {
              if ((i === void 0 && (i = this._root), i))
                for (; i.left; ) i = i.left;
              return i;
            }),
            (u.prototype.maxNode = function (i) {
              if ((i === void 0 && (i = this._root), i))
                for (; i.right; ) i = i.right;
              return i;
            }),
            (u.prototype.at = function (i) {
              for (var n = this._root, o = !1, l = 0, c = []; !o; )
                if (n) c.push(n), (n = n.left);
                else if (c.length > 0) {
                  if (((n = c.pop()), l === i)) return n;
                  l++, (n = n.right);
                } else o = !0;
              return null;
            }),
            (u.prototype.next = function (i) {
              var n = this._root,
                o = null;
              if (i.right) {
                for (o = i.right; o.left; ) o = o.left;
                return o;
              }
              for (var l = this._comparator; n; ) {
                var c = l(i.key, n.key);
                if (c === 0) break;
                c < 0 ? ((o = n), (n = n.left)) : (n = n.right);
              }
              return o;
            }),
            (u.prototype.prev = function (i) {
              var n = this._root,
                o = null;
              if (i.left !== null) {
                for (o = i.left; o.right; ) o = o.right;
                return o;
              }
              for (var l = this._comparator; n; ) {
                var c = l(i.key, n.key);
                if (c === 0) break;
                c < 0 ? (n = n.left) : ((o = n), (n = n.right));
              }
              return o;
            }),
            (u.prototype.clear = function () {
              return (this._root = null), (this._size = 0), this;
            }),
            (u.prototype.toList = function () {
              return (function (i) {
                for (
                  var n = i, o = [], l = !1, c = new a(null, null), v = c;
                  !l;

                )
                  n
                    ? (o.push(n), (n = n.left))
                    : o.length > 0
                      ? (n = (n = v = v.next = o.pop()).right)
                      : (l = !0);
                return (v.next = null), c.next;
              })(this._root);
            }),
            (u.prototype.load = function (i, n, o) {
              n === void 0 && (n = []), o === void 0 && (o = !1);
              var l = i.length,
                c = this._comparator;
              if (
                (o &&
                  (function d(y, b, w, _, x) {
                    if (!(w >= _)) {
                      for (var T = y[(w + _) >> 1], m = w - 1, k = _ + 1; ; ) {
                        do m++;
                        while (0 > x(y[m], T));
                        do k--;
                        while (x(y[k], T) > 0);
                        if (m >= k) break;
                        var B = y[m];
                        (y[m] = y[k]),
                          (y[k] = B),
                          (B = b[m]),
                          (b[m] = b[k]),
                          (b[k] = B);
                      }
                      d(y, b, w, k, x), d(y, b, k + 1, _, x);
                    }
                  })(i, n, 0, l - 1, c),
                this._root === null)
              )
                (this._root = (function d(y, b, w, _) {
                  var x = _ - w;
                  if (x > 0) {
                    var T = w + Math.floor(x / 2),
                      m = y[T],
                      k = b[T],
                      B = new a(m, k);
                    return (
                      (B.left = d(y, b, w, T)), (B.right = d(y, b, T + 1, _)), B
                    );
                  }
                  return null;
                })(i, n, 0, l)),
                  (this._size = l);
              else {
                var v = (function (d, y, b) {
                  for (
                    var w = new a(null, null), _ = w, x = d, T = y;
                    x !== null && T !== null;

                  )
                    0 > b(x.key, T.key)
                      ? ((_.next = x), (x = x.next))
                      : ((_.next = T), (T = T.next)),
                      (_ = _.next);
                  return (
                    x !== null ? (_.next = x) : T !== null && (_.next = T),
                    w.next
                  );
                })(
                  this.toList(),
                  (function (d, y) {
                    for (
                      var b = new a(null, null), w = b, _ = 0;
                      _ < d.length;
                      _++
                    )
                      w = w.next = new a(d[_], y[_]);
                    return (w.next = null), b.next;
                  })(i, n),
                  c,
                );
                (l = this._size + l),
                  (this._root = (function d(y, b, w) {
                    var _ = w - b;
                    if (_ > 0) {
                      var x = b + Math.floor(_ / 2),
                        T = d(y, b, x),
                        m = y.head;
                      return (
                        (m.left = T),
                        (y.head = y.head.next),
                        (m.right = d(y, x + 1, w)),
                        m
                      );
                    }
                    return null;
                  })({ head: v }, 0, l));
              }
              return this;
            }),
            (u.prototype.isEmpty = function () {
              return this._root === null;
            }),
            Object.defineProperty(u.prototype, "size", {
              get: function () {
                return this._size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(u.prototype, "root", {
              get: function () {
                return this._root;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (u.prototype.toString = function (i) {
              i === void 0 &&
                (i = function (o) {
                  return String(o.key);
                });
              var n = [];
              return (
                (function o(l, c, v, d, y) {
                  if (l) {
                    d(
                      "" +
                        c +
                        (v ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ") +
                        y(l) +
                        `
`,
                    );
                    var b = c + (v ? "    " : "\u2502   ");
                    l.left && o(l.left, b, !1, d, y),
                      l.right && o(l.right, b, !0, d, y);
                  }
                })(
                  this._root,
                  "",
                  !0,
                  function (o) {
                    return n.push(o);
                  },
                  i,
                ),
                n.join("")
              );
            }),
            (u.prototype.update = function (i, n, o) {
              var l,
                c,
                v = this._comparator,
                d = g(i, this._root, v),
                y = d.left,
                b = d.right;
              0 > v(i, n) ? (b = p(n, o, b, v)) : (y = p(n, o, y, v)),
                (this._root =
                  ((l = y),
                  (c = b) === null
                    ? l
                    : (l === null || ((c = s(l.key, c, v)).left = l), c)));
            }),
            (u.prototype.split = function (i) {
              return g(i, this._root, this._comparator);
            }),
            (u.prototype[Symbol.iterator] = function () {
              var i, n, o;
              return (function (l, c) {
                var v,
                  d,
                  y,
                  b,
                  w = {
                    label: 0,
                    sent: function () {
                      if (1 & y[0]) throw y[1];
                      return y[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (b = { next: _(0), throw: _(1), return: _(2) }),
                  typeof Symbol == "function" &&
                    (b[Symbol.iterator] = function () {
                      return this;
                    }),
                  b
                );
                function _(x) {
                  return function (T) {
                    return (function (m) {
                      if (v) throw TypeError("Generator is already executing.");
                      for (; w; )
                        try {
                          if (
                            ((v = 1),
                            d &&
                              (y =
                                2 & m[0]
                                  ? d.return
                                  : m[0]
                                    ? d.throw ||
                                      ((y = d.return) && y.call(d), 0)
                                    : d.next) &&
                              !(y = y.call(d, m[1])).done)
                          )
                            return y;
                          switch (
                            ((d = 0), y && (m = [2 & m[0], y.value]), m[0])
                          ) {
                            case 0:
                            case 1:
                              y = m;
                              break;
                            case 4:
                              return w.label++, { value: m[1], done: !1 };
                            case 5:
                              w.label++, (d = m[1]), (m = [0]);
                              continue;
                            case 7:
                              (m = w.ops.pop()), w.trys.pop();
                              continue;
                            default:
                              if (
                                !(y =
                                  (y = w.trys).length > 0 && y[y.length - 1]) &&
                                (m[0] === 6 || m[0] === 2)
                              ) {
                                w = 0;
                                continue;
                              }
                              if (
                                m[0] === 3 &&
                                (!y || (m[1] > y[0] && m[1] < y[3]))
                              ) {
                                w.label = m[1];
                                break;
                              }
                              if (m[0] === 6 && w.label < y[1]) {
                                (w.label = y[1]), (y = m);
                                break;
                              }
                              if (y && w.label < y[2]) {
                                (w.label = y[2]), w.ops.push(m);
                                break;
                              }
                              y[2] && w.ops.pop(), w.trys.pop();
                              continue;
                          }
                          m = c.call(l, w);
                        } catch (k) {
                          (m = [6, k]), (d = 0);
                        } finally {
                          v = y = 0;
                        }
                      if (5 & m[0]) throw m[1];
                      return { value: m[0] ? m[1] : void 0, done: !0 };
                    })([x, T]);
                  };
                }
              })(this, function (l) {
                switch (l.label) {
                  case 0:
                    (i = this._root), (n = []), (o = !1), (l.label = 1);
                  case 1:
                    return o
                      ? [3, 6]
                      : i === null
                        ? [3, 2]
                        : (n.push(i), (i = i.left), [3, 5]);
                  case 2:
                    return n.length === 0 ? [3, 4] : [4, (i = n.pop())];
                  case 3:
                    return l.sent(), (i = i.right), [3, 5];
                  case 4:
                    (o = !0), (l.label = 5);
                  case 5:
                    return [3, 1];
                  case 6:
                    return [2];
                }
              });
            }),
            u
          );
        })();
      }),
        typeof e == "object" && t !== void 0
          ? (t.exports = r())
          : typeof define == "function" && define.amd
            ? define(r)
            : (e.SplayTree = r());
    },
  }),
  ke = le({
    "../../../node_modules/whatwg-mimetype/lib/utils.js"(e) {
      (e.removeLeadingAndTrailingHTTPWhitespace = (t) =>
        t.replace(/^[ \t\n\r]+/u, "").replace(/[ \t\n\r]+$/u, "")),
        (e.removeTrailingHTTPWhitespace = (t) => t.replace(/[ \t\n\r]+$/u, "")),
        (e.isHTTPWhitespaceChar = (t) =>
          t === " " ||
          t === "	" ||
          t ===
            `
` ||
          t === "\r"),
        (e.solelyContainsHTTPTokenCodePoints = (t) =>
          /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/u.test(t)),
        (e.soleyContainsHTTPQuotedStringTokenCodePoints = (t) =>
          /^[\t\u0020-\u007E\u0080-\u00FF]*$/u.test(t)),
        (e.asciiLowercase = (t) =>
          t.replace(/[A-Z]/gu, (r) => r.toLowerCase())),
        (e.collectAnHTTPQuotedString = (t, r) => {
          let a = "";
          for (r++; ; ) {
            for (; r < t.length && t[r] !== '"' && t[r] !== "\\"; )
              (a += t[r]), ++r;
            if (r >= t.length) break;
            let f = t[r];
            if ((++r, f === "\\")) {
              if (r >= t.length) {
                a += "\\";
                break;
              }
              (a += t[r]), ++r;
            } else break;
          }
          return [a, r];
        });
    },
  }),
  At = le({
    "../../../node_modules/whatwg-mimetype/lib/mime-type-parameters.js"(e, t) {
      var {
        asciiLowercase: r,
        solelyContainsHTTPTokenCodePoints: a,
        soleyContainsHTTPQuotedStringTokenCodePoints: f,
      } = ke();
      t.exports = class {
        get size() {
          return this._map.size;
        }
        get(s) {
          return (s = r(String(s))), this._map.get(s);
        }
        has(s) {
          return (s = r(String(s))), this._map.has(s);
        }
        set(s, p) {
          if (((s = r(String(s))), (p = String(p)), !a(s)))
            throw Error(
              `Invalid MIME type parameter name "${s}": only HTTP token code points are valid.`,
            );
          if (!f(p))
            throw Error(
              `Invalid MIME type parameter value "${p}": only HTTP quoted-string token code points are valid.`,
            );
          return this._map.set(s, p);
        }
        clear() {
          this._map.clear();
        }
        delete(s) {
          return (s = r(String(s))), this._map.delete(s);
        }
        forEach(s, p) {
          this._map.forEach(s, p);
        }
        keys() {
          return this._map.keys();
        }
        values() {
          return this._map.values();
        }
        entries() {
          return this._map.entries();
        }
        [Symbol.iterator]() {
          return this._map[Symbol.iterator]();
        }
        constructor(s) {
          this._map = s;
        }
      };
    },
  }),
  Rt = le({
    "../../../node_modules/whatwg-mimetype/lib/parser.js"(e, t) {
      var {
        removeLeadingAndTrailingHTTPWhitespace: r,
        removeTrailingHTTPWhitespace: a,
        isHTTPWhitespaceChar: f,
        solelyContainsHTTPTokenCodePoints: s,
        soleyContainsHTTPQuotedStringTokenCodePoints: p,
        asciiLowercase: g,
        collectAnHTTPQuotedString: u,
      } = ke();
      t.exports = (i) => {
        i = r(i);
        let n = 0,
          o = "";
        for (; n < i.length && i[n] !== "/"; ) (o += i[n]), ++n;
        if (o.length === 0 || !s(o) || n >= i.length) return null;
        ++n;
        let l = "";
        for (; n < i.length && i[n] !== ";"; ) (l += i[n]), ++n;
        if ((l = a(l)).length === 0 || !s(l)) return null;
        let c = { type: g(o), subtype: g(l), parameters: new Map() };
        for (; n < i.length; ) {
          for (++n; f(i[n]); ) ++n;
          let v = "";
          for (; n < i.length && i[n] !== ";" && i[n] !== "="; )
            (v += i[n]), ++n;
          if (((v = g(v)), n < i.length)) {
            if (i[n] === ";") continue;
            ++n;
          }
          let d = null;
          if (i[n] === '"')
            for ([d, n] = u(i, n); n < i.length && i[n] !== ";"; ) ++n;
          else {
            for (d = ""; n < i.length && i[n] !== ";"; ) (d += i[n]), ++n;
            if ((d = a(d)) === "") continue;
          }
          v.length > 0 &&
            s(v) &&
            p(d) &&
            !c.parameters.has(v) &&
            c.parameters.set(v, d);
        }
        return c;
      };
    },
  }),
  Vt = le({
    "../../../node_modules/whatwg-mimetype/lib/serializer.js"(e, t) {
      var { solelyContainsHTTPTokenCodePoints: r } = ke();
      t.exports = (a) => {
        let f = `${a.type}/${a.subtype}`;
        if (a.parameters.size === 0) return f;
        for (let [s, p] of a.parameters)
          (f += ";" + s + "="),
            (r(p) && p.length !== 0) ||
              ((p = p.replace(/(["\\])/gu, "\\$1")), (p = `"${p}"`)),
            (f += p);
        return f;
      };
    },
  }),
  zt = le({
    "../../../node_modules/whatwg-mimetype/lib/mime-type.js"(e, t) {
      var r = At(),
        a = Rt(),
        f = Vt(),
        { asciiLowercase: s, solelyContainsHTTPTokenCodePoints: p } = ke();
      t.exports = class {
        static parse(g) {
          try {
            return new this(g);
          } catch {
            return null;
          }
        }
        get essence() {
          return `${this.type}/${this.subtype}`;
        }
        get type() {
          return this._type;
        }
        set type(g) {
          if ((g = s(String(g))).length === 0)
            throw Error("Invalid type: must be a non-empty string");
          if (!p(g))
            throw Error(
              `Invalid type ${g}: must contain only HTTP token code points`,
            );
          this._type = g;
        }
        get subtype() {
          return this._subtype;
        }
        set subtype(g) {
          if ((g = s(String(g))).length === 0)
            throw Error("Invalid subtype: must be a non-empty string");
          if (!p(g))
            throw Error(
              `Invalid subtype ${g}: must contain only HTTP token code points`,
            );
          this._subtype = g;
        }
        get parameters() {
          return this._parameters;
        }
        toString() {
          return f(this);
        }
        isJavaScript({ prohibitParameters: g = !1 } = {}) {
          switch (this._type) {
            case "text":
              switch (this._subtype) {
                case "ecmascript":
                case "javascript":
                case "javascript1.0":
                case "javascript1.1":
                case "javascript1.2":
                case "javascript1.3":
                case "javascript1.4":
                case "javascript1.5":
                case "jscript":
                case "livescript":
                case "x-ecmascript":
                case "x-javascript":
                  return !g || this._parameters.size === 0;
                default:
                  return !1;
              }
            case "application":
              switch (this._subtype) {
                case "ecmascript":
                case "javascript":
                case "x-ecmascript":
                case "x-javascript":
                  return !g || this._parameters.size === 0;
                default:
                  return !1;
              }
            default:
              return !1;
          }
        }
        isXML() {
          return (
            (this._subtype === "xml" &&
              (this._type === "text" || this._type === "application")) ||
            this._subtype.endsWith("+xml")
          );
        }
        isHTML() {
          return this._subtype === "html" && this._type === "text";
        }
        constructor(g) {
          g = String(g);
          let u = a(g);
          if (u === null)
            throw Error(`Could not parse MIME type string "${g}"`);
          (this._type = u.type),
            (this._subtype = u.subtype),
            (this._parameters = new r(u.parameters));
        }
      };
    },
  }),
  qt = nt(Pt());
function S(e, ...t) {
  if (!e)
    throw Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
}
function Ie(e) {
  throw Error(`Unexpected value: ${e}`);
}
var M = {
    Uint8: 1,
    Uint16: 2,
    Uint32: 4,
    BigUint64: 8,
    Int8: 1,
    Int16: 2,
    Int32: 4,
    BigInt64: 8,
    Float32: 4,
    Float64: 8,
  },
  Qe = class {
    getOffset() {
      return this.offset;
    }
    ensureBufferLength(e) {
      let t = this.buffer.byteLength;
      if (!(this.offset + e <= t)) throw Error("Reading out of bounds");
    }
    readUint8() {
      let e = M.Uint8;
      this.ensureBufferLength(e);
      let t = this.view.getUint8(this.offset);
      return (this.offset += e), t;
    }
    readUint16() {
      let e = M.Uint16;
      this.ensureBufferLength(e);
      let t = this.view.getUint16(this.offset);
      return (this.offset += e), t;
    }
    readUint32() {
      let e = M.Uint32;
      this.ensureBufferLength(e);
      let t = this.view.getUint32(this.offset);
      return (this.offset += e), t;
    }
    readUint64() {
      let e = this.readBigUint64();
      return Number(e);
    }
    readBigUint64() {
      let e = M.BigUint64;
      this.ensureBufferLength(e);
      let t = this.view.getBigUint64(this.offset);
      return (this.offset += e), t;
    }
    readInt8() {
      let e = M.Int8;
      this.ensureBufferLength(e);
      let t = this.view.getInt8(this.offset);
      return (this.offset += e), t;
    }
    readInt16() {
      let e = M.Int16;
      this.ensureBufferLength(e);
      let t = this.view.getInt16(this.offset);
      return (this.offset += e), t;
    }
    readInt32() {
      let e = M.Int32;
      this.ensureBufferLength(e);
      let t = this.view.getInt32(this.offset);
      return (this.offset += e), t;
    }
    readInt64() {
      let e = this.readBigInt64();
      return Number(e);
    }
    readBigInt64() {
      let e = M.BigInt64;
      this.ensureBufferLength(e);
      let t = this.view.getBigInt64(this.offset);
      return (this.offset += e), t;
    }
    readFloat32() {
      let e = M.Float32;
      this.ensureBufferLength(e);
      let t = this.view.getFloat32(this.offset);
      return (this.offset += e), t;
    }
    readFloat64() {
      let e = M.Float64;
      this.ensureBufferLength(e);
      let t = this.view.getFloat64(this.offset);
      return (this.offset += e), t;
    }
    readBuffer(e) {
      let t = this.offset,
        r = t + e,
        a = this.buffer.slice(t, r);
      return (this.offset = r), a;
    }
    readString() {
      let e = this.readUint32(),
        t = this.readBuffer(e);
      return this.decoder.decode(t);
    }
    readJson() {
      let e = this.readString();
      return JSON.parse(e);
    }
    constructor(e) {
      (this.buffer = e),
        (this.offset = 0),
        (this.view = new DataView(this.buffer)),
        (this.decoder = new TextDecoder());
    }
  };
function Ne(e) {
  return Number.isFinite(e);
}
function ie(e) {
  return e === void 0;
}
function xe(e) {
  return e === null;
}
var j = Uint8Array,
  W = Uint16Array,
  it = Int32Array,
  Be = new j([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0,
  ]),
  Ue = new j([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0,
  ]),
  Ge = new j([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  bt = function (e, t) {
    for (var r = new W(31), a = 0; a < 31; ++a) r[a] = t += 1 << e[a - 1];
    for (var f = new it(r[30]), a = 1; a < 30; ++a)
      for (var s = r[a]; s < r[a + 1]; ++s) f[s] = ((s - r[a]) << 5) | a;
    return { b: r, r: f };
  },
  Tt = bt(Be, 2),
  _t = Tt.b,
  Ze = Tt.r;
(_t[28] = 258), (Ze[258] = 28);
var It = bt(Ue, 0),
  Ht = It.b,
  lt = It.r,
  Xe = new W(32768);
for (L = 0; L < 32768; ++L)
  (oe =
    ((61680 &
      (oe =
        ((52428 & (oe = ((43690 & L) >> 1) | ((21845 & L) << 1))) >> 2) |
        ((13107 & oe) << 2))) >>
      4) |
    ((3855 & oe) << 4)),
    (Xe[L] = (((65280 & oe) >> 8) | ((255 & oe) << 8)) >> 1);
var ee = function (e, t, r) {
    for (var a, f = e.length, s = 0, p = new W(t); s < f; ++s)
      e[s] && ++p[e[s] - 1];
    var g = new W(t);
    for (s = 1; s < t; ++s) g[s] = (g[s - 1] + p[s - 1]) << 1;
    if (r) {
      a = new W(1 << t);
      var u = 15 - t;
      for (s = 0; s < f; ++s)
        if (e[s])
          for (
            var i = (s << 4) | e[s],
              n = t - e[s],
              o = g[e[s] - 1]++ << n,
              l = o | ((1 << n) - 1);
            o <= l;
            ++o
          )
            a[Xe[o] >> u] = i;
    } else
      for (s = 0, a = new W(f); s < f; ++s)
        e[s] && (a[s] = Xe[g[e[s] - 1]++] >> (15 - e[s]));
    return a;
  },
  ae = new j(288);
for (L = 0; L < 144; ++L) ae[L] = 8;
for (L = 144; L < 256; ++L) ae[L] = 9;
for (L = 256; L < 280; ++L) ae[L] = 7;
for (L = 280; L < 288; ++L) ae[L] = 8;
var we = new j(32);
for (L = 0; L < 32; ++L) we[L] = 5;
var Wt = ee(ae, 9, 0),
  Ot = ee(ae, 9, 1),
  Kt = ee(we, 5, 0),
  Jt = ee(we, 5, 1),
  Ce = function (e) {
    for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
    return t;
  },
  Y = function (e, t, r) {
    var a = (t / 8) | 0;
    return ((e[a] | (e[a + 1] << 8)) >> (7 & t)) & r;
  },
  Me = function (e, t) {
    var r = (t / 8) | 0;
    return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >> (7 & t);
  },
  at = function (e) {
    return ((e + 7) / 8) | 0;
  },
  xt = function (e, t, r) {
    return (
      (t == null || t < 0) && (t = 0),
      (r == null || r > e.length) && (r = e.length),
      new j(e.subarray(t, r))
    );
  },
  Yt = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data",
  ],
  ne = function (e, t, r) {
    var a = Error(t || Yt[e]);
    if (
      ((a.code = e),
      Error.captureStackTrace && Error.captureStackTrace(a, ne),
      !r)
    )
      throw a;
    return a;
  },
  $t = function (e, t, r, a) {
    var f = e.length,
      s = a ? a.length : 0;
    if (!f || (t.f && !t.l)) return r || new j(0);
    var p = !r,
      g = p || t.i != 2,
      u = t.i;
    p && (r = new j(3 * f));
    var i = function (pe) {
        var de = r.length;
        if (pe > de) {
          var he = new j(Math.max(2 * de, pe));
          he.set(r), (r = he);
        }
      },
      n = t.f || 0,
      o = t.p || 0,
      l = t.b || 0,
      c = t.l,
      v = t.d,
      d = t.m,
      y = t.n,
      b = 8 * f;
    do {
      if (!c) {
        n = Y(e, o, 1);
        var w = Y(e, o + 1, 3);
        if (((o += 3), w))
          if (w == 1) (c = Ot), (v = Jt), (d = 9), (y = 5);
          else if (w == 2) {
            var _ = Y(e, o, 31) + 257,
              x = Y(e, o + 10, 15) + 4,
              T = _ + Y(e, o + 5, 31) + 1;
            o += 14;
            for (var m = new j(T), k = new j(19), B = 0; B < x; ++B)
              k[Ge[B]] = Y(e, o + 3 * B, 7);
            o += 3 * x;
            for (
              var I = Ce(k), J = (1 << I) - 1, V = ee(k, I, 1), B = 0;
              B < T;

            ) {
              var U = V[Y(e, o, J)];
              o += 15 & U;
              var P = U >> 4;
              if (P < 16) m[B++] = P;
              else {
                var E = 0,
                  z = 0;
                for (
                  P == 16
                    ? ((z = 3 + Y(e, o, 3)), (o += 2), (E = m[B - 1]))
                    : P == 17
                      ? ((z = 3 + Y(e, o, 7)), (o += 3))
                      : P == 18 && ((z = 11 + Y(e, o, 127)), (o += 7));
                  z--;

                )
                  m[B++] = E;
              }
            }
            var A = m.subarray(0, _),
              N = m.subarray(_);
            (d = Ce(A)), (y = Ce(N)), (c = ee(A, d, 1)), (v = ee(N, y, 1));
          } else ne(1);
        else {
          var P = at(o) + 4,
            R = e[P - 4] | (e[P - 3] << 8),
            O = P + R;
          if (O > f) {
            u && ne(0);
            break;
          }
          g && i(l + R),
            r.set(e.subarray(P, O), l),
            (t.b = l += R),
            (t.p = o = 8 * O),
            (t.f = n);
          continue;
        }
        if (o > b) {
          u && ne(0);
          break;
        }
      }
      g && i(l + 131072);
      for (var ce = (1 << d) - 1, K = (1 << y) - 1, te = o; ; te = o) {
        var E = c[Me(e, o) & ce],
          q = E >> 4;
        if ((o += 15 & E) > b) {
          u && ne(0);
          break;
        }
        if ((E || ne(2), q < 256)) r[l++] = q;
        else if (q == 256) {
          (te = o), (c = null);
          break;
        } else {
          var H = q - 254;
          if (q > 264) {
            var B = q - 257,
              C = Be[B];
            (H = Y(e, o, (1 << C) - 1) + _t[B]), (o += C);
          }
          var Q = v[Me(e, o) & K],
            ue = Q >> 4;
          Q || ne(3), (o += 15 & Q);
          var N = Ht[ue];
          if (ue > 3) {
            var C = Ue[ue];
            (N += Me(e, o) & ((1 << C) - 1)), (o += C);
          }
          if (o > b) {
            u && ne(0);
            break;
          }
          g && i(l + 131072);
          var fe = l + H;
          if (l < N) {
            var be = s - N,
              Te = Math.min(N, fe);
            for (be + l < 0 && ne(3); l < Te; ++l) r[l] = a[be + l];
          }
          for (; l < fe; ++l) r[l] = r[l - N];
        }
      }
      (t.l = c),
        (t.p = te),
        (t.b = l),
        (t.f = n),
        c && ((n = 1), (t.m = d), (t.d = v), (t.n = y));
    } while (!n);
    return l != r.length && p ? xt(r, 0, l) : r.subarray(0, l);
  },
  re = function (e, t, r) {
    r <<= 7 & t;
    var a = (t / 8) | 0;
    (e[a] |= r), (e[a + 1] |= r >> 8);
  },
  ye = function (e, t, r) {
    r <<= 7 & t;
    var a = (t / 8) | 0;
    (e[a] |= r), (e[a + 1] |= r >> 8), (e[a + 2] |= r >> 16);
  },
  Ee = function (e, t) {
    for (var r = [], a = 0; a < e.length; ++a)
      e[a] && r.push({ s: a, f: e[a] });
    var f = r.length,
      s = r.slice();
    if (!f) return { t: Bt, l: 0 };
    if (f == 1) {
      var p = new j(r[0].s + 1);
      return (p[r[0].s] = 1), { t: p, l: 1 };
    }
    r.sort(function (T, m) {
      return T.f - m.f;
    }),
      r.push({ s: -1, f: 25001 });
    var g = r[0],
      u = r[1],
      i = 0,
      n = 1,
      o = 2;
    for (r[0] = { s: -1, f: g.f + u.f, l: g, r: u }; n != f - 1; )
      (g = r[r[i].f < r[o].f ? i++ : o++]),
        (u = r[i != n && r[i].f < r[o].f ? i++ : o++]),
        (r[n++] = { s: -1, f: g.f + u.f, l: g, r: u });
    for (var l = s[0].s, a = 1; a < f; ++a) s[a].s > l && (l = s[a].s);
    var c = new W(l + 1),
      v = et(r[n - 1], c, 0);
    if (v > t) {
      var a = 0,
        d = 0,
        y = v - t,
        b = 1 << y;
      for (
        s.sort(function (m, k) {
          return c[k.s] - c[m.s] || m.f - k.f;
        });
        a < f;
        ++a
      ) {
        var w = s[a].s;
        if (c[w] > t) (d += b - (1 << (v - c[w]))), (c[w] = t);
        else break;
      }
      for (d >>= y; d > 0; ) {
        var _ = s[a].s;
        c[_] < t ? (d -= 1 << (t - c[_]++ - 1)) : ++a;
      }
      for (; a >= 0 && d; --a) {
        var x = s[a].s;
        c[x] == t && (--c[x], ++d);
      }
      v = t;
    }
    return { t: new j(c), l: v };
  },
  et = function (e, t, r) {
    return e.s == -1
      ? Math.max(et(e.l, t, r + 1), et(e.r, t, r + 1))
      : (t[e.s] = r);
  },
  ut = function (e) {
    for (var t = e.length; t && !e[--t]; );
    for (
      var r = new W(++t),
        a = 0,
        f = e[0],
        s = 1,
        p = function (u) {
          r[a++] = u;
        },
        g = 1;
      g <= t;
      ++g
    )
      if (e[g] == f && g != t) ++s;
      else {
        if (!f && s > 2) {
          for (; s > 138; s -= 138) p(32754);
          s > 2 &&
            (p(s > 10 ? ((s - 11) << 5) | 28690 : ((s - 3) << 5) | 12305),
            (s = 0));
        } else if (s > 3) {
          for (p(f), --s; s > 6; s -= 6) p(8304);
          s > 2 && (p(((s - 3) << 5) | 8208), (s = 0));
        }
        for (; s--; ) p(f);
        (s = 1), (f = e[g]);
      }
    return { c: r.subarray(0, a), n: t };
  },
  ge = function (e, t) {
    for (var r = 0, a = 0; a < t.length; ++a) r += e[a] * t[a];
    return r;
  },
  kt = function (e, t, r) {
    var a = r.length,
      f = at(t + 2);
    (e[f] = 255 & a),
      (e[f + 1] = a >> 8),
      (e[f + 2] = 255 ^ e[f]),
      (e[f + 3] = 255 ^ e[f + 1]);
    for (var s = 0; s < a; ++s) e[f + s + 4] = r[s];
    return (f + 4 + a) * 8;
  },
  ft = function (e, t, r, a, f, s, p, g, u, i, n) {
    re(t, n++, r), ++f[256];
    for (
      var o,
        l,
        c,
        v,
        d = Ee(f, 15),
        y = d.t,
        b = d.l,
        w = Ee(s, 15),
        _ = w.t,
        x = w.l,
        T = ut(y),
        m = T.c,
        k = T.n,
        B = ut(_),
        I = B.c,
        J = B.n,
        V = new W(19),
        U = 0;
      U < m.length;
      ++U
    )
      ++V[31 & m[U]];
    for (var U = 0; U < I.length; ++U) ++V[31 & I[U]];
    for (
      var P = Ee(V, 7), E = P.t, z = P.l, A = 19;
      A > 4 && !E[Ge[A - 1]];
      --A
    );
    var N = (i + 5) << 3,
      R = ge(f, ae) + ge(s, we) + p,
      O =
        ge(f, y) +
        ge(s, _) +
        p +
        14 +
        3 * A +
        ge(V, E) +
        2 * V[16] +
        3 * V[17] +
        7 * V[18];
    if (u >= 0 && N <= R && N <= O) return kt(t, n, e.subarray(u, u + i));
    if ((re(t, n, 1 + (O < R)), (n += 2), O < R)) {
      (o = ee(y, b, 0)), (l = y), (c = ee(_, x, 0)), (v = _);
      var ce = ee(E, z, 0);
      re(t, n, k - 257), re(t, n + 5, J - 1), re(t, n + 10, A - 4), (n += 14);
      for (var U = 0; U < A; ++U) re(t, n + 3 * U, E[Ge[U]]);
      n += 3 * A;
      for (var K = [m, I], te = 0; te < 2; ++te)
        for (var q = K[te], U = 0; U < q.length; ++U) {
          var H = 31 & q[U];
          re(t, n, ce[H]),
            (n += E[H]),
            H > 15 && (re(t, n, (q[U] >> 5) & 127), (n += q[U] >> 12));
        }
    } else (o = Wt), (l = ae), (c = Kt), (v = we);
    for (var U = 0; U < g; ++U) {
      var C = a[U];
      if (C > 255) {
        var H = (C >> 18) & 31;
        ye(t, n, o[H + 257]),
          (n += l[H + 257]),
          H > 7 && (re(t, n, (C >> 23) & 31), (n += Be[H]));
        var Q = 31 & C;
        ye(t, n, c[Q]),
          (n += v[Q]),
          Q > 3 && (ye(t, n, (C >> 5) & 8191), (n += Ue[Q]));
      } else ye(t, n, o[C]), (n += l[C]);
    }
    return ye(t, n, o[256]), n + l[256];
  },
  Qt = new it([
    65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632,
  ]),
  Bt = new j(0),
  Gt = function (e, t, r, a, f, s) {
    var p = s.z || e.length,
      g = new j(a + p + 5 * (1 + Math.ceil(p / 7e3)) + f),
      u = g.subarray(a, g.length - f),
      i = s.l,
      n = 7 & (s.r || 0);
    if (t) {
      n && (u[0] = s.r >> 3);
      for (
        var o = Qt[t - 1],
          l = o >> 13,
          c = 8191 & o,
          v = (1 << r) - 1,
          d = s.p || new W(32768),
          y = s.h || new W(v + 1),
          b = Math.ceil(r / 3),
          w = 2 * b,
          _ = function (Le) {
            return (e[Le] ^ (e[Le + 1] << b) ^ (e[Le + 2] << w)) & v;
          },
          x = new it(25e3),
          T = new W(288),
          m = new W(32),
          k = 0,
          B = 0,
          I = s.i || 0,
          J = 0,
          V = s.w || 0,
          U = 0;
        I + 2 < p;
        ++I
      ) {
        var P = _(I),
          E = 32767 & I,
          z = y[P];
        if (((d[E] = z), (y[P] = E), V <= I)) {
          var A = p - I;
          if ((k > 7e3 || J > 24576) && (A > 423 || !i)) {
            (n = ft(e, u, 0, x, T, m, B, J, U, I - U, n)),
              (J = k = B = 0),
              (U = I);
            for (var N = 0; N < 286; ++N) T[N] = 0;
            for (var N = 0; N < 30; ++N) m[N] = 0;
          }
          var R = 2,
            O = 0,
            ce = c,
            K = (E - z) & 32767;
          if (A > 2 && P == _(I - K))
            for (
              var te = Math.min(l, A) - 1,
                q = Math.min(32767, I),
                H = Math.min(258, A);
              K <= q && --ce && E != z;

            ) {
              if (e[I + R] == e[I + R - K]) {
                for (var C = 0; C < H && e[I + C] == e[I + C - K]; ++C);
                if (C > R) {
                  if (((R = C), (O = K), C > te)) break;
                  for (var Q = Math.min(K, C - 2), ue = 0, N = 0; N < Q; ++N) {
                    var fe = (I - K + N) & 32767,
                      be = d[fe],
                      Te = (fe - be) & 32767;
                    Te > ue && ((ue = Te), (z = fe));
                  }
                }
              }
              (z = d[(E = z)]), (K += (E - z) & 32767);
            }
          if (O) {
            x[J++] = 268435456 | (Ze[R] << 18) | lt[O];
            var pe = 31 & Ze[R],
              de = 31 & lt[O];
            (B += Be[pe] + Ue[de]), ++T[257 + pe], ++m[de], (V = I + R), ++k;
          } else (x[J++] = e[I]), ++T[e[I]];
        }
      }
      for (I = Math.max(I, V); I < p; ++I) (x[J++] = e[I]), ++T[e[I]];
      (n = ft(e, u, i, x, T, m, B, J, U, I - U, n)),
        i ||
          ((s.r = (7 & n) | (u[(n / 8) | 0] << 3)),
          (n -= 7),
          (s.h = y),
          (s.p = d),
          (s.i = I),
          (s.w = V));
    } else {
      for (var I = s.w || 0; I < p + i; I += 65535) {
        var he = I + 65535;
        he >= p && ((u[(n / 8) | 0] = i), (he = p)),
          (n = kt(u, n + 1, e.subarray(I, he)));
      }
      s.i = p;
    }
    return xt(g, 0, a + at(n) + f);
  },
  Zt = function (e, t, r, a, f) {
    if (!f && ((f = { l: 1 }), t.dictionary)) {
      var s = t.dictionary.subarray(-32768),
        p = new j(s.length + e.length);
      p.set(s), p.set(e, s.length), (e = p), (f.w = s.length);
    }
    return Gt(
      e,
      t.level == null ? 6 : t.level,
      t.mem == null
        ? f.l
          ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length))))
          : 20
        : 12 + t.mem,
      r,
      a,
      f,
    );
  };
function Xt(e, t) {
  return Zt(e, t || {}, 0, 0);
}
function er(e, t) {
  return $t(e, { i: 2 }, t && t.out, t && t.dictionary);
}
var tr = typeof TextDecoder < "u" && new TextDecoder(),
  rr = 0;
try {
  tr.decode(Bt, { stream: !0 }), (rr = 1);
} catch {}
var Ir = nt(jt()),
  nr = 1024,
  ir = 1.5,
  De = (e) => 2 ** e - 1,
  Fe = (e) => -(2 ** (e - 1)),
  Pe = (e) => 2 ** (e - 1) - 1,
  G = {
    Uint8: 0,
    Uint16: 0,
    Uint32: 0,
    Uint64: 0,
    BigUint64: 0,
    Int8: Fe(8),
    Int16: Fe(16),
    Int32: Fe(32),
    Int64: Number.MIN_SAFE_INTEGER,
    BigInt64: -(BigInt(2) ** BigInt(63)),
  },
  Z = {
    Uint8: De(8),
    Uint16: De(16),
    Uint32: De(32),
    Uint64: Number.MAX_SAFE_INTEGER,
    BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
    Int8: Pe(8),
    Int16: Pe(16),
    Int32: Pe(32),
    Int64: Number.MAX_SAFE_INTEGER,
    BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
  };
function X(e, t, r, a) {
  S(e >= t, e, "outside lower bound for", a),
    S(e <= r, e, "outside upper bound for", a);
}
var ar = class {
  getOffset() {
    return this.offset;
  }
  slice(e = 0, t = this.offset) {
    return this.buffer.slice(e, t);
  }
  subarray(e = 0, t = this.offset) {
    return new Uint8Array(this.buffer, e, t);
  }
  ensureBufferLength(e) {
    let t = this.buffer.byteLength;
    if (this.offset + e <= t) return;
    let r = new ArrayBuffer(Math.ceil(t * ir) + e);
    ht(this.buffer, r, 0), (this.buffer = r), (this.view = new DataView(r));
  }
  writeUint8(e) {
    X(e, G.Uint8, Z.Uint8, "Uint8");
    let t = M.Uint8;
    this.ensureBufferLength(t),
      this.view.setUint8(this.offset, e),
      (this.offset += t);
  }
  writeUint16(e) {
    X(e, G.Uint16, Z.Uint16, "Uint16");
    let t = M.Uint16;
    this.ensureBufferLength(t),
      this.view.setUint16(this.offset, e),
      (this.offset += t);
  }
  writeUint32(e) {
    X(e, G.Uint32, Z.Uint32, "Uint32");
    let t = M.Uint32;
    this.ensureBufferLength(t),
      this.view.setUint32(this.offset, e),
      (this.offset += t);
  }
  writeUint64(e) {
    X(e, G.Uint64, Z.Uint64, "Uint64");
    let t = BigInt(e);
    this.writeBigUint64(t);
  }
  writeBigUint64(e) {
    X(e, G.BigUint64, Z.BigUint64, "BigUint64");
    let t = M.BigUint64;
    this.ensureBufferLength(t),
      this.view.setBigUint64(this.offset, e),
      (this.offset += t);
  }
  writeInt8(e) {
    X(e, G.Int8, Z.Int8, "Int8");
    let t = M.Int8;
    this.ensureBufferLength(t),
      this.view.setInt8(this.offset, e),
      (this.offset += t);
  }
  writeInt16(e) {
    X(e, G.Int16, Z.Int16, "Int16");
    let t = M.Int16;
    this.ensureBufferLength(t),
      this.view.setInt16(this.offset, e),
      (this.offset += t);
  }
  writeInt32(e) {
    X(e, G.Int32, Z.Int32, "Int32");
    let t = M.Int32;
    this.ensureBufferLength(t),
      this.view.setInt32(this.offset, e),
      (this.offset += t);
  }
  writeInt64(e) {
    X(e, G.Int64, Z.Int64, "Int64");
    let t = BigInt(e);
    this.writeBigInt64(t);
  }
  writeBigInt64(e) {
    X(e, G.BigInt64, Z.BigInt64, "BigInt64");
    let t = M.BigInt64;
    this.ensureBufferLength(t),
      this.view.setBigInt64(this.offset, e),
      (this.offset += t);
  }
  writeFloat32(e) {
    let t = M.Float32;
    this.ensureBufferLength(t),
      this.view.setFloat32(this.offset, e),
      (this.offset += t);
  }
  writeFloat64(e) {
    let t = M.Float64;
    this.ensureBufferLength(t),
      this.view.setFloat64(this.offset, e),
      (this.offset += t);
  }
  writeBuffer(e) {
    let t = e.byteLength;
    this.ensureBufferLength(t),
      ht(e, this.buffer, this.offset),
      (this.offset += t);
  }
  encodeString(e) {
    let t = this.encodedStrings.get(e);
    if (t) return t;
    let r = this.encoder.encode(e);
    return this.encodedStrings.set(e, r), r;
  }
  writeString(e) {
    let t = this.encodeString(e),
      r = t.byteLength;
    this.writeUint32(r), this.writeBuffer(t);
  }
  writeJson(e) {
    let t = JSON.stringify(e);
    this.writeString(t);
  }
  constructor() {
    (this.offset = 0),
      (this.buffer = new ArrayBuffer(nr)),
      (this.view = new DataView(this.buffer)),
      (this.encoder = new TextEncoder()),
      (this.encodedStrings = new Map());
  }
};
function ht(e, t, r) {
  let a = new Uint8Array(e);
  new Uint8Array(t).set(a, r);
}
var se = class {
  static fromString(e) {
    let [t, r, a] = e.split("/").map(Number);
    return (
      S(Ne(t), "Invalid chunkId"),
      S(Ne(r), "Invalid offset"),
      S(Ne(a), "Invalid length"),
      new se(t, r, a)
    );
  }
  toString() {
    return `${this.chunkId}/${this.offset}/${this.length}`;
  }
  static read(e) {
    let t = e.readUint16(),
      r = e.readUint32(),
      a = e.readUint32();
    return new se(t, r, a);
  }
  write(e) {
    e.writeUint16(this.chunkId),
      e.writeUint32(this.offset),
      e.writeUint32(this.length);
  }
  compare(e) {
    return this.chunkId < e.chunkId
      ? -1
      : this.chunkId > e.chunkId
        ? 1
        : this.offset < e.offset
          ? -1
          : this.offset > e.offset
            ? 1
            : (S(this.length === e.length), 0);
  }
  constructor(e, t, r) {
    (this.chunkId = e), (this.offset = t), (this.length = r);
  }
};
function je(e) {
  if (xe(e)) return 0;
  switch (e.type) {
    case h.Array:
      return 1;
    case h.Boolean:
      return 2;
    case h.Color:
      return 3;
    case h.Date:
      return 4;
    case h.Enum:
      return 5;
    case h.File:
      return 6;
    case h.ResponsiveImage:
      return 10;
    case h.Link:
      return 7;
    case h.Number:
      return 8;
    case h.Object:
      return 9;
    case h.RichText:
      return 11;
    case h.String:
      return 12;
    default:
      Ie(e);
  }
}
((e) => {
  (e.read = function (t) {
    let r = t.readUint8();
    switch (r) {
      case 0:
        return null;
      case 1:
        return Ae.read(t);
      case 2:
        return Re.read(t);
      case 3:
        return Ve.read(t);
      case 4:
        return ze.read(t);
      case 5:
        return qe.read(t);
      case 6:
        return He.read(t);
      case 7:
        return We.read(t);
      case 8:
        return Oe.read(t);
      case 9:
        return Ke.read(t);
      case 10:
        return Je.read(t);
      case 11:
        return Ye.read(t);
      case 12:
        return $e.read(t);
      default:
        Ie(r);
    }
  }),
    (e.write = function (t, r) {
      let a = je(r);
      if ((t.writeUint8(a), !xe(r)))
        switch (r.type) {
          case h.Array:
            return Ae.write(t, r);
          case h.Boolean:
            return Re.write(t, r);
          case h.Color:
            return Ve.write(t, r);
          case h.Date:
            return ze.write(t, r);
          case h.Enum:
            return qe.write(t, r);
          case h.File:
            return He.write(t, r);
          case h.Link:
            return We.write(t, r);
          case h.Number:
            return Oe.write(t, r);
          case h.Object:
            return Ke.write(t, r);
          case h.ResponsiveImage:
            return Je.write(t, r);
          case h.RichText:
            return Ye.write(t, r);
          case h.String:
            return $e.write(t, r);
          default:
            Ie(r);
        }
    }),
    (e.compare = function (t, r, a) {
      let f = je(t),
        s = je(r);
      if (f < s) return -1;
      if (f > s) return 1;
      if (xe(t) || xe(r)) return 0;
      switch (t.type) {
        case h.Array:
          return S(r.type === h.Array), Ae.compare(t, r, a);
        case h.Boolean:
          return S(r.type === h.Boolean), Re.compare(t, r, a);
        case h.Color:
          return S(r.type === h.Color), Ve.compare(t, r, a);
        case h.Date:
          return S(r.type === h.Date), ze.compare(t, r, a);
        case h.Enum:
          return S(r.type === h.Enum), qe.compare(t, r, a);
        case h.File:
          return S(r.type === h.File), He.compare(t, r, a);
        case h.Link:
          return S(r.type === h.Link), We.compare(t, r, a);
        case h.Number:
          return S(r.type === h.Number), Oe.compare(t, r, a);
        case h.Object:
          return S(r.type === h.Object), Ke.compare(t, r, a);
        case h.ResponsiveImage:
          return S(r.type === h.ResponsiveImage), Je.compare(t, r, a);
        case h.RichText:
          return S(r.type === h.RichText), Ye.compare(t, r, a);
        case h.String:
          return S(r.type === h.String), $e.compare(t, r, a);
        default:
          Ie(t);
      }
    });
})($ || ($ = {}));
var Ae = {
    read(e) {
      let t = e.readUint16(),
        r = [];
      for (let a = 0; a < t; a++) {
        let f = $.read(e);
        r.push(f);
      }
      return { type: h.Array, value: r };
    },
    write(e, t) {
      for (let r of (e.writeUint16(t.value.length), t.value)) $.write(e, r);
    },
    compare(e, t, r) {
      let a = e.value.length,
        f = t.value.length;
      if (a < f) return -1;
      if (a > f) return 1;
      for (let s = 0; s < a; s++) {
        let p = e.value[s],
          g = t.value[s];
        S(!ie(p), "Left item must exist"), S(!ie(g), "Right item must exist");
        let u = $.compare(p, g, r);
        if (u !== 0) return u;
      }
      return 0;
    },
  },
  Re = {
    read: (e) => ({ type: h.Boolean, value: e.readUint8() !== 0 }),
    write(e, t) {
      e.writeUint8(t.value ? 1 : 0);
    },
    compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
  },
  Ve = {
    read: (e) => ({ type: h.Color, value: e.readString() }),
    write(e, t) {
      e.writeString(t.value);
    },
    compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
  },
  ze = {
    read(e) {
      let t = e.readInt64(),
        r = new Date(t);
      return { type: h.Date, value: r.toISOString() };
    },
    write(e, t) {
      let r = new Date(t.value),
        a = r.getTime();
      e.writeInt64(a);
    },
    compare(e, t) {
      let r = new Date(e.value),
        a = new Date(t.value);
      return r < a ? -1 : r > a ? 1 : 0;
    },
  },
  qe = {
    read: (e) => ({ type: h.Enum, value: e.readString() }),
    write(e, t) {
      e.writeString(t.value);
    },
    compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
  },
  He = {
    read: (e) => ({ type: h.File, value: e.readString() }),
    write(e, t) {
      e.writeString(t.value);
    },
    compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
  },
  We = {
    read: (e) => ({ type: h.Link, value: e.readJson() }),
    write(e, t) {
      e.writeJson(t.value);
    },
    compare(e, t) {
      let r = JSON.stringify(e.value),
        a = JSON.stringify(t.value);
      return r < a ? -1 : r > a ? 1 : 0;
    },
  },
  Oe = {
    read: (e) => ({ type: h.Number, value: e.readFloat64() }),
    write(e, t) {
      e.writeFloat64(t.value);
    },
    compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
  },
  Ke = {
    read(e) {
      let t = e.readUint16(),
        r = {};
      for (let a = 0; a < t; a++) {
        let f = e.readString();
        r[f] = $.read(e);
      }
      return { type: h.Object, value: r };
    },
    write(e, t) {
      let r = Object.entries(t.value);
      for (let [a, f] of (e.writeUint16(r.length), r))
        e.writeString(a), $.write(e, f);
    },
    compare(e, t, r) {
      let a = Object.keys(e.value).sort(),
        f = Object.keys(t.value).sort();
      if (a.length < f.length) return -1;
      if (a.length > f.length) return 1;
      for (let s = 0; s < a.length; s++) {
        let p = a[s],
          g = f[s];
        if (
          (S(!ie(p), "Left key must exist"),
          S(!ie(g), "Left key must exist"),
          p < g)
        )
          return -1;
        if (p > g) return 1;
        let u = e.value[p],
          i = t.value[g];
        S(!ie(u), "Left value must exist"), S(!ie(i), "Right value must exist");
        let n = $.compare(u, i, r);
        if (n !== 0) return n;
      }
      return 0;
    },
  },
  Je = {
    read: (e) => ({ type: h.ResponsiveImage, value: e.readJson() }),
    write(e, t) {
      e.writeJson(t.value);
    },
    compare(e, t) {
      let r = JSON.stringify(e.value),
        a = JSON.stringify(t.value);
      return r < a ? -1 : r > a ? 1 : 0;
    },
  },
  Ye = {
    read: (e) => ({ type: h.RichText, value: e.readUint32() }),
    write(e, t) {
      e.writeUint32(t.value);
    },
    compare(e, t) {
      let r = e.value,
        a = t.value;
      return r < a ? -1 : r > a ? 1 : 0;
    },
  },
  $e = {
    read: (e) => ({ type: h.String, value: e.readString() }),
    write(e, t) {
      e.writeString(t.value);
    },
    compare(e, t, r) {
      let a = e.value,
        f = t.value;
      return (
        r.type === 0 &&
          ((a = e.value.toLowerCase()), (f = t.value.toLowerCase())),
        a < f ? -1 : a > f ? 1 : 0
      );
    },
  };
var or = nt(zt()),
  me = `\r
`,
  _e = "--";
async function sr(e, t) {
  let r = await fetch(e, { headers: { Range: cr(t) } });
  if (!r.ok) throw Error(`Request failed: ${r.status} ${r.statusText}`);
  let a = await r.arrayBuffer(),
    f = new Uint8Array(a);
  if (r.status === 200)
    return t.map((s) => {
      if (s.to > f.length) throw Error("Missing data");
      return f.slice(s.from, s.to);
    });
  if (r.status === 206) {
    let s = r.headers.get("Content-Type");
    if (!s) throw Error("Missing Content-Type header");
    let p = new fr(),
      g = new or.default(s);
    if (g.type === "multipart" && g.subtype === "byteranges") {
      let u = g.parameters.get("boundary");
      if (!u) throw Error("Missing boundary parameter");
      let i = ur(f, u);
      for (let { headers: n, body: o } of i) {
        let l = n.get("Content-Range");
        if (!l) throw Error("Missing Content-Range header");
        let c = ct(l);
        if (c.unit !== "bytes") throw Error("Unsupported unit");
        p.write(c.start, o);
      }
    } else {
      let u = r.headers.get("Content-Range");
      if (!u) throw Error("Missing Content-Range header");
      let i = ct(u);
      if (i.unit !== "bytes") throw Error("Unsupported unit");
      p.write(i.start, f);
    }
    return t.map((u) => p.read(u.from, u.to - u.from));
  }
  throw Error(`Unsupported response: ${r.status} ${r.statusText}`);
}
var ve = new TextEncoder(),
  lr = new TextDecoder();
function ur(e, t) {
  let r = ve.encode(_e + t),
    a = tt(e, r);
  if (ie(a)) throw Error("Missing parts start");
  let f = a + r.length,
    s = ve.encode(me + _e + t + _e),
    p = hr(e, s);
  if (ie(p)) throw Error("Missing parts end");
  let g = ve.encode(me + _e + t),
    u = e.subarray(f, p);
  return pt(u, g).map((n) => {
    let o = ve.encode(me + me),
      l = tt(n, o);
    if (ie(l)) throw Error("Missing headers end");
    let c = ve.encode(me),
      v = n.subarray(0, l),
      d = pt(v, c),
      y = new Headers();
    for (let _ of d) {
      let x = lr.decode(_),
        [T, m] = x.split(": ", 2);
      T && m && y.append(T, m);
    }
    let b = l + o.length,
      w = n.slice(b);
    return { headers: y, body: w };
  });
}
function ct(e) {
  let t = RegExp(
    "^(?<unit>\\w+) (?<start>\\d+)-(?<end>\\d+)\\/(?<size>\\d+|\\*)$",
    "u",
  ).exec(e);
  if (!t || !t.groups) throw Error("Invalid Content-Range header");
  let { unit: r, start: a, end: f, size: s } = t.groups;
  return {
    unit: r,
    start: Number(a),
    end: Number(f),
    size: s !== "*" ? Number(s) : null,
  };
}
var fr = class {
  read(e, t) {
    for (let r of this.chunks) {
      if (e < r.start) break;
      if (e > r.end) continue;
      if (e + t > r.end) break;
      let a = e - r.start,
        f = a + t;
      return r.data.slice(a, f);
    }
    throw Error("Missing data");
  }
  write(e, t) {
    let r = e,
      a = r + t.length,
      f = 0,
      s = this.chunks.length;
    for (; f < s; f++) {
      let u = this.chunks[f];
      if ((S(u, "Missing chunk"), !(r > u.end))) {
        if (r > u.start) {
          let i = r - u.start,
            n = u.data.subarray(0, i);
          (t = dt(n, t)), (r = u.start);
        }
        break;
      }
    }
    for (; s > f; s--) {
      let u = this.chunks[s - 1];
      if ((S(u, "Missing chunk"), !(a < u.start))) {
        if (a < u.end) {
          let i = a - u.start,
            n = u.data.subarray(i);
          (t = dt(t, n)), (a = u.end);
        }
        break;
      }
    }
    let p = { start: r, end: a, data: t },
      g = s - f;
    this.chunks.splice(f, g, p);
  }
  constructor() {
    this.chunks = [];
  }
};
function pt(e, t) {
  var r;
  let a = [];
  for (; e.length > 0; ) {
    let f = (r = tt(e, t)) != null ? r : e.length,
      s = e.subarray(0, f);
    a.push(s), (e = e.subarray(f + t.length));
  }
  return a;
}
function tt(e, t) {
  for (let r = 0; r < e.length - t.length; r++) {
    let a = e.subarray(r);
    if (Ut(a, t)) return r;
  }
}
function hr(e, t) {
  for (let r = e.length - t.length; r >= 0; r--) {
    let a = e.subarray(r);
    if (Ut(a, t)) return r;
  }
}
function Ut(e, t) {
  for (let r = 0; r < t.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function dt(e, t) {
  let r = e.length + t.length,
    a = new Uint8Array(r);
  return a.set(e, 0), a.set(t, e.length), a;
}
function cr(e) {
  S(e.length > 0, "Must have at least one range");
  let t = [...e].sort((f, s) => f.from - s.from),
    r = [];
  for (let f of t) {
    let s = r.length - 1,
      p = r[s];
    p && f.from <= p.to
      ? (r[s] = { from: p.from, to: Math.max(p.to, f.to) })
      : r.push(f);
  }
  return `bytes=${r.map((f) => `${f.from}-${f.to - 1}`).join(",")}`;
}
var rt = class {
    static read(e, t) {
      let r = new rt(),
        a = e.readUint32(),
        f = e.readBuffer(a),
        s = er(new Uint8Array(f), { dictionary: t }),
        p = new Qe(s.buffer),
        g = p.readUint16();
      for (let u = 0; u < g; u++) {
        let i = p.readString(),
          n = $.read(p);
        r.setField(i, n);
      }
      return r;
    }
    writeUncompressed(e) {
      for (let [t, r] of (e.writeUint16(this.fields.size), this.fields))
        e.writeString(t), $.write(e, r);
    }
    write(e, t) {
      let r = new ar();
      this.writeUncompressed(r);
      let a = Xt(r.subarray(), { dictionary: t });
      e.writeUint32(a.byteLength), e.writeBuffer(a);
    }
    getData() {
      let e = {};
      for (let [t, r] of this.fields) e[t] = r;
      return e;
    }
    setField(e, t) {
      this.fields.set(e, t);
    }
    getField(e) {
      return this.fields.get(e);
    }
    constructor() {
      this.fields = new Map();
    }
  },
  pr = class {
    scanItems() {
      return (
        this.itemsPromise != null ||
          (this.itemsPromise = Promise.all([
            fetch(this.url),
            this.getCompressionDictionary(),
          ]).then(async ([e, t]) => {
            if (!e.ok)
              throw Error(`Request failed: ${e.status} ${e.statusText}`);
            let r = await e.arrayBuffer(),
              a = new Qe(r),
              f = [],
              s = a.readUint32();
            for (let p = 0; p < s; p++) {
              let g = a.getOffset(),
                u = rt.read(a, t),
                i = a.getOffset() - g,
                n = new se(this.id, g, i),
                o = n.toString(),
                l = { pointer: o, data: u.getData() };
              this.itemLoader.prime(o, l), f.push(l);
            }
            return f;
          })),
        this.itemsPromise
      );
    }
    resolveItem(e) {
      return this.itemLoader.load(e);
    }
    getCompressionDictionary() {
      let e = this.compressionDictionaryCache.get(
        this.compressionDictionaryUrl,
      );
      if (e) return e;
      let t = fetch(this.compressionDictionaryUrl).then(async (r) => {
        if (!r.ok)
          throw Error(
            `Compression dictionary request failed: ${r.status} ${r.statusText}`,
          );
        let a = await r.arrayBuffer();
        return new Uint8Array(a);
      });
      return (
        this.compressionDictionaryCache.set(this.compressionDictionaryUrl, t), t
      );
    }
    constructor(e, t, r, a) {
      (this.id = e),
        (this.url = t),
        (this.compressionDictionaryUrl = r),
        (this.compressionDictionaryCache = a),
        (this.itemLoader = new qt.default(async (f) => {
          let s = f.map((u) => {
              let i = se.fromString(u);
              return { from: i.offset, to: i.offset + i.length };
            }),
            [p, g] = await Promise.all([
              sr(this.url, s),
              this.getCompressionDictionary(),
            ]);
          return p.map((u, i) => {
            let n = new Qe(u.buffer),
              o = rt.read(n, g),
              l = f[i];
            return S(l, "Missing pointer"), { pointer: l, data: o.getData() };
          });
        }));
    }
  },
  St = class {
    async scanItems() {
      return (
        await Promise.all(this.chunks.map(async (t) => t.scanItems()))
      ).flat();
    }
    async resolveItems(e) {
      return Promise.all(
        e.map((t) => {
          let r = se.fromString(t),
            a = this.chunks[r.chunkId];
          return S(a, "Missing chunk"), a.resolveItem(t);
        }),
      );
    }
    compareItems(e, t) {
      let r = se.fromString(e.pointer),
        a = se.fromString(t.pointer);
      return r.compare(a);
    }
    compareValues(e, t, r) {
      return $.compare(e, t, r);
    }
    constructor(e) {
      (this.options = e),
        (this.schema = this.options.schema),
        (this.indexes = this.options.indexes),
        (this.resolveRichText = this.options.resolveRichText);
      let t = new Map();
      this.chunks = this.options.chunks.map(
        (r, a) => new pr(a, r, this.options.compressionDictionary, t),
      );
    }
  };
/*! Bundled license information:

splaytree/dist/splay.js:
  (**
   * splaytree v3.1.2
   * Fast Splay tree for Node and browser
   *
   * @author Alexander Milevski <info@w8r.name>
   * @license MIT
   * @preserve
   *)
  (*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
  
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
  
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** *)
*/ var D = (e, t) => async () => (await e())[t],
  F = () => import("./TYK5zFM4J-2-UDYO5PGC.mjs"),
  dr = [
    D(F, "richText"),
    D(F, "richText1"),
    D(F, "richText2"),
    D(F, "richText3"),
    D(F, "richText4"),
    D(F, "richText5"),
    D(F, "richText6"),
    D(F, "richText7"),
    D(F, "richText8"),
    D(F, "richText9"),
    D(F, "richText10"),
    D(F, "richText11"),
    D(F, "richText12"),
    D(F, "richText13"),
    D(F, "richText14"),
    D(F, "richText15"),
    D(F, "richText16"),
    D(F, "richText17"),
    D(F, "richText18"),
  ];
async function Lt(e) {
  let t = dr[e];
  if (t) return await t();
}
var yr = {
    aw7s0WUIM: { isNullable: !0, type: h.Enum },
    B6ayqpvjf: { isNullable: !0, type: h.String },
    BTG8eTQqc: { isNullable: !0, type: h.RichText },
    cdI59d3FI: { isNullable: !0, type: h.Date },
    cQRb6rBgD: { isNullable: !0, type: h.Enum },
    FBN3s_gfM: { isNullable: !0, type: h.String },
    h3NndMT3X: { isNullable: !0, type: h.Boolean },
    hRQvHJnkU: { isNullable: !0, type: h.String },
    i7eUIM6KL: { isNullable: !0, type: h.Enum },
    id: { isNullable: !1, type: h.String },
    ihz2B_T8K: { isNullable: !0, type: h.Enum },
    ikH4Oa3Vj: { isNullable: !0, type: h.String },
    iWrV1fgG0: { isNullable: !0, type: h.String },
    lKvl3WcRQ: { isNullable: !0, type: h.Boolean },
    NeW7jRCrS: { isNullable: !0, type: h.Link },
    nextItemId: { isNullable: !0, type: h.String },
    NxWTLgp2C: { isNullable: !0, type: h.Enum },
    oDr5GBPtj: { isNullable: !0, type: h.RichText },
    PcSOxCIah: { isNullable: !0, type: h.String },
    pG27F_S6T: { isNullable: !0, type: h.Boolean },
    previousItemId: { isNullable: !0, type: h.String },
    rGWYgbHC_: { isNullable: !0, type: h.Boolean },
    RXH9Y2zBS: { isNullable: !0, type: h.String },
    TBCnzfSIw: { isNullable: !0, type: h.String },
    TisdyB9pA: { isNullable: !0, type: h.Enum },
    wsjEhoSf3: { isNullable: !0, type: h.String },
    YlQuuq2WI: { isNullable: !0, type: h.ResponsiveImage },
    z_KzgaCAH: { isNullable: !0, type: h.Boolean },
  },
  Nt = new st(),
  Se = {
    collectionByLocaleId: {
      default: new St({
        chunks: [
          new URL(
            "./TYK5zFM4J-chunk-default-0.framercms",
            "https://framerusercontent.com/modules/x45ob7ic9XKSetY8LDfs/iWKRPi7HfKfk9H114z9T/TYK5zFM4J.js",
          ).href,
        ],
        compressionDictionary: new URL(
          "./TYK5zFM4J-chunk-default-dict.framercms",
          "https://framerusercontent.com/modules/x45ob7ic9XKSetY8LDfs/iWKRPi7HfKfk9H114z9T/TYK5zFM4J.js",
        ).href,
        indexes: [],
        resolveRichText: Lt,
        schema: yr,
      }),
    },
    displayName: "Blog",
  },
  zr = Se;
ot(Se, {
  B6ayqpvjf: { defaultValue: "", title: "Title", type: h.String },
  hRQvHJnkU: { defaultValue: "", title: "Title_Chn", type: h.String },
  FBN3s_gfM: { title: "Slug", type: h.String },
  cdI59d3FI: { defaultValue: "", title: "Date", type: h.Date },
  h3NndMT3X: { defaultValue: !0, title: "Magic Title", type: h.Boolean },
  YlQuuq2WI: {
    __defaultAssetReference:
      "data:framer/asset-reference,OFPWvj7GELoM7sYVcZKxhJttYSs.jpg?originalFilename=photo-1644480748278-3f764e27a868%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHw0Mnx8M2R8ZW58MHx8fHwxNjk5OTQzMzU4fDA%26ixlib%3Drb-4.0.jpg&preferredSize=large",
    title: "Image",
    type: h.ResponsiveImage,
  },
  NxWTLgp2C: {
    defaultValue: "nLUm4zPVe",
    options: ["nLUm4zPVe", "yHvm0KK6A", "gpMxnqwWP", "qCJw6bvLq"],
    optionTitles: ["Project", "Idea", "All", "Playground"],
    title: "Type",
    type: h.Enum,
  },
  pG27F_S6T: { defaultValue: !1, title: "Spotlight", type: h.Boolean },
  rGWYgbHC_: { defaultValue: !1, title: "Dynamic Cover", type: h.Boolean },
  ikH4Oa3Vj: {
    defaultValue:
      "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
    title: "Cover Link",
    type: h.String,
  },
  wsjEhoSf3: {
    defaultValue:
      "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
    title: "Video Link",
    type: h.String,
  },
  PcSOxCIah: {
    defaultValue: "Web Design",
    title: "Design Type",
    type: h.String,
  },
  i7eUIM6KL: {
    defaultValue: "H0LCpFrsy",
    options: ["H0LCpFrsy", "seDkX2Yqh"],
    optionTitles: ["Image", "Video"],
    title: "Media Type",
    type: h.Enum,
  },
  lKvl3WcRQ: { defaultValue: !0, title: "Detail", type: h.Boolean },
  aw7s0WUIM: {
    defaultValue: "xDxn8rb3r",
    options: ["dYUUrk91o", "xDxn8rb3r", "achYMjx9v", "xDXZrTsow"],
    optionTitles: ["Dark", "Light", "Alaways Light", "Always Dark"],
    title: "Appearence",
    type: h.Enum,
  },
  TisdyB9pA: {
    defaultValue: "W97lb6v6r",
    options: ["W97lb6v6r", "mHdnKlUwB", "zIBtOBo2m"],
    optionTitles: ["Brief", "Component", "Brief & Component"],
    title: "Presentation",
    type: h.Enum,
  },
  ihz2B_T8K: {
    defaultValue: "QNEENy4pV",
    options: ["QNEENy4pV", "kxWSTEga4", "TL0xBbnow", "swqS2Zq23"],
    optionTitles: ["Link", "Processing", "Hide", "Scroll Down"],
    title: "Button Status",
    type: h.Enum,
  },
  iWrV1fgG0: { defaultValue: "", title: "Demo Link", type: h.String },
  z_KzgaCAH: { defaultValue: !0, title: "Allow Demo", type: h.Boolean },
  NeW7jRCrS: { title: "Link", type: h.Link },
  TBCnzfSIw: {
    defaultValue:
      "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout.",
    placeholder: "",
    title: "Intro",
    type: h.String,
  },
  RXH9Y2zBS: {
    defaultValue:
      "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout.",
    title: "Intro_Chn",
    type: h.String,
  },
  cQRb6rBgD: {
    defaultValue: "Y3o1ZnP_C",
    options: ["Y3o1ZnP_C", "tlFDSBbIS", "r3oNrDKny"],
    optionTitles: ["None", "InProgress", "New"],
    title: "Status",
    type: h.Enum,
  },
  oDr5GBPtj: { defaultValue: "", title: "Content", type: h.RichText },
  BTG8eTQqc: { defaultValue: "", title: "Content_Chn", type: h.RichText },
  previousItemId: {
    dataIdentifier: "local-module:collection/TYK5zFM4J:default",
    title: "Previous",
    type: h.CollectionReference,
  },
  nextItemId: {
    dataIdentifier: "local-module:collection/TYK5zFM4J:default",
    title: "Next",
    type: h.CollectionReference,
  },
});
var gr = (e, t) => {
    switch ((t?.fallback, e)) {
      case "nLUm4zPVe":
        return "Project";
      case "yHvm0KK6A":
        return "Idea";
      case "gpMxnqwWP":
        return "All";
      case "qCJw6bvLq":
        return "Playground";
      default:
        return "";
    }
  },
  mr = (e, t) => {
    switch ((t?.fallback, e)) {
      case "H0LCpFrsy":
        return "Image";
      case "seDkX2Yqh":
        return "Video";
      default:
        return "";
    }
  },
  vr = (e, t) => {
    switch ((t?.fallback, e)) {
      case "dYUUrk91o":
        return "Dark";
      case "xDxn8rb3r":
        return "Light";
      case "achYMjx9v":
        return "Alaways Light";
      case "xDXZrTsow":
        return "Always Dark";
      default:
        return "";
    }
  },
  wr = (e, t) => {
    switch ((t?.fallback, e)) {
      case "W97lb6v6r":
        return "Brief";
      case "mHdnKlUwB":
        return "Component";
      case "zIBtOBo2m":
        return "Brief & Component";
      default:
        return "";
    }
  },
  br = (e, t) => {
    switch ((t?.fallback, e)) {
      case "QNEENy4pV":
        return "Link";
      case "kxWSTEga4":
        return "Processing";
      case "TL0xBbnow":
        return "Hide";
      case "swqS2Zq23":
        return "Scroll Down";
      default:
        return "";
    }
  },
  Tr = (e, t) => {
    switch ((t?.fallback, e)) {
      case "Y3o1ZnP_C":
        return "None";
      case "tlFDSBbIS":
        return "InProgress";
      case "r3oNrDKny":
        return "New";
      default:
        return "";
    }
  },
  qr = {
    aw7s0WUIM: vr,
    cQRb6rBgD: Tr,
    i7eUIM6KL: mr,
    ihz2B_T8K: br,
    NxWTLgp2C: gr,
    TisdyB9pA: wr,
  },
  Hr = {
    async getSlugByRecordId(e, t) {
      let [r] = await Nt.query(
        {
          from: { data: Se, type: "Collection" },
          limit: { type: "LiteralValue", value: 1 },
          select: [{ name: "FBN3s_gfM", type: "Identifier" }],
          where: {
            left: { name: "id", type: "Identifier" },
            operator: "==",
            right: { type: "LiteralValue", value: e },
            type: "BinaryOperation",
          },
        },
        t,
      );
      return r?.FBN3s_gfM;
    },
    async getRecordIdBySlug(e, t) {
      let [r] = await Nt.query(
        {
          from: { data: Se, type: "Collection" },
          limit: { type: "LiteralValue", value: 1 },
          select: [{ name: "id", type: "Identifier" }],
          where: {
            left: { name: "FBN3s_gfM", type: "Identifier" },
            operator: "==",
            right: { type: "LiteralValue", value: e },
            type: "BinaryOperation",
          },
        },
        t,
      );
      return r?.id;
    },
  },
  Wr = {
    exports: {
      NxWTLgp2CToDisplayName: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      cQRb6rBgDToDisplayName: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      default: {
        type: "data",
        name: "data",
        annotations: {
          framerCollectionId: "TYK5zFM4J",
          framerEnumToDisplayNameUtils: "2",
          framerCollectionUtils: "1",
          framerContractVersion: "1",
          framerData: "",
          framerSlug: "FBN3s_gfM",
          framerRecordIdKey: "id",
        },
      },
      utils: { type: "variable", annotations: { framerContractVersion: "1" } },
      ihz2B_T8KToDisplayName: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      i7eUIM6KLToDisplayName: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      aw7s0WUIMToDisplayName: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      enumToDisplayNameFunctions: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      TisdyB9pAToDisplayName: {
        type: "variable",
        annotations: { framerContractVersion: "1" },
      },
      __FramerMetadata__: { type: "variable" },
    },
  };
export {
  zr as a,
  gr as b,
  mr as c,
  vr as d,
  wr as e,
  br as f,
  Tr as g,
  qr as h,
  Hr as i,
  Wr as j,
};
//# sourceMappingURL=chunk-GDW2HGW6.mjs.map
