import re, { useRef as Lr, useDebugValue as Ut, createElement as Wr, useContext as Yr, useEffect as Ur } from "react";
import xe from "classnames";
var Ue = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function Vr() {
  if (Vt) return Me;
  Vt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      i = {};
      for (var u in o)
        u !== "key" && (i[u] = o[u]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return Me.Fragment = t, Me.jsx = r, Me.jsxs = r, Me;
}
var Fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function Hr() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === We ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case p:
          return "Fragment";
        case O:
          return "Portal";
        case H:
          return "Profiler";
        case f:
          return "StrictMode";
        case $e:
          return "Suspense";
        case ye:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case Le:
            return (a.displayName || "Context") + ".Provider";
          case J:
            return (a._context.displayName || "Context") + ".Consumer";
          case Pe:
            var c = a.render;
            return a = a.displayName, a || (a = c.displayName || c.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case je:
            return c = a.displayName || null, c !== null ? c : e(a.type) || "Memo";
          case Ie:
            c = a._payload, a = a._init;
            try {
              return e(a(c));
            } catch {
            }
        }
      return null;
    }
    function t(a) {
      return "" + a;
    }
    function r(a) {
      try {
        t(a);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var l = c.error, k = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return l.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), t(a);
      }
    }
    function n() {
    }
    function o() {
      if (K === 0) {
        ce = console.log, ae = console.info, le = console.warn, Z = console.error, q = console.group, we = console.groupCollapsed, ue = console.groupEnd;
        var a = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: a,
          log: a,
          warn: a,
          error: a,
          group: a,
          groupCollapsed: a,
          groupEnd: a
        });
      }
      K++;
    }
    function i() {
      if (K--, K === 0) {
        var a = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Y({}, a, { value: ce }),
          info: Y({}, a, { value: ae }),
          warn: Y({}, a, { value: le }),
          error: Y({}, a, { value: Z }),
          group: Y({}, a, { value: q }),
          groupCollapsed: Y({}, a, { value: we }),
          groupEnd: Y({}, a, { value: ue })
        });
      }
      0 > K && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(a) {
      if (U === void 0)
        try {
          throw Error();
        } catch (l) {
          var c = l.stack.trim().match(/\n( *(at )?)/);
          U = c && c[1] || "", zt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + U + a + zt;
    }
    function u(a, c) {
      if (!a || dt) return "";
      var l = ft.get(a);
      if (l !== void 0) return l;
      dt = !0, l = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var k = null;
      k = M.H, M.H = null, o();
      try {
        var F = {
          DetermineComponentFrameRoot: function() {
            try {
              if (c) {
                var oe = function() {
                  throw Error();
                };
                if (Object.defineProperty(oe.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(oe, []);
                  } catch (ee) {
                    var Ye = ee;
                  }
                  Reflect.construct(a, [], oe);
                } else {
                  try {
                    oe.call();
                  } catch (ee) {
                    Ye = ee;
                  }
                  a.call(oe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ee) {
                  Ye = ee;
                }
                (oe = a()) && typeof oe.catch == "function" && oe.catch(function() {
                });
              }
            } catch (ee) {
              if (ee && Ye && typeof ee.stack == "string")
                return [ee.stack, Ye.stack];
            }
            return [null, null];
          }
        };
        F.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var $ = Object.getOwnPropertyDescriptor(
          F.DetermineComponentFrameRoot,
          "name"
        );
        $ && $.configurable && Object.defineProperty(
          F.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var h = F.DetermineComponentFrameRoot(), Q = h[0], ve = h[1];
        if (Q && ve) {
          var D = Q.split(`
`), de = ve.split(`
`);
          for (h = $ = 0; $ < D.length && !D[$].includes(
            "DetermineComponentFrameRoot"
          ); )
            $++;
          for (; h < de.length && !de[h].includes(
            "DetermineComponentFrameRoot"
          ); )
            h++;
          if ($ === D.length || h === de.length)
            for ($ = D.length - 1, h = de.length - 1; 1 <= $ && 0 <= h && D[$] !== de[h]; )
              h--;
          for (; 1 <= $ && 0 <= h; $--, h--)
            if (D[$] !== de[h]) {
              if ($ !== 1 || h !== 1)
                do
                  if ($--, h--, 0 > h || D[$] !== de[h]) {
                    var Te = `
` + D[$].replace(
                      " at new ",
                      " at "
                    );
                    return a.displayName && Te.includes("<anonymous>") && (Te = Te.replace("<anonymous>", a.displayName)), typeof a == "function" && ft.set(a, Te), Te;
                  }
                while (1 <= $ && 0 <= h);
              break;
            }
        }
      } finally {
        dt = !1, M.H = k, i(), Error.prepareStackTrace = l;
      }
      return D = (D = a ? a.displayName || a.name : "") ? s(D) : "", typeof a == "function" && ft.set(a, D), D;
    }
    function d(a) {
      if (a == null) return "";
      if (typeof a == "function") {
        var c = a.prototype;
        return u(
          a,
          !(!c || !c.isReactComponent)
        );
      }
      if (typeof a == "string") return s(a);
      switch (a) {
        case $e:
          return s("Suspense");
        case ye:
          return s("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case Pe:
            return a = u(a.render, !1), a;
          case je:
            return d(a.type);
          case Ie:
            c = a._payload, a = a._init;
            try {
              return d(a(c));
            } catch {
            }
        }
      return "";
    }
    function g() {
      var a = M.A;
      return a === null ? null : a.getOwner();
    }
    function y(a) {
      if (ne.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function b(a, c) {
      function l() {
        Bt || (Bt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: l,
        configurable: !0
      });
    }
    function v() {
      var a = e(this.type);
      return Lt[a] || (Lt[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function w(a, c, l, k, F, $) {
      return l = $.ref, a = {
        $$typeof: E,
        type: a,
        key: c,
        props: $,
        _owner: F
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function S(a, c, l, k, F, $) {
      if (typeof a == "string" || typeof a == "function" || a === p || a === H || a === f || a === $e || a === ye || a === ut || typeof a == "object" && a !== null && (a.$$typeof === Ie || a.$$typeof === je || a.$$typeof === Le || a.$$typeof === J || a.$$typeof === Pe || a.$$typeof === z || a.getModuleId !== void 0)) {
        var h = c.children;
        if (h !== void 0)
          if (k)
            if (se(h)) {
              for (k = 0; k < h.length; k++)
                R(h[k], a);
              Object.freeze && Object.freeze(h);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else R(h, a);
      } else
        h = "", (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), a === null ? k = "null" : se(a) ? k = "array" : a !== void 0 && a.$$typeof === E ? (k = "<" + (e(a.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : k = typeof a, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          k,
          h
        );
      if (ne.call(c, "key")) {
        h = e(a);
        var Q = Object.keys(c).filter(function(D) {
          return D !== "key";
        });
        k = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", Wt[h + k] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          h,
          Q,
          h
        ), Wt[h + k] = !0);
      }
      if (h = null, l !== void 0 && (r(l), h = "" + l), y(c) && (r(c.key), h = "" + c.key), "key" in c) {
        l = {};
        for (var ve in c)
          ve !== "key" && (l[ve] = c[ve]);
      } else l = c;
      return h && b(
        l,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), w(a, h, $, F, g(), l);
    }
    function R(a, c) {
      if (typeof a == "object" && a && a.$$typeof !== Br) {
        if (se(a))
          for (var l = 0; l < a.length; l++) {
            var k = a[l];
            T(k) && P(k, c);
          }
        else if (T(a))
          a._store && (a._store.validated = 1);
        else if (a === null || typeof a != "object" ? l = null : (l = be && a[be] || a["@@iterator"], l = typeof l == "function" ? l : null), typeof l == "function" && l !== a.entries && (l = l.call(a), l !== a))
          for (; !(a = l.next()).done; )
            T(a.value) && P(a.value, c);
      }
    }
    function T(a) {
      return typeof a == "object" && a !== null && a.$$typeof === E;
    }
    function P(a, c) {
      if (a._store && !a._store.validated && a.key == null && (a._store.validated = 1, c = _(c), !Yt[c])) {
        Yt[c] = !0;
        var l = "";
        a && a._owner != null && a._owner !== g() && (l = null, typeof a._owner.tag == "number" ? l = e(a._owner.type) : typeof a._owner.name == "string" && (l = a._owner.name), l = " It was passed a child from " + l + ".");
        var k = M.getCurrentStack;
        M.getCurrentStack = function() {
          var F = d(a.type);
          return k && (F += k() || ""), F;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          c,
          l
        ), M.getCurrentStack = k;
      }
    }
    function _(a) {
      var c = "", l = g();
      return l && (l = e(l.type)) && (c = `

Check the render method of \`` + l + "`."), c || (a = e(a)) && (c = `

Check the top-level render call using <` + a + ">."), c;
    }
    var A = re, E = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), Le = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), $e = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), je = Symbol.for("react.memo"), Ie = Symbol.for("react.lazy"), ut = Symbol.for("react.offscreen"), be = Symbol.iterator, We = Symbol.for("react.client.reference"), M = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = Object.prototype.hasOwnProperty, Y = Object.assign, z = Symbol.for("react.client.reference"), se = Array.isArray, K = 0, ce, ae, le, Z, q, we, ue;
    n.__reactDisabledLog = !0;
    var U, zt, dt = !1, ft = new (typeof WeakMap == "function" ? WeakMap : Map)(), Br = Symbol.for("react.client.reference"), Bt, Lt = {}, Wt = {}, Yt = {};
    Fe.Fragment = p, Fe.jsx = function(a, c, l, k, F) {
      return S(a, c, l, !1, k, F);
    }, Fe.jsxs = function(a, c, l, k, F) {
      return S(a, c, l, !0, k, F);
    };
  }()), Fe;
}
var Gt;
function Gr() {
  return Gt || (Gt = 1, process.env.NODE_ENV === "production" ? Ue.exports = Vr() : Ue.exports = Hr()), Ue.exports;
}
var B = Gr(), W = function() {
  return W = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, W.apply(this, arguments);
};
function Se(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function qr(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Xr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Jr = /* @__PURE__ */ qr(
  function(e) {
    return Xr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), N = "-ms-", ze = "-moz-", x = "-webkit-", fr = "comm", at = "rule", _t = "decl", Kr = "@import", hr = "@keyframes", Zr = "@layer", mr = Math.abs, Ot = String.fromCharCode, kt = Object.assign;
function Qr(e, t) {
  return I(e, 0) ^ 45 ? (((t << 2 ^ I(e, 0)) << 2 ^ I(e, 1)) << 2 ^ I(e, 2)) << 2 ^ I(e, 3) : 0;
}
function pr(e) {
  return e.trim();
}
function te(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function m(e, t, r) {
  return e.replace(t, r);
}
function Xe(e, t, r) {
  return e.indexOf(t, r);
}
function I(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ee(e, t, r) {
  return e.slice(t, r);
}
function X(e) {
  return e.length;
}
function gr(e) {
  return e.length;
}
function De(e, t) {
  return t.push(e), e;
}
function en(e, t) {
  return e.map(t).join("");
}
function qt(e, t) {
  return e.filter(function(r) {
    return !te(r, t);
  });
}
var ot = 1, Ce = 1, yr = 0, V = 0, j = 0, _e = "";
function it(e, t, r, n, o, i, s, u) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: ot, column: Ce, length: s, return: "", siblings: u };
}
function ie(e, t) {
  return kt(it("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ke(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  De(e, e.siblings);
}
function tn() {
  return j;
}
function rn() {
  return j = V > 0 ? I(_e, --V) : 0, Ce--, j === 10 && (Ce = 1, ot--), j;
}
function G() {
  return j = V < yr ? I(_e, V++) : 0, Ce++, j === 10 && (Ce = 1, ot++), j;
}
function me() {
  return I(_e, V);
}
function Je() {
  return V;
}
function st(e, t) {
  return Ee(_e, e, t);
}
function xt(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function nn(e) {
  return ot = Ce = 1, yr = X(_e = e), V = 0, [];
}
function an(e) {
  return _e = "", e;
}
function ht(e) {
  return pr(st(V - 1, St(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function on(e) {
  for (; (j = me()) && j < 33; )
    G();
  return xt(e) > 2 || xt(j) > 3 ? "" : " ";
}
function sn(e, t) {
  for (; --t && G() && !(j < 48 || j > 102 || j > 57 && j < 65 || j > 70 && j < 97); )
    ;
  return st(e, Je() + (t < 6 && me() == 32 && G() == 32));
}
function St(e) {
  for (; G(); )
    switch (j) {
      // ] ) " '
      case e:
        return V;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && St(j);
        break;
      // (
      case 40:
        e === 41 && St(e);
        break;
      // \
      case 92:
        G();
        break;
    }
  return V;
}
function cn(e, t) {
  for (; G() && e + j !== 57; )
    if (e + j === 84 && me() === 47)
      break;
  return "/*" + st(t, V - 1) + "*" + Ot(e === 47 ? e : G());
}
function ln(e) {
  for (; !xt(me()); )
    G();
  return st(e, V);
}
function un(e) {
  return an(Ke("", null, null, null, [""], e = nn(e), 0, [0], e));
}
function Ke(e, t, r, n, o, i, s, u, d) {
  for (var g = 0, y = 0, b = s, v = 0, w = 0, S = 0, R = 1, T = 1, P = 1, _ = 0, A = "", E = o, O = i, p = n, f = A; T; )
    switch (S = _, _ = G()) {
      // (
      case 40:
        if (S != 108 && I(f, b - 1) == 58) {
          Xe(f += m(ht(_), "&", "&\f"), "&\f", mr(g ? u[g - 1] : 0)) != -1 && (P = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        f += ht(_);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        f += on(S);
        break;
      // \
      case 92:
        f += sn(Je() - 1, 7);
        continue;
      // /
      case 47:
        switch (me()) {
          case 42:
          case 47:
            De(dn(cn(G(), Je()), t, r, d), d);
            break;
          default:
            f += "/";
        }
        break;
      // {
      case 123 * R:
        u[g++] = X(f) * P;
      // } ; \0
      case 125 * R:
      case 59:
      case 0:
        switch (_) {
          // \0 }
          case 0:
          case 125:
            T = 0;
          // ;
          case 59 + y:
            P == -1 && (f = m(f, /\f/g, "")), w > 0 && X(f) - b && De(w > 32 ? Jt(f + ";", n, r, b - 1, d) : Jt(m(f, " ", "") + ";", n, r, b - 2, d), d);
            break;
          // @ ;
          case 59:
            f += ";";
          // { rule/at-rule
          default:
            if (De(p = Xt(f, t, r, g, y, o, u, A, E = [], O = [], b, i), i), _ === 123)
              if (y === 0)
                Ke(f, t, p, p, E, i, b, u, O);
              else
                switch (v === 99 && I(f, 3) === 110 ? 100 : v) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ke(e, p, p, n && De(Xt(e, p, p, 0, 0, o, u, A, o, E = [], b, O), O), o, O, b, u, n ? E : O);
                    break;
                  default:
                    Ke(f, p, p, p, [""], O, 0, u, O);
                }
        }
        g = y = w = 0, R = P = 1, A = f = "", b = s;
        break;
      // :
      case 58:
        b = 1 + X(f), w = S;
      default:
        if (R < 1) {
          if (_ == 123)
            --R;
          else if (_ == 125 && R++ == 0 && rn() == 125)
            continue;
        }
        switch (f += Ot(_), _ * R) {
          // &
          case 38:
            P = y > 0 ? 1 : (f += "\f", -1);
            break;
          // ,
          case 44:
            u[g++] = (X(f) - 1) * P, P = 1;
            break;
          // @
          case 64:
            me() === 45 && (f += ht(G())), v = me(), y = b = X(A = f += ln(Je())), _++;
            break;
          // -
          case 45:
            S === 45 && X(f) == 2 && (R = 0);
        }
    }
  return i;
}
function Xt(e, t, r, n, o, i, s, u, d, g, y, b) {
  for (var v = o - 1, w = o === 0 ? i : [""], S = gr(w), R = 0, T = 0, P = 0; R < n; ++R)
    for (var _ = 0, A = Ee(e, v + 1, v = mr(T = s[R])), E = e; _ < S; ++_)
      (E = pr(T > 0 ? w[_] + " " + A : m(A, /&\f/g, w[_]))) && (d[P++] = E);
  return it(e, t, r, o === 0 ? at : u, d, g, y, b);
}
function dn(e, t, r, n) {
  return it(e, t, r, fr, Ot(tn()), Ee(e, 2, -2), 0, n);
}
function Jt(e, t, r, n, o) {
  return it(e, t, r, _t, Ee(e, 0, n), Ee(e, n + 1, -1), n, o);
}
function br(e, t, r) {
  switch (Qr(e, t)) {
    // color-adjust
    case 5103:
      return x + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return x + e + e;
    // tab-size
    case 4789:
      return ze + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return x + e + ze + e + N + e + e;
    // writing-mode
    case 5936:
      switch (I(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return x + e + N + m(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return x + e + N + m(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return x + e + N + m(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return x + e + N + e + e;
    // order
    case 6165:
      return x + e + N + "flex-" + e + e;
    // align-items
    case 5187:
      return x + e + m(e, /(\w+).+(:[^]+)/, x + "box-$1$2" + N + "flex-$1$2") + e;
    // align-self
    case 5443:
      return x + e + N + "flex-item-" + m(e, /flex-|-self/g, "") + (te(e, /flex-|baseline/) ? "" : N + "grid-row-" + m(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return x + e + N + "flex-line-pack" + m(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return x + e + N + m(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return x + e + N + m(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return x + "box-" + m(e, "-grow", "") + x + e + N + m(e, "grow", "positive") + e;
    // transition
    case 4554:
      return x + m(e, /([^-])(transform)/g, "$1" + x + "$2") + e;
    // cursor
    case 6187:
      return m(m(m(e, /(zoom-|grab)/, x + "$1"), /(image-set)/, x + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return m(e, /(image-set\([^]*)/, x + "$1$`$1");
    // justify-content
    case 4968:
      return m(m(e, /(.+:)(flex-)?(.*)/, x + "box-pack:$3" + N + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + x + e + e;
    // justify-self
    case 4200:
      if (!te(e, /flex-|baseline/)) return N + "grid-column-align" + Ee(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return N + m(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, te(n.props, /grid-\w+-end/);
      }) ? ~Xe(e + (r = r[t].value), "span", 0) ? e : N + m(e, "-start", "") + e + N + "grid-row-span:" + (~Xe(r, "span", 0) ? te(r, /\d+/) : +te(r, /\d+/) - +te(e, /\d+/)) + ";" : N + m(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return te(n.props, /grid-\w+-start/);
      }) ? e : N + m(m(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return m(e, /(.+)-inline(.+)/, x + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
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
      if (X(e) - 1 - t > 6)
        switch (I(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (I(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return m(e, /(.+:)(.+)-([^]+)/, "$1" + x + "$2-$3$1" + ze + (I(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Xe(e, "stretch", 0) ? br(m(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return m(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, s, u, d, g) {
        return N + o + ":" + i + g + (s ? N + o + "-span:" + (u ? d : +d - +i) + g : "") + e;
      });
    // position: sticky
    case 4949:
      if (I(e, t + 6) === 121)
        return m(e, ":", ":" + x) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (I(e, I(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return m(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + x + (I(e, 14) === 45 ? "inline-" : "") + "box$3$1" + x + "$2$3$1" + N + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return m(e, ":", ":" + N) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return m(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function tt(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function fn(e, t, r, n) {
  switch (e.type) {
    case Zr:
      if (e.children.length) break;
    case Kr:
    case _t:
      return e.return = e.return || e.value;
    case fr:
      return "";
    case hr:
      return e.return = e.value + "{" + tt(e.children, n) + "}";
    case at:
      if (!X(e.value = e.props.join(","))) return "";
  }
  return X(r = tt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function hn(e) {
  var t = gr(e);
  return function(r, n, o, i) {
    for (var s = "", u = 0; u < t; u++)
      s += e[u](r, n, o, i) || "";
    return s;
  };
}
function mn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function pn(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case _t:
        e.return = br(e.value, e.length, r);
        return;
      case hr:
        return tt([ie(e, { value: m(e.value, "@", "@" + x) })], n);
      case at:
        if (e.length)
          return en(r = e.props, function(o) {
            switch (te(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                ke(ie(e, { props: [m(o, /:(read-\w+)/, ":" + ze + "$1")] })), ke(ie(e, { props: [o] })), kt(e, { props: qt(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                ke(ie(e, { props: [m(o, /:(plac\w+)/, ":" + x + "input-$1")] })), ke(ie(e, { props: [m(o, /:(plac\w+)/, ":" + ze + "$1")] })), ke(ie(e, { props: [m(o, /:(plac\w+)/, N + "input-$1")] })), ke(ie(e, { props: [o] })), kt(e, { props: qt(r, n) });
                break;
            }
            return "";
          });
    }
}
var gn = {
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
}, ge = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", wr = "active", vr = "data-styled-version", ct = "6.1.14", Pt = `/*!sc*/
`, rt = typeof window < "u" && "HTMLElement" in window, yn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Kt = /invalid hook call/i, Ve = /* @__PURE__ */ new Set(), bn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var u = [], d = 1; d < arguments.length; d++) u[d - 1] = arguments[d];
        Kt.test(s) ? (i = !1, Ve.delete(n)) : o.apply(void 0, Se([s], u, !1));
      }, Lr(), i && !Ve.has(n) && (console.warn(n), Ve.add(n));
    } catch (s) {
      Kt.test(s.message) && Ve.delete(n);
    } finally {
      console.error = o;
    }
  }
}, lt = Object.freeze([]), Ae = Object.freeze({});
function wn(e, t, r) {
  return r === void 0 && (r = Ae), e.theme !== r.theme && e.theme || t || r.theme;
}
var Et = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), vn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, kn = /(^-|-$)/g;
function Zt(e) {
  return e.replace(vn, "-").replace(kn, "");
}
var xn = /(a)(d)/gi, He = 52, Qt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ct(e) {
  var t, r = "";
  for (t = Math.abs(e); t > He; t = t / He | 0) r = Qt(t % He) + r;
  return (Qt(t % He) + r).replace(xn, "$1-$2");
}
var mt, kr = 5381, fe = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, xr = function(e) {
  return fe(kr, e);
};
function Sn(e) {
  return Ct(xr(e) >>> 0);
}
function Sr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function pt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Er = typeof Symbol == "function" && Symbol.for, Cr = Er ? Symbol.for("react.memo") : 60115, En = Er ? Symbol.for("react.forward_ref") : 60112, Cn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, An = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Ar = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Nn = ((mt = {})[En] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, mt[Cr] = Ar, mt);
function er(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Cr ? Ar : "$$typeof" in e ? Nn[e.$$typeof] : Cn;
  var t;
}
var Rn = Object.defineProperty, _n = Object.getOwnPropertyNames, tr = Object.getOwnPropertySymbols, On = Object.getOwnPropertyDescriptor, Pn = Object.getPrototypeOf, rr = Object.prototype;
function Nr(e, t, r) {
  if (typeof t != "string") {
    if (rr) {
      var n = Pn(t);
      n && n !== rr && Nr(e, n, r);
    }
    var o = _n(t);
    tr && (o = o.concat(tr(t)));
    for (var i = er(e), s = er(t), u = 0; u < o.length; ++u) {
      var d = o[u];
      if (!(d in An || r && r[d] || s && d in s || i && d in i)) {
        var g = On(t, d);
        try {
          Rn(e, d, g);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ne(e) {
  return typeof e == "function";
}
function $t(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function he(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function nr(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function Re(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function At(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Re(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = At(e[n], t[n]);
  else if (Re(t)) for (var n in t) e[n] = At(e[n], t[n]);
  return e;
}
function jt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var $n = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function jn() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, i = e.length; o < i; o += 1) n.push(e[o]);
  return n.forEach(function(s) {
    r = r.replace(/%[a-z]/, s);
  }), r;
}
function Oe(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(jn.apply(void 0, Se([$n[e]], t, !1)).trim());
}
var In = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Oe(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), d = (s = 0, r.length); s < d; s++) this.tag.insertRule(u, r[s]) && (this.groupSizes[t]++, u++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var i = n; i < o; i++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n, s = o; s < i; s++) r += "".concat(this.tag.getRule(s)).concat(Pt);
    return r;
  }, e;
}(), Tn = 1 << 30, Ze = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), Qe = 1, Ge = function(e) {
  if (Ze.has(e)) return Ze.get(e);
  for (; nt.has(Qe); ) Qe++;
  var t = Qe++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Tn)) throw Oe(16, "".concat(t));
  return Ze.set(e, t), nt.set(t, e), t;
}, Mn = function(e, t) {
  Qe = t + 1, Ze.set(e, t), nt.set(t, e);
}, Fn = "style[".concat(ge, "][").concat(vr, '="').concat(ct, '"]'), Dn = new RegExp("^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), zn = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, s = o.length; i < s; i++) (n = o[i]) && e.registerName(t, n);
}, Bn = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Pt), o = [], i = 0, s = n.length; i < s; i++) {
    var u = n[i].trim();
    if (u) {
      var d = u.match(Dn);
      if (d) {
        var g = 0 | parseInt(d[1], 10), y = d[2];
        g !== 0 && (Mn(y, g), zn(e, y, d[3]), e.getTag().insertRules(g, o)), o.length = 0;
      } else o.push(u);
    }
  }
}, ar = function(e) {
  for (var t = document.querySelectorAll(Fn), r = 0, n = t.length; r < n; r++) {
    var o = t[r];
    o && o.getAttribute(ge) !== wr && (Bn(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Ln() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Rr = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(u) {
    var d = Array.from(u.querySelectorAll("style[".concat(ge, "]")));
    return d[d.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(ge, wr), n.setAttribute(vr, ct);
  var s = Ln();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, i), n;
}, Wn = function() {
  function e(t) {
    this.element = Rr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var s = n[o];
        if (s.ownerNode === r) return s;
      }
      throw Oe(17);
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
}(), Yn = function() {
  function e(t) {
    this.element = Rr(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Un = function() {
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
}(), or = rt, Vn = { isServer: !rt, useCSSOMInjection: !yn }, _r = function() {
  function e(t, r, n) {
    t === void 0 && (t = Ae), r === void 0 && (r = {});
    var o = this;
    this.options = W(W({}, Vn), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && rt && or && (or = !1, ar(this)), jt(this, function() {
      return function(i) {
        for (var s = i.getTag(), u = s.length, d = "", g = function(b) {
          var v = function(P) {
            return nt.get(P);
          }(b);
          if (v === void 0) return "continue";
          var w = i.names.get(v), S = s.getGroup(b);
          if (w === void 0 || !w.size || S.length === 0) return "continue";
          var R = "".concat(ge, ".g").concat(b, '[id="').concat(v, '"]'), T = "";
          w !== void 0 && w.forEach(function(P) {
            P.length > 0 && (T += "".concat(P, ","));
          }), d += "".concat(S).concat(R, '{content:"').concat(T, '"}').concat(Pt);
        }, y = 0; y < u; y++) g(y);
        return d;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Ge(t);
  }, e.prototype.rehydrate = function() {
    !this.server && rt && ar(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(W(W({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new Un(o) : n ? new Wn(o) : new Yn(o);
    }(this.options), new In(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ge(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(Ge(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ge(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Hn = /&/g, Gn = /^\s*\/\/.*$/gm;
function Or(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Or(r.children, t)), r;
  });
}
function qn(e) {
  var t, r, n, o = Ae, i = o.options, s = i === void 0 ? Ae : i, u = o.plugins, d = u === void 0 ? lt : u, g = function(v, w, S) {
    return S.startsWith(r) && S.endsWith(r) && S.replaceAll(r, "").length > 0 ? ".".concat(t) : v;
  }, y = d.slice();
  y.push(function(v) {
    v.type === at && v.value.includes("&") && (v.props[0] = v.props[0].replace(Hn, r).replace(n, g));
  }), s.prefix && y.push(pn), y.push(fn);
  var b = function(v, w, S, R) {
    w === void 0 && (w = ""), S === void 0 && (S = ""), R === void 0 && (R = "&"), t = R, r = w, n = new RegExp("\\".concat(r, "\\b"), "g");
    var T = v.replace(Gn, ""), P = un(S || w ? "".concat(S, " ").concat(w, " { ").concat(T, " }") : T);
    s.namespace && (P = Or(P, s.namespace));
    var _ = [];
    return tt(P, hn(y.concat(mn(function(A) {
      return _.push(A);
    })))), _;
  };
  return b.hash = d.length ? d.reduce(function(v, w) {
    return w.name || Oe(15), fe(v, w.name);
  }, kr).toString() : "", b;
}
var Xn = new _r(), Nt = qn(), Pr = re.createContext({ shouldForwardProp: void 0, styleSheet: Xn, stylis: Nt });
Pr.Consumer;
re.createContext(void 0);
function ir() {
  return Yr(Pr);
}
var sr = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Nt);
      var s = n.name + i.hash;
      o.hasNameForId(n.id, s) || o.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, jt(this, function() {
      throw Oe(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Nt), this.name + t.hash;
  }, e;
}(), Jn = function(e) {
  return e >= "A" && e <= "Z";
};
function cr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    Jn(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var $r = function(e) {
  return e == null || e === !1 || e === "";
}, jr = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !$r(i) && (Array.isArray(i) && i.isCss || Ne(i) ? n.push("".concat(cr(o), ":"), i, ";") : Re(i) ? n.push.apply(n, Se(Se(["".concat(o, " {")], jr(i), !1), ["}"], !1)) : n.push("".concat(cr(o), ": ").concat((t = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in gn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function pe(e, t, r, n) {
  if ($r(e)) return [];
  if ($t(e)) return [".".concat(e.styledComponentId)];
  if (Ne(e)) {
    if (!Ne(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof sr || Re(o) || o === null || console.error("".concat(Sr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(o, t, r, n);
  }
  var i;
  return e instanceof sr ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Re(e) ? jr(e) : Array.isArray(e) ? Array.prototype.concat.apply(lt, e.map(function(s) {
    return pe(s, t, r, n);
  })) : [e.toString()];
}
function Kn(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ne(r) && !$t(r)) return !1;
  }
  return !0;
}
var Zn = xr(ct), Qn = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Kn(t), this.componentId = r, this.baseHash = fe(Zn, r), this.baseStyle = n, _r.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = he(o, this.staticRulesId);
    else {
      var i = nr(pe(this.rules, t, r, n)), s = Ct(fe(this.baseHash, i) >>> 0);
      if (!r.hasNameForId(this.componentId, s)) {
        var u = n(i, ".".concat(s), void 0, this.componentId);
        r.insertRules(this.componentId, s, u);
      }
      o = he(o, s), this.staticRulesId = s;
    }
    else {
      for (var d = fe(this.baseHash, n.hash), g = "", y = 0; y < this.rules.length; y++) {
        var b = this.rules[y];
        if (typeof b == "string") g += b, process.env.NODE_ENV !== "production" && (d = fe(d, b));
        else if (b) {
          var v = nr(pe(b, t, r, n));
          d = fe(d, v + y), g += v;
        }
      }
      if (g) {
        var w = Ct(d >>> 0);
        r.hasNameForId(this.componentId, w) || r.insertRules(this.componentId, w, n(g, ".".concat(w), void 0, this.componentId)), o = he(o, w);
      }
    }
    return o;
  }, e;
}(), Ir = re.createContext(void 0);
Ir.Consumer;
var gt = {}, lr = /* @__PURE__ */ new Set();
function ea(e, t, r) {
  var n = $t(e), o = e, i = !pt(e), s = t.attrs, u = s === void 0 ? lt : s, d = t.componentId, g = d === void 0 ? function(E, O) {
    var p = typeof E != "string" ? "sc" : Zt(E);
    gt[p] = (gt[p] || 0) + 1;
    var f = "".concat(p, "-").concat(Sn(ct + p + gt[p]));
    return O ? "".concat(O, "-").concat(f) : f;
  }(t.displayName, t.parentComponentId) : d, y = t.displayName, b = y === void 0 ? function(E) {
    return pt(E) ? "styled.".concat(E) : "Styled(".concat(Sr(E), ")");
  }(e) : y, v = t.displayName && t.componentId ? "".concat(Zt(t.displayName), "-").concat(t.componentId) : t.componentId || g, w = n && o.attrs ? o.attrs.concat(u).filter(Boolean) : u, S = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var R = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var T = t.shouldForwardProp;
      S = function(E, O) {
        return R(E, O) && T(E, O);
      };
    } else S = R;
  }
  var P = new Qn(r, v, n ? o.componentStyle : void 0);
  function _(E, O) {
    return function(p, f, H) {
      var J = p.attrs, Le = p.componentStyle, Pe = p.defaultProps, $e = p.foldedComponentIds, ye = p.styledComponentId, je = p.target, Ie = re.useContext(Ir), ut = ir(), be = p.shouldForwardProp || ut.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Ut(ye);
      var We = wn(f, Ie, Pe) || Ae, M = function(ce, ae, le) {
        for (var Z, q = W(W({}, ae), { className: void 0, theme: le }), we = 0; we < ce.length; we += 1) {
          var ue = Ne(Z = ce[we]) ? Z(q) : Z;
          for (var U in ue) q[U] = U === "className" ? he(q[U], ue[U]) : U === "style" ? W(W({}, q[U]), ue[U]) : ue[U];
        }
        return ae.className && (q.className = he(q.className, ae.className)), q;
      }(J, f, We), ne = M.as || je, Y = {};
      for (var z in M) M[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && M.theme === We || (z === "forwardedAs" ? Y.as = M.forwardedAs : be && !be(z, ne) || (Y[z] = M[z], be || process.env.NODE_ENV !== "development" || Jr(z) || lr.has(z) || !Et.has(ne) || (lr.add(z), console.warn('styled-components: it looks like an unknown prop "'.concat(z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var se = function(ce, ae) {
        var le = ir(), Z = ce.generateAndInjectStyles(ae, le.styleSheet, le.stylis);
        return process.env.NODE_ENV !== "production" && Ut(Z), Z;
      }(Le, M);
      process.env.NODE_ENV !== "production" && p.warnTooManyClasses && p.warnTooManyClasses(se);
      var K = he($e, ye);
      return se && (K += " " + se), M.className && (K += " " + M.className), Y[pt(ne) && !Et.has(ne) ? "class" : "className"] = K, H && (Y.ref = H), Wr(ne, Y);
    }(A, E, O);
  }
  _.displayName = b;
  var A = re.forwardRef(_);
  return A.attrs = w, A.componentStyle = P, A.displayName = b, A.shouldForwardProp = S, A.foldedComponentIds = n ? he(o.foldedComponentIds, o.styledComponentId) : "", A.styledComponentId = v, A.target = n ? o.target : e, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? function(O) {
      for (var p = [], f = 1; f < arguments.length; f++) p[f - 1] = arguments[f];
      for (var H = 0, J = p; H < J.length; H++) At(O, J[H], !0);
      return O;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (bn(b, v), A.warnTooManyClasses = /* @__PURE__ */ function(E, O) {
    var p = {}, f = !1;
    return function(H) {
      if (!f && (p[H] = !0, Object.keys(p).length >= 200)) {
        var J = O ? ' with the id of "'.concat(O, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(J, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, p = {};
      }
    };
  }(b, v)), jt(A, function() {
    return ".".concat(A.styledComponentId);
  }), i && Nr(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), A;
}
function ur(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var dr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ta(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (Ne(e) || Re(e)) return dr(pe(ur(lt, Se([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? pe(n) : dr(pe(ur(n, t)));
}
function Rt(e, t, r) {
  if (r === void 0 && (r = Ae), !t) throw Oe(1, t);
  var n = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, r, ta.apply(void 0, Se([o], i, !1)));
  };
  return n.attrs = function(o) {
    return Rt(e, t, W(W({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return Rt(e, t, W(W({}, r), o));
  }, n;
}
var Tr = function(e) {
  return Rt(ea, e);
}, Be = Tr;
Et.forEach(function(e) {
  Be[e] = Tr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var qe = "__sc-".concat(ge, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[qe] || (window[qe] = 0), window[qe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[qe] += 1);
const L = {
  xs: "320px",
  sm: "425px",
  md: "768px",
  lg: "1024px",
  xl: "2560px"
}, yt = ["xs", "sm", "md", "lg", "xl"];
function ra(e) {
  const t = yt.indexOf(e);
  if (t === -1)
    throw new Error(`breakpoint "${e}" not found`);
  return t < yt.length - 1 ? yt[t + 1] : null;
}
function It(e) {
  return L[e] || null;
}
function Tt(e) {
  const t = L[e];
  if (!t) return null;
  const r = parseFloat(t);
  return r > 0 ? `${(r - 0.02).toFixed(2)}px` : null;
}
function Mt(e) {
  const t = It(e);
  return t ? `@media (min-width: ${t})` : "";
}
function Ft(e) {
  const t = Tt(e);
  return t ? `@media (max-width: ${t})` : "";
}
function na(e, t) {
  const r = It(e), n = Tt(t);
  if (r && n)
    return `@media (min-width: ${r}) and (max-width: ${n})`;
  if (n) {
    if (!r)
      return Ft(t);
  } else return Mt(e);
  return "";
}
function aa(e) {
  const t = It(e), r = ra(e), n = r ? Tt(r) : null;
  if (t && n)
    return `@media (min-width: ${t}) and (max-width: ${n})`;
  if (n) {
    if (!t)
      return Ft(r);
  } else return Mt(e);
  return "";
}
const et = {
  mobile: `(min-width: ${L.xs})`,
  mobileLandscape: `(min-width: ${L.sm})`,
  tablet: `(min-width: ${L.md})`,
  tabletLandscape: `(min-width: ${L.lg})`,
  laptop: `(min-width: ${L.lg})`,
  desktop: `(min-width: ${L.xl})`,
  up: Mt,
  down: Ft,
  between: na,
  only: aa
}, C = {
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
}, bt = {
  light: "#9d9d9d",
  main: "#777777",
  dark: "#515151"
}, wt = {
  light: "#0085b8",
  // azul, tonalidades
  main: "#0057b8",
  dark: "#003f85"
}, vt = {
  light: "#d0b991",
  // cafe dorado, tonalidades
  main: "#b9975b",
  dark: "#8c6f3c"
}, Mr = {
  // tema claro
  name: "DesertTheme",
  // nombre tema claro
  breakpoints: L,
  devices: et,
  mins: {
    toolbar: {
      minHeight: "64px"
    }
  },
  palette: {
    white: C.white,
    black: C.black,
    gray: {
      light: C.grayLight,
      main: C.gray,
      dark: C.grayDark
    },
    dark: {
      light: C.darkLight,
      main: C.dark,
      dark: C.darkDark
    },
    basic: {
      light: bt.light,
      main: bt.main,
      dark: bt.dark
    },
    primary: {
      light: wt.light,
      // azul, tonalidades
      main: wt.main,
      dark: wt.dark
    },
    secondary: {
      light: vt.light,
      // cafe dorado, tonalidades
      main: vt.main,
      dark: vt.dark
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
    basic: C.grayLight,
    // uso de los tonos base
    primary: C.dark,
    // uso de los tonos base
    secondary: C.grayDark,
    // uso de los tonos base
    disabled: C.gray,
    // uso de los tonos base
    exalt: "#",
    //
    hint: "#",
    //
    icon: "#"
    //
  },
  background: {
    paper: C.white,
    // uso de los tonos base
    paper2: C.grayLight,
    // uso de los tonos base
    forms: C.grayLight,
    // fondo secundario
    forms2: C.grayLight,
    // lo ocuparé?
    default: C.gray,
    // lo ocuparé?
    transparent: "transparent"
    // transparente
  },
  action: {
    // ocuparlos
    active: C.white,
    hover: C.gray,
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
L.xs, L.sm, L.md, L.lg, L.xl;
var Fr = /* @__PURE__ */ ((e) => (e[e.basic = 0] = "basic", e[e.primary = 1] = "primary", e[e.secondary = 2] = "secondary", e[e.outlineBasic = 3] = "outlineBasic", e[e.outlinePrimary = 4] = "outlinePrimary", e[e.outlineSecondary = 5] = "outlineSecondary", e))(Fr || {});
const oa = re.forwardRef(
  function(t, r) {
    const { className: n, disabled: o, transparent: i, typeButton: s, ...u } = t;
    return /* @__PURE__ */ B.jsx(
      "button",
      {
        className: xe(n),
        "aria-hidden": !0,
        ref: r,
        disabled: o === !0,
        ...u,
        children: t.children
      }
    );
  }
), ia = Be(oa)`
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
      return C.white;
    case 1:
      return C.white;
    case 2:
      return C.white;
    case 3:
      return e.theme.palette.basic.main;
    case 4:
      return e.theme.palette.primary.main;
    case 5:
      return e.theme.palette.secondary.main;
    default:
      return C.white;
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
  color: ${C.white};  
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
      return C.white;
    case 4:
      return C.white;
    case 5:
      return C.white;
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
`, Dr = re.forwardRef(
  function(t, r) {
    const { className: n, children: o, theme: i, onClose: s = () => {
    }, ...u } = t, d = (y) => {
      y.stopPropagation(), s();
    };
    return /* @__PURE__ */ B.jsx(
      "div",
      {
        className: xe(n),
        "aria-hidden": !0,
        ref: r,
        onClick: d,
        ...u,
        children: o && o
      }
    );
  }
);
Dr.propTypes = {};
const sa = Be(Dr).attrs((e) => ({
  theme: e.theme.name !== void 0 ? e.theme : Mr
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
var zr = /* @__PURE__ */ ((e) => (e[e.paragraph = 0] = "paragraph", e[e.label = 1] = "label", e[e.title = 2] = "title", e[e.subtitle = 3] = "subtitle", e[e.subtitle2 = 4] = "subtitle2", e[e.body = 5] = "body", e[e.body2 = 6] = "body2", e[e.foooter = 7] = "foooter", e[e.h1 = 8] = "h1", e[e.h2 = 9] = "h2", e[e.h3 = 10] = "h3", e[e.h4 = 11] = "h4", e[e.h5 = 12] = "h5", e[e.h6 = 13] = "h6", e))(zr || {});
const ca = re.forwardRef(function(t, r) {
  const {
    className: n,
    theme: o,
    typeText: i,
    labelFor: s,
    inline: u = !1,
    textAlign: d,
    bold: g = !1,
    italic: y,
    ...b
  } = t, w = ((S) => {
    switch (S) {
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
  return /* @__PURE__ */ B.jsx(
    w,
    {
      className: xe(n),
      htmlFor: s && s,
      ref: r,
      ...b
    }
  );
}), la = Be(ca).attrs((e) => ({
  theme: e.theme.name != null ? e.theme : Mr
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
    display: "initial";
  }
  text-align: ${(e) => e.textAlign};
  font-weight: ${(e) => e.bold == !0 ? "bold" : e.bold == !1 ? "initial" : "inherit"};
  text-decoration: ${(e) => e.underline ? "underline" : "initial"};
  font-style: ${(e) => e.italic ? "italic" : "normal"};
`, ua = ({
  head: e
}) => e ? /* @__PURE__ */ B.jsx("div", { className: "modal-head", children: typeof e == "string" ? /* @__PURE__ */ B.jsx(la, { typeText: zr.subtitle, className: "modal-title", children: e }) : e }) : null, da = ({ footer: e, onClose: t }) => /* @__PURE__ */ B.jsx("div", { className: "modal-footer", children: e || /* @__PURE__ */ B.jsx(ia, { typeButton: Fr.primary, onClick: t, children: "Cerrar" }) }), Dt = (e) => {
  const {
    className: t = "",
    head: r,
    footer: n,
    children: o,
    onClose: i,
    showModal: s,
    full: u = !1,
    modalFull: d = !1,
    style: g = {},
    styleBody: y = {},
    theme: b,
    ...v
  } = e;
  return Ur(() => {
    s ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
  }, [s]), s ? /* @__PURE__ */ B.jsx(
    sa,
    {
      className: xe(t),
      style: g,
      "aria-hidden": !0,
      onClose: i,
      ...v,
      children: /* @__PURE__ */ B.jsx("div", { className: "modal-dialog", children: /* @__PURE__ */ B.jsx(
        "div",
        {
          className: xe("modal", { "modal-full": d }),
          onClick: (w) => w.stopPropagation(),
          children: /* @__PURE__ */ B.jsxs("div", { className: xe("modal-wrapper", { "modal-wrapper-full": u }), children: [
            /* @__PURE__ */ B.jsx(ua, { head: r }),
            /* @__PURE__ */ B.jsx("div", { className: "modal-body", style: y, children: o }),
            /* @__PURE__ */ B.jsx(da, { footer: n, onClose: i })
          ] })
        }
      ) })
    }
  ) : null;
};
Dt.propTypes = {};
Dt.defaultProps = {};
Be(Dt)`
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
    @media ${et.mobile} {
      max-width: 98%;
    }
    @media ${et.tablet} {
      max-width: 90%;
    }
    @media ${et.laptop} {
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
    color: ${C.white};
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
  ia as Button,
  sa as LayerFront,
  la as Text,
  Fr as TypeButton,
  zr as TypeText
};
//# sourceMappingURL=index.es.js.map
