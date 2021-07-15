function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.5.1",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function is(e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0;
  }

  function Ee() {
    return !1;
  }

  function Se(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function ke(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        ke(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }

  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Ae(this, e, Se), !1;
      },
      trigger: function trigger() {
        return Ae(this, e), !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return ke(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return ke(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Oe(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function Pe(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(je, ""), u, l));
      }
    }

    return n;
  }

  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Oe(o[r], a[r]);
      } else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Re(this, e, !0);
    },
    remove: function remove(e) {
      return Re(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Pe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Ie = function Ie(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      We = function We(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function $e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
      }
    }));
  }();
  var _e = ["Webkit", "Moz", "ms"],
      ze = E.createElement("div").style,
      Ue = {};

  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = _e.length;

      while (n--) {
        if ((e = _e[n] + t) in ze) return e;
      }
    }(e) || e);
  }

  var Ve = /^(none|table(?!-c[ea]).+)/,
      Ge = /^--/,
      Ye = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Qe = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Ze(e, t, n) {
    var r = Ie(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Ge.test(t),
            l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
          return Ze(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = et).prototype = {
    constructor: et,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0;
    }), tt = Date.now();
  }

  function lt(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ft(o, e, t) {
    var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: tt || ut(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], ot.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && at.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (tt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), tt = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st());
  }, S.fx.stop = function () {
    nt = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt,
      dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), pt = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;

    dt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(P) || []).join(" ");
  }

  function yt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, yt(this)));
      });
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, yt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, yt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = mt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : vt(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function wt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var Tt = C.location,
      Ct = {
    guid: Date.now()
  },
      Et = /\?/;

  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
  };

  var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;

  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      Dt(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      Dt(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  });
  var jt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Bt(t, i, o, a) {
    var s = {},
        u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function $t(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Ht.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var _t = {
    0: 200,
    1223: 204
  },
      zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || zt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Yt = C.jQuery,
      Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
/*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(this, function () {
  "use strict";

  var t = {
    find: function find(t) {
      var _ref;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref2;

      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var n = t.parentNode;

      for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) {
        n.matches(e) && i.push(n), n = n.parentNode;
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    }
  },
      e = function e(t) {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  },
      i = function i(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i2 = t.getAttribute("href");

      if (!_i2 || !_i2.includes("#") && !_i2.startsWith(".")) return null;
      _i2.includes("#") && !_i2.startsWith("#") && (_i2 = "#" + _i2.split("#")[1]), e = _i2 && "#" !== _i2 ? _i2.trim() : null;
    }

    return e;
  },
      n = function n(t) {
    var e = i(t);
    return e && document.querySelector(e) ? e : null;
  },
      s = function s(t) {
    var e = i(t);
    return e ? document.querySelector(e) : null;
  },
      o = function o(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      r = function r(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      a = function a(e) {
    return r(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? t.findOne(e) : null;
  },
      l = function l(t, e, i) {
    Object.keys(i).forEach(function (n) {
      var s = i[n],
          o = e[n],
          a = o && r(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
      var l;
      if (!new RegExp(s).test(a)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(a, "\" but expected type \"").concat(s, "\"."));
    });
  },
      c = function c(t) {
    return !(!r(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility");
  },
      h = function h(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      d = function d(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e2 = t.getRootNode();

      return _e2 instanceof ShadowRoot ? _e2 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? d(t.parentNode) : null;
  },
      u = function u() {},
      f = function f(t) {
    return t.offsetHeight;
  },
      p = function p() {
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      m = [],
      g = function g() {
    return "rtl" === document.documentElement.dir;
  },
      _ = function _(t) {
    var e;
    e = function e() {
      var e = p();

      if (e) {
        var _i3 = t.NAME,
            _n = e.fn[_i3];
        e.fn[_i3] = t.jQueryInterface, e.fn[_i3].Constructor = t, e.fn[_i3].noConflict = function () {
          return e.fn[_i3] = _n, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", function () {
      m.forEach(function (t) {
        return t();
      });
    }), m.push(e)) : e();
  },
      b = function b(t) {
    "function" == typeof t && t();
  },
      v = function v(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (!i) return void b(t);

    var n = function (t) {
      if (!t) return 0;

      var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          i = _window$getComputedSt.transitionDelay;

      var n = Number.parseFloat(e),
          s = Number.parseFloat(i);
      return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
    }(e) + 5;

    var s = !1;

    var r = function r(_ref3) {
      var i = _ref3.target;
      i === e && (s = !0, e.removeEventListener("transitionend", r), b(t));
    };

    e.addEventListener("transitionend", r), setTimeout(function () {
      s || o(e);
    }, n);
  },
      y = function y(t, e, i, n) {
    var s = t.indexOf(e);
    if (-1 === s) return t[!i && n ? t.length - 1 : 0];
    var o = t.length;
    return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))];
  },
      w = /[^.]*(?=\..*)\.|.*/,
      E = /\..*/,
      A = /::\d+$/,
      T = {};

  var O = 1;
  var C = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      k = /^(mouseenter|mouseleave)/i,
      L = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function x(t, e) {
    return e && "".concat(e, "::").concat(O++) || t.uidEvent || O++;
  }

  function D(t) {
    var e = x(t);
    return t.uidEvent = e, T[e] = T[e] || {}, T[e];
  }

  function S(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var n = Object.keys(t);

    for (var _s = 0, _o2 = n.length; _s < _o2; _s++) {
      var _o3 = t[n[_s]];
      if (_o3.originalHandler === e && _o3.delegationSelector === i) return _o3;
    }

    return null;
  }

  function I(t, e, i) {
    var n = "string" == typeof e,
        s = n ? i : e;
    var o = M(t);
    return L.has(o) || (o = t), [n, s, o];
  }

  function N(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;

    if (i || (i = n, n = null), k.test(e)) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      n ? n = _t3(n) : i = _t3(i);
    }

    var _I = I(e, i, n),
        _I2 = _slicedToArray(_I, 3),
        o = _I2[0],
        r = _I2[1],
        a = _I2[2],
        l = D(t),
        c = l[a] || (l[a] = {}),
        h = S(c, r, o ? i : null);

    if (h) return void (h.oneOff = h.oneOff && s);
    var d = x(r, e.replace(w, "")),
        u = o ? function (t, e, i) {
      return function n(s) {
        var o = t.querySelectorAll(e);

        for (var _r2 = s.target; _r2 && _r2 !== this; _r2 = _r2.parentNode) {
          for (var _a = o.length; _a--;) {
            if (o[_a] === _r2) return s.delegateTarget = _r2, n.oneOff && P.off(t, s.type, e, i), i.apply(_r2, [s]);
          }
        }

        return null;
      };
    }(t, i, n) : function (t, e) {
      return function i(n) {
        return n.delegateTarget = t, i.oneOff && P.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function j(t, e, i, n, s) {
    var o = S(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function M(t) {
    return t = t.replace(E, ""), C[t] || t;
  }

  var P = {
    on: function on(t, e, i, n) {
      N(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      N(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;

      var _I3 = I(e, i, n),
          _I4 = _slicedToArray(_I3, 3),
          s = _I4[0],
          o = _I4[1],
          r = _I4[2],
          a = r !== e,
          l = D(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void j(t, l, r, o, s ? i : null);
      }

      c && Object.keys(l).forEach(function (i) {
        !function (t, e, i, n) {
          var s = e[i] || {};
          Object.keys(s).forEach(function (o) {
            if (o.includes(n)) {
              var _n2 = s[o];
              j(t, e, i, _n2.originalHandler, _n2.delegationSelector);
            }
          });
        }(t, l, i, e.slice(1));
      });
      var h = l[r] || {};
      Object.keys(h).forEach(function (i) {
        var n = i.replace(A, "");

        if (!a || e.includes(n)) {
          var _e3 = h[i];
          j(t, l, r, _e3.originalHandler, _e3.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = p(),
          s = M(e),
          o = e !== s,
          r = L.has(s);
      var a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
      return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(function (t) {
        Object.defineProperty(d, t, {
          get: function get() {
            return i[t];
          }
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }
  },
      H = new Map();
  var R = {
    set: function set(t, e, i) {
      H.has(t) || H.set(t, new Map());
      var n = H.get(t);
      n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
    },
    get: function get(t, e) {
      return H.has(t) && H.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!H.has(t)) return;
      var i = H.get(t);
      i["delete"](e), 0 === i.size && H["delete"](t);
    }
  };

  var B = /*#__PURE__*/function () {
    function B(t) {
      _classCallCheck(this, B);

      (t = a(t)) && (this._element = t, R.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(B, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        R.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
          _this[t] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        v(t, e, i);
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return R.get(t, this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.0.2";
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs." + this.NAME;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return "." + this.DATA_KEY;
      }
    }]);

    return B;
  }();

  var W = /*#__PURE__*/function (_B) {
    _inherits(W, _B);

    var _super = _createSuper(W);

    function W() {
      _classCallCheck(this, W);

      return _super.apply(this, arguments);
    }

    _createClass(W, [{
      key: "close",
      value: function close(t) {
        var e = t ? this._getRootElement(t) : this._element,
            i = this._triggerCloseEvent(e);

        null === i || i.defaultPrevented || this._removeElement(e);
      }
    }, {
      key: "_getRootElement",
      value: function _getRootElement(t) {
        return s(t) || t.closest(".alert");
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(t) {
        return P.trigger(t, "close.bs.alert");
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(t) {
        var _this2 = this;

        t.classList.remove("show");
        var e = t.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement(t);
        }, t, e);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(t) {
        t.remove(), P.trigger(t, "closed.bs.alert");
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = W.getOrCreateInstance(this);
          "close" === t && e[t](this);
        });
      }
    }, {
      key: "handleDismiss",
      value: function handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }
    }, {
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }]);

    return W;
  }(B);

  P.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', W.handleDismiss(new W())), _(W);

  var q = /*#__PURE__*/function (_B2) {
    _inherits(q, _B2);

    var _super2 = _createSuper(q);

    function q() {
      _classCallCheck(this, q);

      return _super2.apply(this, arguments);
    }

    _createClass(q, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = q.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "button";
      }
    }]);

    return q;
  }(B);

  function z(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function $(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]');
    q.getOrCreateInstance(e).toggle();
  }), _(q);
  var U = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-" + $(e), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + $(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (i) {
        var n = i.replace(/^bs/, "");
        n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = z(t.dataset[i]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return z(t.getAttribute("data-bs-" + $(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      F = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      V = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      K = "next",
      X = "prev",
      Y = "left",
      Q = "right",
      G = {
    ArrowLeft: Q,
    ArrowRight: Y
  };

  var Z = /*#__PURE__*/function (_B3) {
    _inherits(Z, _B3);

    var _super3 = _createSuper(Z);

    function Z(e, i) {
      var _this3;

      _classCallCheck(this, Z);

      _this3 = _super3.call(this, e), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(i), _this3._indicatorsElement = t.findOne(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
      return _this3;
    }

    _createClass(Z, [{
      key: "next",
      value: function next() {
        this._slide(K);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && c(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(X);
      }
    }, {
      key: "pause",
      value: function pause(e) {
        e || (this._isPaused = !0), t.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(e) {
        var _this4 = this;

        this._activeElement = t.findOne(".active.carousel-item", this._element);

        var i = this._getItemIndex(this._activeElement);

        if (e > this._items.length - 1 || e < 0) return;
        if (this._isSliding) return void P.one(this._element, "slid.bs.carousel", function () {
          return _this4.to(e);
        });
        if (i === e) return this.pause(), void this.cycle();
        var n = e > i ? K : X;

        this._slide(n, this._items[e]);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, F), U.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), l("carousel", t, V), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? Q : Y);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        this._config.keyboard && P.on(this._element, "keydown.bs.carousel", function (t) {
          return _this5._keydown(t);
        }), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this5.pause(t);
        }), P.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this5.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var e = function e(t) {
          !_this6._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? _this6._pointerEvent || (_this6.touchStartX = t.touches[0].clientX) : _this6.touchStartX = t.clientX;
        },
            i = function i(t) {
          _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
        },
            n = function n(t) {
          !_this6._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (_this6.touchDeltaX = t.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (t) {
            return _this6.cycle(t);
          }, 500 + _this6._config.interval));
        };

        t.find(".carousel-item img", this._element).forEach(function (t) {
          P.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (P.on(this._element, "pointerdown.bs.carousel", function (t) {
          return e(t);
        }), P.on(this._element, "pointerup.bs.carousel", function (t) {
          return n(t);
        }), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.carousel", function (t) {
          return e(t);
        }), P.on(this._element, "touchmove.bs.carousel", function (t) {
          return i(t);
        }), P.on(this._element, "touchend.bs.carousel", function (t) {
          return n(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = G[t.key];
        e && (t.preventDefault(), this._slide(e));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(e) {
        return this._items = e && e.parentNode ? t.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var i = t === K;
        return y(this._items, e, i, this._config.wrap);
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(e, i) {
        var n = this._getItemIndex(e),
            s = this._getItemIndex(t.findOne(".active.carousel-item", this._element));

        return P.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: e,
          direction: i,
          from: s,
          to: n
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(e) {
        if (this._indicatorsElement) {
          var _i4 = t.findOne(".active", this._indicatorsElement);

          _i4.classList.remove("active"), _i4.removeAttribute("aria-current");

          var _n3 = t.find("[data-bs-target]", this._indicatorsElement);

          for (var _t4 = 0; _t4 < _n3.length; _t4++) {
            if (Number.parseInt(_n3[_t4].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
              _n3[_t4].classList.add("active"), _n3[_t4].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var e = this._activeElement || t.findOne(".active.carousel-item", this._element);
        if (!e) return;
        var i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        i ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = i) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(e, i) {
        var _this7 = this;

        var n = this._directionToOrder(e),
            s = t.findOne(".active.carousel-item", this._element),
            o = this._getItemIndex(s),
            r = i || this._getItemByOrder(n, s),
            a = this._getItemIndex(r),
            l = Boolean(this._interval),
            c = n === K,
            h = c ? "carousel-item-start" : "carousel-item-end",
            d = c ? "carousel-item-next" : "carousel-item-prev",
            u = this._orderToDirection(n);

        if (r && r.classList.contains("active")) return void (this._isSliding = !1);
        if (this._isSliding) return;
        if (this._triggerSlideEvent(r, u).defaultPrevented) return;
        if (!s || !r) return;
        this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;

        var p = function p() {
          P.trigger(_this7._element, "slid.bs.carousel", {
            relatedTarget: r,
            direction: u,
            from: o,
            to: a
          });
        };

        if (this._element.classList.contains("slide")) {
          r.classList.add(d), f(r), s.classList.add(h), r.classList.add(h);

          var _t5 = function _t5() {
            r.classList.remove(h, d), r.classList.add("active"), s.classList.remove("active", d, h), _this7._isSliding = !1, setTimeout(p, 0);
          };

          this._queueCallback(_t5, s, !0);
        } else s.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, p();

        l && this.cycle();
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [Q, Y].includes(t) ? g() ? t === Y ? X : K : t === Y ? K : X : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [K, X].includes(t) ? g() ? t === X ? Y : Q : t === X ? Q : Y : t;
      }
    }], [{
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var i = Z.getOrCreateInstance(t, e);
        var n = i._config;
        "object" == _typeof(e) && (n = _objectSpread(_objectSpread({}, n), e));
        var s = "string" == typeof e ? e : n.slide;
        if ("number" == typeof e) i.to(e);else if ("string" == typeof s) {
          if (void 0 === i[s]) throw new TypeError("No method named \"".concat(s, "\""));
          i[s]();
        } else n.interval && n.ride && (i.pause(), i.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Z.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = s(this);
        if (!e || !e.classList.contains("carousel")) return;

        var i = _objectSpread(_objectSpread({}, U.getDataAttributes(e)), U.getDataAttributes(this)),
            n = this.getAttribute("data-bs-slide-to");

        n && (i.interval = !1), Z.carouselInterface(e, i), n && Z.getInstance(e).to(n), t.preventDefault();
      }
    }, {
      key: "Default",
      get: function get() {
        return F;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }]);

    return Z;
  }(B);

  P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler), P.on(window, "load.bs.carousel.data-api", function () {
    var e = t.find('[data-bs-ride="carousel"]');

    for (var _t6 = 0, _i5 = e.length; _t6 < _i5; _t6++) {
      Z.carouselInterface(e[_t6], Z.getInstance(e[_t6]));
    }
  }), _(Z);
  var J = {
    toggle: !0,
    parent: ""
  },
      tt = {
    toggle: "boolean",
    parent: "(string|element)"
  };

  var et = /*#__PURE__*/function (_B4) {
    _inherits(et, _B4);

    var _super4 = _createSuper(et);

    function et(e, i) {
      var _this8;

      _classCallCheck(this, et);

      _this8 = _super4.call(this, e), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(i), _this8._triggerArray = t.find("[data-bs-toggle=\"collapse\"][href=\"#".concat(_this8._element.id, "\"],[data-bs-toggle=\"collapse\"][data-bs-target=\"#").concat(_this8._element.id, "\"]"));
      var s = t.find('[data-bs-toggle="collapse"]');

      for (var _e4 = 0, _i6 = s.length; _e4 < _i6; _e4++) {
        var _i7 = s[_e4],
            _o4 = n(_i7),
            _r3 = t.find(_o4).filter(function (t) {
          return t === _this8._element;
        });

        null !== _o4 && _r3.length && (_this8._selector = _o4, _this8._triggerArray.push(_i7));
      }

      _this8._parent = _this8._config.parent ? _this8._getParent() : null, _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._element, _this8._triggerArray), _this8._config.toggle && _this8.toggle();
      return _this8;
    }

    _createClass(et, [{
      key: "toggle",
      value: function toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._element.classList.contains("show")) return;
        var e, i;
        this._parent && (e = t.find(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof _this9._config.parent ? t.getAttribute("data-bs-parent") === _this9._config.parent : t.classList.contains("collapse");
        }), 0 === e.length && (e = null));
        var n = t.findOne(this._selector);

        if (e) {
          var _t7 = e.find(function (t) {
            return n !== t;
          });

          if (i = _t7 ? et.getInstance(_t7) : null, i && i._isTransitioning) return;
        }

        if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        e && e.forEach(function (t) {
          n !== t && et.collapseInterface(t, "hide"), i || R.set(t, "bs.collapse", null);
        });

        var s = this._getDimension();

        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
          t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
        }), this.setTransitioning(!0);
        var o = "scroll" + (s[0].toUpperCase() + s.slice(1));
        this._queueCallback(function () {
          _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse", "show"), _this9._element.style[s] = "", _this9.setTransitioning(!1), P.trigger(_this9._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[s] = this._element[o] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._element.classList.contains("show")) return;
        if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", f(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var e = this._triggerArray.length;
        if (e > 0) for (var _t8 = 0; _t8 < e; _t8++) {
          var _e5 = this._triggerArray[_t8],
              _i8 = s(_e5);

          _i8 && !_i8.classList.contains("show") && (_e5.classList.add("collapsed"), _e5.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(function () {
          _this10.setTransitioning(!1), _this10._element.classList.remove("collapsing"), _this10._element.classList.add("collapse"), P.trigger(_this10._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(t) {
        this._isTransitioning = t;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, J), t)).toggle = Boolean(t.toggle), l("collapse", t, tt), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
    }, {
      key: "_getParent",
      value: function _getParent() {
        var _this11 = this;

        var e = this._config.parent;
        e = a(e);
        var i = "[data-bs-toggle=\"collapse\"][data-bs-parent=\"".concat(e, "\"]");
        return t.find(i, e).forEach(function (t) {
          var e = s(t);

          _this11._addAriaAndCollapsedClass(e, [t]);
        }), e;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        var i = t.classList.contains("show");
        e.forEach(function (t) {
          i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i);
        });
      }
    }], [{
      key: "collapseInterface",
      value: function collapseInterface(t, e) {
        var i = et.getInstance(t);

        var n = _objectSpread(_objectSpread(_objectSpread({}, J), U.getDataAttributes(t)), "object" == _typeof(e) && e ? e : {});

        if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new et(t, n)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          et.collapseInterface(this, t);
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return J;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }]);

    return et;
  }(B);

  P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (e) {
    ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
    var i = U.getDataAttributes(this),
        s = n(this);
    t.find(s).forEach(function (t) {
      var e = et.getInstance(t);
      var n;
      e ? (null === e._parent && "string" == typeof i.parent && (e._config.parent = i.parent, e._parent = e._getParent()), n = "toggle") : n = i, et.collapseInterface(t, n);
    });
  }), _(et);
  var it = "top",
      nt = "bottom",
      st = "right",
      ot = "left",
      rt = [it, nt, st, ot],
      at = rt.reduce(function (t, e) {
    return t.concat([e + "-start", e + "-end"]);
  }, []),
      lt = [].concat(rt, ["auto"]).reduce(function (t, e) {
    return t.concat([e, e + "-start", e + "-end"]);
  }, []),
      ct = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function ht(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function dt(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function ut(t) {
    return t instanceof dt(t).Element || t instanceof Element;
  }

  function ft(t) {
    return t instanceof dt(t).HTMLElement || t instanceof HTMLElement;
  }

  function pt(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof dt(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var mt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        ft(s) && ht(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
          i = {
        popper: {
          position: e.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
            return t[e] = "", t;
          }, {});
          ft(n) && ht(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function gt(t) {
    return t.split("-")[0];
  }

  function _t(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    };
  }

  function bt(t) {
    var e = _t(t),
        i = t.offsetWidth,
        n = t.offsetHeight;

    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function vt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && pt(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function yt(t) {
    return dt(t).getComputedStyle(t);
  }

  function wt(t) {
    return ["table", "td", "th"].indexOf(ht(t)) >= 0;
  }

  function Et(t) {
    return ((ut(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function At(t) {
    return "html" === ht(t) ? t : t.assignedSlot || t.parentNode || (pt(t) ? t.host : null) || Et(t);
  }

  function Tt(t) {
    return ft(t) && "fixed" !== yt(t).position ? t.offsetParent : null;
  }

  function Ot(t) {
    for (var e = dt(t), i = Tt(t); i && wt(i) && "static" === yt(i).position;) {
      i = Tt(i);
    }

    return i && ("html" === ht(i) || "body" === ht(i) && "static" === yt(i).position) ? e : i || function (t) {
      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && ft(t) && "fixed" === yt(t).position) return null;

      for (var i = At(t); ft(i) && ["html", "body"].indexOf(ht(i)) < 0;) {
        var n = yt(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function Ct(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  var kt = Math.max,
      Lt = Math.min,
      xt = Math.round;

  function Dt(t, e, i) {
    return kt(t, Lt(e, i));
  }

  function St(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function It(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var Nt = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
          i = t.state,
          n = t.name,
          s = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = gt(i.placement),
          l = Ct(a),
          c = [ot, st].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var h = function (t, e) {
          return St("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : It(t, rt));
        }(s.padding, i),
            d = bt(o),
            u = "y" === l ? it : ot,
            f = "y" === l ? nt : st,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = Ot(o),
            _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            b = p / 2 - m / 2,
            v = h[u],
            y = _ - d[c] - h[f],
            w = _ / 2 - d[c] / 2 + b,
            E = Dt(v, w, y),
            A = l;

        i.modifiersData[n] = ((e = {})[A] = E, e.centerOffset = E - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && vt(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  },
      jt = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function Mt(t) {
    var e,
        i = t.popper,
        n = t.popperRect,
        s = t.placement,
        o = t.offsets,
        r = t.position,
        a = t.gpuAcceleration,
        l = t.adaptive,
        c = t.roundOffsets,
        h = !0 === c ? function (t) {
      var e = t.x,
          i = t.y,
          n = window.devicePixelRatio || 1;
      return {
        x: xt(xt(e * n) / n) || 0,
        y: xt(xt(i * n) / n) || 0
      };
    }(o) : "function" == typeof c ? c(o) : o,
        d = h.x,
        u = void 0 === d ? 0 : d,
        f = h.y,
        p = void 0 === f ? 0 : f,
        m = o.hasOwnProperty("x"),
        g = o.hasOwnProperty("y"),
        _ = ot,
        b = it,
        v = window;

    if (l) {
      var y = Ot(i),
          w = "clientHeight",
          E = "clientWidth";
      y === dt(i) && "static" !== yt(y = Et(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, s === it && (b = nt, p -= y[w] - n.height, p *= a ? 1 : -1), s === ot && (_ = st, u -= y[E] - n.width, u *= a ? 1 : -1);
    }

    var A,
        T = Object.assign({
      position: r
    }, l && jt);
    return a ? Object.assign({}, T, ((A = {})[b] = g ? "0" : "", A[_] = m ? "0" : "", A.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", A)) : Object.assign({}, T, ((e = {})[b] = g ? p + "px" : "", e[_] = m ? u + "px" : "", e.transform = "", e));
  }

  var Pt = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          s = void 0 === n || n,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
        placement: gt(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Mt(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Mt(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  },
      Ht = {
    passive: !0
  },
      Rt = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
          i = t.instance,
          n = t.options,
          s = n.scroll,
          o = void 0 === s || s,
          r = n.resize,
          a = void 0 === r || r,
          l = dt(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, Ht);
      }), a && l.addEventListener("resize", i.update, Ht), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, Ht);
        }), a && l.removeEventListener("resize", i.update, Ht);
      };
    },
    data: {}
  },
      Bt = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Wt(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Bt[t];
    });
  }

  var qt = {
    start: "end",
    end: "start"
  };

  function zt(t) {
    return t.replace(/start|end/g, function (t) {
      return qt[t];
    });
  }

  function $t(t) {
    var e = dt(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function Ut(t) {
    return _t(Et(t)).left + $t(t).scrollLeft;
  }

  function Ft(t) {
    var e = yt(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function Vt(t, e) {
    var i;
    void 0 === e && (e = []);

    var n = function t(e) {
      return ["html", "body", "#document"].indexOf(ht(e)) >= 0 ? e.ownerDocument.body : ft(e) && Ft(e) ? e : t(At(e));
    }(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = dt(n),
        r = s ? [o].concat(o.visualViewport || [], Ft(n) ? n : []) : n,
        a = e.concat(r);

    return s ? a : a.concat(Vt(At(r)));
  }

  function Kt(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function Xt(t, e) {
    return "viewport" === e ? Kt(function (t) {
      var e = dt(t),
          i = Et(t),
          n = e.visualViewport,
          s = i.clientWidth,
          o = i.clientHeight,
          r = 0,
          a = 0;
      return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
        width: s,
        height: o,
        x: r + Ut(t),
        y: a
      };
    }(t)) : ft(e) ? function (t) {
      var e = _t(t);

      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : Kt(function (t) {
      var e,
          i = Et(t),
          n = $t(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = kt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = kt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + Ut(t),
          l = -n.scrollTop;
      return "rtl" === yt(s || i).direction && (a += kt(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(Et(t)));
  }

  function Yt(t) {
    return t.split("-")[1];
  }

  function Qt(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? gt(s) : null,
        r = s ? Yt(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case it:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case nt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case st:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case ot:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;

      default:
        e = {
          x: i.x,
          y: i.y
        };
    }

    var c = o ? Ct(o) : null;

    if (null != c) {
      var h = "y" === c ? "height" : "width";

      switch (r) {
        case "start":
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;

        case "end":
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }

    return e;
  }

  function Gt(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.boundary,
        r = void 0 === o ? "clippingParents" : o,
        a = i.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = i.elementContext,
        h = void 0 === c ? "popper" : c,
        d = i.altBoundary,
        u = void 0 !== d && d,
        f = i.padding,
        p = void 0 === f ? 0 : f,
        m = St("number" != typeof p ? p : It(p, rt)),
        g = "popper" === h ? "reference" : "popper",
        _ = t.elements.reference,
        b = t.rects.popper,
        v = t.elements[u ? g : h],
        y = function (t, e, i) {
      var n = "clippingParents" === e ? function (t) {
        var e = Vt(At(t)),
            i = ["absolute", "fixed"].indexOf(yt(t).position) >= 0 && ft(t) ? Ot(t) : t;
        return ut(i) ? e.filter(function (t) {
          return ut(t) && vt(t, i) && "body" !== ht(t);
        }) : [];
      }(t) : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
        var n = Xt(t, i);
        return e.top = kt(n.top, e.top), e.right = Lt(n.right, e.right), e.bottom = Lt(n.bottom, e.bottom), e.left = kt(n.left, e.left), e;
      }, Xt(t, o));
      return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
    }(ut(v) ? v : v.contextElement || Et(t.elements.popper), r, l),
        w = _t(_),
        E = Qt({
      reference: w,
      element: b,
      strategy: "absolute",
      placement: s
    }),
        A = Kt(Object.assign({}, b, E)),
        T = "popper" === h ? A : w,
        O = {
      top: y.top - T.top + m.top,
      bottom: T.bottom - y.bottom + m.bottom,
      left: y.left - T.left + m.left,
      right: T.right - y.right + m.right
    },
        C = t.modifiersData.offset;

    if ("popper" === h && C) {
      var k = C[s];
      Object.keys(O).forEach(function (t) {
        var e = [st, nt].indexOf(t) >= 0 ? 1 : -1,
            i = [it, nt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }

    return O;
  }

  function Zt(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? lt : l,
        h = Yt(n),
        d = h ? a ? at : at.filter(function (t) {
      return Yt(t) === h;
    }) : rt,
        u = d.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return e[i] = Gt(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[gt(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var Jt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = gt(g), b = l || (_ !== g && p ? function (t) {
          if ("auto" === gt(t)) return [];
          var e = Wt(t);
          return [zt(t), e, zt(e)];
        }(g) : [Wt(g)]), v = [g].concat(b).reduce(function (t, i) {
          return t.concat("auto" === gt(i) ? Zt(e, {
            placement: i,
            boundary: h,
            rootBoundary: d,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: m
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), A = !0, T = v[0], O = 0; O < v.length; O++) {
          var C = v[O],
              k = gt(C),
              L = "start" === Yt(C),
              x = [it, nt].indexOf(k) >= 0,
              D = x ? "width" : "height",
              S = Gt(e, {
            placement: C,
            boundary: h,
            rootBoundary: d,
            altBoundary: u,
            padding: c
          }),
              I = x ? L ? st : ot : L ? nt : it;
          y[D] > w[D] && (I = Wt(I));
          var N = Wt(I),
              j = [];

          if (o && j.push(S[k] <= 0), a && j.push(S[I] <= 0, S[N] <= 0), j.every(function (t) {
            return t;
          })) {
            T = C, A = !1;
            break;
          }

          E.set(C, j);
        }

        if (A) for (var M = function M(t) {
          var e = v.find(function (e) {
            var i = E.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return T = e, "break";
        }, P = p ? 3 : 1; P > 0 && "break" !== M(P); P--) {
          ;
        }
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function te(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }

  function ee(t) {
    return [it, st, nt, ot].some(function (e) {
      return t[e] >= 0;
    });
  }

  var ie = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(t) {
      var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Gt(e, {
        elementContext: "reference"
      }),
          a = Gt(e, {
        altBoundary: !0
      }),
          l = te(r, n),
          c = te(a, s, o),
          h = ee(l),
          d = ee(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": h,
        "data-popper-escaped": d
      });
    }
  },
      ne = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = lt.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = gt(t),
              s = [ot, it].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];
          return r = r || 0, a = (a || 0) * s, [ot, st].indexOf(n) >= 0 ? {
            x: a,
            y: r
          } : {
            x: r,
            y: a
          };
        }(i, e.rects, o), t;
      }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
    }
  },
      se = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = Qt({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      oe = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = Gt(e, {
        boundary: l,
        rootBoundary: c,
        padding: d,
        altBoundary: h
      }),
          _ = gt(e.placement),
          b = Yt(e.placement),
          v = !b,
          y = Ct(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          A = e.rects.reference,
          T = e.rects.popper,
          O = "function" == typeof m ? m(Object.assign({}, e.rects, {
        placement: e.placement
      })) : m,
          C = {
        x: 0,
        y: 0
      };

      if (E) {
        if (o || a) {
          var k = "y" === y ? it : ot,
              L = "y" === y ? nt : st,
              x = "y" === y ? "height" : "width",
              D = E[y],
              S = E[y] + g[k],
              I = E[y] - g[L],
              N = f ? -T[x] / 2 : 0,
              j = "start" === b ? A[x] : T[x],
              M = "start" === b ? -T[x] : -A[x],
              P = e.elements.arrow,
              H = f && P ? bt(P) : {
            width: 0,
            height: 0
          },
              R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              B = R[k],
              W = R[L],
              q = Dt(0, A[x], H[x]),
              z = v ? A[x] / 2 - N - q - B - O : j - q - B - O,
              $ = v ? -A[x] / 2 + N + q + W + O : M + q + W + O,
              U = e.elements.arrow && Ot(e.elements.arrow),
              F = U ? "y" === y ? U.clientTop || 0 : U.clientLeft || 0 : 0,
              V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
              K = E[y] + z - V - F,
              X = E[y] + $ - V;

          if (o) {
            var Y = Dt(f ? Lt(S, K) : S, D, f ? kt(I, X) : I);
            E[y] = Y, C[y] = Y - D;
          }

          if (a) {
            var Q = "x" === y ? it : ot,
                G = "x" === y ? nt : st,
                Z = E[w],
                J = Z + g[Q],
                tt = Z - g[G],
                et = Dt(f ? Lt(J, K) : J, Z, f ? kt(tt, X) : tt);
            E[w] = et, C[w] = et - Z;
          }
        }

        e.modifiersData[n] = C;
      }
    },
    requiresIfExists: ["offset"]
  };

  function re(t, e, i) {
    void 0 === i && (i = !1);

    var n,
        s,
        o = Et(e),
        r = _t(t),
        a = ft(e),
        l = {
      scrollLeft: 0,
      scrollTop: 0
    },
        c = {
      x: 0,
      y: 0
    };

    return (a || !a && !i) && (("body" !== ht(e) || Ft(o)) && (l = (n = e) !== dt(n) && ft(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : $t(n)), ft(e) ? ((c = _t(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = Ut(o))), {
      x: r.left + l.scrollLeft - c.x,
      y: r.top + l.scrollTop - c.y,
      width: r.width,
      height: r.height
    };
  }

  var ae = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function le() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function ce(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? ae : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ae, o),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          h = {
        state: a,
        setOptions: function setOptions(i) {
          d(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
            reference: ut(t) ? Vt(t) : t.contextElement ? Vt(t.contextElement) : [],
            popper: Vt(e)
          };

          var s,
              r,
              c = function (t) {
            var e = function (t) {
              var e = new Map(),
                  i = new Set(),
                  n = [];
              return t.forEach(function (t) {
                e.set(t.name, t);
              }), t.forEach(function (t) {
                i.has(t.name) || function t(s) {
                  i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach(function (n) {
                    if (!i.has(n)) {
                      var s = e.get(n);
                      s && t(s);
                    }
                  }), n.push(s);
                }(t);
              }), n;
            }(t);

            return ct.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          }((s = [].concat(n, a.options.modifiers), r = s.reduce(function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t;
          }, {}), Object.keys(r).map(function (t) {
            return r[t];
          })));

          return a.orderedModifiers = c.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;

            if ("function" == typeof s) {
              var o = s({
                state: a,
                name: e,
                instance: h,
                options: n
              });
              l.push(o || function () {});
            }
          }), h.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;

            if (le(e, i)) {
              a.rects = {
                reference: re(e, Ot(i), "fixed" === a.options.strategy),
                popper: bt(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: d,
                    instance: h
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (s = function s() {
          return new Promise(function (t) {
            h.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(s());
            });
          })), r;
        }),
        destroy: function destroy() {
          d(), c = !0;
        }
      };
      if (!le(t, e)) return h;

      function d() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return h.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), h;
    };
  }

  var he = ce(),
      de = ce({
    defaultModifiers: [Rt, se, Pt, mt]
  }),
      ue = ce({
    defaultModifiers: [Rt, se, Pt, mt, ne, Jt, oe, Nt, ie]
  }),
      fe = Object.freeze({
    __proto__: null,
    popperGenerator: ce,
    detectOverflow: Gt,
    createPopperBase: he,
    createPopper: ue,
    createPopperLite: de,
    top: it,
    bottom: nt,
    right: st,
    left: ot,
    auto: "auto",
    basePlacements: rt,
    start: "start",
    end: "end",
    clippingParents: "clippingParents",
    viewport: "viewport",
    popper: "popper",
    reference: "reference",
    variationPlacements: at,
    placements: lt,
    beforeRead: "beforeRead",
    read: "read",
    afterRead: "afterRead",
    beforeMain: "beforeMain",
    main: "main",
    afterMain: "afterMain",
    beforeWrite: "beforeWrite",
    write: "write",
    afterWrite: "afterWrite",
    modifierPhases: ct,
    applyStyles: mt,
    arrow: Nt,
    computeStyles: Pt,
    eventListeners: Rt,
    flip: Jt,
    hide: ie,
    offset: ne,
    popperOffsets: se,
    preventOverflow: oe
  });

  var pe = new RegExp("ArrowUp|ArrowDown|Escape"),
      me = g() ? "top-end" : "top-start",
      ge = g() ? "top-start" : "top-end",
      _e = g() ? "bottom-end" : "bottom-start",
      be = g() ? "bottom-start" : "bottom-end",
      ve = g() ? "left-start" : "right-start",
      ye = g() ? "right-start" : "left-start",
      we = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      Ee = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var Ae = /*#__PURE__*/function (_B5) {
    _inherits(Ae, _B5);

    var _super5 = _createSuper(Ae);

    function Ae(t, e) {
      var _this12;

      _classCallCheck(this, Ae);

      _this12 = _super5.call(this, t), _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar(), _this12._addEventListeners();
      return _this12;
    }

    _createClass(Ae, [{
      key: "toggle",
      value: function toggle() {
        h(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
      }
    }, {
      key: "show",
      value: function show() {
        if (h(this._element) || this._menu.classList.contains("show")) return;
        var t = Ae.getParentFromElement(this._element),
            e = {
          relatedTarget: this._element
        };

        if (!P.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          var _ref4;

          if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var _e6 = this._element;
            "parent" === this._config.reference ? _e6 = t : r(this._config.reference) ? _e6 = a(this._config.reference) : "object" == _typeof(this._config.reference) && (_e6 = this._config.reference);

            var _i9 = this._getPopperConfig(),
                _n4 = _i9.modifiers.find(function (t) {
              return "applyStyles" === t.name && !1 === t.enabled;
            });

            this._popper = ue(_e6, this._menu, _i9), _n4 && U.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
            return P.on(t, "mouseover", u);
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), P.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (h(this._element) || !this._menu.classList.contains("show")) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(Ae.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this13 = this;

        P.on(this._element, "click.bs.dropdown", function (t) {
          t.preventDefault(), _this13.toggle();
        });
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref5;

        P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children)).forEach(function (t) {
          return P.off(t, "mouseover", u);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), U.getDataAttributes(this._element)), t), l("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t;
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return t.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return ve;
        if (t.classList.contains("dropstart")) return ye;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? ge : me : e ? be : _e;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this14 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this14._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var e = _ref6.key,
            i = _ref6.target;
        var n = t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(c);
        n.length && y(n, i, "ArrowDown" === e, !n.includes(i)).focus();
      }
    }], [{
      key: "dropdownInterface",
      value: function dropdownInterface(t, e) {
        var i = Ae.getOrCreateInstance(t, e);

        if ("string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Ae.dropdownInterface(this, t);
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(e) {
        if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
        var i = t.find('[data-bs-toggle="dropdown"]');

        for (var _t9 = 0, _n5 = i.length; _t9 < _n5; _t9++) {
          var _n6 = Ae.getInstance(i[_t9]);

          if (!_n6 || !1 === _n6._config.autoClose) continue;
          if (!_n6._element.classList.contains("show")) continue;
          var _s2 = {
            relatedTarget: _n6._element
          };

          if (e) {
            var _t10 = e.composedPath(),
                _i10 = _t10.includes(_n6._menu);

            if (_t10.includes(_n6._element) || "inside" === _n6._config.autoClose && !_i10 || "outside" === _n6._config.autoClose && _i10) continue;
            if (_n6._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
            "click" === e.type && (_s2.clickEvent = e);
          }

          _n6._completeHide(_s2);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return s(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(e) {
        var _this15 = this;

        if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !pe.test(e.key)) return;
        var i = this.classList.contains("show");
        if (!i && "Escape" === e.key) return;
        if (e.preventDefault(), e.stopPropagation(), h(this)) return;

        var n = function n() {
          return _this15.matches('[data-bs-toggle="dropdown"]') ? _this15 : t.prev(_this15, '[data-bs-toggle="dropdown"]')[0];
        };

        return "Escape" === e.key ? (n().focus(), void Ae.clearMenus()) : "ArrowUp" === e.key || "ArrowDown" === e.key ? (i || n().click(), void Ae.getInstance(n())._selectMenuItem(e)) : void (i && "Space" !== e.key || Ae.clearMenus());
      }
    }, {
      key: "Default",
      get: function get() {
        return we;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ee;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "dropdown";
      }
    }]);

    return Ae;
  }(B);

  P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Ae.dataApiKeydownHandler), P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Ae.dataApiKeydownHandler), P.on(document, "click.bs.dropdown.data-api", Ae.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", Ae.clearMenus), P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), Ae.dropdownInterface(this);
  }), _(Ae);

  var Te = /*#__PURE__*/function () {
    function Te() {
      _classCallCheck(this, Te);

      this._element = document.body;
    }

    _createClass(Te, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (e) {
          return e + t;
        }), this._setElementAttributes(".sticky-top", "marginRight", function (e) {
          return e - t;
        });
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, i) {
        var _this16 = this;

        var n = this.getWidth();

        this._applyManipulationCallback(t, function (t) {
          if (t !== _this16._element && window.innerWidth > t.clientWidth + n) return;

          _this16._saveInitialAttribute(t, e);

          var s = window.getComputedStyle(t)[e];
          t.style[e] = i(Number.parseFloat(s)) + "px";
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight");
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var i = t.style[e];
        i && U.setDataAttribute(t, e, i);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var i = U.getDataAttribute(t, e);
          void 0 === i ? t.style.removeProperty(e) : (U.removeDataAttribute(t, e), t.style[e] = i);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(e, i) {
        r(e) ? i(e) : t.find(e, this._element).forEach(i);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }]);

    return Te;
  }();

  var Oe = {
    isVisible: !0,
    isAnimated: !1,
    rootElement: "body",
    clickCallback: null
  },
      Ce = {
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "(element|string)",
    clickCallback: "(function|null)"
  };

  var ke = /*#__PURE__*/function () {
    function ke(t) {
      _classCallCheck(this, ke);

      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    _createClass(ke, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
          b(t);
        })) : b(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this17 = this;

        this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
          _this17.dispose(), b(t);
        })) : b(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t11 = document.createElement("div");

          _t11.className = "modal-backdrop", this._config.isAnimated && _t11.classList.add("fade"), this._element = _t11;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, Oe), "object" == _typeof(t) ? t : {})).rootElement = a(t.rootElement), l("backdrop", t, Ce), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this18 = this;

        this._isAppended || (this._config.rootElement.appendChild(this._getElement()), P.on(this._getElement(), "mousedown.bs.backdrop", function () {
          b(_this18._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (P.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        v(t, this._getElement(), this._config.isAnimated);
      }
    }]);

    return ke;
  }();

  var Le = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      xe = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var De = /*#__PURE__*/function (_B6) {
    _inherits(De, _B6);

    var _super6 = _createSuper(De);

    function De(e, i) {
      var _this19;

      _classCallCheck(this, De);

      _this19 = _super6.call(this, e), _this19._config = _this19._getConfig(i), _this19._dialog = t.findOne(".modal-dialog", _this19._element), _this19._backdrop = _this19._initializeBackDrop(), _this19._isShown = !1, _this19._ignoreBackdropClick = !1, _this19._isTransitioning = !1, _this19._scrollBar = new Te();
      return _this19;
    }

    _createClass(De, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this20 = this;

        this._isShown || this._isTransitioning || P.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), P.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', function (t) {
          return _this20.hide(t);
        }), P.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          P.one(_this20._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this20._element && (_this20._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this20._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this21 = this;

        if (t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(), !this._isShown || this._isTransitioning) return;
        if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var e = this._isAnimated();

        e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), P.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), P.off(this._element, "click.dismiss.bs.modal"), P.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(function () {
          return _this21._hideModal();
        }, this._element, e);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return P.off(t, ".bs.modal");
        }), this._backdrop.dispose(), _get(_getPrototypeOf(De.prototype), "dispose", this).call(this), P.off(document, "focusin.bs.modal");
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new ke({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Le), U.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), l("modal", t, xe), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(e) {
        var _this22 = this;

        var i = this._isAnimated(),
            n = t.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), i && f(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(function () {
          _this22._config.focus && _this22._element.focus(), _this22._isTransitioning = !1, P.trigger(_this22._element, "shown.bs.modal", {
            relatedTarget: e
          });
        }, this._dialog, i);
      }
    }, {
      key: "_enforceFocus",
      value: function _enforceFocus() {
        var _this23 = this;

        P.off(document, "focusin.bs.modal"), P.on(document, "focusin.bs.modal", function (t) {
          document === t.target || _this23._element === t.target || _this23._element.contains(t.target) || _this23._element.focus();
        });
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this24 = this;

        this._isShown ? P.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this24._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this24.hide()) : _this24._config.keyboard || "Escape" !== t.key || _this24._triggerBackdropTransition();
        }) : P.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this25 = this;

        this._isShown ? P.on(window, "resize.bs.modal", function () {
          return _this25._adjustDialog();
        }) : P.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this26 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove("modal-open"), _this26._resetAdjustments(), _this26._scrollBar.reset(), P.trigger(_this26._element, "hidden.bs.modal");
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this27 = this;

        P.on(this._element, "click.dismiss.bs.modal", function (t) {
          _this27._ignoreBackdropClick ? _this27._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this27._config.backdrop ? _this27.hide() : "static" === _this27._config.backdrop && _this27._triggerBackdropTransition());
        }), this._backdrop.show(t);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this28 = this;

        if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var _this$_element = this._element,
            t = _this$_element.classList,
            e = _this$_element.scrollHeight,
            i = _this$_element.style,
            n = e > document.documentElement.clientHeight;
        !n && "hidden" === i.overflowY || t.contains("modal-static") || (n || (i.overflowY = "hidden"), t.add("modal-static"), this._queueCallback(function () {
          t.remove("modal-static"), n || _this28._queueCallback(function () {
            i.overflowY = "";
          }, _this28._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;

        (!i && t && !g() || i && !t && g()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !g() || !i && t && g()) && (this._element.style.paddingRight = e + "px");
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = De.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Le;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }]);

    return De;
  }(B);

  P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this29 = this;

    var e = s(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || P.one(e, "hidden.bs.modal", function () {
        c(_this29) && _this29.focus();
      });
    }), De.getOrCreateInstance(e).toggle(this);
  }), _(De);
  var Se = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Ie = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var Ne = /*#__PURE__*/function (_B7) {
    _inherits(Ne, _B7);

    var _super7 = _createSuper(Ne);

    function Ne(t, e) {
      var _this30;

      _classCallCheck(this, Ne);

      _this30 = _super7.call(this, t), _this30._config = _this30._getConfig(e), _this30._isShown = !1, _this30._backdrop = _this30._initializeBackDrop(), _this30._addEventListeners();
      return _this30;
    }

    _createClass(Ne, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this31 = this;

        this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new Te().hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function () {
          P.trigger(_this31._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this32 = this;

        this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (P.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function () {
          _this32._element.setAttribute("aria-hidden", !0), _this32._element.removeAttribute("aria-modal"), _this32._element.removeAttribute("role"), _this32._element.style.visibility = "hidden", _this32._config.scroll || new Te().reset(), P.trigger(_this32._element, "hidden.bs.offcanvas");
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), _get(_getPrototypeOf(Ne.prototype), "dispose", this).call(this), P.off(document, "focusin.bs.offcanvas");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Se), U.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), l("offcanvas", t, Ie), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this33 = this;

        return new ke({
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this33.hide();
          }
        });
      }
    }, {
      key: "_enforceFocusOnElement",
      value: function _enforceFocusOnElement(t) {
        P.off(document, "focusin.bs.offcanvas"), P.on(document, "focusin.bs.offcanvas", function (e) {
          document === e.target || t === e.target || t.contains(e.target) || t.focus();
        }), t.focus();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this34 = this;

        P.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', function () {
          return _this34.hide();
        }), P.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this34._config.keyboard && "Escape" === t.key && _this34.hide();
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ne.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "Default",
      get: function get() {
        return Se;
      }
    }]);

    return Ne;
  }(B);

  P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (e) {
    var _this35 = this;

    var i = s(this);
    if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), h(this)) return;
    P.one(i, "hidden.bs.offcanvas", function () {
      c(_this35) && _this35.focus();
    });
    var n = t.findOne(".offcanvas.show");
    n && n !== i && Ne.getInstance(n).hide(), Ne.getOrCreateInstance(i).toggle(this);
  }), P.on(window, "load.bs.offcanvas.data-api", function () {
    return t.find(".offcanvas.show").forEach(function (t) {
      return Ne.getOrCreateInstance(t).show();
    });
  }), _(Ne);

  var je = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Me = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      Pe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      He = function He(t, e) {
    var i = t.nodeName.toLowerCase();
    if (e.includes(i)) return !je.has(i) || Boolean(Me.test(t.nodeValue) || Pe.test(t.nodeValue));
    var n = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t12 = 0, _e7 = n.length; _t12 < _e7; _t12++) {
      if (n[_t12].test(i)) return !0;
    }

    return !1;
  };

  function Re(t, e, i) {
    var _ref7;

    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);

    var n = new window.DOMParser().parseFromString(t, "text/html"),
        s = Object.keys(e),
        o = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));

    var _loop = function _loop(_t13, _i11) {
      var _ref8;

      var i = o[_t13],
          n = i.nodeName.toLowerCase();

      if (!s.includes(n)) {
        i.remove();
        return "continue";
      }

      var r = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(i.attributes)),
          a = [].concat(e["*"] || [], e[n] || []);

      r.forEach(function (t) {
        He(t, a) || i.removeAttribute(t.nodeName);
      });
    };

    for (var _t13 = 0, _i11 = o.length; _t13 < _i11; _t13++) {
      var _ret = _loop(_t13, _i11);

      if (_ret === "continue") continue;
    }

    return n.body.innerHTML;
  }

  var Be = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      We = new Set(["sanitize", "allowList", "sanitizeFn"]),
      qe = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
      ze = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: g() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: g() ? "right" : "left"
  },
      $e = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
      Ue = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  };

  var Fe = /*#__PURE__*/function (_B8) {
    _inherits(Fe, _B8);

    var _super8 = _createSuper(Fe);

    function Fe(t, e) {
      var _this36;

      _classCallCheck(this, Fe);

      if (void 0 === fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this36 = _super8.call(this, t), _this36._isEnabled = !0, _this36._timeout = 0, _this36._hoverState = "", _this36._activeTrigger = {}, _this36._popper = null, _this36._config = _this36._getConfig(e), _this36.tip = null, _this36._setListeners();
      return _this36;
    }

    _createClass(Fe, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e8 = this._initializeOnDelegatedTarget(t);

          _e8._activeTrigger.click = !_e8._activeTrigger.click, _e8._isWithActiveTrigger() ? _e8._enter(null, _e8) : _e8._leave(null, _e8);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), P.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), _get(_getPrototypeOf(Fe.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _s$classList,
            _ref9,
            _this37 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = P.trigger(this._element, this.constructor.Event.SHOW),
            i = d(this._element),
            n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
        if (t.defaultPrevented || !n) return;
        var s = this.getTipElement(),
            o = e(this.constructor.NAME);
        s.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this._config.animation && s.classList.add("fade");

        var r = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement,
            a = this._getAttachment(r);

        this._addAttachmentClass(a);

        var l = this._config.container;
        R.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(s), P.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = ue(this._element, s, this._getPopperConfig(a)), s.classList.add("show");
        var c = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
        c && (_s$classList = s.classList).add.apply(_s$classList, _toConsumableArray(c.split(" "))), "ontouchstart" in document.documentElement && (_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children)).forEach(function (t) {
          P.on(t, "mouseover", u);
        });
        var h = this.tip.classList.contains("fade");

        this._queueCallback(function () {
          var t = _this37._hoverState;
          _this37._hoverState = null, P.trigger(_this37._element, _this37.constructor.Event.SHOWN), "out" === t && _this37._leave(null, _this37);
        }, this.tip, h);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _ref10,
            _this38 = this;

        if (!this._popper) return;
        var t = this.getTipElement();
        if (P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children)).forEach(function (t) {
          return P.off(t, "mouseover", u);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        var e = this.tip.classList.contains("fade");
        this._queueCallback(function () {
          _this38._isWithActiveTrigger() || ("show" !== _this38._hoverState && t.remove(), _this38._cleanTipClass(), _this38._element.removeAttribute("aria-describedby"), P.trigger(_this38._element, _this38.constructor.Event.HIDDEN), _this38._popper && (_this38._popper.destroy(), _this38._popper = null));
        }, this.tip, e), this._hoverState = "";
      }
    }, {
      key: "update",
      value: function update() {
        null !== this._popper && this._popper.update();
      }
    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var e = this.getTipElement();
        this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove("fade", "show");
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return r(e) ? (e = a(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = Re(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title");

        return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t;
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        var i = this.constructor.DATA_KEY;
        return (e = e || R.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), R.set(t.delegateTarget, i, e)), e;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this39 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this39._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this40 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: function fn(t) {
              return _this40._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this40._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return ze[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this41 = this;

        this._config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) P.on(_this41._element, _this41.constructor.Event.CLICK, _this41._config.selector, function (t) {
            return _this41.toggle(t);
          });else if ("manual" !== t) {
            var _e9 = "hover" === t ? _this41.constructor.Event.MOUSEENTER : _this41.constructor.Event.FOCUSIN,
                _i12 = "hover" === t ? _this41.constructor.Event.MOUSELEAVE : _this41.constructor.Event.FOCUSOUT;

            P.on(_this41._element, _e9, _this41._config.selector, function (t) {
              return _this41._enter(t);
            }), P.on(_this41._element, _i12, _this41._config.selector, function (t) {
              return _this41._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this41._element && _this41.hide();
        }, P.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = _typeof(this._element.getAttribute("data-bs-original-title"));

        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e._config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e._config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t14 in this._activeTrigger) {
          if (this._activeTrigger[_t14]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = U.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          We.has(t) && delete e[t];
        }), (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), e), "object" == _typeof(t) && t ? t : {})).container = !1 === t.container ? document.body : a(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Re(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        if (this._config) for (var _e10 in this._config) {
          this.constructor.Default[_e10] !== this._config[_e10] && (t[_e10] = this._config[_e10]);
        }
        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(Be);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Fe.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return $e;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ue;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return qe;
      }
    }]);

    return Fe;
  }(B);

  _(Fe);

  var Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Ke = _objectSpread(_objectSpread({}, Fe.Default), {}, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Xe = _objectSpread(_objectSpread({}, Fe.DefaultType), {}, {
    content: "(string|element|function)"
  }),
      Ye = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };

  var Qe = /*#__PURE__*/function (_Fe) {
    _inherits(Qe, _Fe);

    var _super9 = _createSuper(Qe);

    function Qe() {
      _classCallCheck(this, Qe);

      return _super9.apply(this, arguments);
    }

    _createClass(Qe, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        return this.tip || (this.tip = _get(_getPrototypeOf(Qe.prototype), "getTipElement", this).call(this), this.getTitle() || t.findOne(".popover-header", this.tip).remove(), this._getContent() || t.findOne(".popover-body", this.tip).remove()), this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var e = this.getTipElement();
        this.setElementContent(t.findOne(".popover-header", e), this.getTitle());

        var i = this._getContent();

        "function" == typeof i && (i = i.call(this._element)), this.setElementContent(t.findOne(".popover-body", e), i), e.classList.remove("fade", "show");
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._element.getAttribute("data-bs-content") || this._config.content;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(Ve);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Qe.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ke;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ye;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Xe;
      }
    }]);

    return Qe;
  }(Fe);

  _(Qe);

  var Ge = {
    offset: 10,
    method: "auto",
    target: ""
  },
      Ze = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  };

  var Je = /*#__PURE__*/function (_B9) {
    _inherits(Je, _B9);

    var _super10 = _createSuper(Je);

    function Je(t, e) {
      var _this42;

      _classCallCheck(this, Je);

      _this42 = _super10.call(this, t), _this42._scrollElement = "BODY" === _this42._element.tagName ? window : _this42._element, _this42._config = _this42._getConfig(e), _this42._selector = "".concat(_this42._config.target, " .nav-link, ").concat(_this42._config.target, " .list-group-item, ").concat(_this42._config.target, " .dropdown-item"), _this42._offsets = [], _this42._targets = [], _this42._activeTarget = null, _this42._scrollHeight = 0, P.on(_this42._scrollElement, "scroll.bs.scrollspy", function () {
        return _this42._process();
      }), _this42.refresh(), _this42._process();
      return _this42;
    }

    _createClass(Je, [{
      key: "refresh",
      value: function refresh() {
        var _this43 = this;

        var e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            i = "auto" === this._config.method ? e : this._config.method,
            s = "position" === i ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.find(this._selector).map(function (e) {
          var o = n(e),
              r = o ? t.findOne(o) : null;

          if (r) {
            var _t15 = r.getBoundingClientRect();

            if (_t15.width || _t15.height) return [U[i](r).top + s, o];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this43._offsets.push(t[0]), _this43._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        P.off(this._scrollElement, ".bs.scrollspy"), _get(_getPrototypeOf(Je.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("string" != typeof (t = _objectSpread(_objectSpread(_objectSpread({}, Ge), U.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {})).target && r(t.target)) {
          var _i13 = t.target.id;
          _i13 || (_i13 = e("scrollspy"), t.target.id = _i13), t.target = "#" + _i13;
        }

        return l("scrollspy", t, Ze), t;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            i = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          var _t16 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t16 && this._activate(_t16);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e11 = this._offsets.length; _e11--;) {
            this._activeTarget !== this._targets[_e11] && t >= this._offsets[_e11] && (void 0 === this._offsets[_e11 + 1] || t < this._offsets[_e11 + 1]) && this._activate(this._targets[_e11]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(e) {
        this._activeTarget = e, this._clear();

        var i = this._selector.split(",").map(function (t) {
          return "".concat(t, "[data-bs-target=\"").concat(e, "\"],").concat(t, "[href=\"").concat(e, "\"]");
        }),
            n = t.findOne(i.join(","));

        n.classList.contains("dropdown-item") ? (t.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), t.parents(n, ".nav, .list-group").forEach(function (e) {
          t.prev(e, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), t.prev(e, ".nav-item").forEach(function (e) {
            t.children(e, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        })), P.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: e
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        t.find(this._selector).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Je.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ge;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }]);

    return Je;
  }(B);

  P.on(window, "load.bs.scrollspy.data-api", function () {
    t.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new Je(t);
    });
  }), _(Je);

  var ti = /*#__PURE__*/function (_B10) {
    _inherits(ti, _B10);

    var _super11 = _createSuper(ti);

    function ti() {
      _classCallCheck(this, ti);

      return _super11.apply(this, arguments);
    }

    _createClass(ti, [{
      key: "show",
      value: function show() {
        var _this44 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
        var e;

        var i = s(this._element),
            n = this._element.closest(".nav, .list-group");

        if (n) {
          var _i14 = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";

          e = t.find(_i14, n), e = e[e.length - 1];
        }

        var o = e ? P.trigger(e, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (P.trigger(this._element, "show.bs.tab", {
          relatedTarget: e
        }).defaultPrevented || null !== o && o.defaultPrevented) return;

        this._activate(this._element, n);

        var r = function r() {
          P.trigger(e, "hidden.bs.tab", {
            relatedTarget: _this44._element
          }), P.trigger(_this44._element, "shown.bs.tab", {
            relatedTarget: e
          });
        };

        i ? this._activate(i, i.parentNode, r) : r();
      }
    }, {
      key: "_activate",
      value: function _activate(e, i, n) {
        var _this45 = this;

        var s = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t.children(i, ".active") : t.find(":scope > li > .active", i))[0],
            o = n && s && s.classList.contains("fade"),
            r = function r() {
          return _this45._transitionComplete(e, s, n);
        };

        s && o ? (s.classList.remove("show"), this._queueCallback(r, e, !0)) : r();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(e, i, n) {
        if (i) {
          i.classList.remove("active");

          var _e12 = t.findOne(":scope > .dropdown-menu .active", i.parentNode);

          _e12 && _e12.classList.remove("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1);
        }

        e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), f(e), e.classList.contains("fade") && e.classList.add("show");
        var s = e.parentNode;

        if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) {
          var _i15 = e.closest(".dropdown");

          _i15 && t.find(".dropdown-toggle", _i15).forEach(function (t) {
            return t.classList.add("active");
          }), e.setAttribute("aria-expanded", !0);
        }

        n && n();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ti.getOrCreateInstance(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }]);

    return ti;
  }(B);

  P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), h(this) || ti.getOrCreateInstance(this).show();
  }), _(ti);
  var ei = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      ii = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var ni = /*#__PURE__*/function (_B11) {
    _inherits(ni, _B11);

    var _super12 = _createSuper(ni);

    function ni(t, e) {
      var _this46;

      _classCallCheck(this, ni);

      _this46 = _super12.call(this, t), _this46._config = _this46._getConfig(e), _this46._timeout = null, _this46._hasMouseInteraction = !1, _this46._hasKeyboardInteraction = !1, _this46._setListeners();
      return _this46;
    }

    _createClass(ni, [{
      key: "show",
      value: function show() {
        var _this47 = this;

        P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), f(this._element), this._element.classList.add("showing"), this._queueCallback(function () {
          _this47._element.classList.remove("showing"), _this47._element.classList.add("show"), P.trigger(_this47._element, "shown.bs.toast"), _this47._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this48 = this;

        this._element.classList.contains("show") && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(function () {
          _this48._element.classList.add("hide"), P.trigger(_this48._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), _get(_getPrototypeOf(ni.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, ii), U.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {}), l("toast", t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this49 = this;

        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this49.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this50 = this;

        P.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
          return _this50.hide();
        }), P.on(this._element, "mouseover.bs.toast", function (t) {
          return _this50._onInteraction(t, !0);
        }), P.on(this._element, "mouseout.bs.toast", function (t) {
          return _this50._onInteraction(t, !1);
        }), P.on(this._element, "focusin.bs.toast", function (t) {
          return _this50._onInteraction(t, !0);
        }), P.on(this._element, "focusout.bs.toast", function (t) {
          return _this50._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ni.getOrCreateInstance(this, t);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ei;
      }
    }, {
      key: "Default",
      get: function get() {
        return ii;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }]);

    return ni;
  }(B);

  return _(ni), {
    Alert: W,
    Button: q,
    Carousel: Z,
    Collapse: et,
    Dropdown: Ae,
    Modal: De,
    Offcanvas: Ne,
    Popover: Qe,
    ScrollSpy: Je,
    Tab: ti,
    Toast: ni,
    Tooltip: Fe
  };
});
/*
 *  jquery-maskmoney - v3.0.2
 *  jQuery plugin to mask data entry in the input text in the form of money (currency)
 *  https://github.com/plentz/jquery-maskmoney
 *
 *  Made by Diego Plentz
 *  Under MIT License (https://raw.github.com/plentz/jquery-maskmoney/master/LICENSE)
 */

!function ($) {
  "use strict";

  $.browser || ($.browser = {}, $.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase()), $.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase()), $.browser.opera = /opera/.test(navigator.userAgent.toLowerCase()), $.browser.msie = /msie/.test(navigator.userAgent.toLowerCase()));
  var a = {
    destroy: function destroy() {
      return $(this).unbind(".maskMoney"), $.browser.msie && (this.onpaste = null), this;
    },
    mask: function mask(a) {
      return this.each(function () {
        var b,
            c = $(this);
        return "number" == typeof a && (c.trigger("mask"), b = $(c.val().split(/\D/)).last()[0].length, a = a.toFixed(b), c.val(a)), c.trigger("mask");
      });
    },
    unmasked: function unmasked() {
      return this.map(function () {
        var a,
            b = $(this).val() || "0",
            c = -1 !== b.indexOf("-");
        return $(b.split(/\D/).reverse()).each(function (b, c) {
          return c ? (a = c, !1) : void 0;
        }), b = b.replace(/\D/g, ""), b = b.replace(new RegExp(a + "$"), "." + a), c && (b = "-" + b), parseFloat(b);
      });
    },
    init: function init(a) {
      return a = $.extend({
        prefix: "",
        suffix: "",
        affixesStay: !0,
        thousands: ",",
        decimal: ".",
        precision: 2,
        allowZero: !1,
        allowNegative: !1
      }, a), this.each(function () {
        function b() {
          var a,
              b,
              c,
              d,
              e,
              f = s.get(0),
              g = 0,
              h = 0;
          return "number" == typeof f.selectionStart && "number" == typeof f.selectionEnd ? (g = f.selectionStart, h = f.selectionEnd) : (b = document.selection.createRange(), b && b.parentElement() === f && (d = f.value.length, a = f.value.replace(/\r\n/g, "\n"), c = f.createTextRange(), c.moveToBookmark(b.getBookmark()), e = f.createTextRange(), e.collapse(!1), c.compareEndPoints("StartToEnd", e) > -1 ? g = h = d : (g = -c.moveStart("character", -d), g += a.slice(0, g).split("\n").length - 1, c.compareEndPoints("EndToEnd", e) > -1 ? h = d : (h = -c.moveEnd("character", -d), h += a.slice(0, h).split("\n").length - 1)))), {
            start: g,
            end: h
          };
        }

        function c() {
          var a = !(s.val().length >= s.attr("maxlength") && s.attr("maxlength") >= 0),
              c = b(),
              d = c.start,
              e = c.end,
              f = c.start !== c.end && s.val().substring(d, e).match(/\d/) ? !0 : !1,
              g = "0" === s.val().substring(0, 1);
          return a || f || g;
        }

        function d(a) {
          s.each(function (b, c) {
            if (c.setSelectionRange) c.focus(), c.setSelectionRange(a, a);else if (c.createTextRange) {
              var d = c.createTextRange();
              d.collapse(!0), d.moveEnd("character", a), d.moveStart("character", a), d.select();
            }
          });
        }

        function e(b) {
          var c = "";
          return b.indexOf("-") > -1 && (b = b.replace("-", ""), c = "-"), c + a.prefix + b + a.suffix;
        }

        function f(b) {
          var c,
              d,
              f,
              g = b.indexOf("-") > -1 && a.allowNegative ? "-" : "",
              h = b.replace(/[^0-9]/g, ""),
              i = h.slice(0, h.length - a.precision);
          return i = i.replace(/^0*/g, ""), i = i.replace(/\B(?=(\d{3})+(?!\d))/g, a.thousands), "" === i && (i = "0"), c = g + i, a.precision > 0 && (d = h.slice(h.length - a.precision), f = new Array(a.precision + 1 - d.length).join(0), c += a.decimal + f + d), e(c);
        }

        function g(a) {
          var b,
              c = s.val().length;
          s.val(f(s.val())), b = s.val().length, a -= c - b, d(a);
        }

        function h() {
          var a = s.val();
          s.val(f(a));
        }

        function i() {
          var b = s.val();
          return a.allowNegative ? "" !== b && "-" === b.charAt(0) ? b.replace("-", "") : "-" + b : b;
        }

        function j(a) {
          a.preventDefault ? a.preventDefault() : a.returnValue = !1;
        }

        function k(a) {
          a = a || window.event;
          var d,
              e,
              f,
              h,
              k,
              l = a.which || a.charCode || a.keyCode;
          return void 0 === l ? !1 : 48 > l || l > 57 ? 45 === l ? (s.val(i()), !1) : 43 === l ? (s.val(s.val().replace("-", "")), !1) : 13 === l || 9 === l ? !0 : !$.browser.mozilla || 37 !== l && 39 !== l || 0 !== a.charCode ? (j(a), !0) : !0 : c() ? (j(a), d = String.fromCharCode(l), e = b(), f = e.start, h = e.end, k = s.val(), s.val(k.substring(0, f) + d + k.substring(h, k.length)), g(f + 1), !1) : !1;
        }

        function l(c) {
          c = c || window.event;
          var d,
              e,
              f,
              h,
              i,
              k = c.which || c.charCode || c.keyCode;
          return void 0 === k ? !1 : (d = b(), e = d.start, f = d.end, 8 === k || 46 === k || 63272 === k ? (j(c), h = s.val(), e === f && (8 === k ? "" === a.suffix ? e -= 1 : (i = h.split("").reverse().join("").search(/\d/), e = h.length - i - 1, f = e + 1) : f += 1), s.val(h.substring(0, e) + h.substring(f, h.length)), g(e), !1) : 9 === k ? !0 : !0);
        }

        function m() {
          r = s.val(), h();
          var a,
              b = s.get(0);
          b.createTextRange && (a = b.createTextRange(), a.collapse(!1), a.select());
        }

        function n() {
          setTimeout(function () {
            h();
          }, 0);
        }

        function o() {
          var b = parseFloat("0") / Math.pow(10, a.precision);
          return b.toFixed(a.precision).replace(new RegExp("\\.", "g"), a.decimal);
        }

        function p(b) {
          if ($.browser.msie && k(b), "" === s.val() || s.val() === e(o())) a.allowZero ? a.affixesStay ? s.val(e(o())) : s.val(o()) : s.val("");else if (!a.affixesStay) {
            var c = s.val().replace(a.prefix, "").replace(a.suffix, "");
            s.val(c);
          }
          s.val() !== r && s.change();
        }

        function q() {
          var a,
              b = s.get(0);
          b.setSelectionRange ? (a = s.val().length, b.setSelectionRange(a, a)) : s.val(s.val());
        }

        var r,
            s = $(this);
        a = $.extend(a, s.data()), s.unbind(".maskMoney"), s.bind("keypress.maskMoney", k), s.bind("keydown.maskMoney", l), s.bind("blur.maskMoney", p), s.bind("focus.maskMoney", m), s.bind("click.maskMoney", q), s.bind("cut.maskMoney", n), s.bind("paste.maskMoney", n), s.bind("mask.maskMoney", h);
      });
    }
  };

  $.fn.maskMoney = function (b) {
    return a[b] ? a[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(b) && b ? ($.error("Method " + b + " does not exist on jQuery.maskMoney"), void 0) : a.init.apply(this, arguments);
  };
}(window.jQuery || window.Zepto);

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  var ua = navigator.userAgent,
      iPhone = /iphone/i.test(ua),
      chrome = /chrome/i.test(ua),
      android = /android/i.test(ua),
      caretTimeoutId;
  $.mask = {
    //Predefined character definitions
    definitions: {
      '9': "[0-9]",
      'a': "[A-Za-z]",
      '*': "[A-Za-z0-9]"
    },
    autoclear: true,
    dataName: "rawMaskFn",
    placeholder: '_'
  };
  $.fn.extend({
    //Helper Function for Caret positioning
    caret: function caret(begin, end) {
      var range;

      if (this.length === 0 || this.is(":hidden") || this.get(0) !== document.activeElement) {
        return;
      }

      if (typeof begin == 'number') {
        end = typeof end === 'number' ? end : begin;
        return this.each(function () {
          if (this.setSelectionRange) {
            this.setSelectionRange(begin, end);
          } else if (this.createTextRange) {
            range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', begin);
            range.select();
          }
        });
      } else {
        if (this[0].setSelectionRange) {
          begin = this[0].selectionStart;
          end = this[0].selectionEnd;
        } else if (document.selection && document.selection.createRange) {
          range = document.selection.createRange();
          begin = 0 - range.duplicate().moveStart('character', -100000);
          end = begin + range.text.length;
        }

        return {
          begin: begin,
          end: end
        };
      }
    },
    unmask: function unmask() {
      return this.trigger("unmask");
    },
    mask: function mask(_mask, settings) {
      var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;

      if (!_mask && this.length > 0) {
        input = $(this[0]);
        var fn = input.data($.mask.dataName);
        return fn ? fn() : undefined;
      }

      settings = $.extend({
        autoclear: $.mask.autoclear,
        placeholder: $.mask.placeholder,
        // Load default placeholder
        completed: null
      }, settings);
      defs = $.mask.definitions;
      tests = [];
      partialPosition = len = _mask.length;
      firstNonMaskPos = null;
      _mask = String(_mask);
      $.each(_mask.split(""), function (i, c) {
        if (c == '?') {
          len--;
          partialPosition = i;
        } else if (defs[c]) {
          tests.push(new RegExp(defs[c]));

          if (firstNonMaskPos === null) {
            firstNonMaskPos = tests.length - 1;
          }

          if (i < partialPosition) {
            lastRequiredNonMaskPos = tests.length - 1;
          }
        } else {
          tests.push(null);
        }
      });
      return this.trigger("unmask").each(function () {
        var input = $(this),
            buffer = $.map(_mask.split(""), function (c, i) {
          if (c != '?') {
            return defs[c] ? getPlaceholder(i) : c;
          }
        }),
            defaultBuffer = buffer.join(''),
            focusText = input.val();

        function tryFireCompleted() {
          if (!settings.completed) {
            return;
          }

          for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
            if (tests[i] && buffer[i] === getPlaceholder(i)) {
              return;
            }
          }

          settings.completed.call(input);
        }

        function getPlaceholder(i) {
          if (i < settings.placeholder.length) return settings.placeholder.charAt(i);
          return settings.placeholder.charAt(0);
        }

        function seekNext(pos) {
          while (++pos < len && !tests[pos]) {
            ;
          }

          return pos;
        }

        function seekPrev(pos) {
          while (--pos >= 0 && !tests[pos]) {
            ;
          }

          return pos;
        }

        function shiftL(begin, end) {
          var i, j;

          if (begin < 0) {
            return;
          }

          for (i = begin, j = seekNext(end); i < len; i++) {
            if (tests[i]) {
              if (j < len && tests[i].test(buffer[j])) {
                buffer[i] = buffer[j];
                buffer[j] = getPlaceholder(j);
              } else {
                break;
              }

              j = seekNext(j);
            }
          }

          writeBuffer();
          input.caret(Math.max(firstNonMaskPos, begin));
        }

        function shiftR(pos) {
          var i, c, j, t;

          for (i = pos, c = getPlaceholder(pos); i < len; i++) {
            if (tests[i]) {
              j = seekNext(i);
              t = buffer[i];
              buffer[i] = c;

              if (j < len && tests[j].test(t)) {
                c = t;
              } else {
                break;
              }
            }
          }
        }

        function androidInputEvent(e) {
          var curVal = input.val();
          var pos = input.caret();

          if (oldVal && oldVal.length && oldVal.length > curVal.length) {
            // a deletion or backspace happened
            checkVal(true);

            while (pos.begin > 0 && !tests[pos.begin - 1]) {
              pos.begin--;
            }

            if (pos.begin === 0) {
              while (pos.begin < firstNonMaskPos && !tests[pos.begin]) {
                pos.begin++;
              }
            }

            input.caret(pos.begin, pos.begin);
          } else {
            var pos2 = checkVal(true);
            var lastEnteredValue = curVal.charAt(pos.begin);

            if (pos.begin < len) {
              if (!tests[pos.begin]) {
                pos.begin++;

                if (tests[pos.begin].test(lastEnteredValue)) {
                  pos.begin++;
                }
              } else {
                if (tests[pos.begin].test(lastEnteredValue)) {
                  pos.begin++;
                }
              }
            }

            input.caret(pos.begin, pos.begin);
          }

          tryFireCompleted();
        }

        function blurEvent(e) {
          checkVal();
          if (input.val() != focusText) input.change();
        }

        function keydownEvent(e) {
          if (input.prop("readonly")) {
            return;
          }

          var k = e.which || e.keyCode,
              pos,
              begin,
              end;
          oldVal = input.val(); //backspace, delete, and escape get special treatment

          if (k === 8 || k === 46 || iPhone && k === 127) {
            pos = input.caret();
            begin = pos.begin;
            end = pos.end;

            if (end - begin === 0) {
              begin = k !== 46 ? seekPrev(begin) : end = seekNext(begin - 1);
              end = k === 46 ? seekNext(end) : end;
            }

            clearBuffer(begin, end);
            shiftL(begin, end - 1);
            e.preventDefault();
          } else if (k === 13) {
            // enter
            blurEvent.call(this, e);
          } else if (k === 27) {
            // escape
            input.val(focusText);
            input.caret(0, checkVal());
            e.preventDefault();
          }
        }

        function keypressEvent(e) {
          if (input.prop("readonly")) {
            return;
          }

          var k = e.which || e.keyCode,
              pos = input.caret(),
              p,
              c,
              next;

          if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {
            //Ignore
            return;
          } else if (k && k !== 13) {
            if (pos.end - pos.begin !== 0) {
              clearBuffer(pos.begin, pos.end);
              shiftL(pos.begin, pos.end - 1);
            }

            p = seekNext(pos.begin - 1);

            if (p < len) {
              c = String.fromCharCode(k);

              if (tests[p].test(c)) {
                shiftR(p);
                buffer[p] = c;
                writeBuffer();
                next = seekNext(p);

                if (android) {
                  //Path for CSP Violation on FireFox OS 1.1
                  var proxy = function proxy() {
                    $.proxy($.fn.caret, input, next)();
                  };

                  setTimeout(proxy, 0);
                } else {
                  input.caret(next);
                }

                if (pos.begin <= lastRequiredNonMaskPos) {
                  tryFireCompleted();
                }
              }
            }

            e.preventDefault();
          }
        }

        function clearBuffer(start, end) {
          var i;

          for (i = start; i < end && i < len; i++) {
            if (tests[i]) {
              buffer[i] = getPlaceholder(i);
            }
          }
        }

        function writeBuffer() {
          input.val(buffer.join(''));
        }

        function checkVal(allow) {
          //try to place characters where they belong
          var test = input.val(),
              lastMatch = -1,
              i,
              c,
              pos;

          for (i = 0, pos = 0; i < len; i++) {
            if (tests[i]) {
              buffer[i] = getPlaceholder(i);

              while (pos++ < test.length) {
                c = test.charAt(pos - 1);

                if (tests[i].test(c)) {
                  buffer[i] = c;
                  lastMatch = i;
                  break;
                }
              }

              if (pos > test.length) {
                clearBuffer(i + 1, len);
                break;
              }
            } else {
              if (buffer[i] === test.charAt(pos)) {
                pos++;
              }

              if (i < partialPosition) {
                lastMatch = i;
              }
            }
          }

          if (allow) {
            writeBuffer();
          } else if (lastMatch + 1 < partialPosition) {
            if (settings.autoclear || buffer.join('') === defaultBuffer) {
              // Invalid value. Remove it and replace it with the
              // mask, which is the default behavior.
              if (input.val()) input.val("");
              clearBuffer(0, len);
            } else {
              // Invalid value, but we opt to show the value to the
              // user and allow them to correct their mistake.
              writeBuffer();
            }
          } else {
            writeBuffer();
            input.val(input.val().substring(0, lastMatch + 1));
          }

          return partialPosition ? i : firstNonMaskPos;
        }

        input.data($.mask.dataName, function () {
          return $.map(buffer, function (c, i) {
            return tests[i] && c != getPlaceholder(i) ? c : null;
          }).join('');
        });
        input.one("unmask", function () {
          input.off(".mask").removeData($.mask.dataName);
        }).on("focus.mask", function () {
          if (input.prop("readonly")) {
            return;
          }

          clearTimeout(caretTimeoutId);
          var pos;
          focusText = input.val();
          pos = checkVal();
          caretTimeoutId = setTimeout(function () {
            if (input.get(0) !== document.activeElement) {
              return;
            }

            writeBuffer();

            if (pos == _mask.replace("?", "").length) {
              input.caret(0, pos);
            } else {
              input.caret(pos);
            }
          }, 10);
        }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function () {
          if (input.prop("readonly")) {
            return;
          }

          setTimeout(function () {
            var pos = checkVal(true);
            input.caret(pos);
            tryFireCompleted();
          }, 0);
        });

        if (chrome && android) {
          input.off('input.mask').on('input.mask', androidInputEvent);
        }

        checkVal(); //Perform initial check for existing values
      });
    }
  });
});

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sweetalert2 = e();
}(this, function () {
  "use strict";

  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function a(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  function c(t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
  }

  function s() {
    return (s = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  function u(t) {
    return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function l(t, e) {
    return (l = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function d() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  function i(t, e, n) {
    return (i = d() ? Reflect.construct : function (t, e, n) {
      var o = [null];
      o.push.apply(o, e);
      var i = new (Function.bind.apply(t, o))();
      return n && l(i, n.prototype), i;
    }).apply(null, arguments);
  }

  function p(t, e) {
    return !e || "object" != _typeof(e) && "function" != typeof e ? function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t) : e;
  }

  function f(t, e, n) {
    return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
      var o = function (t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t));) {
          ;
        }

        return t;
      }(t, e);

      if (o) {
        var i = Object.getOwnPropertyDescriptor(o, e);
        return i.get ? i.get.call(n) : i.value;
      }
    })(t, e, n || t);
  }

  function m(e) {
    return Object.keys(e).map(function (t) {
      return e[t];
    });
  }

  function h(t) {
    return Array.prototype.slice.call(t);
  }

  function g(t, e) {
    var n;
    n = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), -1 === z.indexOf(n) && (z.push(n), _(n));
  }

  function v(t) {
    return t && "function" == typeof t.toPromise;
  }

  function b(t) {
    return v(t) ? t.toPromise() : Promise.resolve(t);
  }

  function y(t) {
    return t && Promise.resolve(t) === t;
  }

  function w(t) {
    return t instanceof Element || "object" === r(e = t) && e.jquery;
    var e;
  }

  function t(t) {
    var e = {};

    for (var n in t) {
      e[t[n]] = "swal2-" + t[n];
    }

    return e;
  }

  function C(t) {
    var e = Q();
    return e ? e.querySelector(t) : null;
  }

  function e(t) {
    return C(".".concat(t));
  }

  function n() {
    var t = $();
    return h(t.querySelectorAll(".".concat(Y.icon)));
  }

  function k() {
    var t = n().filter(function (t) {
      return vt(t);
    });
    return t.length ? t[0] : null;
  }

  function x() {
    return e(Y.title);
  }

  function P() {
    return e(Y.content);
  }

  function A() {
    return e(Y.image);
  }

  function B() {
    return e(Y["progress-steps"]);
  }

  function S() {
    return e(Y["validation-message"]);
  }

  function E() {
    return C(".".concat(Y.actions, " .").concat(Y.confirm));
  }

  function O() {
    return C(".".concat(Y.actions, " .").concat(Y.cancel));
  }

  function T() {
    return e(Y.actions);
  }

  function L() {
    return e(Y.header);
  }

  function j() {
    return e(Y.footer);
  }

  function q() {
    return e(Y["timer-progress-bar"]);
  }

  function I() {
    return e(Y.close);
  }

  function V() {
    var t = h($().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (t, e) {
      return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0;
    }),
        e = h($().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function (t) {
      return "-1" !== t.getAttribute("tabindex");
    });
    return function (t) {
      for (var e = [], n = 0; n < t.length; n++) {
        -1 === e.indexOf(t[n]) && e.push(t[n]);
      }

      return e;
    }(t.concat(e)).filter(function (t) {
      return vt(t);
    });
  }

  function M() {
    return !J() && !document.body.classList.contains(Y["no-backdrop"]);
  }

  function R() {
    return $().hasAttribute("data-loading");
  }

  function H(e, t) {
    var n;
    e.textContent = "", t && (n = new DOMParser().parseFromString(t, "text/html"), h(n.querySelector("head").childNodes).forEach(function (t) {
      e.appendChild(t);
    }), h(n.querySelector("body").childNodes).forEach(function (t) {
      e.appendChild(t);
    }));
  }

  function D(t, e) {
    if (e) {
      for (var n = e.split(/\s+/), o = 0; o < n.length; o++) {
        if (!t.classList.contains(n[o])) return;
      }

      return 1;
    }
  }

  function N(t, e, n) {
    var o, i;

    if (i = e, h((o = t).classList).forEach(function (t) {
      -1 === m(Y).indexOf(t) && -1 === m(Z).indexOf(t) && -1 === m(i.showClass).indexOf(t) && o.classList.remove(t);
    }), e.customClass && e.customClass[n]) {
      if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach) return _("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(r(e.customClass[n]), '"'));
      mt(t, e.customClass[n]);
    }
  }

  var U = "SweetAlert2:",
      _ = function _(t) {
    console.warn("".concat(U, " ").concat(t));
  },
      F = function F(t) {
    console.error("".concat(U, " ").concat(t));
  },
      z = [],
      W = function W(t) {
    return "function" == typeof t ? t() : t;
  },
      K = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer"
  }),
      Y = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
      Z = t(["success", "warning", "info", "question", "error"]),
      Q = function Q() {
    return document.body.querySelector(".".concat(Y.container));
  },
      $ = function $() {
    return e(Y.popup);
  },
      J = function J() {
    return document.body.classList.contains(Y["toast-shown"]);
  },
      X = {
    previousBodyPadding: null
  };

  function G(t, e) {
    if (!e) return null;

    switch (e) {
      case "select":
      case "textarea":
      case "file":
        return gt(t, Y[e]);

      case "checkbox":
        return t.querySelector(".".concat(Y.checkbox, " input"));

      case "radio":
        return t.querySelector(".".concat(Y.radio, " input:checked")) || t.querySelector(".".concat(Y.radio, " input:first-child"));

      case "range":
        return t.querySelector(".".concat(Y.range, " input"));

      default:
        return gt(t, Y.input);
    }
  }

  function tt(t) {
    var e;
    t.focus(), "file" !== t.type && (e = t.value, t.value = "", t.value = e);
  }

  function et(t, e, n) {
    t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function (e) {
      t.forEach ? t.forEach(function (t) {
        n ? t.classList.add(e) : t.classList.remove(e);
      }) : n ? t.classList.add(e) : t.classList.remove(e);
    }));
  }

  function nt(t, e, n) {
    n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e);
  }

  function ot(t, e) {
    var n = 1 < arguments.length && void 0 !== e ? e : "flex";
    t.style.opacity = "", t.style.display = n;
  }

  function it(t) {
    t.style.opacity = "", t.style.display = "none";
  }

  function rt(t, e, n) {
    e ? ot(t, n) : it(t);
  }

  function at(t) {
    return !!(t.scrollHeight > t.clientHeight);
  }

  function ct(t) {
    var e = window.getComputedStyle(t),
        n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
        o = parseFloat(e.getPropertyValue("transition-duration") || "0");
    return 0 < n || 0 < o;
  }

  function st(t, e) {
    var n = 1 < arguments.length && void 0 !== e && e,
        o = q();
    vt(o) && (n && (o.style.transition = "none", o.style.width = "100%"), setTimeout(function () {
      o.style.transition = "width ".concat(t / 1e3, "s linear"), o.style.width = "0%";
    }, 10));
  }

  function ut() {
    return "undefined" == typeof window || "undefined" == typeof document;
  }

  function lt(t) {
    sn.isVisible() && ft !== t.target.value && sn.resetValidationMessage(), ft = t.target.value;
  }

  function dt(t, e) {
    t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? wt(t, e) : t && H(e, t);
  }

  function pt(t, e) {
    var n = T(),
        o = E(),
        i = O();
    e.showConfirmButton || e.showCancelButton || it(n), N(n, e, "actions"), xt(o, "confirm", e), xt(i, "cancel", e), e.buttonsStyling ? function (t, e, n) {
      mt([t, e], Y.styled), n.confirmButtonColor && (t.style.backgroundColor = n.confirmButtonColor);
      n.cancelButtonColor && (e.style.backgroundColor = n.cancelButtonColor);
      {
        var o;
        R() || (o = window.getComputedStyle(t).getPropertyValue("background-color"), t.style.borderLeftColor = o, t.style.borderRightColor = o);
      }
    }(o, i, e) : (ht([o, i], Y.styled), o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = "", i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = ""), e.reverseButtons && o.parentNode.insertBefore(i, o);
  }

  var ft,
      mt = function mt(t, e) {
    et(t, e, !0);
  },
      ht = function ht(t, e) {
    et(t, e, !1);
  },
      gt = function gt(t, e) {
    for (var n = 0; n < t.childNodes.length; n++) {
      if (D(t.childNodes[n], e)) return t.childNodes[n];
    }
  },
      vt = function vt(t) {
    return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length));
  },
      bt = '\n <div aria-labelledby="'.concat(Y.title, '" aria-describedby="').concat(Y.content, '" class="').concat(Y.popup, '" tabindex="-1">\n   <div class="').concat(Y.header, '">\n     <ul class="').concat(Y["progress-steps"], '"></ul>\n     <div class="').concat(Y.icon, " ").concat(Z.error, '"></div>\n     <div class="').concat(Y.icon, " ").concat(Z.question, '"></div>\n     <div class="').concat(Y.icon, " ").concat(Z.warning, '"></div>\n     <div class="').concat(Y.icon, " ").concat(Z.info, '"></div>\n     <div class="').concat(Y.icon, " ").concat(Z.success, '"></div>\n     <img class="').concat(Y.image, '" />\n     <h2 class="').concat(Y.title, '" id="').concat(Y.title, '"></h2>\n     <button type="button" class="').concat(Y.close, '"></button>\n   </div>\n   <div class="').concat(Y.content, '">\n     <div id="').concat(Y.content, '" class="').concat(Y["html-container"], '"></div>\n     <input class="').concat(Y.input, '" />\n     <input type="file" class="').concat(Y.file, '" />\n     <div class="').concat(Y.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(Y.select, '"></select>\n     <div class="').concat(Y.radio, '"></div>\n     <label for="').concat(Y.checkbox, '" class="').concat(Y.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(Y.label, '"></span>\n     </label>\n     <textarea class="').concat(Y.textarea, '"></textarea>\n     <div class="').concat(Y["validation-message"], '" id="').concat(Y["validation-message"], '"></div>\n   </div>\n   <div class="').concat(Y.actions, '">\n     <button type="button" class="').concat(Y.confirm, '">OK</button>\n     <button type="button" class="').concat(Y.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(Y.footer, '"></div>\n   <div class="').concat(Y["timer-progress-bar-container"], '">\n     <div class="').concat(Y["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
      yt = function yt(t) {
    var e,
        n,
        o,
        i,
        r,
        a,
        c,
        s,
        u,
        l,
        d,
        p,
        f,
        m,
        h,
        g = !!(e = Q()) && (e.parentNode.removeChild(e), ht([document.documentElement, document.body], [Y["no-backdrop"], Y["toast-shown"], Y["has-column"]]), !0);
    ut() ? F("SweetAlert2 requires document to initialize") : ((n = document.createElement("div")).className = Y.container, g && mt(n, Y["no-transition"]), H(n, bt), (o = "string" == typeof (i = t.target) ? document.querySelector(i) : i).appendChild(n), r = t, (a = $()).setAttribute("role", r.toast ? "alert" : "dialog"), a.setAttribute("aria-live", r.toast ? "polite" : "assertive"), r.toast || a.setAttribute("aria-modal", "true"), c = o, "rtl" === window.getComputedStyle(c).direction && mt(Q(), Y.rtl), s = P(), u = gt(s, Y.input), l = gt(s, Y.file), d = s.querySelector(".".concat(Y.range, " input")), p = s.querySelector(".".concat(Y.range, " output")), f = gt(s, Y.select), m = s.querySelector(".".concat(Y.checkbox, " input")), h = gt(s, Y.textarea), u.oninput = lt, l.onchange = lt, f.onchange = lt, m.onchange = lt, h.oninput = lt, d.oninput = function (t) {
      lt(t), p.value = d.value;
    }, d.onchange = function (t) {
      lt(t), d.nextSibling.value = d.value;
    });
  },
      wt = function wt(t, e) {
    t.jquery ? Ct(e, t) : H(e, t.toString());
  },
      Ct = function Ct(t, e) {
    if (t.textContent = "", 0 in e) for (var n = 0; (n in e); n++) {
      t.appendChild(e[n].cloneNode(!0));
    } else t.appendChild(e.cloneNode(!0));
  },
      kt = function () {
    if (ut()) return !1;
    var t = document.createElement("div"),
        e = {
      WebkitAnimation: "webkitAnimationEnd",
      OAnimation: "oAnimationEnd oanimationend",
      animation: "animationend"
    };

    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n]) return e[n];
    }

    return !1;
  }();

  function xt(t, e, n) {
    var o;
    rt(t, n["show".concat((o = e).charAt(0).toUpperCase() + o.slice(1), "Button")], "inline-block"), H(t, n["".concat(e, "ButtonText")]), t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]), t.className = Y[e], N(t, n, "".concat(e, "Button")), mt(t, n["".concat(e, "ButtonClass")]);
  }

  function Pt(t, e) {
    var n,
        o,
        i,
        r,
        a,
        c,
        s,
        u,
        l = Q();
    l && (n = l, "string" == typeof (o = e.backdrop) ? n.style.background = o : o || mt([document.documentElement, document.body], Y["no-backdrop"]), !e.backdrop && e.allowOutsideClick && _('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), i = l, (r = e.position) in Y ? mt(i, Y[r]) : (_('The "position" parameter is not valid, defaulting to "center"'), mt(i, Y.center)), a = l, !(c = e.grow) || "string" != typeof c || (s = "grow-".concat(c)) in Y && mt(a, Y[s]), N(l, e, "container"), (u = document.body.getAttribute("data-swal2-queue-step")) && (l.setAttribute("data-queue-step", u), document.body.removeAttribute("data-swal2-queue-step")));
  }

  function At(t, e) {
    t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder);
  }

  var Bt = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  },
      St = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
      Et = function Et(t) {
    if (!jt[t.input]) return F('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
    var e = Lt(t.input),
        n = jt[t.input](e, t);
    ot(n), setTimeout(function () {
      tt(n);
    });
  },
      Ot = function Ot(t, e) {
    var n = G(P(), t);
    if (n) for (var o in !function (t) {
      for (var e = 0; e < t.attributes.length; e++) {
        var n = t.attributes[e].name;
        -1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n);
      }
    }(n), e) {
      "range" === t && "placeholder" === o || n.setAttribute(o, e[o]);
    }
  },
      Tt = function Tt(t) {
    var e = Lt(t.input);
    t.customClass && mt(e, t.customClass.input);
  },
      Lt = function Lt(t) {
    var e = Y[t] ? Y[t] : Y.input;
    return gt(P(), e);
  },
      jt = {};

  jt.text = jt.email = jt.password = jt.number = jt.tel = jt.url = function (t, e) {
    return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : y(e.inputValue) || _('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue), '"')), At(t, e), t.type = e.input, t;
  }, jt.file = function (t, e) {
    return At(t, e), t;
  }, jt.range = function (t, e) {
    var n = t.querySelector("input"),
        o = t.querySelector("output");
    return n.value = e.inputValue, n.type = e.input, o.value = e.inputValue, t;
  }, jt.select = function (t, e) {
    var n;
    return t.textContent = "", e.inputPlaceholder && (n = document.createElement("option"), H(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)), t;
  }, jt.radio = function (t) {
    return t.textContent = "", t;
  }, jt.checkbox = function (t, e) {
    var n = G(P(), "checkbox");
    n.value = 1, n.id = Y.checkbox, n.checked = Boolean(e.inputValue);
    var o = t.querySelector("span");
    return H(o, e.inputPlaceholder), t;
  }, jt.textarea = function (e, t) {
    var n, o;
    return e.value = t.inputValue, At(e, t), "MutationObserver" in window && (n = parseInt(window.getComputedStyle($()).width), o = parseInt(window.getComputedStyle($()).paddingLeft) + parseInt(window.getComputedStyle($()).paddingRight), new MutationObserver(function () {
      var t = e.offsetWidth + o;
      $().style.width = n < t ? "".concat(t, "px") : null;
    }).observe(e, {
      attributes: !0,
      attributeFilter: ["style"]
    })), e;
  };

  function qt(t, e) {
    var n,
        o,
        i,
        r,
        a,
        c = P().querySelector("#".concat(Y.content));
    e.html ? (dt(e.html, c), ot(c, "block")) : e.text ? (c.textContent = e.text, ot(c, "block")) : it(c), n = t, o = e, i = P(), r = Bt.innerParams.get(n), a = !r || o.input !== r.input, St.forEach(function (t) {
      var e = Y[t],
          n = gt(i, e);
      Ot(t, o.inputAttributes), n.className = e, a && it(n);
    }), o.input && (a && Et(o), Tt(o)), N(P(), e, "content");
  }

  function It() {
    return Q() && Q().getAttribute("data-queue-step");
  }

  function Vt(t, s) {
    var u = B();
    if (!s.progressSteps || 0 === s.progressSteps.length) return it(u), 0;
    ot(u), u.textContent = "";
    var l = parseInt(void 0 === s.currentProgressStep ? It() : s.currentProgressStep);
    l >= s.progressSteps.length && _("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), s.progressSteps.forEach(function (t, e) {
      var n,
          o,
          i,
          r,
          a,
          c = (n = t, o = document.createElement("li"), mt(o, Y["progress-step"]), H(o, n), o);
      u.appendChild(c), e === l && mt(c, Y["active-progress-step"]), e !== s.progressSteps.length - 1 && (r = s, a = document.createElement("li"), mt(a, Y["progress-step-line"]), r.progressStepsDistance && (a.style.width = r.progressStepsDistance), i = a, u.appendChild(i));
    });
  }

  function Mt(t, e) {
    var n,
        o,
        i,
        r,
        a,
        c,
        s,
        u,
        l = L();
    N(l, e, "header"), Vt(0, e), n = t, o = e, (r = Bt.innerParams.get(n)) && o.icon === r.icon && k() ? N(k(), o, "icon") : (Dt(), o.icon && (-1 !== Object.keys(Z).indexOf(o.icon) ? (i = C(".".concat(Y.icon, ".").concat(Z[o.icon])), ot(i), Ut(i, o), Nt(), N(i, o, "icon"), mt(i, o.showClass.icon)) : F('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon, '"')))), function (t) {
      var e = A();
      if (!t.imageUrl) return it(e);
      ot(e, ""), e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), nt(e, "width", t.imageWidth), nt(e, "height", t.imageHeight), e.className = Y.image, N(e, t, "image");
    }(e), a = e, c = x(), rt(c, a.title || a.titleText), a.title && dt(a.title, c), a.titleText && (c.innerText = a.titleText), N(c, a, "title"), s = e, u = I(), H(u, s.closeButtonHtml), N(u, s, "closeButton"), rt(u, s.showCloseButton), u.setAttribute("aria-label", s.closeButtonAriaLabel);
  }

  function Rt(t, e) {
    var n, o, i, r;
    n = e, o = $(), nt(o, "width", n.width), nt(o, "padding", n.padding), n.background && (o.style.background = n.background), zt(o, n), Pt(0, e), Mt(t, e), qt(t, e), pt(0, e), i = e, r = j(), rt(r, i.footer), i.footer && dt(i.footer, r), N(r, i, "footer"), "function" == typeof e.onRender && e.onRender($());
  }

  function Ht() {
    return E() && E().click();
  }

  var Dt = function Dt() {
    for (var t = n(), e = 0; e < t.length; e++) {
      it(t[e]);
    }
  },
      Nt = function Nt() {
    for (var t = $(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) {
      n[o].style.backgroundColor = e;
    }
  },
      Ut = function Ut(t, e) {
    t.textContent = "", e.iconHtml ? H(t, _t(e.iconHtml)) : "success" === e.icon ? H(t, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === e.icon ? H(t, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : H(t, _t({
      question: "?",
      warning: "!",
      info: "i"
    }[e.icon]));
  },
      _t = function _t(t) {
    return '<div class="'.concat(Y["icon-content"], '">').concat(t, "</div>");
  },
      Ft = [],
      zt = function zt(t, e) {
    t.className = "".concat(Y.popup, " ").concat(vt(t) ? e.showClass.popup : ""), e.toast ? (mt([document.documentElement, document.body], Y["toast-shown"]), mt(t, Y.toast)) : mt(t, Y.modal), N(t, e, "popup"), "string" == typeof e.customClass && mt(t, e.customClass), e.icon && mt(t, Y["icon-".concat(e.icon)]);
  };

  function Wt() {
    var t = $();
    t || sn.fire(), t = $();
    var e = T(),
        n = E();
    ot(e), ot(n, "inline-block"), mt([t, e], Y.loading), n.disabled = !0, t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus();
  }

  function Kt() {
    return new Promise(function (t) {
      var e = window.scrollX,
          n = window.scrollY;
      Xt.restoreFocusTimeout = setTimeout(function () {
        Xt.previousActiveElement && Xt.previousActiveElement.focus ? (Xt.previousActiveElement.focus(), Xt.previousActiveElement = null) : document.body && document.body.focus(), t();
      }, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n);
    });
  }

  function Yt() {
    if (Xt.timeout) return function () {
      var t = q(),
          e = parseInt(window.getComputedStyle(t).width);
      t.style.removeProperty("transition"), t.style.width = "100%";
      var n = parseInt(window.getComputedStyle(t).width),
          o = parseInt(e / n * 100);
      t.style.removeProperty("transition"), t.style.width = "".concat(o, "%");
    }(), Xt.timeout.stop();
  }

  function Zt() {
    if (Xt.timeout) {
      var t = Xt.timeout.start();
      return st(t), t;
    }
  }

  function Qt(t) {
    return Object.prototype.hasOwnProperty.call(Gt, t);
  }

  function $t(t) {
    return ee[t];
  }

  function Jt(t) {
    for (var e in t) {
      Qt(i = e) || _('Unknown parameter "'.concat(i, '"')), t.toast && (o = e, -1 !== ne.indexOf(o) && _('The parameter "'.concat(o, '" is incompatible with toasts'))), $t(n = e) && g(n, $t(n));
    }

    var n, o, i;
  }

  var Xt = {},
      Gt = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconHtml: void 0,
    toast: !1,
    animation: !0,
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      icon: "swal2-icon-show"
    },
    hideClass: {
      popup: "swal2-hide",
      backdrop: "swal2-backdrop-hide",
      icon: "swal2-icon-hide"
    },
    customClass: void 0,
    target: "body",
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showCancelButton: !1,
    preConfirm: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusCancel: !1,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    showLoaderOnConfirm: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputValue: "",
    inputOptions: {},
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    onBeforeOpen: void 0,
    onOpen: void 0,
    onRender: void 0,
    onClose: void 0,
    onAfterClose: void 0,
    onDestroy: void 0,
    scrollbarPadding: !0
  },
      te = ["title", "titleText", "text", "html", "footer", "icon", "hideClass", "customClass", "allowOutsideClick", "allowEscapeKey", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "buttonsStyling", "reverseButtons", "showCloseButton", "closeButtonHtml", "closeButtonAriaLabel", "imageUrl", "imageWidth", "imageHeight", "imageAlt", "progressSteps", "currentProgressStep", "onClose", "onAfterClose", "onDestroy"],
      ee = {
    animation: 'showClass" and "hideClass'
  },
      ne = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
      oe = Object.freeze({
    isValidParameter: Qt,
    isUpdatableParameter: function isUpdatableParameter(t) {
      return -1 !== te.indexOf(t);
    },
    isDeprecatedParameter: $t,
    argsToParams: function argsToParams(o) {
      var i = {};
      return "object" !== r(o[0]) || w(o[0]) ? ["title", "html", "icon"].forEach(function (t, e) {
        var n = o[e];
        "string" == typeof n || w(n) ? i[t] = n : void 0 !== n && F("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(r(n)));
      }) : s(i, o[0]), i;
    },
    isVisible: function isVisible() {
      return vt($());
    },
    clickConfirm: Ht,
    clickCancel: function clickCancel() {
      return O() && O().click();
    },
    getContainer: Q,
    getPopup: $,
    getTitle: x,
    getContent: P,
    getHtmlContainer: function getHtmlContainer() {
      return e(Y["html-container"]);
    },
    getImage: A,
    getIcon: k,
    getIcons: n,
    getCloseButton: I,
    getActions: T,
    getConfirmButton: E,
    getCancelButton: O,
    getHeader: L,
    getFooter: j,
    getTimerProgressBar: q,
    getFocusableElements: V,
    getValidationMessage: S,
    isLoading: R,
    fire: function fire() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }

      return i(this, e);
    },
    mixin: function mixin(r) {
      return function (t) {
        !function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && l(t, e);
        }(i, t);
        var n,
            o,
            e = (n = i, o = d(), function () {
          var t,
              e = u(n);
          return p(this, o ? (t = u(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
        });

        function i() {
          return a(this, i), e.apply(this, arguments);
        }

        return c(i, [{
          key: "_main",
          value: function value(t) {
            return f(u(i.prototype), "_main", this).call(this, s({}, r, t));
          }
        }]), i;
      }(this);
    },
    queue: function queue(t) {
      var r = this;
      Ft = t;

      function a(t, e) {
        Ft = [], t(e);
      }

      var c = [];
      return new Promise(function (i) {
        !function e(n, o) {
          n < Ft.length ? (document.body.setAttribute("data-swal2-queue-step", n), r.fire(Ft[n]).then(function (t) {
            void 0 !== t.value ? (c.push(t.value), e(n + 1, o)) : a(i, {
              dismiss: t.dismiss
            });
          })) : a(i, {
            value: c
          });
        }(0);
      });
    },
    getQueueStep: It,
    insertQueueStep: function insertQueueStep(t, e) {
      return e && e < Ft.length ? Ft.splice(e, 0, t) : Ft.push(t);
    },
    deleteQueueStep: function deleteQueueStep(t) {
      void 0 !== Ft[t] && Ft.splice(t, 1);
    },
    showLoading: Wt,
    enableLoading: Wt,
    getTimerLeft: function getTimerLeft() {
      return Xt.timeout && Xt.timeout.getTimerLeft();
    },
    stopTimer: Yt,
    resumeTimer: Zt,
    toggleTimer: function toggleTimer() {
      var t = Xt.timeout;
      return t && (t.running ? Yt : Zt)();
    },
    increaseTimer: function increaseTimer(t) {
      if (Xt.timeout) {
        var e = Xt.timeout.increase(t);
        return st(e, !0), e;
      }
    },
    isTimerRunning: function isTimerRunning() {
      return Xt.timeout && Xt.timeout.isRunning();
    }
  });

  function ie() {
    var t,
        e = Bt.innerParams.get(this);
    e && (t = Bt.domCache.get(this), e.showConfirmButton || (it(t.confirmButton), e.showCancelButton || it(t.actions)), ht([t.popup, t.actions], Y.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.cancelButton.disabled = !1);
  }

  function re() {
    null === X.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (X.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(X.previousBodyPadding + function () {
      var t = document.createElement("div");
      t.className = Y["scrollbar-measure"], document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }(), "px"));
  }

  function ae() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }

  function ce() {
    var t = Q(),
        e = $();
    t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start");
  }

  var se = function se() {
    navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) || $().scrollHeight > window.innerHeight - 44 && (Q().style.paddingBottom = "".concat(44, "px"));
  },
      ue = function ue() {
    var e,
        t = Q();
    t.ontouchstart = function (t) {
      e = le(t.target);
    }, t.ontouchmove = function (t) {
      e && (t.preventDefault(), t.stopPropagation());
    };
  },
      le = function le(t) {
    var e = Q();
    return t === e || !(at(e) || "INPUT" === t.tagName || at(P()) && P().contains(t));
  },
      de = {
    swalPromiseResolve: new WeakMap()
  };

  function pe(t, e, n, o) {
    var i;
    n ? he(t, o) : (Kt().then(function () {
      return he(t, o);
    }), Xt.keydownTarget.removeEventListener("keydown", Xt.keydownHandler, {
      capture: Xt.keydownListenerCapture
    }), Xt.keydownHandlerAdded = !1), e.parentNode && !document.body.getAttribute("data-swal2-queue-step") && e.parentNode.removeChild(e), M() && (null !== X.previousBodyPadding && (document.body.style.paddingRight = "".concat(X.previousBodyPadding, "px"), X.previousBodyPadding = null), D(document.body, Y.iosfix) && (i = parseInt(document.body.style.top, 10), ht(document.body, Y.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * i), "undefined" != typeof window && ae() && window.removeEventListener("resize", ce), h(document.body.children).forEach(function (t) {
      t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden");
    })), ht([document.documentElement, document.body], [Y.shown, Y["height-auto"], Y["no-backdrop"], Y["toast-shown"], Y["toast-column"]]);
  }

  function fe(t) {
    var e,
        n,
        o,
        i = $();
    i && (e = Bt.innerParams.get(this)) && !D(i, e.hideClass.popup) && (n = de.swalPromiseResolve.get(this), ht(i, e.showClass.popup), mt(i, e.hideClass.popup), o = Q(), ht(o, e.showClass.backdrop), mt(o, e.hideClass.backdrop), function (t, e, n) {
      var o = Q(),
          i = kt && ct(e),
          r = n.onClose,
          a = n.onAfterClose;

      if (r !== null && typeof r === "function") {
        r(e);
      }

      if (i) {
        me(t, e, o, a);
      } else {
        pe(t, o, J(), a);
      }
    }(this, i, e), void 0 !== t ? (t.isDismissed = void 0 !== t.dismiss, t.isConfirmed = void 0 === t.dismiss) : t = {
      isDismissed: !0,
      isConfirmed: !1
    }, n(t || {}));
  }

  var me = function me(t, e, n, o) {
    Xt.swalCloseEventFinishedCallback = pe.bind(null, t, n, J(), o), e.addEventListener(kt, function (t) {
      t.target === e && (Xt.swalCloseEventFinishedCallback(), delete Xt.swalCloseEventFinishedCallback);
    });
  },
      he = function he(t, e) {
    setTimeout(function () {
      "function" == typeof e && e(), t._destroy();
    });
  };

  function ge(t, e, n) {
    var o = Bt.domCache.get(t);
    e.forEach(function (t) {
      o[t].disabled = n;
    });
  }

  function ve(t, e) {
    if (!t) return !1;
    if ("radio" === t.type) for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) {
      n[o].disabled = e;
    } else t.disabled = e;
  }

  var be = function () {
    function n(t, e) {
      a(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start();
    }

    return c(n, [{
      key: "start",
      value: function value() {
        return this.running || (this.running = !0, this.started = new Date(), this.id = setTimeout(this.callback, this.remaining)), this.remaining;
      }
    }, {
      key: "stop",
      value: function value() {
        return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date() - this.started), this.remaining;
      }
    }, {
      key: "increase",
      value: function value(t) {
        var e = this.running;
        return e && this.stop(), this.remaining += t, e && this.start(), this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function value() {
        return this.running && (this.stop(), this.start()), this.remaining;
      }
    }, {
      key: "isRunning",
      value: function value() {
        return this.running;
      }
    }]), n;
  }(),
      ye = {
    email: function email(t, e) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address");
    },
    url: function url(t, e) {
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL");
    }
  };

  function we(t) {
    var e, n;
    (e = t).inputValidator || Object.keys(ye).forEach(function (t) {
      e.input === t && (e.inputValidator = ye[t]);
    }), t.showLoaderOnConfirm && !t.preConfirm && _("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), t.animation = W(t.animation), (n = t).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (_('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), yt(t);
  }

  function Ce(t) {
    var e = Q(),
        n = $();
    "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n);
    var o = window.getComputedStyle(document.body).overflowY;
    je(e, n, t), Te(e, n), M() && (Le(e, t.scrollbarPadding, o), h(document.body.children).forEach(function (t) {
      t === Q() || function (t, e) {
        if ("function" == typeof t.contains) return t.contains(e);
      }(t, Q()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"));
    })), J() || Xt.previousActiveElement || (Xt.previousActiveElement = document.activeElement), "function" == typeof t.onOpen && setTimeout(function () {
      return t.onOpen(n);
    }), ht(e, Y["no-transition"]);
  }

  function ke(t) {
    var e,
        n = $();
    t.target === n && (e = Q(), n.removeEventListener(kt, ke), e.style.overflowY = "auto");
  }

  function xe(t, e) {
    "select" === e.input || "radio" === e.input ? Me(t, e) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(e.input) && (v(e.inputValue) || y(e.inputValue)) && Re(t, e);
  }

  function Pe(t, e) {
    t.disableButtons(), e.input ? Ne(t, e) : Ue(t, e, !0);
  }

  function Ae(t, e) {
    t.disableButtons(), e(K.cancel);
  }

  function Be(t, e) {
    t.closePopup({
      value: e
    });
  }

  function Se(e, t, n, o) {
    t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
      capture: t.keydownListenerCapture
    }), t.keydownHandlerAdded = !1), n.toast || (t.keydownHandler = function (t) {
      return ze(e, t, o);
    }, t.keydownTarget = n.keydownListenerCapture ? window : $(), t.keydownListenerCapture = n.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
      capture: t.keydownListenerCapture
    }), t.keydownHandlerAdded = !0);
  }

  function Ee(t, e, n) {
    var o = V(),
        i = 0;
    if (i < o.length) return (e += n) === o.length ? e = 0 : -1 === e && (e = o.length - 1), o[e].focus();
    $().focus();
  }

  function Oe(t, e, n) {
    Bt.innerParams.get(t).toast ? Qe(t, e, n) : (Je(e), Xe(e), Ge(t, e, n));
  }

  var Te = function Te(t, e) {
    kt && ct(e) ? (t.style.overflowY = "hidden", e.addEventListener(kt, ke)) : t.style.overflowY = "auto";
  },
      Le = function Le(t, e, n) {
    var o;
    (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !D(document.body, Y.iosfix) && (o = document.body.scrollTop, document.body.style.top = "".concat(-1 * o, "px"), mt(document.body, Y.iosfix), ue(), se()), "undefined" != typeof window && ae() && (ce(), window.addEventListener("resize", ce)), e && "hidden" !== n && re(), setTimeout(function () {
      t.scrollTop = 0;
    });
  },
      je = function je(t, e, n) {
    mt(t, n.showClass.backdrop), ot(e), mt(e, n.showClass.popup), mt([document.documentElement, document.body], Y.shown), n.heightAuto && n.backdrop && !n.toast && mt([document.documentElement, document.body], Y["height-auto"]);
  },
      qe = function qe(t) {
    return t.checked ? 1 : 0;
  },
      Ie = function Ie(t) {
    return t.checked ? t.value : null;
  },
      Ve = function Ve(t) {
    return t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null;
  },
      Me = function Me(e, n) {
    function o(t) {
      return He[n.input](i, De(t), n);
    }

    var i = P();
    v(n.inputOptions) || y(n.inputOptions) ? (Wt(), b(n.inputOptions).then(function (t) {
      e.hideLoading(), o(t);
    })) : "object" === r(n.inputOptions) ? o(n.inputOptions) : F("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)));
  },
      Re = function Re(e, n) {
    var o = e.getInput();
    it(o), b(n.inputValue).then(function (t) {
      o.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t), ot(o), o.focus(), e.hideLoading();
    })["catch"](function (t) {
      F("Error in inputValue promise: ".concat(t)), o.value = "", ot(o), o.focus(), e.hideLoading();
    });
  },
      He = {
    select: function select(t, e, i) {
      function r(t, e, n) {
        var o = document.createElement("option");
        o.value = n, H(o, e), i.inputValue.toString() === n.toString() && (o.selected = !0), t.appendChild(o);
      }

      var a = gt(t, Y.select);
      e.forEach(function (t) {
        var e,
            n = t[0],
            o = t[1];
        Array.isArray(o) ? ((e = document.createElement("optgroup")).label = n, e.disabled = !1, a.appendChild(e), o.forEach(function (t) {
          return r(e, t[1], t[0]);
        })) : r(a, o, n);
      }), a.focus();
    },
    radio: function radio(t, e, a) {
      var c = gt(t, Y.radio);
      e.forEach(function (t) {
        var e = t[0],
            n = t[1],
            o = document.createElement("input"),
            i = document.createElement("label");
        o.type = "radio", o.name = Y.radio, o.value = e, a.inputValue.toString() === e.toString() && (o.checked = !0);
        var r = document.createElement("span");
        H(r, n), r.className = Y.label, i.appendChild(o), i.appendChild(r), c.appendChild(i);
      });
      var n = c.querySelectorAll("input");
      n.length && n[0].focus();
    }
  },
      De = function o(n) {
    var i = [];
    return "undefined" != typeof Map && n instanceof Map ? n.forEach(function (t, e) {
      var n = t;
      "object" === r(n) && (n = o(n)), i.push([e, n]);
    }) : Object.keys(n).forEach(function (t) {
      var e = n[t];
      "object" === r(e) && (e = o(e)), i.push([t, e]);
    }), i;
  },
      Ne = function Ne(e, n) {
    var o = function (t, e) {
      var n = t.getInput();
      if (!n) return null;

      switch (e.input) {
        case "checkbox":
          return qe(n);

        case "radio":
          return Ie(n);

        case "file":
          return Ve(n);

        default:
          return e.inputAutoTrim ? n.value.trim() : n.value;
      }
    }(e, n);

    n.inputValidator ? (e.disableInput(), Promise.resolve().then(function () {
      return b(n.inputValidator(o, n.validationMessage));
    }).then(function (t) {
      e.enableButtons(), e.enableInput(), t ? e.showValidationMessage(t) : Ue(e, n, o);
    })) : e.getInput().checkValidity() ? Ue(e, n, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage));
  },
      Ue = function Ue(e, t, n) {
    t.showLoaderOnConfirm && Wt(), t.preConfirm ? (e.resetValidationMessage(), Promise.resolve().then(function () {
      return b(t.preConfirm(n, t.validationMessage));
    }).then(function (t) {
      vt(S()) || !1 === t ? e.hideLoading() : Be(e, void 0 === t ? n : t);
    })) : Be(e, n);
  },
      _e = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"],
      Fe = ["Escape", "Esc"],
      ze = function ze(t, e, n) {
    var o = Bt.innerParams.get(t);
    o.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? We(t, e, o) : "Tab" === e.key ? Ke(e, o) : -1 !== _e.indexOf(e.key) ? Ye() : -1 !== Fe.indexOf(e.key) && Ze(e, o, n);
  },
      We = function We(t, e, n) {
    if (!e.isComposing && e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML) {
      if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
      Ht(), e.preventDefault();
    }
  },
      Ke = function Ke(t) {
    for (var e = t.target, n = V(), o = -1, i = 0; i < n.length; i++) {
      if (e === n[i]) {
        o = i;
        break;
      }
    }

    t.shiftKey ? Ee(0, o, -1) : Ee(0, o, 1), t.stopPropagation(), t.preventDefault();
  },
      Ye = function Ye() {
    var t = E(),
        e = O();
    document.activeElement === t && vt(e) ? e.focus() : document.activeElement === e && vt(t) && t.focus();
  },
      Ze = function Ze(t, e, n) {
    W(e.allowEscapeKey) && (t.preventDefault(), n(K.esc));
  },
      Qe = function Qe(e, t, n) {
    t.popup.onclick = function () {
      var t = Bt.innerParams.get(e);
      t.showConfirmButton || t.showCancelButton || t.showCloseButton || t.input || n(K.close);
    };
  },
      $e = !1,
      Je = function Je(e) {
    e.popup.onmousedown = function () {
      e.container.onmouseup = function (t) {
        e.container.onmouseup = void 0, t.target === e.container && ($e = !0);
      };
    };
  },
      Xe = function Xe(e) {
    e.container.onmousedown = function () {
      e.popup.onmouseup = function (t) {
        e.popup.onmouseup = void 0, t.target !== e.popup && !e.popup.contains(t.target) || ($e = !0);
      };
    };
  },
      Ge = function Ge(n, o, i) {
    o.container.onclick = function (t) {
      var e = Bt.innerParams.get(n);
      $e ? $e = !1 : t.target === o.container && W(e.allowOutsideClick) && i(K.backdrop);
    };
  };

  var tn = function tn(t, e, n) {
    var o = q();
    it(o), e.timer && (t.timeout = new be(function () {
      n("timer"), delete t.timeout;
    }, e.timer), e.timerProgressBar && (ot(o), setTimeout(function () {
      t.timeout.running && st(e.timer);
    })));
  },
      en = function en(t, e) {
    if (!e.toast) return W(e.allowEnterKey) ? e.focusCancel && vt(t.cancelButton) ? t.cancelButton.focus() : e.focusConfirm && vt(t.confirmButton) ? t.confirmButton.focus() : void Ee(0, -1, 1) : nn();
  },
      nn = function nn() {
    document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur();
  };

  var on,
      rn = function rn(t) {
    for (var e in t) {
      t[e] = new WeakMap();
    }
  },
      an = Object.freeze({
    hideLoading: ie,
    disableLoading: ie,
    getInput: function getInput(t) {
      var e = Bt.innerParams.get(t || this),
          n = Bt.domCache.get(t || this);
      return n ? G(n.content, e.input) : null;
    },
    close: fe,
    closePopup: fe,
    closeModal: fe,
    closeToast: fe,
    enableButtons: function enableButtons() {
      ge(this, ["confirmButton", "cancelButton"], !1);
    },
    disableButtons: function disableButtons() {
      ge(this, ["confirmButton", "cancelButton"], !0);
    },
    enableInput: function enableInput() {
      return ve(this.getInput(), !1);
    },
    disableInput: function disableInput() {
      return ve(this.getInput(), !0);
    },
    showValidationMessage: function showValidationMessage(t) {
      var e = Bt.domCache.get(this);
      H(e.validationMessage, t);
      var n = window.getComputedStyle(e.popup);
      e.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left")), e.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right")), ot(e.validationMessage);
      var o = this.getInput();
      o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", Y["validation-message"]), tt(o), mt(o, Y.inputerror));
    },
    resetValidationMessage: function resetValidationMessage() {
      var t = Bt.domCache.get(this);
      t.validationMessage && it(t.validationMessage);
      var e = this.getInput();
      e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), ht(e, Y.inputerror));
    },
    getProgressSteps: function getProgressSteps() {
      return Bt.domCache.get(this).progressSteps;
    },
    _main: function _main(t) {
      Jt(t), Xt.currentInstance && Xt.currentInstance._destroy(), Xt.currentInstance = this;

      var e = function (t) {
        var e = s({}, Gt.showClass, t.showClass),
            n = s({}, Gt.hideClass, t.hideClass),
            o = s({}, Gt, t);

        if (o.showClass = e, o.hideClass = n, t.animation === false) {
          o.showClass = {
            popup: "swal2-noanimation",
            backdrop: "swal2-noanimation"
          };
          o.hideClass = {};
        }

        return o;
      }(t);

      we(e), Object.freeze(e), Xt.timeout && (Xt.timeout.stop(), delete Xt.timeout), clearTimeout(Xt.restoreFocusTimeout);

      var n = function (t) {
        var e = {
          popup: $(),
          container: Q(),
          content: P(),
          actions: T(),
          confirmButton: E(),
          cancelButton: O(),
          closeButton: I(),
          validationMessage: S(),
          progressSteps: B()
        };
        return Bt.domCache.set(t, e), e;
      }(this);

      return Rt(this, e), Bt.innerParams.set(this, e), function (n, o, i) {
        return new Promise(function (t) {
          var e = function t(e) {
            n.closePopup({
              dismiss: e
            });
          };

          de.swalPromiseResolve.set(n, t);

          o.confirmButton.onclick = function () {
            return Pe(n, i);
          };

          o.cancelButton.onclick = function () {
            return Ae(n, e);
          };

          o.closeButton.onclick = function () {
            return e(K.close);
          };

          Oe(n, o, e);
          Se(n, Xt, i, e);

          if (i.toast && (i.input || i.footer || i.showCloseButton)) {
            mt(document.body, Y["toast-column"]);
          } else {
            ht(document.body, Y["toast-column"]);
          }

          xe(n, i);
          Ce(i);
          tn(Xt, i, e);
          en(o, i);
          setTimeout(function () {
            o.container.scrollTop = 0;
          });
        });
      }(this, n, e);
    },
    update: function update(e) {
      var t = $(),
          n = Bt.innerParams.get(this);
      if (!t || D(t, n.hideClass.popup)) return _("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
      var o = {};
      Object.keys(e).forEach(function (t) {
        sn.isUpdatableParameter(t) ? o[t] = e[t] : _('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'));
      });
      var i = s({}, n, o);
      Rt(this, i), Bt.innerParams.set(this, i), Object.defineProperties(this, {
        params: {
          value: s({}, this.params, e),
          writable: !1,
          enumerable: !0
        }
      });
    },
    _destroy: function _destroy() {
      var t = Bt.domCache.get(this),
          e = Bt.innerParams.get(this);
      e && (t.popup && Xt.swalCloseEventFinishedCallback && (Xt.swalCloseEventFinishedCallback(), delete Xt.swalCloseEventFinishedCallback), Xt.deferDisposalTimer && (clearTimeout(Xt.deferDisposalTimer), delete Xt.deferDisposalTimer), "function" == typeof e.onDestroy && e.onDestroy(), delete this.params, delete Xt.keydownHandler, delete Xt.keydownTarget, rn(Bt), rn(de));
    }
  }),
      cn = function () {
    function r() {
      if (a(this, r), "undefined" != typeof window) {
        "undefined" == typeof Promise && F("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), on = this;

        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
          e[n] = arguments[n];
        }

        var o = Object.freeze(this.constructor.argsToParams(e));
        Object.defineProperties(this, {
          params: {
            value: o,
            writable: !1,
            enumerable: !0,
            configurable: !0
          }
        });

        var i = this._main(this.params);

        Bt.promise.set(this, i);
      }
    }

    return c(r, [{
      key: "then",
      value: function value(t) {
        return Bt.promise.get(this).then(t);
      }
    }, {
      key: "finally",
      value: function value(t) {
        return Bt.promise.get(this)["finally"](t);
      }
    }]), r;
  }();

  s(cn.prototype, an), s(cn, oe), Object.keys(an).forEach(function (t) {
    cn[t] = function () {
      if (on) return on[t].apply(on, arguments);
    };
  }), cn.DismissReason = K, cn.version = "9.17.0";
  var sn = cn;
  return sn["default"] = sn;
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
!function (a, b) {
  "function" == typeof define && define.amd ? define(b) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b() : a.VMasker = b();
}(this, function () {
  var a = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91, 92, 93],
      b = function b(_b) {
    for (var c = 0, d = a.length; c < d; c++) {
      if (_b == a[c]) return !1;
    }

    return !0;
  },
      c = function c(a) {
    return a = a || {}, a = {
      delimiter: a.delimiter || ".",
      lastOutput: a.lastOutput,
      precision: a.hasOwnProperty("precision") ? a.precision : 2,
      separator: a.separator || ",",
      showSignal: a.showSignal,
      suffixUnit: a.suffixUnit && " " + a.suffixUnit.replace(/[\s]/g, "") || "",
      unit: a.unit && a.unit.replace(/[\s]/g, "") + " " || "",
      zeroCents: a.zeroCents
    }, a.moneyPrecision = a.zeroCents ? 0 : a.precision, a;
  },
      d = function d(a, b, c) {
    for (; b < a.length; b++) {
      "9" !== a[b] && "A" !== a[b] && "S" !== a[b] || (a[b] = c);
    }

    return a;
  },
      e = function e(a) {
    this.elements = a;
  };

  e.prototype.unbindElementToMask = function () {
    for (var a = 0, b = this.elements.length; a < b; a++) {
      this.elements[a].lastOutput = "", this.elements[a].onkeyup = !1, this.elements[a].onkeydown = !1, this.elements[a].value.length && (this.elements[a].value = this.elements[a].value.replace(/\D/g, ""));
    }
  }, e.prototype.bindElementToMask = function (a) {
    for (var c = this, d = function d(_d2) {
      _d2 = _d2 || window.event;
      var e = _d2.target || _d2.srcElement;
      b(_d2.keyCode) && setTimeout(function () {
        c.opts.lastOutput = e.lastOutput, e.value = f[a](e.value, c.opts), e.lastOutput = e.value, e.setSelectionRange && c.opts.suffixUnit && e.setSelectionRange(e.value.length, e.value.length - c.opts.suffixUnit.length);
      }, 0);
    }, e = 0, g = this.elements.length; e < g; e++) {
      this.elements[e].lastOutput = "", this.elements[e].onkeyup = d, this.elements[e].value.length && (this.elements[e].value = f[a](this.elements[e].value, this.opts));
    }
  }, e.prototype.maskMoney = function (a) {
    this.opts = c(a), this.bindElementToMask("toMoney");
  }, e.prototype.maskNumber = function () {
    this.opts = {}, this.bindElementToMask("toNumber");
  }, e.prototype.maskAlphaNum = function () {
    this.opts = {}, this.bindElementToMask("toAlphaNumeric");
  }, e.prototype.maskPattern = function (a) {
    this.opts = {
      pattern: a
    }, this.bindElementToMask("toPattern");
  }, e.prototype.unMask = function () {
    this.unbindElementToMask();
  };

  var f = function f(a) {
    if (!a) throw new Error("VanillaMasker: There is no element to bind.");
    var b = "length" in a ? a.length ? a : [] : [a];
    return new e(b);
  };

  return f.toMoney = function (a, b) {
    if (b = c(b), b.zeroCents) {
      b.lastOutput = b.lastOutput || "";
      var d = "(" + b.separator + "[0]{0," + b.precision + "})",
          e = new RegExp(d, "g"),
          f = a.toString().replace(/[\D]/g, "").length || 0,
          g = b.lastOutput.toString().replace(/[\D]/g, "").length || 0;
      a = a.toString().replace(e, ""), f < g && (a = a.slice(0, a.length - 1));
    }

    var h = a.toString().replace(/[\D]/g, ""),
        i = new RegExp("^(0|\\" + b.delimiter + ")"),
        j = new RegExp("(\\" + b.separator + ")$"),
        k = h.substr(0, h.length - b.moneyPrecision),
        l = k.substr(0, k.length % 3),
        m = new Array(b.precision + 1).join("0");
    k = k.substr(k.length % 3, k.length);

    for (var n = 0, o = k.length; n < o; n++) {
      n % 3 == 0 && (l += b.delimiter), l += k[n];
    }

    l = l.replace(i, ""), l = l.length ? l : "0";
    var p = "";

    if (!0 === b.showSignal && (p = a < 0 || a.startsWith && a.startsWith("-") ? "-" : ""), !b.zeroCents) {
      var q = h.length - b.precision,
          r = h.substr(q, b.precision),
          s = r.length;
      m = (m + r).slice(-(b.precision > s ? b.precision : s));
    }

    return (b.unit + p + l + b.separator + m).replace(j, "") + b.suffixUnit;
  }, f.toPattern = function (a, b) {
    var c,
        e = "object" == _typeof(b) ? b.pattern : b,
        f = e.replace(/\W/g, ""),
        g = e.split(""),
        h = a.toString().replace(/\W/g, ""),
        i = h.replace(/\W/g, ""),
        j = 0,
        k = g.length,
        l = "object" == _typeof(b) ? b.placeholder : void 0;

    for (c = 0; c < k; c++) {
      if (j >= h.length) {
        if (f.length == i.length) return g.join("");
        if (void 0 !== l && f.length > i.length) return d(g, c, l).join("");
        break;
      }

      if ("9" === g[c] && h[j].match(/[0-9]/) || "A" === g[c] && h[j].match(/[a-zA-Z]/) || "S" === g[c] && h[j].match(/[0-9a-zA-Z]/)) g[c] = h[j++];else if ("9" === g[c] || "A" === g[c] || "S" === g[c]) return void 0 !== l ? d(g, c, l).join("") : g.slice(0, c).join("");
    }

    return g.join("").substr(0, c);
  }, f.toNumber = function (a) {
    return a.toString().replace(/(?!^-)[^0-9]/g, "");
  }, f.toAlphaNumeric = function (a) {
    return a.toString().replace(/[^a-z0-9 ]+/i, "");
  }, f;
});
/*
* helper para setarmos os parametros do utm a partir da query string
* */

function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1));
  var sURLVariables = sPageURL.split('&');
  var sParameterName;
  var i = 0;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === '' ? true : sParameterName[1];
    }
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

if (getUrlParameter("utm_source")) {
  setCookie("utm_source", getUrlParameter("utm_source"), 30);
  setCookie("utm_today", 1, 30);
} else if (!getUrlParameter("utm_source") && !getCookie("utm_today") && document.referrer !== "" && document.referrer.search("google") > 0) {
  setCookie("utm_source", "google", 30);
  setCookie("utm_medium", "organic", 30);
  setCookie("utm_today", 1, 30);
} else if (!getUrlParameter("utm_source") && !getCookie("utm_today") && document.referrer !== "") {
  setCookie("utm_source", "referral", 30);
  setCookie("utm_medium", document.referrer, 30);
  setCookie("utm_today", 1, 30);
}

if (getUrlParameter("utm_medium")) {
  setCookie("utm_medium", getUrlParameter("utm_medium"), 30);
}

if (getUrlParameter("utm_campaign") && getUrlParameter("utm_campaign") !== "") {
  setCookie("utm_campaign", getUrlParameter("utm_campaign"), 30);
}

if (getUrlParameter("utm_term") && getUrlParameter("utm_term") !== "") {
  setCookie("utm_term", getUrlParameter("utm_term"), 30);
}

if (getUrlParameter("utm_content") && getUrlParameter("utm_content") !== "") {
  setCookie("utm_content", getUrlParameter("utm_content"), 30);
}

if (getUrlParameter("gclid") && getUrlParameter("gclid") !== "") {
  setCookie("gclid", getUrlParameter("gclid"), 30);
}

function setupCustomFormFieldsVisibility() {
  $.fn.disableFormFields = function () {
    this.find('select').each(function () {
      $(this).attr('disabled', true);
    });
    this.find('input').each(function () {
      $(this).attr('disabled', true);
    }); // Bootstrap styles required

    this.addClass('d-none');
  };

  $.fn.enableFormFields = function () {
    this.find('select').each(function () {
      $(this).attr('disabled', false);
    });
    this.find('input').each(function () {
      $(this).attr('disabled', false);
    }); // Bootstrap styles required

    this.removeClass('d-none');
  };
}

function getFieldValue(_ref11) {
  var name = _ref11.name,
      type = _ref11.type;

  if (!type) {
    type = 'input';
  }

  if (type === 'input') {
    return $("".concat(type, "[name=\"").concat(name, "\"]")).val();
  }

  if (type === 'select') {
    return $("".concat(type, "[name=\"").concat(name, "\"]")).children('option:selected').text();
  }
}

function setCustomFileLabel() {
  $('.custom-file-input').change(function () {
    var file = $(this)[0].files[0].name;
    var fileName = $('.custom-file-label');
    fileName.text(file);
  });
}

function setInvalidInput(_ref12) {
  var input = _ref12.input,
      message = _ref12.message;
  input.setCustomValidity(message || 'invalid');
  input.classList.add('is-invalid');
}

function setValidInput(_ref13) {
  var input = _ref13.input;
  input.setCustomValidity('');
  input.classList.remove('is-invalid');
}

function guideUserToTheFirstError() {
  var currentScrollPosition = $(window).scrollTop();
  var invalidInputsSelectors = ['.form-control:invalid', '.custom-control-input:invalid', '.form-control.is-invalid', '.custom-control-input.is-invalid'];
  var $invalidInputs = $(invalidInputsSelectors.join(', ')); // Selects the parent to get input label

  var $firstInvalidInput = $invalidInputs.first().parent();
  var firstInvalidInputOffsetTop = $firstInvalidInput.offset().top;

  if (currentScrollPosition <= firstInvalidInputOffsetTop) {
    return;
  }

  if (_isFormOnModal()) {
    _scrollToError({
      container: '.modal.show'
    });

    return;
  }

  _scrollToError({
    container: 'html, body'
  });

  function _scrollToError(_ref14) {
    var container = _ref14.container;
    var animateConfig = {
      properties: {
        scrollTop: $firstInvalidInput.offset().top - _getStickyHeaderOffset()
      },
      options: {
        duration: 1000
      }
    };
    $(container).animate(animateConfig.properties, animateConfig.options);
  }

  function _isFormOnModal() {
    return $('body').hasClass('modal-open');
  }

  function _getStickyHeaderOffset() {
    var $stickyHeaderSticky = $('.js-header-sticky');

    if (!$stickyHeaderSticky.length) {
      return 0;
    }

    return $stickyHeaderSticky.innerHeight();
  }
}

function validateFullName(_ref15) {
  var fullNameElement = _ref15.fullNameElement,
      invalidMessage = _ref15.invalidMessage;
  var fullName = fullNameElement.value; // Only for themed form by Bootstrap

  var invalidFeedbackElement = fullNameElement.nextElementSibling;
  var defaultInvalidFeedback = invalidFeedbackElement.innerText;

  if (!isValidFullName()) {
    setInvalidInput({
      input: fullNameElement,
      message: invalidMessage
    });
    invalidFeedbackElement.innerText = invalidMessage;
    return;
  }

  setValidInput({
    input: fullNameElement
  });
  invalidFeedbackElement.innerText = defaultInvalidFeedback;

  function isValidFullName() {
    return fullName.trim().split(' ').length >= 2;
  }
}

function setupFullNameValidate() {
  var fullNameElements = document.querySelectorAll('.js-full-name');

  if (!fullNameElements.length) {
    return;
  }

  fullNameElements.forEach(function (fullNameElement) {
    // Execute as soon as it's found
    fullNameValidateHandler({
      fullNameElement: fullNameElement
    });
    fullNameElement.addEventListener('blur', function () {
      // Execute on every blur event propagation
      fullNameValidateHandler({
        fullNameElement: fullNameElement
      });
    });
  });

  function fullNameValidateHandler(_ref16) {
    var fullNameElement = _ref16.fullNameElement;

    if (!fullNameElement.value.length) {
      return;
    }

    var invalidMessage = 'Por favor, insira nome e sobrenome';
    validateFullName({
      fullNameElement: fullNameElement,
      invalidMessage: invalidMessage
    });
  }
}

function setupBrazilianCellphoneValidate() {
  var phoneInputs = document.querySelectorAll('.js-cellphone-validate');
  phoneInputs.forEach(function (phoneInput) {
    phoneInput.addEventListener('blur', function () {
      if (!isValidPhone(phoneInput)) {
        setInvalidInput({
          input: phoneInput,
          message: 'Por favor, insira um número de celular válido'
        });
        return;
      }

      setValidInput({
        input: phoneInput
      });
    });
  });

  function isValidPhone(phoneValue) {
    var sanitizedPhone = phoneValue.value.replace(/\D/g, ''); // Check if has phone number and it has 11 characters

    return sanitizedPhone.length && sanitizedPhone.length === 11;
  }
}

function setupBrazilianPhoneValidate() {
  var phoneInputs = document.querySelectorAll('.js-phone-validate');
  phoneInputs.forEach(function (phoneInput) {
    phoneInput.addEventListener('blur', function () {
      if (!isValidPhone(phoneInput)) {
        setInvalidInput({
          input: phoneInput,
          message: 'Por favor, insira um número de telefone válido'
        });
        return;
      }

      setValidInput({
        input: phoneInput
      });
    });
  });

  function isValidPhone(phoneValue) {
    var sanitizedPhone = phoneValue.value.replace(/\D/g, ''); // Check if has phone number and it has 11 characters

    return sanitizedPhone.length && sanitizedPhone.length === 10;
  }
}

function initializeFormHelpers() {
  // Form usability
  setCustomFileLabel();
  setupCustomFormFieldsVisibility(); // Validators

  setupFullNameValidate();
  setupBrazilianCellphoneValidate();
  setupBrazilianPhoneValidate();
}

var CpfCnpjValidators = /*#__PURE__*/function () {
  function CpfCnpjValidators() {
    _classCallCheck(this, CpfCnpjValidators);

    this.sizes = {
      cpf: 11,
      cnpj: 14
    };
    this.selectors = {
      cpf: '.mask-cpf',
      cnpj: '.mask-cnpj'
    };
  }

  _createClass(CpfCnpjValidators, [{
    key: "sanitize",
    value: function sanitize(cpfOrCnpj) {
      return cpfOrCnpj.replace(/[^\d]+/g, '');
    }
  }, {
    key: "checkCNPJ",
    value: function checkCNPJ(cnpjInput) {
      var sanitizedCnpj = this.sanitize(cnpjInput.value);
      var sizes = {
        full: sanitizedCnpj.length,
        prefix: sanitizedCnpj.length - 2
      };
      var cnpj = {
        number: {
          full: sanitizedCnpj,
          prefix: sanitizedCnpj.substring(0, sizes.prefix),
          suffix: sanitizedCnpj.substring(sizes.prefix)
        }
      };

      if (!cnpj.number.full || cnpj.number.full.length !== this.sizes.cnpj) {
        setInvalidInput({
          input: cnpjInput
        });
      }

      if (cnpj.number.full === '00000000000000' || cnpj.number.full === '11111111111111' || cnpj.number.full === '22222222222222' || cnpj.number.full === '33333333333333' || cnpj.number.full === '44444444444444' || cnpj.number.full === '55555555555555' || cnpj.number.full === '66666666666666' || cnpj.number.full === '77777777777777' || cnpj.number.full === '88888888888888' || cnpj.number.full === '99999999999999') {
        setInvalidInput({
          input: cnpjInput
        });
        return;
      }

      var sum = 0;
      var positionIndex = sizes.prefix - 7;

      for (var i = sizes.prefix; i >= 1; i--) {
        sum += cnpj.number.full.charAt(sizes.prefix - i) * positionIndex--;

        if (positionIndex < 2) {
          positionIndex = 9;
        }
      }

      var result = sum % 11 < 2 ? 0 : 11 - sum % 11;

      if (result !== Number(cnpj.number.suffix.charAt(0))) {
        setInvalidInput({
          input: cnpjInput
        });
        return;
      }

      sizes.prefix = sizes.prefix + 1;
      sum = 0;
      positionIndex = sizes.prefix - 7;

      for (var _i16 = sizes.prefix; _i16 >= 1; _i16--) {
        sum += cnpj.number.full.charAt(sizes.prefix - _i16) * positionIndex--;

        if (positionIndex < 2) {
          positionIndex = 9;
        }
      }

      result = sum % 11 < 2 ? 0 : 11 - sum % 11;

      if (result !== Number(cnpj.number.suffix.charAt(1))) {
        setInvalidInput({
          input: cnpjInput
        });
        return;
      }

      setValidInput({
        input: cnpjInput
      });
      return true;
    }
  }, {
    key: "checkCPF",
    value: function checkCPF(cpfInput) {
      var sanitizedCpf = this.sanitize(cpfInput.value);
      var cpf = {
        fullNumber: sanitizedCpf,
        prefix: sanitizedCpf.substr(0, 9),
        suffix: sanitizedCpf.substr(9, 2)
      };

      if (!cpf.fullNumber || cpf.fullNumber.length !== this.sizes.cpf) {
        setInvalidInput({
          input: cpfInput
        });
        return;
      }

      if (cpf.fullNumber === '00000000000' || cpf.fullNumber === '11111111111' || cpf.fullNumber === '22222222222' || cpf.fullNumber === '33333333333' || cpf.fullNumber === '44444444444' || cpf.fullNumber === '55555555555' || cpf.fullNumber === '66666666666' || cpf.fullNumber === '77777777777' || cpf.fullNumber === '88888888888' || cpf.fullNumber === '99999999999') {
        setInvalidInput({
          input: cpfInput
        });
        return;
      }

      var d1 = 0;

      for (var i = 0; i < 9; i++) {
        d1 += cpf.prefix.charAt(i) * (10 - i);
      }

      if (d1 === 0) {
        setInvalidInput({
          input: cpfInput
        });
        return;
      }

      d1 = 11 - d1 % 11;

      if (d1 > 9) {
        d1 = 0;
      }

      if (Number(cpf.suffix.charAt(0)) !== d1) {
        setInvalidInput({
          input: cpfInput
        });
        return;
      }

      d1 *= 2;

      for (var _i17 = 0; _i17 < 9; _i17++) {
        d1 += cpf.prefix.charAt(_i17) * (11 - _i17);
      }

      d1 = 11 - d1 % 11;

      if (d1 > 9) {
        d1 = 0;
      }

      if (Number(cpf.suffix.charAt(1)) !== d1) {
        setInvalidInput({
          input: cpfInput
        });
        return;
      }

      setValidInput({
        input: cpfInput
      });
      return true;
    }
  }]);

  return CpfCnpjValidators;
}(); // Hide Header on scroll down


function setupFmdHeader() {
  // Return element's offset top
  function getOffsetTop(selector) {
    return document.getElementsByClassName(selector)[0].getBoundingClientRect().top + document.body.scrollTop;
  } // Return if selector was found


  function isElementSet(selector) {
    return !!document.getElementsByClassName(selector).length;
  }

  function showHeader() {
    header.classList.remove(hideClass);
    header.style.transform = 'none';
  }

  function hideHeader() {
    header.classList.add(hideClass);
    header.style.transform = 'translateY(-100%)';
  }

  function setStickyHeader() {
    header.classList.add(fixedClass);
    header.style.position = 'fixed';
  }

  function unsetStickyHeader() {
    header.classList.remove(fixedClass);
    header.style.position = headerInitialPosition;
  }

  function setParentPaddingTop() {
    var newPaddingTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : parentPaddingTop;

    if (isHeaderRelative) {
      header.parentNode.style.paddingTop = newPaddingTop;
    }
  }

  function setHeaderTransition(newTransition) {
    header.style.transitionDuration = "".concat(newTransition, "ms");
  } // Initialize variables


  var didScroll;
  var lastScrollTop = 0;
  var fixedTimer;
  var delta = 5; // Minimum scroll value
  // Set classes

  var headerClass = 'fmd-header';
  var startTargetClass = 'fmd-header-start-target';
  var endTargetClass = 'fmd-header-end-target';
  var hideClass = 'fmd-header-is-hidden';
  var fixedClass = 'fmd-header-is-fixed'; // If fixed header class wasn't found

  if (!isElementSet(headerClass)) {
    console.error("Use a classe \"".concat(headerClass, "\" no <header> para ativar o fixed header"));
    return;
  } // Select fixed header


  var header = document.getElementsByClassName(headerClass)[0];
  var headerInitialPosition = getComputedStyle(header)['position'];
  var headerTransition = Number(getComputedStyle(header)['transition-duration'].replace('s', '')) * 1000; // If header is relative, set it's parent padding-top with header height

  var isHeaderRelative = ['relative', 'sticky', 'initial'].includes(headerInitialPosition);
  var parentPaddingTop = isHeaderRelative ? header.offsetHeight : '0'; // Start target where header will be fixed | Default: Window Height (100vh)

  var startTarget = isElementSet(startTargetClass) ? getOffsetTop(startTargetClass) : window.outerHeight; // End target where header will be shown | Default: The page bottom

  var endTarget = isElementSet(endTargetClass) ? getOffsetTop(endTargetClass) : document.body.scrollHeight; // Scroll event listener

  $(window).scroll(function (event) {
    didScroll = true;
  }); // Watcher that calls function if the window was scrolled

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, headerTransition); // When window gets scrolled

  function hasScrolled() {
    var st = window.pageYOffset; // Update last scroll top

    function updateLastScroll() {
      lastScrollTop = st;
    } // Make sure they scroll more than delta


    if (Math.abs(lastScrollTop - st) <= delta) {
      return;
    }

    setHeaderTransition(headerTransition); // If the window bottom reaches end target

    if (st + window.outerHeight >= endTarget) {
      showHeader();
      updateLastScroll();
      return;
    } // If scroll down and passes start target


    if (st > lastScrollTop && st > startTarget) {
      window.clearTimeout(fixedTimer);
      fixedTimer = window.setTimeout(function () {
        setStickyHeader();
        setParentPaddingTop();
      }, headerTransition);
    } // If scroll down and passes header height


    if (st > lastScrollTop && st > header.offsetHeight) {
      hideHeader();
      updateLastScroll();
      return;
    } // If scroll up


    showHeader();

    if (st < header.offsetHeight) {
      setHeaderTransition(0);
    }

    if (st === 0) {
      unsetStickyHeader();
      setParentPaddingTop(0);
    }

    updateLastScroll();
  }
}

function getThemeVariables() {
  return {
    breakpoints: {
      xs: 0,
      sm: 425,
      // Read 'from 425px' (min-width)
      md: 1024,
      // Read 'from 1024px' (min-width)
      lg: 1366,
      // Read 'from 1366px' (min-width)
      xl: 1680 // Read 'from 1680px' (min-width)

    },
    collapseTransitionTime: 350,
    // In milliseconds
    colors: {
      primary: '#',
      secondary: '#',
      success: '#',
      info: '#',
      warning: '#',
      danger: '#',
      light: '#',
      dark: '#'
    }
  };
}

function setupServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', function () {
    if (navigator.onLine) {
      return;
    }

    $('<style type=\'text/css\'>' + ' .is-online { display: none } ' + ' .is-offline { display: block } ' + '</style>').appendTo('head');
  });

  if (navigator.serviceWorker.controller) {
    console.log('[PWA Builder] active service worker found, no need to register');
    return;
  } // Register the ServiceWorker


  navigator.serviceWorker.register('/sw.js').then(function (reg) {
    console.log('Service worker has been registered for scope: ' + reg.scope);
  })["catch"](function (err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}

function preventInvalidFormSubmit() {
  var forms = document.getElementsByClassName('needs-validation');
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        guideUserToTheFirstError();
        form.classList.add('was-validated');
        return;
      } // Execute the function only when form was submitted and is valid


      disableButtonOnSubmit(form);
    }, false);
  });
  $('.is-invalid').each(function () {
    $(this)[0].setCustomValidity('needs validate');
  }).on('focusout', function () {
    $(this).removeClass('is-invalid');
    $(this)[0].setCustomValidity('');
  });
}

function disableButtonOnSubmit(form) {
  var buttons = form.querySelectorAll('button');
  buttons.forEach(function (button) {
    button.setAttribute('disabled', 'disabled');
    var buttonText = button.innerText;
    button.innerHTML = "<span class=\"spinner-container\">\n                            <span class=\"spinner-border spinner-border-sm text-light\"\n                                  role=\"status\"></span>\n                            ".concat(buttonText, "\n                        </span>");
    var spinner = button.querySelector('.spinner-container');
    spinner.classList.add('d-inline-block');
  });
}

function verifyUserAgent() {
  var OSNome = '';

  if (window.navigator.userAgent.indexOf('Windows NT 10.0') !== -1) {
    OSNome = 'Windows 10';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 6.2') !== -1) {
    OSNome = 'Windows 8';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 6.1') !== -1) {
    OSNome = 'Windows 7';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 6.0') !== -1) {
    OSNome = 'Windows Vista';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 5.1') !== -1) {
    OSNome = 'Windows XP';
  }

  if (window.navigator.userAgent.indexOf('Windows NT 5.0') !== -1) {
    OSNome = 'Windows 2000';
  }

  if (window.navigator.userAgent.indexOf('Mac') !== -1) {
    OSNome = 'Mac/iOS';
  }

  if (window.navigator.userAgent.indexOf('X11') !== -1) {
    OSNome = 'UNIX';
  }

  if (window.navigator.userAgent.indexOf('Linux') !== -1) {
    OSNome = 'Linux';
  }

  if (OSNome !== 'Mac/iOS') {
    var body = document.querySelector('body');
    body.classList.add('style-scroll');
  }
}

function setupSmoothScroll() {
  // Smooth page scroll
  $('a.js-scroll-top').on('click', function (event) {
    // e.g. <a href="#text">
    // 'this' is the element -> a
    // 'hash' is the text (element) after # symbol from href -> #text
    // Prevent default anchor click behavior
    event.preventDefault();
    var additionalOffset = this.getAttribute('data-scroll-offset') || 0;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top + Number(additionalOffset)
    }, 1000);
  });
}

function onChangeSelectLink() {
  // Switch page action when links are in a select
  // e.g. to do in html
  // <select class="form-control js-onchange">
  //   <option value=""
  //     selected>Link
  //   </option>
  //   <option class="" value="/html/index">Home</option>
  //   <option class="" value="/html/faq">FAQ</option>
  //</select>
  $('.js-onchange').change(function () {
    window.location = $(this).val();
  });
}

function setupSelect2() {
  $('select.js-select2').select2({
    theme: 'bootstrap',
    language: 'pt-BR'
  });
}

function setupInputMasks() {
  function inputHandler(masks, max, event) {
    var c = event.target;
    var v = c.value.replace(/\D/g, '');
    var m = c.value.length > max ? 1 : 0;
    VMasker(c).unMask();
    VMasker(c).maskPattern(masks[m]);
    c.value = VMasker.toPattern(v, masks[m]);
  }

  if (document.querySelectorAll('.mask-phone').length > 0) {
    var telMask = ['(99) 9999-99999', '(99) 99999-9999'];
    var tels = document.querySelectorAll('.mask-phone');
    tels.forEach(function (tel) {
      VMasker(tel).maskPattern(telMask[0]);

      if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
        /* me julgue safari desgraçado */
      } else {
        tel.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);
      }
    });
  }

  if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
    /* me julgue safari desgraçado */

    /* o safari não deixa trocar a mascara do campo */
  } else {
    if (document.querySelectorAll('.mask-cpfcnpj').length > 0) {
      var docMask = ['999.999.999-999', '99.999.999/9999-99'];
      var docs = document.querySelectorAll('.mask-cpfcnpj');
      docs.forEach(function (doc) {
        VMasker(doc).maskPattern(docMask[0]);
        doc.addEventListener('input', inputHandler.bind(undefined, docMask, 14), false);
      });
    }
  }

  if (document.querySelectorAll('.mask-date').length > 0) {
    VMasker(document.querySelectorAll('.mask-date')).maskPattern('99/99/9999');
  }

  if (document.querySelectorAll('.mask-zipcode').length > 0) {
    VMasker(document.querySelectorAll('.mask-zipcode')).maskPattern('99999-999');
  }

  if (document.querySelectorAll('.mask-cpf').length > 0) {
    VMasker(document.querySelectorAll('.mask-cpf')).maskPattern('999.999.999-99');
  }

  if (document.querySelectorAll('.mask-cnpj').length > 0) {
    VMasker(document.querySelectorAll('.mask-cnpj')).maskPattern('99.999.999/9999-99');
  }

  if (document.querySelectorAll('.mask-hour').length > 0) {
    VMasker(document.querySelectorAll('.mask-hour')).maskPattern('99:99');
  }

  if (document.querySelectorAll('.mask-number').length > 0) {
    VMasker(document.querySelectorAll('.mask-number')).maskNumber();
  }

  if (document.querySelectorAll('.mask-money').length > 0) {
    VMasker(document.querySelectorAll('.mask-money')).maskMoney({
      precision: 2,
      separator: ',',
      delimiter: '.',
      unit: 'R$'
    });
  }

  var cpfCnpjValidators = new CpfCnpjValidators();
  var cpfInput = document.querySelector(cpfCnpjValidators.selectors.cpf);
  var cnpjInput = document.querySelector(cpfCnpjValidators.selectors.cnpj);

  if (cpfInput) {
    cpfInput.addEventListener('blur', function (event) {
      cpfCnpjValidators.checkCPF(event.target);
    });
  }

  if (cnpjInput) {
    cnpjInput.addEventListener('blur', function (event) {
      cpfCnpjValidators.checkCNPJ(event.target);
    });
  }
}

function setupCepSearch() {
  $('.js-zipcode').on('blur', function () {
    var $this = $(this);
    var cep = $this.val().replace('-', '');

    if (cep.length === 8) {
      $.getJSON('https://api.mixd.com.br/cep/' + cep, {}, function (result) {
        if (!result) {
          console.log(result.message || 'Houve um erro desconhecido');
          return;
        }

        var stateInput = $('.js-state');
        var cityInput = $('.js-city');
        $('.js-neighborhood').val(result.bairro);
        $('.js-address').val(result.logradouro);

        if (stateInput.is('input')) {
          stateInput.val(result.uf_nome);
        }

        if (cityInput.is('input')) {
          cityInput.val(result.cidade);
        }

        if (stateInput.is('select')) {
          stateInput.val(result.uf_nome);
          stateInput.trigger('change');
          cityInput.val(result.cidade);
        }
      });
    }
  });
}

function setupPopover() {
  $('[data-toggle="popover"]').popover();
}

function setupTooltip() {
  $('[data-toggle="tooltip"]').tooltip();
}

function setupAnchorReloadPrevention() {
  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });
}

function setupShareWindow() {
  $('.share').click(function (e) {
    e.preventDefault();
    window.open($(this).attr('href'), 'shareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    return false;
  });
}

function setupSideDrawer() {
  var $body = $('body');
  var $mainContent = $('.js-main-content');
  var $navbar = $('.navbar');
  var $navbarCollapse = $('.navbar-collapse');
  var $navbarToggler = $('.navbar-toggler');
  var headerHeight = $navbar.innerHeight();
  resetSideDrawerConfig();

  if (window.innerWidth > getThemeVariables().breakpoints.md) {
    return;
  }

  $navbarCollapse.css('margin-top', "".concat(headerHeight, "px"));

  function resetSideDrawerConfig() {
    $navbarCollapse.css('margin-top', '');
    $navbarCollapse.removeClass('show');
    $mainContent.removeClass('show-backdrop');
    $body.removeClass('overflow-hidden');
  }

  function navbarToggleHandler() {
    $navbarCollapse.toggleClass('show');
    $mainContent.toggleClass('show-backdrop');
    $body.toggleClass('overflow-hidden');
  }

  $navbarToggler.click(navbarToggleHandler);
}

function insertCopyrightYear() {
  var copyrightContainerSelector = '.js-copyright-container';
  var hasCopyrightSelector = $('footer').find(copyrightContainerSelector).length;

  if (!hasCopyrightSelector) {
    console.error("".concat(copyrightContainerSelector, " class is required to insert copyright text"));
    return;
  }

  var $yearContainer = $(copyrightContainerSelector);
  $yearContainer.text("Todos os direitos reservados \xA9 ".concat(new Date().getFullYear()));
}

function setupClipboardJS() {
  // Don't forget to install the package: npm install clipboard --save
  var triggerElement = new ClipboardJS('.js-copy');
  triggerElement.on('success', function (event) {
    showTooltip(event.trigger);
  });

  function showTooltip(targetElement) {
    var successTooltip = $(targetElement).tooltip({
      title: 'Copiado para a área de transferência',
      placement: 'bottom',
      trigger: 'manual'
    });
    successTooltip.tooltip('show');
    setTimeout(function () {
      successTooltip.tooltip('hide');
    }, 2000);
  }
}

function setupDataLayerEventClickButton() {
  var buttons = document.querySelectorAll('.js-btn-data-layer');

  if (!buttons.length) {
    return;
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function (clickEvent) {
      var nameDataLayerAction = 'data-fmd-datalayer-action';
      var linkDataLayerAction = clickEvent.currentTarget.getAttribute(nameDataLayerAction);

      if (!linkDataLayerAction) {
        throw new Error("Adicione atributo ".concat(nameDataLayerAction, " com seu valor"));
      }

      var dataLayerOptions = getDataLayerOptions({
        action: linkDataLayerAction
      });
      window.dataLayer.push(dataLayerOptions);
    });
  });
}

function getDataLayerOptions(options) {
  window.dataLayer = window.dataLayer || [];
  return _objectSpread(_objectSpread({}, options), {}, {
    event: options.event || 'gaEvent',
    category: options.category || 'clique',
    action: options.action || '',
    label: options.label || 'enviado'
  });
}

$(function () {
  setupServiceWorker();
  preventInvalidFormSubmit();
  verifyUserAgent();
  setupSmoothScroll(); // setupSideDrawer();
  // setupCepSearch();
  // onChangeSelectLink();
  // setupSelect2();

  setupInputMasks(); // setupPopover();
  // setupTooltip();
  // setupAnchorReloadPrevention();
  // setupShareWindow();
  // insertCopyrightYear();

  initializeFormHelpers(); // setupDefaultSlider();
  // setupClipboardJS();
  // setupDataLayerEventClickButton();
});
window.addEventListener('load', function () {
  /**
   * We need the starting function here because vh/vw are calculated after all
   * resources loaded, which is different from DOM ready event
   * */
  if (window.innerWidth > getThemeVariables().breakpoints.md) {// setupLax();
  } // setupInfiniteScroll();


  setupFmdHeader();
});
