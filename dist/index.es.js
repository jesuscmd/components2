import re, { useRef as Wr, useDebugValue as Ut, createElement as Yr, useContext as Br, useEffect as Ur } from "react";
import xe from "classnames";
var Be = { exports: {} }, Te = {};
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
  if (Vt) return Te;
  Vt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, a, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      i = {};
      for (var u in a)
        u !== "key" && (i[u] = a[u]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return Te.Fragment = t, Te.jsx = r, Te.jsxs = r, Te;
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
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === We ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case m:
          return "Fragment";
        case _:
          return "Portal";
        case H:
          return "Profiler";
        case f:
          return "StrictMode";
        case je:
          return "Suspense";
        case ye:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case Le:
            return (o.displayName || "Context") + ".Provider";
          case J:
            return (o._context.displayName || "Context") + ".Consumer";
          case Pe:
            var c = o.render;
            return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case $e:
            return c = o.displayName || null, c !== null ? c : e(o.type) || "Memo";
          case Ie:
            c = o._payload, o = o._init;
            try {
              return e(o(c));
            } catch {
            }
        }
      return null;
    }
    function t(o) {
      return "" + o;
    }
    function r(o) {
      try {
        t(o);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var l = c.error, k = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return l.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), t(o);
      }
    }
    function n() {
    }
    function a() {
      if (K === 0) {
        ce = console.log, oe = console.info, le = console.warn, Z = console.error, q = console.group, ve = console.groupCollapsed, ue = console.groupEnd;
        var o = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: o,
          log: o,
          warn: o,
          error: o,
          group: o,
          groupCollapsed: o,
          groupEnd: o
        });
      }
      K++;
    }
    function i() {
      if (K--, K === 0) {
        var o = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: B({}, o, { value: ce }),
          info: B({}, o, { value: oe }),
          warn: B({}, o, { value: le }),
          error: B({}, o, { value: Z }),
          group: B({}, o, { value: q }),
          groupCollapsed: B({}, o, { value: ve }),
          groupEnd: B({}, o, { value: ue })
        });
      }
      0 > K && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(o) {
      if (U === void 0)
        try {
          throw Error();
        } catch (l) {
          var c = l.stack.trim().match(/\n( *(at )?)/);
          U = c && c[1] || "", zt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + U + o + zt;
    }
    function u(o, c) {
      if (!o || dt) return "";
      var l = ft.get(o);
      if (l !== void 0) return l;
      dt = !0, l = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var k = null;
      k = T.H, T.H = null, a();
      try {
        var F = {
          DetermineComponentFrameRoot: function() {
            try {
              if (c) {
                var ae = function() {
                  throw Error();
                };
                if (Object.defineProperty(ae.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(ae, []);
                  } catch (ee) {
                    var Ye = ee;
                  }
                  Reflect.construct(o, [], ae);
                } else {
                  try {
                    ae.call();
                  } catch (ee) {
                    Ye = ee;
                  }
                  o.call(ae.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ee) {
                  Ye = ee;
                }
                (ae = o()) && typeof ae.catch == "function" && ae.catch(function() {
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
        var P = Object.getOwnPropertyDescriptor(
          F.DetermineComponentFrameRoot,
          "name"
        );
        P && P.configurable && Object.defineProperty(
          F.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var p = F.DetermineComponentFrameRoot(), Q = p[0], we = p[1];
        if (Q && we) {
          var D = Q.split(`
`), de = we.split(`
`);
          for (p = P = 0; P < D.length && !D[P].includes(
            "DetermineComponentFrameRoot"
          ); )
            P++;
          for (; p < de.length && !de[p].includes(
            "DetermineComponentFrameRoot"
          ); )
            p++;
          if (P === D.length || p === de.length)
            for (P = D.length - 1, p = de.length - 1; 1 <= P && 0 <= p && D[P] !== de[p]; )
              p--;
          for (; 1 <= P && 0 <= p; P--, p--)
            if (D[P] !== de[p]) {
              if (P !== 1 || p !== 1)
                do
                  if (P--, p--, 0 > p || D[P] !== de[p]) {
                    var Me = `
` + D[P].replace(
                      " at new ",
                      " at "
                    );
                    return o.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", o.displayName)), typeof o == "function" && ft.set(o, Me), Me;
                  }
                while (1 <= P && 0 <= p);
              break;
            }
        }
      } finally {
        dt = !1, T.H = k, i(), Error.prepareStackTrace = l;
      }
      return D = (D = o ? o.displayName || o.name : "") ? s(D) : "", typeof o == "function" && ft.set(o, D), D;
    }
    function d(o) {
      if (o == null) return "";
      if (typeof o == "function") {
        var c = o.prototype;
        return u(
          o,
          !(!c || !c.isReactComponent)
        );
      }
      if (typeof o == "string") return s(o);
      switch (o) {
        case je:
          return s("Suspense");
        case ye:
          return s("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case Pe:
            return o = u(o.render, !1), o;
          case $e:
            return d(o.type);
          case Ie:
            c = o._payload, o = o._init;
            try {
              return d(o(c));
            } catch {
            }
        }
      return "";
    }
    function g() {
      var o = T.A;
      return o === null ? null : o.getOwner();
    }
    function y(o) {
      if (ne.call(o, "key")) {
        var c = Object.getOwnPropertyDescriptor(o, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function b(o, c) {
      function l() {
        Lt || (Lt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: l,
        configurable: !0
      });
    }
    function w() {
      var o = e(this.type);
      return Wt[o] || (Wt[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function v(o, c, l, k, F, P) {
      return l = P.ref, o = {
        $$typeof: E,
        type: o,
        key: c,
        props: P,
        _owner: F
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function S(o, c, l, k, F, P) {
      if (typeof o == "string" || typeof o == "function" || o === m || o === H || o === f || o === je || o === ye || o === ut || typeof o == "object" && o !== null && (o.$$typeof === Ie || o.$$typeof === $e || o.$$typeof === Le || o.$$typeof === J || o.$$typeof === Pe || o.$$typeof === L || o.getModuleId !== void 0)) {
        var p = c.children;
        if (p !== void 0)
          if (k)
            if (se(p)) {
              for (k = 0; k < p.length; k++)
                N(p[k], o);
              Object.freeze && Object.freeze(p);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else N(p, o);
      } else
        p = "", (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), o === null ? k = "null" : se(o) ? k = "array" : o !== void 0 && o.$$typeof === E ? (k = "<" + (e(o.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : k = typeof o, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          k,
          p
        );
      if (ne.call(c, "key")) {
        p = e(o);
        var Q = Object.keys(c).filter(function(D) {
          return D !== "key";
        });
        k = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", Yt[p + k] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          p,
          Q,
          p
        ), Yt[p + k] = !0);
      }
      if (p = null, l !== void 0 && (r(l), p = "" + l), y(c) && (r(c.key), p = "" + c.key), "key" in c) {
        l = {};
        for (var we in c)
          we !== "key" && (l[we] = c[we]);
      } else l = c;
      return p && b(
        l,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), v(o, p, P, F, g(), l);
    }
    function N(o, c) {
      if (typeof o == "object" && o && o.$$typeof !== Lr) {
        if (se(o))
          for (var l = 0; l < o.length; l++) {
            var k = o[l];
            M(k) && O(k, c);
          }
        else if (M(o))
          o._store && (o._store.validated = 1);
        else if (o === null || typeof o != "object" ? l = null : (l = be && o[be] || o["@@iterator"], l = typeof l == "function" ? l : null), typeof l == "function" && l !== o.entries && (l = l.call(o), l !== o))
          for (; !(o = l.next()).done; )
            M(o.value) && O(o.value, c);
      }
    }
    function M(o) {
      return typeof o == "object" && o !== null && o.$$typeof === E;
    }
    function O(o, c) {
      if (o._store && !o._store.validated && o.key == null && (o._store.validated = 1, c = R(c), !Bt[c])) {
        Bt[c] = !0;
        var l = "";
        o && o._owner != null && o._owner !== g() && (l = null, typeof o._owner.tag == "number" ? l = e(o._owner.type) : typeof o._owner.name == "string" && (l = o._owner.name), l = " It was passed a child from " + l + ".");
        var k = T.getCurrentStack;
        T.getCurrentStack = function() {
          var F = d(o.type);
          return k && (F += k() || ""), F;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          c,
          l
        ), T.getCurrentStack = k;
      }
    }
    function R(o) {
      var c = "", l = g();
      return l && (l = e(l.type)) && (c = `

Check the render method of \`` + l + "`."), c || (o = e(o)) && (c = `

Check the top-level render call using <` + o + ">."), c;
    }
    var C = re, E = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), Le = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), je = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), $e = Symbol.for("react.memo"), Ie = Symbol.for("react.lazy"), ut = Symbol.for("react.offscreen"), be = Symbol.iterator, We = Symbol.for("react.client.reference"), T = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = Object.prototype.hasOwnProperty, B = Object.assign, L = Symbol.for("react.client.reference"), se = Array.isArray, K = 0, ce, oe, le, Z, q, ve, ue;
    n.__reactDisabledLog = !0;
    var U, zt, dt = !1, ft = new (typeof WeakMap == "function" ? WeakMap : Map)(), Lr = Symbol.for("react.client.reference"), Lt, Wt = {}, Yt = {}, Bt = {};
    Fe.Fragment = m, Fe.jsx = function(o, c, l, k, F) {
      return S(o, c, l, !1, k, F);
    }, Fe.jsxs = function(o, c, l, k, F) {
      return S(o, c, l, !0, k, F);
    };
  }()), Fe;
}
var Gt;
function Gr() {
  return Gt || (Gt = 1, process.env.NODE_ENV === "production" ? Be.exports = Vr() : Be.exports = Hr()), Be.exports;
}
var z = Gr(), fr = /* @__PURE__ */ ((e) => (e[e.basic = 0] = "basic", e[e.primary = 1] = "primary", e[e.secondary = 2] = "secondary", e[e.outlineBasic = 3] = "outlineBasic", e[e.outlinePrimary = 4] = "outlinePrimary", e[e.outlineSecondary = 5] = "outlineSecondary", e))(fr || {});
const qr = re.forwardRef(
  function(t, r) {
    const { className: n, disabled: a, transparent: i, typeButton: s, ...u } = t;
    return /* @__PURE__ */ z.jsxs(
      "button",
      {
        className: xe(n),
        "aria-hidden": !0,
        ref: r,
        disabled: a === !0,
        ...u,
        children: [
          /* @__PURE__ */ z.jsx("p", { children: "s" }),
          t.children
        ]
      }
    );
  }
);
var Y = function() {
  return Y = Object.assign || function(t) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Y.apply(this, arguments);
};
function Se(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, i; n < a; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Xr(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Jr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Kr = /* @__PURE__ */ Xr(
  function(e) {
    return Jr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), A = "-ms-", ze = "-moz-", x = "-webkit-", pr = "comm", nt = "rule", _t = "decl", Zr = "@import", hr = "@keyframes", Qr = "@layer", mr = Math.abs, Ot = String.fromCharCode, kt = Object.assign;
function en(e, t) {
  return I(e, 0) ^ 45 ? (((t << 2 ^ I(e, 0)) << 2 ^ I(e, 1)) << 2 ^ I(e, 2)) << 2 ^ I(e, 3) : 0;
}
function gr(e) {
  return e.trim();
}
function te(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function h(e, t, r) {
  return e.replace(t, r);
}
function qe(e, t, r) {
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
function yr(e) {
  return e.length;
}
function De(e, t) {
  return t.push(e), e;
}
function tn(e, t) {
  return e.map(t).join("");
}
function qt(e, t) {
  return e.filter(function(r) {
    return !te(r, t);
  });
}
var ot = 1, Ce = 1, br = 0, V = 0, $ = 0, _e = "";
function at(e, t, r, n, a, i, s, u) {
  return { value: e, root: t, parent: r, type: n, props: a, children: i, line: ot, column: Ce, length: s, return: "", siblings: u };
}
function ie(e, t) {
  return kt(at("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ke(e) {
  for (; e.root; )
    e = ie(e.root, { children: [e] });
  De(e, e.siblings);
}
function rn() {
  return $;
}
function nn() {
  return $ = V > 0 ? I(_e, --V) : 0, Ce--, $ === 10 && (Ce = 1, ot--), $;
}
function G() {
  return $ = V < br ? I(_e, V++) : 0, Ce++, $ === 10 && (Ce = 1, ot++), $;
}
function he() {
  return I(_e, V);
}
function Xe() {
  return V;
}
function it(e, t) {
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
function on(e) {
  return ot = Ce = 1, br = X(_e = e), V = 0, [];
}
function an(e) {
  return _e = "", e;
}
function pt(e) {
  return gr(it(V - 1, St(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sn(e) {
  for (; ($ = he()) && $ < 33; )
    G();
  return xt(e) > 2 || xt($) > 3 ? "" : " ";
}
function cn(e, t) {
  for (; --t && G() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return it(e, Xe() + (t < 6 && he() == 32 && G() == 32));
}
function St(e) {
  for (; G(); )
    switch ($) {
      // ] ) " '
      case e:
        return V;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && St($);
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
function ln(e, t) {
  for (; G() && e + $ !== 57; )
    if (e + $ === 84 && he() === 47)
      break;
  return "/*" + it(t, V - 1) + "*" + Ot(e === 47 ? e : G());
}
function un(e) {
  for (; !xt(he()); )
    G();
  return it(e, V);
}
function dn(e) {
  return an(Je("", null, null, null, [""], e = on(e), 0, [0], e));
}
function Je(e, t, r, n, a, i, s, u, d) {
  for (var g = 0, y = 0, b = s, w = 0, v = 0, S = 0, N = 1, M = 1, O = 1, R = 0, C = "", E = a, _ = i, m = n, f = C; M; )
    switch (S = R, R = G()) {
      // (
      case 40:
        if (S != 108 && I(f, b - 1) == 58) {
          qe(f += h(pt(R), "&", "&\f"), "&\f", mr(g ? u[g - 1] : 0)) != -1 && (O = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        f += pt(R);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        f += sn(S);
        break;
      // \
      case 92:
        f += cn(Xe() - 1, 7);
        continue;
      // /
      case 47:
        switch (he()) {
          case 42:
          case 47:
            De(fn(ln(G(), Xe()), t, r, d), d);
            break;
          default:
            f += "/";
        }
        break;
      // {
      case 123 * N:
        u[g++] = X(f) * O;
      // } ; \0
      case 125 * N:
      case 59:
      case 0:
        switch (R) {
          // \0 }
          case 0:
          case 125:
            M = 0;
          // ;
          case 59 + y:
            O == -1 && (f = h(f, /\f/g, "")), v > 0 && X(f) - b && De(v > 32 ? Jt(f + ";", n, r, b - 1, d) : Jt(h(f, " ", "") + ";", n, r, b - 2, d), d);
            break;
          // @ ;
          case 59:
            f += ";";
          // { rule/at-rule
          default:
            if (De(m = Xt(f, t, r, g, y, a, u, C, E = [], _ = [], b, i), i), R === 123)
              if (y === 0)
                Je(f, t, m, m, E, i, b, u, _);
              else
                switch (w === 99 && I(f, 3) === 110 ? 100 : w) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Je(e, m, m, n && De(Xt(e, m, m, 0, 0, a, u, C, a, E = [], b, _), _), a, _, b, u, n ? E : _);
                    break;
                  default:
                    Je(f, m, m, m, [""], _, 0, u, _);
                }
        }
        g = y = v = 0, N = O = 1, C = f = "", b = s;
        break;
      // :
      case 58:
        b = 1 + X(f), v = S;
      default:
        if (N < 1) {
          if (R == 123)
            --N;
          else if (R == 125 && N++ == 0 && nn() == 125)
            continue;
        }
        switch (f += Ot(R), R * N) {
          // &
          case 38:
            O = y > 0 ? 1 : (f += "\f", -1);
            break;
          // ,
          case 44:
            u[g++] = (X(f) - 1) * O, O = 1;
            break;
          // @
          case 64:
            he() === 45 && (f += pt(G())), w = he(), y = b = X(C = f += un(Xe())), R++;
            break;
          // -
          case 45:
            S === 45 && X(f) == 2 && (N = 0);
        }
    }
  return i;
}
function Xt(e, t, r, n, a, i, s, u, d, g, y, b) {
  for (var w = a - 1, v = a === 0 ? i : [""], S = yr(v), N = 0, M = 0, O = 0; N < n; ++N)
    for (var R = 0, C = Ee(e, w + 1, w = mr(M = s[N])), E = e; R < S; ++R)
      (E = gr(M > 0 ? v[R] + " " + C : h(C, /&\f/g, v[R]))) && (d[O++] = E);
  return at(e, t, r, a === 0 ? nt : u, d, g, y, b);
}
function fn(e, t, r, n) {
  return at(e, t, r, pr, Ot(rn()), Ee(e, 2, -2), 0, n);
}
function Jt(e, t, r, n, a) {
  return at(e, t, r, _t, Ee(e, 0, n), Ee(e, n + 1, -1), n, a);
}
function vr(e, t, r) {
  switch (en(e, t)) {
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
      return x + e + ze + e + A + e + e;
    // writing-mode
    case 5936:
      switch (I(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return x + e + A + h(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return x + e + A + h(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return x + e + A + h(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return x + e + A + e + e;
    // order
    case 6165:
      return x + e + A + "flex-" + e + e;
    // align-items
    case 5187:
      return x + e + h(e, /(\w+).+(:[^]+)/, x + "box-$1$2" + A + "flex-$1$2") + e;
    // align-self
    case 5443:
      return x + e + A + "flex-item-" + h(e, /flex-|-self/g, "") + (te(e, /flex-|baseline/) ? "" : A + "grid-row-" + h(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return x + e + A + "flex-line-pack" + h(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return x + e + A + h(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return x + e + A + h(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return x + "box-" + h(e, "-grow", "") + x + e + A + h(e, "grow", "positive") + e;
    // transition
    case 4554:
      return x + h(e, /([^-])(transform)/g, "$1" + x + "$2") + e;
    // cursor
    case 6187:
      return h(h(h(e, /(zoom-|grab)/, x + "$1"), /(image-set)/, x + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return h(e, /(image-set\([^]*)/, x + "$1$`$1");
    // justify-content
    case 4968:
      return h(h(e, /(.+:)(flex-)?(.*)/, x + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + x + e + e;
    // justify-self
    case 4200:
      if (!te(e, /flex-|baseline/)) return A + "grid-column-align" + Ee(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return A + h(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, a) {
        return t = a, te(n.props, /grid-\w+-end/);
      }) ? ~qe(e + (r = r[t].value), "span", 0) ? e : A + h(e, "-start", "") + e + A + "grid-row-span:" + (~qe(r, "span", 0) ? te(r, /\d+/) : +te(r, /\d+/) - +te(e, /\d+/)) + ";" : A + h(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return te(n.props, /grid-\w+-start/);
      }) ? e : A + h(h(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return h(e, /(.+)-inline(.+)/, x + "$1$2") + e;
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
            return h(e, /(.+:)(.+)-([^]+)/, "$1" + x + "$2-$3$1" + ze + (I(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~qe(e, "stretch", 0) ? vr(h(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return h(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, a, i, s, u, d, g) {
        return A + a + ":" + i + g + (s ? A + a + "-span:" + (u ? d : +d - +i) + g : "") + e;
      });
    // position: sticky
    case 4949:
      if (I(e, t + 6) === 121)
        return h(e, ":", ":" + x) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (I(e, I(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return h(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + x + (I(e, 14) === 45 ? "inline-" : "") + "box$3$1" + x + "$2$3$1" + A + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return h(e, ":", ":" + A) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return h(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function et(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function pn(e, t, r, n) {
  switch (e.type) {
    case Qr:
      if (e.children.length) break;
    case Zr:
    case _t:
      return e.return = e.return || e.value;
    case pr:
      return "";
    case hr:
      return e.return = e.value + "{" + et(e.children, n) + "}";
    case nt:
      if (!X(e.value = e.props.join(","))) return "";
  }
  return X(r = et(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function hn(e) {
  var t = yr(e);
  return function(r, n, a, i) {
    for (var s = "", u = 0; u < t; u++)
      s += e[u](r, n, a, i) || "";
    return s;
  };
}
function mn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function gn(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case _t:
        e.return = vr(e.value, e.length, r);
        return;
      case hr:
        return et([ie(e, { value: h(e.value, "@", "@" + x) })], n);
      case nt:
        if (e.length)
          return tn(r = e.props, function(a) {
            switch (te(a, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                ke(ie(e, { props: [h(a, /:(read-\w+)/, ":" + ze + "$1")] })), ke(ie(e, { props: [a] })), kt(e, { props: qt(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                ke(ie(e, { props: [h(a, /:(plac\w+)/, ":" + x + "input-$1")] })), ke(ie(e, { props: [h(a, /:(plac\w+)/, ":" + ze + "$1")] })), ke(ie(e, { props: [h(a, /:(plac\w+)/, A + "input-$1")] })), ke(ie(e, { props: [a] })), kt(e, { props: qt(r, n) });
                break;
            }
            return "";
          });
    }
}
var yn = {
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
}, ge = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", wr = "active", kr = "data-styled-version", st = "6.1.14", Pt = `/*!sc*/
`, tt = typeof window < "u" && "HTMLElement" in window, bn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Kt = /invalid hook call/i, Ue = /* @__PURE__ */ new Set(), vn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var u = [], d = 1; d < arguments.length; d++) u[d - 1] = arguments[d];
        Kt.test(s) ? (i = !1, Ue.delete(n)) : a.apply(void 0, Se([s], u, !1));
      }, Wr(), i && !Ue.has(n) && (console.warn(n), Ue.add(n));
    } catch (s) {
      Kt.test(s.message) && Ue.delete(n);
    } finally {
      console.error = a;
    }
  }
}, ct = Object.freeze([]), Ae = Object.freeze({});
function wn(e, t, r) {
  return r === void 0 && (r = Ae), e.theme !== r.theme && e.theme || t || r.theme;
}
var Et = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), kn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, xn = /(^-|-$)/g;
function Zt(e) {
  return e.replace(kn, "-").replace(xn, "");
}
var Sn = /(a)(d)/gi, Ve = 52, Qt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ct(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Ve; t = t / Ve | 0) r = Qt(t % Ve) + r;
  return (Qt(t % Ve) + r).replace(Sn, "$1-$2");
}
var ht, xr = 5381, fe = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Sr = function(e) {
  return fe(xr, e);
};
function En(e) {
  return Ct(Sr(e) >>> 0);
}
function Er(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function mt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Cr = typeof Symbol == "function" && Symbol.for, Ar = Cr ? Symbol.for("react.memo") : 60115, Cn = Cr ? Symbol.for("react.forward_ref") : 60112, An = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Nn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Nr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Rn = ((ht = {})[Cn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ht[Ar] = Nr, ht);
function er(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Ar ? Nr : "$$typeof" in e ? Rn[e.$$typeof] : An;
  var t;
}
var _n = Object.defineProperty, On = Object.getOwnPropertyNames, tr = Object.getOwnPropertySymbols, Pn = Object.getOwnPropertyDescriptor, jn = Object.getPrototypeOf, rr = Object.prototype;
function Rr(e, t, r) {
  if (typeof t != "string") {
    if (rr) {
      var n = jn(t);
      n && n !== rr && Rr(e, n, r);
    }
    var a = On(t);
    tr && (a = a.concat(tr(t)));
    for (var i = er(e), s = er(t), u = 0; u < a.length; ++u) {
      var d = a[u];
      if (!(d in Nn || r && r[d] || s && d in s || i && d in i)) {
        var g = Pn(t, d);
        try {
          _n(e, d, g);
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
function jt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function pe(e, t) {
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
function $t(e, t) {
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
function In() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], a = 1, i = e.length; a < i; a += 1) n.push(e[a]);
  return n.forEach(function(s) {
    r = r.replace(/%[a-z]/, s);
  }), r;
}
function Oe(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(In.apply(void 0, Se([$n[e]], t, !1)).trim());
}
var Mn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, a = n.length, i = a; t >= i; ) if ((i <<= 1) < 0) throw Oe(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var s = a; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), d = (s = 0, r.length); s < d; s++) this.tag.insertRule(u, r[s]) && (this.groupSizes[t]++, u++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), a = n + r;
      this.groupSizes[t] = 0;
      for (var i = n; i < a; i++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], a = this.indexOfGroup(t), i = a + n, s = a; s < i; s++) r += "".concat(this.tag.getRule(s)).concat(Pt);
    return r;
  }, e;
}(), Tn = 1 << 30, Ke = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), Ze = 1, He = function(e) {
  if (Ke.has(e)) return Ke.get(e);
  for (; rt.has(Ze); ) Ze++;
  var t = Ze++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Tn)) throw Oe(16, "".concat(t));
  return Ke.set(e, t), rt.set(t, e), t;
}, Fn = function(e, t) {
  Ze = t + 1, Ke.set(e, t), rt.set(t, e);
}, Dn = "style[".concat(ge, "][").concat(kr, '="').concat(st, '"]'), zn = new RegExp("^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ln = function(e, t, r) {
  for (var n, a = r.split(","), i = 0, s = a.length; i < s; i++) (n = a[i]) && e.registerName(t, n);
}, Wn = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Pt), a = [], i = 0, s = n.length; i < s; i++) {
    var u = n[i].trim();
    if (u) {
      var d = u.match(zn);
      if (d) {
        var g = 0 | parseInt(d[1], 10), y = d[2];
        g !== 0 && (Fn(y, g), Ln(e, y, d[3]), e.getTag().insertRules(g, a)), a.length = 0;
      } else a.push(u);
    }
  }
}, or = function(e) {
  for (var t = document.querySelectorAll(Dn), r = 0, n = t.length; r < n; r++) {
    var a = t[r];
    a && a.getAttribute(ge) !== wr && (Wn(e, a), a.parentNode && a.parentNode.removeChild(a));
  }
};
function Yn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var _r = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(u) {
    var d = Array.from(u.querySelectorAll("style[".concat(ge, "]")));
    return d[d.length - 1];
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(ge, wr), n.setAttribute(kr, st);
  var s = Yn();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, i), n;
}, Bn = function() {
  function e(t) {
    this.element = _r(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, a = 0, i = n.length; a < i; a++) {
        var s = n[a];
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
}(), Un = function() {
  function e(t) {
    this.element = _r(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Vn = function() {
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
}(), ar = tt, Hn = { isServer: !tt, useCSSOMInjection: !bn }, Or = function() {
  function e(t, r, n) {
    t === void 0 && (t = Ae), r === void 0 && (r = {});
    var a = this;
    this.options = Y(Y({}, Hn), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && tt && ar && (ar = !1, or(this)), $t(this, function() {
      return function(i) {
        for (var s = i.getTag(), u = s.length, d = "", g = function(b) {
          var w = function(O) {
            return rt.get(O);
          }(b);
          if (w === void 0) return "continue";
          var v = i.names.get(w), S = s.getGroup(b);
          if (v === void 0 || !v.size || S.length === 0) return "continue";
          var N = "".concat(ge, ".g").concat(b, '[id="').concat(w, '"]'), M = "";
          v !== void 0 && v.forEach(function(O) {
            O.length > 0 && (M += "".concat(O, ","));
          }), d += "".concat(S).concat(N, '{content:"').concat(M, '"}').concat(Pt);
        }, y = 0; y < u; y++) g(y);
        return d;
      }(a);
    });
  }
  return e.registerId = function(t) {
    return He(t);
  }, e.prototype.rehydrate = function() {
    !this.server && tt && or(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Y(Y({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, a = r.target;
      return r.isServer ? new Vn(a) : n ? new Bn(a) : new Un(a);
    }(this.options), new Mn(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (He(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(He(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(He(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Gn = /&/g, qn = /^\s*\/\/.*$/gm;
function Pr(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Pr(r.children, t)), r;
  });
}
function Xn(e) {
  var t, r, n, a = Ae, i = a.options, s = i === void 0 ? Ae : i, u = a.plugins, d = u === void 0 ? ct : u, g = function(w, v, S) {
    return S.startsWith(r) && S.endsWith(r) && S.replaceAll(r, "").length > 0 ? ".".concat(t) : w;
  }, y = d.slice();
  y.push(function(w) {
    w.type === nt && w.value.includes("&") && (w.props[0] = w.props[0].replace(Gn, r).replace(n, g));
  }), s.prefix && y.push(gn), y.push(pn);
  var b = function(w, v, S, N) {
    v === void 0 && (v = ""), S === void 0 && (S = ""), N === void 0 && (N = "&"), t = N, r = v, n = new RegExp("\\".concat(r, "\\b"), "g");
    var M = w.replace(qn, ""), O = dn(S || v ? "".concat(S, " ").concat(v, " { ").concat(M, " }") : M);
    s.namespace && (O = Pr(O, s.namespace));
    var R = [];
    return et(O, hn(y.concat(mn(function(C) {
      return R.push(C);
    })))), R;
  };
  return b.hash = d.length ? d.reduce(function(w, v) {
    return v.name || Oe(15), fe(w, v.name);
  }, xr).toString() : "", b;
}
var Jn = new Or(), Nt = Xn(), jr = re.createContext({ shouldForwardProp: void 0, styleSheet: Jn, stylis: Nt });
jr.Consumer;
re.createContext(void 0);
function ir() {
  return Br(jr);
}
var sr = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = Nt);
      var s = n.name + i.hash;
      a.hasNameForId(n.id, s) || a.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, $t(this, function() {
      throw Oe(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Nt), this.name + t.hash;
  }, e;
}(), Kn = function(e) {
  return e >= "A" && e <= "Z";
};
function cr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    Kn(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var $r = function(e) {
  return e == null || e === !1 || e === "";
}, Ir = function(e) {
  var t, r, n = [];
  for (var a in e) {
    var i = e[a];
    e.hasOwnProperty(a) && !$r(i) && (Array.isArray(i) && i.isCss || Ne(i) ? n.push("".concat(cr(a), ":"), i, ";") : Re(i) ? n.push.apply(n, Se(Se(["".concat(a, " {")], Ir(i), !1), ["}"], !1)) : n.push("".concat(cr(a), ": ").concat((t = a, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in yn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function me(e, t, r, n) {
  if ($r(e)) return [];
  if (jt(e)) return [".".concat(e.styledComponentId)];
  if (Ne(e)) {
    if (!Ne(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var a = e(t);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof sr || Re(a) || a === null || console.error("".concat(Er(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), me(a, t, r, n);
  }
  var i;
  return e instanceof sr ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Re(e) ? Ir(e) : Array.isArray(e) ? Array.prototype.concat.apply(ct, e.map(function(s) {
    return me(s, t, r, n);
  })) : [e.toString()];
}
function Zn(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ne(r) && !jt(r)) return !1;
  }
  return !0;
}
var Qn = Sr(st), eo = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Zn(t), this.componentId = r, this.baseHash = fe(Qn, r), this.baseStyle = n, Or.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) a = pe(a, this.staticRulesId);
    else {
      var i = nr(me(this.rules, t, r, n)), s = Ct(fe(this.baseHash, i) >>> 0);
      if (!r.hasNameForId(this.componentId, s)) {
        var u = n(i, ".".concat(s), void 0, this.componentId);
        r.insertRules(this.componentId, s, u);
      }
      a = pe(a, s), this.staticRulesId = s;
    }
    else {
      for (var d = fe(this.baseHash, n.hash), g = "", y = 0; y < this.rules.length; y++) {
        var b = this.rules[y];
        if (typeof b == "string") g += b, process.env.NODE_ENV !== "production" && (d = fe(d, b));
        else if (b) {
          var w = nr(me(b, t, r, n));
          d = fe(d, w + y), g += w;
        }
      }
      if (g) {
        var v = Ct(d >>> 0);
        r.hasNameForId(this.componentId, v) || r.insertRules(this.componentId, v, n(g, ".".concat(v), void 0, this.componentId)), a = pe(a, v);
      }
    }
    return a;
  }, e;
}(), Mr = re.createContext(void 0);
Mr.Consumer;
var gt = {}, lr = /* @__PURE__ */ new Set();
function to(e, t, r) {
  var n = jt(e), a = e, i = !mt(e), s = t.attrs, u = s === void 0 ? ct : s, d = t.componentId, g = d === void 0 ? function(E, _) {
    var m = typeof E != "string" ? "sc" : Zt(E);
    gt[m] = (gt[m] || 0) + 1;
    var f = "".concat(m, "-").concat(En(st + m + gt[m]));
    return _ ? "".concat(_, "-").concat(f) : f;
  }(t.displayName, t.parentComponentId) : d, y = t.displayName, b = y === void 0 ? function(E) {
    return mt(E) ? "styled.".concat(E) : "Styled(".concat(Er(E), ")");
  }(e) : y, w = t.displayName && t.componentId ? "".concat(Zt(t.displayName), "-").concat(t.componentId) : t.componentId || g, v = n && a.attrs ? a.attrs.concat(u).filter(Boolean) : u, S = t.shouldForwardProp;
  if (n && a.shouldForwardProp) {
    var N = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var M = t.shouldForwardProp;
      S = function(E, _) {
        return N(E, _) && M(E, _);
      };
    } else S = N;
  }
  var O = new eo(r, w, n ? a.componentStyle : void 0);
  function R(E, _) {
    return function(m, f, H) {
      var J = m.attrs, Le = m.componentStyle, Pe = m.defaultProps, je = m.foldedComponentIds, ye = m.styledComponentId, $e = m.target, Ie = re.useContext(Mr), ut = ir(), be = m.shouldForwardProp || ut.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Ut(ye);
      var We = wn(f, Ie, Pe) || Ae, T = function(ce, oe, le) {
        for (var Z, q = Y(Y({}, oe), { className: void 0, theme: le }), ve = 0; ve < ce.length; ve += 1) {
          var ue = Ne(Z = ce[ve]) ? Z(q) : Z;
          for (var U in ue) q[U] = U === "className" ? pe(q[U], ue[U]) : U === "style" ? Y(Y({}, q[U]), ue[U]) : ue[U];
        }
        return oe.className && (q.className = pe(q.className, oe.className)), q;
      }(J, f, We), ne = T.as || $e, B = {};
      for (var L in T) T[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" && T.theme === We || (L === "forwardedAs" ? B.as = T.forwardedAs : be && !be(L, ne) || (B[L] = T[L], be || process.env.NODE_ENV !== "development" || Kr(L) || lr.has(L) || !Et.has(ne) || (lr.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var se = function(ce, oe) {
        var le = ir(), Z = ce.generateAndInjectStyles(oe, le.styleSheet, le.stylis);
        return process.env.NODE_ENV !== "production" && Ut(Z), Z;
      }(Le, T);
      process.env.NODE_ENV !== "production" && m.warnTooManyClasses && m.warnTooManyClasses(se);
      var K = pe(je, ye);
      return se && (K += " " + se), T.className && (K += " " + T.className), B[mt(ne) && !Et.has(ne) ? "class" : "className"] = K, H && (B.ref = H), Yr(ne, B);
    }(C, E, _);
  }
  R.displayName = b;
  var C = re.forwardRef(R);
  return C.attrs = v, C.componentStyle = O, C.displayName = b, C.shouldForwardProp = S, C.foldedComponentIds = n ? pe(a.foldedComponentIds, a.styledComponentId) : "", C.styledComponentId = w, C.target = n ? a.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? function(_) {
      for (var m = [], f = 1; f < arguments.length; f++) m[f - 1] = arguments[f];
      for (var H = 0, J = m; H < J.length; H++) At(_, J[H], !0);
      return _;
    }({}, a.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (vn(b, w), C.warnTooManyClasses = /* @__PURE__ */ function(E, _) {
    var m = {}, f = !1;
    return function(H) {
      if (!f && (m[H] = !0, Object.keys(m).length >= 200)) {
        var J = _ ? ' with the id of "'.concat(_, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(J, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, m = {};
      }
    };
  }(b, w)), $t(C, function() {
    return ".".concat(C.styledComponentId);
  }), i && Rr(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function ur(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var dr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ro(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (Ne(e) || Re(e)) return dr(me(ur(ct, Se([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? me(n) : dr(me(ur(n, t)));
}
function Rt(e, t, r) {
  if (r === void 0 && (r = Ae), !t) throw Oe(1, t);
  var n = function(a) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, r, ro.apply(void 0, Se([a], i, !1)));
  };
  return n.attrs = function(a) {
    return Rt(e, t, Y(Y({}, r), { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }));
  }, n.withConfig = function(a) {
    return Rt(e, t, Y(Y({}, r), a));
  }, n;
}
var Tr = function(e) {
  return Rt(to, e);
}, lt = Tr;
Et.forEach(function(e) {
  lt[e] = Tr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ge = "__sc-".concat(ge, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ge] || (window[Ge] = 0), window[Ge] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ge] += 1);
const W = {
  xs: "320px",
  sm: "425px",
  md: "768px",
  lg: "1024px",
  xl: "2560px"
}, yt = ["xs", "sm", "md", "lg", "xl"];
function no(e) {
  const t = yt.indexOf(e);
  if (t === -1)
    throw new Error(`breakpoint "${e}" not found`);
  return t < yt.length - 1 ? yt[t + 1] : null;
}
function It(e) {
  return W[e] || null;
}
function Mt(e) {
  const t = W[e];
  if (!t) return null;
  const r = parseFloat(t);
  return r > 0 ? `${(r - 0.02).toFixed(2)}px` : null;
}
function Tt(e) {
  const t = It(e);
  return t ? `@media (min-width: ${t})` : "";
}
function Ft(e) {
  const t = Mt(e);
  return t ? `@media (max-width: ${t})` : "";
}
function oo(e, t) {
  const r = It(e), n = Mt(t);
  if (r && n)
    return `@media (min-width: ${r}) and (max-width: ${n})`;
  if (n) {
    if (!r)
      return Ft(t);
  } else return Tt(e);
  return "";
}
function ao(e) {
  const t = It(e), r = no(e), n = r ? Mt(r) : null;
  if (t && n)
    return `@media (min-width: ${t}) and (max-width: ${n})`;
  if (n) {
    if (!t)
      return Ft(r);
  } else return Tt(e);
  return "";
}
const Qe = {
  mobile: `(min-width: ${W.xs})`,
  mobileLandscape: `(min-width: ${W.sm})`,
  tablet: `(min-width: ${W.md})`,
  tabletLandscape: `(min-width: ${W.lg})`,
  laptop: `(min-width: ${W.lg})`,
  desktop: `(min-width: ${W.xl})`,
  up: Tt,
  down: Ft,
  between: oo,
  only: ao
}, j = {
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
}, vt = {
  light: "#0085b8",
  // azul, tonalidades
  main: "#0057b8",
  dark: "#003f85"
}, wt = {
  light: "#d0b991",
  // cafe dorado, tonalidades
  main: "#b9975b",
  dark: "#8c6f3c"
}, Fr = {
  // tema claro
  name: "DesertTheme",
  // nombre tema claro
  breakpoints: W,
  devices: Qe,
  mins: {
    toolbar: {
      minHeight: "64px"
    }
  },
  palette: {
    white: j.white,
    black: j.black,
    gray: {
      light: j.grayLight,
      main: j.gray,
      dark: j.grayDark
    },
    dark: {
      light: j.darkLight,
      main: j.dark,
      dark: j.darkDark
    },
    basic: {
      light: bt.light,
      main: bt.main,
      dark: bt.dark
    },
    primary: {
      light: vt.light,
      // azul, tonalidades
      main: vt.main,
      dark: vt.dark
    },
    secondary: {
      light: wt.light,
      // cafe dorado, tonalidades
      main: wt.main,
      dark: wt.dark
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
    basic: j.grayLight,
    // uso de los tonos base
    primary: j.dark,
    // uso de los tonos base
    secondary: j.grayDark,
    // uso de los tonos base
    disabled: j.gray,
    // uso de los tonos base
    exalt: "#",
    //
    hint: "#",
    //
    icon: "#"
    //
  },
  background: {
    paper: j.white,
    // uso de los tonos base
    paper2: j.grayLight,
    // uso de los tonos base
    forms: j.grayLight,
    // fondo secundario
    forms2: j.grayLight,
    // lo ocuparé?
    default: j.gray,
    // lo ocuparé?
    transparent: "transparent"
    // transparente
  },
  action: {
    // ocuparlos
    active: j.white,
    hover: j.gray,
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
W.xs, W.sm, W.md, W.lg, W.xl;
const Dr = re.forwardRef(
  function(t, r) {
    const { className: n, children: a, theme: i, onClose: s = () => {
    }, ...u } = t, d = (y) => {
      y.stopPropagation(), s();
    };
    return /* @__PURE__ */ z.jsx(
      "div",
      {
        className: xe(n),
        "aria-hidden": !0,
        ref: r,
        onClick: d,
        ...u,
        children: a && a
      }
    );
  }
);
Dr.propTypes = {};
const io = lt(Dr).attrs((e) => ({
  theme: e.theme.name !== void 0 ? e.theme : Fr
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
const so = re.forwardRef(function(t, r) {
  const {
    className: n,
    theme: a,
    typeText: i,
    labelFor: s,
    inline: u = !1,
    textAlign: d,
    bold: g = !1,
    italic: y,
    ...b
  } = t, v = ((S) => {
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
  return /* @__PURE__ */ z.jsx(
    v,
    {
      className: xe(n),
      htmlFor: s && s,
      ref: r,
      ...b
    }
  );
}), co = lt(so).attrs((e) => ({
  theme: e.theme.name != null ? e.theme : Fr
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
`, lo = ({
  head: e
}) => e ? /* @__PURE__ */ z.jsx("div", { className: "modal-head", children: typeof e == "string" ? /* @__PURE__ */ z.jsx(co, { typeText: zr.subtitle, className: "modal-title", children: e }) : e }) : null, uo = ({ footer: e, onClose: t }) => /* @__PURE__ */ z.jsx("div", { className: "modal-footer", children: e || /* @__PURE__ */ z.jsx(qr, { typeButton: fr.primary, onClick: t, children: "Cerrar" }) }), Dt = (e) => {
  const {
    className: t = "",
    head: r,
    footer: n,
    children: a,
    onClose: i,
    showModal: s,
    full: u = !1,
    modalFull: d = !1,
    style: g = {},
    styleBody: y = {},
    theme: b,
    ...w
  } = e;
  return Ur(() => {
    s ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
  }, [s]), s ? /* @__PURE__ */ z.jsx(
    io,
    {
      className: xe(t),
      style: g,
      "aria-hidden": !0,
      onClose: i,
      ...w,
      children: /* @__PURE__ */ z.jsx("div", { className: "modal-dialog", children: /* @__PURE__ */ z.jsx(
        "div",
        {
          className: xe("modal", { "modal-full": d }),
          onClick: (v) => v.stopPropagation(),
          children: /* @__PURE__ */ z.jsxs("div", { className: xe("modal-wrapper", { "modal-wrapper-full": u }), children: [
            /* @__PURE__ */ z.jsx(lo, { head: r }),
            /* @__PURE__ */ z.jsx("div", { className: "modal-body", style: y, children: a }),
            /* @__PURE__ */ z.jsx(uo, { footer: n, onClose: i })
          ] })
        }
      ) })
    }
  ) : null;
};
Dt.propTypes = {};
Dt.defaultProps = {};
lt(Dt)`
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
    color: ${j.white};
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
  qr as Button,
  io as LayerFront,
  co as Text,
  fr as TypeButton,
  zr as TypeText
};
//# sourceMappingURL=index.es.js.map
