(() => {
  var t = {
      841: (t, n, o) => {
        var r = o(374),
          e = o(963),
          i = o(121),
          u = o(799),
          a = o(930),
          c = o(552),
          f = o(805);
        (f.alea = r),
          (f.xor128 = e),
          (f.xorwow = i),
          (f.xorshift7 = u),
          (f.xor4096 = a),
          (f.tychei = c),
          (t.exports = f);
      },
      374: function (t, n, o) {
        var r;
        function e(t) {
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            e(t)
          );
        }
        !(function (t, i, u) {
          function a(t) {
            var n,
              o = this,
              r =
                ((n = 4022871197),
                function (t) {
                  t = String(t);
                  for (var o = 0; o < t.length; o++) {
                    var r = 0.02519603282416938 * (n += t.charCodeAt(o));
                    (r -= n = r >>> 0),
                      (n = (r *= n) >>> 0),
                      (n += 4294967296 * (r -= n));
                  }
                  return 2.3283064365386963e-10 * (n >>> 0);
                });
            (o.next = function () {
              var t = 2091639 * o.s0 + 2.3283064365386963e-10 * o.c;
              return (o.s0 = o.s1), (o.s1 = o.s2), (o.s2 = t - (o.c = 0 | t));
            }),
              (o.c = 1),
              (o.s0 = r(" ")),
              (o.s1 = r(" ")),
              (o.s2 = r(" ")),
              (o.s0 -= r(t)),
              o.s0 < 0 && (o.s0 += 1),
              (o.s1 -= r(t)),
              o.s1 < 0 && (o.s1 += 1),
              (o.s2 -= r(t)),
              o.s2 < 0 && (o.s2 += 1),
              (r = null);
          }
          function c(t, n) {
            return (n.c = t.c), (n.s0 = t.s0), (n.s1 = t.s1), (n.s2 = t.s2), n;
          }
          function f(t, n) {
            var o = new a(t),
              r = n && n.state,
              i = o.next;
            return (
              (i.int32 = function () {
                return (4294967296 * o.next()) | 0;
              }),
              (i.double = function () {
                return i() + 11102230246251565e-32 * ((2097152 * i()) | 0);
              }),
              (i.quick = i),
              r &&
                ("object" == e(r) && c(r, o),
                (i.state = function () {
                  return c(o, {});
                })),
              i
            );
          }
          i && i.exports
            ? (i.exports = f)
            : o.amdD && o.amdO
            ? void 0 ===
                (r = function () {
                  return f;
                }.call(n, o, n, i)) || (i.exports = r)
            : (this.alea = f);
        })(0, "object" == e((t = o.nmd(t))) && t, o.amdD);
      },
      552: function (t, n, o) {
        var r;
        function e(t) {
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            e(t)
          );
        }
        !(function (t, i, u) {
          function a(t) {
            var n = this,
              o = "";
            (n.next = function () {
              var t = n.b,
                o = n.c,
                r = n.d,
                e = n.a;
              return (
                (t = (t << 25) ^ (t >>> 7) ^ o),
                (o = (o - r) | 0),
                (r = (r << 24) ^ (r >>> 8) ^ e),
                (e = (e - t) | 0),
                (n.b = t = (t << 20) ^ (t >>> 12) ^ o),
                (n.c = o = (o - r) | 0),
                (n.d = (r << 16) ^ (o >>> 16) ^ e),
                (n.a = (e - t) | 0)
              );
            }),
              (n.a = 0),
              (n.b = 0),
              (n.c = -1640531527),
              (n.d = 1367130551),
              t === Math.floor(t)
                ? ((n.a = (t / 4294967296) | 0), (n.b = 0 | t))
                : (o += t);
            for (var r = 0; r < o.length + 20; r++)
              (n.b ^= 0 | o.charCodeAt(r)), n.next();
          }
          function c(t, n) {
            return (n.a = t.a), (n.b = t.b), (n.c = t.c), (n.d = t.d), n;
          }
          function f(t, n) {
            var o = new a(t),
              r = n && n.state,
              i = function () {
                return (o.next() >>> 0) / 4294967296;
              };
            return (
              (i.double = function () {
                do {
                  var t =
                    ((o.next() >>> 11) + (o.next() >>> 0) / 4294967296) /
                    (1 << 21);
                } while (0 === t);
                return t;
              }),
              (i.int32 = o.next),
              (i.quick = i),
              r &&
                ("object" == e(r) && c(r, o),
                (i.state = function () {
                  return c(o, {});
                })),
              i
            );
          }
          i && i.exports
            ? (i.exports = f)
            : o.amdD && o.amdO
            ? void 0 ===
                (r = function () {
                  return f;
                }.call(n, o, n, i)) || (i.exports = r)
            : (this.tychei = f);
        })(0, "object" == e((t = o.nmd(t))) && t, o.amdD);
      },
      963: function (t, n, o) {
        var r;
        function e(t) {
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            e(t)
          );
        }
        !(function (t, i, u) {
          function a(t) {
            var n = this,
              o = "";
            (n.x = 0),
              (n.y = 0),
              (n.z = 0),
              (n.w = 0),
              (n.next = function () {
                var t = n.x ^ (n.x << 11);
                return (
                  (n.x = n.y),
                  (n.y = n.z),
                  (n.z = n.w),
                  (n.w ^= (n.w >>> 19) ^ t ^ (t >>> 8))
                );
              }),
              t === (0 | t) ? (n.x = t) : (o += t);
            for (var r = 0; r < o.length + 64; r++)
              (n.x ^= 0 | o.charCodeAt(r)), n.next();
          }
          function c(t, n) {
            return (n.x = t.x), (n.y = t.y), (n.z = t.z), (n.w = t.w), n;
          }
          function f(t, n) {
            var o = new a(t),
              r = n && n.state,
              i = function () {
                return (o.next() >>> 0) / 4294967296;
              };
            return (
              (i.double = function () {
                do {
                  var t =
                    ((o.next() >>> 11) + (o.next() >>> 0) / 4294967296) /
                    (1 << 21);
                } while (0 === t);
                return t;
              }),
              (i.int32 = o.next),
              (i.quick = i),
              r &&
                ("object" == e(r) && c(r, o),
                (i.state = function () {
                  return c(o, {});
                })),
              i
            );
          }
          i && i.exports
            ? (i.exports = f)
            : o.amdD && o.amdO
            ? void 0 ===
                (r = function () {
                  return f;
                }.call(n, o, n, i)) || (i.exports = r)
            : (this.xor128 = f);
        })(0, "object" == e((t = o.nmd(t))) && t, o.amdD);
      },
      930: function (t, n, o) {
        var r;
        function e(t) {
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            e(t)
          );
        }
        !(function (t, e, i) {
          function u(t) {
            var n = this;
            (n.next = function () {
              var t,
                o,
                r = n.w,
                e = n.X,
                i = n.i;
              return (
                (n.w = r = (r + 1640531527) | 0),
                (o = e[(i + 34) & 127]),
                (t = e[(i = (i + 1) & 127)]),
                (o ^= o << 13),
                (t ^= t << 17),
                (o ^= o >>> 15),
                (t ^= t >>> 12),
                (o = e[i] = o ^ t),
                (n.i = i),
                (o + (r ^ (r >>> 16))) | 0
              );
            }),
              (function (t, n) {
                var o,
                  r,
                  e,
                  i,
                  u,
                  a = [],
                  c = 128;
                for (
                  n === (0 | n)
                    ? ((r = n), (n = null))
                    : ((n += "\0"), (r = 0), (c = Math.max(c, n.length))),
                    e = 0,
                    i = -32;
                  i < c;
                  ++i
                )
                  n && (r ^= n.charCodeAt((i + 32) % n.length)),
                    0 === i && (u = r),
                    (r ^= r << 10),
                    (r ^= r >>> 15),
                    (r ^= r << 4),
                    (r ^= r >>> 13),
                    i >= 0 &&
                      ((u = (u + 1640531527) | 0),
                      (e = 0 == (o = a[127 & i] ^= r + u) ? e + 1 : 0));
                for (
                  e >= 128 && (a[127 & ((n && n.length) || 0)] = -1),
                    e = 127,
                    i = 512;
                  i > 0;
                  --i
                )
                  (r = a[(e + 34) & 127]),
                    (o = a[(e = (e + 1) & 127)]),
                    (r ^= r << 13),
                    (o ^= o << 17),
                    (r ^= r >>> 15),
                    (o ^= o >>> 12),
                    (a[e] = r ^ o);
                (t.w = u), (t.X = a), (t.i = e);
              })(n, t);
          }
          function a(t, n) {
            return (n.i = t.i), (n.w = t.w), (n.X = t.X.slice()), n;
          }
          function c(t, n) {
            null == t && (t = +new Date());
            var o = new u(t),
              r = n && n.state,
              e = function () {
                return (o.next() >>> 0) / 4294967296;
              };
            return (
              (e.double = function () {
                do {
                  var t =
                    ((o.next() >>> 11) + (o.next() >>> 0) / 4294967296) /
                    (1 << 21);
                } while (0 === t);
                return t;
              }),
              (e.int32 = o.next),
              (e.quick = e),
              r &&
                (r.X && a(r, o),
                (e.state = function () {
                  return a(o, {});
                })),
              e
            );
          }
          e && e.exports
            ? (e.exports = c)
            : o.amdD && o.amdO
            ? void 0 ===
                (r = function () {
                  return c;
                }.call(n, o, n, e)) || (e.exports = r)
            : (this.xor4096 = c);
        })(0, "object" == e((t = o.nmd(t))) && t, o.amdD);
      },
      799: function (t, n, o) {
        var r;
        function e(t) {
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            e(t)
          );
        }
        !(function (t, e, i) {
          function u(t) {
            var n = this;
            (n.next = function () {
              var t,
                o,
                r = n.x,
                e = n.i;
              return (
                (t = r[e]),
                (o = (t ^= t >>> 7) ^ (t << 24)),
                (o ^= (t = r[(e + 1) & 7]) ^ (t >>> 10)),
                (o ^= (t = r[(e + 3) & 7]) ^ (t >>> 3)),
                (o ^= (t = r[(e + 4) & 7]) ^ (t << 7)),
                (t = r[(e + 7) & 7]),
                (o ^= (t ^= t << 13) ^ (t << 9)),
                (r[e] = o),
                (n.i = (e + 1) & 7),
                o
              );
            }),
              (function (t, n) {
                var o,
                  r = [];
                if (n === (0 | n)) r[0] = n;
                else
                  for (n = "" + n, o = 0; o < n.length; ++o)
                    r[7 & o] =
                      (r[7 & o] << 15) ^
                      ((n.charCodeAt(o) + r[(o + 1) & 7]) << 13);
                for (; r.length < 8; ) r.push(0);
                for (o = 0; o < 8 && 0 === r[o]; ++o);
                for (
                  8 == o ? (r[7] = -1) : r[o], t.x = r, t.i = 0, o = 256;
                  o > 0;
                  --o
                )
                  t.next();
              })(n, t);
          }
          function a(t, n) {
            return (n.x = t.x.slice()), (n.i = t.i), n;
          }
          function c(t, n) {
            null == t && (t = +new Date());
            var o = new u(t),
              r = n && n.state,
              e = function () {
                return (o.next() >>> 0) / 4294967296;
              };
            return (
              (e.double = function () {
                do {
                  var t =
                    ((o.next() >>> 11) + (o.next() >>> 0) / 4294967296) /
                    (1 << 21);
                } while (0 === t);
                return t;
              }),
              (e.int32 = o.next),
              (e.quick = e),
              r &&
                (r.x && a(r, o),
                (e.state = function () {
                  return a(o, {});
                })),
              e
            );
          }
          e && e.exports
            ? (e.exports = c)
            : o.amdD && o.amdO
            ? void 0 ===
                (r = function () {
                  return c;
                }.call(n, o, n, e)) || (e.exports = r)
            : (this.xorshift7 = c);
        })(0, "object" == e((t = o.nmd(t))) && t, o.amdD);
      },
      121: function (t, n, o) {
        var r;
        function e(t) {
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            e(t)
          );
        }
        !(function (t, i, u) {
          function a(t) {
            var n = this,
              o = "";
            (n.next = function () {
              var t = n.x ^ (n.x >>> 2);
              return (
                (n.x = n.y),
                (n.y = n.z),
                (n.z = n.w),
                (n.w = n.v),
                ((n.d = (n.d + 362437) | 0) +
                  (n.v = n.v ^ (n.v << 4) ^ t ^ (t << 1))) |
                  0
              );
            }),
              (n.x = 0),
              (n.y = 0),
              (n.z = 0),
              (n.w = 0),
              (n.v = 0),
              t === (0 | t) ? (n.x = t) : (o += t);
            for (var r = 0; r < o.length + 64; r++)
              (n.x ^= 0 | o.charCodeAt(r)),
                r == o.length && (n.d = (n.x << 10) ^ (n.x >>> 4)),
                n.next();
          }
          function c(t, n) {
            return (
              (n.x = t.x),
              (n.y = t.y),
              (n.z = t.z),
              (n.w = t.w),
              (n.v = t.v),
              (n.d = t.d),
              n
            );
          }
          function f(t, n) {
            var o = new a(t),
              r = n && n.state,
              i = function () {
                return (o.next() >>> 0) / 4294967296;
              };
            return (
              (i.double = function () {
                do {
                  var t =
                    ((o.next() >>> 11) + (o.next() >>> 0) / 4294967296) /
                    (1 << 21);
                } while (0 === t);
                return t;
              }),
              (i.int32 = o.next),
              (i.quick = i),
              r &&
                ("object" == e(r) && c(r, o),
                (i.state = function () {
                  return c(o, {});
                })),
              i
            );
          }
          i && i.exports
            ? (i.exports = f)
            : o.amdD && o.amdO
            ? void 0 ===
                (r = function () {
                  return f;
                }.call(n, o, n, i)) || (i.exports = r)
            : (this.xorwow = f);
        })(0, "object" == e((t = o.nmd(t))) && t, o.amdD);
      },
      805: function (t, n, o) {
        var r;
        function e(t) {
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            e(t)
          );
        }
        (t = o.nmd(t)),
          (function (i, u, a) {
            var c,
              f = 256,
              s = a.pow(f, 6),
              l = a.pow(2, 52),
              y = 2 * l,
              d = 255;
            function p(t, n, o) {
              var r = [],
                e = v(
                  x(
                    (n = 1 == n ? { entropy: !0 } : n || {}).entropy
                      ? [t, h(u)]
                      : null == t
                      ? (function () {
                          try {
                            var t;
                            return (
                              c && (t = c.randomBytes)
                                ? (t = t(f))
                                : ((t = new Uint8Array(f)),
                                  (i.crypto || i.msCrypto).getRandomValues(t)),
                              h(t)
                            );
                          } catch (t) {
                            var n = i.navigator,
                              o = n && n.plugins;
                            return [+new Date(), i, o, i.screen, h(u)];
                          }
                        })()
                      : t,
                    3
                  ),
                  r
                ),
                d = new m(r),
                p = function () {
                  for (var t = d.g(6), n = s, o = 0; t < l; )
                    (t = (t + o) * f), (n *= f), (o = d.g(1));
                  for (; t >= y; ) (t /= 2), (n /= 2), (o >>>= 1);
                  return (t + o) / n;
                };
              return (
                (p.int32 = function () {
                  return 0 | d.g(4);
                }),
                (p.quick = function () {
                  return d.g(4) / 4294967296;
                }),
                (p.double = p),
                v(h(d.S), u),
                (
                  n.pass ||
                  o ||
                  function (t, n, o, r) {
                    return (
                      r &&
                        (r.S && b(r, d),
                        (t.state = function () {
                          return b(d, {});
                        })),
                      o ? ((a.random = t), n) : t
                    );
                  }
                )(p, e, "global" in n ? n.global : this == a, n.state)
              );
            }
            function m(t) {
              var n,
                o = t.length,
                r = this,
                e = 0,
                i = (r.i = r.j = 0),
                u = (r.S = []);
              for (o || (t = [o++]); e < f; ) u[e] = e++;
              for (e = 0; e < f; e++)
                (u[e] = u[(i = d & (i + t[e % o] + (n = u[e])))]), (u[i] = n);
              (r.g = function (t) {
                for (var n, o = 0, e = r.i, i = r.j, u = r.S; t--; )
                  (n = u[(e = d & (e + 1))]),
                    (o =
                      o * f +
                      u[d & ((u[e] = u[(i = d & (i + n))]) + (u[i] = n))]);
                return (r.i = e), (r.j = i), o;
              })(f);
            }
            function b(t, n) {
              return (n.i = t.i), (n.j = t.j), (n.S = t.S.slice()), n;
            }
            function x(t, n) {
              var o,
                r = [],
                i = e(t);
              if (n && "object" == i)
                for (o in t)
                  try {
                    r.push(x(t[o], n - 1));
                  } catch (t) {}
              return r.length ? r : "string" == i ? t : t + "\0";
            }
            function v(t, n) {
              for (var o, r = t + "", e = 0; e < r.length; )
                n[d & e] = d & ((o ^= 19 * n[d & e]) + r.charCodeAt(e++));
              return h(n);
            }
            function h(t) {
              return String.fromCharCode.apply(0, t);
            }
            if ((v(a.random(), u), "object" == e(t) && t.exports)) {
              t.exports = p;
              try {
                c = o(42);
              } catch (t) {}
            } else
              void 0 ===
                (r = function () {
                  return p;
                }.call(n, o, n, t)) || (t.exports = r);
          })("undefined" != typeof self ? self : this, [], Math);
      },
      238: (t) => {
        t.exports = function () {
          var t = {},
            n = [
              "LN10",
              "PI",
              "E",
              "LOG10E",
              "SQRT2",
              "LOG2E",
              "SQRT1_2",
              "LN2",
              "cos",
              "pow",
              "log",
              "tan",
              "sqrt",
              "ceil",
              "asin",
              "abs",
              "max",
              "exp",
              "atan2",
              "random",
              "round",
              "floor",
              "acos",
              "atan",
              "min",
              "sin",
            ];
          for (var o in n) t[n[o]] = Math[n[o]];
          return (
            (t.deg = {}),
            (t.rad = {}),
            (t.deg.normalize = function (t) {
              for (t = Number(t); t > 180; ) t -= 360;
              for (; t <= -180; ) t += 360;
              return t;
            }),
            (t.rad.normalize = function (n) {
              for (n = Number(n); n > t.PI; ) n -= 2 * t.PI;
              for (; n <= -t.PI; ) n += 2 * t.PI;
              return n;
            }),
            (t.deg2rad = function (n) {
              return t.rad.normalize(n * (t.PI / 180));
            }),
            (t.rad2deg = function (n) {
              return t.deg.normalize(n * (180 / t.PI));
            }),
            (t.rad.atan2 = t.atan2),
            (t.deg.atan2 = function (n, o) {
              return t.rad2deg(t.rad.atan2(n, o));
            }),
            (t.distance = function (n, o, r, e) {
              var i = r - n,
                u = e - o;
              return t.sqrt(i * i + u * u);
            }),
            (t.randomRange = function (n, o) {
              if (n > o)
                throw "The range is incorrect. First number must be lower than second";
              return n + t.random() * (o - n);
            }),
            t
          );
        };
      },
      42: () => {},
    },
    n = {};
  function o(r) {
    var e = n[r];
    if (void 0 !== e) return e.exports;
    var i = (n[r] = { id: r, loaded: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, o), (i.loaded = !0), i.exports;
  }
  (o.amdD = function () {
    throw new Error("define cannot be used indirect");
  }),
    (o.amdO = {}),
    (o.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (() => {
      function t(t, n) {
        for (var o = 0; o < n.length; o++) {
          var r = n[o];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var n = o(841),
        r = o(238);
      (Math = r()),
        (Math.random = function () {
          throw "Cannot use Math.random outside of tank.init(...) or tank.loop(...) callbacks! Sorry!";
        }),
        (function (o) {
          if (o) {
            var r = (function () {
              function o() {
                !(function (t, n) {
                  if (!(t instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                })(this, o),
                  (this._initCallback = function () {}),
                  (this._loopCallback = function () {});
                var t = this;
                onmessage = function (o) {
                  switch (o.data.command) {
                    case "init":
                      var r = o.data.seed,
                        e = o.data.settings,
                        i = o.data.info;
                      (Math.random = n(r)),
                        t._initCallback(e, i),
                        postMessage({ type: "init", settings: e });
                      break;
                    case "update":
                      var u = o.data.state,
                        a = o.data.control;
                      t._loopCallback
                        ? (t._loopCallback(u, a), postMessage(a))
                        : postMessage(a);
                  }
                };
              }
              var r, e;
              return (
                (r = o),
                (e = [
                  {
                    key: "loop",
                    value: function (t) {
                      this._loopCallback = t;
                    },
                  },
                  {
                    key: "init",
                    value: function (t) {
                      this._initCallback = t;
                    },
                  },
                ]) && t(r.prototype, e),
                Object.defineProperty(r, "prototype", { writable: !1 }),
                o
              );
            })();
            o.tank = new r();
          } else console.warn("self is not defined");
        })(self);
    })();
})();
//# sourceMappingURL=tank.js.map
