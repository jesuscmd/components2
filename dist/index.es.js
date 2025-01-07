import Ee from "react";
import he from "classnames";
var k = { exports: {} }, h = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function je() {
  if (ie) return h;
  ie = 1;
  var s = Symbol.for("react.transitional.element"), T = Symbol.for("react.fragment");
  function b(x, f, i) {
    var c = null;
    if (i !== void 0 && (c = "" + i), f.key !== void 0 && (c = "" + f.key), "key" in f) {
      i = {};
      for (var R in f)
        R !== "key" && (i[R] = f[R]);
    } else i = f;
    return f = i.ref, {
      $$typeof: s,
      type: x,
      key: c,
      ref: f !== void 0 ? f : null,
      props: i
    };
  }
  return h.Fragment = T, h.jsx = b, h.jsxs = b, h;
}
var j = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function Ce() {
  return ce || (ce = 1, process.env.NODE_ENV !== "production" && function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === we ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case xe:
          return "Portal";
        case F:
          return "Profiler";
        case X:
          return "StrictMode";
        case M:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case W:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case U:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    function T(e) {
      return "" + e;
    }
    function b(e) {
      try {
        T(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), T(e);
      }
    }
    function x() {
    }
    function f() {
      if (y === 0) {
        K = console.log, D = console.info, ee = console.warn, re = console.error, te = console.group, ne = console.groupCollapsed, oe = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: x,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      y++;
    }
    function i() {
      if (y--, y === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: g({}, e, { value: K }),
          info: g({}, e, { value: D }),
          warn: g({}, e, { value: ee }),
          error: g({}, e, { value: re }),
          group: g({}, e, { value: te }),
          groupCollapsed: g({}, e, { value: ne }),
          groupEnd: g({}, e, { value: oe })
        });
      }
      0 > y && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function c(e) {
      if (J === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          J = r && r[1] || "", ae = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + J + e + ae;
    }
    function R(e, r) {
      if (!e || z) return "";
      var t = V.get(e);
      if (t !== void 0) return t;
      z = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var o = null;
      o = m.H, m.H = null, f();
      try {
        var u = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var v = function() {
                  throw Error();
                };
                if (Object.defineProperty(v.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(v, []);
                  } catch (E) {
                    var C = E;
                  }
                  Reflect.construct(e, [], v);
                } else {
                  try {
                    v.call();
                  } catch (E) {
                    C = E;
                  }
                  e.call(v.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (E) {
                  C = E;
                }
                (v = e()) && typeof v.catch == "function" && v.catch(function() {
                });
              }
            } catch (E) {
              if (E && C && typeof E.stack == "string")
                return [E.stack, C.stack];
            }
            return [null, null];
          }
        };
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          u.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          u.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var n = u.DetermineComponentFrameRoot(), d = n[0], w = n[1];
        if (d && w) {
          var l = d.split(`
`), _ = w.split(`
`);
          for (n = a = 0; a < l.length && !l[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; n < _.length && !_[n].includes(
            "DetermineComponentFrameRoot"
          ); )
            n++;
          if (a === l.length || n === _.length)
            for (a = l.length - 1, n = _.length - 1; 1 <= a && 0 <= n && l[a] !== _[n]; )
              n--;
          for (; 1 <= a && 0 <= n; a--, n--)
            if (l[a] !== _[n]) {
              if (a !== 1 || n !== 1)
                do
                  if (a--, n--, 0 > n || l[a] !== _[n]) {
                    var p = `
` + l[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, p), p;
                  }
                while (1 <= a && 0 <= n);
              break;
            }
        }
      } finally {
        z = !1, m.H = o, i(), Error.prepareStackTrace = t;
      }
      return l = (l = e ? e.displayName || e.name : "") ? c(l) : "", typeof e == "function" && V.set(e, l), l;
    }
    function O(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return R(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return c(e);
      switch (e) {
        case M:
          return c("Suspense");
        case $:
          return c("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return e = R(e.render, !1), e;
          case W:
            return O(e.type);
          case U:
            r = e._payload, e = e._init;
            try {
              return O(e(r));
            } catch {
            }
        }
      return "";
    }
    function S() {
      var e = m.A;
      return e === null ? null : e.getOwner();
    }
    function ve(e) {
      if (Q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function be(e, r) {
      function t() {
        ue || (ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function me() {
      var e = s(this.type);
      return le[e] || (le[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function ge(e, r, t, o, u, a) {
      return t = a.ref, e = {
        $$typeof: N,
        type: e,
        key: r,
        props: a,
        _owner: u
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: me
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function B(e, r, t, o, u, a) {
      if (typeof e == "string" || typeof e == "function" || e === P || e === F || e === X || e === M || e === $ || e === Re || typeof e == "object" && e !== null && (e.$$typeof === U || e.$$typeof === W || e.$$typeof === Z || e.$$typeof === L || e.$$typeof === Y || e.$$typeof === ye || e.getModuleId !== void 0)) {
        var n = r.children;
        if (n !== void 0)
          if (o)
            if (q(n)) {
              for (o = 0; o < n.length; o++)
                G(n[o], e);
              Object.freeze && Object.freeze(n);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else G(n, e);
      } else
        n = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? o = "null" : q(e) ? o = "array" : e !== void 0 && e.$$typeof === N ? (o = "<" + (s(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : o = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          o,
          n
        );
      if (Q.call(r, "key")) {
        n = s(e);
        var d = Object.keys(r).filter(function(l) {
          return l !== "key";
        });
        o = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", fe[n + o] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          n,
          d,
          n
        ), fe[n + o] = !0);
      }
      if (n = null, t !== void 0 && (b(t), n = "" + t), ve(r) && (b(r.key), n = "" + r.key), "key" in r) {
        t = {};
        for (var w in r)
          w !== "key" && (t[w] = r[w]);
      } else t = r;
      return n && be(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), ge(e, n, a, u, S(), t);
    }
    function G(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== pe) {
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            A(o) && H(o, r);
          }
        else if (A(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = I && e[I] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            A(e.value) && H(e.value, r);
      }
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === N;
    }
    function H(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = _e(r), !se[r])) {
        se[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== S() && (t = null, typeof e._owner.tag == "number" ? t = s(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var o = m.getCurrentStack;
        m.getCurrentStack = function() {
          var u = O(e.type);
          return o && (u += o() || ""), u;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), m.getCurrentStack = o;
      }
    }
    function _e(e) {
      var r = "", t = S();
      return t && (t = s(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = s(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var Te = Ee, N = Symbol.for("react.transitional.element"), xe = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), Re = Symbol.for("react.offscreen"), I = Symbol.iterator, we = Symbol.for("react.client.reference"), m = Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, g = Object.assign, ye = Symbol.for("react.client.reference"), q = Array.isArray, y = 0, K, D, ee, re, te, ne, oe;
    x.__reactDisabledLog = !0;
    var J, ae, z = !1, V = new (typeof WeakMap == "function" ? WeakMap : Map)(), pe = Symbol.for("react.client.reference"), ue, le = {}, fe = {}, se = {};
    j.Fragment = P, j.jsx = function(e, r, t, o, u) {
      return B(e, r, t, !1, o, u);
    }, j.jsxs = function(e, r, t, o, u) {
      return B(e, r, t, !0, o, u);
    };
  }()), j;
}
var de;
function ke() {
  return de || (de = 1, process.env.NODE_ENV === "production" ? k.exports = je() : k.exports = Ce()), k.exports;
}
var Oe = ke();
const Ne = Ee.forwardRef(
  function(T, b) {
    const { className: x, disabled: f, transparent: i, ...c } = T;
    return /* @__PURE__ */ Oe.jsx(
      "button",
      {
        className: he(x),
        "aria-hidden": !0,
        ref: b,
        disabled: f === !0,
        ...c,
        children: "a"
      }
    );
  }
);
export {
  Ne as Button
};
//# sourceMappingURL=index.es.js.map
