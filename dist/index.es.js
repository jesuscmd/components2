import Q, { useRef as yn, useDebugValue as nr, createElement as vn, useContext as bn, useEffect as wn } from "react";
import Ce from "classnames";
var St = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function kn() {
  if (ar)
    return Te;
  ar = 1;
  var e = Q, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, u, p) {
    var f, m = {}, y = null, b = null;
    p !== void 0 && (y = "" + p), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (b = u.ref);
    for (f in u)
      a.call(u, f) && !i.hasOwnProperty(f) && (m[f] = u[f]);
    if (d && d.defaultProps)
      for (f in u = d.defaultProps, u)
        m[f] === void 0 && (m[f] = u[f]);
    return { $$typeof: t, type: d, key: y, ref: b, props: m, _owner: o.current };
  }
  return Te.Fragment = r, Te.jsx = c, Te.jsxs = c, Te;
}
var Fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function xn() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Q, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), C = Symbol.iterator, D = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var s = C && n[C] || n[D];
      return typeof s == "function" ? s : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(n) {
      {
        for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), h = 1; h < s; h++)
          l[h - 1] = arguments[h];
        O("error", n, l);
      }
    }
    function O(n, s, l) {
      {
        var h = P.ReactDebugCurrentFrame, E = h.getStackAddendum();
        E !== "" && (s += "%s", l = l.concat([E]));
        var A = l.map(function(S) {
          return String(S);
        });
        A.unshift("Warning: " + s), Function.prototype.apply.call(console[n], console, A);
      }
    }
    var $ = !1, j = !1, x = !1, g = !1, ee = !1, te;
    te = Symbol.for("react.module.reference");
    function st(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === i || ee || n === o || n === p || n === f || g || n === b || $ || j || x || typeof n == "object" && n !== null && (n.$$typeof === y || n.$$typeof === m || n.$$typeof === c || n.$$typeof === d || n.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === te || n.getModuleId !== void 0));
    }
    function ct(n, s, l) {
      var h = n.displayName;
      if (h)
        return h;
      var E = s.displayName || s.name || "";
      return E !== "" ? l + "(" + E + ")" : l;
    }
    function ze(n) {
      return n.displayName || "Context";
    }
    function Y(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            var s = n;
            return ze(s) + ".Consumer";
          case c:
            var l = n;
            return ze(l._context) + ".Provider";
          case u:
            return ct(n, n.render, "ForwardRef");
          case m:
            var h = n.displayName || null;
            return h !== null ? h : Y(n.type) || "Memo";
          case y: {
            var E = n, A = E._payload, S = E._init;
            try {
              return Y(S(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, de = 0, Ve, be, q, se, ce, B, we;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function xe() {
      {
        if (de === 0) {
          Ve = console.log, be = console.info, q = console.warn, se = console.error, ce = console.group, B = console.groupCollapsed, we = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        de++;
      }
    }
    function fe() {
      {
        if (de--, de === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, n, {
              value: Ve
            }),
            info: re({}, n, {
              value: be
            }),
            warn: re({}, n, {
              value: q
            }),
            error: re({}, n, {
              value: se
            }),
            group: re({}, n, {
              value: ce
            }),
            groupCollapsed: re({}, n, {
              value: B
            }),
            groupEnd: re({}, n, {
              value: we
            })
          });
        }
        de < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = P.ReactCurrentDispatcher, K;
    function U(n, s, l) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (E) {
            var h = E.stack.trim().match(/\n( *(at )?)/);
            K = h && h[1] || "";
          }
        return `
` + K + n;
      }
    }
    var he = !1, ne;
    {
      var J = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new J();
    }
    function Wt(n, s) {
      if (!n || he)
        return "";
      {
        var l = ne.get(n);
        if (l !== void 0)
          return l;
      }
      var h;
      he = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = le.current, le.current = null, xe();
      try {
        if (s) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (ae) {
              h = ae;
            }
            Reflect.construct(n, [], S);
          } else {
            try {
              S.call();
            } catch (ae) {
              h = ae;
            }
            n.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            h = ae;
          }
          n();
        }
      } catch (ae) {
        if (ae && h && typeof ae.stack == "string") {
          for (var k = ae.stack.split(`
`), z = h.stack.split(`
`), I = k.length - 1, T = z.length - 1; I >= 1 && T >= 0 && k[I] !== z[T]; )
            T--;
          for (; I >= 1 && T >= 0; I--, T--)
            if (k[I] !== z[T]) {
              if (I !== 1 || T !== 1)
                do
                  if (I--, T--, T < 0 || k[I] !== z[T]) {
                    var G = `
` + k[I].replace(" at new ", " at ");
                    return n.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", n.displayName)), typeof n == "function" && ne.set(n, G), G;
                  }
                while (I >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        he = !1, le.current = A, fe(), Error.prepareStackTrace = E;
      }
      var Ee = n ? n.displayName || n.name : "", rr = Ee ? U(Ee) : "";
      return typeof n == "function" && ne.set(n, rr), rr;
    }
    function qr(n, s, l) {
      return Wt(n, !1);
    }
    function Xr(n) {
      var s = n.prototype;
      return !!(s && s.isReactComponent);
    }
    function We(n, s, l) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Wt(n, Xr(n));
      if (typeof n == "string")
        return U(n);
      switch (n) {
        case p:
          return U("Suspense");
        case f:
          return U("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case u:
            return qr(n.render);
          case m:
            return We(n.type, s, l);
          case y: {
            var h = n, E = h._payload, A = h._init;
            try {
              return We(A(E), s, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Ye = Object.prototype.hasOwnProperty, Yt = {}, Ut = P.ReactDebugCurrentFrame;
    function Ue(n) {
      if (n) {
        var s = n._owner, l = We(n.type, n._source, s ? s.type : null);
        Ut.setExtraStackFrame(l);
      } else
        Ut.setExtraStackFrame(null);
    }
    function Kr(n, s, l, h, E) {
      {
        var A = Function.call.bind(Ye);
        for (var S in n)
          if (A(n, S)) {
            var k = void 0;
            try {
              if (typeof n[S] != "function") {
                var z = Error((h || "React class") + ": " + l + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              k = n[S](s, S, h, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              k = I;
            }
            k && !(k instanceof Error) && (Ue(E), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", l, S, typeof k), Ue(null)), k instanceof Error && !(k.message in Yt) && (Yt[k.message] = !0, Ue(E), w("Failed %s type: %s", l, k.message), Ue(null));
          }
      }
    }
    var Jr = Array.isArray;
    function lt(n) {
      return Jr(n);
    }
    function Zr(n) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, l = s && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return l;
      }
    }
    function Qr(n) {
      try {
        return Gt(n), !1;
      } catch {
        return !0;
      }
    }
    function Gt(n) {
      return "" + n;
    }
    function Ht(n) {
      if (Qr(n))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zr(n)), Gt(n);
    }
    var Ie = P.ReactCurrentOwner, en = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qt, Xt, ut;
    ut = {};
    function tn(n) {
      if (Ye.call(n, "ref")) {
        var s = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function rn(n) {
      if (Ye.call(n, "key")) {
        var s = Object.getOwnPropertyDescriptor(n, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function nn(n, s) {
      if (typeof n.ref == "string" && Ie.current && s && Ie.current.stateNode !== s) {
        var l = Y(Ie.current.type);
        ut[l] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(Ie.current.type), n.ref), ut[l] = !0);
      }
    }
    function an(n, s) {
      {
        var l = function() {
          qt || (qt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function on(n, s) {
      {
        var l = function() {
          Xt || (Xt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var sn = function(n, s, l, h, E, A, S) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: s,
        ref: l,
        props: S,
        // Record the component responsible for creating this element.
        _owner: A
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function cn(n, s, l, h, E) {
      {
        var A, S = {}, k = null, z = null;
        l !== void 0 && (Ht(l), k = "" + l), rn(s) && (Ht(s.key), k = "" + s.key), tn(s) && (z = s.ref, nn(s, E));
        for (A in s)
          Ye.call(s, A) && !en.hasOwnProperty(A) && (S[A] = s[A]);
        if (n && n.defaultProps) {
          var I = n.defaultProps;
          for (A in I)
            S[A] === void 0 && (S[A] = I[A]);
        }
        if (k || z) {
          var T = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          k && an(S, T), z && on(S, T);
        }
        return sn(n, k, z, E, h, Ie.current, S);
      }
    }
    var dt = P.ReactCurrentOwner, Kt = P.ReactDebugCurrentFrame;
    function Se(n) {
      if (n) {
        var s = n._owner, l = We(n.type, n._source, s ? s.type : null);
        Kt.setExtraStackFrame(l);
      } else
        Kt.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function ht(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Jt() {
      {
        if (dt.current) {
          var n = Y(dt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function ln(n) {
      {
        if (n !== void 0) {
          var s = n.fileName.replace(/^.*[\\\/]/, ""), l = n.lineNumber;
          return `

Check your code at ` + s + ":" + l + ".";
        }
        return "";
      }
    }
    var Zt = {};
    function un(n) {
      {
        var s = Jt();
        if (!s) {
          var l = typeof n == "string" ? n : n.displayName || n.name;
          l && (s = `

Check the top-level render call using <` + l + ">.");
        }
        return s;
      }
    }
    function Qt(n, s) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var l = un(s);
        if (Zt[l])
          return;
        Zt[l] = !0;
        var h = "";
        n && n._owner && n._owner !== dt.current && (h = " It was passed a child from " + Y(n._owner.type) + "."), Se(n), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, h), Se(null);
      }
    }
    function er(n, s) {
      {
        if (typeof n != "object")
          return;
        if (lt(n))
          for (var l = 0; l < n.length; l++) {
            var h = n[l];
            ht(h) && Qt(h, s);
          }
        else if (ht(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var E = M(n);
          if (typeof E == "function" && E !== n.entries)
            for (var A = E.call(n), S; !(S = A.next()).done; )
              ht(S.value) && Qt(S.value, s);
        }
      }
    }
    function dn(n) {
      {
        var s = n.type;
        if (s == null || typeof s == "string")
          return;
        var l;
        if (typeof s == "function")
          l = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === m))
          l = s.propTypes;
        else
          return;
        if (l) {
          var h = Y(s);
          Kr(l, n.props, "prop", h, n);
        } else if (s.PropTypes !== void 0 && !ft) {
          ft = !0;
          var E = Y(s);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fn(n) {
      {
        for (var s = Object.keys(n.props), l = 0; l < s.length; l++) {
          var h = s[l];
          if (h !== "children" && h !== "key") {
            Se(n), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), Se(null);
            break;
          }
        }
        n.ref !== null && (Se(n), w("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    function tr(n, s, l, h, E, A) {
      {
        var S = st(n);
        if (!S) {
          var k = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = ln(E);
          z ? k += z : k += Jt();
          var I;
          n === null ? I = "null" : lt(n) ? I = "array" : n !== void 0 && n.$$typeof === t ? (I = "<" + (Y(n.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : I = typeof n, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, k);
        }
        var T = cn(n, s, l, E, A);
        if (T == null)
          return T;
        if (S) {
          var G = s.children;
          if (G !== void 0)
            if (h)
              if (lt(G)) {
                for (var Ee = 0; Ee < G.length; Ee++)
                  er(G[Ee], n);
                Object.freeze && Object.freeze(G);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              er(G, n);
        }
        return n === a ? fn(T) : dn(T), T;
      }
    }
    function hn(n, s, l) {
      return tr(n, s, l, !0);
    }
    function pn(n, s, l) {
      return tr(n, s, l, !1);
    }
    var mn = pn, gn = hn;
    Fe.Fragment = a, Fe.jsx = mn, Fe.jsxs = gn;
  }()), Fe;
}
process.env.NODE_ENV === "production" ? St.exports = kn() : St.exports = xn();
var V = St.exports, W = function() {
  return W = Object.assign || function(t) {
    for (var r, a = 1, o = arguments.length; a < o; a++) {
      r = arguments[a];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, W.apply(this, arguments);
};
function _e(e, t, r) {
  if (r || arguments.length === 2)
    for (var a = 0, o = t.length, i; a < o; a++)
      (i || !(a in t)) && (i || (i = Array.prototype.slice.call(t, 0, a)), i[a] = t[a]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Sn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var En = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Rn = /* @__PURE__ */ Sn(
  function(e) {
    return En.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), N = "-ms-", Me = "-moz-", R = "-webkit-", Sr = "comm", rt = "rule", Nt = "decl", Cn = "@import", Er = "@keyframes", _n = "@layer", Pn = Math.abs, jt = String.fromCharCode, Et = Object.assign;
function On(e, t) {
  return L(e, 0) ^ 45 ? (((t << 2 ^ L(e, 0)) << 2 ^ L(e, 1)) << 2 ^ L(e, 2)) << 2 ^ L(e, 3) : 0;
}
function Rr(e) {
  return e.trim();
}
function oe(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function v(e, t, r) {
  return e.replace(t, r);
}
function Xe(e, t) {
  return e.indexOf(t);
}
function L(e, t) {
  return e.charCodeAt(t) | 0;
}
function Pe(e, t, r) {
  return e.slice(t, r);
}
function Z(e) {
  return e.length;
}
function Cr(e) {
  return e.length;
}
function Le(e, t) {
  return t.push(e), e;
}
function An(e, t) {
  return e.map(t).join("");
}
function ir(e, t) {
  return e.filter(function(r) {
    return !oe(r, t);
  });
}
var nt = 1, Oe = 1, _r = 0, H = 0, F = 0, je = "";
function at(e, t, r, a, o, i, c, d) {
  return { value: e, root: t, parent: r, type: a, props: o, children: i, line: nt, column: Oe, length: c, return: "", siblings: d };
}
function ue(e, t) {
  return Et(at("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Re(e) {
  for (; e.root; )
    e = ue(e.root, { children: [e] });
  Le(e, e.siblings);
}
function $n() {
  return F;
}
function Nn() {
  return F = H > 0 ? L(je, --H) : 0, Oe--, F === 10 && (Oe = 1, nt--), F;
}
function X() {
  return F = H < _r ? L(je, H++) : 0, Oe++, F === 10 && (Oe = 1, nt++), F;
}
function ge() {
  return L(je, H);
}
function Ke() {
  return H;
}
function ot(e, t) {
  return Pe(je, e, t);
}
function Rt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function jn(e) {
  return nt = Oe = 1, _r = Z(je = e), H = 0, [];
}
function Dn(e) {
  return je = "", e;
}
function pt(e) {
  return Rr(ot(H - 1, Ct(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function In(e) {
  for (; (F = ge()) && F < 33; )
    X();
  return Rt(e) > 2 || Rt(F) > 3 ? "" : " ";
}
function Tn(e, t) {
  for (; --t && X() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); )
    ;
  return ot(e, Ke() + (t < 6 && ge() == 32 && X() == 32));
}
function Ct(e) {
  for (; X(); )
    switch (F) {
      case e:
        return H;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ct(F);
        break;
      case 40:
        e === 41 && Ct(e);
        break;
      case 92:
        X();
        break;
    }
  return H;
}
function Fn(e, t) {
  for (; X() && e + F !== 47 + 10; )
    if (e + F === 42 + 42 && ge() === 47)
      break;
  return "/*" + ot(t, H - 1) + "*" + jt(e === 47 ? e : X());
}
function Ln(e) {
  for (; !Rt(ge()); )
    X();
  return ot(e, H);
}
function Mn(e) {
  return Dn(Je("", null, null, null, [""], e = jn(e), 0, [0], e));
}
function Je(e, t, r, a, o, i, c, d, u) {
  for (var p = 0, f = 0, m = c, y = 0, b = 0, C = 0, D = 1, M = 1, P = 1, w = 0, O = "", $ = o, j = i, x = a, g = O; M; )
    switch (C = w, w = X()) {
      case 40:
        if (C != 108 && L(g, m - 1) == 58) {
          Xe(g += v(pt(w), "&", "&\f"), "&\f") != -1 && (P = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += pt(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += In(C);
        break;
      case 92:
        g += Tn(Ke() - 1, 7);
        continue;
      case 47:
        switch (ge()) {
          case 42:
          case 47:
            Le(Bn(Fn(X(), Ke()), t, r, u), u);
            break;
          default:
            g += "/";
        }
        break;
      case 123 * D:
        d[p++] = Z(g) * P;
      case 125 * D:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            M = 0;
          case 59 + f:
            P == -1 && (g = v(g, /\f/g, "")), b > 0 && Z(g) - m && Le(b > 32 ? cr(g + ";", a, r, m - 1, u) : cr(v(g, " ", "") + ";", a, r, m - 2, u), u);
            break;
          case 59:
            g += ";";
          default:
            if (Le(x = sr(g, t, r, p, f, o, d, O, $ = [], j = [], m, i), i), w === 123)
              if (f === 0)
                Je(g, t, x, x, $, i, m, d, j);
              else
                switch (y === 99 && L(g, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Je(e, x, x, a && Le(sr(e, x, x, 0, 0, o, d, O, o, $ = [], m, j), j), o, j, m, d, a ? $ : j);
                    break;
                  default:
                    Je(g, x, x, x, [""], j, 0, d, j);
                }
        }
        p = f = b = 0, D = P = 1, O = g = "", m = c;
        break;
      case 58:
        m = 1 + Z(g), b = C;
      default:
        if (D < 1) {
          if (w == 123)
            --D;
          else if (w == 125 && D++ == 0 && Nn() == 125)
            continue;
        }
        switch (g += jt(w), w * D) {
          case 38:
            P = f > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            d[p++] = (Z(g) - 1) * P, P = 1;
            break;
          case 64:
            ge() === 45 && (g += pt(X())), y = ge(), f = m = Z(O = g += Ln(Ke())), w++;
            break;
          case 45:
            C === 45 && Z(g) == 2 && (D = 0);
        }
    }
  return i;
}
function sr(e, t, r, a, o, i, c, d, u, p, f, m) {
  for (var y = o - 1, b = o === 0 ? i : [""], C = Cr(b), D = 0, M = 0, P = 0; D < a; ++D)
    for (var w = 0, O = Pe(e, y + 1, y = Pn(M = c[D])), $ = e; w < C; ++w)
      ($ = Rr(M > 0 ? b[w] + " " + O : v(O, /&\f/g, b[w]))) && (u[P++] = $);
  return at(e, t, r, o === 0 ? rt : d, u, p, f, m);
}
function Bn(e, t, r, a) {
  return at(e, t, r, Sr, jt($n()), Pe(e, 2, -2), 0, a);
}
function cr(e, t, r, a, o) {
  return at(e, t, r, Nt, Pe(e, 0, a), Pe(e, a + 1, -1), a, o);
}
function Pr(e, t, r) {
  switch (On(e, t)) {
    case 5103:
      return R + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return R + e + e;
    case 4789:
      return Me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return R + e + Me + e + N + e + e;
    case 5936:
      switch (L(e, t + 11)) {
        case 114:
          return R + e + N + v(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return R + e + N + v(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return R + e + N + v(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return R + e + N + e + e;
    case 6165:
      return R + e + N + "flex-" + e + e;
    case 5187:
      return R + e + v(e, /(\w+).+(:[^]+)/, R + "box-$1$2" + N + "flex-$1$2") + e;
    case 5443:
      return R + e + N + "flex-item-" + v(e, /flex-|-self/g, "") + (oe(e, /flex-|baseline/) ? "" : N + "grid-row-" + v(e, /flex-|-self/g, "")) + e;
    case 4675:
      return R + e + N + "flex-line-pack" + v(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return R + e + N + v(e, "shrink", "negative") + e;
    case 5292:
      return R + e + N + v(e, "basis", "preferred-size") + e;
    case 6060:
      return R + "box-" + v(e, "-grow", "") + R + e + N + v(e, "grow", "positive") + e;
    case 4554:
      return R + v(e, /([^-])(transform)/g, "$1" + R + "$2") + e;
    case 6187:
      return v(v(v(e, /(zoom-|grab)/, R + "$1"), /(image-set)/, R + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return v(e, /(image-set\([^]*)/, R + "$1$`$1");
    case 4968:
      return v(v(e, /(.+:)(flex-)?(.*)/, R + "box-pack:$3" + N + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + R + e + e;
    case 4200:
      if (!oe(e, /flex-|baseline/))
        return N + "grid-column-align" + Pe(e, t) + e;
      break;
    case 2592:
    case 3360:
      return N + v(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(a, o) {
        return t = o, oe(a.props, /grid-\w+-end/);
      }) ? ~Xe(e + (r = r[t].value), "span") ? e : N + v(e, "-start", "") + e + N + "grid-row-span:" + (~Xe(r, "span") ? oe(r, /\d+/) : +oe(r, /\d+/) - +oe(e, /\d+/)) + ";" : N + v(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(a) {
        return oe(a.props, /grid-\w+-start/);
      }) ? e : N + v(v(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return v(e, /(.+)-inline(.+)/, R + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Z(e) - 1 - t > 6)
        switch (L(e, t + 1)) {
          case 109:
            if (L(e, t + 4) !== 45)
              break;
          case 102:
            return v(e, /(.+:)(.+)-([^]+)/, "$1" + R + "$2-$3$1" + Me + (L(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Xe(e, "stretch") ? Pr(v(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return v(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(a, o, i, c, d, u, p) {
        return N + o + ":" + i + p + (c ? N + o + "-span:" + (d ? u : +u - +i) + p : "") + e;
      });
    case 4949:
      if (L(e, t + 6) === 121)
        return v(e, ":", ":" + R) + e;
      break;
    case 6444:
      switch (L(e, L(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return v(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + R + (L(e, 14) === 45 ? "inline-" : "") + "box$3$1" + R + "$2$3$1" + N + "$2box$3") + e;
        case 100:
          return v(e, ":", ":" + N) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return v(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function et(e, t) {
  for (var r = "", a = 0; a < e.length; a++)
    r += t(e[a], a, e, t) || "";
  return r;
}
function zn(e, t, r, a) {
  switch (e.type) {
    case _n:
      if (e.children.length)
        break;
    case Cn:
    case Nt:
      return e.return = e.return || e.value;
    case Sr:
      return "";
    case Er:
      return e.return = e.value + "{" + et(e.children, a) + "}";
    case rt:
      if (!Z(e.value = e.props.join(",")))
        return "";
  }
  return Z(r = et(e.children, a)) ? e.return = e.value + "{" + r + "}" : "";
}
function Vn(e) {
  var t = Cr(e);
  return function(r, a, o, i) {
    for (var c = "", d = 0; d < t; d++)
      c += e[d](r, a, o, i) || "";
    return c;
  };
}
function Wn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Yn(e, t, r, a) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Nt:
        e.return = Pr(e.value, e.length, r);
        return;
      case Er:
        return et([ue(e, { value: v(e.value, "@", "@" + R) })], a);
      case rt:
        if (e.length)
          return An(r = e.props, function(o) {
            switch (oe(o, a = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Re(ue(e, { props: [v(o, /:(read-\w+)/, ":" + Me + "$1")] })), Re(ue(e, { props: [o] })), Et(e, { props: ir(r, a) });
                break;
              case "::placeholder":
                Re(ue(e, { props: [v(o, /:(plac\w+)/, ":" + R + "input-$1")] })), Re(ue(e, { props: [v(o, /:(plac\w+)/, ":" + Me + "$1")] })), Re(ue(e, { props: [v(o, /:(plac\w+)/, N + "input-$1")] })), Re(ue(e, { props: [o] })), Et(e, { props: ir(r, a) });
                break;
            }
            return "";
          });
    }
}
var Un = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ve = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Dt = typeof window < "u" && "HTMLElement" in window, Gn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), lr = /invalid hook call/i, Ge = /* @__PURE__ */ new Set(), Hn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", a = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(c) {
        for (var d = [], u = 1; u < arguments.length; u++)
          d[u - 1] = arguments[u];
        lr.test(c) ? (i = !1, Ge.delete(a)) : o.apply(void 0, _e([c], d, !1));
      }, yn(), i && !Ge.has(a) && (console.warn(a), Ge.add(a));
    } catch (c) {
      lr.test(c.message) && Ge.delete(a);
    } finally {
      console.error = o;
    }
  }
}, it = Object.freeze([]), Ae = Object.freeze({});
function qn(e, t, r) {
  return r === void 0 && (r = Ae), e.theme !== r.theme && e.theme || t || r.theme;
}
var _t = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Xn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Kn = /(^-|-$)/g;
function ur(e) {
  return e.replace(Xn, "-").replace(Kn, "");
}
var Jn = /(a)(d)/gi, dr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Pt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = dr(t % 52) + r;
  return (dr(t % 52) + r).replace(Jn, "$1-$2");
}
var mt, pe = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Or = function(e) {
  return pe(5381, e);
};
function Zn(e) {
  return Pt(Or(e) >>> 0);
}
function Ar(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function gt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var $r = typeof Symbol == "function" && Symbol.for, Nr = $r ? Symbol.for("react.memo") : 60115, Qn = $r ? Symbol.for("react.forward_ref") : 60112, ea = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ta = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, jr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ra = ((mt = {})[Qn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, mt[Nr] = jr, mt);
function fr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Nr ? jr : "$$typeof" in e ? ra[e.$$typeof] : ea;
  var t;
}
var na = Object.defineProperty, aa = Object.getOwnPropertyNames, hr = Object.getOwnPropertySymbols, oa = Object.getOwnPropertyDescriptor, ia = Object.getPrototypeOf, pr = Object.prototype;
function Dr(e, t, r) {
  if (typeof t != "string") {
    if (pr) {
      var a = ia(t);
      a && a !== pr && Dr(e, a, r);
    }
    var o = aa(t);
    hr && (o = o.concat(hr(t)));
    for (var i = fr(e), c = fr(t), d = 0; d < o.length; ++d) {
      var u = o[d];
      if (!(u in ta || r && r[u] || c && u in c || i && u in i)) {
        var p = oa(t, u);
        try {
          na(e, u, p);
        } catch {
        }
      }
    }
  }
  return e;
}
function $e(e) {
  return typeof e == "function";
}
function It(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function me(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function mr(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], a = 1; a < e.length; a++)
    r += t ? t + e[a] : e[a];
  return r;
}
function Ne(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ot(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Ne(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      e[a] = Ot(e[a], t[a]);
  else if (Ne(t))
    for (var a in t)
      e[a] = Ot(e[a], t[a]);
  return e;
}
function Tt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var sa = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function ca() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], a = [], o = 1, i = e.length; o < i; o += 1)
    a.push(e[o]);
  return a.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function De(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ca.apply(void 0, _e([sa[e]], t, !1)).trim());
}
var la = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, a = 0; a < t; a++)
      r += this.groupSizes[a];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var a = this.groupSizes, o = a.length, i = o; t >= i; )
        if ((i <<= 1) < 0)
          throw De(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(a), this.length = i;
      for (var c = o; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var d = this.indexOfGroup(t + 1), u = (c = 0, r.length); c < u; c++)
      this.tag.insertRule(d, r[c]) && (this.groupSizes[t]++, d++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], a = this.indexOfGroup(t), o = a + r;
      this.groupSizes[t] = 0;
      for (var i = a; i < o; i++)
        this.tag.deleteRule(a);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var a = this.groupSizes[t], o = this.indexOfGroup(t), i = o + a, c = o; c < i; c++)
      r += "".concat(this.tag.getRule(c)).concat(`/*!sc*/
`);
    return r;
  }, e;
}(), Ze = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), yt = 1, He = function(e) {
  if (Ze.has(e))
    return Ze.get(e);
  for (; tt.has(yt); )
    yt++;
  var t = yt++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw De(16, "".concat(t));
  return Ze.set(e, t), tt.set(t, e), t;
}, ua = function(e, t) {
  Ze.set(e, t), tt.set(t, e);
}, da = "style[".concat(ve, "][").concat("data-styled-version", '="').concat("6.0.7", '"]'), fa = new RegExp("^".concat(ve, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ha = function(e, t, r) {
  for (var a, o = r.split(","), i = 0, c = o.length; i < c; i++)
    (a = o[i]) && e.registerName(t, a);
}, pa = function(e, t) {
  for (var r, a = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(`/*!sc*/
`), o = [], i = 0, c = a.length; i < c; i++) {
    var d = a[i].trim();
    if (d) {
      var u = d.match(fa);
      if (u) {
        var p = 0 | parseInt(u[1], 10), f = u[2];
        p !== 0 && (ua(f, p), ha(e, f, u[3]), e.getTag().insertRules(p, o)), o.length = 0;
      } else
        o.push(d);
    }
  }
};
function ma() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ir = function(e) {
  var t = document.head, r = e || t, a = document.createElement("style"), o = function(d) {
    var u = Array.from(d.querySelectorAll("style[".concat(ve, "]")));
    return u[u.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  a.setAttribute(ve, "active"), a.setAttribute("data-styled-version", "6.0.7");
  var c = ma();
  return c && a.setAttribute("nonce", c), r.insertBefore(a, i), a;
}, ga = function() {
  function e(t) {
    this.element = Ir(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var a = document.styleSheets, o = 0, i = a.length; o < i; o++) {
        var c = a[o];
        if (c.ownerNode === r)
          return c;
      }
      throw De(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), ya = function() {
  function e(t) {
    this.element = Ir(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var a = document.createTextNode(r);
      return this.element.insertBefore(a, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), va = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), gr = Dt, ba = { isServer: !Dt, useCSSOMInjection: !Gn }, Tr = function() {
  function e(t, r, a) {
    t === void 0 && (t = Ae), r === void 0 && (r = {});
    var o = this;
    this.options = W(W({}, ba), t), this.gs = r, this.names = new Map(a), this.server = !!t.isServer, !this.server && Dt && gr && (gr = !1, function(i) {
      for (var c = document.querySelectorAll(da), d = 0, u = c.length; d < u; d++) {
        var p = c[d];
        p && p.getAttribute(ve) !== "active" && (pa(i, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this)), Tt(this, function() {
      return function(i) {
        for (var c = i.getTag(), d = c.length, u = "", p = function(m) {
          var y = function(P) {
            return tt.get(P);
          }(m);
          if (y === void 0)
            return "continue";
          var b = i.names.get(y), C = c.getGroup(m);
          if (b === void 0 || C.length === 0)
            return "continue";
          var D = "".concat(ve, ".g").concat(m, '[id="').concat(y, '"]'), M = "";
          b !== void 0 && b.forEach(function(P) {
            P.length > 0 && (M += "".concat(P, ","));
          }), u += "".concat(C).concat(D, '{content:"').concat(M, '"}').concat(`/*!sc*/
`);
        }, f = 0; f < d; f++)
          p(f);
        return u;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return He(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(W(W({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var a = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new va(o) : a ? new ga(o) : new ya(o);
    }(this.options), new la(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (He(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(r), this.names.set(t, a);
    }
  }, e.prototype.insertRules = function(t, r, a) {
    this.registerName(t, r), this.getTag().insertRules(He(t), a);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(He(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), wa = /&/g, ka = /^\s*\/\/.*$/gm;
function Fr(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(a) {
      return "".concat(t, " ").concat(a);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Fr(r.children, t)), r;
  });
}
function xa(e) {
  var t, r, a, o = e === void 0 ? Ae : e, i = o.options, c = i === void 0 ? Ae : i, d = o.plugins, u = d === void 0 ? it : d, p = function(y, b, C) {
    return C === r || C.startsWith(r) && C.endsWith(r) && C.replaceAll(r, "").length > 0 ? ".".concat(t) : y;
  }, f = u.slice();
  f.push(function(y) {
    y.type === rt && y.value.includes("&") && (y.props[0] = y.props[0].replace(wa, r).replace(a, p));
  }), c.prefix && f.push(Yn), f.push(zn);
  var m = function(y, b, C, D) {
    b === void 0 && (b = ""), C === void 0 && (C = ""), D === void 0 && (D = "&"), t = D, r = b, a = new RegExp("\\".concat(r, "\\b"), "g");
    var M = y.replace(ka, ""), P = Mn(C || b ? "".concat(C, " ").concat(b, " { ").concat(M, " }") : M);
    c.namespace && (P = Fr(P, c.namespace));
    var w = [];
    return et(P, Vn(f.concat(Wn(function(O) {
      return w.push(O);
    })))), w;
  };
  return m.hash = u.length ? u.reduce(function(y, b) {
    return b.name || De(15), pe(y, b.name);
  }, 5381).toString() : "", m;
}
var Sa = new Tr(), At = xa(), Lr = Q.createContext({ shouldForwardProp: void 0, styleSheet: Sa, stylis: At });
Lr.Consumer;
Q.createContext(void 0);
function yr() {
  return bn(Lr);
}
var vr = function() {
  function e(t, r) {
    var a = this;
    this.inject = function(o, i) {
      i === void 0 && (i = At);
      var c = a.name + i.hash;
      o.hasNameForId(a.id, c) || o.insertRules(a.id, c, i(a.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, Tt(this, function() {
      throw De(12, String(a.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = At), this.name + t.hash;
  }, e;
}(), Ea = function(e) {
  return e >= "A" && e <= "Z";
};
function br(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var a = e[r];
    if (r === 1 && a === "-" && e[0] === "-")
      return e;
    Ea(a) ? t += "-" + a.toLowerCase() : t += a;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Mr = function(e) {
  return e == null || e === !1 || e === "";
}, Br = function(e) {
  var t, r, a = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Mr(i) && (Array.isArray(i) && i.isCss || $e(i) ? a.push("".concat(br(o), ":"), i, ";") : Ne(i) ? a.push.apply(a, _e(_e(["".concat(o, " {")], Br(i), !1), ["}"], !1)) : a.push("".concat(br(o), ": ").concat((t = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Un || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return a;
};
function ye(e, t, r, a) {
  if (Mr(e))
    return [];
  if (It(e))
    return [".".concat(e.styledComponentId)];
  if ($e(e)) {
    if (!$e(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof vr || Ne(o) || o === null || console.error("".concat(Ar(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ye(o, t, r, a);
  }
  var i;
  return e instanceof vr ? r ? (e.inject(r, a), [e.getName(a)]) : [e] : Ne(e) ? Br(e) : Array.isArray(e) ? Array.prototype.concat.apply(it, e.map(function(c) {
    return ye(c, t, r, a);
  })) : [e.toString()];
}
function Ra(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if ($e(r) && !It(r))
      return !1;
  }
  return !0;
}
var Ca = Or("6.0.7"), _a = function() {
  function e(t, r, a) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (a === void 0 || a.isStatic) && Ra(t), this.componentId = r, this.baseHash = pe(Ca, r), this.baseStyle = a, Tr.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, a) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, a) : "";
    if (this.isStatic && !a.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        o = me(o, this.staticRulesId);
      else {
        var i = mr(ye(this.rules, t, r, a)), c = Pt(pe(this.baseHash, i) >>> 0);
        if (!r.hasNameForId(this.componentId, c)) {
          var d = a(i, ".".concat(c), void 0, this.componentId);
          r.insertRules(this.componentId, c, d);
        }
        o = me(o, c), this.staticRulesId = c;
      }
    else {
      for (var u = pe(this.baseHash, a.hash), p = "", f = 0; f < this.rules.length; f++) {
        var m = this.rules[f];
        if (typeof m == "string")
          p += m, process.env.NODE_ENV !== "production" && (u = pe(u, m));
        else if (m) {
          var y = mr(ye(m, t, r, a));
          u = pe(u, y), p += y;
        }
      }
      if (p) {
        var b = Pt(u >>> 0);
        r.hasNameForId(this.componentId, b) || r.insertRules(this.componentId, b, a(p, ".".concat(b), void 0, this.componentId)), o = me(o, b);
      }
    }
    return o;
  }, e;
}(), zr = Q.createContext(void 0);
zr.Consumer;
var vt = {}, wr = /* @__PURE__ */ new Set();
function Pa(e, t, r) {
  var a = It(e), o = e, i = !gt(e), c = t.attrs, d = c === void 0 ? it : c, u = t.componentId, p = u === void 0 ? function($, j) {
    var x = typeof $ != "string" ? "sc" : ur($);
    vt[x] = (vt[x] || 0) + 1;
    var g = "".concat(x, "-").concat(Zn("6.0.7" + x + vt[x]));
    return j ? "".concat(j, "-").concat(g) : g;
  }(t.displayName, t.parentComponentId) : u, f = t.displayName, m = f === void 0 ? function($) {
    return gt($) ? "styled.".concat($) : "Styled(".concat(Ar($), ")");
  }(e) : f, y = t.displayName && t.componentId ? "".concat(ur(t.displayName), "-").concat(t.componentId) : t.componentId || p, b = a && o.attrs ? o.attrs.concat(d).filter(Boolean) : d, C = t.shouldForwardProp;
  if (a && o.shouldForwardProp) {
    var D = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var M = t.shouldForwardProp;
      C = function($, j) {
        return D($, j) && M($, j);
      };
    } else
      C = D;
  }
  var P = new _a(r, y, a ? o.componentStyle : void 0);
  function w($, j) {
    return function(x, g, ee) {
      var te = x.attrs, st = x.componentStyle, ct = x.defaultProps, ze = x.foldedComponentIds, Y = x.styledComponentId, re = x.target, de = Q.useContext(zr), Ve = yr(), be = x.shouldForwardProp || Ve.shouldForwardProp;
      process.env.NODE_ENV !== "production" && nr(Y);
      var q = function(xe, fe, le) {
        for (var K, U = W(W({}, fe), { className: void 0, theme: le }), he = 0; he < xe.length; he += 1) {
          var ne = $e(K = xe[he]) ? K(U) : K;
          for (var J in ne)
            U[J] = J === "className" ? me(U[J], ne[J]) : J === "style" ? W(W({}, U[J]), ne[J]) : ne[J];
        }
        return fe.className && (U.className = me(U.className, fe.className)), U;
      }(te, g, qn(g, de, ct) || Ae), se = q.as || re, ce = {};
      for (var B in q)
        q[B] === void 0 || B[0] === "$" || B === "as" || B === "theme" || (B === "forwardedAs" ? ce.as = q.forwardedAs : be && !be(B, se) || (ce[B] = q[B], be || process.env.NODE_ENV !== "development" || Rn(B) || wr.has(B) || !_t.has(se) || (wr.add(B), console.warn('styled-components: it looks like an unknown prop "'.concat(B, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var we = function(xe, fe) {
        var le = yr(), K = xe.generateAndInjectStyles(fe, le.styleSheet, le.stylis);
        return process.env.NODE_ENV !== "production" && nr(K), K;
      }(st, q);
      process.env.NODE_ENV !== "production" && x.warnTooManyClasses && x.warnTooManyClasses(we);
      var ke = me(ze, Y);
      return we && (ke += " " + we), q.className && (ke += " " + q.className), ce[gt(se) && !_t.has(se) ? "class" : "className"] = ke, ce.ref = ee, vn(se, ce);
    }(O, $, j);
  }
  process.env.NODE_ENV !== "production" && (w.displayName = m);
  var O = Q.forwardRef(w);
  return O.attrs = b, O.componentStyle = P, O.shouldForwardProp = C, process.env.NODE_ENV !== "production" && (O.displayName = m), O.foldedComponentIds = a ? me(o.foldedComponentIds, o.styledComponentId) : "", O.styledComponentId = y, O.target = a ? o.target : e, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = a ? function(j) {
      for (var x = [], g = 1; g < arguments.length; g++)
        x[g - 1] = arguments[g];
      for (var ee = 0, te = x; ee < te.length; ee++)
        Ot(j, te[ee], !0);
      return j;
    }({}, o.defaultProps, $) : $;
  } }), process.env.NODE_ENV !== "production" && (Hn(m, y), O.warnTooManyClasses = function($, j) {
    var x = {}, g = !1;
    return function(ee) {
      if (!g && (x[ee] = !0, Object.keys(x).length >= 200)) {
        var te = j ? ' with the id of "'.concat(j, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat($).concat(te, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, x = {};
      }
    };
  }(m, y)), Tt(O, function() {
    return ".".concat(O.styledComponentId);
  }), i && Dr(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), O;
}
function kr(e, t) {
  for (var r = [e[0]], a = 0, o = t.length; a < o; a += 1)
    r.push(t[a], e[a + 1]);
  return r;
}
var xr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Oa(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if ($e(e) || Ne(e)) {
    var a = e;
    return xr(ye(kr(it, _e([a], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? ye(o) : xr(ye(kr(o, t)));
}
function $t(e, t, r) {
  if (r === void 0 && (r = Ae), !t)
    throw De(1, t);
  var a = function(o) {
    for (var i = [], c = 1; c < arguments.length; c++)
      i[c - 1] = arguments[c];
    return e(t, r, Oa.apply(void 0, _e([o], i, !1)));
  };
  return a.attrs = function(o) {
    return $t(e, t, W(W({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, a.withConfig = function(o) {
    return $t(e, t, W(W({}, r), o));
  }, a;
}
var Vr = function(e) {
  return $t(Pa, e);
}, Be = Vr;
_t.forEach(function(e) {
  Be[e] = Vr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var qe = "__sc-".concat(ve, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[qe] || (window[qe] = 0), window[qe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[qe] += 1);
const ie = {
  xs: "320px",
  sm: "425px",
  md: "768px",
  lg: "1024px",
  xl: "2560px"
}, bt = ["xs", "sm", "md", "lg", "xl"];
function Aa(e) {
  const t = bt.indexOf(e);
  if (t === -1)
    throw new Error(`breakpoint "${e}" not found`);
  return t < bt.length - 1 ? bt[t + 1] : null;
}
function Ft(e) {
  return ie[e] || null;
}
function Lt(e) {
  const t = ie[e];
  if (!t)
    return null;
  const r = parseFloat(t);
  return r > 0 ? `${(r - 0.02).toFixed(2)}px` : null;
}
function Mt(e) {
  const t = Ft(e);
  return t ? `@media (min-width: ${t})` : "";
}
function Bt(e) {
  const t = Lt(e);
  return t ? `@media (max-width: ${t})` : "";
}
function $a(e, t) {
  const r = Ft(e), a = Lt(t);
  if (r && a)
    return `@media (min-width: ${r}) and (max-width: ${a})`;
  if (a) {
    if (!r)
      return Bt(t);
  } else
    return Mt(e);
  return "";
}
function Na(e) {
  const t = Ft(e), r = Aa(e), a = r ? Lt(r) : null;
  if (t && a)
    return `@media (min-width: ${t}) and (max-width: ${a})`;
  if (a) {
    if (!t)
      return Bt(r);
  } else
    return Mt(e);
  return "";
}
const Qe = {
  mobile: `(min-width: ${ie.xs})`,
  mobileLandscape: `(min-width: ${ie.sm})`,
  tablet: `(min-width: ${ie.md})`,
  tabletLandscape: `(min-width: ${ie.lg})`,
  laptop: `(min-width: ${ie.lg})`,
  desktop: `(min-width: ${ie.xl})`,
  up: Mt,
  down: Bt,
  between: $a,
  only: Na
}, _ = {
  white: "#fafafa",
  // casi blanco
  black: "#000",
  grayLight: "#e0e0e0",
  // gris claro
  gray: "#929292",
  // gris
  grayDark: "#4c4c4c",
  // gris oscuro
  darkLight: "#262626",
  // negro claro
  dark: "#1a1a1a",
  // negro medio
  darkDark: "#000"
}, wt = {
  light: "#9d9d9d",
  main: "#777777",
  dark: "#515151"
}, kt = {
  light: "#0085b8",
  // azul, tonalidades
  main: "#0057b8",
  dark: "#003f85"
}, xt = {
  light: "#d0b991",
  // cafe dorado, tonalidades
  main: "#b9975b",
  dark: "#8c6f3c"
}, Wr = {
  // tema claro
  name: "DesertTheme",
  // nombre tema claro
  breakpoints: ie,
  devices: Qe,
  mins: {
    toolbar: {
      minHeight: "64px"
    }
  },
  palette: {
    white: _.white,
    black: _.black,
    gray: {
      light: _.grayLight,
      main: _.gray,
      dark: _.grayDark
    },
    dark: {
      light: _.darkLight,
      main: _.dark,
      dark: _.darkDark
    },
    basic: {
      light: wt.light,
      main: wt.main,
      dark: wt.dark
    },
    primary: {
      light: kt.light,
      // azul, tonalidades
      main: kt.main,
      dark: kt.dark
    },
    secondary: {
      light: xt.light,
      // cafe dorado, tonalidades
      main: xt.main,
      dark: xt.dark
    },
    error: {
      light: "#f5c2c7",
      main: "#f8d7da",
      dark: "#842029"
    },
    warning: {
      light: "#ffecb5",
      main: "#fff3cd",
      dark: "#664d03"
    },
    info: {
      light: "#b6effb",
      main: "#cff4fc",
      dark: "#055160"
    },
    success: {
      light: "#badbcc",
      main: "#d1e7dd",
      dark: "#0f5132"
    },
    semaphore: {
      go: {
        light: "#00FF00",
        main: "#99CC33",
        dark: "#7AA328"
      },
      warning: {
        light: "#FFFF00",
        main: "#FFCC00",
        dark: "#CCA300"
      },
      stop: {
        light: "#FF0000",
        main: "#CC3300",
        dark: "#A32800"
      }
    }
  },
  typography: {
    fontFamily: [
      '"montserrat"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ],
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    elements: {
      h1: "2.5rem",
      h2: "2rem",
      h3: "1.35rem",
      h4: "1.15rem",
      h5: "1.05rem",
      h6: "1rem",
      title: "22px",
      subtitle1: "20px",
      subtitle2: "18px",
      body1: "12px",
      body2: "14px",
      footer: "12px"
    }
  },
  colorText: {
    basic: _.grayLight,
    // uso de los tonos base
    primary: _.dark,
    // uso de los tonos base
    secondary: _.grayDark,
    // uso de los tonos base
    disabled: _.gray,
    // uso de los tonos base
    exalt: "#",
    //     
    hint: "#",
    // 
    icon: "#"
    // 
  },
  background: {
    paper: _.white,
    // uso de los tonos base
    paper2: _.grayLight,
    // uso de los tonos base
    forms: _.grayLight,
    // fondo secundario
    forms2: _.grayLight,
    // lo ocuparé?
    default: _.gray,
    // lo ocuparé?
    transparent: "transparent"
    // transparente
  },
  action: {
    // ocuparlos
    active: _.white,
    hover: _.gray,
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(222, 226, 230, 0.41)",
    disabledOpacity: 0.38,
    focus: "rgb(224 224 224 / 75%)",
    focusOpacity: 0.25,
    activatedOpacity: 0.24
  },
  other: {}
};
var Yr = /* @__PURE__ */ ((e) => (e[e.basic = 0] = "basic", e[e.primary = 1] = "primary", e[e.secondary = 2] = "secondary", e[e.outlineBasic = 3] = "outlineBasic", e[e.outlinePrimary = 4] = "outlinePrimary", e[e.outlineSecondary = 5] = "outlineSecondary", e))(Yr || {});
const Ur = Q.forwardRef(
  function(t, r) {
    const { className: a, disabled: o, transparent: i, typeButton: c, ...d } = t;
    return /* @__PURE__ */ V.jsx(
      "button",
      {
        className: Ce(a),
        "aria-hidden": !0,
        ref: r,
        disabled: o === !0,
        ...d,
        children: t.children
      }
    );
  }
);
Ur.defaultProps = {};
const ja = Be(Ur)`
background: ${(e) => e.transparent === !0 ? e.theme.background.transparent : (t) => {
  switch (t.typeButton) {
    case 0:
      return t.theme.palette.basic.main;
    case 1:
      return t.theme.palette.primary.main;
    case 2:
      return t.theme.palette.secondary.main;
    case 3:
      return t.theme.background.paper;
    case 4:
      return t.theme.background.paper;
    case 5:
      return t.theme.background.paper;
    default:
      return t.theme.palette.primary.main;
  }
}} !important; };
color:  ${(e) => {
  switch (e.typeButton) {
    case 0:
      return _.white;
    case 1:
      return _.white;
    case 2:
      return _.white;
    case 3:
      return e.theme.palette.basic.main;
    case 4:
      return e.theme.palette.primary.main;
    case 5:
      return e.theme.palette.secondary.main;
    default:
      return _.white;
  }
}};
border: solid 1px ${(e) => {
  switch (e.typeButton) {
    case 0:
      return e.theme.palette.basic.light;
    case 1:
      return e.theme.palette.primary.light;
    case 2:
      return e.theme.palette.secondary.light;
    case 3:
      return e.theme.palette.basic.light;
    case 4:
      return e.theme.palette.primary.light;
    case 5:
      return e.theme.palette.secondary.light;
    default:
      return e.theme.palette.primary.light;
  }
}} !important;
border-radius: 4px;
box-shadow: none !important;
margin: 0px;
font-size: ${(e) => e.theme.typography.elements.body1};

-webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
padding: .84rem 1rem;

-webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
-o-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
margin: .375rem;
border: 0;
-webkit-border-radius: .125rem;
border-radius: .125rem;
cursor: pointer;
text-transform: uppercase;
white-space: normal;
word-wrap: break-word;

& svg {
  display: flex;
}

&:disabled {  
  background: ${(e) => {
  switch (e.typeButton) {
    case 0:
      return e.theme.palette.basic.light;
    case 1:
      return e.theme.palette.primary.light;
    case 2:
      return e.theme.palette.secondary.light;
    case 3:
      return e.theme.action.disabledBackground;
    case 4:
      return e.theme.action.disabledBackground;
    case 5:
      return e.theme.action.disabledBackground;
    default:
      return e.theme.palette.primary.light;
  }
}} !important;
  color: ${(e) => e.theme.colorText.primary} !important;    
  border-color: ${(e) => {
  switch (e.typeButton) {
    case 0:
      return e.theme.palette.basic.light;
    case 1:
      return e.theme.palette.primary.light;
    case 2:
      return e.theme.palette.secondary.light;
    case 3:
      return e.theme.palette.basic.light;
    case 4:
      return e.theme.palette.primary.light;
    case 5:
      return e.theme.palette.secondary.light;
    default:
      return e.theme.palette.primary.light;
  }
}} !important;
  cursor: not-allowed;
  &:hover {
    color: ${(e) => e.theme.colorText.secondary} !important;    
    background: ${(e) => {
  switch (e.typeButton) {
    case 0:
      return e.theme.palette.basic.light;
    case 1:
      return e.theme.palette.primary.light;
    case 2:
      return e.theme.palette.secondary.light;
    case 3:
      return e.theme.action.disabledBackground;
    case 4:
      return e.theme.action.disabledBackground;
    case 5:
      return e.theme.action.disabledBackground;
    default:
      return e.theme.palette.primary.light;
  }
}}  !important;
  }
};  
&:hover {
  color: ${_.white};  
  border-color: ${(e) => {
  switch (e.typeButton) {
    case 0:
      return e.theme.palette.basic.main;
    case 1:
      return e.theme.palette.primary.main;
    case 2:
      return e.theme.palette.secondary.main;
    case 3:
      return e.theme.palette.basic.main;
    case 4:
      return e.theme.palette.primary.main;
    case 5:
      return e.theme.palette.secondary.main;
    default:
      return e.theme.palette.primary.main;
  }
}} !important;  
  background: ${(e) => {
  switch (e.typeButton) {
    case 0:
      return e.theme.palette.basic.dark;
    case 1:
      return e.theme.palette.primary.dark;
    case 2:
      return e.theme.palette.secondary.dark;
    case 3:
      return e.theme.palette.basic.dark;
    case 4:
      return e.theme.palette.primary.dark;
    case 5:
      return e.theme.palette.secondary.dark;
    default:
      return e.theme.palette.primary.dark;
  }
}} !important;   
};
&:focus {
  color: ${(e) => {
  switch (e.typeButton) {
    case 0:
      return e.theme.palette.basic.dark;
    case 1:
      return e.theme.palette.primary.dark;
    case 2:
      return e.theme.palette.secondary.dark;
    case 3:
      return _.white;
    case 4:
      return _.white;
    case 5:
      return _.white;
    default:
      return e.theme.palette.primary.dark;
  }
}} !important;  
  border-color: ${(e) => {
  switch (e.typeButton) {
    case 0:
      return e.theme.palette.basic.light;
    case 1:
      return e.theme.palette.primary.light;
    case 2:
      return e.theme.palette.secondary.light;
    case 3:
      return e.theme.palette.basic.light;
    case 4:
      return e.theme.palette.primary.light;
    case 5:
      return e.theme.palette.secondary.light;
    default:
      return e.theme.palette.primary.light;
  }
}} !important;  
  background: ${(e) => {
  switch (e.typeButton) {
    case 0:
      return e.theme.palette.basic.light;
    case 1:
      return e.theme.palette.primary.light;
    case 2:
      return e.theme.palette.secondary.light;
    case 3:
      return e.theme.palette.basic.light;
    case 4:
      return e.theme.palette.primary.light;
    case 5:
      return e.theme.palette.secondary.light;
    default:
      return e.theme.palette.primary.light;
  }
}} !important;   
  outline: 0;  
};
`, zt = Q.forwardRef(
  function(t, r) {
    const { className: a, children: o, theme: i, onClose: c = () => {
    }, ...d } = t, u = (f) => {
      f.stopPropagation(), c();
    }, p = "div";
    return /* @__PURE__ */ V.jsx(
      p,
      {
        className: Ce(a),
        "aria-hidden": !0,
        ref: r,
        onClick: u,
        ...d,
        children: o && o
      }
    );
  }
);
zt.propTypes = {};
zt.defaultProps = {};
const Da = Be(zt).attrs((e) => ({
  theme: e.theme.name !== void 0 ? e.theme : Wr
}))`
  background-color: #062b3d66;
  width: 100%;
  height: 100%;
  min-height: inherit;
  border: none;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
  z-index: 100001;
  padding: 0px !important;
  margin: 0px !important;
  top: 0px;
  left: 0px;
  right: 0;
  bottom: 0;

  /*display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center; */

  /* width: 100%;
margin-bottom: 1rem;
border-collapse: collapse;
text-indent: initial;
border-spacing: 2px; */
`;
var Gr = /* @__PURE__ */ ((e) => (e[e.paragraph = 0] = "paragraph", e[e.label = 1] = "label", e[e.title = 2] = "title", e[e.subtitle = 3] = "subtitle", e[e.subtitle2 = 4] = "subtitle2", e[e.body = 5] = "body", e[e.body2 = 6] = "body2", e[e.foooter = 7] = "foooter", e[e.h1 = 8] = "h1", e[e.h2 = 9] = "h2", e[e.h3 = 10] = "h3", e[e.h4 = 11] = "h4", e[e.h5 = 12] = "h5", e[e.h6 = 13] = "h6", e))(Gr || {});
const Hr = Q.forwardRef(function(t, r) {
  const {
    className: a,
    theme: o,
    typeText: i,
    labelFor: c,
    inline: d = !1,
    textAlign: u,
    bold: p = !1,
    italic: f,
    ...m
  } = t, b = ((C) => {
    switch (C) {
      case 0:
        return "p";
      case 8:
        return "h1";
      case 9:
        return "h2";
      case 10:
        return "h3";
      case 11:
        return "h4";
      case 12:
        return "h5";
      case 13:
        return "h6";
      case 1:
        return "label";
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return "span";
      default:
        return "span";
    }
  })(i);
  return /* @__PURE__ */ V.jsx(
    b,
    {
      className: Ce(
        a
      ),
      htmlFor: c && c,
      ref: r,
      ...m
    }
  );
});
Hr.defaultProps = {};
const Ia = Be(Hr).attrs((e) => ({
  theme: e.theme.name != null ? e.theme : Wr
}))`

background-color: ${(e) => e.theme.background.transparent};
 font-family: ${(e) => e.theme.typography.fontFamily.toString()};
 font-size: ${(e) => {
  switch (e.typeText) {
    case 2:
      return e.theme.typography.elements.title;
    case 1:
      return e.theme.typography.elements.body1;
    case 3:
      return e.theme.typography.elements.subtitle1;
    case 4:
      return e.theme.typography.elements.subtitle2;
    case 5:
      return e.theme.typography.elements.body1;
    case 6:
      return e.theme.typography.elements.body2;
    case 7:
      return e.theme.typography.elements.footer;
    case 0:
      return e.theme.typography.elements.body1;
    case 8:
      return e.theme.typography.elements.h1;
    case 9:
      return e.theme.typography.elements.h2;
    case 10:
      return e.theme.typography.elements.h3;
    case 11:
      return e.theme.typography.elements.h4;
    case 12:
      return e.theme.typography.elements.h5;
    case 13:
      return e.theme.typography.elements.h6;
    default:
      return e.theme.typography.elements.body1 || "12px";
  }
}};
margin: 0;
display: ${(e) => e.inline ? "inline-block" : "block"};
color: ${(e) => e.theme.colorText.primary};
span: {
    display: 'initial',
};
text-align: ${(e) => e.textAlign};   
font-weight : ${(e) => e.bold == !0 ? "bold" : e.bold == !1 ? "initial" : "inherit"};
text-decoration: ${(e) => e.underline ? "underline" : "initial"};
font-style: ${(e) => e.italic ? "italic" : "normal"};
`, Ta = ({
  head: e
}) => e ? /* @__PURE__ */ V.jsx("div", { className: "modal-head", children: typeof e == "string" ? /* @__PURE__ */ V.jsx(Ia, { typeText: Gr.subtitle, className: "modal-title", children: e }) : e }) : null, Fa = ({ footer: e, onClose: t }) => /* @__PURE__ */ V.jsx("div", { className: "modal-footer", children: e || /* @__PURE__ */ V.jsx(ja, { typeButton: Yr.primary, onClick: t, children: "Cerrar" }) }), Vt = (e) => {
  const {
    className: t = "",
    head: r,
    footer: a,
    children: o,
    onClose: i,
    showModal: c,
    full: d = !1,
    modalFull: u = !1,
    style: p = {},
    styleBody: f = {},
    theme: m,
    ...y
  } = e;
  return wn(() => {
    c ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
  }, [c]), c ? /* @__PURE__ */ V.jsx(
    Da,
    {
      className: Ce(t),
      style: p,
      "aria-hidden": !0,
      onClose: i,
      ...y,
      children: /* @__PURE__ */ V.jsx("div", { className: "modal-dialog", children: /* @__PURE__ */ V.jsx(
        "div",
        {
          className: Ce("modal", { "modal-full": u }),
          onClick: (b) => b.stopPropagation(),
          children: /* @__PURE__ */ V.jsxs("div", { className: Ce("modal-wrapper", { "modal-wrapper-full": d }), children: [
            /* @__PURE__ */ V.jsx(Ta, { head: r }),
            /* @__PURE__ */ V.jsx("div", { className: "modal-body", style: f, children: o }),
            /* @__PURE__ */ V.jsx(Fa, { footer: a, onClose: i })
          ] })
        }
      ) })
    }
  ) : null;
};
Vt.propTypes = {};
Vt.defaultProps = {};
Be(Vt)`
  display: block;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: ${(e) => e.full === !0 ? "100%" : "auto"};

  .modal-dialog {
    margin: 1.75rem auto;
    min-height: calc(100vh - (1.75rem * 2));
    margin: 1.75rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    background: ${(e) => e.theme.background.paper};
    display: block;
    border-radius: 0.5rem;
    height: ${(e) => e.full === !0 ? "100%" : "auto"};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    @media ${Qe.mobile} {
      max-width: 98%;
    }
    @media ${Qe.tablet} {
      max-width: 90%;
    }
    @media ${Qe.laptop} {
      max-width: 70%;
    }
  }
  .modal-full {
    width: 100%;
    max-width: 97.4%;
  }
  .modal-wrapper-full {
    min-height: calc(100vh - (1.75rem * 2));
    display: grid;
    grid-template-rows: auto 2fr auto;
    align-items: stretch;
  }
  .modal-head {
    background-color: ${(e) => e.theme.palette.primary.main};
    text-align: left;
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 10px 30px 10px 10px;
  }
  .modal-body {
    margin: "0px 0px 10px 0px";
    overflow: hidden;
  }
  .modal-title {
    color: ${_.white};
  }
  .modal-footer {
    padding: 0;
    text-align: right;
    border-radius: 0 0 0.5rem 0.5rem;
    height: fit-content;
    background-color: ${(e) => e.theme.background.paper2};
  }
`;
export {
  ja as Button,
  Da as LayerFront,
  Ia as Text,
  Yr as TypeButton,
  Gr as TypeText
};
//# sourceMappingURL=index.es.js.map
