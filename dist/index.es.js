import ce, { useRef as Zr, useDebugValue as Yt, createElement as Qr, useContext as en } from "react";
import tn from "classnames";
var ht = { exports: {} }, Ie = {};
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
function rn() {
  if (Wt)
    return Ie;
  Wt = 1;
  var e = ce, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, g) {
    var p, h = {}, b = null, E = null;
    g !== void 0 && (b = "" + g), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (E = l.ref);
    for (p in l)
      a.call(l, p) && !s.hasOwnProperty(p) && (h[p] = l[p]);
    if (f && f.defaultProps)
      for (p in l = f.defaultProps, l)
        h[p] === void 0 && (h[p] = l[p]);
    return { $$typeof: t, type: f, key: b, ref: E, props: h, _owner: o.current };
  }
  return Ie.Fragment = r, Ie.jsx = c, Ie.jsxs = c, Ie;
}
var De = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function nn() {
  return Ut || (Ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ce, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), _ = Symbol.iterator, I = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var i = _ && n[_] || n[I];
      return typeof i == "function" ? i : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(n) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
          u[d - 1] = arguments[d];
        P("error", n, u);
      }
    }
    function P(n, i, u) {
      {
        var d = C.ReactDebugCurrentFrame, x = d.getStackAddendum();
        x !== "" && (i += "%s", u = u.concat([x]));
        var O = u.map(function(k) {
          return String(k);
        });
        O.unshift("Warning: " + i), Function.prototype.apply.call(console[n], console, O);
      }
    }
    var T = !1, N = !1, S = !1, m = !1, J = !1, Z;
    Z = Symbol.for("react.module.reference");
    function rt(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === s || J || n === o || n === g || n === p || m || n === E || T || N || S || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === h || n.$$typeof === c || n.$$typeof === f || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Z || n.getModuleId !== void 0));
    }
    function nt(n, i, u) {
      var d = n.displayName;
      if (d)
        return d;
      var x = i.displayName || i.name || "";
      return x !== "" ? u + "(" + x + ")" : u;
    }
    function Fe(n) {
      return n.displayName || "Context";
    }
    function V(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case g:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var i = n;
            return Fe(i) + ".Consumer";
          case c:
            var u = n;
            return Fe(u._context) + ".Provider";
          case l:
            return nt(n, n.render, "ForwardRef");
          case h:
            var d = n.displayName || null;
            return d !== null ? d : V(n.type) || "Memo";
          case b: {
            var x = n, O = x._payload, k = x._init;
            try {
              return V(k(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, ue = 0, Me, ye, G, ne, ae, L, ve;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function we() {
      {
        if (ue === 0) {
          Me = console.log, ye = console.info, G = console.warn, ne = console.error, ae = console.group, L = console.groupCollapsed, ve = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
        ue++;
      }
    }
    function le() {
      {
        if (ue--, ue === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, n, {
              value: Me
            }),
            info: Q({}, n, {
              value: ye
            }),
            warn: Q({}, n, {
              value: G
            }),
            error: Q({}, n, {
              value: ne
            }),
            group: Q({}, n, {
              value: ae
            }),
            groupCollapsed: Q({}, n, {
              value: L
            }),
            groupEnd: Q({}, n, {
              value: ve
            })
          });
        }
        ue < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = C.ReactCurrentDispatcher, q;
    function Y(n, i, u) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (x) {
            var d = x.stack.trim().match(/\n( *(at )?)/);
            q = d && d[1] || "";
          }
        return `
` + q + n;
      }
    }
    var fe = !1, ee;
    {
      var X = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new X();
    }
    function Ot(n, i) {
      if (!n || fe)
        return "";
      {
        var u = ee.get(n);
        if (u !== void 0)
          return u;
      }
      var d;
      fe = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = oe.current, oe.current = null, we();
      try {
        if (i) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (te) {
              d = te;
            }
            Reflect.construct(n, [], k);
          } else {
            try {
              k.call();
            } catch (te) {
              d = te;
            }
            n.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            d = te;
          }
          n();
        }
      } catch (te) {
        if (te && d && typeof te.stack == "string") {
          for (var w = te.stack.split(`
`), B = d.stack.split(`
`), D = w.length - 1, $ = B.length - 1; D >= 1 && $ >= 0 && w[D] !== B[$]; )
            $--;
          for (; D >= 1 && $ >= 0; D--, $--)
            if (w[D] !== B[$]) {
              if (D !== 1 || $ !== 1)
                do
                  if (D--, $--, $ < 0 || w[D] !== B[$]) {
                    var W = `
` + w[D].replace(" at new ", " at ");
                    return n.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", n.displayName)), typeof n == "function" && ee.set(n, W), W;
                  }
                while (D >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        fe = !1, oe.current = O, le(), Error.prepareStackTrace = x;
      }
      var Ee = n ? n.displayName || n.name : "", Vt = Ee ? Y(Ee) : "";
      return typeof n == "function" && ee.set(n, Vt), Vt;
    }
    function Tr(n, i, u) {
      return Ot(n, !1);
    }
    function Ar(n) {
      var i = n.prototype;
      return !!(i && i.isReactComponent);
    }
    function Le(n, i, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Ot(n, Ar(n));
      if (typeof n == "string")
        return Y(n);
      switch (n) {
        case g:
          return Y("Suspense");
        case p:
          return Y("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return Tr(n.render);
          case h:
            return Le(n.type, i, u);
          case b: {
            var d = n, x = d._payload, O = d._init;
            try {
              return Le(O(x), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, Tt = {}, At = C.ReactDebugCurrentFrame;
    function ze(n) {
      if (n) {
        var i = n._owner, u = Le(n.type, n._source, i ? i.type : null);
        At.setExtraStackFrame(u);
      } else
        At.setExtraStackFrame(null);
    }
    function Nr(n, i, u, d, x) {
      {
        var O = Function.call.bind(Be);
        for (var k in n)
          if (O(n, k)) {
            var w = void 0;
            try {
              if (typeof n[k] != "function") {
                var B = Error((d || "React class") + ": " + u + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              w = n[k](i, k, d, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              w = D;
            }
            w && !(w instanceof Error) && (ze(x), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", u, k, typeof w), ze(null)), w instanceof Error && !(w.message in Tt) && (Tt[w.message] = !0, ze(x), v("Failed %s type: %s", u, w.message), ze(null));
          }
      }
    }
    var Ir = Array.isArray;
    function at(n) {
      return Ir(n);
    }
    function Dr(n) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function $r(n) {
      try {
        return Nt(n), !1;
      } catch {
        return !0;
      }
    }
    function Nt(n) {
      return "" + n;
    }
    function It(n) {
      if ($r(n))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dr(n)), Nt(n);
    }
    var Ne = C.ReactCurrentOwner, jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Dt, $t, ot;
    ot = {};
    function Fr(n) {
      if (Be.call(n, "ref")) {
        var i = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Mr(n) {
      if (Be.call(n, "key")) {
        var i = Object.getOwnPropertyDescriptor(n, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Lr(n, i) {
      if (typeof n.ref == "string" && Ne.current && i && Ne.current.stateNode !== i) {
        var u = V(Ne.current.type);
        ot[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Ne.current.type), n.ref), ot[u] = !0);
      }
    }
    function Br(n, i) {
      {
        var u = function() {
          Dt || (Dt = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function zr(n, i) {
      {
        var u = function() {
          $t || ($t = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Vr = function(n, i, u, d, x, O, k) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: i,
        ref: u,
        props: k,
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
        value: d
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Yr(n, i, u, d, x) {
      {
        var O, k = {}, w = null, B = null;
        u !== void 0 && (It(u), w = "" + u), Mr(i) && (It(i.key), w = "" + i.key), Fr(i) && (B = i.ref, Lr(i, x));
        for (O in i)
          Be.call(i, O) && !jr.hasOwnProperty(O) && (k[O] = i[O]);
        if (n && n.defaultProps) {
          var D = n.defaultProps;
          for (O in D)
            k[O] === void 0 && (k[O] = D[O]);
        }
        if (w || B) {
          var $ = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          w && Br(k, $), B && zr(k, $);
        }
        return Vr(n, w, B, x, d, Ne.current, k);
      }
    }
    var it = C.ReactCurrentOwner, jt = C.ReactDebugCurrentFrame;
    function Se(n) {
      if (n) {
        var i = n._owner, u = Le(n.type, n._source, i ? i.type : null);
        jt.setExtraStackFrame(u);
      } else
        jt.setExtraStackFrame(null);
    }
    var st;
    st = !1;
    function ct(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Ft() {
      {
        if (it.current) {
          var n = V(it.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Wr(n) {
      {
        if (n !== void 0) {
          var i = n.fileName.replace(/^.*[\\\/]/, ""), u = n.lineNumber;
          return `

Check your code at ` + i + ":" + u + ".";
        }
        return "";
      }
    }
    var Mt = {};
    function Ur(n) {
      {
        var i = Ft();
        if (!i) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function Lt(n, i) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = Ur(i);
        if (Mt[u])
          return;
        Mt[u] = !0;
        var d = "";
        n && n._owner && n._owner !== it.current && (d = " It was passed a child from " + V(n._owner.type) + "."), Se(n), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, d), Se(null);
      }
    }
    function Bt(n, i) {
      {
        if (typeof n != "object")
          return;
        if (at(n))
          for (var u = 0; u < n.length; u++) {
            var d = n[u];
            ct(d) && Lt(d, i);
          }
        else if (ct(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var x = M(n);
          if (typeof x == "function" && x !== n.entries)
            for (var O = x.call(n), k; !(k = O.next()).done; )
              ct(k.value) && Lt(k.value, i);
        }
      }
    }
    function Gr(n) {
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
          var d = V(i);
          Nr(u, n.props, "prop", d, n);
        } else if (i.PropTypes !== void 0 && !st) {
          st = !0;
          var x = V(i);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Hr(n) {
      {
        for (var i = Object.keys(n.props), u = 0; u < i.length; u++) {
          var d = i[u];
          if (d !== "children" && d !== "key") {
            Se(n), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), Se(null);
            break;
          }
        }
        n.ref !== null && (Se(n), v("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    function zt(n, i, u, d, x, O) {
      {
        var k = rt(n);
        if (!k) {
          var w = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Wr(x);
          B ? w += B : w += Ft();
          var D;
          n === null ? D = "null" : at(n) ? D = "array" : n !== void 0 && n.$$typeof === t ? (D = "<" + (V(n.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : D = typeof n, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, w);
        }
        var $ = Yr(n, i, u, x, O);
        if ($ == null)
          return $;
        if (k) {
          var W = i.children;
          if (W !== void 0)
            if (d)
              if (at(W)) {
                for (var Ee = 0; Ee < W.length; Ee++)
                  Bt(W[Ee], n);
                Object.freeze && Object.freeze(W);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Bt(W, n);
        }
        return n === a ? Hr($) : Gr($), $;
      }
    }
    function qr(n, i, u) {
      return zt(n, i, u, !0);
    }
    function Xr(n, i, u) {
      return zt(n, i, u, !1);
    }
    var Kr = Xr, Jr = qr;
    De.Fragment = a, De.jsx = Kr, De.jsxs = Jr;
  }()), De;
}
process.env.NODE_ENV === "production" ? ht.exports = rn() : ht.exports = nn();
var an = ht.exports, z = function() {
  return z = Object.assign || function(t) {
    for (var r, a = 1, o = arguments.length; a < o; a++) {
      r = arguments[a];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, z.apply(this, arguments);
};
function xe(e, t, r) {
  if (r || arguments.length === 2)
    for (var a = 0, o = t.length, s; a < o; a++)
      (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), s[a] = t[a]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function on(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var sn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cn = /* @__PURE__ */ on(
  function(e) {
    return sn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), A = "-ms-", je = "-moz-", R = "-webkit-", ur = "comm", Je = "rule", kt = "decl", un = "@import", lr = "@keyframes", ln = "@layer", fn = Math.abs, xt = String.fromCharCode, mt = Object.assign;
function dn(e, t) {
  return F(e, 0) ^ 45 ? (((t << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function fr(e) {
  return e.trim();
}
function re(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function y(e, t, r) {
  return e.replace(t, r);
}
function Ue(e, t) {
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
function dr(e) {
  return e.length;
}
function $e(e, t) {
  return t.push(e), e;
}
function pn(e, t) {
  return e.map(t).join("");
}
function Gt(e, t) {
  return e.filter(function(r) {
    return !re(r, t);
  });
}
var Ze = 1, _e = 1, pr = 0, U = 0, j = 0, Te = "";
function Qe(e, t, r, a, o, s, c, f) {
  return { value: e, root: t, parent: r, type: a, props: o, children: s, line: Ze, column: _e, length: c, return: "", siblings: f };
}
function se(e, t) {
  return mt(Qe("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ke(e) {
  for (; e.root; )
    e = se(e.root, { children: [e] });
  $e(e, e.siblings);
}
function hn() {
  return j;
}
function mn() {
  return j = U > 0 ? F(Te, --U) : 0, _e--, j === 10 && (_e = 1, Ze--), j;
}
function H() {
  return j = U < pr ? F(Te, U++) : 0, _e++, j === 10 && (_e = 1, Ze++), j;
}
function he() {
  return F(Te, U);
}
function Ge() {
  return U;
}
function et(e, t) {
  return Re(Te, e, t);
}
function gt(e) {
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
function gn(e) {
  return Ze = _e = 1, pr = K(Te = e), U = 0, [];
}
function yn(e) {
  return Te = "", e;
}
function ut(e) {
  return fr(et(U - 1, yt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function vn(e) {
  for (; (j = he()) && j < 33; )
    H();
  return gt(e) > 2 || gt(j) > 3 ? "" : " ";
}
function bn(e, t) {
  for (; --t && H() && !(j < 48 || j > 102 || j > 57 && j < 65 || j > 70 && j < 97); )
    ;
  return et(e, Ge() + (t < 6 && he() == 32 && H() == 32));
}
function yt(e) {
  for (; H(); )
    switch (j) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && yt(j);
        break;
      case 40:
        e === 41 && yt(e);
        break;
      case 92:
        H();
        break;
    }
  return U;
}
function wn(e, t) {
  for (; H() && e + j !== 47 + 10; )
    if (e + j === 42 + 42 && he() === 47)
      break;
  return "/*" + et(t, U - 1) + "*" + xt(e === 47 ? e : H());
}
function Sn(e) {
  for (; !gt(he()); )
    H();
  return et(e, U);
}
function En(e) {
  return yn(He("", null, null, null, [""], e = gn(e), 0, [0], e));
}
function He(e, t, r, a, o, s, c, f, l) {
  for (var g = 0, p = 0, h = c, b = 0, E = 0, _ = 0, I = 1, M = 1, C = 1, v = 0, P = "", T = o, N = s, S = a, m = P; M; )
    switch (_ = v, v = H()) {
      case 40:
        if (_ != 108 && F(m, h - 1) == 58) {
          Ue(m += y(ut(v), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += ut(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += vn(_);
        break;
      case 92:
        m += bn(Ge() - 1, 7);
        continue;
      case 47:
        switch (he()) {
          case 42:
          case 47:
            $e(kn(wn(H(), Ge()), t, r, l), l);
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
          case 59 + p:
            C == -1 && (m = y(m, /\f/g, "")), E > 0 && K(m) - h && $e(E > 32 ? qt(m + ";", a, r, h - 1, l) : qt(y(m, " ", "") + ";", a, r, h - 2, l), l);
            break;
          case 59:
            m += ";";
          default:
            if ($e(S = Ht(m, t, r, g, p, o, f, P, T = [], N = [], h, s), s), v === 123)
              if (p === 0)
                He(m, t, S, S, T, s, h, f, N);
              else
                switch (b === 99 && F(m, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    He(e, S, S, a && $e(Ht(e, S, S, 0, 0, o, f, P, o, T = [], h, N), N), o, N, h, f, a ? T : N);
                    break;
                  default:
                    He(m, S, S, S, [""], N, 0, f, N);
                }
        }
        g = p = E = 0, I = C = 1, P = m = "", h = c;
        break;
      case 58:
        h = 1 + K(m), E = _;
      default:
        if (I < 1) {
          if (v == 123)
            --I;
          else if (v == 125 && I++ == 0 && mn() == 125)
            continue;
        }
        switch (m += xt(v), v * I) {
          case 38:
            C = p > 0 ? 1 : (m += "\f", -1);
            break;
          case 44:
            f[g++] = (K(m) - 1) * C, C = 1;
            break;
          case 64:
            he() === 45 && (m += ut(H())), b = he(), p = h = K(P = m += Sn(Ge())), v++;
            break;
          case 45:
            _ === 45 && K(m) == 2 && (I = 0);
        }
    }
  return s;
}
function Ht(e, t, r, a, o, s, c, f, l, g, p, h) {
  for (var b = o - 1, E = o === 0 ? s : [""], _ = dr(E), I = 0, M = 0, C = 0; I < a; ++I)
    for (var v = 0, P = Re(e, b + 1, b = fn(M = c[I])), T = e; v < _; ++v)
      (T = fr(M > 0 ? E[v] + " " + P : y(P, /&\f/g, E[v]))) && (l[C++] = T);
  return Qe(e, t, r, o === 0 ? Je : f, l, g, p, h);
}
function kn(e, t, r, a) {
  return Qe(e, t, r, ur, xt(hn()), Re(e, 2, -2), 0, a);
}
function qt(e, t, r, a, o) {
  return Qe(e, t, r, kt, Re(e, 0, a), Re(e, a + 1, -1), a, o);
}
function hr(e, t, r) {
  switch (dn(e, t)) {
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
      return je + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return R + e + je + e + A + e + e;
    case 5936:
      switch (F(e, t + 11)) {
        case 114:
          return R + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return R + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return R + e + A + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return R + e + A + e + e;
    case 6165:
      return R + e + A + "flex-" + e + e;
    case 5187:
      return R + e + y(e, /(\w+).+(:[^]+)/, R + "box-$1$2" + A + "flex-$1$2") + e;
    case 5443:
      return R + e + A + "flex-item-" + y(e, /flex-|-self/g, "") + (re(e, /flex-|baseline/) ? "" : A + "grid-row-" + y(e, /flex-|-self/g, "")) + e;
    case 4675:
      return R + e + A + "flex-line-pack" + y(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return R + e + A + y(e, "shrink", "negative") + e;
    case 5292:
      return R + e + A + y(e, "basis", "preferred-size") + e;
    case 6060:
      return R + "box-" + y(e, "-grow", "") + R + e + A + y(e, "grow", "positive") + e;
    case 4554:
      return R + y(e, /([^-])(transform)/g, "$1" + R + "$2") + e;
    case 6187:
      return y(y(y(e, /(zoom-|grab)/, R + "$1"), /(image-set)/, R + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return y(e, /(image-set\([^]*)/, R + "$1$`$1");
    case 4968:
      return y(y(e, /(.+:)(flex-)?(.*)/, R + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + R + e + e;
    case 4200:
      if (!re(e, /flex-|baseline/))
        return A + "grid-column-align" + Re(e, t) + e;
      break;
    case 2592:
    case 3360:
      return A + y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(a, o) {
        return t = o, re(a.props, /grid-\w+-end/);
      }) ? ~Ue(e + (r = r[t].value), "span") ? e : A + y(e, "-start", "") + e + A + "grid-row-span:" + (~Ue(r, "span") ? re(r, /\d+/) : +re(r, /\d+/) - +re(e, /\d+/)) + ";" : A + y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(a) {
        return re(a.props, /grid-\w+-start/);
      }) ? e : A + y(y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(e, /(.+)-inline(.+)/, R + "$1$2") + e;
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
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + R + "$2-$3$1" + je + (F(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ue(e, "stretch") ? hr(y(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return y(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(a, o, s, c, f, l, g) {
        return A + o + ":" + s + g + (c ? A + o + "-span:" + (f ? l : +l - +s) + g : "") + e;
      });
    case 4949:
      if (F(e, t + 6) === 121)
        return y(e, ":", ":" + R) + e;
      break;
    case 6444:
      switch (F(e, F(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return y(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + R + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + R + "$2$3$1" + A + "$2box$3") + e;
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
function Xe(e, t) {
  for (var r = "", a = 0; a < e.length; a++)
    r += t(e[a], a, e, t) || "";
  return r;
}
function xn(e, t, r, a) {
  switch (e.type) {
    case ln:
      if (e.children.length)
        break;
    case un:
    case kt:
      return e.return = e.return || e.value;
    case ur:
      return "";
    case lr:
      return e.return = e.value + "{" + Xe(e.children, a) + "}";
    case Je:
      if (!K(e.value = e.props.join(",")))
        return "";
  }
  return K(r = Xe(e.children, a)) ? e.return = e.value + "{" + r + "}" : "";
}
function Rn(e) {
  var t = dr(e);
  return function(r, a, o, s) {
    for (var c = "", f = 0; f < t; f++)
      c += e[f](r, a, o, s) || "";
    return c;
  };
}
function _n(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Cn(e, t, r, a) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case kt:
        e.return = hr(e.value, e.length, r);
        return;
      case lr:
        return Xe([se(e, { value: y(e.value, "@", "@" + R) })], a);
      case Je:
        if (e.length)
          return pn(r = e.props, function(o) {
            switch (re(o, a = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ke(se(e, { props: [y(o, /:(read-\w+)/, ":" + je + "$1")] })), ke(se(e, { props: [o] })), mt(e, { props: Gt(r, a) });
                break;
              case "::placeholder":
                ke(se(e, { props: [y(o, /:(plac\w+)/, ":" + R + "input-$1")] })), ke(se(e, { props: [y(o, /:(plac\w+)/, ":" + je + "$1")] })), ke(se(e, { props: [y(o, /:(plac\w+)/, A + "input-$1")] })), ke(se(e, { props: [o] })), mt(e, { props: Gt(r, a) });
                break;
            }
            return "";
          });
    }
}
var Pn = {
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
}, ge = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Rt = typeof window < "u" && "HTMLElement" in window, On = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Xt = /invalid hook call/i, Ve = /* @__PURE__ */ new Set(), Tn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", a = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var s = !0;
      console.error = function(c) {
        for (var f = [], l = 1; l < arguments.length; l++)
          f[l - 1] = arguments[l];
        Xt.test(c) ? (s = !1, Ve.delete(a)) : o.apply(void 0, xe([c], f, !1));
      }, Zr(), s && !Ve.has(a) && (console.warn(a), Ve.add(a));
    } catch (c) {
      Xt.test(c.message) && Ve.delete(a);
    } finally {
      console.error = o;
    }
  }
}, tt = Object.freeze([]), Ce = Object.freeze({});
function An(e, t, r) {
  return r === void 0 && (r = Ce), e.theme !== r.theme && e.theme || t || r.theme;
}
var vt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Nn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, In = /(^-|-$)/g;
function Kt(e) {
  return e.replace(Nn, "-").replace(In, "");
}
var Dn = /(a)(d)/gi, Jt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function bt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = Jt(t % 52) + r;
  return (Jt(t % 52) + r).replace(Dn, "$1-$2");
}
var lt, de = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, mr = function(e) {
  return de(5381, e);
};
function $n(e) {
  return bt(mr(e) >>> 0);
}
function gr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function ft(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var yr = typeof Symbol == "function" && Symbol.for, vr = yr ? Symbol.for("react.memo") : 60115, jn = yr ? Symbol.for("react.forward_ref") : 60112, Fn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Mn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, br = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Ln = ((lt = {})[jn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, lt[vr] = br, lt);
function Zt(e) {
  return ("type" in (t = e) && t.type.$$typeof) === vr ? br : "$$typeof" in e ? Ln[e.$$typeof] : Fn;
  var t;
}
var Bn = Object.defineProperty, zn = Object.getOwnPropertyNames, Qt = Object.getOwnPropertySymbols, Vn = Object.getOwnPropertyDescriptor, Yn = Object.getPrototypeOf, er = Object.prototype;
function wr(e, t, r) {
  if (typeof t != "string") {
    if (er) {
      var a = Yn(t);
      a && a !== er && wr(e, a, r);
    }
    var o = zn(t);
    Qt && (o = o.concat(Qt(t)));
    for (var s = Zt(e), c = Zt(t), f = 0; f < o.length; ++f) {
      var l = o[f];
      if (!(l in Mn || r && r[l] || c && l in c || s && l in s)) {
        var g = Vn(t, l);
        try {
          Bn(e, l, g);
        } catch {
        }
      }
    }
  }
  return e;
}
function Pe(e) {
  return typeof e == "function";
}
function _t(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function pe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function tr(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], a = 1; a < e.length; a++)
    r += t ? t + e[a] : e[a];
  return r;
}
function Oe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function wt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Oe(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      e[a] = wt(e[a], t[a]);
  else if (Oe(t))
    for (var a in t)
      e[a] = wt(e[a], t[a]);
  return e;
}
function Ct(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Wn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Un() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], a = [], o = 1, s = e.length; o < s; o += 1)
    a.push(e[o]);
  return a.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Ae(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Un.apply(void 0, xe([Wn[e]], t, !1)).trim());
}
var Gn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, a = 0; a < t; a++)
      r += this.groupSizes[a];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var a = this.groupSizes, o = a.length, s = o; t >= s; )
        if ((s <<= 1) < 0)
          throw Ae(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(a), this.length = s;
      for (var c = o; c < s; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), l = (c = 0, r.length); c < l; c++)
      this.tag.insertRule(f, r[c]) && (this.groupSizes[t]++, f++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], a = this.indexOfGroup(t), o = a + r;
      this.groupSizes[t] = 0;
      for (var s = a; s < o; s++)
        this.tag.deleteRule(a);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var a = this.groupSizes[t], o = this.indexOfGroup(t), s = o + a, c = o; c < s; c++)
      r += "".concat(this.tag.getRule(c)).concat(`/*!sc*/
`);
    return r;
  }, e;
}(), qe = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), dt = 1, Ye = function(e) {
  if (qe.has(e))
    return qe.get(e);
  for (; Ke.has(dt); )
    dt++;
  var t = dt++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Ae(16, "".concat(t));
  return qe.set(e, t), Ke.set(t, e), t;
}, Hn = function(e, t) {
  qe.set(e, t), Ke.set(t, e);
}, qn = "style[".concat(ge, "][").concat("data-styled-version", '="').concat("6.0.7", '"]'), Xn = new RegExp("^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Kn = function(e, t, r) {
  for (var a, o = r.split(","), s = 0, c = o.length; s < c; s++)
    (a = o[s]) && e.registerName(t, a);
}, Jn = function(e, t) {
  for (var r, a = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(`/*!sc*/
`), o = [], s = 0, c = a.length; s < c; s++) {
    var f = a[s].trim();
    if (f) {
      var l = f.match(Xn);
      if (l) {
        var g = 0 | parseInt(l[1], 10), p = l[2];
        g !== 0 && (Hn(p, g), Kn(e, p, l[3]), e.getTag().insertRules(g, o)), o.length = 0;
      } else
        o.push(f);
    }
  }
};
function Zn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Sr = function(e) {
  var t = document.head, r = e || t, a = document.createElement("style"), o = function(f) {
    var l = Array.from(f.querySelectorAll("style[".concat(ge, "]")));
    return l[l.length - 1];
  }(r), s = o !== void 0 ? o.nextSibling : null;
  a.setAttribute(ge, "active"), a.setAttribute("data-styled-version", "6.0.7");
  var c = Zn();
  return c && a.setAttribute("nonce", c), r.insertBefore(a, s), a;
}, Qn = function() {
  function e(t) {
    this.element = Sr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var a = document.styleSheets, o = 0, s = a.length; o < s; o++) {
        var c = a[o];
        if (c.ownerNode === r)
          return c;
      }
      throw Ae(17);
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
}(), ea = function() {
  function e(t) {
    this.element = Sr(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), ta = function() {
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
}(), rr = Rt, ra = { isServer: !Rt, useCSSOMInjection: !On }, Er = function() {
  function e(t, r, a) {
    t === void 0 && (t = Ce), r === void 0 && (r = {});
    var o = this;
    this.options = z(z({}, ra), t), this.gs = r, this.names = new Map(a), this.server = !!t.isServer, !this.server && Rt && rr && (rr = !1, function(s) {
      for (var c = document.querySelectorAll(qn), f = 0, l = c.length; f < l; f++) {
        var g = c[f];
        g && g.getAttribute(ge) !== "active" && (Jn(s, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this)), Ct(this, function() {
      return function(s) {
        for (var c = s.getTag(), f = c.length, l = "", g = function(h) {
          var b = function(C) {
            return Ke.get(C);
          }(h);
          if (b === void 0)
            return "continue";
          var E = s.names.get(b), _ = c.getGroup(h);
          if (E === void 0 || _.length === 0)
            return "continue";
          var I = "".concat(ge, ".g").concat(h, '[id="').concat(b, '"]'), M = "";
          E !== void 0 && E.forEach(function(C) {
            C.length > 0 && (M += "".concat(C, ","));
          }), l += "".concat(_).concat(I, '{content:"').concat(M, '"}').concat(`/*!sc*/
`);
        }, p = 0; p < f; p++)
          g(p);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Ye(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(z(z({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var a = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new ta(o) : a ? new Qn(o) : new ea(o);
    }(this.options), new Gn(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ye(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(r), this.names.set(t, a);
    }
  }, e.prototype.insertRules = function(t, r, a) {
    this.registerName(t, r), this.getTag().insertRules(Ye(t), a);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ye(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), na = /&/g, aa = /^\s*\/\/.*$/gm;
function kr(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(a) {
      return "".concat(t, " ").concat(a);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = kr(r.children, t)), r;
  });
}
function oa(e) {
  var t, r, a, o = e === void 0 ? Ce : e, s = o.options, c = s === void 0 ? Ce : s, f = o.plugins, l = f === void 0 ? tt : f, g = function(b, E, _) {
    return _ === r || _.startsWith(r) && _.endsWith(r) && _.replaceAll(r, "").length > 0 ? ".".concat(t) : b;
  }, p = l.slice();
  p.push(function(b) {
    b.type === Je && b.value.includes("&") && (b.props[0] = b.props[0].replace(na, r).replace(a, g));
  }), c.prefix && p.push(Cn), p.push(xn);
  var h = function(b, E, _, I) {
    E === void 0 && (E = ""), _ === void 0 && (_ = ""), I === void 0 && (I = "&"), t = I, r = E, a = new RegExp("\\".concat(r, "\\b"), "g");
    var M = b.replace(aa, ""), C = En(_ || E ? "".concat(_, " ").concat(E, " { ").concat(M, " }") : M);
    c.namespace && (C = kr(C, c.namespace));
    var v = [];
    return Xe(C, Rn(p.concat(_n(function(P) {
      return v.push(P);
    })))), v;
  };
  return h.hash = l.length ? l.reduce(function(b, E) {
    return E.name || Ae(15), de(b, E.name);
  }, 5381).toString() : "", h;
}
var ia = new Er(), St = oa(), xr = ce.createContext({ shouldForwardProp: void 0, styleSheet: ia, stylis: St });
xr.Consumer;
ce.createContext(void 0);
function nr() {
  return en(xr);
}
var ar = function() {
  function e(t, r) {
    var a = this;
    this.inject = function(o, s) {
      s === void 0 && (s = St);
      var c = a.name + s.hash;
      o.hasNameForId(a.id, c) || o.insertRules(a.id, c, s(a.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, Ct(this, function() {
      throw Ae(12, String(a.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = St), this.name + t.hash;
  }, e;
}(), sa = function(e) {
  return e >= "A" && e <= "Z";
};
function or(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var a = e[r];
    if (r === 1 && a === "-" && e[0] === "-")
      return e;
    sa(a) ? t += "-" + a.toLowerCase() : t += a;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Rr = function(e) {
  return e == null || e === !1 || e === "";
}, _r = function(e) {
  var t, r, a = [];
  for (var o in e) {
    var s = e[o];
    e.hasOwnProperty(o) && !Rr(s) && (Array.isArray(s) && s.isCss || Pe(s) ? a.push("".concat(or(o), ":"), s, ";") : Oe(s) ? a.push.apply(a, xe(xe(["".concat(o, " {")], _r(s), !1), ["}"], !1)) : a.push("".concat(or(o), ": ").concat((t = o, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Pn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return a;
};
function me(e, t, r, a) {
  if (Rr(e))
    return [];
  if (_t(e))
    return [".".concat(e.styledComponentId)];
  if (Pe(e)) {
    if (!Pe(s = e) || s.prototype && s.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof ar || Oe(o) || o === null || console.error("".concat(gr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), me(o, t, r, a);
  }
  var s;
  return e instanceof ar ? r ? (e.inject(r, a), [e.getName(a)]) : [e] : Oe(e) ? _r(e) : Array.isArray(e) ? Array.prototype.concat.apply(tt, e.map(function(c) {
    return me(c, t, r, a);
  })) : [e.toString()];
}
function ca(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Pe(r) && !_t(r))
      return !1;
  }
  return !0;
}
var ua = mr("6.0.7"), la = function() {
  function e(t, r, a) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (a === void 0 || a.isStatic) && ca(t), this.componentId = r, this.baseHash = de(ua, r), this.baseStyle = a, Er.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, a) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, a) : "";
    if (this.isStatic && !a.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        o = pe(o, this.staticRulesId);
      else {
        var s = tr(me(this.rules, t, r, a)), c = bt(de(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(this.componentId, c)) {
          var f = a(s, ".".concat(c), void 0, this.componentId);
          r.insertRules(this.componentId, c, f);
        }
        o = pe(o, c), this.staticRulesId = c;
      }
    else {
      for (var l = de(this.baseHash, a.hash), g = "", p = 0; p < this.rules.length; p++) {
        var h = this.rules[p];
        if (typeof h == "string")
          g += h, process.env.NODE_ENV !== "production" && (l = de(l, h));
        else if (h) {
          var b = tr(me(h, t, r, a));
          l = de(l, b), g += b;
        }
      }
      if (g) {
        var E = bt(l >>> 0);
        r.hasNameForId(this.componentId, E) || r.insertRules(this.componentId, E, a(g, ".".concat(E), void 0, this.componentId)), o = pe(o, E);
      }
    }
    return o;
  }, e;
}(), Cr = ce.createContext(void 0);
Cr.Consumer;
var pt = {}, ir = /* @__PURE__ */ new Set();
function fa(e, t, r) {
  var a = _t(e), o = e, s = !ft(e), c = t.attrs, f = c === void 0 ? tt : c, l = t.componentId, g = l === void 0 ? function(T, N) {
    var S = typeof T != "string" ? "sc" : Kt(T);
    pt[S] = (pt[S] || 0) + 1;
    var m = "".concat(S, "-").concat($n("6.0.7" + S + pt[S]));
    return N ? "".concat(N, "-").concat(m) : m;
  }(t.displayName, t.parentComponentId) : l, p = t.displayName, h = p === void 0 ? function(T) {
    return ft(T) ? "styled.".concat(T) : "Styled(".concat(gr(T), ")");
  }(e) : p, b = t.displayName && t.componentId ? "".concat(Kt(t.displayName), "-").concat(t.componentId) : t.componentId || g, E = a && o.attrs ? o.attrs.concat(f).filter(Boolean) : f, _ = t.shouldForwardProp;
  if (a && o.shouldForwardProp) {
    var I = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var M = t.shouldForwardProp;
      _ = function(T, N) {
        return I(T, N) && M(T, N);
      };
    } else
      _ = I;
  }
  var C = new la(r, b, a ? o.componentStyle : void 0);
  function v(T, N) {
    return function(S, m, J) {
      var Z = S.attrs, rt = S.componentStyle, nt = S.defaultProps, Fe = S.foldedComponentIds, V = S.styledComponentId, Q = S.target, ue = ce.useContext(Cr), Me = nr(), ye = S.shouldForwardProp || Me.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Yt(V);
      var G = function(we, le, oe) {
        for (var q, Y = z(z({}, le), { className: void 0, theme: oe }), fe = 0; fe < we.length; fe += 1) {
          var ee = Pe(q = we[fe]) ? q(Y) : q;
          for (var X in ee)
            Y[X] = X === "className" ? pe(Y[X], ee[X]) : X === "style" ? z(z({}, Y[X]), ee[X]) : ee[X];
        }
        return le.className && (Y.className = pe(Y.className, le.className)), Y;
      }(Z, m, An(m, ue, nt) || Ce), ne = G.as || Q, ae = {};
      for (var L in G)
        G[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" || (L === "forwardedAs" ? ae.as = G.forwardedAs : ye && !ye(L, ne) || (ae[L] = G[L], ye || process.env.NODE_ENV !== "development" || cn(L) || ir.has(L) || !vt.has(ne) || (ir.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ve = function(we, le) {
        var oe = nr(), q = we.generateAndInjectStyles(le, oe.styleSheet, oe.stylis);
        return process.env.NODE_ENV !== "production" && Yt(q), q;
      }(rt, G);
      process.env.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(ve);
      var be = pe(Fe, V);
      return ve && (be += " " + ve), G.className && (be += " " + G.className), ae[ft(ne) && !vt.has(ne) ? "class" : "className"] = be, ae.ref = J, Qr(ne, ae);
    }(P, T, N);
  }
  process.env.NODE_ENV !== "production" && (v.displayName = h);
  var P = ce.forwardRef(v);
  return P.attrs = E, P.componentStyle = C, P.shouldForwardProp = _, process.env.NODE_ENV !== "production" && (P.displayName = h), P.foldedComponentIds = a ? pe(o.foldedComponentIds, o.styledComponentId) : "", P.styledComponentId = b, P.target = a ? o.target : e, Object.defineProperty(P, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = a ? function(N) {
      for (var S = [], m = 1; m < arguments.length; m++)
        S[m - 1] = arguments[m];
      for (var J = 0, Z = S; J < Z.length; J++)
        wt(N, Z[J], !0);
      return N;
    }({}, o.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (Tn(h, b), P.warnTooManyClasses = function(T, N) {
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
  }(h, b)), Ct(P, function() {
    return ".".concat(P.styledComponentId);
  }), s && wr(P, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), P;
}
function sr(e, t) {
  for (var r = [e[0]], a = 0, o = t.length; a < o; a += 1)
    r.push(t[a], e[a + 1]);
  return r;
}
var cr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function da(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (Pe(e) || Oe(e)) {
    var a = e;
    return cr(me(sr(tt, xe([a], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? me(o) : cr(me(sr(o, t)));
}
function Et(e, t, r) {
  if (r === void 0 && (r = Ce), !t)
    throw Ae(1, t);
  var a = function(o) {
    for (var s = [], c = 1; c < arguments.length; c++)
      s[c - 1] = arguments[c];
    return e(t, r, da.apply(void 0, xe([o], s, !1)));
  };
  return a.attrs = function(o) {
    return Et(e, t, z(z({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, a.withConfig = function(o) {
    return Et(e, t, z(z({}, r), o));
  }, a;
}
var Pr = function(e) {
  return Et(fa, e);
}, Pt = Pr;
vt.forEach(function(e) {
  Pt[e] = Pr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var We = "__sc-".concat(ge, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[We] || (window[We] = 0), window[We] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[We] += 1);
const ie = {
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
};
var pa = /* @__PURE__ */ ((e) => (e[e.basic = 0] = "basic", e[e.primary = 1] = "primary", e[e.secondary = 2] = "secondary", e[e.outlineBasic = 3] = "outlineBasic", e[e.outlinePrimary = 4] = "outlinePrimary", e[e.outlineSecondary = 5] = "outlineSecondary", e))(pa || {});
const Or = ce.forwardRef(
  function(t, r) {
    const { className: a, disabled: o, transparent: s, typeButton: c, ...f } = t;
    return /* @__PURE__ */ an.jsx(
      "button",
      {
        className: tn(a),
        "aria-hidden": !0,
        ref: r,
        disabled: o === !0,
        ...f,
        children: t.children
      }
    );
  }
);
Or.defaultProps = {};
const ga = Pt(Or)`
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
      return ie.white;
    case 1:
      return ie.white;
    case 2:
      return ie.white;
    case 3:
      return e.theme.palette.basic.main;
    case 4:
      return e.theme.palette.primary.main;
    case 5:
      return e.theme.palette.secondary.main;
    default:
      return ie.white;
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
  color: ${ie.white};  
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
      return ie.white;
    case 4:
      return ie.white;
    case 5:
      return ie.white;
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
`;
Pt.button`
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
  ga as Button,
  pa as TypeButton
};
//# sourceMappingURL=index.es.js.map
