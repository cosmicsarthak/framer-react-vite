import { c as b, d as F } from "./chunk-Y5FTINFI.mjs";
var _ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : F,
  k = {};
(function () {
  var T = function () {
    this.init();
  };
  T.prototype = {
    init: function () {
      var e = this || _ || r;
      return (
        (e._counter = 1e3),
        (e._html5AudioPool = []),
        (e.html5PoolSize = 10),
        (e._codecs = {}),
        (e._howls = []),
        (e._muted = !1),
        (e._volume = 1),
        (e._canPlayEvent = "canplaythrough"),
        (e._navigator = typeof b < "u" && b.navigator ? b.navigator : null),
        (e.masterGain = null),
        (e.noAudio = !1),
        (e.usingWebAudio = !0),
        (e.autoSuspend = !0),
        (e.ctx = null),
        (e.autoUnlock = !0),
        e._setup(),
        e
      );
    },
    volume: function (e) {
      var n = this || _ || r;
      if (
        ((e = parseFloat(e)), n.ctx || g(), typeof e < "u" && e >= 0 && e <= 1)
      ) {
        if (((n._volume = e), n._muted)) return n;
        n.usingWebAudio &&
          n.masterGain.gain.setValueAtTime(e, r.ctx.currentTime);
        for (var t = 0; t < n._howls.length; t++)
          if (!n._howls[t]._webAudio)
            for (var o = n._howls[t]._getSoundIds(), u = 0; u < o.length; u++) {
              var d = n._howls[t]._soundById(o[u]);
              d && d._node && (d._node.volume = d._volume * e);
            }
        return n;
      }
      return n._volume;
    },
    mute: function (e) {
      var n = this || _ || r;
      n.ctx || g(),
        (n._muted = e),
        n.usingWebAudio &&
          n.masterGain.gain.setValueAtTime(
            e ? 0 : n._volume,
            r.ctx.currentTime,
          );
      for (var t = 0; t < n._howls.length; t++)
        if (!n._howls[t]._webAudio)
          for (var o = n._howls[t]._getSoundIds(), u = 0; u < o.length; u++) {
            var d = n._howls[t]._soundById(o[u]);
            d && d._node && (d._node.muted = !!e || d._muted);
          }
      return n;
    },
    stop: function () {
      for (var e = this || _ || r, n = 0; n < e._howls.length; n++)
        e._howls[n].stop();
      return e;
    },
    unload: function () {
      for (var e = this || _ || r, n = e._howls.length - 1; n >= 0; n--)
        e._howls[n].unload();
      return (
        e.usingWebAudio &&
          e.ctx &&
          typeof e.ctx.close < "u" &&
          (e.ctx.close(), (e.ctx = null), g()),
        e
      );
    },
    codecs: function (e) {
      return (this || _ || r)._codecs[e.replace(/^x-/, "")];
    },
    _setup: function () {
      var e = this || _ || r;
      if (
        ((e.state = (e.ctx && e.ctx.state) || "suspended"),
        e._autoSuspend(),
        !e.usingWebAudio)
      )
        if (typeof Audio < "u")
          try {
            var n = new Audio();
            typeof n.oncanplaythrough > "u" && (e._canPlayEvent = "canplay");
          } catch {
            e.noAudio = !0;
          }
        else e.noAudio = !0;
      try {
        (n = new Audio()), n.muted && (e.noAudio = !0);
      } catch {}
      return e.noAudio || e._setupCodecs(), e;
    },
    _setupCodecs: function () {
      var e = this || _ || r,
        n = null;
      try {
        n = typeof Audio < "u" ? new Audio() : null;
      } catch {
        return e;
      }
      if (!n || typeof n.canPlayType != "function") return e;
      var t = n.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        o = e._navigator ? e._navigator.userAgent : "",
        u = o.match(/OPR\/(\d+)/g),
        d = u && parseInt(u[0].split("/")[1], 10) < 33,
        a = o.indexOf("Safari") !== -1 && o.indexOf("Chrome") === -1,
        c = o.match(/Version\/(.*?) /),
        v = a && c && parseInt(c[1], 10) < 15;
      return (
        (e._codecs = {
          mp3: !!(!d && (t || n.canPlayType("audio/mp3;").replace(/^no$/, ""))),
          mpeg: !!t,
          opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
          ogg: !!n
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, ""),
          oga: !!n
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, ""),
          wav: !!(
            n.canPlayType('audio/wav; codecs="1"') || n.canPlayType("audio/wav")
          ).replace(/^no$/, ""),
          aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
          caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
          m4a: !!(
            n.canPlayType("audio/x-m4a;") ||
            n.canPlayType("audio/m4a;") ||
            n.canPlayType("audio/aac;")
          ).replace(/^no$/, ""),
          m4b: !!(
            n.canPlayType("audio/x-m4b;") ||
            n.canPlayType("audio/m4b;") ||
            n.canPlayType("audio/aac;")
          ).replace(/^no$/, ""),
          mp4: !!(
            n.canPlayType("audio/x-mp4;") ||
            n.canPlayType("audio/mp4;") ||
            n.canPlayType("audio/aac;")
          ).replace(/^no$/, ""),
          weba: !!(
            !v &&
            n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
          ),
          webm: !!(
            !v &&
            n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
          ),
          dolby: !!n
            .canPlayType('audio/mp4; codecs="ec-3"')
            .replace(/^no$/, ""),
          flac: !!(
            n.canPlayType("audio/x-flac;") || n.canPlayType("audio/flac;")
          ).replace(/^no$/, ""),
        }),
        e
      );
    },
    _unlockAudio: function () {
      var e = this || _ || r;
      if (!e._audioUnlocked && e.ctx) {
        (e._audioUnlocked = !1),
          (e.autoUnlock = !1),
          !e._mobileUnloaded &&
            e.ctx.sampleRate !== 44100 &&
            ((e._mobileUnloaded = !0), e.unload()),
          (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
        var n = function (t) {
          for (; e._html5AudioPool.length < e.html5PoolSize; )
            try {
              var o = new Audio();
              (o._unlocked = !0), e._releaseHtml5Audio(o);
            } catch {
              e.noAudio = !0;
              break;
            }
          for (var u = 0; u < e._howls.length; u++)
            if (!e._howls[u]._webAudio)
              for (
                var d = e._howls[u]._getSoundIds(), a = 0;
                a < d.length;
                a++
              ) {
                var c = e._howls[u]._soundById(d[a]);
                c &&
                  c._node &&
                  !c._node._unlocked &&
                  ((c._node._unlocked = !0), c._node.load());
              }
          e._autoResume();
          var v = e.ctx.createBufferSource();
          (v.buffer = e._scratchBuffer),
            v.connect(e.ctx.destination),
            typeof v.start > "u" ? v.noteOn(0) : v.start(0),
            typeof e.ctx.resume == "function" && e.ctx.resume(),
            (v.onended = function () {
              v.disconnect(0),
                (e._audioUnlocked = !0),
                document.removeEventListener("touchstart", n, !0),
                document.removeEventListener("touchend", n, !0),
                document.removeEventListener("click", n, !0),
                document.removeEventListener("keydown", n, !0);
              for (var A = 0; A < e._howls.length; A++)
                e._howls[A]._emit("unlock");
            });
        };
        return (
          document.addEventListener("touchstart", n, !0),
          document.addEventListener("touchend", n, !0),
          document.addEventListener("click", n, !0),
          document.addEventListener("keydown", n, !0),
          e
        );
      }
    },
    _obtainHtml5Audio: function () {
      var e = this || _ || r;
      if (e._html5AudioPool.length) return e._html5AudioPool.pop();
      var n = new Audio().play();
      return (
        n &&
          typeof Promise < "u" &&
          (n instanceof Promise || typeof n.then == "function") &&
          n.catch(function () {
            console.warn(
              "HTML5 Audio pool exhausted, returning potentially locked audio object.",
            );
          }),
        new Audio()
      );
    },
    _releaseHtml5Audio: function (e) {
      var n = this || _ || r;
      return e._unlocked && n._html5AudioPool.push(e), n;
    },
    _autoSuspend: function () {
      var e = this || _;
      if (
        e.autoSuspend &&
        e.ctx &&
        typeof e.ctx.suspend < "u" &&
        r.usingWebAudio
      ) {
        for (var n = 0; n < e._howls.length; n++)
          if (e._howls[n]._webAudio) {
            for (var t = 0; t < e._howls[n]._sounds.length; t++)
              if (!e._howls[n]._sounds[t]._paused) return e;
          }
        return (
          e._suspendTimer && clearTimeout(e._suspendTimer),
          (e._suspendTimer = setTimeout(function () {
            if (e.autoSuspend) {
              (e._suspendTimer = null), (e.state = "suspending");
              var o = function () {
                (e.state = "suspended"),
                  e._resumeAfterSuspend &&
                    (delete e._resumeAfterSuspend, e._autoResume());
              };
              e.ctx.suspend().then(o, o);
            }
          }, 3e4)),
          e
        );
      }
    },
    _autoResume: function () {
      var e = this || _;
      if (e.ctx && typeof e.ctx.resume < "u" && r.usingWebAudio)
        return (
          e.state === "running" &&
          e.ctx.state !== "interrupted" &&
          e._suspendTimer
            ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
            : e.state === "suspended" ||
                (e.state === "running" && e.ctx.state === "interrupted")
              ? (e.ctx.resume().then(function () {
                  e.state = "running";
                  for (var n = 0; n < e._howls.length; n++)
                    e._howls[n]._emit("resume");
                }),
                e._suspendTimer &&
                  (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
              : e.state === "suspending" && (e._resumeAfterSuspend = !0),
          e
        );
    },
  };
  var r = new T(),
    s = function (e) {
      var n = this || _;
      e.src && e.src.length !== 0
        ? n.init(e)
        : console.error(
            "An array of source files must be passed with any new Howl.",
          );
    };
  s.prototype = {
    init: function (e) {
      var n = this || _;
      return (
        r.ctx || g(),
        (n._autoplay = e.autoplay || !1),
        (n._format = typeof e.format != "string" ? e.format : [e.format]),
        (n._html5 = e.html5 || !1),
        (n._muted = e.mute || !1),
        (n._loop = e.loop || !1),
        (n._pool = e.pool || 5),
        (n._preload =
          (typeof e.preload != "boolean" && e.preload !== "metadata") ||
          e.preload),
        (n._rate = e.rate || 1),
        (n._sprite = e.sprite || {}),
        (n._src = typeof e.src != "string" ? e.src : [e.src]),
        (n._volume = e.volume !== void 0 ? e.volume : 1),
        (n._xhr = {
          method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
          headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
          withCredentials:
            !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials,
        }),
        (n._duration = 0),
        (n._state = "unloaded"),
        (n._sounds = []),
        (n._endTimers = {}),
        (n._queue = []),
        (n._playLock = !1),
        (n._onend = e.onend ? [{ fn: e.onend }] : []),
        (n._onfade = e.onfade ? [{ fn: e.onfade }] : []),
        (n._onload = e.onload ? [{ fn: e.onload }] : []),
        (n._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
        (n._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
        (n._onpause = e.onpause ? [{ fn: e.onpause }] : []),
        (n._onplay = e.onplay ? [{ fn: e.onplay }] : []),
        (n._onstop = e.onstop ? [{ fn: e.onstop }] : []),
        (n._onmute = e.onmute ? [{ fn: e.onmute }] : []),
        (n._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
        (n._onrate = e.onrate ? [{ fn: e.onrate }] : []),
        (n._onseek = e.onseek ? [{ fn: e.onseek }] : []),
        (n._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
        (n._onresume = []),
        (n._webAudio = r.usingWebAudio && !n._html5),
        typeof r.ctx < "u" && r.ctx && r.autoUnlock && r._unlockAudio(),
        r._howls.push(n),
        n._autoplay &&
          n._queue.push({
            event: "play",
            action: function () {
              n.play();
            },
          }),
        n._preload && n._preload !== "none" && n.load(),
        n
      );
    },
    load: function () {
      var e = this || _,
        n = null;
      if (r.noAudio) e._emit("loaderror", null, "No audio support.");
      else {
        typeof e._src == "string" && (e._src = [e._src]);
        for (var t = 0; t < e._src.length; t++) {
          var o, u;
          if (e._format && e._format[t]) o = e._format[t];
          else {
            if (((u = e._src[t]), typeof u != "string")) {
              e._emit(
                "loaderror",
                null,
                "Non-string found in selected audio sources - ignoring.",
              );
              continue;
            }
            (o = /^data:audio\/([^;,]+);/i.exec(u)),
              o || (o = /\.([^.]+)$/.exec(u.split("?", 1)[0])),
              o && (o = o[1].toLowerCase());
          }
          if (
            (o ||
              console.warn(
                'No file extension was found. Consider using the "format" property or specify an extension.',
              ),
            o && r.codecs(o))
          ) {
            n = e._src[t];
            break;
          }
        }
        if (n)
          return (
            (e._src = n),
            (e._state = "loading"),
            b.location.protocol === "https:" &&
              n.slice(0, 5) === "http:" &&
              ((e._html5 = !0), (e._webAudio = !1)),
            new i(e),
            e._webAudio && f(e),
            e
          );
        e._emit(
          "loaderror",
          null,
          "No codec support for selected audio sources.",
        );
      }
    },
    play: function (e, n) {
      var t = this || _,
        o = null;
      if (typeof e == "number") (o = e), (e = null);
      else {
        if (typeof e == "string" && t._state === "loaded" && !t._sprite[e])
          return null;
        if (typeof e > "u" && ((e = "__default"), !t._playLock)) {
          for (var u = 0, d = 0; d < t._sounds.length; d++)
            t._sounds[d]._paused &&
              !t._sounds[d]._ended &&
              (u++, (o = t._sounds[d]._id));
          u === 1 ? (e = null) : (o = null);
        }
      }
      var a = o ? t._soundById(o) : t._inactiveSound();
      if (!a) return null;
      if ((o && !e && (e = a._sprite || "__default"), t._state !== "loaded")) {
        (a._sprite = e), (a._ended = !1);
        var c = a._id;
        return (
          t._queue.push({
            event: "play",
            action: function () {
              t.play(c);
            },
          }),
          c
        );
      }
      if (o && !a._paused) return n || t._loadQueue("play"), a._id;
      t._webAudio && r._autoResume();
      var v = Math.max(0, a._seek > 0 ? a._seek : t._sprite[e][0] / 1e3),
        A = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - v),
        w = (1e3 * A) / Math.abs(a._rate),
        x = t._sprite[e][0] / 1e3,
        I = (t._sprite[e][0] + t._sprite[e][1]) / 1e3;
      (a._sprite = e), (a._ended = !1);
      var H = function () {
        (a._paused = !1),
          (a._seek = v),
          (a._start = x),
          (a._stop = I),
          (a._loop = !!(a._loop || t._sprite[e][2]));
      };
      if (!(v >= I)) {
        var y = a._node;
        if (t._webAudio) {
          var O = function () {
            (t._playLock = !1), H(), t._refreshBuffer(a);
            var S = a._muted || t._muted ? 0 : a._volume;
            y.gain.setValueAtTime(S, r.ctx.currentTime),
              (a._playStart = r.ctx.currentTime),
              typeof y.bufferSource.start > "u"
                ? a._loop
                  ? y.bufferSource.noteGrainOn(0, v, 86400)
                  : y.bufferSource.noteGrainOn(0, v, A)
                : a._loop
                  ? y.bufferSource.start(0, v, 86400)
                  : y.bufferSource.start(0, v, A),
              w !== 1 / 0 &&
                (t._endTimers[a._id] = setTimeout(t._ended.bind(t, a), w)),
              n ||
                setTimeout(function () {
                  t._emit("play", a._id), t._loadQueue();
                }, 0);
          };
          r.state === "running" && r.ctx.state !== "interrupted"
            ? O()
            : ((t._playLock = !0), t.once("resume", O), t._clearTimer(a._id));
        } else {
          var P = function () {
            (y.currentTime = v),
              (y.muted = a._muted || t._muted || r._muted || y.muted),
              (y.volume = a._volume * r.volume()),
              (y.playbackRate = a._rate);
            try {
              var S = y.play();
              if (
                (S &&
                typeof Promise < "u" &&
                (S instanceof Promise || typeof S.then == "function")
                  ? ((t._playLock = !0),
                    H(),
                    S.then(function () {
                      (t._playLock = !1),
                        (y._unlocked = !0),
                        n ? t._loadQueue() : t._emit("play", a._id);
                    }).catch(function () {
                      (t._playLock = !1),
                        t._emit(
                          "playerror",
                          a._id,
                          "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.",
                        ),
                        (a._ended = !0),
                        (a._paused = !0);
                    }))
                  : n || ((t._playLock = !1), H(), t._emit("play", a._id)),
                (y.playbackRate = a._rate),
                y.paused)
              ) {
                t._emit(
                  "playerror",
                  a._id,
                  "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.",
                );
                return;
              }
              e !== "__default" || a._loop
                ? (t._endTimers[a._id] = setTimeout(t._ended.bind(t, a), w))
                : ((t._endTimers[a._id] = function () {
                    t._ended(a),
                      y.removeEventListener("ended", t._endTimers[a._id], !1);
                  }),
                  y.addEventListener("ended", t._endTimers[a._id], !1));
            } catch (L) {
              t._emit("playerror", a._id, L);
            }
          };
          y.src ===
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" &&
            ((y.src = t._src), y.load());
          var B = (b && b.ejecta) || (!y.readyState && r._navigator.isCocoonJS);
          if (y.readyState >= 3 || B) P();
          else {
            (t._playLock = !0), (t._state = "loading");
            var M = function () {
              (t._state = "loaded"),
                P(),
                y.removeEventListener(r._canPlayEvent, M, !1);
            };
            y.addEventListener(r._canPlayEvent, M, !1), t._clearTimer(a._id);
          }
        }
        return a._id;
      }
      t._ended(a);
    },
    pause: function (e) {
      var n = this || _;
      if (n._state !== "loaded" || n._playLock)
        return (
          n._queue.push({
            event: "pause",
            action: function () {
              n.pause(e);
            },
          }),
          n
        );
      for (var t = n._getSoundIds(e), o = 0; o < t.length; o++) {
        n._clearTimer(t[o]);
        var u = n._soundById(t[o]);
        if (
          u &&
          !u._paused &&
          ((u._seek = n.seek(t[o])),
          (u._rateSeek = 0),
          (u._paused = !0),
          n._stopFade(t[o]),
          u._node)
        )
          if (n._webAudio) {
            if (!u._node.bufferSource) continue;
            typeof u._node.bufferSource.stop > "u"
              ? u._node.bufferSource.noteOff(0)
              : u._node.bufferSource.stop(0),
              n._cleanBuffer(u._node);
          } else
            (isNaN(u._node.duration) && u._node.duration !== 1 / 0) ||
              u._node.pause();
        arguments[1] || n._emit("pause", u ? u._id : null);
      }
      return n;
    },
    stop: function (e, n) {
      var t = this || _;
      if (t._state !== "loaded" || t._playLock)
        return (
          t._queue.push({
            event: "stop",
            action: function () {
              t.stop(e);
            },
          }),
          t
        );
      for (var o = t._getSoundIds(e), u = 0; u < o.length; u++) {
        t._clearTimer(o[u]);
        var d = t._soundById(o[u]);
        d &&
          ((d._seek = d._start || 0),
          (d._rateSeek = 0),
          (d._paused = !0),
          (d._ended = !0),
          t._stopFade(o[u]),
          d._node &&
            (t._webAudio
              ? d._node.bufferSource &&
                (typeof d._node.bufferSource.stop > "u"
                  ? d._node.bufferSource.noteOff(0)
                  : d._node.bufferSource.stop(0),
                t._cleanBuffer(d._node))
              : (!isNaN(d._node.duration) || d._node.duration === 1 / 0) &&
                ((d._node.currentTime = d._start || 0),
                d._node.pause(),
                d._node.duration === 1 / 0 && t._clearSound(d._node))),
          n || t._emit("stop", d._id));
      }
      return t;
    },
    mute: function (e, n) {
      var t = this || _;
      if (t._state !== "loaded" || t._playLock)
        return (
          t._queue.push({
            event: "mute",
            action: function () {
              t.mute(e, n);
            },
          }),
          t
        );
      if (typeof n > "u") {
        if (typeof e != "boolean") return t._muted;
        t._muted = e;
      }
      for (var o = t._getSoundIds(n), u = 0; u < o.length; u++) {
        var d = t._soundById(o[u]);
        d &&
          ((d._muted = e),
          d._interval && t._stopFade(d._id),
          t._webAudio && d._node
            ? d._node.gain.setValueAtTime(e ? 0 : d._volume, r.ctx.currentTime)
            : d._node && (d._node.muted = !!r._muted || e),
          t._emit("mute", d._id));
      }
      return t;
    },
    volume: function () {
      var e = this || _,
        n = arguments,
        t,
        o;
      if (n.length === 0) return e._volume;
      if (n.length === 1 || (n.length === 2 && typeof n[1] > "u")) {
        var u = e._getSoundIds(),
          d = u.indexOf(n[0]);
        d >= 0 ? (o = parseInt(n[0], 10)) : (t = parseFloat(n[0]));
      } else
        n.length >= 2 && ((t = parseFloat(n[0])), (o = parseInt(n[1], 10)));
      var a;
      if (!(typeof t < "u" && t >= 0 && t <= 1))
        return (a = o ? e._soundById(o) : e._sounds[0]), a ? a._volume : 0;
      if (e._state !== "loaded" || e._playLock)
        return (
          e._queue.push({
            event: "volume",
            action: function () {
              e.volume.apply(e, n);
            },
          }),
          e
        );
      typeof o > "u" && (e._volume = t), (o = e._getSoundIds(o));
      for (var c = 0; c < o.length; c++)
        (a = e._soundById(o[c])),
          a &&
            ((a._volume = t),
            n[2] || e._stopFade(o[c]),
            e._webAudio && a._node && !a._muted
              ? a._node.gain.setValueAtTime(t, r.ctx.currentTime)
              : a._node && !a._muted && (a._node.volume = t * r.volume()),
            e._emit("volume", a._id));
      return e;
    },
    fade: function (e, n, t, o) {
      var u = this || _;
      if (u._state !== "loaded" || u._playLock)
        return (
          u._queue.push({
            event: "fade",
            action: function () {
              u.fade(e, n, t, o);
            },
          }),
          u
        );
      (e = Math.min(Math.max(0, parseFloat(e)), 1)),
        (n = Math.min(Math.max(0, parseFloat(n)), 1)),
        (t = parseFloat(t)),
        u.volume(e, o);
      for (var d = u._getSoundIds(o), a = 0; a < d.length; a++) {
        var c = u._soundById(d[a]);
        if (c) {
          if ((o || u._stopFade(d[a]), u._webAudio && !c._muted)) {
            var v = r.ctx.currentTime,
              A = v + t / 1e3;
            (c._volume = e),
              c._node.gain.setValueAtTime(e, v),
              c._node.gain.linearRampToValueAtTime(n, A);
          }
          u._startFadeInterval(c, e, n, t, d[a], typeof o > "u");
        }
      }
      return u;
    },
    _startFadeInterval: function (e, n, t, o, u, d) {
      var a = this || _,
        c = n,
        v = t - n,
        A = Math.abs(v / 0.01),
        w = Math.max(4, A > 0 ? o / A : o),
        x = Date.now();
      (e._fadeTo = t),
        (e._interval = setInterval(function () {
          var I = (Date.now() - x) / o;
          (x = Date.now()),
            (c += v * I),
            (c = Math.round(100 * c) / 100),
            (c = v < 0 ? Math.max(t, c) : Math.min(t, c)),
            a._webAudio ? (e._volume = c) : a.volume(c, e._id, !0),
            d && (a._volume = c),
            ((t < n && c <= t) || (t > n && c >= t)) &&
              (clearInterval(e._interval),
              (e._interval = null),
              (e._fadeTo = null),
              a.volume(t, e._id),
              a._emit("fade", e._id));
        }, w));
    },
    _stopFade: function (e) {
      var n = this || _,
        t = n._soundById(e);
      return (
        t &&
          t._interval &&
          (n._webAudio && t._node.gain.cancelScheduledValues(r.ctx.currentTime),
          clearInterval(t._interval),
          (t._interval = null),
          n.volume(t._fadeTo, e),
          (t._fadeTo = null),
          n._emit("fade", e)),
        n
      );
    },
    loop: function () {
      var e = this || _,
        n = arguments,
        t,
        o,
        u;
      if (n.length === 0) return e._loop;
      if (n.length === 1) {
        if (typeof n[0] != "boolean")
          return (u = e._soundById(parseInt(n[0], 10))), !!u && u._loop;
        (t = n[0]), (e._loop = t);
      } else n.length === 2 && ((t = n[0]), (o = parseInt(n[1], 10)));
      for (var d = e._getSoundIds(o), a = 0; a < d.length; a++)
        (u = e._soundById(d[a])),
          u &&
            ((u._loop = t),
            e._webAudio &&
              u._node &&
              u._node.bufferSource &&
              ((u._node.bufferSource.loop = t),
              t &&
                ((u._node.bufferSource.loopStart = u._start || 0),
                (u._node.bufferSource.loopEnd = u._stop),
                e.playing(d[a]) && (e.pause(d[a], !0), e.play(d[a], !0)))));
      return e;
    },
    rate: function () {
      var e = this || _,
        n = arguments,
        t,
        o;
      if (n.length === 0) o = e._sounds[0]._id;
      else if (n.length === 1) {
        var u = e._getSoundIds(),
          d = u.indexOf(n[0]);
        d >= 0 ? (o = parseInt(n[0], 10)) : (t = parseFloat(n[0]));
      } else
        n.length === 2 && ((t = parseFloat(n[0])), (o = parseInt(n[1], 10)));
      var a;
      if (typeof t != "number")
        return (a = e._soundById(o)), a ? a._rate : e._rate;
      if (e._state !== "loaded" || e._playLock)
        return (
          e._queue.push({
            event: "rate",
            action: function () {
              e.rate.apply(e, n);
            },
          }),
          e
        );
      typeof o > "u" && (e._rate = t), (o = e._getSoundIds(o));
      for (var c = 0; c < o.length; c++)
        if (((a = e._soundById(o[c])), a)) {
          e.playing(o[c]) &&
            ((a._rateSeek = e.seek(o[c])),
            (a._playStart = e._webAudio ? r.ctx.currentTime : a._playStart)),
            (a._rate = t),
            e._webAudio && a._node && a._node.bufferSource
              ? a._node.bufferSource.playbackRate.setValueAtTime(
                  t,
                  r.ctx.currentTime,
                )
              : a._node && (a._node.playbackRate = t);
          var v = e.seek(o[c]),
            A = (e._sprite[a._sprite][0] + e._sprite[a._sprite][1]) / 1e3 - v,
            w = (1e3 * A) / Math.abs(a._rate);
          (e._endTimers[o[c]] || !a._paused) &&
            (e._clearTimer(o[c]),
            (e._endTimers[o[c]] = setTimeout(e._ended.bind(e, a), w))),
            e._emit("rate", a._id);
        }
      return e;
    },
    seek: function () {
      var e = this || _,
        n = arguments,
        t,
        o;
      if (n.length === 0) e._sounds.length && (o = e._sounds[0]._id);
      else if (n.length === 1) {
        var u = e._getSoundIds(),
          d = u.indexOf(n[0]);
        d >= 0
          ? (o = parseInt(n[0], 10))
          : e._sounds.length &&
            ((o = e._sounds[0]._id), (t = parseFloat(n[0])));
      } else
        n.length === 2 && ((t = parseFloat(n[0])), (o = parseInt(n[1], 10)));
      if (typeof o > "u") return 0;
      if (typeof t == "number" && (e._state !== "loaded" || e._playLock))
        return (
          e._queue.push({
            event: "seek",
            action: function () {
              e.seek.apply(e, n);
            },
          }),
          e
        );
      var a = e._soundById(o);
      if (a) {
        if (!(typeof t == "number" && t >= 0)) {
          if (e._webAudio) {
            var c = e.playing(o) ? r.ctx.currentTime - a._playStart : 0,
              v = a._rateSeek ? a._rateSeek - a._seek : 0;
            return a._seek + (v + c * Math.abs(a._rate));
          }
          return a._node.currentTime;
        }
        var A = e.playing(o);
        A && e.pause(o, !0),
          (a._seek = t),
          (a._ended = !1),
          e._clearTimer(o),
          e._webAudio ||
            !a._node ||
            isNaN(a._node.duration) ||
            (a._node.currentTime = t);
        var w = function () {
          A && e.play(o, !0), e._emit("seek", o);
        };
        if (A && !e._webAudio) {
          var x = function () {
            e._playLock ? setTimeout(x, 0) : w();
          };
          setTimeout(x, 0);
        } else w();
      }
      return e;
    },
    playing: function (e) {
      var n = this || _;
      if (typeof e == "number") {
        var t = n._soundById(e);
        return !!t && !t._paused;
      }
      for (var o = 0; o < n._sounds.length; o++)
        if (!n._sounds[o]._paused) return !0;
      return !1;
    },
    duration: function (e) {
      var n = this || _,
        t = n._duration,
        o = n._soundById(e);
      return o && (t = n._sprite[o._sprite][1] / 1e3), t;
    },
    state: function () {
      return (this || _)._state;
    },
    unload: function () {
      for (var e = this || _, n = e._sounds, t = 0; t < n.length; t++)
        n[t]._paused || e.stop(n[t]._id),
          e._webAudio ||
            (e._clearSound(n[t]._node),
            n[t]._node.removeEventListener("error", n[t]._errorFn, !1),
            n[t]._node.removeEventListener(r._canPlayEvent, n[t]._loadFn, !1),
            n[t]._node.removeEventListener("ended", n[t]._endFn, !1),
            r._releaseHtml5Audio(n[t]._node)),
          delete n[t]._node,
          e._clearTimer(n[t]._id);
      var o = r._howls.indexOf(e);
      o >= 0 && r._howls.splice(o, 1);
      var u = !0;
      for (t = 0; t < r._howls.length; t++)
        if (
          r._howls[t]._src === e._src ||
          e._src.indexOf(r._howls[t]._src) >= 0
        ) {
          u = !1;
          break;
        }
      return (
        p && u && delete p[e._src],
        (r.noAudio = !1),
        (e._state = "unloaded"),
        (e._sounds = []),
        (e = null),
        null
      );
    },
    on: function (e, n, t, o) {
      var u = this || _,
        d = u["_on" + e];
      return (
        typeof n == "function" &&
          d.push(o ? { id: t, fn: n, once: o } : { id: t, fn: n }),
        u
      );
    },
    off: function (e, n, t) {
      var o = this || _,
        u = o["_on" + e],
        d = 0;
      if ((typeof n == "number" && ((t = n), (n = null)), n || t))
        for (d = 0; d < u.length; d++) {
          var a = t === u[d].id;
          if ((n === u[d].fn && a) || (!n && a)) {
            u.splice(d, 1);
            break;
          }
        }
      else if (e) o["_on" + e] = [];
      else {
        var c = Object.keys(o);
        for (d = 0; d < c.length; d++)
          c[d].indexOf("_on") === 0 && Array.isArray(o[c[d]]) && (o[c[d]] = []);
      }
      return o;
    },
    once: function (e, n, t) {
      var o = this || _;
      return o.on(e, n, t, 1), o;
    },
    _emit: function (e, n, t) {
      for (var o = this || _, u = o["_on" + e], d = u.length - 1; d >= 0; d--)
        (!u[d].id || u[d].id === n || e === "load") &&
          (setTimeout(
            function (a) {
              a.call(this || _, n, t);
            }.bind(o, u[d].fn),
            0,
          ),
          u[d].once && o.off(e, u[d].fn, u[d].id));
      return o._loadQueue(e), o;
    },
    _loadQueue: function (e) {
      var n = this || _;
      if (n._queue.length > 0) {
        var t = n._queue[0];
        t.event === e && (n._queue.shift(), n._loadQueue()), e || t.action();
      }
      return n;
    },
    _ended: function (e) {
      var n = this || _,
        t = e._sprite;
      if (
        !n._webAudio &&
        e._node &&
        !e._node.paused &&
        !e._node.ended &&
        e._node.currentTime < e._stop
      )
        return setTimeout(n._ended.bind(n, e), 100), n;
      var o = !!(e._loop || n._sprite[t][2]);
      if (
        (n._emit("end", e._id),
        !n._webAudio && o && n.stop(e._id, !0).play(e._id),
        n._webAudio && o)
      ) {
        n._emit("play", e._id),
          (e._seek = e._start || 0),
          (e._rateSeek = 0),
          (e._playStart = r.ctx.currentTime);
        var u = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
        n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), u);
      }
      return (
        n._webAudio &&
          !o &&
          ((e._paused = !0),
          (e._ended = !0),
          (e._seek = e._start || 0),
          (e._rateSeek = 0),
          n._clearTimer(e._id),
          n._cleanBuffer(e._node),
          r._autoSuspend()),
        n._webAudio || o || n.stop(e._id, !0),
        n
      );
    },
    _clearTimer: function (e) {
      var n = this || _;
      if (n._endTimers[e]) {
        if (typeof n._endTimers[e] != "function") clearTimeout(n._endTimers[e]);
        else {
          var t = n._soundById(e);
          t &&
            t._node &&
            t._node.removeEventListener("ended", n._endTimers[e], !1);
        }
        delete n._endTimers[e];
      }
      return n;
    },
    _soundById: function (e) {
      for (var n = this || _, t = 0; t < n._sounds.length; t++)
        if (e === n._sounds[t]._id) return n._sounds[t];
      return null;
    },
    _inactiveSound: function () {
      var e = this || _;
      e._drain();
      for (var n = 0; n < e._sounds.length; n++)
        if (e._sounds[n]._ended) return e._sounds[n].reset();
      return new i(e);
    },
    _drain: function () {
      var e = this || _,
        n = e._pool,
        t = 0,
        o = 0;
      if (!(e._sounds.length < n)) {
        for (o = 0; o < e._sounds.length; o++) e._sounds[o]._ended && t++;
        for (o = e._sounds.length - 1; o >= 0; o--) {
          if (t <= n) return;
          e._sounds[o]._ended &&
            (e._webAudio &&
              e._sounds[o]._node &&
              e._sounds[o]._node.disconnect(0),
            e._sounds.splice(o, 1),
            t--);
        }
      }
    },
    _getSoundIds: function (e) {
      var n = this || _;
      if (typeof e > "u") {
        for (var t = [], o = 0; o < n._sounds.length; o++)
          t.push(n._sounds[o]._id);
        return t;
      }
      return [e];
    },
    _refreshBuffer: function (e) {
      var n = this || _;
      return (
        (e._node.bufferSource = r.ctx.createBufferSource()),
        (e._node.bufferSource.buffer = p[n._src]),
        e._panner
          ? e._node.bufferSource.connect(e._panner)
          : e._node.bufferSource.connect(e._node),
        (e._node.bufferSource.loop = e._loop),
        e._loop &&
          ((e._node.bufferSource.loopStart = e._start || 0),
          (e._node.bufferSource.loopEnd = e._stop || 0)),
        e._node.bufferSource.playbackRate.setValueAtTime(
          e._rate,
          r.ctx.currentTime,
        ),
        n
      );
    },
    _cleanBuffer: function (e) {
      var n = this || _,
        t = r._navigator && r._navigator.vendor.indexOf("Apple") >= 0;
      if (!e.bufferSource) return n;
      if (
        r._scratchBuffer &&
        e.bufferSource &&
        ((e.bufferSource.onended = null), e.bufferSource.disconnect(0), t)
      )
        try {
          e.bufferSource.buffer = r._scratchBuffer;
        } catch {}
      return (e.bufferSource = null), n;
    },
    _clearSound: function (e) {
      var n = /MSIE |Trident\//.test(r._navigator && r._navigator.userAgent);
      n ||
        (e.src =
          "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
    },
  };
  var i = function (e) {
    ((this || _)._parent = e), this.init();
  };
  i.prototype = {
    init: function () {
      var e = this || _,
        n = e._parent;
      return (
        (e._muted = n._muted),
        (e._loop = n._loop),
        (e._volume = n._volume),
        (e._rate = n._rate),
        (e._seek = 0),
        (e._paused = !0),
        (e._ended = !0),
        (e._sprite = "__default"),
        (e._id = ++r._counter),
        n._sounds.push(e),
        e.create(),
        e
      );
    },
    create: function () {
      var e = this || _,
        n = e._parent,
        t = r._muted || e._muted || e._parent._muted ? 0 : e._volume;
      return (
        n._webAudio
          ? ((e._node =
              typeof r.ctx.createGain > "u"
                ? r.ctx.createGainNode()
                : r.ctx.createGain()),
            e._node.gain.setValueAtTime(t, r.ctx.currentTime),
            (e._node.paused = !0),
            e._node.connect(r.masterGain))
          : r.noAudio ||
            ((e._node = r._obtainHtml5Audio()),
            (e._errorFn = e._errorListener.bind(e)),
            e._node.addEventListener("error", e._errorFn, !1),
            (e._loadFn = e._loadListener.bind(e)),
            e._node.addEventListener(r._canPlayEvent, e._loadFn, !1),
            (e._endFn = e._endListener.bind(e)),
            e._node.addEventListener("ended", e._endFn, !1),
            (e._node.src = n._src),
            (e._node.preload = n._preload === !0 ? "auto" : n._preload),
            (e._node.volume = t * r.volume()),
            e._node.load()),
        e
      );
    },
    reset: function () {
      var e = this || _,
        n = e._parent;
      return (
        (e._muted = n._muted),
        (e._loop = n._loop),
        (e._volume = n._volume),
        (e._rate = n._rate),
        (e._seek = 0),
        (e._rateSeek = 0),
        (e._paused = !0),
        (e._ended = !0),
        (e._sprite = "__default"),
        (e._id = ++r._counter),
        e
      );
    },
    _errorListener: function () {
      var e = this || _;
      e._parent._emit(
        "loaderror",
        e._id,
        e._node.error ? e._node.error.code : 0,
      ),
        e._node.removeEventListener("error", e._errorFn, !1);
    },
    _loadListener: function () {
      var e = this || _,
        n = e._parent;
      (n._duration = Math.ceil(10 * e._node.duration) / 10),
        Object.keys(n._sprite).length === 0 &&
          (n._sprite = { __default: [0, 1e3 * n._duration] }),
        n._state !== "loaded" &&
          ((n._state = "loaded"), n._emit("load"), n._loadQueue()),
        e._node.removeEventListener(r._canPlayEvent, e._loadFn, !1);
    },
    _endListener: function () {
      var e = this || _,
        n = e._parent;
      n._duration === 1 / 0 &&
        ((n._duration = Math.ceil(10 * e._node.duration) / 10),
        n._sprite.__default[1] === 1 / 0 &&
          (n._sprite.__default[1] = 1e3 * n._duration),
        n._ended(e)),
        e._node.removeEventListener("ended", e._endFn, !1);
    },
  };
  var p = {},
    f = function (e) {
      var n = e._src;
      if (p[n]) (e._duration = p[n].duration), l(e);
      else if (/^data:[^;]+;base64,/.test(n)) {
        for (
          var t = atob(n.split(",")[1]), o = new Uint8Array(t.length), u = 0;
          u < t.length;
          ++u
        )
          o[u] = t.charCodeAt(u);
        m(o.buffer, e);
      } else {
        var d = new XMLHttpRequest();
        d.open(e._xhr.method, n, !0),
          (d.withCredentials = e._xhr.withCredentials),
          (d.responseType = "arraybuffer"),
          e._xhr.headers &&
            Object.keys(e._xhr.headers).forEach(function (a) {
              d.setRequestHeader(a, e._xhr.headers[a]);
            }),
          (d.onload = function () {
            var a = (d.status + "")[0];
            a === "0" || a === "2" || a === "3"
              ? m(d.response, e)
              : e._emit(
                  "loaderror",
                  null,
                  "Failed loading audio file with status: " + d.status + ".",
                );
          }),
          (d.onerror = function () {
            e._webAudio &&
              ((e._html5 = !0),
              (e._webAudio = !1),
              (e._sounds = []),
              delete p[n],
              e.load());
          }),
          h(d);
      }
    },
    h = function (e) {
      try {
        e.send();
      } catch {
        e.onerror();
      }
    },
    m = function (e, n) {
      var t = function () {
          n._emit("loaderror", null, "Decoding audio data failed.");
        },
        o = function (u) {
          u && n._sounds.length > 0 ? ((p[n._src] = u), l(n, u)) : t();
        };
      typeof Promise < "u" && r.ctx.decodeAudioData.length === 1
        ? r.ctx.decodeAudioData(e).then(o).catch(t)
        : r.ctx.decodeAudioData(e, o, t);
    },
    l = function (e, n) {
      n && !e._duration && (e._duration = n.duration),
        Object.keys(e._sprite).length === 0 &&
          (e._sprite = { __default: [0, 1e3 * e._duration] }),
        e._state !== "loaded" &&
          ((e._state = "loaded"), e._emit("load"), e._loadQueue());
    },
    g = function () {
      if (r.usingWebAudio) {
        try {
          typeof AudioContext < "u"
            ? (r.ctx = new AudioContext())
            : typeof webkitAudioContext < "u"
              ? (r.ctx = new webkitAudioContext())
              : (r.usingWebAudio = !1);
        } catch {
          r.usingWebAudio = !1;
        }
        r.ctx || (r.usingWebAudio = !1);
        var e = /iP(hone|od|ad)/.test(r._navigator && r._navigator.platform),
          n =
            r._navigator &&
            r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
          t = n ? parseInt(n[1], 10) : null;
        if (e && t && t < 9) {
          var o = /safari/.test(
            r._navigator && r._navigator.userAgent.toLowerCase(),
          );
          r._navigator && !o && (r.usingWebAudio = !1);
        }
        r.usingWebAudio &&
          ((r.masterGain =
            typeof r.ctx.createGain > "u"
              ? r.ctx.createGainNode()
              : r.ctx.createGain()),
          r.masterGain.gain.setValueAtTime(
            r._muted ? 0 : r._volume,
            r.ctx.currentTime,
          ),
          r.masterGain.connect(r.ctx.destination)),
          r._setup();
      }
    };
  (k.Howler = r),
    (k.Howl = s),
    typeof _ < "u"
      ? ((_.HowlerGlobal = T), (_.Howler = r), (_.Howl = s), (_.Sound = i))
      : typeof b < "u" &&
        ((b.HowlerGlobal = T), (b.Howler = r), (b.Howl = s), (b.Sound = i));
})();
(function () {
  (HowlerGlobal.prototype._pos = [0, 0, 0]),
    (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
    (HowlerGlobal.prototype.stereo = function (r) {
      var s = this || _;
      if (!s.ctx || !s.ctx.listener) return s;
      for (var i = s._howls.length - 1; i >= 0; i--) s._howls[i].stereo(r);
      return s;
    }),
    (HowlerGlobal.prototype.pos = function (r, s, i) {
      var p = this || _;
      return !p.ctx || !p.ctx.listener
        ? p
        : ((s = typeof s != "number" ? p._pos[1] : s),
          (i = typeof i != "number" ? p._pos[2] : i),
          typeof r != "number"
            ? p._pos
            : ((p._pos = [r, s, i]),
              typeof p.ctx.listener.positionX < "u"
                ? (p.ctx.listener.positionX.setTargetAtTime(
                    p._pos[0],
                    Howler.ctx.currentTime,
                    0.1,
                  ),
                  p.ctx.listener.positionY.setTargetAtTime(
                    p._pos[1],
                    Howler.ctx.currentTime,
                    0.1,
                  ),
                  p.ctx.listener.positionZ.setTargetAtTime(
                    p._pos[2],
                    Howler.ctx.currentTime,
                    0.1,
                  ))
                : p.ctx.listener.setPosition(p._pos[0], p._pos[1], p._pos[2]),
              p));
    }),
    (HowlerGlobal.prototype.orientation = function (r, s, i, p, f, h) {
      var m = this || _;
      if (!m.ctx || !m.ctx.listener) return m;
      var l = m._orientation;
      return (
        (s = typeof s != "number" ? l[1] : s),
        (i = typeof i != "number" ? l[2] : i),
        (p = typeof p != "number" ? l[3] : p),
        (f = typeof f != "number" ? l[4] : f),
        (h = typeof h != "number" ? l[5] : h),
        typeof r != "number"
          ? l
          : ((m._orientation = [r, s, i, p, f, h]),
            typeof m.ctx.listener.forwardX < "u"
              ? (m.ctx.listener.forwardX.setTargetAtTime(
                  r,
                  Howler.ctx.currentTime,
                  0.1,
                ),
                m.ctx.listener.forwardY.setTargetAtTime(
                  s,
                  Howler.ctx.currentTime,
                  0.1,
                ),
                m.ctx.listener.forwardZ.setTargetAtTime(
                  i,
                  Howler.ctx.currentTime,
                  0.1,
                ),
                m.ctx.listener.upX.setTargetAtTime(
                  p,
                  Howler.ctx.currentTime,
                  0.1,
                ),
                m.ctx.listener.upY.setTargetAtTime(
                  f,
                  Howler.ctx.currentTime,
                  0.1,
                ),
                m.ctx.listener.upZ.setTargetAtTime(
                  h,
                  Howler.ctx.currentTime,
                  0.1,
                ))
              : m.ctx.listener.setOrientation(r, s, i, p, f, h),
            m)
      );
    }),
    (Howl.prototype.init = (function (r) {
      return function (s) {
        var i = this || _;
        return (
          (i._orientation = s.orientation || [1, 0, 0]),
          (i._stereo = s.stereo || null),
          (i._pos = s.pos || null),
          (i._pannerAttr = {
            coneInnerAngle:
              typeof s.coneInnerAngle < "u" ? s.coneInnerAngle : 360,
            coneOuterAngle:
              typeof s.coneOuterAngle < "u" ? s.coneOuterAngle : 360,
            coneOuterGain: typeof s.coneOuterGain < "u" ? s.coneOuterGain : 0,
            distanceModel:
              typeof s.distanceModel < "u" ? s.distanceModel : "inverse",
            maxDistance: typeof s.maxDistance < "u" ? s.maxDistance : 1e4,
            panningModel: typeof s.panningModel < "u" ? s.panningModel : "HRTF",
            refDistance: typeof s.refDistance < "u" ? s.refDistance : 1,
            rolloffFactor: typeof s.rolloffFactor < "u" ? s.rolloffFactor : 1,
          }),
          (i._onstereo = s.onstereo ? [{ fn: s.onstereo }] : []),
          (i._onpos = s.onpos ? [{ fn: s.onpos }] : []),
          (i._onorientation = s.onorientation ? [{ fn: s.onorientation }] : []),
          r.call(this || _, s)
        );
      };
    })(Howl.prototype.init)),
    (Howl.prototype.stereo = function (r, s) {
      var i = this || _;
      if (!i._webAudio) return i;
      if (i._state !== "loaded")
        return (
          i._queue.push({
            event: "stereo",
            action: function () {
              i.stereo(r, s);
            },
          }),
          i
        );
      var p = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
      if (typeof s > "u") {
        if (typeof r != "number") return i._stereo;
        (i._stereo = r), (i._pos = [r, 0, 0]);
      }
      for (var f = i._getSoundIds(s), h = 0; h < f.length; h++) {
        var m = i._soundById(f[h]);
        if (m) {
          if (typeof r != "number") return m._stereo;
          (m._stereo = r),
            (m._pos = [r, 0, 0]),
            m._node &&
              ((m._pannerAttr.panningModel = "equalpower"),
              (m._panner && m._panner.pan) || T(m, p),
              p === "spatial"
                ? typeof m._panner.positionX < "u"
                  ? (m._panner.positionX.setValueAtTime(
                      r,
                      Howler.ctx.currentTime,
                    ),
                    m._panner.positionY.setValueAtTime(
                      0,
                      Howler.ctx.currentTime,
                    ),
                    m._panner.positionZ.setValueAtTime(
                      0,
                      Howler.ctx.currentTime,
                    ))
                  : m._panner.setPosition(r, 0, 0)
                : m._panner.pan.setValueAtTime(r, Howler.ctx.currentTime)),
            i._emit("stereo", m._id);
        }
      }
      return i;
    }),
    (Howl.prototype.pos = function (r, s, i, p) {
      var f = this || _;
      if (!f._webAudio) return f;
      if (f._state !== "loaded")
        return (
          f._queue.push({
            event: "pos",
            action: function () {
              f.pos(r, s, i, p);
            },
          }),
          f
        );
      if (
        ((s = typeof s != "number" ? 0 : s),
        (i = typeof i != "number" ? -0.5 : i),
        typeof p > "u")
      ) {
        if (typeof r != "number") return f._pos;
        f._pos = [r, s, i];
      }
      for (var h = f._getSoundIds(p), m = 0; m < h.length; m++) {
        var l = f._soundById(h[m]);
        if (l) {
          if (typeof r != "number") return l._pos;
          (l._pos = [r, s, i]),
            l._node &&
              ((l._panner && !l._panner.pan) || T(l, "spatial"),
              typeof l._panner.positionX < "u"
                ? (l._panner.positionX.setValueAtTime(
                    r,
                    Howler.ctx.currentTime,
                  ),
                  l._panner.positionY.setValueAtTime(s, Howler.ctx.currentTime),
                  l._panner.positionZ.setValueAtTime(i, Howler.ctx.currentTime))
                : l._panner.setPosition(r, s, i)),
            f._emit("pos", l._id);
        }
      }
      return f;
    }),
    (Howl.prototype.orientation = function (r, s, i, p) {
      var f = this || _;
      if (!f._webAudio) return f;
      if (f._state !== "loaded")
        return (
          f._queue.push({
            event: "orientation",
            action: function () {
              f.orientation(r, s, i, p);
            },
          }),
          f
        );
      if (
        ((s = typeof s != "number" ? f._orientation[1] : s),
        (i = typeof i != "number" ? f._orientation[2] : i),
        typeof p > "u")
      ) {
        if (typeof r != "number") return f._orientation;
        f._orientation = [r, s, i];
      }
      for (var h = f._getSoundIds(p), m = 0; m < h.length; m++) {
        var l = f._soundById(h[m]);
        if (l) {
          if (typeof r != "number") return l._orientation;
          (l._orientation = [r, s, i]),
            l._node &&
              (l._panner ||
                (l._pos || (l._pos = f._pos || [0, 0, -0.5]), T(l, "spatial")),
              typeof l._panner.orientationX < "u"
                ? (l._panner.orientationX.setValueAtTime(
                    r,
                    Howler.ctx.currentTime,
                  ),
                  l._panner.orientationY.setValueAtTime(
                    s,
                    Howler.ctx.currentTime,
                  ),
                  l._panner.orientationZ.setValueAtTime(
                    i,
                    Howler.ctx.currentTime,
                  ))
                : l._panner.setOrientation(r, s, i)),
            f._emit("orientation", l._id);
        }
      }
      return f;
    }),
    (Howl.prototype.pannerAttr = function () {
      var r = this || _,
        s = arguments,
        i,
        p,
        f;
      if (!r._webAudio) return r;
      if (s.length === 0) return r._pannerAttr;
      if (s.length === 1) {
        if (typeof s[0] != "object")
          return (
            (f = r._soundById(parseInt(s[0], 10))),
            f ? f._pannerAttr : r._pannerAttr
          );
        (i = s[0]),
          typeof p > "u" &&
            (i.pannerAttr ||
              (i.pannerAttr = {
                coneInnerAngle: i.coneInnerAngle,
                coneOuterAngle: i.coneOuterAngle,
                coneOuterGain: i.coneOuterGain,
                distanceModel: i.distanceModel,
                maxDistance: i.maxDistance,
                refDistance: i.refDistance,
                rolloffFactor: i.rolloffFactor,
                panningModel: i.panningModel,
              }),
            (r._pannerAttr = {
              coneInnerAngle:
                typeof i.pannerAttr.coneInnerAngle < "u"
                  ? i.pannerAttr.coneInnerAngle
                  : r._coneInnerAngle,
              coneOuterAngle:
                typeof i.pannerAttr.coneOuterAngle < "u"
                  ? i.pannerAttr.coneOuterAngle
                  : r._coneOuterAngle,
              coneOuterGain:
                typeof i.pannerAttr.coneOuterGain < "u"
                  ? i.pannerAttr.coneOuterGain
                  : r._coneOuterGain,
              distanceModel:
                typeof i.pannerAttr.distanceModel < "u"
                  ? i.pannerAttr.distanceModel
                  : r._distanceModel,
              maxDistance:
                typeof i.pannerAttr.maxDistance < "u"
                  ? i.pannerAttr.maxDistance
                  : r._maxDistance,
              refDistance:
                typeof i.pannerAttr.refDistance < "u"
                  ? i.pannerAttr.refDistance
                  : r._refDistance,
              rolloffFactor:
                typeof i.pannerAttr.rolloffFactor < "u"
                  ? i.pannerAttr.rolloffFactor
                  : r._rolloffFactor,
              panningModel:
                typeof i.pannerAttr.panningModel < "u"
                  ? i.pannerAttr.panningModel
                  : r._panningModel,
            }));
      } else s.length === 2 && ((i = s[0]), (p = parseInt(s[1], 10)));
      for (var h = r._getSoundIds(p), m = 0; m < h.length; m++)
        if (((f = r._soundById(h[m])), f)) {
          var l = f._pannerAttr;
          l = {
            coneInnerAngle:
              typeof i.coneInnerAngle < "u"
                ? i.coneInnerAngle
                : l.coneInnerAngle,
            coneOuterAngle:
              typeof i.coneOuterAngle < "u"
                ? i.coneOuterAngle
                : l.coneOuterAngle,
            coneOuterGain:
              typeof i.coneOuterGain < "u" ? i.coneOuterGain : l.coneOuterGain,
            distanceModel:
              typeof i.distanceModel < "u" ? i.distanceModel : l.distanceModel,
            maxDistance:
              typeof i.maxDistance < "u" ? i.maxDistance : l.maxDistance,
            refDistance:
              typeof i.refDistance < "u" ? i.refDistance : l.refDistance,
            rolloffFactor:
              typeof i.rolloffFactor < "u" ? i.rolloffFactor : l.rolloffFactor,
            panningModel:
              typeof i.panningModel < "u" ? i.panningModel : l.panningModel,
          };
          var g = f._panner;
          g ||
            (f._pos || (f._pos = r._pos || [0, 0, -0.5]),
            T(f, "spatial"),
            (g = f._panner)),
            (g.coneInnerAngle = l.coneInnerAngle),
            (g.coneOuterAngle = l.coneOuterAngle),
            (g.coneOuterGain = l.coneOuterGain),
            (g.distanceModel = l.distanceModel),
            (g.maxDistance = l.maxDistance),
            (g.refDistance = l.refDistance),
            (g.rolloffFactor = l.rolloffFactor),
            (g.panningModel = l.panningModel);
        }
      return r;
    }),
    (Sound.prototype.init = (function (r) {
      return function () {
        var s = this || _,
          i = s._parent;
        (s._orientation = i._orientation),
          (s._stereo = i._stereo),
          (s._pos = i._pos),
          (s._pannerAttr = i._pannerAttr),
          r.call(this || _),
          s._stereo
            ? i.stereo(s._stereo)
            : s._pos && i.pos(s._pos[0], s._pos[1], s._pos[2], s._id);
      };
    })(Sound.prototype.init)),
    (Sound.prototype.reset = (function (r) {
      return function () {
        var s = this || _,
          i = s._parent;
        return (
          (s._orientation = i._orientation),
          (s._stereo = i._stereo),
          (s._pos = i._pos),
          (s._pannerAttr = i._pannerAttr),
          s._stereo
            ? i.stereo(s._stereo)
            : s._pos
              ? i.pos(s._pos[0], s._pos[1], s._pos[2], s._id)
              : s._panner &&
                (s._panner.disconnect(0),
                (s._panner = void 0),
                i._refreshBuffer(s)),
          r.call(this || _)
        );
      };
    })(Sound.prototype.reset));
  var T = function (r, s) {
    (s = s || "spatial"),
      s === "spatial"
        ? ((r._panner = Howler.ctx.createPanner()),
          (r._panner.coneInnerAngle = r._pannerAttr.coneInnerAngle),
          (r._panner.coneOuterAngle = r._pannerAttr.coneOuterAngle),
          (r._panner.coneOuterGain = r._pannerAttr.coneOuterGain),
          (r._panner.distanceModel = r._pannerAttr.distanceModel),
          (r._panner.maxDistance = r._pannerAttr.maxDistance),
          (r._panner.refDistance = r._pannerAttr.refDistance),
          (r._panner.rolloffFactor = r._pannerAttr.rolloffFactor),
          (r._panner.panningModel = r._pannerAttr.panningModel),
          typeof r._panner.positionX < "u"
            ? (r._panner.positionX.setValueAtTime(
                r._pos[0],
                Howler.ctx.currentTime,
              ),
              r._panner.positionY.setValueAtTime(
                r._pos[1],
                Howler.ctx.currentTime,
              ),
              r._panner.positionZ.setValueAtTime(
                r._pos[2],
                Howler.ctx.currentTime,
              ))
            : r._panner.setPosition(r._pos[0], r._pos[1], r._pos[2]),
          typeof r._panner.orientationX < "u"
            ? (r._panner.orientationX.setValueAtTime(
                r._orientation[0],
                Howler.ctx.currentTime,
              ),
              r._panner.orientationY.setValueAtTime(
                r._orientation[1],
                Howler.ctx.currentTime,
              ),
              r._panner.orientationZ.setValueAtTime(
                r._orientation[2],
                Howler.ctx.currentTime,
              ))
            : r._panner.setOrientation(
                r._orientation[0],
                r._orientation[1],
                r._orientation[2],
              ))
        : ((r._panner = Howler.ctx.createStereoPanner()),
          r._panner.pan.setValueAtTime(r._stereo, Howler.ctx.currentTime)),
      r._panner.connect(r._node),
      r._paused || r._parent.pause(r._id, !0).play(r._id, !0);
  };
})();
var D = k.Howler,
  E = k.Howl;
export { E as Howl, D as Howler, k as default };
//# sourceMappingURL=howler-NHZYV4YJ.mjs.map
