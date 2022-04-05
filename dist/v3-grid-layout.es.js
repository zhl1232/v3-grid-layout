var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, inject, ref, reactive, toRef, nextTick, watch, onMounted, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot, createCommentVNode, getCurrentScope, onScopeDispose, provide, onBeforeUnmount, withDirectives, createVNode, vShow } from "vue";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var interact_min = { exports: {} };
(function(module, exports) {
  !function(t) {
    module.exports = t();
  }(function() {
    var t = {};
    Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0, t.default = function(t2) {
      return !(!t2 || !t2.Window) && t2 instanceof t2.Window;
    };
    var e = {};
    Object.defineProperty(e, "__esModule", { value: true }), e.init = o, e.getWindow = function(e2) {
      return (0, t.default)(e2) ? e2 : (e2.ownerDocument || e2).defaultView || r.window;
    }, e.window = e.realWindow = void 0;
    var n = void 0;
    e.realWindow = n;
    var r = void 0;
    function o(t2) {
      e.realWindow = n = t2;
      var o2 = t2.document.createTextNode("");
      o2.ownerDocument !== t2.document && typeof t2.wrap == "function" && t2.wrap(o2) === o2 && (t2 = t2.wrap(t2)), e.window = r = t2;
    }
    e.window = r, typeof window != "undefined" && window && o(window);
    var i = {};
    function a(t2) {
      return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      })(t2);
    }
    Object.defineProperty(i, "__esModule", { value: true }), i.default = void 0;
    var s = function(t2) {
      return !!t2 && a(t2) === "object";
    }, l = function(t2) {
      return typeof t2 == "function";
    }, u = { window: function(n2) {
      return n2 === e.window || (0, t.default)(n2);
    }, docFrag: function(t2) {
      return s(t2) && t2.nodeType === 11;
    }, object: s, func: l, number: function(t2) {
      return typeof t2 == "number";
    }, bool: function(t2) {
      return typeof t2 == "boolean";
    }, string: function(t2) {
      return typeof t2 == "string";
    }, element: function(t2) {
      if (!t2 || a(t2) !== "object")
        return false;
      var n2 = e.getWindow(t2) || e.window;
      return /object|function/.test(a(n2.Element)) ? t2 instanceof n2.Element : t2.nodeType === 1 && typeof t2.nodeName == "string";
    }, plainObject: function(t2) {
      return s(t2) && !!t2.constructor && /function Object\b/.test(t2.constructor.toString());
    }, array: function(t2) {
      return s(t2) && t2.length !== void 0 && l(t2.splice);
    } };
    i.default = u;
    var c = {};
    function f(t2) {
      var e2 = t2.interaction;
      if (e2.prepared.name === "drag") {
        var n2 = e2.prepared.axis;
        n2 === "x" ? (e2.coords.cur.page.y = e2.coords.start.page.y, e2.coords.cur.client.y = e2.coords.start.client.y, e2.coords.velocity.client.y = 0, e2.coords.velocity.page.y = 0) : n2 === "y" && (e2.coords.cur.page.x = e2.coords.start.page.x, e2.coords.cur.client.x = e2.coords.start.client.x, e2.coords.velocity.client.x = 0, e2.coords.velocity.page.x = 0);
      }
    }
    function d(t2) {
      var e2 = t2.iEvent, n2 = t2.interaction;
      if (n2.prepared.name === "drag") {
        var r2 = n2.prepared.axis;
        if (r2 === "x" || r2 === "y") {
          var o2 = r2 === "x" ? "y" : "x";
          e2.page[o2] = n2.coords.start.page[o2], e2.client[o2] = n2.coords.start.client[o2], e2.delta[o2] = 0;
        }
      }
    }
    Object.defineProperty(c, "__esModule", { value: true }), c.default = void 0;
    var p = { id: "actions/drag", install: function(t2) {
      var e2 = t2.actions, n2 = t2.Interactable, r2 = t2.defaults;
      n2.prototype.draggable = p.draggable, e2.map.drag = p, e2.methodDict.drag = "draggable", r2.actions.drag = p.defaults;
    }, listeners: { "interactions:before-action-move": f, "interactions:action-resume": f, "interactions:action-move": d, "auto-start:check": function(t2) {
      var e2 = t2.interaction, n2 = t2.interactable, r2 = t2.buttons, o2 = n2.options.drag;
      if (o2 && o2.enabled && (!e2.pointerIsDown || !/mouse|pointer/.test(e2.pointerType) || (r2 & n2.options.drag.mouseButtons) != 0))
        return t2.action = { name: "drag", axis: o2.lockAxis === "start" ? o2.startAxis : o2.lockAxis }, false;
    } }, draggable: function(t2) {
      return i.default.object(t2) ? (this.options.drag.enabled = t2.enabled !== false, this.setPerAction("drag", t2), this.setOnEvents("drag", t2), /^(xy|x|y|start)$/.test(t2.lockAxis) && (this.options.drag.lockAxis = t2.lockAxis), /^(xy|x|y)$/.test(t2.startAxis) && (this.options.drag.startAxis = t2.startAxis), this) : i.default.bool(t2) ? (this.options.drag.enabled = t2, this) : this.options.drag;
    }, beforeMove: f, move: d, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, v = p;
    c.default = v;
    var h = {};
    Object.defineProperty(h, "__esModule", { value: true }), h.default = void 0;
    var g = { init: function(t2) {
      var e2 = t2;
      g.document = e2.document, g.DocumentFragment = e2.DocumentFragment || y, g.SVGElement = e2.SVGElement || y, g.SVGSVGElement = e2.SVGSVGElement || y, g.SVGElementInstance = e2.SVGElementInstance || y, g.Element = e2.Element || y, g.HTMLElement = e2.HTMLElement || g.Element, g.Event = e2.Event, g.Touch = e2.Touch || y, g.PointerEvent = e2.PointerEvent || e2.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function y() {
    }
    var m = g;
    h.default = m;
    var b = {};
    Object.defineProperty(b, "__esModule", { value: true }), b.default = void 0;
    var x = { init: function(t2) {
      var e2 = h.default.Element, n2 = t2.navigator || {};
      x.supportsTouch = "ontouchstart" in t2 || i.default.func(t2.DocumentTouch) && h.default.document instanceof t2.DocumentTouch, x.supportsPointerEvent = n2.pointerEnabled !== false && !!h.default.PointerEvent, x.isIOS = /iP(hone|od|ad)/.test(n2.platform), x.isIOS7 = /iP(hone|od|ad)/.test(n2.platform) && /OS 7[^\d]/.test(n2.appVersion), x.isIe9 = /MSIE 9/.test(n2.userAgent), x.isOperaMobile = n2.appName === "Opera" && x.supportsTouch && /Presto/.test(n2.userAgent), x.prefixedMatchesSelector = "matches" in e2.prototype ? "matches" : "webkitMatchesSelector" in e2.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e2.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e2.prototype ? "oMatchesSelector" : "msMatchesSelector", x.pEventTypes = x.supportsPointerEvent ? h.default.PointerEvent === t2.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, x.wheelEvent = h.default.document && "onmousewheel" in h.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, w = x;
    b.default = w;
    var _ = {};
    function P(t2) {
      var e2 = t2.parentNode;
      if (i.default.docFrag(e2)) {
        for (; (e2 = e2.host) && i.default.docFrag(e2); )
          ;
        return e2;
      }
      return e2;
    }
    function O(t2, n2) {
      return e.window !== e.realWindow && (n2 = n2.replace(/\/deep\//g, " ")), t2[b.default.prefixedMatchesSelector](n2);
    }
    Object.defineProperty(_, "__esModule", { value: true }), _.nodeContains = function(t2, e2) {
      if (t2.contains)
        return t2.contains(e2);
      for (; e2; ) {
        if (e2 === t2)
          return true;
        e2 = e2.parentNode;
      }
      return false;
    }, _.closest = function(t2, e2) {
      for (; i.default.element(t2); ) {
        if (O(t2, e2))
          return t2;
        t2 = P(t2);
      }
      return null;
    }, _.parentNode = P, _.matchesSelector = O, _.indexOfDeepestElement = function(t2) {
      for (var n2, r2 = [], o2 = 0; o2 < t2.length; o2++) {
        var i2 = t2[o2], a2 = t2[n2];
        if (i2 && o2 !== n2)
          if (a2) {
            var s2 = S(i2), l2 = S(a2);
            if (s2 !== i2.ownerDocument)
              if (l2 !== i2.ownerDocument)
                if (s2 !== l2) {
                  r2 = r2.length ? r2 : E(a2);
                  var u2 = void 0;
                  if (a2 instanceof h.default.HTMLElement && i2 instanceof h.default.SVGElement && !(i2 instanceof h.default.SVGSVGElement)) {
                    if (i2 === l2)
                      continue;
                    u2 = i2.ownerSVGElement;
                  } else
                    u2 = i2;
                  for (var c2 = E(u2, a2.ownerDocument), f2 = 0; c2[f2] && c2[f2] === r2[f2]; )
                    f2++;
                  var d2 = [c2[f2 - 1], c2[f2], r2[f2]];
                  if (d2[0])
                    for (var p2 = d2[0].lastChild; p2; ) {
                      if (p2 === d2[1]) {
                        n2 = o2, r2 = c2;
                        break;
                      }
                      if (p2 === d2[2])
                        break;
                      p2 = p2.previousSibling;
                    }
                } else
                  v2 = i2, g2 = a2, (parseInt(e.getWindow(v2).getComputedStyle(v2).zIndex, 10) || 0) >= (parseInt(e.getWindow(g2).getComputedStyle(g2).zIndex, 10) || 0) && (n2 = o2);
              else
                n2 = o2;
          } else
            n2 = o2;
      }
      var v2, g2;
      return n2;
    }, _.matchesUpTo = function(t2, e2, n2) {
      for (; i.default.element(t2); ) {
        if (O(t2, e2))
          return true;
        if ((t2 = P(t2)) === n2)
          return O(t2, e2);
      }
      return false;
    }, _.getActualElement = function(t2) {
      return t2.correspondingUseElement || t2;
    }, _.getScrollXY = T, _.getElementClientRect = M, _.getElementRect = function(t2) {
      var n2 = M(t2);
      if (!b.default.isIOS7 && n2) {
        var r2 = T(e.getWindow(t2));
        n2.left += r2.x, n2.right += r2.x, n2.top += r2.y, n2.bottom += r2.y;
      }
      return n2;
    }, _.getPath = function(t2) {
      for (var e2 = []; t2; )
        e2.push(t2), t2 = P(t2);
      return e2;
    }, _.trySelector = function(t2) {
      return !!i.default.string(t2) && (h.default.document.querySelector(t2), true);
    };
    var S = function(t2) {
      return t2.parentNode || t2.host;
    };
    function E(t2, e2) {
      for (var n2, r2 = [], o2 = t2; (n2 = S(o2)) && o2 !== e2 && n2 !== o2.ownerDocument; )
        r2.unshift(o2), o2 = n2;
      return r2;
    }
    function T(t2) {
      return { x: (t2 = t2 || e.window).scrollX || t2.document.documentElement.scrollLeft, y: t2.scrollY || t2.document.documentElement.scrollTop };
    }
    function M(t2) {
      var e2 = t2 instanceof h.default.SVGElement ? t2.getBoundingClientRect() : t2.getClientRects()[0];
      return e2 && { left: e2.left, right: e2.right, top: e2.top, bottom: e2.bottom, width: e2.width || e2.right - e2.left, height: e2.height || e2.bottom - e2.top };
    }
    var j = {};
    Object.defineProperty(j, "__esModule", { value: true }), j.default = function(t2, e2) {
      for (var n2 in e2)
        t2[n2] = e2[n2];
      return t2;
    };
    var k = {};
    function I(t2, e2) {
      (e2 == null || e2 > t2.length) && (e2 = t2.length);
      for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
        r2[n2] = t2[n2];
      return r2;
    }
    function D(t2, e2, n2) {
      return t2 === "parent" ? (0, _.parentNode)(n2) : t2 === "self" ? e2.getRect(n2) : (0, _.closest)(n2, t2);
    }
    Object.defineProperty(k, "__esModule", { value: true }), k.getStringOptionResult = D, k.resolveRectLike = function(t2, e2, n2, r2) {
      var o2, a2 = t2;
      return i.default.string(a2) ? a2 = D(a2, e2, n2) : i.default.func(a2) && (a2 = a2.apply(void 0, function(t3) {
        if (Array.isArray(t3))
          return I(t3);
      }(o2 = r2) || function(t3) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3))
          return Array.from(t3);
      }(o2) || function(t3, e3) {
        if (t3) {
          if (typeof t3 == "string")
            return I(t3, e3);
          var n3 = Object.prototype.toString.call(t3).slice(8, -1);
          return n3 === "Object" && t3.constructor && (n3 = t3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(t3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? I(t3, e3) : void 0;
        }
      }(o2) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }())), i.default.element(a2) && (a2 = (0, _.getElementRect)(a2)), a2;
    }, k.rectToXY = function(t2) {
      return t2 && { x: "x" in t2 ? t2.x : t2.left, y: "y" in t2 ? t2.y : t2.top };
    }, k.xywhToTlbr = function(t2) {
      return !t2 || "left" in t2 && "top" in t2 || ((t2 = (0, j.default)({}, t2)).left = t2.x || 0, t2.top = t2.y || 0, t2.right = t2.right || t2.left + t2.width, t2.bottom = t2.bottom || t2.top + t2.height), t2;
    }, k.tlbrToXywh = function(t2) {
      return !t2 || "x" in t2 && "y" in t2 || ((t2 = (0, j.default)({}, t2)).x = t2.left || 0, t2.y = t2.top || 0, t2.width = t2.width || (t2.right || 0) - t2.x, t2.height = t2.height || (t2.bottom || 0) - t2.y), t2;
    }, k.addEdges = function(t2, e2, n2) {
      t2.left && (e2.left += n2.x), t2.right && (e2.right += n2.x), t2.top && (e2.top += n2.y), t2.bottom && (e2.bottom += n2.y), e2.width = e2.right - e2.left, e2.height = e2.bottom - e2.top;
    };
    var A = {};
    Object.defineProperty(A, "__esModule", { value: true }), A.default = function(t2, e2, n2) {
      var r2 = t2.options[n2], o2 = r2 && r2.origin || t2.options.origin, i2 = (0, k.resolveRectLike)(o2, t2, e2, [t2 && e2]);
      return (0, k.rectToXY)(i2) || { x: 0, y: 0 };
    };
    var R = {};
    function z(t2) {
      return t2.trim().split(/ +/);
    }
    Object.defineProperty(R, "__esModule", { value: true }), R.default = function t2(e2, n2, r2) {
      if (r2 = r2 || {}, i.default.string(e2) && e2.search(" ") !== -1 && (e2 = z(e2)), i.default.array(e2))
        return e2.reduce(function(e3, o3) {
          return (0, j.default)(e3, t2(o3, n2, r2));
        }, r2);
      if (i.default.object(e2) && (n2 = e2, e2 = ""), i.default.func(n2))
        r2[e2] = r2[e2] || [], r2[e2].push(n2);
      else if (i.default.array(n2))
        for (var o2 = 0; o2 < n2.length; o2++) {
          var a2;
          a2 = n2[o2], t2(e2, a2, r2);
        }
      else if (i.default.object(n2))
        for (var s2 in n2) {
          var l2 = z(s2).map(function(t3) {
            return "".concat(e2).concat(t3);
          });
          t2(l2, n2[s2], r2);
        }
      return r2;
    };
    var C = {};
    Object.defineProperty(C, "__esModule", { value: true }), C.default = void 0, C.default = function(t2, e2) {
      return Math.sqrt(t2 * t2 + e2 * e2);
    };
    var F = {};
    function X(t2, e2) {
      for (var n2 in e2) {
        var r2 = X.prefixedPropREs, o2 = false;
        for (var i2 in r2)
          if (n2.indexOf(i2) === 0 && r2[i2].test(n2)) {
            o2 = true;
            break;
          }
        o2 || typeof e2[n2] == "function" || (t2[n2] = e2[n2]);
      }
      return t2;
    }
    Object.defineProperty(F, "__esModule", { value: true }), F.default = void 0, X.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
    var Y = X;
    F.default = Y;
    var B = {};
    function W(t2) {
      return t2 instanceof h.default.Event || t2 instanceof h.default.Touch;
    }
    function L(t2, e2, n2) {
      return t2 = t2 || "page", (n2 = n2 || {}).x = e2[t2 + "X"], n2.y = e2[t2 + "Y"], n2;
    }
    function U(t2, e2) {
      return e2 = e2 || { x: 0, y: 0 }, b.default.isOperaMobile && W(t2) ? (L("screen", t2, e2), e2.x += window.scrollX, e2.y += window.scrollY) : L("page", t2, e2), e2;
    }
    function V(t2, e2) {
      return e2 = e2 || {}, b.default.isOperaMobile && W(t2) ? L("screen", t2, e2) : L("client", t2, e2), e2;
    }
    function N(t2) {
      var e2 = [];
      return i.default.array(t2) ? (e2[0] = t2[0], e2[1] = t2[1]) : t2.type === "touchend" ? t2.touches.length === 1 ? (e2[0] = t2.touches[0], e2[1] = t2.changedTouches[0]) : t2.touches.length === 0 && (e2[0] = t2.changedTouches[0], e2[1] = t2.changedTouches[1]) : (e2[0] = t2.touches[0], e2[1] = t2.touches[1]), e2;
    }
    function q(t2) {
      for (var e2 = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n2 = 0; n2 < t2.length; n2++) {
        var r2 = t2[n2];
        for (var o2 in e2)
          e2[o2] += r2[o2];
      }
      for (var i2 in e2)
        e2[i2] /= t2.length;
      return e2;
    }
    Object.defineProperty(B, "__esModule", { value: true }), B.copyCoords = function(t2, e2) {
      t2.page = t2.page || {}, t2.page.x = e2.page.x, t2.page.y = e2.page.y, t2.client = t2.client || {}, t2.client.x = e2.client.x, t2.client.y = e2.client.y, t2.timeStamp = e2.timeStamp;
    }, B.setCoordDeltas = function(t2, e2, n2) {
      t2.page.x = n2.page.x - e2.page.x, t2.page.y = n2.page.y - e2.page.y, t2.client.x = n2.client.x - e2.client.x, t2.client.y = n2.client.y - e2.client.y, t2.timeStamp = n2.timeStamp - e2.timeStamp;
    }, B.setCoordVelocity = function(t2, e2) {
      var n2 = Math.max(e2.timeStamp / 1e3, 1e-3);
      t2.page.x = e2.page.x / n2, t2.page.y = e2.page.y / n2, t2.client.x = e2.client.x / n2, t2.client.y = e2.client.y / n2, t2.timeStamp = n2;
    }, B.setZeroCoords = function(t2) {
      t2.page.x = 0, t2.page.y = 0, t2.client.x = 0, t2.client.y = 0;
    }, B.isNativePointer = W, B.getXY = L, B.getPageXY = U, B.getClientXY = V, B.getPointerId = function(t2) {
      return i.default.number(t2.pointerId) ? t2.pointerId : t2.identifier;
    }, B.setCoords = function(t2, e2, n2) {
      var r2 = e2.length > 1 ? q(e2) : e2[0];
      U(r2, t2.page), V(r2, t2.client), t2.timeStamp = n2;
    }, B.getTouchPair = N, B.pointerAverage = q, B.touchBBox = function(t2) {
      if (!t2.length)
        return null;
      var e2 = N(t2), n2 = Math.min(e2[0].pageX, e2[1].pageX), r2 = Math.min(e2[0].pageY, e2[1].pageY), o2 = Math.max(e2[0].pageX, e2[1].pageX), i2 = Math.max(e2[0].pageY, e2[1].pageY);
      return { x: n2, y: r2, left: n2, top: r2, right: o2, bottom: i2, width: o2 - n2, height: i2 - r2 };
    }, B.touchDistance = function(t2, e2) {
      var n2 = e2 + "X", r2 = e2 + "Y", o2 = N(t2), i2 = o2[0][n2] - o2[1][n2], a2 = o2[0][r2] - o2[1][r2];
      return (0, C.default)(i2, a2);
    }, B.touchAngle = function(t2, e2) {
      var n2 = e2 + "X", r2 = e2 + "Y", o2 = N(t2), i2 = o2[1][n2] - o2[0][n2], a2 = o2[1][r2] - o2[0][r2];
      return 180 * Math.atan2(a2, i2) / Math.PI;
    }, B.getPointerType = function(t2) {
      return i.default.string(t2.pointerType) ? t2.pointerType : i.default.number(t2.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t2.pointerType] : /touch/.test(t2.type || "") || t2 instanceof h.default.Touch ? "touch" : "mouse";
    }, B.getEventTargets = function(t2) {
      var e2 = i.default.func(t2.composedPath) ? t2.composedPath() : t2.path;
      return [_.getActualElement(e2 ? e2[0] : t2.target), _.getActualElement(t2.currentTarget)];
    }, B.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, B.coordsToEvent = function(t2) {
      return { coords: t2, get page() {
        return this.coords.page;
      }, get client() {
        return this.coords.client;
      }, get timeStamp() {
        return this.coords.timeStamp;
      }, get pageX() {
        return this.coords.page.x;
      }, get pageY() {
        return this.coords.page.y;
      }, get clientX() {
        return this.coords.client.x;
      }, get clientY() {
        return this.coords.client.y;
      }, get pointerId() {
        return this.coords.pointerId;
      }, get target() {
        return this.coords.target;
      }, get type() {
        return this.coords.type;
      }, get pointerType() {
        return this.coords.pointerType;
      }, get buttons() {
        return this.coords.buttons;
      }, preventDefault: function() {
      } };
    }, Object.defineProperty(B, "pointerExtend", { enumerable: true, get: function() {
      return F.default;
    } });
    var $ = {};
    function G(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function H(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    Object.defineProperty($, "__esModule", { value: true }), $.BaseEvent = void 0;
    var K = function() {
      function t2(e3) {
        !function(t3, e4) {
          if (!(t3 instanceof e4))
            throw new TypeError("Cannot call a class as a function");
        }(this, t2), H(this, "type", void 0), H(this, "target", void 0), H(this, "currentTarget", void 0), H(this, "interactable", void 0), H(this, "_interaction", void 0), H(this, "timeStamp", void 0), H(this, "immediatePropagationStopped", false), H(this, "propagationStopped", false), this._interaction = e3;
      }
      var e2, n2;
      return e2 = t2, (n2 = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && G(e2.prototype, n2), t2;
    }();
    $.BaseEvent = K, Object.defineProperty(K.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var Z = {};
    Object.defineProperty(Z, "__esModule", { value: true }), Z.find = Z.findIndex = Z.from = Z.merge = Z.remove = Z.contains = void 0, Z.contains = function(t2, e2) {
      return t2.indexOf(e2) !== -1;
    }, Z.remove = function(t2, e2) {
      return t2.splice(t2.indexOf(e2), 1);
    };
    var J = function(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        t2.push(r2);
      }
      return t2;
    };
    Z.merge = J, Z.from = function(t2) {
      return J([], t2);
    };
    var Q = function(t2, e2) {
      for (var n2 = 0; n2 < t2.length; n2++)
        if (e2(t2[n2], n2, t2))
          return n2;
      return -1;
    };
    Z.findIndex = Q, Z.find = function(t2, e2) {
      return t2[Q(t2, e2)];
    };
    var tt = {};
    function et(t2) {
      return (et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      })(t2);
    }
    function nt(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function rt(t2, e2) {
      return (rt = Object.setPrototypeOf || function(t3, e3) {
        return t3.__proto__ = e3, t3;
      })(t2, e2);
    }
    function ot(t2, e2) {
      return !e2 || et(e2) !== "object" && typeof e2 != "function" ? it(t2) : e2;
    }
    function it(t2) {
      if (t2 === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t2;
    }
    function at(t2) {
      return (at = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
        return t3.__proto__ || Object.getPrototypeOf(t3);
      })(t2);
    }
    function st(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    Object.defineProperty(tt, "__esModule", { value: true }), tt.DropEvent = void 0;
    var lt = function(t2) {
      !function(t3, e3) {
        if (typeof e3 != "function" && e3 !== null)
          throw new TypeError("Super expression must either be null or a function");
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && rt(t3, e3);
      }(a2, t2);
      var e2, n2, r2, o2, i2 = (r2 = a2, o2 = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (t3) {
          return false;
        }
      }(), function() {
        var t3, e3 = at(r2);
        if (o2) {
          var n3 = at(this).constructor;
          t3 = Reflect.construct(e3, arguments, n3);
        } else
          t3 = e3.apply(this, arguments);
        return ot(this, t3);
      });
      function a2(t3, e3, n3) {
        var r3;
        !function(t4, e4) {
          if (!(t4 instanceof e4))
            throw new TypeError("Cannot call a class as a function");
        }(this, a2), st(it(r3 = i2.call(this, e3._interaction)), "target", void 0), st(it(r3), "dropzone", void 0), st(it(r3), "dragEvent", void 0), st(it(r3), "relatedTarget", void 0), st(it(r3), "draggable", void 0), st(it(r3), "timeStamp", void 0), st(it(r3), "propagationStopped", false), st(it(r3), "immediatePropagationStopped", false);
        var o3 = n3 === "dragleave" ? t3.prev : t3.cur, s2 = o3.element, l2 = o3.dropzone;
        return r3.type = n3, r3.target = s2, r3.currentTarget = s2, r3.dropzone = l2, r3.dragEvent = e3, r3.relatedTarget = e3.target, r3.draggable = e3.interactable, r3.timeStamp = e3.timeStamp, r3;
      }
      return e2 = a2, (n2 = [{ key: "reject", value: function() {
        var t3 = this, e3 = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && e3.cur.dropzone === this.dropzone && e3.cur.element === this.target)
          if (e3.prev.dropzone = this.dropzone, e3.prev.element = this.target, e3.rejected = true, e3.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var n3 = e3.activeDrops, r3 = Z.findIndex(n3, function(e4) {
              var n4 = e4.dropzone, r4 = e4.element;
              return n4 === t3.dropzone && r4 === t3.target;
            });
            e3.activeDrops.splice(r3, 1);
            var o3 = new a2(e3, this.dragEvent, "dropdeactivate");
            o3.dropzone = this.dropzone, o3.target = this.target, this.dropzone.fire(o3);
          } else
            this.dropzone.fire(new a2(e3, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && nt(e2.prototype, n2), a2;
    }($.BaseEvent);
    tt.DropEvent = lt;
    var ut = {};
    function ct(t2, e2) {
      for (var n2 = 0; n2 < t2.slice().length; n2++) {
        var r2 = t2.slice()[n2], o2 = r2.dropzone, i2 = r2.element;
        e2.dropzone = o2, e2.target = i2, o2.fire(e2), e2.propagationStopped = e2.immediatePropagationStopped = false;
      }
    }
    function ft(t2, e2) {
      for (var n2 = function(t3, e3) {
        for (var n3 = t3.interactables, r3 = [], o3 = 0; o3 < n3.list.length; o3++) {
          var a2 = n3.list[o3];
          if (a2.options.drop.enabled) {
            var s2 = a2.options.drop.accept;
            if (!(i.default.element(s2) && s2 !== e3 || i.default.string(s2) && !_.matchesSelector(e3, s2) || i.default.func(s2) && !s2({ dropzone: a2, draggableElement: e3 })))
              for (var l2 = i.default.string(a2.target) ? a2._context.querySelectorAll(a2.target) : i.default.array(a2.target) ? a2.target : [a2.target], u2 = 0; u2 < l2.length; u2++) {
                var c2 = l2[u2];
                c2 !== e3 && r3.push({ dropzone: a2, element: c2, rect: a2.getRect(c2) });
              }
          }
        }
        return r3;
      }(t2, e2), r2 = 0; r2 < n2.length; r2++) {
        var o2 = n2[r2];
        o2.rect = o2.dropzone.getRect(o2.element);
      }
      return n2;
    }
    function dt(t2, e2, n2) {
      for (var r2 = t2.dropState, o2 = t2.interactable, i2 = t2.element, a2 = [], s2 = 0; s2 < r2.activeDrops.length; s2++) {
        var l2 = r2.activeDrops[s2], u2 = l2.dropzone, c2 = l2.element, f2 = l2.rect;
        a2.push(u2.dropCheck(e2, n2, o2, i2, c2, f2) ? c2 : null);
      }
      var d2 = _.indexOfDeepestElement(a2);
      return r2.activeDrops[d2] || null;
    }
    function pt(t2, e2, n2) {
      var r2 = t2.dropState, o2 = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return n2.type === "dragstart" && (o2.activate = new tt.DropEvent(r2, n2, "dropactivate"), o2.activate.target = null, o2.activate.dropzone = null), n2.type === "dragend" && (o2.deactivate = new tt.DropEvent(r2, n2, "dropdeactivate"), o2.deactivate.target = null, o2.deactivate.dropzone = null), r2.rejected || (r2.cur.element !== r2.prev.element && (r2.prev.dropzone && (o2.leave = new tt.DropEvent(r2, n2, "dragleave"), n2.dragLeave = o2.leave.target = r2.prev.element, n2.prevDropzone = o2.leave.dropzone = r2.prev.dropzone), r2.cur.dropzone && (o2.enter = new tt.DropEvent(r2, n2, "dragenter"), n2.dragEnter = r2.cur.element, n2.dropzone = r2.cur.dropzone)), n2.type === "dragend" && r2.cur.dropzone && (o2.drop = new tt.DropEvent(r2, n2, "drop"), n2.dropzone = r2.cur.dropzone, n2.relatedTarget = r2.cur.element), n2.type === "dragmove" && r2.cur.dropzone && (o2.move = new tt.DropEvent(r2, n2, "dropmove"), o2.move.dragmove = n2, n2.dropzone = r2.cur.dropzone)), o2;
    }
    function vt(t2, e2) {
      var n2 = t2.dropState, r2 = n2.activeDrops, o2 = n2.cur, i2 = n2.prev;
      e2.leave && i2.dropzone.fire(e2.leave), e2.enter && o2.dropzone.fire(e2.enter), e2.move && o2.dropzone.fire(e2.move), e2.drop && o2.dropzone.fire(e2.drop), e2.deactivate && ct(r2, e2.deactivate), n2.prev.dropzone = o2.dropzone, n2.prev.element = o2.element;
    }
    function ht(t2, e2) {
      var n2 = t2.interaction, r2 = t2.iEvent, o2 = t2.event;
      if (r2.type === "dragmove" || r2.type === "dragend") {
        var i2 = n2.dropState;
        e2.dynamicDrop && (i2.activeDrops = ft(e2, n2.element));
        var a2 = r2, s2 = dt(n2, a2, o2);
        i2.rejected = i2.rejected && !!s2 && s2.dropzone === i2.cur.dropzone && s2.element === i2.cur.element, i2.cur.dropzone = s2 && s2.dropzone, i2.cur.element = s2 && s2.element, i2.events = pt(n2, 0, a2);
      }
    }
    Object.defineProperty(ut, "__esModule", { value: true }), ut.default = void 0;
    var gt = { id: "actions/drop", install: function(t2) {
      var e2 = t2.actions, n2 = t2.interactStatic, r2 = t2.Interactable, o2 = t2.defaults;
      t2.usePlugin(c.default), r2.prototype.dropzone = function(t3) {
        return function(t4, e3) {
          if (i.default.object(e3)) {
            if (t4.options.drop.enabled = e3.enabled !== false, e3.listeners) {
              var n3 = (0, R.default)(e3.listeners), r3 = Object.keys(n3).reduce(function(t5, e4) {
                return t5[/^(enter|leave)/.test(e4) ? "drag".concat(e4) : /^(activate|deactivate|move)/.test(e4) ? "drop".concat(e4) : e4] = n3[e4], t5;
              }, {});
              t4.off(t4.options.drop.listeners), t4.on(r3), t4.options.drop.listeners = r3;
            }
            return i.default.func(e3.ondrop) && t4.on("drop", e3.ondrop), i.default.func(e3.ondropactivate) && t4.on("dropactivate", e3.ondropactivate), i.default.func(e3.ondropdeactivate) && t4.on("dropdeactivate", e3.ondropdeactivate), i.default.func(e3.ondragenter) && t4.on("dragenter", e3.ondragenter), i.default.func(e3.ondragleave) && t4.on("dragleave", e3.ondragleave), i.default.func(e3.ondropmove) && t4.on("dropmove", e3.ondropmove), /^(pointer|center)$/.test(e3.overlap) ? t4.options.drop.overlap = e3.overlap : i.default.number(e3.overlap) && (t4.options.drop.overlap = Math.max(Math.min(1, e3.overlap), 0)), "accept" in e3 && (t4.options.drop.accept = e3.accept), "checker" in e3 && (t4.options.drop.checker = e3.checker), t4;
          }
          return i.default.bool(e3) ? (t4.options.drop.enabled = e3, t4) : t4.options.drop;
        }(this, t3);
      }, r2.prototype.dropCheck = function(t3, e3, n3, r3, o3, a2) {
        return function(t4, e4, n4, r4, o4, a3, s2) {
          var l2 = false;
          if (!(s2 = s2 || t4.getRect(a3)))
            return !!t4.options.drop.checker && t4.options.drop.checker(e4, n4, l2, t4, a3, r4, o4);
          var u2 = t4.options.drop.overlap;
          if (u2 === "pointer") {
            var c2 = (0, A.default)(r4, o4, "drag"), f2 = B.getPageXY(e4);
            f2.x += c2.x, f2.y += c2.y;
            var d2 = f2.x > s2.left && f2.x < s2.right, p2 = f2.y > s2.top && f2.y < s2.bottom;
            l2 = d2 && p2;
          }
          var v2 = r4.getRect(o4);
          if (v2 && u2 === "center") {
            var h2 = v2.left + v2.width / 2, g2 = v2.top + v2.height / 2;
            l2 = h2 >= s2.left && h2 <= s2.right && g2 >= s2.top && g2 <= s2.bottom;
          }
          return v2 && i.default.number(u2) && (l2 = Math.max(0, Math.min(s2.right, v2.right) - Math.max(s2.left, v2.left)) * Math.max(0, Math.min(s2.bottom, v2.bottom) - Math.max(s2.top, v2.top)) / (v2.width * v2.height) >= u2), t4.options.drop.checker && (l2 = t4.options.drop.checker(e4, n4, l2, t4, a3, r4, o4)), l2;
        }(this, t3, e3, n3, r3, o3, a2);
      }, n2.dynamicDrop = function(e3) {
        return i.default.bool(e3) ? (t2.dynamicDrop = e3, n2) : t2.dynamicDrop;
      }, (0, j.default)(e2.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), e2.methodDict.drop = "dropzone", t2.dynamicDrop = false, o2.actions.drop = gt.defaults;
    }, listeners: { "interactions:before-action-start": function(t2) {
      var e2 = t2.interaction;
      e2.prepared.name === "drag" && (e2.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(t2, e2) {
      var n2 = t2.interaction, r2 = (t2.event, t2.iEvent);
      if (n2.prepared.name === "drag") {
        var o2 = n2.dropState;
        o2.activeDrops = null, o2.events = null, o2.activeDrops = ft(e2, n2.element), o2.events = pt(n2, 0, r2), o2.events.activate && (ct(o2.activeDrops, o2.events.activate), e2.fire("actions/drop:start", { interaction: n2, dragEvent: r2 }));
      }
    }, "interactions:action-move": ht, "interactions:after-action-move": function(t2, e2) {
      var n2 = t2.interaction, r2 = t2.iEvent;
      n2.prepared.name === "drag" && (vt(n2, n2.dropState.events), e2.fire("actions/drop:move", { interaction: n2, dragEvent: r2 }), n2.dropState.events = {});
    }, "interactions:action-end": function(t2, e2) {
      if (t2.interaction.prepared.name === "drag") {
        var n2 = t2.interaction, r2 = t2.iEvent;
        ht(t2, e2), vt(n2, n2.dropState.events), e2.fire("actions/drop:end", { interaction: n2, dragEvent: r2 });
      }
    }, "interactions:stop": function(t2) {
      var e2 = t2.interaction;
      if (e2.prepared.name === "drag") {
        var n2 = e2.dropState;
        n2 && (n2.activeDrops = null, n2.events = null, n2.cur.dropzone = null, n2.cur.element = null, n2.prev.dropzone = null, n2.prev.element = null, n2.rejected = false);
      }
    } }, getActiveDrops: ft, getDrop: dt, getDropEvents: pt, fireDropEvents: vt, defaults: { enabled: false, accept: null, overlap: "pointer" } }, yt = gt;
    ut.default = yt;
    var mt = {};
    function bt(t2) {
      var e2 = t2.interaction, n2 = t2.iEvent, r2 = t2.phase;
      if (e2.prepared.name === "gesture") {
        var o2 = e2.pointers.map(function(t3) {
          return t3.pointer;
        }), a2 = r2 === "start", s2 = r2 === "end", l2 = e2.interactable.options.deltaSource;
        if (n2.touches = [o2[0], o2[1]], a2)
          n2.distance = B.touchDistance(o2, l2), n2.box = B.touchBBox(o2), n2.scale = 1, n2.ds = 0, n2.angle = B.touchAngle(o2, l2), n2.da = 0, e2.gesture.startDistance = n2.distance, e2.gesture.startAngle = n2.angle;
        else if (s2) {
          var u2 = e2.prevEvent;
          n2.distance = u2.distance, n2.box = u2.box, n2.scale = u2.scale, n2.ds = 0, n2.angle = u2.angle, n2.da = 0;
        } else
          n2.distance = B.touchDistance(o2, l2), n2.box = B.touchBBox(o2), n2.scale = n2.distance / e2.gesture.startDistance, n2.angle = B.touchAngle(o2, l2), n2.ds = n2.scale - e2.gesture.scale, n2.da = n2.angle - e2.gesture.angle;
        e2.gesture.distance = n2.distance, e2.gesture.angle = n2.angle, i.default.number(n2.scale) && n2.scale !== 1 / 0 && !isNaN(n2.scale) && (e2.gesture.scale = n2.scale);
      }
    }
    Object.defineProperty(mt, "__esModule", { value: true }), mt.default = void 0;
    var xt = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t2) {
      var e2 = t2.actions, n2 = t2.Interactable, r2 = t2.defaults;
      n2.prototype.gesturable = function(t3) {
        return i.default.object(t3) ? (this.options.gesture.enabled = t3.enabled !== false, this.setPerAction("gesture", t3), this.setOnEvents("gesture", t3), this) : i.default.bool(t3) ? (this.options.gesture.enabled = t3, this) : this.options.gesture;
      }, e2.map.gesture = xt, e2.methodDict.gesture = "gesturable", r2.actions.gesture = xt.defaults;
    }, listeners: { "interactions:action-start": bt, "interactions:action-move": bt, "interactions:action-end": bt, "interactions:new": function(t2) {
      t2.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(t2) {
      if (!(t2.interaction.pointers.length < 2)) {
        var e2 = t2.interactable.options.gesture;
        if (e2 && e2.enabled)
          return t2.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, wt = xt;
    mt.default = wt;
    var _t = {};
    function Pt(t2, e2, n2, r2, o2, a2, s2) {
      if (!e2)
        return false;
      if (e2 === true) {
        var l2 = i.default.number(a2.width) ? a2.width : a2.right - a2.left, u2 = i.default.number(a2.height) ? a2.height : a2.bottom - a2.top;
        if (s2 = Math.min(s2, Math.abs((t2 === "left" || t2 === "right" ? l2 : u2) / 2)), l2 < 0 && (t2 === "left" ? t2 = "right" : t2 === "right" && (t2 = "left")), u2 < 0 && (t2 === "top" ? t2 = "bottom" : t2 === "bottom" && (t2 = "top")), t2 === "left")
          return n2.x < (l2 >= 0 ? a2.left : a2.right) + s2;
        if (t2 === "top")
          return n2.y < (u2 >= 0 ? a2.top : a2.bottom) + s2;
        if (t2 === "right")
          return n2.x > (l2 >= 0 ? a2.right : a2.left) - s2;
        if (t2 === "bottom")
          return n2.y > (u2 >= 0 ? a2.bottom : a2.top) - s2;
      }
      return !!i.default.element(r2) && (i.default.element(e2) ? e2 === r2 : _.matchesUpTo(r2, e2, o2));
    }
    function Ot(t2) {
      var e2 = t2.iEvent, n2 = t2.interaction;
      if (n2.prepared.name === "resize" && n2.resizeAxes) {
        var r2 = e2;
        n2.interactable.options.resize.square ? (n2.resizeAxes === "y" ? r2.delta.x = r2.delta.y : r2.delta.y = r2.delta.x, r2.axes = "xy") : (r2.axes = n2.resizeAxes, n2.resizeAxes === "x" ? r2.delta.y = 0 : n2.resizeAxes === "y" && (r2.delta.x = 0));
      }
    }
    Object.defineProperty(_t, "__esModule", { value: true }), _t.default = void 0;
    var St = { id: "actions/resize", before: ["actions/drag"], install: function(t2) {
      var e2 = t2.actions, n2 = t2.browser, r2 = t2.Interactable, o2 = t2.defaults;
      St.cursors = function(t3) {
        return t3.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(n2), St.defaultMargin = n2.supportsTouch || n2.supportsPointerEvent ? 20 : 10, r2.prototype.resizable = function(e3) {
        return function(t3, e4, n3) {
          return i.default.object(e4) ? (t3.options.resize.enabled = e4.enabled !== false, t3.setPerAction("resize", e4), t3.setOnEvents("resize", e4), i.default.string(e4.axis) && /^x$|^y$|^xy$/.test(e4.axis) ? t3.options.resize.axis = e4.axis : e4.axis === null && (t3.options.resize.axis = n3.defaults.actions.resize.axis), i.default.bool(e4.preserveAspectRatio) ? t3.options.resize.preserveAspectRatio = e4.preserveAspectRatio : i.default.bool(e4.square) && (t3.options.resize.square = e4.square), t3) : i.default.bool(e4) ? (t3.options.resize.enabled = e4, t3) : t3.options.resize;
        }(this, e3, t2);
      }, e2.map.resize = St, e2.methodDict.resize = "resizable", o2.actions.resize = St.defaults;
    }, listeners: { "interactions:new": function(t2) {
      t2.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(t2) {
      !function(t3) {
        var e2 = t3.iEvent, n2 = t3.interaction;
        if (n2.prepared.name === "resize" && n2.prepared.edges) {
          var r2 = e2, o2 = n2.rect;
          n2._rects = { start: (0, j.default)({}, o2), corrected: (0, j.default)({}, o2), previous: (0, j.default)({}, o2), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, r2.edges = n2.prepared.edges, r2.rect = n2._rects.corrected, r2.deltaRect = n2._rects.delta;
        }
      }(t2), Ot(t2);
    }, "interactions:action-move": function(t2) {
      !function(t3) {
        var e2 = t3.iEvent, n2 = t3.interaction;
        if (n2.prepared.name === "resize" && n2.prepared.edges) {
          var r2 = e2, o2 = n2.interactable.options.resize.invert, i2 = o2 === "reposition" || o2 === "negate", a2 = n2.rect, s2 = n2._rects, l2 = s2.start, u2 = s2.corrected, c2 = s2.delta, f2 = s2.previous;
          if ((0, j.default)(f2, u2), i2) {
            if ((0, j.default)(u2, a2), o2 === "reposition") {
              if (u2.top > u2.bottom) {
                var d2 = u2.top;
                u2.top = u2.bottom, u2.bottom = d2;
              }
              if (u2.left > u2.right) {
                var p2 = u2.left;
                u2.left = u2.right, u2.right = p2;
              }
            }
          } else
            u2.top = Math.min(a2.top, l2.bottom), u2.bottom = Math.max(a2.bottom, l2.top), u2.left = Math.min(a2.left, l2.right), u2.right = Math.max(a2.right, l2.left);
          for (var v2 in u2.width = u2.right - u2.left, u2.height = u2.bottom - u2.top, u2)
            c2[v2] = u2[v2] - f2[v2];
          r2.edges = n2.prepared.edges, r2.rect = u2, r2.deltaRect = c2;
        }
      }(t2), Ot(t2);
    }, "interactions:action-end": function(t2) {
      var e2 = t2.iEvent, n2 = t2.interaction;
      if (n2.prepared.name === "resize" && n2.prepared.edges) {
        var r2 = e2;
        r2.edges = n2.prepared.edges, r2.rect = n2._rects.corrected, r2.deltaRect = n2._rects.delta;
      }
    }, "auto-start:check": function(t2) {
      var e2 = t2.interaction, n2 = t2.interactable, r2 = t2.element, o2 = t2.rect, a2 = t2.buttons;
      if (o2) {
        var s2 = (0, j.default)({}, e2.coords.cur.page), l2 = n2.options.resize;
        if (l2 && l2.enabled && (!e2.pointerIsDown || !/mouse|pointer/.test(e2.pointerType) || (a2 & l2.mouseButtons) != 0)) {
          if (i.default.object(l2.edges)) {
            var u2 = { left: false, right: false, top: false, bottom: false };
            for (var c2 in u2)
              u2[c2] = Pt(c2, l2.edges[c2], s2, e2._latestPointer.eventTarget, r2, o2, l2.margin || St.defaultMargin);
            u2.left = u2.left && !u2.right, u2.top = u2.top && !u2.bottom, (u2.left || u2.right || u2.top || u2.bottom) && (t2.action = { name: "resize", edges: u2 });
          } else {
            var f2 = l2.axis !== "y" && s2.x > o2.right - St.defaultMargin, d2 = l2.axis !== "x" && s2.y > o2.bottom - St.defaultMargin;
            (f2 || d2) && (t2.action = { name: "resize", axes: (f2 ? "x" : "") + (d2 ? "y" : "") });
          }
          return !t2.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t2) {
      var e2 = t2.edges, n2 = t2.axis, r2 = t2.name, o2 = St.cursors, i2 = null;
      if (n2)
        i2 = o2[r2 + n2];
      else if (e2) {
        for (var a2 = "", s2 = ["top", "bottom", "left", "right"], l2 = 0; l2 < s2.length; l2++) {
          var u2 = s2[l2];
          e2[u2] && (a2 += u2);
        }
        i2 = o2[a2];
      }
      return i2;
    }, defaultMargin: null }, Et = St;
    _t.default = Et;
    var Tt = {};
    Object.defineProperty(Tt, "__esModule", { value: true }), Tt.default = void 0;
    var Mt = { id: "actions", install: function(t2) {
      t2.usePlugin(mt.default), t2.usePlugin(_t.default), t2.usePlugin(c.default), t2.usePlugin(ut.default);
    } };
    Tt.default = Mt;
    var jt = {};
    Object.defineProperty(jt, "__esModule", { value: true }), jt.default = void 0;
    var kt, It, Dt = 0, At = { request: function(t2) {
      return kt(t2);
    }, cancel: function(t2) {
      return It(t2);
    }, init: function(t2) {
      if (kt = t2.requestAnimationFrame, It = t2.cancelAnimationFrame, !kt)
        for (var e2 = ["ms", "moz", "webkit", "o"], n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          kt = t2["".concat(r2, "RequestAnimationFrame")], It = t2["".concat(r2, "CancelAnimationFrame")] || t2["".concat(r2, "CancelRequestAnimationFrame")];
        }
      kt = kt && kt.bind(t2), It = It && It.bind(t2), kt || (kt = function(e3) {
        var n3 = Date.now(), r3 = Math.max(0, 16 - (n3 - Dt)), o2 = t2.setTimeout(function() {
          e3(n3 + r3);
        }, r3);
        return Dt = n3 + r3, o2;
      }, It = function(t3) {
        return clearTimeout(t3);
      });
    } };
    jt.default = At;
    var Rt = {};
    Object.defineProperty(Rt, "__esModule", { value: true }), Rt.getContainer = Ct, Rt.getScroll = Ft, Rt.getScrollSize = function(t2) {
      return i.default.window(t2) && (t2 = window.document.body), { x: t2.scrollWidth, y: t2.scrollHeight };
    }, Rt.getScrollSizeDelta = function(t2, e2) {
      var n2 = t2.interaction, r2 = t2.element, o2 = n2 && n2.interactable.options[n2.prepared.name].autoScroll;
      if (!o2 || !o2.enabled)
        return e2(), { x: 0, y: 0 };
      var i2 = Ct(o2.container, n2.interactable, r2), a2 = Ft(i2);
      e2();
      var s2 = Ft(i2);
      return { x: s2.x - a2.x, y: s2.y - a2.y };
    }, Rt.default = void 0;
    var zt = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(t2) {
      zt.isScrolling = true, jt.default.cancel(zt.i), t2.autoScroll = zt, zt.interaction = t2, zt.prevTime = zt.now(), zt.i = jt.default.request(zt.scroll);
    }, stop: function() {
      zt.isScrolling = false, zt.interaction && (zt.interaction.autoScroll = null), jt.default.cancel(zt.i);
    }, scroll: function() {
      var t2 = zt.interaction, e2 = t2.interactable, n2 = t2.element, r2 = t2.prepared.name, o2 = e2.options[r2].autoScroll, a2 = Ct(o2.container, e2, n2), s2 = zt.now(), l2 = (s2 - zt.prevTime) / 1e3, u2 = o2.speed * l2;
      if (u2 >= 1) {
        var c2 = { x: zt.x * u2, y: zt.y * u2 };
        if (c2.x || c2.y) {
          var f2 = Ft(a2);
          i.default.window(a2) ? a2.scrollBy(c2.x, c2.y) : a2 && (a2.scrollLeft += c2.x, a2.scrollTop += c2.y);
          var d2 = Ft(a2), p2 = { x: d2.x - f2.x, y: d2.y - f2.y };
          (p2.x || p2.y) && e2.fire({ type: "autoscroll", target: n2, interactable: e2, delta: p2, interaction: t2, container: a2 });
        }
        zt.prevTime = s2;
      }
      zt.isScrolling && (jt.default.cancel(zt.i), zt.i = jt.default.request(zt.scroll));
    }, check: function(t2, e2) {
      var n2;
      return (n2 = t2.options[e2].autoScroll) == null ? void 0 : n2.enabled;
    }, onInteractionMove: function(t2) {
      var e2 = t2.interaction, n2 = t2.pointer;
      if (e2.interacting() && zt.check(e2.interactable, e2.prepared.name))
        if (e2.simulation)
          zt.x = zt.y = 0;
        else {
          var r2, o2, a2, s2, l2 = e2.interactable, u2 = e2.element, c2 = e2.prepared.name, f2 = l2.options[c2].autoScroll, d2 = Ct(f2.container, l2, u2);
          if (i.default.window(d2))
            s2 = n2.clientX < zt.margin, r2 = n2.clientY < zt.margin, o2 = n2.clientX > d2.innerWidth - zt.margin, a2 = n2.clientY > d2.innerHeight - zt.margin;
          else {
            var p2 = _.getElementClientRect(d2);
            s2 = n2.clientX < p2.left + zt.margin, r2 = n2.clientY < p2.top + zt.margin, o2 = n2.clientX > p2.right - zt.margin, a2 = n2.clientY > p2.bottom - zt.margin;
          }
          zt.x = o2 ? 1 : s2 ? -1 : 0, zt.y = a2 ? 1 : r2 ? -1 : 0, zt.isScrolling || (zt.margin = f2.margin, zt.speed = f2.speed, zt.start(e2));
        }
    } };
    function Ct(t2, n2, r2) {
      return (i.default.string(t2) ? (0, k.getStringOptionResult)(t2, n2, r2) : t2) || (0, e.getWindow)(r2);
    }
    function Ft(t2) {
      return i.default.window(t2) && (t2 = window.document.body), { x: t2.scrollLeft, y: t2.scrollTop };
    }
    var Xt = { id: "auto-scroll", install: function(t2) {
      var e2 = t2.defaults, n2 = t2.actions;
      t2.autoScroll = zt, zt.now = function() {
        return t2.now();
      }, n2.phaselessTypes.autoscroll = true, e2.perAction.autoScroll = zt.defaults;
    }, listeners: { "interactions:new": function(t2) {
      t2.interaction.autoScroll = null;
    }, "interactions:destroy": function(t2) {
      t2.interaction.autoScroll = null, zt.stop(), zt.interaction && (zt.interaction = null);
    }, "interactions:stop": zt.stop, "interactions:action-move": function(t2) {
      return zt.onInteractionMove(t2);
    } } };
    Rt.default = Xt;
    var Yt = {};
    Object.defineProperty(Yt, "__esModule", { value: true }), Yt.warnOnce = function(t2, n2) {
      var r2 = false;
      return function() {
        return r2 || (e.window.console.warn(n2), r2 = true), t2.apply(this, arguments);
      };
    }, Yt.copyAction = function(t2, e2) {
      return t2.name = e2.name, t2.axis = e2.axis, t2.edges = e2.edges, t2;
    }, Yt.sign = void 0, Yt.sign = function(t2) {
      return t2 >= 0 ? 1 : -1;
    };
    var Bt = {};
    function Wt(t2) {
      return i.default.bool(t2) ? (this.options.styleCursor = t2, this) : t2 === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    function Lt(t2) {
      return i.default.func(t2) ? (this.options.actionChecker = t2, this) : t2 === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    Object.defineProperty(Bt, "__esModule", { value: true }), Bt.default = void 0;
    var Ut = { id: "auto-start/interactableMethods", install: function(t2) {
      var e2 = t2.Interactable;
      e2.prototype.getAction = function(e3, n2, r2, o2) {
        var i2 = function(t3, e4, n3, r3, o3) {
          var i3 = t3.getRect(r3), a2 = { action: null, interactable: t3, interaction: n3, element: r3, rect: i3, buttons: e4.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[e4.button] };
          return o3.fire("auto-start:check", a2), a2.action;
        }(this, n2, r2, o2, t2);
        return this.options.actionChecker ? this.options.actionChecker(e3, n2, i2, this, o2, r2) : i2;
      }, e2.prototype.ignoreFrom = (0, Yt.warnOnce)(function(t3) {
        return this._backCompatOption("ignoreFrom", t3);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e2.prototype.allowFrom = (0, Yt.warnOnce)(function(t3) {
        return this._backCompatOption("allowFrom", t3);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e2.prototype.actionChecker = Lt, e2.prototype.styleCursor = Wt;
    } };
    Bt.default = Ut;
    var Vt = {};
    function Nt(t2, e2, n2, r2, o2) {
      return e2.testIgnoreAllow(e2.options[t2.name], n2, r2) && e2.options[t2.name].enabled && Ht(e2, n2, t2, o2) ? t2 : null;
    }
    function qt(t2, e2, n2, r2, o2, i2, a2) {
      for (var s2 = 0, l2 = r2.length; s2 < l2; s2++) {
        var u2 = r2[s2], c2 = o2[s2], f2 = u2.getAction(e2, n2, t2, c2);
        if (f2) {
          var d2 = Nt(f2, u2, c2, i2, a2);
          if (d2)
            return { action: d2, interactable: u2, element: c2 };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    function $t(t2, e2, n2, r2, o2) {
      var a2 = [], s2 = [], l2 = r2;
      function u2(t3) {
        a2.push(t3), s2.push(l2);
      }
      for (; i.default.element(l2); ) {
        a2 = [], s2 = [], o2.interactables.forEachMatch(l2, u2);
        var c2 = qt(t2, e2, n2, a2, s2, r2, o2);
        if (c2.action && !c2.interactable.options[c2.action.name].manualStart)
          return c2;
        l2 = _.parentNode(l2);
      }
      return { action: null, interactable: null, element: null };
    }
    function Gt(t2, e2, n2) {
      var r2 = e2.action, o2 = e2.interactable, i2 = e2.element;
      r2 = r2 || { name: null }, t2.interactable = o2, t2.element = i2, (0, Yt.copyAction)(t2.prepared, r2), t2.rect = o2 && r2.name ? o2.getRect(i2) : null, Jt(t2, n2), n2.fire("autoStart:prepared", { interaction: t2 });
    }
    function Ht(t2, e2, n2, r2) {
      var o2 = t2.options, i2 = o2[n2.name].max, a2 = o2[n2.name].maxPerElement, s2 = r2.autoStart.maxInteractions, l2 = 0, u2 = 0, c2 = 0;
      if (!(i2 && a2 && s2))
        return false;
      for (var f2 = 0; f2 < r2.interactions.list.length; f2++) {
        var d2 = r2.interactions.list[f2], p2 = d2.prepared.name;
        if (d2.interacting()) {
          if (++l2 >= s2)
            return false;
          if (d2.interactable === t2) {
            if ((u2 += p2 === n2.name ? 1 : 0) >= i2)
              return false;
            if (d2.element === e2 && (c2++, p2 === n2.name && c2 >= a2))
              return false;
          }
        }
      }
      return s2 > 0;
    }
    function Kt(t2, e2) {
      return i.default.number(t2) ? (e2.autoStart.maxInteractions = t2, this) : e2.autoStart.maxInteractions;
    }
    function Zt(t2, e2, n2) {
      var r2 = n2.autoStart.cursorElement;
      r2 && r2 !== t2 && (r2.style.cursor = ""), t2.ownerDocument.documentElement.style.cursor = e2, t2.style.cursor = e2, n2.autoStart.cursorElement = e2 ? t2 : null;
    }
    function Jt(t2, e2) {
      var n2 = t2.interactable, r2 = t2.element, o2 = t2.prepared;
      if (t2.pointerType === "mouse" && n2 && n2.options.styleCursor) {
        var a2 = "";
        if (o2.name) {
          var s2 = n2.options[o2.name].cursorChecker;
          a2 = i.default.func(s2) ? s2(o2, n2, r2, t2._interacting) : e2.actions.map[o2.name].getCursor(o2);
        }
        Zt(t2.element, a2 || "", e2);
      } else
        e2.autoStart.cursorElement && Zt(e2.autoStart.cursorElement, "", e2);
    }
    Object.defineProperty(Vt, "__esModule", { value: true }), Vt.default = void 0;
    var Qt = { id: "auto-start/base", before: ["actions"], install: function(t2) {
      var e2 = t2.interactStatic, n2 = t2.defaults;
      t2.usePlugin(Bt.default), n2.base.actionChecker = null, n2.base.styleCursor = true, (0, j.default)(n2.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e2.maxInteractions = function(e3) {
        return Kt(e3, t2);
      }, t2.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Ht, cursorElement: null };
    }, listeners: { "interactions:down": function(t2, e2) {
      var n2 = t2.interaction, r2 = t2.pointer, o2 = t2.event, i2 = t2.eventTarget;
      n2.interacting() || Gt(n2, $t(n2, r2, o2, i2, e2), e2);
    }, "interactions:move": function(t2, e2) {
      !function(t3, e3) {
        var n2 = t3.interaction, r2 = t3.pointer, o2 = t3.event, i2 = t3.eventTarget;
        n2.pointerType !== "mouse" || n2.pointerIsDown || n2.interacting() || Gt(n2, $t(n2, r2, o2, i2, e3), e3);
      }(t2, e2), function(t3, e3) {
        var n2 = t3.interaction;
        if (n2.pointerIsDown && !n2.interacting() && n2.pointerWasMoved && n2.prepared.name) {
          e3.fire("autoStart:before-start", t3);
          var r2 = n2.interactable, o2 = n2.prepared.name;
          o2 && r2 && (r2.options[o2].manualStart || !Ht(r2, n2.element, n2.prepared, e3) ? n2.stop() : (n2.start(n2.prepared, r2, n2.element), Jt(n2, e3)));
        }
      }(t2, e2);
    }, "interactions:stop": function(t2, e2) {
      var n2 = t2.interaction, r2 = n2.interactable;
      r2 && r2.options.styleCursor && Zt(n2.element, "", e2);
    } }, maxInteractions: Kt, withinInteractionLimit: Ht, validateAction: Nt };
    Vt.default = Qt;
    var te = {};
    Object.defineProperty(te, "__esModule", { value: true }), te.default = void 0;
    var ee = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t2, e2) {
      var n2 = t2.interaction, r2 = t2.eventTarget, o2 = t2.dx, a2 = t2.dy;
      if (n2.prepared.name === "drag") {
        var s2 = Math.abs(o2), l2 = Math.abs(a2), u2 = n2.interactable.options.drag, c2 = u2.startAxis, f2 = s2 > l2 ? "x" : s2 < l2 ? "y" : "xy";
        if (n2.prepared.axis = u2.lockAxis === "start" ? f2[0] : u2.lockAxis, f2 !== "xy" && c2 !== "xy" && c2 !== f2) {
          n2.prepared.name = null;
          for (var d2 = r2, p2 = function(t3) {
            if (t3 !== n2.interactable) {
              var o3 = n2.interactable.options.drag;
              if (!o3.manualStart && t3.testIgnoreAllow(o3, d2, r2)) {
                var i2 = t3.getAction(n2.downPointer, n2.downEvent, n2, d2);
                if (i2 && i2.name === "drag" && function(t4, e3) {
                  if (!e3)
                    return false;
                  var n3 = e3.options.drag.startAxis;
                  return t4 === "xy" || n3 === "xy" || n3 === t4;
                }(f2, t3) && Vt.default.validateAction(i2, t3, d2, r2, e2))
                  return t3;
              }
            }
          }; i.default.element(d2); ) {
            var v2 = e2.interactables.forEachMatch(d2, p2);
            if (v2) {
              n2.prepared.name = "drag", n2.interactable = v2, n2.element = d2;
              break;
            }
            d2 = (0, _.parentNode)(d2);
          }
        }
      }
    } } };
    te.default = ee;
    var ne = {};
    function re(t2) {
      var e2 = t2.prepared && t2.prepared.name;
      if (!e2)
        return null;
      var n2 = t2.interactable.options;
      return n2[e2].hold || n2[e2].delay;
    }
    Object.defineProperty(ne, "__esModule", { value: true }), ne.default = void 0;
    var oe = { id: "auto-start/hold", install: function(t2) {
      var e2 = t2.defaults;
      t2.usePlugin(Vt.default), e2.perAction.hold = 0, e2.perAction.delay = 0;
    }, listeners: { "interactions:new": function(t2) {
      t2.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(t2) {
      var e2 = t2.interaction, n2 = re(e2);
      n2 > 0 && (e2.autoStartHoldTimer = setTimeout(function() {
        e2.start(e2.prepared, e2.interactable, e2.element);
      }, n2));
    }, "interactions:move": function(t2) {
      var e2 = t2.interaction, n2 = t2.duplicate;
      e2.autoStartHoldTimer && e2.pointerWasMoved && !n2 && (clearTimeout(e2.autoStartHoldTimer), e2.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(t2) {
      var e2 = t2.interaction;
      re(e2) > 0 && (e2.prepared.name = null);
    } }, getHoldDuration: re };
    ne.default = oe;
    var ie = {};
    Object.defineProperty(ie, "__esModule", { value: true }), ie.default = void 0;
    var ae = { id: "auto-start", install: function(t2) {
      t2.usePlugin(Vt.default), t2.usePlugin(ne.default), t2.usePlugin(te.default);
    } };
    ie.default = ae;
    var se = {};
    function le(t2) {
      return /^(always|never|auto)$/.test(t2) ? (this.options.preventDefault = t2, this) : i.default.bool(t2) ? (this.options.preventDefault = t2 ? "always" : "never", this) : this.options.preventDefault;
    }
    function ue(t2) {
      var e2 = t2.interaction, n2 = t2.event;
      e2.interactable && e2.interactable.checkAndPreventDefault(n2);
    }
    function ce(t2) {
      var n2 = t2.Interactable;
      n2.prototype.preventDefault = le, n2.prototype.checkAndPreventDefault = function(n3) {
        return function(t3, n4, r2) {
          var o2 = t3.options.preventDefault;
          if (o2 !== "never")
            if (o2 !== "always") {
              if (n4.events.supportsPassive && /^touch(start|move)$/.test(r2.type)) {
                var a2 = (0, e.getWindow)(r2.target).document, s2 = n4.getDocOptions(a2);
                if (!s2 || !s2.events || s2.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(r2.type) || i.default.element(r2.target) && (0, _.matchesSelector)(r2.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || r2.preventDefault();
            } else
              r2.preventDefault();
        }(this, t2, n3);
      }, t2.interactions.docEvents.push({ type: "dragstart", listener: function(e2) {
        for (var n3 = 0; n3 < t2.interactions.list.length; n3++) {
          var r2 = t2.interactions.list[n3];
          if (r2.element && (r2.element === e2.target || (0, _.nodeContains)(r2.element, e2.target)))
            return void r2.interactable.checkAndPreventDefault(e2);
        }
      } });
    }
    Object.defineProperty(se, "__esModule", { value: true }), se.install = ce, se.default = void 0;
    var fe = { id: "core/interactablePreventDefault", install: ce, listeners: ["down", "move", "up", "cancel"].reduce(function(t2, e2) {
      return t2["interactions:".concat(e2)] = ue, t2;
    }, {}) };
    se.default = fe;
    var de = {};
    Object.defineProperty(de, "__esModule", { value: true }), de.default = void 0, de.default = {};
    var pe, ve = {};
    Object.defineProperty(ve, "__esModule", { value: true }), ve.default = void 0, function(t2) {
      t2.touchAction = "touchAction", t2.boxSizing = "boxSizing", t2.noListeners = "noListeners";
    }(pe || (pe = {}));
    pe.touchAction, pe.boxSizing, pe.noListeners;
    var he = { id: "dev-tools", install: function() {
    } };
    ve.default = he;
    var ge = {};
    Object.defineProperty(ge, "__esModule", { value: true }), ge.default = function t2(e2) {
      var n2 = {};
      for (var r2 in e2) {
        var o2 = e2[r2];
        i.default.plainObject(o2) ? n2[r2] = t2(o2) : i.default.array(o2) ? n2[r2] = Z.from(o2) : n2[r2] = o2;
      }
      return n2;
    };
    var ye = {};
    function me(t2, e2) {
      return function(t3) {
        if (Array.isArray(t3))
          return t3;
      }(t2) || function(t3, e3) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3)) {
          var n2 = [], r2 = true, o2 = false, i2 = void 0;
          try {
            for (var a2, s2 = t3[Symbol.iterator](); !(r2 = (a2 = s2.next()).done) && (n2.push(a2.value), !e3 || n2.length !== e3); r2 = true)
              ;
          } catch (t4) {
            o2 = true, i2 = t4;
          } finally {
            try {
              r2 || s2.return == null || s2.return();
            } finally {
              if (o2)
                throw i2;
            }
          }
          return n2;
        }
      }(t2, e2) || function(t3, e3) {
        if (t3) {
          if (typeof t3 == "string")
            return be(t3, e3);
          var n2 = Object.prototype.toString.call(t3).slice(8, -1);
          return n2 === "Object" && t3.constructor && (n2 = t3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? be(t3, e3) : void 0;
        }
      }(t2, e2) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function be(t2, e2) {
      (e2 == null || e2 > t2.length) && (e2 = t2.length);
      for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
        r2[n2] = t2[n2];
      return r2;
    }
    function xe(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function we(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    Object.defineProperty(ye, "__esModule", { value: true }), ye.getRectOffset = Oe, ye.default = void 0;
    var _e = function() {
      function t2(e3) {
        !function(t3, e4) {
          if (!(t3 instanceof e4))
            throw new TypeError("Cannot call a class as a function");
        }(this, t2), we(this, "states", []), we(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), we(this, "startDelta", void 0), we(this, "result", void 0), we(this, "endResult", void 0), we(this, "edges", void 0), we(this, "interaction", void 0), this.interaction = e3, this.result = Pe();
      }
      var e2, n2;
      return e2 = t2, (n2 = [{ key: "start", value: function(t3, e3) {
        var n3 = t3.phase, r2 = this.interaction, o2 = function(t4) {
          var e4 = t4.interactable.options[t4.prepared.name], n4 = e4.modifiers;
          return n4 && n4.length ? n4 : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(t5) {
            var n5 = e4[t5];
            return n5 && n5.enabled && { options: n5, methods: n5._methods };
          }).filter(function(t5) {
            return !!t5;
          });
        }(r2);
        this.prepareStates(o2), this.edges = (0, j.default)({}, r2.edges), this.startOffset = Oe(r2.rect, e3), this.startDelta = { x: 0, y: 0 };
        var i2 = this.fillArg({ phase: n3, pageCoords: e3, preEnd: false });
        return this.result = Pe(), this.startAll(i2), this.result = this.setAll(i2);
      } }, { key: "fillArg", value: function(t3) {
        var e3 = this.interaction;
        return t3.interaction = e3, t3.interactable = e3.interactable, t3.element = e3.element, t3.rect = t3.rect || e3.rect, t3.edges = this.edges, t3.startOffset = this.startOffset, t3;
      } }, { key: "startAll", value: function(t3) {
        for (var e3 = 0; e3 < this.states.length; e3++) {
          var n3 = this.states[e3];
          n3.methods.start && (t3.state = n3, n3.methods.start(t3));
        }
      } }, { key: "setAll", value: function(t3) {
        var e3 = t3.phase, n3 = t3.preEnd, r2 = t3.skipModifiers, o2 = t3.rect;
        t3.coords = (0, j.default)({}, t3.pageCoords), t3.rect = (0, j.default)({}, o2);
        for (var i2 = r2 ? this.states.slice(r2) : this.states, a2 = Pe(t3.coords, t3.rect), s2 = 0; s2 < i2.length; s2++) {
          var l2, u2 = i2[s2], c2 = u2.options, f2 = (0, j.default)({}, t3.coords), d2 = null;
          (l2 = u2.methods) != null && l2.set && this.shouldDo(c2, n3, e3) && (t3.state = u2, d2 = u2.methods.set(t3), k.addEdges(this.interaction.edges, t3.rect, { x: t3.coords.x - f2.x, y: t3.coords.y - f2.y })), a2.eventProps.push(d2);
        }
        a2.delta.x = t3.coords.x - t3.pageCoords.x, a2.delta.y = t3.coords.y - t3.pageCoords.y, a2.rectDelta.left = t3.rect.left - o2.left, a2.rectDelta.right = t3.rect.right - o2.right, a2.rectDelta.top = t3.rect.top - o2.top, a2.rectDelta.bottom = t3.rect.bottom - o2.bottom;
        var p2 = this.result.coords, v2 = this.result.rect;
        if (p2 && v2) {
          var h2 = a2.rect.left !== v2.left || a2.rect.right !== v2.right || a2.rect.top !== v2.top || a2.rect.bottom !== v2.bottom;
          a2.changed = h2 || p2.x !== a2.coords.x || p2.y !== a2.coords.y;
        }
        return a2;
      } }, { key: "applyToInteraction", value: function(t3) {
        var e3 = this.interaction, n3 = t3.phase, r2 = e3.coords.cur, o2 = e3.coords.start, i2 = this.result, a2 = this.startDelta, s2 = i2.delta;
        n3 === "start" && (0, j.default)(this.startDelta, i2.delta);
        for (var l2 = 0; l2 < [[o2, a2], [r2, s2]].length; l2++) {
          var u2 = me([[o2, a2], [r2, s2]][l2], 2), c2 = u2[0], f2 = u2[1];
          c2.page.x += f2.x, c2.page.y += f2.y, c2.client.x += f2.x, c2.client.y += f2.y;
        }
        var d2 = this.result.rectDelta, p2 = t3.rect || e3.rect;
        p2.left += d2.left, p2.right += d2.right, p2.top += d2.top, p2.bottom += d2.bottom, p2.width = p2.right - p2.left, p2.height = p2.bottom - p2.top;
      } }, { key: "setAndApply", value: function(t3) {
        var e3 = this.interaction, n3 = t3.phase, r2 = t3.preEnd, o2 = t3.skipModifiers, i2 = this.setAll(this.fillArg({ preEnd: r2, phase: n3, pageCoords: t3.modifiedCoords || e3.coords.cur.page }));
        if (this.result = i2, !i2.changed && (!o2 || o2 < this.states.length) && e3.interacting())
          return false;
        if (t3.modifiedCoords) {
          var a2 = e3.coords.cur.page, s2 = { x: t3.modifiedCoords.x - a2.x, y: t3.modifiedCoords.y - a2.y };
          i2.coords.x += s2.x, i2.coords.y += s2.y, i2.delta.x += s2.x, i2.delta.y += s2.y;
        }
        this.applyToInteraction(t3);
      } }, { key: "beforeEnd", value: function(t3) {
        var e3 = t3.interaction, n3 = t3.event, r2 = this.states;
        if (r2 && r2.length) {
          for (var o2 = false, i2 = 0; i2 < r2.length; i2++) {
            var a2 = r2[i2];
            t3.state = a2;
            var s2 = a2.options, l2 = a2.methods, u2 = l2.beforeEnd && l2.beforeEnd(t3);
            if (u2)
              return this.endResult = u2, false;
            o2 = o2 || !o2 && this.shouldDo(s2, true, t3.phase, true);
          }
          o2 && e3.move({ event: n3, preEnd: true });
        }
      } }, { key: "stop", value: function(t3) {
        var e3 = t3.interaction;
        if (this.states && this.states.length) {
          var n3 = (0, j.default)({ states: this.states, interactable: e3.interactable, element: e3.element, rect: null }, t3);
          this.fillArg(n3);
          for (var r2 = 0; r2 < this.states.length; r2++) {
            var o2 = this.states[r2];
            n3.state = o2, o2.methods.stop && o2.methods.stop(n3);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(t3) {
        this.states = [];
        for (var e3 = 0; e3 < t3.length; e3++) {
          var n3 = t3[e3], r2 = n3.options, o2 = n3.methods, i2 = n3.name;
          this.states.push({ options: r2, methods: o2, index: e3, name: i2 });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(t3) {
        var e3 = t3.interaction, n3 = e3.coords, r2 = e3.rect, o2 = e3.modification;
        if (o2.result) {
          for (var i2 = o2.startDelta, a2 = o2.result, s2 = a2.delta, l2 = a2.rectDelta, u2 = [[n3.start, i2], [n3.cur, s2]], c2 = 0; c2 < u2.length; c2++) {
            var f2 = me(u2[c2], 2), d2 = f2[0], p2 = f2[1];
            d2.page.x -= p2.x, d2.page.y -= p2.y, d2.client.x -= p2.x, d2.client.y -= p2.y;
          }
          r2.left -= l2.left, r2.right -= l2.right, r2.top -= l2.top, r2.bottom -= l2.bottom;
        }
      } }, { key: "shouldDo", value: function(t3, e3, n3, r2) {
        return !(!t3 || t3.enabled === false || r2 && !t3.endOnly || t3.endOnly && !e3 || n3 === "start" && !t3.setStart);
      } }, { key: "copyFrom", value: function(t3) {
        this.startOffset = t3.startOffset, this.startDelta = t3.startDelta, this.edges = t3.edges, this.states = t3.states.map(function(t4) {
          return (0, ge.default)(t4);
        }), this.result = Pe((0, j.default)({}, t3.result.coords), (0, j.default)({}, t3.result.rect));
      } }, { key: "destroy", value: function() {
        for (var t3 in this)
          this[t3] = null;
      } }]) && xe(e2.prototype, n2), t2;
    }();
    function Pe(t2, e2) {
      return { rect: e2, coords: t2, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    function Oe(t2, e2) {
      return t2 ? { left: e2.x - t2.left, top: e2.y - t2.top, right: t2.right - e2.x, bottom: t2.bottom - e2.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    ye.default = _e;
    var Se = {};
    function Ee(t2) {
      var e2 = t2.iEvent, n2 = t2.interaction.modification.result;
      n2 && (e2.modifiers = n2.eventProps);
    }
    Object.defineProperty(Se, "__esModule", { value: true }), Se.makeModifier = function(t2, e2) {
      var n2 = t2.defaults, r2 = { start: t2.start, set: t2.set, beforeEnd: t2.beforeEnd, stop: t2.stop }, o2 = function(t3) {
        var o3 = t3 || {};
        for (var i2 in o3.enabled = o3.enabled !== false, n2)
          i2 in o3 || (o3[i2] = n2[i2]);
        var a2 = { options: o3, methods: r2, name: e2, enable: function() {
          return o3.enabled = true, a2;
        }, disable: function() {
          return o3.enabled = false, a2;
        } };
        return a2;
      };
      return e2 && typeof e2 == "string" && (o2._defaults = n2, o2._methods = r2), o2;
    }, Se.addEventModifiers = Ee, Se.default = void 0;
    var Te = { id: "modifiers/base", before: ["actions"], install: function(t2) {
      t2.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(t2) {
      var e2 = t2.interaction;
      e2.modification = new ye.default(e2);
    }, "interactions:before-action-start": function(t2) {
      var e2 = t2.interaction.modification;
      e2.start(t2, t2.interaction.coords.start.page), t2.interaction.edges = e2.edges, e2.applyToInteraction(t2);
    }, "interactions:before-action-move": function(t2) {
      return t2.interaction.modification.setAndApply(t2);
    }, "interactions:before-action-end": function(t2) {
      return t2.interaction.modification.beforeEnd(t2);
    }, "interactions:action-start": Ee, "interactions:action-move": Ee, "interactions:action-end": Ee, "interactions:after-action-start": function(t2) {
      return t2.interaction.modification.restoreInteractionCoords(t2);
    }, "interactions:after-action-move": function(t2) {
      return t2.interaction.modification.restoreInteractionCoords(t2);
    }, "interactions:stop": function(t2) {
      return t2.interaction.modification.stop(t2);
    } } };
    Se.default = Te;
    var Me = {};
    Object.defineProperty(Me, "__esModule", { value: true }), Me.defaults = void 0, Me.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var je = {};
    function ke(t2) {
      return (ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      })(t2);
    }
    function Ie(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function De(t2, e2) {
      return (De = Object.setPrototypeOf || function(t3, e3) {
        return t3.__proto__ = e3, t3;
      })(t2, e2);
    }
    function Ae(t2, e2) {
      return !e2 || ke(e2) !== "object" && typeof e2 != "function" ? Re(t2) : e2;
    }
    function Re(t2) {
      if (t2 === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t2;
    }
    function ze(t2) {
      return (ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
        return t3.__proto__ || Object.getPrototypeOf(t3);
      })(t2);
    }
    function Ce(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    Object.defineProperty(je, "__esModule", { value: true }), je.InteractEvent = void 0;
    var Fe = function(t2) {
      !function(t3, e3) {
        if (typeof e3 != "function" && e3 !== null)
          throw new TypeError("Super expression must either be null or a function");
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && De(t3, e3);
      }(a2, t2);
      var e2, n2, r2, o2, i2 = (r2 = a2, o2 = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (t3) {
          return false;
        }
      }(), function() {
        var t3, e3 = ze(r2);
        if (o2) {
          var n3 = ze(this).constructor;
          t3 = Reflect.construct(e3, arguments, n3);
        } else
          t3 = e3.apply(this, arguments);
        return Ae(this, t3);
      });
      function a2(t3, e3, n3, r3, o3, s2, l2) {
        var u2;
        !function(t4, e4) {
          if (!(t4 instanceof e4))
            throw new TypeError("Cannot call a class as a function");
        }(this, a2), Ce(Re(u2 = i2.call(this, t3)), "target", void 0), Ce(Re(u2), "currentTarget", void 0), Ce(Re(u2), "relatedTarget", null), Ce(Re(u2), "screenX", void 0), Ce(Re(u2), "screenY", void 0), Ce(Re(u2), "button", void 0), Ce(Re(u2), "buttons", void 0), Ce(Re(u2), "ctrlKey", void 0), Ce(Re(u2), "shiftKey", void 0), Ce(Re(u2), "altKey", void 0), Ce(Re(u2), "metaKey", void 0), Ce(Re(u2), "page", void 0), Ce(Re(u2), "client", void 0), Ce(Re(u2), "delta", void 0), Ce(Re(u2), "rect", void 0), Ce(Re(u2), "x0", void 0), Ce(Re(u2), "y0", void 0), Ce(Re(u2), "t0", void 0), Ce(Re(u2), "dt", void 0), Ce(Re(u2), "duration", void 0), Ce(Re(u2), "clientX0", void 0), Ce(Re(u2), "clientY0", void 0), Ce(Re(u2), "velocity", void 0), Ce(Re(u2), "speed", void 0), Ce(Re(u2), "swipe", void 0), Ce(Re(u2), "timeStamp", void 0), Ce(Re(u2), "axes", void 0), Ce(Re(u2), "preEnd", void 0), o3 = o3 || t3.element;
        var c2 = t3.interactable, f2 = (c2 && c2.options || Me.defaults).deltaSource, d2 = (0, A.default)(c2, o3, n3), p2 = r3 === "start", v2 = r3 === "end", h2 = p2 ? Re(u2) : t3.prevEvent, g2 = p2 ? t3.coords.start : v2 ? { page: h2.page, client: h2.client, timeStamp: t3.coords.cur.timeStamp } : t3.coords.cur;
        return u2.page = (0, j.default)({}, g2.page), u2.client = (0, j.default)({}, g2.client), u2.rect = (0, j.default)({}, t3.rect), u2.timeStamp = g2.timeStamp, v2 || (u2.page.x -= d2.x, u2.page.y -= d2.y, u2.client.x -= d2.x, u2.client.y -= d2.y), u2.ctrlKey = e3.ctrlKey, u2.altKey = e3.altKey, u2.shiftKey = e3.shiftKey, u2.metaKey = e3.metaKey, u2.button = e3.button, u2.buttons = e3.buttons, u2.target = o3, u2.currentTarget = o3, u2.preEnd = s2, u2.type = l2 || n3 + (r3 || ""), u2.interactable = c2, u2.t0 = p2 ? t3.pointers[t3.pointers.length - 1].downTime : h2.t0, u2.x0 = t3.coords.start.page.x - d2.x, u2.y0 = t3.coords.start.page.y - d2.y, u2.clientX0 = t3.coords.start.client.x - d2.x, u2.clientY0 = t3.coords.start.client.y - d2.y, u2.delta = p2 || v2 ? { x: 0, y: 0 } : { x: u2[f2].x - h2[f2].x, y: u2[f2].y - h2[f2].y }, u2.dt = t3.coords.delta.timeStamp, u2.duration = u2.timeStamp - u2.t0, u2.velocity = (0, j.default)({}, t3.coords.velocity[f2]), u2.speed = (0, C.default)(u2.velocity.x, u2.velocity.y), u2.swipe = v2 || r3 === "inertiastart" ? u2.getSwipe() : null, u2;
      }
      return e2 = a2, (n2 = [{ key: "getSwipe", value: function() {
        var t3 = this._interaction;
        if (t3.prevEvent.speed < 600 || this.timeStamp - t3.prevEvent.timeStamp > 150)
          return null;
        var e3 = 180 * Math.atan2(t3.prevEvent.velocityY, t3.prevEvent.velocityX) / Math.PI;
        e3 < 0 && (e3 += 360);
        var n3 = 112.5 <= e3 && e3 < 247.5, r3 = 202.5 <= e3 && e3 < 337.5;
        return { up: r3, down: !r3 && 22.5 <= e3 && e3 < 157.5, left: n3, right: !n3 && (292.5 <= e3 || e3 < 67.5), angle: e3, speed: t3.prevEvent.speed, velocity: { x: t3.prevEvent.velocityX, y: t3.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && Ie(e2.prototype, n2), a2;
    }($.BaseEvent);
    je.InteractEvent = Fe, Object.defineProperties(Fe.prototype, { pageX: { get: function() {
      return this.page.x;
    }, set: function(t2) {
      this.page.x = t2;
    } }, pageY: { get: function() {
      return this.page.y;
    }, set: function(t2) {
      this.page.y = t2;
    } }, clientX: { get: function() {
      return this.client.x;
    }, set: function(t2) {
      this.client.x = t2;
    } }, clientY: { get: function() {
      return this.client.y;
    }, set: function(t2) {
      this.client.y = t2;
    } }, dx: { get: function() {
      return this.delta.x;
    }, set: function(t2) {
      this.delta.x = t2;
    } }, dy: { get: function() {
      return this.delta.y;
    }, set: function(t2) {
      this.delta.y = t2;
    } }, velocityX: { get: function() {
      return this.velocity.x;
    }, set: function(t2) {
      this.velocity.x = t2;
    } }, velocityY: { get: function() {
      return this.velocity.y;
    }, set: function(t2) {
      this.velocity.y = t2;
    } } });
    var Xe = {};
    function Ye(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    Object.defineProperty(Xe, "__esModule", { value: true }), Xe.PointerInfo = void 0, Xe.PointerInfo = function t2(e2, n2, r2, o2, i2) {
      !function(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }(this, t2), Ye(this, "id", void 0), Ye(this, "pointer", void 0), Ye(this, "event", void 0), Ye(this, "downTime", void 0), Ye(this, "downTarget", void 0), this.id = e2, this.pointer = n2, this.event = r2, this.downTime = o2, this.downTarget = i2;
    };
    var Be, We, Le = {};
    function Ue(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function Ve(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    Object.defineProperty(Le, "__esModule", { value: true }), Object.defineProperty(Le, "PointerInfo", { enumerable: true, get: function() {
      return Xe.PointerInfo;
    } }), Le.default = Le.Interaction = Le._ProxyMethods = Le._ProxyValues = void 0, Le._ProxyValues = Be, function(t2) {
      t2.interactable = "", t2.element = "", t2.prepared = "", t2.pointerIsDown = "", t2.pointerWasMoved = "", t2._proxy = "";
    }(Be || (Le._ProxyValues = Be = {})), Le._ProxyMethods = We, function(t2) {
      t2.start = "", t2.move = "", t2.end = "", t2.stop = "", t2.interacting = "";
    }(We || (Le._ProxyMethods = We = {}));
    var Ne = 0, qe = function() {
      function t2(e3) {
        var n3 = this, r2 = e3.pointerType, o2 = e3.scopeFire;
        !function(t3, e4) {
          if (!(t3 instanceof e4))
            throw new TypeError("Cannot call a class as a function");
        }(this, t2), Ve(this, "interactable", null), Ve(this, "element", null), Ve(this, "rect", void 0), Ve(this, "_rects", void 0), Ve(this, "edges", void 0), Ve(this, "_scopeFire", void 0), Ve(this, "prepared", { name: null, axis: null, edges: null }), Ve(this, "pointerType", void 0), Ve(this, "pointers", []), Ve(this, "downEvent", null), Ve(this, "downPointer", {}), Ve(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Ve(this, "prevEvent", null), Ve(this, "pointerIsDown", false), Ve(this, "pointerWasMoved", false), Ve(this, "_interacting", false), Ve(this, "_ending", false), Ve(this, "_stopped", true), Ve(this, "_proxy", null), Ve(this, "simulation", null), Ve(this, "doMove", (0, Yt.warnOnce)(function(t3) {
          this.move(t3);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), Ve(this, "coords", { start: B.newCoords(), prev: B.newCoords(), cur: B.newCoords(), delta: B.newCoords(), velocity: B.newCoords() }), Ve(this, "_id", Ne++), this._scopeFire = o2, this.pointerType = r2;
        var i2 = this;
        this._proxy = {};
        var a2 = function(t3) {
          Object.defineProperty(n3._proxy, t3, { get: function() {
            return i2[t3];
          } });
        };
        for (var s2 in Be)
          a2(s2);
        var l2 = function(t3) {
          Object.defineProperty(n3._proxy, t3, { value: function() {
            return i2[t3].apply(i2, arguments);
          } });
        };
        for (var u2 in We)
          l2(u2);
        this._scopeFire("interactions:new", { interaction: this });
      }
      var e2, n2;
      return e2 = t2, (n2 = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(t3, e3, n3) {
        var r2 = this.updatePointer(t3, e3, n3, true), o2 = this.pointers[r2];
        this._scopeFire("interactions:down", { pointer: t3, event: e3, eventTarget: n3, pointerIndex: r2, pointerInfo: o2, type: "down", interaction: this });
      } }, { key: "start", value: function(t3, e3, n3) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (t3.name === "gesture" ? 2 : 1) || !e3.options[t3.name].enabled) && ((0, Yt.copyAction)(this.prepared, t3), this.interactable = e3, this.element = n3, this.rect = e3.getRect(n3), this.edges = this.prepared.edges ? (0, j.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(t3, e3, n3) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(t3, e3, n3, false);
        var r2, o2, i2 = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (r2 = this.coords.cur.client.x - this.coords.start.client.x, o2 = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, C.default)(r2, o2) > this.pointerMoveTolerance);
        var a2 = this.getPointerIndex(t3), s2 = { pointer: t3, pointerIndex: a2, pointerInfo: this.pointers[a2], event: e3, type: "move", eventTarget: n3, dx: r2, dy: o2, duplicate: i2, interaction: this };
        i2 || B.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", s2), i2 || this.simulation || (this.interacting() && (s2.type = null, this.move(s2)), this.pointerWasMoved && B.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(t3) {
        t3 && t3.event || B.setZeroCoords(this.coords.delta), (t3 = (0, j.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, t3 || {})).phase = "move", this._doPhase(t3);
      } }, { key: "pointerUp", value: function(t3, e3, n3, r2) {
        var o2 = this.getPointerIndex(t3);
        o2 === -1 && (o2 = this.updatePointer(t3, e3, n3, false));
        var i2 = /cancel$/i.test(e3.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(i2), { pointer: t3, pointerIndex: o2, pointerInfo: this.pointers[o2], event: e3, eventTarget: n3, type: i2, curEventTarget: r2, interaction: this }), this.simulation || this.end(e3), this.removePointer(t3, e3);
      } }, { key: "documentBlur", value: function(t3) {
        this.end(t3), this._scopeFire("interactions:blur", { event: t3, type: "blur", interaction: this });
      } }, { key: "end", value: function(t3) {
        var e3;
        this._ending = true, t3 = t3 || this._latestPointer.event, this.interacting() && (e3 = this._doPhase({ event: t3, interaction: this, phase: "end" })), this._ending = false, e3 === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(t3) {
        var e3 = B.getPointerId(t3);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Z.findIndex(this.pointers, function(t4) {
          return t4.id === e3;
        });
      } }, { key: "getPointerInfo", value: function(t3) {
        return this.pointers[this.getPointerIndex(t3)];
      } }, { key: "updatePointer", value: function(t3, e3, n3, r2) {
        var o2 = B.getPointerId(t3), i2 = this.getPointerIndex(t3), a2 = this.pointers[i2];
        return r2 = r2 !== false && (r2 || /(down|start)$/i.test(e3.type)), a2 ? a2.pointer = t3 : (a2 = new Xe.PointerInfo(o2, t3, e3, null, null), i2 = this.pointers.length, this.pointers.push(a2)), B.setCoords(this.coords.cur, this.pointers.map(function(t4) {
          return t4.pointer;
        }), this._now()), B.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), r2 && (this.pointerIsDown = true, a2.downTime = this.coords.cur.timeStamp, a2.downTarget = n3, B.pointerExtend(this.downPointer, t3), this.interacting() || (B.copyCoords(this.coords.start, this.coords.cur), B.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = e3, this.pointerWasMoved = false)), this._updateLatestPointer(t3, e3, n3), this._scopeFire("interactions:update-pointer", { pointer: t3, event: e3, eventTarget: n3, down: r2, pointerInfo: a2, pointerIndex: i2, interaction: this }), i2;
      } }, { key: "removePointer", value: function(t3, e3) {
        var n3 = this.getPointerIndex(t3);
        if (n3 !== -1) {
          var r2 = this.pointers[n3];
          this._scopeFire("interactions:remove-pointer", { pointer: t3, event: e3, eventTarget: null, pointerIndex: n3, pointerInfo: r2, interaction: this }), this.pointers.splice(n3, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(t3, e3, n3) {
        this._latestPointer.pointer = t3, this._latestPointer.event = e3, this._latestPointer.eventTarget = n3;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(t3, e3, n3, r2) {
        return new je.InteractEvent(this, t3, this.prepared.name, e3, this.element, n3, r2);
      } }, { key: "_fireEvent", value: function(t3) {
        this.interactable.fire(t3), (!this.prevEvent || t3.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t3);
      } }, { key: "_doPhase", value: function(t3) {
        var e3 = t3.event, n3 = t3.phase, r2 = t3.preEnd, o2 = t3.type, i2 = this.rect;
        if (i2 && n3 === "move" && (k.addEdges(this.edges, i2, this.coords.delta[this.interactable.options.deltaSource]), i2.width = i2.right - i2.left, i2.height = i2.bottom - i2.top), this._scopeFire("interactions:before-action-".concat(n3), t3) === false)
          return false;
        var a2 = t3.iEvent = this._createPreparedEvent(e3, n3, r2, o2);
        return this._scopeFire("interactions:action-".concat(n3), t3), n3 === "start" && (this.prevEvent = a2), this._fireEvent(a2), this._scopeFire("interactions:after-action-".concat(n3), t3), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]) && Ue(e2.prototype, n2), t2;
    }();
    Le.Interaction = qe;
    var $e = qe;
    Le.default = $e;
    var Ge = {};
    function He(t2) {
      t2.pointerIsDown && (Qe(t2.coords.cur, t2.offset.total), t2.offset.pending.x = 0, t2.offset.pending.y = 0);
    }
    function Ke(t2) {
      Ze(t2.interaction);
    }
    function Ze(t2) {
      if (!function(t3) {
        return !(!t3.offset.pending.x && !t3.offset.pending.y);
      }(t2))
        return false;
      var e2 = t2.offset.pending;
      return Qe(t2.coords.cur, e2), Qe(t2.coords.delta, e2), k.addEdges(t2.edges, t2.rect, e2), e2.x = 0, e2.y = 0, true;
    }
    function Je(t2) {
      var e2 = t2.x, n2 = t2.y;
      this.offset.pending.x += e2, this.offset.pending.y += n2, this.offset.total.x += e2, this.offset.total.y += n2;
    }
    function Qe(t2, e2) {
      var n2 = t2.page, r2 = t2.client, o2 = e2.x, i2 = e2.y;
      n2.x += o2, n2.y += i2, r2.x += o2, r2.y += i2;
    }
    Object.defineProperty(Ge, "__esModule", { value: true }), Ge.addTotal = He, Ge.applyPending = Ze, Ge.default = void 0, Le._ProxyMethods.offsetBy = "";
    var tn = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t2) {
      t2.Interaction.prototype.offsetBy = Je;
    }, listeners: { "interactions:new": function(t2) {
      t2.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(t2) {
      return He(t2.interaction);
    }, "interactions:before-action-start": Ke, "interactions:before-action-move": Ke, "interactions:before-action-end": function(t2) {
      var e2 = t2.interaction;
      if (Ze(e2))
        return e2.move({ offset: true }), e2.end(), false;
    }, "interactions:stop": function(t2) {
      var e2 = t2.interaction;
      e2.offset.total.x = 0, e2.offset.total.y = 0, e2.offset.pending.x = 0, e2.offset.pending.y = 0;
    } } };
    Ge.default = tn;
    var en = {};
    function nn(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function rn(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    Object.defineProperty(en, "__esModule", { value: true }), en.default = en.InertiaState = void 0;
    var on = function() {
      function t2(e3) {
        !function(t3, e4) {
          if (!(t3 instanceof e4))
            throw new TypeError("Cannot call a class as a function");
        }(this, t2), rn(this, "active", false), rn(this, "isModified", false), rn(this, "smoothEnd", false), rn(this, "allowResume", false), rn(this, "modification", void 0), rn(this, "modifierCount", 0), rn(this, "modifierArg", void 0), rn(this, "startCoords", void 0), rn(this, "t0", 0), rn(this, "v0", 0), rn(this, "te", 0), rn(this, "targetOffset", void 0), rn(this, "modifiedOffset", void 0), rn(this, "currentOffset", void 0), rn(this, "lambda_v0", 0), rn(this, "one_ve_v0", 0), rn(this, "timeout", void 0), rn(this, "interaction", void 0), this.interaction = e3;
      }
      var e2, n2;
      return e2 = t2, (n2 = [{ key: "start", value: function(t3) {
        var e3 = this.interaction, n3 = an(e3);
        if (!n3 || !n3.enabled)
          return false;
        var r2 = e3.coords.velocity.client, o2 = (0, C.default)(r2.x, r2.y), i2 = this.modification || (this.modification = new ye.default(e3));
        if (i2.copyFrom(e3.modification), this.t0 = e3._now(), this.allowResume = n3.allowResume, this.v0 = o2, this.currentOffset = { x: 0, y: 0 }, this.startCoords = e3.coords.cur.page, this.modifierArg = i2.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - e3.coords.cur.timeStamp < 50 && o2 > n3.minSpeed && o2 > n3.endSpeed)
          this.startInertia();
        else {
          if (i2.result = i2.setAll(this.modifierArg), !i2.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return e3.modification.result.rect = null, e3.offsetBy(this.targetOffset), e3._doPhase({ interaction: e3, event: t3, phase: "inertiastart" }), e3.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), e3.modification.result.rect = null, this.active = true, e3.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var t3 = this, e3 = this.interaction.coords.velocity.client, n3 = an(this.interaction), r2 = n3.resistance, o2 = -Math.log(n3.endSpeed / this.v0) / r2;
        this.targetOffset = { x: (e3.x - o2) / r2, y: (e3.y - o2) / r2 }, this.te = o2, this.lambda_v0 = r2 / this.v0, this.one_ve_v0 = 1 - n3.endSpeed / this.v0;
        var i2 = this.modification, a2 = this.modifierArg;
        a2.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, i2.result = i2.setAll(a2), i2.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + i2.result.delta.x, y: this.targetOffset.y + i2.result.delta.y }), this.onNextFrame(function() {
          return t3.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var t3 = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return t3.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(t3) {
        var e3 = this;
        this.timeout = jt.default.request(function() {
          e3.active && t3();
        });
      } }, { key: "inertiaTick", value: function() {
        var t3, e3, n3, r2, o2, i2 = this, a2 = this.interaction, s2 = an(a2).resistance, l2 = (a2._now() - this.t0) / 1e3;
        if (l2 < this.te) {
          var u2, c2 = 1 - (Math.exp(-s2 * l2) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (t3 = this.targetOffset.x, e3 = this.targetOffset.y, n3 = this.modifiedOffset.x, r2 = this.modifiedOffset.y, u2 = { x: sn(o2 = c2, 0, t3, n3), y: sn(o2, 0, e3, r2) }) : u2 = { x: this.targetOffset.x * c2, y: this.targetOffset.y * c2 };
          var f2 = { x: u2.x - this.currentOffset.x, y: u2.y - this.currentOffset.y };
          this.currentOffset.x += f2.x, this.currentOffset.y += f2.y, a2.offsetBy(f2), a2.move(), this.onNextFrame(function() {
            return i2.inertiaTick();
          });
        } else
          a2.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var t3 = this, e3 = this.interaction, n3 = e3._now() - this.t0, r2 = an(e3).smoothEndDuration;
        if (n3 < r2) {
          var o2 = { x: ln(n3, 0, this.targetOffset.x, r2), y: ln(n3, 0, this.targetOffset.y, r2) }, i2 = { x: o2.x - this.currentOffset.x, y: o2.y - this.currentOffset.y };
          this.currentOffset.x += i2.x, this.currentOffset.y += i2.y, e3.offsetBy(i2), e3.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return t3.smoothEndTick();
          });
        } else
          e3.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(t3) {
        var e3 = t3.pointer, n3 = t3.event, r2 = t3.eventTarget, o2 = this.interaction;
        o2.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), o2.updatePointer(e3, n3, r2, true), o2._doPhase({ interaction: o2, event: n3, phase: "resume" }), (0, B.copyCoords)(o2.coords.prev, o2.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, jt.default.cancel(this.timeout);
      } }]) && nn(e2.prototype, n2), t2;
    }();
    function an(t2) {
      var e2 = t2.interactable, n2 = t2.prepared;
      return e2 && e2.options && n2.name && e2.options[n2.name].inertia;
    }
    function sn(t2, e2, n2, r2) {
      var o2 = 1 - t2;
      return o2 * o2 * e2 + 2 * o2 * t2 * n2 + t2 * t2 * r2;
    }
    function ln(t2, e2, n2, r2) {
      return -n2 * (t2 /= r2) * (t2 - 2) + e2;
    }
    en.InertiaState = on;
    var un = { id: "inertia", before: ["modifiers", "actions"], install: function(t2) {
      var e2 = t2.defaults;
      t2.usePlugin(Ge.default), t2.usePlugin(Se.default), t2.actions.phases.inertiastart = true, t2.actions.phases.resume = true, e2.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(t2) {
      var e2 = t2.interaction;
      e2.inertia = new on(e2);
    }, "interactions:before-action-end": function(t2) {
      var e2 = t2.interaction, n2 = t2.event;
      return (!e2._interacting || e2.simulation || !e2.inertia.start(n2)) && null;
    }, "interactions:down": function(t2) {
      var e2 = t2.interaction, n2 = t2.eventTarget, r2 = e2.inertia;
      if (r2.active)
        for (var o2 = n2; i.default.element(o2); ) {
          if (o2 === e2.element) {
            r2.resume(t2);
            break;
          }
          o2 = _.parentNode(o2);
        }
    }, "interactions:stop": function(t2) {
      var e2 = t2.interaction.inertia;
      e2.active && e2.stop();
    }, "interactions:before-action-resume": function(t2) {
      var e2 = t2.interaction.modification;
      e2.stop(t2), e2.start(t2, t2.interaction.coords.cur.page), e2.applyToInteraction(t2);
    }, "interactions:before-action-inertiastart": function(t2) {
      return t2.interaction.modification.setAndApply(t2);
    }, "interactions:action-resume": Se.addEventModifiers, "interactions:action-inertiastart": Se.addEventModifiers, "interactions:after-action-inertiastart": function(t2) {
      return t2.interaction.modification.restoreInteractionCoords(t2);
    }, "interactions:after-action-resume": function(t2) {
      return t2.interaction.modification.restoreInteractionCoords(t2);
    } } };
    en.default = un;
    var cn = {};
    function fn(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function dn(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    function pn(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        if (t2.immediatePropagationStopped)
          break;
        r2(t2);
      }
    }
    Object.defineProperty(cn, "__esModule", { value: true }), cn.Eventable = void 0;
    var vn = function() {
      function t2(e3) {
        !function(t3, e4) {
          if (!(t3 instanceof e4))
            throw new TypeError("Cannot call a class as a function");
        }(this, t2), dn(this, "options", void 0), dn(this, "types", {}), dn(this, "propagationStopped", false), dn(this, "immediatePropagationStopped", false), dn(this, "global", void 0), this.options = (0, j.default)({}, e3 || {});
      }
      var e2, n2;
      return e2 = t2, (n2 = [{ key: "fire", value: function(t3) {
        var e3, n3 = this.global;
        (e3 = this.types[t3.type]) && pn(t3, e3), !t3.propagationStopped && n3 && (e3 = n3[t3.type]) && pn(t3, e3);
      } }, { key: "on", value: function(t3, e3) {
        var n3 = (0, R.default)(t3, e3);
        for (t3 in n3)
          this.types[t3] = Z.merge(this.types[t3] || [], n3[t3]);
      } }, { key: "off", value: function(t3, e3) {
        var n3 = (0, R.default)(t3, e3);
        for (t3 in n3) {
          var r2 = this.types[t3];
          if (r2 && r2.length)
            for (var o2 = 0; o2 < n3[t3].length; o2++) {
              var i2 = n3[t3][o2], a2 = r2.indexOf(i2);
              a2 !== -1 && r2.splice(a2, 1);
            }
        }
      } }, { key: "getRect", value: function(t3) {
        return null;
      } }]) && fn(e2.prototype, n2), t2;
    }();
    cn.Eventable = vn;
    var hn = {};
    Object.defineProperty(hn, "__esModule", { value: true }), hn.default = function(t2, e2) {
      if (e2.phaselessTypes[t2])
        return true;
      for (var n2 in e2.map)
        if (t2.indexOf(n2) === 0 && t2.substr(n2.length) in e2.phases)
          return true;
      return false;
    };
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.createInteractStatic = function(t2) {
      var e2 = function e3(n2, r2) {
        var o2 = t2.interactables.get(n2, r2);
        return o2 || ((o2 = t2.interactables.new(n2, r2)).events.global = e3.globalEvents), o2;
      };
      return e2.getPointerAverage = B.pointerAverage, e2.getTouchBBox = B.touchBBox, e2.getTouchDistance = B.touchDistance, e2.getTouchAngle = B.touchAngle, e2.getElementRect = _.getElementRect, e2.getElementClientRect = _.getElementClientRect, e2.matchesSelector = _.matchesSelector, e2.closest = _.closest, e2.globalEvents = {}, e2.version = "1.10.11", e2.scope = t2, e2.use = function(t3, e3) {
        return this.scope.usePlugin(t3, e3), this;
      }, e2.isSet = function(t3, e3) {
        return !!this.scope.interactables.get(t3, e3 && e3.context);
      }, e2.on = (0, Yt.warnOnce)(function(t3, e3, n2) {
        if (i.default.string(t3) && t3.search(" ") !== -1 && (t3 = t3.trim().split(/ +/)), i.default.array(t3)) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            this.on(o2, e3, n2);
          }
          return this;
        }
        if (i.default.object(t3)) {
          for (var a2 in t3)
            this.on(a2, t3[a2], e3);
          return this;
        }
        return (0, hn.default)(t3, this.scope.actions) ? this.globalEvents[t3] ? this.globalEvents[t3].push(e3) : this.globalEvents[t3] = [e3] : this.scope.events.add(this.scope.document, t3, e3, { options: n2 }), this;
      }, "The interact.on() method is being deprecated"), e2.off = (0, Yt.warnOnce)(function(t3, e3, n2) {
        if (i.default.string(t3) && t3.search(" ") !== -1 && (t3 = t3.trim().split(/ +/)), i.default.array(t3)) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            this.off(o2, e3, n2);
          }
          return this;
        }
        if (i.default.object(t3)) {
          for (var a2 in t3)
            this.off(a2, t3[a2], e3);
          return this;
        }
        var s2;
        return (0, hn.default)(t3, this.scope.actions) ? t3 in this.globalEvents && (s2 = this.globalEvents[t3].indexOf(e3)) !== -1 && this.globalEvents[t3].splice(s2, 1) : this.scope.events.remove(this.scope.document, t3, e3, n2), this;
      }, "The interact.off() method is being deprecated"), e2.debug = function() {
        return this.scope;
      }, e2.supportsTouch = function() {
        return b.default.supportsTouch;
      }, e2.supportsPointerEvent = function() {
        return b.default.supportsPointerEvent;
      }, e2.stop = function() {
        for (var t3 = 0; t3 < this.scope.interactions.list.length; t3++)
          this.scope.interactions.list[t3].stop();
        return this;
      }, e2.pointerMoveTolerance = function(t3) {
        return i.default.number(t3) ? (this.scope.interactions.pointerMoveTolerance = t3, this) : this.scope.interactions.pointerMoveTolerance;
      }, e2.addDocument = function(t3, e3) {
        this.scope.addDocument(t3, e3);
      }, e2.removeDocument = function(t3) {
        this.scope.removeDocument(t3);
      }, e2;
    };
    var yn = {};
    function mn(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function bn(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    Object.defineProperty(yn, "__esModule", { value: true }), yn.Interactable = void 0;
    var xn = function() {
      function t2(n3, r3, o2, i2) {
        !function(t3, e2) {
          if (!(t3 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }(this, t2), bn(this, "options", void 0), bn(this, "_actions", void 0), bn(this, "target", void 0), bn(this, "events", new cn.Eventable()), bn(this, "_context", void 0), bn(this, "_win", void 0), bn(this, "_doc", void 0), bn(this, "_scopeEvents", void 0), bn(this, "_rectChecker", void 0), this._actions = r3.actions, this.target = n3, this._context = r3.context || o2, this._win = (0, e.getWindow)((0, _.trySelector)(n3) ? this._context : n3), this._doc = this._win.document, this._scopeEvents = i2, this.set(r3);
      }
      var n2, r2;
      return n2 = t2, (r2 = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(t3, e2) {
        return i.default.func(e2.onstart) && this.on("".concat(t3, "start"), e2.onstart), i.default.func(e2.onmove) && this.on("".concat(t3, "move"), e2.onmove), i.default.func(e2.onend) && this.on("".concat(t3, "end"), e2.onend), i.default.func(e2.oninertiastart) && this.on("".concat(t3, "inertiastart"), e2.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(t3, e2, n3) {
        (i.default.array(e2) || i.default.object(e2)) && this.off(t3, e2), (i.default.array(n3) || i.default.object(n3)) && this.on(t3, n3);
      } }, { key: "setPerAction", value: function(t3, e2) {
        var n3 = this._defaults;
        for (var r3 in e2) {
          var o2 = r3, a2 = this.options[t3], s2 = e2[o2];
          o2 === "listeners" && this.updatePerActionListeners(t3, a2.listeners, s2), i.default.array(s2) ? a2[o2] = Z.from(s2) : i.default.plainObject(s2) ? (a2[o2] = (0, j.default)(a2[o2] || {}, (0, ge.default)(s2)), i.default.object(n3.perAction[o2]) && "enabled" in n3.perAction[o2] && (a2[o2].enabled = s2.enabled !== false)) : i.default.bool(s2) && i.default.object(n3.perAction[o2]) ? a2[o2].enabled = s2 : a2[o2] = s2;
        }
      } }, { key: "getRect", value: function(t3) {
        return t3 = t3 || (i.default.element(this.target) ? this.target : null), i.default.string(this.target) && (t3 = t3 || this._context.querySelector(this.target)), (0, _.getElementRect)(t3);
      } }, { key: "rectChecker", value: function(t3) {
        var e2 = this;
        return i.default.func(t3) ? (this._rectChecker = t3, this.getRect = function(t4) {
          var n3 = (0, j.default)({}, e2._rectChecker(t4));
          return "width" in n3 || (n3.width = n3.right - n3.left, n3.height = n3.bottom - n3.top), n3;
        }, this) : t3 === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(t3, e2) {
        if ((0, _.trySelector)(e2) || i.default.object(e2)) {
          for (var n3 in this.options[t3] = e2, this._actions.map)
            this.options[n3][t3] = e2;
          return this;
        }
        return this.options[t3];
      } }, { key: "origin", value: function(t3) {
        return this._backCompatOption("origin", t3);
      } }, { key: "deltaSource", value: function(t3) {
        return t3 === "page" || t3 === "client" ? (this.options.deltaSource = t3, this) : this.options.deltaSource;
      } }, { key: "context", value: function() {
        return this._context;
      } }, { key: "inContext", value: function(t3) {
        return this._context === t3.ownerDocument || (0, _.nodeContains)(this._context, t3);
      } }, { key: "testIgnoreAllow", value: function(t3, e2, n3) {
        return !this.testIgnore(t3.ignoreFrom, e2, n3) && this.testAllow(t3.allowFrom, e2, n3);
      } }, { key: "testAllow", value: function(t3, e2, n3) {
        return !t3 || !!i.default.element(n3) && (i.default.string(t3) ? (0, _.matchesUpTo)(n3, t3, e2) : !!i.default.element(t3) && (0, _.nodeContains)(t3, n3));
      } }, { key: "testIgnore", value: function(t3, e2, n3) {
        return !(!t3 || !i.default.element(n3)) && (i.default.string(t3) ? (0, _.matchesUpTo)(n3, t3, e2) : !!i.default.element(t3) && (0, _.nodeContains)(t3, n3));
      } }, { key: "fire", value: function(t3) {
        return this.events.fire(t3), this;
      } }, { key: "_onOff", value: function(t3, e2, n3, r3) {
        i.default.object(e2) && !i.default.array(e2) && (r3 = n3, n3 = null);
        var o2 = t3 === "on" ? "add" : "remove", a2 = (0, R.default)(e2, n3);
        for (var s2 in a2) {
          s2 === "wheel" && (s2 = b.default.wheelEvent);
          for (var l2 = 0; l2 < a2[s2].length; l2++) {
            var u2 = a2[s2][l2];
            (0, hn.default)(s2, this._actions) ? this.events[t3](s2, u2) : i.default.string(this.target) ? this._scopeEvents["".concat(o2, "Delegate")](this.target, this._context, s2, u2, r3) : this._scopeEvents[o2](this.target, s2, u2, r3);
          }
        }
        return this;
      } }, { key: "on", value: function(t3, e2, n3) {
        return this._onOff("on", t3, e2, n3);
      } }, { key: "off", value: function(t3, e2, n3) {
        return this._onOff("off", t3, e2, n3);
      } }, { key: "set", value: function(t3) {
        var e2 = this._defaults;
        for (var n3 in i.default.object(t3) || (t3 = {}), this.options = (0, ge.default)(e2.base), this._actions.methodDict) {
          var r3 = n3, o2 = this._actions.methodDict[r3];
          this.options[r3] = {}, this.setPerAction(r3, (0, j.default)((0, j.default)({}, e2.perAction), e2.actions[r3])), this[o2](t3[r3]);
        }
        for (var a2 in t3)
          i.default.func(this[a2]) && this[a2](t3[a2]);
        return this;
      } }, { key: "unset", value: function() {
        if (i.default.string(this.target))
          for (var t3 in this._scopeEvents.delegatedEvents)
            for (var e2 = this._scopeEvents.delegatedEvents[t3], n3 = e2.length - 1; n3 >= 0; n3--) {
              var r3 = e2[n3], o2 = r3.selector, a2 = r3.context, s2 = r3.listeners;
              o2 === this.target && a2 === this._context && e2.splice(n3, 1);
              for (var l2 = s2.length - 1; l2 >= 0; l2--)
                this._scopeEvents.removeDelegate(this.target, this._context, t3, s2[l2][0], s2[l2][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && mn(n2.prototype, r2), t2;
    }();
    yn.Interactable = xn;
    var wn = {};
    function _n(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function Pn(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    Object.defineProperty(wn, "__esModule", { value: true }), wn.InteractableSet = void 0;
    var On = function() {
      function t2(e3) {
        var n3 = this;
        !function(t3, e4) {
          if (!(t3 instanceof e4))
            throw new TypeError("Cannot call a class as a function");
        }(this, t2), Pn(this, "list", []), Pn(this, "selectorMap", {}), Pn(this, "scope", void 0), this.scope = e3, e3.addListeners({ "interactable:unset": function(t3) {
          var e4 = t3.interactable, r2 = e4.target, o2 = e4._context, a2 = i.default.string(r2) ? n3.selectorMap[r2] : r2[n3.scope.id], s2 = Z.findIndex(a2, function(t4) {
            return t4.context === o2;
          });
          a2[s2] && (a2[s2].context = null, a2[s2].interactable = null), a2.splice(s2, 1);
        } });
      }
      var e2, n2;
      return e2 = t2, (n2 = [{ key: "new", value: function(t3, e3) {
        e3 = (0, j.default)(e3 || {}, { actions: this.scope.actions });
        var n3 = new this.scope.Interactable(t3, e3, this.scope.document, this.scope.events), r2 = { context: n3._context, interactable: n3 };
        return this.scope.addDocument(n3._doc), this.list.push(n3), i.default.string(t3) ? (this.selectorMap[t3] || (this.selectorMap[t3] = []), this.selectorMap[t3].push(r2)) : (n3.target[this.scope.id] || Object.defineProperty(t3, this.scope.id, { value: [], configurable: true }), t3[this.scope.id].push(r2)), this.scope.fire("interactable:new", { target: t3, options: e3, interactable: n3, win: this.scope._win }), n3;
      } }, { key: "get", value: function(t3, e3) {
        var n3 = e3 && e3.context || this.scope.document, r2 = i.default.string(t3), o2 = r2 ? this.selectorMap[t3] : t3[this.scope.id];
        if (!o2)
          return null;
        var a2 = Z.find(o2, function(e4) {
          return e4.context === n3 && (r2 || e4.interactable.inContext(t3));
        });
        return a2 && a2.interactable;
      } }, { key: "forEachMatch", value: function(t3, e3) {
        for (var n3 = 0; n3 < this.list.length; n3++) {
          var r2 = this.list[n3], o2 = void 0;
          if ((i.default.string(r2.target) ? i.default.element(t3) && _.matchesSelector(t3, r2.target) : t3 === r2.target) && r2.inContext(t3) && (o2 = e3(r2)), o2 !== void 0)
            return o2;
        }
      } }]) && _n(e2.prototype, n2), t2;
    }();
    wn.InteractableSet = On;
    var Sn = {};
    function En(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function Tn(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    function Mn(t2, e2) {
      return function(t3) {
        if (Array.isArray(t3))
          return t3;
      }(t2) || function(t3, e3) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3)) {
          var n2 = [], r2 = true, o2 = false, i2 = void 0;
          try {
            for (var a2, s2 = t3[Symbol.iterator](); !(r2 = (a2 = s2.next()).done) && (n2.push(a2.value), !e3 || n2.length !== e3); r2 = true)
              ;
          } catch (t4) {
            o2 = true, i2 = t4;
          } finally {
            try {
              r2 || s2.return == null || s2.return();
            } finally {
              if (o2)
                throw i2;
            }
          }
          return n2;
        }
      }(t2, e2) || function(t3, e3) {
        if (t3) {
          if (typeof t3 == "string")
            return jn(t3, e3);
          var n2 = Object.prototype.toString.call(t3).slice(8, -1);
          return n2 === "Object" && t3.constructor && (n2 = t3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? jn(t3, e3) : void 0;
        }
      }(t2, e2) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function jn(t2, e2) {
      (e2 == null || e2 > t2.length) && (e2 = t2.length);
      for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
        r2[n2] = t2[n2];
      return r2;
    }
    Object.defineProperty(Sn, "__esModule", { value: true }), Sn.default = void 0;
    var kn = function() {
      function t2(e3) {
        !function(t3, e4) {
          if (!(t3 instanceof e4))
            throw new TypeError("Cannot call a class as a function");
        }(this, t2), Tn(this, "currentTarget", void 0), Tn(this, "originalEvent", void 0), Tn(this, "type", void 0), this.originalEvent = e3, (0, F.default)(this, e3);
      }
      var e2, n2;
      return e2 = t2, (n2 = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && En(e2.prototype, n2), t2;
    }();
    function In(t2) {
      if (!i.default.object(t2))
        return { capture: !!t2, passive: false };
      var e2 = (0, j.default)({}, t2);
      return e2.capture = !!t2.capture, e2.passive = !!t2.passive, e2;
    }
    var Dn = { id: "events", install: function(t2) {
      var e2, n2 = [], r2 = {}, o2 = [], a2 = { add: s2, remove: l2, addDelegate: function(t3, e3, n3, i2, a3) {
        var l3 = In(a3);
        if (!r2[n3]) {
          r2[n3] = [];
          for (var f2 = 0; f2 < o2.length; f2++) {
            var d2 = o2[f2];
            s2(d2, n3, u2), s2(d2, n3, c2, true);
          }
        }
        var p2 = r2[n3], v2 = Z.find(p2, function(n4) {
          return n4.selector === t3 && n4.context === e3;
        });
        v2 || (v2 = { selector: t3, context: e3, listeners: [] }, p2.push(v2)), v2.listeners.push([i2, l3]);
      }, removeDelegate: function(t3, e3, n3, o3, i2) {
        var a3, s3 = In(i2), f2 = r2[n3], d2 = false;
        if (f2)
          for (a3 = f2.length - 1; a3 >= 0; a3--) {
            var p2 = f2[a3];
            if (p2.selector === t3 && p2.context === e3) {
              for (var v2 = p2.listeners, h2 = v2.length - 1; h2 >= 0; h2--) {
                var g2 = Mn(v2[h2], 2), y2 = g2[0], m2 = g2[1], b2 = m2.capture, x2 = m2.passive;
                if (y2 === o3 && b2 === s3.capture && x2 === s3.passive) {
                  v2.splice(h2, 1), v2.length || (f2.splice(a3, 1), l2(e3, n3, u2), l2(e3, n3, c2, true)), d2 = true;
                  break;
                }
              }
              if (d2)
                break;
            }
          }
      }, delegateListener: u2, delegateUseCapture: c2, delegatedEvents: r2, documents: o2, targets: n2, supportsOptions: false, supportsPassive: false };
      function s2(t3, e3, r3, o3) {
        var i2 = In(o3), s3 = Z.find(n2, function(e4) {
          return e4.eventTarget === t3;
        });
        s3 || (s3 = { eventTarget: t3, events: {} }, n2.push(s3)), s3.events[e3] || (s3.events[e3] = []), t3.addEventListener && !Z.contains(s3.events[e3], r3) && (t3.addEventListener(e3, r3, a2.supportsOptions ? i2 : i2.capture), s3.events[e3].push(r3));
      }
      function l2(t3, e3, r3, o3) {
        var i2 = In(o3), s3 = Z.findIndex(n2, function(e4) {
          return e4.eventTarget === t3;
        }), u3 = n2[s3];
        if (u3 && u3.events)
          if (e3 !== "all") {
            var c3 = false, f2 = u3.events[e3];
            if (f2) {
              if (r3 === "all") {
                for (var d2 = f2.length - 1; d2 >= 0; d2--)
                  l2(t3, e3, f2[d2], i2);
                return;
              }
              for (var p2 = 0; p2 < f2.length; p2++)
                if (f2[p2] === r3) {
                  t3.removeEventListener(e3, r3, a2.supportsOptions ? i2 : i2.capture), f2.splice(p2, 1), f2.length === 0 && (delete u3.events[e3], c3 = true);
                  break;
                }
            }
            c3 && !Object.keys(u3.events).length && n2.splice(s3, 1);
          } else
            for (e3 in u3.events)
              u3.events.hasOwnProperty(e3) && l2(t3, e3, "all");
      }
      function u2(t3, e3) {
        for (var n3 = In(e3), o3 = new kn(t3), a3 = r2[t3.type], s3 = Mn(B.getEventTargets(t3), 1)[0], l3 = s3; i.default.element(l3); ) {
          for (var u3 = 0; u3 < a3.length; u3++) {
            var c3 = a3[u3], f2 = c3.selector, d2 = c3.context;
            if (_.matchesSelector(l3, f2) && _.nodeContains(d2, s3) && _.nodeContains(d2, l3)) {
              var p2 = c3.listeners;
              o3.currentTarget = l3;
              for (var v2 = 0; v2 < p2.length; v2++) {
                var h2 = Mn(p2[v2], 2), g2 = h2[0], y2 = h2[1], m2 = y2.capture, b2 = y2.passive;
                m2 === n3.capture && b2 === n3.passive && g2(o3);
              }
            }
          }
          l3 = _.parentNode(l3);
        }
      }
      function c2(t3) {
        return u2(t3, true);
      }
      return (e2 = t2.document) == null || e2.createElement("div").addEventListener("test", null, { get capture() {
        return a2.supportsOptions = true;
      }, get passive() {
        return a2.supportsPassive = true;
      } }), t2.events = a2, a2;
    } };
    Sn.default = Dn;
    var An = {};
    Object.defineProperty(An, "__esModule", { value: true }), An.default = void 0;
    var Rn = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t2) {
      for (var e2 = 0; e2 < Rn.methodOrder.length; e2++) {
        var n2;
        n2 = Rn.methodOrder[e2];
        var r2 = Rn[n2](t2);
        if (r2)
          return r2;
      }
      return null;
    }, simulationResume: function(t2) {
      var e2 = t2.pointerType, n2 = t2.eventType, r2 = t2.eventTarget, o2 = t2.scope;
      if (!/down|start/i.test(n2))
        return null;
      for (var i2 = 0; i2 < o2.interactions.list.length; i2++) {
        var a2 = o2.interactions.list[i2], s2 = r2;
        if (a2.simulation && a2.simulation.allowResume && a2.pointerType === e2)
          for (; s2; ) {
            if (s2 === a2.element)
              return a2;
            s2 = _.parentNode(s2);
          }
      }
      return null;
    }, mouseOrPen: function(t2) {
      var e2, n2 = t2.pointerId, r2 = t2.pointerType, o2 = t2.eventType, i2 = t2.scope;
      if (r2 !== "mouse" && r2 !== "pen")
        return null;
      for (var a2 = 0; a2 < i2.interactions.list.length; a2++) {
        var s2 = i2.interactions.list[a2];
        if (s2.pointerType === r2) {
          if (s2.simulation && !zn(s2, n2))
            continue;
          if (s2.interacting())
            return s2;
          e2 || (e2 = s2);
        }
      }
      if (e2)
        return e2;
      for (var l2 = 0; l2 < i2.interactions.list.length; l2++) {
        var u2 = i2.interactions.list[l2];
        if (!(u2.pointerType !== r2 || /down/i.test(o2) && u2.simulation))
          return u2;
      }
      return null;
    }, hasPointer: function(t2) {
      for (var e2 = t2.pointerId, n2 = t2.scope, r2 = 0; r2 < n2.interactions.list.length; r2++) {
        var o2 = n2.interactions.list[r2];
        if (zn(o2, e2))
          return o2;
      }
      return null;
    }, idle: function(t2) {
      for (var e2 = t2.pointerType, n2 = t2.scope, r2 = 0; r2 < n2.interactions.list.length; r2++) {
        var o2 = n2.interactions.list[r2];
        if (o2.pointers.length === 1) {
          var i2 = o2.interactable;
          if (i2 && (!i2.options.gesture || !i2.options.gesture.enabled))
            continue;
        } else if (o2.pointers.length >= 2)
          continue;
        if (!o2.interacting() && e2 === o2.pointerType)
          return o2;
      }
      return null;
    } };
    function zn(t2, e2) {
      return t2.pointers.some(function(t3) {
        return t3.id === e2;
      });
    }
    var Cn = Rn;
    An.default = Cn;
    var Fn = {};
    function Xn(t2) {
      return (Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      })(t2);
    }
    function Yn(t2, e2) {
      return function(t3) {
        if (Array.isArray(t3))
          return t3;
      }(t2) || function(t3, e3) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3)) {
          var n2 = [], r2 = true, o2 = false, i2 = void 0;
          try {
            for (var a2, s2 = t3[Symbol.iterator](); !(r2 = (a2 = s2.next()).done) && (n2.push(a2.value), !e3 || n2.length !== e3); r2 = true)
              ;
          } catch (t4) {
            o2 = true, i2 = t4;
          } finally {
            try {
              r2 || s2.return == null || s2.return();
            } finally {
              if (o2)
                throw i2;
            }
          }
          return n2;
        }
      }(t2, e2) || function(t3, e3) {
        if (t3) {
          if (typeof t3 == "string")
            return Bn(t3, e3);
          var n2 = Object.prototype.toString.call(t3).slice(8, -1);
          return n2 === "Object" && t3.constructor && (n2 = t3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Bn(t3, e3) : void 0;
        }
      }(t2, e2) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function Bn(t2, e2) {
      (e2 == null || e2 > t2.length) && (e2 = t2.length);
      for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
        r2[n2] = t2[n2];
      return r2;
    }
    function Wn(t2, e2) {
      if (!(t2 instanceof e2))
        throw new TypeError("Cannot call a class as a function");
    }
    function Ln(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function Un(t2, e2) {
      return (Un = Object.setPrototypeOf || function(t3, e3) {
        return t3.__proto__ = e3, t3;
      })(t2, e2);
    }
    function Vn(t2, e2) {
      return !e2 || Xn(e2) !== "object" && typeof e2 != "function" ? function(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }(t2) : e2;
    }
    function Nn(t2) {
      return (Nn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
        return t3.__proto__ || Object.getPrototypeOf(t3);
      })(t2);
    }
    Object.defineProperty(Fn, "__esModule", { value: true }), Fn.default = void 0;
    var qn = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function $n(t2, e2) {
      return function(n2) {
        var r2 = e2.interactions.list, o2 = B.getPointerType(n2), i2 = Yn(B.getEventTargets(n2), 2), a2 = i2[0], s2 = i2[1], l2 = [];
        if (/^touch/.test(n2.type)) {
          e2.prevTouchTime = e2.now();
          for (var u2 = 0; u2 < n2.changedTouches.length; u2++) {
            var c2 = n2.changedTouches[u2], f2 = { pointer: c2, pointerId: B.getPointerId(c2), pointerType: o2, eventType: n2.type, eventTarget: a2, curEventTarget: s2, scope: e2 }, d2 = Gn(f2);
            l2.push([f2.pointer, f2.eventTarget, f2.curEventTarget, d2]);
          }
        } else {
          var p2 = false;
          if (!b.default.supportsPointerEvent && /mouse/.test(n2.type)) {
            for (var v2 = 0; v2 < r2.length && !p2; v2++)
              p2 = r2[v2].pointerType !== "mouse" && r2[v2].pointerIsDown;
            p2 = p2 || e2.now() - e2.prevTouchTime < 500 || n2.timeStamp === 0;
          }
          if (!p2) {
            var h2 = { pointer: n2, pointerId: B.getPointerId(n2), pointerType: o2, eventType: n2.type, curEventTarget: s2, eventTarget: a2, scope: e2 }, g2 = Gn(h2);
            l2.push([h2.pointer, h2.eventTarget, h2.curEventTarget, g2]);
          }
        }
        for (var y2 = 0; y2 < l2.length; y2++) {
          var m2 = Yn(l2[y2], 4), x2 = m2[0], w2 = m2[1], _2 = m2[2];
          m2[3][t2](x2, n2, w2, _2);
        }
      };
    }
    function Gn(t2) {
      var e2 = t2.pointerType, n2 = t2.scope, r2 = { interaction: An.default.search(t2), searchDetails: t2 };
      return n2.fire("interactions:find", r2), r2.interaction || n2.interactions.new({ pointerType: e2 });
    }
    function Hn(t2, e2) {
      var n2 = t2.doc, r2 = t2.scope, o2 = t2.options, i2 = r2.interactions.docEvents, a2 = r2.events, s2 = a2[e2];
      for (var l2 in r2.browser.isIOS && !o2.events && (o2.events = { passive: false }), a2.delegatedEvents)
        s2(n2, l2, a2.delegateListener), s2(n2, l2, a2.delegateUseCapture, true);
      for (var u2 = o2 && o2.events, c2 = 0; c2 < i2.length; c2++) {
        var f2 = i2[c2];
        s2(n2, f2.type, f2.listener, u2);
      }
    }
    var Kn = { id: "core/interactions", install: function(t2) {
      for (var e2 = {}, n2 = 0; n2 < qn.length; n2++) {
        var r2 = qn[n2];
        e2[r2] = $n(r2, t2);
      }
      var o2, i2 = b.default.pEventTypes;
      function a2() {
        for (var e3 = 0; e3 < t2.interactions.list.length; e3++) {
          var n3 = t2.interactions.list[e3];
          if (n3.pointerIsDown && n3.pointerType === "touch" && !n3._interacting)
            for (var r3 = function() {
              var e4 = n3.pointers[o3];
              t2.documents.some(function(t3) {
                var n4 = t3.doc;
                return (0, _.nodeContains)(n4, e4.downTarget);
              }) || n3.removePointer(e4.pointer, e4.event);
            }, o3 = 0; o3 < n3.pointers.length; o3++)
              r3();
        }
      }
      (o2 = h.default.PointerEvent ? [{ type: i2.down, listener: a2 }, { type: i2.down, listener: e2.pointerDown }, { type: i2.move, listener: e2.pointerMove }, { type: i2.up, listener: e2.pointerUp }, { type: i2.cancel, listener: e2.pointerUp }] : [{ type: "mousedown", listener: e2.pointerDown }, { type: "mousemove", listener: e2.pointerMove }, { type: "mouseup", listener: e2.pointerUp }, { type: "touchstart", listener: a2 }, { type: "touchstart", listener: e2.pointerDown }, { type: "touchmove", listener: e2.pointerMove }, { type: "touchend", listener: e2.pointerUp }, { type: "touchcancel", listener: e2.pointerUp }]).push({ type: "blur", listener: function(e3) {
        for (var n3 = 0; n3 < t2.interactions.list.length; n3++)
          t2.interactions.list[n3].documentBlur(e3);
      } }), t2.prevTouchTime = 0, t2.Interaction = function(e3) {
        !function(t3, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t3.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e4 && Un(t3, e4);
        }(s2, e3);
        var n3, r3, o3, i3, a3 = (o3 = s2, i3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t3) {
            return false;
          }
        }(), function() {
          var t3, e4 = Nn(o3);
          if (i3) {
            var n4 = Nn(this).constructor;
            t3 = Reflect.construct(e4, arguments, n4);
          } else
            t3 = e4.apply(this, arguments);
          return Vn(this, t3);
        });
        function s2() {
          return Wn(this, s2), a3.apply(this, arguments);
        }
        return n3 = s2, (r3 = [{ key: "pointerMoveTolerance", get: function() {
          return t2.interactions.pointerMoveTolerance;
        }, set: function(e4) {
          t2.interactions.pointerMoveTolerance = e4;
        } }, { key: "_now", value: function() {
          return t2.now();
        } }]) && Ln(n3.prototype, r3), s2;
      }(Le.default), t2.interactions = { list: [], new: function(e3) {
        e3.scopeFire = function(e4, n4) {
          return t2.fire(e4, n4);
        };
        var n3 = new t2.Interaction(e3);
        return t2.interactions.list.push(n3), n3;
      }, listeners: e2, docEvents: o2, pointerMoveTolerance: 1 }, t2.usePlugin(se.default);
    }, listeners: { "scope:add-document": function(t2) {
      return Hn(t2, "add");
    }, "scope:remove-document": function(t2) {
      return Hn(t2, "remove");
    }, "interactable:unset": function(t2, e2) {
      for (var n2 = t2.interactable, r2 = e2.interactions.list.length - 1; r2 >= 0; r2--) {
        var o2 = e2.interactions.list[r2];
        o2.interactable === n2 && (o2.stop(), e2.fire("interactions:destroy", { interaction: o2 }), o2.destroy(), e2.interactions.list.length > 2 && e2.interactions.list.splice(r2, 1));
      }
    } }, onDocSignal: Hn, doOnInteractions: $n, methodNames: qn };
    Fn.default = Kn;
    var Zn = {};
    function Jn(t2) {
      return (Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      })(t2);
    }
    function Qn(t2, e2, n2) {
      return (Qn = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, n3) {
        var r2 = function(t4, e4) {
          for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = nr(t4)) !== null; )
            ;
          return t4;
        }(t3, e3);
        if (r2) {
          var o2 = Object.getOwnPropertyDescriptor(r2, e3);
          return o2.get ? o2.get.call(n3) : o2.value;
        }
      })(t2, e2, n2 || t2);
    }
    function tr(t2, e2) {
      return (tr = Object.setPrototypeOf || function(t3, e3) {
        return t3.__proto__ = e3, t3;
      })(t2, e2);
    }
    function er(t2, e2) {
      return !e2 || Jn(e2) !== "object" && typeof e2 != "function" ? function(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }(t2) : e2;
    }
    function nr(t2) {
      return (nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
        return t3.__proto__ || Object.getPrototypeOf(t3);
      })(t2);
    }
    function rr(t2, e2) {
      if (!(t2 instanceof e2))
        throw new TypeError("Cannot call a class as a function");
    }
    function or(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function ir(t2, e2, n2) {
      return e2 && or(t2.prototype, e2), n2 && or(t2, n2), t2;
    }
    function ar(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    Object.defineProperty(Zn, "__esModule", { value: true }), Zn.initScope = lr, Zn.Scope = void 0;
    var sr = function() {
      function t2() {
        var e2 = this;
        rr(this, t2), ar(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), ar(this, "isInitialized", false), ar(this, "listenerMaps", []), ar(this, "browser", b.default), ar(this, "defaults", (0, ge.default)(Me.defaults)), ar(this, "Eventable", cn.Eventable), ar(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), ar(this, "interactStatic", (0, gn.createInteractStatic)(this)), ar(this, "InteractEvent", je.InteractEvent), ar(this, "Interactable", void 0), ar(this, "interactables", new wn.InteractableSet(this)), ar(this, "_win", void 0), ar(this, "document", void 0), ar(this, "window", void 0), ar(this, "documents", []), ar(this, "_plugins", { list: [], map: {} }), ar(this, "onWindowUnload", function(t3) {
          return e2.removeDocument(t3.target);
        });
        var n2 = this;
        this.Interactable = function(t3) {
          !function(t4, e4) {
            if (typeof e4 != "function" && e4 !== null)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && tr(t4, e4);
          }(i2, t3);
          var e3, r2, o2 = (e3 = i2, r2 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }(), function() {
            var t4, n3 = nr(e3);
            if (r2) {
              var o3 = nr(this).constructor;
              t4 = Reflect.construct(n3, arguments, o3);
            } else
              t4 = n3.apply(this, arguments);
            return er(this, t4);
          });
          function i2() {
            return rr(this, i2), o2.apply(this, arguments);
          }
          return ir(i2, [{ key: "_defaults", get: function() {
            return n2.defaults;
          } }, { key: "set", value: function(t4) {
            return Qn(nr(i2.prototype), "set", this).call(this, t4), n2.fire("interactable:set", { options: t4, interactable: this }), this;
          } }, { key: "unset", value: function() {
            Qn(nr(i2.prototype), "unset", this).call(this), n2.interactables.list.splice(n2.interactables.list.indexOf(this), 1), n2.fire("interactable:unset", { interactable: this });
          } }]), i2;
        }(yn.Interactable);
      }
      return ir(t2, [{ key: "addListeners", value: function(t3, e2) {
        this.listenerMaps.push({ id: e2, map: t3 });
      } }, { key: "fire", value: function(t3, e2) {
        for (var n2 = 0; n2 < this.listenerMaps.length; n2++) {
          var r2 = this.listenerMaps[n2].map[t3];
          if (r2 && r2(e2, this, t3) === false)
            return false;
        }
      } }, { key: "init", value: function(t3) {
        return this.isInitialized ? this : lr(this, t3);
      } }, { key: "pluginIsInstalled", value: function(t3) {
        return this._plugins.map[t3.id] || this._plugins.list.indexOf(t3) !== -1;
      } }, { key: "usePlugin", value: function(t3, e2) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(t3))
          return this;
        if (t3.id && (this._plugins.map[t3.id] = t3), this._plugins.list.push(t3), t3.install && t3.install(this, e2), t3.listeners && t3.before) {
          for (var n2 = 0, r2 = this.listenerMaps.length, o2 = t3.before.reduce(function(t4, e3) {
            return t4[e3] = true, t4[ur(e3)] = true, t4;
          }, {}); n2 < r2; n2++) {
            var i2 = this.listenerMaps[n2].id;
            if (o2[i2] || o2[ur(i2)])
              break;
          }
          this.listenerMaps.splice(n2, 0, { id: t3.id, map: t3.listeners });
        } else
          t3.listeners && this.listenerMaps.push({ id: t3.id, map: t3.listeners });
        return this;
      } }, { key: "addDocument", value: function(t3, n2) {
        if (this.getDocIndex(t3) !== -1)
          return false;
        var r2 = e.getWindow(t3);
        n2 = n2 ? (0, j.default)({}, n2) : {}, this.documents.push({ doc: t3, options: n2 }), this.events.documents.push(t3), t3 !== this.document && this.events.add(r2, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: t3, window: r2, scope: this, options: n2 });
      } }, { key: "removeDocument", value: function(t3) {
        var n2 = this.getDocIndex(t3), r2 = e.getWindow(t3), o2 = this.documents[n2].options;
        this.events.remove(r2, "unload", this.onWindowUnload), this.documents.splice(n2, 1), this.events.documents.splice(n2, 1), this.fire("scope:remove-document", { doc: t3, window: r2, scope: this, options: o2 });
      } }, { key: "getDocIndex", value: function(t3) {
        for (var e2 = 0; e2 < this.documents.length; e2++)
          if (this.documents[e2].doc === t3)
            return e2;
        return -1;
      } }, { key: "getDocOptions", value: function(t3) {
        var e2 = this.getDocIndex(t3);
        return e2 === -1 ? null : this.documents[e2].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), t2;
    }();
    function lr(t2, n2) {
      return t2.isInitialized = true, i.default.window(n2) && e.init(n2), h.default.init(n2), b.default.init(n2), jt.default.init(n2), t2.window = n2, t2.document = n2.document, t2.usePlugin(Fn.default), t2.usePlugin(Sn.default), t2;
    }
    function ur(t2) {
      return t2 && t2.replace(/\/.*$/, "");
    }
    Zn.Scope = sr;
    var cr = {};
    Object.defineProperty(cr, "__esModule", { value: true }), cr.default = void 0;
    var fr = new Zn.Scope(), dr = fr.interactStatic;
    cr.default = dr;
    var pr = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    fr.init(pr);
    var vr = {};
    Object.defineProperty(vr, "__esModule", { value: true }), vr.default = void 0, vr.default = function() {
    };
    var hr = {};
    Object.defineProperty(hr, "__esModule", { value: true }), hr.default = void 0, hr.default = function() {
    };
    var gr = {};
    function yr(t2, e2) {
      return function(t3) {
        if (Array.isArray(t3))
          return t3;
      }(t2) || function(t3, e3) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3)) {
          var n2 = [], r2 = true, o2 = false, i2 = void 0;
          try {
            for (var a2, s2 = t3[Symbol.iterator](); !(r2 = (a2 = s2.next()).done) && (n2.push(a2.value), !e3 || n2.length !== e3); r2 = true)
              ;
          } catch (t4) {
            o2 = true, i2 = t4;
          } finally {
            try {
              r2 || s2.return == null || s2.return();
            } finally {
              if (o2)
                throw i2;
            }
          }
          return n2;
        }
      }(t2, e2) || function(t3, e3) {
        if (t3) {
          if (typeof t3 == "string")
            return mr(t3, e3);
          var n2 = Object.prototype.toString.call(t3).slice(8, -1);
          return n2 === "Object" && t3.constructor && (n2 = t3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? mr(t3, e3) : void 0;
        }
      }(t2, e2) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function mr(t2, e2) {
      (e2 == null || e2 > t2.length) && (e2 = t2.length);
      for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
        r2[n2] = t2[n2];
      return r2;
    }
    Object.defineProperty(gr, "__esModule", { value: true }), gr.default = void 0, gr.default = function(t2) {
      var e2 = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(e3) {
        var n3 = yr(e3, 2), r2 = n3[0], o2 = n3[1];
        return r2 in t2 || o2 in t2;
      }), n2 = function(n3, r2) {
        for (var o2 = t2.range, i2 = t2.limits, a2 = i2 === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : i2, s2 = t2.offset, l2 = s2 === void 0 ? { x: 0, y: 0 } : s2, u2 = { range: o2, grid: t2, x: null, y: null }, c2 = 0; c2 < e2.length; c2++) {
          var f2 = yr(e2[c2], 2), d2 = f2[0], p2 = f2[1], v2 = Math.round((n3 - l2.x) / t2[d2]), h2 = Math.round((r2 - l2.y) / t2[p2]);
          u2[d2] = Math.max(a2.left, Math.min(a2.right, v2 * t2[d2] + l2.x)), u2[p2] = Math.max(a2.top, Math.min(a2.bottom, h2 * t2[p2] + l2.y));
        }
        return u2;
      };
      return n2.grid = t2, n2.coordFields = e2, n2;
    };
    var br = {};
    Object.defineProperty(br, "__esModule", { value: true }), Object.defineProperty(br, "edgeTarget", { enumerable: true, get: function() {
      return vr.default;
    } }), Object.defineProperty(br, "elements", { enumerable: true, get: function() {
      return hr.default;
    } }), Object.defineProperty(br, "grid", { enumerable: true, get: function() {
      return gr.default;
    } });
    var xr = {};
    Object.defineProperty(xr, "__esModule", { value: true }), xr.default = void 0;
    var wr = { id: "snappers", install: function(t2) {
      var e2 = t2.interactStatic;
      e2.snappers = (0, j.default)(e2.snappers || {}, br), e2.createSnapGrid = e2.snappers.grid;
    } };
    xr.default = wr;
    var _r = {};
    function Pr(t2, e2) {
      var n2 = Object.keys(t2);
      if (Object.getOwnPropertySymbols) {
        var r2 = Object.getOwnPropertySymbols(t2);
        e2 && (r2 = r2.filter(function(e3) {
          return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
        })), n2.push.apply(n2, r2);
      }
      return n2;
    }
    function Or(t2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var n2 = arguments[e2] != null ? arguments[e2] : {};
        e2 % 2 ? Pr(Object(n2), true).forEach(function(e3) {
          Sr(t2, e3, n2[e3]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : Pr(Object(n2)).forEach(function(e3) {
          Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
        });
      }
      return t2;
    }
    function Sr(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    Object.defineProperty(_r, "__esModule", { value: true }), _r.aspectRatio = _r.default = void 0;
    var Er = { start: function(t2) {
      var e2 = t2.state, n2 = t2.rect, r2 = t2.edges, o2 = t2.pageCoords, i2 = e2.options.ratio, a2 = e2.options, s2 = a2.equalDelta, l2 = a2.modifiers;
      i2 === "preserve" && (i2 = n2.width / n2.height), e2.startCoords = (0, j.default)({}, o2), e2.startRect = (0, j.default)({}, n2), e2.ratio = i2, e2.equalDelta = s2;
      var u2 = e2.linkedEdges = { top: r2.top || r2.left && !r2.bottom, left: r2.left || r2.top && !r2.right, bottom: r2.bottom || r2.right && !r2.top, right: r2.right || r2.bottom && !r2.left };
      if (e2.xIsPrimaryAxis = !(!r2.left && !r2.right), e2.equalDelta)
        e2.edgeSign = (u2.left ? 1 : -1) * (u2.top ? 1 : -1);
      else {
        var c2 = e2.xIsPrimaryAxis ? u2.top : u2.left;
        e2.edgeSign = c2 ? -1 : 1;
      }
      if ((0, j.default)(t2.edges, u2), l2 && l2.length) {
        var f2 = new ye.default(t2.interaction);
        f2.copyFrom(t2.interaction.modification), f2.prepareStates(l2), e2.subModification = f2, f2.startAll(Or({}, t2));
      }
    }, set: function(t2) {
      var e2 = t2.state, n2 = t2.rect, r2 = t2.coords, o2 = (0, j.default)({}, r2), i2 = e2.equalDelta ? Tr : Mr;
      if (i2(e2, e2.xIsPrimaryAxis, r2, n2), !e2.subModification)
        return null;
      var a2 = (0, j.default)({}, n2);
      (0, k.addEdges)(e2.linkedEdges, a2, { x: r2.x - o2.x, y: r2.y - o2.y });
      var s2 = e2.subModification.setAll(Or(Or({}, t2), {}, { rect: a2, edges: e2.linkedEdges, pageCoords: r2, prevCoords: r2, prevRect: a2 })), l2 = s2.delta;
      return s2.changed && (i2(e2, Math.abs(l2.x) > Math.abs(l2.y), s2.coords, s2.rect), (0, j.default)(r2, s2.coords)), s2.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Tr(t2, e2, n2) {
      var r2 = t2.startCoords, o2 = t2.edgeSign;
      e2 ? n2.y = r2.y + (n2.x - r2.x) * o2 : n2.x = r2.x + (n2.y - r2.y) * o2;
    }
    function Mr(t2, e2, n2, r2) {
      var o2 = t2.startRect, i2 = t2.startCoords, a2 = t2.ratio, s2 = t2.edgeSign;
      if (e2) {
        var l2 = r2.width / a2;
        n2.y = i2.y + (l2 - o2.height) * s2;
      } else {
        var u2 = r2.height * a2;
        n2.x = i2.x + (u2 - o2.width) * s2;
      }
    }
    _r.aspectRatio = Er;
    var jr = (0, Se.makeModifier)(Er, "aspectRatio");
    _r.default = jr;
    var kr = {};
    Object.defineProperty(kr, "__esModule", { value: true }), kr.default = void 0;
    var Ir = function() {
    };
    Ir._defaults = {};
    var Dr = Ir;
    kr.default = Dr;
    var Ar = {};
    Object.defineProperty(Ar, "__esModule", { value: true }), Object.defineProperty(Ar, "default", { enumerable: true, get: function() {
      return kr.default;
    } });
    var Rr = {};
    function zr(t2, e2, n2) {
      return i.default.func(t2) ? k.resolveRectLike(t2, e2.interactable, e2.element, [n2.x, n2.y, e2]) : k.resolveRectLike(t2, e2.interactable, e2.element);
    }
    Object.defineProperty(Rr, "__esModule", { value: true }), Rr.getRestrictionRect = zr, Rr.restrict = Rr.default = void 0;
    var Cr = { start: function(t2) {
      var e2 = t2.rect, n2 = t2.startOffset, r2 = t2.state, o2 = t2.interaction, i2 = t2.pageCoords, a2 = r2.options, s2 = a2.elementRect, l2 = (0, j.default)({ left: 0, top: 0, right: 0, bottom: 0 }, a2.offset || {});
      if (e2 && s2) {
        var u2 = zr(a2.restriction, o2, i2);
        if (u2) {
          var c2 = u2.right - u2.left - e2.width, f2 = u2.bottom - u2.top - e2.height;
          c2 < 0 && (l2.left += c2, l2.right += c2), f2 < 0 && (l2.top += f2, l2.bottom += f2);
        }
        l2.left += n2.left - e2.width * s2.left, l2.top += n2.top - e2.height * s2.top, l2.right += n2.right - e2.width * (1 - s2.right), l2.bottom += n2.bottom - e2.height * (1 - s2.bottom);
      }
      r2.offset = l2;
    }, set: function(t2) {
      var e2 = t2.coords, n2 = t2.interaction, r2 = t2.state, o2 = r2.options, i2 = r2.offset, a2 = zr(o2.restriction, n2, e2);
      if (a2) {
        var s2 = k.xywhToTlbr(a2);
        e2.x = Math.max(Math.min(s2.right - i2.right, e2.x), s2.left + i2.left), e2.y = Math.max(Math.min(s2.bottom - i2.bottom, e2.y), s2.top + i2.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Rr.restrict = Cr;
    var Fr = (0, Se.makeModifier)(Cr, "restrict");
    Rr.default = Fr;
    var Xr = {};
    Object.defineProperty(Xr, "__esModule", { value: true }), Xr.restrictEdges = Xr.default = void 0;
    var Yr = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Br = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Wr(t2, e2) {
      for (var n2 = ["top", "left", "bottom", "right"], r2 = 0; r2 < n2.length; r2++) {
        var o2 = n2[r2];
        o2 in t2 || (t2[o2] = e2[o2]);
      }
      return t2;
    }
    var Lr = { noInner: Yr, noOuter: Br, start: function(t2) {
      var e2, n2 = t2.interaction, r2 = t2.startOffset, o2 = t2.state, i2 = o2.options;
      if (i2) {
        var a2 = (0, Rr.getRestrictionRect)(i2.offset, n2, n2.coords.start.page);
        e2 = k.rectToXY(a2);
      }
      e2 = e2 || { x: 0, y: 0 }, o2.offset = { top: e2.y + r2.top, left: e2.x + r2.left, bottom: e2.y - r2.bottom, right: e2.x - r2.right };
    }, set: function(t2) {
      var e2 = t2.coords, n2 = t2.edges, r2 = t2.interaction, o2 = t2.state, i2 = o2.offset, a2 = o2.options;
      if (n2) {
        var s2 = (0, j.default)({}, e2), l2 = (0, Rr.getRestrictionRect)(a2.inner, r2, s2) || {}, u2 = (0, Rr.getRestrictionRect)(a2.outer, r2, s2) || {};
        Wr(l2, Yr), Wr(u2, Br), n2.top ? e2.y = Math.min(Math.max(u2.top + i2.top, s2.y), l2.top + i2.top) : n2.bottom && (e2.y = Math.max(Math.min(u2.bottom + i2.bottom, s2.y), l2.bottom + i2.bottom)), n2.left ? e2.x = Math.min(Math.max(u2.left + i2.left, s2.x), l2.left + i2.left) : n2.right && (e2.x = Math.max(Math.min(u2.right + i2.right, s2.x), l2.right + i2.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Xr.restrictEdges = Lr;
    var Ur = (0, Se.makeModifier)(Lr, "restrictEdges");
    Xr.default = Ur;
    var Vr = {};
    Object.defineProperty(Vr, "__esModule", { value: true }), Vr.restrictRect = Vr.default = void 0;
    var Nr = (0, j.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(t2) {
    } }, Rr.restrict.defaults), qr = { start: Rr.restrict.start, set: Rr.restrict.set, defaults: Nr };
    Vr.restrictRect = qr;
    var $r = (0, Se.makeModifier)(qr, "restrictRect");
    Vr.default = $r;
    var Gr = {};
    Object.defineProperty(Gr, "__esModule", { value: true }), Gr.restrictSize = Gr.default = void 0;
    var Hr = { width: -1 / 0, height: -1 / 0 }, Kr = { width: 1 / 0, height: 1 / 0 }, Zr = { start: function(t2) {
      return Xr.restrictEdges.start(t2);
    }, set: function(t2) {
      var e2 = t2.interaction, n2 = t2.state, r2 = t2.rect, o2 = t2.edges, i2 = n2.options;
      if (o2) {
        var a2 = k.tlbrToXywh((0, Rr.getRestrictionRect)(i2.min, e2, t2.coords)) || Hr, s2 = k.tlbrToXywh((0, Rr.getRestrictionRect)(i2.max, e2, t2.coords)) || Kr;
        n2.options = { endOnly: i2.endOnly, inner: (0, j.default)({}, Xr.restrictEdges.noInner), outer: (0, j.default)({}, Xr.restrictEdges.noOuter) }, o2.top ? (n2.options.inner.top = r2.bottom - a2.height, n2.options.outer.top = r2.bottom - s2.height) : o2.bottom && (n2.options.inner.bottom = r2.top + a2.height, n2.options.outer.bottom = r2.top + s2.height), o2.left ? (n2.options.inner.left = r2.right - a2.width, n2.options.outer.left = r2.right - s2.width) : o2.right && (n2.options.inner.right = r2.left + a2.width, n2.options.outer.right = r2.left + s2.width), Xr.restrictEdges.set(t2), n2.options = i2;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    Gr.restrictSize = Zr;
    var Jr = (0, Se.makeModifier)(Zr, "restrictSize");
    Gr.default = Jr;
    var Qr = {};
    Object.defineProperty(Qr, "__esModule", { value: true }), Object.defineProperty(Qr, "default", { enumerable: true, get: function() {
      return kr.default;
    } });
    var to = {};
    Object.defineProperty(to, "__esModule", { value: true }), to.snap = to.default = void 0;
    var eo = { start: function(t2) {
      var e2, n2 = t2.interaction, r2 = t2.interactable, o2 = t2.element, i2 = t2.rect, a2 = t2.state, s2 = t2.startOffset, l2 = a2.options, u2 = l2.offsetWithOrigin ? function(t3) {
        var e3 = t3.interaction.element;
        return (0, k.rectToXY)((0, k.resolveRectLike)(t3.state.options.origin, null, null, [e3])) || (0, A.default)(t3.interactable, e3, t3.interaction.prepared.name);
      }(t2) : { x: 0, y: 0 };
      if (l2.offset === "startCoords")
        e2 = { x: n2.coords.start.page.x, y: n2.coords.start.page.y };
      else {
        var c2 = (0, k.resolveRectLike)(l2.offset, r2, o2, [n2]);
        (e2 = (0, k.rectToXY)(c2) || { x: 0, y: 0 }).x += u2.x, e2.y += u2.y;
      }
      var f2 = l2.relativePoints;
      a2.offsets = i2 && f2 && f2.length ? f2.map(function(t3, n3) {
        return { index: n3, relativePoint: t3, x: s2.left - i2.width * t3.x + e2.x, y: s2.top - i2.height * t3.y + e2.y };
      }) : [{ index: 0, relativePoint: null, x: e2.x, y: e2.y }];
    }, set: function(t2) {
      var e2 = t2.interaction, n2 = t2.coords, r2 = t2.state, o2 = r2.options, a2 = r2.offsets, s2 = (0, A.default)(e2.interactable, e2.element, e2.prepared.name), l2 = (0, j.default)({}, n2), u2 = [];
      o2.offsetWithOrigin || (l2.x -= s2.x, l2.y -= s2.y);
      for (var c2 = 0; c2 < a2.length; c2++)
        for (var f2 = a2[c2], d2 = l2.x - f2.x, p2 = l2.y - f2.y, v2 = 0, h2 = o2.targets.length; v2 < h2; v2++) {
          var g2, y2 = o2.targets[v2];
          (g2 = i.default.func(y2) ? y2(d2, p2, e2._proxy, f2, v2) : y2) && u2.push({ x: (i.default.number(g2.x) ? g2.x : d2) + f2.x, y: (i.default.number(g2.y) ? g2.y : p2) + f2.y, range: i.default.number(g2.range) ? g2.range : o2.range, source: y2, index: v2, offset: f2 });
        }
      for (var m2 = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, b2 = 0; b2 < u2.length; b2++) {
        var x2 = u2[b2], w2 = x2.range, _2 = x2.x - l2.x, P2 = x2.y - l2.y, O2 = (0, C.default)(_2, P2), S2 = O2 <= w2;
        w2 === 1 / 0 && m2.inRange && m2.range !== 1 / 0 && (S2 = false), m2.target && !(S2 ? m2.inRange && w2 !== 1 / 0 ? O2 / w2 < m2.distance / m2.range : w2 === 1 / 0 && m2.range !== 1 / 0 || O2 < m2.distance : !m2.inRange && O2 < m2.distance) || (m2.target = x2, m2.distance = O2, m2.range = w2, m2.inRange = S2, m2.delta.x = _2, m2.delta.y = P2);
      }
      return m2.inRange && (n2.x = m2.target.x, n2.y = m2.target.y), r2.closest = m2, m2;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    to.snap = eo;
    var no = (0, Se.makeModifier)(eo, "snap");
    to.default = no;
    var ro = {};
    function oo(t2, e2) {
      (e2 == null || e2 > t2.length) && (e2 = t2.length);
      for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
        r2[n2] = t2[n2];
      return r2;
    }
    Object.defineProperty(ro, "__esModule", { value: true }), ro.snapSize = ro.default = void 0;
    var io = { start: function(t2) {
      var e2 = t2.state, n2 = t2.edges, r2 = e2.options;
      if (!n2)
        return null;
      t2.state = { options: { targets: null, relativePoints: [{ x: n2.left ? 0 : 1, y: n2.top ? 0 : 1 }], offset: r2.offset || "self", origin: { x: 0, y: 0 }, range: r2.range } }, e2.targetFields = e2.targetFields || [["width", "height"], ["x", "y"]], to.snap.start(t2), e2.offsets = t2.state.offsets, t2.state = e2;
    }, set: function(t2) {
      var e2, n2, r2 = t2.interaction, o2 = t2.state, a2 = t2.coords, s2 = o2.options, l2 = o2.offsets, u2 = { x: a2.x - l2[0].x, y: a2.y - l2[0].y };
      o2.options = (0, j.default)({}, s2), o2.options.targets = [];
      for (var c2 = 0; c2 < (s2.targets || []).length; c2++) {
        var f2 = (s2.targets || [])[c2], d2 = void 0;
        if (d2 = i.default.func(f2) ? f2(u2.x, u2.y, r2) : f2) {
          for (var p2 = 0; p2 < o2.targetFields.length; p2++) {
            var v2 = (e2 = o2.targetFields[p2], n2 = 2, function(t3) {
              if (Array.isArray(t3))
                return t3;
            }(e2) || function(t3, e3) {
              if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3)) {
                var n3 = [], r3 = true, o3 = false, i2 = void 0;
                try {
                  for (var a3, s3 = t3[Symbol.iterator](); !(r3 = (a3 = s3.next()).done) && (n3.push(a3.value), !e3 || n3.length !== e3); r3 = true)
                    ;
                } catch (t4) {
                  o3 = true, i2 = t4;
                } finally {
                  try {
                    r3 || s3.return == null || s3.return();
                  } finally {
                    if (o3)
                      throw i2;
                  }
                }
                return n3;
              }
            }(e2, n2) || function(t3, e3) {
              if (t3) {
                if (typeof t3 == "string")
                  return oo(t3, e3);
                var n3 = Object.prototype.toString.call(t3).slice(8, -1);
                return n3 === "Object" && t3.constructor && (n3 = t3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(t3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? oo(t3, e3) : void 0;
              }
            }(e2, n2) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }()), h2 = v2[0], g2 = v2[1];
            if (h2 in d2 || g2 in d2) {
              d2.x = d2[h2], d2.y = d2[g2];
              break;
            }
          }
          o2.options.targets.push(d2);
        }
      }
      var y2 = to.snap.set(t2);
      return o2.options = s2, y2;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    ro.snapSize = io;
    var ao = (0, Se.makeModifier)(io, "snapSize");
    ro.default = ao;
    var so = {};
    Object.defineProperty(so, "__esModule", { value: true }), so.snapEdges = so.default = void 0;
    var lo = { start: function(t2) {
      var e2 = t2.edges;
      return e2 ? (t2.state.targetFields = t2.state.targetFields || [[e2.left ? "left" : "right", e2.top ? "top" : "bottom"]], ro.snapSize.start(t2)) : null;
    }, set: ro.snapSize.set, defaults: (0, j.default)((0, ge.default)(ro.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    so.snapEdges = lo;
    var uo = (0, Se.makeModifier)(lo, "snapEdges");
    so.default = uo;
    var co = {};
    Object.defineProperty(co, "__esModule", { value: true }), Object.defineProperty(co, "default", { enumerable: true, get: function() {
      return kr.default;
    } });
    var fo = {};
    Object.defineProperty(fo, "__esModule", { value: true }), Object.defineProperty(fo, "default", { enumerable: true, get: function() {
      return kr.default;
    } });
    var po = {};
    Object.defineProperty(po, "__esModule", { value: true }), po.default = void 0;
    var vo = { aspectRatio: _r.default, restrictEdges: Xr.default, restrict: Rr.default, restrictRect: Vr.default, restrictSize: Gr.default, snapEdges: so.default, snap: to.default, snapSize: ro.default, spring: co.default, avoid: Ar.default, transform: fo.default, rubberband: Qr.default };
    po.default = vo;
    var ho = {};
    Object.defineProperty(ho, "__esModule", { value: true }), ho.default = void 0;
    var go = { id: "modifiers", install: function(t2) {
      var e2 = t2.interactStatic;
      for (var n2 in t2.usePlugin(Se.default), t2.usePlugin(xr.default), e2.modifiers = po.default, po.default) {
        var r2 = po.default[n2], o2 = r2._defaults, i2 = r2._methods;
        o2._methods = i2, t2.defaults.perAction[n2] = o2;
      }
    } };
    ho.default = go;
    var yo = {};
    function mo(t2) {
      return (mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      })(t2);
    }
    function bo(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
      }
    }
    function xo(t2, e2) {
      return (xo = Object.setPrototypeOf || function(t3, e3) {
        return t3.__proto__ = e3, t3;
      })(t2, e2);
    }
    function wo(t2, e2) {
      return !e2 || mo(e2) !== "object" && typeof e2 != "function" ? _o(t2) : e2;
    }
    function _o(t2) {
      if (t2 === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t2;
    }
    function Po(t2) {
      return (Po = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
        return t3.__proto__ || Object.getPrototypeOf(t3);
      })(t2);
    }
    function Oo(t2, e2, n2) {
      return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
    }
    Object.defineProperty(yo, "__esModule", { value: true }), yo.PointerEvent = yo.default = void 0;
    var So = function(t2) {
      !function(t3, e3) {
        if (typeof e3 != "function" && e3 !== null)
          throw new TypeError("Super expression must either be null or a function");
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && xo(t3, e3);
      }(a2, t2);
      var e2, n2, r2, o2, i2 = (r2 = a2, o2 = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (t3) {
          return false;
        }
      }(), function() {
        var t3, e3 = Po(r2);
        if (o2) {
          var n3 = Po(this).constructor;
          t3 = Reflect.construct(e3, arguments, n3);
        } else
          t3 = e3.apply(this, arguments);
        return wo(this, t3);
      });
      function a2(t3, e3, n3, r3, o3, s2) {
        var l2;
        if (function(t4, e4) {
          if (!(t4 instanceof e4))
            throw new TypeError("Cannot call a class as a function");
        }(this, a2), Oo(_o(l2 = i2.call(this, o3)), "type", void 0), Oo(_o(l2), "originalEvent", void 0), Oo(_o(l2), "pointerId", void 0), Oo(_o(l2), "pointerType", void 0), Oo(_o(l2), "double", void 0), Oo(_o(l2), "pageX", void 0), Oo(_o(l2), "pageY", void 0), Oo(_o(l2), "clientX", void 0), Oo(_o(l2), "clientY", void 0), Oo(_o(l2), "dt", void 0), Oo(_o(l2), "eventable", void 0), B.pointerExtend(_o(l2), n3), n3 !== e3 && B.pointerExtend(_o(l2), e3), l2.timeStamp = s2, l2.originalEvent = n3, l2.type = t3, l2.pointerId = B.getPointerId(e3), l2.pointerType = B.getPointerType(e3), l2.target = r3, l2.currentTarget = null, t3 === "tap") {
          var u2 = o3.getPointerIndex(e3);
          l2.dt = l2.timeStamp - o3.pointers[u2].downTime;
          var c2 = l2.timeStamp - o3.tapTime;
          l2.double = !!(o3.prevTap && o3.prevTap.type !== "doubletap" && o3.prevTap.target === l2.target && c2 < 500);
        } else
          t3 === "doubletap" && (l2.dt = e3.timeStamp - o3.tapTime);
        return l2;
      }
      return e2 = a2, (n2 = [{ key: "_subtractOrigin", value: function(t3) {
        var e3 = t3.x, n3 = t3.y;
        return this.pageX -= e3, this.pageY -= n3, this.clientX -= e3, this.clientY -= n3, this;
      } }, { key: "_addOrigin", value: function(t3) {
        var e3 = t3.x, n3 = t3.y;
        return this.pageX += e3, this.pageY += n3, this.clientX += e3, this.clientY += n3, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && bo(e2.prototype, n2), a2;
    }($.BaseEvent);
    yo.PointerEvent = yo.default = So;
    var Eo = {};
    Object.defineProperty(Eo, "__esModule", { value: true }), Eo.default = void 0;
    var To = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t2) {
      t2.pointerEvents = To, t2.defaults.actions.pointerEvents = To.defaults, (0, j.default)(t2.actions.phaselessTypes, To.types);
    }, listeners: { "interactions:new": function(t2) {
      var e2 = t2.interaction;
      e2.prevTap = null, e2.tapTime = 0;
    }, "interactions:update-pointer": function(t2) {
      var e2 = t2.down, n2 = t2.pointerInfo;
      !e2 && n2.hold || (n2.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(t2, e2) {
      var n2 = t2.interaction, r2 = t2.pointer, o2 = t2.event, i2 = t2.eventTarget;
      t2.duplicate || n2.pointerIsDown && !n2.pointerWasMoved || (n2.pointerIsDown && ko(t2), Mo({ interaction: n2, pointer: r2, event: o2, eventTarget: i2, type: "move" }, e2));
    }, "interactions:down": function(t2, e2) {
      !function(t3, e3) {
        for (var n2 = t3.interaction, r2 = t3.pointer, o2 = t3.event, i2 = t3.eventTarget, a2 = t3.pointerIndex, s2 = n2.pointers[a2].hold, l2 = _.getPath(i2), u2 = { interaction: n2, pointer: r2, event: o2, eventTarget: i2, type: "hold", targets: [], path: l2, node: null }, c2 = 0; c2 < l2.length; c2++) {
          var f2 = l2[c2];
          u2.node = f2, e3.fire("pointerEvents:collect-targets", u2);
        }
        if (u2.targets.length) {
          for (var d2 = 1 / 0, p2 = 0; p2 < u2.targets.length; p2++) {
            var v2 = u2.targets[p2].eventable.options.holdDuration;
            v2 < d2 && (d2 = v2);
          }
          s2.duration = d2, s2.timeout = setTimeout(function() {
            Mo({ interaction: n2, eventTarget: i2, pointer: r2, event: o2, type: "hold" }, e3);
          }, d2);
        }
      }(t2, e2), Mo(t2, e2);
    }, "interactions:up": function(t2, e2) {
      ko(t2), Mo(t2, e2), function(t3, e3) {
        var n2 = t3.interaction, r2 = t3.pointer, o2 = t3.event, i2 = t3.eventTarget;
        n2.pointerWasMoved || Mo({ interaction: n2, eventTarget: i2, pointer: r2, event: o2, type: "tap" }, e3);
      }(t2, e2);
    }, "interactions:cancel": function(t2, e2) {
      ko(t2), Mo(t2, e2);
    } }, PointerEvent: yo.PointerEvent, fire: Mo, collectEventTargets: jo, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Mo(t2, e2) {
      var n2 = t2.interaction, r2 = t2.pointer, o2 = t2.event, i2 = t2.eventTarget, a2 = t2.type, s2 = t2.targets, l2 = s2 === void 0 ? jo(t2, e2) : s2, u2 = new yo.PointerEvent(a2, r2, o2, i2, n2, e2.now());
      e2.fire("pointerEvents:new", { pointerEvent: u2 });
      for (var c2 = { interaction: n2, pointer: r2, event: o2, eventTarget: i2, targets: l2, type: a2, pointerEvent: u2 }, f2 = 0; f2 < l2.length; f2++) {
        var d2 = l2[f2];
        for (var p2 in d2.props || {})
          u2[p2] = d2.props[p2];
        var v2 = (0, A.default)(d2.eventable, d2.node);
        if (u2._subtractOrigin(v2), u2.eventable = d2.eventable, u2.currentTarget = d2.node, d2.eventable.fire(u2), u2._addOrigin(v2), u2.immediatePropagationStopped || u2.propagationStopped && f2 + 1 < l2.length && l2[f2 + 1].node !== u2.currentTarget)
          break;
      }
      if (e2.fire("pointerEvents:fired", c2), a2 === "tap") {
        var h2 = u2.double ? Mo({ interaction: n2, pointer: r2, event: o2, eventTarget: i2, type: "doubletap" }, e2) : u2;
        n2.prevTap = h2, n2.tapTime = h2.timeStamp;
      }
      return u2;
    }
    function jo(t2, e2) {
      var n2 = t2.interaction, r2 = t2.pointer, o2 = t2.event, i2 = t2.eventTarget, a2 = t2.type, s2 = n2.getPointerIndex(r2), l2 = n2.pointers[s2];
      if (a2 === "tap" && (n2.pointerWasMoved || !l2 || l2.downTarget !== i2))
        return [];
      for (var u2 = _.getPath(i2), c2 = { interaction: n2, pointer: r2, event: o2, eventTarget: i2, type: a2, path: u2, targets: [], node: null }, f2 = 0; f2 < u2.length; f2++) {
        var d2 = u2[f2];
        c2.node = d2, e2.fire("pointerEvents:collect-targets", c2);
      }
      return a2 === "hold" && (c2.targets = c2.targets.filter(function(t3) {
        var e3;
        return t3.eventable.options.holdDuration === ((e3 = n2.pointers[s2]) == null ? void 0 : e3.hold.duration);
      })), c2.targets;
    }
    function ko(t2) {
      var e2 = t2.interaction, n2 = t2.pointerIndex, r2 = e2.pointers[n2].hold;
      r2 && r2.timeout && (clearTimeout(r2.timeout), r2.timeout = null);
    }
    var Io = To;
    Eo.default = Io;
    var Do = {};
    function Ao(t2) {
      var e2 = t2.interaction;
      e2.holdIntervalHandle && (clearInterval(e2.holdIntervalHandle), e2.holdIntervalHandle = null);
    }
    Object.defineProperty(Do, "__esModule", { value: true }), Do.default = void 0;
    var Ro = { id: "pointer-events/holdRepeat", install: function(t2) {
      t2.usePlugin(Eo.default);
      var e2 = t2.pointerEvents;
      e2.defaults.holdRepeatInterval = 0, e2.types.holdrepeat = t2.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(t2, e2) {
      return t2["pointerEvents:".concat(e2)] = Ao, t2;
    }, { "pointerEvents:new": function(t2) {
      var e2 = t2.pointerEvent;
      e2.type === "hold" && (e2.count = (e2.count || 0) + 1);
    }, "pointerEvents:fired": function(t2, e2) {
      var n2 = t2.interaction, r2 = t2.pointerEvent, o2 = t2.eventTarget, i2 = t2.targets;
      if (r2.type === "hold" && i2.length) {
        var a2 = i2[0].eventable.options.holdRepeatInterval;
        a2 <= 0 || (n2.holdIntervalHandle = setTimeout(function() {
          e2.pointerEvents.fire({ interaction: n2, eventTarget: o2, type: "hold", pointer: r2, event: r2 }, e2);
        }, a2));
      }
    } }) };
    Do.default = Ro;
    var zo = {};
    function Co(t2) {
      return (0, j.default)(this.events.options, t2), this;
    }
    Object.defineProperty(zo, "__esModule", { value: true }), zo.default = void 0;
    var Fo = { id: "pointer-events/interactableTargets", install: function(t2) {
      var e2 = t2.Interactable;
      e2.prototype.pointerEvents = Co;
      var n2 = e2.prototype._backCompatOption;
      e2.prototype._backCompatOption = function(t3, e3) {
        var r2 = n2.call(this, t3, e3);
        return r2 === this && (this.events.options[t3] = e3), r2;
      };
    }, listeners: { "pointerEvents:collect-targets": function(t2, e2) {
      var n2 = t2.targets, r2 = t2.node, o2 = t2.type, i2 = t2.eventTarget;
      e2.interactables.forEachMatch(r2, function(t3) {
        var e3 = t3.events, a2 = e3.options;
        e3.types[o2] && e3.types[o2].length && t3.testIgnoreAllow(a2, r2, i2) && n2.push({ node: r2, eventable: e3, props: { interactable: t3 } });
      });
    }, "interactable:new": function(t2) {
      var e2 = t2.interactable;
      e2.events.getRect = function(t3) {
        return e2.getRect(t3);
      };
    }, "interactable:set": function(t2, e2) {
      var n2 = t2.interactable, r2 = t2.options;
      (0, j.default)(n2.events.options, e2.pointerEvents.defaults), (0, j.default)(n2.events.options, r2.pointerEvents || {});
    } } };
    zo.default = Fo;
    var Xo = {};
    Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0;
    var Yo = { id: "pointer-events", install: function(t2) {
      t2.usePlugin(Eo), t2.usePlugin(Do.default), t2.usePlugin(zo.default);
    } };
    Xo.default = Yo;
    var Bo = {};
    function Wo(t2) {
      var e2 = t2.Interactable;
      t2.actions.phases.reflow = true, e2.prototype.reflow = function(e3) {
        return function(t3, e4, n2) {
          for (var r2 = i.default.string(t3.target) ? Z.from(t3._context.querySelectorAll(t3.target)) : [t3.target], o2 = n2.window.Promise, a2 = o2 ? [] : null, s2 = function() {
            var i2 = r2[l2], s3 = t3.getRect(i2);
            if (!s3)
              return "break";
            var u2 = Z.find(n2.interactions.list, function(n3) {
              return n3.interacting() && n3.interactable === t3 && n3.element === i2 && n3.prepared.name === e4.name;
            }), c2 = void 0;
            if (u2)
              u2.move(), a2 && (c2 = u2._reflowPromise || new o2(function(t4) {
                u2._reflowResolve = t4;
              }));
            else {
              var f2 = (0, k.tlbrToXywh)(s3), d2 = { page: { x: f2.x, y: f2.y }, client: { x: f2.x, y: f2.y }, timeStamp: n2.now() }, p2 = B.coordsToEvent(d2);
              c2 = function(t4, e5, n3, r3, o3) {
                var i3 = t4.interactions.new({ pointerType: "reflow" }), a3 = { interaction: i3, event: o3, pointer: o3, eventTarget: n3, phase: "reflow" };
                i3.interactable = e5, i3.element = n3, i3.prevEvent = o3, i3.updatePointer(o3, o3, n3, true), B.setZeroCoords(i3.coords.delta), (0, Yt.copyAction)(i3.prepared, r3), i3._doPhase(a3);
                var s4 = t4.window.Promise, l3 = s4 ? new s4(function(t5) {
                  i3._reflowResolve = t5;
                }) : void 0;
                return i3._reflowPromise = l3, i3.start(r3, e5, n3), i3._interacting ? (i3.move(a3), i3.end(o3)) : (i3.stop(), i3._reflowResolve()), i3.removePointer(o3, o3), l3;
              }(n2, t3, i2, e4, p2);
            }
            a2 && a2.push(c2);
          }, l2 = 0; l2 < r2.length && s2() !== "break"; l2++)
            ;
          return a2 && o2.all(a2).then(function() {
            return t3;
          });
        }(this, e3, t2);
      };
    }
    Object.defineProperty(Bo, "__esModule", { value: true }), Bo.install = Wo, Bo.default = void 0;
    var Lo = { id: "reflow", install: Wo, listeners: { "interactions:stop": function(t2, e2) {
      var n2 = t2.interaction;
      n2.pointerType === "reflow" && (n2._reflowResolve && n2._reflowResolve(), Z.remove(e2.interactions.list, n2));
    } } };
    Bo.default = Lo;
    var Uo = { exports: {} };
    function Vo(t2) {
      return (Vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      })(t2);
    }
    Object.defineProperty(Uo.exports, "__esModule", { value: true }), Uo.exports.default = void 0, cr.default.use(se.default), cr.default.use(Ge.default), cr.default.use(Xo.default), cr.default.use(en.default), cr.default.use(ho.default), cr.default.use(ie.default), cr.default.use(Tt.default), cr.default.use(Rt.default), cr.default.use(Bo.default);
    var No = cr.default;
    if (Uo.exports.default = No, Vo(Uo) === "object" && Uo)
      try {
        Uo.exports = cr.default;
      } catch (t2) {
      }
    cr.default.default = cr.default, Uo = Uo.exports;
    var qo = { exports: {} };
    function $o(t2) {
      return ($o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      })(t2);
    }
    Object.defineProperty(qo.exports, "__esModule", { value: true }), qo.exports.default = void 0;
    var Go = Uo.default;
    if (qo.exports.default = Go, $o(qo) === "object" && qo)
      try {
        qo.exports = Uo.default;
      } catch (t2) {
      }
    return Uo.default.default = Uo.default, qo.exports;
  });
})(interact_min);
var interact = /* @__PURE__ */ getDefaultExportFromCjs(interact_min.exports);
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
function bottom(layout) {
  let max = 0;
  let bottomY = 0;
  for (let i = 0, len = layout.length; i < len; i++) {
    bottomY = layout[i].y + layout[i].h;
    if (bottomY > max)
      max = bottomY;
  }
  return max;
}
function cloneLayoutItem(layoutItem) {
  return JSON.parse(JSON.stringify(layoutItem));
}
function cloneLayout(layout) {
  const newLayout = Array(layout.length);
  for (let i = 0, len = layout.length; i < len; i++) {
    newLayout[i] = cloneLayoutItem(layout[i]);
  }
  return newLayout;
}
function collides(l1, l2) {
  if (l1 === l2)
    return false;
  if (l1.x + l1.w <= l2.x)
    return false;
  if (l1.x >= l2.x + l2.w)
    return false;
  if (l1.y + l1.h <= l2.y)
    return false;
  if (l1.y >= l2.y + l2.h)
    return false;
  return true;
}
function compact(layout, verticalCompact) {
  const compareWith = getStatics(layout);
  const sorted = sortLayoutItemsByRowCol(layout);
  const out = Array(layout.length);
  for (let i = 0, len = sorted.length; i < len; i++) {
    let l = sorted[i];
    if (!l.static) {
      l = compactItem(compareWith, l, verticalCompact);
      compareWith.push(l);
    }
    out[layout.indexOf(l)] = l;
    l.moved = false;
  }
  return out;
}
function compactItem(compareWith, l, verticalCompact) {
  if (verticalCompact) {
    while (l.y > 0 && !getFirstCollision(compareWith, l)) {
      l.y--;
    }
  }
  let collides2 = {};
  while (collides2 = getFirstCollision(compareWith, l)) {
    l.y = collides2.y + collides2.h;
  }
  return l;
}
function correctBounds(layout, bounds) {
  const collidesWith = getStatics(layout);
  for (let i = 0, len = layout.length; i < len; i++) {
    const l = layout[i];
    if (l.x + l.w > bounds.cols)
      l.x = bounds.cols - l.w;
    if (l.x < 0) {
      l.x = 0;
      l.w = bounds.cols;
    }
    if (!l.static)
      collidesWith.push(l);
    else {
      while (getFirstCollision(collidesWith, l)) {
        l.y++;
      }
    }
  }
  return layout;
}
function getLayoutItem(layout, id) {
  for (let i = 0, len = layout.length; i < len; i++) {
    if (layout[i].i === id)
      return layout[i];
  }
}
function getFirstCollision(layout, layoutItem) {
  for (let i = 0, len = layout.length; i < len; i++) {
    if (collides(layout[i], layoutItem))
      return layout[i];
  }
}
function getAllCollisions(layout, layoutItem) {
  return layout.filter((l) => collides(l, layoutItem));
}
function getStatics(layout) {
  return layout.filter((l) => l.static);
}
function moveElement(layout, l, x, y, isUserAction, preventCollision = false) {
  if (l.static)
    return layout;
  const oldX = l.x;
  const oldY = l.y;
  const movingUp = y && l.y > y;
  if (typeof x === "number")
    l.x = x;
  if (typeof y === "number")
    l.y = y;
  l.moved = true;
  let sorted = sortLayoutItemsByRowCol(layout);
  if (movingUp)
    sorted = sorted.reverse();
  const collisions = getAllCollisions(sorted, l);
  if (preventCollision && collisions.length) {
    l.x = oldX;
    l.y = oldY;
    l.moved = false;
    return layout;
  }
  for (let i = 0, len = collisions.length; i < len; i++) {
    const collision = collisions[i];
    if (collision.moved)
      continue;
    if (l.y > collision.y && l.y - collision.y > collision.h / 4)
      continue;
    if (collision.static) {
      layout = moveElementAwayFromCollision(layout, collision, l, isUserAction);
    } else {
      layout = moveElementAwayFromCollision(layout, l, collision, isUserAction);
    }
  }
  return layout;
}
function moveElementAwayFromCollision(layout, collidesWith, itemToMove, isUserAction) {
  const preventCollision = false;
  if (isUserAction) {
    const fakeItem = {
      x: itemToMove.x,
      y: itemToMove.y,
      w: itemToMove.w,
      h: itemToMove.h,
      i: "-1"
    };
    fakeItem.y = Math.max(collidesWith.y - itemToMove.h, 0);
    if (!getFirstCollision(layout, fakeItem)) {
      return moveElement(layout, itemToMove, void 0, fakeItem.y, preventCollision);
    }
  }
  return moveElement(layout, itemToMove, void 0, itemToMove.y + 1, preventCollision);
}
function setTransform(top, left, width, height) {
  const translate = "translate3d(" + left + "px," + (top < 0 ? 0 : top) + "px, 0)";
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: width + "px",
    height: height + "px",
    position: "absolute"
  };
}
function setTransformRtl(top, right, width, height) {
  const translate = "translate3d(" + right * -1 + "px," + (top < 0 ? 0 : top) + "px, 0)";
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: width + "px",
    height: height + "px",
    position: "absolute"
  };
}
function setTopLeft(top, left, width, height) {
  return {
    top: top + "px",
    left: left + "px",
    width: width + "px",
    height: height + "px",
    position: "absolute"
  };
}
function setTopRight(top, right, width, height) {
  return {
    top: top + "px",
    right: right + "px",
    width: width + "px",
    height: height + "px",
    position: "absolute"
  };
}
function sortLayoutItemsByRowCol(layout) {
  return [...layout].sort((a, b) => {
    if (a.y === b.y && a.x === b.x) {
      return 0;
    }
    if (a.y > b.y || a.y === b.y && a.x > b.x) {
      return 1;
    }
    return -1;
  });
}
function validateLayout(layout, contextName = "Layout") {
  const subProps = ["x", "y", "w", "h"];
  if (!Array.isArray(layout))
    throw new Error(contextName + " must be an array!");
  for (let i = 0, len = layout.length; i < len; i++) {
    const item = layout[i];
    for (let j = 0; j < subProps.length; j++) {
      if (typeof item[subProps[j]] !== "number") {
        throw new Error("VueGridLayout: " + contextName + "[" + i + "]." + subProps[j] + " must be a number!");
      }
    }
    if (item.i && typeof item.i !== "string")
      ;
    if (item.static !== void 0 && typeof item.static !== "boolean") {
      throw new Error("VueGridLayout: " + contextName + "[" + i + "].static must be a boolean!");
    }
  }
}
mitt();
const eventBusKey = Symbol("eventBus");
const parentRootKey = Symbol("parentRoot");
const isDraggableKey = Symbol("isDraggable");
const isResizableKey = Symbol("isResizable");
const rowHeightKey = Symbol("rowHeight");
const maxRowsKey = Symbol("maxRows");
const colNumKey = Symbol("colNum");
const containerWidthKey = Symbol("containerWidth");
const marginKey = Symbol("margin");
const useCssTransformsKey = Symbol("useCssTransforms");
const isMirroredKey = Symbol("isMirrored");
function offsetXYFromParentOf(evt) {
  const offsetParent = evt.target.offsetParent || document.body;
  const offsetParentRect = offsetParent === document.body ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();
  const x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
  const y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;
  return { x, y };
}
function getControlPosition(e) {
  return offsetXYFromParentOf(e);
}
function isNum(num) {
  return typeof num === "number" && !isNaN(num);
}
function createCoreData(lastX, lastY, x, y) {
  const isStart = !isNum(lastX);
  if (isStart) {
    return {
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x,
      y
    };
  }
  return {
    deltaX: x - lastX,
    deltaY: y - lastY,
    lastX,
    lastY,
    x,
    y
  };
}
var GridItem_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__ = {
  name: "grid-item"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    isDraggable: {
      type: Boolean,
      default: null
    },
    isResizable: {
      type: Boolean,
      default: null
    },
    static: {
      type: Boolean,
      default: false
    },
    minH: {
      type: Number,
      default: 1
    },
    minW: {
      type: Number,
      default: 1
    },
    maxH: {
      type: Number,
      default: Infinity
    },
    maxW: {
      type: Number,
      default: Infinity
    },
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    w: {
      type: Number,
      required: true
    },
    h: {
      type: Number,
      required: true
    },
    i: {
      type: [Number, String],
      required: true
    },
    dragIgnoreFrom: {
      type: String,
      default: "a, button"
    },
    dragAllowFrom: {
      type: String,
      default: null
    },
    resizeIgnoreFrom: {
      type: String,
      default: "a, button"
    }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved"],
  setup(__props, { emit }) {
    const props = __props;
    const eventBus = inject(eventBusKey);
    const containerWidth = inject(containerWidthKey, ref(100));
    const rowHeight = inject(rowHeightKey, ref(10));
    const margin = inject(marginKey, ref([10, 10]));
    const maxRows = inject(maxRowsKey, ref(Infinity));
    const cols = inject(colNumKey, ref(12));
    const useCssTransforms = inject(useCssTransformsKey, ref(true));
    const dragEventSet = ref(false);
    const resizeEventSet = ref(false);
    const previousW = ref(0);
    const previousH = ref(0);
    const previousX = ref(0);
    const previousY = ref(0);
    const innerX = ref(props.x);
    const innerY = ref(props.y);
    const innerW = ref(props.w);
    const innerH = ref(props.h);
    const rtl = ref(false);
    const style = reactive({ data: { width: "0px", height: "0px" } });
    const lastX = ref(0);
    const lastY = ref(0);
    const lastW = ref(0);
    const lastH = ref(0);
    const resizing = reactive({ data: { width: 0, height: 0 } });
    const dragging = reactive({ data: { top: 0, left: 0 } });
    const itemContainer = ref(null);
    let interactObj;
    function tryMakeDraggable() {
      interactObj = interactObj != null ? interactObj : interact(itemContainer.value);
      if (draggable.value && !props.static) {
        const opts = {
          ignoreFrom: props.dragIgnoreFrom,
          allowFrom: props.dragAllowFrom
        };
        interactObj.draggable(opts);
        if (!dragEventSet.value) {
          dragEventSet.value = true;
          interactObj.on("dragstart dragmove dragend", (event) => {
            handleDrag(event);
          });
        }
      } else {
        interactObj.draggable({
          enabled: false
        });
      }
    }
    const isDragging = ref(false);
    const draggable = toRef(props, "isDraggable").value ? toRef(props, "isDraggable") : inject(isDraggableKey, ref(true));
    nextTick(() => {
      watch(draggable, () => {
        tryMakeDraggable();
      }, { immediate: true });
    });
    function tryMakeResizable() {
      interactObj = interactObj != null ? interactObj : interact(itemContainer.value);
      if (draggable.value && !props.static) {
        const maximum = calcPosition(0, 0, props.maxW, props.maxH);
        const minimum = calcPosition(0, 0, props.minW, props.minH);
        const opts = {
          preserveAspectRatio: true,
          edges: {
            left: renderRtl.value && "." + resizableHandleClass.value.trim().replace(" ", "."),
            right: renderRtl.value ? false : "." + resizableHandleClass.value.trim().replace(" ", "."),
            bottom: "." + resizableHandleClass.value.trim().replace(" ", "."),
            top: false
          },
          ignoreFrom: props.resizeIgnoreFrom,
          restrictSize: {
            min: {
              height: minimum.height,
              width: minimum.width
            },
            max: {
              height: maximum.height,
              width: maximum.width
            }
          }
        };
        interactObj.resizable(opts);
        if (!resizeEventSet.value) {
          resizeEventSet.value = true;
          interactObj.on("resizestart resizemove resizeend", (event) => {
            handleResize(event);
          });
        }
      } else {
        interactObj.resizable({
          enabled: false
        });
      }
    }
    const isResizing = ref(false);
    const resizable = toRef(props, "isResizable").value ? toRef(props, "isResizable") : inject(isResizableKey, ref(true));
    nextTick(() => {
      watch(resizable, () => {
        tryMakeResizable();
      }, { immediate: true });
    });
    watch(() => props.static, () => {
      tryMakeDraggable();
      tryMakeResizable();
    });
    const createStyle = () => {
      if (props.x + props.w > cols.value) {
        innerX.value = 0;
        innerW.value = props.w > cols.value ? cols.value : props.w;
      } else {
        innerX.value = props.x;
        innerW.value = props.w;
      }
      const pos = calcPosition(innerX.value, innerY.value, innerW.value, innerH.value);
      if (isDragging.value) {
        pos.top = dragging.data.top;
        if (renderRtl.value) {
          pos.right = dragging.data.left;
        } else {
          pos.left = dragging.data.left;
        }
      }
      if (isResizing.value) {
        pos.width = resizing.data.width;
        pos.height = resizing.data.height;
      }
      let _style = null;
      if (useCssTransforms) {
        if (renderRtl.value) {
          _style = setTransformRtl(pos.top, pos.right, pos.width, pos.height);
        } else {
          _style = setTransform(pos.top, pos.left, pos.width, pos.height);
        }
      } else {
        if (renderRtl.value) {
          _style = setTopRight(pos.top, pos.right, pos.width, pos.height);
        } else {
          _style = setTopLeft(pos.top, pos.left, pos.width, pos.height);
        }
      }
      style.data = _style;
    };
    onMounted(() => {
      createStyle();
      const compact2 = () => {
        createStyle();
      };
      const compactHandler = () => {
        compact2();
      };
      eventBus.on("compact", compactHandler);
    });
    const resizableAndNotStatic = computed(() => {
      return resizable.value && !props.static;
    });
    const isMirrored = inject(isMirroredKey, ref(false));
    const renderRtl = computed(() => {
      return isMirrored.value ? !rtl.value : rtl.value;
    });
    watch(() => renderRtl.value, () => {
      tryMakeResizable();
      createStyle();
    });
    watch([containerWidth, cols], () => {
      tryMakeResizable();
      createStyle();
      emitContainerResized();
    });
    watch([() => props.minH, () => props.maxH, () => props.minW, () => props.maxW], () => {
      tryMakeResizable();
    });
    const isAndroid = computed(() => {
      return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
    });
    const draggableOrResizableAndNotStatic = computed(() => {
      return (draggable.value || resizable.value) && !props.static;
    });
    const classObj = computed(() => {
      return {
        "vue-resizable": resizableAndNotStatic.value,
        static: props.static,
        resizing: isResizing.value,
        "vue-draggable-dragging": isDragging.value,
        cssTransforms: useCssTransforms.value,
        "render-rtl": renderRtl.value,
        "disable-userselect": isDragging.value,
        "no-touch": isAndroid.value && draggableOrResizableAndNotStatic.value
      };
    });
    const resizableHandleClass = computed(() => {
      if (renderRtl.value) {
        return "vue-resizable-handle vue-rtl-resizable-handle";
      }
      return "vue-resizable-handle";
    });
    const calcColWidth = () => {
      return (containerWidth.value - (margin.value[0] || 10) * (cols.value + 1)) / cols.value;
    };
    const calcXY = (top, left) => {
      const colWidth = calcColWidth();
      let x = Math.round((left - margin.value[0]) / (colWidth + margin.value[0]));
      let y = Math.round((top - margin.value[1]) / (rowHeight.value + margin.value[1]));
      x = Math.max(Math.min(x, cols.value - innerW.value), 0);
      y = Math.max(Math.min(y, maxRows.value - innerH.value), 0);
      return { x, y };
    };
    const handleDrag = (event) => {
      if (props.static)
        return;
      if (isResizing.value)
        return;
      const position = getControlPosition(event);
      if (position === null)
        return;
      const { x, y } = position;
      const newPosition = { top: 0, left: 0 };
      switch (event.type) {
        case "dragstart": {
          previousX.value = innerX.value;
          previousY.value = innerY.value;
          const parentRect = event.target.offsetParent.getBoundingClientRect();
          const clientRect = event.target.getBoundingClientRect();
          if (renderRtl.value) {
            newPosition.left = (clientRect.right - parentRect.right) * -1;
          } else {
            newPosition.left = clientRect.left - parentRect.left;
          }
          newPosition.top = clientRect.top - parentRect.top;
          dragging.data = newPosition;
          isDragging.value = true;
          break;
        }
        case "dragend": {
          if (!isDragging.value)
            return;
          const parentRect = event.target.offsetParent.getBoundingClientRect();
          const clientRect = event.target.getBoundingClientRect();
          if (renderRtl.value) {
            newPosition.left = (clientRect.right - parentRect.right) * -1;
          } else {
            newPosition.left = clientRect.left - parentRect.left;
          }
          newPosition.top = clientRect.top - parentRect.top;
          dragging.data = { top: 0, left: 0 };
          isDragging.value = false;
          break;
        }
        case "dragmove": {
          const coreEvent = createCoreData(lastX.value, lastY.value, x, y);
          if (renderRtl.value) {
            newPosition.left = dragging.data.left - coreEvent.deltaX;
          } else {
            newPosition.left = dragging.data.left + coreEvent.deltaX;
          }
          newPosition.top = dragging.data.top + coreEvent.deltaY;
          dragging.data = newPosition;
          break;
        }
      }
      let pos = null;
      if (renderRtl.value) {
        pos = calcXY(newPosition.top, newPosition.left);
      } else {
        pos = calcXY(newPosition.top, newPosition.left);
      }
      lastX.value = x;
      lastY.value = y;
      if (innerX.value !== pos.x || innerY.value !== pos.y) {
        emit("move", props.i, pos.x, pos.y);
      }
      if (event.type === "dragend" && (previousX.value !== innerX.value || previousY.value !== innerY.value)) {
        emit("moved", props.i, pos.x, pos.y);
      }
      eventBus.emit("dragEvent", {
        eventType: event.type,
        i: props.i,
        x: pos.x,
        y: pos.y,
        h: innerH.value,
        w: innerW.value
      });
    };
    function calcPosition(x, y, w, h, Rtl = renderRtl.value) {
      const colWidth = calcColWidth();
      let out;
      if (Rtl) {
        out = {
          right: Math.round(colWidth * x + (x + 1) * margin.value[0]),
          top: Math.round(rowHeight.value * y + (y + 1) * margin.value[1]),
          width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * margin.value[0]),
          height: h === Infinity ? h : Math.round(rowHeight.value * h + Math.max(0, h - 1) * margin.value[1])
        };
      } else {
        out = {
          left: Math.round(colWidth * x + (x + 1) * margin.value[0]),
          top: Math.round(rowHeight.value * y + (y + 1) * margin.value[1]),
          width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * margin.value[0]),
          height: h === Infinity ? h : Math.round(rowHeight.value * h + Math.max(0, h - 1) * margin.value[1])
        };
      }
      return out;
    }
    const calcWH = (height, width, autoSizeFlag = false) => {
      const colWidth = calcColWidth();
      let w = Math.round((width + margin.value[0]) / (colWidth + margin.value[0]));
      let h = 0;
      if (!autoSizeFlag) {
        h = Math.round((height + margin.value[1]) / (rowHeight.value + margin.value[1]));
      } else {
        h = Math.ceil((height + margin.value[1]) / (rowHeight.value + margin.value[1]));
      }
      w = Math.max(Math.min(w, cols.value - innerX.value), 0);
      h = Math.max(Math.min(h, maxRows.value - innerY.value), 0);
      return { w, h };
    };
    const handleResize = (event) => {
      if (props.static)
        return;
      const position = getControlPosition(event);
      if (position === null)
        return;
      const { x, y } = position;
      const newSize = { width: 0, height: 0 };
      let pos = null;
      switch (event.type) {
        case "resizestart": {
          previousW.value = innerW.value;
          previousH.value = innerH.value;
          pos = calcPosition(innerX.value, innerY.value, innerW.value, innerH.value);
          newSize.width = pos.width;
          newSize.height = pos.height;
          resizing.data = newSize;
          isResizing.value = true;
          break;
        }
        case "resizemove": {
          const coreEvent = createCoreData(lastW.value, lastH.value, x, y);
          if (renderRtl.value) {
            newSize.width = resizing.data.width - coreEvent.deltaX;
          } else {
            newSize.width = resizing.data.width + coreEvent.deltaX;
          }
          newSize.height = resizing.data.height + coreEvent.deltaY;
          resizing.data = newSize;
          break;
        }
        case "resizeend": {
          pos = calcPosition(innerX.value, innerY.value, innerW.value, innerH.value);
          newSize.width = pos.width;
          newSize.height = pos.height;
          resizing.data = { width: 0, height: 0 };
          isResizing.value = false;
          break;
        }
      }
      pos = calcWH(newSize.height, newSize.width);
      if (pos.w < props.minW) {
        pos.w = props.minW;
      }
      if (pos.w > props.maxW) {
        pos.w = props.maxW;
      }
      if (pos.h < props.minH) {
        pos.h = props.minH;
      }
      if (pos.h > props.maxH) {
        pos.h = props.maxH;
      }
      if (pos.h < 1) {
        pos.h = 1;
      }
      if (pos.w < 1) {
        pos.w = 1;
      }
      lastW.value = x;
      lastH.value = y;
      if (innerW.value !== pos.w || innerH.value !== pos.h) {
        emit("resize", props.i, pos.h, pos.w, newSize.height, newSize.width);
      }
      if (event.type === "resizeend" && (previousW.value !== innerW.value || previousH.value !== innerH.value)) {
        emit("resized", props.i, pos.h, pos.w, newSize.height, newSize.width);
      }
      eventBus.emit("resizeEvent", {
        eventType: event.type,
        i: props.i,
        x: innerX.value,
        y: innerY.value,
        h: pos.h,
        w: pos.w
      });
    };
    const emitContainerResized = () => {
      const styleProps = { height: "0px", width: "0px" };
      const arr = ["width", "height"];
      for (const prop of arr) {
        const val = style.data[prop];
        const matches = val.match(/^(\d+)px$/);
        if (!matches)
          return;
        styleProps[prop] = matches[1];
      }
      emit("container-resized", props.i, props.h, props.w, styleProps.height, styleProps.width);
    };
    watch(rowHeight, () => {
      createStyle();
      emitContainerResized();
    });
    watch(() => props.x, (newVal) => {
      innerX.value = newVal;
      createStyle();
    });
    watch(() => props.y, (newVal) => {
      innerY.value = newVal;
      createStyle();
    });
    watch(() => props.h, (newVal) => {
      innerH.value = newVal;
      createStyle();
    });
    watch(() => props.w, (newVal) => {
      innerW.value = newVal;
      createStyle();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "itemContainer",
        ref: itemContainer,
        class: normalizeClass(["vue-grid-item", unref(classObj)]),
        style: normalizeStyle(unref(style).data)
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        unref(resizableAndNotStatic) ? (openBlock(), createElementBlock("span", {
          key: 0,
          ref: "handle",
          class: normalizeClass(unref(resizableHandleClass))
        }, null, 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
}));
var GridItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-faa57b50"]]);
function getBreakpointFromWidth(breakpoints, width) {
  const sorted = sortBreakpoints(breakpoints);
  let matching = sorted[0];
  for (let i = 1, len = sorted.length; i < len; i++) {
    const breakpointName = sorted[i];
    if (width > breakpoints[breakpointName])
      matching = breakpointName;
  }
  return matching;
}
function getColsFromBreakpoint(breakpoint, cols) {
  if (!cols[breakpoint]) {
    throw new Error("ResponsiveGridLayout: `cols` entry for breakpoint " + breakpoint + " is missing!");
  }
  return cols[breakpoint];
}
function findOrGenerateResponsiveLayout(orgLayout, layouts, breakpoints, breakpoint, lastBreakpoint, cols, verticalCompact) {
  if (layouts[breakpoint])
    return cloneLayout(layouts[breakpoint]);
  let layout = orgLayout;
  const breakpointsSorted = sortBreakpoints(breakpoints);
  const breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));
  for (let i = 0, len = breakpointsAbove.length; i < len; i++) {
    const b = breakpointsAbove[i];
    if (layouts[b]) {
      layout = layouts[b];
      break;
    }
  }
  layout = cloneLayout(layout || []);
  return compact(correctBounds(layout, { cols }), verticalCompact);
}
function sortBreakpoints(breakpoints) {
  const keys = Object.keys(breakpoints);
  return keys.sort((a, b) => {
    return breakpoints[a] - breakpoints[b];
  });
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined";
function unrefElement(elRef) {
  var _a2;
  const plain = unref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$c.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$c.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
  let observer;
  const isSupported = window2 && "ResizeObserver" in window2;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window2 && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var _a, _b;
isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
var GridLayout_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    autoSize: {
      type: Boolean,
      default: true
    },
    colNum: {
      type: Number,
      default: 12
    },
    rowHeight: {
      type: Number,
      default: 10
    },
    maxRows: {
      type: Number,
      default: Infinity
    },
    margin: {
      type: Array,
      default: () => {
        return [10, 10];
      }
    },
    isDraggable: {
      type: Boolean,
      default: true
    },
    isResizable: {
      type: Boolean,
      default: true
    },
    isMirrored: {
      type: Boolean,
      default: false
    },
    useCssTransforms: {
      type: Boolean,
      default: true
    },
    verticalCompact: {
      type: Boolean,
      default: true
    },
    layout: {
      type: Array,
      required: true
    },
    responsive: {
      type: Boolean,
      default: false
    },
    responsiveLayouts: {
      type: Object,
      default: () => {
        return {};
      }
    },
    breakpoints: {
      type: Object,
      default: () => {
        return { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
      }
    },
    responsiveCols: {
      type: Object,
      default: () => {
        return { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
      }
    },
    preventCollision: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "layout-created",
    "layout-mounted",
    "layout-before-mount",
    "layout-updated",
    "layout-ready",
    "update:layout",
    "breakpoint-changed"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const eventBus = mitt();
    const layoutContainer = ref(null);
    provide(eventBusKey, eventBus);
    provide(parentRootKey, layoutContainer);
    provide(isDraggableKey, toRef(props, "isDraggable"));
    provide(isResizableKey, toRef(props, "isResizable"));
    provide(isMirroredKey, toRef(props, "isMirrored"));
    provide(rowHeightKey, toRef(props, "rowHeight"));
    provide(maxRowsKey, toRef(props, "maxRows"));
    provide(colNumKey, toRef(props, "colNum"));
    provide(marginKey, toRef(props, "margin"));
    provide(useCssTransformsKey, toRef(props, "useCssTransforms"));
    const width = ref(100);
    useResizeObserver(layoutContainer, (entries) => {
      const entry = entries[0];
      width.value = entry.contentRect.width;
      updateHeight();
    });
    provide(containerWidthKey, width);
    const mergedStyle = ref({});
    const isDragging = ref(false);
    const placeholder = reactive({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      i: -1
    });
    let layouts = {};
    let lastBreakpoint = null;
    let originalLayout;
    const containerHeight = () => {
      if (!props.autoSize)
        return;
      const buffer = 15;
      return bottom(props.layout) * (props.rowHeight + props.margin[1]) + props.margin[1] + buffer + "px";
    };
    const updateHeight = () => {
      mergedStyle.value = {
        height: containerHeight()
      };
    };
    const findDifference = (layout, originalLayout2) => {
      const uniqueResultOne = layout.filter((obj) => {
        return !originalLayout2.some((obj2) => {
          return obj.i === obj2.i;
        });
      });
      const uniqueResultTwo = originalLayout2.filter((obj) => {
        return !layout.some((obj2) => {
          return obj.i === obj2.i;
        });
      });
      return uniqueResultOne.concat(uniqueResultTwo);
    };
    const initResponsiveFeatures = () => {
      layouts = Object.assign({}, props.responsiveLayouts);
    };
    const layoutUpdate = () => {
      if (props.layout !== void 0) {
        if (props.layout.length !== originalLayout.length) {
          const diff = findDifference(props.layout, originalLayout);
          if (diff.length > 0) {
            if (props.layout.length > originalLayout.length) {
              originalLayout = originalLayout.concat(diff);
            } else {
              originalLayout = originalLayout.filter((obj) => {
                return !diff.some((obj2) => {
                  return obj.i === obj2.i;
                });
              });
            }
          }
          initResponsiveFeatures();
        }
        compact(props.layout, props.verticalCompact);
        updateHeight();
        emit("layout-updated", props.layout);
      }
    };
    watch([() => props.layout.length, () => props.layout, () => props.margin], () => {
      layoutUpdate();
    });
    watch(() => props.responsive, () => {
      if (!props.responsive) {
        emit("update:layout", originalLayout);
      }
    });
    const responsiveGridLayout = () => {
      const newBreakpoint = getBreakpointFromWidth(props.breakpoints, width.value);
      const newCols = getColsFromBreakpoint(newBreakpoint, props.responsiveCols);
      if (lastBreakpoint !== null && !layouts[lastBreakpoint])
        layouts[lastBreakpoint] = cloneLayout(props.layout);
      const layout = findOrGenerateResponsiveLayout(originalLayout, layouts, props.breakpoints, newBreakpoint, lastBreakpoint, newCols, props.verticalCompact);
      layouts[newBreakpoint] = layout;
      if (lastBreakpoint !== newBreakpoint) {
        emit("breakpoint-changed", newBreakpoint, layout);
      }
      emit("update:layout", layout);
      lastBreakpoint = newBreakpoint;
      eventBus.emit("setColNum", getColsFromBreakpoint(newBreakpoint, props.responsiveCols));
    };
    const resizeEvent = (eventName, id, x, y, h, w) => {
      let l = getLayoutItem(props.layout, id);
      if (l === void 0 || l === null) {
        l = { h: 0, w: 0, x: 0, y: 0, i: id };
      }
      let hasCollisions = false;
      if (props.preventCollision) {
        const collisions = getAllCollisions(props.layout, __spreadProps(__spreadValues({}, l), { w, h })).filter((layoutItem) => layoutItem.i !== l.i);
        hasCollisions = collisions.length > 0;
        if (hasCollisions) {
          let leastX = Infinity;
          let leastY = Infinity;
          collisions.forEach((layoutItem) => {
            if (layoutItem.x > l.x)
              leastX = Math.min(leastX, layoutItem.x);
            if (layoutItem.y > l.y)
              leastY = Math.min(leastY, layoutItem.y);
          });
          if (Number.isFinite(leastX))
            l.w = leastX - l.x;
          if (Number.isFinite(leastY))
            l.h = leastY - l.y;
        }
      }
      if (!hasCollisions) {
        l.w = w;
        l.h = h;
      }
      if (eventName === "resizestart" || eventName === "resizemove") {
        placeholder.i = id;
        placeholder.x = x;
        placeholder.y = y;
        placeholder.w = l.w;
        placeholder.h = l.h;
        nextTick(() => {
          isDragging.value = true;
        });
      } else {
        nextTick(() => {
          isDragging.value = false;
        });
      }
      if (props.responsive)
        responsiveGridLayout();
      compact(props.layout, props.verticalCompact);
      eventBus.emit("compact");
      updateHeight();
      if (eventName === "resizeend")
        emit("layout-updated", props.layout);
    };
    function resizeEventHandler({
      eventType,
      i,
      x,
      y,
      h,
      w
    }) {
      resizeEvent(eventType, i, x, y, h, w);
    }
    const dragEvent = (eventName, id, x, y, h, w) => {
      let l = getLayoutItem(props.layout, id);
      if (l === void 0 || l === null) {
        l = { h: 0, w: 0, x: 0, y: 0, i: id };
      }
      if (eventName === "dragmove" || eventName === "dragstart") {
        placeholder.i = id;
        placeholder.x = l.x;
        placeholder.y = l.y;
        placeholder.w = w;
        placeholder.h = h;
        nextTick(() => {
          isDragging.value = true;
        });
      } else {
        nextTick(() => {
          isDragging.value = false;
        });
      }
      moveElement(props.layout, l, x, y, true, props.preventCollision);
      compact(props.layout, props.verticalCompact);
      eventBus.emit("compact");
      updateHeight();
      if (eventName === "dragend")
        emit("layout-updated", props.layout);
    };
    const dragEventHandler = ({
      eventType,
      i,
      x,
      y,
      h,
      w
    }) => {
      dragEvent(eventType, i, x, y, h, w);
    };
    eventBus.on("resizeEvent", resizeEventHandler);
    eventBus.on("dragEvent", dragEventHandler);
    emit("layout-created", props.layout);
    emit("layout-before-mount", props.layout);
    onBeforeUnmount(() => {
      eventBus.off("resizeEvent", resizeEventHandler);
      eventBus.off("dragEvent", dragEventHandler);
    });
    onMounted(() => {
      emit("layout-mounted", props.layout);
      nextTick(() => {
        validateLayout(props.layout);
        originalLayout = props.layout;
        nextTick(() => {
          initResponsiveFeatures();
          compact(props.layout, props.verticalCompact);
          emit("layout-updated", props.layout);
          updateHeight();
        });
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "layoutContainer",
        ref: layoutContainer,
        class: "vue-grid-layout",
        style: normalizeStyle(mergedStyle.value)
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        withDirectives(createVNode(GridItem, {
          ref: "gridItem",
          class: "vue-grid-placeholder",
          x: unref(placeholder).x,
          y: unref(placeholder).y,
          w: unref(placeholder).w,
          h: unref(placeholder).h,
          i: unref(placeholder).i
        }, null, 8, ["x", "y", "w", "h", "i"]), [
          [vShow, isDragging.value]
        ])
      ], 4);
    };
  }
});
var GridLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-25c842bc"]]);
const GridLayoutPlugin = {
  install(app) {
    app.component("grid-item", GridItem);
    app.component("grid-layout", GridLayout);
  }
};
export { GridItem, GridLayout, GridLayoutPlugin as default };
