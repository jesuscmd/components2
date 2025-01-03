import he, { useRef as Kr, useDebugValue as Yt, createElement as Jr, useContext as Zr } from "react";
var dt = { exports: {} }, Ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wt;
function Qr() {
  if (Wt)
    return Ne;
  Wt = 1;
  var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, g) {
    var d, h = {}, b = null, E = null;
    g !== void 0 && (b = "" + g), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (E = l.ref);
    for (d in l)
      o.call(l, d) && !i.hasOwnProperty(d) && (h[d] = l[d]);
    if (f && f.defaultProps)
      for (d in l = f.defaultProps, l)
        h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: t, type: f, key: b, ref: E, props: h, _owner: a.current };
  }
  return Ne.Fragment = r, Ne.jsx = c, Ne.jsxs = c, Ne;
}
var Ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bt;
function en() {
  return Bt || (Bt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), k = Symbol.iterator, I = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var s = k && n[k] || n[I];
      return typeof s == "function" ? s : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(n) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++)
          u[p - 1] = arguments[p];
        P("error", n, u);
      }
    }
    function P(n, s, u) {
      {
        var p = C.ReactDebugCurrentFrame, R = p.getStackAddendum();
        R !== "" && (s += "%s", u = u.concat([R]));
        var O = u.map(function(_) {
          return String(_);
        });
        O.unshift("Warning: " + s), Function.prototype.apply.call(console[n], console, O);
      }
    }
    var T = !1, N = !1, S = !1, m = !1, J = !1, Z;
    Z = Symbol.for("react.module.reference");
    function tt(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === i || J || n === a || n === g || n === d || m || n === E || T || N || S || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === h || n.$$typeof === c || n.$$typeof === f || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Z || n.getModuleId !== void 0));
    }
    function rt(n, s, u) {
      var p = n.displayName;
      if (p)
        return p;
      var R = s.displayName || s.name || "";
      return R !== "" ? u + "(" + R + ")" : u;
    }
    function $e(n) {
      return n.displayName || "Context";
    }
    function Y(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case g:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var s = n;
            return $e(s) + ".Consumer";
          case c:
            var u = n;
            return $e(u._context) + ".Provider";
          case l:
            return rt(n, n.render, "ForwardRef");
          case h:
            var p = n.displayName || null;
            return p !== null ? p : Y(n.type) || "Memo";
          case b: {
            var R = n, O = R._payload, _ = R._init;
            try {
              return Y(_(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, se = 0, Fe, ge, G, ne, oe, L, ye;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function be() {
      {
        if (se === 0) {
          Fe = console.log, ge = console.info, G = console.warn, ne = console.error, oe = console.group, L = console.groupCollapsed, ye = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        se++;
      }
    }
    function ce() {
      {
        if (se--, se === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, n, {
              value: Fe
            }),
            info: Q({}, n, {
              value: ge
            }),
            warn: Q({}, n, {
              value: G
            }),
            error: Q({}, n, {
              value: ne
            }),
            group: Q({}, n, {
              value: oe
            }),
            groupCollapsed: Q({}, n, {
              value: L
            }),
            groupEnd: Q({}, n, {
              value: ye
            })
          });
        }
        se < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = C.ReactCurrentDispatcher, q;
    function W(n, s, u) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (R) {
            var p = R.stack.trim().match(/\n( *(at )?)/);
            q = p && p[1] || "";
          }
        return `
` + q + n;
      }
    }
    var ue = !1, ee;
    {
      var X = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new X();
    }
    function Pt(n, s) {
      if (!n || ue)
        return "";
      {
        var u = ee.get(n);
        if (u !== void 0)
          return u;
      }
      var p;
      ue = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = ae.current, ae.current = null, be();
      try {
        if (s) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (te) {
              p = te;
            }
            Reflect.construct(n, [], _);
          } else {
            try {
              _.call();
            } catch (te) {
              p = te;
            }
            n.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            p = te;
          }
          n();
        }
      } catch (te) {
        if (te && p && typeof te.stack == "string") {
          for (var w = te.stack.split(`
`), z = p.stack.split(`
`), D = w.length - 1, j = z.length - 1; D >= 1 && j >= 0 && w[D] !== z[j]; )
            j--;
          for (; D >= 1 && j >= 0; D--, j--)
            if (w[D] !== z[j]) {
              if (D !== 1 || j !== 1)
                do
                  if (D--, j--, j < 0 || w[D] !== z[j]) {
                    var B = `
` + w[D].replace(" at new ", " at ");
                    return n.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", n.displayName)), typeof n == "function" && ee.set(n, B), B;
                  }
                while (D >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        ue = !1, ae.current = O, ce(), Error.prepareStackTrace = R;
      }
      var Se = n ? n.displayName || n.name : "", Vt = Se ? W(Se) : "";
      return typeof n == "function" && ee.set(n, Vt), Vt;
    }
    function Pr(n, s, u) {
      return Pt(n, !1);
    }
    function Or(n) {
      var s = n.prototype;
      return !!(s && s.isReactComponent);
    }
    function Me(n, s, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Pt(n, Or(n));
      if (typeof n == "string")
        return W(n);
      switch (n) {
        case g:
          return W("Suspense");
        case d:
          return W("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return Pr(n.render);
          case h:
            return Me(n.type, s, u);
          case b: {
            var p = n, R = p._payload, O = p._init;
            try {
              return Me(O(R), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, Ot = {}, Tt = C.ReactDebugCurrentFrame;
    function ze(n) {
      if (n) {
        var s = n._owner, u = Me(n.type, n._source, s ? s.type : null);
        Tt.setExtraStackFrame(u);
      } else
        Tt.setExtraStackFrame(null);
    }
    function Tr(n, s, u, p, R) {
      {
        var O = Function.call.bind(Le);
        for (var _ in n)
          if (O(n, _)) {
            var w = void 0;
            try {
              if (typeof n[_] != "function") {
                var z = Error((p || "React class") + ": " + u + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              w = n[_](s, _, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              w = D;
            }
            w && !(w instanceof Error) && (ze(R), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, _, typeof w), ze(null)), w instanceof Error && !(w.message in Ot) && (Ot[w.message] = !0, ze(R), v("Failed %s type: %s", u, w.message), ze(null));
          }
      }
    }
    var Ar = Array.isArray;
    function nt(n) {
      return Ar(n);
    }
    function Nr(n) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function Ir(n) {
      try {
        return At(n), !1;
      } catch {
        return !0;
      }
    }
    function At(n) {
      return "" + n;
    }
    function Nt(n) {
      if (Ir(n))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nr(n)), At(n);
    }
    var Ae = C.ReactCurrentOwner, Dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, It, Dt, ot;
    ot = {};
    function jr(n) {
      if (Le.call(n, "ref")) {
        var s = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function $r(n) {
      if (Le.call(n, "key")) {
        var s = Object.getOwnPropertyDescriptor(n, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Fr(n, s) {
      if (typeof n.ref == "string" && Ae.current && s && Ae.current.stateNode !== s) {
        var u = Y(Ae.current.type);
        ot[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(Ae.current.type), n.ref), ot[u] = !0);
      }
    }
    function Mr(n, s) {
      {
        var u = function() {
          It || (It = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Lr(n, s) {
      {
        var u = function() {
          Dt || (Dt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var zr = function(n, s, u, p, R, O, _) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: s,
        ref: u,
        props: _,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Vr(n, s, u, p, R) {
      {
        var O, _ = {}, w = null, z = null;
        u !== void 0 && (Nt(u), w = "" + u), $r(s) && (Nt(s.key), w = "" + s.key), jr(s) && (z = s.ref, Fr(s, R));
        for (O in s)
          Le.call(s, O) && !Dr.hasOwnProperty(O) && (_[O] = s[O]);
        if (n && n.defaultProps) {
          var D = n.defaultProps;
          for (O in D)
            _[O] === void 0 && (_[O] = D[O]);
        }
        if (w || z) {
          var j = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          w && Mr(_, j), z && Lr(_, j);
        }
        return zr(n, w, z, R, p, Ae.current, _);
      }
    }
    var at = C.ReactCurrentOwner, jt = C.ReactDebugCurrentFrame;
    function we(n) {
      if (n) {
        var s = n._owner, u = Me(n.type, n._source, s ? s.type : null);
        jt.setExtraStackFrame(u);
      } else
        jt.setExtraStackFrame(null);
    }
    var it;
    it = !1;
    function st(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function $t() {
      {
        if (at.current) {
          var n = Y(at.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Yr(n) {
      {
        if (n !== void 0) {
          var s = n.fileName.replace(/^.*[\\\/]/, ""), u = n.lineNumber;
          return `

Check your code at ` + s + ":" + u + ".";
        }
        return "";
      }
    }
    var Ft = {};
    function Wr(n) {
      {
        var s = $t();
        if (!s) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function Mt(n, s) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = Wr(s);
        if (Ft[u])
          return;
        Ft[u] = !0;
        var p = "";
        n && n._owner && n._owner !== at.current && (p = " It was passed a child from " + Y(n._owner.type) + "."), we(n), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), we(null);
      }
    }
    function Lt(n, s) {
      {
        if (typeof n != "object")
          return;
        if (nt(n))
          for (var u = 0; u < n.length; u++) {
            var p = n[u];
            st(p) && Mt(p, s);
          }
        else if (st(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var R = M(n);
          if (typeof R == "function" && R !== n.entries)
            for (var O = R.call(n), _; !(_ = O.next()).done; )
              st(_.value) && Mt(_.value, s);
        }
      }
    }
    function Br(n) {
      {
        var s = n.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === h))
          u = s.propTypes;
        else
          return;
        if (u) {
          var p = Y(s);
          Tr(u, n.props, "prop", p, n);
        } else if (s.PropTypes !== void 0 && !it) {
          it = !0;
          var R = Y(s);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ur(n) {
      {
        for (var s = Object.keys(n.props), u = 0; u < s.length; u++) {
          var p = s[u];
          if (p !== "children" && p !== "key") {
            we(n), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), we(null);
            break;
          }
        }
        n.ref !== null && (we(n), v("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function zt(n, s, u, p, R, O) {
      {
        var _ = tt(n);
        if (!_) {
          var w = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Yr(R);
          z ? w += z : w += $t();
          var D;
          n === null ? D = "null" : nt(n) ? D = "array" : n !== void 0 && n.$$typeof === t ? (D = "<" + (Y(n.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : D = typeof n, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, w);
        }
        var j = Vr(n, s, u, R, O);
        if (j == null)
          return j;
        if (_) {
          var B = s.children;
          if (B !== void 0)
            if (p)
              if (nt(B)) {
                for (var Se = 0; Se < B.length; Se++)
                  Lt(B[Se], n);
                Object.freeze && Object.freeze(B);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lt(B, n);
        }
        return n === o ? Ur(j) : Br(j), j;
      }
    }
    function Gr(n, s, u) {
      return zt(n, s, u, !0);
    }
    function Hr(n, s, u) {
      return zt(n, s, u, !1);
    }
    var qr = Hr, Xr = Gr;
    Ie.Fragment = o, Ie.jsx = qr, Ie.jsxs = Xr;
  }()), Ie;
}
process.env.NODE_ENV === "production" ? dt.exports = Qr() : dt.exports = en();
var tn = dt.exports, V = function() {
  return V = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, V.apply(this, arguments);
};
function _e(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, a = t.length, i; o < a; o++)
      (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function rn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var nn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, on = /* @__PURE__ */ rn(
  function(e) {
    return nn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), A = "-ms-", je = "-moz-", x = "-webkit-", cr = "comm", Ke = "rule", Et = "decl", an = "@import", ur = "@keyframes", sn = "@layer", cn = Math.abs, _t = String.fromCharCode, ht = Object.assign;
function un(e, t) {
  return F(e, 0) ^ 45 ? (((t << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function lr(e) {
  return e.trim();
}
function re(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function y(e, t, r) {
  return e.replace(t, r);
}
function Be(e, t) {
  return e.indexOf(t);
}
function F(e, t) {
  return e.charCodeAt(t) | 0;
}
function Re(e, t, r) {
  return e.slice(t, r);
}
function K(e) {
  return e.length;
}
function fr(e) {
  return e.length;
}
function De(e, t) {
  return t.push(e), e;
}
function ln(e, t) {
  return e.map(t).join("");
}
function Ut(e, t) {
  return e.filter(function(r) {
    return !re(r, t);
  });
}
var Je = 1, xe = 1, pr = 0, U = 0, $ = 0, Oe = "";
function Ze(e, t, r, o, a, i, c, f) {
  return { value: e, root: t, parent: r, type: o, props: a, children: i, line: Je, column: xe, length: c, return: "", siblings: f };
}
function ie(e, t) {
  return ht(Ze("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ee(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  De(e, e.siblings);
}
function fn() {
  return $;
}
function pn() {
  return $ = U > 0 ? F(Oe, --U) : 0, xe--, $ === 10 && (xe = 1, Je--), $;
}
function H() {
  return $ = U < pr ? F(Oe, U++) : 0, xe++, $ === 10 && (xe = 1, Je++), $;
}
function pe() {
  return F(Oe, U);
}
function Ue() {
  return U;
}
function Qe(e, t) {
  return Re(Oe, e, t);
}
function mt(e) {
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
function dn(e) {
  return Je = xe = 1, pr = K(Oe = e), U = 0, [];
}
function hn(e) {
  return Oe = "", e;
}
function ct(e) {
  return lr(Qe(U - 1, gt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function mn(e) {
  for (; ($ = pe()) && $ < 33; )
    H();
  return mt(e) > 2 || mt($) > 3 ? "" : " ";
}
function gn(e, t) {
  for (; --t && H() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return Qe(e, Ue() + (t < 6 && pe() == 32 && H() == 32));
}
function gt(e) {
  for (; H(); )
    switch ($) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && gt($);
        break;
      case 40:
        e === 41 && gt(e);
        break;
      case 92:
        H();
        break;
    }
  return U;
}
function yn(e, t) {
  for (; H() && e + $ !== 47 + 10; )
    if (e + $ === 42 + 42 && pe() === 47)
      break;
  return "/*" + Qe(t, U - 1) + "*" + _t(e === 47 ? e : H());
}
function vn(e) {
  for (; !mt(pe()); )
    H();
  return Qe(e, U);
}
function bn(e) {
  return hn(Ge("", null, null, null, [""], e = dn(e), 0, [0], e));
}
function Ge(e, t, r, o, a, i, c, f, l) {
  for (var g = 0, d = 0, h = c, b = 0, E = 0, k = 0, I = 1, M = 1, C = 1, v = 0, P = "", T = a, N = i, S = o, m = P; M; )
    switch (k = v, v = H()) {
      case 40:
        if (k != 108 && F(m, h - 1) == 58) {
          Be(m += y(ct(v), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += ct(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += mn(k);
        break;
      case 92:
        m += gn(Ue() - 1, 7);
        continue;
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            De(wn(yn(H(), Ue()), t, r, l), l);
            break;
          default:
            m += "/";
        }
        break;
      case 123 * I:
        f[g++] = K(m) * C;
      case 125 * I:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            M = 0;
          case 59 + d:
            C == -1 && (m = y(m, /\f/g, "")), E > 0 && K(m) - h && De(E > 32 ? Ht(m + ";", o, r, h - 1, l) : Ht(y(m, " ", "") + ";", o, r, h - 2, l), l);
            break;
          case 59:
            m += ";";
          default:
            if (De(S = Gt(m, t, r, g, d, a, f, P, T = [], N = [], h, i), i), v === 123)
              if (d === 0)
                Ge(m, t, S, S, T, i, h, f, N);
              else
                switch (b === 99 && F(m, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ge(e, S, S, o && De(Gt(e, S, S, 0, 0, a, f, P, a, T = [], h, N), N), a, N, h, f, o ? T : N);
                    break;
                  default:
                    Ge(m, S, S, S, [""], N, 0, f, N);
                }
        }
        g = d = E = 0, I = C = 1, P = m = "", h = c;
        break;
      case 58:
        h = 1 + K(m), E = k;
      default:
        if (I < 1) {
          if (v == 123)
            --I;
          else if (v == 125 && I++ == 0 && pn() == 125)
            continue;
        }
        switch (m += _t(v), v * I) {
          case 38:
            C = d > 0 ? 1 : (m += "\f", -1);
            break;
          case 44:
            f[g++] = (K(m) - 1) * C, C = 1;
            break;
          case 64:
            pe() === 45 && (m += ct(H())), b = pe(), d = h = K(P = m += vn(Ue())), v++;
            break;
          case 45:
            k === 45 && K(m) == 2 && (I = 0);
        }
    }
  return i;
}
function Gt(e, t, r, o, a, i, c, f, l, g, d, h) {
  for (var b = a - 1, E = a === 0 ? i : [""], k = fr(E), I = 0, M = 0, C = 0; I < o; ++I)
    for (var v = 0, P = Re(e, b + 1, b = cn(M = c[I])), T = e; v < k; ++v)
      (T = lr(M > 0 ? E[v] + " " + P : y(P, /&\f/g, E[v]))) && (l[C++] = T);
  return Ze(e, t, r, a === 0 ? Ke : f, l, g, d, h);
}
function wn(e, t, r, o) {
  return Ze(e, t, r, cr, _t(fn()), Re(e, 2, -2), 0, o);
}
function Ht(e, t, r, o, a) {
  return Ze(e, t, r, Et, Re(e, 0, o), Re(e, o + 1, -1), o, a);
}
function dr(e, t, r) {
  switch (un(e, t)) {
    case 5103:
      return x + "print-" + e + e;
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
      return x + e + e;
    case 4789:
      return je + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return x + e + je + e + A + e + e;
    case 5936:
      switch (F(e, t + 11)) {
        case 114:
          return x + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return x + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return x + e + A + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return x + e + A + e + e;
    case 6165:
      return x + e + A + "flex-" + e + e;
    case 5187:
      return x + e + y(e, /(\w+).+(:[^]+)/, x + "box-$1$2" + A + "flex-$1$2") + e;
    case 5443:
      return x + e + A + "flex-item-" + y(e, /flex-|-self/g, "") + (re(e, /flex-|baseline/) ? "" : A + "grid-row-" + y(e, /flex-|-self/g, "")) + e;
    case 4675:
      return x + e + A + "flex-line-pack" + y(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return x + e + A + y(e, "shrink", "negative") + e;
    case 5292:
      return x + e + A + y(e, "basis", "preferred-size") + e;
    case 6060:
      return x + "box-" + y(e, "-grow", "") + x + e + A + y(e, "grow", "positive") + e;
    case 4554:
      return x + y(e, /([^-])(transform)/g, "$1" + x + "$2") + e;
    case 6187:
      return y(y(y(e, /(zoom-|grab)/, x + "$1"), /(image-set)/, x + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return y(e, /(image-set\([^]*)/, x + "$1$`$1");
    case 4968:
      return y(y(e, /(.+:)(flex-)?(.*)/, x + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + x + e + e;
    case 4200:
      if (!re(e, /flex-|baseline/))
        return A + "grid-column-align" + Re(e, t) + e;
      break;
    case 2592:
    case 3360:
      return A + y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(o, a) {
        return t = a, re(o.props, /grid-\w+-end/);
      }) ? ~Be(e + (r = r[t].value), "span") ? e : A + y(e, "-start", "") + e + A + "grid-row-span:" + (~Be(r, "span") ? re(r, /\d+/) : +re(r, /\d+/) - +re(e, /\d+/)) + ";" : A + y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return re(o.props, /grid-\w+-start/);
      }) ? e : A + y(y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(e, /(.+)-inline(.+)/, x + "$1$2") + e;
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
      if (K(e) - 1 - t > 6)
        switch (F(e, t + 1)) {
          case 109:
            if (F(e, t + 4) !== 45)
              break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + x + "$2-$3$1" + je + (F(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Be(e, "stretch") ? dr(y(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return y(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, i, c, f, l, g) {
        return A + a + ":" + i + g + (c ? A + a + "-span:" + (f ? l : +l - +i) + g : "") + e;
      });
    case 4949:
      if (F(e, t + 6) === 121)
        return y(e, ":", ":" + x) + e;
      break;
    case 6444:
      switch (F(e, F(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return y(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + x + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + x + "$2$3$1" + A + "$2box$3") + e;
        case 100:
          return y(e, ":", ":" + A) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return y(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function qe(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Sn(e, t, r, o) {
  switch (e.type) {
    case sn:
      if (e.children.length)
        break;
    case an:
    case Et:
      return e.return = e.return || e.value;
    case cr:
      return "";
    case ur:
      return e.return = e.value + "{" + qe(e.children, o) + "}";
    case Ke:
      if (!K(e.value = e.props.join(",")))
        return "";
  }
  return K(r = qe(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function En(e) {
  var t = fr(e);
  return function(r, o, a, i) {
    for (var c = "", f = 0; f < t; f++)
      c += e[f](r, o, a, i) || "";
    return c;
  };
}
function _n(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Rn(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Et:
        e.return = dr(e.value, e.length, r);
        return;
      case ur:
        return qe([ie(e, { value: y(e.value, "@", "@" + x) })], o);
      case Ke:
        if (e.length)
          return ln(r = e.props, function(a) {
            switch (re(a, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ee(ie(e, { props: [y(a, /:(read-\w+)/, ":" + je + "$1")] })), Ee(ie(e, { props: [a] })), ht(e, { props: Ut(r, o) });
                break;
              case "::placeholder":
                Ee(ie(e, { props: [y(a, /:(plac\w+)/, ":" + x + "input-$1")] })), Ee(ie(e, { props: [y(a, /:(plac\w+)/, ":" + je + "$1")] })), Ee(ie(e, { props: [y(a, /:(plac\w+)/, A + "input-$1")] })), Ee(ie(e, { props: [a] })), ht(e, { props: Ut(r, o) });
                break;
            }
            return "";
          });
    }
}
var xn = {
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
}, me = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Rt = typeof window < "u" && "HTMLElement" in window, kn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), qt = /invalid hook call/i, Ve = /* @__PURE__ */ new Set(), Cn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var i = !0;
      console.error = function(c) {
        for (var f = [], l = 1; l < arguments.length; l++)
          f[l - 1] = arguments[l];
        qt.test(c) ? (i = !1, Ve.delete(o)) : a.apply(void 0, _e([c], f, !1));
      }, Kr(), i && !Ve.has(o) && (console.warn(o), Ve.add(o));
    } catch (c) {
      qt.test(c.message) && Ve.delete(o);
    } finally {
      console.error = a;
    }
  }
}, et = Object.freeze([]), ke = Object.freeze({});
function Pn(e, t, r) {
  return r === void 0 && (r = ke), e.theme !== r.theme && e.theme || t || r.theme;
}
var yt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), On = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Tn = /(^-|-$)/g;
function Xt(e) {
  return e.replace(On, "-").replace(Tn, "");
}
var An = /(a)(d)/gi, Kt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function vt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = Kt(t % 52) + r;
  return (Kt(t % 52) + r).replace(An, "$1-$2");
}
var ut, le = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, hr = function(e) {
  return le(5381, e);
};
function Nn(e) {
  return vt(hr(e) >>> 0);
}
function mr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function lt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var gr = typeof Symbol == "function" && Symbol.for, yr = gr ? Symbol.for("react.memo") : 60115, In = gr ? Symbol.for("react.forward_ref") : 60112, Dn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, jn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, vr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, $n = ((ut = {})[In] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ut[yr] = vr, ut);
function Jt(e) {
  return ("type" in (t = e) && t.type.$$typeof) === yr ? vr : "$$typeof" in e ? $n[e.$$typeof] : Dn;
  var t;
}
var Fn = Object.defineProperty, Mn = Object.getOwnPropertyNames, Zt = Object.getOwnPropertySymbols, Ln = Object.getOwnPropertyDescriptor, zn = Object.getPrototypeOf, Qt = Object.prototype;
function br(e, t, r) {
  if (typeof t != "string") {
    if (Qt) {
      var o = zn(t);
      o && o !== Qt && br(e, o, r);
    }
    var a = Mn(t);
    Zt && (a = a.concat(Zt(t)));
    for (var i = Jt(e), c = Jt(t), f = 0; f < a.length; ++f) {
      var l = a[f];
      if (!(l in jn || r && r[l] || c && l in c || i && l in i)) {
        var g = Ln(t, l);
        try {
          Fn(e, l, g);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ce(e) {
  return typeof e == "function";
}
function xt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function fe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function er(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], o = 1; o < e.length; o++)
    r += t ? t + e[o] : e[o];
  return r;
}
function Pe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function bt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Pe(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      e[o] = bt(e[o], t[o]);
  else if (Pe(t))
    for (var o in t)
      e[o] = bt(e[o], t[o]);
  return e;
}
function kt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Vn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Yn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], o = [], a = 1, i = e.length; a < i; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Te(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Yn.apply(void 0, _e([Vn[e]], t, !1)).trim());
}
var Wn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, i = a; t >= i; )
        if ((i <<= 1) < 0)
          throw Te(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = a; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), l = (c = 0, r.length); c < l; c++)
      this.tag.insertRule(f, r[c]) && (this.groupSizes[t]++, f++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), a = o + r;
      this.groupSizes[t] = 0;
      for (var i = o; i < a; i++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), i = a + o, c = a; c < i; c++)
      r += "".concat(this.tag.getRule(c)).concat(`/*!sc*/
`);
    return r;
  }, e;
}(), He = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), ft = 1, Ye = function(e) {
  if (He.has(e))
    return He.get(e);
  for (; Xe.has(ft); )
    ft++;
  var t = ft++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Te(16, "".concat(t));
  return He.set(e, t), Xe.set(t, e), t;
}, Bn = function(e, t) {
  He.set(e, t), Xe.set(t, e);
}, Un = "style[".concat(me, "][").concat("data-styled-version", '="').concat("6.0.7", '"]'), Gn = new RegExp("^".concat(me, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Hn = function(e, t, r) {
  for (var o, a = r.split(","), i = 0, c = a.length; i < c; i++)
    (o = a[i]) && e.registerName(t, o);
}, qn = function(e, t) {
  for (var r, o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(`/*!sc*/
`), a = [], i = 0, c = o.length; i < c; i++) {
    var f = o[i].trim();
    if (f) {
      var l = f.match(Gn);
      if (l) {
        var g = 0 | parseInt(l[1], 10), d = l[2];
        g !== 0 && (Bn(d, g), Hn(e, d, l[3]), e.getTag().insertRules(g, a)), a.length = 0;
      } else
        a.push(f);
    }
  }
};
function Xn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var wr = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), a = function(f) {
    var l = Array.from(f.querySelectorAll("style[".concat(me, "]")));
    return l[l.length - 1];
  }(r), i = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(me, "active"), o.setAttribute("data-styled-version", "6.0.7");
  var c = Xn();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, i), o;
}, Kn = function() {
  function e(t) {
    this.element = wr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var o = document.styleSheets, a = 0, i = o.length; a < i; a++) {
        var c = o[a];
        if (c.ownerNode === r)
          return c;
      }
      throw Te(17);
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
}(), Jn = function() {
  function e(t) {
    this.element = wr(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r);
      return this.element.insertBefore(o, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Zn = function() {
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
}(), tr = Rt, Qn = { isServer: !Rt, useCSSOMInjection: !kn }, Sr = function() {
  function e(t, r, o) {
    t === void 0 && (t = ke), r === void 0 && (r = {});
    var a = this;
    this.options = V(V({}, Qn), t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Rt && tr && (tr = !1, function(i) {
      for (var c = document.querySelectorAll(Un), f = 0, l = c.length; f < l; f++) {
        var g = c[f];
        g && g.getAttribute(me) !== "active" && (qn(i, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this)), kt(this, function() {
      return function(i) {
        for (var c = i.getTag(), f = c.length, l = "", g = function(h) {
          var b = function(C) {
            return Xe.get(C);
          }(h);
          if (b === void 0)
            return "continue";
          var E = i.names.get(b), k = c.getGroup(h);
          if (E === void 0 || k.length === 0)
            return "continue";
          var I = "".concat(me, ".g").concat(h, '[id="').concat(b, '"]'), M = "";
          E !== void 0 && E.forEach(function(C) {
            C.length > 0 && (M += "".concat(C, ","));
          }), l += "".concat(k).concat(I, '{content:"').concat(M, '"}').concat(`/*!sc*/
`);
        }, d = 0; d < f; d++)
          g(d);
        return l;
      }(a);
    });
  }
  return e.registerId = function(t) {
    return Ye(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(V(V({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var o = r.useCSSOMInjection, a = r.target;
      return r.isServer ? new Zn(a) : o ? new Kn(a) : new Jn(a);
    }(this.options), new Wn(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ye(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Ye(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ye(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), eo = /&/g, to = /^\s*\/\/.*$/gm;
function Er(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Er(r.children, t)), r;
  });
}
function ro(e) {
  var t, r, o, a = e === void 0 ? ke : e, i = a.options, c = i === void 0 ? ke : i, f = a.plugins, l = f === void 0 ? et : f, g = function(b, E, k) {
    return k === r || k.startsWith(r) && k.endsWith(r) && k.replaceAll(r, "").length > 0 ? ".".concat(t) : b;
  }, d = l.slice();
  d.push(function(b) {
    b.type === Ke && b.value.includes("&") && (b.props[0] = b.props[0].replace(eo, r).replace(o, g));
  }), c.prefix && d.push(Rn), d.push(Sn);
  var h = function(b, E, k, I) {
    E === void 0 && (E = ""), k === void 0 && (k = ""), I === void 0 && (I = "&"), t = I, r = E, o = new RegExp("\\".concat(r, "\\b"), "g");
    var M = b.replace(to, ""), C = bn(k || E ? "".concat(k, " ").concat(E, " { ").concat(M, " }") : M);
    c.namespace && (C = Er(C, c.namespace));
    var v = [];
    return qe(C, En(d.concat(_n(function(P) {
      return v.push(P);
    })))), v;
  };
  return h.hash = l.length ? l.reduce(function(b, E) {
    return E.name || Te(15), le(b, E.name);
  }, 5381).toString() : "", h;
}
var no = new Sr(), wt = ro(), _r = he.createContext({ shouldForwardProp: void 0, styleSheet: no, stylis: wt });
_r.Consumer;
he.createContext(void 0);
function rr() {
  return Zr(_r);
}
var nr = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(a, i) {
      i === void 0 && (i = wt);
      var c = o.name + i.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, i(o.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, kt(this, function() {
      throw Te(12, String(o.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = wt), this.name + t.hash;
  }, e;
}(), oo = function(e) {
  return e >= "A" && e <= "Z";
};
function or(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-")
      return e;
    oo(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Rr = function(e) {
  return e == null || e === !1 || e === "";
}, xr = function(e) {
  var t, r, o = [];
  for (var a in e) {
    var i = e[a];
    e.hasOwnProperty(a) && !Rr(i) && (Array.isArray(i) && i.isCss || Ce(i) ? o.push("".concat(or(a), ":"), i, ";") : Pe(i) ? o.push.apply(o, _e(_e(["".concat(a, " {")], xr(i), !1), ["}"], !1)) : o.push("".concat(or(a), ": ").concat((t = a, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in xn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function de(e, t, r, o) {
  if (Rr(e))
    return [];
  if (xt(e))
    return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var a = e(t);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof nr || Pe(a) || a === null || console.error("".concat(mr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), de(a, t, r, o);
  }
  var i;
  return e instanceof nr ? r ? (e.inject(r, o), [e.getName(o)]) : [e] : Pe(e) ? xr(e) : Array.isArray(e) ? Array.prototype.concat.apply(et, e.map(function(c) {
    return de(c, t, r, o);
  })) : [e.toString()];
}
function ao(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ce(r) && !xt(r))
      return !1;
  }
  return !0;
}
var io = hr("6.0.7"), so = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && ao(t), this.componentId = r, this.baseHash = le(io, r), this.baseStyle = o, Sr.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        a = fe(a, this.staticRulesId);
      else {
        var i = er(de(this.rules, t, r, o)), c = vt(le(this.baseHash, i) >>> 0);
        if (!r.hasNameForId(this.componentId, c)) {
          var f = o(i, ".".concat(c), void 0, this.componentId);
          r.insertRules(this.componentId, c, f);
        }
        a = fe(a, c), this.staticRulesId = c;
      }
    else {
      for (var l = le(this.baseHash, o.hash), g = "", d = 0; d < this.rules.length; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          g += h, process.env.NODE_ENV !== "production" && (l = le(l, h));
        else if (h) {
          var b = er(de(h, t, r, o));
          l = le(l, b), g += b;
        }
      }
      if (g) {
        var E = vt(l >>> 0);
        r.hasNameForId(this.componentId, E) || r.insertRules(this.componentId, E, o(g, ".".concat(E), void 0, this.componentId)), a = fe(a, E);
      }
    }
    return a;
  }, e;
}(), kr = he.createContext(void 0);
kr.Consumer;
var pt = {}, ar = /* @__PURE__ */ new Set();
function co(e, t, r) {
  var o = xt(e), a = e, i = !lt(e), c = t.attrs, f = c === void 0 ? et : c, l = t.componentId, g = l === void 0 ? function(T, N) {
    var S = typeof T != "string" ? "sc" : Xt(T);
    pt[S] = (pt[S] || 0) + 1;
    var m = "".concat(S, "-").concat(Nn("6.0.7" + S + pt[S]));
    return N ? "".concat(N, "-").concat(m) : m;
  }(t.displayName, t.parentComponentId) : l, d = t.displayName, h = d === void 0 ? function(T) {
    return lt(T) ? "styled.".concat(T) : "Styled(".concat(mr(T), ")");
  }(e) : d, b = t.displayName && t.componentId ? "".concat(Xt(t.displayName), "-").concat(t.componentId) : t.componentId || g, E = o && a.attrs ? a.attrs.concat(f).filter(Boolean) : f, k = t.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var I = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var M = t.shouldForwardProp;
      k = function(T, N) {
        return I(T, N) && M(T, N);
      };
    } else
      k = I;
  }
  var C = new so(r, b, o ? a.componentStyle : void 0);
  function v(T, N) {
    return function(S, m, J) {
      var Z = S.attrs, tt = S.componentStyle, rt = S.defaultProps, $e = S.foldedComponentIds, Y = S.styledComponentId, Q = S.target, se = he.useContext(kr), Fe = rr(), ge = S.shouldForwardProp || Fe.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Yt(Y);
      var G = function(be, ce, ae) {
        for (var q, W = V(V({}, ce), { className: void 0, theme: ae }), ue = 0; ue < be.length; ue += 1) {
          var ee = Ce(q = be[ue]) ? q(W) : q;
          for (var X in ee)
            W[X] = X === "className" ? fe(W[X], ee[X]) : X === "style" ? V(V({}, W[X]), ee[X]) : ee[X];
        }
        return ce.className && (W.className = fe(W.className, ce.className)), W;
      }(Z, m, Pn(m, se, rt) || ke), ne = G.as || Q, oe = {};
      for (var L in G)
        G[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" || (L === "forwardedAs" ? oe.as = G.forwardedAs : ge && !ge(L, ne) || (oe[L] = G[L], ge || process.env.NODE_ENV !== "development" || on(L) || ar.has(L) || !yt.has(ne) || (ar.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ye = function(be, ce) {
        var ae = rr(), q = be.generateAndInjectStyles(ce, ae.styleSheet, ae.stylis);
        return process.env.NODE_ENV !== "production" && Yt(q), q;
      }(tt, G);
      process.env.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(ye);
      var ve = fe($e, Y);
      return ye && (ve += " " + ye), G.className && (ve += " " + G.className), oe[lt(ne) && !yt.has(ne) ? "class" : "className"] = ve, oe.ref = J, Jr(ne, oe);
    }(P, T, N);
  }
  process.env.NODE_ENV !== "production" && (v.displayName = h);
  var P = he.forwardRef(v);
  return P.attrs = E, P.componentStyle = C, P.shouldForwardProp = k, process.env.NODE_ENV !== "production" && (P.displayName = h), P.foldedComponentIds = o ? fe(a.foldedComponentIds, a.styledComponentId) : "", P.styledComponentId = b, P.target = o ? a.target : e, Object.defineProperty(P, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = o ? function(N) {
      for (var S = [], m = 1; m < arguments.length; m++)
        S[m - 1] = arguments[m];
      for (var J = 0, Z = S; J < Z.length; J++)
        bt(N, Z[J], !0);
      return N;
    }({}, a.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (Cn(h, b), P.warnTooManyClasses = function(T, N) {
    var S = {}, m = !1;
    return function(J) {
      if (!m && (S[J] = !0, Object.keys(S).length >= 200)) {
        var Z = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(Z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), m = !0, S = {};
      }
    };
  }(h, b)), kt(P, function() {
    return ".".concat(P.styledComponentId);
  }), i && br(P, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), P;
}
function ir(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1)
    r.push(t[o], e[o + 1]);
  return r;
}
var sr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function uo(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (Ce(e) || Pe(e)) {
    var o = e;
    return sr(de(ir(et, _e([o], t, !0))));
  }
  var a = e;
  return t.length === 0 && a.length === 1 && typeof a[0] == "string" ? de(a) : sr(de(ir(a, t)));
}
function St(e, t, r) {
  if (r === void 0 && (r = ke), !t)
    throw Te(1, t);
  var o = function(a) {
    for (var i = [], c = 1; c < arguments.length; c++)
      i[c - 1] = arguments[c];
    return e(t, r, uo.apply(void 0, _e([a], i, !1)));
  };
  return o.attrs = function(a) {
    return St(e, t, V(V({}, r), { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return St(e, t, V(V({}, r), a));
  }, o;
}
var Cr = function(e) {
  return St(co, e);
}, Ct = Cr;
yt.forEach(function(e) {
  Ct[e] = Cr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var We = "__sc-".concat(me, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[We] || (window[We] = 0), window[We] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[We] += 1);
const lo = Ct.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(e) => e.primary ? "#fff" : "#000"};
  background-color: ${(e) => e.primary ? "#FF5655" : "#f4c4c4"};
  padding: ${(e) => e.size === "small" ? "7px 25px 8px" : e.size === "medium" ? "9px 30px 11px" : "14px 30px 16px"};
`, po = ({
  size: e,
  primary: t,
  disabled: r,
  text: o,
  onClick: a,
  ...i
}) => /* @__PURE__ */ tn.jsx(
  lo,
  {
    type: "button",
    onClick: a,
    primary: t,
    disabled: r,
    size: e,
    ...i,
    children: o
  }
);
Ct.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(e) => e.primary ? "#fff" : "#000"};
  background-color: ${(e) => e.primary ? "#FF5655" : "#f4c4c4"};
  padding: ${(e) => e.size === "small" ? "7px 25px 8px" : e.size === "medium" ? "9px 30px 11px" : "14px 30px 16px"};
`;
export {
  po as Button
};
//# sourceMappingURL=index.es.js.map
