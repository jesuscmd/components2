import he, { useRef as Xt, useDebugValue as Vr, createElement as Kt, useContext as Jt } from "react";
var Ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function Zt() {
  if (Yr)
    return Ne;
  Yr = 1;
  var e = he, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, g) {
    var d, h = {}, b = null, E = null;
    g !== void 0 && (b = "" + g), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (E = l.ref);
    for (d in l)
      o.call(l, d) && !s.hasOwnProperty(d) && (h[d] = l[d]);
    if (f && f.defaultProps)
      for (d in l = f.defaultProps, l)
        h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: r, type: f, key: b, ref: E, props: h, _owner: a.current };
  }
  return Ne.Fragment = t, Ne.jsx = c, Ne.jsxs = c, Ne;
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
var Wr;
function Qt() {
  return Wr || (Wr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = he, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), x = Symbol.iterator, I = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var i = x && n[x] || n[I];
      return typeof i == "function" ? i : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(n) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          u[p - 1] = arguments[p];
        P("error", n, u);
      }
    }
    function P(n, i, u) {
      {
        var p = C.ReactDebugCurrentFrame, R = p.getStackAddendum();
        R !== "" && (i += "%s", u = u.concat([R]));
        var O = u.map(function(_) {
          return String(_);
        });
        O.unshift("Warning: " + i), Function.prototype.apply.call(console[n], console, O);
      }
    }
    var T = !1, N = !1, S = !1, m = !1, J = !1, Z;
    Z = Symbol.for("react.module.reference");
    function rr(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === s || J || n === a || n === g || n === d || m || n === E || T || N || S || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === h || n.$$typeof === c || n.$$typeof === f || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Z || n.getModuleId !== void 0));
    }
    function tr(n, i, u) {
      var p = n.displayName;
      if (p)
        return p;
      var R = i.displayName || i.name || "";
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
        case t:
          return "Portal";
        case s:
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
            var i = n;
            return $e(i) + ".Consumer";
          case c:
            var u = n;
            return $e(u._context) + ".Provider";
          case l:
            return tr(n, n.render, "ForwardRef");
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
    function W(n, i, u) {
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
    function Cr(n, i) {
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
        if (i) {
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
            } catch (re) {
              p = re;
            }
            Reflect.construct(n, [], _);
          } else {
            try {
              _.call();
            } catch (re) {
              p = re;
            }
            n.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            p = re;
          }
          n();
        }
      } catch (re) {
        if (re && p && typeof re.stack == "string") {
          for (var w = re.stack.split(`
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
      var Se = n ? n.displayName || n.name : "", zr = Se ? W(Se) : "";
      return typeof n == "function" && ee.set(n, zr), zr;
    }
    function Ct(n, i, u) {
      return Cr(n, !1);
    }
    function Pt(n) {
      var i = n.prototype;
      return !!(i && i.isReactComponent);
    }
    function Me(n, i, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Cr(n, Pt(n));
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
            return Ct(n.render);
          case h:
            return Me(n.type, i, u);
          case b: {
            var p = n, R = p._payload, O = p._init;
            try {
              return Me(O(R), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, Pr = {}, Or = C.ReactDebugCurrentFrame;
    function ze(n) {
      if (n) {
        var i = n._owner, u = Me(n.type, n._source, i ? i.type : null);
        Or.setExtraStackFrame(u);
      } else
        Or.setExtraStackFrame(null);
    }
    function Ot(n, i, u, p, R) {
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
              w = n[_](i, _, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              w = D;
            }
            w && !(w instanceof Error) && (ze(R), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, _, typeof w), ze(null)), w instanceof Error && !(w.message in Pr) && (Pr[w.message] = !0, ze(R), v("Failed %s type: %s", u, w.message), ze(null));
          }
      }
    }
    var Tt = Array.isArray;
    function nr(n) {
      return Tt(n);
    }
    function At(n) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function Nt(n) {
      try {
        return Tr(n), !1;
      } catch {
        return !0;
      }
    }
    function Tr(n) {
      return "" + n;
    }
    function Ar(n) {
      if (Nt(n))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", At(n)), Tr(n);
    }
    var Ae = C.ReactCurrentOwner, It = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Nr, Ir, or;
    or = {};
    function Dt(n) {
      if (Le.call(n, "ref")) {
        var i = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function jt(n) {
      if (Le.call(n, "key")) {
        var i = Object.getOwnPropertyDescriptor(n, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function $t(n, i) {
      if (typeof n.ref == "string" && Ae.current && i && Ae.current.stateNode !== i) {
        var u = Y(Ae.current.type);
        or[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(Ae.current.type), n.ref), or[u] = !0);
      }
    }
    function Ft(n, i) {
      {
        var u = function() {
          Nr || (Nr = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Mt(n, i) {
      {
        var u = function() {
          Ir || (Ir = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Lt = function(n, i, u, p, R, O, _) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: i,
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
    function zt(n, i, u, p, R) {
      {
        var O, _ = {}, w = null, z = null;
        u !== void 0 && (Ar(u), w = "" + u), jt(i) && (Ar(i.key), w = "" + i.key), Dt(i) && (z = i.ref, $t(i, R));
        for (O in i)
          Le.call(i, O) && !It.hasOwnProperty(O) && (_[O] = i[O]);
        if (n && n.defaultProps) {
          var D = n.defaultProps;
          for (O in D)
            _[O] === void 0 && (_[O] = D[O]);
        }
        if (w || z) {
          var j = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          w && Ft(_, j), z && Mt(_, j);
        }
        return Lt(n, w, z, R, p, Ae.current, _);
      }
    }
    var ar = C.ReactCurrentOwner, Dr = C.ReactDebugCurrentFrame;
    function we(n) {
      if (n) {
        var i = n._owner, u = Me(n.type, n._source, i ? i.type : null);
        Dr.setExtraStackFrame(u);
      } else
        Dr.setExtraStackFrame(null);
    }
    var ir;
    ir = !1;
    function sr(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function jr() {
      {
        if (ar.current) {
          var n = Y(ar.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Vt(n) {
      {
        if (n !== void 0) {
          var i = n.fileName.replace(/^.*[\\\/]/, ""), u = n.lineNumber;
          return `

Check your code at ` + i + ":" + u + ".";
        }
        return "";
      }
    }
    var $r = {};
    function Yt(n) {
      {
        var i = jr();
        if (!i) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function Fr(n, i) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = Yt(i);
        if ($r[u])
          return;
        $r[u] = !0;
        var p = "";
        n && n._owner && n._owner !== ar.current && (p = " It was passed a child from " + Y(n._owner.type) + "."), we(n), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), we(null);
      }
    }
    function Mr(n, i) {
      {
        if (typeof n != "object")
          return;
        if (nr(n))
          for (var u = 0; u < n.length; u++) {
            var p = n[u];
            sr(p) && Fr(p, i);
          }
        else if (sr(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var R = M(n);
          if (typeof R == "function" && R !== n.entries)
            for (var O = R.call(n), _; !(_ = O.next()).done; )
              sr(_.value) && Fr(_.value, i);
        }
      }
    }
    function Wt(n) {
      {
        var i = n.type;
        if (i == null || typeof i == "string")
          return;
        var u;
        if (typeof i == "function")
          u = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === h))
          u = i.propTypes;
        else
          return;
        if (u) {
          var p = Y(i);
          Ot(u, n.props, "prop", p, n);
        } else if (i.PropTypes !== void 0 && !ir) {
          ir = !0;
          var R = Y(i);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(n) {
      {
        for (var i = Object.keys(n.props), u = 0; u < i.length; u++) {
          var p = i[u];
          if (p !== "children" && p !== "key") {
            we(n), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), we(null);
            break;
          }
        }
        n.ref !== null && (we(n), v("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function Lr(n, i, u, p, R, O) {
      {
        var _ = rr(n);
        if (!_) {
          var w = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Vt(R);
          z ? w += z : w += jr();
          var D;
          n === null ? D = "null" : nr(n) ? D = "array" : n !== void 0 && n.$$typeof === r ? (D = "<" + (Y(n.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : D = typeof n, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, w);
        }
        var j = zt(n, i, u, R, O);
        if (j == null)
          return j;
        if (_) {
          var B = i.children;
          if (B !== void 0)
            if (p)
              if (nr(B)) {
                for (var Se = 0; Se < B.length; Se++)
                  Mr(B[Se], n);
                Object.freeze && Object.freeze(B);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mr(B, n);
        }
        return n === o ? Bt(j) : Wt(j), j;
      }
    }
    function Ut(n, i, u) {
      return Lr(n, i, u, !0);
    }
    function Gt(n, i, u) {
      return Lr(n, i, u, !1);
    }
    var Ht = Gt, qt = Ut;
    Ie.Fragment = o, Ie.jsx = Ht, Ie.jsxs = qt;
  }()), Ie;
}
process.env.NODE_ENV === "production" ? Zt() : Qt();
var V = function() {
  return V = Object.assign || function(r) {
    for (var t, o = 1, a = arguments.length; o < a; o++) {
      t = arguments[o];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s]);
    }
    return r;
  }, V.apply(this, arguments);
};
function _e(e, r, t) {
  if (t || arguments.length === 2)
    for (var o = 0, a = r.length, s; o < a; o++)
      (s || !(o in r)) && (s || (s = Array.prototype.slice.call(r, 0, o)), s[o] = r[o]);
  return e.concat(s || Array.prototype.slice.call(r));
}
function en(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var rn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, tn = /* @__PURE__ */ en(
  function(e) {
    return rn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), A = "-ms-", je = "-moz-", k = "-webkit-", st = "comm", Ke = "rule", Sr = "decl", nn = "@import", ct = "@keyframes", on = "@layer", an = Math.abs, Er = String.fromCharCode, dr = Object.assign;
function sn(e, r) {
  return F(e, 0) ^ 45 ? (((r << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function ut(e) {
  return e.trim();
}
function te(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function y(e, r, t) {
  return e.replace(r, t);
}
function Be(e, r) {
  return e.indexOf(r);
}
function F(e, r) {
  return e.charCodeAt(r) | 0;
}
function Re(e, r, t) {
  return e.slice(r, t);
}
function K(e) {
  return e.length;
}
function lt(e) {
  return e.length;
}
function De(e, r) {
  return r.push(e), e;
}
function cn(e, r) {
  return e.map(r).join("");
}
function Br(e, r) {
  return e.filter(function(t) {
    return !te(t, r);
  });
}
var Je = 1, ke = 1, ft = 0, U = 0, $ = 0, Oe = "";
function Ze(e, r, t, o, a, s, c, f) {
  return { value: e, root: r, parent: t, type: o, props: a, children: s, line: Je, column: ke, length: c, return: "", siblings: f };
}
function ie(e, r) {
  return dr(Ze("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function Ee(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  De(e, e.siblings);
}
function un() {
  return $;
}
function ln() {
  return $ = U > 0 ? F(Oe, --U) : 0, ke--, $ === 10 && (ke = 1, Je--), $;
}
function H() {
  return $ = U < ft ? F(Oe, U++) : 0, ke++, $ === 10 && (ke = 1, Je++), $;
}
function pe() {
  return F(Oe, U);
}
function Ue() {
  return U;
}
function Qe(e, r) {
  return Re(Oe, e, r);
}
function hr(e) {
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
function fn(e) {
  return Je = ke = 1, ft = K(Oe = e), U = 0, [];
}
function pn(e) {
  return Oe = "", e;
}
function cr(e) {
  return ut(Qe(U - 1, mr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function dn(e) {
  for (; ($ = pe()) && $ < 33; )
    H();
  return hr(e) > 2 || hr($) > 3 ? "" : " ";
}
function hn(e, r) {
  for (; --r && H() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return Qe(e, Ue() + (r < 6 && pe() == 32 && H() == 32));
}
function mr(e) {
  for (; H(); )
    switch ($) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && mr($);
        break;
      case 40:
        e === 41 && mr(e);
        break;
      case 92:
        H();
        break;
    }
  return U;
}
function mn(e, r) {
  for (; H() && e + $ !== 47 + 10; )
    if (e + $ === 42 + 42 && pe() === 47)
      break;
  return "/*" + Qe(r, U - 1) + "*" + Er(e === 47 ? e : H());
}
function gn(e) {
  for (; !hr(pe()); )
    H();
  return Qe(e, U);
}
function yn(e) {
  return pn(Ge("", null, null, null, [""], e = fn(e), 0, [0], e));
}
function Ge(e, r, t, o, a, s, c, f, l) {
  for (var g = 0, d = 0, h = c, b = 0, E = 0, x = 0, I = 1, M = 1, C = 1, v = 0, P = "", T = a, N = s, S = o, m = P; M; )
    switch (x = v, v = H()) {
      case 40:
        if (x != 108 && F(m, h - 1) == 58) {
          Be(m += y(cr(v), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += cr(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += dn(x);
        break;
      case 92:
        m += hn(Ue() - 1, 7);
        continue;
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            De(vn(mn(H(), Ue()), r, t, l), l);
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
            C == -1 && (m = y(m, /\f/g, "")), E > 0 && K(m) - h && De(E > 32 ? Gr(m + ";", o, t, h - 1, l) : Gr(y(m, " ", "") + ";", o, t, h - 2, l), l);
            break;
          case 59:
            m += ";";
          default:
            if (De(S = Ur(m, r, t, g, d, a, f, P, T = [], N = [], h, s), s), v === 123)
              if (d === 0)
                Ge(m, r, S, S, T, s, h, f, N);
              else
                switch (b === 99 && F(m, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ge(e, S, S, o && De(Ur(e, S, S, 0, 0, a, f, P, a, T = [], h, N), N), a, N, h, f, o ? T : N);
                    break;
                  default:
                    Ge(m, S, S, S, [""], N, 0, f, N);
                }
        }
        g = d = E = 0, I = C = 1, P = m = "", h = c;
        break;
      case 58:
        h = 1 + K(m), E = x;
      default:
        if (I < 1) {
          if (v == 123)
            --I;
          else if (v == 125 && I++ == 0 && ln() == 125)
            continue;
        }
        switch (m += Er(v), v * I) {
          case 38:
            C = d > 0 ? 1 : (m += "\f", -1);
            break;
          case 44:
            f[g++] = (K(m) - 1) * C, C = 1;
            break;
          case 64:
            pe() === 45 && (m += cr(H())), b = pe(), d = h = K(P = m += gn(Ue())), v++;
            break;
          case 45:
            x === 45 && K(m) == 2 && (I = 0);
        }
    }
  return s;
}
function Ur(e, r, t, o, a, s, c, f, l, g, d, h) {
  for (var b = a - 1, E = a === 0 ? s : [""], x = lt(E), I = 0, M = 0, C = 0; I < o; ++I)
    for (var v = 0, P = Re(e, b + 1, b = an(M = c[I])), T = e; v < x; ++v)
      (T = ut(M > 0 ? E[v] + " " + P : y(P, /&\f/g, E[v]))) && (l[C++] = T);
  return Ze(e, r, t, a === 0 ? Ke : f, l, g, d, h);
}
function vn(e, r, t, o) {
  return Ze(e, r, t, st, Er(un()), Re(e, 2, -2), 0, o);
}
function Gr(e, r, t, o, a) {
  return Ze(e, r, t, Sr, Re(e, 0, o), Re(e, o + 1, -1), o, a);
}
function pt(e, r, t) {
  switch (sn(e, r)) {
    case 5103:
      return k + "print-" + e + e;
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
      return k + e + e;
    case 4789:
      return je + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + je + e + A + e + e;
    case 5936:
      switch (F(e, r + 11)) {
        case 114:
          return k + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return k + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return k + e + A + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return k + e + A + e + e;
    case 6165:
      return k + e + A + "flex-" + e + e;
    case 5187:
      return k + e + y(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + A + "flex-$1$2") + e;
    case 5443:
      return k + e + A + "flex-item-" + y(e, /flex-|-self/g, "") + (te(e, /flex-|baseline/) ? "" : A + "grid-row-" + y(e, /flex-|-self/g, "")) + e;
    case 4675:
      return k + e + A + "flex-line-pack" + y(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return k + e + A + y(e, "shrink", "negative") + e;
    case 5292:
      return k + e + A + y(e, "basis", "preferred-size") + e;
    case 6060:
      return k + "box-" + y(e, "-grow", "") + k + e + A + y(e, "grow", "positive") + e;
    case 4554:
      return k + y(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    case 6187:
      return y(y(y(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return y(e, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return y(y(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    case 4200:
      if (!te(e, /flex-|baseline/))
        return A + "grid-column-align" + Re(e, r) + e;
      break;
    case 2592:
    case 3360:
      return A + y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return t && t.some(function(o, a) {
        return r = a, te(o.props, /grid-\w+-end/);
      }) ? ~Be(e + (t = t[r].value), "span") ? e : A + y(e, "-start", "") + e + A + "grid-row-span:" + (~Be(t, "span") ? te(t, /\d+/) : +te(t, /\d+/) - +te(e, /\d+/)) + ";" : A + y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return t && t.some(function(o) {
        return te(o.props, /grid-\w+-start/);
      }) ? e : A + y(y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(e, /(.+)-inline(.+)/, k + "$1$2") + e;
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
      if (K(e) - 1 - r > 6)
        switch (F(e, r + 1)) {
          case 109:
            if (F(e, r + 4) !== 45)
              break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + je + (F(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Be(e, "stretch") ? pt(y(e, "stretch", "fill-available"), r, t) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return y(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, s, c, f, l, g) {
        return A + a + ":" + s + g + (c ? A + a + "-span:" + (f ? l : +l - +s) + g : "") + e;
      });
    case 4949:
      if (F(e, r + 6) === 121)
        return y(e, ":", ":" + k) + e;
      break;
    case 6444:
      switch (F(e, F(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return y(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + A + "$2box$3") + e;
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
function qe(e, r) {
  for (var t = "", o = 0; o < e.length; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function bn(e, r, t, o) {
  switch (e.type) {
    case on:
      if (e.children.length)
        break;
    case nn:
    case Sr:
      return e.return = e.return || e.value;
    case st:
      return "";
    case ct:
      return e.return = e.value + "{" + qe(e.children, o) + "}";
    case Ke:
      if (!K(e.value = e.props.join(",")))
        return "";
  }
  return K(t = qe(e.children, o)) ? e.return = e.value + "{" + t + "}" : "";
}
function wn(e) {
  var r = lt(e);
  return function(t, o, a, s) {
    for (var c = "", f = 0; f < r; f++)
      c += e[f](t, o, a, s) || "";
    return c;
  };
}
function Sn(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function En(e, r, t, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Sr:
        e.return = pt(e.value, e.length, t);
        return;
      case ct:
        return qe([ie(e, { value: y(e.value, "@", "@" + k) })], o);
      case Ke:
        if (e.length)
          return cn(t = e.props, function(a) {
            switch (te(a, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ee(ie(e, { props: [y(a, /:(read-\w+)/, ":" + je + "$1")] })), Ee(ie(e, { props: [a] })), dr(e, { props: Br(t, o) });
                break;
              case "::placeholder":
                Ee(ie(e, { props: [y(a, /:(plac\w+)/, ":" + k + "input-$1")] })), Ee(ie(e, { props: [y(a, /:(plac\w+)/, ":" + je + "$1")] })), Ee(ie(e, { props: [y(a, /:(plac\w+)/, A + "input-$1")] })), Ee(ie(e, { props: [a] })), dr(e, { props: Br(t, o) });
                break;
            }
            return "";
          });
    }
}
var _n = {
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
}, me = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", _r = typeof window < "u" && "HTMLElement" in window, Rn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Hr = /invalid hook call/i, Ve = /* @__PURE__ */ new Set(), kn = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = r ? ' with the id of "'.concat(r, '"') : "", o = "The component ".concat(e).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var s = !0;
      console.error = function(c) {
        for (var f = [], l = 1; l < arguments.length; l++)
          f[l - 1] = arguments[l];
        Hr.test(c) ? (s = !1, Ve.delete(o)) : a.apply(void 0, _e([c], f, !1));
      }, Xt(), s && !Ve.has(o) && (console.warn(o), Ve.add(o));
    } catch (c) {
      Hr.test(c.message) && Ve.delete(o);
    } finally {
      console.error = a;
    }
  }
}, er = Object.freeze([]), xe = Object.freeze({});
function xn(e, r, t) {
  return t === void 0 && (t = xe), e.theme !== t.theme && e.theme || r || t.theme;
}
var gr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Cn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Pn = /(^-|-$)/g;
function qr(e) {
  return e.replace(Cn, "-").replace(Pn, "");
}
var On = /(a)(d)/gi, Xr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function yr(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = Xr(r % 52) + t;
  return (Xr(r % 52) + t).replace(On, "$1-$2");
}
var ur, le = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, dt = function(e) {
  return le(5381, e);
};
function Tn(e) {
  return yr(dt(e) >>> 0);
}
function ht(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function lr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var mt = typeof Symbol == "function" && Symbol.for, gt = mt ? Symbol.for("react.memo") : 60115, An = mt ? Symbol.for("react.forward_ref") : 60112, Nn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, In = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, yt = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Dn = ((ur = {})[An] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ur[gt] = yt, ur);
function Kr(e) {
  return ("type" in (r = e) && r.type.$$typeof) === gt ? yt : "$$typeof" in e ? Dn[e.$$typeof] : Nn;
  var r;
}
var jn = Object.defineProperty, $n = Object.getOwnPropertyNames, Jr = Object.getOwnPropertySymbols, Fn = Object.getOwnPropertyDescriptor, Mn = Object.getPrototypeOf, Zr = Object.prototype;
function vt(e, r, t) {
  if (typeof r != "string") {
    if (Zr) {
      var o = Mn(r);
      o && o !== Zr && vt(e, o, t);
    }
    var a = $n(r);
    Jr && (a = a.concat(Jr(r)));
    for (var s = Kr(e), c = Kr(r), f = 0; f < a.length; ++f) {
      var l = a[f];
      if (!(l in In || t && t[l] || c && l in c || s && l in s)) {
        var g = Fn(r, l);
        try {
          jn(e, l, g);
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
function Rr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function fe(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function Qr(e, r) {
  if (e.length === 0)
    return "";
  for (var t = e[0], o = 1; o < e.length; o++)
    t += r ? r + e[o] : e[o];
  return t;
}
function Pe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function vr(e, r, t) {
  if (t === void 0 && (t = !1), !t && !Pe(e) && !Array.isArray(e))
    return r;
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      e[o] = vr(e[o], r[o]);
  else if (Pe(r))
    for (var o in r)
      e[o] = vr(e[o], r[o]);
  return e;
}
function kr(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var Ln = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function zn() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  for (var t = e[0], o = [], a = 1, s = e.length; a < s; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    t = t.replace(/%[a-z]/, c);
  }), t;
}
function Te(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(zn.apply(void 0, _e([Ln[e]], r, !1)).trim());
}
var Vn = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var t = 0, o = 0; o < r; o++)
      t += this.groupSizes[o];
    return t;
  }, e.prototype.insertRules = function(r, t) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, s = a; r >= s; )
        if ((s <<= 1) < 0)
          throw Te(16, "".concat(r));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var c = a; c < s; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(r + 1), l = (c = 0, t.length); c < l; c++)
      this.tag.insertRule(f, t[c]) && (this.groupSizes[r]++, f++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var t = this.groupSizes[r], o = this.indexOfGroup(r), a = o + t;
      this.groupSizes[r] = 0;
      for (var s = o; s < a; s++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(r) {
    var t = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return t;
    for (var o = this.groupSizes[r], a = this.indexOfGroup(r), s = a + o, c = a; c < s; c++)
      t += "".concat(this.tag.getRule(c)).concat(`/*!sc*/
`);
    return t;
  }, e;
}(), He = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), fr = 1, Ye = function(e) {
  if (He.has(e))
    return He.get(e);
  for (; Xe.has(fr); )
    fr++;
  var r = fr++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1073741824))
    throw Te(16, "".concat(r));
  return He.set(e, r), Xe.set(r, e), r;
}, Yn = function(e, r) {
  He.set(e, r), Xe.set(r, e);
}, Wn = "style[".concat(me, "][").concat("data-styled-version", '="').concat("6.0.7", '"]'), Bn = new RegExp("^".concat(me, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Un = function(e, r, t) {
  for (var o, a = t.split(","), s = 0, c = a.length; s < c; s++)
    (o = a[s]) && e.registerName(r, o);
}, Gn = function(e, r) {
  for (var t, o = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(`/*!sc*/
`), a = [], s = 0, c = o.length; s < c; s++) {
    var f = o[s].trim();
    if (f) {
      var l = f.match(Bn);
      if (l) {
        var g = 0 | parseInt(l[1], 10), d = l[2];
        g !== 0 && (Yn(d, g), Un(e, d, l[3]), e.getTag().insertRules(g, a)), a.length = 0;
      } else
        a.push(f);
    }
  }
};
function Hn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var bt = function(e) {
  var r = document.head, t = e || r, o = document.createElement("style"), a = function(f) {
    var l = Array.from(f.querySelectorAll("style[".concat(me, "]")));
    return l[l.length - 1];
  }(t), s = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(me, "active"), o.setAttribute("data-styled-version", "6.0.7");
  var c = Hn();
  return c && o.setAttribute("nonce", c), t.insertBefore(o, s), o;
}, qn = function() {
  function e(r) {
    this.element = bt(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet)
        return t.sheet;
      for (var o = document.styleSheets, a = 0, s = o.length; a < s; a++) {
        var c = o[a];
        if (c.ownerNode === t)
          return c;
      }
      throw Te(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    try {
      return this.sheet.insertRule(t, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var t = this.sheet.cssRules[r];
    return t && t.cssText ? t.cssText : "";
  }, e;
}(), Xn = function() {
  function e(r) {
    this.element = bt(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(t);
      return this.element.insertBefore(o, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Kn = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    return r <= this.length && (this.rules.splice(r, 0, t), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), et = _r, Jn = { isServer: !_r, useCSSOMInjection: !Rn }, wt = function() {
  function e(r, t, o) {
    r === void 0 && (r = xe), t === void 0 && (t = {});
    var a = this;
    this.options = V(V({}, Jn), r), this.gs = t, this.names = new Map(o), this.server = !!r.isServer, !this.server && _r && et && (et = !1, function(s) {
      for (var c = document.querySelectorAll(Wn), f = 0, l = c.length; f < l; f++) {
        var g = c[f];
        g && g.getAttribute(me) !== "active" && (Gn(s, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this)), kr(this, function() {
      return function(s) {
        for (var c = s.getTag(), f = c.length, l = "", g = function(h) {
          var b = function(C) {
            return Xe.get(C);
          }(h);
          if (b === void 0)
            return "continue";
          var E = s.names.get(b), x = c.getGroup(h);
          if (E === void 0 || x.length === 0)
            return "continue";
          var I = "".concat(me, ".g").concat(h, '[id="').concat(b, '"]'), M = "";
          E !== void 0 && E.forEach(function(C) {
            C.length > 0 && (M += "".concat(C, ","));
          }), l += "".concat(x).concat(I, '{content:"').concat(M, '"}').concat(`/*!sc*/
`);
        }, d = 0; d < f; d++)
          g(d);
        return l;
      }(a);
    });
  }
  return e.registerId = function(r) {
    return Ye(r);
  }, e.prototype.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(V(V({}, this.options), r), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(t) {
      var o = t.useCSSOMInjection, a = t.target;
      return t.isServer ? new Kn(a) : o ? new qn(a) : new Xn(a);
    }(this.options), new Vn(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, t) {
    return this.names.has(r) && this.names.get(r).has(t);
  }, e.prototype.registerName = function(r, t) {
    if (Ye(r), this.names.has(r))
      this.names.get(r).add(t);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(t), this.names.set(r, o);
    }
  }, e.prototype.insertRules = function(r, t, o) {
    this.registerName(r, t), this.getTag().insertRules(Ye(r), o);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(Ye(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Zn = /&/g, Qn = /^\s*\/\/.*$/gm;
function St(e, r) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(r, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(r, " ")), t.props = t.props.map(function(o) {
      return "".concat(r, " ").concat(o);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = St(t.children, r)), t;
  });
}
function eo(e) {
  var r, t, o, a = e === void 0 ? xe : e, s = a.options, c = s === void 0 ? xe : s, f = a.plugins, l = f === void 0 ? er : f, g = function(b, E, x) {
    return x === t || x.startsWith(t) && x.endsWith(t) && x.replaceAll(t, "").length > 0 ? ".".concat(r) : b;
  }, d = l.slice();
  d.push(function(b) {
    b.type === Ke && b.value.includes("&") && (b.props[0] = b.props[0].replace(Zn, t).replace(o, g));
  }), c.prefix && d.push(En), d.push(bn);
  var h = function(b, E, x, I) {
    E === void 0 && (E = ""), x === void 0 && (x = ""), I === void 0 && (I = "&"), r = I, t = E, o = new RegExp("\\".concat(t, "\\b"), "g");
    var M = b.replace(Qn, ""), C = yn(x || E ? "".concat(x, " ").concat(E, " { ").concat(M, " }") : M);
    c.namespace && (C = St(C, c.namespace));
    var v = [];
    return qe(C, wn(d.concat(Sn(function(P) {
      return v.push(P);
    })))), v;
  };
  return h.hash = l.length ? l.reduce(function(b, E) {
    return E.name || Te(15), le(b, E.name);
  }, 5381).toString() : "", h;
}
var ro = new wt(), br = eo(), Et = he.createContext({ shouldForwardProp: void 0, styleSheet: ro, stylis: br });
Et.Consumer;
he.createContext(void 0);
function rt() {
  return Jt(Et);
}
var tt = function() {
  function e(r, t) {
    var o = this;
    this.inject = function(a, s) {
      s === void 0 && (s = br);
      var c = o.name + s.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, s(o.rules, c, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = t, kr(this, function() {
      throw Te(12, String(o.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = br), this.name + r.hash;
  }, e;
}(), to = function(e) {
  return e >= "A" && e <= "Z";
};
function nt(e) {
  for (var r = "", t = 0; t < e.length; t++) {
    var o = e[t];
    if (t === 1 && o === "-" && e[0] === "-")
      return e;
    to(o) ? r += "-" + o.toLowerCase() : r += o;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var _t = function(e) {
  return e == null || e === !1 || e === "";
}, Rt = function(e) {
  var r, t, o = [];
  for (var a in e) {
    var s = e[a];
    e.hasOwnProperty(a) && !_t(s) && (Array.isArray(s) && s.isCss || Ce(s) ? o.push("".concat(nt(a), ":"), s, ";") : Pe(s) ? o.push.apply(o, _e(_e(["".concat(a, " {")], Rt(s), !1), ["}"], !1)) : o.push("".concat(nt(a), ": ").concat((r = a, (t = s) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || r in _n || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return o;
};
function de(e, r, t, o) {
  if (_t(e))
    return [];
  if (Rr(e))
    return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(s = e) || s.prototype && s.prototype.isReactComponent || !r)
      return [e];
    var a = e(r);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof tt || Pe(a) || a === null || console.error("".concat(ht(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), de(a, r, t, o);
  }
  var s;
  return e instanceof tt ? t ? (e.inject(t, o), [e.getName(o)]) : [e] : Pe(e) ? Rt(e) : Array.isArray(e) ? Array.prototype.concat.apply(er, e.map(function(c) {
    return de(c, r, t, o);
  })) : [e.toString()];
}
function no(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Ce(t) && !Rr(t))
      return !1;
  }
  return !0;
}
var oo = dt("6.0.7"), ao = function() {
  function e(r, t, o) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && no(r), this.componentId = t, this.baseHash = le(oo, t), this.baseStyle = o, wt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
        a = fe(a, this.staticRulesId);
      else {
        var s = Qr(de(this.rules, r, t, o)), c = yr(le(this.baseHash, s) >>> 0);
        if (!t.hasNameForId(this.componentId, c)) {
          var f = o(s, ".".concat(c), void 0, this.componentId);
          t.insertRules(this.componentId, c, f);
        }
        a = fe(a, c), this.staticRulesId = c;
      }
    else {
      for (var l = le(this.baseHash, o.hash), g = "", d = 0; d < this.rules.length; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          g += h, process.env.NODE_ENV !== "production" && (l = le(l, h));
        else if (h) {
          var b = Qr(de(h, r, t, o));
          l = le(l, b), g += b;
        }
      }
      if (g) {
        var E = yr(l >>> 0);
        t.hasNameForId(this.componentId, E) || t.insertRules(this.componentId, E, o(g, ".".concat(E), void 0, this.componentId)), a = fe(a, E);
      }
    }
    return a;
  }, e;
}(), kt = he.createContext(void 0);
kt.Consumer;
var pr = {}, ot = /* @__PURE__ */ new Set();
function io(e, r, t) {
  var o = Rr(e), a = e, s = !lr(e), c = r.attrs, f = c === void 0 ? er : c, l = r.componentId, g = l === void 0 ? function(T, N) {
    var S = typeof T != "string" ? "sc" : qr(T);
    pr[S] = (pr[S] || 0) + 1;
    var m = "".concat(S, "-").concat(Tn("6.0.7" + S + pr[S]));
    return N ? "".concat(N, "-").concat(m) : m;
  }(r.displayName, r.parentComponentId) : l, d = r.displayName, h = d === void 0 ? function(T) {
    return lr(T) ? "styled.".concat(T) : "Styled(".concat(ht(T), ")");
  }(e) : d, b = r.displayName && r.componentId ? "".concat(qr(r.displayName), "-").concat(r.componentId) : r.componentId || g, E = o && a.attrs ? a.attrs.concat(f).filter(Boolean) : f, x = r.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var I = a.shouldForwardProp;
    if (r.shouldForwardProp) {
      var M = r.shouldForwardProp;
      x = function(T, N) {
        return I(T, N) && M(T, N);
      };
    } else
      x = I;
  }
  var C = new ao(t, b, o ? a.componentStyle : void 0);
  function v(T, N) {
    return function(S, m, J) {
      var Z = S.attrs, rr = S.componentStyle, tr = S.defaultProps, $e = S.foldedComponentIds, Y = S.styledComponentId, Q = S.target, se = he.useContext(kt), Fe = rt(), ge = S.shouldForwardProp || Fe.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Vr(Y);
      var G = function(be, ce, ae) {
        for (var q, W = V(V({}, ce), { className: void 0, theme: ae }), ue = 0; ue < be.length; ue += 1) {
          var ee = Ce(q = be[ue]) ? q(W) : q;
          for (var X in ee)
            W[X] = X === "className" ? fe(W[X], ee[X]) : X === "style" ? V(V({}, W[X]), ee[X]) : ee[X];
        }
        return ce.className && (W.className = fe(W.className, ce.className)), W;
      }(Z, m, xn(m, se, tr) || xe), ne = G.as || Q, oe = {};
      for (var L in G)
        G[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" || (L === "forwardedAs" ? oe.as = G.forwardedAs : ge && !ge(L, ne) || (oe[L] = G[L], ge || process.env.NODE_ENV !== "development" || tn(L) || ot.has(L) || !gr.has(ne) || (ot.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ye = function(be, ce) {
        var ae = rt(), q = be.generateAndInjectStyles(ce, ae.styleSheet, ae.stylis);
        return process.env.NODE_ENV !== "production" && Vr(q), q;
      }(rr, G);
      process.env.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(ye);
      var ve = fe($e, Y);
      return ye && (ve += " " + ye), G.className && (ve += " " + G.className), oe[lr(ne) && !gr.has(ne) ? "class" : "className"] = ve, oe.ref = J, Kt(ne, oe);
    }(P, T, N);
  }
  process.env.NODE_ENV !== "production" && (v.displayName = h);
  var P = he.forwardRef(v);
  return P.attrs = E, P.componentStyle = C, P.shouldForwardProp = x, process.env.NODE_ENV !== "production" && (P.displayName = h), P.foldedComponentIds = o ? fe(a.foldedComponentIds, a.styledComponentId) : "", P.styledComponentId = b, P.target = o ? a.target : e, Object.defineProperty(P, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = o ? function(N) {
      for (var S = [], m = 1; m < arguments.length; m++)
        S[m - 1] = arguments[m];
      for (var J = 0, Z = S; J < Z.length; J++)
        vr(N, Z[J], !0);
      return N;
    }({}, a.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (kn(h, b), P.warnTooManyClasses = function(T, N) {
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
  }(h, b)), kr(P, function() {
    return ".".concat(P.styledComponentId);
  }), s && vt(P, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), P;
}
function at(e, r) {
  for (var t = [e[0]], o = 0, a = r.length; o < a; o += 1)
    t.push(r[o], e[o + 1]);
  return t;
}
var it = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function so(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  if (Ce(e) || Pe(e)) {
    var o = e;
    return it(de(at(er, _e([o], r, !0))));
  }
  var a = e;
  return r.length === 0 && a.length === 1 && typeof a[0] == "string" ? de(a) : it(de(at(a, r)));
}
function wr(e, r, t) {
  if (t === void 0 && (t = xe), !r)
    throw Te(1, r);
  var o = function(a) {
    for (var s = [], c = 1; c < arguments.length; c++)
      s[c - 1] = arguments[c];
    return e(r, t, so.apply(void 0, _e([a], s, !1)));
  };
  return o.attrs = function(a) {
    return wr(e, r, V(V({}, t), { attrs: Array.prototype.concat(t.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return wr(e, r, V(V({}, t), a));
  }, o;
}
var xt = function(e) {
  return wr(io, e);
}, xr = xt;
gr.forEach(function(e) {
  xr[e] = xt(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var We = "__sc-".concat(me, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[We] || (window[We] = 0), window[We] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[We] += 1);
xr.button`
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
xr.button`
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
//# sourceMappingURL=index.es.js.map
